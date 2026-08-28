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
 * Uint8ArrayReverse01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayReverse01Test extends BasTest {
    /**
     * Verify three-element [1, 2, 3] reverse, first element becomes 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0100
     * @tc.name testUint8ArrayReverse001
     * @tc.desc Verify three-element [1, 2, 3] reverse, first element becomes 3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse001() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = arr.reverse();
    assertEqual(3, r.get(0));
    }

    /**
     * Verify four-element [10, 20, 30, 40] reverse, first element becomes 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0200
     * @tc.name testUint8ArrayReverse002
     * @tc.desc Verify four-element [10, 20, 30, 40] reverse, first element becomes 40]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array r = arr.reverse();
    assertEqual(40, r.get(0));
    }

    /**
     * Verify three-element [100, 200, 50] reverse, first element becomes 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0300
     * @tc.name testUint8ArrayReverse003
     * @tc.desc Verify three-element [100, 200, 50] reverse, first element becomes 50]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse003() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 50});
    Uint8Array r = arr.reverse();
    assertEqual(100, r.get(2));
    }

    /**
     * Verify four-element [5, 10, 15, 20] reverse, first element becomes 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0400
     * @tc.name testUint8ArrayReverse004
     * @tc.desc Verify four-element [5, 10, 15, 20] reverse, first element becomes 20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse004() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20});
    Uint8Array r = arr.reverse();
    assertEqual(5, r.get(3));
    }

    /**
     * Verify three-element [50, 60, 70] reverse, first element becomes 70]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0500
     * @tc.name testUint8ArrayReverse005
     * @tc.desc Verify three-element [50, 60, 70] reverse, first element becomes 70]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse005() {
    Uint8Array arr = new Uint8Array(new int[] {50, 60, 70});
    Uint8Array r = arr.reverse();
    assertEqual(70, r.get(0));
    }

    /**
     * Verify four-element [30, 40, 50, 60] reverse, first element becomes 60]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0600
     * @tc.name testUint8ArrayReverse006
     * @tc.desc Verify four-element [30, 40, 50, 60] reverse, first element becomes 60]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse006() {
    Uint8Array arr = new Uint8Array(new int[] {30, 40, 50, 60});
    Uint8Array r = arr.reverse();
    assertEqual(60, r.get(0));
    }

    /**
     * Verify two-element [11, 22] reverse, first element becomes 22]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0700
     * @tc.name testUint8ArrayReverse007
     * @tc.desc Verify two-element [11, 22] reverse, first element becomes 22]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse007() {
    Uint8Array arr = new Uint8Array(new int[] {11, 22});
    Uint8Array r = arr.reverse();
    assertEqual(22, r.get(0));
    }

    /**
     * Verify three-element [7, 8, 9] reverse, first element becomes 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0800
     * @tc.name testUint8ArrayReverse008
     * @tc.desc Verify three-element [7, 8, 9] reverse, first element becomes 9]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse008() {
    Uint8Array arr = new Uint8Array(new int[] {7, 8, 9});
    Uint8Array r = arr.reverse();
    assertEqual(9, r.get(0));
    }

    /**
     * Verify three-element [3, 6, 9] reverse, first element becomes 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_0900
     * @tc.name testUint8ArrayReverse009
     * @tc.desc Verify three-element [3, 6, 9] reverse, first element becomes 9]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse009() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6, 9});
    Uint8Array r = arr.reverse();
    assertEqual(3, r.get(2));
    }

    /**
     * Verify four-element [2, 4, 6, 8] reverse, first element becomes 8]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1000
     * @tc.name testUint8ArrayReverse010
     * @tc.desc Verify four-element [2, 4, 6, 8] reverse, first element becomes 8]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse010() {
    Uint8Array arr = new Uint8Array(new int[] {2, 4, 6, 8});
    Uint8Array r = arr.reverse();
    assertEqual(2, r.get(3));
    }

    /**
     * Verify empty array reverse, length remains 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1100
     * @tc.name testUint8ArrayReverse011
     * @tc.desc Verify empty array reverse, length remains 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse011() {
    Uint8Array arr = Uint8Array.of();
    Uint8Array r = arr.reverse();
    assertEqual(0, r.length());
    }

    /**
     * Verify all-same [5] reverse, first element still 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1200
     * @tc.name testUint8ArrayReverse012
     * @tc.desc Verify all-same [5] reverse, first element still 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse012() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    Uint8Array r = arr.reverse();
    assertEqual(5, r.get(0));
    }

    /**
     * Verify two-element [13, 17] reverse, first element becomes 17]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1300
     * @tc.name testUint8ArrayReverse013
     * @tc.desc Verify two-element [13, 17] reverse, first element becomes 17]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse013() {
    Uint8Array arr = new Uint8Array(new int[] {13, 17});
    Uint8Array r = arr.reverse();
    assertEqual(17, r.get(0));
    }

    /**
     * Verify three-element [18, 19, 20] reverse, first element becomes 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1400
     * @tc.name testUint8ArrayReverse014
     * @tc.desc Verify three-element [18, 19, 20] reverse, first element becomes 20]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse014() {
    Uint8Array arr = new Uint8Array(new int[] {18, 19, 20});
    Uint8Array r = arr.reverse();
    assertEqual(20, r.get(0));
    }

    /**
     * Verify four-element [21, 22, 23, 24] reverse, first element becomes 24]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1500
     * @tc.name testUint8ArrayReverse015
     * @tc.desc Verify four-element [21, 22, 23, 24] reverse, first element becomes 24]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse015() {
    Uint8Array arr = new Uint8Array(new int[] {21, 22, 23, 24});
    Uint8Array r = arr.reverse();
    assertEqual(24, r.get(0));
    }

    /**
     * Verify five-element [25, 26, 27, 28, 29] reverse, first element becomes 29]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1600
     * @tc.name testUint8ArrayReverse016
     * @tc.desc Verify five-element [25, 26, 27, 28, 29] reverse, first element becomes 29]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse016() {
    Uint8Array arr = new Uint8Array(new int[] {25, 26, 27, 28, 29});
    Uint8Array r = arr.reverse();
    assertEqual(29, r.get(0));
    }

    /**
     * Verify length 7 array reverse, first element becomes original last 77
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1700
     * @tc.name testUint8ArrayReverse017
     * @tc.desc Verify length 7 array reverse, first element becomes original last 77
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse017() {
    Uint8Array arr = new Uint8Array(7);
    arr.set(0, 11);
    arr.set(6, 77);
    Uint8Array r = arr.reverse();
    assertEqual(77, r.get(0));
    }

    /**
     * Verify length 8 array reverse, first element becomes original last 88
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1800
     * @tc.name testUint8ArrayReverse018
     * @tc.desc Verify length 8 array reverse, first element becomes original last 88
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse018() {
    Uint8Array arr = new Uint8Array(8);
    arr.set(0, 22);
    arr.set(7, 88);
    Uint8Array r = arr.reverse();
    assertEqual(88, r.get(0));
    }

    /**
     * Verify length 16 array reverse, first element becomes original last 166
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_1900
     * @tc.name testUint8ArrayReverse019
     * @tc.desc Verify length 16 array reverse, first element becomes original last 166
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse019() {
    Uint8Array arr = new Uint8Array(16);
    arr.set(0, 33);
    arr.set(15, 166);
    Uint8Array r = arr.reverse();
    assertEqual(166, r.get(0));
    }

    /**
     * Verify length 100 array reverse, first element becomes original last 200
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2000
     * @tc.name testUint8ArrayReverse020
     * @tc.desc Verify length 100 array reverse, first element becomes original last 200
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse020() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(0, 44);
    arr.set(99, 200);
    Uint8Array r = arr.reverse();
    assertEqual(200, r.get(0));
    }

    /**
     * Verify length 255 array reverse, first element becomes original last 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2100
     * @tc.name testUint8ArrayReverse021
     * @tc.desc Verify length 255 array reverse, first element becomes original last 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse021() {
    Uint8Array arr = new Uint8Array(255);
    arr.set(0, 55);
    arr.set(254, 255);
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify length 256 array reverse, first element becomes original last 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2200
     * @tc.name testUint8ArrayReverse022
     * @tc.desc Verify length 256 array reverse, first element becomes original last 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse022() {
    Uint8Array arr = new Uint8Array(256);
    arr.set(0, 66);
    arr.set(255, 128);
    Uint8Array r = arr.reverse();
    assertEqual(128, r.get(0));
    }

    /**
     * Verify length 1000 array reverse, first element becomes original last 250
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2300
     * @tc.name testUint8ArrayReverse023
     * @tc.desc Verify length 1000 array reverse, first element becomes original last 250
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse023() {
    Uint8Array arr = new Uint8Array(1000);
    arr.set(0, 77);
    arr.set(999, 250);
    Uint8Array r = arr.reverse();
    assertEqual(250, r.get(0));
    }

    /**
     * Verify all-same [254] reverse, first element still 254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2400
     * @tc.name testUint8ArrayReverse024
     * @tc.desc Verify all-same [254] reverse, first element still 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse024() {
    Uint8Array arr = new Uint8Array(new int[] {254});
    Uint8Array r = arr.reverse();
    assertEqual(254, r.get(0));
    }

    /**
     * Verify new Uint8Array(0) reverse, length remains 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2500
     * @tc.name testUint8ArrayReverse025
     * @tc.desc Verify new Uint8Array(0) reverse, length remains 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse025() {
    Uint8Array arr = new Uint8Array(0);
    Uint8Array r = arr.reverse();
    assertEqual(0, r.length());
    }

    /**
     * Verify single element [0] reverse, first element still 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2600
     * @tc.name testUint8ArrayReverse026
     * @tc.desc Verify single element [0] reverse, first element still 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse026() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify single element [255] reverse, first element still 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2700
     * @tc.name testUint8ArrayReverse027
     * @tc.desc Verify single element [255] reverse, first element still 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse027() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify single element [127] reverse, first element still 127 (mid-value)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2800
     * @tc.name testUint8ArrayReverse028
     * @tc.desc Verify single element [127] reverse, first element still 127 (mid-value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse028() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    Uint8Array r = arr.reverse();
    assertEqual(127, r.get(0));
    }

    /**
     * Verify single element [128] reverse, first element still 128 (mid-value+1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_2900
     * @tc.name testUint8ArrayReverse029
     * @tc.desc Verify single element [128] reverse, first element still 128 (mid-value+1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse029() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    Uint8Array r = arr.reverse();
    assertEqual(128, r.get(0));
    }

    /**
     * Verify two-element [0, 255] reverse, first element becomes 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3000
     * @tc.name testUint8ArrayReverse030
     * @tc.desc Verify two-element [0, 255] reverse, first element becomes 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse030() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify two-element [255, 0] reverse, first element becomes 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3100
     * @tc.name testUint8ArrayReverse031
     * @tc.desc Verify two-element [255, 0] reverse, first element becomes 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse031() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify two-element [127, 128] reverse, first element becomes 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3200
     * @tc.name testUint8ArrayReverse032
     * @tc.desc Verify two-element [127, 128] reverse, first element becomes 128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse032() {
    Uint8Array arr = new Uint8Array(new int[] {127, 128});
    Uint8Array r = arr.reverse();
    assertEqual(128, r.get(0));
    }

    /**
     * Verify two-element [1, 2] reverse, first element becomes 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3300
     * @tc.name testUint8ArrayReverse033
     * @tc.desc Verify two-element [1, 2] reverse, first element becomes 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse033() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2});
    Uint8Array r = arr.reverse();
    assertEqual(2, r.get(0));
    }

    /**
     * Verify two-element [200, 55] reverse, first element becomes 55]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3400
     * @tc.name testUint8ArrayReverse034
     * @tc.desc Verify two-element [200, 55] reverse, first element becomes 55]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse034() {
    Uint8Array arr = new Uint8Array(new int[] {200, 55});
    Uint8Array r = arr.reverse();
    assertEqual(55, r.get(0));
    }

    /**
     * Verify two-element [254, 1] reverse, first element becomes 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3500
     * @tc.name testUint8ArrayReverse035
     * @tc.desc Verify two-element [254, 1] reverse, first element becomes 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse035() {
    Uint8Array arr = new Uint8Array(new int[] {254, 1});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify three-element [81, 82, 83] reverse, first element becomes 83]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3600
     * @tc.name testUint8ArrayReverse036
     * @tc.desc Verify three-element [81, 82, 83] reverse, first element becomes 83]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse036() {
    Uint8Array arr = new Uint8Array(new int[] {81, 82, 83});
    Uint8Array r = arr.reverse();
    assertEqual(83, r.get(0));
    }

    /**
     * Verify three-element [255, 0, 128] reverse, first element becomes 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3700
     * @tc.name testUint8ArrayReverse037
     * @tc.desc Verify three-element [255, 0, 128] reverse, first element becomes 128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse037() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0, 128});
    Uint8Array r = arr.reverse();
    assertEqual(128, r.get(0));
    }

    /**
     * Verify three-element [10, 20, 30] reverse, first element becomes 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3800
     * @tc.name testUint8ArrayReverse038
     * @tc.desc Verify three-element [10, 20, 30] reverse, first element becomes 30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse038() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array r = arr.reverse();
    assertEqual(30, r.get(0));
    }

    /**
     * Verify three-element [100, 200, 150] reverse, first element becomes 150]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_3900
     * @tc.name testUint8ArrayReverse039
     * @tc.desc Verify three-element [100, 200, 150] reverse, first element becomes 150]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse039() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 150});
    Uint8Array r = arr.reverse();
    assertEqual(150, r.get(0));
    }

    /**
     * Verify three-element [7, 14, 21] reverse, first element becomes 21]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4000
     * @tc.name testUint8ArrayReverse040
     * @tc.desc Verify three-element [7, 14, 21] reverse, first element becomes 21]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse040() {
    Uint8Array arr = new Uint8Array(new int[] {7, 14, 21});
    Uint8Array r = arr.reverse();
    assertEqual(21, r.get(0));
    }

    /**
     * Verify four-element [1, 2, 3, 4] reverse, first element becomes 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4100
     * @tc.name testUint8ArrayReverse041
     * @tc.desc Verify four-element [1, 2, 3, 4] reverse, first element becomes 4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse041() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4});
    Uint8Array r = arr.reverse();
    assertEqual(4, r.get(0));
    }

    /**
     * Verify four-element [10, 20, 30, 40] reverse, first element becomes 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4200
     * @tc.name testUint8ArrayReverse042
     * @tc.desc Verify four-element [10, 20, 30, 40] reverse, first element becomes 40]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse042() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array r = arr.reverse();
    assertEqual(40, r.get(0));
    }

    /**
     * Verify four-element [0, 255, 0, 255] reverse, first element becomes 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4300
     * @tc.name testUint8ArrayReverse043
     * @tc.desc Verify four-element [0, 255, 0, 255] reverse, first element becomes 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse043() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 0, 255});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify four-element [1, 3, 5, 7] reverse, first element becomes 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4400
     * @tc.name testUint8ArrayReverse044
     * @tc.desc Verify four-element [1, 3, 5, 7] reverse, first element becomes 7]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse044() {
    Uint8Array arr = new Uint8Array(new int[] {1, 3, 5, 7});
    Uint8Array r = arr.reverse();
    assertEqual(7, r.get(0));
    }

    /**
     * Verify four-element [2, 4, 6, 8] reverse, first element becomes 8]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4500
     * @tc.name testUint8ArrayReverse045
     * @tc.desc Verify four-element [2, 4, 6, 8] reverse, first element becomes 8]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse045() {
    Uint8Array arr = new Uint8Array(new int[] {2, 4, 6, 8});
    Uint8Array r = arr.reverse();
    assertEqual(8, r.get(0));
    }

    /**
     * Verify five-element [1, 2, 3, 4, 5] reverse, first element becomes 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4600
     * @tc.name testUint8ArrayReverse046
     * @tc.desc Verify five-element [1, 2, 3, 4, 5] reverse, first element becomes 5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse046() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = arr.reverse();
    assertEqual(5, r.get(0));
    }

    /**
     * Verify three-element [42, 42, 42] reverse, first element becomes 42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4700
     * @tc.name testUint8ArrayReverse047
     * @tc.desc Verify three-element [42, 42, 42] reverse, first element becomes 42]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse047() {
    Uint8Array arr = new Uint8Array(new int[] {42, 42, 42});
    Uint8Array r = arr.reverse();
    assertEqual(42, r.get(0));
    }

    /**
     * Verify four-element [0, 0, 0, 0] reverse, first element becomes 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4800
     * @tc.name testUint8ArrayReverse048
     * @tc.desc Verify four-element [0, 0, 0, 0] reverse, first element becomes 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse048() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 0});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify four-element [255, 255, 255, 255] reverse, first element becomes 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_4900
     * @tc.name testUint8ArrayReverse049
     * @tc.desc Verify four-element [255, 255, 255, 255] reverse, first element becomes 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse049() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255, 255});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify three-element [1, 2, 1] reverse, first element becomes 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5000
     * @tc.name testUint8ArrayReverse050
     * @tc.desc Verify three-element [1, 2, 1] reverse, first element becomes 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse050() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 1});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify three-element [255, 128, 255] reverse, first element becomes 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5100
     * @tc.name testUint8ArrayReverse051
     * @tc.desc Verify three-element [255, 128, 255] reverse, first element becomes 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse051() {
    Uint8Array arr = new Uint8Array(new int[] {255, 128, 255});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify hex literal [[0xFF, 0x80, 0x00]] reverse, first element becomes 0x00
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5200
     * @tc.name testUint8ArrayReverse052
     * @tc.desc Verify hex literal [[0xFF, 0x80, 0x00]] reverse, first element becomes 0x00
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse052() {
    Uint8Array arr = new Uint8Array(new int[] {0xFF, 0x80, 0x00});
    Uint8Array r = arr.reverse();
    assertEqual(0x00, r.get(0));
    }

    /**
     * Verify hex literal [[0xFF, 0x00, 0xFF]] reverse, first element becomes 0xFF
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5300
     * @tc.name testUint8ArrayReverse053
     * @tc.desc Verify hex literal [[0xFF, 0x00, 0xFF]] reverse, first element becomes 0xFF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse053() {
    Uint8Array arr = new Uint8Array(new int[] {0xFF, 0x00, 0xFF});
    Uint8Array r = arr.reverse();
    assertEqual(0xFF, r.get(0));
    }

    /**
     * Verify octal literal [[0o377, 0o200, 0o000]] reverse, first element becomes 0o000
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5400
     * @tc.name testUint8ArrayReverse054
     * @tc.desc Verify octal literal [[0o377, 0o200, 0o000]] reverse, first element becomes 0o000
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse054() {
    Uint8Array arr = new Uint8Array(new int[] {0377, 0200, 0000});
    Uint8Array r = arr.reverse();
    assertEqual(0000, r.get(0));
    }

    /**
     * Verify binary literal [[0b00000000, 0b11111111]] reverse, first element becomes 0b11111111
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5500
     * @tc.name testUint8ArrayReverse055
     * @tc.desc Verify binary literal [[0b00000000, 0b11111111]] reverse, first element becomes 0b11111111
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse055() {
    Uint8Array arr = new Uint8Array(new int[] {0b00000000, 0b11111111});
    Uint8Array r = arr.reverse();
    assertEqual(0b11111111, r.get(0));
    }

    /**
     * Verify binary literal [[0b10101010, 0b01010101]] reverse, first element becomes 0b01010101
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5600
     * @tc.name testUint8ArrayReverse056
     * @tc.desc Verify binary literal [[0b10101010, 0b01010101]] reverse, first element becomes 0b01010101
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse056() {
    Uint8Array arr = new Uint8Array(new int[] {0b10101010, 0b01010101});
    Uint8Array r = arr.reverse();
    assertEqual(0b01010101, r.get(0));
    }

    /**
     * Verify scientific notation [[1e0, 2e0, 3e0]] reverse, first element becomes 3e0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5700
     * @tc.name testUint8ArrayReverse057
     * @tc.desc Verify scientific notation [[1e0, 2e0, 3e0]] reverse, first element becomes 3e0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse057() {
    Uint8Array arr = new Uint8Array(new double[] {1e0, 2e0, 3e0});
    Uint8Array r = arr.reverse();
    assertEqual(3e0, r.get(0));
    }

    /**
     * Verify five-element [0, 1, 2, 3, 4] reverse, first element becomes 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5800
     * @tc.name testUint8ArrayReverse058
     * @tc.desc Verify five-element [0, 1, 2, 3, 4] reverse, first element becomes 4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse058() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4});
    Uint8Array r = arr.reverse();
    assertEqual(4, r.get(0));
    }

    /**
     * Verify six-element [250, 251, 252, 253, 254, 255] reverse, first element becomes 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_5900
     * @tc.name testUint8ArrayReverse059
     * @tc.desc Verify six-element [250, 251, 252, 253, 254, 255] reverse, first element becomes 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse059() {
    Uint8Array arr = new Uint8Array(new int[] {250, 251, 252, 253, 254, 255});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify four-element [0, 0, 0, 1] reverse, first element becomes 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6000
     * @tc.name testUint8ArrayReverse060
     * @tc.desc Verify four-element [0, 0, 0, 1] reverse, first element becomes 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse060() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 1});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify four-element [255, 0, 0, 0] reverse, first element becomes 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6100
     * @tc.name testUint8ArrayReverse061
     * @tc.desc Verify four-element [255, 0, 0, 0] reverse, first element becomes 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse061() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0, 0, 0});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(3));
    }

    /**
     * Verify three-element [0, 255, 0] reverse, first element becomes 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6200
     * @tc.name testUint8ArrayReverse062
     * @tc.desc Verify three-element [0, 255, 0] reverse, first element becomes 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse062() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 0});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify three-element [5, 10, 15] reverse, first element becomes 15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6300
     * @tc.name testUint8ArrayReverse063
     * @tc.desc Verify three-element [5, 10, 15] reverse, first element becomes 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse063() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    Uint8Array r = arr.reverse();
    assertEqual(15, r.get(0));
    }

    /**
     * Verify Uint8Array from Uint8Array([55, 66, 77, 88]) reverse, first element becomes 88
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6400
     * @tc.name testUint8ArrayReverse064
     * @tc.desc Verify Uint8Array from Uint8Array([55, 66, 77, 88]) reverse, first element becomes 88
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse064() {
    Uint8Array src = Uint8Array.of(55, 66, 77, 88);
    Uint8Array arr = new Uint8Array(src);
    Uint8Array r = arr.reverse();
    assertEqual(88, r.get(0));
    }

    /**
     * Verify three-element [from([99, 88, 77])] reverse, first element becomes 77])
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6500
     * @tc.name testUint8ArrayReverse065
     * @tc.desc Verify three-element [from([99, 88, 77])] reverse, first element becomes 77])
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse065() {
    Uint8Array arr = Uint8Array.from(new int[] {99, 88, 77});
    Uint8Array r = arr.reverse();
    assertEqual(77, r.get(0));
    }

    /**
     * Verify two-element [200, 100] reverse, first element becomes 100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6600
     * @tc.name testUint8ArrayReverse066
     * @tc.desc Verify two-element [200, 100] reverse, first element becomes 100]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse066() {
    Uint8Array arr = new Uint8Array(new int[] {200, 100});
    Uint8Array r = arr.reverse();
    assertEqual(100, r.get(0));
    }

    /**
     * Verify three-element [250, 5, 250] reverse, first element becomes 250]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6700
     * @tc.name testUint8ArrayReverse067
     * @tc.desc Verify three-element [250, 5, 250] reverse, first element becomes 250]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse067() {
    Uint8Array arr = new Uint8Array(new int[] {250, 5, 250});
    Uint8Array r = arr.reverse();
    assertEqual(250, r.get(0));
    }

    /**
     * Verify element 256 (overflow uint8 max) stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6800
     * @tc.name testUint8ArrayReverse068
     * @tc.desc Verify element 256 (overflow uint8 max) stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse068() {
    Uint8Array arr = new Uint8Array(new int[] {256});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element 0x100 (256 hex) stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_6900
     * @tc.name testUint8ArrayReverse069
     * @tc.desc Verify element 0x100 (256 hex) stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse069() {
    Uint8Array arr = new Uint8Array(new int[] {0x100});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element -1 (negative wrap) stored as 255, still 255 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7000
     * @tc.name testUint8ArrayReverse070
     * @tc.desc Verify element -1 (negative wrap) stored as 255, still 255 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse070() {
    Uint8Array arr = new Uint8Array(new int[] {-1});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify element -2 (negative wrap) stored as 254, still 254 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7100
     * @tc.name testUint8ArrayReverse071
     * @tc.desc Verify element -2 (negative wrap) stored as 254, still 254 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse071() {
    Uint8Array arr = new Uint8Array(new int[] {-2});
    Uint8Array r = arr.reverse();
    assertEqual(254, r.get(0));
    }

    /**
     * Verify element -128 (negative wrap) stored as 128, still 128 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7200
     * @tc.name testUint8ArrayReverse072
     * @tc.desc Verify element -128 (negative wrap) stored as 128, still 128 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse072() {
    Uint8Array arr = new Uint8Array(new int[] {-128});
    Uint8Array r = arr.reverse();
    assertEqual(128, r.get(0));
    }

    /**
     * Verify element -255 (negative wrap) stored as 1, still 1 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7300
     * @tc.name testUint8ArrayReverse073
     * @tc.desc Verify element -255 (negative wrap) stored as 1, still 1 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse073() {
    Uint8Array arr = new Uint8Array(new int[] {-255});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify element -256 (negative wrap full cycle) stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7400
     * @tc.name testUint8ArrayReverse074
     * @tc.desc Verify element -256 (negative wrap full cycle) stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse074() {
    Uint8Array arr = new Uint8Array(new int[] {-256});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element 3.14 (float truncation) stored as 3, still 3 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7500
     * @tc.name testUint8ArrayReverse075
     * @tc.desc Verify element 3.14 (float truncation) stored as 3, still 3 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse075() {
    Uint8Array arr = new Uint8Array(new double[] {3.14});
    Uint8Array r = arr.reverse();
    assertEqual(3, r.get(0));
    }

    /**
     * Verify element 2.999 (float truncate toward zero) stored as 2, still 2 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7600
     * @tc.name testUint8ArrayReverse076
     * @tc.desc Verify element 2.999 (float truncate toward zero) stored as 2, still 2 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse076() {
    Uint8Array arr = new Uint8Array(new double[] {2.999});
    Uint8Array r = arr.reverse();
    assertEqual(2, r.get(0));
    }

    /**
     * Verify element NaN stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7700
     * @tc.name testUint8ArrayReverse077
     * @tc.desc Verify element NaN stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse077() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element Infinity stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7800
     * @tc.name testUint8ArrayReverse078
     * @tc.desc Verify element Infinity stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse078() {
    Uint8Array arr = new Uint8Array(new double[] {Double.POSITIVE_INFINITY});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element -Infinity stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_7900
     * @tc.name testUint8ArrayReverse079
     * @tc.desc Verify element -Infinity stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse079() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NEGATIVE_INFINITY});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element 0.5 (float <1 truncation) stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8000
     * @tc.name testUint8ArrayReverse080
     * @tc.desc Verify element 0.5 (float <1 truncation) stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse080() {
    Uint8Array arr = new Uint8Array(new double[] {0.5});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element 1.5 (float truncate toward zero) stored as 1, still 1 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8100
     * @tc.name testUint8ArrayReverse081
     * @tc.desc Verify element 1.5 (float truncate toward zero) stored as 1, still 1 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse081() {
    Uint8Array arr = new Uint8Array(new double[] {1.5});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify element 257 (255+2) stored as 1, still 1 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8200
     * @tc.name testUint8ArrayReverse082
     * @tc.desc Verify element 257 (255+2) stored as 1, still 1 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse082() {
    Uint8Array arr = new Uint8Array(new int[] {257});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify element 511 (0x1FF) stored as 255, still 255 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8300
     * @tc.name testUint8ArrayReverse083
     * @tc.desc Verify element 511 (0x1FF) stored as 255, still 255 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse083() {
    Uint8Array arr = new Uint8Array(new int[] {511});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify element 512 (0x200) stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8400
     * @tc.name testUint8ArrayReverse084
     * @tc.desc Verify element 512 (0x200) stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse084() {
    Uint8Array arr = new Uint8Array(new int[] {512});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify dual overflow [256, -1] stored as [0, 255], reverse first element becomes 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8500
     * @tc.name testUint8ArrayReverse085
     * @tc.desc Verify dual overflow [256, -1] stored as [0, 255], reverse first element becomes 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse085() {
    Uint8Array arr = new Uint8Array(new int[] {256, -1});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify dual float [3.14, 2.71] stored as [3, 2], reverse first element becomes 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8600
     * @tc.name testUint8ArrayReverse086
     * @tc.desc Verify dual float [3.14, 2.71] stored as [3, 2], reverse first element becomes 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse086() {
    Uint8Array arr = new Uint8Array(new double[] {3.14, 2.71});
    Uint8Array r = arr.reverse();
    assertEqual(2, r.get(0));
    }

    /**
     * Verify large number 1e10 stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8700
     * @tc.name testUint8ArrayReverse087
     * @tc.desc Verify large number 1e10 stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse087() {
    Uint8Array arr = new Uint8Array(new double[] {1e10});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element 0x1FF stored as 255, still 255 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8800
     * @tc.name testUint8ArrayReverse088
     * @tc.desc Verify element 0x1FF stored as 255, still 255 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse088() {
    Uint8Array arr = new Uint8Array(new int[] {0x1FF});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify element true stored as 1, still 1 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_8900
     * @tc.name testUint8ArrayReverse089
     * @tc.desc Verify element true stored as 1, still 1 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse089() {
    Uint8Array arr = new Uint8Array(new int[] {1});
    Uint8Array r = arr.reverse();
    assertEqual(1, r.get(0));
    }

    /**
     * Verify element false stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9000
     * @tc.name testUint8ArrayReverse090
     * @tc.desc Verify element false stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse090() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element +0 and -0 both stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9100
     * @tc.name testUint8ArrayReverse091
     * @tc.desc Verify element +0 and -0 both stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse091() {
    Uint8Array arr = new Uint8Array(new int[] {+0, -0});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify element -3.14 truncate to -3, mod 256 to 253, still 253 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9200
     * @tc.name testUint8ArrayReverse092
     * @tc.desc Verify element -3.14 truncate to -3, mod 256 to 253, still 253 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse092() {
    Uint8Array arr = new Uint8Array(new double[] {-3.14});
    Uint8Array r = arr.reverse();
    assertEqual(253, r.get(0));
    }

    /**
     * Verify element -257 stored as 255, still 255 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9300
     * @tc.name testUint8ArrayReverse093
     * @tc.desc Verify element -257 stored as 255, still 255 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse093() {
    Uint8Array arr = new Uint8Array(new int[] {-257});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify element -258 stored as 254, still 254 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9400
     * @tc.name testUint8ArrayReverse094
     * @tc.desc Verify element -258 stored as 254, still 254 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse094() {
    Uint8Array arr = new Uint8Array(new int[] {-258});
    Uint8Array r = arr.reverse();
    assertEqual(254, r.get(0));
    }

    /**
     * Verify element 65535 (0xFFFF) stored as 255, still 255 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9500
     * @tc.name testUint8ArrayReverse095
     * @tc.desc Verify element 65535 (0xFFFF) stored as 255, still 255 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse095() {
    Uint8Array arr = new Uint8Array(new int[] {65535});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }

    /**
     * Verify element 65536 (0x10000) stored as 0, still 0 after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9600
     * @tc.name testUint8ArrayReverse096
     * @tc.desc Verify element 65536 (0x10000) stored as 0, still 0 after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse096() {
    Uint8Array arr = new Uint8Array(new int[] {65536});
    Uint8Array r = arr.reverse();
    assertEqual(0, r.get(0));
    }

    /**
     * Verify multi-overflow [0x100, 0x1FF] stored as [0, 255], reverse first element becomes 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REVERSE01_9700
     * @tc.name testUint8ArrayReverse097
     * @tc.desc Verify multi-overflow [0x100, 0x1FF] stored as [0, 255], reverse first element becomes 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReverse097() {
    Uint8Array arr = new Uint8Array(new int[] {0x100, 0x1FF});
    Uint8Array r = arr.reverse();
    assertEqual(255, r.get(0));
    }
}
