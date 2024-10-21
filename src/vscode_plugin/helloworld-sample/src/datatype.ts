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
}

export interface FuncObj {
  name: string;
  returns: string;
  parameters: ParamObj[];
}

export interface ParseObj {
  funcs: FuncObj[];
}

export interface ServiceRootInfo {
  serviceName: string,
  funcs: FuncObj[],
  serviceId: string,
  versionTag: string,
}

export interface HdfRootInfo {
  driverName: string; // driverName即为文件名字
  funcs: FuncObj[];
  versionTag: string;  // 默认4.1
}

export interface FuncTransferMap {
  fromType: string;
  tranferContent: string[];
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
  typeName: string;  // cJSON_bool
  typeBody: string;  // int
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

