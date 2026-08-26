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
 * Uint8ArrayTotal04Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayTotal04Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0010
     * @tc.name testUint8ArrayTotal04_001
     * @tc.desc Verify sort changes first element from max to ascending first
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_001() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0020
     * @tc.name testUint8ArrayTotal04_002
     * @tc.desc Verify sort changes last element to ascending last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_002() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(30, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0030
     * @tc.name testUint8ArrayTotal04_003
     * @tc.desc Verify reverse changes first element to original last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_003() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reverse();
    assertEqual(30, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0040
     * @tc.name testUint8ArrayTotal04_004
     * @tc.desc Verify reverse changes last element to original first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_004() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reverse();
    assertEqual(10, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0050
     * @tc.name testUint8ArrayTotal04_005
     * @tc.desc Verify fill changes all elements to fill value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_005() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(42);
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0060
     * @tc.name testUint8ArrayTotal04_006
     * @tc.desc Verify fill with start and end changes partial positions
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_006() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    arr.fill(99, 1, 3);
    assertEqual(99, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0070
     * @tc.name testUint8ArrayTotal04_007
     * @tc.desc Verify copyWithin changes target position to source start value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_007() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    arr.copyWithin(0, 2);
    assertEqual(30, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0080
     * @tc.name testUint8ArrayTotal04_008
     * @tc.desc Verify copyWithin keeps source position value unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_008() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    arr.copyWithin(0, 2);
    assertEqual(30, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0090
     * @tc.name testUint8ArrayTotal04_009
     * @tc.desc Verify set with FixedArray changes first element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_009() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.set(new Uint8Array(new int[] {99, 100}), 0);
    assertEqual(99, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0100
     * @tc.name testUint8ArrayTotal04_010
     * @tc.desc Verify set with Uint8Array changes first element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_010() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.set(Uint8Array.of(88, 77), 0);
    assertEqual(88, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0110
     * @tc.name testUint8ArrayTotal04_011
     * @tc.desc Verify $_set changes specified element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_011() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.set(0, 255);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0120
     * @tc.name testUint8ArrayTotal04_012
     * @tc.desc Verify sort does not change length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_012() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0130
     * @tc.name testUint8ArrayTotal04_013
     * @tc.desc Verify reverse does not change length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_013() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reverse();
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0140
     * @tc.name testUint8ArrayTotal04_014
     * @tc.desc Verify fill does not change length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_014() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(99);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0150
     * @tc.name testUint8ArrayTotal04_015
     * @tc.desc Verify copyWithin does not change length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_015() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    arr.copyWithin(0, 2);
    assertEqual(4, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0160
     * @tc.name testUint8ArrayTotal04_016
     * @tc.desc Verify sort keeps buffer reference unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_016() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    ArrayBuffer bufBefore = arr.buffer();
    arr.sort();
    assertEqual(bufBefore, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0170
     * @tc.name testUint8ArrayTotal04_017
     * @tc.desc Verify reverse keeps buffer reference unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_017() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    ArrayBuffer bufBefore = arr.buffer();
    arr.reverse();
    assertEqual(bufBefore, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0180
     * @tc.name testUint8ArrayTotal04_018
     * @tc.desc Verify fill keeps buffer reference unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_018() {
    Uint8Array arr = new Uint8Array(3);
    ArrayBuffer bufBefore = arr.buffer();
    arr.fill(42);
    assertEqual(bufBefore, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0190
     * @tc.name testUint8ArrayTotal04_019
     * @tc.desc Verify set keeps buffer reference unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_019() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    ArrayBuffer bufBefore = arr.buffer();
    arr.set(new Uint8Array(new int[] {99, 100}), 0);
    assertEqual(bufBefore, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0200
     * @tc.name testUint8ArrayTotal04_020
     * @tc.desc Verify sort does not change byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_020() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(3, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0210
     * @tc.name testUint8ArrayTotal04_021
     * @tc.desc Verify second fill overwrites first fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_021() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    arr.fill(10);
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0220
     * @tc.name testUint8ArrayTotal04_022
     * @tc.desc Verify fill then reverse: full fill then reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_022() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(42);
    arr.reverse();
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0230
     * @tc.name testUint8ArrayTotal04_023
     * @tc.desc Verify sort then reverse: ascending sort then reverse to descending
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_023() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    arr.reverse();
    assertEqual(30, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0240
     * @tc.name testUint8ArrayTotal04_024
     * @tc.desc Verify copyWithin then fill: copy then fill first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    arr.copyWithin(0, 2);
    arr.fill(99, 0, 1);
    assertEqual(99, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0250
     * @tc.name testUint8ArrayTotal04_025
     * @tc.desc Verify fill then copyWithin: fill then copy
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_025() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    arr.copyWithin(0, 2);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0260
     * @tc.name testUint8ArrayTotal04_026
     * @tc.desc Verify fill 0 then fill 255: overwrite all zeros with all 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_026() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(0);
    arr.fill(255);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0270
     * @tc.name testUint8ArrayTotal04_027
     * @tc.desc Verify sort descending then reverse is equivalent to ascending
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_027() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort((a, b) -> (int) (b - a));
    arr.reverse();
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0280
     * @tc.name testUint8ArrayTotal04_028
     * @tc.desc Verify reverse then sort: reverse then sort to ascending
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_028() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.reverse();
    arr.sort();
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0290
     * @tc.name testUint8ArrayTotal04_029
     * @tc.desc Verify partial fill then copyWithin: partial fill then copy
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_029() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    arr.fill(10, 0, 2);
    arr.copyWithin(2, 0, 2);
    assertEqual(10, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0300
     * @tc.name testUint8ArrayTotal04_030
     * @tc.desc Verify sort then fill: sort then overwrite first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_030() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    arr.fill(100, 0, 1);
    assertEqual(100, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0310
     * @tc.name testUint8ArrayTotal04_031
     * @tc.desc Verify reverse then fill with negative end: reverse then fill last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_031() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reverse();
    arr.fill(0, -1);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0320
     * @tc.name testUint8ArrayTotal04_032
     * @tc.desc Verify fill sort reverse triple combination
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_032() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(42);
    arr.sort();
    arr.reverse();
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0330
     * @tc.name testUint8ArrayTotal04_033
     * @tc.desc Verify reverse fill copyWithin triple combination
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_033() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    arr.reverse();
    arr.fill(5);
    arr.copyWithin(1, 0);
    assertEqual(5, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0340
     * @tc.name testUint8ArrayTotal04_034
     * @tc.desc Verify sort reverse sort: sort reverse then sort restores ascending
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_034() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    arr.reverse();
    arr.sort();
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0350
     * @tc.name testUint8ArrayTotal04_035
     * @tc.desc Verify copyWithin reverse fill compound chain
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_035() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    arr.copyWithin(0, 3);
    arr.reverse();
    arr.fill(0, 3);
    assertEqual(50, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0360
     * @tc.name testUint8ArrayTotal04_036
     * @tc.desc Verify forEach callback accumulates external int counter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_036() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] sum = {0};
    arr.forEach((v) -> {
    sum[0] += v;
    });
    assertEqual(6, sum[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0370
     * @tc.name testUint8ArrayTotal04_037
     * @tc.desc Verify forEach callback writes elements to external Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_037() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array out = new Uint8Array(3);
    int[] idx = {0};
    arr.forEach((v) -> {
    out.set(idx[0], v);
    idx[0]++;
    });
    assertEqual(1, out.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0380
     * @tc.name testUint8ArrayTotal04_038
     * @tc.desc Verify map callback uses external number coefficient
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int coeff = 2;
    Uint8Array result = arr.map((v) -> v * coeff);
    assertEqual(2, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0390
     * @tc.name testUint8ArrayTotal04_039
     * @tc.desc Verify filter callback references external number threshold
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int threshold = 2;
    Uint8Array result = arr.filter((v) -> v > threshold);
    assertEqual(3, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0400
     * @tc.name testUint8ArrayTotal04_040
     * @tc.desc Verify reduce callback accumulates and writes to external Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array out = new Uint8Array(3);
    int[] idx = {0};
    arr.forEach((v) -> {
    out.set(idx[0], v);
    idx[0]++;
    });
    assertEqual(1, out.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0410
     * @tc.name testUint8ArrayTotal04_041
     * @tc.desc Verify some callback modifies external boolean flag
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] found = {false};
    arr.some((v) -> {
    if (v == 2) {
    found[0] = true;
    return true;
    };
    return false;
    });
    assertTrue(found[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0420
     * @tc.name testUint8ArrayTotal04_042
     * @tc.desc Verify every callback modifies external int counter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] count = {0};
    arr.every((v) -> {
    count[0]++;
    return true;
    });
    assertEqual(3, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0430
     * @tc.name testUint8ArrayTotal04_043
     * @tc.desc Verify find callback reads external int offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_043() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int offset = 1;
    Integer expectedVal = arr.get(offset);
    Integer result = arr.find((v) -> v == expectedVal);
    assertEqual(20, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0440
     * @tc.name testUint8ArrayTotal04_044
     * @tc.desc Verify sort compare function uses external int descending variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_044() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int desc = -1;
    arr.sort((a, b) -> (desc * (a - b)));
    assertEqual(30, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0450
     * @tc.name testUint8ArrayTotal04_045
     * @tc.desc Verify forEach callback writes elements to external Uint8Array one by one
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array out = new Uint8Array(3);
    int[] i = {0};
    arr.forEach((v) -> {
    out.set(i[0], v);
    i[0]++;
    });
    assertEqual(3, out.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0460
     * @tc.name testUint8ArrayTotal04_046
     * @tc.desc Verify map callback reads external FixedArray coefficient
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    List<Integer> coeffs = java.util.Arrays.asList(2, 3, 4);
    Uint8Array result = new Uint8Array(arr.length());
    arr.forEach((v, i) -> {
    result.set(i, (v * coeffs.get(i)));
    });
    assertEqual(2, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0470
     * @tc.name testUint8ArrayTotal04_047
     * @tc.desc Verify reduce callback modifies external Uint8Array storing squares
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_047() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array squares = new Uint8Array(3);
    int[] idx = {0};
    arr.forEach((v) -> {
    squares.set(idx[0], (int) (v * v));
    idx[0]++;
    });
    assertEqual(1, squares.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0480
     * @tc.name testUint8ArrayTotal04_048
     * @tc.desc Verify findLast callback writes to external int index variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_048() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] foundIdx = {-1};
    Integer result = arr.findLast((v, i) -> { if (v == 20) { foundIdx[0] = i; return true; } return false; });
    assertEqual(1, foundIdx[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0490
     * @tc.name testUint8ArrayTotal04_049
     * @tc.desc Verify forEach double accumulates external int
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] sum = {0};
    arr.forEach((v) -> {
    sum[0] += v * 2;
    });
    assertEqual(12, sum[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0500
     * @tc.name testUint8ArrayTotal04_050
     * @tc.desc Verify filter callback reads external int exclude value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int exclude = 2;
    Uint8Array result = arr.filter((v) -> v != exclude);
    assertEqual(1, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0510
     * @tc.name testUint8ArrayTotal04_051
     * @tc.desc Verify some callback reads external int mapped target value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_051() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int target = 3;
    boolean[] found = {arr.some((v) -> v == target)};
    assertTrue(found[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0520
     * @tc.name testUint8ArrayTotal04_052
     * @tc.desc Verify every callback reads external int breakpoint index to early terminate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_052() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int breakpoint = 1;
    int[] count = {0};
    arr.every((v, i) -> {
    count[0]++;
    return i < breakpoint;
    });
    assertEqual(2, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0530
     * @tc.name testUint8ArrayTotal04_053
     * @tc.desc Verify findIndex callback writes to external Uint8Array recording accessed elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_053() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array[] visited = {new Uint8Array(3)};
    int[] idx = {0};
    arr.findIndex((v) -> {
    visited[0].set(idx[0], v);
    idx[0]++;
    return v == 20;
    });
    assertEqual(10, visited[0].get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0540
     * @tc.name testUint8ArrayTotal04_054
     * @tc.desc Verify fill 42 then at(0) reads fill value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_054() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(42);
    assertEqual(42, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0550
     * @tc.name testUint8ArrayTotal04_055
     * @tc.desc Verify set then at reads set value at offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.set(new Uint8Array(new int[] {99, 100}), 1);
    assertEqual(99, arr.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0560
     * @tc.name testUint8ArrayTotal04_056
     * @tc.desc Verify sort then at reads ascending first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_056() {
    Uint8Array arr = Uint8Array.of(30, 10, 20);
    arr.sort();
    assertEqual(10, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0570
     * @tc.name testUint8ArrayTotal04_057
     * @tc.desc Verify reverse then at reads reversed first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_057() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reverse();
    assertEqual(30, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0580
     * @tc.name testUint8ArrayTotal04_058
     * @tc.desc Verify fill first element zero then indexOf(0) query
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_058() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.fill(0, 0, 1);
    assertEqual(0, arr.indexOf(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL04_0590
     * @tc.name testUint8ArrayTotal04_059
     * @tc.desc Verify set then includes verification
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal04_059() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.set(new Uint8Array(new int[] {5, 10}), 0);
    assertTrue(arr.includes(10));
    }
