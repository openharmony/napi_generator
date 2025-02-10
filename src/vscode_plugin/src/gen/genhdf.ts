/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import * as path from 'path';
import * as fs from 'fs';
import { DirTemp, HdfRootInfo } from "./datatype";
import { hdf_version_map } from '../template/hdf/hdfdir';
import { genIdlFile } from './genidlfile';
import { genServiceHFile } from './genservicehfile';
import { genServiceCppFile } from './genservicecppfile';
import { genHdfCommonFile } from './genCommonFile';

const fileHandlers: { [key: string]: Function } = {
  'I[marcoName]Interface.idl': genIdlFile,
  '[driverName]_interface_service.h': genServiceHFile,
  '[driverName]_interface_service.cpp': genServiceCppFile,
  '[driverName]_interface_driver.cpp': genHdfCommonFile,
  'BUILD.gn': genHdfCommonFile,
  'bundle.json': genHdfCommonFile,
  'hello_dump.h': genHdfCommonFile,
  'hello_dump.c': genHdfCommonFile,
  'device_info.hcs': genHdfCommonFile,
  'readme.md': genHdfCommonFile,
};

// 循环写入文件， 并将funcContent的内容写入模板
function genDir(dirItem: DirTemp, rootInfo: HdfRootInfo, out: string) {
  let dirPath = path.join(out, dirItem.name.replace('[driverName]', rootInfo.driverName));
  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  // 生成当前目录文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[driverName]', rootInfo.driverName);
    let upperName = rootInfo.driverName.substring(0, 1).toLocaleUpperCase();
    let marcoName = upperName + rootInfo.driverName.substring(1, rootInfo.driverName.length);
    fileName = fileName.replace('[marcoName]', marcoName);
    let filePath = path.join(dirPath, fileName);
    if (!fs.existsSync(filePath)) {
      const handler = fileHandlers[file.name];
      if (handler) {
        // 调用对应的生成文件方法
        handler(rootInfo, filePath, file.content);
      }
    }
  })
  // 遍历生成子目录文件
  dirItem.dirs.forEach(subDir => {
    genDir(subDir, rootInfo, dirPath);
  })
}

export function genHdfFile(rootInfo: HdfRootInfo, out: string) {
  console.info("rootInfo: " + JSON.stringify(rootInfo))

  let dirContentTemplete = hdf_version_map.get(rootInfo.versionTag);
  if (dirContentTemplete !== undefined) {
    genDir(dirContentTemplete, rootInfo, out);
  }

  console.info('generate success!')
}