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
  test('h2dtscpp_trans_parseobj_unique_0002', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0002',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'boolean[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'boolean[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0002 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `number[]`、参数 `Array<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0003', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0003',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'Array<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'Array<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0003 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `Array<number>`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0004', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0004',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0004 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `Map<string,number>`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0005', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0005',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0005 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `Map<number,number>`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0006', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0006',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0006 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `Set<number>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0007', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0007',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0007 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `Callback<number>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0008', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0008',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0008 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number`、返回 `(p0:number)=>void`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0009', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0009',
          alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'double');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0009 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `boolean`、参数 `boolean[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0010', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0010',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'boolean[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0010 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `boolean[]`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0012', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0012',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0012 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `Array<boolean>`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0013', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0013',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0013 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `Map<string,boolean>`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0014', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0014',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0014 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `Map<number,boolean>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0015', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0015',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0015 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `Set<boolean>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0016', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0016',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0016 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string`、返回 `Callback<boolean>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0017', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0017',
          alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::string');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0017 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `string`、参数 `boolean[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0018', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0018',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'boolean[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'boolean[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0018 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `string[]`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0020', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0020',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0020 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `Array<string>`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0021', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0021',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0021 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `Map<string,string>`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0022', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0022',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0022 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `Map<number,string>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0023', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0023',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0023 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `Set<string>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0024', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0024',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0024 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `Callback<string>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0025', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0025',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0025 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `boolean`、返回 `(p0:string,p1:number)=>boolean`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0026', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0026',
          alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'bool');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0026 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `number`、参数 `boolean[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0027', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0027',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'boolean[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'boolean[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'double');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0027 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `void`、参数 `Array<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0028', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0028',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'Array<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'Array<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0028 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `number[]`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0029', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0029',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0029 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `Array<number>`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0030', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0030',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0030 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `Map<string,number>`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0031', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0031',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0031 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `Map<number,number>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0032', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0032',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0032 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `Set<number>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0033', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0033',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0033 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `Callback<number>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0034', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0034',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0034 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `void`、返回 `(p0:number)=>void`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0035', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0035',
          alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'void');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0035 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `number`、参数 `Array<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0053', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0053',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'Array<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'Array<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::vector<bool>');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0053 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `void`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0054', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0054',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0054 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `number[]`、参数 `Map<number,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0055', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0055',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::map<double, bool>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0055 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `Array<number>`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0056', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0056',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0056 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `Map<string,number>`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0057', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0057',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0057 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `Map<number,number>`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0058', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0058',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0058 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `Set<number>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0059', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0059',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0059 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `number[]`、返回 `Callback<number>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0060', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0060',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0060 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0060 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0061', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0061',
          alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0061 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `string[]`、返回 `boolean`、参数 `Map<string,boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0062', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0062',
          alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::map<std::string, bool>');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0062 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0062 执行异常: ${String(err)}`);
    }
  });

});
