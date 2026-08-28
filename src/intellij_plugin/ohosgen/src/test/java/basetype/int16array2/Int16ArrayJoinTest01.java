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
 * Int16ArrayJoinTest01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayJoinTest01 extends BasTest {

    @Test
    void testInt16ArrayJoinTestOne001() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join();
    assertEqual("10,20,30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne002() {
    Int16Array arr = new Int16Array(0);
    String actual1 = arr.join();
    assertEqual("", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne003() {
    Int16Array arr = Int16Array.of(42);
    String actual1 = arr.join();
    assertEqual("42", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne004() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("|");
    assertEqual("10|20|30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne005() {
    Int16Array arr = Int16Array.of(10, 20);
    String actual1 = arr.join();
    assertEqual("10,20", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne006() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    String actual1 = arr.join();
    assertEqual("10,20,30,40", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne007() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("");
    assertEqual("102030", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne008() {
    Int16Array arr = new Int16Array(0);
    String actual1 = arr.join("");
    assertEqual("", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne009() {
    Int16Array arr = Int16Array.of(42);
    String actual1 = arr.join("");
    assertEqual("42", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne010() {
    Int16Array arr = Int16Array.of(10, 20);
    String actual1 = arr.join("");
    assertEqual("1020", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne011() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(",");
    assertEqual("10,20,30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne012() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("-");
    assertEqual("10-20-30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne013() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(";");
    assertEqual("10;20;30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne014() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(" ");
    assertEqual("10 20 30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne015() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(", ");
    assertEqual("10, 20, 30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne016() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(" -- ");
    assertEqual("10 -- 20 -- 30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne017() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("###");
    assertEqual("10###20###30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne018() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("ab");
    assertEqual("10ab20ab30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne019() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("::");
    assertEqual("10::20::30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne020() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("xyz");
    assertEqual("10xyz20xyz30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne021() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\n");
    assertEqual("10\n20\n30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne022() {
    Int16Array arr = new Int16Array(0);
    String actual1 = arr.join("\n");
    assertEqual("", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne023() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\t");
    assertEqual("10\t20\t30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne024() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\\");
    assertEqual("10\\20\\30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne025() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\r");
    assertEqual("10\r20\r30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne026() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\r\n");
    assertEqual("10\r\n20\r\n30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne027() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\u0000");
    String expected1 = "10" + "\u0000" + "20" + "\u0000" + "30";
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne028() {
    Int16Array arr = Int16Array.of(10, 20);
    String actual1 = arr.join("<script>");
    assertEqual("10<script>20", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne029() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("&");
    assertEqual("10&20&30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne030() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("<");
    assertEqual("10<20<30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne031() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(">");
    assertEqual("10>20>30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne032() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\"");
    assertEqual("10\"20\"30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne033() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("'");
    String expected1 = "10'20'30";
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne034() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("0");
    assertEqual("10020030", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne035() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(".");
    assertEqual("10.20.30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne036() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("e");
    assertEqual("10e20e30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne037() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("+");
    assertEqual("10+20+30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne038() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("中文");
    assertEqual("10中文20中文30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne039() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("😀");
    assertEqual("10😀20😀30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne040() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("ñ");
    assertEqual("10ñ20ñ30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne041() {
    String sep = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    Int16Array arr = Int16Array.of(10, 20);
    String result = arr.join(sep);
    String[] parts = result.split(java.util.regex.Pattern.quote("10"));
    int actual1 = parts.length;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne042() {
    String sep = "";
    for (int i = 0; i < 500; i++) {
    sep = sep + "x";
    }
    Int16Array arr = Int16Array.of(10, 20);
    String result = arr.join(sep);
    String[] parts = result.split(java.util.regex.Pattern.quote("10"));
    int actual1 = parts.length;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne043() {
    String sep = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    Int16Array arr = Int16Array.of(1, 2);
    String actual1 = arr.join(sep);
    String expected1 = "1" + sep + "2";
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne044() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("NaN");
    assertEqual("10NaN20NaN30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne045() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("Infinity");
    assertEqual("10Infinity20Infinity30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne046() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("undefined");
    assertEqual("10undefined20undefined30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne047() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("null");
    assertEqual("10null20null30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne048() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String actual1 = arr.join("1");
    assertEqual("11213", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne049() {
    Int16Array arr = Int16Array.of(-10, -20, -30);
    String actual1 = arr.join("-");
    assertEqual("-10--20--30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne050() {
    Int16Array arr = Int16Array.of(10, 20);
    String actual1 = arr.join("0");
    assertEqual("10020", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne051() {
    Int16Array arr = Int16Array.of(-32768, 0, 32767);
    String actual1 = arr.join("|");
    assertEqual("-32768|0|32767", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne052() {
    Int16Array arr = Int16Array.of(32767, 0, -32768);
    String actual1 = arr.join(":");
    assertEqual("32767:0:-32768", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne053() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("  ");
    assertEqual("10  20  30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne054() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join(" \t ");
    assertEqual("10 \t 20 \t 30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne055() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\n\t");
    assertEqual("10\n\t20\n\t30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne056() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("!");
    assertEqual("10!20!30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne057() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("?");
    assertEqual("10?20?30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne058() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("@");
    assertEqual("10@20@30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne059() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\b");
    assertEqual("10\b20\b30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne060() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("\f");
    assertEqual("10\f20\f30", actual1);
    }

    @Test
    void testInt16ArrayJoinTestOne061() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String actual1 = arr.join("true");
    assertEqual("10true20true30", actual1);
    }
}
