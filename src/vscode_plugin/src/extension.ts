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
import { downloadSdk , extractTarGz, extractZip, crossCompile, checkNative } from './ohcrosscompile';
import { parseHeaderFile } from './parse/parsec';
import { DtscppRootInfo, GenInfo } from './gen/datatype';
import { parseTsFile } from './parse/parsets';
import { genServiceFile } from './gen/gensa';
import { genDtsFile } from './gen/gendts';
import { genHdfFile } from './gen/genhdf';
import { genDtsCppFile, genCppFile } from './gen/gendtscpp';
import { H2dtsCtrl } from './controller/h2dtsctrl';
import { H2saCtrl } from './controller/h2sactrl';
import { H2hdfCtrl } from './controller/h2hdfctrl';
import { H2dtscppCtrl } from './controller/h2dtscppctrl';
import { Dts2cppCtrl } from './controller/dts2cppctrl';

// ��ȡ���ػ��ַ���
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
const PICK_MAKE = vscode.l10n.t('Use Makefile for compilation.');
const PICK_CMAKE = vscode.l10n.t('Use CMakeLists.txt for compilation.');
const TOOL_PICK_PLACEHOLDER = vscode.l10n.t('Please select the way you want to compile: ');
const OH_CROSS_COMPILE_TITLE = vscode.l10n.t('OpenHarmony Cross Compile');
const COMPILATION_METHOD_LOST = vscode.l10n.t('Unable to comfirm the compilation method, compilation aborted.');
const ARCH_PICK_64 = vscode.l10n.t('To compile 64-bit third-party library.');
const ARCH_PICK_32 = vscode.l10n.t('To compile 32-bit third-party library.');
const ARCH_PICK_PLACEHOLDER = vscode.l10n.t('Please select the target system architecture for compilation: ');
const ARCHITECTURE_LOST = vscode.l10n.t('Unable to comfirm target system architecture, compilation aborted.');
const LOCAL = vscode.l10n.t('Local');
const LOCAL_DESCRIPTION = vscode.l10n.t('Please select the \'native\' folder in local OpenHarmony SDK files.');
const DOWNLOAD = vscode.l10n.t('Download');
const DOWNLOAD_DESCRIPTION = vscode.l10n.t('Download a specified version of OpenHarmony SDK from internet.');
const SOURCE_PICK_PLACEHOLDER = vscode.l10n.t('Please select the SDK you want to use: ');
const NATIVE_CHECK_FAILED = vscode.l10n.t('Unable to verify the integrity of the native tools in OpenHarmony SDK, please try again and select a correct path of the \'native\' folder.');
const FOLDER_LOST = vscode.l10n.t('No folder selected, compilation aborted.');
const API9_LABEL = vscode.l10n.t('API Version 9');
const API9_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 3.2 Release.');
const API10_LABEL = vscode.l10n.t('API Version 10');
const API10_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 4.0 Release.');
const API11_LABEL = vscode.l10n.t('API Version 11');
const API11_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 4.1 Release.');
const API12_LABEL = vscode.l10n.t('API Version 12');
const API12_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 5.0.0 Release.');
const VERSION_PICK_PLACEHOLDER = vscode.l10n.t('Please specify the SDK version: ');
const DOWNLOADING_TITLE = vscode.l10n.t('Downloading and installing SDK');
const DOWNLOADING_START = vscode.l10n.t('Start downloading...');
const DOWNLOADING_COMPLETE = vscode.l10n.t('Download complete. Extracting .tar.gz files... ');
const SDK_INSTALLED = vscode.l10n.t('SDK installation complete.');
const SDK_VERSION_LOST = vscode.l10n.t('Unable to specify the version of OpenHarmony SDK, compilation aborted.');
const SDK_SOURCE_LOST = vscode.l10n.t('Unable to comfirm the source of OpenHarmony SDK, compilation aborted.');
const CMAKE_MAKE_LOST = vscode.l10n.t('Cannot detect CMakeLists.txt or Makefile!');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld-sample" is now active!');

    const ohcrosscompile = vscode.commands.registerCommand('extension.ohcrosscompile', async (uri) => {
      let compileTool: string;
      let thirdPartyPath: string;
      let nativePath: string;
      let ohArchitecture = new Array();
      const platform = os.platform();
      
  
      if (uri && uri.path) {
        thirdPartyPath = uri.path;
        if (platform === "win32") {
          thirdPartyPath = thirdPartyPath.slice(1);
        }
        const canCmake = fs.existsSync(thirdPartyPath.concat("/CMakeLists.txt"));
        const canMake = fs.existsSync(thirdPartyPath.concat("/GNUmakefile")) || fs.existsSync(thirdPartyPath.concat("/Makefile")) || fs.existsSync(thirdPartyPath.concat("/makefile"));
        if (canCmake || canMake) {  //�����⵽CMakeLists.txt��makefile������Լ���

  
          // ��û�в���ļ��С���װ�ļ��У��򴴽������Զ���ȡ����װĿ¼
          const ohCrossCompilePath = thirdPartyPath.concat("/ohCrossCompile");
          if (!fs.existsSync(ohCrossCompilePath)) {
            fs.mkdirSync(ohCrossCompilePath);
          }
  
          // ��û�������ļ�������Ĭ�����ô��������ļ�
          const configPath = ohCrossCompilePath.concat("/config.json")
          if (!fs.existsSync(configPath)) {
            const defaultConfig = {
              settings: {
                compileTool: "",
                nativePath: "",
                thirdPartyPath: thirdPartyPath,
                // ohArchitecture: ["arm64-v8a", "armeabi-v7a"]
                ohArchitecture: []
              },
              actions: []
            };
            fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 4), 'utf8');
          }
          const configContent = JSON.parse(fs.readFileSync(configPath, 'utf8'));
          if (configContent.settings === undefined) {
            const defaultConfig = {
              settings: {
                compileTool: "",
                nativePath: "",
                thirdPartyPath: thirdPartyPath,
                // ohArchitecture: ["arm64-v8a", "armeabi-v7a"]
                ohArchitecture: []
              },
              actions: []
            };
            fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 4), 'utf8');
          }
  
          // ��ȡ���뷽ʽ��make����cmake
          if (configContent.settings.compileTool !== undefined && (configContent.settings.compileTool === "make" || configContent.settings.compileTool === "cmake")) {  //��������ļ����Ѿ��洢���뷽ʽ������
            compileTool = configContent.settings.compileTool;
          } else if (canCmake && canMake) {   //���Զ��жϳ�make��cmake����ʹ�ã���ѯ���û������洢���
  
            const toolPickItems = [
              {
                label: "make",
                description: PICK_MAKE
              },
              {
                label: "cmake",
                description: PICK_CMAKE
              }
            ];
            const toolPickOptions = {
              canPickMany: false,
              ignoreFocusOut: true,
              placeHolder: TOOL_PICK_PLACEHOLDER,
              title: OH_CROSS_COMPILE_TITLE
            };
            const toolPick = await vscode.window.showQuickPick(toolPickItems, toolPickOptions);
  
            if (toolPick) {
              compileTool = toolPick.label;
              configContent.settings.compileTool = compileTool;
              fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
            } else {
              vscode.window.showInformationMessage(COMPILATION_METHOD_LOST);
              return;
            }
          } else if (canCmake) {  //���Զ��жϳ�ֻ����ʹ��cmake
            compileTool = "cmake";
            configContent.settings.compileTool = "cmake";
            fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
          } else {  //���Զ��жϳ�ֻ����ʹ��make
            compileTool = "make";
            configContent.settings.compileTool = "make";
            fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
          }
  
  
          // ȷ��Ҫ�����CPU�ܹ�����װ�ļ������������򴴽�
          if (configContent.settings.ohArchitecture === undefined || configContent.settings.ohArchitecture.length === 0) {  //�����������ļ��޷�ȷ��CPU�ܹ���������ѯ���û�
            const archPickItems = [
              {
                label: "arm64-v8a",
                description: ARCH_PICK_64
              },
              {
                label: "armeabi-v7a",
                description: ARCH_PICK_32
              }
            ];
            const archPickOptions = {
              canPickMany: true,
              ignoreFocusOut: true,
              placeHolder: ARCH_PICK_PLACEHOLDER,
              title: OH_CROSS_COMPILE_TITLE
            };
            const archPick = await vscode.window.showQuickPick(archPickItems, archPickOptions)
            if (archPick && Array.isArray(archPick) && archPick.length > 0) {   //����û�ѡ�����Ϣ�������������ļ�
              for (let item of archPick) {
                let arch = item.label;
                ohArchitecture.push(arch);
                if (!fs.existsSync(`${ohCrossCompilePath}/${arch}`)) {
                  fs.mkdirSync(`${ohCrossCompilePath}/${arch}`);
                }
                if (!fs.existsSync(`${ohCrossCompilePath}/${arch}/installed`)) {
                  fs.mkdirSync(`${ohCrossCompilePath}/${arch}/installed`);
                }
              }
              configContent.settings.ohArchitecture = ohArchitecture;
              fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
            } else {
              vscode.window.showInformationMessage(ARCHITECTURE_LOST);
              return;
            }
          } else {
            if (configContent.settings.ohArchitecture.includes("arm64-v8a")) {
              ohArchitecture.push("arm64-v8a");
              if (!fs.existsSync(`${ohCrossCompilePath}/arm64-v8a`)) {
                fs.mkdirSync(`${ohCrossCompilePath}/arm64-v8a`);
              }
              if (!fs.existsSync(`${ohCrossCompilePath}/arm64-v8a/installed`)) {
                fs.mkdirSync(`${ohCrossCompilePath}/arm64-v8a/installed`);
              }
            }
            if (configContent.settings.ohArchitecture.includes("armeabi-v7a")) {
              ohArchitecture.push("armeabi-v7a");
              if (!fs.existsSync(`${ohCrossCompilePath}/armeabi-v7a`)) {
                fs.mkdirSync(`${ohCrossCompilePath}/armeabi-v7a`);
              }
              if (!fs.existsSync(`${ohCrossCompilePath}/armeabi-v7a/installed`)) {
                fs.mkdirSync(`${ohCrossCompilePath}/armeabi-v7a/installed`);
              }
            }
          }       
          
  
          // ȷ��sdk��native���ߵ�·��
          if (configContent.settings.nativePath === undefined || configContent.settings.nativePath === "") {  //ѯ���û�
  
            // ȷ��sdk��Դ�Ǳ��ػ�������
            const sourcePickItems = [
              {
                label: LOCAL,
                description: LOCAL_DESCRIPTION
              },
              {
                label: DOWNLOAD,
                description: DOWNLOAD_DESCRIPTION
              }
            ];
            const sourcePickOptions = {
              canPickMany: false,
              ignoreFocusOut: true,
              placeHolder: SOURCE_PICK_PLACEHOLDER,
              title: OH_CROSS_COMPILE_TITLE
            }
            const sourcePick = await vscode.window.showQuickPick(sourcePickItems, sourcePickOptions);
            
            if (sourcePick) {
              if (sourcePick.label === LOCAL) {   //��sdk��ԴΪ���أ���ѯ���û�native���ڵľ���·����������Ƿ�Ϸ�
                const folderUri = await vscode.window.showOpenDialog({
                  canSelectMany: false,
                  canSelectFolders: true,
                  canSelectFiles: false
                });
                if (folderUri && folderUri[0]) {
                  let folderPath = folderUri[0].path;
                  if (platform === "win32") {
                    folderPath = folderPath.slice(1);
                  }
                  if (checkNative(platform, folderPath)) {
                    nativePath = folderPath;
                    configContent.settings.nativePath = folderPath;
                    fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
  
                    // ִ�б�������
                    crossCompile(platform, undefined, configPath, thirdPartyPath, compileTool, ohArchitecture, nativePath, ohCrossCompilePath);
                  } else {
                    vscode.window.showInformationMessage(NATIVE_CHECK_FAILED);
                    return;
                  }
                } else {
                  vscode.window.showInformationMessage(FOLDER_LOST);
                  return;
                }
              } else if (sourcePick.label === DOWNLOAD) {   //��sdk��ԴΪ���磬��ѯ�����ذ汾������·�������ز���ѹsdk
                // ��ȡ���ذ汾���Ӷ������������
                const versionPickItems = [
                  {
                    label: API9_LABEL,
                    description: "Ohos_sdk_public 3.2.11.9 (API Version 9 Release)",
                    detail: API9_DETAIL
                  },
                  {
                    label: API10_LABEL,
                    description: "Ohos_sdk_public 4.0.10.13 (API Version 10 Release)",
                    detail: API10_DETAIL
                  },
                  {
                    label: API11_LABEL,
                    description: "Ohos_sdk_public 4.1.7.5 (API Version 11 Release)",
                    detail: API11_DETAIL
                  },
                  {
                    label: API12_LABEL,
                    description: "Ohos_sdk_public 5.0.0.71 (API Version 12 Release)",
                    detail: API12_DETAIL
                  },
                ];
                const versionPickOptions = {
                  canPickMany: false,
                  ignoreFocusOut: true,
                  placeHolder: VERSION_PICK_PLACEHOLDER,
                  title: OH_CROSS_COMPILE_TITLE
                }
                const versionPick = await vscode.window.showQuickPick(versionPickItems, versionPickOptions);
                if (versionPick) {
                  const apiVersion = versionPick.label;
                  let downloadLink: string;
                  switch (apiVersion) {
                    case API9_LABEL:
                      downloadLink = "https://repo.huaweicloud.com/openharmony/os/3.2-Release/ohos-sdk-windows_linux-public.tar.gz";
                      break;
                    case API10_LABEL:
                      downloadLink = "https://repo.huaweicloud.com/openharmony/os/4.0-Release/ohos-sdk-windows_linux-public.tar.gz";
                      break;
                    case API11_LABEL:
                      downloadLink = "https://repo.huaweicloud.com/openharmony/os/4.1-Release/ohos-sdk-windows_linux-public.tar.gz";
                      break;
                    case API12_LABEL:
                      downloadLink = "https://repo.huaweicloud.com/openharmony/os/5.0.0-Release/ohos-sdk-windows_linux-public.tar.gz";
                      break;
                  }
  
                  // ѯ������·��
                  const folderUri = await vscode.window.showOpenDialog({
                    canSelectMany: false,
                    canSelectFolders: true,
                    canSelectFiles: false
                  });
                  if (folderUri && folderUri[0]) {
                    let folderPath = folderUri[0].path;
                    if (platform === "win32") {
                      folderPath = folderPath.slice(1);
                    }
                    let filePath = folderPath.concat("/ohos-sdk-windows_linux-public.tar.gz");
                    
                    // ���ز���ѹsdk�е�native
                    await vscode.window.withProgress({
                      location: vscode.ProgressLocation.Notification,
                      title: DOWNLOADING_TITLE,
                      cancellable: false
                    }, async (progress) => {
                      progress.report({ increment: 0, message: DOWNLOADING_START });
                      await downloadSdk(downloadLink, filePath, progress);
                      vscode.window.showInformationMessage(vscode.l10n.t('SDK downloaded to: {0}', filePath));
                      // vscode.window.showInformationMessage(`SDK downloaded to: ${filePath}`);
  
                      // ��ѹsdk�е�native����ƴװnativePath
                      progress.report({ increment: 10, message: DOWNLOADING_COMPLETE });
                      await extractTarGz(filePath, folderPath);
                      progress.report({ increment: 100, message: SDK_INSTALLED });
  
                      nativePath = folderPath;
                      if (apiVersion !== API12_LABEL) {    //api12�汾·����û��ohos-sdk��9-11�汾����
                        nativePath = nativePath.concat("/ohos-sdk");
                      }
                      if (platform === "win32") {
                        nativePath = nativePath.concat("/windows");    //windowsϵͳ�µ�nativePath·��
                      } else {
                        nativePath = nativePath.concat("/linux");   //linuxϵͳ�µ�nativePath·��
                      }
                      for (const file of await fs.promises.readdir(nativePath)) {
                        if (file.startsWith("native")) {
                          filePath = nativePath.concat("/" + file);   //��ȡnativeѹ�������ļ�·��
                        }
                      }
                      console.log(filePath);
                      const terminal = vscode.window.createTerminal({ name: OH_CROSS_COMPILE_TITLE });
                      terminal.show();
                      await extractZip(platform, terminal, filePath, nativePath);
                      nativePath = nativePath.concat("/native");
                      configContent.settings.nativePath = nativePath;
                      fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
  
                      // ִ�б�������
                      crossCompile(platform, terminal, configPath, thirdPartyPath, compileTool, ohArchitecture, nativePath, ohCrossCompilePath);
                    });
                  } else {
                    vscode.window.showInformationMessage(FOLDER_LOST);
                    return;
                  }
                } else {
                  vscode.window.showInformationMessage(SDK_VERSION_LOST);
                  return;
                }
              }
            } else {
              vscode.window.showInformationMessage(SDK_SOURCE_LOST);
              return;
            }
          } else {  //�����ļ���nativePath�ǿգ���������ļ��л�ȡ
            if (checkNative(platform, configContent.settings.nativePath)) {
              nativePath = configContent.settings.nativePath;
              // ִ�б�������
              crossCompile(platform, undefined, configPath, thirdPartyPath, compileTool, ohArchitecture, nativePath, ohCrossCompilePath);
            } else {  //�������ļ��л�ȡ��nativePath�Ƿ��������ã�����ʾ
              configContent.settings.nativePath = "";
              fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');
              vscode.window.showInformationMessage(NATIVE_CHECK_FAILED);
              return;
            }
          }
        } else {    //�û���ѡ�ļ��в���CMakeLists.ext��Makefile
          vscode.window.showErrorMessage(CMAKE_MAKE_LOST);
        }
      }
    });
    context.subscriptions.push(ohcrosscompile);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const h2sa = vscode.commands.registerCommand('extension.h2sa', async (uri) => {
      let h2saCtrl = new H2saCtrl(uri);
      h2saCtrl.init();
      // The code you place here will be executed every time your command is executed
      // if (uri && uri.fsPath) {
      //     let versionTag = '3.2';
      //     const version = await vscode.window.showQuickPick(
      //       ['OpenHarmony 4.1 release', 'OpenHarmony 3.2 release'], 
      //       { placeHolder: SELECT_VERSION }
      //     );
      //     if (version === 'OpenHarmony 4.1 release') {
      //       versionTag = '4.1'
      //     } else if (version === 'OpenHarmony 3.2 release') {
      //       versionTag = '3.2'
      //     }
      //     const serviceId = await vscode.window.showInputBox({
      //       placeHolder: INPUT_SERVICEID,
      //       value: "19000", // ����Ĭ��ֵ
      //       validateInput: (input) => {
      //           if (!input) {
      //               return INPUT_NO_EMPTY;
      //           }
      //           if (!Number(input)) {
      //               return INPUT_NUMBER
      //           }
      //       }
      //     });
      //     generateSa(uri.fsPath, versionTag, serviceId as string);
      // }
    });
    context.subscriptions.push(h2sa);

    const h2hdf = vscode.commands.registerCommand('extension.h2hdf', async (uri) => {
      let h2hdfCtrl = new H2hdfCtrl(uri);
      h2hdfCtrl.init();
        // // The code you place here will be executed every time your command is executed
        // if (uri && uri.fsPath) {
        //   let versionTag = '4.1'; 
        //   const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release'], { placeHolder: SELECT_VERSION });
        //   if (version === 'OpenHarmony 4.1 release') {
        //     versionTag = '4.1'
        //   }
        //   generateHdf(uri.fsPath, versionTag);
        // }
    });
    context.subscriptions.push(h2hdf);

    const h2dts = vscode.commands.registerCommand('extension.h2dts', async (uri: vscode.Uri) => {
      let h2dtsCtrl = new H2dtsCtrl(uri);
      h2dtsCtrl.init();

      // // The code you place here will be executed every time your command is executed
      // if (uri && uri.fsPath) {
      //   vscode.window.withProgress({
      //     location: vscode.ProgressLocation.Notification,
      //     title: "Generating .d.ts ...",
      //     cancellable: false
      //   }, async (progress) => {
      //     // parse
      //     let parseRes = await parseHeaderFile(uri.fsPath);
      //     console.log('parse header file res: ', parseRes);
      //     progress.report({ increment: 50, message: PARSE_COMPLETE });
          
      //     let rootInfo: GenInfo = {
      //       parseObj: parseRes,
      //       rawFilePath: uri.fsPath,  // e://xxx.h
      //       fileName: path.basename(uri.fsPath, '.h')  // xxx
      //     };
      //     // generator
      //     let outPath = genDtsFile(rootInfo);
      //     progress.report({ increment: 100, message: GEN_COMPLETE + outPath });
      //   });
      // }
    });
    context.subscriptions.push(h2dts);

    const h2dtscpp = vscode.commands.registerCommand('extension.h2dtscpp', async (uri) => {
      let h2dtscppCtrl = new H2dtscppCtrl(uri);
      h2dtscppCtrl.init();
      // // The code you place here will be executed every time your command is executed
        // if (uri && uri.fsPath) {
        //     generateDtscpp(uri.fsPath);
        // }
    });
    context.subscriptions.push(h2dtscpp);

    const dts2cpp = vscode.commands.registerCommand('extension.dts2cpp', (uri) => {
      let dts2cppCtrl = new Dts2cppCtrl(uri);
      dts2cppCtrl.init();
      // The code you place here will be executed every time your command is executed
      // console.log('uri is : ' + uri.fsPath );
      // if (uri && uri.fsPath) {
      //   vscode.window.withProgress({
      //     location: vscode.ProgressLocation.Notification,
      //     title: "Generating CPP...",
      //     cancellable: false
      //   }, async (progress) => {
      //     const filename = path.basename(uri.fsPath);
      //     console.log('get filename ' );
      //     if (filename.endsWith('.d.ts')) {
      //         // Display a message box to the user
      //         // analyze
      //         let res = parseTsFile(uri.fsPath);
      //         console.info('res: ' + JSON.stringify(res));
      //         progress.report({ increment: 50, message: PARSE_COMPLETE });
      //         // generator
      //         let out = path.dirname(uri.fsPath);
      //         genCppFile(res, uri.fsPath, out);
      //         progress.report({ increment: 100, message: GEN_COMPLETE + out });
      //     } else {
      //         console.log('not dts uri is : ' + uri.fsPath );
      //         // Display a message box to the user
      //         vscode.window.showInformationMessage(`${uri.fsPath} is not a .d.ts file!`);
      //     }
      //   });
      // }
    });
    context.subscriptions.push(dts2cpp);

    // welcome page in vscode when no file or dir is opened
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
        // input the version of oh
        let versionTag = '4.1';
        const version = await vscode.window.showQuickPick(['OpenHarmony 4.1 release'], { placeHolder: SELECT_VERSION })
        if (version === 'OpenHarmony 4.1 release') {
          versionTag === '4.1'     
        }
        generateHdf(hdfInputPath, versionTag);
      } else if (value === SA_FRAMEWORK) {
        // input the version of oh
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
   // show output path
   const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hdfInputPath), OPEN_IN_EXPLORER);
   if (choice === OPEN_IN_EXPLORER) {
     // open the output folder
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
  // show the output path
  const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hPath), OPEN_IN_EXPLORER);
  if (choice === OPEN_IN_EXPLORER) {
    // open output dir
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
  // show genarate path
  const choice = await vscode.window.showInformationMessage('outPath:', path.dirname(hFilePath), OPEN_IN_EXPLORER);
  if (choice === OPEN_IN_EXPLORER) {
    // open the folder
    vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(hFilePath));
  }
}

