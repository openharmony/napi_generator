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
 * Uint8ClampedArrayCopyWithin02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayCopyWithin02Test extends BasTest {
    /**
     * Verify copyWithin(0, 3) returns the receiver and copies the trailing values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0100
     * @tc.name testUint8ClampedArrayCopyWithinTwo001
     * @tc.desc Verify copyWithin(0, 3) returns the receiver and copies the trailing values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.copyWithin(0, 3);
    assertEqual(arr, r);
    assertEqual(4, arr.get(0));
    assertEqual(5, arr.get(1));
    }

    /**
     * Verify copyWithin(0, 1) result arr[0] equals 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0200
     * @tc.name testUint8ClampedArrayCopyWithinTwo002
     * @tc.desc Verify copyWithin(0, 1) result arr[0] equals 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.copyWithin(0, 1);
    assertEqual(20, r.get(0));
    }

    /**
     * Verify copyWithin(0, 2, 5) returns the receiver and respects the end bound
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0300
     * @tc.name testUint8ClampedArrayCopyWithinTwo003
     * @tc.desc Verify copyWithin(0, 2, 5) returns the receiver and respects the end bound
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray r = arr.copyWithin(0, 2, 5);
    assertEqual(arr, r);
    assertEqual(3, arr.get(0));
    assertEqual(5, arr.get(2));
    assertEqual(4, arr.get(3));
    }

    /**
     * Verify copyWithin on an empty array returns the unchanged receiver
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0400
     * @tc.name testUint8ClampedArrayCopyWithinTwo004
     * @tc.desc Verify copyWithin on an empty array returns the unchanged receiver
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.copyWithin(0, 0);
    assertEqual(arr, r);
    assertEqual(0, r.length());
    }

    /**
     * Verify copyWithin(0, 0) returns the receiver without changing its only value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0500
     * @tc.name testUint8ClampedArrayCopyWithinTwo005
     * @tc.desc Verify copyWithin(0, 0) returns the receiver without changing its only value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray r = arr.copyWithin(0, 0);
    assertEqual(arr, r);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify an inverted copyWithin source range leaves the receiver unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0600
     * @tc.name testUint8ClampedArrayCopyWithinTwo006
     * @tc.desc Verify an inverted copyWithin source range leaves the receiver unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.copyWithin(0, 3, 1);
    assertEqual(arr, r);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify a negative copyWithin target writes at the resolved receiver offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0700
     * @tc.name testUint8ClampedArrayCopyWithinTwo007
     * @tc.desc Verify a negative copyWithin target writes at the resolved receiver offset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.copyWithin(-2, 0);
    assertEqual(arr, r);
    assertEqual(1, arr.get(2));
    assertEqual(2, arr.get(3));
    }

    /**
     * Verify copyWithin(0, -2) result arr[0] equals 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0800
     * @tc.name testUint8ClampedArrayCopyWithinTwo008
     * @tc.desc Verify copyWithin(0, -2) result arr[0] equals 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7, 8});
    Uint8ClampedArray r = arr.copyWithin(0, -2);
    assertEqual(7, r.get(0));
    }

    /**
     * Verify a negative copyWithin end excludes the final source element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_0900
     * @tc.name testUint8ClampedArrayCopyWithinTwo009
     * @tc.desc Verify a negative copyWithin end excludes the final source element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 10, 11, 12});
    Uint8ClampedArray r = arr.copyWithin(0, 1, -1);
    assertEqual(arr, r);
    assertEqual(10, arr.get(0));
    assertEqual(11, arr.get(1));
    assertEqual(11, arr.get(2));
    }

    /**
     * Verify copyWithin returns receiver and modifies array correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1000
     * @tc.name testUint8ClampedArrayCopyWithinTwo010
     * @tc.desc Verify copyWithin returns receiver and modifies array correctly
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.copyWithin(0, 1);
    assertEqual(arr, r);
    assertEqual(2, arr.get(0));
    assertEqual(3, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify copyWithin element at arr[2] equals 100 for array [1e2, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1100
     * @tc.name testUint8ClampedArrayCopyWithinTwo011
     * @tc.desc Verify copyWithin element at arr[2] equals 100 for array [1e2, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(100, arr.get(2));
    }

    /**
     * Verify copyWithin r equals arr for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1200
     * @tc.name testUint8ClampedArrayCopyWithinTwo012
     * @tc.desc Verify copyWithin r equals arr for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.copyWithin(0, 2);
    assertEqual(arr, r);
    }

    /**
     * Verify copyWithin r.length === arr.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1300
     * @tc.name testUint8ClampedArrayCopyWithinTwo013
     * @tc.desc Verify copyWithin r.length === arr.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.copyWithin(0, 2);
    assertEqual(arr.length(), r.length());
    }

    /**
     * Verify copyWithin r.buffer === arr.buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1400
     * @tc.name testUint8ClampedArrayCopyWithinTwo014
     * @tc.desc Verify copyWithin r.buffer === arr.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.copyWithin(0, 2);
    assertEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify copyWithin r equals arr for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1500
     * @tc.name testUint8ClampedArrayCopyWithinTwo015
     * @tc.desc Verify copyWithin r equals arr for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.copyWithin(0, 2).copyWithin(1, 0);
    assertEqual(arr, r);
    }

    /**
     * Verify copyWithin yields byteLength 5 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1600
     * @tc.name testUint8ClampedArrayCopyWithinTwo016
     * @tc.desc Verify copyWithin yields byteLength 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2);
    assertEqual(5, arr.byteLength());
    }

    /**
     * Verify copyWithin yields byteOffset 0 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1700
     * @tc.name testUint8ClampedArrayCopyWithinTwo017
     * @tc.desc Verify copyWithin yields byteOffset 0 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify copyWithin byteOffset ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1800
     * @tc.name testUint8ClampedArrayCopyWithinTwo018
     * @tc.desc Verify copyWithin byteOffset ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.copyWithin(0, 1);
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify copyWithin arr.buffer buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_1900
     * @tc.name testUint8ClampedArrayCopyWithinTwo019
     * @tc.desc Verify copyWithin arr.buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo019() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.copyWithin(0, 2);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify copyWithin element at b[0] equals 30 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2000
     * @tc.name testUint8ClampedArrayCopyWithinTwo020
     * @tc.desc Verify copyWithin element at b[0] equals 30 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo020() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 10);
    a.set(1, 20);
    a.set(2, 30);
    a.set(3, 40);
    a.copyWithin(0, 2);
    assertEqual(30, b.get(0));
    }

    /**
     * Verify r arr element consistency after copyWithin
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2100
     * @tc.name testUint8ClampedArrayCopyWithinTwo021
     * @tc.desc Verify r arr element consistency after copyWithin
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.copyWithin(0, 2);
    assertEqual(arr.get(0).intValue(), r.get(0));
    assertEqual(arr.get(1).intValue(), r.get(1));
    }

    /**
     * Verify a no-op copyWithin leaves the first element unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2200
     * @tc.name testUint8ClampedArrayCopyWithinTwo022
     * @tc.desc Verify a no-op copyWithin leaves the first element unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray r = arr.copyWithin(0, 1, 1);
    assertEqual(7, r.get(0));
    }

    /**
     * Verify copyWithin element at r[1] equals 8 for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2300
     * @tc.name testUint8ClampedArrayCopyWithinTwo023
     * @tc.desc Verify copyWithin element at r[1] equals 8 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray r = arr.copyWithin(0, 1, 1);
    assertEqual(8, r.get(1));
    }

    /**
     * Verify copyWithin element at r[2] equals 9 for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2400
     * @tc.name testUint8ClampedArrayCopyWithinTwo024
     * @tc.desc Verify copyWithin element at r[2] equals 9 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray r = arr.copyWithin(0, 1, 1);
    assertEqual(9, r.get(2));
    }

    /**
     * Verify copyWithin shared buffer visibility
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2500
     * @tc.name testUint8ClampedArrayCopyWithinTwo025
     * @tc.desc Verify copyWithin shared buffer visibility
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo025() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    a.set(3, 4);
    a.set(4, 5);
    a.copyWithin(0, 3);
    assertEqual(4, b.get(0));
    }

    /**
     * Verify copyWithin element at b[1] equals 5 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2600
     * @tc.name testUint8ClampedArrayCopyWithinTwo026
     * @tc.desc Verify copyWithin element at b[1] equals 5 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo026() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    a.set(3, 4);
    a.set(4, 5);
    a.copyWithin(0, 3);
    assertEqual(5, b.get(1));
    }

    /**
     * Verify copyWithin element at b[2] equals 3 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2700
     * @tc.name testUint8ClampedArrayCopyWithinTwo027
     * @tc.desc Verify copyWithin element at b[2] equals 3 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo027() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    a.set(3, 4);
    a.set(4, 5);
    a.copyWithin(0, 3);
    assertEqual(3, b.get(2));
    }

    /**
     * Verify copyWithin yields length 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2800
     * @tc.name testUint8ClampedArrayCopyWithinTwo028
     * @tc.desc Verify copyWithin yields length 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.copyWithin(0, 2);
    assertEqual(4, b.length());
    }

    /**
     * Verify copyWithin element at arr[0] equals 200 for array [0, 0, 200, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_2900
     * @tc.name testUint8ClampedArrayCopyWithinTwo029
     * @tc.desc Verify copyWithin element at arr[0] equals 200 for array [0, 0, 200, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 200, 0});
    arr.copyWithin(0, 2, 3);
    assertEqual(200, arr.get(0));
    }

    /**
     * Verify copyWithin element at arr[0] equals 64 for array [0, 0, 64, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3000
     * @tc.name testUint8ClampedArrayCopyWithinTwo030
     * @tc.desc Verify copyWithin element at arr[0] equals 64 for array [0, 0, 64, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 64, 0});
    arr.copyWithin(0, 2, 3);
    assertEqual(64, arr.get(0));
    }

    /**
     * Verify copyWithin yields length 256 for length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3100
     * @tc.name testUint8ClampedArrayCopyWithinTwo031
     * @tc.desc Verify copyWithin yields length 256 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
        arr.set(i, i);
    }
    Uint8ClampedArray r = arr.copyWithin(0, 128);
    assertEqual(256, r.length());
    }

    /**
     * Verify copyWithin element at r[0] equals 128 for length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3200
     * @tc.name testUint8ClampedArrayCopyWithinTwo032
     * @tc.desc Verify copyWithin element at r[0] equals 128 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
        arr.set(i, i);
    }
    Uint8ClampedArray r = arr.copyWithin(0, 128);
    assertEqual(128, r.get(0));
    }

    /**
     * Verify copyWithin element at r[127] equals 255 for length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3300
     * @tc.name testUint8ClampedArrayCopyWithinTwo033
     * @tc.desc Verify copyWithin element at r[127] equals 255 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
        arr.set(i, i);
    }
    Uint8ClampedArray r = arr.copyWithin(0, 128);
    assertEqual(255, r.get(127));
    }

    /**
     * Verify copyWithin element at r[128] equals 128 for length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3400
     * @tc.name testUint8ClampedArrayCopyWithinTwo034
     * @tc.desc Verify copyWithin element at r[128] equals 128 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
        arr.set(i, i);
    }
    Uint8ClampedArray r = arr.copyWithin(0, 128);
    assertEqual(128, r.get(128));
    }

    /**
     * Verify copyWithin r equals arr for length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3500
     * @tc.name testUint8ClampedArrayCopyWithinTwo035
     * @tc.desc Verify copyWithin r equals arr for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray r = arr.copyWithin(0, 128);
    assertEqual(arr, r);
    }

    /**
     * Verify copyWithin yields length 1024 for length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3600
     * @tc.name testUint8ClampedArrayCopyWithinTwo036
     * @tc.desc Verify copyWithin yields length 1024 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.copyWithin(0, 512);
    assertEqual(1024, r.length());
    }

    /**
     * Verify copyWithin yields byteLength 1024 for length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3700
     * @tc.name testUint8ClampedArrayCopyWithinTwo037
     * @tc.desc Verify copyWithin yields byteLength 1024 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.copyWithin(0, 512);
    assertEqual(1024, r.byteLength());
    }

    /**
     * Verify copyWithin element at arr[2] equals 128 for array [0x80, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3800
     * @tc.name testUint8ClampedArrayCopyWithinTwo038
     * @tc.desc Verify copyWithin element at arr[2] equals 128 for array [0x80, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x80, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(128, arr.get(2));
    }

    /**
     * Verify copyWithin element at arr[2] equals 255 for array [0xFF, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_3900
     * @tc.name testUint8ClampedArrayCopyWithinTwo039
     * @tc.desc Verify copyWithin element at arr[2] equals 255 for array [0xFF, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify copyWithin element at arr[2] equals 255 for array [0b11111111, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_4000
     * @tc.name testUint8ClampedArrayCopyWithinTwo040
     * @tc.desc Verify copyWithin element at arr[2] equals 255 for array [0b11111111, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify copyWithin element at arr[2] equals 255 for array [0o377, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_COPY_WITHIN_TWO_4100
     * @tc.name testUint8ClampedArrayCopyWithinTwo041
     * @tc.desc Verify copyWithin element at arr[2] equals 255 for array [0o377, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayCopyWithinTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0377, 0, 0, 0, 0});
    arr.copyWithin(2, 0, 1);
    assertEqual(255, arr.get(2));
    }
}
