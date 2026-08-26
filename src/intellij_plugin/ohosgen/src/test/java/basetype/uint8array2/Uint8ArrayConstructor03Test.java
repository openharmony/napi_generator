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
import basetype.common.Uint8Array;
import basetype.common.OutOfMemoryError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayConstructor03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayConstructor03Test extends BasTest {

    @Test
    void testUint8ArrayConstructor03_001() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(5, arr.length());}

    @Test
    void testUint8ArrayConstructor03_002() {
    Uint8Array arr = new Uint8Array(0.0);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_003() {
    Uint8Array arr = new Uint8Array(2.0);
    assertEqual(2, arr.length());}

    @Test
    void testUint8ArrayConstructor03_004() {
    Uint8Array arr = new Uint8Array(3.5);
    assertEqual(3, arr.length());}

    @Test
    void testUint8ArrayConstructor03_005() {
    Uint8Array arr = new Uint8Array(1.999);
    assertEqual(1, arr.length());}

    @Test
    void testUint8ArrayConstructor03_006() {
    Uint8Array arr = new Uint8Array(1e5);
    assertEqual(100000, arr.length());}

    @Test
    void testUint8ArrayConstructor03_007() {
    Uint8Array arr = new Uint8Array(1e6);
    assertEqual(1000000, arr.length());}

    @Test
    void testUint8ArrayConstructor03_008() {
    Uint8Array arr = new Uint8Array(0xFF);
    assertEqual(255, arr.length());}

    @Test
    void testUint8ArrayConstructor03_009() {
    Uint8Array arr = new Uint8Array(0xFFFF);
    assertEqual(65535, arr.length());}

    @Test
    void testUint8ArrayConstructor03_010() {
    Uint8Array arr = new Uint8Array(0377);
    assertEqual(255, arr.length());}

    @Test
    void testUint8ArrayConstructor03_011() {
    Uint8Array arr = new Uint8Array(0b11111111);
    assertEqual(255, arr.length());}

    @Test
    void testUint8ArrayConstructor03_012() {
    try {
    Uint8Array arr = new Uint8Array(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_013() {
    try {
    Uint8Array arr = new Uint8Array(-100);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_014() {
    Uint8Array arr = new Uint8Array(-0);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_015() {
    try {
    Uint8Array arr = new Uint8Array(Double.NEGATIVE_INFINITY);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_016() {
    Uint8Array arr = new Uint8Array(Double.NaN);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_017() {
    Uint8Array arr = new Uint8Array(Double.MIN_VALUE);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_018() {
    try {
    Uint8Array arr = new Uint8Array(9007199254740991L);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_019() {
    try {
    Uint8Array arr = new Uint8Array(0x7FFFFFFF);
    fail();} catch (OutOfMemoryError e) {
    assertEqual("OutOfMemoryError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_020() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(0, arr.byteOffset());}

    @Test
    void testUint8ArrayConstructor03_021() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(5, arr.buffer().byteLength());}

    @Test
    void testUint8ArrayConstructor03_022() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}

    @Test
    void testUint8ArrayConstructor03_023() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}

    @Test
    void testUint8ArrayConstructor03_024() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_025() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(0, arr.get(4));}

    @Test
    void testUint8ArrayConstructor03_026() {
    Uint8Array arr = new Uint8Array(1.0);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_027() {
    Uint8Array arr = new Uint8Array(100.0);
    assertEqual(100, arr.length());}

    @Test
    void testUint8ArrayConstructor03_028() {
    try {
    Uint8Array arr = new Uint8Array(Double.POSITIVE_INFINITY);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_029() {
    try {
    Uint8Array arr = new Uint8Array(Double.MAX_VALUE);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_030() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(3, arr.length());}

    @Test
    void testUint8ArrayConstructor03_031() {
    List<Integer> src = new ArrayList<>();
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_032() {
    List<Integer> src = java.util.Arrays.asList(0);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_033() {
    List<Integer> src = java.util.Arrays.asList(255);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_034() {
    List<Integer> src = java.util.Arrays.asList(256);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_035() {
    List<Integer> src = java.util.Arrays.asList(-1);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_036() {
    List<Integer> src = java.util.Arrays.asList(-128);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(128, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_037() {
    List<Integer> src = java.util.Arrays.asList(1000);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(232, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_038() {
    List<Integer> src = java.util.Arrays.asList(-1000);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(24, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_039() {
    List<Integer> src = java.util.Arrays.asList(0x7F);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(127, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_040() {
    List<Integer> src = java.util.Arrays.asList(0xFF);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_041() {
    List<Integer> src = java.util.Arrays.asList(0377);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_042() {
    List<Integer> src = java.util.Arrays.asList(0b11111111);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_043() {
    List<Integer> src = java.util.Arrays.asList(-0);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_044() {
    List<Integer> src = java.util.Arrays.asList(0, 128, 255);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));
    assertEqual(128, arr.get(1));
    assertEqual(255, arr.get(2));}

    @Test
    void testUint8ArrayConstructor03_045() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(5, arr.get(4));}

    @Test
    void testUint8ArrayConstructor03_046() {
    List<Integer> src = java.util.Arrays.asList(127, 128);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(127, arr.get(0));
    assertEqual(128, arr.get(1));}

    @Test
    void testUint8ArrayConstructor03_047() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ArrayConstructor03_048() {
    List<Integer> src = java.util.Arrays.asList(255, 255, 255);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(1));}

    @Test
    void testUint8ArrayConstructor03_049() {
    List<Integer> src = java.util.Arrays.asList(1, -1, 1, -1);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(3));}

    @Test
    void testUint8ArrayConstructor03_050() {
    List<Integer> src = java.util.Arrays.asList(255, 256, 257);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(1, arr.get(2));}

    @Test
    void testUint8ArrayConstructor03_051() {
    List<Integer> src = java.util.Arrays.asList(0, 256);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(1));}

    @Test
    void testUint8ArrayConstructor03_052() {
    List<Integer> src = java.util.Arrays.asList(256, -1, 300, -50);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(44, arr.get(2));
    assertEqual(206, arr.get(3));}

    @Test
    void testUint8ArrayConstructor03_053() {
    List<Integer> src = new ArrayList<>();
    int i = 0;
    while (i < 100) {
    src.add(i);
    i++;};
    Uint8Array arr = new Uint8Array(src);
    assertEqual(100, arr.length());}

    @Test
    void testUint8ArrayConstructor03_054() {
    List<Integer> src = new ArrayList<>();
    int i = 0;
    while (i < 100) {
    src.add(i & 0xFF);
    i++;};
    Uint8Array arr = new Uint8Array(src);
    assertEqual(100, arr.byteLength());}

    @Test
    void testUint8ArrayConstructor03_055() {
    List<Integer> src = java.util.Arrays.asList(42);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(1, arr.buffer().byteLength());}

    @Test
    void testUint8ArrayConstructor03_056() {
    List<Integer> src = java.util.Arrays.asList(1, 2);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.byteOffset());}

    @Test
    void testUint8ArrayConstructor03_057() {
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}

    @Test
    void testUint8ArrayConstructor03_058() {
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Uint8Array arr = new Uint8Array(src);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}

    @Test
    void testUint8ArrayConstructor03_059() {
    List<Integer> src = java.util.Arrays.asList(0, 1, 2);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));}

    @Test
    void testUint8ArrayConstructor03_060() {
    List<Integer> src = java.util.Arrays.asList(127);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(127, arr.get(0));
    assertEqual(1, arr.length());}

    @Test
    void testUint8ArrayConstructor03_061() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(3, arr.length());}

    @Test
    void testUint8ArrayConstructor03_062() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(4, arr.length());}

    @Test
    void testUint8ArrayConstructor03_063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 2);
    assertEqual(2, arr.length());}

    @Test
    void testUint8ArrayConstructor03_064() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 2, 2);
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.length());}

    @Test
    void testUint8ArrayConstructor03_065() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 1, 3);
    assertEqual(3, arr.length());}

    @Test
    void testUint8ArrayConstructor03_066() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8Array arr = new Uint8Array(buf, 0, 1);
    assertEqual(1, arr.length());}

    @Test
    void testUint8ArrayConstructor03_067() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 0, 10);
    assertEqual(10, arr.length());}

    @Test
    void testUint8ArrayConstructor03_068() {
    ArrayBuffer buf = new ArrayBuffer(100);
    Uint8Array arr = new Uint8Array(buf, 50, 50);
    assertEqual(50, arr.length());}

    @Test
    void testUint8ArrayConstructor03_069() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 7, 1);
    assertEqual(1, arr.length());}

    @Test
    void testUint8ArrayConstructor03_070() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8Array arr = new Uint8Array(buf, 0, 256);
    assertEqual(256, arr.length());}

    @Test
    void testUint8ArrayConstructor03_071() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8Array arr = new Uint8Array(buf, 0, 1024);
    assertEqual(1024, arr.length());}

    @Test
    void testUint8ArrayConstructor03_072() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 0);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_073() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 4, 0);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ArrayConstructor03_074() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(0, arr.byteOffset());}

    @Test
    void testUint8ArrayConstructor03_075() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 2, 2);
    assertEqual(2, arr.byteOffset());}

    @Test
    void testUint8ArrayConstructor03_076() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(1, arr.BYTES_PER_ELEMENT);}

    @Test
    void testUint8ArrayConstructor03_077() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());}

    @Test
    void testUint8ArrayConstructor03_078() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(buf, arr.buffer());}

    @Test
    void testUint8ArrayConstructor03_079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(4, arr.buffer().byteLength());}

    @Test
    void testUint8ArrayConstructor03_080() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ArrayConstructor03_081() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    arr.set(0, 0xAB);
    assertEqual(0xAB, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_082() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    arr.set(0, 0xFF);
    assertEqual(0xFF, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_083() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    arr.set(0, 0x00);
    assertEqual(0x00, arr.get(0));}

    @Test
    void testUint8ArrayConstructor03_084() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Uint8Array arr = new Uint8Array(buf, 5, 1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_085() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Uint8Array arr = new Uint8Array(buf, 2, 3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_086() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Uint8Array arr = new Uint8Array(buf, -1, 2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_087() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Uint8Array arr = new Uint8Array(buf, 0, -1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_088() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    Uint8Array arr = new Uint8Array(buf, 0, 0x7FFFFFFF);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ArrayConstructor03_089() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    arr.set(0, 0xAB);
    Uint8Array checkArr = new Uint8Array(buf, 0, 4);
    assertEqual(0xAB, checkArr.get(0));}

    @Test
    void testUint8ArrayConstructor03_090() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array baseArr = new Uint8Array(buf, 0, 4);
    baseArr.set(1, 0xCD);
    Uint8Array view = new Uint8Array(buf, 0, 4);
    assertEqual(0xCD, view.get(1));}

    @Test
    void testUint8ArrayConstructor03_091() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array front = new Uint8Array(buf, 0, 2);
    Uint8Array back = new Uint8Array(buf, 2, 2);
    front.set(0, 10);
    front.set(1, 20);
    back.set(0, 30);
    back.set(1, 40);
    assertEqual(10, front.get(0));
    assertEqual(20, front.get(1));
    assertEqual(30, back.get(0));
    assertEqual(40, back.get(1));}

    @Test
    void testUint8ArrayConstructor03_092() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array whole = new Uint8Array(buf, 0, 4);
    Uint8Array partial = new Uint8Array(buf, 1, 2);
    whole.set(1, 0x77);
    assertEqual(0x77, partial.get(0));
    partial.set(1, 0x88);
    assertEqual(0x88, whole.get(2));}

    @Test
    void testUint8ArrayConstructor03_093() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array firstHalf = new Uint8Array(buf, 0, 4);
    Uint8Array secondHalf = new Uint8Array(buf, 4, 4);
    firstHalf.set(3, 0x11);
    secondHalf.set(0, 0x22);
    Uint8Array check = new Uint8Array(buf, 0, 8);
    assertEqual(0x11, check.get(3));
    assertEqual(0x22, check.get(4));}
}
