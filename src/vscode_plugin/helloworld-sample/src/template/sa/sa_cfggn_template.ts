import { FileTemp } from "../../datatype";

export let serviceCfgGnTemplate: FileTemp = {
  name: 'BUILD.gn',
  content: `import("//build/ohos.gni")

  ohos_prebuilt_etc("[lowServiceName]_service_init") {
    source = "[lowServiceName]_service.cfg"
    relative_install_dir = "init"
    part_name = "[lowServiceName]service_part"
    subsystem_name = "[lowServiceName]service"
  }
  `
};