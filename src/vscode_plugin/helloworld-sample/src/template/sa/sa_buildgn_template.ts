import { FileTemp } from "../../datatype";

export let buildGnTemplate: FileTemp = {
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
      "//utils/native/base/include"
    ]
  
    deps = [
      "//base/startup/syspara_lite/interfaces/innerkits/native/syspara:syspara",
      "//utils/native/base:utils",
    ]
  
    external_deps = [
      "hiviewdfx_hilog_native:libhilog",
      "ipc:ipc_core",
      "safwk:system_ability_fwk",
      "samgr_standard:samgr_proxy",
      "startup_l2:syspara",
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
      "//utils/native/base/include"
    ]
  
    deps = [
      "//utils/native/base:utils",
    ]
  
    external_deps = [
      "hiviewdfx_hilog_native:libhilog",
      "ipc:ipc_core",
      "samgr_standard:samgr_proxy",
    ]
  
    part_name = "[lowServiceName]service_part"
    subsystem_name = "[lowServiceName]service"
  }
  `
};