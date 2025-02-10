
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

import { sa_version_map } from '../template/sa/sadir';
import * as path from 'path';
import * as fs from 'fs';
import { DirTemp, ServiceRootInfo } from './datatype';
import { genProxyHFile } from './tools/genproxyhfile';
import { genProxyCppFile } from './tools/genproxycppfile';
import { genSaHFile } from './tools/gensahfile';
import { genSaCppFile } from './tools/gensacppfile';
import { genIServiceHFile } from './tools/geniservicehfile';
import { genStubHFile } from './tools/genstubhfile';
import { genStubCppFile } from './tools/genstubcppfile';
import { genClientCppFile } from './tools/genclientcppfile';
import { genSaCommonFile } from './tools/gencommonfile';

const fileHandlers: { [key: string]: Function } = {
  '[serviceName]_service_proxy.h': genProxyHFile,
  '[serviceName]_service_proxy.cpp': genProxyCppFile,
  '[serviceName]_service.h': genSaHFile,
  '[serviceName]_service.cpp': genSaCppFile,
  'i_[serviceName]_service.h': genIServiceHFile,
  '[serviceName]_service_stub.h': genStubHFile,
  '[serviceName]_service_stub.cpp': genStubCppFile,
  '[serviceName]_client.cpp': genClientCppFile,
  'BUILD.gn': genSaCommonFile,
  'bundle.json': genSaCommonFile,
  '[serviceName]_service.cfg': genSaCommonFile,
  '[serviceId].json': genSaCommonFile,
  '[serviceId].xml': genSaCommonFile,
  'readme.md': genSaCommonFile
};

// 遍历数据结构，拿到模板内容，并生成文件内容
export function genDir(dirItem: DirTemp, rootInfo: ServiceRootInfo, out: string) {
  let dirPath = path.join(out, dirItem.name.replace('[serviceName]', rootInfo.serviceName));
  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  // 遍历生成当前目录文件
  dirItem.files.forEach(file => {
    let fileName = file.name.replace('[serviceName]', rootInfo.serviceName);
    fileName = fileName.replace('[serviceId]', rootInfo.serviceId);
    let filePath = path.join(dirPath, fileName);
    // 将content写入文件， 这里的content是模板，需要replace里面的部分内容
    if (!fs.existsSync(filePath)) {
      // 拿到每个文件并且根据文件生成内容并写入
      const handler = fileHandlers[file.name];
      if (handler) {
        // 调用对应的生成文件方法
        handler(rootInfo, filePath, file.content);
      } 
    }
  })
  // 遍历子目录，生成子目录的文件
  dirItem.dirs.forEach(subDir => {
    genDir(subDir, rootInfo, dirPath);
  })
}

export function genServiceFile(rootInfo: ServiceRootInfo, out: string) {
  console.info("rootInfo: " + JSON.stringify(rootInfo))

  let dirContentTemplete = sa_version_map.get(rootInfo.versionTag);
  if (dirContentTemplete !== undefined) {
    genDir(dirContentTemplete, rootInfo, out);
  }

  console.info('generate success!')
}
