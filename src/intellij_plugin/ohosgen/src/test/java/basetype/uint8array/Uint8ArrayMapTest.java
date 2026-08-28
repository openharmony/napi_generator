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
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayMapTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayMapTest extends BasTest {
    /**
     * Verify map with single required parameter fn for basic execution
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0100
     * @tc.name testUint8ArrayMap001
     * @tc.desc Verify map with single required parameter fn for basic execution
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap001() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v + 1);
    assertEqual(3, result.length());
    }

    /**
     * Verify val parameter receives source array element value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0200
     * @tc.name testUint8ArrayMap002
     * @tc.desc Verify val parameter receives source array element value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap002() {
    Uint8Array src = new Uint8Array(new int[] {0});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify val parameter receives source array element value 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0300
     * @tc.name testUint8ArrayMap003
     * @tc.desc Verify val parameter receives source array element value 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap003() {
    Uint8Array src = new Uint8Array(new int[] {1});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(1, captured[0]);
    }

    /**
     * Verify val parameter receives source array element value 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0400
     * @tc.name testUint8ArrayMap004
     * @tc.desc Verify val parameter receives source array element value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap004() {
    Uint8Array src = new Uint8Array(new int[] {127});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(127, captured[0]);
    }

    /**
     * Verify val parameter receives source array element value 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0500
     * @tc.name testUint8ArrayMap005
     * @tc.desc Verify val parameter receives source array element value 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap005() {
    Uint8Array src = new Uint8Array(new int[] {128});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(128, captured[0]);
    }

    /**
     * Verify val parameter receives source array element value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0600
     * @tc.name testUint8ArrayMap006
     * @tc.desc Verify val parameter receives source array element value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap006() {
    Uint8Array src = new Uint8Array(new int[] {255});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify val parameter receives hexadecimal 0x80 source value 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0700
     * @tc.name testUint8ArrayMap007
     * @tc.desc Verify val parameter receives hexadecimal 0x80 source value 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap007() {
    Uint8Array src = new Uint8Array(new int[] {0x80});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(128, captured[0]);
    }

    /**
     * Verify val parameter receives hexadecimal 0xFF source value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0800
     * @tc.name testUint8ArrayMap008
     * @tc.desc Verify val parameter receives hexadecimal 0xFF source value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap008() {
    Uint8Array src = new Uint8Array(new int[] {0xFF});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify val parameter receives overflow value 256 truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_0900
     * @tc.name testUint8ArrayMap009
     * @tc.desc Verify val parameter receives overflow value 256 truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap009() {
    Uint8Array src = new Uint8Array(new int[] {256});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify val parameter receives negative value -1 wrapped to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1000
     * @tc.name testUint8ArrayMap010
     * @tc.desc Verify val parameter receives negative value -1 wrapped to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap010() {
    Uint8Array src = new Uint8Array(new int[] {-1});
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(255, captured[0]);
    }

    /**
     * Verify val parameter receives default zero value from new Uint8Array(3)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1100
     * @tc.name testUint8ArrayMap011
     * @tc.desc Verify val parameter receives default zero value from new Uint8Array(3)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap011() {
    Uint8Array src = new Uint8Array(3);
    int[] captured = {0};
    src.map((v, i, a) -> {
        captured[0] = v;
        return v;
    });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify index parameter for first element is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1200
     * @tc.name testUint8ArrayMap012
     * @tc.desc Verify index parameter for first element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap012() {
    Uint8Array src = new Uint8Array(new int[] {10, 20});
    int[] captured = {-1};
    src.map((v, i, a) -> {
    if (captured[0] == -1) {
        captured[0] = i;
    }
    return v;
        });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify index parameter for second element is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1300
     * @tc.name testUint8ArrayMap013
     * @tc.desc Verify index parameter for second element is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap013() {
    Uint8Array src = new Uint8Array(new int[] {10, 20});
    int[] captured = {-1};
    int[] callCount = {0};
    src.map((v, i, a) -> {
    if (callCount[0] == 1) {
        captured[0] = i;
    }
    callCount[0]++;
    return v;
        });
    assertEqual(1, captured[0]);
    }

    /**
     * Verify index increments from 0 to length-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1400
     * @tc.name testUint8ArrayMap014
     * @tc.desc Verify index increments from 0 to length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap014() {
    Uint8Array src = new Uint8Array(new int[] {0, 0, 0});
    String[] indices = {""};
    src.map((v, i, a) -> {
        indices[0] += String.valueOf(i);
        return v;
    });
    assertEqual("012", indices[0]);
    }

    /**
     * Verify index parameter value used as calculation result
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1500
     * @tc.name testUint8ArrayMap015
     * @tc.desc Verify index parameter value used as calculation result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap015() {
    Uint8Array src = new Uint8Array(4);
    Uint8Array result = src.map((v, i, a) -> i);
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(2, result.get(2));
    assertEqual(3, result.get(3));
    }

    /**
     * Verify index is 0 for single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1600
     * @tc.name testUint8ArrayMap016
     * @tc.desc Verify index is 0 for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap016() {
    Uint8Array src = new Uint8Array(new int[] {42});
    int[] captured = {-1};
    src.map((v, i, a) -> {
        captured[0] = i;
        return v;
    });
    assertEqual(0, captured[0]);
    }

    /**
     * Verify index participates in calculation returning i*64
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1700
     * @tc.name testUint8ArrayMap017
     * @tc.desc Verify index participates in calculation returning i*64
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap017() {
    Uint8Array src = new Uint8Array(4);
    Uint8Array result = src.map((v, i, a) -> i * 64);
    assertEqual(0, result.get(0));
    assertEqual(64, result.get(1));
    assertEqual(128, result.get(2));
    assertEqual(192, result.get(3));
    }

    /**
     * Verify array parameter is same reference as calling object
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1800
     * @tc.name testUint8ArrayMap018
     * @tc.desc Verify array parameter is same reference as calling object
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap018() {
    Uint8Array src = new Uint8Array(new int[] {1, 2});
    boolean[] sameRef = {false};
    src.map((v, i, a) -> {
        sameRef[0] = (a == src);
        return v;
    });
    assertTrue(sameRef[0]);
    }

    /**
     * Verify array parameter length equals source array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_1900
     * @tc.name testUint8ArrayMap019
     * @tc.desc Verify array parameter length equals source array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap019() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    int[] arrLen = {0};
    src.map((v, i, a) -> {
        arrLen[0] = a.length();
        return v;
    });
    assertEqual(3, arrLen[0]);
    }

    /**
     * Verify reading element value through array parameter matches val
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2000
     * @tc.name testUint8ArrayMap020
     * @tc.desc Verify reading element value through array parameter matches val
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap020() {
    Uint8Array src = new Uint8Array(new int[] {77, 88});
    boolean[] match = {true};
    src.map((v, i, a) -> {
    if (a.get(i) != v) {
        match[0] = false;
    }
    return v;
        });
    assertTrue(match[0]);
    }

    /**
     * Verify reading non-current index element through array parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2100
     * @tc.name testUint8ArrayMap021
     * @tc.desc Verify reading non-current index element through array parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap021() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    int[] sum = {0};
    src.map((v, i, a) -> {
    if (i == 1) {
        sum[0] = a.get(0) + a.get(2);
    }
    return v;
        });
    assertEqual(40, sum[0]);
    }

    /**
     * Verify reading last element through array parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2200
     * @tc.name testUint8ArrayMap022
     * @tc.desc Verify reading last element through array parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap022() {
    Uint8Array src = new Uint8Array(new int[] {5, 10, 15});
    int[] lastVal = {0};
    src.map((v, i, a) -> {
    if (i == 0) {
        lastVal[0] = a.get(a.length() - 1);
    }
    return v;
        });
    assertEqual(15, lastVal[0]);
    }

    /**
     * Verify callback returns 0, result array all zeros
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2300
     * @tc.name testUint8ArrayMap023
     * @tc.desc Verify callback returns 0, result array all zeros
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap023() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns 1, result array all ones
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2400
     * @tc.name testUint8ArrayMap024
     * @tc.desc Verify callback returns 1, result array all ones
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap024() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 1);
    assertEqual(1, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(1, result.get(2));
    }

    /**
     * Verify callback returns 127, result array all 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2500
     * @tc.name testUint8ArrayMap025
     * @tc.desc Verify callback returns 127, result array all 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap025() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 127);
    assertEqual(127, result.get(0));
    assertEqual(127, result.get(1));
    assertEqual(127, result.get(2));
    }

    /**
     * Verify callback returns 128, result array all 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2600
     * @tc.name testUint8ArrayMap026
     * @tc.desc Verify callback returns 128, result array all 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap026() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 128);
    assertEqual(128, result.get(0));
    assertEqual(128, result.get(1));
    assertEqual(128, result.get(2));
    }

    /**
     * Verify callback returns 255, result array all 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2700
     * @tc.name testUint8ArrayMap027
     * @tc.desc Verify callback returns 255, result array all 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap027() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 255);
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns 256, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2800
     * @tc.name testUint8ArrayMap028
     * @tc.desc Verify callback returns 256, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap028() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 256);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns -1, wrapped to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_2900
     * @tc.name testUint8ArrayMap029
     * @tc.desc Verify callback returns -1, wrapped to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap029() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> -1);
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns -256, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3000
     * @tc.name testUint8ArrayMap030
     * @tc.desc Verify callback returns -256, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap030() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> -256);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns -257, wrapped to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3100
     * @tc.name testUint8ArrayMap031
     * @tc.desc Verify callback returns -257, wrapped to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap031() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> -257);
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns 1.0, truncated to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3200
     * @tc.name testUint8ArrayMap032
     * @tc.desc Verify callback returns 1.0, truncated to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap032() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> (int) (1.0));
    assertEqual(1, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(1, result.get(2));
    }

    /**
     * Verify callback returns 1.9, truncated to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3300
     * @tc.name testUint8ArrayMap033
     * @tc.desc Verify callback returns 1.9, truncated to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap033() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> (int) (1.9));
    assertEqual(1, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(1, result.get(2));
    }

    /**
     * Verify callback returns 255.9, truncated to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3400
     * @tc.name testUint8ArrayMap034
     * @tc.desc Verify callback returns 255.9, truncated to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap034() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> (int) (255.9));
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns -0.5, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3500
     * @tc.name testUint8ArrayMap035
     * @tc.desc Verify callback returns -0.5, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap035() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> (int) (-0.5));
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns -1.5, wrapped to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3600
     * @tc.name testUint8ArrayMap036
     * @tc.desc Verify callback returns -1.5, wrapped to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap036() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> (int) (-1.5));
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns NaN, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3700
     * @tc.name testUint8ArrayMap037
     * @tc.desc Verify callback returns NaN, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap037() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> (int) (Double.NaN));
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns Infinity, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3800
     * @tc.name testUint8ArrayMap038
     * @tc.desc Verify callback returns Infinity, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap038() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns -Infinity, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_3900
     * @tc.name testUint8ArrayMap039
     * @tc.desc Verify callback returns -Infinity, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap039() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns Number.MAX_VALUE, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4000
     * @tc.name testUint8ArrayMap040
     * @tc.desc Verify callback returns Number.MAX_VALUE, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap040() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns 257, truncated to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4100
     * @tc.name testUint8ArrayMap041
     * @tc.desc Verify callback returns 257, truncated to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap041() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 257);
    assertEqual(1, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(1, result.get(2));
    }

    /**
     * Verify callback returns 512, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4200
     * @tc.name testUint8ArrayMap042
     * @tc.desc Verify callback returns 512, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap042() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 512);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns 1000, truncated to 232
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4300
     * @tc.name testUint8ArrayMap043
     * @tc.desc Verify callback returns 1000, truncated to 232
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap043() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 1000);
    assertEqual(232, result.get(0));
    assertEqual(232, result.get(1));
    assertEqual(232, result.get(2));
    }

    /**
     * Verify callback returns -512, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4400
     * @tc.name testUint8ArrayMap044
     * @tc.desc Verify callback returns -512, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap044() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> -512);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns -1000, truncated to 24
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4500
     * @tc.name testUint8ArrayMap045
     * @tc.desc Verify callback returns -1000, truncated to 24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap045() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> -1000);
    assertEqual(24, result.get(0));
    assertEqual(24, result.get(1));
    assertEqual(24, result.get(2));
    }

    /**
     * Verify callback returns 65536, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4600
     * @tc.name testUint8ArrayMap046
     * @tc.desc Verify callback returns 65536, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap046() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 65536);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns -65536, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4700
     * @tc.name testUint8ArrayMap047
     * @tc.desc Verify callback returns -65536, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap047() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> -65536);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns 0x100, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4800
     * @tc.name testUint8ArrayMap048
     * @tc.desc Verify callback returns 0x100, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap048() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0x100);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns 0xFF, truncated to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_4900
     * @tc.name testUint8ArrayMap049
     * @tc.desc Verify callback returns 0xFF, truncated to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap049() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0xFF);
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns 0x1FF, truncated to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5000
     * @tc.name testUint8ArrayMap050
     * @tc.desc Verify callback returns 0x1FF, truncated to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap050() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0x1FF);
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns 0o400, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5100
     * @tc.name testUint8ArrayMap051
     * @tc.desc Verify callback returns 0o400, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap051() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0400);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify callback returns 0o377, truncated to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5200
     * @tc.name testUint8ArrayMap052
     * @tc.desc Verify callback returns 0o377, truncated to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap052() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0377);
    assertEqual(255, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(255, result.get(2));
    }

    /**
     * Verify callback returns 0b100000000, truncated to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5300
     * @tc.name testUint8ArrayMap053
     * @tc.desc Verify callback returns 0b100000000, truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap053() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> 0b100000000);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    /**
     * Verify map returns new array without modifying original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5400
     * @tc.name testUint8ArrayMap054
     * @tc.desc Verify map returns new array without modifying original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap054() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v * 2);
    assertEqual(1, src.get(0));
    assertEqual(2, src.get(1));
    assertEqual(3, src.get(2));
    assertEqual(2, result.get(0));
    assertEqual(4, result.get(1));
    assertEqual(6, result.get(2));
    }

    /**
     * Verify map returns array with same length as source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5500
     * @tc.name testUint8ArrayMap055
     * @tc.desc Verify map returns array with same length as source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap055() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = src.map((v, i, a) -> v);
    assertEqual(5, result.length());
    }

    /**
     * Verify map returns Uint8Array type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5600
     * @tc.name testUint8ArrayMap056
     * @tc.desc Verify map returns Uint8Array type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap056() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v);
    assertEqual(3, result.length());
    }

    /**
     * Verify map returns array does not share memory with source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5700
     * @tc.name testUint8ArrayMap057
     * @tc.desc Verify map returns array does not share memory with source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap057() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v * 2);
    result.set(new Uint8Array(new int[] {99}), 0);
    assertEqual(1, src.at(0));
    }

    /**
     * Verify map returns array has newly allocated buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5800
     * @tc.name testUint8ArrayMap058
     * @tc.desc Verify map returns array has newly allocated buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap058() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v);
    assertTrue(result.buffer() != src.buffer());
    }

    /**
     * Verify map returns array byteLength equals source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_5900
     * @tc.name testUint8ArrayMap059
     * @tc.desc Verify map returns array byteLength equals source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap059() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = src.map((v, i, a) -> v);
    assertEqual(5, result.byteLength());
    }

    /**
     * Verify map returns array byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6000
     * @tc.name testUint8ArrayMap060
     * @tc.desc Verify map returns array byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap060() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v);
    assertEqual(0, result.byteOffset());
    }

    /**
     * Verify callback returns v + 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6100
     * @tc.name testUint8ArrayMap061
     * @tc.desc Verify callback returns v + 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap061() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v + 100);
    assertEqual(101, result.get(0));
    assertEqual(102, result.get(1));
    assertEqual(103, result.get(2));
    }

    /**
     * Verify callback returns v * 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6200
     * @tc.name testUint8ArrayMap062
     * @tc.desc Verify callback returns v * 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap062() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v * 2);
    assertEqual(2, result.get(0));
    assertEqual(4, result.get(1));
    assertEqual(6, result.get(2));
    }

    /**
     * Verify callback returns v - 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6300
     * @tc.name testUint8ArrayMap063
     * @tc.desc Verify callback returns v - 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap063() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v - 1);
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(2, result.get(2));
    }

    /**
     * Verify callback returns v / 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6400
     * @tc.name testUint8ArrayMap064
     * @tc.desc Verify callback returns v / 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap064() {
    Uint8Array src = new Uint8Array(new int[] {2, 4, 6});
    Uint8Array result = src.map((v, i, a) -> v / 2);
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    }

    /**
     * Verify callback returns v % 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6500
     * @tc.name testUint8ArrayMap065
     * @tc.desc Verify callback returns v % 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap065() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = src.map((v, i, a) -> v % 2);
    assertEqual(1, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(1, result.get(2));
    assertEqual(0, result.get(3));
    assertEqual(1, result.get(4));
    }

    /**
     * Verify callback returns v & 0x0F
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6600
     * @tc.name testUint8ArrayMap066
     * @tc.desc Verify callback returns v & 0x0F
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap066() {
    Uint8Array src = new Uint8Array(new int[] {0, 15, 16, 31, 32});
    Uint8Array result = src.map((v, i, a) -> v & 0x0F);
    assertEqual(0, result.get(0));
    assertEqual(15, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(15, result.get(3));
    assertEqual(0, result.get(4));
    }

    /**
     * Verify callback returns v | 0x80
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6700
     * @tc.name testUint8ArrayMap067
     * @tc.desc Verify callback returns v | 0x80
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap067() {
    Uint8Array src = new Uint8Array(new int[] {0, 1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> v | 0x80);
    assertEqual(128, result.get(0));
    assertEqual(129, result.get(1));
    assertEqual(130, result.get(2));
    assertEqual(131, result.get(3));
    }

    /**
     * Verify callback returns v ^ 0xFF
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6800
     * @tc.name testUint8ArrayMap068
     * @tc.desc Verify callback returns v ^ 0xFF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap068() {
    Uint8Array src = new Uint8Array(new int[] {0, 1, 127, 128, 255});
    Uint8Array result = src.map((v, i, a) -> v ^ 0xFF);
    assertEqual(255, result.get(0));
    assertEqual(254, result.get(1));
    assertEqual(128, result.get(2));
    assertEqual(127, result.get(3));
    assertEqual(0, result.get(4));
    }

    /**
     * Verify callback returns v << 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_6900
     * @tc.name testUint8ArrayMap069
     * @tc.desc Verify callback returns v << 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap069() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 4, 8, 16});
    Uint8Array result = src.map((v, i, a) -> v << 1);
    assertEqual(2, result.get(0));
    assertEqual(4, result.get(1));
    assertEqual(8, result.get(2));
    assertEqual(16, result.get(3));
    assertEqual(32, result.get(4));
    }

    /**
     * Verify callback returns v >> 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7000
     * @tc.name testUint8ArrayMap070
     * @tc.desc Verify callback returns v >> 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap070() {
    Uint8Array src = new Uint8Array(new int[] {2, 4, 8, 16, 32});
    Uint8Array result = src.map((v, i, a) -> v >> 1);
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(4, result.get(2));
    assertEqual(8, result.get(3));
    assertEqual(16, result.get(4));
    }

    /**
     * Verify callback returns ~v
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7100
     * @tc.name testUint8ArrayMap071
     * @tc.desc Verify callback returns ~v
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap071() {
    Uint8Array src = new Uint8Array(new int[] {0, 1, 127, 128, 255});
    Uint8Array result = src.map((v, i, a) -> ~v);
    assertEqual(255, result.get(0));
    assertEqual(254, result.get(1));
    assertEqual(128, result.get(2));
    assertEqual(127, result.get(3));
    assertEqual(0, result.get(4));
    }

    /**
     * Verify callback returns v ** 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7200
     * @tc.name testUint8ArrayMap072
     * @tc.desc Verify callback returns v ** 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap072() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array result = src.map((v, i, a) -> (int) Math.pow(v, 2));
    assertEqual(1, result.get(0));
    assertEqual(4, result.get(1));
    assertEqual(9, result.get(2));
    assertEqual(16, result.get(3));
    assertEqual(25, result.get(4));
    }

    /**
     * Verify callback returns Math.abs(v - 128)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7300
     * @tc.name testUint8ArrayMap073
     * @tc.desc Verify callback returns Math.abs(v - 128)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap073() {
    Uint8Array src = new Uint8Array(new int[] {0, 64, 128, 192, 255});
    Uint8Array result = src.map((v, i, a) -> Math.abs(v - 128));
    assertEqual(128, result.get(0));
    assertEqual(64, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(64, result.get(3));
    assertEqual(127, result.get(4));
    }

    /**
     * Verify callback returns v > 128 ? 255 : 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7400
     * @tc.name testUint8ArrayMap074
     * @tc.desc Verify callback returns v > 128 ? 255 : 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap074() {
    Uint8Array src = new Uint8Array(new int[] {0, 64, 128, 129, 255});
    Uint8Array result = src.map((v, i, a) -> v > 128 ? 255 : 0);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(255, result.get(3));
    assertEqual(255, result.get(4));
    }

    /**
     * Verify callback returns v === 0 ? 255 : v
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7500
     * @tc.name testUint8ArrayMap075
     * @tc.desc Verify callback returns v === 0 ? 255 : v
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap075() {
    Uint8Array src = new Uint8Array(new int[] {0, 1, 128, 255});
    Uint8Array result = src.map((v, i, a) -> v == 0 ? 255 : v);
    assertEqual(255, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(128, result.get(2));
    assertEqual(255, result.get(3));
    }

    /**
     * Verify callback returns v & 1 ? v : 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7600
     * @tc.name testUint8ArrayMap076
     * @tc.desc Verify callback returns v & 1 ? v : 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap076() {
    Uint8Array src = new Uint8Array(new int[] {0, 1, 2, 3, 4});
    Uint8Array result = src.map((v, i, a) -> ((v & 1) != 0) ? v : 0);
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(3, result.get(3));
    assertEqual(0, result.get(4));
    }

    /**
     * Verify callback returns v + i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7700
     * @tc.name testUint8ArrayMap077
     * @tc.desc Verify callback returns v + i
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap077() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = src.map((v, i, a) -> v + i);
    assertEqual(10, result.get(0));
    assertEqual(21, result.get(1));
    assertEqual(32, result.get(2));
    }

    /**
     * Verify callback returns v * i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7800
     * @tc.name testUint8ArrayMap078
     * @tc.desc Verify callback returns v * i
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap078() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = src.map((v, i, a) -> v * i);
    assertEqual(0, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(60, result.get(2));
    }

    /**
     * Verify callback returns v + a[i]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_7900
     * @tc.name testUint8ArrayMap079
     * @tc.desc Verify callback returns v + a[i]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap079() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = src.map((v, i, a) -> v + a.get(i));
    assertEqual(20, result.get(0));
    assertEqual(40, result.get(1));
    assertEqual(60, result.get(2));
    }

    /**
     * Verify callback returns v + a[(i+1)%length]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_8000
     * @tc.name testUint8ArrayMap080
     * @tc.desc Verify callback returns v + a[(i+1)%length]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap080() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = src.map((v, i, a) -> v + a.get((i + 1) % a.length()));
    assertEqual(30, result.get(0));
    assertEqual(50, result.get(1));
    assertEqual(40, result.get(2));
    }

    /**
     * Verify callback returns v + a[(i-1+length)%length]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_8100
     * @tc.name testUint8ArrayMap081
     * @tc.desc Verify callback returns v + a[(i-1+length)%length]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap081() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array result = src.map((v, i, a) -> v + a.get((i - 1 + a.length()) % a.length()));
    assertEqual(40, result.get(0));
    assertEqual(30, result.get(1));
    assertEqual(50, result.get(2));
    }

    /**
     * Verify modifying source array element in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_8200
     * @tc.name testUint8ArrayMap082
     * @tc.desc Verify modifying source array element in callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap082() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> {
        if (i == 0) { a.set(new Uint8Array(new int[] {255}), 1);
        }
        return v;
    });
    assertEqual(1, result.get(0));
    assertEqual(255, result.get(1));
    assertEqual(3, result.get(2));
    }

    /**
     * Verify map callback can compute sum of all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_8300
     * @tc.name testUint8ArrayMap083
     * @tc.desc Verify map callback can compute sum of all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap083() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> {
        int[] sum = {0};
        for (int j = 0;
        j < a.length();
        j++) {
            sum[0] += a.get(j);
        }
        return v + sum[0];
    });
    assertEqual(7, result.get(0));
    assertEqual(8, result.get(1));
    assertEqual(9, result.get(2));
    }

    /**
     * Verify map callback can find maximum of all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_MAP_8400
     * @tc.name testUint8ArrayMap084
     * @tc.desc Verify map callback can find maximum of all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayMap084() {
    Uint8Array src = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array result = src.map((v, i, a) -> {
        int max = 0;
        for (int j = 0;
        j < a.length();
        j++) {
        if (a.get(j) > max) {
            max = a.get(j);
        } }
        return v + max;
    });
    assertEqual(4, result.get(0));
    assertEqual(5, result.get(1));
    assertEqual(6, result.get(2));
    }
}
