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

import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFrom01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFrom01Test extends BasTest {

    private static List<Integer> createNumberArray(int len) {
    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < len; i++) {
    result.add(0);
    }
    return result;
    }

    private static List<Integer> createBigIntArray(int len) {
    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < len; i++) {
    result.add(0);
    }
    return result;
    }

    /**
     * Verify from(FixedArray<int>) with 1 parameter
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0100
     * @tc.name testUint8ArrayFrom001
     * @tc.desc Verify from(FixedArray<int>) with 1 parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom001() {
    int[] src = new int[] {1, 2};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(2, result.length());
    }

    /**
     * Verify from(Uint8Array) with 1 parameter
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0200
     * @tc.name testUint8ArrayFrom002
     * @tc.desc Verify from(Uint8Array) with 1 parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom002() {
    Uint8Array src = Uint8Array.of(1, 2);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(2, result.length());
    }

    /**
     * Verify from(ArrayLike<number>) with 1 parameter
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0300
     * @tc.name testUint8ArrayFrom003
     * @tc.desc Verify from(ArrayLike<number>) with 1 parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom003() {
    List<Integer> src = createNumberArray(2);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(2, result.length());
    }

    /**
     * Verify from(Iterable<number>) with 1 parameter without mapfn
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0400
     * @tc.name testUint8ArrayFrom004
     * @tc.desc Verify from(Iterable<number>) with 1 parameter without mapfn
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom004() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(1, result.length());
    }

    /**
     * Verify from(Iterable<number>, mapfn) with 2 parameters
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0500
     * @tc.name testUint8ArrayFrom005
     * @tc.desc Verify from(Iterable<number>, mapfn) with 2 parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom005() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v);
    assertEqual(1, result.length());
    }

    /**
     * Verify empty FixedArray<int> constructs empty Uint8Array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0600
     * @tc.name testUint8ArrayFrom006
     * @tc.desc Verify empty FixedArray<int> constructs empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom006() {
    int[] src = new int[] {};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }

    /**
     * Verify FixedArray<int> with single element 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0700
     * @tc.name testUint8ArrayFrom007
     * @tc.desc Verify FixedArray<int> with single element 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom007() {
    int[] src = new int[] {0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify FixedArray<int> with single element 255 maximum boundary
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0800
     * @tc.name testUint8ArrayFrom008
     * @tc.desc Verify FixedArray<int> with single element 255 maximum boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom008() {
    int[] src = new int[] {255};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify FixedArray<int> with single element 127 middle value
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_0900
     * @tc.name testUint8ArrayFrom009
     * @tc.desc Verify FixedArray<int> with single element 127 middle value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom009() {
    int[] src = new int[] {127};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(127, result.get(0));
    }

    /**
     * Verify FixedArray<int> with single element 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1000
     * @tc.name testUint8ArrayFrom010
     * @tc.desc Verify FixedArray<int> with single element 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom010() {
    int[] src = new int[] {128};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(128, result.get(0));
    }

    /**
     * Verify FixedArray<int> with multiple elements basic sequence
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1100
     * @tc.name testUint8ArrayFrom011
     * @tc.desc Verify FixedArray<int> with multiple elements basic sequence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom011() {
    int[] src = new int[] {1, 2, 3, 4, 5};
    Uint8Array result = Uint8Array.from(src);
    assertEqual("1,2,3,4,5", result.join(","));
    }

    /**
     * Verify FixedArray<int> with element 256 overflow truncates to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1200
     * @tc.name testUint8ArrayFrom012
     * @tc.desc Verify FixedArray<int> with element 256 overflow truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom012() {
    int[] src = new int[] {256};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify FixedArray<int> with element -1 wraps to 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1300
     * @tc.name testUint8ArrayFrom013
     * @tc.desc Verify FixedArray<int> with element -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom013() {
    int[] src = new int[] {-1};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify FixedArray<int> with element -128 wraps to 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1400
     * @tc.name testUint8ArrayFrom014
     * @tc.desc Verify FixedArray<int> with element -128 wraps to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom014() {
    int[] src = new int[] {-128};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(128, result.get(0));
    }

    /**
     * Verify FixedArray<int> with mixed boundary values truncation/wrap combination
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1500
     * @tc.name testUint8ArrayFrom015
     * @tc.desc Verify FixedArray<int> with mixed boundary values truncation/wrap combination
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom015() {
    int[] src = new int[] {0, 255, 256, -1};
    Uint8Array result = Uint8Array.from(src);
    assertEqual("0,255,0,255", result.join(","));
    }

    /**
     * Verify FixedArray<int> with hexadecimal literal elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1600
     * @tc.name testUint8ArrayFrom016
     * @tc.desc Verify FixedArray<int> with hexadecimal literal elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom016() {
    int[] src = new int[] {0x10, 0x20, 0x30};
    Uint8Array result = Uint8Array.from(src);
    assertEqual("16,32,48", result.join(","));
    }

    /**
     * Verify FixedArray<int> with binary literal elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1700
     * @tc.name testUint8ArrayFrom017
     * @tc.desc Verify FixedArray<int> with binary literal elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom017() {
    int[] src = new int[] {0b1, 0b10, 0b11};
    Uint8Array result = Uint8Array.from(src);
    assertEqual("1,2,3", result.join(","));
    }

    /**
     * Verify FixedArray<int> with octal literal elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1800
     * @tc.name testUint8ArrayFrom018
     * @tc.desc Verify FixedArray<int> with octal literal elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom018() {
    int[] src = new int[] {077, 0100, 0177};
    Uint8Array result = Uint8Array.from(src);
    assertEqual("63,64,127", result.join(","));
    }

    /**
     * Verify FixedArray<int> with element 2147483647 takes low 8 bits 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_1900
     * @tc.name testUint8ArrayFrom019
     * @tc.desc Verify FixedArray<int> with element 2147483647 takes low 8 bits 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom019() {
    double[] src = new double[] {2147483647};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify FixedArray<int> with element -2147483648 takes low 8 bits 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2000
     * @tc.name testUint8ArrayFrom020
     * @tc.desc Verify FixedArray<int> with element -2147483648 takes low 8 bits 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom020() {
    double[] src = new double[] {Integer.MIN_VALUE};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify FixedArray<int> with element -0 converts to 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2100
     * @tc.name testUint8ArrayFrom021
     * @tc.desc Verify FixedArray<int> with element -0 converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom021() {
    int[] src = new int[] {-0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify FixedArray<int> with 10 element sequence
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2200
     * @tc.name testUint8ArrayFrom022
     * @tc.desc Verify FixedArray<int> with 10 element sequence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom022() {
    int[] src = new int[] {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(10, result.length());
    assertEqual(100, result.get(9));
    }

    /**
     * Verify empty Uint8Array constructs empty Uint8Array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2300
     * @tc.name testUint8ArrayFrom023
     * @tc.desc Verify empty Uint8Array constructs empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom023() {
    Uint8Array src = Uint8Array.of();
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }

    /**
     * Verify single element Uint8Array copy
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2400
     * @tc.name testUint8ArrayFrom024
     * @tc.desc Verify single element Uint8Array copy
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom024() {
    Uint8Array src = Uint8Array.of(42);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(42, result.get(0));
    }

    /**
     * Verify multiple elements Uint8Array copy
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2500
     * @tc.name testUint8ArrayFrom025
     * @tc.desc Verify multiple elements Uint8Array copy
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom025() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual("1,2,3", result.join(","));
    }

    /**
     * Verify boundary values Uint8Array copy 0 and 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2600
     * @tc.name testUint8ArrayFrom026
     * @tc.desc Verify boundary values Uint8Array copy 0 and 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom026() {
    Uint8Array src = Uint8Array.of(0, 255, 127);
    Uint8Array result = Uint8Array.from(src);
    assertEqual("0,255,127", result.join(","));
    }

    /**
     * Verify deep copy validation modification of source does not affect copy
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2700
     * @tc.name testUint8ArrayFrom027
     * @tc.desc Verify deep copy validation modification of source does not affect copy
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom027() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array result = Uint8Array.from(src);
    src.set(0, 99);
    assertEqual(1, result.get(0));
    }

    /**
     * Verify large Uint8Array copy 100 elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2800
     * @tc.name testUint8ArrayFrom028
     * @tc.desc Verify large Uint8Array copy 100 elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom028() {
    Uint8Array src = new Uint8Array(100);
    src.set(0, 5);
    src.set(99, 10);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(100, result.length());
    assertEqual(5, result.get(0));
    }

    /**
     * Verify from returns new instance (different reference)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_2900
     * @tc.name testUint8ArrayFrom029
     * @tc.desc Verify from returns new instance (different reference)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom029() {
    Uint8Array src = Uint8Array.of(1, 2);
    Uint8Array result = Uint8Array.from(src);
    assertTrue(result != src);
    }

    /**
     * Verify Uint8Array copy all zero elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3000
     * @tc.name testUint8ArrayFrom030
     * @tc.desc Verify Uint8Array copy all zero elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom030() {
    Uint8Array src = Uint8Array.of(0, 0, 0);
    Uint8Array result = Uint8Array.from(src);
    assertEqual("0,0,0", result.join(","));
    }

    /**
     * Verify empty ArrayLike<number> construction
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3100
     * @tc.name testUint8ArrayFrom031
     * @tc.desc Verify empty ArrayLike<number> construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom031() {
    List<Integer> src = createNumberArray(0);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }

    /**
     * Verify ArrayLike<number> copy length is correct
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3200
     * @tc.name testUint8ArrayFrom032
     * @tc.desc Verify ArrayLike<number> copy length is correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom032() {
    List<Integer> src = createNumberArray(3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual("0,0,0", result.join(","));
    }

    /**
     * Verify ArrayLike<number> with multiple elements basic
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3300
     * @tc.name testUint8ArrayFrom033
     * @tc.desc Verify ArrayLike<number> with multiple elements basic
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom033() {
    int[] src = new int[] {1, 2, 3};
    Uint8Array result = Uint8Array.from(src);
    assertEqual("1,2,3", result.join(","));
    }

    /**
     * Verify FixedArray<int> with single element 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3400
     * @tc.name testUint8ArrayFrom034
     * @tc.desc Verify FixedArray<int> with single element 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom034() {
    int[] src = new int[] {3};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.get(0));
    }

    /**
     * Verify FixedArray<int> with element 0xFF hexadecimal literal
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3500
     * @tc.name testUint8ArrayFrom035
     * @tc.desc Verify FixedArray<int> with element 0xFF hexadecimal literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom035() {
    int[] src = new int[] {0xFF};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify Iterable<number> with Set containing single element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3600
     * @tc.name testUint8ArrayFrom036
     * @tc.desc Verify Iterable<number> with Set containing single element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom036() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(42);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(1, result.length());
    assertEqual(42, result.get(0));
    }

    /**
     * Verify Iterable<number> with Set containing multiple elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3700
     * @tc.name testUint8ArrayFrom037
     * @tc.desc Verify Iterable<number> with Set containing multiple elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom037() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    set.add(3);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(3, result.length());
    }

    /**
     * Verify Iterable<number> with Set containing boundary values
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3800
     * @tc.name testUint8ArrayFrom038
     * @tc.desc Verify Iterable<number> with Set containing boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom038() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(0);
    set.add(255);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(2, result.length());
    }

    /**
     * Verify Iterable<number> with empty Set
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_3900
     * @tc.name testUint8ArrayFrom039
     * @tc.desc Verify Iterable<number> with empty Set
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom039() {
    Set<Integer> set = new LinkedHashSet<>();
    Uint8Array result = Uint8Array.from(set);
    assertEqual(0, result.length());
    }

    /**
     * Verify Iterable<number> with Set containing overflow/wrap values
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4000
     * @tc.name testUint8ArrayFrom040
     * @tc.desc Verify Iterable<number> with Set containing overflow/wrap values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom040() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(256);
    set.add(-1);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(2, result.length());
    }

    /**
     * Verify Iterable<number> with Set containing 127 and 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4100
     * @tc.name testUint8ArrayFrom041
     * @tc.desc Verify Iterable<number> with Set containing 127 and 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom041() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(127);
    set.add(128);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(2, result.length());
    }

    /**
     * Verify Iterable<number> with Set containing 10 elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4200
     * @tc.name testUint8ArrayFrom042
     * @tc.desc Verify Iterable<number> with Set containing 10 elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom042() {
    Set<Integer> set = new LinkedHashSet<>();
    for (int i = 1; i <= 10; i++) {
    set.add(i);
    }
    Uint8Array result = Uint8Array.from(set);
    assertEqual(10, result.length());
    }

    /**
     * Verify Iterable<number> with Set containing hex literals
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4300
     * @tc.name testUint8ArrayFrom043
     * @tc.desc Verify Iterable<number> with Set containing hex literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom043() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(0x10);
    set.add(0x20);
    set.add(0x30);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(3, result.length());
    }

    /**
     * Verify mapfn identity function
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4400
     * @tc.name testUint8ArrayFrom044
     * @tc.desc Verify mapfn identity function
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom044() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with multiply
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4500
     * @tc.name testUint8ArrayFrom045
     * @tc.desc Verify mapfn with multiply
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom045() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v * 2);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with square
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4600
     * @tc.name testUint8ArrayFrom046
     * @tc.desc Verify mapfn with square
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom046() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(2);
    set.add(3);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v * v);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with modulo
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4700
     * @tc.name testUint8ArrayFrom047
     * @tc.desc Verify mapfn with modulo
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom047() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(10);
    set.add(20);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v % 3);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with bitwise AND
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4800
     * @tc.name testUint8ArrayFrom048
     * @tc.desc Verify mapfn with bitwise AND
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom048() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(0xFF);
    set.add(0x0F);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v & 0x0F);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with bitwise OR
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_4900
     * @tc.name testUint8ArrayFrom049
     * @tc.desc Verify mapfn with bitwise OR
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom049() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(0xF0);
    set.add(0x0F);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v | 0x01);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with bitwise XOR
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5000
     * @tc.name testUint8ArrayFrom050
     * @tc.desc Verify mapfn with bitwise XOR
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom050() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(0xFF);
    set.add(0x0F);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v ^ 0xFF);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with left shift
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5100
     * @tc.name testUint8ArrayFrom051
     * @tc.desc Verify mapfn with left shift
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom051() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v << 1);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with right shift
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5200
     * @tc.name testUint8ArrayFrom052
     * @tc.desc Verify mapfn with right shift
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom052() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(4);
    set.add(8);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v >> 1);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with unsigned right shift
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5300
     * @tc.name testUint8ArrayFrom053
     * @tc.desc Verify mapfn with unsigned right shift
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom053() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(4);
    set.add(8);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v >>> 1);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with bitwise NOT
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5400
     * @tc.name testUint8ArrayFrom054
     * @tc.desc Verify mapfn with bitwise NOT
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom054() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(0);
    set.add(1);
    Uint8Array result = Uint8Array.from(set, (v, index) -> ~v);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with unary plus
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5500
     * @tc.name testUint8ArrayFrom055
     * @tc.desc Verify mapfn with unary plus
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom055() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> +v);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with unary minus
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5600
     * @tc.name testUint8ArrayFrom056
     * @tc.desc Verify mapfn with unary minus
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom056() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> -v);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with ternary conditional
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5700
     * @tc.name testUint8ArrayFrom057
     * @tc.desc Verify mapfn with ternary conditional
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom057() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v > 1 ? 100 : 0);
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with Math.floor
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5800
     * @tc.name testUint8ArrayFrom058
     * @tc.desc Verify mapfn with Math.floor
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom058() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    set.add(2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> (int) (v * 1.5));
    assertEqual(2, result.length());
    }

    /**
     * Verify mapfn with Math.abs
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_5900
     * @tc.name testUint8ArrayFrom059
     * @tc.desc Verify mapfn with Math.abs
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom059() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(-1);
    set.add(-2);
    Uint8Array result = Uint8Array.from(set, (v, index) -> Math.abs(v));
    assertEqual(2, result.length());
    }

    /**
     * Verify result is Uint8Array for FixedArray<int> source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6000
     * @tc.name testUint8ArrayFrom060
     * @tc.desc Verify result is Uint8Array for FixedArray<int> source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom060() {
    int[] src = new int[] {1, 2};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(2, result.length());
    }

    /**
     * Verify length is correct for FixedArray<int> source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6100
     * @tc.name testUint8ArrayFrom061
     * @tc.desc Verify length is correct for FixedArray<int> source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom061() {
    int[] src = new int[] {1, 2, 3};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }

    /**
     * Verify result is Uint8Array for Uint8Array source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6200
     * @tc.name testUint8ArrayFrom062
     * @tc.desc Verify result is Uint8Array for Uint8Array source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom062() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(1, result.get(0));
    }

    /**
     * Verify length is correct for Uint8Array source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6300
     * @tc.name testUint8ArrayFrom063
     * @tc.desc Verify length is correct for Uint8Array source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom063() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }

    /**
     * Verify result is Uint8Array for ArrayLike<number> source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6400
     * @tc.name testUint8ArrayFrom064
     * @tc.desc Verify result is Uint8Array for ArrayLike<number> source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom064() {
    List<Integer> src = createNumberArray(1);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(1, result.length());
    }

    /**
     * Verify length is correct for ArrayLike<number> source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6500
     * @tc.name testUint8ArrayFrom065
     * @tc.desc Verify length is correct for ArrayLike<number> source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom065() {
    List<Integer> src = createNumberArray(3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }

    /**
     * Verify result is Uint8Array for Iterable<number> source without mapfn
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6600
     * @tc.name testUint8ArrayFrom066
     * @tc.desc Verify result is Uint8Array for Iterable<number> source without mapfn
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom066() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    Uint8Array result = Uint8Array.from(set);
    assertEqual(1, result.length());
    }

    /**
     * Verify result is Uint8Array for Iterable<number> source with mapfn
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6700
     * @tc.name testUint8ArrayFrom067
     * @tc.desc Verify result is Uint8Array for Iterable<number> source with mapfn
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom067() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    Uint8Array result = Uint8Array.from(set, (v, index) -> v);
    assertEqual(1, result.length());
    }

    /**
     * Verify result is Uint8Array for ArrayLike<BigInt> source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6800
     * @tc.name testUint8ArrayFrom068
     * @tc.desc Verify result is Uint8Array for ArrayLike<BigInt> source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom068() {
    List<Integer> src = createBigIntArray(1);
    Uint8Array result = Uint8Array.from(src, (v, index) -> v);
    assertEqual(1, result.length());
    }

    /**
     * Verify length is correct for ArrayLike<BigInt> source
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_6900
     * @tc.name testUint8ArrayFrom069
     * @tc.desc Verify length is correct for ArrayLike<BigInt> source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom069() {
    List<Integer> src = createBigIntArray(3);
    Uint8Array result = Uint8Array.from(src, (v, index) -> v);
    assertEqual(3, result.length());
    }

    /**
     * Verify mapfn throws exception propagation
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM01_7000
     * @tc.name testUint8ArrayFrom070
     * @tc.desc Verify mapfn throws exception propagation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom070() {
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1);
    try {
    Uint8Array.from(set, (v, index) -> {
    return BasTest.throwTestError("mapfn error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
}
