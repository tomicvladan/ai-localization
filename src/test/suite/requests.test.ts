/* eslint-disable @typescript-eslint/naming-convention */
import * as assert from "assert";

import {
  constructMultiLangRequest,
  constructSingleLangRequest,
  removeEntriesFromRequest,
} from "../../utils/requests";
import { constructTestEntries } from "../data/missingEntries";

describe("Request Utils Test Suite", () => {
  it("constructMultiLangRequest function test", () => {
    const langCodes = ["en_us", "de", "fr_fr"];

    const { entries, missingEntries } = constructTestEntries(langCodes);

    assert.deepEqual(constructMultiLangRequest(entries, missingEntries, 15), {
      entries: [
        { key: `KEY2`, value: `Value 2` },
        { key: `KEY3`, value: `Value 3` },
        { key: `KEY4`, value: `Value 4` },
        { key: `KEY5`, value: `Value 5` },
        { key: `KEY6`, value: `Value 6` },
      ],
      langCodes: ["en_us", "de", "fr_fr"],
    });

    const missingEntries2 = {
      en_us: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY8`, value: `Value 8` },
      ],
      de: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY9`, value: `Value 9` },
      ],
      fr_fr: [
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY9`, value: `Value 9` },
      ],
    };

    assert.deepEqual(constructMultiLangRequest(entries, missingEntries2, 15), {
      entries: [{ key: `KEY8`, value: `Value 8` }],
      langCodes: ["en_us", "de", "fr_fr"],
    });

    const missingEntries3 = {
      en_us: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
      ],
      de: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY9`, value: `Value 9` },
      ],
      fr_fr: [{ key: `KEY9`, value: `Value 9` }],
    };

    assert.deepEqual(constructMultiLangRequest(entries, missingEntries3, 15), {
      entries: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
      ],
      langCodes: ["en_us", "de"],
    });

    const missingEntries4 = {
      en_us: [],
      de: [{ key: `KEY9`, value: `Value 9` }],
      fr_fr: [{ key: `KEY9`, value: `Value 9` }],
    };

    assert.deepEqual(constructMultiLangRequest(entries, missingEntries4, 15), {
      entries: [{ key: `KEY9`, value: `Value 9` }],
      langCodes: ["de", "fr_fr"],
    });
  });

  it("constructSingleLangRequest function test", () => {
    const langCodes = ["en_us", "de", "fr_fr"];

    const { missingEntries } = constructTestEntries(langCodes);

    assert.deepEqual(constructSingleLangRequest(missingEntries, 4), {
      entries: [
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY2`, value: `Value 2` },
        { key: `KEY3`, value: `Value 3` },
        { key: `KEY4`, value: `Value 4` },
      ],
      langCodes: ["de"],
    });

    const missingEntries2 = {
      en_us: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
      ],
      de: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY9`, value: `Value 9` },
      ],
      fr_fr: [{ key: `KEY9`, value: `Value 9` }],
    };

    assert.deepEqual(constructSingleLangRequest(missingEntries2, 5), {
      entries: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY9`, value: `Value 9` },
      ],
      langCodes: ["de"],
    });

    const missingEntries3 = {
      en_us: [],
      de: [{ key: `KEY9`, value: `Value 9` }],
      fr_fr: [{ key: `KEY9`, value: `Value 9` }],
    };

    assert.deepEqual(constructSingleLangRequest(missingEntries3, 5), {
      entries: [{ key: `KEY9`, value: `Value 9` }],
      langCodes: ["de"],
    });
  });

  it("removeEntriesFromRequest function test", () => {
    const langCodes = ["en_us", "de", "fr_fr"];

    const { missingEntries } = constructTestEntries(langCodes);

    removeEntriesFromRequest(missingEntries, {
      entries: [
        { key: `KEY2`, value: `Value 2` },
        { key: `KEY3`, value: `Value 3` },
        { key: `KEY4`, value: `Value 4` },
        { key: `KEY5`, value: `Value 5` },
        { key: `KEY6`, value: `Value 6` },
      ],
      langCodes: ["en_us", "de", "fr_fr"],
    });

    assert.deepEqual(missingEntries, {
      en_us: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY7`, value: `Value 7` },
      ],
      de: [
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY7`, value: `Value 7` },
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY0`, value: `Value 0` },
      ],
      fr_fr: [
        { key: `KEY7`, value: `Value 7` },
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY9`, value: `Value 9` },
      ],
    });

    removeEntriesFromRequest(missingEntries, {
      entries: [{ key: `KEY7`, value: `Value 7` }],
      langCodes: ["en_us", "de", "fr_fr"],
    });

    assert.deepEqual(missingEntries, {
      en_us: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
      ],
      de: [
        { key: `KEY1`, value: `Value 1` },
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY0`, value: `Value 0` },
      ],
      fr_fr: [
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY9`, value: `Value 9` },
      ],
    });

    removeEntriesFromRequest(missingEntries, {
      entries: [
        { key: `KEY0`, value: `Value 0` },
        { key: `KEY1`, value: `Value 1` },
      ],
      langCodes: ["en_us", "de"],
    });

    assert.deepEqual(missingEntries, {
      en_us: [],
      de: [{ key: `KEY8`, value: `Value 8` }],
      fr_fr: [
        { key: `KEY8`, value: `Value 8` },
        { key: `KEY9`, value: `Value 9` },
      ],
    });

    removeEntriesFromRequest(missingEntries, {
      entries: [{ key: `KEY8`, value: `Value 8` }],
      langCodes: ["de", "fr_fr"],
    });

    assert.deepEqual(missingEntries, {
      en_us: [],
      de: [],
      fr_fr: [{ key: `KEY9`, value: `Value 9` }],
    });

    removeEntriesFromRequest(missingEntries, {
      entries: [{ key: `KEY9`, value: `Value 9` }],
      langCodes: ["fr_fr"],
    });

    assert.deepEqual(missingEntries, {
      en_us: [],
      de: [],
      fr_fr: [],
    });
  });
});
