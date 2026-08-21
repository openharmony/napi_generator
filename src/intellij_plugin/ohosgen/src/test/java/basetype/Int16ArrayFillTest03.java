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

package basetype;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFillTest03 —— Int16Array 方法族测试。
 */
public class Int16ArrayFillTest03 extends BasTest {

    @Test
    void testInt16ArrayFillTestThree001() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 99);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 99;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree002() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array arr = new Int16Array(buf, 0, 6);
    arr.fill((int) 77);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 77;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 77;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 77;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree003() {
    Int16Array src = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    Int16Array arr = Int16Array.from(src);
    arr.fill((int) 55, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 55;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 55;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree004() {
    Int16Array arr = Int16Array.of(-(int) 10, -(int) 20, -(int) 30, -(int) 40, -(int) 50, -(int) 60);
    arr.fill((int) 0, 1, 4);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = -(int) 50;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = -(int) 60;
    assertEqual(expected5, actual5);
    }

    @Test
    void testInt16ArrayFillTestThree005() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array arr = new Int16Array(buf, 4, 6);
    arr.fill((int) 33, 2, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 33;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 33;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 33;
    assertEqual(expected5, actual5);
    Integer actual6 = arr.get(5);
    int expected6 = (int) 0;
    assertEqual(expected6, actual6);
    }

    @Test
    void testInt16ArrayFillTestThree006() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    int fillVal = (int) 256;
    arr.fill(fillVal);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 256;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 256;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 256;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree007() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    int a = (int) 10;
    int b = (int) 5;
    arr.fill(a * b);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 50;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 50;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree008() {
    Int16Array source = Int16Array.of((int) 42);
    Integer val = source.get(0);
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    arr.fill(val);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 42;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 42;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 42;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree009() {
    Int16Array arr = Int16Array.of(-(int) 100, -(int) 200, -(int) 300, -(int) 400, -(int) 500);
    arr.fill((int) 32767);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree010() {
    Int16Array arr = Int16Array.of((int) 100, (int) 200, (int) 300, (int) 400);
    arr.fill(-(int) 32768);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree011() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 0, 5);
    arr.fill((int) 0x7fff);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree012() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    arr.fill((int) 0x0001);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 1;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree013() {
    Int16Array arr = Int16Array.of((int) 99, (int) 99, (int) 99, (int) 99);
    arr.fill((int) 01);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 1;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree014() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    arr.fill((int) 0b1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 1;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree015() {
    Int16Array arr = Int16Array.of((int) 1, (int) 1, (int) 1, (int) 1, (int) 1, (int) 1);
    int ov = 32768;
    arr.fill(ov);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree016() {
    Int16Array arr = Int16Array.of(-(int) 1, -(int) 1, -(int) 1, -(int) 1, -(int) 1, -(int) 1);
    int uv = -32769;
    arr.fill(uv);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 32767;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree017() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0);
    arr.fill(0x8000);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = -(int) 32768;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree018() {
    Int16Array arr = Int16Array.of((int) 32767, (int) 32767, (int) 32767, (int) 32767);
    double nv = Double.NaN;
    arr.fill(nv);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree019() {
    Int16Array arr = Int16Array.of(-(int) 32768, -(int) 32768, -(int) 32768);
    double pv = Double.POSITIVE_INFINITY;
    arr.fill(pv);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree020() {
    Int16Array arr = Int16Array.of((int) 100, (int) 200, (int) 300, (int) 400, (int) 500, (int) 600);
    double nv2 = -Double.POSITIVE_INFINITY;
    arr.fill(nv2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree021() {
    Int16Array arr = Int16Array.of(-(int) 1, -(int) 1, -(int) 1, -(int) 1);
    int negZero = -(int) 0;
    arr.fill(negZero);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree022() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    double fp = 3.14;
    arr.fill(fp);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 3;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 3;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree023() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    double nfp = -3.14;
    arr.fill(nfp);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 3;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = -(int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = -(int) 3;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree024() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 100, 0);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 100;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 100;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 100;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree025() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 77, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 77;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 77;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 77;
    assertEqual(expected5, actual5);
    }

    @Test
    void testInt16ArrayFillTestThree026() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 99, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 66;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree027() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 50, 8);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 6;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree028() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 99, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 99;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree029() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 77, -3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 77;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 77;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree030() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 111, -6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 111;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 111;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 111;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree031() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 44, -8);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 44;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 44;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree032() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 99, (int) 2147483647);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 66;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree033() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 99, 0, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 33;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 66;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree034() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 77, 0, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 77;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 77;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 5;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 6;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree035() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 88, 0, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 88;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 88;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 60;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree036() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 55, 0, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 55;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 55;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 55;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree037() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 33, 0, 7);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 33;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 33;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 33;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree038() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 99, 0, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 6;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree039() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 77, 0, -3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 77;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 77;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 40;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 60;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree040() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 88, 0, -6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 4;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 6;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree041() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 55, 0, -7);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 66;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree042() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 66, 0, (int) 2147483647);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 66;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 66;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 66;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree043() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 99, 1, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 99;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 50;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(5);
    int expected5 = (int) 60;
    assertEqual(expected5, actual5);
    }

    @Test
    void testInt16ArrayFillTestThree044() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 77, 2, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 6;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree045() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 99, 4, 1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 66;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree046() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 88, -4, -2);
    Integer actual1 = arr.get(1);
    int expected1 = (int) 2;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 88;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 88;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(4);
    int expected4 = (int) 5;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree047() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 55, -5, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 55;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 55;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 60;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree048() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 33, -6, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 33;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 33;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 33;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree049() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 44, 1, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 44;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 66;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree050() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 22, 3, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 22;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 22;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree051() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 99, 0, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 40;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 60;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree052() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 77, -2, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 4;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 77;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 77;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree053() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50, (int) 60);
    arr.fill((int) 99, -1, 0);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 40;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 60;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree054() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 88, -2, -2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(4);
    int expected2 = (int) 5;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 6;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree055() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 55, 5, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 33;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 66;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree056() {
    Int16Array arrE = Int16Array.of((int) 1, (int) 2, (int) 3);
    Int16Array arrNum = Int16Array.of((int) 1, (int) 2, (int) 3);
    arrE.fill((int) 99);
    arrNum.fill(99);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrNum.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(2);
    Integer expected2 = arrNum.get(2);
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree057() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    int ev = (int) 88;
    arr.fill(ev, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 11;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 22;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 88;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 88;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree058() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    int ev2 = (int) 77;
    arr.fill(ev2, 1, 5);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 77;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 77;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 6;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree059() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0);
    arr.fill((int) 32767);
    Integer val = arr.get(1);
    assertEqual((int) 32767, val);
    }

    @Test
    void testInt16ArrayFillTestThree060() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0);
    int typedVal = (int) 42;
    arr.fill(typedVal);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 42;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 42;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree061() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    Int16Array ret = arr.fill((int) 99);
    boolean sameRef = ret == arr;
    assertTrue(sameRef);
    }

    @Test
    void testInt16ArrayFillTestThree062() {
    Int16Array arr = Int16Array.of((int) 65, (int) 21, (int) 33, (int) 14, (int) 52, (int) 6);
    arr.fill((int) 50, 0, 2).sort();
    Integer actual1 = arr.get(0);
    int expected1 = (int) 6;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 14;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 50;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 52;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree063() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    Int16Array ret = arr.fill((int) 88, 3, 6).reverse();
    boolean actual1 = ret == arr;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFillTestThree064() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    Int16Array returned = arr.fill((int) 33, 0, 3);
    Integer actual1 = returned.get(0);
    int expected1 = (int) 33;
    assertEqual(expected1, actual1);
    Integer actual2 = returned.get(3);
    int expected2 = (int) 4;
    assertEqual(expected2, actual2);
    Integer actual3 = returned.get(5);
    int expected3 = (int) 6;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree065() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    Int16Array r1 = arr.fill((int) 1, 0, 1);
    Int16Array r2 = r1.fill((int) 2, 1, 2);
    Int16Array r3 = r2.fill((int) 3, 2, 3);
    Int16Array r4 = r3.fill((int) 4, 3, 6);
    boolean actual1 = r4 == arr;
    assertTrue(actual1);
    Integer actual2 = arr.get(0);
    int expected2 = (int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(1);
    int expected3 = (int) 2;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(2);
    int expected4 = (int) 3;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 4;
    assertEqual(expected5, actual5);
    }

    @Test
    void testInt16ArrayFillTestThree066() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    Int16Array ret = arr.fill((int) 77);
    ret.set(3, (int) 99);
    Integer actual1 = arr.get(3);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree067() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    int lenBefore = arr.length();
    arr.fill((int) 33);
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree068() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    int byteLenBefore = arr.byteLength();
    arr.fill((int) 55, 2, 5);
    int actual1 = arr.byteLength();
    int expected1 = byteLenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree069() {
    ArrayBuffer buf = new ArrayBuffer(24);
    Int16Array arr = new Int16Array(buf, 4, 6);
    int offsetBefore = arr.byteOffset();
    arr.fill((int) 99);
    int actual1 = arr.byteOffset();
    int expected1 = offsetBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree070() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array arr = new Int16Array(buf, 0, 6);
    ArrayBuffer bufBefore = arr.buffer();
    arr.fill((int) 77);
    ArrayBuffer bufAfter = arr.buffer();
    boolean sameBuf = bufBefore == bufAfter;
    assertTrue(sameBuf);
    }

    @Test
    void testInt16ArrayFillTestThree071() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    Int16Array sub = arr.fill((int) 88, 1, 4).subarray(2, 5);
    Integer actual1 = sub.get(0);
    int expected1 = (int) 88;
    assertEqual(expected1, actual1);
    Integer actual2 = sub.get(2);
    int expected2 = (int) 5;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree072() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr
    .fill((int) 99, 0, 3)
    .reverse()
    .fill((int) 11, 3, 6);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 6;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 4;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(3);
    int expected3 = (int) 11;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(5);
    int expected4 = (int) 11;
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArrayFillTestThree073() {
    Int16Array arr = new Int16Array();
    Int16Array result = arr.fill((int) 99);
    int actual1 = result.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree074() {
    Int16Array arr = new Int16Array();
    arr.fill((int) 55, 0, 0);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree075() {
    Int16Array arr = Int16Array.of((int) 42);
    arr.fill((int) 99, 0, 1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree076() {
    Int16Array arr = Int16Array.of((int) 42);
    arr.fill((int) 99, 0, 0);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 42;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree077() {
    Int16Array arr = Int16Array.of((int) 42);
    arr.fill((int) 99, 1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 42;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree078() {
    Int16Array arr = Int16Array.of((int) 42);
    arr.fill((int) 88, -1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 88;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree079() {
    Int16Array arr = Int16Array.of((int) 32767, (int) 32767, (int) 0, (int) 0, -(int) 32768, -(int) 32768);
    arr.fill((int) 1, 2, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 1;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 1;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = -(int) 32768;
    assertEqual(expected5, actual5);
    Integer actual6 = arr.get(5);
    int expected6 = -(int) 32768;
    assertEqual(expected6, actual6);
    }

    @Test
    void testInt16ArrayFillTestThree080() {
    Int16Array arr = Int16Array.of((int) 32767, (int) 0, -(int) 32768, (int) 100, -(int) 100, (int) 1);
    arr.fill(-(int) 1);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = -(int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = -(int) 1;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree081() {
    Int16Array arr = Int16Array.of((int) 1, (int) 2, (int) 3, (int) 4, (int) 5, (int) 6);
    arr.fill((int) 44, (int) 200);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(5);
    int expected2 = (int) 6;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree082() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55, (int) 66);
    arr.fill((int) 5, -(int) 2147483647);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 5;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 5;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(5);
    int expected3 = (int) 5;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree083() {
    Int16Array arr = Int16Array.of((int) 0);
    int ov = 32768;
    arr.fill(ov);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree084() {
    Int16Array arr = Int16Array.of((int) 0);
    int uv = -32769;
    arr.fill(uv);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree085() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0);
    int wv = 65535;
    arr.fill(wv);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 1;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 1;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = -(int) 1;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree086() {
    Int16Array arr = Int16Array.of((int) 1, (int) 1, (int) 1);
    int wv2 = 65536;
    arr.fill(wv2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 0;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 0;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 0;
    assertEqual(expected3, actual3);
    }

    @Test
    void testInt16ArrayFillTestThree087() {
    Int16Array arr = Int16Array.of((int) 0, (int) 0, (int) 0, (int) 0, (int) 0, (int) 0);
    int ov2 = 32768;
    arr.fill(ov2, 1, 4);
    Int16Array sliced = arr.slice(1, 4);
    Integer actual1 = sliced.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = sliced.get(2);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree088() {
    Int16Array arr1 = Int16Array.of((int) 0, (int) 0, (int) 0);
    Int16Array arr2 = Int16Array.of((int) 0, (int) 0, (int) 0);
    double fpVal = 3.7;
    int exactVal = (int) 3;
    arr1.fill(fpVal);
    arr2.fill(exactVal);
    Integer actual1 = arr1.get(0);
    Integer expected1 = arr2.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arr1.get(2);
    Integer expected2 = arr2.get(2);
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree089() {
    Int16Array arr1 = Int16Array.of((int) 1, (int) 1, (int) 1);
    Int16Array arr2 = Int16Array.of((int) 1, (int) 1, (int) 1);
    double nanVal = Double.NaN;
    int zeroVal = (int) 0;
    arr1.fill(nanVal);
    arr2.fill(zeroVal);
    Integer actual1 = arr1.get(0);
    Integer expected1 = arr2.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arr1.get(2);
    Integer expected2 = arr2.get(2);
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestThree090() {
    Int16Array arr1 = Int16Array.of((int) 99, (int) 99, (int) 99);
    Int16Array arr2 = Int16Array.of((int) 99, (int) 99, (int) 99);
    double infVal = Double.POSITIVE_INFINITY;
    int zero2 = (int) 0;
    arr1.fill(infVal);
    arr2.fill(zero2);
    Integer actual1 = arr1.get(1);
    Integer expected1 = arr2.get(1);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestThree091() {
    Int16Array arr1 = Int16Array.of((int) 1, (int) 1);
    Int16Array arr2 = Int16Array.of((int) 1, (int) 1);
    double nInfVal = -Double.POSITIVE_INFINITY;
    int nZeroVal = -(int) 0;
    arr1.fill(nInfVal);
    arr2.fill(nZeroVal);
    Integer actual1 = arr1.get(0);
    Integer expected1 = arr2.get(0);
    assertEqual(expected1, actual1);
    }
}
