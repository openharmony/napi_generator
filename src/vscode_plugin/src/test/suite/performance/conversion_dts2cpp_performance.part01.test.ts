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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';

const TYPE_THRESHOLD_MS = 10;
const METHOD_THRESHOLD_MS = 50;
const FILE_THRESHOLD_MS = 1000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_Conversion_DTS2CPP_Suite', function() {
  this.timeout(300000);
  vscode.window.showInformationMessage('Start dts2cpp performance tests.');

  // 类型转换性能：严格一输入一断言（无重复输入）。
  // 测试内容：验证 dts2cpp 类型 `number` 的转换结果与性能。
  test('dts2cpp_type_unique_0001', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('number');
        }
      });
      assert.strictEqual(converted, 'double');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0001 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `string` 的转换结果与性能。
  test('dts2cpp_type_unique_0002', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('string');
        }
      });
      assert.strictEqual(converted, 'std::string');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0002 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `boolean` 的转换结果与性能。
  test('dts2cpp_type_unique_0003', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('boolean');
        }
      });
      assert.strictEqual(converted, 'bool');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0003 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `void` 的转换结果与性能。
  test('dts2cpp_type_unique_0004', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('void');
        }
      });
      assert.strictEqual(converted, 'void');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0004 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Array<number>` 的转换结果与性能。
  test('dts2cpp_type_unique_0005', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Array<number>');
        }
      });
      assert.strictEqual(converted, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0005 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `number[]` 的转换结果与性能。
  test('dts2cpp_type_unique_0006', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('number[]');
        }
      });
      assert.strictEqual(converted, 'std::vector<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0006 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Array<string>` 的转换结果与性能。
  test('dts2cpp_type_unique_0007', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Array<string>');
        }
      });
      assert.strictEqual(converted, 'std::vector<std::string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0007 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `string[]` 的转换结果与性能。
  test('dts2cpp_type_unique_0008', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('string[]');
        }
      });
      assert.strictEqual(converted, 'std::vector<std::string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0008 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Array<boolean>` 的转换结果与性能。
  test('dts2cpp_type_unique_0009', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Array<boolean>');
        }
      });
      assert.strictEqual(converted, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0009 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `boolean[]` 的转换结果与性能。
  test('dts2cpp_type_unique_0010', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('boolean[]');
        }
      });
      assert.strictEqual(converted, 'std::vector<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0010 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Map<string,number>` 的转换结果与性能。
  test('dts2cpp_type_unique_0011', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Map<string,number>');
        }
      });
      assert.strictEqual(converted, 'std::map<std::string, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0011 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Map<string,string>` 的转换结果与性能。
  test('dts2cpp_type_unique_0012', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Map<string,string>');
        }
      });
      assert.strictEqual(converted, 'std::map<std::string, std::string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0012 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Map<string,boolean>` 的转换结果与性能。
  test('dts2cpp_type_unique_0013', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Map<string,boolean>');
        }
      });
      assert.strictEqual(converted, 'std::map<std::string, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0013 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Map<number,number>` 的转换结果与性能。
  test('dts2cpp_type_unique_0014', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Map<number,number>');
        }
      });
      assert.strictEqual(converted, 'std::map<double, double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0014 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Map<number,string>` 的转换结果与性能。
  test('dts2cpp_type_unique_0015', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Map<number,string>');
        }
      });
      assert.strictEqual(converted, 'std::map<double, std::string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0015 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Map<number,boolean>` 的转换结果与性能。
  test('dts2cpp_type_unique_0016', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Map<number,boolean>');
        }
      });
      assert.strictEqual(converted, 'std::map<double, bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0016 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Set<string>` 的转换结果与性能。
  test('dts2cpp_type_unique_0017', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Set<string>');
        }
      });
      assert.strictEqual(converted, 'std::set<std::string>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0017 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Set<number>` 的转换结果与性能。
  test('dts2cpp_type_unique_0018', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Set<number>');
        }
      });
      assert.strictEqual(converted, 'std::set<double>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0018 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 类型 `Set<boolean>` 的转换结果与性能。
  test('dts2cpp_type_unique_0019', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Set<boolean>');
        }
      });
      assert.strictEqual(converted, 'std::set<bool>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_type_unique_0019 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_type_unique_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<number>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0022', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<number>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0022 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<string>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0023', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<string>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0023 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<boolean>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0024', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<boolean>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0024 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<void>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0025', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<void>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(void)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0025 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<number[]>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0028', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<number[]>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::vector<double>)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0028 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<string[]>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0029', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<string[]>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::vector<std::string>)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0029 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 回调类型 `Callback<boolean[]>` 的转换结果与性能。
  test('dts2cpp_callback_unique_0030', () => {
    try {
      let converted = '';
      const localLoop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('Callback<boolean[]>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::vector<bool>)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < TYPE_THRESHOLD_MS, `dts2cpp_callback_unique_0030 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_callback_unique_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:number)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0031', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0031 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:string)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0032', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0032 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:boolean)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0033', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0033 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:number)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0036', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0036 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:string)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0037', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0037 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:boolean)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0038', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0038 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:number)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0041', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0041 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:string)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0042', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0042 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:boolean)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0043', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0043 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:number)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0046', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0046 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:string)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0047', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0047 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0047 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 箭头函数类型 `(p0:boolean)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0048', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0048 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:number)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0061', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:number)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(double, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0061 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:boolean)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0062', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:boolean)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(double, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0062 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:string,p1:string)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0064', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:string)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(std::string, std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0064 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:number)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0066', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:number)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(bool, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0066 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:boolean)=>number` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0067', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:boolean)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(bool, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0067 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:number)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0074', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:number)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(double, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0074 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:boolean)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0075', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:boolean)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(double, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0075 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:string,p1:string)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0077', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:string)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(std::string, std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0077 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:number)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0079', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:number)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(bool, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0079 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:boolean)=>string` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0080', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:boolean)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(bool, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0080 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:number)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0087', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:number)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(double, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0087 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0087 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:boolean)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0088', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:boolean)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(double, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0088 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0088 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:string,p1:string)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0090', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:string)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(std::string, std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0090 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0090 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:number)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0092', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:number)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(bool, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0092 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0092 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:boolean)=>boolean` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0093', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:boolean)=>boolean');
        }
      });
      assert.strictEqual(converted, 'std::function<bool(bool, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0093 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0093 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:number)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0100', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:number)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0100 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0100 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:number,p1:boolean)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0101', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:boolean)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0101 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0101 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:string,p1:string)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0103', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:string)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::string, std::string)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0103 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0103 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:number)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0105', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:number)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(bool, double)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0105 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0105 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 多参数箭头类型 `(p0:boolean,p1:boolean)=>void` 的转换结果与性能。
  test('dts2cpp_arrow_unique_0106', () => {
    try {
      let converted = '';
      const localLoop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:boolean)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(bool, bool)>');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < METHOD_THRESHOLD_MS, `dts2cpp_arrow_unique_0106 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`dts2cpp_arrow_unique_0106 执行异常: ${String(err)}`);
    }
  });

  test('dts2cpp_any_object_ext_0001', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('any[]');
        }
      });
      assert.strictEqual(converted, 'any[]');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `object[]` 的转换与性能。
  test('dts2cpp_any_object_ext_0002', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('object[]');
        }
      });
      assert.strictEqual(converted, 'object[]');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Array<any>` 的转换与性能。
  test('dts2cpp_any_object_ext_0003', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Array<any>');
        }
      });
      assert.strictEqual(converted, 'Array<any>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Array<object>` 的转换与性能。
  test('dts2cpp_any_object_ext_0004', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Array<object>');
        }
      });
      assert.strictEqual(converted, 'Array<object>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Map<string,any>` 的转换与性能。
  test('dts2cpp_any_object_ext_0005', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Map<string,any>');
        }
      });
      assert.strictEqual(converted, 'Map<string,any>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Map<string,object>` 的转换与性能。
  test('dts2cpp_any_object_ext_0006', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Map<string,object>');
        }
      });
      assert.strictEqual(converted, 'Map<string,object>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Map<object,string>` 的转换与性能。
  test('dts2cpp_any_object_ext_0007', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Map<object,string>');
        }
      });
      assert.strictEqual(converted, 'Map<object,string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Map<any,number>` 的转换与性能。
  test('dts2cpp_any_object_ext_0008', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Map<any,number>');
        }
      });
      assert.strictEqual(converted, 'Map<any,number>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Set<any>` 的转换与性能。
  test('dts2cpp_any_object_ext_0009', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Set<any>');
        }
      });
      assert.strictEqual(converted, 'Set<any>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Set<object>` 的转换与性能。
  test('dts2cpp_any_object_ext_0010', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Set<object>');
        }
      });
      assert.strictEqual(converted, 'Set<object>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Callback<any>` 的转换与性能。
  test('dts2cpp_any_object_ext_0011', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Callback<any>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Callback<object>` 的转换与性能。
  test('dts2cpp_any_object_ext_0012', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Callback<object>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Callback<any[]>` 的转换与性能。
  test('dts2cpp_any_object_ext_0013', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Callback<any[]>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(any[])>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `Callback<object[]>` 的转换与性能。
  test('dts2cpp_any_object_ext_0014', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Callback<object[]>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(object[])>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `(p0:any)=>any` 的转换与性能。
  test('dts2cpp_any_object_ext_0015', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `(p0:object)=>object` 的转换与性能。
  test('dts2cpp_any_object_ext_0016', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0016 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `(p0:any,p1:object)=>void` 的转换与性能。
  test('dts2cpp_any_object_ext_0017', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:object)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0017 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `(p0:any,p1:any)=>object` 的转换与性能。
  test('dts2cpp_any_object_ext_0018', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:any)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0018 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 对 `(p0:object,p1:object)=>any` 的转换与性能。
  test('dts2cpp_any_object_ext_0019', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:object)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_any_object_ext_0019 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_ext_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp any/object 全链路场景 `anyObjChain0001` 的转换与生成性能。
  test('dts2cpp_any_object_chain_ext_0001', () => {
    try {
      let retType = '';
      let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('anyObjChain0001.ts', 'function anyObjChain0001(a:any, b:object): any { return undefined as any; }');
          const converted = transParseObj(parseObj);
          retType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'anyObjChain0001.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(retType, 'std::any');
      assert.ok(hOut.includes('napi_value anyObjChain0001'), 'dts2cpp_any_object_chain_ext_0001 头文件生成缺失');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `dts2cpp_any_object_chain_ext_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_chain_ext_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp any/object 全链路场景 `anyObjChain0002` 的转换与生成性能。
  test('dts2cpp_any_object_chain_ext_0002', () => {
    try {
      let retType = '';
      let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('anyObjChain0002.ts', 'function anyObjChain0002(a:object, b:object): any { return undefined as any; }');
          const converted = transParseObj(parseObj);
          retType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'anyObjChain0002.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(retType, 'std::any');
      assert.ok(hOut.includes('napi_value anyObjChain0002'), 'dts2cpp_any_object_chain_ext_0002 头文件生成缺失');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `dts2cpp_any_object_chain_ext_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_chain_ext_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp any/object 全链路场景 `anyObjChain0003` 的转换与生成性能。
  test('dts2cpp_any_object_chain_ext_0003', () => {
    try {
      let retType = '';
      let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('anyObjChain0003.ts', 'function anyObjChain0003(a:any, b:any): any { return undefined as any; }');
          const converted = transParseObj(parseObj);
          retType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'anyObjChain0003.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(retType, 'std::any');
      assert.ok(hOut.includes('napi_value anyObjChain0003'), 'dts2cpp_any_object_chain_ext_0003 头文件生成缺失');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `dts2cpp_any_object_chain_ext_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_chain_ext_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp any/object 全链路场景 `anyObjChain0004` 的转换与生成性能。
  test('dts2cpp_any_object_chain_ext_0004', () => {
    try {
      let retType = '';
      let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('anyObjChain0004.ts', 'function anyObjChain0004(a:object, b:object): object { return undefined as any; }');
          const converted = transParseObj(parseObj);
          retType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'anyObjChain0004.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(retType, 'std::any');
      assert.ok(hOut.includes('napi_value anyObjChain0004'), 'dts2cpp_any_object_chain_ext_0004 头文件生成缺失');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `dts2cpp_any_object_chain_ext_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_chain_ext_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp any/object 全链路场景 `anyObjChain0006` 的转换与生成性能。
  test('dts2cpp_any_object_chain_ext_0006', () => {
    try {
      let retType = '';
      let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('anyObjChain0006.ts', 'function anyObjChain0006(a:object, b:any): any { return undefined as any; }');
          const converted = transParseObj(parseObj);
          retType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'anyObjChain0006.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(retType, 'std::any');
      assert.ok(hOut.includes('napi_value anyObjChain0006'), 'dts2cpp_any_object_chain_ext_0006 头文件生成缺失');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `dts2cpp_any_object_chain_ext_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_chain_ext_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp any/object 全链路场景 `anyObjChain0012` 的转换与生成性能。
  test('dts2cpp_any_object_chain_ext_0012', () => {
    try {
      let retType = '';
      let hOut = '';
      const loop = 1;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          const parseObj = doParseTs('anyObjChain0012.ts', 'function anyObjChain0012(a:object, b:any): object { return undefined as any; }');
          const converted = transParseObj(parseObj);
          retType = converted.funcs[0].returns;
          const generated = generateFunctions(converted, 'anyObjChain0012.d.ts');
          hOut = generated.napiHContent;
        }
      });
      assert.strictEqual(retType, 'std::any');
      assert.ok(hOut.includes('napi_value anyObjChain0012'), 'dts2cpp_any_object_chain_ext_0012 头文件生成缺失');
      const avg = elapsed / loop;
      assert.ok(avg < FILE_THRESHOLD_MS, `dts2cpp_any_object_chain_ext_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_any_object_chain_ext_0012 执行异常: ${String(err)}`);
    }
  });

  test('dts2cpp_expand_unique_0001', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('ReadonlyArray<any>');
        }
      });
      assert.strictEqual(converted, 'ReadonlyArray<any>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_expand_unique_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `ReadonlyArray<object>` 的转换结果与性能。
  test('dts2cpp_expand_unique_0002', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('ReadonlyArray<object>');
        }
      });
      assert.strictEqual(converted, 'ReadonlyArray<object>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_expand_unique_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `Promise<any>` 的转换结果与性能。
  test('dts2cpp_expand_unique_0003', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Promise<any>');
        }
      });
      assert.strictEqual(converted, 'Promise<any>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_expand_unique_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `Promise<object>` 的转换结果与性能。
  test('dts2cpp_expand_unique_0004', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Promise<object>');
        }
      });
      assert.strictEqual(converted, 'Promise<object>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_expand_unique_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `Callback<Array<any>>` 的转换结果与性能。
  test('dts2cpp_expand_unique_0005', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Callback<Array<any>>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(Array<any)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_expand_unique_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `Callback<Array<object>>` 的转换结果与性能。
  test('dts2cpp_expand_unique_0006', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('Callback<Array<object>>');
        }
      });
      assert.strictEqual(converted, 'std::function<void(Array<object)>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `dts2cpp_expand_unique_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0007', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0008', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0009', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0010', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0011', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0012', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0013', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0014', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0015', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0016', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0016 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any)=>number` 的转换结果与性能。
  test('dts2cpp_expand_unique_0017', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0017 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object)=>number` 的转换结果与性能。
  test('dts2cpp_expand_unique_0018', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object)=>number');
        }
      });
      assert.strictEqual(converted, 'std::function<double(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0018 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0018 执行异常: ${String(err)}`);
    }
  });

});
