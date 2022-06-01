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
		vscode.window.showInformationMessage('插件收到的消息：' + message);
	}, undefined, context.subscriptions);


	let disposable = vscode.commands.registerCommand('generate_napi', function (uri) {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		let result = checkFileError(uri.fsPath);
		if (result[0]) {
			vscode.window.showInformationMessage("正在生成" + uri.fsPath);
			NapiLog.init(1, path.join("" + path.dirname(uri.fsPath), "napi_gen.log"))
			xgen.doGenerate(uri.fsPath, path.dirname(uri.fsPath));
			let ret = NapiLog.getResult();
			if (ret[0]) {
				vscode.window.showInformationMessage("生成成功");
			} else {
				vscode.window.showInformationMessage("" + ret[1]);
			}
		} else {
			vscode.window.showErrorMessage("" + result[1]);
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

function getWebviewContent() {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<title>Napi</title>
		<script>
			function showInterfaceFile(filename) {
				document.getElementById("interfaceFile").value = filename;
			}
			function showInterfaceDir(filename) {
				var dir = filename.substring(0, filename.lastIndexOf("\"));
				document.getElementById("interfaceFile").value = dir;
			}
		</script>
		<div id="selectMode">
			选择方式：
			<input type="radio" name="colors" value="0" id="files" checked="checked">.d.ts文件</input>
			<input type="radio" name="colors" value="1" id="dir">文件夹</input>
		</div>
		</br>
		<div id="interface">
			选择接口文件: <input type="text" id="interfaceFile">
			<input type="file" id="interfaceSelectFile" multiple="multiple" accept=".d.ts"
				onchange="showInterfaceFile(this.value)" />
			<input type="file" id="interfaceSelectDir" style="display: none;" webkitdirectory directory
				onchange="showInterfaceDir(this.value)" />
		</div>
	
		<div>
			生成框架路径: <input type="text" id="genFile">
			<input type="file" multiple="multiple" accept=".d.ts" onchange="showgenFile(this.value)" />
		</div>
	
		<div>
			编译脚本路径: <input type="text" id="buildFile">
			<input type="file" multiple="multiple" accept=".d.ts" onchange="buildFile(this.value)" />
		</div>
		<div>
			<a href="https://gitee.com/openharmony-sig/napi_generator" target="_blank">
				<button>Help</button>
			</a>
			<button type="button">Cancel</button>
			<button type="button" onclick="sendMsg()">Ok2</button>
		</div>
	</body>
	</html>`
}

module.exports = {
	activate,
	deactivate
}