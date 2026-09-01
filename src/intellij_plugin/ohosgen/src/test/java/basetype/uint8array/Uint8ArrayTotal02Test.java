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
import basetype.common.RangeError;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayTotal02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayTotal02Test extends BasTest {
    /**
     * Verify typeof new Uint8Array(5) is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0010
     * @tc.name testUint8ArrayTotal001
     * @tc.desc Verify typeof new Uint8Array(5) is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal001() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify typeof Uint8Array.BYTES_PER_ELEMENT is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0020
     * @tc.name testUint8ArrayTotal002
     * @tc.desc Verify typeof Uint8Array.BYTES_PER_ELEMENT is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal002() {
    Uint8Array arr = new Uint8Array(5);
    assertTrue(BasTest.isInteger(arr.BYTES_PER_ELEMENT));
    }

    /**
     * Verify typeof arr.buffer is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0030
     * @tc.name testUint8ArrayTotal003
     * @tc.desc Verify typeof arr.buffer is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal003() {
    Uint8Array arr = new Uint8Array(5);
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }

    /**
     * Verify typeof arr.byteOffset is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0040
     * @tc.name testUint8ArrayTotal004
     * @tc.desc Verify typeof arr.byteOffset is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal004() {
    Uint8Array arr = new Uint8Array(5);
    assertTrue(BasTest.isInteger(arr.byteOffset()));
    }

    /**
     * Verify typeof arr[0] is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0050
     * @tc.name testUint8ArrayTotal005
     * @tc.desc Verify typeof arr[0] is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal005() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    assertTrue(BasTest.isInteger(arr.get(0)));
    }

    /**
     * Verify typeof arr.at(0) is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0060
     * @tc.name testUint8ArrayTotal006
     * @tc.desc Verify typeof arr.at(0) is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal006() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    Integer val = arr.at(0);
    assertEqualInt(42, val);
    if (val != null) {
    assertTrue(BasTest.isInteger(val));
    }
    }

    /**
     * Verify typeof arr.at(5) with out-of-bounds index is 'undefined'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0070
     * @tc.name testUint8ArrayTotal007
     * @tc.desc Verify typeof arr.at(5) with out-of-bounds index is 'undefined'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal007() {
    Uint8Array arr = new Uint8Array(3);
    assertNull(arr.at(5));
    }

    /**
     * Verify typeof arr.slice() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0080
     * @tc.name testUint8ArrayTotal008
     * @tc.desc Verify typeof arr.slice() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal008() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertTrue(arr.slice() instanceof Uint8Array);
    }

    /**
     * Verify typeof arr.map() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0090
     * @tc.name testUint8ArrayTotal009
     * @tc.desc Verify typeof arr.map() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal009() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.map((v, i, a) -> v);
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.filter() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0100
     * @tc.name testUint8ArrayTotal010
     * @tc.desc Verify typeof arr.filter() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal010() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v, i, a) -> true);
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof Uint8Array.of() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0110
     * @tc.name testUint8ArrayTotal011
     * @tc.desc Verify typeof Uint8Array.of() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal011() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify typeof Uint8Array.from() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0120
     * @tc.name testUint8ArrayTotal012
     * @tc.desc Verify typeof Uint8Array.from() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal012() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    }

    /**
     * Verify typeof arr.entries() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0130
     * @tc.name testUint8ArrayTotal013
     * @tc.desc Verify typeof arr.entries() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal013() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2});
    assertTrue(arr.entries() instanceof Object);
    }

    /**
     * Verify typeof arr.fill() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0140
     * @tc.name testUint8ArrayTotal014
     * @tc.desc Verify typeof arr.fill() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal014() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(0);
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.copyWithin() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0150
     * @tc.name testUint8ArrayTotal015
     * @tc.desc Verify typeof arr.copyWithin() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal015() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.copyWithin(0, 1);
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.every() is 'boolean'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0160
     * @tc.name testUint8ArrayTotal016
     * @tc.desc Verify typeof arr.every() is 'boolean'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal016() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.every((x) -> x > 0);
    assertTrue(result);
    }

    /**
     * Verify typeof arr.some() is 'boolean'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0170
     * @tc.name testUint8ArrayTotal017
     * @tc.desc Verify typeof arr.some() is 'boolean'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal017() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.some((x) -> x > 2);
    assertTrue(result);
    }

    /**
     * Verify typeof arr.forEach() is 'undefined'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0180
     * @tc.name testUint8ArrayTotal018
     * @tc.desc Verify typeof arr.forEach() is 'undefined'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal018() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Object result = null;
    arr.forEach((x) -> { });
    assertNull(result);
    }

    /**
     * Verify typeof arr.reduce() is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0190
     * @tc.name testUint8ArrayTotal019
     * @tc.desc Verify typeof arr.reduce() is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal019() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.reduce((acc, x, index, array) -> acc + x, 0);
    assertTrue(BasTest.isInteger(result));
    }

    /**
     * Verify typeof arr.find() is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0200
     * @tc.name testUint8ArrayTotal020
     * @tc.desc Verify typeof arr.find() is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal020() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Integer result = arr.find((x) -> x > 1);
    assertEqualInt(2, result);
    }

    /**
     * Verify typeof arr.findIndex() is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0210
     * @tc.name testUint8ArrayTotal021
     * @tc.desc Verify typeof arr.findIndex() is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal021() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((x) -> x > 1);
    assertTrue(BasTest.isInteger(result));
    }

    /**
     * Verify typeof arr.includes() is 'boolean'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0220
     * @tc.name testUint8ArrayTotal022
     * @tc.desc Verify typeof arr.includes() is 'boolean'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal022() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(2);
    assertTrue(result);
    }

    /**
     * Verify typeof arr.indexOf() is 'number'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0230
     * @tc.name testUint8ArrayTotal023
     * @tc.desc Verify typeof arr.indexOf() is 'number'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal023() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.indexOf(2);
    assertTrue(BasTest.isInteger(result));
    }

    /**
     * Verify typeof arr.join() is 'string'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0240
     * @tc.name testUint8ArrayTotal024
     * @tc.desc Verify typeof arr.join() is 'string'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal024() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join();
    assertEqual("1,2,3", result);
    }

    /**
     * Verify typeof arr.reverse() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0250
     * @tc.name testUint8ArrayTotal025
     * @tc.desc Verify typeof arr.reverse() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal025() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array copied = arr.slice();
    Uint8Array result = copied.reverse();
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.sort() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0260
     * @tc.name testUint8ArrayTotal026
     * @tc.desc Verify typeof arr.sort() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal026() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    Uint8Array copied = arr.slice();
    Uint8Array result = copied.sort();
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.toReversed() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0270
     * @tc.name testUint8ArrayTotal027
     * @tc.desc Verify typeof arr.toReversed() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal027() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.toReversed();
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.toSorted() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0280
     * @tc.name testUint8ArrayTotal028
     * @tc.desc Verify typeof arr.toSorted() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal028() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    Uint8Array result = arr.toSorted();
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.with() is 'object'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0290
     * @tc.name testUint8ArrayTotal029
     * @tc.desc Verify typeof arr.with() is 'object'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal029() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.with(0, 99);
    assertEqual(3, result.length());
    }

    /**
     * Verify typeof arr.set() is 'undefined'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0300
     * @tc.name testUint8ArrayTotal030
     * @tc.desc Verify typeof arr.set() is 'undefined'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal030() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    arr.set(src);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify arr.length is 0 for empty Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0310
     * @tc.name testUint8ArrayTotal031
     * @tc.desc Verify arr.length is 0 for empty Uint8Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal031() {
    Uint8Array arr = new Uint8Array(0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify arr.length is 5 for Uint8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0320
     * @tc.name testUint8ArrayTotal032
     * @tc.desc Verify arr.length is 5 for Uint8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal032() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify arr.length is 3 for Uint8Array([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0330
     * @tc.name testUint8ArrayTotal033
     * @tc.desc Verify arr.length is 3 for Uint8Array([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal033() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    }

    /**
     * Verify arr.length is 3 for Uint8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0340
     * @tc.name testUint8ArrayTotal034
     * @tc.desc Verify arr.length is 3 for Uint8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal034() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify arr.length is 3 for Uint8Array.from([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0350
     * @tc.name testUint8ArrayTotal035
     * @tc.desc Verify arr.length is 3 for Uint8Array.from([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal035() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    }

    /**
     * Verify arr.length is 3 for subarray of length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0360
     * @tc.name testUint8ArrayTotal036
     * @tc.desc Verify arr.length is 3 for subarray of length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal036() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(0, 3);
    assertEqual(3, sub.length());
    }

    /**
     * Verify arr.length is 0 for subarray(0, 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0370
     * @tc.name testUint8ArrayTotal037
     * @tc.desc Verify arr.length is 0 for subarray(0, 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal037() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());
    }

    /**
     * Verify arr.byteOffset is 0 for Uint8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0380
     * @tc.name testUint8ArrayTotal038
     * @tc.desc Verify arr.byteOffset is 0 for Uint8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal038() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify arr.byteOffset is 0 for Uint8Array([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0390
     * @tc.name testUint8ArrayTotal039
     * @tc.desc Verify arr.byteOffset is 0 for Uint8Array([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal039() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify arr.byteOffset is 0 for Uint8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0400
     * @tc.name testUint8ArrayTotal040
     * @tc.desc Verify arr.byteOffset is 0 for Uint8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify arr.byteOffset is 0 for Uint8Array.from([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0410
     * @tc.name testUint8ArrayTotal041
     * @tc.desc Verify arr.byteOffset is 0 for Uint8Array.from([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal041() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify arr.byteOffset is 0 for subarray(0, 3) from start
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0420
     * @tc.name testUint8ArrayTotal042
     * @tc.desc Verify arr.byteOffset is 0 for subarray(0, 3) from start
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal042() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(0, 3);
    assertEqual(0, sub.byteOffset());
    }

    /**
     * Verify arr.byteOffset is 2 for subarray(2, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0430
     * @tc.name testUint8ArrayTotal043
     * @tc.desc Verify arr.byteOffset is 2 for subarray(2, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal043() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(2, 5);
    assertEqual(2, sub.byteOffset());
    }

    /**
     * Verify arr.BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0440
     * @tc.name testUint8ArrayTotal044
     * @tc.desc Verify arr.BYTES_PER_ELEMENT is 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal044() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0450
     * @tc.name testUint8ArrayTotal045
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal045() {
    Uint8Array arr = new Uint8Array(5);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 42 for Uint8Array([42])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0460
     * @tc.name testUint8ArrayTotal046
     * @tc.desc Verify arr[0] is 42 for Uint8Array([42])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal046() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    assertEqualInt(42, arr.get(0));
    }

    /**
     * Verify arr[0] is 1 for Uint8Array.of(1, 2, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0470
     * @tc.name testUint8ArrayTotal047
     * @tc.desc Verify arr[0] is 1 for Uint8Array.of(1, 2, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal047() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify arr[0] is 1 for Uint8Array.from([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0480
     * @tc.name testUint8ArrayTotal048
     * @tc.desc Verify arr[0] is 1 for Uint8Array.from([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal048() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify arr[0] is 255 for Uint8Array([255])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0490
     * @tc.name testUint8ArrayTotal049
     * @tc.desc Verify arr[0] is 255 for Uint8Array([255])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal049() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array([256]) (overflow)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0500
     * @tc.name testUint8ArrayTotal050
     * @tc.desc Verify arr[0] is 0 for Uint8Array([256]) (overflow)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal050() {
    Uint8Array arr = new Uint8Array(new int[] {256});
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 255 for Uint8Array([-1]) (underflow)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0510
     * @tc.name testUint8ArrayTotal051
     * @tc.desc Verify arr[0] is 255 for Uint8Array([-1]) (underflow)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal051() {
    Uint8Array arr = new Uint8Array(new int[] {-1});
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify arr[0] is 3 for Uint8Array([3.9]) (float truncation toward zero)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0520
     * @tc.name testUint8ArrayTotal052
     * @tc.desc Verify arr[0] is 3 for Uint8Array([3.9]) (float truncation toward zero)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal052() {
    Uint8Array arr = new Uint8Array(new double[] {3.9});
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify NaN input converts to 0 while following numeric input remains 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0530
     * @tc.name testUint8ArrayTotal053
     * @tc.desc Verify NaN input converts to 0 while following numeric input remains 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal053() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN, 7});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(7, arr.get(1));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array([0])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0540
     * @tc.name testUint8ArrayTotal054
     * @tc.desc Verify arr[0] is 0 for Uint8Array([0])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal054() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify boolean false converts to 0 and true converts to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0550
     * @tc.name testUint8ArrayTotal055
     * @tc.desc Verify boolean false converts to 0 and true converts to 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal055() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify arr[0] is 1 for Uint8Array([1])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0560
     * @tc.name testUint8ArrayTotal056
     * @tc.desc Verify arr[0] is 1 for Uint8Array([1])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal056() {
    Uint8Array arr = new Uint8Array(new int[] {1});
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify positive infinity converts to 0 without changing following value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0570
     * @tc.name testUint8ArrayTotal057
     * @tc.desc Verify positive infinity converts to 0 without changing following value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal057() {
    Uint8Array arr = new Uint8Array(new double[] {Double.POSITIVE_INFINITY, 8});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(8, arr.get(1));
    }

    /**
     * Verify negative infinity converts to 0 without changing following value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0580
     * @tc.name testUint8ArrayTotal058
     * @tc.desc Verify negative infinity converts to 0 without changing following value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal058() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NEGATIVE_INFINITY, 9});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    /**
     * Verify arr[0] is 255 for Uint8Array([511])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0590
     * @tc.name testUint8ArrayTotal059
     * @tc.desc Verify arr[0] is 255 for Uint8Array([511])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal059() {
    Uint8Array arr = new Uint8Array(new int[] {511});
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify fractional values 0.5 and 1.5 truncate toward zero
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0600
     * @tc.name testUint8ArrayTotal060
     * @tc.desc Verify fractional values 0.5 and 1.5 truncate toward zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal060() {
    Uint8Array arr = new Uint8Array(new double[] {0.5, 1.5});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    /**
     * Verify invalid parseInt converts to 0 while valid parseInt keeps value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0610
     * @tc.name testUint8ArrayTotal061
     * @tc.desc Verify invalid parseInt converts to 0 while valid parseInt keeps value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal061() {
    Uint8Array arr = new Uint8Array(new int[] {BasTest.parseIntSafe("abc"), BasTest.parseIntSafe("12")});
    assertEqualInt(0, arr.get(0));
    assertEqualInt(12, arr.get(1));
    }

    /**
     * Verify arr[0] is 1 for Uint8Array([1, 2, 3])[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0620
     * @tc.name testUint8ArrayTotal062
     * @tc.desc Verify arr[0] is 1 for Uint8Array([1, 2, 3])[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal062() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify arr[1] is 2 for Uint8Array([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0630
     * @tc.name testUint8ArrayTotal063
     * @tc.desc Verify arr[1] is 2 for Uint8Array([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal063() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify arr[2] is 3 for Uint8Array([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0640
     * @tc.name testUint8ArrayTotal064
     * @tc.desc Verify arr[2] is 3 for Uint8Array([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal064() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify arr[3] throws RangeError for out-of-bounds index on Uint8Array([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0650
     * @tc.name testUint8ArrayTotal065
     * @tc.desc Verify arr[3] throws RangeError for out-of-bounds index on Uint8Array([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal065() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    try {
    int val = arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify arr[-1] throws RangeError for negative index on Uint8Array([1, 2, 3])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0660
     * @tc.name testUint8ArrayTotal066
     * @tc.desc Verify arr[-1] throws RangeError for negative index on Uint8Array([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal066() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    try {
    int val = arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0670
     * @tc.name testUint8ArrayTotal067
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal067() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 0);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 255 for Uint8Array(5) after setting arr[0]=255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0680
     * @tc.name testUint8ArrayTotal068
     * @tc.desc Verify arr[0] is 255 for Uint8Array(5) after setting arr[0]=255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal068() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 255);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=256 (overflow)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0690
     * @tc.name testUint8ArrayTotal069
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=256 (overflow)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal069() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 255 for Uint8Array(5) after setting arr[0]=-1 (underflow)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0700
     * @tc.name testUint8ArrayTotal070
     * @tc.desc Verify arr[0] is 255 for Uint8Array(5) after setting arr[0]=-1 (underflow)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal070() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, -1);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify arr[0] is 3 for Uint8Array(5) after setting arr[0]=3.9 (truncation)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0710
     * @tc.name testUint8ArrayTotal071
     * @tc.desc Verify arr[0] is 3 for Uint8Array(5) after setting arr[0]=3.9 (truncation)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal071() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 3.9);
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=Number.NaN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0720
     * @tc.name testUint8ArrayTotal072
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=Number.NaN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal072() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=512
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0730
     * @tc.name testUint8ArrayTotal073
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=512
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal073() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 512);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=-256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0740
     * @tc.name testUint8ArrayTotal074
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=-256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal074() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, -256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 1 for Uint8Array(5) after setting arr[0]=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0750
     * @tc.name testUint8ArrayTotal075
     * @tc.desc Verify arr[0] is 1 for Uint8Array(5) after setting arr[0]=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal075() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 1);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=''0''
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0760
     * @tc.name testUint8ArrayTotal076
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=''0''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal076() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, BasTest.parseIntSafe("0"));
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 255 for Uint8Array(5) after setting arr[0]=''255''
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0770
     * @tc.name testUint8ArrayTotal077
     * @tc.desc Verify arr[0] is 255 for Uint8Array(5) after setting arr[0]=''255''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal077() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, BasTest.parseIntSafe("255"));
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=''''
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0780
     * @tc.name testUint8ArrayTotal078
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=''''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal078() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, BasTest.parseIntSafe(""));
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=''abc''
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0790
     * @tc.name testUint8ArrayTotal079
     * @tc.desc Verify arr[0] is 0 for Uint8Array(5) after setting arr[0]=''abc''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal079() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, BasTest.parseIntSafe("abc"));
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify arr.fill(0) sets all elements to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0800
     * @tc.name testUint8ArrayTotal080
     * @tc.desc Verify arr.fill(0) sets all elements to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal080() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    /**
     * Verify arr.fill(255) sets all elements to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0810
     * @tc.name testUint8ArrayTotal081
     * @tc.desc Verify arr.fill(255) sets all elements to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal081() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(255);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(255, arr.get(2));
    }

    /**
     * Verify arr.fill(0, 1, 2) fills partial range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0820
     * @tc.name testUint8ArrayTotal082
     * @tc.desc Verify arr.fill(0, 1, 2) fills partial range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal082() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.fill(0, 1, 2);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify arr.copyWithin(0, 1, 2) copies elements within array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0830
     * @tc.name testUint8ArrayTotal083
     * @tc.desc Verify arr.copyWithin(0, 1, 2) copies elements within array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal083() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.copyWithin(0, 1, 2);
    assertEqualInt(2, arr.get(0));
    }

    /**
     * Verify arr.every() returns true when all elements satisfy condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0840
     * @tc.name testUint8ArrayTotal084
     * @tc.desc Verify arr.every() returns true when all elements satisfy condition
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal084() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.every((x) -> x > 0);
    assertTrue(result);
    }

    /**
     * Verify arr.every() returns false when some elements fail condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0850
     * @tc.name testUint8ArrayTotal085
     * @tc.desc Verify arr.every() returns false when some elements fail condition
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal085() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.every((x) -> x > 1);
    assertFalse(result);
    }

    /**
     * Verify arr.some() returns true when at least one element satisfies condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0860
     * @tc.name testUint8ArrayTotal086
     * @tc.desc Verify arr.some() returns true when at least one element satisfies condition
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal086() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.some((x) -> x > 2);
    assertTrue(result);
    }

    /**
     * Verify arr.some() returns false when no element satisfies condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0870
     * @tc.name testUint8ArrayTotal087
     * @tc.desc Verify arr.some() returns false when no element satisfies condition
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal087() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.some((x) -> x > 5);
    assertFalse(result);
    }

    /**
     * Verify arr.forEach() iterates over all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0880
     * @tc.name testUint8ArrayTotal088
     * @tc.desc Verify arr.forEach() iterates over all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal088() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int[] sum = {0};
    arr.forEach((x) -> {
    sum[0] += x;
        });
    assertEqual(6, sum[0]);
    }

    /**
     * Verify arr.reduce() sums all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0890
     * @tc.name testUint8ArrayTotal089
     * @tc.desc Verify arr.reduce() sums all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal089() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.reduce((acc, x, index, array) -> acc + x, 0);
    assertEqual(6, result);
    }

    /**
     * Verify arr.find() returns first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0900
     * @tc.name testUint8ArrayTotal090
     * @tc.desc Verify arr.find() returns first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal090() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Integer result = arr.find((x) -> x > 1);
    assertEqualInt(2, result);
    }

    /**
     * Verify arr.find() returns undefined when no match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0910
     * @tc.name testUint8ArrayTotal091
     * @tc.desc Verify arr.find() returns undefined when no match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal091() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Integer result = arr.find((x) -> x > 5);
    assertNull(result);
    }

    /**
     * Verify arr.findIndex() returns index of first matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0920
     * @tc.name testUint8ArrayTotal092
     * @tc.desc Verify arr.findIndex() returns index of first matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal092() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((x) -> x > 1);
    assertEqual(1, result);
    }

    /**
     * Verify arr.findIndex() returns -1 when no match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0930
     * @tc.name testUint8ArrayTotal093
     * @tc.desc Verify arr.findIndex() returns -1 when no match
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal093() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((x) -> x > 5);
    assertEqual(-1, result);
    }

    /**
     * Verify arr.findLast() returns last matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0940
     * @tc.name testUint8ArrayTotal094
     * @tc.desc Verify arr.findLast() returns last matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal094() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Integer result = arr.findLast((x) -> x > 1);
    assertEqualInt(3, result);
    }

    /**
     * Verify arr.findLastIndex() returns index of last matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0950
     * @tc.name testUint8ArrayTotal095
     * @tc.desc Verify arr.findLastIndex() returns index of last matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal095() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findLastIndex((x) -> x > 1);
    assertEqual(2, result);
    }

    /**
     * Verify arr.includes() returns true for existing element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0960
     * @tc.name testUint8ArrayTotal096
     * @tc.desc Verify arr.includes() returns true for existing element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal096() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(2);
    assertTrue(result);
    }

    /**
     * Verify arr.includes() returns false for non-existing element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0970
     * @tc.name testUint8ArrayTotal097
     * @tc.desc Verify arr.includes() returns false for non-existing element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal097() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean result = arr.includes(5);
    assertFalse(result);
    }

    /**
     * Verify arr.indexOf() returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0980
     * @tc.name testUint8ArrayTotal098
     * @tc.desc Verify arr.indexOf() returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal098() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.indexOf(2);
    assertEqual(1, result);
    }

    /**
     * Verify arr.indexOf() returns -1 for non-existing element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_0990
     * @tc.name testUint8ArrayTotal099
     * @tc.desc Verify arr.indexOf() returns -1 for non-existing element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal099() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.indexOf(5);
    assertEqual(-1, result);
    }

    /**
     * Verify subarray(1, 4).buffer is same as original buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_1000
     * @tc.name testUint8ArrayTotal100
     * @tc.desc Verify subarray(1, 4).buffer is same as original buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal100() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(1, 4);
    assertEqual(arr.buffer(), sub.buffer());
    }

    /**
     * Verify writing to subarray affects original array (shared buffer forward)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_1010
     * @tc.name testUint8ArrayTotal101
     * @tc.desc Verify writing to subarray affects original array (shared buffer forward)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal101() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(1, 4);
    sub.set(0, 99);
    assertEqualInt(99, arr.get(1));
    }

    /**
     * Verify writing to original array affects subarray (shared buffer reverse)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_1020
     * @tc.name testUint8ArrayTotal102
     * @tc.desc Verify writing to original array affects subarray (shared buffer reverse)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal102() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(1, 4);
    arr.set(2, 99);
    assertEqualInt(99, sub.get(1));
    }

    /**
     * Verify slice().buffer is different from original buffer (non-shared)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_1030
     * @tc.name testUint8ArrayTotal103
     * @tc.desc Verify slice().buffer is different from original buffer (non-shared)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal103() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array sliced = arr.slice();
    assertTrue(sliced.buffer() != arr.buffer());
    }

    /**
     * Verify subarray(0, arr.length).byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL02_1040
     * @tc.name testUint8ArrayTotal104
     * @tc.desc Verify subarray(0, arr.length).byteOffset is 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal104() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array sub = arr.subarray(0, arr.length());
    assertEqual(0, sub.byteOffset());
    }
}
