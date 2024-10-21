import { FileTemp } from "../../datatype";

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