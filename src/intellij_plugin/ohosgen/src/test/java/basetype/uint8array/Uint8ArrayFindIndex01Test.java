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
 * Uint8ArrayFindIndex01Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayFindIndex01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0100
     * @tc.name testUint8ArrayFindIndex001
     * @tc.desc Verify findIndex with 1 parameter and normal call returns expected value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v) -> v == 20);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0200
     * @tc.name testUint8ArrayFindIndex002
     * @tc.desc Verify findIndex with arrow function callback finds first element by value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex002() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v) -> v == 5);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0300
     * @tc.name testUint8ArrayFindIndex003
     * @tc.desc Verify findIndex with arrow function callback finds middle element by value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex003() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v) -> v == 10);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0400
     * @tc.name testUint8ArrayFindIndex004
     * @tc.desc Verify findIndex with arrow function callback finds last element by value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex004() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v) -> v == 15);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0500
     * @tc.name testUint8ArrayFindIndex005
     * @tc.desc Verify findIndex with arrow function callback returns -1 when condition never satisfied
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex005() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v) -> v > 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0600
     * @tc.name testUint8ArrayFindIndex006
     * @tc.desc Verify findIndex with arrow function callback returns 0 when all conditions satisfied
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex006() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v) -> v >= 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0700
     * @tc.name testUint8ArrayFindIndex007
     * @tc.desc Verify findIndex with top-level function reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex007() {
    Uint8Array.Uint8ArrayFinder1 isEven = (v) -> {
    return v % 2 == 0;
    };
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex(isEven);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0800
     * @tc.name testUint8ArrayFindIndex008
     * @tc.desc Verify callback only uses value parameter ignoring index and array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex008() {
    Uint8Array arr = new Uint8Array(new int[] {7, 8, 9});
    int result = arr.findIndex((v) -> v > 7);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_0900
     * @tc.name testUint8ArrayFindIndex009
     * @tc.desc Verify callback only uses index parameter ignoring value and array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findIndex((v, i) -> i == 3);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1000
     * @tc.name testUint8ArrayFindIndex010
     * @tc.desc Verify callback uses value and index combination condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    int result = arr.findIndex((v, i) -> v > 15 && i > 1);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1100
     * @tc.name testUint8ArrayFindIndex011
     * @tc.desc Verify callback uses value, index and array three parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex011() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v, i, a) -> v == a.get(a.length() - 1));
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1200
     * @tc.name testUint8ArrayFindIndex012
     * @tc.desc Verify callback uses array parameter to check array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex012() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v, i, a) -> a.length() == 3);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1300
     * @tc.name testUint8ArrayFindIndex013
     * @tc.desc Verify callback uses array parameter to check array element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex013() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v, i, a) -> v == a.get(1));
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1400
     * @tc.name testUint8ArrayFindIndex014
     * @tc.desc Verify callback uses index === 0 condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex014() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v, i) -> i == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1500
     * @tc.name testUint8ArrayFindIndex015
     * @tc.desc Verify callback uses index === 1 condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex015() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v, i) -> i == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1600
     * @tc.name testUint8ArrayFindIndex016
     * @tc.desc Verify callback uses index out of range returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex016() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v, i) -> i == 5);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1700
     * @tc.name testUint8ArrayFindIndex017
     * @tc.desc Verify callback uses index < 0 condition never satisfied returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex017() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findIndex((v, i) -> i < 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1800
     * @tc.name testUint8ArrayFindIndex018
     * @tc.desc Verify callback uses i % 2 === 1 odd index condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex018() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findIndex((v, i) -> i % 2 == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_1900
     * @tc.name testUint8ArrayFindIndex019
     * @tc.desc Verify callback returns true directly hits first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex019() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6, 9});
    int result = arr.findIndex((v) -> true);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2000
     * @tc.name testUint8ArrayFindIndex020
     * @tc.desc Verify callback returns false never hits
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex020() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6, 9});
    int result = arr.findIndex((v) -> false);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2100
     * @tc.name testUint8ArrayFindIndex021
     * @tc.desc Verify empty array findIndex returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex021() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findIndex((v) -> v > 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2200
     * @tc.name testUint8ArrayFindIndex022
     * @tc.desc Verify empty array callback not called
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex022() {
    Uint8Array arr = new Uint8Array();
    boolean[] called = {false};
    int result = arr.findIndex((v) -> { called[0] = true; return v > 0; });
    assertEqual(-1, result);
    assertFalse(called[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2300
     * @tc.name testUint8ArrayFindIndex023
     * @tc.desc Verify single element array find existing element returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex023() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int result = arr.findIndex((v) -> v == 42);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2400
     * @tc.name testUint8ArrayFindIndex024
     * @tc.desc Verify single element array find non-existing element returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex024() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int result = arr.findIndex((v) -> v == 99);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2500
     * @tc.name testUint8ArrayFindIndex025
     * @tc.desc Verify array value 0 find 0 returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex025() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2600
     * @tc.name testUint8ArrayFindIndex026
     * @tc.desc Verify array value 255 find 255 returns index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex026() {
    Uint8Array arr = new Uint8Array(new int[] {254, 255, 0});
    int result = arr.findIndex((v) -> v == 255);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2700
     * @tc.name testUint8ArrayFindIndex027
     * @tc.desc Verify array value 127 find 127 returns index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex027() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128});
    int result = arr.findIndex((v) -> v == 127);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2800
     * @tc.name testUint8ArrayFindIndex028
     * @tc.desc Verify array value 128 find 128 returns index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex028() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v == 128);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_2900
     * @tc.name testUint8ArrayFindIndex029
     * @tc.desc Verify find > 255 condition never satisfied returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex029() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v > 255);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3000
     * @tc.name testUint8ArrayFindIndex030
     * @tc.desc Verify find < 0 condition never satisfied returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex030() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v < 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3100
     * @tc.name testUint8ArrayFindIndex031
     * @tc.desc Verify find >= 0 condition all satisfied returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex031() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v >= 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3200
     * @tc.name testUint8ArrayFindIndex032
     * @tc.desc Verify find <= 255 condition all satisfied returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex032() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v <= 255);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3300
     * @tc.name testUint8ArrayFindIndex033
     * @tc.desc Verify find v > 0 && v < 255 condition (middle element)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex033() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v > 0 && v < 255);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3400
     * @tc.name testUint8ArrayFindIndex034
     * @tc.desc Verify callback uses v % 2 === 0 condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex034() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v % 2 == 0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3500
     * @tc.name testUint8ArrayFindIndex035
     * @tc.desc Verify callback uses v % 2 === 1 condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex035() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v % 2 == 1);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3600
     * @tc.name testUint8ArrayFindIndex036
     * @tc.desc Verify all same array find not equal to that value returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex036() {
    Uint8Array arr = new Uint8Array(new int[] {5, 5, 5});
    int result = arr.findIndex((v) -> v != 5);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3700
     * @tc.name testUint8ArrayFindIndex037
     * @tc.desc Verify all same array find equal to that value returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex037() {
    Uint8Array arr = new Uint8Array(new int[] {5, 5, 5});
    int result = arr.findIndex((v) -> v == 5);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3800
     * @tc.name testUint8ArrayFindIndex038
     * @tc.desc Verify all 0 array find > 0 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex038() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    int result = arr.findIndex((v) -> v > 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_3900
     * @tc.name testUint8ArrayFindIndex039
     * @tc.desc Verify all 0 array find === 0 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex039() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4000
     * @tc.name testUint8ArrayFindIndex040
     * @tc.desc Verify two elements [0,255] find 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex040() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4100
     * @tc.name testUint8ArrayFindIndex041
     * @tc.desc Verify two elements [0,255] find 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex041() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    int result = arr.findIndex((v) -> v == 255);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4200
     * @tc.name testUint8ArrayFindIndex042
     * @tc.desc Verify two elements [0,255] find > 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex042() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    int result = arr.findIndex((v) -> v > 0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4300
     * @tc.name testUint8ArrayFindIndex043
     * @tc.desc Verify array constructed by new Uint8Array(len) find 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex043() {
    Uint8Array arr = new Uint8Array(5);
    int result = arr.findIndex((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4400
     * @tc.name testUint8ArrayFindIndex044
     * @tc.desc Verify array constructed by new Uint8Array(len) find > 0 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex044() {
    Uint8Array arr = new Uint8Array(5);
    int result = arr.findIndex((v) -> v > 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4500
     * @tc.name testUint8ArrayFindIndex045
     * @tc.desc Verify array constructed by Uint8Array.of and find
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex045() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    int result = arr.findIndex((v) -> v == 9);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4600
     * @tc.name testUint8ArrayFindIndex046
     * @tc.desc Verify findIndex on array constructed from ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex046() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    int result = arr.findIndex((v) -> v == 20);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4700
     * @tc.name testUint8ArrayFindIndex047
     * @tc.desc Verify findIndex on subarray view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex047() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = src.subarray(1, 4);
    int result = sub.findIndex((v) -> v == 4);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4800
     * @tc.name testUint8ArrayFindIndex048
     * @tc.desc Verify array elements constructed with hexadecimal literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex048() {
    Uint8Array arr = new Uint8Array(new double[] {0x0A, 0x14, 0x1E});
    int result = arr.findIndex((v) -> v == 0x14);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_4900
     * @tc.name testUint8ArrayFindIndex049
     * @tc.desc Verify array elements constructed with binary literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex049() {
    Uint8Array arr = new Uint8Array(new int[] {0b0001, 0b1000, 0b1111});
    int result = arr.findIndex((v) -> v == 0b1000);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5000
     * @tc.name testUint8ArrayFindIndex050
     * @tc.desc Verify array elements constructed with octal literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex050() {
    Uint8Array arr = new Uint8Array(new int[] {010, 020, 077});
    int result = arr.findIndex((v) -> v == 077);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5100
     * @tc.name testUint8ArrayFindIndex051
     * @tc.desc Verify predicate uses hexadecimal literal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex051() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v) -> v == 0x1E);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5200
     * @tc.name testUint8ArrayFindIndex052
     * @tc.desc Verify predicate uses binary literal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex052() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v) -> v == 0b1010);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5300
     * @tc.name testUint8ArrayFindIndex053
     * @tc.desc Verify predicate uses octal literal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex053() {
    Uint8Array arr = new Uint8Array(new int[] {7, 8, 63});
    int result = arr.findIndex((v) -> v == 077);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5400
     * @tc.name testUint8ArrayFindIndex054
     * @tc.desc Verify predicate uses exponential literal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 100, 200});
    int result = arr.findIndex((v) -> v == 1e2);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5500
     * @tc.name testUint8ArrayFindIndex055
     * @tc.desc Verify floating point element compared with integer value hits
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex055() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 1.0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5600
     * @tc.name testUint8ArrayFindIndex056
     * @tc.desc Verify predicate uses floating point boundary comparison >127.5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex056() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v > 127.5);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5700
     * @tc.name testUint8ArrayFindIndex057
     * @tc.desc Verify predicate uses floating point boundary comparison >255.0 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex057() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v > 255.0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5800
     * @tc.name testUint8ArrayFindIndex058
     * @tc.desc Verify predicate uses floating point boundary comparison >=0.0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex058() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findIndex((v) -> v >= 0.0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_5900
     * @tc.name testUint8ArrayFindIndex059
     * @tc.desc Verify predicate throws Error in callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex059() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean[] threw = {false};
    try {
    arr.findIndex((v) -> {
    throw new Error("callback error");
    });
    } catch (RuntimeException e) {
    threw[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertTrue(threw[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6000
     * @tc.name testUint8ArrayFindIndex060
     * @tc.desc Verify predicate throws error on specific element (first element)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex060() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean[] threw = {false};
    try {
    arr.findIndex((v) -> {
    if (v == 1) {
    throw new Error("hit");
    };
    return false;
    });
    } catch (RuntimeException e) {
    threw[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertTrue(threw[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6100
     * @tc.name testUint8ArrayFindIndex061
     * @tc.desc Verify predicate uses closure to capture external variable for comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex061() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int target = 20;
    int result = arr.findIndex((v) -> v == target);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6200
     * @tc.name testUint8ArrayFindIndex062
     * @tc.desc Verify predicate calls external helper function for judgment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex062() {
    Uint8Array.Uint8ArrayFinder1 isThreshold = (v) -> {
    return v > 15;
    };
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v) -> isThreshold.test(v));
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6300
     * @tc.name testUint8ArrayFindIndex063
     * @tc.desc Verify predicate uses arithmetic expression (multiplication)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex063() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20});
    int result = arr.findIndex((v) -> v * 2 > 35);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6400
     * @tc.name testUint8ArrayFindIndex064
     * @tc.desc Verify predicate uses arithmetic expression (addition)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex064() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20});
    int result = arr.findIndex((v) -> v + 10 > 25);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6500
     * @tc.name testUint8ArrayFindIndex065
     * @tc.desc Verify predicate uses index combination value compound condition (v === 20 && i === 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex065() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v, i) -> v == 20 && i == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6600
     * @tc.name testUint8ArrayFindIndex066
     * @tc.desc Verify predicate uses index combination value condition not satisfied returns -1 (v === 20 && i === 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex066() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v, i) -> v == 20 && i == 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6700
     * @tc.name testUint8ArrayFindIndex067
     * @tc.desc Verify predicate compares v === a[i] always true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex067() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findIndex((v, i, a) -> v == a.get(i));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6800
     * @tc.name testUint8ArrayFindIndex068
     * @tc.desc Verify predicate compares v === a[a.length - 1 - i] symmetric match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex068() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 2, 1});
    int result = arr.findIndex((v, i, a) -> v == a.get(4 - i));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_6900
     * @tc.name testUint8ArrayFindIndex069
     * @tc.desc Verify callback modifies array element through array parameter does not affect already iterated index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex069() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v, i, a) -> { if (i == 0) { a.set(1, 99); } return v > 2; });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7000
     * @tc.name testUint8ArrayFindIndex070
     * @tc.desc Verify predicate compares v === Number.MAX_VALUE returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex070() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == Double.MAX_VALUE);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7100
     * @tc.name testUint8ArrayFindIndex071
     * @tc.desc Verify predicate compares v === Number.MIN_VALUE returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex071() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == Double.MIN_VALUE);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7200
     * @tc.name testUint8ArrayFindIndex072
     * @tc.desc Verify predicate compares v === Number.NaN returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex072() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == Double.NaN);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7300
     * @tc.name testUint8ArrayFindIndex073
     * @tc.desc Verify predicate compares v === Number.POSITIVE_INFINITY returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex073() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == Double.POSITIVE_INFINITY);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7400
     * @tc.name testUint8ArrayFindIndex074
     * @tc.desc Verify predicate compares v === Number.NEGATIVE_INFINITY returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex074() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == Double.NEGATIVE_INFINITY);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7500
     * @tc.name testUint8ArrayFindIndex075
     * @tc.desc Verify predicate uses bitwise AND operation (v & 1) === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex075() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4});
    int result = arr.findIndex((v) -> (v & 1) == 0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7600
     * @tc.name testUint8ArrayFindIndex076
     * @tc.desc Verify predicate uses bitwise OR operation (v | 0) === v
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex076() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> (v | 0) == v);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7700
     * @tc.name testUint8ArrayFindIndex077
     * @tc.desc Verify predicate uses bitwise XOR operation (v ^ 0) === v
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex077() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> (v ^ 0) == v);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7800
     * @tc.name testUint8ArrayFindIndex078
     * @tc.desc Verify predicate uses bitwise NOT operation (~v) === -(v+1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex078() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> ~v == -(v + 1));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_7900
     * @tc.name testUint8ArrayFindIndex079
     * @tc.desc Verify predicate uses bitwise shift operation (v << 1) === v * 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex079() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> (v << 1) == v * 2);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8000
     * @tc.name testUint8ArrayFindIndex080
     * @tc.desc Verify predicate uses bitwise shift operation (v >> 1) === Math.floor(v / 2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex080() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> (v >> 1) == (int) (v / 2));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8100
     * @tc.name testUint8ArrayFindIndex081
     * @tc.desc Verify predicate uses bitwise unsigned shift operation (v >>> 1) === Math.floor(v / 2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex081() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> (v >>> 1) == (int) (v / 2));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8200
     * @tc.name testUint8ArrayFindIndex082
     * @tc.desc Verify predicate uses ternary operator (v > 10 ? v : 0) === v
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex082() {
    Uint8Array arr = new Uint8Array(new int[] {1, 20, 3});
    int result = arr.findIndex((v) -> (v > 10 ? v : 0) == v);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8300
     * @tc.name testUint8ArrayFindIndex083
     * @tc.desc Verify predicate uses logical AND (v > 0 && v < 10)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex083() {
    Uint8Array arr = new Uint8Array(new int[] {1, 20, 3});
    int result = arr.findIndex((v) -> v > 0 && v < 10);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8400
     * @tc.name testUint8ArrayFindIndex084
     * @tc.desc Verify predicate uses logical OR (v < 0 || v > 10)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex084() {
    Uint8Array arr = new Uint8Array(new int[] {1, 20, 3});
    int result = arr.findIndex((v) -> v < 0 || v > 10);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8500
     * @tc.name testUint8ArrayFindIndex085
     * @tc.desc Verify predicate uses logical NOT (!v) === false for non-zero
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex085() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> (v == 0));
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8600
     * @tc.name testUint8ArrayFindIndex086
     * @tc.desc Verify predicate uses logical NOT (!v) === true for zero
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex086() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int result = arr.findIndex((v) -> (v == 0));
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8700
     * @tc.name testUint8ArrayFindIndex087
     * @tc.desc Verify predicate uses loose equality comparison (==) with number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex087() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 1);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX01_8800
     * @tc.name testUint8ArrayFindIndex088
     * @tc.desc Verify predicate uses strict equality comparison (===) with number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex088() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findIndex((v) -> v == 1);
    assertEqual(0, result);
    }
}
