/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import * as vscode from 'vscode';
import * as path from 'path';
import * as ts from 'typescript';
import { parseHeaderFile } from './parsec';
import { DtscppRootInfo } from './datatype';
import { parseTsFile } from './parsets';
import { genServiceFile } from './gensa';
import { genDtsFile } from './gendts';
import { genHdfFile } from './genhdf';
import { genDtsCppFile } from './gendtscpp';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld-sample" is now active!');

    const ohcrosscompile = vscode.commands.registerCommand('extension.ohcrosscompile', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            const stat = await vscode.workspace.fs.stat(uri);
            if (stat.type === vscode.FileType.Directory) {
                vscode.window.showInformationMessage(`You selected a directory: ${uri.fsPath}`);
            } else {
                vscode.window.showWarningMessage('Please select a directory.');
            }
        } else {
            vscode.window.showWarningMessage('No resource selected.');
        }
        // Display a message box to the user
        vscode.window.showInformationMessage('ohcrosscompile!');
    });

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const h2sa = vscode.commands.registerCommand('extension.h2sa', async (uri) => {
      // The code you place here will be executed every time your command is executed
      if (uri && uri.fsPath) {
          let versionTag = '3.2'; 
          const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release', 'OpenHarmony 3.2 release'], { placeHolder: 'Please select the version...' });
          if (version === 'OpenHarmony 4.1 release') {
            versionTag = '4.1'
          } else if (version === 'OpenHarmony 3.2 release') {
            versionTag = '3.2'
          }
          const serviceId = await vscode.window.showInputBox({
            placeHolder: 'Please input serviceId...',
            validateInput: (input) => {
                if (!input) {
                    return 'Input cannot be empty';
                }
                if (!Number(input)) {
                    return 'Input a number'
                }
            }
          });
          generateSa(uri.fsPath, versionTag, serviceId as string);
      }
      // Display a message box to the user
      vscode.window.showInformationMessage('h2sa!');
    });

    context.subscriptions.push(h2sa);

    const h2hdf = vscode.commands.registerCommand('extension.h2hdf', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
          let versionTag = '4.1'; 
          const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release'], { placeHolder: 'Please select the version...' });
          if (version === 'OpenHarmony 4.1 release') {
            versionTag = '4.1'
          }
          generateHdf(uri.fsPath, versionTag);
        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2hdf!');
    });
    context.subscriptions.push(h2hdf);

    const h2dts = vscode.commands.registerCommand('extension.h2dts', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
           generateDts(uri.fsPath);
        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2dts!');
    });
    context.subscriptions.push(h2dts);

    const h2dtscpp = vscode.commands.registerCommand('extension.h2dtscpp', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            generateDtscpp(uri.fsPath);
        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2dtscpp!');
    });
    context.subscriptions.push(h2dtscpp);

    const dts2cpp = vscode.commands.registerCommand('extension.dts2cpp', (uri) => {
        // The code you place here will be executed every time your command is executed
        console.log('uri is : ' + uri.fsPath );
        if (uri && uri.fsPath) {
            const extname = path.extname(uri.fsPath);
            const filename = path.basename(uri.fsPath);
            console.log('get filename ' );
            if (filename.endsWith('.d.ts')) {
                // Display a message box to the user
                // parseTsFile(uri.fsPath)
                let res = parseTsFile(uri.fsPath);
                console.info('res: ' + JSON.stringify(res));
                vscode.window.showInformationMessage('dts2cpp!');
            } else {
                console.log('not dts uri is : ' + uri.fsPath );
                // Display a message box to the user
                vscode.window.showInformationMessage(`${uri.fsPath} is not a .d.ts file!`);
            }
            // generator
        }
    });
    context.subscriptions.push(dts2cpp);

    // 欢迎菜单页面
    const ohGenerator = vscode.commands.registerCommand('extension.ohGenerator', async () => {
      // The code you place here will be executed every time your command is executed
      let hPath = path.join(__dirname, '../test/test.h');
      let hdfInputPath = path.join(__dirname, '../test/hello.h');
      const value = await vscode.window.showQuickPick(['Hdf Framework', 'SystemAbility Framework', 'N-API  Framework'], { placeHolder: 'Please select...' });
      const what = await vscode.window.showInputBox({ 
        placeHolder: 'Please input...',
        validateInput: (input) => {
          if (!input) {
            return 'Input cannot be empty';
          }
          if (input !== value) {
            return 'Inconsistent input'
          }
      }
      });
      if (value === 'Hdf Framework') {
        // 输入版本
        let versionTag = '4.1';
        const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release'], { placeHolder: 'Please select the version...' })
        if (version === 'OpenHarmony 4.1 release') {
          versionTag === '4.1'     
        }
        generateHdf(hdfInputPath, versionTag);
      } else if (value === 'SystemAbility Framework') {
        // 输入版本
        let versionTag = '3.2';
        const version = await vscode.window.showQuickPick(['OpenHarmony 3.2 release', 'OpenHarmony 4.1 release'], { placeHolder: 'Please select the version...' })
        if (version === 'OpenHarmony 4.1 release') {
          versionTag = '4.1';
        } else if (version === 'OpenHarmony 3.2 release') {
          versionTag = '3.2';
        }
        const serviceId = await vscode.window.showInputBox({
          placeHolder: 'Please input serviceId...',
          validateInput: (input) => {
              if (!input) {
                  return 'Input cannot be empty';
              }
              if (!Number(input)) {
                  return 'Input a number'
              }
          }
        });
        generateSa(hPath, versionTag, serviceId as string);
      } else if (value === 'N-API  Framework') {
        generateDtscpp(hPath);
      }
    });
    context.subscriptions.push(ohGenerator);
}

async function generateHdf(hdfInputPath: string, versionTag: string) {
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: 'Generating HDF...',
    cancellable: false
  }, async (progress) => {
    // analyze
    let funDescList = await parseHeaderFile(hdfInputPath);
    console.log('parse header file res: ', funDescList);
    console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
    progress.report({ increment: 50, message: 'Analyze complete.' });
    // generator
    let out = path.dirname(hdfInputPath);
    let driverName = path.basename(hdfInputPath, '.h').toLocaleLowerCase();
    let rootInfo = {
      driverName: driverName,
      funcs: funDescList.funcs,
      versionTag: versionTag
    };
    genHdfFile(rootInfo, out);
    progress.report({ increment: 100, message: 'Generation complete.' });
  });
   // 显示出生成路径
   const choice = await vscode.window.showInformationMessage('生成路径：', path.dirname(hdfInputPath), 'Open in Explorer');
   if (choice === 'Open in Explorer') {
     // 打开文件所在的目录
     vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hdfInputPath));
   }
}

async function generateSa(hPath: string, versionTag: string, serviceId: string) {
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: 'Generating SA...',
    cancellable: false
  }, async (progress) => {
    // analyze
    let funDescList = await parseHeaderFile(hPath);
    console.log('parse header file res: ', funDescList);
    console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

    progress.report({ increment: 50, message: 'Analyze complete.' });

    // generator
    let out = path.dirname(hPath);
    let serviceName = path.basename(hPath, '.h');
    let rootInfo = {
      serviceName: serviceName,
      funcs: funDescList.funcs,
      serviceId: serviceId,
      versionTag: versionTag
    };
    genServiceFile(rootInfo, out);
    progress.report({ increment: 100, message: 'Generation complete.' });
  });
  // 显示出生成路径
  const choice = await vscode.window.showInformationMessage('生成路径：', path.dirname(hPath), 'Open in Explorer');
  if (choice === 'Open in Explorer') {
    // 打开文件所在的目录
    vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hPath));
  }
}

async function generateDts(hPath: string) {
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: 'Generating DTS...',
    cancellable: false
  }, async (progress) => {
    // analyze
    let funDescList = await parseHeaderFile(hPath);
    console.log('parse header file res: ', funDescList);
    console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

    progress.report({ increment: 50, message: 'Analyze complete.' });

    let fileName = path.basename(hPath, '.h');
    let rootInfo = {
      funcs: funDescList.funcs,
      rawFilePath: hPath,
      fileName: fileName
    };
    // generator
    let out = path.dirname(hPath);
    genDtsFile(rootInfo, out);
    progress.report({ increment: 100, message: 'Generation complete.' });
  });
   // 显示出生成路径
   const choice = await vscode.window.showInformationMessage('生成路径：', path.dirname(hPath), 'Open in Explorer');
   if (choice === 'Open in Explorer') {
     // 打开文件所在的目录
     vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hPath));
   }
}

async function generateDtscpp(hFilePath: string) {
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: 'Generating DTSCPP...',
    cancellable: false
  }, async (progress) => {
    // analyze
    let funDescList = await parseHeaderFile(hFilePath);
    let fileName = path.basename(hFilePath, '.h');
    console.log('parse header file res: ', funDescList);
    console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

    progress.report({ increment: 50, message: 'Analyze complete.' });

    let rootInfo: DtscppRootInfo = {
      funcs: funDescList.funcs,
      rawFilePath: hFilePath,
      fileName: fileName // xxx
    };

    // generator
    let out = path.dirname(hFilePath);
    genDtsCppFile(rootInfo, out);
    progress.report({ increment: 100, message: 'Generation complete.' });
  });
  // 显示出生成路径
  const choice = await vscode.window.showInformationMessage('生成路径：', path.dirname(hFilePath), 'Open in Explorer');
  if (choice === 'Open in Explorer') {
    // 打开文件所在的目录
    vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hFilePath));
  }
}

