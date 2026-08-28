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
import basetype.common.IteratorResult;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayKeysTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayKeysTest extends BasTest {
    /**
     * Verify keys() yields sequence 0, 1, 2 for a 3-element array via next()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0100
     * @tc.name testUint8ClampedArrayKeys001
     * @tc.desc Verify keys() yields sequence 0, 1, 2 for a 3-element array via next()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    assertEqual(1, it.next().value);
    assertEqual(2, it.next().value);
    }

    /**
     * Verify keys() next().done is true for an empty array (length 0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0200
     * @tc.name testUint8ClampedArrayKeys002
     * @tc.desc Verify keys() next().done is true for an empty array (length 0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() first key is 0 for a single-element array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0300
     * @tc.name testUint8ClampedArrayKeys003
     * @tc.desc Verify keys() first key is 0 for a single-element array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() IteratorResult.done is true for an empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0400
     * @tc.name testUint8ClampedArrayKeys004
     * @tc.desc Verify keys() IteratorResult.done is true for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    IteratorResult r = it.next();
    assertTrue(r.done);
    }

    /**
     * Verify keys() IteratorResult.value is undefined for an empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0500
     * @tc.name testUint8ClampedArrayKeys005
     * @tc.desc Verify keys() IteratorResult.value is undefined for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    IteratorResult r = it.next();
    assertNull(r.value);
    }

    /**
     * Verify keys() first key is 0 for a single-element array [10]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0600
     * @tc.name testUint8ClampedArrayKeys006
     * @tc.desc Verify keys() first key is 0 for a single-element array [10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() second next().done is true after consuming single key
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0700
     * @tc.name testUint8ClampedArrayKeys007
     * @tc.desc Verify keys() second next().done is true after consuming single key
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() first key is 0 for a 2-element array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0800
     * @tc.name testUint8ClampedArrayKeys008
     * @tc.desc Verify keys() first key is 0 for a 2-element array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() second key is 1 for a 2-element array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_0900
     * @tc.name testUint8ClampedArrayKeys009
     * @tc.desc Verify keys() second key is 1 for a 2-element array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    assertEqual(1, it.next().value);
    }

    /**
     * Verify keys() third next().done is true after consuming both keys
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1000
     * @tc.name testUint8ClampedArrayKeys010
     * @tc.desc Verify keys() third next().done is true after consuming both keys
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    it.next();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() for..of yields [0, 1, 2] for a 3-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1100
     * @tc.name testUint8ClampedArrayKeys011
     * @tc.desc Verify keys() for..of yields [0, 1, 2] for a 3-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> keys = new ArrayList<>();
    for (Integer k : arr.keys()) {
    keys.add(k);
    }
    assertEqual(3, keys.size());
    assertEqual(0, keys.get(0));
    assertEqual(1, keys.get(1));
    assertEqual(2, keys.get(2));
    }

    /**
     * Verify keys() first key is 0 for a 3-element array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1200
     * @tc.name testUint8ClampedArrayKeys012
     * @tc.desc Verify keys() first key is 0 for a 3-element array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() third key is 2 after consuming first two for [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1300
     * @tc.name testUint8ClampedArrayKeys013
     * @tc.desc Verify keys() third key is 2 after consuming first two for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    it.next();
    assertEqual(2, it.next().value);
    }

    /**
     * Verify keys() fourth next().done is true after consuming all 3 keys
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1400
     * @tc.name testUint8ClampedArrayKeys014
     * @tc.desc Verify keys() fourth next().done is true after consuming all 3 keys
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    it.next();
    it.next();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() for..of yields exactly 10 keys for a length-10 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1500
     * @tc.name testUint8ClampedArrayKeys015
     * @tc.desc Verify keys() for..of yields exactly 10 keys for a length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(10, count);
    }

    /**
     * Verify keys() first key is 0 for a length-10 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1600
     * @tc.name testUint8ClampedArrayKeys016
     * @tc.desc Verify keys() first key is 0 for a length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() last key is 9 for a length-10 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1700
     * @tc.name testUint8ClampedArrayKeys017
     * @tc.desc Verify keys() last key is 9 for a length-10 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(9, last);
    }

    /**
     * Verify keys() for..of yields exactly 255 keys for a length-255 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1800
     * @tc.name testUint8ClampedArrayKeys018
     * @tc.desc Verify keys() for..of yields exactly 255 keys for a length-255 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(255, count);
    }

    /**
     * Verify keys() last key is 254 for a length-255 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_1900
     * @tc.name testUint8ClampedArrayKeys019
     * @tc.desc Verify keys() last key is 254 for a length-255 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(254, last);
    }

    /**
     * Verify keys() for..of yields exactly 256 keys for a length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2000
     * @tc.name testUint8ClampedArrayKeys020
     * @tc.desc Verify keys() for..of yields exactly 256 keys for a length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(256, count);
    }

    /**
     * Verify keys() last key is 255 for a length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2100
     * @tc.name testUint8ClampedArrayKeys021
     * @tc.desc Verify keys() last key is 255 for a length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(255, last);
    }

    /**
     * Verify keys() for..of yields exactly 1024 keys for a length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2200
     * @tc.name testUint8ClampedArrayKeys022
     * @tc.desc Verify keys() for..of yields exactly 1024 keys for a length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(1024, count);
    }

    /**
     * Verify keys() last key is 1023 for a length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2300
     * @tc.name testUint8ClampedArrayKeys023
     * @tc.desc Verify keys() last key is 1023 for a length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(1023, last);
    }

    /**
     * Verify keys() first key is 0 on an array created via Uint8ClampedArray.from()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2400
     * @tc.name testUint8ClampedArrayKeys024
     * @tc.desc Verify keys() first key is 0 on an array created via Uint8ClampedArray.from()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys024() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() last key is 3 on an array created via Uint8ClampedArray.of()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2500
     * @tc.name testUint8ClampedArrayKeys025
     * @tc.desc Verify keys() last key is 3 on an array created via Uint8ClampedArray.of()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys025() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(3, last);
    }

    /**
     * Verify keys() yields 4 keys on an ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2600
     * @tc.name testUint8ClampedArrayKeys026
     * @tc.desc Verify keys() yields 4 keys on an ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys026() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(4, count);
    }

    /**
     * Verify keys() first key is 0 on an ArrayBuffer view with byteOffset=2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2700
     * @tc.name testUint8ClampedArrayKeys027
     * @tc.desc Verify keys() first key is 0 on an ArrayBuffer view with byteOffset=2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() yields 4 keys on an ArrayBuffer view with byteOffset=2 length=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2800
     * @tc.name testUint8ClampedArrayKeys028
     * @tc.desc Verify keys() yields 4 keys on an ArrayBuffer view with byteOffset=2 length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(4, count);
    }

    /**
     * Verify keys() next().done is true for a zero-length ArrayBuffer view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_2900
     * @tc.name testUint8ClampedArrayKeys029
     * @tc.desc Verify keys() next().done is true for a zero-length ArrayBuffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 0);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() yields 3 keys on a subarray(1, 4) view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3000
     * @tc.name testUint8ClampedArrayKeys030
     * @tc.desc Verify keys() yields 3 keys on a subarray(1, 4) view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    int count = 0;
    for (Integer k : sub.keys()) {
    count++;
    }
    assertEqual(3, count);
    }

    /**
     * Verify keys() last key is 2 on a slice(0, 3) copy
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3100
     * @tc.name testUint8ClampedArrayKeys031
     * @tc.desc Verify keys() last key is 2 on a slice(0, 3) copy
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(0, 3);
    int last = -1;
    for (Integer k : s.keys()) {
    last = k;
    }
    assertEqual(2, last);
    }

    /**
     * Verify keys() yields sequence 0, 1 for a 2-element array via next()
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3200
     * @tc.name testUint8ClampedArrayKeys032
     * @tc.desc Verify keys() yields sequence 0, 1 for a 2-element array via next()
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    assertEqual(1, it.next().value);
    }

    /**
     * Verify keys() IteratorResult.value is 0 for a single-element array [1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3300
     * @tc.name testUint8ClampedArrayKeys033
     * @tc.desc Verify keys() IteratorResult.value is 0 for a single-element array [1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    IteratorResult r = it.next();
    assertEqual(0, r.value);
    }

    /**
     * Verify keys() first next().value is 0 for a 2-element array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3400
     * @tc.name testUint8ClampedArrayKeys034
     * @tc.desc Verify keys() first next().value is 0 for a 2-element array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    Integer v = it.next().value;
    assertEqual(0, v);
    }

    /**
     * Verify keys() first next().done is false for a non-empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3500
     * @tc.name testUint8ClampedArrayKeys035
     * @tc.desc Verify keys() first next().done is false for a non-empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertFalse(it.next().done);
    }

    /**
     * Verify keys() for..of loop sums keys to 3 for [1, 2, 3] (0+1+2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3600
     * @tc.name testUint8ClampedArrayKeys036
     * @tc.desc Verify keys() for..of loop sums keys to 3 for [1, 2, 3] (0+1+2)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = 0;
    for (Integer k : arr.keys()) {
    sum += k;
    }
    assertEqual(3, sum);
    }

    /**
     * Verify keys() for..of sum of keys equals triangular number 10 for length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3700
     * @tc.name testUint8ClampedArrayKeys037
     * @tc.desc Verify keys() for..of sum of keys equals triangular number 10 for length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    int sum = 0;
    for (Integer k : arr.keys()) {
    sum += k;
    }
    assertEqual(10, sum);
    }

    /**
     * Verify calling keys() does not mutate the array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3800
     * @tc.name testUint8ClampedArrayKeys038
     * @tc.desc Verify calling keys() does not mutate the array length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    assertEqual(1, it.next().value);
    assertEqual(2, it.next().value);
    assertTrue(it.next().done);
    assertEqual(before, arr.length());
    }

    /**
     * Verify calling keys() does not mutate array element arr[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_3900
     * @tc.name testUint8ClampedArrayKeys039
     * @tc.desc Verify calling keys() does not mutate array element arr[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    assertEqual(1, it.next().value);
    assertEqual(2, it.next().value);
    assertTrue(it.next().done);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify calling keys() does not mutate array element arr[2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4000
     * @tc.name testUint8ClampedArrayKeys040
     * @tc.desc Verify calling keys() does not mutate array element arr[2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    assertEqual(1, it.next().value);
    assertEqual(2, it.next().value);
    assertTrue(it.next().done);
    assertEqual(30, arr.get(2));
    }

    /**
     * Verify keys() stays done after consuming all keys and calling next() again
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4100
     * @tc.name testUint8ClampedArrayKeys041
     * @tc.desc Verify keys() stays done after consuming all keys and calling next() again
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    it.next();
    it.next();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() value is undefined past the last key for a 2-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4200
     * @tc.name testUint8ClampedArrayKeys042
     * @tc.desc Verify keys() value is undefined past the last key for a 2-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    it.next();
    IteratorResult r = it.next();
    assertNull(r.value);
    }

    /**
     * Verify two independent keys() iterators do not interfere with each other
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4300
     * @tc.name testUint8ClampedArrayKeys043
     * @tc.desc Verify two independent keys() iterators do not interfere with each other
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it1 = arr.keys();
    Uint8ClampedArray.KeyIterator it2 = arr.keys();
    it1.next();
    assertEqual(0, it2.next().value);
    }

    /**
     * Verify keys() next().value with nullish coalescing yields 0, 1 for length-4 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4400
     * @tc.name testUint8ClampedArrayKeys044
     * @tc.desc Verify keys() next().value with nullish coalescing yields 0, 1 for length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    int a = BasTest.coalesce(it.next().value, 0);
    int b = BasTest.coalesce(it.next().value, 0);
    assertEqual(0, a);
    assertEqual(1, b);
    }

    /**
     * Verify keys() consecutive keys differ by 1 (b-a===1) for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4500
     * @tc.name testUint8ClampedArrayKeys045
     * @tc.desc Verify keys() consecutive keys differ by 1 (b-a===1) for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    int a = BasTest.coalesce(it.next().value, 0);
    int b = BasTest.coalesce(it.next().value, 0);
    assertEqual(1, b - a);
    }

    /**
     * Verify keys() for..of collects exactly 3 keys into an array for [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4600
     * @tc.name testUint8ClampedArrayKeys046
     * @tc.desc Verify keys() for..of collects exactly 3 keys into an array for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> collected = new ArrayList<>();
    for (Integer k : arr.keys()) {
    collected.add(k);
    }
    assertEqual(3, collected.size());
    }

    /**
     * Verify keys() for..of collected first element is 0 for [5, 6, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4700
     * @tc.name testUint8ClampedArrayKeys047
     * @tc.desc Verify keys() for..of collected first element is 0 for [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    List<Integer> collected = new ArrayList<>();
    for (Integer k : arr.keys()) {
    collected.add(k);
    }
    assertEqual(0, collected.get(0));
    }

    /**
     * Verify keys() for..of collected last element is length-1 for [5, 6, 7, 8]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4800
     * @tc.name testUint8ClampedArrayKeys048
     * @tc.desc Verify keys() for..of collected last element is length-1 for [5, 6, 7, 8]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7, 8});
    List<Integer> collected = new ArrayList<>();
    for (Integer k : arr.keys()) {
    collected.add(k);
    }
    assertEqual(3, collected.get(collected.size() - 1));
    }

    /**
     * Verify keys() first key is 0 for a length-65535 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_4900
     * @tc.name testUint8ClampedArrayKeys049
     * @tc.desc Verify keys() first key is 0 for a length-65535 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify three independent keys() iterators all start at key 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5000
     * @tc.name testUint8ClampedArrayKeys050
     * @tc.desc Verify three independent keys() iterators all start at key 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it1 = arr.keys();
    Uint8ClampedArray.KeyIterator it2 = arr.keys();
    Uint8ClampedArray.KeyIterator it3 = arr.keys();
    assertEqual(0, it1.next().value);
    assertEqual(0, it2.next().value);
    assertEqual(0, it3.next().value);
    }

    /**
     * Verify keys() next().done is true on a zero-length ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5100
     * @tc.name testUint8ClampedArrayKeys051
     * @tc.desc Verify keys() next().done is true on a zero-length ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys051() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertTrue(it.next().done);
    }

    /**
     * Verify keys() for..of with in-loop mutation sets all elements to 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5200
     * @tc.name testUint8ClampedArrayKeys052
     * @tc.desc Verify keys() for..of with in-loop mutation sets all elements to 99
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int count = 0;
    for (Integer k : arr.keys()) {
    arr.set(k, 99);
    count++;
    }
    assertEqual(3, count);
    assertEqual(99, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));
    }

    /**
     * Verify keys() for..of with in-loop assignment clamps 300 to 255 for all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5300
     * @tc.name testUint8ClampedArrayKeys053
     * @tc.desc Verify keys() for..of with in-loop assignment clamps 300 to 255 for all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    for (Integer k : arr.keys()) {
    arr.set(k, 300);
    }
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    /**
     * Verify keys() last key is 3 on a fill(7)-initialized length-4 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5400
     * @tc.name testUint8ClampedArrayKeys054
     * @tc.desc Verify keys() last key is 3 on a fill(7)-initialized length-4 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.fill(7);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(3, last);
    }

    /**
     * Verify keys() first key is still 0 after reverse() (keys are index-based)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5500
     * @tc.name testUint8ClampedArrayKeys055
     * @tc.desc Verify keys() first key is still 0 after reverse() (keys are index-based)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() last key is 2 on a sorted [3, 1, 2] array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5600
     * @tc.name testUint8ClampedArrayKeys056
     * @tc.desc Verify keys() last key is 2 on a sorted [3, 1, 2] array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort();
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(2, last);
    }

    /**
     * Verify advancing one iterator does not affect another independent iterator
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5700
     * @tc.name testUint8ClampedArrayKeys057
     * @tc.desc Verify advancing one iterator does not affect another independent iterator
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray.KeyIterator it1 = arr.keys();
    Uint8ClampedArray.KeyIterator it2 = arr.keys();
    it1.next();
    it1.next();
    assertEqual(0, it2.next().value);
    }

    /**
     * Verify keys() for..of collected first element is 0 matching expected[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5800
     * @tc.name testUint8ClampedArrayKeys058
     * @tc.desc Verify keys() for..of collected first element is 0 matching expected[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    List<Integer> expected = java.util.Arrays.asList(0, 1, 2, 3);
    List<Integer> got = new ArrayList<>();
    for (Integer k : arr.keys()) {
    got.add(k);
    }
    assertEqual(expected.get(0), got.get(0));
    }

    /**
     * Verify keys() for..of collected second element is 1 for [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_5900
     * @tc.name testUint8ClampedArrayKeys059
     * @tc.desc Verify keys() for..of collected second element is 1 for [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    List<Integer> got = new ArrayList<>();
    for (Integer k : arr.keys()) {
    got.add(k);
    }
    assertEqual(1, got.get(1));
    }

    /**
     * Verify keys() for..of collected third element is 2 for [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6000
     * @tc.name testUint8ClampedArrayKeys060
     * @tc.desc Verify keys() for..of collected third element is 2 for [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    List<Integer> got = new ArrayList<>();
    for (Integer k : arr.keys()) {
    got.add(k);
    }
    assertEqual(2, got.get(2));
    }

    /**
     * Verify keys() for..of collected fourth element is 3 for [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6100
     * @tc.name testUint8ClampedArrayKeys061
     * @tc.desc Verify keys() for..of collected fourth element is 3 for [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    List<Integer> got = new ArrayList<>();
    for (Integer k : arr.keys()) {
    got.add(k);
    }
    assertEqual(3, got.get(3));
    }

    /**
     * Verify keys() fourth next().value is 3 after consuming first three for length-6 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6200
     * @tc.name testUint8ClampedArrayKeys062
     * @tc.desc Verify keys() fourth next().value is 3 after consuming first three for length-6 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(6);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    it.next();
    it.next();
    it.next();
    assertEqual(3, it.next().value);
    }

    /**
     * Verify keys() iteration stops after exactly length steps for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6300
     * @tc.name testUint8ClampedArrayKeys063
     * @tc.desc Verify keys() iteration stops after exactly length steps for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    int steps = 0;
    while (!it.next().done) {
    steps++;
    }
    assertEqual(3, steps);
    }

    /**
     * Verify keys() loop still yields 3 keys and NaN assignment clamps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6400
     * @tc.name testUint8ClampedArrayKeys064
     * @tc.desc Verify keys() loop still yields 3 keys and NaN assignment clamps to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, Double.NaN);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(3, count);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify keys() first key is 0 after assigning -1 to arr[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6500
     * @tc.name testUint8ClampedArrayKeys065
     * @tc.desc Verify keys() first key is 0 after assigning -1 to arr[0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, -1);
    Uint8ClampedArray.KeyIterator it = arr.keys();
    assertEqual(0, it.next().value);
    }

    /**
     * Verify keys() loop yields 3 keys and Infinity assignment clamps to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6600
     * @tc.name testUint8ClampedArrayKeys066
     * @tc.desc Verify keys() loop yields 3 keys and Infinity assignment clamps to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, Double.POSITIVE_INFINITY);
    int count = 0;
    for (Integer k : arr.keys()) {
    count++;
    }
    assertEqual(3, count);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify keys() last key is 3 after copyWithin(0, 2) on a 4-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_KEYS_6700
     * @tc.name testUint8ClampedArrayKeys067
     * @tc.desc Verify keys() last key is 3 after copyWithin(0, 2) on a 4-element array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayKeys067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2);
    int last = -1;
    for (Integer k : arr.keys()) {
    last = k;
    }
    assertEqual(3, last);
    }
}
