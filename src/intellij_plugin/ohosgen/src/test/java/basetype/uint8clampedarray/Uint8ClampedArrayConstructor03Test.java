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
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayConstructor03Test extends BasTest {
    /**
     * Verify constructor(length: number) arity=1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0100
     * @tc.name testUint8ClampedArrayConstructorThree001
     * @tc.desc Verify constructor(length: number) arity=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5.0);
    assertEqual(5, arr.length());
    }

    /**
     * Verify constructor(elements: Array<Number>) arity=1 - Array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0200
     * @tc.name testUint8ClampedArrayConstructorThree002
     * @tc.desc Verify constructor(elements: Array<Number>) arity=1 - Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree002() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructor(elements: Array<Number>) arity=1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0300
     * @tc.name testUint8ClampedArrayConstructorThree003
     * @tc.desc Verify constructor(elements: Array<Number>) arity=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree003() {
    List<Number> src = new ArrayList<>();
    src.add(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructor(buf: ArrayBuffer) arity=1 - ArrayBuffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0400
     * @tc.name testUint8ClampedArrayConstructorThree004
     * @tc.desc Verify constructor(buf: ArrayBuffer) arity=1 - ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree004() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(4, arr.length());
    }

    /**
     * Verify constructor(buf: Array<Number>) arity=1 - Array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0500
     * @tc.name testUint8ClampedArrayConstructorThree005
     * @tc.desc Verify constructor(buf: Array<Number>) arity=1 - Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree005() {
    List<Number> src = new ArrayList<>();
    src.add(7);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructing array from 1e2 yields length 100
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0600
     * @tc.name testUint8ClampedArrayConstructorThree006
     * @tc.desc Verify constructing array from 1e2 yields length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1e2);
    assertEqual(100, arr.length());
    }

    /**
     * Verify constructing array from 1e3 yields length 1000
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0700
     * @tc.name testUint8ClampedArrayConstructorThree007
     * @tc.desc Verify constructing array from 1e3 yields length 1000
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1e3);
    assertEqual(1000, arr.length());
    }

    /**
     * Verify length=3.0 initializes arr[0] to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0800
     * @tc.name testUint8ClampedArrayConstructorThree008
     * @tc.desc Verify length=3.0 initializes arr[0] to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3.0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 0 for array from 3.0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_0900
     * @tc.name testUint8ClampedArrayConstructorThree009
     * @tc.desc Verify constructor element [1] equals 0 for array from 3.0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3.0);
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify constructor element [2] equals 0 for array from 3.0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1000
     * @tc.name testUint8ClampedArrayConstructorThree010
     * @tc.desc Verify constructor element [2] equals 0 for array from 3.0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3.0);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify constructing array from 8.0 yields byteLength 8
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1100
     * @tc.name testUint8ClampedArrayConstructorThree011
     * @tc.desc Verify constructing array from 8.0 yields byteLength 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8.0);
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify length=8.0 buffer.byteLength=length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1200
     * @tc.name testUint8ClampedArrayConstructorThree012
     * @tc.desc Verify length=8.0 buffer.byteLength=length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8.0);
    assertEqual(8, arr.buffer().byteLength());
    }

    /**
     * Verify constructing array from s yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1300
     * @tc.name testUint8ClampedArrayConstructorThree013
     * @tc.desc Verify constructing array from s yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree013() {
    Set<Number> s = new LinkedHashSet<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructor element [0] equals 0 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1400
     * @tc.name testUint8ClampedArrayConstructorThree014
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree014() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1500
     * @tc.name testUint8ClampedArrayConstructorThree015
     * @tc.desc Verify constructor element [0] equals 1 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree015() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1600
     * @tc.name testUint8ClampedArrayConstructorThree016
     * @tc.desc Verify constructor element [0] equals 255 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree016() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 127 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1700
     * @tc.name testUint8ClampedArrayConstructorThree017
     * @tc.desc Verify constructor element [0] equals 127 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree017() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(127);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 128 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1800
     * @tc.name testUint8ClampedArrayConstructorThree018
     * @tc.desc Verify constructor element [0] equals 128 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree018() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(128);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_1900
     * @tc.name testUint8ClampedArrayConstructorThree019
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree019() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(Double.NaN);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2000
     * @tc.name testUint8ClampedArrayConstructorThree020
     * @tc.desc Verify constructor element [0] equals 1 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree020() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(0.9);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2100
     * @tc.name testUint8ClampedArrayConstructorThree021
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree021() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(0.4);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2200
     * @tc.name testUint8ClampedArrayConstructorThree022
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree022() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(0.5);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Set<Number> 127.5 half-even 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2300
     * @tc.name testUint8ClampedArrayConstructorThree023
     * @tc.desc Verify Set<Number> 127.5 half-even 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree023() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(127.5);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify Set<Number> 128.5 half-even 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2400
     * @tc.name testUint8ClampedArrayConstructorThree024
     * @tc.desc Verify Set<Number> 128.5 half-even 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree024() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(128.5);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2500
     * @tc.name testUint8ClampedArrayConstructorThree025
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree025() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(-1e9);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing array from s yields length 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2600
     * @tc.name testUint8ClampedArrayConstructorThree026
     * @tc.desc Verify constructing array from s yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree026() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(3, arr.length());
    }

    /**
     * Verify constructor element [0] equals 255 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2700
     * @tc.name testUint8ClampedArrayConstructorThree027
     * @tc.desc Verify constructor element [0] equals 255 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree027() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(300);
    s.add(50);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 50 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2800
     * @tc.name testUint8ClampedArrayConstructorThree028
     * @tc.desc Verify constructor element [1] equals 50 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree028() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(300);
    s.add(50);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(50, arr.get(1));
    }

    /**
     * Verify constructor element [0] equals 0 for array from s
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_2900
     * @tc.name testUint8ClampedArrayConstructorThree029
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree029() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(-100);
    s.add(128);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3000
     * @tc.name testUint8ClampedArrayConstructorThree030
     * @tc.desc Verify constructor element [0] equals 1 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree030() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify Array<Number> 9223372036854775807 clamp 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3100
     * @tc.name testUint8ClampedArrayConstructorThree031
     * @tc.desc Verify Array<Number> 9223372036854775807 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree031() {
    List<Number> src = new ArrayList<>();
    src.add((int) (255));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 20 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3200
     * @tc.name testUint8ClampedArrayConstructorThree032
     * @tc.desc Verify constructor element [1] equals 20 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree032() {
    List<Number> src = new ArrayList<>();
    src.add(10);
    src.add(20);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(20, arr.get(1));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3300
     * @tc.name testUint8ClampedArrayConstructorThree033
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree033() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 256
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3400
     * @tc.name testUint8ClampedArrayConstructorThree034
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree034() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(256, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 1024
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3500
     * @tc.name testUint8ClampedArrayConstructorThree035
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree035() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(1024, arr.length());
    }

    /**
     * Verify constructing from an ArrayBuffer preserves the buffer byteLength
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3600
     * @tc.name testUint8ClampedArrayConstructorThree036
     * @tc.desc Verify constructing from an ArrayBuffer preserves the buffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify constructing from an ArrayBuffer reads the first stored byte
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3700
     * @tc.name testUint8ClampedArrayConstructorThree037
     * @tc.desc Verify constructing from an ArrayBuffer reads the first stored byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree037() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing from an ArrayBuffer reads the second stored byte
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3800
     * @tc.name testUint8ClampedArrayConstructorThree038
     * @tc.desc Verify constructing from an ArrayBuffer reads the second stored byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree038() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify constructing from an ArrayBuffer reads the third stored byte
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_3900
     * @tc.name testUint8ClampedArrayConstructorThree039
     * @tc.desc Verify constructing from an ArrayBuffer reads the third stored byte
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree039() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify constructor element [0] equals 100 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4000
     * @tc.name testUint8ClampedArrayConstructorThree040
     * @tc.desc Verify constructor element [0] equals 100 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree040() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 100);
    assertEqual(100, b.get(0));
    }

    /**
     * Verify writing -1 through an ArrayBuffer-backed view stores the clamped value 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4100
     * @tc.name testUint8ClampedArrayConstructorThree041
     * @tc.desc Verify writing -1 through an ArrayBuffer-backed view stores the clamped value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree041() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, -1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing from an empty ArrayBuffer exposes a zero-length buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4200
     * @tc.name testUint8ClampedArrayConstructorThree042
     * @tc.desc Verify constructing from an empty ArrayBuffer exposes a zero-length buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree042() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify constructing from an empty ArrayBuffer produces byteLength 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4300
     * @tc.name testUint8ClampedArrayConstructorThree043
     * @tc.desc Verify constructing from an empty ArrayBuffer produces byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree043() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify Array<Number> 2147483648 clamp 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4400
     * @tc.name testUint8ClampedArrayConstructorThree044
     * @tc.desc Verify Array<Number> 2147483648 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree044() {
    List<Number> src = new ArrayList<>();
    src.add((int) (255));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 11 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4500
     * @tc.name testUint8ClampedArrayConstructorThree045
     * @tc.desc Verify constructor element [0] equals 11 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree045() {
    List<Number> src = new ArrayList<>();
    src.add(11);
    src.add(22);
    src.add(33);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(11, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 22 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4600
     * @tc.name testUint8ClampedArrayConstructorThree046
     * @tc.desc Verify constructor element [1] equals 22 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree046() {
    List<Number> src = new ArrayList<>();
    src.add(11);
    src.add(22);
    src.add(33);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(22, arr.get(1));
    }

    /**
     * Verify constructor element [2] equals 33 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4700
     * @tc.name testUint8ClampedArrayConstructorThree047
     * @tc.desc Verify constructor element [2] equals 33 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree047() {
    List<Number> src = new ArrayList<>();
    src.add(11);
    src.add(22);
    src.add(33);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(33, arr.get(2));
    }

    /**
     * Verify constructor element [0] equals 255 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4800
     * @tc.name testUint8ClampedArrayConstructorThree048
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree048() {
    List<Number> src = new ArrayList<>();
    src.add(300);
    src.add(50);
    src.add(-10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 50 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_4900
     * @tc.name testUint8ClampedArrayConstructorThree049
     * @tc.desc Verify constructor element [1] equals 50 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree049() {
    List<Number> src = new ArrayList<>();
    src.add(300);
    src.add(50);
    src.add(-10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(50, arr.get(1));
    }

    /**
     * Verify constructor element [2] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5000
     * @tc.name testUint8ClampedArrayConstructorThree050
     * @tc.desc Verify constructor element [2] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree050() {
    List<Number> src = new ArrayList<>();
    src.add(300);
    src.add(50);
    src.add(-10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify constructing from ArrayLike makes independent copy with correct backing buffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5100
     * @tc.name testUint8ClampedArrayConstructorThree051
     * @tc.desc Verify constructing from ArrayLike makes independent copy with correct backing buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree051() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    src.add(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.length());
    assertEqual(2, arr.byteLength());
    assertEqual(2, arr.buffer().byteLength());
    src.set(0, 99);
    assertEqual(5, arr.get(0));
    }

    /**
     * Verify constructing array from src yields length 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5200
     * @tc.name testUint8ClampedArrayConstructorThree052
     * @tc.desc Verify constructing array from src yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree052() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    src.add(99);
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructing from ArrayLike [5] produces correct length, byteLength and element value
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5300
     * @tc.name testUint8ClampedArrayConstructorThree053
     * @tc.desc Verify constructing from ArrayLike [5] produces correct length, byteLength and element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree053() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    assertEqual(1, arr.byteLength());
    assertEqual(1, arr.buffer().byteLength());
    assertEqual(5, arr.get(0));
    }

    /**
     * Verify constructing from ArrayLike data creates a zero-offset view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5400
     * @tc.name testUint8ClampedArrayConstructorThree054
     * @tc.desc Verify constructing from ArrayLike data creates a zero-offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree054() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify constructing array from src yields byteLength 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5500
     * @tc.name testUint8ClampedArrayConstructorThree055
     * @tc.desc Verify constructing array from src yields byteLength 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree055() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    src.add(6);
    src.add(7);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify constructing from Array<Number> src produces independent copy where src[
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5600
     * @tc.name testUint8ClampedArrayConstructorThree056
          * @tc.desc Verify constructing from Array<Number> src produces independent copy where src[
     * 0] stays 5 after arr[0]=99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree056() {
    List<Number> src = new ArrayList<>();
    src.add(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 99);
    assertEqual(5, src.get(0));
    }

    /**
     * Verify constructing from ArrayLike Number [1] produces correct length, byteLength and element value
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5700
     * @tc.name testUint8ClampedArrayConstructorThree057
     * @tc.desc Verify constructing from ArrayLike Number [1] produces correct length, byteLength and element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree057() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    assertEqual(1, arr.byteLength());
    assertEqual(1, arr.buffer().byteLength());
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length arr.byteLength
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5800
     * @tc.name testUint8ClampedArrayConstructorThree058
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length arr.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree058() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(6, arr.length());
    assertEqual(6, arr.byteLength());
    }

    /**
     * Verify constructing array from src yields length arr.byteLength
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_5900
     * @tc.name testUint8ClampedArrayConstructorThree059
     * @tc.desc Verify constructing array from src yields length arr.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree059() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.length());
    assertEqual(2, arr.byteLength());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 512
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6000
     * @tc.name testUint8ClampedArrayConstructorThree060
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 512
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree060() {
    ArrayBuffer buf = new ArrayBuffer(512);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(512, arr.length());
    }

    /**
     * Verify constructing array from src yields length 100
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6100
     * @tc.name testUint8ClampedArrayConstructorThree061
     * @tc.desc Verify constructing array from src yields length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree061() {
    List<Number> src = new ArrayList<>();
    int i = 0;
    for (i = 0; i < 100; i++) {
    src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(100, arr.length());
    }

    /**
     * Verify length=NaN creates empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6200
     * @tc.name testUint8ClampedArrayConstructorThree062
     * @tc.desc Verify length=NaN creates empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(Double.NaN);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructor throws RangeError for -Number.POSITIVE_INFINITY
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6300
     * @tc.name testUint8ClampedArrayConstructorThree063
     * @tc.desc Verify constructor throws RangeError for -Number.POSITIVE_INFINITY
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree063() {
    try {
    new Uint8ClampedArray(-Double.POSITIVE_INFINITY);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6400
     * @tc.name testUint8ClampedArrayConstructorThree064
     * @tc.desc Verify constructor throws RangeError for -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree064() {
    try {
    new Uint8ClampedArray(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor throws RangeError for -1e9
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6500
     * @tc.name testUint8ClampedArrayConstructorThree065
     * @tc.desc Verify constructor throws RangeError for -1e9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree065() {
    try {
    new Uint8ClampedArray(-1e9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify out-of-bounds write RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6600
     * @tc.name testUint8ClampedArrayConstructorThree066
     * @tc.desc Verify out-of-bounds write RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree066() {
    try {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(5, 100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify out-of-bounds read RangeError
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6700
     * @tc.name testUint8ClampedArrayConstructorThree067
     * @tc.desc Verify out-of-bounds read RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree067() {
    try {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.get(5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing array from s yields length 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6800
     * @tc.name testUint8ClampedArrayConstructorThree068
     * @tc.desc Verify constructing array from s yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree068() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(Double.NaN);
    s.add(50);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructor element [0] equals 255 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_6900
     * @tc.name testUint8ClampedArrayConstructorThree069
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree069() {
    List<Number> src = new ArrayList<>();
    src.add((int) (255));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7000
     * @tc.name testUint8ClampedArrayConstructorThree070
     * @tc.desc Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree070() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 0.5);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 128 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7100
     * @tc.name testUint8ClampedArrayConstructorThree071
     * @tc.desc Verify constructor element [0] equals 128 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree071() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 128.5);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7200
     * @tc.name testUint8ClampedArrayConstructorThree072
     * @tc.desc Verify constructor element [0] equals 255 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree072() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1e9);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length b.length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7300
     * @tc.name testUint8ClampedArrayConstructorThree073
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length b.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree073() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    assertEqual(4, a.length());
    assertEqual(4, b.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset b.byteOffset
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7400
     * @tc.name testUint8ClampedArrayConstructorThree074
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset b.byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree074() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    assertEqual(0, a.byteOffset());
    assertEqual(0, b.byteOffset());
    }

    /**
     * Verify constructor element [2] equals 30 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7500
     * @tc.name testUint8ClampedArrayConstructorThree075
     * @tc.desc Verify constructor element [2] equals 30 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree075() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 10);
    a.set(1, 20);
    a.set(2, 30);
    assertEqual(30, b.get(2));
    }

    /**
     * Verify constructing array from src yields length 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7600
     * @tc.name testUint8ClampedArrayConstructorThree076
     * @tc.desc Verify constructing array from src yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree076() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    src.add(3);
    src.add(4);
    assertEqual(2, arr.length());
    }

    /**
     * Verify constructor element [0] equals 1 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7700
     * @tc.name testUint8ClampedArrayConstructorThree077
     * @tc.desc Verify constructor element [0] equals 1 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree077() {
    List<Number> src = new ArrayList<>();
    src.add(1);
    src.add(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    src.set(0, 99);
    src.set(1, 88);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify numeric length constructor creates a buffer whose byteLength matches the length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7800
     * @tc.name testUint8ClampedArrayConstructorThree078
     * @tc.desc Verify numeric length constructor creates a buffer whose byteLength matches the length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4.0);
    assertEqual(4, arr.buffer().byteLength());
    }

    /**
     * Verify Iterable ArrayBuffer
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_7900
     * @tc.name testUint8ClampedArrayConstructorThree079
     * @tc.desc Verify Iterable ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree079() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(s);
    assertEqual(1, arr.length());
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify separate numeric length constructions allocate distinct buffers
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_8000
     * @tc.name testUint8ClampedArrayConstructorThree080
     * @tc.desc Verify separate numeric length constructions allocate distinct buffers
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree080() {
    Uint8ClampedArray a = new Uint8ClampedArray(4.0);
    Uint8ClampedArray b = new Uint8ClampedArray(4.0);
    assertNotEqual(b.buffer(), a.buffer());
    }

    /**
     * Verify separate Iterable constructions allocate distinct buffers
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_THREE_8100
     * @tc.name testUint8ClampedArrayConstructorThree081
     * @tc.desc Verify separate Iterable constructions allocate distinct buffers
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorThree081() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(1);
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    Uint8ClampedArray b = new Uint8ClampedArray(s);
    assertNotEqual(b.buffer(), a.buffer());
    }
}
