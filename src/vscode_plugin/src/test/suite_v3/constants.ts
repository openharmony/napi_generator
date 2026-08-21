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

/** 默认子集：共享表前 N 条 → P/G/I 各 N 条物理 it */
export const SUITE_V3_DEFAULT_LIMIT = 300;

/** 单文件约 CL 方法级体量 */
export const SUITE_V3_MAX_IT_PER_FILE = 100;

/** 子集存在性下限（每套） */
export const SUITE_V3_SAMPLE_MIN_PER_SUITE = 1;

/** 复用设计基线（全量 bulk 门禁） */
export { N_CL } from '../suite_v2/constants';
