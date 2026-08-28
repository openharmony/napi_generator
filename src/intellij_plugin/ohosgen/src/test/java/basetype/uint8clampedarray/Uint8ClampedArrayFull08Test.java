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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFull08Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFull08Test extends BasTest {
    /**
     * Verify findIndex idx equals 1 for array [5, 10, 15]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0100
     * @tc.name testUint8ClampedArrayFullEight001
     * @tc.desc Verify findIndex idx equals 1 for array [5, 10, 15]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    int target = 10;
    int idx = arr.findIndex((v, i, array) -> v == target);
    assertEqual(1, idx);
    }

    /**
     * Verify indexed set arr[0]=50 on length-3 array returns same value via get
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0200
     * @tc.name testUint8ClampedArrayFullEight002
     * @tc.desc Verify indexed set arr[0]=50 on length-3 array returns same value via get
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 50);
    assertEqual(50, arr.get(0));
    }

    /**
     * Verify indexed set overwrites arr[0] repeatedly keeping last value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0300
     * @tc.name testUint8ClampedArrayFullEight003
     * @tc.desc Verify indexed set overwrites arr[0] repeatedly keeping last value 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1);
    arr.set(0, 2);
    arr.set(0, 3);
    assertEqual(3, arr.get(0));
    }

    /**
     * Verify forEach observes in-loop mutation arr[2]=99 from first iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0400
     * @tc.name testUint8ClampedArrayFullEight004
     * @tc.desc Verify forEach observes in-loop mutation arr[2]=99 from first iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] last = {0};
    arr.forEach((v, i, array) -> {
        if (i == 0) {
            arr.set(2, 99);
        }
            last[0] = v;
    });
    assertEqual(99, last[0]);
    }

    /**
     * Verify constructor sum equals 92 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0500
     * @tc.name testUint8ClampedArrayFullEight005
     * @tc.desc Verify constructor sum equals 92 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(1, 88);
    int sum = 0;
    for (Integer v : arr.values()) {
        sum += v;
    }
    assertEqual(92, sum);
    }

    /**
     * Verify constructing length-5 array yields length 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0600
     * @tc.name testUint8ClampedArrayFullEight006
     * @tc.desc Verify constructing length-5 array yields length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    arr.set(0, 1);
    arr.set(4, 5);
    assertEqual(5, arr.length());
    }

    /**
     * Verify constructor arr.$_get(1) equals 77 for length-3 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0700
     * @tc.name testUint8ClampedArrayFullEight007
     * @tc.desc Verify constructor arr.$_get(1) equals 77 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(1, 77);
    assertEqual(77, arr.get(1));
    }

    /**
     * Verify constructor throws RangeError for [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0800
     * @tc.name testUint8ClampedArrayFullEight008
     * @tc.desc Verify constructor throws RangeError for [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(100, 50);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructor element [4] equals 200 for length-5 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_0900
     * @tc.name testUint8ClampedArrayFullEight009
     * @tc.desc Verify constructor element [4] equals 200 for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    arr.set(4, 200);
    assertEqual(200, arr.get(4));
    }

    /**
     * Verify slice(2) on [1, 2, 3, 4] returns [3, 4] with correct length and content
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_1000
     * @tc.name testUint8ClampedArrayFullEight010
     * @tc.desc Verify slice(2) on [1, 2, 3, 4] returns [3, 4] with correct length and content
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(2);
    assertEqual(2, r.length());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    }

    /**
     * Verify forEach propagates Error thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_1100
     * @tc.name testUint8ClampedArrayFullEight011
     * @tc.desc Verify forEach propagates Error thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.forEach((v, i, array) -> {
    BasTest.throwTestError("cb");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify map propagates Error thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_1200
     * @tc.name testUint8ClampedArrayFullEight012
     * @tc.desc Verify map propagates Error thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.map((v, i, array) -> {
    return BasTest.throwTestError("cb");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify filter propagates Error thrown by its callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FULL_EIGHT_1300
     * @tc.name testUint8ClampedArrayFullEight013
     * @tc.desc Verify filter propagates Error thrown by its callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFullEight013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.filter((v, i, array) -> {
    return BasTest.throwTestError("cb");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
}
