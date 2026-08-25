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
 * Uint8ArrayConstructor02Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayConstructor02Test extends BasTest {

    @Test
    void testUint8ArrayConstructor02_001() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_002() {
    Uint8Array arr = new Uint8Array(0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_003() {
    Uint8Array arr = new Uint8Array(1);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_004() {
    Uint8Array arr = new Uint8Array(2);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_005() {
    Uint8Array arr = new Uint8Array(10);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_006() {
    Uint8Array arr = new Uint8Array(100);
    assertEqual(100, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_007() {
    Uint8Array arr = new Uint8Array(127);
    assertEqual(127, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_008() {
    Uint8Array arr = new Uint8Array(128);
    assertEqual(128, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_009() {
    Uint8Array arr = new Uint8Array(255);
    assertEqual(255, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_010() {
    Uint8Array arr = new Uint8Array(077);
    assertEqual(63, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_011() {
    Uint8Array arr = new Uint8Array(0xFF);
    assertEqual(255, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_012() {
    Uint8Array arr = new Uint8Array(0b1010);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_013() {
    try {
    Uint8Array arr = new Uint8Array(-1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor02_014() {
    try {
    Uint8Array arr = new Uint8Array(Integer.MIN_VALUE);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor02_015() {
    Uint8Array arr = new Uint8Array(-0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_016() {
    int len = 5 + 3;
    Uint8Array arr = new Uint8Array(len);
    assertEqual(8, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_017() {
    int len = 10 - 2;
    Uint8Array arr = new Uint8Array(len);
    assertEqual(8, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_018() {
    int len = 3 * 7;
    Uint8Array arr = new Uint8Array(len);
    assertEqual(21, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_019() {
    int len = 100 / 10;
    Uint8Array arr = new Uint8Array(len);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_020() {
    int len = 50;
    Uint8Array arr = new Uint8Array(len);
    assertEqual(50, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_021() {
    Uint8Array arr = new Uint8Array(1e1);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_022() {
    Uint8Array arr = new Uint8Array(0x0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_023() {
    Uint8Array arr = new Uint8Array(3);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_024() {
    Uint8Array arr = new Uint8Array(7);
    assertEqual(7, arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_025() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_026() {
    Uint8Array arr = new Uint8Array(3);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor02_027() {
    Uint8Array arr = new Uint8Array(2);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor02_028() {
    Uint8Array arr = new Uint8Array(4);
    ArrayBuffer buffer = arr.buffer();
    assertEqual(4, buffer.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_029() {
    Uint8Array arr = new Uint8Array(10);
    assertTrue(arr.buffer().byteLength() >= arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_030() {
    Uint8Array arr = new Uint8Array(0);
    try {
    arr.get(0);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ArrayConstructor02_031() {
    Uint8Array arr = new Uint8Array(3);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ArrayConstructor02_032() {
    Uint8Array arr = new Uint8Array(100);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(49));
    assertEqual(0, arr.get(99));
    }

    @Test
    void testUint8ArrayConstructor02_033() {
    double[] nums = new double[] {1.0, 2.0, 3.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_034() {
    double[] nums = new double[] {0.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_035() {
    double[] nums = new double[] {};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_036() {
    double[] nums = new double[] {0.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_037() {
    double[] nums = new double[] {255.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_038() {
    double[] nums = new double[] {1.0, 2.0, 3.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ArrayConstructor02_039() {
    double[] nums = new double[] {0.0, 127.0, 128.0, 255.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(128, arr.get(2));
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ArrayConstructor02_040() {
    double[] nums = new double[] {0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(5));
    assertEqual(0, arr.get(9));
    }

    @Test
    void testUint8ArrayConstructor02_041() {
    double[] nums = new double[] {255.0, 255.0, 255.0, 255.0, 255.0, 255.0, 255.0, 255.0, 255.0, 255.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(9));
    }

    @Test
    void testUint8ArrayConstructor02_042() {
    double[] nums = new double[] {0x10, 0xFF, 0x80};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(16, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(128, arr.get(2));
    }

    @Test
    void testUint8ArrayConstructor02_043() {
    double[] nums = new double[] {0b1111, 0b10101010};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(15, arr.get(0));
    assertEqual(170, arr.get(1));
    }

    @Test
    void testUint8ArrayConstructor02_044() {
    double[] nums = new double[] {077, 0200};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(63, arr.get(0));
    assertEqual(128, arr.get(1));
    }

    @Test
    void testUint8ArrayConstructor02_045() {
    double[] nums = new double[] {1e2, 1.5e2};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(100, arr.get(0));
    assertEqual(150, arr.get(1));
    }

    @Test
    void testUint8ArrayConstructor02_046() {
    double[] nums = new double[] {3.14, 2.718};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ArrayConstructor02_047() {
    double[] nums = new double[] {-0.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_048() {
    double[] nums = new double[] {+0.0, +127.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    assertEqual(127, arr.get(1));
    }

    @Test
    void testUint8ArrayConstructor02_049() {
    double[] nums = new double[] {0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0,
    10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0,
    20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0,
    30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0,
    40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0,
    50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0,
    60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0,
    70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0,
    80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0,
    90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(100, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_050() {
    double[] nums = new double[] {0.0, 255.0, 0.0, 255.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ArrayConstructor02_051() {
    double[] nums = new double[] {0.001, 0.999, 254.999, 255.001};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(254, arr.get(2));
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ArrayConstructor02_052() {
    double[] nums = new double[] {256.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_053() {
    double[] nums = new double[] {-1.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_054() {
    double[] nums = new double[] {256.0, -1.0, 128.0, 0.0, 255.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(128, arr.get(2));
    assertEqual(0, arr.get(3));
    assertEqual(255, arr.get(4));
    }

    @Test
    void testUint8ArrayConstructor02_055() {
    double[] nums = new double[] {10.0, 20.0, 30.0, 40.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_056() {
    double[] nums = new double[] {1.0, 2.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_057() {
    double[] nums = new double[] {5.0, 10.0, 15.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(3, arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_058() {
    double[] nums = new double[] {7.0, 8.0};
    Uint8Array arr = new Uint8Array(nums);
    ArrayBuffer buffer = arr.buffer();
    assertEqual(2, buffer.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_059() {
    double[] nums = new double[] {1.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor02_060() {
    double[] nums = new double[] {100.0, 200.0};
    Uint8Array arr = new Uint8Array(nums);
    nums[0] = 999.0;
    assertEqual(100, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_061() {
    double[] nums = new double[] {0.0, 1.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0.0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_062() {
    double[] nums = new double[] {257.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_063() {
    double[] nums = new double[] {511.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_064() {
    double[] nums = new double[] {512.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_065() {
    double[] nums = new double[] {1000.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(232, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_066() {
    double[] nums = new double[] {-2.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(254, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_067() {
    double[] nums = new double[] {-255.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_068() {
    double[] nums = new double[] {-256.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_069() {
    double[] nums = new double[] {-300.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(212, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_070() {
    double[] nums = new double[] {3.14};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(3, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_071() {
    double[] nums = new double[] {0.5};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_072() {
    double[] nums = new double[] {127.5};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(127, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_073() {
    double[] nums = new double[] {255.9};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_074() {
    double[] nums = new double[] {256.9};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_075() {
    double[] nums = new double[] {-0.5};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_076() {
    double[] nums = new double[] {-127.5};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(129, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_077() {
    double[] nums = new double[] {1e10};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_078() {
    double[] nums = new double[] {42.0};
    Uint8Array arr = new Uint8Array(nums);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_080() {
    ArrayBuffer buf = new ArrayBuffer(100);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(100, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_081() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ArrayConstructor02_082() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_083() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_084() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_085() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 1.0);
    assertEqual(1, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_086() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_087() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 7.0);
    assertEqual(7, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_088() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.5);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_089() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 1.5);
    assertEqual(1, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_090() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 3.7);
    assertEqual(3, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_091() {
    ArrayBuffer buf = new ArrayBuffer(300);
    Uint8Array arr = new Uint8Array(buf, 0xFF);
    assertEqual(255, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_092() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, -0.0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_093() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 2.999);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_094() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0b10);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_095() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 010);
    assertEqual(8, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_096() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 3.0);
    assertEqual(1, arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_097() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 4.0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_098() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 1e1);
    assertEqual(10, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_099() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 3.0);
    assertEqual(5, arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_100() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 4.0);
    assertEqual(6, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_101() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayConstructor02_102() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ArrayConstructor02_103() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    ArrayBuffer buffer = arr.buffer();
    assertEqual(4, buffer.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_104() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    assertTrue(arr.buffer().byteLength() >= arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_105() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    assertEqual(6, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_106() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 7.0);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ArrayConstructor02_107() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 5.0);
    assertEqual(5, arr.byteOffset());
    }

    @Test
    void testUint8ArrayConstructor02_108() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    assertTrue(arr.buffer().byteLength() >= arr.byteLength());
    }

    @Test
    void testUint8ArrayConstructor02_109() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    arr.set(0, 42);
    DataView view = new DataView(buf);
    assertEqual(42, view.getUint8(0));
    }

    @Test
    void testUint8ArrayConstructor02_110() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr = new Uint8Array(buf, 0.0);
    DataView view = new DataView(buf);
    view.setUint8(0, 77);
    assertEqual(77, arr.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_111() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array arr1 = new Uint8Array(buf, 0.0);
    Uint8Array arr2 = new Uint8Array(buf, 0.0);
    arr1.set(1, 33);
    assertEqual(33, arr2.get(1));
    }

    @Test
    void testUint8ArrayConstructor02_112() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array base = new Uint8Array(buf, 0.0);
    Uint8Array offset = new Uint8Array(buf, 4.0);
    base.set(3, 11);
    base.set(4, 22);
    assertEqual(22, offset.get(0));
    }

    @Test
    void testUint8ArrayConstructor02_113() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array low = new Uint8Array(buf, 0.0);
    Uint8Array high = new Uint8Array(buf, 3.0);
    low.set(2, 99);
    high.set(0, 88);
    assertEqual(99, low.get(2));
    assertEqual(88, high.get(0));
    assertEqual(88, low.get(3));
    }

    @Test
    void testUint8ArrayConstructor02_114() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    arr.set(0, 10);
    DataView view = new DataView(buf);
    assertEqual(10, view.getUint8(2));
    }
}
