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

package basetype.uint8clampedarray2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArraySlice01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySlice01Test extends BasTest {

    @Test
    void testUint8ClampedArraySliceOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice();
    assertEqual(5, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));}

    @Test
    void testUint8ClampedArraySliceOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0, arr.length());
    assertEqual(5, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));}

    @Test
    void testUint8ClampedArraySliceOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(2);
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    assertEqual(5, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33, 44, 55});
    Uint8ClampedArray r = arr.slice(1, 3);
    assertEqual(2, r.length());
    assertEqual(22, r.get(0));
    assertEqual(33, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 0);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(0, 4);
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(4);
    assertEqual(1, r.length());
    assertEqual(5, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(3);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(4);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-1);
    assertEqual(1, r.length());
    assertEqual(5, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(-4);
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(-4);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(2147483647);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(Integer.MIN_VALUE);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray r = arr.slice(0);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne015() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(255);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne016() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(256);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne017() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(-256);
    assertEqual(256, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(128));
    assertEqual(0, r.get(255));}

    @Test
    void testUint8ClampedArraySliceOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.slice(0, 1);
    assertEqual(1, r.length());
    assertEqual(10, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0, 4);
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 4);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0, -1);
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(0, -4);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, -4);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 2147483647);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, Integer.MIN_VALUE);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.slice(0, 1);
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray r = arr.slice(0, 3);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne028() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 255);
    assertEqual(255, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(127));
    assertEqual(0, r.get(254));}

    @Test
    void testUint8ClampedArraySliceOne029() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 256);
    assertEqual(256, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(128));
    assertEqual(0, r.get(255));}

    @Test
    void testUint8ClampedArraySliceOne030() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, -256);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne031() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 65536);
    assertEqual(65535, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(32767));
    assertEqual(0, r.get(65534));}

    @Test
    void testUint8ClampedArraySliceOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-2);
    assertEqual(2, r.length());
    assertEqual(4, r.get(0));
    assertEqual(5, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(1, 2);
    assertEqual(1, r.length());
    assertEqual(20, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(2, 2);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(3, 1);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-1, -2);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray r = arr.slice(-3, -1);
    assertEqual(2, r.length());
    assertEqual(30, r.get(0));
    assertEqual(40, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-5, 5);
    assertEqual(5, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));}

    @Test
    void testUint8ClampedArraySliceOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(2, -1);
    assertEqual(2, r.length());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(Integer.MIN_VALUE, 2147483647);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(2147483647, Integer.MIN_VALUE);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(01, 04);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-4, -1);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(10, 20);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(-20, -10);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.slice(-20, 2);
    assertEqual(2, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.slice(1, 20);
    assertEqual(2, r.length());
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 60, 70, 80});
    Uint8ClampedArray r = arr.slice(1);
    assertEqual(3, r.length());
    assertEqual(60, r.get(0));
    assertEqual(70, r.get(1));
    assertEqual(80, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 101, 102, 103, 104});
    Uint8ClampedArray r = arr.slice(2, 4);
    assertEqual(2, r.length());
    assertEqual(102, r.get(0));
    assertEqual(103, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 18, 27, 36});
    Uint8ClampedArray r = arr.slice(-2);
    assertEqual(2, r.length());
    assertEqual(27, r.get(0));
    assertEqual(36, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {12, 24, 48});
    Uint8ClampedArray r = arr.slice(-1);
    assertEqual(1, r.length());
    assertEqual(48, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(1, 3);
    assertEqual(2, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));}

    @Test
    void testUint8ClampedArraySliceOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(1);
    assertEqual(4, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    assertEqual(5, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(1, 1);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(2, 1);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(-1);
    assertEqual(1, r.length());
    assertEqual(4, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice();
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.slice();
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));}

    @Test
    void testUint8ClampedArraySliceOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice();
    assertEqual(4, r.byteLength());}

    @Test
    void testUint8ClampedArraySliceOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice();
    assertEqual(0, r.byteOffset());}

    @Test
    void testUint8ClampedArraySliceOne062() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray r = parent.slice();
    assertEqual(0, r.byteOffset());}

    @Test
    void testUint8ClampedArraySliceOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice();
    assertNotEqual(arr.buffer(), r.buffer());}

    @Test
    void testUint8ClampedArraySliceOne064() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice();
    assertNotEqual(buf, r.buffer());}

    @Test
    void testUint8ClampedArraySliceOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice();
    arr.set(0, 99);
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice();
    r.set(0, 99);
    assertEqual(4, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));}

    @Test
    void testUint8ClampedArraySliceOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r1 = arr.slice();
    Uint8ClampedArray r2 = arr.slice();
    assertNotEqual(r2.buffer(), r1.buffer());}

    @Test
    void testUint8ClampedArraySliceOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(0);
    assertEqual(4, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    assertEqual(40, r.get(3));}

    @Test
    void testUint8ClampedArraySliceOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(100);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArraySliceOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(-100);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArraySliceOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice(5);
    assertEqual(0, r.length());}
}
