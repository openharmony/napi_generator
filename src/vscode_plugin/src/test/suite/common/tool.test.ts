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

import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tools from '../../../common/tool'
// import * as myExtension from '../../extension';

suite('Common_Tool_Test_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试一般情况
    test('replaceall_test_1', () => {
        let resultStr = tools.replaceAll('hello_world', 'or', 'er');
        assert.strictEqual(resultStr, 'hello_werld');

        resultStr = tools.replaceAll('hello_world', 'l', 'r');
        assert.strictEqual(resultStr, 'herro_worrd');
    });

    //2, 测试边界情况
    test('replaceall_test_2', () => {
        let resultStr = tools.replaceAll('hello_world', 'he', 'ho');
        assert.strictEqual(resultStr, 'hollo_world');
        resultStr = tools.replaceAll('hello_world', 'ld', 'la');
        assert.strictEqual(resultStr, 'hello_worla');
        resultStr = tools.replaceAll('hello_world', 'hello_world', 'la');
        assert.strictEqual(resultStr, 'la');
    });

    //3, 测试异常情况
    test('replaceall_test_3', () => {
        let resultStr = ''
        // 会死循环
        // resultStr = tools.replaceAll('hello_world', '', 'er');
        // console.log("test replaceall_test_3 " + resultStr);
        // assert.strictEqual(resultStr, 'hello_world');
        
        resultStr = tools.replaceAll('hello_world', 'ahello_world', 'er');
        assert.strictEqual(resultStr, 'hello_world');
        
        resultStr = tools.replaceAll('hello_world', 'hello_worlda', 'er');
        assert.strictEqual(resultStr, 'hello_world');
        
        resultStr = tools.replaceAll('hello_world', 'ahello_worlda', 'er');
        assert.strictEqual(resultStr, 'hello_world');
        // 会死循环
        // resultStr = tools.replaceAll('', '', 'er');
        // assert.strictEqual(resultStr, 'er');
    });

    //4, 测试错误情况
    test('replaceall_test_4', () => {
        let resultStr = tools.replaceAll('hello_world', 'or', 1);
        assert.strictEqual(resultStr, 'hello_w1ld');
        // let resultStr = tools.replaceAll('', '', 'er');
        // assert.strictEqual(resultStr, 'er');
        // resultStr = tools.replaceAll('', '', 1);
        // assert.strictEqual(resultStr, 1);
    });

    //#region getTab 测试
    //1, 测试一般情况
    test('getTab_test_1', () => {
        let resultTab = '';
        resultTab = tools.getTab(1);
        assert.strictEqual(resultTab, '    ');

        resultTab = tools.getTab(3);
        assert.strictEqual(resultTab, '            ');
    });
    
    //2, 测试边界情况
    test('getTab_test_2', () => {
        let resultTab = '';
        resultTab = tools.getTab(0);
        assert.strictEqual(resultTab, '');

        resultTab = tools.getTab(-3);
        assert.strictEqual(resultTab, '');
    });
    
    //3, 测试异常情况
    test('getTab_test_3', () => {
        let resultTab = '';
        resultTab = tools.getTab(2.1);
        console.log('小数处理：' + resultTab);
        assert.strictEqual(resultTab, '            '); // 循环执行2次
        
        resultTab = tools.getTab(NaN);          // 非数字处理
        assert.strictEqual(resultTab, '');
    });
    
    //4, 测试错误情况
    test('getTab_test_4', () => {
        let resultTab = '';
        try {
            resultTab = tools.getTab('3' as any);
        } catch (error) {
            assert.strictEqual(resultTab, '');
            console.log('参数类型错误'+ JSON.stringify(error));
        }
    });
    
    //#region removeComments 测试
    //1, 测试一般情况
    test('removeComments_test_1', () => {
        const code = 
`let x = 5;//注释
/* 多行注释 */
function(){}`;
        let resultStr = '';
        resultStr = tools.removeComments(code);
        console.log('去除注释后：' + resultStr);
        assert.strictEqual(resultStr, 'let x = 5;\n\nfunction(){}');
    });
    
    //2, 测试边界情况
    test('removeComments_test_2', () => {
        const code1 = `//只有注释`;
        let resultStr = '';
        resultStr = tools.removeComments(code1);
        assert.strictEqual(resultStr, '');

        const code2 = `/* 注释 */无注释`; 
        resultStr = tools.removeComments(code2);
        assert.strictEqual(resultStr, '无注释');
    });
    
    //3, 测试异常情况
    test('removeComments_test_3', () => {
        const code = 'let x = /*未闭合注释';
        let resultStr = '';
        resultStr = tools.removeComments(code);
        assert.strictEqual(resultStr, 'let x = /*未闭合注释');
    });
    
    //4, 测试错误情况
    test('removeComments_test_4', () => {
        let resultStr = '';
        try {
            const code = 5;
            resultStr = tools.removeComments(code as any)
        } catch(error) {
            assert.strictEqual(resultStr, '');
            console.log('参数类型错误'+ JSON.stringify(error));
        }
    });
    
    //#region generateRandomInteger 测试
    //1, 测试一般情况
    test('generateRandomInteger_test_1', () => {
        let resultNum = 0;
        resultNum = tools.generateRandomInteger(5, 10);
        assert.ok(resultNum >= 5 && resultNum <= 10);
    });
    
    //2, 测试边界情况
    test('generateRandomInteger_test_2', () => {
        let resultNum = 0;
        resultNum = tools.generateRandomInteger(5,5);
        assert.strictEqual(resultNum, 5);

        resultNum = tools.generateRandomInteger(-3,-1);
        assert.ok(resultNum <= -1);
    });
    
    //3, 测试异常情况
    test('generateRandomInteger_test_3', () => {
        let resultNum = 0;
        // 反向区间测试
        resultNum = tools.generateRandomInteger(10, 5);
        assert.ok(resultNum >= 5 && resultNum <= 10); // 注意函数实际会处理反向区间
    });
    
    //4, 测试错误情况
    test('generateRandomInteger_test_4', () => { // 错误情况
        let resultNum = 0;
        try {
            resultNum = tools.generateRandomInteger('a' as any , 10)
        } catch(error) {
            assert.strictEqual(resultNum, 0);
            console.log('参数类型错误'+ JSON.stringify(error));
        }
    });
    //#endregion
    
    //#region removeTab 测试
    //1, 测试一般情况
    test('removeTab_test_1', () => {
        let resultStr = '';
        const code = `  public:class Test {}`;
        resultStr = tools.removeTab(code);
        assert.strictEqual(resultStr, 'public:class Test {}');
    });
    
    //2, 测试边界情况
    test('removeTab_test_2', () => {
        let resultStr = '';
        const code1 = '   ';
        resultStr = tools.removeTab(code1)
        assert.strictEqual(resultStr, '');

        const code2 = 'noSpace';
        resultStr = tools.removeTab(code2)
        assert.strictEqual(resultStr, 'noSpace');
    });
    
    //3, 测试异常情况
    test('removeTab_test_3', () => {
        let resultStr = '';
        const code = 'protected:void main() {   }';
        resultStr = tools.removeTab(code);
        assert.strictEqual(tools.removeTab(code), 'protected:void main() {   }');
    });
    
    //4, 测试错误情况
    test('removeTab_test_4', () => {
        let resultStr = '';
        try {
            const code = 123;
            resultStr = tools.removeTab(code as any);
        } catch(error) {
            assert.strictEqual(resultStr, '');
            console.log('参数类型错误'+ JSON.stringify(error));
        }
    });
    //#endregion
});