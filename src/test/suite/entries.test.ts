/* eslint-disable @typescript-eslint/naming-convention */
import * as assert from "assert";
import {
  findMissingEntries,
  langEntriesToKeyLangMap,
} from "../../utils/entries";
import { constructTestEntries } from "../data/missingEntries";
import { parseTranslations } from "../../utils/editor";

describe("Entries Utils Test Suite", () => {
  it("Parsing translation text", () => {
    const textToEntriesList = [
      {
        text: '{"KEY1":"Text 1", "Key 2": "Text with \\n new \\nlines"}',
        entries: [
          { key: "KEY1", value: "Text 1" },
          { key: "Key 2", value: "Text with \n new \nlines" },
        ],
      },
      {
        text: '{ "KEY1": { "KEY2": "VALUE" }, "KEY2": 123 }',
        entries: [{ key: "KEY2", value: "VALUE" }],
      },
    ];
    textToEntriesList.forEach(({ text, entries }) => {
      assert.deepEqual(parseTranslations(text), entries);
    });
    assert.deepEqual(parseTranslations("{ invalid json }"), undefined);
  });

  it("findMissingEntries function test", () => {
    assert.deepEqual(
      findMissingEntries(
        [
          { key: "ENTRY_1", value: "Value 1" },
          { key: "ENTRY_2", value: "Value 2" },
          { key: "ENTRY_3", value: "Value 3" },
        ],
        ["en_us", "de"],
        [
          [
            { key: "ENTRY_1", value: "Translation 1" },
            { key: "ENTRY_3", value: "Translation 3" },
          ],
          [
            { key: "ENTRY_1", value: "Translation 1" },
            { key: "ENTRY_3", value: "" },
          ],
        ]
      ),
      {
        en_us: [{ key: "ENTRY_2", value: "Value 2" }],
        de: [
          { key: "ENTRY_2", value: "Value 2" },
          { key: "ENTRY_3", value: "Value 3" },
        ],
      }
    );
  });

  it("langEntriesToKeyLangMap function test", () => {
    const langCodes = ["en_us", "de", "fr_fr"];
    const { missingEntries } = constructTestEntries(langCodes);

    assert.deepEqual(langEntriesToKeyLangMap(missingEntries), {
      KEY0: new Set([langCodes[0], langCodes[1]]),
      KEY1: new Set([langCodes[0], langCodes[1]]),
      KEY2: new Set([langCodes[0], langCodes[1], langCodes[2]]),
      KEY3: new Set([langCodes[0], langCodes[1], langCodes[2]]),
      KEY4: new Set([langCodes[0], langCodes[1], langCodes[2]]),
      KEY5: new Set([langCodes[0], langCodes[1], langCodes[2]]),
      KEY6: new Set([langCodes[0], langCodes[1], langCodes[2]]),
      KEY7: new Set([langCodes[0], langCodes[1], langCodes[2]]),
      KEY8: new Set([langCodes[1], langCodes[2]]),
      KEY9: new Set([langCodes[2]]),
    });
  });
});
