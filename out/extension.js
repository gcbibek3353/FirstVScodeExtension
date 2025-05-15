"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
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
function deactivate() { }
// token : 3j0I7qwhCBmSlOcmaJu262byigKQyl4o62HmF7HFsEp8ohzwrHmxJQQJ99BEACAAAAAAAAAAAAASAZDO1LUy
//# sourceMappingURL=extension.js.map