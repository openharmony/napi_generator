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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayTotal01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayTotal01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0010
     * @tc.name testUint8ArrayTotal001
     * @tc.desc Verify constructor with no arguments creates empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal001() {
    Uint8Array arr = new Uint8Array();
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0020
     * @tc.name testUint8ArrayTotal002
     * @tc.desc Verify constructor with single int length argument creates array of specified length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal002() {
    Uint8Array arr = new Uint8Array(3);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0030
     * @tc.name testUint8ArrayTotal003
     * @tc.desc Verify constructor with single number length argument creates array of truncated length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal003() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(5, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0040
     * @tc.name testUint8ArrayTotal004
     * @tc.desc Verify constructor with Uint8Array source copies elements from source array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal004() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0050
     * @tc.name testUint8ArrayTotal005
     * @tc.desc Verify constructor with FixedArray<int> creates array from literal values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal005() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0060
     * @tc.name testUint8ArrayTotal006
     * @tc.desc Verify constructor with Array<int> creates array from array object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal006() {
    List<Integer> src = java.util.Arrays.asList(4, 5, 6);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0070
     * @tc.name testUint8ArrayTotal007
     * @tc.desc Verify constructor with Iterable<Number> creates array from number iterable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal007() {
    double[] src = new double[] {7.0, 8.0, 9.0};
    Uint8Array arr = new Uint8Array(src);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0080
     * @tc.name testUint8ArrayTotal008
     * @tc.desc Verify constructor with ArrayBuffer creates view over entire buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal008() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(8, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0090
     * @tc.name testUint8ArrayTotal009
     * @tc.desc Verify constructor with ArrayBuffer and int byteOffset creates view from offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal009() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 4);
    assertEqual(4, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0100
     * @tc.name testUint8ArrayTotal010
     * @tc.desc Verify constructor with ArrayBuffer and number byteOffset creates view from truncated offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal010() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    assertEqual(6, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0110
     * @tc.name testUint8ArrayTotal011
     * @tc.desc Verify constructor with ArrayBuffer, int offset and int length creates view with specified range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal011() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0120
     * @tc.name testUint8ArrayTotal012
     * @tc.desc Verify constructor with ArrayBuffer and undefined offset and length defaults to full buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal012() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(8, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0130
     * @tc.name testUint8ArrayTotal013
     * @tc.desc Verify constructor with int length 0 creates empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal013() {
    Uint8Array arr = new Uint8Array(0);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0140
     * @tc.name testUint8ArrayTotal014
     * @tc.desc Verify constructor with int length 1 creates array with single element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal014() {
    Uint8Array arr = new Uint8Array(1);
    assertEqual(1, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0150
     * @tc.name testUint8ArrayTotal015
     * @tc.desc Verify constructor with int length 255 creates array with 255 elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal015() {
    Uint8Array arr = new Uint8Array(255);
    assertEqual(255, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0160
     * @tc.name testUint8ArrayTotal016
     * @tc.desc Verify constructor with number length 0.0 creates empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal016() {
    Uint8Array arr = new Uint8Array(0.0);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0170
     * @tc.name testUint8ArrayTotal017
     * @tc.desc Verify constructor with number length 3.9 truncates to 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal017() {
    Uint8Array arr = new Uint8Array(3.9);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0180
     * @tc.name testUint8ArrayTotal018
     * @tc.desc Verify constructor copies empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal018() {
    Uint8Array src = new Uint8Array();
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0190
     * @tc.name testUint8ArrayTotal019
     * @tc.desc Verify constructor copies Uint8Array with boundary values 0, 127, 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal019() {
    Uint8Array src = Uint8Array.of(0, 127, 255);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0200
     * @tc.name testUint8ArrayTotal020
     * @tc.desc Verify constructor with FixedArray<int> containing hex literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal020() {
    Uint8Array arr = new Uint8Array(new int[] {0x0A, 0xFF, 0x00});
    assertEqual(10, arr.get(0));
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0210
     * @tc.name testUint8ArrayTotal021
     * @tc.desc Verify constructor with FixedArray<number> containing float values truncates to int
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal021() {
    Uint8Array arr = new Uint8Array(new double[] {1.5, 2.9, 3.1});
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0220
     * @tc.name testUint8ArrayTotal022
     * @tc.desc Verify constructor with FixedArray<int> containing binary literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal022() {
    Uint8Array arr = new Uint8Array(new int[] {0b1010, 0b11111111});
    assertEqual(10, arr.get(0));
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0230
     * @tc.name testUint8ArrayTotal023
     * @tc.desc Verify constructor with FixedArray<int> containing octal literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal023() {
    Uint8Array arr = new Uint8Array(new int[] {0377, 0200});
    assertEqual(255, arr.get(0));
    assertEqual(128, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0240
     * @tc.name testUint8ArrayTotal024
     * @tc.desc Verify constructor with empty Array<int> creates empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal024() {
    List<Integer> src = new ArrayList<>();
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0250
     * @tc.name testUint8ArrayTotal025
     * @tc.desc Verify constructor with single-element Array<int> creates array with that element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal025() {
    List<Integer> src = java.util.Arrays.asList(42);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(42, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0260
     * @tc.name testUint8ArrayTotal026
     * @tc.desc Verify constructor with ArrayBuffer of length 1 creates view with 1 element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal026() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(1, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0270
     * @tc.name testUint8ArrayTotal027
     * @tc.desc Verify constructor with empty ArrayBuffer creates empty view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal027() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0280
     * @tc.name testUint8ArrayTotal028
     * @tc.desc Verify constructor with byteOffset 0 starts from buffer beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0290
     * @tc.name testUint8ArrayTotal029
     * @tc.desc Verify constructor with byteOffset 2 creates view at non-zero offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 2);
    assertEqual(2, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0300
     * @tc.name testUint8ArrayTotal030
     * @tc.desc Verify constructor with number byteOffset 0.0 starts from buffer beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0310
     * @tc.name testUint8ArrayTotal031
     * @tc.desc Verify constructor with number byteOffset 1.9 truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal031() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 1.9);
    assertEqual(1, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0320
     * @tc.name testUint8ArrayTotal032
     * @tc.desc Verify constructor with length 0 in three-argument form creates view with 0 elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0, 0);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0330
     * @tc.name testUint8ArrayTotal033
     * @tc.desc Verify constructor with length 1 in three-argument form creates view with 1 element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal033() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0, 1);
    assertEqual(1, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0340
     * @tc.name testUint8ArrayTotal034
     * @tc.desc Verify BYTES_PER_ELEMENT property returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal034() {
    Uint8Array arr = new Uint8Array(1);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0350
     * @tc.name testUint8ArrayTotal035
     * @tc.desc Verify buffer property returns the underlying ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal035() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    ArrayBuffer result = arr.buffer();
    assertEqual(buf, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0360
     * @tc.name testUint8ArrayTotal036
     * @tc.desc Verify byteOffset property returns 0 for view starting at buffer beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(0, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0370
     * @tc.name testUint8ArrayTotal037
     * @tc.desc Verify byteLength property equals length * BYTES_PER_ELEMENT
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal037() {
    Uint8Array arr = new Uint8Array(4);
    assertEqual(4, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0380
     * @tc.name testUint8ArrayTotal038
     * @tc.desc Verify length property returns number of elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal038() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(5, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0390
     * @tc.name testUint8ArrayTotal039
     * @tc.desc Verify name property returns Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal039() {
    Uint8Array arr = new Uint8Array(1);
    String name = arr.getClass().getSimpleName();
    assertEqual("Uint8Array", name);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0400
     * @tc.name testUint8ArrayTotal040
     * @tc.desc Verify $_get with one argument index returns element at that index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal040() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = arr.get(1);
    assertEqual(20, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0410
     * @tc.name testUint8ArrayTotal041
     * @tc.desc Verify $_get with index 0 returns first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal041() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = arr.get(0);
    assertEqual(10, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0420
     * @tc.name testUint8ArrayTotal042
     * @tc.desc Verify $_get with index length-1 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal042() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = arr.get(2);
    assertEqual(30, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0430
     * @tc.name testUint8ArrayTotal043
     * @tc.desc Verify $_get with index equal to length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal043() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    int val = arr.get(3);
    assertNull(val);} catch (RangeError e) { assertEqual("basetype.common.RangeError", BasTest.className(e));};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0440
     * @tc.name testUint8ArrayTotal044
     * @tc.desc Verify $_set with two arguments index and value sets element at that index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal044() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(1, 42);
    assertEqual(42, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0450
     * @tc.name testUint8ArrayTotal045
     * @tc.desc Verify $_set with index 0 sets first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal045() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 100);
    assertEqual(100, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0460
     * @tc.name testUint8ArrayTotal046
     * @tc.desc Verify $_set with index length-1 sets last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal046() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(2, 200);
    assertEqual(200, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0470
     * @tc.name testUint8ArrayTotal047
     * @tc.desc Verify $_set with index equal to length does not change length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal047() {
    Uint8Array arr = new Uint8Array(3);
    try {
    arr.set(3, 100);
    assertEqual(3, arr.length());} catch (RangeError e) { assertEqual("basetype.common.RangeError", BasTest.className(e));};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0480
     * @tc.name testUint8ArrayTotal048
     * @tc.desc Verify $_set with value 0 stores zero
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal048() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 0);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0490
     * @tc.name testUint8ArrayTotal049
     * @tc.desc Verify $_set with value 255 stores max uint8 value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal049() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 255);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0500
     * @tc.name testUint8ArrayTotal050
     * @tc.desc Verify $_set with value 128 stores mid-range value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal050() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 128);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0510
     * @tc.name testUint8ArrayTotal051
     * @tc.desc Verify $_set with value 256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal051() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 256);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0520
     * @tc.name testUint8ArrayTotal052
     * @tc.desc Verify $_set with value -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal052() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, -1);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0530
     * @tc.name testUint8ArrayTotal053
     * @tc.desc Verify at with one argument index returns element at that index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal053() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer val = arr.at(1);
    assertEqual(20, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0540
     * @tc.name testUint8ArrayTotal054
     * @tc.desc Verify at with index 0 returns first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal054() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer val = arr.at(0);
    assertEqual(10, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0550
     * @tc.name testUint8ArrayTotal055
     * @tc.desc Verify at with index -1 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal055() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer val = arr.at(-1);
    assertEqual(30, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0560
     * @tc.name testUint8ArrayTotal056
     * @tc.desc Verify at with index -3 returns first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal056() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer val = arr.at(-3);
    assertEqual(10, val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0570
     * @tc.name testUint8ArrayTotal057
     * @tc.desc Verify at with index equal to length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal057() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer val = arr.at(3);
    assertNull(val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0580
     * @tc.name testUint8ArrayTotal058
     * @tc.desc Verify at with index -length-1 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal058() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer val = arr.at(-4);
    assertNull(val);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0590
     * @tc.name testUint8ArrayTotal059
     * @tc.desc Verify with returns new Uint8Array with element at index replaced
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal059() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.with(1, 99);
    assertEqual(99, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0600
     * @tc.name testUint8ArrayTotal060
     * @tc.desc Verify with index 0 replaces first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal060() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.with(0, 99);
    assertEqual(99, result.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0610
     * @tc.name testUint8ArrayTotal061
     * @tc.desc Verify with index length-1 replaces last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal061() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.with(2, 99);
    assertEqual(99, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0620
     * @tc.name testUint8ArrayTotal062
     * @tc.desc Verify with value 127 replaces element with mid-range value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal062() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.with(1, 127);
    assertEqual(127, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0630
     * @tc.name testUint8ArrayTotal063
     * @tc.desc Verify with value 256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal063() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.with(1, 256);
    assertEqual(0, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0640
     * @tc.name testUint8ArrayTotal064
     * @tc.desc Verify with value -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal064() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.with(1, -1);
    assertEqual(255, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0650
     * @tc.name testUint8ArrayTotal065
     * @tc.desc Verify set with two arguments array and offset copies elements from array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal065() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array src = Uint8Array.of(1, 2, 3);
    arr.set(src, 1);
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0660
     * @tc.name testUint8ArrayTotal066
     * @tc.desc Verify set with offset 0 copies elements from beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal066() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array src = Uint8Array.of(1, 2, 3);
    arr.set(src, 0);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0670
     * @tc.name testUint8ArrayTotal067
     * @tc.desc Verify set with offset at end of array copies elements at end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal067() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array src = Uint8Array.of(1, 2);
    arr.set(src, 3);
    assertEqual(1, arr.get(3));
    assertEqual(2, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0680
     * @tc.name testUint8ArrayTotal068
     * @tc.desc Verify set with offset as number truncates to int
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal068() {
    Uint8Array arr = new Uint8Array(5);
    Uint8Array src = Uint8Array.of(1, 2);
    arr.set(src, (int) (1.9));
    assertEqual(1, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0690
     * @tc.name testUint8ArrayTotal069
     * @tc.desc Verify set with source as FixedArray<int> copies literal values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal069() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(new Uint8Array(new double[] {10.0, 20.0, 30.0}), 0);
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0700
     * @tc.name testUint8ArrayTotal070
     * @tc.desc Verify set with source as Array<int> copies array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal070() {
    Uint8Array arr = new Uint8Array(5);
    double[] src = new double[] {10.0, 20.0, 30.0};
    arr.set(src, 0);
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0710
     * @tc.name testUint8ArrayTotal071
     * @tc.desc Verify set with source as Iterable<Number> copies number values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal071() {
    Uint8Array arr = new Uint8Array(5);
    double[] src = new double[] {10.0, 20.0, 30.0};
    arr.set(src, 0);
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0720
     * @tc.name testUint8ArrayTotal072
     * @tc.desc Verify set with source containing boundary value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal072() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(new Uint8Array(new int[] {0}), 0);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0730
     * @tc.name testUint8ArrayTotal073
     * @tc.desc Verify set with source containing boundary value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal073() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(new Uint8Array(new int[] {255}), 0);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0740
     * @tc.name testUint8ArrayTotal074
     * @tc.desc Verify copyWithin copies elements within the array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 3, 5);
    assertEqual(4, arr.get(0));
    assertEqual(5, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0750
     * @tc.name testUint8ArrayTotal075
     * @tc.desc Verify copyWithin with target 0 copies from start to end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 2);
    assertEqual(3, arr.get(0));
    assertEqual(5, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0760
     * @tc.name testUint8ArrayTotal076
     * @tc.desc Verify copyWithin with negative target copies to negative target position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal076() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(-2, 0, 2);
    assertEqual(1, arr.get(3));
    assertEqual(2, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0770
     * @tc.name testUint8ArrayTotal077
     * @tc.desc Verify copyWithin with negative start copies from negative start position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal077() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, -3, -1);
    assertEqual(3, arr.get(0));
    assertEqual(4, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0780
     * @tc.name testUint8ArrayTotal078
     * @tc.desc Verify copyWithin with negative end copies up to negative end position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal078() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 1, -1);
    assertEqual(2, arr.get(0));
    assertEqual(3, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0790
     * @tc.name testUint8ArrayTotal079
     * @tc.desc Verify fill with three arguments value, start, end fills range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal079() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 1, 4);
    assertEqual(0, arr.get(0));
    assertEqual(42, arr.get(1));
    assertEqual(42, arr.get(3));
    assertEqual(0, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0800
     * @tc.name testUint8ArrayTotal080
     * @tc.desc Verify fill with two arguments value and start fills from start to end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal080() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 2);
    assertEqual(0, arr.get(0));
    assertEqual(42, arr.get(2));
    assertEqual(42, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0810
     * @tc.name testUint8ArrayTotal081
     * @tc.desc Verify fill with one argument value fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal081() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42);
    assertEqual(42, arr.get(0));
    assertEqual(42, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0820
     * @tc.name testUint8ArrayTotal082
     * @tc.desc Verify fill with value 0 fills with zeros
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal082() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0830
     * @tc.name testUint8ArrayTotal083
     * @tc.desc Verify fill with value 255 fills with max uint8 value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal083() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(255);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0840
     * @tc.name testUint8ArrayTotal084
     * @tc.desc Verify fill with value 128 fills with mid-range value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal084() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(128);
    assertEqual(128, arr.get(0));
    assertEqual(128, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0850
     * @tc.name testUint8ArrayTotal085
     * @tc.desc Verify fill with value 256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal085() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(256);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0860
     * @tc.name testUint8ArrayTotal086
     * @tc.desc Verify fill with value -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal086() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-1);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0870
     * @tc.name testUint8ArrayTotal087
     * @tc.desc Verify fill with negative start fills from negative start position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal087() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, -3);
    assertEqual(0, arr.get(0));
    assertEqual(42, arr.get(2));
    assertEqual(42, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0880
     * @tc.name testUint8ArrayTotal088
     * @tc.desc Verify fill with negative end fills up to negative end position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal088() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 1, -1);
    assertEqual(0, arr.get(0));
    assertEqual(42, arr.get(1));
    assertEqual(42, arr.get(3));
    assertEqual(0, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0890
     * @tc.name testUint8ArrayTotal089
     * @tc.desc Verify fill with start greater than end does nothing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal089() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(42, 3, 1);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0900
     * @tc.name testUint8ArrayTotal090
     * @tc.desc Verify static of with multiple int arguments creates array with those values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal090() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0910
     * @tc.name testUint8ArrayTotal091
     * @tc.desc Verify static of with no arguments creates empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal091() {
    Uint8Array arr = Uint8Array.of();
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0920
     * @tc.name testUint8ArrayTotal092
     * @tc.desc Verify static of with single argument creates array with one element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal092() {
    Uint8Array arr = Uint8Array.of(42);
    assertEqual(42, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0930
     * @tc.name testUint8ArrayTotal093
     * @tc.desc Verify static of with boundary value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal093() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0940
     * @tc.name testUint8ArrayTotal094
     * @tc.desc Verify static of with boundary value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal094() {
    Uint8Array arr = Uint8Array.of(255);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0950
     * @tc.name testUint8ArrayTotal095
     * @tc.desc Verify static from with array-like object creates Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal095() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0960
     * @tc.name testUint8ArrayTotal096
     * @tc.desc Verify static from with mapFn transforms elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal096() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src, (x, index) -> x * 2);
    assertEqual(2, arr.at(0));
    assertEqual(6, arr.at(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0970
     * @tc.name testUint8ArrayTotal097
     * @tc.desc Verify static from with thisArg provides this context to mapFn
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal097() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    int multiplier = 3;
    Uint8Array arr = Uint8Array.from(src, (x, index) -> x * multiplier);
    assertEqual(3, arr.at(0));
    assertEqual(9, arr.at(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0980
     * @tc.name testUint8ArrayTotal098
     * @tc.desc Verify static from with empty source creates empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal098() {
    List<Integer> src = new ArrayList<>();
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0990
     * @tc.name testUint8ArrayTotal099
     * @tc.desc Verify static from with Uint8Array source copies elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal099() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1000
     * @tc.name testUint8ArrayTotal100
     * @tc.desc Verify static from with Iterable<Number> source creates array from number iterable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal100() {
    double[] src = new double[] {7.0, 8.0, 9.0};
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(7, arr.get(0));
    assertEqual(9, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1010
     * @tc.name testUint8ArrayTotal101
     * @tc.desc Verify static from with mapFn returning boundary value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal101() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src, (x, index) -> 0);
    assertEqual(0, arr.at(0));
    assertEqual(0, arr.at(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1020
     * @tc.name testUint8ArrayTotal102
     * @tc.desc Verify static from with mapFn returning boundary value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal102() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src, (x, index) -> 255);
    assertEqual(255, arr.at(0));
    assertEqual(255, arr.at(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1030
     * @tc.name testUint8ArrayTotal103
     * @tc.desc Verify valueOf returns the Uint8Array itself
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal103() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array result = arr.valueOf();
    assertEqual(arr, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1040
     * @tc.name testUint8ArrayTotal104
     * @tc.desc Verify entries returns an iterator of index-value pairs
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal104() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult first = iter.next();
    int[] firstValue = first.value;
    if (firstValue != null) {
    assertEqual(0, firstValue[0]);
    assertEqual(10, firstValue[1]);};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1050
     * @tc.name testUint8ArrayTotal105
     * @tc.desc Verify keys returns an iterator of indices
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal105() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.KeyIterator iter = arr.keys();
    IteratorResult first = iter.next();
    assertEqual(0, first.value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1060
     * @tc.name testUint8ArrayTotal106
     * @tc.desc Verify values returns an iterator of values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal106() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(10, first.value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1070
     * @tc.name testUint8ArrayTotal107
     * @tc.desc Verify iterator protocol works with for-of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal107() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] sum = {0};
    for (Integer val : arr.values()) {
    sum[0] += val;};
    assertEqual(60, sum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1080
     * @tc.name testUint8ArrayTotal108
     * @tc.desc Verify includes with one argument returns true if element exists
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal108() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.includes(20);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1090
     * @tc.name testUint8ArrayTotal109
     * @tc.desc Verify includes returns false if element does not exist
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal109() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.includes(99);
    assertFalse(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1100
     * @tc.name testUint8ArrayTotal110
     * @tc.desc Verify includes with fromIndex starts search from given index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal110() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 20);
    boolean result = arr.includes(20, 2);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1110
     * @tc.name testUint8ArrayTotal111
     * @tc.desc Verify includes with negative fromIndex searches from offset from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal111() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.includes(10, -2);
    assertFalse(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1120
     * @tc.name testUint8ArrayTotal112
     * @tc.desc Verify includes with boundary value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal112() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    boolean result = arr.includes(0);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1130
     * @tc.name testUint8ArrayTotal113
     * @tc.desc Verify indexOf with one argument returns first index of element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal113() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 20);
    int idx = arr.indexOf(20);
    assertEqual(1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1140
     * @tc.name testUint8ArrayTotal114
     * @tc.desc Verify indexOf returns -1 if element not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal114() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int idx = arr.indexOf(99);
    assertEqual(-1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1150
     * @tc.name testUint8ArrayTotal115
     * @tc.desc Verify indexOf with fromIndex starts search from given index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal115() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 20);
    int idx = arr.indexOf(20, 2);
    assertEqual(3, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1160
     * @tc.name testUint8ArrayTotal116
     * @tc.desc Verify indexOf with negative fromIndex searches from offset from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal116() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int idx = arr.indexOf(10, -2);
    assertEqual(-1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1170
     * @tc.name testUint8ArrayTotal117
     * @tc.desc Verify indexOf with boundary value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal117() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    int idx = arr.indexOf(255);
    assertEqual(2, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1180
     * @tc.name testUint8ArrayTotal118
     * @tc.desc Verify lastIndexOf with one argument returns last index of element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal118() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 20);
    int idx = arr.lastIndexOf(20);
    assertEqual(3, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1190
     * @tc.name testUint8ArrayTotal119
     * @tc.desc Verify lastIndexOf returns -1 if element not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal119() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int idx = arr.lastIndexOf(99);
    assertEqual(-1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1200
     * @tc.name testUint8ArrayTotal120
     * @tc.desc Verify lastIndexOf with fromIndex searches backwards from given index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal120() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 20);
    int idx = arr.lastIndexOf(20, 2);
    assertEqual(1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1210
     * @tc.name testUint8ArrayTotal121
     * @tc.desc Verify lastIndexOf with negative fromIndex searches backwards from offset from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal121() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int idx = arr.lastIndexOf(30, -1);
    assertEqual(2, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1220
     * @tc.name testUint8ArrayTotal122
     * @tc.desc Verify find returns first element satisfying predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal122() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Integer result = arr.find((v) -> v > 25);
    assertEqual(30, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1230
     * @tc.name testUint8ArrayTotal123
     * @tc.desc Verify find returns undefined if no element satisfies predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal123() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer result = arr.find((v) -> v > 100);
    assertNull(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1240
     * @tc.name testUint8ArrayTotal124
     * @tc.desc Verify find with thisArg provides this context to predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal124() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int threshold = 15;
    Integer result = arr.find((v) -> v > threshold);
    assertEqual(20, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1250
     * @tc.name testUint8ArrayTotal125
     * @tc.desc Verify findIndex returns index of first element satisfying predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal125() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int idx = arr.findIndex((v) -> v > 25);
    assertEqual(2, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1260
     * @tc.name testUint8ArrayTotal126
     * @tc.desc Verify findIndex returns -1 if no element satisfies predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal126() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int idx = arr.findIndex((v) -> v > 100);
    assertEqual(-1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1270
     * @tc.name testUint8ArrayTotal127
     * @tc.desc Verify findIndex with thisArg provides this context to predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal127() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int threshold = 15;
    int idx = arr.findIndex((v) -> v > threshold);
    assertEqual(1, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1280
     * @tc.name testUint8ArrayTotal128
     * @tc.desc Verify findLast returns last element satisfying predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal128() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Integer result = arr.findLast((v) -> v > 25);
    assertEqual(40, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1290
     * @tc.name testUint8ArrayTotal129
     * @tc.desc Verify findLastIndex returns index of last element satisfying predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal129() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int idx = arr.findLastIndex((v) -> v > 25);
    assertEqual(3, idx);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1300
     * @tc.name testUint8ArrayTotal130
     * @tc.desc Verify forEach iterates over all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal130() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] sum = {0};
    arr.forEach((v) -> {
    sum[0] += v;});
    assertEqual(6, sum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1310
     * @tc.name testUint8ArrayTotal131
     * @tc.desc Verify forEach with thisArg provides this context to callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal131() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] total = {0};
    int factor = 2;
    arr.forEach((v) -> {
    total[0] += v * factor;});
    assertEqual(12, total[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1320
     * @tc.name testUint8ArrayTotal132
     * @tc.desc Verify some returns true if any element satisfies predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal132() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.some((v) -> v > 25);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1330
     * @tc.name testUint8ArrayTotal133
     * @tc.desc Verify some returns false if no element satisfies predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal133() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.some((v) -> v > 100);
    assertFalse(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1340
     * @tc.name testUint8ArrayTotal134
     * @tc.desc Verify some with thisArg provides this context to predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal134() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int threshold = 15;
    boolean result = arr.some((v) -> v > threshold);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1350
     * @tc.name testUint8ArrayTotal135
     * @tc.desc Verify every returns true if all elements satisfy predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal135() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v) -> v > 5);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1360
     * @tc.name testUint8ArrayTotal136
     * @tc.desc Verify every returns false if any element fails predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal136() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v) -> v > 15);
    assertFalse(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1370
     * @tc.name testUint8ArrayTotal137
     * @tc.desc Verify every with thisArg provides this context to predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal137() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int minVal = 5;
    boolean result = arr.every((v) -> v > minVal);
    assertTrue(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1380
     * @tc.name testUint8ArrayTotal138
     * @tc.desc Verify slice with no arguments returns a copy of the entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal138() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.slice();
    assertEqual(10, result.get(0));
    assertEqual(30, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1390
     * @tc.name testUint8ArrayTotal139
     * @tc.desc Verify slice with start returns elements from start to end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal139() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array result = arr.slice(1);
    assertEqual(20, result.get(0));
    assertEqual(40, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1400
     * @tc.name testUint8ArrayTotal140
     * @tc.desc Verify slice with start and end returns elements in range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal140() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array result = arr.slice(1, 3);
    assertEqual(20, result.get(0));
    assertEqual(30, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1410
     * @tc.name testUint8ArrayTotal141
     * @tc.desc Verify slice with negative start returns elements from offset from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal141() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array result = arr.slice(-2);
    assertEqual(30, result.get(0));
    assertEqual(40, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1420
     * @tc.name testUint8ArrayTotal142
     * @tc.desc Verify slice with negative end returns elements up to offset from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal142() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array result = arr.slice(1, -1);
    assertEqual(20, result.get(0));
    assertEqual(30, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1430
     * @tc.name testUint8ArrayTotal143
     * @tc.desc Verify slice with start greater than end returns empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal143() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.slice(3, 1);
    assertEqual(0, result.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1440
     * @tc.name testUint8ArrayTotal144
     * @tc.desc Verify slice with start equal to end returns empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal144() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.slice(1, 1);
    assertEqual(0, result.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1450
     * @tc.name testUint8ArrayTotal145
     * @tc.desc Verify reverse reverses the array in place
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal145() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reverse();
    assertEqual(30, arr.get(0));
    assertEqual(10, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1460
     * @tc.name testUint8ArrayTotal146
     * @tc.desc Verify toReversed returns a reversed copy without modifying original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal146() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.toReversed();
    assertEqual(30, result.get(0));
    assertEqual(10, result.get(2));
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1470
     * @tc.name testUint8ArrayTotal147
     * @tc.desc Verify sort with no arguments sorts elements in ascending order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal147() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1480
     * @tc.name testUint8ArrayTotal148
     * @tc.desc Verify sort with compareFn sorts according to compare function
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal148() {
    Uint8Array arr = Uint8Array.of(10, 30, 20);
    arr.sort((a, b) -> (int) (a - b));
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1490
     * @tc.name testUint8ArrayTotal149
     * @tc.desc Verify sort with compareFn sorts in descending order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal149() {
    Uint8Array arr = Uint8Array.of(10, 30, 20);
    arr.sort((a, b) -> (int) (b - a));
    assertEqual(30, arr.get(0));
    assertEqual(10, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1500
     * @tc.name testUint8ArrayTotal150
     * @tc.desc Verify sort with compareFn handles equal values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal150() {
    Uint8Array arr = Uint8Array.of(20, 10, 20);
    arr.sort((a, b) -> (int) (a - b));
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(20, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1510
     * @tc.name testUint8ArrayTotal151
     * @tc.desc Verify toSorted returns a sorted copy without modifying original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal151() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    Uint8Array result = arr.toSorted();
    assertEqual(10, result.get(0));
    assertEqual(30, result.get(2));
    assertEqual(30, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1520
     * @tc.name testUint8ArrayTotal152
     * @tc.desc Verify map transforms each element and returns new Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal152() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array result = arr.map((v) -> v * 2);
    assertEqual(2, result.get(0));
    assertEqual(6, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1530
     * @tc.name testUint8ArrayTotal153
     * @tc.desc Verify map with thisArg provides this context to callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal153() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int factor = 3;
    Uint8Array result = arr.map((v) -> v * factor);
    assertEqual(3, result.get(0));
    assertEqual(9, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1540
     * @tc.name testUint8ArrayTotal154
     * @tc.desc Verify map with boundary value 0 maps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal154() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array result = arr.map((v) -> v);
    assertEqual(0, result.get(0));
    assertEqual(255, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1550
     * @tc.name testUint8ArrayTotal155
     * @tc.desc Verify filter returns elements satisfying predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal155() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array result = arr.filter((v) -> v > 25);
    assertEqual(30, result.get(0));
    assertEqual(40, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1560
     * @tc.name testUint8ArrayTotal156
     * @tc.desc Verify filter returns empty array if no element satisfies predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal156() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array result = arr.filter((v) -> v > 100);
    assertEqual(0, result.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1570
     * @tc.name testUint8ArrayTotal157
     * @tc.desc Verify filter with thisArg provides this context to predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal157() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int minVal = 15;
    Uint8Array result = arr.filter((v) -> v > minVal);
    assertEqual(20, result.get(0));
    assertEqual(30, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1580
     * @tc.name testUint8ArrayTotal158
     * @tc.desc Verify filter with boundary value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal158() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array result = arr.filter((v) -> v > 100);
    assertEqual(127, result.get(0));
    assertEqual(255, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1590
     * @tc.name testUint8ArrayTotal159
     * @tc.desc Verify reduce with callback accumulates values left to right
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal159() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((acc, v, index, array)-> acc + v, 0);
    assertEqual(6, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1600
     * @tc.name testUint8ArrayTotal160
     * @tc.desc Verify reduce without initialValue uses first element as initial
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal160() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((acc, v, index, array)-> acc + v);
    assertEqual(6, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1610
     * @tc.name testUint8ArrayTotal161
     * @tc.desc Verify reduce with string concatenation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal161() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = "";
    for (int i = 0; i < arr.length(); i++) {
    Integer val = arr.at(i);
    if (val != null) {
    result += String.valueOf(val);};};
    assertEqual("123", result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1620
     * @tc.name testUint8ArrayTotal162
     * @tc.desc Verify reduce with initialValue 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal162() {
    Uint8Array arr = Uint8Array.of(1, 2);
    int result = arr.reduce((acc, v, index, array)-> acc + v, 10);
    assertEqual(13, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1630
     * @tc.name testUint8ArrayTotal163
     * @tc.desc Verify reduce with empty array and initialValue returns initialValue
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal163() {
    Uint8Array arr = new Uint8Array();
    int result = arr.reduce((acc, v, index, array)-> acc + v, 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1640
     * @tc.name testUint8ArrayTotal164
     * @tc.desc Verify reduceRight with callback accumulates values right to left
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal164() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((acc, v, index, array)-> acc + v, 0);
    assertEqual(6, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1650
     * @tc.name testUint8ArrayTotal165
     * @tc.desc Verify reduceRight with string concatenation from right to left
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal165() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = "";
    for (int i = arr.length() - 1; i >= 0; i--) {
    Integer val = arr.at(i);
    if (val != null) {
    result += String.valueOf(val);};};
    assertEqual("321", result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1660
     * @tc.name testUint8ArrayTotal166
     * @tc.desc Verify reduceRight with initialValue empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal166() {
    Uint8Array arr = Uint8Array.of(1, 2);
    String result = "";
    for (int i = arr.length() - 1; i >= 0; i--) {
    Integer val = arr.at(i);
    if (val != null) {
    result += String.valueOf(val);};};
    assertEqual("21", result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1670
     * @tc.name testUint8ArrayTotal167
     * @tc.desc Verify reduceRight with initialValue 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal167() {
    Uint8Array arr = Uint8Array.of(1, 2);
    int result = arr.reduceRight((acc, v, index, array)-> acc + v, 0);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1680
     * @tc.name testUint8ArrayTotal168
     * @tc.desc Verify join with no arguments returns comma-separated string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal168() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    String str = arr.join();
    assertEqual("10,20,30", str);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1690
     * @tc.name testUint8ArrayTotal169
     * @tc.desc Verify join with custom separator
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal169() {
    Uint8Array arr = Uint8Array.of(1, 2);
    String str = arr.join("|");
    assertEqual("1|2", str);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1700
     * @tc.name testUint8ArrayTotal170
     * @tc.desc Verify join with empty separator
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal170() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String str = arr.join("");
    assertEqual("123", str);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1710
     * @tc.name testUint8ArrayTotal171
     * @tc.desc Verify join with empty separator and boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal171() {
    Uint8Array arr = Uint8Array.of(255, 0);
    String str = arr.join("");
    assertEqual("2550", str);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1720
     * @tc.name testUint8ArrayTotal172
     * @tc.desc Verify toLocaleString with no arguments returns localized string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal172() {
    Uint8Array arr = Uint8Array.of(1000, 2000);
    String str = arr.toLocaleString();
    assertTrue(str.length() > 0);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_1730
     * @tc.name testUint8ArrayTotal173
     * @tc.desc Verify toLocaleString with locale parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal173() {
    Uint8Array arr = Uint8Array.of(1000);
    String str = arr.toLocaleString("en-US");
    assertTrue(str.length() > 0);}
}
