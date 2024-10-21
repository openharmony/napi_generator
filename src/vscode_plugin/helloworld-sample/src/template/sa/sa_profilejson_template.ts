import { FileTemp } from "../../datatype";

export let profileJsonTemplate: FileTemp = {
  name: '[serviceId].json',
  content: `{
    "process":"[lowServiceName]service_sa",
        "systemability":[
            {
                "name":[serviceId],
                "libpath":"lib[lowServiceName]service.z.so",
                "run-on-create":false,
                "auto-restart":true,
                "distributed":false,
                "dump-level":1
            }
        ]
  }`
};