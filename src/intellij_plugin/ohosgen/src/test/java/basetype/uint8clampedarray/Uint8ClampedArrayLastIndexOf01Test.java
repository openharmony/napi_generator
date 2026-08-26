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

package basetype.uint8clampedarray;

import basetype.common.BasTest;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayLastIndexOf01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayLastIndexOf01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0100
     * @tc.name testUint8ClampedArrayLastIndexOfOne001
     * @tc.desc Verify lastIndexOf searchElement=20 number, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 20, 10});
    int idx = arr.lastIndexOf(20);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0200
     * @tc.name testUint8ClampedArrayLastIndexOfOne002
     * @tc.desc Verify lastIndexOf searchElement byte=30, returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 20, 10});
    int target = 30;
    int idx = arr.lastIndexOf(target);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0300
     * @tc.name testUint8ClampedArrayLastIndexOfOne003
     * @tc.desc Verify lastIndexOf searchElement=20 with fromIndex=2, returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 20, 10});
    int idx = arr.lastIndexOf(20, 2);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0400
     * @tc.name testUint8ClampedArrayLastIndexOfOne004
     * @tc.desc Verify lastIndexOf(10, 0) returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(10, 0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0500
     * @tc.name testUint8ClampedArrayLastIndexOfOne005
     * @tc.desc Verify lastIndexOf default fromIndex=length-1, searchElement=42 returns 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int idx = arr.lastIndexOf(42);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0600
     * @tc.name testUint8ClampedArrayLastIndexOfOne006
     * @tc.desc Verify lastIndexOf empty array returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int idx = arr.lastIndexOf(0);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0700
     * @tc.name testUint8ClampedArrayLastIndexOfOne007
     * @tc.desc Verify lastIndexOf idx equals 2 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int idx = arr.lastIndexOf(7);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0800
     * @tc.name testUint8ClampedArrayLastIndexOfOne008
     * @tc.desc Verify lastIndexOf(5) default fromIndex equals fromIndex=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int idx1 = arr.lastIndexOf(5);
    int idx2 = arr.lastIndexOf(5, 4);
    assertEqual(idx2, idx1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_0900
     * @tc.name testUint8ClampedArrayLastIndexOfOne009
     * @tc.desc Verify lastIndexOf searchElement=0, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 0, 3});
    int idx = arr.lastIndexOf(0);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1000
     * @tc.name testUint8ClampedArrayLastIndexOfOne010
     * @tc.desc Verify lastIndexOf searchElement=255, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 255, 2, 255, 3});
    int idx = arr.lastIndexOf(255);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1100
     * @tc.name testUint8ClampedArrayLastIndexOfOne011
     * @tc.desc Verify lastIndexOf searchElement=1, returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 1, 3});
    int idx = arr.lastIndexOf(1);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1200
     * @tc.name testUint8ClampedArrayLastIndexOfOne012
     * @tc.desc Verify lastIndexOf searchElement=127, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 127, 200, 127});
    int idx = arr.lastIndexOf(127);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1300
     * @tc.name testUint8ClampedArrayLastIndexOfOne013
     * @tc.desc Verify lastIndexOf searchElement=128, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128, 129, 128});
    int idx = arr.lastIndexOf(128);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1400
     * @tc.name testUint8ClampedArrayLastIndexOfOne014
     * @tc.desc Verify lastIndexOf searchElement=254, returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254, 255, 253});
    int idx = arr.lastIndexOf(254);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1500
     * @tc.name testUint8ClampedArrayLastIndexOfOne015
     * @tc.desc Verify lastIndexOf searchElement=256 not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    int idx = arr.lastIndexOf(256);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1600
     * @tc.name testUint8ClampedArrayLastIndexOfOne016
     * @tc.desc Verify lastIndexOf searchElement=-1 not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int idx = arr.lastIndexOf(-1);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1700
     * @tc.name testUint8ClampedArrayLastIndexOfOne017
     * @tc.desc Verify lastIndexOf searchElement=NaN, NaN!==NaN returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int idx = arr.lastIndexOf(Double.NaN);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1800
     * @tc.name testUint8ClampedArrayLastIndexOfOne018
     * @tc.desc Verify lastIndexOf searchElement=Infinity not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255});
    int idx = arr.lastIndexOf(Double.POSITIVE_INFINITY);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_1900
     * @tc.name testUint8ClampedArrayLastIndexOfOne019
     * @tc.desc Verify lastIndexOf searchElement=-Infinity not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int idx = arr.lastIndexOf(-Double.POSITIVE_INFINITY);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2000
     * @tc.name testUint8ClampedArrayLastIndexOfOne020
     * @tc.desc Verify lastIndexOf searchElement=0.0, returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 0});
    int idx = arr.lastIndexOf(0.0);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2100
     * @tc.name testUint8ClampedArrayLastIndexOfOne021
     * @tc.desc Verify lastIndexOf searchElement=0.5 not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int idx = arr.lastIndexOf(0.5);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2200
     * @tc.name testUint8ClampedArrayLastIndexOfOne022
     * @tc.desc Verify lastIndexOf searchElement=127.5, not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128});
    int idx = arr.lastIndexOf(127.5);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2300
     * @tc.name testUint8ClampedArrayLastIndexOfOne023
     * @tc.desc Verify lastIndexOf searchElement=100.0, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 100, 101, 100});
    int idx = arr.lastIndexOf(100.0);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2400
     * @tc.name testUint8ClampedArrayLastIndexOfOne024
     * @tc.desc Verify lastIndexOf searchElement=1e2 (=100), returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 50, 100});
    int idx = arr.lastIndexOf(1e2);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2500
     * @tc.name testUint8ClampedArrayLastIndexOfOne025
     * @tc.desc Verify lastIndexOf searchElement=0x7F (=127), returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 0, 127});
    int idx = arr.lastIndexOf(0x7F);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2600
     * @tc.name testUint8ClampedArrayLastIndexOfOne026
     * @tc.desc Verify lastIndexOf searchElement=0xFF (=255), returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 255, 0});
    int idx = arr.lastIndexOf(0xFF);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2700
     * @tc.name testUint8ClampedArrayLastIndexOfOne027
     * @tc.desc Verify lastIndexOf searchElement=0o17 (=15), returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {15, 14, 15});
    int idx = arr.lastIndexOf(017);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2800
     * @tc.name testUint8ClampedArrayLastIndexOfOne028
     * @tc.desc Verify lastIndexOf searchElement=0b1010 (=10), returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 10});
    int idx = arr.lastIndexOf(0b1010);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_2900
     * @tc.name testUint8ClampedArrayLastIndexOfOne029
     * @tc.desc Verify lastIndexOf searchElement=0x100 (=256) not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255});
    int idx = arr.lastIndexOf(0x100);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3000
     * @tc.name testUint8ClampedArrayLastIndexOfOne030
     * @tc.desc Verify lastIndexOf searchElement=1e9 not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 200});
    int idx = arr.lastIndexOf(1e9);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3100
     * @tc.name testUint8ClampedArrayLastIndexOfOne031
     * @tc.desc Verify lastIndexOf searchElement=Number.MAX_VALUE not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    int idx = arr.lastIndexOf(Double.MAX_VALUE);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3200
     * @tc.name testUint8ClampedArrayLastIndexOfOne032
     * @tc.desc Verify lastIndexOf searchElement=Number.MIN_VALUE not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    int idx = arr.lastIndexOf(Double.MIN_VALUE);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3300
     * @tc.name testUint8ClampedArrayLastIndexOfOne033
     * @tc.desc Verify lastIndexOf searchElement=Number.MAX_SAFE_INTEGER not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    int idx = arr.lastIndexOf(9007199254740991L);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3400
     * @tc.name testUint8ClampedArrayLastIndexOfOne034
     * @tc.desc Verify lastIndexOf searchElement byte=10, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 10});
    int target = 10;
    int idx = arr.lastIndexOf(target);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3500
     * @tc.name testUint8ClampedArrayLastIndexOfOne035
     * @tc.desc Verify lastIndexOf searchElement byte=0, returns last index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 0, 2});
    int target = 0;
    int idx = arr.lastIndexOf(target);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3600
     * @tc.name testUint8ClampedArrayLastIndexOfOne036
     * @tc.desc Verify lastIndexOf searchElement byte=127, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 127, 2, 127});
    int target = 127;
    int idx = arr.lastIndexOf(target);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3700
     * @tc.name testUint8ClampedArrayLastIndexOfOne037
     * @tc.desc Verify lastIndexOf searchElement byte=-1 not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int target = -1;
    int idx = arr.lastIndexOf(target);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3800
     * @tc.name testUint8ClampedArrayLastIndexOfOne038
     * @tc.desc Verify lastIndexOf searchElement byte=-128 not clamped (Strict Equality), not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int target = -128;
    int idx = arr.lastIndexOf(target);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_3900
     * @tc.name testUint8ClampedArrayLastIndexOfOne039
     * @tc.desc Verify lastIndexOf searchElement=42, returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 1, 2, 3});
    int idx = arr.lastIndexOf(42);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4000
     * @tc.name testUint8ClampedArrayLastIndexOfOne040
     * @tc.desc Verify lastIndexOf searchElement=99, returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 99});
    int idx = arr.lastIndexOf(99);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4100
     * @tc.name testUint8ClampedArrayLastIndexOfOne041
     * @tc.desc Verify lastIndexOf searchElement=7, returns last index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7});
    int idx = arr.lastIndexOf(7);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4200
     * @tc.name testUint8ClampedArrayLastIndexOfOne042
     * @tc.desc Verify lastIndexOf(99) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.lastIndexOf(99);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4300
     * @tc.name testUint8ClampedArrayLastIndexOfOne043
     * @tc.desc Verify lastIndexOf fromIndex=0, searchElement=10 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 10});
    int idx = arr.lastIndexOf(10, 0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4400
     * @tc.name testUint8ClampedArrayLastIndexOfOne044
     * @tc.desc Verify lastIndexOf fromIndex=0, searchElement=20 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(20, 0);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4500
     * @tc.name testUint8ClampedArrayLastIndexOfOne045
     * @tc.desc Verify lastIndexOf idx equals 1 for array [10, 20, 30, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 20});
    int idx = arr.lastIndexOf(20, 1);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4600
     * @tc.name testUint8ClampedArrayLastIndexOfOne046
     * @tc.desc Verify lastIndexOf idx equals 1 for array [10, 20, 30, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 20});
    int idx = arr.lastIndexOf(20, 2);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4700
     * @tc.name testUint8ClampedArrayLastIndexOfOne047
     * @tc.desc Verify lastIndexOf fromIndex=length-1, searchElement=20 returns index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 20});
    int idx = arr.lastIndexOf(20, 3);
    assertEqual(3, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4800
     * @tc.name testUint8ClampedArrayLastIndexOfOne048
     * @tc.desc Verify lastIndexOf fromIndex=length, searchElement=30 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(30, 3);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_4900
     * @tc.name testUint8ClampedArrayLastIndexOfOne049
     * @tc.desc Verify lastIndexOf fromIndex=length+1, searchElement=10 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(10, 4);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5000
     * @tc.name testUint8ClampedArrayLastIndexOfOne050
     * @tc.desc Verify lastIndexOf fromIndex=length+100, searchElement=3 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.lastIndexOf(3, 103);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5100
     * @tc.name testUint8ClampedArrayLastIndexOfOne051
     * @tc.desc Verify lastIndexOf fromIndex=-1, searchElement=30 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(30, -1);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5200
     * @tc.name testUint8ClampedArrayLastIndexOfOne052
     * @tc.desc Verify lastIndexOf fromIndex=-2, searchElement=30 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(30, -2);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5300
     * @tc.name testUint8ClampedArrayLastIndexOfOne053
     * @tc.desc Verify lastIndexOf fromIndex=-2, searchElement=20 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int idx = arr.lastIndexOf(20, -2);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5400
     * @tc.name testUint8ClampedArrayLastIndexOfOne054
     * @tc.desc Verify lastIndexOf fromIndex=-length (=0), searchElement=10 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(10, -3);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5500
     * @tc.name testUint8ClampedArrayLastIndexOfOne055
     * @tc.desc Verify lastIndexOf idx equals -1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(20, -3);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5600
     * @tc.name testUint8ClampedArrayLastIndexOfOne056
     * @tc.desc Verify lastIndexOf fromIndex=-length-1, searchElement=10 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(10, -4);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5700
     * @tc.name testUint8ClampedArrayLastIndexOfOne057
     * @tc.desc Verify lastIndexOf fromIndex=-length-100, searchElement=10 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int idx = arr.lastIndexOf(10, -103);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5800
     * @tc.name testUint8ClampedArrayLastIndexOfOne058
     * @tc.desc Verify lastIndexOf fromIndex=INT_MAX, searchElement=9 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    int idx = arr.lastIndexOf(9, 2147483647);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_5900
     * @tc.name testUint8ClampedArrayLastIndexOfOne059
     * @tc.desc Verify lastIndexOf fromIndex=INT_MIN, searchElement=7 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    int idx = arr.lastIndexOf(7, Integer.MIN_VALUE);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6000
     * @tc.name testUint8ClampedArrayLastIndexOfOne060
     * @tc.desc Verify lastIndexOf fromIndex=0x7FFFFFFF (=INT_MAX), searchElement=2 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.lastIndexOf(2, 0x7FFFFFFF);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6100
     * @tc.name testUint8ClampedArrayLastIndexOfOne061
     * @tc.desc Verify lastIndexOf fromIndex=0x0 (=0), searchElement=5 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 5});
    int idx = arr.lastIndexOf(5, 0x0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6200
     * @tc.name testUint8ClampedArrayLastIndexOfOne062
     * @tc.desc Verify lastIndexOf fromIndex=0o3 (=3), searchElement=3 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 3});
    int idx = arr.lastIndexOf(3, 03);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6300
     * @tc.name testUint8ClampedArrayLastIndexOfOne063
     * @tc.desc Verify lastIndexOf fromIndex=0b10 (=2), searchElement=2 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 2});
    int idx = arr.lastIndexOf(2, 0b10);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6400
     * @tc.name testUint8ClampedArrayLastIndexOfOne064
     * @tc.desc Verify lastIndexOf fromIndex=1e1 (=10), searchElement=3 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.lastIndexOf(3, 10);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6500
     * @tc.name testUint8ClampedArrayLastIndexOfOne065
     * @tc.desc Verify lastIndexOf(3, 0) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int idx = arr.lastIndexOf(3, 0);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6600
     * @tc.name testUint8ClampedArrayLastIndexOfOne066
     * @tc.desc Verify lastIndexOf fromIndex=3, searchElement=50 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.lastIndexOf(50, 3);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6700
     * @tc.name testUint8ClampedArrayLastIndexOfOne067
     * @tc.desc Verify lastIndexOf fromIndex=3, searchElement=20 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.lastIndexOf(20, 3);
    assertEqual(1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6800
     * @tc.name testUint8ClampedArrayLastIndexOfOne068
     * @tc.desc Verify lastIndexOf fromIndex=2, searchElement=30 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.lastIndexOf(30, 2);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_6900
     * @tc.name testUint8ClampedArrayLastIndexOfOne069
     * @tc.desc Verify lastIndexOf fromIndex=-length, searchElement=88 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88, 1, 2, 3});
    int idx = arr.lastIndexOf(88, -4);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7000
     * @tc.name testUint8ClampedArrayLastIndexOfOne070
     * @tc.desc Verify lastIndexOf 64-element array fromIndex=30, searchElement=50 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne070() {
    List<Number> data = java.util.Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64);
    Uint8ClampedArray arr = new Uint8ClampedArray(data);
    int idx = arr.lastIndexOf(50, 30);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7100
     * @tc.name testUint8ClampedArrayLastIndexOfOne071
     * @tc.desc Verify lastIndexOf 64-element array fromIndex=49, searchElement=50 returns index 49
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne071() {
    List<Number> data = java.util.Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64);
    Uint8ClampedArray arr = new Uint8ClampedArray(data);
    int idx = arr.lastIndexOf(50, 49);
    assertEqual(49, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7200
     * @tc.name testUint8ClampedArrayLastIndexOfOne072
     * @tc.desc Verify lastIndexOf empty array fromIndex=0, returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int idx = arr.lastIndexOf(0, 0);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7300
     * @tc.name testUint8ClampedArrayLastIndexOfOne073
     * @tc.desc Verify lastIndexOf fromIndex=3, searchElement=5 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 5, 6, 5, 6});
    int idx = arr.lastIndexOf(5, 3);
    assertEqual(2, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7400
     * @tc.name testUint8ClampedArrayLastIndexOfOne074
     * @tc.desc Verify lastIndexOf fromIndex=0, searchElement=5 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 5, 6, 5, 6});
    int idx = arr.lastIndexOf(5, 0);
    assertEqual(0, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7500
     * @tc.name testUint8ClampedArrayLastIndexOfOne075
     * @tc.desc Verify lastIndexOf 256-element array fromIndex=255, searchElement=100 returns index 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne075() {
    List<Number> data = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
    data.add(i % 256);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(data);
    int idx = arr.lastIndexOf(100, 255);
    assertEqual(100, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7600
     * @tc.name testUint8ClampedArrayLastIndexOfOne076
     * @tc.desc Verify lastIndexOf fromIndex=-3, searchElement=40 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.lastIndexOf(40, -3);
    assertEqual(-1, idx);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_LAST_INDEX_OF_ONE_7700
     * @tc.name testUint8ClampedArrayLastIndexOfOne077
     * @tc.desc Verify lastIndexOf fromIndex=-3, searchElement=30 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayLastIndexOfOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    int idx = arr.lastIndexOf(30, -3);
    assertEqual(2, idx);
    }
}
