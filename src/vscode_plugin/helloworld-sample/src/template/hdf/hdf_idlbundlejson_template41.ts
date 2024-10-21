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