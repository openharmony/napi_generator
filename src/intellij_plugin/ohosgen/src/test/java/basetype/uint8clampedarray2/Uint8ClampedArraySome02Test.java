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
import basetype.common.Error;
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
 * Uint8ClampedArraySome02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySome02Test extends BasTest {

    @Test
    void testUint8ClampedArraySomeTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return false;});
    assertFalse(r);
    assertEqual(1, count[0]);}

    @Test
    void testUint8ClampedArraySomeTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    boolean r = arr.some((e, i, a) -> (i + 1) == 2);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> i == 1 && e == arr.get(1));
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 100, 200});
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> i == 0 && a.get(1) == 2);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    boolean r = arr.some((e, i, a) -> true);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.some((e, i, a) -> e > 0);
    assertEqual(3, arr.length());}

    @Test
    void testUint8ClampedArraySomeTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.some((e, i, a) -> e > 0);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArraySomeTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.some((e, i, a) -> false);
    assertEqual(bufBefore, arr.buffer());}

    @Test
    void testUint8ClampedArraySomeTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r1 = arr.some((e, i, a) -> e == 2);
    boolean r2 = arr.some((e, i, a) -> e == 2);
    assertTrue(r1);
    assertTrue(r2);}

    @Test
    void testUint8ClampedArraySomeTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.some((e, i, a) -> { if (i == 2) { throw new Error("inner");} return false;});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySomeTwo012() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    boolean r = sub.some((e, i, a) -> e == 5);
    assertEqual(5, parent.length());
    assertEqual(2, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));}

    @Test
    void testUint8ClampedArraySomeTwo013() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    boolean[] same = {false};
    sub.some((e, i, a) -> { same[0] = (a == sub); return true;});
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArraySomeTwo014() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice();
    parent.set(0, 99);
    boolean r = s.some((e, i, a) -> e == 1);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> { if (i == 0) a.set(2, 99); return e == 1;});
    assertTrue(r);
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySomeTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> { if (i == 0) a.set(2, 99); return e == 99;});
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String[] errorName = {""};
    try {
    arr.some((e, i, a) -> { a.set(100, 7); return false;});
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    errorName[0] = e.getClass().getSimpleName();};
    assertEqual(3, arr.length());
    assertEqual("RangeError", errorName[0]);
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArraySomeTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0, 0});
    boolean r = arr.some((e, i, a) -> { if (i == 0) a.set(2, 300); return e == 255;});
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo019() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    boolean r = arr.some((e, i, a) -> e == 20);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo020() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6, 7});
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    boolean r = arr.some((e, i, a) -> e == 6);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo021() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 0);
    boolean r = arr.some((e, i, a) -> true);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeTwo022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    full.set(5, 77);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 4, 4);
    boolean r = view.some((e, i, a) -> e == 77);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(42);
    boolean r = arr.some((e, i, a) -> e == 42);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    boolean r = arr.some((e, i, a) -> i == 0 && e == 3);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(10, 20);
    arr.set(src, 1);
    boolean r = arr.some((e, i, a) -> e == 20);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    boolean r = arr.some((e, i, a) -> i == 0 && e == 4);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo027() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) { src.add(i);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return true;});
    assertTrue(r);
    assertEqual(1, count[0]);}

    @Test
    void testUint8ClampedArraySomeTwo028() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 49; i++) { src.add(0);}
    src.add(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return e == 1;});
    assertTrue(r);
    assertEqual(50, count[0]);}

    @Test
    void testUint8ClampedArraySomeTwo029() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 30; i++) { src.add(1);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return false;});
    assertFalse(r);
    assertEqual(30, count[0]);}

    @Test
    void testUint8ClampedArraySomeTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 4, 5});
    boolean r = arr.some((e, i, a) -> e % 2 == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 5, 7});
    boolean r = arr.some((e, i, a) -> e % 2 == 0);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3});
    boolean r = arr.some((e, i, a) -> e == i);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e == i);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeTwo034() {
    Uint8ClampedArray outer = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray inner = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = outer.some((e, i, a) -> inner.some((x, j, b) -> x == 30 && e == 1));
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo035() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 20; i++) { src.add(i == 10 ? 250 : 10);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.some((e, i, a) -> e > 200);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 0, 5});
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 255, 5});
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int target = 20;
    boolean r = arr.some((e, i, a) -> e == target);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int targetIdx = 2;
    boolean r = arr.some((e, i, a) -> i == targetIdx);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray replaced = arr.with(1, 99);
    boolean r = replaced.some((e, i, a) -> e == 99);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    boolean r = sorted.some((e, i, a) -> i == 0 && e == 1);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray rev = arr.toReversed();
    boolean r = rev.some((e, i, a) -> i == 0 && e == 3);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray mapped = arr.map((e, i, a) -> e * 2);
    boolean r = mapped.some((e, i, a) -> e == 6);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray filtered = arr.filter((e, i, a) -> e > 2);
    boolean r = filtered.some((e, i, a) -> e == 3);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(1, 4);
    boolean r = s.some((e, i, a) -> e == 3);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(1, 3);
    boolean r = s.some((e, i, a) -> e == 5);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeTwo047() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 200; i++) { src.add(i == 150 ? 100 : 1);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.some((e, i, a) -> { boolean isMultipleOf100 = e % 100 < 1; return e > 0 ? isMultipleOf100 : false;});;
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo048() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 300; i++) { src.add(5);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.some((e, i, a) -> i == a.length() - 1);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 5, 8, 9});
    boolean r = arr.some((e, i, a) -> (e + i) == 10);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] sum = {0};
    boolean r = arr.some((e, i, a) -> { sum[0] += e; return sum[0] > 5;});
    assertTrue(r);
    assertEqual(6, sum[0]);}

    @Test
    void testUint8ClampedArraySomeTwo051() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray empty = parent.subarray(2, 2);
    boolean[] called = {false};
    boolean r = empty.some((e, i, a) -> { called[0] = true; return true;});
    assertEqual(3, parent.length());
    assertEqual(0, empty.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));}

    @Test
    void testUint8ClampedArraySomeTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] same = {false};
    arr.some((e, i, a) -> { same[0] = (a.buffer() == arr.buffer()); return true;});
    assertTrue(same[0]);}

    @Test
    void testUint8ClampedArraySomeTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] bl = {-1};
    arr.some((e, i, a) -> { bl[0] = a.byteLength(); return true;});
    assertEqual(4, bl[0]);}

    @Test
    void testUint8ClampedArraySomeTwo054() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    sub.some((e, i, a) -> false);
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArraySomeTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.some((e, i, a) -> { a.set(100, 7); return false;});
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArraySomeTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> e == a.get(a.length() - 1));
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    boolean r = arr.some((e, i, a) -> e == a.get(0));
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] trueCount = {0};
    boolean r = arr.some((e, i, a) -> { if (e == 2) { trueCount[0]++; return true;} return false;});
    assertTrue(r);
    assertEqual(1, trueCount[0]);}

    @Test
    void testUint8ClampedArraySomeTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r1 = arr.some((e, i, a) -> e == 1);
    boolean r2 = arr.some((e, i, a) -> e == 4);
    assertTrue(r1);
    assertFalse(r2);}

    @Test
    void testUint8ClampedArraySomeTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return false;});
    assertFalse(r);
    assertEqual(4, count[0]);}

    @Test
    void testUint8ClampedArraySomeTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return i == 2;});
    assertTrue(r);
    assertEqual(3, count[0]);}

    @Test
    void testUint8ClampedArraySomeTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.Uint8ClampedArrayFinder pred = (e, i, a) -> e == 2;
    assertTrue(arr.some(pred));
    assertTrue(arr.some(pred));
    assertTrue(arr.some(pred));}

    @Test
    void testUint8ClampedArraySomeTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    boolean r = arr.some((e, i, a) -> (e * i) == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> e == 2 ? true : false);
    assertTrue(r);}
}
