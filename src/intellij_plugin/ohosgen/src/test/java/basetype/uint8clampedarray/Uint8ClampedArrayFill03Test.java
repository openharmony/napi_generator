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
 * Uint8ClampedArrayFill03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFill03Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0100
     * @tc.name testUint8ClampedArrayFillThree001
     * @tc.desc Verify fill element at arr[0] equals 10 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 10;
    arr.fill(v);
    assertEqual(10, arr.get(0));
    assertEqual(10, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0200
     * @tc.name testUint8ClampedArrayFillThree002
     * @tc.desc Verify fill element at arr[0] equals 50 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(50);
    assertEqual(50, arr.get(0));
    assertEqual(50, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0300
     * @tc.name testUint8ClampedArrayFillThree003
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 7;
    arr.fill(v, 1);
    assertEqual(1, arr.get(0));
    assertEqual(7, arr.get(1));
    assertEqual(7, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0400
     * @tc.name testUint8ClampedArrayFillThree004
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(77, 1);
    assertEqual(1, arr.get(0));
    assertEqual(77, arr.get(1));
    assertEqual(77, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0500
     * @tc.name testUint8ClampedArrayFillThree005
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 9;
    arr.fill(v, 1, 3);
    assertEqual(1, arr.get(0));
    assertEqual(9, arr.get(1));
    assertEqual(9, arr.get(2));
    assertEqual(4, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0600
     * @tc.name testUint8ClampedArrayFillThree006
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(88, 1, 3);
    assertEqual(1, arr.get(0));
    assertEqual(88, arr.get(1));
    assertEqual(88, arr.get(2));
    assertEqual(4, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0700
     * @tc.name testUint8ClampedArrayFillThree007
     * @tc.desc Verify fill element at arr[0] equals 100 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    int v = 100;
    arr.fill(v);
    assertEqual(100, arr.get(0));
    assertEqual(100, arr.get(1));
    assertEqual(100, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0800
     * @tc.name testUint8ClampedArrayFillThree008
     * @tc.desc Verify fill element at a[0] equals b[0] for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree008() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    Uint8ClampedArray b = new Uint8ClampedArray(3);
    int v = 42;
    a.fill(v);
    b.fill(42);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));
    assertEqual(42, a.get(0));
    assertEqual(42, a.get(1));
    assertEqual(42, a.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_0900
     * @tc.name testUint8ClampedArrayFillThree009
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree009() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 0;
    a.fill(v);
    b.fill(0);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(1));
    assertEqual(0, a.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1000
     * @tc.name testUint8ClampedArrayFillThree010
     * @tc.desc Verify fill element at a[0] equals b[0] for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree010() {
    Uint8ClampedArray a = new Uint8ClampedArray(2);
    Uint8ClampedArray b = new Uint8ClampedArray(2);
    int v = 127;
    a.fill(v);
    b.fill(127);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1100
     * @tc.name testUint8ClampedArrayFillThree011
     * @tc.desc Verify number byte fill round (5.7->6)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree011() {
    Uint8ClampedArray a = new Uint8ClampedArray(2);
    Uint8ClampedArray b = new Uint8ClampedArray(2);
    int v = 5;
    a.fill(v);
    b.fill(5.7);
    assertEqual(5, a.get(0));
    assertEqual(6, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1200
     * @tc.name testUint8ClampedArrayFillThree012
     * @tc.desc Verify fill element at a[1] equals b[1] for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree012() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int v = 1;
    a.fill(v, 2);
    b.fill(1, 2);
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1300
     * @tc.name testUint8ClampedArrayFillThree013
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree013() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 9;
    a.fill(v, 0, 4);
    b.fill(9, 0, 4);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1400
     * @tc.name testUint8ClampedArrayFillThree014
     * @tc.desc Verify fill(byte) on length-3 array fills all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 8;
    arr.fill(v);
    assertEqual(8, arr.get(0));
    assertEqual(8, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1500
     * @tc.name testUint8ClampedArrayFillThree015
     * @tc.desc Verify fill(number) on length-3 array fills all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(80);
    assertEqual(80, arr.get(0));
    assertEqual(80, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1600
     * @tc.name testUint8ClampedArrayFillThree016
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 6;
    arr.fill(v, 2);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(6, arr.get(2));
    assertEqual(6, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1700
     * @tc.name testUint8ClampedArrayFillThree017
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(66, 2);
    assertEqual(1, arr.get(0));
    assertEqual(66, arr.get(2));
    assertEqual(66, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1800
     * @tc.name testUint8ClampedArrayFillThree018
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree018() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 4;
    a.fill(v);
    b.fill(4);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_1900
     * @tc.name testUint8ClampedArrayFillThree019
     * @tc.desc Verify fill yields length before for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.length();
    arr.fill(99, 1, 3);
    assertEqual(before, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2000
     * @tc.name testUint8ClampedArrayFillThree020
     * @tc.desc Verify fill yields byteLength before for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.byteLength();
    arr.fill(50);
    assertEqual(before, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2100
     * @tc.name testUint8ClampedArrayFillThree021
     * @tc.desc Verify fill buffer reference matches for array new ArrayBuffer(4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(4));
    ArrayBuffer bufBefore = arr.buffer();
    arr.fill(7);
    assertEqual(bufBefore, arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2200
     * @tc.name testUint8ClampedArrayFillThree022
     * @tc.desc Verify fill yields byteOffset offsetBefore for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int offsetBefore = arr.byteOffset();
    arr.fill(11);
    assertEqual(offsetBefore, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2300
     * @tc.name testUint8ClampedArrayFillThree023
     * @tc.desc Verify fill yields BYTES_PER_ELEMENT 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(5);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2400
     * @tc.name testUint8ClampedArrayFillThree024
     * @tc.desc Verify fill ref1 equals ref2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray ref1 = arr.fill(1);
    Uint8ClampedArray ref2 = ref1.fill(2);
    assertEqual(ref2, ref1);
    assertEqual(arr, ref2);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2500
     * @tc.name testUint8ClampedArrayFillThree025
     * @tc.desc Verify fill element at arr[0] equals 20 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(10);
    arr.fill(20);
    assertEqual(20, arr.get(0));
    assertEqual(20, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2600
     * @tc.name testUint8ClampedArrayFillThree026
     * @tc.desc Verify fill element at arr[0] equals 5 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(10, 1, 3);
    arr.fill(5);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(5, arr.get(2));
    assertEqual(5, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2700
     * @tc.name testUint8ClampedArrayFillThree027
     * @tc.desc Verify fill ret equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    Uint8ClampedArray ret = arr.fill(v);
    assertEqual(arr, ret);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2800
     * @tc.name testUint8ClampedArrayFillThree028
     * @tc.desc Verify fill ret equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray ret = arr.fill(50);
    assertEqual(arr, ret);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_2900
     * @tc.name testUint8ClampedArrayFillThree029
     * @tc.desc Verify fill retA equals a for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree029() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    Uint8ClampedArray retA = a.fill(v);
    Uint8ClampedArray retB = b.fill(50);
    assertEqual(a, retA);
    assertEqual(b, retB);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3000
     * @tc.name testUint8ClampedArrayFillThree030
     * @tc.desc Verify fill yields length 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 7;
    Uint8ClampedArray ret = arr.fill(v).fill(v, 1).fill(v, 2, 3);
    assertEqual(4, ret.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3100
     * @tc.name testUint8ClampedArrayFillThree031
     * @tc.desc Verify fill yields length 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray ret = arr.fill(70).fill(71, 1).fill(72, 2, 3);
    assertEqual(4, ret.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3200
     * @tc.name testUint8ClampedArrayFillThree032
     * @tc.desc Verify fill byte then number returns this
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 3;
    Uint8ClampedArray ret = arr.fill(v).fill(99);
    assertEqual(arr, ret);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3300
     * @tc.name testUint8ClampedArrayFillThree033
     * @tc.desc Verify fill byte then number overwrites all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 3;
    arr.fill(v).fill(99);
    assertEqual(99, arr.get(0));
    assertEqual(99, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3400
     * @tc.name testUint8ClampedArrayFillThree034
     * @tc.desc Verify fill arr.toString() equals '8,8,8' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(8);
    assertEqual("8,8,8", String.valueOf(arr));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3500
     * @tc.name testUint8ClampedArrayFillThree035
     * @tc.desc Verify fill a.toString() equals b.toString() for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree035() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 8;
    a.fill(v);
    b.fill(8);
    assertEqual(String.valueOf(b), String.valueOf(a));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3600
     * @tc.name testUint8ClampedArrayFillThree036
     * @tc.desc Verify fill arr.join('|') equals '5|5|5' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    arr.fill(v);
    assertEqual("5|5|5", arr.join("|"));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3700
     * @tc.name testUint8ClampedArrayFillThree037
     * @tc.desc Verify fill a.join(',') equals b.join(',') for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree037() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    a.fill(v);
    b.fill(5);
    assertEqual(b.join(","), a.join(","));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3800
     * @tc.name testUint8ClampedArrayFillThree038
     * @tc.desc Verify fill element at arr[0] equals arr.$_get(0) for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 11;
    arr.fill(v);
    assertEqual(arr.get(0), arr.get(0));
    assertEqual(arr.get(1), arr.get(1));
    assertEqual(arr.get(2), arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_3900
     * @tc.name testUint8ClampedArrayFillThree039
     * @tc.desc Verify subarray element at sub[0] equals 9 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree039() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    parent.fill(9);
    assertEqual(9, sub.get(0));
    assertEqual(9, sub.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4000
     * @tc.name testUint8ClampedArrayFillThree040
     * @tc.desc Verify subarray element at parent[1] equals 7 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree040() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    sub.fill(7);
    assertEqual(7, parent.get(1));
    assertEqual(7, parent.get(2));
    assertEqual(1, parent.get(0));
    assertEqual(4, parent.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4100
     * @tc.name testUint8ClampedArrayFillThree041
     * @tc.desc Verify fill element at secondView[0] equals 5 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree041() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.fill(5);
    assertEqual(5, secondView.get(0));
    assertEqual(5, secondView.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4200
     * @tc.name testUint8ClampedArrayFillThree042
     * @tc.desc Verify fill buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree042() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.fill(5);
    assertEqual(secondView.buffer(), firstView.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4300
     * @tc.name testUint8ClampedArrayFillThree043
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree043() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    parent.fill(8);
    assertEqual(parent.buffer(), sub.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4400
     * @tc.name testUint8ClampedArrayFillThree044
     * @tc.desc Verify slice element at cp[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree044() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray cp = parent.slice(0, 2);
    parent.fill(9);
    assertEqual(1, cp.get(0));
    assertEqual(2, cp.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4500
     * @tc.name testUint8ClampedArrayFillThree045
     * @tc.desc Verify slice result shares no buffer with parent after fill
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree045() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray cp = parent.slice();
    parent.fill(99);
    assertNotEqual(parent.buffer(), cp.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4600
     * @tc.name testUint8ClampedArrayFillThree046
     * @tc.desc Verify fill element at full[0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree046() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    Uint8ClampedArray window = new Uint8ClampedArray(buf, 2, 2);
    window.fill(3);
    assertEqual(0, full.get(0));
    assertEqual(0, full.get(1));
    assertEqual(3, full.get(2));
    assertEqual(3, full.get(3));
    assertEqual(0, full.get(4));
    assertEqual(0, full.get(5));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4700
     * @tc.name testUint8ClampedArrayFillThree047
     * @tc.desc Verify slice yields byteOffset offBefore for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree047() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray cp = parent.slice();
    int offBefore = cp.byteOffset();
    parent.fill(1);
    assertEqual(offBefore, cp.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4800
     * @tc.name testUint8ClampedArrayFillThree048
     * @tc.desc Verify fill element at a[0] equals 127 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree048() {
    Uint8ClampedArray a = new Uint8ClampedArray(2);
    Uint8ClampedArray b = new Uint8ClampedArray(2);
    int v = 127;
    a.fill(v);
    b.fill(256);
    assertEqual(127, a.get(0));
    assertEqual(255, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_4900
     * @tc.name testUint8ClampedArrayFillThree049
     * @tc.desc Verify fill element at arr[0] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.fill(Double.NaN);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5000
     * @tc.name testUint8ClampedArrayFillThree050
     * @tc.desc Verify number fill(POSITIVE_INFINITY) 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5100
     * @tc.name testUint8ClampedArrayFillThree051
     * @tc.desc Verify number fill(-POSITIVE_INFINITY) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    arr.fill(-Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5200
     * @tc.name testUint8ClampedArrayFillThree052
     * @tc.desc Verify number fill(0.5) 0 (half-even)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(0.5);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5300
     * @tc.name testUint8ClampedArrayFillThree053
     * @tc.desc Verify number fill(1.5) 2 (half-even)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(1.5);
    assertEqual(2, arr.get(0));
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5400
     * @tc.name testUint8ClampedArrayFillThree054
     * @tc.desc Verify number fill(2.5) 2 (half-even)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(2.5);
    assertEqual(2, arr.get(0));
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5500
     * @tc.name testUint8ClampedArrayFillThree055
     * @tc.desc Verify fill element at arr[0] equals 0 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(-1);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5600
     * @tc.name testUint8ClampedArrayFillThree056
     * @tc.desc Verify fill element at arr[0] equals 0 for array [5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    arr.fill(-0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5700
     * @tc.name testUint8ClampedArrayFillThree057
     * @tc.desc Verify fill element at arr[0] equals 255 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(1e9);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5800
     * @tc.name testUint8ClampedArrayFillThree058
     * @tc.desc Verify fill element at arr[0] equals 0 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(-1e9);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_5900
     * @tc.name testUint8ClampedArrayFillThree059
     * @tc.desc Verify number fill(256, 1, 3) clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    arr.fill(256, 1, 3);
    assertEqual(10, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    assertEqual(40, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6000
     * @tc.name testUint8ClampedArrayFillThree060
     * @tc.desc Verify fill element at arr[0] equals 0 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    arr.fill(-5, 0, 2);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(40, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6100
     * @tc.name testUint8ClampedArrayFillThree061
     * @tc.desc Verify fill element at arr[0] equals 10 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    arr.fill(Double.NaN, 1);
    assertEqual(10, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6200
     * @tc.name testUint8ClampedArrayFillThree062
     * @tc.desc Verify number fill(255.4) 255 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(255.4);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6300
     * @tc.name testUint8ClampedArrayFillThree063
     * @tc.desc Verify number fill(255.6) 255 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(255.6);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6400
     * @tc.name testUint8ClampedArrayFillThree064
     * @tc.desc Verify number fill(254.5) 254 (half-even)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(254.5);
    assertEqual(254, arr.get(0));
    assertEqual(254, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6500
     * @tc.name testUint8ClampedArrayFillThree065
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree065() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 9;
    a.fill(v, -2);
    b.fill(v, 2);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6600
     * @tc.name testUint8ClampedArrayFillThree066
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree066() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    a.fill(9, -2);
    b.fill(9, 2);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6700
     * @tc.name testUint8ClampedArrayFillThree067
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree067() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 7;
    a.fill(v, 0, -1);
    b.fill(v, 0, 3);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(2), a.get(2));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6800
     * @tc.name testUint8ClampedArrayFillThree068
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree068() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    a.fill(7, 0, -1);
    b.fill(7, 0, 3);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_6900
     * @tc.name testUint8ClampedArrayFillThree069
     * @tc.desc Verify byte and number fill with negative start end equal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree069() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 5;
    a.fill(v, -3, -1);
    b.fill(5, -3, -1);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));
    assertEqual(b.get(3), a.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7000
     * @tc.name testUint8ClampedArrayFillThree070
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 9;
    arr.fill(v, 2, 2);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7100
     * @tc.name testUint8ClampedArrayFillThree071
     * @tc.desc Verify fill element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 9;
    arr.fill(v, 3, 1);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7200
     * @tc.name testUint8ClampedArrayFillThree072
     * @tc.desc Verify fill ret equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    Uint8ClampedArray ret = arr.fill(v, 2, 1);
    assertEqual(arr, ret);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7300
     * @tc.name testUint8ClampedArrayFillThree073
     * @tc.desc Verify fill element at a[0] equals b[0] for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree073() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    a.fill(v, 3, 3);
    b.fill(9, 3, 3);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7400
     * @tc.name testUint8ClampedArrayFillThree074
     * @tc.desc Verify fill ret equals arr for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int v = 7;
    Uint8ClampedArray ret = arr.fill(v);
    assertEqual(arr, ret);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7500
     * @tc.name testUint8ClampedArrayFillThree075
     * @tc.desc Verify fill yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int v = 5;
    arr.fill(v);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7600
     * @tc.name testUint8ClampedArrayFillThree076
     * @tc.desc Verify fill yields length retB.length for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree076() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    Uint8ClampedArray b = new Uint8ClampedArray(0);
    int v = 3;
    Uint8ClampedArray retA = a.fill(v);
    Uint8ClampedArray retB = b.fill(3);
    assertEqual(retB.length(), retA.length());
    assertEqual(a, retA);
    assertEqual(b, retB);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7700
     * @tc.name testUint8ClampedArrayFillThree077
     * @tc.desc Verify fill ret equals arr for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray ret = arr.fill(9, 0, 0);
    assertEqual(arr, ret);
    assertEqual(0, ret.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7800
     * @tc.name testUint8ClampedArrayFillThree078
     * @tc.desc Verify fill ret equals arr for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int v = 4;
    Uint8ClampedArray ret = arr.fill(v, 5, 10);
    assertEqual(arr, ret);
    assertEqual(0, ret.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_7900
     * @tc.name testUint8ClampedArrayFillThree079
     * @tc.desc Verify fill element at full[0] equals 100 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree079() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    full.set(0, 100);
    full.set(5, 200);
    Uint8ClampedArray window = new Uint8ClampedArray(buf, 2, 2);
    int v = 9;
    window.fill(v);
    assertEqual(100, full.get(0));
    assertEqual(200, full.get(5));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8000
     * @tc.name testUint8ClampedArrayFillThree080
     * @tc.desc Verify slice element at cp[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray cp = arr.slice();
    int v = 5;
    arr.fill(v);
    assertEqual(1, cp.get(0));
    assertEqual(2, cp.get(1));
    assertEqual(3, cp.get(2));
    assertEqual(4, cp.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8100
     * @tc.name testUint8ClampedArrayFillThree081
     * @tc.desc Verify fill element at arr[50] equals 127 for length-100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree081() {
    int v = 127;
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    arr.fill(v);
    assertEqual(127, arr.get(50));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8200
     * @tc.name testUint8ClampedArrayFillThree082
     * @tc.desc Verify fill element at arr[50] equals 0 for length-100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree082() {
    int v = -1;
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    arr.fill(v);
    assertEqual(0, arr.get(50));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8300
     * @tc.name testUint8ClampedArrayFillThree083
     * @tc.desc Verify fill element at arr[3] equals 6 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree083() {
    int v = 6;
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    arr.fill(v);
    assertEqual(6, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8400
     * @tc.name testUint8ClampedArrayFillThree084
     * @tc.desc Verify fill element at all[2] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree084() {
    int v = 9;
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 0, 2);
    view.fill(v);
    Uint8ClampedArray all = new Uint8ClampedArray(buf);
    assertEqual(0, all.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8500
     * @tc.name testUint8ClampedArrayFillThree085
     * @tc.desc Verify fill arr.$_get(0) equals 42 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.fill(42.0);
    assertEqual(42, arr.get(0));
    assertEqual(42, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8600
     * @tc.name testUint8ClampedArrayFillThree086
     * @tc.desc Verify fill element at arr[0] equals 123 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.fill(123.0);
    assertEqual(123, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8700
     * @tc.name testUint8ClampedArrayFillThree087
     * @tc.desc Verify fill element at arr[0] equals 77 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.fill(77.0);
    assertEqual(77, arr.get(0));
    assertEqual(77, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8800
     * @tc.name testUint8ClampedArrayFillThree088
     * @tc.desc Verify fill element at arr[0] equals 5 for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    arr.fill(5.0);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(9));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_8900
     * @tc.name testUint8ClampedArrayFillThree089
     * @tc.desc Verify fill element at arr[0] equals 200 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.fill(200.0);
    assertEqual(200, arr.get(0));
    assertEqual(200, arr.get(255));
    assertEqual(256, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_9000
     * @tc.name testUint8ClampedArrayFillThree090
     * @tc.desc Verify fill element at arr[0] equals 150 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(150.0);
    assertEqual(150, arr.get(0));
    assertEqual(150, arr.get(1023));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_9100
     * @tc.name testUint8ClampedArrayFillThree091
     * @tc.desc Verify fill element at arr[0] equals 255 for length-65535 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    arr.fill(256.0);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(65534));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILL_THREE_9200
     * @tc.name testUint8ClampedArrayFillThree092
     * @tc.desc Verify fill number in range 100..200 of length-1000 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFillThree092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1000);
    arr.fill(88.0, 100, 200);
    assertEqual(0, arr.get(99));
    assertEqual(88, arr.get(100));
    assertEqual(88, arr.get(199));
    assertEqual(0, arr.get(200));}
}
