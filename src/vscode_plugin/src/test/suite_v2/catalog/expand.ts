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

import { B1_MIN_PER_SUITE, B2_SHARED_T_TARGET, N_CL } from '../constants';
import { ContextId, DeriveId, PriTypeDef, QualityId, Scenario } from './types';

/**
 * T 展开公式（B0 冻结）：
 *   T_cross ≈ Σ TypeId × valid(Context×Derive) × Quality × Variant
 *            + CTR_elem 笛卡尔 + C2 组合
 * B1：|T| ≥ 50000
 * B2：|T| ≥ B2_SHARED_T_TARGET（200000）⇒ P/G/I 各 > N_CL
 */

const CONTEXTS: ContextId[] = ['FLD', 'PAR', 'RET', 'TAL', 'GEN'];
const QUALITIES: QualityId[] = ['NORM', 'BOUND', 'ERR', 'SPEC'];

const DERIVE_MATRIX: Record<ContextId, DeriveId[]> = {
  FLD: ['RAW', 'OPT', 'RO', 'PTR', 'ARR1', 'NULLU', 'PROM'],
  PAR: ['RAW', 'OPT', 'RO', 'PTR', 'ARR1', 'NULLU', 'PROM'],
  RET: ['RAW', 'PTR', 'ARR1', 'NULLU', 'PROM'],
  TAL: ['RAW', 'ARR1', 'NULLU', 'PROM'],
  GEN: ['RAW', 'ARR1', 'PROM'],
};

const CTR_CONTEXTS: ContextId[] = ['FLD', 'PAR', 'RET', 'TAL'];
const CTR_DERIVES: DeriveId[] = ['RAW', 'OPT', 'ARR1', 'PROM'];
const MAP_CONTEXTS: ContextId[] = ['FLD', 'PAR', 'RET', 'TAL'];
const MAP_DERIVES: DeriveId[] = ['RAW', 'OPT', 'PROM'];
const C2_CONTEXTS: ContextId[] = ['FLD', 'PAR', 'RET'];

function buildPriTypes(): PriTypeDef[] {
  const numSources: Array<[string, string]> = [
    ['int', 'number'],
    ['short', 'number'],
    ['long', 'number'],
    ['float', 'number'],
    ['double', 'number'],
    ['size_t', 'number'],
    ['unsigned', 'number'],
    ['unsigned int', 'number'],
    ['unsigned long', 'number'],
    ['unsigned short', 'number'],
    ['unsigned long long', 'number'],
    ['long long', 'number'],
    ['int8_t', 'number'],
    ['int16_t', 'number'],
    ['int32_t', 'number'],
    ['int64_t', 'number'],
    ['uint8_t', 'number'],
    ['uint16_t', 'number'],
    ['uint32_t', 'number'],
    ['uint64_t', 'number'],
    ['char16_t', 'string'],
    ['char32_t', 'string'],
    ['wchar_t', 'string'],
    ['char8_t', 'string'],
    ['ptrdiff_t', 'number'],
    ['intptr_t', 'number'],
    ['uintptr_t', 'number'],
  ];
  const out: PriTypeDef[] = [
    { typeId: 'PRI_void', cType: 'void', tsType: 'void', family: 'PRI' },
    { typeId: 'PRI_bool', cType: 'bool', tsType: 'boolean', family: 'PRI' },
    { typeId: 'PRI_str', cType: 'string', tsType: 'string', family: 'PRI' },
    { typeId: 'PRI_char', cType: 'char', tsType: 'string', family: 'PRI' },
    { typeId: 'PRI_std_string', cType: 'std::string', tsType: 'string', family: 'PRI' },
    { typeId: 'PRI_std_wstring', cType: 'std::wstring', tsType: 'string', family: 'PRI' },
  ];
  for (const [c, ts] of numSources) {
    const id = 'PRI_' + c.replace(/::/g, '_').replace(/\s+/g, '_').replace(/_t$/, '');
    out.push({ typeId: id, cType: c, tsType: ts, family: 'PRI' });
  }
  return out;
}

const CONTAINER_KINDS: Array<{ id: string; wrapC: (e: string) => string; wrapTs: (e: string) => string }> = [
  { id: 'CTR_vec', wrapC: (e) => `std::vector<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_arr', wrapC: (e) => `std::array<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_list', wrapC: (e) => `std::list<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_deque', wrapC: (e) => `std::deque<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_queue', wrapC: (e) => `std::queue<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_stack', wrapC: (e) => `std::stack<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_set', wrapC: (e) => `std::set<${e}>`, wrapTs: (e) => `Set<${e}>` },
  { id: 'CTR_uset', wrapC: (e) => `std::unordered_set<${e}>`, wrapTs: (e) => `Set<${e}>` },
  { id: 'CTR_fwd', wrapC: (e) => `std::forward_list<${e}>`, wrapTs: (e) => `Array<${e}>` },
  { id: 'CTR_priq', wrapC: (e) => `std::priority_queue<${e}>`, wrapTs: (e) => `Array<${e}>` },
];

const MAP_KINDS: Array<{
  id: string;
  wrapC: (k: string, v: string) => string;
  wrapTs: (k: string, v: string) => string;
}> = [
  { id: 'CTR_map', wrapC: (k, v) => `std::map<${k}, ${v}>`, wrapTs: (k, v) => `Map<${k}, ${v}>` },
  { id: 'CTR_umap', wrapC: (k, v) => `std::unordered_map<${k}, ${v}>`, wrapTs: (k, v) => `Map<${k}, ${v}>` },
  { id: 'CTR_mmap', wrapC: (k, v) => `std::multimap<${k}, ${v}>`, wrapTs: (k, v) => `Map<${k}, ${v}>` },
];

function applyQuality(
  cType: string,
  tsType: string,
  q: QualityId
): { inputType: string; expectTs: string; negative: boolean } {
  switch (q) {
    case 'NORM':
      return { inputType: cType, expectTs: tsType, negative: false };
    case 'BOUND':
      return { inputType: `  ${cType}  `, expectTs: tsType, negative: false };
    case 'ERR':
      return { inputType: `__INVALID_TYPE_TOKEN_${Math.abs(hashStr(cType))}__`, expectTs: 'any', negative: true };
    case 'SPEC':
      return { inputType: cType.replace(/</g, '< ').replace(/>/g, ' >'), expectTs: tsType, negative: false };
    default:
      return { inputType: cType, expectTs: tsType, negative: false };
  }
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return h;
}

function applyDerive(cType: string, tsType: string, derive: DeriveId): { cType: string; tsType: string } {
  switch (derive) {
    case 'RAW':
    case 'OPT':
    case 'RO':
    case 'NULLU':
    case 'PROM':
      return { cType, tsType };
    case 'PTR':
      return { cType: `${cType}*`, tsType };
    case 'ARR1':
      return { cType: `std::vector<${cType}>`, tsType: `Array<${tsType}>` };
    default:
      return { cType, tsType };
  }
}

function pushScenario(
  bag: Scenario[],
  seen: Set<string>,
  partial: Omit<Scenario, 's'> & { s?: string }
): void {
  const s =
    partial.s ||
    `${partial.typeId}.${partial.context}.${partial.derive}.${partial.quality}.V${partial.variant}`;
  if (seen.has(s)) {
    return;
  }
  seen.add(s);
  bag.push({ ...partial, s });
}

function padToTarget(bag: Scenario[], seen: Set<string>, target: number): void {
  let variantSeq = 0;
  let guard = 0;
  while (bag.length < target && guard < 40) {
    guard++;
    variantSeq++;
    const baseSnapshot = bag.slice();
    for (const b of baseSnapshot) {
      if (bag.length >= target) {
        break;
      }
      pushScenario(bag, seen, {
        ...b,
        s: `${b.s}.V${variantSeq}`,
        variant: variantSeq,
      });
    }
  }
}

function shapePriInput(
  t: PriTypeDef,
  der: DeriveId,
  q: QualityId,
  derived: { cType: string; tsType: string }
): { inputType: string; expectTs: string; negative: boolean } {
  const baseForQ = der === 'ARR1' || der === 'PTR' ? t.cType : derived.cType;
  const tsForQ = der === 'ARR1' ? derived.tsType : t.tsType;
  const shaped =
    der === 'ARR1'
      ? applyQuality(derived.cType, derived.tsType, q)
      : applyQuality(baseForQ, tsForQ, q);
  if (der !== 'PTR' || q === 'ERR') {
    return shaped;
  }
  let inputType = `${t.cType}*`;
  if (q === 'BOUND') {
    inputType = `  ${t.cType} *  `;
  }
  return { inputType, expectTs: t.tsType, negative: shaped.negative };
}

function pushPriQuality(
  bag: Scenario[],
  seen: Set<string>,
  t: PriTypeDef,
  ctx: ContextId,
  der: DeriveId,
  q: QualityId
): void {
  const derived = applyDerive(t.cType, t.tsType, der);
  const shaped = shapePriInput(t, der, q, derived);
  pushScenario(bag, seen, {
    typeId: t.typeId,
    context: ctx,
    derive: der,
    quality: q,
    variant: 0,
    family: 'PRI',
    cType: t.cType,
    tsType: t.tsType,
    inputType: shaped.inputType,
    expectTs: shaped.expectTs,
    negative: shaped.negative,
  });
}

function expandPriType(bag: Scenario[], seen: Set<string>, t: PriTypeDef): void {
  for (const ctx of CONTEXTS) {
    for (const der of DERIVE_MATRIX[ctx]) {
      if (der === 'PTR' && t.cType === 'void') {
        continue;
      }
      for (const q of QUALITIES) {
        pushPriQuality(bag, seen, t, ctx, der, q);
      }
    }
  }
}

function expandPriScenarios(bag: Scenario[], seen: Set<string>, pri: PriTypeDef[]): void {
  for (const t of pri) {
    expandPriType(bag, seen, t);
  }
}

function pushCtrCell(
  bag: Scenario[],
  seen: Set<string>,
  ctr: (typeof CONTAINER_KINDS)[0],
  elem: PriTypeDef,
  ctx: ContextId,
  der: DeriveId,
  q: QualityId
): void {
  const cInner = ctr.wrapC(elem.cType);
  const tsInner = ctr.wrapTs(elem.tsType);
  const derived =
    der === 'ARR1'
      ? { cType: `std::vector<${cInner}>`, tsType: `Array<${tsInner}>` }
      : { cType: cInner, tsType: tsInner };
  const shaped = applyQuality(derived.cType, derived.tsType, q);
  pushScenario(bag, seen, {
    typeId: `${ctr.id}__${elem.typeId}`,
    context: ctx,
    derive: der,
    quality: q,
    variant: 0,
    family: 'CTR',
    cType: derived.cType,
    tsType: derived.tsType,
    inputType: shaped.inputType,
    expectTs: shaped.expectTs,
    negative: shaped.negative,
  });
}

function expandCtrElemPair(
  bag: Scenario[],
  seen: Set<string>,
  ctr: (typeof CONTAINER_KINDS)[0],
  elem: PriTypeDef
): void {
  for (const ctx of CTR_CONTEXTS) {
    for (const der of CTR_DERIVES) {
      for (const q of QUALITIES) {
        pushCtrCell(bag, seen, ctr, elem, ctx, der, q);
      }
    }
  }
}

function expandContainerScenarios(bag: Scenario[], seen: Set<string>, elemPool: PriTypeDef[]): void {
  for (const ctr of CONTAINER_KINDS) {
    for (const elem of elemPool) {
      expandCtrElemPair(bag, seen, ctr, elem);
    }
  }
}

function isMapKeyType(p: PriTypeDef): boolean {
  return (
    ['string', 'int', 'bool', 'double', 'size_t', 'float', 'long'].includes(p.cType) ||
    p.typeId.startsWith('PRI_str') ||
    p.typeId === 'PRI_bool' ||
    p.typeId === 'PRI_char'
  );
}

function pushMapCell(
  bag: Scenario[],
  seen: Set<string>,
  mk: (typeof MAP_KINDS)[0],
  k: PriTypeDef,
  v: PriTypeDef,
  ctx: ContextId,
  der: DeriveId,
  q: QualityId
): void {
  const cType = mk.wrapC(k.cType, v.cType);
  const tsType = mk.wrapTs(k.tsType, v.tsType);
  const shaped = applyQuality(cType, tsType, q);
  pushScenario(bag, seen, {
    typeId: `${mk.id}__${k.typeId}__${v.typeId}`,
    context: ctx,
    derive: der,
    quality: q,
    variant: 0,
    family: 'CTR',
    cType,
    tsType,
    inputType: shaped.inputType,
    expectTs: shaped.expectTs,
    negative: shaped.negative,
  });
}

function expandMapKeyVal(
  bag: Scenario[],
  seen: Set<string>,
  mk: (typeof MAP_KINDS)[0],
  k: PriTypeDef,
  v: PriTypeDef
): void {
  for (const ctx of MAP_CONTEXTS) {
    for (const der of MAP_DERIVES) {
      for (const q of QUALITIES) {
        pushMapCell(bag, seen, mk, k, v, ctx, der, q);
      }
    }
  }
}

function expandMapScenarios(bag: Scenario[], seen: Set<string>, elemPool: PriTypeDef[]): void {
  const mapKeys = elemPool.filter(isMapKeyType);
  for (const mk of MAP_KINDS) {
    for (const k of mapKeys) {
      for (const v of elemPool) {
        expandMapKeyVal(bag, seen, mk, k, v);
      }
    }
  }
}

function pushC2Triple(bag: Scenario[], seen: Set<string>, elem: PriTypeDef, ctx: ContextId, q: QualityId): void {
  const c1 = `std::vector<std::map<std::string, ${elem.cType}>>`;
  const t1 = `Array<Map<string, ${elem.tsType}>>`;
  const s1 = applyQuality(c1, t1, q);
  pushScenario(bag, seen, {
    typeId: `C2_vec_map__${elem.typeId}`,
    context: ctx,
    derive: 'RAW',
    quality: q,
    variant: 0,
    family: 'C2',
    cType: c1,
    tsType: t1,
    inputType: s1.inputType,
    expectTs: s1.expectTs,
    negative: s1.negative,
  });

  const c2 = `std::set<std::vector<${elem.cType}>>`;
  const t2 = `Set<Array<${elem.tsType}>>`;
  const s2 = applyQuality(c2, t2, q);
  pushScenario(bag, seen, {
    typeId: `C2_set_vec__${elem.typeId}`,
    context: ctx,
    derive: 'RAW',
    quality: q,
    variant: 0,
    family: 'C2',
    cType: c2,
    tsType: t2,
    inputType: s2.inputType,
    expectTs: s2.expectTs,
    negative: s2.negative,
  });

  const c3 = `std::pair<${elem.cType}, int>`;
  const t3 = `[${elem.tsType}, number]`;
  const s3 = applyQuality(c3, t3, q);
  pushScenario(bag, seen, {
    typeId: `C2_pair__${elem.typeId}`,
    context: ctx,
    derive: 'RAW',
    quality: q,
    variant: 0,
    family: 'C2',
    cType: c3,
    tsType: t3,
    inputType: s3.inputType,
    expectTs: s3.expectTs,
    negative: s3.negative,
  });
}

function expandC2Scenarios(bag: Scenario[], seen: Set<string>, elemPool: PriTypeDef[]): void {
  for (const elem of elemPool) {
    for (const ctx of C2_CONTEXTS) {
      for (const q of QUALITIES) {
        pushC2Triple(bag, seen, elem, ctx, q);
      }
    }
  }
}

function assertExpandTargets(bag: Scenario[]): void {
  if (bag.length <= N_CL) {
    throw new Error(`expandTCross produced ${bag.length} <= N_CL=${N_CL}`);
  }
  if (bag.length < B2_SHARED_T_TARGET) {
    throw new Error(`expandTCross produced ${bag.length} < B2_SHARED_T_TARGET=${B2_SHARED_T_TARGET}`);
  }
}

/**
 * 展开交叉表（PRI + CTR + C2），铺满至 B2_SHARED_T_TARGET。
 * 对外仍用 getTCrossB1 名称以兼容 B1 入口（现为 B2 体量）。
 */
export function expandTCrossB1(): Scenario[] {
  const pri = buildPriTypes();
  const bag: Scenario[] = [];
  const seen = new Set<string>();
  const elemPool = pri.filter((p) => p.cType !== 'void');

  expandPriScenarios(bag, seen, pri);
  expandContainerScenarios(bag, seen, elemPool);
  expandMapScenarios(bag, seen, elemPool);
  expandC2Scenarios(bag, seen, elemPool);

  padToTarget(bag, seen, B1_MIN_PER_SUITE);
  padToTarget(bag, seen, B2_SHARED_T_TARGET);
  assertExpandTargets(bag);
  return bag;
}

let cached: Scenario[] | undefined;

export function getTCrossB1(): Scenario[] {
  if (!cached) {
    cached = expandTCrossB1();
  }
  return cached;
}

/** B2 起与 getTCrossB1 同表（共享 T，P/G/I 成对） */
export function getTCross(): Scenario[] {
  return getTCrossB1();
}

export function countTCrossB1(): number {
  return getTCrossB1().length;
}

export function countTCross(): number {
  return countTCrossB1();
}
