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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayEvery01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayEvery01Test extends BasTest {
    /**
     * Verify predicate always-true arity 3 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0100
     * @tc.name testUint8ClampedArrayEveryOne001
     * @tc.desc Verify predicate always-true arity 3 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [2, 4, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0200
     * @tc.name testUint8ClampedArrayEveryOne002
     * @tc.desc Verify every result is true for array [2, 4, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 4, 6});
    boolean r = arr.every((e, i, a) -> e % 2 == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [0, 1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0300
     * @tc.name testUint8ClampedArrayEveryOne003
     * @tc.desc Verify every result is true for array [0, 1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3});
    boolean r = arr.every((e, i, a) -> e == i);
    assertTrue(r);
    }

    /**
     * Verify predicate 3 element/index/array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0400
     * @tc.name testUint8ClampedArrayEveryOne004
     * @tc.desc Verify predicate 3 element/index/array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    boolean r = arr.every((e, i, a) -> a.length() == 3);
    assertTrue(r);
    }

    /**
     * Verify predicate always-true every true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0500
     * @tc.name testUint8ClampedArrayEveryOne005
     * @tc.desc Verify predicate always-true every true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 50, 100, 200});
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    }

    /**
     * Verify every result is false for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0600
     * @tc.name testUint8ClampedArrayEveryOne006
     * @tc.desc Verify every result is false for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> false);
    assertFalse(r);
    }

    /**
     * Verify every result is true for array [1, 2, 3, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0700
     * @tc.name testUint8ClampedArrayEveryOne007
     * @tc.desc Verify every result is true for array [1, 2, 3, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 255});
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every result is false for array [1, 0, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0800
     * @tc.name testUint8ClampedArrayEveryOne008
     * @tc.desc Verify every result is false for array [1, 0, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0, 3});
    boolean r = arr.every((e, i, a) -> e > 0);
    assertFalse(r);
    }

    /**
     * Verify predicate element>=0 clamp true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_0900
     * @tc.name testUint8ClampedArrayEveryOne009
     * @tc.desc Verify predicate element>=0 clamp true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 128, 255});
    boolean r = arr.every((e, i, a) -> e >= 0);
    assertTrue(r);
    }

    /**
     * Verify predicate element<=255 clamp true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1000
     * @tc.name testUint8ClampedArrayEveryOne010
     * @tc.desc Verify predicate element<=255 clamp true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 254, 255});
    boolean r = arr.every((e, i, a) -> e <= 255);
    assertTrue(r);
    }

    /**
     * Verify predicate element === 0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1100
     * @tc.name testUint8ClampedArrayEveryOne011
     * @tc.desc Verify predicate element === 0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify predicate element === 255 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1200
     * @tc.name testUint8ClampedArrayEveryOne012
     * @tc.desc Verify predicate element === 255 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [128, 200, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1300
     * @tc.name testUint8ClampedArrayEveryOne013
     * @tc.desc Verify every result is true for array [128, 200, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 200, 255});
    boolean r = arr.every((e, i, a) -> e >= 128);
    assertTrue(r);
    }

    /**
     * Verify predicate element>=128 127 false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1400
     * @tc.name testUint8ClampedArrayEveryOne014
     * @tc.desc Verify predicate element>=128 127 false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 127, 255});
    boolean r = arr.every((e, i, a) -> e >= 128);
    assertFalse(r);
    }

    /**
     * Verify every predicate e%2===0 all even true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1500
     * @tc.name testUint8ClampedArrayEveryOne015
     * @tc.desc Verify every predicate e%2===0 all even true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 2, 4, 254});
    boolean r = arr.every((e, i, a) -> e % 2 == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is false for array [0, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1600
     * @tc.name testUint8ClampedArrayEveryOne016
     * @tc.desc Verify every result is false for array [0, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> e % 2 == 0);
    assertFalse(r);
    }

    /**
     * Verify every predicate e%2===1 all odd true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1700
     * @tc.name testUint8ClampedArrayEveryOne017
     * @tc.desc Verify every predicate e%2===1 all odd true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 5, 255});
    boolean r = arr.every((e, i, a) -> e % 2 == 1);
    assertTrue(r);
    }

    /**
     * Verify every predicate matches boundary values 0, 128, 255 and visits all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1800
     * @tc.name testUint8ClampedArrayEveryOne018
     * @tc.desc Verify every predicate matches boundary values 0, 128, 255 and visits all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 128, 255});
    int[] callCount = {0};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        return e == 0 || e == 128 || e == 255;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify predicate element>=0 && element<=255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_1900
     * @tc.name testUint8ClampedArrayEveryOne019
     * @tc.desc Verify predicate element>=0 && element<=255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 100, 255});
    boolean r = arr.every((e, i, a) -> e >= 0 && e <= 255);
    assertTrue(r);
    }

    /**
     * Verify every visits all elements in index order with value-based predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2000
     * @tc.name testUint8ClampedArrayEveryOne020
     * @tc.desc Verify every visits all elements in index order with value-based predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] callCount = {0};
    String[] idxSeq = {""};
    boolean r = arr.every((e, i, a) -> {
        callCount[0]++;
        idxSeq[0] += String.valueOf(i);
        return e == 10 || e == 20 || e == 30;
    });
    assertTrue(r);
    assertEqual(3, callCount[0]);
    assertEqual("012", idxSeq[0]);
    }

    /**
     * Verify every result is true for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2100
     * @tc.name testUint8ClampedArrayEveryOne021
     * @tc.desc Verify every result is true for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean r = arr.every((e, i, a) -> i >= 0);
    assertTrue(r);
    }

    /**
     * Verify every predicate uses index arg, i===0||e===0 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2200
     * @tc.name testUint8ClampedArrayEveryOne022
     * @tc.desc Verify every predicate uses index arg, i===0||e===0 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    boolean r = arr.every((e, i, a) -> i == 0 ? true : e == 0);
    assertTrue(r);
    }

    /**
     * Verify every predicate uses array arg, a.length===8 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2300
     * @tc.name testUint8ClampedArrayEveryOne023
     * @tc.desc Verify every predicate uses array arg, a.length===8 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    boolean r = arr.every((e, i, a) -> a.length() == 8);
    assertTrue(r);
    }

    /**
     * Verify every predicate uses array arg, e===a[0] true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2400
     * @tc.name testUint8ClampedArrayEveryOne024
     * @tc.desc Verify every predicate uses array arg, e===a[0] true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5, 5});
    boolean r = arr.every((e, i, a) -> e == a.get(0));
    assertTrue(r);
    }

    /**
     * Verify every predicate uses array arg, a[0]===a[last] true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2500
     * @tc.name testUint8ClampedArrayEveryOne025
     * @tc.desc Verify every predicate uses array arg, a[0]===a[last] true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 10, 10});
    boolean r = arr.every((e, i, a) -> a.get(0) == a.get(a.length() - 1));
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2600
     * @tc.name testUint8ClampedArrayEveryOne026
     * @tc.desc Verify every result is true for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true when the predicate accepts each positive element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2700
     * @tc.name testUint8ClampedArrayEveryOne027
     * @tc.desc Verify every returns true when the predicate accepts each positive element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> {
        if (e > 0) {
            return true;
    } else {
        return false;
    }
        });
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [60, 70, 80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2800
     * @tc.name testUint8ClampedArrayEveryOne028
     * @tc.desc Verify every result is true for array [60, 70, 80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne028() {
    int threshold = 50;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {60, 70, 80});
    boolean r = arr.every((e, i, a) -> e > threshold);
    assertTrue(r);
    }

    /**
     * Verify predicate let count visits 3 true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_2900
     * @tc.name testUint8ClampedArrayEveryOne029
     * @tc.desc Verify predicate let count visits 3 true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne029() {
    int[] count = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> {
        count[0] = count[0] + 1;
        return true;
    });
    assertTrue(r);
    assertEqual(3, count[0]);
    }

    /**
     * Verify every visits all elements while the predicate accumulates a sum of 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3000
     * @tc.name testUint8ClampedArrayEveryOne030
     * @tc.desc Verify every visits all elements while the predicate accumulates a sum of 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne030() {
    int[] sum = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> {
        sum[0] = sum[0] + e;
        return true;
    });
    assertTrue(r);
    assertEqual(10, sum[0]);
    }

    /**
     * Verify every predicate e!==0 returns false, fails at index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3100
     * @tc.name testUint8ClampedArrayEveryOne031
     * @tc.desc Verify every predicate e!==0 returns false, fails at index 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    boolean r = arr.every((e, i, a) -> e != 0);
    assertFalse(r);
    }

    /**
     * Verify every predicate e!==0 stops at index 0, invoked once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3200
     * @tc.name testUint8ClampedArrayEveryOne032
     * @tc.desc Verify every predicate e!==0 stops at index 0, invoked once
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne032() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertEqual(1, visits[0]);
    assertFalse(r);
    }

    /**
     * Verify every predicate e!==0 stops at index 1, invoked twice
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3300
     * @tc.name testUint8ClampedArrayEveryOne033
     * @tc.desc Verify every predicate e!==0 stops at index 1, invoked twice
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne033() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertEqual(2, visits[0]);
    assertFalse(r);
    }

    /**
     * Verify every predicate e!==0 stops at index 2, invoked 3 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3400
     * @tc.name testUint8ClampedArrayEveryOne034
     * @tc.desc Verify every predicate e!==0 stops at index 2, invoked 3 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne034() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 0, 3, 4});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertEqual(3, visits[0]);
    assertFalse(r);
    }

    /**
     * Verify every predicate e!==0 false at last index, visits all 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3500
     * @tc.name testUint8ClampedArrayEveryOne035
     * @tc.desc Verify every predicate e!==0 false at last index, visits all 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne035() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 0});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertFalse(r);
    assertEqual(5, visits[0]);
    }

    /**
     * Verify every predicate always true visits all 5, returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3600
     * @tc.name testUint8ClampedArrayEveryOne036
     * @tc.desc Verify every predicate always true visits all 5, returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne036() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return true;
    });
    assertTrue(r);
    assertEqual(5, visits[0]);
    }

    /**
     * Verify every always-false returns false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3700
     * @tc.name testUint8ClampedArrayEveryOne037
     * @tc.desc Verify every always-false returns false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    boolean r = arr.every((e, i, a) -> false);
    assertFalse(r);
    }

    /**
     * Verify every stops at index 1 when predicate false
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3800
     * @tc.name testUint8ClampedArrayEveryOne038
     * @tc.desc Verify every stops at index 1 when predicate false
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne038() {
    List<Integer> lastIdx = java.util.Arrays.asList(-1);
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    boolean r = arr.every((e, i, a) -> {
        lastIdx.set(0, i);
        return e < 2;
    });
    assertEqualInt(1, lastIdx.get(0));
    assertFalse(r);
    }

    /**
     * Verify every predicate e<30 stops at index 2, invoked 3 times
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_3900
     * @tc.name testUint8ClampedArrayEveryOne039
     * @tc.desc Verify every predicate e<30 stops at index 2, invoked 3 times
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne039() {
    List<Integer> indices = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    boolean r = arr.every((e, i, a) -> {
        indices.add(i);
        return e < 30;
    });
    assertEqual(3, indices.size());
    assertFalse(r);
    }

    /**
     * Verify every predicate e<3 returns false, fails at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4000
     * @tc.name testUint8ClampedArrayEveryOne040
     * @tc.desc Verify every predicate e<3 returns false, fails at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    boolean r = arr.every((e, i, a) -> e < 3);
    assertFalse(r);
    }

    /**
     * Verify every single element [0] e!==0 returns false, invoked once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4100
     * @tc.name testUint8ClampedArrayEveryOne041
     * @tc.desc Verify every single element [0] e!==0 returns false, invoked once
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne041() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertFalse(r);
    assertEqual(1, visits[0]);
    }

    /**
     * Verify every single element [1] e!==0 returns true, invoked once
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4200
     * @tc.name testUint8ClampedArrayEveryOne042
     * @tc.desc Verify every single element [1] e!==0 returns true, invoked once
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne042() {
    int[] visits = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    boolean r = arr.every((e, i, a) -> {
        visits[0] = visits[0] + 1;
        return e != 0;
    });
    assertTrue(r);
    assertEqual(1, visits[0]);
    }

    /**
     * Verify every empty array returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4300
     * @tc.name testUint8ClampedArrayEveryOne043
     * @tc.desc Verify every empty array returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    boolean r = arr.every((e, i, a) -> false);
    assertTrue(r);
    }

    /**
     * Verify every empty array from [] returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4400
     * @tc.name testUint8ClampedArrayEveryOne044
     * @tc.desc Verify every empty array from [] returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne044() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> false);
    assertTrue(r);
    }

    /**
     * Verify every result is true for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4500
     * @tc.name testUint8ClampedArrayEveryOne045
     * @tc.desc Verify every result is true for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    boolean r = arr.every((e, i, a) -> true);
    assertTrue(r);
    }

    /**
     * Verify every empty ArrayBuffer 0 returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4600
     * @tc.name testUint8ClampedArrayEveryOne046
     * @tc.desc Verify every empty ArrayBuffer 0 returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne046() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    boolean r = arr.every((e, i, a) -> false);
    assertTrue(r);
    }

    /**
     * Verify every empty byteOffset=byteLength returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4700
     * @tc.name testUint8ClampedArrayEveryOne047
     * @tc.desc Verify every empty byteOffset=byteLength returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne047() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 0);
    boolean r = arr.every((e, i, a) -> false);
    assertTrue(r);
    }

    /**
     * Verify every empty from() returns true
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4800
     * @tc.name testUint8ClampedArrayEveryOne048
     * @tc.desc Verify every empty from() returns true
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne048() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    boolean r = arr.every((e, i, a) -> false);
    assertTrue(r);
    }

    /**
     * Verify every on empty array returns true, predicate not invoked
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_4900
     * @tc.name testUint8ClampedArrayEveryOne049
     * @tc.desc Verify every on empty array returns true, predicate not invoked
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne049() {
    boolean[] thrown = {false};
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    boolean r = arr.every((e, i, a) -> {
        thrown[0] = true;
        return false;
    });
    assertTrue(r);
    assertFalse(thrown[0]);
    }

    /**
     * Verify every returns true for an empty array without invoking the predicate
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5000
     * @tc.name testUint8ClampedArrayEveryOne050
     * @tc.desc Verify every returns true for an empty array without invoking the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] calls = {0};
    boolean r = arr.every((e, i, a) -> {
        calls[0]++;
        return true;
    });
    assertTrue(r);
    assertEqual(0, calls[0]);
    }

    /**
     * Verify every result is true for array [100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5100
     * @tc.name testUint8ClampedArrayEveryOne051
     * @tc.desc Verify every result is true for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    boolean r = arr.every((e, i, a) -> e == 100);
    assertTrue(r);
    }

    /**
     * Verify every result is false for array [100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5200
     * @tc.name testUint8ClampedArrayEveryOne052
     * @tc.desc Verify every result is false for array [100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    boolean r = arr.every((e, i, a) -> e == 0);
    assertFalse(r);
    }

    /**
     * Verify every result is true for array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5300
     * @tc.name testUint8ClampedArrayEveryOne053
     * @tc.desc Verify every result is true for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every result is false for array [10, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5400
     * @tc.name testUint8ClampedArrayEveryOne054
     * @tc.desc Verify every result is false for array [10, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 0});
    boolean r = arr.every((e, i, a) -> e > 0);
    assertFalse(r);
    }

    /**
     * Verify every result is true for array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5500
     * @tc.name testUint8ClampedArrayEveryOne055
     * @tc.desc Verify every result is true for array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true after fill for length-255 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5600
     * @tc.name testUint8ClampedArrayEveryOne056
     * @tc.desc Verify every returns true after fill for length-255 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    arr.fill(1);
    boolean r = arr.every((e, i, a) -> e == 1);
    assertTrue(r);
    }

    /**
     * Verify every returns true after fill for length-256 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5700
     * @tc.name testUint8ClampedArrayEveryOne057
     * @tc.desc Verify every returns true after fill for length-256 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.fill(255);
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every returns true after fill for length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5800
     * @tc.name testUint8ClampedArrayEveryOne058
     * @tc.desc Verify every returns true after fill for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(42);
    boolean r = arr.every((e, i, a) -> e == 42);
    assertTrue(r);
    }

    /**
     * Verify every returns false after fill and single element mutation for length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_5900
     * @tc.name testUint8ClampedArrayEveryOne059
     * @tc.desc Verify every returns false after fill and single element mutation for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(42);
    arr.set(1023, 0);
    boolean r = arr.every((e, i, a) -> e == 42);
    assertFalse(r);
    }

    /**
     * Verify every returns true after fill for length-65535 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6000
     * @tc.name testUint8ClampedArrayEveryOne060
     * @tc.desc Verify every returns true after fill for length-65535 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    arr.fill(7);
    boolean r = arr.every((e, i, a) -> e == 7);
    assertTrue(r);
    }

    /**
     * Verify 256 clamp=255 predicate ===255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6100
     * @tc.name testUint8ClampedArrayEveryOne061
     * @tc.desc Verify 256 clamp=255 predicate ===255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 256, 256});
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6200
     * @tc.name testUint8ClampedArrayEveryOne062
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne062() {
    List<Number> src = java.util.Arrays.asList(-1, -1, -1);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6300
     * @tc.name testUint8ClampedArrayEveryOne063
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne063() {
    double[] src = new double[] {Double.NaN, Double.NaN, Double.NaN};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6400
     * @tc.name testUint8ClampedArrayEveryOne064
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne064() {
    double[] src = new double[] {Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6500
     * @tc.name testUint8ClampedArrayEveryOne065
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne065() {
    double[] src = new double[] {-Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6600
     * @tc.name testUint8ClampedArrayEveryOne066
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne066() {
    double[] src = new double[] {0.5, 0.5, 0.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6700
     * @tc.name testUint8ClampedArrayEveryOne067
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne067() {
    double[] src = new double[] {0.9, 0.9, 0.9};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 1);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6800
     * @tc.name testUint8ClampedArrayEveryOne068
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne068() {
    double[] src = new double[] {127.5, 127.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 128);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_6900
     * @tc.name testUint8ClampedArrayEveryOne069
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne069() {
    double[] src = new double[] {128.5, 128.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 128);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7000
     * @tc.name testUint8ClampedArrayEveryOne070
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne070() {
    double[] src = new double[] {1e9, 1e9};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7100
     * @tc.name testUint8ClampedArrayEveryOne071
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne071() {
    double[] src = new double[] {-1e9, -1e9};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7200
     * @tc.name testUint8ClampedArrayEveryOne072
     * @tc.desc Verify every result is true for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne072() {
    double[] src = new double[] {Double.MAX_VALUE};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7300
     * @tc.name testUint8ClampedArrayEveryOne073
     * @tc.desc Verify every result is true for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7400
     * @tc.name testUint8ClampedArrayEveryOne074
     * @tc.desc Verify every result is true for array [255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [0, 255, 0, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7500
     * @tc.name testUint8ClampedArrayEveryOne075
     * @tc.desc Verify every result is true for array [0, 255, 0, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    boolean r = arr.every((e, i, a) -> e == 0 || e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [0xFF, 0xFF]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7600
     * @tc.name testUint8ClampedArrayEveryOne076
     * @tc.desc Verify every result is true for array [0xFF, 0xFF]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0xFF});
    boolean r = arr.every((e, i, a) -> e == 255);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [0o17, 0o17]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7700
     * @tc.name testUint8ClampedArrayEveryOne077
     * @tc.desc Verify every result is true for array [0o17, 0o17]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017, 017});
    boolean r = arr.every((e, i, a) -> e == 15);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [0b1111, 0b1111]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7800
     * @tc.name testUint8ClampedArrayEveryOne078
     * @tc.desc Verify every result is true for array [0b1111, 0b1111]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1111, 0b1111});
    boolean r = arr.every((e, i, a) -> e == 15);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [1e2, 1e2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_7900
     * @tc.name testUint8ClampedArrayEveryOne079
     * @tc.desc Verify every result is true for array [1e2, 1e2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 1e2});
    boolean r = arr.every((e, i, a) -> e == 100);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements > 0 for from(src) result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8000
     * @tc.name testUint8ClampedArrayEveryOne080
     * @tc.desc Verify every returns true when all elements > 0 for from(src) result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne080() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    boolean r = arr.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements >= 10 for of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8100
     * @tc.name testUint8ClampedArrayEveryOne081
     * @tc.desc Verify every returns true when all elements >= 10 for of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne081() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    boolean r = arr.every((e, i, a) -> e >= 10);
    assertTrue(r);
    }

    /**
     * Verify every result is true for length-5 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8200
     * @tc.name testUint8ClampedArrayEveryOne082
     * @tc.desc Verify every result is true for length-5 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every result is true for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8300
     * @tc.name testUint8ClampedArrayEveryOne083
     * @tc.desc Verify every result is true for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne083() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify new(buf, offset, length) every
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8400
     * @tc.name testUint8ClampedArrayEveryOne084
     * @tc.desc Verify new(buf, offset, length) every
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne084() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    boolean r = arr.every((e, i, a) -> e == 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements > 0 for subarray(1, 4)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8500
     * @tc.name testUint8ClampedArrayEveryOne085
     * @tc.desc Verify every returns true when all elements > 0 for subarray(1, 4)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne085() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    boolean r = sub.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every returns true when all elements > 0 for slice result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8600
     * @tc.name testUint8ClampedArrayEveryOne086
     * @tc.desc Verify every returns true when all elements > 0 for slice result
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne086() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = parent.slice(0, 3);
    boolean r = s.every((e, i, a) -> e > 0);
    assertTrue(r);
    }

    /**
     * Verify every invokes the predicate with indices 0 through 3 in order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8700
     * @tc.name testUint8ClampedArrayEveryOne087
     * @tc.desc Verify every invokes the predicate with indices 0 through 3 in order
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne087() {
    List<Integer> indices = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.every((e, i, a) -> {
    indices.add(i);
    return true;
        });
    assertEqualInt(0, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(2, indices.get(2));
    assertEqualInt(3, indices.get(3));
    }

    /**
     * Verify every supplies index 4 for the final element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8800
     * @tc.name testUint8ClampedArrayEveryOne088
     * @tc.desc Verify every supplies index 4 for the final element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne088() {
    int[] lastIdx = {-1};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.every((e, i, a) -> {
    lastIdx[0] = i;
    return true;
        });
    assertEqual(4, lastIdx[0]);
    }

    /**
     * Verify every supplies index 0 for the first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_8900
     * @tc.name testUint8ClampedArrayEveryOne089
     * @tc.desc Verify every supplies index 0 for the first element
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne089() {
    int[] firstIdx = {-1};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.every((e, i, a) -> {
    if (firstIdx[0] == -1) {
    firstIdx[0] = i;
    }
    return true;
        });
    assertEqual(0, firstIdx[0]);
    }

    /**
     * Verify every callback index sequence is 0, 1, 2 and values are positive for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_9000
     * @tc.name testUint8ClampedArrayEveryOne090
     * @tc.desc Verify every callback index sequence is 0, 1, 2 and values are positive for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String[] idxSeq = {""};
    boolean r = arr.every((e, i, a) -> {
        idxSeq[0] += String.valueOf(i);
        return e > 0;
    });
    assertTrue(r);
    assertEqual("012", idxSeq[0]);
    }

    /**
     * Verify every result is true for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_9100
     * @tc.name testUint8ClampedArrayEveryOne091
     * @tc.desc Verify every result is true for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> a == arr);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_9200
     * @tc.name testUint8ClampedArrayEveryOne092
     * @tc.desc Verify every result is true for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    boolean r = arr.every((e, i, a) -> a.length() == 5);
    assertTrue(r);
    }

    /**
     * Verify every result is true for array [7, 7, 7, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_9300
     * @tc.name testUint8ClampedArrayEveryOne093
     * @tc.desc Verify every result is true for array [7, 7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7});
    boolean r = arr.every((e, i, a) -> a.get(i) == e);
    assertTrue(r);
    }

    /**
     * Verify every callback receives the receiver and matching indexed value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_EVERY_ONE_9400
     * @tc.name testUint8ClampedArrayEveryOne094
     * @tc.desc Verify every callback receives the receiver and matching indexed value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayEveryOne094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.every((e, i, a) -> a == arr && a.get(i) == e);
    assertTrue(r);
    }
}
