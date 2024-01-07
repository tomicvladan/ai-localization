/* eslint-disable @typescript-eslint/naming-convention */
import * as assert from "assert";
import * as vscode from "vscode";

import {
  extractFileNameWithoutExt,
  getCodeFromFileName,
} from "../../utils/files";
import { getTabSpace } from "../../utils/editor";

describe("Utils Test Suite", () => {
  vscode.window.showInformationMessage("Utils functions tests");

  it("File extension parsing", () => {
    const fileNames = {
      "ca_ES.json": "ca_ES",
      "1 2.txt": "1 2",
      "a.json": "a",
    };
    assert.deepEqual(
      Object.values(fileNames),
      Object.keys(fileNames).map(extractFileNameWithoutExt)
    );
  });
  it("Locale code parsing", () => {
    const fileNamesToCodes = {
      "ca_ES.json": "ca_es",
      "ca.json": "ca",
      "tzm_Latn_MA.json": "tzm_latn_ma",
      "enAS.json": "en_as",
      "az_Cyrl_AZ.json": "az_cyrl_az",
      "yue-Hant-HK.json": "yue_hant_hk",
      "Tzm Latn Ma.json": "tzm_latn_ma",
      "en-MT.json": "en_mt",
      "Et.json": "et",
    };
    assert.deepEqual(
      Object.values(fileNamesToCodes),
      Object.keys(fileNamesToCodes).map(getCodeFromFileName)
    );
  });
  it("Tab space", () => {
    assert.equal(getTabSpace(), "  ");
  });
});
