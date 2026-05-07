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

  // dts2cpp 类型性能
  // 测试内容：验证 dts2cpp_type_number 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_number', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('number');
      }
    });
    assert.strictEqual(converted, 'double');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_string 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('string');
      }
    });
    assert.strictEqual(converted, 'std::string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_boolean 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_boolean', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('boolean');
      }
    });
    assert.strictEqual(converted, 'bool');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_void 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_void', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('void');
      }
    });
    assert.strictEqual(converted, 'void');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_void (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_number_array_short 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_number_array_short', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('number[]');
      }
    });
    assert.strictEqual(converted, 'std::vector<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_number_array_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_string_array_short 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_string_array_short', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('string[]');
      }
    });
    assert.strictEqual(converted, 'std::vector<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_string_array_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_boolean_array_short 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_boolean_array_short', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('boolean[]');
      }
    });
    assert.strictEqual(converted, 'std::vector<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_boolean_array_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_array_number 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_array_number', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Array<number>');
      }
    });
    assert.strictEqual(converted, 'std::vector<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_array_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_array_string 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_array_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Array<string>');
      }
    });
    assert.strictEqual(converted, 'std::vector<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_array_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_array_boolean 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_array_boolean', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Array<boolean>');
      }
    });
    assert.strictEqual(converted, 'std::vector<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_array_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_string_number_space 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_string_number_space', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<string, number>');
      }
    });
    assert.strictEqual(converted, 'std::map<std::string, double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_string_number_space (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_string_number 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_string_number', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<string,number>');
      }
    });
    assert.strictEqual(converted, 'std::map<std::string, double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_string_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_string_string 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_string_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<string,string>');
      }
    });
    assert.strictEqual(converted, 'std::map<std::string, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_string_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_string_boolean 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_string_boolean', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<string,boolean>');
      }
    });
    assert.strictEqual(converted, 'std::map<std::string, bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_string_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_number_number 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_number_number', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<number,number>');
      }
    });
    assert.strictEqual(converted, 'std::map<double, double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_number_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_number_string 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_number_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<number,string>');
      }
    });
    assert.strictEqual(converted, 'std::map<double, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_number_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_number_boolean 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_number_boolean', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<number,boolean>');
      }
    });
    assert.strictEqual(converted, 'std::map<double, bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_number_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_set_string 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_set_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Set<string>');
      }
    });
    assert.strictEqual(converted, 'std::set<std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_set_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_set_number 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_set_number', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Set<number>');
      }
    });
    assert.strictEqual(converted, 'std::set<double>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_set_number (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_set_boolean 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_set_boolean', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Set<boolean>');
      }
    });
    assert.strictEqual(converted, 'std::set<bool>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_set_boolean (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_any 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_any', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('any');
      }
    });
    assert.strictEqual(converted, 'std::any');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_any (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_object 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_object', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('object');
      }
    });
    assert.strictEqual(converted, 'std::any');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_object (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_callback 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_callback', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Callback<number>');
      }
    });
    assert.strictEqual(converted, 'std::function<void(double)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_callback (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_arrow 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_arrow', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('(a:number,b:string)=>void');
      }
    });
    assert.strictEqual(converted, 'std::function<void(double, std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_arrow (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_callback_string 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_callback_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Callback<string>');
      }
    });
    assert.strictEqual(converted, 'std::function<void(std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_callback_string (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_callback_boolean 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_callback_boolean', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Callback<boolean>');
      }
    });
    assert.strictEqual(converted, 'std::function<void(bool)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_callback_boolean (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_arrow_return_number 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_arrow_return_number', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('(a:number,b:string)=>number');
      }
    });
    assert.strictEqual(converted, 'std::function<double(double, std::string)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_arrow_return_number (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_string_string_space 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_string_string_space', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<string, string>');
      }
    });
    assert.strictEqual(converted, 'std::map<std::string, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_string_string_space (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_map_number_string_space 的数组/容器类型转换结果与性能阈值。
  test('dts2cpp_type_map_number_string_space', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('Map<number, string>');
      }
    });
    assert.strictEqual(converted, 'std::map<double, std::string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_map_number_string_space (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_arrow_no_param 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_arrow_no_param', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('()=>void');
      }
    });
    assert.strictEqual(converted, 'std::function<void()>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_arrow_no_param (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_arrow_bool_to_string 的函数类型转换结果与性能阈值。
  test('dts2cpp_type_arrow_bool_to_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('(flag:boolean)=>string');
      }
    });
    assert.strictEqual(converted, 'std::function<std::string(bool)>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_type_arrow_bool_to_string (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_type_custom_passthrough 的基础类型转换结果与性能阈值。
  test('dts2cpp_type_custom_passthrough', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transCkey2Dtskey('CustomType');
      }
    });
    assert.strictEqual(converted, 'CustomType');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_custom_passthrough (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_function_scene_callback_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_function_scene_callback_10_under_10s', () => {
    const source = 'function register(cb: Callback<number>): void { return; }';
    let paramType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('callback_scene.ts', source);
        const converted = transParseObj(parseRes);
        paramType = converted.funcs[0].parameters[0].type;
      }
    });

    assert.strictEqual(paramType, 'std::function<void(double)>');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_function_scene_callback (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_function_scene_promise_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_function_scene_promise_10_under_10s', () => {
    const source = 'function getData(v: number): Promise<number> { return Promise.resolve(v); }';
    let returnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('promise_scene.ts', source);
        const converted = transParseObj(parseRes);
        returnType = converted.funcs[0].returns;
      }
    });

    assert.strictEqual(returnType, 'Promise<number>');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_function_scene_promise (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_function_scene_on_off_dollar_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_function_scene_on_off_dollar_10_under_10s', () => {
    const source = `
      function on(event: string, cb: Callback<number>): void { return; }
      function off(event: string): void { return; }
      function $(name: string): string { return name; }
    `;
    let funcCount = 0;
    let thirdFuncName = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('event_scene.ts', source);
        const converted = transParseObj(parseRes);
        funcCount = converted.funcs.length;
        thirdFuncName = converted.funcs[2].name;
      }
    });

    assert.strictEqual(funcCount, 3);
    assert.strictEqual(thirdFuncName, '$');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_function_scene_on_off_dollar (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_function_scene_arrow_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_function_scene_arrow_10_under_10s', () => {
    let convertedType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        convertedType = transCkey2Dtskey('(a:number,b:string)=>void');
      }
    });

    assert.strictEqual(convertedType, 'std::function<void(double, std::string)>');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_function_scene_arrow (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_function_scene_threadsafe_like_callback_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_function_scene_threadsafe_like_callback_10_under_10s', () => {
    const source = 'function start(tsfn: Callback<number>): void { return; }';
    let convertedType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('threadsafe_scene.ts', source);
        const converted = transParseObj(parseRes);
        convertedType = converted.funcs[0].parameters[0].type;
      }
    });

    assert.strictEqual(convertedType, 'std::function<void(double)>');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_function_scene_threadsafe_like_callback (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_import_and_namespace_scene_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_import_and_namespace_scene_10_under_10s', () => {
    const source = `
      import { CustomType } from './custom_type';
      namespace PerfNS {
        export function useType(arg: CustomType): CustomType { return arg; }
      }
    `;
    let returnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('namespace_scene.ts', source);
        const converted = transParseObj(parseRes);
        returnType = converted.funcs[0].returns;
      }
    });

    assert.strictEqual(returnType, 'CustomType');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_import_and_namespace_scene (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_namespace_variable_and_function_scene_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_namespace_variable_and_function_scene_10_under_10s', () => {
    const source = `
      namespace PerfNS {
        export class Counter {
          value: number = 0;
        }
        export function getCount(v: number): number { return v; }
      }
    `;
    let classVarType = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('namespace_var_func_scene.ts', source);
        const converted = transParseObj(parseRes);
        classVarType = converted.classes[0].variableList[0].type;
        funcReturnType = converted.funcs[0].returns;
      }
    });

    assert.strictEqual(classVarType, 'double');
    assert.strictEqual(funcReturnType, 'double');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_namespace_variable_and_function_scene (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_function_scene_static_method_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_function_scene_static_method_10_under_10s', () => {
    const source = `
      class ToolSet {
        static build(v: number): number { return v; }
      }
    `;
    let methodReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('static_method_scene.ts', source);
        const converted = transParseObj(parseRes);
        methodReturnType = converted.classes[0].functionList[0].returns;
      }
    });

    assert.strictEqual(methodReturnType, 'double');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_function_scene_static_method (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_enum_scene_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_enum_scene_10_under_10s', () => {
    const source = `
      enum PerfDirection {
        Up = 1,
        Down = 2
      }
    `;
    let enumName = '';
    let enumMemberCount = 0;
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('enum_scene.ts', source);
        const converted = transParseObj(parseRes);
        enumName = converted.enums[0].name;
        enumMemberCount = converted.enums[0].members.length;
      }
    });

    assert.strictEqual(enumName, 'PerfDirection');
    assert.strictEqual(enumMemberCount, 2);
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_enum_scene (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_struct_scene_map_set_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_struct_scene_map_set_10_under_10s', () => {
    const source = `
      interface PerfData {
        scores: Map<string, number>;
        tags: Set<string>;
      }
    `;
    let firstMemberType = '';
    let secondMemberType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('struct_scene.ts', source);
        const converted = transParseObj(parseRes);
        firstMemberType = converted.structs[0].members[0].type;
        secondMemberType = converted.structs[0].members[1].type;
      }
    });

    assert.strictEqual(firstMemberType, 'std::map<std::string, double>');
    assert.strictEqual(secondMemberType, 'std::set<std::string>');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_struct_scene_map_set (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_class_scene_callback_and_return_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_class_scene_callback_and_return_10_under_10s', () => {
    const source = `
      class PerfWorker {
        run(cb: Callback<number>): number { return 1; }
      }
    `;
    let methodReturnType = '';
    let callbackParamType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('class_scene.ts', source);
        const converted = transParseObj(parseRes);
        methodReturnType = converted.classes[0].functionList[0].returns;
        callbackParamType = converted.classes[0].functionList[0].parameters[0].type;
      }
    });

    assert.strictEqual(methodReturnType, 'double');
    assert.strictEqual(callbackParamType, 'Callback');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_class_scene_callback_and_return (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_namespace_class_static_combo_scene_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_namespace_class_static_combo_scene_10_under_10s', () => {
    const source = `
      namespace PerfNS {
        export class Builder {
          static make(v: number): number { return v; }
        }
      }
    `;
    let className = '';
    let methodName = '';
    let methodReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('namespace_class_static_combo_scene.ts', source);
        const converted = transParseObj(parseRes);
        className = converted.classes[0].name;
        methodName = converted.classes[0].functionList[0].name;
        methodReturnType = converted.classes[0].functionList[0].returns;
      }
    });

    assert.strictEqual(className, 'Builder');
    assert.strictEqual(methodName, 'make');
    assert.strictEqual(methodReturnType, 'double');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_namespace_class_static_combo_scene (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_namespace_enum_function_scene_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_namespace_enum_function_scene_10_under_10s', () => {
    const source = `
      namespace PerfNS {
        export enum Status {
          Ok = 1,
          Fail = 0
        }
        export function getStatus(): Status { return Status.Ok; }
      }
    `;
    let enumName = '';
    let funcReturnType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('namespace_enum_function_scene.ts', source);
        const converted = transParseObj(parseRes);
        enumName = converted.enums[0].name;
        funcReturnType = converted.funcs[0].returns;
      }
    });

    assert.strictEqual(enumName, 'Status');
    assert.strictEqual(funcReturnType, 'Status');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_namespace_enum_function_scene (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_struct_scene_arrow_member_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_struct_scene_arrow_member_10_under_10s', () => {
    const source = `
      interface PerfHandler {
        handler: (a: number, b: string)=>void;
      }
    `;
    let handlerType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('struct_arrow_member_scene.ts', source);
        const converted = transParseObj(parseRes);
        handlerType = converted.structs[0].members[0].type;
      }
    });

    assert.strictEqual(handlerType, 'std::function<void(double, std::string)>');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_struct_scene_arrow_member (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 dts2cpp_class_scene_map_param_scene_10_under_10s 的场景级转换能力与性能阈值。
  test('dts2cpp_class_scene_map_param_scene_10_under_10s', () => {
    const source = `
      class PerfStore {
        put(data: Map<string, number>): void { return; }
      }
    `;
    let paramType = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        const parseRes = doParseTs('class_map_param_scene.ts', source);
        const converted = transParseObj(parseRes);
        paramType = converted.classes[0].functionList[0].parameters[0].type;
      }
    });

    assert.strictEqual(paramType, 'Map');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `dts2cpp_class_scene_map_param_scene (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });
});
