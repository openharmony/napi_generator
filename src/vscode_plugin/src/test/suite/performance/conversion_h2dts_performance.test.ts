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
const THRESHOLD_MS = 1000;
const SCENE_THRESHOLD_MS = 10000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}

function assertPerf(elapsed: number, scene: string): void {
  assert.ok(elapsed < THRESHOLD_MS, `${scene} 1000次耗时 ${elapsed}ms，超过 ${THRESHOLD_MS}ms`);
}

function assertScenePerf(elapsed: number, scene: string): void {
  assert.ok(elapsed < SCENE_THRESHOLD_MS, `${scene} ${SCENE_LOOP_COUNT}次耗时 ${elapsed}ms，超过 ${SCENE_THRESHOLD_MS}ms`);
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
  test('h2dts_type_char', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char');
      }
    });
    assert.strictEqual(converted, 'string');
    assertPerf(elapsed, 'h2dts_type_char');
  });

  test('h2dts_type_std_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::string');
      }
    });
    assert.strictEqual(converted, 'string');
    assertPerf(elapsed, 'h2dts_type_std_string');
  });

  test('h2dts_type_char8', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char8_t');
      }
    });
    assert.strictEqual(converted, 'string');
    assertPerf(elapsed, 'h2dts_type_char8');
  });

  test('h2dts_type_char16', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char16_t');
      }
    });
    assert.strictEqual(converted, 'string');
    assertPerf(elapsed, 'h2dts_type_char16');
  });

  test('h2dts_type_char32', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('char32_t');
      }
    });
    assert.strictEqual(converted, 'string');
    assertPerf(elapsed, 'h2dts_type_char32');
  });

  test('h2dts_type_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('int');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_int');
  });

  test('h2dts_type_short', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('short');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_short');
  });

  test('h2dts_type_long', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('long');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_long');
  });

  test('h2dts_type_double', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('double');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_double');
  });

  test('h2dts_type_float', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('float');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_float');
  });

  test('h2dts_type_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('bool');
      }
    });
    assert.strictEqual(converted, 'boolean');
    assertPerf(elapsed, 'h2dts_type_bool');
  });

  test('h2dts_type_int64', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('int64_t');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_int64');
  });

  test('h2dts_type_unsigned_long', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('unsigned long');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_unsigned_long');
  });

  test('h2dts_type_uint32', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('uint32_t');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_uint32');
  });

  test('h2dts_type_size_t', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('size_t');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_size_t');
  });

  test('h2dts_type_vector_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::vector<int>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    assertPerf(elapsed, 'h2dts_type_vector_int');
  });

  test('h2dts_type_deque_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::deque<int>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    assertPerf(elapsed, 'h2dts_type_deque_int');
  });

  test('h2dts_type_array_double', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::array<double>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    assertPerf(elapsed, 'h2dts_type_array_double');
  });

  test('h2dts_type_map_string_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::map<string,int>');
      }
    });
    assert.strictEqual(converted, 'Map<string, number>');
    assertPerf(elapsed, 'h2dts_type_map_string_int');
  });

  test('h2dts_type_map_stdstring_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::map<std::string,bool>');
      }
    });
    assert.strictEqual(converted, 'Map<string, boolean>');
    assertPerf(elapsed, 'h2dts_type_map_stdstring_bool');
  });

  test('h2dts_type_set_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::set<bool>');
      }
    });
    assert.strictEqual(converted, 'Set<boolean>');
    assertPerf(elapsed, 'h2dts_type_set_bool');
  });

  test('h2dts_type_tuple', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::tuple<int,bool>');
      }
    });
    assert.strictEqual(converted, '[number, boolean]');
    assertPerf(elapsed, 'h2dts_type_tuple');
  });

  test('h2dts_type_pair', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::pair<int,bool>');
      }
    });
    assert.strictEqual(converted, '[number, boolean]');
    assertPerf(elapsed, 'h2dts_type_pair');
  });

  test('h2dts_type_unique_ptr', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::unique_ptr<int>');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_unique_ptr');
  });

  test('h2dts_type_shared_ptr', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::shared_ptr<double>');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_shared_ptr');
  });

  test('h2dts_type_function', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::function<void(int, int)>');
      }
    });
    assert.strictEqual(converted, '(param0: number, param1: number)=>void');
    assertPerf(elapsed, 'h2dts_type_function');
  });

  test('h2dts_type_date', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::chrono::system_clock');
      }
    });
    assert.strictEqual(converted, 'Date');
    assertPerf(elapsed, 'h2dts_type_date');
  });

  test('h2dts_type_complex', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::complex<float>');
      }
    });
    assert.strictEqual(converted, '{real: number, imag: number}');
    assertPerf(elapsed, 'h2dts_type_complex');
  });

  test('h2dts_type_vector_iterator', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::vector<int>::iterator');
      }
    });
    assert.strictEqual(converted, 'IterableIterator<Array<number>>');
    assertPerf(elapsed, 'h2dts_type_vector_iterator');
  });

  test('h2dts_type_unordered_map_string_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::unordered_map<string,int>');
      }
    });
    assert.strictEqual(converted, 'Map<string, number>');
    assertPerf(elapsed, 'h2dts_type_unordered_map_string_int');
  });

  test('h2dts_type_unordered_set_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::unordered_set<bool>');
      }
    });
    assert.strictEqual(converted, 'Set<boolean>');
    assertPerf(elapsed, 'h2dts_type_unordered_set_bool');
  });

  test('h2dts_type_weak_ptr_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::weak_ptr<int>');
      }
    });
    assert.strictEqual(converted, 'number');
    assertPerf(elapsed, 'h2dts_type_weak_ptr_int');
  });

  test('h2dts_type_function_string_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::function<void(std::string, bool)>');
      }
    });
    assert.strictEqual(converted, '(param0: string, param1: boolean)=>void');
    assertPerf(elapsed, 'h2dts_type_function_string_bool');
  });

  test('h2dts_type_list_string', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::list<string>');
      }
    });
    assert.strictEqual(converted, 'Array<string>');
    assertPerf(elapsed, 'h2dts_type_list_string');
  });

  test('h2dts_type_queue_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::queue<int>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    assertPerf(elapsed, 'h2dts_type_queue_int');
  });

  test('h2dts_type_priority_queue_double', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::priority_queue<double>');
      }
    });
    assert.strictEqual(converted, 'Array<number>');
    assertPerf(elapsed, 'h2dts_type_priority_queue_double');
  });

  test('h2dts_type_multimap_string_int', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::multimap<string,int>');
      }
    });
    assert.strictEqual(converted, 'Map<string, number>');
    assertPerf(elapsed, 'h2dts_type_multimap_string_int');
  });

  test('h2dts_type_multiset_bool', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::multiset<bool>');
      }
    });
    assert.strictEqual(converted, 'Set<boolean>');
    assertPerf(elapsed, 'h2dts_type_multiset_bool');
  });

  test('h2dts_type_tm_date', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::tm');
      }
    });
    assert.strictEqual(converted, 'Date');
    assertPerf(elapsed, 'h2dts_type_tm_date');
  });

  // h2dts 场景性能（static/class/namespace）
  test('h2dts_scene_static_function_10_under_10s', () => {
    let converted = '';
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        converted = transTskey2Ckey('std::function<double(int, bool)>');
      }
    });
    assert.strictEqual(converted, '(param0: number, param1: boolean)=>number');
    assertScenePerf(elapsed, 'h2dts_scene_static_function');
  });

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
    assertScenePerf(elapsed, 'h2dts_scene_class_members_methods');
  });

  test('h2dts_scene_namespace_variables_functions_10_under_10s', () => {
    const namespaceTypes = ['PerfNS::Count', 'PerfNS::Node', 'std::map<string,int>', 'std::function<void(int)>'];
    let converted: string[] = [];
    const elapsed = measureElapsed(() => {
      for (let i = 0; i < SCENE_LOOP_COUNT; i++) {
        converted = namespaceTypes.map((type) => transTskey2Ckey(type));
      }
    });
    assert.deepStrictEqual(converted, ['any', 'any', 'Map<string, number>', '(param0: number)=>void']);
    assertScenePerf(elapsed, 'h2dts_scene_namespace_variables_functions');
  });

});
