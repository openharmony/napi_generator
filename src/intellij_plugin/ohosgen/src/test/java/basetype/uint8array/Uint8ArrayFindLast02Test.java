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
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindLast02Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayFindLast02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0100
     * @tc.name testUint8ArrayFindLast001
     * @tc.desc Verify findLast returns number type when matching element value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast001() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findLast((v) -> { return v == 0; });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0200
     * @tc.name testUint8ArrayFindLast002
     * @tc.desc Verify findLast returns number type when matching element value is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast002() {
    Uint8Array arr = Uint8Array.of(254, 255);
    int result = arr.findLast((v) -> { return v == 255; });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0300
     * @tc.name testUint8ArrayFindLast003
     * @tc.desc Verify findLast returns number type when matching with bitwise operation condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast003() {
    Uint8Array arr = Uint8Array.of(64, 128, 192);
    int result = arr.findLast((v) -> { return (v & 0x40) != 0; });
    assertEqual(192, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0400
     * @tc.name testUint8ArrayFindLast004
     * @tc.desc Verify findLast returns number type when matching based on index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast004() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.findLast((v, i) -> { return i == 0; });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0500
     * @tc.name testUint8ArrayFindLast005
     * @tc.desc Verify findLast returns number type when single element array matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast005() {
    Uint8Array arr = Uint8Array.of(99);
    int result = arr.findLast((v) -> { return v == 99; });
    assertEqual(99, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0600
     * @tc.name testUint8ArrayFindLast006
     * @tc.desc Verify findLast returns exact value 77 when matching
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast006() {
    Uint8Array arr = Uint8Array.of(33, 55, 77);
    int result = arr.findLast((v) -> { return v == 77; });
    assertEqual(77, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0700
     * @tc.name testUint8ArrayFindLast007
     * @tc.desc Verify findLast returns exact value 160 when matching
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast007() {
    Uint8Array arr = Uint8Array.of(160, 170, 180);
    int result = arr.findLast((v) -> { return v == 160; });
    assertEqual(160, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0800
     * @tc.name testUint8ArrayFindLast008
     * @tc.desc Verify findLast returns exact value 9 when matching
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast008() {
    Uint8Array arr = Uint8Array.of(9, 19, 29);
    int result = arr.findLast((v) -> { return v == 9; });
    assertEqual(9, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_0900
     * @tc.name testUint8ArrayFindLast009
     * @tc.desc Verify findLast returns last matching value 220 when v >= 210
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast009() {
    Uint8Array arr = Uint8Array.of(200, 210, 220);
    int result = arr.findLast((v) -> { return v >= 210; });
    assertEqual(220, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1000
     * @tc.name testUint8ArrayFindLast010
     * @tc.desc Verify findLast returns last matching value 33 when v <= 33
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast010() {
    Uint8Array arr = Uint8Array.of(22, 33, 44);
    int result = arr.findLast((v) -> { return v <= 33; });
    assertEqual(33, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1100
     * @tc.name testUint8ArrayFindLast011
     * @tc.desc Verify findLast returns 90 when v > 80 and v < 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast011() {
    Uint8Array arr = Uint8Array.of(70, 90, 110);
    int result = arr.findLast((v) -> { return v > 80 && v < 100; });
    assertEqual(90, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1200
     * @tc.name testUint8ArrayFindLast012
     * @tc.desc Verify findLast returns last matching value 14 when divisible by 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast012() {
    Uint8Array arr = Uint8Array.of(6, 7, 14);
    int result = arr.findLast((v) -> { return v % 7 == 0; });
    assertEqual(14, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1300
     * @tc.name testUint8ArrayFindLast013
     * @tc.desc Verify findLast returns last matching value 27 when v % 8 === 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast013() {
    Uint8Array arr = Uint8Array.of(11, 19, 27);
    int result = arr.findLast((v) -> { return v % 8 == 3; });
    assertEqual(27, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1400
     * @tc.name testUint8ArrayFindLast014
     * @tc.desc Verify findLast returns 150 when v * 3 > 200
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast014() {
    Uint8Array arr = Uint8Array.of(50, 100, 150);
    int result = arr.findLast((v) -> { return v * 3 > 200; });
    assertEqual(150, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1500
     * @tc.name testUint8ArrayFindLast015
     * @tc.desc Verify findLast returns 200 when v + 30 > 200
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast015() {
    Uint8Array arr = Uint8Array.of(180, 190, 200);
    int result = arr.findLast((v) -> { return v + 30 > 200; });
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1600
     * @tc.name testUint8ArrayFindLast016
     * @tc.desc Verify findLast returns 20 when v - 40 < 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast016() {
    Uint8Array arr = Uint8Array.of(10, 20, 50);
    int result = arr.findLast((v) -> { return v - 40 < 0; });
    assertEqual(20, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1700
     * @tc.name testUint8ArrayFindLast017
     * @tc.desc Verify findLast returns 152 when v > 150
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast017() {
    Uint8Array arr = Uint8Array.of(150, 151, 152);
    int result = arr.findLast((v) -> { return v > 150; });
    assertEqual(152, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1800
     * @tc.name testUint8ArrayFindLast018
     * @tc.desc Verify findLast returns 148 when v < 150 (tail-to-head traversal)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast018() {
    Uint8Array arr = Uint8Array.of(150, 149, 148);
    int result = arr.findLast((v) -> { return v < 150; });
    assertEqual(148, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_1900
     * @tc.name testUint8ArrayFindLast019
     * @tc.desc Verify findLast returns 240 when matching binary literal 0b11110000
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast019() {
    Uint8Array arr = Uint8Array.of(0x0F, 0xF0, 0xFF);
    int result = arr.findLast((v) -> { return v == 0b11110000; });
    assertEqual(240, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2000
     * @tc.name testUint8ArrayFindLast020
     * @tc.desc Verify findLast returns 15 when matching binary literal 0b00001111
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast020() {
    Uint8Array arr = Uint8Array.of(0x0F, 0xF0, 0xFF);
    int result = arr.findLast((v) -> { return v == 0b00001111; });
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2100
     * @tc.name testUint8ArrayFindLast021
     * @tc.desc Verify findLast returns 63 when matching octal literal 0o77
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast021() {
    Uint8Array arr = Uint8Array.of(0x3F, 0x7F, 0xFF);
    int result = arr.findLast((v) -> { return v == 077; });
    assertEqual(63, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2200
     * @tc.name testUint8ArrayFindLast022
     * @tc.desc Verify findLast returns 170 when matching hexadecimal literal 0xAA
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast022() {
    Uint8Array arr = Uint8Array.of(0xAA, 0xBB, 0xCC);
    int result = arr.findLast((v) -> { return v == 0xAA; });
    assertEqual(170, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2300
     * @tc.name testUint8ArrayFindLast023
     * @tc.desc Verify findLast returns 128 when value is between 0x80 and 0xBF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast023() {
    Uint8Array arr = Uint8Array.of(64, 128, 192);
    int result = arr.findLast((v) -> { return v >= 0x80 && v <= 0xBF; });
    assertEqual(128, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2400
     * @tc.name testUint8ArrayFindLast024
     * @tc.desc Verify findLast returns 33 when v > 0 and divisible by 11
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast024() {
    Uint8Array arr = Uint8Array.of(11, 22, 33);
    int result = arr.findLast((v) -> { return v > 0 && v % 11 == 0; });
    assertEqual(33, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2500
     * @tc.name testUint8ArrayFindLast025
     * @tc.desc Verify findLast returns 204 when matching binary literal 0b11001100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast025() {
    Uint8Array arr = Uint8Array.of(0x33, 0x66, 0xCC);
    int result = arr.findLast((v) -> { return v == 0b11001100; });
    assertEqual(204, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2600
     * @tc.name testUint8ArrayFindLast026
     * @tc.desc Verify findLast returns exact value 222 when matching
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast026() {
    Uint8Array arr = Uint8Array.of(111, 222);
    int result = arr.findLast((v) -> { return v == 222; });
    assertEqual(222, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2700
     * @tc.name testUint8ArrayFindLast027
     * @tc.desc Verify findLast returns 32 when v < 128 (last element match)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast027() {
    Uint8Array arr = Uint8Array.of(128, 64, 32);
    int result = arr.findLast((v) -> { return v < 128; });
    assertEqual(32, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2800
     * @tc.name testUint8ArrayFindLast028
     * @tc.desc Verify findLast returns 90 when matching hexadecimal 0x5A
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast028() {
    Uint8Array arr = Uint8Array.of(0x3C, 0x5A, 0x78);
    int result = arr.findLast((v) -> { return v == 0x5A; });
    assertEqual(90, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_2900
     * @tc.name testUint8ArrayFindLast029
     * @tc.desc Verify findLast returns last matching value when even index and v > 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast029() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLast((v, i) -> { return i % 2 == 0 && v > 15; });
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3000
     * @tc.name testUint8ArrayFindLast030
     * @tc.desc Verify array length remains unchanged after findLast with match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast030() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int lenBefore = arr.length();
    arr.findLast((v) -> { return v == 40; });
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3100
     * @tc.name testUint8ArrayFindLast031
     * @tc.desc Verify subarray length remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(1, 4);
    int lenBefore = sub.length();
    sub.findLast((v) -> { return v > 2; });
    assertEqual(lenBefore, sub.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3200
     * @tc.name testUint8ArrayFindLast032
     * @tc.desc Verify byteLength remains unchanged after findLast with match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int blBefore = arr.byteLength();
    arr.findLast((v) -> { return v > 3; });
    assertEqual(blBefore, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3300
     * @tc.name testUint8ArrayFindLast033
     * @tc.desc Verify buffer.byteLength remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast033() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int bufBlBefore = arr.buffer().byteLength();
    arr.findLast((v) -> { return v > 1; });
    assertEqual(bufBlBefore, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3400
     * @tc.name testUint8ArrayFindLast034
     * @tc.desc Verify BYTES_PER_ELEMENT remains 1 after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast034() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.findLast((v) -> { return v > 1; });
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3500
     * @tc.name testUint8ArrayFindLast035
     * @tc.desc Verify byteOffset remains unchanged after findLast (no offset view)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast035() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int offsetBefore = arr.byteOffset();
    arr.findLast((v) -> { return v > 1; });
    assertEqual(offsetBefore, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3600
     * @tc.name testUint8ArrayFindLast036
     * @tc.desc Verify byteOffset remains unchanged after findLast (with offset view)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    int offsetBefore = arr.byteOffset();
    arr.findLast((v) -> { return v > 15; });
    assertEqual(offsetBefore, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3700
     * @tc.name testUint8ArrayFindLast037
     * @tc.desc Verify element at index 0 remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast037() {
    Uint8Array arr = Uint8Array.of(7, 14, 21);
    arr.findLast((v) -> { return v > 10; });
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3800
     * @tc.name testUint8ArrayFindLast038
     * @tc.desc Verify element at index 2 remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast038() {
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    arr.findLast((v) -> { return v > 12; });
    assertEqual(15, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_3900
     * @tc.name testUint8ArrayFindLast039
     * @tc.desc Verify last element remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast039() {
    Uint8Array arr = Uint8Array.of(3, 6, 9, 12);
    arr.findLast((v) -> { return v > 5; });
    assertEqual(12, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4000
     * @tc.name testUint8ArrayFindLast040
     * @tc.desc Verify sum of all elements remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast040() {
    Uint8Array arr = Uint8Array.of(2, 4, 6, 8);
    int sumBefore = 0;
    for (int i = 0; i < arr.length(); i++) {
    sumBefore = sumBefore + arr.get(i);
    };
    arr.findLast((v) -> { return v > 5; });
    int sumAfter = 0;
    for (int i = 0; i < arr.length(); i++) {
    sumAfter = sumAfter + arr.get(i);
    };
    assertEqual(sumBefore, sumAfter);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4100
     * @tc.name testUint8ArrayFindLast041
     * @tc.desc Verify single element array element remains unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast041() {
    Uint8Array arr = Uint8Array.of(77);
    arr.findLast((v) -> { return v == 77; });
    assertEqual(77, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4200
     * @tc.name testUint8ArrayFindLast042
     * @tc.desc Verify findLast returns correct value on subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast042() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = arr.subarray(1, 4);
    int result = sub.findLast((v) -> { return v > 25; });
    assertEqual(40, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4300
     * @tc.name testUint8ArrayFindLast043
     * @tc.desc Verify subarray elements remain unchanged after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast043() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = arr.subarray(1, 4);
    sub.findLast((v) -> { return v > 25; });
    assertEqual(20, sub.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4400
     * @tc.name testUint8ArrayFindLast044
     * @tc.desc Verify original array elements remain unchanged after subarray findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast044() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = arr.subarray(1, 4);
    sub.findLast((v) -> { return v > 25; });
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4500
     * @tc.name testUint8ArrayFindLast045
     * @tc.desc Verify two subarrays from same buffer do not affect each other
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub1 = arr.subarray(0, 3);
    Uint8Array sub2 = arr.subarray(2, 5);
    sub1.findLast((v) -> { return v > 1; });
    assertEqual(3, sub2.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4600
     * @tc.name testUint8ArrayFindLast046
     * @tc.desc Verify nested subarray findLast does not affect parent subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    Uint8Array sub1 = arr.subarray(1, 5);
    Uint8Array sub2 = sub1.subarray(1, 3);
    sub2.findLast((v) -> { return v > 3; });
    assertEqual(4, sub1.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4700
     * @tc.name testUint8ArrayFindLast047
     * @tc.desc Verify findLast returns correct value on Uint8Array with byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 3, 3);
    arr.set(0, 77);
    arr.set(1, 160);
    arr.set(2, 9);
    int result = arr.findLast((v) -> { return v == 9; });
    assertEqual(9, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4800
     * @tc.name testUint8ArrayFindLast048
     * @tc.desc Verify two views from same buffer do not affect each other
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast048() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr1 = new Uint8Array(buf);
    arr1.set(0, 10);
    arr1.set(1, 20);
    arr1.set(2, 30);
    arr1.set(3, 40);
    arr1.set(4, 50);
    Uint8Array arr2 = new Uint8Array(buf);
    arr1.findLast((v) -> { return v > 30; });
    assertEqual(40, arr2.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_4900
     * @tc.name testUint8ArrayFindLast049
     * @tc.desc Verify findLast returns correct value on two-level nested subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    Uint8Array sub1 = arr.subarray(0, 5);
    Uint8Array sub2 = sub1.subarray(2, 4);
    int result = sub2.findLast((v) -> { return v > 3; });
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5000
     * @tc.name testUint8ArrayFindLast050
     * @tc.desc Verify buffer content remains unchanged after findLast (verified via new view)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast050() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.findLast((v) -> { return v > 25; });
    Uint8Array checkArr = new Uint8Array(buf);
    assertEqual(20, checkArr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5100
     * @tc.name testUint8ArrayFindLast051
     * @tc.desc Verify ArrayBuffer.isView remains true after findLast
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast051() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.findLast((v) -> { return v > 1; });
    assertTrue(ArrayBuffer.isView(arr));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5200
     * @tc.name testUint8ArrayFindLast052
     * @tc.desc Verify 3 consecutive findLast calls return consistent values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast052() {
    Uint8Array arr = Uint8Array.of(7, 14, 21, 28);
    int r1 = arr.findLast((v) -> { return v > 15; });
    int r2 = arr.findLast((v) -> { return v > 15; });
    int r3 = arr.findLast((v) -> { return v > 15; });
    assertEqual(r2, r1);
    assertEqual(r3, r2);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5300
     * @tc.name testUint8ArrayFindLast053
     * @tc.desc Verify toString does not affect subsequent findLast return value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast053() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int r1 = arr.findLast((v) -> { return v > 8; });
    String.valueOf(arr);
    int r2 = arr.findLast((v) -> { return v > 8; });
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5400
     * @tc.name testUint8ArrayFindLast054
     * @tc.desc Verify valueOf does not affect subsequent findLast return value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast054() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    int r1 = arr.findLast((v) -> { return v % 3 == 0; });
    arr.valueOf();
    int r2 = arr.findLast((v) -> { return v % 3 == 0; });
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5500
     * @tc.name testUint8ArrayFindLast055
     * @tc.desc Verify two independent arrays with same content return same findLast value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast055() {
    Uint8Array arr1 = Uint8Array.of(11, 22, 33, 44);
    Uint8Array arr2 = Uint8Array.of(11, 22, 33, 44);
    int r1 = arr1.findLast((v) -> { return v > 30; });
    int r2 = arr2.findLast((v) -> { return v > 30; });
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5600
     * @tc.name testUint8ArrayFindLast056
     * @tc.desc Verify different predicates return their correct values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast056() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int r1 = arr.findLast((v) -> { return v > 35; });
    int r2 = arr.findLast((v) -> { return v > 25; });
    assertEqual(50, r1);
    assertEqual(50, r2);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5700
     * @tc.name testUint8ArrayFindLast057
     * @tc.desc Verify findLast return value remains unchanged after traversing array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast057() {
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    int r1 = arr.findLast((v) -> { return v > 8; });
    for (int i = 0; i < arr.length(); i++) {
    int x = arr.get(i);
    };
    int r2 = arr.findLast((v) -> { return v > 8; });
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5800
     * @tc.name testUint8ArrayFindLast058
     * @tc.desc Verify findLast return value is within array range (<=255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast058() {
    Uint8Array arr = Uint8Array.of(50, 100, 150, 200, 250);
    int result = arr.findLast((v) -> { return v > 100; });
    assertTrue(result <= 255);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_5900
     * @tc.name testUint8ArrayFindLast059
     * @tc.desc Verify findLast return value is within array range (>=0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast059() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLast((v) -> { return v > 25; });
    assertTrue(result >= 0);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST02_6000
     * @tc.name testUint8ArrayFindLast060
     * @tc.desc Verify findLast return value matches manual tail-to-head traversal result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast060() {
    Uint8Array arr = Uint8Array.of(3, 6, 9, 12, 15);
    int result = arr.findLast((v) -> { return v > 10; });
    int manual = 0;
    for (int i = arr.length() - 1; i >= 0; i--) {
    if (arr.get(i) > 10) {
    manual = arr.get(i);
    break;
    };
    };
    assertEqual(manual, result);
    }
}
