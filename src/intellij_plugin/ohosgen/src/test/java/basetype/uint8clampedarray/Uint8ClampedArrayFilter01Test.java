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
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFilter01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFilter01Test extends BasTest {
    /**
     * Verify filter() predicate v > 2 returns 2 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0100
     * @tc.name testUint8ClampedArrayFilterOne001
     * @tc.desc Verify filter() predicate v > 2 returns 2 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 2);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0200
     * @tc.name testUint8ClampedArrayFilterOne002
     * @tc.desc Verify filter yields length 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 20);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0300
     * @tc.name testUint8ClampedArrayFilterOne003
     * @tc.desc Verify filter yields length 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> i % 2 == 0);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length arr.length for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0400
     * @tc.name testUint8ClampedArrayFilterOne004
     * @tc.desc Verify filter yields length arr.length for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    assertEqual(arr.length(), r.length());
    }

    /**
     * Verify filter element at r[0] equals 7 for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0500
     * @tc.name testUint8ClampedArrayFilterOne005
     * @tc.desc Verify filter element at r[0] equals 7 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    assertEqualInt(7, r.get(0));
    }

    /**
     * Verify filter element at r[2] equals 9 for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0600
     * @tc.name testUint8ClampedArrayFilterOne006
     * @tc.desc Verify filter element at r[2] equals 9 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    assertEqualInt(9, r.get(2));
    }

    /**
     * Verify filter yields length 0 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0700
     * @tc.name testUint8ClampedArrayFilterOne007
     * @tc.desc Verify filter yields length 0 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> false);
    assertEqual(0, r.length());
    }

    /**
     * Verify rejecting all elements returns independent empty storage
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0800
     * @tc.name testUint8ClampedArrayFilterOne008
     * @tc.desc Verify rejecting all elements returns independent empty storage
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> false);
    assertEqual(0, r.length());
    assertNotEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify filter() predicate v % 2 === 0 returns 3 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_0900
     * @tc.name testUint8ClampedArrayFilterOne009
     * @tc.desc Verify filter() predicate v % 2 === 0 returns 3 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v % 2 == 0);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter() predicate v % 2 === 1 returns 3 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1000
     * @tc.name testUint8ClampedArrayFilterOne010
     * @tc.desc Verify filter() predicate v % 2 === 1 returns 3 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v % 2 == 1);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter() predicate v > 100 returns 2 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1100
     * @tc.name testUint8ClampedArrayFilterOne011
     * @tc.desc Verify filter() predicate v > 100 returns 2 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 50, 100, 150, 200});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 100);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter() predicate v < 100 returns 2 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1200
     * @tc.name testUint8ClampedArrayFilterOne012
     * @tc.desc Verify filter() predicate v < 100 returns 2 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 50, 100, 150, 200});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v < 100);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter() predicate v === 5 returns 3 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1300
     * @tc.name testUint8ClampedArrayFilterOne013
     * @tc.desc Verify filter() predicate v === 5 returns 3 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 5, 5, 5, 9});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 5);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter() predicate v === 0 returns 3 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1400
     * @tc.name testUint8ClampedArrayFilterOne014
     * @tc.desc Verify filter() predicate v === 0 returns 3 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 0, 2, 0});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 0);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter() predicate v === 255 returns 3 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1500
     * @tc.name testUint8ClampedArrayFilterOne015
     * @tc.desc Verify filter() predicate v === 255 returns 3 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 255, 0, 255});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 255);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter yields length 2 for array [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1600
     * @tc.name testUint8ClampedArrayFilterOne016
     * @tc.desc Verify filter yields length 2 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.filter((v, i, a) -> i >= 2);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter element at r[0] equals 10 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1700
     * @tc.name testUint8ClampedArrayFilterOne017
     * @tc.desc Verify filter element at r[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> i == 0);
    assertEqualInt(10, r.get(0));
    }

    /**
     * Verify filter element at r[0] equals 30 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1800
     * @tc.name testUint8ClampedArrayFilterOne018
     * @tc.desc Verify filter element at r[0] equals 30 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> i == a.length() - 1);
    assertEqualInt(30, r.get(0));
    }

    /**
     * Verify filter yields length 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_1900
     * @tc.name testUint8ClampedArrayFilterOne019
     * @tc.desc Verify filter yields length 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == a.length());
    assertEqual(1, r.length());
    }

    /**
     * Verify filter yields length 3 for array [5, 5, 5, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2000
     * @tc.name testUint8ClampedArrayFilterOne020
     * @tc.desc Verify filter yields length 3 for array [5, 5, 5, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 7});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == a.get(0));
    assertEqual(3, r.length());
    }

    /**
     * Verify filter yields length 2 for array [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2100
     * @tc.name testUint8ClampedArrayFilterOne021
     * @tc.desc Verify filter yields length 2 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 15 && i < 3);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 0 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2200
     * @tc.name testUint8ClampedArrayFilterOne022
     * @tc.desc Verify filter yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    assertEqual(0, r.length());
    }

    /**
     * Verify filter() on empty array does not call predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2300
     * @tc.name testUint8ClampedArrayFilterOne023
     * @tc.desc Verify filter() on empty array does not call predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne023() {
    int[] called = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    arr.filter((v, i, a) -> {
        called[0]++;
        return true;
    });
    assertEqual(0, called[0]);
    }

    /**
     * Verify filter() predicate i === 0 returns r[0]=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2400
     * @tc.name testUint8ClampedArrayFilterOne024
     * @tc.desc Verify filter() predicate i === 0 returns r[0]=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.filter((v, i, a) -> i == 0);
    assertEqualInt(1, r.get(0));
    }

    /**
     * Verify filter() predicate i === 1 returns r[0]=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2500
     * @tc.name testUint8ClampedArrayFilterOne025
     * @tc.desc Verify filter() predicate i === 1 returns r[0]=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.filter((v, i, a) -> i == 1);
    assertEqualInt(2, r.get(0));
    }

    /**
     * Verify filter yields length 2 for array [0, 255, 0, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2600
     * @tc.name testUint8ClampedArrayFilterOne026
     * @tc.desc Verify filter yields length 2 for array [0, 255, 0, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 0);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter() predicate v >= 128 returns 2 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2700
     * @tc.name testUint8ClampedArrayFilterOne027
     * @tc.desc Verify filter() predicate v >= 128 returns 2 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128, 129});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 128);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter() predicate v >= 128 on 256-length array returns 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2800
     * @tc.name testUint8ClampedArrayFilterOne028
     * @tc.desc Verify filter() predicate v >= 128 on 256-length array returns 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne028() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 256; i++) {
        arr.set(i, i);
    }
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 128);
    assertEqual(128, r.length());
    }

    /**
     * Verify filter() predicate i % 2 === 0 on 1024-length array returns 512
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_2900
     * @tc.name testUint8ClampedArrayFilterOne029
     * @tc.desc Verify filter() predicate i % 2 === 0 on 1024-length array returns 512
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne029() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 1024; i++) {
        arr.set(i, i % 256);
    }
    Uint8ClampedArray r = arr.filter((v, i, a) -> i % 2 == 0);
    assertEqual(512, r.length());
    }

    /**
     * Verify filter yields length 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3000
     * @tc.name testUint8ClampedArrayFilterOne030
     * @tc.desc Verify filter yields length 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne030() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 8; i++) {
        arr.set(i, i * 30);
    }
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 100);
    assertEqual(4, r.length());
    assertEqualInt(120, r.get(0));
    assertEqualInt(210, r.get(3));
    }

    /**
     * Verify filter yields length 3 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3100
     * @tc.name testUint8ClampedArrayFilterOne031
     * @tc.desc Verify filter yields length 3 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne031() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 20);
    assertEqual(3, r.length());
    }

    /**
     * Verify Uint8ClampedArray.of yields length 2 for of(5, 10, 15, 20)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3200
     * @tc.name testUint8ClampedArrayFilterOne032
     * @tc.desc Verify Uint8ClampedArray.of yields length 2 for of(5, 10, 15, 20)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne032() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(5, 10, 15, 20);
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 10);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [256, 10, 256]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3300
     * @tc.name testUint8ClampedArrayFilterOne033
     * @tc.desc Verify filter yields length 2 for array [256, 10, 256]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 10, 256});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 255);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [-1, 50, -1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3400
     * @tc.name testUint8ClampedArrayFilterOne034
     * @tc.desc Verify filter yields length 2 for array [-1, 50, -1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 50, -1});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 0);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [Number.NaN, 100, Number.NaN]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3500
     * @tc.name testUint8ClampedArrayFilterOne035
     * @tc.desc Verify filter yields length 2 for array [Number.NaN, 100, Number.NaN]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 100, Double.NaN});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 0);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [Number.POSITIVE_INFINITY, 100, Number.POSITIVE_INFINITY]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3600
     * @tc.name testUint8ClampedArrayFilterOne036
     * @tc.desc Verify filter yields length 2 for array [Number.POSITIVE_INFINITY, 100, Number.POSITIVE_INFINITY]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne036() {
    Uint8ClampedArray arr =
        new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 100, Double.POSITIVE_INFINITY});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 255);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [-Number.POSITIVE_INFINITY, 100, -Number.POSITIVE_INFINITY]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3700
     * @tc.name testUint8ClampedArrayFilterOne037
     * @tc.desc Verify filter yields length 2 for array [-Number.POSITIVE_INFINITY, 100, -Number.POSITIVE_INFINITY]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne037() {
    Uint8ClampedArray arr =
        new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 100, -Double.POSITIVE_INFINITY});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 0);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [127.5, 1, 127.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3800
     * @tc.name testUint8ClampedArrayFilterOne038
     * @tc.desc Verify filter yields length 2 for array [127.5, 1, 127.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 1, 127.5});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 128);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 2 for array [128.5, 1, 128.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_3900
     * @tc.name testUint8ClampedArrayFilterOne039
     * @tc.desc Verify filter yields length 2 for array [128.5, 1, 128.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 1, 128.5});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 128);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields length 3 for array [0.4, 0.4, 0.4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4000
     * @tc.name testUint8ClampedArrayFilterOne040
     * @tc.desc Verify filter yields length 3 for array [0.4, 0.4, 0.4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4, 0.4, 0.4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 0);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter yields length 3 for array [0.9, 0.9, 0.9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4100
     * @tc.name testUint8ClampedArrayFilterOne041
     * @tc.desc Verify filter yields length 3 for array [0.9, 0.9, 0.9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9, 0.9, 0.9});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 1);
    assertEqual(3, r.length());
    }

    /**
     * Verify filter yields length 2 for array [1e2, 1, 1e2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4200
     * @tc.name testUint8ClampedArrayFilterOne042
     * @tc.desc Verify filter yields length 2 for array [1e2, 1, 1e2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 1, 1e2});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 100);
    assertEqual(2, r.length());
    }

    /**
     * Verify filter yields BYTES_PER_ELEMENT 1 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4300
     * @tc.name testUint8ClampedArrayFilterOne043
     * @tc.desc Verify filter yields BYTES_PER_ELEMENT 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    assertEqual(1, r.BYTES_PER_ELEMENT);
    }

    /**
     * Verify filter yields byteLength r.length for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4400
     * @tc.name testUint8ClampedArrayFilterOne044
     * @tc.desc Verify filter yields byteLength r.length for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 2);
    assertEqual(r.length(), r.byteLength());
    }

    /**
     * Verify filter yields byteOffset 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4500
     * @tc.name testUint8ClampedArrayFilterOne045
     * @tc.desc Verify filter yields byteOffset 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v > 0);
    assertEqual(0, r.byteOffset());
    }

    /**
     * Verify filter element at r[0] equals 3 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4600
     * @tc.name testUint8ClampedArrayFilterOne046
     * @tc.desc Verify filter element at r[0] equals 3 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 3);
    assertEqualInt(3, r.get(0));
    }

    /**
     * Verify filter element at r[1] equals 4 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4700
     * @tc.name testUint8ClampedArrayFilterOne047
     * @tc.desc Verify filter element at r[1] equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 3);
    assertEqualInt(4, r.get(1));
    }

    /**
     * Verify filter element at r[1] equals 30 for array [10, 20, 30, 40, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4800
     * @tc.name testUint8ClampedArrayFilterOne048
     * @tc.desc Verify filter element at r[1] equals 30 for array [10, 20, 30, 40, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 20);
    assertEqualInt(30, r.get(1));
    }

    /**
     * Verify filter element at r[0] equals 5 for array [5, 1, 6, 2, 7, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_4900
     * @tc.name testUint8ClampedArrayFilterOne049
     * @tc.desc Verify filter element at r[0] equals 5 for array [5, 1, 6, 2, 7, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 6, 2, 7, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 5);
    assertEqualInt(5, r.get(0));
    }

    /**
     * Verify filter element at r[1] equals 6 for array [5, 1, 6, 2, 7, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5000
     * @tc.name testUint8ClampedArrayFilterOne050
     * @tc.desc Verify filter element at r[1] equals 6 for array [5, 1, 6, 2, 7, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 6, 2, 7, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 5);
    assertEqualInt(6, r.get(1));
    }

    /**
     * Verify filter element at r[2] equals 7 for array [5, 1, 6, 2, 7, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5100
     * @tc.name testUint8ClampedArrayFilterOne051
     * @tc.desc Verify filter element at r[2] equals 7 for array [5, 1, 6, 2, 7, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 6, 2, 7, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 5);
    assertEqualInt(7, r.get(2));
    }

    /**
     * Verify filter v===2 returns single element [2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5200
     * @tc.name testUint8ClampedArrayFilterOne052
     * @tc.desc Verify filter v===2 returns single element [2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v == 2);
    assertEqual(1, r.length());
    assertEqualInt(2, r.get(0));
    }

    /**
     * Verify filter callback returns elements with values greater than or equal to threshold
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5300
     * @tc.name testUint8ClampedArrayFilterOne053
     * @tc.desc Verify filter callback returns elements with values greater than or equal to threshold
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> v >= 20);
    assertEqualInt(20, r.get(0));
    }

    /**
     * Verify filter yields length 4 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5400
     * @tc.name testUint8ClampedArrayFilterOne054
     * @tc.desc Verify filter yields length 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.filter((v, i, a) -> v > 2);
    assertEqual(4, arr.length());
    }

    /**
     * Verify filter element at arr[0] equals 1 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5500
     * @tc.name testUint8ClampedArrayFilterOne055
     * @tc.desc Verify filter element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.filter((v, i, a) -> v > 2);
    assertEqualInt(1, arr.get(0));
    }

    /**
     * Verify filter result shares no buffer with source array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5600
     * @tc.name testUint8ClampedArrayFilterOne056
     * @tc.desc Verify filter result shares no buffer with source array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    /**
     * Verify filter element at arr[0] equals 10 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5700
     * @tc.name testUint8ClampedArrayFilterOne057
     * @tc.desc Verify filter element at arr[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    r.set(0, 99);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify filter element at r[0] equals 10 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5800
     * @tc.name testUint8ClampedArrayFilterOne058
     * @tc.desc Verify filter element at r[0] equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.filter((v, i, a) -> true);
    arr.set(0, 99);
    assertEqualInt(10, r.get(0));
    }

    /**
     * Verify filter() calls predicate 4 times on length-4 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_5900
     * @tc.name testUint8ClampedArrayFilterOne059
     * @tc.desc Verify filter() calls predicate 4 times on length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne059() {
    int[] called = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.filter((v, i, a) -> {
        called[0]++;
        return true;
    });
    assertEqual(4, called[0]);
    }

    /**
     * Verify filter firstIndex equals 0 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_6000
     * @tc.name testUint8ClampedArrayFilterOne060
     * @tc.desc Verify filter firstIndex equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne060() {
    int[] firstIndex = {-1};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.filter((v, i, a) -> {
        if (firstIndex[0] == -1) {
            firstIndex[0] = i;
        }
        return true;
    });
    assertEqual(0, firstIndex[0]);
    }

    /**
     * Verify filter last key equals 2 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_6100
     * @tc.name testUint8ClampedArrayFilterOne061
     * @tc.desc Verify filter last key equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne061() {
    int[] lastIndex = {-1};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.filter((v, i, a) -> {
        lastIndex[0] = i;
        return true;
    });
    assertEqual(2, lastIndex[0]);
    }

    /**
     * Verify filter captured equals 42 for array [42, 1, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_6200
     * @tc.name testUint8ClampedArrayFilterOne062
     * @tc.desc Verify filter captured equals 42 for array [42, 1, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne062() {
    int[] captured = {-1};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 1, 1});
    arr.filter((v, i, a) -> {
        if (i == 0) {
            captured[0] = v;
        }
        return true;
    });
    assertEqual(42, captured[0]);
    }

    /**
     * Verify filter captured equals arr for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_6300
     * @tc.name testUint8ClampedArrayFilterOne063
     * @tc.desc Verify filter captured equals arr for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne063() {
    Uint8ClampedArray[] captured = {null};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.filter((v, i, a) -> {
        captured[0] = a;
        return true;
    });
    assertEqual(arr, captured[0]);
    }

    /**
     * Verify filter propagates Error thrown by the callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FILTER_ONE_6400
     * @tc.name testUint8ClampedArrayFilterOne064
     * @tc.desc Verify filter propagates Error thrown by the callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFilterOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.filter((v, i, a) -> {
        return BasTest.throwTestError("cb-fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
}
