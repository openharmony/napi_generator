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
const stdio = require("stdio");
const main = require("./TsGen/tsMain");

let ops = stdio.getopt({
    // 输入的.h文件路径，必填
    'filename': { key: 'f', args: 1, description: ".h file", default: "" },
    // 可选参数，测试文件路径
    'testFilename': { key: 't', args: 1, description: "Ability.test.ets file", default: "" },
    // 可选参数， 声明文件路径
    'indexFilename': { key: 'i', args: 1, description: "index.d.ts file", default: "" },
    // 可选参数， cpp文件路径
    'outCppPath': { key: 'o', args: 1, description: ".cpp dir path", default: "" },
    // 可选参数，是否生成init函数
    'isGenInitFunc': { key: 'g', args: 1, description: "generate init function or not", default: true },
});

// 获取命令行参数 .h文件路径
let filePath = ops.filename
let testFilePath = ops.testFilename
let tsFilePath = ops.indexFilename
let cppFilePath = ops.outCppPath
let isGenInitFunc = ops.isGenInitFunc
let rootPath = path.join(__dirname, '../../../');
// 读取文件内容 判断参数是否为空
if (filePath !== '') {

    if (!isAbsolutePath(filePath)) {
      filePath = getAbsolutePath(filePath)
    }

    if (tsFilePath && !isAbsolutePath(tsFilePath)) {
      tsFilePath = getAbsolutePath(tsFilePath)
    }

    if (testFilePath && !isAbsolutePath(testFilePath)) {
      testFilePath = getAbsolutePath(testFilePath)
    }

    if (cppFilePath && !isAbsolutePath(cppFilePath)) {
      cppFilePath = getAbsolutePath(cppFilePath)
    }

    // 若用户没有提供路径 则程序提供默认路径
    if (!tsFilePath) {
        tsFilePath = path.join(rootPath, './entry/src/main/cpp/types/libentry/index.d.ts');
    }
    if (!testFilePath) {
        testFilePath = path.join(rootPath, './entry/src/ohosTest/ets/test');
    }
    if(!cppFilePath) {
        cppFilePath = path.join(filePath, '..');
    }

    main.doGenerate(filePath, testFilePath, tsFilePath, cppFilePath, isGenInitFunc);
}

function getAbsolutePath(relativePath) {
  const absolutePath = path.resolve(rootPath, relativePath);
  return absolutePath;
}

function isAbsolutePath(filePath) {
  if (path.isAbsolute(filePath)) {
    return true;
  } else {
    return false;
  }
}
