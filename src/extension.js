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

	let disposable = vscode.commands.registerCommand('generate_napi', function (uri) {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'generate', // 标识webview的类型
			'Generate Napi Frame', // 展示给用户的面板的标题
			vscode.ViewColumn.One, // 显示webview面板以编辑器新列的方式.
			{
				enableScripts: true, // 启用JS，默认禁用
				retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
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
				let genDir = message.genFile;
				if (mode == 0) {
					genFiles(fileNames, genDir);
				} else if (mode == 1) {
					genDirPath(fileDir, genDir);
				}
			}
		}, undefined, context.subscriptions);
		panel.webview.postMessage(uri.fsPath);
	});

	context.subscriptions.push(disposable);
}

function genFiles(fileNames, genDir) {
	if (fileNames.indexOf(".") < 0) {
		vscode.window.showErrorMessage("请输入正确的文件路径");
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
	if (fileDir.indexOf(".") > 0) {
		vscode.window.showErrorMessage("请输入正确的文件夹路径");
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
				vscode.window.showInformationMessage("正在生成" + fileName);
				NapiLog.init(1, path.join("" + path.dirname(fileName), "napi_gen.log"))
				xgen.doGenerate(fileName, genDir == null ? path.dirname(fileName) : genDir);
				let ret = NapiLog.getResult();
				if (ret[0]) {
					vscode.window.showInformationMessage("生成成功");
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
	let data = readFile('src/config.html');
	return data.toString();
}

module.exports = {
	activate,
	deactivate
}