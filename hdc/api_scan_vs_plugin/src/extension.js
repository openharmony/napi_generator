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
const re = require("./gen/tools/VsPluginRe");
const { VsPluginLog } = require("./gen/tools/VsPluginLog");
const { detectPlatform, readFile } = require('./gen/tools/VsPluginTool');
const path = require('path');
var exeFilePath = null;
const dirCache={};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gnapi" is now active!');
	let disposable = register(context, 'api_scan');
	let disposableMenu = register(context, 'api_scan_menu');
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableMenu);
	var platform = detectPlatform();
	if (platform == 'win') {
		exeFilePath = __dirname + "/search-win.exe";
	} else if (platform == 'mac') {
		exeFilePath = __dirname + "/search-macos";
	} else if (platform == 'Linux') {
		exeFilePath = __dirname + "/search-linux";
	}
}

function executorApiscan(name, genDir) {
	if (genDir == "" || genDir == null) {
		genDir = name;
	}
	var command = exeFilePath + " -d " + name + " -o " + genDir;
	var exec = require('child_process').exec;
	exec(command, function (error, stdout, stderr) {
		VsPluginLog.logInfo('VsPlugin: stdout =' + stdout + ", stderr =" + stderr);
		if (error || stdout.indexOf("errno") > 0) {
			vscode.window.showErrorMessage("genError:" + (error != null ? error : "") + stdout);
			return VsPluginLog.logError("VsPlugin:" + error + stdout);
		}
		vscode.window.showInformationMessage("api scan successfully");
	});
}

function exeFileExit() {
	if (fs.existsSync(exeFilePath)) {
		return true;
	}
	return false;
}

function register(context, command) {
	let disposable = vscode.commands.registerCommand(command, function (uri) {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const panel = vscode.window.createWebviewPanel(
			'api_scan', // Identifies the type of WebView
			'Api Scan', // Title of the panel displayed to the user
			vscode.ViewColumn.Two, // Display the WebView panel in the form of new columns in the editor
			{
				enableScripts: true, // Enable or disable JS, default is Enable
				retainContextWhenHidden: true, // Keep the WebView state when it is hidden to avoid being reset
			}
		);
		panel.webview.html = getWebviewContent(context);
		let msg;
		panel.webview.onDidReceiveMessage(message => {
			msg = message.msg;
			if (msg == "cancel") {
				panel.dispose();
			}
			else if (msg == "api_scan") {
				let name = message.fileNames;
				let genDir = message.genDir;
				name = re.replaceAll(name, " ", "");
				if ("" == name) {
					vscode.window.showErrorMessage("Please enter the path!");
					return;
				}
				if (exeFileExit()) {
					executorApiscan(name, genDir);
				} else {
					vscode.window.showInformationMessage("Copy executable program to " + __dirname);
				}
			}else {
				selectPath(panel, message);
			}
		}, undefined, context.subscriptions);
		let fn = re.getFileInPath(uri.fsPath);
		let tt = re.match("[a-zA-Z_0-9]", fn);
		var result = {
			msg: "selectASFilePath",
			path: tt ? uri.fsPath : ""
		}
		panel.webview.postMessage(result);
	});
	return disposable;
}

/**
* 选择本地目录/文件夹
*/
function selectPath(panel, message) {
	const options = {
		canSelectMany: false,//是否可以选择多个
		canSelectFolders: true,//是否选择文件夹
		defaultUri:vscode.Uri.file('')//默认打开本地路径
	};
   
	return vscode.window.showOpenDialog(options).then(fileUri => {
	   if (fileUri && fileUri[0]) {
		   console.log('Selected file: ' + fileUri[0].fsPath);
		   let filePath = "";
		   for (let index = 0; index < fileUri.length; index++) {
				filePath += fileUri[index].fsPath.concat(",");
		   }
		   var result = {
				msg: message.msg,
				path: filePath.length > 0 ? filePath.substring(0, filePath.length - 1) : filePath
				}
		   panel.webview.postMessage(result);
		   return fileUri[0].fsPath
	   }
   });
}

// this method is called when your extension is deactivated
function deactivate() { }

function getWebviewContent(context) {
	let data = readFile(__dirname + '/vs_plugin_view.html');
	data = getWebViewContent(context, '/vs_plugin_view.html');
	return data.toString();
}

function getWebViewContent(context, templatePath) {
	const resourcePath = path.join(context.extensionPath, templatePath);
	const dirPath = path.dirname(resourcePath);
	let html = fs.readFileSync(resourcePath, 'utf-8');
	html = html.replace(/(<link.+?href="|<script.+?src="|<iframe.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
		if ($2.indexOf("https://") < 0) return $1 + vscode.Uri.file(path.resolve(dirPath, $2))
			.with({ scheme: 'vscode-resource' }).toString() + '"';
		else return $1 + $2 + '"';
	});
	return html;
}

module.exports = {
	activate,
	deactivate
}