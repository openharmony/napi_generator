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

package basetype;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayJoinTest02 —— Int16Array 方法族测试。
 */
public class Int16ArrayJoinTest02 extends BasTest {

    @Test
    void testInt16ArrayJoinTestTwo001() {
    Int16Array arr = Int16Array.of(-32768, 0, 32767);
    String result = arr.join();
    assertEqual("-32768,0,32767", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo002() {
    Int16Array arr = Int16Array.of(-1, -2, -3);
    String result = arr.join();
    assertEqual("-1,-2,-3", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo003() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    String result = arr.join();
    assertEqual("0,0,0", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo004() {
    Int16Array arr = new Int16Array();
    String result = arr.join("|");
    assertEqual("", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo005() {
    Int16Array arr = Int16Array.of(5);
    String result = arr.join("|");
    assertEqual("5", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo006() {
    Int16Array arr = Int16Array.of(-1, -2, -3);
    String result = arr.join("|");
    assertEqual("-1|-2|-3", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo007() {
    Int16Array arr = Int16Array.of(-1, -2, -3);
    String result = arr.join("");
    assertEqual("-1-2-3", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo008() {
    Int16Array arr = Int16Array.of(-1, 2, 3);
    String result = arr.join("");
    assertEqual("-123", result);
    }

    @Test
    void testInt16ArrayJoinTestTwo009() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    int actual1 = result.length();
    assertEqual(5, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo010() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("|");
    int actual1 = result.length();
    assertEqual(5, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo011() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("");
    int actual1 = result.length();
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo012() {
    Int16Array arr = new Int16Array();
    String result = arr.join();
    int actual1 = result.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo013() {
    Int16Array arr = Int16Array.of(5);
    String result = arr.join();
    int actual1 = result.length();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo014() {
    Int16Array arr = Int16Array.of(-32768, 32767);
    String result = arr.join();
    int actual1 = result.length();
    assertEqual(12, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo015() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("::");
    int actual1 = result.length();
    assertEqual(7, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo016() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    String result = arr.join();
    int actual1 = result.length();
    assertEqual(9, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo017() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("---");
    int actual1 = result.length();
    assertEqual(9, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo018() {
    Int16Array arr = Int16Array.of(10, 200, 3000);
    String result = arr.join();
    int expectedLen = 2 + 1 + 3 + 1 + 4;
    int actual1 = result.length();
    int expected1 = expectedLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo019() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int originalLen = arr.length();
    arr.join();
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo020() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int originalLen = arr.length();
    arr.join("|");
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo021() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int originalLen = arr.length();
    arr.join("");
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo022() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.join();
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo023() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.join("|");
    Integer actual1 = arr.get(1);
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo024() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.join("");
    Integer actual1 = arr.get(2);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo025() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int origByteLen = arr.byteLength();
    arr.join();
    int actual1 = arr.byteLength();
    int expected1 = origByteLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo026() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String firstResult = arr.join();
    String secondResult = arr.join();
    assertEqual(secondResult, firstResult);
    }

    @Test
    void testInt16ArrayJoinTestTwo027() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String firstResult = arr.join("|");
    String secondResult = arr.join("|");
    assertEqual(secondResult, firstResult);
    }

    @Test
    void testInt16ArrayJoinTestTwo028() {
    Int16Array arr = Int16Array.of(-1, 2, 3);
    arr.join("");
    Integer actual1 = arr.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(2, actual2);
    }

    @Test
    void testInt16ArrayJoinTestTwo029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 2, 2);
    arr.set(0, 1);
    arr.set(1, 2);
    int origOffset = arr.byteOffset();
    arr.join();
    int actual1 = arr.byteOffset();
    int expected1 = origOffset;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo030() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    String actual1 = Character.toString(result.charAt(0));
    assertEqual("1", actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo031() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    String actual1 = result.substring(0, 1);
    assertEqual("1", actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo032() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    int actual1 = result.indexOf(",");
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo033() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("|");
    int actual1 = result.indexOf("|");
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo034() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    String combined = result + "suffix";
    assertEqual("1,2,3suffix", combined);
    }

    @Test
    void testInt16ArrayJoinTestTwo035() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("");
    String actual1 = Character.toString(result.charAt(0));
    assertEqual("1", actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo036() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    String expected = "1,2,3";
    boolean actual1 = result.equals(expected);
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo037() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    int len = result.length();
    int doubled = len + len;
    assertEqual(10, doubled);
    }

    @Test
    void testInt16ArrayJoinTestTwo038() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join();
    boolean actual1 = result.startsWith("1");
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayJoinTestTwo039() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String result = arr.join("");
    boolean actual1 = result.startsWith("1");
    assertTrue(actual1);
    }
}
