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

package basetype.uint8clampedarray;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.IteratorResult;
import basetype.common.Uint8ClampedArray;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayEntriesTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayEntriesTest extends BasTest {
    /**
     * Verify entries() iteration count equals 3 for array [5, 6, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0100
     * @tc.name testUint8ClampedArrayEntries001
     * @tc.desc Verify entries() iteration count equals 3 for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(3, count);
    }

    /**
     * Verify entries() is exhausted for an empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0200
     * @tc.name testUint8ClampedArrayEntries002
     * @tc.desc Verify entries() is exhausted for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertNull(r.value);
    assertTrue(r.done);
    }

    /**
     * Verify entries() entered equals false for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0300
     * @tc.name testUint8ClampedArrayEntries003
     * @tc.desc Verify entries() entered equals false for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    boolean entered = false;
    for (int[] pair : arr.entries()) {
    entered = true;
    }
    assertEqual(false, entered);
    }

    /**
     * Verify entries() iterator is exhausted for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0400
     * @tc.name testUint8ClampedArrayEntries004
     * @tc.desc Verify entries() iterator is exhausted for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    EntryResult r = it.next();
    assertEqual(true, r.done);
    }

    /**
     * Verify entries() next().value [0, 42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0500
     * @tc.name testUint8ClampedArrayEntries005
     * @tc.desc Verify entries() next().value [0, 42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[0]);
    assertEqual(42, r.value[1]);
    }

    /**
     * Verify entries() iteration count equals 2 for array [11, 22]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0600
     * @tc.name testUint8ClampedArrayEntries006
     * @tc.desc Verify entries() iteration count equals 2 for array [11, 22]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22});
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(2, count);
    }

    /**
     * Verify entries() iteration count equals 10 for array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0700
     * @tc.name testUint8ClampedArrayEntries007
     * @tc.desc Verify entries() iteration count equals 10 for array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(10, count);
    }

    /**
     * Verify entries() iteration count equals 255 for array(new ArrayBuffer(255)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0800
     * @tc.name testUint8ClampedArrayEntries008
     * @tc.desc Verify entries() iteration count equals 255 for array(new ArrayBuffer(255)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(255));
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(255, count);
    }

    /**
     * Verify entries() iteration count equals 256 for array(new ArrayBuffer(256)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_0900
     * @tc.name testUint8ClampedArrayEntries009
     * @tc.desc Verify entries() iteration count equals 256 for array(new ArrayBuffer(256)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(256));
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(256, count);
    }

    /**
     * Verify entries() iteration count equals 1024 for array(new ArrayBuffer(1024)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1000
     * @tc.name testUint8ClampedArrayEntries010
     * @tc.desc Verify entries() iteration count equals 1024 for array(new ArrayBuffer(1024)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(1024));
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(1024, count);
    }

    /**
     * Verify entries() iterator value is 0 for array [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1100
     * @tc.name testUint8ClampedArrayEntries011
     * @tc.desc Verify entries() iterator value is 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify entries() [index, 255] clamp max value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1200
     * @tc.name testUint8ClampedArrayEntries012
     * @tc.desc Verify entries() [index, 255] clamp max value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(255, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 127 for array [127]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1300
     * @tc.name testUint8ClampedArrayEntries013
     * @tc.desc Verify entries() iterator value is 127 for array [127]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(127, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 128 for array [128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1400
     * @tc.name testUint8ClampedArrayEntries014
     * @tc.desc Verify entries() iterator value is 128 for array [128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(128, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 255 for array [256]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1500
     * @tc.name testUint8ClampedArrayEntries015
     * @tc.desc Verify entries() iterator value is 255 for array [256]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(255, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 0 for array [-1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1600
     * @tc.name testUint8ClampedArrayEntries016
     * @tc.desc Verify entries() iterator value is 0 for array [-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 0 for array [Number.NaN]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1700
     * @tc.name testUint8ClampedArrayEntries017
     * @tc.desc Verify entries() iterator value is 0 for array [Number.NaN]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify Infinity clamp 255 entries() 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1800
     * @tc.name testUint8ClampedArrayEntries018
     * @tc.desc Verify Infinity clamp 255 entries() 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(255, r.value[1]);
    }

    /**
     * Verify -Infinity clamp 0 entries() 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_1900
     * @tc.name testUint8ClampedArrayEntries019
     * @tc.desc Verify -Infinity clamp 0 entries() 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 0 for array [0.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2000
     * @tc.name testUint8ClampedArrayEntries020
     * @tc.desc Verify entries() iterator value is 0 for array [0.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify 127.5 half-even 128 entries() 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2100
     * @tc.name testUint8ClampedArrayEntries021
     * @tc.desc Verify 127.5 half-even 128 entries() 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(128, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 255 for array [1e9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2200
     * @tc.name testUint8ClampedArrayEntries022
     * @tc.desc Verify entries() iterator value is 255 for array [1e9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(255, r.value[1]);
    }

    /**
     * Verify entries() iteration count equals 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2300
     * @tc.name testUint8ClampedArrayEntries023
     * @tc.desc Verify entries() iteration count equals 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries023() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(4, count);
    }

    /**
     * Verify ArrayBuffer + byteOffset entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2400
     * @tc.name testUint8ClampedArrayEntries024
     * @tc.desc Verify ArrayBuffer + byteOffset entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries024() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(4, count);
    }

    /**
     * Verify Uint8ClampedArray.of() entries()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2500
     * @tc.name testUint8ClampedArrayEntries025
     * @tc.desc Verify Uint8ClampedArray.of() entries()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries025() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(10, r.value[1]);
    }

    /**
     * Verify subarray iteration count equals 3 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2600
     * @tc.name testUint8ClampedArrayEntries026
     * @tc.desc Verify subarray iteration count equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries026() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int count = 0;
    for (int[] pair : sub.entries()) {
    count = count + 1;
    }
    assertEqual(3, count);
    }

    /**
     * Verify entries() next().value [index, value]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2700
     * @tc.name testUint8ClampedArrayEntries027
     * @tc.desc Verify entries() next().value [index, value]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(0, r.value[0]);
    assertEqual(100, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 1 for array [100, 200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2800
     * @tc.name testUint8ClampedArrayEntries028
     * @tc.desc Verify entries() iterator value is 1 for array [100, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    EntryResult r = it.next();
    assertEqual(1, r.value[0]);
    assertEqual(200, r.value[1]);
    }

    /**
     * Verify entries() element at pair[0] equals expectedIdx for array [7, 8, 9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_2900
     * @tc.name testUint8ClampedArrayEntries029
     * @tc.desc Verify entries() element at pair[0] equals expectedIdx for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    int expectedIdx = 0;
    for (int[] pair : arr.entries()) {
    assertEqual(expectedIdx, pair[0]);
    expectedIdx = expectedIdx + 1;
    }
    assertEqual(3, expectedIdx);
    }

    /**
     * Verify entries() last key equals 3 for array [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3000
     * @tc.name testUint8ClampedArrayEntries030
     * @tc.desc Verify entries() last key equals 3 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int lastIdx = -1;
    for (int[] pair : arr.entries()) {
    lastIdx = pair[0];
    }
    assertEqual(3, lastIdx);
    }

    /**
     * Verify entries() next().value undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3100
     * @tc.name testUint8ClampedArrayEntries031
     * @tc.desc Verify entries() next().value undefined
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    EntryResult r = it.next();
    assertNull(r.value);
    }

    /**
     * Verify entries() iterator is exhausted for array [1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3200
     * @tc.name testUint8ClampedArrayEntries032
     * @tc.desc Verify entries() iterator is exhausted for array [1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    it.next();
    EntryResult r = it.next();
    assertEqual(true, r.done);
    }

    /**
     * Verify entries() v equals 99 for array [99]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3300
     * @tc.name testUint8ClampedArrayEntries033
     * @tc.desc Verify entries() v equals 99 for array [99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    Number v = r.value[1];
    assertEqual(99, v);
    }

    /**
     * Verify entries() i equals 0 for array [99]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3400
     * @tc.name testUint8ClampedArrayEntries034
     * @tc.desc Verify entries() i equals 0 for array [99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    int i = r.value[0];
    assertEqual(0, i);
    }

    /**
     * Verify entries() index matches array element access
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3500
     * @tc.name testUint8ClampedArrayEntries035
     * @tc.desc Verify entries() index matches array element access
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42, 43});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    int idx = r.value[0];
    assertEqualInt(r.value[1], arr.get(idx));
    }

    /**
     * Verify entries() iteration does not mutate array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3600
     * @tc.name testUint8ClampedArrayEntries036
     * @tc.desc Verify entries() iteration does not mutate array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    for (int[] pair : it) {
        continue;
    }
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    /**
     * Verify entries() iterators are independent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3700
     * @tc.name testUint8ClampedArrayEntries037
     * @tc.desc Verify entries() iterators are independent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.EntriesIterator it1 = arr.entries();
    Uint8ClampedArray.EntriesIterator it2 = arr.entries();
    it1.next();
    EntryResult r2 = it2.next();
    assertEqual(0, r2.value[0]);
    }

    /**
     * Verify entries() reflects mid-iteration array mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3800
     * @tc.name testUint8ClampedArrayEntries038
     * @tc.desc Verify entries() reflects mid-iteration array mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    arr.set(1, 99);
    EntryResult r = it.next();
    assertEqual(99, r.value[1]);
    }

    /**
     * Verify entries() reflects pre-iteration mutation at later index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_3900
     * @tc.name testUint8ClampedArrayEntries039
     * @tc.desc Verify entries() reflects pre-iteration mutation at later index
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    arr.set(2, 77);
    it.next();
    it.next();
    EntryResult r = it.next();
    assertEqual(77, r.value[1]);
    }

    /**
     * Verify entries() next() value snapshot before mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4000
     * @tc.name testUint8ClampedArrayEntries040
     * @tc.desc Verify entries() next() value snapshot before mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r1 = it.next();
    arr.set(0, 99);
    assertEqual(5, r1.value[1]);
    }

    /**
     * Verify entries() iterator value is 255 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4100
     * @tc.name testUint8ClampedArrayEntries041
     * @tc.desc Verify entries() iterator value is 255 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    arr.set(1, 256);
    EntryResult r = it.next();
    assertEqual(255, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 0 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4200
     * @tc.name testUint8ClampedArrayEntries042
     * @tc.desc Verify entries() iterator value is 0 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    arr.set(1, -1);
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 0 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4300
     * @tc.name testUint8ClampedArrayEntries043
     * @tc.desc Verify entries() iterator value is 0 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    arr.set(1, Double.NaN);
    EntryResult r = it.next();
    assertEqual(0, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 50 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4400
     * @tc.name testUint8ClampedArrayEntries044
     * @tc.desc Verify entries() iterator value is 50 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    arr.fill(50, 1);
    EntryResult r = it.next();
    assertEqual(50, r.value[1]);
    }

    /**
     * Verify entries() iterator value is 80 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4500
     * @tc.name testUint8ClampedArrayEntries045
     * @tc.desc Verify entries() iterator value is 80 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    List<Number> src = java.util.Arrays.asList(80, 90);
    arr.set(src, 1);
    EntryResult r = it.next();
    assertEqual(80, r.value[1]);
    }

    /**
     * Verify entries() iterator after reverse
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4600
     * @tc.name testUint8ClampedArrayEntries046
     * @tc.desc Verify entries() iterator after reverse
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    arr.reverse();
    EntryResult r = it.next();
    assertEqual(1, r.value[0]);
    assertEqual(2, r.value[1]);
    assertEqualInt(3, arr.get(0));
    }

    /**
     * Verify entries() iterator value is 88 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4700
     * @tc.name testUint8ClampedArrayEntries047
     * @tc.desc Verify entries() iterator value is 88 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries047() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    Uint8ClampedArray other = new Uint8ClampedArray(buf);
    other.set(1, 88);
    EntryResult r = it.next();
    assertEqual(88, r.value[1]);
    }

    /**
     * Verify entries() iterator is exhausted for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4800
     * @tc.name testUint8ClampedArrayEntries048
     * @tc.desc Verify entries() iterator is exhausted for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    EntryResult r = it.next();
    assertEqual(true, r.done);
    }

    /**
     * Verify entries() iteration count equals 2 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_4900
     * @tc.name testUint8ClampedArrayEntries049
     * @tc.desc Verify entries() iteration count equals 2 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    int count = 0;
    for (int[] pair : it) {
    count = count + 1;
    }
    assertEqual(2, count);
    }

    /**
     * Verify entries() iteration count equals 0 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5000
     * @tc.name testUint8ClampedArrayEntries050
     * @tc.desc Verify entries() iteration count equals 0 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    it.next();
    it.next();
    it.next();
    int count = 0;
    for (int[] pair : it) {
    count = count + 1;
    }
    assertEqual(0, count);
    }

    /**
     * Verify entries() next() done=false value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5100
     * @tc.name testUint8ClampedArrayEntries051
     * @tc.desc Verify entries() next() done=false value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7});
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertEqual(false, r.done);
    assertEqual(0, r.value[0]);
    assertEqual(7, r.value[1]);
    }

    /**
     * Verify keys() iterator value is k.value for array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5200
     * @tc.name testUint8ClampedArrayEntries052
     * @tc.desc Verify keys() iterator value is k.value for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.EntriesIterator entIt = arr.entries();
    Uint8ClampedArray.KeyIterator keyIt = arr.keys();
    EntryResult e = entIt.next();
    IteratorResult k = keyIt.next();
    assertEqual(k.value.intValue(), e.value[0]);
    }

    /**
     * Verify entries() iterator value is v.value for array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5300
     * @tc.name testUint8ClampedArrayEntries053
     * @tc.desc Verify entries() iterator value is v.value for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.EntriesIterator entIt = arr.entries();
    Uint8ClampedArray.KeyIterator valIt = arr.values();
    EntryResult e = entIt.next();
    IteratorResult v = valIt.next();
    assertEqual(v.value.intValue(), e.value[1]);
    }

    /**
     * Verify entries() iteration count equals 65535 for array(new ArrayBuffer(65535)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5400
     * @tc.name testUint8ClampedArrayEntries054
     * @tc.desc Verify entries() iteration count equals 65535 for array(new ArrayBuffer(65535)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(65535));
    int count = 0;
    for (int[] pair : arr.entries()) {
    count = count + 1;
    }
    assertEqual(65535, count);
    }

    /**
     * Verify Uint8ClampedArray.from accumulated sum equals 66 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5500
     * @tc.name testUint8ClampedArrayEntries055
     * @tc.desc Verify Uint8ClampedArray.from accumulated sum equals 66 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries055() {
    List<Number> src = java.util.Arrays.asList(11, 22, 33);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    int sum = 0;
    for (int[] pair : arr.entries()) {
    sum = sum + pair[1];
    }
    assertEqual(66, sum);
    }

    /**
     * Verify slice iteration count equals 2 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_ENTRIES_5600
     * @tc.name testUint8ClampedArrayEntries056
     * @tc.desc Verify slice iteration count equals 2 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEntries056() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.slice(1, 3);
    int count = 0;
    for (int[] pair : s.entries()) {
    count = count + 1;
    }
    assertEqual(2, count);
    }
}
