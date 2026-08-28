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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayForEach01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayForEach01Test extends BasTest {
    /**
     * Verify forEach iteration count equals 3 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0100
     * @tc.name testUint8ClampedArrayForEachOne001
     * @tc.desc Verify forEach iteration count equals 3 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] count = {0};
    arr.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(3, count[0]);
    }

    /**
     * Verify forEach iteration count equals 0 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0200
     * @tc.name testUint8ClampedArrayForEachOne002
     * @tc.desc Verify forEach iteration count equals 0 for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] count = {0};
    arr.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(0, count[0]);
    }

    /**
     * Verify forEach iteration count equals 65535 for length-65535 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0300
     * @tc.name testUint8ClampedArrayForEachOne003
     * @tc.desc Verify forEach iteration count equals 65535 for length-65535 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    int[] count = {0};
    arr.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(65535, count[0]);
    }

    /**
     * Verify forEach first equals 100 for array [100, 200, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0400
     * @tc.name testUint8ClampedArrayForEachOne004
     * @tc.desc Verify forEach first equals 100 for array [100, 200, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50});
    int[] first = {-1};
    arr.forEach((v, i, a) -> {
        if (i == 0) {
            first[0] = v;
    } });
    assertEqual(100, first[0]);
    }

    /**
     * Verify forEach mid equals 200 for array [100, 200, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0500
     * @tc.name testUint8ClampedArrayForEachOne005
     * @tc.desc Verify forEach mid equals 200 for array [100, 200, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50});
    int[] mid = {-1};
    arr.forEach((v, i, a) -> {
        if (i == 1) {
            mid[0] = v;
    } });
    assertEqual(200, mid[0]);
    }

    /**
     * Verify forEach last key equals 50 for array [100, 200, 50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0600
     * @tc.name testUint8ClampedArrayForEachOne006
     * @tc.desc Verify forEach last key equals 50 for array [100, 200, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50});
    int[] last = {-1};
    arr.forEach((v, i, a) -> {
        if (i == 2) {
            last[0] = v;
    } });
    assertEqual(50, last[0]);
    }

    /**
     * Verify forEach accumulated sum equals 0 for array [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0700
     * @tc.name testUint8ClampedArrayForEachOne007
     * @tc.desc Verify forEach accumulated sum equals 0 for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        });
    assertEqual(0, sum[0]);
    }

    /**
     * Verify forEach accumulated sum equals 765 for array [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0800
     * @tc.name testUint8ClampedArrayForEachOne008
     * @tc.desc Verify forEach accumulated sum equals 765 for array [255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        });
    assertEqual(765, sum[0]);
    }

    /**
     * Verify callback value clamp 256 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_0900
     * @tc.name testUint8ClampedArrayForEachOne009
     * @tc.desc Verify callback value clamp 256 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(255, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 0 for array [-1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1000
     * @tc.name testUint8ClampedArrayForEachOne010
     * @tc.desc Verify forEach capturedValue equals 0 for array [-1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(0, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 0 for array [Number.NaN]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1100
     * @tc.name testUint8ClampedArrayForEachOne011
     * @tc.desc Verify forEach capturedValue equals 0 for array [Number.NaN]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(0, capturedValue[0]);
    }

    /**
     * Verify callback value Infinity clamp 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1200
     * @tc.name testUint8ClampedArrayForEachOne012
     * @tc.desc Verify callback value Infinity clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(255, capturedValue[0]);
    }

    /**
     * Verify callback value -Infinity clamp 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1300
     * @tc.name testUint8ClampedArrayForEachOne013
     * @tc.desc Verify callback value -Infinity clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(0, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 128 for array [127.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1400
     * @tc.name testUint8ClampedArrayForEachOne014
     * @tc.desc Verify forEach capturedValue equals 128 for array [127.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(128, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 128 for array [128.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1500
     * @tc.name testUint8ClampedArrayForEachOne015
     * @tc.desc Verify forEach capturedValue equals 128 for array [128.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(128, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 0 for array [0.5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1600
     * @tc.name testUint8ClampedArrayForEachOne016
     * @tc.desc Verify forEach capturedValue equals 0 for array [0.5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(0, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 0 for array [0.4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1700
     * @tc.name testUint8ClampedArrayForEachOne017
     * @tc.desc Verify forEach capturedValue equals 0 for array [0.4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(0, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 1 for array [0.9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1800
     * @tc.name testUint8ClampedArrayForEachOne018
     * @tc.desc Verify forEach capturedValue equals 1 for array [0.9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(1, capturedValue[0]);
    }

    /**
     * Verify callback value 1e9 clamp 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_1900
     * @tc.name testUint8ClampedArrayForEachOne019
     * @tc.desc Verify callback value 1e9 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(255, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 0 for array [-1e9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2000
     * @tc.name testUint8ClampedArrayForEachOne020
     * @tc.desc Verify forEach capturedValue equals 0 for array [-1e9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(0, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 127 for array [127]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2100
     * @tc.name testUint8ClampedArrayForEachOne021
     * @tc.desc Verify forEach capturedValue equals 127 for array [127]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(127, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 128 for array [128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2200
     * @tc.name testUint8ClampedArrayForEachOne022
     * @tc.desc Verify forEach capturedValue equals 128 for array [128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(128, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 128 for array [0x80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2300
     * @tc.name testUint8ClampedArrayForEachOne023
     * @tc.desc Verify forEach capturedValue equals 128 for array [0x80]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x80});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(128, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 255 for array [0o377]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2400
     * @tc.name testUint8ClampedArrayForEachOne024
     * @tc.desc Verify forEach capturedValue equals 255 for array [0o377]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0377});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(255, capturedValue[0]);
    }

    /**
     * Verify forEach capturedValue equals 255 for array [0b11111111]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2500
     * @tc.name testUint8ClampedArrayForEachOne025
     * @tc.desc Verify forEach capturedValue equals 255 for array [0b11111111]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> {
        capturedValue[0] = v;
        });
    assertEqual(255, capturedValue[0]);
    }

    /**
     * Verify forEach firstIdx equals 0 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2600
     * @tc.name testUint8ClampedArrayForEachOne026
     * @tc.desc Verify forEach firstIdx equals 0 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] firstIdx = {-1};
    arr.forEach((v, i, a) -> {
        if (firstIdx[0] == -1) {
            firstIdx[0] = i;
    } });
    assertEqual(0, firstIdx[0]);
    }

    /**
     * Verify forEach last key equals 2 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2700
     * @tc.name testUint8ClampedArrayForEachOne027
     * @tc.desc Verify forEach last key equals 2 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] lastIdx = {-1};
    arr.forEach((v, i, a) -> {
        lastIdx[0] = i;
        });
    assertEqual(2, lastIdx[0]);
    }

    /**
     * Verify forEach element at indices[0] equals 0 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2800
     * @tc.name testUint8ClampedArrayForEachOne028
     * @tc.desc Verify forEach element at indices[0] equals 0 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    List<Integer> indices = new ArrayList<>();
    arr.forEach((v, i, a) -> {
        indices.add(i);
        });
    assertEqual(0, indices.get(0));
    assertEqual(1, indices.get(1));
    assertEqual(2, indices.get(2));
    assertEqual(3, indices.get(3));
    assertEqual(4, indices.get(4));
    }

    /**
     * Verify callback array length length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_2900
     * @tc.name testUint8ClampedArrayForEachOne029
     * @tc.desc Verify callback array length length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] alen = {-1};
    arr.forEach((v, i, a) -> {
        if (i == 0) {
            alen[0] = a.length();
    } });
    assertEqual(4, alen[0]);
    }

    /**
     * Verify callback third argument a equals array reference for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3000
     * @tc.name testUint8ClampedArrayForEachOne030
     * @tc.desc Verify callback third argument a equals array reference for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] allSame = {true};
    int[] calls = {0};
    arr.forEach((v, i, a) -> {
        if (a != arr) {
            allSame[0] = false;
        } calls[0]++;
    });
    assertTrue(allSame[0]);
    assertEqual(3, calls[0]);
    }

    /**
     * Verify forEach accumulated sum equals 6 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3100
     * @tc.name testUint8ClampedArrayForEachOne031
     * @tc.desc Verify forEach accumulated sum equals 6 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        });
    assertEqual(6, sum[0]);
    }

    /**
     * Verify forEach accumulated sum equals 3 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3200
     * @tc.name testUint8ClampedArrayForEachOne032
     * @tc.desc Verify forEach accumulated sum equals 3 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] idxSum = {0};
    arr.forEach((v, i, a) -> {
        idxSum[0] = idxSum[0] + i;
        });
    assertEqual(3, idxSum[0]);
    }

    /**
     * Verify Uint8ClampedArray(5) default elements are all 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3300
     * @tc.name testUint8ClampedArrayForEachOne033
     * @tc.desc Verify Uint8ClampedArray(5) default elements are all 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    int[] sum = {0};
    int[] calls = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        calls[0]++;
    });
    assertEqual(0, sum[0]);
    assertEqual(5, calls[0]);
    }

    /**
     * Verify forEach iteration count equals 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3400
     * @tc.name testUint8ClampedArrayForEachOne034
     * @tc.desc Verify forEach iteration count equals 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne034() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int[] count = {0};
    arr.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(4, count[0]);
    }

    /**
     * Verify forEach iteration count equals 4 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3500
     * @tc.name testUint8ClampedArrayForEachOne035
     * @tc.desc Verify forEach iteration count equals 4 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne035() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int[] count = {0};
    arr.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(4, count[0]);
    }

    /**
     * Verify forEach iteration count equals 0 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3600
     * @tc.name testUint8ClampedArrayForEachOne036
     * @tc.desc Verify forEach iteration count equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    int[] count = {0};
    arr.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(0, count[0]);
    }

    /**
     * Verify subarray iteration count equals 3 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3700
     * @tc.name testUint8ClampedArrayForEachOne037
     * @tc.desc Verify subarray iteration count equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne037() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int[] count = {0};
    int[] sum = {0};
    sub.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        sum[0] = sum[0] + v;
    });
    assertEqual(3, count[0]);
    assertEqual(9, sum[0]);
    }

    /**
     * Verify slice iteration count equals 3 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3800
     * @tc.name testUint8ClampedArrayForEachOne038
     * @tc.desc Verify slice iteration count equals 3 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne038() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = parent.slice(0, 3);
    int[] count = {0};
    s.forEach((v, i, a) -> {
        count[0] = count[0] + 1;
        });
    assertEqual(3, count[0]);
    }

    /**
     * Verify forEach value all elements 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_3900
     * @tc.name testUint8ClampedArrayForEachOne039
     * @tc.desc Verify forEach value all elements 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    boolean[] allZero = {true};
    int[] calls = {0};
    arr.forEach((v, i, a) -> {
        if (v != 0) {
            allZero[0] = false;
        } calls[0]++;
    });
    assertTrue(allZero[0]);
    assertEqual(4, calls[0]);
    }

    /**
     * Verify forEach value all elements 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4000
     * @tc.name testUint8ClampedArrayForEachOne040
     * @tc.desc Verify forEach value all elements 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255, 255});
    boolean[] all255 = {true};
    int[] calls = {0};
    arr.forEach((v, i, a) -> {
        if (v != 255) {
            all255[0] = false;
        } calls[0]++;
    });
    assertTrue(all255[0]);
    assertEqual(4, calls[0]);
    }

    /**
     * Verify forEach value equals index 0..4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4100
     * @tc.name testUint8ClampedArrayForEachOne041
     * @tc.desc Verify forEach value equals index 0..4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3, 4});
    boolean[] match = {true};
    arr.forEach((v, i, a) -> {
        if (v != (i)) {
            match[0] = false;
    } });
    assertTrue(match[0]);
    }

    /**
     * Verify forEach value sum 0 255 0 255 equals 510
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4200
     * @tc.name testUint8ClampedArrayForEachOne042
     * @tc.desc Verify forEach value sum 0 255 0 255 equals 510
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        });
    assertEqual(510, sum[0]);
    }

    /**
     * Verify forEach accumulated sum equals 255 for array [127, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4300
     * @tc.name testUint8ClampedArrayForEachOne043
     * @tc.desc Verify forEach accumulated sum equals 255 for array [127, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128});
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        });
    assertEqual(255, sum[0]);
    }

    /**
     * Verify forEach returns undefined after visiting all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4400
     * @tc.name testUint8ClampedArrayForEachOne044
     * @tc.desc Verify forEach returns undefined after visiting all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Object ret = null;
    arr.forEach((v, i, a) -> {});
    assertNull(ret);
    }

    /**
     * Verify forEach yields length 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4500
     * @tc.name testUint8ClampedArrayForEachOne045
     * @tc.desc Verify forEach yields length 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.forEach((v, i, a) -> {});
    assertEqual(3, arr.length());
    }

    /**
     * Verify forEach yields byteLength 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4600
     * @tc.name testUint8ClampedArrayForEachOne046
     * @tc.desc Verify forEach yields byteLength 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.forEach((v, i, a) -> {});
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify forEach buffer reference matches for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4700
     * @tc.name testUint8ClampedArrayForEachOne047
     * @tc.desc Verify forEach buffer reference matches for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.forEach((v, i, a) -> {});
    assertEqual(bufBefore, arr.buffer());
    }

    /**
     * Verify forEach yields byteOffset 2 for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4800
     * @tc.name testUint8ClampedArrayForEachOne048
     * @tc.desc Verify forEach yields byteOffset 2 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne048() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.forEach((v, i, a) -> {});
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify forEach ret equals undefined for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_4900
     * @tc.name testUint8ClampedArrayForEachOne049
     * @tc.desc Verify forEach ret equals undefined for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Object ret = null;
    arr.forEach((v, i, a) -> {});
    assertNull(ret);
    }

    /**
     * Verify forEach propagates Error thrown by the callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5000
     * @tc.name testUint8ClampedArrayForEachOne050
     * @tc.desc Verify forEach propagates Error thrown by the callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.forEach((v, i, a) -> {
        BasTest.throwTestError("cb err");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach stops after the callback throws at index 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5100
     * @tc.name testUint8ClampedArrayForEachOne051
     * @tc.desc Verify forEach stops after the callback throws at index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] count = {0};
    try {
    arr.forEach((v, i, a) -> {
    count[0] = count[0] + 1;
    if (i == 1) {
        BasTest.throwTestError("stop");
    }
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(2, count[0]);
    }

    /**
     * Verify forEach propagates RangeError thrown by the callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5200
     * @tc.name testUint8ClampedArrayForEachOne052
     * @tc.desc Verify forEach propagates RangeError thrown by the callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.forEach((v, i, a) -> {
        throw new RangeError("RangeError");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach propagates TypeError thrown by the callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5300
     * @tc.name testUint8ClampedArrayForEachOne053
     * @tc.desc Verify forEach propagates TypeError thrown by the callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.forEach((v, i, a) -> {
        throw new TypeError("type");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify forEach invokes the callback once before first-element failure
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5400
     * @tc.name testUint8ClampedArrayForEachOne054
     * @tc.desc Verify forEach invokes the callback once before first-element failure
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    try {
    arr.forEach((v, i, a) -> {
    count[0] = count[0] + 1;
    BasTest.throwTestError("first[0]");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(1, count[0]);
    }

    /**
     * Verify forEach invokes the callback three times before last-element failure
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5500
     * @tc.name testUint8ClampedArrayForEachOne055
     * @tc.desc Verify forEach invokes the callback three times before last-element failure
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    try {
    arr.forEach((v, i, a) -> {
    count[0] = count[0] + 1;
    if (i == 2) {
        BasTest.throwTestError("last[0]");
    }
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(3, count[0]);
    }

    /**
     * Verify forEach behavior for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5600
     * @tc.name testUint8ClampedArrayForEachOne056
     * @tc.desc Verify forEach behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    boolean[] entered = {false};
    arr.forEach((v, i, a) -> {
    entered[0] = true;
    BasTest.throwTestError("x");
        });
    assertFalse(entered[0]);
    }

    /**
     * Verify forEach outer equals 110 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5700
     * @tc.name testUint8ClampedArrayForEachOne057
     * @tc.desc Verify forEach outer equals 110 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] outer = {100};
    arr.forEach((v, i, a) -> {
        outer[0] = outer[0] + v;
        });
    assertEqual(110, outer[0]);
    }

    /**
     * Verify forEach maxVal equals 15 for array [5, 10, 15]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5800
     * @tc.name testUint8ClampedArrayForEachOne058
     * @tc.desc Verify forEach maxVal equals 15 for array [5, 10, 15]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    int[] maxVal = {0};
    arr.forEach((v, i, a) -> {
        if (v > maxVal[0]) {
            maxVal[0] = v;
    } });
    assertEqual(15, maxVal[0]);
    }

    /**
     * Verify forEach element at arr[1] equals 99 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_5900
     * @tc.name testUint8ClampedArrayForEachOne059
     * @tc.desc Verify forEach element at arr[1] equals 99 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.forEach((v, i, a) -> {
        if (i == 0) {
            arr.set(1, 99);
    } });
    assertEqual(99, arr.get(1));
    }

    /**
     * Verify forEach reads value 88 after a prior callback mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6000
     * @tc.name testUint8ClampedArrayForEachOne060
     * @tc.desc Verify forEach reads value 88 after a prior callback mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] seenAt1 = {-1};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
        arr.set(1, 88);
    }
    if (i == 1) {
        seenAt1[0] = v;
    }
    });
    assertEqual(88, seenAt1[0]);
    }

    /**
     * Verify forEach receives the original first value before mutation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6100
     * @tc.name testUint8ClampedArrayForEachOne061
     * @tc.desc Verify forEach receives the original first value before mutation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] firstVal = {-1};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
        firstVal[0] = v;
    arr.set(0, 200);
    }
    });
    assertEqual(10, firstVal[0]);
    assertEqual(200, arr.get(0));
    }

    /**
     * Verify callback array this callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6200
     * @tc.name testUint8ClampedArrayForEachOne062
     * @tc.desc Verify callback array this callback
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] seen = {-1};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
        a.set(2, 77);
    }
    if (i == 2) {
        seen[0] = v;
    }
    });
    assertEqual(77, seen[0]);
    }

    /**
     * Verify forEach element at arr[1] equals 255 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6300
     * @tc.name testUint8ClampedArrayForEachOne063
     * @tc.desc Verify forEach element at arr[1] equals 255 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.forEach((v, i, a) -> {
        if (i == 0) {
            arr.set(1, 256);
    } });
    assertEqual(255, arr.get(1));
    }

    /**
     * Verify forEach element at arr[1] equals 0 for array [5, 10, 15]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6400
     * @tc.name testUint8ClampedArrayForEachOne064
     * @tc.desc Verify forEach element at arr[1] equals 0 for array [5, 10, 15]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    arr.forEach((v, i, a) -> {
        if (i == 0) {
            arr.set(1, -1);
    } });
    assertEqual(0, arr.get(1));
    }

    /**
     * Verify forEach element at arr[0] equals 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6500
     * @tc.name testUint8ClampedArrayForEachOne065
     * @tc.desc Verify forEach element at arr[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.forEach((v, i, a) -> {});
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(3, arr.length());
    }

    /**
     * Verify forEach reads values filled into later indices during iteration
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6600
     * @tc.name testUint8ClampedArrayForEachOne066
     * @tc.desc Verify forEach reads values filled into later indices during iteration
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] lastVal = {-1};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
        arr.fill(7, 1);
    }
    if (i == 3) {
        lastVal[0] = v;
    }
    });
    assertEqual(7, lastVal[0]);
    }

    /**
     * Verify nested forEach calls produce four callback pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6700
     * @tc.name testUint8ClampedArrayForEachOne067
     * @tc.desc Verify nested forEach calls produce four callback pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne067() {
    Uint8ClampedArray arr1 = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {10, 20});
    int[] pairs = {0};
    arr1.forEach((outerValue, outerIndex, outerArr) -> {
    arr2.forEach((innerValue, innerIndex, innerArr) -> {
        pairs[0] = pairs[0] + 1;
        });
    });
    assertEqual(4, pairs[0]);
    }

    /**
     * Verify nested forEach calls accumulate paired values to 66
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6800
     * @tc.name testUint8ClampedArrayForEachOne068
     * @tc.desc Verify nested forEach calls accumulate paired values to 66
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne068() {
    Uint8ClampedArray arr1 = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray arr2 = new Uint8ClampedArray(new int[] {10, 20});
    int[] total = {0};
    arr1.forEach((v1, i1, a1) -> {
    arr2.forEach((v2, i2, a2) -> {
        total[0] = total[0] + v1 + v2;
        });
    });
    assertEqual(66, total[0]);
    }

    /**
     * Verify nested forEach calls on the receiver produce four callback pairs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_6900
     * @tc.name testUint8ClampedArrayForEachOne069
     * @tc.desc Verify nested forEach calls on the receiver produce four callback pairs
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int[] pairs = {0};
    arr.forEach((v, i, a) -> {
    a.forEach((v2, i2, a2) -> {
        pairs[0] = pairs[0] + 1;
        });
    });
    assertEqual(4, pairs[0]);
    }

    /**
     * Verify forEach element at seen[0] equals 5 for array [5, 10, 15, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7000
     * @tc.name testUint8ClampedArrayForEachOne070
     * @tc.desc Verify forEach element at seen[0] equals 5 for array [5, 10, 15, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    List<Integer> seen = new ArrayList<>();
    arr.forEach((v, i, a) -> {
        seen.add(v);
        });
    assertEqual(5, seen.get(0));
    assertEqual(10, seen.get(1));
    assertEqual(15, seen.get(2));
    assertEqual(20, seen.get(3));
    }

    /**
     * Verify the callback receiver exposes value 3 at index 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7100
     * @tc.name testUint8ClampedArrayForEachOne071
     * @tc.desc Verify the callback receiver exposes value 3 at index 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] crossRead = {-1};
    arr.forEach((v, i, a) -> {
    if (i == 0) {
        crossRead[0] = a.get(2);
    }
    });
    assertEqual(3, crossRead[0]);
    }

    /**
     * Verify subarray element at parent[1] equals 99 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7200
     * @tc.name testUint8ClampedArrayForEachOne072
     * @tc.desc Verify subarray element at parent[1] equals 99 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne072() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    sub.forEach((v, i, a) -> {
        sub.set(i, 99);
        });
    assertEqual(99, parent.get(1));
    assertEqual(99, parent.get(2));
    assertEqual(99, parent.get(3));
    }

    /**
     * Verify subarray element at parent[0] equals 1 for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7300
     * @tc.name testUint8ClampedArrayForEachOne073
     * @tc.desc Verify subarray element at parent[0] equals 1 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne073() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    sub.forEach((v, i, a) -> {
        sub.set(i, 99);
        });
    assertEqual(1, parent.get(0));
    assertEqual(5, parent.get(4));
    }

    /**
     * Verify slice element at parent[0] equals 1 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7400
     * @tc.name testUint8ClampedArrayForEachOne074
     * @tc.desc Verify slice element at parent[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne074() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice();
    s.forEach((v, i, a) -> {
        s.set(i, 77);
        });
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    }

    /**
     * Verify subarray element at sub[0] equals 88 for array [1, 2, 3, 4]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7500
     * @tc.name testUint8ClampedArrayForEachOne075
     * @tc.desc Verify subarray element at sub[0] equals 88 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne075() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    parent.forEach((v, i, a) -> {
        if (i == 1) {
            parent.set(1, 88);
    } });
    assertEqual(88, sub.get(0));
    }

    /**
     * Verify forEach idx equals 0 for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7600
     * @tc.name testUint8ClampedArrayForEachOne076
     * @tc.desc Verify forEach idx equals 0 for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int[] idx = {-1};
    int[] cnt = {0};
    arr.forEach((v, i, a) -> {
        idx[0] = i;
        cnt[0] = cnt[0] + 1;
    });
    assertEqual(0, idx[0]);
    assertEqual(1, cnt[0]);
    }

    /**
     * Verify fill accumulated sum equals 2000 for length-2000 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7700
     * @tc.name testUint8ClampedArrayForEachOne077
     * @tc.desc Verify fill accumulated sum equals 2000 for length-2000 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2000);
    arr.fill(1);
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
        sum[0] = sum[0] + v;
        });
    assertEqual(2000, sum[0]);
    }

    /**
     * Verify two consecutive forEach calls each iterate all elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7800
     * @tc.name testUint8ClampedArrayForEachOne078
     * @tc.desc Verify two consecutive forEach calls each iterate all elements
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count1 = {0};
    int[] count2 = {0};
    arr.forEach((v, i, a) -> {
        count1[0] = count1[0] + 1;
        });
    arr.forEach((v, i, a) -> {
        count2[0] = count2[0] + 1;
        });
    assertEqual(3, count1[0]);
    assertEqual(3, count2[0]);
    }

    /**
     * Verify forEach cnt equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_7900
     * @tc.name testUint8ClampedArrayForEachOne079
     * @tc.desc Verify forEach cnt equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] cnt = {0};
    int[] total = {0};
    arr.forEach((v, i, a) -> {
        cnt[0] = cnt[0] + 1;
        });
    arr.forEach((v, i, a) -> {
        total[0] = total[0] + v;
        });
    assertEqual(3, cnt[0]);
    assertEqual(6, total[0]);
    }

    /**
     * Verify forEach cnt equals 3 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_8000
     * @tc.name testUint8ClampedArrayForEachOne080
     * @tc.desc Verify forEach cnt equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] cnt = {0};
    arr.forEach((v, i, a) -> {
        cnt[0] = cnt[0] + 1;
        });
    arr.fill(9);
    assertEqual(3, cnt[0]);
    assertEqual(9, arr.get(0));
    }

    /**
     * Verify callback value v equals 42 for array [42]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_8100
     * @tc.name testUint8ClampedArrayForEachOne081
     * @tc.desc Verify callback value v equals 42 for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    boolean[] isNum = {false};
    arr.forEach((v, i, a) -> {
        isNum[0] = v == 42;
        });
    assertTrue(isNum[0]);
    }

    /**
     * Verify callback array length equals 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_ONE_8200
     * @tc.name testUint8ClampedArrayForEachOne082
     * @tc.desc Verify callback array length equals 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    boolean[] isObj = {false};
    arr.forEach((v, i, a) -> {
        isObj[0] = a.length() == 2;
        });
    assertTrue(isObj[0]);
    }
}
