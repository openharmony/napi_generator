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

package basetype.int16array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Int8Array;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFillTest04 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFillTest04 extends BasTest {

    @Test
    void testInt16ArrayFillTestFour001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.fill((int) 50);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 50;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 50;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour002() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.fill((int) 200, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 200;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 200;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour003() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55, 66});
    arr.fill((int) 300, 1, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 300;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 300;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 55;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 66;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour004() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill((int) 16384);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 16384;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 16384;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 16384;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour005() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500, 600, 700});
    arr.fill(-(int) 16384);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 16384;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = -(int) 16384;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = -(int) 16384;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour006() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill((int) 32767, 2, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 32767;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 0;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour007() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0, 0});
    arr.fill(-(int) 32768, 1, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 0;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(6);
    int expected5 = (int) 0;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour008() {
    Int16Array arr = new Int16Array(new int[] {32767, 32767, 32767, 32767, 32767, 32767, 32767, 32767});
    arr.fill((int) 0);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(7);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour009() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500, 600});
    arr.fill(-(int) 1);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = -(int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = -(int) 1;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour010() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int fillVal = 500;
    arr.fill(fillVal);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 500;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 500;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 500;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour011() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int negVal = -600;
    arr.fill(negVal);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 600;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 600;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 600;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour012() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill(32768);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour013() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0, 0});
    arr.fill(-32769);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour014() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill(98304);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour015() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(131071);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 1;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour016() {
    Int16Array arr = new Int16Array(new int[] {1, 1, 1, 1});
    arr.fill(-65537);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 1;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour017() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(-32770);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32766;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 32766;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 32766;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour018() {
    Int16Array arr = new Int16Array(new int[] {0});
    int v = 32767 + 2;
    arr.fill(v);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32767;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour019() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill(32768, 1, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 40;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour020() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500, 600});
    arr.fill(Double.NaN, 2, 5);
    Integer actual1 = arr.get(1);
    int expected1 = (int) 200;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 600;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour021() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill(Double.POSITIVE_INFINITY, 1, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 60;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour022() {
    Int16Array arr = new Int16Array(new int[] {-10, -20, -30, -40, -50, -60, -70});
    arr.fill(Double.NEGATIVE_INFINITY);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour023() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill(32767.3, 0, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 0;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour024() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.fill(-32768.6);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour025() {
    Int16Array arr = new Int16Array(new int[] {50, 60, 70, 80, 90, 100});
    arr.fill(0.1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour026() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55, 66, 77});
    arr.fill(-0.1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour027() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(99.9, 0, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour028() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill(-99.9, 2, 4);
    Integer actual1 = arr.get(1);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 99;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 0;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour029() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(32767.999);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour030() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.fill(-(int) 0);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(7);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour031() {
    Int16Array arrA = new Int16Array(new int[] {10, 10, 10, 10});
    Int16Array arrB = new Int16Array(new int[] {10, 10, 10, 10});
    arrA.fill(-(int) 0);
    arrB.fill((int) 0);
    Integer actual1 = arrA.get(0);
    Integer expected1 = arrB.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrA.get(1);
    Integer expected2 = arrB.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrA.get(3);
    Integer expected3 = arrB.get(3);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour032() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(0x4000);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 16384;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 16384;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 16384;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour033() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(0xc000);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 16384;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 16384;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 16384;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour034() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill(0x7fff);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour035() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400});
    arr.fill(0x3fff);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 16383;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 16383;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 16383;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour036() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    arr.fill((int) 250, 0);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 250;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 250;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(7);
    int expected3 = (int) 250;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour037() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55, 66, 77});
    arr.fill((int) 350, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 33;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 350;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(6);
    int expected4 = (int) 350;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour038() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 400, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 400;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour039() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    arr.fill((int) 999, 7);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = (int) 70;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour040() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80});
    arr.fill((int) 999, 9);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 40;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(7);
    int expected3 = (int) 80;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour041() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    int pos = 3;
    arr.fill((int) 700, pos);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 700;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 700;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour042() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 150, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 150;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour043() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55, 66});
    arr.fill((int) 250, -3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 33;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 250;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 250;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour044() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill((int) 333, -6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 333;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 333;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 333;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour045() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 444, -7);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 444;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 444;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 444;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour046() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.fill((int) 555, -50);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 555;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 555;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 555;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour047() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(32768, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 40;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour048() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6, 7});
    arr.fill((int) 800, 0, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 800;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 800;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 3;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(6);
    int expected4 = (int) 7;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour049() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    arr.fill((int) 900, 1, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 900;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 900;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 50;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour050() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill((int) 1000, 0, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1000;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 1000;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 1000;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour051() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill((int) 1100, 1, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 1100;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 1100;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 0;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour052() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    int eIdx = 4;
    arr.fill((int) 1200, 2, eIdx);
    Integer actual1 = arr.get(1);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 1200;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 1200;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 0;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour053() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 1300, 0, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1300;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 1300;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 60;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour054() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8});
    arr.fill((int) 1400, 1, -2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 1400;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 1400;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(6);
    int expected4 = (int) 7;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(7);
    int expected5 = (int) 8;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour055() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill((int) 1500, 0, -3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1500;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 1500;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 4;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 6;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour056() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    arr.fill((int) 1600, 0, -7);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 40;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = (int) 70;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour057() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6, 7});
    arr.fill((int) 1700, 2, 8);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 2;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 1700;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(6);
    int expected4 = (int) 1700;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour058() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill((int) 1800, 0, 200);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1800;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 1800;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 1800;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour059() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6, 7});
    arr.fill((int) 1900, 0, -8);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 5;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(6);
    int expected3 = (int) 7;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour060() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 2000, 3, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 30;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 40;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 60;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour061() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 2100, 4, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 60;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour062() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 2200, -1, -3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 40;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 60;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour063() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55, 66});
    arr.fill((int) 2300, -4, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 22;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 2300;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 2300;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 66;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour064() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill((int) 2400, -5, -2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 2400;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 2400;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 5;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 6;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour065() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 2500, -6, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 2500;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 2500;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 60;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour066() {
    Int16Array arr = new Int16Array(0);
    arr.fill((int) 3000);
    int actual1 = arr.length();
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour067() {
    Int16Array arr = new Int16Array(0);
    arr.fill((int) 3100, 0, 0);
    int actual1 = arr.length();
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour068() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(32768);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour069() {
    Int16Array arr = new Int16Array(new int[] {100});
    arr.fill((int) 3200, 0, 1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 3200;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour070() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9});
    arr.fill((int) 3300, 4, 8);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 3300;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(7);
    int expected4 = (int) 3300;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(8);
    int expected5 = (int) 8;
    assertEqual(expected5, actual5);
    Integer actual6 = arr.get(9);
    int expected6 = (int) 9;
    assertEqual(expected6, actual6);}

    @Test
    void testInt16ArrayFillTestFour071() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12});
    arr.fill((int) 3400);
    int matched = 0;
    int i = 0;
    while (i < arr.length()) {
    if (arr.get(i) == 3400) {
    matched = matched + 1;}
    i = i + 1;}
    assertEqual(12, matched);}

    @Test
    void testInt16ArrayFillTestFour072() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array ret = arr.fill((int) 100);
    boolean actual1 = ret == arr;
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestFour073() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    Int16Array ref = arr.fill((int) 200, 1, 3);
    ref.set(2, 999);
    Integer actual1 = arr.get(2);
    int expected1 = (int) 999;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour074() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill(111).fill(222);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 222;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 222;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 222;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour075() {
    Int16Array arr = new Int16Array(new int[] {50, 20, 40, 10, 30});
    arr.fill((int) 25, 0, 2).sort();
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 25;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 25;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 30;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 40;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour076() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill((int) 99, 0, 3).reverse();
    Integer actual1 = arr.get(0);
    int expected1 = (int) 5;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 4;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 99;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 99;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 99;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour077() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0, 0, 0});
    arr
    .fill((int) 1, 0, 2)
    .fill(2, 2, 5)
    .fill(3, 5, 8);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 2;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 2;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 3;
    assertEqual(expected5, actual5);
    Integer actual6 = arr.get(7);
    int expected6 = (int) 3;
    assertEqual(expected6, actual6);}

    @Test
    void testInt16ArrayFillTestFour078() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    int origLen = arr.length();
    arr.fill((int) 99, 2, 5);
    int actual1 = arr.length();
    int expected1 = origLen;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour079() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int origByteLen = arr.byteLength();
    arr.fill((int) 77);
    int actual1 = arr.byteLength();
    int expected1 = origByteLen;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestFour080() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill(32768);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour081() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(65535);
    Int8Array bytes = new Int8Array(buf);
    Integer actual1 = bytes.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = bytes.get(1);
    int expected2 = -(int) 1;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestFour082() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(0x7fff);
    Int8Array bytes = new Int8Array(buf);
    Integer actual1 = bytes.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = bytes.get(1);
    int expected2 = (int) 127;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestFour083() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf);
    arr.fill(32768);
    Int16Array view = new Int16Array(buf);
    Integer actual1 = view.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = view.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestFour084() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500, 600});
    arr.fill(32768, 2, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 100;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 200;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = -(int) 32768;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 600;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour085() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill(Double.NaN, 1, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 50;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour086() {
    Int16Array arr = new Int16Array(new int[] {5, 5, 5, 5, 5});
    arr.fill(Double.POSITIVE_INFINITY, 0, 3);
    Int16Array sub = arr.subarray(0, 3);
    Integer actual1 = sub.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = sub.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = sub.get(2);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour087() {
    Int16Array arrA = new Int16Array(new int[] {10, 20, 30, 40});
    Int16Array arrB = new Int16Array(new int[] {10, 20, 30, 40});
    arrA.fill(3.7);
    arrB.fill((int) 3);
    Integer actual1 = arrA.get(0);
    Integer expected1 = arrB.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrA.get(1);
    Integer expected2 = arrB.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrA.get(3);
    Integer expected3 = arrB.get(3);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour088() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(32768.9);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour089() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(-32769.2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour090() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 99, 1, 3);
    arr.copyWithin(3, 1, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 99;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 99;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 99;
    assertEqual(expected5, actual5);
    Integer actual6 = arr.get(5);
    int expected6 = (int) 60;
    assertEqual(expected6, actual6);}

    @Test
    void testInt16ArrayFillTestFour091() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0, 0});
    arr.fill((int) 50);
    Int16Array src = Int16Array.of(1, 2);
    arr.set(src, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 50;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 1;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 2;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 50;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour092() {
    Int16Array src = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array arr = Int16Array.from(src);
    arr.fill(32768, 0, 3);
    Int16Array sliced = arr.slice(0, 3);
    Integer actual1 = sliced.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = sliced.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = sliced.get(2);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour093() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.fill((int) 5);
    String str = arr.join(",");
    assertEqual("5,5,5,5", str);}

    @Test
    void testInt16ArrayFillTestFour094() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.fill((int) 100, 1, 3);
    Int16Array mapped = arr.map((v) -> { return v + 1;});
    Integer actual1 = arr.get(1);
    int expected1 = (int) 100;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 100;
    assertEqual(expected2, actual2);
    Integer actual3 = mapped.get(1);
    int expected3 = (int) 101;
    assertEqual(expected3, actual3);
    Integer actual4 = mapped.get(2);
    int expected4 = (int) 101;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestFour095() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.fill((int) 99);
    boolean actual1 = ArrayBuffer.isView(arr);
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestFour096() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.fill((int) 200, 0, 4);
    arr.set(2, 999);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 200;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 200;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 999;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 200;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 5;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour097() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.fill((int) 100, 0, 6);
    Int16Array sub = arr.subarray(2, 5);
    sub.fill((int) 999);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 100;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 100;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 999;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 999;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 100;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestFour098() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill((int) 50);
    Int16Array replaced = arr.with(2, 99);
    Integer actual1 = arr.get(2);
    int expected1 = (int) 50;
    assertEqual(expected1, actual1);
    Integer actual2 = replaced.get(2);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = replaced.get(0);
    int expected3 = (int) 50;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour099() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array arr = new Int16Array(buf, 2, 4);
    arr.fill((int) 777);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 777;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 777;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 777;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour100() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 0, 4);
    arr.fill((int) 888);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 888;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 888;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 888;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour101() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44});
    int bigStart = 2147483647;
    arr.fill((int) 999, bigStart);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 22;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 44;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour102() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44});
    int bigEnd = 2147483647;
    arr.fill((int) 777, 0, bigEnd);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 777;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 777;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 777;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFour103() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int bigNeg = -2147483647;
    arr.fill((int) 555, bigNeg);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 555;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 555;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 555;
    assertEqual(expected3, actual3);}
}
