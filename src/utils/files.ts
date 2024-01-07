import { extname, join } from "path";
import { readFile, readdir, writeFile } from "fs/promises";
import { LocaleFile } from "../model/locale-file";
import langCodes from "../assets/lang-codes";
import { parseCode } from "./locales";
import { Entry } from "../model/entry";
import { parseTranslations } from "./editor";

const splitterChars = ["_", "-", " "];

export function extractFileNameWithoutExt(fileName: string): string {
  const extIndex = fileName.indexOf(extname(fileName));

  return extIndex >= 0 ? fileName.substring(0, extIndex) : fileName;
}

export function getCodeFromFileName(fileName: string): string | undefined {
  if (!fileName) {
    return undefined;
  }

  fileName = extractFileNameWithoutExt(fileName);

  const splitter = splitterChars.find((splitter: string) =>
    Boolean(langCodes[parseCode(fileName, splitter)])
  );

  return splitter ? parseCode(fileName, splitter) : undefined;
}

export async function extractLocaleFiles(
  directory: string,
  excludeLocaleCode: string
): Promise<LocaleFile[]> {
  const files = await readdir(directory);

  return files
    .map((fileName) => ({
      path: join(directory, fileName),
      code: getCodeFromFileName(fileName),
    }))
    .filter(({ code }) => code && code !== excludeLocaleCode) as LocaleFile[];
}

export function readTextFile(filePath: string): Promise<string> {
  return readFile(filePath, "utf8");
}

export function writeTextFile(filePath: string, text: string): Promise<void> {
  return writeFile(filePath, text, "utf8");
}

export function getEntriesFromLocaleFiles(
  localeFiles: LocaleFile[]
): Promise<(Entry[] | undefined)[]> {
  return Promise.all(
    localeFiles.map(async ({ path }) => {
      const text = await readTextFile(path);

      return parseTranslations(text);
    })
  );
}
