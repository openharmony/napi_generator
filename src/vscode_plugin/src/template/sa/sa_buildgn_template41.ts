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

import { FileTemp } from "../../gen/datatype";

export let buildGnTemplate41: FileTemp = {
  name: 'BUILD.gn',
  content: `import("//build/ohos.gni")

  ohos_shared_library("[lowServiceName]service") {
    sources = [
      "//[lowServiceName]service/src/i_[lowServiceName]_service.cpp",
      "//[lowServiceName]service/src/[lowServiceName]_service_stub.cpp",
      "//[lowServiceName]service/src/[lowServiceName]_service.cpp"
    ]
    include_dirs = [
      "//[lowServiceName]service/include",
      "//[lowServiceName]service/interface",
      "//commonlibrary/c_utils/base/include",
      "//base/startup/init/interfaces/innerkits/include/syspara"
    ]
  
    external_deps = [
      "hilog:libhilog",
      "ipc:ipc_core",
      "safwk:system_ability_fwk",
      "samgr:samgr_proxy",
      "c_utils:utils",
    ]
  
    part_name = "[lowServiceName]service_part"
    subsystem_name = "[lowServiceName]service"
  }
  
  ohos_executable("[lowServiceName]client") {
    sources = [
      "//[lowServiceName]service/src/i_[lowServiceName]_service.cpp",
      "//[lowServiceName]service/src/[lowServiceName]_service_proxy.cpp",
      "//[lowServiceName]service/src/[lowServiceName]_client.cpp"
    ]
  
    include_dirs = [
      "//[lowServiceName]service/include",
      "//[lowServiceName]service/interface",
      "//commonlibrary/c_utils/base/include"
    ]
  
    external_deps = [
      "hilog:libhilog",
      "ipc:ipc_core",
      "samgr:samgr_proxy",
      "c_utils:utils",
    ]
  
    part_name = "[lowServiceName]service_part"
    subsystem_name = "[lowServiceName]service"
  }
  `
};