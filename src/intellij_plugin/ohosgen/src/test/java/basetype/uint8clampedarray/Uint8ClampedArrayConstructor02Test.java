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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayConstructor02Test extends BasTest {
    /**
     * Verify constructor(length: int) arity=1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0100
     * @tc.name testUint8ClampedArrayConstructorTwo001
     * @tc.desc Verify constructor(length: int) arity=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify constructor(buf, byteOffset, length) arity=3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0200
     * @tc.name testUint8ClampedArrayConstructorTwo002
     * @tc.desc Verify constructor(buf, byteOffset, length) arity=3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo002() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(4, arr.length());
    }

    /**
     * Verify constructor(buf, byteOffset=undefined, length=undefined) arity=3 undefined
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0300
     * @tc.name testUint8ClampedArrayConstructorTwo003
     * @tc.desc Verify constructor(buf, byteOffset=undefined, length=undefined) arity=3 undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo003() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(6, arr.length());
    }

    /**
     * Verify constructor(buf, byteOffset=0, length=undefined) arity=3 length undefined
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0400
     * @tc.name testUint8ClampedArrayConstructorTwo004
     * @tc.desc Verify constructor(buf, byteOffset=0, length=undefined) arity=3 length undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo004() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(4, arr.length());
    }

    /**
     * Verify constructor(buf, byteOffset=undefined, length=2) arity=3 byteOffset undefined
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0500
     * @tc.name testUint8ClampedArrayConstructorTwo005
     * @tc.desc Verify constructor(buf, byteOffset=undefined, length=2) arity=3 byteOffset undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo005() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructing with length 0 creates an empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0600
     * @tc.name testUint8ClampedArrayConstructorTwo006
     * @tc.desc Verify constructing with length 0 creates an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructing with length 1 creates a one-element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0700
     * @tc.name testUint8ClampedArrayConstructorTwo007
     * @tc.desc Verify constructing with length 1 creates a one-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructing with length 255 creates an array of length 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0800
     * @tc.name testUint8ClampedArrayConstructorTwo008
     * @tc.desc Verify constructing with length 255 creates an array of length 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    assertEqual(255, arr.length());
    }

    /**
     * Verify constructing with length 256 creates an array of length 256
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_0900
     * @tc.name testUint8ClampedArrayConstructorTwo009
     * @tc.desc Verify constructing with length 256 creates an array of length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    assertEqual(256, arr.length());
    }

    /**
     * Verify constructing with length 1024 creates an array of length 1024
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1000
     * @tc.name testUint8ClampedArrayConstructorTwo010
     * @tc.desc Verify constructing with length 1024 creates an array of length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    assertEqual(1024, arr.length());
    }

    /**
     * Verify constructing with length 65535 creates an array of length 65535
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1100
     * @tc.name testUint8ClampedArrayConstructorTwo011
     * @tc.desc Verify constructing with length 65535 creates an array of length 65535
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    assertEqual(65535, arr.length());
    }

    /**
     * Verify hexadecimal length 0x100 creates an array of length 256
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1200
     * @tc.name testUint8ClampedArrayConstructorTwo012
     * @tc.desc Verify hexadecimal length 0x100 creates an array of length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0x100);
    assertEqual(256, arr.length());
    }

    /**
     * Verify octal length 0o10 creates an array of length 8
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1300
     * @tc.name testUint8ClampedArrayConstructorTwo013
     * @tc.desc Verify octal length 0o10 creates an array of length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(010);
    assertEqual(8, arr.length());
    }

    /**
     * Verify binary length 0b1000 creates an array of length 8
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1400
     * @tc.name testUint8ClampedArrayConstructorTwo014
     * @tc.desc Verify binary length 0b1000 creates an array of length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0b1000);
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructor throws RangeError for -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1500
     * @tc.name testUint8ClampedArrayConstructorTwo015
     * @tc.desc Verify constructor throws RangeError for -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo015() {
    try {
    new Uint8ClampedArray(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor element [0] equals 0 for length-3 array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1600
     * @tc.name testUint8ClampedArrayConstructorTwo016
     * @tc.desc Verify constructor element [0] equals 0 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify length byteLength length BYTES_PER_ELEMENT=1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1700
     * @tc.name testUint8ClampedArrayConstructorTwo017
     * @tc.desc Verify length byteLength length BYTES_PER_ELEMENT=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(7);
    assertEqual(7, arr.byteLength());
    }

    /**
     * Verify length constructor creates a backing buffer with byteLength 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1800
     * @tc.name testUint8ClampedArrayConstructorTwo018
     * @tc.desc Verify length constructor creates a backing buffer with byteLength 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    assertEqual(5, arr.buffer().byteLength());
    }

    /**
     * Verify Array<number> source preserves value 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_1900
     * @tc.name testUint8ClampedArrayConstructorTwo019
     * @tc.desc Verify Array<number> source preserves value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo019() {
    List<Number> src = new ArrayList<>();
    src.add(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Array<number> source preserves value 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2000
     * @tc.name testUint8ClampedArrayConstructorTwo020
     * @tc.desc Verify Array<number> source preserves value 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo020() {
    List<Number> src = new ArrayList<>();
    src.add(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Array<number> source preserves value 127
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2100
     * @tc.name testUint8ClampedArrayConstructorTwo021
     * @tc.desc Verify Array<number> source preserves value 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo021() {
    List<Number> src = new ArrayList<>();
    src.add(127);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify Array<number> source preserves value 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2200
     * @tc.name testUint8ClampedArrayConstructorTwo022
     * @tc.desc Verify Array<number> source preserves value 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo022() {
    List<Number> src = new ArrayList<>();
    src.add(128);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify Array<number> source clamps INT_MAX to 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2300
     * @tc.name testUint8ClampedArrayConstructorTwo023
     * @tc.desc Verify Array<number> source clamps INT_MAX to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo023() {
    List<Number> src = new ArrayList<>();
    src.add((int) (255));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Array<number> source clamps INT_MIN to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2400
     * @tc.name testUint8ClampedArrayConstructorTwo024
     * @tc.desc Verify Array<number> source clamps INT_MIN to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo024() {
    List<Number> src = new ArrayList<>();
    src.add(Integer.MIN_VALUE);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2500
     * @tc.name testUint8ClampedArrayConstructorTwo025
     * @tc.desc Verify constructor element [0] equals 1 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo025() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    src.add(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2600
     * @tc.name testUint8ClampedArrayConstructorTwo026
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo026() {
    List<Number> src = new ArrayList<>();
    src.add(0);
    src.add(0);
    src.add(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify constructor element [0] equals 200 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2700
     * @tc.name testUint8ClampedArrayConstructorTwo027
     * @tc.desc Verify constructor element [0] equals 200 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo027() {
    List<Number> src = new ArrayList<>();
    src.add(200);
    src.add(200);
    src.add(200);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(200, arr.get(0));
    assertEqual(200, arr.get(1));
    assertEqual(200, arr.get(2));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2800
     * @tc.name testUint8ClampedArrayConstructorTwo028
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo028() {
    List<Number> src = new ArrayList<>();
    src.add(-5);
    src.add(100);
    src.add(300);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(100, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify Array<number> source preserves hexadecimal value 0x80
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_2900
     * @tc.name testUint8ClampedArrayConstructorTwo029
     * @tc.desc Verify Array<number> source preserves hexadecimal value 0x80
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo029() {
    List<Number> src = new ArrayList<>();
    src.add(0x80);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify Array<number> source preserves octal value 0o377
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3000
     * @tc.name testUint8ClampedArrayConstructorTwo030
     * @tc.desc Verify Array<number> source preserves octal value 0o377
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo030() {
    List<Number> src = new ArrayList<>();
    src.add(0377);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Array<number> source preserves binary value 0b11111111
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3100
     * @tc.name testUint8ClampedArrayConstructorTwo031
     * @tc.desc Verify Array<number> source preserves binary value 0b11111111
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo031() {
    List<Number> src = new ArrayList<>();
    src.add(0b11111111);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Array<number> source clamps binary value 0b100000000 to 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3200
     * @tc.name testUint8ClampedArrayConstructorTwo032
     * @tc.desc Verify Array<number> source clamps binary value 0b100000000 to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo032() {
    List<Number> src = new ArrayList<>();
    src.add(0b100000000);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructing array from src yields length 100
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3300
     * @tc.name testUint8ClampedArrayConstructorTwo033
     * @tc.desc Verify constructing array from src yields length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo033() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(100, arr.length());
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3400
     * @tc.name testUint8ClampedArrayConstructorTwo034
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo034() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(99));
    }

    /**
     * Verify Array<number> source creates byteLength equal to source length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3500
     * @tc.name testUint8ClampedArrayConstructorTwo035
     * @tc.desc Verify Array<number> source creates byteLength equal to source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo035() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    src.add(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify Array<number> source creates a zero-offset view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3600
     * @tc.name testUint8ClampedArrayConstructorTwo036
     * @tc.desc Verify Array<number> source creates a zero-offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo036() {
    List<Number> src = new ArrayList<>();
    src.add(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify constructing array from src yields length 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3700
     * @tc.name testUint8ClampedArrayConstructorTwo037
     * @tc.desc Verify constructing array from src yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo037() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    src.add(99);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructing from Array<number> makes independent copy with correct length and elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3800
     * @tc.name testUint8ClampedArrayConstructorTwo038
     * @tc.desc Verify constructing from Array<number> makes independent copy with correct length and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo038() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    src.add(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.length());
    assertEqual(5, arr.get(0));
    assertEqual(10, arr.get(1));
    arr.set(0, 99);
    assertEqual(5, src.get(0));
    }

    /**
     * Verify Array<number> source preserves in-range value 200
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_3900
     * @tc.name testUint8ClampedArrayConstructorTwo039
     * @tc.desc Verify Array<number> source preserves in-range value 200
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo039() {
    List<Number> src = new ArrayList<>();
    src.add(100);
    src.add(200);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(200, arr.get(1));
    }

    /**
     * Verify ArrayBuffer with byteLength 255 creates an array of length 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4000
     * @tc.name testUint8ClampedArrayConstructorTwo040
     * @tc.desc Verify ArrayBuffer with byteLength 255 creates an array of length 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo040() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 255);
    assertEqual(255, arr.length());
    }

    /**
     * Verify ArrayBuffer with byteLength 256 creates an array of length 256
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4100
     * @tc.name testUint8ClampedArrayConstructorTwo041
     * @tc.desc Verify ArrayBuffer with byteLength 256 creates an array of length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo041() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 256);
    assertEqual(256, arr.length());
    }

    /**
     * Verify ArrayBuffer constructor with byteOffset 0 creates a zero-offset view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4200
     * @tc.name testUint8ClampedArrayConstructorTwo042
     * @tc.desc Verify ArrayBuffer constructor with byteOffset 0 creates a zero-offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer constructor with byteOffset 1 creates an offset view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4300
     * @tc.name testUint8ClampedArrayConstructorTwo043
     * @tc.desc Verify ArrayBuffer constructor with byteOffset 1 creates an offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 4);
    assertEqual(1, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer constructor with byteOffset at the last byte creates length 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4400
     * @tc.name testUint8ClampedArrayConstructorTwo044
     * @tc.desc Verify ArrayBuffer constructor with byteOffset at the last byte creates length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo044() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3, 1);
    assertEqual(1, arr.length());
    assertEqual(3, arr.byteOffset());
    }

    /**
     * Verify undefined byteOffset is treated as 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4500
     * @tc.name testUint8ClampedArrayConstructorTwo045
     * @tc.desc Verify undefined byteOffset is treated as 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo045() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify undefined byteOffset and undefined length cover the whole buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4600
     * @tc.name testUint8ClampedArrayConstructorTwo046
     * @tc.desc Verify undefined byteOffset and undefined length cover the whole buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo046() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.byteOffset());
    assertEqual(10, arr.length());
    }

    /**
     * Verify hexadecimal byteOffset 0x4 is accepted
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4700
     * @tc.name testUint8ClampedArrayConstructorTwo047
     * @tc.desc Verify hexadecimal byteOffset 0x4 is accepted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0x4, 2);
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify octal byteOffset 0o4 is accepted
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4800
     * @tc.name testUint8ClampedArrayConstructorTwo048
     * @tc.desc Verify octal byteOffset 0o4 is accepted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo048() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 04, 2);
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify binary byteOffset 0b100 is accepted
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_4900
     * @tc.name testUint8ClampedArrayConstructorTwo049
     * @tc.desc Verify binary byteOffset 0b100 is accepted
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo049() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0b100, 2);
    assertEqual(4, arr.byteOffset());
    }

    /**
     * Verify byteOffset byteLength RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5000
     * @tc.name testUint8ClampedArrayConstructorTwo050
     * @tc.desc Verify byteOffset byteLength RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo050() {
    try {
    ArrayBuffer buf = new ArrayBuffer(4);
    new Uint8ClampedArray(buf, 5, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, -1, 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5100
     * @tc.name testUint8ClampedArrayConstructorTwo051
     * @tc.desc Verify constructor throws RangeError for buf, -1, 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo051() {
    try {
    ArrayBuffer buf = new ArrayBuffer(4);
    new Uint8ClampedArray(buf, -1, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify ArrayBuffer constructor with byteOffset 0 and explicit length 1 creates one element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5200
     * @tc.name testUint8ClampedArrayConstructorTwo052
     * @tc.desc Verify ArrayBuffer constructor with byteOffset 0 and explicit length 1 creates one element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo052() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 1);
    assertEqual(1, arr.length());
    }

    /**
     * Verify explicit length equal to byteLength covers the whole buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5300
     * @tc.name testUint8ClampedArrayConstructorTwo053
     * @tc.desc Verify explicit length equal to byteLength covers the whole buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo053() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 6);
    assertEqual(6, arr.length());
    }

    /**
     * Verify undefined length covers the remaining buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5400
     * @tc.name testUint8ClampedArrayConstructorTwo054
     * @tc.desc Verify undefined length covers the remaining buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo054() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    assertEqual(4, arr.length());
    }

    /**
     * Verify undefined length with byteOffset 0 covers the whole buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5500
     * @tc.name testUint8ClampedArrayConstructorTwo055
     * @tc.desc Verify undefined length with byteOffset 0 covers the whole buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo055() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(10, arr.length());
    }

    /**
     * Verify undefined length at byteLength creates an empty view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5600
     * @tc.name testUint8ClampedArrayConstructorTwo056
     * @tc.desc Verify undefined length at byteLength creates an empty view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo056() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructor throws RangeError for buf, 0, 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5700
     * @tc.name testUint8ClampedArrayConstructorTwo057
     * @tc.desc Verify constructor throws RangeError for buf, 0, 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo057() {
    try {
    ArrayBuffer buf = new ArrayBuffer(4);
    new Uint8ClampedArray(buf, 0, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify byteOffset+length byteLength RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5800
     * @tc.name testUint8ClampedArrayConstructorTwo058
     * @tc.desc Verify byteOffset+length byteLength RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo058() {
    try {
    ArrayBuffer buf = new ArrayBuffer(4);
    new Uint8ClampedArray(buf, 2, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for buf, 0, -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_5900
     * @tc.name testUint8ClampedArrayConstructorTwo059
     * @tc.desc Verify constructor throws RangeError for buf, 0, -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo059() {
    try {
    ArrayBuffer buf = new ArrayBuffer(4);
    new Uint8ClampedArray(buf, 0, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify hexadecimal length 0x4 is accepted for ArrayBuffer view construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6000
     * @tc.name testUint8ClampedArrayConstructorTwo060
     * @tc.desc Verify hexadecimal length 0x4 is accepted for ArrayBuffer view construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo060() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0x4);
    assertEqual(4, arr.length());
    }

    /**
     * Verify octal length 0o4 is accepted for ArrayBuffer view construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6100
     * @tc.name testUint8ClampedArrayConstructorTwo061
     * @tc.desc Verify octal length 0o4 is accepted for ArrayBuffer view construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 04);
    assertEqual(4, arr.length());
    }

    /**
     * Verify binary length 0b100 is accepted for ArrayBuffer view construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6200
     * @tc.name testUint8ClampedArrayConstructorTwo062
     * @tc.desc Verify binary length 0b100 is accepted for ArrayBuffer view construction
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo062() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0b100);
    assertEqual(4, arr.length());
    }

    /**
     * Verify byteOffset 1 with undefined length covers the remaining buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6300
     * @tc.name testUint8ClampedArrayConstructorTwo063
     * @tc.desc Verify byteOffset 1 with undefined length covers the remaining buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo063() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1);
    assertEqual(4, arr.length());
    }

    /**
     * Verify byteOffset 2 with undefined length covers the remaining buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6400
     * @tc.name testUint8ClampedArrayConstructorTwo064
     * @tc.desc Verify byteOffset 2 with undefined length covers the remaining buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo064() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    assertEqual(3, arr.length());
    }

    /**
     * Verify undefined byteOffset with length 3 starts at offset 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6500
     * @tc.name testUint8ClampedArrayConstructorTwo065
     * @tc.desc Verify undefined byteOffset with length 3 starts at offset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo065() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 3);
    assertEqual(0, arr.byteOffset());
    assertEqual(3, arr.length());
    }

    /**
     * Verify byteOffset 0 with length 0 creates an empty view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6600
     * @tc.name testUint8ClampedArrayConstructorTwo066
     * @tc.desc Verify byteOffset 0 with length 0 creates an empty view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo066() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify undefined byteOffset and length create a view over the full buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6700
     * @tc.name testUint8ClampedArrayConstructorTwo067
     * @tc.desc Verify undefined byteOffset and length create a view over the full buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo067() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify constructing length-4 array yields BYTES_PER_ELEMENT 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6800
     * @tc.name testUint8ClampedArrayConstructorTwo068
     * @tc.desc Verify constructing length-4 array yields BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify Array<number> constructor keeps BYTES_PER_ELEMENT equal to 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_6900
     * @tc.name testUint8ClampedArrayConstructorTwo069
     * @tc.desc Verify Array<number> constructor keeps BYTES_PER_ELEMENT equal to 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo069() {
    List<Number> src = new ArrayList<>();
    src.add(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify constructor element [0] equals 1 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7000
     * @tc.name testUint8ClampedArrayConstructorTwo070
     * @tc.desc Verify constructor element [0] equals 1 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo070() {
    List<Integer> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 99);
    assertEqual(1, src.get(0));
    }

    /**
     * Verify assigning 256 stores the clamped value 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7100
     * @tc.name testUint8ClampedArrayConstructorTwo071
     * @tc.desc Verify assigning 256 stores the clamped value 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo071() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify assigning positive infinity stores the clamped value 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7200
     * @tc.name testUint8ClampedArrayConstructorTwo072
     * @tc.desc Verify assigning positive infinity stores the clamped value 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo072() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify assigning negative infinity stores the clamped value 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7300
     * @tc.name testUint8ClampedArrayConstructorTwo073
     * @tc.desc Verify assigning negative infinity stores the clamped value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo073() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify assigning 127.5 stores the half-even rounded value 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7400
     * @tc.name testUint8ClampedArrayConstructorTwo074
     * @tc.desc Verify assigning 127.5 stores the half-even rounded value 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo074() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    arr.set(0, 127.5);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify assigning 256 stores the clamped value 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7500
     * @tc.name testUint8ClampedArrayConstructorTwo075
     * @tc.desc Verify assigning 256 stores the clamped value 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify assigning -10 stores the clamped value 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7600
     * @tc.name testUint8ClampedArrayConstructorTwo076
     * @tc.desc Verify assigning -10 stores the clamped value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, -10);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing with length -2147483648 throws RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_TWO_7700
     * @tc.name testUint8ClampedArrayConstructorTwo077
     * @tc.desc Verify constructing with length -2147483648 throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorTwo077() {
    try {
    new Uint8ClampedArray(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
