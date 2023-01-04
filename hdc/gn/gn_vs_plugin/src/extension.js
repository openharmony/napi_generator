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
const { detectPlatform, readFile, writeFile } = require('./gen/tools/VsPluginTool');
const path = require('path');
const os = require('os');
var exeFilePath = null;
var flag = "";
var isTrue = false;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gnapi" is now active!');
	let disposable = register(context, 'generate_gn');
	let disposableMenu = register(context, 'generate_gn_menu');
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableMenu);
	var platform = detectPlatform();
	if (platform == 'win') {
		exeFilePath = __dirname + "/gn-gen-win.exe";
	} else if (platform == 'mac') {
		exeFilePath = __dirname + "/gn-gen-macos";
	} else if (platform == 'Linux') {
		exeFilePath = __dirname + "/gn-gen-linux";
	}
}

function gnexecutor(outputCodeDir, originCodeDir, inputScriptDir, scriptType, transplantDir, 
	subsystemName, componentName, compileOptions) {
	var exec = require('child_process').exec;
	exec(genGnCommand(outputCodeDir, originCodeDir, inputScriptDir, scriptType, transplantDir, 
		subsystemName, componentName, compileOptions), 
		{
			maxBuffer: 1024 * 1024 * 20
		},
		function (error, stdout, stderr) {
		 VsPluginLog.logInfo('VsPlugin: stdout =' + stdout + ", stderr =" + stderr);
		if (error || stdout.indexOf("generate gn ok") < 0) {
			console.log(error)
			vscode.window.showErrorMessage("genError:" + (error != null ? error : "") + stdout);
			return VsPluginLog.logError("VsPlugin:" + error + stdout);
		}
		vscode.window.showInformationMessage("Generated successfully");
	});
}

function genGnCommand(outputCodeDir, originCodeDir, inputScriptDir, scriptType, 
	transplantDir, subsystemName, componentName, compileOptions) {
	var command = exeFilePath + " -o " + outputCodeDir + " -p " + originCodeDir + " -f " + inputScriptDir 
	+ " -t " + scriptType + " -s " + subsystemName + " -m " + componentName + " -d " + transplantDir;
	if (compileOptions != "") {
		command += " -a " + "\"" + compileOptions + "\"";
	}

	command = re.replaceAll(command, '\\\\', '/');
	
	console.log("command = " + command)
	return command;
}

/**
 * 将插件界面读取的扩展配置更新到cfg.json文件中
 * @param extFile 用户自定义的支持文件类型
 * @param extFlag 用户自定义的支持编译选项
 */
function refreshJsonCfg(extFile, extFlag) {
	let cfgFilePath = __dirname + '/res/cfg.json';
	let jsonCfg = readFile(cfgFilePath);
	let cfgObj = JSON.parse(jsonCfg.toString());
	cfgObj.fileSuffix = extFile;
	cfgObj.compileflag = extFlag;
	let cfgStr = JSON.stringify(cfgObj);
	writeFile(cfgFilePath, cfgStr);
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
			'generate', // Identifies the type of WebView
			'Gn Generate Frame', // Title of the panel displayed to the user
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
			} else if(msg == "gn") {
				let outputCodeDir = message.outputCodeDir;
				let originCodeDir = message.originCodeDir;
				let inputScriptDir = message.inputScriptDir;
				let scriptType = message.scriptType;
				let transplantDir = message.transplantDir;
				let subsystemName = message.subsystemName;
				let componentName = message.componentName;
				let compileOptions = message.compileOptions;
				refreshJsonCfg(message.extFile, message.extFlag);
				checkMode(outputCodeDir, originCodeDir, inputScriptDir, scriptType, 
					transplantDir, subsystemName, componentName, compileOptions);
			} else {
				selectPath(panel, message);
			}
		}, undefined, context.subscriptions);
		let fn = re.getFileInPath(uri.fsPath);
		let tt = re.match("([a-zA-Z_0-9]+.[a-zA-Z_0-9])", fn);
		var result = {
			msg: "selectinputScriptDir",
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
	 let mode = 1;
	if (message.mode != undefined) {
		mode = message.mode;
	}
	flag = flag == "" ? '' : flag;
	const options = {
		canSelectMany: false,//是否可以选择多个
		canSelectFiles: mode == 0 ? true : false,//是否选择文件
		canSelectFolders: mode == 0 ? false : true,//是否选择文件夹
		defaultUri:vscode.Uri.file(flag),//默认打开本地路径
		filters: { 
			'All files': ['*']
		}
	};
   
	return vscode.window.showOpenDialog(options).then(fileUri => {
		if (fileUri && fileUri[0]) {
			console.log('Selected file: ' + fileUri[0].fsPath);
			var filePath = "";
			filePath = fileUri[0].fsPath.concat(',');
			filePath = re.replaceAll(filePath, '\\\\', '/');
			if (filePath.substring(1,2) == ":") {
				let filePathTemp = filePath.substring(0,1).toUpperCase()
				filePath = filePathTemp + filePath.substring(1,filePath.length)
			}
			var result = {
				 msg: message.msg,
				 path: filePath.length > 0 ? filePath.substring(0, filePath.length - 1) : filePath
			}
			console.log('message.msg: ' + message.msg);
			if (!isTrue && message.msg == "selectoutputCodeDir"){
				flag = filePath.substring(0, filePath.length - 1);
				let fileTempName = "out";
		        let pos = flag.indexOf(fileTempName);
		        flag = flag.substr(0,pos-1);
				isTrue = true;
			}
			panel.webview.postMessage(result);
			return fileUri[0].fsPath
		}
   });
}

function checkMode(outputCodeDir, originCodeDir, inputScriptDir, scriptType, 
	transplantDir, subsystemName, componentName, compileOptions) {
	outputCodeDir = re.replaceAll(outputCodeDir, " ", "");
	if ("" == outputCodeDir) {
		vscode.window.showErrorMessage("Please enter the outputCodeDir path!");
		return;
	}
	originCodeDir = re.replaceAll(originCodeDir, " ", "");
	if ("" == originCodeDir) {
		vscode.window.showErrorMessage("Please enter the originCodeDir path!");
		return;
	}
	inputScriptDir = re.replaceAll(inputScriptDir, " ", "");
	if ("" == inputScriptDir) {
		vscode.window.showErrorMessage("Please enter the inputScriptDir path!");
		return;
	}
	if (inputScriptDir.indexOf(".") < 0) {
		vscode.window.showErrorMessage("Please enter the correct file path!");
		return;
	}
	transplantDir = re.replaceAll(transplantDir, " ", "");
	if ("" == transplantDir) {
		vscode.window.showErrorMessage("Please enter the transplantDir path!");
		return;
	}
	subsystemName = re.replaceAll(subsystemName, " ", "");
	if ("" == subsystemName) {
		vscode.window.showErrorMessage("Please enter the subsystemName!");
		return;
	}
	componentName = re.replaceAll(componentName, " ", "");
	if ("" == componentName) {
		vscode.window.showErrorMessage("Please enter the componentName!");
		return;
	}
	if (exeFileExit()) {
		gnexecutor(outputCodeDir, originCodeDir, inputScriptDir, scriptType, 
			transplantDir, subsystemName, componentName, compileOptions);
	} else {
		vscode.window.showInformationMessage("Copy executable program to " + __dirname);
	}
}

// this method is called when your extension is deactivated
function deactivate() { }

function getWebviewContent(context) {
	let data = readFile(__dirname + '/vs_plugin_view.html');
	data = getWebViewContent(context, '/vs_plugin_view.html');
	return data.toString();
}

function getWebViewContent(context, templatePath) {
    const reoriginCodeDir = path.join(context.extensionPath, templatePath);
    const dirPath = path.dirname(reoriginCodeDir);
    let html = fs.readFileSync(reoriginCodeDir, 'utf-8');
    html = html.replace(/(<link.+?href="|<script.+?src="|<iframe.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
        if($2.indexOf("https://")<0)return $1 + vscode.Uri.file(path.resolve(dirPath, $2))
		.with({ scheme: 'vscode-resource' }).toString() + '"';
        else return $1 + $2+'"';
    });
    return html;
}

module.exports = {
	activate,
	deactivate
}