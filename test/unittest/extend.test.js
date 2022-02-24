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
let genDir="../../src/gen/"
const { generateGYP } = require(genDir+"extend/binding_gyp");
const { generateGN } = require(genDir+"extend/build_gn");
const { generateBase } = require(genDir+"extend/x_napi_tool");
const rewire = require("rewire");
String.prototype.replaceAll = function (...args) {
    let result = this;
    while (result.indexOf(args[0]) >= 0) {
        result = result.replace(args[0], args[1])
    }
    return result;
}

describe('Extend', function () {
    
    it('test gen/extend/binding_gyp generateGYP', function () {
        let ret = generateGYP('test/unittest','napitest');
        let retJson = JSON.stringify(ret);
        let lib = rewire(genDir+'tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("type is undefined") 
        }
    });

    it('test gen/extend/build_gn generateGN', function () {
        let ret = generateGN('test/unittest','napitest');
        let retJson = JSON.stringify(ret);  
        let lib = rewire(genDir+'tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("type is undefined")
        }
    });

    it('test gen/extend/x_napi_tool generateBase', function () {
        let ret = generateBase('test/unittest');
        let retJson = JSON.stringify(ret);
        let lib = rewire(genDir+'tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("type is undefined")
        }
    });

});
