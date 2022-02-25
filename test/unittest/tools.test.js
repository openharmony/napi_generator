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
const { analyzeFile } = require(genDir+"analyze");
const { readFile, writeFile } = require(genDir+"tools/FileRW");
const { getArrayType } = require(genDir+"tools/common");
const { search,match,removeReg,getReg,getFileInPath } = require(genDir+"tools/re");
const { getPathInPath,pathJoin,replaceAll,all } = require(genDir+"tools/re");
const { checkOutBody,removeExplains} = require(genDir+"tools/tool");
const { removeEmptyLine,print} = require(genDir+"tools/tool");
const assert = require("assert");
const rewire = require("rewire");

function partOfFirstTest(){
    it('test gen/tools/re print', function () {
        // 测试内部方法
        let lib = rewire(genDir+'tools/re.js');
        let print = lib.__get__("print");
        print("re test print");
    });

    it('test gen/tools/re removeReg', function () {
        let ret = removeReg('export default napitest;','[0, 24]');
        assert.strictEqual(JSON.stringify(ret), `"export default napitest;"`);
    });
  
    it('test gen/tools/re getReg', function () {
        assert.strictEqual(JSON.stringify(getReg('name: string','[0, 4]')), `""`);
    });

    it('test gen/tools/re getFileInPath', function () {
        let ret = getFileInPath('Z:\\napi_generator-master\\src\\test\\@ohos.xxx.d.ts');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"Z:\\\\napi_generator-master\\\\src\\\\test\\\\@ohos.xxx.d.ts"`);
    });

    it('test gen/tools/re getPathInPath', function () {
        let ret = getPathInPath('Z:\\napi_generator-master\\src\\test\\@ohos.xxx.d.ts');
        assert.strictEqual(JSON.stringify(ret), `""`);
    });

    it('test gen/tools/re pathJoin', function () {
        assert.strictEqual(JSON.stringify(pathJoin('a')), `"a"`);
    });

    it('test gen/tools/re replaceAll', function () {
        let ret = replaceAll('\n *//([a-zA-Z .]+)\n','\\.','\\.');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `"\\n *//([a-zA-Z \\\\.]+)\\n"`);
    });

    it('test gen/tools/re all', function () {
        let ret = all('\\.');
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, `{}`);
    });
}

function partOfSecondTest(){
    it('test gen/tools/common getArrayType', function () {
        let ret = getArrayType('Array<NUMBER_TYPE_3>');
        assert.strictEqual(ret, 'NUMBER_TYPE_3');
    });

    it('test gen/tools/FileRW writeFile readFile', function () {
        let aaa = Math.random()*10000
        let content="时间 = %^(^*%*&^*"+aaa;
        writeFile("test/unittest/testrw.txt",content);
        let ret = readFile("test/unittest/testrw.txt")
        assert.strictEqual(ret, content);
    });

    it('test gen/tools/tool print', function () {
        // 测试内部方法
        let lib = rewire(genDir+'tools/tool.js');
        let print = lib.__get__("print");
        print("tool test print");
    });

}

describe('Tools', function () {
    var correctResult;
    before(function(){
        let data=readFile("test/unittest/result.json")
        if(data){
            correctResult=JSON.parse(data);
        }
    });

    it('test gen/tools/re search', function () {
        let ret = search(' *\n*',correctResult['toolsParam']['analyzeFileParam']);
        assert.strictEqual(JSON.stringify(ret), `{"regs":[[0,0]]}`);
    });

    it('test gen/tools/re match', function () {
        param = correctResult['toolsParam']['match']
        let ret = match('(export )*type ([a-zA-Z]+) = ([()a-zA-Z :=>,"| ]+);',param);
        assert.strictEqual(JSON.stringify(ret), `null`);
    });

    partOfFirstTest();

    partOfSecondTest();

    it('test gen/tools/tool removeExplains', function () {
        param = correctResult['toolsParam']['removeExplains']
        stringParm = JSON.stringify(param)
        let ret = removeExplains(stringParm);
        let retJson = JSON.stringify(ret)
        assert.strictEqual(retJson, correctResult['tools']['removeExplains']);
    });

    it('test gen/tools/tool removeEmptyLine', function () {
        param = correctResult['toolsParam']['removeEmptyLine']
        stringParm = JSON.stringify(param)

        let retJson = JSON.stringify(removeEmptyLine(stringParm))
        assert.strictEqual(retJson, correctResult['tools']['removeEmptyLine']);
    });

    it('test gen/tools/tool replaceAll', function () {
        param = correctResult['toolsParam']['replaceAll']
        let ret = replaceAll(JSON.stringify(param),'[funcName]','if_direct');
        assert.strictEqual(JSON.stringify(ret), correctResult['tools']['replaceAll']);
    });

    it('test gen/tools/tool checkOutBody', function () {
        param = correctResult['toolsParam']['checkOutBody']
        let ret = checkOutBody(JSON.stringify(param),27,null,true);
        assert.strictEqual(JSON.stringify(ret), correctResult['tools']['checkOutBody']);
    });

});
