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

export let driverInterfaceGn4_1: FileTemp = {
  name: 'BUILD.gn',
  content: ` 
  # Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

HDF_CORE_PATH = "../../../hdf_core"
import("//build/ohos.gni")
import("$HDF_CORE_PATH/adapter/uhdf2/uhdf.gni")

ohos_shared_library("lib[driverName]_interface_service_1.0") {
  include_dirs = [
    ".",
    "../utils/interface",
    "../hal/include"
  ]

  sources = [ "[driverName]_interface_service.cpp"]
  deps = [ "../hal:hdi_[driverName]" ]

  cflags = [
    "-Wall",
    "-Wextra",
    "-Werror",
    "-fsigned-char",
    "-fno-common",
    "-fno-strict-aliasing",
  ]

  if (is_standard_system) {
    external_deps = [
      "c_utils:utils",
      "drivers_interface_[driverName]:[driverName]_idl_headers",
      "hdf_core:libhdf_host",
      "hilog:libhilog",
      "hitrace:hitrace_meter",
    ]
  } else {
    external_deps = [ "hilog:libhilog" ]
  }
  external_deps += [ "ipc:ipc_single" ]

  install_images = [ chipset_base_dir ]
  subsystem_name = "hdf"
  part_name = "drivers_peripheral_[driverName]"
}

ohos_shared_library("lib[driverName]_driver") {
  include_dirs = [
  ]
  sources = [ "[driverName]_interface_driver.cpp" ]

  cflags = [
    "-Wall",
    "-Wextra",
    "-Werror",
    "-fsigned-char",
    "-fno-common",
    "-fno-strict-aliasing",
  ]

  if (is_standard_system) {
    external_deps = [
      "c_utils:utils",
      "drivers_interface_[driverName]:lib[driverName]_stub_1.0",
      "hdf_core:libhdf_host",
      "hdf_core:libhdf_ipc_adapter",
      "hdf_core:libhdf_utils",
      "hdf_core:libhdi",
      "hilog:libhilog",
      "ipc:ipc_single",
    ]
  } else {
    external_deps = [
      "hilog:libhilog",
      "ipc:ipc_single",
    ]
  }

  shlib_type = "hdi"
  install_images = [ chipset_base_dir ]
  subsystem_name = "hdf"
  part_name = "drivers_peripheral_[driverName]"
}

group("hdf_[driverName]_service") {
  deps = [
    ":lib[driverName]_driver",
    ":lib[driverName]_interface_service_1.0",
  ]
}
  `
}