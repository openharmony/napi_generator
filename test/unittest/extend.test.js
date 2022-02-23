const { generateGYP } = require("../gen/extend/binding_gyp");
const { generateGN } = require("../gen/extend/build_gn");
const { generateBase } = require("../gen/extend/x_napi_tool");
const rewire = require("rewire");
require("should");

describe('Extend', function () {
    
    it('test gen/extend/binding_gyp generateGYP', function () {
        let ret = generateGYP('../src/test','napitest');
        let retJson = JSON.stringify(ret);
        let lib = rewire('../gen/tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("type is undefined")
        }
    });

    it('test gen/extend/build_gn generateGN', function () {
        let ret = generateGN('../src/test','napitest');
        let retJson = JSON.stringify(ret);
        let lib = rewire('../gen/tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("type is undefined")
        }
    });

    it('test gen/extend/x_napi_tool generateBase', function () {
        let ret = generateBase('../src/test');
        let retJson = JSON.stringify(ret);
        let lib = rewire('../gen/tools/re.js');
        let print = lib.__get__("print");
        if(typeof(retJson)=="undefined"){
            print("type is undefined")
        }
    });

});