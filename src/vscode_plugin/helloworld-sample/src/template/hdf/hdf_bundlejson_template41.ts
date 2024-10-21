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