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
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayAtTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayAtTest extends BasTest {
    /**
     * Verify at(index) with required parameter present (1 parameter)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0100
     * @tc.name testUint8ArrayAt001
     * @tc.desc Verify at(index) with required parameter present (1 parameter)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Number result = arr.at(0);
    assertEqual(10, result);
    }

    /**
     * Verify at(2) returns the third element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0200
     * @tc.name testUint8ArrayAt002
     * @tc.desc Verify at(2) returns the third element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(30, arr.at(2));
    }

    /**
     * Verify at(4) returns the fifth element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0300
     * @tc.name testUint8ArrayAt003
     * @tc.desc Verify at(4) returns the fifth element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt003() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(50, arr.at(4));
    }

    /**
     * Verify at(5) equals length returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0400
     * @tc.name testUint8ArrayAt004
     * @tc.desc Verify at(5) equals length returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt004() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertNull(arr.at(5));
    }

    /**
     * Verify at(-6) negative out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0500
     * @tc.name testUint8ArrayAt005
     * @tc.desc Verify at(-6) negative out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertNull(arr.at(-6));
    }

    /**
     * Verify at(0x0) hex literal 0 returns the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0600
     * @tc.name testUint8ArrayAt006
     * @tc.desc Verify at(0x0) hex literal 0 returns the first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt006() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(10, arr.at(0x0));
    }

    /**
     * Verify at(0x1) hex literal 1 returns the second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0700
     * @tc.name testUint8ArrayAt007
     * @tc.desc Verify at(0x1) hex literal 1 returns the second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt007() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(20, arr.at(0x1));
    }

    /**
     * Verify at(0x4) hex literal 4 returns the last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0800
     * @tc.name testUint8ArrayAt008
     * @tc.desc Verify at(0x4) hex literal 4 returns the last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt008() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(50, arr.at(0x4));
    }

    /**
     * Verify at(0x5) hex literal out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_0900
     * @tc.name testUint8ArrayAt009
     * @tc.desc Verify at(0x5) hex literal out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertNull(arr.at(0x5));
    }

    /**
     * Verify at(0b0) binary literal 0 returns the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1000
     * @tc.name testUint8ArrayAt010
     * @tc.desc Verify at(0b0) binary literal 0 returns the first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(10, arr.at(0b0));
    }

    /**
     * Verify at(0b1) binary literal 1 returns the second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1100
     * @tc.name testUint8ArrayAt011
     * @tc.desc Verify at(0b1) binary literal 1 returns the second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt011() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(20, arr.at(0b1));
    }

    /**
     * Verify at(0b100) binary literal 4 returns the last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1200
     * @tc.name testUint8ArrayAt012
     * @tc.desc Verify at(0b100) binary literal 4 returns the last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt012() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(50, arr.at(0b100));
    }

    /**
     * Verify at(0o0) octal literal 0 returns the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1300
     * @tc.name testUint8ArrayAt013
     * @tc.desc Verify at(0o0) octal literal 0 returns the first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt013() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(10, arr.at(00));
    }

    /**
     * Verify at(0o1) octal literal 1 returns the second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1400
     * @tc.name testUint8ArrayAt014
     * @tc.desc Verify at(0o1) octal literal 1 returns the second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt014() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(20, arr.at(01));
    }

    /**
     * Verify at(0o4) octal literal 4 returns the fourth element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1500
     * @tc.name testUint8ArrayAt015
     * @tc.desc Verify at(0o4) octal literal 4 returns the fourth element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt015() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    assertEqual(50, arr.at(04));
    }

    /**
     * Verify single element array at(0) returns the only element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1600
     * @tc.name testUint8ArrayAt016
     * @tc.desc Verify single element array at(0) returns the only element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt016() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    assertEqual(42, arr.at(0));
    }

    /**
     * Verify single element array at(1) out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1700
     * @tc.name testUint8ArrayAt017
     * @tc.desc Verify single element array at(1) out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt017() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    assertNull(arr.at(1));
    }

    /**
     * Verify single element array at(-1) returns the only element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1800
     * @tc.name testUint8ArrayAt018
     * @tc.desc Verify single element array at(-1) returns the only element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt018() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    assertEqual(42, arr.at(-1));
    }

    /**
     * Verify single element array at(-2) negative out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_1900
     * @tc.name testUint8ArrayAt019
     * @tc.desc Verify single element array at(-2) negative out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt019() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    assertNull(arr.at(-2));
    }

    /**
     * Verify empty array at(0) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2000
     * @tc.name testUint8ArrayAt020
     * @tc.desc Verify empty array at(0) returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt020() {
    Uint8Array arr = new Uint8Array(0);
    assertNull(arr.at(0));
    }

    /**
     * Verify empty array at(-1) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2100
     * @tc.name testUint8ArrayAt021
     * @tc.desc Verify empty array at(-1) returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt021() {
    Uint8Array arr = new Uint8Array(0);
    assertNull(arr.at(-1));
    }

    /**
     * Verify two element array at(0) returns the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2200
     * @tc.name testUint8ArrayAt022
     * @tc.desc Verify two element array at(0) returns the first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt022() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200});
    assertEqual(100, arr.at(0));
    }

    /**
     * Verify two element array at(1) returns the second element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2300
     * @tc.name testUint8ArrayAt023
     * @tc.desc Verify two element array at(1) returns the second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt023() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200});
    assertEqual(200, arr.at(1));
    }

    /**
     * Verify two element array at(2) out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2400
     * @tc.name testUint8ArrayAt024
     * @tc.desc Verify two element array at(2) out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt024() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200});
    assertNull(arr.at(2));
    }

    /**
     * Verify two element array at(-3) negative out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2500
     * @tc.name testUint8ArrayAt025
     * @tc.desc Verify two element array at(-3) negative out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt025() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200});
    assertNull(arr.at(-3));
    }

    /**
     * Verify length 10 zero-filled array at(0) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2600
     * @tc.name testUint8ArrayAt026
     * @tc.desc Verify length 10 zero-filled array at(0) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt026() {
    Uint8Array arr = new Uint8Array(10);
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify length 10 zero-filled array at(9) returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2700
     * @tc.name testUint8ArrayAt027
     * @tc.desc Verify length 10 zero-filled array at(9) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt027() {
    Uint8Array arr = new Uint8Array(10);
    assertEqual(0, arr.at(9));
    }

    /**
     * Verify length 10 zero-filled array at(10) out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2800
     * @tc.name testUint8ArrayAt028
     * @tc.desc Verify length 10 zero-filled array at(10) out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt028() {
    Uint8Array arr = new Uint8Array(10);
    assertNull(arr.at(10));
    }

    /**
     * Verify length 10 zero-filled array at(-11) negative out of bounds returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_2900
     * @tc.name testUint8ArrayAt029
     * @tc.desc Verify length 10 zero-filled array at(-11) negative out of bounds returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt029() {
    Uint8Array arr = new Uint8Array(10);
    assertNull(arr.at(-11));
    }

    /**
     * Verify Uint8Array constructed from another Uint8Array at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3000
     * @tc.name testUint8ArrayAt030
     * @tc.desc Verify Uint8Array constructed from another Uint8Array at(0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt030() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array arr = new Uint8Array(src);
    assertEqual(10, arr.at(0));
    }

    /**
     * Verify Uint8Array constructed from another Uint8Array at(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3100
     * @tc.name testUint8ArrayAt031
     * @tc.desc Verify Uint8Array constructed from another Uint8Array at(2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt031() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array arr = new Uint8Array(src);
    assertEqual(30, arr.at(2));
    }

    /**
     * Verify Uint8Array constructed from another Uint8Array at(3) out of bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3200
     * @tc.name testUint8ArrayAt032
     * @tc.desc Verify Uint8Array constructed from another Uint8Array at(3) out of bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt032() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array arr = new Uint8Array(src);
    assertNull(arr.at(3));
    }

    /**
     * Verify Uint8Array constructed from ArrayBuffer at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3300
     * @tc.name testUint8ArrayAt033
     * @tc.desc Verify Uint8Array constructed from ArrayBuffer at(0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt033() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertEqual(10, arr.at(0));
    }

    /**
     * Verify Uint8Array constructed from ArrayBuffer at(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3400
     * @tc.name testUint8ArrayAt034
     * @tc.desc Verify Uint8Array constructed from ArrayBuffer at(2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt034() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertEqual(30, arr.at(2));
    }

    /**
     * Verify Uint8Array constructed from ArrayBuffer at(3) out of bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3500
     * @tc.name testUint8ArrayAt035
     * @tc.desc Verify Uint8Array constructed from ArrayBuffer at(3) out of bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt035() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertNull(arr.at(3));
    }

    /**
     * Verify Uint8Array constructed from number array at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3600
     * @tc.name testUint8ArrayAt036
     * @tc.desc Verify Uint8Array constructed from number array at(0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt036() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 300});
    assertEqual(100, arr.at(0));
    }

    /**
     * Verify Uint8Array constructed from number array at(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3700
     * @tc.name testUint8ArrayAt037
     * @tc.desc Verify Uint8Array constructed from number array at(2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt037() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 300});
    assertEqual(44, arr.at(2));
    }

    /**
     * Verify Uint8Array constructed from number array at(3) out of bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3800
     * @tc.name testUint8ArrayAt038
     * @tc.desc Verify Uint8Array constructed from number array at(3) out of bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt038() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 300});
    assertNull(arr.at(3));
    }

    /**
     * Verify Uint8Array constructed from length parameter at(0)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_3900
     * @tc.name testUint8ArrayAt039
     * @tc.desc Verify Uint8Array constructed from length parameter at(0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt039() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertEqual(10, arr.at(0));
    }

    /**
     * Verify Uint8Array constructed from length parameter at(2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4000
     * @tc.name testUint8ArrayAt040
     * @tc.desc Verify Uint8Array constructed from length parameter at(2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt040() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertEqual(30, arr.at(2));
    }

    /**
     * Verify Uint8Array constructed from length parameter at(3) out of bounds
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4100
     * @tc.name testUint8ArrayAt041
     * @tc.desc Verify Uint8Array constructed from length parameter at(3) out of bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt041() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertNull(arr.at(3));
    }

    /**
     * Verify Uint8Array constructed from empty array at(0) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4200
     * @tc.name testUint8ArrayAt042
     * @tc.desc Verify Uint8Array constructed from empty array at(0) returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt042() {
    Uint8Array arr = new Uint8Array(new int[] {});
    assertNull(arr.at(0));
    }

    /**
     * Verify Uint8Array constructed from empty array at(-1) returns undefined
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4300
     * @tc.name testUint8ArrayAt043
     * @tc.desc Verify Uint8Array constructed from empty array at(-1) returns undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt043() {
    Uint8Array arr = new Uint8Array(new int[] {});
    assertNull(arr.at(-1));
    }

    /**
     * Verify at(1) returns number type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4400
     * @tc.name testUint8ArrayAt044
     * @tc.desc Verify at(1) returns number type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt044() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Number result = arr.at(1);
    assertEqual(20, result);
    }

    /**
     * Verify at(2) returns number type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4500
     * @tc.name testUint8ArrayAt045
     * @tc.desc Verify at(2) returns number type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Number result = arr.at(2);
    assertEqual(30, result);
    }

    /**
     * Verify at(3) out of bounds returns undefined type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4600
     * @tc.name testUint8ArrayAt046
     * @tc.desc Verify at(3) out of bounds returns undefined type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt046() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Number result = arr.at(3);
    assertNull(result);
    }

    /**
     * Verify at(-4) negative out of bounds returns undefined type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4700
     * @tc.name testUint8ArrayAt047
     * @tc.desc Verify at(-4) negative out of bounds returns undefined type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Number result = arr.at(-4);
    assertNull(result);
    }

    /**
     * Verify at(0) on array with 0 returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4800
     * @tc.name testUint8ArrayAt048
     * @tc.desc Verify at(0) on array with 0 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt048() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify at(1) on array with 128 returns 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_4900
     * @tc.name testUint8ArrayAt049
     * @tc.desc Verify at(1) on array with 128 returns 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt049() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    assertEqual(128, arr.at(1));
    }

    /**
     * Verify at(2) on array with 255 returns 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5000
     * @tc.name testUint8ArrayAt050
     * @tc.desc Verify at(2) on array with 255 returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt050() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    assertEqual(255, arr.at(2));
    }

    /**
     * Verify at(0) on array with 1 returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5100
     * @tc.name testUint8ArrayAt051
     * @tc.desc Verify at(0) on array with 1 returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt051() {
    Uint8Array arr = new Uint8Array(new int[] {1, 254});
    assertEqual(1, arr.at(0));
    }

    /**
     * Verify at(1) on array with 254 returns 254
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5200
     * @tc.name testUint8ArrayAt052
     * @tc.desc Verify at(1) on array with 254 returns 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt052() {
    Uint8Array arr = new Uint8Array(new int[] {1, 254});
    assertEqual(254, arr.at(1));
    }

    /**
     * Verify at(0) on array with 255 returns 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5300
     * @tc.name testUint8ArrayAt053
     * @tc.desc Verify at(0) on array with 255 returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt053() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    assertEqual(255, arr.at(0));
    }

    /**
     * Verify at(-1) on array with 255 returns 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5400
     * @tc.name testUint8ArrayAt054
     * @tc.desc Verify at(-1) on array with 255 returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt054() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    assertEqual(255, arr.at(-1));
    }

    /**
     * Verify at(0) on array with 0 returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5500
     * @tc.name testUint8ArrayAt055
     * @tc.desc Verify at(0) on array with 0 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt055() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    assertEqual(0, arr.at(0));
    }

    /**
     * Verify at(-1) on array with 0 returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5600
     * @tc.name testUint8ArrayAt056
     * @tc.desc Verify at(-1) on array with 0 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt056() {
    Uint8Array arr = new Uint8Array(new int[] {0});
    assertEqual(0, arr.at(-1));
    }

    /**
     * Verify at(0) on array with 127 returns 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5700
     * @tc.name testUint8ArrayAt057
     * @tc.desc Verify at(0) on array with 127 returns 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt057() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    assertEqual(127, arr.at(0));
    }

    /**
     * Verify at(-1) on array with 127 returns 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5800
     * @tc.name testUint8ArrayAt058
     * @tc.desc Verify at(-1) on array with 127 returns 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt058() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    assertEqual(127, arr.at(-1));
    }

    /**
     * Verify at(0) on array with 128 returns 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_5900
     * @tc.name testUint8ArrayAt059
     * @tc.desc Verify at(0) on array with 128 returns 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt059() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    assertEqual(128, arr.at(0));
    }

    /**
     * Verify at(-1) on array with 128 returns 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_6000
     * @tc.name testUint8ArrayAt060
     * @tc.desc Verify at(-1) on array with 128 returns 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt060() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    assertEqual(128, arr.at(-1));
    }

    /**
     * Verify at(0) on array with 1 returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_6100
     * @tc.name testUint8ArrayAt061
     * @tc.desc Verify at(0) on array with 1 returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt061() {
    Uint8Array arr = new Uint8Array(new int[] {1});
    assertEqual(1, arr.at(0));
    }

    /**
     * Verify at(-1) on array with 1 returns 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_AT_6200
     * @tc.name testUint8ArrayAt062
     * @tc.desc Verify at(-1) on array with 1 returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAt062() {
    Uint8Array arr = new Uint8Array(new int[] {1});
    assertEqual(1, arr.at(-1));
    }
}
