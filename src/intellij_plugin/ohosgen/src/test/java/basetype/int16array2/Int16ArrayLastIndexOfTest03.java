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

import basetype.common.BasTest;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayLastIndexOfTest03 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayLastIndexOfTest03 extends BasTest {

    @Test
    void testInt16ArrayLastIndexOfTestThree001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int actual1 = arr.lastIndexOf(50, -1);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree002() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int actual1 = arr.lastIndexOf(40, -2);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree003() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int actual1 = arr.lastIndexOf(30, -3);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree004() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int actual1 = arr.lastIndexOf(20, -4);
    assertEqual(1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree005() {
    Int16Array arr = new Int16Array(new int[] {77, 88, 99, 11, 22});
    int actual1 = arr.lastIndexOf(77, -5);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree006() {
    Int16Array arr = new Int16Array(new int[] {12, 34, 56, 78, 90});
    int actual1 = arr.lastIndexOf(78, -1);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree007() {
    Int16Array arr = new Int16Array(new int[] {5, 15, 25, 35, 45, 55});
    int actual1 = arr.lastIndexOf(25, -3);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree008() {
    Int16Array arr = new Int16Array(new int[] {91, 92, 93, 94, 95});
    int actual1 = arr.lastIndexOf(91, -1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree009() {
    Int16Array arr = new Int16Array(new int[] {61, 62, 63, 64, 65});
    int actual1 = arr.lastIndexOf(65, -2);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree010() {
    Int16Array arr = new Int16Array(new int[] {31, 32, 33, 34, 35});
    int actual1 = arr.lastIndexOf(35, -3);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree011() {
    Int16Array arr = new Int16Array(new int[] {41, 42, 43, 44, 45});
    int actual1 = arr.lastIndexOf(44, -4);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree012() {
    Int16Array arr = new Int16Array(new int[] {81, 82, 83, 84, 85});
    int actual1 = arr.lastIndexOf(83, -5);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree013() {
    Int16Array arr = new Int16Array(new int[] {71, 72, 73, 74, 75});
    int actual1 = arr.lastIndexOf(71, -2);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree014() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    int actual1 = arr.lastIndexOf(11, -6);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree015() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    int actual1 = arr.lastIndexOf(33, -7);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree016() {
    Int16Array arr = new Int16Array(new int[] {14, 28, 42, 56, 70});
    int actual1 = arr.lastIndexOf(14, -100);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree017() {
    Int16Array arr = new Int16Array(new int[] {7, 14, 21, 28, 35});
    int actual1 = arr.lastIndexOf(21, -1000000);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree018() {
    Int16Array arr = new Int16Array(new int[] {8, 16, 24});
    int actual1 = arr.lastIndexOf(8, -9999);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree019() {
    Int16Array arr = new Int16Array(new int[] {3, 6, 9, 12, 15});
    int actual1 = arr.lastIndexOf(99, -6);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree020() {
    Int16Array arr = new Int16Array(new int[] {55, 66, 77, 88, 99});
    int actual1 = arr.lastIndexOf(55, 0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree021() {
    Int16Array arr = new Int16Array(new int[] {12, 24, 36, 48, 60});
    int actual1 = arr.lastIndexOf(24, 1);
    assertEqual(1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree022() {
    Int16Array arr = new Int16Array(new int[] {9, 18, 27, 36, 45});
    int actual1 = arr.lastIndexOf(27, 3);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree023() {
    Int16Array arr = new Int16Array(new int[] {101, 202, 303, 404, 505});
    int actual1 = arr.lastIndexOf(505, 4);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree024() {
    Int16Array arr = new Int16Array(new int[] {73, 74, 75, 76, 77});
    int actual1 = arr.lastIndexOf(73, 3);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree025() {
    Int16Array arr = new Int16Array(new int[] {17, 18, 19, 20, 17});
    int actual1 = arr.lastIndexOf(17, 2);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree026() {
    Int16Array arr = new Int16Array(new int[] {21, 22, 23, 24, 25});
    int actual1 = arr.lastIndexOf(24, 0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree027() {
    Int16Array arr = new Int16Array(new int[] {31, 32, 33, 34, 35});
    int actual1 = arr.lastIndexOf(34, 1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree028() {
    Int16Array arr = new Int16Array(new int[] {41, 42, 43, 44, 45});
    int actual1 = arr.lastIndexOf(45, 2);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree029() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int actual1 = arr.lastIndexOf(50, 5);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree030() {
    Int16Array arr = new Int16Array(new int[] {88, 99, 11, 22, 33});
    int actual1 = arr.lastIndexOf(88, 5);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree031() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20, 25});
    int actual1 = arr.lastIndexOf(25, 6);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree032() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int actual1 = arr.lastIndexOf(5, 1000000);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree033() {
    Int16Array arr = new Int16Array(new int[] {99, 88, 77, 66, 55});
    int actual1 = arr.lastIndexOf(99, 2147483647);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree034() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 6, 8, 10});
    int actual1 = arr.lastIndexOf(99, 6);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree035() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(5, 0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree036() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(10, -1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree037() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(7, 0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree038() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(42, 1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree039() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(99, -0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree040() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(50, -1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree041() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(13, 100);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree042() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(77, -100);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree043() {
    Int16Array arr = new Int16Array(new int[] {});
    int actual1 = arr.lastIndexOf(1, 2147483647);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree044() {
    Int16Array arr = new Int16Array(new int[] {8, 16, 24, 32, 40});
    int actual1 = arr.lastIndexOf(Double.NaN, 0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree045() {
    Int16Array arr = new Int16Array(new int[] {15, 30, 45, 60, 75});
    int actual1 = arr.lastIndexOf(Double.NaN, -1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree046() {
    Int16Array arr = new Int16Array(new int[] {3, 6, 9});
    int actual1 = arr.lastIndexOf(Double.NaN, 3);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree047() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 6, 8});
    int actual1 = arr.lastIndexOf(Double.NaN, -5);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree048() {
    Int16Array arr = new Int16Array(new int[] {25, 50, 75, 100});
    int actual1 = arr.lastIndexOf(Double.NaN, 1000000);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree049() {
    Int16Array arr = new Int16Array(new int[] {32768, 50, 32768});
    int actual1 = arr.lastIndexOf(-32768);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree050() {
    Int16Array arr = new Int16Array(new int[] {0, 7, 0, 14, 0});
    int actual1 = arr.lastIndexOf(65536, -1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree051() {
    Int16Array arr = new Int16Array(new int[] {-32768, 5, 10, -32768});
    int actual1 = arr.lastIndexOf(32768, 1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree052() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 2});
    int actual1 = arr.lastIndexOf(-0, 0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree053() {
    Int16Array arr = new Int16Array(new int[] {1, 0, 3, 0, 5});
    int actual1 = arr.lastIndexOf(-0);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree054() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int actual1 = arr.lastIndexOf(-0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree055() {
    Int16Array arr = new Int16Array(new int[] {-32768, 0, 32767});
    int actual1 = arr.lastIndexOf(-32768, -1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree056() {
    Int16Array arr = new Int16Array(new int[] {-32768, 0, 32767});
    int actual1 = arr.lastIndexOf(32767, -1);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree057() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int actual1 = arr.lastIndexOf(-50000);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree058() {
    Int16Array arr = new Int16Array(new int[] {42});
    int actual1 = arr.lastIndexOf(42, 0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree059() {
    Int16Array arr = new Int16Array(new int[] {42});
    int actual1 = arr.lastIndexOf(42, -1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree060() {
    Int16Array arr = new Int16Array(new int[] {42});
    int actual1 = arr.lastIndexOf(42, 1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree061() {
    Int16Array arr = new Int16Array(new int[] {42});
    int actual1 = arr.lastIndexOf(42, 100);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree062() {
    Int16Array arr = new Int16Array(new int[] {42});
    int actual1 = arr.lastIndexOf(42, -2);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree063() {
    Int16Array arr = new Int16Array(new int[] {42});
    int actual1 = arr.lastIndexOf(42, -100);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree064() {
    Int16Array arr = new Int16Array(new int[] {7, 7, 7, 7, 7});
    int actual1 = arr.lastIndexOf(7);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree065() {
    Int16Array arr = new Int16Array(new int[] {7, 7, 7, 7, 7});
    int actual1 = arr.lastIndexOf(7, 2);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree066() {
    Int16Array arr = new Int16Array(new int[] {7, 7, 7, 7, 7});
    int actual1 = arr.lastIndexOf(7, -3);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree067() {
    Int16Array arr = new Int16Array(new int[] {7, 7, 7, 7, 7});
    int actual1 = arr.lastIndexOf(7, -6);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree068() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 1, 2, 1});
    int actual1 = arr.lastIndexOf(1);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree069() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 1, 2, 1});
    int actual1 = arr.lastIndexOf(1, 3);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree070() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 1, 2, 1});
    int actual1 = arr.lastIndexOf(2, 2);
    assertEqual(1, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree071() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 1, 2, 1});
    int actual1 = arr.lastIndexOf(1, 0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree072() {
    Int16Array arr = new Int16Array(new int[] {3, 3, 5, 3, 5});
    int actual1 = arr.lastIndexOf(5);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree073() {
    Int16Array arr = new Int16Array(new int[] {9, 8, 9, 8, 9});
    int actual1 = arr.lastIndexOf(9, -1);
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree074() {
    Int16Array arr = new Int16Array(new int[] {9, 8, 9, 8, 9});
    int actual1 = arr.lastIndexOf(9, -2);
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayLastIndexOfTestThree075() {
    Int16Array arr = new Int16Array(new int[] {9, 8, 9, 8, 9});
    int actual1 = arr.lastIndexOf(9, -6);
    assertEqual(-1, actual1);}
}
