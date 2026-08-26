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
 * Uint8ClampedArrayFindTest —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayFindTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0100
     * @tc.name testUint8ClampedArrayFind001
     * @tc.desc Verify find r equals 3 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.find((v, i, a) -> v == 3);
    assertEqual(3, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0200
     * @tc.name testUint8ClampedArrayFind002
     * @tc.desc Verify find r equals 10 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.find((v, i, a) -> true);
    assertEqual(10, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0300
     * @tc.name testUint8ClampedArrayFind003
     * @tc.desc Verify find r equals undefined for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.find((v, i, a) -> false);
    assertNull(r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0400
     * @tc.name testUint8ClampedArrayFind004
     * @tc.desc Verify find r equals 15 for array [5, 10, 15, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Integer r = arr.find((v, i, a) -> v > 12);
    assertEqual(15, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0500
     * @tc.name testUint8ClampedArrayFind005
     * @tc.desc Verify find r equals 7 for array [2, 4, 7, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 4, 7, 8});
    Integer r = arr.find((v, i, a) -> v % 2 == 1);
    assertEqual(7, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0600
     * @tc.name testUint8ClampedArrayFind006
     * @tc.desc Verify find r equals 102 for array [100, 101, 102, 103]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 101, 102, 103});
    Integer r = arr.find((v, i, a) -> i == 2);
    assertEqual(102, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0700
     * @tc.name testUint8ClampedArrayFind007
     * @tc.desc Verify find r equals 20 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Integer r = arr.find((v, i, a) -> a.length() == 3 && v == 20);
    assertEqual(20, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0800
     * @tc.name testUint8ClampedArrayFind008
     * @tc.desc Verify find r equals 4 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Integer r = arr.find((v, i, a) -> i > 0 && a.get(i - 1) == 3);
    assertEqual(4, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_0900
     * @tc.name testUint8ClampedArrayFind009
     * @tc.desc Verify predicate truthy/falsy boolean
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.find((v, i, a) -> v > 1 ? true : false);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1000
     * @tc.name testUint8ClampedArrayFind010
     * @tc.desc Verify find r equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    Integer r = arr.find((v, i, a) -> { calls[0] = calls[0] + 1; return v == 4; });
    assertEqual(4, r);
    assertEqual(4, calls[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1100
     * @tc.name testUint8ClampedArrayFind011
     * @tc.desc Verify find r equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    Integer r = arr.find((v, i, a) -> { calls[0] = calls[0] + 1; return v == 2; });
    assertEqual(2, r);
    assertEqual(2, calls[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1200
     * @tc.name testUint8ClampedArrayFind012
     * @tc.desc Verify find r equals 10 for array [5, 10, 15, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Integer r = arr.find((v, i, a) -> v > 5 && v < 20);
    assertEqual(10, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1300
     * @tc.name testUint8ClampedArrayFind013
     * @tc.desc Verify find r equals 15 for array [5, 10, 15, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Integer r = arr.find((v, i, a) -> v == 0 || v == 15);
    assertEqual(15, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1400
     * @tc.name testUint8ClampedArrayFind014
     * @tc.desc Verify find returns the first even value 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r = arr.find((v, i, a) -> { Uint8ClampedArray sub = new Uint8ClampedArray(new int[] {v, v + 1}); return java.util.Objects.equals(sub.find((x, j, b) -> x == 3), 3); });
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1500
     * @tc.name testUint8ClampedArrayFind015
     * @tc.desc Verify find r equals 0 for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1600
     * @tc.name testUint8ClampedArrayFind016
     * @tc.desc Verify find r equals 255 for array [1, 256, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 256, 3});
    Integer r = arr.find((v, i, a) -> v == 255);
    assertEqual(255, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1700
     * @tc.name testUint8ClampedArrayFind017
     * @tc.desc Verify find r equals 0 for array [-1, 5, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 5, 10});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1800
     * @tc.name testUint8ClampedArrayFind018
     * @tc.desc Verify find r equals 0 for array [Number.NaN, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 1, 2});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_1900
     * @tc.name testUint8ClampedArrayFind019
     * @tc.desc Verify find r equals 255 for array [Number.POSITIVE_INFINITY, 1,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 1, 2});
    Integer r = arr.find((v, i, a) -> v == 255);
    assertEqual(255, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2000
     * @tc.name testUint8ClampedArrayFind020
     * @tc.desc Verify find r equals 0 for array [-Number.POSITIVE_INFINITY, 1,
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 1, 2});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2100
     * @tc.name testUint8ClampedArrayFind021
     * @tc.desc Verify find r equals 128 for array [127.5, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 0, 0});
    Integer r = arr.find((v, i, a) -> v == 128);
    assertEqual(128, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2200
     * @tc.name testUint8ClampedArrayFind022
     * @tc.desc Verify find r equals 128 for array [128.5, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 0, 0});
    Integer r = arr.find((v, i, a) -> v == 128);
    assertEqual(128, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2300
     * @tc.name testUint8ClampedArrayFind023
     * @tc.desc Verify find r equals 0 for array [0.5, 10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 10, 20});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2400
     * @tc.name testUint8ClampedArrayFind024
     * @tc.desc Verify find r equals 1 for array [0.9, 10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9, 10, 20});
    Integer r = arr.find((v, i, a) -> v == 1);
    assertEqual(1, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2500
     * @tc.name testUint8ClampedArrayFind025
     * @tc.desc Verify find r equals 0 for array [0.4, 10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4, 10, 20});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2600
     * @tc.name testUint8ClampedArrayFind026
     * @tc.desc Verify find r equals 32 for array [0x10, 0x20, 0x30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x10, 0x20, 0x30});
    Integer r = arr.find((v, i, a) -> v == 0x20);
    assertEqual(32, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2700
     * @tc.name testUint8ClampedArrayFind027
     * @tc.desc Verify find r equals 16 for array [0o10, 0o20, 0o30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {010, 020, 030});
    Integer r = arr.find((v, i, a) -> v == 16);
    assertEqual(16, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2800
     * @tc.name testUint8ClampedArrayFind028
     * @tc.desc Verify find r equals 12 for array [0b1010, 0b1100, 0b1110]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1010, 0b1100, 0b1110});
    Integer r = arr.find((v, i, a) -> v == 12);
    assertEqual(12, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_2900
     * @tc.name testUint8ClampedArrayFind029
     * @tc.desc Verify find r equals 255 for array [Number.MAX_VALUE, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MAX_VALUE, 0, 0});
    Integer r = arr.find((v, i, a) -> v == 255);
    assertEqual(255, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3000
     * @tc.name testUint8ClampedArrayFind030
     * @tc.desc Verify find r equals 0 for array [Number.MIN_VALUE, 10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MIN_VALUE, 10, 20});
    Integer r = arr.find((v, i, a) -> v == 0);
    assertEqual(0, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3100
     * @tc.name testUint8ClampedArrayFind031
     * @tc.desc Verify find r equals 255 for array [2147483648, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2147483648L, 0, 0});
    Integer r = arr.find((v, i, a) -> v == 255);
    assertEqual(255, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3200
     * @tc.name testUint8ClampedArrayFind032
     * @tc.desc Verify find returns 2 when searching for exact value 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.find((v, i, a) -> v == 2);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3300
     * @tc.name testUint8ClampedArrayFind033
     * @tc.desc Verify find returns undefined for array [1, 2, 3] with no matching element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.find((v, i, a) -> v == 200);
    assertNull(r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3400
     * @tc.name testUint8ClampedArrayFind034
     * @tc.desc Verify find first matching value 5 in array with duplicates
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 5, 5, 5, 9});
    int[] hitIndex = {-1};
    Integer r = arr.find((v, i, a) -> { if (v == 5) { hitIndex[0] = i; return true; } return false; });
    assertEqual(5, r);
    assertEqual(1, hitIndex[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3500
     * @tc.name testUint8ClampedArrayFind035
     * @tc.desc Verify find yields length 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.find((v, i, a) -> v == 3);
    assertEqual(4, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3600
     * @tc.name testUint8ClampedArrayFind036
     * @tc.desc Verify find does not mutate arr[0] for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.find((v, i, a) -> v == 3);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3700
     * @tc.name testUint8ClampedArrayFind037
     * @tc.desc Verify find buffer reference matches for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer buf = arr.buffer();
    arr.find((v, i, a) -> v == 2);
    assertEqual(buf, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3800
     * @tc.name testUint8ClampedArrayFind038
     * @tc.desc Verify find r equals undefined for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Integer r = arr.find((v, i, a) -> true);
    assertNull(r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_3900
     * @tc.name testUint8ClampedArrayFind039
     * @tc.desc Verify find calls equals 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int[] calls = {0};
    arr.find((v, i, a) -> { calls[0] = calls[0] + 1; return true; });
    assertEqual(0, calls[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4000
     * @tc.name testUint8ClampedArrayFind040
     * @tc.desc Verify find value 33 at index 65534 in 65535-length buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind040() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(65534, 33);
    Integer r = arr.find((v, i, a) -> v == 33);
    assertEqual(33, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4100
     * @tc.name testUint8ClampedArrayFind041
     * @tc.desc Verify Uint8ClampedArray.of r equals 30 for of(10, 20, 30, 40)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind041() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40);
    Integer r = arr.find((v, i, a) -> v == 30);
    assertEqual(30, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4200
     * @tc.name testUint8ClampedArrayFind042
     * @tc.desc Verify Uint8ClampedArray.from r equals 2 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind042() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    Integer r = arr.find((v, i, a) -> v == 2);
    assertEqual(2, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4300
     * @tc.name testUint8ClampedArrayFind043
     * @tc.desc Verify find r equals 66 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(1, 66);
    Integer r = arr.find((v, i, a) -> v == 66);
    assertEqual(66, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4400
     * @tc.name testUint8ClampedArrayFind044
     * @tc.desc Verify subarray r equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind044() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    Integer r = sub.find((v, i, a) -> v == 3);
    assertEqual(3, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4500
     * @tc.name testUint8ClampedArrayFind045
     * @tc.desc Verify subarray r equals undefined for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind045() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    Integer r = sub.find((v, i, a) -> v == 5);
    assertNull(r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4600
     * @tc.name testUint8ClampedArrayFind046
     * @tc.desc Verify find propagates Error thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.find((v, i, a) -> { throw new Error("boom"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4700
     * @tc.name testUint8ClampedArrayFind047
     * @tc.desc Verify find propagates RangeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.find((v, i, a) -> { throw new RangeError("range"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4800
     * @tc.name testUint8ClampedArrayFind048
     * @tc.desc Verify find propagates TypeError thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.find((v, i, a) -> { throw new TypeError("type"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_4900
     * @tc.name testUint8ClampedArrayFind049
     * @tc.desc Verify find propagates Error thrown during the first predicate call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.find((v, i, a) -> {
    if (i == 0) throw new Error("idx0");
    return v == 2;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5000
     * @tc.name testUint8ClampedArrayFind050
     * @tc.desc Verify find propagates Error thrown during the second predicate call
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    try {
    arr.find((v, i, a) -> {
    if (i == 1) throw new Error("idx1");
    return false;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5100
     * @tc.name testUint8ClampedArrayFind051
     * @tc.desc Verify find propagates Error thrown after callback evaluation begins
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    try {
    arr.find((v, i, a) -> {
    calls[0] = calls[0] + 1;
    if (i == 1) throw new Error("stop");
    return false;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, calls[0]);
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5200
     * @tc.name testUint8ClampedArrayFind052
     * @tc.desc Verify find passes the searched array as the callback third argument
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] same = {false};
    arr.find((v, i, a) -> {
    same[0] = (a == arr);
    return false;
    });
    assertTrue(same[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5300
     * @tc.name testUint8ClampedArrayFind053
     * @tc.desc Verify find invokes the predicate in ascending index order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    List<Integer> order = new ArrayList<>();
    arr.find((v, i, a) -> {
    order.add(i );
    return false;
    });
    assertEqual(4, order.size());
    assertEqual(0, order.get(0));
    assertEqual(1, order.get(1));
    assertEqual(2, order.get(2));
    assertEqual(3, order.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5400
     * @tc.name testUint8ClampedArrayFind054
     * @tc.desc Verify find supplies the original first value to the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    int[] snap = {-1};
    arr.find((v, i, a) -> {
    if (i == 0) snap[0] = v;
    return false;
    });
    assertEqual(11, snap[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5500
     * @tc.name testUint8ClampedArrayFind055
     * @tc.desc Verify find supplies consistent value index and array callback arguments
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    boolean[] consistent = {true};
    arr.find((v, i, a) -> {
    if (a.get(i) != v) consistent[0] = false;
    return false;
    });
    assertTrue(consistent[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5600
     * @tc.name testUint8ClampedArrayFind056
     * @tc.desc Verify find r2 equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r1 = BasTest.coalesce(arr.find((v, i, a) -> v == 2), 0);
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {r1, 5, 6});
    Integer r2 = arr2.find((v, i, a) -> v == 2);
    assertEqual(2, r2);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5700
     * @tc.name testUint8ClampedArrayFind057
     * @tc.desc Verify find r1 equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Integer r1 = arr.find((v, i, a) -> v == 2);
    Integer r2 = arr.find((v, i, a) -> v == 4);
    assertEqual(2, r1);
    assertEqual(4, r2);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5800
     * @tc.name testUint8ClampedArrayFind058
     * @tc.desc Verify slice r equals 20 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind058() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray s = parent.slice(0, 3);
    Integer r = s.find((v, i, a) -> v == 20);
    assertEqual(20, r);
    assertNotEqual(parent.buffer(), s.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_5900
     * @tc.name testUint8ClampedArrayFind059
     * @tc.desc Verify reverse r equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reverse();
    Integer r = arr.find((v, i, a) -> v == 4);
    assertEqual(4, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_6000
     * @tc.name testUint8ClampedArrayFind060
     * @tc.desc Verify with r equals undefined for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.with(1, 99);
    Integer r = arr.find((v, i, a) -> v == 99);
    assertNull(r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_6100
     * @tc.name testUint8ClampedArrayFind061
     * @tc.desc Verify find r equals 4 for array [2, 4, 6, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 4, 6, 8});
    Integer r = arr.find((v, i, a) -> (v * 2) == 8);
    assertEqual(4, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_6200
     * @tc.name testUint8ClampedArrayFind062
     * @tc.desc Verify find r equals 4 for array [1, 2, 4, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 4, 8});
    Integer r = arr.find((v, i, a) -> (v & 4) != 0);
    assertEqual(4, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_6300
     * @tc.name testUint8ClampedArrayFind063
     * @tc.desc Verify find r equals 11 for array [10, 11, 12, 13]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFind063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 11, 12, 13});
    Integer r = arr.find((v, i, a) -> i % 2 == 1);
    assertEqual(11, r);
    }
}
