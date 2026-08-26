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
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArraySome01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySome01Test extends BasTest {

    @Test
    void testUint8ClampedArraySomeOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> i == 1 && a.length() == 3 && e == 20);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> true);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> false);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 300});
    int[] calls = {0};
    boolean r = arr.some((e, i, a) -> { calls[0]++; return e == 100;});
    assertTrue(r);
    assertEqual(1, calls[0]);}

    @Test
    void testUint8ClampedArraySomeOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    boolean r = arr.some((e, i, a) -> { calls[0]++; return e == 5;});
    assertTrue(r);
    assertEqual(5, calls[0]);}

    @Test
    void testUint8ClampedArraySomeOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    boolean r = arr.some((e, i, a) -> i == 2);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    boolean r = arr.some((e, i, a) -> i == 99);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.some((e, i, a) -> a == arr);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray inner = new Uint8ClampedArray(new int[] {5, 6});
    boolean r = arr.some((e, i, a) -> inner.some((x, j, b) -> x == 6));
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int threshold = 2;
    boolean r = arr.some((e, i, a) -> e > threshold);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] counter = {0};
    arr.some((e, i, a) -> { counter[0]++; return false;});
    assertEqual(3, counter[0]);}

    @Test
    void testUint8ClampedArraySomeOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e > 25);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e < 15);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e >= 30);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e <= 10);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    boolean r = arr.some((e, i, a) -> e != 5);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e > 15 && e < 25);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> e == 5 || e == 20);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 1});
    boolean r = arr.some((e, i, a) -> !(e == 0));
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int[] calls = {0};
    boolean r = arr.some((e, i, a) -> { calls[0]++; return true;});
    assertFalse(r);
    assertEqual(0, calls[0]);}

    @Test
    void testUint8ClampedArraySomeOne021() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    boolean r = arr.some((e, i, a) -> true);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne024() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 65534; i++) { src.add(0);}
    src.add(200);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.some((e, i, a) -> e == 200);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 10); arr.set(1, 20); arr.set(2, 30); arr.set(3, 40);
    boolean r = arr.some((e, i, a) -> e == 30);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    parent.set(0, 1); parent.set(1, 2); parent.set(2, 3); parent.set(3, 4);
    parent.set(4, 5); parent.set(5, 6); parent.set(6, 7); parent.set(7, 8);
    Uint8ClampedArray sub = new Uint8ClampedArray(buf, 4, 4);
    boolean r = sub.some((e, i, a) -> e == 5);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(1, 256);
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 100, 100});
    arr.set(1, -1);
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 100, 100});
    arr.set(0, Double.NaN);
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(2, Double.POSITIVE_INFINITY);
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, -Double.POSITIVE_INFINITY);
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    arr.set(0, 0.5);
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    arr.set(0, 0.9);
    boolean r = arr.some((e, i, a) -> e == 1);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 127.5);
    boolean r = arr.some((e, i, a) -> e == 128);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 128.5);
    boolean r = arr.some((e, i, a) -> e == 128);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> seen = new ArrayList<>();
    arr.some((e, i, a) -> { seen.add(i); return false;});
    assertEqual(3, seen.size());
    assertEqual(0, seen.get(0));
    assertEqual(1, seen.get(1));
    assertEqual(2, seen.get(2));}

    @Test
    void testUint8ClampedArraySomeOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    boolean r = arr.some((e, i, a) -> true);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.some((e, i, a) -> { throw new RangeError("rng");});
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySomeOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.some((e, i, a) -> { throw new TypeError("te");});
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySomeOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    boolean[] called = {false};
    boolean r = arr.some((e, i, a) -> { called[0] = true; throw new Error("x");});
    assertFalse(r);
    assertFalse(called[0]);}

    @Test
    void testUint8ClampedArraySomeOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] count = {0};
    try {
    arr.some((e, i, a) -> { count[0]++; if (i == 1) throw new Error("stop"); return false;});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(2, count[0]);}

    @Test
    void testUint8ClampedArraySomeOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.some((e, i, a) -> { throw new Error("x");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArraySomeOne043() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    boolean r = sub.some((e, i, a) -> e == 3);
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
    void testUint8ClampedArraySomeOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    boolean r = arr.some((e, i, a) -> { calls[0]++; return e == 3;});
    assertTrue(r);
    assertEqual(3, calls[0]);}

    @Test
    void testUint8ClampedArraySomeOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    boolean r = arr.some((e, i, a) -> i == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.some((e, i, a) -> i == 1 && a.get(0) == 10);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    boolean r = arr.some((e, i, a) -> e == 42);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    boolean r = arr.some((e, i, a) -> e == 99);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    boolean r = arr.some((e, i, a) -> e != 0);
    assertFalse(r);}

    @Test
    void testUint8ClampedArraySomeOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.set(255, 7);
    boolean r = arr.some((e, i, a) -> e == 7);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.set(512, 9);
    boolean r = arr.some((e, i, a) -> e == 9);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 1e9);
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    arr.set(0, -1e9);
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, Double.MAX_VALUE);
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    arr.set(0, Double.MIN_VALUE);
    boolean r = arr.some((e, i, a) -> e == 0);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 0, 0});
    boolean r = arr.some((e, i, a) -> e == 127);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 0, 0});
    boolean r = arr.some((e, i, a) -> e == 128);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x7F});
    boolean r = arr.some((e, i, a) -> e == 127);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF});
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017});
    boolean r = arr.some((e, i, a) -> e == 15);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111});
    boolean r = arr.some((e, i, a) -> e == 255);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2});
    boolean r = arr.some((e, i, a) -> e == 100);
    assertTrue(r);}

    @Test
    void testUint8ClampedArraySomeOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3, 4});
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return e > 0;});
    assertTrue(r);
    assertEqual(2, count[0]);}

    @Test
    void testUint8ClampedArraySomeOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    int[] count = {0};
    boolean r = arr.some((e, i, a) -> { count[0]++; return true;});
    assertTrue(r);
    assertEqual(1, count[0]);}
}
