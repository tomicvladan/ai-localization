import { window } from "vscode";
import { Entry } from "../model/entry";

export function getTabSpace(): string {
  const tabSize = Number(window.activeTextEditor?.options.tabSize || 2);
  let result = "";
  for (let i = 0; i < tabSize; i++) {
    result += " ";
  }
  return result;
}

export function parseTranslations(text: string): Entry[] | undefined {
  const entries: Entry[] = [];

  try {
    JSON.parse(text, (key: string, value: any) => {
      if (
        typeof key === "string" &&
        typeof value === "string" &&
        value.trim() !== ""
      ) {
        entries.push({ key, value });
      }
    });
  } catch (error) {
    return undefined;
  }

  return entries;
}

function encodeNewLine(text: string): string {
  return text.replace(/\n/g, "\\n");
}

export function decodeDoubleQuotes(text: string): string {
  return text.replace(/([^\\])"/gm, '$1"');
}

export function encodeDoubleQuotes(text: string): string {
  return text.replace(/([^\\])"/gm, '$1\\"');
}

export function replaceDoubleQuotes(text: string): string {
  return text.replace(/"/g, "'");
}

export function removeNewLines(text: string): string {
  return text.replace(/\n/g, " ");
}

function convertEntriesToText(entries: Entry[]): string {
  const tab = getTabSpace();
  return entries.reduce(
    (text, { key, value }, i) =>
      (text += `${tab}"${key}": "${encodeNewLine(encodeDoubleQuotes(value))}"${
        i < entries.length - 1 ? "," : ""
      }\n`),
    ""
  );
}

export function addEntriesToJson(text: string, entries: Entry[]): string {
  const entriesText = convertEntriesToText(entries);
  let jsonEndIndex: number = text.lastIndexOf("}");

  if (jsonEndIndex < 0) {
    return text + entriesText;
  }

  return [
    text.slice(0, jsonEndIndex),
    entriesText,
    text.slice(jsonEndIndex),
  ].join("");
}

export function createJsonFromEntries(entries: Entry[]): string {
  return `{\n${convertEntriesToText(entries)}}\n`;
}
