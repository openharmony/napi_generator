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
import basetype.common.Error;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayEveryTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayEveryTest extends BasTest {
    private static int everyThrowIdx = 0;
    private static int everyThrowCount = 0;

    private static boolean everyThrowOnFirst(int v) {
    throw new Error("fail");
    }

    private static boolean everyThrowAlways(int v) {
    throw new Error();
    }

    private static boolean everyThrowIfLarge(int v) {
    if (v > 15) {
    throw new Error("large");
    }
    return true;
    }

    private static boolean everyThrowAtLast(int v) {
    everyThrowIdx++;
    if (everyThrowIdx == 3) {
    throw new Error("fail");
    }
    return true;
    }

    private static boolean everyThrowAtSecond(int v) {
    everyThrowIdx++;
    if (everyThrowIdx == 2) {
    throw new Error("fail");
    }
    return true;
    }

    private static boolean everyThrowAndCount(int v) {
    everyThrowCount++;
    throw new Error("stop");
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0010
     * @tc.name testUint8ArrayEvery001
     * @tc.desc Verify every with one required parameter predicate executes normally
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery001() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0020
     * @tc.name testUint8ArrayEvery002
     * @tc.desc Verify new Uint8Array() empty array every returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery002() {
    Uint8Array arr = new Uint8Array();
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0030
     * @tc.name testUint8ArrayEvery003
     * @tc.desc Verify new Uint8Array(0) empty array every returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery003() {
    Uint8Array arr = new Uint8Array(0);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0040
     * @tc.name testUint8ArrayEvery004
     * @tc.desc Verify Uint8Array.of() empty array every returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery004() {
    Uint8Array arr = Uint8Array.of();
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0050
     * @tc.name testUint8ArrayEvery005
     * @tc.desc Verify new Uint8Array(new ArrayBuffer(0)) empty buffer view every returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery005() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0060
     * @tc.name testUint8ArrayEvery006
     * @tc.desc Verify slice(0, 0) empty slice every returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery006() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array arr = src.slice(0, 0);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0070
     * @tc.name testUint8ArrayEvery007
     * @tc.desc Verify new Uint8Array(0.0) float length 0 empty array every returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery007() {
    Uint8Array arr = new Uint8Array(0.0);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0080
     * @tc.name testUint8ArrayEvery008
     * @tc.desc Verify empty array predicate never called returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery008() {
    boolean[] called = {false};
    Uint8Array arr = new Uint8Array();
    boolean result = arr.every((v) -> {
        called[0] = true;
        return true;
    });
    assertFalse(called[0]);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0090
     * @tc.name testUint8ArrayEvery009
     * @tc.desc Verify [0] element value 0 predicate >= 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery009() {
    Uint8Array arr = Uint8Array.of(0);
    boolean result = arr.every((v) -> v >= 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0100
     * @tc.name testUint8ArrayEvery010
     * @tc.desc Verify [0] element value 0 predicate === 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery010() {
    Uint8Array arr = Uint8Array.of(0);
    boolean result = arr.every((v) -> v == 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0110
     * @tc.name testUint8ArrayEvery011
     * @tc.desc Verify [255] element value 255 predicate === 255 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery011() {
    Uint8Array arr = Uint8Array.of(255);
    boolean result = arr.every((v) -> v == 255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0120
     * @tc.name testUint8ArrayEvery012
     * @tc.desc Verify [0] element value 0 predicate > 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery012() {
    Uint8Array arr = Uint8Array.of(0);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0130
     * @tc.name testUint8ArrayEvery013
     * @tc.desc Verify [0] element value 0 predicate < 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery013() {
    Uint8Array arr = Uint8Array.of(0);
    boolean result = arr.every((v) -> v < 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0140
     * @tc.name testUint8ArrayEvery014
     * @tc.desc Verify [255] element value 255 predicate > 255 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery014() {
    Uint8Array arr = Uint8Array.of(255);
    boolean result = arr.every((v) -> v > 255);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0150
     * @tc.name testUint8ArrayEvery015
     * @tc.desc Verify [127] element value 127 predicate > 127 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery015() {
    Uint8Array arr = Uint8Array.of(127);
    boolean result = arr.every((v) -> v > 127);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0160
     * @tc.name testUint8ArrayEvery016
     * @tc.desc Verify [128] element value 128 predicate < 128 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery016() {
    Uint8Array arr = Uint8Array.of(128);
    boolean result = arr.every((v) -> v < 128);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0170
     * @tc.name testUint8ArrayEvery017
     * @tc.desc Verify [1,2,3,4,5] all elements > 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery017() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0180
     * @tc.name testUint8ArrayEvery018
     * @tc.desc Verify [10,20,30] all elements <= 30 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery018() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v) -> v <= 30);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0190
     * @tc.name testUint8ArrayEvery019
     * @tc.desc Verify [5,10,15] all elements % 5 === 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery019() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    boolean result = arr.every((v) -> v % 5 == 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0200
     * @tc.name testUint8ArrayEvery020
     * @tc.desc Verify [0,0,0] all elements === 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery020() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    boolean result = arr.every((v) -> v == 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0210
     * @tc.name testUint8ArrayEvery021
     * @tc.desc Verify [1,1,1] all elements === 1 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery021() {
    Uint8Array arr = Uint8Array.of(1, 1, 1);
    boolean result = arr.every((v) -> v == 1);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0220
     * @tc.name testUint8ArrayEvery022
     * @tc.desc Verify [2,4,6,8] all elements % 2 === 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery022() {
    Uint8Array arr = Uint8Array.of(2, 4, 6, 8);
    boolean result = arr.every((v) -> v % 2 == 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0230
     * @tc.name testUint8ArrayEvery023
     * @tc.desc Verify [255,255,255] all elements < 256 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery023() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    boolean result = arr.every((v) -> v < 256);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0240
     * @tc.name testUint8ArrayEvery024
     * @tc.desc Verify [0,128,255] all elements <= 255 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery024() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    boolean result = arr.every((v) -> v <= 255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0250
     * @tc.name testUint8ArrayEvery025
     * @tc.desc Verify [100,200,250] all elements > 50 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery025() {
    Uint8Array arr = Uint8Array.of(100, 200, 250);
    boolean result = arr.every((v) -> v > 50);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0260
     * @tc.name testUint8ArrayEvery026
     * @tc.desc Verify [10,20,30] all elements >= 10 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery026() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v) -> v >= 10);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0270
     * @tc.name testUint8ArrayEvery027
     * @tc.desc Verify [1,2,3] all elements >= 1 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean result = arr.every((v) -> v >= 1);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0280
     * @tc.name testUint8ArrayEvery028
     * @tc.desc Verify [1,2,3] all elements <= 3 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery028() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean result = arr.every((v) -> v <= 3);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0290
     * @tc.name testUint8ArrayEvery029
     * @tc.desc Verify [0,127,128,255] all elements < 256 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery029() {
    Uint8Array arr = Uint8Array.of(0, 127, 128, 255);
    boolean result = arr.every((v) -> v < 256);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0300
     * @tc.name testUint8ArrayEvery030
     * @tc.desc Verify [0,127,128,255] all elements > -1 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery030() {
    Uint8Array arr = Uint8Array.of(0, 127, 128, 255);
    boolean result = arr.every((v) -> v > -1);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0310
     * @tc.name testUint8ArrayEvery031
     * @tc.desc Verify [0,1,2] first element 0 not satisfy > 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery031() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0320
     * @tc.name testUint8ArrayEvery032
     * @tc.desc Verify [1,0,2] middle element 0 not satisfy > 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery032() {
    Uint8Array arr = Uint8Array.of(1, 0, 2);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0330
     * @tc.name testUint8ArrayEvery033
     * @tc.desc Verify [1,2,0] last element 0 not satisfy > 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery033() {
    Uint8Array arr = Uint8Array.of(1, 2, 0);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0340
     * @tc.name testUint8ArrayEvery034
     * @tc.desc Verify [10,20,3] last element 3 not satisfy > 5 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery034() {
    Uint8Array arr = Uint8Array.of(10, 20, 3);
    boolean result = arr.every((v) -> v > 5);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0350
     * @tc.name testUint8ArrayEvery035
     * @tc.desc Verify [10,5,10] middle element 5 not satisfy >= 10 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery035() {
    Uint8Array arr = Uint8Array.of(10, 5, 10);
    boolean result = arr.every((v) -> v >= 10);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0360
     * @tc.name testUint8ArrayEvery036
     * @tc.desc Verify [5,10,10] first element 5 not satisfy >= 10 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery036() {
    Uint8Array arr = Uint8Array.of(5, 10, 10);
    boolean result = arr.every((v) -> v >= 10);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0370
     * @tc.name testUint8ArrayEvery037
     * @tc.desc Verify [1,2,30] last element 30 not satisfy <= 20 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery037() {
    Uint8Array arr = Uint8Array.of(1, 2, 30);
    boolean result = arr.every((v) -> v <= 20);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0380
     * @tc.name testUint8ArrayEvery038
     * @tc.desc Verify [5,10,15] first element 5 not satisfy > 10 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery038() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    boolean result = arr.every((v) -> v > 10);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0390
     * @tc.name testUint8ArrayEvery039
     * @tc.desc Verify [5,10,15] second element 10 not satisfy < 10 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery039() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    boolean result = arr.every((v) -> v < 10);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0400
     * @tc.name testUint8ArrayEvery040
     * @tc.desc Verify [10,20,30] only first element === 10 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery040() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v) -> v == 10);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0410
     * @tc.name testUint8ArrayEvery041
     * @tc.desc Verify [100,200,250] first element 100 not satisfy > 200 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery041() {
    Uint8Array arr = Uint8Array.of(100, 200, 250);
    boolean result = arr.every((v) -> v > 200);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0420
     * @tc.name testUint8ArrayEvery042
     * @tc.desc Verify [1,2,3] first element 1 not satisfy > 1 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean result = arr.every((v) -> v > 1);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0430
     * @tc.name testUint8ArrayEvery043
     * @tc.desc Verify [1,2,3] last element 3 not satisfy < 3 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery043() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean result = arr.every((v) -> v < 3);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0440
     * @tc.name testUint8ArrayEvery044
     * @tc.desc Verify [0,255,0,255] element 0 not satisfy > 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery044() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0450
     * @tc.name testUint8ArrayEvery045
     * @tc.desc Verify [0,255,0,255] element 255 not satisfy === 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery045() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    boolean result = arr.every((v) -> v == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0460
     * @tc.name testUint8ArrayEvery046
     * @tc.desc Verify [255,255,255] all elements 255 not satisfy > 255 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery046() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    boolean result = arr.every((v) -> v > 255);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0470
     * @tc.name testUint8ArrayEvery047
     * @tc.desc Verify [0,0,0] all elements 0 not satisfy > 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery047() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0480
     * @tc.name testUint8ArrayEvery048
     * @tc.desc Verify predicate first element index is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery048() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.every((v, idx) -> {
    assertEqual(0, idx);
    return false;
        });
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0490
     * @tc.name testUint8ArrayEvery049
     * @tc.desc Verify predicate last element index is length - 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery049() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] lastIndex = {-1};
    arr.every((v, idx) -> {
        lastIndex[0] = idx;
        return true;
    });
    assertEqual(2, lastIndex[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0500
     * @tc.name testUint8ArrayEvery050
     * @tc.desc Verify predicate index from 0 increments by 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery050() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int[] prevIdx = {-1};
    arr.every((v, idx) -> {
    assertEqual(prevIdx[0] + 1, idx);
    prevIdx[0] = idx;
    return true;
        });
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0510
     * @tc.name testUint8ArrayEvery051
     * @tc.desc Verify index === 0 condition only first element satisfies returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery051() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v, idx) -> idx == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0520
     * @tc.name testUint8ArrayEvery052
     * @tc.desc Verify index === length-1 condition only last element satisfies returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery052() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean result = arr.every((v, idx) -> idx == 2);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0530
     * @tc.name testUint8ArrayEvery053
     * @tc.desc Verify index < 2 condition on 4 element array returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery053() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    boolean result = arr.every((v, idx) -> idx < 2);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0540
     * @tc.name testUint8ArrayEvery054
     * @tc.desc Verify predicate array parameter reference equals original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery054() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array[] ref = {null};
    arr.every((v, idx, a) -> {
        ref[0] = a;
        return true;
    });
    assertEqual(arr, ref[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0550
     * @tc.name testUint8ArrayEvery055
     * @tc.desc Verify predicate array.length equals original array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] len = {-1};
    arr.every((v, idx, a) -> {
        len[0] = a.length();
        return true;
    });
    assertEqual(3, len[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0560
     * @tc.name testUint8ArrayEvery056
     * @tc.desc Verify predicate array[index] access equals element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery056() {
    Uint8Array arr = Uint8Array.of(42, 99, 7);
    arr.every((v, idx, a) -> {
    assertEqual(v, a.get(idx));
    return true;
        });
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0570
     * @tc.name testUint8ArrayEvery057
     * @tc.desc Verify predicate array is Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] isUint8 = {false};
    arr.every((v, idx, a) -> {
        isUint8[0] = BasTest.instanceOf(a, Uint8Array.class);
        return true;
    });
    assertTrue(isUint8[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0580
     * @tc.name testUint8ArrayEvery058
     * @tc.desc Verify first element not satisfy predicate only called 1 time
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery058() {
    int[] count = {0};
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    arr.every((v) -> {
        count[0]++;
        return v > 0;
    });
    assertEqual(1, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0590
     * @tc.name testUint8ArrayEvery059
     * @tc.desc Verify all satisfy predicate called length times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery059() {
    int[] count = {0};
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.every((v) -> {
        count[0]++;
        return true;
    });
    assertEqual(3, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0600
     * @tc.name testUint8ArrayEvery060
     * @tc.desc Verify last element not satisfy predicate called length times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery060() {
    int[] count = {0};
    Uint8Array arr = Uint8Array.of(1, 2, 0);
    arr.every((v) -> {
        count[0]++;
        return v > 0;
    });
    assertEqual(3, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0610
     * @tc.name testUint8ArrayEvery061
     * @tc.desc Verify empty array predicate called 0 times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery061() {
    int[] count = {0};
    Uint8Array arr = new Uint8Array();
    arr.every((v) -> {
        count[0]++;
        return true;
    });
    assertEqual(0, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0620
     * @tc.name testUint8ArrayEvery062
     * @tc.desc Verify second element not satisfy predicate called 2 times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery062() {
    int[] count = {0};
    Uint8Array arr = Uint8Array.of(1, 0, 2);
    arr.every((v) -> {
        count[0]++;
        return v > 0;
    });
    assertEqual(2, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0630
     * @tc.name testUint8ArrayEvery063
     * @tc.desc Verify [0,127,128,255] all elements >= 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery063() {
    Uint8Array arr = Uint8Array.of(0, 127, 128, 255);
    boolean result = arr.every((v) -> v >= 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0640
     * @tc.name testUint8ArrayEvery064
     * @tc.desc Verify [0,127,128,255] exists element <= 127 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery064() {
    Uint8Array arr = Uint8Array.of(0, 127, 128, 255);
    boolean result = arr.every((v) -> v > 127);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0650
     * @tc.name testUint8ArrayEvery065
     * @tc.desc Verify [0,127,128,255] exists element >= 128 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery065() {
    Uint8Array arr = Uint8Array.of(0, 127, 128, 255);
    boolean result = arr.every((v) -> v < 128);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0660
     * @tc.name testUint8ArrayEvery066
     * @tc.desc Verify [0,127,128,255] exists odd value 127 even condition returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery066() {
    Uint8Array arr = Uint8Array.of(0, 127, 128, 255);
    boolean result = arr.every((v) -> v % 2 == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0670
     * @tc.name testUint8ArrayEvery067
     * @tc.desc Verify [0,255] all elements < 256 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery067() {
    Uint8Array arr = Uint8Array.of(0, 255);
    boolean result = arr.every((v) -> v < 256);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0680
     * @tc.name testUint8ArrayEvery068
     * @tc.desc Verify [0,255] all elements >= 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery068() {
    Uint8Array arr = Uint8Array.of(0, 255);
    boolean result = arr.every((v) -> v >= 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0690
     * @tc.name testUint8ArrayEvery069
     * @tc.desc Verify 100 elements all > 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery069() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) { arr.set(i, i + 1);
    }
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0700
     * @tc.name testUint8ArrayEvery070
     * @tc.desc Verify 100 elements first is 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery070() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) { arr.set(i, 1);
    }
    arr.set(0, 0);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0710
     * @tc.name testUint8ArrayEvery071
     * @tc.desc Verify 100 elements last is 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery071() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) { arr.set(i, 1);
    }
    arr.set(99, 0);
    boolean result = arr.every((v) -> v > 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0720
     * @tc.name testUint8ArrayEvery072
     * @tc.desc Verify from ArrayBuffer construction all elements >= 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery072() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    boolean result = arr.every((v) -> v >= 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0730
     * @tc.name testUint8ArrayEvery073
     * @tc.desc Verify copy construction all elements > 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery073() {
    Uint8Array src = Uint8Array.of(5, 15, 25);
    Uint8Array arr = new Uint8Array(src);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0740
     * @tc.name testUint8ArrayEvery074
     * @tc.desc Verify Uint8Array.of construction multiple elements all > 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery074() {
    Uint8Array arr = Uint8Array.of(3, 6, 9, 12, 15);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0750
     * @tc.name testUint8ArrayEvery075
     * @tc.desc Verify new Uint8Array(5) default zero fill all >= 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery075() {
    Uint8Array arr = new Uint8Array(5);
    boolean result = arr.every((v) -> v >= 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0760
     * @tc.name testUint8ArrayEvery076
     * @tc.desc Verify all satisfy condition returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery076() {
    Uint8Array arr = Uint8Array.of(2, 4, 6);
    boolean result = arr.every((v) -> v % 2 == 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0770
     * @tc.name testUint8ArrayEvery077
     * @tc.desc Verify partial not satisfy condition returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery077() {
    Uint8Array arr = Uint8Array.of(2, 3, 6);
    boolean result = arr.every((v) -> v % 2 == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0780
     * @tc.name testUint8ArrayEvery078
     * @tc.desc Verify single element all satisfy condition returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery078() {
    Uint8Array arr = Uint8Array.of(10);
    boolean result = arr.every((v) -> v == 10);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0790
     * @tc.name testUint8ArrayEvery079
     * @tc.desc Verify single element not satisfy condition returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery079() {
    Uint8Array arr = Uint8Array.of(10);
    boolean result = arr.every((v) -> v == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0800
     * @tc.name testUint8ArrayEvery080
     * @tc.desc Verify multiple elements mixed boundary values all satisfy condition returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery080() {
    Uint8Array arr = Uint8Array.of(0, 255);
    boolean result = arr.every((v) -> v == 0 || v == 255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0810
     * @tc.name testUint8ArrayEvery081
     * @tc.desc Verify predicate throws Error on first element propagates
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery081() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.every(Uint8ArrayEveryTest::everyThrowOnFirst);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0820
     * @tc.name testUint8ArrayEvery082
     * @tc.desc Verify predicate throws Error on last element propagates
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery082() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    everyThrowIdx = 0;
    try {
    arr.every(Uint8ArrayEveryTest::everyThrowAtLast);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0830
     * @tc.name testUint8ArrayEvery083
     * @tc.desc Verify predicate throws Error on second element propagates
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery083() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    everyThrowIdx = 0;
    try {
    arr.every(Uint8ArrayEveryTest::everyThrowAtSecond);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0840
     * @tc.name testUint8ArrayEvery084
     * @tc.desc Verify empty array predicate throws Error but never called returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery084() {
    Uint8Array arr = new Uint8Array();
    boolean result = arr.every(Uint8ArrayEveryTest::everyThrowAlways);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0850
     * @tc.name testUint8ArrayEvery085
     * @tc.desc Verify predicate conditionally throws Error after condition check
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery085() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.every(Uint8ArrayEveryTest::everyThrowIfLarge);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0860
     * @tc.name testUint8ArrayEvery086
     * @tc.desc Verify predicate throws Error stops calling subsequent elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery086() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    everyThrowCount = 0;
    try {
    arr.every(Uint8ArrayEveryTest::everyThrowAndCount);
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, everyThrowCount);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0870
     * @tc.name testUint8ArrayEvery087
     * @tc.desc Verify [0xFF] value 255 predicate === 255 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery087() {
    Uint8Array arr = Uint8Array.of(0xFF);
    boolean result = arr.every((v) -> v == 255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0880
     * @tc.name testUint8ArrayEvery088
     * @tc.desc Verify [0x00] value 0 predicate >= 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery088() {
    Uint8Array arr = Uint8Array.of(0x00);
    boolean result = arr.every((v) -> v >= 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0890
     * @tc.name testUint8ArrayEvery089
     * @tc.desc Verify [0b11111111] binary 255 predicate === 255 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery089() {
    Uint8Array arr = Uint8Array.of(0b11111111);
    boolean result = arr.every((v) -> v == 255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0900
     * @tc.name testUint8ArrayEvery090
     * @tc.desc Verify [0o377] octal 255 predicate === 255 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery090() {
    Uint8Array arr = Uint8Array.of(0377);
    boolean result = arr.every((v) -> v == 255);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0910
     * @tc.name testUint8ArrayEvery091
     * @tc.desc Verify [0x80, 0xFF] hexadecimal mix all > 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery091() {
    Uint8Array arr = Uint8Array.of(0x80, 0xFF);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0920
     * @tc.name testUint8ArrayEvery092
     * @tc.desc Verify [100,100,100] all same === 100 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery092() {
    Uint8Array arr = Uint8Array.of(100, 100, 100);
    boolean result = arr.every((v) -> v == 100);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0930
     * @tc.name testUint8ArrayEvery093
     * @tc.desc Verify [100,100,100] all same !== 100 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery093() {
    Uint8Array arr = Uint8Array.of(100, 100, 100);
    boolean result = arr.every((v) -> v != 100);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0940
     * @tc.name testUint8ArrayEvery094
     * @tc.desc Verify [200,200,200] all same > 199 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery094() {
    Uint8Array arr = Uint8Array.of(200, 200, 200);
    boolean result = arr.every((v) -> v > 199);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0950
     * @tc.name testUint8ArrayEvery095
     * @tc.desc Verify [200,200,200] all same > 200 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery095() {
    Uint8Array arr = Uint8Array.of(200, 200, 200);
    boolean result = arr.every((v) -> v > 200);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0960
     * @tc.name testUint8ArrayEvery096
     * @tc.desc Verify [0,0,0] all elements < 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery096() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    boolean result = arr.every((v) -> v < 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0970
     * @tc.name testUint8ArrayEvery097
     * @tc.desc Verify [255,255,255] all elements === 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery097() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    boolean result = arr.every((v) -> v == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0980
     * @tc.name testUint8ArrayEvery098
     * @tc.desc Verify [255,255,255] all elements > 0 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery098() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    boolean result = arr.every((v) -> v > 0);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_0990
     * @tc.name testUint8ArrayEvery099
     * @tc.desc Verify [127,128] all elements > 126 and < 129 returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery099() {
    Uint8Array arr = Uint8Array.of(127, 128);
    boolean result = arr.every((v) -> v > 126 && v < 129);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1000
     * @tc.name testUint8ArrayEvery100
     * @tc.desc Verify [127,128] odd condition 128 even not satisfy returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery100() {
    Uint8Array arr = Uint8Array.of(127, 128);
    boolean result = arr.every((v) -> v % 2 == 1);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1010
     * @tc.name testUint8ArrayEvery101
     * @tc.desc Verify [10,10,10,10] index < 2 on 4 elements returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery101() {
    Uint8Array arr = Uint8Array.of(10, 10, 10, 10);
    boolean result = arr.every((v, idx) -> idx < 2);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1020
     * @tc.name testUint8ArrayEvery102
     * @tc.desc Verify [10,10,10,10] index >= 2 on 4 elements returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery102() {
    Uint8Array arr = Uint8Array.of(10, 10, 10, 10);
    boolean result = arr.every((v, idx) -> idx >= 2);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1030
     * @tc.name testUint8ArrayEvery103
     * @tc.desc Verify [5,5,5,5,5] all index in [0,5) range returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery103() {
    Uint8Array arr = Uint8Array.of(5, 5, 5, 5, 5);
    boolean result = arr.every((v, idx) -> idx >= 0 && idx < 5);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1040
     * @tc.name testUint8ArrayEvery104
     * @tc.desc Verify [5,5,5,5,5] index < 4 fails at index 4 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery104() {
    Uint8Array arr = Uint8Array.of(5, 5, 5, 5, 5);
    boolean result = arr.every((v, idx) -> idx < 4);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1050
     * @tc.name testUint8ArrayEvery105
     * @tc.desc Verify [0,127] even condition fails at 127 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery105() {
    Uint8Array arr = Uint8Array.of(0, 127);
    boolean result = arr.every((v) -> v % 2 == 0);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1060
     * @tc.name testUint8ArrayEvery106
     * @tc.desc Verify [1,2,3,4,5] predicate v === i + 1 all match returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery106() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    boolean result = arr.every((v, idx) -> v == idx + 1);
    assertTrue(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1070
     * @tc.name testUint8ArrayEvery107
     * @tc.desc Verify [1,2,3,4,5] predicate v === i fails at index 0 returns false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery107() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    boolean result = arr.every((v, idx) -> v == idx);
    assertFalse(result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_EVERY_1080
     * @tc.name testUint8ArrayEvery108
     * @tc.desc Verify [1,2,3,4,5] predicate v > i all match returns true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEvery108() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    boolean result = arr.every((v, idx) -> v > idx);
    assertTrue(result);
    }
}
