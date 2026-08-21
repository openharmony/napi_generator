/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'glob';

/**
 * suite_v2 独立入口：只加载本目录用例，不动原 suite。
 * SUITE_V2_USE_GENERATED=1 时优先加载 generated 目录下分片（带落盘 @tc 注释）
 */
export function run(): Promise<void> {
  const mocha = new Mocha({ ui: 'tdd', timeout: 30000 });
  mocha.useColors(true);

  const root = path.resolve(__dirname);
  const useGenerated = process.env.SUITE_V2_USE_GENERATED === '1';
  const pattern = useGenerated ? 'generated/**/**.test.js' : '{parse,gen,integration}/**/**.test.js';
  const smokeRaw = process.env.SUITE_V2_SMOKE;
  const full = process.env.SUITE_V2_FULL === '1' || smokeRaw === 'all' || smokeRaw === '0';

  return new Promise((resolve, reject) => {
    glob(pattern, { cwd: root }, (err, files) => {
      if (err) {
        return reject(err);
      }
      let selected = files || [];
      // 冒烟：generated 模式只加载每套第一个分片，避免一次吃进数十万用例
      if (useGenerated && !full) {
        selected = selected.filter((f) => /chunk_0000\.test\.js$/.test(f.replace(/\\/g, '/')));
      }
      if (!selected.length) {
        return reject(new Error(`suite_v2: no tests matched ${pattern} under ${root}`));
      }
      console.log(`[suite_v2] loading ${selected.length} file(s), useGenerated=${useGenerated}, full=${full}`);
      selected.forEach((f) => mocha.addFile(path.resolve(root, f)));
      try {
        mocha.run((failures) => {
          if (failures > 0) {
            reject(new Error(`${failures} suite_v2 tests failed.`));
          } else {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  });
}
