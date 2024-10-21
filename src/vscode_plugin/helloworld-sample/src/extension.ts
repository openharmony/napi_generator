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
import fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld-sample" is now active!');
    vscode.window.showInformationMessage('Congratulations, your extension "helloworld-sample" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const h2sa3_2 = vscode.commands.registerCommand('extension.h2sa3-2', async (uri) => {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage('extension.h2sa3-2!');
        if (uri && uri.fsPath) {
            vscode.window.showInformationMessage('extension.h2sa3-2: h path: ' + uri.fsPath);
            let testContent = 'test vs plugin;'
            let paths = path.dirname(uri.fsPath);
            let filePath = path.join(paths, 'test222.txt');
            fs.writeFileSync(filePath, testContent);
            // parse
            let funDescList = await parseHeaderFile(uri.fsPath);
            console.log('parse header file res: ', funDescList);
            console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
            // generator
            let out = path.dirname(uri.fsPath);
            let serviceName = path.basename(uri.fsPath, '.h');
            let rootInfo = {
              serviceName: serviceName,
              funcs: funDescList.funcs,
              serviceId: '19000',
              versionTag: '3.2'
            };
            genServiceFile(rootInfo, out);

            vscode.window.showInformationMessage('h2sa3_2 end!');
            console.info('h2sa3_2 end!')

        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2sa3_2!');
    });

    context.subscriptions.push(h2sa3_2);

    const h2sa4_1 = vscode.commands.registerCommand('extension.h2sa4-1', async (uri) => {
      // The code you place here will be executed every time your command is executed
      if (uri && uri.fsPath) {
          // parse
          let funDescList = await parseHeaderFile(uri.fsPath);
          console.log('parse header file res: ', funDescList);
          console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
          // generator
          let out = path.dirname(uri.fsPath);
          let serviceName = path.basename(uri.fsPath, '.h');
          let rootInfo = {
            serviceName: serviceName,
            funcs: funDescList.funcs,
            serviceId: '19000',
            versionTag: '4.1'
          };
          genServiceFile(rootInfo, out);

          console.info('h2sa4_1 end!')

      }
      // Display a message box to the user
      vscode.window.showInformationMessage('h2sa4_1!');
    });

    context.subscriptions.push(h2sa4_1);

    const h2hdf4_1 = vscode.commands.registerCommand('extension.h2hdf4-1', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            // analyze
            let funDescList = await parseHeaderFile(uri.fsPath);
            console.log('parse header file res: ', funDescList);
            console.log('parse header file jsonstr: ', JSON.stringify(funDescList));

            // generator
            let out = path.dirname(uri.fsPath);
            let driverName = path.basename(uri.fsPath, '.h').toLocaleLowerCase();
            let rootInfo = {
              driverName: driverName,
              funcs: funDescList.funcs,
              versionTag: '4.1'
            };
            genHdfFile(rootInfo, out);

            console.info('h2hdf4_1 end!')
        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2hdf4_1!');
    });

    context.subscriptions.push(h2hdf4_1);

    const h2dts = vscode.commands.registerCommand('extension.h2dts', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            // parse
            let funDescList = await parseHeaderFile(uri.fsPath);
            console.log('parse header file res: ', funDescList);
            console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
            let fileName = path.basename(uri.fsPath, '.h');
            let rootInfo: DtscppRootInfo = {
              funcs: funDescList.funcs,
              rawFilePath: uri.fsPath,  // e://xxx.h
              fileName: fileName  // xxx
            };
            // generator
            let out = path.dirname(uri.fsPath);
            genDtsFile(rootInfo, out);

        }
        // Display a message box to the user
        vscode.window.showInformationMessage('h2dts!');
    });

    context.subscriptions.push(h2dts);

    const h2dtscpp = vscode.commands.registerCommand('extension.h2dtscpp', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            // let rawContent = fs.readFileSync(uri.fsPath);
            // parse
            let funDescList = await parseHeaderFile(uri.fsPath);
            let fileName = path.basename(uri.fsPath, '.h');
            console.log('parse header file res: ', funDescList);
            console.log('parse header file jsonstr: ', JSON.stringify(funDescList));
            let rootInfo: DtscppRootInfo = {
              funcs: funDescList.funcs,
              rawFilePath: uri.fsPath,  // e://xxx.h
              fileName: fileName  // xxx
            };
            
            // generator
            let out = path.dirname(uri.fsPath);
            genDtsCppFile(rootInfo, out);

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
