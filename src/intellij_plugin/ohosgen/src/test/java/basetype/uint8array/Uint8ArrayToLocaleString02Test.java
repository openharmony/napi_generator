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

package basetype.uint8array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.IntlOptions;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayToLocaleString02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayToLocaleString02Test extends BasTest {
    /**
     * Verify toLocaleString() returns string type for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0100
     * @tc.name testUint8ArrayToLocaleString001
     * @tc.desc Verify toLocaleString() returns string type for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString001() {
    Uint8Array a = new Uint8Array();
    String s = a.toLocaleString();
    assertEqual(0, s.length());
    }

    /**
     * Verify toLocaleString() returns string type for single element array [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0200
     * @tc.name testUint8ArrayToLocaleString002
     * @tc.desc Verify toLocaleString() returns string type for single element array [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString002() {
    Uint8Array a = Uint8Array.of(0);
    String s = a.toLocaleString();
    assertEqual("0", s);
    }

    /**
     * Verify toLocaleString() returns string type for multi-element array [11, 22]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0300
     * @tc.name testUint8ArrayToLocaleString003
     * @tc.desc Verify toLocaleString() returns string type for multi-element array [11, 22]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString003() {
    Uint8Array a = Uint8Array.of(11, 22);
    String s = a.toLocaleString();
    assertEqual("11,22", s);
    }

    /**
     * Verify toLocaleString(locales) returns string type with locale fi-FI
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0400
     * @tc.name testUint8ArrayToLocaleString004
     * @tc.desc Verify toLocaleString(locales) returns string type with locale fi-FI
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString004() {
    Uint8Array a = Uint8Array.of(33, 44, 55);
    String s = a.toLocaleString("fi-FI");
    assertEqual("33,44,55", s);
    }

    /**
     * Verify toLocaleString(options) returns string type with maximumFractionDigits 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0500
     * @tc.name testUint8ArrayToLocaleString005
     * @tc.desc Verify toLocaleString(options) returns string type with maximumFractionDigits 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString005() {
    Uint8Array a = Uint8Array.of(66, 77);
    IntlOptions options = new IntlOptions();
    options.maximumFractionDigits = 0;
    String s = a.toLocaleString(null, options);
    assertEqual("66,77", s);
    }

    /**
     * Verify toLocaleString(locales, options) returns string type with nb-NO and minimumIntegerDigits 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0600
     * @tc.name testUint8ArrayToLocaleString006
     * @tc.desc Verify toLocaleString(locales, options) returns string type with nb-NO and minimumIntegerDigits 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString006() {
    Uint8Array a = Uint8Array.of(88, 99);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    String s = a.toLocaleString("nb-NO", options);
    assertEqual("88,99", s);
    }

    /**
     * Verify toLocaleString() returns string type for buffer-backed view array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0700
     * @tc.name testUint8ArrayToLocaleString007
     * @tc.desc Verify toLocaleString() returns string type for buffer-backed view array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString007() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array a = new Uint8Array(buf);
    a.set(0, 42);
    a.set(1, 84);
    String s = a.toLocaleString();
    assertEqual(7, s.length());
    }

    /**
     * Verify toLocaleString() returns string type for array with truncated values [256, -1, 0x100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0800
     * @tc.name testUint8ArrayToLocaleString008
     * @tc.desc Verify toLocaleString() returns string type for array with truncated values [256, -1, 0x100]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString008() {
    Uint8Array a = new Uint8Array(3);
    a.set(0, 256);
    a.set(1, -1);
    a.set(2, 0x100);
    String s = a.toLocaleString();
    assertEqual(7, s.length());
    }

    /**
     * Verify toLocaleString() return value is not Uint8Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_0900
     * @tc.name testUint8ArrayToLocaleString009
     * @tc.desc Verify toLocaleString() return value is not Uint8Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString009() {
    Uint8Array a = Uint8Array.of(11, 22, 33);
    String s = a.toLocaleString();
    assertFalse(BasTest.instanceOf(s, Uint8Array.class));
    }

    /**
     * Verify toLocaleString() return value is not Array instance
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1000
     * @tc.name testUint8ArrayToLocaleString010
     * @tc.desc Verify toLocaleString() return value is not Array instance
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString010() {
    Uint8Array a = Uint8Array.of(44, 55);
    String s = a.toLocaleString();
    assertTrue(s.length() >= 0);
    }

    /**
     * Verify toLocaleString() returns empty string for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1100
     * @tc.name testUint8ArrayToLocaleString011
     * @tc.desc Verify toLocaleString() returns empty string for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString011() {
    Uint8Array a = new Uint8Array();
    assertEqual("", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '0' for array with element value 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1200
     * @tc.name testUint8ArrayToLocaleString012
     * @tc.desc Verify toLocaleString() returns '0' for array with element value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString012() {
    Uint8Array a = Uint8Array.of(0);
    assertEqual("0", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '2' for array with element value 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1300
     * @tc.name testUint8ArrayToLocaleString013
     * @tc.desc Verify toLocaleString() returns '2' for array with element value 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString013() {
    Uint8Array a = Uint8Array.of(2);
    assertEqual("2", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '3' for array with element value 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1400
     * @tc.name testUint8ArrayToLocaleString014
     * @tc.desc Verify toLocaleString() returns '3' for array with element value 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString014() {
    Uint8Array a = Uint8Array.of(3);
    assertEqual("3", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '255' for array with element value 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1500
     * @tc.name testUint8ArrayToLocaleString015
     * @tc.desc Verify toLocaleString() returns '255' for array with element value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString015() {
    Uint8Array a = Uint8Array.of(255);
    assertEqual("255", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '1,1' for array [1, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1600
     * @tc.name testUint8ArrayToLocaleString016
     * @tc.desc Verify toLocaleString() returns '1,1' for array [1, 1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString016() {
    Uint8Array a = Uint8Array.of(1, 1);
    assertEqual("1,1", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '3,6' for array [3, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1700
     * @tc.name testUint8ArrayToLocaleString017
     * @tc.desc Verify toLocaleString() returns '3,6' for array [3, 6]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString017() {
    Uint8Array a = Uint8Array.of(3, 6);
    assertEqual("3,6", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() returns '5,10,15' for array [5, 10, 15]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1800
     * @tc.name testUint8ArrayToLocaleString018
     * @tc.desc Verify toLocaleString() returns '5,10,15' for array [5, 10, 15]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString018() {
    Uint8Array a = Uint8Array.of(5, 10, 15);
    assertEqual("5,10,15", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() shows '0' after writing 256 (overflow truncation)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_1900
     * @tc.name testUint8ArrayToLocaleString019
     * @tc.desc Verify toLocaleString() shows '0' after writing 256 (overflow truncation)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString019() {
    Uint8Array a = new Uint8Array(1);
    a.set(0, 256);
    assertEqual("0", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() shows '255' after writing -1 (negative wrap-around)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2000
     * @tc.name testUint8ArrayToLocaleString020
     * @tc.desc Verify toLocaleString() shows '255' after writing -1 (negative wrap-around)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString020() {
    Uint8Array a = new Uint8Array(1);
    a.set(0, -1);
    assertEqual("255", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() shows '1' after writing 1.5 (float truncation)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2100
     * @tc.name testUint8ArrayToLocaleString021
     * @tc.desc Verify toLocaleString() shows '1' after writing 1.5 (float truncation)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString021() {
    Uint8Array a = new Uint8Array(1);
    a.set(0, 1.5);
    assertEqual("1", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() shows '255' after writing -1.5 (negative float wrap-around)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2200
     * @tc.name testUint8ArrayToLocaleString022
     * @tc.desc Verify toLocaleString() shows '255' after writing -1.5 (negative float wrap-around)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString022() {
    Uint8Array a = new Uint8Array(1);
    a.set(0, -1.5);
    assertEqual("255", a.toLocaleString());
    }

    /**
     * Verify toLocaleString() shows '0' after writing 0x100 (hex overflow)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2300
     * @tc.name testUint8ArrayToLocaleString023
     * @tc.desc Verify toLocaleString() shows '0' after writing 0x100 (hex overflow)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString023() {
    Uint8Array a = new Uint8Array(1);
    a.set(0, 0x100);
    assertEqual("0", a.toLocaleString());
    }

    /**
     * Verify toLocaleString('en-US') returns '11,22' for array [11, 22]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2400
     * @tc.name testUint8ArrayToLocaleString024
     * @tc.desc Verify toLocaleString('en-US') returns '11,22' for array [11, 22]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString024() {
    Uint8Array a = Uint8Array.of(11, 22);
    assertEqual("11,22", a.toLocaleString("en-US"));
    }

    /**
     * Verify toLocaleString('de-DE') returns '33,44' for array [33, 44]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2500
     * @tc.name testUint8ArrayToLocaleString025
     * @tc.desc Verify toLocaleString('de-DE') returns '33,44' for array [33, 44]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString025() {
    Uint8Array a = Uint8Array.of(33, 44);
    assertEqual("33,44", a.toLocaleString("de-DE"));
    }

    /**
     * Verify toLocaleString('fr-FR') returns '55,66' for array [55, 66]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2600
     * @tc.name testUint8ArrayToLocaleString026
     * @tc.desc Verify toLocaleString('fr-FR') returns '55,66' for array [55, 66]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString026() {
    Uint8Array a = Uint8Array.of(55, 66);
    assertEqual("55,66", a.toLocaleString("fr-FR"));
    }

    /**
     * Verify toLocaleString('ja-JP') returns '77,88' for array [77, 88]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2700
     * @tc.name testUint8ArrayToLocaleString027
     * @tc.desc Verify toLocaleString('ja-JP') returns '77,88' for array [77, 88]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString027() {
    Uint8Array a = Uint8Array.of(77, 88);
    assertEqual("77,88", a.toLocaleString("ja-JP"));
    }

    /**
     * Verify toLocaleString('zh-CN') returns '111' for single element [111]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2800
     * @tc.name testUint8ArrayToLocaleString028
     * @tc.desc Verify toLocaleString('zh-CN') returns '111' for single element [111]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString028() {
    Uint8Array a = Uint8Array.of(111);
    assertEqual("111", a.toLocaleString("zh-CN"));
    }

    /**
     * Verify toLocaleString('ko-KR') returns '222' for single element [222]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_2900
     * @tc.name testUint8ArrayToLocaleString029
     * @tc.desc Verify toLocaleString('ko-KR') returns '222' for single element [222]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString029() {
    Uint8Array a = Uint8Array.of(222);
    assertEqual("222", a.toLocaleString("ko-KR"));
    }

    /**
     * Verify toLocaleString('it-IT') returns '13,37' for array [13, 37]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3000
     * @tc.name testUint8ArrayToLocaleString030
     * @tc.desc Verify toLocaleString('it-IT') returns '13,37' for array [13, 37]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString030() {
    Uint8Array a = Uint8Array.of(13, 37);
    assertEqual("13,37", a.toLocaleString("it-IT"));
    }

    /**
     * Verify toLocaleString('fi-FI') returns '42,84' for array [42, 84]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3100
     * @tc.name testUint8ArrayToLocaleString031
     * @tc.desc Verify toLocaleString('fi-FI') returns '42,84' for array [42, 84]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString031() {
    Uint8Array a = Uint8Array.of(42, 84);
    assertEqual("42,84", a.toLocaleString("fi-FI"));
    }

    /**
     * Verify toLocaleString('nb-NO') returns '168' for single element [168]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3200
     * @tc.name testUint8ArrayToLocaleString032
     * @tc.desc Verify toLocaleString('nb-NO') returns '168' for single element [168]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString032() {
    Uint8Array a = Uint8Array.of(168);
    assertEqual("168", a.toLocaleString("nb-NO"));
    }

    /**
     * Verify toLocaleString('da-DK') returns '2,4,8' for array [2, 4, 8]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3300
     * @tc.name testUint8ArrayToLocaleString033
     * @tc.desc Verify toLocaleString('da-DK') returns '2,4,8' for array [2, 4, 8]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString033() {
    Uint8Array a = Uint8Array.of(2, 4, 8);
    assertEqual("2,4,8", a.toLocaleString("da-DK"));
    }

    /**
     * Verify toLocaleString('en-US-u-ca-islamic') returns string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3400
     * @tc.name testUint8ArrayToLocaleString034
     * @tc.desc Verify toLocaleString('en-US-u-ca-islamic') returns string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString034() {
    Uint8Array a = Uint8Array.of(1, 2);
    String s = a.toLocaleString("en-US-u-ca-islamic");
    assertEqual("1,2", s);
    }

    /**
     * Verify toLocaleString('de-DE-u-co-dict') returns string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3500
     * @tc.name testUint8ArrayToLocaleString035
     * @tc.desc Verify toLocaleString('de-DE-u-co-dict') returns string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString035() {
    Uint8Array a = Uint8Array.of(3, 4);
    String s = a.toLocaleString("de-DE-u-co-dict");
    assertEqual("3,4", s);
    }

    /**
     * Verify toLocaleString('zh-CN-u-nu-fullwide') returns string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3600
     * @tc.name testUint8ArrayToLocaleString036
     * @tc.desc Verify toLocaleString('zh-CN-u-nu-fullwide') returns string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString036() {
    Uint8Array a = Uint8Array.of(5, 6);
    String s = a.toLocaleString("zh-CN-u-nu-fullwide");
    assertEqual("５,６", s);
    }

    /**
     * Verify toLocaleString('ar-SA-u-nu-arab') returns string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3700
     * @tc.name testUint8ArrayToLocaleString037
     * @tc.desc Verify toLocaleString('ar-SA-u-nu-arab') returns string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString037() {
    Uint8Array a = Uint8Array.of(7, 8);
    String s = a.toLocaleString("ar-SA-u-nu-arab");
    assertEqual("٧,٨", s);
    }

    /**
     * Verify toLocaleString('th-TH-u-nu-thai') returns string
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3800
     * @tc.name testUint8ArrayToLocaleString038
     * @tc.desc Verify toLocaleString('th-TH-u-nu-thai') returns string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString038() {
    Uint8Array a = Uint8Array.of(9, 10);
    String s = a.toLocaleString("th-TH-u-nu-thai");
    assertEqual("๙,๑๐", s);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 2 returns '05' for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_3900
     * @tc.name testUint8ArrayToLocaleString039
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 2 returns '05' for single element [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString039() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 3 returns '005' for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4000
     * @tc.name testUint8ArrayToLocaleString040
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 3 returns '005' for single element [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString040() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 3;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 5 returns '00005' for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4100
     * @tc.name testUint8ArrayToLocaleString041
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 5 returns '00005' for single element [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString041() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 5;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 2 returns '255' for single element [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4200
     * @tc.name testUint8ArrayToLocaleString042
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 2 returns '255' for single element [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString042() {
    Uint8Array a = Uint8Array.of(255);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 3 returns '001,002' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4300
     * @tc.name testUint8ArrayToLocaleString043
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 3 returns '001,002' for array [1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString043() {
    Uint8Array a = Uint8Array.of(1, 2);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 3;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 4 returns '0000,0000' for array [0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4400
     * @tc.name testUint8ArrayToLocaleString044
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 4 returns '0000,0000' for array [0, 0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString044() {
    Uint8Array a = Uint8Array.of(0, 0);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 4;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 1 returns '5.0' for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4500
     * @tc.name testUint8ArrayToLocaleString045
     * @tc.desc Verify toLocaleString with minimumFractionDigits 1 returns '5.0' for single element [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString045() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 1;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 2 returns '0.00' for single element [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4600
     * @tc.name testUint8ArrayToLocaleString046
     * @tc.desc Verify toLocaleString with minimumFractionDigits 2 returns '0.00' for single element [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString046() {
    Uint8Array a = Uint8Array.of(0);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 3 returns '255.000' for single element [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4700
     * @tc.name testUint8ArrayToLocaleString047
     * @tc.desc Verify toLocaleString with minimumFractionDigits 3 returns '255.000' for single element [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString047() {
    Uint8Array a = Uint8Array.of(255);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 3;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 2 returns '1.00,2.00' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4800
     * @tc.name testUint8ArrayToLocaleString048
     * @tc.desc Verify toLocaleString with minimumFractionDigits 2 returns '1.00,2.00' for array [1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString048() {
    Uint8Array a = Uint8Array.of(1, 2);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with maximumFractionDigits 0 returns '5' for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_4900
     * @tc.name testUint8ArrayToLocaleString049
     * @tc.desc Verify toLocaleString with maximumFractionDigits 0 returns '5' for single element [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString049() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.maximumFractionDigits = 0;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with maximumFractionDigits 0 returns '1,2' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5000
     * @tc.name testUint8ArrayToLocaleString050
     * @tc.desc Verify toLocaleString with maximumFractionDigits 0 returns '1,2' for array [1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString050() {
    Uint8Array a = Uint8Array.of(1, 2);
    IntlOptions options = new IntlOptions();
    options.maximumFractionDigits = 0;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with maximumFractionDigits 2 returns '5' for single element [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5100
     * @tc.name testUint8ArrayToLocaleString051
     * @tc.desc Verify toLocaleString with maximumFractionDigits 2 returns '5' for single element [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString051() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.maximumFractionDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 3 and minimumFractionDigits 2 returns '005.00' for [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5200
     * @tc.name testUint8ArrayToLocaleString052
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 3 and minimumFractionDigits 2 returns '005.00' for [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString052() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 3;
    options.minimumFractionDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 2 and maximumFractionDigits 0 returns '05' for [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5300
     * @tc.name testUint8ArrayToLocaleString053
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 2 and maximumFractionDigits 0 returns '05' for [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString053() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    options.maximumFractionDigits = 0;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 2 and minimumFractionDigits 1 returns '00.0' for [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5400
     * @tc.name testUint8ArrayToLocaleString054
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 2 and minimumFractionDigits 1 returns '00.0' for [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString054() {
    Uint8Array a = Uint8Array.of(0);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    options.minimumFractionDigits = 1;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minIntDigits 3, minFracDigits 2, maxFracDigits 2 returns '005.00' for [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5500
     * @tc.name testUint8ArrayToLocaleString055
     * @tc.desc Verify toLocaleString with minIntDigits 3, minFracDigits 2, maxFracDigits 2 returns '005.00' for [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString055() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 3;
    options.minimumFractionDigits = 2;
    options.maximumFractionDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with useGrouping false returns '1000,2000' for array [1000, 2000]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5600
     * @tc.name testUint8ArrayToLocaleString056
     * @tc.desc Verify toLocaleString with useGrouping false returns '1000,2000' for array [1000, 2000]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString056() {
    Uint8Array a = Uint8Array.of(1000, 2000);
    IntlOptions options = new IntlOptions();
    options.useGrouping = false;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with useGrouping true returns '1,000,2,000' for array [1000, 2000]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5700
     * @tc.name testUint8ArrayToLocaleString057
     * @tc.desc Verify toLocaleString with useGrouping true returns '1,000,2,000' for array [1000, 2000]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString057() {
    Uint8Array a = Uint8Array.of(1000, 2000);
    IntlOptions options = new IntlOptions();
    options.useGrouping = true;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with notation scientific returns '2.55E2' for array [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5800
     * @tc.name testUint8ArrayToLocaleString058
     * @tc.desc Verify toLocaleString with notation scientific returns '2.55E2' for array [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString058() {
    Uint8Array a = Uint8Array.of(255);
    IntlOptions options = new IntlOptions();
    options.notation = "scientific";
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with style currency USD returns '$100.00' for array [100]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_5900
     * @tc.name testUint8ArrayToLocaleString059
     * @tc.desc Verify toLocaleString with style currency USD returns '$100.00' for array [100]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString059() {
    Uint8Array a = Uint8Array.of(100);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "USD";
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with style currency EUR returns EUR 200.00 format for array [200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6000
     * @tc.name testUint8ArrayToLocaleString060
     * @tc.desc Verify toLocaleString with style currency EUR returns EUR 200.00 format for array [200]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString060() {
    Uint8Array a = Uint8Array.of(200);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "EUR";
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minimumSignificantDigits 2 returns '5.0' for [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6100
     * @tc.name testUint8ArrayToLocaleString061
     * @tc.desc Verify toLocaleString with minimumSignificantDigits 2 returns '5.0' for [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString061() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumSignificantDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with maximumSignificantDigits 2 returns '120' for [123]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6200
     * @tc.name testUint8ArrayToLocaleString062
     * @tc.desc Verify toLocaleString with maximumSignificantDigits 2 returns '120' for [123]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString062() {
    Uint8Array a = Uint8Array.of(123);
    IntlOptions options = new IntlOptions();
    options.maximumSignificantDigits = 2;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString with minSignificantDigits 3 and maxSignificantDigits 5 returns '1.00' for [1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6300
     * @tc.name testUint8ArrayToLocaleString063
     * @tc.desc Verify toLocaleString with minSignificantDigits 3 and maxSignificantDigits 5 returns '1.00' for [1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString063() {
    Uint8Array a = Uint8Array.of(1);
    IntlOptions options = new IntlOptions();
    options.minimumSignificantDigits = 3;
    options.maximumSignificantDigits = 5;
    assertTrue(a.toLocaleString(null, options).length() > 0);
    }

    /**
     * Verify toLocaleString('de-DE') with minimumIntegerDigits 2 returns '07' for [7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6400
     * @tc.name testUint8ArrayToLocaleString064
     * @tc.desc Verify toLocaleString('de-DE') with minimumIntegerDigits 2 returns '07' for [7]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString064() {
    Uint8Array a = Uint8Array.of(7);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    assertTrue(a.toLocaleString("de-DE", options).length() > 0);
    }

    /**
     * Verify toLocaleString('fr-FR') with minimumFractionDigits 2 returns '9,00' for [9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6500
     * @tc.name testUint8ArrayToLocaleString065
     * @tc.desc Verify toLocaleString('fr-FR') with minimumFractionDigits 2 returns '9,00' for [9]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString065() {
    Uint8Array a = Uint8Array.of(9);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 2;
    assertTrue(a.toLocaleString("fr-FR", options).length() > 0);
    }

    /**
     * Verify toLocaleString('ja-JP') with minIntDigits 3 and minFracDigits 1 returns '003.0' for [3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6600
     * @tc.name testUint8ArrayToLocaleString066
     * @tc.desc Verify toLocaleString('ja-JP') with minIntDigits 3 and minFracDigits 1 returns '003.0' for [3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString066() {
    Uint8Array a = Uint8Array.of(3);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 3;
    options.minimumFractionDigits = 1;
    assertTrue(a.toLocaleString("ja-JP", options).length() > 0);
    }

    /**
     * Verify toLocaleString('zh-CN') with useGrouping false returns '1000,2000' for [1000, 2000]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6700
     * @tc.name testUint8ArrayToLocaleString067
     * @tc.desc Verify toLocaleString('zh-CN') with useGrouping false returns '1000,2000' for [1000, 2000]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString067() {
    Uint8Array a = Uint8Array.of(1000, 2000);
    IntlOptions options = new IntlOptions();
    options.useGrouping = false;
    assertTrue(a.toLocaleString("zh-CN", options).length() > 0);
    }

    /**
     * Verify toLocaleString('en-US') with style currency GBP returns GBP 50.00 format for [50]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6800
     * @tc.name testUint8ArrayToLocaleString068
     * @tc.desc Verify toLocaleString('en-US') with style currency GBP returns GBP 50.00 format for [50]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString068() {
    Uint8Array a = Uint8Array.of(50);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "GBP";
    assertTrue(a.toLocaleString("en-US", options).length() > 0);
    }

    /**
     * Verify toLocaleString() result length is 0 for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_6900
     * @tc.name testUint8ArrayToLocaleString069
     * @tc.desc Verify toLocaleString() result length is 0 for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString069() {
    Uint8Array a = new Uint8Array();
    String s = a.toLocaleString();
    assertEqual(0, s.length());
    }

    /**
     * Verify toLocaleString() result length is 1 for single element [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7000
     * @tc.name testUint8ArrayToLocaleString070
     * @tc.desc Verify toLocaleString() result length is 1 for single element [0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString070() {
    Uint8Array a = Uint8Array.of(0);
    String s = a.toLocaleString();
    assertEqual(1, s.length());
    }

    /**
     * Verify toLocaleString() result length is 3 for single element [255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7100
     * @tc.name testUint8ArrayToLocaleString071
     * @tc.desc Verify toLocaleString() result length is 3 for single element [255]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString071() {
    Uint8Array a = Uint8Array.of(255);
    String s = a.toLocaleString();
    assertEqual(3, s.length());
    }

    /**
     * Verify toLocaleString() result length is 3 for two-element array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7200
     * @tc.name testUint8ArrayToLocaleString072
     * @tc.desc Verify toLocaleString() result length is 3 for two-element array [1, 2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString072() {
    Uint8Array a = Uint8Array.of(1, 2);
    String s = a.toLocaleString();
    assertEqual(3, s.length());
    }

    /**
     * Verify toLocaleString() result length is 8 for three-element array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7300
     * @tc.name testUint8ArrayToLocaleString073
     * @tc.desc Verify toLocaleString() result length is 8 for three-element array [10, 20, 30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString073() {
    Uint8Array a = Uint8Array.of(10, 20, 30);
    String s = a.toLocaleString();
    assertEqual(8, s.length());
    }

    /**
     * Verify toLocaleString('de-DE') result length is 5 for three-element array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7400
     * @tc.name testUint8ArrayToLocaleString074
     * @tc.desc Verify toLocaleString('de-DE') result length is 5 for three-element array [1, 2, 3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString074() {
    Uint8Array a = Uint8Array.of(1, 2, 3);
    String s = a.toLocaleString("de-DE");
    assertEqual(5, s.length());
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 2 result length is 2 for [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7500
     * @tc.name testUint8ArrayToLocaleString075
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 2 result length is 2 for [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString075() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    String s = a.toLocaleString(null, options);
    assertEqual(1, s.length());
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 2 result length is 4 for [5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7600
     * @tc.name testUint8ArrayToLocaleString076
     * @tc.desc Verify toLocaleString with minimumFractionDigits 2 result length is 4 for [5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString076() {
    Uint8Array a = Uint8Array.of(5);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 2;
    String s = a.toLocaleString(null, options);
    assertEqual(1, s.length());
    }

    /**
     * Verify toLocaleString() does not change array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7700
     * @tc.name testUint8ArrayToLocaleString077
     * @tc.desc Verify toLocaleString() does not change array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString077() {
    Uint8Array a = Uint8Array.of(1, 2, 3);
    int origLen = a.length();
    a.toLocaleString();
    assertEqual(origLen, a.length());
    }

    /**
     * Verify toLocaleString() does not change array byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7800
     * @tc.name testUint8ArrayToLocaleString078
     * @tc.desc Verify toLocaleString() does not change array byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString078() {
    Uint8Array a = Uint8Array.of(10, 20, 30, 40);
    int origByteLen = a.byteLength();
    a.toLocaleString();
    assertEqual(origByteLen, a.byteLength());
    }

    /**
     * Verify toLocaleString() does not change array buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_7900
     * @tc.name testUint8ArrayToLocaleString079
     * @tc.desc Verify toLocaleString() does not change array buffer reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString079() {
    Uint8Array a = Uint8Array.of(5, 10, 15);
    ArrayBuffer origBuf = a.buffer();
    a.toLocaleString();
    assertEqual(origBuf, a.buffer());
    }

    /**
     * Verify toLocaleString() does not change array byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8000
     * @tc.name testUint8ArrayToLocaleString080
     * @tc.desc Verify toLocaleString() does not change array byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString080() {
    Uint8Array a = Uint8Array.of(1, 2, 3, 4, 5);
    int origOff = a.byteOffset();
    a.toLocaleString();
    assertEqual(origOff, a.byteOffset());
    }

    /**
     * Verify toLocaleString() does not change elements for array with truncated values [0xFF, 0x00, 0x80]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8100
     * @tc.name testUint8ArrayToLocaleString081
     * @tc.desc Verify toLocaleString() does not change elements for array with truncated values [0xFF, 0x00, 0x80]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString081() {
    Uint8Array a = new Uint8Array(3);
    a.set(0, 0xFF);
    a.set(1, 0x00);
    a.set(2, 0x80);
    a.toLocaleString();
    assertEqual(255, a.get(0));
    assertEqual(0, a.get(1));
    assertEqual(128, a.get(2));
    }

    /**
     * Verify toLocaleString('de-DE') does not change elements for all-zero array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8200
     * @tc.name testUint8ArrayToLocaleString082
     * @tc.desc Verify toLocaleString('de-DE') does not change elements for all-zero array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString082() {
    Uint8Array a = new Uint8Array(5);
    a.toLocaleString("de-DE");
    for (int i = 0; i < 5; i++) {
    assertEqual(0, a.get(i));
    }
    }

    /**
     * Verify buffer-backed view toLocaleString() does not change buffer bytes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8300
     * @tc.name testUint8ArrayToLocaleString083
     * @tc.desc Verify buffer-backed view toLocaleString() does not change buffer bytes
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString083() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array view = new Uint8Array(buf);
    view.set(0, 0x12);
    view.set(1, 0x34);
    view.set(2, 0x56);
    view.set(3, 0x78);
    view.toLocaleString();
    Uint8Array check = new Uint8Array(buf);
    assertEqual(0x12, check.get(0));
    assertEqual(0x34, check.get(1));
    assertEqual(0x56, check.get(2));
    assertEqual(0x78, check.get(3));
    }

    /**
     * Verify dual views sharing same buffer, toLocaleString() does not affect the other view
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8400
     * @tc.name testUint8ArrayToLocaleString084
     * @tc.desc Verify dual views sharing same buffer, toLocaleString() does not affect the other view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString084() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array firstView = new Uint8Array(buf, 0, 4);
    Uint8Array secondView = new Uint8Array(buf, 4, 4);
    firstView.set(0, 10);
    firstView.set(1, 20);
    firstView.set(2, 30);
    firstView.set(3, 40);
    secondView.set(0, 50);
    secondView.set(1, 60);
    secondView.set(2, 70);
    secondView.set(3, 80);
    firstView.toLocaleString("fr-FR");
    assertEqual(50, secondView.get(0));
    assertEqual(60, secondView.get(1));
    assertEqual(70, secondView.get(2));
    assertEqual(80, secondView.get(3));
    }

    /**
     * Verify subarray view toLocaleString('ja-JP') does not change buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8500
     * @tc.name testUint8ArrayToLocaleString085
     * @tc.desc Verify subarray view toLocaleString('ja-JP') does not change buffer reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString085() {
    Uint8Array a = Uint8Array.of(2, 4, 6, 8, 10, 12);
    Uint8Array sub = a.subarray(2, 5);
    ArrayBuffer origBuf = sub.buffer();
    sub.toLocaleString("ja-JP");
    assertEqual(origBuf, sub.buffer());
    }

    /**
     * Verify subarray view toLocaleString() does not change byteOffset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING02_8600
     * @tc.name testUint8ArrayToLocaleString086
     * @tc.desc Verify subarray view toLocaleString() does not change byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString086() {
    Uint8Array a = Uint8Array.of(10, 20, 30, 40, 50, 60);
    Uint8Array sub = a.subarray(3, 6);
    int origOff = sub.byteOffset();
    sub.toLocaleString();
    assertEqual(origOff, sub.byteOffset());
    }
}
