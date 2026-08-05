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

/**
 * B0/B1/B2 数量门禁。
 * 用法：node ./out/test/suite_v2/tools/count_gate.js
 * SUITE_V2_GATE=b1|b2（默认 b2）
 */

import {
  B1_MIN_PER_SUITE,
  B2_MIN_PER_SUITE,
  B2_SHARED_T_TARGET,
  N_CL,
  TARGET_G,
  TARGET_I,
  TARGET_P,
  TARGET_TOTAL,
} from '../constants';
import { countTCross } from '../catalog/expand';

interface GateResult {
  ok: boolean;
  phase: string;
  N_CL: number;
  T_cross: number;
  P: number;
  G: number;
  I: number;
  total: number;
  errors: string[];
}

function main(): void {
  const phase = (process.env.SUITE_V2_GATE || 'b2').toLowerCase();
  const t = countTCross();
  const P = t;
  const G = t;
  const I = t;
  const total = P + G + I;
  const errors: string[] = [];

  if (phase === 'b1') {
    if (t < B1_MIN_PER_SUITE) {
      errors.push(`|T|=${t} < B1_MIN_PER_SUITE=${B1_MIN_PER_SUITE}`);
    }
  } else {
    // B2：每套 > N_CL，且共享表达到 B2_SHARED_T_TARGET（覆盖 P/G/I 设计下限）
    if (t <= N_CL || t < B2_MIN_PER_SUITE) {
      errors.push(`|T|=${t} must be > N_CL=${N_CL}`);
    }
    if (t < B2_SHARED_T_TARGET) {
      errors.push(`|T|=${t} < B2_SHARED_T_TARGET=${B2_SHARED_T_TARGET}`);
    }
    if (P < TARGET_P) {
      errors.push(`|P|=${P} < TARGET_P=${TARGET_P}`);
    }
    if (G < TARGET_G) {
      errors.push(`|G|=${G} < TARGET_G=${TARGET_G}`);
    }
    if (I < TARGET_I) {
      errors.push(`|I|=${I} < TARGET_I=${TARGET_I}`);
    }
    if (total < TARGET_TOTAL) {
      errors.push(`total=${total} < TARGET_TOTAL=${TARGET_TOTAL}`);
    }
  }

  const result: GateResult = {
    ok: errors.length === 0,
    phase,
    N_CL,
    T_cross: t,
    P,
    G,
    I,
    total,
    errors,
  };
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) {
    process.exit(1);
  }
}

main();
