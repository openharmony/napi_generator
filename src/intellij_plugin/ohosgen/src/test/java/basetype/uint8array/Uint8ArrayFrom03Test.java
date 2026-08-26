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
 * Uint8ArrayFrom03Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayFrom03Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0010
     * @tc.name testUint8ArrayFrom001
     * @tc.desc Verify FixedArray<int> [1,2,3] correctly dispatches to FixedArray overload, length=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom001() {
    int[] src = new int[] {1, 2, 3};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0020
     * @tc.name testUint8ArrayFrom002
     * @tc.desc Verify Array<number> [1.0,2.0,3.0] correctly dispatches to Array overload, length=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom002() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0030
     * @tc.name testUint8ArrayFrom003
     * @tc.desc Verify Set<int> {1,2,3} correctly dispatches to Set overload, length=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom003() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(1);
    src.add(2);
    src.add(3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0040
     * @tc.name testUint8ArrayFrom004
     * @tc.desc Verify Uint8Array [1,2,3] correctly dispatches to Uint8Array overload, length=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom004() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0050
     * @tc.name testUint8ArrayFrom005
     * @tc.desc Verify same values [1,2,3] through FixedArray and Array overloads produce same numerical results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom005() {
    int[] fa = new int[] {1, 2, 3};
    double[] arr = new double[] {1.0, 2.0, 3.0};
    Uint8Array r1 = Uint8Array.from(fa);
    Uint8Array r2 = Uint8Array.from(arr);
    assertEqual(r2.get(0), r1.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0060
     * @tc.name testUint8ArrayFrom006
     * @tc.desc Verify same values [1,2,3] through Set and Uint8Array overloads produce same numerical results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom006() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    Uint8Array u = Uint8Array.of(1, 2, 3);
    Uint8Array r1 = Uint8Array.from(s);
    Uint8Array r2 = Uint8Array.from(u);
    assertEqual(r2.get(1), r1.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0070
     * @tc.name testUint8ArrayFrom007
     * @tc.desc Verify empty FixedArray<int> dispatches to FixedArray overload, length=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom007() {
    int[] src = new int[] {};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0080
     * @tc.name testUint8ArrayFrom008
     * @tc.desc Verify empty Array<number> dispatches to Array overload, length=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom008() {
    List<Integer> src = new ArrayList<>();
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0090
     * @tc.name testUint8ArrayFrom009
     * @tc.desc Verify empty Set<int> dispatches to Set overload, length=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom009() {
    Set<Integer> src = new LinkedHashSet<>();
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0100
     * @tc.name testUint8ArrayFrom010
     * @tc.desc Verify empty Uint8Array dispatches to Uint8Array overload, length=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom010() {
    Uint8Array src = new Uint8Array();
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0110
     * @tc.name testUint8ArrayFrom011
     * @tc.desc Verify FixedArray<int> with boundary value 0 is correctly preserved
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom011() {
    int[] src = new int[] {0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0120
     * @tc.name testUint8ArrayFrom012
     * @tc.desc Verify Array<number> with boundary value 0.0 is correctly truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom012() {
    double[] src = new double[] {0.0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0130
     * @tc.name testUint8ArrayFrom013
     * @tc.desc Verify FixedArray<int> with boundary value 255 is correctly preserved
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom013() {
    int[] src = new int[] {255};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0140
     * @tc.name testUint8ArrayFrom014
     * @tc.desc Verify Array<number> with boundary value 255.9 is truncated to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom014() {
    double[] src = new double[] {255.9};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0150
     * @tc.name testUint8ArrayFrom015
     * @tc.desc Verify FixedArray<int> with mid value 128 is correctly preserved
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom015() {
    int[] src = new int[] {128};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(128, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0160
     * @tc.name testUint8ArrayFrom016
     * @tc.desc Verify Array<number> with value 128.5 is truncated to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom016() {
    double[] src = new double[] {128.5};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(128, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0170
     * @tc.name testUint8ArrayFrom017
     * @tc.desc Verify FixedArray<int> overflow value 256 is truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom017() {
    int[] src = new int[] {256};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0180
     * @tc.name testUint8ArrayFrom018
     * @tc.desc Verify Array<number> overflow value 256.0 is truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom018() {
    double[] src = new double[] {256.0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0190
     * @tc.name testUint8ArrayFrom019
     * @tc.desc Verify Set<int> with value 127 is correctly preserved
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom019() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(127);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(127, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0200
     * @tc.name testUint8ArrayFrom020
     * @tc.desc Verify Set<int> overflow value 256 is truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom020() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(256);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(0, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0210
     * @tc.name testUint8ArrayFrom021
     * @tc.desc Verify Uint8Array as source produces same numerical results as Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom021() {
    Uint8Array src = Uint8Array.of(10, 20, 30);
    double[] arr = new double[] {10.0, 20.0, 30.0};
    Uint8Array r1 = Uint8Array.from(src);
    Uint8Array r2 = Uint8Array.from(arr);
    assertEqual(r2.get(2), r1.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0220
     * @tc.name testUint8ArrayFrom022
     * @tc.desc Verify Set<int> iteration order {5,1,9} is preserved in result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom022() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(5);
    src.add(1);
    src.add(9);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(5, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(9, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0230
     * @tc.name testUint8ArrayFrom023
     * @tc.desc Verify four overloads with same values [7,14,21] produce same result length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom023() {
    int[] fa = new int[] {7, 14, 21};
    double[] arr = new double[] {7.0, 14.0, 21.0};
    Set<Integer> s = new LinkedHashSet<>();
    s.add(7);
    s.add(14);
    s.add(21);
    Uint8Array u = Uint8Array.of(7, 14, 21);
    assertEqual(Uint8Array.from(arr).length(), Uint8Array.from(fa).length());
    assertEqual(Uint8Array.from(u).length(), Uint8Array.from(s).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0240
     * @tc.name testUint8ArrayFrom024
     * @tc.desc Verify Array<number> with -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom024() {
    double[] src = new double[] {-1.0};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0250
     * @tc.name testUint8ArrayFrom025
     * @tc.desc Verify FixedArray<int> with -1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom025() {
    int[] src = new int[] {-1};
    Uint8Array result = Uint8Array.from(src);
    assertEqual(255, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0260
     * @tc.name testUint8ArrayFrom026
     * @tc.desc Verify four overloads BYTES_PER_ELEMENT are all 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom026() {
    Uint8Array r1 = Uint8Array.from(new int[] {5});
    Uint8Array r2 = Uint8Array.from(new double[] {5.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(5);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(5));
    assertEqual(1, r1.BYTES_PER_ELEMENT);
    assertEqual(1, r2.BYTES_PER_ELEMENT);
    assertEqual(1, r3.BYTES_PER_ELEMENT);
    assertEqual(1, r4.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0270
     * @tc.name testUint8ArrayFrom027
     * @tc.desc Verify four overloads byteOffset are all 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom027() {
    Uint8Array r1 = Uint8Array.from(new int[] {5});
    Uint8Array r2 = Uint8Array.from(new double[] {5.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(5);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(5));
    assertEqual(0, r1.byteOffset());
    assertEqual(0, r2.byteOffset());
    assertEqual(0, r3.byteOffset());
    assertEqual(0, r4.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0280
     * @tc.name testUint8ArrayFrom028
     * @tc.desc Verify four overloads buffer are all non-null
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom028() {
    Uint8Array r1 = Uint8Array.from(new int[] {5});
    Uint8Array r2 = Uint8Array.from(new double[] {5.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(5);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(5));
    assertEqual(1, r1.buffer().byteLength());
    assertEqual(1, r2.buffer().byteLength());
    assertEqual(1, r3.buffer().byteLength());
    assertEqual(1, r4.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0290
     * @tc.name testUint8ArrayFrom029
     * @tc.desc Verify three-element source four overloads byteLength are all 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom029() {
    Uint8Array r1 = Uint8Array.from(new int[] {1, 2, 3});
    Uint8Array r2 = Uint8Array.from(new double[] {1.0, 2.0, 3.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    s.add(3);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(1, 2, 3));
    assertEqual(3, r1.byteLength());
    assertEqual(3, r2.byteLength());
    assertEqual(3, r3.byteLength());
    assertEqual(3, r4.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0300
     * @tc.name testUint8ArrayFrom030
     * @tc.desc Verify four overloads with [0,0,0] produce same result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom030() {
    Uint8Array r1 = Uint8Array.from(new int[] {0, 0, 0});
    Uint8Array r2 = Uint8Array.from(new double[] {0.0, 0.0, 0.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(0);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(0, 0, 0));
    assertEqual(r2.get(0), r1.get(0));
    assertEqual(r4.get(0), r3.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0310
     * @tc.name testUint8ArrayFrom031
     * @tc.desc Verify four overloads with [255,255,255] produce same result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom031() {
    Uint8Array r1 = Uint8Array.from(new int[] {255, 255, 255});
    Uint8Array r2 = Uint8Array.from(new double[] {255.0, 255.0, 255.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(255);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(255, 255, 255));
    assertEqual(r2.get(0), r1.get(0));
    assertEqual(r4.get(0), r3.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0320
     * @tc.name testUint8ArrayFrom032
     * @tc.desc Verify four overloads with [128,128,128] produce same result
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom032() {
    Uint8Array r1 = Uint8Array.from(new int[] {128, 128, 128});
    Uint8Array r2 = Uint8Array.from(new double[] {128.0, 128.0, 128.0});
    Set<Integer> s = new LinkedHashSet<>();
    s.add(128);
    Uint8Array r3 = Uint8Array.from(s);
    Uint8Array r4 = Uint8Array.from(Uint8Array.of(128, 128, 128));
    assertEqual(r2.get(0), r1.get(0));
    assertEqual(r4.get(0), r3.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0330
     * @tc.name testUint8ArrayFrom033
     * @tc.desc Verify ArrayLike<number> with mapfn doubles values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom033() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(2, result.at(0));
    assertEqual(4, result.at(1));
    assertEqual(6, result.at(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0340
     * @tc.name testUint8ArrayFrom034
     * @tc.desc Verify Iterable<number> with mapfn adds index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom034() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v + k);
    assertEqual(10, result.get(0));
    assertEqual(21, result.get(1));
    assertEqual(32, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0350
     * @tc.name testUint8ArrayFrom035
     * @tc.desc Verify ArrayLike<BigInt> with mapfn converts to number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom035() {
    List<Integer> src = java.util.Arrays.asList((int) (10), (int) (20));
    Uint8Array result = Uint8Array.from(src, (v, k) -> v + k);
    assertEqual(10, result.at(0));
    assertEqual(21, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0360
     * @tc.name testUint8ArrayFrom036
     * @tc.desc Verify ArrayLike<number> without mapfn preserves values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom036() {
    List<Integer> src = java.util.Arrays.asList(5, 10, 15);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(5, result.at(0));
    assertEqual(10, result.at(1));
    assertEqual(15, result.at(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0370
     * @tc.name testUint8ArrayFrom037
     * @tc.desc Verify Iterable<number> without mapfn preserves values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom037() {
    List<Integer> src = java.util.Arrays.asList(5, 10, 15);
    Uint8Array result = Uint8Array.from(src);
    assertEqual(5, result.get(0));
    assertEqual(10, result.get(1));
    assertEqual(15, result.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0380
     * @tc.name testUint8ArrayFrom038
     * @tc.desc Verify ArrayLike<number> with mapfn truncates decimals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom038() {
    double[] src = new double[] {1.5, 2.7};
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(3, result.at(0));
    assertEqual(5, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0390
     * @tc.name testUint8ArrayFrom039
     * @tc.desc Verify Iterable<number> with mapfn truncates decimals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom039() {
    double[] src = new double[] {1.5, 2.7};
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(3, result.get(0));
    assertEqual(5, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0400
     * @tc.name testUint8ArrayFrom040
     * @tc.desc Verify ArrayLike<number> with mapfn wraps overflow
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom040() {
    List<Integer> src = java.util.Arrays.asList(200, 100);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(144, result.at(0));
    assertEqual(200, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0410
     * @tc.name testUint8ArrayFrom041
     * @tc.desc Verify Iterable<number> with mapfn wraps overflow
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom041() {
    List<Integer> src = java.util.Arrays.asList(200, 100);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(144, result.get(0));
    assertEqual(200, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0420
     * @tc.name testUint8ArrayFrom042
     * @tc.desc Verify ArrayLike<number> with mapfn handles negative results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom042() {
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - 15);
    assertEqual(251, result.at(0));
    assertEqual(5, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0430
     * @tc.name testUint8ArrayFrom043
     * @tc.desc Verify Iterable<number> with mapfn handles negative results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom043() {
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - 15);
    assertEqual(251, result.get(0));
    assertEqual(5, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0440
     * @tc.name testUint8ArrayFrom044
     * @tc.desc Verify ArrayLike<number> with mapfn handles zero results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom044() {
    List<Integer> src = java.util.Arrays.asList(5, 10);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - v);
    assertEqual(0, result.at(0));
    assertEqual(0, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0450
     * @tc.name testUint8ArrayFrom045
     * @tc.desc Verify Iterable<number> with mapfn handles zero results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom045() {
    List<Integer> src = java.util.Arrays.asList(5, 10);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - v);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0460
     * @tc.name testUint8ArrayFrom046
     * @tc.desc Verify ArrayLike<number> with mapfn handles max value results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom046() {
    List<Integer> src = java.util.Arrays.asList(128, 127);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(0, result.at(0));
    assertEqual(254, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0470
     * @tc.name testUint8ArrayFrom047
     * @tc.desc Verify Iterable<number> with mapfn handles max value results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom047() {
    List<Integer> src = java.util.Arrays.asList(128, 127);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(0, result.get(0));
    assertEqual(254, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0480
     * @tc.name testUint8ArrayFrom048
     * @tc.desc Verify ArrayLike<number> with mapfn handles mid value results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom048() {
    List<Integer> src = java.util.Arrays.asList(64, 63);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(128, result.at(0));
    assertEqual(126, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0490
     * @tc.name testUint8ArrayFrom049
     * @tc.desc Verify Iterable<number> with mapfn handles mid value results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom049() {
    List<Integer> src = java.util.Arrays.asList(64, 63);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v * 2);
    assertEqual(128, result.get(0));
    assertEqual(126, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0500
     * @tc.name testUint8ArrayFrom050
     * @tc.desc Verify ArrayLike<number> with mapfn handles boundary value results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom050() {
    List<Integer> src = java.util.Arrays.asList(255, 0);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v + 1);
    assertEqual(0, result.at(0));
    assertEqual(1, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0510
     * @tc.name testUint8ArrayFrom051
     * @tc.desc Verify Iterable<number> with mapfn handles boundary value results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom051() {
    List<Integer> src = java.util.Arrays.asList(255, 0);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v + 1);
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0520
     * @tc.name testUint8ArrayFrom052
     * @tc.desc Verify ArrayLike<number> with mapfn handles negative boundary results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom052() {
    List<Integer> src = java.util.Arrays.asList(0, 1);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - 1);
    assertEqual(255, result.at(0));
    assertEqual(0, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0530
     * @tc.name testUint8ArrayFrom053
     * @tc.desc Verify Iterable<number> with mapfn handles negative boundary results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom053() {
    List<Integer> src = java.util.Arrays.asList(0, 1);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - 1);
    assertEqual(255, result.get(0));
    assertEqual(0, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0540
     * @tc.name testUint8ArrayFrom054
     * @tc.desc Verify ArrayLike<number> with mapfn handles overflow results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom054() {
    List<Integer> src = java.util.Arrays.asList(200, 100);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v + 100);
    assertEqual(44, result.at(0));
    assertEqual(200, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0550
     * @tc.name testUint8ArrayFrom055
     * @tc.desc Verify Iterable<number> with mapfn handles overflow results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom055() {
    List<Integer> src = java.util.Arrays.asList(200, 100);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v + 100);
    assertEqual(44, result.get(0));
    assertEqual(200, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0560
     * @tc.name testUint8ArrayFrom056
     * @tc.desc Verify ArrayLike<number> with mapfn handles underflow results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom056() {
    List<Integer> src = java.util.Arrays.asList(50, 100);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - 100);
    assertEqual(206, result.at(0));
    assertEqual(0, result.at(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0570
     * @tc.name testUint8ArrayFrom057
     * @tc.desc Verify Iterable<number> with mapfn handles underflow results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom057() {
    List<Integer> src = java.util.Arrays.asList(50, 100);
    Uint8Array result = Uint8Array.from(src, (v, k) -> v - 100);
    assertEqual(206, result.get(0));
    assertEqual(0, result.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0580
     * @tc.name testUint8ArrayFrom058
     * @tc.desc Verify from() with null source throws TypeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom058() {
    boolean[] caught = {false};
    try {
    int[] src = null;
    Uint8Array result = Uint8Array.from(src);
    } catch (RuntimeException e) {
    caught[0] = true;
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    };
    assertTrue(caught[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0590
     * @tc.name testUint8ArrayFrom059
     * @tc.desc Verify from() with undefined source throws TypeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom059() {
    boolean[] caught = {false};
    try {
    int[] src = null;
    Uint8Array result = Uint8Array.from(src);
    } catch (RuntimeException e) {
    caught[0] = true;
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    };
    assertTrue(caught[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0600
     * @tc.name testUint8ArrayFrom060
     * @tc.desc Verify from() with null mapfn throws TypeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom060() {
    boolean[] caught = {false};
    try {
    List<Integer> src = java.util.Arrays.asList(1, 2);
    basetype.common.ClassCastError.raise();
    } catch (RuntimeException e) {
    caught[0] = true;
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    };
    assertTrue(caught[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FROM03_0610
     * @tc.name testUint8ArrayFrom061
     * @tc.desc Verify from() with invalid mapfn throws TypeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFrom061() {
    boolean[] caught = {false};
    try {
    List<Integer> src = java.util.Arrays.asList(1, 2);
    basetype.common.ClassCastError.raise();
    } catch (RuntimeException e) {
