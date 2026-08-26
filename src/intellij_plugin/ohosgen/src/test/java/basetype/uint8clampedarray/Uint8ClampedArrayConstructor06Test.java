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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor06Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayConstructor06Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0100
     * @tc.name testUint8ClampedArrayConstructorSix001
     * @tc.desc Verify constructing empty array yields length b.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix001() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    Uint8ClampedArray b = new Uint8ClampedArray(0);
    assertEqual(0, a.length());
    assertEqual(0, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0200
     * @tc.name testUint8ClampedArrayConstructorSix002
     * @tc.desc Verify constructing empty array yields byteLength b.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix002() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    Uint8ClampedArray b = new Uint8ClampedArray(0);
    assertEqual(0, a.byteLength());
    assertEqual(0, b.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0300
     * @tc.name testUint8ClampedArrayConstructorSix003
     * @tc.desc Verify constructing empty array yields byteOffset b.byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix003() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    Uint8ClampedArray b = new Uint8ClampedArray(0);
    assertEqual(0, a.byteOffset());
    assertEqual(0, b.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0400
     * @tc.name testUint8ClampedArrayConstructorSix004
     * @tc.desc Verify constructing empty array yields length b.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix004() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    assertEqual(0, a.length());
    assertEqual(0, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0500
     * @tc.name testUint8ClampedArrayConstructorSix005
     * @tc.desc Verify constructing empty array yields length b.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix005() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    Uint8ClampedArray b = new Uint8ClampedArray(new ArrayList<>());
    assertEqual(0, a.length());
    assertEqual(0, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0600
     * @tc.name testUint8ClampedArrayConstructorSix006
     * @tc.desc Verify length(int)=3 vs ArrayBuffer+offset length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix006() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0);
    assertEqual(3, a.length());
    assertEqual(3, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0700
     * @tc.name testUint8ClampedArrayConstructorSix007
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length b.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix007() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 1);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 1, 3);
    assertEqual(3, a.length());
    assertEqual(3, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0800
     * @tc.name testUint8ClampedArrayConstructorSix008
     * @tc.desc Verify length=0 vs byteOffset=byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix008() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 0);
    assertEqual(0, a.length());
    assertEqual(0, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_0900
     * @tc.name testUint8ClampedArrayConstructorSix009
     * @tc.desc Verify constructor element [0] equals 0 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix009() {
    Uint8ClampedArray a = new Uint8ClampedArray(5);
    assertEqual(0, a.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1000
     * @tc.name testUint8ClampedArrayConstructorSix010
     * @tc.desc Verify constructor element [4] equals 0 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix010() {
    Uint8ClampedArray a = new Uint8ClampedArray(5);
    assertEqual(0, a.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1100
     * @tc.name testUint8ClampedArrayConstructorSix011
     * @tc.desc Verify constructing array from 3.0 yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix011() {
    Uint8ClampedArray a = new Uint8ClampedArray(3.0);
    assertEqual(3, a.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1200
     * @tc.name testUint8ClampedArrayConstructorSix012
     * @tc.desc Verify constructing array from 3.7 yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix012() {
    Uint8ClampedArray a = new Uint8ClampedArray(3.7);
    assertEqual(3, a.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1300
     * @tc.name testUint8ClampedArrayConstructorSix013
     * @tc.desc Verify Array<number> vs Array<int> length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix013() {
    List<Number> f = java.util.Arrays.asList(1, 2, 3);
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray a = new Uint8ClampedArray(f);
    Uint8ClampedArray b = new Uint8ClampedArray(arr);
    assertEqual(3, a.length());
    assertEqual(3, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1400
     * @tc.name testUint8ClampedArrayConstructorSix014
     * @tc.desc Verify Array<number> vs Array<int> element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix014() {
    List<Number> f = java.util.Arrays.asList(10);
    List<Integer> arr = java.util.Arrays.asList(10);
    Uint8ClampedArray a = new Uint8ClampedArray(f);
    Uint8ClampedArray b = new Uint8ClampedArray(arr);
    assertEqual(10, a.get(0));
    assertEqual(10, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1500
     * @tc.name testUint8ClampedArrayConstructorSix015
     * @tc.desc Verify Array<number> vs Array<number> clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix015() {
    double[] fn = new double[] {256.5};
    List<Number> fi = java.util.Arrays.asList(256);
    Uint8ClampedArray a = new Uint8ClampedArray(fn);
    Uint8ClampedArray b = new Uint8ClampedArray(fi);
    assertEqual(255, a.get(0));
    assertEqual(255, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1600
     * @tc.name testUint8ClampedArrayConstructorSix016
     * @tc.desc Verify Uint8ClampedArray copy length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix016() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertEqual(src.length(), dst.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1700
     * @tc.name testUint8ClampedArrayConstructorSix017
     * @tc.desc Verify Uint8ClampedArray copy element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix017() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertEqual(src.get(0), dst.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1800
     * @tc.name testUint8ClampedArrayConstructorSix018
     * @tc.desc Verify Set<Number> Iterable Iterable<Number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix018() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(1); s.add(2);
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    assertEqual(2, a.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_1900
     * @tc.name testUint8ClampedArrayConstructorSix019
     * @tc.desc Verify Set<Number> Iterable FixedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix019() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(10); s.add(20);
    List<Number> src = java.util.Arrays.asList(10, 20);
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    assertEqual(2, a.length());
    assertEqual(2, b.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2000
     * @tc.name testUint8ClampedArrayConstructorSix020
     * @tc.desc Verify ArrayBuffer length byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix020() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    assertEqual(6, a.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2100
     * @tc.name testUint8ClampedArrayConstructorSix021
     * @tc.desc Verify constructor element [0] equals 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix021() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    dst.set(0, 200);
    assertEqual(1, src.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2200
     * @tc.name testUint8ClampedArrayConstructorSix022
     * @tc.desc Verify constructor element [0] equals 77 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix022() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.set(0, 77);
    assertEqual(77, secondView.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2300
     * @tc.name testUint8ClampedArrayConstructorSix023
     * @tc.desc Verify constructor element [2] equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix023() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    src.set(2, 99);
    assertEqual(3, dst.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2400
     * @tc.name testUint8ClampedArrayConstructorSix024
     * @tc.desc Verify constructing array [1, 2, 3, 4] yields length src.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix024() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertEqual(src.length(), dst.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2500
     * @tc.name testUint8ClampedArrayConstructorSix025
     * @tc.desc Verify constructing array [1, 2] yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix025() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertEqual(0, dst.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2600
     * @tc.name testUint8ClampedArrayConstructorSix026
     * @tc.desc Verify constructor element [0] equals 1 for array from f
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix026() {
    List<Number> f = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray a = new Uint8ClampedArray(f);
    f.set(0, 99);
    assertEqual(1, a.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2700
     * @tc.name testUint8ClampedArrayConstructorSix027
     * @tc.desc Verify constructor element [0] equals 1 for array from arr
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix027() {
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray a = new Uint8ClampedArray(arr);
    arr.set(0, 99);
    assertEqual(1, a.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2800
     * @tc.name testUint8ClampedArrayConstructorSix028
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    assertEqual(buf, v.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_2900
     * @tc.name testUint8ClampedArrayConstructorSix029
     * @tc.desc Verify ArrayBuffer buffer identity (with offset)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 1, 2);
    assertEqual(buf, v.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3000
     * @tc.name testUint8ClampedArrayConstructorSix030
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 2);
    assertEqual(2, v.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3100
     * @tc.name testUint8ClampedArrayConstructorSix031
     * @tc.desc Verify ArrayBuffer byteOffset buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix031() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 2);
    assertEqual(b.buffer(), a.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3200
     * @tc.name testUint8ClampedArrayConstructorSix032
     * @tc.desc Verify constructor element [0] equals 0xAB for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix032() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    v.set(0, 0xAB);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 0);
    assertEqual(0xAB, secondView.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3300
     * @tc.name testUint8ClampedArrayConstructorSix033
     * @tc.desc Verify constructor element [0] equals 50 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix033() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0);
    a.set(0, 50);
    assertEqual(50, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3400
     * @tc.name testUint8ClampedArrayConstructorSix034
     * @tc.desc Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix034() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 2);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 2, 2);
    a.set(0, 7);
    assertEqual(0, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3500
     * @tc.name testUint8ClampedArrayConstructorSix035
     * @tc.desc Verify constructor element [0] equals 88 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix035() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 2, 2);
    a.set(2, 88);
    assertEqual(88, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3600
     * @tc.name testUint8ClampedArrayConstructorSix036
     * @tc.desc Verify constructing array from src yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix036() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(0, a.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3700
     * @tc.name testUint8ClampedArrayConstructorSix037
     * @tc.desc Verify ArrayBuffer byteOffset=0 byteOffset=0,length=byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix037() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(b.length(), a.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3800
     * @tc.name testUint8ClampedArrayConstructorSix038
     * @tc.desc Verify ArrayBuffer byteOffset=0 length buffer.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix038() {
    ArrayBuffer buf = new ArrayBuffer(7);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    assertEqual(7, v.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_3900
     * @tc.name testUint8ClampedArrayConstructorSix039
     * @tc.desc Verify ArrayBuffer byteOffset=2 length byteLength-byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix039() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 2);
    assertEqual(3, v.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4000
     * @tc.name testUint8ClampedArrayConstructorSix040
     * @tc.desc Verify ArrayBuffer Number|undefined byteOffset=undefined 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix040() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray v = new Uint8ClampedArray(buf);
    assertEqual(0, v.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4100
     * @tc.name testUint8ClampedArrayConstructorSix041
     * @tc.desc Verify ArrayBuffer Number|undefined length=undefined byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix041() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray v = new Uint8ClampedArray(buf);
    assertEqual(6, v.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4200
     * @tc.name testUint8ClampedArrayConstructorSix042
     * @tc.desc Verify ArrayBuffer Number|undefined byteOffset length=undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix042() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 2);
    assertEqual(4, v.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4300
     * @tc.name testUint8ClampedArrayConstructorSix043
     * @tc.desc Verify ArrayBuffer Number|undefined byteOffset=undefined length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix043() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0, 3);
    assertEqual(3, v.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4400
     * @tc.name testUint8ClampedArrayConstructorSix044
     * @tc.desc Verify empty constructor creates buffer with byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix044() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    assertEqual(0, a.buffer().byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4500
     * @tc.name testUint8ClampedArrayConstructorSix045
     * @tc.desc Verify length constructor creates byteLength 3 and element [2] equals 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix045() {
    Uint8ClampedArray a = new Uint8ClampedArray(3);
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4600
     * @tc.name testUint8ClampedArrayConstructorSix046
     * @tc.desc Verify Array<number> construction preserves both source values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix046() {
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    assertEqual(2, a.length());
    assertEqual(1, a.get(0));
    assertEqual(2, a.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4700
     * @tc.name testUint8ClampedArrayConstructorSix047
     * @tc.desc Verify omitted length consumes the remaining supplied ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix047() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    assertEqual(buf, a.buffer());
    assertEqual(4, a.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4800
     * @tc.name testUint8ClampedArrayConstructorSix048
     * @tc.desc Verify explicit length creates a four-element view over the supplied ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix048() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(buf, a.buffer());
    assertEqual(4, a.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_4900
     * @tc.name testUint8ClampedArrayConstructorSix049
     * @tc.desc Verify constructing length-2 array yields BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix049() {
    Uint8ClampedArray a = new Uint8ClampedArray(2);
    assertEqual(1, a.BYTES_PER_ELEMENT);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5000
     * @tc.name testUint8ClampedArrayConstructorSix050
     * @tc.desc Verify constructing array [1, 2, 3] yields byteLength a.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix050() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(a.length(), a.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5100
     * @tc.name testUint8ClampedArrayConstructorSix051
     * @tc.desc Verify constructing length-5 array yields byteLength 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix051() {
    Uint8ClampedArray a = new Uint8ClampedArray(5);
    assertEqual(5, a.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5200
     * @tc.name testUint8ClampedArrayConstructorSix052
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteLength 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix052() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 2, 3);
    assertEqual(3, a.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5300
     * @tc.name testUint8ClampedArrayConstructorSix053
     * @tc.desc Verify constructing empty array yields length 0, byteLength 0 and byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix053() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    assertEqual(0, a.length());
    assertEqual(0, a.byteLength());
    assertEqual(0, a.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5400
     * @tc.name testUint8ClampedArrayConstructorSix054
     * @tc.desc Verify constructed view has correct length, byteLength and element value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix054() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1});
    assertEqual(1, a.length());
    assertEqual(1, a.get(0));
    assertEqual(1, a.byteLength());
    assertEqual(0, a.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5500
     * @tc.name testUint8ClampedArrayConstructorSix055
     * @tc.desc Verify ArrayLike ArrayBuffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix055() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    assertNotEqual(b.buffer(), a.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5600
     * @tc.name testUint8ClampedArrayConstructorSix056
     * @tc.desc Verify toString a equals b for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix056() {
    int a = (new Uint8ClampedArray()).toString().length();
    int b = (new Uint8ClampedArray(0)).toString().length();
    assertEqual(0, a);
    assertEqual(0, b);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5700
     * @tc.name testUint8ClampedArrayConstructorSix057
     * @tc.desc Verify join a.join() equals b.join( for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix057() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2});
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    assertEqual("1,2", a.join());
    assertEqual("1,2", b.join());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5800
     * @tc.name testUint8ClampedArrayConstructorSix058
     * @tc.desc Verify toString a equals b for array(f)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix058() {
    List<Number> f = java.util.Arrays.asList(3, 4);
    List<Integer> arr = java.util.Arrays.asList(3, 4);
    String a = (new Uint8ClampedArray(f)).toString();
    String b = (new Uint8ClampedArray(arr)).toString();
    assertEqual("3,4", a);
    assertEqual("3,4", b);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_5900
     * @tc.name testUint8ClampedArrayConstructorSix059
     * @tc.desc Verify ArrayBuffer length=0 toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix059() {
    ArrayBuffer buf = new ArrayBuffer(0);
    String a = (new Uint8ClampedArray(buf, 0)).toString();
    String b = (new Uint8ClampedArray()).toString();
    assertEqual("", a);
    assertEqual("", b);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6000
     * @tc.name testUint8ClampedArrayConstructorSix060
     * @tc.desc Verify join a.join('|') equals b.join('|' for array [5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix060() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {5, 6});
    List<Number> src = java.util.Arrays.asList(5, 6);
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    assertEqual("5|6", a.join("|"));
    assertEqual("5|6", b.join("|"));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6100
     * @tc.name testUint8ClampedArrayConstructorSix061
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix061() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    assertEqual(buf, v.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6200
     * @tc.name testUint8ClampedArrayConstructorSix062
     * @tc.desc Verify constructor result is false for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix062() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertNotEqual(src, dst);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6300
     * @tc.name testUint8ClampedArrayConstructorSix063
     * @tc.desc Verify constructor element [1] equals 11 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix063() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray p = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray c = new Uint8ClampedArray(buf, 0);
    p.set(1, 11);
    assertEqual(11, c.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6400
     * @tc.name testUint8ClampedArrayConstructorSix064
     * @tc.desc Verify constructor element [0] equals 22 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix064() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray p = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray c = new Uint8ClampedArray(buf, 0);
    c.set(0, 22);
    assertEqual(22, p.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6500
     * @tc.name testUint8ClampedArrayConstructorSix065
     * @tc.desc Verify constructor result is false for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix065() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    assertNotEqual(b.buffer(), a.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6600
     * @tc.name testUint8ClampedArrayConstructorSix066
     * @tc.desc Verify constructor element [0] equals 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix066() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray a = new Uint8ClampedArray(src);
    Uint8ClampedArray b = new Uint8ClampedArray(src);
    a.set(0, 88);
    assertEqual(1, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6700
     * @tc.name testUint8ClampedArrayConstructorSix067
     * @tc.desc Verify ArrayBuffer from(Uint8ClampedArray) buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix067() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray copy = new Uint8ClampedArray(v);
    assertNotEqual(v.buffer(), copy.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6800
     * @tc.name testUint8ClampedArrayConstructorSix068
     * @tc.desc Verify constructor element [0] equals 5 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix068() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    v.set(0, 5);
    Uint8ClampedArray copy = new Uint8ClampedArray(v);
    copy.set(0, 100);
    assertEqual(5, v.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_6900
     * @tc.name testUint8ClampedArrayConstructorSix069
     * @tc.desc Verify ArrayBuffer byteOffset=2 buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix069() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 2);
    assertEqual(buf, v.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7000
     * @tc.name testUint8ClampedArrayConstructorSix070
     * @tc.desc Verify constructor result is false for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix070() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray cp = new Uint8ClampedArray(v);
    assertNotEqual(buf, cp.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7100
     * @tc.name testUint8ClampedArrayConstructorSix071
     * @tc.desc Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix071() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray cp = new Uint8ClampedArray(v);
    cp.set(0, 99);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf, 0);
    assertEqual(0, secondView.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7200
     * @tc.name testUint8ClampedArrayConstructorSix072
     * @tc.desc Verify copy constructor produces correct length, elements and distinct buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix072() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertEqual(2, dst.length());
    assertEqual(1, dst.get(0));
    assertEqual(2, dst.get(1));
    assertNotEqual(src.buffer(), dst.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7300
     * @tc.name testUint8ClampedArrayConstructorSix073
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix073() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(Double.NaN);
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    assertEqual(0, a.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7400
     * @tc.name testUint8ClampedArrayConstructorSix074
     * @tc.desc Verify constructor element [0] equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix074() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray v = new Uint8ClampedArray(buf, 0);
    assertEqual(0, v.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7500
     * @tc.name testUint8ClampedArrayConstructorSix075
     * @tc.desc Verify copy from Uint8ClampedArray source preserves the already-clamped value 255 in dst[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix075() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {300});
    Uint8ClampedArray dst = new Uint8ClampedArray(src);
    assertEqual(255, dst.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_SIX_7600
     * @tc.name testUint8ClampedArrayConstructorSix076
     * @tc.desc Verify constructor element [0] equals 0 for array from s
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorSix076() {
    Set<Number> s = new LinkedHashSet<>();
    s.add(-1.0);
    Uint8ClampedArray a = new Uint8ClampedArray(s);
    assertEqual(0, a.get(0));}
}
