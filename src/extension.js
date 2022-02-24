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
const xgen = require('./gen/main');
const path = require("path");
const { checkFileError } = require("./gen/tools/common");
const { NapiLog } = require("./gen/tools/NapiLog");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gnapi" is now active!');

	let disposable = vscode.commands.registerCommand('generate_napi', function (uri) {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		let result = checkFileError(uri.fsPath);
		if (result[0]) {
			vscode.window.showInformationMessage("正在生成" + uri.fsPath);
			NapiLog.init(1, path.join("" + path.dirname(uri.fsPath), "napi_gen.log"))
			xgen.doGenerate(uri.fsPath, path.dirname(uri.fsPath));
            let ret=NapiLog.getResult();
            if(ret[0]) {
                vscode.window.showInformationMessage("生成成功");
            }
            else {
                vscode.window.showInformationMessage(""+ret[1]);
            }
		}
		else {
			vscode.window.showErrorMessage("" + result[1]);
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
