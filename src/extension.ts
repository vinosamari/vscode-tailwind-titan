import * as vscode from "vscode";
import * as fs from "fs";
async function checkForTailwindcss(): Promise<boolean> {
	const tailwindConfigPath = vscode.workspace.rootPath + "/tailwind.config.js";

	try {
		await fs.promises.access(tailwindConfigPath, fs.constants.F_OK);
		vscode.window.showInformationMessage(
			"Tailwind CSS is installed in this project."
		);
		return true;
	} catch (err) {
		vscode.window.showErrorMessage(
			"No Tailwind installed/initialized in this project!"
		);
		return false;
	}
}

export function activate(context: vscode.ExtensionContext) {
	// Register the checkForTailwindcss command
	let disposable = vscode.commands.registerCommand(
		"tailwind-titan.checkForTailwind",
		async () => {
			if (await checkForTailwindcss()) {
				vscode.window.showInformationMessage("Parsing components and pages...");
			}
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
