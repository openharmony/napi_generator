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
 * Uint8ArrayTotal01Test —— Int16Array 方法族测试。
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(5, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(8, arr.length());
    }
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
    assertEqual(4, arr.length());
    }
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
    assertEqual(6, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(8, arr.length());
    }
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(1, arr.length());
    }
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
    assertEqual(255, arr.length());
    }
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(3, arr.length());
    }
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(255, arr.get(2));
    }
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
    assertEqual(255, arr.get(1));
    }
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
    assertEqual(2, arr.get(1));
    }
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
    assertEqual(255, arr.get(1));
    }
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
    assertEqual(128, arr.get(1));
    }
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(42, arr.get(0));
    }
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
    assertEqual(1, arr.length());
    }
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(0, arr.byteOffset());
    }
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
    assertEqual(2, arr.byteOffset());
    }
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
    assertEqual(0, arr.byteOffset());
    }
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
    assertEqual(1, arr.byteOffset());
    }
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
    assertEqual(0, arr.length());
    }
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
    assertEqual(1, arr.length());
    }
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
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }
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
    assertEqual(buf, result);
    }
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
    assertEqual(0, arr.byteOffset());
    }
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
    assertEqual(4, arr.byteLength());
    }
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
    assertEqual(5, arr.length());
    }
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
    assertEqual("Uint8Array", name);
    }
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
    assertEqual(20, val);
    }
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
    assertEqual(10, val);
    }
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
    assertEqual(30, val);
    }
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
    assertNull(val);
    } catch (RuntimeException e) {
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    };
    }
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
    assertEqual(42, arr.get(1));
    }
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
    assertEqual(100, arr.get(0));
    }
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
    assertEqual(200, arr.get(2));
    }
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
    assertEqual(3, arr.length());
    } catch (RuntimeException e) {
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    };
    }
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
    assertEqual(0, arr.get(0));
    }
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
    assertEqual(255, arr.get(0));
    }
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
    assertEqual(128, arr.get(0));
    }
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
    assertEqual(0, arr.get(0));
    }
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
    assertEqual(255, arr.get(0));
    }
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
    assertEqual(20, val);
    }
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
    assertEqual(10, val);
    }
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
    assertEqual(30, val);
    }
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
    assertEqual(10, val);
    }
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
    assertNull(val);
    }
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
    assertNull(val);
    }
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
    assertEqual(99, result.get(1));
    }
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
    assertEqual(99, result.get(0));
    }
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
    assertEqual(99, result.get(2));
    }
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
    assertEqual(127, result.get(1));
    }
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
    assertEqual(0, result.get(1));
    }
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
    assertEqual(255, result.get(1));
    }
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
    assertEqual(2, arr.get(2));
    }
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
    assertEqual(3, arr.get(2));
    }
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
    assertEqual(2, arr.get(4));
    }
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
    assertEqual(1, arr.get(1));
    }
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
    assertEqual(30, arr.get(2));
    }
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
    assertEqual(30, arr.get(2));
    }
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
    assertEqual(30, arr.get(2));
    }
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
    assertEqual(0, arr.get(0));
    }
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
    assertEqual(255, arr.get(0));
    }
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
    assertEqual(5, arr.get(1));
    }
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
    assertEqual(5, arr.get(2));
    }
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
    assertEqual(2, arr.get(4));
    }
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
    assertEqual(4, arr.get(1));
    }
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
    assertEqual(3, arr.get(1));
    }
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
    assertEqual(0, arr.get(4));
    }
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
    assertEqual(42, arr.get(4));
    }
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
    assertEqual(42, arr.get(4));
    }
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
    assertEqual(0, arr.get(2));
    }
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
    assertEqual(255, arr.get(2));
    }
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
    assertEqual(128, arr.get(2));
    }
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
    assertEqual(0, arr.get(0));
    }
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
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL01_0870
     * @tc.name testUint8ArrayTotal087
     * @tc.desc Verify fill with negative start fills from negative start position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
