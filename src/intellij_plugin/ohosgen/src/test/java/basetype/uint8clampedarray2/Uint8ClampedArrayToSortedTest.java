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
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayToSortedTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayToSortedTest extends BasTest {

    @Test
    void testUint8ClampedArrayToSorted001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(1, sorted.length());
    assertEqual(42, sorted.get(0));}

    @Test
    void testUint8ClampedArrayToSorted004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(0, sorted.length());}

    @Test
    void testUint8ClampedArrayToSorted005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(4, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(0, sorted.get(1));
    assertEqual(0, sorted.get(2));
    assertEqual(0, sorted.get(3));}

    @Test
    void testUint8ClampedArrayToSorted006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(255, sorted.get(0));
    assertEqual(255, sorted.get(1));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 0, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(3, sorted.get(1));
    assertEqual(5, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 255, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(255, sorted.get(2));
    assertEqual(3, sorted.get(0));
    assertEqual(5, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 128});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(128, sorted.get(1));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 1, 200});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(127, sorted.get(1));
    assertEqual(1, sorted.get(0));
    assertEqual(200, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 1, 200});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(128, sorted.get(1));
    assertEqual(1, sorted.get(0));
    assertEqual(200, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 255, 128});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(128, sorted.get(1));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {254, 1, 100});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(254, sorted.get(2));
    assertEqual(1, sorted.get(0));
    assertEqual(100, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(2, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 8, 1, 9, 2, 7, 4, 6, 0});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(10, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(1, sorted.get(1));
    assertEqual(2, sorted.get(2));
    assertEqual(3, sorted.get(3));
    assertEqual(4, sorted.get(4));
    assertEqual(5, sorted.get(5));
    assertEqual(6, sorted.get(6));
    assertEqual(7, sorted.get(7));
    assertEqual(8, sorted.get(8));
    assertEqual(9, sorted.get(9));}

    @Test
    void testUint8ClampedArrayToSorted016() {
    Uint8ClampedArray src = BasTest.spreadMap(256, (v, i) -> (int) (255.0 - i));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(256, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(128, sorted.get(128));
    assertEqual(255, sorted.get(255));}

    @Test
    void testUint8ClampedArrayToSorted017() {
    Uint8ClampedArray src = BasTest.spreadMap(1024, (v, i) -> (int) ((1023.0 - i) % 256.0));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(1024, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(128, sorted.get(512));
    assertEqual(255, sorted.get(1023));}

    @Test
    void testUint8ClampedArrayToSorted018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, -1, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(3, sorted.get(1));
    assertEqual(5, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 256, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(3, sorted.get(0));
    assertEqual(5, sorted.get(1));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, Double.NaN, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(3, sorted.get(1));
    assertEqual(5, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, Double.POSITIVE_INFINITY, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(3, sorted.get(0));
    assertEqual(5, sorted.get(1));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {5, -Double.POSITIVE_INFINITY, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(3, sorted.get(1));
    assertEqual(5, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(1, sorted.get(1));
    assertEqual(2, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 5, 10});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(5, sorted.get(0));
    assertEqual(10, sorted.get(1));
    assertEqual(128, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-0, 5, 1});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(1, sorted.get(1));
    assertEqual(5, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0x01, 0x80});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(1, sorted.get(0));}

    @Test
    void testUint8ClampedArrayToSorted027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {077, 010, 01});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(1, sorted.get(0));}

    @Test
    void testUint8ClampedArrayToSorted028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111, 0b00000001, 0b10000000});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(128, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 1, 50});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(100, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertNotEqual(arr.buffer(), sorted.buffer());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 50, 200, 25, 150});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, sorted.length());
    assertEqual(25, sorted.get(0));
    assertEqual(50, sorted.get(1));
    assertEqual(100, sorted.get(2));
    assertEqual(150, sorted.get(3));
    assertEqual(200, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 4, 1, 5});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(1, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));
    assertEqual(5, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    sorted.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(2));
    assertEqual(99, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    arr.set(0, 99);
    assertEqual(3, sorted.length());
    assertEqual(3, sorted.get(2));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted035() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 5); arr.set(1, 2); arr.set(2, 9); arr.set(3, 1);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(4, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(5, sorted.get(2));
    assertEqual(9, sorted.get(3));}

    @Test
    void testUint8ClampedArrayToSorted036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 5); arr.set(1, 2); arr.set(2, 9); arr.set(3, 1);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, arr.get(0));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(5, sorted.get(2));
    assertEqual(9, sorted.get(3));}

    @Test
    void testUint8ClampedArrayToSorted037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 3);
    arr.set(0, 30); arr.set(1, 10); arr.set(2, 20);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(10, sorted.get(0));
    assertEqual(20, sorted.get(1));
    assertEqual(30, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted038() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {9, 5, 3, 8, 1});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    Uint8ClampedArray sorted = sub.toSorted();
    assertEqual(5, parent.length());
    assertEqual(3, sub.length());
    assertEqual(9, parent.get(0));
    assertEqual(5, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(8, parent.get(3));
    assertEqual(1, parent.get(4));
    assertEqual(5, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(8, sub.get(2));
    assertEqual(3, sorted.get(0));
    assertEqual(5, sorted.get(1));
    assertEqual(8, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(4, sorted.length());
    assertEqual(0, sorted.get(3));
    assertEqual(0, sorted.get(0));
    assertEqual(0, sorted.get(1));
    assertEqual(0, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7, 7});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, sorted.length());
    assertEqual(7, sorted.get(2));
    assertEqual(7, sorted.get(0));
    assertEqual(7, sorted.get(1));
    assertEqual(7, sorted.get(3));
    assertEqual(7, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 128});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(128, sorted.get(1));
    assertEqual(0, sorted.get(0));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(2, sorted.length());
    assertEqual(2, sorted.get(1));
    assertEqual(1, sorted.get(0));}

    @Test
    void testUint8ClampedArrayToSorted043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(2, sorted.length());
    assertEqual(5, sorted.get(0));
    assertEqual(5, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(2, sorted.get(1));
    assertEqual(1, sorted.get(0));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(2, sorted.get(1));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) { arr.set(i, i);}
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(256, sorted.length());
    assertEqual(255, sorted.get(255));
    assertEqual(0, sorted.get(0));
    assertEqual(128, sorted.get(128));}

    @Test
    void testUint8ClampedArrayToSorted047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0x01, 0x80});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(255, sorted.get(2));
    assertEqual(1, sorted.get(0));
    assertEqual(128, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 1, 255});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(255, sorted.get(1));
    assertEqual(1, sorted.get(0));
    assertEqual(255, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 0});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    assertEqual(0, sorted.get(1));
    assertEqual(0, sorted.get(0));
    assertEqual(1, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(100, sorted.length());
    assertEqual(0, sorted.get(0));
    assertEqual(0, sorted.get(50));
    assertEqual(0, sorted.get(99));}

    @Test
    void testUint8ClampedArrayToSorted051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, sorted.byteLength());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(1, sorted.BYTES_PER_ELEMENT);
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertNotEqual(arr, sorted);
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(0, sorted.byteOffset());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2, 4});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(4, sorted.buffer().byteLength());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));}

    @Test
    void testUint8ClampedArrayToSorted056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 4, 7, 2, 8});
    Uint8ClampedArray sorted = arr.toSorted();
    assertTrue(sorted.get(0) <= sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 4, 7, 2, 8});
    Uint8ClampedArray sorted = arr.toSorted();
    assertTrue(sorted.get(1) <= sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 4, 7, 2, 8});
    Uint8ClampedArray sorted = arr.toSorted();
    assertTrue(sorted.get(2) <= sorted.get(3));}

    @Test
    void testUint8ClampedArrayToSorted059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 4, 7, 2, 8});
    Uint8ClampedArray sorted = arr.toSorted();
    assertTrue(sorted.get(3) <= sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(1, sorted.get(0));}

    @Test
    void testUint8ClampedArrayToSorted061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(2));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 4, 3, 2, 1});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, arr.length());
    assertEqual(5, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(2, arr.get(3));
    assertEqual(1, arr.get(4));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));
    assertEqual(5, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 4, 3});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, arr.byteLength());
    assertEqual(3, sorted.get(0));
    assertEqual(4, sorted.get(1));
    assertEqual(5, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    ArrayBuffer bufBefore = arr.buffer();
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(bufBefore, arr.buffer());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 4, 3, 2, 1});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, arr.length());
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(2, arr.get(3));
    assertEqual(1, arr.get(4));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));
    assertEqual(5, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 4, 3, 2, 1});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, arr.length());
    assertEqual(5, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(2, arr.get(3));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));
    assertEqual(5, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    arr.set(0, 99);
    assertEqual(3, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));}

    @Test
    void testUint8ClampedArrayToSorted069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray s2 = arr.toSorted().toSorted();
    assertEqual(3, s2.length());
    assertEqual(1, s2.get(0));
    assertEqual(2, s2.get(1));
    assertEqual(3, s2.get(2));}

    @Test
    void testUint8ClampedArrayToSorted070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray s1 = arr.toSorted();
    Uint8ClampedArray s2 = arr.toSorted().toSorted();
    assertEqual(5, s1.length());
    assertEqual(5, s1.get(4));
    assertEqual(5, s2.get(4));
    assertEqual(1, s1.get(0));
    assertEqual(2, s1.get(1));
    assertEqual(3, s1.get(2));
    assertEqual(4, s1.get(3));}

    @Test
    void testUint8ClampedArrayToSorted071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray s1 = arr.toSorted();
    Uint8ClampedArray s2 = arr.toSorted();
    assertNotEqual(s2, s1);
    assertEqual(1, s1.get(0));
    assertEqual(2, s1.get(1));
    assertEqual(3, s1.get(2));
    assertEqual(1, s2.get(0));
    assertEqual(2, s2.get(1));
    assertEqual(3, s2.get(2));}

    @Test
    void testUint8ClampedArrayToSorted072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    Uint8ClampedArray b = arr.sort();
    assertEqual(5, sorted.length());
    assertEqual(1, sorted.get(0));
    assertEqual(1, b.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));
    assertEqual(5, sorted.get(4));
    assertEqual(5, b.get(4));}

    @Test
    void testUint8ClampedArrayToSorted073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(5, arr.length());
    assertEqual(3, arr.get(1));
    assertEqual(1, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(2, arr.get(4));
    assertEqual(1, sorted.get(0));
    assertEqual(2, sorted.get(1));
    assertEqual(3, sorted.get(2));
    assertEqual(4, sorted.get(3));
    assertEqual(5, sorted.get(4));}

    @Test
    void testUint8ClampedArrayToSorted074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    int sum = 0;
    for (Integer v : sorted.values()) {
    sum += v;};
    assertEqual(6, sum);}

    @Test
    void testUint8ClampedArrayToSorted075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual("1,2,3", sorted.join(","));}

    @Test
    void testUint8ClampedArrayToSorted076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(3, arr.length());
    assertEqual(1, sorted.indexOf(2));
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(2, sorted.get(1));}

    @Test
    void testUint8ClampedArrayToSorted077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray sorted = arr.toSorted();
    assertTrue(sorted.includes(3));}

    @Test
    void testUint8ClampedArrayToSorted078() {
    Uint8ClampedArray src = BasTest.spreadMap(500, (v, i) -> (int) ((i * 13.0) % 256.0));
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    Uint8ClampedArray sorted = arr.toSorted();
    assertEqual(500, sorted.length());
    assertTrue(sorted.get(0) <= sorted.get(250));
    assertTrue(sorted.get(250) <= sorted.get(499));}
}
