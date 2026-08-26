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
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor07Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayConstructor07Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0100
     * @tc.name testUint8ClampedArrayConstructorSeven001
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven001() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8.0);
    assertEqual(8, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0200
     * @tc.name testUint8ClampedArrayConstructorSeven002
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven002() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 15.0);
    assertEqual(1, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0300
     * @tc.name testUint8ClampedArrayConstructorSeven003
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven003() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(255, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0400
     * @tc.name testUint8ClampedArrayConstructorSeven004
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven004() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 128.0);
    assertEqual(127, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0500
     * @tc.name testUint8ClampedArrayConstructorSeven005
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven005() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 256.0);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0600
     * @tc.name testUint8ClampedArrayConstructorSeven006
     * @tc.desc Verify buf(65535) + offset 0.0 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven006() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0.0);
    assertEqual(65535, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0700
     * @tc.name testUint8ClampedArrayConstructorSeven007
     * @tc.desc Verify buf(65535) + offset 32768.0 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven007() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 32768.0);
    assertEqual(32767, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0800
     * @tc.name testUint8ClampedArrayConstructorSeven008
     * @tc.desc Verify constructor element [0] equals 5 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven008() {
    List<Number> src = java.util.Arrays.asList(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_0900
     * @tc.name testUint8ClampedArrayConstructorSeven009
     * @tc.desc Verify constructor element [0] equals 15 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven009() {
    List<Number> src = java.util.Arrays.asList(15);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(15, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1000
     * @tc.name testUint8ClampedArrayConstructorSeven010
     * @tc.desc Verify constructor element [0] equals 31 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven010() {
    List<Number> src = java.util.Arrays.asList(31);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(31, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1100
     * @tc.name testUint8ClampedArrayConstructorSeven011
     * @tc.desc Verify constructor element [0] equals 32 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven011() {
    List<Number> src = java.util.Arrays.asList(32);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(32, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1200
     * @tc.name testUint8ClampedArrayConstructorSeven012
     * @tc.desc Verify constructor element [0] equals 63 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven012() {
    List<Number> src = java.util.Arrays.asList(63);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(63, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1300
     * @tc.name testUint8ClampedArrayConstructorSeven013
     * @tc.desc Verify Array<number> 65 (ASCII 'A')
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven013() {
    List<Number> src = java.util.Arrays.asList(65);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(65, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1400
     * @tc.name testUint8ClampedArrayConstructorSeven014
     * @tc.desc Verify constructor element [0] equals 16 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven014() {
    List<Number> src = java.util.Arrays.asList(0x10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(16, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1500
     * @tc.name testUint8ClampedArrayConstructorSeven015
     * @tc.desc Verify constructor element [0] equals 15 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven015() {
    List<Number> src = java.util.Arrays.asList(017);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(15, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1600
     * @tc.name testUint8ClampedArrayConstructorSeven016
     * @tc.desc Verify constructor element [0] equals 5 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven016() {
    List<Number> src = java.util.Arrays.asList(0b101);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1700
     * @tc.name testUint8ClampedArrayConstructorSeven017
     * @tc.desc Verify Array<number> 0x10 0o17 0b101
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven017() {
    List<Number> src = java.util.Arrays.asList(0x10, 017, 0b101);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(16, arr.get(0));
    assertEqual(15, arr.get(1));
    assertEqual(5, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1800
     * @tc.name testUint8ClampedArrayConstructorSeven018
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven018() {
    int v = -100;
    List<Number> src = java.util.Arrays.asList(v);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_1900
     * @tc.name testUint8ClampedArrayConstructorSeven019
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven019() {
    int v = -50;
    List<Number> src = java.util.Arrays.asList(v);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_2000
     * @tc.name testUint8ClampedArrayConstructorSeven020
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven020() {
    int v = -10;
    List<Number> src = java.util.Arrays.asList(v);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_2100
     * @tc.name testUint8ClampedArrayConstructorSeven021
     * @tc.desc Verify Array<number> arr[0]=99 assignable
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven021() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 99);
    assertEqual(99, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_2200
     * @tc.name testUint8ClampedArrayConstructorSeven022
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven022() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 300);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_2300
     * @tc.name testUint8ClampedArrayConstructorSeven023
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven023() {
    List<Number> src = java.util.Arrays.asList(10, 20);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, -5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_2400
     * @tc.name testUint8ClampedArrayConstructorSeven024
     * @tc.desc Verify Array<number> source unaffected after arr[0]=99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven024() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 99);
    assertEqual(1, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SEVEN_2500
     * @tc.name testUint8ClampedArrayConstructorSeven025
     * @tc.desc Verify constructing array from src yields length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSeven025() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
    src.add(0);
    };
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(256, arr.length());
    assertEqual(0, arr.get(100));
    }
}
