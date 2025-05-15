// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "firstextension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('firstextension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('This is the log that we get when Hello world command is executed!');
	});
	const disposable2 = vscode.commands.registerCommand('showCurrentDate', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const currentDate = new Date();
		const formattedDate = currentDate.toLocaleString();
		vscode.window.showInformationMessage(`Current date and time: ${formattedDate}`);
	});

	const disposable3 = vscode.commands.registerCommand('bivekGhartiPortfolio', () => {
		// Open an external browser with a specific URL
        const portfolioUrl = vscode.Uri.parse('https://bivekgharti.netlify.app/');
        vscode.env.openExternal(portfolioUrl);
	});
	const disposable4 = vscode.commands.registerCommand('krishalkarnaPortfolio', () => {
		// Open an external browser with a specific URL
        const portfolioUrl = vscode.Uri.parse('https://www.krishalkarna.com.np/');
        vscode.env.openExternal(portfolioUrl);
	});
	const disposable5 = vscode.commands.registerCommand('biratrokaPortfolio', () => {
		// Open an external browser with a specific URL
        const portfolioUrl = vscode.Uri.parse('https://www.biratroka.com.np/');
        vscode.env.openExternal(portfolioUrl);
	});
	const disposable6 = vscode.commands.registerCommand('aakashPortfolio', () => {
		// Open an external browser with a specific URL
        const portfolioUrl = vscode.Uri.parse('https://www.devaakash.xyz/');
        vscode.env.openExternal(portfolioUrl);
	});
	const disposable7 = vscode.commands.registerCommand('samyogghimirePortfolio', () => {
		// Open an external browser with a specific URL
        const portfolioUrl = vscode.Uri.parse('https://www.samyogghimire.com.np/');
        vscode.env.openExternal(portfolioUrl);
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
	context.subscriptions.push(disposable5);
	context.subscriptions.push(disposable6);
}

// This method is called when your extension is deactivated
export function deactivate() { }

// token : 3j0I7qwhCBmSlOcmaJu262byigKQyl4o62HmF7HFsEp8ohzwrHmxJQQJ99BEACAAAAAAAAAAAAASAZDO1LUy