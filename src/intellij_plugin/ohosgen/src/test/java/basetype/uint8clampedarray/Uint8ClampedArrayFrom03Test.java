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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFrom03Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayFrom03Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0100
     * @tc.name testUint8ClampedArrayFromThree001
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree001() {
    List<Number> src = new ArrayList<>();
    src.add(10.0);
    src.add(20.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0200
     * @tc.name testUint8ClampedArrayFromThree002
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree002() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v * 2);
    assertEqual(2, arr.length());
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0300
     * @tc.name testUint8ClampedArrayFromThree003
     * @tc.desc Verify Uint8ClampedArray.from yields length 1 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree003() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(42);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(1, arr.length());
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0400
     * @tc.name testUint8ClampedArrayFromThree004
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 127 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree004() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(127);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(127, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0500
     * @tc.name testUint8ClampedArrayFromThree005
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 128 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree005() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(128);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0600
     * @tc.name testUint8ClampedArrayFromThree006
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree006() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(-100);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0700
     * @tc.name testUint8ClampedArrayFromThree007
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 15 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree007() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(017);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(15, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0800
     * @tc.name testUint8ClampedArrayFromThree008
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree008() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(7);
    s.add(7);
    s.add(8);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_0900
     * @tc.name testUint8ClampedArrayFromThree009
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree009() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(-10);
    s.add(0);
    s.add(255);
    s.add(300);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(255, arr.get(2));
    assertEqual(255, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1000
     * @tc.name testUint8ClampedArrayFromThree010
     * @tc.desc Verify Uint8ClampedArray.from yields length 100 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree010() {
    Set<Integer> s = new LinkedHashSet<>();
    for (int i = 0; i < 100; i++) {
    s.add(i);
    };
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(100, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1100
     * @tc.name testUint8ClampedArrayFromThree011
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree011() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    s.add(100);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1200
     * @tc.name testUint8ClampedArrayFromThree012
     * @tc.desc Verify Uint8ClampedArray.from yields length 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree012() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1300
     * @tc.name testUint8ClampedArrayFromThree013
     * @tc.desc Verify Array<number> 0b10000000 = 128
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree013() {
    List<Number> src = new ArrayList<>();
    src.add(0b10000000);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1400
     * @tc.name testUint8ClampedArrayFromThree014
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 100 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree014() {
    List<Number> src = new ArrayList<>();
    src.add(1e2);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(100, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1500
     * @tc.name testUint8ClampedArrayFromThree015
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 11 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree015() {
    List<Number> src = new ArrayList<>();
    src.add(11.0);
    src.add(22.0);
    src.add(33.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(11, arr.get(0));
    assertEqual(22, arr.get(1));
    assertEqual(33, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1600
     * @tc.name testUint8ClampedArrayFromThree016
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree016() {
    List<Number> src = new ArrayList<>();
    src.add(-5.0);
    src.add(100.0);
    src.add(300.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));
    assertEqual(100, arr.get(1));
    assertEqual(255, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1700
     * @tc.name testUint8ClampedArrayFromThree017
     * @tc.desc Verify Uint8ClampedArray.from yields length 256 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree017() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
    src.add(i );
    };
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(256, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1800
     * @tc.name testUint8ClampedArrayFromThree018
     * @tc.desc Verify Uint8ClampedArray.from yields length 1024 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree018() {
    List<Number> src = new ArrayList<>();
    for (int i = 0; i < 1024; i++) {
    src.add(50.0);
    };
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(1024, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_1900
     * @tc.name testUint8ClampedArrayFromThree019
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree019() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    src.add(99.0);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2000
     * @tc.name testUint8ClampedArrayFromThree020
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree020() {
    List<Number> src = new ArrayList<>();
    src.add(0.1);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2100
     * @tc.name testUint8ClampedArrayFromThree021
     * @tc.desc Verify Array<number> 255.5 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree021() {
    List<Number> src = new ArrayList<>();
    src.add(255.5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2200
     * @tc.name testUint8ClampedArrayFromThree022
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree022() {
    List<Number> src = new ArrayList<>();
    src.add(-0.5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2300
     * @tc.name testUint8ClampedArrayFromThree023
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree023() {
    List<Number> src = new ArrayList<>();
    src.add(254.9);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2400
     * @tc.name testUint8ClampedArrayFromThree024
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 2 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree024() {
    List<Number> src = new ArrayList<>();
    src.add(2.5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2500
     * @tc.name testUint8ClampedArrayFromThree025
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 4 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree025() {
    List<Number> src = new ArrayList<>();
    src.add(3.5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(4, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2600
     * @tc.name testUint8ClampedArrayFromThree026
     * @tc.desc Verify ArrayLike+mapfn mapfn number
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree026() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 10);
    assertEqual(11, arr.get(0));
    assertEqual(12, arr.get(1));
    assertEqual(13, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2700
     * @tc.name testUint8ClampedArrayFromThree027
     * @tc.desc Verify Uint8ClampedArray.from on empty Array does not call mapfn and returns empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree027() {
    List<Number> src = new ArrayList<>();
    int[] count = {0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> { count[0]++; return v; });
    assertEqual(0, arr.length());
    assertEqual(0, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2800
     * @tc.name testUint8ClampedArrayFromThree028
     * @tc.desc Verify ArrayLike+mapfn mapfn 1e9 clamp 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree028() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 1e9);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_2900
     * @tc.name testUint8ClampedArrayFromThree029
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree029() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3000
     * @tc.name testUint8ClampedArrayFromThree030
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 2 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree030() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 1.5);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3100
     * @tc.name testUint8ClampedArrayFromThree031
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree031() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    src.add(0.0);
    src.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> k );
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3200
     * @tc.name testUint8ClampedArrayFromThree032
     * @tc.desc Verify Uint8ClampedArray.from calls mapfn 5 times for 5-element all-zero Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree032() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    src.add(0.0);
    src.add(0.0);
    src.add(0.0);
    src.add(0.0);
    int[] count = {0};
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    count[0]++;
    return 0;
    });
    assertEqual(5, count[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3300
     * @tc.name testUint8ClampedArrayFromThree033
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn for single-element Array input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree033() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new Error("cb-fail");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3400
     * @tc.name testUint8ClampedArrayFromThree034
     * @tc.desc Verify ArrayLike+mapfn mapfn TypeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree034() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new TypeError("type-fail");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3500
     * @tc.name testUint8ClampedArrayFromThree035
     * @tc.desc Verify ArrayLike+mapfn mapfn RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree035() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new RangeError("range-fail");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3600
     * @tc.name testUint8ClampedArrayFromThree036
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree036() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3700
     * @tc.name testUint8ClampedArrayFromThree037
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree037() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> 255);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3800
     * @tc.name testUint8ClampedArrayFromThree038
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 10 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree038() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v * 10);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_3900
     * @tc.name testUint8ClampedArrayFromThree039
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 255 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree039() {
    List<Number> src = new ArrayList<>();
    src.add(100.0);
    src.add(200.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v * 3);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4000
     * @tc.name testUint8ClampedArrayFromThree040
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree040() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> -(v * 10));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4100
     * @tc.name testUint8ClampedArrayFromThree041
     * @tc.desc Verify Uint8ClampedArray.from element at arr[3] equals 30 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree041() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    src.add(0.0);
    src.add(0.0);
    src.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> (k ) * 10);
    assertEqual(30, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4200
     * @tc.name testUint8ClampedArrayFromThree042
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 51 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree042() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    int base = 50;
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + base);
    assertEqual(51, arr.get(0));
    assertEqual(52, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4300
     * @tc.name testUint8ClampedArrayFromThree043
     * @tc.desc Verify Uint8ClampedArray.from mapfn accumulates element sum equals 6 for Array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree043() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    double[] sum = {0.0};
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    sum[0] = sum[0] + (v );
    return v;
    });
    assertEqual(6, sum[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4400
     * @tc.name testUint8ClampedArrayFromThree044
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn on third call for Array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree044() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    int[] count = {0};
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    count[0]++;
    if (count[0] == 3) {
    throw new Error("mid-fail");
    };
    return v;
    });
    fail();
    } catch (RuntimeException e) { assertEqual("Error", e.getClass().getSimpleName()); };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4500
     * @tc.name testUint8ClampedArrayFromThree045
     * @tc.desc Verify ArrayLike+mapfn Uint8ClampedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree045() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(1, arr.get(0));
    assertEqual(1, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4600
     * @tc.name testUint8ClampedArrayFromThree046
     * @tc.desc Verify Uint8ClampedArray.from yields length 5 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree046() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    src.add(4.0);
    src.add(5.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4700
     * @tc.name testUint8ClampedArrayFromThree047
     * @tc.desc Verify ArrayLike+mapfn mapfn BYTES_PER_ELEMENT = 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree047() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4800
     * @tc.name testUint8ClampedArrayFromThree048
     * @tc.desc Verify ArrayLike+mapfn byteLength = length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree048() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    src.add(3.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(3, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_4900
     * @tc.name testUint8ClampedArrayFromThree049
     * @tc.desc Verify ArrayLike+mapfn byteOffset = 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree049() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5000
     * @tc.name testUint8ClampedArrayFromThree050
     * @tc.desc Verify Uint8ClampedArray.from yields byteLength 2 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree050() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(2, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5100
     * @tc.name testUint8ClampedArrayFromThree051
     * @tc.desc Verify Uint8ClampedArray.from yields length 2 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree051() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    src.add(99.0);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5200
     * @tc.name testUint8ClampedArrayFromThree052
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 1.0 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree052() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 100);
    arr.set(0, 200);
    assertEqual(1.0, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5300
     * @tc.name testUint8ClampedArrayFromThree053
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 1 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree053() {
    List<Number> src = new ArrayList<>();
    src.add(1.0);
    src.add(2.0);
    Uint8ClampedArray a = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    Uint8ClampedArray b = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 10);
    assertEqual(1, a.get(0));
    assertEqual(11, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5400
     * @tc.name testUint8ClampedArrayFromThree054
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 0 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree054() {
    List<Number> src = new ArrayList<>();
    src.add(0.0);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> -0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5500
     * @tc.name testUint8ClampedArrayFromThree055
     * @tc.desc Verify Uint8ClampedArray.from(Set) produces correct length, elements and is independent of source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree055() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Uint8ClampedArray arr = Uint8ClampedArray.from(s);
    assertEqual(2, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    arr.set(0, 200);
    assertTrue(s.contains(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_THREE_5600
     * @tc.name testUint8ClampedArrayFromThree056
     * @tc.desc Verify Array<number> buffer.byteLength = 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromThree056() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.buffer().byteLength());
    }
}
