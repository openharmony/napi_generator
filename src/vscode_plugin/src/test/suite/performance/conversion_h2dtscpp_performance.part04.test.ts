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
  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `Callback<string>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0155', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0155',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, bool>');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0155 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0155 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `(p0:string,p1:number)=>boolean`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0156', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0156',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, bool>');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0156 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0156 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `number`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0157', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0157',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'double');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0157 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0157 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `void`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0158', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0158',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0158 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0158 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `number[]`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0159', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0159',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0159 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0159 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `Array<number>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0160', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0160',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0160 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0160 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `Map<string,number>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0161', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0161',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0161 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0161 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `Map<number,number>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0162', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0162',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0162 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0162 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `Set<number>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0163', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0163',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0163 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0163 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<number>`、返回 `Callback<number>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0164', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0164',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0164 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0164 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0165', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0165',
          alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<double>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0165 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0165 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `boolean`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0166', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0166',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0166 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0166 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `boolean[]`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0168', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0168',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0168 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0168 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `Array<boolean>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0169', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0169',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0169 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0169 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `Map<string,boolean>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0170', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0170',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0170 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0170 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `Map<number,boolean>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0171', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0171',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0171 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0171 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `Set<boolean>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0172', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0172',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0172 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0172 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<string>`、返回 `Callback<boolean>`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0173', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0173',
          alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<std::string>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0173 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0173 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `string`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0174', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0174',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0174 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0174 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `string[]`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0176', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0176',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0176 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0176 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `Array<string>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0177', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0177',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0177 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0177 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `Map<string,string>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0178', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0178',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0178 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0178 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `Map<number,string>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0179', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0179',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0179 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0179 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `Set<string>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0180', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0180',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0180 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0180 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `Callback<string>`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0181', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0181',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0181 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0181 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Set<boolean>`、返回 `(p0:string,p1:number)=>boolean`、参数 `(p0:number)=>void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0182', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0182',
          alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::set<bool>');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0182 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0182 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `number`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0183', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0183',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'double');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0183 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0183 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `void`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0184', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0184',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0184 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0184 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `number[]`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0185', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0185',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0185 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0185 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `Array<number>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0186', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0186',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0186 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0186 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `Map<string,number>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0187', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0187',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0187 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0187 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `Map<number,number>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0188', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0188',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0188 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0188 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `Set<number>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0189', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0189',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0189 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0189 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<number>`、返回 `Callback<number>`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0190', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0190',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0190 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0190 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0191', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0191',
          alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(double)>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0191 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0191 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `boolean`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0192', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0192',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0192 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0192 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `boolean[]`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0194', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0194',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0194 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0194 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `Array<boolean>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0195', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0195',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0195 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0195 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `Map<string,boolean>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0196', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0196',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0196 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0196 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `Map<number,boolean>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0197', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0197',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0197 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0197 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `Set<boolean>`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0198', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0198',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0198 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0198 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<string>`、返回 `Callback<boolean>`、参数 `(p0:number)=>void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0199', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0199',
          alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(std::string)>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0199 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0199 执行异常: ${String(err)}`);
    }
  });

});
