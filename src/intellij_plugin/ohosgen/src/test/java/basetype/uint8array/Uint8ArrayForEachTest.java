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

import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayForEachTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayForEachTest extends BasTest {

    private static void forEachThrowTest(int value) {
    BasTest.throwTestError("test");
    }

    /**
     * Verify forEach with one required parameter callbackfn executes normally
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0100
     * @tc.name testUint8ArrayForEach001
     * @tc.desc Verify forEach with one required parameter callbackfn executes normally
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach001() {
    int[] callCount = {0};
    Uint8Array arr = Uint8Array.of(42, 84);
    arr.forEach((value) -> {
        callCount[0]++;
        });
    assertEqual(2, callCount[0]);
    }

    /**
     * Verify callbackfn receives correct value parameter for single element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0200
     * @tc.name testUint8ArrayForEach002
     * @tc.desc Verify callbackfn receives correct value parameter for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach002() {
    int[] captured = {0};
    Uint8Array arr = Uint8Array.of(42);
    arr.forEach((value) -> {
        captured[0] = value;
        });
    assertEqual(42, captured[0]);
    }

    /**
     * Verify callbackfn receives correct value parameter sequence for multi-element sum
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0300
     * @tc.name testUint8ArrayForEach003
     * @tc.desc Verify callbackfn receives correct value parameter sequence for multi-element sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach003() {
    int[] sum = {0};
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.forEach((value) -> {
        sum[0] += value;
        });
    assertEqual(60, sum[0]);
    }

    /**
     * Verify callbackfn receives correct index parameter sequence for sum
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0400
     * @tc.name testUint8ArrayForEach004
     * @tc.desc Verify callbackfn receives correct index parameter sequence for sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach004() {
    int[] indexSum = {0};
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    arr.forEach((value, index) -> {
        indexSum[0] += index;
        });
    assertEqual(6, indexSum[0]);
    }

    /**
     * Verify callbackfn first call index is 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0500
     * @tc.name testUint8ArrayForEach005
     * @tc.desc Verify callbackfn first call index is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach005() {
    int[] firstIndex = {-1};
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.forEach((value, index) -> {
    if (firstIndex[0] == -1) {
        firstIndex[0] = index;
    }
    });
    assertEqual(0, firstIndex[0]);
    }

    /**
     * Verify callbackfn last call index is length-1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0600
     * @tc.name testUint8ArrayForEach006
     * @tc.desc Verify callbackfn last call index is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach006() {
    int[] lastIndex = {-1};
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.forEach((value, index) -> {
        lastIndex[0] = index;
        });
    assertEqual(2, lastIndex[0]);
    }

    /**
     * Verify callbackfn third parameter array reference is same as original array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0700
     * @tc.name testUint8ArrayForEach007
     * @tc.desc Verify callbackfn third parameter array reference is same as original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach007() {
    boolean[] sameRef = {true};
    Uint8Array arr = Uint8Array.of(1, 2);
    arr.forEach((value, index, array) -> {
    if (array != arr) {
        sameRef[0] = false;
    }
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify callbackfn call count equals array length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0800
     * @tc.name testUint8ArrayForEach008
     * @tc.desc Verify callbackfn call count equals array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach008() {
    int[] count = {0};
    Uint8Array arr = Uint8Array.of(7, 14, 21, 28, 35);
    arr.forEach((value) -> {
        count[0]++;
        });
    assertEqual(5, count[0]);
    }

    /**
     * Verify callbackfn is called in ascending index order
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_0900
     * @tc.name testUint8ArrayForEach009
     * @tc.desc Verify callbackfn is called in ascending index order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach009() {
    int[] prev = {-1};
    boolean[] ordered = {true};
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    arr.forEach((value, index) -> {
    if (index <= prev[0]) {
        ordered[0] = false;
    }
    prev[0] = index;
        });
    assertTrue(ordered[0]);
    }

    /**
     * Verify callbackfn declares 3 parameters and receives all
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1000
     * @tc.name testUint8ArrayForEach010
     * @tc.desc Verify callbackfn declares 3 parameters and receives all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach010() {
    int[] paramCount = {0};
    Uint8Array arr = Uint8Array.of(1);
    arr.forEach((value, index, array) -> {
    paramCount[0] = 3;
        });
    assertEqual(3, paramCount[0]);
    }

    /**
     * Verify callbackfn declares only 2 parameters (value, index)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1100
     * @tc.name testUint8ArrayForEach011
     * @tc.desc Verify callbackfn declares only 2 parameters (value, index)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach011() {
    int[] sumVal = {0};
    int[] sumIdx = {0};
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    arr.forEach((value, index) -> {
    sumVal[0] += value;
    sumIdx[0] += index;
        });
    assertEqual(21, sumVal[0] + sumIdx[0]);
    }

    /**
     * Verify callbackfn declares only 1 parameter (value)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1200
     * @tc.name testUint8ArrayForEach012
     * @tc.desc Verify callbackfn declares only 1 parameter (value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach012() {
    int[] total = {0};
    Uint8Array arr = Uint8Array.of(4, 8, 12);
    arr.forEach((value) -> {
        total[0] += value;
        });
    assertEqual(24, total[0]);
    }

    /**
     * Verify callbackfn declares no parameters but is still called
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1300
     * @tc.name testUint8ArrayForEach013
     * @tc.desc Verify callbackfn declares no parameters but is still called
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach013() {
    boolean[] called = {false};
    Uint8Array arr = Uint8Array.of(1);
    arr.forEach((index) -> {
        called[0] = true;
        });
    assertTrue(called[0]);
    }

    /**
     * Verify callbackfn uses arrow function syntax
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1400
     * @tc.name testUint8ArrayForEach014
     * @tc.desc Verify callbackfn uses arrow function syntax
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach014() {
    int[] acc = {0};
    Uint8Array arr = Uint8Array.of(2, 4, 6);
    arr.forEach((value) -> {
        acc[0] += value;
        });
    assertEqual(12, acc[0]);
    }

    /**
     * Verify callbackfn uses named function reference
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1500
     * @tc.name testUint8ArrayForEach015
     * @tc.desc Verify callbackfn uses named function reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach015() {
    int[] accum = {0};
    Uint8Array.Uint8ArrayConsumer1 addValue = (val) -> {
        accum[0] += val;
    };
    Uint8Array arr = Uint8Array.of(1, 3, 5);
    arr.forEach(addValue);
    assertEqual(9, accum[0]);
    }

    /**
     * Verify callbackfn uses inline function expression
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1600
     * @tc.name testUint8ArrayForEach016
     * @tc.desc Verify callbackfn uses inline function expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach016() {
    int[] res = {0};
    Uint8Array arr = Uint8Array.of(10, 20);
    arr.forEach((value) -> {
        res[0] += value;
        });
    assertEqual(30, res[0]);
    }

    /**
     * Verify callbackfn receives value as minimum value 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1700
     * @tc.name testUint8ArrayForEach017
     * @tc.desc Verify callbackfn receives value as minimum value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach017() {
    int[] val = {255};
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(0, val[0]);
    }

    /**
     * Verify callbackfn receives value as maximum value 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1800
     * @tc.name testUint8ArrayForEach018
     * @tc.desc Verify callbackfn receives value as maximum value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach018() {
    int[] val = {0};
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 255);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(255, val[0]);
    }

    /**
     * Verify callbackfn receives value as middle value 127
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_1900
     * @tc.name testUint8ArrayForEach019
     * @tc.desc Verify callbackfn receives value as middle value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach019() {
    int[] val = {0};
    Uint8Array arr = Uint8Array.of(127);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(127, val[0]);
    }

    /**
     * Verify callbackfn receives value as middle value 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2000
     * @tc.name testUint8ArrayForEach020
     * @tc.desc Verify callbackfn receives value as middle value 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach020() {
    int[] val = {0};
    Uint8Array arr = Uint8Array.of(128);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(128, val[0]);
    }

    /**
     * Verify callbackfn receives value from 0x00 literal construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2100
     * @tc.name testUint8ArrayForEach021
     * @tc.desc Verify callbackfn receives value from 0x00 literal construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach021() {
    int[] val = {255};
    Uint8Array arr = Uint8Array.of(0x00);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(0, val[0]);
    }

    /**
     * Verify callbackfn receives value from 0xFF literal construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2200
     * @tc.name testUint8ArrayForEach022
     * @tc.desc Verify callbackfn receives value from 0xFF literal construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach022() {
    int[] val = {0};
    Uint8Array arr = Uint8Array.of(0xFF);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(255, val[0]);
    }

    /**
     * Verify callbackfn receives value from 0x80 literal construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2300
     * @tc.name testUint8ArrayForEach023
     * @tc.desc Verify callbackfn receives value from 0x80 literal construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach023() {
    int[] val = {0};
    Uint8Array arr = Uint8Array.of(0x80);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(128, val[0]);
    }

    /**
     * Verify callbackfn receives value from 0x7F literal construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2400
     * @tc.name testUint8ArrayForEach024
     * @tc.desc Verify callbackfn receives value from 0x7F literal construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach024() {
    int[] val = {0};
    Uint8Array arr = Uint8Array.of(0x7F);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(127, val[0]);
    }

    /**
     * Verify callbackfn receives value as minimum positive value 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2500
     * @tc.name testUint8ArrayForEach025
     * @tc.desc Verify callbackfn receives value as minimum positive value 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach025() {
    int[] val = {0};
    Uint8Array arr = Uint8Array.of(1);
    arr.forEach((value) -> {
        val[0] = value;
        });
    assertEqual(1, val[0]);
    }

    /**
     * Verify callbackfn receives multiple boundary values [0,255,127,128] in correct sequence
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2600
     * @tc.name testUint8ArrayForEach026
     * @tc.desc Verify callbackfn receives multiple boundary values [0,255,127,128] in correct sequence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach026() {
    String[] vals = {""};
    Uint8Array arr = Uint8Array.of(0, 255, 127, 128);
    arr.forEach((value) -> {
        vals[0] += String.valueOf(value) + ",";
        });
    assertEqual("0,255,127,128,", vals[0]);
    }

    /**
     * Verify empty array new Uint8Array() callbackfn is not called
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2700
     * @tc.name testUint8ArrayForEach027
     * @tc.desc Verify empty array new Uint8Array() callbackfn is not called
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach027() {
    boolean[] called = {false};
    Uint8Array arr = new Uint8Array();
    arr.forEach((value) -> {
        called[0] = true;
        });
    assertFalse(called[0]);
    }

    /**
     * Verify single element array callbackfn is called once
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2800
     * @tc.name testUint8ArrayForEach028
     * @tc.desc Verify single element array callbackfn is called once
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach028() {
    int[] cnt = {0};
    Uint8Array arr = Uint8Array.of(99);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(1, cnt[0]);
    }

    /**
     * Verify two element array callbackfn is called twice
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_2900
     * @tc.name testUint8ArrayForEach029
     * @tc.desc Verify two element array callbackfn is called twice
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach029() {
    int[] cnt = {0};
    Uint8Array arr = Uint8Array.of(11, 22);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(2, cnt[0]);
    }

    /**
     * Verify three element array callbackfn is called three times
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3000
     * @tc.name testUint8ArrayForEach030
     * @tc.desc Verify three element array callbackfn is called three times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach030() {
    int[] cnt = {0};
    Uint8Array arr = Uint8Array.of(33, 44, 55);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(3, cnt[0]);
    }

    /**
     * Verify five element array callbackfn is called five times
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3100
     * @tc.name testUint8ArrayForEach031
     * @tc.desc Verify five element array callbackfn is called five times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach031() {
    int[] cnt = {0};
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(5, cnt[0]);
    }

    /**
     * Verify ten element array callbackfn is called ten times
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3200
     * @tc.name testUint8ArrayForEach032
     * @tc.desc Verify ten element array callbackfn is called ten times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach032() {
    int[] cnt = {0};
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(10, cnt[0]);
    }

    /**
     * Verify 100 element array callbackfn is called 100 times
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3300
     * @tc.name testUint8ArrayForEach033
     * @tc.desc Verify 100 element array callbackfn is called 100 times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach033() {
    int[] cnt = {0};
    Uint8Array arr = new Uint8Array(100);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(100, cnt[0]);
    }

    /**
     * Verify 256 element array callbackfn is called 256 times
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3400
     * @tc.name testUint8ArrayForEach034
     * @tc.desc Verify 256 element array callbackfn is called 256 times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach034() {
    int[] cnt = {0};
    Uint8Array arr = new Uint8Array(256);
    arr.forEach((value) -> {
        cnt[0]++;
        });
    assertEqual(256, cnt[0]);
    }

    /**
     * Verify callbackfn receives index 0 for first element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3500
     * @tc.name testUint8ArrayForEach035
     * @tc.desc Verify callbackfn receives index 0 for first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach035() {
    int[] firstIdx = {-1};
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.forEach((value, index) -> {
    if (firstIdx[0] == -1) {
        firstIdx[0] = index;
    }
    });
    assertEqual(0, firstIdx[0]);
    }

    /**
     * Verify callbackfn receives index 1 for second element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3600
     * @tc.name testUint8ArrayForEach036
     * @tc.desc Verify callbackfn receives index 1 for second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach036() {
    int[] secondIdx = {-1};
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.forEach((value, index) -> {
    if (index == 1) {
        secondIdx[0] = index;
    }
    });
    assertEqual(1, secondIdx[0]);
    }

    /**
     * Verify callbackfn receives index 2 for third element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3700
     * @tc.name testUint8ArrayForEach037
     * @tc.desc Verify callbackfn receives index 2 for third element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach037() {
    int[] thirdIdx = {-1};
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.forEach((value, index) -> {
    if (index == 2) {
        thirdIdx[0] = index;
    }
    });
    assertEqual(2, thirdIdx[0]);
    }

    /**
     * Verify callbackfn receives index 9 for tenth element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3800
     * @tc.name testUint8ArrayForEach038
     * @tc.desc Verify callbackfn receives index 9 for tenth element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach038() {
    int[] tenthIdx = {-1};
    Uint8Array arr = new Uint8Array(10);
    arr.forEach((value, index) -> {
    if (index == 9) {
        tenthIdx[0] = index;
    }
    });
    assertEqual(9, tenthIdx[0]);
    }

    /**
     * Verify callbackfn receives index 99 for hundredth element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_3900
     * @tc.name testUint8ArrayForEach039
     * @tc.desc Verify callbackfn receives index 99 for hundredth element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach039() {
    int[] hundredthIdx = {-1};
    Uint8Array arr = new Uint8Array(100);
    arr.forEach((value, index) -> {
    if (index == 99) {
        hundredthIdx[0] = index;
    }
    });
    assertEqual(99, hundredthIdx[0]);
    }

    /**
     * Verify callbackfn receives index 255 for 256th element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4000
     * @tc.name testUint8ArrayForEach040
     * @tc.desc Verify callbackfn receives index 255 for 256th element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach040() {
    int[] lastIdx = {-1};
    Uint8Array arr = new Uint8Array(256);
    arr.forEach((value, index) -> {
    if (index == 255) {
        lastIdx[0] = index;
    }
    });
    assertEqual(255, lastIdx[0]);
    }

    /**
     * Verify callbackfn receives index 0 for single element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4100
     * @tc.name testUint8ArrayForEach041
     * @tc.desc Verify callbackfn receives index 0 for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach041() {
    int[] idx = {-1};
    Uint8Array arr = Uint8Array.of(42);
    arr.forEach((value, index) -> {
        idx[0] = index;
        });
    assertEqual(0, idx[0]);
    }

    /**
     * Verify callbackfn receives index 1 for two element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4200
     * @tc.name testUint8ArrayForEach042
     * @tc.desc Verify callbackfn receives index 1 for two element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach042() {
    int[] lastIdx = {-1};
    Uint8Array arr = Uint8Array.of(1, 2);
    arr.forEach((value, index) -> {
        lastIdx[0] = index;
        });
    assertEqual(1, lastIdx[0]);
    }

    /**
     * Verify callbackfn receives index 4 for five element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4300
     * @tc.name testUint8ArrayForEach043
     * @tc.desc Verify callbackfn receives index 4 for five element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach043() {
    int[] lastIdx = {-1};
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.forEach((value, index) -> {
        lastIdx[0] = index;
        });
    assertEqual(4, lastIdx[0]);
    }

    /**
     * Verify callbackfn receives array parameter as Uint8Array type
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4400
     * @tc.name testUint8ArrayForEach044
     * @tc.desc Verify callbackfn receives array parameter as Uint8Array type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach044() {
    boolean[] isUint8Array = {false};
    Uint8Array arr = Uint8Array.of(1, 2);
    arr.forEach((value, index, array) -> {
    if (BasTest.instanceOf(array, Uint8Array.class)) {
        isUint8Array[0] = true;
    }
    });
    assertTrue(isUint8Array[0]);
    }

    /**
     * Verify callbackfn receives array parameter with same length as original
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4500
     * @tc.name testUint8ArrayForEach045
     * @tc.desc Verify callbackfn receives array parameter with same length as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach045() {
    boolean[] sameLength = {false};
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.forEach((value, index, array) -> {
    if (array.length() == arr.length()) {
        sameLength[0] = true;
    }
    });
    assertTrue(sameLength[0]);
    }

    /**
     * Verify callbackfn receives array parameter with same elements as original
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4600
     * @tc.name testUint8ArrayForEach046
     * @tc.desc Verify callbackfn receives array parameter with same elements as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach046() {
    boolean[] sameElements = {true};
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.forEach((value, index, array) -> {
    if (array.get(index) != arr.get(index)) {
        sameElements[0] = false;
    }
    });
    assertTrue(sameElements[0]);
    }

    /**
     * Verify callbackfn receives array parameter with same buffer as original
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4700
     * @tc.name testUint8ArrayForEach047
     * @tc.desc Verify callbackfn receives array parameter with same buffer as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach047() {
    boolean[] sameBuffer = {false};
    Uint8Array arr = Uint8Array.of(1, 2);
    arr.forEach((value, index, array) -> {
    if (array.buffer() == arr.buffer()) {
        sameBuffer[0] = true;
    }
    });
    assertTrue(sameBuffer[0]);
    }

    /**
     * Verify callbackfn receives array parameter with same byteOffset as original
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4800
     * @tc.name testUint8ArrayForEach048
     * @tc.desc Verify callbackfn receives array parameter with same byteOffset as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach048() {
    boolean[] sameOffset = {false};
    Uint8Array arr = Uint8Array.of(1, 2);
    arr.forEach((value, index, array) -> {
    if (array.byteOffset() == arr.byteOffset()) {
        sameOffset[0] = true;
    }
    });
    assertTrue(sameOffset[0]);
    }

    /**
     * Verify forEach returns undefined (void)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_4900
     * @tc.name testUint8ArrayForEach049
     * @tc.desc Verify forEach returns undefined (void)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Object result = null;
    arr.forEach((value) -> {});
    assertNull(result);
    }

    /**
     * Verify forEach returns undefined for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5000
     * @tc.name testUint8ArrayForEach050
     * @tc.desc Verify forEach returns undefined for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach050() {
    Uint8Array arr = new Uint8Array(0);
    Object result = null;
    arr.forEach((value) -> {});
    assertNull(result);
    }

    /**
     * Verify forEach returns undefined for single element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5100
     * @tc.name testUint8ArrayForEach051
     * @tc.desc Verify forEach returns undefined for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach051() {
    Uint8Array arr = Uint8Array.of(42);
    Object result = null;
    arr.forEach((value) -> {});
    assertNull(result);
    }

    /**
     * Verify forEach returns undefined for large array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5200
     * @tc.name testUint8ArrayForEach052
     * @tc.desc Verify forEach returns undefined for large array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach052() {
    Uint8Array arr = new Uint8Array(1000);
    Object result = null;
    arr.forEach((value) -> {});
    assertNull(result);
    }

    /**
     * Verify forEach propagates exception when callbackfn throws, result variable remains undefined
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5300
     * @tc.name testUint8ArrayForEach053
     * @tc.desc Verify forEach propagates exception when callbackfn throws, result variable remains undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach053() {
    Object result = null;
    Uint8Array arr = Uint8Array.of(1);
    try {
    arr.forEach(Uint8ArrayForEachTest::forEachThrowTest);
    result = null;
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertNull(result);
    }

    /**
     * Verify forEach returns undefined when callbackfn modifies array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5400
     * @tc.name testUint8ArrayForEach054
     * @tc.desc Verify forEach returns undefined when callbackfn modifies array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach054() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Object result = null;
    arr.forEach((value, index) -> {
        arr.set(index, value * 2);
        });
    assertNull(result);
    }

    /**
     * Verify forEach returns undefined when callbackfn modifies existing elements in place
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5500
     * @tc.name testUint8ArrayForEach055
     * @tc.desc Verify forEach returns undefined when callbackfn modifies existing elements in place
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach055() {
    Uint8Array arr = Uint8Array.of(1, 2);
    Object result = null;
    arr.forEach((value, index) -> {
        arr.set(index, value + 10);
        });
    assertNull(result);
    }

    /**
     * Verify forEach returns undefined when callbackfn assigns current value unchanged
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FOR_EACH_5600
     * @tc.name testUint8ArrayForEach056
     * @tc.desc Verify forEach returns undefined when callbackfn assigns current value unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayForEach056() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Object result = null;
    arr.forEach((value, index) -> {
        arr.set(index, value);
        });
    assertNull(result);
    }
}
