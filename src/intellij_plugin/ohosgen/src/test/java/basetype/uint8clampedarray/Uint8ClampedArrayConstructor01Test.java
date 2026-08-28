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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayConstructor01Test extends BasTest {
    /**
     * Verify constructing empty array yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0100
     * @tc.name testUint8ClampedArrayConstructorOne001
     * @tc.desc Verify constructing empty array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructing array from src yields length 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0200
     * @tc.name testUint8ClampedArrayConstructorOne002
     * @tc.desc Verify constructing array from src yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne002() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.length());
    }

    /**
     * Verify constructing empty array yields byteLength 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0300
     * @tc.name testUint8ClampedArrayConstructorOne003
     * @tc.desc Verify constructing empty array yields byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify constructing empty array yields byteOffset 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0400
     * @tc.name testUint8ClampedArrayConstructorOne004
     * @tc.desc Verify constructing empty array yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify constructing empty array yields BYTES_PER_ELEMENT 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0500
     * @tc.name testUint8ClampedArrayConstructorOne005
     * @tc.desc Verify constructing empty array yields BYTES_PER_ELEMENT 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify empty constructor buffer byteLength 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0600
     * @tc.name testUint8ClampedArrayConstructorOne006
     * @tc.desc Verify empty constructor buffer byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify join arr.join(',') equals ''
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0700
     * @tc.name testUint8ClampedArrayConstructorOne007
     * @tc.desc Verify join arr.join(',') equals ''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual("", arr.join(","));
    }

    /**
     * Verify toString arr.toString() equals ''
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0800
     * @tc.name testUint8ClampedArrayConstructorOne008
     * @tc.desc Verify toString arr.toString() equals ''
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual("", String.valueOf(arr));
    }

    /**
     * Verify values() iterator is exhausted for an empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_0900
     * @tc.name testUint8ClampedArrayConstructorOne009
     * @tc.desc Verify values() iterator is exhausted for an empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    Uint8ClampedArray.KeyIterator it = arr.values();
    assertTrue(it.next().done);
    }

    /**
     * Verify two new instances are not identical
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1000
     * @tc.name testUint8ClampedArrayConstructorOne010
     * @tc.desc Verify two new instances are not identical
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne010() {
    Uint8ClampedArray a = new Uint8ClampedArray();
    Uint8ClampedArray b = new Uint8ClampedArray();
    assertNotEqual(b, a);
    }

    /**
     * Verify indexOf arr.indexOf(0) equals -1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1100
     * @tc.name testUint8ClampedArrayConstructorOne011
     * @tc.desc Verify indexOf arr.indexOf(0) equals -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(-1, arr.indexOf(0));
    }

    /**
     * Verify includes result is false for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1200
     * @tc.name testUint8ClampedArrayConstructorOne012
     * @tc.desc Verify includes result is false for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertFalse(arr.includes(0));
    }

    /**
     * Verify every behavior for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1300
     * @tc.name testUint8ClampedArrayConstructorOne013
     * @tc.desc Verify every behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertTrue(arr.every((v) -> v > 100));
    }

    /**
     * Verify some behavior for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1400
     * @tc.name testUint8ClampedArrayConstructorOne014
     * @tc.desc Verify some behavior for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertFalse(arr.some((v) -> v > 0));
    }

    /**
     * Verify constructing array from src yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1500
     * @tc.name testUint8ClampedArrayConstructorOne015
     * @tc.desc Verify constructing array from src yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne015() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructing array from src yields length 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1600
     * @tc.name testUint8ClampedArrayConstructorOne016
     * @tc.desc Verify constructing array from src yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne016() {
    double[] src = new double[] {100.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    }

    /**
     * Verify constructor element [0] equals 100 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1700
     * @tc.name testUint8ClampedArrayConstructorOne017
     * @tc.desc Verify constructor element [0] equals 100 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne017() {
    double[] src = new double[] {100.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(100, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1800
     * @tc.name testUint8ClampedArrayConstructorOne018
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne018() {
    double[] src = new double[] {0.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_1900
     * @tc.name testUint8ClampedArrayConstructorOne019
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne019() {
    double[] src = new double[] {255.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2000
     * @tc.name testUint8ClampedArrayConstructorOne020
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne020() {
    double[] src = new double[] {256.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2100
     * @tc.name testUint8ClampedArrayConstructorOne021
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne021() {
    double[] src = new double[] {-1.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 127 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2200
     * @tc.name testUint8ClampedArrayConstructorOne022
     * @tc.desc Verify constructor element [0] equals 127 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne022() {
    double[] src = new double[] {127.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(127, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 128 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2300
     * @tc.name testUint8ClampedArrayConstructorOne023
     * @tc.desc Verify constructor element [0] equals 128 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne023() {
    double[] src = new double[] {128.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify Array<number> 127.5 half-even 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2400
     * @tc.name testUint8ClampedArrayConstructorOne024
     * @tc.desc Verify Array<number> 127.5 half-even 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne024() {
    double[] src = new double[] {127.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify Array<number> 128.5 half-even 128
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2500
     * @tc.name testUint8ClampedArrayConstructorOne025
     * @tc.desc Verify Array<number> 128.5 half-even 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne025() {
    double[] src = new double[] {128.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(0));
    }

    /**
     * Verify Array<number> 0.5 half-even 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2600
     * @tc.name testUint8ClampedArrayConstructorOne026
     * @tc.desc Verify Array<number> 0.5 half-even 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne026() {
    double[] src = new double[] {0.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Array<number> 1.5 half-even 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2700
     * @tc.name testUint8ClampedArrayConstructorOne027
     * @tc.desc Verify Array<number> 1.5 half-even 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne027() {
    double[] src = new double[] {1.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 1 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2800
     * @tc.name testUint8ClampedArrayConstructorOne028
     * @tc.desc Verify constructor element [0] equals 1 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne028() {
    double[] src = new double[] {0.9};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_2900
     * @tc.name testUint8ClampedArrayConstructorOne029
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne029() {
    double[] src = new double[] {0.4};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3000
     * @tc.name testUint8ClampedArrayConstructorOne030
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne030() {
    double[] src = new double[] {Double.NaN};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Array<number> Infinity clamp 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3100
     * @tc.name testUint8ClampedArrayConstructorOne031
     * @tc.desc Verify Array<number> Infinity clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne031() {
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Array<number> -Infinity clamp 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3200
     * @tc.name testUint8ClampedArrayConstructorOne032
     * @tc.desc Verify Array<number> -Infinity clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne032() {
    double[] src = new double[] {-Double.POSITIVE_INFINITY};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3300
     * @tc.name testUint8ClampedArrayConstructorOne033
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne033() {
    double[] src = new double[] {-0.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 255 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3400
     * @tc.name testUint8ClampedArrayConstructorOne034
     * @tc.desc Verify constructor element [0] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne034() {
    double[] src = new double[] {1e9};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3500
     * @tc.name testUint8ClampedArrayConstructorOne035
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne035() {
    double[] src = new double[] {-1e9};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Array<number> Number.MAX_VALUE clamp 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3600
     * @tc.name testUint8ClampedArrayConstructorOne036
     * @tc.desc Verify Array<number> Number.MAX_VALUE clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne036() {
    double[] src = new double[] {Double.MAX_VALUE};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify Array<number> Number.MIN_VALUE clamp 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3700
     * @tc.name testUint8ClampedArrayConstructorOne037
     * @tc.desc Verify Array<number> Number.MIN_VALUE clamp 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne037() {
    double[] src = new double[] {Double.MIN_VALUE};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructing array from src yields length 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3800
     * @tc.name testUint8ClampedArrayConstructorOne038
     * @tc.desc Verify constructing array from src yields length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne038() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(5, arr.length());
    }

    /**
     * Verify constructor element [0] equals 10 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_3900
     * @tc.name testUint8ClampedArrayConstructorOne039
     * @tc.desc Verify constructor element [0] equals 10 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne039() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(10, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 20 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4000
     * @tc.name testUint8ClampedArrayConstructorOne040
     * @tc.desc Verify constructor element [1] equals 20 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne040() {
    double[] src = new double[] {10.0, 20.0, 30.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(20, arr.get(1));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4100
     * @tc.name testUint8ClampedArrayConstructorOne041
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne041() {
    double[] src = new double[] {-10.0, 300.0, 128.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify constructor element [1] equals 255 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4200
     * @tc.name testUint8ClampedArrayConstructorOne042
     * @tc.desc Verify constructor element [1] equals 255 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne042() {
    double[] src = new double[] {-10.0, 300.0, 128.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(1));
    }

    /**
     * Verify constructor element [2] equals 128 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4300
     * @tc.name testUint8ClampedArrayConstructorOne043
     * @tc.desc Verify constructor element [2] equals 128 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne043() {
    double[] src = new double[] {-10.0, 300.0, 128.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(2));
    }

    /**
     * Verify constructing array from src yields byteLength 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4400
     * @tc.name testUint8ClampedArrayConstructorOne044
     * @tc.desc Verify constructing array from src yields byteLength 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne044() {
    double[] src = new double[] {1.0, 2.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.buffer().byteLength());
    }

    /**
     * Verify Array<number> buffer.byteLength length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4500
     * @tc.name testUint8ClampedArrayConstructorOne045
     * @tc.desc Verify Array<number> buffer.byteLength length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne045() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.buffer().byteLength());
    }

    /**
     * Verify constructing array from src yields byteOffset 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4600
     * @tc.name testUint8ClampedArrayConstructorOne046
     * @tc.desc Verify constructing array from src yields byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne046() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify Array<number> byteLength length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4700
     * @tc.name testUint8ClampedArrayConstructorOne047
     * @tc.desc Verify Array<number> byteLength length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne047() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify Array<number> length 3 arr[0] 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4800
     * @tc.name testUint8ClampedArrayConstructorOne048
     * @tc.desc Verify Array<number> length 3 arr[0] 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne048() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    }

    /**
     * Verify Array<number> 2.5 half-even 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_4900
     * @tc.name testUint8ClampedArrayConstructorOne049
     * @tc.desc Verify Array<number> 2.5 half-even 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne049() {
    double[] src = new double[] {2.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(2, arr.get(0));
    }

    /**
     * Verify Array<number> 255.5 clamp 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5000
     * @tc.name testUint8ClampedArrayConstructorOne050
     * @tc.desc Verify Array<number> 255.5 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne050() {
    double[] src = new double[] {255.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructor element [0] equals 0 for array from src
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5100
     * @tc.name testUint8ClampedArrayConstructorOne051
     * @tc.desc Verify constructor element [0] equals 0 for array from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne051() {
    double[] src = new double[] {-0.5};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }

    /**
     * Verify Array<number> 2147483648 clamp 255
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5200
     * @tc.name testUint8ClampedArrayConstructorOne052
     * @tc.desc Verify Array<number> 2147483648 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne052() {
    double[] src = new double[] {2147483648.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5300
     * @tc.name testUint8ClampedArrayConstructorOne053
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne053() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(4, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5400
     * @tc.name testUint8ClampedArrayConstructorOne054
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne054() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer byteLength length
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5500
     * @tc.name testUint8ClampedArrayConstructorOne055
     * @tc.desc Verify ArrayBuffer byteLength length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne055() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(4, arr.byteLength());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 8
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5600
     * @tc.name testUint8ClampedArrayConstructorOne056
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne056() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 8);
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5700
     * @tc.name testUint8ClampedArrayConstructorOne057
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 1024
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5800
     * @tc.name testUint8ClampedArrayConstructorOne058
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne058() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 1024);
    assertEqual(1024, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 65535
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_5900
     * @tc.name testUint8ClampedArrayConstructorOne059
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 65535
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne059() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 65535);
    assertEqual(65535, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 100
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6000
     * @tc.name testUint8ClampedArrayConstructorOne060
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne060() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 100, 100);
    assertEqual(100, arr.byteOffset());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 100
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6100
     * @tc.name testUint8ClampedArrayConstructorOne061
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 100
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne061() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 100, 100);
    assertEqual(100, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6200
     * @tc.name testUint8ClampedArrayConstructorOne062
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne062() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteOffset 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6300
     * @tc.name testUint8ClampedArrayConstructorOne063
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteOffset 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne063() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 0);
    assertEqual(1, arr.byteOffset());
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6400
     * @tc.name testUint8ClampedArrayConstructorOne064
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne064() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 8);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6500
     * @tc.name testUint8ClampedArrayConstructorOne065
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne065() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6600
     * @tc.name testUint8ClampedArrayConstructorOne066
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne066() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify constructor element [0] equals 99 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6700
     * @tc.name testUint8ClampedArrayConstructorOne067
     * @tc.desc Verify constructor element [0] equals 99 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne067() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 4);
    a.set(0, 99);
    assertEqual(99, b.get(0));
    }

    /**
     * Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6800
     * @tc.name testUint8ClampedArrayConstructorOne068
     * @tc.desc Verify constructor buffer reference matches for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne068() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 4, 4);
    assertEqual(b.buffer(), a.buffer());
    }

    /**
     * Verify constructor element [0] equals 255 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_6900
     * @tc.name testUint8ClampedArrayConstructorOne069
     * @tc.desc Verify constructor element [0] equals 255 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne069() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 4);
    a.set(0, 256);
    assertEqual(255, b.get(0));
    }

    /**
     * Verify the no-argument constructor creates zero-length storage at offset zero
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7000
     * @tc.name testUint8ClampedArrayConstructorOne070
     * @tc.desc Verify the no-argument constructor creates zero-length storage at offset zero
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.byteLength());
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify Array<number> BYTES_PER_ELEMENT = 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7100
     * @tc.name testUint8ClampedArrayConstructorOne071
     * @tc.desc Verify Array<number> BYTES_PER_ELEMENT = 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne071() {
    double[] src = new double[] {1.0, 2.0};
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify ArrayBuffer BYTES_PER_ELEMENT = 1
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7200
     * @tc.name testUint8ClampedArrayConstructorOne072
     * @tc.desc Verify ArrayBuffer BYTES_PER_ELEMENT = 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne072() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify ArrayBuffer byteLength length (BYTES_PER_ELEMENT=1)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7300
     * @tc.name testUint8ClampedArrayConstructorOne073
     * @tc.desc Verify ArrayBuffer byteLength length (BYTES_PER_ELEMENT=1)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne073() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 8);
    assertEqual(8, arr.byteLength());
    assertEqual(8, arr.length());
    }

    /**
     * Verify constructor sum equals 0 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7400
     * @tc.name testUint8ClampedArrayConstructorOne074
     * @tc.desc Verify constructor sum equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne074() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    int sum = 0;
    for (int i = 0; i < arr.length(); i++) {
    sum += (int) (arr.get(i));
    }
    assertEqual(0, sum);
    }

    /**
     * Verify constructing from ArrayBuffer(buf, 0, 0) yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7500
     * @tc.name testUint8ClampedArrayConstructorOne075
     * @tc.desc Verify constructing from ArrayBuffer(buf, 0, 0) yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne075() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify constructor throws RangeError for buf, 1, 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7600
     * @tc.name testUint8ClampedArrayConstructorOne076
     * @tc.desc Verify constructor throws RangeError for buf, 1, 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne076() {
    ArrayBuffer buf = new ArrayBuffer(0);
    try {
    new Uint8ClampedArray(buf, 1, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7700
     * @tc.name testUint8ClampedArrayConstructorOne077
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne077() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify byteOffset 0 length buffer.byteLength
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7800
     * @tc.name testUint8ClampedArrayConstructorOne078
     * @tc.desc Verify byteOffset 0 length buffer.byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne078() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 16);
    assertEqual(16, arr.length());
    }

    /**
     * Verify constructing from ArrayBuffer(buf, 10, 0) yields byteOffset 10
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_7900
     * @tc.name testUint8ClampedArrayConstructorOne079
     * @tc.desc Verify constructing from ArrayBuffer(buf, 10, 0) yields byteOffset 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne079() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 10, 0);
    assertEqual(10, arr.byteOffset());
    }

    /**
     * Verify constructing ArrayBuffer-backed array yields byteLength 0
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_8000
     * @tc.name testUint8ClampedArrayConstructorOne080
     * @tc.desc Verify constructing ArrayBuffer-backed array yields byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne080() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 5, 0);
    assertEqual(0, arr.byteLength());
    }

    /**
     * Verify constructor result is false for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_8100
     * @tc.name testUint8ClampedArrayConstructorOne081
     * @tc.desc Verify constructor result is false for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne081() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 4);
    assertNotEqual(b, a);
    }

    /**
     * Verify fill element at b[0] equals 123 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_8200
     * @tc.name testUint8ClampedArrayConstructorOne082
     * @tc.desc Verify fill element at b[0] equals 123 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne082() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 4);
    a.fill(123);
    assertEqual(123, b.get(0));
    }

    /**
     * Verify fill element at b[3] equals 50 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_8300
     * @tc.name testUint8ClampedArrayConstructorOne083
     * @tc.desc Verify fill element at b[3] equals 50 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne083() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 4);
    a.fill(50);
    assertEqual(50, b.get(3));
    }

    /**
     * Verify fill element at full[4] equals 99 for ArrayBuffer-backed array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_ONE_8400
     * @tc.name testUint8ClampedArrayConstructorOne084
     * @tc.desc Verify fill element at full[4] equals 99 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorOne084() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray sub = new Uint8ClampedArray(buf, 4, 4);
    Uint8ClampedArray full = new Uint8ClampedArray(buf, 0, 8);
    sub.fill(99);
    assertEqual(99, full.get(4));
    }
}
