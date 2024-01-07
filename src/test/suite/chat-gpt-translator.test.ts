/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from "vscode";
import { createStubInstance } from "sinon";
import OpenAI from "openai";
import { ChatGPTTranslator } from "../../services/chat-gpt-translator";
import assert = require("assert");
import { Entry, LangEntriesMap } from "../../model/entry";
import langCodes from "../../assets/lang-codes";
import { randomString } from "../utils";
import { Request } from "../../model/request";

describe("Chat GPT tests", () => {
  vscode.window.showInformationMessage("Chat GPT functions tests");

  let chatGptService: ChatGPTTranslator;

  before(() => {
    chatGptService = new ChatGPTTranslator("", 100);
    (chatGptService as any).openai = createStubInstance(OpenAI);
  });

  it("generateSinglePrompt function test", () => {
    assert.equal(
      (chatGptService as any).generateSinglePrompt("en_us", {
        langCodes: ["fr_ca", "rw", "sr_latn_rs"],
        entries: [
          { key: "ENTRY_1", value: "Hello" },
          { key: "ENTRY_2", value: "How are you?" },
          { key: "ENTRY_3", value: "Greetings" },
        ],
      } as Request),
      'Please translate me each text instance inside quotes from English to French (Canada), Kinyarwanda, Serbian (Latin, Serbia): "Hello", "How are you?", "Greetings". Write output in JSON format where there is one entry for each language that contains an array of translated phrases in provided order.'
    );
  });

  it("constructPrompts function test", () => {
    const toCodes: string[] = [];
    const entries: Entry[] = [];

    const codes = Object.keys(langCodes);

    for (let i = 0; i < 10; i++) {
      toCodes.push(codes[Math.floor(Math.random() * codes.length)]);
      entries.push({
        key: randomString(),
        value: randomString(),
      });
    }

    const prompts = (chatGptService as any).constructPrompts("en_us", [
      {
        langCodes: toCodes,
        entries,
      },
      {
        langCodes: ["en_us"],
        entries: [
          {
            key: randomString(),
            value: randomString(),
          },
        ],
      },
    ] as Request[]);

    assert.equal(prompts.length, 2);
  });

  const constructParsedEntries = (
    langCodes: string[],
    languages: string[],
    requestNumber: number,
    requestSize: number
  ): LangEntriesMap => {
    const result: LangEntriesMap = {};

    langCodes.forEach((lang, index) => {
      const entries: Entry[] = (result[lang] = []);

      for (let i = 0; i < requestNumber; i++) {
        for (let j = 0; j < requestSize; j++) {
          entries.push({
            key: `${i} ${j}`,
            value: `${languages[index]} ${i} ${j}`,
          });
        }
      }
    });

    return result;
  };

  const constructResponses = (
    languages: string[],
    requestNumber: number,
    requestSize: number,
    requestOffset: number = 0,
    keyOffset: number = 0
  ): string[] => {
    const responses = [];

    for (let i = requestOffset; i < requestOffset + requestNumber; i++) {
      let response = "{ ";
      languages.forEach((lang, langIndex) => {
        response += `"${lang}": [ `;

        for (let j = 0 + keyOffset; j < keyOffset + requestSize; j++) {
          response += `"${lang} ${i} ${j}"${j === requestSize - 1 ? "" : ", "}`;
        }

        response += " ]";

        if (langIndex < languages.length - 1) {
          response += ", ";
        }
      });

      response += " }";

      responses.push(response);
    }

    return responses;
  };

  const constructRequests = (
    originalLanCode: string,
    langCodes: string[],
    requestNumber: number,
    requestSize: number,
    requestOffset: number = 0,
    keyOffset: number = 0
  ): Request[] => {
    const requests: Request[] = [];

    for (let i = requestOffset; i < requestOffset + requestNumber; i++) {
      const request: Request = {
        langCodes,
        entries: [],
      };

      for (let j = 0 + keyOffset; j < keyOffset + requestSize; j++) {
        request.entries.push({
          key: `${i} ${j}`,
          value: `${originalLanCode} ${i} ${j}`,
        });
      }

      requests.push(request);
    }

    return requests;
  };

  it("parseResponses function test", () => {
    const languages = ["English", "German", "French (France)"];
    const langCodes = ["en_us", "de", "fr_fr"];
    const responses = constructResponses(languages, 10, 33, 0).concat(
      constructResponses(languages, 1, 1, 10)
    );
    const parsedResponses = constructParsedEntries(
      langCodes,
      languages,
      10,
      33
    );
    langCodes.forEach((lang, index) => {
      parsedResponses[lang].push({
        key: "10 0",
        value: `${languages[index]} 10 0`,
      });
    });

    const requests = constructRequests(
      langCodes[0],
      langCodes,
      10,
      33,
      0
    ).concat(constructRequests(langCodes[0], langCodes, 1, 1, 10));

    const realParsedResponse = (chatGptService as any).parseResponses(
      responses,
      requests
    );

    assert.deepEqual(realParsedResponse, parsedResponses);
  });
});
