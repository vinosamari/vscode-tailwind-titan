import * as vscode from "vscode";
import * as fs from "fs";

function checkForTailwindcss(): void {
	const tailwindConfigPath = vscode.workspace.rootPath + "/tailwind.config.js";

	fs.access(tailwindConfigPath, fs.constants.F_OK, (err) => {
		if (!err) {
			vscode.window.showInformationMessage(
				"Tailwind CSS is installed in this project."
			);
		}
		vscode.window.showErrorMessage(
			"No Tailwind installed/inititalized in this project!"
		);
	});
}

export function activate(context: vscode.ExtensionContext) {
	console.log("Tailwind CSS Detection extension is now active.");

	// Register the checkForTailwindcss command
	let disposable = vscode.commands.registerCommand(
		"tailwind-titan.checkForTailwind",
		() => {
			checkForTailwindcss();
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
