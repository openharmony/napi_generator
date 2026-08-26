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
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull04Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull04Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0100
     * @tc.name testUint8ClampedArrayFullFour001
     * @tc.desc Verify constructor element [0] equals 255 for array [0xFF]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF});
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0200
     * @tc.name testUint8ClampedArrayFullFour002
     * @tc.desc Verify subarray yields length 0 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour002() {
    Uint8ClampedArray parent = new Uint8ClampedArray(5);
    Uint8ClampedArray sub = parent.subarray(0, 0);
    assertEqual(0, sub.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0300
     * @tc.name testUint8ClampedArrayFullFour003
     * @tc.desc Verify subarray yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour003() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = parent.subarray();
    assertEqual(3, sub.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0400
     * @tc.name testUint8ClampedArrayFullFour004
     * @tc.desc Verify indexOf arr.indexOf(5) equals 0 for array [5, 10, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 5});
    assertEqual(0, arr.indexOf(5));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0500
     * @tc.name testUint8ClampedArrayFullFour005
     * @tc.desc Verify indexOf arr.indexOf(99) equals -1 for array [5, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10});
    assertEqual(-1, arr.indexOf(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0600
     * @tc.name testUint8ClampedArrayFullFour006
     * @tc.desc Verify lastIndexOf last key equals 2 for array [5, 10, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 5});
    assertEqual(2, arr.lastIndexOf(5));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0700
     * @tc.name testUint8ClampedArrayFullFour007
     * @tc.desc Verify includes result is true for array [5, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10});
    assertTrue(arr.includes(5));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0800
     * @tc.name testUint8ClampedArrayFullFour008
     * @tc.desc Verify includes result is false for array [5, 10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10});
    assertFalse(arr.includes(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_0900
     * @tc.name testUint8ClampedArrayFullFour009
     * @tc.desc Verify find returns the first value greater than 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(2, arr.find((v) -> v > 1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1000
     * @tc.name testUint8ClampedArrayFullFour010
     * @tc.desc Verify find returns undefined when no value satisfies the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertNull(arr.find((v) -> v > 100));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1100
     * @tc.name testUint8ClampedArrayFullFour011
     * @tc.desc Verify findIndex returns -1 when no value satisfies the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertEqual(-1, arr.findIndex((v) -> v > 100));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1200
     * @tc.name testUint8ClampedArrayFullFour012
     * @tc.desc Verify with( length) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(3, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1300
     * @tc.name testUint8ClampedArrayFullFour013
     * @tc.desc Verify with( -length-1) RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(-4, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1400
     * @tc.name testUint8ClampedArrayFullFour014
     * @tc.desc Verify .set behavior for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    try {
    arr.set(new Uint8ClampedArray(new int[] {1, 2, 3}), 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1500
     * @tc.name testUint8ClampedArrayFullFour015
     * @tc.desc Verify byteOffset>byteLength RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour015() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 8, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1600
     * @tc.name testUint8ClampedArrayFullFour016
     * @tc.desc Verify byteOffset+length>byteLength RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour016() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 2, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1700
     * @tc.name testUint8ClampedArrayFullFour017
     * @tc.desc Verify reduce initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.reduce((a, b, index, array) ->  a + b);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1800
     * @tc.name testUint8ClampedArrayFullFour018
     * @tc.desc Verify reduceRight initialValue TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.reduceRight((a, b, index, array) ->  a + b);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_1900
     * @tc.name testUint8ClampedArrayFullFour019
     * @tc.desc Verify fill element at arr[2] equals 255 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(300);
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_2000
     * @tc.name testUint8ClampedArrayFullFour020
     * @tc.desc Verify constructor element [0] equals 128 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 127.5);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_FOUR_2100
     * @tc.name testUint8ClampedArrayFullFour021
     * @tc.desc Verify constructor element [0] equals 128 for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullFour021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 128.5);
    assertEqual(128, arr.get(0));
    }
}
