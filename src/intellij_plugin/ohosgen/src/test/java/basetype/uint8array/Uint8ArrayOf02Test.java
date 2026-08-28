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
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayOf02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayOf02Test extends BasTest {

    private static String joinUint8(Uint8Array arr, String separator) {
    String sep = separator != null ? separator : ",";
    String result = "";
    for (int i = 0; i < arr.length(); i++) {
    if (i > 0) {
    result += sep;
    }
    Integer val = arr.at(i);
    result += String.valueOf(val);
    }
    return result;
    }
    private static String joinUint8(Uint8Array arr) {
        return joinUint8(arr, null);
    }

    /**
     * Verify of() with 0 parameters creates empty Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0100
     * @tc.name testUint8ArrayOf001
     * @tc.desc Verify of() with 0 parameters creates empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf001() {
    Uint8Array arr = Uint8Array.of();
    assertEqual(0, arr.length());
    }

    /**
     * Verify of(42) with 1 parameter creates Uint8Array of length 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0200
     * @tc.name testUint8ArrayOf002
     * @tc.desc Verify of(42) with 1 parameter creates Uint8Array of length 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf002() {
    Uint8Array arr = Uint8Array.of(42);
    assertEqual(1, arr.length());
    assertEqual(42, arr.get(0));
    }

    /**
     * Verify of(1, 2) with 2 parameters creates Uint8Array of length 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0300
     * @tc.name testUint8ArrayOf003
     * @tc.desc Verify of(1, 2) with 2 parameters creates Uint8Array of length 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf003() {
    Uint8Array arr = Uint8Array.of(1, 2);
    assertEqual(2, arr.length());
    }

    /**
     * Verify of(10, 20, 30) with 3 parameters creates Uint8Array of length 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0400
     * @tc.name testUint8ArrayOf004
     * @tc.desc Verify of(10, 20, 30) with 3 parameters creates Uint8Array of length 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf004() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    assertEqual(3, arr.length());
    }

    /**
     * Verify of(1, 2, 3, 4, 5) with 5 parameters creates Uint8Array of length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0500
     * @tc.name testUint8ArrayOf005
     * @tc.desc Verify of(1, 2, 3, 4, 5) with 5 parameters creates Uint8Array of length 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf005() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify of(0, 1, ..., 9) with 10 parameters creates Uint8Array of length 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0600
     * @tc.name testUint8ArrayOf006
     * @tc.desc Verify of(0, 1, ..., 9) with 10 parameters creates Uint8Array of length 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf006() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    assertEqual(10, arr.length());
    }

    /**
     * Verify of(0, 1, ..., 49) with 50 parameters creates Uint8Array of length 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0700
     * @tc.name testUint8ArrayOf007
     * @tc.desc Verify of(0, 1, ..., 49) with 50 parameters creates Uint8Array of length 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf007() {
    Uint8Array arr = Uint8Array.of(
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49
    );
    assertEqual(50, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(49, arr.get(49));
    }

    /**
     * Verify of(0, 1, ..., 99) with 100 parameters creates Uint8Array of length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0800
     * @tc.name testUint8ArrayOf008
     * @tc.desc Verify of(0, 1, ..., 99) with 100 parameters creates Uint8Array of length 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf008() {
    Uint8Array arr = Uint8Array.of(
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
    );
    assertEqual(100, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(99));
    }

    /**
     * Verify of(0) with uint8 minimum value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_0900
     * @tc.name testUint8ArrayOf009
     * @tc.desc Verify of(0) with uint8 minimum value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf009() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(255) with uint8 maximum value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1000
     * @tc.name testUint8ArrayOf010
     * @tc.desc Verify of(255) with uint8 maximum value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf010() {
    Uint8Array arr = Uint8Array.of(255);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(256) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1100
     * @tc.name testUint8ArrayOf011
     * @tc.desc Verify of(256) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf011() {
    Uint8Array arr = Uint8Array.of(256);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(-1) wraps to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1200
     * @tc.name testUint8ArrayOf012
     * @tc.desc Verify of(-1) wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf012() {
    Uint8Array arr = Uint8Array.of(-1);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(127) with middle value 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1300
     * @tc.name testUint8ArrayOf013
     * @tc.desc Verify of(127) with middle value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf013() {
    Uint8Array arr = Uint8Array.of(127);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify of(128) with middle value+1 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1400
     * @tc.name testUint8ArrayOf014
     * @tc.desc Verify of(128) with middle value+1 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf014() {
    Uint8Array arr = Uint8Array.of(128);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify of(0x80) equals 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1500
     * @tc.name testUint8ArrayOf015
     * @tc.desc Verify of(0x80) equals 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf015() {
    Uint8Array arr = Uint8Array.of(0x80);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify of(0xFF) equals 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1600
     * @tc.name testUint8ArrayOf016
     * @tc.desc Verify of(0xFF) equals 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf016() {
    Uint8Array arr = Uint8Array.of(0xFF);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(0x100) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1700
     * @tc.name testUint8ArrayOf017
     * @tc.desc Verify of(0x100) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf017() {
    Uint8Array arr = Uint8Array.of(0x100);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(0o377) equals 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1800
     * @tc.name testUint8ArrayOf018
     * @tc.desc Verify of(0o377) equals 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf018() {
    Uint8Array arr = Uint8Array.of(0377);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(0b11111111) equals 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_1900
     * @tc.name testUint8ArrayOf019
     * @tc.desc Verify of(0b11111111) equals 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf019() {
    Uint8Array arr = Uint8Array.of(0b11111111);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(1.5) truncates to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2000
     * @tc.name testUint8ArrayOf020
     * @tc.desc Verify of(1.5) truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf020() {
    Uint8Array arr = Uint8Array.of(1.5);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify of(2.9) truncates to 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2100
     * @tc.name testUint8ArrayOf021
     * @tc.desc Verify of(2.9) truncates to 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf021() {
    Uint8Array arr = Uint8Array.of(2.9);
    assertEqual(2, arr.get(0));
    }

    /**
     * Verify of(-0) converts to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2200
     * @tc.name testUint8ArrayOf022
     * @tc.desc Verify of(-0) converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf022() {
    Uint8Array arr = Uint8Array.of(-0);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(NaN) converts to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2300
     * @tc.name testUint8ArrayOf023
     * @tc.desc Verify of(NaN) converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf023() {
    Uint8Array arr = Uint8Array.of(Double.NaN);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(Infinity) converts to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2400
     * @tc.name testUint8ArrayOf024
     * @tc.desc Verify of(Infinity) converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf024() {
    Uint8Array arr = Uint8Array.of(Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(-Infinity) converts to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2500
     * @tc.name testUint8ArrayOf025
     * @tc.desc Verify of(-Infinity) converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf025() {
    Uint8Array arr = Uint8Array.of(Double.NEGATIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(9007199254740991) truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2600
     * @tc.name testUint8ArrayOf026
     * @tc.desc Verify of(9007199254740991) truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf026() {
    Uint8Array arr = Uint8Array.of(9007199254740991L);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(-9007199254740991) wraps to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2700
     * @tc.name testUint8ArrayOf027
     * @tc.desc Verify of(-9007199254740991) wraps to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf027() {
    Uint8Array arr = Uint8Array.of(-9007199254740991L);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify of(0.1) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2800
     * @tc.name testUint8ArrayOf028
     * @tc.desc Verify of(0.1) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf028() {
    Uint8Array arr = Uint8Array.of(0.1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(-0.1) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_2900
     * @tc.name testUint8ArrayOf029
     * @tc.desc Verify of(-0.1) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf029() {
    Uint8Array arr = Uint8Array.of(-0.1);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(1e2) equals 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3000
     * @tc.name testUint8ArrayOf030
     * @tc.desc Verify of(1e2) equals 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf030() {
    Uint8Array arr = Uint8Array.of(1e2);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify of(0, 255) creates [0, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3100
     * @tc.name testUint8ArrayOf031
     * @tc.desc Verify of(0, 255) creates [0, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf031() {
    Uint8Array arr = Uint8Array.of(0, 255);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    }

    /**
     * Verify of(256, -1) truncates/wraps to [0, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3200
     * @tc.name testUint8ArrayOf032
     * @tc.desc Verify of(256, -1) truncates/wraps to [0, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf032() {
    Uint8Array arr = Uint8Array.of(256, -1);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    }

    /**
     * Verify of(127, 128) creates [127, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3300
     * @tc.name testUint8ArrayOf033
     * @tc.desc Verify of(127, 128) creates [127, 128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf033() {
    Uint8Array arr = Uint8Array.of(127, 128);
    assertEqual(127, arr.get(0));
    assertEqual(128, arr.get(1));
    }

    /**
     * Verify of(0xFF, 0x80) creates [255, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3400
     * @tc.name testUint8ArrayOf034
     * @tc.desc Verify of(0xFF, 0x80) creates [255, 128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf034() {
    Uint8Array arr = Uint8Array.of(0xFF, 0x80);
    assertEqual(255, arr.get(0));
    assertEqual(128, arr.get(1));
    }

    /**
     * Verify of(NaN, Infinity) both convert to [0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3500
     * @tc.name testUint8ArrayOf035
     * @tc.desc Verify of(NaN, Infinity) both convert to [0, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf035() {
    Uint8Array arr = Uint8Array.of(Double.NaN, Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify of(1.5, 2.9) truncates to [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3600
     * @tc.name testUint8ArrayOf036
     * @tc.desc Verify of(1.5, 2.9) truncates to [1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf036() {
    Uint8Array arr = Uint8Array.of(1.5, 2.9);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify of(-0, -2) wraps to [0, 254]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3700
     * @tc.name testUint8ArrayOf037
     * @tc.desc Verify of(-0, -2) wraps to [0, 254]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf037() {
    Uint8Array arr = Uint8Array.of(-0, -2);
    assertEqual(0, arr.get(0));
    assertEqual(254, arr.get(1));
    }

    /**
     * Verify of(257, -3) truncates/wraps to [1, 253]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3800
     * @tc.name testUint8ArrayOf038
     * @tc.desc Verify of(257, -3) truncates/wraps to [1, 253]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf038() {
    Uint8Array arr = Uint8Array.of(257, -3);
    assertEqual(1, arr.get(0));
    assertEqual(253, arr.get(1));
    }

    /**
     * Verify of(0xDE, 0xAD) creates [222, 173]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_3900
     * @tc.name testUint8ArrayOf039
     * @tc.desc Verify of(0xDE, 0xAD) creates [222, 173]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf039() {
    Uint8Array arr = Uint8Array.of(0xDE, 0xAD);
    assertEqual(222, arr.get(0));
    assertEqual(173, arr.get(1));
    }

    /**
     * Verify of(511, 512) truncates to [255, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4000
     * @tc.name testUint8ArrayOf040
     * @tc.desc Verify of(511, 512) truncates to [255, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf040() {
    Uint8Array arr = Uint8Array.of(511, 512);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify of(0x100, -1, 257) truncates/wraps to [0, 255, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4100
     * @tc.name testUint8ArrayOf041
     * @tc.desc Verify of(0x100, -1, 257) truncates/wraps to [0, 255, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf041() {
    Uint8Array arr = Uint8Array.of(0x100, -1, 257);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    /**
     * Verify of(-0.5, 1.5, 2.5) truncates to [0, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4200
     * @tc.name testUint8ArrayOf042
     * @tc.desc Verify of(-0.5, 1.5, 2.5) truncates to [0, 1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf042() {
    Uint8Array arr = Uint8Array.of(-0.5, 1.5, 2.5);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    }

    /**
     * Verify of(256, 257, 258) truncates to [0, 1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4300
     * @tc.name testUint8ArrayOf043
     * @tc.desc Verify of(256, 257, 258) truncates to [0, 1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf043() {
    Uint8Array arr = Uint8Array.of(256, 257, 258);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    }

    /**
     * Verify of(-1, -2, -3) wraps to [255, 254, 253]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4400
     * @tc.name testUint8ArrayOf044
     * @tc.desc Verify of(-1, -2, -3) wraps to [255, 254, 253]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf044() {
    Uint8Array arr = Uint8Array.of(-1, -2, -3);
    assertEqual(255, arr.get(0));
    assertEqual(254, arr.get(1));
    assertEqual(253, arr.get(2));
    }

    /**
     * Verify of(0xFF, 0x100, 0x101) truncates to [255, 0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4500
     * @tc.name testUint8ArrayOf045
     * @tc.desc Verify of(0xFF, 0x100, 0x101) truncates to [255, 0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf045() {
    Uint8Array arr = Uint8Array.of(0xFF, 0x100, 0x101);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    /**
     * Verify of(511, 512, 513) truncates to [255, 0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4600
     * @tc.name testUint8ArrayOf046
     * @tc.desc Verify of(511, 512, 513) truncates to [255, 0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf046() {
    Uint8Array arr = Uint8Array.of(511, 512, 513);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    /**
     * Verify of(-255, -256, -257) wraps to [1, 0, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4700
     * @tc.name testUint8ArrayOf047
     * @tc.desc Verify of(-255, -256, -257) wraps to [1, 0, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf047() {
    Uint8Array arr = Uint8Array.of(-255, -256, -257);
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify of(0xABCD) truncates to 0xCD=205
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4800
     * @tc.name testUint8ArrayOf048
     * @tc.desc Verify of(0xABCD) truncates to 0xCD=205
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf048() {
    Uint8Array arr = Uint8Array.of(0xABCD);
    assertEqual(205, arr.get(0));
    }

    /**
     * Verify of(0xDEAD) truncates to 0xAD=173
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_4900
     * @tc.name testUint8ArrayOf049
     * @tc.desc Verify of(0xDEAD) truncates to 0xAD=173
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf049() {
    Uint8Array arr = Uint8Array.of(0xDEAD);
    assertEqual(173, arr.get(0));
    }

    /**
     * Verify of(0xBEEF) truncates to 0xEF=239
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5000
     * @tc.name testUint8ArrayOf050
     * @tc.desc Verify of(0xBEEF) truncates to 0xEF=239
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf050() {
    Uint8Array arr = Uint8Array.of(0xBEEF);
    assertEqual(239, arr.get(0));
    }

    /**
     * Verify of(0xCAFE) truncates to 0xFE=254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5100
     * @tc.name testUint8ArrayOf051
     * @tc.desc Verify of(0xCAFE) truncates to 0xFE=254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf051() {
    Uint8Array arr = Uint8Array.of(0xCAFE);
    assertEqual(254, arr.get(0));
    }

    /**
     * Verify of(65535) truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5200
     * @tc.name testUint8ArrayOf052
     * @tc.desc Verify of(65535) truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf052() {
    Uint8Array arr = Uint8Array.of(65535);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(65536) truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5300
     * @tc.name testUint8ArrayOf053
     * @tc.desc Verify of(65536) truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf053() {
    Uint8Array arr = Uint8Array.of(65536);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(-65535) wraps to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5400
     * @tc.name testUint8ArrayOf054
     * @tc.desc Verify of(-65535) wraps to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf054() {
    Uint8Array arr = Uint8Array.of(-65535);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify of(-65536) wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5500
     * @tc.name testUint8ArrayOf055
     * @tc.desc Verify of(-65536) wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf055() {
    Uint8Array arr = Uint8Array.of(-65536);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(1.1, 2.2, 3.9) truncates to [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5600
     * @tc.name testUint8ArrayOf056
     * @tc.desc Verify of(1.1, 2.2, 3.9) truncates to [1, 2, 3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf056() {
    Uint8Array arr = Uint8Array.of(1.1, 2.2, 3.9);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify of(-1.1, -2.2, -3.9) wraps to [255, 254, 253]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5700
     * @tc.name testUint8ArrayOf057
     * @tc.desc Verify of(-1.1, -2.2, -3.9) wraps to [255, 254, 253]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf057() {
    Uint8Array arr = Uint8Array.of(-1.1, -2.2, -3.9);
    assertEqual(255, arr.get(0));
    assertEqual(254, arr.get(1));
    assertEqual(253, arr.get(2));
    }

    /**
     * Verify of(NaN, NaN, NaN) all convert to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5800
     * @tc.name testUint8ArrayOf058
     * @tc.desc Verify of(NaN, NaN, NaN) all convert to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf058() {
    Uint8Array arr = Uint8Array.of(Double.NaN, Double.NaN, Double.NaN);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify of(Infinity, -Infinity, NaN) all convert to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_5900
     * @tc.name testUint8ArrayOf059
     * @tc.desc Verify of(Infinity, -Infinity, NaN) all convert to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf059() {
    Uint8Array arr = Uint8Array.of(Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY, Double.NaN);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify of(0.9999, -0.9999, 0.0001) all truncate to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6000
     * @tc.name testUint8ArrayOf060
     * @tc.desc Verify of(0.9999, -0.9999, 0.0001) all truncate to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf060() {
    Uint8Array arr = Uint8Array.of(0.9999, -0.9999, 0.0001);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify of(1e10, -1e10, 1e-10) truncates to [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6100
     * @tc.name testUint8ArrayOf061
     * @tc.desc Verify of(1e10, -1e10, 1e-10) truncates to [0, 0, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf061() {
    Uint8Array arr = Uint8Array.of(1e10, -1e10, 1e-10);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify of(-1.0, 0.0, 1.0) wraps/truncates to [255, 0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6200
     * @tc.name testUint8ArrayOf062
     * @tc.desc Verify of(-1.0, 0.0, 1.0) wraps/truncates to [255, 0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf062() {
    Uint8Array arr = Uint8Array.of(-1.0, 0.0, 1.0);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    /**
     * Verify of(3.14159, 2.71828, 1.41421) truncates to [3, 2, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6300
     * @tc.name testUint8ArrayOf063
     * @tc.desc Verify of(3.14159, 2.71828, 1.41421) truncates to [3, 2, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf063() {
    Uint8Array arr = Uint8Array.of(3.14159, 2.71828, 1.41421);
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    /**
     * Verify of(0xFF, 0x7F, 0x00) creates [255, 127, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6400
     * @tc.name testUint8ArrayOf064
     * @tc.desc Verify of(0xFF, 0x7F, 0x00) creates [255, 127, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf064() {
    Uint8Array arr = Uint8Array.of(0xFF, 0x7F, 0x00);
    assertEqual(255, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify of(0b00000000, 0b11111111, 0b10101010) creates [0, 255, 170]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6500
     * @tc.name testUint8ArrayOf065
     * @tc.desc Verify of(0b00000000, 0b11111111, 0b10101010) creates [0, 255, 170]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf065() {
    Uint8Array arr = Uint8Array.of(0b00000000, 0b11111111, 0b10101010);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(170, arr.get(2));
    }

    /**
     * Verify of(0o000, 0o377, 0o200) creates [0, 255, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6600
     * @tc.name testUint8ArrayOf066
     * @tc.desc Verify of(0o000, 0o377, 0o200) creates [0, 255, 128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf066() {
    Uint8Array arr = Uint8Array.of(0000, 0377, 0200);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(128, arr.get(2));
    }

    /**
     * Verify of(0xFF+0x01) arithmetic expression truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6700
     * @tc.name testUint8ArrayOf067
     * @tc.desc Verify of(0xFF+0x01) arithmetic expression truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf067() {
    Uint8Array arr = Uint8Array.of(0xFF + 0x01);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify of(0x80-0x81) wraps to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6800
     * @tc.name testUint8ArrayOf068
     * @tc.desc Verify of(0x80-0x81) wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf068() {
    Uint8Array arr = Uint8Array.of(0x80 - 0x81);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(0xFF+0x100) arithmetic expression truncates to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_6900
     * @tc.name testUint8ArrayOf069
     * @tc.desc Verify of(0xFF+0x100) arithmetic expression truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf069() {
    Uint8Array arr = Uint8Array.of(0xFF + 0x100);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify of(0xFF, 0b11111111, 0o377) all equal 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7000
     * @tc.name testUint8ArrayOf070
     * @tc.desc Verify of(0xFF, 0b11111111, 0o377) all equal 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf070() {
    Uint8Array arr = Uint8Array.of(0xFF, 0b11111111, 0377);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify of(-0, -0, -0) all convert to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7100
     * @tc.name testUint8ArrayOf071
     * @tc.desc Verify of(-0, -0, -0) all convert to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf071() {
    Uint8Array arr = Uint8Array.of(-0, -0, -0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify of(-128, -129, -130) wraps to [128, 127, 126]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7200
     * @tc.name testUint8ArrayOf072
     * @tc.desc Verify of(-128, -129, -130) wraps to [128, 127, 126]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf072() {
    Uint8Array arr = Uint8Array.of(-128, -129, -130);
    assertEqual(128, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(126, arr.get(2));
    }

    /**
     * Verify of(0, -255, -127) wraps to [0, 1, 129]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7300
     * @tc.name testUint8ArrayOf073
     * @tc.desc Verify of(0, -255, -127) wraps to [0, 1, 129]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf073() {
    Uint8Array arr = Uint8Array.of(0, -255, -127);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(129, arr.get(2));
    }

    /**
     * Verify of returns Uint8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7400
     * @tc.name testUint8ArrayOf074
     * @tc.desc Verify of returns Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify of(10, 20, 30, 40, 50) returns array of length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7500
     * @tc.name testUint8ArrayOf075
     * @tc.desc Verify of(10, 20, 30, 40, 50) returns array of length 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf075() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    assertEqual(5, arr.length());
    }

    /**
     * Verify of returns Uint8Array with BYTES_PER_ELEMENT 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7600
     * @tc.name testUint8ArrayOf076
     * @tc.desc Verify of returns Uint8Array with BYTES_PER_ELEMENT 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf076() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify of returns Uint8Array with buffer as ArrayBuffer instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7700
     * @tc.name testUint8ArrayOf077
     * @tc.desc Verify of returns Uint8Array with buffer as ArrayBuffer instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf077() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }

    /**
     * Verify of returns Uint8Array with byteOffset 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7800
     * @tc.name testUint8ArrayOf078
     * @tc.desc Verify of returns Uint8Array with byteOffset 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf078() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify of returns Uint8Array readable by index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_7900
     * @tc.name testUint8ArrayOf079
     * @tc.desc Verify of returns Uint8Array readable by index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf079() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify of(1, 2, 3) join result is "1,2,3"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8000
     * @tc.name testUint8ArrayOf080
     * @tc.desc Verify of(1, 2, 3) join result is "1,2,3"
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf080() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual("1,2,3", joinUint8(arr, ","));
    }

    /**
     * Verify of(255, 0, 128) toString result is "255,0,128"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8100
     * @tc.name testUint8ArrayOf081
     * @tc.desc Verify of(255, 0, 128) toString result is "255,0,128"
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf081() {
    Uint8Array arr = Uint8Array.of(255, 0, 128);
    assertEqual("255,0,128", joinUint8(arr, ","));
    }

    /**
     * Verify of(256, -1) join result is "0,255"
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8200
     * @tc.name testUint8ArrayOf082
     * @tc.desc Verify of(256, -1) join result is "0,255"
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf082() {
    Uint8Array arr = Uint8Array.of(256, -1);
    assertEqual("0,255", joinUint8(arr));
    }

    /**
     * Verify for-of iteration of(10, 20, 30) matches expected
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8300
     * @tc.name testUint8ArrayOf083
     * @tc.desc Verify for-of iteration of(10, 20, 30) matches expected
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf083() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double[] expected = new double[] {10, 20, 30};
    int idx = 0;
    for (Integer val : arr.values()) {
    assertEqual(expected[idx], val.intValue());
    idx++;
    }
    assertEqual(3, idx);
    }

    /**
     * Verify of(256, 257, -1) indexOf can find values correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8400
     * @tc.name testUint8ArrayOf084
     * @tc.desc Verify of(256, 257, -1) indexOf can find values correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf084() {
    Uint8Array arr = Uint8Array.of(256, 257, -1);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify of with 100 all-255 parameters creates Uint8Array of length 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8500
     * @tc.name testUint8ArrayOf085
     * @tc.desc Verify of with 100 all-255 parameters creates Uint8Array of length 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf085() {
    Uint8Array arr = Uint8Array.of(
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
    );
    assertEqual(100, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(99));
    }

    /**
     * Verify of alternating 0, 255 with 100 parameters creates alternating pattern
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8600
     * @tc.name testUint8ArrayOf086
     * @tc.desc Verify of alternating 0, 255 with 100 parameters creates alternating pattern
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf086() {
    Uint8Array arr = Uint8Array.of(
        0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0,
        255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255,
        0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0,
        255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255
    );
    assertEqual(100, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(98));
    assertEqual(255, arr.get(99));
    }

    /**
     * Verify of alternating 256, -1 with 100 parameters truncates/wraps to [0, 255, ...]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8700
     * @tc.name testUint8ArrayOf087
     * @tc.desc Verify of alternating 256, -1 with 100 parameters truncates/wraps to [0, 255, ...]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf087() {
    Uint8Array arr = Uint8Array.of(
        256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1,
        256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1,
        256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1,
        256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1,
        256, -1, 256, -1, 256, -1, 256, -1, 256, -1, 256, -1
    );
    assertEqual(100, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(98));
    assertEqual(255, arr.get(99));
    }

    /**
     * Verify of silently truncates illegal values, no exception thrown
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_OF02_8800
     * @tc.name testUint8ArrayOf088
     * @tc.desc Verify of silently truncates illegal values, no exception thrown
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayOf088() {
    Uint8Array arr = Uint8Array.of(256, -1, 0.5, Double.NaN, Double.POSITIVE_INFINITY);
    assertEqual(5, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));
    assertEqual(0, arr.get(4));
    }
}
