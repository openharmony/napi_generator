/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const fs = require('fs');
const path = require('path');

function replaceAll(s, sfrom, sto) {
  while (s.indexOf(sfrom) >= 0) {
      s = s.replace(sfrom, sto);
  }
  return s;
}

function getJsonCfg(jsonFilePath) {
  let jsonCfg = null;
  let jsonFile = fs.readFileSync(jsonFilePath, { encoding: 'utf8' });
  jsonCfg = JSON.parse(jsonFile);
  return jsonCfg;
}

function pathJoin(...args) {
  return path.join(...args);
}

function utf8ArrayToStr(array) {
  let char2, char3;
  let outStr = '';
  let len = array.length;
  let i = 0;
  while (i < len) {
    let ch = array[i++];
    switch (ch >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        outStr += String.fromCharCode(ch);
        break;
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++];
        outStr += String.fromCharCode(((ch & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        outStr += String.fromCharCode(((ch & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
        break;
      }
  }

  return outStr;
}

function readFile(fn) {
  if (!fs.existsSync(fn)) {
    return '';
  }
  let data = fs.readFileSync(fn);
  data = utf8ArrayToStr(data);
  return data;
}

function createDirectorySync(directoryPath) {
  try {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
  } catch (err) {
    console.error(`无法创建文件夹 ${directoryPath}: ${err}`);
  }
}

function writeFile(fn, str) {
  fs.writeFileSync(fn, str, { encoding: 'utf8' });
}

/* 根据用户输入的driver名字生成framework框架
 * drivername:用户输入的驱动名，out:生成框架路径
 * 1. 读取json文件模板
 * 2. 替换模板中的名字并写文件输出
 */
function genDriverFramework(driverName, out = '') {
  // 读取Json文件，获取各模板路径
  let frameworkJsonPath = path.join(__dirname, './templete/framework.json');
  let frameworkJson = getJsonCfg(frameworkJsonPath);

  let frameworkPath = pathJoin(out, driverName + 'hdf');

  let namespaceName = driverName.substring(0,1).toUpperCase() + driverName.substring(1, driverName.length);
  let idlFileName = 'I' + namespaceName + 'Interface';
  let rootInfo = {
    'driverName': driverName,
    'namespaceName': namespaceName,
    'idlFileName': idlFileName,
  };

  // 生成Hcs配置文件
  genHcsconfigFile(frameworkJson, driverName, frameworkPath);

  // 生成Idl接口
  genInterface(frameworkPath, frameworkJson, rootInfo);

  // 生成hdi_service
  genPeripheral(frameworkPath, frameworkJson, rootInfo);
}

function genPeripheral(frameworkPath, frameworkJson, rootInfo) {
  
  let peripheralPath = pathJoin(frameworkPath, 'Peripheral/' + rootInfo.driverName);
  createDirectorySync(peripheralPath);

  // dump文件路径：dump.c 与 BUILD.gn 
  // build.gn  out/hdf/Peripheral/xxx/hal/BUILD.gn
  genExampleDumpfile(peripheralPath, frameworkJson, rootInfo);

  // hdi路径
  genHdiService(peripheralPath, frameworkJson, rootInfo);

  // 日志文件路径  out/hdf/Peripheral/xxx/utils/interface/xxx_log.h
  genLogFile(peripheralPath, rootInfo, frameworkJson);

  // 生成编译文件bundle.json和BUILD.gn文件
  genBuildFile(peripheralPath, frameworkJson, rootInfo);
}

function genBuildFile(peripheralPath, frameworkJson, rootInfo) {
  // out/hdf/Peripheral/xxx/bundle.json
  let genBundlejsonPath = pathJoin(peripheralPath, 'bundle.json');
  let bundlejsonPath = path.join(__dirname, frameworkJson.PeripheralTemplete.bundlejsonTemplete);
  let bundlejsonContent = readFile(bundlejsonPath);
  bundlejsonContent = replaceAll(bundlejsonContent, '[driver_name]', rootInfo.driverName);
  writeFile(genBundlejsonPath, bundlejsonContent);
  // out/hdf/Peripheral/xxx/BUILD.gn
  let genBuildgnPath = pathJoin(peripheralPath, 'BUILD.gn');
  let buildgnPath = path.join(__dirname, frameworkJson.PeripheralTemplete.buildgnTemplete);
  let buildgnContent = readFile(buildgnPath);
  buildgnContent = replaceAll(buildgnContent, '[driver_name]', rootInfo.driverName);
  writeFile(genBuildgnPath, buildgnContent);
}

function genLogFile(peripheralPath, rootInfo, frameworkJson) {
  let genLogPath = pathJoin(peripheralPath, 'utils/interface');
  createDirectorySync(genLogPath);
  let genLogFile = pathJoin(genLogPath, rootInfo.driverName + '_log.h');
  let logPath = path.join(__dirname, frameworkJson.PeripheralTemplete.HdiServiceTemplete.logHTemplete);
  let logContent = readFile(logPath);
  logContent = replaceAll(logContent, '[upper_driver_name]', rootInfo.driverName.toUpperCase());
  writeFile(genLogFile, logContent);
}

function genHdiService(peripheralPath, frameworkJson, rootInfo) {
  let hdiPath = pathJoin(peripheralPath, 'hdi_service');
  let driverInterName = rootInfo.namespaceName + 'Interface';
  // 创建hdi_service文件夹
  createDirectorySync(hdiPath);
  // out/hdf/Peripheral/xxx/hdi_service/xxx_interface_driver.cpp
  let genHdiDriverPath = pathJoin(hdiPath, rootInfo.driverName + '_interface_driver.cpp');
  let driverPath = path.join(__dirname, frameworkJson.PeripheralTemplete.HdiServiceTemplete.driverTemplete);
  let driverContent = readFile(driverPath);
  driverContent = replaceAll(driverContent, '[driver_name]', rootInfo.driverName);
  driverContent = replaceAll(driverContent, '[driver_idl_name]', rootInfo.idlFileName);
  driverContent = replaceAll(driverContent, '[driver_inter_name]', driverInterName);
  driverContent = replaceAll(driverContent, '[driver_namespace_name]', rootInfo.namespaceName);
  writeFile(genHdiDriverPath, driverContent);

  // out/hdf/Peripheral/xxx/hdi_service/xxx_interface_service.cpp
  let genHdiServiceCppPath = pathJoin(hdiPath, rootInfo.driverName + '_interface_service.cpp');
  let serviceCppPath = path.join(__dirname, frameworkJson.PeripheralTemplete.HdiServiceTemplete.serviceCppTemplete);
  let serviceCppContent = readFile(serviceCppPath);
  serviceCppContent = replaceAll(serviceCppContent, '[driver_name]', rootInfo.driverName);
  serviceCppContent = replaceAll(serviceCppContent, '[driver_idl_name]', rootInfo.idlFileName);
  serviceCppContent = replaceAll(serviceCppContent, '[driver_inter_name]', driverInterName);
  serviceCppContent = replaceAll(serviceCppContent, '[driver_namespace_name]', rootInfo.namespaceName);
  writeFile(genHdiServiceCppPath, serviceCppContent);

  // out/hdf/Peripheral/xxx/hdi_service/xxx_interface_service.h
  let genHdiServiceHPath = pathJoin(hdiPath, rootInfo.driverName + '_interface_service.h');
  let serviceHPath = path.join(__dirname, frameworkJson.PeripheralTemplete.HdiServiceTemplete.serviceHTemplete);
  let serviceHContent = readFile(serviceHPath);
  serviceHContent = replaceAll(serviceHContent, '[driver_name]', rootInfo.driverName);
  serviceHContent = replaceAll(serviceHContent, '[driver_idl_name]', rootInfo.idlFileName);
  serviceHContent = replaceAll(serviceHContent, '[driver_inter_name]', driverInterName);
  serviceHContent = replaceAll(serviceHContent, '[driver_namespace_name]', rootInfo.namespaceName);
  serviceHContent = replaceAll(serviceHContent, '[upper_driver_name]', rootInfo.driverName.toUpperCase());
  writeFile(genHdiServiceHPath, serviceHContent);

  // 生成hdi_service下面的BUILD.gn: out/hdf/Peripheral/xxx/hdi_service/
  let genHdiServiceGnPath = pathJoin(hdiPath, 'BUILD.gn');
  let serviceGnPath = path.join(__dirname, frameworkJson.PeripheralTemplete.HdiServiceTemplete.buildgnTemplete);
  let serviceGnContent = readFile(serviceGnPath);
  serviceGnContent = replaceAll(serviceGnContent, '[driver_name]', rootInfo.driverName);
  writeFile(genHdiServiceGnPath, serviceGnContent);
}

function genExampleDumpfile(peripheralPath, frameworkJson, rootInfo) {
  let dumpExamplePath = pathJoin(peripheralPath, 'hal');
  createDirectorySync(dumpExamplePath);
  let genDumpExampleGnPath = pathJoin(dumpExamplePath, 'BUILD.gn');
  let dumpExampleGnPath = path.join(__dirname, frameworkJson.PeripheralTemplete.DumpExampleTemplete.buildgnTemplete);
  let dumpExampleGnContent = readFile(dumpExampleGnPath);
  dumpExampleGnContent = replaceAll(dumpExampleGnContent, '[driver_name]', rootInfo.driverName);
  writeFile(genDumpExampleGnPath, dumpExampleGnContent);

  // dump.c  out/hdf/Peripheral/xxx/hal/xxx_dump.c
  let genDumpCExamplePath = pathJoin(dumpExamplePath, rootInfo.driverName + '_dump.c');
  let dumpCExamplePath = path.join(__dirname, frameworkJson.PeripheralTemplete.DumpExampleTemplete.dumpCTemplete);
  let dumpCExampleContent = readFile(dumpCExamplePath);
  dumpCExampleContent = replaceAll(dumpCExampleContent, '[driver_name]', rootInfo.driverName);
  dumpCExampleContent = replaceAll(dumpCExampleContent, '[driver_func_name]', rootInfo.namespaceName);
  writeFile(genDumpCExamplePath, dumpCExampleContent);
  // dump.h  out/hdf/Peripheral/xxx/hal/include/xxx_dump.h
  let genDumpHExamplePath = pathJoin(dumpExamplePath, 'include');
  createDirectorySync(genDumpHExamplePath);
  let dumpHExamplePath = path.join(__dirname, frameworkJson.PeripheralTemplete.DumpExampleTemplete.dumpHTemplete);
  let dumpHExampleContent = readFile(dumpHExamplePath);
  dumpHExampleContent = replaceAll(dumpHExampleContent, '[driver_name_toupper]', rootInfo.driverName.toUpperCase());
  dumpHExampleContent = replaceAll(dumpHExampleContent, '[driver_func_name]', rootInfo.namespaceName);
  let genDumpHExampleFile = pathJoin(genDumpHExamplePath, rootInfo.driverName + '_dump.h');
  writeFile(genDumpHExampleFile, dumpHExampleContent);
}

function genInterface(frameworkPath, frameworkJson, rootInfo) {
  // idl文件路径 out/hdf/IdlInterface/foo/v1_0/IXxxInterface.idl
  let idlPath = pathJoin(frameworkPath, 'IdlInterface/' + rootInfo.driverName);
  let genIdlFilepath = pathJoin(idlPath, 'v1_0/');
  createDirectorySync(genIdlFilepath);
  let idlFilepath = path.join(__dirname, frameworkJson.IdlInterfaceTemplete.idlInterfaceTemplete);
  let idlFileContent = readFile(idlFilepath);
  idlFileContent = replaceAll(idlFileContent, '[driver_name]', rootInfo.driverName);
  idlFileContent = replaceAll(idlFileContent, '[driver_idl_name]', rootInfo.idlFileName);
  let genIdlFile = pathJoin(genIdlFilepath, rootInfo.idlFileName + '.idl');
  writeFile(genIdlFile, idlFileContent);

  // idl接口bundlejson路径 out/hdf/IdlInterface/foo/bundle.json
  let genIdlBundlejsonPath = pathJoin(idlPath, 'bundle.json');
  let idlBundlejsonPath = path.join(__dirname, frameworkJson.IdlInterfaceTemplete.bundlejsonTemplete);
  let idlBundlejsonContent = readFile(idlBundlejsonPath);
  idlBundlejsonContent = replaceAll(idlBundlejsonContent, '[driver_name]', rootInfo.driverName);
  writeFile(genIdlBundlejsonPath, idlBundlejsonContent);

  // idl接口BUILD.gn路径 out/hdf/IdlInterface/foo/v1_0/BUILD.gn
  let genIdlBuildgnPath = pathJoin(genIdlFilepath, 'BUILD.gn');
  let idlBuildgnPath = path.join(__dirname, frameworkJson.IdlInterfaceTemplete.buildgnTemplete);
  let idlBuildgnContent = readFile(idlBuildgnPath);
  idlBuildgnContent = replaceAll(idlBuildgnContent, '[driver_name]', rootInfo.driverName);
  idlBuildgnContent = replaceAll(idlBuildgnContent, '[driver_idl_name]', rootInfo.idlFileName);
  writeFile(genIdlBuildgnPath, idlBuildgnContent);
}

function genHcsconfigFile(frameworkJson, driverName, frameworkPath) {
  // 读取hcs配置文件模板 hcs配置文件
  let hcsconfigPath = path.join(__dirname, frameworkJson.HcsconfigTemplete);
  let hcsconfigContent = readFile(hcsconfigPath);
  // 生成hcs config文件内容: 根据用户输入的drivername配置hcs文件
  hcsconfigContent = replaceAll(hcsconfigContent, '[driver_name]', driverName);
  // 生成device_info.hcs 配置文件路径 out/hdf/HcsConfig/device_info.hcs
  let genHcsconfigPath = pathJoin(frameworkPath, 'HcsConfig');
  createDirectorySync(genHcsconfigPath);
  let genHcsconfigFile = pathJoin(genHcsconfigPath, 'device_info.hcs');
  writeFile(genHcsconfigFile, hcsconfigContent);
}

module.exports = {
  genDriverFramework
};