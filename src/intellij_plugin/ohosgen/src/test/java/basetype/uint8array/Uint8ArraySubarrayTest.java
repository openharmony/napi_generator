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
 * Uint8ArraySubarrayTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArraySubarrayTest extends BasTest {
    /**
     * Verify subarray() returns Uint8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0010
     * @tc.name testUint8ArraySubarray001
     * @tc.desc Verify subarray() returns Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray001() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    assertEqual(5, sub.length());
    }

    /**
     * Verify subarray(0, 0) empty result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0020
     * @tc.name testUint8ArraySubarray002
     * @tc.desc Verify subarray(0, 0) empty result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray002() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray(0, 0);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(1, 3) result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0030
     * @tc.name testUint8ArraySubarray003
     * @tc.desc Verify subarray(1, 3) result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray003() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 3);
    assertEqual(2, sub.length());
    }

    /**
     * Verify subarray(-3) negative index result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0040
     * @tc.name testUint8ArraySubarray004
     * @tc.desc Verify subarray(-3) negative index result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray004() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3);
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray() returns different object (not same reference)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0050
     * @tc.name testUint8ArraySubarray005
     * @tc.desc Verify subarray() returns different object (not same reference)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray005() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertTrue(sub != src);
    }

    /**
     * Verify subarray() result buffer property is not null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0060
     * @tc.name testUint8ArraySubarray006
     * @tc.desc Verify subarray() result buffer property is not null
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray006() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertNotNull(sub.buffer());
    }

    /**
     * Verify subarray() result byteOffset property is number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0070
     * @tc.name testUint8ArraySubarray007
     * @tc.desc Verify subarray() result byteOffset property is number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray007() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertEqual(0, sub.byteOffset());
    }

    /**
     * Verify subarray() result byteLength property is number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0080
     * @tc.name testUint8ArraySubarray008
     * @tc.desc Verify subarray() result byteLength property is number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray008() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertEqual(3, sub.byteLength());
    }

    /**
     * Verify empty source array subarray() result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0090
     * @tc.name testUint8ArraySubarray009
     * @tc.desc Verify empty source array subarray() result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray009() {
    Uint8Array src = new Uint8Array();
    Uint8Array sub = src.subarray();
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray() result BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0100
     * @tc.name testUint8ArraySubarray010
     * @tc.desc Verify subarray() result BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray010() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertEqual(1, sub.BYTES_PER_ELEMENT);
    }

    /**
     * Verify subarray(0, 256) upper bound truncation result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0110
     * @tc.name testUint8ArraySubarray011
     * @tc.desc Verify subarray(0, 256) upper bound truncation result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray011() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray(0, 256);
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(5, 5) empty range result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0120
     * @tc.name testUint8ArraySubarray012
     * @tc.desc Verify subarray(5, 5) empty range result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray012() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50, 60);
    Uint8Array sub = src.subarray(5, 5);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(5, 3) reverse range result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0130
     * @tc.name testUint8ArraySubarray013
     * @tc.desc Verify subarray(5, 3) reverse range result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray013() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50, 60);
    Uint8Array sub = src.subarray(5, 3);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray nested call result instanceof Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0140
     * @tc.name testUint8ArraySubarray014
     * @tc.desc Verify subarray nested call result instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray014() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(1, 4);
    Uint8Array sub2 = sub1.subarray(0, 2);
    assertEqual(2, sub2.length());
    }

    /**
     * Verify subarray() result name property is 'Uint8Array'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0150
     * @tc.name testUint8ArraySubarray015
     * @tc.desc Verify subarray() result name property is 'Uint8Array'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray015() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertEqual("Uint8Array", sub.getClass().getSimpleName());
    }

    /**
     * Verify subarray() no args all elements same as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0160
     * @tc.name testUint8ArraySubarray016
     * @tc.desc Verify subarray() no args all elements same as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray016() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(40, sub.get(3));
    assertEqual(50, sub.get(4));
    }

    /**
     * Verify subarray(0, 3) first three elements correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0170
     * @tc.name testUint8ArraySubarray017
     * @tc.desc Verify subarray(0, 3) first three elements correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray017() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(2, 5) middle three elements correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0180
     * @tc.name testUint8ArraySubarray018
     * @tc.desc Verify subarray(2, 5) middle three elements correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray018() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(2, 5);
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));
    assertEqual(50, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(-3) last three elements correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0190
     * @tc.name testUint8ArraySubarray019
     * @tc.desc Verify subarray(-3) last three elements correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray019() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3);
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));
    assertEqual(50, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(-3, -1) third to second last elements correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0200
     * @tc.name testUint8ArraySubarray020
     * @tc.desc Verify subarray(-3, -1) third to second last elements correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray020() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3, -1);
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));
    assertEqual(2, sub.length());
    }

    /**
     * Verify subarray(0, 0) empty result has no elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0210
     * @tc.name testUint8ArraySubarray021
     * @tc.desc Verify subarray(0, 0) empty result has no elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray021() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 0);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(3, 3) empty result (begin===end) has no elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0220
     * @tc.name testUint8ArraySubarray022
     * @tc.desc Verify subarray(3, 3) empty result (begin===end) has no elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray022() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(3, 3);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(5, 3) begin>end returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0230
     * @tc.name testUint8ArraySubarray023
     * @tc.desc Verify subarray(5, 3) begin>end returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray023() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(5, 3);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(0, 1) single element correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0240
     * @tc.name testUint8ArraySubarray024
     * @tc.desc Verify subarray(0, 1) single element correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray024() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray(0, 1);
    assertEqual(10, sub.get(0));
    assertEqual(1, sub.length());
    }

    /**
     * Verify subarray(length-2, length) last two elements correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0250
     * @tc.name testUint8ArraySubarray025
     * @tc.desc Verify subarray(length-2, length) last two elements correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray025() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(3, 5);
    assertEqual(40, sub.get(0));
    assertEqual(50, sub.get(1));
    assertEqual(2, sub.length());
    }

    /**
     * Verify subarray(1) removes first element, remaining correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0260
     * @tc.name testUint8ArraySubarray026
     * @tc.desc Verify subarray(1) removes first element, remaining correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray026() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1);
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));
    assertEqual(50, sub.get(3));
    assertEqual(4, sub.length());
    }

    /**
     * Verify subarray(0, 200) end exceeds bound truncates to all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0270
     * @tc.name testUint8ArraySubarray027
     * @tc.desc Verify subarray(0, 200) end exceeds bound truncates to all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray027() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray(0, 200);
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(-200) begin negative overflow truncates to 0, takes all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0280
     * @tc.name testUint8ArraySubarray028
     * @tc.desc Verify subarray(-200) begin negative overflow truncates to 0, takes all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray028() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray(-200);
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(0, length/2) first half correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0290
     * @tc.name testUint8ArraySubarray029
     * @tc.desc Verify subarray(0, length/2) first half correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray029() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50, 60);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(3, length) second half correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0300
     * @tc.name testUint8ArraySubarray030
     * @tc.desc Verify subarray(3, length) second half correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray030() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50, 60);
    Uint8Array sub = src.subarray(3, 6);
    assertEqual(40, sub.get(0));
    assertEqual(50, sub.get(1));
    assertEqual(60, sub.get(2));
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray includes 255 boundary value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0310
     * @tc.name testUint8ArraySubarray031
     * @tc.desc Verify subarray includes 255 boundary value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray031() {
    Uint8Array src = Uint8Array.of(0, 255, 128);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(0, sub.get(0));
    assertEqual(255, sub.get(1));
    assertEqual(128, sub.get(2));
    }

    /**
     * Verify subarray(0) single element array returns correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0320
     * @tc.name testUint8ArraySubarray032
     * @tc.desc Verify subarray(0) single element array returns correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray032() {
    Uint8Array src = Uint8Array.of(42);
    Uint8Array sub = src.subarray(0);
    assertEqual(42, sub.get(0));
    assertEqual(1, sub.length());
    }

    /**
     * Verify subarray includes 0xFF boundary value element correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0330
     * @tc.name testUint8ArraySubarray033
     * @tc.desc Verify subarray includes 0xFF boundary value element correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray033() {
    Uint8Array src = Uint8Array.of(0xFF, 0x00, 0xAB);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(255, sub.get(0));
    assertEqual(0, sub.get(1));
    assertEqual(171, sub.get(2));
    }

    /**
     * Verify subarray() length equals original length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0340
     * @tc.name testUint8ArraySubarray034
     * @tc.desc Verify subarray() length equals original length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray034() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    assertEqual(5, sub.length());
    }

    /**
     * Verify subarray(0) length equals original length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0350
     * @tc.name testUint8ArraySubarray035
     * @tc.desc Verify subarray(0) length equals original length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray035() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0);
    assertEqual(5, sub.length());
    }

    /**
     * Verify subarray(0, 3) length is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0360
     * @tc.name testUint8ArraySubarray036
     * @tc.desc Verify subarray(0, 3) length is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray036() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(1) length is length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0370
     * @tc.name testUint8ArraySubarray037
     * @tc.desc Verify subarray(1) length is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray037() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1);
    assertEqual(4, sub.length());
    }

    /**
     * Verify subarray(-3) length is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0380
     * @tc.name testUint8ArraySubarray038
     * @tc.desc Verify subarray(-3) length is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray038() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3);
    assertEqual(3, sub.length());
    }

    /**
     * Verify subarray(0, 0) length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0390
     * @tc.name testUint8ArraySubarray039
     * @tc.desc Verify subarray(0, 0) length is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray039() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 0);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(5, 5) length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0400
     * @tc.name testUint8ArraySubarray040
     * @tc.desc Verify subarray(5, 5) length is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray040() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(5, 5);
    assertEqual(0, sub.length());
    }

    /**
     * Verify subarray(length-2, length) length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0410
     * @tc.name testUint8ArraySubarray041
     * @tc.desc Verify subarray(length-2, length) length is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray041() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(3, 5);
    assertEqual(2, sub.length());
    }

    /**
     * Verify subarray(0, length-1) length is length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0420
     * @tc.name testUint8ArraySubarray042
     * @tc.desc Verify subarray(0, length-1) length is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray042() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 4);
    assertEqual(4, sub.length());
    }

    /**
     * Verify subarray(1, length) length is length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0430
     * @tc.name testUint8ArraySubarray043
     * @tc.desc Verify subarray(1, length) length is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray043() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 5);
    assertEqual(4, sub.length());
    }

    /**
     * Verify subarray() byteLength equals original byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0440
     * @tc.name testUint8ArraySubarray044
     * @tc.desc Verify subarray() byteLength equals original byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray044() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    assertEqual(5, sub.byteLength());
    }

    /**
     * Verify subarray(0, 3) byteLength is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0450
     * @tc.name testUint8ArraySubarray045
     * @tc.desc Verify subarray(0, 3) byteLength is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray045() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(3, sub.byteLength());
    }

    /**
     * Verify subarray(-3) byteLength is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0460
     * @tc.name testUint8ArraySubarray046
     * @tc.desc Verify subarray(-3) byteLength is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray046() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3);
    assertEqual(3, sub.byteLength());
    }

    /**
     * Verify subarray(0, 0) byteLength is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0470
     * @tc.name testUint8ArraySubarray047
     * @tc.desc Verify subarray(0, 0) byteLength is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray047() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 0);
    assertEqual(0, sub.byteLength());
    }

    /**
     * Verify subarray(0, length-1) byteLength is length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0480
     * @tc.name testUint8ArraySubarray048
     * @tc.desc Verify subarray(0, length-1) byteLength is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray048() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 4);
    assertEqual(4, sub.byteLength());
    }

    /**
     * Verify subarray(1, length) byteLength is length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0490
     * @tc.name testUint8ArraySubarray049
     * @tc.desc Verify subarray(1, length) byteLength is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray049() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 5);
    assertEqual(4, sub.byteLength());
    }

    /**
     * Verify subarray() byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0500
     * @tc.name testUint8ArraySubarray050
     * @tc.desc Verify subarray() byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray050() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    assertEqual(0, sub.byteOffset());
    }

    /**
     * Verify subarray(0) byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0510
     * @tc.name testUint8ArraySubarray051
     * @tc.desc Verify subarray(0) byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray051() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0);
    assertEqual(0, sub.byteOffset());
    }

    /**
     * Verify subarray(2, 5) byteOffset is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0520
     * @tc.name testUint8ArraySubarray052
     * @tc.desc Verify subarray(2, 5) byteOffset is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray052() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(2, 5);
    assertEqual(2, sub.byteOffset());
    }

    /**
     * Verify subarray(1) byteOffset is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0530
     * @tc.name testUint8ArraySubarray053
     * @tc.desc Verify subarray(1) byteOffset is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray053() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1);
    assertEqual(1, sub.byteOffset());
    }

    /**
     * Verify subarray(-3) byteOffset is length-3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0540
     * @tc.name testUint8ArraySubarray054
     * @tc.desc Verify subarray(-3) byteOffset is length-3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray054() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3);
    assertEqual(2, sub.byteOffset());
    }

    /**
     * Verify subarray(0, 0) byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0550
     * @tc.name testUint8ArraySubarray055
     * @tc.desc Verify subarray(0, 0) byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray055() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 0);
    assertEqual(0, sub.byteOffset());
    }

    /**
     * Verify subarray(5, 5) byteOffset is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0560
     * @tc.name testUint8ArraySubarray056
     * @tc.desc Verify subarray(5, 5) byteOffset is 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray056() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(5, 5);
    assertEqual(5, sub.byteOffset());
    }

    /**
     * Verify subarray(5, 3) reverse range byteOffset is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0570
     * @tc.name testUint8ArraySubarray057
     * @tc.desc Verify subarray(5, 3) reverse range byteOffset is 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray057() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(5, 3);
    assertEqual(5, sub.byteOffset());
    }

    /**
     * Verify subarray(0, 3) byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0580
     * @tc.name testUint8ArraySubarray058
     * @tc.desc Verify subarray(0, 3) byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray058() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(0, 3);
    assertEqual(0, sub.byteOffset());
    }

    /**
     * Verify subarray(3) byteOffset is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0590
     * @tc.name testUint8ArraySubarray059
     * @tc.desc Verify subarray(3) byteOffset is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray059() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(3);
    assertEqual(3, sub.byteOffset());
    }

    /**
     * Verify subarray(1, 3) from offset view byteOffset superposition correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0600
     * @tc.name testUint8ArraySubarray060
     * @tc.desc Verify subarray(1, 3) from offset view byteOffset superposition correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray060() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(1);
    Uint8Array sub2 = sub1.subarray(0, 2);
    assertEqual(1, sub2.byteOffset());
    }

    /**
     * Verify subarray(0) from offset view byteOffset keeps original offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0610
     * @tc.name testUint8ArraySubarray061
     * @tc.desc Verify subarray(0) from offset view byteOffset keeps original offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray061() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(2);
    Uint8Array sub2 = sub1.subarray(0);
    assertEqual(2, sub2.byteOffset());
    }

    /**
     * Verify subarray() original length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0620
     * @tc.name testUint8ArraySubarray062
     * @tc.desc Verify subarray() original length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray062() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray();
    assertEqual(5, src.length());
    }

    /**
     * Verify subarray() original byteOffset unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0630
     * @tc.name testUint8ArraySubarray063
     * @tc.desc Verify subarray() original byteOffset unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray063() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray();
    assertEqual(0, src.byteOffset());
    }

    /**
     * Verify subarray(1) original first element unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0640
     * @tc.name testUint8ArraySubarray064
     * @tc.desc Verify subarray(1) original first element unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray064() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray(1);
    assertEqual(10, src.get(0));
    }

    /**
     * Verify subarray(0, length) original elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0650
     * @tc.name testUint8ArraySubarray065
     * @tc.desc Verify subarray(0, length) original elements unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray065() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray(0, 5);
    assertEqual(10, src.get(0));
    assertEqual(20, src.get(1));
    assertEqual(30, src.get(2));
    assertEqual(40, src.get(3));
    assertEqual(50, src.get(4));
    }

    /**
     * Verify subarray() original buffer reference unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0660
     * @tc.name testUint8ArraySubarray066
     * @tc.desc Verify subarray() original buffer reference unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray066() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    ArrayBuffer bufBefore = src.buffer();
    src.subarray();
    assertEqual(bufBefore, src.buffer());
    }

    /**
     * Verify subarray(1, 3) original non-range elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0670
     * @tc.name testUint8ArraySubarray067
     * @tc.desc Verify subarray(1, 3) original non-range elements unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray067() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray(1, 3);
    assertEqual(10, src.get(0));
    assertEqual(40, src.get(3));
    assertEqual(50, src.get(4));
    }

    /**
     * Verify subarray(5, 3) reverse range original elements unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0680
     * @tc.name testUint8ArraySubarray068
     * @tc.desc Verify subarray(5, 3) reverse range original elements unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray068() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray(5, 3);
    assertEqual(10, src.get(0));
    assertEqual(20, src.get(1));
    assertEqual(30, src.get(2));
    assertEqual(40, src.get(3));
    assertEqual(50, src.get(4));
    }

    /**
     * Verify subarray(-3) original first element unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0690
     * @tc.name testUint8ArraySubarray069
     * @tc.desc Verify subarray(-3) original first element unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray069() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    src.subarray(-3);
    assertEqual(10, src.get(0));
    }

    /**
     * Verify subarray() original BYTES_PER_ELEMENT unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0700
     * @tc.name testUint8ArraySubarray070
     * @tc.desc Verify subarray() original BYTES_PER_ELEMENT unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray070() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    src.subarray();
    assertEqual(1, src.BYTES_PER_ELEMENT);
    }

    /**
     * Verify subarray().subarray() nested chain returns Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0710
     * @tc.name testUint8ArraySubarray071
     * @tc.desc Verify subarray().subarray() nested chain returns Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray071() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray();
    Uint8Array sub2 = sub1.subarray();
    assertEqual(5, sub2.length());
    }

    /**
     * Verify subarray().join(',') returns correct string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0720
     * @tc.name testUint8ArraySubarray072
     * @tc.desc Verify subarray().join(',') returns correct string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray072() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    String result = sub.join(",");
    assertEqual("10,20,30", result);
    }

    /**
     * Verify subarray().indexOf(value) finds element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0730
     * @tc.name testUint8ArraySubarray073
     * @tc.desc Verify subarray().indexOf(value) finds element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray073() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    int idx = sub.indexOf(30);
    assertEqual(2, idx);
    }

    /**
     * Verify subarray().includes(value) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0740
     * @tc.name testUint8ArraySubarray074
     * @tc.desc Verify subarray().includes(value) returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray074() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    boolean hasValue = sub.includes(30);
    assertTrue(hasValue);
    }

    /**
     * Verify subarray().some(predicate) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0750
     * @tc.name testUint8ArraySubarray075
     * @tc.desc Verify subarray().some(predicate) returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray075() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    boolean hasLarge = sub.some((val, idx, arr) -> val > 40);
    assertTrue(hasLarge);
    }

    /**
     * Verify subarray().every(predicate) condition holds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0760
     * @tc.name testUint8ArraySubarray076
     * @tc.desc Verify subarray().every(predicate) condition holds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray076() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    boolean allPositive = sub.every((val, idx, arr) -> val > 0);
    assertTrue(allPositive);
    }

    /**
     * Verify subarray().fill(value) fills and returns correct Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0770
     * @tc.name testUint8ArraySubarray077
     * @tc.desc Verify subarray().fill(value) fills and returns correct Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray077() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    Uint8Array filled = sub.fill(7);
    assertEqual(7, filled.get(0));
    assertEqual(7, filled.get(1));
    assertEqual(7, filled.get(2));
    }

    /**
     * Verify subarray().reverse() reversed element order correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0780
     * @tc.name testUint8ArraySubarray078
     * @tc.desc Verify subarray().reverse() reversed element order correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray078() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    Uint8Array reversed = sub.reverse();
    assertEqual(50, reversed.get(0));
    assertEqual(40, reversed.get(1));
    assertEqual(30, reversed.get(2));
    assertEqual(20, reversed.get(3));
    assertEqual(10, reversed.get(4));
    }

    /**
     * Verify subarray().filter() returns correct Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0790
     * @tc.name testUint8ArraySubarray079
     * @tc.desc Verify subarray().filter() returns correct Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray079() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray();
    Uint8Array filtered = sub.filter((val, idx, arr) -> val > 25);
    assertEqual(30, filtered.get(0));
    assertEqual(40, filtered.get(1));
    assertEqual(50, filtered.get(2));
    }

    /**
     * Verify subarray().map() transformed values correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0800
     * @tc.name testUint8ArraySubarray080
     * @tc.desc Verify subarray().map() transformed values correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray080() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    Uint8Array mapped = sub.map((val, idx, arr) -> val * 2);
    assertEqual(20, mapped.get(0));
    assertEqual(40, mapped.get(1));
    assertEqual(60, mapped.get(2));
    }

    /**
     * Verify subarray().buffer is same reference as original buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0810
     * @tc.name testUint8ArraySubarray081
     * @tc.desc Verify subarray().buffer is same reference as original buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray081() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray();
    assertEqual(src.buffer(), sub.buffer());
    }

    /**
     * Verify subarray(1, 3).buffer is same reference as original buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0820
     * @tc.name testUint8ArraySubarray082
     * @tc.desc Verify subarray(1, 3).buffer is same reference as original buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray082() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 3);
    assertEqual(src.buffer(), sub.buffer());
    }

    /**
     * Verify subarray(0, 0) empty result buffer same as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0830
     * @tc.name testUint8ArraySubarray083
     * @tc.desc Verify subarray(0, 0) empty result buffer same as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray083() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array sub = src.subarray(0, 0);
    assertEqual(src.buffer(), sub.buffer());
    }

    /**
     * Verify subarray(-3).buffer is same reference as original buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0840
     * @tc.name testUint8ArraySubarray084
     * @tc.desc Verify subarray(-3).buffer is same reference as original buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray084() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(-3);
    assertEqual(src.buffer(), sub.buffer());
    }

    /**
     * Verify writing through subarray changes original corresponding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0850
     * @tc.name testUint8ArraySubarray085
     * @tc.desc Verify writing through subarray changes original corresponding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray085() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 4);
    sub.set(0, 99);
    assertEqual(99, src.get(1));
    }

    /**
     * Verify writing multiple elements through subarray changes original corresponding elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0860
     * @tc.name testUint8ArraySubarray086
     * @tc.desc Verify writing multiple elements through subarray changes original corresponding elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray086() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(2, 5);
    sub.set(0, 111);
    sub.set(1, 222);
    sub.set(2, 77);
    assertEqual(111, src.get(2));
    assertEqual(222, src.get(3));
    assertEqual(77, src.get(4));
    }

    /**
     * Verify writing through original within subarray range changes subarray corresponding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0870
     * @tc.name testUint8ArraySubarray087
     * @tc.desc Verify writing through original within subarray range changes subarray corresponding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray087() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 4);
    src.set(2, 222);
    assertEqual(222, sub.get(1));
    }

    /**
     * Verify two subarrays share same buffer, writing one affects the other
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0880
     * @tc.name testUint8ArraySubarray088
     * @tc.desc Verify two subarrays share same buffer, writing one affects the other
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray088() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array subA = src.subarray(0, 3);
    Uint8Array subB = src.subarray(1, 4);
    subA.set(1, 99);
    assertEqual(99, subB.get(0));
    }

    /**
     * Verify two non-overlapping subarrays have independent regions
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0890
     * @tc.name testUint8ArraySubarray089
     * @tc.desc Verify two non-overlapping subarrays have independent regions
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray089() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array subA = src.subarray(0, 2);
    Uint8Array subB = src.subarray(3, 5);
    subA.set(1, 99);
    assertEqual(40, subB.get(0));
    }

    /**
     * Verify nested subarray buffer still same as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0900
     * @tc.name testUint8ArraySubarray090
     * @tc.desc Verify nested subarray buffer still same as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray090() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(1, 4);
    Uint8Array sub2 = sub1.subarray(0, 2);
    assertEqual(src.buffer(), sub2.buffer());
    }

    /**
     * Verify modifying nested subarray changes original corresponding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0910
     * @tc.name testUint8ArraySubarray091
     * @tc.desc Verify modifying nested subarray changes original corresponding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray091() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(1, 4);
    Uint8Array sub2 = sub1.subarray(0, 2);
    sub2.set(0, 99);
    assertEqual(99, src.get(1));
    }

    /**
     * Verify modifying original changes nested subarray corresponding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0920
     * @tc.name testUint8ArraySubarray092
     * @tc.desc Verify modifying original changes nested subarray corresponding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray092() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(1, 4);
    Uint8Array sub2 = sub1.subarray(0, 2);
    src.set(2, 222);
    assertEqual(222, sub2.get(1));
    }

    /**
     * Verify three-level nested subarray still shares original buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0930
     * @tc.name testUint8ArraySubarray093
     * @tc.desc Verify three-level nested subarray still shares original buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray093() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub1 = src.subarray(0, 4);
    Uint8Array sub2 = sub1.subarray(1, 3);
    Uint8Array sub3 = sub2.subarray(0, 1);
    assertEqual(src.buffer(), sub3.buffer());
    }

    /**
     * Verify subarray sees value changes through original buffer write
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0940
     * @tc.name testUint8ArraySubarray094
     * @tc.desc Verify subarray sees value changes through original buffer write
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray094() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 4);
    src.set(1, 222);
    assertEqual(222, sub.get(0));
    }

    /**
     * Verify writing outside subarray range does not affect subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0950
     * @tc.name testUint8ArraySubarray095
     * @tc.desc Verify writing outside subarray range does not affect subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray095() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 3);
    src.set(0, 99);
    src.set(4, 88);
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    /**
     * Verify subarray from ArrayBuffer constructed view shares same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0960
     * @tc.name testUint8ArraySubarray096
     * @tc.desc Verify subarray from ArrayBuffer constructed view shares same buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray096() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array src = new Uint8Array(buf);
    src.set(0, 10);
    src.set(1, 20);
    src.set(2, 30);
    src.set(3, 40);
    src.set(4, 50);
    Uint8Array sub = src.subarray(1, 4);
    assertEqual(buf, sub.buffer());
    }

    /**
     * Verify subarray from offset ArrayBuffer view shares same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0970
     * @tc.name testUint8ArraySubarray097
     * @tc.desc Verify subarray from offset ArrayBuffer view shares same buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray097() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array src = new Uint8Array(buf, 2, 5);
    src.set(0, 10);
    src.set(1, 20);
    src.set(2, 30);
    src.set(3, 40);
    src.set(4, 50);
    Uint8Array sub = src.subarray(1, 4);
    assertEqual(buf, sub.buffer());
    }

    /**
     * Verify new view constructed from original buffer has same data as subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0980
     * @tc.name testUint8ArraySubarray098
     * @tc.desc Verify new view constructed from original buffer has same data as subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray098() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 4);
    Uint8Array view = new Uint8Array(src.buffer(), 1, 3);
    assertEqual(view.get(0), sub.get(0));
    assertEqual(view.get(1), sub.get(1));
    assertEqual(view.get(2), sub.get(2));
    }

    /**
     * Verify writing through subarray via bracket notation visible in original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_0990
     * @tc.name testUint8ArraySubarray099
     * @tc.desc Verify writing through subarray via bracket notation visible in original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray099() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(2, 5);
    sub.set(0, 111);
    assertEqual(111, src.get(2));
    }

    /**
     * Verify multiple subarrays modifying their own ranges independently
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_1000
     * @tc.name testUint8ArraySubarray100
     * @tc.desc Verify multiple subarrays modifying their own ranges independently
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray100() {
    Uint8Array src = Uint8Array.of(1, 2, 3, 4, 5, 6);
    Uint8Array subA = src.subarray(0, 2);
    Uint8Array subB = src.subarray(2, 4);
    Uint8Array subC = src.subarray(4, 6);
    subA.set(1, 99);
    subB.set(1, 88);
    subC.set(1, 77);
    assertEqual(1, src.get(0));
    assertEqual(99, src.get(1));
    assertEqual(3, src.get(2));
    assertEqual(88, src.get(3));
    assertEqual(5, src.get(4));
    assertEqual(77, src.get(5));
    }

    /**
     * Verify subarray unchanged after original.fill outside range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_1010
     * @tc.name testUint8ArraySubarray101
     * @tc.desc Verify subarray unchanged after original.fill outside range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray101() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 3);
    src.fill(0, 0, 1);
    src.fill(0, 3, 5);
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    /**
     * Verify subarray data consistent after original.set() batch write
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_1020
     * @tc.name testUint8ArraySubarray102
     * @tc.desc Verify subarray data consistent after original.set() batch write
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray102() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub = src.subarray(1, 4);
    Uint8Array data = Uint8Array.of(77, 88, 99);
    src.set(data, 1);
    assertEqual(77, sub.get(0));
    assertEqual(88, sub.get(1));
    assertEqual(99, sub.get(2));
    }

    /**
     * Verify multiple subarrays with different offsets share same buffer and have correct byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_SUBARRAY02_1030
     * @tc.name testUint8ArraySubarray103
     * @tc.desc Verify multiple subarrays with different offsets share same buffer and have correct byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArraySubarray103() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array sub0 = src.subarray(0, 2);
    Uint8Array sub1 = src.subarray(2, 4);
    Uint8Array sub2 = src.subarray(4, 5);
    assertEqual(0, sub0.byteOffset());
    assertEqual(2, sub1.byteOffset());
    assertEqual(4, sub2.byteOffset());
    assertEqual(sub1.buffer(), sub0.buffer());
    assertEqual(sub2.buffer(), sub1.buffer());
    }
}
