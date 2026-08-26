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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayLastIndexOf02Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayLastIndexOf02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0100
     * @tc.name testUint8ClampedArrayLastIndexOfTwo001
     * @tc.desc Verify lastIndexOf r equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(2);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0200
     * @tc.name testUint8ClampedArrayLastIndexOfTwo002
     * @tc.desc Verify lastIndexOf last key equals 1 for array [0, 7, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 7, 2, 3});
    assertEqual(1, arr.lastIndexOf(7));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0300
     * @tc.name testUint8ClampedArrayLastIndexOfTwo003
     * @tc.desc Verify lastIndexOf last key equals 2 for array [0, 1, 7, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 7, 3});
    assertEqual(2, arr.lastIndexOf(7));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0400
     * @tc.name testUint8ClampedArrayLastIndexOfTwo004
     * @tc.desc Verify lastIndexOf last key equals 3 for array [5, 5, 5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 5});
    assertEqual(3, arr.lastIndexOf(5));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0500
     * @tc.name testUint8ClampedArrayLastIndexOfTwo005
     * @tc.desc Verify lastIndexOf last key equals 3 for array [8, 1, 2, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {8, 1, 2, 8});
    assertEqual(3, arr.lastIndexOf(8));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0600
     * @tc.name testUint8ClampedArrayLastIndexOfTwo006
     * @tc.desc Verify lastIndexOf returns -1 for not-found element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(250);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0700
     * @tc.name testUint8ClampedArrayLastIndexOfTwo007
     * @tc.desc Verify lastIndexOf yields length lenBefore for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int lenBefore = arr.length();
    arr.lastIndexOf(2);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0800
     * @tc.name testUint8ClampedArrayLastIndexOfTwo008
     * @tc.desc Verify lastIndexOf yields byteLength beforeBL for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int beforeBL = arr.byteLength();
    arr.lastIndexOf(3);
    assertEqual(beforeBL, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_0900
     * @tc.name testUint8ClampedArrayLastIndexOfTwo009
     * @tc.desc Verify lastIndexOf fromIndex length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.lastIndexOf(3, 2);
    assertEqual(4, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1000
     * @tc.name testUint8ClampedArrayLastIndexOfTwo010
     * @tc.desc Verify lastIndexOf r equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r = arr.lastIndexOf(3, 2);
    assertEqual(2, r);
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1100
     * @tc.name testUint8ClampedArrayLastIndexOfTwo011
     * @tc.desc Verify lastIndexOf r equals 0 for array [9, 8, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 8, 7});
    int r = arr.lastIndexOf(9, -2);
    assertEqual(0, r);
    assertEqual(9, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1200
     * @tc.name testUint8ClampedArrayLastIndexOfTwo012
     * @tc.desc Verify lastIndexOf yields length 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.lastIndexOf(3);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1300
     * @tc.name testUint8ClampedArrayLastIndexOfTwo013
     * @tc.desc Verify lastIndexOf byteLength length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.lastIndexOf(2);
    assertEqual(4, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1400
     * @tc.name testUint8ClampedArrayLastIndexOfTwo014
     * @tc.desc Verify lastIndexOf yields byteOffset 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.lastIndexOf(2);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1500
     * @tc.name testUint8ClampedArrayLastIndexOfTwo015
     * @tc.desc Verify lastIndexOf buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo015() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.lastIndexOf(0);
    assertEqual(b.buffer(), a.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1600
     * @tc.name testUint8ClampedArrayLastIndexOfTwo016
     * @tc.desc Verify lastIndexOf buffer.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo016() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.lastIndexOf(0);
    assertEqual(16, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1700
     * @tc.name testUint8ClampedArrayLastIndexOfTwo017
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    sub.lastIndexOf(2);
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual(0, sub.lastIndexOf(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1800
     * @tc.name testUint8ClampedArrayLastIndexOfTwo018
     * @tc.desc Verify subarray last key equals 2 for array [5, 6, 7, 6, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7, 6, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    assertEqual(2, sub.lastIndexOf(6));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_1900
     * @tc.name testUint8ClampedArrayLastIndexOfTwo019
     * @tc.desc Verify subarray last key equals -1 for array [5, 6, 7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7, 8, 9});
    Uint8ClampedArray sub = arr.subarray(0, 3);
    assertEqual(-1, sub.lastIndexOf(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2000
     * @tc.name testUint8ClampedArrayLastIndexOfTwo020
     * @tc.desc Verify lastIndexOf(5) equals indexOf(5) for single-match array [0, 5, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 5, 0, 0});
    assertEqual(arr.indexOf(5), arr.lastIndexOf(5));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2100
     * @tc.name testUint8ClampedArrayLastIndexOfTwo021
     * @tc.desc Verify lastIndexOf(3) returns 4 and indexOf(3) returns 0 for array [3, 1, 3, 1, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 3, 1, 3});
    assertEqual(4, arr.lastIndexOf(3));
    assertEqual(0, arr.indexOf(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2200
     * @tc.name testUint8ClampedArrayLastIndexOfTwo022
     * @tc.desc Verify lastIndexOf(99) equals indexOf(99) for absent value array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(arr.indexOf(99), arr.lastIndexOf(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2300
     * @tc.name testUint8ClampedArrayLastIndexOfTwo023
     * @tc.desc Verify lastIndexOf(42) equals indexOf(42) for singleton array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    assertEqual(arr.indexOf(42), arr.lastIndexOf(42));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2400
     * @tc.name testUint8ClampedArrayLastIndexOfTwo024
     * @tc.desc Verify lastIndexOf Math.floor(r) equals r for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(2);
    assertEqual(r, (int) (r));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2500
     * @tc.name testUint8ClampedArrayLastIndexOfTwo025
     * @tc.desc Verify lastIndexOf -1 Math.floor -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(99);
    assertEqual(-1, (int) (r));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2600
     * @tc.name testUint8ClampedArrayLastIndexOfTwo026
     * @tc.desc Verify lastIndexOf returns index 1 for element 2 in array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(2);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2700
     * @tc.name testUint8ClampedArrayLastIndexOfTwo027
     * @tc.desc Verify subarray r equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo027() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    int r = sub.lastIndexOf(2);
    assertEqual(1, r);
    assertEqual(2, parent.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2800
     * @tc.name testUint8ClampedArrayLastIndexOfTwo028
     * @tc.desc Verify subarray r equals 0 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo028() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    int r = sub.lastIndexOf(1);
    assertEqual(0, r);
    assertEqual(4, parent.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_2900
     * @tc.name testUint8ClampedArrayLastIndexOfTwo029
     * @tc.desc Verify lastIndexOf r equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 4, 4);
    a.set(0, 9);
    b.set(0, 99);
    int r = a.lastIndexOf(9);
    assertEqual(0, r);
    assertEqual(99, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3000
     * @tc.name testUint8ClampedArrayLastIndexOfTwo030
     * @tc.desc Verify lastIndexOf r equals 3 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo030() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 4, 4);
    int r = a.lastIndexOf(0);
    assertEqual(3, r);
    assertEqual(4, b.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3100
     * @tc.name testUint8ClampedArrayLastIndexOfTwo031
     * @tc.desc Verify lastIndexOf last key equals -1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = 99;
    assertEqual(-1, arr.lastIndexOf(v));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3200
     * @tc.name testUint8ClampedArrayLastIndexOfTwo032
     * @tc.desc Verify lastIndexOf r equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = 30;
    int r = arr.lastIndexOf(v);
    assertEqual(2, r);
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3300
     * @tc.name testUint8ClampedArrayLastIndexOfTwo033
     * @tc.desc Verify lastIndexOf r equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    int v = 2;
    int r = arr.lastIndexOf(v);
    assertEqual(1, r);
    assertEqual(bufBefore, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3400
     * @tc.name testUint8ClampedArrayLastIndexOfTwo034
     * @tc.desc Verify lastIndexOf r1 equals r2 for array [5, 5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    int v = 5;
    int r1 = arr.lastIndexOf(v);
    int r2 = arr.lastIndexOf(v);
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3500
     * @tc.name testUint8ClampedArrayLastIndexOfTwo035
     * @tc.desc Verify lastIndexOf last key equals 1023 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(1023, 7);
    assertEqual(1023, arr.lastIndexOf(7));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3600
     * @tc.name testUint8ClampedArrayLastIndexOfTwo036
     * @tc.desc Verify lastIndexOf last key equals -1 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    assertEqual(-1, arr.lastIndexOf(200));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3700
     * @tc.name testUint8ClampedArrayLastIndexOfTwo037
     * @tc.desc Verify lastIndexOf last key equals 255 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.set(255, 88);
    assertEqual(255, arr.lastIndexOf(88));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3800
     * @tc.name testUint8ClampedArrayLastIndexOfTwo038
     * @tc.desc Verify lastIndexOf last key equals 4 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    assertEqual(4, arr.lastIndexOf(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_TWO_3900
     * @tc.name testUint8ClampedArrayLastIndexOfTwo039
     * @tc.desc Verify lastIndexOf last key equals 0 for array [255, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 0});
    assertEqual(0, arr.lastIndexOf(255));
    }
}
