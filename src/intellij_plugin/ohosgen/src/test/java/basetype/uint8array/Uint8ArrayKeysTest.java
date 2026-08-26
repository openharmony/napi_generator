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

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.Uint8Array;
import basetype.common.RangeError;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayKeysTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayKeysTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0100
     * @tc.name testUint8ArrayKeys001
     * @tc.desc Verify keys() with zero parameters returns non-null iterator object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys001() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array.KeyIterator iter = arr.keys();
    assertNotNull(iter);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0200
     * @tc.name testUint8ArrayKeys002
     * @tc.desc Verify keys() with zero parameters can iterate all elements normally
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys002() {
    Uint8Array arr = new Uint8Array(3);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(3, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0300
     * @tc.name testUint8ArrayKeys003
     * @tc.desc Verify empty array (constructor()) keys() first next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys003() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iter = arr.keys();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0400
     * @tc.name testUint8ArrayKeys004
     * @tc.desc Verify empty array (new Uint8Array(0)) keys() first next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys004() {
    Uint8Array arr = new Uint8Array(0);
    Uint8Array.KeyIterator iter = arr.keys();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0500
     * @tc.name testUint8ArrayKeys005
     * @tc.desc Verify empty array keys() consecutive next() always done
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys005() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.KeyIterator iter = arr.keys();
    iter.next();
    assertEqual(true, iter.next().done);
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0600
     * @tc.name testUint8ArrayKeys006
     * @tc.desc Verify empty array keys() for...of loop body does not execute
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys006() {
    Uint8Array arr = new Uint8Array();
    boolean executed = false;
    for (Integer key : arr.keys()) {
    executed = true;};
    assertEqual(false, executed);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0700
     * @tc.name testUint8ArrayKeys007
     * @tc.desc Verify empty array keys() spread operator yields empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys007() {
    Uint8Array arr = new Uint8Array();
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0800
     * @tc.name testUint8ArrayKeys008
     * @tc.desc Verify single element array keys() first next().value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys008() {
    Uint8Array arr = new Uint8Array(1);
    Uint8Array.KeyIterator iter = arr.keys();
    assertEqual(0, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_0900
     * @tc.name testUint8ArrayKeys009
     * @tc.desc Verify single element array keys() second next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys009() {
    Uint8Array arr = new Uint8Array(1);
    Uint8Array.KeyIterator iter = arr.keys();
    iter.next();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1000
     * @tc.name testUint8ArrayKeys010
     * @tc.desc Verify single element array keys() for...of iterates once with value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys010() {
    Uint8Array arr = new Uint8Array(1);
    int key = -1;
    for (Integer k : arr.keys()) {
    key = k;};
    assertEqual(0, key);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1100
     * @tc.name testUint8ArrayKeys011
     * @tc.desc Verify single element array keys() spread yields [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys011() {
    Uint8Array arr = new Uint8Array(1);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(1, result.size());
    assertEqual(0, result.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1200
     * @tc.name testUint8ArrayKeys012
     * @tc.desc Verify three element array keys() yields 0,1,2 in order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys012() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array.KeyIterator iter = arr.keys();
    assertEqual(0, iter.next().value);
    assertEqual(1, iter.next().value);
    assertEqual(2, iter.next().value);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1300
     * @tc.name testUint8ArrayKeys013
     * @tc.desc Verify three element array keys() iteration completes after third next()
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys013() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    iter.next();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1400
     * @tc.name testUint8ArrayKeys014
     * @tc.desc Verify five element array keys() index sum is 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys014() {
    Uint8Array arr = new Uint8Array(5);
    int sum = 0;
    for (Integer key : arr.keys()) {
    sum += key;};
    assertEqual(10, sum);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1500
     * @tc.name testUint8ArrayKeys015
     * @tc.desc Verify ten element array keys() spread length is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys015() {
    Uint8Array arr = new Uint8Array(10);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(10, result.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1600
     * @tc.name testUint8ArrayKeys016
     * @tc.desc Verify ten element array keys() spread first and last values are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys016() {
    Uint8Array arr = new Uint8Array(10);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.get(0));
    assertEqual(9, result.get(9));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1700
     * @tc.name testUint8ArrayKeys017
     * @tc.desc Verify length=100 array keys() complete iteration count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys017() {
    Uint8Array arr = new Uint8Array(100);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(100, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1800
     * @tc.name testUint8ArrayKeys018
     * @tc.desc Verify length=255 array keys() complete iteration count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys018() {
    Uint8Array arr = new Uint8Array(255);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(255, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_1900
     * @tc.name testUint8ArrayKeys019
     * @tc.desc Verify length=256 array keys() complete iteration count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys019() {
    Uint8Array arr = new Uint8Array(256);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(256, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2000
     * @tc.name testUint8ArrayKeys020
     * @tc.desc Verify length=1000 array keys() complete iteration count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys020() {
    Uint8Array arr = new Uint8Array(1000);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(1000, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2100
     * @tc.name testUint8ArrayKeys021
     * @tc.desc Verify length=2 array keys() produces indices 0,1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys021() {
    Uint8Array arr = new Uint8Array(2);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2200
     * @tc.name testUint8ArrayKeys022
     * @tc.desc Verify length=127 array keys() first and last indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys022() {
    Uint8Array arr = new Uint8Array(127);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.get(0));
    assertEqual(126, result.get(126));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2300
     * @tc.name testUint8ArrayKeys023
     * @tc.desc Verify length=128 array keys() first and last indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys023() {
    Uint8Array arr = new Uint8Array(128);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.get(0));
    assertEqual(127, result.get(127));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2400
     * @tc.name testUint8ArrayKeys024
     * @tc.desc Verify Uint8Array.of() empty array keys() immediately done
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys024() {
    Uint8Array arr = Uint8Array.of();
    Uint8Array.KeyIterator iter = arr.keys();
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2500
     * @tc.name testUint8ArrayKeys025
     * @tc.desc Verify Uint8Array.of(1,2,3) array keys() iterates three times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys025() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(3, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2600
     * @tc.name testUint8ArrayKeys026
     * @tc.desc Verify Uint8Array.from(FixedArray) array keys() is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys026() {
    int[] source = new int[] {10, 20};
    Uint8Array arr = Uint8Array.from(source);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(2, result.size());
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2700
     * @tc.name testUint8ArrayKeys027
     * @tc.desc Verify FixedArray<int> constructor array keys() is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys027() {
    int[] numbers = new int[] {5, 10, 15};
    Uint8Array arr = new Uint8Array(numbers);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(3, result.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2800
     * @tc.name testUint8ArrayKeys028
     * @tc.desc Verify copy constructor array keys() is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys028() {
    Uint8Array src = new Uint8Array(4);
    Uint8Array arr = new Uint8Array(src);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;};
    assertEqual(4, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_2900
     * @tc.name testUint8ArrayKeys029
     * @tc.desc Verify ArrayBuffer offset 0 view keys() is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(4, result.size());
    assertEqual(0, result.get(0));
    assertEqual(3, result.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3000
     * @tc.name testUint8ArrayKeys030
     * @tc.desc Verify ArrayBuffer offset 1 view keys() starts from 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 1);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.get(0));
    assertEqual(3, result.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3100
     * @tc.name testUint8ArrayKeys031
     * @tc.desc Verify ArrayBuffer offset 2 view keys() starts from 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys031() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf, 2);
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(0, result.get(0));
    assertEqual(3, result.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3200
     * @tc.name testUint8ArrayKeys032
     * @tc.desc Verify subarray() subview keys() starts from 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys032() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(1, 4);
    List<Integer> result = BasTest.collect(sub.keys());
    assertEqual(3, result.size());
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(2, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3300
     * @tc.name testUint8ArrayKeys033
     * @tc.desc Verify two independent keys() iterators advance independently
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys033() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array.KeyIterator iter1 = arr.keys();
    Uint8Array.KeyIterator iter2 = arr.keys();
    assertEqual(0, iter1.next().value);
    assertEqual(0, iter2.next().value);
    assertEqual(1, iter1.next().value);
    assertEqual(1, iter2.next().value);
    assertEqual(2, iter1.next().value);
    assertEqual(2, iter2.next().value);
    assertEqual(true, iter1.next().done);
    assertEqual(true, iter2.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3400
     * @tc.name testUint8ArrayKeys034
     * @tc.desc Verify nested for...of uses independent keys() iterators
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys034() {
    Uint8Array arr = new Uint8Array(2);
    int sum = 0;
    for (Integer i : arr.keys()) {
    for (Integer j : arr.keys()) {
    sum += (i + j);};};
    assertEqual(4, sum);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3500
     * @tc.name testUint8ArrayKeys035
     * @tc.desc Verify for...of with break exits early consuming only partial indices
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys035() {
    Uint8Array arr = new Uint8Array(5);
    int count = 0;
    for (Integer key : arr.keys()) {
    if (key >= 2) {
    break;};
    count++;};
    assertEqual(2, count);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3600
     * @tc.name testUint8ArrayKeys036
     * @tc.desc Verify break then new keys() iterator restarts from beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys036() {
    Uint8Array arr = new Uint8Array(5);
    for (Integer key : arr.keys()) {
    if (key >= 2) {
    break;};};
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(5, result.size());
    assertEqual(0, result.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3700
     * @tc.name testUint8ArrayKeys037
     * @tc.desc Verify after iteration completes, consecutive next() calls always done
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys037() {
    Uint8Array arr = new Uint8Array(2);
    Uint8Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    assertEqual(true, iter.next().done);
    assertEqual(true, iter.next().done);
    assertEqual(true, iter.next().done);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3800
     * @tc.name testUint8ArrayKeys038
     * @tc.desc Verify all zero element array keys() indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys038() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(3, result.size());
    assertEqual(0, result.get(0));
    assertEqual(2, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_3900
     * @tc.name testUint8ArrayKeys039
     * @tc.desc Verify all 255 element array keys() indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys039() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(3, result.size());
    assertEqual(1, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4000
     * @tc.name testUint8ArrayKeys040
     * @tc.desc Verify mixed value element array keys() indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys040() {
    Uint8Array arr = new Uint8Array(new int[] {127, 0, 255, 1});
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(4, result.size());
    assertEqual(3, result.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4100
     * @tc.name testUint8ArrayKeys041
     * @tc.desc Verify array with overflow truncated values (256) keys() indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys041() {
    Uint8Array arr = new Uint8Array(new int[] {256, 257, 258});
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(3, result.size());
    assertEqual(0, result.get(0));
    assertEqual(2, result.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4200
     * @tc.name testUint8ArrayKeys042
     * @tc.desc Verify array with wrap-around values (-1) keys() indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys042() {
    Uint8Array arr = new Uint8Array(new int[] {-1, -2});
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(2, result.size());
    assertEqual(1, result.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4300
     * @tc.name testUint8ArrayKeys043
     * @tc.desc Verify array with floating point truncated values keys() indices are correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys043() {
    Uint8Array arr = new Uint8Array(new double[] {1.5, 2.7, 3.2});
    List<Integer> result = BasTest.collect(arr.keys());
    assertEqual(3, result.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4400
     * @tc.name testUint8ArrayKeys044
     * @tc.desc Verify keys() iteration does not modify original array element content
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys044() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String before = arr.join(",");
    Uint8Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    iter.next();
    String after = arr.join(",");
    assertEqual(before, after);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4500
     * @tc.name testUint8ArrayKeys045
     * @tc.desc Verify keys() iteration does not affect array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys045() {
    Uint8Array arr = new Uint8Array(5);
    int before = arr.length();
    for (Integer key : arr.keys()) {
    };
    assertEqual(before, arr.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4600
     * @tc.name testUint8ArrayKeys046
     * @tc.desc Verify empty array keys() does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys046() {
    Uint8Array arr = new Uint8Array();
    boolean caught = false;
    try {
    Uint8Array.KeyIterator iter = arr.keys();
    iter.next();} catch (RangeError e) {
    caught = true;
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(false, caught);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_KEYS_4700
     * @tc.name testUint8ArrayKeys047
     * @tc.desc Verify large array keys() complete iteration does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayKeys047() {
    Uint8Array arr = new Uint8Array(10000);
    boolean caught = false;
    try {
    for (Integer key : arr.keys()) {
    };} catch (RangeError e) {
    caught = true;
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(false, caught);}
}
