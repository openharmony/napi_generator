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
import basetype.common.EntryResult;
import basetype.common.Int32Array;
import basetype.common.Uint8Array;
import basetype.common.Error;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayToStringTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayToStringTest extends BasTest {
    /**
     * Verify toString() with no arguments returns comma-separated string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0100
     * @tc.name testUint8ArrayToString001
     * @tc.desc Verify toString() with no arguments returns comma-separated string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString001() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString on empty Uint8Array(0) returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0200
     * @tc.name testUint8ArrayToString002
     * @tc.desc Verify toString on empty Uint8Array(0) returns empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString002() {
    Uint8Array arr = new Uint8Array(0);
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    /**
     * Verify toString on empty Uint8Array from literal empty array returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0300
     * @tc.name testUint8ArrayToString003
     * @tc.desc Verify toString on empty Uint8Array from literal empty array returns empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString003() {
    Uint8Array arr = new Uint8Array(new int[] {});
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    /**
     * Verify toString on Uint8Array.of() empty returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0400
     * @tc.name testUint8ArrayToString004
     * @tc.desc Verify toString on Uint8Array.of() empty returns empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString004() {
    Uint8Array arr = Uint8Array.of();
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    /**
     * Verify toString on Uint8Array.from empty source returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0500
     * @tc.name testUint8ArrayToString005
     * @tc.desc Verify toString on Uint8Array.from empty source returns empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString005() {
    Uint8Array arr = Uint8Array.from(new int[] {}, (x, index) -> x);
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    /**
     * Verify toString on Uint8Array from zero-length ArrayBuffer returns empty string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0600
     * @tc.name testUint8ArrayToString006
     * @tc.desc Verify toString on Uint8Array from zero-length ArrayBuffer returns empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString006() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf);
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    /**
     * Verify toString with element 0 returns '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0700
     * @tc.name testUint8ArrayToString007
     * @tc.desc Verify toString with element 0 returns '0'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString007() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with max element 255 returns '255'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0800
     * @tc.name testUint8ArrayToString008
     * @tc.desc Verify toString with max element 255 returns '255'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString008() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    String result = String.valueOf(arr);
    assertEqual("255", result);
    }

    /**
     * Verify toString with mid value 127 returns '127'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_0900
     * @tc.name testUint8ArrayToString009
     * @tc.desc Verify toString with mid value 127 returns '127'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString009() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    String result = String.valueOf(arr);
    assertEqual("127", result);
    }

    /**
     * Verify toString with element 128 returns '128'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1000
     * @tc.name testUint8ArrayToString010
     * @tc.desc Verify toString with element 128 returns '128'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString010() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    String result = String.valueOf(arr);
    assertEqual("128", result);
    }

    /**
     * Verify toString with element 1 returns '1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1100
     * @tc.name testUint8ArrayToString011
     * @tc.desc Verify toString with element 1 returns '1'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString011() {
    Uint8Array arr = new Uint8Array(new int[] {1});
    String result = String.valueOf(arr);
    assertEqual("1", result);
    }

    /**
     * Verify toString with element 254 returns '254'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1200
     * @tc.name testUint8ArrayToString012
     * @tc.desc Verify toString with element 254 returns '254'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString012() {
    Uint8Array arr = new Uint8Array(new int[] {254});
    String result = String.valueOf(arr);
    assertEqual("254", result);
    }

    /**
     * Verify toString with overflow 256 truncates to 0 returns '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1300
     * @tc.name testUint8ArrayToString013
     * @tc.desc Verify toString with overflow 256 truncates to 0 returns '0'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString013() {
    Uint8Array arr = new Uint8Array(new int[] {256});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with -1 wraps to 255 returns '255'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1400
     * @tc.name testUint8ArrayToString014
     * @tc.desc Verify toString with -1 wraps to 255 returns '255'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString014() {
    Uint8Array arr = new Uint8Array(new int[] {-1});
    String result = String.valueOf(arr);
    assertEqual("255", result);
    }

    /**
     * Verify toString with hex literal 0x80 returns '128'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1500
     * @tc.name testUint8ArrayToString015
     * @tc.desc Verify toString with hex literal 0x80 returns '128'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString015() {
    Uint8Array arr = new Uint8Array(new int[] {0x80});
    String result = String.valueOf(arr);
    assertEqual("128", result);
    }

    /**
     * Verify toString with hex max 0xFF returns '255'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1600
     * @tc.name testUint8ArrayToString016
     * @tc.desc Verify toString with hex max 0xFF returns '255'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString016() {
    Uint8Array arr = new Uint8Array(new int[] {0xFF});
    String result = String.valueOf(arr);
    assertEqual("255", result);
    }

    /**
     * Verify toString with hex overflow 0x100 returns '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1700
     * @tc.name testUint8ArrayToString017
     * @tc.desc Verify toString with hex overflow 0x100 returns '0'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString017() {
    Uint8Array arr = new Uint8Array(new int[] {0x100});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with scientific notation 1e2 returns '100'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1800
     * @tc.name testUint8ArrayToString018
     * @tc.desc Verify toString with scientific notation 1e2 returns '100'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString018() {
    Uint8Array arr = new Uint8Array(new double[] {1e2});
    String result = String.valueOf(arr);
    assertEqual("100", result);
    }

    /**
     * Verify toString with NaN converts to 0 returns '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_1900
     * @tc.name testUint8ArrayToString019
     * @tc.desc Verify toString with NaN converts to 0 returns '0'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString019() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with float 3.5 truncates to 3 returns '3'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2000
     * @tc.name testUint8ArrayToString020
     * @tc.desc Verify toString with float 3.5 truncates to 3 returns '3'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString020() {
    Uint8Array arr = new Uint8Array(new double[] {3.5});
    String result = String.valueOf(arr);
    assertEqual("3", result);
    }

    /**
     * Verify toString with negative float -3.5 wraps to 253 returns '253'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2100
     * @tc.name testUint8ArrayToString021
     * @tc.desc Verify toString with negative float -3.5 wraps to 253 returns '253'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString021() {
    Uint8Array arr = new Uint8Array(new double[] {-3.5});
    String result = String.valueOf(arr);
    assertEqual("253", result);
    }

    /**
     * Verify toString with -0 converts to 0 returns '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2200
     * @tc.name testUint8ArrayToString022
     * @tc.desc Verify toString with -0 converts to 0 returns '0'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString022() {
    Uint8Array arr = new Uint8Array(new int[] {-0});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with binary literal 0b11111111 returns '255'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2300
     * @tc.name testUint8ArrayToString023
     * @tc.desc Verify toString with binary literal 0b11111111 returns '255'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString023() {
    Uint8Array arr = new Uint8Array(new int[] {0b11111111});
    String result = String.valueOf(arr);
    assertEqual("255", result);
    }

    /**
     * Verify toString with float integer 1.0 returns '1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2400
     * @tc.name testUint8ArrayToString024
     * @tc.desc Verify toString with float integer 1.0 returns '1'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString024() {
    Uint8Array arr = new Uint8Array(new double[] {1.0});
    String result = String.valueOf(arr);
    assertEqual("1", result);
    }

    /**
     * Verify toString with -128 wraps to 128 returns '128'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2500
     * @tc.name testUint8ArrayToString025
     * @tc.desc Verify toString with -128 wraps to 128 returns '128'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString025() {
    Uint8Array arr = new Uint8Array(new int[] {-128});
    String result = String.valueOf(arr);
    assertEqual("128", result);
    }

    /**
     * Verify toString with -255 wraps to 1 returns '1'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2600
     * @tc.name testUint8ArrayToString026
     * @tc.desc Verify toString with -255 wraps to 1 returns '1'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString026() {
    Uint8Array arr = new Uint8Array(new int[] {-255});
    String result = String.valueOf(arr);
    assertEqual("1", result);
    }

    /**
     * Verify toString with mixed boundary values [0, 255, 127, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2700
     * @tc.name testUint8ArrayToString027
     * @tc.desc Verify toString with mixed boundary values [0, 255, 127, 128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString027() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 127, 128});
    String result = String.valueOf(arr);
    assertEqual("0,255,127,128", result);
    }

    /**
     * Verify toString with all overflow/wrap elements [256, -1, 0x100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2800
     * @tc.name testUint8ArrayToString028
     * @tc.desc Verify toString with all overflow/wrap elements [256, -1, 0x100]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString028() {
    Uint8Array arr = new Uint8Array(new int[] {256, -1, 0x100});
    String result = String.valueOf(arr);
    assertEqual("0,255,0", result);
    }

    /**
     * Verify toString with all zero elements [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_2900
     * @tc.name testUint8ArrayToString029
     * @tc.desc Verify toString with all zero elements [0, 0, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString029() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    String result = String.valueOf(arr);
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toString with all max elements [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3000
     * @tc.name testUint8ArrayToString030
     * @tc.desc Verify toString with all max elements [255, 255, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString030() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    String result = String.valueOf(arr);
    assertEqual("255,255,255", result);
    }

    /**
     * Verify toString with ten consecutive elements [1..10]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3100
     * @tc.name testUint8ArrayToString031
     * @tc.desc Verify toString with ten consecutive elements [1..10]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString031() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    String result = String.valueOf(arr);
    assertEqual("1,2,3,4,5,6,7,8,9,10", result);
    }

    /**
     * Verify toString with negative, mid and overflow mix [-128, 127, 256]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3200
     * @tc.name testUint8ArrayToString032
     * @tc.desc Verify toString with negative, mid and overflow mix [-128, 127, 256]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString032() {
    Uint8Array arr = new Uint8Array(new int[] {-128, 127, 256});
    String result = String.valueOf(arr);
    assertEqual("128,127,0", result);
    }

    /**
     * Verify toString with five zero elements [0, 0, 0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3300
     * @tc.name testUint8ArrayToString033
     * @tc.desc Verify toString with five zero elements [0, 0, 0, 0, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString033() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 0, 0});
    String result = String.valueOf(arr);
    assertEqual("0,0,0,0,0", result);
    }

    /**
     * Verify toString with float truncation combination [3.5, 2.7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3400
     * @tc.name testUint8ArrayToString034
     * @tc.desc Verify toString with float truncation combination [3.5, 2.7]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString034() {
    Uint8Array arr = new Uint8Array(new double[] {3.5, 2.7});
    String result = String.valueOf(arr);
    assertEqual("3,2", result);
    }

    /**
     * Verify toString with hex boundary combination [0x7F, 0x80, 0xFF]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3500
     * @tc.name testUint8ArrayToString035
     * @tc.desc Verify toString with hex boundary combination [0x7F, 0x80, 0xFF]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString035() {
    Uint8Array arr = new Uint8Array(new int[] {0x7F, 0x80, 0xFF});
    String result = String.valueOf(arr);
    assertEqual("127,128,255", result);
    }

    /**
     * Verify toString with scientific notation combination [1e1, 2e1, 3e1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3600
     * @tc.name testUint8ArrayToString036
     * @tc.desc Verify toString with scientific notation combination [1e1, 2e1, 3e1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString036() {
    Uint8Array arr = new Uint8Array(new double[] {1e1, 2e1, 3e1});
    String result = String.valueOf(arr);
    assertEqual("10,20,30", result);
    }

    /**
     * Verify toString with partial overflow combination [100, 200, 300]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3700
     * @tc.name testUint8ArrayToString037
     * @tc.desc Verify toString with partial overflow combination [100, 200, 300]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString037() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 300});
    String result = String.valueOf(arr);
    assertEqual("100,200,44", result);
    }

    /**
     * Verify toString with multiple negative wrap combination [-1, -2, -3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3800
     * @tc.name testUint8ArrayToString038
     * @tc.desc Verify toString with multiple negative wrap combination [-1, -2, -3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString038() {
    Uint8Array arr = new Uint8Array(new int[] {-1, -2, -3});
    String result = String.valueOf(arr);
    assertEqual("255,254,253", result);
    }

    /**
     * Verify toString with NaN and float combination [NaN, 3.5, 2.7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_3900
     * @tc.name testUint8ArrayToString039
     * @tc.desc Verify toString with NaN and float combination [NaN, 3.5, 2.7]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString039() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN, 3.5, 2.7});
    String result = String.valueOf(arr);
    assertEqual("0,3,2", result);
    }

    /**
     * Verify toString with binary literal combination [0b1010, 0b1111]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4000
     * @tc.name testUint8ArrayToString040
     * @tc.desc Verify toString with binary literal combination [0b1010, 0b1111]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString040() {
    Uint8Array arr = new Uint8Array(new int[] {0b1010, 0b1111});
    String result = String.valueOf(arr);
    assertEqual("10,15", result);
    }

    /**
     * Verify toString with large overflow combination [1000, 2000, 3000]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4100
     * @tc.name testUint8ArrayToString041
     * @tc.desc Verify toString with large overflow combination [1000, 2000, 3000]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString041() {
    Uint8Array arr = new Uint8Array(new int[] {1000, 2000, 3000});
    String result = String.valueOf(arr);
    assertEqual("232,208,184", result);
    }

    /**
     * Verify toString with -0 and 0 combination [-0, 0, -0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4200
     * @tc.name testUint8ArrayToString042
     * @tc.desc Verify toString with -0 and 0 combination [-0, 0, -0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString042() {
    Uint8Array arr = new Uint8Array(new int[] {-0, 0, -0});
    String result = String.valueOf(arr);
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toString with decimal precision combination [0.1, 0.9, 1.1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4300
     * @tc.name testUint8ArrayToString043
     * @tc.desc Verify toString with decimal precision combination [0.1, 0.9, 1.1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString043() {
    Uint8Array arr = new Uint8Array(new double[] {0.1, 0.9, 1.1});
    String result = String.valueOf(arr);
    assertEqual("0,0,1", result);
    }

    /**
     * Verify toString with different construction from ArrayBuffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4400
     * @tc.name testUint8ArrayToString044
     * @tc.desc Verify toString with different construction from ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString044() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array uint8 = new Uint8Array(buf);
    uint8.set(0, 1);
    uint8.set(1, 2);
    uint8.set(2, 3);
    String result = String.valueOf(uint8);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString on Uint8Array from ArrayBuffer with byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4500
     * @tc.name testUint8ArrayToString045
     * @tc.desc Verify toString on Uint8Array from ArrayBuffer with byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString045() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array uint8 = new Uint8Array(buf, 2, 3);
    uint8.set(0, 10);
    uint8.set(1, 20);
    uint8.set(2, 30);
    String result = String.valueOf(uint8);
    assertEqual("10,20,30", result);
    }

    /**
     * Verify toString on Uint8Array.of with multiple values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4600
     * @tc.name testUint8ArrayToString046
     * @tc.desc Verify toString on Uint8Array.of with multiple values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    String result = String.valueOf(arr);
    assertEqual("1,2,3,4,5", result);
    }

    /**
     * Verify toString on Uint8Array.from with mapFn
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4700
     * @tc.name testUint8ArrayToString047
     * @tc.desc Verify toString on Uint8Array.from with mapFn
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString047() {
    Uint8Array arr = Uint8Array.from(new double[] {1.0, 2.0, 3.0}, (x, index) -> x * 2);
    String result = String.valueOf(arr);
    assertEqual("2,4,6", result);
    }

    /**
     * Verify toString on Uint8Array from existing Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4800
     * @tc.name testUint8ArrayToString048
     * @tc.desc Verify toString on Uint8Array from existing Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString048() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array arr = new Uint8Array(src);
    String result = String.valueOf(arr);
    assertEqual("10,20,30", result);
    }

    /**
     * Verify toString on Uint8Array from TypedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_4900
     * @tc.name testUint8ArrayToString049
     * @tc.desc Verify toString on Uint8Array from TypedArray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString049() {
    Int32Array src = new Int32Array(new int[] {1, 2, 3});
    Uint8Array arr = new Uint8Array(src);
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString on Uint8Array from Array with overflow
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5000
     * @tc.name testUint8ArrayToString050
     * @tc.desc Verify toString on Uint8Array from Array with overflow
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString050() {
    Uint8Array arr = new Uint8Array(new int[] {300, 400, 500});
    String result = String.valueOf(arr);
    assertEqual("44,144,244", result);
    }

    /**
     * Verify toString on Uint8Array from Array with negative values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5100
     * @tc.name testUint8ArrayToString051
     * @tc.desc Verify toString on Uint8Array from Array with negative values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString051() {
    Uint8Array arr = new Uint8Array(new int[] {-10, -20, -30});
    String result = String.valueOf(arr);
    assertEqual("246,236,226", result);
    }

    /**
     * Verify toString on Uint8Array from Array with float values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5200
     * @tc.name testUint8ArrayToString052
     * @tc.desc Verify toString on Uint8Array from Array with float values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString052() {
    Uint8Array arr = new Uint8Array(new double[] {1.5, 2.5, 3.5});
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString on Uint8Array from Array with NaN and Infinity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5300
     * @tc.name testUint8ArrayToString053
     * @tc.desc Verify toString on Uint8Array from Array with NaN and Infinity
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString053() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN, Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY});
    String result = String.valueOf(arr);
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toString on Uint8Array from Array with decimal values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5400
     * @tc.name testUint8ArrayToString054
     * @tc.desc Verify toString on Uint8Array from Array with decimal values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString054() {
    Uint8Array arr = new Uint8Array(new double[] {0.1, 0.2, 0.3});
    String result = String.valueOf(arr);
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toString after slice operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5500
     * @tc.name testUint8ArrayToString055
     * @tc.desc Verify toString after slice operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString055() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sliced = arr.slice(1, 3);
    String result = String.valueOf(sliced);
    assertEqual("2,3", result);
    }

    /**
     * Verify toString after filter operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5600
     * @tc.name testUint8ArrayToString056
     * @tc.desc Verify toString after filter operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString056() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array filtered = arr.filter((x) -> x > 2);
    String result = String.valueOf(filtered);
    assertEqual("3,4,5", result);
    }

    /**
     * Verify toString after map operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5700
     * @tc.name testUint8ArrayToString057
     * @tc.desc Verify toString after map operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString057() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array mapped = arr.map((x) -> x * 10);
    String result = String.valueOf(mapped);
    assertEqual("10,20,30", result);
    }

    /**
     * Verify toString after reverse operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5800
     * @tc.name testUint8ArrayToString058
     * @tc.desc Verify toString after reverse operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString058() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.reverse();
    String result = String.valueOf(arr);
    assertEqual("3,2,1", result);
    }

    /**
     * Verify toString after sort operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_5900
     * @tc.name testUint8ArrayToString059
     * @tc.desc Verify toString after sort operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString059() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    arr.sort();
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString after fill operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6000
     * @tc.name testUint8ArrayToString060
     * @tc.desc Verify toString after fill operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString060() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(7);
    String result = String.valueOf(arr);
    assertEqual("7,7,7", result);
    }

    /**
     * Verify toString after copyWithin operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6100
     * @tc.name testUint8ArrayToString061
     * @tc.desc Verify toString after copyWithin operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString061() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    String result = String.valueOf(arr);
    assertEqual("4,5,3,4,5", result);
    }

    /**
     * Verify toString after set operation from array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6200
     * @tc.name testUint8ArrayToString062
     * @tc.desc Verify toString after set operation from array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString062() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(new Uint8Array(new int[] {10, 20, 30}));
    String result = String.valueOf(arr);
    assertEqual("10,20,30", result);
    }

    /**
     * Verify toString after set operation from TypedArray
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6300
     * @tc.name testUint8ArrayToString063
     * @tc.desc Verify toString after set operation from TypedArray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString063() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array src = new Uint8Array(new int[] {100, 200, 255});
    arr.set(src);
    String result = String.valueOf(arr);
    assertEqual("100,200,255", result);
    }

    /**
     * Verify toString after toReversed operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6400
     * @tc.name testUint8ArrayToString064
     * @tc.desc Verify toString after toReversed operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString064() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array reversed = arr.toReversed();
    String result = String.valueOf(reversed);
    assertEqual("3,2,1", result);
    }

    /**
     * Verify toString after toSorted operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6500
     * @tc.name testUint8ArrayToString065
     * @tc.desc Verify toString after toSorted operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString065() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 2});
    Uint8Array sorted = arr.toSorted();
    String result = String.valueOf(sorted);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString after index assignment with boundary values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6600
     * @tc.name testUint8ArrayToString066
     * @tc.desc Verify toString after index assignment with boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString066() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 0);
    arr.set(1, 255);
    arr.set(2, 128);
    String result = String.valueOf(arr);
    assertEqual("0,255,128", result);
    }

    /**
     * Verify toString after forEach modification
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6700
     * @tc.name testUint8ArrayToString067
     * @tc.desc Verify toString after forEach modification
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString067() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.forEach((value, index) -> {
    arr.set(index, value * 2);
        });
    String result = String.valueOf(arr);
    assertEqual("2,4,6", result);
    }

    /**
     * Verify toString after reduce operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6800
     * @tc.name testUint8ArrayToString068
     * @tc.desc Verify toString after reduce operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString068() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int sum = arr.reduce((acc, val, index, array) -> acc + val, 0);
    assertEqual(6, sum);
    }

    /**
     * Verify toString after reduceRight operation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_6900
     * @tc.name testUint8ArrayToString069
     * @tc.desc Verify toString after reduceRight operation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString069() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.reduceRight((acc, val, index, array) -> acc + val, 0);
    assertEqual(6, result);
    }

    /**
     * Verify toString after entries iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7000
     * @tc.name testUint8ArrayToString070
     * @tc.desc Verify toString after entries iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString070() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult first = iter.next();
    int[] val = first.value;
    if (val != null) {
    assertEqual(1, val[1]);
    }
    }

    /**
     * Verify toString returns string type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7100
     * @tc.name testUint8ArrayToString071
     * @tc.desc Verify toString returns string type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString071() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toString result contains commas for multi-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7200
     * @tc.name testUint8ArrayToString072
     * @tc.desc Verify toString result contains commas for multi-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString072() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = String.valueOf(arr);
    boolean hasComma = result.contains(",");
    assertTrue(hasComma);
    }

    /**
     * Verify toString result does not contain commas for single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7300
     * @tc.name testUint8ArrayToString073
     * @tc.desc Verify toString result does not contain commas for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString073() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    String result = String.valueOf(arr);
    boolean hasComma = result.contains(",");
    assertFalse(hasComma);
    }

    /**
     * Verify toString result does not contain trailing comma
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7400
     * @tc.name testUint8ArrayToString074
     * @tc.desc Verify toString result does not contain trailing comma
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString074() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = String.valueOf(arr);
    boolean endsWithComma = result.endsWith(",");
    assertFalse(endsWithComma);
    }

    /**
     * Verify toString with large overflow 999 truncates to 231
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7500
     * @tc.name testUint8ArrayToString075
     * @tc.desc Verify toString with large overflow 999 truncates to 231
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString075() {
    Uint8Array arr = new Uint8Array(new int[] {999});
    String result = String.valueOf(arr);
    assertEqual("231", result);
    }

    /**
     * Verify toString with negative overflow -256 wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7600
     * @tc.name testUint8ArrayToString076
     * @tc.desc Verify toString with negative overflow -256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString076() {
    Uint8Array arr = new Uint8Array(new int[] {-256});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with float 0.999 truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7700
     * @tc.name testUint8ArrayToString077
     * @tc.desc Verify toString with float 0.999 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString077() {
    Uint8Array arr = new Uint8Array(new double[] {0.999});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with negative float -0.999 truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7800
     * @tc.name testUint8ArrayToString078
     * @tc.desc Verify toString with negative float -0.999 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString078() {
    Uint8Array arr = new Uint8Array(new double[] {-0.999});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with Infinity converts to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_7900
     * @tc.name testUint8ArrayToString079
     * @tc.desc Verify toString with Infinity converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString079() {
    Uint8Array arr = new Uint8Array(new double[] {Double.POSITIVE_INFINITY});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with -Infinity converts to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8000
     * @tc.name testUint8ArrayToString080
     * @tc.desc Verify toString with -Infinity converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString080() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NEGATIVE_INFINITY});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with very small negative -1e-10 truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8100
     * @tc.name testUint8ArrayToString081
     * @tc.desc Verify toString with very small negative -1e-10 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString081() {
    Uint8Array arr = new Uint8Array(new double[] {-1e-10});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString on view from same ArrayBuffer reflects changes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8200
     * @tc.name testUint8ArrayToString082
     * @tc.desc Verify toString on view from same ArrayBuffer reflects changes
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString082() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array view1 = new Uint8Array(buf);
    Uint8Array view2 = new Uint8Array(buf);
    view1.set(0, 42);
    String result = String.valueOf(view2);
    assertEqual("42,0,0", result);
    }

    /**
     * Verify toString on subarray view reflects original changes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8300
     * @tc.name testUint8ArrayToString083
     * @tc.desc Verify toString on subarray view reflects original changes
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString083() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(1, 4);
    arr.set(2, 99);
    String result = String.valueOf(sub);
    assertEqual("2,99,4", result);
    }

    /**
     * Verify toString on slice is independent from original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8400
     * @tc.name testUint8ArrayToString084
     * @tc.desc Verify toString on slice is independent from original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString084() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array sliced = arr.slice(0, 2);
    arr.set(0, 99);
    String result = String.valueOf(sliced);
    assertEqual("1,2", result);
    }

    /**
     * Verify toString on buffer with offset view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8500
     * @tc.name testUint8ArrayToString085
     * @tc.desc Verify toString on buffer with offset view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString085() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array full = new Uint8Array(buf);
    full.set(0, 10);
    full.set(1, 20);
    full.set(2, 30);
    full.set(3, 40);
    full.set(4, 50);
    Uint8Array offsetView = new Uint8Array(buf, 2, 2);
    String result = String.valueOf(offsetView);
    assertEqual("30,40", result);
    }

    /**
     * Verify toString on multiple views of same buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8600
     * @tc.name testUint8ArrayToString086
     * @tc.desc Verify toString on multiple views of same buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString086() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array firstView = new Uint8Array(buf);
    Uint8Array secondView = new Uint8Array(buf);
    firstView.set(0, 5);
    firstView.set(1, 10);
    firstView.set(2, 15);
    String result = String.valueOf(secondView);
    assertEqual("5,10,15", result);
    }

    /**
     * Verify toString with Number.MAX_VALUE truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8700
     * @tc.name testUint8ArrayToString087
     * @tc.desc Verify toString with Number.MAX_VALUE truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString087() {
    Uint8Array arr = new Uint8Array(new double[] {Double.MAX_VALUE});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with Number.MIN_VALUE truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8800
     * @tc.name testUint8ArrayToString088
     * @tc.desc Verify toString with Number.MIN_VALUE truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString088() {
    Uint8Array arr = new Uint8Array(new double[] {Double.MIN_VALUE});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with -Number.MAX_VALUE wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_8900
     * @tc.name testUint8ArrayToString089
     * @tc.desc Verify toString with -Number.MAX_VALUE wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString089() {
    Uint8Array arr = new Uint8Array(new double[] {-Double.MAX_VALUE});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString with -Number.MIN_VALUE truncates to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9000
     * @tc.name testUint8ArrayToString090
     * @tc.desc Verify toString with -Number.MIN_VALUE truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString090() {
    Uint8Array arr = new Uint8Array(new double[] {-Double.MIN_VALUE});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString after index assignment with boundary value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9100
     * @tc.name testUint8ArrayToString091
     * @tc.desc Verify toString after index assignment with boundary value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString091() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 255);
    String result = String.valueOf(arr);
    assertEqual("255", result);
    }

    /**
     * Verify toString after index assignment with overflow 256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9200
     * @tc.name testUint8ArrayToString092
     * @tc.desc Verify toString after index assignment with overflow 256
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString092() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 256);
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    /**
     * Verify toString after multiple index assignments
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9300
     * @tc.name testUint8ArrayToString093
     * @tc.desc Verify toString after multiple index assignments
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString093() {
    Uint8Array arr = new Uint8Array(4);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    String result = String.valueOf(arr);
    assertEqual("10,20,30,40", result);
    }

    /**
     * Verify toString after index assignment with float truncation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9400
     * @tc.name testUint8ArrayToString094
     * @tc.desc Verify toString after index assignment with float truncation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString094() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 7.9);
    String result = String.valueOf(arr);
    assertEqual("7", result);
    }

    /**
     * Verify toString after index assignment with wrap value -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9500
     * @tc.name testUint8ArrayToString095
     * @tc.desc Verify toString after index assignment with wrap value -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString095() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -1);
    String result = String.valueOf(arr);
    assertEqual("255", result);
    }

    /**
     * Verify toString on 100-element zero array has correct length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9600
     * @tc.name testUint8ArrayToString096
     * @tc.desc Verify toString on 100-element zero array has correct length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString096() {
    Uint8Array arr = new Uint8Array(100);
    String result = String.valueOf(arr);
    assertEqual(199, result.length());
    }

    /**
     * Verify toString on 100-element zero array first char is '0'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9700
     * @tc.name testUint8ArrayToString097
     * @tc.desc Verify toString on 100-element zero array first char is '0'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString097() {
    Uint8Array arr = new Uint8Array(100);
    String result = String.valueOf(arr);
    assertEqual("0", String.valueOf(result.charAt(0)));
    }

    /**
     * Verify toString on single element array has no extra prefix
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9800
     * @tc.name testUint8ArrayToString098
     * @tc.desc Verify toString on single element array has no extra prefix
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString098() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    String result = String.valueOf(arr);
    assertEqual("5", String.valueOf(result.charAt(0)));
    }

    /**
     * Verify toString never throws exception on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_STRING_9900
     * @tc.name testUint8ArrayToString099
     * @tc.desc Verify toString never throws exception on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToString099() {
    Uint8Array arr = new Uint8Array(0);
    boolean threw = false;
    try {
    String.valueOf(arr);
    } catch (Error e) {
    threw = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertFalse(threw);
    }
}
