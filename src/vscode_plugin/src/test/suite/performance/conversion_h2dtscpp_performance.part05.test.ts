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
  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `string`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0200', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0200',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::string');
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'std::string');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0200 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0200 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `string[]`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0202', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0202',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'string[]', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0202 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0202 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `Array<string>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0203', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0203',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<string>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::vector<std::string>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::vector<std::string>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0203 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0203 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `Map<string,string>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0204', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0204',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,string>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::map<std::string, std::string>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::map<std::string, std::string>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0204 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0204 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `Map<number,string>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0205', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0205',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,string>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::map<double, std::string>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::map<double, std::string>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0205 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0205 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_trans_parseobj_unique_0206', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0206',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<string>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::set<std::string>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::set<std::string>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0206 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0206 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `Callback<string>`、参数 `(p0:number)=>void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0207', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0207',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>', parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<string>', parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::function<void(std::string)>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::function<void(std::string)>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0207 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0207 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `Callback<boolean>`、返回 `(p0:string,p1:number)=>boolean`、参数 `string`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0208', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0208',
          alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'string', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:string,p1:number)=>boolean', parameters: [{ type: 'string', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<void(bool)>');
      assert.strictEqual(cr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cp, 'std::string');
      assert.strictEqual(gr, 'std::function<bool(std::string, double)>');
      assert.strictEqual(gp, 'std::string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0208 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0208 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `number`、参数 `void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0209', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0209',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number', parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number', parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'void');
      assert.strictEqual(gr, 'double');
      assert.strictEqual(gp, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0209 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0209 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `void`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0210', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0210',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'void', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'void', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'void');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0210 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0210 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `number[]`、参数 `Array<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0211', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0211',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]', parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'number[]', parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0211 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0211 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `Array<number>`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0212', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0212',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<number>', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::vector<double>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0212 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0212 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `Map<string,number>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0213', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0213',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,number>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::map<std::string, double>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0213 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0213 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `Map<number,number>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0214', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0214',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,number>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::map<double, double>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0214 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0214 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `Set<number>`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0215', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0215',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<number>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::set<double>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0215 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0215 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `Callback<number>`、参数 `(p0:number)=>void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0216', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0216',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>', parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<number>', parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0216 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0216 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:number)=>void`、返回 `(p0:number)=>void`、参数 `string`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0217', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0217',
          alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void', parameters: [{ type: 'string', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: '(p0:number)=>void', parameters: [{ type: 'string', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cp, 'std::string');
      assert.strictEqual(gr, 'std::function<void(double)>');
      assert.strictEqual(gp, 'std::string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0217 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0217 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `boolean`、参数 `number[]`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0218', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0218',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean', parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean', parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'bool');
      assert.strictEqual(cp, 'std::vector<double>');
      assert.strictEqual(gr, 'bool');
      assert.strictEqual(gp, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0218 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0218 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `boolean[]`、参数 `Map<string,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0220', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0220',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]', parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'boolean[]', parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::map<std::string, double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0220 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0220 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `Array<boolean>`、参数 `Map<number,number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0221', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0221',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>', parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Array<boolean>', parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'std::vector<bool>');
      assert.strictEqual(cp, 'std::map<double, double>');
      assert.strictEqual(gr, 'std::vector<bool>');
      assert.strictEqual(gp, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0221 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0221 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `Map<string,boolean>`、参数 `Set<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0222', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0222',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>', parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<string,boolean>', parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'std::map<std::string, bool>');
      assert.strictEqual(cp, 'std::set<double>');
      assert.strictEqual(gr, 'std::map<std::string, bool>');
      assert.strictEqual(gp, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0222 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0222 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `Map<number,boolean>`、参数 `Callback<number>`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0223', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0223',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>', parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Map<number,boolean>', parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'std::map<double, bool>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::map<double, bool>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0223 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0223 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `Set<boolean>`、参数 `(p0:number)=>void`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0224', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0224',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>', parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Set<boolean>', parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'std::set<bool>');
      assert.strictEqual(cp, 'std::function<void(double)>');
      assert.strictEqual(gr, 'std::set<bool>');
      assert.strictEqual(gp, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0224 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0224 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp ParseObj 转换场景（字段 `(p0:string,p1:number)=>boolean`、返回 `Callback<boolean>`、参数 `string`）与性能。
  test('h2dtscpp_trans_parseobj_unique_0225', () => {
    try {
      const parseObj: ParseObj = {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'PerfClass0225',
          alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>', parameters: [{ type: 'string', name: 'param', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [{ type: 'function', name: 'globalRun', returns: 'Callback<boolean>', parameters: [{ type: 'string', name: 'gparam', arraySize: 0, arraySizeList: [] }] }],
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
      assert.strictEqual(cv, 'std::function<bool(std::string, double)>');
      assert.strictEqual(cr, 'std::function<void(bool)>');
      assert.strictEqual(cp, 'std::string');
      assert.strictEqual(gr, 'std::function<void(bool)>');
      assert.strictEqual(gp, 'std::string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_trans_parseobj_unique_0225 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dtscpp_trans_parseobj_unique_0225 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_any_object_ext_0001', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0001', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object 场景（字段 `object`、参数 `object`、返回 `any`）的转换与性能。
  test('h2dtscpp_any_object_ext_0002', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0002', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object 场景（字段 `any`、参数 `any`、返回 `any`）的转换与性能。
  test('h2dtscpp_any_object_ext_0003', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0003', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object 场景（字段 `object`、参数 `object`、返回 `object`）的转换与性能。
  test('h2dtscpp_any_object_ext_0004', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0004', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object 场景（字段 `any`、参数 `object`、返回 `any`）的转换与性能。
  test('h2dtscpp_any_object_ext_0005', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0005', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object 场景（字段 `object`、参数 `any`、返回 `any`）的转换与性能。
  test('h2dtscpp_any_object_ext_0006', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0006', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object 场景（字段 `object`、参数 `any`、返回 `object`）的转换与性能。
  test('h2dtscpp_any_object_ext_0012', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'AnyObjClass0012', alias: '',
          variableList: [{ type: 'object', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_any_object_ext_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_ext_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object parse->trans->gen 场景 `h2dtscppAnyObjChain0001` 的性能。
  test('h2dtscpp_any_object_chain_ext_0001', () => {
    try {
      let pType = ''; let rType = ''; let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('h2dtscppAnyObjChain0001.ts', 'function h2dtscppAnyObjChain0001(arg:any): object { return undefined as any; }');
          const converted = transParseObj(parseObj);
          pType = converted.funcs[0].parameters[0].type;
          rType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'h2dtscppAnyObjChain0001.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(pType, 'std::any');
      assert.strictEqual(rType, 'std::any');
      assert.ok(hOut.includes('napi_value h2dtscppAnyObjChain0001'), 'h2dtscpp_any_object_chain_ext_0001 未生成对应声明');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `h2dtscpp_any_object_chain_ext_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_chain_ext_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp any/object parse->trans->gen 场景 `h2dtscppAnyObjChain0002` 的性能。
  test('h2dtscpp_any_object_chain_ext_0002', () => {
    try {
      let pType = ''; let rType = ''; let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('h2dtscppAnyObjChain0002.ts', 'function h2dtscppAnyObjChain0002(arg:object): any { return undefined as any; }');
          const converted = transParseObj(parseObj);
          pType = converted.funcs[0].parameters[0].type;
          rType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'h2dtscppAnyObjChain0002.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(pType, 'std::any');
      assert.strictEqual(rType, 'std::any');
      assert.ok(hOut.includes('napi_value h2dtscppAnyObjChain0002'), 'h2dtscpp_any_object_chain_ext_0002 未生成对应声明');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `h2dtscpp_any_object_chain_ext_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_any_object_chain_ext_0002 执行异常: ${String(err)}`);
    }
  });

  test('h2dtscpp_expand_unique_0001', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0001', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `any`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0002', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0002', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `any`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0003', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0003', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `any`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0004', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0004', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `object`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0005', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0005', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.strictEqual(cv, 'std::any');
      assert.strictEqual(cp, 'std::any');
      assert.strictEqual(cr, 'std::any');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `object`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0006', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0006', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `object`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0007', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0007', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `object`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0008', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0008', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `number[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0009', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0009', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `number[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0010', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0010', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `number[]`、返回 `number`）的转换与性能。
  test('h2dtscpp_expand_unique_0011', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0011', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `number[]`、返回 `string`）的转换与性能。
  test('h2dtscpp_expand_unique_0012', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0012', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `number[]`、返回 `boolean`）的转换与性能。
  test('h2dtscpp_expand_unique_0013', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0013', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `string[]`、返回 `any`）的转换与性能。
  test('h2dtscpp_expand_unique_0014', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0014', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dtscpp 扩展场景（字段 `any`、参数 `string[]`、返回 `object`）的转换与性能。
  test('h2dtscpp_expand_unique_0015', () => {
    try {
      const parseObj: ParseObj = {
        enums: [], unions: [], structs: [],
        classes: [{
          name: 'ExpandClass0015', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
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
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dtscpp_expand_unique_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dtscpp_expand_unique_0015 执行异常: ${String(err)}`);
    }
  });

});
