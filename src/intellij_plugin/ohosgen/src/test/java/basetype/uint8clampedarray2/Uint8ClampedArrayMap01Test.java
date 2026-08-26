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

package basetype.uint8clampedarray2;

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
import basetype.common.ClassCastError;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayMap01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayMap01Test extends BasTest {

    @Test
    void testUint8ClampedArrayMapOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayMapOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> v + i);
    assertEqual(3, r.length());
    assertEqual(21, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(32, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> v + a.length());
    assertEqual(3, r.length());
    assertEqual(13, r.get(0));
    assertEqual(23, r.get(1));
    assertEqual(33, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(128, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(128, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(1, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] last = {-1};
    boolean[] ok = {true};
    arr.map((v, i, a) -> {
    if (i != last[0] + 1) { ok[0] = false;};
    last[0] = i;
    return v;});
    assertTrue(ok[0]);}

    @Test
    void testUint8ClampedArrayMapOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    int[] sum = {0};
    arr.map((v, i, a) -> { sum[0] += i; return v;});
    assertEqual(45, sum[0]);}

    @Test
    void testUint8ClampedArrayMapOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] same = {true};
    arr.map((v, i, a) -> {
    if (a != arr) { same[0] = false;};
    return v;});
    assertTrue(same[0]);}

    @Test
    void testUint8ClampedArrayMapOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> i == 0 ? a.get(2) : v);
    assertEqual(3, r.length());
    assertEqual(30, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 255);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 256);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> -1);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(Double.NaN));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(Double.POSITIVE_INFINITY));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(-Double.POSITIVE_INFINITY));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(0.5));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(1.5));
    assertEqual(1, r.length());
    assertEqual(2, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(2.5));
    assertEqual(1, r.length());
    assertEqual(2, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(127.5));
    assertEqual(1, r.length());
    assertEqual(128, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(128.5));
    assertEqual(1, r.length());
    assertEqual(128, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(254.5));
    assertEqual(1, r.length());
    assertEqual(254, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(255.5));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    arr.map((v, i, a) -> { called[0] += 1; return v;});
    assertEqual(0, called[0]);}

    @Test
    void testUint8ClampedArrayMapOne035() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 0);
    Uint8ClampedArray r = arr.map((v, i, a) -> 99);
    assertEqual(0, r.length());}

    @Test
    void testUint8ClampedArrayMapOne036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(4, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));}

    @Test
    void testUint8ClampedArrayMapOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 127, 128, 254, 255});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(6, r.length());
    assertEqual(255, r.get(5));
    assertEqual(0, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(127, r.get(2));
    assertEqual(128, r.get(3));
    assertEqual(254, r.get(4));}

    @Test
    void testUint8ClampedArrayMapOne038() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertNotEqual(arr.buffer(), r.buffer());}

    @Test
    void testUint8ClampedArrayMapOne041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertNotEqual(arr.buffer(), r.buffer());}

    @Test
    void testUint8ClampedArrayMapOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    r.set(0, 200);
    assertEqual(5, arr.get(0));}

    @Test
    void testUint8ClampedArrayMapOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    arr.set(0, 200);
    assertEqual(5, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertNotEqual(arr, r);}

    @Test
    void testUint8ClampedArrayMapOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r1 = arr.map((v, i, a) -> v);
    Uint8ClampedArray r2 = r1.map((v, i, a) -> v);
    assertNotEqual(r2, r1);}

    @Test
    void testUint8ClampedArrayMapOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v + 1).map((v, i, a) -> v + 1);
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    assertEqual(5, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.map((v, i, a) -> v + 100);
    assertEqual(10, arr.get(0));}

    @Test
    void testUint8ClampedArrayMapOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    try {
    r.get(r.length());
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayMapOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(1, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(127, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(128, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(254, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> i == 0 ? 100 : v);
    assertEqual(3, r.length());
    assertEqual(100, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayMapOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> i == 2 ? 99 : v);
    assertEqual(3, r.length());
    assertEqual(99, r.get(2));
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));}

    @Test
    void testUint8ClampedArrayMapOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int[] seen = {-1};
    arr.map((v, i, a) -> { seen[0] = i; return v;});
    assertEqual(0, seen[0]);}

    @Test
    void testUint8ClampedArrayMapOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10});
    int[] sum = {0};
    arr.map((v, i, a) -> { sum[0] += i; return v;});
    assertEqual(1, sum[0]);}

    @Test
    void testUint8ClampedArrayMapOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] seenLen = {0};
    arr.map((v, i, a) -> { seenLen[0] = a.length(); return v;});
    assertEqual(4, seenLen[0]);}

    @Test
    void testUint8ClampedArrayMapOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 1000);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> -1000);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(1e9));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(-1e9));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(2147483648L));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(Double.MAX_VALUE));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(Double.MIN_VALUE));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> -0);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(0.4));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(0.6));
    assertEqual(1, r.length());
    assertEqual(1, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 127);
    assertEqual(1, r.length());
    assertEqual(127, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 128);
    assertEqual(1, r.length());
    assertEqual(128, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 254);
    assertEqual(1, r.length());
    assertEqual(254, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0xFF);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0x100);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0b11111111);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayMapOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0b100000000);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}
}
