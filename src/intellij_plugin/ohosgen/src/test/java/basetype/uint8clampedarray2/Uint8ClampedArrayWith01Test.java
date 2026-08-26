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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayWith01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayWith01Test extends BasTest {

    @Test
    void testUint8ClampedArrayWithOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 10;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 20;
    Uint8ClampedArray r = arr.with(1, v);
    assertEqual(3, r.length());
    assertEqual(20, r.get(1));
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 30;
    Uint8ClampedArray r = arr.with(2, v);
    assertEqual(3, r.length());
    assertEqual(30, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));}

    @Test
    void testUint8ClampedArrayWithOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int v = 77;
    Uint8ClampedArray r = arr.with(-1, v);
    assertEqual(3, r.length());
    assertEqual(5, r.get(0));
    assertEqual(6, r.get(1));
    assertEqual(77, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int v = 1;
    try {
    arr.with(3, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int v = 1;
    try {
    arr.with(2147483647, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int v = 1;
    try {
    arr.with(Integer.MIN_VALUE, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    int v = 9;
    Uint8ClampedArray r = arr.with(07, v);
    assertEqual(8, r.length());
    assertEqual(9, r.get(7));
    assertEqual(10, r.get(0));
    assertEqual(50, r.get(4));}

    @Test
    void testUint8ClampedArrayWithOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    int v = 55;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(1, r.length());
    assertEqual(55, r.get(0));}

    @Test
    void testUint8ClampedArrayWithOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    int v = 1;
    try {
    arr.with(1, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int v = 1;
    try {
    arr.with(0, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne012() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 256; i++) { src.add(i);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int v = 50;
    Uint8ClampedArray r = arr.with(255, v);
    assertEqual(256, r.length());
    assertEqual(50, r.get(255));
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(128));}

    @Test
    void testUint8ClampedArrayWithOne013() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 256; i++) { src.add(i);}
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int v = 1;
    try {
    arr.with(256, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = 0;
    Uint8ClampedArray r = arr.with(1, v);
    assertEqual(3, r.length());
    assertEqual(0, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = 127;
    Uint8ClampedArray r = arr.with(1, v);
    assertEqual(3, r.length());
    assertEqual(127, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = -128;
    Uint8ClampedArray r = arr.with(1, v);
    assertEqual(3, r.length());
    assertEqual(0, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(3, r.length());
    assertEqual(9, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertNotEqual(arr, r);}

    @Test
    void testUint8ClampedArrayWithOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertNotEqual(arr.buffer(), r.buffer());}

    @Test
    void testUint8ClampedArrayWithOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 99;
    arr.with(0, v);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayWithOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 99;
    Uint8ClampedArray r = arr.with(2, v);
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(99, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArrayWithOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int withValue1 = 10;
    int withValue2 = 20;
    Uint8ClampedArray r1 = arr.with(0, withValue1);
    Uint8ClampedArray r2 = r1.with(1, withValue2);
    assertEqual(3, r2.length());
    assertEqual(10, r2.get(0));
    assertEqual(20, r2.get(1));
    assertEqual(3, r2.get(2));}

    @Test
    void testUint8ClampedArrayWithOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    try {
    arr.with(10, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(3, arr.length());}

    @Test
    void testUint8ClampedArrayWithOne024() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    int v = 9;
    try {
    arr.with(2, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer origBuf = arr.buffer();
    int v = 9;
    try {
    arr.with(5, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(origBuf, arr.buffer());}

    @Test
    void testUint8ClampedArrayWithOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 99;
    Uint8ClampedArray r = arr.with(0, v);
    r.set(1, 200);
    assertEqual(2, arr.get(1));}

    @Test
    void testUint8ClampedArrayWithOne027() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int v = 9;
    Uint8ClampedArray r = sub.with(0, v);
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(3, r.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    assertEqual(9, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray view = new Uint8ClampedArray(buf);
    view.set(0, 1);
    view.set(1, 2);
    int v = 99;
    view.with(0, v);
    assertEqual(1, view.get(0));}

    @Test
    void testUint8ClampedArrayWithOne029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 4);
    int v = 9;
    Uint8ClampedArray r = view.with(0, v);
    assertEqual(0, r.byteOffset());}

    @Test
    void testUint8ClampedArrayWithOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    java.util.function.IntSupplier withFn = (java.util.function.IntSupplier) () -> { throw new basetype.common.ClassCastError();};
    withFn.getAsInt();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    java.util.function.IntSupplier withFn = (java.util.function.IntSupplier) () -> { throw new basetype.common.ClassCastError();};
    withFn.getAsInt();
    fail();} catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 99.0);
    assertEqual(3, r.length());
    assertEqual(99, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(1, 99.0);
    assertEqual(3, r.length());
    assertEqual(99, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(2, 99.0);
    assertEqual(3, r.length());
    assertEqual(99, r.get(2));
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));}

    @Test
    void testUint8ClampedArrayWithOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.with(3, 99.0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(-1, 99.0);
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(99, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.with(2147483647, 99.0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.with(Integer.MIN_VALUE, 99.0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.with(0, 99.0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.with(0, 99.0);
    assertEqual(1, r.length());
    assertEqual(99, r.get(0));}

    @Test
    void testUint8ClampedArrayWithOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    try {
    arr.with(1, 99.0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 0.0);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 255.0);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 256.0);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, -1.0);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, Double.NaN);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, Double.POSITIVE_INFINITY);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, -Double.POSITIVE_INFINITY);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 0.5);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 2.5);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 128.5);
    assertEqual(3, r.length());
    assertEqual(128, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 254.5);
    assertEqual(3, r.length());
    assertEqual(254, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 255.5);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray r = arr.with(0, 256.0);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));}

    @Test
    void testUint8ClampedArrayWithOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int v = 99;
    Uint8ClampedArray r = arr.with(0b10, v);
    assertEqual(4, r.length());
    assertEqual(99, r.get(2));
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(40, r.get(3));}

    @Test
    void testUint8ClampedArrayWithOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int v = 88;
    Uint8ClampedArray r = arr.with(0x2, v);
    assertEqual(88, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(5, r.length());
    assertEqual(9, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));}

    @Test
    void testUint8ClampedArrayWithOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(1, r.length());
    assertEqual(9, r.get(0));}

    @Test
    void testUint8ClampedArrayWithOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 99;
    arr.with(1, v);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayWithOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 99;
    arr.with(2, v);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));}

    @Test
    void testUint8ClampedArrayWithOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 99;
    arr.with(0, v);
    assertEqual(4, arr.length());}

    @Test
    void testUint8ClampedArrayWithOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 99;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(4, r.length());
    assertEqual(2, r.get(1));
    assertEqual(99, r.get(0));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));}

    @Test
    void testUint8ClampedArrayWithOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int v = 99;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(4, r.length());
    assertEqual(4, r.get(3));
    assertEqual(99, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(5, r.byteLength());
    assertEqual(9, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));}

    @Test
    void testUint8ClampedArrayWithOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(1, r.BYTES_PER_ELEMENT);}

    @Test
    void testUint8ClampedArrayWithOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 9;
    Uint8ClampedArray r = arr.with(0, v);
    assertEqual(0, r.byteOffset());}

    @Test
    void testUint8ClampedArrayWithOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int withValue1 = 10;
    int withValue2 = 20;
    arr.with(0, withValue1);
    arr.with(1, withValue2);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayWithOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int withValue1 = 10;
    int withValue2 = 20;
    arr.with(0, withValue1);
    arr.with(1, withValue2);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArrayWithOne069() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0);
    int v = 9;
    try {
    arr.with(0, v);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArrayWithOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 99;
    Uint8ClampedArray r = arr.with(0, v);
    arr.set(1, 200);
    assertEqual(3, r.length());
    assertEqual(2, r.get(1));
    assertEqual(99, r.get(0));
    assertEqual(3, r.get(2));}

    @Test
    void testUint8ClampedArrayWithOne071() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    int v = 99;
    sub.with(0, v);
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArrayWithOne072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 4);
    int v = 9;
    Uint8ClampedArray r = view.with(0, v);
    assertEqual(4, r.byteLength());}

    @Test
    void testUint8ClampedArrayWithOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.with(0, 0.4);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));}
}
