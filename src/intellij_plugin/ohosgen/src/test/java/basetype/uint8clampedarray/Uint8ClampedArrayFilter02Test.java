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

import basetype.common.BasTest;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFilter02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFilter02Test extends BasTest {
    /**
     * Verify filter propagates TypeError thrown by the callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0100
     * @tc.name testUint8ClampedArrayFilterTwo001
     * @tc.desc Verify filter propagates TypeError thrown by the callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.filter((v, i, a) -> {
        throw new TypeError("bad type");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter propagates RangeError thrown by the callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0200
     * @tc.name testUint8ClampedArrayFilterTwo002
     * @tc.desc Verify filter propagates RangeError thrown by the callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.filter((v, i, a) -> {
        throw new RangeError("oor");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter yields length 3 for array [0, 1, 2, 0, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0300
     * @tc.name testUint8ClampedArrayFilterTwo003
     * @tc.desc Verify filter yields length 3 for array [0, 1, 2, 0, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 0, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 0);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter reads mutated value when callback modifies source array mid-iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0400
     * @tc.name testUint8ClampedArrayFilterTwo004
     * @tc.desc Verify filter reads mutated value when callback modifies source array mid-iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> {
        if (i == 0) {
            a.set(1, 99);
        }
        return v >= 50;
    });
    assertEqual(1, r.length());
    }

    /**
     * Verify filter yields length 3 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0500
     * @tc.name testUint8ClampedArrayFilterTwo005
     * @tc.desc Verify filter yields length 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 1).filter((v, i, a) -> v < 5);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter yields length 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0600
     * @tc.name testUint8ClampedArrayFilterTwo006
     * @tc.desc Verify filter yields length 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 1).filter((v, i, a) -> v > 10);
    assertEqual(0, r.length());
    }

    /**
     * Verify filter map() adds 10 to first value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0700
     * @tc.name testUint8ClampedArrayFilterTwo007
     * @tc.desc Verify filter map() adds 10 to first value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    Uint8ClampedArray mapped = r.map((v, i, a) -> v + 10);
    assertEqual(12, mapped.get(0));
    }

    /**
     * Verify filter accumulated sum equals 12 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0800
     * @tc.name testUint8ClampedArrayFilterTwo008
     * @tc.desc Verify filter accumulated sum equals 12 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 3);
    int[] sum = {r.reduce((acc, v, index, array) -> acc + v, 0)};
    assertEqual(12, sum[0]);
    }

    /**
     * Verify filter accumulated sum equals 50 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_0900
     * @tc.name testUint8ClampedArrayFilterTwo009
     * @tc.desc Verify filter accumulated sum equals 50 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 20);
    int[] sum = {0};
    r.forEach((v) -> {
        sum[0] += v;
        });
    assertEqual(50, sum[0]);
    }

    /**
     * Verify filter r.join(',') equals '2, 3, 4' for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1000
     * @tc.name testUint8ClampedArrayFilterTwo010
     * @tc.desc Verify filter r.join(',') equals '2, 3, 4' for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual("2,3,4", r.join(","));
    }

    /**
     * Verify filter r.join(',') equals '' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1100
     * @tc.name testUint8ClampedArrayFilterTwo011
     * @tc.desc Verify filter r.join(',') equals '' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> false);
    assertEqual("", r.join(","));
    }

    /**
     * Verify subarray(0, 2) on filter result yields length 2 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1200
     * @tc.name testUint8ClampedArrayFilterTwo012
     * @tc.desc Verify subarray(0, 2) on filter result yields length 2 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    Uint8ClampedArray sub = r.subarray(0, 2);
    assertEqual(2, sub.length());
    }

    /**
     * Verify filter iterator value is 20 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1300
     * @tc.name testUint8ClampedArrayFilterTwo013
     * @tc.desc Verify filter iterator value is 20 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 20);
    Uint8ClampedArray.KeyIterator it = r.values();
    IteratorResult first = it.next();
    assertEqual(20, first.value);
    }

    /**
     * Verify filter iterator is done after consuming last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1400
     * @tc.name testUint8ClampedArrayFilterTwo014
     * @tc.desc Verify filter iterator is done after consuming last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 5);
    Uint8ClampedArray.KeyIterator it = r.values();
    it.next();
    assertTrue(it.next().done);
    }

    /**
     * Verify filter accumulated sum equals 9 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1500
     * @tc.name testUint8ClampedArrayFilterTwo015
     * @tc.desc Verify filter accumulated sum equals 9 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    int[] sum = {0};
    for (Integer v : r.values()) {
        sum[0] += v;
    }
    assertEqual(9, sum[0]);
    }

    /**
     * Verify filter r.indexOf(3) equals 1 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1600
     * @tc.name testUint8ClampedArrayFilterTwo016
     * @tc.desc Verify filter r.indexOf(3) equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual(1, r.indexOf(3));
    }

    /**
     * Verify filter returns correct length and elements for predicate v >= 2 on [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1700
     * @tc.name testUint8ClampedArrayFilterTwo017
     * @tc.desc Verify filter returns correct length and elements for predicate v >= 2 on [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }

    /**
     * Verify chained filter produces independent backing buffer for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1800
     * @tc.name testUint8ClampedArrayFilterTwo018
     * @tc.desc Verify chained filter produces independent backing buffer for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r1 = arr.filter((v, i, a) -> v >= 2);
    Uint8ClampedArray r2 = r1.filter((v, i, a) -> v <= 3);
    assertNotEqual(r1.buffer(), r2.buffer());
    }

    /**
     * Verify some finds value 3 in the filtered result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_1900
     * @tc.name testUint8ClampedArrayFilterTwo019
     * @tc.desc Verify some finds value 3 in the filtered result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertTrue(r.some((v) -> v == 3));
    }

    /**
     * Verify every confirms all filtered values are at least 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2000
     * @tc.name testUint8ClampedArrayFilterTwo020
     * @tc.desc Verify every confirms all filtered values are at least 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertTrue(r.every((v) -> v >= 2));
    }

    /**
     * Verify find returns value 4 from the filtered result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2100
     * @tc.name testUint8ClampedArrayFilterTwo021
     * @tc.desc Verify find returns value 4 from the filtered result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual(4, r.find((v) -> v == 4));
    }

    /**
     * Verify find returns undefined when filter rejects every element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2200
     * @tc.name testUint8ClampedArrayFilterTwo022
     * @tc.desc Verify find returns undefined when filter rejects every element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> false);
    assertNull(r.find((v) -> v > 0));
    }

    /**
     * Verify filter r.at(0) equals 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2300
     * @tc.name testUint8ClampedArrayFilterTwo023
     * @tc.desc Verify filter r.at(0) equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual(2, r.at(0));
    }

    /**
     * Verify filter r.at(-1) equals 4 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2400
     * @tc.name testUint8ClampedArrayFilterTwo024
     * @tc.desc Verify filter r.at(-1) equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual(4, r.at(-1));
    }

    /**
     * Verify filter then slice produces independent backing buffer for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2500
     * @tc.name testUint8ClampedArrayFilterTwo025
     * @tc.desc Verify filter then slice produces independent backing buffer for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    Uint8ClampedArray s = r.slice(0);
    assertNotEqual(r.buffer(), s.buffer());
    }

    /**
     * Verify filter predicate v % 20 === 0 first value 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_TWO_2600
     * @tc.name testUint8ClampedArrayFilterTwo026
     * @tc.desc Verify filter predicate v % 20 === 0 first value 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray.Uint8ClampedArrayFinder fn = (v, i, a) -> v % 20 == 0;
    Uint8ClampedArray r = arr.filter(fn);
    assertEqual(20, r.get(0));
    }
}
