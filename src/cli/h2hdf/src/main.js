/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License. 
*/
const fs = require('fs');
const path = require('path');
const stdio = require('stdio');
const main = require('./generate');

let ops = stdio.getopt({
    // 输入driver name ,输入一个字符串，默认为hello
    'drivername': { key: 'n', args: 1, description: 'driver name', default: 'hello' },
    // 输入版本号
    'version': { key: 'v', args: 1, description: 'source version', default: 'v4_1' },
    // 输出文件夹路径
    'out': { key: 'o', args: 1, description: 'output directory', default: '' },
});

const allowedVersion = ['v4_1'];

let drivername = ops.drivername;
let version = ops.version;
// 若drivername不为空，则生成，否则打印错误信息
if (drivername.trim().length !== 0 && checkInput(drivername)) {
  if (!isValidValue(version, allowedVersion)) {
    // 版本号不符合规则 请输入正确的版本号
    console.log('请输入正确的版本号!如:4.1');
    return;
  }
  // 在这里读取cfg文件
  let frameworkJsonPath = path.join(__dirname, './templete/framework.json');
  let frameworkJson = getJsonCfg(frameworkJsonPath);

  // 然后再调用templete生成模板
  main.genDriverFramework(drivername, frameworkJson, version, ops.out);
  console.log('Generate Success');
} else {
  // 输入的名字不符合规则
  console.log('请输入正确的drivername!');
}

function isValidValue(value, allowedVersion) {
  return allowedVersion.includes(value);
}

function checkInput(input) {
  const regex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/;
  return regex.test(input);
}

function getJsonCfg(jsonFilePath) {
  let jsonCfg = null;
  let jsonFile = fs.readFileSync(jsonFilePath, { encoding: 'utf8' });
  jsonCfg = JSON.parse(jsonFile);
  return jsonCfg;
}
