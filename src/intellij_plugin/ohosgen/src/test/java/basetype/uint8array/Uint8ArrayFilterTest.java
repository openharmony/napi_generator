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
 * Uint8ArrayFilterTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFilterTest extends BasTest {
    /**
     * Verify filter with value greater than 0 keeps all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0010
     * @tc.name testUint8ArrayFilter001
     * @tc.desc Verify filter with value greater than 0 keeps all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter001() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with value greater than 3 returns [4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0020
     * @tc.name testUint8ArrayFilter002
     * @tc.desc Verify filter with value greater than 3 returns [4, 5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter002() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v) -> v > 3);
    assertEqual(2, result.length());
    assertEqualInt(4, result.at(0));
    assertEqualInt(5, result.at(1));
    }

    /**
     * Verify filter with value greater than 10 returns empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0030
     * @tc.name testUint8ArrayFilter003
     * @tc.desc Verify filter with value greater than 10 returns empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter003() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v) -> v > 10);
    assertEqual(0, result.length());
    }

    /**
     * Verify filter with value greater than or equal to 0 returns all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0040
     * @tc.name testUint8ArrayFilter004
     * @tc.desc Verify filter with value greater than or equal to 0 returns all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter004() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v) -> v >= 0);
    assertEqual(5, result.length());
    }

    /**
     * Verify filter with value greater than or equal to 128 returns [128, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0050
     * @tc.name testUint8ArrayFilter005
     * @tc.desc Verify filter with value greater than or equal to 128 returns [128, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter005() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    Uint8Array result = arr.filter((v) -> v >= 128);
    assertEqual(2, result.length());
    assertEqualInt(128, result.at(0));
    assertEqualInt(255, result.at(1));
    }

    /**
     * Verify filter with value less than 128 returns [0, 127]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0060
     * @tc.name testUint8ArrayFilter006
     * @tc.desc Verify filter with value less than 128 returns [0, 127]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter006() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    Uint8Array result = arr.filter((v) -> v < 128);
    assertEqual(2, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(127, result.at(1));
    }

    /**
     * Verify filter with value equal to 128 returns [128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0070
     * @tc.name testUint8ArrayFilter007
     * @tc.desc Verify filter with value equal to 128 returns [128]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter007() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    Uint8Array result = arr.filter((v) -> v == 128);
    assertEqual(1, result.length());
    assertEqualInt(128, result.at(0));
    }

    /**
     * Verify filter with value equal to 0 returns [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0080
     * @tc.name testUint8ArrayFilter008
     * @tc.desc Verify filter with value equal to 0 returns [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter008() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    Uint8Array result = arr.filter((v) -> v == 0);
    assertEqual(1, result.length());
    assertEqualInt(0, result.at(0));
    }

    /**
     * Verify filter with value equal to 255 returns [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0090
     * @tc.name testUint8ArrayFilter009
     * @tc.desc Verify filter with value equal to 255 returns [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter009() {
    Uint8Array arr = new Uint8Array(new int[] {0, 127, 128, 255});
    Uint8Array result = arr.filter((v) -> v == 255);
    assertEqual(1, result.length());
    assertEqualInt(255, result.at(0));
    }

    /**
     * Verify single element [5] filter equal to 5 returns [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0100
     * @tc.name testUint8ArrayFilter010
     * @tc.desc Verify single element [5] filter equal to 5 returns [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter010() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    Uint8Array result = arr.filter((v) -> v == 5);
    assertEqual(1, result.length());
    assertEqualInt(5, result.at(0));
    }

    /**
     * Verify single element [5] filter equal to 0 returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0110
     * @tc.name testUint8ArrayFilter011
     * @tc.desc Verify single element [5] filter equal to 0 returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter011() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    Uint8Array result = arr.filter((v) -> v == 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify empty array filter returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0120
     * @tc.name testUint8ArrayFilter012
     * @tc.desc Verify empty array filter returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter012() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify all-zero array [0, 0, 0] filter equal to 0 returns all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0130
     * @tc.name testUint8ArrayFilter013
     * @tc.desc Verify all-zero array [0, 0, 0] filter equal to 0 returns all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter013() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    Uint8Array result = arr.filter((v) -> v == 0);
    assertEqual(3, result.length());
    }

    /**
     * Verify all-zero array [0, 0, 0] filter not equal to 0 returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0140
     * @tc.name testUint8ArrayFilter014
     * @tc.desc Verify all-zero array [0, 0, 0] filter not equal to 0 returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter014() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    Uint8Array result = arr.filter((v) -> v != 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify duplicate array [100, 200, 100, 200] filter equal to 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0150
     * @tc.name testUint8ArrayFilter015
     * @tc.desc Verify duplicate array [100, 200, 100, 200] filter equal to 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter015() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 100, 200});
    Uint8Array result = arr.filter((v) -> v == 100);
    assertEqual(2, result.length());
    assertEqualInt(100, result.at(0));
    assertEqualInt(100, result.at(1));
    }

    /**
     * Verify duplicate array [100, 200, 100, 200] filter equal to 200
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0160
     * @tc.name testUint8ArrayFilter016
     * @tc.desc Verify duplicate array [100, 200, 100, 200] filter equal to 200
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter016() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 100, 200});
    Uint8Array result = arr.filter((v) -> v == 200);
    assertEqual(2, result.length());
    assertEqualInt(200, result.at(0));
    assertEqualInt(200, result.at(1));
    }

    /**
     * Verify boundary array [0, 1, 254, 255] filter > 254 returns [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0170
     * @tc.name testUint8ArrayFilter017
     * @tc.desc Verify boundary array [0, 1, 254, 255] filter > 254 returns [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter017() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v > 254);
    assertEqual(1, result.length());
    assertEqualInt(255, result.at(0));
    }

    /**
     * Verify boundary array [0, 1, 254, 255] filter < 1 returns [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0180
     * @tc.name testUint8ArrayFilter018
     * @tc.desc Verify boundary array [0, 1, 254, 255] filter < 1 returns [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter018() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v < 1);
    assertEqual(1, result.length());
    assertEqualInt(0, result.at(0));
    }

    /**
     * Verify boundary array filter >= 254 returns [254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0190
     * @tc.name testUint8ArrayFilter019
     * @tc.desc Verify boundary array filter >= 254 returns [254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter019() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v >= 254);
    assertEqual(2, result.length());
    assertEqualInt(254, result.at(0));
    assertEqualInt(255, result.at(1));
    }

    /**
     * Verify boundary array filter <= 1 returns [0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0200
     * @tc.name testUint8ArrayFilter020
     * @tc.desc Verify boundary array filter <= 1 returns [0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter020() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v <= 1);
    assertEqual(2, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    }

    /**
     * Verify boundary array filter not equal 0 returns [1, 254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0210
     * @tc.name testUint8ArrayFilter021
     * @tc.desc Verify boundary array filter not equal 0 returns [1, 254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter021() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v != 0);
    assertEqual(3, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(254, result.at(1));
    assertEqualInt(255, result.at(2));
    }

    /**
     * Verify boundary array filter not equal 255 returns [0, 1, 254]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0220
     * @tc.name testUint8ArrayFilter022
     * @tc.desc Verify boundary array filter not equal 255 returns [0, 1, 254]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter022() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v != 255);
    assertEqual(3, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    assertEqualInt(254, result.at(2));
    }

    /**
     * Verify boundary array filter > 127 returns [254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0230
     * @tc.name testUint8ArrayFilter023
     * @tc.desc Verify boundary array filter > 127 returns [254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter023() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v > 127);
    assertEqual(2, result.length());
    assertEqualInt(254, result.at(0));
    assertEqualInt(255, result.at(1));
    }

    /**
     * Verify boundary array filter < 128 returns [0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0240
     * @tc.name testUint8ArrayFilter024
     * @tc.desc Verify boundary array filter < 128 returns [0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter024() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v < 128);
    assertEqual(2, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    }

    /**
     * Verify boundary array filter >= 128 returns [254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0250
     * @tc.name testUint8ArrayFilter025
     * @tc.desc Verify boundary array filter >= 128 returns [254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter025() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v >= 128);
    assertEqual(2, result.length());
    assertEqualInt(254, result.at(0));
    assertEqualInt(255, result.at(1));
    }

    /**
     * Verify boundary array filter <= 127 returns [0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0260
     * @tc.name testUint8ArrayFilter026
     * @tc.desc Verify boundary array filter <= 127 returns [0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter026() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v <= 127);
    assertEqual(2, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    }

    /**
     * Verify boundary array filter > 0 returns [1, 254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0270
     * @tc.name testUint8ArrayFilter027
     * @tc.desc Verify boundary array filter > 0 returns [1, 254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter027() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(3, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(254, result.at(1));
    assertEqualInt(255, result.at(2));
    }

    /**
     * Verify boundary array filter < 255 returns [0, 1, 254]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0280
     * @tc.name testUint8ArrayFilter028
     * @tc.desc Verify boundary array filter < 255 returns [0, 1, 254]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter028() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v < 255);
    assertEqual(3, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    assertEqualInt(254, result.at(2));
    }

    /**
     * Verify boundary array filter >= 0 returns all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0290
     * @tc.name testUint8ArrayFilter029
     * @tc.desc Verify boundary array filter >= 0 returns all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter029() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v >= 0);
    assertEqual(4, result.length());
    }

    /**
     * Verify boundary array filter <= 255 returns all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0300
     * @tc.name testUint8ArrayFilter030
     * @tc.desc Verify boundary array filter <= 255 returns all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter030() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v <= 255);
    assertEqual(4, result.length());
    }

    /**
     * Verify boundary array filter > 255 returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0310
     * @tc.name testUint8ArrayFilter031
     * @tc.desc Verify boundary array filter > 255 returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter031() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v > 255);
    assertEqual(0, result.length());
    }

    /**
     * Verify boundary array filter < 0 returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0320
     * @tc.name testUint8ArrayFilter032
     * @tc.desc Verify boundary array filter < 0 returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter032() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v < 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify boundary array filter >= 255 returns [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0330
     * @tc.name testUint8ArrayFilter033
     * @tc.desc Verify boundary array filter >= 255 returns [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter033() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v >= 255);
    assertEqual(1, result.length());
    assertEqualInt(255, result.at(0));
    }

    /**
     * Verify boundary array filter <= 0 returns [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0340
     * @tc.name testUint8ArrayFilter034
     * @tc.desc Verify boundary array filter <= 0 returns [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter034() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v <= 0);
    assertEqual(1, result.length());
    assertEqualInt(0, result.at(0));
    }

    /**
     * Verify boundary array filter > 1 returns [254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0350
     * @tc.name testUint8ArrayFilter035
     * @tc.desc Verify boundary array filter > 1 returns [254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter035() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v > 1);
    assertEqual(2, result.length());
    assertEqualInt(254, result.at(0));
    assertEqualInt(255, result.at(1));
    }

    /**
     * Verify boundary array filter < 254 returns [0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0360
     * @tc.name testUint8ArrayFilter036
     * @tc.desc Verify boundary array filter < 254 returns [0, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter036() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v < 254);
    assertEqual(2, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    }

    /**
     * Verify boundary array filter >= 1 returns [1, 254, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0370
     * @tc.name testUint8ArrayFilter037
     * @tc.desc Verify boundary array filter >= 1 returns [1, 254, 255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter037() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v >= 1);
    assertEqual(3, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(254, result.at(1));
    assertEqualInt(255, result.at(2));
    }

    /**
     * Verify boundary array filter <= 254 returns [0, 1, 254]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0380
     * @tc.name testUint8ArrayFilter038
     * @tc.desc Verify boundary array filter <= 254 returns [0, 1, 254]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter038() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 254, 255});
    Uint8Array result = arr.filter((v) -> v <= 254);
    assertEqual(3, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(1, result.at(1));
    assertEqualInt(254, result.at(2));
    }

    /**
     * Verify filter with index equal to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0390
     * @tc.name testUint8ArrayFilter039
     * @tc.desc Verify filter with index equal to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i == 0);
    assertEqual(1, result.length());
    assertEqualInt(10, result.at(0));
    }

    /**
     * Verify filter with index equal to 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0400
     * @tc.name testUint8ArrayFilter040
     * @tc.desc Verify filter with index equal to 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter040() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i == 2);
    assertEqual(1, result.length());
    assertEqualInt(30, result.at(0));
    }

    /**
     * Verify filter with index > 1 returns last two
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0410
     * @tc.name testUint8ArrayFilter041
     * @tc.desc Verify filter with index > 1 returns last two
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter041() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i > 1);
    assertEqual(2, result.length());
    assertEqualInt(30, result.at(0));
    assertEqualInt(40, result.at(1));
    }

    /**
     * Verify filter with index < 2 returns first two
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0420
     * @tc.name testUint8ArrayFilter042
     * @tc.desc Verify filter with index < 2 returns first two
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter042() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i < 2);
    assertEqual(2, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    }

    /**
     * Verify filter with index >= 3 returns last
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0430
     * @tc.name testUint8ArrayFilter043
     * @tc.desc Verify filter with index >= 3 returns last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i >= 3);
    assertEqual(1, result.length());
    assertEqualInt(40, result.at(0));
    }

    /**
     * Verify filter with index <= 1 returns first two
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0440
     * @tc.name testUint8ArrayFilter044
     * @tc.desc Verify filter with index <= 1 returns first two
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter044() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i <= 1);
    assertEqual(2, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    }

    /**
     * Verify filter with index !== 0 returns last three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0450
     * @tc.name testUint8ArrayFilter045
     * @tc.desc Verify filter with index !== 0 returns last three
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i != 0);
    assertEqual(3, result.length());
    assertEqualInt(20, result.at(0));
    assertEqualInt(30, result.at(1));
    assertEqualInt(40, result.at(2));
    }

    /**
     * Verify filter with index !== 3 returns first three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0460
     * @tc.name testUint8ArrayFilter046
     * @tc.desc Verify filter with index !== 3 returns first three
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter046() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i != 3);
    assertEqual(3, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    assertEqualInt(30, result.at(2));
    }

    /**
     * Verify filter with index > 2 returns last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0470
     * @tc.name testUint8ArrayFilter047
     * @tc.desc Verify filter with index > 2 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i > 2);
    assertEqual(1, result.length());
    assertEqualInt(40, result.at(0));
    }

    /**
     * Verify filter with index < 3 returns first three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0480
     * @tc.name testUint8ArrayFilter048
     * @tc.desc Verify filter with index < 3 returns first three
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter048() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i < 3);
    assertEqual(3, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    assertEqualInt(30, result.at(2));
    }

    /**
     * Verify filter with index >= 2 returns last two
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0490
     * @tc.name testUint8ArrayFilter049
     * @tc.desc Verify filter with index >= 2 returns last two
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter049() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i >= 2);
    assertEqual(2, result.length());
    assertEqualInt(30, result.at(0));
    assertEqualInt(40, result.at(1));
    }

    /**
     * Verify filter with index <= 2 returns first three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0500
     * @tc.name testUint8ArrayFilter050
     * @tc.desc Verify filter with index <= 2 returns first three
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter050() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i <= 2);
    assertEqual(3, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    assertEqualInt(30, result.at(2));
    }

    /**
     * Verify filter with index !== 1 returns three elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0510
     * @tc.name testUint8ArrayFilter051
     * @tc.desc Verify filter with index !== 1 returns three elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter051() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i != 1);
    assertEqual(3, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(30, result.at(1));
    assertEqualInt(40, result.at(2));
    }

    /**
     * Verify filter with index !== 2 returns three elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0520
     * @tc.name testUint8ArrayFilter052
     * @tc.desc Verify filter with index !== 2 returns three elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter052() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i != 2);
    assertEqual(3, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    assertEqualInt(40, result.at(2));
    }

    /**
     * Verify filter with index > 0 returns last three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0530
     * @tc.name testUint8ArrayFilter053
     * @tc.desc Verify filter with index > 0 returns last three
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter053() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i > 0);
    assertEqual(3, result.length());
    assertEqualInt(20, result.at(0));
    assertEqualInt(30, result.at(1));
    assertEqualInt(40, result.at(2));
    }

    /**
     * Verify filter with index < 1 returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0540
     * @tc.name testUint8ArrayFilter054
     * @tc.desc Verify filter with index < 1 returns first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i < 1);
    assertEqual(1, result.length());
    assertEqualInt(10, result.at(0));
    }

    /**
     * Verify filter with index >= 1 returns last three
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0550
     * @tc.name testUint8ArrayFilter055
     * @tc.desc Verify filter with index >= 1 returns last three
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter055() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i >= 1);
    assertEqual(3, result.length());
    assertEqualInt(20, result.at(0));
    assertEqualInt(30, result.at(1));
    assertEqualInt(40, result.at(2));
    }

    /**
     * Verify filter with index <= 0 returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0560
     * @tc.name testUint8ArrayFilter056
     * @tc.desc Verify filter with index <= 0 returns first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter056() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i <= 0);
    assertEqual(1, result.length());
    assertEqualInt(10, result.at(0));
    }

    /**
     * Verify filter with even index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0570
     * @tc.name testUint8ArrayFilter057
     * @tc.desc Verify filter with even index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter057() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i % 2 == 0);
    assertEqual(2, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(30, result.at(1));
    }

    /**
     * Verify filter with odd index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0580
     * @tc.name testUint8ArrayFilter058
     * @tc.desc Verify filter with odd index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter058() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> i % 2 == 1);
    assertEqual(2, result.length());
    assertEqualInt(20, result.at(0));
    assertEqualInt(40, result.at(1));
    }

    /**
     * Verify filter with first index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0590
     * @tc.name testUint8ArrayFilter059
     * @tc.desc Verify filter with first index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter059() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20});
    Uint8Array result = arr.filter((v, i) -> i == 0);
    assertEqual(1, result.length());
    assertEqualInt(5, result.at(0));
    }

    /**
     * Verify filter with last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0600
     * @tc.name testUint8ArrayFilter060
     * @tc.desc Verify filter with last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter060() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20});
    Uint8Array result = arr.filter((v, i) -> i == 3);
    assertEqual(1, result.length());
    assertEqualInt(20, result.at(0));
    }

    /**
     * Verify all-zero filter with even index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0610
     * @tc.name testUint8ArrayFilter061
     * @tc.desc Verify all-zero filter with even index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter061() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 0});
    Uint8Array result = arr.filter((v, i) -> i % 2 == 0);
    assertEqual(2, result.length());
    }

    /**
     * Verify all-zero filter with odd index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0620
     * @tc.name testUint8ArrayFilter062
     * @tc.desc Verify all-zero filter with odd index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter062() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 0});
    Uint8Array result = arr.filter((v, i) -> i % 2 == 1);
    assertEqual(2, result.length());
    }

    /**
     * Verify filter with index >= 3 on 5-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0630
     * @tc.name testUint8ArrayFilter063
     * @tc.desc Verify filter with index >= 3 on 5-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter063() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> i >= 3);
    assertEqual(2, result.length());
    assertEqualInt(4, result.at(0));
    assertEqualInt(5, result.at(1));
    }

    /**
     * Verify filter with index <= 1 on 5-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0640
     * @tc.name testUint8ArrayFilter064
     * @tc.desc Verify filter with index <= 1 on 5-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter064() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> i <= 1);
    assertEqual(2, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(2, result.at(1));
    }

    /**
     * Verify filter with index > 4 returns empty
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0650
     * @tc.name testUint8ArrayFilter065
     * @tc.desc Verify filter with index > 4 returns empty
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter065() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> i > 4);
    assertEqual(0, result.length());
    }

    /**
     * Verify filter with index !== 1 on 3-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0660
     * @tc.name testUint8ArrayFilter066
     * @tc.desc Verify filter with index !== 1 on 3-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter066() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v, i) -> i != 1);
    assertEqual(2, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(3, result.at(1));
    }

    /**
     * Verify filter with v > 2 and i < 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0670
     * @tc.name testUint8ArrayFilter067
     * @tc.desc Verify filter with v > 2 and i < 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter067() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v > 2 && i < 3);
    assertEqual(1, result.length());
    assertEqualInt(3, result.at(0));
    }

    /**
     * Verify filter with v < 4 and i > 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0680
     * @tc.name testUint8ArrayFilter068
     * @tc.desc Verify filter with v < 4 and i > 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter068() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v < 4 && i > 1);
    assertEqual(1, result.length());
    assertEqualInt(3, result.at(0));
    }

    /**
     * Verify filter with v > 1 and i !== 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0690
     * @tc.name testUint8ArrayFilter069
     * @tc.desc Verify filter with v > 1 and i !== 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter069() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v > 1 && i != 2);
    assertEqual(3, result.length());
    assertEqualInt(2, result.at(0));
    assertEqualInt(4, result.at(1));
    assertEqualInt(5, result.at(2));
    }

    /**
     * Verify filter with v < 5 and i > 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0700
     * @tc.name testUint8ArrayFilter070
     * @tc.desc Verify filter with v < 5 and i > 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter070() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v < 5 && i > 0);
    assertEqual(3, result.length());
    assertEqualInt(2, result.at(0));
    assertEqualInt(3, result.at(1));
    assertEqualInt(4, result.at(2));
    }

    /**
     * Verify filter with v > 0 and i < 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0710
     * @tc.name testUint8ArrayFilter071
     * @tc.desc Verify filter with v > 0 and i < 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter071() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v > 0 && i < 4);
    assertEqual(4, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(2, result.at(1));
    assertEqualInt(3, result.at(2));
    assertEqualInt(4, result.at(3));
    }

    /**
     * Verify filter with v > 2 and i < 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0720
     * @tc.name testUint8ArrayFilter072
     * @tc.desc Verify filter with v > 2 and i < 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter072() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v > 2 && i < 4);
    assertEqual(2, result.length());
    assertEqualInt(3, result.at(0));
    assertEqualInt(4, result.at(1));
    }

    /**
     * Verify filter with v < 4 and i !== 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0730
     * @tc.name testUint8ArrayFilter073
     * @tc.desc Verify filter with v < 4 and i !== 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter073() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v < 4 && i != 0);
    assertEqual(2, result.length());
    assertEqualInt(2, result.at(0));
    assertEqualInt(3, result.at(1));
    }

    /**
     * Verify filter with v equals i * 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0740
     * @tc.name testUint8ArrayFilter074
     * @tc.desc Verify filter with v equals i * 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter074() {
    Uint8Array arr = new Uint8Array(new int[] {0, 10, 20});
    Uint8Array result = arr.filter((v, i) -> v == i * 10);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v > i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0750
     * @tc.name testUint8ArrayFilter075
     * @tc.desc Verify filter with v > i
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter075() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v, i) -> v > i);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v equals i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0760
     * @tc.name testUint8ArrayFilter076
     * @tc.desc Verify filter with v equals i
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter076() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    Uint8Array result = arr.filter((v, i) -> v == i);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v > i * 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0770
     * @tc.name testUint8ArrayFilter077
     * @tc.desc Verify filter with v > i * 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter077() {
    Uint8Array arr = new Uint8Array(new int[] {0, 5, 10});
    Uint8Array result = arr.filter((v, i) -> v > i * 3);
    assertEqual(2, result.length());
    assertEqualInt(5, result.at(0));
    assertEqualInt(10, result.at(1));
    }

    /**
     * Verify filter with v > i on same values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0780
     * @tc.name testUint8ArrayFilter078
     * @tc.desc Verify filter with v > i on same values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter078() {
    Uint8Array arr = new Uint8Array(new int[] {10, 10, 10});
    Uint8Array result = arr.filter((v, i) -> v > i);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v equals (i+1)*10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0790
     * @tc.name testUint8ArrayFilter079
     * @tc.desc Verify filter with v equals (i+1)*10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter079() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = arr.filter((v, i) -> v == (i + 1) * 10);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v equals i*2+1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0800
     * @tc.name testUint8ArrayFilter080
     * @tc.desc Verify filter with v equals i*2+1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter080() {
    Uint8Array arr = new Uint8Array(new int[] {1, 3, 5});
    Uint8Array result = arr.filter((v, i) -> v == i * 2 + 1);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v equals (i+1)*2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0810
     * @tc.name testUint8ArrayFilter081
     * @tc.desc Verify filter with v equals (i+1)*2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter081() {
    Uint8Array arr = new Uint8Array(new int[] {2, 4, 6});
    Uint8Array result = arr.filter((v, i) -> v == (i + 1) * 2);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v > i * 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0820
     * @tc.name testUint8ArrayFilter082
     * @tc.desc Verify filter with v > i * 8
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter082() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    Uint8Array result = arr.filter((v, i) -> v > i * 8);
    assertEqual(2, result.length());
    }

    /**
     * Verify filter with v > 0 and v < 250
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0830
     * @tc.name testUint8ArrayFilter083
     * @tc.desc Verify filter with v > 0 and v < 250
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter083() {
    Uint8Array arr = new Uint8Array(new int[] {0, 50, 100, 150, 200, 250});
    Uint8Array result = arr.filter((v, i) -> v > 0 && v < 250);
    assertEqual(4, result.length());
    assertEqualInt(50, result.at(0));
    assertEqualInt(200, result.at(3));
    }

    /**
     * Verify filter with v == 0 or v == 250
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0840
     * @tc.name testUint8ArrayFilter084
     * @tc.desc Verify filter with v == 0 or v == 250
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter084() {
    Uint8Array arr = new Uint8Array(new int[] {0, 50, 100, 150, 200, 250});
    Uint8Array result = arr.filter((v, i) -> v == 0 || v == 250);
    assertEqual(2, result.length());
    assertEqualInt(0, result.at(0));
    assertEqualInt(250, result.at(1));
    }

    /**
     * Verify filter with not greater than 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0850
     * @tc.name testUint8ArrayFilter085
     * @tc.desc Verify filter with not greater than 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter085() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    Uint8Array result = arr.filter((v, i) -> !(v > 20));
    assertEqual(2, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(20, result.at(1));
    }

    /**
     * Verify filter with v > 0 and i < 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0860
     * @tc.name testUint8ArrayFilter086
     * @tc.desc Verify filter with v > 0 and i < 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter086() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    Uint8Array result = arr.filter((v, i) -> v > 0 && i < 2);
    assertEqual(1, result.length());
    assertEqualInt(1, result.at(0));
    }

    /**
     * Verify filter with v > 0 or i == 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0870
     * @tc.name testUint8ArrayFilter087
     * @tc.desc Verify filter with v > 0 or i == 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter087() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    Uint8Array result = arr.filter((v, i) -> v > 0 || i == 0);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v divisible by 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0880
     * @tc.name testUint8ArrayFilter088
     * @tc.desc Verify filter with v divisible by 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter088() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = arr.filter((v, i) -> v % 10 == 0);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with even values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0890
     * @tc.name testUint8ArrayFilter089
     * @tc.desc Verify filter with even values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter089() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v % 2 == 0);
    assertEqual(2, result.length());
    assertEqualInt(2, result.at(0));
    assertEqualInt(4, result.at(1));
    }

    /**
     * Verify filter with odd values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0900
     * @tc.name testUint8ArrayFilter090
     * @tc.desc Verify filter with odd values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter090() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v, i) -> v % 2 == 1);
    assertEqual(3, result.length());
    assertEqualInt(1, result.at(0));
    assertEqualInt(5, result.at(2));
    }

    /**
     * Verify filter with v > 5 and v < 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0910
     * @tc.name testUint8ArrayFilter091
     * @tc.desc Verify filter with v > 5 and v < 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter091() {
    Uint8Array arr = new Uint8Array(new int[] {0, 5, 10, 15, 20});
    Uint8Array result = arr.filter((v, i) -> v > 5 && v < 20);
    assertEqual(2, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(15, result.at(1));
    }

    /**
     * Verify filter with v == 10 or 30 or 50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0920
     * @tc.name testUint8ArrayFilter092
     * @tc.desc Verify filter with v == 10 or 30 or 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter092() {
    Uint8Array arr = new Uint8Array(new int[] {0, 10, 20, 30, 40, 50});
    Uint8Array result = arr.filter((v, i) -> v == 10 || v == 30 || v == 50);
    assertEqual(3, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(30, result.at(1));
    assertEqualInt(50, result.at(2));
    }

    /**
     * Verify filter with v > i*0 always true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0930
     * @tc.name testUint8ArrayFilter093
     * @tc.desc Verify filter with v > i*0 always true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter093() {
    Uint8Array arr = new Uint8Array(new int[] {1, 1, 1});
    Uint8Array result = arr.filter((v, i) -> v > i * 0);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter with v > 0 and i < 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0940
     * @tc.name testUint8ArrayFilter094
     * @tc.desc Verify filter with v > 0 and i < 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter094() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.filter((v, i) -> v > 0 && i < 4);
    assertEqual(4, result.length());
    assertEqualInt(10, result.at(0));
    assertEqualInt(40, result.at(3));
    }

    /**
     * Verify filter all pass
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0950
     * @tc.name testUint8ArrayFilter095
     * @tc.desc Verify filter all pass
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter095() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v) -> true);
    assertEqual(5, result.length());
    }

    /**
     * Verify filter with threshold captured from variable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0960
     * @tc.name testUint8ArrayFilter096
     * @tc.desc Verify filter with threshold captured from variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter096() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int threshold = 2;
    Uint8Array result = arr.filter((v) -> v > threshold);
    assertEqual(1, result.length());
    assertEqualInt(3, result.at(0));
    }

    /**
     * Verify filter with 0xFF hex comparison
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0970
     * @tc.name testUint8ArrayFilter097
     * @tc.desc Verify filter with 0xFF hex comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter097() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    Uint8Array result = arr.filter((v) -> v == 0xFF);
    assertEqual(1, result.length());
    assertEqualInt(255, result.at(0));
    }

    /**
     * Verify filter with 0x80 hex comparison
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0980
     * @tc.name testUint8ArrayFilter098
     * @tc.desc Verify filter with 0x80 hex comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter098() {
    Uint8Array arr = new Uint8Array(new int[] {127, 128});
    Uint8Array result = arr.filter((v) -> v == 0x80);
    assertEqual(1, result.length());
    assertEqualInt(128, result.at(0));
    }

    /**
     * Verify filter with 0b11111111 binary comparison
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_0990
     * @tc.name testUint8ArrayFilter099
     * @tc.desc Verify filter with 0b11111111 binary comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter099() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    Uint8Array result = arr.filter((v) -> v == 0b11111111);
    assertEqual(1, result.length());
    assertEqualInt(255, result.at(0));
    }

    /**
     * Verify filter result is Uint8Array type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1000
     * @tc.name testUint8ArrayFilter100
     * @tc.desc Verify filter result is Uint8Array type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter100() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(3, result.length());
    }

    /**
     * Verify filter returns new array not original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1010
     * @tc.name testUint8ArrayFilter101
     * @tc.desc Verify filter returns new array not original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter101() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v) -> v > 0);
    assertTrue(result != arr);
    }

    /**
     * Verify original array length unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1020
     * @tc.name testUint8ArrayFilter102
     * @tc.desc Verify original array length unchanged after filter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter102() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int before = arr.length();
    arr.filter((v) -> v > 0);
    assertEqual(before, arr.length());
    }

    /**
     * Verify original array element values unchanged after filter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1030
     * @tc.name testUint8ArrayFilter103
     * @tc.desc Verify original array element values unchanged after filter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter103() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    arr.filter((v) -> v > 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify result has correct BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1040
     * @tc.name testUint8ArrayFilter104
     * @tc.desc Verify result has correct BYTES_PER_ELEMENT
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter104() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(1, result.BYTES_PER_ELEMENT);
    }

    /**
     * Verify result byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1050
     * @tc.name testUint8ArrayFilter105
     * @tc.desc Verify result byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter105() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(0, result.byteOffset());
    }

    /**
     * Verify result elements via at() including negative index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1060
     * @tc.name testUint8ArrayFilter106
     * @tc.desc Verify result elements via at() including negative index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter106() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = arr.filter((v) -> v > 1);
    assertEqualInt(2, result.at(0));
    assertEqualInt(3, result.at(-1));
    }

    /**
     * Verify empty array filter callback not called
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1070
     * @tc.name testUint8ArrayFilter107
     * @tc.desc Verify empty array filter callback not called
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter107() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.filter((v) -> v > 0);
    assertEqual(0, result.length());
    }

    /**
     * Verify filter result elements are in correct order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILTER_1080
     * @tc.name testUint8ArrayFilter108
     * @tc.desc Verify filter result elements are in correct order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFilter108() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = arr.filter((v) -> v > 2);
    assertEqual(3, result.length());
    assertEqualInt(3, result.get(0));
    assertEqualInt(4, result.get(1));
    assertEqualInt(5, result.get(2));
    }
}
