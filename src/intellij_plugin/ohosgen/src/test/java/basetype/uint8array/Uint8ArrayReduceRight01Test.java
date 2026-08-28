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
import basetype.common.ClassCastError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayReduceRight01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayReduceRight01Test extends BasTest {

    static class SumCount {
        public int sum;
        public int count;
        SumCount(int sum, int count) {
            this.sum = sum;
            this.count = count;
            }
    }

    static class Result {
        public final int sum;
        public final int count;
        Result(int sum, int count) {
            this.sum = sum;
            this.count = count;
            }
    }

    /**
     * Verify reduceRight with 2 parameters (callbackfn + initialValue) using addition accumulation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0100
     * @tc.name testUint8ArrayReduceRight001
     * @tc.desc Verify reduceRight with 2 parameters (callbackfn + initialValue) using addition accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight001() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(60, result);
    }

    /**
     * Verify reduceRight with callbackfn performing addition accumulation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0200
     * @tc.name testUint8ArrayReduceRight002
     * @tc.desc Verify reduceRight with callbackfn performing addition accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight002() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(10, result);
    }

    /**
     * Verify reduceRight with callbackfn performing multiplication accumulation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0300
     * @tc.name testUint8ArrayReduceRight003
     * @tc.desc Verify reduceRight with callbackfn performing multiplication accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight003() {
    Uint8Array arr = Uint8Array.of(3, 5, 7);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev * cur, 1);
    assertEqual(105, result);
    }

    /**
     * Verify reduceRight with subtraction to validate right-to-left order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0400
     * @tc.name testUint8ArrayReduceRight004
     * @tc.desc Verify reduceRight with subtraction to validate right-to-left order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight004() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev - cur, 0);
    assertEqual(-6, result);
    }

    /**
     * Verify reduceRight with string concatenation using U=string generic
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0500
     * @tc.name testUint8ArrayReduceRight005
     * @tc.desc Verify reduceRight with string concatenation using U=string generic
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight005() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    String result = arr.reduceRight((prev, cur, index, array) -> prev + String.valueOf(cur), "");
    assertEqual("302010", result);
    }

    /**
     * Verify reduceRight with string concatenation validating right-to-left index order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0600
     * @tc.name testUint8ArrayReduceRight006
     * @tc.desc Verify reduceRight with string concatenation validating right-to-left index order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight006() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduceRight((prev, cur, idx, index) -> prev + String.valueOf(idx), "");
    assertEqual("210", result);
    }

    /**
     * Verify reduceRight callbackfn with all 4 parameters and array equality
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0700
     * @tc.name testUint8ArrayReduceRight007
     * @tc.desc Verify reduceRight callbackfn with all 4 parameters and array equality
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight007() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    arr.reduceRight((prev, cur, idx, array) -> {
    assertEqual(arr, array);
    return prev + cur;
    }, 0);
    }

    /**
     * Verify reduceRight callbackfn index decrements from right to left
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0800
     * @tc.name testUint8ArrayReduceRight008
     * @tc.desc Verify reduceRight callbackfn index decrements from right to left
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight008() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int[] prevIdx = {3};
    arr.reduceRight((prev, cur, idx, index) -> {
    assertEqual(prevIdx[0], idx);
    prevIdx[0]--;
    return prev + cur;
    }, 0);
    }

    /**
     * Verify reduceRight callbackfn external counter increments with each iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_0900
     * @tc.name testUint8ArrayReduceRight009
     * @tc.desc Verify reduceRight callbackfn external counter increments with each iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight009() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] count = {0};
    int result = arr.reduceRight((prev, cur, index, array) -> {
        count[0]++;
        return prev + cur;
        }, 0);
    assertEqual(60, result);
    assertEqual(3, count[0]);
    }

    /**
     * Verify reduceRight callbackfn returns constant value ignoring input
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1000
     * @tc.name testUint8ArrayReduceRight010
     * @tc.desc Verify reduceRight callbackfn returns constant value ignoring input
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight010() {
    Uint8Array arr = Uint8Array.of(100, 200, 300);
    int result = arr.reduceRight((prev, cur, index, array) -> 42, 0);
    assertEqual(42, result);
    }

    /**
     * Verify reduceRight callbackfn reads array element via index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1100
     * @tc.name testUint8ArrayReduceRight011
     * @tc.desc Verify reduceRight callbackfn reads array element via index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight011() {
    Uint8Array arr = Uint8Array.of(2, 4, 6);
    int result = arr.reduceRight((prev, cur, idx, array) -> prev + array.get(idx), 0);
    assertEqual(12, result);
    }

    /**
     * Verify reduceRight callbackfn with multi-statement code block
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1200
     * @tc.name testUint8ArrayReduceRight012
     * @tc.desc Verify reduceRight callbackfn with multi-statement code block
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight012() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    int result = arr.reduceRight((prev, cur, index, array) -> {
        int tmp = prev + cur;
        return tmp;
        }, 0);
    assertEqual(18, result);
    }

    /**
     * Verify reduceRight callbackfn reads external scope variable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1300
     * @tc.name testUint8ArrayReduceRight013
     * @tc.desc Verify reduceRight callbackfn reads external scope variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight013() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int base = 10;
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur + base, 0);
    assertEqual(36, result);
    }

    /**
     * Verify reduceRight callbackfn with bitwise OR operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1400
     * @tc.name testUint8ArrayReduceRight014
     * @tc.desc Verify reduceRight callbackfn with bitwise OR operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight014() {
    Uint8Array arr = Uint8Array.of(1, 2, 4);
    int result = arr.reduceRight((prev, cur, index, array) -> prev | cur, 0);
    assertEqual(7, result);
    }

    /**
     * Verify reduceRight callbackfn calling Math.max method
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1500
     * @tc.name testUint8ArrayReduceRight015
     * @tc.desc Verify reduceRight callbackfn calling Math.max method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight015() {
    Uint8Array arr = Uint8Array.of(2, 4, 6);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + Math.max(cur, 3), 0);
    assertEqual(13, result);
    }

    /**
     * Verify reduceRight on single element array executes callback once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1600
     * @tc.name testUint8ArrayReduceRight016
     * @tc.desc Verify reduceRight on single element array executes callback once
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight016() {
    Uint8Array arr = Uint8Array.of(42);
    int[] callCount = {0};
    int result = arr.reduceRight((prev, cur, index, array) -> {
        callCount[0]++;
        return prev + cur;
        }, 0);
    assertEqual(42, result);
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify reduceRight on empty array returns initialValue without executing callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1700
     * @tc.name testUint8ArrayReduceRight017
     * @tc.desc Verify reduceRight on empty array returns initialValue without executing callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight017() {
    Uint8Array arr = new Uint8Array();
    int[] callCount = {0};
    int result = arr.reduceRight((prev, cur, index, array) -> {
        callCount[0]++;
        return prev + cur;
        }, 99);
    assertEqual(99, result);
    assertEqual(0, callCount[0]);
    }

    /**
     * Verify reduceRight callbackfn handling array with all identical values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1800
     * @tc.name testUint8ArrayReduceRight018
     * @tc.desc Verify reduceRight callbackfn handling array with all identical values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight018() {
    Uint8Array arr = Uint8Array.of(5, 5, 5);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(15, result);
    }

    /**
     * Verify reduceRight callbackfn validates cur is within 0-255 range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_1900
     * @tc.name testUint8ArrayReduceRight019
     * @tc.desc Verify reduceRight callbackfn validates cur is within 0-255 range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight019() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    arr.reduceRight((prev, cur, index, array) -> {
    assertTrue(cur >= 0);
    assertTrue(cur <= 255);
    return prev + cur;
    }, 0);
    }

    /**
     * Verify reduceRight callbackfn returns negative number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2000
     * @tc.name testUint8ArrayReduceRight020
     * @tc.desc Verify reduceRight callbackfn returns negative number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight020() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev - cur, 0);
    assertTrue(result < 0);
    }

    /**
     * Verify reduceRight callbackfn using ternary operator
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2100
     * @tc.name testUint8ArrayReduceRight021
     * @tc.desc Verify reduceRight callbackfn using ternary operator
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight021() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + (cur > 1 ? cur : 0), 0);
    assertEqual(5, result);
    }

    /**
     * Verify reduceRight callbackfn using division calculation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2200
     * @tc.name testUint8ArrayReduceRight022
     * @tc.desc Verify reduceRight callbackfn using division calculation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight022() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur / 10, 0);
    assertEqual(6, result);
    }

    /**
     * Verify reduceRight with interface type U generic accumulation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2300
     * @tc.name testUint8ArrayReduceRight023
     * @tc.desc Verify reduceRight with interface type U generic accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight023() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    SumCount initVal = new SumCount(0, 0);
    SumCount result = arr.reduceRightGeneric((prev, cur, index, array) -> {
        return new SumCount(prev.sum + cur, prev.count + 1);
        }, initVal);
    assertEqual(60, result.sum);
    assertEqual(3, result.count);
    }

    /**
     * Verify reduceRight with initialValue equal to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2400
     * @tc.name testUint8ArrayReduceRight024
     * @tc.desc Verify reduceRight with initialValue equal to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight024() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(6, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2500
     * @tc.name testUint8ArrayReduceRight025
     * @tc.desc Verify reduceRight with initialValue equal to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight025() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 1);
    assertEqual(7, result);
    }

    /**
     * Verify reduceRight with initialValue equal to -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2600
     * @tc.name testUint8ArrayReduceRight026
     * @tc.desc Verify reduceRight with initialValue equal to -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight026() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, -1);
    assertEqual(5, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2700
     * @tc.name testUint8ArrayReduceRight027
     * @tc.desc Verify reduceRight with initialValue equal to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 255);
    assertEqual(261, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2800
     * @tc.name testUint8ArrayReduceRight028
     * @tc.desc Verify reduceRight with initialValue equal to 256
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight028() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 256);
    assertEqual(262, result);
    }

    /**
     * Verify reduceRight with initialValue equal to -255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_2900
     * @tc.name testUint8ArrayReduceRight029
     * @tc.desc Verify reduceRight with initialValue equal to -255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight029() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, -255);
    assertEqual(-249, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3000
     * @tc.name testUint8ArrayReduceRight030
     * @tc.desc Verify reduceRight with initialValue equal to 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight030() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 127);
    assertEqual(133, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3100
     * @tc.name testUint8ArrayReduceRight031
     * @tc.desc Verify reduceRight with initialValue equal to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 128);
    assertEqual(134, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0.5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3200
     * @tc.name testUint8ArrayReduceRight032
     * @tc.desc Verify reduceRight with initialValue equal to 0.5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, 0.5);
    assertEqual(6.5, result);
    }

    /**
     * Verify reduceRight with initialValue equal to -0.5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3300
     * @tc.name testUint8ArrayReduceRight033
     * @tc.desc Verify reduceRight with initialValue equal to -0.5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight033() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, -0.5);
    assertEqual(5.5, result);
    }

    /**
     * Verify reduceRight with initialValue equal to NaN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3400
     * @tc.name testUint8ArrayReduceRight034
     * @tc.desc Verify reduceRight with initialValue equal to NaN
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight034() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, Double.NaN);
    assertTrue(true);
    }

    /**
     * Verify reduceRight with initialValue equal to Infinity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3500
     * @tc.name testUint8ArrayReduceRight035
     * @tc.desc Verify reduceRight with initialValue equal to Infinity
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight035() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, result);
    }

    /**
     * Verify reduceRight with initialValue equal to -Infinity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3600
     * @tc.name testUint8ArrayReduceRight036
     * @tc.desc Verify reduceRight with initialValue equal to -Infinity
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight036() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, Double.NEGATIVE_INFINITY);
    assertEqual(Double.NEGATIVE_INFINITY, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0x80 (hexadecimal 128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3700
     * @tc.name testUint8ArrayReduceRight037
     * @tc.desc Verify reduceRight with initialValue equal to 0x80 (hexadecimal 128)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight037() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0x80);
    assertEqual(134, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0xFF (hexadecimal 255)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3800
     * @tc.name testUint8ArrayReduceRight038
     * @tc.desc Verify reduceRight with initialValue equal to 0xFF (hexadecimal 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0xFF);
    assertEqual(261, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0x100 (hexadecimal 256)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_3900
     * @tc.name testUint8ArrayReduceRight039
     * @tc.desc Verify reduceRight with initialValue equal to 0x100 (hexadecimal 256)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0x100);
    assertEqual(262, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0b11111111 (binary 255)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4000
     * @tc.name testUint8ArrayReduceRight040
     * @tc.desc Verify reduceRight with initialValue equal to 0b11111111 (binary 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0b11111111);
    assertEqual(261, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0o377 (octal 255)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4100
     * @tc.name testUint8ArrayReduceRight041
     * @tc.desc Verify reduceRight with initialValue equal to 0o377 (octal 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0377);
    assertEqual(261, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 1e2 (scientific notation 100)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4200
     * @tc.name testUint8ArrayReduceRight042
     * @tc.desc Verify reduceRight with initialValue equal to 1e2 (scientific notation 100)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, 1e2);
    assertEqual(106, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 1e-2 (scientific notation 0.01)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4300
     * @tc.name testUint8ArrayReduceRight043
     * @tc.desc Verify reduceRight with initialValue equal to 1e-2 (scientific notation 0.01)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight043() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, 1e-2);
    assertEqual(6.01, result);
    }

    /**
     * Verify reduceRight with initialValue equal to empty string U=string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4400
     * @tc.name testUint8ArrayReduceRight044
     * @tc.desc Verify reduceRight with initialValue equal to empty string U=string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduceRight((prev, cur, index, array) -> prev + String.valueOf(cur), "");
    assertEqual("321", result);
    }

    /**
     * Verify reduceRight with initialValue equal to single character X string U=string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4500
     * @tc.name testUint8ArrayReduceRight045
     * @tc.desc Verify reduceRight with initialValue equal to single character X string U=string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduceRight((prev, cur, index, array) -> prev + String.valueOf(cur), "X");
    assertEqual("X321", result);
    }

    /**
     * Verify reduceRight with initialValue equal to numeric string 0 U=string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4600
     * @tc.name testUint8ArrayReduceRight046
     * @tc.desc Verify reduceRight with initialValue equal to numeric string 0 U=string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.reduceRight((prev, cur, index, array) -> prev + String.valueOf(cur), "0");
    assertEqual("0321", result);
    }

    /**
     * Verify reduceRight with initialValue equal to prefix string "init:" U=string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4700
     * @tc.name testUint8ArrayReduceRight047
     * @tc.desc Verify reduceRight with initialValue equal to prefix string "init:" U=string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight047() {
    Uint8Array arr = Uint8Array.of(10, 20);
    String result = arr.reduceRight((prev, cur, index, array) -> prev + String.valueOf(cur), "init:");
    assertEqual("init:2010", result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0x7F (hexadecimal 127)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4800
     * @tc.name testUint8ArrayReduceRight048
     * @tc.desc Verify reduceRight with initialValue equal to 0x7F (hexadecimal 127)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight048() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0x7F);
    assertEqual(133, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0b0 (binary 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_4900
     * @tc.name testUint8ArrayReduceRight049
     * @tc.desc Verify reduceRight with initialValue equal to 0b0 (binary 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0b0);
    assertEqual(6, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0o0 (octal 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5000
     * @tc.name testUint8ArrayReduceRight050
     * @tc.desc Verify reduceRight with initialValue equal to 0o0 (octal 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 00);
    assertEqual(6, result);
    }

    /**
     * Verify reduceRight with initialValue equal to 0.001 (very small positive number)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5100
     * @tc.name testUint8ArrayReduceRight051
     * @tc.desc Verify reduceRight with initialValue equal to 0.001 (very small positive number)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight051() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev + cur, 0.001);
    double diff = result - 6.001;
    assertTrue(diff < 1e-10 && diff > -1e-10);
    }

    /**
     * Verify reduceRight with initialValue equal to 1000000 (very large positive)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5200
     * @tc.name testUint8ArrayReduceRight052
     * @tc.desc Verify reduceRight with initialValue equal to 1000000 (very large positive)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight052() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 1000000);
    assertEqual(1000006, result);
    }

    /**
     * Verify reduceRight on empty array with initialValue returns initialValue
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5300
     * @tc.name testUint8ArrayReduceRight053
     * @tc.desc Verify reduceRight on empty array with initialValue returns initialValue
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight053() {
    Uint8Array arr = new Uint8Array();
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 42);
    assertEqual(42, result);
    }

    /**
     * Verify reduceRight on single element array with initialValue
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5400
     * @tc.name testUint8ArrayReduceRight054
     * @tc.desc Verify reduceRight on single element array with initialValue
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight054() {
    Uint8Array arr = Uint8Array.of(0);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 10);
    assertEqual(10, result);
    }

    /**
     * Verify reduceRight on single element array with element 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5500
     * @tc.name testUint8ArrayReduceRight055
     * @tc.desc Verify reduceRight on single element array with element 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight055() {
    Uint8Array arr = Uint8Array.of(255);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(255, result);
    }

    /**
     * Verify reduceRight on single element array with element 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5600
     * @tc.name testUint8ArrayReduceRight056
     * @tc.desc Verify reduceRight on single element array with element 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight056() {
    Uint8Array arr = Uint8Array.of(128);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(128, result);
    }

    /**
     * Verify reduceRight on single element array with element 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5700
     * @tc.name testUint8ArrayReduceRight057
     * @tc.desc Verify reduceRight on single element array with element 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight057() {
    Uint8Array arr = Uint8Array.of(127);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(127, result);
    }

    /**
     * Verify reduceRight on three-element array with all zeros
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5800
     * @tc.name testUint8ArrayReduceRight058
     * @tc.desc Verify reduceRight on three-element array with all zeros
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight058() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight on three-element array with boundary values 255 and 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_5900
     * @tc.name testUint8ArrayReduceRight059
     * @tc.desc Verify reduceRight on three-element array with boundary values 255 and 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight059() {
    Uint8Array arr = Uint8Array.of(255, 0, 255);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(510, result);
    }

    /**
     * Verify reduceRight on three-element array with increasing values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6000
     * @tc.name testUint8ArrayReduceRight060
     * @tc.desc Verify reduceRight on three-element array with increasing values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight060() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(382, result);
    }

    /**
     * Verify reduceRight on five-element increasing array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6100
     * @tc.name testUint8ArrayReduceRight061
     * @tc.desc Verify reduceRight on five-element increasing array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(15, result);
    }

    /**
     * Verify reduceRight on length 100 array with all ones
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6200
     * @tc.name testUint8ArrayReduceRight062
     * @tc.desc Verify reduceRight on length 100 array with all ones
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight062() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, 1);
    }
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(100, result);
    }

    /**
     * Verify reduceRight on array with hexadecimal literal elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6300
     * @tc.name testUint8ArrayReduceRight063
     * @tc.desc Verify reduceRight on array with hexadecimal literal elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight063() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 0x0A);
    arr.set(1, 0x10);
    arr.set(2, 0xFF);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(0x0A + 0x10 + 0xFF, result);
    }

    /**
     * Verify reduceRight on array with all 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6400
     * @tc.name testUint8ArrayReduceRight064
     * @tc.desc Verify reduceRight on array with all 42
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight064() {
    Uint8Array arr = Uint8Array.of(42, 42, 42);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(126, result);
    }

    /**
     * Verify reduceRight on constructor-created array with index assignment
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6500
     * @tc.name testUint8ArrayReduceRight065
     * @tc.desc Verify reduceRight on constructor-created array with index assignment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight065() {
    Uint8Array arr = new Uint8Array(4);
    arr.set(0, 1);
    arr.set(1, 3);
    arr.set(2, 5);
    arr.set(3, 7);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(16, result);
    }

    /**
     * Verify reduceRight on array with overflow value truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6600
     * @tc.name testUint8ArrayReduceRight066
     * @tc.desc Verify reduceRight on array with overflow value truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight066() {
    Uint8Array arr = new Uint8Array(2);
    arr.set(0, 0);
    arr.set(1, 256);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight on array with negative value -1 wrapped to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6700
     * @tc.name testUint8ArrayReduceRight067
     * @tc.desc Verify reduceRight on array with negative value -1 wrapped to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight067() {
    Uint8Array arr = new Uint8Array(2);
    arr.set(0, -1);
    arr.set(1, 1);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + cur, 0);
    assertEqual(256, result);
    }

    /**
     * Verify reduceRight with multiplication for array [2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6800
     * @tc.name testUint8ArrayReduceRight068
     * @tc.desc Verify reduceRight with multiplication for array [2, 3, 4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight068() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    double result = arr.reduceRightDouble((prev, cur, index, array) -> prev * cur, 1);
    assertEqual(24, result);
    }

    /**
     * Verify reduceRight with max selection for array [5, 10, 15]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_6900
     * @tc.name testUint8ArrayReduceRight069
     * @tc.desc Verify reduceRight with max selection for array [5, 10, 15]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight069() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.reduceRight((prev, cur, index, array) -> prev > cur ? prev : cur, 0);
    assertEqual(15, result);
    }

    /**
     * Verify reduceRight with min selection for array [5, 10, 15]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7000
     * @tc.name testUint8ArrayReduceRight070
     * @tc.desc Verify reduceRight with min selection for array [5, 10, 15]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight070() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.reduceRight((prev, cur, index, array) -> prev < cur ? prev : cur, 255);
    assertEqual(5, result);
    }

    /**
     * Verify reduceRight with count-only callback for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7100
     * @tc.name testUint8ArrayReduceRight071
     * @tc.desc Verify reduceRight with count-only callback for array [1, 2, 3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight071() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev + 1, 0);
    assertEqual(3, result);
    }

    /**
     * Verify reduceRight with XOR for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7200
     * @tc.name testUint8ArrayReduceRight072
     * @tc.desc Verify reduceRight with XOR for array [1, 2, 3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight072() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, cur, index, array) -> prev ^ cur, 0);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight with string concatenation length for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7300
     * @tc.name testUint8ArrayReduceRight073
     * @tc.desc Verify reduceRight with string concatenation length for array [10, 20, 30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight073() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    String result = arr.reduceRight((prev, cur, index, array) -> prev + String.valueOf(cur), "");
    assertEqual(6, result.length());
    }

    /**
     * Verify reduceRight with boolean result for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7400
     * @tc.name testUint8ArrayReduceRight074
     * @tc.desc Verify reduceRight with boolean result for array [1, 2, 3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean result = arr.reduceRight((prev, cur, index, array) -> prev && cur > 0, true);
    assertTrue(result);
    }

    /**
     * Verify reduceRight with Result class generic type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7500
     * @tc.name testUint8ArrayReduceRight075
     * @tc.desc Verify reduceRight with Result class generic type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Result result = arr.reduceRightGeneric((prev, cur, index, array) -> {
        return new Result(prev.sum + cur, prev.count + 1);
        }, new Result(0, 0));
    assertEqual(6, result.sum);
    assertEqual(3, result.count);
    }

    /**
     * Verify reduceRight with array reconstruction preserving original order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7600
     * @tc.name testUint8ArrayReduceRight076
     * @tc.desc Verify reduceRight with array reconstruction preserving original order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight076() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    List<Integer> result = arr.reduceRightList((prev, cur, index, array) -> {
        return BasTest.prepend(cur, prev);
        }, new java.util.ArrayList<>());
    assertEqual(3, result.size());
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7700
     * @tc.name testUint8ArrayReduceRight077
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight077() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is null
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7800
     * @tc.name testUint8ArrayReduceRight078
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is null
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight078() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is not a function (string)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_7900
     * @tc.name testUint8ArrayReduceRight079
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is not a function (string)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight079() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    String invalidCallback = "not a function";
    Object cb = invalidCallback;
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_8000
     * @tc.name testUint8ArrayReduceRight080
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight080() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    int invalidCallback = 123;
    Object cb = invalidCallback;
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is boolean
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_8100
     * @tc.name testUint8ArrayReduceRight081
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is boolean
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight081() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    boolean invalidCallback = true;
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_8200
     * @tc.name testUint8ArrayReduceRight082
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight082() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    Object invalidCallback = new Uint8Array(0);
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_8300
     * @tc.name testUint8ArrayReduceRight083
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight083() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    List<Integer> invalidCallback = new ArrayList<>();
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight throws ClassCastError when callbackfn is a symbol string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT01_8400
     * @tc.name testUint8ArrayReduceRight084
     * @tc.desc Verify reduceRight throws ClassCastError when callbackfn is a symbol string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight084() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    String invalidCallback = "symbol";
    Object cb = invalidCallback;
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }
}
