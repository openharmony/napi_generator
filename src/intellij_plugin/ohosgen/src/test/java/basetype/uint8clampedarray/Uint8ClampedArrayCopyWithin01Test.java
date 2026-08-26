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

import basetype.common.BasTest;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayCopyWithin01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayCopyWithin01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0100
     * @tc.name testUint8ClampedArrayCopyWithinOne001
     * @tc.desc Verify copyWithin(0,1) copies arr[1] to arr[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.copyWithin(0, 1);
    assertEqual(2, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0200
     * @tc.name testUint8ClampedArrayCopyWithinOne002
     * @tc.desc Verify copyWithin element at r[0] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.copyWithin(0, 1, 3);
    assertEqual(2, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0300
     * @tc.name testUint8ClampedArrayCopyWithinOne003
     * @tc.desc Verify copyWithin(0, 1, undefined) undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.copyWithin(0, 1);
    assertEqual(2, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0400
     * @tc.name testUint8ClampedArrayCopyWithinOne004
     * @tc.desc Verify copyWithin(2, 0) end =length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray r = arr.copyWithin(2, 0);
    assertEqual(10, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0500
     * @tc.name testUint8ClampedArrayCopyWithinOne005
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 4);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0600
     * @tc.name testUint8ClampedArrayCopyWithinOne006
     * @tc.desc Verify copyWithin element at arr[1] equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 3, 5);
    assertEqual(4, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0700
     * @tc.name testUint8ClampedArrayCopyWithinOne007
     * @tc.desc Verify copyWithin element at arr[4] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(4, 0, 1);
    assertEqual(1, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0800
     * @tc.name testUint8ClampedArrayCopyWithinOne008
     * @tc.desc Verify copyWithin element at arr[4] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(5, 0, 3);
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_0900
     * @tc.name testUint8ClampedArrayCopyWithinOne009
     * @tc.desc Verify copyWithin element at arr[4] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-1, 0, 1);
    assertEqual(1, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1000
     * @tc.name testUint8ClampedArrayCopyWithinOne010
     * @tc.desc Verify copyWithin element at arr[3] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-2, 0, 1);
    assertEqual(1, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1100
     * @tc.name testUint8ClampedArrayCopyWithinOne011
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-5, 2, 4);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1200
     * @tc.name testUint8ClampedArrayCopyWithinOne012
     * @tc.desc Verify copyWithin element at arr[0] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-100, 1, 2);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1300
     * @tc.name testUint8ClampedArrayCopyWithinOne013
     * @tc.desc Verify copyWithin with target=INT_MAX is no-op, arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2147483647, 0, 3);
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1400
     * @tc.name testUint8ClampedArrayCopyWithinOne014
     * @tc.desc Verify copyWithin element at arr[0] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(Integer.MIN_VALUE, 1, 3);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1500
     * @tc.name testUint8ClampedArrayCopyWithinOne015
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0x7FFFFFFF, 0, 2);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1600
     * @tc.name testUint8ClampedArrayCopyWithinOne016
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0x02, 0, 2);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1700
     * @tc.name testUint8ClampedArrayCopyWithinOne017
     * @tc.desc Verify copyWithin element at arr[3] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(03, 0, 1);
    assertEqual(1, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1800
     * @tc.name testUint8ClampedArrayCopyWithinOne018
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0b10, 0, 1);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_1900
     * @tc.name testUint8ClampedArrayCopyWithinOne019
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-0, 2, 4);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2000
     * @tc.name testUint8ClampedArrayCopyWithinOne020
     * @tc.desc Verify copyWithin element at arr[4] equals 1 for array [1, 2, 3, 4, 5, 6, 7, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.copyWithin(4, 0, 2);
    assertEqual(1, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2100
     * @tc.name testUint8ClampedArrayCopyWithinOne021
     * @tc.desc Verify copyWithin element at arr[3] equals 10 for array [10, 20, 30, 40, 50, 60]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(3, 0, 2);
    assertEqual(10, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2200
     * @tc.name testUint8ClampedArrayCopyWithinOne022
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, 2);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2300
     * @tc.name testUint8ClampedArrayCopyWithinOne023
     * @tc.desc Verify copyWithin element at arr[0] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 1, 3);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2400
     * @tc.name testUint8ClampedArrayCopyWithinOne024
     * @tc.desc Verify copyWithin element at arr[0] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 4);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2500
     * @tc.name testUint8ClampedArrayCopyWithinOne025
     * @tc.desc Verify copyWithin with start=length is no-op, arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 5);
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2600
     * @tc.name testUint8ClampedArrayCopyWithinOne026
     * @tc.desc Verify copyWithin element at arr[0] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -1);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2700
     * @tc.name testUint8ClampedArrayCopyWithinOne027
     * @tc.desc Verify copyWithin element at arr[0] equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -2);
    assertEqual(4, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2800
     * @tc.name testUint8ClampedArrayCopyWithinOne028
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, -5, -3);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_2900
     * @tc.name testUint8ClampedArrayCopyWithinOne029
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -100, 2);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3000
     * @tc.name testUint8ClampedArrayCopyWithinOne030
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2147483647);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3100
     * @tc.name testUint8ClampedArrayCopyWithinOne031
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, Integer.MIN_VALUE, 2);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3200
     * @tc.name testUint8ClampedArrayCopyWithinOne032
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0x02);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3300
     * @tc.name testUint8ClampedArrayCopyWithinOne033
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 02);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3400
     * @tc.name testUint8ClampedArrayCopyWithinOne034
     * @tc.desc Verify copyWithin element at arr[0] equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0b11);
    assertEqual(4, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3500
     * @tc.name testUint8ClampedArrayCopyWithinOne035
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, -0, 2);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3600
     * @tc.name testUint8ClampedArrayCopyWithinOne036
     * @tc.desc Verify copyWithin element at arr[0] equals 5 for array [1, 2, 3, 4, 5, 6, 7, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.copyWithin(0, 4, 6);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3700
     * @tc.name testUint8ClampedArrayCopyWithinOne037
     * @tc.desc Verify copyWithin element at arr[0] equals 30 for array [10, 20, 30, 40, 50, 60]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 2, 4);
    assertEqual(30, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3800
     * @tc.name testUint8ClampedArrayCopyWithinOne038
     * @tc.desc Verify copyWithin element at arr[0] equals 40 for array [10, 20, 30, 40, 50, 60]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 3, 5);
    assertEqual(40, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_3900
     * @tc.name testUint8ClampedArrayCopyWithinOne039
     * @tc.desc Verify copyWithin element at arr[1] equals 6 for array [1, 2, 3, 4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 4, 6);
    assertEqual(6, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4000
     * @tc.name testUint8ClampedArrayCopyWithinOne040
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 0);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4100
     * @tc.name testUint8ClampedArrayCopyWithinOne041
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2, 0, 1);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4200
     * @tc.name testUint8ClampedArrayCopyWithinOne042
     * @tc.desc Verify copyWithin element at arr[2] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 5);
    assertEqual(5, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4300
     * @tc.name testUint8ClampedArrayCopyWithinOne043
     * @tc.desc Verify copyWithin element at arr[2] equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 1, 4);
    assertEqual(4, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4400
     * @tc.name testUint8ClampedArrayCopyWithinOne044
     * @tc.desc Verify copyWithin element at arr[2] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 6);
    assertEqual(5, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4500
     * @tc.name testUint8ClampedArrayCopyWithinOne045
     * @tc.desc Verify copyWithin element at arr[3] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 1, 105);
    assertEqual(5, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4600
     * @tc.name testUint8ClampedArrayCopyWithinOne046
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, -1);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4700
     * @tc.name testUint8ClampedArrayCopyWithinOne047
     * @tc.desc Verify copyWithin element at arr[1] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, -2);
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4800
     * @tc.name testUint8ClampedArrayCopyWithinOne048
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, -5);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_4900
     * @tc.name testUint8ClampedArrayCopyWithinOne049
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 2147483647);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5000
     * @tc.name testUint8ClampedArrayCopyWithinOne050
     * @tc.desc Verify copyWithin with end=INT_MIN clamped to 0 is no-op, arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, Integer.MIN_VALUE);
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5100
     * @tc.name testUint8ClampedArrayCopyWithinOne051
     * @tc.desc Verify copyWithin element at arr[2] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 0x03);
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5200
     * @tc.name testUint8ClampedArrayCopyWithinOne052
     * @tc.desc Verify copyWithin element at arr[3] equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 04);
    assertEqual(4, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5300
     * @tc.name testUint8ClampedArrayCopyWithinOne053
     * @tc.desc Verify copyWithin element at arr[4] equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 0b1);
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5400
     * @tc.name testUint8ClampedArrayCopyWithinOne054
     * @tc.desc Verify copyWithin element at arr[3] equals 4 for array [1, 2, 3, 4, 5, 6, 7, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.copyWithin(0, 0, 4);
    assertEqual(4, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5500
     * @tc.name testUint8ClampedArrayCopyWithinOne055
     * @tc.desc Verify copyWithin element at arr[2] equals 10 for array [10, 20, 30, 40, 50, 60]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(2, 0, 2);
    assertEqual(10, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5600
     * @tc.name testUint8ClampedArrayCopyWithinOne056
     * @tc.desc Verify copyWithin element at arr[3] equals 50 for array [10, 20, 30, 40, 50, 60]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 1, 5);
    assertEqual(50, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5700
     * @tc.name testUint8ClampedArrayCopyWithinOne057
     * @tc.desc Verify copyWithin element at arr[0] equals 2 for array [1, 2, 3, 4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    arr.copyWithin(0, 1, 4);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5800
     * @tc.name testUint8ClampedArrayCopyWithinOne058
     * @tc.desc Verify copyWithin element at arr[2] equals 0 for array [0, 100, 200, 50, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 100, 200, 50, 80});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_5900
     * @tc.name testUint8ClampedArrayCopyWithinOne059
     * @tc.desc Verify copyWithin element at arr[2] equals 255 for array [255, 100, 200, 50, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 100, 200, 50, 80});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6000
     * @tc.name testUint8ClampedArrayCopyWithinOne060
     * @tc.desc Verify copyWithin element at arr[2] equals 127 for array [127, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(127, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6100
     * @tc.name testUint8ClampedArrayCopyWithinOne061
     * @tc.desc Verify copyWithin element at arr[2] equals 128 for array [128, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(128, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6200
     * @tc.name testUint8ClampedArrayCopyWithinOne062
     * @tc.desc Verify 256 clamp 255 copyWithin 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6300
     * @tc.name testUint8ClampedArrayCopyWithinOne063
     * @tc.desc Verify copyWithin element at arr[2] equals 0 for array [-1, 100, 100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6400
     * @tc.name testUint8ClampedArrayCopyWithinOne064
     * @tc.desc Verify copyWithin element at arr[2] equals 0 for array [Number.NaN, 100, 100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6500
     * @tc.name testUint8ClampedArrayCopyWithinOne065
     * @tc.desc Verify Infinity clamp 255 copyWithin 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6600
     * @tc.name testUint8ClampedArrayCopyWithinOne066
     * @tc.desc Verify -Infinity clamp 0 copyWithin 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6700
     * @tc.name testUint8ClampedArrayCopyWithinOne067
     * @tc.desc Verify 1e9 clamp 255 copyWithin 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6800
     * @tc.name testUint8ClampedArrayCopyWithinOne068
     * @tc.desc Verify copyWithin element at arr[2] equals 0 for array [-1e9, 100, 100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_6900
     * @tc.name testUint8ClampedArrayCopyWithinOne069
     * @tc.desc Verify 127.5 clamp 128(half-even) copyWithin 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(128, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7000
     * @tc.name testUint8ClampedArrayCopyWithinOne070
     * @tc.desc Verify 128.5 clamp 128(half-even) copyWithin 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(128, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7100
     * @tc.name testUint8ClampedArrayCopyWithinOne071
     * @tc.desc Verify 0.5 clamp 0(half-even) copyWithin 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7200
     * @tc.name testUint8ClampedArrayCopyWithinOne072
     * @tc.desc Verify copyWithin element at arr[2] equals 0 for array [0.4, 100, 100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7300
     * @tc.name testUint8ClampedArrayCopyWithinOne073
     * @tc.desc Verify copyWithin element at arr[2] equals 1 for array [0.9, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(1, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7400
     * @tc.name testUint8ClampedArrayCopyWithinOne074
     * @tc.desc Verify 2147483648 clamp 255 copyWithin 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2147483648L, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7500
     * @tc.name testUint8ClampedArrayCopyWithinOne075
     * @tc.desc Verify copyWithin element at arr[2] equals 0 for array [-0, 100, 100, 100, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-0, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7600
     * @tc.name testUint8ClampedArrayCopyWithinOne076
     * @tc.desc Verify Number.MAX_VALUE clamp 255 copyWithin 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MAX_VALUE, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7700
     * @tc.name testUint8ClampedArrayCopyWithinOne077
     * @tc.desc Verify Number.MIN_VALUE clamp 0 copyWithin 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MIN_VALUE, 100, 100, 100, 100});
    arr.copyWithin(2, 0, 1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7800
     * @tc.name testUint8ClampedArrayCopyWithinOne078
     * @tc.desc Verify copyWithin yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.copyWithin(0, 0, 0);
    assertEqual(0, r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_7900
     * @tc.name testUint8ClampedArrayCopyWithinOne079
     * @tc.desc Verify copyWithin element at arr[0] equals 42 for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    arr.copyWithin(0, 0, 1);
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8000
     * @tc.name testUint8ClampedArrayCopyWithinOne080
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for length-255 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    for (int i = 0; i < 255; i++) { arr.set(i, i);
    }
    arr.copyWithin(0, 1);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8100
     * @tc.name testUint8ClampedArrayCopyWithinOne081
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) { arr.set(i, i);
    }
    arr.copyWithin(0, 1, 3);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8200
     * @tc.name testUint8ClampedArrayCopyWithinOne082
     * @tc.desc Verify copyWithin with start=512 is no-op for length-14 array, arr[0] equals 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(14);
    for (int i = 0; i < 14; i++) { arr.set(i, i + 1);
    }
    arr.copyWithin(0, 512);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8300
     * @tc.name testUint8ClampedArrayCopyWithinOne083
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-0, -0, -0);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8400
     * @tc.name testUint8ClampedArrayCopyWithinOne084
     * @tc.desc Verify target=length-1 start=length-1 end=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(4, 4, 5);
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8500
     * @tc.name testUint8ClampedArrayCopyWithinOne085
     * @tc.desc Verify copyWithin element at arr[4] equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-1, -2, -1);
    assertEqual(4, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8600
     * @tc.name testUint8ClampedArrayCopyWithinOne086
     * @tc.desc Verify copyWithin element at arr[0] equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, -3, 4);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8700
     * @tc.name testUint8ClampedArrayCopyWithinOne087
     * @tc.desc Verify copyWithin element at arr[3] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-2, 1, -1);
    assertEqual(2, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8800
     * @tc.name testUint8ClampedArrayCopyWithinOne088
     * @tc.desc Verify copyWithin element at arr[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 0, 1);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_8900
     * @tc.name testUint8ClampedArrayCopyWithinOne089
     * @tc.desc Verify copyWithin element at arr[1] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 0, 1);
    assertEqual(1, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9000
     * @tc.name testUint8ClampedArrayCopyWithinOne090
     * @tc.desc Verify target=INT_MAX start=INT_MAX end=INT_MAX no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(2147483647, 2147483647, 2147483647);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9100
     * @tc.name testUint8ClampedArrayCopyWithinOne091
     * @tc.desc Verify target=INT_MIN start=INT_MIN end=INT_MIN no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(Integer.MIN_VALUE, Integer.MIN_VALUE, Integer.MIN_VALUE);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9200
     * @tc.name testUint8ClampedArrayCopyWithinOne092
     * @tc.desc Verify target=0x00 start=0x01 end=0x02
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0x00, 0x01, 0x02);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9300
     * @tc.name testUint8ClampedArrayCopyWithinOne093
     * @tc.desc Verify target=0o0 start=0o1 end=0o2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(00, 01, 02);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9400
     * @tc.name testUint8ClampedArrayCopyWithinOne094
     * @tc.desc Verify target=0b00 start=0b01 end=0b10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0b00, 0b01, 0b10);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9500
     * @tc.name testUint8ClampedArrayCopyWithinOne095
     * @tc.desc Verify copyWithin with start=15 is no-op for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne095() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 15);
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9600
     * @tc.name testUint8ClampedArrayCopyWithinOne096
     * @tc.desc Verify target=-length start=-length end=-length no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne096() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(-5, -5, -5);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9700
     * @tc.name testUint8ClampedArrayCopyWithinOne097
     * @tc.desc Verify length=100 copyWithin(50,0,50)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne097() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) { src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.copyWithin(50, 0, 50);
    assertEqual(0, arr.get(50));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_ONE_9800
     * @tc.name testUint8ClampedArrayCopyWithinOne098
     * @tc.desc Verify copyWithin element at arr[10] equals 20 for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinOne098() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 50; i++) { src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.copyWithin(10, 20, 30);
    assertEqual(20, arr.get(10));
    }
}
