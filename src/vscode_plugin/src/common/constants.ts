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

export const SELECTED_DIR = vscode.l10n.t('You selected a directory:');
export const SELECTE_DIR = vscode.l10n.t('Please select a directory.');
export const NO_RES_SELECTED = vscode.l10n.t('No resource selected.');
export const HDF_FRAMEWORK = vscode.l10n.t('Hdf Framework');
export const SA_FRAMEWORK = vscode.l10n.t('SystemAbility Framework');
export const NAPI_FRAMEWORK = vscode.l10n.t('N-API Framework');
export const SELECT_VERSION = vscode.l10n.t('Please select the version...');
export const INPUT_SERVICEID = vscode.l10n.t('Please input serviceId like 19000...');
export const INPUT_NO_EMPTY = vscode.l10n.t('Input cannot be empty');
export const INPUT_NUMBER = vscode.l10n.t('Please input a number...');
export const SELECT_FRAMWORK = vscode.l10n.t('Please select framework...');
export const CONFIRM_SELECT = vscode.l10n.t('Please confirm your selection...');
export const INPUT_INCONSISTENT = vscode.l10n.t('Inconsistent input');
export const PARSE_COMPLETE = vscode.l10n.t('Parse complete.');
export const GEN_COMPLETE = vscode.l10n.t('Generation complete:');
export const OPEN_IN_EXPLORER = vscode.l10n.t('Open in Explorer');
export const PICK_MAKE = vscode.l10n.t('Use Makefile for compilation.');
export const PICK_CMAKE = vscode.l10n.t('Use CMakeLists.txt for compilation.');
export const TOOL_PICK_PLACEHOLDER = vscode.l10n.t('Please select the way you want to compile: ');
export const OH_CROSS_COMPILE_TITLE = vscode.l10n.t('OpenHarmony Cross Compile');
export const COMPILATION_METHOD_LOST = vscode.l10n.t('Unable to comfirm the compilation method, compilation aborted.');
export const ARCH_PICK_64 = vscode.l10n.t('To compile 64-bit third-party library.');
export const ARCH_PICK_32 = vscode.l10n.t('To compile 32-bit third-party library.');
export const ARCH_PICK_PLACEHOLDER = vscode.l10n.t('Please select the target system architecture for compilation: ');
export const ARCHITECTURE_LOST = vscode.l10n.t('Unable to comfirm target system architecture, compilation aborted.');
export const LOCAL = vscode.l10n.t('Local');
export const LOCAL_DESCRIPTION = vscode.l10n.t('Please select the \'native\' folder in local OpenHarmony SDK files.');
export const DOWNLOAD = vscode.l10n.t('Download');
export const DOWNLOAD_DESCRIPTION = vscode.l10n.t('Download a specified version of OpenHarmony SDK from internet.');
export const SOURCE_PICK_PLACEHOLDER = vscode.l10n.t('Please select the SDK you want to use: ');
export const NATIVE_CHECK_FAILED = vscode.l10n.t('Unable to verify the integrity of the native tools in OpenHarmony SDK, please try again and select a correct path of the \'native\' folder.');
export const FOLDER_LOST = vscode.l10n.t('No folder selected, compilation aborted.');
export const API9_LABEL = vscode.l10n.t('API Version 9');
export const API9_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 3.2 Release.');
export const API10_LABEL = vscode.l10n.t('API Version 10');
export const API10_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 4.0 Release.');
export const API11_LABEL = vscode.l10n.t('API Version 11');
export const API11_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 4.1 Release.');
export const API12_LABEL = vscode.l10n.t('API Version 12');
export const API12_DETAIL = vscode.l10n.t('Please select a folder to install this SDK. It is compatible with OpenHarmony 5.0.0 Release.');
export const VERSION_PICK_PLACEHOLDER = vscode.l10n.t('Please specify the SDK version: ');
export const DOWNLOADING_TITLE = vscode.l10n.t('Downloading and installing SDK');
export const DOWNLOADING_START = vscode.l10n.t('Start downloading...');
export const DOWNLOADING_COMPLETE = vscode.l10n.t('Download complete. Extracting .tar.gz files... ');
export const SDK_INSTALLED = vscode.l10n.t('SDK installation complete.');
export const SDK_VERSION_LOST = vscode.l10n.t('Unable to specify the version of OpenHarmony SDK, compilation aborted.');
export const SDK_SOURCE_LOST = vscode.l10n.t('Unable to comfirm the source of OpenHarmony SDK, compilation aborted.');
export const CMAKE_MAKE_LOST = vscode.l10n.t('Cannot detect CMakeLists.txt or Makefile!');