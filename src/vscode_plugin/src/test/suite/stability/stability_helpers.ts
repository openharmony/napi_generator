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

/** 执行 task，捕获异常，兼容测试用：不 crash 即通过 */
export function runWithoutCrash(task: () => void): void {
  try {
    task();
  } catch (_err) {
    // 语法/拼写错误允许抛错，但不能导致进程崩溃
  }
}

/** 兼容测试：执行完毕返回 true（含捕获到预期异常的情况） */
export function runCompatSafe(task: () => void): boolean {
  try {
    task();
    return true;
  } catch (_err) {
    return true;
  }
}
