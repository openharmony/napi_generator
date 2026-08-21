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

import { Scenario, SuiteKind, TcMeta } from '../catalog/types';

/** 生成 commonlibrary / XTS 风格 @tc.* 注释块 */
export function buildTcMeta(suite: SuiteKind, sc: Scenario, index: number): TcMeta {
  const seq = String(index + 1).padStart(6, '0');
  const prefix =
    suite === 'P' ? 'SUB_NAPI_PARSE' : suite === 'G' ? 'SUB_NAPI_GEN' : 'SUB_NAPI_INTEG';
  const namePrefix = suite === 'P' ? 'testParse' : suite === 'G' ? 'testGen' : 'testInteg';
  const number = `${prefix}_${sc.typeId}_${sc.context}_${sc.derive}_${sc.quality}_${seq}`;
  const name = `${namePrefix}_${sc.typeId}_${sc.context}_${sc.derive}_${sc.quality}_${seq}`;
  const action =
    suite === 'P'
      ? 'parse declaration'
      : suite === 'G'
        ? 'map/generate type'
        : 'roundtrip parse+map';
  const desc = `Verify ${action} for ${sc.s} input="${sc.inputType.trim()}" expect="${sc.expectTs}"`;
  const pairSuite = suite === 'P' ? 'G' : suite === 'G' ? 'P' : 'P+G';
  return {
    number,
    name,
    desc,
    size: sc.family === 'C2' ? 'LargeTest' : 'MediumTest',
    type: 'Function',
    level: sc.negative ? 'Level 2' : 'Level 1',
    pair: `${pairSuite}-${sc.s}`,
    suite,
  };
}

export function formatTcComment(meta: TcMeta): string {
  return [
    '/**',
    ` * @tc.number ${meta.number}`,
    ` * @tc.name ${meta.name}`,
    ` * @tc.desc ${meta.desc}`,
    ` * @tc.size ${meta.size}`,
    ` * @tc.type ${meta.type}`,
    ` * @tc.level ${meta.level}`,
    ` * @pair ${meta.pair}`,
    ' */',
  ].join('\n');
}
