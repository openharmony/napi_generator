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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFind02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFind02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0100
     * @tc.name testUint8ArrayFind001
     * @tc.desc Verify find returns number for first element match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind001() {
    Uint8Array arr = new Uint8Array(new int[] {55, 66, 77});
    Integer result = arr.find((v, i, a) -> v == 55);
    assertEqual(55, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0200
     * @tc.name testUint8ArrayFind002
     * @tc.desc Verify find returns number for last element match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind002() {
    Uint8Array arr = new Uint8Array(new int[] {33, 66, 99});
    Integer result = arr.find((v, i, a) -> v == 99);
    assertEqual(99, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0300
     * @tc.name testUint8ArrayFind003
     * @tc.desc Verify find returns number for minimum boundary element 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind003() {
    Uint8Array arr = new Uint8Array(new int[] {0, 10, 20});
    Integer result = arr.find((v, i, a) -> v == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0400
     * @tc.name testUint8ArrayFind004
     * @tc.desc Verify find returns number for maximum boundary element 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind004() {
    Uint8Array arr = new Uint8Array(new int[] {255, 200, 100});
    Integer result = arr.find((v, i, a) -> v == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0500
     * @tc.name testUint8ArrayFind005
     * @tc.desc Verify find returns undefined when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Integer result = arr.find((v, i, a) -> v > 200);
    assertNull(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0600
     * @tc.name testUint8ArrayFind006
     * @tc.desc Verify find returns undefined on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind006() {
    Uint8Array arr = new Uint8Array();
    Integer result = arr.find((v, i, a) -> true);
    assertNull(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0700
     * @tc.name testUint8ArrayFind007
     * @tc.desc Verify find returns undefined when predicate always returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind007() {
    Uint8Array arr = new Uint8Array(new int[] {5, 15, 25});
    Integer result = arr.find((v, i, a) -> false);
    assertNull(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0800
     * @tc.name testUint8ArrayFind008
     * @tc.desc Verify some returns true when multiple matches exist
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind008() {
    Uint8Array arr = new Uint8Array(new int[] {44, 55, 66});
    boolean found = arr.some((v, i, a) -> v > 50);
    assertTrue(found);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_0900
     * @tc.name testUint8ArrayFind009
     * @tc.desc Verify some returns false when no element matches (strict equality)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind009() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6, 9});
    boolean found = arr.some((v, i, a) -> v == 99);
    assertFalse(found);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1000
     * @tc.name testUint8ArrayFind010
     * @tc.desc Verify find works on ArrayBuffer-backed array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind010() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 72);
    arr.set(1, 84);
    arr.set(2, 96);
    Integer result = arr.find((v, i, a) -> v == 96);
    assertEqual(96, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1100
     * @tc.name testUint8ArrayFind011
     * @tc.desc Verify find returns undefined on zero-length array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind011() {
    Uint8Array arr = new Uint8Array(0);
    Integer result = arr.find((v, i, a) -> true);
    assertNull(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1200
     * @tc.name testUint8ArrayFind012
     * @tc.desc Verify find returns correct value for single-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind012() {
    Uint8Array arr = new Uint8Array(new int[] {144});
    Integer result = arr.find((v, i, a) -> v > 0);
    assertEqual(144, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1300
     * @tc.name testUint8ArrayFind013
     * @tc.desc Verify find returns number type for matching element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind013() {
    Uint8Array arr = new Uint8Array(new int[] {60, 120, 180});
    Integer result = arr.find((v, i, a) -> v > 100);
    assertEqual(120, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1400
     * @tc.name testUint8ArrayFind014
     * @tc.desc Verify find returns 6 from ascending sequence matching v>5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind014() {
    Uint8Array arr = new Uint8Array(new int[] {0, 2, 4, 6, 8});
    Integer result = arr.find((v, i, a) -> v > 5);
    assertEqual(6, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1500
     * @tc.name testUint8ArrayFind015
     * @tc.desc Verify find returns 9 from single-element array exact match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind015() {
    Uint8Array arr = new Uint8Array(new int[] {9});
    Integer result = arr.find((v, i, a) -> v == 9);
    assertEqual(9, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1600
     * @tc.name testUint8ArrayFind016
     * @tc.desc Verify find from Array<int> construction returns 12
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind016() {
    List<Integer> src = java.util.Arrays.asList(12, 24, 36);
    Uint8Array arr = new Uint8Array(src);
    Integer result = arr.find((v, i, a) -> v == 12);
    assertEqual(12, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1700
     * @tc.name testUint8ArrayFind017
     * @tc.desc Verify find from hex literal construction returns 24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind017() {
    List<Integer> src = java.util.Arrays.asList(0x18, 0x30, 0x48);
    Uint8Array arr = new Uint8Array(src);
    Integer result = arr.find((v, i, a) -> v == 0x18);
    assertEqual(24, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1800
     * @tc.name testUint8ArrayFind018
     * @tc.desc Verify find returns 32 from [32,64,96] matching v>=32
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind018() {
    Uint8Array arr = new Uint8Array(new int[] {32, 64, 96});
    Integer result = arr.find((v, i, a) -> v >= 32);
    assertEqual(32, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_1900
     * @tc.name testUint8ArrayFind019
     * @tc.desc Verify find from hex literal 0x24 returns 36
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind019() {
    Uint8Array arr = new Uint8Array(new int[] {0x24, 0x48, 0x6C});
    Integer result = arr.find((v, i, a) -> v == 0x24);
    assertEqual(36, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2000
     * @tc.name testUint8ArrayFind020
     * @tc.desc Verify find returns 44 from [22,44,66] matching middle
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind020() {
    Uint8Array arr = new Uint8Array(new int[] {22, 44, 66});
    Integer result = arr.find((v, i, a) -> v == 44);
    assertEqual(44, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2100
     * @tc.name testUint8ArrayFind021
     * @tc.desc Verify find from binary literal 0b110000 returns 48
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind021() {
    Uint8Array arr = new Uint8Array(new int[] {0b110000, 0b1100000, 0b10010000});
    Integer result = arr.find((v, i, a) -> v == 0b110000);
    assertEqual(48, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2200
     * @tc.name testUint8ArrayFind022
     * @tc.desc Verify find returns 55 from [55,0,255] matching v>0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind022() {
    Uint8Array arr = new Uint8Array(new int[] {55, 0, 255});
    Integer result = arr.find((v, i, a) -> v > 0);
    assertEqual(55, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2300
     * @tc.name testUint8ArrayFind023
     * @tc.desc Verify find on buffer-backed array returns 64
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind023() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 64);
    arr.set(2, 128);
    arr.set(3, 192);
    Integer result = arr.find((v, i, a) -> v == 64);
    assertEqual(64, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2400
     * @tc.name testUint8ArrayFind024
     * @tc.desc Verify find returns 66 from [33,66,99] matching middle
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind024() {
    Uint8Array arr = new Uint8Array(new int[] {33, 66, 99});
    Integer result = arr.find((v, i, a) -> v == 66);
    assertEqual(66, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2500
     * @tc.name testUint8ArrayFind025
     * @tc.desc Verify find returns 72 matching first element >70
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind025() {
    Uint8Array arr = new Uint8Array(new int[] {72, 144, 216});
    Integer result = arr.find((v, i, a) -> v > 70);
    assertEqual(72, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2600
     * @tc.name testUint8ArrayFind026
     * @tc.desc Verify find returns 80 exact match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind026() {
    Uint8Array arr = new Uint8Array(new int[] {80, 160, 240});
    Integer result = arr.find((v, i, a) -> v == 80);
    assertEqual(80, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2700
     * @tc.name testUint8ArrayFind027
     * @tc.desc Verify find returns 84 from [42,84,126] matching middle
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind027() {
    Uint8Array arr = new Uint8Array(new int[] {42, 84, 126});
    Integer result = arr.find((v, i, a) -> v == 84);
    assertEqual(84, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2800
     * @tc.name testUint8ArrayFind028
     * @tc.desc Verify find returns 88 from [44,88,132] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind028() {
    Uint8Array arr = new Uint8Array(new int[] {44, 88, 132});
    Integer result = arr.find((v, i, a) -> v == 88);
    assertEqual(88, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_2900
     * @tc.name testUint8ArrayFind029
     * @tc.desc Verify find returns 96 from [48,96,144] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind029() {
    Uint8Array arr = new Uint8Array(new int[] {48, 96, 144});
    Integer result = arr.find((v, i, a) -> v == 96);
    assertEqual(96, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3000
     * @tc.name testUint8ArrayFind030
     * @tc.desc Verify find returns 104 from [52,104,156] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind030() {
    Uint8Array arr = new Uint8Array(new int[] {52, 104, 156});
    Integer result = arr.find((v, i, a) -> v == 104);
    assertEqual(104, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3100
     * @tc.name testUint8ArrayFind031
     * @tc.desc Verify find returns 108 exact match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind031() {
    Uint8Array arr = new Uint8Array(new int[] {54, 108, 162});
    Integer result = arr.find((v, i, a) -> v == 108);
    assertEqual(108, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3200
     * @tc.name testUint8ArrayFind032
     * @tc.desc Verify find returns 112 from [56,112,168] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind032() {
    Uint8Array arr = new Uint8Array(new int[] {56, 112, 168});
    Integer result = arr.find((v, i, a) -> v == 112);
    assertEqual(112, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3300
     * @tc.name testUint8ArrayFind033
     * @tc.desc Verify find returns 120 from [60,120,180] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind033() {
    Uint8Array arr = new Uint8Array(new int[] {60, 120, 180});
    Integer result = arr.find((v, i, a) -> v == 120);
    assertEqual(120, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3400
     * @tc.name testUint8ArrayFind034
     * @tc.desc Verify find returns 124 from [62,124,186] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind034() {
    Uint8Array arr = new Uint8Array(new int[] {62, 124, 186});
    Integer result = arr.find((v, i, a) -> v == 124);
    assertEqual(124, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3500
     * @tc.name testUint8ArrayFind035
     * @tc.desc Verify find returns 130 from [65,130,195] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind035() {
    Uint8Array arr = new Uint8Array(new int[] {65, 130, 195});
    Integer result = arr.find((v, i, a) -> v == 130);
    assertEqual(130, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3600
     * @tc.name testUint8ArrayFind036
     * @tc.desc Verify find returns 132 from [66,132,198] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind036() {
    Uint8Array arr = new Uint8Array(new int[] {66, 132, 198});
    Integer result = arr.find((v, i, a) -> v == 132);
    assertEqual(132, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3700
     * @tc.name testUint8ArrayFind037
     * @tc.desc Verify find returns 144 from [72,144,216] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind037() {
    Uint8Array arr = new Uint8Array(new int[] {72, 144, 216});
    Integer result = arr.find((v, i, a) -> v == 144);
    assertEqual(144, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3800
     * @tc.name testUint8ArrayFind038
     * @tc.desc Verify find returns 160 from [80,160,240] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind038() {
    Uint8Array arr = new Uint8Array(new int[] {80, 160, 240});
    Integer result = arr.find((v, i, a) -> v == 160);
    assertEqual(160, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_3900
     * @tc.name testUint8ArrayFind039
     * @tc.desc Verify find returns 176 from [88,176,255] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind039() {
    Uint8Array arr = new Uint8Array(new int[] {88, 176, 255});
    Integer result = arr.find((v, i, a) -> v == 176);
    assertEqual(176, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4000
     * @tc.name testUint8ArrayFind040
     * @tc.desc Verify find returns 180 from [90,180,240] match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind040() {
    Uint8Array arr = new Uint8Array(new int[] {90, 180, 240});
    Integer result = arr.find((v, i, a) -> v == 180);
    assertEqual(180, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4100
     * @tc.name testUint8ArrayFind041
     * @tc.desc Verify find matches arr[0] for first match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind041() {
    Uint8Array arr = new Uint8Array(new int[] {55, 110, 165});
    Integer result = arr.find((v, i, a) -> v > 50);
    assertEqual(arr.get(0), result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4200
     * @tc.name testUint8ArrayFind042
     * @tc.desc Verify find matches arr[1] for second match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind042() {
    Uint8Array arr = new Uint8Array(new int[] {30, 60, 90});
    Integer result = arr.find((v, i, a) -> v > 50);
    assertEqual(arr.get(1), result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4300
     * @tc.name testUint8ArrayFind043
     * @tc.desc Verify findIndex does not change arr.length after finding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v > 25);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4400
     * @tc.name testUint8ArrayFind044
     * @tc.desc Verify findIndex does not change arr.length when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind044() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v > 100);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4500
     * @tc.name testUint8ArrayFind045
     * @tc.desc Verify findIndex does not change ArrLen after finding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind045() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4});
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v == 3);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4600
     * @tc.name testUint8ArrayFind046
     * @tc.desc Verify findIndex does not change arr length on non-zero offset view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v > 0);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4700
     * @tc.name testUint8ArrayFind047
     * @tc.desc Verify findIndex does not change arr length by side effect
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v > 15);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4800
     * @tc.name testUint8ArrayFind048
     * @tc.desc Verify findIndex does not change arr buffer reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind048() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf);
    ArrayBuffer bufRef = arr.buffer();
    arr.findIndex((v, i, a) -> v > 0);
    assertEqual(bufRef, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_4900
     * @tc.name testUint8ArrayFind049
     * @tc.desc Verify findIndex does not change arr.buffer reference on match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind049() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    ArrayBuffer bufRef = arr.buffer();
    arr.findIndex((v, i, a) -> v == 0);
    assertEqual(bufRef, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5000
     * @tc.name testUint8ArrayFind050
     * @tc.desc Verify findIndex on empty array keeps length at 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind050() {
    Uint8Array arr = new Uint8Array(0);
    arr.findIndex((v, i, a) -> true);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5100
     * @tc.name testUint8ArrayFind051
     * @tc.desc Verify multiple consecutive findIndex do not change arr.length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind051() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6, 9, 12, 15});
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v > 5);
    arr.findIndex((v, i, a) -> v < 10);
    arr.findIndex((v, i, a) -> v % 3 == 0);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5200
     * @tc.name testUint8ArrayFind052
     * @tc.desc Verify findIndex does not change arr length on subview
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind052() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 2, 5);
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v > 0);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5300
     * @tc.name testUint8ArrayFind053
     * @tc.desc Verify findIndex on offset view does not affect parent buffer length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind053() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array arr = new Uint8Array(buf);
    Uint8Array sub = new Uint8Array(buf, 1, 4);
    int arrLenBefore = arr.length();
    sub.findIndex((v, i, a) -> v == 3);
    assertEqual(arrLenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5400
     * @tc.name testUint8ArrayFind054
     * @tc.desc Verify findIndex does not change subview length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind054() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array sub = new Uint8Array(buf, 1, 3);
    int subLenBefore = sub.length();
    sub.findIndex((v, i, a) -> v > 25);
    assertEqual(subLenBefore, sub.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5500
     * @tc.name testUint8ArrayFind055
     * @tc.desc Verify findIndex does not change arr[0] value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind055() {
    Uint8Array arr = new Uint8Array(new int[] {11, 22, 33});
    int valBefore = arr.get(0);
    arr.findIndex((v, i, a) -> v == 33);
    assertEqual(valBefore, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5600
     * @tc.name testUint8ArrayFind056
     * @tc.desc Verify findIndex does not change arr[1] value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind056() {
    Uint8Array arr = new Uint8Array(new int[] {44, 55, 66});
    int valBefore = arr.get(1);
    arr.findIndex((v, i, a) -> v == 55);
    assertEqual(valBefore, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5700
     * @tc.name testUint8ArrayFind057
     * @tc.desc Verify findIndex does not change elements when no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind057() {
    Uint8Array arr = new Uint8Array(new int[] {7, 14, 21});
    int valBefore = arr.get(2);
    arr.findIndex((v, i, a) -> v > 100);
    assertEqual(valBefore, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5800
     * @tc.name testUint8ArrayFind058
     * @tc.desc Verify findIndex does not modify buffer content on buffer-backed array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind058() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 17);
    arr.set(1, 34);
    arr.set(2, 51);
    int valBefore = arr.get(1);
    arr.findIndex((v, i, a) -> v > 50);
    assertEqual(valBefore, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_5900
     * @tc.name testUint8ArrayFind059
     * @tc.desc Verify findIndex early return does not modify subsequent elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind059() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15, 20, 25});
    arr.findIndex((v, i, a) -> v == 10);
    assertEqual(25, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6000
     * @tc.name testUint8ArrayFind060
     * @tc.desc Verify find is idempotent - consecutive calls return same result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind060() {
    Uint8Array arr = new Uint8Array(new int[] {8, 16, 24, 32});
    Integer r1 = arr.find((v, i, a) -> v > 20);
    Integer r2 = arr.find((v, i, a) -> v > 20);
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6100
     * @tc.name testUint8ArrayFind061
     * @tc.desc Verify findIndex does not affect array iteration sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind061() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6, 9});
    arr.findIndex((v, i, a) -> v == 6);
    int sum = arr.reduce((acc, v, index, array) ->  acc + v, 0);
    assertEqual(18, sum);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6200
     * @tc.name testUint8ArrayFind062
     * @tc.desc Verify findIndex on subview does not modify parent array unrelated elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind062() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 100);
    arr.set(1, 200);
    arr.set(2, 100);
    arr.set(3, 200);
    arr.set(4, 100);
    Uint8Array sub = new Uint8Array(buf, 1, 3);
    sub.findIndex((v, i, a) -> v == 200);
    assertEqual(100, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6300
     * @tc.name testUint8ArrayFind063
     * @tc.desc Verify findIndex with all-false predicate does not change array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind063() {
    Uint8Array arr = new Uint8Array(new int[] {9, 18, 27, 36});
    List<Integer> snapshot = java.util.Arrays.asList(arr.get(0), arr.get(1), arr.get(2), arr.get(3));
    arr.findIndex((v, i, a) -> false);
    assertEqual(snapshot.get(0), arr.get(0));
    assertEqual(snapshot.get(1), arr.get(1));
    assertEqual(snapshot.get(2), arr.get(2));
    assertEqual(snapshot.get(3), arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6400
     * @tc.name testUint8ArrayFind064
     * @tc.desc Verify findIndex does not change arr[i] on original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind064() {
    Uint8Array arr = new Uint8Array(new int[] {13, 26, 39, 52});
    int valBefore = arr.get(2);
    arr.findIndex((v, i, a) -> v > 30);
    assertEqual(valBefore, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6500
     * @tc.name testUint8ArrayFind065
     * @tc.desc Verify find on offset view returns correct value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind065() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array sub = new Uint8Array(buf, 1, 3);
    sub.set(0, 10);
    sub.set(1, 20);
    sub.set(2, 30);
    Integer result = sub.find((v, i, a) -> v > 25);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6600
     * @tc.name testUint8ArrayFind066
     * @tc.desc Verify find on non-zero byteOffset view returns correct value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind066() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array arr = new Uint8Array(buf, 2, 4);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    arr.set(3, 44);
    Integer result = arr.find((v, i, a) -> v == 33);
    assertEqual(33, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6700
     * @tc.name testUint8ArrayFind067
     * @tc.desc Verify find on subview consistent with parent array index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind067() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 5);
    arr.set(1, 15);
    arr.set(2, 25);
    arr.set(3, 35);
    arr.set(4, 45);
    Uint8Array sub = new Uint8Array(buf, 2, 3);
    Integer result = sub.find((v, i, a) -> v == 35);
    assertEqual(35, result);
    assertEqual(arr.get(3), result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6800
     * @tc.name testUint8ArrayFind068
     * @tc.desc Verify find on subview returns undefined when no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind068() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 100);
    arr.set(1, 100);
    arr.set(2, 200);
    arr.set(3, 200);
    Uint8Array sub = new Uint8Array(buf, 0, 2);
    Integer result = sub.find((v, i, a) -> v > 150);
    assertNull(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_6900
     * @tc.name testUint8ArrayFind069
     * @tc.desc Verify find on view reflects new values after modifying parent buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind069() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    Uint8Array view = new Uint8Array(buf);
    arr.set(0, 18);
    arr.set(1, 36);
    arr.set(2, 54);
    Integer result = view.find((v, i, a) -> v == 36);
    assertEqual(36, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7000
     * @tc.name testUint8ArrayFind070
     * @tc.desc Verify find on subview returns value consistent with parent array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind070() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 7);
    arr.set(1, 14);
    arr.set(2, 21);
    arr.set(3, 28);
    arr.set(4, 35);
    Uint8Array sub = new Uint8Array(buf, 2, 3);
    Integer resultSub = sub.find((v, i, a) -> v == 28);
    Integer resultParent = arr.find((v, i, a) -> v == 28);
    assertEqual(resultParent, resultSub);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7100
     * @tc.name testUint8ArrayFind071
     * @tc.desc Verify ArrayBuffer.isView returns true for Uint8Array after findIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind071() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.findIndex((v, i, a) -> v > 0);
    assertTrue(ArrayBuffer.isView(arr));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7200
     * @tc.name testUint8ArrayFind072
     * @tc.desc Verify findIndex does not change arr length on non-zero offset view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 3, 5);
    int lenBefore = arr.length();
    arr.findIndex((v, i, a) -> v == 0);
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7300
     * @tc.name testUint8ArrayFind073
     * @tc.desc Verify find returns correct value consistent with arr[i] access
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind073() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 40);
    arr.set(1, 80);
    arr.set(2, 120);
    arr.set(3, 160);
    Integer result = arr.find((v, i, a) -> v > 100);
    assertEqual(arr.get(2), result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7400
     * @tc.name testUint8ArrayFind074
     * @tc.desc Verify forEach on offset view iterates only view length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind074() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf, 1, 3);
    arr.set(0, 50);
    arr.set(1, 100);
    arr.set(2, 150);
    int[] count = {0};
    arr.forEach((v, i, a) -> {
    count[0] = count[0] + 1;
    return;
        });
    assertEqual(3, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7500
     * @tc.name testUint8ArrayFind075
     * @tc.desc Verify findIndex on one view does not affect other views sharing same buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind075() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array firstView = new Uint8Array(buf);
    Uint8Array secondView = new Uint8Array(buf);
    firstView.set(0, 33);
    firstView.set(1, 66);
    firstView.set(2, 99);
    firstView.set(3, 132);
    int secondViewBefore = secondView.get(2);
    firstView.findIndex((v, i, a) -> v == 99);
    assertEqual(secondViewBefore, secondView.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7600
     * @tc.name testUint8ArrayFind076
     * @tc.desc Verify find on subview with non-zero offset returns correct value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind076() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 2);
    arr.set(1, 4);
    arr.set(2, 6);
    arr.set(3, 8);
    arr.set(4, 10);
    Uint8Array sub = new Uint8Array(buf, 1, 3);
    Integer result = sub.find((v, i, a) -> v == 8);
    assertEqual(8, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7700
     * @tc.name testUint8ArrayFind077
     * @tc.desc Verify find on independent copy via new Uint8Array returns correct value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind077() {
    Uint8Array arr = new Uint8Array(new int[] {1, 3, 5, 7, 9});
    Uint8Array sliced = new Uint8Array(new int[] {arr.get(1), arr.get(2), arr.get(3)});
    Integer result = sliced.find((v, i, a) -> v == 5);
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND02_7800
     * @tc.name testUint8ArrayFind078
     * @tc.desc Verify find on zero-length subview returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind078() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf, 2, 0);
    Integer result = arr.find((v, i, a) -> true);
    assertNull(result);
    }
}
