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

package basetype.uint8array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayWithTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayWithTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0100
     * @tc.name testUint8ArrayWith001
     * @tc.desc Verify with with two parameters index and value for normal call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith001() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int val = 100;
    Uint8Array result = arr.with(0, val);
    assertEqual(100, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0200
     * @tc.name testUint8ArrayWith002
     * @tc.desc Verify with with index=-5 wraps to valid index for negative index on length 5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith002() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int val = 100;
    Uint8Array arr2 = arr.with(-5, val);
    assertEqual(100, arr2.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0300
     * @tc.name testUint8ArrayWith003
     * @tc.desc Verify with with index=0 replacing only element of length 1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith003() {
    Uint8Array arr = Uint8Array.of(5);
    int val = 99;
    Uint8Array result = arr.with(0, val);
    assertEqual(99, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0400
     * @tc.name testUint8ArrayWith004
     * @tc.desc Verify with with index=0 replacing first element of length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith004() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int val = 100;
    Uint8Array result = arr.with(0, val);
    assertEqual(100, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0500
     * @tc.name testUint8ArrayWith005
     * @tc.desc Verify with with index=2 replacing last element of length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith005() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int val = 200;
    Uint8Array result = arr.with(2, val);
    assertEqual(200, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0600
     * @tc.name testUint8ArrayWith006
     * @tc.desc Verify with with index=-1 wraps to valid index for negative index on length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith006() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int val = 150;
    Uint8Array arr2 = arr.with(-1, val);
    assertEqual(150, arr2.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0700
     * @tc.name testUint8ArrayWith007
     * @tc.desc Verify with with index=-3 wraps to valid index for negative index on length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith007() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int val = 50;
    Uint8Array arr2 = arr.with(-3, val);
    assertEqual(50, arr2.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0800
     * @tc.name testUint8ArrayWith008
     * @tc.desc Verify with with index=0 replacing first element of length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith008() {
    Uint8Array arr = new Uint8Array(100);
    int val = 1;
    Uint8Array result = arr.with(0, val);
    assertEqual(1, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_0900
     * @tc.name testUint8ArrayWith009
     * @tc.desc Verify with with index=99 replacing last element of length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith009() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(99, 0);
    int val = 255;
    Uint8Array result = arr.with(99, val);
    assertEqual(255, result.get(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1000
     * @tc.name testUint8ArrayWith010
     * @tc.desc Verify with with index=-1 wraps to valid index for negative index on length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith010() {
    Uint8Array arr = new Uint8Array(100);
    int val = 127;
    Uint8Array arr2 = arr.with(-1, val);
    assertEqual(127, arr2.get(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1100
     * @tc.name testUint8ArrayWith011
     * @tc.desc Verify with with index=-100 wraps to valid index for negative index on length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith011() {
    Uint8Array arr = new Uint8Array(100);
    int val = 128;
    Uint8Array arr2 = arr.with(-1, val);
    assertEqual(128, arr2.get(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1200
     * @tc.name testUint8ArrayWith012
     * @tc.desc Verify with with index=0 on subarray view replacing first element of view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith012() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array view = arr.subarray(1, 4);
    int val = 99;
    Uint8Array result = view.with(0, val);
    assertEqual(99, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1300
     * @tc.name testUint8ArrayWith013
     * @tc.desc Verify with with index=2 on subarray view replacing last element of view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith013() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array view = arr.subarray(1, 4);
    int val = 88;
    Uint8Array result = view.with(2, val);
    assertEqual(88, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1400
     * @tc.name testUint8ArrayWith014
     * @tc.desc Verify with with index=0 on buffer+offset view replacing first element of view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith014() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    int val = 77;
    Uint8Array result = arr.with(0, val);
    assertEqual(77, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1500
     * @tc.name testUint8ArrayWith015
     * @tc.desc Verify with with expression index 1*0+0 for index parameter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith015() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int val = 99;
    Uint8Array result = arr.with(1 * 0, val);
    assertEqual(99, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1600
     * @tc.name testUint8ArrayWith016
     * @tc.desc Verify with with expression index 4/2 for index parameter
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith016() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int val = 77;
    Uint8Array result = arr.with(4 / 2, val);
    assertEqual(77, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1700
     * @tc.name testUint8ArrayWith017
     * @tc.desc Verify with with value=0 minimum value replacing element to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith017() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0;
    Uint8Array result = arr.with(1, val);
    assertEqual(0, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1800
     * @tc.name testUint8ArrayWith018
     * @tc.desc Verify with with value=255 maximum value replacing element to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith018() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 255;
    Uint8Array result = arr.with(1, val);
    assertEqual(255, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_1900
     * @tc.name testUint8ArrayWith019
     * @tc.desc Verify with with value=1 minimum positive boundary for correct replacement
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith019() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 1;
    Uint8Array result = arr.with(1, val);
    assertEqual(1, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2000
     * @tc.name testUint8ArrayWith020
     * @tc.desc Verify with with value=127 middle value for correct replacement
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith020() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 127;
    Uint8Array result = arr.with(1, val);
    assertEqual(127, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2100
     * @tc.name testUint8ArrayWith021
     * @tc.desc Verify with with value=128 middle+1 value for correct replacement
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 128;
    Uint8Array result = arr.with(1, val);
    assertEqual(128, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2200
     * @tc.name testUint8ArrayWith022
     * @tc.desc Verify with with value=254 max-1 value for correct replacement
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith022() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 254;
    Uint8Array result = arr.with(1, val);
    assertEqual(254, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2300
     * @tc.name testUint8ArrayWith023
     * @tc.desc Verify with with value=0x00 hex minimum value for hex literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith023() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x00;
    Uint8Array result = arr.with(1, val);
    assertEqual(0, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2400
     * @tc.name testUint8ArrayWith024
     * @tc.desc Verify with with value=0xFF hex maximum value for hex literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0xFF;
    Uint8Array result = arr.with(1, val);
    assertEqual(255, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2500
     * @tc.name testUint8ArrayWith025
     * @tc.desc Verify with with value=0x80 hex 128 for hex literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith025() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x80;
    Uint8Array result = arr.with(1, val);
    assertEqual(128, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2600
     * @tc.name testUint8ArrayWith026
     * @tc.desc Verify with with value=0x7F hex 127 for hex literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith026() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x7F;
    Uint8Array result = arr.with(1, val);
    assertEqual(127, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2700
     * @tc.name testUint8ArrayWith027
     * @tc.desc Verify with with value=0x0F hex 15 for hex literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith027() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x0F;
    Uint8Array result = arr.with(1, val);
    assertEqual(15, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2800
     * @tc.name testUint8ArrayWith028
     * @tc.desc Verify with with value=0xF0 hex 240 for hex literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith028() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0xF0;
    Uint8Array result = arr.with(1, val);
    assertEqual(240, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_2900
     * @tc.name testUint8ArrayWith029
     * @tc.desc Verify with with value=0b00000000 binary minimum for binary literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith029() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0b00000000;
    Uint8Array result = arr.with(1, val);
    assertEqual(0, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3000
     * @tc.name testUint8ArrayWith030
     * @tc.desc Verify with with value=0b11111111 binary maximum for binary literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith030() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0b11111111;
    Uint8Array result = arr.with(1, val);
    assertEqual(255, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3100
     * @tc.name testUint8ArrayWith031
     * @tc.desc Verify with with value=0b10101010 binary 170 for binary literal
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith031() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0b10101010;
    Uint8Array result = arr.with(1, val);
    assertEqual(170, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3200
     * @tc.name testUint8ArrayWith032
     * @tc.desc Verify with returns a new Uint8Array not the same object
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith032() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 5;
    Uint8Array result = arr.with(1, val);
    assertTrue(result != arr);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3300
     * @tc.name testUint8ArrayWith033
     * @tc.desc Verify with returns Uint8Array type
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith033() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 5;
    Uint8Array result = arr.with(1, val);
    assertEqual(BasTest.className(arr), BasTest.className(result));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3400
     * @tc.name testUint8ArrayWith034
     * @tc.desc Verify with returns new array with same length as original
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith034() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 5;
    Uint8Array result = arr.with(1, val);
    assertEqual(arr.length(), result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3500
     * @tc.name testUint8ArrayWith035
     * @tc.desc Verify with returns new array with unchanged elements at other positions
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith035() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 5;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3600
     * @tc.name testUint8ArrayWith036
     * @tc.desc Verify original array is not modified after calling with
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith036() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 5;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3700
     * @tc.name testUint8ArrayWith037
     * @tc.desc Verify with returns new array with replaced element at index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith037() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    Uint8Array result = arr.with(0, val);
    assertEqual(99, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3800
     * @tc.name testUint8ArrayWith038
     * @tc.desc Verify with returns new array with replaced element at last index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith038() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    Uint8Array result = arr.with(2, val);
    assertEqual(10, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(99, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_3900
     * @tc.name testUint8ArrayWith039
     * @tc.desc Verify with with index=-1 wraps to valid index for negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith039() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    Uint8Array arr2 = arr.with(-1, val);
    assertEqual(99, arr2.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4000
     * @tc.name testUint8ArrayWith040
     * @tc.desc Verify with with index=-3 wraps to valid index for negative index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith040() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    Uint8Array arr2 = arr.with(-3, val);
    assertEqual(99, arr2.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4100
     * @tc.name testUint8ArrayWith041
     * @tc.desc Verify with returns new array with replaced element on subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith041() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array view = arr.subarray(1, 4);
    int val = 99;
    Uint8Array result = view.with(0, val);
    assertEqual(99, result.get(0));
    assertEqual(30, result.get(1));
    assertEqual(40, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4200
     * @tc.name testUint8ArrayWith042
     * @tc.desc Verify with returns new array with replaced element using expression index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith042() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    Uint8Array result = arr.with(1 * 0, val);
    assertEqual(99, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4300
     * @tc.name testUint8ArrayWith043
     * @tc.desc Verify with returns new array with replaced element using expression index 4/2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith043() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int val = 77;
    Uint8Array result = arr.with(4 / 2, val);
    assertEqual(10, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(77, result.get(2));
    assertEqual(40, result.get(3));
    assertEqual(50, result.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4400
     * @tc.name testUint8ArrayWith044
     * @tc.desc Verify with returns array with replaced element value=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith044() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4500
     * @tc.name testUint8ArrayWith045
     * @tc.desc Verify with returns array with replaced element value=255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith045() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 255;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4600
     * @tc.name testUint8ArrayWith046
     * @tc.desc Verify with returns array with replaced element value=127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith046() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 127;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(127, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4700
     * @tc.name testUint8ArrayWith047
     * @tc.desc Verify with returns array with replaced element value=128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith047() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 128;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(128, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4800
     * @tc.name testUint8ArrayWith048
     * @tc.desc Verify with returns array with replaced element value=0xFF hex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith048() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0xFF;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_4900
     * @tc.name testUint8ArrayWith049
     * @tc.desc Verify with returns array with replaced element value=0x00 hex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith049() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x00;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5000
     * @tc.name testUint8ArrayWith050
     * @tc.desc Verify with returns array with replaced element value=0x80 hex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith050() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x80;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(128, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5100
     * @tc.name testUint8ArrayWith051
     * @tc.desc Verify with returns array with replaced element value=0x7F hex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith051() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0x7F;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(127, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5200
     * @tc.name testUint8ArrayWith052
     * @tc.desc Verify with returns array with replaced element value=0b11111111 binary
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith052() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0b11111111;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5300
     * @tc.name testUint8ArrayWith053
     * @tc.desc Verify with returns array with replaced element value=0b00000000 binary
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith053() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0b00000000;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5400
     * @tc.name testUint8ArrayWith054
     * @tc.desc Verify with returns array with replaced element value=0b10101010 binary
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith054() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 0b10101010;
    Uint8Array result = arr.with(1, val);
    assertEqual(10, result.get(0));
    assertEqual(170, result.get(1));
    assertEqual(30, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5500
     * @tc.name testUint8ArrayWith055
     * @tc.desc Verify with index=length throws RangeError for length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith055() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    try {
    arr.with(3, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5600
     * @tc.name testUint8ArrayWith056
     * @tc.desc Verify with index=length+1 throws RangeError for length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith056() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    try {
    arr.with(4, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5700
     * @tc.name testUint8ArrayWith057
     * @tc.desc Verify with index negative beyond range throws RangeError for length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith057() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    try {
    arr.with(-4, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5800
     * @tc.name testUint8ArrayWith058
     * @tc.desc Verify with index negative beyond range for length 5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith058() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int val = 99;
    try {
    arr.with(-6, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_5900
     * @tc.name testUint8ArrayWith059
     * @tc.desc Verify with index=5 throws RangeError for length 3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith059() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    try {
    arr.with(5, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6000
     * @tc.name testUint8ArrayWith060
     * @tc.desc Verify with index=6 throws RangeError for length 4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith060() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int val = 99;
    try {
    arr.with(6, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6100
     * @tc.name testUint8ArrayWith061
     * @tc.desc Verify with index=1 throws RangeError for length 1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith061() {
    Uint8Array arr = Uint8Array.of(100);
    int val = 99;
    try {
    arr.with(1, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6200
     * @tc.name testUint8ArrayWith062
     * @tc.desc Verify with index=-2 throws RangeError for length 1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith062() {
    Uint8Array arr = Uint8Array.of(100);
    int val = 99;
    try {
    arr.with(-2, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6300
     * @tc.name testUint8ArrayWith063
     * @tc.desc Verify with index=100 throws RangeError for length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith063() {
    Uint8Array arr = new Uint8Array(100);
    int val = 99;
    try {
    arr.with(100, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6400
     * @tc.name testUint8ArrayWith064
     * @tc.desc Verify with index=101 throws RangeError for length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith064() {
    Uint8Array arr = new Uint8Array(100);
    int val = 99;
    try {
    arr.with(101, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6500
     * @tc.name testUint8ArrayWith065
     * @tc.desc Verify with index=-101 throws RangeError for length 100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith065() {
    Uint8Array arr = new Uint8Array(100);
    int val = 99;
    try {
    arr.with(-101, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6600
     * @tc.name testUint8ArrayWith066
     * @tc.desc Verify with index=view.length throws RangeError on subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith066() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array view = arr.subarray(1, 4);
    int val = 99;
    try {
    view.with(3, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6700
     * @tc.name testUint8ArrayWith067
     * @tc.desc Verify with index=view.length+1 throws RangeError on subarray view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith067() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Uint8Array view = arr.subarray(1, 4);
    int val = 99;
    try {
    view.with(4, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6800
     * @tc.name testUint8ArrayWith068
     * @tc.desc Verify with index=view.length throws RangeError on buffer+offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith068() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    int val = 99;
    try {
    arr.with(3, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_6900
     * @tc.name testUint8ArrayWith069
     * @tc.desc Verify with index large positive throws RangeError on buffer+offset view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith069() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    int val = 99;
    try {
    arr.with(999, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_7000
     * @tc.name testUint8ArrayWith070
     * @tc.desc Verify with index large negative -9999 throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith070() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int val = 99;
    try {
    arr.with(-9999, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_7100
     * @tc.name testUint8ArrayWith071
     * @tc.desc Verify with index=0 value=0 on length 1 array returns new array with 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith071() {
    Uint8Array arr = Uint8Array.of(100);
    int val = 0;
    Uint8Array result = arr.with(0, val);
    assertEqual(0, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_7200
     * @tc.name testUint8ArrayWith072
     * @tc.desc Verify with index=0 value=255 on length 1 array returns new array with 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith072() {
    Uint8Array arr = Uint8Array.of(100);
    int val = 255;
    Uint8Array result = arr.with(0, val);
    assertEqual(255, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_7300
     * @tc.name testUint8ArrayWith073
     * @tc.desc Verify with index=0 value=0xFF hex on length 1 array returns new array with 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith073() {
    Uint8Array arr = Uint8Array.of(100);
    int val = 0xFF;
    Uint8Array result = arr.with(0, val);
    assertEqual(255, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_WITH01_7400
     * @tc.name testUint8ArrayWith074
     * @tc.desc Verify with index=0 value=0b11111111 binary on length 1 array returns new array with 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayWith074() {
    Uint8Array arr = Uint8Array.of(100);
    int val = 0b11111111;
    Uint8Array result = arr.with(0, val);
    assertEqual(255, result.get(0));
    }
}
