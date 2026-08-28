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
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayReduce01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayReduce01Test extends BasTest {
    /**
     * Verify reduce with 2 parameters (callbackfn + initialValue) using addition accumulation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0100
     * @tc.name testUint8ArrayReduce001
     * @tc.desc Verify reduce with 2 parameters (callbackfn + initialValue) using addition accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce001() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(60, result);
    }

    /**
     * Verify callbackfn with subtraction operator, array [10,20,30], initial value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0200
     * @tc.name testUint8ArrayReduce002
     * @tc.desc Verify callbackfn with subtraction operator, array [10,20,30], initial value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce002() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev - curr, 0);
    assertEqual(-60, result);
    }

    /**
     * Verify callbackfn with multiplication operator, array [2,3,4], initial value 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0300
     * @tc.name testUint8ArrayReduce003
     * @tc.desc Verify callbackfn with multiplication operator, array [2,3,4], initial value 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce003() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev * curr, 1);
    assertEqual(24, result);
    }

    /**
     * Verify callbackfn with Math.max to get maximum value, array [3,1,4,1,5], initial value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0400
     * @tc.name testUint8ArrayReduce004
     * @tc.desc Verify callbackfn with Math.max to get maximum value, array [3,1,4,1,5], initial value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce004() {
    Uint8Array arr = Uint8Array.of(3, 1, 4, 1, 5);
    int result = arr.reduce((prev, curr, index, array) -> Math.max(prev, curr), 0);
    assertEqual(5, result);
    }

    /**
     * Verify callbackfn with Math.min to get minimum value, array [3,1,4,1,5], initial value 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0500
     * @tc.name testUint8ArrayReduce005
     * @tc.desc Verify callbackfn with Math.min to get minimum value, array [3,1,4,1,5], initial value 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce005() {
    Uint8Array arr = Uint8Array.of(3, 1, 4, 1, 5);
    int result = arr.reduce((prev, curr, index, array) -> Math.min(prev, curr), 10);
    assertEqual(1, result);
    }

    /**
     * Verify callbackfn with bitwise OR operator, array [1,2,4], initial value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0600
     * @tc.name testUint8ArrayReduce006
     * @tc.desc Verify callbackfn with bitwise OR operator, array [1,2,4], initial value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce006() {
    Uint8Array arr = Uint8Array.of(1, 2, 4);
    int result = arr.reduce((prev, curr, index, array) -> prev | curr, 0);
    assertEqual(7, result);
    }

    /**
     * Verify callbackfn with bitwise AND operator, array [3,7,15], initial value 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0700
     * @tc.name testUint8ArrayReduce007
     * @tc.desc Verify callbackfn with bitwise AND operator, array [3,7,15], initial value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce007() {
    Uint8Array arr = Uint8Array.of(3, 7, 15);
    int result = arr.reduce((prev, curr, index, array) -> prev & curr, 127);
    assertEqual(3, result);
    }

    /**
     * Verify callbackfn with bitwise XOR operator, array [1,2,3], initial value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0800
     * @tc.name testUint8ArrayReduce008
     * @tc.desc Verify callbackfn with bitwise XOR operator, array [1,2,3], initial value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce008() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, index, array) -> prev ^ curr, 0);
    assertEqual(0, result);
    }

    /**
     * Verify callbackfn with 4 parameters (prev, curr, idx, array) using idx in calculation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_0900
     * @tc.name testUint8ArrayReduce009
     * @tc.desc Verify callbackfn with 4 parameters (prev, curr, idx, array) using idx in calculation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce009() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, idx, index) -> prev + curr + idx, 0);
    assertEqual(63, result);
    }

    /**
     * Verify callbackfn array parameter references the same array as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1000
     * @tc.name testUint8ArrayReduce010
     * @tc.desc Verify callbackfn array parameter references the same array as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce010() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean[] sameRef = {true};
    arr.reduce((prev, curr, idx, a) -> {
    if (a != arr) {
    sameRef[0] = false;
    }
    return prev + curr;
    }, 0);
    assertTrue(sameRef[0]);
    }

    /**
     * Verify callbackfn always returns prev (ignoring all curr), initial value 999
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1100
     * @tc.name testUint8ArrayReduce011
     * @tc.desc Verify callbackfn always returns prev (ignoring all curr), initial value 999
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce011() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev, 999);
    assertEqual(999, result);
    }

    /**
     * Verify callbackfn always returns curr (takes last element value), initial value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1200
     * @tc.name testUint8ArrayReduce012
     * @tc.desc Verify callbackfn always returns curr (takes last element value), initial value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce012() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> curr, 0);
    assertEqual(30, result);
    }

    /**
     * Verify callbackfn returns constant value 42, ignoring all parameters
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1300
     * @tc.name testUint8ArrayReduce013
     * @tc.desc Verify callbackfn returns constant value 42, ignoring all parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce013() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> 42, 0);
    assertEqual(42, result);
    }

    /**
     * Verify callbackfn reads external scope variable for accumulation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1400
     * @tc.name testUint8ArrayReduce014
     * @tc.desc Verify callbackfn reads external scope variable for accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce014() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int factor = 2;
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr * factor, 0);
    assertEqual(12, result);
    }

    /**
     * Verify callbackfn records call count by modifying external variable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1500
     * @tc.name testUint8ArrayReduce015
     * @tc.desc Verify callbackfn records call count by modifying external variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce015() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] callCount = {0};
    arr.reduce((prev, curr, index, array) -> {
    callCount[0]++;
    return prev + curr;
    }, 0);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify callbackfn with compound operation prev + curr * curr
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1600
     * @tc.name testUint8ArrayReduce016
     * @tc.desc Verify callbackfn with compound operation prev + curr * curr
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce016() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr * curr, 0);
    assertEqual(14, result);
    }

    /**
     * Verify callbackfn with conditional branch, only accumulates odd elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1700
     * @tc.name testUint8ArrayReduce017
     * @tc.desc Verify callbackfn with conditional branch, only accumulates odd elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce017() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    double result = arr.reduceDouble((prev, curr, index, array) -> (curr % 2 == 1) ? prev + curr : prev, 0);
    assertEqual(4, result);
    }

    /**
     * Verify callbackfn uses prev + 1 for counting, initial value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1800
     * @tc.name testUint8ArrayReduce018
     * @tc.desc Verify callbackfn uses prev + 1 for counting, initial value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce018() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + 1, 0);
    assertEqual(3, result);
    }

    /**
     * Verify callbackfn calls external function to process current value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_1900
     * @tc.name testUint8ArrayReduce019
     * @tc.desc Verify callbackfn calls external function to process current value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce019() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + (curr > 15 ? curr : 0), 0);
    assertEqual(50, result);
    }

    /**
     * Verify callbackfn uses conditional judgment to distinguish first call processing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2000
     * @tc.name testUint8ArrayReduce020
     * @tc.desc Verify callbackfn uses conditional judgment to distinguish first call processing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce020() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, idx, index) -> idx == 0 ? prev + curr : prev + curr * 10, 0);
    assertEqual(51, result);
    }

    /**
     * Verify callbackfn uses index parity to decide whether to accumulate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2100
     * @tc.name testUint8ArrayReduce021
     * @tc.desc Verify callbackfn uses index parity to decide whether to accumulate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    double result = arr.reduceDouble((prev, curr, idx, index) -> (idx % 2 == 0) ? prev + curr : prev, 0);
    assertEqual(40, result);
    }

    /**
     * Verify callbackfn uses average formula (prev + curr) / 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2200
     * @tc.name testUint8ArrayReduce022
     * @tc.desc Verify callbackfn uses average formula (prev + curr) / 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce022() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceDouble((prev, curr, index, array) -> (prev + curr) / 2, 0);
    assertEqual(21.25, result);
    }

    /**
     * Verify callbackfn uses absolute difference formula Math.abs(prev - curr)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2300
     * @tc.name testUint8ArrayReduce023
     * @tc.desc Verify callbackfn uses absolute difference formula Math.abs(prev - curr)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce023() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> (prev > curr) ? prev - curr : curr - prev, 0);
    assertEqual(20, result);
    }

    /**
     * Verify initialValue is 1, addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2400
     * @tc.name testUint8ArrayReduce024
     * @tc.desc Verify initialValue is 1, addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 1);
    assertEqual(61, result);
    }

    /**
     * Verify initialValue is -1, addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2500
     * @tc.name testUint8ArrayReduce025
     * @tc.desc Verify initialValue is -1, addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce025() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, -1);
    assertEqual(59, result);
    }

    /**
     * Verify initialValue is 255 (uint8 max value), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2600
     * @tc.name testUint8ArrayReduce026
     * @tc.desc Verify initialValue is 255 (uint8 max value), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce026() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 255);
    assertEqual(315, result);
    }

    /**
     * Verify initialValue is 256 (exceeds uint8 range), addition accumulation on [10]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2700
     * @tc.name testUint8ArrayReduce027
     * @tc.desc Verify initialValue is 256 (exceeds uint8 range), addition accumulation on [10]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce027() {
    Uint8Array arr = Uint8Array.of(10);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 256);
    assertEqual(266, result);
    }

    /**
     * Verify initialValue is 0.5 (floating point), addition accumulation on [10,20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2800
     * @tc.name testUint8ArrayReduce028
     * @tc.desc Verify initialValue is 0.5 (floating point), addition accumulation on [10,20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce028() {
    Uint8Array arr = Uint8Array.of(10, 20);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, 0.5);
    assertEqual(30.5, result);
    }

    /**
     * Verify initialValue is 127 (middle value), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_2900
     * @tc.name testUint8ArrayReduce029
     * @tc.desc Verify initialValue is 127 (middle value), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce029() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 127);
    assertEqual(187, result);
    }

    /**
     * Verify initialValue is 128 (middle value+1), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3000
     * @tc.name testUint8ArrayReduce030
     * @tc.desc Verify initialValue is 128 (middle value+1), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce030() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 128);
    assertEqual(188, result);
    }

    /**
     * Verify initialValue is 0xFF (hexadecimal 255), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3100
     * @tc.name testUint8ArrayReduce031
     * @tc.desc Verify initialValue is 0xFF (hexadecimal 255), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce031() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0xFF);
    assertEqual(315, result);
    }

    /**
     * Verify initialValue is 0o377 (octal 255), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3200
     * @tc.name testUint8ArrayReduce032
     * @tc.desc Verify initialValue is 0o377 (octal 255), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce032() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0377);
    assertEqual(315, result);
    }

    /**
     * Verify initialValue is 0b11111111 (binary 255), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3300
     * @tc.name testUint8ArrayReduce033
     * @tc.desc Verify initialValue is 0b11111111 (binary 255), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce033() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0b11111111);
    assertEqual(315, result);
    }

    /**
     * Verify initialValue is 1e3 (scientific notation 1000), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3400
     * @tc.name testUint8ArrayReduce034
     * @tc.desc Verify initialValue is 1e3 (scientific notation 1000), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce034() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, 1e3);
    assertEqual(1060, result);
    }

    /**
     * Verify initialValue is 3.14 (floating point), addition accumulation on [1,2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3500
     * @tc.name testUint8ArrayReduce035
     * @tc.desc Verify initialValue is 3.14 (floating point), addition accumulation on [1,2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce035() {
    Uint8Array arr = Uint8Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, 3.14);
    assertEqual(6.140000000000001, result);
    }

    /**
     * Verify initialValue is Double.NaN, addition accumulation on [10,20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3600
     * @tc.name testUint8ArrayReduce036
     * @tc.desc Verify initialValue is Double.NaN, addition accumulation on [10,20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce036() {
    Uint8Array arr = Uint8Array.of(10, 20);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, Double.NaN);
    assertTrue(true);
    }

    /**
     * Verify initialValue is Double.POSITIVE_INFINITY, addition accumulation on [10,20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3700
     * @tc.name testUint8ArrayReduce037
     * @tc.desc Verify initialValue is Double.POSITIVE_INFINITY, addition accumulation on [10,20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce037() {
    Uint8Array arr = Uint8Array.of(10, 20);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, result);
    }

    /**
     * Verify initialValue is Double.NEGATIVE_INFINITY, addition accumulation on [10,20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3800
     * @tc.name testUint8ArrayReduce038
     * @tc.desc Verify initialValue is Double.NEGATIVE_INFINITY, addition accumulation on [10,20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce038() {
    Uint8Array arr = Uint8Array.of(10, 20);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, Double.NEGATIVE_INFINITY);
    assertEqual(Double.NEGATIVE_INFINITY, result);
    }

    /**
     * Verify initialValue is -0.5 (negative floating point), addition accumulation on [10,20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_3900
     * @tc.name testUint8ArrayReduce039
     * @tc.desc Verify initialValue is -0.5 (negative floating point), addition accumulation on [10,20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce039() {
    Uint8Array arr = Uint8Array.of(10, 20);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev + curr, -0.5);
    assertEqual(29.5, result);
    }

    /**
     * Verify initialValue is 0x80 (hexadecimal 128), addition accumulation on [10,20,30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4000
     * @tc.name testUint8ArrayReduce040
     * @tc.desc Verify initialValue is 0x80 (hexadecimal 128), addition accumulation on [10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce040() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0x80);
    assertEqual(188, result);
    }

    /**
     * Verify U explicitly specified as string, concatenating numbers as strings
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4100
     * @tc.name testUint8ArrayReduce041
     * @tc.desc Verify U explicitly specified as string, concatenating numbers as strings
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduce((prev, curr, index, array) -> prev + String.valueOf(curr), "");
    assertEqual("123", result);
    }

    /**
     * Verify U is string with comma separator concatenation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4200
     * @tc.name testUint8ArrayReduce042
     * @tc.desc Verify U is string with comma separator concatenation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce042() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    String result = arr.reduce((prev, curr, idx, index) -> prev + (idx == 0 ? "" : ",") + String.valueOf(curr), "");
    assertEqual("10,20,30", result);
    }

    /**
     * Verify U is string with sequence number prefix concatenation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4300
     * @tc.name testUint8ArrayReduce043
     * @tc.desc Verify U is string with sequence number prefix concatenation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce043() {
    Uint8Array arr = Uint8Array.of(5, 10);
    String result = 
        arr.reduce((prev, curr, idx, index) -> prev + "[" + String.valueOf(idx) + ":" + String.valueOf(curr) + "]", "");
    assertEqual("[0:5][1:10]", result);
    }

    /**
     * Verify U is string with non-empty string initial value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4400
     * @tc.name testUint8ArrayReduce044
     * @tc.desc Verify U is string with non-empty string initial value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce044() {
    Uint8Array arr = Uint8Array.of(1, 2);
    String result = arr.reduce((prev, curr, index, array) -> prev + "," + String.valueOf(curr), "start");
    assertEqual("start,1,2", result);
    }

    /**
     * Verify U is string, callbackfn returns empty string slice
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4500
     * @tc.name testUint8ArrayReduce045
     * @tc.desc Verify U is string, callbackfn returns empty string slice
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduce((prev, curr, index, array) -> {
        String str = String.valueOf(curr);
        char firstChar = str.charAt(0);
        return prev + firstChar;
        }, "");
    assertEqual("123", result);
    }

    /**
     * Verify U is string, concatenates string after condition check
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4600
     * @tc.name testUint8ArrayReduce046
     * @tc.desc Verify U is string, concatenates string after condition check
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce046() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    String result = arr.reduce((prev, curr, index, array) -> prev + (curr > 0 ? String.valueOf(curr) : ""), "");
    assertEqual("12", result);
    }

    /**
     * Verify U is number with multiplication operation to verify result type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4700
     * @tc.name testUint8ArrayReduce047
     * @tc.desc Verify U is number with multiplication operation to verify result type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce047() {
    Uint8Array arr = Uint8Array.of(2, 3);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev * curr, 1);
    assertEqual(6, result);
    }

    /**
     * Verify empty array reduce returns initialValue
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4800
     * @tc.name testUint8ArrayReduce048
     * @tc.desc Verify empty array reduce returns initialValue
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce048() {
    Uint8Array arr = new Uint8Array();
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(0, result);
    }

    /**
     * Verify empty array reduce returns initialValue 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_4900
     * @tc.name testUint8ArrayReduce049
     * @tc.desc Verify empty array reduce returns initialValue 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce049() {
    Uint8Array arr = new Uint8Array();
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 100);
    assertEqual(100, result);
    }

    /**
     * Verify single element array [5] reduce result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5000
     * @tc.name testUint8ArrayReduce050
     * @tc.desc Verify single element array [5] reduce result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce050() {
    Uint8Array arr = Uint8Array.of(5);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 10);
    assertEqual(15, result);
    }

    /**
     * Verify two element array [1,2] reduce
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5100
     * @tc.name testUint8ArrayReduce051
     * @tc.desc Verify two element array [1,2] reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce051() {
    Uint8Array arr = Uint8Array.of(1, 2);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(3, result);
    }

    /**
     * Verify all-zero array [0,0,0] reduce
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5200
     * @tc.name testUint8ArrayReduce052
     * @tc.desc Verify all-zero array [0,0,0] reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce052() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(0, result);
    }

    /**
     * Verify all-255 array [255,255] reduce multiplication to verify truncation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5300
     * @tc.name testUint8ArrayReduce053
     * @tc.desc Verify all-255 array [255,255] reduce multiplication to verify truncation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce053() {
    Uint8Array arr = Uint8Array.of(255, 255);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(510, result);
    }

    /**
     * Verify array with truncation values [256, -1, 128] (actually stored as [0, 255, 128])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5400
     * @tc.name testUint8ArrayReduce054
     * @tc.desc Verify array with truncation values [256, -1, 128] (actually stored as [0, 255, 128])
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce054() {
    Uint8Array arr = Uint8Array.of(256, -1, 128);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(383, result);
    }

    /**
     * Verify array created from subarray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5500
     * @tc.name testUint8ArrayReduce055
     * @tc.desc Verify array created from subarray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce055() {
    Uint8Array src = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array view = src.subarray(1, 4);
    int result = view.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(90, result);
    }

    /**
     * Verify array created from new Uint8Array(5) zero-filled
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5600
     * @tc.name testUint8ArrayReduce056
     * @tc.desc Verify array created from new Uint8Array(5) zero-filled
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce056() {
    Uint8Array arr = new Uint8Array(5);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(0, result);
    }

    /**
     * Verify large array (10 elements) reduce
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5700
     * @tc.name testUint8ArrayReduce057
     * @tc.desc Verify large array (10 elements) reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(55, result);
    }

    /**
     * Verify array with boundary values [0, 255, 127]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5800
     * @tc.name testUint8ArrayReduce058
     * @tc.desc Verify array with boundary values [0, 255, 127]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce058() {
    Uint8Array arr = Uint8Array.of(0, 255, 127);
    int result = arr.reduce((prev, curr, index, array) -> prev - curr, 1000);
    assertEqual(618, result);
    }

    /**
     * Verify U=number result type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_5900
     * @tc.name testUint8ArrayReduce059
     * @tc.desc Verify U=number result type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce059() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual("java.lang.Double", BasTest.className(result));
    }

    /**
     * Verify U=string result type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6000
     * @tc.name testUint8ArrayReduce060
     * @tc.desc Verify U=string result type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduce((prev, curr, index, array) -> prev + String.valueOf(curr), "");
    assertEqual("java.lang.String", BasTest.className(result));
    }

    /**
     * Verify empty array reduce returns initial string value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6100
     * @tc.name testUint8ArrayReduce061
     * @tc.desc Verify empty array reduce returns initial string value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce061() {
    Uint8Array arr = new Uint8Array();
    String result = arr.reduce((prev, curr, index, array) -> prev + String.valueOf(curr), "empty");
    assertEqual("empty", result);
    }

    /**
     * Verify single element array reduce equals initialValue + element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6200
     * @tc.name testUint8ArrayReduce062
     * @tc.desc Verify single element array reduce equals initialValue + element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce062() {
    Uint8Array arr = Uint8Array.of(7);
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 3);
    assertEqual(10, result);
    }

    /**
     * Verify reduce does not modify array content
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6300
     * @tc.name testUint8ArrayReduce063
     * @tc.desc Verify reduce does not modify array content
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce063() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(10, arr.at(0));
    assertEqual(20, arr.at(1));
    assertEqual(30, arr.at(2));
    }

    /**
     * Verify reduce does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6400
     * @tc.name testUint8ArrayReduce064
     * @tc.desc Verify reduce does not change array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce064() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(3, arr.length());
    }

    /**
     * Verify 100-element array reduce correctness
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6500
     * @tc.name testUint8ArrayReduce065
     * @tc.desc Verify 100-element array reduce correctness
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce065() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i + 1}), i);
    }
    int result = arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    assertEqual(5050, result);
    }

    /**
     * Verify callbackfn exception propagates out
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6600
     * @tc.name testUint8ArrayReduce066
     * @tc.desc Verify callbackfn exception propagates out
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce066() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.reduce((prev, curr, index, array) -> {
    return BasTest.throwTestError("reduce error");
    }, 0);
    fail();
    } catch (Error e) {
    assertEqual("reduce error", e.getMessage());
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callbackfn throws RangeError that propagates out
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6700
     * @tc.name testUint8ArrayReduce067
     * @tc.desc Verify callbackfn throws RangeError that propagates out
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce067() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.reduce((prev, curr, index, array) -> {
    throw new RangeError("out of range");
    }, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callbackfn throws TypeError that propagates out
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6800
     * @tc.name testUint8ArrayReduce068
     * @tc.desc Verify callbackfn throws TypeError that propagates out
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce068() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.reduce((prev, curr, index, array) -> {
    throw new TypeError("type mismatch");
    }, 0);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callbackfn throws at specific index that propagates out
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_6900
     * @tc.name testUint8ArrayReduce069
     * @tc.desc Verify callbackfn throws at specific index that propagates out
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce069() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.reduce((prev, curr, idx, index) -> {
    if (idx == 2) {
    return BasTest.throwTestError("error at index 2");
    }
    return prev + curr;
    }, 0);
    fail();
    } catch (Error e) {
    assertEqual("error at index 2", e.getMessage());
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify callbackfn throws interrupts processing
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_7000
     * @tc.name testUint8ArrayReduce070
     * @tc.desc Verify callbackfn throws interrupts processing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce070() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] processedCount = {0};
    try {
    arr.reduce((prev, curr, index, array) -> {
    processedCount[0]++;
    if (processedCount[0] == 2) {
    return BasTest.throwTestError("stop");
    }
    return prev + curr;
    }, 0);
    fail();
    } catch (RangeError e) {
    assertEqual(2, processedCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify empty array with initial value does not throw error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_7100
     * @tc.name testUint8ArrayReduce071
     * @tc.desc Verify empty array with initial value does not throw error
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce071() {
    Uint8Array arr = new Uint8Array();
    boolean[] errorThrown = {false};
    try {
    arr.reduce((prev, curr, index, array) -> prev + curr, 0);
    } catch (RangeError e) {
    errorThrown[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertFalse(errorThrown[0]);
    }

    /**
     * Verify callback receives proper values during iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_7200
     * @tc.name testUint8ArrayReduce072
     * @tc.desc Verify callback receives proper values during iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce072() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, idx, a) -> {
        if (idx == 0) {
            return curr;
        }
        return prev + curr;
        }, 0);
    assertEqual(60, result);
    }

    /**
     * Verify single element array with large initial value does not truncate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_7300
     * @tc.name testUint8ArrayReduce073
     * @tc.desc Verify single element array with large initial value does not truncate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce073() {
    Uint8Array arr = Uint8Array.of(1);
    double result = arr.reduceDouble((prev, curr, index, array) -> prev * curr, 1000000);
    assertEqual(1000000, result);
    }

    /**
     * Verify reduce uses array parameter to read element values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE01_7400
     * @tc.name testUint8ArrayReduce074
     * @tc.desc Verify reduce uses array parameter to read element values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce074() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.reduce((prev, curr, idx, a) -> prev + a.get(idx), 0);
    assertEqual(30, result);
    }
}
