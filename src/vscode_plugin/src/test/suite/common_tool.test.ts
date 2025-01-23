import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tools from '../../common/tool'
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
});
