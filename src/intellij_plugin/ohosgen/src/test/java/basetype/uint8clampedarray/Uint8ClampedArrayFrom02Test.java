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
import basetype.common.Uint8ClampedArray;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFrom02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFrom02Test extends BasTest {
    /**
     * Verify Uint8ClampedArray.from yields byteOffset 0 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0100
     * @tc.name testUint8ClampedArrayFromTwo001
     * @tc.desc Verify Uint8ClampedArray.from yields byteOffset 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo001() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify Uint8ClampedArray.from yields byteLength 5 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0200
     * @tc.name testUint8ClampedArrayFromTwo002
     * @tc.desc Verify Uint8ClampedArray.from yields byteLength 5 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo002() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(5, arr.byteLength());
    }

    /**
     * Verify Uint8ClampedArray.from([1, 2, 3]) produces correct length, byteLength and elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0300
     * @tc.name testUint8ClampedArrayFromTwo003
     * @tc.desc Verify Uint8ClampedArray.from([1, 2, 3]) produces correct length, byteLength and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo003() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(3, arr.length());
    assertEqual(3, arr.byteLength());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify Uint8ClampedArray.from element at src[0] equals 1 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0400
     * @tc.name testUint8ClampedArrayFromTwo004
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 1 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo004() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    arr.set(0, 99);
    assertEqual(1, src.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at src[0] equals 10.0 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0500
     * @tc.name testUint8ClampedArrayFromTwo005
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 10.0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo005() {
    double[] src = new double[] {10.0, 20.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    arr.set(0, 88);
    assertEqual(10.0, src[0]);
    }

    /**
     * Verify Uint8ClampedArray.from yields length set.size for from(set)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0600
     * @tc.name testUint8ClampedArrayFromTwo006
     * @tc.desc Verify Uint8ClampedArray.from yields length set.size for from(set)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo006() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    set.add(2.0);
    set.add(3.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(set.size(), arr.length());
    }

    /**
     * Verify two from(src) calls produce distinct array objects
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0700
     * @tc.name testUint8ClampedArrayFromTwo007
     * @tc.desc Verify two from(src) calls produce distinct array objects
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo007() {
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray a1 = Uint8ClampedArray.from(src);
    Uint8ClampedArray a2 = Uint8ClampedArray.from(src);
    assertNotEqual(a2, a1);
    }

    /**
     * Verify Uint8ClampedArray.from element at a1[0] equals a2[0] for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0800
     * @tc.name testUint8ClampedArrayFromTwo008
     * @tc.desc Verify Uint8ClampedArray.from element at a1[0] equals a2[0] for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo008() {
    List<Number> src = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray a1 = Uint8ClampedArray.from(src);
    Uint8ClampedArray a2 = Uint8ClampedArray.from(src);
    assertEqual(a2.get(0).intValue(), a1.get(0));
    assertEqual(a2.get(1).intValue(), a1.get(1));
    }

    /**
     * Verify Uint8ClampedArray.from propagates Error thrown by mapfn on second call for Set input
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_0900
     * @tc.name testUint8ClampedArrayFromTwo009
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn on second call for Set input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo009() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    set.add(2.0);
    try {
    Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    if (k == 1) {
    return BasTest.throwTestError("second call");
    }
    return v;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Uint8ClampedArray.from propagates Error thrown by mapfn on first call for Set input
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1000
     * @tc.name testUint8ClampedArrayFromTwo010
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn on first call for Set input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo010() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    set.add(2.0);
    set.add(3.0);
    int[] called = {0};
    try {
    Uint8ClampedArray.from(set, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    called[0] = called[0] + 1;
    return BasTest.throwTestError("stop");
        });
    fail();
    } catch (Error e) {
        assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1100
     * @tc.name testUint8ClampedArrayFromTwo011
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo011() {
    List<Number> src = java.util.Arrays.asList(99999);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1200
     * @tc.name testUint8ClampedArrayFromTwo012
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo012() {
    double[] src = new double[] {300.7};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1300
     * @tc.name testUint8ClampedArrayFromTwo013
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo013() {
    List<Number> src = java.util.Arrays.asList(1000000);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Iterable<number> NaN clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1400
     * @tc.name testUint8ClampedArrayFromTwo014
     * @tc.desc Verify Iterable<number> NaN clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo014() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(Double.NaN);
    set.add(100.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(0, arr.get(0));
    assertEqual(100, arr.get(1));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(set, (v: number, k:)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1500
     * @tc.name testUint8ClampedArrayFromTwo015
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(set, (v: number, k:)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo015() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(
        set,
        (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 1e10);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k:)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1600
     * @tc.name testUint8ClampedArrayFromTwo016
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(set, (v: number, k:)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo016() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(
        set,
        (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> -1e10);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Uint8ClampedArray.from(Set{1, 2}) produces correct length, byteLength and elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1700
     * @tc.name testUint8ClampedArrayFromTwo017
     * @tc.desc Verify Uint8ClampedArray.from(Set{1, 2}) produces correct length, byteLength and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo017() {
    Set<Number> set = new LinkedHashSet<>();
    set.add(1.0);
    set.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(set);
    assertEqual(2, arr.length());
    assertEqual(2, arr.byteLength());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    /**
     * Verify from(ArrayLike<number> [10, 20]) produces correct length, byteLength and elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1800
     * @tc.name testUint8ClampedArrayFromTwo018
     * @tc.desc Verify from(ArrayLike<number> [10, 20]) produces correct length, byteLength and elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo018() {
    List<Number> src = java.util.Arrays.asList(10, 20);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(2, arr.length());
    assertEqual(2, arr.byteLength());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    }

    /**
     * Verify Uint8ClampedArray.from yields byteOffset 0 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_1900
     * @tc.name testUint8ClampedArrayFromTwo019
     * @tc.desc Verify Uint8ClampedArray.from yields byteOffset 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo019() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify Uint8ClampedArray.from yields byteLength parent.byteLength for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_2000
     * @tc.name testUint8ClampedArrayFromTwo020
     * @tc.desc Verify Uint8ClampedArray.from yields byteLength parent.byteLength for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo020() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    assertEqual(parent.byteLength(), arr.byteLength());
    }

    /**
     * Verify from(subarray) produces independent buffer from parent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_2100
     * @tc.name testUint8ClampedArrayFromTwo021
     * @tc.desc Verify from(subarray) produces independent buffer from parent
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo021() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    Uint8ClampedArray arr = Uint8ClampedArray.from(sub);
    assertNotEqual(parent.buffer(), arr.buffer());
    }

    /**
     * Verify from Uint8ClampedArray buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_TWO_2200
     * @tc.name testUint8ClampedArrayFromTwo022
     * @tc.desc Verify from Uint8ClampedArray buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromTwo022() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray arr = Uint8ClampedArray.from(parent);
    parent.set(1, 99);
    assertEqual(20, arr.get(1));
    }
}
