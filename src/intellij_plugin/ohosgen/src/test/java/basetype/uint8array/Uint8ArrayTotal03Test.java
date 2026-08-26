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
 * Uint8ArrayTotal03Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayTotal03Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0010
     * @tc.name testUint8ArrayTotal001
     * @tc.desc Verify includes returns false when fromIndex equals length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(10, 5);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0020
     * @tc.name testUint8ArrayTotal002
     * @tc.desc Verify includes returns false when fromIndex far exceeds length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(10, 100);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0030
     * @tc.name testUint8ArrayTotal003
     * @tc.desc Verify includes returns true when fromIndex is negative and abs(fromIndex) exceeds length, fromIndex clamped to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal003() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(10, -100);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0040
     * @tc.name testUint8ArrayTotal004
     * @tc.desc Verify includes returns true when fromIndex is negative and element exists in range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal004() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(40, -2);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0050
     * @tc.name testUint8ArrayTotal005
     * @tc.desc Verify includes returns false for non-existent element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(99);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0060
     * @tc.name testUint8ArrayTotal006
     * @tc.desc Verify includes returns true for element at first index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal006() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(10);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0070
     * @tc.name testUint8ArrayTotal007
     * @tc.desc Verify includes returns true for element at last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal007() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(50);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0080
     * @tc.name testUint8ArrayTotal008
     * @tc.desc Verify includes returns true for element at middle
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal008() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(30);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0090
     * @tc.name testUint8ArrayTotal009
     * @tc.desc Verify includes with fromIndex=0 returns true for existing element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(10, 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0100
     * @tc.name testUint8ArrayTotal010
     * @tc.desc Verify includes with fromIndex=4 finds last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.includes(50, 4);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0110
     * @tc.name testUint8ArrayTotal011
     * @tc.desc Verify includes with fromIndex=0 on single element array returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal011() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    boolean result = arr.includes(5, 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0120
     * @tc.name testUint8ArrayTotal012
     * @tc.desc Verify includes with fromIndex=1 on single element array returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal012() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    boolean result = arr.includes(5, 1);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0130
     * @tc.name testUint8ArrayTotal013
     * @tc.desc Verify includes returns true for zero value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal013() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    boolean result = arr.includes(0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0140
     * @tc.name testUint8ArrayTotal014
     * @tc.desc Verify includes returns true for 255 max value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal014() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    boolean result = arr.includes(255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0150
     * @tc.name testUint8ArrayTotal015
     * @tc.desc Verify includes returns true for value 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal015() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    boolean result = arr.includes(128);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0160
     * @tc.name testUint8ArrayTotal016
     * @tc.desc Verify indexOf returns -1 when fromIndex equals length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal016() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(10, 5);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0170
     * @tc.name testUint8ArrayTotal017
     * @tc.desc Verify indexOf returns -1 when fromIndex far exceeds length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal017() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(10, 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0180
     * @tc.name testUint8ArrayTotal018
     * @tc.desc Verify indexOf returns 0 for first element with default fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal018() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(10);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0190
     * @tc.name testUint8ArrayTotal019
     * @tc.desc Verify indexOf returns 4 for last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal019() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(50);
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0200
     * @tc.name testUint8ArrayTotal020
     * @tc.desc Verify indexOf returns 2 for middle element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal020() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(30);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0210
     * @tc.name testUint8ArrayTotal021
     * @tc.desc Verify indexOf returns -1 for non-existent element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal021() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(99);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0220
     * @tc.name testUint8ArrayTotal022
     * @tc.desc Verify indexOf returns first occurrence for duplicate values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal022() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 10, 40, 50});
    int result = arr.indexOf(10);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0230
     * @tc.name testUint8ArrayTotal023
     * @tc.desc Verify indexOf with fromIndex=2 skips earlier duplicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal023() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 10, 40, 50});
    int result = arr.indexOf(10, 2);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0240
     * @tc.name testUint8ArrayTotal024
     * @tc.desc Verify lastIndexOf returns last occurrence for duplicate values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal024() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 10, 40, 50});
    int result = arr.lastIndexOf(10);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0250
     * @tc.name testUint8ArrayTotal025
     * @tc.desc Verify lastIndexOf returns -1 for non-existent element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal025() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.lastIndexOf(99);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0260
     * @tc.name testUint8ArrayTotal026
     * @tc.desc Verify lastIndexOf returns 4 for last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal026() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.lastIndexOf(50);
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0270
     * @tc.name testUint8ArrayTotal027
     * @tc.desc Verify lastIndexOf with fromIndex=0 returns first element if matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal027() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.lastIndexOf(10, 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0280
     * @tc.name testUint8ArrayTotal028
     * @tc.desc Verify lastIndexOf with negative fromIndex searches from offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal028() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.lastIndexOf(50, -1);
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0290
     * @tc.name testUint8ArrayTotal029
     * @tc.desc Verify indexOf returns 0 when fromIndex is negative and abs(fromIndex) exceeds length, fromIndex clamped to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal029() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(10, -100);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0300
     * @tc.name testUint8ArrayTotal030
     * @tc.desc Verify indexOf with fromIndex=-2 finds element in last two positions
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal030() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(40, -2);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0310
     * @tc.name testUint8ArrayTotal031
     * @tc.desc Verify lastIndexOf with fromIndex=-3 searches only first 3 positions from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal031() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.lastIndexOf(50, -3);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0320
     * @tc.name testUint8ArrayTotal032
     * @tc.desc Verify indexOf works with 0 value on array containing zero
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal032() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int result = arr.indexOf(0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0330
     * @tc.name testUint8ArrayTotal033
     * @tc.desc Verify indexOf works with 255 max value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal033() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    int result = arr.indexOf(255);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0340
     * @tc.name testUint8ArrayTotal034
     * @tc.desc Verify lastIndexOf works for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal034() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int result = arr.lastIndexOf(42);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0350
     * @tc.name testUint8ArrayTotal035
     * @tc.desc Verify indexOf on empty array returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal035() {
    Uint8Array arr = new Uint8Array();
    int result = arr.indexOf(10);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0360
     * @tc.name testUint8ArrayTotal036
     * @tc.desc Verify includes on empty array returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal036() {
    Uint8Array arr = new Uint8Array();
    boolean result = arr.includes(10);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0370
     * @tc.name testUint8ArrayTotal037
     * @tc.desc Verify lastIndexOf on empty array returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal037() {
    Uint8Array arr = new Uint8Array();
    int result = arr.lastIndexOf(10);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0380
     * @tc.name testUint8ArrayTotal038
     * @tc.desc Verify indexOf with fromIndex=-0 treated as 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal038() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.indexOf(10, -0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0390
     * @tc.name testUint8ArrayTotal039
     * @tc.desc Verify findIndex returns index of matching element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findIndex((val) -> val > 25);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0400
     * @tc.name testUint8ArrayTotal040
     * @tc.desc Verify findIndex returns -1 when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal040() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((val) -> val > 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0410
     * @tc.name testUint8ArrayTotal041
     * @tc.desc Verify find returns matching element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal041() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.find((val) -> val > 25);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0420
     * @tc.name testUint8ArrayTotal042
     * @tc.desc Verify find returns undefined when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal042() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Integer result = arr.find((val) -> val > 100);
    assertNull(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0430
     * @tc.name testUint8ArrayTotal043
     * @tc.desc Verify some returns true when at least one element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    boolean result = arr.some((val) -> val > 25);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0440
     * @tc.name testUint8ArrayTotal044
     * @tc.desc Verify some returns false when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal044() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean result = arr.some((val) -> val > 100);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0450
     * @tc.name testUint8ArrayTotal045
     * @tc.desc Verify every returns true when all elements match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean result = arr.every((val) -> val > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0460
     * @tc.name testUint8ArrayTotal046
     * @tc.desc Verify every returns false when at least one element fails
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal046() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean result = arr.every((val) -> val > 15);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0470
     * @tc.name testUint8ArrayTotal047
     * @tc.desc Verify Uint8Array.from([256]) overflow source truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal047() {
    Uint8Array arr = Uint8Array.from(new int[] {256});
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0480
     * @tc.name testUint8ArrayTotal048
     * @tc.desc Verify Uint8Array.from([-1]) negative source wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal048() {
    Uint8Array arr = Uint8Array.from(new int[] {-1});
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0490
     * @tc.name testUint8ArrayTotal049
     * @tc.desc Verify Uint8Array.from([3.14]) float truncates to 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal049() {
    Uint8Array arr = Uint8Array.from(new double[] {3.14});
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0500
     * @tc.name testUint8ArrayTotal050
     * @tc.desc Verify Uint8Array.from([-3.14]) negative float truncates and wraps
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal050() {
    Uint8Array arr = Uint8Array.from(new double[] {-3.14});
    assertEqual(253, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0510
     * @tc.name testUint8ArrayTotal051
     * @tc.desc Verify Uint8Array.from([NaN]) source NaN truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal051() {
    Uint8Array arr = Uint8Array.from(new double[] {Double.NaN});
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0520
     * @tc.name testUint8ArrayTotal052
     * @tc.desc Verify Uint8Array.from([-Infinity]) source negative infinity truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal052() {
    Uint8Array arr = Uint8Array.from(new double[] {Double.NEGATIVE_INFINITY});
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0530
     * @tc.name testUint8ArrayTotal053
     * @tc.desc Verify Uint8Array.from([Infinity]) source positive infinity truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal053() {
    Uint8Array arr = Uint8Array.from(new double[] {Double.POSITIVE_INFINITY});
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0540
     * @tc.name testUint8ArrayTotal054
     * @tc.desc Verify constructor with negative int length -1 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal054() {
    try {
    Uint8Array arr = new Uint8Array(-1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0550
     * @tc.name testUint8ArrayTotal055
     * @tc.desc Verify constructor with large negative int length -100 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal055() {
    try {
    Uint8Array arr = new Uint8Array(-100);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0560
     * @tc.name testUint8ArrayTotal056
     * @tc.desc Verify constructor with negative number length -1.0 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal056() {
    try {
    Uint8Array arr = new Uint8Array(-1.0);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0570
     * @tc.name testUint8ArrayTotal057
     * @tc.desc Verify constructor with ArrayBuffer offset exceeding buffer length throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8Array arr = new Uint8Array(buf, 9);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0580
     * @tc.name testUint8ArrayTotal058
     * @tc.desc Verify constructor with ArrayBuffer length exceeding buffer throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal058() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8Array arr = new Uint8Array(buf, 0, 9);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0590
     * @tc.name testUint8ArrayTotal059
     * @tc.desc Verify constructor with ArrayBuffer offset+length exceeding buffer throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal059() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8Array arr = new Uint8Array(buf, 8, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0600
     * @tc.name testUint8ArrayTotal060
     * @tc.desc Verify constructor with negative ArrayBuffer offset throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal060() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8Array arr = new Uint8Array(buf, -1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0610
     * @tc.name testUint8ArrayTotal061
     * @tc.desc Verify $_get with negative index -1 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal061() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(-1);
    assertNull(result);
    } catch (RuntimeException e) {
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0620
     * @tc.name testUint8ArrayTotal062
     * @tc.desc Verify $_get with negative index -5 equals -length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal062() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(-5);
    assertNull(result);
    } catch (RuntimeException e) {
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0630
     * @tc.name testUint8ArrayTotal063
     * @tc.desc Verify $_get with negative index -6 equals -length-1 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal063() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(-6);
    assertNull(result);
    } catch (RuntimeException e) {
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0640
     * @tc.name testUint8ArrayTotal064
     * @tc.desc Verify $_get with index 5 equals length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
