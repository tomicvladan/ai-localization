import * as vscode from "vscode";
import { translateAll, translateMissing } from "./handlers/menu";

function addCommand(
  context: vscode.ExtensionContext,
  command: string,
  handler: (...args: any[]) => any
) {
  const disposable = vscode.commands.registerCommand(command, handler);

  context.subscriptions.push(disposable);
}

export function activate(context: vscode.ExtensionContext) {
  console.log('"ai-localization" is now active!');

  addCommand(context, "ai-localization.translateAll", translateAll);
  addCommand(context, "ai-localization.translateMissing", translateMissing);
}

// This method is called when your extension is deactivated
export function deactivate() {}
