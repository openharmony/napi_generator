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

export let peripheralBundleJson4_1: FileTemp = {
  name: 'bundle.json',
  content: ` 
  {
    "name": "@ohos/drivers_peripheral_[driverName]",
    "description": "[driverName] device driver",
    "version": "4.1",
    "license": "Apache License 2.0",
    "publishAs": "code-segment",
    "segment": {
      "destPath": "drivers/peripheral/[driverName]"
    },
    "dirs": {},
    "scripts": {},
    "component": {
      "name": "drivers_peripheral_[driverName]",
      "subsystem": "hdf",
      "features": [
      ],
      "syscap": [],
      "adapted_system_type": ["standard"],
      "rom": "675KB",
      "ram": "7400KB",
      "deps": {
        "components": [
          "ipc",
          "hdf_core",
          "hilog",
          "c_utils",
          "drivers_interface_[driverName]",
          "hitrace",
          "hilog_lite"
        ],
        "third_party": [
          "bounds_checking_function"
        ]
      },
      "build": {
        "sub_component": [
          "//drivers/peripheral/[driverName]:[driverName]_entry"
        ],
        "test": [
        ],
        "inner_kits": [
          
        ]
      }
    }
  }
  
  `
}