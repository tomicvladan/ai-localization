import OpenAI from "openai";
import {
  DEFAULT_MAX_TRANSLATIONS_PER_REQUEST,
  LLMTranslator,
} from "./llm-translator";
import { LangEntriesMap } from "../model/entry";
import {
  codeToLanguage,
  codeToLowerCaseLanguage,
  removeSpaces,
  simplifyLocaleCode,
} from "../utils/locales";
import { Progress, ProgressCallback } from "./progress";
import { Request } from "../model/request";
import { encodeDoubleQuotes, replaceDoubleQuotes } from "../utils/editor";

export type GPTModel =
  | "gpt-3.5-turbo"
  | "gpt-3.5-turbo-1106"
  | "gpt-4"
  | "gpt-4-32k-0613";

export class ChatGPTTranslator extends LLMTranslator {
  protected openai: OpenAI;

  constructor(
    apiKey: string,
    maxTrnaslationsPerResponse: number = DEFAULT_MAX_TRANSLATIONS_PER_REQUEST,
    private model: GPTModel = "gpt-3.5-turbo"
  ) {
    super(apiKey, maxTrnaslationsPerResponse);

    this.openai = new OpenAI({ apiKey });
  }

  protected constructPrompts(fromCode: string, requests: Request[]): string[] {
    return requests.map((request) =>
      this.generateSinglePrompt(fromCode, request)
    );
  }

  protected async sendRequests(
    prompts: string[],
    onProgressUpdate: ProgressCallback
  ): Promise<string[]> {
    const responses: string[] = [];
    const progress = new Progress(prompts.length, onProgressUpdate);
    let canceled = false;

    try {
      for (const prompt of prompts) {
        if (canceled) {
          throw new Error("Canceled");
        }

        progress.onRequestStart();

        const completion = await this.openai.chat.completions.create({
          messages: [{ role: "user", content: prompt }],
          model: this.model,
          temperature: 0.25,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          response_format:
            this.model === "gpt-3.5-turbo-1106"
              ? { type: "json_object" }
              : undefined,
        });

        responses.push(completion.choices[0].message.content || "{}"); // JSON string

        canceled = progress.onRequestFinish();
      }
    } catch (error) {
      throw error;
    } finally {
      progress.finalize();
    }

    return responses;
  }

  protected parseResponses(
    responses: string[],
    requests: Request[]
  ): LangEntriesMap {
    const translations: LangEntriesMap = {};

    responses.forEach((response, index) => {
      const request = requests[index];

      const requestTranslations = this.parseSingleResponse(
        response,
        requests[index]
      );

      request.langCodes.forEach((langCode) => {
        if (
          Array.isArray(requestTranslations[langCode]) &&
          requestTranslations[langCode].length === request.entries.length
        ) {
          translations[langCode] = (translations[langCode] || []).concat(
            requestTranslations[langCode]
          );
        } else {
          console.log(`error for ${langCode} in response ${index}`);

          translations[langCode] = (translations[langCode] || []).concat(
            request.entries.map(({ key }) => ({ key, value: "" }))
          );
        }
      });
    });

    return translations;
  }

  private generateSinglePrompt(fromCode: string, request: Request): string {
    const fromLanguage = codeToLanguage(fromCode);
    const toLanguages = request.langCodes
      .map((code) => codeToLanguage(code, false))
      .join(", ");
    const textInstances = request.entries
      .map(({ value }) => `"${replaceDoubleQuotes(value)}"`)
      .join(", ");

    return `Please translate me each text instance inside quotes from ${fromLanguage} to ${toLanguages}: ${textInstances}. Write output in JSON format where there is one entry for each language that contains an array of translated phrases in provided order.`;
  }

  private parseSingleResponse(
    response: string,
    request: Request
  ): LangEntriesMap {
    let translations: any = {};

    try {
      translations = JSON.parse(encodeDoubleQuotes(response));
    } catch (error) {
      console.warn("Cannot parse response from Chat GPT");
    }

    return request.langCodes.reduce((entriesMap, langCode) => {
      const phrases =
        translations[codeToLanguage(langCode, false)] ||
        translations[codeToLanguage(langCode, true)] ||
        translations[codeToLowerCaseLanguage(langCode, false)] ||
        translations[codeToLowerCaseLanguage(langCode, true)] ||
        translations[langCode] ||
        translations[simplifyLocaleCode(langCode)];

      if (Array.isArray(phrases)) {
        entriesMap[langCode] = request.entries.map(({ key }, index) => ({
          key,
          value: phrases[index] || "",
        }));
      } else if (phrases) {
        entriesMap[langCode] = request.entries.map(({ key, value }) => ({
          key,
          value: phrases[value] || phrases[removeSpaces(value)] || "",
        }));
      }

      return entriesMap;
    }, {} as LangEntriesMap);
  }
}
