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

import { DirTemp } from "../../gen/datatype"
import { hcsConfigTemplate } from "./hdf_hcsconfig_template"
import { peripheralBuildGn } from "./hdf_buildgn_template"
import { peripheralBundleJson4_1 } from "./hdf_bundlejson_template41"
import { driverInterfaceDriver } from "./hdf_driver_template"
import { peripheralDumpC } from "./hdf_dumpc_template"
import { peripheralDumpGn4_1 } from "./hdf_dumpgn_template41"
import { peripheralDumpH } from "./hdf_dumph_template"
import { idlBundleJson4_1 } from "./hdf_idlbundlejson_template41"
import { idlBuildGn } from "./hdf_idlgn_template"
import { idlTemplate } from "./hdf_idl_template"
import { driverInterfaceServiceCpp } from "./hdf_servicecpp_template"
import { driverInterfaceGn4_1 } from "./hdf_servicegn_template41"
import { driverInterfaceServiceH } from "./hdf_serviceh_template"
import { hdfReadmeTemplate } from "./hdf_readme_template41"

// interface/hello/v1_0
export let hdf_idl1_0_dir: DirTemp = {
  name: 'v1_0',
  files: [idlBuildGn, idlTemplate],
  dirs: []
}

// interface/hello
export let hdf_driver_interface: DirTemp = {
  name: '[driverName]',
  files: [idlBundleJson4_1],
  dirs: [hdf_idl1_0_dir]
}

// interface
export let hdf_interface: DirTemp = {
  name: 'IdlInterface',
  files: [],
  dirs: [hdf_driver_interface]
}

// drivers/HcsConfig
export let hdf_hcsconfig: DirTemp = {
  name: 'HcsConfig',
  files: [hcsConfigTemplate],
  dirs: []
}

// drivers/peripheral

export let hdf_hal_include: DirTemp = {
  name: 'include',
  files: [peripheralDumpH],
  dirs: []
}

export let hdf_hal: DirTemp = {
  name: 'hal',
  files: [peripheralDumpGn4_1, peripheralDumpC],
  dirs: [hdf_hal_include]
} 

export let hdf_hdi_service: DirTemp = {
  name: 'hdi_service',
  files: [driverInterfaceGn4_1, driverInterfaceDriver, driverInterfaceServiceCpp, driverInterfaceServiceH],
  dirs: []
}

export let hdf_driver_peripheral: DirTemp = {
  name: '[driverName]',
  files: [peripheralBuildGn, peripheralBundleJson4_1],
  dirs: [hdf_hal, hdf_hdi_service]
}

export let hdf_peripheral: DirTemp = {
  name: 'Peripheral',
  files: [],
  dirs: [hdf_driver_peripheral]
}

export let hdf4_1dir: DirTemp = {
  name: '[driverName]hdf',
  files: [hdfReadmeTemplate],
  dirs: [hdf_interface, hdf_peripheral, hdf_hcsconfig]
}

// 使用map管理版本
export const hdf_version_map = new Map([['4.1', hdf4_1dir]]);