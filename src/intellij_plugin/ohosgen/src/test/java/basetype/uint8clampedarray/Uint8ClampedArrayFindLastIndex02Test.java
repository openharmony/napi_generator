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
 * Uint8ClampedArrayFindLastIndex02Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayFindLastIndex02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0100
     * @tc.name testUint8ClampedArrayFindLastIndexTwo001
     * @tc.desc Verify findLastIndex idx1 equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo001() {
    Uint8ClampedArray arr1 = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx1 = arr1.findLastIndex((v, i, a) -> v == 2);
    int idx2 = arr2.findLastIndex((v, i, a) -> v == 30);
    assertEqual(1, idx1);
    assertEqual(2, idx2);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0200
     * @tc.name testUint8ClampedArrayFindLastIndexTwo002
     * @tc.desc Verify findLastIndex returns index 2 when value 3 follows value 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int idx = arr.findLastIndex((v, i, a) -> { if (i > 0) { return a.get(i - 1) == 2 && v == 3; } return false; });
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0300
     * @tc.name testUint8ClampedArrayFindLastIndexTwo003
     * @tc.desc Verify predicate v >= 100 && v <= 200
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 150, 75, 175, 25});
    int idx = arr.findLastIndex((v, i, a) -> v >= 100 && v <= 200);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0400
     * @tc.name testUint8ClampedArrayFindLastIndexTwo004
     * @tc.desc Verify findLastIndex idx equals 3 for array [10, 100, 250, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 100, 250, 20});
    int idx = arr.findLastIndex((v, i, a) -> v < 50 || v > 200);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0500
     * @tc.name testUint8ClampedArrayFindLastIndexTwo005
     * @tc.desc Verify findLastIndex idx equals 4 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.findLastIndex((v, i, a) -> i % 2 == 0);
    assertEqual(4, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0600
     * @tc.name testUint8ClampedArrayFindLastIndexTwo006
     * @tc.desc Verify findLastIndex idx equals 3 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.findLastIndex((v, i, a) -> i % 2 == 1);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0700
     * @tc.name testUint8ClampedArrayFindLastIndexTwo007
     * @tc.desc Verify findLastIndex idx equals 4 for array [0, 1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3, 4});
    int idx = arr.findLastIndex((v, i, a) -> v == a.length() - 1);
    assertEqual(4, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0800
     * @tc.name testUint8ClampedArrayFindLastIndexTwo008
     * @tc.desc Verify findLastIndex idx equals -1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, 256);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 256);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_0900
     * @tc.name testUint8ClampedArrayFindLastIndexTwo009
     * @tc.desc Verify findLastIndex idx equals -1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, -1);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == -1);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1000
     * @tc.name testUint8ClampedArrayFindLastIndexTwo010
     * @tc.desc Verify findLastIndex idx equals -1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, Double.NaN);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> BasTest.isNaN(v));
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1100
     * @tc.name testUint8ClampedArrayFindLastIndexTwo011
     * @tc.desc Verify findLastIndex idx equals -1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, Double.POSITIVE_INFINITY);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == Double.POSITIVE_INFINITY);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1200
     * @tc.name testUint8ClampedArrayFindLastIndexTwo012
     * @tc.desc Verify findLastIndex idx equals 4 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    arr.set(0, -1);
    arr.set(1, Double.NaN);
    arr.set(2, -Double.POSITIVE_INFINITY);
    arr.set(3, 50);
    arr.set(4, -100);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(4, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1300
     * @tc.name testUint8ClampedArrayFindLastIndexTwo013
     * @tc.desc Verify findLastIndex idx equals 3 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    arr.set(0, 256);
    arr.set(1, 1000);
    arr.set(2, 50);
    arr.set(3, Double.POSITIVE_INFINITY);
    arr.set(4, 100);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1400
     * @tc.name testUint8ClampedArrayFindLastIndexTwo014
     * @tc.desc Verify subarray idx equals 1 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo014() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int idx = sub.findLastIndex((v, i, a) -> v == 30);
    assertEqual(1, idx);
    assertEqual(10, parent.get(0));
    assertEqual(20, parent.get(1));
    assertEqual(30, parent.get(2));
    assertEqual(40, parent.get(3));
    assertEqual(50, parent.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1500
     * @tc.name testUint8ClampedArrayFindLastIndexTwo015
     * @tc.desc Verify subarray predicate a length subarray.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo015() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int[] seenLen = {-1};
    sub.findLastIndex((v, i, a) -> {
    seenLen[0] = a.length();
    return false;
    });
    assertEqual(3, seenLen[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1600
     * @tc.name testUint8ClampedArrayFindLastIndexTwo016
     * @tc.desc Verify slice idx equals 1 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo016() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray slice = parent.slice(1, 4);
    parent.set(2, 99);
    int idx = slice.findLastIndex((v, i, a) -> v == 30);
    assertEqual(1, idx);
    assertEqual(30, slice.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1700
     * @tc.name testUint8ClampedArrayFindLastIndexTwo017
     * @tc.desc Verify findLastIndex idx equals 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo017() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray a1 = new Uint8ClampedArray(buf);
    Uint8ClampedArray a2 = new Uint8ClampedArray(buf);
    a1.set(0, 10);
    a1.set(2, 20);
    a1.set(4, 10);
    int idx = a2.findLastIndex((v, i, a) -> v == 10);
    assertEqual(4, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1800
     * @tc.name testUint8ClampedArrayFindLastIndexTwo018
     * @tc.desc Verify subarray idx equals 3 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo018() {
    Uint8ClampedArray parent = new Uint8ClampedArray(5);
    parent.set(0, 100);
    parent.set(3, 256);
    Uint8ClampedArray sub = parent.subarray(0, 5);
    int idx = sub.findLastIndex((v, i, a) -> v == 255);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_1900
     * @tc.name testUint8ClampedArrayFindLastIndexTwo019
     * @tc.desc Verify findIndex predicate findLastIndex >= findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 5, 3, 5, 7});
    int first = arr.findIndex((v, i, a) -> v == 5);
    int last = arr.findLastIndex((v, i, a) -> v == 5);
    assertTrue(last >= first);
    assertEqual(1, first);
    assertEqual(3, last);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_2000
     * @tc.name testUint8ClampedArrayFindLastIndexTwo020
     * @tc.desc Verify lastIndexOf li equals fli for array [1, 7, 3, 7, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 7, 3, 7, 5});
    int li = arr.lastIndexOf(7);
    int fli = arr.findLastIndex((v, i, a) -> v == 7);
    assertEqual(fli, li);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_2100
     * @tc.name testUint8ClampedArrayFindLastIndexTwo021
     * @tc.desc Verify findLastIndex idx equals -1 for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    int idx = arr.findLastIndex((v, i, a) -> v != 0);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_2200
     * @tc.name testUint8ClampedArrayFindLastIndexTwo022
     * @tc.desc Verify findLastIndex idx equals 9 for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    arr.set(9, 1);
    int idx = arr.findLastIndex((v, i, a) -> v != 0);
    assertEqual(9, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_2300
     * @tc.name testUint8ClampedArrayFindLastIndexTwo023
     * @tc.desc Verify findLastIndex idx equals 2 for array [99, 50, 99, 60]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo023() {
    int target = 99;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 50, 99, 60});
    int idx = arr.findLastIndex((v, i, a) -> v == target);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_2400
     * @tc.name testUint8ClampedArrayFindLastIndexTwo024
     * @tc.desc Verify subarray idx equals 1 for array [1, 2, 3, 4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    int idx = arr.subarray(2, 5).findLastIndex((v, i, a) -> v == 4);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_TWO_2500
     * @tc.name testUint8ClampedArrayFindLastIndexTwo025
     * @tc.desc Verify slice idx equals 1 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.slice(1, 4).findLastIndex((v, i, a) -> v == 30);
    assertEqual(1, idx);
    }
}
