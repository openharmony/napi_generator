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
  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any)=>string` 的转换结果与性能。
  test('dts2cpp_expand_unique_0019', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0019 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object)=>string` 的转换结果与性能。
  test('dts2cpp_expand_unique_0020', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object)=>string');
        }
      });
      assert.strictEqual(converted, 'std::function<std::string(std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0020 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:any)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0021', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:any)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0021 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:object)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0022', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:object)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0022 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:number)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0023', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:number)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0023 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:string)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0024', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:string)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0024 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:boolean)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0025', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:boolean)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0025 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:any)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0026', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:any)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0026 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:number)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0027', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:number)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0027 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:string)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0028', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:string)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0028 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:boolean)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0029', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:boolean)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0029 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:any)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0030', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:any)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0030 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:object)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0031', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:object)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0031 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0031 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:number)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0032', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:number)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0032 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:string)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0033', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:string)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0033 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:boolean)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0034', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:boolean)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0034 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:any)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0035', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:any)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0035 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:object)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0036', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:object)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0036 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:number)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0037', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:number)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0037 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:string)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0038', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:string)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0038 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:boolean)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0039', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:boolean)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0039 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0039 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:any)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0040', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:any)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0040 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:object)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0041', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:object)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0041 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:number)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0042', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:number)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0042 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:string)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0043', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:string)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0043 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:boolean)=>any` 的转换结果与性能。
  test('dts2cpp_expand_unique_0044', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:boolean)=>any');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0044 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:object)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0045', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:object)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0045 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0045 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:number)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0046', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:number)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0046 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:string)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0047', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:string)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0047 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0047 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:boolean)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0048', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:boolean)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0048 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:any)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0049', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:any)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0049 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0049 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:object)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0050', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:object)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0050 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0050 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:number)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0051', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:number)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0051 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0051 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:string)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0052', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:string)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0052 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0052 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:boolean)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0053', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:boolean)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::any, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0053 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:any)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0054', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:any)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0054 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:object)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0055', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:object)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0055 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:number)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0056', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:number)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0056 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:string)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0057', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:string)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0057 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:boolean)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0058', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:boolean)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(double, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0058 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:any)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0059', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:any)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0059 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:object)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0060', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:object)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0060 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0060 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:number)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0061', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:number)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0061 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:string)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0062', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:string)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0062 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:string,p1:boolean)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0063', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:string,p1:boolean)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(std::string, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0063 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:any)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0064', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:any)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0064 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:object)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0065', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:object)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0065 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:number)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0066', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:number)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0066 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:string)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0067', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:string)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0067 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:boolean,p1:boolean)=>object` 的转换结果与性能。
  test('dts2cpp_expand_unique_0068', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:boolean,p1:boolean)=>object');
        }
      });
      assert.strictEqual(converted, 'std::function<std::any(bool, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0068 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:any)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0069', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:any)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0069 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:number)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0070', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:number)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0070 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:string)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0071', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:string)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0071 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:any,p1:boolean)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0072', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:any,p1:boolean)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0072 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:any)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0073', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:any)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0073 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:object)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0074', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:object)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0074 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:number)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0075', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:number)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, double)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0075 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0075 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:string)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0076', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:string)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0076 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:object,p1:boolean)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0077', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:object,p1:boolean)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(std::any, bool)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0077 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:any)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0078', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:any)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0078 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:object)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0079', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:object)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double, std::any)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0079 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 dts2cpp 扩展输入 `(p0:number,p1:string)=>void` 的转换结果与性能。
  test('dts2cpp_expand_unique_0080', () => {
    try {
      let converted = '';
      const loop = 5;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transCkey2Dtskey('(p0:number,p1:string)=>void');
        }
      });
      assert.strictEqual(converted, 'std::function<void(double, std::string)>');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `dts2cpp_expand_unique_0080 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`dts2cpp_expand_unique_0080 执行异常: ${String(err)}`);
    }
  });

});
