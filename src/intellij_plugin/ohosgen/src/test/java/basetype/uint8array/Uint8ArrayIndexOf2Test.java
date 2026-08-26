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
 * Uint8ArrayIndexOf2Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayIndexOf2Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0010
     * @tc.name testUint8ArrayIndexOf001
     * @tc.desc Verify typeof return value is number when indexOf succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0020
     * @tc.name testUint8ArrayIndexOf002
     * @tc.desc Verify typeof return value is number when indexOf fails
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(99);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0030
     * @tc.name testUint8ArrayIndexOf003
     * @tc.desc Verify return value is not NaN when indexOf succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf003() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0040
     * @tc.name testUint8ArrayIndexOf004
     * @tc.desc Verify return value is not NaN when indexOf fails (-1 is a valid number)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf004() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(99);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0050
     * @tc.name testUint8ArrayIndexOf005
     * @tc.desc Verify return value is >= 0 when indexOf succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20);
    assertTrue(idx >= 0);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0060
     * @tc.name testUint8ArrayIndexOf006
     * @tc.desc Verify return value equals -1 when indexOf fails
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf006() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(99);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0070
     * @tc.name testUint8ArrayIndexOf007
     * @tc.desc Verify typeof return value is still number when fromIndex is explicitly provided
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf007() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20, 1);
    assertTrue(BasTest.isInteger(idx));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0080
     * @tc.name testUint8ArrayIndexOf008
     * @tc.desc Verify typeof return value is number when indexOf is called on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf008() {
    Uint8Array arr = new Uint8Array(0);
    int idx = arr.indexOf(10);
    assertTrue(BasTest.isInteger(idx));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0090
     * @tc.name testUint8ArrayIndexOf009
     * @tc.desc Verify indexOf returns 0 when searching first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0100
     * @tc.name testUint8ArrayIndexOf010
     * @tc.desc Verify indexOf returns 1 when searching middle element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0110
     * @tc.name testUint8ArrayIndexOf011
     * @tc.desc Verify indexOf returns 2 when searching last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf011() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(30);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0120
     * @tc.name testUint8ArrayIndexOf012
     * @tc.desc Verify indexOf returns 2 when searching middle element in a 5-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf012() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int idx = arr.indexOf(3);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0130
     * @tc.name testUint8ArrayIndexOf013
     * @tc.desc Verify indexOf returns 4 when searching last element in a 5-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf013() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int idx = arr.indexOf(5);
    assertEqual(4, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0140
     * @tc.name testUint8ArrayIndexOf014
     * @tc.desc Verify indexOf uint8 MIN value 0 returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf014() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0150
     * @tc.name testUint8ArrayIndexOf015
     * @tc.desc Verify indexOf uint8 MAX value 255 returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf015() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(255);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0160
     * @tc.name testUint8ArrayIndexOf016
     * @tc.desc Verify indexOf uint8 middle value 128 returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf016() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(128);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0170
     * @tc.name testUint8ArrayIndexOf017
     * @tc.desc Verify indexOf on single-element array returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf017() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int idx = arr.indexOf(42);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0180
     * @tc.name testUint8ArrayIndexOf018
     * @tc.desc Verify indexOf on 100-element array returns 0 when searching first position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf018() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(new Uint8Array(new int[] {99}), 0);
    int idx = arr.indexOf(99);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0190
     * @tc.name testUint8ArrayIndexOf019
     * @tc.desc Verify indexOf on 100-element array returns 50 when searching middle position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf019() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(new Uint8Array(new int[] {88}), 50);
    int idx = arr.indexOf(88);
    assertEqual(50, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0200
     * @tc.name testUint8ArrayIndexOf020
     * @tc.desc Verify indexOf on 100-element array returns 99 when searching last position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf020() {
    Uint8Array arr = new Uint8Array(100);
    arr.set(new Uint8Array(new int[] {77}), 99);
    int idx = arr.indexOf(77);
    assertEqual(99, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0210
     * @tc.name testUint8ArrayIndexOf021
     * @tc.desc Verify 0x80 hex literal as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf021() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(0x80);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0220
     * @tc.name testUint8ArrayIndexOf022
     * @tc.desc Verify 0xFF hex literal as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf022() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(0xFF);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0230
     * @tc.name testUint8ArrayIndexOf023
     * @tc.desc Verify 0x00 hex literal as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf023() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(0x00);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0240
     * @tc.name testUint8ArrayIndexOf024
     * @tc.desc Verify indexOf returns first occurrence index for duplicate elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf024() {
    Uint8Array arr = new Uint8Array(new int[] {10, 10, 20});
    int idx = arr.indexOf(10);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0250
     * @tc.name testUint8ArrayIndexOf025
     * @tc.desc Verify indexOf returns first occurrence index when duplicates appear in middle
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf025() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 10, 20});
    int idx = arr.indexOf(10);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0260
     * @tc.name testUint8ArrayIndexOf026
     * @tc.desc Verify indexOf returns 0 when searching an array of three identical elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf026() {
    Uint8Array arr = new Uint8Array(new int[] {7, 7, 7});
    int idx = arr.indexOf(7);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0270
     * @tc.name testUint8ArrayIndexOf027
     * @tc.desc Verify using arr[0] as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf027() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Integer searchElement = arr.at(0);
    int idx = arr.indexOf(searchElement);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0280
     * @tc.name testUint8ArrayIndexOf028
     * @tc.desc Verify using arr[length-1] as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf028() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Integer searchElement = arr.at(arr.length() - 1);
    int idx = arr.indexOf(searchElement);
    assertEqual(arr.length() - 1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0290
     * @tc.name testUint8ArrayIndexOf029
     * @tc.desc Verify 0b11111111 binary literal 255 as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf029() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(0b11111111);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0300
     * @tc.name testUint8ArrayIndexOf030
     * @tc.desc Verify 0o377 octal literal 255 as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf030() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    int idx = arr.indexOf(0377);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0310
     * @tc.name testUint8ArrayIndexOf031
     * @tc.desc Verify 1e1 scientific notation 10 as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf031() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(1e1);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0320
     * @tc.name testUint8ArrayIndexOf032
     * @tc.desc Verify 2e1 scientific notation 20 as searchElement succeeds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf032() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(2e1);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0330
     * @tc.name testUint8ArrayIndexOf033
     * @tc.desc Verify indexOf return value can be used as array index to access element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf033() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20);
    assertEqual(20, arr.at((int) (idx)));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0340
     * @tc.name testUint8ArrayIndexOf034
     * @tc.desc Verify calling indexOf twice returns the same index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf034() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx1 = arr.indexOf(20);
    int idx2 = arr.indexOf(20);
    assertEqual(idx2, idx1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0350
     * @tc.name testUint8ArrayIndexOf035
     * @tc.desc Verify -0 as searchElement finds value 0 successfully
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf035() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int idx = arr.indexOf(-0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0360
     * @tc.name testUint8ArrayIndexOf036
     * @tc.desc Verify 0.0 float as searchElement finds value 0 successfully
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf036() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int idx = arr.indexOf(0.0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0370
     * @tc.name testUint8ArrayIndexOf037
     * @tc.desc Verify indexOf on array filled with same value returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf037() {
    Uint8Array arr = new Uint8Array(5);
    for (int i = 0; i < 5; i++) {
    arr.set(new Uint8Array(new int[] {100}), i);
    }
    int idx = arr.indexOf(100);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0380
     * @tc.name testUint8ArrayIndexOf038
     * @tc.desc Verify indexOf on empty array returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf038() {
    Uint8Array arr = new Uint8Array(0);
    int idx = arr.indexOf(10);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0390
     * @tc.name testUint8ArrayIndexOf039
     * @tc.desc Verify indexOf with value out of uint8 range returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(256);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0400
     * @tc.name testUint8ArrayIndexOf040
     * @tc.desc Verify indexOf with negative value returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf040() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-1);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0410
     * @tc.name testUint8ArrayIndexOf041
     * @tc.desc Verify indexOf with 257 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf041() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(257);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0420
     * @tc.name testUint8ArrayIndexOf042
     * @tc.desc Verify indexOf with -2 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf042() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-2);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0430
     * @tc.name testUint8ArrayIndexOf043
     * @tc.desc Verify indexOf with 1000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(1000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0440
     * @tc.name testUint8ArrayIndexOf044
     * @tc.desc Verify indexOf with -100 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf044() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-100);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0450
     * @tc.name testUint8ArrayIndexOf045
     * @tc.desc Verify indexOf with 10000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0460
     * @tc.name testUint8ArrayIndexOf046
     * @tc.desc Verify indexOf with -1000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf046() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-1000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0470
     * @tc.name testUint8ArrayIndexOf047
     * @tc.desc Verify indexOf with 100000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(100000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0480
     * @tc.name testUint8ArrayIndexOf048
     * @tc.desc Verify indexOf with -100000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf048() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-100000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0490
     * @tc.name testUint8ArrayIndexOf049
     * @tc.desc Verify indexOf with 1000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf049() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(1000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0500
     * @tc.name testUint8ArrayIndexOf050
     * @tc.desc Verify indexOf with -1000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf050() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-1000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0510
     * @tc.name testUint8ArrayIndexOf051
     * @tc.desc Verify indexOf with 10000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf051() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0520
     * @tc.name testUint8ArrayIndexOf052
     * @tc.desc Verify indexOf with -10000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf052() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-10000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0530
     * @tc.name testUint8ArrayIndexOf053
     * @tc.desc Verify indexOf with 100000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf053() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(100000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0540
     * @tc.name testUint8ArrayIndexOf054
     * @tc.desc Verify indexOf with -100000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-100000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0550
     * @tc.name testUint8ArrayIndexOf055
     * @tc.desc Verify indexOf with 1000000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf055() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(1000000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0560
     * @tc.name testUint8ArrayIndexOf056
     * @tc.desc Verify indexOf with -1000000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf056() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(-1000000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0570
     * @tc.name testUint8ArrayIndexOf057
     * @tc.desc Verify indexOf with 10000000000 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf057() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    long idx = arr.indexOf(10000000000L);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0580
     * @tc.name testUint8ArrayIndexOf058
     * @tc.desc Verify fromIndex=0 searching first element returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf058() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0590
     * @tc.name testUint8ArrayIndexOf059
     * @tc.desc Verify fromIndex=1 skipping first element searching middle element returns index 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf059() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20, 1);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0600
     * @tc.name testUint8ArrayIndexOf060
     * @tc.desc Verify fromIndex=2 skipping first two elements searching last element returns index 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf060() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(30, 2);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0610
     * @tc.name testUint8ArrayIndexOf061
     * @tc.desc Verify fromIndex=1 searching first element returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf061() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 1);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0620
     * @tc.name testUint8ArrayIndexOf062
     * @tc.desc Verify fromIndex=2 searching middle element returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf062() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20, 2);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0630
     * @tc.name testUint8ArrayIndexOf063
     * @tc.desc Verify fromIndex=3 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf063() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 3);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0640
     * @tc.name testUint8ArrayIndexOf064
     * @tc.desc Verify fromIndex=100 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf064() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 100);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0650
     * @tc.name testUint8ArrayIndexOf065
     * @tc.desc Verify fromIndex=1000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf065() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 1000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0660
     * @tc.name testUint8ArrayIndexOf066
     * @tc.desc Verify fromIndex=10000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf066() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 10000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0670
     * @tc.name testUint8ArrayIndexOf067
     * @tc.desc Verify fromIndex=100000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf067() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 100000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0680
     * @tc.name testUint8ArrayIndexOf068
     * @tc.desc Verify fromIndex=1000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf068() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 1000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0690
     * @tc.name testUint8ArrayIndexOf069
     * @tc.desc Verify fromIndex=10000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf069() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 10000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0700
     * @tc.name testUint8ArrayIndexOf070
     * @tc.desc Verify fromIndex=100000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf070() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 100000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0710
     * @tc.name testUint8ArrayIndexOf071
     * @tc.desc Verify fromIndex=1000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf071() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, 1000000000);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0720
     * @tc.name testUint8ArrayIndexOf072
     * @tc.desc Verify fromIndex=10000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf072() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, (int) 4);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0730
     * @tc.name testUint8ArrayIndexOf073
     * @tc.desc Verify fromIndex=100000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf073() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, (int) 5);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0740
     * @tc.name testUint8ArrayIndexOf074
     * @tc.desc Verify fromIndex=1000000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf074() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, (int) 6);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0750
     * @tc.name testUint8ArrayIndexOf075
     * @tc.desc Verify fromIndex=10000000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf075() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, (int) 7);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0760
     * @tc.name testUint8ArrayIndexOf076
     * @tc.desc Verify fromIndex=100000000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf076() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, (int) 8);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0770
     * @tc.name testUint8ArrayIndexOf077
     * @tc.desc Verify fromIndex=1000000000000000 searching all elements returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf077() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, (int) 9);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0780
     * @tc.name testUint8ArrayIndexOf078
     * @tc.desc Verify fromIndex=-1 searching from end returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf078() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(30, -1);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0790
     * @tc.name testUint8ArrayIndexOf079
     * @tc.desc Verify fromIndex=-2 searching from second-to-last position returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf079() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(20, -2);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0800
     * @tc.name testUint8ArrayIndexOf080
     * @tc.desc Verify fromIndex=-3 searching from third-to-last position returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf080() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -3);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0810
     * @tc.name testUint8ArrayIndexOf081
     * @tc.desc Verify fromIndex=-4 searching from fourth-to-last (clamped to 0) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf081() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -4);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0820
     * @tc.name testUint8ArrayIndexOf082
     * @tc.desc Verify fromIndex=-100 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf082() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -100);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0830
     * @tc.name testUint8ArrayIndexOf083
     * @tc.desc Verify fromIndex=-1000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf083() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -1000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0840
     * @tc.name testUint8ArrayIndexOf084
     * @tc.desc Verify fromIndex=-10000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf084() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -10000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0850
     * @tc.name testUint8ArrayIndexOf085
     * @tc.desc Verify fromIndex=-100000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf085() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -100000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0860
     * @tc.name testUint8ArrayIndexOf086
     * @tc.desc Verify fromIndex=-1000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf086() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -1000000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0870
     * @tc.name testUint8ArrayIndexOf087
     * @tc.desc Verify fromIndex=-10000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf087() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -10000000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0880
     * @tc.name testUint8ArrayIndexOf088
     * @tc.desc Verify fromIndex=-100000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf088() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -100000000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0890
     * @tc.name testUint8ArrayIndexOf089
     * @tc.desc Verify fromIndex=-1000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf089() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -1000000000);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0900
     * @tc.name testUint8ArrayIndexOf090
     * @tc.desc Verify fromIndex=-10000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf090() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 3);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0910
     * @tc.name testUint8ArrayIndexOf091
     * @tc.desc Verify fromIndex=-100000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf091() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 3);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0920
     * @tc.name testUint8ArrayIndexOf092
     * @tc.desc Verify fromIndex=-1000000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf092() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 3);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0930
     * @tc.name testUint8ArrayIndexOf093
     * @tc.desc Verify fromIndex=-10000000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf093() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 4);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0940
     * @tc.name testUint8ArrayIndexOf094
     * @tc.desc Verify fromIndex=-100000000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf094() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 5);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0950
     * @tc.name testUint8ArrayIndexOf095
     * @tc.desc Verify fromIndex=-1000000000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf095() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 6);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0960
     * @tc.name testUint8ArrayIndexOf096
     * @tc.desc Verify fromIndex=-10000000000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf096() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 7);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0970
     * @tc.name testUint8ArrayIndexOf097
     * @tc.desc Verify fromIndex=-100000000000000000 (far negative, clamped to 0) searching returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf097() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int idx = arr.indexOf(10, -(int) 8);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0980
     * @tc.name testUint8ArrayIndexOf098
     * @tc.desc Verify length unchanged after successful indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf098() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int origLen = arr.length();
    arr.indexOf(20);
    assertEqual(origLen, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_0990
     * @tc.name testUint8ArrayIndexOf099
     * @tc.desc Verify length unchanged after unsuccessful indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf099() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int origLen = arr.length();
    arr.indexOf(99);
    assertEqual(origLen, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1000
     * @tc.name testUint8ArrayIndexOf100
     * @tc.desc Verify length unchanged after indexOf on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf100() {
    Uint8Array arr = new Uint8Array(0);
    int origLen = arr.length();
    arr.indexOf(10);
    assertEqual(origLen, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1010
     * @tc.name testUint8ArrayIndexOf101
     * @tc.desc Verify length unchanged after indexOf on 100-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf101() {
    Uint8Array arr = new Uint8Array(100);
    int origLen = arr.length();
    arr.indexOf(10);
    assertEqual(origLen, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1020
     * @tc.name testUint8ArrayIndexOf102
     * @tc.desc Verify length unchanged after indexOf with positive fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf102() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int origLen = arr.length();
    arr.indexOf(20, 1);
    assertEqual(origLen, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1030
     * @tc.name testUint8ArrayIndexOf103
     * @tc.desc Verify length unchanged after indexOf with negative fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf103() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int origLen = arr.length();
    arr.indexOf(30, -1);
    assertEqual(origLen, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1040
     * @tc.name testUint8ArrayIndexOf104
     * @tc.desc Verify array elements unchanged after successful indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf104() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array origArr = new Uint8Array(new int[] {10, 20, 30});
    arr.indexOf(20);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1050
     * @tc.name testUint8ArrayIndexOf105
     * @tc.desc Verify array elements unchanged after unsuccessful indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf105() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array origArr = new Uint8Array(new int[] {10, 20, 30});
    arr.indexOf(99);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1060
     * @tc.name testUint8ArrayIndexOf106
     * @tc.desc Verify indexOf on single-element array after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf106() {
    Uint8Array arr = new Uint8Array(new int[] {10});
    arr.indexOf(10);
    assertEqual(1, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1070
     * @tc.name testUint8ArrayIndexOf107
     * @tc.desc Verify 100-element array elements unchanged after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf107() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    Uint8Array origArr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    origArr.set(new Uint8Array(new int[] {i}), i);
    }
    arr.indexOf(50);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1080
     * @tc.name testUint8ArrayIndexOf108
     * @tc.desc Verify elements unchanged after indexOf with positive fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf108() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array origArr = new Uint8Array(new int[] {10, 20, 30});
    arr.indexOf(20, 1);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1090
     * @tc.name testUint8ArrayIndexOf109
     * @tc.desc Verify elements unchanged after indexOf with negative fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf109() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array origArr = new Uint8Array(new int[] {10, 20, 30});
    arr.indexOf(30, -1);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1100
     * @tc.name testUint8ArrayIndexOf110
     * @tc.desc Verify elements unchanged after indexOf with duplicate elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf110() {
    Uint8Array arr = new Uint8Array(new int[] {10, 10, 20});
    Uint8Array origArr = new Uint8Array(new int[] {10, 10, 20});
    arr.indexOf(10);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1110
     * @tc.name testUint8ArrayIndexOf111
     * @tc.desc Verify single-element array unchanged after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf111() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    Uint8Array origArr = new Uint8Array(new int[] {42});
    arr.indexOf(42);
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1120
     * @tc.name testUint8ArrayIndexOf112
     * @tc.desc Verify ArrayBuffer view byteOffset unchanged after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf112() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    int origByteOffset = arr.byteOffset();
    arr.indexOf(10);
    assertEqual(origByteOffset, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1130
     * @tc.name testUint8ArrayIndexOf113
     * @tc.desc Verify ArrayBuffer view buffer unchanged after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf113() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    ArrayBuffer origBuffer = arr.buffer();
    arr.indexOf(20);
    assertEqual(origBuffer, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1140
     * @tc.name testUint8ArrayIndexOf114
     * @tc.desc Verify ArrayBuffer view elements unchanged after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf114() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    Uint8Array origArr = new Uint8Array(new int[] {10, 20, 30});
    arr.indexOf(20);
    for (int i = 0; i < 3; i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1150
     * @tc.name testUint8ArrayIndexOf115
     * @tc.desc Verify ArrayBuffer view elements unchanged after unsuccessful indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf115() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    Uint8Array origArr = new Uint8Array(new int[] {10, 20, 30});
    arr.indexOf(99);
    for (int i = 0; i < 3; i++) {
    assertEqual(origArr.get(i), arr.get(i));
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1160
     * @tc.name testUint8ArrayIndexOf116
     * @tc.desc Verify ArrayBuffer view indexOf with negative fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf116() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    int idx = arr.indexOf(30, -1);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1170
     * @tc.name testUint8ArrayIndexOf117
     * @tc.desc Verify ArrayBuffer view indexOf with fromIndex=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf117() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    int idx = arr.indexOf(10, 0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1180
     * @tc.name testUint8ArrayIndexOf118
     * @tc.desc Verify ArrayBuffer view indexOf with fromIndex=1 skips first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf118() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    int idx = arr.indexOf(10, 1);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_INDEX_OF2_1190
     * @tc.name testUint8ArrayIndexOf119
     * @tc.desc Verify ArrayBuffer view byteOffset unchanged after indexOf
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIndexOf119() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer, 2, 3);
    int idx = arr.indexOf(20);
    assertEqual(2, arr.byteOffset());
    }
}
