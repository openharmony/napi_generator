/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
* Licensed under the Apache License, Version 2.0 (the "License"); 
* you may not use this file except in compliance with the License. 
* You may obtain a copy of the License at 
*
* http://www.apache.org/licenses/LICENSE-2.0 
*
* Unless required by applicable law or agreed to in writing, software 
* distributed under the License is distributed on an "AS IS" BASIS, 
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and 
* limitations under the License. 
*/

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const re = require("./gen/tools/re");
const xgen = require('./gen/main');
const path = require("path");
const { checkFileError } = require("./gen/tools/common");
const { NapiLog } = require("./gen/tools/NapiLog");
const { readFile } = require('./gen/tools/FileRW');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gnapi" is now active!');
	let disposable = register(context, 'generate_napi');
	let disposableMenu = register(context, 'generate_napi_menu');
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableMenu);
}

function register(context, command) {
	let disposable = vscode.commands.registerCommand(command, function (uri) {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'generate', // Identifies the type of WebView
			'Generate Napi Frame', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Display the WebView panel in the form of new columns in the editor
			{
				enableScripts: true, // Enable or disable JS, default is Enable
				retainContextWhenHidden: true, // Keep the WebView state when it is hidden to avoid being reset
			}
		);
		panel.webview.html = getWebviewContent();
		panel.webview.onDidReceiveMessage(message => {
			if (message == "cancel") {
				panel.dispose();
			} else {
				let mode = message.mode;
				let fileNames = message.fileNames;
				let fileDir = message.fileDir;
				let genDir = message.genDir;
				if (mode == 0) {
					genFiles(fileNames, genDir);
				} else if (mode == 1) {
					genDirPath(fileDir, genDir);
				}
			}
		}, undefined, context.subscriptions);
		let fn = re.getFileInPath(uri.fsPath);
		let tt = re.match("@ohos.[a-zA-Z_0-9]+.d.ts", fn);
		panel.webview.postMessage(tt ? uri.fsPath : "");
	});
	return disposable;
}

function genFiles(fileNames, genDir) {
	if("" == re.replaceAll(fileNames, " ", "")){
		vscode.window.showErrorMessage("Please enter the file path!");
		return;
	}
	if (fileNames.indexOf(".") < 0) {
		vscode.window.showErrorMessage("Please enter the correct file path!");
		return;
	}
	var regex = ",";
	let filenameArray = fileNames.toString().split(regex);
	let n = filenameArray.length;
	for (let i = 0; i < n; i++) {
		let fileName = filenameArray[i];
		checkGenerate(fileName, genDir);
	}
}

function genDirPath(fileDir, genDir) {
	if("" == re.replaceAll(fileDir, " ", "")){
		vscode.window.showErrorMessage("Please enter the folder path!");
		return;
	}
	if (fileDir.indexOf(".") > 0) {
		vscode.window.showErrorMessage("Please enter the correct folder path!");
		return;
	}
	fs.readdir(fileDir + "", function (err, files) {
		if (err) {
			NapiLog.logError("readdir file error" + err);
			return;
		}
		(function iterator(i) {
			if (i == files.length) {
				return;
			}
			fs.stat(path.join(fileDir + "", files[i]), function (err, data) {
				if (err) {
					NapiLog.logError("read file error" + err);
					return;
				}
				if (data.isFile()) {
					let fileName = files[i];
					checkGenerate(fileName, genDir);
				}
				iterator(i + 1);
			});
		})(0);
	});
}

function checkGenerate(fileName, genDir) {
	let fn = re.getFileInPath(fileName);
	let tt = re.match("@ohos.[a-zA-Z_0-9]+.d.ts", fn);
	if (tt) {
		let result = checkFileError(fileName);
		if (result[0]) {
			if (result[0]) {
				vscode.window.showInformationMessage("Building" + fileName);
				NapiLog.init(1, path.join("" + path.dirname(fileName), "napi_gen.log"))
				xgen.doGenerate(fileName, genDir == null || genDir == "" ? path.dirname(fileName) : genDir);
				let ret = NapiLog.getResult();
				if (ret[0]) {
					vscode.window.showInformationMessage("Generated successfully");
				}
				else {
					vscode.window.showInformationMessage("" + ret[1]);
				}
			}
			else {
				vscode.window.showErrorMessage("" + result[1]);
			}
		}
		else {
			NapiLog.logError(result[1]);
		}

	}
	else {
		NapiLog.logError("file name " + fn + " format invalid, @ohos.input_sample.d.ts");
	}
}

// this method is called when your extension is deactivated
function deactivate() { }

function getWebviewContent() {
	let data = readFile(__dirname + '/config.html');
	return data.toString();
}

module.exports = {
	activate,
	deactivate
}