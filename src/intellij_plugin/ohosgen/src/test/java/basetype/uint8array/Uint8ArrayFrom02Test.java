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
import basetype.common.Error;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFrom02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFrom02Test extends BasTest {
    /**
     * Verify from(Set<int>) with 1 parameter normal call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0100
     * @tc.name testUint8ArrayFrom001
     * @tc.desc Verify from(Set<int>) with 1 parameter normal call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */
    /**
     * Verify from(Array<number>) with 1 parameter normal call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0200
     * @tc.name testUint8ArrayFrom002
     * @tc.desc Verify from(Array<number>) with 1 parameter normal call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom002() {
    double[] arr = new double[] {1.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(1, result.length());
    }

    /**
     * Verify from<U>(ArrayLike, mapfn) with 2 parameters normal call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0300
     * @tc.name testUint8ArrayFrom003
     * @tc.desc Verify from<U>(ArrayLike, mapfn) with 2 parameters normal call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom003() {
    Uint8Array result = Uint8Array.from(new double[] {1.0}, (v, k) -> v);
    assertEqual(1, result.length());
    }

    /**
     * Verify Set<int> empty set constructs empty Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0400
     * @tc.name testUint8ArrayFrom004
     * @tc.desc Verify Set<int> empty set constructs empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom004() {
    Set<Integer> s = new LinkedHashSet<>();
    Uint8Array result = Uint8Array.from(s);
    assertEqual(0, result.length());
    }

    /**
     * Verify Set<int> single element 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0500
     * @tc.name testUint8ArrayFrom005
     * @tc.desc Verify Set<int> single element 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom005() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(0);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify Set<int> single element 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0600
     * @tc.name testUint8ArrayFrom006
     * @tc.desc Verify Set<int> single element 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom006() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(255);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify Set<int> single element 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0700
     * @tc.name testUint8ArrayFrom007
     * @tc.desc Verify Set<int> single element 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom007() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(127);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(127, result.get(0));
    }

    /**
     * Verify Set<int> single element 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0800
     * @tc.name testUint8ArrayFrom008
     * @tc.desc Verify Set<int> single element 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom008() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(128);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(128, result.get(0));
    }

    /**
     * Verify Set<int> element -1 wraps to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_0900
     * @tc.name testUint8ArrayFrom009
     * @tc.desc Verify Set<int> element -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom009() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(-1);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify Set<int> element -128 wraps to 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1000
     * @tc.name testUint8ArrayFrom010
     * @tc.desc Verify Set<int> element -128 wraps to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom010() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(-128);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(128, result.get(0));
    }

    /**
     * Verify Set<int> element 256 wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1100
     * @tc.name testUint8ArrayFrom011
     * @tc.desc Verify Set<int> element 256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom011() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(256);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify Set<int> multiple elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1200
     * @tc.name testUint8ArrayFrom012
     * @tc.desc Verify Set<int> multiple elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom012() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(3, result.length());
    }

    /**
     * Verify Array<number> empty array constructs empty Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1300
     * @tc.name testUint8ArrayFrom013
     * @tc.desc Verify Array<number> empty array constructs empty Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom013() {
    List<Integer> arr = new ArrayList<>();
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(0, result.length());
    }

    /**
     * Verify Array<number> single element 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1400
     * @tc.name testUint8ArrayFrom014
     * @tc.desc Verify Array<number> single element 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom014() {
    double[] arr = new double[] {0.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify Array<number> single element 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1500
     * @tc.name testUint8ArrayFrom015
     * @tc.desc Verify Array<number> single element 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom015() {
    double[] arr = new double[] {255.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify Array<number> single element 127
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1600
     * @tc.name testUint8ArrayFrom016
     * @tc.desc Verify Array<number> single element 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom016() {
    double[] arr = new double[] {127.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(127, result.get(0));
    }

    /**
     * Verify Array<number> single element 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1700
     * @tc.name testUint8ArrayFrom017
     * @tc.desc Verify Array<number> single element 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom017() {
    double[] arr = new double[] {128.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(128, result.get(0));
    }

    /**
     * Verify Array<number> element -1 wraps to 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1800
     * @tc.name testUint8ArrayFrom018
     * @tc.desc Verify Array<number> element -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom018() {
    double[] arr = new double[] {-1.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(255, result.get(0));
    }

    /**
     * Verify Array<number> element -128 wraps to 128
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_1900
     * @tc.name testUint8ArrayFrom019
     * @tc.desc Verify Array<number> element -128 wraps to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom019() {
    double[] arr = new double[] {-128.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(128, result.get(0));
    }

    /**
     * Verify Array<number> element 256 wraps to 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2000
     * @tc.name testUint8ArrayFrom020
     * @tc.desc Verify Array<number> element 256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom020() {
    double[] arr = new double[] {256.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(0, result.get(0));
    }

    /**
     * Verify Array<number> multiple elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2100
     * @tc.name testUint8ArrayFrom021
     * @tc.desc Verify Array<number> multiple elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom021() {
    double[] arr = new double[] {1.0, 2.0, 3.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(3, result.length());
    }

    /**
     * Verify from(ArrayLike, mapfn) with empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2200
     * @tc.name testUint8ArrayFrom022
     * @tc.desc Verify from(ArrayLike, mapfn) with empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom022() {
    Uint8Array result = Uint8Array.from(new int[] {}, (v, k) -> v);
    assertEqual(0, result.length());
    }

    /**
     * Verify from(ArrayLike, mapfn) with single element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2300
     * @tc.name testUint8ArrayFrom023
     * @tc.desc Verify from(ArrayLike, mapfn) with single element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom023() {
    Uint8Array result = Uint8Array.from(new double[] {1.0}, (v, k) -> v);
    assertEqual(1, result.length());
    assertEqual(1, result.get(0));
    }

    /**
     * Verify from(ArrayLike, mapfn) with multiple elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2400
     * @tc.name testUint8ArrayFrom024
     * @tc.desc Verify from(ArrayLike, mapfn) with multiple elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom024() {
    Uint8Array result = Uint8Array.from(new double[] {1.0, 2.0, 3.0}, (v, k) -> v);
    assertEqual(3, result.length());
    }

    /**
     * Verify from(ArrayLike, mapfn) with mapfn transformation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2500
     * @tc.name testUint8ArrayFrom025
     * @tc.desc Verify from(ArrayLike, mapfn) with mapfn transformation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom025() {
    Uint8Array result = Uint8Array.from(new double[] {1.0, 2.0, 3.0}, (v, k) -> v * 2);
    assertEqual(3, result.length());
    assertEqual(2, result.get(0));
    assertEqual(4, result.get(1));
    assertEqual(6, result.get(2));
    }

    /**
     * Verify from(ArrayLike, mapfn) with index parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2600
     * @tc.name testUint8ArrayFrom026
     * @tc.desc Verify from(ArrayLike, mapfn) with index parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom026() {
    Uint8Array result = Uint8Array.from(new double[] {1.0, 2.0, 3.0}, (v, k) -> k);
    assertEqual(3, result.length());
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(2, result.get(2));
    }

    /**
     * Verify from(ArrayLike, mapfn) with wrap-around values
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2700
     * @tc.name testUint8ArrayFrom027
     * @tc.desc Verify from(ArrayLike, mapfn) with wrap-around values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom027() {
    Uint8Array result = Uint8Array.from(new double[] {256.0, -1.0}, (v, k) -> v);
    assertEqual(2, result.length());
    assertEqual(0, result.get(0));
    assertEqual(255, result.get(1));
    }

    /**
     * Verify from(Set) result instanceof
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2800
     * @tc.name testUint8ArrayFrom028
     * @tc.desc Verify from(Set) result instanceof
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom028() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(1, result.length());
    }

    /**
     * Verify from(Set) result BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_2900
     * @tc.name testUint8ArrayFrom029
     * @tc.desc Verify from(Set) result BYTES_PER_ELEMENT
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom029() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(255);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(1, result.BYTES_PER_ELEMENT);
    }

    /**
     * Verify from(Set) result byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3000
     * @tc.name testUint8ArrayFrom030
     * @tc.desc Verify from(Set) result byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom030() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    Uint8Array result = Uint8Array.from(s);
    assertEqual(0, result.byteOffset());
    }

    /**
     * Verify from(Set) result buffer type
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3100
     * @tc.name testUint8ArrayFrom031
     * @tc.desc Verify from(Set) result buffer type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom031() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    Uint8Array result = Uint8Array.from(s);
    ArrayBuffer buffer = result.buffer();
    assertEqual(1, buffer.byteLength());
    }

    /**
     * Verify from(Array) result instanceof
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3200
     * @tc.name testUint8ArrayFrom032
     * @tc.desc Verify from(Array) result instanceof
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom032() {
    double[] arr = new double[] {1.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(1, result.length());
    }

    /**
     * Verify from(Array) result BYTES_PER_ELEMENT
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3300
     * @tc.name testUint8ArrayFrom033
     * @tc.desc Verify from(Array) result BYTES_PER_ELEMENT
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom033() {
    double[] arr = new double[] {255.0};
    Uint8Array result = Uint8Array.from(arr);
    assertEqual(1, result.BYTES_PER_ELEMENT);
    }

    /**
     * Verify from(mapfn) result instanceof
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3400
     * @tc.name testUint8ArrayFrom034
     * @tc.desc Verify from(mapfn) result instanceof
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom034() {
    Uint8Array result = Uint8Array.from(new double[] {1.0}, (v, k) -> v);
    assertEqual(1, result.length());
    }

    /**
     * Verify from(mapfn) result byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3500
     * @tc.name testUint8ArrayFrom035
     * @tc.desc Verify from(mapfn) result byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom035() {
    Uint8Array result = Uint8Array.from(new double[] {1.0}, (v, k) -> v);
    assertEqual(0, result.byteOffset());
    }

    /**
     * Verify from mapfn error propagation
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM02_3600
     * @tc.name testUint8ArrayFrom036
     * @tc.desc Verify from mapfn error propagation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom036() {
    try {
    Uint8Array result = Uint8Array.from(new double[] {1.0, 2.0}, (v, k) -> {
        return BasTest.throwTestError("mapper-fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
}
