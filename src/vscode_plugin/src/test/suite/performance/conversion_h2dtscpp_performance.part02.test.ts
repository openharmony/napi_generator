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
  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `boolean[]`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0064', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0064',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0064 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `Array<boolean>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0065', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0065',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0065 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `Map<string,boolean>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0066', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0066',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0066 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `Map<number,boolean>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0067', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0067',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0067 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `Set<boolean>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0068', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0068',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0068 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `Callback<boolean>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0069', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0069',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0069 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `string`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0070', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0070',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0070 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `string[]`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0072', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0072',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0072 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `Array<string>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0073', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0073',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0073 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `Map<string,string>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0074', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0074',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0074 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `Map<number,string>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0075', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0075',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0075 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `Set<string>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0076', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0076',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0076 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `Callback<string>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0077', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0077',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0077 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean[]`、返回 `(p0:string,p1:number)=>boolean`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0078', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0078',
          alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0078 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `number`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0079', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0079',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'double');
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0079 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `void`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0080', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0080',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0080 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `number[]`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0081', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0081',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0081 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `Array<number>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0082', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0082',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0082 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0082 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0083', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0083',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0083 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `Map<number,number>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0084', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0084',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0084 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0084 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `Set<number>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0085', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0085',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0085 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `Callback<number>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0086', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0086',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0086 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0086 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<number>`、返回 `(p0:number)=>void`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0087', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0087',
          alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<double>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0087 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0087 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `boolean`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0088', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0088',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0088 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0088 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `boolean[]`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0090', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0090',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0090 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0090 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `Array<boolean>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0091', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0091',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0091 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0091 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `Map<string,boolean>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0092', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0092',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0092 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0092 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `Map<number,boolean>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0093', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0093',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0093 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0093 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `Set<boolean>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0094', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0094',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0094 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0094 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<string>`、返回 `Callback<boolean>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0095', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0095',
          alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<std::string>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0095 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0095 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `string`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0096', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0096',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0096 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0096 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `string[]`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0098', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0098',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0098 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0098 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `Array<string>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0099', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0099',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0099 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0099 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `Map<string,string>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0100', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0100',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0100 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0100 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `Map<number,string>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0101', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0101',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0101 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0101 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `Set<string>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0102', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0102',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0102 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0102 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `Callback<string>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0103', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0103',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0103 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0103 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Array<boolean>`、返回 `(p0:string,p1:number)=>boolean`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0104', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0104',
          alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::vector<bool>');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0104 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0104 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0105', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0105',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::map<std::string, double>');
      assert.strictEqual(cr, 'double');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0105 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0105 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `void`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0106', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0106',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::map<std::string, double>');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0106 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0106 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `number[]`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0107', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0107',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::map<std::string, double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0107 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0107 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `Array<number>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0108', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0108',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
        types: []
      };
      let cv = '';
      let cr = '';
      let cp = '';
      let gr = '';
      let gp = '';
      const localLoop = 3;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          const converted = transParseObj(parseObj);
          cv = converted.classes[0].variableList[0].type;
          cr = converted.classes[0].functionList[0].returns;
          cp = converted.classes[0].functionList[0].parameters[0].type;
          gr = converted.funcs[0].returns;
          gp = converted.funcs[0].parameters[0].type;
        }
      });
      assert.strictEqual(cv, 'std::map<std::string, double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0108 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0108 执行异常: ${String(err)}`);
    }
  });

});
