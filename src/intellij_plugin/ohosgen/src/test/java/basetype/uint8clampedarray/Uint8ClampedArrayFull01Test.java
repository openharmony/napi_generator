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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull01Test extends BasTest {
    /**
     * Verify constructing 10-element array yields length 10
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0100
     * @tc.name testUint8ClampedArrayFullOne001
     * @tc.desc Verify constructing 10-element array yields length 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    assertEqual(10, arr.length());
    }

    /**
     * Verify constructing array [1, 2, 3] yields length 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0200
     * @tc.name testUint8ClampedArrayFullOne002
     * @tc.desc Verify constructing array [1, 2, 3] yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0300
     * @tc.name testUint8ClampedArrayFullOne003
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne003() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify Uint8ClampedArray.of yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0400
     * @tc.name testUint8ClampedArrayFullOne004
     * @tc.desc Verify Uint8ClampedArray.of yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne004() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.length());
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 10 for of(10)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0500
     * @tc.name testUint8ClampedArrayFullOne005
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 10 for of(10)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne005() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.of yields length 4 for of(1, 2, 3, 4)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0600
     * @tc.name testUint8ClampedArrayFullOne006
     * @tc.desc Verify Uint8ClampedArray.of yields length 4 for of(1, 2, 3, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne006() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3, 4);
    assertEqual(4, arr.length());
    }

    /**
     * Verify Uint8ClampedArray.from yields length 3 for from([1, 2, 3])
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0700
     * @tc.name testUint8ClampedArrayFullOne007
     * @tc.desc Verify Uint8ClampedArray.from yields length 3 for from([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne007() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    }

    /**
     * Verify arr[0] assignment stores 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0800
     * @tc.name testUint8ClampedArrayFullOne008
     * @tc.desc Verify arr[0] assignment stores 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment stores 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_0900
     * @tc.name testUint8ClampedArrayFullOne009
     * @tc.desc Verify arr[0] assignment stores 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 255);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 256 to 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1000
     * @tc.name testUint8ClampedArrayFullOne010
     * @tc.desc Verify arr[0] assignment clamps 256 to 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps -1 to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1100
     * @tc.name testUint8ClampedArrayFullOne011
     * @tc.desc Verify arr[0] assignment clamps -1 to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment stores 127 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1200
     * @tc.name testUint8ClampedArrayFullOne012
     * @tc.desc Verify arr[0] assignment stores 127 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 127);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify arr[0] assignment stores 128 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1300
     * @tc.name testUint8ClampedArrayFullOne013
     * @tc.desc Verify arr[0] assignment stores 128 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 128);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps NaN to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1400
     * @tc.name testUint8ClampedArrayFullOne014
     * @tc.desc Verify arr[0] assignment clamps NaN to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps Infinity to 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1500
     * @tc.name testUint8ClampedArrayFullOne015
     * @tc.desc Verify arr[0] assignment clamps Infinity to 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps -Infinity to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1600
     * @tc.name testUint8ClampedArrayFullOne016
     * @tc.desc Verify arr[0] assignment clamps -Infinity to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment stores -0 as 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1700
     * @tc.name testUint8ClampedArrayFullOne017
     * @tc.desc Verify arr[0] assignment stores -0 as 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps MIN_VALUE to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1800
     * @tc.name testUint8ClampedArrayFullOne018
     * @tc.desc Verify arr[0] assignment clamps MIN_VALUE to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.MIN_VALUE);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 0.4 to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_1900
     * @tc.name testUint8ClampedArrayFullOne019
     * @tc.desc Verify arr[0] assignment clamps 0.4 to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.4);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 0.5 to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2000
     * @tc.name testUint8ClampedArrayFullOne020
     * @tc.desc Verify arr[0] assignment clamps 0.5 to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.5);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 0.9 to 1 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2100
     * @tc.name testUint8ClampedArrayFullOne021
     * @tc.desc Verify arr[0] assignment clamps 0.9 to 1 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.9);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 1.5 to 2 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2200
     * @tc.name testUint8ClampedArrayFullOne022
     * @tc.desc Verify arr[0] assignment clamps 1.5 to 2 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1.5);
    assertEqual(2, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 2.5 to 2 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2300
     * @tc.name testUint8ClampedArrayFullOne023
     * @tc.desc Verify arr[0] assignment clamps 2.5 to 2 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 2.5);
    assertEqual(2, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 254.5 to 254 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2400
     * @tc.name testUint8ClampedArrayFullOne024
     * @tc.desc Verify arr[0] assignment clamps 254.5 to 254 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 254.5);
    assertEqual(254, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2500
     * @tc.name testUint8ClampedArrayFullOne025
     * @tc.desc Verify constructor element [0] equals 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0xFF);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 63 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2600
     * @tc.name testUint8ClampedArrayFullOne026
     * @tc.desc Verify constructor element [0] equals 63 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 077);
    assertEqual(63, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 200 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2700
     * @tc.name testUint8ClampedArrayFullOne027
     * @tc.desc Verify constructor element [0] equals 200 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 2e2);
    assertEqual(200, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps 0x100 to 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2800
     * @tc.name testUint8ClampedArrayFullOne028
     * @tc.desc Verify arr[0] assignment clamps 0x100 to 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0x100);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 10 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_2900
     * @tc.name testUint8ClampedArrayFullOne029
     * @tc.desc Verify constructor element [0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify constructor element [2] equals 30 for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3000
     * @tc.name testUint8ClampedArrayFullOne030
     * @tc.desc Verify constructor element [2] equals 30 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify arr[3] index access on length-3 array [10, 20, 30] throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3100
     * @tc.name testUint8ClampedArrayFullOne031
     * @tc.desc Verify arr[3] index access on length-3 array [10, 20, 30] throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify arr[-1] index access on length-3 array [10, 20, 30] throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3200
     * @tc.name testUint8ClampedArrayFullOne032
     * @tc.desc Verify arr[-1] index access on length-3 array [10, 20, 30] throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify arr[3]=99 index assignment on length-3 array [10, 20, 30] throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3300
     * @tc.name testUint8ClampedArrayFullOne033
     * @tc.desc Verify arr[3]=99 index assignment on length-3 array [10, 20, 30] throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify arr[-1]=99 index assignment on length-3 array [10, 20, 30] throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3400
     * @tc.name testUint8ClampedArrayFullOne034
     * @tc.desc Verify arr[-1]=99 index assignment on length-3 array [10, 20, 30] throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify arr[2147483647]=99 index assignment on length-3 array [10, 20, 30] throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3500
     * @tc.name testUint8ClampedArrayFullOne035
     * @tc.desc Verify arr[2147483647]=99 index assignment on length-3 array [10, 20, 30] throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing empty array yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3600
     * @tc.name testUint8ClampedArrayFullOne036
     * @tc.desc Verify constructing empty array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify constructing length-1 array yields length 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3700
     * @tc.name testUint8ClampedArrayFullOne037
     * @tc.desc Verify constructing length-1 array yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    assertEqual(1, arr.length());
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3800
     * @tc.name testUint8ClampedArrayFullOne038
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne038() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(1, arr.length());
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_3900
     * @tc.name testUint8ClampedArrayFullOne039
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne039() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(4, arr.length());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer byteOffset=byteLength
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4000
     * @tc.name testUint8ClampedArrayFullOne040
     * @tc.desc Verify ArrayBuffer byteOffset=byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne040() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(0, arr.length());
    }

    /**
     * Verify ArrayBuffer byteOffset+length RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4100
     * @tc.name testUint8ClampedArrayFullOne041
     * @tc.desc Verify ArrayBuffer byteOffset+length RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne041() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 2, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify empty array literal length=0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4200
     * @tc.name testUint8ClampedArrayFullOne042
     * @tc.desc Verify empty array literal length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructor element [0] equals 0 for array [0]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4300
     * @tc.name testUint8ClampedArrayFullOne043
     * @tc.desc Verify constructor element [0] equals 0 for array [0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify array literal [255] element=255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4400
     * @tc.name testUint8ClampedArrayFullOne044
     * @tc.desc Verify array literal [255] element=255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor clamps first (-10 to 0) and last (256 to 255) of sampled input
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4500
     * @tc.name testUint8ClampedArrayFullOne045
     * @tc.desc Verify constructor clamps first (-10 to 0) and last (256 to 255) of sampled input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-10, 0, 128, 255, 256});
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(4));
    }

    /**
     * Verify array literal 4 zeros element[2]=0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4600
     * @tc.name testUint8ClampedArrayFullOne046
     * @tc.desc Verify array literal 4 zeros element[2]=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    assertEqual(4, arr.length());
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify constructing array from src yields length 100 (no element checks)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4700
     * @tc.name testUint8ClampedArrayFullOne047
     * @tc.desc Verify constructing array from src yields length 100 (no element checks)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne047() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(100, arr.length());
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(256)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4800
     * @tc.name testUint8ClampedArrayFullOne048
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(256)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne048() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(256);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 0 for of(-10)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_4900
     * @tc.name testUint8ClampedArrayFullOne049
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 0 for of(-10)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne049() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-10);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 0 for of(Number.NaN)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5000
     * @tc.name testUint8ClampedArrayFullOne050
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 0 for of(Number.NaN)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne050() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.NaN);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(Number.POSITIVE_INFI)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5100
     * @tc.name testUint8ClampedArrayFullOne051
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(Number.POSITIVE_INFI)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne051() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(0xFF)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5200
     * @tc.name testUint8ClampedArrayFullOne052
     * @tc.desc Verify Uint8ClampedArray.of element at arr[0] equals 255 for of(0xFF)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne052() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0xFF);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(-1,0,127,255,256) clamps first (-1) to 0 and last (256) to 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5300
     * @tc.name testUint8ClampedArrayFullOne053
     * @tc.desc Verify of(-1,0,127,255,256) clamps first (-1) to 0 and last (256) to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne053() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-1, 0, 127, 255, 256);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(4));
    }

    /**
     * Verify Uint8ClampedArray.from yields length 0 for from([])
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5400
     * @tc.name testUint8ClampedArrayFullOne054
     * @tc.desc Verify Uint8ClampedArray.from yields length 0 for from([])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne054() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {});
    assertEqual(0, arr.length());
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 255 for from([256])
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5500
     * @tc.name testUint8ClampedArrayFullOne055
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from([256])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne055() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {256});
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 0 for from([-1])
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5600
     * @tc.name testUint8ClampedArrayFullOne056
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from([-1])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne056() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {-1});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 0 for from([Number.NaN])
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5700
     * @tc.name testUint8ClampedArrayFullOne057
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from([Number.NaN])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne057() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new double[] {Double.NaN});
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from yields length 3 for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5800
     * @tc.name testUint8ClampedArrayFullOne058
     * @tc.desc Verify Uint8ClampedArray.from yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne058() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify arr[0] assignment stores Number(0) as 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_5900
     * @tc.name testUint8ClampedArrayFullOne059
     * @tc.desc Verify arr[0] assignment stores Number(0) as 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps Number(256) to 255 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6000
     * @tc.name testUint8ClampedArrayFullOne060
     * @tc.desc Verify arr[0] assignment clamps Number(256) to 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps Number(-1) to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6100
     * @tc.name testUint8ClampedArrayFullOne061
     * @tc.desc Verify arr[0] assignment clamps Number(-1) to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr.$_set(0, 100) stores 100 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6200
     * @tc.name testUint8ClampedArrayFullOne062
     * @tc.desc Verify arr.$_set(0, 100) stores 100 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 100);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify arr.$_set(2, 77) stores 77 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6300
     * @tc.name testUint8ClampedArrayFullOne063
     * @tc.desc Verify arr.$_set(2, 77) stores 77 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(2, 77);
    assertEqual(77, arr.get(2));
    }

    /**
     * Verify arr.$_set(0, -5) clamps to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6400
     * @tc.name testUint8ClampedArrayFullOne064
     * @tc.desc Verify arr.$_set(0, -5) clamps to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -5);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr.$_set(10, 88) OOB on length-2 array throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6500
     * @tc.name testUint8ClampedArrayFullOne065
     * @tc.desc Verify arr.$_set(10, 88) OOB on length-2 array throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    try {
    arr.set(10, 88);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor arr.$_get(0) equals 7 for array [7, 8, 9]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6600
     * @tc.name testUint8ClampedArrayFullOne066
     * @tc.desc Verify constructor arr.$_get(0) equals 7 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    assertEqual(7, arr.get(0));
    }

    /**
     * Verify constructor arr.$_get(2) equals 9 for array [7, 8, 9]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6700
     * @tc.name testUint8ClampedArrayFullOne067
     * @tc.desc Verify constructor arr.$_get(2) equals 9 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    assertEqual(9, arr.get(2));
    }

    /**
     * Verify arr[0] assignment stores byte 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6800
     * @tc.name testUint8ClampedArrayFullOne068
     * @tc.desc Verify arr[0] assignment stores byte 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    int v = 0;
    arr.set(0, v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment stores byte 127 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_6900
     * @tc.name testUint8ClampedArrayFullOne069
     * @tc.desc Verify arr[0] assignment stores byte 127 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    int v = 127;
    arr.set(0, v);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps byte -1 to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_7000
     * @tc.name testUint8ClampedArrayFullOne070
     * @tc.desc Verify arr[0] assignment clamps byte -1 to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    int v = -1;
    arr.set(0, v);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify arr[0] assignment clamps byte -128 to 0 for length-1 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_ONE_7100
     * @tc.name testUint8ClampedArrayFullOne071
     * @tc.desc Verify arr[0] assignment clamps byte -128 to 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    int v = -128;
    arr.set(0, v);
    assertEqual(0, arr.get(0));
    }
}
