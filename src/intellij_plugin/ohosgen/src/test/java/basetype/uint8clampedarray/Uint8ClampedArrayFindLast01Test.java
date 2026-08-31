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
 * Uint8ClampedArrayFindLast01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFindLast01Test extends BasTest {
    /**
     * Verify findLast r equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0100
     * @tc.name testUint8ClampedArrayFindLastOne001
     * @tc.desc Verify findLast r equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v > 0);
    assertEqualInt(3, r);
    }

    /**
     * Verify findLast r equals 20 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0200
     * @tc.name testUint8ClampedArrayFindLastOne002
     * @tc.desc Verify findLast r equals 20 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.findLast((v, i, a) -> v == 20);
    assertEqualInt(20, r);
    }

    /**
     * Verify predicate value + index array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0300
     * @tc.name testUint8ClampedArrayFindLastOne003
     * @tc.desc Verify predicate value + index array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    Integer r = arr.findLast((v, i, a) -> i == 1);
    assertEqualInt(5, r);
    }

    /**
     * Verify findLast r equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0400
     * @tc.name testUint8ClampedArrayFindLastOne004
     * @tc.desc Verify findLast r equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == a.get(i));
    assertEqualInt(3, r);
    }

    /**
     * Verify findLast r equals 4 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0500
     * @tc.name testUint8ClampedArrayFindLastOne005
     * @tc.desc Verify findLast r equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.findLast((v, i, a) -> true);
    assertEqualInt(4, r);
    }

    /**
     * Verify predicate matches last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0600
     * @tc.name testUint8ClampedArrayFindLastOne006
     * @tc.desc Verify predicate matches last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == 3);
    assertEqualInt(3, r);
    }

    /**
     * Verify predicate matches zero value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0700
     * @tc.name testUint8ClampedArrayFindLastOne007
     * @tc.desc Verify predicate matches zero value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast propagates Error thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0800
     * @tc.name testUint8ClampedArrayFindLastOne008
     * @tc.desc Verify findLast propagates Error thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLast((v, i, a) -> {
        return BasTest.throwTestError("bad");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLast propagates RangeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_0900
     * @tc.name testUint8ClampedArrayFindLastOne009
     * @tc.desc Verify findLast propagates RangeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLast((v, i, a) -> {
        throw new RangeError("r");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLast propagates TypeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1000
     * @tc.name testUint8ClampedArrayFindLastOne010
     * @tc.desc Verify findLast propagates TypeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLast((v, i, a) -> {
        throw new TypeError("t");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify predicate throws Error and is called only once before throw stops iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1100
     * @tc.name testUint8ClampedArrayFindLastOne011
     * @tc.desc Verify predicate throws Error and is called only once before throw stops iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    int[] count = {0};
    try {
    arr.findLast((v, i, a) -> {
        count[0]++;
        return BasTest.throwTestError("x");
    });
    fail();
    } catch (Error e) {
        assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, count[0]);
    }

    /**
     * Verify findLast returns 7 when only index 2 matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1200
     * @tc.name testUint8ClampedArrayFindLastOne012
     * @tc.desc Verify findLast returns 7 when only index 2 matches
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    Integer r = arr.findLast((v, i, a) -> {
        if (i == 2) {
            return v == 7;
        }
        return false;
    });
    assertEqualInt(7, r);
    }

    /**
     * Verify findLast r equals 20 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1300
     * @tc.name testUint8ClampedArrayFindLastOne013
     * @tc.desc Verify findLast r equals 20 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.findLast((v, i, a) -> (v == 20));
    assertEqualInt(20, r);
    }

    /**
     * Verify findLast r equals 102 for array [100, 101, 102]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1400
     * @tc.name testUint8ClampedArrayFindLastOne014
     * @tc.desc Verify findLast r equals 102 for array [100, 101, 102]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 101, 102});
    Integer r = arr.findLast((v, i, a) -> i == a.length() - 1);
    assertEqualInt(102, r);
    }

    /**
     * Verify findLast r equals 100 for array [100, 101, 102]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1500
     * @tc.name testUint8ClampedArrayFindLastOne015
     * @tc.desc Verify findLast r equals 100 for array [100, 101, 102]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 101, 102});
    Integer r = arr.findLast((v, i, a) -> i == 0);
    assertEqualInt(100, r);
    }

    /**
     * Verify findLast r equals 101 for array [100, 101, 102]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1600
     * @tc.name testUint8ClampedArrayFindLastOne016
     * @tc.desc Verify findLast r equals 101 for array [100, 101, 102]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 101, 102});
    Integer r = arr.findLast((v, i, a) -> i == 1);
    assertEqualInt(101, r);
    }

    /**
     * Verify findLast r equals 5 for array [5, 10, 5, 10, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1700
     * @tc.name testUint8ClampedArrayFindLastOne017
     * @tc.desc Verify findLast r equals 5 for array [5, 10, 5, 10, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 5, 10, 5});
    Integer r = arr.findLast((v, i, a) -> v == 5);
    assertEqualInt(5, r);
    }

    /**
     * Verify findLast records index 3 for the last matching value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1800
     * @tc.name testUint8ClampedArrayFindLastOne018
     * @tc.desc Verify findLast records index 3 for the last matching value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 5, 10, 5});
    int[] foundIdx = {-1};
    arr.findLast((v, i, a) -> {
    if (v == 10) {
        foundIdx[0] = i;
    return true;
    }
    return false;
        });
    assertEqual(3, foundIdx[0]);
    }

    /**
     * Verify findLast r equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_1900
     * @tc.name testUint8ClampedArrayFindLastOne019
     * @tc.desc Verify findLast r equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] same = {false};
    Integer r = arr.findLast((v, i, a) -> {
        same[0] = (a == arr);
        return a == arr;
    });
    assertEqualInt(3, r);
    assertTrue(same[0]);
    }

    /**
     * Verify findLast r equals 5 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2000
     * @tc.name testUint8ClampedArrayFindLastOne020
     * @tc.desc Verify findLast r equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] len = {0};
    Integer r = arr.findLast((v, i, a) -> {
        len[0] = a.length();
        return a.length() == 5;
    });
    assertEqualInt(5, r);
    assertEqual(5, len[0]);
    }

    /**
     * Verify findLast r equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2100
     * @tc.name testUint8ClampedArrayFindLastOne021
     * @tc.desc Verify findLast r equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int outer = 100;
    Integer r = arr.findLast((v, i, a) -> v < outer);
    assertEqualInt(3, r);
    }

    /**
     * Verify findLast r equals 1 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2200
     * @tc.name testUint8ClampedArrayFindLastOne022
     * @tc.desc Verify findLast r equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    Integer r = arr.findLast((v, i, a) -> {
        calls[0]++;
        return i == 0;
    });
    assertEqualInt(1, r);
    assertEqual(4, calls[0]);
    }

    /**
     * Verify findLast calls equals 1 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2300
     * @tc.name testUint8ClampedArrayFindLastOne023
     * @tc.desc Verify findLast calls equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    arr.findLast((v, i, a) -> {
        calls[0]++;
        return v == 4;
    });
    assertEqual(1, calls[0]);
    }

    /**
     * Verify predicate v % 2 === 0 returns 6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2400
     * @tc.name testUint8ClampedArrayFindLastOne024
     * @tc.desc Verify predicate v % 2 === 0 returns 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 4, 6, 1});
    int[] calls = {0};
    Integer r = arr.findLast((v, i, a) -> {
        calls[0]++;
        return (v % 2) == 0;
    });
    assertEqualInt(6, r);
    assertEqual(2, calls[0]);
    }

    /**
     * Verify predicate v % 2 === 0 calls 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2500
     * @tc.name testUint8ClampedArrayFindLastOne025
     * @tc.desc Verify predicate v % 2 === 0 calls 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 4, 6, 1});
    int[] calls = {0};
    arr.findLast((v, i, a) -> {
        calls[0]++;
        return (v % 2) == 0;
    });
    assertEqual(2, calls[0]);
    }

    /**
     * Verify findLast r equals 30 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2600
     * @tc.name testUint8ClampedArrayFindLastOne026
     * @tc.desc Verify findLast r equals 30 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] firstIdx = {-1};
    Integer r = arr.findLast((v, i, a) -> {
        if (firstIdx[0] == -1) {
            firstIdx[0] = i;
        }
        return i == 2;
    });
    assertEqualInt(30, r);
    assertEqual(2, firstIdx[0]);
    }

    /**
     * Verify findLast r equals 10 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2700
     * @tc.name testUint8ClampedArrayFindLastOne027
     * @tc.desc Verify findLast r equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] lastIdx = {-1};
    Integer r = arr.findLast((v, i, a) -> {
        lastIdx[0] = i;
        return i == 0;
    });
    assertEqualInt(10, r);
    assertEqual(0, lastIdx[0]);
    }

    /**
     * Verify findLast r equals 10 for array [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2800
     * @tc.name testUint8ClampedArrayFindLastOne028
     * @tc.desc Verify findLast r equals 10 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    List<Integer> indexes = new ArrayList<>();
    Integer r = arr.findLast((v, i, a) -> {
        indexes.add(i);
        return i == 0;
    });
    assertEqualInt(10, r);
    assertEqual(4, indexes.size());
    assertEqualInt(3, indexes.get(0));
    assertEqualInt(2, indexes.get(1));
    assertEqualInt(1, indexes.get(2));
    assertEqualInt(0, indexes.get(3));
    }

    /**
     * Verify findLast element at arr[0] equals 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_2900
     * @tc.name testUint8ClampedArrayFindLastOne029
     * @tc.desc Verify findLast element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == 2);
    assertEqualInt(2, r);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify findLast element at arr[1] equals 2 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3000
     * @tc.name testUint8ClampedArrayFindLastOne030
     * @tc.desc Verify findLast element at arr[1] equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == 2);
    assertEqualInt(2, r);
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify findLast element at arr[2] equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3100
     * @tc.name testUint8ClampedArrayFindLastOne031
     * @tc.desc Verify findLast element at arr[2] equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == 2);
    assertEqualInt(2, r);
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify findLast idx equals 4 for array [0, 1, 0, 1, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3200
     * @tc.name testUint8ClampedArrayFindLastOne032
     * @tc.desc Verify findLast idx equals 4 for array [0, 1, 0, 1, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 0, 1, 0});
    int[] idx = {-1};
    arr.findLast((v, i, a) -> {
        if (v == 0) {
            idx[0] = i;
        return true;
        }
        return false;
    });
    assertEqual(4, idx[0]);
    }

    /**
     * Verify findLast r equals 2 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3300
     * @tc.name testUint8ClampedArrayFindLastOne033
     * @tc.desc Verify findLast r equals 2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == 2);
    assertEqualInt(2, r);
    }

    /**
     * Verify findLast r equals 255 for array [100, 200, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3400
     * @tc.name testUint8ClampedArrayFindLastOne034
     * @tc.desc Verify findLast r equals 255 for array [100, 200, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 255});
    Integer r = arr.findLast((v, i, a) -> v >= 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 0 for array [0, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3500
     * @tc.name testUint8ClampedArrayFindLastOne035
     * @tc.desc Verify findLast r equals 0 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 0 for array [3, 0, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3600
     * @tc.name testUint8ClampedArrayFindLastOne036
     * @tc.desc Verify findLast r equals 0 for array [3, 0, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 0, 5});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 255, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3700
     * @tc.name testUint8ClampedArrayFindLastOne037
     * @tc.desc Verify findLast r equals 255 for array [1, 255, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 255, 2});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 256, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3800
     * @tc.name testUint8ClampedArrayFindLastOne038
     * @tc.desc Verify findLast r equals 255 for array [1, 256, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 256, 2});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 0 for array [5, -1, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_3900
     * @tc.name testUint8ClampedArrayFindLastOne039
     * @tc.desc Verify findLast r equals 0 for array [5, -1, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, -1, 7});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 0 for array [1, Number.NaN, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4000
     * @tc.name testUint8ClampedArrayFindLastOne040
     * @tc.desc Verify findLast r equals 0 for array [1, Number.NaN, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, Double.NaN, 2});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, Number.POSITIVE_INFINITY,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4100
     * @tc.name testUint8ClampedArrayFindLastOne041
     * @tc.desc Verify findLast r equals 255 for array [1, Number.POSITIVE_INFINITY,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, Double.POSITIVE_INFINITY, 2});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 0 for array [1, -Number.POSITIVE_INFINITY,
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4200
     * @tc.name testUint8ClampedArrayFindLastOne042
     * @tc.desc Verify findLast r equals 0 for array [1, -Number.POSITIVE_INFINITY,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, -Double.POSITIVE_INFINITY, 2});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 127 for array [100, 127, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4300
     * @tc.name testUint8ClampedArrayFindLastOne043
     * @tc.desc Verify findLast r equals 127 for array [100, 127, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 127, 200});
    Integer r = arr.findLast((v, i, a) -> v == 127);
    assertEqualInt(127, r);
    }

    /**
     * Verify findLast r equals 128 for array [100, 128, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4400
     * @tc.name testUint8ClampedArrayFindLastOne044
     * @tc.desc Verify findLast r equals 128 for array [100, 128, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 128, 200});
    Integer r = arr.findLast((v, i, a) -> v == 128);
    assertEqualInt(128, r);
    }

    /**
     * Verify findLast r equals 128 for array [100, 127.5, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4500
     * @tc.name testUint8ClampedArrayFindLastOne045
     * @tc.desc Verify findLast r equals 128 for array [100, 127.5, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {100, 127.5, 200});
    Integer r = arr.findLast((v, i, a) -> v == 128);
    assertEqualInt(128, r);
    }

    /**
     * Verify findLast r equals 128 for array [100, 128.5, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4600
     * @tc.name testUint8ClampedArrayFindLastOne046
     * @tc.desc Verify findLast r equals 128 for array [100, 128.5, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {100, 128.5, 200});
    Integer r = arr.findLast((v, i, a) -> v == 128);
    assertEqualInt(128, r);
    }

    /**
     * Verify findLast r equals 0 for array [0.4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4700
     * @tc.name testUint8ClampedArrayFindLastOne047
     * @tc.desc Verify findLast r equals 0 for array [0.4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 0 for array [0.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4800
     * @tc.name testUint8ClampedArrayFindLastOne048
     * @tc.desc Verify findLast r equals 0 for array [0.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 1 for array [0.9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_4900
     * @tc.name testUint8ClampedArrayFindLastOne049
     * @tc.desc Verify findLast r equals 1 for array [0.9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9});
    Integer r = arr.findLast((v, i, a) -> v == 1);
    assertEqualInt(1, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 1e9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5000
     * @tc.name testUint8ClampedArrayFindLastOne050
     * @tc.desc Verify findLast r equals 255 for array [1, 1e9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, 1e9});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 0 for array [1, -1e9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5100
     * @tc.name testUint8ClampedArrayFindLastOne051
     * @tc.desc Verify findLast r equals 0 for array [1, -1e9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, -1e9});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 2147483648]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5200
     * @tc.name testUint8ClampedArrayFindLastOne052
     * @tc.desc Verify findLast r equals 255 for array [1, 2147483648]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, 2147483648L});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 0 for array [1, -0, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5300
     * @tc.name testUint8ClampedArrayFindLastOne053
     * @tc.desc Verify findLast r equals 0 for array [1, -0, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, -0, 2});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 0 for array [1, 0x00, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5400
     * @tc.name testUint8ClampedArrayFindLastOne054
     * @tc.desc Verify findLast r equals 0 for array [1, 0x00, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0x00, 2});
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqualInt(0, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 0xFF, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5500
     * @tc.name testUint8ClampedArrayFindLastOne055
     * @tc.desc Verify findLast r equals 255 for array [1, 0xFF, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0xFF, 2});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 0b11111111]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5600
     * @tc.name testUint8ClampedArrayFindLastOne056
     * @tc.desc Verify findLast r equals 255 for array [1, 0b11111111]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0b11111111});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 255 for array [1, 0o377]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5700
     * @tc.name testUint8ClampedArrayFindLastOne057
     * @tc.desc Verify findLast r equals 255 for array [1, 0o377]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0377});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast r equals 100 for array [1, 1e2, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5800
     * @tc.name testUint8ClampedArrayFindLastOne058
     * @tc.desc Verify findLast r equals 100 for array [1, 1e2, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1, 1e2, 2});
    Integer r = arr.findLast((v, i, a) -> v == 100);
    assertEqualInt(100, r);
    }

    /**
     * Verify findLast predicate call on one element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_5900
     * @tc.name testUint8ClampedArrayFindLastOne059
     * @tc.desc Verify findLast predicate call on one element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    boolean[] called = {false};
    Integer r = arr.findLast((v, i, a) -> {
        called[0] = true;
        return v == 1;
    });
    assertEqualInt(1, r);
    assertTrue(called[0]);
    }

    /**
     * Verify findLast r equals 1 for array [1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6000
     * @tc.name testUint8ClampedArrayFindLastOne060
     * @tc.desc Verify findLast r equals 1 for array [1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Integer r = arr.findLast((v, i, a) -> true);
    assertEqualInt(1, r);
    }

    /**
     * Verify findLast r equals 42 for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6100
     * @tc.name testUint8ClampedArrayFindLastOne061
     * @tc.desc Verify findLast r equals 42 for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Integer r = arr.findLast((v, i, a) -> v == 42);
    assertEqualInt(42, r);
    }

    /**
     * Verify findLast r equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6200
     * @tc.name testUint8ClampedArrayFindLastOne062
     * @tc.desc Verify findLast r equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> v == 3);
    assertEqualInt(3, r);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify predicate v === 7 returns index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6300
     * @tc.name testUint8ClampedArrayFindLastOne063
     * @tc.desc Verify predicate v === 7 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7});
    int[] idx = {-1};
    arr.findLast((v, i, a) -> {
        if (v == 7) {
            idx[0] = i;
        return true;
        }
        return false;
    });
    assertEqual(1, idx[0]);
    }

    /**
     * Verify predicate v === 10 returns 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6400
     * @tc.name testUint8ClampedArrayFindLastOne064
     * @tc.desc Verify predicate v === 10 returns 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    Integer r = arr.findLast((v, i, a) -> v == 10);
    assertEqualInt(10, r);
    }

    /**
     * Verify 256-length array findLast v === 200 returns 200
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6500
     * @tc.name testUint8ClampedArrayFindLastOne065
     * @tc.desc Verify 256-length array findLast v === 200 returns 200
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne065() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(255, 200);
    Integer r = arr.findLast((v, i, a) -> v == 200);
    assertEqualInt(200, r);
    }

    /**
     * Verify 256 0 findLast predicate 256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6600
     * @tc.name testUint8ClampedArrayFindLastOne066
     * @tc.desc Verify 256 0 findLast predicate 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne066() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int[] calls = {0};
    Integer r = arr.findLast((v, i, a) -> {
        calls[0]++;
        return i == 0;
    });
    assertEqualInt(0, r);
    assertEqual(256, calls[0]);
    }

    /**
     * Verify 1024-length array findLast v === 9 calls 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6700
     * @tc.name testUint8ClampedArrayFindLastOne067
     * @tc.desc Verify 1024-length array findLast v === 9 calls 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne067() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(1023, 9);
    int[] calls = {0};
    arr.findLast((v, i, a) -> {
        calls[0]++;
        return v == 9;
    });
    assertEqual(1, calls[0]);
    }

    /**
     * Verify 1024-length array findLast v === 9 calls 1024
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6800
     * @tc.name testUint8ClampedArrayFindLastOne068
     * @tc.desc Verify 1024-length array findLast v === 9 calls 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne068() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 9);
    int[] calls = {0};
    arr.findLast((v, i, a) -> {
        calls[0]++;
        return v == 9;
    });
    assertEqual(1024, calls[0]);
    }

    /**
     * Verify 65535-length array findLast v === 200 returns 200
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_6900
     * @tc.name testUint8ClampedArrayFindLastOne069
     * @tc.desc Verify 65535-length array findLast v === 200 returns 200
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne069() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(65534, 200);
    Integer r = arr.findLast((v, i, a) -> v == 200);
    assertEqualInt(200, r);
    }

    /**
     * Verify Uint8ClampedArray.of findLast
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7000
     * @tc.name testUint8ClampedArrayFindLastOne070
     * @tc.desc Verify Uint8ClampedArray.of findLast
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne070() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    Integer r = arr.findLast((v, i, a) -> v == 20);
    assertEqualInt(20, r);
    }

    /**
     * Verify findLast r equals 50 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7100
     * @tc.name testUint8ClampedArrayFindLastOne071
     * @tc.desc Verify findLast r equals 50 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne071() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    arr.set(2, 50);
    Integer r = arr.findLast((v, i, a) -> v == 50);
    assertEqualInt(50, r);
    }

    /**
     * Verify subarray r equals 3 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7200
     * @tc.name testUint8ClampedArrayFindLastOne072
     * @tc.desc Verify subarray r equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne072() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    Integer r = sub.findLast((v, i, a) -> v == 3);
    assertEqualInt(3, r);
    }

    /**
     * Verify subarray element at parent[1] equals 2 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7300
     * @tc.name testUint8ClampedArrayFindLastOne073
     * @tc.desc Verify subarray element at parent[1] equals 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne073() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    sub.findLast((v, i, a) -> v == 2);
    assertEqualInt(2, parent.get(1));
    }

    /**
     * Verify findLast predicate array sub parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7400
     * @tc.name testUint8ClampedArrayFindLastOne074
     * @tc.desc Verify findLast predicate array sub parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne074() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    Uint8ClampedArray[] seenArr = {null};
    Integer r = sub.findLast((v, i, a) -> {
        seenArr[0] = a;
        return a == sub;
    });
    assertEqualInt(4, r);
    assertEqual(sub, seenArr[0]);
    }

    /**
     * Verify findLast r equals 9 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7500
     * @tc.name testUint8ClampedArrayFindLastOne075
     * @tc.desc Verify findLast r equals 9 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne075() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3, 1);
    arr.set(0, 9);
    boolean[] called = {false};
    Integer r = arr.findLast((v, i, a) -> {
        called[0] = true;
        return v == 9;
    });
    assertEqualInt(9, r);
    assertTrue(called[0]);
    }

    /**
     * Verify Uint8ClampedArray.from r equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7600
     * @tc.name testUint8ClampedArrayFindLastOne076
     * @tc.desc Verify Uint8ClampedArray.from r equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne076() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray dst = Uint8ClampedArray.from(src);
    Integer r = dst.findLast((v, i, a) -> v == 3);
    assertEqualInt(3, r);
    }

    /**
     * Verify findLast r equals 3 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7700
     * @tc.name testUint8ClampedArrayFindLastOne077
     * @tc.desc Verify findLast r equals 3 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.findLast((v, i, a) -> v > 1 && i < 3);
    assertEqualInt(3, r);
    }

    /**
     * Verify findLast r equals 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7800
     * @tc.name testUint8ClampedArrayFindLastOne078
     * @tc.desc Verify findLast r equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.findLast((v, i, a) -> v == 1 || v == 2);
    assertEqualInt(2, r);
    }

    /**
     * Verify findLast r equals 5 for array [2, 3, 4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_7900
     * @tc.name testUint8ClampedArrayFindLastOne079
     * @tc.desc Verify findLast r equals 5 for array [2, 3, 4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 3, 4, 5, 6});
    Integer r = arr.findLast((v, i, a) -> (v % 2) == 1);
    assertEqualInt(5, r);
    }

    /**
     * Verify findLast r equals 6 for array [2, 3, 4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8000
     * @tc.name testUint8ClampedArrayFindLastOne080
     * @tc.desc Verify findLast r equals 6 for array [2, 3, 4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 3, 4, 5, 6});
    Integer r = arr.findLast((v, i, a) -> (v % 2) == 0);
    assertEqualInt(6, r);
    }

    /**
     * Verify findLast r equals 200 for array [50, 150, 60, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8100
     * @tc.name testUint8ClampedArrayFindLastOne081
     * @tc.desc Verify findLast r equals 200 for array [50, 150, 60, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 150, 60, 200});
    Integer r = arr.findLast((v, i, a) -> v > 100);
    assertEqualInt(200, r);
    }

    /**
     * Verify findLast r equals 8 for array [5, 100, 8, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8200
     * @tc.name testUint8ClampedArrayFindLastOne082
     * @tc.desc Verify findLast r equals 8 for array [5, 100, 8, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 100, 8, 200});
    Integer r = arr.findLast((v, i, a) -> v < 10);
    assertEqualInt(8, r);
    }

    /**
     * Verify findLast r equals 80 for array [10, 60, 200, 80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8300
     * @tc.name testUint8ClampedArrayFindLastOne083
     * @tc.desc Verify findLast r equals 80 for array [10, 60, 200, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 60, 200, 80});
    Integer r = arr.findLast((v, i, a) -> v >= 50 && v <= 100);
    assertEqualInt(80, r);
    }

    /**
     * Verify findLast r equals 8 for array [1, 2, 4, 8]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8400
     * @tc.name testUint8ClampedArrayFindLastOne084
     * @tc.desc Verify findLast r equals 8 for array [1, 2, 4, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 4, 8});
    Integer r = arr.findLast((v, i, a) -> (v & 1) == 0);
    assertEqualInt(8, r);
    }

    /**
     * Verify findLast r equals 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8500
     * @tc.name testUint8ClampedArrayFindLastOne085
     * @tc.desc Verify findLast r equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] sumLen = {0};
    Integer r = arr.findLast((v, i, a) -> {
        sumLen[0] += a.length();
        return i == 0;
    });
    assertEqualInt(1, r);
    assertEqual(9, sumLen[0]);
    }

    /**
     * Verify findLast r equals 5 for array [5, 6, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8600
     * @tc.name testUint8ClampedArrayFindLastOne086
     * @tc.desc Verify findLast r equals 5 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    double[] lastRead = {0.0};
    Integer r = arr.findLast((v, i, a) -> {
        lastRead[0] = BasTest.coalesce(a.get(0), 0.0);
        return i == 0;
    });
    assertEqualInt(5, r);
    assertEqual(5, lastRead[0]);
    }

    /**
     * Verify findLast observes a mutation to value 99 during reverse traversal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8700
     * @tc.name testUint8ClampedArrayFindLastOne087
     * @tc.desc Verify findLast observes a mutation to value 99 during reverse traversal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.findLast((v, i, a) -> {
        if (i == 3) {
            arr.set(0, 99);
        }
        return v == 99;
    });
    assertEqualInt(99, r);
    }

    /**
     * Verify findLast r equals 4 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8800
     * @tc.name testUint8ClampedArrayFindLastOne088
     * @tc.desc Verify findLast r equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.findLast((v, i, a) -> {
        if (i == 3) {
            arr.set(3, 99);
        }
        return i == 3;
    });
    assertEqualInt(4, r);
    assertEqualInt(99, arr.get(3));
    }

    /**
     * Verify findLast returns 2 when compared with a nested findLast result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_8900
     * @tc.name testUint8ClampedArrayFindLastOne089
     * @tc.desc Verify findLast returns 2 when compared with a nested findLast result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> {
        int inner = a.findLast((vv, ii, aa) -> vv == 2);
        return v == inner;
    });
    assertEqualInt(2, r);
    }

    /**
     * Verify predicate v === 10 first element returns 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_9000
     * @tc.name testUint8ClampedArrayFindLastOne090
     * @tc.desc Verify predicate v === 10 first element returns 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.findLast((v, i, a) -> v == 10);
    assertEqualInt(10, r);
    }

    /**
     * Verify findLast r equals 1 for array [1, 2, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_9100
     * @tc.name testUint8ClampedArrayFindLastOne091
     * @tc.desc Verify findLast r equals 1 for array [1, 2, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 1, 2});
    Integer r = arr.findLast((v, i, a) -> v == 1);
    assertEqualInt(1, r);
    }

    /**
     * Verify findLast r equals 255 for array [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_9200
     * @tc.name testUint8ClampedArrayFindLastOne092
     * @tc.desc Verify findLast r equals 255 for array [255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    Integer r = arr.findLast((v, i, a) -> v == 255);
    assertEqualInt(255, r);
    }

    /**
     * Verify findLast yields length 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_ONE_9300
     * @tc.name testUint8ClampedArrayFindLastOne093
     * @tc.desc Verify findLast yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastOne093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] calls = {0};
    Integer r = arr.findLast((v, i, a) -> {
        calls[0]++;
        return v == 2;
    });
    assertEqualInt(2, r);
    assertEqual(2, calls[0]);
    assertEqual(3, arr.length());
    }
}
