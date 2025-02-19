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

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as https from 'https';
import * as zlib from 'zlib';
import * as tar from 'tar';
import { Logger } from './common/log';

const WINDOWS_START = vscode.l10n.t('Starting compilation on Windows.');
const TERMINAL_TITLE = vscode.l10n.t('OpenHarmony Cross Compile');
const LINUX_START = vscode.l10n.t('Starting compilation on Linux.');

export function checkNative(platform: string, nativePath: string): boolean {
    if (platform === "win32") {
        const cmakePath = nativePath.concat("/build-tools/cmake/bin/cmake.exe");
        const toolchainPath = nativePath.concat("/build/cmake/ohos.toolchain.cmake");
        const clangPath = nativePath.concat("/llvm/bin/clang.exe");
        const arPath = nativePath.concat("/llvm/bin/llvm-ar.exe");
        const ranlibPath = nativePath.concat("/llvm/bin/llvm-ranlib.exe");
        return fs.existsSync(cmakePath) && fs.existsSync(toolchainPath) && fs.existsSync(clangPath) && fs.existsSync(arPath) && fs.existsSync(ranlibPath);
    } else {
        const cmakePath = nativePath.concat("/build-tools/cmake/bin/cmake");
        const toolchainPath = nativePath.concat("/build/cmake/ohos.toolchain.cmake");
        const clangPath = nativePath.concat("/llvm/bin/clang");
        const arPath = nativePath.concat("/llvm/bin/llvm-ar");
        const ranlibPath = nativePath.concat("/llvm/bin/llvm-ranlib");
        return fs.existsSync(cmakePath) && fs.existsSync(toolchainPath) && fs.existsSync(clangPath) && fs.existsSync(arPath) && fs.existsSync(ranlibPath);
    }
}

// 下载url所指示的sdk文件，到destination所指示的文件中
export function downloadSdk(url: string, destination: string, progress: vscode.Progress<{ increment: number, message?: string }>): Promise<void> {
    return new Promise((resolve, reject) => {
        // 创建写入文件流
        const file = fs.createWriteStream(destination); 
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const totalSize = parseInt(String(response.headers['content-length']));
                Logger.getInstance().debug(`totalSize: ${totalSize}`);
                let downloadedSize = 0;
                response.on('data', (chunk) => {    
                    // 设置response的data事件，当每接收一个数据块时，计算下载进度并报告
                    downloadedSize += chunk.length;
                    const percentage = (downloadedSize / totalSize) * 100;
                    progress.report({ increment: ((chunk.length / totalSize) * 100 * 0.8), message: vscode.l10n.t('Downloading SDK ... {0}%', percentage.toFixed(2)) });
                });
                response.pipe(file);        
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                if (response.statusCode) {
                    vscode.window.showErrorMessage(vscode.l10n.t('Connection failed! Statuscode: {0}', response.statusCode));
                    reject(new Error(vscode.l10n.t('Failed to get \'{0}\' ({1})', url, response.statusCode)));
                }
                
            }
        }).on('error', (err) => {
            fs.unlink(destination, () => reject(err));
        });
    });
}

// 提取filePath所指示的.tar.gz文件，到destination所指示的文件夹中
export function extractTarGz(filePath: string, destination: string): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(zlib.createGunzip())
            .pipe(tar.extract({
                cwd: destination
            }))
            .on('finish', () => resolve())
            .on('error', (err) => reject(err));
    });
}

// 利用终端命令，提取filePath所指示的.zip文件，到destination所指示的文件夹中
export function extractZip(platform: string, terminal: vscode.Terminal, filePath: string, destination: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (platform === "win32") {
            terminal.sendText(`Expand-Archive -Path \"${filePath}\" -DestinationPath \"${destination}\" -Force`);
            terminal.processId?.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(vscode.l10n.t('Error extracting file: {0}', err));
                    reject(err);
                }
            );

        } else {
            terminal.sendText(`unzip ${filePath} -d ${destination}`);
            terminal.processId?.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(vscode.l10n.t('Error extracting file: {0}', err));
                    reject(err);
                }
            );
        }
    });
}

// windows系统下对三方库进行交叉编译
function crossCompile_win32(terminal: vscode.Terminal | undefined, thirdPartyPath: string, configPath: string, compileTool: string, ohArchitecture: string[], nativePath: string, ohCrossCompilePath: string): Promise<void> {
    return new Promise((resolve, reject) => {

        vscode.window.showInformationMessage(WINDOWS_START); 
        if (terminal === undefined) {   
            // 若使用本地的sdk，不进行解压操作，则terminal为undefined，在编译前进行创建
            terminal = terminal = vscode.window.createTerminal({
                name: TERMINAL_TITLE,
            });
            terminal.show();
        } else {    
            // 若使用下载的sdk，解压完要切换到三方库目录所在的驱动器盘符,以便进行后续编译操作
            const driveLetter = thirdPartyPath.split('/')[0];
            terminal.sendText(`if ($?) {${driveLetter}}`);
        }

        const configContent = JSON.parse(fs.readFileSync(configPath, 'utf8'));

        // 若配置文件中actions为空，则根据settings设置actions
        if (configContent.actions === undefined || configContent.actions.length === 0) {
            let actions = new Array();
            for (let arch of ohArchitecture) {   
                // 对每个目标系统架构，先组装出commands为空的action
                let action = {
                    compileTool: compileTool,
                    ohArchitecture: arch,
                    nativePath: nativePath,
                    thirdPartyPath: thirdPartyPath,
                    installPath: `${ohCrossCompilePath}/${arch}/installed`,
                    cwd: "",
                    commands: []
                };
                if (compileTool === "cmake") {
                    action.cwd = `${ohCrossCompilePath}/${arch}`;
                } else {
                    action.cwd = `${thirdPartyPath}`;
                }
                actions.push(action);
            }
            configContent.actions = actions;
        }

        // 对配置文件中每个action，若其commands为空，则组装出默认命令
        for (let action of configContent.actions) {
            vscode.window.showInformationMessage(vscode.l10n.t('Compiled files of {0} system will be installed at {1}. ', action.ohArchitecture, action.installPath));
            if (action.commands === undefined || action.commands.length === 0) {
                let commands = new Array();
                if (action.compileTool === "cmake") {
                    commands.push({
                        command: `cd ${action.cwd}`,
                        arguments: []
                    });
                    commands.push({
                        command: `${action.nativePath}/build-tools/cmake/bin/cmake.exe`,
                        arguments: [
                            "-G \"MinGW Makefiles\"",
                            "-DCMAKE_SH=\"CMAKE_SH-NOTFOUND\"",
                            `-DCMAKE_TOOLCHAIN_FILE=${action.nativePath}/build/cmake/ohos.toolchain.cmake`,
                            `-DCMAKE_INSTALL_PREFIX=${action.installPath}`,
                            `-DOHOS_ARCH=${action.ohArchitecture}`,
                            "../..",
                            "-L"
                        ]
                    });
                    commands.push({
                        command: "mingw32-make",
                        arguments: []
                    });
                    commands.push({
                        command: "mingw32-make install",
                        arguments: []
                    });
                } else if (action.compileTool === "make") {
                    let target: string;
                    let ld: string;
                    if (action.ohArchitecture === "arm64-v8a") {
                        target = "aarch64-linux-ohos";
                        ld = "ld64.lld.exe";
                    } else {
                        target = "arm-linux-ohos";
                        ld = "ld.lld.exe";
                    }
                    commands.push({
                        command: `cd ${action.cwd}`,
                        arguments: []
                    });
                    if (ohArchitecture.length > 1) {
                        commands.push({
                            command: "mingw32-make clean",
                            arguments: []
                        });
                    }
                    commands.push({
                        command: "mingw32-make",
                        arguments: [
                            `CC=\"${action.nativePath}/llvm/bin/clang.exe --target=${target}\"`,
                            `LD=${action.nativePath}/llvm/bin/${ld}`,
                            `AR=${action.nativePath}/llvm/bin/llvm-ar.exe`,
                            `AS=${action.nativePath}/llvm/bin/llvm-as.exe`,
                            `RANDLIB=${action.nativePath}/llvm/bin/llvm-ranlib.exe`,
                            `STRIP=${action.nativePath}/llvm/bin/llvm-strip.exe`
                        ]
                    });
                    commands.push({
                        command: "mingw32-make install",
                        arguments: [
                            `PREFIX=${action.installPath}`
                        ]
                    });
                }
                action.commands = commands;
            }
        }
        fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');

        // 把所有actions的命令拼接在一起，送入终端执行
        let finalCommand = "";
        for (let action of configContent.actions) {
            for (let item of action.commands) {
                finalCommand = finalCommand.concat(item.command);
                for (let i = 0; i <= item.arguments.length - 1; i++) {
                    finalCommand = finalCommand.concat(` ${item.arguments[i]}`);
                }
                finalCommand = finalCommand.concat(" ; ");
            }
        }
        terminal.sendText(finalCommand);
        Logger.getInstance().debug(finalCommand);
        terminal.processId.then(
            () => {
                resolve();
            },
            (err) => {
                vscode.window.showErrorMessage(vscode.l10n.t('Error occured while compiling. Error: {0}', err));
                reject(err);
            }
        );
    });
}

// linux系统下对三方库进行交叉编译
function crossCompile_linux(terminal: vscode.Terminal | undefined, thirdPartyPath: string, configPath: string, compileTool: string, ohArchitecture: string[], nativePath: string, ohCrossCompilePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        vscode.window.showInformationMessage(LINUX_START);
        if (terminal === undefined) {   
            // 若使用本地的sdk，不进行解压操作，则terminal为undefined，在编译前进行创建
            terminal = terminal = vscode.window.createTerminal({
                name: TERMINAL_TITLE,
            });
            terminal.show();
        } 
        const configContent = JSON.parse(fs.readFileSync(configPath, 'utf8'));

        // 若配置文件中actions为空，则根据settings设置actions
        if (configContent.actions === undefined || configContent.actions.length === 0) {
            let actions = new Array();
            for (let arch of ohArchitecture) {   
                // 对每个目标系统架构，先组装出commands为空的action
                let action = {
                    compileTool: compileTool,
                    ohArchitecture: arch,
                    nativePath: nativePath,
                    thirdPartyPath: thirdPartyPath,
                    installPath: `${ohCrossCompilePath}/${arch}/installed`,
                    cwd: "",
                    commands: []
                };
                if (compileTool === "cmake") {
                    action.cwd = `${ohCrossCompilePath}/${arch}`;
                } else {
                    action.cwd = `${thirdPartyPath}`;
                }
                actions.push(action);
            }
            configContent.actions = actions;
        }

        // 对配置文件中每个action，若其commands为空，则组装出默认命令
        for (let action of configContent.actions) {
            vscode.window.showInformationMessage(vscode.l10n.t('Compiled files of {0} system will be installed at {1}. ', action.ohArchitecture, action.installPath));
            if (action.commands === undefined || action.commands.length === 0) {
                let commands = new Array();
                if (action.compileTool === "cmake") {
                    commands.push({
                        command: `cd ${action.cwd}`,
                        arguments: []
                    });
                    commands.push({
                        command: `${action.nativePath}/build-tools/cmake/bin/cmake`,
                        arguments: [
                            `-DCMAKE_TOOLCHAIN_FILE=${action.nativePath}/build/cmake/ohos.toolchain.cmake`,
                            `-DCMAKE_INSTALL_PREFIX=${action.installPath}`,
                            `-DOHOS_ARCH=${action.ohArchitecture}`,
                            "../..",
                            "-L"
                        ]
                    });
                    commands.push({
                        command: "make",
                        arguments: []
                    });
                    commands.push({
                        command: "make install",
                        arguments: []
                    });
                } else if (action.compileTool === "make") {
                    let target: string;
                    let ld: string;
                    if (action.ohArchitecture === "arm64-v8a") {
                        target = "aarch64-linux-ohos";
                        ld = "ld64.lld";
                    } else {
                        target = "arm-linux-ohos";
                        ld = "ld.lld";
                    }
                    commands.push({
                        command: `cd ${action.cwd}`,
                        arguments: []
                    });
                    if (ohArchitecture.length > 1) {
                        commands.push({
                            command: "make clean",
                            arguments: []
                        });
                    }
                    commands.push({
                        command: "make",
                        arguments: [
                            `CC=\"${action.nativePath}/llvm/bin/clang --target=${target}\"`,
                            `LD=${action.nativePath}/llvm/bin/${ld}`,
                            `AR=${action.nativePath}/llvm/bin/llvm-ar`,
                            `AS=${action.nativePath}/llvm/bin/llvm-as`,
                            `RANDLIB=${action.nativePath}/llvm/bin/llvm-ranlib`,
                            `STRIP=${action.nativePath}/llvm/bin/llvm-strip`
                        ]
                    });
                    commands.push({
                        command: "make install",
                        arguments: [
                            `PREFIX=${action.installPath}`
                        ]
                    });
                } else if (action.compileTool === "configure") {
                    let target: string;
                    let ld: string;
                    if (action.ohArchitecture === "arm64-v8a") {
                        target = "aarch64-linux-ohos";
                        ld = "ld64.lld";
                    } else {
                        target = "arm-linux-ohos";
                        ld = "ld.lld";
                    }
                    commands.push({
                        command: `cd ${action.cwd}`,
                        arguments: []
                    });
                    if (ohArchitecture.length > 1) {
                        commands.push({
                            command: "make clean",
                            arguments: []
                        });
                    }
                    commands.push({
                        command: "./configure",
                        arguments: [
                            `--host=${target}`,
                            `--prefix=${action.installPath}`,

                            //针对libcoap库的编译选项
                            // `--disable-documentation`,
                            // `--disable-dtls`,

                            `CFLAGS=\"-pthread\"`,
                            `LDFLAGS=\"-pthread\"`,
                            `CC=\"${action.nativePath}/llvm/bin/clang --target=${target}\"`,
                            `LD=${action.nativePath}/llvm/bin/${ld}`,
                            `AR=${action.nativePath}/llvm/bin/llvm-ar`,
                            `AS=${action.nativePath}/llvm/bin/llvm-as`,
                            `RANDLIB=${action.nativePath}/llvm/bin/llvm-ranlib`,
                            `STRIP=${action.nativePath}/llvm/bin/llvm-strip`
                        ]
                    });
                    commands.push({
                        command: "make",
                        arguments: []
                    });
                    commands.push({
                        command: "make install",
                        arguments: []
                    });
                }
                action.commands = commands;
            }
        }
        fs.writeFileSync(configPath, JSON.stringify(configContent, null, 4), 'utf8');

        // 把所有actions的命令拼接在一起，送入终端执行
        let finalCommand = "";
        for (let action of configContent.actions) {
            for (let item of action.commands) {
                finalCommand = finalCommand.concat(item.command);
                for (let i = 0; i <= item.arguments.length - 1; i++) {
                    finalCommand = finalCommand.concat(` ${item.arguments[i]}`);
                }
                finalCommand = finalCommand.concat(" ; ");
            }
        }
        terminal.sendText(finalCommand);
        Logger.getInstance().debug(finalCommand);
        terminal.processId.then(
            () => {
                resolve();
            },
            (err) => {
                vscode.window.showErrorMessage(vscode.l10n.t('Error occured while compiling. Error: {0}', err));
                reject(err);
            }
        );
    });
}


export function crossCompile(platform: string, terminal: vscode.Terminal | undefined, configPath: string, thirdPartyPath: string, compileTool: string, ohArchitecture: string[], nativePath: string, ohCrossCompilePath: string) {
    if (platform === "win32") {
        crossCompile_win32(terminal, thirdPartyPath, configPath, compileTool, ohArchitecture, nativePath, ohCrossCompilePath);
    } else {
        crossCompile_linux(terminal, thirdPartyPath, configPath, compileTool, ohArchitecture, nativePath, ohCrossCompilePath);
    }
}