import { FileTemp } from "../../datatype";

export let serviceCfgTemplate41: FileTemp = {
  name: '[serviceName]_service.cfg',
  content: `{
    "services" : [{
            "name" : "[lowServiceName]service",
            "path" : ["/system/bin/sa_main", "/system/profile/[lowServiceName]service_sa.json"],
            "uid" : "system",
            "gid" : ["system", "shell"]
        }
    ]
}
`
};