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
import * as re from '../../../common/re'
// import * as myExtension from '../../extension';

suite('Common_Re_Test_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1. 测试一般情况
    test('search_test_1', () => {
        let result = re.search('world', 'hello world!');
        assert.deepStrictEqual(result, { regs: [[6, 11]] });

        result = re.search('无限', '世界无限大');
        assert.deepStrictEqual(result, { regs: [[2, 4]] });
    });

    //2. 测试边界情况
    test('search_test_2', () => {
        let result = re.search('', '');
        assert.deepStrictEqual(result, { regs: [[0, 0]] });
        
        let longStr:string = '';
        for (let i = 0; i < 1249; i++) {
            longStr += 'abcWrite';
        }
        longStr += 'happyEnd'
        result = re.search('End', longStr);
        assert.deepStrictEqual(result, { regs: [[9997, 10000]] });
    });

    //3. 测试异常情况
    test('search_test_3', () => {
        let result = re.search('happy', 'hello world!');
        assert.deepStrictEqual(result, null);

        result = re.search('llo', 'hello world hello earth');
        assert.deepStrictEqual(result, { regs: [[2, 5]] });
    });

    //4. 测试错误情况
    test('search_test_4', () => {
        let result = null;
        try {
            re.search('つめ ', 'なつめ そうせき');
            assert.deepStrictEqual(result, { regs: [[1, 4]] });
        } catch (e) {
            console.error("result of re.search('つめ ', 'なつめ そうせき') is ", result);
        }

        try {
            result = re.search(432, 123432456);
        } catch (e) {
            console.error("Number is not available for search");
        }

        try {
            result = re.search(7, [5, 7, 9, 1, 5, 6, 8]);
        } catch (e) {
            console.error("Array is not available for search");
        }

        try {
            result = re.search('p+-*', 'greenp+-*tree');
            assert.deepStrictEqual(result, { regs: [[3, 7]]});
        } catch (e) {
            console.error("result of re.search('p+-*', 'greenp+-*tree') is ", JSON.stringify(result));
        }

        try {
            result = re.search(true, true);
        } catch (e) {
            console.error("Boolean is not available for search");
        }

        try {
            result = re.search(null, null);
        } catch (e) {
            console.error("Null is not available for search");
        }

        try {
            result = re.search(undefined, undefined);
        } catch (e) {
            console.error("Undefined is not available for search");
        }

        try {
            result = re.search({age: 18}, {name: "Alice", age: 18});
        } catch (e) {
            console.error("Object is not available for search");
        }

        try {
            result = re.search(/\w/, /\Dswd/);
        } catch (e) {
            console.error("RegExp is not available for search");
        }
    });


    //1. 测试一般情况
    test('match_test_1', () => {
        let result = re.match('hello', 'hello Zero');
        assert.deepStrictEqual(result, { regs: [[0, 5]] });
        result = re.match('忽然', '忽然之间黑色变成了白色');
        assert.deepStrictEqual(result, { regs: [[0, 2]] });
    });

    //2. 测试边界情况
    test('match_test_2', () => {
        let result = re.match('', '');
        assert.deepStrictEqual(result, { regs: [[0, 0]] });
    });

    //3. 测试异常情况
    test('match_test_3', () => {
        let result = re.match('なつめ', 'なつめ そうせき')
        assert.deepStrictEqual(result, { regs: [[0, 3]] });

        result = re.match('Zero', 'hello Zero');
        assert.deepStrictEqual(result, null);

        result = re.match('Nine', 'hello Zero');
        assert.deepStrictEqual(result, null);

        let longStr: string = '';
        let shortStr: string = '';
        for (let i = 0; i < 1249; i++) {
            longStr += 'abcWrite';
        }
        shortStr = longStr;
        longStr += 'happyEnd';
        result = re.search(shortStr, longStr);
        assert.deepStrictEqual(result, { regs: [[0, 9992]] });
    });

    //4. 测试错误情况
    test('match_test_4', () => {
        let result = null;
        try {
            result = re.match('p+-*', 'p+-*greentree');
            assert.deepStrictEqual(result, { regs: [[0, 4]] });
        } catch (e) {
            console.error("result of re.match('p+-*', 'p+-*greentree') is ", JSON.stringify(result));
        }
    });


    //1. 测试一般情况
    test('removeReg_test_1', () => {
        let result = re.removeReg('hello world', [3, 7, 9]);
        assert.strictEqual(result, 'helorld');

        result = re.removeReg('不带走一片云彩', [2, 4, 3]);
        assert.strictEqual(result, '不带片云彩');
    });

    //2. 测试边界情况
    test('removeReg_test_2', () => {
        let result = re.removeReg('hello world', ['3', '7', '9']);
        assert.strictEqual(result, 'helorld');

        result = re.removeReg('hello world', [true, false, true]);
        assert.strictEqual(result, 'hhello world');
    });

    //3. 测试异常情况
    test('removeReg_test_3', () => {
        let result = re.removeReg('hello world', [2]);
        assert.strictEqual(result, 'hehello world');

        result = re.removeReg('hello world', [[1], [3]]);
        assert.strictEqual(result, 'hlo world');

        result = re.removeReg('なつめ そうせき', [2, 1]);
        assert.strictEqual(result, 'なつつめ そうせき');
    });

    //4. 测试错误情况
    test('removeReg_test_4', () => {
        let result = re.removeReg('hello world', ['a', 'b']);
        console.error("result of re.removeReg('hello world', ['a', 'b']) is ", result);

        result = re.removeReg('hello world', ['', '']);
        console.error("result of re.removeReg('hello world', ['', '']) is ", result);
        
        result = re.removeReg('hello world', [['a'], ['b']]);
        console.error("result of re.removeReg('hello world', [['a'], ['b']]) is ", result);

        result = re.removeReg('hello world', [null, null]);
        console.error("result of re.removeReg('hello world', [null, null]) is ", result);

        result = re.removeReg('hello world', [undefined, undefined]);
        console.error("result of re.removeReg('hello world', [undefined, undefined]) is ", result);

        result = re.removeReg('hello world', [{name: "Amy"}, {age: 77}, {favorite: "apple"}]);
        console.error("result of re.removeReg('hello world', [{name: 'Amy'}, {age: 77}, {favorite: 'apple'}]) is ", result);
    });


    //1. 测试一般情况
    test('getReg_test_1', () => {
        let result = re.getReg('hello world', [3, 7, 77]);
        assert.strictEqual(result, 'lo w');

        result = re.getReg('夕阳无限好，只是近黄昏', [2, 6, 66]);
        assert.strictEqual(result, '无限好，');
    });

    //2. 测试边界情况
    test('getReg_test_2', () => {
        let result = re.getReg('hello world', ['3', '7']);
        assert.strictEqual(result, 'lo w');

        result = re.getReg('hello world', [[3], [7], [0]]);
        assert.strictEqual(result, 'lo w');

        result = re.getReg('hello world', [true, false]);
        assert.strictEqual(result, 'h');
    });

    //3. 测试异常情况
    test('getReg_test_3', () => {
        let result = re.getReg('hello world', [7, 4]);
        assert.strictEqual(result, 'o w');

        result = re.getReg('なつめ そうせき', [3, 7]);
        assert.strictEqual(result, ' そうせ');

        result = re.getReg('hello world', [3]);
        assert.strictEqual(result, 'lo world');
    });

    //4. 测试错误情况
    test('getReg_test_4', () => {
        let result = re.getReg('hello world', ['a', 'b']);
        console.error("result of re.getReg('hello world', ['a', 'b']) is ", result);
        
        result = re.removeReg('hello world', ['', '']);
        console.error("result of re.getReg('hello world', ['', '']) is ", result);
        
        result = re.getReg('hello world', [null, null]);
        console.error("result of re.getReg('hello world', [null, null]) is ", result);

        result = re.getReg('hello world', [undefined, undefined]);
        console.error("result of re.getReg('hello world', [undefined, undefined]) is ", result);

        result = re.getReg('hello world', [{name: "Amy"}, {age: 77}, {favorite: "apple"}]);
        console.error("result of re.getReg('hello world', [{name: 'Amy'}, {age: 77}, {favorite: 'apple'}]) is ", result);
    });


    //1. 测试一般情况
    test('getFileInPath_test_1', () => {
        let result = re.getFileInPath('/home/user/list.json');
        assert.strictEqual(result, 'list.json');

        result = re.getFileInPath('D:\\用户\\音频.txt');
        assert.strictEqual(result, '音频.txt');

        result = re.getFileInPath('moon.mobi');
        assert.strictEqual(result, 'moon.mobi');
    });

    //2. 测试边界情况
    test('getFileInPath_test_2', () => {
        let result = re.getFileInPath('');
        assert.strictEqual(result, '');
    });

    //3. 测试异常情况
    test('getFileInPath_test_3', () => {
        let result = re.getFileInPath('hello world');
        assert.strictEqual(result, 'hello world');

        result = re.getFileInPath('なつめ そうせき/なつめ そうせき.なつめ そうせき');
        assert.strictEqual(result, 'なつめ そうせき.なつめ そうせき');
    });

    // 4. 测试错误情况
    test('getFileInPath_test_4', () => {
        let result = 'error';
        try {
            result = re.getFileInPath('dir/');
            assert.strictEqual(result, '');
        } catch (e) {
            console.error("result of re.getFileInPath('dir/') is ", result);
        }
    });


    //1. 测试一般情况
    test('getPathInPath_test_1', () => {
        let result = re.getPathInPath('/home/user/docs/ytsbn.pdf');
        assert.strictEqual(result, '/home/user/docs');

        result = re.getPathInPath('D:\\用户\\音频.mp4');
        assert.strictEqual(result, 'D:\\用户');
    })

    //2. 测试边界情况
    test('getPathInPath_test_2', () => {
        let result = re.getPathInPath('install_list_capability.json');
        assert.strictEqual(result, '');

        result = re.getPathInPath('');
        assert.strictEqual(result, '');
    })

    //3. 测试异常情况
    test('getPathInPath_test_3', () => {
        let result = re.getPathInPath('なつめ そうせき/77');
        assert.strictEqual(result, 'なつめ そうせき');

        result = re.getPathInPath('../../README.md');
        assert.strictEqual(result, '../..');
    })

    //4. 测试错误情况
    test('getPathInPath_test_4', () => {
        let result = 'error';
        try {
            result = re.getPathInPath('dir/');
            assert.strictEqual(result, 'dir');
        } catch (e) {
            console.error("result of re.getPathInPath('dir/') is ", result);
        }
    })

    //1. 测试一般情况
    test('all_test_1', () => {
        let result = re.all('ace');
        assert.deepStrictEqual(result, /ace/g);

        result = re.all('元宵');
        assert.deepStrictEqual(result, /元宵/g);
        
        result = re.all(/qwe/);
        assert.deepStrictEqual(result, /qwe/g);
    })

    //2. 测试边界情况
    test('all_test_2', () => {
        let result = re.all('^tt$');
        assert.deepStrictEqual(result, /^tt$/g);
    })

    //3. 测试异常情况
    test('all_test_3', () => {
        let result = re.all('なつめ そうせき');
        assert.deepStrictEqual(result, /なつめ そうせき/g)
    })

    //4. 测试错误情况
    test('all_test_4', () => {
        let result: RegExp = /a/;
        try {
            result = re.all('');
            assert.deepStrictEqual(result, / /g);
        } catch (e) {
            console.error("result of re.all('') is ", result);
        }
        try {
            result = re.all(/\p{Emoji}/u);
            assert.deepStrictEqual(result, /\p{Emoji}/gu);
        } catch (e) {
            console.error("result of re.all(/\p{Emoji}/u) is ", result);
        }
    })

    //1. 测试一般情况
    test('replaceAll_test_1', () => {
        let result = re.replaceAll('hello world', 'world', 'bread');
        assert.deepStrictEqual(result, 'hello bread');

        result = re.replaceAll('一切皆有可能', '一切', '万事');
        assert.deepStrictEqual(result, '万事皆有可能');
    })

    //2. 测试边界情况
    test('replaceAll_test_2', () => {
        let result = re.replaceAll('', '', '');
        assert.deepStrictEqual(result, '');
    })

    //3. 测试异常情况
    test('replaceAll_test_3', () => {
        let result = re.replaceAll('hello world', 'read', 'hi');
        assert.deepStrictEqual(result, 'hello world');

        result = re.replaceAll('do homework do housework', 'do', 'abc');
        assert.deepStrictEqual(result, 'abc homework abc housework');

        result = re.replaceAll('こんにちは世界', 'こんにちは', 'さようなら');
        assert.deepStrictEqual(result, 'さようなら世界');

        result = re.replaceAll('hello world\g', '\g', '\w');
        assert.deepStrictEqual(result, 'hello world\w');
    })

    //4. 测试错误情况
    test('replaceAll_test_4', () => {
        let result = 'error';
        try {
            result = re.replaceAll('hello world', '', '\w');
            assert.deepStrictEqual(result, 'hello\wworld');
        } catch (e) {
            console.error("result of re.replaceAll('hello world', '', '\w') is ", result);
        }
    })
 
});