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
 * 统计 suite_v3 已生成文件中的物理 it( 数量。
 * 默认扫子集 types/；SUITE_V3_USE_BULK=1 扫 bulk/。
 *
 * 用法：node ./out/test/suite_v3/tools/count_gate.js
 */

import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import { N_CL, SUITE_V3_SAMPLE_MIN_PER_SUITE } from '../constants';

function srcRoot(): string {
  return path.resolve(__dirname, '../../../../src/test/suite_v3');
}

function countItInFile(file: string): number {
  const text = fs.readFileSync(file, 'utf8');
  const m = text.match(/\bit\s*\(/g);
  return m ? m.length : 0;
}

function countSuite(root: string, suiteDir: string): { files: number; its: number } {
  const pattern = path.join(root, suiteDir, 'types', '**', '*.test.*').replace(/\\/g, '/');
  const files = glob.sync(pattern);
  let its = 0;
  for (const f of files) {
    its += countItInFile(f);
  }
  return { files: files.length, its };
}

function main(): void {
  const useBulk = process.env.SUITE_V3_USE_BULK === '1' || process.env.SUITE_V3_FULL === '1';
  const root = useBulk ? path.join(srcRoot(), 'bulk') : srcRoot();
  const phase = useBulk ? 'bulk' : 'sample';

  const P = countSuite(root, 'parse');
  const G = countSuite(root, 'gen');
  const I = countSuite(root, 'integration');
  const total = P.its + G.its + I.its;
  const errors: string[] = [];

  if (phase === 'sample') {
    if (P.its < SUITE_V3_SAMPLE_MIN_PER_SUITE) {
      errors.push(`sample |P|=${P.its} < ${SUITE_V3_SAMPLE_MIN_PER_SUITE}`);
    }
    if (G.its < SUITE_V3_SAMPLE_MIN_PER_SUITE) {
      errors.push(`sample |G|=${G.its} < ${SUITE_V3_SAMPLE_MIN_PER_SUITE}`);
    }
    if (I.its < SUITE_V3_SAMPLE_MIN_PER_SUITE) {
      errors.push(`sample |I|=${I.its} < ${SUITE_V3_SAMPLE_MIN_PER_SUITE}`);
    }
  } else {
    if (P.its <= N_CL) {
      errors.push(`bulk |P|=${P.its} must be > N_CL=${N_CL}`);
    }
    if (G.its <= N_CL) {
      errors.push(`bulk |G|=${G.its} must be > N_CL=${N_CL}`);
    }
    if (I.its <= N_CL) {
      errors.push(`bulk |I|=${I.its} must be > N_CL=${N_CL}`);
    }
  }

  const result = {
    ok: errors.length === 0,
    phase,
    N_CL,
    P: P.its,
    G: G.its,
    I: I.its,
    total,
    files: { P: P.files, G: G.files, I: I.files },
    errors,
  };
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) {
    process.exit(1);
  }
}

main();
