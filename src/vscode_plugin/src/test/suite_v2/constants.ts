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

/** utils_static 全量 it() 基线（2026-08-05 本地统计），设计冻结不可下调 */
export const N_CL = 183726;

/** B1 出口：P/G/I 每套 ≥ 5 万（框架可统计） */
export const B1_MIN_PER_SUITE = 50000;

/** B2 出口：每套严格超过 N_CL */
export const B2_MIN_PER_SUITE = N_CL + 1;

/**
 * B2 共享交叉表目标：P=G=I=|T| 时需 ≥ TARGET_I，才能同时满足
 * |P|≥190k / |G|≥195k / |I|≥200k 与合计 ≥585k（3×200k=600k）。
 */
export const B2_SHARED_T_TARGET = 200000;

/** 设计终态下限（B2+） */
export const TARGET_P = 190000;
export const TARGET_G = 195000;
export const TARGET_I = 200000;
export const TARGET_TOTAL = 585000;
