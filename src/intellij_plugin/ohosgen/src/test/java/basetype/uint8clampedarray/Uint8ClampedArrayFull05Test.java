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

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull05Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull05Test extends BasTest {
    /**
     * Verify $_get negative index RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0100
     * @tc.name testUint8ClampedArrayFullFive001
     * @tc.desc Verify $_get negative index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get large index RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0200
     * @tc.name testUint8ClampedArrayFullFive002
     * @tc.desc Verify $_get large index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.get(0x7FFFFFFF);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index=-length-1 3 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0300
     * @tc.name testUint8ClampedArrayFullFive003
     * @tc.desc Verify with index=-length-1 3 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.with(-4, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index length RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0400
     * @tc.name testUint8ClampedArrayFullFive004
     * @tc.desc Verify with index length RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index length+1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0500
     * @tc.name testUint8ClampedArrayFullFive005
     * @tc.desc Verify with index length+1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(4, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index INT_MAX RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0600
     * @tc.name testUint8ClampedArrayFullFive006
     * @tc.desc Verify with index INT_MAX RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index INT_MIN RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0700
     * @tc.name testUint8ClampedArrayFullFive007
     * @tc.desc Verify with index INT_MIN RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(Integer.MIN_VALUE, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index=0x7FFFFFFF RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0800
     * @tc.name testUint8ClampedArrayFullFive008
     * @tc.desc Verify with index=0x7FFFFFFF RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(0x7FFFFFFF, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_0900
     * @tc.name testUint8ClampedArrayFullFive009
     * @tc.desc Verify with index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.with(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify with index RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1000
     * @tc.name testUint8ClampedArrayFullFive010
     * @tc.desc Verify with index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.with(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set offset=length RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1100
     * @tc.name testUint8ClampedArrayFullFive011
     * @tc.desc Verify set offset=length RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive011() {
    Uint8ClampedArray dst = new Uint8ClampedArray(3);
    List<Number> src = java.util.Arrays.asList(9);
    try {
    dst.set(src, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set offset=length-1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1200
     * @tc.name testUint8ClampedArrayFullFive012
     * @tc.desc Verify set offset=length-1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive012() {
    Uint8ClampedArray dst = new Uint8ClampedArray(4);
    List<Number> src = java.util.Arrays.asList(9, 8);
    try {
    dst.set(src, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify.set behavior for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1300
     * @tc.name testUint8ClampedArrayFullFive013
     * @tc.desc Verify.set behavior for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive013() {
    Uint8ClampedArray dst = new Uint8ClampedArray(2);
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    try {
    dst.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify.set behavior for length-4 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1400
     * @tc.name testUint8ClampedArrayFullFive014
     * @tc.desc Verify.set behavior for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive014() {
    Uint8ClampedArray dst = new Uint8ClampedArray(4);
    List<Number> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set offset INT_MAX RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1500
     * @tc.name testUint8ClampedArrayFullFive015
     * @tc.desc Verify set offset INT_MAX RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive015() {
    Uint8ClampedArray dst = new Uint8ClampedArray(4);
    List<Number> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set offset=length+1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1600
     * @tc.name testUint8ClampedArrayFullFive016
     * @tc.desc Verify set offset=length+1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive016() {
    Uint8ClampedArray dst = new Uint8ClampedArray(3);
    List<Number> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify.set behavior for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1700
     * @tc.name testUint8ClampedArrayFullFive017
     * @tc.desc Verify.set behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive017() {
    Uint8ClampedArray dst = new Uint8ClampedArray(0);
    List<Number> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify set Uint8ClampedArray offset RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1800
     * @tc.name testUint8ClampedArrayFullFive018
     * @tc.desc Verify set Uint8ClampedArray offset RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive018() {
    Uint8ClampedArray dst = new Uint8ClampedArray(3);
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {7, 7});
    try {
    dst.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=byteLength 1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_1900
     * @tc.name testUint8ClampedArrayFullFive019
     * @tc.desc Verify byteOffset=byteLength 1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive019() {
    ArrayBuffer buf = new ArrayBuffer(3);
    try {
    new Uint8ClampedArray(buf, 3, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, 0, 2147483647
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2000
     * @tc.name testUint8ClampedArrayFullFive020
     * @tc.desc Verify constructor throws RangeError for buf, 0, 2147483647
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive020() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 0, 2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduce initialValue TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2100
     * @tc.name testUint8ClampedArrayFullFive021
     * @tc.desc Verify reduce initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.reduce((a, b, index, array) -> a + b);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight initialValue TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2200
     * @tc.name testUint8ClampedArrayFullFive022
     * @tc.desc Verify reduceRight initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.reduceRight((a, b, index, array) -> a + b);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduce initialValue=0 callback 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2300
     * @tc.name testUint8ClampedArrayFullFive023
     * @tc.desc Verify reduce initialValue=0 callback 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    int result = arr.reduce((a, b, index, array) -> {
        called[0]++;
        return a + b;
        }, 0);
    assertEqual(0, result);
    assertEqual(0, called[0]);
    }

    /**
     * Verify reduceRight initialValue=42 callback 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2400
     * @tc.name testUint8ClampedArrayFullFive024
     * @tc.desc Verify reduceRight initialValue=42 callback 42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    int result = arr.reduceRight((a, b, index, array) -> {
        called[0]++;
        return a + b;
        }, 42);
    assertEqual(42, result);
    assertEqual(0, called[0]);
    }

    /**
     * Verify reduce result equals 255 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2500
     * @tc.name testUint8ClampedArrayFullFive025
     * @tc.desc Verify reduce result equals 255 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int result = arr.reduce((a, b, index, array) -> a + b, 255);
    assertEqual(255, result);
    }

    /**
     * Verify reduce initialValue=-1 clamp
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2600
     * @tc.name testUint8ClampedArrayFullFive026
     * @tc.desc Verify reduce initialValue=-1 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int result = arr.reduce((a, b, index, array) -> a + b, -1);
    assertEqual(-1, result);
    }

    /**
     * Verify map propagates RangeError thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2700
     * @tc.name testUint8ClampedArrayFullFive027
     * @tc.desc Verify map propagates RangeError thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.map((v) -> {
        throw new RangeError("boom");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter propagates TypeError thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2800
     * @tc.name testUint8ClampedArrayFullFive028
     * @tc.desc Verify filter propagates TypeError thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.filter((v) -> {
        throw new TypeError("bad");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify find propagates Error thrown by its predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_2900
     * @tc.name testUint8ClampedArrayFullFive029
     * @tc.desc Verify find propagates Error thrown by its predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.find((v) -> {
        return BasTest.throwTestError("find fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findIndex propagates Error thrown by its predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3000
     * @tc.name testUint8ClampedArrayFullFive030
     * @tc.desc Verify findIndex propagates Error thrown by its predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findIndex((v) -> {
        return BasTest.throwTestError("fi fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLast propagates Error thrown by its predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3100
     * @tc.name testUint8ClampedArrayFullFive031
     * @tc.desc Verify findLast propagates Error thrown by its predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLast((v) -> {
        return BasTest.throwTestError("fl fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify findLastIndex propagates Error thrown by its predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3200
     * @tc.name testUint8ClampedArrayFullFive032
     * @tc.desc Verify findLastIndex propagates Error thrown by its predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLastIndex((v) -> {
        return BasTest.throwTestError("fli fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify some propagates Error thrown by its predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3300
     * @tc.name testUint8ClampedArrayFullFive033
     * @tc.desc Verify some propagates Error thrown by its predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.some((v) -> {
        return BasTest.throwTestError("some fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify every propagates Error thrown by its predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3400
     * @tc.name testUint8ClampedArrayFullFive034
     * @tc.desc Verify every propagates Error thrown by its predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.every((v) -> {
        return BasTest.throwTestError("every fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduce propagates Error thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3500
     * @tc.name testUint8ClampedArrayFullFive035
     * @tc.desc Verify reduce propagates Error thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduce((a, b, index, array) -> {
        return BasTest.throwTestError("r fail");
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight propagates Error thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3600
     * @tc.name testUint8ClampedArrayFullFive036
     * @tc.desc Verify reduceRight propagates Error thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduceRight((a, b, index, array) -> {
        return BasTest.throwTestError("rr fail");
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify sort propagates Error thrown by its comparator
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3700
     * @tc.name testUint8ClampedArrayFullFive037
     * @tc.desc Verify sort propagates Error thrown by its comparator
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    try {
    arr.sort((a, b) -> {
        return BasTest.throwTestError("cmp fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Uint8ClampedArray.from mapfn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3800
     * @tc.name testUint8ClampedArrayFullFive038
     * @tc.desc Verify Uint8ClampedArray.from mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive038() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, unusedIndex) -> {
        return BasTest.throwTestError("map fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify map element at r[0] equals 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_3900
     * @tc.name testUint8ClampedArrayFullFive039
     * @tc.desc Verify map element at r[0] equals 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v) -> BasTest.clampRound(Double.NaN));
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    }

    /**
     * Verify map element at r[0] equals 255 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4000
     * @tc.name testUint8ClampedArrayFullFive040
     * @tc.desc Verify map element at r[0] equals 255 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v) -> BasTest.clampRound(Double.POSITIVE_INFINITY));
    assertEqual(255, r.get(0));
    assertEqual(255, r.get(1));
    assertEqual(255, r.get(2));
    }

    /**
     * Verify map element at r[0] equals 0 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4100
     * @tc.name testUint8ClampedArrayFullFive041
     * @tc.desc Verify map element at r[0] equals 0 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.map((v) -> BasTest.clampRound(-Double.POSITIVE_INFINITY));
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    }

    /**
     * Verify filter yields length 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4200
     * @tc.name testUint8ClampedArrayFullFive042
     * @tc.desc Verify filter yields length 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v) -> false);
    assertEqual(0, r.length());
    }

    /**
     * Verify filter yields length 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4300
     * @tc.name testUint8ClampedArrayFullFive043
     * @tc.desc Verify filter yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v) -> true);
    assertEqual(3, r.length());
    }

    /**
     * Verify find r equals undefined for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4400
     * @tc.name testUint8ClampedArrayFullFive044
     * @tc.desc Verify find r equals undefined for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.find((v) -> false);
    assertNull(r);
    }

    /**
     * Verify findLast returns last matched value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4500
     * @tc.name testUint8ClampedArrayFullFive045
     * @tc.desc Verify findLast returns last matched value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v) -> v < 3);
    assertEqual(2, r);
    }

    /**
     * Verify findIndex r equals -1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4600
     * @tc.name testUint8ClampedArrayFullFive046
     * @tc.desc Verify findIndex r equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.findIndex((v) -> false);
    assertEqual(-1, r);
    }

    /**
     * Verify findLastIndex r equals -1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4700
     * @tc.name testUint8ClampedArrayFullFive047
     * @tc.desc Verify findLastIndex r equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.findLastIndex((v) -> false);
    assertEqual(-1, r);
    }

    /**
     * Verify some result is false for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4800
     * @tc.name testUint8ClampedArrayFullFive048
     * @tc.desc Verify some result is false for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    boolean r = arr.some((v) -> {
        called[0]++;
        return true;
    });
    assertFalse(r);
    assertEqual(0, called[0]);
    }

    /**
     * Verify every result is true for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_4900
     * @tc.name testUint8ClampedArrayFullFive049
     * @tc.desc Verify every result is true for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    boolean r = arr.every((v) -> {
        called[0]++;
        return false;
    });
    assertTrue(r);
    assertEqual(0, called[0]);
    }

    /**
     * Verify find r equals undefined for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5000
     * @tc.name testUint8ClampedArrayFullFive050
     * @tc.desc Verify find r equals undefined for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Integer r = arr.find((v) -> true);
    assertNull(r);
    }

    /**
     * Verify findLast r equals 6 for array [4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5100
     * @tc.name testUint8ClampedArrayFullFive051
     * @tc.desc Verify findLast r equals 6 for array [4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {4, 5, 6});
    Integer r = arr.findLast((v) -> true);
    assertEqual(6, r);
    }

    /**
     * Verify findIndex r equals -1 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5200
     * @tc.name testUint8ClampedArrayFullFive052
     * @tc.desc Verify findIndex r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int r = arr.findIndex((v) -> true);
    assertEqual(-1, r);
    }

    /**
     * Verify findLastIndex r equals -1 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5300
     * @tc.name testUint8ClampedArrayFullFive053
     * @tc.desc Verify findLastIndex r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int r = arr.findLastIndex((v) -> true);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf r equals -1 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5400
     * @tc.name testUint8ClampedArrayFullFive054
     * @tc.desc Verify indexOf r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int r = arr.indexOf(1);
    assertEqual(-1, r);
    }

    /**
     * Verify lastIndexOf r equals -1 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5500
     * @tc.name testUint8ClampedArrayFullFive055
     * @tc.desc Verify lastIndexOf r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int r = arr.lastIndexOf(1);
    assertEqual(-1, r);
    }

    /**
     * Verify includes result is false for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5600
     * @tc.name testUint8ClampedArrayFullFive056
     * @tc.desc Verify includes result is false for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    boolean r = arr.includes(1);
    assertFalse(r);
    }

    /**
     * Verify at r equals undefined for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5700
     * @tc.name testUint8ClampedArrayFullFive057
     * @tc.desc Verify at r equals undefined for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Integer r = arr.at(0);
    assertNull(r);
    }

    /**
     * Verify at r equals undefined for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5800
     * @tc.name testUint8ClampedArrayFullFive058
     * @tc.desc Verify at r equals undefined for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Integer r = arr.at(-1);
    assertNull(r);
    }

    /**
     * Verify at r equals undefined for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_5900
     * @tc.name testUint8ClampedArrayFullFive059
     * @tc.desc Verify at r equals undefined for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Integer r = arr.at(100);
    assertNull(r);
    }

    /**
     * Verify join r equals '' for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6000
     * @tc.name testUint8ClampedArrayFullFive060
     * @tc.desc Verify join r equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.join();
    assertEqual("", r);
    }

    /**
     * Verify join r equals '' for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6100
     * @tc.name testUint8ClampedArrayFullFive061
     * @tc.desc Verify join r equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.join("|");
    assertEqual("", r);
    }

    /**
     * Verify toString r equals '' for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6200
     * @tc.name testUint8ClampedArrayFullFive062
     * @tc.desc Verify toString r equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = String.valueOf(arr);
    assertEqual("", r);
    }

    /**
     * Verify some result is true for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6300
     * @tc.name testUint8ClampedArrayFullFive063
     * @tc.desc Verify some result is true for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    boolean r = arr.some((v) -> v == 42);
    assertTrue(r);
    }

    /**
     * Verify every result is false for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6400
     * @tc.name testUint8ClampedArrayFullFive064
     * @tc.desc Verify every result is false for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    boolean r = arr.every((v) -> v == 99);
    assertFalse(r);
    }

    /**
     * Verify find r equals 42 for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6500
     * @tc.name testUint8ClampedArrayFullFive065
     * @tc.desc Verify find r equals 42 for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Integer r = arr.find((v) -> true);
    assertEqual(42, r);
    }

    /**
     * Verify reduce on single-element array without initialValue returns element and callback is not called
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6600
     * @tc.name testUint8ClampedArrayFullFive066
     * @tc.desc Verify reduce on single-element array without initialValue returns element and callback is not called
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int[] called = {0};
    int r = arr.reduce((a, b, index, array) -> {
        called[0]++;
        return a + b;
    });
    assertEqual(42, r);
    assertEqual(0, called[0]);
    }

    /**
     * Verify reduceRight on single-element array without initialValue returns element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6700
     * @tc.name testUint8ClampedArrayFullFive067
     * @tc.desc Verify reduceRight on single-element array without initialValue returns element
     * and callback is not called
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int[] called = {0};
    int r = arr.reduceRight((a, b, index, array) -> {
        called[0]++;
        return a + b;
    });
    assertEqual(99, r);
    assertEqual(0, called[0]);
    }

    /**
     * Verify indexOf arr.indexOf(7) equals 0 for array [7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6800
     * @tc.name testUint8ClampedArrayFullFive068
     * @tc.desc Verify indexOf arr.indexOf(7) equals 0 for array [7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    assertEqual(0, arr.indexOf(7));
    }

    /**
     * Verify indexOf arr.indexOf(8) equals -1 for array [7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_6900
     * @tc.name testUint8ClampedArrayFullFive069
     * @tc.desc Verify indexOf arr.indexOf(8) equals -1 for array [7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    assertEqual(-1, arr.indexOf(8));
    }

    /**
     * Verify lastIndexOf last key equals 0 for array [7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7000
     * @tc.name testUint8ClampedArrayFullFive070
     * @tc.desc Verify lastIndexOf last key equals 0 for array [7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    assertEqual(0, arr.lastIndexOf(7));
    }

    /**
     * Verify join arr.join('|') equals '200' for array [200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7100
     * @tc.name testUint8ClampedArrayFullFive071
     * @tc.desc Verify join arr.join('|') equals '200' for array [200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200});
    assertEqual("200", arr.join("|"));
    }

    /**
     * Verify reverse element at r[0] equals 88 for array [88]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7200
     * @tc.name testUint8ClampedArrayFullFive072
     * @tc.desc Verify reverse element at r[0] equals 88 for array [88]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(88, r.get(0));
    assertEqual(1, r.length());
    }

    /**
     * Verify some result is false for array [0, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7300
     * @tc.name testUint8ClampedArrayFullFive073
     * @tc.desc Verify some result is false for array [0, 0, 0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 0});
    boolean r = arr.some((v) -> v > 0);
    assertFalse(r);
    }

    /**
     * Verify every result is true for array [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7400
     * @tc.name testUint8ClampedArrayFullFive074
     * @tc.desc Verify every result is true for array [255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    boolean r = arr.every((v) -> v == 255);
    assertTrue(r);
    }

    /**
     * Verify indexOf arr.indexOf(5) equals 0 for array [5, 5, 5, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7500
     * @tc.name testUint8ClampedArrayFullFive075
     * @tc.desc Verify indexOf arr.indexOf(5) equals 0 for array [5, 5, 5, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 5});
    assertEqual(0, arr.indexOf(5));
    }

    /**
     * Verify includes result is true for array [7, 7, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7600
     * @tc.name testUint8ClampedArrayFullFive076
     * @tc.desc Verify includes result is true for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    assertTrue(arr.includes(7));
    }

    /**
     * Verify sort element at r[0] equals 9 for array [9, 9, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7700
     * @tc.name testUint8ClampedArrayFullFive077
     * @tc.desc Verify sort element at r[0] equals 9 for array [9, 9, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9});
    Uint8ClampedArray r = arr.sort();
    assertEqual(9, r.get(0));
    assertEqual(9, r.get(1));
    assertEqual(9, r.get(2));
    }

    /**
     * Verify reverse yields [4, 3, 1] for array [1, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7800
     * @tc.name testUint8ClampedArrayFullFive078
     * @tc.desc Verify reverse yields [4, 3, 1] for array [1, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 4});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(3, r.length());
    assertEqual(4, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(1, r.get(2));
    }

    /**
     * Verify join arr.join('-') equals '1-1-1' for array [1, 1, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_7900
     * @tc.name testUint8ClampedArrayFullFive079
     * @tc.desc Verify join arr.join('-') equals '1-1-1' for array [1, 1, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 1, 1});
    assertEqual("1-1-1", arr.join("-"));
    }

    /**
     * Verify reduce r equals 40 for array [10, 10, 10, 10]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8000
     * @tc.name testUint8ClampedArrayFullFive080
     * @tc.desc Verify reduce r equals 40 for array [10, 10, 10, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 10, 10, 10});
    int r = arr.reduce((a, b, index, array) -> a + b, 0);
    assertEqual(40, r);
    }

    /**
     * Verify filter yields length 0 for array [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8100
     * @tc.name testUint8ClampedArrayFullFive081
     * @tc.desc Verify filter yields length 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray r = arr.filter((v) -> v > 0);
    assertEqual(0, r.length());
    }

    /**
     * Verify copyWithin start===end no-op
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8200
     * @tc.name testUint8ClampedArrayFullFive082
     * @tc.desc Verify copyWithin start===end no-op
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7, 8});
    arr.copyWithin(0, 2, 2);
    assertEqual(5, arr.get(0));
    assertEqual(6, arr.get(1));
    assertEqual(7, arr.get(2));
    assertEqual(8, arr.get(3));
    }

    /**
     * Verify fill r equals arr for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8300
     * @tc.name testUint8ClampedArrayFullFive083
     * @tc.desc Verify fill r equals arr for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.fill(99, 2, 1);
    assertEqual(arr, r);
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify $_set index length RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8400
     * @tc.name testUint8ClampedArrayFullFive084
     * @tc.desc Verify $_set index length RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set negative index RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8500
     * @tc.name testUint8ClampedArrayFullFive085
     * @tc.desc Verify $_set negative index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_set large index RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8600
     * @tc.name testUint8ClampedArrayFullFive086
     * @tc.desc Verify $_set large index RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.set(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify $_get index length RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FIVE_8700
     * @tc.name testUint8ClampedArrayFullFive087
     * @tc.desc Verify $_get index length RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFive087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
