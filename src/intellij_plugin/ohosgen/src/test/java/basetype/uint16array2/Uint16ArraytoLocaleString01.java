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

package basetype.uint16array2;

import basetype.ArrayBuffer;
import basetype.BasTest;
import basetype.EntryResult;
import basetype.Error;
import basetype.Int8Array;
import basetype.IteratorResult;
import basetype.RangeError;
import basetype.TypeError;
import basetype.Uint16Array;
import basetype.DataView;
import basetype.Float32Array;
import basetype.Float64Array;
import basetype.Int32Array;
import basetype.IntlOptions;
import basetype.NullPointerError;
import basetype.Uint8Array;
import basetype.Uint8ClampedArray;
import basetype.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArraytoLocaleString01 —— Int16Array 方法族测试。
 */
public class Uint16ArraytoLocaleString01 extends BasTest {

    @Test
    void testUint16ArrayToLocaleStringPart1001() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString();
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1002() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("en-US");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1003() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions();
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1004() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String locales = null;
    String result = arr.toLocaleString(locales);
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1005() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1006() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("de-DE");
    assertEqual("1.000,2.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1007() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("ja-JP");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1008() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("ar-SA");
    assertEqual("١٬٠٠٠,٢٬٠٠٠", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1009() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("th-TH");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1010() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("en-GB");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1011() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("fr-FR");
    assertEqual("1 000,2 000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1012() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("ko-KR");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1013() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("ru-RU");
    assertEqual("1 000,2 000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1014() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("es-ES");
    assertEqual("1000,2000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1015() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("it-IT");
    assertEqual("1.000,2.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1016() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("pt-BR");
    assertEqual("1.000,2.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1017() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("zh-TW");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1018() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("zh-HK");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1019() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("en-AU");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1020() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("en-CA");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1021() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("sv-SE");
    assertEqual("1 000,2 000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1022() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("nb-NO");
    assertEqual("1 000,2 000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1023() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("da-DK");
    assertEqual("1.000,2.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1024() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("fi-FI");
    assertEqual("1 000,2 000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1025() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("pl-PL");
    assertEqual("1000,2000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1026() {
    Uint16Array arr = Uint16Array.of(1837, 426);
    try {
    arr.toLocaleString("");
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayToLocaleStringPart1027() {
    Uint16Array arr = Uint16Array.of(1350, 2400);
    List<String> localeList = new ArrayList<>();
    String result = arr.toLocaleString(localeList);
    assertEqual("1,350,2,400", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1028() {
    Uint16Array arr = Uint16Array.of(2468, 1357);
    List<String> localeList = java.util.Arrays.asList("en-US", "de-DE");
    String result = arr.toLocaleString(localeList);
    assertEqual("2,468,1,357", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1029() {
    Uint16Array arr = Uint16Array.of(3210, 4500);
    String result = arr.toLocaleString("und");
    assertEqual("3,210,4,500", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1030() {
    Uint16Array arr = Uint16Array.of(764, 2891);
    try {
    arr.toLocaleString("C");
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayToLocaleStringPart1031() {
    Uint16Array arr = Uint16Array.of(5073, 918);
    try {
    arr.toLocaleString("invalid-locale-tag");
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayToLocaleStringPart1032() {
    Uint16Array arr = Uint16Array.of(5678, 9012);
    String result = arr.toLocaleString("en-US", null);
    assertEqual("5,678,9,012", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1033() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions options = new IntlOptions(); options.minimumIntegerDigits = 2;
    String result = arr.toLocaleString("en-US", options);
    assertEqual("05,50", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1034() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumIntegerDigits = 5;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("00,005,00,050", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1035() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.minimumFractionDigits = 0;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1036() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.minimumFractionDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.00,2,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1037() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.minimumFractionDigits = 3;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.000,2,000.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1038() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.maximumFractionDigits = 0;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1039() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.maximumFractionDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1040() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumSignificantDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("5.0,50", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1041() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumSignificantDigits = 5;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("5.0000,50.000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1042() {
    Uint16Array arr = Uint16Array.of(12345, 67890);
    IntlOptions opts = new IntlOptions(); opts.maximumSignificantDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("12,000,2,400", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1043() {
    Uint16Array arr = Uint16Array.of(12345, 67890);
    IntlOptions opts = new IntlOptions(); opts.maximumSignificantDigits = 5;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("12,345,2,354", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1044() {
    Uint16Array arr = Uint16Array.of(10000, 20000);
    IntlOptions opts = new IntlOptions(); opts.useGrouping = false;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("10000,20000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1045() {
    Uint16Array arr = Uint16Array.of(10000, 20000);
    IntlOptions opts = new IntlOptions(); opts.useGrouping = true;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("10,000,20,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1046() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "decimal";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1047() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "percent";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("100,000%,200,000%", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1048() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "USD";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("$1,000.00,$2,000.00", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1049() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "EUR";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("€1,000.00,€2,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1050() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "JPY";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("¥1,000,¥2,000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1051() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "GBP";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("£1,000.00,£2,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1052() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.notation = "scientific";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1E3,2E3", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1053() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.notation = "engineering";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1E3,2E3", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1054() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.notation = "compact"; opts.compactDisplay = "short";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1K,2K", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1055() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.compactDisplay = "short";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1056() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.compactDisplay = "long";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000,2,000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1057() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "USD"; opts.currencyDisplay = "symbol";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("$1,000.00,$2,000.00", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1058() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "USD"; opts.currencyDisplay = "code";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("USD 1,000.00,USD 2,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1059() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "USD"; opts.currencyDisplay = "name";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.00 US dollars,2,000.00 US dollars", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1060() {
    Uint16Array arr = Uint16Array.of(100, 200);
    IntlOptions opts = new IntlOptions(); opts.minimumIntegerDigits = 2; opts.useGrouping = false;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("100,200", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1061() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.minimumFractionDigits = 2; opts.maximumFractionDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.00,2,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1062() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumIntegerDigits = 3; opts.minimumFractionDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("005.00,050.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1063() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "EUR"; opts.currencyDisplay = "code";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("EUR 1,000.00,EUR 2,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1064() {
    Uint16Array arr = Uint16Array.of(10000, 20000);
    IntlOptions opts = new IntlOptions(); opts.notation = "compact"; opts.compactDisplay = "long";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("10 thousand,20 thousand", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1065() {
    Uint16Array arr = Uint16Array.of(100, 200);
    IntlOptions opts = new IntlOptions(); opts.minimumIntegerDigits = 4; opts.useGrouping = true; opts.minimumFractionDigits = 2;
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("0,100.00,0,200.00", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1066() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.minimumFractionDigits = 2;
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("1.000,00,2.000,00", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1067() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "percent";
    String result = arr.toLocaleString("zh-CN", opts);
    assertEqual("100,000%,200,000%", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart1068() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.notation = "scientific";
    String result = arr.toLocaleString("ja-JP", opts);
    assertEqual("1E3,2E3", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1069() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumIntegerDigits = 3;
    String result = arr.toLocaleString("ar-SA", opts);
    assertEqual("٠٠٥,٠٥٠", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1070() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.minimumFractionDigits = 2;
    String result = arr.toLocaleString("th-TH", opts);
    assertEqual("1,000.00,2,000.00", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1071() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("en-US");
    assertEqual("1,000,2,000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1072() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "USD";
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("1.000,00 $,2.000,00 $", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1073() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumIntegerDigits = 4;
    String result = arr.toLocaleString("zh-CN", opts);
    assertEqual("0,005,0,050", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1074() {
    Uint16Array arr = Uint16Array.of(10000, 20000);
    IntlOptions opts = new IntlOptions(); opts.useGrouping = false;
    String result = arr.toLocaleString("ko-KR", opts);
    assertEqual("10000,20000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1075() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.notation = "engineering";
    String result = arr.toLocaleString("it-IT", opts);
    assertEqual("1E3,2E3", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1076() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "GBP"; opts.currencyDisplay = "name";
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.00 British pounds,2,000.00 British pounds", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1077() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    IntlOptions opts = new IntlOptions(); opts.style = "currency"; opts.currency = "JPY";
    String result = arr.toLocaleString("ja-JP", opts);
    assertEqual("￥1,000,￥2,000", result);

    }

    @Test
    void testUint16ArrayToLocaleStringPart1078() {
    Uint16Array arr = Uint16Array.of(5, 50);
    IntlOptions opts = new IntlOptions(); opts.minimumSignificantDigits = 3;
    String result = arr.toLocaleString("es-ES", opts);
    assertEqual("5,00,50,0", result);

    }
}
