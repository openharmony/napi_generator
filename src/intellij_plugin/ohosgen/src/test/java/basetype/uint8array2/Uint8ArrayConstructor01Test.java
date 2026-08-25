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
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
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
 * Uint8ArrayConstructor01Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayConstructor01Test extends BasTest {

    @Test
    void testUint8ArrayConstructor01_001() {
    Uint8Array u = new Uint8Array();
    assertEqual(0, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_002() {
    Uint8Array u = new Uint8Array();
    assertEqual(1, u.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor01_003() {
    Uint8Array u = new Uint8Array();
    assertEqual("Uint8Array", u.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor01_004() {
    Uint8Array u = new Uint8Array();
    assertNotNull(u.buffer());
    }

    @Test
    void testUint8ArrayConstructor01_005() {
    Uint8Array u = new Uint8Array();
    assertEqual(0, u.buffer().byteLength());
    }

    @Test
    void testUint8ArrayConstructor01_006() {
    Uint8Array u1 = new Uint8Array();
    Uint8Array u2 = new Uint8Array();
    assertEqual(0, u1.length());
    assertEqual(0, u2.length());
    }

    @Test
    void testUint8ArrayConstructor01_007() {
    int[] src = new int[] {};
    Uint8Array u = new Uint8Array(src);
    assertEqual("Uint8Array", u.getClass().getSimpleName());
    assertEqual(0, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_008() {
    int[] src = new int[] {0};
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_009() {
    int[] src = new int[] {0};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_010() {
    int[] src = new int[] {1};
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_011() {
    int[] src = new int[] {127};
    Uint8Array u = new Uint8Array(src);
    assertEqual(127, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_012() {
    int[] src = new int[] {128};
    Uint8Array u = new Uint8Array(src);
    assertEqual(128, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_013() {
    int[] src = new int[] {254};
    Uint8Array u = new Uint8Array(src);
    assertEqual(254, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_014() {
    int[] src = new int[] {255};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_015() {
    int[] src = new int[] {256};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_016() {
    int[] src = new int[] {-1};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_017() {
    int[] src = new int[] {-128};
    Uint8Array u = new Uint8Array(src);
    assertEqual(128, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_018() {
    int[] src = new int[] {0x80};
    Uint8Array u = new Uint8Array(src);
    assertEqual(128, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_019() {
    int[] src = new int[] {0xFF};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_020() {
    int[] src = new int[] {0x100};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_021() {
    int[] src = new int[] {0x7F};
    Uint8Array u = new Uint8Array(src);
    assertEqual(127, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_022() {
    int[] src = new int[] {-0x1};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_023() {
    int[] src = new int[] {0377};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_024() {
    int[] src = new int[] {0b11111111};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_025() {
    int[] src = new int[] {0b0};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_026() {
    int[] src = new int[] {100};
    Uint8Array u = new Uint8Array(src);
    assertEqual(100, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_027() {
    int[] src = new int[] {999};
    Uint8Array u = new Uint8Array(src);
    assertEqual(231, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_028() {
    int[] src = new int[] {1, 2, 3};
    Uint8Array u = new Uint8Array(src);
    assertEqual(3, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_029() {
    int[] src = new int[] {1, 2, 3};
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.get(0));
    assertEqual(2, u.get(1));
    assertEqual(3, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_030() {
    int[] src = new int[] {0, 127, 255};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(127, u.get(1));
    assertEqual(255, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_031() {
    int[] src = new int[] {256, -1, 257};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(255, u.get(1));
    assertEqual(1, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_032() {
    int[] src = new int[] {999, -999};
    Uint8Array u = new Uint8Array(src);
    assertEqual(231, u.get(0));
    assertEqual(25, u.get(1));
    }

    @Test
    void testUint8ArrayConstructor01_033() {
    int[] src = new int[] {0x80, 0xFF, 0x100};
    Uint8Array u = new Uint8Array(src);
    assertEqual(128, u.get(0));
    assertEqual(255, u.get(1));
    assertEqual(0, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_034() {
    int[] src = new int[] {0, 0, 0, 0, 0};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(0, u.get(1));
    assertEqual(0, u.get(2));
    assertEqual(0, u.get(3));
    assertEqual(0, u.get(4));
    }

    @Test
    void testUint8ArrayConstructor01_035() {
    int[] src = new int[] {255, 255, 255};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    assertEqual(255, u.get(1));
    assertEqual(255, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_036() {
    int[] src = new int[] {128, 128, 128};
    Uint8Array u = new Uint8Array(src);
    assertEqual(128, u.get(0));
    assertEqual(128, u.get(1));
    assertEqual(128, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_037() {
    int[] src = new int[] {0, 1, 254, 255};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(1, u.get(1));
    assertEqual(254, u.get(2));
    assertEqual(255, u.get(3));
    }

    @Test
    void testUint8ArrayConstructor01_038() {
    int[] src = new int[] {0377, 0200, 0100};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    assertEqual(128, u.get(1));
    assertEqual(64, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_039() {
    int[] src = new int[] {0b11111111, 0b10000000, 0b00000000};
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    assertEqual(128, u.get(1));
    assertEqual(0, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_040() {
    int[] src = new int[] {10, 20};
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor01_041() {
    int[] src = new int[] {10, 20, 30};
    Uint8Array u = new Uint8Array(src);
    assertEqual(3, u.byteLength());
    }

    @Test
    void testUint8ArrayConstructor01_042() {
    int[] src = new int[] {10, 20};
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor01_043() {
    int[] src = new int[] {10, 20};
    Uint8Array u = new Uint8Array(src);
    assertEqual("Uint8Array", u.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor01_044() {
    int[] src = new int[] {10, 20};
    Uint8Array u = new Uint8Array(src);
    assertNotNull(u.buffer());
    }

    @Test
    void testUint8ArrayConstructor01_045() {
    int[] src = new int[] {10, 20, 30};
    Uint8Array u = new Uint8Array(src);
    assertEqual(3, u.buffer().byteLength());
    }

    @Test
    void testUint8ArrayConstructor01_046() {
    int[] src = new int[] {1, 2, 3};
    Uint8Array u = new Uint8Array(src);
    u.set(0, 99);
    assertEqual(1, src[0]);
    }

    @Test
    void testUint8ArrayConstructor01_047() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(4, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_048() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(0, u.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor01_049() {
    ArrayBuffer buf = new ArrayBuffer(100);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(100, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_050() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(1, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_051() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(0, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_052() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 1);
    assertEqual(1, u.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor01_053() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 4);
    assertEqual(0, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_054() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array u = new Uint8Array(buf, 8);
    assertEqual(0, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_055() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array u = new Uint8Array(buf, 7);
    assertEqual(1, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_056() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(1, u.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor01_057() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual("Uint8Array", u.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor01_058() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertNotNull(u.buffer());
    }

    @Test
    void testUint8ArrayConstructor01_059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(buf, u.buffer());
    }

    @Test
    void testUint8ArrayConstructor01_060() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(4, u.buffer().byteLength());
    }

    @Test
    void testUint8ArrayConstructor01_061() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u = new Uint8Array(buf, 0);
    assertEqual(0, u.get(0));
    assertEqual(0, u.get(1));
    assertEqual(0, u.get(2));
    assertEqual(0, u.get(3));
    }

    @Test
    void testUint8ArrayConstructor01_062() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u1 = new Uint8Array(buf, 0);
    u1.set(0, 128);
    Uint8Array u2 = new Uint8Array(buf, 0);
    assertEqual(128, u2.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u1 = new Uint8Array(buf, 0);
    u1.set(1, 42);
    Uint8Array u2 = new Uint8Array(buf, 1);
    assertEqual(42, u2.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_064() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array u1 = new Uint8Array(buf, 1);
    u1.set(0, 99);
    Uint8Array u2 = new Uint8Array(buf, 0);
    assertEqual(99, u2.get(1));
    }

    @Test
    void testUint8ArrayConstructor01_065() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array u = new Uint8Array(buf, 3);
    assertEqual(7, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_066() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array u = new Uint8Array(buf, 3);
    assertEqual(3, u.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor01_067() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array u = new Uint8Array(buf, 3);
    assertEqual(1, u.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor01_068() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array u = new Uint8Array(buf, 3);
    assertEqual("Uint8Array", u.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor01_069() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array u = new Uint8Array(buf, 3);
    assertEqual(buf, u.buffer());
    }

    @Test
    void testUint8ArrayConstructor01_070() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array u = new Uint8Array(src);
    assertEqual(3, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_071() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.get(0));
    assertEqual(2, u.get(1));
    assertEqual(3, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_072() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor01_073() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor01_074() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array u = new Uint8Array(src);
    assertEqual("Uint8Array", u.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor01_075() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array u = new Uint8Array(src);
    assertNotNull(u.buffer());
    }

    @Test
    void testUint8ArrayConstructor01_076() {
    List<Integer> src = java.util.Arrays.asList(42);
    Uint8Array u = new Uint8Array(src);
    assertEqual(42, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_077() {
    List<Integer> src = new ArrayList<>();
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.length());
    }

    @Test
    void testUint8ArrayConstructor01_078() {
    List<Integer> src = java.util.Arrays.asList(0, 127, 255);
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(127, u.get(1));
    assertEqual(255, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_079() {
    List<Integer> src = java.util.Arrays.asList(256, -1);
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(255, u.get(1));
    }

    @Test
    void testUint8ArrayConstructor01_080() {
    List<Integer> src = java.util.Arrays.asList(42);
    Uint8Array u = new Uint8Array(src);
    assertEqual(1, u.length());
    assertEqual(42, u.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_081() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    Uint8Array u = new Uint8Array(src);
    assertEqual(10, u.length());
    assertEqual(1, u.get(0));
    assertEqual(10, u.get(9));
    }

    @Test
    void testUint8ArrayConstructor01_082() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0);
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(0, u.get(1));
    assertEqual(0, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_083() {
    List<Integer> src = java.util.Arrays.asList(255, 255, 255);
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    assertEqual(255, u.get(1));
    assertEqual(255, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_084() {
    List<Integer> src = java.util.Arrays.asList(0, 128, 255);
    Uint8Array u = new Uint8Array(src);
    assertEqual(0, u.get(0));
    assertEqual(128, u.get(1));
    assertEqual(255, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_085() {
    List<Integer> src = java.util.Arrays.asList(-1, -128);
    Uint8Array u = new Uint8Array(src);
    assertEqual(255, u.get(0));
    assertEqual(128, u.get(1));
    }

    @Test
    void testUint8ArrayConstructor01_086() {
    List<Integer> src = java.util.Arrays.asList(999, -999);
    Uint8Array u = new Uint8Array(src);
    assertEqual(231, u.get(0));
    assertEqual(25, u.get(1));
    }

    @Test
    void testUint8ArrayConstructor01_087() {
    List<Integer> src = java.util.Arrays.asList(0x80, 0xFF, 0x100);
    Uint8Array u = new Uint8Array(src);
    assertEqual(128, u.get(0));
    assertEqual(255, u.get(1));
    assertEqual(0, u.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_088() {
    Uint8Array src = new Uint8Array(0);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(0, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_089() {
    Uint8Array src = new Uint8Array(new int[] {0});
    Uint8Array dst = new Uint8Array(src);
    assertEqual(1, dst.length());
    assertEqual(0, dst.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_090() {
    Uint8Array src = new Uint8Array(new int[] {0, 127, 255});
    Uint8Array dst = new Uint8Array(src);
    assertEqual(3, dst.length());
    assertEqual(0, dst.get(0));
    assertEqual(127, dst.get(1));
    assertEqual(255, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_091() {
    Uint8Array src = new Uint8Array(100);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(100, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_092() {
    Uint8Array src = new Uint8Array(5);
    Uint8Array dst = new Uint8Array(src);
    assertEqual(src.byteLength(), dst.byteLength());
    }

    @Test
    void testUint8ArrayConstructor01_093() {
    Uint8Array dst = new Uint8Array(new Uint8Array(3));
    assertEqual(3, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_094() {
    List<Integer> arr = java.util.Arrays.asList(0);
    Uint8Array dst = new Uint8Array(arr);
    assertEqual(1, dst.length());
    assertEqual(0, dst.get(0));
    }

    @Test
    void testUint8ArrayConstructor01_095() {
    List<Integer> arr = java.util.Arrays.asList(0, 127, 255);
    Uint8Array dst = new Uint8Array(arr);
    assertEqual(3, dst.length());
    assertEqual(0, dst.get(0));
    assertEqual(127, dst.get(1));
    assertEqual(255, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_096() {
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Uint8Array dst = new Uint8Array(arr);
    assertEqual(5, dst.length());
    assertEqual(1, dst.get(0));
    assertEqual(2, dst.get(1));
    assertEqual(3, dst.get(2));
    assertEqual(4, dst.get(3));
    assertEqual(5, dst.get(4));
    }

    @Test
    void testUint8ArrayConstructor01_097() {
    List<Integer> arr = java.util.Arrays.asList(10, 20, 30);
    Uint8Array dst = new Uint8Array(arr);
    assertEqual(3, dst.byteLength());
    assertEqual(10, dst.get(0));
    assertEqual(20, dst.get(1));
    assertEqual(30, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_098() {
    List<Integer> arr = java.util.Arrays.asList(1, 2, 3);
    Uint8Array dst = new Uint8Array(arr);
    assertEqual(0, dst.byteOffset());
    assertEqual(1, dst.get(0));
    assertEqual(2, dst.get(1));
    assertEqual(3, dst.get(2));
    }

    @Test
    void testUint8ArrayConstructor01_099() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array dst = new Uint8Array(ab);
    assertEqual(4, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_100() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array dst = new Uint8Array(ab, 2);
    assertEqual(6, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_101() {
    ArrayBuffer ab = new ArrayBuffer(8);
    Uint8Array dst = new Uint8Array(ab, 2, 3);
    assertEqual(3, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_102() {
    ArrayBuffer ab = new ArrayBuffer(10);
    Uint8Array dst = new Uint8Array(ab, 0, 10);
    assertEqual(10, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_103() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array dst = new Uint8Array(ab, 0, 0);
    assertEqual(0, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_104() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array dst = new Uint8Array(ab, 0, 3);
    assertEqual(3, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_105() {
    ArrayBuffer ab = new ArrayBuffer(4);
    Uint8Array dst = new Uint8Array(ab, 0, 1);
    assertEqual(1, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_106() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array dst = new Uint8Array(ab, 2, 4);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_107() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array dst = new Uint8Array(ab, -1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_108() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array dst = new Uint8Array(ab, 5, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_109() {
    ArrayBuffer ab = new ArrayBuffer(10);
    Uint8Array dst = new Uint8Array(ab);
    assertEqual(10, dst.byteLength());
    }

    @Test
    void testUint8ArrayConstructor01_110() {
    ArrayBuffer ab = new ArrayBuffer(16);
    Uint8Array dst = new Uint8Array(ab, 4, 8);
    assertEqual(8, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_111() {
    ArrayBuffer ab = new ArrayBuffer(8);
    try {
    Uint8Array dst = new Uint8Array(ab, 0, -1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_112() {
    ArrayBuffer ab = new ArrayBuffer(4);
    try {
    Uint8Array dst = new Uint8Array(ab, 0, 5);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_113() {
    ArrayBuffer ab = new ArrayBuffer(0);
    try {
    Uint8Array dst = new Uint8Array(ab, 0, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_114() {
    ArrayBuffer ab = new ArrayBuffer(1024);
    try {
    Uint8Array dst = new Uint8Array(ab, 0, 1025);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_115() {
    ArrayBuffer ab = new ArrayBuffer(1024);
    try {
    Uint8Array dst = new Uint8Array(ab, 1024, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor01_116() {
    ArrayBuffer ab = new ArrayBuffer(1024);
    Uint8Array dst = new Uint8Array(ab, 0, 1023);
    assertEqual(1023, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_117() {
    ArrayBuffer ab = new ArrayBuffer(1024);
    Uint8Array dst = new Uint8Array(ab, 1023, 1);
    assertEqual(1, dst.length());
    }

    @Test
    void testUint8ArrayConstructor01_118() {
    ArrayBuffer ab = new ArrayBuffer(1024);
    try {
    Uint8Array dst = new Uint8Array(ab, 1023, 2);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
