/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const re = require("../tools/re");
const { checkOutBody, print } = require("../tools/tool");
const { FuncType, NumberIncrease,isFuncType, isArrowFunc,isRegisterFunc } = require("../tools/common");
const { NapiLog } = require("../tools/NapiLog");
// const { interfaces } = require("mocha");

function isSyncFuncType(type, funcType) {
    let isSync = false;
    if (funcType == FuncType.DIRECT && type.indexOf("Callback") >= 0 && type.indexOf("AsyncCallback") < 0 ||
    isFuncType(type) || isArrowFunc(type)) {
        isSync = true;
    }
    return isSync;
}

/**
 * on方法中回调方法的解析
 * @param {*} valueType 回调方法体
 * @param {*} valueName 参数名
 * @param {*} rsltCallFunction 解析结果
 */
function analyzeCallbackFunction(valueType, valueName, rsltCallFunction) {
    
    if (valueType.indexOf('=>') > 0) {
        valueType = re.replaceAll(valueType, ' ', '')
    }
    let matchs = re.match("\\(([a-zA-Z_0-9:,]+)*\\)=>([a-zA-Z_0-9]+)", valueType)

    if (matchs) {
      let number = NumberIncrease.getAndIncrease();
      let functionTypeName = 'AUTO_CALLFUNCTION_%s_%s'.format(valueName, number)
     
      let functionRet = re.getReg(valueType, matchs.regs[2]);
      let functionBody = re.getReg(valueType, matchs.regs[1]);
     
      let tmp = analyzeParams(functionTypeName, functionBody)
      let bodyRes = tmp[0]
      for (let i in bodyRes) {
        let hasProperty = Object.prototype.hasOwnProperty.call(bodyRes[i], "type")
        if (hasProperty && bodyRes[i].type == "number") {
          bodyRes[i].type = "NUMBER_TYPE_" + NumberIncrease.getAndIncrease();
        }
      }

      rsltCallFunction.push({
          "name": functionTypeName,
          "body": bodyRes,
          "ret": functionRet                  // 返回值
      })               
      valueType = functionTypeName
  }
  return valueType
}

// function analyzeInerfaceCallbackFunction(functionTypeName, functionRet, functionBody, rsltCallFunction) {
    
//     // let tmp = analyzeParams(functionTypeName, functionBody)
//     // let bodyRes = tmp[0]


//       rsltCallFunction.push({
//           "name": functionTypeName,
//           "body": functionBody,
//           "ret": functionRet                  // 返回值
//       })                
//       let valueType = functionTypeName

//   return valueType
// }

// // 判断 注册的 type 的是否为interface
// function getCallbackInterface(type, results) {
//     let allInterfaces = results.interface
//     if (allInterfaces === null || allInterfaces === undefined || results.interface === null) {
//         NapiLog.logError("Invalid param: allInterfaces")
//         return;
//     }

//     for (let i in allInterfaces) {
//         if (allInterfaces[i].name == type) {
//             return allInterfaces[i];
//         }
//     }
//     return null;
// }

/**函数参数解析 */
function analyzeParams(funcName, values) {
    let result =  []
    let rsltCallFunction = []
    let funcType = FuncType.DIRECT
    let optionalParamCount = 0; // 可选参数的个数
    while (values.length > 0) {
        let v = checkOutBody(values, 0, ["", ","])
        if (v == null) {
            v = values
        }
            
        values = values.substring(v.length, values.length)
        let matchs = re.match("([a-zA-Z_0-9\\.]+)(\\?*): *([a-zA-Z<,>|_0-9\\[\\]\\(\\):='{}]+)", v)
        if (matchs == null && (funcName == "on" || funcName == "off")) {
            // on和off的第一个参数的类型可以是一串字符
            matchs = re.match("([a-zA-Z_0-9\\.]+)(\\?*): *\"([a-zA-Z|_0-9\\[\\]\\(\\):='{}]+)\"", v)
        }
        if (matchs != null) {
            let type = re.getReg(v, matchs.regs[3])
            if (type.indexOf("Map") < 0 && !isArrowFunc(type)) {
                type = type.replace(/,/g, "")
            }

            let valueName = re.getReg(v, matchs.regs[1])
            let isRegister = isRegisterFunc(funcName);

            // if (isRegister) {
            //     // 判断 注册的 type 的是否为interface
            //     let inter = getCallbackInterface(type, results)
            //     if (inter != null) {
            //         for(let i=0; i<inter.body.function.length; i++) {
            //             let cbFunc = inter.body.function[i];
            //             let cbTypeName = "AUTO_CALLFUNCTION_" + inter.name + "_" + cbFunc.name;

            //             // 对于包含回调函数集合的interface、class,根据此标记后续不需要进行转换
            //             inter.isCallbackObj = true; 
                        
            //             // 对于包含回调函数集合的interface、class,根据此标记直接解析，
            //             // 后续无需对interface、class中的回调进行转换
            //             inter.body.function[i].isObjCbFuncs = true 
            //             inter.body.function[i].cbTypeName = cbTypeName

            //             analyzeInerfaceCallbackFunction(cbTypeName, cbFunc.ret, cbFunc.value, rsltCallFunction)
            //         }
            //     } else {
            //         type = analyzeCallbackFunction(type, valueName, rsltCallFunction)
            //     }
            // } else {
                type = analyzeCallbackFunction(type, valueName, rsltCallFunction)
            // }

            let optionalFlag = re.getReg(v, matchs.regs[2]) == '?' ? true : false;
            let checkParamOk = true;
            if (optionalFlag) {
                optionalParamCount++;
            } else if (optionalParamCount > 0) {
                // 可选参数之后不能再有必选参数，必选都是可选参数。
                NapiLog.logError("Invalid parameter [%s] of function [%s],".format(v, funcName) 
                        + " the required parameter cannot follow an optional parameter.");
                checkParamOk = false;
            } 
            if (checkParamOk) {
                result.push({ "name": re.getReg(v, matchs.regs[1]), "type": type, "optional": optionalFlag})
                if (type.indexOf("AsyncCallback") >= 0) {
                    funcType = FuncType.ASYNC
                }

                if (isSyncFuncType(type, funcType)) {
                    funcType = FuncType.SYNC
                }             
            }
        }
        else {
            NapiLog.logError("方法[%s]的参数列表[%s]解析失败。".format(funcName, v));
            NapiLog.logError("Failed to analyse parameter [%s] of function [%s].".format(v, funcName));
        }
    }
    return [result, funcType, rsltCallFunction]
}

module.exports = {
    analyzeParams
}
