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
 * Uint8ClampedArrayFrom04Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayFrom04Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0100
     * @tc.name testUint8ClampedArrayFromFour001
     * @tc.desc Verify - mapfn Array<number> Array<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour001() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray r1 = Uint8ClampedArray.from(src);
    Uint8ClampedArray r2 = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertEqual(r2.length(), r1.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0200
     * @tc.name testUint8ClampedArrayFromFour002
     * @tc.desc Verify Uint8ClampedArray.from yields length b.length for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour002() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(b.length(), a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0300
     * @tc.name testUint8ClampedArrayFromFour003
     * @tc.desc Verify Uint8ClampedArray.from yields length b.length for from(it)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour003() {
    List<Number> it = java.util.Arrays.asList(5, 6, 7);
    Uint8ClampedArray a = Uint8ClampedArray.from(it);
    Uint8ClampedArray b = Uint8ClampedArray.from(it, null);
    assertEqual(b.length(), a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0400
     * @tc.name testUint8ClampedArrayFromFour004
     * @tc.desc Verify -Array<number> vs Array<number> [1,2,3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour004() {
    List<Number> sFixed = java.util.Arrays.asList(1, 2, 3);
    List<Number> sArr = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray a = Uint8ClampedArray.from(sFixed);
    Uint8ClampedArray b = Uint8ClampedArray.from(sArr);
    assertEqual(b.length(), a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0500
     * @tc.name testUint8ClampedArrayFromFour005
     * @tc.desc Verify -Uint8ClampedArray vs Array<number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour005() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(new int[] {7, 8, 9});
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0600
     * @tc.name testUint8ClampedArrayFromFour006
     * @tc.desc Verify Uint8ClampedArray.from yields length b.length for from(fix)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour006() {
    List<Number> fix = java.util.Arrays.asList(1, 2, 3);
    Set<Integer> set = new LinkedHashSet<>();
    set.add(1); set.add(2); set.add(3);
    Uint8ClampedArray a = Uint8ClampedArray.from(fix);
    Uint8ClampedArray b = Uint8ClampedArray.from(set);
    assertEqual(b.length(), a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0700
     * @tc.name testUint8ClampedArrayFromFour007
     * @tc.desc Verify - FixedArray vs Array vs Set 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour007() {
    List<Number> fA = new ArrayList<>();
    List<Number> aA = new ArrayList<>();
    Set<Integer> sA = new LinkedHashSet<>();
    assertEqual(0, Uint8ClampedArray.from(fA).length());
    assertEqual(0, Uint8ClampedArray.from(aA).length());
    assertEqual(0, Uint8ClampedArray.from(sA).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0800
     * @tc.name testUint8ClampedArrayFromFour008
     * @tc.desc Verify -Array<number> clamp Uint8ClampedArray clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour008() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {300, -5, 100});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {300, -5, 100});
    Uint8ClampedArray b = Uint8ClampedArray.from(src);
    assertEqual(b.get(0), a.get(0));
    assertEqual(b.get(1), a.get(1));
    assertEqual(b.get(2), a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_0900
     * @tc.name testUint8ClampedArrayFromFour009
     * @tc.desc Verify Uint8ClampedArray.from element at b[0] equals a[0] + 1 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour009() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v + 1);
    assertEqual(a.get(0) + 1, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1000
     * @tc.name testUint8ClampedArrayFromFour010
     * @tc.desc Verify -Iterable<number> Array mapfn Array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour010() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4);
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v * 2);
    assertEqual(b.length(), a.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1100
     * @tc.name testUint8ClampedArrayFromFour011
     * @tc.desc Verify Uint8ClampedArray.from yields length 3 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour011() {
    List<Number> src = java.util.Arrays.asList(50, 60, 70);
    Uint8ClampedArray r = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(3, r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1200
     * @tc.name testUint8ClampedArrayFromFour012
     * @tc.desc Verify Uint8ClampedArray.from yields byteOffset 0 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour012() {
    Uint8ClampedArray r1 = Uint8ClampedArray.from(new int[] {1, 2});
    Uint8ClampedArray r2 = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2}));
    assertEqual(0, r1.byteOffset());
    assertEqual(0, r2.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1300
     * @tc.name testUint8ClampedArrayFromFour013
     * @tc.desc Verify Uint8ClampedArray.from yields BYTES_PER_ELEMENT 1 for from([1] as Array<number>)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour013() {
    Uint8ClampedArray r1 = Uint8ClampedArray.from(new int[] {1});
    Set<Integer> sS = new LinkedHashSet<>(); sS.add(1);
    Uint8ClampedArray r2 = Uint8ClampedArray.from(sS);
    assertEqual(1, r1.BYTES_PER_ELEMENT);
    assertEqual(1, r2.BYTES_PER_ELEMENT);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1400
     * @tc.name testUint8ClampedArrayFromFour014
     * @tc.desc Verify - vs mapfn=undefined byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour014() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src, null);
    assertEqual(b.byteLength(), a.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1500
     * @tc.name testUint8ClampedArrayFromFour015
     * @tc.desc Verify Uint8ClampedArray.from yields byteLength Uint8ClampedArray.from(sS for from(sA)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour015() {
    List<Number> sA = java.util.Arrays.asList(1, 2, 3);
    Set<Integer> sS = new LinkedHashSet<>(); sS.add(1); sS.add(2); sS.add(3);
    assertEqual(Uint8ClampedArray.from(sS).byteLength(), Uint8ClampedArray.from(sA).byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1600
     * @tc.name testUint8ClampedArrayFromFour016
     * @tc.desc Verify -FixedArray vs Uint8ClampedArray buffer length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour016() {
    List<Number> fA = java.util.Arrays.asList(1, 2, 3, 4);
    Uint8ClampedArray uA = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r1 = Uint8ClampedArray.from(fA);
    Uint8ClampedArray r2 = Uint8ClampedArray.from(uA);
    assertEqual(r1.length(), r1.buffer().byteLength());
    assertEqual(r2.length(), r2.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1700
     * @tc.name testUint8ClampedArrayFromFour017
     * @tc.desc Verify Uint8ClampedArray.from yields length r.byteLength for from([1, 2, 3] as Array<n)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour017() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertEqual(r.byteLength(), r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1800
     * @tc.name testUint8ClampedArrayFromFour018
     * @tc.desc Verify Uint8ClampedArray.from behavior for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour018() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> { throw new Error("x"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(3, src.size());
    assertEqual(1, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_1900
     * @tc.name testUint8ClampedArrayFromFour019
     * @tc.desc Verify throw -mapfn Uint8ClampedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour019() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { throw new Error("x"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(10, src.get(0));
    assertEqual(3, src.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2000
     * @tc.name testUint8ClampedArrayFromFour020
     * @tc.desc Verify Uint8ClampedArray.from behavior for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour020() {
    Set<Number> src = new LinkedHashSet<>();
    src.add(1); src.add(2); src.add(3);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> { throw new Error("x"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(3, src.size());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2100
     * @tc.name testUint8ClampedArrayFromFour021
     * @tc.desc Verify Uint8ClampedArray.from behavior for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour021() {
    List<Number> src = java.util.Arrays.asList(5, 6, 7);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> { throw new Error("boom"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(5, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2200
     * @tc.name testUint8ClampedArrayFromFour022
     * @tc.desc Verify throw - mapfn throws Error from two separate from() calls, then verify normal from() still works
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour022() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new Error("a");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new Error("b");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertEqual(3, r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2300
     * @tc.name testUint8ClampedArrayFromFour023
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn at k=2 for Array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour023() {
    List<Number> src = java.util.Arrays.asList(10, 20, 30, 40);
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    if (k == 2) { throw new Error("mid"); };
    return v;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(30, src.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2400
     * @tc.name testUint8ClampedArrayFromFour024
     * @tc.desc Verify throw - Uint8ClampedArray.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour024() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer oldBuf = src.buffer();
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    throw new Error("x");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(oldBuf, src.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2500
     * @tc.name testUint8ClampedArrayFromFour025
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn for Set input without mutating source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour025() {
    Set<Number> src = new LinkedHashSet<>();
    src.add(100); src.add(200);
    int sizeBefore = src.size();
    try {
    Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> {
    throw new Error("x");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    assertEqual(sizeBefore, src.size());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2600
     * @tc.name testUint8ClampedArrayFromFour026
     * @tc.desc Verify Array input conversion preserves its single value and length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour026() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1});
    assertEqual(1, a.length());
    assertEqual(1, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2700
     * @tc.name testUint8ClampedArrayFromFour027
     * @tc.desc Verify Set input conversion preserves insertion value and length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour027() {
    Set<Integer> s = new LinkedHashSet<>(); s.add(2);
    Uint8ClampedArray a = Uint8ClampedArray.from(s);
    assertEqual(1, a.length());
    assertEqual(2, a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2800
     * @tc.name testUint8ClampedArrayFromFour028
     * @tc.desc Verify Uint8ClampedArray input is copied into independent storage
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour028() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {3});
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    a.set(0, 9);
    assertEqual(3, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_2900
     * @tc.name testUint8ClampedArrayFromFour029
     * @tc.desc Verify Array input conversion preserves element ordering
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour029() {
    List<Number> fA = java.util.Arrays.asList(1, 2);
    Uint8ClampedArray a = Uint8ClampedArray.from(fA);
    assertEqual(1, a.get(0));
    assertEqual(2, a.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3000
     * @tc.name testUint8ClampedArrayFromFour030
     * @tc.desc Verify mapfn receives the index and transforms each source value
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour030() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v + k);
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3100
     * @tc.name testUint8ClampedArrayFromFour031
     * @tc.desc Verify -Array Uint8ClampedArray toString
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour031() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1, 2, 3});
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2, 3}));
    assertEqual(String.valueOf(b), String.valueOf(a));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3200
     * @tc.name testUint8ClampedArrayFromFour032
     * @tc.desc Verify toString Uint8ClampedArray.from(fA).toString() equals Uint8ClampedArray.from(aA for from(fA)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour032() {
    List<Number> fA = java.util.Arrays.asList(1, 2, 3);
    List<Number> aA = java.util.Arrays.asList(1, 2, 3);
    assertEqual(Uint8ClampedArray.from(aA).toString(), Uint8ClampedArray.from(fA).toString());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3300
     * @tc.name testUint8ClampedArrayFromFour033
     * @tc.desc Verify Uint8ClampedArray.from a.toString() equals b.toString( for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour033() {
    List<Number> src = java.util.Arrays.asList(11, 22, 33);
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    assertEqual(String.valueOf(b), String.valueOf(a));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3400
     * @tc.name testUint8ClampedArrayFromFour034
     * @tc.desc Verify Uint8ClampedArray.from result is an instance of ArrayBuffer for from([1] as Array<number>)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour034() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1});
    assertTrue(a.buffer() instanceof ArrayBuffer);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3500
     * @tc.name testUint8ClampedArrayFromFour035
     * @tc.desc Verify Uint8ClampedArray.from result is an instance of ArrayBuffer for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour035() {
    Set<Integer> s = new LinkedHashSet<>(); s.add(1);
    assertTrue(Uint8ClampedArray.from(s).buffer() instanceof ArrayBuffer);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3600
     * @tc.name testUint8ClampedArrayFromFour036
     * @tc.desc Verify Uint8ClampedArray.from iterator is done after consuming all elements for from([1, 2] as Array<numb)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour036() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {1, 2});
    Uint8ClampedArray.KeyIterator it = r.values();
    it.next(); it.next();
    assertTrue(it.next().done);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3700
     * @tc.name testUint8ClampedArrayFromFour037
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 5 for array [5, 100, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour037() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 100, 200});
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertEqual(5, r.get(0));
    assertEqual(100, r.get(1));
    assertEqual(200, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3800
     * @tc.name testUint8ClampedArrayFromFour038
     * @tc.desc Verify Uint8ClampedArray.from yields length s.size for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour038() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1); s.add(2); s.add(3); s.add(4);
    Uint8ClampedArray r = Uint8ClampedArray.from(s);
    assertEqual(s.size(), r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_3900
     * @tc.name testUint8ClampedArrayFromFour039
     * @tc.desc Verify Uint8ClampedArray.from yields length 5 for from(f)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour039() {
    List<Number> f = java.util.Arrays.asList(9, 8, 7, 6, 5);
    Uint8ClampedArray r = Uint8ClampedArray.from(f);
    assertEqual(5, r.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4000
     * @tc.name testUint8ClampedArrayFromFour040
     * @tc.desc Verify Uint8ClampedArray.from yields length src.length for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour040() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3, 4, 5, 6);
    assertEqual(src.size(), Uint8ClampedArray.from(src).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4100
     * @tc.name testUint8ClampedArrayFromFour041
     * @tc.desc Verify -Uint8ClampedArray buffer buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour041() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertNotEqual(src.buffer(), r.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4200
     * @tc.name testUint8ClampedArrayFromFour042
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour042() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    r.set(0, 99);
    assertEqual(1, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4300
     * @tc.name testUint8ClampedArrayFromFour043
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 1 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour043() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    src.set(0, 99);
    assertEqual(1, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4400
     * @tc.name testUint8ClampedArrayFromFour044
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 1 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour044() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    r.set(0, 200);
    assertEqual(1, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4500
     * @tc.name testUint8ClampedArrayFromFour045
     * @tc.desc Verify Uint8ClampedArray.from(Set) produces correct length, elements and is independent of source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour045() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(1); src.add(2); src.add(3);
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    r.set(0, 99);
    assertTrue(src.contains(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4600
     * @tc.name testUint8ClampedArrayFromFour046
     * @tc.desc Verify from(src) produces a distinct object from source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour046() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertNotEqual(src, r);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4700
     * @tc.name testUint8ClampedArrayFromFour047
     * @tc.desc Verify two from(src) calls produce distinct array objects
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour047() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src);
    assertNotEqual(b, a);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4800
     * @tc.name testUint8ClampedArrayFromFour048
     * @tc.desc Verify two from(src) calls produce independent buffers
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour048() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray a = Uint8ClampedArray.from(src);
    Uint8ClampedArray b = Uint8ClampedArray.from(src);
    assertNotEqual(b.buffer(), a.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_4900
     * @tc.name testUint8ClampedArrayFromFour049
     * @tc.desc Verify Uint8ClampedArray.from element at src[0] equals 10 for from(src, (v: number, k: )
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour049() {
    List<Number> src = java.util.Arrays.asList(10, 20);
    Uint8ClampedArray r = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> v);
    r.set(0, 99);
    assertEqual(10, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5000
     * @tc.name testUint8ClampedArrayFromFour050
     * @tc.desc Verify -mapfn buffer Uint8ClampedArray.buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour050() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v);
    assertNotEqual(src.buffer(), r.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5100
     * @tc.name testUint8ClampedArrayFromFour051
     * @tc.desc Verify two from([1]) calls produce independent buffers
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour051() {
    Uint8ClampedArray r1 = Uint8ClampedArray.from(new int[] {1});
    Uint8ClampedArray r2 = Uint8ClampedArray.from(new int[] {1});
    assertNotEqual(r2.buffer(), r1.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5200
     * @tc.name testUint8ClampedArrayFromFour052
     * @tc.desc Verify from(Uint8ClampedArray) produces independent buffer from source
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour052() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1, 2, 3});
    Uint8ClampedArray b = Uint8ClampedArray.from(a);
    assertNotEqual(a.buffer(), b.buffer());
    assertEqual(a.length(), b.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5300
     * @tc.name testUint8ClampedArrayFromFour053
     * @tc.desc Verify Uint8ClampedArray.from yields length 4 for from([1, 2, 3, 4] as Arra)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour053() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1, 2, 3, 4});
    Uint8ClampedArray b = Uint8ClampedArray.from(Uint8ClampedArray.from(a));
    assertEqual(4, b.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5400
     * @tc.name testUint8ClampedArrayFromFour054
     * @tc.desc Verify Uint8ClampedArray.from element at b[0] equals a[0] for from([1, 2] as Array<numb)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour054() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1, 2}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v + 1);
    Uint8ClampedArray b = Uint8ClampedArray.from(a);
    assertEqual(a.get(0), b.get(0));
    assertEqual(a.get(1), b.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5500
     * @tc.name testUint8ClampedArrayFromFour055
     * @tc.desc Verify from(array) and from(set) produce distinct objects with independent buffers
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour055() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1, 2});
    Set<Integer> s = new LinkedHashSet<>(); s.add(3); s.add(4);
    Uint8ClampedArray b = Uint8ClampedArray.from(s);
    assertNotEqual(b, a);
    assertNotEqual(b.buffer(), a.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5600
     * @tc.name testUint8ClampedArrayFromFour056
     * @tc.desc Verify clamp -Array Uint8ClampedArray 256 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour056() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {256});
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {256}));
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5700
     * @tc.name testUint8ClampedArrayFromFour057
     * @tc.desc Verify clamp -Array FixedArray -1 clamp
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour057() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {-1});
    List<Number> f = java.util.Arrays.asList(-1);
    Uint8ClampedArray b = Uint8ClampedArray.from(f);
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5800
     * @tc.name testUint8ClampedArrayFromFour058
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals b[0] for from([300] as Array<numbe)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour058() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {300});
    Set<Integer> s = new LinkedHashSet<>(); s.add(300);
    Uint8ClampedArray b = Uint8ClampedArray.from(s);
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_5900
     * @tc.name testUint8ClampedArrayFromFour059
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals b[0] for from([100] as Array<numbe)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour059() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {100}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 256);
    Uint8ClampedArray b = Uint8ClampedArray.from(new int[] {256});
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6000
     * @tc.name testUint8ClampedArrayFromFour060
     * @tc.desc Verify clamp -Array Uint8ClampedArray NaN clamp NaN 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour060() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new double[] {Double.NaN});
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new double[] {Double.NaN}));
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6100
     * @tc.name testUint8ClampedArrayFromFour061
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals b[0] for from([10] as Array<number)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour061() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {10}, (Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2) (v, k) -> Double.NaN);
    Uint8ClampedArray b = Uint8ClampedArray.from(new double[] {Double.NaN});
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6200
     * @tc.name testUint8ClampedArrayFromFour062
     * @tc.desc Verify - FixedArray vs Set length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour062() {
    List<Number> f = new ArrayList<>();
    Set<Integer> s = new LinkedHashSet<>();
    assertEqual(0, Uint8ClampedArray.from(f).length());
    assertEqual(0, Uint8ClampedArray.from(s).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6300
     * @tc.name testUint8ClampedArrayFromFour063
     * @tc.desc Verify - Array vs Uint8ClampedArray byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour063() {
    List<Number> a = new ArrayList<>();
    Uint8ClampedArray u = new Uint8ClampedArray(0);
    assertEqual(0, Uint8ClampedArray.from(a).byteLength());
    assertEqual(0, Uint8ClampedArray.from(u).byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6400
     * @tc.name testUint8ClampedArrayFromFour064
     * @tc.desc Verify Uint8ClampedArray.from called equals 0 for from([] as Array<number>,)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour064() {
    int[] called = {0};
    Uint8ClampedArray.from(new int[] {}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { called[0]++; return v; });
    assertEqual(0, called[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6500
     * @tc.name testUint8ClampedArrayFromFour065
     * @tc.desc Verify - Uint8ClampedArray + mapfn mapfn
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour065() {
    int[] called = {0};
    Uint8ClampedArray.from(new Uint8ClampedArray(0), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { called[0]++; return v; });
    assertEqual(0, called[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6600
     * @tc.name testUint8ClampedArrayFromFour066
     * @tc.desc Verify toString Uint8ClampedArray.from(f).toString() equals Uint8ClampedArray.from(a for from(f)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour066() {
    List<Number> f = new ArrayList<>();
    List<Number> a = new ArrayList<>();
    assertEqual(Uint8ClampedArray.from(a).toString(), Uint8ClampedArray.from(f).toString());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6700
     * @tc.name testUint8ClampedArrayFromFour067
     * @tc.desc Verify mapfn-Array Uint8ClampedArray mapfn k
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour067() {
    List<Number> keysA = new ArrayList<>();
    Uint8ClampedArray.from(new int[] {10, 20, 30}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { keysA.add(k); return v; });
    List<Number> keysB = new ArrayList<>();
    Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {10, 20, 30}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { keysB.add(k); return v; });
    assertEqual(keysB.size(), keysA.size());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6800
     * @tc.name testUint8ClampedArrayFromFour068
     * @tc.desc Verify Uint8ClampedArray.from n equals 4 for from([1, 2, 3, 4] as Arra)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour068() {
    int[] n = {0};
    Uint8ClampedArray.from(new int[] {1, 2, 3, 4}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { n[0]++; return v; });
    assertEqual(4, n[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_6900
     * @tc.name testUint8ClampedArrayFromFour069
     * @tc.desc Verify mapfn-Uint8ClampedArray mapfn length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour069() {
    int[] n = {0};
    Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2, 3}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { n[0]++; return v; });
    assertEqual(3, n[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7000
     * @tc.name testUint8ClampedArrayFromFour070
     * @tc.desc Verify mapfn- mapfn Array Uint8ClampedArray
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour070() {
    List<Number> src1 = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray src2 = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray.Uint8ClampedArrayDoubleMapper2 f = (v, k) -> v + k;
    Uint8ClampedArray a = Uint8ClampedArray.from(src1, f);
    Uint8ClampedArray b = Uint8ClampedArray.from(src2, f);
    assertEqual(b.get(2), a.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7100
     * @tc.name testUint8ClampedArrayFromFour071
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 0 for array [100, 200, 50]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour071() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {100, 200, 50}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 0);
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {100, 200, 50}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 0);
    assertEqual(0, a.get(0));
    assertEqual(0, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7200
     * @tc.name testUint8ClampedArrayFromFour072
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 255 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour072() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1, 2, 3}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 255);
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2, 3}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 255);
    assertEqual(255, a.get(0));
    assertEqual(255, b.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7300
     * @tc.name testUint8ClampedArrayFromFour073
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals b[0] for array [1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour073() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {1}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 300);
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> 300);
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7400
     * @tc.name testUint8ClampedArrayFromFour074
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals b[0] for array [10]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour074() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {10}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> -50);
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {10}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> -50);
    assertEqual(b.get(0), a.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7500
     * @tc.name testUint8ClampedArrayFromFour075
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 3 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour075() {
    List<Number> src = java.util.Arrays.asList(3, 1, 2);
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertEqual(3, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7600
     * @tc.name testUint8ClampedArrayFromFour076
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 50 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour076() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(50); s.add(10); s.add(30);
    Uint8ClampedArray r = Uint8ClampedArray.from(s);
    assertEqual(50, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(30, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7700
     * @tc.name testUint8ClampedArrayFromFour077
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 9 for from(f)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour077() {
    List<Number> f = java.util.Arrays.asList(9, 8, 7);
    Uint8ClampedArray r = Uint8ClampedArray.from(f);
    assertEqual(9, r.get(0));
    assertEqual(8, r.get(1));
    assertEqual(7, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7800
     * @tc.name testUint8ClampedArrayFromFour078
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 22 for array [22, 11, 33]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour078() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {22, 11, 33});
    Uint8ClampedArray r = Uint8ClampedArray.from(src);
    assertEqual(22, r.get(0));
    assertEqual(11, r.get(1));
    assertEqual(33, r.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_7900
     * @tc.name testUint8ClampedArrayFromFour079
     * @tc.desc Verify Uint8ClampedArray.from element at keys[0] equals 0 for from([1, 2, 3, 4] as Arra)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour079() {
    List<Number> keys = new ArrayList<>();
    Uint8ClampedArray.from(new int[] {1, 2, 3, 4}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { keys.add(k); return v; });
    assertEqual(0, keys.get(0));
    assertEqual(3, keys.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8000
     * @tc.name testUint8ClampedArrayFromFour080
     * @tc.desc Verify Uint8ClampedArray.from element at keys[0] equals 0 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour080() {
    List<Number> keys = new ArrayList<>();
    Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2, 3}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> { keys.add(k); return v; });
    assertEqual(0, keys.get(0));
    assertEqual(2, keys.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8100
     * @tc.name testUint8ClampedArrayFromFour081
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 100 for from([0, 0, 0] as Array<n)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour081() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {0, 0, 0});
    r.set(0, 100);
    assertEqual(100, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8200
     * @tc.name testUint8ClampedArrayFromFour082
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 200 for array [0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour082() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {0, 0}));
    r.set(0, 200);
    assertEqual(200, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8300
     * @tc.name testUint8ClampedArrayFromFour083
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 150 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour083() {
    Set<Integer> s = new LinkedHashSet<>(); s.add(0); s.add(0);
    Uint8ClampedArray r = Uint8ClampedArray.from(s);
    r.set(0, 150);
    assertEqual(150, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8400
     * @tc.name testUint8ClampedArrayFromFour084
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 175 for from(f)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour084() {
    List<Number> f = java.util.Arrays.asList(0, 0);
    Uint8ClampedArray r = Uint8ClampedArray.from(f);
    r.set(0, 175);
    assertEqual(175, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8500
     * @tc.name testUint8ClampedArrayFromFour085
     * @tc.desc Verify Uint8ClampedArray.from element at r[0] equals 255 for from([0] as Array<number>)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour085() {
    Uint8ClampedArray r = Uint8ClampedArray.from(new int[] {0}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v);
    r.set(0, 300);
    assertEqual(255, r.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8600
     * @tc.name testUint8ClampedArrayFromFour086
     * @tc.desc Verify Uint8ClampedArray.from element at a[0] equals 0 for array [0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour086() {
    Uint8ClampedArray a = Uint8ClampedArray.from(new int[] {0});
    Uint8ClampedArray b = Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {0}));
    a.set(0, -1); b.set(0, -1);
    assertEqual(0, a.get(0));
    assertEqual(0, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8700
     * @tc.name testUint8ClampedArrayFromFour087
     * @tc.desc Verify Uint8ClampedArray.from propagates RangeError thrown by mapfn for Array<number> input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour087() {
    try {
    Uint8ClampedArray.from(new int[] {1, 2}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    throw new RangeError("RangeError");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8800
     * @tc.name testUint8ClampedArrayFromFour088
     * @tc.desc Verify -mapfn Uint8ClampedArray RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour088() {
    try {
    Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    throw new RangeError("RangeError");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_8900
     * @tc.name testUint8ClampedArrayFromFour089
     * @tc.desc Verify Uint8ClampedArray.from propagates TypeError thrown by mapfn for Array<number> input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour089() {
    try {
    Uint8ClampedArray.from(new int[] {1, 2}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    throw new TypeError("t");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9000
     * @tc.name testUint8ClampedArrayFromFour090
     * @tc.desc Verify Uint8ClampedArray.from propagates Error thrown by mapfn for Uint8ClampedArray input
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour090() {
    try {
    Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    throw new Error("e");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9100
     * @tc.name testUint8ClampedArrayFromFour091
     * @tc.desc Verify Uint8ClampedArray.from behavior for from([1, 2, 3, 4] as Array<number>,)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour091() {
    int[] n = {0};
    try {
    Uint8ClampedArray.from(new int[] {1, 2, 3, 4}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    n[0]++;
    if (k == 0) { throw new Error("first"); };
    return v;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9200
     * @tc.name testUint8ClampedArrayFromFour092
     * @tc.desc Verify Uint8ClampedArray.from behavior for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour092() {
    int[] n = {0};
    try {
    Uint8ClampedArray.from(new Uint8ClampedArray(new int[] {1, 2, 3}), (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> {
    n[0]++;
    if (k == 0) { throw new Error("first"); };
    return v;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9300
     * @tc.name testUint8ClampedArrayFromFour093
     * @tc.desc Verify Uint8ClampedArray.from yields length 1 for from([1] as Array<number>)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour093() {
    assertEqual(1, Uint8ClampedArray.from(new int[] {1}).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9400
     * @tc.name testUint8ClampedArrayFromFour094
     * @tc.desc Verify Uint8ClampedArray.from yields length 1 for from(s)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour094() {
    Set<Integer> s = new LinkedHashSet<>(); s.add(1);
    assertEqual(1, Uint8ClampedArray.from(s).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9500
     * @tc.name testUint8ClampedArrayFromFour095
     * @tc.desc Verify Uint8ClampedArray.from yields length 1 for from(f)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour095() {
    List<Number> f = java.util.Arrays.asList(1);
    assertEqual(1, Uint8ClampedArray.from(f).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9600
     * @tc.name testUint8ClampedArrayFromFour096
     * @tc.desc Verify Uint8ClampedArray.from behavior for from([] as Array<number>, (v: numbe)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour096() {
    assertEqual(0, Uint8ClampedArray.from(new int[] {}, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v).length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FROM_FOUR_9700
     * @tc.name testUint8ClampedArrayFromFour097
     * @tc.desc Verify Uint8ClampedArray.from yields length src.length for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFromFour097() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = Uint8ClampedArray.from(src, (Uint8ClampedArray.Uint8ClampedArrayMapper2) (v, k) -> v);
    assertEqual(src.length(), r.length());
    }
}
