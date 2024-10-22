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

export let hcsConfigTemplate: FileTemp = {
  name: 'device_info.hcs',
  content: `
  [driverName] :: host {
    hostName = "[driverName]_host";
    priority = 50;
    [driverName]_device :: device {
        device0 :: deviceNode {
            preload = 0;
            policy = 2;
            priority = 100;
            moduleName = "lib[driverName]_driver.z.so";
            serviceName = "[driverName]_interface_service";
        }
    }
  }
  `
}