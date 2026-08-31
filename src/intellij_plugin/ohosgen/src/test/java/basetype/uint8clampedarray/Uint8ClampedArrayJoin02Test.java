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
 * Uint8ClampedArrayJoin02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayJoin02Test extends BasTest {
    /**
     * Verify join r equals '1, 100' for array [1, 100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0100
     * @tc.name testUint8ClampedArrayJoinTwo001
     * @tc.desc Verify join r equals '1, 100' for array [1, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 100});
    String r = arr.join(",");
    assertEqual("1,100", r);
    }

    /**
     * Verify join r equals '10' for array [0x0A]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0200
     * @tc.name testUint8ClampedArrayJoinTwo002
     * @tc.desc Verify join r equals '10' for array [0x0A]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x0A});
    String r = arr.join();
    assertEqual("10", r);
    }

    /**
     * Verify join r equals '15' for array [0b1111]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0300
     * @tc.name testUint8ClampedArrayJoinTwo003
     * @tc.desc Verify join r equals '15' for array [0b1111]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1111});
    String r = arr.join();
    assertEqual("15", r);
    }

    /**
     * Verify join r equals '15' for array [0o17]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0400
     * @tc.name testUint8ClampedArrayJoinTwo004
     * @tc.desc Verify join r equals '15' for array [0o17]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017});
    String r = arr.join();
    assertEqual("15", r);
    }

    /**
     * Verify join r equals '100' for array [1e2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0500
     * @tc.name testUint8ClampedArrayJoinTwo005
     * @tc.desc Verify join r equals '100' for array [1e2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2});
    String r = arr.join();
    assertEqual("100", r);
    }

    /**
     * Verify join r equals '1, 2' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0600
     * @tc.name testUint8ClampedArrayJoinTwo006
     * @tc.desc Verify join r equals '1, 2' for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.join();
    assertEqual("1,2", r);
    }

    /**
     * Verify join() of length-0 array returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0700
     * @tc.name testUint8ClampedArrayJoinTwo007
     * @tc.desc Verify join() of length-0 array returns empty string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.join();
    assertEqual(0, r.length());
    }

    /**
     * Verify join() of single-element [42] returns 2-char string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0800
     * @tc.name testUint8ClampedArrayJoinTwo008
     * @tc.desc Verify join() of single-element [42] returns 2-char string
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    String r = arr.join();
    assertEqual(2, r.length());
    }

    /**
     * Verify join(',') of 3 elements yields length 5 (3 digits + 2 separators)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_0900
     * @tc.name testUint8ClampedArrayJoinTwo009
     * @tc.desc Verify join(',') of 3 elements yields length 5 (3 digits + 2 separators)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join(",");
    assertEqual(5, r.length());
    }

    /**
     * Verify join('') of 3 two-digit elements yields length 6 (no separator)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1000
     * @tc.name testUint8ClampedArrayJoinTwo010
     * @tc.desc Verify join('') of 3 two-digit elements yields length 6 (no separator)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.join("");
    assertEqual(6, r.length());
    }

    /**
     * Verify join() does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1100
     * @tc.name testUint8ClampedArrayJoinTwo011
     * @tc.desc Verify join() does not change array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int oldLen = arr.length();
    assertEqual("1,2,3", arr.join(","));
    assertEqual(oldLen, arr.length());
    }

    /**
     * Verify join() does not change element values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1200
     * @tc.name testUint8ClampedArrayJoinTwo012
     * @tc.desc Verify join() does not change element values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("1,2,3", arr.join(","));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify join() returns same result on repeated calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1300
     * @tc.name testUint8ClampedArrayJoinTwo013
     * @tc.desc Verify join() returns same result on repeated calls
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r1 = arr.join(",");
    String r2 = arr.join(",");
    assertEqual(r2, r1);
    }

    /**
     * Verify join results differ when using different separators
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1400
     * @tc.name testUint8ClampedArrayJoinTwo014
     * @tc.desc Verify join results differ when using different separators
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r1 = arr.join(",");
    String r2 = arr.join("|");
    assertNotEqual(r2, r1);
    }

    /**
     * Verify join r1 equals '1#2' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1500
     * @tc.name testUint8ClampedArrayJoinTwo015
     * @tc.desc Verify join r1 equals '1#2' for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String sep = "#";
    String r1 = arr.join(sep);
    sep = "@";
    String r2 = arr.join(sep);
    assertEqual("1#2", r1);
    assertEqual("1@2", r2);
    }

    /**
     * Verify join yields byteLength old for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1600
     * @tc.name testUint8ClampedArrayJoinTwo016
     * @tc.desc Verify join yields byteLength old for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int old = arr.buffer().byteLength();
    assertEqual("1,2,3,4", arr.join(","));
    assertEqual(old, arr.buffer().byteLength());
    }

    /**
     * Verify join yields byteOffset old for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1700
     * @tc.name testUint8ClampedArrayJoinTwo017
     * @tc.desc Verify join yields byteOffset old for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo017() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int old = arr.byteOffset();
    assertEqual("0,0,0,0", arr.join(","));
    assertEqual(old, arr.byteOffset());
    }

    /**
     * Verify nested join where separator is itself a join result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1800
     * @tc.name testUint8ClampedArrayJoinTwo018
     * @tc.desc Verify nested join where separator is itself a join result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.join(arr.join(","));
    assertEqual("11,22", r);
    }

    /**
     * Verify subarray element at arr[1] equals 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_1900
     * @tc.name testUint8ClampedArrayJoinTwo019
     * @tc.desc Verify subarray element at arr[1] equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual("2,3", sub.join(","));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify join(',') of [10, 20, 30] returns '10, 20, 30'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2000
     * @tc.name testUint8ClampedArrayJoinTwo020
     * @tc.desc Verify join(',') of [10, 20, 30] returns '10, 20, 30'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.join(",");
    assertEqual("10,20,30", r);
    }

    /**
     * Verify join() with long multi-char separator inserts it between each element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2100
     * @tc.name testUint8ClampedArrayJoinTwo021
     * @tc.desc Verify join() with long multi-char separator inserts it between each element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    assertEqual("1xxxxxxxxxxxxxxxx2xxxxxxxxxxxxxxxx3xxxxxxxxxxxxxxxx4xxxxxxxxxxxxxxxx5", arr.join("xxxxxxxxxxxxxxxx"));
    }

    /**
     * Verify join() of single-element array ignores separator and returns the element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2200
     * @tc.name testUint8ClampedArrayJoinTwo022
     * @tc.desc Verify join() of single-element array ignores separator and returns the element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    String s = "";
    for (int i = 0; i < 500; i++) {
    s = s + "k";
    }
    assertEqual("1", arr.join(s));
    }

    /**
     * Verify join r equals '255' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2300
     * @tc.name testUint8ClampedArrayJoinTwo023
     * @tc.desc Verify join r equals '255' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1000);
    String r = arr.join();
    assertEqual("255", r);
    }

    /**
     * Verify join r equals '0' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2400
     * @tc.name testUint8ClampedArrayJoinTwo024
     * @tc.desc Verify join r equals '0' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1000);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify Number.MAX_VALUE clamp 255 join
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2500
     * @tc.name testUint8ClampedArrayJoinTwo025
     * @tc.desc Verify Number.MAX_VALUE clamp 255 join
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.MAX_VALUE);
    String r = arr.join();
    assertEqual("255", r);
    }

    /**
     * Verify Number.MIN_VALUE clamp 0 join
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2600
     * @tc.name testUint8ClampedArrayJoinTwo026
     * @tc.desc Verify Number.MIN_VALUE clamp 0 join
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.MIN_VALUE);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify join r equals '255, 0, 0, 128' for length-4 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2700
     * @tc.name testUint8ClampedArrayJoinTwo027
     * @tc.desc Verify join r equals '255, 0, 0, 128' for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.set(0, 300);
    arr.set(1, -5);
    arr.set(2, Double.NaN);
    arr.set(3, 128);
    String r = arr.join(",");
    assertEqual("255,0,0,128", r);
    }

    /**
     * Verify join r equals '1' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2800
     * @tc.name testUint8ClampedArrayJoinTwo028
     * @tc.desc Verify join r equals '1' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.9);
    String r = arr.join();
    assertEqual("1", r);
    }

    /**
     * Verify join r equals '0' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_2900
     * @tc.name testUint8ClampedArrayJoinTwo029
     * @tc.desc Verify join r equals '0' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.4);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify join r equals '254' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3000
     * @tc.name testUint8ClampedArrayJoinTwo030
     * @tc.desc Verify join r equals '254' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 254.5);
    String r = arr.join();
    assertEqual("254", r);
    }

    /**
     * Verify join r equals '255' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3100
     * @tc.name testUint8ClampedArrayJoinTwo031
     * @tc.desc Verify join r equals '255' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 255.5);
    String r = arr.join();
    assertEqual("255", r);
    }

    /**
     * Verify join r equals '0' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3200
     * @tc.name testUint8ClampedArrayJoinTwo032
     * @tc.desc Verify join r equals '0' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -0);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify subarray r equals '2, 99, 4' for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3300
     * @tc.name testUint8ClampedArrayJoinTwo033
     * @tc.desc Verify subarray r equals '2, 99, 4' for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo033() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    parent.set(2, 99);
    String r = sub.join(",");
    assertEqual("2,99,4", r);
    }

    /**
     * Verify subarray r equals '1, 88, 3, 4, 5' for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3400
     * @tc.name testUint8ClampedArrayJoinTwo034
     * @tc.desc Verify subarray r equals '1, 88, 3, 4, 5' for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo034() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    sub.set(0, 88);
    String r = parent.join(",");
    assertEqual("1,88,3,4,5", r);
    }

    /**
     * Verify slice r equals '1, 2, 3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3500
     * @tc.name testUint8ClampedArrayJoinTwo035
     * @tc.desc Verify slice r equals '1, 2, 3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo035() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice();
    parent.set(0, 100);
    String r = s.join(",");
    assertEqual("1,2,3", r);
    }

    /**
     * Verify join firstView.join(',') equals '10, 20' for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3600
     * @tc.name testUint8ClampedArrayJoinTwo036
     * @tc.desc Verify join firstView.join(',') equals '10, 20' for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0, 2);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 2, 2);
    firstView.set(0, 10);
    firstView.set(1, 20);
    secondView.set(0, 30);
    secondView.set(1, 40);
    assertEqual("10,20", firstView.join(","));
    assertEqual("30,40", secondView.join(","));
    }

    /**
     * Verify join secondView.join(',') equals '50, 60' for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_TWO_3700
     * @tc.name testUint8ClampedArrayJoinTwo037
     * @tc.desc Verify join secondView.join(',') equals '50, 60' for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinTwo037() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 1, 2);
    firstView.set(1, 50);
    firstView.set(2, 60);
    assertEqual("50,60", secondView.join(","));
    }
}
