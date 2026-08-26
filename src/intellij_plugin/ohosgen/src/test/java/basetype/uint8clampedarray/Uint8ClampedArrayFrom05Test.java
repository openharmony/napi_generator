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
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFrom05Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFrom05Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FIVE_0100
     * @tc.name testUint8ClampedArrayFromFive001
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 2 for from([1, 2, 3] as Array<n)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFive001() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2, 3}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v + 1);
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FIVE_0200
     * @tc.name testUint8ClampedArrayFromFive002
     * @tc.desc Verify -from(Uint8ClampedArray, mapfn) k
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFive002() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {10, 20, 30}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v + k);
    assertEqual(10, r.get(0));
    assertEqual(21, r.get(1));
    assertEqual(32, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FIVE_0300
     * @tc.name testUint8ClampedArrayFromFive003
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from([1, 2, 3, 4] as Arra)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFive003() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = r.subarray(1, 3);
    assertEqual(2, sub.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FIVE_0400
     * @tc.name testUint8ClampedArrayFromFive004
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 123 for from([0, 0, 0] as Array<n)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFive004() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {0, 0, 0});
    r.fill(123);
    assertEqual(123, r.get(0));
    assertEqual(123, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FIVE_0500
     * @tc.name testUint8ClampedArrayFromFive005
     * @tc.desc Verify -from byteLength length BYTES_PER_ELEMENT
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFive005() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2, 3, 4, 5});
    assertEqual(r.length() * r.BYTES_PER_ELEMENT, r.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FIVE_0600
     * @tc.name testUint8ClampedArrayFromFive006
     * @tc.desc Verify Uint8ClampedArray.from yields byteLength r.length for from([1, 2, 3] as Array<n)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFive006() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2, 3}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v);
    assertEqual(r.length(), r.byteLength());
    }
}
