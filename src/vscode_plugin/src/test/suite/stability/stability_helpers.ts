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

/** 是否为断言失败（必须向上抛出，禁止被 compat 包装吞掉） */
function isAssertionError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false;
  const e = err as { name?: string; code?: string };
  return e.name === 'AssertionError' || e.code === 'ERR_ASSERTION';
}

/** 执行 task，捕获非断言异常；断言失败原样抛出 */
export function runWithoutCrash(task: () => void): void {
  try {
    task();
  } catch (err) {
    if (isAssertionError(err)) throw err;
    // 语法/拼写等解析异常允许吞掉，但不能导致进程崩溃
  }
}

/**
 * 兼容测试包装：assert 失败必须抛出；其它异常返回 false（禁止弱绿）。
 * 返回 true 仅表示 task 完整跑完（strictEqual 已执行路径可达）；
 * 返回 false 表示中途异常、equal 未保证执行 → 外层 assert.ok(finished) 必须失败。
 */
export function runCompatSafe(task: () => void): boolean {
  try {
    task();
    return true;
  } catch (err) {
    if (isAssertionError(err)) throw err;
    return false;
  }
}
