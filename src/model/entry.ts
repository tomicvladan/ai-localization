export interface Entry {
  key: string;
  value: string;
}

export type LangEntriesMap = Record<string, Entry[]>;

export type KeyLangsMap = Record<string, Set<string>>;
