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
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayValueOfTest —— Int16Array 方法族测试。
 */
public class Uint8ArrayValueOfTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0100
     * @tc.name testUint8ArrayValueOf001
     * @tc.desc Verify valueOf() no-arg call returns self reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf001() {
    Uint8Array a = new Uint8Array(8);
    Uint8Array r = a.valueOf();
    assertEqual(a, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0200
     * @tc.name testUint8ArrayValueOf002
     * @tc.desc Verify valueOf returns self reference for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf002() {
    Uint8Array a = new Uint8Array(0);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0300
     * @tc.name testUint8ArrayValueOf003
     * @tc.desc Verify valueOf returns self reference for single-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf003() {
    Uint8Array a = new Uint8Array(1);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0400
     * @tc.name testUint8ArrayValueOf004
     * @tc.desc Verify valueOf returns self reference for multi-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf004() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0500
     * @tc.name testUint8ArrayValueOf005
     * @tc.desc Verify valueOf returns self reference for array created by Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf005() {
    Uint8Array a = Uint8Array.of(1, 2, 3);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0600
     * @tc.name testUint8ArrayValueOf006
     * @tc.desc Verify valueOf returns self reference for array created by Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf006() {
    Uint8Array a = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0700
     * @tc.name testUint8ArrayValueOf007
     * @tc.desc Verify valueOf returns self reference for array constructed from ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf007() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(buf);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0800
     * @tc.name testUint8ArrayValueOf008
     * @tc.desc Verify valueOf returns self reference for array constructed from ArrayBuffer with offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf008() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(buf, 4);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_0900
     * @tc.name testUint8ArrayValueOf009
     * @tc.desc Verify valueOf returns self reference for array constructed from ArrayBuffer with offset and length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf009() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(buf, 2, 3);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1000
     * @tc.name testUint8ArrayValueOf010
     * @tc.desc Verify valueOf returns self reference after fill(0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf010() {
    Uint8Array a = new Uint8Array(3);
    a.fill(0);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1100
     * @tc.name testUint8ArrayValueOf011
     * @tc.desc Verify valueOf returns self reference after fill(255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf011() {
    Uint8Array a = new Uint8Array(3);
    a.fill(255);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1200
     * @tc.name testUint8ArrayValueOf012
     * @tc.desc Verify valueOf returns self reference after set
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf012() {
    Uint8Array a = new Uint8Array(5);
    a.set(new Uint8Array(new int[] {1, 2}), 1);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1300
     * @tc.name testUint8ArrayValueOf013
     * @tc.desc Verify valueOf returns self reference after copyWithin
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf013() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    a.copyWithin(0, 2);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1400
     * @tc.name testUint8ArrayValueOf014
     * @tc.desc Verify valueOf returns self reference after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf014() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    a.reverse();
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1500
     * @tc.name testUint8ArrayValueOf015
     * @tc.desc Verify valueOf returns self reference after sort
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf015() {
    Uint8Array a = new Uint8Array(new int[] {3, 1, 2});
    a.sort();
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1600
     * @tc.name testUint8ArrayValueOf016
     * @tc.desc Verify valueOf returns self reference after index assignment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf016() {
    Uint8Array a = new Uint8Array(3);
    a.set(0, 10);
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1700
     * @tc.name testUint8ArrayValueOf017
     * @tc.desc Verify two consecutive valueOf calls return the same reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf017() {
    Uint8Array a = new Uint8Array(3);
    assertEqual(a.valueOf(), a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1800
     * @tc.name testUint8ArrayValueOf018
     * @tc.desc Verify valueOf returns self reference after multi-operation chain
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf018() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    a.fill(1);
    a.reverse();
    assertEqual(a, a.valueOf());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_1900
     * @tc.name testUint8ArrayValueOf019
     * @tc.desc Verify valueOf preserves element value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf019() {
    Uint8Array a = new Uint8Array(new int[] {0});
    assertEqual(0, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2000
     * @tc.name testUint8ArrayValueOf020
     * @tc.desc Verify valueOf preserves element value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf020() {
    Uint8Array a = new Uint8Array(new int[] {255});
    assertEqual(255, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2100
     * @tc.name testUint8ArrayValueOf021
     * @tc.desc Verify valueOf preserves element value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf021() {
    Uint8Array a = new Uint8Array(new int[] {127});
    assertEqual(127, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2200
     * @tc.name testUint8ArrayValueOf022
     * @tc.desc Verify valueOf preserves element value 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf022() {
    Uint8Array a = new Uint8Array(new int[] {1});
    assertEqual(1, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2300
     * @tc.name testUint8ArrayValueOf023
     * @tc.desc Verify valueOf preserves element value 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf023() {
    Uint8Array a = new Uint8Array(new int[] {128});
    assertEqual(128, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2400
     * @tc.name testUint8ArrayValueOf024
     * @tc.desc Verify valueOf preserves element value 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf024() {
    Uint8Array a = new Uint8Array(new int[] {254});
    assertEqual(254, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2500
     * @tc.name testUint8ArrayValueOf025
     * @tc.desc Verify valueOf preserves elements of multi-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf025() {
    Uint8Array a = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array r = a.valueOf();
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2600
     * @tc.name testUint8ArrayValueOf026
     * @tc.desc Verify valueOf preserves elements after fill(42)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf026() {
    Uint8Array a = new Uint8Array(3);
    a.fill(42);
    Uint8Array r = a.valueOf();
    assertEqual(42, r.get(0));
    assertEqual(42, r.get(1));
    assertEqual(42, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2700
     * @tc.name testUint8ArrayValueOf027
     * @tc.desc Verify valueOf preserves elements after set
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf027() {
    Uint8Array a = new Uint8Array(5);
    a.set(new Uint8Array(new int[] {1, 2}), 1);
    Uint8Array r = a.valueOf();
    assertEqual(0, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2800
     * @tc.name testUint8ArrayValueOf028
     * @tc.desc Verify valueOf preserves elements after copyWithin
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf028() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    a.copyWithin(0, 2);
    Uint8Array r = a.valueOf();
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_2900
     * @tc.name testUint8ArrayValueOf029
     * @tc.desc Verify valueOf preserves elements after reverse
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf029() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    a.reverse();
    Uint8Array r = a.valueOf();
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3000
     * @tc.name testUint8ArrayValueOf030
     * @tc.desc Verify valueOf preserves elements after sort
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf030() {
    Uint8Array a = new Uint8Array(new int[] {3, 1, 2});
    a.sort();
    Uint8Array r = a.valueOf();
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3100
     * @tc.name testUint8ArrayValueOf031
     * @tc.desc Verify valueOf preserves elements after index assignment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf031() {
    Uint8Array a = new Uint8Array(3);
    a.set(0, 10);
    a.set(1, 20);
    Uint8Array r = a.valueOf();
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3200
     * @tc.name testUint8ArrayValueOf032
     * @tc.desc Verify valueOf preserves elements from Uint8Array.from
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf032() {
    Uint8Array a = Uint8Array.from(new int[] {5, 10, 15});
    Uint8Array r = a.valueOf();
    assertEqual(5, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(15, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3300
     * @tc.name testUint8ArrayValueOf033
     * @tc.desc Verify valueOf preserves elements from Uint8Array.of
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf033() {
    Uint8Array a = Uint8Array.of(7, 14, 21);
    Uint8Array r = a.valueOf();
    assertEqual(7, r.get(0));
    assertEqual(14, r.get(1));
    assertEqual(21, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3400
     * @tc.name testUint8ArrayValueOf034
     * @tc.desc Verify valueOf result has same length property
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf034() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    assertEqual(a.length(), r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3500
     * @tc.name testUint8ArrayValueOf035
     * @tc.desc Verify valueOf result has same buffer property
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf035() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    assertEqual(a.buffer(), r.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3600
     * @tc.name testUint8ArrayValueOf036
     * @tc.desc Verify valueOf result has same constructor property
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf036() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    assertEqual(3, r.length());
    assertEqual(3, a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3700
     * @tc.name testUint8ArrayValueOf037
     * @tc.desc Verify valueOf result shares the same ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf037() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    assertEqual(a.buffer(), r.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3800
     * @tc.name testUint8ArrayValueOf038
     * @tc.desc Verify modifying valueOf result element affects original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf038() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    r.set(0, 100);
    assertEqual(100, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_3900
     * @tc.name testUint8ArrayValueOf039
     * @tc.desc Verify modifying original array affects valueOf result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf039() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    a.set(0, 200);
    assertEqual(200, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4000
     * @tc.name testUint8ArrayValueOf040
     * @tc.desc Verify valueOf result supports fill method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf040() {
    Uint8Array a = new Uint8Array(3);
    Uint8Array r = a.valueOf();
    r.fill(5);
    assertEqual(5, a.get(0));
    assertEqual(5, a.get(1));
    assertEqual(5, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4100
     * @tc.name testUint8ArrayValueOf041
     * @tc.desc Verify valueOf result supports reverse method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf041() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    r.reverse();
    assertEqual(3, a.get(0));
    assertEqual(1, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4200
     * @tc.name testUint8ArrayValueOf042
     * @tc.desc Verify valueOf result supports sort method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf042() {
    Uint8Array a = new Uint8Array(new int[] {3, 1, 2});
    Uint8Array r = a.valueOf();
    r.sort();
    assertEqual(1, a.get(0));
    assertEqual(2, a.get(1));
    assertEqual(3, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4300
     * @tc.name testUint8ArrayValueOf043
     * @tc.desc Verify valueOf result supports set method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf043() {
    Uint8Array a = new Uint8Array(5);
    Uint8Array r = a.valueOf();
    r.set(new Uint8Array(new int[] {1, 2}), 1);
    assertEqual(1, a.get(1));
    assertEqual(2, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4400
     * @tc.name testUint8ArrayValueOf044
     * @tc.desc Verify valueOf result supports copyWithin method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf044() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    r.copyWithin(0, 2);
    assertEqual(3, a.get(0));
    assertEqual(4, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4500
     * @tc.name testUint8ArrayValueOf045
     * @tc.desc Verify valueOf result supports subarray method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf045() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    Uint8Array sub = r.subarray(1, 3);
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4600
     * @tc.name testUint8ArrayValueOf046
     * @tc.desc Verify valueOf result supports slice method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf046() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    Uint8Array sliced = r.slice(1, 3);
    assertEqual(2, sliced.get(0));
    assertEqual(3, sliced.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4700
     * @tc.name testUint8ArrayValueOf047
     * @tc.desc Verify valueOf result supports map method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf047() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    Uint8Array mapped = r.map((v) -> v * 2);
    assertEqual(2, mapped.get(0));
    assertEqual(4, mapped.get(1));
    assertEqual(6, mapped.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4800
     * @tc.name testUint8ArrayValueOf048
     * @tc.desc Verify valueOf result supports filter method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf048() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    Uint8Array filtered = r.filter((v) -> v >= 2);
    assertEqual(2, filtered.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_4900
     * @tc.name testUint8ArrayValueOf049
     * @tc.desc Verify modifying valueOf result via fill affects original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf049() {
    Uint8Array a = new Uint8Array(3);
    Uint8Array r = a.valueOf();
    r.fill(10);
    assertEqual(10, a.get(0));
    assertEqual(10, a.get(1));
    assertEqual(10, a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5000
     * @tc.name testUint8ArrayValueOf050
     * @tc.desc Verify modifying valueOf result via copyWithin affects original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf050() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    r.copyWithin(0, 2);
    assertEqual(3, a.get(0));
    assertEqual(4, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5100
     * @tc.name testUint8ArrayValueOf051
     * @tc.desc Verify modifying valueOf result via index assignment affects original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf051() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    r.set(1, 50);
    assertEqual(50, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5200
     * @tc.name testUint8ArrayValueOf052
     * @tc.desc Verify original array reverse causes valueOf result to change synchronously
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf052() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    a.reverse();
    assertEqual(3, r.get(0));
    assertEqual(1, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5300
     * @tc.name testUint8ArrayValueOf053
     * @tc.desc Verify original array set causes valueOf result to change synchronously
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf053() {
    Uint8Array a = new Uint8Array(5);
    Uint8Array r = a.valueOf();
    a.set(new Uint8Array(new int[] {11, 22}), 1);
    assertEqual(11, r.get(1));
    assertEqual(22, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5400
     * @tc.name testUint8ArrayValueOf054
     * @tc.desc Verify original array index assignment causes valueOf result to change synchronously
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf054() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array r = a.valueOf();
    a.set(0, 99);
    assertEqual(99, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5500
     * @tc.name testUint8ArrayValueOf055
     * @tc.desc Verify subarray of valueOf result shares buffer with original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf055() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    Uint8Array sub = r.subarray(1, 3);
    assertEqual(a.buffer(), sub.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5600
     * @tc.name testUint8ArrayValueOf056
     * @tc.desc Verify modifying subarray of valueOf result affects original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf056() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    Uint8Array sub = r.subarray(1, 3);
    sub.set(0, 99);
    assertEqual(99, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5700
     * @tc.name testUint8ArrayValueOf057
     * @tc.desc Verify slice of valueOf result is independent from original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf057() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    Uint8Array sliced = r.slice(1, 3);
    assertEqual(2, sliced.get(0));
    assertEqual(3, sliced.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5800
     * @tc.name testUint8ArrayValueOf058
     * @tc.desc Verify modifying slice of valueOf result does not affect original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf058() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array r = a.valueOf();
    Uint8Array sliced = r.slice(1, 3);
    sliced.set(0, 99);
    assertEqual(2, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_5900
     * @tc.name testUint8ArrayValueOf059
     * @tc.desc Verify valueOf result unchanged after original array slice
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf059() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sliced = a.slice(1, 3);
    sliced.set(0, 77);
    Uint8Array r = a.valueOf();
    assertEqual(2, r.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6000
     * @tc.name testUint8ArrayValueOf060
     * @tc.desc Verify valueOf preserves element constructed from float (3.14 becomes 3)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf060() {
    Uint8Array a = new Uint8Array(new double[] {3.14});
    assertEqual(3, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6100
     * @tc.name testUint8ArrayValueOf061
     * @tc.desc Verify valueOf preserves element constructed from negative (-1 becomes 255)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf061() {
    Uint8Array a = new Uint8Array(new int[] {-1});
    assertEqual(255, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6200
     * @tc.name testUint8ArrayValueOf062
     * @tc.desc Verify valueOf preserves element constructed from scientific notation (1e2 becomes 100)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf062() {
    Uint8Array a = new Uint8Array(new double[] {1e2});
    assertEqual(100, a.valueOf().get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6300
     * @tc.name testUint8ArrayValueOf063
     * @tc.desc Verify valueOf result toString equals original array toString
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf063() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(String.valueOf(a), a.valueOf().toString());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6400
     * @tc.name testUint8ArrayValueOf064
     * @tc.desc Verify valueOf result serializes correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf064() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertEqual("{\"0\":1,\"1\":2,\"2\":3}", BasTest.stringify(a.valueOf()));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6500
     * @tc.name testUint8ArrayValueOf065
     * @tc.desc Verify valueOf result supports includes method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf065() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertTrue(a.valueOf().includes(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6600
     * @tc.name testUint8ArrayValueOf066
     * @tc.desc Verify valueOf result supports indexOf method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf066() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(1, a.valueOf().indexOf(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6700
     * @tc.name testUint8ArrayValueOf067
     * @tc.desc Verify valueOf result supports some method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf067() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertTrue(a.valueOf().some((v) -> v > 2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6800
     * @tc.name testUint8ArrayValueOf068
     * @tc.desc Verify valueOf result supports every method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf068() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertTrue(a.valueOf().every((v) -> v > 0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_VALUE_OF_6900
     * @tc.name testUint8ArrayValueOf069
     * @tc.desc Verify valueOf result supports find method
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayValueOf069() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(2, a.valueOf().find((v) -> v == 2));
    }
}
