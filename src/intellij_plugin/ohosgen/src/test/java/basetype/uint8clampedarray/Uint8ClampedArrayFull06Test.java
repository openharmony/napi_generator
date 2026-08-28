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

import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull06Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull06Test extends BasTest {
    /**
     * Verify values() iterator is done for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0100
     * @tc.name testUint8ClampedArrayFullSix001
     * @tc.desc Verify values() iterator is done for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertTrue(r.done);
    }

    /**
     * Verify entries() iterator is done for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0200
     * @tc.name testUint8ClampedArrayFullSix002
     * @tc.desc Verify entries() iterator is done for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray.EntriesIterator it = arr.entries();
    EntryResult r = it.next();
    assertTrue(r.done);
    }

    /**
     * Verify keys() iterator is done after consuming element for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0300
     * @tc.name testUint8ClampedArrayFullSix003
     * @tc.desc Verify keys() iterator is done after consuming element for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray.KeyIterator it = arr.keys();
    IteratorResult r1 = it.next();
    assertEqual(0, r1.value);
    assertFalse(r1.done);
    IteratorResult r2 = it.next();
    assertNull(r2.value);
    assertTrue(r2.done);
    }

    /**
     * Verify values() iterator value is 99 for array [99]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0400
     * @tc.name testUint8ClampedArrayFullSix004
     * @tc.desc Verify values() iterator value is 99 for array [99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertEqual(99, r.value);
    assertFalse(r.done);
    }

    /**
     * Verify fill element at arr[0] equals 0 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0500
     * @tc.name testUint8ClampedArrayFullSix005
     * @tc.desc Verify fill element at arr[0] equals 0 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    arr.fill(-1e9);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    /**
     * Verify with throws RangeError for index 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0600
     * @tc.name testUint8ClampedArrayFullSix006
     * @tc.desc Verify with throws RangeError for index 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.with(10, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify .set behavior for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_SIX_0700
     * @tc.name testUint8ClampedArrayFullSix007
     * @tc.desc Verify .set behavior for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullSix007() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {10, 20, 30});
    List<Number> src = java.util.Arrays.asList(1, 2);
    try {
    dst.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
