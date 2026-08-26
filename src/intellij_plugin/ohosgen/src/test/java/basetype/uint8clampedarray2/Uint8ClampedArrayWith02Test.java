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
 * Uint8ClampedArrayWith02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayWith02Test extends BasTest {

    @Test
    void testUint8ClampedArrayWithTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 255.9);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, -0.5);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 99.49);
    assertEqual(3, r.length());
    assertEqual(99, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 4.5);
    assertEqual(3, r.length());
    assertEqual(4, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, -0.4);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 256.4);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, -0.0);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, Double.MAX_VALUE);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, Double.MIN_VALUE);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 9007199254740991L);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 2.220446049250313E-16);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 2147483648.0);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 65535.0);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, -65535.0);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 0x80);
    assertEqual(3, r.length());
    assertEqual(128, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 0xFF);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 1e2);
    assertEqual(3, r.length());
    assertEqual(100, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.with(0, 99.0);
    assertEqual(10, arr.get(0));}

    @Test
    void testUint8ClampedArrayWithTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 99.0).with(1, 88.0);
    assertEqual(3, r.length());
    assertEqual(99, r.get(0));
    assertEqual(88, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.with(-1, 99.0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.with(512, 999.0);
    assertEqual(1024, r.length());
    assertEqual(255, r.get(512));
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1023));}

    @Test
    void testUint8ClampedArrayWithTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.with(1023, -999.0);
    assertEqual(1024, r.length());
    assertEqual(0, r.get(1023));
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(512));}

    @Test
    void testUint8ClampedArrayWithTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    arr.with(0, 999.0);
    assertEqual(100, arr.get(0));}

    @Test
    void testUint8ClampedArrayWithTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    String t = BasTest.typeofValue(w);
    assertEqual("object", t);}

    @Test
    void testUint8ClampedArrayWithTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(3, w.length());
    assertEqual(99, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(3, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(arr.getClass().getSimpleName(), w.getClass().getSimpleName());}

    @Test
    void testUint8ClampedArrayWithTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(3, w.buffer().byteLength());
    assertEqual(99, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(3, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, Double.POSITIVE_INFINITY);
    assertEqual(3, w.length());
    assertEqual(255, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, -Double.POSITIVE_INFINITY);
    assertEqual(3, w.length());
    assertEqual(0, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, Double.NaN);
    assertEqual(3, w.length());
    assertEqual(0, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, 1e9);
    assertEqual(3, w.length());
    assertEqual(255, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, -1e9);
    assertEqual(3, w.length());
    assertEqual(0, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, 0377);
    assertEqual(3, w.length());
    assertEqual(255, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, 0b11111111);
    assertEqual(3, w.length());
    assertEqual(255, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, -1);
    assertEqual(3, w.length());
    assertEqual(0, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, 256);
    assertEqual(3, w.length());
    assertEqual(255, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(30, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    Uint8ClampedArray w = arr.with(1, 88);
    assertEqual(3, w.length());
    assertEqual(99, w.get(0));
    assertEqual(88, w.get(1));
    assertEqual(3, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(7);
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(4, w.length());
    assertEqual(99, w.get(0));
    assertEqual(7, w.get(1));
    assertEqual(7, w.get(2));
    assertEqual(7, w.get(3));}

    @Test
    void testUint8ClampedArrayWithTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reverse();
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(3, w.length());
    assertEqual(99, w.get(0));
    assertEqual(20, w.get(1));
    assertEqual(10, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort();
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(3, w.length());
    assertEqual(99, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(3, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo040() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(3, w.length());
    assertEqual(99, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(3, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo041() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    Uint8ClampedArray w = arr.with(1, 88);
    assertEqual(3, w.length());
    assertEqual(1, w.get(0));
    assertEqual(88, w.get(1));
    assertEqual(3, w.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 2, 4);
    parent.set(0, 10);
    parent.set(1, 20);
    Uint8ClampedArray w = parent.with(0, 99);
    assertEqual(0, w.byteOffset());}

    @Test
    void testUint8ClampedArrayWithTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray w1 = arr.with(0, 99);
    Uint8ClampedArray w2 = arr.with(2, 88);
    assertEqual(4, w1.length());
    assertEqual(4, w2.length());
    assertEqual(99, w1.get(0));
    assertEqual(2, w1.get(1));
    assertEqual(3, w1.get(2));
    assertEqual(4, w1.get(3));
    assertEqual(1, w2.get(0));
    assertEqual(2, w2.get(1));
    assertEqual(88, w2.get(2));
    assertEqual(4, w2.get(3));}

    @Test
    void testUint8ClampedArrayWithTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray w = arr.with(4, 99);
    assertEqual(5, w.length());
    assertEqual(1, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(3, w.get(2));
    assertEqual(4, w.get(3));
    assertEqual(99, w.get(4));}

    @Test
    void testUint8ClampedArrayWithTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(1, w.length());
    assertEqual(99, w.get(0));}

    @Test
    void testUint8ClampedArrayWithTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 20, 30});
    Uint8ClampedArray w = arr.with(0, 50);
    Uint8ClampedArray m = w.map((x) -> { return x * 2;});
    assertEqual(3, m.length());
    assertEqual(100, m.get(0));
    assertEqual(40, m.get(1));
    assertEqual(60, m.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 200, 30});
    Uint8ClampedArray w = arr.with(1, 50);
    Uint8ClampedArray f = w.filter((x) -> { return x > 40;});
    assertEqual(1, f.length());
    assertEqual(50, f.get(0));}

    @Test
    void testUint8ClampedArrayWithTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray w = arr.with(0, 99);
    Uint8ClampedArray sub = w.subarray(0, 2);
    assertEqual(2, sub.length());
    assertEqual(99, sub.get(0));
    assertEqual(20, sub.get(1));}

    @Test
    void testUint8ClampedArrayWithTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    Uint8ClampedArray r = w.toReversed();
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(99, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray w = arr.with(0, 99);
    Uint8ClampedArray s = w.toSorted();
    assertEqual(3, s.length());
    assertEqual(1, s.get(0));
    assertEqual(2, s.get(1));
    assertEqual(99, s.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray w = arr.with(0, 99);
    Uint8ClampedArray s = w.slice(0, 2);
    assertEqual(2, s.length());
    assertEqual(99, s.get(0));
    assertEqual(2, s.get(1));}

    @Test
    void testUint8ClampedArrayWithTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    String r = String.valueOf(w);
    assertEqual(6, r.length());}

    @Test
    void testUint8ClampedArrayWithTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(arr.BYTES_PER_ELEMENT, w.BYTES_PER_ELEMENT);}

    @Test
    void testUint8ClampedArrayWithTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray w = arr.with(2, 99);
    assertEqual(arr.length(), w.length());
    assertEqual(1, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(99, w.get(2));
    assertEqual(4, w.get(3));
    assertEqual(5, w.get(4));}

    @Test
    void testUint8ClampedArrayWithTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray w = arr.with(2, 99);
    assertEqual(arr.byteLength(), w.byteLength());
    assertEqual(1, w.get(0));
    assertEqual(2, w.get(1));
    assertEqual(99, w.get(2));
    assertEqual(4, w.get(3));
    assertEqual(5, w.get(4));}

    @Test
    void testUint8ClampedArrayWithTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.with(0, 99);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int before = arr.byteOffset();
    arr.with(0, 99);
    assertEqual(before, arr.byteOffset());}

    @Test
    void testUint8ClampedArrayWithTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray w = arr.with(0, 99);
    assertNotEqual(arr.buffer(), w.buffer());}

    @Test
    void testUint8ClampedArrayWithTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(2147483647, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(3, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.with(-2, 99);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(99, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayWithTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(4, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60});
    Uint8ClampedArray sub1 = arr.subarray(1, 5);
    Uint8ClampedArray sub2 = sub1.subarray(1, 3);
    Uint8ClampedArray w = sub2.with(0, 99);
    assertEqual(2, w.length());
    assertEqual(99, w.get(0));
    assertEqual(40, w.get(1));
    assertEqual(30, sub2.get(0));}
}
