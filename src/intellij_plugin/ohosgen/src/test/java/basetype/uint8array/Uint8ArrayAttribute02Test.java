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
 * Uint8ArrayAttribute02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayAttribute02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0010
     * @tc.name testUint8ArrayAttribute001
     * @tc.desc Verify BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute001() {
    Uint8Array arr = new Uint8Array(8);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0020
     * @tc.name testUint8ArrayAttribute002
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 with ArrayBuffer constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute002() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0030
     * @tc.name testUint8ArrayAttribute003
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 with ArrayBuffer+offset constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute003() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0040
     * @tc.name testUint8ArrayAttribute004
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 with array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute004() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0050
     * @tc.name testUint8ArrayAttribute005
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 with typed array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute005() {
    Uint8Array src = new Uint8Array(5);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0060
     * @tc.name testUint8ArrayAttribute006
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 with Uint8Array.of constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute006() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0070
     * @tc.name testUint8ArrayAttribute007
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 with Uint8Array.from constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute007() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0080
     * @tc.name testUint8ArrayAttribute008
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 after subarray derivation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute008() {
    Uint8Array arr = new Uint8Array(8);
    Uint8Array sub = arr.subarray(2, 5);
    assertEqual(1, sub.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0090
     * @tc.name testUint8ArrayAttribute009
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 on map result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute009() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array mapped = arr.map((x) -> x * 2);
    assertEqual(1, mapped.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0100
     * @tc.name testUint8ArrayAttribute010
     * @tc.desc Verify BYTES_PER_ELEMENT is 1 on filter result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute010() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array filtered = arr.filter((x) -> x > 2);
    assertEqual(1, filtered.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0110
     * @tc.name testUint8ArrayAttribute011
     * @tc.desc Verify BYTES_PER_ELEMENT is always 1 across different constructors
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute011() {
    Uint8Array arr1 = new Uint8Array(3);
    Uint8Array arr2 = new Uint8Array(50);
    Uint8Array arr3 = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    assertEqual(1, arr1.BYTES_PER_ELEMENT);
    assertEqual(1, arr2.BYTES_PER_ELEMENT);
    assertEqual(1, arr3.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0120
     * @tc.name testUint8ArrayAttribute012
     * @tc.desc Verify buffer is not null
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute012() {
    Uint8Array arr = new Uint8Array(8);
    assertNotNull(arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0130
     * @tc.name testUint8ArrayAttribute013
     * @tc.desc Verify buffer is an ArrayBuffer instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute013() {
    Uint8Array arr = new Uint8Array(8);
    assertTrue(arr.buffer() instanceof ArrayBuffer);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0140
     * @tc.name testUint8ArrayAttribute014
     * @tc.desc Verify buffer.byteLength equals element count with length constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute014() {
    Uint8Array arr = new Uint8Array(10);
    assertEqual(arr.byteLength(), arr.buffer().byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0150
     * @tc.name testUint8ArrayAttribute015
     * @tc.desc Verify buffer is same reference as input ArrayBuffer with ArrayBuffer constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute015() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(buf, arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0160
     * @tc.name testUint8ArrayAttribute016
     * @tc.desc Verify buffer is same reference as input ArrayBuffer with ArrayBuffer+offset constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute016() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    assertEqual(buf, arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0170
     * @tc.name testUint8ArrayAttribute017
     * @tc.desc Verify buffer is independent ArrayBuffer with array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute017() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertTrue(arr.buffer() instanceof ArrayBuffer);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0180
     * @tc.name testUint8ArrayAttribute018
     * @tc.desc Verify buffer is not source array's buffer with typed array constructor (deep copy)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute018() {
    Uint8Array src = new Uint8Array(5);
    Uint8Array arr = new Uint8Array(src);
    assertNotEqual(src.buffer(), arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0190
     * @tc.name testUint8ArrayAttribute019
     * @tc.desc Verify buffer is ArrayBuffer with Uint8Array.of constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute019() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertTrue(arr.buffer() instanceof ArrayBuffer);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0200
     * @tc.name testUint8ArrayAttribute020
     * @tc.desc Verify buffer is ArrayBuffer with Uint8Array.from constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute020() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertTrue(arr.buffer() instanceof ArrayBuffer);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0210
     * @tc.name testUint8ArrayAttribute021
     * @tc.desc Verify subarray shares same buffer reference as source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute021() {
    Uint8Array arr = new Uint8Array(8);
    Uint8Array sub = arr.subarray(2, 5);
    assertEqual(arr.buffer(), sub.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0220
     * @tc.name testUint8ArrayAttribute022
     * @tc.desc Verify slice has different buffer than source (new ArrayBuffer)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute022() {
    Uint8Array arr = new Uint8Array(8);
    Uint8Array sliced = arr.slice(2, 5);
    assertNotEqual(arr.buffer(), sliced.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0230
     * @tc.name testUint8ArrayAttribute023
     * @tc.desc Verify empty array buffer.byteLength is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute023() {
    Uint8Array arr = new Uint8Array(0);
    assertEqual(0, arr.buffer().byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0240
     * @tc.name testUint8ArrayAttribute024
     * @tc.desc Verify two Uint8Array views on same ArrayBuffer share buffer reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute024() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr1 = new Uint8Array(buf, 0, 8);
    Uint8Array arr2 = new Uint8Array(buf, 8, 8);
    assertEqual(arr2.buffer(), arr1.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0250
     * @tc.name testUint8ArrayAttribute025
     * @tc.desc Verify modification in one view is visible in another view with shared buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute025() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr1 = new Uint8Array(buf);
    Uint8Array arr2 = new Uint8Array(buf);
    arr1.set(5, 200);
    assertEqual(200, arr2.get(5));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0260
     * @tc.name testUint8ArrayAttribute026
     * @tc.desc Verify ArrayBuffer.isView returns true for Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute026() {
    Uint8Array arr = new Uint8Array(8);
    assertTrue(ArrayBuffer.isView(arr));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0270
     * @tc.name testUint8ArrayAttribute027
     * @tc.desc Verify ArrayBuffer.isView returns false for arr.buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute027() {
    Uint8Array arr = new Uint8Array(8);
    assertFalse(ArrayBuffer.isView(arr.buffer()));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0280
     * @tc.name testUint8ArrayAttribute028
     * @tc.desc Verify byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute028() {
    Uint8Array arr = new Uint8Array(8);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0290
     * @tc.name testUint8ArrayAttribute029
     * @tc.desc Verify byteOffset is 0 with ArrayBuffer constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0300
     * @tc.name testUint8ArrayAttribute030
     * @tc.desc Verify byteOffset is specified offset with ArrayBuffer+offset constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute030() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    assertEqual(4, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0310
     * @tc.name testUint8ArrayAttribute031
     * @tc.desc Verify byteOffset is 3 with ArrayBuffer+3 byte offset constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute031() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 3, 8);
    assertEqual(3, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0320
     * @tc.name testUint8ArrayAttribute032
     * @tc.desc Verify byteOffset is 0 with array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute032() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0330
     * @tc.name testUint8ArrayAttribute033
     * @tc.desc Verify byteOffset is 0 with typed array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute033() {
    Uint8Array src = new Uint8Array(5);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0340
     * @tc.name testUint8ArrayAttribute034
     * @tc.desc Verify byteOffset is 0 with Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute034() {
    Uint8Array arr = Uint8Array.of(10, 20);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0350
     * @tc.name testUint8ArrayAttribute035
     * @tc.desc Verify byteOffset is 0 with Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute035() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2});
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0360
     * @tc.name testUint8ArrayAttribute036
     * @tc.desc Verify subarray byteOffset is original byteOffset plus subarray start offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute036() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 2, 10);
    Uint8Array sub = arr.subarray(3, 7);
    assertEqual(5, sub.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0370
     * @tc.name testUint8ArrayAttribute037
     * @tc.desc Verify slice byteOffset is 0 (new buffer)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute037() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 2, 10);
    Uint8Array sliced = arr.slice(3, 7);
    assertEqual(0, sliced.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0380
     * @tc.name testUint8ArrayAttribute038
     * @tc.desc Verify byteOffset unchanged after fill operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute038() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    int prev = arr.byteOffset();
    arr.fill(128);
    assertEqual(prev, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0390
     * @tc.name testUint8ArrayAttribute039
     * @tc.desc Verify byteOffset unchanged after copyWithin operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute039() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    int prev = arr.byteOffset();
    arr.copyWithin(0, 2);
    assertEqual(prev, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0400
     * @tc.name testUint8ArrayAttribute040
     * @tc.desc Verify byteOffset unchanged after sort operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute040() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    arr.set(0, 5);
    arr.set(1, 3);
    arr.set(2, 1);
    int prev = arr.byteOffset();
    arr.sort();
    assertEqual(prev, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0410
     * @tc.name testUint8ArrayAttribute041
     * @tc.desc Verify byteOffset + byteLength calculation is correct (offset 4 length 8)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute041() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    assertEqual(12, arr.byteOffset() + arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0420
     * @tc.name testUint8ArrayAttribute042
     * @tc.desc Verify byteLength is 8
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute042() {
    Uint8Array arr = new Uint8Array(8);
    assertEqual(8, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0430
     * @tc.name testUint8ArrayAttribute043
     * @tc.desc Verify byteLength equals length (BYTES_PER_ELEMENT is 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute043() {
    Uint8Array arr = new Uint8Array(10);
    assertEqual(10, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0440
     * @tc.name testUint8ArrayAttribute044
     * @tc.desc Verify byteLength is N with length constructor N
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute044() {
    Uint8Array arr = new Uint8Array(15);
    assertEqual(15, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0450
     * @tc.name testUint8ArrayAttribute045
     * @tc.desc Verify byteLength equals buffer size with full view ArrayBuffer constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute045() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(20, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0460
     * @tc.name testUint8ArrayAttribute046
     * @tc.desc Verify byteLength is specified length with ArrayBuffer+offset+length constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute046() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Uint8Array arr = new Uint8Array(buf, 4, 10);
    assertEqual(10, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0470
     * @tc.name testUint8ArrayAttribute047
     * @tc.desc Verify byteLength is remaining bytes with ArrayBuffer+offset constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute047() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Uint8Array arr = new Uint8Array(buf, 4);
    assertEqual(16, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0480
     * @tc.name testUint8ArrayAttribute048
     * @tc.desc Verify byteLength equals array element count with array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute048() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    assertEqual(5, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0490
     * @tc.name testUint8ArrayAttribute049
     * @tc.desc Verify byteLength equals source length with typed array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute049() {
    Uint8Array src = new Uint8Array(7);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(7, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0500
     * @tc.name testUint8ArrayAttribute050
     * @tc.desc Verify byteLength equals parameter count with Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    assertEqual(4, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0510
     * @tc.name testUint8ArrayAttribute051
     * @tc.desc Verify byteLength equals source array length with Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute051() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(3, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0520
     * @tc.name testUint8ArrayAttribute052
     * @tc.desc Verify subarray byteLength is sub-region byte count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute052() {
    Uint8Array arr = new Uint8Array(10);
    Uint8Array sub = arr.subarray(3, 8);
    assertEqual(5, sub.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0530
     * @tc.name testUint8ArrayAttribute053
     * @tc.desc Verify map result byteLength equals original array byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute053() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4});
    Uint8Array mapped = arr.map((x) -> x * 2);
    assertEqual(arr.byteLength(), mapped.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0540
     * @tc.name testUint8ArrayAttribute054
     * @tc.desc Verify filter result byteLength is filtered element count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute054() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array filtered = arr.filter((x) -> x > 2);
    assertEqual(3, filtered.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0550
     * @tc.name testUint8ArrayAttribute055
     * @tc.desc Verify empty array byteLength is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute055() {
    Uint8Array arr = new Uint8Array(0);
    assertEqual(0, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0560
     * @tc.name testUint8ArrayAttribute056
     * @tc.desc Verify byteLength unchanged after fill operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute056() {
    Uint8Array arr = new Uint8Array(10);
    int prev = arr.byteLength();
    arr.fill(255);
    assertEqual(prev, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0570
     * @tc.name testUint8ArrayAttribute057
     * @tc.desc Verify byteLength unchanged after copyWithin operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute057() {
    Uint8Array arr = new Uint8Array(10);
    int prev = arr.byteLength();
    arr.copyWithin(0, 3);
    assertEqual(prev, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0580
     * @tc.name testUint8ArrayAttribute058
     * @tc.desc Verify byteLength unchanged after sort operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute058() {
    Uint8Array arr = new Uint8Array(new int[] {5, 3, 1, 4, 2});
    int prev = arr.byteLength();
    arr.sort();
    assertEqual(prev, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0590
     * @tc.name testUint8ArrayAttribute059
     * @tc.desc Verify byteLength unchanged after reverse operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute059() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int prev = arr.byteLength();
    arr.reverse();
    assertEqual(prev, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0600
     * @tc.name testUint8ArrayAttribute060
     * @tc.desc Verify byteLength unchanged after set operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute060() {
    Uint8Array arr = new Uint8Array(10);
    int prev = arr.byteLength();
    arr.set(new Uint8Array(new int[] {9, 8, 7}), 2);
    assertEqual(prev, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0610
     * @tc.name testUint8ArrayAttribute061
     * @tc.desc Verify length is N with length constructor N
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute061() {
    Uint8Array arr = new Uint8Array(12);
    assertEqual(12, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0620
     * @tc.name testUint8ArrayAttribute062
     * @tc.desc Verify length equals array element count with array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute062() {
    int[] src = new int[] {1, 2, 3, 4, 5, 6, 7};
    Uint8Array arr = new Uint8Array(src);
    assertEqual(7, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0630
     * @tc.name testUint8ArrayAttribute063
     * @tc.desc Verify length equals source length with typed array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute063() {
    Uint8Array src = new Uint8Array(9);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(9, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0640
     * @tc.name testUint8ArrayAttribute064
     * @tc.desc Verify length equals parameter count with Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute064() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    assertEqual(5, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0650
     * @tc.name testUint8ArrayAttribute065
     * @tc.desc Verify length equals source length with Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute065() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0660
     * @tc.name testUint8ArrayAttribute066
     * @tc.desc Verify single element array length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute066() {
    Uint8Array arr = new Uint8Array(1);
    assertEqual(1, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0670
     * @tc.name testUint8ArrayAttribute067
     * @tc.desc Verify subarray length is sub-region element count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute067() {
    Uint8Array arr = new Uint8Array(10);
    Uint8Array sub = arr.subarray(3, 8);
    assertEqual(5, sub.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0680
     * @tc.name testUint8ArrayAttribute068
     * @tc.desc Verify map result length equals original array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute068() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array mapped = arr.map((x) -> x * 2);
    assertEqual(arr.length(), mapped.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0690
     * @tc.name testUint8ArrayAttribute069
     * @tc.desc Verify filter result length is filtered element count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute069() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array filtered = arr.filter((x) -> x > 2);
    assertEqual(3, filtered.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0700
     * @tc.name testUint8ArrayAttribute070
     * @tc.desc Verify length unchanged after fill operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute070() {
    Uint8Array arr = new Uint8Array(10);
    int prev = arr.length();
    arr.fill(255);
    assertEqual(prev, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0710
     * @tc.name testUint8ArrayAttribute071
     * @tc.desc Verify length unchanged after sort operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute071() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    int prev = arr.length();
    arr.sort();
    assertEqual(prev, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0720
     * @tc.name testUint8ArrayAttribute072
     * @tc.desc Verify length unchanged after set operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute072() {
    Uint8Array arr = new Uint8Array(10);
    int prev = arr.length();
    arr.set(new Uint8Array(new int[] {1, 2, 3}), 0);
    assertEqual(prev, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0730
     * @tc.name testUint8ArrayAttribute073
     * @tc.desc Verify name is 'Uint8Array'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute073() {
    Uint8Array arr = new Uint8Array(8);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0740
     * @tc.name testUint8ArrayAttribute074
     * @tc.desc Verify name is 'Uint8Array' with ArrayBuffer constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute074() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0750
     * @tc.name testUint8ArrayAttribute075
     * @tc.desc Verify name is 'Uint8Array' with ArrayBuffer+offset+length constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute075() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0760
     * @tc.name testUint8ArrayAttribute076
     * @tc.desc Verify name is 'Uint8Array' with array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute076() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0770
     * @tc.name testUint8ArrayAttribute077
     * @tc.desc Verify name is 'Uint8Array' with typed array constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute077() {
    Uint8Array src = new Uint8Array(5);
    Uint8Array arr = new Uint8Array(src);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0780
     * @tc.name testUint8ArrayAttribute078
     * @tc.desc Verify name is 'Uint8Array' with Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute078() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0790
     * @tc.name testUint8ArrayAttribute079
     * @tc.desc Verify name is 'Uint8Array' with Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute079() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0800
     * @tc.name testUint8ArrayAttribute080
     * @tc.desc Verify name is 'Uint8Array' with subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute080() {
    Uint8Array arr = new Uint8Array(8);
    Uint8Array sub = arr.subarray(2, 5);
    assertEqual("Uint8Array", sub.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0810
     * @tc.name testUint8ArrayAttribute081
     * @tc.desc Verify name is 'Uint8Array' with map result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute081() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array mapped = arr.map((x) -> x * 2);
    assertEqual("Uint8Array", mapped.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0820
     * @tc.name testUint8ArrayAttribute082
     * @tc.desc Verify name is 'Uint8Array' with filter result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute082() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array filtered = arr.filter((x) -> x > 2);
    assertEqual("Uint8Array", filtered.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0830
     * @tc.name testUint8ArrayAttribute083
     * @tc.desc Verify name is 'Uint8Array' after sort
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute083() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    arr.sort();
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0840
     * @tc.name testUint8ArrayAttribute084
     * @tc.desc Verify name is 'Uint8Array' after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute084() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.reverse();
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0850
     * @tc.name testUint8ArrayAttribute085
     * @tc.desc Verify name is 'Uint8Array' after fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute085() {
    Uint8Array arr = new Uint8Array(10);
    arr.fill(128);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0860
     * @tc.name testUint8ArrayAttribute086
     * @tc.desc Verify name is 'Uint8Array' after copyWithin
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute086() {
    Uint8Array arr = new Uint8Array(8);
    arr.copyWithin(0, 2);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0870
     * @tc.name testUint8ArrayAttribute087
     * @tc.desc Verify BYTES_PER_ELEMENT is always 1 across constructors
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute087() {
    Uint8Array a = new Uint8Array(3);
    Uint8Array b = new Uint8Array(50);
    Uint8Array c = new Uint8Array(100);
    assertEqual(1, a.BYTES_PER_ELEMENT);
    assertEqual(1, b.BYTES_PER_ELEMENT);
    assertEqual(1, c.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0880
     * @tc.name testUint8ArrayAttribute088
     * @tc.desc Verify byteOffset is 0 across constructors
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute088() {
    Uint8Array a = new Uint8Array(5);
    Uint8Array b = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array c = Uint8Array.of(1, 2, 3, 4, 5);
    assertEqual(0, a.byteOffset());
    assertEqual(0, b.byteOffset());
    assertEqual(0, c.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0890
     * @tc.name testUint8ArrayAttribute089
     * @tc.desc Verify byteLength unchanged after element assignment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute089() {
    Uint8Array arr = new Uint8Array(10);
    int bl = arr.byteLength();
    arr.set(0, 255);
    arr.set(9, 128);
    assertEqual(bl, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0900
     * @tc.name testUint8ArrayAttribute090
     * @tc.desc Verify length unchanged after element assignment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute090() {
    Uint8Array arr = new Uint8Array(10);
    int len = arr.length();
    arr.set(0, 1);
    arr.set(9, 2);
    assertEqual(len, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0910
     * @tc.name testUint8ArrayAttribute091
     * @tc.desc Verify name is always 'Uint8Array' across different constructors
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute091() {
    Uint8Array a = new Uint8Array(0);
    Uint8Array b = Uint8Array.of(1);
    Uint8Array c = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array d = Uint8Array.from(new int[] {1});
    assertEqual("Uint8Array", a.getClass().getSimpleName());
    assertEqual("Uint8Array", b.getClass().getSimpleName());
    assertEqual("Uint8Array", c.getClass().getSimpleName());
    assertEqual("Uint8Array", d.getClass().getSimpleName());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0920
     * @tc.name testUint8ArrayAttribute092
     * @tc.desc Verify fill returns this reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute092() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array result = arr.fill(0);
    assertEqual(arr, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0930
     * @tc.name testUint8ArrayAttribute093
     * @tc.desc Verify copyWithin returns this reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute093() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.copyWithin(0, 2);
    assertEqual(arr, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0940
     * @tc.name testUint8ArrayAttribute094
     * @tc.desc Verify sort returns this reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute094() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    Uint8Array result = arr.sort();
    assertEqual(arr, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0950
     * @tc.name testUint8ArrayAttribute095
     * @tc.desc Verify reverse returns this reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute095() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.reverse();
    assertEqual(arr, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0960
     * @tc.name testUint8ArrayAttribute096
     * @tc.desc Verify BYTES_PER_ELEMENT * length equals byteLength with length constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute096() {
    Uint8Array arr = new Uint8Array(25);
    assertEqual(arr.byteLength(), arr.BYTES_PER_ELEMENT * arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0970
     * @tc.name testUint8ArrayAttribute097
     * @tc.desc Verify BYTES_PER_ELEMENT * length equals byteLength with ArrayBuffer constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute097() {
    ArrayBuffer buf = new ArrayBuffer(30);
    Uint8Array arr = new Uint8Array(buf, 0, 30);
    assertEqual(arr.byteLength(), arr.BYTES_PER_ELEMENT * arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0980
     * @tc.name testUint8ArrayAttribute098
     * @tc.desc Verify BYTES_PER_ELEMENT * length equals byteLength with Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute098() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7);
    assertEqual(arr.byteLength(), arr.BYTES_PER_ELEMENT * arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_0990
     * @tc.name testUint8ArrayAttribute099
     * @tc.desc Verify BYTES_PER_ELEMENT * length equals byteLength with Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute099() {
    Uint8Array arr = Uint8Array.from(new int[] {10, 20, 30, 40});
    assertEqual(arr.byteLength(), arr.BYTES_PER_ELEMENT * arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_1000
     * @tc.name testUint8ArrayAttribute100
     * @tc.desc Verify BYTES_PER_ELEMENT * length equals byteLength with subarray derivation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute100() {
    Uint8Array arr = new Uint8Array(10);
    Uint8Array sub = arr.subarray(3, 8);
    assertEqual(sub.byteLength(), sub.BYTES_PER_ELEMENT * sub.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_1010
     * @tc.name testUint8ArrayAttribute101
     * @tc.desc Verify byteOffset + byteLength equals buffer.byteLength (full view)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute101() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(buf.byteLength(), arr.byteOffset() + arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_1020
     * @tc.name testUint8ArrayAttribute102
     * @tc.desc Verify buffer.byteLength >= byteLength (partial view)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute102() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 4, 8);
    assertTrue(buf.byteLength() >= arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE02_1030
     * @tc.name testUint8ArrayAttribute103
     * @tc.desc Verify subarray length equals its byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute103() {
    Uint8Array arr = new Uint8Array(10);
    Uint8Array sub = arr.subarray(3, 8);
    assertEqual(sub.byteLength(), sub.length());}
}
