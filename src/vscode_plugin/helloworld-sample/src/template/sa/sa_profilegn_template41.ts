import { FileTemp } from "../../datatype";

export let profileGnTemplate41: FileTemp = {
  name: 'BUILD.gn',
  content: `import("//build/ohos.gni")
  import("//build/ohos/sa_profile/sa_profile.gni")
  
  ohos_sa_profile("[lowServiceName]service_sa_profile") {
    sources = [ "[serviceId].json" ]
  
    part_name = "[lowServiceName]service_part"
  }
  `
};