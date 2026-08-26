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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayUnderSet02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayUnderSet02Test extends BasTest {

    @Test
    void testUint8ClampedArrayUnderSetTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertEqual(arr.length(), arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo003() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 4);
    view.set(0, 99);
    assertEqual(2, view.byteOffset());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo004() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 4);
    try {
    view.set(100, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(2, view.byteOffset());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer before = arr.buffer();
    arr.set(0, 99);
    assertEqual(before, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer before = arr.buffer();
    try {
    arr.set(100, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(before, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo007() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 0, 4);
    view.set(0, 99);
    assertEqual(buf, view.buffer());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(99, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(100, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertEqual(arr.buffer().byteLength(), arr.length());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo012() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    sub.set(0, 99);
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(99, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(99, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo013() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    parent.set(2, 77);
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(77, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(77, sub.get(1));
    assertEqual(4, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo014() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray copy = parent.slice(0, 3);
    copy.set(0, 99);
    assertNotEqual(parent.buffer(), copy.buffer());
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo015() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray viewA = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray viewB = new Uint8ClampedArray(buf, 0, 4);
    viewA.set(0, 88);
    assertEqual(88, viewB.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray frontView = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray backView = new Uint8ClampedArray(buf, 3, 4);
    frontView.set(3, 222);
    assertEqual(222, backView.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo017() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray viewA = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray viewB = new Uint8ClampedArray(buf, 0, 4);
    viewA.set(0, 500);
    assertEqual(255, viewB.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer ret = arr.set(0, 99);
    assertEqual(null, ret);
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 0.9);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 128);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 254);
    assertEqual(3, arr.length());
    assertEqual(254, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 0;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(1, 99);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));
    assertEqual(10, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(2, 99);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, 256);
    assertEqual(3, arr.length());
    assertEqual(20, arr.get(1));
    assertEqual(255, arr.get(0));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, -1);
    assertEqual(3, arr.length());
    assertEqual(20, arr.get(1));
    assertEqual(0, arr.get(0));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 254.6);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo028() {
    Uint8ClampedArray arr1 = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 100;
    arr1.set(0, v);
    arr2.set(0, 100);
    assertEqual(arr2.get(0), arr1.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 50;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(50, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(01, 77);
    assertEqual(3, arr.length());
    assertEqual(77, arr.get(1));
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0b10, 66);
    assertEqual(3, arr.length());
    assertEqual(66, arr.get(2));
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {30, 10, 20});
    arr.sort();
    arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reverse();
    arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(10, arr.get(2));
    assertEqual(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(7);
    arr.set(1, 99);
    assertEqual(4, arr.length());
    assertEqual(99, arr.get(1));
    assertEqual(7, arr.get(0));
    assertEqual(7, arr.get(2));
    assertEqual(7, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo035() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    arr.set(1, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(1));
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo036() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    arr.set(1, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(1));
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 4);
    view.set(0, 99);
    assertEqual(99, parent.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    sub.set(1, 99);
    assertEqual(5, arr.length());
    assertEqual(3, sub.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(99, arr.get(2));
    assertEqual(40, arr.get(3));
    assertEqual(50, arr.get(4));
    assertEqual(20, sub.get(0));
    assertEqual(99, sub.get(1));
    assertEqual(40, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(512, 88);
    assertEqual(88, arr.get(512));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(511));
    assertEqual(0, arr.get(1023));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    arr.set(65534, 77);
    assertEqual(77, arr.get(65534));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(32767));
    assertEqual(0, arr.get(65533));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0377);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, Double.MAX_VALUE);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.set(arr.length() - 1, 200);
    assertEqual(4, arr.length());
    assertEqual(200, arr.get(arr.length() - 1));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 2147483648L);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    try {
    arr.set(256, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int i = 1;
    arr.set(i, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(i));
    assertEqual(10, arr.get(0));
    assertEqual(30, arr.get(2));
    }
}
