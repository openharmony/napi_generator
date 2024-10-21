import { FileTemp } from "../../datatype";

export let hcsConfigTemplate: FileTemp = {
  name: 'device_info.hcs',
  content: `
  [driverName] :: host {
    hostName = "[driverName]_host";
    priority = 50;
    [driverName]_device :: device {
        device0 :: deviceNode {
            preload = 0;
            policy = 2;
            priority = 100;
            moduleName = "lib[driverName]_driver.z.so";
            serviceName = "[driverName]_interface_service";
        }
    }
  }
  `
}