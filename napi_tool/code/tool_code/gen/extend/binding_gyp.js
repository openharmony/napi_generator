/*
* Copyright (c) 2021 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const { writeFile } = require("../tools/FileRW");
const re = require("../tools/re");

let gypTemplete = `
{
    "targets": [
        {
          "target_name": "[implName]",
          "sources": [
              "./[implName].cpp",
              "./[implName]_middle.cpp",
              "./x_napi_tool.cpp"],
          "include_dirs": ["."],
          "cflags_cc": [ "-frtti","-std=c++17" ]
        }
    ]
}
`

/**创建nodejs编译文件，用于在ubuntu测试 */
function generateGYP(destDir, implName) {
    let ss = gypTemplete.ReplaceAll("[implName]", implName)
    writeFile(re.pathJoin(destDir, "binding.gyp"), ss)

    writeFile(re.pathJoin(destDir, "test.sh"), "node-gyp configure build && sleep 0.5 && node --expose-gc test.js")

}

module.exports = {
    generateGYP
}