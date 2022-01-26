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
// const vscode = require('vscode');
const { AnalyzeFile } = require("./analyze");
const { GenerateAll } = require("./generate");
const re = require("./tools/re")

function DoGenerate(ifname) {
    // console.log("----------generate start---------")

    let structOfTs = AnalyzeFile(ifname);
    // print(structOfTs)

    GenerateAll(structOfTs, re.getPathInPath(ifname));

    // console.log("----------generate end---------")
}

module.exports = {
    DoGenerate
}