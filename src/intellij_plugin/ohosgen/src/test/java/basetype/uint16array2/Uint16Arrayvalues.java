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

package basetype.uint16array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.IteratorResult;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayvalues —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayvalues extends BasTest {

    @Test
    void testUint16ArrayValues001() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    Uint16Array.KeyIterator iter = arr.values();
    int count = 0;
    for (Integer v : iter) {
    count++;
    }
    assertEqual(2, count);
    }

    @Test
    void testUint16ArrayValues002() {
    Uint16Array arr = new Uint16Array(new int[] {42});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(42, result.value);
    }

    @Test
    void testUint16ArrayValues003() {
    Uint16Array arr = new Uint16Array(new int[] {42});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertFalse(result.done);
    }

    @Test
    void testUint16ArrayValues004() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    assertEqual(1, r1.value);
    assertFalse(r1.done);
    assertEqual(2, r2.value);
    assertFalse(r2.done);
    }

    @Test
    void testUint16ArrayValues005() {
    Uint16Array arr = new Uint16Array(0);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertTrue(result.done);
    }

    @Test
    void testUint16ArrayValues006() {
    Uint16Array arr = new Uint16Array(0);
    int count = 0;
    for (Integer v : arr.values()) {
    count++;
    }
    assertEqual(0, count);
    }

    @Test
    void testUint16ArrayValues007() {
    Uint16Array arr = new Uint16Array(0);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertNull(result.value);
    }

    @Test
    void testUint16ArrayValues008() {
    Uint16Array arr = new Uint16Array(0);
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    IteratorResult result = iter.next();
    assertTrue(result.done);
    }

    @Test
    void testUint16ArrayValues009() {
    Uint16Array arr = new Uint16Array(new int[] {0});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testUint16ArrayValues010() {
    Uint16Array arr = new Uint16Array(new int[] {65535});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(65535, result.value);
    }

    @Test
    void testUint16ArrayValues011() {
    Uint16Array arr = new Uint16Array(new int[] {32768});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(32768, result.value);
    }

    @Test
    void testUint16ArrayValues012() {
    Uint16Array arr = new Uint16Array(new int[] {1});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(1, result.value);
    }

    @Test
    void testUint16ArrayValues013() {
    Uint16Array arr = new Uint16Array(new int[] {0, 65535});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    IteratorResult second = iter.next();
    assertEqual(0, first.value);
    assertEqual(65535, second.value);
    }

    @Test
    void testUint16ArrayValues014() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult v1 = iter.next();
    IteratorResult v2 = iter.next();
    IteratorResult v3 = iter.next();
    assertEqual(1, v1.value);
    assertFalse(v1.done);
    assertEqual(2, v2.value);
    assertFalse(v2.done);
    assertEqual(3, v3.value);
    assertFalse(v3.done);
    }

    @Test
    void testUint16ArrayValues015() {
    Uint16Array arr = new Uint16Array(new int[] {0, 32768, 65535});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    iter.next();
    IteratorResult last = iter.next();
    assertEqual(65535, last.value);
    }

    @Test
    void testUint16ArrayValues016() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 0, 65535});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(65535, first.value);
    }

    @Test
    void testUint16ArrayValues017() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    IteratorResult second = iter.next();
    IteratorResult third = iter.next();
    assertEqual(0, third.value);
    }

    @Test
    void testUint16ArrayValues018() {
    Uint16Array arr = new Uint16Array(new int[] {5, 4, 3, 2, 1});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(5, first.value);
    }

    @Test
    void testUint16ArrayValues019() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    Uint16Array.KeyIterator iter = arr.values();
    int count = 0;
    IteratorResult result = iter.next();
    while (!result.done) {
    count++;
    result = iter.next();
    }
    assertEqual(10, count);
    }

    @Test
    void testUint16ArrayValues020() {
    Uint16Array arr = new Uint16Array(new int[] {42, 42, 42});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    IteratorResult second = iter.next();
    assertEqual(42, second.value);
    }

    @Test
    void testUint16ArrayValues021() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40, 50});
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += (int) v;
    }
    assertEqual(150, sum);
    }

    @Test
    void testUint16ArrayValues022() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int count = 0;
    for (Integer v : arr.values()) {
    count++;
    if (count == 2) {
    break;
    }
    }
    assertEqual(2, count);
    }

    @Test
    void testUint16ArrayValues023() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer v : arr.values()) {
    if (((int) v) == 2) {
    continue;
    }
    sum += (int) v;
    }
    assertEqual(4, sum);
    }

    @Test
    void testUint16ArrayValues024() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    int count = 0;
    for (Integer v1 : arr.values()) {
    for (Integer v2 : arr.values()) {
    count++;
    }
    }
    assertEqual(4, count);
    }

    @Test
    void testUint16ArrayValues025() {
    Uint16Array arr = new Uint16Array(new int[] {7, 8, 9});
    List<Integer> collected = new ArrayList<>();
    for (Integer v : arr.values()) {
    collected.add((int) v);
    }
    assertEqual("7,8,9", BasTest.joinList(collected, ","));
    }

    @Test
    void testUint16ArrayValues026() {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    iter.next();
    IteratorResult last = iter.next();
    assertEqual(300, last.value);
    }

    @Test
    void testUint16ArrayValues027() {
    Uint16Array arr = new Uint16Array(new int[] {5});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertFalse(result.done);
    }

    @Test
    void testUint16ArrayValues028() {
    Uint16Array arr = new Uint16Array(new int[] {7});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    IteratorResult result = iter.next();
    assertTrue(result.done);
    }

    @Test
    void testUint16ArrayValues029() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    iter.next();
    IteratorResult after1 = iter.next();
    IteratorResult after2 = iter.next();
    assertTrue(after1.done);
    assertTrue(after2.done);
    }

    @Test
    void testUint16ArrayValues030() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    iter.next();
    IteratorResult mid = iter.next();
    assertEqual(3, mid.value);
    }

    @Test
    void testUint16ArrayValues031() {
    Uint16Array arr = new Uint16Array(new int[] {3});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    IteratorResult after = iter.next();
    assertNull(after.value);
    }

    @Test
    void testUint16ArrayValues032() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.set(0, 99);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(99, result.value);
    }

    @Test
    void testUint16ArrayValues033() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array.KeyIterator iter = arr.values();
    arr.set(0, 88);
    IteratorResult result = iter.next();
    assertEqual(88, result.value);
    }

    @Test
    void testUint16ArrayValues034() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(42);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(42, first.value);
    }

    @Test
    void testUint16ArrayValues035() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(new Uint16Array(new int[] {10, 20}), 0);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(10, first.value);
    }

    @Test
    void testUint16ArrayValues036() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3, 5);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(4, first.value);
    }

    @Test
    void testUint16ArrayValues037() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    iter.next();
    arr.set(2, 99);
    IteratorResult third = iter.next();
    assertEqual(99, third.value);
    }

    @Test
    void testUint16ArrayValues038() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    arr.set(1, 77);
    IteratorResult second = iter.next();
    assertEqual(77, second.value);
    }

    @Test
    void testUint16ArrayValues039() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr1 = new Uint16Array(buf);
    Uint16Array arr2 = new Uint16Array(buf);
    arr1.set(0, 10);
    Uint16Array.KeyIterator iter = arr2.values();
    arr1.set(0, 55);
    IteratorResult result = iter.next();
    assertEqual(55, result.value);
    }

    @Test
    void testUint16ArrayValues040() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    Uint16Array.KeyIterator iter = arr.values();
    iter.next();
    arr.reverse();
    IteratorResult second = iter.next();
    assertEqual(3, second.value);
    }

    @Test
    void testUint16ArrayValues041() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array.KeyIterator iter1 = arr.values();
    Uint16Array.KeyIterator iter2 = arr.values();
    iter1.next();
    iter1.next();
    IteratorResult r1 = iter1.next();
    IteratorResult r2 = iter2.next();
    assertEqual(3, r1.value);
    assertFalse(r1.done);
    assertEqual(1, r2.value);
    }

    @Test
    void testUint16ArrayValues042() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    Uint16Array.KeyIterator iter1 = arr.values();
    Uint16Array.KeyIterator iter2 = arr.values();
    iter1.next();
    iter1.next();
    IteratorResult r2 = iter2.next();
    assertEqual(10, r2.value);
    }

    @Test
    void testUint16ArrayValues043() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    Uint16Array.KeyIterator iter1 = arr.values();
    Uint16Array.KeyIterator iter2 = arr.values();
    iter1.next();
    iter1.next();
    iter1.next();
    IteratorResult r2 = iter2.next();
    assertEqual(1, r2.value);
    }

    @Test
    void testUint16ArrayValues044() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf);
    arr.set(0, 100);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(100, result.value);
    }

    @Test
    void testUint16ArrayValues045() {
    Uint16Array src = new Uint16Array(new int[] {10, 20});
    Uint16Array arr = new Uint16Array(src);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(10, first.value);
    }

    @Test
    void testUint16ArrayValues046() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(100, first.value);
    }

    @Test
    void testUint16ArrayValues047() {
    Uint16Array arr = Uint16Array.from(new int[] {50, 60, 70});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(50, first.value);
    }

    @Test
    void testUint16ArrayValues048() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array sub = arr.subarray(1, 3);
    Uint16Array.KeyIterator iter = sub.values();
    IteratorResult first = iter.next();
    assertEqual(2, first.value);
    }

    @Test
    void testUint16ArrayValues049() {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    Uint16Array sliced = arr.slice(1);
    Uint16Array.KeyIterator iter = sliced.values();
    IteratorResult first = iter.next();
    assertEqual(200, first.value);
    }

    @Test
    void testUint16ArrayValues050() {
    Uint16Array arr = new Uint16Array(new int[] {65536});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testUint16ArrayValues051() {
    Uint16Array arr = new Uint16Array(new int[] {-1});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(65535, result.value);
    }

    @Test
    void testUint16ArrayValues052() {
    Uint16Array arr = new Uint16Array(new double[] {3.14});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(3, result.value);
    }

    @Test
    void testUint16ArrayValues053() {
    Uint16Array arr = new Uint16Array(new double[] {Double.NaN});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testUint16ArrayValues054() {
    Uint16Array arr = new Uint16Array(new double[] {Double.POSITIVE_INFINITY});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testUint16ArrayValues055() {
    Uint16Array arr = new Uint16Array(new double[] {-Double.POSITIVE_INFINITY});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testUint16ArrayValues056() {
    Uint16Array arr = new Uint16Array(new double[] {65535.9});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(65535, result.value);
    }

    @Test
    void testUint16ArrayValues057() {
    Uint16Array arr = new Uint16Array(new int[] {131072});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testUint16ArrayValues058() {
    Uint16Array arr = new Uint16Array(new int[] {0xFFFF});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(65535, result.value);
    }

    @Test
    void testUint16ArrayValues059() {
    Uint16Array arr = new Uint16Array(new int[] {0x8000});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(32768, result.value);
    }

    @Test
    void testUint16ArrayValues060() {
    Uint16Array arr = new Uint16Array(new int[] {0177777});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(65535, result.value);
    }

    @Test
    void testUint16ArrayValues061() {
    Uint16Array arr = new Uint16Array(new int[] {0b1111111111111111});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(65535, result.value);
    }

    @Test
    void testUint16ArrayValues062() {
    Uint16Array arr = new Uint16Array(new double[] {1e4});
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult result = iter.next();
    assertEqual(10000, result.value);
    }

    @Test
    void testUint16ArrayValues063() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    int count = 0;
    for (Integer v : arr.values()) {
    count++;
    }
    assertEqual(100, count);
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(99));
    }

    @Test
    void testUint16ArrayValues064() {
    Uint16Array arr = new Uint16Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(0, first.value);
    IteratorResult last = first;
    for (int i = 1; i < 256; i++) {
    last = iter.next();
    }
    assertEqual(255, last.value);
    assertFalse(last.done);
    }

    @Test
    void testUint16ArrayValues065() {
    Uint16Array arr = new Uint16Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    int sum = 0;
    for (Integer v : arr.values()) {
    sum += (int) v;
    }
    assertEqual(32640, sum);
    }

    @Test
    void testUint16ArrayValues066() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr1 = new Uint16Array(buf, 0, 2);
    Uint16Array arr2 = new Uint16Array(buf, 0, 2);
    arr1.set(0, 10);
    arr1.set(1, 20);
    Uint16Array.KeyIterator iter1 = arr1.values();
    Uint16Array.KeyIterator iter2 = arr2.values();
    iter1.next();
    IteratorResult r2 = iter2.next();
    assertEqual(10, r2.value);
    }

    @Test
    void testUint16ArrayValues067() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr1 = new Uint16Array(buf);
    Uint16Array arr2 = new Uint16Array(buf);
    arr1.set(0, 5);
    arr2.set(0, 25);
    Uint16Array.KeyIterator iter = arr1.values();
    IteratorResult result = iter.next();
    assertEqual(25, result.value);
    }

    @Test
    void testUint16ArrayValues068() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr1 = new Uint16Array(buf, 0, 1);
    Uint16Array arr2 = new Uint16Array(buf, 2, 1);
    arr1.set(0, 100);
    arr2.set(0, 200);
    Uint16Array.KeyIterator iter1 = arr1.values();
    Uint16Array.KeyIterator iter2 = arr2.values();
    IteratorResult r1 = iter1.next();
    IteratorResult r2 = iter2.next();
    assertEqual(100, r1.value);
    assertFalse(r1.done);
    assertEqual(200, r2.value);
    }

    @Test
    void testUint16ArrayValues069() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(3, first.value);
    }

    @Test
    void testUint16ArrayValues070() {
    Uint16Array arr = new Uint16Array(new int[] {3, 1, 2});
    arr.sort();
    Uint16Array.KeyIterator iter = arr.values();
    IteratorResult first = iter.next();
    assertEqual(1, first.value);
    }

    @Test
    void testUint16ArrayValues071() {
    Uint16Array source = Uint16Array.of(4, 5, 6);
    Uint16Array.KeyIterator iterator = source.values();
    IteratorResult first = iterator.next();
    IteratorResult second = iterator.next();
    IteratorResult third = iterator.next();
    assertEqual(4, first.value);
    assertEqual(5, second.value);
    assertEqual(6, third.value);
    }

    @Test
    void testUint16ArrayValues072() {
    Uint16Array source = Uint16Array.of(9);
    Uint16Array.KeyIterator iterator = source.values();
    IteratorResult first = iterator.next();
    IteratorResult done = iterator.next();
    assertFalse(first.done);
    assertTrue(done.done);
    }

    @Test
    void testUint16ArrayValues073() {
    Uint16Array source = new Uint16Array();
    IteratorResult result = source.values().next();
    assertTrue(result.done);
    }

    @Test
    void testUint16ArrayValues074() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Uint16Array.KeyIterator firstIterator = source.values();
    Uint16Array.KeyIterator secondIterator = source.values();
    firstIterator.next();
    firstIterator.next();
    assertEqual(3, firstIterator.next().value.intValue());
    assertEqual(1, secondIterator.next().value.intValue());
    }

    @Test
    void testUint16ArrayValues075() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Uint16Array.KeyIterator iterator = source.values();
    assertEqual(1, iterator.next().value.intValue());
    source.set(1, 22);
    assertEqual(22, iterator.next().value.intValue());
    }

    @Test
    void testUint16ArrayValues076() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array full = new Uint16Array(buffer);
    full.set(Uint16Array.of(9, 2, 4, 6, 8));
    Uint16Array view = new Uint16Array(buffer, 2, 3);
    String encoded = "";
    for (Integer value : view.values()) {
    encoded = encoded + String.valueOf(value) + ",";
    }
    assertEqual("2,4,6,", encoded);
    }

    @Test
    void testUint16ArrayValues077() {
    Uint16Array source = new Uint16Array(new int[] {-1, 65536, 65537});
    String encoded = "";
    for (Integer value : source.values()) {
    encoded = encoded + String.valueOf(value) + ",";
    }
    assertEqual("65535,0,1,", encoded);
    }

    @Test
    void testUint16ArrayValues078() {
    Uint16Array source = Uint16Array.of(2, 3, 5, 7);
    int count = 0;
    int sum = 0;
    for (Integer value : source.values()) {
    count++;
    sum = sum + value;
    }
    assertEqual(4, count);
    assertEqual(17, sum);
    }

    @Test
    void testUint16ArrayValues079() {
    Uint16Array source = Uint16Array.of(1);
    Uint16Array.KeyIterator iterator = source.values();
    iterator.next();
    IteratorResult firstDone = iterator.next();
    IteratorResult secondDone = iterator.next();
    assertTrue(firstDone.done);
    assertTrue(secondDone.done);
    }

    @Test
    void testUint16ArrayValues080() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array source = new Uint16Array(buffer);
    Uint16Array alias = new Uint16Array(buffer);
    source.set(Uint16Array.of(3, 4, 5));
    alias.set(2, 55);
    Uint16Array.KeyIterator iterator = source.values();
    iterator.next();
    iterator.next();
    assertEqual(55, iterator.next().value.intValue());
    }
}
