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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayoverallthree —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayoverallthree extends BasTest {

    @Test
    void testUint16Arrayoverallthree001() {
    Uint16Array arr = Uint16Array.of(19, 246, 73);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree002() {
    Uint16Array arr = Uint16Array.of(184, 37, 91);
    try {
    arr.get(3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree003() {
    Uint16Array arr = Uint16Array.of(127, 44, 239);
    try {
    arr.get(-100000);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree004() {
    Uint16Array arr = Uint16Array.of(83, 5, 176);
    try {
    arr.set(-100000, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    assertEqual(83, arr.get(0));}

    @Test
    void testUint16Arrayoverallthree005() {
    Uint16Array arr = Uint16Array.of(221, 64, 12);
    try {
    arr.with(4, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree006() {
    Uint16Array arr = Uint16Array.of(35, 198, 112);
    try {
    arr.with(-4, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree007() {
    Uint16Array arr = new Uint16Array(5);
    Uint16Array src = Uint16Array.of(1, 2);
    try {
    arr.set(src, -1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree008() {
    Uint16Array arr = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(1);
    try {
    arr.set(src, 3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree009() {
    Uint16Array arr = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(1);
    try {
    arr.set(src, 4);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree010() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 1, -1);
    assertEqual(2, arr.get(0));
    assertEqual(3, arr.get(1));}

    @Test
    void testUint16Arrayoverallthree011() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(99, 0, -1);
    assertEqual(0, arr.get(3));}

    @Test
    void testUint16Arrayoverallthree012() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(99, 4);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint16Arrayoverallthree013() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(99, -100, 2);
    assertEqual(99, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree014() {
    Uint16Array arr = Uint16Array.of(146, 28, 207);
    boolean result = arr.includes(146, 100000);
    assertFalse(result);}

    @Test
    void testUint16Arrayoverallthree015() {
    Uint16Array arr = Uint16Array.of(17, 159, 88);
    int result = arr.indexOf(17, -4);
    assertEqual(0, result);}

    @Test
    void testUint16Arrayoverallthree016() {
    Uint16Array arr = Uint16Array.of(232, 49, 104);
    int result = arr.indexOf(232, 100000);
    assertEqual(-1, result);}

    @Test
    void testUint16Arrayoverallthree017() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 10);
    int result = arr.lastIndexOf(10, 4);
    assertEqual(3, result);}

    @Test
    void testUint16Arrayoverallthree018() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 10);
    int result = arr.lastIndexOf(10, 100000);
    assertEqual(3, result);}

    @Test
    void testUint16Arrayoverallthree019() {
    Uint16Array arr = Uint16Array.of(66, 175, 23);
    Uint16Array result = arr.slice(-1);
    assertEqual(1, result.length());
    assertEqual(23, result.get(0));
    result.set(0, 99);
    assertEqual(23, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree020() {
    Uint16Array arr = Uint16Array.of(193, 42, 118);
    Uint16Array result = arr.slice(0, -1);
    assertEqual(2, result.length());
    assertEqual(193, result.get(0));
    assertEqual(42, result.get(1));
    result.set(1, 99);
    assertEqual(42, arr.get(1));}

    @Test
    void testUint16Arrayoverallthree021() {
    Uint16Array arr = Uint16Array.of(9, 154, 67);
    Uint16Array result = arr.slice(3);
    assertEqual(0, result.length());
    assertEqual(9, arr.get(0));
    assertEqual(67, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree022() {
    Uint16Array arr = Uint16Array.of(214, 31, 96);
    Uint16Array result = arr.slice(0, 10);
    assertEqual(3, result.length());
    assertEqual(214, result.get(0));
    assertEqual(96, result.get(2));
    result.set(0, 99);
    assertEqual(214, arr.get(0));}

    @Test
    void testUint16Arrayoverallthree023() {
    Uint16Array arr = Uint16Array.of(72, 11, 187);
    Uint16Array result = arr.subarray(-1);
    assertEqual(1, result.length());
    assertEqual(187, result.get(0));
    result.set(0, 99);
    assertEqual(99, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree024() {
    Uint16Array arr = Uint16Array.of(136, 59, 224);
    Uint16Array result = arr.subarray(0, -1);
    assertEqual(2, result.length());
    assertEqual(136, result.get(0));
    assertEqual(59, result.get(1));
    result.set(1, 99);
    assertEqual(99, arr.get(1));}

    @Test
    void testUint16Arrayoverallthree025() {
    Uint16Array arr = Uint16Array.of(25, 201, 77);
    Uint16Array result = arr.subarray(3);
    assertEqual(0, result.length());
    assertEqual(25, arr.get(0));
    assertEqual(77, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree026() {
    Uint16Array arr = Uint16Array.of(167, 14, 109);
    Uint16Array result = arr.subarray(-100, 2);
    assertEqual(2, result.length());
    assertEqual(167, result.get(0));
    assertEqual(14, result.get(1));
    result.set(0, 99);
    assertEqual(99, arr.get(0));}

    @Test
    void testUint16Arrayoverallthree027() {
    Uint16Array empty = new Uint16Array();
    try {
    empty.reduce((acc, val, array, unused3)-> acc + val);
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree028() {
    Uint16Array empty = new Uint16Array();
    try {
    empty.reduceRight((acc, val, array, unused3)-> acc + val);
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree029() {
    Uint16Array arr = Uint16Array.of(52, 190, 8);
    try {
    arr.forEach((value, index) -> {
    if (index == 1) {
    throw new Error("callback error");}
    });
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree030() {
    Uint16Array arr = Uint16Array.of(245, 36, 121);
    try {
    arr.map((value, index) -> {
    if (index == 1) {
    throw new Error("callback error");}
    return value + 1;});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree031() {
    Uint16Array arr = Uint16Array.of(89, 163, 27);
    try {
    arr.filter((value, index) -> {
    if (index == 1) {
    throw new Error("callback error");}
    return value > 10;});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree032() {
    Uint16Array arr = Uint16Array.of(208, 47, 135);
    try {
    arr.every((value, index) -> {
    if (index == 1) {
    throw new Error("callback error");}
    return value > 0;});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree033() {
    Uint16Array arr = Uint16Array.of(13, 221, 74);
    try {
    arr.reduce((acc, val, idx, unused3)-> {
    if (idx == 1) {
    throw new Error("callback error");}
    return acc + val;}, 0);
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree034() {
    Uint16Array arr = Uint16Array.of(30, 10, 20);
    try {
    arr.sort((a, b) -> {
    if (a == 10) {
    throw new Error("callback error");}
    return (a - b);});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree035() {
    Uint16Array empty = new Uint16Array();
    boolean result = empty.some((value) -> value > 0);
    assertFalse(result);}

    @Test
    void testUint16Arrayoverallthree036() {
    Uint16Array empty = new Uint16Array();
    Uint16Array result = empty.map((value) -> value + 1);
    assertEqual(0, result.length());}

    @Test
    void testUint16Arrayoverallthree037() {
    Uint16Array values = Uint16Array.of(1, 2, 3);
    List<Integer> previousValues = new ArrayList<>();
    List<Integer> currentValues = new ArrayList<>();
    List<Integer> indexes = new ArrayList<>();
    int result = values.reduceRight((prev, curr, idx, a)-> { previousValues.add(prev); currentValues.add(curr); indexes.add(idx); assertEqual(values, a); return prev * 10 + curr;});
    assertEqual(321, result);
    assertEqual(3, previousValues.get(0));
    assertEqual(2, currentValues.get(0));
    assertEqual("1,0", BasTest.joinList(indexes, ","));}

    @Test
    void testUint16Arrayoverallthree038() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(7);
    boolean result = arr.some((value) -> value == 7);
    assertTrue(result);}

    @Test
    void testUint16Arrayoverallthree039() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(7);
    int result = arr.indexOf(7);
    assertEqual(0, result);}

    @Test
    void testUint16Arrayoverallthree040() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 65536);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint16Arrayoverallthree041() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 3.14);
    assertEqual(3, arr.get(0));}

    @Test
    void testUint16Arrayoverallthree042() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(65536);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree043() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(-1);
    assertEqual(65535, arr.get(0));
    assertEqual(65535, arr.get(1));
    assertEqual(65535, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree044() {
    Uint16Array arr = Uint16Array.of(155, 22, 196);
    int[] sum = {0};
    arr.forEach((value) -> {
    sum[0] = sum[0] + value;});
    assertEqual(373, sum[0]);}

    @Test
    void testUint16Arrayoverallthree045() {
    Uint16Array arr = Uint16Array.of(38, 172, 85);
    Uint16Array mapped = arr.map((value) -> value * 2);
    assertEqual(76, mapped.get(0));
    assertEqual(344, mapped.get(1));
    assertEqual(170, mapped.get(2));}

    @Test
    void testUint16Arrayoverallthree046() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array filtered = arr.filter((value) -> value > 20);
    int result = filtered.reduce((acc, val, array, unused3)-> acc + val, 0);
    assertEqual(70, result);}

    @Test
    void testUint16Arrayoverallthree047() {
    Uint16Array arr = Uint16Array.of(118, 7, 203);
    String result = arr.join("-");
    assertEqual("118-7-203", result);}

    @Test
    void testUint16Arrayoverallthree048() {
    Uint16Array arr = Uint16Array.of(241, 63, 16);
    int count = 0;
    for (int[] entry : arr.entries()) {
    assertEqual(arr.get(entry[0]), entry[1]);
    count++;}
    assertEqual(3, count);}

    @Test
    void testUint16Arrayoverallthree049() {
    Uint16Array arr = Uint16Array.of(94, 184, 33);
    int idx = 0;
    for (Integer key : arr.keys()) {
    assertEqual(idx, key);
    idx++;}
    assertEqual(3, idx);}

    @Test
    void testUint16Arrayoverallthree050() {
    Uint16Array arr = Uint16Array.of(219, 45, 128);
    double[] expected = new double[] {219, 45, 128};
    int idx = 0;
    for (Integer value : arr.values()) {
    assertEqual(expected[idx], value);
    idx++;}
    assertEqual(3, idx);}

    @Test
    void testUint16Arrayoverallthree051() {
    Uint16Array arr = Uint16Array.of(61, 197, 24);
    int[] sum = {0};
    for (Integer value : arr.values()) {
    sum[0] = sum[0] + value;}
    assertEqual(282, sum[0]);}

    @Test
    void testUint16Arrayoverallthree052() {
    Uint16Array arr = Uint16Array.of(131, 29, 205);
    try {
    arr.get(100000);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree053() {
    Uint16Array arr = Uint16Array.of(48, 158, 82);
    try {
    arr.set(-1, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree054() {
    Uint16Array arr = Uint16Array.of(227, 71, 15);
    try {
    arr.set(3, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree055() {
    Uint16Array arr = Uint16Array.of(173, 12, 99);
    try {
    arr.set(100000, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree056() {
    Uint16Array arr = Uint16Array.of(116, 26, 191);
    Integer result = arr.at(3);
    assertEqual(null, result);}

    @Test
    void testUint16Arrayoverallthree057() {
    Uint16Array arr = Uint16Array.of(7, 162, 84);
    Integer result = arr.at(4);
    assertEqual(null, result);}

    @Test
    void testUint16Arrayoverallthree058() {
    Uint16Array arr = Uint16Array.of(201, 57, 132);
    Integer result = arr.at(-4);
    assertEqual(null, result);}

    @Test
    void testUint16Arrayoverallthree059() {
    Uint16Array arr = Uint16Array.of(43, 225, 69);
    Integer result = arr.at(100000);
    assertEqual(null, result);}

    @Test
    void testUint16Arrayoverallthree060() {
    Uint16Array arr = Uint16Array.of(157, 34, 108);
    Integer result = arr.at(-100000);
    assertEqual(null, result);}

    @Test
    void testUint16Arrayoverallthree061() {
    Uint16Array arr = Uint16Array.of(92, 183, 21);
    Uint16Array result = arr.with(-1, 99);
    assertEqual(92, result.get(0));
    assertEqual(183, result.get(1));
    assertEqual(99, result.get(2));
    assertEqual(21, arr.get(2));}

    @Test
    void testUint16Arrayoverallthree062() {
    Uint16Array arr = Uint16Array.of(238, 46, 125);
    try {
    arr.with(3, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree063() {
    Uint16Array arr = Uint16Array.of(149, 62, 214);
    try {
    arr.with(-4, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree064() {
    Uint16Array arr = new Uint16Array(3);
    try {
    arr.set(-1, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree065() {
    Uint16Array arr = new Uint16Array(3);
    try {
    arr.set(100000, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16Arrayoverallthree066() {
    Uint16Array arr = new Uint16Array(2);
    Uint16Array src = Uint16Array.of(1, 2, 3);
    try {
    arr.set(src, 0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }
}
