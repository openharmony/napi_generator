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
import basetype.common.Error;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindLastIndexTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindLastIndexTest extends BasTest {
    static class CounterState {
        int count;

        CounterState(int count) {
            this.count = count;
            }
    }

    /**
     * Verify findLastIndex with normal predicate parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0100
     * @tc.name testUint8ArrayFindLastIndex001
     * @tc.desc Verify findLastIndex with normal predicate parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex001() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value) -> value == 2);
    assertEqual(1, result);
    }

    /**
     * Verify callback always returns true, all elements match, return last element index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0200
     * @tc.name testUint8ArrayFindLastIndex002
     * @tc.desc Verify callback always returns true, all elements match, return last element index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex002() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findLastIndex((value) -> true);
    assertEqual(2, result);
    }

    /**
     * Verify callback always returns false, no elements match, return -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0300
     * @tc.name testUint8ArrayFindLastIndex003
     * @tc.desc Verify callback always returns false, no elements match, return -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex003() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findLastIndex((value) -> false);
    assertEqual(-1, result);
    }

    /**
     * Verify callback matches value===0, array contains 0 value, return last 0 index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0400
     * @tc.name testUint8ArrayFindLastIndex004
     * @tc.desc Verify callback matches value===0, array contains 0 value, return last 0 index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex004() {
    Uint8Array arr = Uint8Array.of(0, 1, 0, 2);
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches value===255, array contains 255 value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0500
     * @tc.name testUint8ArrayFindLastIndex005
     * @tc.desc Verify callback matches value===255, array contains 255 value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex005() {
    Uint8Array arr = Uint8Array.of(255, 0, 255);
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches value>100, array contains multiple values greater than 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0600
     * @tc.name testUint8ArrayFindLastIndex006
     * @tc.desc Verify callback matches value>100, array contains multiple values greater than 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex006() {
    Uint8Array arr = Uint8Array.of(50, 150, 200, 30);
    int result = arr.findLastIndex((value) -> value > 100);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches value<50, array contains multiple values less than 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0700
     * @tc.name testUint8ArrayFindLastIndex007
     * @tc.desc Verify callback matches value<50, array contains multiple values less than 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex007() {
    Uint8Array arr = Uint8Array.of(10, 60, 20, 80);
    int result = arr.findLastIndex((value) -> value < 50);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches value>=128, array contains 128 and 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0800
     * @tc.name testUint8ArrayFindLastIndex008
     * @tc.desc Verify callback matches value>=128, array contains 128 and 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex008() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findLastIndex((value) -> value >= 128);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches value<=127, array contains 0 and 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_0900
     * @tc.name testUint8ArrayFindLastIndex009
     * @tc.desc Verify callback matches value<=127, array contains 0 and 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex009() {
    Uint8Array arr = Uint8Array.of(0, 128, 127, 255);
    int result = arr.findLastIndex((value) -> value <= 127);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches value%2===0 for even numbers
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1000
     * @tc.name testUint8ArrayFindLastIndex010
     * @tc.desc Verify callback matches value%2===0 for even numbers
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex010() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value) -> value % 2 == 0);
    assertEqual(3, result);
    }

    /**
     * Verify callback matches value%2!==0 for odd numbers
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1100
     * @tc.name testUint8ArrayFindLastIndex011
     * @tc.desc Verify callback matches value%2!==0 for odd numbers
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex011() {
    Uint8Array arr = Uint8Array.of(2, 3, 4, 5, 6);
    int result = arr.findLastIndex((value) -> value % 2 != 0);
    assertEqual(3, result);
    }

    /**
     * Verify callback matches index===length-1 for tail element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1200
     * @tc.name testUint8ArrayFindLastIndex012
     * @tc.desc Verify callback matches index===length-1 for tail element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex012() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, index) -> index == arr.length() - 1);
    assertEqual(3, result);
    }

    /**
     * Verify callback matches index===0 for head element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1300
     * @tc.name testUint8ArrayFindLastIndex013
     * @tc.desc Verify callback matches index===0 for head element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex013() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int result = arr.findLastIndex((value, index) -> index == 0);
    assertEqual(0, result);
    }

    /**
     * Verify callback matches index%2===0 for even indices, multiple hits
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1400
     * @tc.name testUint8ArrayFindLastIndex014
     * @tc.desc Verify callback matches index%2===0 for even indices, multiple hits
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex014() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index) -> index % 2 == 0);
    assertEqual(4, result);
    }

    /**
     * Verify callback matches index===2 for specific index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1500
     * @tc.name testUint8ArrayFindLastIndex015
     * @tc.desc Verify callback matches index===2 for specific index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex015() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value, index) -> index == 2);
    assertEqual(2, result);
    }

    /**
     * Verify callback matches index>=3, return largest index meeting condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1600
     * @tc.name testUint8ArrayFindLastIndex016
     * @tc.desc Verify callback matches index>=3, return largest index meeting condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex016() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index) -> index >= 3);
    assertEqual(4, result);
    }

    /**
     * Verify callback matches index<2, return largest index meeting condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1700
     * @tc.name testUint8ArrayFindLastIndex017
     * @tc.desc Verify callback matches index<2, return largest index meeting condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex017() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index) -> index < 2);
    assertEqual(1, result);
    }

    /**
     * Verify callback matches index>3, return largest index meeting condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1800
     * @tc.name testUint8ArrayFindLastIndex018
     * @tc.desc Verify callback matches index>3, return largest index meeting condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex018() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    int result = arr.findLastIndex((value, index) -> index > 3);
    assertEqual(5, result);
    }

    /**
     * Verify callback matches index===length-2 for second to last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_1900
     * @tc.name testUint8ArrayFindLastIndex019
     * @tc.desc Verify callback matches index===length-2 for second to last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex019() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index) -> index == arr.length() - 2);
    assertEqual(3, result);
    }

    /**
     * Verify callback uses array parameter to access array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2000
     * @tc.name testUint8ArrayFindLastIndex020
     * @tc.desc Verify callback uses array parameter to access array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex020() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index, array) -> {
        return index == array.length() - 1;
        });
    assertEqual(4, result);
    }

    /**
     * Verify callback uses array parameter to access array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2100
     * @tc.name testUint8ArrayFindLastIndex021
     * @tc.desc Verify callback uses array parameter to access array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value, index, array) -> {
        int firstVal = array.at(0);
        return value > firstVal;
    });
    assertEqual(4, result);
    }

    /**
     * Verify callback uses array parameter to compare with first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2200
     * @tc.name testUint8ArrayFindLastIndex022
     * @tc.desc Verify callback uses array parameter to compare with first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex022() {
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20, 25);
    int result = arr.findLastIndex((value, index, array) -> {
        return value == array.at(0);
        });
    assertEqual(0, result);
    }

    /**
     * Verify callback uses both value and index parameters
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2300
     * @tc.name testUint8ArrayFindLastIndex023
     * @tc.desc Verify callback uses both value and index parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex023() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value, index) -> {
        return value > 2 && index > 2;
        });
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex with two elements, only second matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2400
     * @tc.name testUint8ArrayFindLastIndex024
     * @tc.desc Verify findLastIndex with two elements, only second matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex024() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int result = arr.findLastIndex((value) -> value == 20);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with three elements, first and second match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2500
     * @tc.name testUint8ArrayFindLastIndex025
     * @tc.desc Verify findLastIndex with three elements, first and second match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex025() {
    Uint8Array arr = Uint8Array.of(1, 1, 2);
    int result = arr.findLastIndex((value) -> value == 1);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with four elements, all match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2600
     * @tc.name testUint8ArrayFindLastIndex026
     * @tc.desc Verify findLastIndex with four elements, all match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex026() {
    Uint8Array arr = Uint8Array.of(3, 3, 3, 3);
    int result = arr.findLastIndex((value) -> value == 3);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with four elements, only last matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2700
     * @tc.name testUint8ArrayFindLastIndex027
     * @tc.desc Verify findLastIndex with four elements, only last matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value) -> value == 4);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with four elements, only first matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2800
     * @tc.name testUint8ArrayFindLastIndex028
     * @tc.desc Verify findLastIndex with four elements, only first matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex028() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.findLastIndex((value) -> value == 1);
    assertEqual(0, result);
    }

    /**
     * Verify return value type when matching tail element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_2900
     * @tc.name testUint8ArrayFindLastIndex029
     * @tc.desc Verify return value type when matching tail element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex029() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    int result = arr.findLastIndex((value) -> value == 9);
    assertEqual(2, result);
    }

    /**
     * Verify return value type when matching head element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3000
     * @tc.name testUint8ArrayFindLastIndex030
     * @tc.desc Verify return value type when matching head element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex030() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    int result = arr.findLastIndex((value) -> value == 3);
    assertEqual(0, result);
    }

    /**
     * Verify return value type when no match found
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3100
     * @tc.name testUint8ArrayFindLastIndex031
     * @tc.desc Verify return value type when no match found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex031() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    int result = arr.findLastIndex((value) -> value == 99);
    assertEqual(-1, result);
    }

    /**
     * Verify return value type for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3200
     * @tc.name testUint8ArrayFindLastIndex032
     * @tc.desc Verify return value type for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex032() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(-1, result);
    }

    /**
     * Verify return value type for ArrayBuffer constructed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3300
     * @tc.name testUint8ArrayFindLastIndex033
     * @tc.desc Verify return value type for ArrayBuffer constructed array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex033() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buffer);
    arr.set(0, 10);
    arr.set(3, 40);
    int result = arr.findLastIndex((value) -> value == 40);
    assertEqual(3, result);
    }

    /**
     * Verify return value is -1 when no element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3400
     * @tc.name testUint8ArrayFindLastIndex034
     * @tc.desc Verify return value is -1 when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex034() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findLastIndex((value) -> value == 100);
    assertEqual(-1, result);
    }

    /**
     * Verify return value is last index when all elements match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3500
     * @tc.name testUint8ArrayFindLastIndex035
     * @tc.desc Verify return value is last index when all elements match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex035() {
    Uint8Array arr = Uint8Array.of(5, 5, 5, 5);
    int result = arr.findLastIndex((value) -> value == 5);
    assertEqual(3, result);
    }

    /**
     * Verify return value is correct index when only one element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3600
     * @tc.name testUint8ArrayFindLastIndex036
     * @tc.desc Verify return value is correct index when only one element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex036() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value) -> value == 3);
    assertEqual(2, result);
    }

    /**
     * Verify callback throws Error, error is propagated
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3700
     * @tc.name testUint8ArrayFindLastIndex037
     * @tc.desc Verify callback throws Error, error is propagated
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex037() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.findLastIndex((value) -> {
    return BasTest.throwTestError("Test error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify error occurs at first element, callback throws on first call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3800
     * @tc.name testUint8ArrayFindLastIndex038
     * @tc.desc Verify error occurs at first element, callback throws on first call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] callCount = {0};
    try {
    arr.findLastIndex((value) -> {
    callCount[0]++;
    if (callCount[0] == 1) {
    return BasTest.throwTestError("Error at first element");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    assertEqual(1, callCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify error occurs at last element, callback throws on last call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_3900
     * @tc.name testUint8ArrayFindLastIndex039
     * @tc.desc Verify error occurs at last element, callback throws on last call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] callCount = {0};
    try {
    arr.findLastIndex((value) -> {
    callCount[0]++;
    if (callCount[0] == 3) {
    return BasTest.throwTestError("Error at last element");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    assertEqual(3, callCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify error occurs at middle element, callback throws on middle call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4000
     * @tc.name testUint8ArrayFindLastIndex040
     * @tc.desc Verify error occurs at middle element, callback throws on middle call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] callCount = {0};
    try {
    arr.findLastIndex((value) -> {
    callCount[0]++;
    if (callCount[0] == 3) {
    return BasTest.throwTestError("Error at middle element");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    assertEqual(3, callCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify error occurs after match found, callback throws after finding match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4100
     * @tc.name testUint8ArrayFindLastIndex041
     * @tc.desc Verify error occurs after match found, callback throws after finding match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] callCount = {0};
    try {
    arr.findLastIndex((value) -> {
    callCount[0]++;
    if (callCount[0] == 4) {
    return BasTest.throwTestError("Error after match");
    }
    return value == 2;
        });
    fail();
    } catch (Error e) {
    assertEqual(4, callCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex with large array (length=1000)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4200
     * @tc.name testUint8ArrayFindLastIndex042
     * @tc.desc Verify findLastIndex with large array (length=1000)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex042() {
    Uint8Array arr = new Uint8Array(1000);
    arr.set(999, 77);
    int result = arr.findLastIndex((value) -> value == 77);
    assertEqual(999, result);
    }

    /**
     * Verify findLastIndex with large array (length=1000), middle element match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4300
     * @tc.name testUint8ArrayFindLastIndex043
     * @tc.desc Verify findLastIndex with large array (length=1000), middle element match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex043() {
    Uint8Array arr = new Uint8Array(1000);
    arr.set(500, 88);
    int result = arr.findLastIndex((value) -> value == 88);
    assertEqual(500, result);
    }

    /**
     * Verify findLastIndex with large array (length=1000), first element match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4400
     * @tc.name testUint8ArrayFindLastIndex044
     * @tc.desc Verify findLastIndex with large array (length=1000), first element match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex044() {
    Uint8Array arr = new Uint8Array(1000);
    arr.set(0, 55);
    int result = arr.findLastIndex((value) -> value == 55);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex with large array (length=1000), no match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4500
     * @tc.name testUint8ArrayFindLastIndex045
     * @tc.desc Verify findLastIndex with large array (length=1000), no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex045() {
    Uint8Array arr = new Uint8Array(1000);
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(-1, result);
    }

    /**
     * Verify findLastIndex with large array (length=1000), multiple matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4600
     * @tc.name testUint8ArrayFindLastIndex046
     * @tc.desc Verify findLastIndex with large array (length=1000), multiple matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex046() {
    Uint8Array arr = new Uint8Array(1000);
    arr.set(100, 33);
    arr.set(500, 33);
    arr.set(900, 33);
    int result = arr.findLastIndex((value) -> value == 33);
    assertEqual(900, result);
    }

    /**
     * Verify findLastIndex with large array (length=1000), all elements match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4700
     * @tc.name testUint8ArrayFindLastIndex047
     * @tc.desc Verify findLastIndex with large array (length=1000), all elements match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex047() {
    Uint8Array arr = new Uint8Array(1000);
    arr.fill(1);
    int result = arr.findLastIndex((value) -> value == 1);
    assertEqual(999, result);
    }

    /**
     * Verify findLastIndex with element value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4800
     * @tc.name testUint8ArrayFindLastIndex048
     * @tc.desc Verify findLastIndex with element value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex048() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3);
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex with element value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_4900
     * @tc.name testUint8ArrayFindLastIndex049
     * @tc.desc Verify findLastIndex with element value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex049() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with element value 127 (midpoint-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5000
     * @tc.name testUint8ArrayFindLastIndex050
     * @tc.desc Verify findLastIndex with element value 127 (midpoint-1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex050() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    int result = arr.findLastIndex((value) -> value == 127);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with element value 1 (minimum positive)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5100
     * @tc.name testUint8ArrayFindLastIndex051
     * @tc.desc Verify findLastIndex with element value 1 (minimum positive)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex051() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findLastIndex((value) -> value == 1);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with element value 254 (maximum-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5200
     * @tc.name testUint8ArrayFindLastIndex052
     * @tc.desc Verify findLastIndex with element value 254 (maximum-1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex052() {
    Uint8Array arr = Uint8Array.of(253, 254, 255);
    int result = arr.findLastIndex((value) -> value == 254);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with element value 10 (decimal)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5300
     * @tc.name testUint8ArrayFindLastIndex053
     * @tc.desc Verify findLastIndex with element value 10 (decimal)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex053() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.findLastIndex((value) -> value == 10);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex with element value 0x0A (hexadecimal 10)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5400
     * @tc.name testUint8ArrayFindLastIndex054
     * @tc.desc Verify findLastIndex with element value 0x0A (hexadecimal 10)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex054() {
    Uint8Array arr = Uint8Array.of(5, 0x0A, 15);
    int result = arr.findLastIndex((value) -> value == 0x0A);
    assertEqual(1, result);
    }

    /**
     * Verify findLastIndex does not modify array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5500
     * @tc.name testUint8ArrayFindLastIndex055
     * @tc.desc Verify findLastIndex does not modify array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array original = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findLastIndex((value) -> value == 3);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(original.at(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify findLastIndex does not modify array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5600
     * @tc.name testUint8ArrayFindLastIndex056
     * @tc.desc Verify findLastIndex does not modify array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex056() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int originalLength = arr.length();
    arr.findLastIndex((value) -> value == 3);
    assertEqual(originalLength, arr.length());
    }

    /**
     * Verify findLastIndex does not modify array when no match found
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5700
     * @tc.name testUint8ArrayFindLastIndex057
     * @tc.desc Verify findLastIndex does not modify array when no match found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array original = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findLastIndex((value) -> value == 10);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(original.at(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify findLastIndex does not modify array when all elements match
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5800
     * @tc.name testUint8ArrayFindLastIndex058
     * @tc.desc Verify findLastIndex does not modify array when all elements match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex058() {
    Uint8Array arr = Uint8Array.of(5, 5, 5, 5, 5);
    Uint8Array original = Uint8Array.of(5, 5, 5, 5, 5);
    arr.findLastIndex((value) -> value == 5);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(original.at(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify findLastIndex does not modify array when callback throws error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_5900
     * @tc.name testUint8ArrayFindLastIndex059
     * @tc.desc Verify findLastIndex does not modify array when callback throws error
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex059() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array original = Uint8Array.of(1, 2, 3, 4, 5);
    try {
    arr.findLastIndex((value) -> {
    return BasTest.throwTestError("Test error");
        });
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(original.at(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify findLastIndex does not modify array when callback modifies local variable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6000
     * @tc.name testUint8ArrayFindLastIndex060
     * @tc.desc Verify findLastIndex does not modify array when callback modifies local variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array original = Uint8Array.of(1, 2, 3, 4, 5);
    int[] counter = {0};
    arr.findLastIndex((value) -> {
    counter[0]++;
    return value == 3;
        });
    assertEqual(3, counter[0]);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(original.at(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify findLastIndex does not modify array when callback modifies external object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6100
     * @tc.name testUint8ArrayFindLastIndex061
     * @tc.desc Verify findLastIndex does not modify array when callback modifies external object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array original = Uint8Array.of(1, 2, 3, 4, 5);
    CounterState state = new CounterState(0);
    arr.findLastIndex((value) -> {
    state.count++;
    return value == 3;
        });
    assertEqual(3, state.count);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(original.at(i).intValue(), arr.at(i).intValue());
    }
    }

    /**
     * Verify findLastIndex with Uint8Array.of() constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6200
     * @tc.name testUint8ArrayFindLastIndex062
     * @tc.desc Verify findLastIndex with Uint8Array.of() constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex062() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findLastIndex((value) -> value == 30);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with new Uint8Array(length) constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6300
     * @tc.name testUint8ArrayFindLastIndex063
     * @tc.desc Verify findLastIndex with new Uint8Array(length) constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex063() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 10);
    arr.set(4, 50);
    int result = arr.findLastIndex((value) -> value == 50);
    assertEqual(4, result);
    }

    /**
     * Verify findLastIndex with Uint8Array.from() constructor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6400
     * @tc.name testUint8ArrayFindLastIndex064
     * @tc.desc Verify findLastIndex with Uint8Array.from() constructor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex064() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value) -> value == 3);
    assertEqual(2, result);
    }

    /**
     * Verify findLastIndex with Uint8Array.from() using string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6500
     * @tc.name testUint8ArrayFindLastIndex065
     * @tc.desc Verify findLastIndex with Uint8Array.from() using string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex065() {
    Uint8Array arr = Uint8Array.from(new double[] {72.0, 101.0, 108.0, 108.0, 111.0});
    int result = arr.findLastIndex((value) -> value == 108);
    assertEqual(3, result);
    }

    /**
     * Verify findLastIndex with hexadecimal literal 0x0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6600
     * @tc.name testUint8ArrayFindLastIndex066
     * @tc.desc Verify findLastIndex with hexadecimal literal 0x0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex066() {
    Uint8Array arr = Uint8Array.of(0x0, 0x1, 0x2);
    int result = arr.findLastIndex((value) -> value == 0x0);
    assertEqual(0, result);
    }

    /**
     * Verify findLastIndex with hexadecimal literal 0xFF
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6700
     * @tc.name testUint8ArrayFindLastIndex067
     * @tc.desc Verify findLastIndex with hexadecimal literal 0xFF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex067() {
    Uint8Array arr = Uint8Array.of(0x00, 0x80, 0xFF);
    int result = arr.findLastIndex((value) -> value == 0xFF);
    assertEqual(2, result);
    }

    /**
     * Verify callback condition value===128 (midpoint value match)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6800
     * @tc.name testUint8ArrayFindLastIndex068
     * @tc.desc Verify callback condition value===128 (midpoint value match)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex068() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findLastIndex((value) -> value == 128);
    assertEqual(1, result);
    }

    /**
     * Verify callback condition value!==0 (non-zero value match)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_6900
     * @tc.name testUint8ArrayFindLastIndex069
     * @tc.desc Verify callback condition value!==0 (non-zero value match)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex069() {
    Uint8Array arr = Uint8Array.of(0, 5, 0, 10);
    int result = arr.findLastIndex((value) -> value != 0);
    assertEqual(3, result);
    }

    /**
     * Verify callback condition value>arr[index+1] (compare with next element)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_7000
     * @tc.name testUint8ArrayFindLastIndex070
     * @tc.desc Verify callback condition value>arr[index+1] (compare with next element)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex070() {
    Uint8Array arr = Uint8Array.of(1, 4, 2, 5, 3);
    int result = arr.findLastIndex((value, index) -> {
        if (index < arr.length() - 1) {
            int nextVal = arr.at(index + 1);
        return value > nextVal;
        }
        return false;
    });
    assertEqual(3, result);
    }

    /**
     * Verify adjacent matches, consecutive i and i+1 both satisfy condition
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX_7100
     * @tc.name testUint8ArrayFindLastIndex071
     * @tc.desc Verify adjacent matches, consecutive i and i+1 both satisfy condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex071() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findLastIndex((value) -> value > 2 && value < 5);
    assertEqual(3, result);
    }
}
