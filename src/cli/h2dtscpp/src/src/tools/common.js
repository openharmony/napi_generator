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

class InterfaceList { }
InterfaceList.interfacess_ = [];
InterfaceList.push = function (ifs) {
    InterfaceList.interfacess_.push(ifs);
};
InterfaceList.pop = function () {
    InterfaceList.interfacess_.pop();
};
InterfaceList.getValue = function (name) {
    let ifs = InterfaceList.interfacess_;
    for (let i in ifs) {
        if (ifs[i].name === name) {
            let hasProperty = Object.prototype.hasOwnProperty.call(ifs[i].body, 'allProperties');
            if (hasProperty) {
                return ifs[i].body.allProperties.values;
            } else {
                return ifs[i].body.value;
            }
        }
    }
    return null;
};

InterfaceList.getBody = function (name) {
  let ifs = InterfaceList.interfacess_;
  for (let i in ifs) {
      if (ifs[i].name === name) {
          return ifs[i].body;
      }
  }
  return null;
};

class TypeList { }
TypeList.types = [];
TypeList.push = function (ifs) {
  TypeList.types.push(ifs);
};
TypeList.pop = function () {
  TypeList.types.pop();
};
TypeList.getValue = function (name) {
    // let ifs = TypeList.types[TypeList.types.length - 1]
    let ifs = TypeList.types;
    for (let i in ifs) {
        if (ifs[i].name === name) {
            let hasProperty = Object.prototype.hasOwnProperty.call(ifs[i].body, 'allProperties');
            if (hasProperty) {
                return ifs[i].body.allProperties.values;
            } else {
                return ifs[i].body;
            }
        }
    }
    return null;
};

module.exports = {
  InterfaceList,
  TypeList,
};
