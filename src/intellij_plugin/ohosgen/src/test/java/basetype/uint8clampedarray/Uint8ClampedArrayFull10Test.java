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
 * Uint8ClampedArrayFull10Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull10Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0100
     * @tc.name testUint8ClampedArrayFullTen001
     * @tc.desc Verify toLocaleString returns expected string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen001() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2});
    String r = a.toLocaleString();
    assertEqual("1,2", r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0200
     * @tc.name testUint8ClampedArrayFullTen002
     * @tc.desc Verify a full slice remains unchanged after the source is mutated
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen002() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = a.slice();
    a.set(0, 9);
    assertEqual(1, s.get(0));
    assertEqual(3, s.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0300
     * @tc.name testUint8ClampedArrayFullTen003
     * @tc.desc Verify fill r equals a for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen003() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    Uint8ClampedArray r = a.fill(5);
    assertEqual(a, r);
    assertEqual(5, r.get(0));
    assertEqual(5, r.get(1));
    assertEqual(5, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0400
     * @tc.name testUint8ClampedArrayFullTen004
     * @tc.desc Verify reverse r equals a for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen004() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = a.reverse();
    assertEqual(a, r);
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0500
     * @tc.name testUint8ClampedArrayFullTen005
     * @tc.desc Verify sort r equals a for array [3, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen005() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = a.sort();
    assertEqual(a, r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0600
     * @tc.name testUint8ClampedArrayFullTen006
     * @tc.desc Verify copyWithin r equals a for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen006() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = a.copyWithin(0, 1);
    assertEqual(a, r);
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(3, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0700
     * @tc.name testUint8ClampedArrayFullTen007
     * @tc.desc Verify constructor r equals a for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen007() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = a;
    Uint8ClampedArray r = a.valueOf();
    assertEqual(a, r);
    assertEqual(r, b);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0800
     * @tc.name testUint8ClampedArrayFullTen008
     * @tc.desc Verify constructing length-4 array yields BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen008() {
    Uint8ClampedArray a = new Uint8ClampedArray(4);
    assertEqual(1, a.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_0900
     * @tc.name testUint8ClampedArrayFullTen009
     * @tc.desc Verify constructing 7-element array yields byteLength 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen009() {
    Uint8ClampedArray a = new Uint8ClampedArray(7);
    assertEqual(7, a.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1000
     * @tc.name testUint8ClampedArrayFullTen010
     * @tc.desc Verify constructing length-4 array yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen010() {
    Uint8ClampedArray a = new Uint8ClampedArray(4);
    assertEqual(0, a.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1100
     * @tc.name testUint8ClampedArrayFullTen011
     * @tc.desc Verify subarray yields byteOffset 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen011() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = a.subarray(2, 4);
    assertEqual(2, s.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1200
     * @tc.name testUint8ClampedArrayFullTen012
     * @tc.desc Verify includes result is true for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen012() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertTrue(a.includes(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1300
     * @tc.name testUint8ClampedArrayFullTen013
     * @tc.desc Verify some behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen013() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    assertFalse(a.some((unusedVal, unusedIndex, array) -> true));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1400
     * @tc.name testUint8ClampedArrayFullTen014
     * @tc.desc Verify find behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen014() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    assertNull(a.find((unusedVal, unusedIndex, array) -> true));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1500
     * @tc.name testUint8ClampedArrayFullTen015
     * @tc.desc Verify findIndex behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen015() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    assertEqual(-1, a.findIndex((unusedVal, unusedIndex, array) -> true));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1600
     * @tc.name testUint8ClampedArrayFullTen016
     * @tc.desc Verify includes result is false for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen016() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    assertFalse(a.includes(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1700
     * @tc.name testUint8ClampedArrayFullTen017
     * @tc.desc Verify join a.join(',') equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen017() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    assertEqual("", a.join(","));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1800
     * @tc.name testUint8ClampedArrayFullTen018
     * @tc.desc Verify toString a.toString() equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen018() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    assertEqual("", String.valueOf(a));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_1900
     * @tc.name testUint8ClampedArrayFullTen019
     * @tc.desc Verify reduce initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen019() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    try {
    a.reduce((acc, cur, index, array) -> acc + cur);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2000
     * @tc.name testUint8ClampedArrayFullTen020
     * @tc.desc Verify reduceRight initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen020() {
    Uint8ClampedArray a = new Uint8ClampedArray(0);
    try {
    a.reduceRight((acc, cur, index, array) -> acc + cur);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2100
     * @tc.name testUint8ClampedArrayFullTen021
     * @tc.desc Verify set offset+length RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen021() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    try {
    a.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2200
     * @tc.name testUint8ClampedArrayFullTen022
     * @tc.desc Verify forEach propagates Error thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen022() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.forEach((unusedVal, unusedIndex, array) -> { throw new Error("fe");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2300
     * @tc.name testUint8ClampedArrayFullTen023
     * @tc.desc Verify copyWithin element at a[2] equals 255 for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen023() {
    Uint8ClampedArray a = new Uint8ClampedArray(4);
    a.set(0, 1000);
    a.set(1, -5);
    a.copyWithin(2, 0, 2);
    assertEqual(255, a.get(2));
    assertEqual(0, a.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2400
     * @tc.name testUint8ClampedArrayFullTen024
     * @tc.desc Verify sort element at a[0] equals 0 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen024() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    a.set(0, 300);
    a.set(1, 100);
    a.set(2, -10);
    a.sort();
    assertEqual(0, a.get(0));
    assertEqual(255, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2500
     * @tc.name testUint8ClampedArrayFullTen025
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen025() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s1 = a.subarray(1, 5);
    Uint8ClampedArray s2 = s1.subarray(0, 2);
    assertEqual(a.buffer(), s2.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2600
     * @tc.name testUint8ClampedArrayFullTen026
     * @tc.desc Verify subarray element at a[1] equals 99 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen026() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s1 = a.subarray(1, 5);
    Uint8ClampedArray s2 = s1.subarray(0, 2);
    s2.set(0, 99);
    assertEqual(99, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2700
     * @tc.name testUint8ClampedArrayFullTen027
     * @tc.desc Verify subarray element at a[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen027() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = a.subarray(0, 2);
    Uint8ClampedArray sli = sub.slice();
    sli.set(0, 88);
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2800
     * @tc.name testUint8ClampedArrayFullTen028
     * @tc.desc Verify constructor element [0] equals 11 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0, 2);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 2, 2);
    firstView.set(0, 11);
    secondView.set(1, 44);
    Uint8ClampedArray all = new Uint8ClampedArray(buf);
    assertEqual(11, all.get(0));
    assertEqual(44, all.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_2900
     * @tc.name testUint8ClampedArrayFullTen029
     * @tc.desc Verify subarray.byteOffset parent.byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 2, 6);
    Uint8ClampedArray s = a.subarray(1, 4);
    assertEqual(3, s.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3000
     * @tc.name testUint8ClampedArrayFullTen030
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteLength 16
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen030() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(16, a.buffer().byteLength());
    assertEqual(4, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3100
     * @tc.name testUint8ClampedArrayFullTen031
     * @tc.desc Verify of(127.5) half-even rounding 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen031() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(127.5);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3200
     * @tc.name testUint8ClampedArrayFullTen032
     * @tc.desc Verify of(128.5) half-even rounding 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen032() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(128.5);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3300
     * @tc.name testUint8ClampedArrayFullTen033
     * @tc.desc Verify of(0.5) half-even rounding 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen033() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3400
     * @tc.name testUint8ClampedArrayFullTen034
     * @tc.desc Verify of(0.9) 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen034() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.9);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3500
     * @tc.name testUint8ClampedArrayFullTen035
     * @tc.desc Verify of(0.4) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen035() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.4);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3600
     * @tc.name testUint8ClampedArrayFullTen036
     * @tc.desc Verify of(1e9) 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen036() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1e9);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3700
     * @tc.name testUint8ClampedArrayFullTen037
     * @tc.desc Verify of(-1e9) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen037() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-1e9);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3800
     * @tc.name testUint8ClampedArrayFullTen038
     * @tc.desc Verify of(Number.MAX_VALUE) 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen038() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.MAX_VALUE);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_TEN_3900
     * @tc.name testUint8ClampedArrayFullTen039
     * @tc.desc Verify of(-Infinity) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullTen039() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }
}
