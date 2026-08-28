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

import basetype.common.BasTest;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayOf01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayOf01Test extends BasTest {

    @Test
    void testUint8ClampedArrayOfOne001() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfOne002() {
    int v = 42;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(1, arr.length());
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne003() {
    int a = 7;
    int b = 8;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b);
    assertEqual(2, arr.length());
    assertEqual(7, arr.get(0));
    assertEqual(8, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne004() {
    int v = 5;
    Uint8ClampedArray arr = Uint8ClampedArray.of(
        v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v,
        v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v,
        v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v, v
    );
    assertEqual(100, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfOne005() {
    int v = 0;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne006() {
    int v = 127;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(127, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne007() {
    int v = -1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne008() {
    int a = 1;
    int b = 2;
    int c = 3;
    int d = 4;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c, d);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfOne009() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c, b, a);
    assertEqual(5, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(2, arr.get(3));
    assertEqual(1, arr.get(4));
    assertEqual(arr.get(4), arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne010() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne011() {
    int v = 1;
    Uint8ClampedArray a = Uint8ClampedArray.of(v);
    Uint8ClampedArray b = Uint8ClampedArray.of(v);
    assertNotEqual(b, a);
    }

    @Test
    void testUint8ClampedArrayOfOne012() {
    int v = 1;
    Uint8ClampedArray a = Uint8ClampedArray.of(v);
    Uint8ClampedArray b = Uint8ClampedArray.of(v);
    assertNotEqual(b.buffer(), a.buffer());
    }

    @Test
    void testUint8ClampedArrayOfOne013() {
    int v = 1;
    Uint8ClampedArray a = Uint8ClampedArray.of(v);
    a.set(0, 99);
    Uint8ClampedArray b = Uint8ClampedArray.of(v);
    assertEqual(1, b.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne014() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    arr.set(0, 50);
    assertEqual(50, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne015() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    arr.set(0, 300);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne016() {
    int v = 77;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(77, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne017() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    arr.set(0, 88);
    assertEqual(88, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne018() {
    int a = 1;
    int b = 2;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b);
    arr.fill(9);
    assertEqual(9, arr.get(0));
    assertEqual(9, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne019() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c);
    arr.reverse();
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfOne020() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c);
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual(2, s.length());
    }

    @Test
    void testUint8ClampedArrayOfOne021() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c);
    Uint8ClampedArray s = arr.subarray(1, 3);
    assertEqual(2, s.length());
    assertEqual(2, s.get(0));
    assertEqual(3, s.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne022() {
    int a = 7;
    int b = 8;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b);
    Uint8ClampedArray.KeyIterator it = arr.values();
    IteratorResult r = it.next();
    assertEqual(7, r.value);
    }

    @Test
    void testUint8ClampedArrayOfOne023() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c);
    int cnt = 0;
    for (Integer x : arr.values()) {
    cnt = cnt + 1;
    }
    assertEqual(3, cnt);
    }

    @Test
    void testUint8ClampedArrayOfOne024() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    int cnt = 0;
    for (Integer x : arr.values()) {
    cnt = cnt + 1;
    }
    assertEqual(0, cnt);
    }

    @Test
    void testUint8ClampedArrayOfOne025() {
    int v = 42;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertTrue(arr.includes(42));
    }

    @Test
    void testUint8ClampedArrayOfOne026() {
    int v = 42;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(0, arr.indexOf(42));
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne027() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(-1, arr.indexOf(0));
    }

    @Test
    void testUint8ClampedArrayOfOne028() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertFalse(arr.includes(0));
    }

    @Test
    void testUint8ClampedArrayOfOne029() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual("", arr.join(","));
    }

    @Test
    void testUint8ClampedArrayOfOne030() {
    int a = 1;
    int b = 2;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b);
    assertEqual("1,2", arr.join(","));
    }

    @Test
    void testUint8ClampedArrayOfOne031() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    try {
    arr.get(0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne032() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    try {
    arr.set(0, 50);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne033() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    try {
    arr.with(5, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne034() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    try {
    arr.with(0, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne035() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    try {
    arr.reduce((acc, cur, index, array) -> acc + cur);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne036() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    try {
    arr.reduceRight((acc, cur, index, array) -> acc + cur);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne037() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertFalse(arr.some((v) -> v > 0));
    }

    @Test
    void testUint8ClampedArrayOfOne038() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertTrue(arr.every((v) -> v > 0));
    }

    @Test
    void testUint8ClampedArrayOfOne039() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    Integer r = arr.find((v) -> v > 0);
    assertEqual(null, r);
    }

    @Test
    void testUint8ClampedArrayOfOne040() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(-1, arr.findIndex((v) -> v > 0));
    }

    @Test
    void testUint8ClampedArrayOfOne041() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    Integer r = arr.at(0);
    assertEqual(null, r);
    }

    @Test
    void testUint8ClampedArrayOfOne042() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    Integer r = arr.at(-1);
    assertEqual(null, r);
    }

    @Test
    void testUint8ClampedArrayOfOne043() {
    int v = 55;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(55, arr.at(-1));
    }

    @Test
    void testUint8ClampedArrayOfOne044() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    try {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne045() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    try {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5});
    arr.set(src, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne046() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.0);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne047() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(255.0);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne048() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(256.0);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne049() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-1.0);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne050() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(128.5);
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne051() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.5);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne052() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(2.5);
    assertEqual(2, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne053() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(254.6);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne054() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(255.5);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne055() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.NaN);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne056() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne057() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne058() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0x10, 020, 0b10000, 16.0);
    assertEqual(16, arr.get(0));
    assertEqual(16, arr.get(1));
    assertEqual(16, arr.get(2));
    assertEqual(16, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfOne059() {
    List<Integer> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfOne060() {
    double[] src = new double[] {100.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(1, arr.length());
    assertEqual(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne061() {
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(5, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayOfOne062() {
    double[] src = new double[] {300.0, -50.0, 128.0};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(128, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfOne063() {
    double[] src = new double[] {Double.NaN, Double.NaN, Double.NaN};
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfOne064() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(11.0, 22.0, 33.0);
    assertEqual(22, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne065() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0, 3.0);
    arr.set(1, 300);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne066() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0);
    try {
    arr.get(2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne067() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0);
    try {
    arr.get(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne068() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0);
    try {
    arr.set(2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne069() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0);
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne070() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0);
    try {
    arr.with(2, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne071() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0);
    try {
    arr.with(-3, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayOfOne072() {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 1000; i++) {
    list.add((int) (1e6));
    }
    Uint8ClampedArray arr = Uint8ClampedArray.from(list);
    assertEqual(1000, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(500));
    assertEqual(255, arr.get(999));
    }

    @Test
    void testUint8ClampedArrayOfOne073() {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 1000; i++) {
    list.add((int) (Double.NaN));
    }
    Uint8ClampedArray arr = Uint8ClampedArray.from(list);
    assertEqual(0, arr.get(500));
    }

    @Test
    void testUint8ClampedArrayOfOne074() {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 1024; i++) {
    list.add((int) (128.0));
    }
    Uint8ClampedArray arr = Uint8ClampedArray.from(list);
    assertEqual(1024, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(128, arr.get(512));
    assertEqual(128, arr.get(1023));
    }

    @Test
    void testUint8ClampedArrayOfOne075() {
    int v = 10;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfOne076() {
    int a = 10;
    int b = 20;
    int c = 30;
    int d = 40;
    int e = 50;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c, d, e);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfOne077() {
    int v = -128;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne078() {
    int v = 126;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(126, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne079() {
    int v = -127;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne080() {
    int p = 100;
    int n = -100;
    Uint8ClampedArray arr = Uint8ClampedArray.of(p, n);
    assertEqual(100, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne081() {
    int a = 4;
    int b = 3;
    int c = 2;
    int d = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c, d);
    assertEqual(4, arr.get(0));
    assertEqual(3, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(1, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfOne082() {
    int z = 0;
    int h = 127;
    Uint8ClampedArray arr = Uint8ClampedArray.of(z, h, z, h);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(127, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfOne083() {
    int z = 0;
    int m = 64;
    int h = 127;
    Uint8ClampedArray arr = Uint8ClampedArray.of(z, m, h);
    assertEqual(0, arr.get(0));
    assertEqual(64, arr.get(1));
    assertEqual(127, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfOne084() {
    int n = -128;
    int p = 127;
    Uint8ClampedArray arr = Uint8ClampedArray.of(n, p);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfOne085() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayOfOne086() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(127.5);
    assertEqual(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne087() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.5);
    assertEqual(2, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne088() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.9);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfOne089() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.5, 1.5, 2.5, 3.5);
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(4, arr.get(3));
    }
}
