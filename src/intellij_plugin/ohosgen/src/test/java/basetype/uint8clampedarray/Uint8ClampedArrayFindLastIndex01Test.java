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
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFindLastIndex01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFindLastIndex01Test extends BasTest {
    /**
     * Verify findLastIndex idx equals 2 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0100
     * @tc.name testUint8ClampedArrayFindLastIndexOne001
     * @tc.desc Verify findLastIndex idx equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> v == 3);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex returns 2 for array [10, 20, 30] with predicate always true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0200
     * @tc.name testUint8ClampedArrayFindLastIndexOne002
     * @tc.desc Verify findLastIndex returns 2 for array [10, 20, 30] with predicate always true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findLastIndex((v, i, a) -> true);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals -1 for array [5, 10, 15, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0300
     * @tc.name testUint8ClampedArrayFindLastIndexOne003
     * @tc.desc Verify findLastIndex idx equals -1 for array [5, 10, 15, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    int idx = arr.findLastIndex((v, i, a) -> false);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for array [100, 255, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0400
     * @tc.name testUint8ClampedArrayFindLastIndexOne004
     * @tc.desc Verify findLastIndex idx equals 1 for array [100, 255, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 255, 200});
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for array [126, 127, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0500
     * @tc.name testUint8ClampedArrayFindLastIndexOne005
     * @tc.desc Verify findLastIndex idx equals 1 for array [126, 127, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int idx = arr.findLastIndex((v, i, a) -> v == 127);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [126, 127, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0600
     * @tc.name testUint8ClampedArrayFindLastIndexOne006
     * @tc.desc Verify findLastIndex idx equals 2 for array [126, 127, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int idx = arr.findLastIndex((v, i, a) -> v == 128);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0700
     * @tc.name testUint8ClampedArrayFindLastIndexOne007
     * @tc.desc Verify findLastIndex idx equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int idx = arr.findLastIndex((v, i, a) -> i == 2);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals 0 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0800
     * @tc.name testUint8ClampedArrayFindLastIndexOne008
     * @tc.desc Verify findLastIndex idx equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findLastIndex((v, i, a) -> i == 0);
    assertEqual(0, idx);
    }

    /**
     * Verify predicate index === length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_0900
     * @tc.name testUint8ClampedArrayFindLastIndexOne009
     * @tc.desc Verify predicate index === length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findLastIndex((v, i, a) -> i == a.length() - 1);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1000
     * @tc.name testUint8ClampedArrayFindLastIndexOne010
     * @tc.desc Verify findLastIndex idx equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> a.length() == 3 && v == 2);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1100
     * @tc.name testUint8ClampedArrayFindLastIndexOne011
     * @tc.desc Verify findLastIndex idx equals 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> a == arr && v == 1);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [50, 150, 200, 80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1200
     * @tc.name testUint8ClampedArrayFindLastIndexOne012
     * @tc.desc Verify findLastIndex idx equals 2 for array [50, 150, 200, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 150, 200, 80});
    int idx = arr.findLastIndex((v, i, a) -> v > 100);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [10, 60, 20, 70]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1300
     * @tc.name testUint8ClampedArrayFindLastIndexOne013
     * @tc.desc Verify findLastIndex idx equals 2 for array [10, 60, 20, 70]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 60, 20, 70});
    int idx = arr.findLastIndex((v, i, a) -> v < 50);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals 3 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1400
     * @tc.name testUint8ClampedArrayFindLastIndexOne014
     * @tc.desc Verify findLastIndex idx equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findLastIndex((v, i, a) -> v % 2 == 0);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex idx equals 4 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1500
     * @tc.name testUint8ClampedArrayFindLastIndexOne015
     * @tc.desc Verify findLastIndex idx equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findLastIndex((v, i, a) -> v % 2 == 1);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex idx equals 3 for array [100, 130, 50, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1600
     * @tc.name testUint8ClampedArrayFindLastIndexOne016
     * @tc.desc Verify findLastIndex idx equals 3 for array [100, 130, 50, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 130, 50, 200});
    int idx = arr.findLastIndex((v, i, a) -> v >= 128);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [100, 130, 50, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1700
     * @tc.name testUint8ClampedArrayFindLastIndexOne017
     * @tc.desc Verify findLastIndex idx equals 2 for array [100, 130, 50, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 130, 50, 200});
    int idx = arr.findLastIndex((v, i, a) -> v <= 127);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals -1 for array [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1800
     * @tc.name testUint8ClampedArrayFindLastIndexOne018
     * @tc.desc Verify findLastIndex idx equals -1 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int idx = arr.findLastIndex((v, i, a) -> v + i == 13);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex idx equals 0 for array [0x10, 0x20, 0x30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_1900
     * @tc.name testUint8ClampedArrayFindLastIndexOne019
     * @tc.desc Verify findLastIndex idx equals 0 for array [0x10, 0x20, 0x30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x10, 0x20, 0x30});
    int idx = arr.findLastIndex((v, i, a) -> v == 0x10);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [0xFF, 0x7F, 0xFF]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2000
     * @tc.name testUint8ClampedArrayFindLastIndexOne020
     * @tc.desc Verify findLastIndex idx equals 2 for array [0xFF, 0x7F, 0xFF]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0x7F, 0xFF});
    int idx = arr.findLastIndex((v, i, a) -> v == 0xFF);
    assertEqual(2, idx);
    }

    /**
     * Verify predicate 0b10000000 2 = 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2100
     * @tc.name testUint8ClampedArrayFindLastIndexOne021
     * @tc.desc Verify predicate 0b10000000 2 = 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b00000001, 0b10000000, 0b11111111});
    int idx = arr.findLastIndex((v, i, a) -> v == 0b10000000);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 2 for array [0o17, 0o20, 0o17]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2200
     * @tc.name testUint8ClampedArrayFindLastIndexOne022
     * @tc.desc Verify findLastIndex idx equals 2 for array [0o17, 0o20, 0o17]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017, 020, 017});
    int idx = arr.findLastIndex((v, i, a) -> v == 017);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for array [99, 100, 101]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2300
     * @tc.name testUint8ClampedArrayFindLastIndexOne023
     * @tc.desc Verify findLastIndex idx equals 1 for array [99, 100, 101]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 100, 101});
    int idx = arr.findLastIndex((v, i, a) -> v == 1e2);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals -1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2400
     * @tc.name testUint8ClampedArrayFindLastIndexOne024
     * @tc.desc Verify findLastIndex idx equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> v > 1000);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex v === 5 returns last index 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2500
     * @tc.name testUint8ClampedArrayFindLastIndexOne025
     * @tc.desc Verify findLastIndex v === 5 returns last index 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 5, 10, 5});
    int idx = arr.findLastIndex((v, i, a) -> v == 5);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex visits indices from length-1 down to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2600
     * @tc.name testUint8ClampedArrayFindLastIndexOne026
     * @tc.desc Verify findLastIndex visits indices from length-1 down to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    List<Integer> visitedIndices = new ArrayList<>();
    arr.findLastIndex((v, i, a) -> {
    visitedIndices.add(i);
    return false;
        });
    assertEqual(5, visitedIndices.size());
    assertEqual(4, visitedIndices.get(0));
    assertEqual(0, visitedIndices.get(4));
    }

    /**
     * Verify findLastIndex callCount equals 3 for v === 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2700
     * @tc.name testUint8ClampedArrayFindLastIndexOne027
     * @tc.desc Verify findLastIndex callCount equals 3 for v === 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        callCount[0]++;
        return v == 3;
    });
    assertEqual(2, idx);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify findLastIndex returns -1 after six reverse predicate calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2800
     * @tc.name testUint8ClampedArrayFindLastIndexOne028
     * @tc.desc Verify findLastIndex returns -1 after six reverse predicate calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    int[] callCount = {0};
    int idx = arr.findLastIndex((v, i, a) -> {
        callCount[0]++;
        return false;
    });
    assertEqual(-1, idx);
    assertEqual(6, callCount[0]);
    }

    /**
     * Verify findLastIndex on empty array returns -1 without calling predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_2900
     * @tc.name testUint8ClampedArrayFindLastIndexOne029
     * @tc.desc Verify findLastIndex on empty array returns -1 without calling predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    boolean[] called = {false};
    int idx = arr.findLastIndex((v, i, a) -> {
        called[0] = true;
        return true;
    });
    assertEqual(-1, idx);
    assertEqual(false, called[0]);
    }

    /**
     * Verify findLastIndex v === 99 single element returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3000
     * @tc.name testUint8ClampedArrayFindLastIndexOne030
     * @tc.desc Verify findLastIndex v === 99 single element returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int idx = arr.findLastIndex((v, i, a) -> v == 99);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex no match single element returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3100
     * @tc.name testUint8ClampedArrayFindLastIndexOne031
     * @tc.desc Verify findLastIndex no match single element returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int idx = arr.findLastIndex((v, i, a) -> v == 100);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex v === 2 two elements returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3200
     * @tc.name testUint8ClampedArrayFindLastIndexOne032
     * @tc.desc Verify findLastIndex v === 2 two elements returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int idx = arr.findLastIndex((v, i, a) -> v == 2);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex v === 1 two elements returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3300
     * @tc.name testUint8ClampedArrayFindLastIndexOne033
     * @tc.desc Verify findLastIndex v === 1 two elements returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int idx = arr.findLastIndex((v, i, a) -> v == 1);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex v===255 in 0..255 array returns 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3400
     * @tc.name testUint8ClampedArrayFindLastIndexOne034
     * @tc.desc Verify findLastIndex v===255 in 0..255 array returns 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne034() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
    data.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(data);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(255, idx);
    }

    /**
     * Verify findLastIndex returns 1023 for value 7 in 1024-length array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3500
     * @tc.name testUint8ClampedArrayFindLastIndexOne035
     * @tc.desc Verify findLastIndex returns 1023 for value 7 in 1024-length array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(1023, 7);
    int idx = arr.findLastIndex((v, i, a) -> v == 7);
    assertEqual(1023, idx);
    }

    /**
     * Verify findLastIndex idx equals 1023 for length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3600
     * @tc.name testUint8ClampedArrayFindLastIndexOne036
     * @tc.desc Verify findLastIndex idx equals 1023 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1023, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3700
     * @tc.name testUint8ClampedArrayFindLastIndexOne037
     * @tc.desc Verify findLastIndex idx equals 1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, 256);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3800
     * @tc.name testUint8ClampedArrayFindLastIndexOne038
     * @tc.desc Verify findLastIndex idx equals 1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, -1);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_3900
     * @tc.name testUint8ClampedArrayFindLastIndexOne039
     * @tc.desc Verify findLastIndex idx equals 1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, Double.NaN);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4000
     * @tc.name testUint8ClampedArrayFindLastIndexOne040
     * @tc.desc Verify findLastIndex idx equals 1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, Double.POSITIVE_INFINITY);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4100
     * @tc.name testUint8ClampedArrayFindLastIndexOne041
     * @tc.desc Verify findLastIndex idx equals 1 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, -Double.POSITIVE_INFINITY);
    arr.set(2, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4200
     * @tc.name testUint8ClampedArrayFindLastIndexOne042
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 127.5);
    int idx = arr.findLastIndex((v, i, a) -> v == 128);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4300
     * @tc.name testUint8ClampedArrayFindLastIndexOne043
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 128.5);
    int idx = arr.findLastIndex((v, i, a) -> v == 128);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4400
     * @tc.name testUint8ClampedArrayFindLastIndexOne044
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 0.4);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4500
     * @tc.name testUint8ClampedArrayFindLastIndexOne045
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 0.9);
    int idx = arr.findLastIndex((v, i, a) -> v == 1);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4600
     * @tc.name testUint8ClampedArrayFindLastIndexOne046
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 1e9);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4700
     * @tc.name testUint8ClampedArrayFindLastIndexOne047
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, -1e9);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4800
     * @tc.name testUint8ClampedArrayFindLastIndexOne048
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, Double.MAX_VALUE);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_4900
     * @tc.name testUint8ClampedArrayFindLastIndexOne049
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, Double.MIN_VALUE);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5000
     * @tc.name testUint8ClampedArrayFindLastIndexOne050
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 2147483648L);
    int idx = arr.findLastIndex((v, i, a) -> v == 255);
    assertEqual(1, idx);
    }

    /**
     * Verify findLastIndex idx equals 1 for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5100
     * @tc.name testUint8ClampedArrayFindLastIndexOne051
     * @tc.desc Verify findLastIndex idx equals 1 for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, -0);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(1, idx);
    }

    /**
     * Verify Uint8ClampedArray.of findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5200
     * @tc.name testUint8ClampedArrayFindLastIndexOne052
     * @tc.desc Verify Uint8ClampedArray.of findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne052() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 20);
    int idx = arr.findLastIndex((v, i, a) -> v == 20);
    assertEqual(3, idx);
    }

    /**
     * Verify findLastIndex idx equals 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5300
     * @tc.name testUint8ClampedArrayFindLastIndexOne053
     * @tc.desc Verify findLastIndex idx equals 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne053() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(2, 100);
    arr.set(4, 100);
    int idx = arr.findLastIndex((v, i, a) -> v == 100);
    assertEqual(4, idx);
    }

    /**
     * Verify ArrayBuffer + byteOffset findLastIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5400
     * @tc.name testUint8ClampedArrayFindLastIndexOne054
     * @tc.desc Verify ArrayBuffer + byteOffset findLastIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne054() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(1, 50);
    arr.set(3, 50);
    int idx = arr.findLastIndex((v, i, a) -> v == 50);
    assertEqual(3, idx);
    }

    /**
     * Verify new Uint8ClampedArray(length) findLastIndex 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5500
     * @tc.name testUint8ClampedArrayFindLastIndexOne055
     * @tc.desc Verify new Uint8ClampedArray(length) findLastIndex 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    int idx = arr.findLastIndex((v, i, a) -> v == 0);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex idx equals 3 for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5600
     * @tc.name testUint8ClampedArrayFindLastIndexOne056
     * @tc.desc Verify findLastIndex idx equals 3 for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne056() {
    List<Number> src = java.util.Arrays.asList(5, 10, 15, 10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int idx = arr.findLastIndex((v, i, a) -> v == 10);
    assertEqual(3, idx);
    }

    /**
     * Verify subarray idx equals 1 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5700
     * @tc.name testUint8ClampedArrayFindLastIndexOne057
     * @tc.desc Verify subarray idx equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne057() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int idx = sub.findLastIndex((v, i, a) -> v == 3);
    assertEqual(1, idx);
    }

    /**
     * Verify slice idx equals 2 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5800
     * @tc.name testUint8ClampedArrayFindLastIndexOne058
     * @tc.desc Verify slice idx equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne058() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray slice = parent.slice(1, 4);
    int idx = slice.findLastIndex((v, i, a) -> v == 4);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex returns -1 for array [1, 2, 3] with no matching element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_5900
     * @tc.name testUint8ClampedArrayFindLastIndexOne059
     * @tc.desc Verify findLastIndex returns -1 for array [1, 2, 3] with no matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> v == 100);
    assertEqual(-1, idx);
    }

    /**
     * Verify findLastIndex idx equals 4 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6000
     * @tc.name testUint8ClampedArrayFindLastIndexOne060
     * @tc.desc Verify findLastIndex idx equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx = arr.findLastIndex((v, i, a) -> true);
    assertEqual(4, idx);
    }

    /**
     * Verify findLastIndex does not mutate array elements and returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6100
     * @tc.name testUint8ClampedArrayFindLastIndexOne061
     * @tc.desc Verify findLastIndex does not mutate array elements and returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findLastIndex((v, i, a) -> v == 20);
    assertEqual(1, idx);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify findLastIndex does not mutate array length and returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6200
     * @tc.name testUint8ClampedArrayFindLastIndexOne062
     * @tc.desc Verify findLastIndex does not mutate array length and returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int beforeLen = arr.length();
    int idx = arr.findLastIndex((v, i, a) -> v == 20);
    assertEqual(1, idx);
    assertEqual(beforeLen, arr.length());
    }

    /**
     * Verify findLastIndex does not mutate buffer reference and returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6300
     * @tc.name testUint8ClampedArrayFindLastIndexOne063
     * @tc.desc Verify findLastIndex does not mutate buffer reference and returns correct index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    ArrayBuffer beforeBuffer = arr.buffer();
    int idx = arr.findLastIndex((v, i, a) -> v == 20);
    assertEqual(1, idx);
    assertEqual(beforeBuffer, arr.buffer());
    }

    /**
     * Verify findLastIndex same predicate returns equal index twice
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6400
     * @tc.name testUint8ClampedArrayFindLastIndexOne064
     * @tc.desc Verify findLastIndex same predicate returns equal index twice
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx1 = arr.findLastIndex((v, i, a) -> v == 20);
    int idx2 = arr.findLastIndex((v, i, a) -> v == 20);
    assertEqual(1, idx1);
    assertEqual(1, idx2);
    }

    /**
     * Verify findLastIndex v===1 returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6500
     * @tc.name testUint8ClampedArrayFindLastIndexOne065
     * @tc.desc Verify findLastIndex v===1 returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> v == 1);
    assertEqual(0, idx);
    }

    /**
     * Verify findLastIndex idx equals arr.length - 1 for array [1, 2, 3, 4, 5, 6, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6600
     * @tc.name testUint8ClampedArrayFindLastIndexOne066
     * @tc.desc Verify findLastIndex idx equals arr.length - 1 for array [1, 2, 3, 4, 5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7});
    int idx = arr.findLastIndex((v, i, a) -> true);
    assertEqual(arr.length() - 1, idx);
    }

    /**
     * Verify findLastIndex v === 30 index dereferences arr value 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6700
     * @tc.name testUint8ClampedArrayFindLastIndexOne067
     * @tc.desc Verify findLastIndex v === 30 index dereferences arr value 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int idx = arr.findLastIndex((v, i, a) -> v == 30);
    assertEqual(30, arr.get(idx));
    }

    /**
     * Verify findLastIndex propagates Error thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6800
     * @tc.name testUint8ClampedArrayFindLastIndexOne068
     * @tc.desc Verify findLastIndex propagates Error thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v, i, a) -> {
    return BasTest.throwTestError("predicate failed");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex propagates RangeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_6900
     * @tc.name testUint8ClampedArrayFindLastIndexOne069
     * @tc.desc Verify findLastIndex propagates RangeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v, i, a) -> {
    throw new RangeError("range fail");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex propagates TypeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7000
     * @tc.name testUint8ClampedArrayFindLastIndexOne070
     * @tc.desc Verify findLastIndex propagates TypeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v, i, a) -> {
    throw new TypeError("type fail");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex predicate throws Error on first call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7100
     * @tc.name testUint8ClampedArrayFindLastIndexOne071
     * @tc.desc Verify findLastIndex predicate throws Error on first call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    try {
    arr.findLastIndex((v, i, a) -> {
    callCount[0]++;
    return BasTest.throwTestError("first call throw");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, callCount[0]);
    }
    }

    /**
     * Verify findLastIndex predicate throws Error on second call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7200
     * @tc.name testUint8ClampedArrayFindLastIndexOne072
     * @tc.desc Verify findLastIndex predicate throws Error on second call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] callCount = {0};
    try {
    arr.findLastIndex((v, i, a) -> {
    callCount[0]++;
    if (callCount[0] == 2) {
    return BasTest.throwTestError("second call");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, callCount[0]);
    }
    }

    /**
     * Verify predicate throws Error (name check)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7300
     * @tc.name testUint8ClampedArrayFindLastIndexOne073
     * @tc.desc Verify predicate throws Error (name check)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v, i, a) -> {
    return BasTest.throwTestError("custom msg 123");
        });
    fail();
    } catch (Error e) {
        assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex predicate mutation arr[0]=99 persists and returns matching index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7400
     * @tc.name testUint8ClampedArrayFindLastIndexOne074
     * @tc.desc Verify findLastIndex predicate mutation arr[0]=99 persists and returns matching index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.findLastIndex((v, i, a) -> {
        if (i == 2) {
            arr.set(0, 99);
        }
        return v == 99;
    });
    assertEqual(0, idx);
    assertEqual(99, arr.get(0));
    }

    /**
     * Verify predicate truthy v > 0 boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7500
     * @tc.name testUint8ClampedArrayFindLastIndexOne075
     * @tc.desc Verify predicate truthy v > 0 boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int idx = arr.findLastIndex((v, i, a) -> v > 0);
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex returns last index when predicate !isNaN(v)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7600
     * @tc.name testUint8ClampedArrayFindLastIndexOne076
     * @tc.desc Verify findLastIndex returns last index when predicate !isNaN(v)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> !BasTest.isNaN(v));
    assertEqual(2, idx);
    }

    /**
     * Verify nested findLastIndex in predicate finds last occurrence of value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7700
     * @tc.name testUint8ClampedArrayFindLastIndexOne077
     * @tc.desc Verify nested findLastIndex in predicate finds last occurrence of value 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.findLastIndex((v, i, a) -> {
        int inner = a.findLastIndex((vv, ii, aa) -> vv == v);
        return inner == i && v == 3;
    });
    assertEqual(2, idx);
    }

    /**
     * Verify findLastIndex v === target 20 returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_INDEX_ONE_7800
     * @tc.name testUint8ClampedArrayFindLastIndexOne078
     * @tc.desc Verify findLastIndex v === target 20 returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastIndexOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int target = 20;
    int idx = arr.findLastIndex((v, i, a) -> v == target);
    assertEqual(1, idx);
    }
}
