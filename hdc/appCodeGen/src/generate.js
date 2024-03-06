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
// 生成BUILD.gn
// 生成tool_utility.h，生成tool_utility.cpp
const { replaceAll } = require("./tools/tool");
// const { generateNamespace } = require("./generate/namespace");
const { writeFile } = require("./tools/FileRW");
const re = require("./tools/re");

const { jsonCfgList } = require("./tools/common");
const os = require("os");
const path = require('path')
const { NapiLog } = require("./tools/NapiLog");
var fs = require('fs');

let indexEtsTemplete = `\
import napitest from '@ohos.napitest';
import hilog from '@ohos.hilog';

@Entry
@Component
struct Index {
  @State message: string = 'Hello NAPI Sample';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        [test_interface_button]
      }
      .width('100%')
    }
    .height('100%')
  }
}
`
let buttonTemplate = `
Button() {
    Text([button_test_interface_name])
      .fontSize(20)
      .fontWeight(FontWeight.Bold)
  }
  .type(ButtonType.Capsule)
  .margin({
    top: 10
  })
  .backgroundColor('#0D9FFB')
  .width('90%')
  .height('5%')
  .onClick(() => {
    hilog.info(0x0000, 'testTag', 'button onClick!');

    [button_test_interface_code]

    hilog.info(0x0000, 'testTag', 'button onClick end !');
  });
`

// var genFileList = []
// function deleteFolder(folderPath) {
//     if (fs.existsSync(folderPath)) {
//         fs.rmSync(folderPath, {"recursive": true})
//     }
// }

// function createFolder(folderPath) {
//     if (!fs.existsSync(folderPath)) {
//         fs.mkdirSync(folderPath)
//     }
// }

// function formatCode(destDir) {
//     let sysInfo = os.platform()
//     let clangFmtName = sysInfo === 'win32' ? "clang-format.exe" : "clang-format"
//     let callPath = NapiLog.getCallPath();
//     callPath = callPath.substring(callPath.indexOf("[") + 1, callPath.indexOf("src"));
//     let dumyClangFmtFile = path.join(callPath, clangFmtName)
//     let dumyFmtCfgFile = path.join(callPath, ".clang-format")

//     if(!fs.existsSync(dumyClangFmtFile)) {
//         NapiLog.logInfo("Warning: clang-format does not exist, can not format cpp file.");
//         return
//     }

//     // 使用pkg打包的napi_generator工具，其中的clang-format程序在运行时是解压到一个名为snapshot的虚拟目录中的，如C:\snapshot\napi_generator\
//     // 虚拟目录中的clang-format程序不能直接运行，必须先将它拷贝到本地硬盘的真实目录下。
//     createFolder(path.resolve("./tmpLocal"))
//     let localClangFmtFile = path.resolve("./tmpLocal/" + clangFmtName) // clang-format可执行程序
//     let localFmtCfgFile = path.resolve("./tmpLocal/.clang-format") // clang-format格式化配置文件
//     fs.copyFileSync(dumyClangFmtFile, localClangFmtFile)
//     fs.copyFileSync(dumyFmtCfgFile, localFmtCfgFile)

//     let execSync = require("child_process").execSync
//     if (sysInfo != 'win32') {
//         // linux系统下需要为临时复制的clang-format程序增加可执行权限
//         execSync("chmod +x " + "\"" + localClangFmtFile + "\"")
//     }

//     for (let i = 0; i < genFileList.length; ++i) {
//         // 文件路径前后要用引号包含，防止因为路径中存在空格而导致命令执行失败 (windows的文件夹允许有空格)
//         let cmd = "\"" + localClangFmtFile + "\" -style=file -i \"" + path.resolve(path.join(destDir, genFileList[i]))
//             + "\""
//         try {
//             execSync(cmd) // C++文件格式化
//         } catch (err) {
//             NapiLog.logError("Failed to format code, exception: " + err.stderr)
//         }
//     }
//     // 格式化结束后，删除临时目录文件
//     deleteFolder(path.resolve("./tmpLocal"))
// }

function analyzeJsonCfg(jsonCfg) {
    let len = jsonCfg.length;
    let jsonConfig = []
    // 将json文件的数据存入jsonCfgList中
    for (let i = 0; i < len; i++) {
        let interfaceBody = null
        if (jsonCfg[i].interfaceName.indexOf("::") > 0) {
            let tt = jsonCfg[i].interfaceName.split("::")
            interfaceBody = {
              className: tt[0],
              funcName: tt[1],
            }
        } else {
            interfaceBody = {
                className: "",
                funcName: jsonCfg[i].interfaceName,
            }
        }

        jsonConfig.push({
            includeName: jsonCfg[i].includeName,
            cppName: jsonCfg[i].cppName,
            interfaceName: interfaceBody,
            serviceCode: jsonCfg[i].serviceCode.replaceAll('\\n', '\n'),
        })
    }
    jsonCfgList.push(jsonConfig)
}

function generateAppCode(structOfTs, destDir, moduleName, jsonCfg) {
    let ns0 = structOfTs.declareNamespace[0];
    let license = structOfTs.declareLicense[0];
    if (ns0 === undefined) {
        NapiLog.logError('generateAll error:get namespace fail!');
        return;
    }
    // 分析业务配置代码的调用代码: 分析Json文件
    // if (jsonCfg) {
    //     analyzeJsonCfg(jsonCfg);
    // }
    // jsonCfgList.pop()

    // let result = generateNamespace(ns0.name, ns0.body)

    // index.ets文件中测试接口button代码生成
    let testInterfaceName = 'testFunStr'
    let testInterfaceButton = replaceAll(buttonTemplate, "[button_test_interface_name]", testInterfaceName)

    let buttonTestInterface = `   
    // funStr(v: string): string;
    let strIn: string = "funStrTest";
    let strRet: string = napitest.funStr(strIn);
    hilog.info(0x0000, 'testTag', 'napitest.funStr ret: ' + strRet);
    `
    testInterfaceButton = replaceAll(testInterfaceButton, "[button_test_interface_code]", buttonTestInterface);

    // index.ets文件生成
    let indexEts = replaceAll(indexEtsTemplete, "[test_interface_button]", testInterfaceButton)
    writeFile(re.pathJoin(destDir, "Index.ets"), null != license ? (license + "\n" + indexEts) : indexEts)
}

module.exports = {
    generateAppCode
}
