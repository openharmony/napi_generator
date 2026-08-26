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

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayIndexOf01Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayIndexOf01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0100
     * @tc.name testUint8ClampedArrayIndexOfOne001
     * @tc.desc Verify indexOf r equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0200
     * @tc.name testUint8ClampedArrayIndexOfOne002
     * @tc.desc Verify indexOf r equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(30);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0300
     * @tc.name testUint8ClampedArrayIndexOfOne003
     * @tc.desc Verify searchElement 99 not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(99);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0400
     * @tc.name testUint8ClampedArrayIndexOfOne004
     * @tc.desc Verify indexOf r equals 3 for array [10, 20, 30, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 10});
    int r = arr.indexOf(10, 1);
    assertEqual(3, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0500
     * @tc.name testUint8ClampedArrayIndexOfOne005
     * @tc.desc Verify searchElement + fromIndex=0 fromIndex
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(20, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0600
     * @tc.name testUint8ClampedArrayIndexOfOne006
     * @tc.desc Verify searchElement + fromIndex=undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int r = arr.indexOf(6, 0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0700
     * @tc.name testUint8ClampedArrayIndexOfOne007
     * @tc.desc Verify indexOf r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int r = arr.indexOf(0);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0800
     * @tc.name testUint8ClampedArrayIndexOfOne008
     * @tc.desc Verify indexOf r equals 0 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_0900
     * @tc.name testUint8ClampedArrayIndexOfOne009
     * @tc.desc Verify searchElement=255 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254, 255, 0});
    int r = arr.indexOf(255);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1000
     * @tc.name testUint8ClampedArrayIndexOfOne010
     * @tc.desc Verify searchElement=127 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int r = arr.indexOf(127);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1100
     * @tc.name testUint8ClampedArrayIndexOfOne011
     * @tc.desc Verify searchElement=128 returns index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int r = arr.indexOf(128);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1200
     * @tc.name testUint8ClampedArrayIndexOfOne012
     * @tc.desc Verify searchElement=1 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(1);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1300
     * @tc.name testUint8ClampedArrayIndexOfOne013
     * @tc.desc Verify searchElement=254 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {253, 254, 255});
    int r = arr.indexOf(254);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1400
     * @tc.name testUint8ClampedArrayIndexOfOne014
     * @tc.desc Verify indexOf r equals -1 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(-1);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1500
     * @tc.name testUint8ClampedArrayIndexOfOne015
     * @tc.desc Verify searchElement=1000 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(1000);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1600
     * @tc.name testUint8ClampedArrayIndexOfOne016
     * @tc.desc Verify searchElement=-1000 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    int r = arr.indexOf(-1000);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1700
     * @tc.name testUint8ClampedArrayIndexOfOne017
     * @tc.desc Verify indexOf r equals -1 for array [0, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(Double.POSITIVE_INFINITY);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1800
     * @tc.name testUint8ClampedArrayIndexOfOne018
     * @tc.desc Verify indexOf r equals -1 for array [0, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(-Double.POSITIVE_INFINITY);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_1900
     * @tc.name testUint8ClampedArrayIndexOfOne019
     * @tc.desc Verify indexOf r equals 0 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(0.0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2000
     * @tc.name testUint8ClampedArrayIndexOfOne020
     * @tc.desc Verify indexOf r equals -1 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(0.5);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2100
     * @tc.name testUint8ClampedArrayIndexOfOne021
     * @tc.desc Verify indexOf r equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.indexOf(1.5);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2200
     * @tc.name testUint8ClampedArrayIndexOfOne022
     * @tc.desc Verify indexOf(127.5) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128});
    int r = arr.indexOf(127.5);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2300
     * @tc.name testUint8ClampedArrayIndexOfOne023
     * @tc.desc Verify indexOf r equals 1 for array [254, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254, 255});
    int r = arr.indexOf(255.0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2400
     * @tc.name testUint8ClampedArrayIndexOfOne024
     * @tc.desc Verify searchElement=Number.MAX_VALUE
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(Double.MAX_VALUE);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2500
     * @tc.name testUint8ClampedArrayIndexOfOne025
     * @tc.desc Verify indexOf(Number.MIN_VALUE) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(Double.MIN_VALUE);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2600
     * @tc.name testUint8ClampedArrayIndexOfOne026
     * @tc.desc Verify searchElement=Number.MAX_SAFE_INTEGER
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(9007199254740991L);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2700
     * @tc.name testUint8ClampedArrayIndexOfOne027
     * @tc.desc Verify searchElement=Number.MIN_SAFE_INTEGER
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(-9007199254740991L);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2800
     * @tc.name testUint8ClampedArrayIndexOfOne028
     * @tc.desc Verify searchElement=2147483648 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    long r = arr.indexOf(2147483648L);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_2900
     * @tc.name testUint8ClampedArrayIndexOfOne029
     * @tc.desc Verify searchElement=1e9 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(1e9);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3000
     * @tc.name testUint8ClampedArrayIndexOfOne030
     * @tc.desc Verify searchElement=-1e9 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(-1e9);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3100
     * @tc.name testUint8ClampedArrayIndexOfOne031
     * @tc.desc Verify searchElement=1e2 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 100, 101});
    int r = arr.indexOf(1e2);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3200
     * @tc.name testUint8ClampedArrayIndexOfOne032
     * @tc.desc Verify searchElement=0x00 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(0x00);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3300
     * @tc.name testUint8ClampedArrayIndexOfOne033
     * @tc.desc Verify searchElement=0xFF returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254, 255});
    int r = arr.indexOf(0xFF);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3400
     * @tc.name testUint8ClampedArrayIndexOfOne034
     * @tc.desc Verify searchElement=0x7F returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int r = arr.indexOf(0x7F);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3500
     * @tc.name testUint8ClampedArrayIndexOfOne035
     * @tc.desc Verify searchElement=0x80 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128, 129});
    int r = arr.indexOf(0x80);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3600
     * @tc.name testUint8ClampedArrayIndexOfOne036
     * @tc.desc Verify searchElement=0o17 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {14, 15, 16});
    int r = arr.indexOf(017);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3700
     * @tc.name testUint8ClampedArrayIndexOfOne037
     * @tc.desc Verify searchElement=0o377 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254, 255});
    int r = arr.indexOf(0377);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3800
     * @tc.name testUint8ClampedArrayIndexOfOne038
     * @tc.desc Verify searchElement=0b0 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    int r = arr.indexOf(0b0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_3900
     * @tc.name testUint8ClampedArrayIndexOfOne039
     * @tc.desc Verify searchElement=0b11111111 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    int r = arr.indexOf(0b11111111);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4000
     * @tc.name testUint8ClampedArrayIndexOfOne040
     * @tc.desc Verify searchElement=0b1 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(0b1);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4100
     * @tc.name testUint8ClampedArrayIndexOfOne041
     * @tc.desc Verify searchElement byte=20 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = 20;
    int r = arr.indexOf(v);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4200
     * @tc.name testUint8ClampedArrayIndexOfOne042
     * @tc.desc Verify searchElement byte=0 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int v = 0;
    int r = arr.indexOf(v);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4300
     * @tc.name testUint8ClampedArrayIndexOfOne043
     * @tc.desc Verify searchElement byte=127 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int v = 127;
    int r = arr.indexOf(v);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4400
     * @tc.name testUint8ClampedArrayIndexOfOne044
     * @tc.desc Verify searchElement byte=-128 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 255});
    int v = -128;
    int r = arr.indexOf(v);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4500
     * @tc.name testUint8ClampedArrayIndexOfOne045
     * @tc.desc Verify indexOf(2) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int r = arr.indexOf(2);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4600
     * @tc.name testUint8ClampedArrayIndexOfOne046
     * @tc.desc Verify indexOf(255) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3});
    int r = arr.indexOf(255);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4700
     * @tc.name testUint8ClampedArrayIndexOfOne047
     * @tc.desc Verify indexOf(0) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.indexOf(0);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4800
     * @tc.name testUint8ClampedArrayIndexOfOne048
     * @tc.desc Verify indexOf r equals 0 for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    int r = arr.indexOf(100);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_4900
     * @tc.name testUint8ClampedArrayIndexOfOne049
     * @tc.desc Verify indexOf r equals -1 for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    int r = arr.indexOf(200);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5000
     * @tc.name testUint8ClampedArrayIndexOfOne050
     * @tc.desc Verify indexOf r equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne050() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 42);
    int r = arr.indexOf(42);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5100
     * @tc.name testUint8ClampedArrayIndexOfOne051
     * @tc.desc Verify indexOf r equals 1023 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne051() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(1023, 42);
    int r = arr.indexOf(42);
    assertEqual(1023, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5200
     * @tc.name testUint8ClampedArrayIndexOfOne052
     * @tc.desc Verify searchElement=1.0e0 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int r = arr.indexOf(1.0e0);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5300
     * @tc.name testUint8ClampedArrayIndexOfOne053
     * @tc.desc Verify indexOf r equals 2 for array [10, 20, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 10});
    int r = arr.indexOf(10, 1);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5400
     * @tc.name testUint8ClampedArrayIndexOfOne054
     * @tc.desc Verify indexOf r equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(30, 2);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5500
     * @tc.name testUint8ClampedArrayIndexOfOne055
     * @tc.desc Verify indexOf r equals -1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, 2);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5600
     * @tc.name testUint8ClampedArrayIndexOfOne056
     * @tc.desc Verify indexOf r equals -1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, 3);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5700
     * @tc.name testUint8ClampedArrayIndexOfOne057
     * @tc.desc Verify indexOf r equals -1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, 4);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5800
     * @tc.name testUint8ClampedArrayIndexOfOne058
     * @tc.desc Verify indexOf r equals -1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, 103);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_5900
     * @tc.name testUint8ClampedArrayIndexOfOne059
     * @tc.desc Verify indexOf r equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(30, -1);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6000
     * @tc.name testUint8ClampedArrayIndexOfOne060
     * @tc.desc Verify indexOf(10, -1) not found returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, -1);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6100
     * @tc.name testUint8ClampedArrayIndexOfOne061
     * @tc.desc Verify indexOf r equals 1 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(20, -2);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6200
     * @tc.name testUint8ClampedArrayIndexOfOne062
     * @tc.desc Verify indexOf r equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, -3);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6300
     * @tc.name testUint8ClampedArrayIndexOfOne063
     * @tc.desc Verify indexOf r equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, -4);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6400
     * @tc.name testUint8ClampedArrayIndexOfOne064
     * @tc.desc Verify fromIndex=-length-100 -length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(20, -103);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6500
     * @tc.name testUint8ClampedArrayIndexOfOne065
     * @tc.desc Verify fromIndex=2147483647 returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, 2147483647);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6600
     * @tc.name testUint8ClampedArrayIndexOfOne066
     * @tc.desc Verify fromIndex=0x7FFFFFFF returns -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(10, 0x7FFFFFFF);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6700
     * @tc.name testUint8ClampedArrayIndexOfOne067
     * @tc.desc Verify fromIndex=-2147483648 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.indexOf(20, Integer.MIN_VALUE);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6800
     * @tc.name testUint8ClampedArrayIndexOfOne068
     * @tc.desc Verify indexOf r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int r = arr.indexOf(0, -1);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_6900
     * @tc.name testUint8ClampedArrayIndexOfOne069
     * @tc.desc Verify indexOf r equals -1 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int r = arr.indexOf(0, 10);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7000
     * @tc.name testUint8ClampedArrayIndexOfOne070
     * @tc.desc Verify indexOf r equals 0 for array [7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    int r = arr.indexOf(7, 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7100
     * @tc.name testUint8ClampedArrayIndexOfOne071
     * @tc.desc Verify indexOf r equals -1 for array [7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    int r = arr.indexOf(7, 1);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7200
     * @tc.name testUint8ClampedArrayIndexOfOne072
     * @tc.desc Verify indexOf r equals 0 for array [7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    int r = arr.indexOf(7, -1);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7300
     * @tc.name testUint8ClampedArrayIndexOfOne073
     * @tc.desc Verify fromIndex=0x10 finds element at index 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne073() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(20, 88);
    int r = arr.indexOf(88, 0x10);
    assertEqual(20, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7400
     * @tc.name testUint8ClampedArrayIndexOfOne074
     * @tc.desc Verify fromIndex=0o10 finds element at index 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne074() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(10, 77);
    int r = arr.indexOf(77, 010);
    assertEqual(10, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7500
     * @tc.name testUint8ClampedArrayIndexOfOne075
     * @tc.desc Verify fromIndex=0b100 returns index 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0, 5, 6});
    int r = arr.indexOf(5, 0b100);
    assertEqual(4, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7600
     * @tc.name testUint8ClampedArrayIndexOfOne076
     * @tc.desc Verify indexOf r equals 0 for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    int r = arr.indexOf(7, 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7700
     * @tc.name testUint8ClampedArrayIndexOfOne077
     * @tc.desc Verify indexOf r equals 1 for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    int r = arr.indexOf(7, 1);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7800
     * @tc.name testUint8ClampedArrayIndexOfOne078
     * @tc.desc Verify indexOf r equals 2 for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    int r = arr.indexOf(7, 2);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_7900
     * @tc.name testUint8ClampedArrayIndexOfOne079
     * @tc.desc Verify indexOf r equals 0 for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    int r = arr.indexOf(7, -3);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8000
     * @tc.name testUint8ClampedArrayIndexOfOne080
     * @tc.desc Verify indexOf r equals 1 for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    int r = arr.indexOf(7, -2);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8100
     * @tc.name testUint8ClampedArrayIndexOfOne081
     * @tc.desc Verify indexOf r equals -1 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne081() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(100, 11);
    int r = arr.indexOf(11, 1024);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8200
     * @tc.name testUint8ClampedArrayIndexOfOne082
     * @tc.desc Verify indexOf r equals -1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.indexOf(1, 65535);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8300
     * @tc.name testUint8ClampedArrayIndexOfOne083
     * @tc.desc Verify indexOf r equals -1 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne083() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(254, 9);
    int r = arr.indexOf(9, 255);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8400
     * @tc.name testUint8ClampedArrayIndexOfOne084
     * @tc.desc Verify fromIndex=254 returns index 254
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne084() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(254, 9);
    int r = arr.indexOf(9, 254);
    assertEqual(254, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8500
     * @tc.name testUint8ClampedArrayIndexOfOne085
     * @tc.desc Verify fromIndex=-255 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne085() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 9);
    int r = arr.indexOf(9, -255);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8600
     * @tc.name testUint8ClampedArrayIndexOfOne086
     * @tc.desc Verify fromIndex=-256 returns index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne086() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 9);
    int r = arr.indexOf(9, -256);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8700
     * @tc.name testUint8ClampedArrayIndexOfOne087
     * @tc.desc Verify indexOf r equals -1 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne087() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(500, 77);
    int r = arr.indexOf(77, 1024);
    assertEqual(-1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8800
     * @tc.name testUint8ClampedArrayIndexOfOne088
     * @tc.desc Verify fromIndex int=0 returns index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int idx = 0;
    int r = arr.indexOf(6, idx);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INDEX_OF_ONE_8900
     * @tc.name testUint8ClampedArrayIndexOfOne089
     * @tc.desc Verify indexOf r equals 2 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIndexOfOne089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int r = arr.indexOf(7, 1 + 1);
    assertEqual(2, r);
    }
}
