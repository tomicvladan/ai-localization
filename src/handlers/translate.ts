import { Entry, LangEntriesMap } from "../model/entry";
import { getConfig } from "../utils/config";
import { ChatGPTTranslator, GPTModel } from "../services/chat-gpt-translator";
import { ProgressCallback } from "../services/progress";
import { DEFAULT_MAX_TRANSLATIONS_PER_REQUEST } from "../services/llm-translator";
import { langWithEntriesCount } from "../utils/entries";

export async function translate(
  fromCode: string,
  entries: Entry[],
  missingEntries: LangEntriesMap,
  onProgressUpdate: ProgressCallback
): Promise<LangEntriesMap> {
  const apiKey = getConfig<string>("openAIKey");

  if (!apiKey) {
    throw new Error("API key is not set.");
  }

  let maxTrnaslationsPerResponse = Number(
    getConfig<number>("maxTranslationsPerResponse")
  );

  maxTrnaslationsPerResponse = Number.isNaN(maxTrnaslationsPerResponse)
    ? DEFAULT_MAX_TRANSLATIONS_PER_REQUEST
    : maxTrnaslationsPerResponse;

  if (maxTrnaslationsPerResponse < langWithEntriesCount(missingEntries)) {
    throw new Error("maxTranslationsPerResponse value is too small");
  }

  const model = getConfig<string>("model");

  const translator = new ChatGPTTranslator(
    apiKey,
    maxTrnaslationsPerResponse,
    model as GPTModel
  );

  const translations = await translator.translate(
    fromCode,
    entries,
    missingEntries,
    onProgressUpdate
  );

  return translations;
}
