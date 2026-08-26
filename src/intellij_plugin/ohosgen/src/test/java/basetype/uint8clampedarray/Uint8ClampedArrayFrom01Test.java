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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFrom01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFrom01Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0100
     * @tc.name testUint8ClampedArrayFromOne001
     * @tc.desc Verify Uint8ClampedArray.from yields length 3 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne001() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0200
     * @tc.name testUint8ClampedArrayFromOne002
     * @tc.desc Verify Uint8ClampedArray.from yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne002() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0300
     * @tc.name testUint8ClampedArrayFromOne003
     * @tc.desc Verify Uint8ClampedArray.from yields length 3 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne003() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0400
     * @tc.name testUint8ClampedArrayFromOne004
     * @tc.desc Verify Iterable<number> Set 3 elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne004() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0); set.add(2.0); set.add(3.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0500
     * @tc.name testUint8ClampedArrayFromOne005
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne005() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0); set.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 10.0);
    assertEqual(2, arr.length());
    assertEqual(11, arr.get(0));
    assertEqual(12, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0600
     * @tc.name testUint8ClampedArrayFromOne006
     * @tc.desc Verify from([256]) clamps 256 to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne006() {
    List<Number> src = java.util.Arrays.asList(256);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0700
     * @tc.name testUint8ClampedArrayFromOne007
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne007() {
    List<Number> src = java.util.Arrays.asList(-1);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0800
     * @tc.name testUint8ClampedArrayFromOne008
     * @tc.desc Verify Array<number> INT_MAX clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne008() {
    double[] src = new double[] {2147483647};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_0900
     * @tc.name testUint8ClampedArrayFromOne009
     * @tc.desc Verify Array<number> INT_MIN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne009() {
    double[] src = new double[] {Integer.MIN_VALUE};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1000
     * @tc.name testUint8ClampedArrayFromOne010
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne010() {
    List<Number> src = java.util.Arrays.asList(0xFF);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1100
     * @tc.name testUint8ClampedArrayFromOne011
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne011() {
    List<Number> src = java.util.Arrays.asList(0377);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1200
     * @tc.name testUint8ClampedArrayFromOne012
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne012() {
    List<Number> src = java.util.Arrays.asList(0b11111111);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1300
     * @tc.name testUint8ClampedArrayFromOne013
     * @tc.desc Verify Array<number> 0 127 255 range
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne013() {
    List<Number> src = java.util.Arrays.asList(0, 1, 127, 128, 255);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1400
     * @tc.name testUint8ClampedArrayFromOne014
     * @tc.desc Verify Array<number> 10 elements length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne014() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(10, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1500
     * @tc.name testUint8ClampedArrayFromOne015
     * @tc.desc Verify Array<number> 1000 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne015() {
    List<Number> src = java.util.Arrays.asList(1000);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1600
     * @tc.name testUint8ClampedArrayFromOne016
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne016() {
    List<Number> src = java.util.Arrays.asList(-1000);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1700
     * @tc.name testUint8ClampedArrayFromOne017
     * @tc.desc Verify Uint8ClampedArray.from yields length 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne017() {
    Uint8ClampedArray parent = new Uint8ClampedArray(0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1800
     * @tc.name testUint8ClampedArrayFromOne018
     * @tc.desc Verify Uint8ClampedArray element 42
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne018() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(42, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_1900
     * @tc.name testUint8ClampedArrayFromOne019
     * @tc.desc Verify Uint8ClampedArray length=5 element 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne019() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(5, arr.length());
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2000
     * @tc.name testUint8ClampedArrayFromOne020
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for array [0, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne020() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {0, 255});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2100
     * @tc.name testUint8ClampedArrayFromOne021
     * @tc.desc Verify Uint8ClampedArray buffer distinct
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne021() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertNotEqual(parent.buffer(), arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2200
     * @tc.name testUint8ClampedArrayFromOne022
     * @tc.desc Verify Uint8ClampedArray copy independent of parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne022() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    parent.set(0, 99);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2300
     * @tc.name testUint8ClampedArrayFromOne023
     * @tc.desc Verify Uint8ClampedArray parent independent of copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne023() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    arr.set(0, 88);
    assertEqual(10, parent.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2400
     * @tc.name testUint8ClampedArrayFromOne024
     * @tc.desc Verify from creates storage independent from a Uint8ClampedArray source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne024() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    arr.set(0, 9);
    assertEqual(1, parent.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2500
     * @tc.name testUint8ClampedArrayFromOne025
     * @tc.desc Verify Uint8ClampedArray byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne025() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(4, arr.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2600
     * @tc.name testUint8ClampedArrayFromOne026
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne026() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(0, arr.get(0));
    assertEqual(3, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2700
     * @tc.name testUint8ClampedArrayFromOne027
     * @tc.desc Verify Uint8ClampedArray.from element at arr[1] equals 255 for array [255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne027() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {255, 255});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2800
     * @tc.name testUint8ClampedArrayFromOne028
     * @tc.desc Verify Uint8ClampedArray length=256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne028() {
    Uint8ClampedArray parent = new Uint8ClampedArray(256);
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(256, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_2900
     * @tc.name testUint8ClampedArrayFromOne029
     * @tc.desc Verify ArrayLike<number> 127.5 half-even 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne029() {
    double[] src = new double[] {127.5};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3000
     * @tc.name testUint8ClampedArrayFromOne030
     * @tc.desc Verify ArrayLike<number> 128.5 half-even 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne030() {
    double[] src = new double[] {128.5};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3100
     * @tc.name testUint8ClampedArrayFromOne031
     * @tc.desc Verify ArrayLike<number> 0.5 half-even 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne031() {
    double[] src = new double[] {0.5};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3200
     * @tc.name testUint8ClampedArrayFromOne032
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne032() {
    double[] src = new double[] {0.4};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3300
     * @tc.name testUint8ClampedArrayFromOne033
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 1 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne033() {
    double[] src = new double[] {0.9};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3400
     * @tc.name testUint8ClampedArrayFromOne034
     * @tc.desc Verify ArrayLike<number> NaN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne034() {
    double[] src = new double[] {Double.NaN};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3500
     * @tc.name testUint8ClampedArrayFromOne035
     * @tc.desc Verify ArrayLike<number> Infinity clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne035() {
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3600
     * @tc.name testUint8ClampedArrayFromOne036
     * @tc.desc Verify ArrayLike<number> -Infinity clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne036() {
    double[] src = new double[] {-Double.POSITIVE_INFINITY};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3700
     * @tc.name testUint8ClampedArrayFromOne037
     * @tc.desc Verify ArrayLike<number> -0 clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne037() {
    double[] src = new double[] {-0.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3800
     * @tc.name testUint8ClampedArrayFromOne038
     * @tc.desc Verify ArrayLike<number> 1e9 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne038() {
    double[] src = new double[] {1e9};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_3900
     * @tc.name testUint8ClampedArrayFromOne039
     * @tc.desc Verify ArrayLike<number> -1e9 clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne039() {
    double[] src = new double[] {-1e9};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4000
     * @tc.name testUint8ClampedArrayFromOne040
     * @tc.desc Verify ArrayLike<number> Number.MAX_VALUE clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne040() {
    double[] src = new double[] {Double.MAX_VALUE};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4100
     * @tc.name testUint8ClampedArrayFromOne041
     * @tc.desc Verify ArrayLike<number> Number.MIN_VALUE clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne041() {
    double[] src = new double[] {Double.MIN_VALUE};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4200
     * @tc.name testUint8ClampedArrayFromOne042
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne042() {
    double[] src = new double[] {-1.0, 0.0, 128.0, 255.0, 256.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(3));
    assertEqual(255, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4300
     * @tc.name testUint8ClampedArrayFromOne043
     * @tc.desc Verify Uint8ClampedArray.from yields length 4 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne043() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(4, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4400
     * @tc.name testUint8ClampedArrayFromOne044
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 127 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne044() {
    double[] src = new double[] {127.4};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(127, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4500
     * @tc.name testUint8ClampedArrayFromOne045
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 128 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne045() {
    double[] src = new double[] {127.6};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4600
     * @tc.name testUint8ClampedArrayFromOne046
     * @tc.desc Verify ArrayLike<number> 254.5 half-even 254
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne046() {
    double[] src = new double[] {254.5};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(254, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4700
     * @tc.name testUint8ClampedArrayFromOne047
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne047() {
    List<Number> src = java.util.Arrays.asList(9999999);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4800
     * @tc.name testUint8ClampedArrayFromOne048
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne048() {
    List<Number> src = java.util.Arrays.asList(-9999999);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_4900
     * @tc.name testUint8ClampedArrayFromOne049
     * @tc.desc Verify ArrayLike<number> element 20
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne049() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(20, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5000
     * @tc.name testUint8ClampedArrayFromOne050
     * @tc.desc Verify Uint8ClampedArray.from yields length 0 for from(set)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne050() {
    Set<Number> set = new LinkedHashSet<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5100
     * @tc.name testUint8ClampedArrayFromOne051
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne051() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5200
     * @tc.name testUint8ClampedArrayFromOne052
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(set)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne052() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(255.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5300
     * @tc.name testUint8ClampedArrayFromOne053
     * @tc.desc Verify Iterable<number> Set 256.0 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne053() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(256.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5400
     * @tc.name testUint8ClampedArrayFromOne054
     * @tc.desc Verify Iterable<number> Set -1.0 clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne054() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(-1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5500
     * @tc.name testUint8ClampedArrayFromOne055
     * @tc.desc Verify Iterable<number> Set NaN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne055() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(Double.NaN);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5600
     * @tc.name testUint8ClampedArrayFromOne056
     * @tc.desc Verify Iterable<number> Set Infinity clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne056() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(Double.POSITIVE_INFINITY);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5700
     * @tc.name testUint8ClampedArrayFromOne057
     * @tc.desc Verify Iterable<number> Set 10 20 30
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne057() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(10.0); set.add(20.0); set.add(30.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5800
     * @tc.name testUint8ClampedArrayFromOne058
     * @tc.desc Verify Iterable<number> Set length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne058() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0); set.add(2.0); set.add(3.0); set.add(4.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(4, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_5900
     * @tc.name testUint8ClampedArrayFromOne059
     * @tc.desc Verify Iterable<number> Set dedup length=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne059() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(5.0); set.add(5.0); set.add(5.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(1, arr.length());
    assertEqual(5, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6000
     * @tc.name testUint8ClampedArrayFromOne060
     * @tc.desc Verify Iterable<number> Set 127.5 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne060() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(127.5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6100
     * @tc.name testUint8ClampedArrayFromOne061
     * @tc.desc Verify from preserves the value and length of a Set source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne061() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(1, arr.length());
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6200
     * @tc.name testUint8ClampedArrayFromOne062
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 1 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne062() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0); set.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6300
     * @tc.name testUint8ClampedArrayFromOne063
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 20 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne063() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(10.0); set.add(20.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v * 2.0);
    assertEqual(20, arr.get(0));
    assertEqual(40, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6400
     * @tc.name testUint8ClampedArrayFromOne064
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne064() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 256.0);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6500
     * @tc.name testUint8ClampedArrayFromOne065
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne065() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> -1.0);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6600
     * @tc.name testUint8ClampedArrayFromOne066
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne066() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> Double.NaN);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6700
     * @tc.name testUint8ClampedArrayFromOne067
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne067() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6800
     * @tc.name testUint8ClampedArrayFromOne068
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne068() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_6900
     * @tc.name testUint8ClampedArrayFromOne069
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 128 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne069() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 127.5);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7000
     * @tc.name testUint8ClampedArrayFromOne070
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 128 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne070() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 128.5);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7100
     * @tc.name testUint8ClampedArrayFromOne071
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne071() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(10.0); set.add(20.0); set.add(30.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> k);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7200
     * @tc.name testUint8ClampedArrayFromOne072
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 107 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne072() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(7.0); set.add(8.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 100.0);
    assertEqual(107, arr.get(0));
    assertEqual(108, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7300
     * @tc.name testUint8ClampedArrayFromOne073
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn for Set input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne073() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    try {
    Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new Error("mapfn error");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7400
     * @tc.name testUint8ClampedArrayFromOne074
     * @tc.desc Verify Uint8ClampedArray.from propagates TypeError thrown by mapfn for Set input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne074() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    try {
    Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new TypeError("bad");});
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7500
     * @tc.name testUint8ClampedArrayFromOne075
     * @tc.desc Verify Uint8ClampedArray.from propagates RangeError thrown by mapfn for Set input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne075() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    try {
    Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new RangeError("range");});
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7600
     * @tc.name testUint8ClampedArrayFromOne076
     * @tc.desc Verify Uint8ClampedArray.from on empty Set does not call mapfn and returns empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne076() {
    Set<Number> set = new LinkedHashSet<>();
    int[] called = {0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> { called[0] = called[0] + 1; return v;});
    assertEqual(0, called[0]);
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7700
     * @tc.name testUint8ClampedArrayFromOne077
     * @tc.desc Verify Uint8ClampedArray.from calls mapfn once per Set element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne077() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0); set.add(2.0); set.add(3.0);
    int[] called = {0};
    Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    called[0] = called[0] + 1;
    return v;});
    assertEqual(3, called[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7800
     * @tc.name testUint8ClampedArrayFromOne078
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne078() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(200.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 128.0);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_7900
     * @tc.name testUint8ClampedArrayFromOne079
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne079() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(100.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v - 200.0);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_8000
     * @tc.name testUint8ClampedArrayFromOne080
     * @tc.desc Verify Uint8ClampedArray.from yields length 5 for from(set, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne080() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0); set.add(2.0); set.add(3.0); set.add(4.0); set.add(5.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(5, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_8100
     * @tc.name testUint8ClampedArrayFromOne081
     * @tc.desc Verify from snapshots an Array source at construction time
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne081() {
    List<Number> src = java.util.Arrays.asList(1);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    src.set(0, 9);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_ONE_8200
     * @tc.name testUint8ClampedArrayFromOne082
     * @tc.desc Verify Uint8ClampedArray.from yields BYTES_PER_ELEMENT 1 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromOne082() {
    List<Number> src = java.util.Arrays.asList(1);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}
}
