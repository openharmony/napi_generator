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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFind01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFind01Test extends BasTest {
    /**
     * Verify arr.find with inline arrow function returns the matching element value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0100
     * @tc.name testUint8ArrayFind001
     * @tc.desc Verify arr.find with inline arrow function returns the matching element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Integer result = arr.find((v, i, a) -> {
        return v == 20;
        });
    assertEqual(20, result);
    }

    /**
     * Verify arr.find with pre-declared callback variable returns matching element value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0200
     * @tc.name testUint8ArrayFind002
     * @tc.desc Verify arr.find with pre-declared callback variable returns matching element value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array.Uint8ArrayFinder cb = (v, i, a) -> v == 30;
    Integer result = arr.find(cb);
    assertEqual(30, result);
    }

    /**
     * Verify arr.find matches value 0 and returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0300
     * @tc.name testUint8ArrayFind003
     * @tc.desc Verify arr.find matches value 0 and returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind003() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    Integer result = arr.find((v, i, a) -> {
        return v == 0;
        });
    assertEqual(0, result);
    }

    /**
     * Verify arr.find returns maximum value 255 when matched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0400
     * @tc.name testUint8ArrayFind004
     * @tc.desc Verify arr.find returns maximum value 255 when matched
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind004() {
    Uint8Array arr = new Uint8Array(new int[] {100, 255, 200});
    Integer result = arr.find((v, i, a) -> {
        return v == 255;
        });
    assertEqual(255, result);
    }

    /**
     * Verify arr.find returns value 128 when matched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0500
     * @tc.name testUint8ArrayFind005
     * @tc.desc Verify arr.find returns value 128 when matched
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind005() {
    Uint8Array arr = new Uint8Array(new int[] {64, 128, 192});
    Integer result = arr.find((v, i, a) -> {
        return v == 128;
        });
    assertEqual(128, result);
    }

    /**
     * Verify arr.find returns value 127 when matched
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0600
     * @tc.name testUint8ArrayFind006
     * @tc.desc Verify arr.find returns value 127 when matched
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind006() {
    Uint8Array arr = new Uint8Array(new int[] {63, 127, 191});
    Integer result = arr.find((v, i, a) -> {
        return v == 127;
        });
    assertEqual(127, result);
    }

    /**
     * Verify literal 256 is truncated to 0 and arr.forEach captures 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0700
     * @tc.name testUint8ArrayFind007
     * @tc.desc Verify literal 256 is truncated to 0 and arr.forEach captures 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind007() {
    Uint8Array arr = new Uint8Array(new int[] {256, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify literal -1 wraps to 255 and arr.forEach captures 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0800
     * @tc.name testUint8ArrayFind008
     * @tc.desc Verify literal -1 wraps to 255 and arr.forEach captures 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind008() {
    Uint8Array arr = new Uint8Array(new int[] {-1});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify literal 0.5 is truncated to 0 and arr.forEach captures 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_0900
     * @tc.name testUint8ArrayFind009
     * @tc.desc Verify literal 0.5 is truncated to 0 and arr.forEach captures 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind009() {
    Uint8Array arr = new Uint8Array(new double[] {0.5, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify literal 255.9 is truncated to 255 in construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1000
     * @tc.name testUint8ArrayFind010
     * @tc.desc Verify literal 255.9 is truncated to 255 in construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind010() {
    Uint8Array arr = new Uint8Array(new double[] {255.9});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify -0 is converted to 0 and arr.forEach captures 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1100
     * @tc.name testUint8ArrayFind011
     * @tc.desc Verify -0 is converted to 0 and arr.forEach captures 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind011() {
    Uint8Array arr = new Uint8Array(new int[] {-0, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify NaN is converted to 0 in construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1200
     * @tc.name testUint8ArrayFind012
     * @tc.desc Verify NaN is converted to 0 in construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind012() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify Infinity is converted to 0 in construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1300
     * @tc.name testUint8ArrayFind013
     * @tc.desc Verify Infinity is converted to 0 in construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind013() {
    Uint8Array arr = new Uint8Array(new double[] {Double.POSITIVE_INFINITY, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify -Infinity is converted to 0 in construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1400
     * @tc.name testUint8ArrayFind014
     * @tc.desc Verify -Infinity is converted to 0 in construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind014() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NEGATIVE_INFINITY, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify literal 3.99 is truncated to 3 and arr.forEach captures 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1500
     * @tc.name testUint8ArrayFind015
     * @tc.desc Verify literal 3.99 is truncated to 3 and arr.forEach captures 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind015() {
    Uint8Array arr = new Uint8Array(new double[] {3.99, 1, 2});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(3, captured[0]);
    }

    /**
     * Verify literal 128.4 is truncated to 128 in construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1600
     * @tc.name testUint8ArrayFind016
     * @tc.desc Verify literal 128.4 is truncated to 128 in construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind016() {
    Uint8Array arr = new Uint8Array(new double[] {128.4});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(128, captured[0]);
    }

    /**
     * Verify -0.5 is truncated to 0 in construction
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1700
     * @tc.name testUint8ArrayFind017
     * @tc.desc Verify -0.5 is truncated to 0 in construction
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind017() {
    Uint8Array arr = new Uint8Array(new double[] {-0.5, 1, 2});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
    captured[0] = v;
    }
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify literal 127.999 is truncated to 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1800
     * @tc.name testUint8ArrayFind018
     * @tc.desc Verify literal 127.999 is truncated to 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind018() {
    Uint8Array arr = new Uint8Array(new double[] {127.999});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(127, captured[0]);
    }

    /**
     * Verify literal 256.1 truncates and wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_1900
     * @tc.name testUint8ArrayFind019
     * @tc.desc Verify literal 256.1 truncates and wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind019() {
    Uint8Array arr = new Uint8Array(new double[] {256.1});
    int[] captured = {255};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify arr.find returns the single element in single-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2000
     * @tc.name testUint8ArrayFind020
     * @tc.desc Verify arr.find returns the single element in single-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind020() {
    Uint8Array arr = new Uint8Array(new int[] {77});
    Integer result = arr.find((v, i, a) -> {
        return v == 77;
        });
    assertEqual(77, result);
    }

    /**
     * Verify multi-element array matching first element stops iteration at index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2100
     * @tc.name testUint8ArrayFind021
     * @tc.desc Verify multi-element array matching first element stops iteration at index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind021() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return v == 5;
    });
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify multi-element array matching last element iterates through all
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2200
     * @tc.name testUint8ArrayFind022
     * @tc.desc Verify multi-element array matching last element iterates through all
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind022() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return v == 15;
    });
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify multi-element array matching middle element stops at correct iteration count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2300
     * @tc.name testUint8ArrayFind023
     * @tc.desc Verify multi-element array matching middle element stops at correct iteration count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind023() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return v == 3;
    });
    assertEqual(3, callCount[0]);
    }

    /**
     * Verify all-same-value array stops at first element (index of first match = 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2400
     * @tc.name testUint8ArrayFind024
     * @tc.desc Verify all-same-value array stops at first element (index of first match = 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind024() {
    Uint8Array arr = new Uint8Array(new int[] {7, 7, 7, 7});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return v == 7;
    });
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify ascending sequence callback traverses until match at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2500
     * @tc.name testUint8ArrayFind025
     * @tc.desc Verify ascending sequence callback traverses until match at index 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind025() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    List<Integer> visited = new ArrayList<>();
    arr.forEach((v, i, a) -> {
    visited.add(v);
    return;
        });
    assertEqual(5, visited.size());
    assertEqual(1, visited.get(0));
    assertEqual(2, visited.get(1));
    assertEqual(3, visited.get(2));
    }

    /**
     * Verify descending sequence callback traverses by index order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2600
     * @tc.name testUint8ArrayFind026
     * @tc.desc Verify descending sequence callback traverses by index order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind026() {
    Uint8Array arr = new Uint8Array(new int[] {5, 4, 3, 2, 1});
    List<Integer> visited = new ArrayList<>();
    arr.forEach((v, i, a) -> {
    visited.add(v);
    return;
        });
    assertEqual(5, visited.size());
    assertEqual(5, visited.get(0));
    assertEqual(4, visited.get(1));
    assertEqual(3, visited.get(2));
    }

    /**
     * Verify mixed boundary value array callback receives elements in order
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2700
     * @tc.name testUint8ArrayFind027
     * @tc.desc Verify mixed boundary value array callback receives elements in order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind027() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 255});
    List<Integer> visited = new ArrayList<>();
    arr.forEach((v, i, a) -> {
    visited.add(v);
    return;
        });
    assertEqual(3, visited.size());
    assertEqual(0, visited.get(0));
    assertEqual(128, visited.get(1));
    assertEqual(255, visited.get(2));
    }

    /**
     * Verify all-zero array callback receives all 0 values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2800
     * @tc.name testUint8ArrayFind028
     * @tc.desc Verify all-zero array callback receives all 0 values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind028() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    boolean[] allZero = {true};
    arr.forEach((v, i, a) -> {
    if (v != 0) {
    allZero[0] = false;
    }
    return;
        });
    assertTrue(allZero[0]);
    }

    /**
     * Verify all-max-value array callback receives all 255 values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_2900
     * @tc.name testUint8ArrayFind029
     * @tc.desc Verify all-max-value array callback receives all 255 values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind029() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    boolean[] allMax = {true};
    arr.forEach((v, i, a) -> {
    if (v != 255) {
    allMax[0] = false;
    }
    return;
        });
    assertTrue(allMax[0]);
    }

    /**
     * Verify hexadecimal 0xFF construction element is 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3000
     * @tc.name testUint8ArrayFind030
     * @tc.desc Verify hexadecimal 0xFF construction element is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind030() {
    Uint8Array arr = new Uint8Array(new int[] {0xFF});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify hexadecimal 0x0F construction element is 15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3100
     * @tc.name testUint8ArrayFind031
     * @tc.desc Verify hexadecimal 0x0F construction element is 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind031() {
    Uint8Array arr = new Uint8Array(new int[] {0x0F});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(15, captured[0]);
    }

    /**
     * Verify binary 0b11111111 construction element is 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3200
     * @tc.name testUint8ArrayFind032
     * @tc.desc Verify binary 0b11111111 construction element is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind032() {
    Uint8Array arr = new Uint8Array(new int[] {0b11111111});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify binary 0b00001111 construction element is 15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3300
     * @tc.name testUint8ArrayFind033
     * @tc.desc Verify binary 0b00001111 construction element is 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind033() {
    Uint8Array arr = new Uint8Array(new int[] {0b00001111});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(15, captured[0]);
    }

    /**
     * Verify octal 0o377 construction element is 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3400
     * @tc.name testUint8ArrayFind034
     * @tc.desc Verify octal 0o377 construction element is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind034() {
    Uint8Array arr = new Uint8Array(new int[] {0377});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify octal 0o10 construction element is 8
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3500
     * @tc.name testUint8ArrayFind035
     * @tc.desc Verify octal 0o10 construction element is 8
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind035() {
    Uint8Array arr = new Uint8Array(new int[] {010});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(8, captured[0]);
    }

    /**
     * Verify scientific notation 1e2 construction element is 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3600
     * @tc.name testUint8ArrayFind036
     * @tc.desc Verify scientific notation 1e2 construction element is 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind036() {
    Uint8Array arr = new Uint8Array(new double[] {1e2});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(100, captured[0]);
    }

    /**
     * Verify hexadecimal 0xA construction element is 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3700
     * @tc.name testUint8ArrayFind037
     * @tc.desc Verify hexadecimal 0xA construction element is 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind037() {
    Uint8Array arr = new Uint8Array(new int[] {0xA});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(10, captured[0]);
    }

    /**
     * Verify hexadecimal 0x80 construction element is 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3800
     * @tc.name testUint8ArrayFind038
     * @tc.desc Verify hexadecimal 0x80 construction element is 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind038() {
    Uint8Array arr = new Uint8Array(new int[] {0x80});
    int[] captured = {0};
    arr.forEach((v, i, a) -> {
    captured[0] = v;
    return;
        });
    assertEqual(128, captured[0]);
    }

    /**
     * Verify construction with array literal callback traverses each element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_3900
     * @tc.name testUint8ArrayFind039
     * @tc.desc Verify construction with array literal callback traverses each element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    int sum = arr.reduce((acc, v, index, array) -> acc + v, 0);
    assertEqual(60, sum);
    }

    /**
     * Verify construction from Array of numbers callback traverses each element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4000
     * @tc.name testUint8ArrayFind040
     * @tc.desc Verify construction from Array of numbers callback traverses each element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind040() {
    List<Integer> src = java.util.Arrays.asList(100, 200);
    Uint8Array arr = new Uint8Array(src);
    int sum = arr.reduce((acc, v, index, array) -> acc + v, 0);
    assertEqual(300, sum);
    }

    /**
     * Verify new Uint8Array(N) zero-initialized callback receives all 0 values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4100
     * @tc.name testUint8ArrayFind041
     * @tc.desc Verify new Uint8Array(N) zero-initialized callback receives all 0 values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind041() {
    Uint8Array arr = new Uint8Array(5);
    int[] countZero = {0};
    arr.forEach((v, i, a) -> {
    if (v == 0) {
    countZero[0] = countZero[0] + 1;
    }
    return;
        });
    assertEqual(5, countZero[0]);
    }

    /**
     * Verify construction from ArrayBuffer callback receives all 0 values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4200
     * @tc.name testUint8ArrayFind042
     * @tc.desc Verify construction from ArrayBuffer callback receives all 0 values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind042() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf);
    boolean[] allZero = {true};
    arr.forEach((v, i, a) -> {
    if (v != 0) {
    allZero[0] = false;
    }
    return;
        });
    assertTrue(allZero[0]);
    }

    /**
     * Verify construction from another Uint8Array callback traverses copied elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4300
     * @tc.name testUint8ArrayFind043
     * @tc.desc Verify construction from another Uint8Array callback traverses copied elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind043() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array arr = new Uint8Array(src);
    int sum = arr.reduce((acc, v, index, array) -> acc + v, 0);
    assertEqual(60, sum);
    }

    /**
     * Verify arr.find callback i parameter is 0 when matching at index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4400
     * @tc.name testUint8ArrayFind044
     * @tc.desc Verify arr.find callback i parameter is 0 when matching at index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind044() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int[] matchIdx = {-1};
    Integer result = arr.find((v, i, a) -> {
        if (i == 0 && v == 5) {
            matchIdx[0] = i;
        return true;
        }
        return false;
    });
    assertEqual(0, matchIdx[0]);
    }

    /**
     * Verify arr.find callback i parameter is last index for last element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4500
     * @tc.name testUint8ArrayFind045
     * @tc.desc Verify arr.find callback i parameter is last index for last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind045() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int[] matchIdx = {-1};
    Integer result = arr.find((v, i, a) -> {
        if (v == 15) {
            matchIdx[0] = i;
        return true;
        }
        return false;
    });
    assertEqual(2, matchIdx[0]);
    }

    /**
     * Verify callback i parameter increments sequentially
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4600
     * @tc.name testUint8ArrayFind046
     * @tc.desc Verify callback i parameter increments sequentially
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind046() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    List<Integer> indices = new ArrayList<>();
    arr.forEach((v, i, a) -> {
    indices.add(i);
    return;
        });
    assertEqual(5, indices.size());
    assertEqual(0, indices.get(0));
    assertEqual(1, indices.get(1));
    assertEqual(2, indices.get(2));
    assertEqual(3, indices.get(3));
    assertEqual(4, indices.get(4));
    }

    /**
     * Verify callback i parameter matches value index pattern for each element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4700
     * @tc.name testUint8ArrayFind047
     * @tc.desc Verify callback i parameter matches value index pattern for each element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean[] allMatch = {true};
    arr.forEach((v, i, a) -> {
    if (v != (i + 1) * 10) {
    allMatch[0] = false;
    }
    return;
        });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify callback i parameter is 0 for single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4800
     * @tc.name testUint8ArrayFind048
     * @tc.desc Verify callback i parameter is 0 for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind048() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int[] capturedIdx = {-1};
    arr.forEach((v, i, a) -> {
    capturedIdx[0] = i;
    return;
        });
    assertEqual(0, capturedIdx[0]);
    }

    /**
     * Verify callback i parameter is 0 for first element of multi-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_4900
     * @tc.name testUint8ArrayFind049
     * @tc.desc Verify callback i parameter is 0 for first element of multi-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind049() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int[] firstIdx = {-1};
    boolean[] first = {true};
    arr.forEach((v, i, a) -> {
    if (first[0]) {
    firstIdx[0] = i;
    first[0] = false;
    }
    return;
        });
    assertEqual(0, firstIdx[0]);
    }

    /**
     * Verify callback i parameter is last index for last element of multi-element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5000
     * @tc.name testUint8ArrayFind050
     * @tc.desc Verify callback i parameter is last index for last element of multi-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind050() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int[] lastIdx = {-1};
    arr.forEach((v, i, a) -> {
    lastIdx[0] = i;
    return;
        });
    assertEqual(2, lastIdx[0]);
    }

    /**
     * Verify callback array parameter is the same reference as the original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5100
     * @tc.name testUint8ArrayFind051
     * @tc.desc Verify callback array parameter is the same reference as the original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind051() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean[] sameRef = {false};
    arr.forEach((v, i, a) -> {
    if (a == arr) {
    sameRef[0] = true;
    }
    return;
        });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify callback array parameter has same length as the original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5200
     * @tc.name testUint8ArrayFind052
     * @tc.desc Verify callback array parameter has same length as the original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind052() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean[] sameLength = {false};
    arr.forEach((v, i, a) -> {
    if (a.length() == arr.length()) {
    sameLength[0] = true;
    }
    return;
        });
    assertTrue(sameLength[0]);
    }

    /**
     * Verify callback array parameter elements match original array elements at each index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5300
     * @tc.name testUint8ArrayFind053
     * @tc.desc Verify callback array parameter elements match original array elements at each index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind053() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean[] allMatch = {true};
    arr.forEach((v, i, a) -> {
    if (a.get(i) != arr.get(i)) {
    allMatch[0] = false;
    }
    return;
        });
    assertTrue(allMatch[0]);
    }

    /**
     * Verify callback array parameter is the same reference across multiple calls
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5400
     * @tc.name testUint8ArrayFind054
     * @tc.desc Verify callback array parameter is the same reference across multiple calls
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array[] firstRef = {null};
    boolean[] allSame = {true};
    arr.forEach((v, i, a) -> {
    if (firstRef[0] == null) {
    firstRef[0] = a;
    } else if (a != firstRef[0]) {
    allSame[0] = false;
    }
    return;
        });
    assertTrue(allSame[0]);
    }

    /**
     * Verify callback array parameter is the same reference for single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5500
     * @tc.name testUint8ArrayFind055
     * @tc.desc Verify callback array parameter is the same reference for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind055() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    boolean[] sameRef = {false};
    arr.forEach((v, i, a) -> {
    if (a == arr) {
    sameRef[0] = true;
    }
    return;
        });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify callback returning true on first element stops iteration (callCount = 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5600
     * @tc.name testUint8ArrayFind056
     * @tc.desc Verify callback returning true on first element stops iteration (callCount = 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind056() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return true;
    });
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify callback returning false on all elements iterates through entire array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5700
     * @tc.name testUint8ArrayFind057
     * @tc.desc Verify callback returning false on all elements iterates through entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind057() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return false;
    });
    assertEqual(5, callCount[0]);
    }

    /**
     * Verify callback returning true on second element stops at index 1 (count = 2)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5800
     * @tc.name testUint8ArrayFind058
     * @tc.desc Verify callback returning true on second element stops at index 1 (count = 2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind058() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return v == 2;
    });
    assertEqual(2, callCount[0]);
    }

    /**
     * Verify callback returning true on last element iterates through all 5 elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_5900
     * @tc.name testUint8ArrayFind059
     * @tc.desc Verify callback returning true on last element iterates through all 5 elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind059() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return v == 5;
    });
    assertEqual(5, callCount[0]);
    }

    /**
     * Verify callback returning true on first element of single-element array (count = 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6000
     * @tc.name testUint8ArrayFind060
     * @tc.desc Verify callback returning true on first element of single-element array (count = 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind060() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return true;
    });
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify callback returning false on single element still iterates once (count = 1)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6100
     * @tc.name testUint8ArrayFind061
     * @tc.desc Verify callback returning false on single element still iterates once (count = 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind061() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return false;
    });
    assertEqual(1, callCount[0]);
    }

    /**
     * Verify callback is not invoked on empty array literal
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6200
     * @tc.name testUint8ArrayFind062
     * @tc.desc Verify callback is not invoked on empty array literal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind062() {
    Uint8Array arr = new Uint8Array(new int[] {});
    boolean[] calledFlag = {false};
    arr.forEach((v, i, a) -> {
    calledFlag[0] = true;
    return;
        });
    assertFalse(calledFlag[0]);
    }

    /**
     * Verify callback is not invoked on empty array with false return
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6300
     * @tc.name testUint8ArrayFind063
     * @tc.desc Verify callback is not invoked on empty array with false return
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind063() {
    Uint8Array arr = new Uint8Array(new int[] {});
    boolean[] calledFlag = {false};
    assertFalse(calledFlag[0]);
    }

    /**
     * Verify callback is not invoked on zero-length ArrayBuffer-backed Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6400
     * @tc.name testUint8ArrayFind064
     * @tc.desc Verify callback is not invoked on zero-length ArrayBuffer-backed Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind064() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf);
    boolean[] invoked = {false};
    arr.forEach((v, i, a) -> {
    invoked[0] = true;
    return;
        });
    assertFalse(invoked[0]);
    }

    /**
     * Verify variable captured as match condition via closure works correctly
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6500
     * @tc.name testUint8ArrayFind065
     * @tc.desc Verify variable captured as match condition via closure works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind065() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    int target = 4;
    Integer result = arr.find((v, i, a) -> {
        return v == target;
        });
    assertEqual(4, result);
    }

    /**
     * Verify callback accumulates sum through closure variable
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6600
     * @tc.name testUint8ArrayFind066
     * @tc.desc Verify callback accumulates sum through closure variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind066() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    int sum = arr.reduce((acc, v, index, array) -> acc + v, 0);
    assertEqual(100, sum);
    }

    /**
     * Verify compound condition v >= 128 && v < 192 returns matching value 150
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6700
     * @tc.name testUint8ArrayFind067
     * @tc.desc Verify compound condition v >= 128 && v < 192 returns matching value 150
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind067() {
    Uint8Array arr = new Uint8Array(new int[] {50, 100, 150, 200});
    Integer result = arr.find((v, i, a) -> {
        return v >= 128 && v < 192;
        });
    assertEqual(150, result);
    }

    /**
     * Verify callback uses modulo to match and return first odd number 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6800
     * @tc.name testUint8ArrayFind068
     * @tc.desc Verify callback uses modulo to match and return first odd number 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind068() {
    Uint8Array arr = new Uint8Array(new int[] {2, 4, 7, 8, 10});
    Integer result = arr.find((v, i, a) -> {
        return v % 2 == 1;
        });
    assertEqual(7, result);
    }

    /**
     * Verify callback counts match occurrences while returning false (counts all 3 matches)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_6900
     * @tc.name testUint8ArrayFind069
     * @tc.desc Verify callback counts match occurrences while returning false (counts all 3 matches)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind069() {
    Uint8Array arr = new Uint8Array(new int[] {3, 3, 3});
    int[] matchCount = {0};
    arr.forEach((v, i, a) -> {
    if (v == 3) {
    matchCount[0] = matchCount[0] + 1;
    }
    return;
        });
    assertEqual(3, matchCount[0]);
    }

    /**
     * Verify arr.find returns undefined when no element matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7000
     * @tc.name testUint8ArrayFind070
     * @tc.desc Verify arr.find returns undefined when no element matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind070() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Integer result = arr.find((v, i, a) -> {
        return v > 100;
        });
    assertNull(result);
    }

    /**
     * Verify arr.find returns undefined on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7100
     * @tc.name testUint8ArrayFind071
     * @tc.desc Verify arr.find returns undefined on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind071() {
    Uint8Array arr = new Uint8Array(new int[] {});
    Integer result = arr.find((v, i, a) -> {
        return true;
        });
    assertNull(result);
    }

    /**
     * Verify arr.find iteration count returns 0 on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7200
     * @tc.name testUint8ArrayFind072
     * @tc.desc Verify arr.find iteration count returns 0 on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind072() {
    Uint8Array arr = new Uint8Array(new int[] {});
    int[] callCount = {0};
    arr.find((v, i, a) -> {
        callCount[0]++;
        return true;
    });
    assertEqual(0, callCount[0]);
    }

    /**
     * Verify arr.find returns true when target exists
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7300
     * @tc.name testUint8ArrayFind073
     * @tc.desc Verify arr.find returns true when target exists
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind073() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean found = arr.find((v) -> v == 20) != null;
    assertTrue(found);
    }

    /**
     * Verify arr.find returns false when target does not exist
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7400
     * @tc.name testUint8ArrayFind074
     * @tc.desc Verify arr.find returns false when target does not exist
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind074() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    boolean found = arr.find((v) -> v == 99) != null;
    assertFalse(found);
    }

    /**
     * Verify arr.find returns false on empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7500
     * @tc.name testUint8ArrayFind075
     * @tc.desc Verify arr.find returns false on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind075() {
    Uint8Array arr = new Uint8Array(new int[] {});
    boolean found = arr.find((v) -> v == 1) != null;
    assertFalse(found);
    }

    /**
     * Verify callback that modifies array during iteration reflects changes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7600
     * @tc.name testUint8ArrayFind076
     * @tc.desc Verify callback that modifies array during iteration reflects changes
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind076() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    List<Integer> modified = new ArrayList<>();
    arr.forEach((v, i, a) -> {
    a.set(i, v * 2);
    modified.add(a.get(i));
    return;
        });
    assertEqual(5, modified.size());
    assertEqual(2, modified.get(0));
    assertEqual(4, modified.get(1));
    assertEqual(6, modified.get(2));
    assertEqual(8, modified.get(3));
    assertEqual(10, modified.get(4));
    }

    /**
     * Verify BYTES_PER_ELEMENT is accessible
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7700
     * @tc.name testUint8ArrayFind077
     * @tc.desc Verify BYTES_PER_ELEMENT is accessible
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind077() {
    Uint8Array arr = new Uint8Array(5);
    int bpe = arr.BYTES_PER_ELEMENT;
    assertEqual(1, bpe);
    }

    /**
     * Verify buffer property is accessible on constructed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7800
     * @tc.name testUint8ArrayFind078
     * @tc.desc Verify buffer property is accessible on constructed array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind078() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    ArrayBuffer buf = arr.buffer();
    assertEqual(3, buf.byteLength());
    }

    /**
     * Verify length property returns correct element count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_7900
     * @tc.name testUint8ArrayFind079
     * @tc.desc Verify length property returns correct element count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind079() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    assertEqual(5, arr.length());
    }

    /**
     * Verify array instance BYTES_PER_ELEMENT property
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND01_8000
     * @tc.name testUint8ArrayFind080
     * @tc.desc Verify array instance BYTES_PER_ELEMENT property
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFind080() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(5, arr.length());
    }
}
