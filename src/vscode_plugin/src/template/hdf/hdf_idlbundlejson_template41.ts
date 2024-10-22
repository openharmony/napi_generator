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

import { FileTemp } from "../../datatype";

export let idlBundleJson4_1: FileTemp = {
  name: 'bundle.json',
  content: ` 
  {
    "name": "@ohos/drivers_interface_[driverName]",
    "description": "[driverName] device driver interface",
    "version": "4.1",
    "license": "Apache License 2.0",
    "publishAs": "code-segment",
    "segment": {
      "destPath": "drivers/interface/[driverName]"
    },
    "dirs": {},
    "scripts": {},
    "component": {
      "name": "drivers_interface_[driverName]",
      "subsystem": "hdf",
      "syscap": [],
      "adapted_system_type": ["standard"],
      "rom": "675KB",
      "ram": "1024KB",
      "deps": {
        "components": [
          "ipc",
          "hdf_core",
          "hilog",
          "c_utils"
        ],
        "third_party": []
      },
      "build": {
        "sub_component": [
          "//drivers/interface/[driverName]/v1_0:[driverName]_idl_target"
        ],
        "test": [
        ],
        "inner_kits": [
          {
            "name": "//drivers/interface/[driverName]/v1_0:lib[driverName]_proxy_1.0",
            "header": {
              "header_files": [
              ],
              "header_base": "//drivers/interface/[driverName]"
            }
          },
          {
            "name": "//drivers/interface/[driverName]/v1_0:lib[driverName]_stub_1.0",
            "header": {
              "header_files": [
              ],
              "header_base": "//drivers/interface/[driverName]"
            }
          },
          {
            "name": "//drivers/interface/[driverName]/v1_0:[driverName]_idl_headers",
            "header": {
              "header_files": [
              ],
              "header_base": "//drivers/interface/[driverName]"
            }
          }
        ]
      }
    }
  }
  `
}