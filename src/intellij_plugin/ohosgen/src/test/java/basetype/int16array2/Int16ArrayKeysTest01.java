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

package basetype.int16array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.IteratorResult;
import basetype.common.Int16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayKeysTest01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayKeysTest01 extends BasTest {

    @Test
    void testInt16ArrayKeysTestOne001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array.KeyIterator iter = arr.keys();
    assertEqual(0, iter.next().value.intValue());
    }

    @Test
    void testInt16ArrayKeysTestOne002() {
    Int16Array arr = new Int16Array();
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne003() {
    List<Integer> src = new ArrayList<>();
    Int16Array arr = new Int16Array(src);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne004() {
    Int16Array arr = new Int16Array(1);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne005() {
    Int16Array arr = new Int16Array(new int[] {0});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne006() {
    Int16Array arr = new Int16Array(new int[] {5});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne007() {
    Int16Array arr = new Int16Array(2);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne008() {
    Int16Array arr = new Int16Array(new int[] {1, 2});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne009() {
    Int16Array arr = new Int16Array(new int[] {0, 0});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne010() {
    Int16Array arr = new Int16Array(3);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne011() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne012() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 9});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne013() {
    Int16Array arr = new Int16Array(new int[] {-1, 0, 1});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne014() {
    Int16Array arr = new Int16Array(3);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    iter.next();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne015() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne016() {
    Int16Array arr = new Int16Array(100);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne017() {
    Int16Array arr = new Int16Array(100);
    Int16Array.KeyIterator iter = arr.keys();
    for (int i = 0; i < 99; i++) {
    iter.next();
    }
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne018() {
    Int16Array arr = new Int16Array(100);
    Int16Array.KeyIterator iter = arr.keys();
    for (int i = 0; i < 100; i++) {
    iter.next();
    }
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne019() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7, 8});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne020() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7, 8});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne021() {
    Int16Array original = new Int16Array(new int[] {4, 5, 6});
    Int16Array arr = new Int16Array(original);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne022() {
    Int16Array original = new Int16Array(new int[] {4, 5, 6});
    Int16Array arr = new Int16Array(original);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne023() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 0, 3);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne024() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 0, 3);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne025() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 2, 2);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne026() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int16Array arr = new Int16Array(buf, 0, 0);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    boolean actual1 = result.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne027() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int count = 0;
    for (Integer key : arr.keys()) {
    count = count + 1;
    }
    assertEqual(3, count);
    }

    @Test
    void testInt16ArrayKeysTestOne028() {
    Int16Array arr = new Int16Array(0);
    boolean entered = false;
    for (Integer key : arr.keys()) {
    entered = true;
    }
    assertFalse(entered);
    }

    @Test
    void testInt16ArrayKeysTestOne029() {
    Int16Array arr = new Int16Array(0);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    IteratorResult r3 = iter.next();
    boolean actual1 = r1.done;
    assertTrue(actual1);
    boolean actual2 = r2.done;
    assertTrue(actual2);
    boolean actual3 = r3.done;
    assertTrue(actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne030() {
    Int16Array arr = new Int16Array(new int[] {1, 2});
    Int16Array.KeyIterator iterA = arr.keys();
    Int16Array.KeyIterator iterB = arr.keys();
    IteratorResult a1 = iterA.next();
    IteratorResult b1 = iterB.next();
    Integer actual1 = a1.value;
    assertEqual(0, actual1);
    Integer actual2 = b1.value;
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne031() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array.KeyIterator iterA = arr.keys();
    Int16Array.KeyIterator iterB = arr.keys();
    iterA.next();
    IteratorResult a2 = iterA.next();
    IteratorResult b1 = iterB.next();
    Integer actual1 = a2.value;
    assertEqual(1, actual1);
    Integer actual2 = b1.value;
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne032() {
    Int16Array arr = new Int16Array(new int[] {1, 2});
    Int16Array.KeyIterator iter1 = arr.keys();
    iter1.next();
    iter1.next();
    iter1.next();
    Int16Array.KeyIterator iter2 = arr.keys();
    IteratorResult r = iter2.next();
    Integer actual1 = r.value;
    assertEqual(0, actual1);
    boolean actual2 = r.done;
    assertFalse(actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne033() {
    Int16Array arr = new Int16Array(new int[] {-32768, -1, 0});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne034() {
    Int16Array arr = new Int16Array(new int[] {-32768, 32767, 0});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne035() {
    Int16Array arr = new Int16Array(new int[] {0});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    Integer actual1 = r.value;
    assertEqual(0, actual1);
    boolean actual2 = r.done;
    assertFalse(actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne036() {
    Int16Array arr = new Int16Array(new int[] {32767});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    Integer actual1 = r.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne037() {
    Int16Array arr = new Int16Array(new int[] {-32768});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    Integer actual1 = r.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne038() {
    List<Integer> src = java.util.Arrays.asList(12, 34, 56);
    Int16Array arr = new Int16Array(src);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne039() {
    List<Integer> src = java.util.Arrays.asList(12, 34, 56);
    Int16Array arr = new Int16Array(src);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne040() {
    Int16Array arr = new Int16Array(new int[] {-1});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne041() {
    Int16Array arr = new Int16Array(5);
    Int16Array.KeyIterator iter = arr.keys();
    List<Integer> indices = new ArrayList<>();
    IteratorResult r = iter.next();
    while (!r.done) {
    indices.add(r.value);
    r = iter.next();
    }
    int actual1 = indices.get(0);
    assertEqual(0, actual1);
    int actual2 = indices.get(4);
    assertEqual(4, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne042() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 4);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    IteratorResult r3 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    Integer actual4 = r3.value;
    assertEqual(3, actual4);
    }

    @Test
    void testInt16ArrayKeysTestOne043() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 4, 1);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    Integer actual1 = r.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne044() {
    Int16Array arrEmpty = new Int16Array(0);
    Int16Array arrOne = new Int16Array(1);
    Int16Array.KeyIterator iterEmpty = arrEmpty.keys();
    Int16Array.KeyIterator iterOne = arrOne.keys();
    IteratorResult rEmpty = iterEmpty.next();
    IteratorResult rOne = iterOne.next();
    boolean actual1 = rEmpty.done;
    assertTrue(actual1);
    boolean actual2 = rOne.done;
    assertFalse(actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne045() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array.KeyIterator iter = arr.keys();
    Integer firstValue = iter.next().value;
    Integer secondValue = iter.next().value;
    Integer thirdValue = iter.next().value;
    assertEqual(0, firstValue);
    assertEqual(1, secondValue);
    assertEqual(2, thirdValue);
    }

    @Test
    void testInt16ArrayKeysTestOne046() {
    Int16Array arr = new Int16Array(new int[] {99});
    int count = 0;
    for (Integer k : arr.keys()) {
    count = count + 1;
    }
    assertEqual(1, count);
    }

    @Test
    void testInt16ArrayKeysTestOne047() {
    Int16Array arr = new Int16Array(new int[] {1, 2});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    assertEqual(0, result.value);
    }

    @Test
    void testInt16ArrayKeysTestOne048() {
    Int16Array arr = new Int16Array(new int[] {0});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    assertFalse(result.done);
    }

    @Test
    void testInt16ArrayKeysTestOne049() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    List<Integer> collected = new ArrayList<>();
    for (Integer k : arr.keys()) {
    collected.add(k);
    }
    int actual1 = collected.get(0);
    assertEqual(0, actual1);
    int actual2 = collected.get(1);
    assertEqual(1, actual2);
    int actual3 = collected.get(2);
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne050() {
    Int16Array arr = new Int16Array(new int[] {10, 20});
    Int16Array.KeyIterator iter = arr.keys();
    int count1 = 0;
    int count2 = 0;
    for (Integer k : iter) {
    count1 = count1 + 1;
    }
    for (Integer k : iter) {
    count2 = count2 + 1;
    }
    assertEqual(2, count1);
    assertEqual(0, count2);
    }

    @Test
    void testInt16ArrayKeysTestOne051() {
    Int16Array arr = new Int16Array(new int[] {5, 5, 5});
    arr.set(1, 99);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne052() {
    Int16Array arr = new Int16Array(3);
    arr.set(0, 42);
    arr.set(1, 42);
    arr.set(2, 42);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne053() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.set(0, 7);
    arr.set(1, 8);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    Integer actual1 = r.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestOne054() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.set(0, 3);
    arr.set(1, 2);
    arr.set(2, 1);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestOne055() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.set(0, 3);
    arr.set(1, 4);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    IteratorResult r2 = iter.next();
    IteratorResult r3 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    Integer actual3 = r2.value;
    assertEqual(2, actual3);
    Integer actual4 = r3.value;
    assertEqual(3, actual4);
    }

    @Test
    void testInt16ArrayKeysTestOne056() {
    Int16Array arr = new Int16Array(new int[] {0, 0});
    arr.set(0, Double.POSITIVE_INFINITY);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r0 = iter.next();
    IteratorResult r1 = iter.next();
    Integer actual1 = r0.value;
    assertEqual(0, actual1);
    Integer actual2 = r1.value;
    assertEqual(1, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne057() {
    Int16Array arrA = new Int16Array(new int[] {1, 2, 3});
    Int16Array arrB = new Int16Array(new int[] {9, 8, 7});
    Int16Array.KeyIterator iterA = arrA.keys();
    Int16Array.KeyIterator iterB = arrB.keys();
    IteratorResult a1 = iterA.next();
    IteratorResult b1 = iterB.next();
    Integer actual1 = a1.value;
    assertEqual(0, actual1);
    Integer actual2 = b1.value;
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne058() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arrBuf = new Int16Array(buf, 0, 3);
    Int16Array arrInd = new Int16Array(3);
    Int16Array.KeyIterator iterBuf = arrBuf.keys();
    Int16Array.KeyIterator iterInd = arrInd.keys();
    IteratorResult rBuf = iterBuf.next();
    IteratorResult rInd = iterInd.next();
    Integer actual1 = rBuf.value;
    assertEqual(0, actual1);
    Integer actual2 = rInd.value;
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayKeysTestOne059() {
    Int16Array arr = new Int16Array(new int[] {5});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult result = iter.next();
    Integer actual1 = result.value;
    assertEqual(0, actual1);
    boolean actual2 = result.done;
    assertFalse(actual2);
    }
}
