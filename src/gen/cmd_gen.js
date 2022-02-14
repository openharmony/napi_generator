/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const main = require("./main");
const re = require("./tools/re");

function print(...args) {
    console.log(...args)
}

const stdio = require("stdio");

let ops = stdio.getopt({
    'filename':{key:'f', args:1, description:".d.ts file"},
    'out':{key:'o', args:1, description:"output directory", default:"."}
});


let fn = re.getFileInPath(ops.filename)

let tt = re.match("@ohos.[a-zA-Z0-9]+.d.ts", fn)
if (tt) {
    main.doGenerate(ops.filename, ops.out)
}
else {
    print("\n文件名 " + fn + " 校验失败，需要符合 @ohos.xxx.d.ts")
}
// }

/*
打包成exe文件
pkg vscode_plugin/gnapi/gen/cmd_gen.js
*/