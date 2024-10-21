import { FileTemp } from "../../datatype";

export let serviceCfgTemplate: FileTemp = {
  name: '[serviceName]_service.cfg',
  content: `{
    "services" : [{
            "name" : "[lowServiceName]service",
            "path" : ["/system/bin/sa_main", "/system/profile/[lowServiceName]service_sa.xml"],
            "uid" : "system",
            "gid" : ["system", "shell"]
        }
    ]
}
`
};