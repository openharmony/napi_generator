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
import basetype.common.IteratorResult;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayUnderIteratorTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayUnderIteratorTest extends BasTest {

    @Test
    void testUint8ClampedArrayUnderIterator001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += v;};
    assertEqual(6, sum);}

    @Test
    void testUint8ClampedArrayUnderIterator002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    String typeStr = "";
    for (Integer v : arr.values()) {
    typeStr = BasTest.typeofValue(v);};
    assertEqual("number", typeStr);}

    @Test
    void testUint8ClampedArrayUnderIterator003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int count = 0;
    for (Integer v : arr.values()) {
    count++;};
    assertEqual(0, count);}

    @Test
    void testUint8ClampedArrayUnderIterator004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int sumA = 0;
    int sumB = 0;
    Uint8ClampedArray.KeyIterator itA = arr.values();
    IteratorResult r = itA.next();
    while (!r.done) {
    sumA += BasTest.coalesce(r.value, 0.0);
    r = itA.next();};
    Uint8ClampedArray.KeyIterator itB = arr.values();
    IteratorResult r2 = itB.next();
    while (!r2.done) {
    sumB += BasTest.coalesce(r2.value, 0.0);
    r2 = itB.next();};
    assertEqual(sumB, sumA);}

    @Test
    void testUint8ClampedArrayUnderIterator005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertFalse(it.next().done);}

    @Test
    void testUint8ClampedArrayUnderIterator006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertEqual(42, it.next().value);}

    @Test
    void testUint8ClampedArrayUnderIterator007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayUnderIterator008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(255, v);}

    @Test
    void testUint8ClampedArrayUnderIterator009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(0, v);}

    @Test
    void testUint8ClampedArrayUnderIterator010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(0, v);}

    @Test
    void testUint8ClampedArrayUnderIterator011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(255, v);}

    @Test
    void testUint8ClampedArrayUnderIterator012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(128, v);}

    @Test
    void testUint8ClampedArrayUnderIterator013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(128, v);}

    @Test
    void testUint8ClampedArrayUnderIterator014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator itA = arr.values();
    Uint8ClampedArray.KeyIterator itB = arr.values();
    itA.next();
    assertEqual(10, itB.next().value);}

    @Test
    void testUint8ClampedArrayUnderIterator015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    int sum = 0;
    for (Integer v : sub.values()) {
    sum += v;};
    assertEqual(5, arr.length());
    assertEqual(3, sub.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArrayUnderIterator016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray s = arr.slice(0, 2);
    int sum = 0;
    for (Integer v : s.values()) {
    sum += v;};
    assertEqual(30, sum);}

    @Test
    void testUint8ClampedArrayUnderIterator017() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += v;};
    assertEqual(0, sum);}

    @Test
    void testUint8ClampedArrayUnderIterator018() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 3);
    int count = 0;
    for (Integer v : arr.values()) {
    count++;};
    assertEqual(3, count);}

    @Test
    void testUint8ClampedArrayUnderIterator019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    for (Integer v : arr.values()) {
    throw new Error("inner");};
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayUnderIterator020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int count = 0;
    for (Integer v : arr.values()) {
    count++;
    if (count == 2) {
    break;};};
    assertEqual(2, count);}

    @Test
    void testUint8ClampedArrayUnderIterator021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int sum = 0;
    int idx = 0;
    for (Integer v : arr.values()) {
    if (idx % 2 == 0) {
    idx++;
    continue;};
    sum += v;
    idx++;};
    assertEqual(6, sum);}

    @Test
    void testUint8ClampedArrayUnderIterator022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    it.next();
    IteratorResult r = it.next();
    assertEqual(null, r.value);}

    @Test
    void testUint8ClampedArrayUnderIterator023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int v = -1;
    for (Integer x : arr.values()) {
    v = x;};
    assertEqual(99, v);}

    @Test
    void testUint8ClampedArrayUnderIterator024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int first = -1;
    for (Integer x : arr.values()) {
    first = x;
    break;};
    assertEqual(10, first);}

    @Test
    void testUint8ClampedArrayUnderIterator025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int v = -1;
    for (Integer x : arr.values()) {
    v = x;};
    assertEqual(20, v);}

    @Test
    void testUint8ClampedArrayUnderIterator026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int count = 0;
    for (Integer x : arr.values()) {
    count++;};
    assertEqual(5, count);}

    @Test
    void testUint8ClampedArrayUnderIterator027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 3, 4});
    int prod = 1;
    for (Integer x : arr.values()) {
    prod *= x;};
    assertEqual(24, prod);}

    @Test
    void testUint8ClampedArrayUnderIterator028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    int count = 0;
    for (Integer x : arr.values()) {
    count++;};
    assertEqual(10, count);}

    @Test
    void testUint8ClampedArrayUnderIterator029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int sum = 100;
    for (Integer x : arr.values()) {
    sum += x;};
    assertEqual(100, sum);}

    @Test
    void testUint8ClampedArrayUnderIterator030() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int count = 0;
    for (Integer x : arr.values()) {
    count++;};
    assertEqual(0, count);}

    @Test
    void testUint8ClampedArrayUnderIterator031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(1, 1);
    int count = 0;
    for (Integer x : sub.values()) {
    count++;};
    assertEqual(3, arr.length());
    assertEqual(0, sub.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayUnderIterator032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator itA = arr.values();
    Uint8ClampedArray.KeyIterator itB = arr.values();
    assertEqual(10, itA.next().value);
    assertEqual(10, itB.next().value);}

    @Test
    void testUint8ClampedArrayUnderIterator033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertTrue(arr.values().next().done);
    assertTrue(arr.values().next().done);}

    @Test
    void testUint8ClampedArrayUnderIterator034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88});
    assertEqual(88, arr.values().next().value);
    assertEqual(88, arr.values().next().value);}

    @Test
    void testUint8ClampedArrayUnderIterator035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88});
    Uint8ClampedArray.KeyIterator itA = arr.values();
    Uint8ClampedArray.KeyIterator itB = arr.values();
    itA.next();
    itB.next();
    assertTrue(itA.next().done);
    assertTrue(itB.next().done);}

    @Test
    void testUint8ClampedArrayUnderIterator036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    it.next();
    assertTrue(it.next().done);}

    @Test
    void testUint8ClampedArrayUnderIterator037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    assertEqual(20, it.next().value);}

    @Test
    void testUint8ClampedArrayUnderIterator038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator it = arr.values();
    it.next();
    it.next();
    assertEqual(30, it.next().value);}

    @Test
    void testUint8ClampedArrayUnderIterator039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(0, v);}

    @Test
    void testUint8ClampedArrayUnderIterator040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(0, v);}

    @Test
    void testUint8ClampedArrayUnderIterator041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(255, v);}

    @Test
    void testUint8ClampedArrayUnderIterator042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(255, v);}

    @Test
    void testUint8ClampedArrayUnderIterator043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(0, v);}

    @Test
    void testUint8ClampedArrayUnderIterator044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(1, v);}

    @Test
    void testUint8ClampedArrayUnderIterator045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(0, v);}

    @Test
    void testUint8ClampedArrayUnderIterator046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(255, v);}

    @Test
    void testUint8ClampedArrayUnderIterator047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(15, v);}

    @Test
    void testUint8ClampedArrayUnderIterator048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1010});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(10, v);}

    @Test
    void testUint8ClampedArrayUnderIterator049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2});
    int v = -1;
    for (Integer x : arr.values()) { v = x;}
    assertEqual(100, v);}

    @Test
    void testUint8ClampedArrayUnderIterator050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer x : arr.values()) {
    sum += x;};
    assertEqual(3, arr.length());
    assertEqual(6, sum);}

    @Test
    void testUint8ClampedArrayUnderIterator051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer x : arr.values()) {
    sum += x;};
    assertEqual(6, sum);
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArrayUnderIterator052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer x : arr.values()) {
    sum += x;};
    assertEqual(6, sum);
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayUnderIterator053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator itA = arr.values();
    int sumA = 0;
    IteratorResult r = itA.next();
    while (!r.done) {
    sumA += BasTest.coalesce(r.value, 0.0);
    r = itA.next();};
    Uint8ClampedArray.KeyIterator itB = arr.values();
    int sumB = 0;
    IteratorResult r2 = itB.next();
    while (!r2.done) {
    sumB += BasTest.coalesce(r2.value, 0.0);
    r2 = itB.next();};
    assertEqual(6, sumA);
    assertEqual(6, sumB);}

    @Test
    void testUint8ClampedArrayUnderIterator054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    int count = 0;
    for (Integer x : sub.values()) {
    count++;};
    assertEqual(3, sub.length());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}
}
