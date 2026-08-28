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
import basetype.common.EntryResult;
import basetype.common.Uint8Array;
import basetype.common.RangeError;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayEntriesTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayEntriesTest extends BasTest {
    /**
     * Verify entries() with zero parameters for normal call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0100
     * @tc.name testUint8ArrayEntries001
     * @tc.desc Verify entries() with zero parameters for normal call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries001() {
    Uint8Array arr = Uint8Array.of(5, 10);
    Uint8Array.EntriesIterator iter = arr.entries();
    assertNotNull(iter);
    }

    /**
     * Verify entries() returns non-null object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0200
     * @tc.name testUint8ArrayEntries002
     * @tc.desc Verify entries() returns non-null object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries002() {
    Uint8Array arr = Uint8Array.of(1, 2);
    Uint8Array.EntriesIterator iter = arr.entries();
    assertNotNull(iter);
    }

    /**
     * Verify entries() returns object with next method
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0300
     * @tc.name testUint8ArrayEntries003
     * @tc.desc Verify entries() returns object with next method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries003() {
    Uint8Array arr = Uint8Array.of(1, 2);
    Uint8Array.EntriesIterator iter = arr.entries();
    assertNotNull(true);
    }

    /**
     * Verify entries() returns object with Symbol.iterator returning self
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0400
     * @tc.name testUint8ArrayEntries004
     * @tc.desc Verify entries() returns object with Symbol.iterator returning self
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries004() {
    Uint8Array arr = Uint8Array.of(1, 2);
    Uint8Array.EntriesIterator iter = arr.entries();
    Uint8Array.EntriesIterator same = iter.iteratorSymbol();
    assertEqual(iter, same);
    }

    /**
     * Verify multiple calls to entries() return different iterator instances
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0500
     * @tc.name testUint8ArrayEntries005
     * @tc.desc Verify multiple calls to entries() return different iterator instances
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries005() {
    Uint8Array arr = Uint8Array.of(1, 2);
    Uint8Array.EntriesIterator iter1 = arr.entries();
    Uint8Array.EntriesIterator iter2 = arr.entries();
    assertNotEqual(iter2, iter1);
    }

    /**
     * Verify empty array entries().next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0600
     * @tc.name testUint8ArrayEntries006
     * @tc.desc Verify empty array entries().next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries006() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertTrue(e.done);
    }

    /**
     * Verify empty array for..of loop iterates 0 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0700
     * @tc.name testUint8ArrayEntries007
     * @tc.desc Verify empty array for..of loop iterates 0 times
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries007() {
    Uint8Array arr = new Uint8Array();
    int count = 0;
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    while (!e.done) {
    count++;
    e = iter.next();
    }
    assertEqual(0, count);
    }

    /**
     * Verify empty array consecutive next() calls return done true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0800
     * @tc.name testUint8ArrayEntries008
     * @tc.desc Verify empty array consecutive next() calls return done true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries008() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e1 = iter.next();
    EntryResult e2 = iter.next();
    assertTrue(e1.done);
    assertTrue(e2.done);
    }

    /**
     * Verify empty array new iterator after consuming next() is still done
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_0900
     * @tc.name testUint8ArrayEntries009
     * @tc.desc Verify empty array new iterator after consuming next() is still done
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries009() {
    Uint8Array arr = new Uint8Array();
    Uint8Array.EntriesIterator iter1 = arr.entries();
    iter1.next();
    Uint8Array.EntriesIterator iter2 = arr.entries();
    EntryResult e = iter2.next();
    assertTrue(e.done);
    }

    /**
     * Verify single element entries first entry index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1000
     * @tc.name testUint8ArrayEntries010
     * @tc.desc Verify single element entries first entry index is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries010() {
    Uint8Array arr = Uint8Array.of(42);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertFalse(e.done);
    assertEqual(0, e.value[0]);
    }

    /**
     * Verify single element entries first entry value matches element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1100
     * @tc.name testUint8ArrayEntries011
     * @tc.desc Verify single element entries first entry value matches element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries011() {
    Uint8Array arr = Uint8Array.of(42);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(42, e.value[1]);
    }

    /**
     * Verify single element entries next().done is true after consumption
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1200
     * @tc.name testUint8ArrayEntries012
     * @tc.desc Verify single element entries next().done is true after consumption
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries012() {
    Uint8Array arr = Uint8Array.of(99);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    EntryResult e = iter.next();
    assertTrue(e.done);
    }

    /**
     * Verify single element value 255 (MAX) entries value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1300
     * @tc.name testUint8ArrayEntries013
     * @tc.desc Verify single element value 255 (MAX) entries value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries013() {
    Uint8Array arr = Uint8Array.of(255);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(255, e.value[1]);
    }

    /**
     * Verify three element array entries traversal count is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1400
     * @tc.name testUint8ArrayEntries014
     * @tc.desc Verify three element array entries traversal count is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries014() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    int count = 0;
    EntryResult e = iter.next();
    while (!e.done) {
    count++;
    e = iter.next();
    }
    assertEqual(3, count);
    }

    /**
     * Verify three element array entries first entry index is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1500
     * @tc.name testUint8ArrayEntries015
     * @tc.desc Verify three element array entries first entry index is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries015() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(0, e.value[0]);
    }

    /**
     * Verify three element array entries first entry value is 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1600
     * @tc.name testUint8ArrayEntries016
     * @tc.desc Verify three element array entries first entry value is 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries016() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(10, e.value[1]);
    }

    /**
     * Verify three element array entries second entry index is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1700
     * @tc.name testUint8ArrayEntries017
     * @tc.desc Verify three element array entries second entry index is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries017() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    EntryResult e = iter.next();
    assertEqual(1, e.value[0]);
    }

    /**
     * Verify three element array entries second entry value is 20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1800
     * @tc.name testUint8ArrayEntries018
     * @tc.desc Verify three element array entries second entry value is 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries018() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    EntryResult e = iter.next();
    assertEqual(20, e.value[1]);
    }

    /**
     * Verify three element array entries third entry index is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_1900
     * @tc.name testUint8ArrayEntries019
     * @tc.desc Verify three element array entries third entry index is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries019() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult e = iter.next();
    assertEqual(2, e.value[0]);
    }

    /**
     * Verify three element array entries third entry value is 30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2000
     * @tc.name testUint8ArrayEntries020
     * @tc.desc Verify three element array entries third entry value is 30
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries020() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult e = iter.next();
    assertEqual(30, e.value[1]);
    }

    /**
     * Verify five element array entries traversal count is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2100
     * @tc.name testUint8ArrayEntries021
     * @tc.desc Verify five element array entries traversal count is 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries021() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array.EntriesIterator iter = arr.entries();
    int count = 0;
    EntryResult e = iter.next();
    while (!e.done) {
    count++;
    e = iter.next();
    }
    assertEqual(5, count);
    }

    /**
     * Verify 100 element array entries traversal count is 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2200
     * @tc.name testUint8ArrayEntries022
     * @tc.desc Verify 100 element array entries traversal count is 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries022() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Uint8Array.EntriesIterator iter = arr.entries();
    int count = 0;
    EntryResult e = iter.next();
    while (!e.done) {
    count++;
    e = iter.next();
    }
    assertEqual(100, count);
    }

    /**
     * Verify 100 element array entries 61st entry index is 60
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2300
     * @tc.name testUint8ArrayEntries023
     * @tc.desc Verify 100 element array entries 61st entry index is 60
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries023() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Uint8Array.EntriesIterator iter = arr.entries();
    for (int i = 0; i < 60; i++) {
    iter.next();
    }
    EntryResult e = iter.next();
    assertEqual(60, e.value[0]);
    }

    /**
     * Verify element value 0 (MIN) entries value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2400
     * @tc.name testUint8ArrayEntries024
     * @tc.desc Verify element value 0 (MIN) entries value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries024() {
    Uint8Array arr = Uint8Array.of(0);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(0, e.value[1]);
    }

    /**
     * Verify element value 256 (overflow truncated to 0) entries value is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2500
     * @tc.name testUint8ArrayEntries025
     * @tc.desc Verify element value 256 (overflow truncated to 0) entries value is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries025() {
    Uint8Array arr = Uint8Array.of(256);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(0, e.value[1]);
    }

    /**
     * Verify element value -1 (wrapped to 255) entries value is 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2600
     * @tc.name testUint8ArrayEntries026
     * @tc.desc Verify element value -1 (wrapped to 255) entries value is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries026() {
    Uint8Array arr = Uint8Array.of(-1);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(255, e.value[1]);
    }

    /**
     * Verify element value 127 (midpoint) entries value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2700
     * @tc.name testUint8ArrayEntries027
     * @tc.desc Verify element value 127 (midpoint) entries value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries027() {
    Uint8Array arr = Uint8Array.of(127);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(127, e.value[1]);
    }

    /**
     * Verify element value 128 (midpoint+1) entries value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2800
     * @tc.name testUint8ArrayEntries028
     * @tc.desc Verify element value 128 (midpoint+1) entries value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries028() {
    Uint8Array arr = Uint8Array.of(128);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(128, e.value[1]);
    }

    /**
     * Verify element value 0x80 (128 hexadecimal) entries value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_2900
     * @tc.name testUint8ArrayEntries029
     * @tc.desc Verify element value 0x80 (128 hexadecimal) entries value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries029() {
    Uint8Array arr = Uint8Array.of(0x80);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(128, e.value[1]);
    }

    /**
     * Verify element value 0xFF (255 hexadecimal) entries value correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3000
     * @tc.name testUint8ArrayEntries030
     * @tc.desc Verify element value 0xFF (255 hexadecimal) entries value correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries030() {
    Uint8Array arr = Uint8Array.of(0xFF);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(255, e.value[1]);
    }

    /**
     * Verify Uint8Array constructed from ArrayBuffer entries normal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3100
     * @tc.name testUint8ArrayEntries031
     * @tc.desc Verify Uint8Array constructed from ArrayBuffer entries normal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries031() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(0, e.value[0]);
    assertEqual(10, e.value[1]);
    }

    /**
     * Verify subarray view entries first entry index starts from 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3200
     * @tc.name testUint8ArrayEntries032
     * @tc.desc Verify subarray view entries first entry index starts from 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    Uint8Array sub = arr.subarray(2, 4);
    Uint8Array.EntriesIterator iter = sub.entries();
    EntryResult e = iter.next();
    assertEqual(0, e.value[0]);
    assertEqual(3, e.value[1]);
    }

    /**
     * Verify subarray view entries traversal count is view length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3300
     * @tc.name testUint8ArrayEntries033
     * @tc.desc Verify subarray view entries traversal count is view length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries033() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub = arr.subarray(1, 4);
    Uint8Array.EntriesIterator iter = sub.entries();
    int count = 0;
    EntryResult e = iter.next();
    while (!e.done) {
    count++;
    e = iter.next();
    }
    assertEqual(3, count);
    }

    /**
     * Verify shared buffer view entries reflects buffer modification
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3400
     * @tc.name testUint8ArrayEntries034
     * @tc.desc Verify shared buffer view entries reflects buffer modification
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries034() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array sub = arr.subarray(0, 2);
    arr.set(1, 200);
    Uint8Array.EntriesIterator iter = sub.entries();
    iter.next();
    EntryResult e = iter.next();
    assertEqual(200, e.value[1]);
    }

    /**
     * Verify Uint8Array constructed from FixedArray<int> entries normal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3500
     * @tc.name testUint8ArrayEntries035
     * @tc.desc Verify Uint8Array constructed from FixedArray<int> entries normal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries035() {
    int[] source = new int[] {1, 2, 3};
    Uint8Array arr = new Uint8Array(source);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(1, e.value[1]);
    }

    /**
     * Verify Uint8Array constructed from FixedArray<number> entries normal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3600
     * @tc.name testUint8ArrayEntries036
     * @tc.desc Verify Uint8Array constructed from FixedArray<number> entries normal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries036() {
    double[] source = new double[] {1.0, 2.0, 3.0};
    Uint8Array arr = new Uint8Array(source);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(1, e.value[1]);
    }

    /**
     * Verify for...of traversal entries index increments in order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3700
     * @tc.name testUint8ArrayEntries037
     * @tc.desc Verify for...of traversal entries index increments in order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries037() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int idx = 0;
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    while (!e.done) {
    int[] entry = e.value;
    assertEqual(idx, entry[0]);
    idx++;
    e = iter.next();
    }
    assertEqual(3, idx);
    }

    /**
     * Verify for...of traversal entries values match array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3800
     * @tc.name testUint8ArrayEntries038
     * @tc.desc Verify for...of traversal entries values match array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries038() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    Uint8Array expected = Uint8Array.of(5, 10, 15);
    int idx = 0;
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    while (!e.done) {
    int[] entry = e.value;
    assertEqual(expected.at(idx), entry[1]);
    idx++;
    e = iter.next();
    }
    assertEqual(3, idx);
    }

    /**
     * Verify complete traversal next().done is true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_3900
     * @tc.name testUint8ArrayEntries039
     * @tc.desc Verify complete traversal next().done is true
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries039() {
    Uint8Array arr = Uint8Array.of(1, 2);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    EntryResult e = iter.next();
    assertTrue(e.done);
    }

    /**
     * Verify exhausted iterator consecutive next() calls return done
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4000
     * @tc.name testUint8ArrayEntries040
     * @tc.desc Verify exhausted iterator consecutive next() calls return done
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries040() {
    Uint8Array arr = Uint8Array.of(1);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    EntryResult e1 = iter.next();
    EntryResult e2 = iter.next();
    EntryResult e3 = iter.next();
    assertTrue(e1.done);
    assertTrue(e2.done);
    assertTrue(e3.done);
    }

    /**
     * Verify modifying untraversed element during entries traversal reflects new value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4100
     * @tc.name testUint8ArrayEntries041
     * @tc.desc Verify modifying untraversed element during entries traversal reflects new value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    iter.next();
    arr.set(3, 99);
    EntryResult e = iter.next();
    assertEqual(99, e.value[1]);
    }

    /**
     * Verify modifying traversed element does not affect subsequent entry
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4200
     * @tc.name testUint8ArrayEntries042
     * @tc.desc Verify modifying traversed element does not affect subsequent entry
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries042() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    arr.set(0, 100);
    EntryResult e = iter.next();
    assertEqual(20, e.value[1]);
    }

    /**
     * Verify fill during entries traversal fills untraversed region with new value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4300
     * @tc.name testUint8ArrayEntries043
     * @tc.desc Verify fill during entries traversal fills untraversed region with new value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries043() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    arr.fill(255, 2);
    EntryResult e = iter.next();
    assertEqual(255, e.value[1]);
    }

    /**
     * Verify set during entries traversal writes to untraversed position
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4400
     * @tc.name testUint8ArrayEntries044
     * @tc.desc Verify set during entries traversal writes to untraversed position
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    iter.next();
    arr.set(Uint8Array.of(99), 3);
    EntryResult e = iter.next();
    assertEqual(2, e.value[0]);
    EntryResult e2 = iter.next();
    assertEqual(99, e2.value[1]);
    }

    /**
     * Verify new entries iterator after array modification sees latest values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4500
     * @tc.name testUint8ArrayEntries045
     * @tc.desc Verify new entries iterator after array modification sees latest values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.entries();
    arr.set(0, 100);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(100, e.value[1]);
    }

    /**
     * Verify modification via $_set during entries traversal correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4600
     * @tc.name testUint8ArrayEntries046
     * @tc.desc Verify modification via $_set during entries traversal correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    arr.set(2, 88);
    EntryResult e2 = iter.next();
    EntryResult e3 = iter.next();
    assertEqual(2, e3.value[0]);
    assertEqual(88, e3.value[1]);
    }

    /**
     * Verify two entries iterators from same array step independently
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4700
     * @tc.name testUint8ArrayEntries047
     * @tc.desc Verify two entries iterators from same array step independently
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries047() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array.EntriesIterator iter1 = arr.entries();
    Uint8Array.EntriesIterator iter2 = arr.entries();
    iter1.next();
    iter1.next();
    EntryResult e = iter2.next();
    assertEqual(0, e.value[0]);
    assertEqual(1, e.value[1]);
    }

    /**
     * Verify two entries iterators interleaved stepping do not affect each other
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4800
     * @tc.name testUint8ArrayEntries048
     * @tc.desc Verify two entries iterators interleaved stepping do not affect each other
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries048() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array.EntriesIterator iter1 = arr.entries();
    Uint8Array.EntriesIterator iter2 = arr.entries();
    EntryResult a = iter1.next();
    EntryResult b = iter2.next();
    EntryResult c = iter1.next();
    EntryResult d = iter2.next();
    assertEqual(0, a.value[0]);
    assertEqual(0, b.value[0]);
    assertEqual(1, c.value[0]);
    assertEqual(1, d.value[0]);
    }

    /**
     * Verify one iterator exhausted does not affect another iterator
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_4900
     * @tc.name testUint8ArrayEntries049
     * @tc.desc Verify one iterator exhausted does not affect another iterator
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array.EntriesIterator iter1 = arr.entries();
    Uint8Array.EntriesIterator iter2 = arr.entries();
    EntryResult e = iter1.next();
    while (!e.done) {
    e = iter1.next();
    }
    EntryResult e2 = iter2.next();
    assertEqual(0, e2.value[0]);
    assertEqual(1, e2.value[1]);
    }

    /**
     * Verify empty array entries does not throw exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_5000
     * @tc.name testUint8ArrayEntries050
     * @tc.desc Verify empty array entries does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries050() {
    Uint8Array arr = new Uint8Array();
    boolean threw = false;
    try {
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    } catch (RangeError e) {
    threw = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertFalse(threw);
    }

    /**
     * Verify non-empty array entries does not throw exception
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_5100
     * @tc.name testUint8ArrayEntries051
     * @tc.desc Verify non-empty array entries does not throw exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries051() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean threw = false;
    try {
    Uint8Array.EntriesIterator iter = arr.entries();
    iter.next();
    } catch (RangeError e) {
    threw = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertFalse(threw);
    }

    /**
     * Verify for...of traversal entries with throw does not affect array structure
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_5200
     * @tc.name testUint8ArrayEntries052
     * @tc.desc Verify for...of traversal entries with throw does not affect array structure
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries052() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean threw = false;
    try {
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    while (!e.done) {
    BasTest.throwTestError("");
    }
    } catch (RangeError e) {
    threw = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(threw);
    assertEqual(3, arr.length());
    }

    /**
     * Verify Uint8Array with byteOffset constructed entries index starts from 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_5300
     * @tc.name testUint8ArrayEntries053
     * @tc.desc Verify Uint8Array with byteOffset constructed entries index starts from 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries053() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    arr.set(0, 100);
    arr.set(1, 200);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e = iter.next();
    assertEqual(0, e.value[0]);
    assertEqual(100, e.value[1]);
    }

    /**
     * Verify array with all equal elements (128) entries index correct
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ENTRIES_5400
     * @tc.name testUint8ArrayEntries054
     * @tc.desc Verify array with all equal elements (128) entries index correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayEntries054() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(128);
    Uint8Array.EntriesIterator iter = arr.entries();
    EntryResult e1 = iter.next();
    EntryResult e2 = iter.next();
    assertEqual(128, e1.value[1]);
    assertEqual(1, e2.value[0]);
    }
}
