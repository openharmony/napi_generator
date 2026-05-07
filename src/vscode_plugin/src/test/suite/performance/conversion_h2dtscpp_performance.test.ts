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
import { transTskey2Ckey } from '../../../gen/gendts';
import { transCkey2Dtskey, transParseObj } from '../../../gen/gendtscpp';
import { ClassObj, ParseObj } from '../../../gen/datatype';
import { doParseTs } from '../../../parse/parsets';

const LOOP_COUNT = 1000;
const SCENE_LOOP_COUNT = 10;
const TYPE_THRESHOLD_MS = 10;
const METHOD_THRESHOLD_MS = 50;
const FILE_THRESHOLD_MS = 1000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}


function createH2dtsCppParseObj(inputType: string): ParseObj {
  const classes: ClassObj[] = [{
    name: 'PerfClass',
    alias: '',
    variableList: [{ type: inputType, name: 'value', arraySize: 0, arraySizeList: [] }],
    functionList: [{
      type: 'function',
      name: 'getValue',
      returns: inputType,
      parameters: [{ type: inputType, name: 'paramValue', arraySize: 0, arraySizeList: [] }]
    }]
  }];

  return {
    enums: [],
    unions: [],
    structs: [],
    classes,
    funcs: [{
      type: 'function',
      name: 'getGlobalValue',
      returns: inputType,
      parameters: [{ type: inputType, name: 'paramValue', arraySize: 0, arraySizeList: [] }]
    }],
    types: []
  };
}

suite('Performance_Conversion_Suite', function() {

  this.timeout(180000);
  vscode.window.showInformationMessage('Start conversion performance tests.');

  // h2dtscpp 结构化类型性能
  // 测试内容：验证 h2dtscpp_type_number 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_number', () => {
    const parseObj = createH2dtsCppParseObj('number');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'double');
    assert.strictEqual(classReturnType, 'double');
    assert.strictEqual(funcReturnType, 'double');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_string 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_string', () => {
    const parseObj = createH2dtsCppParseObj('string');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::string');
    assert.strictEqual(classReturnType, 'std::string');
    assert.strictEqual(funcReturnType, 'std::string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_boolean 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_boolean', () => {
    const parseObj = createH2dtsCppParseObj('boolean');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'bool');
    assert.strictEqual(classReturnType, 'bool');
    assert.strictEqual(funcReturnType, 'bool');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_number_array 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_number_array', () => {
    const parseObj = createH2dtsCppParseObj('number[]');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<double>');
    assert.strictEqual(classReturnType, 'std::vector<double>');
    assert.strictEqual(funcReturnType, 'std::vector<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_number_array (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_array_string 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_type_array_string', () => {
    const parseObj = createH2dtsCppParseObj('Array<string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<std::string>');
    assert.strictEqual(classReturnType, 'std::vector<std::string>');
    assert.strictEqual(funcReturnType, 'std::vector<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_array_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_map_string_number 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_map_string_number', () => {
    const parseObj = createH2dtsCppParseObj('Map<string,number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<std::string, double>');
    assert.strictEqual(classReturnType, 'std::map<std::string, double>');
    assert.strictEqual(funcReturnType, 'std::map<std::string, double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_map_string_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_map_number_string 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_map_number_string', () => {
    const parseObj = createH2dtsCppParseObj('Map<number,string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<double, std::string>');
    assert.strictEqual(classReturnType, 'std::map<double, std::string>');
    assert.strictEqual(funcReturnType, 'std::map<double, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_map_number_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_set_boolean 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_set_boolean', () => {
    const parseObj = createH2dtsCppParseObj('Set<boolean>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::set<bool>');
    assert.strictEqual(classReturnType, 'std::set<bool>');
    assert.strictEqual(funcReturnType, 'std::set<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_set_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_callback 的函数签名类型转换结果与性能阈值。
  test('h2dtscpp_type_callback', () => {
    const parseObj = createH2dtsCppParseObj('Callback<number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void(double)>');
    assert.strictEqual(classReturnType, 'std::function<void(double)>');
    assert.strictEqual(funcReturnType, 'std::function<void(double)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_type_callback (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_arrow 的函数签名类型转换结果与性能阈值。
  test('h2dtscpp_type_arrow', () => {
    const parseObj = createH2dtsCppParseObj('(a:number,b:string)=>void');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void(double, std::string)>');
    assert.strictEqual(classReturnType, 'std::function<void(double, std::string)>');
    assert.strictEqual(funcReturnType, 'std::function<void(double, std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_type_arrow (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_any 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_any', () => {
    const parseObj = createH2dtsCppParseObj('any');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::any');
    assert.strictEqual(classReturnType, 'std::any');
    assert.strictEqual(funcReturnType, 'std::any');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_any (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_map_string_boolean 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_map_string_boolean', () => {
    const parseObj = createH2dtsCppParseObj('Map<string,boolean>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<std::string, bool>');
    assert.strictEqual(classReturnType, 'std::map<std::string, bool>');
    assert.strictEqual(funcReturnType, 'std::map<std::string, bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_map_string_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_set_number 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_set_number', () => {
    const parseObj = createH2dtsCppParseObj('Set<number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::set<double>');
    assert.strictEqual(classReturnType, 'std::set<double>');
    assert.strictEqual(funcReturnType, 'std::set<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_set_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_callback_string 的函数签名类型转换结果与性能阈值。
  test('h2dtscpp_type_callback_string', () => {
    const parseObj = createH2dtsCppParseObj('Callback<string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void(std::string)>');
    assert.strictEqual(classReturnType, 'std::function<void(std::string)>');
    assert.strictEqual(funcReturnType, 'std::function<void(std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_type_callback_string (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_type_custom_passthrough 的结构化类型转换结果与性能阈值。
  test('h2dtscpp_type_custom_passthrough', () => {
    const parseObj = createH2dtsCppParseObj('CustomType');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'CustomType');
    assert.strictEqual(classReturnType, 'CustomType');
    assert.strictEqual(funcReturnType, 'CustomType');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_type_custom_passthrough (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });
  // h2dtscpp 补齐：20种基础类型
  // 测试内容：验证 h2dtscpp_base_number 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_number', () => {
    const parseObj = createH2dtsCppParseObj('number');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'double');
    assert.strictEqual(classReturnType, 'double');
    assert.strictEqual(funcReturnType, 'double');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_string 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_string', () => {
    const parseObj = createH2dtsCppParseObj('string');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::string');
    assert.strictEqual(classReturnType, 'std::string');
    assert.strictEqual(funcReturnType, 'std::string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_boolean 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_boolean', () => {
    const parseObj = createH2dtsCppParseObj('boolean');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'bool');
    assert.strictEqual(classReturnType, 'bool');
    assert.strictEqual(funcReturnType, 'bool');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_void 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_void', () => {
    const parseObj = createH2dtsCppParseObj('void');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'void');
    assert.strictEqual(classReturnType, 'void');
    assert.strictEqual(funcReturnType, 'void');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_void (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_any 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_any', () => {
    const parseObj = createH2dtsCppParseObj('any');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::any');
    assert.strictEqual(classReturnType, 'std::any');
    assert.strictEqual(funcReturnType, 'std::any');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_any (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_object 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_object', () => {
    const parseObj = createH2dtsCppParseObj('object');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::any');
    assert.strictEqual(classReturnType, 'std::any');
    assert.strictEqual(funcReturnType, 'std::any');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_object (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_callback_number 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_callback_number', () => {
    const parseObj = createH2dtsCppParseObj('Callback<number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void(double)>');
    assert.strictEqual(classReturnType, 'std::function<void(double)>');
    assert.strictEqual(funcReturnType, 'std::function<void(double)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_base_callback_number (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_callback_string 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_callback_string', () => {
    const parseObj = createH2dtsCppParseObj('Callback<string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void(std::string)>');
    assert.strictEqual(classReturnType, 'std::function<void(std::string)>');
    assert.strictEqual(funcReturnType, 'std::function<void(std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_base_callback_string (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_callback_boolean 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_callback_boolean', () => {
    const parseObj = createH2dtsCppParseObj('Callback<boolean>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void(bool)>');
    assert.strictEqual(classReturnType, 'std::function<void(bool)>');
    assert.strictEqual(funcReturnType, 'std::function<void(bool)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_base_callback_boolean (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_arrow_no_param 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_arrow_no_param', () => {
    const parseObj = createH2dtsCppParseObj('()=>void');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<void()>');
    assert.strictEqual(classReturnType, 'std::function<void()>');
    assert.strictEqual(funcReturnType, 'std::function<void()>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_base_arrow_no_param (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_arrow_bool_to_string 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_arrow_bool_to_string', () => {
    const parseObj = createH2dtsCppParseObj('(flag:boolean)=>string');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<std::string(bool)>');
    assert.strictEqual(classReturnType, 'std::function<std::string(bool)>');
    assert.strictEqual(funcReturnType, 'std::function<std::string(bool)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_base_arrow_bool_to_string (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_arrow_two_params_number_return 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_arrow_two_params_number_return', () => {
    const parseObj = createH2dtsCppParseObj('(a:number,b:string)=>number');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::function<double(double, std::string)>');
    assert.strictEqual(classReturnType, 'std::function<double(double, std::string)>');
    assert.strictEqual(funcReturnType, 'std::function<double(double, std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_base_arrow_two_params_number_return (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_map_string_number 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_map_string_number', () => {
    const parseObj = createH2dtsCppParseObj('Map<string,number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<std::string, double>');
    assert.strictEqual(classReturnType, 'std::map<std::string, double>');
    assert.strictEqual(funcReturnType, 'std::map<std::string, double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_map_string_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_map_string_string 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_map_string_string', () => {
    const parseObj = createH2dtsCppParseObj('Map<string,string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<std::string, std::string>');
    assert.strictEqual(classReturnType, 'std::map<std::string, std::string>');
    assert.strictEqual(funcReturnType, 'std::map<std::string, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_map_string_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_map_string_boolean 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_map_string_boolean', () => {
    const parseObj = createH2dtsCppParseObj('Map<string,boolean>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<std::string, bool>');
    assert.strictEqual(classReturnType, 'std::map<std::string, bool>');
    assert.strictEqual(funcReturnType, 'std::map<std::string, bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_map_string_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_map_number_number 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_map_number_number', () => {
    const parseObj = createH2dtsCppParseObj('Map<number,number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<double, double>');
    assert.strictEqual(classReturnType, 'std::map<double, double>');
    assert.strictEqual(funcReturnType, 'std::map<double, double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_map_number_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_map_number_string 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_map_number_string', () => {
    const parseObj = createH2dtsCppParseObj('Map<number,string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<double, std::string>');
    assert.strictEqual(classReturnType, 'std::map<double, std::string>');
    assert.strictEqual(funcReturnType, 'std::map<double, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_map_number_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_map_number_boolean 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_map_number_boolean', () => {
    const parseObj = createH2dtsCppParseObj('Map<number,boolean>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::map<double, bool>');
    assert.strictEqual(classReturnType, 'std::map<double, bool>');
    assert.strictEqual(funcReturnType, 'std::map<double, bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_map_number_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_set_string 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_set_string', () => {
    const parseObj = createH2dtsCppParseObj('Set<string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::set<std::string>');
    assert.strictEqual(classReturnType, 'std::set<std::string>');
    assert.strictEqual(funcReturnType, 'std::set<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_set_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_base_custom_passthrough 的基础类型转换结果与性能阈值。
  test('h2dtscpp_base_custom_passthrough', () => {
    const parseObj = createH2dtsCppParseObj('CustomType');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'CustomType');
    assert.strictEqual(classReturnType, 'CustomType');
    assert.strictEqual(funcReturnType, 'CustomType');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_base_custom_passthrough (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // h2dtscpp 补齐：20种数组/容器类型
  // 测试内容：验证 h2dtscpp_array_number_short 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_number_short', () => {
    const parseObj = createH2dtsCppParseObj('number[]');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<double>');
    assert.strictEqual(classReturnType, 'std::vector<double>');
    assert.strictEqual(funcReturnType, 'std::vector<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_number_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_string_short 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_string_short', () => {
    const parseObj = createH2dtsCppParseObj('string[]');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<std::string>');
    assert.strictEqual(classReturnType, 'std::vector<std::string>');
    assert.strictEqual(funcReturnType, 'std::vector<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_string_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_boolean_short 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_boolean_short', () => {
    const parseObj = createH2dtsCppParseObj('boolean[]');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<bool>');
    assert.strictEqual(classReturnType, 'std::vector<bool>');
    assert.strictEqual(funcReturnType, 'std::vector<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_boolean_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_number 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_number', () => {
    const parseObj = createH2dtsCppParseObj('Array<number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<double>');
    assert.strictEqual(classReturnType, 'std::vector<double>');
    assert.strictEqual(funcReturnType, 'std::vector<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_string 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_string', () => {
    const parseObj = createH2dtsCppParseObj('Array<string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<std::string>');
    assert.strictEqual(classReturnType, 'std::vector<std::string>');
    assert.strictEqual(funcReturnType, 'std::vector<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_boolean 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_boolean', () => {
    const parseObj = createH2dtsCppParseObj('Array<boolean>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<bool>');
    assert.strictEqual(classReturnType, 'std::vector<bool>');
    assert.strictEqual(funcReturnType, 'std::vector<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_nested_number 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_nested_number', () => {
    const parseObj = createH2dtsCppParseObj('Array<Array<number>>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'Array<Array<number>>');
    assert.strictEqual(classReturnType, 'Array<Array<number>>');
    assert.strictEqual(funcReturnType, 'Array<Array<number>>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_nested_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_number_2d 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_number_2d', () => {
    const parseObj = createH2dtsCppParseObj('number[][]');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'number[][]');
    assert.strictEqual(classReturnType, 'number[][]');
    assert.strictEqual(funcReturnType, 'number[][]');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_number_2d (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_nested_map 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_nested_map', () => {
    const parseObj = createH2dtsCppParseObj('Array<Map<string,number>>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'Array<Map<string,number>>');
    assert.strictEqual(classReturnType, 'Array<Map<string,number>>');
    assert.strictEqual(funcReturnType, 'Array<Map<string,number>>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_nested_map (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_nested_set 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_nested_set', () => {
    const parseObj = createH2dtsCppParseObj('Array<Set<string>>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'Array<Set<string>>');
    assert.strictEqual(classReturnType, 'Array<Set<string>>');
    assert.strictEqual(funcReturnType, 'Array<Set<string>>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_nested_set (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_readonly_array_number 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_readonly_array_number', () => {
    const parseObj = createH2dtsCppParseObj('ReadonlyArray<number>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'ReadonlyArray<number>');
    assert.strictEqual(classReturnType, 'ReadonlyArray<number>');
    assert.strictEqual(funcReturnType, 'ReadonlyArray<number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_readonly_array_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_int32array 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_int32array', () => {
    const parseObj = createH2dtsCppParseObj('Int32Array');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'Int32Array');
    assert.strictEqual(classReturnType, 'Int32Array');
    assert.strictEqual(funcReturnType, 'Int32Array');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_int32array (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_uint8array 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_uint8array', () => {
    const parseObj = createH2dtsCppParseObj('Uint8Array');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'Uint8Array');
    assert.strictEqual(classReturnType, 'Uint8Array');
    assert.strictEqual(funcReturnType, 'Uint8Array');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_uint8array (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_float32array 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_float32array', () => {
    const parseObj = createH2dtsCppParseObj('Float32Array');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'Float32Array');
    assert.strictEqual(classReturnType, 'Float32Array');
    assert.strictEqual(funcReturnType, 'Float32Array');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_float32array (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_array_buffer 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_array_buffer', () => {
    const parseObj = createH2dtsCppParseObj('ArrayBuffer');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'ArrayBuffer');
    assert.strictEqual(classReturnType, 'ArrayBuffer');
    assert.strictEqual(funcReturnType, 'ArrayBuffer');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_array_buffer (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_shared_array_buffer 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_shared_array_buffer', () => {
    const parseObj = createH2dtsCppParseObj('SharedArrayBuffer');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'SharedArrayBuffer');
    assert.strictEqual(classReturnType, 'SharedArrayBuffer');
    assert.strictEqual(funcReturnType, 'SharedArrayBuffer');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_shared_array_buffer (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_std_vector_int 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_std_vector_int', () => {
    const parseObj = createH2dtsCppParseObj('std::vector<int>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::vector<int>');
    assert.strictEqual(classReturnType, 'std::vector<int>');
    assert.strictEqual(funcReturnType, 'std::vector<int>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_std_vector_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_std_array_double_4 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_std_array_double_4', () => {
    const parseObj = createH2dtsCppParseObj('std::array<double,4>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::array<double,4>');
    assert.strictEqual(classReturnType, 'std::array<double,4>');
    assert.strictEqual(funcReturnType, 'std::array<double,4>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_std_array_double_4 (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_std_deque_string 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_std_deque_string', () => {
    const parseObj = createH2dtsCppParseObj('std::deque<string>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::deque<string>');
    assert.strictEqual(classReturnType, 'std::deque<string>');
    assert.strictEqual(funcReturnType, 'std::deque<string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_std_deque_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_array_std_list_bool 的数组/容器类型转换结果与性能阈值。
  test('h2dtscpp_array_std_list_bool', () => {
    const parseObj = createH2dtsCppParseObj('std::list<bool>');
    let classType = '';
    let classReturnType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classType = converted.classes[0].variableList[0].type;
        classReturnType = converted.classes[0].functionList[0].returns;
        funcReturnType = converted.funcs[0].returns;
      }
    });
    assert.strictEqual(classType, 'std::list<bool>');
    assert.strictEqual(classReturnType, 'std::list<bool>');
    assert.strictEqual(funcReturnType, 'std::list<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dtscpp_array_std_list_bool (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_param_coverage_basic_20 对20种基础类型函数入参与返回值转换覆盖及性能。
  test('h2dtscpp_param_coverage_basic_20', () => {
    const cases = [
      { input: 'number', expected: 'double' },
      { input: 'string', expected: 'std::string' },
      { input: 'boolean', expected: 'bool' },
      { input: 'void', expected: 'void' },
      { input: 'any', expected: 'std::any' },
      { input: 'Object', expected: 'Object' },
      { input: 'Callback<number>', expected: 'std::function<void(double)>' },
      { input: 'Callback<string>', expected: 'std::function<void(std::string)>' },
      { input: 'Callback<boolean>', expected: 'std::function<void(bool)>' },
      { input: '()=>void', expected: 'std::function<void()>' },
      { input: '(value:boolean)=>string', expected: 'std::function<std::string(bool)>' },
      { input: '(a:number,b:string)=>number', expected: 'std::function<double(double, std::string)>' },
      { input: 'Map<string,number>', expected: 'std::map<std::string, double>' },
      { input: 'Map<string,string>', expected: 'std::map<std::string, std::string>' },
      { input: 'Map<string,boolean>', expected: 'std::map<std::string, bool>' },
      { input: 'Map<number,number>', expected: 'std::map<double, double>' },
      { input: 'Map<number,string>', expected: 'std::map<double, std::string>' },
      { input: 'Map<number,boolean>', expected: 'std::map<double, bool>' },
      { input: 'Set<string>', expected: 'std::set<std::string>' },
      { input: 'CustomType', expected: 'CustomType' },
    ];

    let validated = 0;
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        validated = 0;
        for (const item of cases) {
          const converted = transParseObj(createH2dtsCppParseObj(item.input));
          const classParamType = converted.classes[0].functionList[0].parameters[0].type;
          const funcParamType = converted.funcs[0].parameters[0].type;
          const classReturnType = converted.classes[0].functionList[0].returns;
          const funcReturnType = converted.funcs[0].returns;
          assert.strictEqual(classParamType, item.expected);
          assert.strictEqual(funcParamType, item.expected);
          assert.strictEqual(classReturnType, item.expected);
          assert.strictEqual(funcReturnType, item.expected);
          validated++;
        }
      }
    });

    assert.strictEqual(validated, 20);
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_param_coverage_basic_20 (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_param_coverage_array_20 对20种数组/容器类型函数入参与返回值转换覆盖及性能。
  test('h2dtscpp_param_coverage_array_20', () => {
    const cases = [
      { input: 'number[]', expected: 'std::vector<double>' },
      { input: 'string[]', expected: 'std::vector<std::string>' },
      { input: 'boolean[]', expected: 'std::vector<bool>' },
      { input: 'Array<number>', expected: 'std::vector<double>' },
      { input: 'Array<string>', expected: 'std::vector<std::string>' },
      { input: 'Array<boolean>', expected: 'std::vector<bool>' },
      { input: 'Array<Array<number>>', expected: 'Array<Array<number>>' },
      { input: 'number[][]', expected: 'number[][]' },
      { input: 'Array<Map<string,number>>', expected: 'Array<Map<string,number>>' },
      { input: 'Array<Set<boolean>>', expected: 'Array<Set<boolean>>' },
      { input: 'ReadonlyArray<number>', expected: 'ReadonlyArray<number>' },
      { input: 'Int32Array', expected: 'Int32Array' },
      { input: 'Uint8Array', expected: 'Uint8Array' },
      { input: 'Float32Array', expected: 'Float32Array' },
      { input: 'ArrayBuffer', expected: 'ArrayBuffer' },
      { input: 'SharedArrayBuffer', expected: 'SharedArrayBuffer' },
      { input: 'std::vector<int>', expected: 'std::vector<int>' },
      { input: 'std::array<double,4>', expected: 'std::array<double,4>' },
      { input: 'std::deque<string>', expected: 'std::deque<string>' },
      { input: 'std::list<bool>', expected: 'std::list<bool>' },
    ];

    let validated = 0;
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        validated = 0;
        for (const item of cases) {
          const converted = transParseObj(createH2dtsCppParseObj(item.input));
          const classParamType = converted.classes[0].functionList[0].parameters[0].type;
          const funcParamType = converted.funcs[0].parameters[0].type;
          const classReturnType = converted.classes[0].functionList[0].returns;
          const funcReturnType = converted.funcs[0].returns;
          assert.strictEqual(classParamType, item.expected);
          assert.strictEqual(funcParamType, item.expected);
          assert.strictEqual(classReturnType, item.expected);
          assert.strictEqual(funcReturnType, item.expected);
          validated++;
        }
      }
    });

    assert.strictEqual(validated, 20);
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_param_coverage_array_20 (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dtscpp_class_auto_conversion 对 class 变量、方法返回值与方法参数自动转换覆盖及性能。
  test('h2dtscpp_class_auto_conversion', () => {
    const parseObj: ParseObj = {
      enums: [],
      unions: [],
      structs: [],
      classes: [{
        name: 'H2dtsCppPerfClass',
        alias: '',
        variableList: [
          { type: 'string', name: 'name', arraySize: 0, arraySizeList: [] },
          { type: 'number[]', name: 'scores', arraySize: 0, arraySizeList: [] },
        ],
        functionList: [{
          type: 'function',
          name: 'update',
          returns: 'Map<string,number>',
          parameters: [
            { type: 'boolean', name: 'enabled', arraySize: 0, arraySizeList: [] },
            { type: 'Array<string>', name: 'tags', arraySize: 0, arraySizeList: [] },
          ]
        }]
      }],
      funcs: [],
      types: []
    };

    let classVar0 = '';
    let classVar1 = '';
    let methodReturn = '';
    let methodParam0 = '';
    let methodParam1 = '';

    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        const converted = transParseObj(parseObj);
        classVar0 = converted.classes[0].variableList[0].type;
        classVar1 = converted.classes[0].variableList[1].type;
        methodReturn = converted.classes[0].functionList[0].returns;
        methodParam0 = converted.classes[0].functionList[0].parameters[0].type;
        methodParam1 = converted.classes[0].functionList[0].parameters[1].type;
      }
    });

    assert.strictEqual(classVar0, 'std::string');
    assert.strictEqual(classVar1, 'std::vector<double>');
    assert.strictEqual(methodReturn, 'std::map<std::string, double>');
    assert.strictEqual(methodParam0, 'bool');
    assert.strictEqual(methodParam1, 'std::vector<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dtscpp_class_auto_conversion (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });


});
