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

package basetype.uint8array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.DataView;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayConstructor04Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayConstructor04Test extends BasTest {

    @Test
    void testUint8ArrayConstructor04_001() {
    Uint8Array a = new Uint8Array();
    Uint8Array b = new Uint8Array(0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_002() {
    Uint8Array a = new Uint8Array();
    Uint8Array b = new Uint8Array(0.0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_003() {
    try {
    Uint8Array b = new Uint8Array(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_004() {
    try {
    Uint8Array b = new Uint8Array(-1.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_005() {
    Uint8Array a = new Uint8Array(10);
    Uint8Array b = new Uint8Array(10.0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_006() {
    Uint8Array a = new Uint8Array(10.7);
    assertEqual(10, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(10, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(9));
    }

    @Test
    void testUint8ArrayConstructor04_007() {
    Uint8Array a = new Uint8Array(3.1);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_008() {
    Uint8Array a = new Uint8Array(0.9);
    assertEqual(0, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_009() {
    Uint8Array a = new Uint8Array(0xFF);
    assertEqual(255, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(255, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(254));
    }

    @Test
    void testUint8ArrayConstructor04_010() {
    Uint8Array a = new Uint8Array(0377);
    assertEqual(255, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(255, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(254));
    }

    @Test
    void testUint8ArrayConstructor04_011() {
    Uint8Array a = new Uint8Array(1e2);
    assertEqual(100, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(100, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(99));
    }

    @Test
    void testUint8ArrayConstructor04_012() {
    int[] fa = new int[] {1, 2, 3};
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Uint8Array ua1 = new Uint8Array(fa);
    Uint8Array ua2 = new Uint8Array(arr);
    assertEqual(ua2.length(), ua1.length());
    assertEqual(ua2.byteOffset(), ua1.byteOffset());
    assertEqual(ua2.byteLength(), ua1.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_013() {
    int[] fi = new int[] {10, 20, 30};
    double[] fn = new double[] {10.0, 20.0, 30.0};
    Uint8Array a = new Uint8Array(fi);
    Uint8Array b = new Uint8Array(fn);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_014() {
    Uint8Array a = new Uint8Array(new int[] {});
    List<Integer> b = new ArrayList<>();
    Uint8Array c = new Uint8Array(b);
    assertEqual(0, a.length());
    assertEqual(0, c.length());
    assertEqual(0, a.byteOffset());
    assertEqual(0, a.byteLength());
    assertEqual(0, c.byteOffset());
    assertEqual(0, c.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_015() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab);
    Uint8Array b = new Uint8Array(ab, 0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_016() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab);
    Uint8Array b = new Uint8Array(ab, 0.0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_017() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab, 3);
    Uint8Array b = new Uint8Array(ab, 3.0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_018() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab, 1, 3);
    Uint8Array b = new Uint8Array(ab, 1.0, 3.0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_019() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab, 2, 6);
    Uint8Array b = new Uint8Array(ab, 2);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_020() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab);
    Uint8Array b = new Uint8Array(ab, 0, 8);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_021() {
    Uint8Array src = new Uint8Array(3);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(src.length(), dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(src.byteLength(), dst.byteLength());
    assertEqual(0, dst.get(0));
    assertEqual(0, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_022() {
    Uint8Array a = new Uint8Array(new int[] {0xFF});
    Uint8Array b = new Uint8Array(new int[] {255});
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_023() {
    Uint8Array a = new Uint8Array(new int[] {0b11111111});
    Uint8Array b = new Uint8Array(new int[] {255});
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_024() {
    Uint8Array a = new Uint8Array(0x7F);
    Uint8Array b = new Uint8Array(127);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_025() {
    try {
    Uint8Array a = new Uint8Array(-3.5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_026() {
    Uint8Array a = new Uint8Array(-0);
    Uint8Array b = new Uint8Array(0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_027() {
    Uint8Array a = new Uint8Array(2.0);
    Uint8Array b = new Uint8Array(2);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_028() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab, 1);
    Uint8Array b = new Uint8Array(ab, 1.0);
    assertEqual(b.length(), a.length());
    assertEqual(b.byteOffset(), a.byteOffset());
    assertEqual(b.byteLength(), a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_029() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array full = new Uint8Array(ab, 2, 6);
    Uint8Array rest = new Uint8Array(ab, 2);
    assertEqual(rest.length(), full.length());
    assertEqual(rest.byteOffset(), full.byteOffset());
    assertEqual(rest.byteLength(), full.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_030() {
    Uint8Array a = new Uint8Array(5);
    assertEqual(5, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(5, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(4));
    }

    @Test
    void testUint8ArrayConstructor04_031() {
    Uint8Array a = new Uint8Array(5.0);
    assertEqual(5, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(5, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(4));
    }

    @Test
    void testUint8ArrayConstructor04_032() {
    int[] data = new int[] {1, 2, 3, 4};
    Uint8Array a = new Uint8Array(data);
    assertEqual(4, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(4, a.byteLength());
    assertEqual(1, a.get(0));
    assertEqual(4, a.get(3));
    }

    @Test
    void testUint8ArrayConstructor04_033() {
    double[] data = new double[] {1.0, 2.0, 3.0};
    Uint8Array a = new Uint8Array(data);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(1, a.get(0));
    assertEqual(3, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_034() {
    List<Integer> data = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Uint8Array a = new Uint8Array(data);
    assertEqual(5, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(5, a.byteLength());
    assertEqual(10, a.get(0));
    assertEqual(50, a.get(4));
    }

    @Test
    void testUint8ArrayConstructor04_035() {
    Uint8Array src = new Uint8Array(7);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(src.length(), dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(src.byteLength(), dst.byteLength());
    assertEqual(0, dst.get(0));
    assertEqual(0, dst.get(6));
    }

    @Test
    void testUint8ArrayConstructor04_036() {
    ArrayBuffer ab = new ArrayBuffer(10);
    Uint8Array a = new Uint8Array(ab);
    assertEqual(10, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(10, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(9));
    }

    @Test
    void testUint8ArrayConstructor04_037() {
    ArrayBuffer ab = new ArrayBuffer(10);
    Uint8Array a = new Uint8Array(ab, 3);
    assertEqual(7, a.length());
    assertEqual(3, a.byteOffset());
    assertEqual(7, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_038() {
    ArrayBuffer ab = new ArrayBuffer(10);
    Uint8Array a = new Uint8Array(ab, 2, 4);
    assertEqual(4, a.length());
    assertEqual(2, a.byteOffset());
    assertEqual(4, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_039() {
    ArrayBuffer ab = new ArrayBuffer(10);
    Uint8Array a = new Uint8Array(ab);
    assertEqual(10, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(10, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_040() {
    List<Integer> empty = new ArrayList<>();
    Uint8Array a = new Uint8Array(empty);
    assertEqual(0, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_041() {
    Uint8Array a = new Uint8Array(5);
    Uint8Array b = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array c = new Uint8Array(new ArrayBuffer(4));
    assertEqual(5, a.length());
    assertEqual(3, b.length());
    assertEqual(4, c.length());
    assertEqual(0, a.byteOffset());
    assertEqual(5, a.byteLength());
    assertEqual(0, b.byteOffset());
    assertEqual(3, b.byteLength());
    assertEqual(0, c.byteOffset());
    assertEqual(4, c.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(1, b.get(0));
    assertEqual(0, c.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_042() {
    try {
    Uint8Array a = new Uint8Array(-5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_043() {
    try {
    Uint8Array a = new Uint8Array(-5.0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_044() {
    Uint8Array a = new Uint8Array(3.9);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_045() {
    Uint8Array a = new Uint8Array(0.1);
    assertEqual(0, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_046() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab, 2);
    assertEqual(6, a.length());
    assertEqual(2, a.byteOffset());
    assertEqual(6, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_047() {
    Uint8Array a = new Uint8Array(5);
    assertEqual(5, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(5, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_048() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array a = new Uint8Array(ab);
    assertEqual(8, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(8, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_049() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 0, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_050() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_051() {
    ArrayBuffer ab = new ArrayBuffer(6);
    try {
    Uint8Array a = new Uint8Array(ab, 3, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_052() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array a = new Uint8Array(ab, 4);
    assertEqual(0, a.length());
    assertEqual(4, a.byteOffset());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_053() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 0, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_054() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 1.0, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_055() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 1, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_056() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_057() {
    ArrayBuffer ab = new ArrayBuffer(4);
    int caught = 0;
    try {
    Uint8Array a = new Uint8Array(ab, 0, 10);
    fail();
    } catch (RangeError e) {
    caught++;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    try {
    Uint8Array b = new Uint8Array(ab, 10);
    fail();
    } catch (RangeError e) {
    caught++;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(2, caught);
    }

    @Test
    void testUint8ArrayConstructor04_058() {
    ArrayBuffer ab = new ArrayBuffer(8);
    try {
    Uint8Array a = new Uint8Array(ab, 0, 20);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Uint8Array b = new Uint8Array(ab, 2, 4);
    assertEqual(4, b.length());
    assertEqual(2, b.byteOffset());
    assertEqual(4, b.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_059() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 100.0, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_060() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_061() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array a = new Uint8Array(ab, 0.0, 20);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor04_062() {
    ArrayBuffer ab = new ArrayBuffer(8);
    try {
    Uint8Array a = new Uint8Array(ab, 0, 20);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    Uint8Array ok = new Uint8Array(ab, 0, 4);
    assertEqual(4, ok.length());
    assertEqual(0, ok.byteOffset());
    assertEqual(4, ok.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_063() {
    Uint8Array a = new Uint8Array(3);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_064() {
    Uint8Array a = new Uint8Array(3.0);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_065() {
    Uint8Array a = new Uint8Array(new int[] {1, 2, 3});
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(1, a.get(0));
    assertEqual(3, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_066() {
    Uint8Array a = new Uint8Array(new double[] {10.0, 20.0, 30.0});
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(10, a.get(0));
    assertEqual(30, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_067() {
    List<Integer> data = java.util.Arrays.asList(100, 200, 255);
    Uint8Array a = new Uint8Array(data);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(100, a.get(0));
    assertEqual(255, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_068() {
    Uint8Array src = new Uint8Array(new int[] {5, 10, 15});
    Uint8Array dst = new Uint8Array(src);
    assertEqual(src.length(), dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(src.byteLength(), dst.byteLength());
    assertEqual(5, dst.get(0));
    assertEqual(15, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_069() {
    ArrayBuffer ab = new ArrayBuffer(3);
    Uint8Array a = new Uint8Array(ab);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_070() {
    ArrayBuffer ab = new ArrayBuffer(4);
    DataView dv = new DataView(ab);
    dv.setUint8(0, 10);
    dv.setUint8(1, 20);
    dv.setUint8(2, 30);
    dv.setUint8(3, 40);
    Uint8Array a = new Uint8Array(ab, 1, 2);
    assertEqual(2, a.length());
    assertEqual(1, a.byteOffset());
    assertEqual(2, a.byteLength());
    assertEqual(20, a.get(0));
    assertEqual(30, a.get(1));
    }

    @Test
    void testUint8ArrayConstructor04_071() {
    ArrayBuffer ab = new ArrayBuffer(6);
    DataView dv = new DataView(ab);
    dv.setUint8(0, 1);
    dv.setUint8(1, 2);
    dv.setUint8(2, 3);
    dv.setUint8(3, 4);
    dv.setUint8(4, 5);
    dv.setUint8(5, 6);
    Uint8Array a = new Uint8Array(ab, 2, 3);
    assertEqual(3, a.length());
    assertEqual(2, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(3, a.get(0));
    assertEqual(5, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_072() {
    ArrayBuffer ab = new ArrayBuffer(3);
    Uint8Array a = new Uint8Array(ab);
    assertEqual(3, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    assertEqual(0, a.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_073() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array a = new Uint8Array(ab, 2);
    assertEqual(4, a.length());
    assertEqual(2, a.byteOffset());
    assertEqual(4, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_074() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array a = new Uint8Array(ab, 1, 3);
    assertEqual(3, a.length());
    assertEqual(1, a.byteOffset());
    assertEqual(3, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_075() {
    List<Integer> data = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Uint8Array a = new Uint8Array(data);
    assertEqual(5, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(5, a.byteLength());
    assertEqual(1, a.get(0));
    assertEqual(5, a.get(4));
    }

    @Test
    void testUint8ArrayConstructor04_076() {
    Uint8Array src = new Uint8Array(5);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(5, dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(5, dst.byteLength());
    assertEqual(0, dst.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_077() {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint8Array dst = new Uint8Array(src);
    assertEqual(src.length(), dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(src.byteLength(), dst.byteLength());
    assertEqual(10, dst.get(0));
    assertEqual(30, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_078() {
    Uint8Array src = new Uint8Array(4);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(src.length(), dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(src.byteLength(), dst.byteLength());
    assertEqual(0, dst.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_079() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array view1 = new Uint8Array(ab, 0, 2);
    Uint8Array view2 = new Uint8Array(ab, 2, 2);
    assertEqual(2, view1.length());
    assertEqual(2, view2.length());
    assertEqual(0, view1.byteOffset());
    assertEqual(2, view1.byteLength());
    assertEqual(2, view2.byteOffset());
    assertEqual(2, view2.byteLength());
    }

    @Test
    void testUint8ArrayConstructor04_080() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array a = new Uint8Array(ab);
    assertEqual(6, a.length());
    assertEqual(0, a.byteOffset());
    assertEqual(6, a.byteLength());
    assertEqual(0, a.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_081() {
    ArrayBuffer ab = new ArrayBuffer(5);
    Uint8Array v = new Uint8Array(ab);
    assertEqual(5, v.length());
    assertEqual(0, v.byteOffset());
    assertEqual(5, v.byteLength());
    assertEqual(0, v.get(0));
    assertEqual(0, v.get(4));
    }

    @Test
    void testUint8ArrayConstructor04_082() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array view1 = new Uint8Array(ab);
    view1.set(3, 77);
    Uint8Array view2 = new Uint8Array(ab, 3, 5);
    assertEqual(5, view2.length());
    assertEqual(3, view2.byteOffset());
    assertEqual(5, view2.byteLength());
    assertEqual(77, view2.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_083() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array view = new Uint8Array(ab);
    view.set(0, 100);
    Uint8Array src = new Uint8Array(ab);
    assertEqual(4, src.length());
    assertEqual(0, src.byteOffset());
    assertEqual(4, src.byteLength());
    assertEqual(100, src.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_084() {
    Uint8Array src = new Uint8Array(100);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(100, dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(100, dst.byteLength());
    assertEqual(0, dst.get(0));
    assertEqual(0, dst.get(99));
    }

    @Test
    void testUint8ArrayConstructor04_085() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array src = new Uint8Array(ab);
    src.set(2, 100);
    Uint8Array view = new Uint8Array(ab, 2, 4);
    assertEqual(4, view.length());
    assertEqual(2, view.byteOffset());
    assertEqual(4, view.byteLength());
    assertEqual(100, view.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_086() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array src = new Uint8Array(ab);
    src.set(1, 10);
    src.set(2, 20);
    src.set(3, 30);
    Uint8Array view = new Uint8Array(ab, 1, 3);
    assertEqual(3, view.length());
    assertEqual(1, view.byteOffset());
    assertEqual(3, view.byteLength());
    assertEqual(10, view.get(0));
    assertEqual(30, view.get(2));
    }

    @Test
    void testUint8ArrayConstructor04_087() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array src = new Uint8Array(ab);
    src.set(0, 100);
    src.set(1, 200);
    Uint8Array view = new Uint8Array(ab);
    assertEqual(4, view.length());
    assertEqual(0, view.byteOffset());
    assertEqual(4, view.byteLength());
    assertEqual(100, view.get(0));
    assertEqual(200, view.get(1));
    }

    @Test
    void testUint8ArrayConstructor04_088() {
    Uint8Array src = new Uint8Array(3.9);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(3, dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(3, dst.byteLength());
    assertEqual(0, dst.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_089() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array view1 = new Uint8Array(ab, 0, 2);
    Uint8Array view2 = new Uint8Array(ab, 2, 2);
    view1.set(0, 100);
    view1.set(1, 200);
    assertEqual(2, view2.length());
    assertEqual(2, view1.length());
    assertEqual(0, view1.byteOffset());
    assertEqual(2, view1.byteLength());
    assertEqual(2, view2.byteOffset());
    assertEqual(2, view2.byteLength());
    assertEqual(100, view1.get(0));
    assertEqual(0, view2.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_090() {
    Uint8Array src = new Uint8Array(1000);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(1000, dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(1000, dst.byteLength());
    assertEqual(0, dst.get(0));
    assertEqual(0, dst.get(999));
    }

    @Test
    void testUint8ArrayConstructor04_091() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array src = new Uint8Array(ab);
    src.set(3, 100);
    Uint8Array view = new Uint8Array(ab, 3, 3);
    assertEqual(3, view.length());
    assertEqual(3, view.byteOffset());
    assertEqual(3, view.byteLength());
    assertEqual(100, view.get(0));
    }

    @Test
    void testUint8ArrayConstructor04_092() {
    ArrayBuffer ab = new ArrayBuffer(6);
    Uint8Array src = new Uint8Array(ab);
    src.set(2, 100);
    src.set(3, 200);
    Uint8Array view = new Uint8Array(ab, 2, 2);
    assertEqual(2, view.length());
    assertEqual(2, view.byteOffset());
    assertEqual(2, view.byteLength());
    assertEqual(100, view.get(0));
    assertEqual(200, view.get(1));
    }

    @Test
    void testUint8ArrayConstructor04_093() {
    Uint8Array src = new Uint8Array(0);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(0, dst.length());
    assertEqual(0, dst.byteOffset());
    assertEqual(0, dst.byteLength());
    }
}
