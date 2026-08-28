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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFindIndexTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFindIndexTest extends BasTest {
    /**
     * Verify findIndex idx equals 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0100
     * @tc.name testUint8ClampedArrayFindIndex001
     * @tc.desc Verify findIndex idx equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findIndex((v, i, a) -> v == 2);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate value 10 returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0200
     * @tc.name testUint8ClampedArrayFindIndex002
     * @tc.desc Verify predicate value 10 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findIndex((v, i, a) -> v == 10);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex idx equals 0 for array [5, 6, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0300
     * @tc.name testUint8ClampedArrayFindIndex003
     * @tc.desc Verify findIndex idx equals 0 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int idx = arr.findIndex((v, i, a) -> true);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex idx equals -1 for array [5, 6, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0400
     * @tc.name testUint8ClampedArrayFindIndex004
     * @tc.desc Verify findIndex idx equals -1 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int idx = arr.findIndex((v, i, a) -> false);
    assertEqual(-1, idx);
    }

    /**
     * Verify findIndex idx equals 2 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0500
     * @tc.name testUint8ClampedArrayFindIndex005
     * @tc.desc Verify findIndex idx equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findIndex((v, i, a) -> i == 2);
    assertEqual(2, idx);
    }

    /**
     * Verify findIndex received equals arr for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0600
     * @tc.name testUint8ClampedArrayFindIndex006
     * @tc.desc Verify findIndex received equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray[] received = {null};
    arr.findIndex((v, i, a) -> {
        received[0] = a;
        return false;
    });
    assertEqual(arr, received[0]);
    }

    /**
     * Verify predicate sums values 6 and indices 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0700
     * @tc.name testUint8ClampedArrayFindIndex007
     * @tc.desc Verify predicate sums values 6 and indices 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] valSum = {0};
    int[] idxSum = {0};
    arr.findIndex((v, i, a) -> {
        valSum[0] += v;
        idxSum[0] += i;
        return false;
    });
    assertEqual(6, valSum[0]);
    assertEqual(3, idxSum[0]);
    }

    /**
     * Verify findIndex idx equals 2 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0800
     * @tc.name testUint8ClampedArrayFindIndex008
     * @tc.desc Verify findIndex idx equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    int idx = arr.findIndex((v, i, a) -> {
        callCount[0]++;
        return v == 3;
    });
    assertEqual(2, idx);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify findIndex idx equals -1 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_0900
     * @tc.name testUint8ClampedArrayFindIndex009
     * @tc.desc Verify findIndex idx equals -1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    int idx = arr.findIndex((v, i, a) -> {
        callCount[0]++;
        return false;
    });
    assertEqual(-1, idx);
    assertEqual(4, callCount[0]);
    }

    /**
     * Verify findIndex idx equals 1 for array [5, 0, 10]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1000
     * @tc.name testUint8ClampedArrayFindIndex010
     * @tc.desc Verify findIndex idx equals 1 for array [5, 0, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 0, 10});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [0, 255, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1100
     * @tc.name testUint8ClampedArrayFindIndex011
     * @tc.desc Verify findIndex idx equals 1 for array [0, 255, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 128});
    int idx = arr.findIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [0, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1200
     * @tc.name testUint8ClampedArrayFindIndex012
     * @tc.desc Verify findIndex idx equals 1 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int idx = arr.findIndex((v, i, a) -> v == 1);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [0, 127, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1300
     * @tc.name testUint8ClampedArrayFindIndex013
     * @tc.desc Verify findIndex idx equals 1 for array [0, 127, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 127, 200});
    int idx = arr.findIndex((v, i, a) -> v == 127);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [0, 128, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1400
     * @tc.name testUint8ClampedArrayFindIndex014
     * @tc.desc Verify findIndex idx equals 1 for array [0, 128, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 128, 200});
    int idx = arr.findIndex((v, i, a) -> v == 128);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate v > 50 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1500
     * @tc.name testUint8ClampedArrayFindIndex015
     * @tc.desc Verify predicate v > 50 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 5, 100, 200});
    int idx = arr.findIndex((v, i, a) -> v > 50);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate v < 50 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1600
     * @tc.name testUint8ClampedArrayFindIndex016
     * @tc.desc Verify predicate v < 50 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200, 100, 5, 1});
    int idx = arr.findIndex((v, i, a) -> v < 50);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate v >= 50 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1700
     * @tc.name testUint8ClampedArrayFindIndex017
     * @tc.desc Verify predicate v >= 50 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 49, 50, 51});
    int idx = arr.findIndex((v, i, a) -> v >= 50);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate v <= 50 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1800
     * @tc.name testUint8ClampedArrayFindIndex018
     * @tc.desc Verify predicate v <= 50 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 80, 50, 40});
    int idx = arr.findIndex((v, i, a) -> v <= 50);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate v !== 5 returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_1900
     * @tc.name testUint8ClampedArrayFindIndex019
     * @tc.desc Verify predicate v !== 5 returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 10});
    int idx = arr.findIndex((v, i, a) -> v != 5);
    assertEqual(3, idx);
    }

    /**
     * Verify predicate v % 2 === 0 returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2000
     * @tc.name testUint8ClampedArrayFindIndex020
     * @tc.desc Verify predicate v % 2 === 0 returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 5, 8, 9});
    int idx = arr.findIndex((v, i, a) -> v % 2 == 0);
    assertEqual(3, idx);
    }

    /**
     * Verify predicate v % 2 === 1 returns index 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2100
     * @tc.name testUint8ClampedArrayFindIndex021
     * @tc.desc Verify predicate v % 2 === 1 returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 4, 6, 7, 8});
    int idx = arr.findIndex((v, i, a) -> v % 2 == 1);
    assertEqual(3, idx);
    }

    /**
     * Verify findIndex idx equals 0 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2200
     * @tc.name testUint8ClampedArrayFindIndex022
     * @tc.desc Verify findIndex idx equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findIndex((v, i, a) -> i == 0);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 20, 30, 40, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2300
     * @tc.name testUint8ClampedArrayFindIndex023
     * @tc.desc Verify findIndex idx equals 1 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.findIndex((v, i, a) -> i % 2 == 1);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate value index v === i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2400
     * @tc.name testUint8ClampedArrayFindIndex024
     * @tc.desc Verify predicate value index v === i
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 2, 9, 4});
    int idx = arr.findIndex((v, i, a) -> v == i);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2500
     * @tc.name testUint8ClampedArrayFindIndex025
     * @tc.desc Verify findIndex idx equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int idx = arr.findIndex((v, i, a) -> i > 0 && a.get(i - 1) == 2);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate does not mutate array values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2600
     * @tc.name testUint8ClampedArrayFindIndex026
     * @tc.desc Verify predicate does not mutate array values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.findIndex((v, i, a) -> v == 2);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify predicate false does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2700
     * @tc.name testUint8ClampedArrayFindIndex027
     * @tc.desc Verify predicate false does not change array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.findIndex((v, i, a) -> false);
    assertEqual(4, arr.length());
    }

    /**
     * Verify predicate v === 3 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2800
     * @tc.name testUint8ClampedArrayFindIndex028
     * @tc.desc Verify predicate v === 3 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findIndex((v, i, a) -> v == 3);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate v === 5 returns index 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_2900
     * @tc.name testUint8ClampedArrayFindIndex029
     * @tc.desc Verify predicate v === 5 returns index 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findIndex((v, i, a) -> v == 5);
    assertEqual(4, idx);
    }

    /**
     * Verify predicate v === 7 returns first index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3000
     * @tc.name testUint8ClampedArrayFindIndex030
     * @tc.desc Verify predicate v === 7 returns first index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7});
    int idx = arr.findIndex((v, i, a) -> v == 7);
    assertEqual(0, idx);
    }

    /**
     * Verify predicate v === 5 returns first match index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3100
     * @tc.name testUint8ClampedArrayFindIndex031
     * @tc.desc Verify predicate v === 5 returns first match index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 5, 2, 5});
    int idx = arr.findIndex((v, i, a) -> v == 5);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate (v & 4) !== 0 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3200
     * @tc.name testUint8ClampedArrayFindIndex032
     * @tc.desc Verify predicate (v & 4) !== 0 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 4, 8, 16});
    int idx = arr.findIndex((v, i, a) -> (v & 4) != 0);
    assertEqual(2, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3300
     * @tc.name testUint8ClampedArrayFindIndex033
     * @tc.desc Verify findIndex idx equals 1 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int idx = arr.findIndex((v, i, a) -> v > 15 && v < 35);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 3 for array [1, 2, 3, 100, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3400
     * @tc.name testUint8ClampedArrayFindIndex034
     * @tc.desc Verify findIndex idx equals 3 for array [1, 2, 3, 100, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 100, 200});
    int idx = arr.findIndex((v, i, a) -> v == 100 || v == 200);
    assertEqual(3, idx);
    }

    /**
     * Verify predicate named function returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3500
     * @tc.name testUint8ClampedArrayFindIndex035
     * @tc.desc Verify predicate named function returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.Uint8ClampedArrayFinder fn = (v, i, a) -> v == 2;
    int idx = arr.findIndex(fn);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate v === target 15 returns index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3600
     * @tc.name testUint8ClampedArrayFindIndex036
     * @tc.desc Verify predicate v === target 15 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    int target = 15;
    int idx = arr.findIndex((v, i, a) -> v == target);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate index array.length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3700
     * @tc.name testUint8ClampedArrayFindIndex037
     * @tc.desc Verify predicate index array.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int idx = arr.findIndex((v, i, a) -> i == a.length() - 1);
    assertEqual(3, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 256, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3800
     * @tc.name testUint8ClampedArrayFindIndex038
     * @tc.desc Verify findIndex idx equals 1 for array [10, 256, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 256, 30});
    int idx = arr.findIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, -1, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_3900
     * @tc.name testUint8ClampedArrayFindIndex039
     * @tc.desc Verify findIndex idx equals 1 for array [10, -1, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, -1, 30});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, Number.NaN, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4000
     * @tc.name testUint8ClampedArrayFindIndex040
     * @tc.desc Verify findIndex idx equals 1 for array [10, Number.NaN, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, Double.NaN, 30});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, Number.POSITIVE_INFINITY,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4100
     * @tc.name testUint8ClampedArrayFindIndex041
     * @tc.desc Verify findIndex idx equals 1 for array [10, Number.POSITIVE_INFINITY,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, Double.POSITIVE_INFINITY, 30});
    int idx = arr.findIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, -Number.POSITIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4200
     * @tc.name testUint8ClampedArrayFindIndex042
     * @tc.desc Verify findIndex idx equals 1 for array [10, -Number.POSITIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, -Double.POSITIVE_INFINITY, 30});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 127.5, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4300
     * @tc.name testUint8ClampedArrayFindIndex043
     * @tc.desc Verify findIndex idx equals 1 for array [10, 127.5, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, 127.5, 30});
    int idx = arr.findIndex((v, i, a) -> v == 128);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 128.5, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4400
     * @tc.name testUint8ClampedArrayFindIndex044
     * @tc.desc Verify findIndex idx equals 1 for array [10, 128.5, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, 128.5, 30});
    int idx = arr.findIndex((v, i, a) -> v == 128);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 0.4, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4500
     * @tc.name testUint8ClampedArrayFindIndex045
     * @tc.desc Verify findIndex idx equals 1 for array [10, 0.4, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, 0.4, 30});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 0.9, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4600
     * @tc.name testUint8ClampedArrayFindIndex046
     * @tc.desc Verify findIndex idx equals 1 for array [10, 0.9, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, 0.9, 30});
    int idx = arr.findIndex((v, i, a) -> v == 1);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 0.5, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4700
     * @tc.name testUint8ClampedArrayFindIndex047
     * @tc.desc Verify findIndex idx equals 1 for array [10, 0.5, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, 0.5, 30});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 1e9, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4800
     * @tc.name testUint8ClampedArrayFindIndex048
     * @tc.desc Verify findIndex idx equals 1 for array [10, 1e9, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, 1e9, 30});
    int idx = arr.findIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, -1e9, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_4900
     * @tc.name testUint8ClampedArrayFindIndex049
     * @tc.desc Verify findIndex idx equals 1 for array [10, -1e9, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {10, -1e9, 30});
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [0x10, 0xFF, 0x80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5000
     * @tc.name testUint8ClampedArrayFindIndex050
     * @tc.desc Verify findIndex idx equals 1 for array [0x10, 0xFF, 0x80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x10, 0xFF, 0x80});
    int idx = arr.findIndex((v, i, a) -> v == 0xFF);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [0o10, 0o20, 0o30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5100
     * @tc.name testUint8ClampedArrayFindIndex051
     * @tc.desc Verify findIndex idx equals 1 for array [0o10, 0o20, 0o30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {010, 020, 030});
    int idx = arr.findIndex((v, i, a) -> v == 020);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 2 for array [0b0001, 0b0010, 0b0100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5200
     * @tc.name testUint8ClampedArrayFindIndex052
     * @tc.desc Verify findIndex idx equals 2 for array [0b0001, 0b0010, 0b0100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b0001, 0b0010, 0b0100});
    int idx = arr.findIndex((v, i, a) -> v == 0b0100);
    assertEqual(2, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [1, 1e2, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5300
     * @tc.name testUint8ClampedArrayFindIndex053
     * @tc.desc Verify findIndex idx equals 1 for array [1, 1e2, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, 1e2, 200});
    int idx = arr.findIndex((v, i, a) -> v == 100);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate v === 30 product 2*3*5 returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5400
     * @tc.name testUint8ClampedArrayFindIndex054
     * @tc.desc Verify predicate v === 30 product 2*3*5 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2 * 3 * 5, 200});
    int idx = arr.findIndex((v, i, a) -> v == 30);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals -1 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5500
     * @tc.name testUint8ClampedArrayFindIndex055
     * @tc.desc Verify findIndex idx equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    int idx = arr.findIndex((v, i, a) -> {
        called[0]++;
        return true;
    });
    assertEqual(-1, idx);
    assertEqual(0, called[0]);
    }

    /**
     * Verify predicate v === 42 returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5600
     * @tc.name testUint8ClampedArrayFindIndex056
     * @tc.desc Verify predicate v === 42 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int idx = arr.findIndex((v, i, a) -> v == 42);
    assertEqual(0, idx);
    }

    /**
     * Verify predicate v === 43 no match returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5700
     * @tc.name testUint8ClampedArrayFindIndex057
     * @tc.desc Verify predicate v === 43 no match returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int idx = arr.findIndex((v, i, a) -> v == 43);
    assertEqual(-1, idx);
    }

    /**
     * Verify predicate v === 20 returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5800
     * @tc.name testUint8ClampedArrayFindIndex058
     * @tc.desc Verify predicate v === 20 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int idx = arr.findIndex((v, i, a) -> v == 20);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 128 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_5900
     * @tc.name testUint8ClampedArrayFindIndex059
     * @tc.desc Verify findIndex idx equals 128 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex059() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(128, 77);
    int idx = arr.findIndex((v, i, a) -> v == 77);
    assertEqual(128, idx);
    }

    /**
     * Verify findIndex idx equals 0 for length-10 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6000
     * @tc.name testUint8ClampedArrayFindIndex060
     * @tc.desc Verify findIndex idx equals 0 for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    int idx = arr.findIndex((v, i, a) -> v == 0);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex idx equals 0 for array [255, 255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6100
     * @tc.name testUint8ClampedArrayFindIndex061
     * @tc.desc Verify findIndex idx equals 0 for array [255, 255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255, 255});
    int idx = arr.findIndex((v, i, a) -> v == 255);
    assertEqual(0, idx);
    }

    /**
     * Verify findIndex idx equals -1 for length-10 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6200
     * @tc.name testUint8ClampedArrayFindIndex062
     * @tc.desc Verify findIndex idx equals -1 for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    int idx = arr.findIndex((v, i, a) -> v == 1);
    assertEqual(-1, idx);
    }

    /**
     * Verify findIndex idx equals 2 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6300
     * @tc.name testUint8ClampedArrayFindIndex063
     * @tc.desc Verify findIndex idx equals 2 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(2, 50);
    int idx = arr.findIndex((v, i, a) -> v == 50);
    assertEqual(2, idx);
    }

    /**
     * Verify findIndex idx equals 1 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6400
     * @tc.name testUint8ClampedArrayFindIndex064
     * @tc.desc Verify findIndex idx equals 1 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex064() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    full.set(5, 99);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 4, 4);
    int idx = view.findIndex((v, i, a) -> v == 99);
    assertEqual(1, idx);
    }

    /**
     * Verify subarray idx equals 1 for array [10, 20, 30, 40, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6500
     * @tc.name testUint8ClampedArrayFindIndex065
     * @tc.desc Verify subarray idx equals 1 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    int idx = sub.findIndex((v, i, a) -> v == 30);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate findIndex findIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6600
     * @tc.name testUint8ClampedArrayFindIndex066
     * @tc.desc Verify predicate findIndex findIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int i1 = arr.findIndex((v, i, a) -> v == 2);
    Uint8ClampedArray sub = arr.subarray(i1);
    int i2 = sub.findIndex((v, i, a) -> v == 4);
    assertEqual(2, i2);
    }

    /**
     * Verify findIndex idx equals 3 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6700
     * @tc.name testUint8ClampedArrayFindIndex067
     * @tc.desc Verify findIndex idx equals 3 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int idx = arr.findIndex((v, i, a) -> v == 4);
    assertEqual(3, idx);
    }

    /**
     * Verify findIndex buffer reference matches for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6800
     * @tc.name testUint8ClampedArrayFindIndex068
     * @tc.desc Verify findIndex buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex068() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    ArrayBuffer before = arr.buffer();
    arr.findIndex((v, i, a) -> v == 2);
    assertEqual(before, arr.buffer());
    }

    /**
     * Verify predicate two arrays returns indices 1 and 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_6900
     * @tc.name testUint8ClampedArrayFindIndex069
     * @tc.desc Verify predicate two arrays returns indices 1 and 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex069() {
    Uint8ClampedArray arr1 = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {3, 4});
    int i1 = arr1.findIndex((v, i, a) -> v == 2);
    int i2 = arr2.findIndex((v, i, a) -> v == 3);
    assertEqual(1, i1);
    assertEqual(0, i2);
    }

    /**
     * Verify predicate same call twice returns equal indices
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7000
     * @tc.name testUint8ClampedArrayFindIndex070
     * @tc.desc Verify predicate same call twice returns equal indices
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    int i1 = arr.findIndex((v, i, a) -> v == 10);
    int i2 = arr.findIndex((v, i, a) -> v == 10);
    assertEqual(1, i1);
    assertEqual(1, i2);
    }

    /**
     * Verify findIndex propagates Error thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7100
     * @tc.name testUint8ClampedArrayFindIndex071
     * @tc.desc Verify findIndex propagates Error thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findIndex((v, i, a) -> {
        return BasTest.throwTestError("boom");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findIndex propagates TypeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7200
     * @tc.name testUint8ClampedArrayFindIndex072
     * @tc.desc Verify findIndex propagates TypeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findIndex((v, i, a) -> {
        throw new TypeError("type");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findIndex propagates RangeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7300
     * @tc.name testUint8ClampedArrayFindIndex073
     * @tc.desc Verify findIndex propagates RangeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findIndex((v, i, a) -> {
        throw new RangeError("range");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate throws Error on first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7400
     * @tc.name testUint8ClampedArrayFindIndex074
     * @tc.desc Verify predicate throws Error on first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] callCount = {0};
    try {
    arr.findIndex((v, i, a) -> {
        callCount[0]++;
        return BasTest.throwTestError("first");
    });
    fail();
    } catch (Error e) {
        assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify predicate throws Error at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7500
     * @tc.name testUint8ClampedArrayFindIndex075
     * @tc.desc Verify predicate throws Error at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    try {
    arr.findIndex((v, i, a) -> {
    callCount[0]++;
    if (i == 2) {
        return BasTest.throwTestError("mid");
    }
    return false;
        });
    fail();
    } catch (Error e) {
        assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify predicate throws Error at last index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7600
     * @tc.name testUint8ClampedArrayFindIndex076
     * @tc.desc Verify predicate throws Error at last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findIndex((v, i, a) -> {
    if (i == 2) {
        return BasTest.throwTestError("last");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findIndex propagates Error thrown during predicate evaluation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7700
     * @tc.name testUint8ClampedArrayFindIndex077
     * @tc.desc Verify findIndex propagates Error thrown during predicate evaluation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findIndex((v, i, a) -> {
        return BasTest.throwTestError("x");
        });
    fail();
    } catch (Error e) {
        assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findIndex idx equals 3 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7800
     * @tc.name testUint8ClampedArrayFindIndex078
     * @tc.desc Verify findIndex idx equals 3 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int idx = arr.findIndex((v, i, a) -> v + a.get(0) == 5);
    assertEqual(3, idx);
    }

    /**
     * Verify findIndex returns index 1 for the second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_7900
     * @tc.name testUint8ClampedArrayFindIndex079
     * @tc.desc Verify findIndex returns index 1 for the second element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex079() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = a1.findIndex((v, i, a) -> {
        int inner = a2.findIndex((vv, ii, aa) -> vv == v * 10);
        return inner == 1;
    });
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals 2 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8000
     * @tc.name testUint8ClampedArrayFindIndex080
     * @tc.desc Verify findIndex idx equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findIndex((v, i, a) -> a.length() == 5 && v == 3);
    assertEqual(2, idx);
    }

    /**
     * Verify findIndex behavior for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8100
     * @tc.name testUint8ClampedArrayFindIndex081
     * @tc.desc Verify findIndex behavior for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex081() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(1, 10);
    boolean[] bufMatched = {false};
    arr.findIndex((v, i, a) -> {
    if (a.buffer() == buf) {
        bufMatched[0] = true;
    }
    return false;
        });
    assertTrue(bufMatched[0]);
    }

    /**
     * Verify predicate v === 1 and v === 3 return indices 0 and 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8200
     * @tc.name testUint8ClampedArrayFindIndex082
     * @tc.desc Verify predicate v === 1 and v === 3 return indices 0 and 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int i1 = arr.findIndex((v, i, a) -> v == 1);
    int i2 = arr.findIndex((v, i, a) -> v == 3);
    assertEqual(0, i1);
    assertEqual(2, i2);
    }

    /**
     * Verify Uint8ClampedArray.of idx equals 1 for of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8300
     * @tc.name testUint8ClampedArrayFindIndex083
     * @tc.desc Verify Uint8ClampedArray.of idx equals 1 for of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex083() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    int idx = arr.findIndex((v, i, a) -> v == 20);
    assertEqual(1, idx);
    }

    /**
     * Verify Uint8ClampedArray.from idx equals 1 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8400
     * @tc.name testUint8ClampedArrayFindIndex084
     * @tc.desc Verify Uint8ClampedArray.from idx equals 1 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex084() {
    double[] src = new double[] {5.0, 10.0, 15.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    int idx = arr.findIndex((v, i, a) -> v == 10);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex idx equals -1 for array [100, 200, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8500
     * @tc.name testUint8ClampedArrayFindIndex085
     * @tc.desc Verify findIndex idx equals -1 for array [100, 200, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 255});
    int idx = arr.findIndex((v, i, a) -> v > 255);
    assertEqual(-1, idx);
    }

    /**
     * Verify findIndex idx equals -1 for array [0, 50, 100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8600
     * @tc.name testUint8ClampedArrayFindIndex086
     * @tc.desc Verify findIndex idx equals -1 for array [0, 50, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 50, 100});
    int idx = arr.findIndex((v, i, a) -> v < 0);
    assertEqual(-1, idx);
    }

    /**
     * Verify findIndex idx equals 3 for array [0, 0, 0, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8700
     * @tc.name testUint8ClampedArrayFindIndex087
     * @tc.desc Verify findIndex idx equals 3 for array [0, 0, 0, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 5});
    int idx = arr.findIndex((v, i, a) -> v > 0);
    assertEqual(3, idx);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8800
     * @tc.name testUint8ClampedArrayFindIndex088
     * @tc.desc Verify findIndex idx equals 1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findIndex((v, i, a) -> i > 0);
    assertEqual(1, idx);
    }

    /**
     * Verify predicate visits values 10 20 30 in order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_8900
     * @tc.name testUint8ClampedArrayFindIndex089
     * @tc.desc Verify predicate visits values 10 20 30 in order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    List<Integer> seen = new ArrayList<>();
    arr.findIndex((v, i, a) -> {
        seen.add(v);
        return false;
    });
    assertEqual(10, seen.get(0));
    assertEqual(20, seen.get(1));
    assertEqual(30, seen.get(2));
    }

    /**
     * Verify subarray iteration count equals 3 for array [10, 20, 30, 40, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_9000
     * @tc.name testUint8ClampedArrayFindIndex090
     * @tc.desc Verify subarray iteration count equals 3 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    int[] count = {0};
    sub.findIndex((v, i, a) -> {
        count[0]++;
        return false;
    });
    assertEqual(3, count[0]);
    }

    /**
     * Verify findIndex idx equals 1 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_9100
     * @tc.name testUint8ClampedArrayFindIndex091
     * @tc.desc Verify findIndex idx equals 1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findIndex((v, i, a) -> v > 15 && a.length() == 3);
    assertEqual(1, idx);
    }

    /**
     * Verify findIndex callback parameters confirm a[i] equals v for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_INDEX_9200
     * @tc.name testUint8ClampedArrayFindIndex092
     * @tc.desc Verify findIndex callback parameters confirm a[i] equals v for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindIndex092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    boolean[] match = {true};
    int[] calls = {0};
    arr.findIndex((v, i, a) -> {
        if (a.get(i) != v) {
            match[0] = false;
        }
        calls[0]++;
        return false;
    });
    assertTrue(match[0]);
    assertEqual(3, calls[0]);
    }
}
