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
const fs = require('fs');
const path = require('path')
const main = require("./TsGen/tsMain");

// 获取命令行参数 .h文件路径
const filePath = process.argv[2] || '';
let out = './entry/src/main/cpp/types/libentry/'

// 这个函数接收一个目录的绝对路径作为参数
function findIndexDTS(currentDir) {
    const stack = [currentDir]; // 一个栈来管理我们还要遍历的目录
    while (stack.length > 0) {
        const currentPath = stack.pop(); // 取得当前的路径
        // 检查当前路径是否存在以及是否为目录
        if (fs.existsSync(currentPath) && fs.statSync(currentPath).isDirectory()) {
            const filesAndDirs = fs.readdirSync(currentPath);
            // 检查当前目录下是否有 index.d.ts 文件
            if (filesAndDirs.includes('index.d.ts')) {
                const foundPath = path.join(currentPath, 'index.d.ts');
                console.log(`Found index.d.ts at: ${foundPath}`);
                return foundPath;
            }
            // 将路径的所有子目录添加到栈中以便后续遍历
            for (const item of filesAndDirs) {
                const fullPath = path.join(currentPath, item);
                if (fs.statSync(fullPath).isDirectory()) {
                    stack.push(fullPath);
                }
            }
        }
    }
    // 没有找到 index.d.ts 文件
    console.log('index.d.ts not found in any checked directory.');
    return null;
}

// 读取文件内容
if (filePath !== '') {
    let fileDir = path.resolve(filePath, '..');
    let out = findIndexDTS(fileDir);
    if (out !== null) {
        main.doGenerate(filePath, out);
    }
}
