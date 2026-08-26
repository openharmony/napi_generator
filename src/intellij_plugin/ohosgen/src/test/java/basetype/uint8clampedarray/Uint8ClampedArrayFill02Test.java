/*
 * Copyright (c) 2026 Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package basetype.uint8clampedarray;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFill02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFill02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0100
     * @tc.name testUint8ClampedArrayFillTwo001
     * @tc.desc Verify arity=1 value number start/end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(7.0);
    assertEqual(7, arr.get(0));
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0200
     * @tc.name testUint8ClampedArrayFillTwo002
     * @tc.desc Verify fill element at arr[0] equals 0 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(9.0, 1);
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0300
     * @tc.name testUint8ClampedArrayFillTwo003
     * @tc.desc Verify fill element at arr[1] equals 5 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(5.0, 1, 3);
    assertEqual(5, arr.get(1));
    assertEqual(5, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0400
     * @tc.name testUint8ClampedArrayFillTwo004
     * @tc.desc Verify fill element at arr[2] equals 11 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(11.0, 0, 3);
    assertEqual(11, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0500
     * @tc.name testUint8ClampedArrayFillTwo005
     * @tc.desc Verify fill element at arr[0] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(0.0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0600
     * @tc.name testUint8ClampedArrayFillTwo006
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(255.0);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0700
     * @tc.name testUint8ClampedArrayFillTwo007
     * @tc.desc Verify fill element at arr[0] equals 1 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(1.0);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0800
     * @tc.name testUint8ClampedArrayFillTwo008
     * @tc.desc Verify fill element at arr[0] equals 127 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(127.0);
    assertEqual(127, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_0900
     * @tc.name testUint8ClampedArrayFillTwo009
     * @tc.desc Verify fill element at arr[0] equals 128 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(128.0);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1000
     * @tc.name testUint8ClampedArrayFillTwo010
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(-0.0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1100
     * @tc.name testUint8ClampedArrayFillTwo011
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(0.4);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1200
     * @tc.name testUint8ClampedArrayFillTwo012
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1300
     * @tc.name testUint8ClampedArrayFillTwo013
     * @tc.desc Verify fill element at arr[0] equals 1 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(0.9);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1400
     * @tc.name testUint8ClampedArrayFillTwo014
     * @tc.desc Verify fill element at arr[0] equals 2 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(1.5);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1500
     * @tc.name testUint8ClampedArrayFillTwo015
     * @tc.desc Verify fill element at arr[0] equals 2 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(2.5);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1600
     * @tc.name testUint8ClampedArrayFillTwo016
     * @tc.desc Verify fill element at arr[0] equals 128 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(127.5);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1700
     * @tc.name testUint8ClampedArrayFillTwo017
     * @tc.desc Verify fill element at arr[0] equals 128 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(128.5);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1800
     * @tc.name testUint8ClampedArrayFillTwo018
     * @tc.desc Verify fill element at arr[0] equals 254 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(254.5);
    assertEqual(254, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_1900
     * @tc.name testUint8ClampedArrayFillTwo019
     * @tc.desc Verify fill element at arr[0] equals 201 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(200.7);
    assertEqual(201, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2000
     * @tc.name testUint8ClampedArrayFillTwo020
     * @tc.desc Verify fill element at arr[0] equals 63 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(63.3);
    assertEqual(63, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2100
     * @tc.name testUint8ClampedArrayFillTwo021
     * @tc.desc Verify fill element at arr[0] equals 100 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(1e2);
    assertEqual(100, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2200
     * @tc.name testUint8ClampedArrayFillTwo022
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(256.0);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2300
     * @tc.name testUint8ClampedArrayFillTwo023
     * @tc.desc Verify value=2147483648.0(>INT_MAX) clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(2147483648.0);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2400
     * @tc.name testUint8ClampedArrayFillTwo024
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2500
     * @tc.name testUint8ClampedArrayFillTwo025
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(-1.0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2600
     * @tc.name testUint8ClampedArrayFillTwo026
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(-Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2700
     * @tc.name testUint8ClampedArrayFillTwo027
     * @tc.desc Verify value=Number.MIN_VALUE clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7});
    arr.fill(Double.MIN_VALUE);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2800
     * @tc.name testUint8ClampedArrayFillTwo028
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(-0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_2900
     * @tc.name testUint8ClampedArrayFillTwo029
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(Double.NaN);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3000
     * @tc.name testUint8ClampedArrayFillTwo030
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(255.4);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3100
     * @tc.name testUint8ClampedArrayFillTwo031
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(255.6);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3200
     * @tc.name testUint8ClampedArrayFillTwo032
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(255.9);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3300
     * @tc.name testUint8ClampedArrayFillTwo033
     * @tc.desc Verify fill element at arr[0] equals 0 for array [1, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 1});
    arr.fill(-0.4);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3400
     * @tc.name testUint8ClampedArrayFillTwo034
     * @tc.desc Verify fill element at arr[0] equals 0 for array [1, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 1});
    arr.fill(-0.9);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3500
     * @tc.name testUint8ClampedArrayFillTwo035
     * @tc.desc Verify fill element at arr[0] equals 8 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(8.0, 0);
    assertEqual(8, arr.get(0));
    assertEqual(8, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3600
     * @tc.name testUint8ClampedArrayFillTwo036
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 1, 1, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 1, 1, 1});
    arr.fill(4.0, 1);
    assertEqual(1, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(4, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3700
     * @tc.name testUint8ClampedArrayFillTwo037
     * @tc.desc Verify fill element at arr[2] equals 1 for array [1, 1, 1, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 1, 1, 1});
    arr.fill(2.0, 3);
    assertEqual(1, arr.get(2));
    assertEqual(2, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3800
     * @tc.name testUint8ClampedArrayFillTwo038
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 3);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_3900
     * @tc.name testUint8ClampedArrayFillTwo039
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 4);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4000
     * @tc.name testUint8ClampedArrayFillTwo040
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 2147483647);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4100
     * @tc.name testUint8ClampedArrayFillTwo041
     * @tc.desc Verify fill element at arr[0] equals 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(7.0, -1);
    assertEqual(0, arr.get(0));
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4200
     * @tc.name testUint8ClampedArrayFillTwo042
     * @tc.desc Verify fill element at arr[1] equals 0 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(6.0, -2);
    assertEqual(0, arr.get(1));
    assertEqual(6, arr.get(2));
    assertEqual(6, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4300
     * @tc.name testUint8ClampedArrayFillTwo043
     * @tc.desc Verify fill element at arr[0] equals 3 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(3.0, -3);
    assertEqual(3, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4400
     * @tc.name testUint8ClampedArrayFillTwo044
     * @tc.desc Verify fill element at arr[0] equals 2 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(2.0, -4);
    assertEqual(2, arr.get(0));
    assertEqual(2, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4500
     * @tc.name testUint8ClampedArrayFillTwo045
     * @tc.desc Verify fill element at arr[0] equals 5 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(5.0, -100);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4600
     * @tc.name testUint8ClampedArrayFillTwo046
     * @tc.desc Verify fill element at arr[0] equals 4 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(4.0, Integer.MIN_VALUE);
    assertEqual(4, arr.get(0));
    assertEqual(4, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4700
     * @tc.name testUint8ClampedArrayFillTwo047
     * @tc.desc Verify fill element at arr[2] equals 3 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(3.0, 0, 3);
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4800
     * @tc.name testUint8ClampedArrayFillTwo048
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(7.0, 0, 1);
    assertEqual(7, arr.get(0));
    assertEqual(0, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_4900
     * @tc.name testUint8ClampedArrayFillTwo049
     * @tc.desc Verify fill element at arr[2] equals 5 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(5.0, 0, 3);
    assertEqual(5, arr.get(2));
    assertEqual(0, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5000
     * @tc.name testUint8ClampedArrayFillTwo050
     * @tc.desc Verify fill element at arr[2] equals 6 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(6.0, 0, 4);
    assertEqual(6, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5100
     * @tc.name testUint8ClampedArrayFillTwo051
     * @tc.desc Verify fill element at arr[2] equals 8 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(8.0, 0, 2147483647);
    assertEqual(8, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5200
     * @tc.name testUint8ClampedArrayFillTwo052
     * @tc.desc Verify fill element at arr[2] equals 9 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(9.0, 0, -1);
    assertEqual(9, arr.get(2));
    assertEqual(0, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5300
     * @tc.name testUint8ClampedArrayFillTwo053
     * @tc.desc Verify fill element at arr[1] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(7.0, 0, -2);
    assertEqual(7, arr.get(1));
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5400
     * @tc.name testUint8ClampedArrayFillTwo054
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 0, -3);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5500
     * @tc.name testUint8ClampedArrayFillTwo055
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 0, -4);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5600
     * @tc.name testUint8ClampedArrayFillTwo056
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.fill(9.0, 0, Integer.MIN_VALUE);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5700
     * @tc.name testUint8ClampedArrayFillTwo057
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 0, 0);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5800
     * @tc.name testUint8ClampedArrayFillTwo058
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(99.0, 0, 0);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_5900
     * @tc.name testUint8ClampedArrayFillTwo059
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(99.0, 1, 1);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6000
     * @tc.name testUint8ClampedArrayFillTwo060
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(99.0, 2, 1);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6100
     * @tc.name testUint8ClampedArrayFillTwo061
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(99.0, 3, 0);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6200
     * @tc.name testUint8ClampedArrayFillTwo062
     * @tc.desc Verify start=-1 end=-2 no-op start>end
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, -1, -2);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6300
     * @tc.name testUint8ClampedArrayFillTwo063
     * @tc.desc Verify start=length end=length no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(9.0, 3, 3);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6400
     * @tc.name testUint8ClampedArrayFillTwo064
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.fill(9.0, 2147483647, 0);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6500
     * @tc.name testUint8ClampedArrayFillTwo065
     * @tc.desc Verify fill element at arr[1] equals 0 for array [0, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 0});
    arr.fill(8.0, -3, -1);
    assertEqual(0, arr.get(1));
    assertEqual(8, arr.get(2));
    assertEqual(8, arr.get(3));
    assertEqual(0, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6600
     * @tc.name testUint8ClampedArrayFillTwo066
     * @tc.desc Verify fill element at arr[0] equals 5 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(5.0, -4, 4);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6700
     * @tc.name testUint8ClampedArrayFillTwo067
     * @tc.desc Verify fill element at arr[0] equals 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(7.0, -2, 3);
    assertEqual(0, arr.get(0));
    assertEqual(7, arr.get(1));
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6800
     * @tc.name testUint8ClampedArrayFillTwo068
     * @tc.desc Verify fill ret equals arr for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray ret = arr.fill(5.0);
    assertEqual(arr, ret);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_6900
     * @tc.name testUint8ClampedArrayFillTwo069
     * @tc.desc Verify fill yields length 4 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray ret = arr.fill(1.0);
    assertEqual(4, ret.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7000
     * @tc.name testUint8ClampedArrayFillTwo070
     * @tc.desc Verify fill buffer reference matches for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray ret = arr.fill(1.0);
    assertEqual(arr.buffer(), ret.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7100
     * @tc.name testUint8ClampedArrayFillTwo071
     * @tc.desc Verify fill yields byteOffset arr.byteOffset for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray ret = arr.fill(2.0);
    assertEqual(arr.byteOffset(), ret.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7200
     * @tc.name testUint8ClampedArrayFillTwo072
     * @tc.desc Verify fill yields byteLength arr.byteLength for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray ret = arr.fill(3.0);
    assertEqual(arr.byteLength(), ret.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7300
     * @tc.name testUint8ClampedArrayFillTwo073
     * @tc.desc Verify fill element at ret[0] equals 1 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray ret = arr.fill(1.0, 0, 2).fill(2.0, 2, 4);
    assertEqual(1, ret.get(0));
    assertEqual(2, ret.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7400
     * @tc.name testUint8ClampedArrayFillTwo074
     * @tc.desc Verify fill ret equals arr for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray ret = arr.fill(9.0);
    assertEqual(arr, ret);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7500
     * @tc.name testUint8ClampedArrayFillTwo075
     * @tc.desc Verify fill ret equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray ret = arr.fill(99.0, 2, 1);
    assertEqual(arr, ret);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7600
     * @tc.name testUint8ClampedArrayFillTwo076
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(5.0);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7700
     * @tc.name testUint8ClampedArrayFillTwo077
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(5.0, 0);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7800
     * @tc.name testUint8ClampedArrayFillTwo078
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(5.0, 0, 0);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_7900
     * @tc.name testUint8ClampedArrayFillTwo079
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(5.0, 100);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8000
     * @tc.name testUint8ClampedArrayFillTwo080
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(5.0, -100);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8100
     * @tc.name testUint8ClampedArrayFillTwo081
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(Double.NaN);
    arr.fill(Double.POSITIVE_INFINITY);
    arr.fill(-Double.POSITIVE_INFINITY);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8200
     * @tc.name testUint8ClampedArrayFillTwo082
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(256.0, 1, 3);
    assertEqual(1, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    assertEqual(4, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8300
     * @tc.name testUint8ClampedArrayFillTwo083
     * @tc.desc Verify fill element at arr[0] equals 10 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    arr.fill(-1.0, 1, 3);
    assertEqual(10, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(40, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8400
     * @tc.name testUint8ClampedArrayFillTwo084
     * @tc.desc Verify fill element at arr[0] equals 5 for array [5, 5, 5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 5});
    arr.fill(Double.NaN, 1, 3);
    assertEqual(5, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(5, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8500
     * @tc.name testUint8ClampedArrayFillTwo085
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(Double.POSITIVE_INFINITY, 0, 2);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8600
     * @tc.name testUint8ClampedArrayFillTwo086
     * @tc.desc Verify fill element at arr[0] equals 0 for array [100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 100, 100});
    arr.fill(-Double.POSITIVE_INFINITY, 0, 2);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(100, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8700
     * @tc.name testUint8ClampedArrayFillTwo087
     * @tc.desc Verify fill element at arr[0] equals 255 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(256.0, 0, 2).fill(-1.0, 2, 4);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8800
     * @tc.name testUint8ClampedArrayFillTwo088
     * @tc.desc Verify fill element at arr[0] equals 255 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.fill(256.0);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_8900
     * @tc.name testUint8ClampedArrayFillTwo089
     * @tc.desc Verify fill element at arr[0] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(-5.0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9000
     * @tc.name testUint8ClampedArrayFillTwo090
     * @tc.desc Verify fill element at arr[0] equals 2 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(1.5);
    assertEqual(2, arr.get(0));
    assertEqual(2, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9100
     * @tc.name testUint8ClampedArrayFillTwo091
     * @tc.desc Verify fill element at arr[0] equals 2 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(2.5);
    assertEqual(2, arr.get(0));
    assertEqual(2, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9200
     * @tc.name testUint8ClampedArrayFillTwo092
     * @tc.desc Verify fill element at view[0] equals 7 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo092() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    arr.fill(7.0);
    Uint8ClampedArray view = new Uint8ClampedArray(buf);
    assertEqual(7, view.get(0));
    assertEqual(7, view.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9300
     * @tc.name testUint8ClampedArrayFillTwo093
     * @tc.desc Verify subarray element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    sub.fill(9.0);
    assertEqual(1, arr.get(0));
    assertEqual(9, arr.get(1));
    assertEqual(9, arr.get(2));
    assertEqual(4, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9400
     * @tc.name testUint8ClampedArrayFillTwo094
     * @tc.desc Verify fill buffer reference matches for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    ArrayBuffer beforeBuf = arr.buffer();
    arr.fill(5.0);
    assertEqual(beforeBuf, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9500
     * @tc.name testUint8ClampedArrayFillTwo095
     * @tc.desc Verify fill element at fullView[0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo095() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.fill(200.0);
    Uint8ClampedArray fullView = new Uint8ClampedArray(buf);
    assertEqual(0, fullView.get(0));
    assertEqual(200, fullView.get(2));
    assertEqual(200, fullView.get(5));
    assertEqual(0, fullView.get(6));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9600
     * @tc.name testUint8ClampedArrayFillTwo096
     * @tc.desc Verify fill element at arr[0] equals 10 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo096() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    arr.fill(99.0, 2, 4);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(50, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9700
     * @tc.name testUint8ClampedArrayFillTwo097
     * @tc.desc Verify fill yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo097() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(5.0);
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9800
     * @tc.name testUint8ClampedArrayFillTwo098
     * @tc.desc Verify fill element at arr[0] equals 8 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo098() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(5.0);
    arr.fill(8.0);
    assertEqual(8, arr.get(0));
    assertEqual(8, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_TWO_9900
     * @tc.name testUint8ClampedArrayFillTwo099
     * @tc.desc Verify fill element at arr[0] equals 3 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillTwo099() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(1.0).fill(2.0).fill(3.0);
    assertEqual(3, arr.get(0));
    assertEqual(3, arr.get(2));
    }
}
