/* eslint-disable @typescript-eslint/naming-convention */
import * as assert from "assert";
import * as vscode from "vscode";
import { getCodeFromFileName } from "../../utils/files";
// import * as myExtension from '../../extension';

describe("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Locale codes tests");

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
});
