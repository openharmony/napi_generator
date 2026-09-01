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
 * Uint8ArrayTotal03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayTotal03Test extends BasTest {
    /**
     * Verify includes returns false when fromIndex equals length
     *
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
     * Verify includes returns false when fromIndex far exceeds length
     *
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
     * Verify includes returns true when fromIndex is negative and abs(fromIndex) exce
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0030
     * @tc.name testUint8ArrayTotal003
     * @tc.desc Verify includes returns true when fromIndex is negative and abs(fromIndex) exce
     * eds length, fromIndex clamped to 0
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
     * Verify includes returns true when fromIndex is negative and element exists in range
     *
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
     * Verify includes returns false for non-existent element
     *
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
     * Verify includes returns true for element at first index
     *
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
     * Verify includes returns true for element at last index
     *
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
     * Verify includes returns true for element at middle
     *
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
     * Verify includes with fromIndex=0 returns true for existing element
     *
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
     * Verify includes with fromIndex=4 finds last element
     *
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
     * Verify includes with fromIndex=0 on single element array returns true
     *
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
     * Verify includes with fromIndex=1 on single element array returns false
     *
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
     * Verify includes returns true for zero value
     *
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
     * Verify includes returns true for 255 max value
     *
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
     * Verify includes returns true for value 128
     *
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
     * Verify indexOf returns -1 when fromIndex equals length
     *
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
     * Verify indexOf returns -1 when fromIndex far exceeds length
     *
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
     * Verify indexOf returns 0 for first element with default fromIndex
     *
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
     * Verify indexOf returns 4 for last element
     *
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
     * Verify indexOf returns 2 for middle element
     *
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
     * Verify indexOf returns -1 for non-existent element
     *
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
     * Verify indexOf returns first occurrence for duplicate values
     *
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
     * Verify indexOf with fromIndex=2 skips earlier duplicate
     *
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
     * Verify lastIndexOf returns last occurrence for duplicate values
     *
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
     * Verify lastIndexOf returns -1 for non-existent element
     *
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
     * Verify lastIndexOf returns 4 for last element
     *
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
     * Verify lastIndexOf with fromIndex=0 returns first element if matches
     *
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
     * Verify lastIndexOf with negative fromIndex searches from offset
     *
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
     * Verify indexOf returns 0 when fromIndex is negative and abs(fromIndex) exceeds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0290
     * @tc.name testUint8ArrayTotal029
     * @tc.desc Verify indexOf returns 0 when fromIndex is negative and abs(fromIndex) exceeds
     * length, fromIndex clamped to 0
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
     * Verify indexOf with fromIndex=-2 finds element in last two positions
     *
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
     * Verify lastIndexOf with fromIndex=-3 searches only first 3 positions from end
     *
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
     * Verify indexOf works with 0 value on array containing zero
     *
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
     * Verify indexOf works with 255 max value
     *
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
     * Verify lastIndexOf works for single element array
     *
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
     * Verify indexOf on empty array returns -1
     *
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
     * Verify includes on empty array returns false
     *
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
     * Verify lastIndexOf on empty array returns -1
     *
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
     * Verify indexOf with fromIndex=-0 treated as 0
     *
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
     * Verify findIndex returns index of matching element
     *
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
     * Verify findIndex returns -1 when no element matches
     *
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
     * Verify find returns matching element value
     *
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
    assertEqualInt(30, result);
    }

    /**
     * Verify find returns undefined when no element matches
     *
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
     * Verify some returns true when at least one element matches
     *
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
     * Verify some returns false when no element matches
     *
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
     * Verify every returns true when all elements match
     *
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
     * Verify every returns false when at least one element fails
     *
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
     * Verify Uint8Array.from([256]) overflow source truncates to 0
     *
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
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Uint8Array.from([-1]) negative source wraps to 255
     *
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
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify Uint8Array.from([3.14]) float truncates to 3
     *
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
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify Uint8Array.from([-3.14]) negative float truncates and wraps
     *
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
    assertEqualInt(253, arr.get(0));
    }

    /**
     * Verify Uint8Array.from([NaN]) source NaN truncates to 0
     *
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
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Uint8Array.from([-Infinity]) source negative infinity truncates to 0
     *
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
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify Uint8Array.from([Infinity]) source positive infinity truncates to 0
     *
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
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify constructor with negative int length -1 throws RangeError
     *
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
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor with large negative int length -100 throws RangeError
     *
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
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor with negative number length -1.0 throws RangeError
     *
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
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor with ArrayBuffer offset exceeding buffer length throws RangeError
     *
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
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor with ArrayBuffer length exceeding buffer throws RangeError
     *
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
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor with ArrayBuffer offset+length exceeding buffer throws RangeError
     *
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
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor with negative ArrayBuffer offset throws RangeError
     *
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
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with negative index -1 returns undefined
     *
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
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with negative index -5 equals -length returns undefined
     *
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
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with negative index -6 equals -length-1 returns undefined
     *
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
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with index 5 equals length returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0640
     * @tc.name testUint8ArrayTotal064
     * @tc.desc Verify $_get with index 5 equals length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal064() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(5);
    assertNull(result);
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with index 6 equals length+1 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0650
     * @tc.name testUint8ArrayTotal065
     * @tc.desc Verify $_get with index 6 equals length+1 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal065() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(6);
    assertNull(result);
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with large positive index 100000 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0660
     * @tc.name testUint8ArrayTotal066
     * @tc.desc Verify $_get with large positive index 100000 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal066() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(100000);
    assertNull(result);
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_get with large negative index -100000 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0670
     * @tc.name testUint8ArrayTotal067
     * @tc.desc Verify $_get with large negative index -100000 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal067() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    int result = arr.get(-100000);
    assertNull(result);
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with negative index -1 does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0680
     * @tc.name testUint8ArrayTotal068
     * @tc.desc Verify $_set with negative index -1 does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal068() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(-1, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with negative index -5 equals -length does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0690
     * @tc.name testUint8ArrayTotal069
     * @tc.desc Verify $_set with negative index -5 equals -length does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal069() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(-5, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with negative index -6 equals -length-1 does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0700
     * @tc.name testUint8ArrayTotal070
     * @tc.desc Verify $_set with negative index -6 equals -length-1 does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal070() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(-6, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with index 5 equals length does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0710
     * @tc.name testUint8ArrayTotal071
     * @tc.desc Verify $_set with index 5 equals length does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal071() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(5, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with index 6 equals length+1 does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0720
     * @tc.name testUint8ArrayTotal072
     * @tc.desc Verify $_set with index 6 equals length+1 does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal072() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(6, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with large positive index 100000 does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0730
     * @tc.name testUint8ArrayTotal073
     * @tc.desc Verify $_set with large positive index 100000 does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal073() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(100000, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with large negative index -100000 does not modify array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0740
     * @tc.name testUint8ArrayTotal074
     * @tc.desc Verify $_set with large negative index -100000 does not modify array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal074() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(-100000, 99);
    assertEqualInt(10, arr.get(0));
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify $_set with value 256 overflows and truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0750
     * @tc.name testUint8ArrayTotal075
     * @tc.desc Verify $_set with value 256 overflows and truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal075() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 256);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set with value -1 wraps around to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0760
     * @tc.name testUint8ArrayTotal076
     * @tc.desc Verify $_set with value -1 wraps around to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal076() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -1);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify $_set with value 512 multiple overflow wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0770
     * @tc.name testUint8ArrayTotal077
     * @tc.desc Verify $_set with value 512 multiple overflow wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal077() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 512);
    assertEqualInt(0, arr.get(0));
    }

    /**
     * Verify $_set with value -257 negative multiple wraps to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0780
     * @tc.name testUint8ArrayTotal078
     * @tc.desc Verify $_set with value -257 negative multiple wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal078() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -257);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify $_set with float value 3.14 truncates to 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0790
     * @tc.name testUint8ArrayTotal079
     * @tc.desc Verify $_set with float value 3.14 truncates to 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal079() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 3.14);
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify $_set with float value 255.9 truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0800
     * @tc.name testUint8ArrayTotal080
     * @tc.desc Verify $_set with float value 255.9 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal080() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 255.9);
    assertEqualInt(255, arr.get(0));
    }

    /**
     * Verify $_set with negative float -3.14 truncates and wraps to 253
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0810
     * @tc.name testUint8ArrayTotal081
     * @tc.desc Verify $_set with negative float -3.14 truncates and wraps to 253
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal081() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -3.14);
    assertEqualInt(253, arr.get(0));
    }

    /**
     * Verify at with index 5 equals length returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0820
     * @tc.name testUint8ArrayTotal082
     * @tc.desc Verify at with index 5 equals length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal082() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.at(5);
    assertNull(result);
    }

    /**
     * Verify at with index 6 equals length+1 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0830
     * @tc.name testUint8ArrayTotal083
     * @tc.desc Verify at with index 6 equals length+1 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal083() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.at(6);
    assertNull(result);
    }

    /**
     * Verify at with index -6 equals -length-1 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0840
     * @tc.name testUint8ArrayTotal084
     * @tc.desc Verify at with index -6 equals -length-1 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal084() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.at(-6);
    assertNull(result);
    }

    /**
     * Verify at with large positive index 100000 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0850
     * @tc.name testUint8ArrayTotal085
     * @tc.desc Verify at with large positive index 100000 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal085() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.at(100000);
    assertNull(result);
    }

    /**
     * Verify at with large negative index -100000 returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0860
     * @tc.name testUint8ArrayTotal086
     * @tc.desc Verify at with large negative index -100000 returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal086() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.at(-100000);
    assertNull(result);
    }

    /**
     * Verify with with index -6 equals -length-1 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0870
     * @tc.name testUint8ArrayTotal087
     * @tc.desc Verify with with index -6 equals -length-1 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal087() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(-6, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with with index 5 equals length throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0880
     * @tc.name testUint8ArrayTotal088
     * @tc.desc Verify with with index 5 equals length throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal088() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with with index 6 equals length+1 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0890
     * @tc.name testUint8ArrayTotal089
     * @tc.desc Verify with with index 6 equals length+1 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal089() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(6, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with with large positive index 100000 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0900
     * @tc.name testUint8ArrayTotal090
     * @tc.desc Verify with with large positive index 100000 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal090() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(100000, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with with large negative index -100000 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0910
     * @tc.name testUint8ArrayTotal091
     * @tc.desc Verify with with large negative index -100000 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal091() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(-100000, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with negative offset -1 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0920
     * @tc.name testUint8ArrayTotal092
     * @tc.desc Verify set with negative offset -1 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal092() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {99}), -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with offset+source length exceeding this throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0930
     * @tc.name testUint8ArrayTotal093
     * @tc.desc Verify set with offset+source length exceeding this throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal093() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {99, 100}), 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with offset equal to length throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0940
     * @tc.name testUint8ArrayTotal094
     * @tc.desc Verify set with offset equal to length throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal094() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {99, 100}), 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with large positive offset 100000 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0950
     * @tc.name testUint8ArrayTotal095
     * @tc.desc Verify set with large positive offset 100000 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal095() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {99}), 100000);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with large negative offset -100000 throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0960
     * @tc.name testUint8ArrayTotal096
     * @tc.desc Verify set with large negative offset -100000 throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal096() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {99}), -100000);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with source array exceeding total target length throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0970
     * @tc.name testUint8ArrayTotal097
     * @tc.desc Verify set with source array exceeding total target length throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal097() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {1, 2, 3, 4, 5, 6}), 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set with Uint8Array source and offset exceeding throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0980
     * @tc.name testUint8ArrayTotal098
     * @tc.desc Verify set with Uint8Array source and offset exceeding throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal098() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.set(new Uint8Array(new int[] {1, 2, 3}), 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify copyWithin with negative target copies from 2nd last position
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_0990
     * @tc.name testUint8ArrayTotal099
     * @tc.desc Verify copyWithin with negative target copies from 2nd last position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal099() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(-2, 0);
    assertEqual("10,20,30,10,20", arr.join(","));
    }

    /**
     * Verify copyWithin with negative start copies from 2nd last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1000
     * @tc.name testUint8ArrayTotal100
     * @tc.desc Verify copyWithin with negative start copies from 2nd last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal100() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, -2);
    assertEqual("40,50,30,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with negative end excludes the last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1010
     * @tc.name testUint8ArrayTotal101
     * @tc.desc Verify copyWithin with negative end excludes the last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal101() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 1, -1);
    assertEqual("20,30,40,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with start far beyond length leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1020
     * @tc.name testUint8ArrayTotal102
     * @tc.desc Verify copyWithin with start far beyond length leaves array unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal102() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 100);
    assertEqual("10,20,30,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with start greater than end leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1030
     * @tc.name testUint8ArrayTotal103
     * @tc.desc Verify copyWithin with start greater than end leaves array unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal103() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 3, 1);
    assertEqual("10,20,30,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with large negative start clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1040
     * @tc.name testUint8ArrayTotal104
     * @tc.desc Verify copyWithin with large negative start clamps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal104() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, -100, 2);
    assertEqual("10,20,30,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with negative target beyond start clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1050
     * @tc.name testUint8ArrayTotal105
     * @tc.desc Verify copyWithin with negative target beyond start clamps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal105() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(-100, 2, 4);
    assertEqual("30,40,30,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with positive indices copies middle segment to front
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1060
     * @tc.name testUint8ArrayTotal106
     * @tc.desc Verify copyWithin with positive indices copies middle segment to front
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal106() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(0, 2, 4);
    assertEqual("30,40,30,40,50", arr.join(","));
    }

    /**
     * Verify copyWithin with overlapping ranges copies correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1070
     * @tc.name testUint8ArrayTotal107
     * @tc.desc Verify copyWithin with overlapping ranges copies correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal107() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(1, 0, 3);
    assertEqual("1,1,2,3,5", arr.join(","));
    }

    /**
     * Verify fill with negative end clamps to 0, no fill
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1080
     * @tc.name testUint8ArrayTotal108
     * @tc.desc Verify fill with negative end clamps to 0, no fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal108() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 0, -100);
    assertEqual("10,20,30,40,50", arr.join(","));
    }

    /**
     * Verify fill with negative start replaces from that offset to end
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1090
     * @tc.name testUint8ArrayTotal109
     * @tc.desc Verify fill with negative start replaces from that offset to end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal109() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(88, -2);
    assertEqual("10,20,30,88,88", arr.join(","));
    }

    /**
     * Verify fill with start greater than end leaves array unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1100
     * @tc.name testUint8ArrayTotal110
     * @tc.desc Verify fill with start greater than end leaves array unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal110() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(77, 4, 2);
    assertEqual("10,20,30,40,50", arr.join(","));
    }

    /**
     * Verify fill with large overflow end clamps to length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1110
     * @tc.name testUint8ArrayTotal111
     * @tc.desc Verify fill with large overflow end clamps to length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal111() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(66, 0, 100);
    assertEqual("66,66,66,66,66", arr.join(","));
    }

    /**
     * Verify fill with large negative start clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1120
     * @tc.name testUint8ArrayTotal112
     * @tc.desc Verify fill with large negative start clamps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal112() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(55, -100, 2);
    assertEqual("55,55,30,40,50", arr.join(","));
    }

    /**
     * Verify fill on empty array with default indices does nothing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1130
     * @tc.name testUint8ArrayTotal113
     * @tc.desc Verify fill on empty array with default indices does nothing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal113() {
    Uint8Array arr = new Uint8Array();
    arr.fill(99);
    assertEqual(0, arr.length());
    }

    /**
     * Verify ArrayBuffer offset mismatch with subarray byteOffset - offset must be multiple of element size
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1140
     * @tc.name testUint8ArrayTotal114
     * @tc.desc Verify ArrayBuffer offset mismatch with subarray byteOffset - offset must be multiple of element size
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal114() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(1, 4);
    assertEqual(1, result.byteOffset());
    }

    /**
     * Verify subarray with negative begin takes last elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1150
     * @tc.name testUint8ArrayTotal115
     * @tc.desc Verify subarray with negative begin takes last elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal115() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(-2);
    assertEqual("40,50", result.join(","));
    }

    /**
     * Verify subarray with negative begin and end selects elements between
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1160
     * @tc.name testUint8ArrayTotal116
     * @tc.desc Verify subarray with negative begin and end selects elements between
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal116() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(-4, -1);
    assertEqual("20,30,40", result.join(","));
    }

    /**
     * Verify subarray with begin greater than end returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1170
     * @tc.name testUint8ArrayTotal117
     * @tc.desc Verify subarray with begin greater than end returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal117() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(4, 1);
    assertEqual(0, result.length());
    }

    /**
     * Verify subarray with begin and end equal returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1180
     * @tc.name testUint8ArrayTotal118
     * @tc.desc Verify subarray with begin and end equal returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal118() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(2, 2);
    assertEqual(0, result.length());
    }

    /**
     * Verify subarray with begin=0 end=length returns full copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1190
     * @tc.name testUint8ArrayTotal119
     * @tc.desc Verify subarray with begin=0 end=length returns full copy
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal119() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(0, 5);
    assertEqual("10,20,30,40,50", result.join(","));
    }

    /**
     * Verify subarray with begin=0 includes first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1200
     * @tc.name testUint8ArrayTotal120
     * @tc.desc Verify subarray with begin=0 includes first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal120() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(0, 1);
    assertEqualInt(10, result.get(0));
    }

    /**
     * Verify subarray with begin=length-1 takes last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1210
     * @tc.name testUint8ArrayTotal121
     * @tc.desc Verify subarray with begin=length-1 takes last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal121() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(4);
    assertEqualInt(50, result.get(0));
    }

    /**
     * Verify subarray with begin=length returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1220
     * @tc.name testUint8ArrayTotal122
     * @tc.desc Verify subarray with begin=length returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal122() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(5);
    assertEqual(0, result.length());
    }

    /**
     * Verify subarray with begin far beyond length returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1230
     * @tc.name testUint8ArrayTotal123
     * @tc.desc Verify subarray with begin far beyond length returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal123() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(100);
    assertEqual(0, result.length());
    }

    /**
     * Verify subarray with begin=0 end far beyond length truncates to all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1240
     * @tc.name testUint8ArrayTotal124
     * @tc.desc Verify subarray with begin=0 end far beyond length truncates to all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal124() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(0, 100);
    assertEqual("10,20,30,40,50", result.join(","));
    }

    /**
     * Verify subarray with large negative begin clamps to 0 and takes all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1250
     * @tc.name testUint8ArrayTotal125
     * @tc.desc Verify subarray with large negative begin clamps to 0 and takes all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal125() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(-100);
    assertEqual("10,20,30,40,50", result.join(","));
    }

    /**
     * Verify subarray with large negative begin clamps to 0 and takes first 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TOTAL03_1260
     * @tc.name testUint8ArrayTotal126
     * @tc.desc Verify subarray with large negative begin clamps to 0 and takes first 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayTotal126() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.subarray(-100, 2);
    assertEqual("10,20", result.join(","));
    }
}
