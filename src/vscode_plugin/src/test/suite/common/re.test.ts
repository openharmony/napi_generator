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

        result = re.search('abc', '123abc456');
        assert.deepStrictEqual(result, { regs: [[3, 6]] });
    });

    //2. 测试边界情况
    test('search_test_2', () => {
        let result = re.search('a', 'abc');
        assert.deepStrictEqual(result, { regs: [[0, 1]] });
        result = re.search('z', 'abcdefghijklmnopqrstuvwxyz');
        assert.deepStrictEqual(result, { regs: [[25, 26]] });
        result = re.search('qiop', 'qiop');
        assert.deepStrictEqual(result, { regs: [[0, 4]] });
    });

    //3. 测试异常情况
    test('search_test_3', () => {
        let result = re.search('p+-*', 'q18+61qi85op+-*90kmdplsao');
        assert.deepStrictEqual(result, { regs: [[11, 12]] });
    });

    //4. 测试错误情况
    test('search_test_4', () => {
        let result = re.search('bva', 'qiavbnop');
        assert.deepStrictEqual(result, null);

        result = re.search('earth', 123456789);
        assert.deepStrictEqual(result, null);
    });


    //1. 测试一般情况
    test('match_test_1', () => {
        let result = re.match('hello', 'hello Zero');
        assert.deepStrictEqual(result, { regs: [[0, 5]] });
        result = re.match('qiop', 'qiopifsbbrs5q');
        assert.deepStrictEqual(result, { regs: [[0, 4]] });
    });

    //2. 测试边界情况
    test('match_test_2', () => {
        let result = re.match('Zero', 'Zero');
        assert.deepStrictEqual(result, { regs: [[0, 4]] });
        result = re.match('Boi', 'Bo');
        assert.strictEqual(result, null);
        result = re.match('f', 'adf');
        assert.strictEqual(result, null);
    });

    //3. 测试异常情况
    test('match_test_3', () => {
        let result = re.match('a/', 'a/bc');
        assert.deepStrictEqual(result, { regs: [[0, 2]] });

        result = re.match('=a', '=abcdefghijklmnopqrstuvwxyzp');
        assert.deepStrictEqual(result, { regs: [[0, 2]] });
    });

    //4. 测试错误情况
    test('match_test_4', () => {
        let result = re.match('mi', 'abcdefg');
        assert.strictEqual(result, null);
    });


    //1. 测试一般情况
    test('removeReg_test_1', () => {
        let result = re.removeReg('abcdefghijk', [3, 7]);
        assert.strictEqual(result, 'abchijk');

        result = re.removeReg('AFiveRHH', [2, 4]);
        assert.strictEqual(result, 'AFeRHH');
    });

    //2. 测试边界情况
    test('removeReg_test_2', () => {
        let result = re.removeReg('hello', [2, 5]);
        assert.strictEqual(result, 'he');

        result = re.removeReg('abcdef', [3, 3]);
        assert.strictEqual(result, 'abcdef');

        result = re.removeReg('abc', [1, 3]);
        assert.strictEqual(result, 'a');
    });

    //3. 测试异常情况
    test('removeReg_test_3', () => {
        let result = re.removeReg('abcdef', [4, 2]);
        assert.strictEqual(result, 'abcdcdef');

        result = re.removeReg('test', ['2', '3']);
        assert.strictEqual(result, 'tet');

        result = re.removeReg('', [0, 0]);
        assert.strictEqual(result, '');
    });

    //4. 测试错误情况
    test('removeReg_test_4', () => {
        let result = re.removeReg('abcdefg', ['a', 'b']);
        assert.strictEqual(result, 'abcdefg');
        result = re.removeReg('yarn house', ['!', '/']);
        assert.strictEqual(result, 'yarn house');
    });


    //1. 测试一般情况
    test('getReg_test_1', () => {
        let result = re.getReg('auysblc;p[wqje', [3, 7]);
        assert.strictEqual(result, 'sblc');

        result = re.getReg('8032u5nvmlsj;', [2, 9]);
        assert.strictEqual(result, '32u5nvm');
    });

    //2. 测试边界情况
    test('getReg_test_2', () => {
        let result = re.getReg('hello Amy', [5, 9]);
        assert.strictEqual(result, ' Amy');

        result = re.getReg('ifwearegreat', [0, 3]);
        assert.strictEqual(result, 'ifw');

        result = re.getReg('abcbaby', [0, 7]);
        assert.strictEqual(result, 'abcbaby');

        result = re.getReg('abcdef', [0, 100]);
        assert.strictEqual(result, 'abcdef');
    });

    //3. 测试异常情况
    test('getReg_test_3', () => {
        let result = re.getReg('testEnglish', ['5', '9']);
        assert.strictEqual(result, 'ngli');

        result = re.getReg('starsskymoon', [7, 4]);
        assert.strictEqual(result, 'ssk');
    });

    //4. 测试错误情况
    test('getReg_test_4', () => {
        let result = re.getReg('cutecat', ['$', '(b)']);
        assert.strictEqual(result, '');
        result = re.getReg('puppy', ['i', 'f']);
        assert.strictEqual(result, '');
    });


    //1. 测试一般情况
    test('getFileInPath_test_1', () => {
        let result = re.getFileInPath('/home/user/list.json');
        assert.strictEqual(result, 'list.json');

        result = re.getFileInPath('D:\\Users\\study.txt');
        assert.strictEqual(result, 'study.txt');
    });

    //2. 测试边界情况
    test('getFileInPath_test_2', () => {
        let result = re.getFileInPath('moon.mobi');
        assert.strictEqual(result, 'moon.mobi');

        result = re.getFileInPath('/system/etc/');
        assert.strictEqual(result, 'etc');
    });

    //3. 测试异常情况
    test('getFileInPath_test_3', () => {
        let result = re.getFileInPath('');
        assert.strictEqual(result, '');
    });

    // 4. 测试错误情况
    test('getFileInPath_test_4', () => {
        let result = re.getFileInPath('mpq&*(64297light');
        assert.strictEqual(result, 'mpq&*(64297light');
        result = re.getFileInPath('air.sbu');
        assert.strictEqual(result, 'air.sbu');
        result = re.getFileInPath('oqpijvfpoq@nviowhv*nowueok.bvow.vewv');
        assert.strictEqual(result, 'oqpijvfpoq@nviowhv*nowueok.bvow.vewv');
    });


    //1. 测试一般情况
    test('getPathInPath_test_1', () => {
        let result = re.getPathInPath('/home/user/docs/ytsbn.pdf');
        assert.strictEqual(result, '/home/user/docs');

        result = re.getPathInPath('D:\\Users\\pakncla.mp4');
        assert.strictEqual(result, 'D:\\Users');

        result = re.getPathInPath('../../README.md');
        assert.strictEqual(result, '../..');

        result = re.getPathInPath('../src/utils/Log.ts');
        assert.strictEqual(result, '../src/utils');

        result = re.getPathInPath('qe/f/p/w.txt');
        assert.strictEqual(result, 'qe/f/p');
    })

    //2. 测试边界情况
    test('getPathInPath_test_2', () => {
        let result = re.getPathInPath('install_list_capability.json');
        assert.strictEqual(result, '');

        result = re.getPathInPath('/tmp/snlvp/');
        assert.strictEqual(result, '/tmp');
    })

    //3. 测试异常情况
    test('getPathInPath_test_3', () => {
        let result = re.getPathInPath('/path/hello world/full');
        assert.strictEqual(result, '/path/hello world');

        result = re.getPathInPath('/tmp/#sky*&sun/88.xml');
        assert.strictEqual(result, '/tmp/#sky*&sun');
    })

    //4. 测试错误情况
    test('getPathInPath_test_4', () => {
        let result = re.getPathInPath('');
        assert.strictEqual(result, '');

        result = re.getPathInPath('poqllr6246 gf*53+mvl[j');
        assert.strictEqual(result, '');
    })

    //1. 测试一般情况
    test('all_test_1', () => {
        let result = re.all('ace');
        assert.deepStrictEqual(result, /ace/g);
        
        result = re.all(/qwe/);
        assert.deepStrictEqual(result, /qwe/g);
    })

    //2. 测试边界情况
    test('all_test_2', () => {
        let result = re.all('');
        assert.deepStrictEqual(result, /(?:)/g);

        result = re.all('^tt$');
        assert.deepStrictEqual(result, /^tt$/g);
    })

    //3. 测试异常情况
    test('all_test_3', () => {
        let result = re.all(/abc/ig);
        assert.deepStrictEqual(result, /abc/g);

        result = re.all('元宵');
        assert.deepStrictEqual(result, /元宵/g);
    })

    //4. 测试错误情况
    test('all_test_4', () => {
        let result = re.all(/\p{Emoji}/u);
        assert.deepStrictEqual(result, /\p{Emoji}/g);
    })

    //1. 测试一般情况
    test('replaceAll_test_1', () => {
        let result = re.replaceAll('abcdefg', 'b', 'rabbit');
        assert.deepStrictEqual(result, 'arabbitcdefg');

        result = re.replaceAll('abcde*&h%fg', 'b', ' puppy ');
        assert.deepStrictEqual(result, 'a puppy cde*&h%fg');
    })

    //2. 测试边界情况
    test('replaceAll_test_2', () => {
        let result = re.replaceAll('I work', 'work', 'am happy!');
        assert.deepStrictEqual(result, 'I am happy!');

        result = re.replaceAll('I am happy!', 'I am', 'We are');
        assert.deepStrictEqual(result, 'We are happy!');
    })

    //3. 测试异常情况
    test('replaceAll_test_3', () => {
        let result = re.replaceAll('', '', '');
        assert.deepStrictEqual(result, '');

        result = re.replaceAll('do homework do housework', 'do', 'abc');
        assert.deepStrictEqual(result, 'abc homework abc housework');
    })

    //4. 测试错误情况
    test('replaceAll_test_4', () => {
        let result = re.replaceAll('clockclosecool', 'dir', 'base');
        assert.deepStrictEqual(result, 'clockclosecool');
    })
 
});