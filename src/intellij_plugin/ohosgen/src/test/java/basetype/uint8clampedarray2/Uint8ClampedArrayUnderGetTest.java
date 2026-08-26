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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayUnderGetTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayUnderGetTest extends BasTest {

    @Test
    void testUint8ClampedArrayUnderGet001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = arr.get(0);
    assertEqual(10, v);
    }

    @Test
    void testUint8ClampedArrayUnderGet002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 1, 2});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 1, 2});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 1, 2});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 1, 2});
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 1, 2});
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    assertEqual(40, arr.get(arr.length() - 1));
    }

    @Test
    void testUint8ClampedArrayUnderGet013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    arr.set(254, 200);
    assertEqual(200, arr.get(254));
    }

    @Test
    void testUint8ClampedArrayUnderGet014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet020() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet021() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet022() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    parent.set(2, 77);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 2);
    assertEqual(77, view.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet023() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 2);
    try {
    view.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet024() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray copy = Uint8ClampedArray.from(src);
    assertEqual(1, copy.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray s = arr.slice(1, 3);
    assertEqual(20, s.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(4, arr.length());
    assertEqual(2, sub.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(40, arr.get(3));
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    try {
    sub.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(4, arr.length());
    assertEqual(2, sub.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(40, arr.get(3));
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 99);
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, -1);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 127.5);
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 128.5);
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    try {
    arr.get(5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.set(3, 200);
    assertEqual(200, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayUnderGet037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet038() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 4, 0);
    try {
    view.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(1, 99);
    assertEqual(2, sub.length());
    assertEqual(99, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    sub.set(0, 77);
    assertEqual(2, sub.length());
    assertEqual(77, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet041() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray viewA = new Uint8ClampedArray(buf);
    Uint8ClampedArray viewB = new Uint8ClampedArray(buf);
    viewA.set(0, 55);
    assertEqual(55, viewB.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray s = arr.slice(1, 3);
    arr.set(1, 99);
    assertEqual(20, s.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet043() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray copy = Uint8ClampedArray.from(src);
    src.set(0, 99);
    assertEqual(10, copy.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 1, 2});
    assertEqual(127, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 1, 2});
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9, 1, 2});
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-0, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9, 1, 2});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2147483648L, 1, 2});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MAX_VALUE, 1, 2});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MIN_VALUE, 1, 2});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderGet057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8});
    assertEqual(7, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8});
    assertEqual(8, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3, 4, 50, 6, 7, 8, 9});
    assertEqual(50, arr.get(5));
    }

    @Test
    void testUint8ClampedArrayUnderGet061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    arr.set(0, 123);
    assertEqual(123, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.set(255, 77);
    assertEqual(77, arr.get(255));
    }

    @Test
    void testUint8ClampedArrayUnderGet063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(512, 88);
    assertEqual(88, arr.get(512));
    }

    @Test
    void testUint8ClampedArrayUnderGet064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(1023, 200);
    assertEqual(200, arr.get(1023));
    }

    @Test
    void testUint8ClampedArrayUnderGet065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    arr.set(0, 1);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    arr.set(65534, 2);
    assertEqual(2, arr.get(65534));
    }

    @Test
    void testUint8ClampedArrayUnderGet067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    assertEqual(0, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayUnderGet068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(103);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(6);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(65535);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(2147483646);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(-2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(-3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(-4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(-100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.get(-2147483647);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(11, arr.get(0x0));
    }

    @Test
    void testUint8ClampedArrayUnderGet080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(22, arr.get(0x1));
    }

    @Test
    void testUint8ClampedArrayUnderGet081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(33, arr.get(0x2));
    }

    @Test
    void testUint8ClampedArrayUnderGet082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(11, arr.get(00));
    }

    @Test
    void testUint8ClampedArrayUnderGet083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(33, arr.get(02));
    }

    @Test
    void testUint8ClampedArrayUnderGet084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(11, arr.get(0b0));
    }

    @Test
    void testUint8ClampedArrayUnderGet085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(22, arr.get(0b1));
    }

    @Test
    void testUint8ClampedArrayUnderGet086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(33, arr.get(0b10));
    }

    @Test
    void testUint8ClampedArrayUnderGet087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(33, arr.get(1 + 1));
    }

    @Test
    void testUint8ClampedArrayUnderGet088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(22, arr.get(3 - 2));
    }

    @Test
    void testUint8ClampedArrayUnderGet089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    assertEqual(33, arr.get(1 << 1));
    }

    @Test
    void testUint8ClampedArrayUnderGet090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    try {
    arr.get(0xFF);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int i = 0;
    assertEqual(5, arr.get(i));
    }

    @Test
    void testUint8ClampedArrayUnderGet092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int i = 2;
    assertEqual(7, arr.get(i));
    }

    @Test
    void testUint8ClampedArrayUnderGet093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int i = -1;
    try {
    arr.get(i);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int i = 3;
    try {
    arr.get(i);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderGet095() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int base = 1;
    int i = base + 1;
    assertEqual(7, arr.get(i));
    }

    @Test
    void testUint8ClampedArrayUnderGet096() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderGet097() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderGet098() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    parent.set(3, 88);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 2);
    assertEqual(88, view.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet099() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet100() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet101() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet102() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 84, 126});
    assertEqual(arr.get(0), arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet103() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 84, 126});
    assertEqual(arr.get(1), arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet104() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 84, 126});
    assertEqual(arr.get(2), arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderGet105() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = arr.get(1);
    String t = BasTest.typeofValue(v);
    assertEqual("number", t);
    }

    @Test
    void testUint8ClampedArrayUnderGet106() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200});
    int v = arr.get(0);
    assertTrue(v >= 0);
    assertTrue(v <= 255);
    }

    @Test
    void testUint8ClampedArrayUnderGet107() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200});
    int v = arr.get(0);
    assertTrue(v >= 0);
    }

    @Test
    void testUint8ClampedArrayUnderGet108() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    arr.get(1);
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayUnderGet109() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.get(0);
    assertEqual(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet110() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int a = arr.get(1);
    int b = arr.get(1);
    assertEqual(b, a);
    }

    @Test
    void testUint8ClampedArrayUnderGet111() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet112() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayUnderGet113() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayUnderGet114() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayUnderGet115() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {257});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet116() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1000});
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet117() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-100});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet118() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 128, 256});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet119() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 128, 256});
    assertEqual(128, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderGet120() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 128, 256});
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderGet121() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet122() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2.5});
    assertEqual(2, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet123() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1.5});
    assertEqual(2, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet124() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {254.5});
    assertEqual(254, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderGet125() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {255.5});
    assertEqual(255, arr.get(0));
    }
}
