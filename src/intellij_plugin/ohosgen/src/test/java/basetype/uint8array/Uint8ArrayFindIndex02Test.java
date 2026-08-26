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

package basetype.uint8array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindIndex02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindIndex02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0100
     * @tc.name testUint8ArrayFindIndex001
     * @tc.desc Verify findIndex returns number type when element is found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex001() {
    Uint8Array arr = Uint8Array.of(5, 15, 25);
    int result = arr.findIndex((value) -> value == 15);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0200
     * @tc.name testUint8ArrayFindIndex002
     * @tc.desc Verify findIndex returns number type when element is not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex002() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0300
     * @tc.name testUint8ArrayFindIndex003
     * @tc.desc Verify findIndex returns number type on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex003() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findIndex((value) -> true);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0400
     * @tc.name testUint8ArrayFindIndex004
     * @tc.desc Verify findIndex returns number type with hexadecimal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex004() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value == 0x0A);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0500
     * @tc.name testUint8ArrayFindIndex005
     * @tc.desc Verify findIndex returns number type with binary comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex005() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value > 0b0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0600
     * @tc.name testUint8ArrayFindIndex006
     * @tc.desc Verify array length property type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex006() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findIndex((value) -> value == 3);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0700
     * @tc.name testUint8ArrayFindIndex007
     * @tc.desc Verify array byteLength property type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex007() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.findIndex((value) -> value > 5);
    assertEqual(3, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0800
     * @tc.name testUint8ArrayFindIndex008
     * @tc.desc Verify array byteOffset property type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex008() {
    Uint8Array arr = Uint8Array.of(100, 200);
    arr.findIndex((value) -> value == 200);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_0900
     * @tc.name testUint8ArrayFindIndex009
     * @tc.desc Verify array BYTES_PER_ELEMENT property type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex009() {
    Uint8Array arr = Uint8Array.of(50, 100, 150);
    arr.findIndex((value) -> value > 75);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1000
     * @tc.name testUint8ArrayFindIndex010
     * @tc.desc Verify array buffer property type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex010() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.findIndex((value) -> value == 2);
    assertEqual(3, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1100
     * @tc.name testUint8ArrayFindIndex011
     * @tc.desc Verify array name property type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex011() {
    Uint8Array arr = Uint8Array.of(7, 14, 21);
    arr.findIndex((value) -> value % 7 == 0);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1200
     * @tc.name testUint8ArrayFindIndex012
     * @tc.desc Verify subarray view byteOffset type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex012() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(1, 4);
    sub.findIndex((value) -> value == 2);
    assertEqual(1, sub.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1300
     * @tc.name testUint8ArrayFindIndex013
     * @tc.desc Verify subarray view byteLength type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex013() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(2, 5);
    sub.findIndex((value) -> value > 3);
    assertEqual(3, sub.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1400
     * @tc.name testUint8ArrayFindIndex014
     * @tc.desc Verify ArrayBuffer view byteOffset type after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex014() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array view = new Uint8Array(buf, 2, 4);
    view.set(0, 10);
    view.findIndex((value) -> value == 10);
    assertEqual(2, view.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1500
     * @tc.name testUint8ArrayFindIndex015
     * @tc.desc Verify findIndex returns correct index with hexadecimal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex015() {
    Uint8Array arr = Uint8Array.of(0, 10, 20, 30);
    int result = arr.findIndex((value) -> value == 0x0A);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1600
     * @tc.name testUint8ArrayFindIndex016
     * @tc.desc Verify findIndex returns correct index with binary comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex016() {
    Uint8Array arr = Uint8Array.of(15, 30);
    int result = arr.findIndex((value) -> value == 0b1111);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1700
     * @tc.name testUint8ArrayFindIndex017
     * @tc.desc Verify findIndex returns correct index with octal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex017() {
    Uint8Array arr = Uint8Array.of(10, 16);
    int result = arr.findIndex((value) -> value == 020);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1800
     * @tc.name testUint8ArrayFindIndex018
     * @tc.desc Verify findIndex returns correct index with scientific notation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex018() {
    Uint8Array arr = Uint8Array.of(10, 1, 1);
    int result = arr.findIndex((value) -> value == 1e1);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_1900
     * @tc.name testUint8ArrayFindIndex019
     * @tc.desc Verify findIndex returns correct index with expression comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex019() {
    Uint8Array arr = Uint8Array.of(100, 240);
    int result = arr.findIndex((value) -> value == (0xFF - 0x0F));
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2000
     * @tc.name testUint8ArrayFindIndex020
     * @tc.desc Verify findIndex returns correct index with greater than comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex020() {
    Uint8Array arr = Uint8Array.of(250, 251);
    int result = arr.findIndex((value) -> value > 0xFA);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2100
     * @tc.name testUint8ArrayFindIndex021
     * @tc.desc Verify findIndex returns correct index with greater than or equal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex021() {
    Uint8Array arr = Uint8Array.of(127, 128);
    int result = arr.findIndex((value) -> value >= 0x80);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2200
     * @tc.name testUint8ArrayFindIndex022
     * @tc.desc Verify findIndex returns correct index with less than comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex022() {
    Uint8Array arr = Uint8Array.of(100, 50, 0);
    int result = arr.findIndex((value) -> value < 0x40);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2300
     * @tc.name testUint8ArrayFindIndex023
     * @tc.desc Verify findIndex returns correct index for 0x7F boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex023() {
    Uint8Array arr = Uint8Array.of(126, 127, 128);
    int result = arr.findIndex((value) -> value == 0x7F);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2400
     * @tc.name testUint8ArrayFindIndex024
     * @tc.desc Verify findIndex returns correct index for 0x80 boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex024() {
    Uint8Array arr = Uint8Array.of(127, 128, 129);
    int result = arr.findIndex((value) -> value == 0x80);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2500
     * @tc.name testUint8ArrayFindIndex025
     * @tc.desc Verify findIndex returns correct index with binary greater than comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex025() {
    Uint8Array arr = Uint8Array.of(127, 128);
    int result = arr.findIndex((value) -> value > 0b01111111);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2600
     * @tc.name testUint8ArrayFindIndex026
     * @tc.desc Verify findIndex returns correct index with arithmetic expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex026() {
    Uint8Array arr = Uint8Array.of(30, 40);
    int result = arr.findIndex((value) -> value == (10 + 20));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2700
     * @tc.name testUint8ArrayFindIndex027
     * @tc.desc Verify findIndex returns correct index for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex027() {
    Uint8Array arr = Uint8Array.of(50);
    int result = arr.findIndex((value) -> value == 50);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2800
     * @tc.name testUint8ArrayFindIndex028
     * @tc.desc Verify findIndex returns -1 when element not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex028() {
    Uint8Array arr = Uint8Array.of(100, 150);
    int result = arr.findIndex((value) -> value == 200);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_2900
     * @tc.name testUint8ArrayFindIndex029
     * @tc.desc Verify findIndex returns -1 when condition never satisfied
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex029() {
    Uint8Array arr = Uint8Array.of(0, 255);
    int result = arr.findIndex((value) -> value > 255);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3000
     * @tc.name testUint8ArrayFindIndex030
     * @tc.desc Verify findIndex returns -1 when negative condition never satisfied
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex030() {
    Uint8Array arr = Uint8Array.of(0, 1);
    int result = arr.findIndex((value) -> value < 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3100
     * @tc.name testUint8ArrayFindIndex031
     * @tc.desc Verify findIndex returns correct index with greater than comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex031() {
    Uint8Array arr = Uint8Array.of(201, 202, 203);
    int result = arr.findIndex((value) -> value > 200);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3200
     * @tc.name testUint8ArrayFindIndex032
     * @tc.desc Verify findIndex returns correct index for 0xFF boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex032() {
    Uint8Array arr = Uint8Array.of(0, 255, 0);
    int result = arr.findIndex((value) -> value == 0xFF);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3300
     * @tc.name testUint8ArrayFindIndex033
     * @tc.desc Verify findIndex returns correct index with not equal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex033() {
    Uint8Array arr = Uint8Array.of(0, 0, 1);
    int result = arr.findIndex((value) -> value != 0);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3400
     * @tc.name testUint8ArrayFindIndex034
     * @tc.desc Verify findIndex returns correct index with less than or equal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex034() {
    Uint8Array arr = Uint8Array.of(10, 11, 12);
    int result = arr.findIndex((value) -> value <= 10);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3500
     * @tc.name testUint8ArrayFindIndex035
     * @tc.desc Verify findIndex returns -1 when condition never satisfied for 0xFF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex035() {
    Uint8Array arr = Uint8Array.of(255, 254);
    int result = arr.findIndex((value) -> value > 0xFF);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3600
     * @tc.name testUint8ArrayFindIndex036
     * @tc.desc Verify findIndex returns correct index with greater than or equal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex036() {
    Uint8Array arr = Uint8Array.of(239, 240, 241);
    int result = arr.findIndex((value) -> value >= 0xF0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3700
     * @tc.name testUint8ArrayFindIndex037
     * @tc.desc Verify array length remains unchanged after findIndex finds element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex037() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.findIndex((value) -> value == 30);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3800
     * @tc.name testUint8ArrayFindIndex038
     * @tc.desc Verify array length remains unchanged after findIndex does not find element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    arr.findIndex((value) -> value > 100);
    assertEqual(4, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_3900
     * @tc.name testUint8ArrayFindIndex039
     * @tc.desc Verify empty array length remains 0 after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex039() {
    Uint8Array arr = new Uint8Array();
    arr.findIndex((value) -> true);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4000
     * @tc.name testUint8ArrayFindIndex040
     * @tc.desc Verify array byteLength remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex040() {
    Uint8Array arr = Uint8Array.of(255, 254, 253, 252, 251);
    arr.findIndex((value) -> value > 250);
    assertEqual(5, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4100
     * @tc.name testUint8ArrayFindIndex041
     * @tc.desc Verify default view byteOffset remains 0 after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex041() {
    Uint8Array arr = Uint8Array.of(100, 200, 300);
    arr.findIndex((value) -> value == 200);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4200
     * @tc.name testUint8ArrayFindIndex042
     * @tc.desc Verify BYTES_PER_ELEMENT remains 1 after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    arr.findIndex((value) -> value % 2 == 0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4300
     * @tc.name testUint8ArrayFindIndex043
     * @tc.desc Verify array name remains 'Uint8Array' after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex043() {
    Uint8Array arr = Uint8Array.of(7, 14, 21, 28);
    arr.findIndex((value) -> value % 7 == 0);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4400
     * @tc.name testUint8ArrayFindIndex044
     * @tc.desc Verify buffer byteLength remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int before = arr.buffer().byteLength();
    arr.findIndex((value) -> value == 3);
    assertEqual(before, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4500
     * @tc.name testUint8ArrayFindIndex045
     * @tc.desc Verify large array length remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex045() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(50, 88);
    arr.findIndex((value) -> value == 88);
    assertEqual(100, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4600
     * @tc.name testUint8ArrayFindIndex046
     * @tc.desc Verify original array length remains unchanged after subarray findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    Uint8Array sub = arr.subarray(1, 4);
    sub.findIndex((value) -> value == 2);
    assertEqual(6, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4700
     * @tc.name testUint8ArrayFindIndex047
     * @tc.desc Verify subarray view byteLength remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex047() {
    Uint8Array arr = Uint8Array.of(0, 10, 20, 30, 40);
    Uint8Array sub = arr.subarray(1, 4);
    int subByteLen = sub.byteLength();
    sub.findIndex((value) -> value == 20);
    assertEqual(subByteLen, sub.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4800
     * @tc.name testUint8ArrayFindIndex048
     * @tc.desc Verify ArrayBuffer view byteOffset remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex048() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array view = new Uint8Array(buf, 3, 3);
    view.set(0, 55);
    int viewOffset = view.byteOffset();
    view.findIndex((value) -> value == 55);
    assertEqual(viewOffset, view.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_4900
     * @tc.name testUint8ArrayFindIndex049
     * @tc.desc Verify ArrayBuffer view byteLength remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex049() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Uint8Array view = new Uint8Array(buf, 2, 6);
    view.set(0, 77);
    view.findIndex((value) -> value == 77);
    assertEqual(6, view.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5000
     * @tc.name testUint8ArrayFindIndex050
     * @tc.desc Verify empty ArrayBuffer view byteLength remains 0 after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex050() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array view = new Uint8Array(buf);
    view.findIndex((value) -> true);
    assertEqual(0, view.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5100
     * @tc.name testUint8ArrayFindIndex051
     * @tc.desc Verify array element at index 0 remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex051() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.findIndex((value) -> value == 30);
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5200
     * @tc.name testUint8ArrayFindIndex052
     * @tc.desc Verify array element at index 2 remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex052() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.findIndex((value) -> value == 30);
    assertEqual(30, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5300
     * @tc.name testUint8ArrayFindIndex053
     * @tc.desc Verify array element at index 4 remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex053() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.findIndex((value) -> value == 30);
    assertEqual(50, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5400
     * @tc.name testUint8ArrayFindIndex054
     * @tc.desc Verify all array elements remain unchanged when findIndex does not find element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex054() {
    Uint8Array arr = Uint8Array.of(255, 254, 253, 0);
    arr.findIndex((value) -> value > 300);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5500
     * @tc.name testUint8ArrayFindIndex055
     * @tc.desc Verify array elements remain unchanged when findIndex finds element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex055() {
    Uint8Array arr = Uint8Array.of(128, 64, 32, 16);
    arr.findIndex((value) -> value == 128);
    assertEqual(64, arr.get(1));
    assertEqual(32, arr.get(2));
    assertEqual(16, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5600
     * @tc.name testUint8ArrayFindIndex056
     * @tc.desc Verify array elements remain unchanged after findIndex finds last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex056() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 99);
    arr.findIndex((value) -> value == 99);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5700
     * @tc.name testUint8ArrayFindIndex057
     * @tc.desc Verify array elements remain unchanged after two consecutive findIndex calls
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex057() {
    Uint8Array arr = Uint8Array.of(11, 22, 33, 44);
    arr.findIndex((value) -> value > 20);
    arr.findIndex((value) -> value < 40);
    assertEqual(11, arr.get(0));
    assertEqual(22, arr.get(1));
    assertEqual(33, arr.get(2));
    assertEqual(44, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5800
     * @tc.name testUint8ArrayFindIndex058
     * @tc.desc Verify original array elements remain unchanged after subarray findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex058() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(1, 4);
    sub.findIndex((value) -> value == 2);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_5900
     * @tc.name testUint8ArrayFindIndex059
     * @tc.desc Verify underlying buffer bytes remain unchanged after ArrayBuffer view findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.findIndex((value) -> value == 30);
    Uint8Array check = new Uint8Array(buf);
    assertEqual(10, check.get(0));
    assertEqual(20, check.get(1));
    assertEqual(30, check.get(2));
    assertEqual(40, check.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6000
     * @tc.name testUint8ArrayFindIndex060
     * @tc.desc Verify single element array element remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex060() {
    Uint8Array arr = Uint8Array.of(77);
    arr.findIndex((value) -> value == 77);
    assertEqual(77, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6100
     * @tc.name testUint8ArrayFindIndex061
     * @tc.desc Verify boundary value array elements remain unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex061() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    arr.findIndex((value) -> value > 100);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6200
     * @tc.name testUint8ArrayFindIndex062
     * @tc.desc Verify subarray view buffer refers to original array buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex062() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    Uint8Array sub = arr.subarray(1, 3);
    sub.findIndex((value) -> value == 2);
    assertEqual(arr.buffer(), sub.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6300
     * @tc.name testUint8ArrayFindIndex063
     * @tc.desc Verify subarray view byteOffset after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex063() {
    Uint8Array arr = Uint8Array.of(0, 5, 10, 15, 20);
    Uint8Array sub = arr.subarray(2, 5);
    sub.findIndex((value) -> value > 12);
    assertEqual(2, sub.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6400
     * @tc.name testUint8ArrayFindIndex064
     * @tc.desc Verify subarray view byteOffset remains unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex064() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4);
    Uint8Array sub = arr.subarray(1, 4);
    int offsetBefore = sub.byteOffset();
    sub.findIndex((value) -> value == 2);
    assertEqual(offsetBefore, sub.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6500
     * @tc.name testUint8ArrayFindIndex065
     * @tc.desc Verify ArrayBuffer view byteOffset after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex065() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array view = new Uint8Array(buf, 4, 4);
    view.set(0, 100);
    view.findIndex((value) -> value == 100);
    assertEqual(4, view.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6600
     * @tc.name testUint8ArrayFindIndex066
     * @tc.desc Verify ArrayBuffer view byteLength unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex066() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array view = new Uint8Array(buf, 4, 6);
    view.set(2, 200);
    view.findIndex((value) -> value == 200);
    assertEqual(6, view.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6700
     * @tc.name testUint8ArrayFindIndex067
     * @tc.desc Verify subarray view reflects changes to original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex067() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(1, 4);
    arr.set(2, 99);
    int result = sub.findIndex((value) -> value == 99);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6800
     * @tc.name testUint8ArrayFindIndex068
     * @tc.desc Verify changes to subarray view propagate to original array findIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex068() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array sub = arr.subarray(1, 4);
    sub.set(1, 88);
    int result = arr.findIndex((value) -> value == 88);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_6900
     * @tc.name testUint8ArrayFindIndex069
     * @tc.desc Verify two subarray views sharing same buffer affect findIndex results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex069() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    Uint8Array sub1 = arr.subarray(1, 5);
    Uint8Array sub2 = arr.subarray(1, 5);
    sub1.set(2, 77);
    int r1 = sub1.findIndex((value) -> value == 77);
    int r2 = sub2.findIndex((value) -> value == 77);
    assertEqual(r2, r1);
    assertEqual(2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7000
     * @tc.name testUint8ArrayFindIndex070
     * @tc.desc Verify nested subarray cumulative byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex070() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4, 5, 6);
    Uint8Array sub1 = arr.subarray(1, 6);
    Uint8Array sub2 = sub1.subarray(1, 4);
    sub2.findIndex((value) -> value == 3);
    assertEqual(2, sub2.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7100
     * @tc.name testUint8ArrayFindIndex071
     * @tc.desc Verify view can findIndex into underlying ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex071() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(3, 50);
    Uint8Array view2 = new Uint8Array(buf, 2, 3);
    int result = view2.findIndex((value) -> value == 50);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7200
     * @tc.name testUint8ArrayFindIndex072
     * @tc.desc Verify two different offset views have independent findIndex results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array lowView = new Uint8Array(buf, 0, 4);
    Uint8Array highView = new Uint8Array(buf, 4, 4);
    lowView.set(0, 11);
    lowView.set(3, 44);
    highView.set(0, 55);
    highView.set(3, 88);
    int r1 = lowView.findIndex((value) -> value == 11);
    int r2 = highView.findIndex((value) -> value == 11);
    assertEqual(0, r1);
    assertEqual(-1, r2);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7300
     * @tc.name testUint8ArrayFindIndex073
     * @tc.desc Verify original array buffer remains unchanged after subarray findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex073() {
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    Uint8Array sub = arr.subarray(1, 3);
    ArrayBuffer bufRef = arr.buffer();
    sub.findIndex((value) -> value > 12);
    assertEqual(bufRef, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7400
     * @tc.name testUint8ArrayFindIndex074
     * @tc.desc Verify ArrayBuffer view buffer unchanged after findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex074() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array view = new Uint8Array(buf, 1, 4);
    view.findIndex((value) -> value == 99);
    assertEqual(buf, view.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7500
     * @tc.name testUint8ArrayFindIndex075
     * @tc.desc Verify original array byteOffset unchanged after subarray findIndex call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(1, 4);
    sub.findIndex((value) -> value > 1);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX2_7600
     * @tc.name testUint8ArrayFindIndex076
     * @tc.desc Verify buffer byteLength unchanged after multiple view findIndex calls
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex076() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Uint8Array lowView = new Uint8Array(buf, 0, 6);
    Uint8Array highView = new Uint8Array(buf, 6, 6);
    lowView.set(2, 33);
    highView.set(3, 66);
    lowView.findIndex((value) -> value == 33);
    highView.findIndex((value) -> value == 66);
    assertEqual(12, buf.byteLength());
    }
}
