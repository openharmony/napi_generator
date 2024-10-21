import { FileTemp } from "../../datatype";

export let profileXmlTemplate: FileTemp = {
  name: '[serviceId].xml',
  content: `<?xml version="1.0" encoding="utf-8"?>
  <info>
      <process>[lowServiceName]service_sa</process>
      <systemability>
          <name>[serviceId]</name>
          <libpath>lib[lowServiceName]service.z.so</libpath>
          <run-on-create>true</run-on-create>
          <distributed>false</distributed>
          <dump-level>1</dump-level>
      </systemability>
  </info>
  `
};