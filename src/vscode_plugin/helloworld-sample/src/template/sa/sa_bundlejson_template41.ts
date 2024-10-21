import { FileTemp } from "../../datatype";

export let bundleJsonTemplate41: FileTemp = {
  name: 'bundle.json',
  content: `{
    "name": "@ohos/[lowServiceName]service_part",
    "description": "system ability framework test",
    "homePage": "https://gitee.com/",
    "version": "4.1",
    "license": "Apache License 2.0",
    "repository": "",
    "publishAs": "code-segment",
    "segment": {
        "destPath": "[lowServiceName]service"
    },
    "dirs": {},
    "scripts": {},
    "component": {
        "name": "[lowServiceName]service_part",
        "subsystem": "[lowServiceName]service",
        "adapted_system_type": [
            "standard"
        ],
        "rom": "2048KB",
        "ram": "~4096KB",
        "deps": {
            "components": [
                "hilog",
                "ipc",
                "samgr",
                "c_utils",
                "safwk"
            ],
            "third_party": [ "libxml2" ]
        },
        "build": {
            "sub_component": [
                "//[lowServiceName]service:[lowServiceName]service",
                "//[lowServiceName]service/sa_profile:[lowServiceName]service_sa_profile",
                "//[lowServiceName]service:[lowServiceName]client",
                "//[lowServiceName]service/etc:[lowServiceName]_service_init"
            ],
            "inner_kits": [
            ],
            "test": [
            ]
        }
    }
}`
};