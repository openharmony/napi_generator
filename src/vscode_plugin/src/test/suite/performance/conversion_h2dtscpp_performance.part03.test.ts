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
  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `Map<string,number>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0109', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0109',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0109 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0109 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `Map<number,number>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0110', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0110',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0110 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0110 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `Set<number>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0111', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0111',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0111 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0111 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `Callback<number>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0112', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0112',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0112 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0112 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,number>`、返回 `(p0:number)=>void`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0113', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0113',
          alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0113 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0113 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `boolean`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0114', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0114',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0114 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0114 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `boolean[]`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0116', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0116',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0116 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0116 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `Array<boolean>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0117', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0117',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0117 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0117 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `Map<string,boolean>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0118', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0118',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0118 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0118 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `Map<number,boolean>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0119', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0119',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0119 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0119 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `Set<boolean>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0120', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0120',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0120 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0120 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,string>`、返回 `Callback<boolean>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0121', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0121',
          alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, std::string>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0121 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0121 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `string`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0122', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0122',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0122 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0122 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0124', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0124',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0124 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0124 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `Array<string>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0125', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0125',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0125 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0125 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `Map<string,string>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0126', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0126',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0126 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0126 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `Map<number,string>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0127', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0127',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0127 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0127 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `Set<string>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0128', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0128',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0128 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0128 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `Callback<string>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0129', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0129',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0129 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0129 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<string,boolean>`、返回 `(p0:string,p1:number)=>boolean`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0130', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0130',
          alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<std::string, bool>');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0130 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0130 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `number`、参数 `Set<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0131', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0131',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'double');
      assert.strictEqual(cp, 'std::set<bool>');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0131 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0131 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `void`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0132', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0132',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'void');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0132 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0132 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `number[]`、参数 `number`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0133', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0133',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'double');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0133 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0133 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `Array<number>`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0134', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0134',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::vector<double>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0134 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0134 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `Map<string,number>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0135', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0135',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::map<std::string, double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0135 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0135 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `Map<number,number>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0136', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0136',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::map<double, double>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0136 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0136 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `Set<number>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0137', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0137',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::set<double>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0137 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0137 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `Callback<number>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0138', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0138',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0138 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0138 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,number>`、返回 `(p0:number)=>void`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0139', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0139',
          alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, double>');
      assert.strictEqual(cr, 'std::function<void(double)>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0139 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0139 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `boolean`、参数 `Callback<boolean>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0140', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0140',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0140 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0140 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `boolean[]`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0142', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0142',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0142 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0142 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `Array<boolean>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0143', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0143',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0143 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0143 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `Map<string,boolean>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0144', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0144',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0144 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0144 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `Map<number,boolean>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0145', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0145',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0145 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0145 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `Set<boolean>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0146', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0146',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0146 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0146 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,string>`、返回 `Callback<boolean>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0147', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0147',
          alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::map<double, std::string>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0147 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0147 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0148', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0148',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'std::function<void(bool)>');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0148 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0148 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `string[]`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0150', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0150',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0150 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0150 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `Array<string>`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0151', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0151',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0151 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0151 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `Map<string,string>`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0152', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0152',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0152 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0152 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `Map<number,string>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0153', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0153',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0153 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0153 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Map<number,boolean>`、返回 `Set<string>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0154', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0154',
          alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0154 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0154 执行异常: ${String(err)}`);
    }
  });

});
