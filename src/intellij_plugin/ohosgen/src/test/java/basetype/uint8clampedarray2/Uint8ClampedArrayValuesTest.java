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
import basetype.common.IteratorResult;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayValuesTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayValuesTest extends BasTest {

    @Test
    void testUint8ClampedArrayValues001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertNotNull(it);}

    @Test
    void testUint8ClampedArrayValues002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertTrue(r.done);}

    @Test
    void testUint8ClampedArrayValues003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertEqual(null, r.value);}

    @Test
    void testUint8ClampedArrayValues004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertEqual(7, r.value);}

    @Test
    void testUint8ClampedArrayValues005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertFalse(r.done);}

    @Test
    void testUint8ClampedArrayValues006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    IteratorResult r2 = it.next();
    assertTrue(r2.done);}

    @Test
    void testUint8ClampedArrayValues007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(10, it.next().value);}

    @Test
    void testUint8ClampedArrayValues008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    assertEqual(20, it.next().value);}

    @Test
    void testUint8ClampedArrayValues009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    it.next();
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayValues010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray.KeyIterator it = arr.values();
    double sum = 0.0;
    for (int i = 0; i < 5; i++) {
    sum += BasTest.coalesce(it.next().value, 0.0);};
    assertEqual(15, sum);}

    @Test
    void testUint8ClampedArrayValues011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(0, it.next().value);}

    @Test
    void testUint8ClampedArrayValues012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(255, it.next().value);}

    @Test
    void testUint8ClampedArrayValues013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 256);
    assertEqual(255, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1);
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.NaN);
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(255, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 127.5);
    assertEqual(128, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 128.5);
    assertEqual(128, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.5);
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.4);
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.9);
    assertEqual(1, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1e9);
    assertEqual(255, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1e9);
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    Uint8ClampedArray.KeyIterator it = arr.values();
    boolean allZero = true;
    for (int i = 0; i < 10; i++) {
    if (it.next().value != 0) {
    allZero = false;};};
    assertTrue(allZero);}

    @Test
    void testUint8ClampedArrayValues021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray.KeyIterator it = arr.values();
    int count = 0;
    IteratorResult r = it.next();
    while (!r.done) {
    count++;
    r = it.next();};
    assertEqual(1024, count);}

    @Test
    void testUint8ClampedArrayValues022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it1 = arr.values();
    Uint8ClampedArray.KeyIterator it2 = arr.values();
    it1.next();
    assertEqual(1, it2.next().value);}

    @Test
    void testUint8ClampedArrayValues023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += v ;};
    assertEqual(10, sum);}

    @Test
    void testUint8ClampedArrayValues024() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(0, it.next().value);}

    @Test
    void testUint8ClampedArrayValues025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 2);
    Uint8ClampedArray.KeyIterator it = arr.values();
    int count = 0;
    IteratorResult r = it.next();
    while (!r.done) {
    count++;
    r = it.next();};
    assertEqual(2, count);}

    @Test
    void testUint8ClampedArrayValues026() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 0);
    assertTrue(arr.values().next().done);}

    @Test
    void testUint8ClampedArrayValues027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    Uint8ClampedArray.KeyIterator it = sub.values();
    assertEqual(4, arr.length());
    assertEqual(2, sub.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));}

    @Test
    void testUint8ClampedArrayValues028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(1, 3);
    Uint8ClampedArray.KeyIterator it = s.values();
    assertEqual(2, it.next().value);}

    @Test
    void testUint8ClampedArrayValues029() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray copy = Uint8ClampedArray.from(src);
    assertEqual(7, copy.values().next().value);}

    @Test
    void testUint8ClampedArrayValues030() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(11, 22, 33);
    assertEqual(11, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    arr.set(1, 99);
    assertEqual(99, it.next().value);}

    @Test
    void testUint8ClampedArrayValues032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayValues033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    it.next();
    it.next();
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayValues039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    assertEqual(255, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    assertEqual(0, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x7FFFFFFF});
    assertEqual(255, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2});
    assertEqual(100, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray.KeyIterator it = arr.values();
    for (int i = 0; i < 255; i++) {
    it.next();};
    assertFalse(it.next().done);}

    @Test
    void testUint8ClampedArrayValues045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray.KeyIterator it = arr.values();
    for (int i = 0; i < 256; i++) {
    it.next();};
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayValues046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    assertEqual(null, it.next().value);}

    @Test
    void testUint8ClampedArrayValues047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.values();
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayValues048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.values();
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayValues049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    it.next();
    it.next();
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayValues050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.values();
    int count = 0;
    IteratorResult r = it.next();
    while (!r.done) {
    count++;
    r = it.next();};
    assertEqual(0, count);}

    @Test
    void testUint8ClampedArrayValues051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 5, 5});
    Uint8ClampedArray.KeyIterator it = arr.values();
    int count = 0;
    IteratorResult r = it.next();
    while (!r.done) {
    count++;
    r = it.next();};
    assertEqual(5, count);}

    @Test
    void testUint8ClampedArrayValues052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(arr.get(0), it.next().value);
    assertEqual(arr.get(1), it.next().value);
    assertEqual(arr.get(2), it.next().value);}

    @Test
    void testUint8ClampedArrayValues053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {300, -5, 100});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(255, it.next().value);
    assertEqual(0, it.next().value);
    assertEqual(100, it.next().value);}

    @Test
    void testUint8ClampedArrayValues054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertEqual(99, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(1, 300);
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    assertEqual(255, it.next().value);}

    @Test
    void testUint8ClampedArrayValues056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(128);
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(128, it.next().value);
    assertEqual(128, it.next().value);
    assertEqual(128, it.next().value);}

    @Test
    void testUint8ClampedArrayValues057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    assertEqual(3, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayValues058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {300, -10});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(255, it.next().value);
    assertEqual(0, it.next().value);}

    @Test
    void testUint8ClampedArrayValues059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it1 = arr.values();
    it1.next();
    it1.next();
    assertTrue(it1.next().done);
    Uint8ClampedArray.KeyIterator it2 = arr.values();
    it2.next();
    it2.next();
    assertTrue(it2.next().done);}
}
