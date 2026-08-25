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
 * Uint8Array$SetTest —— Int16Array 方法族测试。
 */
public class Uint8Array$SetTest extends BasTest {

    @Test
    void testUint8ArraySet001() {
    Uint8Array arr = new Uint8Array(3);
    int val = 42;
    arr.set(1, val);
    assertEqual(42, arr.get(1));
    }

    @Test
    void testUint8ArraySet002() {
    Uint8Array arr = new Uint8Array(10);
    int v = 42;
    arr.set(0, v);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ArraySet003() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int v = 99;
    try {
    arr.set(5, v);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(50, arr.get(4));
    }

    @Test
    void testUint8ArraySet004() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int v = 99;
    try {
    arr.set(-1, v);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(50, arr.get(4));
    }

    @Test
    void testUint8ArraySet005() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    int v = 0;
    arr.set(1, v);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet006() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int v = 255;
    arr.set(1, v);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet007() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 42);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ArraySet008() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ArraySet009() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 42);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ArraySet010() {
    Uint8Array arr = new Uint8Array(new ArrayBuffer(10), 0, 5);
    arr.set(0, 42);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ArraySet011() {
    Uint8Array arr = new Uint8Array(4);
    for (int i = 0; i < 4; i++) {
    arr.set(i, 50);
    }
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ArraySet012() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 42);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ArraySet013() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(4, 99);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ArraySet014() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 256);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ArraySet015() {
    Uint8Array arr = new Uint8Array(8);
    for (int i = 0; i < 8; i++) {
    arr.set(i, 10);
    }
    assertEqual(8, arr.byteLength());
    }

    @Test
    void testUint8ArraySet016() {
    Uint8Array arr = new Uint8Array(5);
    try {
    arr.set(10, 42);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(5, arr.byteLength());
    }
    }

    @Test
    void testUint8ArraySet017() {
    Uint8Array arr = new Uint8Array(new ArrayBuffer(10), 2, 5);
    arr.set(0, 77);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint8ArraySet018() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(3, 200);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArraySet019() {
    Uint8Array arr = new Uint8Array(10);
    for (int i = 0; i < 10; i++) {
    arr.set(i, 42);
    }
    assertEqual(arr.length(), arr.byteLength());
    }

    @Test
    void testUint8ArraySet020() {
    Uint8Array arr = new Uint8Array(new ArrayBuffer(20), 5, 8);
    arr.set(0, 10);
    arr.set(7, 20);
    assertEqual(8, arr.byteLength());
    assertEqual(8, arr.length());
    }

    @Test
    void testUint8ArraySet021() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array sameView = new Uint8Array(buf, 0, 10);
    baseView.set(3, 77);
    assertEqual(77, sameView.get(3));
    }

    @Test
    void testUint8ArraySet022() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array offsetView = new Uint8Array(buf, 5, 5);
    baseView.set(5, 99);
    assertEqual(99, offsetView.get(0));
    }

    @Test
    void testUint8ArraySet023() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array frontView = new Uint8Array(buf, 0, 5);
    Uint8Array tailView = new Uint8Array(buf, 8, 2);
    frontView.set(4, 88);
    assertEqual(0, tailView.get(0));
    }

    @Test
    void testUint8ArraySet024() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array offsetView = new Uint8Array(buf, 8, 2);
    baseView.set(8, 66);
    assertEqual(66, offsetView.get(0));
    }

    @Test
    void testUint8ArraySet025() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array offsetView = new Uint8Array(buf, 3, 7);
    offsetView.set(0, 55);
    assertEqual(55, baseView.get(3));
    }

    @Test
    void testUint8ArraySet026() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array sameView = new Uint8Array(buf, 0, 10);
    baseView.set(2, 256);
    assertEqual(0, sameView.get(2));
    }

    @Test
    void testUint8ArraySet027() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array sameView = new Uint8Array(buf, 0, 10);
    baseView.set(4, -1);
    assertEqual(255, sameView.get(4));
    }

    @Test
    void testUint8ArraySet028() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array viewA = new Uint8Array(buf, 0, 10);
    Uint8Array viewB = new Uint8Array(buf, 0, 10);
    Uint8Array viewC = new Uint8Array(buf, 0, 10);
    viewA.set(6, 128);
    assertEqual(128, viewB.get(6));
    assertEqual(128, viewC.get(6));
    }

    @Test
    void testUint8ArraySet029() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array offsetView = new Uint8Array(buf, 4, 6);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    offsetView.set(0, 33);
    assertEqual(33, baseView.get(4));
    }

    @Test
    void testUint8ArraySet030() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array baseView = new Uint8Array(buf, 0, 10);
    Uint8Array offsetView = new Uint8Array(buf, 2, 8);
    baseView.set(3, 44);
    assertEqual(44, offsetView.get(1));
    }

    @Test
    void testUint8ArraySet031() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    arr.set(4, 5);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ArraySet032() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 0);
    arr.set(1, 64);
    arr.set(2, 128);
    arr.set(3, 192);
    arr.set(4, 255);
    assertEqual(0, arr.get(0));
    assertEqual(64, arr.get(1));
    assertEqual(128, arr.get(2));
    assertEqual(192, arr.get(3));
    assertEqual(255, arr.get(4));
    }

    @Test
    void testUint8ArraySet033() {
    Uint8Array arr = new Uint8Array(7);
    for (int i = 0; i < 7; i++) {
    arr.set(i, 127);
    }
    assertEqual(127, arr.get(3));
    }

    @Test
    void testUint8ArraySet034() {
    Uint8Array arr = new Uint8Array(6);
    arr.set(0, 0x55);
    arr.set(1, 0xAA);
    arr.set(2, 0x55);
    arr.set(3, 0xAA);
    arr.set(4, 0x55);
    arr.set(5, 0xAA);
    assertEqual(0x55, arr.get(0));
    assertEqual(0xAA, arr.get(1));
    assertEqual(0xAA, arr.get(5));
    }

    @Test
    void testUint8ArraySet035() {
    Uint8Array arr = new Uint8Array(8);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 4);
    arr.set(3, 8);
    arr.set(4, 16);
    arr.set(5, 32);
    arr.set(6, 64);
    arr.set(7, 128);
    assertEqual(128, arr.get(7));
    }

    @Test
    void testUint8ArraySet036() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(0, 255);
    arr.set(1, 254);
    arr.set(2, 253);
    arr.set(3, 252);
    arr.set(4, 251);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArraySet037() {
    Uint8Array arr = new Uint8Array(5);
    arr.set(2, 10);
    arr.set(2, 20);
    arr.set(2, 30);
    assertEqual(30, arr.get(2));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet038() {
    Uint8Array arr = new Uint8Array(4);
    arr.set(0, 0xFF);
    arr.set(1, 0xFF);
    arr.set(2, 0xFF);
    arr.set(3, 0xFF);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ArraySet039() {
    Uint8Array arr = new Uint8Array(4);
    arr.set(0, 0);
    arr.set(1, 255);
    arr.set(2, 0);
    arr.set(3, 255);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ArraySet040() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 0x0A);
    assertEqual(10, arr.get(1));
    }

    @Test
    void testUint8ArraySet041() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 0xFF);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet042() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    arr.set(1, 0x00);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet043() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 256);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet044() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 257);
    assertEqual(1, arr.get(1));
    }

    @Test
    void testUint8ArraySet045() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 1000);
    assertEqual(232, arr.get(1));
    }

    @Test
    void testUint8ArraySet046() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -1);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet047() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -2);
    assertEqual(254, arr.get(1));
    }

    @Test
    void testUint8ArraySet048() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -128);
    assertEqual(128, arr.get(1));
    }

    @Test
    void testUint8ArraySet049() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -255);
    assertEqual(1, arr.get(1));
    }

    @Test
    void testUint8ArraySet050() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -256);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet051() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -257);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet052() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -1000);
    assertEqual(24, arr.get(1));
    }

    @Test
    void testUint8ArraySet053() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 0.5);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet054() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 1.5);
    assertEqual(1, arr.get(1));
    }

    @Test
    void testUint8ArraySet055() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 2.5);
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ArraySet056() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 127.5);
    assertEqual(127, arr.get(1));
    }

    @Test
    void testUint8ArraySet057() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 128.5);
    assertEqual(128, arr.get(1));
    }

    @Test
    void testUint8ArraySet058() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 254.5);
    assertEqual(254, arr.get(1));
    }

    @Test
    void testUint8ArraySet059() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 255.5);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet060() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -0.5);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet061() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -1.5);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet062() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -128.5);
    assertEqual(128, arr.get(1));
    }

    @Test
    void testUint8ArraySet063() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -255.5);
    assertEqual(1, arr.get(1));
    }

    @Test
    void testUint8ArraySet064() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -1.1);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet065() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 0404);
    assertEqual(4, arr.get(1));
    }

    @Test
    void testUint8ArraySet066() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, -0.0);
    assertEqual(0, arr.get(1));
    arr.set(1, -0.9);
    assertEqual(0, arr.get(1));
    arr.set(1, -1.0);
    assertEqual(255, arr.get(1));
    arr.set(1, -256.0);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet067() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 256);
    assertEqual(0, arr.get(1));
    arr.set(1, 511);
    assertEqual(255, arr.get(1));
    arr.set(1, 512);
    assertEqual(0, arr.get(1));
    arr.set(1, 65535);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet068() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(0, 42);
    assertEqual(42, arr.get(0));
    arr.set(2, 99);
    assertEqual(99, arr.get(2));
    try {
    arr.set(3, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet069() {
    Uint8Array arr1 = Uint8Array.of(10, 20, 30, 40, 50);
    arr1.set(2, 200);
    assertEqual(200, arr1.get(2));
    Uint8Array arr2 = Uint8Array.of(255);
    arr2.set(0, 128);
    assertEqual(128, arr2.get(0));
    Uint8Array arr3 = Uint8Array.of(1, 2);
    arr3.set(1, 0);
    assertEqual(0, arr3.get(1));
    }

    @Test
    void testUint8ArraySet070() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int lenBefore = arr.length();
    arr.set(1, 128);
    int lenAfter = arr.length();
    assertEqual(lenBefore, lenAfter);
    }

    @Test
    void testUint8ArraySet071() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    Integer ret = arr.set(1, 0561);
    assertEqual(113, arr.get(1));
    assertEqual(null, ret);
    }

    @Test
    void testUint8ArraySet072() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer ret0 = arr.set(0, 255);
    assertEqual(255, arr.get(0));
    assertEqual(null, ret0);
    Integer retLast = arr.set(2, 128);
    assertEqual(128, arr.get(2));
    assertEqual(null, retLast);
    }

    @Test
    void testUint8ArraySet073() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    Integer ret1 = arr.set(0, 0x100);
    assertEqual(0, arr.get(0));
    assertEqual(null, ret1);
    Integer ret2 = arr.set(1, 0x1FF);
    assertEqual(255, arr.get(1));
    assertEqual(null, ret2);
    Integer ret3 = arr.set(2, 0xFF);
    assertEqual(255, arr.get(2));
    assertEqual(null, ret3);
    }

    @Test
    void testUint8ArraySet074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.set(-1, 100);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    try {
    arr.set(5, 200);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet075() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 0737);
    assertEqual(223, arr.get(1));
    }

    @Test
    void testUint8ArraySet076() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 0777);
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ArraySet077() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 01000);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet078() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 01114);
    assertEqual(76, arr.get(1));
    }

    @Test
    void testUint8ArraySet079() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(0, 42);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ArraySet080() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(2, 99);
    assertEqual(99, arr.get(2));
    }

    @Test
    void testUint8ArraySet081() {
    Uint8Array arr = Uint8Array.of(100);
    arr.set(0, 200);
    assertEqual(200, arr.get(0));
    }

    @Test
    void testUint8ArraySet082() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.set(3, 255);
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ArraySet083() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 3.14);
    assertEqual(3, arr.get(1));
    }

    @Test
    void testUint8ArraySet084() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, Double.NaN);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet085() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ArraySet086() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    try {
    arr.set(1, (Double) null);
    fail();
    } catch (RuntimeException e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet087() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    try {
    arr.set(1, (Double) null);
    fail();
    } catch (RuntimeException e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet088() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    arr.set(1, 01115);
    assertEqual(77, arr.get(1));
    }

    @Test
    void testUint8ArraySet089() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet090() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, Double.NEGATIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet091() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet092() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0x1FF);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArraySet093() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0x200);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet094() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0x10000);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet095() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0400);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet096() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0401);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ArraySet097() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0402);
    assertEqual(2, arr.get(0));
    }

    @Test
    void testUint8ArraySet098() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0403);
    assertEqual(3, arr.get(0));
    }

    @Test
    void testUint8ArraySet099() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0404);
    assertEqual(4, arr.get(0));
    }

    @Test
    void testUint8ArraySet100() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0405);
    assertEqual(5, arr.get(0));
    }

    @Test
    void testUint8ArraySet101() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -1);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArraySet102() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -256);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArraySet103() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 3.14);
    assertEqual(3, arr.get(0));
    }

    @Test
    void testUint8ArraySet104() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 2.718);
    assertEqual(2, arr.get(0));
    }

    @Test
    void testUint8ArraySet105() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, Integer.parseInt("123"));
    assertEqual(123, arr.get(0));
    }
}
