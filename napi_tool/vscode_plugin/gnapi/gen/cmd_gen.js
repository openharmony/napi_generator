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
const main = require("./main");
const re = require("./tools/re");
function print(...args)
{
    console.log(...args)
}

let usage_str=`usage:
cmd_gen-win.exe d:\\@ohos.youmodulename.d.ts`

if(process.argv.length<=2)
{
    print(usage_str)
}
else
{
    let fn=re.get_file_in_path(process.argv[2])
    
    let tt=re.match("@ohos.[a-zA-Z0-9]+.d.ts",fn)
    if(tt)
    {
        main.DoGenerate(process.argv[2])
    }
    else
    {
        print("\n文件名 "+fn+" 校验失败，需要符合 @ohos.xxx.d.ts")
    }
}

/*
打包成exe文件
pkg vscode_plugin/gnapi/gen/cmd_gen.js
*/