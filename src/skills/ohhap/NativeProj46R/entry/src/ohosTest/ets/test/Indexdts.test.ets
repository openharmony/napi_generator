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

import { hilog } from '@kit.PerformanceAnalysisKit';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';
import lib from 'libentry.so';
import {
  MAX, MIN, HILOG_DOMAIN, TEST_FILTER, FLOAT_TOLERANCE,
  VAL_0, VAL_1, VAL_2, VAL_3, VAL_4, VAL_5, VAL_6, VAL_7, VAL_8, VAL_9,
  VAL_10, VAL_11, VAL_12, VAL_13, VAL_14, VAL_15, VAL_17, VAL_18, VAL_20,
  VAL_22, VAL_30, VAL_33, VAL_34, VAL_42, VAL_44, VAL_46, VAL_50, VAL_60,
  VAL_55, VAL_56, VAL_66, VAL_77, VAL_78, VAL_88, VAL_99, VAL_100, VAL_110,
  VAL_111, VAL_121, VAL_123, VAL_134, VAL_165, VAL_200, VAL_300, VAL_3000,
  VAL_456, VAL_579, VAL_789, VAL_900, VAL_999, VAL_1000, VAL_1001, VAL_2000,
  VAL_2000000, VAL_999999, VAL_1000000, VAL_500000,
  NEG_1, NEG_2, NEG_3, NEG_5, NEG_7, NEG_8, NEG_9, NEG_10, NEG_14, NEG_20,
  NEG_30, NEG_42, NEG_50, NEG_100, NEG_200, NEG_300, NEG_999, NEG_1000, NEG_4,
  F_0_1, F_0_2, F_0_3, F_1_5, F_2_5, F_0_5, F_NEG_0_5, F_1_1, F_2_2, F_3_3,
  F_10_5, F_NEG_5_5, F_3_14, F_2_86, F_0_001, F_0_002, F_0_003,
  F_NEG_1_5, F_NEG_2_5, STRESS_100, STRESS_50, STRESS_1000
} from './constant';

export default function indexdtsTest() {
  describe('IndexdtsTest', () => {
    // Defines a test suite. Two parameters are supported: test suite name and test suite function.
    beforeAll(() => {
      // Presets an action, which is performed only once before all test cases of the test suite start.
      // This API supports only one parameter: preset action function.
    })
    beforeEach(() => {
      // Presets an action, which is performed before each unit test case starts.
      // The number of execution times is the same as the number of test cases defined by **it**.
      // This API supports only one parameter: preset action function.
    })
    afterEach(() => {
      // Presets a clear action, which is performed after each unit test case ends.
      // The number of execution times is the same as the number of test cases defined by **it**.
      // This API supports only one parameter: clear action function.
    })
    afterAll(() => {
      // Presets a clear action, which is performed after all test cases of the test suite end.
      // This API supports only one parameter: clear action function.
    })

    // ========== 1. 零与恒等 (0, identity) ==========
    it('add_tc_001_zero_zero', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_001_zero_zero');
      let a = VAL_0;
      let b = VAL_0;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_002_zero_positive', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_002_zero_positive');
      let a = VAL_0;
      let b = VAL_1;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(VAL_1);
    })

    it('add_tc_003_positive_zero', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_003_positive_zero');
      let a = VAL_1;
      let b = VAL_0;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(VAL_1);
    })

    it('add_tc_004_zero_negative', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_004_zero_negative');
      let a = VAL_0;
      let b = NEG_1;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(NEG_1);
    })

    it('add_tc_005_negative_zero', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_005_negative_zero');
      let a = NEG_1;
      let b = VAL_0;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(NEG_1);
    })

    it('add_tc_006_zero_max_safe', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_006_zero_max_safe');
      let a = 0;
      let b = MAX;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(MAX);
    })

    it('add_tc_007_max_safe_zero', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_007_max_safe_zero');
      let a = MAX;
      let b = VAL_0;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(MAX);
    })

    it('add_tc_008_zero_min_safe', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_008_zero_min_safe');
      let a = 0;
      let b = MIN;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(MIN);
    })

    it('add_tc_009_min_safe_zero', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_009_min_safe_zero');
      let a = MIN;
      let b = VAL_0;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(MIN);
    })

    it('add_tc_010_zero_large', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_010_zero_large');
      let a = VAL_0;
      let b = VAL_999999;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(VAL_999999);
    })

    // ========== 2. 正+正 正常值 ==========
    it('add_tc_011_pos_small', TEST_FILTER, () => {
      // Test case: name, filter, test function.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_011_pos_small');
      let a = VAL_1;
      let b = VAL_1;
      let result = lib.add(a, b);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(result).assertEqual(VAL_2);
    })

    it('add_tc_012_pos_small_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_012_pos_small_2');
      let a = VAL_2;
      let b = VAL_3;
      let result = lib.add(a, b);
      // Compare return value with expected value.
      expect(result).assertEqual(VAL_5);
    })

    it('add_tc_013_pos_medium', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_013_pos_medium');
      let a = VAL_10;
      let b = VAL_20;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_30);
    })

    it('add_tc_014_pos_medium_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_014_pos_medium_2');
      let a = VAL_100;
      let b = VAL_200;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_300);
    })

    it('add_tc_015_pos_large', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_015_pos_large');
      let a = VAL_1000;
      let b = VAL_2000;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_3000);
    })

    it('add_tc_016_pos_999_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_016_pos_999_1');
      let a = VAL_999;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_1000);
    })

    it('add_tc_017_pos_1_999', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_017_pos_1_999');
      let a = VAL_1;
      let b = VAL_999;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_1000);
    })

    it('add_tc_018_pos_million', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_018_pos_million');
      let a = VAL_1000000;
      let b = VAL_1000000;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_2000000);
    })

    it('add_tc_019_pos_max_plus_0', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_019_pos_max_plus_0');
      let a = MAX;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX);
    })

    it('add_tc_020_pos_1_max', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_020_pos_1_max');
      let a = VAL_1;
      let b = MAX;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX + 1);
    })

    it('add_tc_021_pos_max_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_021_pos_max_1');
      let a = MAX;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX + 1);
    })

    it('add_tc_022_pos_same', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_022_pos_same');
      let a = VAL_7;
      let b = VAL_7;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_14);
    })

    it('add_tc_023_pos_3_5', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_023_pos_3_5');
      let a = VAL_3;
      let b = VAL_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_8);
    })

    it('add_tc_024_pos_12_34', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_024_pos_12_34');
      let a = VAL_12;
      let b = VAL_34;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_46);
    })

    it('add_tc_025_pos_56_78', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_025_pos_56_78');
      let a = VAL_56;
      let b = VAL_78;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_134);
    })

    // ========== 3. 负+负 ==========
    it('add_tc_026_neg_neg_small', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_026_neg_neg_small');
      let a = NEG_1;
      let b = NEG_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_2);
    })

    it('add_tc_027_neg_neg_2_3', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_027_neg_neg_2_3');
      let a = NEG_2;
      let b = NEG_3;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_5);
    })

    it('add_tc_028_neg_neg_10_20', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_028_neg_neg_10_20');
      let a = NEG_10;
      let b = NEG_20;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_30);
    })

    it('add_tc_029_neg_neg_100_200', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_029_neg_neg_100_200');
      let a = NEG_100;
      let b = NEG_200;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_300);
    })

    it('add_tc_030_neg_999_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_030_neg_999_1');
      let a = -999;
      let b = NEG_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_1000);
    })

    it('add_tc_031_neg_1_999', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_031_neg_1_999');
      let a = NEG_1;
      let b = -999;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_1000);
    })

    it('add_tc_032_neg_min_0', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_032_neg_min_0');
      let a = MIN;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN);
    })

    it('add_tc_033_neg_min_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_033_neg_min_1');
      let a = MIN;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN + 1);
    })

    it('add_tc_034_neg_1_min', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_034_neg_1_min');
      let a = VAL_1;
      let b = MIN;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN + 1);
    })

    it('add_tc_035_neg_min_min', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_035_neg_min_min');
      let a = MIN;
      let b = MIN;
      let result = lib.add(a, b);
      expect(result).assertEqual(2 * MIN);
    })

    it('add_tc_036_neg_7_7', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_036_neg_7_7');
      let a = NEG_7;
      let b = NEG_7;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_14);
    })

    it('add_tc_037_neg_50_50', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_037_neg_50_50');
      let a = NEG_50;
      let b = NEG_50;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_100);
    })

    // ========== 4. 正+负 / 负+正 ==========
    it('add_tc_038_mixed_zero_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_038_mixed_zero_1');
      let a = VAL_1;
      let b = NEG_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_039_mixed_zero_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_039_mixed_zero_2');
      let a = NEG_1;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_040_mixed_pos_5_3', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_040_mixed_pos_5_3');
      let a = VAL_5;
      let b = NEG_3;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_2);
    })

    it('add_tc_041_mixed_pos_3_5', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_041_mixed_pos_3_5');
      let a = NEG_3;
      let b = VAL_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_2);
    })

    it('add_tc_042_mixed_10_10', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_042_mixed_10_10');
      let a = VAL_10;
      let b = NEG_10;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_043_mixed_10_10_comm', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_043_mixed_10_10_comm');
      let a = NEG_10;
      let b = VAL_10;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_044_mixed_100_50', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_044_mixed_100_50');
      let a = VAL_100;
      let b = NEG_50;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_50);
    })

    it('add_tc_045_mixed_50_100', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_045_mixed_50_100');
      let a = NEG_50;
      let b = VAL_100;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_50);
    })

    it('add_tc_046_mixed_max_neg_max', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_046_mixed_max_neg_max');
      let a = MAX;
      let b = -MAX;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_047_mixed_neg_max_max', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_047_mixed_neg_max_max');
      let a = -MAX;
      let b = MAX;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_048_mixed_min_neg_min', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_048_mixed_min_neg_min');
      let a = MIN;
      let b = -MIN;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_049_mixed_17_8', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_049_mixed_17_8');
      let a = VAL_17;
      let b = NEG_8;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_9);
    })

    it('add_tc_050_mixed_8_17', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_050_mixed_8_17');
      let a = NEG_8;
      let b = VAL_17;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_9);
    })

    // ========== 5. 边界值 (boundary) ==========
    it('add_tc_051_bound_max_0', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_051_bound_max_0');
      let a = MAX;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX);
    })

    it('add_tc_052_bound_min_0', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_052_bound_min_0');
      let a = MIN;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN);
    })

    it('add_tc_053_bound_max_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_053_bound_max_1');
      let a = MAX;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX + 1);
    })

    it('add_tc_054_bound_1_max', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_054_bound_1_max');
      let a = VAL_1;
      let b = MAX;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX + 1);
    })

    it('add_tc_055_bound_min_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_055_bound_min_1');
      let a = MIN;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN + 1);
    })

    it('add_tc_056_bound_1_min', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_056_bound_1_min');
      let a = VAL_1;
      let b = MIN;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN + 1);
    })

    it('add_tc_057_bound_max_neg1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_057_bound_max_neg1');
      let a = MAX;
      let b = NEG_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX - 1);
    })

    it('add_tc_058_bound_neg1_max', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_058_bound_neg1_max');
      let a = NEG_1;
      let b = MAX;
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX - 1);
    })

    it('add_tc_059_bound_min_neg1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_059_bound_min_neg1');
      let a = MIN;
      let b = NEG_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN - 1);
    })

    it('add_tc_060_bound_neg1_min', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_060_bound_neg1_min');
      let a = NEG_1;
      let b = MIN;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN - 1);
    })

    it('add_tc_061_bound_max_half', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_061_bound_max_half');
      let a = MAX;
      let b = -(MAX >> 1);
      let result = lib.add(a, b);
      expect(result).assertEqual(MAX - (MAX >> 1));
    })

    it('add_tc_062_bound_min_half', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_062_bound_min_half');
      let a = MIN;
      let b = (-MIN) >> 1;
      let result = lib.add(a, b);
      expect(result).assertEqual(MIN + ((-MIN) >> 1));
    })

    // ========== 6. 小数/浮点 ==========
    it('add_tc_063_float_1_5_2_5', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_063_float_1_5_2_5');
      let a = F_1_5;
      let b = F_2_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_4);
    })

    it('add_tc_064_float_0_1_0_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_064_float_0_1_0_2');
      let a = F_0_1;
      let b = F_0_2;
      let result = lib.add(a, b);
      // Compare return value with expected value (float tolerance).
      expect((Math.abs(result - F_0_3) < FLOAT_TOLERANCE)).assertEqual(true);
    })

    it('add_tc_065_float_0_0', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_065_float_0_0');
      let a = VAL_0;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_066_float_neg_05_05', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_066_float_neg_05_05');
      let a = F_NEG_0_5;
      let b = F_0_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_067_float_1_1_2_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_067_float_1_1_2_2');
      let a = F_1_1;
      let b = F_2_2;
      let result = lib.add(a, b);
      // Compare return value with expected value (float tolerance).
      expect((Math.abs(result - F_3_3) < FLOAT_TOLERANCE)).assertEqual(true);
    })

    it('add_tc_068_float_10_5_5_5', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_068_float_10_5_5_5');
      let a = F_10_5;
      let b = F_NEG_5_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_5);
    })

    it('add_tc_069_float_3_14_2_86', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_069_float_3_14_2_86');
      let a = F_3_14;
      let b = F_2_86;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_6);
    })

    it('add_tc_070_float_small', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_070_float_small');
      let a = F_0_001;
      let b = F_0_002;
      let result = lib.add(a, b);
      expect(result).assertEqual(F_0_003);
    })

    it('add_tc_071_float_neg', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_071_float_neg');
      let a = F_NEG_1_5;
      let b = F_NEG_2_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_4);
    })

    it('add_tc_072_float_mixed', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_072_float_mixed');
      let a = F_2_5;
      let b = F_NEG_1_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_1);
    })

    // ========== 7. 交换律 ==========
    it('add_tc_073_comm_7_8', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_073_comm_7_8');
      let a = VAL_7;
      let b = VAL_8;
      let result1 = lib.add(a, b);
      let result2 = lib.add(b, a);
      // Compare return value with expected value.
      expect(result1).assertEqual(result2);
    })

    it('add_tc_074_comm_neg3_4', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_074_comm_neg3_4');
      let a = NEG_3;
      let b = VAL_4;
      let result1 = lib.add(a, b);
      let result2 = lib.add(b, a);
      expect(result1).assertEqual(result2);
    })

    it('add_tc_075_comm_max_min', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_075_comm_max_min');
      let a = MAX;
      let b = MIN;
      let result1 = lib.add(a, b);
      let result2 = lib.add(b, a);
      expect(result1).assertEqual(result2);
    })

    it('add_tc_076_comm_100_200', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_076_comm_100_200');
      let a = VAL_100;
      let b = VAL_200;
      let result1 = lib.add(a, b);
      let result2 = lib.add(b, a);
      expect(result1).assertEqual(result2);
    })

    it('add_tc_077_comm_neg_10_20', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_077_comm_neg_10_20');
      let a = NEG_10;
      let b = VAL_20;
      let result1 = lib.add(a, b);
      let result2 = lib.add(b, a);
      expect(result1).assertEqual(result2);
    })

    // ========== 8. 结合/链式 ==========
    it('add_tc_078_assoc_1_2_3', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_078_assoc_1_2_3');
      let result1 = lib.add(lib.add(VAL_1, VAL_2), VAL_3);
      let result2 = lib.add(VAL_1, lib.add(VAL_2, VAL_3));
      expect(result1).assertEqual(result2);
    })

    it('add_tc_079_assoc_10_20_30', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_079_assoc_10_20_30');
      let a = VAL_10;
      let b = VAL_20;
      let c = VAL_30;
      let result = lib.add(lib.add(a, b), c);
      expect(result).assertEqual(VAL_60);
    })

    it('add_tc_080_assoc_1_2_3_val', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_080_assoc_1_2_3_val');
      let a = VAL_1;
      let b = VAL_2;
      let c = VAL_3;
      let result = lib.add(lib.add(a, b), c);
      expect(result).assertEqual(VAL_6);
    })

    it('add_tc_081_assoc_4_5_6', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_081_assoc_4_5_6');
      let a = VAL_4;
      let b = VAL_5;
      let c = VAL_6;
      let result = lib.add(a, lib.add(b, c));
      expect(result).assertEqual(VAL_15);
    })

    it('add_tc_082_assoc_chain', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_082_assoc_chain');
      let result = lib.add(lib.add(VAL_1, VAL_2), lib.add(VAL_3, VAL_4));
      expect(result).assertEqual(VAL_10);
    })

    // ========== 9. 单数字全覆盖 (1~9 + 1~9) ==========
    it('add_tc_083_digit_1_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_083_digit_1_2');
      let a = VAL_1;
      let b = VAL_2;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_3);
    })

    it('add_tc_084_digit_2_3', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_084_digit_2_3');
      let a = VAL_2;
      let b = VAL_3;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_5);
    })

    it('add_tc_085_digit_3_4', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_085_digit_3_4');
      let a = VAL_3;
      let b = VAL_4;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_7);
    })

    it('add_tc_086_digit_4_5', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_086_digit_4_5');
      let a = VAL_4;
      let b = VAL_5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_9);
    })

    it('add_tc_087_digit_5_6', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_087_digit_5_6');
      let a = VAL_5;
      let b = VAL_6;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_11);
    })

    it('add_tc_088_digit_6_7', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_088_digit_6_7');
      let a = VAL_6;
      let b = VAL_7;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_13);
    })

    it('add_tc_089_digit_7_8', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_089_digit_7_8');
      let a = VAL_7;
      let b = VAL_8;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_15);
    })

    it('add_tc_090_digit_8_9', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_090_digit_8_9');
      let a = VAL_8;
      let b = VAL_9;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_17);
    })

    it('add_tc_091_digit_9_9', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_091_digit_9_9');
      let a = VAL_9;
      let b = VAL_9;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_18);
    })

    it('add_tc_092_digit_neg_1_2', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_092_digit_neg_1_2');
      let a = NEG_1;
      let b = -2;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_3);
    })

    it('add_tc_093_digit_neg_5_5', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_093_digit_neg_5_5');
      let a = -5;
      let b = 5;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_0);
    })

    // ========== 10. 压力/重复 ==========
    it('add_tc_094_stress_1_1_100', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_094_stress_1_1_100');
      let a = VAL_1;
      let b = VAL_1;
      for (let i = VAL_0; i < STRESS_100; i++) {
        let result = lib.add(a, b);
        expect(result).assertEqual(VAL_2);
      }
    })

    it('add_tc_095_stress_0_0_100', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_095_stress_0_0_100');
      let a = VAL_0;
      let b = VAL_0;
      for (let i = VAL_0; i < STRESS_100; i++) {
        let result = lib.add(a, b);
        expect(result).assertEqual(VAL_0);
      }
    })

    it('add_tc_096_stress_neg_50', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_096_stress_neg_50');
      let a = NEG_1;
      let b = NEG_1;
      for (let i = VAL_0; i < STRESS_50; i++) {
        let result = lib.add(a, b);
        expect(result).assertEqual(NEG_2);
      }
    })

    it('add_tc_097_stress_2_3_50', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_097_stress_2_3_50');
      let a = VAL_2;
      let b = VAL_3;
      for (let i = VAL_0; i < STRESS_50; i++) {
        let result = lib.add(a, b);
        expect(result).assertEqual(VAL_5);
      }
    })

    it('add_tc_098_stress_1000_once', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_098_stress_1000_once');
      let sum = VAL_0;
      let step = VAL_1;
      for (let i = VAL_0; i < STRESS_1000; i++) {
        sum = lib.add(sum, step);
      }
      expect(sum).assertEqual(VAL_1000);
    })

    // ========== 11. 更多正常值与输出验证 ==========
    it('add_tc_099_normal_11_22', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_099_normal_11_22');
      let a = VAL_11;
      let b = VAL_22;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_33);
    })

    it('add_tc_100_normal_33_44', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_100_normal_33_44');
      let a = VAL_33;
      let b = VAL_44;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_77);
    })

    it('add_tc_101_normal_55_66', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_101_normal_55_66');
      let a = VAL_55;
      let b = VAL_66;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_121);
    })

    it('add_tc_102_normal_77_88', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_102_normal_77_88');
      let a = VAL_77;
      let b = VAL_88;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_165);
    })

    it('add_tc_103_normal_99_11', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_103_normal_99_11');
      let a = VAL_99;
      let b = VAL_11;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_110);
    })

    it('add_tc_104_normal_123_456', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_104_normal_123_456');
      let a = VAL_123;
      let b = VAL_456;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_579);
    })

    it('add_tc_105_normal_789_111', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_105_normal_789_111');
      let a = VAL_789;
      let b = VAL_111;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_900);
    })

    it('add_tc_106_normal_1000_1', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_106_normal_1000_1');
      let a = VAL_1000;
      let b = VAL_1;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_1001);
    })

    it('add_tc_107_normal_0_0_repeat', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_107_normal_0_0_repeat');
      let a = VAL_0;
      let b = VAL_0;
      let result = lib.add(lib.add(a, b), VAL_0);
      expect(result).assertEqual(VAL_0);
    })

    it('add_tc_108_normal_identity', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_108_normal_identity');
      let a = VAL_42;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_42);
    })

    it('add_tc_109_normal_neg_identity', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_109_normal_neg_identity');
      let a = -42;
      let b = VAL_0;
      let result = lib.add(a, b);
      expect(result).assertEqual(NEG_42);
    })

    it('add_tc_110_normal_large_sum', TEST_FILTER, () => {
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'add_tc_110_normal_large_sum');
      let a = VAL_500000;
      let b = VAL_500000;
      let result = lib.add(a, b);
      expect(result).assertEqual(VAL_1000000);
    })
  })
}
