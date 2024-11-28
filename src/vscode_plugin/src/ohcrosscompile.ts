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
import * as unzipper from 'unzipper';
import * as path from 'path';

// 下载url所指示的sdk文件，到destination所指示的文件中
export function downloadSdk(url: string, destination: string, progress: vscode.Progress<{ increment: number, message?: string }>): Promise<void> {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destination); //创建写入文件流
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const totalSize = parseInt(String(response.headers['content-length']));
                console.log(`totalSize: ${totalSize}`);
                let downloadedSize = 0;
                response.on('data', (chunk) => {    //设置response的data事件，当每接收一个数据块时，计算下载进度并报告
                    downloadedSize += chunk.length;
                    const percentage = (downloadedSize / totalSize) * 100;

                    // increment是一个累加量，应每次累加当前数据块大小占总大小的比例
                    progress.report({ increment: ((chunk.length / totalSize) * 100 * 0.8), message: `Downloading SDK ... ${percentage.toFixed(2)}%` });
                });
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                vscode.window.showErrorMessage(`Connection failed! Statuscode: ${response.statusCode}`);
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
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
            .pipe(zlib.createGunzip())  // 解压 .gz
            .pipe(tar.extract({         // 解压 .tar 内容
                cwd: destination       // 解压到指定文件夹
            }))
            .on('finish', () => resolve())
            .on('error', (err) => reject(err));
    });
}

// 提取filePath所指示的.zip文件，到destination所指示的文件夹中
// export function extractZip(filePath: string, destination: string): Promise<void> {
//     return new Promise((resolve, reject) => {
//         fs.createReadStream(filePath)
//             .pipe(unzipper.Extract({ path: destination }))  // 解压 .zip
//             .on('close', () => {
//                 resolve();
//             })
//             .on('error', (err) => reject(err));
//     });
// }

// 利用终端命令，提取filePath所指示的.zip文件，到destination所指示的文件夹中
export function extractZip(platform: string, terminal: vscode.Terminal, filePath: string, destination: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (platform === "win32") {     //Windows
            terminal.sendText(`Expand-Archive -Path \"${filePath}\" -DestinationPath \"${destination}\"`);
            terminal.processId?.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(`Error extracting file: ${err}`);
                    reject(err);
                }
            );
        } else {    //Linux
            terminal.sendText(`unzip ${filePath} -d ${destination}`);
            terminal.processId?.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(`Error extracting file: ${err}`);
                    reject(err);
                }
            );
        }
    });


}

// windows系统下对三方库进行交叉编译
function crossCompile_win32(terminal: vscode.Terminal | undefined, thirdPartyPath: string, compileTool: string, ohArchitecture: string, nativePath: string, generatePath: string): Promise<void> {
    return new Promise((resolve, reject) => {

        vscode.window.showInformationMessage("Starting compilation on Windows.");
        if (terminal === undefined) {   //若使用本地的sdk，不进行解压操作，则terminal为undefined，在编译前进行创建
            terminal = terminal = vscode.window.createTerminal({
                name: "OpenHarmony cross compile",
                cwd: thirdPartyPath
            });
        } else {    //若使用下载的sdk，解压完要切换到三方库目录，再进行后续编译操作
            const driveLetter = thirdPartyPath.split('/')[0];  //获取三方库目录所在的驱动器盘符，如d:
            terminal.sendText(`if ($?) {${driveLetter}}`);
            terminal.sendText(`if ($?) {cd ${thirdPartyPath}}`);
        }

        if (compileTool === "cmake") {
            const command1 = "mkdir ohCrossCompile_build";
            const command2 = "cd ohCrossCompile_build";
            const command3 = `${nativePath}/build-tools/cmake/bin/cmake.exe -G "MinGW Makefiles" -DCMAKE_SH="CMAKE_SH-NOTFOUND" -DCMAKE_TOOLCHAIN_FILE=${nativePath}/build/cmake/ohos.toolchain.cmake -DCMAKE_INSTALL_PREFIX=${generatePath} -DOHOS_ARCH=${ohArchitecture} .. -L`;
            console.log(command3);
            const command4 = "mingw32-make";
            const command5 = "mingw32-make install";
            terminal.sendText(`if ($?) {${command1}} ; if ($?) {${command2}} ; if ($?) {${command3}} ; if ($?) {${command4}} ; if ($?) {${command5}}`);
            terminal.processId.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(`Error occured while compiling. Error: ${err}`);
                    reject(err);
                }
            );
        } else if (compileTool === "make") {
            let target: string;
            if(ohArchitecture === "arm64-v8a") {    //64位系统
                target = "aarch64-linux-ohos";
            } else {    //32位系统
                target = "arm-linux-ohos";
            }

            const command1 = `mingw32-make CC=\"${nativePath}/llvm/bin/clang.exe --target=${target}\" AR=${nativePath}/llvm/bin/llvm-ar.exe RANDLIB=${nativePath}/llvm/bin/llvm-ranlib.exe`;
            const command2 = `mingw32-make install PREFIX=${generatePath}`;
            // terminal.sendText(`if ($?) {${command1}} ; if ($?) {${command2}}`);
            terminal.sendText(`${command1} ; ${command2}`);
            terminal.processId.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(`Error occured while compiling. Error: ${err}`);
                    reject(err);
                }
            );
        }
    });
}

// linux系统下对三方库进行交叉编译
function crossCompile_linux(terminal: vscode.Terminal | undefined, thirdPartyPath: string, compileTool: string, ohArchitecture: string, nativePath: string, generatePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        vscode.window.showInformationMessage("Starting compilation on Linux.");
        // vscode.window.showInformationMessage("Please enter your password in the newly opened terminal to continue.");
        if (terminal === undefined) {   //若使用本地的sdk，不进行解压操作，则terminal为undefined，在编译前进行创建
            terminal = terminal = vscode.window.createTerminal({
                name: "OpenHarmony cross compile",
                cwd: thirdPartyPath
            });
        } else {    //若使用下载的sdk，解压完要切换到三方库目录，再进行后续编译操作
            terminal.sendText(`cd ${thirdPartyPath}`);
        }

        if (compileTool === "cmake") {
            const command1 = "mkdir ohCrossCompile_build";
            const command2 = "cd ohCrossCompile_build";
            // const command3 = `sudo ${nativePath}/build-tools/cmake/bin/cmake -DCMAKE_TOOLCHAIN_FILE=/${nativePath}/build/cmake/ohos.toolchain.cmake -DCMAKE_INSTALL_PREFIX=${generatePath} -DOHOS_ARCH=${ohArchitecture} .. -L`;
            const command3 = `${nativePath}/build-tools/cmake/bin/cmake -DCMAKE_TOOLCHAIN_FILE=/${nativePath}/build/cmake/ohos.toolchain.cmake -DCMAKE_INSTALL_PREFIX=${generatePath} -DOHOS_ARCH=${ohArchitecture} .. -L`;
            // const command4 = "sudo make";
            const command4 = "make";
            const command5 = "make install";
            terminal.sendText(`${command1} && ${command2} && ${command3} && ${command4} && ${command5}`);
            terminal.processId?.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(`Error occured while compiling. Error: ${err}`);
                    reject(err);
                }
            );
        } else if (compileTool === "make") {
            let target: string;
            if(ohArchitecture === "arm64-v8a") {    //64位系统
                target = "aarch64-linux-ohos";
            } else {    //32位系统
                target = "arm-linux-ohos";
            }
            const command1 = `sudo make CC=\"${nativePath}/llvm/bin/clang --target=${target}\" AR=${nativePath}/llvm/bin/llvm-ar RANDLIB=${nativePath}/llvm/bin/llvm-ranlib`;
            const command2 = `make install PREFIX=${generatePath}`;
            // terminal.sendText(`${command1} && ${command2}`);
            terminal.sendText(`${command1} ; ${command2}`);
            terminal.processId?.then(
                () => {
                    resolve();
                },
                (err) => {
                    vscode.window.showErrorMessage(`Error occured while compiling. Error: ${err}`);
                    reject(err);
                }
            );
        }
    });
}


export function crossCompile(platform: string, terminal: vscode.Terminal | undefined, thirdPartyPath: string, compileTool: string, ohArchitecture: string, nativePath: string, generatePath: string) {
    if (platform === "win32") {
        crossCompile_win32(terminal, thirdPartyPath, compileTool, ohArchitecture, nativePath, generatePath);
    } else {
        crossCompile_linux(terminal, thirdPartyPath, compileTool, ohArchitecture, nativePath, generatePath);
    }
}