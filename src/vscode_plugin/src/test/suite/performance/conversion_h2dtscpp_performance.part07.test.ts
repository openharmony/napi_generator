/*
* Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import * as vscode from 'vscode';
import { ParseObj } from '../../../gen/datatype';
import { transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';

const TYPE_THRESHOLD_MS = 10;
const METHOD_THRESHOLD_MS = 50;
const FILE_THRESHOLD_MS = 1000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_Conversion_H2DTSCPP_Suite', function() {
  this.timeout(360000);
  vscode.window.showInformationMessage('Start h2dtscpp performance tests.');

  // 结构化转换性能：构造 ParseObj 后执行 transParseObj，输入类型组合唯一。
  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `number`、参数 `object`）与性能。


  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `void`、参数 `boolean[]`）与性能。
  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `any`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0072', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0072', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0072 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `any`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0073', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0073', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0073 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `any`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0074', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0074', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0074 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `object`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0075', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0075', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'object', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'object', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0075 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `object`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0076', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0076', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'object', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'object', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0076 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `object`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0077', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0077', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'object', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'object', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0077 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `object`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0078', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0078', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'object', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'object', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0078 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `object`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0079', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0079', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'object', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'object', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0079 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `number[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0080', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0080', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = ''; let cp = ''; let cr = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          cr = converted.classes[0].functionList[0].returns;
        }
      });
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0080 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0080 执行异常: ${String(err)}`);
    }
  });

});
