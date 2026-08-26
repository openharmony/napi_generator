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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayToLocaleString01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayToLocaleString01Test extends BasTest {

    @Test
    void testUint8ClampedArrayToLocaleStringOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    assertEqual("10,20", arr.toLocaleString());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String s = arr.toLocaleString();
    assertEqual(2, arr.length());
    assertEqual(1, s.indexOf(","));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String s = arr.toLocaleString("en-US");
    assertEqual(3, arr.length());
    assertEqual(1, s.indexOf(","));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String s = arr.toLocaleString("en-US", null);
    assertEqual(3, arr.length());
    assertEqual(1, s.indexOf(","));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(0));
    String s = arr.toLocaleString("en-US");
    assertEqual("", s);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    String s = arr.toLocaleString("en-US");
    assertEqual("255", s);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    String s = arr.toLocaleString("en-US");
    assertEqual("0", s);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    String s = arr.toLocaleString("en-US");
    assertEqual(3, arr.length());
    assertEqual(3, s.indexOf(","));
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString();
    assertEqual(3, arr.length());
    assertEqual(1, r.indexOf(","));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.toLocaleString();
    assertEqual("", r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    String r = arr.toLocaleString();
    assertEqual("42", r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.toLocaleString("en-US");
    assertEqual(2, arr.length());
    assertEqual(1, r.indexOf(","));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.toLocaleString(null, null);
    assertEqual(2, arr.length());
    assertEqual(1, r.indexOf(","));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    String r = arr.toLocaleString();
    assertEqual(3, arr.length());
    assertEqual(3, r.indexOf(","));
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    String r = arr.toLocaleString();
    assertEqual(4, arr.length());
    assertEqual(1, r.indexOf(","));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    String r1 = arr.toLocaleString();
    String r2 = arr.toLocaleString();
    assertEqual(3, arr.length());
    assertEqual(r2, r1);
    assertEqual(7, arr.get(0));
    assertEqual(8, arr.get(1));
    assertEqual(9, arr.get(2));
    assertEqual("7,8,9", r1);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne018() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {2});
    assertNotEqual(a2.toLocaleString(), a1.toLocaleString());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne019() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {1, 2});
    assertNotEqual(a2.toLocaleString(), a1.toLocaleString());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne020() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(0);
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0});
    assertNotEqual(a2.toLocaleString(), a1.toLocaleString());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    String r = arr.toLocaleString("en-US");
    assertEqual(1, arr.length());
    assertTrue(r.indexOf("255") >= 0);
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    String r = arr.toLocaleString("en-US");
    assertEqual(1, arr.length());
    assertEqual('0', r.charAt(0));
    assertEqual(0, arr.get(0));
    assertEqual("0", r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    String r = arr.toLocaleString("en-US");
    assertEqual(1, arr.length());
    assertTrue(r.indexOf("0") >= 0);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    String r = arr.toLocaleString("en-US");
    assertEqual(3, r.length());
    assertEqual(1, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual("100", r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.toLocaleString();
    assertEqual(lenBefore, arr.length());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    arr.toLocaleString();
    assertEqual(11, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String joinBefore = arr.join(",");
    arr.toLocaleString("en-US");
    assertEqual(joinBefore, arr.join(","));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne028() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    sub.toLocaleString();
    assertEqual(4, parent.length());
    assertEqual(2, sub.length());
    assertEqual(10, parent.get(0));
    assertEqual(20, parent.get(1));
    assertEqual(30, parent.get(2));
    assertEqual(40, parent.get(3));
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne029() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    sub.toLocaleString();
    assertEqual(3, parent.length());
    assertEqual(2, sub.length());
    assertEqual(10, parent.get(0));
    assertEqual(20, parent.get(1));
    assertEqual(30, parent.get(2));
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne030() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = parent.subarray(1, 1);
    String r = sub.toLocaleString();
    assertEqual(3, parent.length());
    assertEqual(0, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne031() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 2, 4);
    view.toLocaleString();
    assertEqual(2, view.byteOffset());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 0, 4);
    view.toLocaleString();
    assertEqual(buf, view.buffer());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne033() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray view = new Uint8ClampedArray(buf, 4, 0);
    String r = view.toLocaleString();
    assertEqual("", r);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne034() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {5, 6, 7, 8});
    Uint8ClampedArray sli = parent.slice(1, 3);
    sli.toLocaleString();
    assertEqual(2, sli.length());
    assertEqual(6, sli.get(0));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne035() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {5, 6, 7, 8});
    Uint8ClampedArray sli = parent.slice(0, 2);
    sli.toLocaleString();
    assertNotEqual(parent.buffer(), sli.buffer());
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String a = arr.toLocaleString();
    String b = String.valueOf(arr);
    assertEqual(b.length(), a.length());
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual("1,2,3", a);
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("zh-CN");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("de-DE");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("ar");
    assertTrue(r.length() >= 3);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("ja-JP");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("fr-FR");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("ko-KR");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("ru-RU");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("en-GB");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("en");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("zh");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("EN-US");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("en-us");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("en-US-u-nu-arab");
    assertTrue(r.length() >= 3);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.toLocaleString("en-US-u-nu-latn");
    assertTrue(r.length() >= 5);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("   ");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("12345");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("xxxx");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("!@#$%");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("中文");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("-");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayToLocaleStringOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.toLocaleString("en_US");
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
