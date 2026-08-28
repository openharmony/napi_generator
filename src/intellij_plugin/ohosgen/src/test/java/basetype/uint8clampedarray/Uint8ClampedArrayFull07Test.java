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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull07Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull07Test extends BasTest {
    /**
     * Verify fill element at arr[0] equals 9 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0100
     * @tc.name testUint8ClampedArrayFullSeven001
     * @tc.desc Verify fill element at arr[0] equals 9 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(9);
    assertEqual(9, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0200
     * @tc.name testUint8ClampedArrayFullSeven002
     * @tc.desc Verify fill element at arr[2] equals 7 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(7, 2);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[1] equals 5 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0300
     * @tc.name testUint8ClampedArrayFullSeven003
     * @tc.desc Verify fill element at arr[1] equals 5 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(5, 1, 3);
    assertEqual(5, arr.get(1));
    }

    /**
     * Verify copyWithin element at arr[2] equals 10 for array [10, 20, 30, 40]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0400
     * @tc.name testUint8ClampedArrayFullSeven004
     * @tc.desc Verify copyWithin element at arr[2] equals 10 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    arr.copyWithin(2);
    assertEqual(10, arr.get(2));
    }

    /**
     * Verify copyWithin element at arr[0] equals 30 for array [10, 20, 30, 40]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0500
     * @tc.name testUint8ClampedArrayFullSeven005
     * @tc.desc Verify copyWithin element at arr[0] equals 30 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2);
    assertEqual(30, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array [256]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0600
     * @tc.name testUint8ClampedArrayFullSeven006
     * @tc.desc Verify constructor element [0] equals 255 for array [256]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array [257]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0700
     * @tc.name testUint8ClampedArrayFullSeven007
     * @tc.desc Verify constructor element [0] equals 255 for array [257]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {257});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array [1000]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0800
     * @tc.name testUint8ClampedArrayFullSeven008
     * @tc.desc Verify constructor element [0] equals 255 for array [1000]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1000});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array [1e9]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_0900
     * @tc.name testUint8ClampedArrayFullSeven009
     * @tc.desc Verify constructor element [0] equals 255 for array [1e9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [-1]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1000
     * @tc.name testUint8ClampedArrayFullSeven010
     * @tc.desc Verify constructor element [0] equals 0 for array [-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [-100]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1100
     * @tc.name testUint8ClampedArrayFullSeven011
     * @tc.desc Verify constructor element [0] equals 0 for array [-100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-100});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [-1e9]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1200
     * @tc.name testUint8ClampedArrayFullSeven012
     * @tc.desc Verify constructor element [0] equals 0 for array [-1e9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [Number.NaN]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1300
     * @tc.name testUint8ClampedArrayFullSeven013
     * @tc.desc Verify constructor element [0] equals 0 for array [Number.NaN]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array [Number.POSITIVE_INFINITY]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1400
     * @tc.name testUint8ClampedArrayFullSeven014
     * @tc.desc Verify constructor element [0] equals 255 for array [Number.POSITIVE_INFINITY]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [-Number.POSITIVE_INFINITY]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1500
     * @tc.name testUint8ClampedArrayFullSeven015
     * @tc.desc Verify constructor element [0] equals 0 for array [-Number.POSITIVE_INFINITY]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [0.4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1600
     * @tc.name testUint8ClampedArrayFullSeven016
     * @tc.desc Verify constructor element [0] equals 0 for array [0.4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [0.5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1700
     * @tc.name testUint8ClampedArrayFullSeven017
     * @tc.desc Verify constructor element [0] equals 0 for array [0.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array [0.9]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1800
     * @tc.name testUint8ClampedArrayFullSeven018
     * @tc.desc Verify constructor element [0] equals 1 for array [0.9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9});
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 128 for array [127.5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_1900
     * @tc.name testUint8ClampedArrayFullSeven019
     * @tc.desc Verify constructor element [0] equals 128 for array [127.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 128 for array [128.5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2000
     * @tc.name testUint8ClampedArrayFullSeven020
     * @tc.desc Verify constructor element [0] equals 128 for array [128.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [-0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2100
     * @tc.name testUint8ClampedArrayFullSeven021
     * @tc.desc Verify constructor element [0] equals 0 for array [-0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-0});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2200
     * @tc.name testUint8ClampedArrayFullSeven022
     * @tc.desc Verify constructor element [0] equals 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [100]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2300
     * @tc.name testUint8ClampedArrayFullSeven023
     * @tc.desc Verify constructor element [0] equals 0 for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    arr.set(0, -1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [100]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2400
     * @tc.name testUint8ClampedArrayFullSeven024
     * @tc.desc Verify constructor element [0] equals 0 for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2500
     * @tc.name testUint8ClampedArrayFullSeven025
     * @tc.desc Verify constructor element [0] equals 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array [100]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2600
     * @tc.name testUint8ClampedArrayFullSeven026
     * @tc.desc Verify constructor element [0] equals 0 for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 200 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2700
     * @tc.name testUint8ClampedArrayFullSeven027
     * @tc.desc Verify constructor element [0] equals 200 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 200.5);
    assertEqual(200, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 202 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2800
     * @tc.name testUint8ClampedArrayFullSeven028
     * @tc.desc Verify constructor element [0] equals 202 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 201.5);
    assertEqual(202, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 255 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_2900
     * @tc.name testUint8ClampedArrayFullSeven029
     * @tc.desc Verify fill element at arr[1] equals 255 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(300);
    assertEqual(255, arr.get(1));
    }

    /**
     * Verify fill element at arr[0] equals 0 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3000
     * @tc.name testUint8ClampedArrayFullSeven030
     * @tc.desc Verify fill element at arr[0] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(-50);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 0 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3100
     * @tc.name testUint8ClampedArrayFullSeven031
     * @tc.desc Verify fill element at arr[2] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(Double.NaN);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify fill element at arr[1] equals 255 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3200
     * @tc.name testUint8ClampedArrayFullSeven032
     * @tc.desc Verify fill element at arr[1] equals 255 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(1));
    }

    /**
     * Verify fill element at arr[0] equals 100 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3300
     * @tc.name testUint8ClampedArrayFullSeven033
     * @tc.desc Verify fill element at arr[0] equals 100 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(99.5);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 100 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3400
     * @tc.name testUint8ClampedArrayFullSeven034
     * @tc.desc Verify fill element at arr[0] equals 100 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(100.5);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify with index RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3500
     * @tc.name testUint8ClampedArrayFullSeven035
     * @tc.desc Verify with index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(-4, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with element at r[1] equals 255 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3600
     * @tc.name testUint8ClampedArrayFullSeven036
     * @tc.desc Verify with element at r[1] equals 255 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.with(1, 256);
    assertEqual(255, r.get(1));
    }

    /**
     * Verify with element at r[0] equals 0 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3700
     * @tc.name testUint8ClampedArrayFullSeven037
     * @tc.desc Verify with element at r[0] equals 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.with(0, -10);
    assertEqual(0, r.get(0));
    }

    /**
     * Verify with element at r[2] equals 0 for array [5, 6, 7]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3800
     * @tc.name testUint8ClampedArrayFullSeven038
     * @tc.desc Verify with element at r[2] equals 0 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    Uint8ClampedArray r = arr.with(2, Double.NaN);
    assertEqual(0, r.get(2));
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(500)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_3900
     * @tc.name testUint8ClampedArrayFullSeven039
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(500)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven039() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(500);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of with mixed values: -5 clamp 0, 100 keep, 300 clamp 255, NaN clamp 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4000
     * @tc.name testUint8ClampedArrayFullSeven040
     * @tc.desc Verify of with mixed values: -5 clamp 0, 100 keep, 300 clamp 255, NaN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven040() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-5, 100, 300, Double.NaN);
    assertEqual(0, arr.get(0));
    assertEqual(100, arr.get(1));
    assertEqual(255, arr.get(2));
    assertEqual(0, arr.get(3));
    }

    /**
     * Verify from with boundary values: 256 clamp 255, -1 clamp 0, 128 keep
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4100
     * @tc.name testUint8ClampedArrayFullSeven041
     * @tc.desc Verify from with boundary values: 256 clamp 255, -1 clamp 0, 128 keep
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven041() {
    double[] src = new double[] {256.0, -1.0, 128.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(128, arr.get(2));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src, (v: number, i: )
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4200
     * @tc.name testUint8ClampedArrayFullSeven042
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src, (v: number, i: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven042() {
    double[] src = new double[] {1.0, 2.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(
        src,
        (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, i) -> v + 300.0);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, i: )
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4300
     * @tc.name testUint8ClampedArrayFullSeven043
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, i: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven043() {
    double[] src = new double[] {10.0, 20.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(
        src,
        (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, i) -> -v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify .set element at arr[2] equals 255 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4400
     * @tc.name testUint8ClampedArrayFullSeven044
     * @tc.desc Verify .set element at arr[2] equals 255 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    double[] src = new double[] {-5.0, 128.0, 999.0};
    arr.set(src, 0);
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4500
     * @tc.name testUint8ClampedArrayFullSeven045
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven045() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    assertEqual(parent.buffer(), sub.buffer());
    }

    /**
     * Verify subarray element at parent[1] equals 99 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4600
     * @tc.name testUint8ClampedArrayFullSeven046
     * @tc.desc Verify subarray element at parent[1] equals 99 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven046() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    sub.set(0, 99);
    assertEqual(99, parent.get(1));
    }

    /**
     * Verify subarray element at sub[1] equals 88 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4700
     * @tc.name testUint8ClampedArrayFullSeven047
     * @tc.desc Verify subarray element at sub[1] equals 88 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven047() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    parent.set(2, 88);
    assertEqual(88, sub.get(1));
    }

    /**
     * Verify subarray element at b[0] equals 77 for array [1, 2, 3, 4, 5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4800
     * @tc.name testUint8ClampedArrayFullSeven048
     * @tc.desc Verify subarray element at b[0] equals 77 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven048() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray a = parent.subarray(0, 3);
    Uint8ClampedArray b = parent.subarray(2, 5);
    a.set(2, 77);
    assertEqual(77, b.get(0));
    }

    /**
     * Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_4900
     * @tc.name testUint8ClampedArrayFullSeven049
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven049() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s1 = parent.subarray(0, 3);
    Uint8ClampedArray s2 = s1.subarray(0, 2);
    assertEqual(parent.buffer(), s2.buffer());
    }

    /**
     * Verify subarray yields byteOffset 2 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5000
     * @tc.name testUint8ClampedArrayFullSeven050
     * @tc.desc Verify subarray yields byteOffset 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven050() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.subarray(2, 4);
    assertEqual(2, s.byteOffset());
    }

    /**
     * Verify slice result shares no buffer with parent
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5100
     * @tc.name testUint8ClampedArrayFullSeven051
     * @tc.desc Verify slice result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven051() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice(0, 2);
    assertNotEqual(parent.buffer(), s.buffer());
    }

    /**
     * Verify slice element at parent[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5200
     * @tc.name testUint8ClampedArrayFullSeven052
     * @tc.desc Verify slice element at parent[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven052() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice(0, 2);
    s.set(0, 99);
    assertEqual(1, parent.get(0));
    }

    /**
     * Verify slice element at s[0] equals 10 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5300
     * @tc.name testUint8ClampedArrayFullSeven053
     * @tc.desc Verify slice element at s[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven053() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray s = parent.slice(0, 2);
    parent.set(0, 200);
    assertEqual(10, s.get(0));
    }

    /**
     * Verify map result shares no buffer with parent
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5400
     * @tc.name testUint8ClampedArrayFullSeven054
     * @tc.desc Verify map result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven054() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = parent.map((v, i, array) -> v + 1);
    assertNotEqual(parent.buffer(), m.buffer());
    }

    /**
     * Verify filter result shares no buffer with parent
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5500
     * @tc.name testUint8ClampedArrayFullSeven055
     * @tc.desc Verify filter result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven055() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray f = parent.filter((v, i, array) -> v > 1);
    assertNotEqual(parent.buffer(), f.buffer());
    }

    /**
     * Verify toReversed result shares no buffer with parent
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5600
     * @tc.name testUint8ClampedArrayFullSeven056
     * @tc.desc Verify toReversed result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven056() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = parent.toReversed();
    assertNotEqual(parent.buffer(), r.buffer());
    }

    /**
     * Verify toSorted result shares no buffer with parent
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5700
     * @tc.name testUint8ClampedArrayFullSeven057
     * @tc.desc Verify toSorted result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven057() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = parent.toSorted();
    assertNotEqual(parent.buffer(), r.buffer());
    }

    /**
     * Verify from(Uint8ClampedArray) buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5800
     * @tc.name testUint8ClampedArrayFullSeven058
     * @tc.desc Verify from(Uint8ClampedArray) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven058() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray copy = Uint8ClampedArray.from(parent);
    assertNotEqual(parent.buffer(), copy.buffer());
    }

    /**
     * Verify constructor element [0] equals 99 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_5900
     * @tc.name testUint8ClampedArrayFullSeven059
     * @tc.desc Verify constructor element [0] equals 99 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.set(0, 99);
    assertEqual(99, secondView.get(0));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length secondView.length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6000
     * @tc.name testUint8ClampedArrayFullSeven060
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length secondView.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven060() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    assertEqual(6, firstView.length());
    assertEqual(6, secondView.length());
    }

    /**
     * Verify constructor element [0] equals 11 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6100
     * @tc.name testUint8ClampedArrayFullSeven061
     * @tc.desc Verify constructor element [0] equals 11 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven061() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0, 3);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 3, 3);
    firstView.set(0, 11);
    secondView.set(0, 22);
    assertEqual(11, firstView.get(0));
    assertEqual(22, secondView.get(0));
    }

    /**
     * Verify constructor element [0] equals 50 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6200
     * @tc.name testUint8ClampedArrayFullSeven062
     * @tc.desc Verify constructor element [0] equals 50 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven062() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 2, 4);
    firstView.set(2, 50);
    assertEqual(50, secondView.get(0));
    }

    /**
     * Verify subarray buffer reference matches for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6300
     * @tc.name testUint8ClampedArrayFullSeven063
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven063() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.subarray(2, 2);
    assertEqual(parent.buffer(), s.buffer());
    }

    /**
     * Verify subarray yields byteLength 3 for array [1, 2, 3, 4, 5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6400
     * @tc.name testUint8ClampedArrayFullSeven064
     * @tc.desc Verify subarray yields byteLength 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven064() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = parent.subarray(1, 4);
    assertEqual(3, s.byteLength());
    }

    /**
     * Verify reverse yields length before for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6500
     * @tc.name testUint8ClampedArrayFullSeven065
     * @tc.desc Verify reverse yields length before for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    /**
     * Verify toReversed element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6600
     * @tc.name testUint8ClampedArrayFullSeven066
     * @tc.desc Verify toReversed element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray reversed = arr.toReversed();
    assertEqual(3, reversed.length());
    assertEqual(3, reversed.get(0));
    assertEqual(2, reversed.get(1));
    assertEqual(1, reversed.get(2));
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify toSorted element at arr[0] equals 3 for array [3, 1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6700
     * @tc.name testUint8ClampedArrayFullSeven067
     * @tc.desc Verify toSorted element at arr[0] equals 3 for array [3, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(3, arr.get(0));
    }

    /**
     * Verify map element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6800
     * @tc.name testUint8ClampedArrayFullSeven068
     * @tc.desc Verify map element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray mapped = arr.map((v, i, array) -> v + 1);
    assertEqual(3, mapped.length());
    assertEqual(2, mapped.get(0));
    assertEqual(3, mapped.get(1));
    assertEqual(4, mapped.get(2));
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify filter yields length 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_6900
     * @tc.name testUint8ClampedArrayFullSeven069
     * @tc.desc Verify filter yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray filtered = arr.filter((v, i, array) -> v > 1);
    assertEqual(2, filtered.length());
    assertEqual(2, filtered.get(0));
    assertEqual(3, filtered.get(1));
    assertEqual(3, arr.length());
    }

    /**
     * Verify slice yields length 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7000
     * @tc.name testUint8ClampedArrayFullSeven070
     * @tc.desc Verify slice yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sliced = arr.slice(0, 2);
    assertEqual(2, sliced.length());
    assertEqual(1, sliced.get(0));
    assertEqual(2, sliced.get(1));
    assertEqual(3, arr.length());
    }

    /**
     * Verify with element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7100
     * @tc.name testUint8ClampedArrayFullSeven071
     * @tc.desc Verify with element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray withed = arr.with(0, 99);
    assertEqual(3, withed.length());
    assertEqual(99, withed.get(0));
    assertEqual(2, withed.get(1));
    assertEqual(3, withed.get(2));
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify subarray element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7200
     * @tc.name testUint8ClampedArrayFullSeven072
     * @tc.desc Verify subarray element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    assertEqual(2, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify join returns '1,2,3' for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7300
     * @tc.name testUint8ClampedArrayFullSeven073
     * @tc.desc Verify join returns '1,2,3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("1,2,3", arr.join(","));
    assertEqual(3, arr.length());
    }

    /**
     * Verify indexOf element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7400
     * @tc.name testUint8ClampedArrayFullSeven074
     * @tc.desc Verify indexOf element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.indexOf(2);
    assertEqual(1, idx);
    }

    /**
     * Verify reverse element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7500
     * @tc.name testUint8ClampedArrayFullSeven075
     * @tc.desc Verify reverse element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    assertEqual(3, arr.get(0));
    arr.reverse();
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify toReversed element at r[0] equals arr[0] for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7600
     * @tc.name testUint8ClampedArrayFullSeven076
     * @tc.desc Verify toReversed element at r[0] equals arr[0] for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed().toReversed();
    assertEqual(arr.get(0), r.get(0));
    }

    /**
     * Verify toReversed element at r[0] equals 3 for array [3, 1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7700
     * @tc.name testUint8ClampedArrayFullSeven077
     * @tc.desc Verify toReversed element at r[0] equals 3 for array [3, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.toSorted().toReversed();
    assertEqual(3, r.get(0));
    }

    /**
     * Verify slice yields length 2 for array [1, 2, 3, 4, 5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7800
     * @tc.name testUint8ClampedArrayFullSeven078
     * @tc.desc Verify slice yields length 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0, 4).slice(1, 3);
    assertEqual(2, r.length());
    }

    /**
     * Verify subarray yields length 2 for array [1, 2, 3, 4, 5]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_7900
     * @tc.name testUint8ClampedArrayFullSeven079
     * @tc.desc Verify subarray yields length 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.subarray(1, 5).subarray(0, 2);
    assertEqual(2, r.length());
    }

    /**
     * Verify map element at r[0] equals 4 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8000
     * @tc.name testUint8ClampedArrayFullSeven080
     * @tc.desc Verify map element at r[0] equals 4 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, array) -> v + 1).map((v, i, array) -> v * 2);
    assertEqual(4, r.get(0));
    }

    /**
     * Verify filter yields length 2 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8100
     * @tc.name testUint8ClampedArrayFullSeven081
     * @tc.desc Verify filter yields length 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, array) -> v > 1).filter((v, i, array) -> v < 4);
    assertEqual(2, r.length());
    }

    /**
     * Verify with element at r[1] equals 20 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8200
     * @tc.name testUint8ClampedArrayFullSeven082
     * @tc.desc Verify with element at r[1] equals 20 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.with(0, 10).with(1, 20);
    assertEqual(20, r.get(1));
    }

    /**
     * Verify fill element at arr[0] equals 5 for length-4 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8300
     * @tc.name testUint8ClampedArrayFullSeven083
     * @tc.desc Verify fill element at arr[0] equals 5 for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.fill(5).sort();
    assertEqual(5, arr.get(0));
    }

    /**
     * Verify copyWithin element at arr[0] equals 4 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8400
     * @tc.name testUint8ClampedArrayFullSeven084
     * @tc.desc Verify copyWithin element at arr[0] equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2).reverse();
    assertEqual(4, arr.get(0));
    }

    /**
     * Verify forEach accumulated sum equals 6 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8500
     * @tc.name testUint8ClampedArrayFullSeven085
     * @tc.desc Verify forEach accumulated sum equals 6 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] sum = {0};
    arr.forEach((v, i, array) -> {
        sum[0] += v;
        });
    assertEqual(6, sum[0]);
    }

    /**
     * Verify forEach acc equals 60 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8600
     * @tc.name testUint8ClampedArrayFullSeven086
     * @tc.desc Verify forEach acc equals 60 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int factor = 10;
    int[] acc = {0};
    arr.forEach((v, i, array) -> {
        acc[0] += v * factor;
        });
    assertEqual(60, acc[0]);
    }

    /**
     * Verify map element at r[0] equals 101 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8700
     * @tc.name testUint8ClampedArrayFullSeven087
     * @tc.desc Verify map element at r[0] equals 101 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int offset = 100;
    Uint8ClampedArray r = arr.map((v, i, array) -> v + offset);
    assertEqual(101, r.get(0));
    }

    /**
     * Verify filter yields length 2 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8800
     * @tc.name testUint8ClampedArrayFullSeven088
     * @tc.desc Verify filter yields length 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int threshold = 2;
    Uint8ClampedArray r = arr.filter((v, i, array) -> v > threshold);
    assertEqual(2, r.length());
    }

    /**
     * Verify reduce r equals 6 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_8900
     * @tc.name testUint8ClampedArrayFullSeven089
     * @tc.desc Verify reduce r equals 6 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((acc, v, i, array) -> acc + v, 0.0);
    assertEqual(6, r);
    }

    /**
     * Verify find hitIdx equals 1 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_9000
     * @tc.name testUint8ClampedArrayFullSeven090
     * @tc.desc Verify find hitIdx equals 1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] hitIdx = {-1};
    arr.find((v, i, array) -> {
        if (v == 20) {
            hitIdx[0] = i;
        return true;
        }
        return false;
    });
    assertEqual(1, hitIdx[0]);
    }

    /**
     * Verify forEach element at collected[2] equals 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_9100
     * @tc.name testUint8ClampedArrayFullSeven091
     * @tc.desc Verify forEach element at collected[2] equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double[] collected = new double[] {0.0, 0.0, 0.0};
    arr.forEach((v, i, array) -> {
        collected[i] = v;
        });
    assertEqual(3, collected[2]);
    }

    /**
     * Verify some iteration count equals 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_9200
     * @tc.name testUint8ClampedArrayFullSeven092
     * @tc.desc Verify some iteration count equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    arr.some((v, i, array) -> {
        count[0]++;
        return v > 100;
    });
    assertEqual(3, count[0]);
    }

    /**
     * Verify every calls equals 2 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SEVEN_9300
     * @tc.name testUint8ClampedArrayFullSeven093
     * @tc.desc Verify every calls equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSeven093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] calls = {0};
    arr.every((v, i, array) -> {
        calls[0]++;
        return v < 2;
    });
    assertEqual(2, calls[0]);
    }
}
