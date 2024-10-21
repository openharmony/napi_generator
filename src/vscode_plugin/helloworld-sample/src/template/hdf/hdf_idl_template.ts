import { FileTemp } from "../../datatype";

export let idlTemplate: FileTemp = {
  name: 'I[marcoName]Interface.idl',
  content: ` 
  package ohos.hdi.[driverName].v1_0;

interface I[marcoName]Interface {
    [idlFunDeclare]
}
  `
}