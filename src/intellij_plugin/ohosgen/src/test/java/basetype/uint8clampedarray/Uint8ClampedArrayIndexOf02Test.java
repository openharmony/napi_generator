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
 * Uint8ClampedArrayIndexOf02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayIndexOf02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0100
     * @tc.name testUint8ClampedArrayIndexOfTwo001
     * @tc.desc Verify indexOf r equals 1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(20);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0200
     * @tc.name testUint8ClampedArrayIndexOfTwo002
     * @tc.desc Verify indexOf arr.indexOf(42) equals 0 for array [42, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 1, 2});
    assertEqual(0, arr.indexOf(42));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0300
     * @tc.name testUint8ClampedArrayIndexOfTwo003
     * @tc.desc Verify indexOf arr.indexOf(0) equals 1 for array [1, 0, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0, 2});
    assertEqual(1, arr.indexOf(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0400
     * @tc.name testUint8ClampedArrayIndexOfTwo004
     * @tc.desc Verify indexOf arr.indexOf(255) equals 2 for array [0, 100, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 100, 255});
    assertEqual(2, arr.indexOf(255));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0500
     * @tc.name testUint8ClampedArrayIndexOfTwo005
     * @tc.desc Verify indexOf arr.indexOf(Number.NaN) equals -1 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertEqual(-1, arr.indexOf(Double.NaN));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0600
     * @tc.name testUint8ClampedArrayIndexOfTwo006
     * @tc.desc Verify indexOf arr.indexOf(-1) equals -1 for array [100, 200, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50});
    assertEqual(-1, arr.indexOf(-1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0700
     * @tc.name testUint8ClampedArrayIndexOfTwo007
     * @tc.desc Verify indexOf yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(1, arr.indexOf(2));
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0800
     * @tc.name testUint8ClampedArrayIndexOfTwo008
     * @tc.desc Verify indexOf yields byteLength 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(1, arr.indexOf(2));
    assertEqual(3, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_0900
     * @tc.name testUint8ClampedArrayIndexOfTwo009
     * @tc.desc Verify indexOf element at arr[0] equals 11 for array [11, 22, 33]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(1, arr.indexOf(22));
    assertEqual(11, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1000
     * @tc.name testUint8ClampedArrayIndexOfTwo010
     * @tc.desc Verify indexOf buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo010() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    assertEqual(2, arr.indexOf(3));
    assertEqual(buf, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1100
     * @tc.name testUint8ClampedArrayIndexOfTwo011
     * @tc.desc Verify indexOf r equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.indexOf(99);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1200
     * @tc.name testUint8ClampedArrayIndexOfTwo012
     * @tc.desc Verify indexOf(3) returns 2 in [1,2,3,4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r = arr.indexOf(3);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1300
     * @tc.name testUint8ClampedArrayIndexOfTwo013
     * @tc.desc Verify indexOf element at arr[r] equals 8 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    int r = arr.indexOf(8);
    assertEqual(8, arr.get(r));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1400
     * @tc.name testUint8ClampedArrayIndexOfTwo014
     * @tc.desc Verify indexOf r1 equals r2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r1 = arr.indexOf(20);
    int r2 = arr.indexOf(20);
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1500
     * @tc.name testUint8ClampedArrayIndexOfTwo015
     * @tc.desc Verify indexOf r1 equals r2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r1 = arr.indexOf(99);
    int r2 = arr.indexOf(99);
    assertEqual(r2, r1);
    assertEqual(-1, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1600
     * @tc.name testUint8ClampedArrayIndexOfTwo016
     * @tc.desc Verify indexOf arr.$_get(idx) equals 150 for array [100, 150, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 150, 200});
    int idx = arr.indexOf(150);
    assertEqual(150, arr.get(idx));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1700
     * @tc.name testUint8ClampedArrayIndexOfTwo017
     * @tc.desc Verify indexOf arr.indexOf(0) equals 1 for array [5, 0, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 0, 5});
    assertEqual(1, arr.indexOf(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1800
     * @tc.name testUint8ClampedArrayIndexOfTwo018
     * @tc.desc Verify indexOf element at arr[r] equals 70 for array [50, 60, 70, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 60, 70, 80});
    int r = arr.indexOf(70);
    assertEqual(70, arr.get(r));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_1900
     * @tc.name testUint8ClampedArrayIndexOfTwo019
     * @tc.desc Verify indexOf element at arr[r] equals 9 for array [9, 9, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9});
    int r = arr.indexOf(9);
    assertEqual(9, arr.get(r));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2000
     * @tc.name testUint8ClampedArrayIndexOfTwo020
     * @tc.desc Verify indexOf arr.at(r) equals 30 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int r = arr.indexOf(30);
    assertEqual(30, arr.at(r));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2100
     * @tc.name testUint8ClampedArrayIndexOfTwo021
     * @tc.desc Verify indexOf r equals 50 for length-100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    arr.set(50, 77);
    int r = arr.indexOf(77);
    assertEqual(50, r);
    assertTrue(r < arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2200
     * @tc.name testUint8ClampedArrayIndexOfTwo022
     * @tc.desc Verify indexOf arr.indexOf(10, -100) equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(0, arr.indexOf(10, -100));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2300
     * @tc.name testUint8ClampedArrayIndexOfTwo023
     * @tc.desc Verify indexOf arr.indexOf(0x20) equals 1 for array [0x10, 0x20, 0x30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x10, 0x20, 0x30});
    assertEqual(1, arr.indexOf(0x20));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2400
     * @tc.name testUint8ClampedArrayIndexOfTwo024
     * @tc.desc Verify indexOf r equals 1 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int r = arr.indexOf(6, 0 - 2);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2500
     * @tc.name testUint8ClampedArrayIndexOfTwo025
     * @tc.desc Verify fromIndex=0 clamp (256 255) 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 256, 100});
    int r = arr.indexOf(255, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2600
     * @tc.name testUint8ClampedArrayIndexOfTwo026
     * @tc.desc Verify fromIndex=2 clamp (256 255) 255 -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 256, 100});
    int r = arr.indexOf(255, 2);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2700
     * @tc.name testUint8ClampedArrayIndexOfTwo027
     * @tc.desc Verify indexOf r equals 1 for array [5, -1, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, -1, 6});
    int r = arr.indexOf(0, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2800
     * @tc.name testUint8ClampedArrayIndexOfTwo028
     * @tc.desc Verify indexOf r equals -1 for array [5, -1, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, -1, 6});
    int r = arr.indexOf(0, 2);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_2900
     * @tc.name testUint8ClampedArrayIndexOfTwo029
     * @tc.desc Verify indexOf r equals 1 for array [5, Number.NaN, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, Double.NaN, 6});
    int r = arr.indexOf(0, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_3000
     * @tc.name testUint8ClampedArrayIndexOfTwo030
     * @tc.desc Verify fromIndex=0 clamp (Infinity 255) 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0, Double.POSITIVE_INFINITY, 100});
    int r = arr.indexOf(255, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_3100
     * @tc.name testUint8ClampedArrayIndexOfTwo031
     * @tc.desc Verify fromIndex=0 0.5 0 (half-even) 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, 0.5, 6});
    int r = arr.indexOf(0, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_3200
     * @tc.name testUint8ClampedArrayIndexOfTwo032
     * @tc.desc Verify fromIndex=0 127.5 128 (half-even) 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, 127.5, 6});
    int r = arr.indexOf(128, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_3300
     * @tc.name testUint8ClampedArrayIndexOfTwo033
     * @tc.desc Verify fromIndex=0 128.5 128 (half-even) 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, 128.5, 6});
    int r = arr.indexOf(128, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_3400
     * @tc.name testUint8ClampedArrayIndexOfTwo034
     * @tc.desc Verify indexOf r equals 1 for array [5, 0.9, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, 0.9, 6});
    int r = arr.indexOf(1, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_TWO_3500
     * @tc.name testUint8ClampedArrayIndexOfTwo035
     * @tc.desc Verify indexOf r equals 1 for array [5, 0.4, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, 0.4, 6});
    int r = arr.indexOf(0, 0);
    assertEqual(1, r);
    }
}
