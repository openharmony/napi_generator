/*
* Copyright (c) 2025 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import * as fs from 'fs';
import { GenInfo, HdfRootInfo, ServiceRootInfo } from "../datatype";
import { replaceAll } from '../../common/tool';

// 生成sa非特殊处理的文件, 如xxx.cfg
export function genSaCommonFile(rootInfo: ServiceRootInfo, filePath: string, fileContent: string) {
  fileContent = replaceAll(fileContent, '[serviceName]', rootInfo.serviceName);
  fileContent = replaceAll(fileContent, '[marcoName]', rootInfo.serviceName.toUpperCase());
  fileContent = replaceAll(fileContent, '[lowServiceName]', rootInfo.serviceName.toLowerCase());
  fileContent = replaceAll(fileContent, '[serviceId]', rootInfo.serviceId);
  fs.writeFileSync(filePath, fileContent);
}

// 生成hdf非特殊处理的文件, 如xxx.hcs
export function genHdfCommonFile(rootInfo: HdfRootInfo, filePath: string, fileContent: string) {
  let upperName = rootInfo.driverName.substring(0, 1).toLocaleUpperCase();
  let marcoName = upperName + rootInfo.driverName.substring(1, rootInfo.driverName.length);
  let upperDriverName = rootInfo.driverName.toLocaleUpperCase();
  fileContent = replaceAll(fileContent, '[driverName]', rootInfo.driverName);
  fileContent = replaceAll(fileContent, '[marcoName]', marcoName);
  fileContent = replaceAll(fileContent, '[driverUpperName]', upperDriverName);
  fs.writeFileSync(filePath, fileContent);
}

// 生成napi非特殊处理的文件
export function genNapiCommonFile(rootInfo: GenInfo, filePath: string, 
  fileContent: string) {
  fs.writeFileSync(filePath, fileContent);
}

