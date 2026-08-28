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
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayToLocaleString01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayToLocaleString01Test extends BasTest {
    /**
     * Verify toLocaleString() with no parameters returns string
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0100
     * @tc.name testUint8ArrayToLocaleString001
     * @tc.desc Verify toLocaleString() with no parameters returns string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString001() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    String result = arr.toLocaleString();
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString(locales) with single valid string parameter
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0200
     * @tc.name testUint8ArrayToLocaleString002
     * @tc.desc Verify toLocaleString(locales) with single valid string parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString002() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    String result = arr.toLocaleString("en-US");
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString(undefined) with explicit undefined parameter
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0300
     * @tc.name testUint8ArrayToLocaleString003
     * @tc.desc Verify toLocaleString(undefined) with explicit undefined parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString003() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    String result = arr.toLocaleString();
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString(locales, options) with two parameters
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0400
     * @tc.name testUint8ArrayToLocaleString004
     * @tc.desc Verify toLocaleString(locales, options) with two parameters
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString004() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString(undefined, options) with undefined locales and empty options
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0500
     * @tc.name testUint8ArrayToLocaleString005
     * @tc.desc Verify toLocaleString(undefined, options) with undefined locales and empty options
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString005() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    String result = arr.toLocaleString(null, options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString(undefined, undefined) with both parameters undefined
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0600
     * @tc.name testUint8ArrayToLocaleString006
     * @tc.desc Verify toLocaleString(undefined, undefined) with both parameters undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString006() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    String result = arr.toLocaleString(null, null);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with zh-CN locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0700
     * @tc.name testUint8ArrayToLocaleString007
     * @tc.desc Verify toLocaleString with zh-CN locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString007() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with ja-JP locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0800
     * @tc.name testUint8ArrayToLocaleString008
     * @tc.desc Verify toLocaleString with ja-JP locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString008() {
    Uint8Array arr = Uint8Array.of(255, 0, 128);
    String result = arr.toLocaleString("ja-JP");
    assertEqual("255,0,128", result);
    }

    /**
     * Verify toLocaleString with de-DE locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_0900
     * @tc.name testUint8ArrayToLocaleString009
     * @tc.desc Verify toLocaleString with de-DE locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString009() {
    Uint8Array arr = Uint8Array.of(100);
    String result = arr.toLocaleString("de-DE");
    assertEqual("100", result);
    }

    /**
     * Verify toLocaleString with fr-FR locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1000
     * @tc.name testUint8ArrayToLocaleString010
     * @tc.desc Verify toLocaleString with fr-FR locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString010() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    String result = arr.toLocaleString("fr-FR");
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toLocaleString with ko-KR locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1100
     * @tc.name testUint8ArrayToLocaleString011
     * @tc.desc Verify toLocaleString with ko-KR locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString011() {
    Uint8Array arr = Uint8Array.of(7);
    String result = arr.toLocaleString("ko-KR");
    assertEqual("7", result);
    }

    /**
     * Verify toLocaleString with ar-SA locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1200
     * @tc.name testUint8ArrayToLocaleString012
     * @tc.desc Verify toLocaleString with ar-SA locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString012() {
    Uint8Array arr = Uint8Array.of(12, 34);
    String result = arr.toLocaleString("ar-SA");
    assertEqual("١٢,٣٤", result);
    }

    /**
     * Verify toLocaleString with th-TH locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1300
     * @tc.name testUint8ArrayToLocaleString013
     * @tc.desc Verify toLocaleString with th-TH locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString013() {
    Uint8Array arr = Uint8Array.of(200, 55);
    String result = arr.toLocaleString("th-TH");
    assertEqual("200,55", result);
    }

    /**
     * Verify toLocaleString with en-GB locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1400
     * @tc.name testUint8ArrayToLocaleString014
     * @tc.desc Verify toLocaleString with en-GB locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString014() {
    Uint8Array arr = Uint8Array.of(99, 77);
    String result = arr.toLocaleString("en-GB");
    assertEqual("99,77", result);
    }

    /**
     * Verify toLocaleString with es-ES locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1500
     * @tc.name testUint8ArrayToLocaleString015
     * @tc.desc Verify toLocaleString with es-ES locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString015() {
    Uint8Array arr = Uint8Array.of(1, 1, 1, 1);
    String result = arr.toLocaleString("es-ES");
    assertEqual("1,1,1,1", result);
    }

    /**
     * Verify toLocaleString with pt-BR locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1600
     * @tc.name testUint8ArrayToLocaleString016
     * @tc.desc Verify toLocaleString with pt-BR locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString016() {
    Uint8Array arr = Uint8Array.of(50, 60, 70, 80);
    String result = arr.toLocaleString("pt-BR");
    assertEqual("50,60,70,80", result);
    }

    /**
     * Verify toLocaleString with ru-RU locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1700
     * @tc.name testUint8ArrayToLocaleString017
     * @tc.desc Verify toLocaleString with ru-RU locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString017() {
    Uint8Array arr = Uint8Array.of(10, 20);
    String result = arr.toLocaleString("ru-RU");
    assertEqual("10,20", result);
    }

    /**
     * Verify toLocaleString with it-IT locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1800
     * @tc.name testUint8ArrayToLocaleString018
     * @tc.desc Verify toLocaleString with it-IT locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString018() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.toLocaleString("it-IT");
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with pl-PL locale
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_1900
     * @tc.name testUint8ArrayToLocaleString019
     * @tc.desc Verify toLocaleString with pl-PL locale
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString019() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    String result = arr.toLocaleString("pl-PL");
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toLocaleString with th-TH-u-nu-thai locale extension
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2000
     * @tc.name testUint8ArrayToLocaleString020
     * @tc.desc Verify toLocaleString with th-TH-u-nu-thai locale extension
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString020() {
    Uint8Array arr = Uint8Array.of(12, 34);
    String result = arr.toLocaleString("th-TH-u-nu-thai");
    assertEqual("๑๒,๓๔", result);
    }

    /**
     * Verify toLocaleString with de-DE-u-co-phonebk locale extension
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2100
     * @tc.name testUint8ArrayToLocaleString021
     * @tc.desc Verify toLocaleString with de-DE-u-co-phonebk locale extension
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString021() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    String result = arr.toLocaleString("de-DE-u-co-phonebk");
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with en-US-u-ca-buddhist locale extension
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2200
     * @tc.name testUint8ArrayToLocaleString022
     * @tc.desc Verify toLocaleString with en-US-u-ca-buddhist locale extension
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString022() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.toLocaleString("en-US-u-ca-buddhist");
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with ar-SA-u-nu-arab locale extension
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2300
     * @tc.name testUint8ArrayToLocaleString023
     * @tc.desc Verify toLocaleString with ar-SA-u-nu-arab locale extension
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString023() {
    Uint8Array arr = Uint8Array.of(200, 55);
    String result = arr.toLocaleString("ar-SA-u-nu-arab");
    assertEqual("٢٠٠,٥٥", result);
    }

    /**
     * Verify toLocaleString with zh-CN-u-nu-hanidec locale extension
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2400
     * @tc.name testUint8ArrayToLocaleString024
     * @tc.desc Verify toLocaleString with zh-CN-u-nu-hanidec locale extension
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString024() {
    Uint8Array arr = Uint8Array.of(255, 0, 128);
    String result = arr.toLocaleString("zh-CN-u-nu-hanidec");
    assertEqual("二五五,〇,一二八", result);
    }

    /**
     * Verify toLocaleString with ja-JP-u-ca-japanese locale extension
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2500
     * @tc.name testUint8ArrayToLocaleString025
     * @tc.desc Verify toLocaleString with ja-JP-u-ca-japanese locale extension
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString025() {
    Uint8Array arr = Uint8Array.of(100);
    String result = arr.toLocaleString("ja-JP-u-ca-japanese");
    assertEqual("100", result);
    }

    /**
     * Verify toLocaleString with EN-US uppercase locale tag
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2600
     * @tc.name testUint8ArrayToLocaleString026
     * @tc.desc Verify toLocaleString with EN-US uppercase locale tag
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString026() {
    Uint8Array arr = Uint8Array.of(7);
    String result = arr.toLocaleString("EN-US");
    assertEqual("7", result);
    }

    /**
     * Verify toLocaleString with i-default deprecated locale tag
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2700
     * @tc.name testUint8ArrayToLocaleString027
     * @tc.desc Verify toLocaleString with i-default deprecated locale tag
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.toLocaleString("i-default");
    fail();
    } catch (RangeError e) {
        assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    }

    /**
     * Verify toLocaleString with und undefined language tag
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2800
     * @tc.name testUint8ArrayToLocaleString028
     * @tc.desc Verify toLocaleString with und undefined language tag
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString028() {
    Uint8Array arr = Uint8Array.of(12, 34);
    String result = arr.toLocaleString("und");
    assertEqual("12,34", result);
    }

    /**
     * Verify toLocaleString with zh-Hans-CN locale tag
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_2900
     * @tc.name testUint8ArrayToLocaleString029
     * @tc.desc Verify toLocaleString with zh-Hans-CN locale tag
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString029() {
    Uint8Array arr = Uint8Array.of(200, 55);
    String result = arr.toLocaleString("zh-Hans-CN");
    assertEqual("200,55", result);
    }

    /**
     * Verify toLocaleString with sr-RS locale tag
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3000
     * @tc.name testUint8ArrayToLocaleString030
     * @tc.desc Verify toLocaleString with sr-RS locale tag
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString030() {
    Uint8Array arr = Uint8Array.of(255, 0, 128);
    String result = arr.toLocaleString("sr-RS");
    assertEqual("255,0,128", result);
    }

    /**
     * Verify toLocaleString with en-US locale and locales array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3100
     * @tc.name testUint8ArrayToLocaleString031
     * @tc.desc Verify toLocaleString with en-US locale and locales array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString031() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    String result = arr.toLocaleString(java.util.Arrays.asList("en-US"));
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with zh-CN locale and locales array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3200
     * @tc.name testUint8ArrayToLocaleString032
     * @tc.desc Verify toLocaleString with zh-CN locale and locales array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    String result = arr.toLocaleString(java.util.Arrays.asList("zh-CN"));
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with multiple locales array fallback
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3300
     * @tc.name testUint8ArrayToLocaleString033
     * @tc.desc Verify toLocaleString with multiple locales array fallback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString033() {
    Uint8Array arr = Uint8Array.of(255, 0, 128);
    String result = arr.toLocaleString(java.util.Arrays.asList("zh-CN", "en-US"));
    assertEqual("255,0,128", result);
    }

    /**
     * Verify toLocaleString with empty locales array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3400
     * @tc.name testUint8ArrayToLocaleString034
     * @tc.desc Verify toLocaleString with empty locales array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString034() {
    Uint8Array arr = Uint8Array.of(100);
    String result = arr.toLocaleString(new ArrayList<>());
    assertEqual("100", result);
    }

    /**
     * Verify toLocaleString with empty locales array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3500
     * @tc.name testUint8ArrayToLocaleString035
     * @tc.desc Verify toLocaleString with empty locales array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString035() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    String result = arr.toLocaleString(new ArrayList<>());
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toLocaleString with locales array containing multiple fallback locales
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3600
     * @tc.name testUint8ArrayToLocaleString036
     * @tc.desc Verify toLocaleString with locales array containing multiple fallback locales
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString036() {
    Uint8Array arr = Uint8Array.of(7);
    String result = arr.toLocaleString(java.util.Arrays.asList("de-DE", "fr-FR", "en-US"));
    assertEqual("7", result);
    }

    /**
     * Verify toLocaleString with style decimal option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3700
     * @tc.name testUint8ArrayToLocaleString037
     * @tc.desc Verify toLocaleString with style decimal option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString037() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.style = "decimal";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with style currency and USD does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3800
     * @tc.name testUint8ArrayToLocaleString038
     * @tc.desc Verify toLocaleString with style currency and USD does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "USD";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with style percent does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_3900
     * @tc.name testUint8ArrayToLocaleString039
     * @tc.desc Verify toLocaleString with style percent does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString039() {
    Uint8Array arr = Uint8Array.of(255, 0, 128);
    IntlOptions options = new IntlOptions();
    options.style = "percent";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("255,0,128", result);
    }

    /**
     * Verify toLocaleString with useGrouping true does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4000
     * @tc.name testUint8ArrayToLocaleString040
     * @tc.desc Verify toLocaleString with useGrouping true does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString040() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.useGrouping = true;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with useGrouping false does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4100
     * @tc.name testUint8ArrayToLocaleString041
     * @tc.desc Verify toLocaleString with useGrouping false does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString041() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.useGrouping = false;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 1 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4200
     * @tc.name testUint8ArrayToLocaleString042
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 1 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 1;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 2 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4300
     * @tc.name testUint8ArrayToLocaleString043
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 2 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString043() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 2;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 3 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4400
     * @tc.name testUint8ArrayToLocaleString044
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 3 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 3;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with minimumIntegerDigits 5 option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4500
     * @tc.name testUint8ArrayToLocaleString045
     * @tc.desc Verify toLocaleString with minimumIntegerDigits 5 option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.minimumIntegerDigits = 5;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 0 option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4600
     * @tc.name testUint8ArrayToLocaleString046
     * @tc.desc Verify toLocaleString with minimumFractionDigits 0 option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString046() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 0;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 2 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4700
     * @tc.name testUint8ArrayToLocaleString047
     * @tc.desc Verify toLocaleString with minimumFractionDigits 2 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString047() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 2;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 3 option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4800
     * @tc.name testUint8ArrayToLocaleString048
     * @tc.desc Verify toLocaleString with minimumFractionDigits 3 option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString048() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 3;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with maximumFractionDigits 3 option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_4900
     * @tc.name testUint8ArrayToLocaleString049
     * @tc.desc Verify toLocaleString with maximumFractionDigits 3 option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString049() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.maximumFractionDigits = 3;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 2 does not throw and maximumFractionDigits 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5000
     * @tc.name testUint8ArrayToLocaleString050
     * @tc.desc Verify toLocaleString with minimumFractionDigits 2 does not throw and maximumFractionDigits 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString050() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 2;
    options.maximumFractionDigits = 4;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumFractionDigits 3 and maximumFractionDigits 5 options does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5100
     * @tc.name testUint8ArrayToLocaleString051
     * @tc.desc Verify toLocaleString with minimumFractionDigits 3 and maximumFractionDigits 5 options does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString051() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumFractionDigits = 3;
    options.maximumFractionDigits = 5;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumSignificantDigits 1 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5200
     * @tc.name testUint8ArrayToLocaleString052
     * @tc.desc Verify toLocaleString with minimumSignificantDigits 1 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString052() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumSignificantDigits = 1;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with minimumSignificantDigits 2 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5300
     * @tc.name testUint8ArrayToLocaleString053
     * @tc.desc Verify toLocaleString with minimumSignificantDigits 2 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString053() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.minimumSignificantDigits = 2;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with maximumSignificantDigits 1 option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5400
     * @tc.name testUint8ArrayToLocaleString054
     * @tc.desc Verify toLocaleString with maximumSignificantDigits 1 option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString054() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.maximumSignificantDigits = 1;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with maximumSignificantDigits 3 does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5500
     * @tc.name testUint8ArrayToLocaleString055
     * @tc.desc Verify toLocaleString with maximumSignificantDigits 3 does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString055() {
    Uint8Array arr = Uint8Array.of(123, 45, 67);
    IntlOptions options = new IntlOptions();
    options.maximumSignificantDigits = 3;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("123,45,67", result);
    }

    /**
     * Verify toLocaleString with currencyDisplay symbol does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5600
     * @tc.name testUint8ArrayToLocaleString056
     * @tc.desc Verify toLocaleString with currencyDisplay symbol does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString056() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "USD";
    options.currencyDisplay = "symbol";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with currencyDisplay name option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5700
     * @tc.name testUint8ArrayToLocaleString057
     * @tc.desc Verify toLocaleString with currencyDisplay name option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "USD";
    options.currencyDisplay = "name";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with currencyDisplay name for EUR option does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5800
     * @tc.name testUint8ArrayToLocaleString058
     * @tc.desc Verify toLocaleString with currencyDisplay name for EUR option does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString058() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    IntlOptions options = new IntlOptions();
    options.style = "currency";
    options.currency = "EUR";
    options.currencyDisplay = "name";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,2,3", result);
    }

    /**
     * Verify toLocaleString with notation scientific does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_5900
     * @tc.name testUint8ArrayToLocaleString059
     * @tc.desc Verify toLocaleString with notation scientific does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString059() {
    Uint8Array arr = Uint8Array.of(100);
    IntlOptions options = new IntlOptions();
    options.notation = "scientific";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("100", result);
    }

    /**
     * Verify toLocaleString with notation engineering does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_6000
     * @tc.name testUint8ArrayToLocaleString060
     * @tc.desc Verify toLocaleString with notation engineering does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString060() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    IntlOptions options = new IntlOptions();
    options.notation = "engineering";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("0,0,0", result);
    }

    /**
     * Verify toLocaleString with notation compact does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_6100
     * @tc.name testUint8ArrayToLocaleString061
     * @tc.desc Verify toLocaleString with notation compact does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString061() {
    Uint8Array arr = Uint8Array.of(7);
    IntlOptions options = new IntlOptions();
    options.notation = "compact";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("7", result);
    }

    /**
     * Verify toLocaleString with notation compact does not throw and compactDisplay long
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_6200
     * @tc.name testUint8ArrayToLocaleString062
     * @tc.desc Verify toLocaleString with notation compact does not throw and compactDisplay long
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString062() {
    Uint8Array arr = Uint8Array.of(99, 77);
    IntlOptions options = new IntlOptions();
    options.notation = "compact";
    options.compactDisplay = "long";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("99,77", result);
    }

    /**
     * Verify toLocaleString with localeMatcher lookup does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_6300
     * @tc.name testUint8ArrayToLocaleString063
     * @tc.desc Verify toLocaleString with localeMatcher lookup does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString063() {
    Uint8Array arr = Uint8Array.of(12, 34);
    IntlOptions options = new IntlOptions();
    options.localeMatcher = "lookup";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("12,34", result);
    }

    /**
     * Verify toLocaleString with localeMatcher best fit does not throw
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_LOCALE_STRING01_6400
     * @tc.name testUint8ArrayToLocaleString064
     * @tc.desc Verify toLocaleString with localeMatcher best fit does not throw
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToLocaleString064() {
    Uint8Array arr = Uint8Array.of(1, 1, 1, 1);
    IntlOptions options = new IntlOptions();
    options.localeMatcher = "best fit";
    String result = arr.toLocaleString("en-US", options);
    assertEqual("1,1,1,1", result);
    }
    }
