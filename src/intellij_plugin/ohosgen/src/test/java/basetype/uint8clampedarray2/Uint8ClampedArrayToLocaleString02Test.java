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

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayToLocaleString02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayToLocaleString02Test extends BasTest {

    @Test
    void testUint8ClampedArrayToLocaleStringTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int blBefore = arr.byteLength();
    arr.toLocaleString("en-US");
    assertEqual(blBefore, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int offBefore = arr.byteOffset();
    arr.toLocaleString("zh-CN");
    assertEqual(offBefore, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.toLocaleString();
    assertEqual(bufBefore, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 100, 150});
    arr.toLocaleString();
    arr.toLocaleString("en-US");
    arr.toLocaleString("zh-CN");
    assertEqual(3, arr.length());
    assertEqual(100, arr.get(1));
    assertEqual(50, arr.get(0));
    assertEqual(150, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.toLocaleString();
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.toLocaleString();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int blBefore = arr.buffer().byteLength();
    arr.toLocaleString();
    assertEqual(blBefore, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88, 99});
    arr.toLocaleString();
    assertEqual(88, arr.at(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    arr.toLocaleString();
    assertEqual(22, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    arr.toLocaleString();
    assertEqual(33, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    String r = arr.toLocaleString("en-US");
    assertEqual(2, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    String r = arr.toLocaleString();
    assertTrue(r.length() >= 5);
    assertEqual(5, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    String r = arr.toLocaleString();
    assertTrue(r.length() >= 10);
    assertEqual(10, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(10, arr.get(9));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    String r = arr.toLocaleString("en-US");
    assertTrue(r.length() >= 9);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    String r = arr.toLocaleString("en-US");
    assertEqual(1, arr.length());
    assertTrue(r.indexOf("100") >= 0);
    assertEqual(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    String r = arr.toLocaleString("en-US");
    assertEqual(1, arr.length());
    assertTrue(r.indexOf("1") >= 0);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo017() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(2, 4);
    int offBefore = sub.byteOffset();
    sub.toLocaleString();
    assertEqual(4, parent.length());
    assertEqual(2, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(3, sub.get(0));
    assertEqual(4, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo018() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {100, 200, 250});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    parent.toLocaleString();
    assertEqual(3, parent.length());
    assertEqual(2, sub.length());
    assertEqual(100, parent.get(0));
    assertEqual(200, parent.get(1));
    assertEqual(250, parent.get(2));
    assertEqual(100, sub.get(0));
    assertEqual(200, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.toLocaleString("zh-CN");
    assertEqual("", r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("xx-INVALID");
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    String r1 = arr.toLocaleString("en-US");
    String r2 = arr.toLocaleString("en-US");
    assertEqual(r2, r1);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    String r = arr.toLocaleString("ar");
    assertEqual(1, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(String.valueOf(arr), arr.toLocaleString());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString();
    String t = BasTest.typeofValue(r);
    assertEqual("string", t);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString();
    assertNotNull(r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString();
    assertNotNull(r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    String r = arr.toLocaleString();
    assertEqual(1, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    String r = arr.toLocaleString();
    assertEqual(3, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127});
    String r = arr.toLocaleString();
    assertEqual(3, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128});
    String r = arr.toLocaleString();
    assertEqual(3, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    String r = arr.toLocaleString();
    assertEqual(6, r.length());
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.fill(0);
    String r = arr.toLocaleString();
    assertEqual(5, r.length());
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    String r = arr.toLocaleString();
    assertEqual(5, r.length());
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo034() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    parent.set(2, 10);
    parent.set(3, 20);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 2);
    String r = view.toLocaleString();
    assertEqual(5, r.length());
    assertEqual(2, view.length());
    assertEqual(10, view.get(0));
    assertEqual(20, view.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    String r = arr.toLocaleString();
    assertEqual(913, r.length());
    assertEqual(256, arr.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo036() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    String r = arr.toLocaleString();
    assertEqual(5, r.length());
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo037() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    String r = arr.toLocaleString();
    assertEqual(5, r.length());
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    String r = arr.toLocaleString();
    assertEqual(5, r.length());
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    String r = arr.toLocaleString();
    assertEqual(11, r.length());
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    String r = arr.toLocaleString();
    assertEqual(6, r.length());
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 127, 128});
    String r = arr.toLocaleString();
    assertEqual(13, r.length());
    assertEqual(4, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(127, arr.get(2));
    assertEqual(128, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    String r = arr.toLocaleString();
    assertEqual(1, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.toLocaleString();
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    String r = arr.toLocaleString();
    assertEqual(3, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1000});
    String r = arr.toLocaleString("en-US");
    assertEqual(3, r.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10});
    String r1 = arr.toLocaleString();
    String r2 = String.valueOf(arr);
    assertEqual(r2.length(), r1.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2);
    String r = arr.toLocaleString();
    assertEqual(7, r.length());
    assertEqual(4, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    String r = arr.toLocaleString();
    assertEqual(20, r.length());
    assertEqual(10, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(10, arr.get(9));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 6, 9});
    String r = arr.toLocaleString("en-US", null);
    assertEqual(5, r.length());
    assertEqual(3, arr.length());
    assertEqual(3, arr.get(0));
    assertEqual(6, arr.get(1));
    assertEqual(9, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int before = arr.length();
    arr.toLocaleString();
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int before = arr.byteLength();
    arr.toLocaleString();
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    int before = sub.length();
    sub.toLocaleString();
    assertEqual(5, arr.length());
    assertEqual(3, sub.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(40, arr.get(3));
    assertEqual(50, arr.get(4));
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String before = arr.getClass().getSimpleName();
    arr.toLocaleString();
    assertEqual(before, arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.BYTES_PER_ELEMENT;
    arr.toLocaleString();
    assertEqual(before, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    String r = arr.toLocaleString();
    int idx = r.indexOf('5');
    assertEqual(3, arr.length());
    assertTrue(idx >= 0);
    assertEqual(5, arr.get(0));
    assertEqual(10, arr.get(1));
    assertEqual(15, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0, 128});
    String r = arr.toLocaleString();
    int commaCount = r.split(java.util.regex.Pattern.quote(",")).length - 1;
    assertEqual(2, commaCount);
    }
}
