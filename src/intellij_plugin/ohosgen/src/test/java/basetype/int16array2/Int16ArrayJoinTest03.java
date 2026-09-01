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

import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayJoinTest03 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayJoinTest03 extends BasTest {

    @Test
    void testInt16ArrayJoinTestThree001() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join(null);
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree002() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join(" -- ");
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree003() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join("\t");
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree004() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join("中文");
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree005() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join("<script>");
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree006() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join("\0");
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree007() {
    String sep = "";
    for (int i = 0; i < 100; i++) {
    sep = sep + "x";
    }
    Int16Array arr = new Int16Array(0);
    String result = arr.join(sep);
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestThree008() {
    Int16Array arr = Int16Array.of(0);
    String result = arr.join();
    assertEqual("0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree009() {
    Int16Array arr = Int16Array.of(32767);
    String result = arr.join();
    assertEqual("32767", result);
    }

    @Test
    void testInt16ArrayJoinTestThree010() {
    Int16Array arr = Int16Array.of(-32768);
    String result = arr.join();
    assertEqual("-32768", result);
    }

    @Test
    void testInt16ArrayJoinTestThree011() {
    Int16Array arr = Int16Array.of(-1);
    String result = arr.join();
    assertEqual("-1", result);
    }

    @Test
    void testInt16ArrayJoinTestThree012() {
    Int16Array arr = Int16Array.of(0);
    String result = arr.join("|");
    assertEqual("0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree013() {
    Int16Array arr = Int16Array.of(32767);
    String result = arr.join("\n");
    assertEqual("32767", result);
    }

    @Test
    void testInt16ArrayJoinTestThree014() {
    Int16Array arr = Int16Array.of(-32768);
    String result = arr.join(" -- ");
    assertEqual("-32768", result);
    }

    @Test
    void testInt16ArrayJoinTestThree015() {
    Int16Array arr = Int16Array.of(0);
    String result = arr.join("");
    assertEqual("0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree016() {
    Int16Array arr = Int16Array.of(1);
    String result = arr.join(",");
    assertEqual("1", result);
    }

    @Test
    void testInt16ArrayJoinTestThree017() {
    Int16Array arr = Int16Array.of(-32768);
    String result = arr.join(",");
    int actual1 = result.indexOf(",");
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree018() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    String result = arr.join();
    assertEqual("0,0,0,0,0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree019() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    String result = arr.join("|");
    assertEqual("0|0|0|0|0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree020() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    String result = arr.join("");
    assertEqual("00000", result);
    }

    @Test
    void testInt16ArrayJoinTestThree021() {
    Int16Array arr = Int16Array.of(32767, 32767, 32767);
    String result = arr.join();
    assertEqual("32767,32767,32767", result);
    }

    @Test
    void testInt16ArrayJoinTestThree022() {
    Int16Array arr = Int16Array.of(32767, 32767, 32767);
    String result = arr.join("|");
    assertEqual("32767|32767|32767", result);
    }

    @Test
    void testInt16ArrayJoinTestThree023() {
    Int16Array arr = Int16Array.of(-32768, -32768, -32768);
    String result = arr.join();
    assertEqual("-32768,-32768,-32768", result);
    }

    @Test
    void testInt16ArrayJoinTestThree024() {
    Int16Array arr = Int16Array.of(-32768, -32768, -32768);
    String result = arr.join("|");
    assertEqual("-32768|-32768|-32768", result);
    }

    @Test
    void testInt16ArrayJoinTestThree025() {
    Int16Array arr = Int16Array.of(-1, -1, -1, -1);
    String result = arr.join();
    assertEqual("-1,-1,-1,-1", result);
    }

    @Test
    void testInt16ArrayJoinTestThree026() {
    Int16Array arr = Int16Array.of(-1, -1, -1, -1);
    String result = arr.join("");
    assertEqual("-1-1-1-1", result);
    }

    @Test
    void testInt16ArrayJoinTestThree027() {
    Int16Array arr = Int16Array.of(1, 1, 1, 1, 1);
    String result = arr.join();
    assertEqual("1,1,1,1,1", result);
    }

    @Test
    void testInt16ArrayJoinTestThree028() {
    Int16Array arr = Int16Array.of(42, 42, 42);
    String result = arr.join();
    assertEqual("42,42,42", result);
    }

    @Test
    void testInt16ArrayJoinTestThree029() {
    Int16Array arr = Int16Array.of(-5, -5, -5);
    String result = arr.join("-");
    assertEqual("-5--5--5", result);
    }

    @Test
    void testInt16ArrayJoinTestThree030() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int lenBefore = arr.length();
    arr.join();
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree031() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int valBefore = arr.get((int) 0);
    arr.join("|");
    Integer actual1 = arr.get((int) 0);
    int expected1 = valBefore;
    assertEqualInt(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree032() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int lastIdx = arr.length() - 1;
    int valBefore = arr.get(lastIdx);
    arr.join("|");
    Integer actual1 = arr.get(lastIdx);
    int expected1 = valBefore;
    assertEqualInt(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree033() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.join(" -- ");
    Integer actual1 = arr.get((int) 0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqualInt(20, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqualInt(30, actual3);
    }

    @Test
    void testInt16ArrayJoinTestThree034() {
    Int16Array arr = new Int16Array(0);
    String result = arr.join("|");
    int actual1 = result.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree035() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String result = arr.join("|");
    boolean actual1 = result.startsWith("|");
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree036() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String result = arr.join("|");
    boolean actual1 = result.endsWith("|");
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree037() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String result = arr.join("|");
    boolean actual1 = result.startsWith("10");
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree038() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String result = arr.join("|");
    boolean actual1 = result.endsWith("30");
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree039() {
    Int16Array arr = Int16Array.of(100, 200);
    String result = arr.join();
    assertEqual("100,200", result);
    }

    @Test
    void testInt16ArrayJoinTestThree040() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    String result = arr.join("|");
    String[] parts = result.split(java.util.regex.Pattern.quote("|"));
    int actual1 = parts.length;
    assertEqual(4, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree041() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    String result = sub.join();
    assertEqual("20,30,40", result);
    }

    @Test
    void testInt16ArrayJoinTestThree042() {
    Set<Integer> s = new HashSet<>();
    s.add(10);
    s.add(20);
    s.add(30);
    Int16Array arr = Int16Array.from(s);
    String result = arr.join();
    boolean found = result.indexOf("10") != -1;
    assertTrue(found);
    }

    @Test
    void testInt16ArrayJoinTestThree043() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = arr.subarray(0, 4);
    String originalResult = arr.join("|");
    String subResult = sub.join("|");
    assertEqual(originalResult, subResult);
    }

    @Test
    void testInt16ArrayJoinTestThree044() {
    Int16Array arr = Int16Array.of(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY);
    String result = arr.join();
    assertEqual("0,0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree045() {
    Int16Array arr = Int16Array.of(-Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY);
    String result = arr.join();
    assertEqual("0,0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree046() {
    Int16Array arr = new Int16Array(2);
    arr.set((int) 0, 32768);
    arr.set((int) 1, -32769);
    String result = arr.join("|");
    assertEqual("-32768|32767", result);
    }

    @Test
    void testInt16ArrayJoinTestThree047() {
    Int16Array arr = Int16Array.of(10, -20, 30, -40);
    String result = arr.join();
    assertEqual("10,-20,30,-40", result);
    }

    @Test
    void testInt16ArrayJoinTestThree048() {
    Int16Array arr = Int16Array.of(-10, -20, -30);
    String result = arr.join();
    assertEqual("-10,-20,-30", result);
    }

    @Test
    void testInt16ArrayJoinTestThree049() {
    Int16Array arr = Int16Array.of(0, -0);
    String result = arr.join();
    assertEqual("0,0", result);
    }

    @Test
    void testInt16ArrayJoinTestThree050() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, 3.7);
    String result = arr.join();
    assertEqual("3", result);
    }

    @Test
    void testInt16ArrayJoinTestThree051() {
    Int16Array arr = new Int16Array(500);
    for (int i = 0; i < 500; i++) {
    arr.set(i, 0);
    }
    String result = arr.join();
    int actual1 = result.length();
    assertEqual(999, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree052() {
    Int16Array arr = new Int16Array(500);
    for (int i = 0; i < 500; i++) {
    arr.set(i, 1);
    }
    String result = arr.join("");
    int actual1 = result.length();
    assertEqual(500, actual1);
    }

    @Test
    void testInt16ArrayJoinTestThree053() {
    Int16Array arr = new Int16Array(1000);
    for (int i = 0; i < 1000; i++) {
    arr.set(i, i);
    }
    String result = arr.join("|");
    int sepCount = 0;
    for (int j = 0; j < result.length(); j++) {
    if (result.charAt(j) == '|') {
    sepCount = sepCount + 1;
    }
    }
    assertEqual(999, sepCount);
    }

    @Test
    void testInt16ArrayJoinTestThree054() {
    Int16Array arr = new Int16Array(2000);
    for (int i = 0; i < 2000; i++) {
    arr.set(i, 32767);
    }
    String result = arr.join();
    boolean actual1 = result.startsWith("32767,");
    assertTrue(actual1);
    boolean actual2 = result.endsWith("32767");
    assertTrue(actual2);
    }

    @Test
    void testInt16ArrayJoinTestThree055() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array sub = arr.subarray(2, 5);
    String result = sub.join(":");
    assertEqual("3:4:5", result);
    }

    @Test
    void testInt16ArrayJoinTestThree056() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = arr.subarray(2, 3);
    String result = sub.join(",");
    assertEqual("3", result);
    }

    @Test
    void testInt16ArrayJoinTestThree057() {
    Int16Array arr = new Int16Array(5);
    arr.fill(7);
    String result = arr.join();
    assertEqual("7,7,7,7,7", result);
    }

    @Test
    void testInt16ArrayJoinTestThree058() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.reverse();
    String result = arr.join();
    assertEqual("30,20,10", result);
    }
}
