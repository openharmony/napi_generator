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

/** 场景键 TypeId.Context.Derive.Quality[.variant] */
export type ContextId = 'FLD' | 'PAR' | 'RET' | 'TAL' | 'GEN';
export type DeriveId = 'RAW' | 'OPT' | 'RO' | 'PTR' | 'ARR1' | 'NULLU' | 'PROM';
export type QualityId = 'NORM' | 'BOUND' | 'ERR' | 'SPEC';
export type SuiteKind = 'P' | 'G' | 'I';

export interface PriTypeDef {
  typeId: string;
  /** C/声明侧源类型 */
  cType: string;
  /** 期望 TS 映射（transTskey2Ckey） */
  tsType: string;
  family: 'PRI' | 'CTR' | 'ASY' | 'FUN';
}

export interface Scenario {
  /** 共享场景键 S（P/G/I 成对） */
  s: string;
  typeId: string;
  context: ContextId;
  derive: DeriveId;
  quality: QualityId;
  variant: number;
  family: string;
  cType: string;
  tsType: string;
  /** 实际送入映射/夹具的类型串 */
  inputType: string;
  /** 期望映射结果 */
  expectTs: string;
  /** 是否负向（期望 any / 解析降级） */
  negative: boolean;
}

export interface TcMeta {
  number: string;
  name: string;
  desc: string;
  size: 'SmallTest' | 'MediumTest' | 'LargeTest';
  type: 'Function';
  level: 'Level 0' | 'Level 1' | 'Level 2' | 'Level 3';
  pair: string;
  suite: SuiteKind;
}
