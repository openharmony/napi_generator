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
 * suite_v3 独立入口：commonlibrary 风格物理 it。
 * 默认加载 parse|gen|integration 子集；SUITE_V3_USE_BULK=1 时加载 bulk/。
 */
export function run(): Promise<void> {
  // bdd：describe + it（对齐 commonlibrary / Hypium 观感）
  const mocha = new Mocha({ ui: 'bdd', timeout: 30000 });
  mocha.useColors(true);

  const root = path.resolve(__dirname);
  const useBulk = process.env.SUITE_V3_USE_BULK === '1';
  const pattern = useBulk
    ? 'bulk/{parse,gen,integration}/**/**.test.js'
    : '{parse,gen,integration}/**/**.test.js';

  return new Promise((resolve, reject) => {
    glob(pattern, { cwd: root }, (err, files) => {
      if (err) {
        return reject(err);
      }
      const selected = files || [];
      if (!selected.length) {
        return reject(new Error(`suite_v3: no tests matched ${pattern} under ${root}`));
      }
      console.log(`[suite_v3] loading ${selected.length} file(s), useBulk=${useBulk}`);
      selected.forEach((f) => mocha.addFile(path.resolve(root, f)));
      try {
        mocha.run((failures) => {
          if (failures > 0) {
            reject(new Error(`${failures} suite_v3 tests failed.`));
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
