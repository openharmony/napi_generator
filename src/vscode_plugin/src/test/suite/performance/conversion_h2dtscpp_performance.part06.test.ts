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
  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `string[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0016', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0016', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0016 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `string[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0017', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0017', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0017 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `string[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0018', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0018', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0018 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `boolean[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0019', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0019', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0019 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `boolean[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0020', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0020', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0020 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `boolean[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0021', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0021', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0021 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `boolean[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0022', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0022', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0022 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `boolean[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0023', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0023', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0023 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `any`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0024', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0024', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0024 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `any`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0025', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0025', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0025 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `any`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0026', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0026', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0026 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `object`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0027', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0027', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0027 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `object`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0028', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0028', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0028 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `object`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0029', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0029', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0029 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `number[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0030', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0030', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0030 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `number[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0031', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0031', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0031 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `number[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0032', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0032', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0032 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `number[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0033', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0033', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0033 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `number[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0034', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0034', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0034 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `string[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0035', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0035', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0035 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `string[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0036', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0036', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0036 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `string[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0037', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0037', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0037 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `string[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0038', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0038', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0038 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `string[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0039', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0039', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0039 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `boolean[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0040', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0040', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0040 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `boolean[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0041', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0041', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0041 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `boolean[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0042', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0042', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0042 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `boolean[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0043', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0043', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0043 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `object`、参数 `boolean[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0044', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0044', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0044 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `any`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0045', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0045', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0045 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0045 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `any`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0046', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0046', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0046 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `any`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0047', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0047', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0047 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0047 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `any`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0048', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0048', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0048 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `any`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0049', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0049', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0049 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0049 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `object`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0050', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0050', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0050 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0050 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `object`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0051', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0051', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0051 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0051 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `object`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0052', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0052', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0052 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0052 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `object`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0053', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0053', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0053 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `object`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0054', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0054', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0054 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `number[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0055', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0055', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0055 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `number[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0056', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0056', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0056 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `number[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0057', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0057', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0057 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `number[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0058', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0058', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0058 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `number[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0059', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0059', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'number[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0059 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `string[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0060', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0060', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0060 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0060 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `string[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0061', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0061', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0061 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `string[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0062', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0062', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0062 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `string[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0063', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0063', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0063 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `string[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0064', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0064', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'string[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<std::string>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0064 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `boolean[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0065', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0065', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0065 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `boolean[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0066', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0066', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0066 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `boolean[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0067', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0067', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'double');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0067 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `boolean[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0068', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0068', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::string');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0068 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `number`、参数 `boolean[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0069', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0069', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(cr, 'bool');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0069 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `any`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0070', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0070', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'any', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'any', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0070 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `string`、参数 `any`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0071', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0071', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'object', parameters: [{ type: 'any', name: 'p', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'object', parameters: [{ type: 'any', name: 'gp', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0071 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0071 执行异常: ${String(err)}`);
    }
  });

});
