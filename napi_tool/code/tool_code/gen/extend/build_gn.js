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

let gnTemplete = `\
import("//build/ohos.gni")

ohos_shared_library("[implName]")
{
    sources = [
        "[implName]_middle.cpp",
        "[implName].cpp",
        "x_napi_tool.cpp",
    ]
    include_dirs = [
        ".",
        "//third_party/node/src",
    ]
    deps=[
        "//foundation/ace/napi:ace_napi",
    ]
    remove_configs = [ "//build/config/compiler:no_rtti" ]
    cflags=[
    ]
    cflags_cc=[
        "-frtti",
    ]
    ldflags = [
    ]
    
    relative_install_dir = "module"
    part_name = "<your part name>"
    subsystem_name = "<your subsystem name>"
}
`

/**创建nodejs编译文件，用于在ubuntu测试 */
function generateGN(destDir, implName) {
    let ss = gnTemplete.replaceAll("[implName]", implName)
    writeFile(re.pathJoin(destDir, "BUILD.gn"), ss)
}

module.exports = {
    generateGN
}