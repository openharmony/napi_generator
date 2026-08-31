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

import basetype.common.BasTest;
import basetype.common.Uint16Array;
import basetype.common.IntlOptions;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArraytoLocaleString02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArraytoLocaleString02 extends BasTest {

    @Test
    void testUint16ArrayToLocaleStringPart2001() {
    Uint16Array arr = Uint16Array.of(1234, 5678);
    String result = arr.toLocaleString("en-US");
    assertEqual("1,234,5,678", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2002() {
    Uint16Array arr = Uint16Array.of(2345, 6789);
    String result = arr.toLocaleString("de-DE");
    assertEqual("2.345,6.789", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2003() {
    Uint16Array arr = Uint16Array.of(3456, 7890);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("3,456,7,890", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2004() {
    Uint16Array arr = Uint16Array.of(4567, 8901);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("4,567.00,8,901.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2005() {
    Uint16Array arr = new Uint16Array();
    String result = arr.toLocaleString();
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2006() {
    Uint16Array arr = Uint16Array.of(42);
    String result = arr.toLocaleString();
    assertEqual("42", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2007() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.set(4, 50);
    String result = arr.toLocaleString();
    assertEqual("10,20,30,40,50", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2008() {
    Uint16Array arr = Uint16Array.of(0);
    String result = arr.toLocaleString();
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2009() {
    Uint16Array arr = Uint16Array.of(65535);
    String result = arr.toLocaleString("en-US");
    assertEqual("65,535", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2010() {
    Uint16Array arr = Uint16Array.of(1000);
    String result = arr.toLocaleString("en-US");
    assertEqual("1,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2011() {
    Uint16Array arr = Uint16Array.of(1000);
    String result = arr.toLocaleString("de-DE");
    assertEqual("1.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2012() {
    Uint16Array arr = Uint16Array.of(0, 0);
    String result = arr.toLocaleString();
    assertEqual("0,0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2013() {
    Uint16Array arr = Uint16Array.of(1, 2);
    String result = arr.toLocaleString();
    assertEqual("1,2", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2014() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    String result = arr.toLocaleString();
    assertEqual("10,20,30", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2015() {
    Uint16Array arr = Uint16Array.of(0);
    String result = arr.toLocaleString("en-US");
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2016() {
    Uint16Array arr = Uint16Array.of(5);
    String result = arr.toLocaleString("en-US");
    assertEqual("5", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2017() {
    Uint16Array arr = Uint16Array.of(10);
    String result = arr.toLocaleString("en-US");
    assertEqual("10", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2018() {
    Uint16Array arr = Uint16Array.of(100);
    String result = arr.toLocaleString("en-US");
    assertEqual("100", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2019() {
    Uint16Array arr = Uint16Array.of(10000);
    String result = arr.toLocaleString("en-US");
    assertEqual("10,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2020() {
    Uint16Array arr = Uint16Array.of(32768);
    String result = arr.toLocaleString("en-US");
    assertEqual("32,768", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2021() {
    Uint16Array arr = Uint16Array.of(0, 0);
    String result = arr.toLocaleString("en-US");
    assertEqual("0,0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2022() {
    Uint16Array arr = Uint16Array.of(1, 2);
    String result = arr.toLocaleString("en-US");
    assertEqual("1,2", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2023() {
    Uint16Array arr = Uint16Array.of(1000, 2000, 3000);
    String result = arr.toLocaleString("en-US");
    assertEqual("1,000,2,000,3,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2024() {
    Uint16Array arr = Uint16Array.of(17, 4096, 65535, 802);
    String result = arr.toLocaleString("en-US");
    assertEqual("17,4,096,65,535,802", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2025() {
    Uint16Array arr = Uint16Array.of(54321, 9, 1200, 77, 30005);
    String result = arr.toLocaleString("en-US");
    assertEqual("54,321,9,1,200,77,30,005", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2026() {
    Uint16Array arr = Uint16Array.of(10, 100, 1000, 10000);
    String result = arr.toLocaleString("en-US");
    assertEqual("10,100,1,000,10,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2027() {
    Uint16Array arr = Uint16Array.of(0);
    String result = arr.toLocaleString("de-DE");
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2028() {
    Uint16Array arr = Uint16Array.of(5);
    String result = arr.toLocaleString("de-DE");
    assertEqual("5", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2029() {
    Uint16Array arr = Uint16Array.of(1000);
    String result = arr.toLocaleString("de-DE");
    assertEqual("1.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2030() {
    Uint16Array arr = Uint16Array.of(10000);
    String result = arr.toLocaleString("de-DE");
    assertEqual("10.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2031() {
    Uint16Array arr = Uint16Array.of(65535);
    String result = arr.toLocaleString("de-DE");
    assertEqual("65.535", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2032() {
    Uint16Array arr = Uint16Array.of(32768);
    String result = arr.toLocaleString("de-DE");
    assertEqual("32.768", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2033() {
    Uint16Array arr = Uint16Array.of(0, 0);
    String result = arr.toLocaleString("de-DE");
    assertEqual("0,0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2034() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("de-DE");
    assertEqual("1.000,2.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2035() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    String result = arr.toLocaleString("de-DE");
    assertEqual("100,200,300", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2036() {
    Uint16Array arr = Uint16Array.of(0);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2037() {
    Uint16Array arr = Uint16Array.of(1000);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("1,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2038() {
    Uint16Array arr = Uint16Array.of(10000);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("10,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2039() {
    Uint16Array arr = Uint16Array.of(65535);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("65,535", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2040() {
    Uint16Array arr = Uint16Array.of(32768);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("32,768", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2041() {
    Uint16Array arr = Uint16Array.of(12345);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("12,345", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2042() {
    Uint16Array arr = Uint16Array.of(0, 0);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("0,0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2043() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("1,000,2,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2044() {
    Uint16Array arr = Uint16Array.of(5, 50, 500);
    String result = arr.toLocaleString("zh-CN");
    assertEqual("5,50,500", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2045() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2046() {
    Uint16Array arr = Uint16Array.of(0);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(3);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("0.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2047() {
    Uint16Array arr = Uint16Array.of(65535);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("65,535.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2048() {
    Uint16Array arr = Uint16Array.of(5);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(4);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("5.0000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2049() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("1.000,00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2050() {
    Uint16Array arr = Uint16Array.of(0);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(3);
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("0,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2051() {
    Uint16Array arr = Uint16Array.of(65535);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("65.535,00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2052() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    String result = arr.toLocaleString("zh-CN", opts);
    assertEqual("1,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2053() {
    Uint16Array arr = Uint16Array.of(12345);
    IntlOptions opts = new IntlOptions();
    opts.setMaximumFractionDigits(0);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("12,345", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2054() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMaximumFractionDigits(0);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2055() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMaximumFractionDigits(0);
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("1.000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2056() {
    Uint16Array arr = Uint16Array.of(65535);
    IntlOptions opts = new IntlOptions();
    opts.setMaximumFractionDigits(0);
    String result = arr.toLocaleString("zh-CN", opts);
    assertEqual("65,535", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2057() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    opts.setMaximumFractionDigits(2);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("1,000.00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2058() {
    Uint16Array arr = Uint16Array.of(5);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(1);
    opts.setMaximumFractionDigits(1);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("5.0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2059() {
    Uint16Array arr = Uint16Array.of(1000);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    opts.setMaximumFractionDigits(3);
    String result = arr.toLocaleString("de-DE", opts);
    assertEqual("1.000,00", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2060() {
    Uint16Array arr = Uint16Array.of(0);
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(0);
    opts.setMaximumFractionDigits(0);
    String result = arr.toLocaleString("en-US", opts);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2061() {
    Uint16Array arr = Uint16Array.of(1000, 2000, 3000);
    int backup0 = arr.get(0);
    int backup1 = arr.get(1);
    int backup2 = arr.get(2);
    arr.toLocaleString();
    assertEqualInt(backup0, arr.get(0));
    assertEqualInt(backup1, arr.get(1));
    assertEqualInt(backup2, arr.get(2));
    }

    @Test
    void testUint16ArrayToLocaleStringPart2062() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    int lenBefore = arr.length();
    arr.toLocaleString("en-US");
    assertEqual(lenBefore, arr.length());
    }

    @Test
    void testUint16ArrayToLocaleStringPart2063() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    Uint16Array backup = Uint16Array.of(arr.get(0), arr.get(1));
    arr.toLocaleString("de-DE");
    assertEqual(backup.get(0).intValue(), arr.get(0).intValue());
    assertEqual(backup.get(1).intValue(), arr.get(1).intValue());
    }

    @Test
    void testUint16ArrayToLocaleStringPart2064() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    Uint16Array backup = Uint16Array.of(arr.get(0), arr.get(1));
    IntlOptions opts = new IntlOptions();
    opts.setMinimumFractionDigits(2);
    arr.toLocaleString("en-US", opts);
    assertEqual(backup.get(0).intValue(), arr.get(0).intValue());
    assertEqual(backup.get(1).intValue(), arr.get(1).intValue());
    }

    @Test
    void testUint16ArrayToLocaleStringPart2065() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    Uint16Array backup = Uint16Array.of(arr.get(0), arr.get(1));
    arr.toLocaleString("zh-CN");
    assertEqual(backup.get(0).intValue(), arr.get(0).intValue());
    assertEqual(backup.get(1).intValue(), arr.get(1).intValue());
    }

    @Test
    void testUint16ArrayToLocaleStringPart2066() {
    Uint16Array arr = new Uint16Array();
    arr.toLocaleString();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16ArrayToLocaleStringPart2067() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    String r1 = arr.toLocaleString("en-US");
    String r2 = arr.toLocaleString("en-US");
    assertEqual(r2, r1);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2068() {
    Uint16Array arr = Uint16Array.of(1000, 2000);
    Uint16Array backup = Uint16Array.of(arr.get(0), arr.get(1));
    arr.toLocaleString("en-US");
    arr.toLocaleString("de-DE");
    arr.toLocaleString("zh-CN");
    assertEqual(backup.get(0).intValue(), arr.get(0).intValue());
    assertEqual(backup.get(1).intValue(), arr.get(1).intValue());
    }

    @Test
    void testUint16ArrayToLocaleStringPart2069() {
    Uint16Array arr = Uint16Array.of(65535);
    String result = arr.toLocaleString("en-US");
    assertEqual("65,535", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2070() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    String result = arr.toLocaleString("en-US");
    assertEqual("0,0,0", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2071() {
    Uint16Array arr = Uint16Array.of(65535, 65535);
    String result = arr.toLocaleString("en-US");
    assertEqual("65,535,65,535", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2072() {
    Uint16Array arr = Uint16Array.of(0x0A);
    String result = arr.toLocaleString("en-US");
    assertEqual("10", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2073() {
    Uint16Array arr = Uint16Array.of(0b1010);
    String result = arr.toLocaleString("en-US");
    assertEqual("10", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2074() {
    Uint16Array arr = Uint16Array.of(012);
    String result = arr.toLocaleString("en-US");
    assertEqual("10", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2075() {
    Uint16Array arr = Uint16Array.of(1e4);
    String result = arr.toLocaleString("en-US");
    assertEqual("10,000", result);
    }

    @Test
    void testUint16ArrayToLocaleStringPart2076() {
    Uint16Array source = Uint16Array.of(10, 20, 30);
    Uint16Array copied = new Uint16Array(source);
    copied.set(0, 99);
    assertEqualInt(10, source.get(0));
    }
}
