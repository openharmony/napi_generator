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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor05Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayConstructor05Test extends BasTest {
    /**
     * Verify constructing array from src yields length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0100
     * @tc.name testUint8ClampedArrayConstructorFive001
     * @tc.desc Verify constructing array from src yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive001() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.length());
    }

    /**
     * Verify ArrayBuffer+byteOffset:number - 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0200
     * @tc.name testUint8ClampedArrayConstructorFive002
     * @tc.desc Verify ArrayBuffer+byteOffset:number - 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive002() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(4, arr.length());
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0300
     * @tc.name testUint8ClampedArrayConstructorFive003
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive003() {
    List<Number> src = java.util.Arrays.asList(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0400
     * @tc.name testUint8ClampedArrayConstructorFive004
     * @tc.desc Verify constructor element [0] equals 1 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive004() {
    List<Number> src = java.util.Arrays.asList(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify Array<number> 127 (byte MAX)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0500
     * @tc.name testUint8ClampedArrayConstructorFive005
     * @tc.desc Verify Array<number> 127 (byte MAX)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive005() {
    List<Number> src = java.util.Arrays.asList(127);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify Array<number> -128 (byte MIN, clamp 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0600
     * @tc.name testUint8ClampedArrayConstructorFive006
     * @tc.desc Verify Array<number> -128 (byte MIN, clamp 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive006() {
    int v = -128;
    List<Number> src = java.util.Arrays.asList(v);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0700
     * @tc.name testUint8ClampedArrayConstructorFive007
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive007() {
    int v = -64;
    List<Number> src = java.util.Arrays.asList(v);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0800
     * @tc.name testUint8ClampedArrayConstructorFive008
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive008() {
    int a = -1;
    int b = 50;
    int c = -100;
    List<Number> src = java.util.Arrays.asList(a, b, c);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(50, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify constructing array from src yields length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_0900
     * @tc.name testUint8ClampedArrayConstructorFive009
     * @tc.desc Verify constructing array from src yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive009() {
    List<Number> src = java.util.Arrays.asList(10, 20);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructing array from src yields length 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1000
     * @tc.name testUint8ClampedArrayConstructorFive010
     * @tc.desc Verify constructing array from src yields length 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive010() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(10, arr.length());
    }

    /**
     * Verify constructing array from src yields length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1100
     * @tc.name testUint8ClampedArrayConstructorFive011
     * @tc.desc Verify constructing array from src yields length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive011() {
    List<Number> src = java.util.Arrays.asList(
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
    );
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(100, arr.length());
    }

    /**
     * Verify constructor element [0] equals 127 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1200
     * @tc.name testUint8ClampedArrayConstructorFive012
     * @tc.desc Verify constructor element [0] equals 127 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive012() {
    List<Number> src = java.util.Arrays.asList(0x7F);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 63 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1300
     * @tc.name testUint8ClampedArrayConstructorFive013
     * @tc.desc Verify constructor element [0] equals 63 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive013() {
    List<Number> src = java.util.Arrays.asList(077);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(63, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 127 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1400
     * @tc.name testUint8ClampedArrayConstructorFive014
     * @tc.desc Verify constructor element [0] equals 127 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive014() {
    List<Number> src = java.util.Arrays.asList(0b1111111);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1500
     * @tc.name testUint8ClampedArrayConstructorFive015
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive015() {
    List<Number> src = java.util.Arrays.asList(0, 0, 0, 0, 0);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(4));
    }

    /**
     * Verify constructor element [0] equals 50 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1600
     * @tc.name testUint8ClampedArrayConstructorFive016
     * @tc.desc Verify constructor element [0] equals 50 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive016() {
    List<Number> src = java.util.Arrays.asList(50, 50, 50);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(50, arr.get(0));
    assertEqual(50, arr.get(1));
    assertEqual(50, arr.get(2));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1700
     * @tc.name testUint8ClampedArrayConstructorFive017
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive017() {
    List<Number> src = java.util.Arrays.asList(0, 127, 0, 127);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(127, arr.get(3));
    }

    /**
     * Verify constructor element [2] equals 30 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1800
     * @tc.name testUint8ClampedArrayConstructorFive018
     * @tc.desc Verify constructor element [2] equals 30 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive018() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(30, arr.get(2));
    assertEqual(50, arr.get(4));
    }

    /**
     * Verify constructor element [0] equals 50 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_1900
     * @tc.name testUint8ClampedArrayConstructorFive019
     * @tc.desc Verify constructor element [0] equals 50 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive019() {
    List<Number> src = java.util.Arrays.asList(50, 40, 30, 20, 10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(50, arr.get(0));
    assertEqual(10, arr.get(4));
    }

    /**
     * Verify constructing array from src yields length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2000
     * @tc.name testUint8ClampedArrayConstructorFive020
     * @tc.desc Verify constructing array from src yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive020() {
    List<Number> src = java.util.Arrays.asList(127, 127, 127);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.length());
    assertEqual(127, arr.get(1));
    }

    /**
     * Verify Array<number> byte MIN clamp
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2100
     * @tc.name testUint8ClampedArrayConstructorFive021
     * @tc.desc Verify Array<number> byte MIN clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive021() {
    int minV = -128;
    List<Number> src = java.util.Arrays.asList(minV, minV, minV);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify Array<number> [byte_MIN, byte_MAX]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2200
     * @tc.name testUint8ClampedArrayConstructorFive022
     * @tc.desc Verify Array<number> [byte_MIN, byte_MAX]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive022() {
    int lo = -128;
    List<Number> src = java.util.Arrays.asList(lo, 127);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    }

    /**
     * Verify constructor element [0] equals 64 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2300
     * @tc.name testUint8ClampedArrayConstructorFive023
     * @tc.desc Verify constructor element [0] equals 64 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive023() {
    List<Number> src = java.util.Arrays.asList(64);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(64, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 100 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2400
     * @tc.name testUint8ClampedArrayConstructorFive024
     * @tc.desc Verify constructor element [0] equals 100 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive024() {
    List<Number> src = java.util.Arrays.asList(100);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 126 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2500
     * @tc.name testUint8ClampedArrayConstructorFive025
     * @tc.desc Verify constructor element [0] equals 126 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive025() {
    List<Number> src = java.util.Arrays.asList(126);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(126, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2600
     * @tc.name testUint8ClampedArrayConstructorFive026
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive026() {
    int v = -127;
    List<Number> src = java.util.Arrays.asList(v);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Array<number> construction preserves length and values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2700
     * @tc.name testUint8ClampedArrayConstructorFive027
     * @tc.desc Verify Array<number> construction preserves length and values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive027() {
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify constructing array from src yields length 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2800
     * @tc.name testUint8ClampedArrayConstructorFive028
     * @tc.desc Verify constructing array from src yields length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive028() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(4, arr.length());
    }

    /**
     * Verify FixedArray<E> byteLength length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_2900
     * @tc.name testUint8ClampedArrayConstructorFive029
     * @tc.desc Verify FixedArray<E> byteLength length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive029() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify constructing array from src yields byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3000
     * @tc.name testUint8ClampedArrayConstructorFive030
     * @tc.desc Verify constructing array from src yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive030() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify FixedArray<E> BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3100
     * @tc.name testUint8ClampedArrayConstructorFive031
     * @tc.desc Verify FixedArray<E> BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive031() {
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify constructor element [0] equals 10 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3200
     * @tc.name testUint8ClampedArrayConstructorFive032
     * @tc.desc Verify constructor element [0] equals 10 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive032() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(10, arr.get(0));
    assertEqual(3, arr.length());
    }

    /**
     * Verify FixedArray<E> buffer byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3300
     * @tc.name testUint8ClampedArrayConstructorFive033
     * @tc.desc Verify FixedArray<E> buffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive033() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.buffer().byteLength());
    }

    /**
     * Verify constructor element [0] equals 11 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3400
     * @tc.name testUint8ClampedArrayConstructorFive034
     * @tc.desc Verify constructor element [0] equals 11 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive034() {
    List<Number> src = java.util.Arrays.asList(11, 22, 33);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(11, arr.get(0));
    assertEqual(22, arr.get(1));
    assertEqual(33, arr.get(2));
    }

    /**
     * Verify FixedArray<E> length from Array<number> [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3500
     * @tc.name testUint8ClampedArrayConstructorFive035
     * @tc.desc Verify FixedArray<E> length from Array<number> [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive035() {
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructor arr.$_get(0) equals 99 for array from src
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3600
     * @tc.name testUint8ClampedArrayConstructorFive036
     * @tc.desc Verify constructor arr.$_get(0) equals 99 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive036() {
    List<Number> src = java.util.Arrays.asList(99, 88);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(99, arr.get(0));
    }

    /**
     * Verify FixedArray<E> $_get(length-1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3700
     * @tc.name testUint8ClampedArrayConstructorFive037
     * @tc.desc Verify FixedArray<E> $_get(length-1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive037() {
    List<Number> src = java.util.Arrays.asList(99, 88, 77);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(77, arr.get(2));
    }

    /**
     * Verify ArrayBuffer byteLength=1, byteOffset=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3800
     * @tc.name testUint8ClampedArrayConstructorFive038
     * @tc.desc Verify ArrayBuffer byteLength=1, byteOffset=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive038() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(1, arr.length());
    }

    /**
     * Verify ArrayBuffer byteLength=256, byteOffset=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_3900
     * @tc.name testUint8ClampedArrayConstructorFive039
     * @tc.desc Verify ArrayBuffer byteLength=256, byteOffset=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive039() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(256, arr.length());
    }

    /**
     * Verify ArrayBuffer byteLength=1024, byteOffset=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4000
     * @tc.name testUint8ClampedArrayConstructorFive040
     * @tc.desc Verify ArrayBuffer byteLength=1024, byteOffset=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive040() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(1024, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4100
     * @tc.name testUint8ClampedArrayConstructorFive041
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(0, arr.byteOffset());
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4200
     * @tc.name testUint8ClampedArrayConstructorFive042
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1.0);
    assertEqual(1, arr.byteOffset());
    assertEqual(7, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4300
     * @tc.name testUint8ClampedArrayConstructorFive043
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, -0.0);
    assertEqual(0, arr.byteOffset());
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4400
     * @tc.name testUint8ClampedArrayConstructorFive044
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive044() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1e1);
    assertEqual(10, arr.byteOffset());
    assertEqual(10, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4500
     * @tc.name testUint8ClampedArrayConstructorFive045
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2e0);
    assertEqual(2, arr.byteOffset());
    assertEqual(6, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4600
     * @tc.name testUint8ClampedArrayConstructorFive046
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, Double.NaN);
    assertEqual(0, arr.byteOffset());
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructor throws RangeError for buf, Number.POSITIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4700
     * @tc.name testUint8ClampedArrayConstructorFive047
     * @tc.desc Verify constructor throws RangeError for buf, Number.POSITIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, Double.POSITIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, -Number.POSITIVE_INFINITY
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4800
     * @tc.name testUint8ClampedArrayConstructorFive048
     * @tc.desc Verify constructor throws RangeError for buf, -Number.POSITIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive048() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, -Double.POSITIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, Number.MAX_VALUE
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_4900
     * @tc.name testUint8ClampedArrayConstructorFive049
     * @tc.desc Verify constructor throws RangeError for buf, Number.MAX_VALUE
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive049() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, Double.MAX_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset=Number.MIN_VALUE 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5000
     * @tc.name testUint8ClampedArrayConstructorFive050
     * @tc.desc Verify byteOffset=Number.MIN_VALUE 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive050() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, Double.MIN_VALUE);
    assertEqual(0, arr.byteOffset());
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5100
     * @tc.name testUint8ClampedArrayConstructorFive051
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive051() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3.0);
    assertEqual(3, arr.byteOffset());
    assertEqual(7, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5200
     * @tc.name testUint8ClampedArrayConstructorFive052
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive052() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 5.0);
    assertEqual(5, arr.byteOffset());
    assertEqual(5, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5300
     * @tc.name testUint8ClampedArrayConstructorFive053
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive053() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 9.0);
    assertEqual(9, arr.byteOffset());
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5400
     * @tc.name testUint8ClampedArrayConstructorFive054
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive054() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 10.0);
    assertEqual(10, arr.byteOffset());
    assertEqual(0, arr.length());
    }

    /**
     * Verify ArrayBuffer construction uses the supplied buffer and full length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5500
     * @tc.name testUint8ClampedArrayConstructorFive055
     * @tc.desc Verify ArrayBuffer construction uses the supplied buffer and full length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive055() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(buf, arr.buffer());
    assertEqual(4, arr.length());
    }

    /**
     * Verify ArrayBuffer length byteLength-byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5600
     * @tc.name testUint8ClampedArrayConstructorFive056
     * @tc.desc Verify ArrayBuffer length byteLength-byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive056() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3.0);
    assertEqual(5, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5700
     * @tc.name testUint8ClampedArrayConstructorFive057
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2.0);
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer byteLength length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5800
     * @tc.name testUint8ClampedArrayConstructorFive058
     * @tc.desc Verify ArrayBuffer byteLength length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive058() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3.0);
    assertEqual(5, arr.byteLength());
    }

    /**
     * Verify ArrayBuffer BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_5900
     * @tc.name testUint8ClampedArrayConstructorFive059
     * @tc.desc Verify ArrayBuffer BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6000
     * @tc.name testUint8ClampedArrayConstructorFive060
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive060() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6100
     * @tc.name testUint8ClampedArrayConstructorFive061
     * @tc.desc Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive061() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(3));
    }

    /**
     * Verify constructor arr.$_get(0) equals 0 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6200
     * @tc.name testUint8ClampedArrayConstructorFive062
     * @tc.desc Verify constructor arr.$_get(0) equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive062() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6300
     * @tc.name testUint8ClampedArrayConstructorFive063
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify buffer.byteLength buffer.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6400
     * @tc.name testUint8ClampedArrayConstructorFive064
     * @tc.desc Verify buffer.byteLength buffer.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive064() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2.0);
    assertEqual(8, arr.buffer().byteLength());
    }

    /**
     * Verify constructor element [0] equals 100 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6500
     * @tc.name testUint8ClampedArrayConstructorFive065
     * @tc.desc Verify constructor element [0] equals 100 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive065() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    arr.set(0, 100);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6600
     * @tc.name testUint8ClampedArrayConstructorFive066
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive066() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0.0);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 2.0);
    assertEqual(secondView.buffer(), firstView.buffer());
    }

    /**
     * Verify constructor element [0] equals 99 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6700
     * @tc.name testUint8ClampedArrayConstructorFive067
     * @tc.desc Verify constructor element [0] equals 99 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive067() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0.0);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 2.0);
    firstView.set(2, 99);
    assertEqual(99, secondView.get(0));
    }

    /**
     * Verify constructor element [2] equals 77 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6800
     * @tc.name testUint8ClampedArrayConstructorFive068
     * @tc.desc Verify constructor element [2] equals 77 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive068() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0.0);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 2.0);
    secondView.set(0, 77);
    assertEqual(77, firstView.get(2));
    }

    /**
     * Verify buffer - byteOffset byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_6900
     * @tc.name testUint8ClampedArrayConstructorFive069
     * @tc.desc Verify buffer - byteOffset byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive069() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 1.0);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 5.0);
    assertEqual(1, firstView.byteOffset());
    assertEqual(5, secondView.byteOffset());
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7000
     * @tc.name testUint8ClampedArrayConstructorFive070
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive070() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4.0);
    assertEqual(buf, arr.buffer());
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructor element [0] equals 50 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7100
     * @tc.name testUint8ClampedArrayConstructorFive071
     * @tc.desc Verify constructor element [0] equals 50 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive071() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf, 0.0);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 1.0);
    firstView.set(1, 50);
    assertEqual(50, secondView.get(0));
    secondView.set(1, 200);
    assertEqual(200, firstView.get(2));
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7200
     * @tc.name testUint8ClampedArrayConstructorFive072
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive072() {
    ArrayBuffer buf = new ArrayBuffer(100);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 99.0);
    assertEqual(buf, arr.buffer());
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructor element [0] equals 255 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7300
     * @tc.name testUint8ClampedArrayConstructorFive073
     * @tc.desc Verify constructor element [0] equals 255 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive073() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    arr.set(0, 300);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7400
     * @tc.name testUint8ClampedArrayConstructorFive074
     * @tc.desc Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive074() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    arr.set(0, -10);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify byteOffset=byteLength+1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7500
     * @tc.name testUint8ClampedArrayConstructorFive075
     * @tc.desc Verify byteOffset=byteLength+1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive075() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, 9.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, -1.0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7600
     * @tc.name testUint8ClampedArrayConstructorFive076
     * @tc.desc Verify constructor throws RangeError for buf, -1.0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive076() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, -1.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, -2.5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7700
     * @tc.name testUint8ClampedArrayConstructorFive077
     * @tc.desc Verify constructor throws RangeError for buf, -2.5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive077() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, -2.5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, -1e9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7800
     * @tc.name testUint8ClampedArrayConstructorFive078
     * @tc.desc Verify constructor throws RangeError for buf, -1e9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive078() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, -1e9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify buffer byteOffset=1 RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_7900
     * @tc.name testUint8ClampedArrayConstructorFive079
     * @tc.desc Verify buffer byteOffset=1 RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive079() {
    ArrayBuffer buf = new ArrayBuffer(0);
    try {
    new Uint8ClampedArray(buf, 1.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, 2147483648.0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_8000
     * @tc.name testUint8ClampedArrayConstructorFive080
     * @tc.desc Verify constructor throws RangeError for buf, 2147483648.0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive080() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, 2147483648.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, 1e9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_8100
     * @tc.name testUint8ClampedArrayConstructorFive081
     * @tc.desc Verify constructor throws RangeError for buf, 1e9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive081() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, 1e9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_8200
     * @tc.name testUint8ClampedArrayConstructorFive082
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive082() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FIVE_8300
     * @tc.name testUint8ClampedArrayConstructorFive083
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFive083() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1.0);
    assertEqual(1, arr.length());
    }
}
