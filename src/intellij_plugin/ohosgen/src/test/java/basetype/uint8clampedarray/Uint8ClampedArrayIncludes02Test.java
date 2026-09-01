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

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayIncludes02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayIncludes02Test extends BasTest {
    /**
     * Verify includes result is true for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0100
     * @tc.name testUint8ClampedArrayIncludesTwo001
     * @tc.desc Verify includes result is true for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.includes(2);
    assertTrue(r);
    }

    /**
     * Verify includes result is false for array [0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0200
     * @tc.name testUint8ClampedArrayIncludesTwo002
     * @tc.desc Verify includes result is false for array [0, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    boolean r = arr.includes(Double.NaN);
    assertFalse(r);
    }

    /**
     * Verify includes(byte 5) returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0300
     * @tc.name testUint8ClampedArrayIncludesTwo003
     * @tc.desc Verify includes(byte 5) returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6});
    int b = 5;
    boolean r = arr.includes(b);
    assertTrue(r);
    }

    /**
     * Verify includes result is true for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0400
     * @tc.name testUint8ClampedArrayIncludesTwo004
     * @tc.desc Verify includes result is true for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.includes(3, 1);
    assertTrue(r);
    }

    /**
     * Verify includes(10) true for present element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0500
     * @tc.name testUint8ClampedArrayIncludesTwo005
     * @tc.desc Verify includes(10) true for present element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(10));
    }

    /**
     * Verify includes(99) false for absent element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0600
     * @tc.name testUint8ClampedArrayIncludesTwo006
     * @tc.desc Verify includes(99) false for absent element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertFalse(arr.includes(99));
    }

    /**
     * Verify includes result is false for array [100, 200, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0700
     * @tc.name testUint8ClampedArrayIncludesTwo007
     * @tc.desc Verify includes result is false for array [100, 200, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 255});
    assertFalse(arr.includes(256));
    }

    /**
     * Verify includes(50) true for single-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0800
     * @tc.name testUint8ClampedArrayIncludesTwo008
     * @tc.desc Verify includes(50) true for single-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50});
    boolean r = arr.includes(50);
    assertTrue(r);
    }

    /**
     * Verify includes(51) false for absent element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_0900
     * @tc.name testUint8ClampedArrayIncludesTwo009
     * @tc.desc Verify includes(51) false for absent element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50});
    boolean r = arr.includes(51);
    assertFalse(r);
    }

    /**
     * Verify includes yields length before for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1000
     * @tc.name testUint8ClampedArrayIncludesTwo010
     * @tc.desc Verify includes yields length before for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.length();
    assertTrue(arr.includes(2));
    assertEqual(before, arr.length());
    }

    /**
     * Verify includes yields byteLength before for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1100
     * @tc.name testUint8ClampedArrayIncludesTwo011
     * @tc.desc Verify includes yields byteLength before for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int before = arr.byteLength();
    assertTrue(arr.includes(3));
    assertEqual(before, arr.byteLength());
    }

    /**
     * Verify includes byteLength length BYTES_PER_ELEMENT=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1200
     * @tc.name testUint8ClampedArrayIncludesTwo012
     * @tc.desc Verify includes byteLength length BYTES_PER_ELEMENT=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    assertTrue(arr.includes(4));
    assertEqual(arr.length(), arr.byteLength());
    }

    /**
     * Verify includes yields length 0 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1300
     * @tc.name testUint8ClampedArrayIncludesTwo013
     * @tc.desc Verify includes yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertFalse(arr.includes(0));
    assertEqual(0, arr.length());
    }

    /**
     * Verify includes yields byteLength 0 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1400
     * @tc.name testUint8ClampedArrayIncludesTwo014
     * @tc.desc Verify includes yields byteLength 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertFalse(arr.includes(0));
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify includes yields byteOffset before for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1500
     * @tc.name testUint8ClampedArrayIncludesTwo015
     * @tc.desc Verify includes yields byteOffset before for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo015() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int before = arr.byteOffset();
    assertTrue(arr.includes(0));
    assertEqual(before, arr.byteOffset());
    }

    /**
     * Verify includes yields byteOffset 2 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1600
     * @tc.name testUint8ClampedArrayIncludesTwo016
     * @tc.desc Verify includes yields byteOffset 2 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertFalse(arr.includes(1));
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify includes value in length 1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1700
     * @tc.name testUint8ClampedArrayIncludesTwo017
     * @tc.desc Verify includes value in length 1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(1023, 7);
    assertTrue(arr.includes(7));
    }

    /**
     * Verify includes BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1800
     * @tc.name testUint8ClampedArrayIncludesTwo018
     * @tc.desc Verify includes BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertTrue(arr.includes(2));
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify includes does not mutate first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_1900
     * @tc.name testUint8ClampedArrayIncludesTwo019
     * @tc.desc Verify includes does not mutate first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertTrue(arr.includes(22));
    assertEqualInt(11, arr.get(0));
    }

    /**
     * Verify includes does not mutate all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2000
     * @tc.name testUint8ClampedArrayIncludesTwo020
     * @tc.desc Verify includes does not mutate all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    assertFalse(arr.includes(99));
    assertEqualInt(5, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(15, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    /**
     * Verify join arr.join(',') equals before for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2100
     * @tc.name testUint8ClampedArrayIncludesTwo021
     * @tc.desc Verify join arr.join(',') equals before for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    String before = arr.join(",");
    assertTrue(arr.includes(2));
    assertEqual(before, arr.join(","));
    }

    /**
     * Verify toString arr.toString() equals before for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2200
     * @tc.name testUint8ClampedArrayIncludesTwo022
     * @tc.desc Verify toString arr.toString() equals before for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    String before = String.valueOf(arr);
    assertFalse(arr.includes(99));
    assertEqual(before, String.valueOf(arr));
    }

    /**
     * Verify includes(2, 1) returns true and array element at index 1 remains unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2300
     * @tc.name testUint8ClampedArrayIncludesTwo023
     * @tc.desc Verify includes(2, 1) returns true and array element at index 1 remains unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    boolean r = arr.includes(2, 1);
    assertTrue(r);
    assertEqualInt(2, arr.get(1));
    }

    /**
     * Verify includes(10, -2) returns false with negative fromIndex and array element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2400
     * @tc.name testUint8ClampedArrayIncludesTwo024
     * @tc.desc Verify includes(10, -2) returns false with negative fromIndex and array element
     * at index 0 remains unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.includes(10, -2);
    assertFalse(r);
    assertEqualInt(10, arr.get(0));
    }

    /**
     * Verify includes element at arr[0] equals 0 for array [0, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2500
     * @tc.name testUint8ClampedArrayIncludesTwo025
     * @tc.desc Verify includes element at arr[0] equals 0 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertFalse(arr.includes(Double.NaN));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    }

    /**
     * Verify includes buffer reference matches for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2600
     * @tc.name testUint8ClampedArrayIncludesTwo026
     * @tc.desc Verify includes buffer reference matches for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    assertTrue(arr.includes(2));
    assertEqual(bufBefore, arr.buffer());
    }

    /**
     * Verify includes yields byteLength before for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2700
     * @tc.name testUint8ClampedArrayIncludesTwo027
     * @tc.desc Verify includes yields byteLength before for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.buffer().byteLength();
    assertTrue(arr.includes(3));
    assertEqual(before, arr.buffer().byteLength());
    }

    /**
     * Verify includes buffer.byteLength 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2800
     * @tc.name testUint8ClampedArrayIncludesTwo028
     * @tc.desc Verify includes buffer.byteLength 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    assertFalse(arr.includes(0));
    assertEqual(5, arr.buffer().byteLength());
    }

    /**
     * Verify two includes(2) calls return equal results
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_2900
     * @tc.name testUint8ClampedArrayIncludesTwo029
     * @tc.desc Verify two includes(2) calls return equal results
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r1 = arr.includes(2);
    boolean r2 = arr.includes(2);
    assertEqual(r2, r1);
    }

    /**
     * Verify includes returns true for present and false for absent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3000
     * @tc.name testUint8ClampedArrayIncludesTwo030
     * @tc.desc Verify includes returns true for present and false for absent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean a = arr.includes(10);
    boolean b = arr.includes(99);
    assertTrue(a);
    assertFalse(b);
    }

    /**
     * Verify subarray buffer reference matches for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3100
     * @tc.name testUint8ClampedArrayIncludesTwo031
     * @tc.desc Verify subarray buffer reference matches for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo031() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    assertTrue(sub.includes(2));
    assertEqual(parent.buffer(), sub.buffer());
    }

    /**
     * Verify includes returns true for element in subarray(1, 3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3200
     * @tc.name testUint8ClampedArrayIncludesTwo032
     * @tc.desc Verify includes returns true for element in subarray(1, 3)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo032() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    assertTrue(sub.includes(2));
    }

    /**
     * Verify subarray includes byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3300
     * @tc.name testUint8ClampedArrayIncludesTwo033
     * @tc.desc Verify subarray includes byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo033() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    int before = sub.byteOffset();
    assertTrue(sub.includes(2));
    assertEqual(before, sub.byteOffset());
    }

    /**
     * Verify subarray yields length 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3400
     * @tc.name testUint8ClampedArrayIncludesTwo034
     * @tc.desc Verify subarray yields length 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo034() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    assertTrue(sub.includes(2));
    assertEqual(2, sub.length());
    }

    /**
     * Verify includes returns true for slice element and slice shares no buffer with parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3500
     * @tc.name testUint8ClampedArrayIncludesTwo035
     * @tc.desc Verify includes returns true for slice element and slice shares no buffer with parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo035() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.slice(0, 2);
    assertTrue(s.includes(1));
    assertNotEqual(parent.buffer(), s.buffer());
    }

    /**
     * Verify includes returns true for element in slice(0, 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3600
     * @tc.name testUint8ClampedArrayIncludesTwo036
     * @tc.desc Verify includes returns true for element in slice(0, 2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo036() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.slice(0, 2);
    assertTrue(s.includes(1));
    }

    /**
     * Verify includes returns true for slice element after parent mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3700
     * @tc.name testUint8ClampedArrayIncludesTwo037
     * @tc.desc Verify includes returns true for slice element after parent mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo037() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.slice(0, 2);
    parent.set(0, 99);
    assertTrue(s.includes(1));
    }

    /**
     * Verify includes result is true for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3800
     * @tc.name testUint8ClampedArrayIncludesTwo038
     * @tc.desc Verify includes result is true for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo038() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.set(0, 77);
    assertTrue(secondView.includes(77));
    }

    /**
     * Verify includes buffer reference matches for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_3900
     * @tc.name testUint8ClampedArrayIncludesTwo039
     * @tc.desc Verify includes buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo039() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    assertTrue(secondView.includes(0));
    assertEqual(secondView.buffer(), firstView.buffer());
    }

    /**
     * Verify includes returns false for empty subarray(1, 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4000
     * @tc.name testUint8ClampedArrayIncludesTwo040
     * @tc.desc Verify includes returns false for empty subarray(1, 1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo040() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray empty = parent.subarray(1, 1);
    assertFalse(empty.includes(2));
    }

    /**
     * Verify subarray yields length 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4100
     * @tc.name testUint8ClampedArrayIncludesTwo041
     * @tc.desc Verify subarray yields length 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo041() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray empty = parent.subarray(1, 1);
    assertFalse(empty.includes(0));
    assertEqual(0, empty.length());
    }

    /**
     * Verify subarray includes parent.buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4200
     * @tc.name testUint8ClampedArrayIncludesTwo042
     * @tc.desc Verify subarray includes parent.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo042() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray empty = parent.subarray(2, 2);
    assertFalse(empty.includes(0));
    assertEqual(parent.buffer(), empty.buffer());
    }

    /**
     * Verify includes result is false for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4300
     * @tc.name testUint8ClampedArrayIncludesTwo043
     * @tc.desc Verify includes result is false for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo043() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    full.set(0, 100);
    full.set(5, 200);
    Uint8ClampedArray mid = new Uint8ClampedArray(buf, 1, 3);
    assertFalse(mid.includes(100));
    }

    /**
     * Verify includes result is true for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4400
     * @tc.name testUint8ClampedArrayIncludesTwo044
     * @tc.desc Verify includes result is true for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo044() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    full.set(2, 55);
    Uint8ClampedArray mid = new Uint8ClampedArray(buf, 1, 3);
    assertTrue(mid.includes(55));
    }

    /**
     * Verify includes yields byteOffset 3 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4500
     * @tc.name testUint8ClampedArrayIncludesTwo045
     * @tc.desc Verify includes yields byteOffset 3 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 3, 4);
    assertTrue(view.includes(0));
    assertEqual(3, view.byteOffset());
    }

    /**
     * Verify includes yields length 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4600
     * @tc.name testUint8ClampedArrayIncludesTwo046
     * @tc.desc Verify includes yields length 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 3, 4);
    assertTrue(view.includes(0));
    assertEqual(4, view.length());
    }

    /**
     * Verify includes yields byteLength 10 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4700
     * @tc.name testUint8ClampedArrayIncludesTwo047
     * @tc.desc Verify includes yields byteLength 10 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo047() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertTrue(arr.includes(0));
    assertEqual(10, buf.byteLength());
    }

    /**
     * Verify includes result is true for array [1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4800
     * @tc.name testUint8ClampedArrayIncludesTwo048
     * @tc.desc Verify includes result is true for array [1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    boolean r = arr.includes(1);
    assertTrue(r);
    }

    /**
     * Verify includes(2) result === false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_4900
     * @tc.name testUint8ClampedArrayIncludesTwo049
     * @tc.desc Verify includes(2) result === false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    boolean r = arr.includes(2);
    assertFalse(r);
    }

    /**
     * Verify includes r1 equals r2 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_5000
     * @tc.name testUint8ClampedArrayIncludesTwo050
     * @tc.desc Verify includes r1 equals r2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r1 = arr.includes(2);
    boolean r2 = arr.includes(2, 0);
    assertEqual(r2, r1);
    }

    /**
     * Verify includes NaN false and zero true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_5100
     * @tc.name testUint8ClampedArrayIncludesTwo051
     * @tc.desc Verify includes NaN false and zero true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    boolean rNaN = arr.includes(Double.NaN);
    boolean r0 = arr.includes(0);
    assertFalse(rNaN);
    assertTrue(r0);
    }

    /**
     * Verify includes(byte) includes(number)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_TWO_5200
     * @tc.name testUint8ClampedArrayIncludesTwo052
     * @tc.desc Verify includes(byte) includes(number)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 43});
    int b = 42;
    assertEqual(arr.includes(42), arr.includes(b));
    }
}
