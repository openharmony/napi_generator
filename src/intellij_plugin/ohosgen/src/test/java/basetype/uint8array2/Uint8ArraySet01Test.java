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

import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArraySet01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArraySet01Test extends BasTest {

    @Test
    void testUint8ArraySet01_001() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {10, 20, 30};
    target.set(src);
    assertEqual(10, target.get(0));
    }

    @Test
    void testUint8ArraySet01_002() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0, 20.0};
    target.set(src, 1);
    assertEqual(10, target.get(1));
    }

    @Test
    void testUint8ArraySet01_003() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(5, 10, 15);
    target.set(src);
    assertEqual(10, target.get(1));
    }

    @Test
    void testUint8ArraySet01_004() {
    Uint8Array target = new Uint8Array(5);
    List<Integer> src = java.util.Arrays.asList(10, 20);
    target.set(src, 2);
    assertEqual(10, target.get(2));
    }

    @Test
    void testUint8ArraySet01_005() {
    Uint8Array target = new Uint8Array(3);
    target.fill(99);
    int[] src = new int[] {};
    target.set(src);
    assertEqual(99, target.get(0));
    }

    @Test
    void testUint8ArraySet01_006() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {0};
    target.set(src);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_007() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {255};
    target.set(src);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_008() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {127};
    target.set(src);
    assertEqual(127, target.get(0));
    }

    @Test
    void testUint8ArraySet01_009() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {128};
    target.set(src);
    assertEqual(128, target.get(0));
    }

    @Test
    void testUint8ArraySet01_010() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {256};
    target.set(src);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_011() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {-1};
    target.set(src);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_012() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {0.5};
    target.set(src);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_013() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {255.9};
    target.set(src);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_014() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {256.1};
    target.set(src);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_015() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {-0.5};
    target.set(src);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_016() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {1000};
    target.set(src);
    assertEqual(232, target.get(0));
    }

    @Test
    void testUint8ArraySet01_017() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {-1000};
    target.set(src);
    assertEqual(24, target.get(0));
    }

    @Test
    void testUint8ArraySet01_018() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {1, 2, 3};
    target.set(src);
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint8ArraySet01_019() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    int[] src = new int[] {10, 20};
    target.set(src);
    assertEqual(99, target.get(3));
    }

    @Test
    void testUint8ArraySet01_020() {
    Uint8Array target = new Uint8Array(4);
    int[] src = new int[] {1, 2, 3, 4};
    target.set(src);
    assertEqual(4, target.get(3));
    }

    @Test
    void testUint8ArraySet01_021() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {10, 20, 30, 40, 50};
    try {
    target.set(src);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_022() {
    Uint8Array target = new Uint8Array(50);
    int[] src = new int[] {
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    };
    target.set(src);
    assertEqual(50, target.get(49));
    }

    @Test
    void testUint8ArraySet01_023() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {0, 0, 0};
    target.set(src);
    assertEqual(0, target.get(1));
    }

    @Test
    void testUint8ArraySet01_024() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {0x00, 0xFF, 0x80};
    target.set(src);
    assertEqual(255, target.get(1));
    }

    @Test
    void testUint8ArraySet01_025() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {0377, 0200, 00};
    target.set(src);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_026() {
    Uint8Array target = new Uint8Array(3);
    int[] src = new int[] {0b11111111, 0b10000000, 0b0};
    target.set(src);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_027() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0, 20.0};
    target.set(src, 0);
    assertEqual(10, target.get(0));
    }

    @Test
    void testUint8ArraySet01_028() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {30.0, 40.0};
    target.set(src, 1);
    assertEqual(30, target.get(1));
    }

    @Test
    void testUint8ArraySet01_029() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    double[] src = new double[] {50.0};
    target.set(src, 4);
    assertEqual(50, target.get(4));
    }

    @Test
    void testUint8ArraySet01_030() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_031() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_032() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_033() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_034() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_035() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, 99999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_036() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -99999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_037() {
    Uint8Array target = new Uint8Array(3);
    target.fill(99);
    double[] src = new double[] {};
    target.set(src, 0);
    assertEqual(99, target.get(0));
    }

    @Test
    void testUint8ArraySet01_038() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {0.0};
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_039() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {255.0};
    target.set(src, 0);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_040() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {127.0};
    target.set(src, 0);
    assertEqual(127, target.get(0));
    }

    @Test
    void testUint8ArraySet01_041() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {128.0};
    target.set(src, 0);
    assertEqual(128, target.get(0));
    }

    @Test
    void testUint8ArraySet01_042() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {-1.0};
    target.set(src, 0);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_043() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {256.0};
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_044() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {1.0, 2.0, 3.0};
    target.set(src, 0);
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint8ArraySet01_045() {
    Uint8Array target = new Uint8Array(4);
    double[] src = new double[] {10.0, 20.0, 30.0, 40.0};
    target.set(src, 0);
    assertEqual(40, target.get(3));
    }

    @Test
    void testUint8ArraySet01_046() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0};
    try {
    target.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_047() {
    Uint8Array target = new Uint8Array(4);
    target.fill(99);
    double[] src = new double[] {10.0, 20.0, 30.0};
    target.set(src, 1);
    assertEqual(30, target.get(3));
    }

    @Test
    void testUint8ArraySet01_048() {
    Uint8Array target = new Uint8Array(4);
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0, 5.0};
    try {
    target.set(src, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_049() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    double[] src = new double[] {10.0, 20.0, 30.0};
    target.set(src, 2);
    assertEqual(30, target.get(4));
    }

    @Test
    void testUint8ArraySet01_050() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    double[] src = new double[] {50.0};
    target.set(src, 3);
    assertEqual(50, target.get(3));
    }

    @Test
    void testUint8ArraySet01_051() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    double[] src = new double[] {77.0};
    target.set(src, 4);
    assertEqual(77, target.get(4));
    }

    @Test
    void testUint8ArraySet01_052() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    double[] src = new double[] {};
    target.set(src, 5);
    assertEqual(99, target.get(0));
    }

    @Test
    void testUint8ArraySet01_053() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_054() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, 6);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_055() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_056() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_057() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -6);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_058() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, 99999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_059() {
    Uint8Array target = new Uint8Array(5);
    double[] src = new double[] {10.0};
    try {
    target.set(src, -99999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_060() {
    Uint8Array target = new Uint8Array(3);
    double[] src = new double[] {10.0, 20.0, 30.0, 40.0};
    try {
    target.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_061() {
    Uint8Array target = new Uint8Array(2);
    List<Integer> src = java.util.Arrays.asList(1, 2);
    target.set(src, 0);
    assertEqual(2, target.get(1));
    }

    @Test
    void testUint8ArraySet01_062() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(0);
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_063() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(255);
    target.set(src, 0);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_064() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(127);
    target.set(src, 0);
    assertEqual(127, target.get(0));
    }

    @Test
    void testUint8ArraySet01_065() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(128);
    target.set(src, 0);
    assertEqual(128, target.get(0));
    }

    @Test
    void testUint8ArraySet01_066() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(256);
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_067() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(-1);
    target.set(src, 0);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_068() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(1000);
    target.set(src, 0);
    assertEqual(232, target.get(0));
    }

    @Test
    void testUint8ArraySet01_069() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(-1000);
    target.set(src, 0);
    assertEqual(24, target.get(0));
    }

    @Test
    void testUint8ArraySet01_070() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    target.set(src, 0);
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint8ArraySet01_071() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(10, 20);
    target.set(src, 0);
    assertEqual(99, target.get(3));
    }

    @Test
    void testUint8ArraySet01_072() {
    Uint8Array target = new Uint8Array(4);
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4);
    target.set(src, 0);
    assertEqual(4, target.get(3));
    }

    @Test
    void testUint8ArraySet01_073() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(10, 20, 30, 40, 50);
    try {
    target.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_074() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(0, 0, 0);
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_075() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(0x00, 0xFF, 0x80);
    target.set(src, 0);
    assertEqual(255, target.get(1));
    }

    @Test
    void testUint8ArraySet01_076() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(10, 20);
    target.set(src, 1);
    assertEqual(20, target.get(2));
    }

    @Test
    void testUint8ArraySet01_077() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(30, 40);
    target.set(src, 2);
    assertEqual(40, target.get(3));
    }

    @Test
    void testUint8ArraySet01_078() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(50, 60);
    target.set(src, 3);
    assertEqual(60, target.get(4));
    }

    @Test
    void testUint8ArraySet01_079() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(77);
    target.set(src, 4);
    assertEqual(77, target.get(4));
    }

    @Test
    void testUint8ArraySet01_080() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = new ArrayList<>();
    target.set(src, 5);
    assertEqual(99, target.get(0));
    }

    @Test
    void testUint8ArraySet01_081() {
    Uint8Array target = new Uint8Array(5);
    List<Integer> src = java.util.Arrays.asList(10);
    try {
    target.set(src, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_082() {
    Uint8Array target = new Uint8Array(5);
    List<Integer> src = java.util.Arrays.asList(10);
    try {
    target.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_083() {
    Uint8Array target = new Uint8Array(5);
    List<Integer> src = java.util.Arrays.asList(10);
    try {
    target.set(src, -5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_084() {
    Uint8Array target = new Uint8Array(5);
    List<Integer> src = java.util.Arrays.asList(10);
    try {
    target.set(src, 99999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_085() {
    Uint8Array target = new Uint8Array(5);
    List<Integer> src = java.util.Arrays.asList(10);
    try {
    target.set(src, -99999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_086() {
    Uint8Array target = new Uint8Array(1);
    int[] src = new int[] {127 + 130};
    target.set(src);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint8ArraySet01_087() {
    Uint8Array target = new Uint8Array(2);
    List<Integer> src = java.util.Arrays.asList(257, -2);
    target.set(src, 0);
    assertEqual(254, target.get(1));
    }

    @Test
    void testUint8ArraySet01_088() {
    Uint8Array target = new Uint8Array(2);
    double[] src = new double[] {256.7, -1.3};
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_089() {
    Uint8Array target = new Uint8Array(1);
    int[] src = new int[] {0xFF + 0x01};
    target.set(src);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_090() {
    Uint8Array target = new Uint8Array(3);
    target.fill(99);
    List<Integer> src = new ArrayList<>();
    target.set(src, 0);
    assertEqual(99, target.get(0));
    }

    @Test
    void testUint8ArraySet01_091() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(10, 20);
    target.set(src, 2);
    assertEqual(99, target.get(0));
    assertEqual(99, target.get(1));
    }

    @Test
    void testUint8ArraySet01_092() {
    Uint8Array target = new Uint8Array(5);
    target.fill(99);
    List<Integer> src = java.util.Arrays.asList(10, 20);
    target.set(src, 0);
    assertEqual(99, target.get(3));
    assertEqual(99, target.get(4));
    }

    @Test
    void testUint8ArraySet01_093() {
    Uint8Array target = new Uint8Array(0);
    List<Integer> src = new ArrayList<>();
    target.set(src, 0);
    assertEqual(0, target.length());
    }

    @Test
    void testUint8ArraySet01_094() {
    Uint8Array target = new Uint8Array(0);
    List<Integer> src = java.util.Arrays.asList(10);
    try {
    target.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArraySet01_095() {
    Uint8Array target = new Uint8Array(100);
    int[] src = new int[] {
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
    };
    target.set(src);
    assertEqual(99, target.get(99));
    }

    @Test
    void testUint8ArraySet01_096() {
    Uint8Array target = new Uint8Array(4);
    int[] src = new int[] {0, 255, 0, 255};
    target.set(src);
    assertEqual(0, target.get(0));
    assertEqual(255, target.get(1));
    assertEqual(0, target.get(2));
    assertEqual(255, target.get(3));
    }

    @Test
    void testUint8ArraySet01_097() {
    Uint8Array target = new Uint8Array(1);
    double[] src = new double[] {2.56e2};
    target.set(src, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint8ArraySet01_098() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(0b11111111, 0b10000000, 0b0);
    target.set(src, 0);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_099() {
    Uint8Array target = new Uint8Array(3);
    List<Integer> src = java.util.Arrays.asList(0377, 0200, 00);
    target.set(src, 0);
    assertEqual(255, target.get(0));
    }

    @Test
    void testUint8ArraySet01_100() {
    Uint8Array target = new Uint8Array(50);
    List<Integer> src = java.util.Arrays.asList(
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    );
    target.set(src, 0);
    assertEqual(50, target.get(49));
    }
}
