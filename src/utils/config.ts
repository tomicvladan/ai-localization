import { workspace } from "vscode";
import { ECXTENSION_NAME } from "../assets/constants";

function isValueValid(value: unknown): boolean {
  return typeof value === "string" || typeof value === "number";
}

export function getConfig<T>(key: string): T | undefined {
  const value = workspace.getConfiguration(ECXTENSION_NAME).inspect(key);

  return (
    isValueValid(value?.workspaceValue)
      ? value?.workspaceValue
      : isValueValid(value?.globalValue)
      ? value?.globalValue
      : undefined
  ) as T;
}
