import { Entry, LangEntriesMap } from "../../model/entry";

export function constructTestEntries(langCodes: string[]): {
  entries: Entry[];
  missingEntries: LangEntriesMap;
} {
  const entries: Entry[] = [];

  for (let i = 0; i < 10; i++) {
    entries.push({ key: `KEY${i}`, value: `Value ${i}` });
  }

  let missingEntries: LangEntriesMap = {
    [langCodes[0]]: [],
    [langCodes[1]]: [],
    [langCodes[2]]: [],
  };

  for (let i = 0; i < 8; i++) {
    missingEntries[langCodes[0]].push({
      key: `KEY${i}`,
      value: `Value ${i}`,
    });
    missingEntries[langCodes[1]].push({
      key: `KEY${i + 1}`,
      value: `Value ${i + 1}`,
    });
    missingEntries[langCodes[2]].push({
      key: `KEY${i + 2}`,
      value: `Value ${i + 2}`,
    });
  }
  missingEntries[langCodes[1]].push({ key: `KEY0`, value: `Value 0` });

  return { entries, missingEntries };
}
