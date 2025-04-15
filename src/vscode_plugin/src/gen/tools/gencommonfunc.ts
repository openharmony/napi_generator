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

import { getTab } from '../../common/tool';
import { getReg, match } from '../../common/re';
import { format } from 'util'
import { FuncObj, ParamObj, StructObj, ClassObj } from '../datatype';
import { transferMap } from '../../template/functypemap_template'
import { classMethodDeclareTemplate, objectRet, promiseRet } from "../../template/func_template";
import { replaceAll } from "../../common/tool";
import { h2NapiInKey, h2NapiOutKey } from "../../template/dtscpp/dts2cpp_key";

export function getFuncParamStr(params: ParamObj[]) {
  let paramStr = '';
  for (let i = 0; i < params.length; ++i) {
    paramStr += (i === 0) ? '' : ', ';
    paramStr += params[i].type + ' ' + params[i].name;
  }
  return paramStr;
}

// 生成头文件中的方法声明内容
export function genDeclareContent(funcList: FuncObj[]) {
  let funcTab = getTab(1);
  let saFuncHContent = '';
  for (let i = 0; i < funcList.length; ++i) {
    let paramStr = getFuncParamStr(funcList[i].parameters);
    // proxy.h中的方法定义
    saFuncHContent += (i === 0) ? '' : '\n' + funcTab;
    saFuncHContent += format('%s %s(%s) override;', funcList[i].returns, funcList[i].name, paramStr);
  }
  return saFuncHContent;
}

// 常用类型转换表, 将C语言常见类型(key)转换为remote data读写函数使用的类型(value)
// 例如 ErrCode 类型在框架中的系统原型为int类型，这里映射成int32_t，
// 因为int32_t类型在 DATA_W_MAP/DATA_R_MAP 表中有对应的读写数据方法(WriteInt32/ReadInt32)
const TYPE_DEF_MAP = new Map(
  [['ErrCode', 'int32_t'], ['char', 'int8_t'], ['short', 'int16_t'], ['int', 'int32_t'], ['long', 'int64_t'],
  ['unsigned char', 'uint8_t'], ['unsigned short', 'uint16_t'], ['unsigned int', 'uint32_t'],
  ['unsigned long', 'uint64_t'], ['double_t', 'double'], ['float_t', 'float'], ['size_t', 'double'],
  ['long long', 'double'], ['long double', 'double'], ['std::string', 'string']
  ]);

export function getParcelType(srcType: string) {
  let parcelType = TYPE_DEF_MAP.get(srcType);
  return parcelType === undefined ? srcType : parcelType;
}

export function getTransferContent(parcelVecType: string, isWrite: number) {
  let rwFunc = '';
  for (let index = 0; index < transferMap.length; index++) {
    if (parcelVecType === transferMap[index].fromType) {
      rwFunc = transferMap[index].tranferContent[isWrite];
    }
  }
  return rwFunc;
}

export function genWrite(srcName: string, parcelName: string, vType: string) {
  let matchs = match('(std::)?vector<([\x21-\x7e]+)[ ]?>', vType);
  if (matchs) {
    // vector类型变量包装成parcel data
    let rawType = getReg(vType, matchs.regs[2]);
    let parcelVecType = 'vector<' + getParcelType(rawType) + '>';
    let wVecFunc = getTransferContent(parcelVecType, 0);
    if (wVecFunc === '') {
      return '';
    }
    return format('%s.%s(%s);', parcelName, wVecFunc, srcName);
  }

  let parcelType = getParcelType(vType);
  let wFunc = getTransferContent(parcelType, 0);

  return format('%s.%s(%s);', parcelName, wFunc, srcName);
}

export function genRead(parcelName: string, destObj: ParamObj) {
  let matchs = match('(std::)?vector<([\x21-\x7e]+)[ ]?>', destObj.type);
  if (matchs) {
    // 从parcel data中读取vector类型变量
    let rawType = getReg(destObj.type, matchs.regs[2]);
    let parcelVecType = getParcelType(rawType);
    let rVecFunc = 'vector<' + getTransferContent(parcelVecType, 1) + '>';
    if (rVecFunc === '') {
      return '';
    }
    return format('%s.%s(&(%s));', parcelName, rVecFunc, parcelName);
  }

  let parcelType = getParcelType(destObj.type);
  let rFunc = getTransferContent(parcelType, 1);
  return format('%s = %s.%s();', destObj.name, parcelName, rFunc);
}

// ------------ gencpp common function --------------
// 通过类型值映射模板，比如：uint32_t返回值 -> uint32tRet -> napi_create_uint32
export function transCkey2NapiOutkey(key: string) {
  // 如果是ts传递的Promise<>类型，并且transTs2C时未转换，那么就返回promiseRet
  let tsPromiseReg = /Promise<([^>]+)>/g;
  const tsPromiseMatch = tsPromiseReg.exec(key);
  if (tsPromiseMatch) {
    return promiseRet;
  }

 // 数组 map set iterator tuple pair 等都当作objectOut处理
 for (const keyItem of h2NapiOutKey) {
   for (const str of keyItem.keys) {
     if (key.includes(str)) {
       return keyItem.value;
     }
   }
 }
 let replaceKeyList = ['enum', 'struct', 'union'];
 for (const rkey of replaceKeyList) {
   key = key.replace(rkey, '').trim();
 }
 // 其他的全部当作object处理, 如typeDef/enum/struct/union/class等,当作objectOut处理，返回objectRet
 return objectRet;
}

// 通过类型值映射模板，比如：uint32_t输入 -> uint32tIn -> napi_get_value_uint32
export function transCkey2NapiInkey(key: string) {
 for (const keyItem of h2NapiInKey) {
   for (const str of keyItem.keys) {
     if (key.includes(str)) {
       return keyItem.value;
     }
   }
 }
 let replaceKeyList = ['enum', 'struct', 'union'];
 for (const rkey of replaceKeyList) {
   key = key.replace(rkey, '').trim();
 }
 // 其他的全部当作object处理, 如typeDef/enum/struct/union/class等, 此时不需要做任何处理，因此返回空
 return '';
}
// class的成员变量声明，以及成员变量的Get/Set方法的声明
export function genClsVariableDeclare(cls: ClassObj) {
  let clsVariableDeclare = '';
  let clsVariableGetSetDeclare = '';
  for (let i = 0; i < cls.variableList.length; ++i) {
    clsVariableDeclare += cls.variableList[i].type + ' ' + cls.variableList[i].name + ';\n    ';
    let name = cls.variableList[i].name.toLocaleLowerCase();
    name = name.substring(0, 1).toLocaleUpperCase() + name.substring(1);
    // 属性Get函数声明
    clsVariableGetSetDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', 'Get' + name);
    // 属性Set函数声明
    clsVariableGetSetDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', 'Set' + name);
  }
  return { clsVariableDeclare, clsVariableGetSetDeclare }; 
}

// struct的成员变量声明，以及成员变量的Get/Set方法的声明
export function genStructVariableDeclare(struct: StructObj) {
  let clsVariableDeclare = '';
  let clsVariableGetSetDeclare = '';
  for (let i = 0; i < struct.members.length; ++i) {
    clsVariableDeclare += struct.members[i].type + ' ' + struct.members[i].name + ';\n    ';
    let name = struct.members[i].name.toLocaleLowerCase();
    name = name.substring(0, 1).toLocaleUpperCase() + name.substring(1);
    // 属性Get函数声明
    clsVariableGetSetDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', 'Get' + name);
    // 属性Set函数声明
    clsVariableGetSetDeclare += replaceAll(classMethodDeclareTemplate, '[class_method_name_replace]', 'Set' + name);
  }
  return { clsVariableDeclare, clsVariableGetSetDeclare }; 
}
