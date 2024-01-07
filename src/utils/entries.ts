import { Entry, KeyLangsMap, LangEntriesMap } from "../model/entry";

export function findMissingEntries(
  entries: Entry[],
  langCodes: string[],
  fileEntries: Entry[][]
): LangEntriesMap {
  return fileEntries.reduce(
    (missingEntriesMap, fileEntries: Entry[], index: number) => {
      missingEntriesMap[langCodes[index]] = entries.filter(({ key }) =>
        fileEntries.every(
          ({ key: fileKey, value }) => fileKey !== key || value === ""
        )
      );

      return missingEntriesMap;
    },
    {} as LangEntriesMap
  );
}

export function langEntriesToKeyLangMap(
  entriesMap: LangEntriesMap
): KeyLangsMap {
  return Object.entries(entriesMap).reduce((keyLanMap, [langCode, entries]) => {
    entries.forEach(({ key }) => {
      if (!keyLanMap[key]) {
        keyLanMap[key] = new Set<string>();
      }

      keyLanMap[key].add(langCode);
    });

    return keyLanMap;
  }, {} as KeyLangsMap);
}

export function mergeNewEntries(
  sourceEntries: Entry[],
  destEntries: Entry[],
  newEntries: Entry[]
): Entry[] {
  const mergedEntries = sourceEntries
    .map(
      (entry) =>
        newEntries.find(({ key }) => entry.key === key) ||
        destEntries.find(({ key }) => entry.key === key)
    )
    .filter((entry) => Boolean(entry)) as Entry[];

  return mergedEntries.concat(
    destEntries.filter((entry) =>
      mergedEntries.every(({ key }) => entry.key !== key)
    )
  );
}

export function copyLangEntriesMap(entriesMap: LangEntriesMap): LangEntriesMap {
  const copy: LangEntriesMap = {};

  Object.keys(entriesMap).forEach((langCode) => {
    copy[langCode] = [...entriesMap[langCode]];
  });

  return copy;
}

export function isEmptyLangEntriesMap(entries: LangEntriesMap): boolean {
  return Object.values(entries).every(
    (entryArray) =>
      entryArray.length === 0 || entryArray.every(({ value }) => !value)
  );
}

export function hasMissingEntries(entries: LangEntriesMap): boolean {
  return Object.values(entries).some((entryArray) => {
    return entryArray.some(({ value }) => !value);
  });
}

export function langWithEntriesCount(entriesMap: LangEntriesMap): number {
  return Object.values(entriesMap).reduce(
    (count, entries) => (entries.length > 0 ? 1 : 0) + count,
    0
  );
}
