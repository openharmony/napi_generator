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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull03Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0100
     * @tc.name testUint8ClampedArrayFullThree001
     * @tc.desc Verify new Uint8ClampedArray(7) length=7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(7);
    assertEqual(7, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0200
     * @tc.name testUint8ClampedArrayFullThree002
     * @tc.desc Verify new Uint8ClampedArray(buffer, offset, length)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree002() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 5);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0300
     * @tc.name testUint8ClampedArrayFullThree003
     * @tc.desc Verify constructing length-2 array yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0400
     * @tc.name testUint8ClampedArrayFullThree004
     * @tc.desc Verify constructing length-3 array yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0500
     * @tc.name testUint8ClampedArrayFullThree005
     * @tc.desc Verify constructing length-3 array yields byteLength 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    assertEqual(3, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0600
     * @tc.name testUint8ClampedArrayFullThree006
     * @tc.desc Verify constructor element [0] equals 5 for array [5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5});
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0700
     * @tc.name testUint8ClampedArrayFullThree007
     * @tc.desc Verify arr.buffer.byteLength equals 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(4, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0800
     * @tc.name testUint8ClampedArrayFullThree008
     * @tc.desc Verify constructing empty array yields BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
    */

    @Test
    void testUint8ClampedArrayFullThree008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_0900
     * @tc.name testUint8ClampedArrayFullThree009
     * @tc.desc Verify at arr.at(0) equals 100 for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    assertEqual(100, arr.at(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1000
     * @tc.name testUint8ClampedArrayFullThree010
     * @tc.desc Verify indexOf arr.indexOf(99) equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(-1, arr.indexOf(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1100
     * @tc.name testUint8ClampedArrayFullThree011
     * @tc.desc Verify join arr.join(',') equals '1,2' for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertEqual("1,2", arr.join(","));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1200
     * @tc.name testUint8ClampedArrayFullThree012
     * @tc.desc Verify toString arr.toString() equals '1,2' for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertEqual("1,2", String.valueOf(arr));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1300
     * @tc.name testUint8ClampedArrayFullThree013
     * @tc.desc Verify includes result is true for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertTrue(arr.includes(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1400
     * @tc.name testUint8ClampedArrayFullThree014
     * @tc.desc Verify every returns true when all values are positive
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertTrue(arr.every((v) -> v > 0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1500
     * @tc.name testUint8ClampedArrayFullThree015
     * @tc.desc Verify some returns false when no value exceeds 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertFalse(arr.some((v) -> v > 100));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1600
     * @tc.name testUint8ClampedArrayFullThree016
     * @tc.desc Verify the length constructor allocates four zero-filled bytes
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(4, arr.byteLength());
    assertEqual(0, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1700
     * @tc.name testUint8ClampedArrayFullThree017
     * @tc.desc Verify array construction preserves length and boundary values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    assertEqual(2, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1800
     * @tc.name testUint8ClampedArrayFullThree018
     * @tc.desc Verify ArrayBuffer construction shares the supplied four-byte buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree018() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(buf, arr.buffer());
    assertEqual(4, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_1900
     * @tc.name testUint8ClampedArrayFullThree019
     * @tc.desc Verify Uint8ClampedArray.of preserves values [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree019() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(5, 6, 7);
    assertEqual(3, arr.length());
    assertEqual(5, arr.get(0));
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2000
     * @tc.name testUint8ClampedArrayFullThree020
     * @tc.desc Verify Uint8ClampedArray.from preserves iterable ordering
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree020() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2100
     * @tc.name testUint8ClampedArrayFullThree021
     * @tc.desc Verify slice copies values into storage independent from the source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = arr.slice();
    assertNotEqual(arr.buffer(), s.buffer());
    s.set(0, 9);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2200
     * @tc.name testUint8ClampedArrayFullThree022
     * @tc.desc Verify subarray selects the requested range and shares source storage
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(2, sub.get(0));
    sub.set(0, 9);
    assertEqual(9, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2300
     * @tc.name testUint8ClampedArrayFullThree023
     * @tc.desc Verify map transforms each value without mutating the source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray m = arr.map((v) -> v + 1);
    assertEqual(2, m.get(0));
    assertEqual(3, m.get(1));
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2400
     * @tc.name testUint8ClampedArrayFullThree024
     * @tc.desc Verify filter retains values greater than one in source order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray f = arr.filter((v) -> v > 1);
    assertEqual(2, f.length());
    assertEqual(2, f.get(0));
    assertEqual(3, f.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2500
     * @tc.name testUint8ClampedArrayFullThree025
     * @tc.desc Verify toReversed reverses values without mutating the source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.get(0));
    assertEqual(1, r.get(2));
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2600
     * @tc.name testUint8ClampedArrayFullThree026
     * @tc.desc Verify toSorted orders values without mutating the source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray s = arr.toSorted();
    assertEqual(1, s.get(0));
    assertEqual(3, s.get(2));
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2700
     * @tc.name testUint8ClampedArrayFullThree027
     * @tc.desc Verify with replaces one value without mutating the source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 9);
    assertEqual(9, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2800
     * @tc.name testUint8ClampedArrayFullThree028
     * @tc.desc Verify constructor result is an instance of ArrayBuffer for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_2900
     * @tc.name testUint8ClampedArrayFullThree029
     * @tc.desc Verify constructing array [10, 20, 30, 40] yields length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    assertEqual(4, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3000
     * @tc.name testUint8ClampedArrayFullThree030
     * @tc.desc Verify byteLength length BYTES_PER_ELEMENT=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    assertEqual(10, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3100
     * @tc.name testUint8ClampedArrayFullThree031
     * @tc.desc Verify constructing empty array yields byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3200
     * @tc.name testUint8ClampedArrayFullThree032
     * @tc.desc Verify Uint8ClampedArray.from yields length 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree032() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3300
     * @tc.name testUint8ClampedArrayFullThree033
     * @tc.desc Verify Uint8ClampedArray.of yields length 1 for of(99)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree033() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(99);
    assertEqual(1, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3400
     * @tc.name testUint8ClampedArrayFullThree034
     * @tc.desc Verify constructing 8-element array yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3500
     * @tc.name testUint8ClampedArrayFullThree035
     * @tc.desc Verify buffer offset=7 byteOffset=7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree035() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 7, 1);
    assertEqual(7, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3600
     * @tc.name testUint8ClampedArrayFullThree036
     * @tc.desc Verify subarray yields byteOffset 5 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree036() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 2, 10);
    Uint8ClampedArray sub = parent.subarray(3);
    assertEqual(5, sub.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3700
     * @tc.name testUint8ClampedArrayFullThree037
     * @tc.desc Verify slice yields byteOffset 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree037() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray s = parent.slice(2);
    assertEqual(0, s.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3800
     * @tc.name testUint8ClampedArrayFullThree038
     * @tc.desc Verify slice() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.slice();
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_3900
     * @tc.name testUint8ClampedArrayFullThree039
     * @tc.desc Verify slice() does not mutate original array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.slice();
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4000
     * @tc.name testUint8ClampedArrayFullThree040
     * @tc.desc Verify toReversed() does not mutate original array last element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.toReversed();
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4100
     * @tc.name testUint8ClampedArrayFullThree041
     * @tc.desc Verify map() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.map((v) -> v + 100);
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4200
     * @tc.name testUint8ClampedArrayFullThree042
     * @tc.desc Verify filter() does not mutate original array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.filter((v) -> v > 1);
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4300
     * @tc.name testUint8ClampedArrayFullThree043
     * @tc.desc Verify subarray() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.subarray(1);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4400
     * @tc.name testUint8ClampedArrayFullThree044
     * @tc.desc Verify every() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.every((v) -> v > 0);
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4500
     * @tc.name testUint8ClampedArrayFullThree045
     * @tc.desc Verify some() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.some((v) -> v > 2);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4600
     * @tc.name testUint8ClampedArrayFullThree046
     * @tc.desc Verify find() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.find((v) -> v == 2);
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4700
     * @tc.name testUint8ClampedArrayFullThree047
     * @tc.desc Verify reduce() does not mutate original array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reduce((a, b, index, array) -> a + b, 0);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4800
     * @tc.name testUint8ClampedArrayFullThree048
     * @tc.desc Verify .set ret equals undefined for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    Integer ret = arr.set(new Uint8ClampedArray(new int[] {1, 2}), 0);
    assertNull(ret);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_4900
     * @tc.name testUint8ClampedArrayFullThree049
     * @tc.desc Verify constructor ret equals arr for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray ret = arr.valueOf();
    assertEqual(arr, ret);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5000
     * @tc.name testUint8ClampedArrayFullThree050
     * @tc.desc Verify sort yields length 3 for array [3, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray ret = arr.sort();
    assertEqual(3, ret.length());
    assertEqual(1, ret.get(0));
    assertEqual(2, ret.get(1));
    assertEqual(3, ret.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5100
     * @tc.name testUint8ClampedArrayFullThree051
     * @tc.desc Verify fill yields length 5 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    Uint8ClampedArray ret = arr.fill(9);
    assertEqual(5, ret.length());
    assertEqual(9, ret.get(0));
    assertEqual(9, ret.get(1));
    assertEqual(9, ret.get(2));
    assertEqual(9, ret.get(3));
    assertEqual(9, ret.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5200
     * @tc.name testUint8ClampedArrayFullThree052
     * @tc.desc Verify subarray buffer reference matches for length-8 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree052() {
    Uint8ClampedArray parent = new Uint8ClampedArray(8);
    Uint8ClampedArray sub = parent.subarray(2, 6);
    assertEqual(parent.buffer(), sub.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5300
     * @tc.name testUint8ClampedArrayFullThree053
     * @tc.desc Verify subarray element at sub[1] equals 77 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree053() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    parent.set(2, 77);
    assertEqual(77, sub.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5400
     * @tc.name testUint8ClampedArrayFullThree054
     * @tc.desc Verify slice result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree054() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice();
    assertNotEqual(parent.buffer(), s.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5500
     * @tc.name testUint8ClampedArrayFullThree055
     * @tc.desc Verify slice element at parent[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree055() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice();
    s.set(0, 99);
    assertEqual(1, parent.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5600
     * @tc.name testUint8ClampedArrayFullThree056
     * @tc.desc Verify map result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree056() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = parent.map((v) -> v);
    assertNotEqual(parent.buffer(), m.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5700
     * @tc.name testUint8ClampedArrayFullThree057
     * @tc.desc Verify filter result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree057() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray f = parent.filter((v) -> true);
    assertNotEqual(parent.buffer(), f.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5800
     * @tc.name testUint8ClampedArrayFullThree058
     * @tc.desc Verify toSorted result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree058() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray s = parent.toSorted();
    assertNotEqual(parent.buffer(), s.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_5900
     * @tc.name testUint8ClampedArrayFullThree059
     * @tc.desc Verify with result shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree059() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = parent.with(0, 9);
    assertNotEqual(parent.buffer(), w.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6000
     * @tc.name testUint8ClampedArrayFullThree060
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree060() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    assertEqual(secondView.buffer(), firstView.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6100
     * @tc.name testUint8ClampedArrayFullThree061
     * @tc.desc Verify constructor element [0] equals 88 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree061() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.set(0, 88);
    assertEqual(88, secondView.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6200
     * @tc.name testUint8ClampedArrayFullThree062
     * @tc.desc Verify from(Uint8ClampedArray) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree062() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray dup = Uint8ClampedArray.from(src);
    assertNotEqual(src.buffer(), dup.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6300
     * @tc.name testUint8ClampedArrayFullThree063
     * @tc.desc Verify Uint8ClampedArray.from result is an instance of ArrayBuffer for from([1, 2, 3])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree063() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6400
     * @tc.name testUint8ClampedArrayFullThree064
     * @tc.desc Verify subarray yields byteLength 4 for length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree064() {
    Uint8ClampedArray parent = new Uint8ClampedArray(10);
    Uint8ClampedArray sub = parent.subarray(2, 6);
    assertEqual(4, sub.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6500
     * @tc.name testUint8ClampedArrayFullThree065
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree065() {
    double[] src = new double[] {256.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_THREE_6600
     * @tc.name testUint8ClampedArrayFullThree066
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullThree066() {
    double[] src = new double[] {-1.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));
    }
}
