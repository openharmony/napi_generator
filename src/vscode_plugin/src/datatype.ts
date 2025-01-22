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

import internal = require("stream");

export interface FileTemp {
  name: string;
  content: string;
}

export interface DirTemp {
  name: string;
  files: FileTemp[];
  dirs: DirTemp[];
}

export interface ParamObj {
  type: string;
  name: string;
  arraySize: number;
}

export interface EnumObj {
  name: string;
  alias: string;
  members: string[];
}

export interface UnionObj {
  name: string;
  alias: string;
  members: ParamObj[];
}

export interface StructObj {
  name: string;
  alias: string;
  members: ParamObj[];
  functions: FuncObj[];
}

export interface ClassObj {
  name: string;
  alias: string;
  variableList: ParamObj[];
  functionList: FuncObj[];
}

export interface FuncObj {
  type: string;
  name: string;
  returns: string;
  parameters: ParamObj[];
}

export interface TypeObj {
  name: string,
  alias: string,
  members: ParamObj[]
}

export interface ParseObj {
  enums: EnumObj[];
  unions: UnionObj[];
  structs: StructObj[];
  classes: ClassObj[];
  funcs: FuncObj[];
  types?: TypeObj[];
}

export interface ServiceRootInfo {
  serviceName: string,
  funcs: FuncObj[],
  serviceId: string,
  versionTag: string,
}

export interface HdfRootInfo {
  // driverName即为文件名字
  driverName: string; 
  funcs: FuncObj[];
  // 默认4.1
  versionTag: string;  
}

export interface FuncTransferMap {
  fromType: string;
  tranferContent: string[];
}

// h2dts
export interface GenInfo {
  parseObj: ParseObj;
  rawFilePath: string;
  fileName: string;
}

// h2dtscpp
export interface DtscppRootInfo {
  funcs: FuncObj[];
  rawFilePath: string;
  fileName: string;
}

export interface FuncInfo {
  name: string,
  params: ParamObj[],
  retType: string,
  genName: string,
}

// 保存 typedefine int cJSON_bool
export interface TypeList {
  // cJSON_bool
  typeName: string;  
  // int
  typeBody: string;  
}

export interface InterfaceBody {
  params: ParamObj[];
  funcs: FuncObj[];
}
// 保存 typedefine struct cJSON { int a; double b; string c;}
export interface InterfaceList {
  interfaceName: string;
  interfaceBody: InterfaceBody;
}

