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

package basetype.uint8array;

import basetype.common.BasTest;
import basetype.common.IteratorResult;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayIteratorTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayIteratorTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0100
     * @tc.name testUint8ArrayIterator001
     * @tc.desc Verify calling $_iterator() without parameters returns non-null iterator object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator001() {
    Uint8Array arr = Uint8Array.of(10, 20);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertNotNull(iter);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0200
     * @tc.name testUint8ArrayIterator002
     * @tc.desc Verify $_iterator() returns object type as 'object'
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator002() {
    Uint8Array arr = Uint8Array.of(10);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult result = iter.next();
    assertFalse(result.done);
    assertEqual(10, result.value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0300
     * @tc.name testUint8ArrayIterator003
     * @tc.desc Verify returned iterator object contains next method and is function type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator003() {
    Uint8Array arr = Uint8Array.of(10);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult result = iter.next();
    assertFalse(result.done);
    assertEqual(10, result.value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0400
     * @tc.name testUint8ArrayIterator004
     * @tc.desc Verify next() returns object with done property of boolean type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator004() {
    Uint8Array arr = Uint8Array.of(10);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult result = iter.next();
    assertFalse(result.done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0500
     * @tc.name testUint8ArrayIterator005
     * @tc.desc Verify next() returns object with value property of number type when not done
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator005() {
    Uint8Array arr = Uint8Array.of(10);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult result = iter.next();
    assertEqual(10, result.value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0600
     * @tc.name testUint8ArrayIterator006
     * @tc.desc Verify returned iterator itself can be consumed by for-of loop
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator006() {
    Uint8Array arr = Uint8Array.of(10, 20);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    int count = 0;
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    nextResult = iter.next();};
    assertEqual(2, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0700
     * @tc.name testUint8ArrayIterator007
     * @tc.desc Verify empty array for-of loop body does not execute
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator007() {
    Uint8Array arr = new Uint8Array();
    int count = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    nextResult = iter.next();};
    assertEqual(0, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0800
     * @tc.name testUint8ArrayIterator008
     * @tc.desc Verify empty array $_iterator().next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator008() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult result = iter.next();
    assertEqual(true, result.done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_0900
     * @tc.name testUint8ArrayIterator009
     * @tc.desc Verify empty array $_iterator().next().value is undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator009() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult result = iter.next();
    assertNull(result.value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1000
     * @tc.name testUint8ArrayIterator010
     * @tc.desc Verify empty array iterator second next() done is still true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator010() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    IteratorResult result = iter.next();
    assertEqual(true, result.done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1100
     * @tc.name testUint8ArrayIterator011
     * @tc.desc Verify empty array length remains 0 after iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator011() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    nextResult = iter.next();};
    assertEqual(0, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1200
     * @tc.name testUint8ArrayIterator012
     * @tc.desc Verify [0] for-of collects 1 element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator012() {
    Uint8Array arr = Uint8Array.of(0);
    int count = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    nextResult = iter.next();};
    assertEqual(1, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1300
     * @tc.name testUint8ArrayIterator013
     * @tc.desc Verify [0] manual iteration .next().value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator013() {
    Uint8Array arr = Uint8Array.of(0);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(0, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1400
     * @tc.name testUint8ArrayIterator014
     * @tc.desc Verify [0] first .next().done is false
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator014() {
    Uint8Array arr = Uint8Array.of(0);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(false, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1500
     * @tc.name testUint8ArrayIterator015
     * @tc.desc Verify [0] second .next().done is true (iteration exhausted)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator015() {
    Uint8Array arr = Uint8Array.of(0);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1600
     * @tc.name testUint8ArrayIterator016
     * @tc.desc Verify [255] manual iteration .next().value is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator016() {
    Uint8Array arr = Uint8Array.of(255);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(255, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1700
     * @tc.name testUint8ArrayIterator017
     * @tc.desc Verify [128] manual iteration .next().value is 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator017() {
    Uint8Array arr = Uint8Array.of(128);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(128, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1800
     * @tc.name testUint8ArrayIterator018
     * @tc.desc Verify [127] for-of iteration value matches index read arr[0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator018() {
    Uint8Array arr = Uint8Array.of(127);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(arr.at(0), iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_1900
     * @tc.name testUint8ArrayIterator019
     * @tc.desc Verify [0, 127, 255] for-of collects 3 elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator019() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    int count = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    nextResult = iter.next();};
    assertEqual(3, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2000
     * @tc.name testUint8ArrayIterator020
     * @tc.desc Verify [0, 127, 255] first iteration value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator020() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(0, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2100
     * @tc.name testUint8ArrayIterator021
     * @tc.desc Verify [0, 127, 255] second iteration value is 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator021() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    assertEqual(127, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2200
     * @tc.name testUint8ArrayIterator022
     * @tc.desc Verify [0, 127, 255] third iteration value is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator022() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    iter.next();
    assertEqual(255, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2300
     * @tc.name testUint8ArrayIterator023
     * @tc.desc Verify [0, 127, 255] iteration completed .next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator023() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    nextResult = iter.next();};
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2400
     * @tc.name testUint8ArrayIterator024
     * @tc.desc Verify [1, 2, 3, 4, 5] five elements all iterated in order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator024() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    List<Number> collected = new ArrayList<>();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    collected.add(nextResult.value);
    nextResult = iter.next();};
    assertEqual(5, collected.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2500
     * @tc.name testUint8ArrayIterator025
     * @tc.desc Verify [1, 2, 3, 4, 5] iteration order matches index order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator025() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    boolean ok = true;
    for (int i = 0; i < 5; i++) {
    if (iter.next().value != arr.at(i)) {
    ok = false;};};
    assertTrue(ok);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2600
     * @tc.name testUint8ArrayIterator026
     * @tc.desc Verify 100 elements all iteration values match index values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator026() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);};
    Uint8Array.KeyIterator iter = arr.$_iterator();
    boolean ok = true;
    for (int i = 0; i < 100; i++) {
    if (iter.next().value != i) {
    ok = false;};};
    assertTrue(ok);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2700
     * @tc.name testUint8ArrayIterator027
     * @tc.desc Verify element 256 truncated to 0, iteration value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator027() {
    Uint8Array arr = Uint8Array.of(256);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(0, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2800
     * @tc.name testUint8ArrayIterator028
     * @tc.desc Verify element -1 wraps to 255, iteration value is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator028() {
    Uint8Array arr = Uint8Array.of(-1);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(255, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_2900
     * @tc.name testUint8ArrayIterator029
     * @tc.desc Verify element 0xFF (hex 255) iteration value is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator029() {
    Uint8Array arr = Uint8Array.of(0xFF);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(255, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3000
     * @tc.name testUint8ArrayIterator030
     * @tc.desc Verify element 0x100 (hex 256) truncated to 0, iteration value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator030() {
    Uint8Array arr = Uint8Array.of(0x100);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(0, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3100
     * @tc.name testUint8ArrayIterator031
     * @tc.desc Verify element 0x80 (hex 128) iteration value is 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator031() {
    Uint8Array arr = Uint8Array.of(0x80);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    assertEqual(128, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3200
     * @tc.name testUint8ArrayIterator032
     * @tc.desc Verify all-zero array [0, 0, 0, 0] iteration all values are 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator032() {
    Uint8Array arr = Uint8Array.of(0, 0, 0, 0);
    int count = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    nextResult = iter.next();};
    assertEqual(4, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3300
     * @tc.name testUint8ArrayIterator033
     * @tc.desc Verify for-of loop break terminates iteration early
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator033() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int count = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    if (count == 2) {
    break;};
    nextResult = iter.next();};
    assertEqual(2, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3400
     * @tc.name testUint8ArrayIterator034
     * @tc.desc Verify for-of loop continue skips current iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator034() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int sum = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    int v = nextResult.value;
    if (v == 2) {
    nextResult = iter.next();
    continue;};
    sum += v;
    nextResult = iter.next();};
    assertEqual(4, sum);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3500
     * @tc.name testUint8ArrayIterator035
     * @tc.desc Verify nested for-of two traversals of same array do not interfere
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator035() {
    Uint8Array arr = Uint8Array.of(1, 2);
    int outer = 0;
    Uint8Array.KeyIterator iterA = arr.$_iterator();
    IteratorResult nextA = iterA.next();
    while (!nextA.done) {
    Uint8Array.KeyIterator iterB = arr.$_iterator();
    IteratorResult nextB = iterB.next();
    while (!nextB.done) {
    outer++;
    nextB = iterB.next();};
    nextA = iterA.next();};
    assertEqual(4, outer);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3600
     * @tc.name testUint8ArrayIterator036
     * @tc.desc Verify for-of iteration values match ordinary for loop index reads
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator036() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    boolean match = true;
    for (int i = 0; i < 3; i++) {
    if (iter.next().value != arr.at(i)) {
    match = false;};};
    assertTrue(match);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3700
     * @tc.name testUint8ArrayIterator037
     * @tc.desc Verify for-of const variable scope is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator037() {
    Uint8Array arr = Uint8Array.of(5, 10);
    List<Number> values = new ArrayList<>();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    values.add(nextResult.value);
    nextResult = iter.next();};
    assertEqual(5, values.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3800
     * @tc.name testUint8ArrayIterator038
     * @tc.desc Verify empty array $_iterator and values() both produce no values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator038() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iterA = arr.$_iterator();
    Uint8Array.KeyIterator iterB = arr.values();
    assertEqual(iterB.next().done, iterA.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_3900
     * @tc.name testUint8ArrayIterator039
     * @tc.desc Verify [0, 128] $_iterator and values() first element are same
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator039() {
    Uint8Array arr = Uint8Array.of(0, 128);
    assertEqual(arr.values().next().value, arr.$_iterator().next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4000
     * @tc.name testUint8ArrayIterator040
     * @tc.desc Verify [255, 0, 127] $_iterator and values() second element are same
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator040() {
    Uint8Array arr = Uint8Array.of(255, 0, 127);
    Uint8Array.KeyIterator a = arr.$_iterator();
    Uint8Array.KeyIterator b = arr.values();
    a.next();
    b.next();
    assertEqual(b.next().value, a.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4100
     * @tc.name testUint8ArrayIterator041
     * @tc.desc Verify large array $_iterator and values() traverse same element count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator041() {
    Uint8Array arr = new Uint8Array(50);
    int countA = 0;
    int countB = 0;
    Uint8Array.KeyIterator iterA = arr.$_iterator();
    IteratorResult nextA = iterA.next();
    while (!nextA.done) {
    countA++;
    nextA = iterA.next();};
    Uint8Array.KeyIterator iterB = arr.values();
    IteratorResult nextB = iterB.next();
    while (!nextB.done) {
    countB++;
    nextB = iterB.next();};
    assertEqual(countB, countA);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4200
     * @tc.name testUint8ArrayIterator042
     * @tc.desc Verify [0, 0xFF, 128, 256, -1] two iterators equivalent to respective sequential reads
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator042() {
    Uint8Array arr = Uint8Array.of(0, 0xFF, 128, 256, -1);
    Uint8Array.KeyIterator iterA = arr.$_iterator();
    Uint8Array.KeyIterator iterB = arr.values();
    boolean equal = true;
    for (int i = 0; i < 5; i++) {
    if ((iterA.next().value.intValue() != iterB.next().value.intValue())) {
    equal = false;};};
    assertTrue(equal);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4300
     * @tc.name testUint8ArrayIterator043
     * @tc.desc Verify same array two for-of produce same value sequence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator043() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    List<Number> first = new ArrayList<>();
    List<Number> second = new ArrayList<>();
    Uint8Array.KeyIterator iter1 = arr.$_iterator();
    IteratorResult next1 = iter1.next();
    while (!next1.done) {
    first.add(next1.value);
    next1 = iter1.next();};
    Uint8Array.KeyIterator iter2 = arr.$_iterator();
    IteratorResult next2 = iter2.next();
    while (!next2.done) {
    second.add(next2.value);
    next2 = iter2.next();};
    assertEqual(second.get(0), first.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4400
     * @tc.name testUint8ArrayIterator044
     * @tc.desc Verify two independent $_iterator calls produce independent iterators
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array.KeyIterator iter1 = arr.$_iterator();
    Uint8Array.KeyIterator iter2 = arr.$_iterator();
    iter1.next();
    iter1.next();
    assertEqual(1, iter2.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4500
     * @tc.name testUint8ArrayIterator045
     * @tc.desc Verify array element content not modified after iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator045() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    nextResult = iter.next();};
    assertEqual(5, arr.at(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4600
     * @tc.name testUint8ArrayIterator046
     * @tc.desc Verify array length remains unchanged after iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator046() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int before = arr.length();
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    nextResult = iter.next();};
    assertEqual(before, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4700
     * @tc.name testUint8ArrayIterator047
     * @tc.desc Verify iterator exhausted then re-create iterator to traverse again
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator047() {
    Uint8Array arr = Uint8Array.of(7, 14, 21);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    while (!iter.next().done) {
    };
    Uint8Array.KeyIterator iter2 = arr.$_iterator();
    assertEqual(7, iter2.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4800
     * @tc.name testUint8ArrayIterator048
     * @tc.desc Verify modifying current element during iteration reflects new value in subsequent iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator048() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    iter.next();
    arr.set(new Uint8Array(new int[] {99}), 2);
    assertEqual(99, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_4900
     * @tc.name testUint8ArrayIterator049
     * @tc.desc Verify modifying array element before iteration, iteration reads modified value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.set(new Uint8Array(new int[] {200}), 1);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    assertEqual(200, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_5000
     * @tc.name testUint8ArrayIterator050
     * @tc.desc Verify modifying array by index after iteration completes, array usable normally
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    nextResult = iter.next();};
    arr.set(new Uint8Array(new int[] {100}), 0);
    assertEqual(100, arr.at(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_5100
     * @tc.name testUint8ArrayIterator051
     * @tc.desc Verify fill during iteration, subsequent iteration values reflect fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator051() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int count = 0;
    Uint8Array.KeyIterator iter = arr.$_iterator();
    IteratorResult nextResult = iter.next();
    while (!nextResult.done) {
    count++;
    if (count == 2) {
    arr.fill(9);};
    nextResult = iter.next();};
    assertEqual(5, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_5200
     * @tc.name testUint8ArrayIterator052
     * @tc.desc Verify calling next() after iterator exhausted does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator052() {
    Uint8Array arr = Uint8Array.of(1);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    IteratorResult result = iter.next();
    assertNotNull(result);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_5300
     * @tc.name testUint8ArrayIterator053
     * @tc.desc Verify calling next() after iterator exhausted, done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator053() {
    Uint8Array arr = Uint8Array.of(1);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ITERATOR_5400
     * @tc.name testUint8ArrayIterator054
     * @tc.desc Verify calling next() after iterator exhausted, value is undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayIterator054() {
    Uint8Array arr = Uint8Array.of(1);
    Uint8Array.KeyIterator iter = arr.$_iterator();
    iter.next();
    assertNull(iter.next().value);}
}
