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

import basetype.common.BasTest;
import basetype.common.Uint8Array;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayOf01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayOf01Test extends BasTest {
    /**
     * Verify of() with empty parameter list creates non-null Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0100
     * @tc.name testUint8ArrayOf001
     * @tc.desc Verify of() with empty parameter list creates non-null Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf001() {
    Uint8Array arr = Uint8Array.of();
    assertNotNull(arr);
    }

    /**
     * Verify of(17) with single parameter has length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0200
     * @tc.name testUint8ArrayOf002
     * @tc.desc Verify of(17) with single parameter has length 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf002() {
    Uint8Array arr = Uint8Array.of(17);
    assertEqual(1, arr.length());
    }

    /**
     * Verify of(99, 199) with two parameters has length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0300
     * @tc.name testUint8ArrayOf003
     * @tc.desc Verify of(99, 199) with two parameters has length 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf003() {
    Uint8Array arr = Uint8Array.of(99, 199);
    assertEqual(2, arr.length());
    }

    /**
     * Verify of(11, 22, 33) with three parameters has length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0400
     * @tc.name testUint8ArrayOf004
     * @tc.desc Verify of(11, 22, 33) with three parameters has length 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf004() {
    Uint8Array arr = Uint8Array.of(11, 22, 33);
    assertEqual(3, arr.length());
    }

    /**
     * Verify of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) with ten parameters has length 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0500
     * @tc.name testUint8ArrayOf005
     * @tc.desc Verify of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) with ten parameters has length 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf005() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    assertEqual(10, arr.length());
    }

    /**
     * Verify of(0) with minimum value boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0600
     * @tc.name testUint8ArrayOf006
     * @tc.desc Verify of(0) with minimum value boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf006() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of(255) with maximum value boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0700
     * @tc.name testUint8ArrayOf007
     * @tc.desc Verify of(255) with maximum value boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf007() {
    Uint8Array arr = Uint8Array.of(255);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(128) with mid-value+1 boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0800
     * @tc.name testUint8ArrayOf008
     * @tc.desc Verify of(128) with mid-value+1 boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf008() {
    Uint8Array arr = Uint8Array.of(128);
    assertEqual(128, arr.at(0));
    }

    /**
     * Verify of(127) with mid-value boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_0900
     * @tc.name testUint8ArrayOf009
     * @tc.desc Verify of(127) with mid-value boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf009() {
    Uint8Array arr = Uint8Array.of(127);
    assertEqual(127, arr.at(0));
    }

    /**
     * Verify of(1) with minimum positive value boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1000
     * @tc.name testUint8ArrayOf010
     * @tc.desc Verify of(1) with minimum positive value boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf010() {
    Uint8Array arr = Uint8Array.of(1);
    assertEqual(1, arr.at(0));
    }

    /**
     * Verify of(254) with maximum value-1 boundary
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1100
     * @tc.name testUint8ArrayOf011
     * @tc.desc Verify of(254) with maximum value-1 boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf011() {
    Uint8Array arr = Uint8Array.of(254);
    assertEqual(254, arr.at(0));
    }

    /**
     * Verify of(0x00) with hexadecimal minimum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1200
     * @tc.name testUint8ArrayOf012
     * @tc.desc Verify of(0x00) with hexadecimal minimum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf012() {
    Uint8Array arr = Uint8Array.of(0x00);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of(0xFF) with hexadecimal maximum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1300
     * @tc.name testUint8ArrayOf013
     * @tc.desc Verify of(0xFF) with hexadecimal maximum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf013() {
    Uint8Array arr = Uint8Array.of(0xFF);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0x80) with hexadecimal 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1400
     * @tc.name testUint8ArrayOf014
     * @tc.desc Verify of(0x80) with hexadecimal 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf014() {
    Uint8Array arr = Uint8Array.of(0x80);
    assertEqual(128, arr.at(0));
    }

    /**
     * Verify of(0x0F) with hexadecimal 15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1500
     * @tc.name testUint8ArrayOf015
     * @tc.desc Verify of(0x0F) with hexadecimal 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf015() {
    Uint8Array arr = Uint8Array.of(0x0F);
    assertEqual(15, arr.at(0));
    }

    /**
     * Verify of(0xA5) with hexadecimal 165
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1600
     * @tc.name testUint8ArrayOf016
     * @tc.desc Verify of(0xA5) with hexadecimal 165
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf016() {
    Uint8Array arr = Uint8Array.of(0xA5);
    assertEqual(165, arr.at(0));
    }

    /**
     * Verify of(0b00000000) with binary minimum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1700
     * @tc.name testUint8ArrayOf017
     * @tc.desc Verify of(0b00000000) with binary minimum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf017() {
    Uint8Array arr = Uint8Array.of(0b00000000);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of(0b11111111) with binary maximum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1800
     * @tc.name testUint8ArrayOf018
     * @tc.desc Verify of(0b11111111) with binary maximum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf018() {
    Uint8Array arr = Uint8Array.of(0b11111111);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0b10000000) with binary 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_1900
     * @tc.name testUint8ArrayOf019
     * @tc.desc Verify of(0b10000000) with binary 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf019() {
    Uint8Array arr = Uint8Array.of(0b10000000);
    assertEqual(128, arr.at(0));
    }

    /**
     * Verify of(0b10101010) with binary 170
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2000
     * @tc.name testUint8ArrayOf020
     * @tc.desc Verify of(0b10101010) with binary 170
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf020() {
    Uint8Array arr = Uint8Array.of(0b10101010);
    assertEqual(170, arr.at(0));
    }

    /**
     * Verify of(0o000) with octal minimum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2100
     * @tc.name testUint8ArrayOf021
     * @tc.desc Verify of(0o000) with octal minimum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf021() {
    Uint8Array arr = Uint8Array.of(0000);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of(0o377) with octal maximum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2200
     * @tc.name testUint8ArrayOf022
     * @tc.desc Verify of(0o377) with octal maximum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf022() {
    Uint8Array arr = Uint8Array.of(0377);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0o200) with octal 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2300
     * @tc.name testUint8ArrayOf023
     * @tc.desc Verify of(0o200) with octal 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf023() {
    Uint8Array arr = Uint8Array.of(0200);
    assertEqual(128, arr.at(0));
    }

    /**
     * Verify of(0o077) with octal 63
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2400
     * @tc.name testUint8ArrayOf024
     * @tc.desc Verify of(0o077) with octal 63
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf024() {
    Uint8Array arr = Uint8Array.of(0077);
    assertEqual(63, arr.at(0));
    }

    /**
     * Verify of(1+2) with addition expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2500
     * @tc.name testUint8ArrayOf025
     * @tc.desc Verify of(1+2) with addition expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf025() {
    Uint8Array arr = Uint8Array.of(1 + 2);
    assertEqual(3, arr.at(0));
    }

    /**
     * Verify of(10-1) with subtraction expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2600
     * @tc.name testUint8ArrayOf026
     * @tc.desc Verify of(10-1) with subtraction expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf026() {
    Uint8Array arr = Uint8Array.of(10 - 1);
    assertEqual(9, arr.at(0));
    }

    /**
     * Verify of(3*5) with multiplication expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2700
     * @tc.name testUint8ArrayOf027
     * @tc.desc Verify of(3*5) with multiplication expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf027() {
    Uint8Array arr = Uint8Array.of(3 * 5);
    assertEqual(15, arr.at(0));
    }

    /**
     * Verify of(100/2) with division expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2800
     * @tc.name testUint8ArrayOf028
     * @tc.desc Verify of(100/2) with division expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf028() {
    Uint8Array arr = Uint8Array.of(100 / 2);
    assertEqual(50, arr.at(0));
    }

    /**
     * Verify of(10%3) with modulo expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_2900
     * @tc.name testUint8ArrayOf029
     * @tc.desc Verify of(10%3) with modulo expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf029() {
    Uint8Array arr = Uint8Array.of(10 % 3);
    assertEqual(1, arr.at(0));
    }

    /**
     * Verify of(1<<3) with left shift expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3000
     * @tc.name testUint8ArrayOf030
     * @tc.desc Verify of(1<<3) with left shift expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf030() {
    Uint8Array arr = Uint8Array.of(1 << 3);
    assertEqual(8, arr.at(0));
    }

    /**
     * Verify of(0xFF & 0x0F) with bitwise AND expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3100
     * @tc.name testUint8ArrayOf031
     * @tc.desc Verify of(0xFF & 0x0F) with bitwise AND expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf031() {
    Uint8Array arr = Uint8Array.of(0xFF & 0x0F);
    assertEqual(15, arr.at(0));
    }

    /**
     * Verify of(0xFF ^ 0x0F) with bitwise XOR expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3200
     * @tc.name testUint8ArrayOf032
     * @tc.desc Verify of(0xFF ^ 0x0F) with bitwise XOR expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf032() {
    Uint8Array arr = Uint8Array.of(0xFF ^ 0x0F);
    assertEqual(240, arr.at(0));
    }

    /**
     * Verify of(0xFF | 0x00) with bitwise OR expression
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3300
     * @tc.name testUint8ArrayOf033
     * @tc.desc Verify of(0xFF | 0x00) with bitwise OR expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf033() {
    Uint8Array arr = Uint8Array.of(0xFF | 0x00);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0, 0) with double minimum values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3400
     * @tc.name testUint8ArrayOf034
     * @tc.desc Verify of(0, 0) with double minimum values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf034() {
    Uint8Array arr = Uint8Array.of(0, 0);
    assertEqual(0, arr.at(0));
    assertEqual(0, arr.at(1));
    }

    /**
     * Verify of(0, 255) with minimum followed by maximum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3500
     * @tc.name testUint8ArrayOf035
     * @tc.desc Verify of(0, 255) with minimum followed by maximum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf035() {
    Uint8Array arr = Uint8Array.of(0, 255);
    assertEqual(0, arr.at(0));
    assertEqual(255, arr.at(1));
    }

    /**
     * Verify of(255, 0) with maximum followed by minimum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3600
     * @tc.name testUint8ArrayOf036
     * @tc.desc Verify of(255, 0) with maximum followed by minimum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf036() {
    Uint8Array arr = Uint8Array.of(255, 0);
    assertEqual(255, arr.at(0));
    assertEqual(0, arr.at(1));
    }

    /**
     * Verify of(127, 128) with mid-value and mid-value+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3700
     * @tc.name testUint8ArrayOf037
     * @tc.desc Verify of(127, 128) with mid-value and mid-value+1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf037() {
    Uint8Array arr = Uint8Array.of(127, 128);
    assertEqual(127, arr.at(0));
    assertEqual(128, arr.at(1));
    }

    /**
     * Verify of(0, 128) with minimum and mid-value+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3800
     * @tc.name testUint8ArrayOf038
     * @tc.desc Verify of(0, 128) with minimum and mid-value+1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf038() {
    Uint8Array arr = Uint8Array.of(0, 128);
    assertEqual(0, arr.at(0));
    assertEqual(128, arr.at(1));
    }

    /**
     * Verify of(255, 128) with maximum and mid-value+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_3900
     * @tc.name testUint8ArrayOf039
     * @tc.desc Verify of(255, 128) with maximum and mid-value+1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf039() {
    Uint8Array arr = Uint8Array.of(255, 128);
    assertEqual(255, arr.at(0));
    assertEqual(128, arr.at(1));
    }

    /**
     * Verify of(1, 254) with boundary values 1 and 254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4000
     * @tc.name testUint8ArrayOf040
     * @tc.desc Verify of(1, 254) with boundary values 1 and 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf040() {
    Uint8Array arr = Uint8Array.of(1, 254);
    assertEqual(1, arr.at(0));
    assertEqual(254, arr.at(1));
    }

    /**
     * Verify of(0, 127, 255) with increasing three values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4100
     * @tc.name testUint8ArrayOf041
     * @tc.desc Verify of(0, 127, 255) with increasing three values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf041() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    assertEqual(0, arr.at(0));
    assertEqual(127, arr.at(1));
    assertEqual(255, arr.at(2));
    }

    /**
     * Verify of(255, 254, 253) with decreasing three values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4200
     * @tc.name testUint8ArrayOf042
     * @tc.desc Verify of(255, 254, 253) with decreasing three values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf042() {
    Uint8Array arr = Uint8Array.of(255, 254, 253);
    assertEqual(255, arr.at(0));
    assertEqual(254, arr.at(1));
    assertEqual(253, arr.at(2));
    }

    /**
     * Verify of(1, 1, 1, 1, 1) with all same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4300
     * @tc.name testUint8ArrayOf043
     * @tc.desc Verify of(1, 1, 1, 1, 1) with all same values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf043() {
    Uint8Array arr = Uint8Array.of(1, 1, 1, 1, 1);
    assertEqual(1, arr.at(0));
    assertEqual(1, arr.at(1));
    assertEqual(1, arr.at(2));
    assertEqual(1, arr.at(3));
    assertEqual(1, arr.at(4));
    }

    /**
     * Verify of(255, 255, 255) with all maximum values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4400
     * @tc.name testUint8ArrayOf044
     * @tc.desc Verify of(255, 255, 255) with all maximum values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf044() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    assertEqual(255, arr.at(0));
    assertEqual(255, arr.at(1));
    assertEqual(255, arr.at(2));
    }

    /**
     * Verify of(0, 0, 0) with all minimum values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4500
     * @tc.name testUint8ArrayOf045
     * @tc.desc Verify of(0, 0, 0) with all minimum values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf045() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    assertEqual(0, arr.at(0));
    assertEqual(0, arr.at(1));
    assertEqual(0, arr.at(2));
    }

    /**
     * Verify of(128, 128, 128, 128) with all mid-value+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4600
     * @tc.name testUint8ArrayOf046
     * @tc.desc Verify of(128, 128, 128, 128) with all mid-value+1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf046() {
    Uint8Array arr = Uint8Array.of(128, 128, 128, 128);
    assertEqual(128, arr.at(0));
    assertEqual(128, arr.at(1));
    assertEqual(128, arr.at(2));
    assertEqual(128, arr.at(3));
    }

    /**
     * Verify of(1, 10, 100, 200) with increasing mixed values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4700
     * @tc.name testUint8ArrayOf047
     * @tc.desc Verify of(1, 10, 100, 200) with increasing mixed values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf047() {
    Uint8Array arr = Uint8Array.of(1, 10, 100, 200);
    assertEqual(1, arr.at(0));
    assertEqual(10, arr.at(1));
    assertEqual(100, arr.at(2));
    assertEqual(200, arr.at(3));
    }

    /**
     * Verify of() returns Uint8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4800
     * @tc.name testUint8ArrayOf048
     * @tc.desc Verify of() returns Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf048() {
    Uint8Array arr = Uint8Array.of();
    assertEqual(0, arr.length());
    }

    /**
     * Verify of(0) returns Uint8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_4900
     * @tc.name testUint8ArrayOf049
     * @tc.desc Verify of(0) returns Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf049() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(1, arr.length());
    }

    /**
     * Verify of(1, 2, 3) returns Uint8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5000
     * @tc.name testUint8ArrayOf050
     * @tc.desc Verify of(1, 2, 3) returns Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify of() empty array has length 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5100
     * @tc.name testUint8ArrayOf051
     * @tc.desc Verify of() empty array has length 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf051() {
    Uint8Array arr = Uint8Array.of();
    assertEqual(0, arr.length());
    }

    /**
     * Verify of(0) single element array has length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5200
     * @tc.name testUint8ArrayOf052
     * @tc.desc Verify of(0) single element array has length 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf052() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(1, arr.length());
    }

    /**
     * Verify of(0, 255) two element array has length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5300
     * @tc.name testUint8ArrayOf053
     * @tc.desc Verify of(0, 255) two element array has length 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf053() {
    Uint8Array arr = Uint8Array.of(0, 255);
    assertEqual(2, arr.length());
    }

    /**
     * Verify of(1, 2, 3) three element array has length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5400
     * @tc.name testUint8ArrayOf054
     * @tc.desc Verify of(1, 2, 3) three element array has length 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf054() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify of(1, 2, 3, 4, 5) five element array has length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5500
     * @tc.name testUint8ArrayOf055
     * @tc.desc Verify of(1, 2, 3, 4, 5) five element array has length 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify of(0, 1, 2) read first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5600
     * @tc.name testUint8ArrayOf056
     * @tc.desc Verify of(0, 1, 2) read first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf056() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of(200, 255) read tail maximum element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5700
     * @tc.name testUint8ArrayOf057
     * @tc.desc Verify of(200, 255) read tail maximum element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf057() {
    Uint8Array arr = Uint8Array.of(200, 255);
    assertEqual(255, arr.at(1));
    }

    /**
     * Verify of(128, 64) read first element 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5800
     * @tc.name testUint8ArrayOf058
     * @tc.desc Verify of(128, 64) read first element 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf058() {
    Uint8Array arr = Uint8Array.of(128, 64);
    assertEqual(128, arr.at(0));
    }

    /**
     * Verify of(0xFF, 0x00) read hexadecimal first element 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_5900
     * @tc.name testUint8ArrayOf059
     * @tc.desc Verify of(0xFF, 0x00) read hexadecimal first element 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf059() {
    Uint8Array arr = Uint8Array.of(0xFF, 0x00);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0b11111111, 0b00000000) read binary first element 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6000
     * @tc.name testUint8ArrayOf060
     * @tc.desc Verify of(0b11111111, 0b00000000) read binary first element 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf060() {
    Uint8Array arr = Uint8Array.of(0b11111111, 0b00000000);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0, 255) read two elements first
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6100
     * @tc.name testUint8ArrayOf061
     * @tc.desc Verify of(0, 255) read two elements first
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf061() {
    Uint8Array arr = Uint8Array.of(0, 255);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of(0, 255) read two elements second
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6200
     * @tc.name testUint8ArrayOf062
     * @tc.desc Verify of(0, 255) read two elements second
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf062() {
    Uint8Array arr = Uint8Array.of(0, 255);
    assertEqual(255, arr.at(1));
    }

    /**
     * Verify of(1, 2, 3) read middle element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6300
     * @tc.name testUint8ArrayOf063
     * @tc.desc Verify of(1, 2, 3) read middle element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf063() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(2, arr.at(1));
    }

    /**
     * Verify of(1, 2, 3) read last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6400
     * @tc.name testUint8ArrayOf064
     * @tc.desc Verify of(1, 2, 3) read last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf064() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.at(2));
    }

    /**
     * Verify of(254, 255) elements near maximum value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6500
     * @tc.name testUint8ArrayOf065
     * @tc.desc Verify of(254, 255) elements near maximum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf065() {
    Uint8Array arr = Uint8Array.of(254, 255);
    assertEqual(254, arr.at(0));
    assertEqual(255, arr.at(1));
    }

    /**
     * Verify of() returns array with BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6600
     * @tc.name testUint8ArrayOf066
     * @tc.desc Verify of() returns array with BYTES_PER_ELEMENT 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf066() {
    Uint8Array arr = Uint8Array.of();
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify of(255) returns array with BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6700
     * @tc.name testUint8ArrayOf067
     * @tc.desc Verify of(255) returns array with BYTES_PER_ELEMENT 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf067() {
    Uint8Array arr = Uint8Array.of(255);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify of(1, 2, 3) returns array with BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6800
     * @tc.name testUint8ArrayOf068
     * @tc.desc Verify of(1, 2, 3) returns array with BYTES_PER_ELEMENT 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf068() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify of() returns array with non-null buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_6900
     * @tc.name testUint8ArrayOf069
     * @tc.desc Verify of() returns array with non-null buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf069() {
    Uint8Array arr = Uint8Array.of();
    assertNotNull(arr.buffer());
    }

    /**
     * Verify of(0) returns array with buffer byteLength 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7000
     * @tc.name testUint8ArrayOf070
     * @tc.desc Verify of(0) returns array with buffer byteLength 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf070() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(1, arr.buffer().byteLength());
    }

    /**
     * Verify of(0, 255) returns array with buffer byteLength 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7100
     * @tc.name testUint8ArrayOf071
     * @tc.desc Verify of(0, 255) returns array with buffer byteLength 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf071() {
    Uint8Array arr = Uint8Array.of(0, 255);
    assertEqual(2, arr.buffer().byteLength());
    }

    /**
     * Verify of() empty array has buffer byteLength 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7200
     * @tc.name testUint8ArrayOf072
     * @tc.desc Verify of() empty array has buffer byteLength 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf072() {
    Uint8Array arr = Uint8Array.of();
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify of(127+128) addition reaches maximum boundary 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7300
     * @tc.name testUint8ArrayOf073
     * @tc.desc Verify of(127+128) addition reaches maximum boundary 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf073() {
    Uint8Array arr = Uint8Array.of(127 + 128);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(200+55) addition reaches maximum boundary 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7400
     * @tc.name testUint8ArrayOf074
     * @tc.desc Verify of(200+55) addition reaches maximum boundary 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf074() {
    Uint8Array arr = Uint8Array.of(200 + 55);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(300%256) modulo result 44 within byte range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7500
     * @tc.name testUint8ArrayOf075
     * @tc.desc Verify of(300%256) modulo result 44 within byte range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf075() {
    Uint8Array arr = Uint8Array.of(300 % 256);
    assertEqual(44, arr.at(0));
    }

    /**
     * Verify of(1+2+3+4+5) multi-step addition sum
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7600
     * @tc.name testUint8ArrayOf076
     * @tc.desc Verify of(1+2+3+4+5) multi-step addition sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf076() {
    Uint8Array arr = Uint8Array.of(1 + 2 + 3 + 4 + 5);
    assertEqual(15, arr.at(0));
    }

    /**
     * Verify of(5*5*5) multiplication result 125 within byte range
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7700
     * @tc.name testUint8ArrayOf077
     * @tc.desc Verify of(5*5*5) multiplication result 125 within byte range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf077() {
    Uint8Array arr = Uint8Array.of(5 * 5 * 5);
    assertEqual(125, arr.at(0));
    }

    /**
     * Verify of(255<<0) left shift 0 does not change value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7800
     * @tc.name testUint8ArrayOf078
     * @tc.desc Verify of(255<<0) left shift 0 does not change value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf078() {
    Uint8Array arr = Uint8Array.of(255 << 0);
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify of(0xFF>>1) right shift 1 gives 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_7900
     * @tc.name testUint8ArrayOf079
     * @tc.desc Verify of(0xFF>>1) right shift 1 gives 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf079() {
    Uint8Array arr = Uint8Array.of(0xFF >> 1);
    assertEqual(127, arr.at(0));
    }

    /**
     * Verify of(0x100 & 0xFF) bitwise AND truncation result 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_8000
     * @tc.name testUint8ArrayOf080
     * @tc.desc Verify of(0x100 & 0xFF) bitwise AND truncation result 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf080() {
    Uint8Array arr = Uint8Array.of(0x100 & 0xFF);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify of() empty parameters does not throw exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_8100
     * @tc.name testUint8ArrayOf081
     * @tc.desc Verify of() empty parameters does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf081() {
    boolean caught = false;
    try {
    Uint8Array arr = Uint8Array.of();
    } catch (RangeError e) {
    caught = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(false, caught);
    }

    /**
     * Verify of(0) single parameter does not throw exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_8200
     * @tc.name testUint8ArrayOf082
     * @tc.desc Verify of(0) single parameter does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf082() {
    Uint8Array arr = Uint8Array.of(0);
    assertNotNull(arr);
    }

    /**
     * Verify of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) multiple parameters does not throw exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF01_8300
     * @tc.name testUint8ArrayOf083
     * @tc.desc Verify of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) multiple parameters does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf083() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    assertNotNull(arr);
    }
}
