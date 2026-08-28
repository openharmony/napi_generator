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
 * Uint8ClampedArrayEvery02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayEvery02Test extends BasTest {
    /**
     * Verify every result is true for array [0, 128, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0100
     * @tc.name testUint8ClampedArrayEveryTwo001
     * @tc.desc Verify every result is true for array [0, 128, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 128, 255});
    boolean r = arr.every((e, i, a) -> e >= 0 && e <= 255);
    assertTrue(r);
    }

    /**
     * Verify every integer elements Math.floor
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0200
     * @tc.name testUint8ClampedArrayEveryTwo002
     * @tc.desc Verify every integer elements Math.floor
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> (int) (e) == e);
    assertTrue(r);
    }

    /**
     * Verify every invokes an always-true predicate once per element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0300
     * @tc.name testUint8ClampedArrayEveryTwo003
     * @tc.desc Verify every invokes an always-true predicate once per element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return true;
    });
    assertTrue(r);
    assertEqual(3, calls[0]);
    }

    /**
     * Verify every stops after the first call when the predicate is false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0400
     * @tc.name testUint8ClampedArrayEveryTwo004
     * @tc.desc Verify every stops after the first call when the predicate is false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return false;
    });
    assertFalse(r);
    assertEqual(1, calls[0]);
    }

    /**
     * Verify every true predicate strictEqual true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0500
     * @tc.name testUint8ClampedArrayEveryTwo005
     * @tc.desc Verify every true predicate strictEqual true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    }

    /**
     * Verify every false predicate strictEqual false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0600
     * @tc.name testUint8ClampedArrayEveryTwo006
     * @tc.desc Verify every false predicate strictEqual false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> e != 2);
    assertFalse(r);
    }

    /**
     * Verify every true predicate assertTrue and false predicate assertFalse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0700
     * @tc.name testUint8ClampedArrayEveryTwo007
     * @tc.desc Verify every true predicate assertTrue and false predicate assertFalse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r1 = arr.every((e, i, a) -> true);
    boolean r2 = arr.every((e, i, a) -> false);
    assertTrue(r1);
    assertFalse(r2);
    }

    /**
     * Verify every true predicate returns true and array length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0800
     * @tc.name testUint8ClampedArrayEveryTwo008
     * @tc.desc Verify every true predicate returns true and array length unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    assertEqual(4, arr.length());
    }

    /**
     * Verify every element at arr[0] equals 10 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_0900
     * @tc.name testUint8ClampedArrayEveryTwo009
     * @tc.desc Verify every element at arr[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify every element at arr[1] equals 20 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1000
     * @tc.name testUint8ClampedArrayEveryTwo010
     * @tc.desc Verify every element at arr[1] equals 20 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    assertEqual(20, arr.get(1));
    }

    /**
     * Verify every element at arr[2] equals 30 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1100
     * @tc.name testUint8ClampedArrayEveryTwo011
     * @tc.desc Verify every element at arr[2] equals 30 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify every yields byteLength before for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1200
     * @tc.name testUint8ClampedArrayEveryTwo012
     * @tc.desc Verify every yields byteLength before for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.byteLength();
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify every buffer reference matches for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1300
     * @tc.name testUint8ClampedArrayEveryTwo013
     * @tc.desc Verify every buffer reference matches for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer buf = arr.buffer();
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify every false predicate preserves array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1400
     * @tc.name testUint8ClampedArrayEveryTwo014
     * @tc.desc Verify every false predicate preserves array elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> false);
    assertFalse(r);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify every predicate throws Error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1500
     * @tc.name testUint8ClampedArrayEveryTwo015
     * @tc.desc Verify every predicate throws Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.every((e, i, a) -> {
    return BasTest.throwTestError("predicate fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates TypeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1600
     * @tc.name testUint8ClampedArrayEveryTwo016
     * @tc.desc Verify every propagates TypeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.every((e, i, a) -> {
    throw new TypeError("bad type");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates RangeError thrown by the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1700
     * @tc.name testUint8ClampedArrayEveryTwo017
     * @tc.desc Verify every propagates RangeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.every((e, i, a) -> {
    throw new RangeError("out of range");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every predicate stops on thrown Error after 1 visit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1800
     * @tc.name testUint8ClampedArrayEveryTwo018
     * @tc.desc Verify every predicate stops on thrown Error after 1 visit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo018() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    try {
    arr.every((e, i, a) -> {
    visits[0] = visits[0] + 1;
    return BasTest.throwTestError("stop");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, visits[0]);
    }

    /**
     * Verify every stops at index 1 with 2 visits when predicate throws
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_1900
     * @tc.name testUint8ClampedArrayEveryTwo019
     * @tc.desc Verify every stops at index 1 with 2 visits when predicate throws
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo019() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    try {
    arr.every((e, i, a) -> {
    visits[0] = visits[0] + 1;
    if (i == 1) {
    return BasTest.throwTestError("stop at 1");
    }
    return true;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(2, visits[0]);
    }

    /**
     * Verify every predicate throws Error at index 3 after 4 visits
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2000
     * @tc.name testUint8ClampedArrayEveryTwo020
     * @tc.desc Verify every predicate throws Error at index 3 after 4 visits
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo020() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    try {
    arr.every((e, i, a) -> {
    visits[0] = visits[0] + 1;
    if (i == 3) {
    return BasTest.throwTestError("stop at 3");
    }
    return true;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(4, visits[0]);
    }

    /**
     * Verify every predicate throws Error preserves array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2100
     * @tc.name testUint8ClampedArrayEveryTwo021
     * @tc.desc Verify every predicate throws Error preserves array elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.every((e, i, a) -> {
    return BasTest.throwTestError("e");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify every predicate throws Error on element 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2200
     * @tc.name testUint8ClampedArrayEveryTwo022
     * @tc.desc Verify every predicate throws Error on element 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 100, 3});
    try {
    arr.every((e, i, a) -> {
    if (e == 100) {
    return BasTest.throwTestError("hit 100");
    }
    return true;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every predicate returns false on element 0 without reaching 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2300
     * @tc.name testUint8ClampedArrayEveryTwo023
     * @tc.desc Verify every predicate returns false on element 0 without reaching 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0, 100});
    boolean r = arr.every((e, i, a) -> {
        if (e == 100) {
            return BasTest.throwTestError("must not reach");
        }
        return e != 0;
    });
    assertFalse(r);
    }

    /**
     * Verify every throws Error when predicate hits element 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2400
     * @tc.name testUint8ClampedArrayEveryTwo024
     * @tc.desc Verify every throws Error when predicate hits element 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 100, 0});
    try {
    arr.every((e, i, a) -> {
    if (e == 100) {
    return BasTest.throwTestError("hit");
    }
    return e != 0;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every repeated calls return equal results for e>0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2500
     * @tc.name testUint8ClampedArrayEveryTwo025
     * @tc.desc Verify every repeated calls return equal results for e>0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r1 = arr.every((e, i, a) -> e > 0);
    boolean r2 = arr.every((e, i, a) -> e > 0);
    assertEqual(r2, r1);
    }

    /**
     * Verify every predicate nested every on second array e2>=10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2600
     * @tc.name testUint8ClampedArrayEveryTwo026
     * @tc.desc Verify every predicate nested every on second array e2>=10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo026() {
    Uint8ClampedArray arr1 = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr1.every((e, i, a) -> {
        return arr2.every((e2, i2, a2) -> e2 >= 10);
        });
    assertTrue(r);
    }

    /**
     * Verify nested every on same array via predicate's a parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2700
     * @tc.name testUint8ClampedArrayEveryTwo027
     * @tc.desc Verify nested every on same array via predicate's a parameter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 1, 1});
    boolean r = arr.every((e, i, a) -> {
        return a.every((e2, i2, a2) -> e2 == 1);
        });
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2800
     * @tc.name testUint8ClampedArrayEveryTwo028
     * @tc.desc Verify every result is true for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] passed = {false};
    if (arr.every((e, i, a) -> e > 0)) {
    passed[0] = true;
    }
    assertTrue(passed[0]);
    }

    /**
     * Verify every true combined with length===3 short-circuit
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_2900
     * @tc.name testUint8ClampedArrayEveryTwo029
     * @tc.desc Verify every true combined with length===3 short-circuit
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> e > 0) && arr.length() == 3;
    assertTrue(r);
    }

    /**
     * Verify every returns false when the subarray predicate reaches zero at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3000
     * @tc.name testUint8ClampedArrayEveryTwo030
     * @tc.desc Verify every returns false when the subarray predicate reaches zero at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo030() {
    int[] visits = {0};
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 0, 4, 5});
    Uint8ClampedArray sub = parent.subarray(0, 5);
    boolean r = sub.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertFalse(r);
    assertEqual(3, visits[0]);
    }

    /**
     * Verify every on empty subarray returns true (vacuous truth)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3100
     * @tc.name testUint8ClampedArrayEveryTwo031
     * @tc.desc Verify every on empty subarray returns true (vacuous truth)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo031() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = parent.subarray(1, 1);
    boolean r = sub.every((e, i, a) -> false);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements >= 10 for from(src) result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3200
     * @tc.name testUint8ClampedArrayEveryTwo032
     * @tc.desc Verify every returns true when all elements >= 10 for from(src) result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo032() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    boolean r = arr.every((e, i, a) -> e >= 10);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements === 5 for of(5, 5, 5)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3300
     * @tc.name testUint8ClampedArrayEveryTwo033
     * @tc.desc Verify every returns true when all elements === 5 for of(5, 5, 5)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo033() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(5, 5, 5);
    boolean r = arr.every((e, i, a) -> e == 5);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements equal fill value for length-10 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3400
     * @tc.name testUint8ClampedArrayEveryTwo034
     * @tc.desc Verify every returns true when all elements equal fill value for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    arr.fill(42);
    boolean r = arr.every((e, i, a) -> e == 42);
    assertTrue(r);
    }

    /**
     * Verify every predicate e===10 false after setting index 2 to 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3500
     * @tc.name testUint8ClampedArrayEveryTwo035
     * @tc.desc Verify every predicate e===10 false after setting index 2 to 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    arr.fill(10);
    arr.set(2, 99);
    boolean r = arr.every((e, i, a) -> e == 10);
    assertFalse(r);
    }

    /**
     * Verify every returns true and invokes the predicate once per element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3600
     * @tc.name testUint8ClampedArrayEveryTwo036
     * @tc.desc Verify every returns true and invokes the predicate once per element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo036() {
    int[] calls = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7});
    boolean r = arr.every((e, i, a) -> {
        calls[0] = calls[0] + 1;
        return true;
    });
    assertTrue(r);
    assertEqual(arr.length(), calls[0]);
    }

    /**
     * Verify every predicate element greater than index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3700
     * @tc.name testUint8ClampedArrayEveryTwo037
     * @tc.desc Verify every predicate element greater than index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    boolean r = arr.every((e, i, a) -> e > i);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3800
     * @tc.name testUint8ClampedArrayEveryTwo038
     * @tc.desc Verify every result is true for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> i == 0 || e >= a.get(i - 1));
    assertTrue(r);
    }

    /**
     * Verify every visits all 1024 elements when predicate true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_3900
     * @tc.name testUint8ClampedArrayEveryTwo039
     * @tc.desc Verify every visits all 1024 elements when predicate true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo039() {
    int[] calls = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(1);
    boolean r = arr.every((e, i, a) -> {
        calls[0] = calls[0] + 1;
        return true;
    });
    assertEqual(1024, calls[0]);
    assertTrue(r);
    }

    /**
     * Verify every stops at 501 calls when predicate false on 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4000
     * @tc.name testUint8ClampedArrayEveryTwo040
     * @tc.desc Verify every stops at 501 calls when predicate false on 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo040() {
    int[] calls = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(1);
    arr.set(500, 0);
    boolean r = arr.every((e, i, a) -> {
        calls[0] = calls[0] + 1;
        return e != 0;
    });
    assertEqual(501, calls[0]);
    assertFalse(r);
    }

    /**
     * Verify every predicate true pushes all 4 indices
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4100
     * @tc.name testUint8ClampedArrayEveryTwo041
     * @tc.desc Verify every predicate true pushes all 4 indices
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo041() {
    List<Integer> seen = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    boolean r = arr.every((e, i, a) -> {
        seen.add(i);
        return true;
    });
    assertEqual(4, seen.size());
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4200
     * @tc.name testUint8ClampedArrayEveryTwo042
     * @tc.desc Verify every result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> Math.max(e, 0) == e);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4300
     * @tc.name testUint8ClampedArrayEveryTwo043
     * @tc.desc Verify every result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> Math.min(e, 255) == e);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [7, 7, 7, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4400
     * @tc.name testUint8ClampedArrayEveryTwo044
     * @tc.desc Verify every result is true for array [7, 7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7});
    boolean r = arr.every((e, i, a) -> e == a.get(0));
    assertTrue(r);
    }

    /**
     * Verify every predicate e===0 for clamped -0 values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4500
     * @tc.name testUint8ClampedArrayEveryTwo045
     * @tc.desc Verify every predicate e===0 for clamped -0 values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo045() {
    List<Number> src = java.util.Arrays.asList(-0, -0, 0);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify predicate !== NaN (clamp NaN)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4600
     * @tc.name testUint8ClampedArrayEveryTwo046
     * @tc.desc Verify predicate !== NaN (clamp NaN)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo046() {
    double[] src = new double[] {Double.NaN, Double.NaN, 1};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> !BasTest.isNaN(e));
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [1, 2, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4700
     * @tc.name testUint8ClampedArrayEveryTwo047
     * @tc.desc Verify every result is true for array [1, 2, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 255});
    boolean r = arr.every((e, i, a) -> BasTest.isFinite(e));
    assertTrue(r);
    }

    /**
     * Verify every predicate Number.isInteger for clamped 1.5 2.5 3.5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4800
     * @tc.name testUint8ClampedArrayEveryTwo048
     * @tc.desc Verify every predicate Number.isInteger for clamped 1.5 2.5 3.5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo048() {
    double[] src = new double[] {1.5, 2.5, 3.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> BasTest.isInteger(e));
    assertTrue(r);
    }

    /**
     * Verify every predicate e===0 or e===255 alternating
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_4900
     * @tc.name testUint8ClampedArrayEveryTwo049
     * @tc.desc Verify every predicate e===0 or e===255 alternating
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 255, 0, 255, 0});
    boolean r = arr.every((e, i, a) -> e == 0 || e == 255);
    assertTrue(r);
    }

    /**
     * Verify every with parity-based predicate (odd index or multiple of 10)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_5000
     * @tc.name testUint8ClampedArrayEveryTwo050
     * @tc.desc Verify every with parity-based predicate (odd index or multiple of 10)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 99, 20, 99, 30});
    boolean r = arr.every((e, i, a) -> i % 2 == 1 || e % 10 == 0);
    assertTrue(r);
    }

    /**
     * Verify every accepts boundary values 100 and interior values 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_TWO_5100
     * @tc.name testUint8ClampedArrayEveryTwo051
     * @tc.desc Verify every accepts boundary values 100 and interior values 50
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 50, 50, 50, 100});
    boolean r = arr.every((e, i, a) -> {
        if (i == 0 || i == a.length() - 1) {
            return e == 100;
        }
        return e == 50;
    });
    assertTrue(r);
    }
}
