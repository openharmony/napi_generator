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
import * as fs from 'fs';
import * as os from 'os';
import { downloadSdk, extractTarGz, extractZip, crossCompile } from './ohcrosscompile';
import { parseHeaderFile } from './parsec';
import { DtscppRootInfo, GenInfo } from './datatype';
import { parseTsFile } from './parsets';
import { genServiceFile } from './gensa';
import { genDtsFile } from './gendts';
import { genHdfFile } from './genhdf';
import { genDtsCppFile } from './gendtscpp';

// 获取本地化字符串
const SELECTED_DIR = vscode.l10n.t('You selected a directory:');
const SELECTE_DIR = vscode.l10n.t('Please select a directory.');
const NO_RES_SELECTED = vscode.l10n.t('No resource selected.');
const HDF_FRAMEWORK = vscode.l10n.t('Hdf Framework');
const SA_FRAMEWORK = vscode.l10n.t('SystemAbility Framework');
const NAPI_FRAMEWORK = vscode.l10n.t('N-API Framework');
const SELECT_VERSION = vscode.l10n.t('Please select the version...');
const INPUT_SERVICEID = vscode.l10n.t('Please input serviceId like 19000...');
const INPUT_NO_EMPTY = vscode.l10n.t('Input cannot be empty');
const INPUT_NUMBER = vscode.l10n.t('Please input a number...');
const SELECT_FRAMWORK = vscode.l10n.t('Please select framework...');
const CONFIRM_SELECT = vscode.l10n.t('Please confirm your selection...');
const INPUT_INCONSISTENT = vscode.l10n.t('Inconsistent input');
const PARSE_COMPLETE = vscode.l10n.t('Parse complete.');
const GEN_COMPLETE = vscode.l10n.t('Generation complete:');
const OPEN_IN_EXPLORER = vscode.l10n.t('Open in Explorer');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld-sample" is now active!');

    const ohcrosscompile = vscode.commands.registerCommand('extension.ohcrosscompile', async (uri) => {
      const platform = os.platform();
      // vscode.window.showInformationMessage(`Platform: ${platform}`);
  
      // 创建选择框，选择要编译的三方库目录
      const thirdPartyPick = vscode.window.createQuickPick();
      thirdPartyPick.title = "OpenHarmony cross compile";
      thirdPartyPick.step = 1;
      thirdPartyPick.totalSteps = 5;
      thirdPartyPick.placeholder = "Please select the directory of the third-party library you want to compile. ";
      thirdPartyPick.items = [{ label: "Browse local files" }];
      thirdPartyPick.onDidAccept(async () => {
        const thirdPartyUri = await vscode.window.showOpenDialog({
          canSelectMany: false,   //只允许选择一个文件夹
          canSelectFolders: true, //能选择文件夹
          canSelectFiles: false     //不能选择文件
        });
        if (thirdPartyUri && thirdPartyUri[0]) {  //检查是否选择了文件
          // 获取文件路径
          let thirdPartyPath = "";
          thirdPartyPath = thirdPartyUri[0].path;
          if (platform === "win32") {   //Windows系统下也可以使用正斜杠的路径，如 /D:/Learning/native，但要去除最前面的/
            thirdPartyPath = thirdPartyPath.slice(1);
          }
          console.log(`thirdPartyPath: ${thirdPartyPath}`);
  
          // 创建选项框，选择是编译工具是make还是cmake
          const toolPick = vscode.window.createQuickPick();
          toolPick.title = "OpenHarmony cross compile";
          toolPick.step = 2;
          toolPick.totalSteps = 5;
          toolPick.placeholder = "Please select the way you want to compile: ";
          toolPick.items = [{ label: "cmake" }, { label: "make" }];
          toolPick.onDidAccept(async () => {
            // 获取编译工具选择的结果
            const compileTool = toolPick.selectedItems[0].label;
            // vscode.window.showInformationMessage("You've selected " + compileTool);
  
            // 创建选项框，选择交叉编译的目标系统架构，是arm64-v8a还是armeabi-v7a
            const archPick = vscode.window.createQuickPick();
            archPick.title = "OpenHarmony cross compile";
            archPick.step = 3;
            archPick.totalSteps = 5;
            archPick.placeholder = "Please select the target system architecture for compilation: ";
            archPick.items = [
              {
                label: "arm64-v8a",
                description: "To compile 64-bit third-party library."
              },
              {
                label: "armeabi-v7a",
                description: "To compile 32-bit third-party library."
              }
            ];
            archPick.onDidAccept(async () => {
              // 获取系统架构选择的结果
              const ohArchitecture = archPick.selectedItems[0].label;
              console.log(ohArchitecture);
  
              // 创建选项框，选择是使用本地sdk还是从网上下载指定版本的sdk
              const sourcePick = vscode.window.createQuickPick();
              sourcePick.title = "OpenHarmony cross compile";
              sourcePick.step = 4;
              sourcePick.totalSteps = 5;
              sourcePick.placeholder = "Please select the SDK you want to use: ";
              sourcePick.items = [
                {
                  label: "Local",
                  description: "Select the 'native' folder in local OpenHarmony SDK files."
                },
                {
                  label: "Download",
                  description: "Download a specified version of OpenHarmony SDK from internet."
                }
              ];
              sourcePick.onDidAccept(async () => {
                // 获取sdk来源选择的结果
                const sdkSource = sourcePick.selectedItems[0].label;
                console.log(sdkSource);
  
                let nativePath = "";
                if (sdkSource === "Local") {
                  const folderUri = await vscode.window.showOpenDialog({
                    canSelectMany: false,   //只允许选择一个文件夹
                    canSelectFolders: true, //能选择文件夹
                    canSelectFiles: false     //不能选择文件
                  });
                  if (folderUri && folderUri[0]) {  //检查是否选择了文件
                    // 获取文件路径
                    let folderPath = "";
                    let pathNames: string[];
                    folderPath = folderUri[0].path;
                    if (platform === "win32") {
                      folderPath = folderPath.slice(1);
                    }
                    pathNames = folderPath.split('/');
                    // 检查所选文件夹是否为native文件夹
                    if (pathNames[pathNames.length - 1] !== "native") {
                      vscode.window.showErrorMessage('Can\'t detect the native folder!');
                    } else {
                      nativePath = folderPath;
  
                      // 选择生成编译配置文件的目录
                      const generatePick = vscode.window.createQuickPick();
                      generatePick.title = "OpenHarmony cross compile";
                      generatePick.step = 5;
                      generatePick.totalSteps = 5;
                      generatePick.placeholder = "Please select a folder to store the generated compilation configuration files: ";
                      generatePick.items = [{ label: "Browse local files" }];
                      generatePick.onDidAccept(async () => {
                        const generateUri = await vscode.window.showOpenDialog({
                          canSelectMany: false,
                          canSelectFolders: true,
                          canSelectFiles: false
                        });
                        if (generateUri && generateUri[0]) {
                          let generatePath = "";
                          generatePath = generateUri[0].path;
                          if (platform === "win32") {
                            generatePath = generatePath.slice(1);
                          }
                          console.log(`generatePath: ${generatePath}`);
  
                          crossCompile(platform, undefined, thirdPartyPath, compileTool, ohArchitecture, nativePath, generatePath);
  
                        } else {
                          vscode.window.showErrorMessage('You haven\'t selected a folder to store the generated compilation configuration files! ');
                        }
                      });
                      generatePick.show();
                    }
                  } else {
                    vscode.window.showErrorMessage('No file selected');
                  }
  
                } else if (sdkSource === "Download") {
                  // 选择下载sdk的版本，并确定对应下载链接
                  const versionPick = vscode.window.createQuickPick();
                  versionPick.title = "OpenHarmony cross compile";
                  versionPick.placeholder = "Please specify the SDK version: ";
                  versionPick.items = [
                    {
                      label: "API Version 9",
                      description: "Ohos_sdk_public 3.2.11.9 (API Version 9 Release)",
                      detail: "Select a folder to install this SDK. It is compatible with OpenHarmony 3.2 Release."
                    },
                    {
                      label: "API Version 10",
                      description: "Ohos_sdk_public 4.0.10.13 (API Version 10 Release)",
                      detail: "Select a folder to install this SDK. It is compatible with OpenHarmony 4.0 Release."
                    },
                    {
                      label: "API Version 11",
                      description: "Ohos_sdk_public 4.1.7.5 (API Version 11 Release)",
                      detail: "Select a folder to install this SDK. It is compatible with OpenHarmony 4.1 Release."
                    },
                    {
                      label: "API Version 12",
                      description: "Ohos_sdk_public 5.0.0.71 (API Version 12 Release)",
                      detail: "Select a folder to install this SDK. It is compatible with OpenHarmony 5.0.0 Release."
                    },
                  ];
  
                  versionPick.onDidAccept(async () => {
                    const apiVersion = versionPick.selectedItems[0].label;
                    let downloadLink = "";
                    switch (apiVersion) {
                      case "API Version 9":
                        downloadLink = "https://repo.huaweicloud.com/openharmony/os/3.2-Release/ohos-sdk-windows_linux-public.tar.gz";
                        break;
                      case "API Version 10":
                        downloadLink = "https://repo.huaweicloud.com/openharmony/os/4.0-Release/ohos-sdk-windows_linux-public.tar.gz";
                        break;
                      case "API Version 11":
                        downloadLink = "https://repo.huaweicloud.com/openharmony/os/4.1-Release/ohos-sdk-windows_linux-public.tar.gz";
                        break;
                      case "API Version 12":
                        downloadLink = "https://repo.huaweicloud.com/openharmony/os/5.0.0-Release/ohos-sdk-windows_linux-public.tar.gz";
                        break;
                    }
                    console.log(downloadLink);
                    const terminal = vscode.window.createTerminal({name: "OpenHarmony cross compile"});
  
                    // 选择sdk下载路径
                    const folderUri = await vscode.window.showOpenDialog({
                      canSelectMany: false,
                      canSelectFolders: true,
                      canSelectFiles: false
                    });
                    if (folderUri && folderUri[0]) {
                      // 获取下载文件夹路径，拼装下载文件路径
                      let folderPath = "";
                      folderPath = folderUri[0].path;
                      if (platform === "win32") {
                        folderPath = folderPath.slice(1);
                      }
                      const fileName = "ohos-sdk-windows_linux-public.tar.gz";
                      let filePath = path.join(folderPath, fileName);
                      console.log(filePath);
  
                      // 下载并解压sdk中的native
                      await vscode.window.withProgress({
                        location: vscode.ProgressLocation.Notification,
                        title: "Downloading and installing SDK",
                        cancellable: false
                      }, async (progress) => {
                        // 下载sdk
                        progress.report({ increment: 0, message: "Start downloading..." });
  
                        await downloadSdk(downloadLink, filePath, progress);
                        vscode.window.showInformationMessage(`SDK downloaded to: ${filePath}`);
  
                        // 解压sdk中的native，并拼装nativePath
                        progress.report({ increment: 10, message: "Download complete. Extracting..." });
                        await extractTarGz(filePath, folderPath);
                        nativePath = folderPath;
                        if (apiVersion !== "API Version 12") {    //api12版本路径中没有ohos-sdk；9-11版本则有
                          nativePath = path.join(nativePath, "ohos-sdk");
                        }
                        if (platform === "win32") {
                          nativePath = path.join(nativePath, "windows");    //windows系统下的nativePath路径
                        } else {
                          nativePath = path.join(nativePath, "linux");   //linux系统下的nativePath路径
                        }
                        for (const file of await fs.promises.readdir(nativePath)) {
                          if (file.startsWith("native")) {
                            filePath = path.join(nativePath, file);   //获取native压缩包的文件路径
                          }
                        }
                        await extractZip(platform, terminal, filePath, nativePath);
                        nativePath = path.join(nativePath, "native");
                        vscode.window.showInformationMessage(`SDK (${apiVersion}) installed to: ${folderPath}`);
                        progress.report({ increment: 100, message: "SDK installation complete." })
                      });
  
                      // 选择生成编译配置文件的目录
                      const generatePick = vscode.window.createQuickPick();
                      generatePick.title = "OpenHarmony cross compile";
                      generatePick.step = 5;
                      generatePick.totalSteps = 5;
                      generatePick.placeholder = "Please select a folder to store the compiled binary files: ";
                      generatePick.items = [{ label: "Browse local files" }];
                      generatePick.onDidAccept(async () => {
                        const generateUri = await vscode.window.showOpenDialog({
                          canSelectMany: false,
                          canSelectFolders: true,
                          canSelectFiles: false
                        });
                        if (generateUri && generateUri[0]) {
                          let generatePath = "";
                          generatePath = generateUri[0].path;
                          if (platform === "win32") {
                            generatePath = generatePath.slice(1);
                          }
                          console.log(`generatePath: ${generatePath}`);
  
                          terminal.show();
                          crossCompile(platform, terminal, thirdPartyPath, compileTool, ohArchitecture, nativePath, generatePath);
                        } else {
                          vscode.window.showErrorMessage('You haven\'t selected a folder to store the compiled binary files! ');
                        }
                      });
                      generatePick.show();
                    } else {
                      vscode.window.showErrorMessage('You haven\'t selected a folder to install SDK! ');
                    }
                  });
                  versionPick.show();
                }
              });
              sourcePick.show();
            });
            archPick.show();
          });
          toolPick.show();
        } else {
          vscode.window.showErrorMessage('You haven\'t selected the third-party library folder to compile! ');
        }
      });
      thirdPartyPick.show();
    });

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const h2sa = vscode.commands.registerCommand('extension.h2sa', async (uri) => {
      // The code you place here will be executed every time your command is executed
      if (uri && uri.fsPath) {
          let versionTag = '3.2';
          const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release', 'OpenHarmony 3.2 release'], { placeHolder: SELECT_VERSION });
          if (version === 'OpenHarmony 4.1 release') {
            versionTag = '4.1'
          } else if (version === 'OpenHarmony 3.2 release') {
            versionTag = '3.2'
          }
          const serviceId = await vscode.window.showInputBox({
            placeHolder: INPUT_SERVICEID,
            value: "19000", // 设置默认值
            validateInput: (input) => {
                if (!input) {
                    return INPUT_NO_EMPTY;
                }
                if (!Number(input)) {
                    return INPUT_NUMBER
                }
            }
          });
          generateSa(uri.fsPath, versionTag, serviceId as string);
      }
    });

    context.subscriptions.push(h2sa);

    const h2hdf = vscode.commands.registerCommand('extension.h2hdf', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
          let versionTag = '4.1'; 
          const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release'], { placeHolder: SELECT_VERSION });
          if (version === 'OpenHarmony 4.1 release') {
            versionTag = '4.1'
          }
          generateHdf(uri.fsPath, versionTag);
        }
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
          progress.report({ increment: 50, message: PARSE_COMPLETE });
          
          let rootInfo: GenInfo = {
            parseObj: parseRes,
            rawFilePath: uri.fsPath,  // e://xxx.h
            fileName: path.basename(uri.fsPath, '.h')  // xxx
          };
          // generator
          let outPath = genDtsFile(rootInfo);
          progress.report({ increment: 100, message: GEN_COMPLETE + outPath });
        });
      }
    });
    context.subscriptions.push(h2dts);

    const h2dtscpp = vscode.commands.registerCommand('extension.h2dtscpp', async (uri) => {
        // The code you place here will be executed every time your command is executed
        if (uri && uri.fsPath) {
            generateDtscpp(uri.fsPath);
        }
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
      const value = await vscode.window.showQuickPick([HDF_FRAMEWORK, SA_FRAMEWORK, NAPI_FRAMEWORK], { placeHolder: SELECT_FRAMWORK });
      await vscode.window.showInputBox({ 
        placeHolder: CONFIRM_SELECT,
        validateInput: (input) => {
          if (!input) {
            return INPUT_NO_EMPTY;
          }
          if (input !== value) {
            return INPUT_INCONSISTENT;
          }
      }
      });
      if (value === HDF_FRAMEWORK) {
        // 输入版本
        let versionTag = '4.1';
        const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release'], { placeHolder: SELECT_VERSION })
        if (version === 'OpenHarmony 4.1 release') {
          versionTag === '4.1'     
        }
        generateHdf(hdfInputPath, versionTag);
      } else if (value === SA_FRAMEWORK) {
        // 输入版本
        let versionTag = '3.2';
        const version = await vscode.window.showQuickPick(['OpenHarmony 3.2 release', 'OpenHarmony 4.1 release'], { placeHolder: SELECT_VERSION })
        if (version === 'OpenHarmony 4.1 release') {
          versionTag = '4.1';
        } else if (version === 'OpenHarmony 3.2 release') {
          versionTag = '3.2';
        }
        const serviceId = await vscode.window.showInputBox({
          placeHolder: INPUT_SERVICEID,
          value: "19000",
          validateInput: (input) => {
              if (!input) {
                  return INPUT_NO_EMPTY;
              }
              if (!Number(input)) {
                  return INPUT_NUMBER
              }
          }
        });
        generateSa(hPath, versionTag, serviceId as string);
      } else if (value === NAPI_FRAMEWORK) {
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
    progress.report({ increment: 50, message: PARSE_COMPLETE });
    // generator
    let out = path.dirname(hdfInputPath);
    let driverName = path.basename(hdfInputPath, '.h').toLocaleLowerCase();
    let rootInfo = {
      driverName: driverName,
      funcs: funDescList.funcs,
      versionTag: versionTag
    };
    genHdfFile(rootInfo, out);
    progress.report({ increment: 100, message: GEN_COMPLETE + out});
  });
   // 显示出生成路径
   const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hdfInputPath), OPEN_IN_EXPLORER);
   if (choice === OPEN_IN_EXPLORER) {
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

    progress.report({ increment: 50, message: PARSE_COMPLETE });

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
    progress.report({ increment: 100, message: GEN_COMPLETE + out });
  });
  // 显示出生成路径
  const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hPath), OPEN_IN_EXPLORER);
  if (choice === OPEN_IN_EXPLORER) {
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

    progress.report({ increment: 50, message: PARSE_COMPLETE });

    let rootInfo: DtscppRootInfo = {
      funcs: funDescList.funcs,
      rawFilePath: hFilePath,
      fileName: fileName // xxx
    };

    // generator
    let out = path.dirname(hFilePath);
    genDtsCppFile(rootInfo, out);
    progress.report({ increment: 100, message: GEN_COMPLETE + out });
  });
  // 显示出生成路径
  const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hFilePath), OPEN_IN_EXPLORER);
  if (choice === OPEN_IN_EXPLORER) {
    // 打开文件所在的目录
    vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hFilePath));
  }
}

