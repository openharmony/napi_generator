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

import * as assert from 'assert';
import { getTCrossB1 } from '../catalog/expand';
import { Scenario, SuiteKind } from '../catalog/types';
import { buildTcMeta, formatTcComment } from './tc_meta';

export type CaseRunner = (sc: Scenario) => void;

/**
 * 表驱动注册：每条用例携带 commonlibrary 风格 @tc.* 元数据。
 * - test 标题 = @tc.name
 * - 函数体内保留完整注释块字符串并校验字段（便于报告与对账）
 * - SUITE_V2_SMOKE=N 时仅注册前 N 条（全量计数仍由 count_gate 保证）
 */
export function registerTableDriven(suiteKind: SuiteKind, suiteTitle: string, runner: CaseRunner): void {
  const all = getTCrossB1();
  // 默认每套只注册 200 条冒烟；显式 SUITE_V2_FULL=1 或 SUITE_V2_SMOKE=all/0 才全量
  const full = process.env.SUITE_V2_FULL === '1';
  const smokeRaw = process.env.SUITE_V2_SMOKE;
  const wantAll = full || smokeRaw === '0' || smokeRaw === 'all';
  const limit = wantAll ? all.length : Math.max(1, parseInt(smokeRaw || '200', 10) || 200);
  const list = all.slice(0, limit);
  console.log(`[suite_v2] ${suiteTitle}: register ${list.length}/${all.length} (full=${wantAll})`);

  suite(suiteTitle, function () {
    this.timeout(30000);
    list.forEach((sc, index) => {
      const meta = buildTcMeta(suiteKind, sc, index);
      const tcComment = formatTcComment(meta);

      /*
       * 下列 test 在运行时按场景展开；每条均带独立 @tc 元数据（见 tcComment）。
       * 物理带注释的分片文件可由 tools/generate_b1 生成到 generated/。
       */
      test(meta.name, function () {
        // 每条用例独立 @tc.* 注释块（字符串形式，与 generate_b1 落盘内容一致）
        assert.strictEqual(tcComment, formatTcComment(meta));
        assert.ok(tcComment.includes(`@tc.number ${meta.number}`));
        assert.ok(tcComment.includes(`@tc.name ${meta.name}`));
        assert.ok(tcComment.includes(`@tc.desc ${meta.desc}`));
        assert.ok(tcComment.includes(`@tc.size ${meta.size}`));
        assert.ok(tcComment.includes('@tc.type Function'));
        assert.ok(tcComment.includes(`@tc.level ${meta.level}`));
        assert.ok(tcComment.includes(`@pair ${meta.pair}`));
        (this as { tc?: typeof meta }).tc = meta;
        runner(sc);
      });
    });
  });
}
