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
 * Uint8ClampedArrayAtTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayAtTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0100
     * @tc.name testUint8ClampedArrayAt001
     * @tc.desc Verify at(0) returns the first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.at(0);
    assertEqual(10, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0200
     * @tc.name testUint8ClampedArrayAt002
     * @tc.desc Verify at(1) returns the second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50});
    assertEqual(200, arr.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0300
     * @tc.name testUint8ClampedArrayAt003
     * @tc.desc Verify at(length - 1) returns the last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9, 10});
    assertEqual(10, arr.at(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0400
     * @tc.name testUint8ClampedArrayAt004
     * @tc.desc Verify at(length) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0500
     * @tc.name testUint8ClampedArrayAt005
     * @tc.desc Verify at(-1) returns the last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(30, arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0600
     * @tc.name testUint8ClampedArrayAt006
     * @tc.desc Verify at(-2) returns the second last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    assertEqual(30, arr.at(-2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0700
     * @tc.name testUint8ClampedArrayAt007
     * @tc.desc Verify at(-length - 1) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(-4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0800
     * @tc.name testUint8ClampedArrayAt008
     * @tc.desc Verify at(INT_MAX) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(2147483647));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_0900
     * @tc.name testUint8ClampedArrayAt009
     * @tc.desc Verify at(INT_MIN) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(Integer.MIN_VALUE));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1000
     * @tc.name testUint8ClampedArrayAt010
     * @tc.desc Verify at(0x7FFFFFFF) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(0x7FFFFFFF));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1100
     * @tc.name testUint8ClampedArrayAt011
     * @tc.desc Verify at(INT_MAX - 1) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(2147483646));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1200
     * @tc.name testUint8ClampedArrayAt012
     * @tc.desc Verify at(INT_MIN + 1) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(-2147483647));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1300
     * @tc.name testUint8ClampedArrayAt013
     * @tc.desc Verify at(1000000) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(1000000));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1400
     * @tc.name testUint8ClampedArrayAt014
     * @tc.desc Verify at(-1000000) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(-1000000));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1500
     * @tc.name testUint8ClampedArrayAt015
     * @tc.desc Verify at arr.at(65535) equals undefined for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(65535));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1600
     * @tc.name testUint8ClampedArrayAt016
     * @tc.desc Verify at(-65535) returns undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(arr.at(-65535));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1700
     * @tc.name testUint8ClampedArrayAt017
     * @tc.desc Verify at(0x0) returns the first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(10, arr.at(0x0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1800
     * @tc.name testUint8ClampedArrayAt018
     * @tc.desc Verify at(0x1) returns the second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(20, arr.at(0x1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_1900
     * @tc.name testUint8ClampedArrayAt019
     * @tc.desc Verify at(0xA) returns the eleventh element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12});
    assertEqual(11, arr.at(0xA));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2000
     * @tc.name testUint8ClampedArrayAt020
     * @tc.desc Verify at(0o2) returns the third element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    assertEqual(30, arr.at(02));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2100
     * @tc.name testUint8ClampedArrayAt021
     * @tc.desc Verify at(0b10) returns the third element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(30, arr.at(0b10));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2200
     * @tc.name testUint8ClampedArrayAt022
     * @tc.desc Verify at(0b11) returns undefined when index equals length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertNull(arr.at(0b11));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2300
     * @tc.name testUint8ClampedArrayAt023
     * @tc.desc Verify at(0o7) returns undefined when index equals length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7});
    assertNull(arr.at(07));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2400
     * @tc.name testUint8ClampedArrayAt024
     * @tc.desc Verify at(0) returns undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertNull(arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2500
     * @tc.name testUint8ClampedArrayAt025
     * @tc.desc Verify at(-1) returns undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertNull(arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2600
     * @tc.name testUint8ClampedArrayAt026
     * @tc.desc Verify at(1) returns undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertNull(arr.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2700
     * @tc.name testUint8ClampedArrayAt027
     * @tc.desc Verify at(INT_MAX) returns undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertNull(arr.at(2147483647));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2800
     * @tc.name testUint8ClampedArrayAt028
     * @tc.desc Verify at(INT_MIN) returns undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertNull(arr.at(Integer.MIN_VALUE));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_2900
     * @tc.name testUint8ClampedArrayAt029
     * @tc.desc Verify at(255) returns 255 in a 256-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    assertEqual(255, arr.at(255));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3000
     * @tc.name testUint8ClampedArrayAt030
     * @tc.desc Verify at(-1) returns 255 in a 256-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    assertEqual(255, arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3100
     * @tc.name testUint8ClampedArrayAt031
     * @tc.desc Verify at(0) returns 0 in a 256-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3200
     * @tc.name testUint8ClampedArrayAt032
     * @tc.desc Verify at(-256) returns 0 in a 256-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    assertEqual(0, arr.at(-256));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3300
     * @tc.name testUint8ClampedArrayAt033
     * @tc.desc Verify at(256) returns undefined in a 256-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    assertNull(arr.at(256));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3400
     * @tc.name testUint8ClampedArrayAt034
     * @tc.desc Verify at(-257) returns undefined in a 256-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    assertNull(arr.at(-257));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3500
     * @tc.name testUint8ClampedArrayAt035
     * @tc.desc Verify at(512) returns the stored value 0 in a 1024-length array filled with cyclic byte values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, i % 256);
    }
    assertEqual(0, arr.at(512));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3600
     * @tc.name testUint8ClampedArrayAt036
     * @tc.desc Verify at(1023) returns 255 in a 1024-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, i % 256);
    }
    assertEqual(255, arr.at(1023));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3700
     * @tc.name testUint8ClampedArrayAt037
     * @tc.desc Verify at(-1024) returns 0 in a 1024-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, i % 256);
    }
    assertEqual(0, arr.at(-1024));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3800
     * @tc.name testUint8ClampedArrayAt038
     * @tc.desc Verify value 256 is clamped to 255 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 256);
    assertEqual(255, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_3900
     * @tc.name testUint8ClampedArrayAt039
     * @tc.desc Verify value -1 is clamped to 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 0, 0});
    arr.set(0, -1);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4000
     * @tc.name testUint8ClampedArrayAt040
     * @tc.desc Verify NaN is clamped to 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 0, 0});
    arr.set(0, Double.NaN);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4100
     * @tc.name testUint8ClampedArrayAt041
     * @tc.desc Verify positive infinity is clamped to 255 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(255, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4200
     * @tc.name testUint8ClampedArrayAt042
     * @tc.desc Verify negative infinity is clamped to 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 0, 0});
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4300
     * @tc.name testUint8ClampedArrayAt043
     * @tc.desc Verify 127.5 is rounded to even value 128 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 127.5);
    assertEqual(128, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4400
     * @tc.name testUint8ClampedArrayAt044
     * @tc.desc Verify 128.5 is rounded to even value 128 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 128.5);
    assertEqual(128, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4500
     * @tc.name testUint8ClampedArrayAt045
     * @tc.desc Verify 0.5 is rounded to even value 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 0, 0});
    arr.set(0, 0.5);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4600
     * @tc.name testUint8ClampedArrayAt046
     * @tc.desc Verify 0.9 is rounded to 1 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 0, 0});
    arr.set(0, 0.9);
    assertEqual(1, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4700
     * @tc.name testUint8ClampedArrayAt047
     * @tc.desc Verify 0.4 is rounded to 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 0, 0});
    arr.set(0, 0.4);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4800
     * @tc.name testUint8ClampedArrayAt048
     * @tc.desc Verify 1e9 is clamped to 255 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1e9);
    assertEqual(255, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_4900
     * @tc.name testUint8ClampedArrayAt049
     * @tc.desc Verify -1e9 is clamped to 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 0, 0});
    arr.set(0, -1e9);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5000
     * @tc.name testUint8ClampedArrayAt050
     * @tc.desc Verify Number.MAX_VALUE is clamped to 255 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, Double.MAX_VALUE);
    assertEqual(255, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5100
     * @tc.name testUint8ClampedArrayAt051
     * @tc.desc Verify Number.MIN_VALUE is rounded to 0 and returned by at(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 0, 0});
    arr.set(0, Double.MIN_VALUE);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5200
     * @tc.name testUint8ClampedArrayAt052
     * @tc.desc Verify at(0) reads the first element from an ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt052() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(0, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5300
     * @tc.name testUint8ClampedArrayAt053
     * @tc.desc Verify at(-1) reads the last element from an ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt053() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(0, arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5400
     * @tc.name testUint8ClampedArrayAt054
     * @tc.desc Verify at(length) returns undefined for an ArrayBuffer view with byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt054() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertNull(arr.at(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5500
     * @tc.name testUint8ClampedArrayAt055
     * @tc.desc Verify at(0) returns undefined for a zero-length ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt055() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertNull(arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5600
     * @tc.name testUint8ClampedArrayAt056
     * @tc.desc Verify at(-1) returns 0 for a one-byte ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt056() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5700
     * @tc.name testUint8ClampedArrayAt057
     * @tc.desc Verify at(0) returns the first element value 10 for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Integer v = arr.at(0);
    assertEqual(10, v);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5800
     * @tc.name testUint8ClampedArrayAt058
     * @tc.desc Verify at(99) returns undefined for an out-of-range index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Integer v = arr.at(99);
    assertNull(v);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_5900
     * @tc.name testUint8ClampedArrayAt059
     * @tc.desc Verify at(0) returns undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Integer v = arr.at(0);
    assertNull(v);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6000
     * @tc.name testUint8ClampedArrayAt060
     * @tc.desc Verify at(1) returns the same value as bracket access
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    assertEqual(arr.get(1), arr.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6100
     * @tc.name testUint8ClampedArrayAt061
     * @tc.desc Verify at(0) returns the same value as bracket access
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(arr.get(0), arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6200
     * @tc.name testUint8ClampedArrayAt062
     * @tc.desc Verify at(-1) returns the same value as arr[length - 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    assertEqual(arr.get(2), arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6300
     * @tc.name testUint8ClampedArrayAt063
     * @tc.desc Verify at(-2) returns the same value as arr[length - 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7, 8});
    assertEqual(arr.get(2), arr.at(-2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6400
     * @tc.name testUint8ClampedArrayAt064
     * @tc.desc Verify repeated at(1) calls return the same value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 43, 44});
    Integer firstResult = arr.at(1);
    Integer secondResult = arr.at(1);
    assertEqual(43, firstResult);
    assertEqual(43, secondResult);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6500
     * @tc.name testUint8ClampedArrayAt065
     * @tc.desc Verify at() returns filled values after fill()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.fill(99);
    assertEqual(99, arr.at(0));
    assertEqual(99, arr.at(1));
    assertEqual(99, arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6600
     * @tc.name testUint8ClampedArrayAt066
     * @tc.desc Verify assigned value -5 is clamped to 0 and returned by at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(1, -5);
    assertEqual(0, arr.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6700
     * @tc.name testUint8ClampedArrayAt067
     * @tc.desc Verify assigned value 300 is clamped to 255 and returned by at(-2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(1, 300);
    assertEqual(255, arr.at(-2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6800
     * @tc.name testUint8ClampedArrayAt068
     * @tc.desc Verify at() returns updated values after copyWithin()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    assertEqual(4, arr.at(0));
    assertEqual(5, arr.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_6900
     * @tc.name testUint8ClampedArrayAt069
     * @tc.desc Verify at() returns updated first and last values after reverse()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reverse();
    assertEqual(4, arr.at(0));
    assertEqual(1, arr.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_7000
     * @tc.name testUint8ClampedArrayAt070
     * @tc.desc Verify subarray at(0) and at(-1) return expected view values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt070() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    assertEqual(20, sub.at(0));
    assertEqual(40, sub.at(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_7100
     * @tc.name testUint8ClampedArrayAt071
     * @tc.desc Verify subarray modification is reflected in parent at(1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt071() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    sub.set(0, 99);
    assertEqual(99, parent.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_7200
     * @tc.name testUint8ClampedArrayAt072
     * @tc.desc Verify slice at(0) keeps copied value after parent modification
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt072() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray cp = parent.slice(1, 3);
    parent.set(1, 200);
    assertEqual(20, cp.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_7300
     * @tc.name testUint8ClampedArrayAt073
     * @tc.desc Verify at() result can be converted and reused as an index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1, 0, 5, 9});
    int idx = (int) (BasTest.coalesce(arr.at(0), 0.0));
    assertEqual(0, arr.at(idx));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_7400
     * @tc.name testUint8ClampedArrayAt074
     * @tc.desc Verify summing values with forward at() iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int sum = 0;
    for (int i = 0; i < arr.length(); i++) {
    sum += BasTest.coalesce(arr.at(i), 0);
    }
    assertEqual(150, sum);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_AT_7500
     * @tc.name testUint8ClampedArrayAt075
     * @tc.desc Verify summing values with reverse negative at() iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayAt075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int sum = 0;
    for (int i = -1; i >= -3; i--) {
    sum += BasTest.coalesce(arr.at(i), 0);
    }
    assertEqual(60, sum);
    }
}
