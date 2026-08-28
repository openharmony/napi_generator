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

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayIndexOf01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayIndexOf01Test extends BasTest {
    /**
     * Verify indexOf with only searchElement parameter, element exists in array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0100
     * @tc.name testUint8ArrayIndexOf001
     * @tc.desc Verify indexOf with only searchElement parameter, element exists in array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf001() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with only searchElement parameter, element not found returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0200
     * @tc.name testUint8ArrayIndexOf002
     * @tc.desc Verify indexOf with only searchElement parameter, element not found returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf002() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(99);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex parameter, element found within valid range
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0300
     * @tc.name testUint8ArrayIndexOf003
     * @tc.desc Verify indexOf with fromIndex parameter, element found within valid range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf003() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(254, 3);
    assertEqual(4, r);
    }

    /**
     * Verify indexOf with fromIndex exceeding array length, search range empty returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0400
     * @tc.name testUint8ArrayIndexOf004
     * @tc.desc Verify indexOf with fromIndex exceeding array length, search range empty returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf004() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128, 10);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=0 (uint8_MIN), array contains 0, returns index 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0500
     * @tc.name testUint8ArrayIndexOf005
     * @tc.desc Verify indexOf with searchElement=0 (uint8_MIN), array contains 0, returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf005() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with searchElement=1, array contains 1, returns index 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0600
     * @tc.name testUint8ArrayIndexOf006
     * @tc.desc Verify indexOf with searchElement=1, array contains 1, returns index 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf006() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(1);
    assertEqual(1, r);
    }

    /**
     * Verify indexOf with searchElement=127, array contains 127, returns index 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0700
     * @tc.name testUint8ArrayIndexOf007
     * @tc.desc Verify indexOf with searchElement=127, array contains 127, returns index 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf007() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(127);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with searchElement=254, array contains 254, returns index 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0800
     * @tc.name testUint8ArrayIndexOf008
     * @tc.desc Verify indexOf with searchElement=254, array contains 254, returns index 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf008() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(254);
    assertEqual(4, r);
    }

    /**
     * Verify indexOf with searchElement=255 (uint8_MAX), array contains 255, returns index 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_0900
     * @tc.name testUint8ArrayIndexOf009
     * @tc.desc Verify indexOf with searchElement=255 (uint8_MAX), array contains 255, returns index 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf009() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(255);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with searchElement=0, array does not contain 0, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1000
     * @tc.name testUint8ArrayIndexOf010
     * @tc.desc Verify indexOf with searchElement=0, array does not contain 0, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf010() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.indexOf(0);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=255, array does not contain 255, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1100
     * @tc.name testUint8ArrayIndexOf011
     * @tc.desc Verify indexOf with searchElement=255, array does not contain 255, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf011() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.indexOf(255);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=127, array does not contain 127, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1200
     * @tc.name testUint8ArrayIndexOf012
     * @tc.desc Verify indexOf with searchElement=127, array does not contain 127, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf012() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    int r = arr.indexOf(127);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=128, array does not contain 128, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1300
     * @tc.name testUint8ArrayIndexOf013
     * @tc.desc Verify indexOf with searchElement=128, array does not contain 128, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf013() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    int r = arr.indexOf(128);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=256, 256 is not truncated to 0, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1400
     * @tc.name testUint8ArrayIndexOf014
     * @tc.desc Verify indexOf with searchElement=256, 256 is not truncated to 0, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf014() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    int r = arr.indexOf(256);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=-1, -1 is not wrapped to 255, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1500
     * @tc.name testUint8ArrayIndexOf015
     * @tc.desc Verify indexOf with searchElement=-1, -1 is not wrapped to 255, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf015() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    int r = arr.indexOf(-1);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=2.56e2 (scientific notation equals 256), 256
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1600
     * @tc.name testUint8ArrayIndexOf016
          * @tc.desc Verify indexOf with searchElement=2.56e2 (scientific notation equals 256), 256
     * not equivalent to any stored value, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf016() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    int r = arr.indexOf(2.56e2);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=0xFF (hexadecimal equals 255), array contains 255, returns index 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1700
     * @tc.name testUint8ArrayIndexOf017
     * @tc.desc Verify indexOf with searchElement=0xFF (hexadecimal equals 255), array contains 255, returns index 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf017() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0xFF);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with searchElement=0x80 (hexadecimal equals 128), array contains 128, returns index 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1800
     * @tc.name testUint8ArrayIndexOf018
     * @tc.desc Verify indexOf with searchElement=0x80 (hexadecimal equals 128), array contains 128, returns index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf018() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0x80);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with searchElement=0x7F (hexadecimal equals 127), array contains 127, returns index 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_1900
     * @tc.name testUint8ArrayIndexOf019
     * @tc.desc Verify indexOf with searchElement=0x7F (hexadecimal equals 127), array contains 127, returns index 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf019() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0x7F);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with searchElement=0x0 (hexadecimal equals 0), array contains 0, returns index 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2000
     * @tc.name testUint8ArrayIndexOf020
     * @tc.desc Verify indexOf with searchElement=0x0 (hexadecimal equals 0), array contains 0, returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf020() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0x0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with searchElement=0x100, 0x100 is not truncated to 0, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2100
     * @tc.name testUint8ArrayIndexOf021
     * @tc.desc Verify indexOf with searchElement=0x100, 0x100 is not truncated to 0, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf021() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(0x100);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=0b11111111 (binary equals 255), array contains 255, returns index 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2200
     * @tc.name testUint8ArrayIndexOf022
     * @tc.desc Verify indexOf with searchElement=0b11111111 (binary equals 255), array contains 255, returns index 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf022() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0b11111111);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with searchElement=0b10000000 (binary equals 128), array contains 128, returns index 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2300
     * @tc.name testUint8ArrayIndexOf023
     * @tc.desc Verify indexOf with searchElement=0b10000000 (binary equals 128), array contains 128, returns index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf023() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0b10000000);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with searchElement=0b0 (binary equals 0), array contains 0, returns index 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2400
     * @tc.name testUint8ArrayIndexOf024
     * @tc.desc Verify indexOf with searchElement=0b0 (binary equals 0), array contains 0, returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf024() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0b0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with searchElement=NaN, NaN not equal to any value, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2500
     * @tc.name testUint8ArrayIndexOf025
     * @tc.desc Verify indexOf with searchElement=NaN, NaN not equal to any value, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf025() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(Double.NaN);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=Infinity, array does not contain Infinity, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2600
     * @tc.name testUint8ArrayIndexOf026
     * @tc.desc Verify indexOf with searchElement=Infinity, array does not contain Infinity, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf026() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(Double.POSITIVE_INFINITY);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=-Infinity, array does not contain -Infinity, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2700
     * @tc.name testUint8ArrayIndexOf027
     * @tc.desc Verify indexOf with searchElement=-Infinity, array does not contain -Infinity, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf027() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(Double.NEGATIVE_INFINITY);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=127.0 (integer float), float integer comparison equal returns 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2800
     * @tc.name testUint8ArrayIndexOf028
     * @tc.desc Verify indexOf with searchElement=127.0 (integer float), float integer comparison equal returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf028() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(127.0);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with searchElement=128.0 (integer float), float integer comparison equal returns 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_2900
     * @tc.name testUint8ArrayIndexOf029
     * @tc.desc Verify indexOf with searchElement=128.0 (integer float), float integer comparison equal returns 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf029() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128.0);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with searchElement=3.14 (non-integer float), array does not contain 3.14, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3000
     * @tc.name testUint8ArrayIndexOf030
     * @tc.desc Verify indexOf with searchElement=3.14 (non-integer float), array does not contain 3.14, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf030() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(3.14);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=2.999 (close to integer but not equal), array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3100
     * @tc.name testUint8ArrayIndexOf031
          * @tc.desc Verify indexOf with searchElement=2.999 (close to integer but not equal), array
     * does not contain 2.999, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf031() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3});
    int r = arr.indexOf(2.999);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=2.55e2 (scientific notation equals 255), arra
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3200
     * @tc.name testUint8ArrayIndexOf032
          * @tc.desc Verify indexOf with searchElement=2.55e2 (scientific notation equals 255), arra
     * y contains 255, returns index 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf032() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(2.55e2);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with searchElement=2147483647 (int32 max), array does not contain this value, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3300
     * @tc.name testUint8ArrayIndexOf033
     * @tc.desc Verify indexOf with searchElement=2147483647 (int32 max), array does not contain this value, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf033() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(2147483647);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=-2147483648, not truncated to 0, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3400
     * @tc.name testUint8ArrayIndexOf034
     * @tc.desc Verify indexOf with searchElement=-2147483648, not truncated to 0, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf034() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(Integer.MIN_VALUE);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=127, array contains multiple 127, returns first occurrence index 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3500
     * @tc.name testUint8ArrayIndexOf035
     * @tc.desc Verify indexOf with searchElement=127, array contains multiple 127, returns first occurrence index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf035() {
    Uint8Array arr = new Uint8Array(new int[] {127, 127, 127});
    int r = arr.indexOf(127);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with searchElement=0, array starts with repeated 0, returns first occurrence index 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3600
     * @tc.name testUint8ArrayIndexOf036
     * @tc.desc Verify indexOf with searchElement=0, array starts with repeated 0, returns first occurrence index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf036() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 1});
    int r = arr.indexOf(0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with searchElement=255, array ends with repeated 255, returns first occurrence index 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3700
     * @tc.name testUint8ArrayIndexOf037
     * @tc.desc Verify indexOf with searchElement=255, array ends with repeated 255, returns first occurrence index 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf037() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 255, 255});
    int r = arr.indexOf(255);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with searchElement=42, single element array contains 42, returns 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3800
     * @tc.name testUint8ArrayIndexOf038
     * @tc.desc Verify indexOf with searchElement=42, single element array contains 42, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf038() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int r = arr.indexOf(42);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with searchElement=99, single element array does not contain 99, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_3900
     * @tc.name testUint8ArrayIndexOf039
     * @tc.desc Verify indexOf with searchElement=99, single element array does not contain 99, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf039() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int r = arr.indexOf(99);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=0, array all 255 (does not contain 0), returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4000
     * @tc.name testUint8ArrayIndexOf040
     * @tc.desc Verify indexOf with searchElement=0, array all 255 (does not contain 0), returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf040() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    int r = arr.indexOf(0);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=255, array all 0 (does not contain 255), returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4100
     * @tc.name testUint8ArrayIndexOf041
     * @tc.desc Verify indexOf with searchElement=255, array all 0 (does not contain 255), returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf041() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    int r = arr.indexOf(255);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with searchElement=1e2 (scientific notation equals 100), array c
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4200
     * @tc.name testUint8ArrayIndexOf042
          * @tc.desc Verify indexOf with searchElement=1e2 (scientific notation equals 100), array c
     * ontains 100, returns index 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf042() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int r = arr.indexOf(1e2);
    assertEqual(1, r);
    }

    /**
     * Verify indexOf with searchElement=2e2 (scientific notation equals 200), array c
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4300
     * @tc.name testUint8ArrayIndexOf043
          * @tc.desc Verify indexOf with searchElement=2e2 (scientific notation equals 200), array c
     * ontains 200, returns index 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf043() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int r = arr.indexOf(2e2);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with fromIndex=0, search from beginning, element exists returns index 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4400
     * @tc.name testUint8ArrayIndexOf044
     * @tc.desc Verify indexOf with fromIndex=0, search from beginning, element exists returns index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf044() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128, 0);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with fromIndex=0, first element matches, returns 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4500
     * @tc.name testUint8ArrayIndexOf045
     * @tc.desc Verify indexOf with fromIndex=0, first element matches, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf045() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(0, 0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with fromIndex omitted equals fromIndex=0, both search from beginning
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4600
     * @tc.name testUint8ArrayIndexOf046
     * @tc.desc Verify indexOf with fromIndex omitted equals fromIndex=0, both search from beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf046() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r1 = arr.indexOf(0);
    int r2 = arr.indexOf(0, 0);
    assertEqual(r2, r1);
    }

    /**
     * Verify indexOf with fromIndex=1, target element at index 0 skipped, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4700
     * @tc.name testUint8ArrayIndexOf047
     * @tc.desc Verify indexOf with fromIndex=1, target element at index 0 skipped, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf047() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(0, 1);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=1, target element at index 1 exact match, returns 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4800
     * @tc.name testUint8ArrayIndexOf048
     * @tc.desc Verify indexOf with fromIndex=1, target element at index 1 exact match, returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf048() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(1, 1);
    assertEqual(1, r);
    }

    /**
     * Verify indexOf with fromIndex=1, target element at index 2 (skipping index 0 and 1), returns 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_4900
     * @tc.name testUint8ArrayIndexOf049
     * @tc.desc Verify indexOf with fromIndex=1, target element at index 2 (skipping index 0 and 1), returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf049() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(2, 1);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with fromIndex=length (=6), search range empty, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5000
     * @tc.name testUint8ArrayIndexOf050
     * @tc.desc Verify indexOf with fromIndex=length (=6), search range empty, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf050() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128, 6);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=length-1 (=5), search range only last element, match returns 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5100
     * @tc.name testUint8ArrayIndexOf051
     * @tc.desc Verify indexOf with fromIndex=length-1 (=5), search range only last element, match returns 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf051() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(255, 5);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with fromIndex=length+1 (=7), exceeds array length, search range empty, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5200
     * @tc.name testUint8ArrayIndexOf052
     * @tc.desc Verify indexOf with fromIndex=length+1 (=7), exceeds array length, search range empty, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf052() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128, 7);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=-1 (equivalent to index 5), target at last element, returns 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5300
     * @tc.name testUint8ArrayIndexOf053
     * @tc.desc Verify indexOf with fromIndex=-1 (equivalent to index 5), target at last element, returns 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf053() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(255, -1);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with fromIndex=-1 (equivalent to index 5), target not at last element, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5400
     * @tc.name testUint8ArrayIndexOf054
     * @tc.desc Verify indexOf with fromIndex=-1 (equivalent to index 5), target not at last element, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf054() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128, -1);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=-2 (equivalent to index 4), target at index 5 skipped, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5500
     * @tc.name testUint8ArrayIndexOf055
     * @tc.desc Verify indexOf with fromIndex=-2 (equivalent to index 4), target at index 5 skipped, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf055() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(255, -2);
    assertEqual(5, r);
    }

    /**
     * Verify indexOf with fromIndex=-2 (equivalent to index 4), target at index 4 in range, returns 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5600
     * @tc.name testUint8ArrayIndexOf056
     * @tc.desc Verify indexOf with fromIndex=-2 (equivalent to index 4), target at index 4 in range, returns 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf056() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(254, -2);
    assertEqual(4, r);
    }

    /**
     * Verify indexOf with fromIndex=-3 (equivalent to index 3), target at index 4 in range, returns 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5700
     * @tc.name testUint8ArrayIndexOf057
     * @tc.desc Verify indexOf with fromIndex=-3 (equivalent to index 3), target at index 4 in range, returns 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf057() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(254, -3);
    assertEqual(4, r);
    }

    /**
     * Verify indexOf with fromIndex=-6 (equals -length, clamp to 0), equivalent to wh
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5800
     * @tc.name testUint8ArrayIndexOf058
          * @tc.desc Verify indexOf with fromIndex=-6 (equals -length, clamp to 0), equivalent to wh
     * ole array search, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf058() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0, -6);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with fromIndex=-7 (less than -length, clamp to 0), equivalent to
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_5900
     * @tc.name testUint8ArrayIndexOf059
          * @tc.desc Verify indexOf with fromIndex=-7 (less than -length, clamp to 0), equivalent to
     * whole array search, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf059() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0, -7);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with fromIndex=-100 (far less than -length, clamp to 0), equival
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6000
     * @tc.name testUint8ArrayIndexOf060
          * @tc.desc Verify indexOf with fromIndex=-100 (far less than -length, clamp to 0), equival
     * ent to whole array search, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf060() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(0, -100);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with fromIndex=100 (far exceeds length), search range empty, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6100
     * @tc.name testUint8ArrayIndexOf061
     * @tc.desc Verify indexOf with fromIndex=100 (far exceeds length), search range empty, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf061() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 127, 128, 254, 255});
    int r = arr.indexOf(128, 100);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=0, empty array, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6200
     * @tc.name testUint8ArrayIndexOf062
     * @tc.desc Verify indexOf with fromIndex=0, empty array, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf062() {
    Uint8Array arr = new Uint8Array();
    int r = arr.indexOf(0, 0);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=0, single element array contains element, returns 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6300
     * @tc.name testUint8ArrayIndexOf063
     * @tc.desc Verify indexOf with fromIndex=0, single element array contains element, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf063() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    int r = arr.indexOf(128, 0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with fromIndex=1, single element array, element at index 0 skipped, returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6400
     * @tc.name testUint8ArrayIndexOf064
     * @tc.desc Verify indexOf with fromIndex=1, single element array, element at index 0 skipped, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf064() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    int r = arr.indexOf(128, 1);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=0, array [0,1,2], search 1 returns 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6500
     * @tc.name testUint8ArrayIndexOf065
     * @tc.desc Verify indexOf with fromIndex=0, array [0,1,2], search 1 returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf065() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(1, 0);
    assertEqual(1, r);
    }

    /**
     * Verify indexOf with fromIndex=0, array [0,1,2], search 2 returns 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6600
     * @tc.name testUint8ArrayIndexOf066
     * @tc.desc Verify indexOf with fromIndex=0, array [0,1,2], search 2 returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf066() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(2, 0);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with fromIndex=2, array [0,1,2], search 1 (before index), returns -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6700
     * @tc.name testUint8ArrayIndexOf067
     * @tc.desc Verify indexOf with fromIndex=2, array [0,1,2], search 1 (before index), returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf067() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.indexOf(1, 2);
    assertEqual(-1, r);
    }

    /**
     * Verify indexOf with fromIndex=-4, array [0,255,0,255], search 255 returns index 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6800
     * @tc.name testUint8ArrayIndexOf068
     * @tc.desc Verify indexOf with fromIndex=-4, array [0,255,0,255], search 255 returns index 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf068() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 0, 255});
    int r = arr.indexOf(255, -4);
    assertEqual(1, r);
    }

    /**
     * Verify indexOf with fromIndex=-2, array [0,255,0,255], search 255 returns index 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_6900
     * @tc.name testUint8ArrayIndexOf069
     * @tc.desc Verify indexOf with fromIndex=-2, array [0,255,0,255], search 255 returns index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf069() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 0, 255});
    int r = arr.indexOf(255, -2);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with fromIndex=-1, array [0,255,0,255], search 255 returns index 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_7000
     * @tc.name testUint8ArrayIndexOf070
     * @tc.desc Verify indexOf with fromIndex=-1, array [0,255,0,255], search 255 returns index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf070() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 0, 255});
    int r = arr.indexOf(255, -1);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with fromIndex=3, array [0,0,0,255,0,255], search 0xFF returns index 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_7100
     * @tc.name testUint8ArrayIndexOf071
     * @tc.desc Verify indexOf with fromIndex=3, array [0,0,0,255,0,255], search 0xFF returns index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf071() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 255, 0, 255});
    int r = arr.indexOf(0xFF, 3);
    assertEqual(3, r);
    }

    /**
     * Verify indexOf with fromIndex=-2, array [0,0,128,128], from index 2, returns 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_7200
     * @tc.name testUint8ArrayIndexOf072
     * @tc.desc Verify indexOf with fromIndex=-2, array [0,0,128,128], from index 2, returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf072() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 128, 128});
    int r = arr.indexOf(0x80, -2);
    assertEqual(2, r);
    }

    /**
     * Verify indexOf with fromIndex=0, array [255,0,255], search 0b11111111 from index 0, returns 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_7300
     * @tc.name testUint8ArrayIndexOf073
     * @tc.desc Verify indexOf with fromIndex=0, array [255,0,255], search 0b11111111 from index 0, returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf073() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0, 255});
    int r = arr.indexOf(0b11111111, 0);
    assertEqual(0, r);
    }

    /**
     * Verify indexOf with fromIndex=1, array [255,0,255], search 0xFF skip index 0, returns 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF01_7400
     * @tc.name testUint8ArrayIndexOf074
     * @tc.desc Verify indexOf with fromIndex=1, array [255,0,255], search 0xFF skip index 0, returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf074() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0, 255});
    int r = arr.indexOf(0xFF, 1);
    assertEqual(2, r);
    }
}
