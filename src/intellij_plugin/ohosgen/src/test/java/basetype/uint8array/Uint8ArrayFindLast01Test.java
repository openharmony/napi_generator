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
 * Uint8ArrayFindLast01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindLast01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0100
     * @tc.name testUint8ArrayFindLast001
     * @tc.desc Verify findLast with 1 parameter and inline arrow function callback is correctly called
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((value) -> value > 5);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0200
     * @tc.name testUint8ArrayFindLast002
     * @tc.desc Verify findLast with arrow function expression body as callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast002() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findLast((v) -> v > 2);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0300
     * @tc.name testUint8ArrayFindLast003
     * @tc.desc Verify findLast with arrow function block body with explicit return as callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast003() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int result = arr.findLast((v) -> { return v > 1;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0400
     * @tc.name testUint8ArrayFindLast004
     * @tc.desc Verify findLast callback captures external closure variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast004() {
    int threshold = 100;
    Uint8Array arr = new Uint8Array(new int[] {50, 150, 250});
    int result = arr.findLast((v) -> v > threshold);
    assertEqual(250, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0500
     * @tc.name testUint8ArrayFindLast005
     * @tc.desc Verify findLast on single element array with minimum value 0 matching value === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast005() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0600
     * @tc.name testUint8ArrayFindLast006
     * @tc.desc Verify findLast on single element array with maximum value 255 matching value === 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast006() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    int result = arr.findLast((v) -> v == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0700
     * @tc.name testUint8ArrayFindLast007
     * @tc.desc Verify findLast on single element array with boundary value 128 matching value === 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast007() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    int result = arr.findLast((v) -> v == 128);
    assertEqual(128, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0800
     * @tc.name testUint8ArrayFindLast008
     * @tc.desc Verify findLast on single element array with middle value 127 matching value === 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast008() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    int result = arr.findLast((v) -> v == 127);
    assertEqual(127, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_0900
     * @tc.name testUint8ArrayFindLast009
     * @tc.desc Verify findLast on array containing minimum value 0 in three elements matching value === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast009() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1000
     * @tc.name testUint8ArrayFindLast010
     * @tc.desc Verify findLast on array containing maximum value 255 in three elements matching value === 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast010() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 255});
    int result = arr.findLast((v) -> v == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1100
     * @tc.name testUint8ArrayFindLast011
     * @tc.desc Verify findLast on array containing middle value 127 in three elements matching value === 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast011() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 255});
    int result = arr.findLast((v) -> v == 127);
    assertEqual(127, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1200
     * @tc.name testUint8ArrayFindLast012
     * @tc.desc Verify findLast on array containing boundary value 128 in three elements matching value === 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast012() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int result = arr.findLast((v) -> v == 128);
    assertEqual(128, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1300
     * @tc.name testUint8ArrayFindLast013
     * @tc.desc Verify findLast on four elements with all boundary values matching value > 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast013() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v > 127);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1400
     * @tc.name testUint8ArrayFindLast014
     * @tc.desc Verify findLast on four elements with all boundary values matching value >= 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast014() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v >= 128);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1500
     * @tc.name testUint8ArrayFindLast015
     * @tc.desc Verify findLast on four elements with all boundary values matching value <= 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast015() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v <= 128);
    assertEqual(128, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1600
     * @tc.name testUint8ArrayFindLast016
     * @tc.desc Verify findLast on four elements with all boundary values matching value < 129
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast016() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v < 129);
    assertEqual(128, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1700
     * @tc.name testUint8ArrayFindLast017
     * @tc.desc Verify findLast on four elements with all boundary values matching value < 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast017() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v < 128);
    assertEqual(127, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1800
     * @tc.name testUint8ArrayFindLast018
     * @tc.desc Verify findLast on three elements all same value 100 matching value === 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast018() {
    Uint8Array arr = new Uint8Array(new int[] {100, 100, 100});
    int result = arr.findLast((v) -> v == 100);
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_1900
     * @tc.name testUint8ArrayFindLast019
     * @tc.desc Verify findLast on array containing overflow value 256 truncated to 0 matching value === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast019() {
    Uint8Array arr = new Uint8Array(new int[] {256});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2000
     * @tc.name testUint8ArrayFindLast020
     * @tc.desc Verify findLast on array containing negative value -1 wrapped to 255 matching value === 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast020() {
    Uint8Array arr = new Uint8Array(new int[] {-1});
    int result = arr.findLast((v) -> v == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2100
     * @tc.name testUint8ArrayFindLast021
     * @tc.desc Verify findLast on array containing float 0.5 truncated to 0 matching value === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast021() {
    Uint8Array arr = new Uint8Array(new double[] {0.5});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2200
     * @tc.name testUint8ArrayFindLast022
     * @tc.desc Verify findLast on array containing float 255.9 truncated to 255 matching value === 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast022() {
    Uint8Array arr = new Uint8Array(new double[] {255.9});
    int result = arr.findLast((v) -> v == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2300
     * @tc.name testUint8ArrayFindLast023
     * @tc.desc Verify findLast on array containing float 256.1 truncated and wrapped to 0 matching value === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast023() {
    Uint8Array arr = new Uint8Array(new double[] {256.1});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2400
     * @tc.name testUint8ArrayFindLast024
     * @tc.desc Verify findLast on array containing negative float -0.5 truncated to 0 matching value === 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast024() {
    Uint8Array arr = new Uint8Array(new double[] {-0.5});
    int result = arr.findLast((v) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2500
     * @tc.name testUint8ArrayFindLast025
     * @tc.desc Verify findLast on array with hexadecimal literal 0xFF as element matching value === 0xFF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast025() {
    Uint8Array arr = new Uint8Array(new int[] {0x00, 0x80, 0xFF});
    int result = arr.findLast((v) -> v == 0xFF);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2600
     * @tc.name testUint8ArrayFindLast026
     * @tc.desc Verify findLast on array with binary literal 0b11111111 as element matching value === 0b11111111
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast026() {
    Uint8Array arr = new Uint8Array(new int[] {0b00000000, 0b01111111, 0b11111111});
    int result = arr.findLast((v) -> v == 0b11111111);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2700
     * @tc.name testUint8ArrayFindLast027
     * @tc.desc Verify findLast on array with octal literal 0o377 as element matching value === 0o377
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast027() {
    Uint8Array arr = new Uint8Array(new int[] {00, 0177, 0377});
    int result = arr.findLast((v) -> v == 0377);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2800
     * @tc.name testUint8ArrayFindLast028
     * @tc.desc Verify findLast on array with scientific notation 1e2 as element matching value === 1e2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast028() {
    Uint8Array arr = new Uint8Array(new double[] {1e0, 5e1, 1e2});
    int result = arr.findLast((v) -> v == 1e2);
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_2900
     * @tc.name testUint8ArrayFindLast029
     * @tc.desc Verify findLast callback checking index === 0 captures first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast029() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((v, i) -> i == 0);
    assertEqual(10, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3000
     * @tc.name testUint8ArrayFindLast030
     * @tc.desc Verify findLast callback checking index === 2 captures last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast030() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((v, i) -> i == 2);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3100
     * @tc.name testUint8ArrayFindLast031
     * @tc.desc Verify findLast callback checking index === array.length - 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast031() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((v, i, a) -> i == a.length() - 1);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3200
     * @tc.name testUint8ArrayFindLast032
     * @tc.desc Verify findLast callback checking index is even
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast032() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20, 25});
    int result = arr.findLast((v, i) -> i % 2 == 0);
    assertEqual(25, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3300
     * @tc.name testUint8ArrayFindLast033
     * @tc.desc Verify findLast callback combining value and index compound condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast033() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    int result = arr.findLast((v, i) -> v > 10 && i > 1);
    assertEqual(40, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3400
     * @tc.name testUint8ArrayFindLast034
     * @tc.desc Verify findLast callback checking index > 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast034() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.findLast((v, i) -> i > 2);
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3500
     * @tc.name testUint8ArrayFindLast035
     * @tc.desc Verify findLast callback referencing array[0] compared with current value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast035() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 5});
    int result = arr.findLast((v, i, a) -> v == a.get(0));
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3600
     * @tc.name testUint8ArrayFindLast036
     * @tc.desc Verify findLast callback referencing array.length compared with current value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast036() {
    Uint8Array arr = new Uint8Array(new int[] {3, 2, 1});
    int result = arr.findLast((v, i, a) -> v < a.length());
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3700
     * @tc.name testUint8ArrayFindLast037
     * @tc.desc Verify findLast callback referencing array[i] self-reference always true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast037() {
    Uint8Array arr = new Uint8Array(new int[] {7, 8, 9});
    int result = arr.findLast((v, i, a) -> v == a.get(i));
    assertEqual(9, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3800
     * @tc.name testUint8ArrayFindLast038
     * @tc.desc Verify findLast callback checking array[array.length - 1] > value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast038() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findLast((v, i, a) -> a.get(a.length() - 1) > v);
    assertEqual(10, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_3900
     * @tc.name testUint8ArrayFindLast039
     * @tc.desc Verify findLast on duplicate values [10, 20, 10] with callback value === 10 returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 10});
    int result = arr.findLast((v) -> v == 10);
    assertEqual(10, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4000
     * @tc.name testUint8ArrayFindLast040
     * @tc.desc Verify findLast on all same values [1, 1, 1] with callback value === 1 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast040() {
    Uint8Array arr = new Uint8Array(new int[] {1, 1, 1});
    int result = arr.findLast((v) -> v == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4100
     * @tc.name testUint8ArrayFindLast041
     * @tc.desc Verify findLast on ascending sequence [5, 10, 15] with callback value > 8 finds last match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast041() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findLast((v) -> v > 8);
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4200
     * @tc.name testUint8ArrayFindLast042
     * @tc.desc Verify findLast on ascending sequence [5, 10, 15] with callback value > 12 finds last match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast042() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int result = arr.findLast((v) -> v > 12);
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4300
     * @tc.name testUint8ArrayFindLast043
     * @tc.desc Verify findLast on descending sequence [15, 10, 5] with callback value > 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast043() {
    Uint8Array arr = new Uint8Array(new int[] {15, 10, 5});
    int result = arr.findLast((v) -> v > 4);
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4400
     * @tc.name testUint8ArrayFindLast044
     * @tc.desc Verify findLast on descending sequence [15, 10, 5] with callback value > 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast044() {
    Uint8Array arr = new Uint8Array(new int[] {15, 10, 5});
    int result = arr.findLast((v) -> v > 10);
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4500
     * @tc.name testUint8ArrayFindLast045
     * @tc.desc Verify findLast on duplicate values [1, 2, 3, 2, 1] with callback value === 2 returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast045() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 2, 1});
    int result = arr.findLast((v) -> v == 2);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4600
     * @tc.name testUint8ArrayFindLast046
     * @tc.desc Verify findLast on duplicate values [1, 2, 3, 2, 1] with callback value > 1 returns last match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast046() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 2, 1});
    int result = arr.findLast((v) -> v > 1);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4700
     * @tc.name testUint8ArrayFindLast047
     * @tc.desc Verify findLast callback using strict equality
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast047() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v == 200);
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4800
     * @tc.name testUint8ArrayFindLast048
     * @tc.desc Verify findLast callback using inequality
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast048() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v != 0);
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_4900
     * @tc.name testUint8ArrayFindLast049
     * @tc.desc Verify findLast callback using greater than
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast049() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v > 100);
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5000
     * @tc.name testUint8ArrayFindLast050
     * @tc.desc Verify findLast callback using greater than or equal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast050() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v >= 200);
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5100
     * @tc.name testUint8ArrayFindLast051
     * @tc.desc Verify findLast callback using less than
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast051() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v < 200);
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5200
     * @tc.name testUint8ArrayFindLast052
     * @tc.desc Verify findLast callback using less than or equal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast052() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> v <= 100);
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5300
     * @tc.name testUint8ArrayFindLast053
     * @tc.desc Verify findLast callback value >= 0 matches all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast053() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 255});
    int result = arr.findLast((v) -> v >= 0);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5400
     * @tc.name testUint8ArrayFindLast054
     * @tc.desc Verify findLast callback value <= 255 matches all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast054() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 255});
    int result = arr.findLast((v) -> v <= 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5500
     * @tc.name testUint8ArrayFindLast055
     * @tc.desc Verify findLast callback using compound AND condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast055() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v > 0 && v < 255);
    assertEqual(128, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5600
     * @tc.name testUint8ArrayFindLast056
     * @tc.desc Verify findLast callback using compound OR condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast056() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    int result = arr.findLast((v) -> v == 127 || v == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5700
     * @tc.name testUint8ArrayFindLast057
     * @tc.desc Verify findLast callback using negation ! operator
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast057() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 255});
    int result = arr.findLast((v) -> !(v > 100));
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5800
     * @tc.name testUint8ArrayFindLast058
     * @tc.desc Verify findLast callback using arithmetic expression 255 - v > 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast058() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 250});
    int result = arr.findLast((v) -> 255 - v > 0);
    assertEqual(250, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_5900
     * @tc.name testUint8ArrayFindLast059
     * @tc.desc Verify findLast callback using arithmetic expression v + 10 > 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast059() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 250});
    int result = arr.findLast((v) -> v + 10 > 255);
    assertEqual(250, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_6000
     * @tc.name testUint8ArrayFindLast060
     * @tc.desc Verify findLast callback using operator priority expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast060() {
    Uint8Array arr = new Uint8Array(new int[] {0, 100, 200});
    int result = arr.findLast((v) -> (v > 50) && (v < 250));
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_6100
     * @tc.name testUint8ArrayFindLast061
     * @tc.desc Verify findLast callback returning true literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast061() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((v) -> true);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_6200
     * @tc.name testUint8ArrayFindLast062
     * @tc.desc Verify findLast callback using comparison expression value === 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast062() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((v) -> v == 20);
    assertEqual(20, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST1_6300
     * @tc.name testUint8ArrayFindLast063
     * @tc.desc Verify findLast callback using compound boolean expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast063() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int result = arr.findLast((v) -> v >= 10 && v <= 30);
    assertEqual(30, result);
    }
}
