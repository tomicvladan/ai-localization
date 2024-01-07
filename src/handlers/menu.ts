import { window, TextEditor, ProgressLocation } from "vscode";
import { basename, dirname } from "path";
import {
  getCodeFromFileName,
  getEntriesFromLocaleFiles,
  writeTextFile,
} from "../utils/files";
import { LocaleFile } from "../model/locale-file";
import { translate } from "./translate";
import { MenuEvent } from "../model/events";
import { Entry } from "../model/entry";
import { extractLocaleFiles } from "../utils/files";
import { createJsonFromEntries, parseTranslations } from "../utils/editor";
import { ProgressCallback } from "../services/progress";
import {
  findMissingEntries,
  hasMissingEntries,
  isEmptyLangEntriesMap,
  mergeNewEntries,
} from "../utils/entries";

let inProgress: boolean = false;

type Output =
  | "not_updated"
  | "partly_updated"
  | "fully_updated"
  | "nothing_to_translate";

function translateEventWrapper(
  handler: (
    entries: Entry[],
    localeCode: string,
    localeFiles: LocaleFile[],
    onProgressUpdate: ProgressCallback
  ) => Promise<Output>
): (event: MenuEvent) => void {
  return async function (event: MenuEvent) {
    try {
      if (inProgress) {
        return window.showWarningMessage("Translation is already in progress");
      }

      inProgress = true;

      const { path } = event;

      const localeCode = getCodeFromFileName(basename(path));

      if (!localeCode) {
        return window.showErrorMessage(
          "Cannot detect language from file name."
        );
      }

      const localeFiles = await extractLocaleFiles(dirname(path), localeCode);

      if (localeFiles.length === 0) {
        return window.showWarningMessage("No localization files found.");
      }

      const editor = window.activeTextEditor;

      if (!editor) {
        return window.showErrorMessage("Cannot get text from the editor.");
      }

      const localeText = (editor as unknown as TextEditor).document.getText();

      const entries = parseTranslations(localeText);

      if (!entries) {
        return window.showWarningMessage(
          "Localization file is not in JSON format."
        );
      }

      if (entries.length === 0) {
        return window.showWarningMessage(
          "The source localization file is empty."
        );
      }

      await new Promise<void>((resolve, reject) => {
        window.withProgress(
          {
            location: ProgressLocation.Notification,
            title: "Translation in progress...",
            cancellable: true,
          },
          async (progress, token) => {
            let previousPercent = 0;
            let canceled = false;

            token.onCancellationRequested(() => {
              canceled = true;
            });

            const onProgressUpdate = (percent: number): boolean => {
              progress.report({ increment: percent - previousPercent });

              previousPercent = percent;

              return canceled;
            };

            try {
              const output = await handler(
                entries,
                localeCode,
                localeFiles,
                onProgressUpdate
              );

              if (output === "fully_updated") {
                window.showInformationMessage(
                  "Translations have been added to localization files."
                );
              } else if (output === "partly_updated") {
                window.showWarningMessage(
                  "Partly added translations. Some entries are not translated."
                );
              } else if (output === "not_updated") {
                window.showErrorMessage(
                  "No translations added. Couln't parse response."
                );
              } else if (output === "nothing_to_translate") {
                window.showInformationMessage("No entries to translate.");
              }

              resolve();
            } catch (error) {
              reject(error);
            }
          }
        );
      });
    } catch (error) {
      const errorMessage = String(error);
      if (errorMessage === "Error: Canceled") {
        return;
      }
      console.error(error);
      window.showErrorMessage("Couldn't translate: ", String(error));
    } finally {
      inProgress = false;
    }
  };
}

export const translateAll = translateEventWrapper(
  async (
    entries: Entry[],
    localeCode: string,
    localeFiles: LocaleFile[],
    onProgressUpdate: ProgressCallback
  ): Promise<Output> => {
    const langCodes = localeFiles.map(({ code }) => code);

    const translatedEntries = await translate(
      localeCode,
      entries,
      findMissingEntries(
        entries,
        langCodes,
        langCodes.map(() => [])
      ),
      onProgressUpdate
    );

    if (isEmptyLangEntriesMap(translatedEntries)) {
      return "not_updated";
    }

    await Promise.all(
      localeFiles.map(async ({ code, path }) =>
        writeTextFile(path, createJsonFromEntries(translatedEntries[code]))
      )
    );

    return hasMissingEntries(translatedEntries)
      ? "partly_updated"
      : "fully_updated";
  }
);

export const translateMissing = translateEventWrapper(
  async (
    entries: Entry[],
    localeCode: string,
    localeFiles: LocaleFile[],
    onProgressUpdate: ProgressCallback
  ): Promise<Output> => {
    const fileEntries = await getEntriesFromLocaleFiles(localeFiles);
    const langCodes = localeFiles
      .filter((file, index) => fileEntries[index])
      .map(({ code }) => code);
    const filteredEntries = fileEntries.filter(
      (entries) => entries
    ) as Entry[][];

    const missingEntries = findMissingEntries(
      entries,
      langCodes,
      filteredEntries
    );

    if (isEmptyLangEntriesMap(missingEntries)) {
      return "nothing_to_translate";
    }

    const translatedEntries = await translate(
      localeCode,
      entries,
      missingEntries,
      onProgressUpdate
    );

    if (isEmptyLangEntriesMap(translatedEntries)) {
      return "not_updated";
    }

    await Promise.all(
      localeFiles
        .filter(({ code }) => translatedEntries[code])
        .map(({ code, path }, index) =>
          writeTextFile(
            path,
            createJsonFromEntries(
              mergeNewEntries(
                entries,
                filteredEntries[index],
                translatedEntries[code]
              )
            )
          )
        )
    );

    return hasMissingEntries(translatedEntries)
      ? "partly_updated"
      : "fully_updated";
  }
);
