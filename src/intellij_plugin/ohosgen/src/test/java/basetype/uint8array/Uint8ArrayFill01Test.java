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

import basetype.common.BasTest;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFill01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFill01Test extends BasTest {
    /**
     * Verify fill with only value parameter fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0010
     * @tc.name testUint8ArrayFill001
     * @tc.desc Verify fill with only value parameter fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill001() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with value and start parameters fills from start index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0020
     * @tc.name testUint8ArrayFill002
     * @tc.desc Verify fill with value and start parameters fills from start index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill002() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 2);
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify fill with value, start, and end parameters fills [start, end) interval
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0030
     * @tc.name testUint8ArrayFill003
     * @tc.desc Verify fill with value, start, and end parameters fills [start, end) interval
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill003() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 1, 4);
    assertEqualInt(42, arr.get(1));
    }

    /**
     * Verify fill with value=0 (uint8 minimum) fills first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0040
     * @tc.name testUint8ArrayFill004
     * @tc.desc Verify fill with value=0 (uint8 minimum) fills first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill004() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=1 fills first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0050
     * @tc.name testUint8ArrayFill005
     * @tc.desc Verify fill with value=1 fills first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill005() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(1);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill with value=127 (mid value) fills first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0060
     * @tc.name testUint8ArrayFill006
     * @tc.desc Verify fill with value=127 (mid value) fills first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill006() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(127);
    assertEqualInt(127, arr.get(0));
    }

    /**
     * Verify fill with value=128 (mid value+1) fills first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0070
     * @tc.name testUint8ArrayFill007
     * @tc.desc Verify fill with value=128 (mid value+1) fills first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill007() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(128);
    assertEqualInt(128, arr.get(0));
    }

    /**
     * Verify fill with value=254 (max-1) fills first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0080
     * @tc.name testUint8ArrayFill008
     * @tc.desc Verify fill with value=254 (max-1) fills first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill008() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(254);
    assertEqualInt(254, arr.get(0));
    }

    /**
     * Verify fill with value=255 (uint8 maximum) fills first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0090
     * @tc.name testUint8ArrayFill009
     * @tc.desc Verify fill with value=255 (uint8 maximum) fills first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill009() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(255);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=0 on empty array keeps length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0100
     * @tc.name testUint8ArrayFill010
     * @tc.desc Verify fill with value=0 on empty array keeps length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill010() {
    Uint8Array arr = new Uint8Array(0);
    arr.fill(42);
    assertEqual(0, arr.length());
    }

    /**
     * Verify fill with value=42 on single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0110
     * @tc.name testUint8ArrayFill011
     * @tc.desc Verify fill with value=42 on single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill011() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with value=42 on 100 element array, check first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0120
     * @tc.name testUint8ArrayFill012
     * @tc.desc Verify fill with value=42 on 100 element array, check first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill012() {
    Uint8Array arr = new Uint8Array(100);
    arr.fill(42);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with value=42 on 100 element array, check last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0130
     * @tc.name testUint8ArrayFill013
     * @tc.desc Verify fill with value=42 on 100 element array, check last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill013() {
    Uint8Array arr = new Uint8Array(100);
    arr.fill(42);
    assertEqualInt(42, arr.get(99));
    }

    /**
     * Verify fill with value=0, all elements are 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0140
     * @tc.name testUint8ArrayFill014
     * @tc.desc Verify fill with value=0, all elements are 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill014() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(0);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill with value=255, all elements are 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0150
     * @tc.name testUint8ArrayFill015
     * @tc.desc Verify fill with value=255, all elements are 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill015() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(255);
    assertEqualInt(255, arr.get(1));
    }

    /**
     * Verify fill with value=0x00 equals decimal 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0160
     * @tc.name testUint8ArrayFill016
     * @tc.desc Verify fill with value=0x00 equals decimal 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill016() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0x00);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=0x01 equals decimal 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0170
     * @tc.name testUint8ArrayFill017
     * @tc.desc Verify fill with value=0x01 equals decimal 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill017() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0x01);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill with value=0x7F equals decimal 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0180
     * @tc.name testUint8ArrayFill018
     * @tc.desc Verify fill with value=0x7F equals decimal 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill018() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0x7F);
    assertEqualInt(127, arr.get(0));
    }

    /**
     * Verify fill with value=0x80 equals decimal 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0190
     * @tc.name testUint8ArrayFill019
     * @tc.desc Verify fill with value=0x80 equals decimal 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill019() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0x80);
    assertEqualInt(128, arr.get(0));
    }

    /**
     * Verify fill with value=0xFE equals decimal 254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0200
     * @tc.name testUint8ArrayFill020
     * @tc.desc Verify fill with value=0xFE equals decimal 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill020() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0xFE);
    assertEqualInt(254, arr.get(0));
    }

    /**
     * Verify fill with value=0xFF equals decimal 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0210
     * @tc.name testUint8ArrayFill021
     * @tc.desc Verify fill with value=0xFF equals decimal 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill021() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0xFF);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=0b0 equals decimal 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0220
     * @tc.name testUint8ArrayFill022
     * @tc.desc Verify fill with value=0b0 equals decimal 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill022() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0b0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=0b1 equals decimal 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0230
     * @tc.name testUint8ArrayFill023
     * @tc.desc Verify fill with value=0b1 equals decimal 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill023() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0b1);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill with value=0b1111111 equals decimal 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0240
     * @tc.name testUint8ArrayFill024
     * @tc.desc Verify fill with value=0b1111111 equals decimal 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill024() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0b1111111);
    assertEqualInt(127, arr.get(0));
    }

    /**
     * Verify fill with value=0b10000000 equals decimal 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0250
     * @tc.name testUint8ArrayFill025
     * @tc.desc Verify fill with value=0b10000000 equals decimal 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill025() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0b10000000);
    assertEqualInt(128, arr.get(0));
    }

    /**
     * Verify fill with value=0b11111111 equals decimal 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0260
     * @tc.name testUint8ArrayFill026
     * @tc.desc Verify fill with value=0b11111111 equals decimal 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill026() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0b11111111);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=0o0 equals decimal 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0270
     * @tc.name testUint8ArrayFill027
     * @tc.desc Verify fill with value=0o0 equals decimal 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill027() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(00);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=0o177 equals decimal 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0280
     * @tc.name testUint8ArrayFill028
     * @tc.desc Verify fill with value=0o177 equals decimal 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill028() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0177);
    assertEqualInt(127, arr.get(0));
    }

    /**
     * Verify fill with value=0o200 equals decimal 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0290
     * @tc.name testUint8ArrayFill029
     * @tc.desc Verify fill with value=0o200 equals decimal 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill029() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0200);
    assertEqualInt(128, arr.get(0));
    }

    /**
     * Verify fill with value=0o377 equals decimal 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0300
     * @tc.name testUint8ArrayFill030
     * @tc.desc Verify fill with value=0o377 equals decimal 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill030() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0377);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=0e0 equals decimal 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0310
     * @tc.name testUint8ArrayFill031
     * @tc.desc Verify fill with value=0e0 equals decimal 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill031() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0e0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=1e1 equals decimal 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0320
     * @tc.name testUint8ArrayFill032
     * @tc.desc Verify fill with value=1e1 equals decimal 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill032() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(1e1);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify fill with value=2.55e2 equals decimal 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0330
     * @tc.name testUint8ArrayFill033
     * @tc.desc Verify fill with value=2.55e2 equals decimal 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill033() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(2.55e2);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=0.0 (float zero) fills array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0340
     * @tc.name testUint8ArrayFill034
     * @tc.desc Verify fill with value=0.0 (float zero) fills array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill034() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0.0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=0.5 truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0350
     * @tc.name testUint8ArrayFill035
     * @tc.desc Verify fill with value=0.5 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill035() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0.5);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=255.9 truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0360
     * @tc.name testUint8ArrayFill036
     * @tc.desc Verify fill with value=255.9 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill036() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(255.9);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=-0.5 truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0370
     * @tc.name testUint8ArrayFill037
     * @tc.desc Verify fill with value=-0.5 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill037() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-0.5);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=256.1 truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0380
     * @tc.name testUint8ArrayFill038
     * @tc.desc Verify fill with value=256.1 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill038() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(256.1);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with int variable v=42 through E overload
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0390
     * @tc.name testUint8ArrayFill039
     * @tc.desc Verify fill with int variable v=42 through E overload
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill039() {
    Uint8Array arr = new Uint8Array(5);
    int v = 42;
    arr.fill(v);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with int variable v=0 through E overload
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0400
     * @tc.name testUint8ArrayFill040
     * @tc.desc Verify fill with int variable v=0 through E overload
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill040() {
    Uint8Array arr = new Uint8Array(5);
    int v = 0;
    arr.fill(v);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with int variable v=255 through E overload
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0410
     * @tc.name testUint8ArrayFill041
     * @tc.desc Verify fill with int variable v=255 through E overload
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill041() {
    Uint8Array arr = new Uint8Array(5);
    int v = 255;
    arr.fill(v);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with int variable v=128 and start parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0420
     * @tc.name testUint8ArrayFill042
     * @tc.desc Verify fill with int variable v=128 and start parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill042() {
    Uint8Array arr = new Uint8Array(5);
    int v = 128;
    arr.fill(v, 2);
    assertEqualInt(128, arr.get(2));
    }

    /**
     * Verify fill with int variable v=99 and start/end parameters
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0430
     * @tc.name testUint8ArrayFill043
     * @tc.desc Verify fill with int variable v=99 and start/end parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill043() {
    Uint8Array arr = new Uint8Array(5);
    int v = 99;
    arr.fill(v, 1, 3);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify fill with start=0 fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0440
     * @tc.name testUint8ArrayFill044
     * @tc.desc Verify fill with start=0 fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill044() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with start=1 fills from second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0450
     * @tc.name testUint8ArrayFill045
     * @tc.desc Verify fill with start=1 fills from second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill045() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 1);
    assertEqualInt(42, arr.get(1));
    }

    /**
     * Verify fill with start=1, index 0 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0460
     * @tc.name testUint8ArrayFill046
     * @tc.desc Verify fill with start=1, index 0 unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill046() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 1);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with start=3 fills from fourth element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0470
     * @tc.name testUint8ArrayFill047
     * @tc.desc Verify fill with start=3 fills from fourth element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill047() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 3);
    assertEqualInt(42, arr.get(3));
    }

    /**
     * Verify fill with start=4 (last index) fills only last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0480
     * @tc.name testUint8ArrayFill048
     * @tc.desc Verify fill with start=4 (last index) fills only last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill048() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 4);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with start=0 on single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0490
     * @tc.name testUint8ArrayFill049
     * @tc.desc Verify fill with start=0 on single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill049() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(99, 0);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify fill with start=5 (equals length) no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0500
     * @tc.name testUint8ArrayFill050
     * @tc.desc Verify fill with start=5 (equals length) no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill050() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 5);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with start=6 (greater than length) no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0510
     * @tc.name testUint8ArrayFill051
     * @tc.desc Verify fill with start=6 (greater than length) no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill051() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 6);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with start=65535 (large positive out-of-bounds) no operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0520
     * @tc.name testUint8ArrayFill052
     * @tc.desc Verify fill with start=65535 (large positive out-of-bounds) no operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill052() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 65535);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with start=2147483647 (int max) large positive out-of-bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0530
     * @tc.name testUint8ArrayFill053
     * @tc.desc Verify fill with start=2147483647 (int max) large positive out-of-bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill053() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 2147483647);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with start=-1 fills from last element (equivalent to index 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0540
     * @tc.name testUint8ArrayFill054
     * @tc.desc Verify fill with start=-1 fills from last element (equivalent to index 4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill054() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -1);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with start=-1, index 3 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0550
     * @tc.name testUint8ArrayFill055
     * @tc.desc Verify fill with start=-1, index 3 unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill055() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -1);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill with start=-2 fills from second-to-last (equivalent to index 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0560
     * @tc.name testUint8ArrayFill056
     * @tc.desc Verify fill with start=-2 fills from second-to-last (equivalent to index 3)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill056() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -2);
    assertEqualInt(42, arr.get(3));
    }

    /**
     * Verify fill with start=-5 (equals -length) equivalent to index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0570
     * @tc.name testUint8ArrayFill057
     * @tc.desc Verify fill with start=-5 (equals -length) equivalent to index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill057() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -5);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with start=-6 (less than -length) truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0580
     * @tc.name testUint8ArrayFill058
     * @tc.desc Verify fill with start=-6 (less than -length) truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill058() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -6);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with start=-10 (large negative out-of-bounds) truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0590
     * @tc.name testUint8ArrayFill059
     * @tc.desc Verify fill with start=-10 (large negative out-of-bounds) truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill059() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -10);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with start=-2147483648 (int min) large negative out-of-bounds truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0600
     * @tc.name testUint8ArrayFill060
     * @tc.desc Verify fill with start=-2147483648 (int min) large negative out-of-bounds truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill060() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, Integer.MIN_VALUE);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with end=5 (equals length) fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0610
     * @tc.name testUint8ArrayFill061
     * @tc.desc Verify fill with end=5 (equals length) fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill061() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 5);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with end=3 fills [0, 3) interval
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0620
     * @tc.name testUint8ArrayFill062
     * @tc.desc Verify fill with end=3 fills [0, 3) interval
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill062() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 3);
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify fill with end=3, index 3 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0630
     * @tc.name testUint8ArrayFill063
     * @tc.desc Verify fill with end=3, index 3 unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill063() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 3);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill with end=1 fills only first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0640
     * @tc.name testUint8ArrayFill064
     * @tc.desc Verify fill with end=1 fills only first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill064() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 1);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill with end=1, index 1 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0650
     * @tc.name testUint8ArrayFill065
     * @tc.desc Verify fill with end=1, index 1 unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill065() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 1);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill with end=6 (greater than length) fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0660
     * @tc.name testUint8ArrayFill066
     * @tc.desc Verify fill with end=6 (greater than length) fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill066() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 6);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with end=65535 (large positive out-of-bounds) fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0670
     * @tc.name testUint8ArrayFill067
     * @tc.desc Verify fill with end=65535 (large positive out-of-bounds) fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill067() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 65535);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with end=2147483647 (int max) large positive out-of-bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0680
     * @tc.name testUint8ArrayFill068
     * @tc.desc Verify fill with end=2147483647 (int max) large positive out-of-bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill068() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, 2147483647);
    assertEqualInt(42, arr.get(4));
    }

    /**
     * Verify fill with end=-1 (equivalent to index 4) fills [0, 4) interval
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0690
     * @tc.name testUint8ArrayFill069
     * @tc.desc Verify fill with end=-1 (equivalent to index 4) fills [0, 4) interval
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill069() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -1);
    assertEqualInt(42, arr.get(3));
    }

    /**
     * Verify fill with end=-1, index 4 unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0700
     * @tc.name testUint8ArrayFill070
     * @tc.desc Verify fill with end=-1, index 4 unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill070() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -1);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with end=-2 (equivalent to index 3) fills [0, 3) interval
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0710
     * @tc.name testUint8ArrayFill071
     * @tc.desc Verify fill with end=-2 (equivalent to index 3) fills [0, 3) interval
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill071() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -2);
    assertEqualInt(42, arr.get(2));
    }

    /**
     * Verify fill with end=-5 (equivalent to index 0) fills [0, 0) interval (no elements)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0720
     * @tc.name testUint8ArrayFill072
     * @tc.desc Verify fill with end=-5 (equivalent to index 0) fills [0, 0) interval (no elements)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill072() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -5);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with end=-6 (less than -length) truncated to 0, no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0730
     * @tc.name testUint8ArrayFill073
     * @tc.desc Verify fill with end=-6 (less than -length) truncated to 0, no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill073() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -6);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with end=-10 (large negative out-of-bounds) truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0740
     * @tc.name testUint8ArrayFill074
     * @tc.desc Verify fill with end=-10 (large negative out-of-bounds) truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill074() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -10);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with end=-2147483648 (int min) large negative out-of-bounds truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0750
     * @tc.name testUint8ArrayFill075
     * @tc.desc Verify fill with end=-2147483648 (int min) large negative out-of-bounds truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill075() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, Integer.MIN_VALUE);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with start=3, end=1 (start>end) no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0760
     * @tc.name testUint8ArrayFill076
     * @tc.desc Verify fill with start=3, end=1 (start>end) no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill076() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 3, 1);
    assertEqualInt(0, arr.get(3));
    }

    /**
     * Verify fill with start=4, end=0 (start>end) no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0770
     * @tc.name testUint8ArrayFill077
     * @tc.desc Verify fill with start=4, end=0 (start>end) no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill077() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 4, 0);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with start=2, end=2 (start==end) no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0780
     * @tc.name testUint8ArrayFill078
     * @tc.desc Verify fill with start=2, end=2 (start==end) no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill078() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 2, 2);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill with start=5, end=0 (start>end) no elements filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0790
     * @tc.name testUint8ArrayFill079
     * @tc.desc Verify fill with start=5, end=0 (start>end) no elements filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill079() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 5, 0);
    assertEqualInt(0, arr.get(4));
    }

    /**
     * Verify fill with start=1, end=-1 fills elements [1, 4) since end=-1 resolves to 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0800
     * @tc.name testUint8ArrayFill080
     * @tc.desc Verify fill with start=1, end=-1 fills elements [1, 4) since end=-1 resolves to 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill080() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 1, -1);
    assertEqualInt(42, arr.get(1));
    }

    /**
     * Verify fill with start=0, end=-1 fills elements [0, 4) since end=-1 resolves to 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0810
     * @tc.name testUint8ArrayFill081
     * @tc.desc Verify fill with start=0, end=-1 fills elements [0, 4) since end=-1 resolves to 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill081() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 0, -1);
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify fill returns the same array reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0820
     * @tc.name testUint8ArrayFill082
     * @tc.desc Verify fill returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill082() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array result = arr.fill(42);
    assertEqual(arr, result);
    }

    /**
     * Verify fill returns the same array reference with start parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0830
     * @tc.name testUint8ArrayFill083
     * @tc.desc Verify fill returns the same array reference with start parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill083() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array result = arr.fill(42, 2);
    assertEqual(arr, result);
    }

    /**
     * Verify fill returns the same array reference with start and end parameters
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0840
     * @tc.name testUint8ArrayFill084
     * @tc.desc Verify fill returns the same array reference with start and end parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill084() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array result = arr.fill(42, 1, 4);
    assertEqual(arr, result);
    }

    /**
     * Verify fill returns the same array reference on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0850
     * @tc.name testUint8ArrayFill085
     * @tc.desc Verify fill returns the same array reference on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill085() {
    Uint8Array arr = new Uint8Array(0);
    Uint8Array result = arr.fill(42);
    assertEqual(arr, result);
    }

    /**
     * Verify fill returns the same array reference on single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0860
     * @tc.name testUint8ArrayFill086
     * @tc.desc Verify fill returns the same array reference on single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill086() {
    Uint8Array arr = new Uint8Array(1);
    Uint8Array result = arr.fill(42);
    assertEqual(arr, result);
    }

    /**
     * Verify fill with value=256 (overflow) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0870
     * @tc.name testUint8ArrayFill087
     * @tc.desc Verify fill with value=256 (overflow) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill087() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=257 (overflow) truncates to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0880
     * @tc.name testUint8ArrayFill088
     * @tc.desc Verify fill with value=257 (overflow) truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill088() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(257);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill with value=512 (overflow) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0890
     * @tc.name testUint8ArrayFill089
     * @tc.desc Verify fill with value=512 (overflow) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill089() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(512);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=256 and start parameter, overflow truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0900
     * @tc.name testUint8ArrayFill090
     * @tc.desc Verify fill with value=256 and start parameter, overflow truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill090() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(256, 2);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill with value=257 and start/end parameters, overflow truncates to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0910
     * @tc.name testUint8ArrayFill091
     * @tc.desc Verify fill with value=257 and start/end parameters, overflow truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill091() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(257, 1, 3);
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify fill with value=-1 (negative) truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0920
     * @tc.name testUint8ArrayFill092
     * @tc.desc Verify fill with value=-1 (negative) truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill092() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-1);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=-2 (negative) truncates to 254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0930
     * @tc.name testUint8ArrayFill093
     * @tc.desc Verify fill with value=-2 (negative) truncates to 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill093() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-2);
    assertEqualInt(254, arr.get(0));
    }

    /**
     * Verify fill with value=-255 (negative) truncates to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0940
     * @tc.name testUint8ArrayFill094
     * @tc.desc Verify fill with value=-255 (negative) truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill094() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-255);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify fill with value=-256 (negative) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0950
     * @tc.name testUint8ArrayFill095
     * @tc.desc Verify fill with value=-256 (negative) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill095() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=-257 (negative) truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0960
     * @tc.name testUint8ArrayFill096
     * @tc.desc Verify fill with value=-257 (negative) truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill096() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-257);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fill with value=-1 and start parameter, negative truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0970
     * @tc.name testUint8ArrayFill097
     * @tc.desc Verify fill with value=-1 and start parameter, negative truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill097() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-1, 2);
    assertEqualInt(255, arr.get(2));
    }

    /**
     * Verify fill with value=-2 and start/end parameters, negative truncates to 254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0980
     * @tc.name testUint8ArrayFill098
     * @tc.desc Verify fill with value=-2 and start/end parameters, negative truncates to 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill098() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(-2, 1, 3);
    assertEqualInt(254, arr.get(1));
    }

    /**
     * Verify fill with value=Infinity (truncated to 0) fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_0990
     * @tc.name testUint8ArrayFill099
     * @tc.desc Verify fill with value=Infinity (truncated to 0) fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill099() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=NaN (truncated to 0) fills entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1000
     * @tc.name testUint8ArrayFill100
     * @tc.desc Verify fill with value=NaN (truncated to 0) fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill100() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill with value=Infinity and start parameter, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1010
     * @tc.name testUint8ArrayFill101
     * @tc.desc Verify fill with value=Infinity and start parameter, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill101() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(Double.POSITIVE_INFINITY, 2);
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify fill with value=NaN and start/end parameters, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1020
     * @tc.name testUint8ArrayFill102
     * @tc.desc Verify fill with value=NaN and start/end parameters, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill102() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(Double.NaN, 1, 3);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill with value=257 and negative start, overflow truncates to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1030
     * @tc.name testUint8ArrayFill103
     * @tc.desc Verify fill with value=257 and negative start, overflow truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill103() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(257, -3);
    assertEqualInt(1, arr.get(2));
    }

    /**
     * Verify fill with value=Infinity and start/end parameters, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1040
     * @tc.name testUint8ArrayFill104
     * @tc.desc Verify fill with value=Infinity and start/end parameters, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill104() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(Double.POSITIVE_INFINITY, 1, 3);
    assertEqualInt(0, arr.get(1));
    }

    /**
     * Verify fill with value=NaN and start/end parameters, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1050
     * @tc.name testUint8ArrayFill105
     * @tc.desc Verify fill with value=NaN and start/end parameters, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill105() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(Double.NaN, 0, 2);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify fill on non-zero array covers all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1060
     * @tc.name testUint8ArrayFill106
     * @tc.desc Verify fill on non-zero array covers all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill106() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.fill(99);
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify fill on non-zero array with partial range [1, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1070
     * @tc.name testUint8ArrayFill107
     * @tc.desc Verify fill on non-zero array with partial range [1, 4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill107() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.fill(99, 1, 4);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify fill on non-zero array with partial range, boundary not covered
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1080
     * @tc.name testUint8ArrayFill108
     * @tc.desc Verify fill on non-zero array with partial range, boundary not covered
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill108() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.fill(99, 1, 4);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify fill on non-zero array with partial range, right boundary unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1090
     * @tc.name testUint8ArrayFill109
     * @tc.desc Verify fill on non-zero array with partial range, right boundary unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill109() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.fill(99, 1, 4);
    assertEqualInt(50, arr.get(4));
    }

    /**
     * Verify fill on non-zero array with negative start range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1100
     * @tc.name testUint8ArrayFill110
     * @tc.desc Verify fill on non-zero array with negative start range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill110() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.fill(99, -2);
    assertEqualInt(99, arr.get(3));
    }

    /**
     * Verify fill(0) then fill(255, 0, 2), first two elements are 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1110
     * @tc.name testUint8ArrayFill111
     * @tc.desc Verify fill(0) then fill(255, 0, 2), first two elements are 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill111() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(0);
    arr.fill(255, 0, 2);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify consecutive fills, second fill overwrites first
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1120
     * @tc.name testUint8ArrayFill112
     * @tc.desc Verify consecutive fills, second fill overwrites first
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill112() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(10);
    arr.fill(20);
    assertEqualInt(20, arr.get(0));
    }

    /**
     * Verify fill does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1130
     * @tc.name testUint8ArrayFill113
     * @tc.desc Verify fill does not change array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill113() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42);
    assertEqual(5, arr.length());
    }

    /**
     * Verify empty array fill with start parameter no operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1140
     * @tc.name testUint8ArrayFill114
     * @tc.desc Verify empty array fill with start parameter no operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill114() {
    Uint8Array arr = new Uint8Array(0);
    arr.fill(42, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify empty array fill with start and end parameters no operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL01_1150
     * @tc.name testUint8ArrayFill115
     * @tc.desc Verify empty array fill with start and end parameters no operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill115() {
    Uint8Array arr = new Uint8Array(0);
    arr.fill(42, 0, 0);
    assertEqual(0, arr.length());
    }
}
