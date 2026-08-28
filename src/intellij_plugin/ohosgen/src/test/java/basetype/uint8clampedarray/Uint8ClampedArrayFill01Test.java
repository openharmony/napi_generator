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
 * Uint8ClampedArrayFill01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFill01Test extends BasTest {
    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0100
     * @tc.name testUint8ClampedArrayFillOne001
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne001() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 9 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0200
     * @tc.name testUint8ClampedArrayFillOne002
     * @tc.desc Verify fill element at arr[1] equals 9 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne002() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 1);
    assertEqual(9, arr.get(1));
    }

    /**
     * Verify fill element at arr[2] equals 5 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0300
     * @tc.name testUint8ClampedArrayFillOne003
     * @tc.desc Verify fill element at arr[2] equals 5 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne003() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 1, 3);
    assertEqual(5, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 8 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0400
     * @tc.name testUint8ClampedArrayFillOne004
     * @tc.desc Verify fill element at arr[0] equals 8 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne004() {
    int v = 8;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 0);
    assertEqual(8, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 4 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0500
     * @tc.name testUint8ClampedArrayFillOne005
     * @tc.desc Verify fill element at arr[2] equals 4 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne005() {
    int v = 4;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 3);
    assertEqual(4, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 0 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0600
     * @tc.name testUint8ClampedArrayFillOne006
     * @tc.desc Verify fill element at arr[0] equals 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne006() {
    int v = 0;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 1 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0700
     * @tc.name testUint8ClampedArrayFillOne007
     * @tc.desc Verify fill element at arr[1] equals 1 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne007() {
    int v = 1;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v);
    assertEqual(1, arr.get(1));
    }

    /**
     * Verify fill element at arr[0] equals 127 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0800
     * @tc.name testUint8ClampedArrayFillOne008
     * @tc.desc Verify fill element at arr[0] equals 127 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne008() {
    int v = 127;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 0 for array [10, 10, 10]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_0900
     * @tc.name testUint8ClampedArrayFillOne009
     * @tc.desc Verify fill element at arr[0] equals 0 for array [10, 10, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne009() {
    int v = -1;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 10, 10});
    arr.fill(v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify value=byte -128 byte clamp 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1000
     * @tc.name testUint8ClampedArrayFillOne010
     * @tc.desc Verify value=byte -128 byte clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne010() {
    int v = -128;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    arr.fill(v);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 100 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1100
     * @tc.name testUint8ClampedArrayFillOne011
     * @tc.desc Verify fill element at arr[0] equals 100 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne011() {
    int v = 100;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 50 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1200
     * @tc.name testUint8ClampedArrayFillOne012
     * @tc.desc Verify fill element at arr[0] equals 50 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne012() {
    int v = 062;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(50, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 10 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1300
     * @tc.name testUint8ClampedArrayFillOne013
     * @tc.desc Verify fill element at arr[0] equals 10 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne013() {
    int v = 0b1010;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 0 for array [99, 99]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1400
     * @tc.name testUint8ClampedArrayFillOne014
     * @tc.desc Verify fill element at arr[0] equals 0 for array [99, 99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne014() {
    int v = -64;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99});
    arr.fill(v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1500
     * @tc.name testUint8ClampedArrayFillOne015
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne015() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 0);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 0 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1600
     * @tc.name testUint8ClampedArrayFillOne016
     * @tc.desc Verify fill element at arr[0] equals 0 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne016() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify fill element at arr[3] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1700
     * @tc.name testUint8ClampedArrayFillOne017
     * @tc.desc Verify fill element at arr[3] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne017() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 3);
    assertEqual(7, arr.get(3));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1800
     * @tc.name testUint8ClampedArrayFillOne018
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne018() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 3);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_1900
     * @tc.name testUint8ClampedArrayFillOne019
     * @tc.desc Verify fill element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne019() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 4);
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify fill element at arr[3] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2000
     * @tc.name testUint8ClampedArrayFillOne020
     * @tc.desc Verify fill element at arr[3] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne020() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, -1);
    assertEqual(7, arr.get(3));
    }

    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2100
     * @tc.name testUint8ClampedArrayFillOne021
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne021() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, -4);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2200
     * @tc.name testUint8ClampedArrayFillOne022
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne022() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, -10);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2300
     * @tc.name testUint8ClampedArrayFillOne023
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne023() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 2147483647);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2400
     * @tc.name testUint8ClampedArrayFillOne024
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne024() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, Integer.MIN_VALUE);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2500
     * @tc.name testUint8ClampedArrayFillOne025
     * @tc.desc Verify fill element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne025() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 0x7FFFFFFF);
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2600
     * @tc.name testUint8ClampedArrayFillOne026
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne026() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, -2);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2700
     * @tc.name testUint8ClampedArrayFillOne027
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne027() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 2);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2800
     * @tc.name testUint8ClampedArrayFillOne028
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne028() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 0});
    arr.fill(v, -3);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_2900
     * @tc.name testUint8ClampedArrayFillOne029
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne029() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 0, 0);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3000
     * @tc.name testUint8ClampedArrayFillOne030
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne030() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 1);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3100
     * @tc.name testUint8ClampedArrayFillOne031
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne031() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 3);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3200
     * @tc.name testUint8ClampedArrayFillOne032
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne032() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 4);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[2] equals 0 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3300
     * @tc.name testUint8ClampedArrayFillOne033
     * @tc.desc Verify fill element at arr[2] equals 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne033() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 2);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify fill element at arr[3] equals 0 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3400
     * @tc.name testUint8ClampedArrayFillOne034
     * @tc.desc Verify fill element at arr[3] equals 0 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne034() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 0, -1);
    assertEqual(0, arr.get(3));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3500
     * @tc.name testUint8ClampedArrayFillOne035
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne035() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(v, 0, -4);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3600
     * @tc.name testUint8ClampedArrayFillOne036
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne036() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 0, -10);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3700
     * @tc.name testUint8ClampedArrayFillOne037
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne037() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 2147483647);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3800
     * @tc.name testUint8ClampedArrayFillOne038
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne038() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 0, Integer.MIN_VALUE);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 7 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_3900
     * @tc.name testUint8ClampedArrayFillOne039
     * @tc.desc Verify fill element at arr[1] equals 7 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne039() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v, 0, 0x7FFFFFFF);
    assertEqual(7, arr.get(1));
    }

    /**
     * Verify fill element at arr[1] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4000
     * @tc.name testUint8ClampedArrayFillOne040
     * @tc.desc Verify fill element at arr[1] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne040() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 0, -2);
    assertEqual(7, arr.get(1));
    }

    /**
     * Verify fill element at arr[1] equals 7 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4100
     * @tc.name testUint8ClampedArrayFillOne041
     * @tc.desc Verify fill element at arr[1] equals 7 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne041() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(v, 0, 2);
    assertEqual(7, arr.get(1));
    }

    /**
     * Verify fill element at arr[1] equals 9 for array [0, 0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4200
     * @tc.name testUint8ClampedArrayFillOne042
     * @tc.desc Verify fill element at arr[1] equals 9 for array [0, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne042() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 0});
    arr.fill(v, 1, 3);
    assertEqual(9, arr.get(1));
    }

    /**
     * Verify fill element at arr[3] equals 9 for array [0, 0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4300
     * @tc.name testUint8ClampedArrayFillOne043
     * @tc.desc Verify fill element at arr[3] equals 9 for array [0, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne043() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 0});
    arr.fill(v, -3, -1);
    assertEqual(9, arr.get(3));
    }

    /**
     * Verify fill element at arr[2] equals 9 for array [0, 0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4400
     * @tc.name testUint8ClampedArrayFillOne044
     * @tc.desc Verify fill element at arr[2] equals 9 for array [0, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne044() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 0});
    arr.fill(v, -3, 4);
    assertEqual(9, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 9 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4500
     * @tc.name testUint8ClampedArrayFillOne045
     * @tc.desc Verify fill element at arr[0] equals 9 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne045() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 3);
    assertEqual(9, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 9 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4600
     * @tc.name testUint8ClampedArrayFillOne046
     * @tc.desc Verify fill element at arr[2] equals 9 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne046() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 2, 3);
    assertEqual(9, arr.get(2));
    }

    /**
     * Verify fill element at arr[1] equals 2 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4700
     * @tc.name testUint8ClampedArrayFillOne047
     * @tc.desc Verify fill element at arr[1] equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne047() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(v, 3, 1);
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify fill element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4800
     * @tc.name testUint8ClampedArrayFillOne048
     * @tc.desc Verify fill element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne048() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 2, 2);
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify fill element at arr[2] equals 3 for array [1, 2, 3, 4]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_4900
     * @tc.name testUint8ClampedArrayFillOne049
     * @tc.desc Verify fill element at arr[2] equals 3 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne049() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(v, -1, -3);
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 9 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5000
     * @tc.name testUint8ClampedArrayFillOne050
     * @tc.desc Verify fill element at arr[0] equals 9 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne050() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, -100, 100);
    assertEqual(9, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 0 for array [50, 50]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5100
     * @tc.name testUint8ClampedArrayFillOne051
     * @tc.desc Verify fill element at arr[1] equals 0 for array [50, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne051() {
    int v = -100;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 50});
    arr.fill(v);
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify fill element at arr[0] equals 126 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5200
     * @tc.name testUint8ClampedArrayFillOne052
     * @tc.desc Verify fill element at arr[0] equals 126 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne052() {
    int v = 126;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(126, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 1 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5300
     * @tc.name testUint8ClampedArrayFillOne053
     * @tc.desc Verify fill element at arr[1] equals 1 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne053() {
    int v = 1;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(1, arr.get(1));
    }

    /**
     * Verify fill element at arr[2] equals 0 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5400
     * @tc.name testUint8ClampedArrayFillOne054
     * @tc.desc Verify fill element at arr[2] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne054() {
    int v = 0;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(v);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify fill with byte=-5 clamps to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5500
     * @tc.name testUint8ClampedArrayFillOne055
     * @tc.desc Verify fill with byte=-5 clamps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne055() {
    int v = -5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 0 for array [100, 100, 100]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5600
     * @tc.name testUint8ClampedArrayFillOne056
     * @tc.desc Verify fill element at arr[0] equals 0 for array [100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne056() {
    int v = -50;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 100, 100});
    arr.fill(v, 0, 2);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 0 for array [99, 99, 99, 99]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5700
     * @tc.name testUint8ClampedArrayFillOne057
     * @tc.desc Verify fill element at arr[1] equals 0 for array [99, 99, 99, 99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne057() {
    int v = -1;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99, 99});
    arr.fill(v, 1, 3);
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify fill yields length 0 for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5800
     * @tc.name testUint8ClampedArrayFillOne058
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne058() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(v);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill yields length 0 for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_5900
     * @tc.name testUint8ClampedArrayFillOne059
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne059() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.fill(v, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill r equals arr for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6000
     * @tc.name testUint8ClampedArrayFillOne060
     * @tc.desc Verify fill r equals arr for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne060() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(arr, r);
    }

    /**
     * Verify fill element at arr[0] equals 9 for array [0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6100
     * @tc.name testUint8ClampedArrayFillOne061
     * @tc.desc Verify fill element at arr[0] equals 9 for array [0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne061() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.fill(v);
    assertEqual(9, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 5 for array [0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6200
     * @tc.name testUint8ClampedArrayFillOne062
     * @tc.desc Verify fill element at arr[0] equals 5 for array [0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne062() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.fill(v, 0, 1);
    assertEqual(5, arr.get(0));
    }

    /**
     * Verify fill starting at length leaves the single element unchanged
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6300
     * @tc.name testUint8ClampedArrayFillOne063
     * @tc.desc Verify fill starting at length leaves the single element unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne063() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3});
    arr.fill(v, 1);
    assertEqual(3, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 9 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6400
     * @tc.name testUint8ClampedArrayFillOne064
     * @tc.desc Verify fill element at arr[1] equals 9 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne064() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(9, arr.get(1));
    }

    /**
     * Verify fill element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6500
     * @tc.name testUint8ClampedArrayFillOne065
     * @tc.desc Verify fill element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne065() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 1, 1);
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify fill element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6600
     * @tc.name testUint8ClampedArrayFillOne066
     * @tc.desc Verify fill element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne066() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 2, 0);
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify start=length end=length no-op
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6700
     * @tc.name testUint8ClampedArrayFillOne067
     * @tc.desc Verify start=length end=length no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne067() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 3, 3);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill yields length 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6800
     * @tc.name testUint8ClampedArrayFillOne068
     * @tc.desc Verify fill yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne068() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 3, 1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify fill r equals arr for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_6900
     * @tc.name testUint8ClampedArrayFillOne069
     * @tc.desc Verify fill r equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne069() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.fill(v, 3, 1);
    assertEqual(arr, r);
    }

    /**
     * Verify fill element at arr[0] equals 10 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7000
     * @tc.name testUint8ClampedArrayFillOne070
     * @tc.desc Verify fill element at arr[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne070() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(v, 2, 2);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify fill r equals arr for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7100
     * @tc.name testUint8ClampedArrayFillOne071
     * @tc.desc Verify fill r equals arr for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne071() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(arr, r);
    }

    /**
     * Verify fill yields length 3 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7200
     * @tc.name testUint8ClampedArrayFillOne072
     * @tc.desc Verify fill yields length 3 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne072() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(3, r.length());
    }

    /**
     * Verify fill buffer reference matches for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7300
     * @tc.name testUint8ClampedArrayFillOne073
     * @tc.desc Verify fill buffer reference matches for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne073() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify fill yields byteLength 3 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7400
     * @tc.name testUint8ClampedArrayFillOne074
     * @tc.desc Verify fill yields byteLength 3 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne074() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(3, r.byteLength());
    }

    /**
     * Verify fill element at arr[0] equals 9 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7500
     * @tc.name testUint8ClampedArrayFillOne075
     * @tc.desc Verify fill element at arr[0] equals 9 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne075() {
    int firstValue = 5;
    int secondValue = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(firstValue).fill(secondValue);
    assertEqual(9, arr.get(0));
    }

    /**
     * Verify fill returns the receiver and mutates every selected element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7600
     * @tc.name testUint8ClampedArrayFillOne076
     * @tc.desc Verify fill returns the receiver and mutates every selected element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne076() {
    int v = 5;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(arr, r);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(1));
    }

    /**
     * Verify fill yields byteOffset 1 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7700
     * @tc.name testUint8ClampedArrayFillOne077
     * @tc.desc Verify fill yields byteOffset 1 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne077() {
    int v = 5;
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 2);
    Uint8ClampedArray r = arr.fill(v);
    assertEqual(1, r.byteOffset());
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7800
     * @tc.name testUint8ClampedArrayFillOne078
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne078() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 999);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_7900
     * @tc.name testUint8ClampedArrayFillOne079
     * @tc.desc Verify fill element at arr[0] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne079() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, -999);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8000
     * @tc.name testUint8ClampedArrayFillOne080
     * @tc.desc Verify fill element at arr[2] equals 7 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne080() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(v, 0, 999);
    assertEqual(7, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8100
     * @tc.name testUint8ClampedArrayFillOne081
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne081() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(v, 0, -999);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill r equals arr for array [1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8200
     * @tc.name testUint8ClampedArrayFillOne082
     * @tc.desc Verify fill r equals arr for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne082() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.fill(v, 2147483647);
    assertEqual(arr, r);
    }

    /**
     * Verify fill r equals arr for array [1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8300
     * @tc.name testUint8ClampedArrayFillOne083
     * @tc.desc Verify fill r equals arr for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne083() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.fill(v, 0, Integer.MIN_VALUE);
    assertEqual(arr, r);
    }

    /**
     * Verify fill() out-of-range start/end on length=0 array no-op
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8400
     * @tc.name testUint8ClampedArrayFillOne084
     * @tc.desc Verify fill() out-of-range start/end on length=0 array no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne084() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.fill(v, -100, 100);
    assertEqual(0, r.length());
    }

    /**
     * Verify fill element at arr[0] equals 1 for array [1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8500
     * @tc.name testUint8ClampedArrayFillOne085
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne085() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.fill(v, 2147483647, 2147483647);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill() start=2 leaves index 0 unchanged
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8600
     * @tc.name testUint8ClampedArrayFillOne086
     * @tc.desc Verify fill() start=2 leaves index 0 unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne086() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(v, 2);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill() end=2 leaves index 3 unchanged
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8700
     * @tc.name testUint8ClampedArrayFillOne087
     * @tc.desc Verify fill() end=2 leaves index 3 unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne087() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(v, 0, 2);
    assertEqual(4, arr.get(3));
    }

    /**
     * Verify fill() start=1 leaves index 0 unchanged
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8800
     * @tc.name testUint8ClampedArrayFillOne088
     * @tc.desc Verify fill() start=1 leaves index 0 unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne088() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.fill(v, 1, 4);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify fill() start=1 end=4 sets index 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_8900
     * @tc.name testUint8ClampedArrayFillOne089
     * @tc.desc Verify fill() start=1 end=4 sets index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne089() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.fill(v, 1, 4);
    assertEqual(9, arr.get(2));
    }

    /**
     * Verify fill element at arr[0] equals 8 for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9000
     * @tc.name testUint8ClampedArrayFillOne090
     * @tc.desc Verify fill element at arr[0] equals 8 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne090() {
    int firstValue = 3;
    int secondValue = 8;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.fill(firstValue);
    arr.fill(secondValue);
    assertEqual(8, arr.get(0));
    }

    /**
     * Verify fill element at arr[1] equals 2 for array [0, 0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9100
     * @tc.name testUint8ClampedArrayFillOne091
     * @tc.desc Verify fill element at arr[1] equals 2 for array [0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne091() {
    int firstValue = 1;
    int secondValue = 2;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(firstValue);
    arr.fill(secondValue, 1, 3);
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify fill arr.$_get(0) equals 7 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9200
     * @tc.name testUint8ClampedArrayFillOne092
     * @tc.desc Verify fill arr.$_get(0) equals 7 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne092() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify fill element at view[0] equals 7 for array [0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9300
     * @tc.name testUint8ClampedArrayFillOne093
     * @tc.desc Verify fill element at view[0] equals 7 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne093() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(v);
    Uint8ClampedArray view = new Uint8ClampedArray(arr.buffer());
    assertEqual(7, view.get(0));
    }

    /**
     * Verify fill element at arr[0] equals 10 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9400
     * @tc.name testUint8ClampedArrayFillOne094
     * @tc.desc Verify fill element at arr[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne094() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(v, 1, 2);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify fill yields length before for array [0, 0, 0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9500
     * @tc.name testUint8ClampedArrayFillOne095
     * @tc.desc Verify fill yields length before for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne095() {
    int v = 9;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int before = arr.length();
    arr.fill(v);
    assertEqual(before, arr.length());
    }

    /**
     * Verify fill() length=256 last element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9600
     * @tc.name testUint8ClampedArrayFillOne096
     * @tc.desc Verify fill() length=256 last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne096() {
    int v = 100;
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.fill(v);
    assertEqual(100, arr.get(255));
    }

    /**
     * Verify fill() length=1024 first element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9700
     * @tc.name testUint8ClampedArrayFillOne097
     * @tc.desc Verify fill() length=1024 first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne097() {
    int v = 50;
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(v);
    assertEqual(50, arr.get(0));
    }

    /**
     * Verify fill() length=1024 last element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9800
     * @tc.name testUint8ClampedArrayFillOne098
     * @tc.desc Verify fill() length=1024 last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne098() {
    int v = 50;
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(v);
    assertEqual(50, arr.get(1023));
    }

    /**
     * Verify fill() length=10 start=3 end=7 sets index 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_ONE_9900
     * @tc.name testUint8ClampedArrayFillOne099
     * @tc.desc Verify fill() length=10 start=3 end=7 sets index 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillOne099() {
    int v = 7;
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    arr.fill(v, 3, 7);
    assertEqual(7, arr.get(5));
    }
}
