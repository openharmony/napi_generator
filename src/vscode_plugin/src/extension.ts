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
import { DtscppRootInfo, GenInfo } from './datatype';
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
          const quickPick = vscode.window.createQuickPick();
          quickPick.title = "h2sa";
          quickPick.items = [
            { label: 'h2sa3-2' },
            { label: 'h2sa4-1'}
          ];
          quickPick.canSelectMany = false;

          quickPick.onDidAccept(async () => {
            const selectedItems = quickPick.selectedItems;
            if (selectedItems.length > 0) {
              const selectedItem = selectedItems[0].label;
              if (selectedItem === 'h2sa3-2') {
                versionTag = '3.2';
              } else if (selectedItem === 'h2sa4-1') {
                versionTag = '4.1';
              }
            }

            vscode.window.withProgress({
              location: vscode.ProgressLocation.Notification,
              title: "Generating SA...",
              cancellable: false
            }, async (progress) => {
             // progress.report({ increment: 0, message: "Starting..." });

              // analyze
              let funDescList = await parseHeaderFile(uri.fsPath);
              console.log('parse header file res: ', funDescList);
              console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

              progress.report({ increment: 50, message: "Analyze complete." });

              // generator
              let out = path.dirname(uri.fsPath);
              let serviceName = path.basename(uri.fsPath, '.h');
              let rootInfo = {
                serviceName: serviceName,
                funcs: funDescList.funcs,
                serviceId: '19000',
                versionTag: versionTag
              };
              genServiceFile(rootInfo, out);

              progress.report({ increment: 100, message: "Generation complete." });
            });

            quickPick.hide();
          })

          quickPick.onDidHide(() => {
            quickPick.dispose();
          })

          quickPick.show();
      }
      // Display a message box to the user
      vscode.window.showInformationMessage('h2sa!');
    });

    context.subscriptions.push(h2sa);

    const h2hdf = vscode.commands.registerCommand('extension.h2hdf', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            
            let versionTag = '4.1'; 
            const quickPick = vscode.window.createQuickPick();
            quickPick.title = "h2hdf";
            quickPick.items = [
              { label: 'h2hdf4-1'}
            ];
            quickPick.canSelectMany = false;

            quickPick.onDidAccept(async () => {
              const selectedItems = quickPick.selectedItems;
              if (selectedItems.length > 0) {
                const selectedItem = selectedItems[0].label;
                if (selectedItem === 'h2hdf4-1') {
                  versionTag = '4.1';
                }
              }

              vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Generating DTS...",
                cancellable: false
              }, async (progress) => {
                // progress.report({ increment: 0, message: "Starting..." });
  
                // analyze
                let funDescList = await parseHeaderFile(uri.fsPath);
                console.log('parse header file res: ', funDescList);
                console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
  
                progress.report({ increment: 50, message: "Analyze complete." });
  
                // generator
                let out = path.dirname(uri.fsPath);
                let driverName = path.basename(uri.fsPath, '.h').toLocaleLowerCase();
                let rootInfo = {
                  driverName: driverName,
                  funcs: funDescList.funcs,
                  versionTag: versionTag
                };
                genHdfFile(rootInfo, out);
  
                progress.report({ increment: 100, message: "Generation complete." });
              });

              quickPick.hide();
            })

            quickPick.onDidHide(() => {
              quickPick.dispose();
            })

            quickPick.show();
        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2hdf!');
    });
    context.subscriptions.push(h2hdf);

    const h2dts = vscode.commands.registerCommand('extension.h2dts', async (uri) => {
      // The code you place here will be executed every time your command is executed
      if (uri && uri.fsPath) {
        vscode.window.withProgress({
          location: vscode.ProgressLocation.Notification,
          title: "Generating .d.ts ...",
          cancellable: false
        }, async (progress) => {
          // parse
          let parseRes = await parseHeaderFile(uri.fsPath);
          console.log('parse header file res: ', parseRes);
          progress.report({ increment: 50, message: "Parse complete." });
          
          let rootInfo: GenInfo = {
            parseObj: parseRes,
            rawFilePath: uri.fsPath,  // e://xxx.h
            fileName: path.basename(uri.fsPath, '.h')  // xxx
          };
          // generator
          let outPath = genDtsFile(rootInfo);
          progress.report({ increment: 100, message: `Generation complete: ${outPath}.` });
        });
      }
    });
    context.subscriptions.push(h2dts);

    const h2dtscpp = vscode.commands.registerCommand('extension.h2dtscpp', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            vscode.window.withProgress({
              location: vscode.ProgressLocation.Notification,
              title: "Generating DTS...",
              cancellable: false
            }, async (progress) => {
              // progress.report({ increment: 0, message: "Starting..." });

              // parse
              let funDescList = await parseHeaderFile(uri.fsPath);
              let fileName = path.basename(uri.fsPath, '.h');
              console.log('parse header file res: ', funDescList);
              console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

              progress.report({ increment: 50, message: "Analyze complete." });

              let rootInfo: DtscppRootInfo = {
                funcs: funDescList.funcs,
                rawFilePath: uri.fsPath,  // e://xxx.h
                fileName: fileName  // xxx
              };
              
              // generator
              let out = path.dirname(uri.fsPath);
              genDtsCppFile(rootInfo, out);

              progress.report({ increment: 100, message: "Generation complete." });
            });
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
                console.info("res: " + JSON.stringify(res));
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
}
