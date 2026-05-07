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

  // h2dts 类型性能
  // 测试内容：验证 h2dts_type_char 的基础类型转换结果与性能阈值。
  test('h2dts_type_char', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char');
      }
    });
    assert.strictEqual(converted, 'string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_char (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_std_string 的基础类型转换结果与性能阈值。
  test('h2dts_type_std_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::string');
      }
    });
    assert.strictEqual(converted, 'string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_std_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_char8 的基础类型转换结果与性能阈值。
  test('h2dts_type_char8', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char8_t');
      }
    });
    assert.strictEqual(converted, 'string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_char8 (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_char16 的基础类型转换结果与性能阈值。
  test('h2dts_type_char16', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char16_t');
      }
    });
    assert.strictEqual(converted, 'string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_char16 (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_char32 的基础类型转换结果与性能阈值。
  test('h2dts_type_char32', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char32_t');
      }
    });
    assert.strictEqual(converted, 'string');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_char32 (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_int 的基础类型转换结果与性能阈值。
  test('h2dts_type_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('int');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_short 的基础类型转换结果与性能阈值。
  test('h2dts_type_short', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('short');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_short (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_long 的基础类型转换结果与性能阈值。
  test('h2dts_type_long', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('long');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_long (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_double 的基础类型转换结果与性能阈值。
  test('h2dts_type_double', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('double');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_double (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_float 的基础类型转换结果与性能阈值。
  test('h2dts_type_float', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('float');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_float (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_bool 的基础类型转换结果与性能阈值。
  test('h2dts_type_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('bool');
      }
    });
    assert.strictEqual(converted, 'boolean');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_bool (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_int64 的基础类型转换结果与性能阈值。
  test('h2dts_type_int64', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('int64_t');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_int64 (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_unsigned_long 的基础类型转换结果与性能阈值。
  test('h2dts_type_unsigned_long', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('unsigned long');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unsigned_long (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_uint32 的基础类型转换结果与性能阈值。
  test('h2dts_type_uint32', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('uint32_t');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_uint32 (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_size_t 的基础类型转换结果与性能阈值。
  test('h2dts_type_size_t', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('size_t');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_size_t (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_vector_int 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_vector_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::vector<int>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_vector_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_deque_int 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_deque_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::deque<int>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_deque_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_array_double 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_array_double', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::array<double>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_array_double (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_map_string_int 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_map_string_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::map<string,int>');
      }
    });
    assert.strictEqual(converted, 'Map<string, number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_map_string_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_map_stdstring_bool 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_map_stdstring_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::map<std::string,bool>');
      }
    });
    assert.strictEqual(converted, 'Map<string, boolean>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_map_stdstring_bool (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_set_bool 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_set_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::set<bool>');
      }
    });
    assert.strictEqual(converted, 'Set<boolean>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_set_bool (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_tuple 的基础类型转换结果与性能阈值。
  test('h2dts_type_tuple', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::tuple<int,bool>');
      }
    });
    assert.strictEqual(converted, '[number, boolean]');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_tuple (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_pair 的基础类型转换结果与性能阈值。
  test('h2dts_type_pair', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::pair<int,bool>');
      }
    });
    assert.strictEqual(converted, '[number, boolean]');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_pair (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_unique_ptr 的基础类型转换结果与性能阈值。
  test('h2dts_type_unique_ptr', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::unique_ptr<int>');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unique_ptr (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_shared_ptr 的基础类型转换结果与性能阈值。
  test('h2dts_type_shared_ptr', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::shared_ptr<double>');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_shared_ptr (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_function 的函数类型转换结果与性能阈值。
  test('h2dts_type_function', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::function<void(int, int)>');
      }
    });
    assert.strictEqual(converted, '(param0: number, param1: number)=>void');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_type_function (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_date 的基础类型转换结果与性能阈值。
  test('h2dts_type_date', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::chrono::system_clock');
      }
    });
    assert.strictEqual(converted, 'Date');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_date (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_complex 的基础类型转换结果与性能阈值。
  test('h2dts_type_complex', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::complex<float>');
      }
    });
    assert.strictEqual(converted, '{real: number, imag: number}');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_complex (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_vector_iterator 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_vector_iterator', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::vector<int>::iterator');
      }
    });
    assert.strictEqual(converted, 'IterableIterator<Array<number>>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_vector_iterator (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_unordered_map_string_int 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_unordered_map_string_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::unordered_map<string,int>');
      }
    });
    assert.strictEqual(converted, 'Map<string, number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unordered_map_string_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_unordered_set_bool 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_unordered_set_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::unordered_set<bool>');
      }
    });
    assert.strictEqual(converted, 'Set<boolean>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_unordered_set_bool (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_weak_ptr_int 的基础类型转换结果与性能阈值。
  test('h2dts_type_weak_ptr_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::weak_ptr<int>');
      }
    });
    assert.strictEqual(converted, 'number');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_weak_ptr_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_function_string_bool 的函数类型转换结果与性能阈值。
  test('h2dts_type_function_string_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::function<void(std::string, bool)>');
      }
    });
    assert.strictEqual(converted, '(param0: string, param1: boolean)=>void');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_type_function_string_bool (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_list_string 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_list_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::list<string>');
      }
    });
    assert.strictEqual(converted, 'Array<string>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_list_string (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_queue_int 的基础类型转换结果与性能阈值。
  test('h2dts_type_queue_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::queue<int>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_queue_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_priority_queue_double 的基础类型转换结果与性能阈值。
  test('h2dts_type_priority_queue_double', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::priority_queue<double>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_priority_queue_double (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_multimap_string_int 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_multimap_string_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::multimap<string,int>');
      }
    });
    assert.strictEqual(converted, 'Map<string, number>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_multimap_string_int (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_multiset_bool 的数组/容器类型转换结果与性能阈值。
  test('h2dts_type_multiset_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::multiset<bool>');
      }
    });
    assert.strictEqual(converted, 'Set<boolean>');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_multiset_bool (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_type_tm_date 的基础类型转换结果与性能阈值。
  test('h2dts_type_tm_date', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::tm');
      }
    });
    assert.strictEqual(converted, 'Date');
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `h2dts_type_tm_date (type) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_param_coverage_basic_20 对20种基础类型在函数入参与返回值语义上的转换覆盖及性能。
  test('h2dts_param_coverage_basic_20', () => {
    const cases = [
      { input: 'char', expected: 'string' },
      { input: 'std::string', expected: 'string' },
      { input: 'char8_t', expected: 'string' },
      { input: 'char16_t', expected: 'string' },
      { input: 'char32_t', expected: 'string' },
      { input: 'int', expected: 'number' },
      { input: 'short', expected: 'number' },
      { input: 'long', expected: 'number' },
      { input: 'double', expected: 'number' },
      { input: 'float', expected: 'number' },
      { input: 'bool', expected: 'boolean' },
      { input: 'int64_t', expected: 'number' },
      { input: 'unsigned long', expected: 'number' },
      { input: 'uint32_t', expected: 'number' },
      { input: 'size_t', expected: 'number' },
      { input: 'std::tm', expected: 'Date' },
      { input: 'std::chrono::system_clock', expected: 'Date' },
      { input: 'std::complex<float>', expected: '{real: number, imag: number}' },
      { input: 'std::function<void(int, int)>', expected: '(param0: number, param1: number)=>void' },
      { input: 'std::weak_ptr<int>', expected: 'number' },
    ];

    let validated = 0;
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        validated = 0;
        for (const item of cases) {
          const converted = transTskey2Ckey(item.input);
          assert.strictEqual(converted, item.expected);
          validated++;
        }
      }
    });

    assert.strictEqual(validated, 20);
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_param_coverage_basic_20 (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_param_coverage_array_20 对20种数组/容器类型在函数入参与返回值语义上的转换覆盖及性能。
  test('h2dts_param_coverage_array_20', () => {
    const cases = [
      { input: 'std::vector<int>', expected: 'Array<number>' },
      { input: 'std::deque<int>', expected: 'Array<number>' },
      { input: 'std::array<double>', expected: 'Array<number>' },
      { input: 'std::map<string,int>', expected: 'Map<string, number>' },
      { input: 'std::map<std::string,bool>', expected: 'Map<string, boolean>' },
      { input: 'std::set<bool>', expected: 'Set<boolean>' },
      { input: 'std::tuple<int,bool>', expected: '[number, boolean]' },
      { input: 'std::pair<int,bool>', expected: '[number, boolean]' },
      { input: 'std::unordered_map<string,int>', expected: 'Map<string, number>' },
      { input: 'std::unordered_set<bool>', expected: 'Set<boolean>' },
      { input: 'std::list<string>', expected: 'Array<string>' },
      { input: 'std::queue<int>', expected: 'Array<number>' },
      { input: 'std::priority_queue<double>', expected: 'Array<number>' },
      { input: 'std::multimap<string,int>', expected: 'Map<string, number>' },
      { input: 'std::multiset<bool>', expected: 'Set<boolean>' },
      { input: 'std::function<void(std::string, bool)>', expected: '(param0: string, param1: boolean)=>void' },
      { input: 'std::vector<int>::iterator', expected: 'IterableIterator<Array<number>>' },
      { input: 'std::unique_ptr<int>', expected: 'number' },
      { input: 'std::shared_ptr<double>', expected: 'number' },
      { input: 'std::function<double(int, bool)>', expected: '(param0: number, param1: boolean)=>number' },
    ];

    let validated = 0;
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        validated = 0;
        for (const item of cases) {
          const converted = transTskey2Ckey(item.input);
          assert.strictEqual(converted, item.expected);
          validated++;
        }
      }
    });

    assert.strictEqual(validated, 20);
    const avgElapsed = elapsed / LOOP_COUNT;
    assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `h2dts_param_coverage_array_20 (method) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${LOOP_COUNT}）`);
  });


  // h2dts 场景性能（static/class/namespace）
  // 测试内容：验证 h2dts_scene_static_function_10_under_10s 的场景级转换能力与性能阈值。
  test('h2dts_scene_static_function_10_under_10s', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::function<double(int, bool)>');
      }
    });
    assert.strictEqual(converted, '(param0: number, param1: boolean)=>number');
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_scene_static_function (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_scene_class_members_methods_10_under_10s 的场景级转换能力与性能阈值。
  test('h2dts_scene_class_members_methods_10_under_10s', () => {
    const classFieldTypes = ['int', 'std::string', 'bool', 'std::vector<int>'];
    const classMethodTypes = ['double', 'std::function<void(int)>'];
    let fieldResults: string[] = [];
    let methodResults: string[] = [];
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        fieldResults = classFieldTypes.map((type) => transTskey2Ckey(type));
        methodResults = classMethodTypes.map((type) => transTskey2Ckey(type));
      }
    });
    assert.deepStrictEqual(fieldResults, ['number', 'string', 'boolean', 'Array<number>']);
    assert.deepStrictEqual(methodResults, ['number', '(param0: number)=>void']);
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_scene_class_members_methods (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

  // 测试内容：验证 h2dts_scene_namespace_variables_functions_10_under_10s 的场景级转换能力与性能阈值。
  test('h2dts_scene_namespace_variables_functions_10_under_10s', () => {
    const namespaceTypes = ['PerfNS::Count', 'PerfNS::Node', 'std::map<string,int>', 'std::function<void(int)>'];
    let converted: string[] = [];
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        converted = namespaceTypes.map((type) => transTskey2Ckey(type));
      }
    });
    assert.deepStrictEqual(converted, ['any', 'any', 'Map<string, number>', '(param0: number)=>void']);
    const avgElapsed = elapsed / SCENE_LOOP_COUNT;
    assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_scene_namespace_variables_functions (file) 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${SCENE_LOOP_COUNT}）`);
  });

});
