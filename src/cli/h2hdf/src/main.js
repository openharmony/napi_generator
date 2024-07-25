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
const stdio = require('stdio');
const main = require('./generate');

let ops = stdio.getopt({
    // 输入driver name ,输入一个字符串，默认为hello
    'drivername': { key: 'n', args: 1, description: 'driver name', default: 'hello' },
    // 输出文件夹路径
    'out': { key: 'o', args: 1, description: 'output directory', default: '.' },
});

let drivername = ops.drivername;
// 若drivername不为空，则生成，否则打印错误信息
if (drivername.trim().length !== 0 && checkInput(drivername)) {
  main.genDriverFramework(drivername);
} 

function checkInput(input) {
  const regex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/;
  return regex.test(input);
}
