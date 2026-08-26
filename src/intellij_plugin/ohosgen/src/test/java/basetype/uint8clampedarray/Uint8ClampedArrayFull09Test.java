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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull09Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull09Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0100
     * @tc.name testUint8ClampedArrayFullNine001
     * @tc.desc Verify constructing 127-element array yields length 127
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine001() {
    Uint8ClampedArray a = new Uint8ClampedArray(127);
    assertEqual(127, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0200
     * @tc.name testUint8ClampedArrayFullNine002
     * @tc.desc Verify constructing array from Double.toInt(0.9 yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine002() {
    Uint8ClampedArray a = new Uint8ClampedArray((int) (0.9));
    assertEqual(0, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0300
     * @tc.name testUint8ClampedArrayFullNine003
     * @tc.desc Verify constructing array from src yields length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine003() {
    List<Number> src = java.util.Arrays.asList(0, 127, 128, 255, 256);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(5, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0400
     * @tc.name testUint8ClampedArrayFullNine004
     * @tc.desc Verify constructing array from s yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine004() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(200);
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    assertEqual(1, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0500
     * @tc.name testUint8ClampedArrayFullNine005
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine005() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    assertEqual(8, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0600
     * @tc.name testUint8ClampedArrayFullNine006
     * @tc.desc Verify 3 buffer + offset + length=0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine006() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 4, 0);
    assertEqual(0, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0700
     * @tc.name testUint8ClampedArrayFullNine007
     * @tc.desc Verify 3 buffer + offset=4 + length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine007() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 4, 4);
    assertEqual(4, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0800
     * @tc.name testUint8ClampedArrayFullNine008
     * @tc.desc Verify Uint8ClampedArray.of yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine008() {
    Uint8ClampedArray a = Uint8ClampedArray.of();
    assertEqual(0, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_0900
     * @tc.name testUint8ClampedArrayFullNine009
     * @tc.desc Verify Uint8ClampedArray.of yields length 5 for of(5, 10, 15, 20, 25)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine009() {
    Uint8ClampedArray a = Uint8ClampedArray.of(5, 10, 15, 20, 25);
    assertEqual(5, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1000
     * @tc.name testUint8ClampedArrayFullNine010
     * @tc.desc Verify Uint8ClampedArray.from 1 Array<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine010() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    assertEqual(3, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1100
     * @tc.name testUint8ClampedArrayFullNine011
     * @tc.desc Verify Uint8ClampedArray.from 2 FixedArray + mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine011() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, _i) -> v);
    assertEqual(20, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1200
     * @tc.name testUint8ClampedArrayFullNine012
     * @tc.desc Verify .set element at a[0] equals 10 for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine012() {
    Uint8ClampedArray a = new Uint8ClampedArray(4);
    List<Number> src = java.util.Arrays.asList(10, 20);
    a.set(src);
    assertEqual(10, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1300
     * @tc.name testUint8ClampedArrayFullNine013
     * @tc.desc Verify .set element at a[1] equals 50 for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine013() {
    Uint8ClampedArray a = new Uint8ClampedArray(4);
    List<Number> src = java.util.Arrays.asList(50, 60);
    a.set(src, 1);
    assertEqual(50, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1400
     * @tc.name testUint8ClampedArrayFullNine014
     * @tc.desc Verify subarray yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine014() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = a.subarray();
    assertEqual(3, s.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1500
     * @tc.name testUint8ClampedArrayFullNine015
     * @tc.desc Verify slice yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine015() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = a.slice();
    assertEqual(3, s.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1600
     * @tc.name testUint8ClampedArrayFullNine016
     * @tc.desc Verify fill element at a[2] equals 7 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine016() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    a.fill(7);
    assertEqual(7, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1700
     * @tc.name testUint8ClampedArrayFullNine017
     * @tc.desc Verify fill element at a[2] equals 9 for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine017() {
    Uint8ClampedArray a = new Uint8ClampedArray(4);
    a.fill(9, 2);
    assertEqual(9, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1800
     * @tc.name testUint8ClampedArrayFullNine018
     * @tc.desc Verify copyWithin element at a[1] equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine018() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    a.copyWithin(0, 2);
    assertEqual(4, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_1900
     * @tc.name testUint8ClampedArrayFullNine019
     * @tc.desc Verify indexOf a.indexOf(1, 1) equals 2 for array [1, 2, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine019() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 1, 2});
    assertEqual(2, a.indexOf(1, 1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2000
     * @tc.name testUint8ClampedArrayFullNine020
     * @tc.desc Verify lastIndexOf 1 fromIndex=length-1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine020() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 1});
    assertEqual(2, a.lastIndexOf(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2100
     * @tc.name testUint8ClampedArrayFullNine021
     * @tc.desc Verify join a.join() equals '1,2,3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine021() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("1,2,3", a.join());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2200
     * @tc.name testUint8ClampedArrayFullNine022
     * @tc.desc Verify reduce accumulated sum equals 60 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine022() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {10, 20, 30});
    int sum = a.reduce((acc, cur, index, array) ->  acc + cur);
    assertEqual(60, sum);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2300
     * @tc.name testUint8ClampedArrayFullNine023
     * @tc.desc Verify reduce accumulated sum equals 106 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine023() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = a.reduce((acc, cur, index, array) ->  acc + cur, 100);
    assertEqual(106, sum);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2400
     * @tc.name testUint8ClampedArrayFullNine024
     * @tc.desc Verify constructor element [0] equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine024() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, Double.MIN_VALUE);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2500
     * @tc.name testUint8ClampedArrayFullNine025
     * @tc.desc Verify constructor element [0] equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine025() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2600
     * @tc.name testUint8ClampedArrayFullNine026
     * @tc.desc Verify constructor element [0] equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine026() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 0.5);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2700
     * @tc.name testUint8ClampedArrayFullNine027
     * @tc.desc Verify constructor element [0] equals 128 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine027() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 127.5);
    assertEqual(128, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2800
     * @tc.name testUint8ClampedArrayFullNine028
     * @tc.desc Verify constructor element [0] equals 128 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine028() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 128.5);
    assertEqual(128, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_2900
     * @tc.name testUint8ClampedArrayFullNine029
     * @tc.desc Verify constructor element [0] equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine029() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 0.4);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3000
     * @tc.name testUint8ClampedArrayFullNine030
     * @tc.desc Verify constructor element [0] equals 1 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine030() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 0.9);
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3100
     * @tc.name testUint8ClampedArrayFullNine031
     * @tc.desc Verify constructor element [0] equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine031() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, -0);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3200
     * @tc.name testUint8ClampedArrayFullNine032
     * @tc.desc Verify constructor element [0] equals 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine032() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 256);
    assertEqual(255, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3300
     * @tc.name testUint8ClampedArrayFullNine033
     * @tc.desc Verify constructor element [0] equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine033() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, -1);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3400
     * @tc.name testUint8ClampedArrayFullNine034
     * @tc.desc Verify constructor a.$_get(0) equals 255 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine034() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, 256);
    assertEqual(255, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3500
     * @tc.name testUint8ClampedArrayFullNine035
     * @tc.desc Verify constructor a.$_get(0) equals 0 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine035() {
    Uint8ClampedArray a = new Uint8ClampedArray(1);
    a.set(0, -1);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3600
     * @tc.name testUint8ClampedArrayFullNine036
     * @tc.desc Verify fill element at a[2] equals 255 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine036() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    a.fill(300);
    assertEqual(255, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3700
     * @tc.name testUint8ClampedArrayFullNine037
     * @tc.desc Verify fill element at a[0] equals 0 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine037() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    a.fill(5);
    a.fill(-50);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3800
     * @tc.name testUint8ClampedArrayFullNine038
     * @tc.desc Verify clamp - via with(0, 999) 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine038() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = a.with(0, 999);
    assertEqual(255, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_3900
     * @tc.name testUint8ClampedArrayFullNine039
     * @tc.desc Verify clamp - via set([1000, -1, 0])
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine039() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    List<Number> src = java.util.Arrays.asList(1000, -1, 0);
    a.set(src);
    assertEqual(255, a.get(0));
    assertEqual(0, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4000
     * @tc.name testUint8ClampedArrayFullNine040
     * @tc.desc Verify map element at b[2] equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine040() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray b = a.map((_v, _i, _a) -> -100);
    assertEqual(0, b.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4100
     * @tc.name testUint8ClampedArrayFullNine041
     * @tc.desc Verify clamp - via from + mapfn 1024 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine041() {
    double[] src = new double[] {1.0, 2.0};
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (_v, _i) -> 1024.0);
    assertEqual(255, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4200
     * @tc.name testUint8ClampedArrayFullNine042
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine042() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.get(2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4300
     * @tc.name testUint8ClampedArrayFullNine043
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine043() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4400
     * @tc.name testUint8ClampedArrayFullNine044
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine044() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.get(0x7FFFFFFF);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4500
     * @tc.name testUint8ClampedArrayFullNine045
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine045() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.set(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4600
     * @tc.name testUint8ClampedArrayFullNine046
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine046() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.set(Integer.MIN_VALUE, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4700
     * @tc.name testUint8ClampedArrayFullNine047
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine047() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.set(2147483647, 88);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4800
     * @tc.name testUint8ClampedArrayFullNine048
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine048() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_4900
     * @tc.name testUint8ClampedArrayFullNine049
     * @tc.desc Verify at a.at(2147483647) equals undefined for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine049() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertNull(a.at(2147483647));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5000
     * @tc.name testUint8ClampedArrayFullNine050
     * @tc.desc Verify at a.at(-3) equals 7 for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine050() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {7, 8, 9});
    assertEqual(7, a.at(-3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5100
     * @tc.name testUint8ClampedArrayFullNine051
     * @tc.desc Verify at a.at(-4) equals undefined for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine051() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {7, 8, 9});
    assertNull(a.at(-4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5200
     * @tc.name testUint8ClampedArrayFullNine052
     * @tc.desc Verify with(INT_MAX) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine052() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.with(2147483647, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5300
     * @tc.name testUint8ClampedArrayFullNine053
     * @tc.desc Verify with(-length-1) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine053() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    a.with(-4, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5400
     * @tc.name testUint8ClampedArrayFullNine054
     * @tc.desc Verify constructor element [126] equals 0 for 127-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine054() {
    Uint8ClampedArray a = new Uint8ClampedArray(127);
    assertEqual(0, a.get(126));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5500
     * @tc.name testUint8ClampedArrayFullNine055
     * @tc.desc Verify constructing 255-element array yields length 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine055() {
    Uint8ClampedArray a = new Uint8ClampedArray(255);
    assertEqual(255, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5600
     * @tc.name testUint8ClampedArrayFullNine056
     * @tc.desc Verify constructing 256-element array yields length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine056() {
    Uint8ClampedArray a = new Uint8ClampedArray(256);
    assertEqual(256, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5700
     * @tc.name testUint8ClampedArrayFullNine057
     * @tc.desc Verify constructing 1024-element array yields length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine057() {
    Uint8ClampedArray a = new Uint8ClampedArray(1024);
    assertEqual(1024, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5800
     * @tc.name testUint8ClampedArrayFullNine058
     * @tc.desc Verify constructing 65535-element array yields length 65535
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine058() {
    Uint8ClampedArray a = new Uint8ClampedArray(65535);
    assertEqual(65535, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_5900
     * @tc.name testUint8ClampedArrayFullNine059
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 4);
    assertEqual(0, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6000
     * @tc.name testUint8ClampedArrayFullNine060
     * @tc.desc Verify byteOffset > byteLength RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine060() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6100
     * @tc.name testUint8ClampedArrayFullNine061
     * @tc.desc Verify constructor element [0] equals 77 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 77);
    assertEqual(77, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6200
     * @tc.name testUint8ClampedArrayFullNine062
     * @tc.desc Verify subarray element at s[0] equals 200 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine062() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = a.subarray(1, 3);
    a.set(1, 200);
    assertEqual(200, s.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6300
     * @tc.name testUint8ClampedArrayFullNine063
     * @tc.desc Verify subarray element at a[1] equals 150 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine063() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = a.subarray(1, 3);
    s.set(0, 150);
    assertEqual(150, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6400
     * @tc.name testUint8ClampedArrayFullNine064
     * @tc.desc Verify subarray.buffer === parent.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine064() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = a.subarray(0, 2);
    assertEqual(a.buffer(), s.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6500
     * @tc.name testUint8ClampedArrayFullNine065
     * @tc.desc Verify slice.buffer !== parent.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine065() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = a.slice();
    assertNotEqual(a.buffer(), s.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6600
     * @tc.name testUint8ClampedArrayFullNine066
     * @tc.desc Verify slice element at a[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine066() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = a.slice();
    s.set(0, 99);
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6700
     * @tc.name testUint8ClampedArrayFullNine067
     * @tc.desc Verify from(Uint8ClampedArray) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine067() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    assertNotEqual(src.buffer(), a.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6800
     * @tc.name testUint8ClampedArrayFullNine068
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine068() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    a.set(0, 200);
    assertEqual(1, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_6900
      * @tc.name testUint8ClampedArrayFullNine069
      * @tc.desc Verify map returns new array with copied elements and independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine069() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = a.map((v, _i, _a) -> v);
    assertEqual(3, b.length());
    assertEqual(1, b.get(0));
    assertEqual(2, b.get(1));
    assertEqual(3, b.get(2));
    assertNotEqual(a.buffer(), b.buffer());
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7000
      * @tc.name testUint8ClampedArrayFullNine070
      * @tc.desc Verify filter returns new array with copied elements and independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine070() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = a.filter((_v, _i, _a) -> true);
    assertEqual(3, b.length());
    assertEqual(1, b.get(0));
    assertEqual(2, b.get(1));
    assertEqual(3, b.get(2));
    assertNotEqual(a.buffer(), b.buffer());
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7100
      * @tc.name testUint8ClampedArrayFullNine071
      * @tc.desc Verify toReversed returns new array with reversed elements and independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine071() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray b = a.toReversed();
    assertEqual(3, b.length());
    assertEqual(3, b.get(0));
    assertEqual(2, b.get(1));
    assertEqual(1, b.get(2));
    assertNotEqual(a.buffer(), b.buffer());
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7200
      * @tc.name testUint8ClampedArrayFullNine072
      * @tc.desc Verify toSorted returns new array with sorted elements and independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine072() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray b = a.toSorted();
    assertEqual(3, b.length());
    assertEqual(1, b.get(0));
    assertEqual(2, b.get(1));
    assertEqual(3, b.get(2));
    assertNotEqual(a.buffer(), b.buffer());
    assertEqual(3, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7300
     * @tc.name testUint8ClampedArrayFullNine073
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine073() {
    List<Number> src = java.util.Arrays.asList(0xFF, 017, 0b101, 10, 0x80);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(255, a.get(0));
    assertEqual(15, a.get(1));
    assertEqual(5, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7400
     * @tc.name testUint8ClampedArrayFullNine074
     * @tc.desc Verify constructor element [0] equals 128 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine074() {
    double[] src = new double[] {127.5, 128.5, 129.5};
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(128, a.get(0));
    assertEqual(128, a.get(1));
    assertEqual(130, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7500
     * @tc.name testUint8ClampedArrayFullNine075
     * @tc.desc Verify constructing array from src yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine075() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(0, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7600
     * @tc.name testUint8ClampedArrayFullNine076
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine076() {
    List<Number> src = java.util.Arrays.asList(0);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7700
     * @tc.name testUint8ClampedArrayFullNine077
     * @tc.desc Verify fill yields length 256 for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine077() {
    Uint8ClampedArray values = new Uint8ClampedArray(256);
    values.fill(7);
    assertEqual(256, values.length());
    assertEqual(7, values.get(255));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7800
     * @tc.name testUint8ClampedArrayFullNine078
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine078() {
    List<Number> src = java.util.Arrays.asList(300, 300, 300, 300);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(255, a.get(0));
    assertEqual(255, a.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_7900
     * @tc.name testUint8ClampedArrayFullNine079
     * @tc.desc Verify constructor element [1] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine079() {
    List<Number> src = java.util.Arrays.asList(0, 0, 0);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(0, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8000
     * @tc.name testUint8ClampedArrayFullNine080
     * @tc.desc Verify Array<number> -50 100 -200 200 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine080() {
    List<Number> src = java.util.Arrays.asList(-50, 100, -200, 200);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    assertEqual(200, a.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8100
     * @tc.name testUint8ClampedArrayFullNine081
     * @tc.desc Verify constructing array from s yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine081() {
    Set<Number> s = new LinkedHashSet<>();
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    assertEqual(0, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8200
     * @tc.name testUint8ClampedArrayFullNine082
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine082() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(500);
    s.add(-10);
    Uint8ClampedArray a = Uint8ClampedArray.from(s);
    assertEqual(2, a.length());
    assertEqual(255, a.get(0));
    assertEqual(0, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8300
     * @tc.name testUint8ClampedArrayFullNine083
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 0 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine083() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(Double.NaN);
    Uint8ClampedArray a = Uint8ClampedArray.from(s);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8400
     * @tc.name testUint8ClampedArrayFullNine084
     * @tc.desc Verify Uint8ClampedArray.from yields length 100 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine084() {
    Set<Number> s = new LinkedHashSet<>();
    for (int i = 0; i < 100; i++) {
    s.add(i);
    }
    Uint8ClampedArray a = Uint8ClampedArray.from(s);
    assertEqual(100, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8500
     * @tc.name testUint8ClampedArrayFullNine085
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 0 for from(src, (v: number, _i:)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine085() {
    List<Number> src = java.util.Arrays.asList(0);
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, _i) -> v);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8600
     * @tc.name testUint8ClampedArrayFullNine086
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 255 for from(src, (v: number, _i:)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine086() {
    List<Number> src = java.util.Arrays.asList(255);
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, _i) -> v);
    assertEqual(255, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8700
     * @tc.name testUint8ClampedArrayFullNine087
     * @tc.desc Verify ArrayLike<number> 256 255 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine087() {
    List<Number> src = java.util.Arrays.asList(256);
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, _i) -> v);
    assertEqual(255, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8800
     * @tc.name testUint8ClampedArrayFullNine088
     * @tc.desc Verify ArrayLike<number> -1 0 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine088() {
    List<Number> src = java.util.Arrays.asList(-1);
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, _i) -> v);
    assertEqual(0, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_8900
     * @tc.name testUint8ClampedArrayFullNine089
     * @tc.desc Verify ArrayLike<number> 9223372036854775807 255 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine089() {
    double[] src = new double[] {9223372036854775807L};
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, _i) -> v);
    assertEqual(255, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_9000
     * @tc.name testUint8ClampedArrayFullNine090
     * @tc.desc Verify .set element at a[0] equals 255 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine090() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    List<Number> src = java.util.Arrays.asList(300 , -5 , 128);
    a.set(src);
    assertEqual(255, a.get(0));
    assertEqual(0, a.get(1));
    assertEqual(128, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_NINE_9100
     * @tc.name testUint8ClampedArrayFullNine091
     * @tc.desc Verify join a.join('|') equals '1|2|3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullNine091() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("1|2|3", a.join("|"));
    }
}
