import { Entry, LangEntriesMap } from "../model/entry";
import { Request } from "../model/request";
import { langEntriesToKeyLangMap } from "./entries";
import { areSetsEqual } from "./set";

export function constructMultiLangRequest(
  entries: Entry[],
  missingEntries: LangEntriesMap,
  maxTrnaslationsPerResponse: number
): Request {
  const keyLangsMap = langEntriesToKeyLangMap(missingEntries);

  const keysByCount = Object.keys(keyLangsMap).sort(
    (key1, key2) => keyLangsMap[key2].size - keyLangsMap[key1].size
  );

  const includedKeys: string[] = [keysByCount[0]];
  const includedLangs = keyLangsMap[keysByCount[0]];
  const langSize = includedLangs.size;
  let translationsCount = langSize;

  for (let i = 1; i < keysByCount.length; i++) {
    const currentKey = keysByCount[i];
    const currentLangs = keyLangsMap[currentKey];

    if (
      currentLangs.size !== langSize ||
      translationsCount + langSize > maxTrnaslationsPerResponse
    ) {
      break;
    }

    if (!areSetsEqual(includedLangs, keyLangsMap[currentKey])) {
      continue;
    }

    includedKeys.push(currentKey);
    translationsCount += langSize;
  }

  return {
    entries: includedKeys.map((key) =>
      entries.find((entry) => key === entry.key)
    ) as Entry[],
    langCodes: Array.from(includedLangs),
  };
}

export function constructSingleLangRequest(
  missingEntries: LangEntriesMap,
  maxTrnaslationsPerResponse: number
): Request {
  let maxEntriesLang: string = "";
  let entryCount: number = 0;

  Object.keys(missingEntries).forEach((langCode) => {
    const currentEntryCount = missingEntries[langCode].length;

    if (currentEntryCount > entryCount) {
      maxEntriesLang = langCode;
      entryCount = currentEntryCount;
    }
  });

  return {
    langCodes: [maxEntriesLang],
    entries: missingEntries[maxEntriesLang].slice(
      0,
      maxTrnaslationsPerResponse
    ),
  };
}

export function removeEntriesFromRequest(
  entriesMap: LangEntriesMap,
  request: Request
) {
  request.langCodes.forEach((langCode) => {
    request.entries.forEach((entry) => {
      const index = entriesMap[langCode].findIndex(
        ({ key }) => key === entry.key
      );

      if (index >= 0) {
        entriesMap[langCode].splice(index, 1);
      }
    });
  });
}

export function getRequestSize(request: Request): number {
  return request.entries.length * request.langCodes.length;
}
