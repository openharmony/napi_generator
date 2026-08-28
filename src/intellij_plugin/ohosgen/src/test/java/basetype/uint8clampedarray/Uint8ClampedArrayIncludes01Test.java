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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayIncludes01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayIncludes01Test extends BasTest {
    /**
     * Verify includes() searchElement=2 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0100
     * @tc.name testUint8ClampedArrayIncludesOne001
     * @tc.desc Verify includes() searchElement=2 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertTrue(arr.includes(2));
    }

    /**
     * Verify includes() searchElement=99 false
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0200
     * @tc.name testUint8ClampedArrayIncludesOne002
     * @tc.desc Verify includes() searchElement=99 false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertFalse(arr.includes(99));
    }

    /**
     * Verify includes() searchElement=3 fromIndex=1 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0300
     * @tc.name testUint8ClampedArrayIncludesOne003
     * @tc.desc Verify includes() searchElement=3 fromIndex=1 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    assertTrue(arr.includes(3, 1));
    }

    /**
     * Verify includes() searchElement=1 fromIndex=1 false
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0400
     * @tc.name testUint8ClampedArrayIncludesOne004
     * @tc.desc Verify includes() searchElement=1 fromIndex=1 false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    assertFalse(arr.includes(1, 1));
    }

    /**
     * Verify includes result is true for array [5, 6, 7]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0500
     * @tc.name testUint8ClampedArrayIncludesOne005
     * @tc.desc Verify includes result is true for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    assertTrue(arr.includes(5, 0));
    }

    /**
     * Verify includes result is true for array [5, 6, 7]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0600
     * @tc.name testUint8ClampedArrayIncludesOne006
     * @tc.desc Verify includes result is true for array [5, 6, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    assertTrue(arr.includes(5, 0));
    }

    /**
     * Verify includes result is true for array [0, 1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0700
     * @tc.name testUint8ClampedArrayIncludesOne007
     * @tc.desc Verify includes result is true for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertTrue(arr.includes(0));
    }

    /**
     * Verify includes result is false for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0800
     * @tc.name testUint8ClampedArrayIncludesOne008
     * @tc.desc Verify includes result is false for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertFalse(arr.includes(0));
    }

    /**
     * Verify includes() searchElement=255 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_0900
     * @tc.name testUint8ClampedArrayIncludesOne009
     * @tc.desc Verify includes() searchElement=255 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 255});
    assertTrue(arr.includes(255));
    }

    /**
     * Verify includes result is false for array [100, 200, 254]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1000
     * @tc.name testUint8ClampedArrayIncludesOne010
     * @tc.desc Verify includes result is false for array [100, 200, 254]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 254});
    assertFalse(arr.includes(255));
    }

    /**
     * Verify includes() searchElement=127 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1100
     * @tc.name testUint8ClampedArrayIncludesOne011
     * @tc.desc Verify includes() searchElement=127 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    assertTrue(arr.includes(127));
    }

    /**
     * Verify includes result is true for array [126, 127, 128]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1200
     * @tc.name testUint8ClampedArrayIncludesOne012
     * @tc.desc Verify includes result is true for array [126, 127, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    assertTrue(arr.includes(128));
    }

    /**
     * Verify searchElement=256 is not converted to 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1300
     * @tc.name testUint8ClampedArrayIncludesOne013
     * @tc.desc Verify searchElement=256 is not converted to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 256});
    assertFalse(arr.includes(256));
    }

    /**
     * Verify searchElement=-1 is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1400
     * @tc.name testUint8ClampedArrayIncludesOne014
     * @tc.desc Verify searchElement=-1 is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertFalse(arr.includes(-1));
    }

    /**
     * Verify searchElement=1e9 is not converted to 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1500
     * @tc.name testUint8ClampedArrayIncludesOne015
     * @tc.desc Verify searchElement=1e9 is not converted to 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 255});
    assertFalse(arr.includes(1e9));
    }

    /**
     * Verify searchElement=-Infinity is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1600
     * @tc.name testUint8ClampedArrayIncludesOne016
     * @tc.desc Verify searchElement=-Infinity is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    assertFalse(arr.includes(-Double.POSITIVE_INFINITY));
    }

    /**
     * Verify includes() searchElement=2 true, array unchanged
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1700
     * @tc.name testUint8ClampedArrayIncludesOne017
     * @tc.desc Verify includes() searchElement=2 true, array unchanged
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertTrue(arr.includes(2));
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    /**
     * Verify searchElement=0.4 is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1800
     * @tc.name testUint8ClampedArrayIncludesOne018
     * @tc.desc Verify searchElement=0.4 is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    assertFalse(arr.includes(0.4));
    }

    /**
     * Verify searchElement=NaN is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_1900
     * @tc.name testUint8ClampedArrayIncludesOne019
     * @tc.desc Verify searchElement=NaN is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertFalse(arr.includes(Double.NaN));
    }

    /**
     * Verify includes result is true for array [0, 1, 2]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2000
     * @tc.name testUint8ClampedArrayIncludesOne020
     * @tc.desc Verify includes result is true for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    assertTrue(arr.includes(-0));
    }

    /**
     * Verify includes() searchElement=0xFF true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2100
     * @tc.name testUint8ClampedArrayIncludesOne021
     * @tc.desc Verify includes() searchElement=0xFF true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 255});
    assertTrue(arr.includes(0xFF));
    }

    /**
     * Verify includes() searchElement=0x00 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2200
     * @tc.name testUint8ClampedArrayIncludesOne022
     * @tc.desc Verify includes() searchElement=0x00 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    assertTrue(arr.includes(0x00));
    }

    /**
     * Verify includes() searchElement=0x7F true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2300
     * @tc.name testUint8ClampedArrayIncludesOne023
     * @tc.desc Verify includes() searchElement=0x7F true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128});
    assertTrue(arr.includes(0x7F));
    }

    /**
     * Verify includes() searchElement=0o17 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2400
     * @tc.name testUint8ClampedArrayIncludesOne024
     * @tc.desc Verify includes() searchElement=0o17 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {15, 16, 17});
    assertTrue(arr.includes(017));
    }

    /**
     * Verify includes() searchElement=0o377 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2500
     * @tc.name testUint8ClampedArrayIncludesOne025
     * @tc.desc Verify includes() searchElement=0o377 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 255});
    assertTrue(arr.includes(0377));
    }

    /**
     * Verify includes() searchElement=0b11111111 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2600
     * @tc.name testUint8ClampedArrayIncludesOne026
     * @tc.desc Verify includes() searchElement=0b11111111 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    assertTrue(arr.includes(0b11111111));
    }

    /**
     * Verify includes() searchElement=0b0 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2700
     * @tc.name testUint8ClampedArrayIncludesOne027
     * @tc.desc Verify includes() searchElement=0b0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    assertTrue(arr.includes(0b0));
    }

    /**
     * Verify includes() searchElement=1e2 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2800
     * @tc.name testUint8ClampedArrayIncludesOne028
     * @tc.desc Verify includes() searchElement=1e2 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 100, 101});
    assertTrue(arr.includes(1e2));
    }

    /**
     * Verify includes() searchElement=2.55e2 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_2900
     * @tc.name testUint8ClampedArrayIncludesOne029
     * @tc.desc Verify includes() searchElement=2.55e2 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    assertTrue(arr.includes(2.55e2));
    }

    /**
     * Verify includes result is true for array [0, 10, 20]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3000
     * @tc.name testUint8ClampedArrayIncludesOne030
     * @tc.desc Verify includes result is true for array [0, 10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 10, 20});
    int v = 0;
    assertTrue(arr.includes(v));
    }

    /**
     * Verify includes result is true for array [126, 127, 128]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3100
     * @tc.name testUint8ClampedArrayIncludesOne031
     * @tc.desc Verify includes result is true for array [126, 127, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {126, 127, 128});
    int v = 127;
    assertTrue(arr.includes(v));
    }

    /**
     * Verify byte searchElement=-1 is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3200
     * @tc.name testUint8ClampedArrayIncludesOne032
     * @tc.desc Verify byte searchElement=-1 is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    int v = -1;
    assertFalse(arr.includes(v));
    }

    /**
     * Verify byte searchElement=-128 is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3300
     * @tc.name testUint8ClampedArrayIncludesOne033
     * @tc.desc Verify byte searchElement=-128 is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 50});
    int v = -128;
    assertFalse(arr.includes(v));
    }

    /**
     * Verify byte searchElement=-50 is not converted to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3400
     * @tc.name testUint8ClampedArrayIncludesOne034
     * @tc.desc Verify byte searchElement=-50 is not converted to 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 100});
    int v = -50;
    assertFalse(arr.includes(v));
    }

    /**
     * Verify includes result is false for array [1, 2, 3]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3500
     * @tc.name testUint8ClampedArrayIncludesOne035
     * @tc.desc Verify includes result is false for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 10;
    assertFalse(arr.includes(v));
    }

    /**
     * Verify includes result is false for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3600
     * @tc.name testUint8ClampedArrayIncludesOne036
     * @tc.desc Verify includes result is false for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertFalse(arr.includes(10, 1));
    }

    /**
     * Verify includes result is true for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3700
     * @tc.name testUint8ClampedArrayIncludesOne037
     * @tc.desc Verify includes result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(20, 1));
    }

    /**
     * Verify includes result is true for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3800
     * @tc.name testUint8ClampedArrayIncludesOne038
     * @tc.desc Verify includes result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(30, 2));
    }

    /**
     * Verify includes result is true for array [10, 20, 30, 40]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_3900
     * @tc.name testUint8ClampedArrayIncludesOne039
     * @tc.desc Verify includes result is true for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    assertTrue(arr.includes(40, 3));
    }

    /**
     * Verify includes result is false for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4000
     * @tc.name testUint8ClampedArrayIncludesOne040
     * @tc.desc Verify includes result is false for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertFalse(arr.includes(10, 3));
    }

    /**
     * Verify includes result is false for array [10, 20]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4100
     * @tc.name testUint8ClampedArrayIncludesOne041
     * @tc.desc Verify includes result is false for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    assertFalse(arr.includes(10, 2147483647));
    }

    /**
     * Verify includes() searchElement=10 fromIndex=0x7FFFFFFF false
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4200
     * @tc.name testUint8ClampedArrayIncludesOne042
     * @tc.desc Verify includes() searchElement=10 fromIndex=0x7FFFFFFF false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    assertFalse(arr.includes(10, 0x7FFFFFFF));
    }

    /**
     * Verify includes result is true for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4300
     * @tc.name testUint8ClampedArrayIncludesOne043
     * @tc.desc Verify includes result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(30, -1));
    }

    /**
     * Verify includes result is false for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4400
     * @tc.name testUint8ClampedArrayIncludesOne044
     * @tc.desc Verify includes result is false for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertFalse(arr.includes(10, -1));
    }

    /**
     * Verify includes result is true for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4500
     * @tc.name testUint8ClampedArrayIncludesOne045
     * @tc.desc Verify includes result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(20, -2));
    }

    /**
     * Verify includes() searchElement=10 fromIndex=-3 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4600
     * @tc.name testUint8ClampedArrayIncludesOne046
     * @tc.desc Verify includes() searchElement=10 fromIndex=-3 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(10, -3));
    }

    /**
     * Verify includes result is true for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4700
     * @tc.name testUint8ClampedArrayIncludesOne047
     * @tc.desc Verify includes result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(30, -3));
    }

    /**
     * Verify includes result is true for array [10, 20, 30]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4800
     * @tc.name testUint8ClampedArrayIncludesOne048
     * @tc.desc Verify includes result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertTrue(arr.includes(10, -4));
    }

    /**
     * Verify includes result is true for array [42]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_4900
     * @tc.name testUint8ClampedArrayIncludesOne049
     * @tc.desc Verify includes result is true for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    assertTrue(arr.includes(42, -1));
    }

    /**
     * Verify includes result is true for array [42]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5000
     * @tc.name testUint8ClampedArrayIncludesOne050
     * @tc.desc Verify includes result is true for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    assertTrue(arr.includes(42, 0));
    }

    /**
     * Verify includes result is false for array [42]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5100
     * @tc.name testUint8ClampedArrayIncludesOne051
     * @tc.desc Verify includes result is false for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    assertFalse(arr.includes(42, 1));
    }

    /**
     * Verify includes result is true for array [7, 8, 9]
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5200
     * @tc.name testUint8ClampedArrayIncludesOne052
     * @tc.desc Verify includes result is true for array [7, 8, 9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    assertTrue(arr.includes(7));
    }

    /**
     * Verify includes result is false for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5300
     * @tc.name testUint8ClampedArrayIncludesOne053
     * @tc.desc Verify includes result is false for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertFalse(arr.includes(0));
    }

    /**
     * Verify includes() searchElement=255 in 0..255 array true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5400
     * @tc.name testUint8ClampedArrayIncludesOne054
     * @tc.desc Verify includes() searchElement=255 in 0..255 array true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne054() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
        src.add(i);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertTrue(arr.includes(255));
    }

    /**
     * Verify includes() searchElement=0 in zero-filled array length=1024 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5500
     * @tc.name testUint8ClampedArrayIncludesOne055
     * @tc.desc Verify includes() searchElement=0 in zero-filled array length=1024 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    assertTrue(arr.includes(0));
    }

    /**
     * Verify includes() searchElement=5 fromIndex=3 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5600
     * @tc.name testUint8ClampedArrayIncludesOne056
     * @tc.desc Verify includes() searchElement=5 fromIndex=3 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 5, 5});
    assertTrue(arr.includes(5, 3));
    }

    /**
     * Verify includes() searchElement=10 fromIndex=1 true
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_INCLUDES_ONE_5700
     * @tc.name testUint8ClampedArrayIncludesOne057
     * @tc.desc Verify includes() searchElement=10 fromIndex=1 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayIncludesOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 10, 20});
    assertTrue(arr.includes(10, 1));
    }
}
