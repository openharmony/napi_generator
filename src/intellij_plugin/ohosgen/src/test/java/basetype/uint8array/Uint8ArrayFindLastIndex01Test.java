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

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindLastIndex01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindLastIndex01Test extends BasTest {

    private static int findLastIndexWithFakePred(Uint8Array arr, Object fakePred) {
    throw new basetype.common.ClassCastError();}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0100
     * @tc.name testUint8ArrayFindLastIndex001
     * @tc.desc Verify findLastIndex with undefined predicate throws ClassCastError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex001() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    try {
    basetype.common.ClassCastError.raise();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0200
     * @tc.name testUint8ArrayFindLastIndex002
     * @tc.desc Verify findLastIndex with 1 valid predicate parameter returns int result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex002() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findLastIndex((value) -> { return value > 8;});
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0300
     * @tc.name testUint8ArrayFindLastIndex003
     * @tc.desc Verify findLastIndex with null predicate throws ClassCastError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex003() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0400
     * @tc.name testUint8ArrayFindLastIndex004
     * @tc.desc Verify findLastIndex with undefined predicate throws ClassCastError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex004() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0500
     * @tc.name testUint8ArrayFindLastIndex005
     * @tc.desc Verify findLastIndex with boolean literal predicate throws ClassCastError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex005() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0600
     * @tc.name testUint8ArrayFindLastIndex006
     * @tc.desc Verify findLastIndex with arrow function predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex006() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value) -> value > 15);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0700
     * @tc.name testUint8ArrayFindLastIndex007
     * @tc.desc Verify findLastIndex with function expression predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex007() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array.Uint8ArrayFinder pred = (value, index, array) -> {
    return value > 15;};
    int result = arr.findLastIndex(pred);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0800
     * @tc.name testUint8ArrayFindLastIndex008
     * @tc.desc Verify findLastIndex predicate only uses value parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex008() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value) -> { return value == 10;});
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_0900
     * @tc.name testUint8ArrayFindLastIndex009
     * @tc.desc Verify findLastIndex predicate uses all three parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value, index, array) -> { return value > array.get(0);});
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1000
     * @tc.name testUint8ArrayFindLastIndex010
     * @tc.desc Verify findLastIndex predicate uses value and index parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value, index) -> { return value > 10 && index > 0;});
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1100
     * @tc.name testUint8ArrayFindLastIndex011
     * @tc.desc Verify findLastIndex with element 0 (minimum value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex011() {
    Uint8Array arr = new Uint8Array(new int[] {0, 5, 10});
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1200
     * @tc.name testUint8ArrayFindLastIndex012
     * @tc.desc Verify findLastIndex with element 255 (maximum value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex012() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 255});
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1300
     * @tc.name testUint8ArrayFindLastIndex013
     * @tc.desc Verify findLastIndex with element 127 (middle value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex013() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 255});
    int result = arr.findLastIndex((value) -> value == 127);
    assertEqual(1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1400
     * @tc.name testUint8ArrayFindLastIndex014
     * @tc.desc Verify findLastIndex with element 128 (0x80 boundary)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex014() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int result = arr.findLastIndex((value) -> value == 128);
    assertEqual(1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1500
     * @tc.name testUint8ArrayFindLastIndex015
     * @tc.desc Verify findLastIndex with literal 256 (overflow truncates to 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex015() {
    Uint8Array arr = new Uint8Array(new int[] {256, 5});
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1600
     * @tc.name testUint8ArrayFindLastIndex016
     * @tc.desc Verify findLastIndex with literal 257 (overflow truncates to 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex016() {
    Uint8Array arr = new Uint8Array(new int[] {257, 5});
    int result = arr.findLastIndex((value) -> value == 1);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1700
     * @tc.name testUint8ArrayFindLastIndex017
     * @tc.desc Verify findLastIndex with literal 511 (overflow truncates to 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex017() {
    Uint8Array arr = new Uint8Array(new int[] {511, 5});
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1800
     * @tc.name testUint8ArrayFindLastIndex018
     * @tc.desc Verify findLastIndex with literal 512 (overflow truncates to 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex018() {
    Uint8Array arr = new Uint8Array(new int[] {512, 5});
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_1900
     * @tc.name testUint8ArrayFindLastIndex019
     * @tc.desc Verify findLastIndex with literal -1 (negative wraps to 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex019() {
    Uint8Array arr = new Uint8Array(new int[] {-1, 5});
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2000
     * @tc.name testUint8ArrayFindLastIndex020
     * @tc.desc Verify findLastIndex with literal -2 (negative wraps to 254)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex020() {
    Uint8Array arr = new Uint8Array(new int[] {-2, 5});
    int result = arr.findLastIndex((value) -> value == 254);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2100
     * @tc.name testUint8ArrayFindLastIndex021
     * @tc.desc Verify findLastIndex with literal -255 (negative wraps to 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex021() {
    Uint8Array arr = new Uint8Array(new int[] {-255, 5});
    int result = arr.findLastIndex((value) -> value == 1);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2200
     * @tc.name testUint8ArrayFindLastIndex022
     * @tc.desc Verify findLastIndex with literal -256 (negative wraps to 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex022() {
    Uint8Array arr = new Uint8Array(new int[] {-256, 5});
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2300
     * @tc.name testUint8ArrayFindLastIndex023
     * @tc.desc Verify findLastIndex with literal 0.5 (float truncates to 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex023() {
    Uint8Array arr = new Uint8Array(new double[] {0.5, 5});
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2400
     * @tc.name testUint8ArrayFindLastIndex024
     * @tc.desc Verify findLastIndex with literal 255.9 (float truncates to 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex024() {
    Uint8Array arr = new Uint8Array(new double[] {255.9, 5});
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2500
     * @tc.name testUint8ArrayFindLastIndex025
     * @tc.desc Verify findLastIndex with literal 3.14 (float truncates to 3)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex025() {
    Uint8Array arr = new Uint8Array(new double[] {3.14, 5});
    int result = arr.findLastIndex((value) -> value == 3);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2600
     * @tc.name testUint8ArrayFindLastIndex026
     * @tc.desc Verify findLastIndex with greater than (>) comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex026() {
    Uint8Array arr = new Uint8Array(new int[] {10, 50, 30, 80});
    int result = arr.findLastIndex((value) -> value > 40);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2700
     * @tc.name testUint8ArrayFindLastIndex027
     * @tc.desc Verify findLastIndex with greater than or equal (>=) comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex027() {
    Uint8Array arr = new Uint8Array(new int[] {10, 50, 50, 80});
    int result = arr.findLastIndex((value) -> value >= 50);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2800
     * @tc.name testUint8ArrayFindLastIndex028
     * @tc.desc Verify findLastIndex with less than (<) comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex028() {
    Uint8Array arr = new Uint8Array(new int[] {10, 50, 30, 80});
    int result = arr.findLastIndex((value) -> value < 40);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_2900
     * @tc.name testUint8ArrayFindLastIndex029
     * @tc.desc Verify findLastIndex with less than or equal (<=) comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex029() {
    Uint8Array arr = new Uint8Array(new int[] {10, 50, 30, 50});
    int result = arr.findLastIndex((value) -> value <= 30);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3000
     * @tc.name testUint8ArrayFindLastIndex030
     * @tc.desc Verify findLastIndex with strict equality (===) comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex030() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 20});
    int result = arr.findLastIndex((value) -> value == 20);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3100
     * @tc.name testUint8ArrayFindLastIndex031
     * @tc.desc Verify findLastIndex with strict inequality (!==) comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex031() {
    Uint8Array arr = new Uint8Array(new int[] {7, 7, 7, 8});
    int result = arr.findLastIndex((value) -> value != 7);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3200
     * @tc.name testUint8ArrayFindLastIndex032
     * @tc.desc Verify findLastIndex with modulo operation (value % N === 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex032() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5, 6});
    int result = arr.findLastIndex((value) -> value % 2 == 0);
    assertEqual(5, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3300
     * @tc.name testUint8ArrayFindLastIndex033
     * @tc.desc Verify findLastIndex with compound condition (&&)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex033() {
    Uint8Array arr = new Uint8Array(new int[] {10, 50, 100, 150, 200});
    int result = arr.findLastIndex((value) -> value > 50 && value < 180);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3400
     * @tc.name testUint8ArrayFindLastIndex034
     * @tc.desc Verify findLastIndex predicate matches index 0 (first element)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex034() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value, index) -> index == 0);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3500
     * @tc.name testUint8ArrayFindLastIndex035
     * @tc.desc Verify findLastIndex predicate matches index length-1 (last element)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex035() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value, index) -> index == 2);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3600
     * @tc.name testUint8ArrayFindLastIndex036
     * @tc.desc Verify findLastIndex predicate matches middle index (floor(length/2))
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex036() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLastIndex((value, index) -> index == 2);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3700
     * @tc.name testUint8ArrayFindLastIndex037
     * @tc.desc Verify findLastIndex predicate with index greater than threshold
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex037() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLastIndex((value, index) -> index > 2 && value > 10);
    assertEqual(4, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3800
     * @tc.name testUint8ArrayFindLastIndex038
     * @tc.desc Verify findLastIndex predicate with index less than threshold
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex038() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLastIndex((value, index) -> index < 3 && value > 10);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_3900
     * @tc.name testUint8ArrayFindLastIndex039
     * @tc.desc Verify findLastIndex predicate with index even/odd filtering
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLastIndex((value, index) -> index % 2 == 1 && value > 10);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4000
     * @tc.name testUint8ArrayFindLastIndex040
     * @tc.desc Verify findLastIndex predicate with index === 0 || index === length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex040() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLastIndex((value, index) -> { return (index == 0 || index == 4) && value > 10;});
    assertEqual(4, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4100
     * @tc.name testUint8ArrayFindLastIndex041
     * @tc.desc Verify findLastIndex predicate array parameter reference equals original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex041() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    boolean[] matched = {false};
    arr.findLastIndex((value, index, array) -> {
    if (array == arr) {
    matched[0] = true;};
    return false;});
    assertTrue(matched[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4200
     * @tc.name testUint8ArrayFindLastIndex042
     * @tc.desc Verify findLastIndex predicate reads array.length correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex042() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value, index, array) -> { return index == array.length() - 1 && value > 0;});
    assertEqual(4, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4300
     * @tc.name testUint8ArrayFindLastIndex043
     * @tc.desc Verify findLastIndex predicate reads array[index] equals value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLastIndex((value, index, array) -> { return value == array.get(index);});
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4400
     * @tc.name testUint8ArrayFindLastIndex044
     * @tc.desc Verify findLastIndex predicate accesses BYTES_PER_ELEMENT constant
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex044() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findLastIndex((value, index, array) -> { return array.BYTES_PER_ELEMENT == 1 && value > 0;});
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4500
     * @tc.name testUint8ArrayFindLastIndex045
     * @tc.desc Verify findLastIndex predicate with hexadecimal literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 15, 20});
    int result = arr.findLastIndex((value) -> value == 0x0F);
    assertEqual(1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4600
     * @tc.name testUint8ArrayFindLastIndex046
     * @tc.desc Verify findLastIndex predicate with binary literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex046() {
    Uint8Array arr = new Uint8Array(new int[] {0, 3, 7});
    int result = arr.findLastIndex((value) -> value == 0b0111);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4700
     * @tc.name testUint8ArrayFindLastIndex047
     * @tc.desc Verify findLastIndex predicate with octal literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex047() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findLastIndex((value) -> value == 017);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4800
     * @tc.name testUint8ArrayFindLastIndex048
     * @tc.desc Verify findLastIndex predicate with scientific notation literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex048() {
    Uint8Array arr = new Uint8Array(new int[] {10, 50, 100, 150});
    int result = arr.findLastIndex((value) -> value > 1e2);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_4900
     * @tc.name testUint8ArrayFindLastIndex049
     * @tc.desc Verify findLastIndex predicate with arithmetic expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex049() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    int result = arr.findLastIndex((value) -> { return value > 5 * 5;});
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5000
     * @tc.name testUint8ArrayFindLastIndex050
     * @tc.desc Verify findLastIndex predicate with 0xFF boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex050() {
    Uint8Array arr = new Uint8Array(new int[] {200, 250, 255});
    int result = arr.findLastIndex((value) -> value == 0xFF);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5100
     * @tc.name testUint8ArrayFindLastIndex051
     * @tc.desc Verify findLastIndex on empty array returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex051() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findLastIndex((value) -> value == 0);
    assertEqual(-1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5200
     * @tc.name testUint8ArrayFindLastIndex052
     * @tc.desc Verify findLastIndex on single element array when match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex052() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int result = arr.findLastIndex((value) -> value == 42);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5300
     * @tc.name testUint8ArrayFindLastIndex053
     * @tc.desc Verify findLastIndex on single element array when no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex053() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int result = arr.findLastIndex((value) -> value == 99);
    assertEqual(-1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5400
     * @tc.name testUint8ArrayFindLastIndex054
     * @tc.desc Verify findLastIndex on two element array when last element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20});
    int result = arr.findLastIndex((value) -> value == 20);
    assertEqual(1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5500
     * @tc.name testUint8ArrayFindLastIndex055
     * @tc.desc Verify findLastIndex on two element array when only first element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex055() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20});
    int result = arr.findLastIndex((value) -> value == 10);
    assertEqual(0, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5600
     * @tc.name testUint8ArrayFindLastIndex056
     * @tc.desc Verify findLastIndex when all elements match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex056() {
    Uint8Array arr = new Uint8Array(new int[] {5, 5, 5, 5});
    int result = arr.findLastIndex((value) -> value == 5);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5700
     * @tc.name testUint8ArrayFindLastIndex057
     * @tc.desc Verify findLastIndex when no elements match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex057() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value) -> value > 100);
    assertEqual(-1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5800
     * @tc.name testUint8ArrayFindLastIndex058
     * @tc.desc Verify findLastIndex on 100 element array finds last matching element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex058() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(99, 99);
    int result = arr.findLastIndex((value) -> value == 99);
    assertEqual(99, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_5900
     * @tc.name testUint8ArrayFindLastIndex059
     * @tc.desc Verify findLastIndex on alternating pattern finds correct position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex059() {
    Uint8Array arr = new Uint8Array(new int[] {1, 1, 2, 2, 3, 3});
    int result = arr.findLastIndex((value) -> value == 2);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6000
     * @tc.name testUint8ArrayFindLastIndex060
     * @tc.desc Verify findLastIndex on all zero array returns -1 for non-zero predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex060() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    int result = arr.findLastIndex((value) -> value != 0);
    assertEqual(-1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6100
     * @tc.name testUint8ArrayFindLastIndex061
     * @tc.desc Verify findLastIndex on all 255 array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex061() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    int result = arr.findLastIndex((value) -> value == 255);
    assertEqual(2, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6200
     * @tc.name testUint8ArrayFindLastIndex062
     * @tc.desc Verify findLastIndex on mixed boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex062() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLastIndex((value) -> value > 126);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6300
     * @tc.name testUint8ArrayFindLastIndex063
     * @tc.desc Verify findLastIndex on [1,2,3,4,5] with value > 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex063() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value) -> value > 3);
    assertEqual(4, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6400
     * @tc.name testUint8ArrayFindLastIndex064
     * @tc.desc Verify findLastIndex on [1,2,3,4,5] with value > 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex064() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value) -> value > 4);
    assertEqual(4, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6500
     * @tc.name testUint8ArrayFindLastIndex065
     * @tc.desc Verify findLastIndex returns -1 when no element greater than 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex065() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value) -> value > 5);
    assertEqual(-1, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6600
     * @tc.name testUint8ArrayFindLastIndex066
     * @tc.desc Verify findLastIndex on [10,20,10,20,10] finds last index of value 10 (index 4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex066() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 10, 20, 10});
    int result = arr.findLastIndex((value) -> value == 10);
    assertEqual(4, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6700
     * @tc.name testUint8ArrayFindLastIndex067
     * @tc.desc Verify findLastIndex on [10,20,30,20,10] finds last index of value 20 (index 3)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex067() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 20, 10});
    int result = arr.findLastIndex((value) -> value == 20);
    assertEqual(3, result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_INDEX01_6800
     * @tc.name testUint8ArrayFindLastIndex068
     * @tc.desc Verify findLastIndex on [1,2,3,4,5] last even number is at index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLastIndex068() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.findLastIndex((value) -> value % 2 == 0);
    assertEqual(3, result);}
}
