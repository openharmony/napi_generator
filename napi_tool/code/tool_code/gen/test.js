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
const fs = require("fs");
const path = require("path");
const main = require("./main");
const { print } = require("./tools/tool");

main.DoGenerate("nodejs_test/gen/@ohos.napitest.d.ts");

// if (1 == 1) {
//     main.DoGenerate("nodejs_test/gen/@ohos.napitest.d.ts");
// }
// else {
//     let test_ts_dir = "test_ts/ohos"

//     if (1 == 0) {
//         main.DoGenerate(path.join(test_ts_dir, "@ohos.fileio.d.ts"));
//     }
//     else {
//         let files = fs.readdirSync(test_ts_dir)
//         for (let i in files) {
//             let fn = files[i]
//             let gf = path.join(test_ts_dir, fn)
//             print("--------------", i, "-----------------")
//             print(gf)
//             main.DoGenerate(gf);
//             // if (i > 20) break
//         }
//     }
// }

/** 
 * run test:
 * node vscode_plugin/gnapi/gen/test.js
 */

// main.DoGenerate("Z:\\napi_test\\@ohos.napitest.d.ts");

// main.DoGenerate("Z:\\l1\\foundation\\communication\\cx_test\\napi_test\\@ohos.xtestx.d.ts");