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

package basetype.uint16array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayForEachTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayForEachTwo extends BasTest {

    @Test
    void testUint16ArrayForEachTwo012() {
    int[] count = {0};
    new Uint16Array().forEach((value) -> { count[0]++;});
    assertEqual(0, count[0]);}

    @Test
    void testUint16ArrayForEachTwo013() {
    Uint16Array arr = Uint16Array.of(1, 2);
    boolean[] same = {false};
    int[] callCount = {0};
    arr.forEach((value, index, array) -> { same[0] = array == arr; callCount[0]++;});
    assertEqual(2, callCount[0]);
    assertTrue(same[0]);}

    @Test
    void testUint16ArrayForEachTwo014() {
    Uint16Array arr = Uint16Array.of(3, 4, 5);
    int[] expected = {0};
    arr.forEach((value, index) -> { assertEqual(expected[0], index); expected[0]++;});
    assertEqual(3, expected[0]);}

    @Test
    void testUint16ArrayForEachTwo015() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    List<Integer> seen = new ArrayList<>();
    arr.forEach((value, index, array) -> { seen.add(value); if (index == 0) { array.set(1, 20);} });
    assertEqual(20, seen.get(1));}

    @Test
    void testUint16ArrayForEachTwo016() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] count = {0};
    arr.forEach((value, index, array) -> { count[0]++; if (index == 1) { array.set(0, 99);} });
    assertEqual(3, count[0]);
    assertEqual(99, arr.at(0));}

    @Test
    void testUint16ArrayForEachTwo017() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer);
    int[] seen = {0};
    arr.forEach((value, index) -> { if (index == 0) { alias.set(1, 44);} if (index == 1) { seen[0] = value;} });
    assertEqual(44, seen[0]);}

    @Test
    void testUint16ArrayForEachTwo018() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(buffer);
    all.set(new Uint16Array(new int[] {1, 2, 3, 4, 5}));
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    int[] sum = {0};
    view.forEach((value) -> { sum[0] += value;});
    assertEqual(7, sum[0]);}

    @Test
    void testUint16ArrayForEachTwo019() {
    Uint16Array arr = Uint16Array.of(1);
    try { arr.forEach((value) -> { throw new Error("forEach marker");}); fail();} catch (Error e) { assertEqual("Error", e.getClass().getSimpleName()); assertEqual("forEach marker", e.getMessage());}
    }

    @Test
    void testUint16ArrayForEachTwo020() {
    Uint16Array arr = Uint16Array.of(65535, 65535);
    int[] sum = {0};
    arr.forEach((value) -> { sum[0] += value;});
    assertEqual(131070, sum[0]);}

    @Test
    void testUint16ArrayForEachTwo021() {
    Uint16Array arr = Uint16Array.of(2, 4, 8);
    int[] total = {0};
    arr.forEach((value, index, array) -> { total[0] += array.get(array.length() - 1);});
    assertEqual(24, total[0]);}

    @Test
    void testUint16ArrayForEachTwo022() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(7);
    int[] sum = {0};
    arr.forEach((value) -> { sum[0] += value;});
    assertEqual(21, sum[0]);}

    @Test
    void testUint16ArrayForEachTwo023() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(1, 2);
    int[] count = {0};
    arr.forEach((value) -> { count[0]++;});
    assertEqual(4, count[0]);}

    @Test
    void testUint16ArrayForEachTwo024() {
    Uint16Array arr = Uint16Array.of(2, 3, 4);
    int[] total = {0};
    arr.forEach((value, index, array) -> { total[0] += value * array.get(index);});
    assertEqual(29, total[0]);}

    @Test
    void testUint16ArrayForEachTwo025() {
    Uint16Array arr = Uint16Array.of(9);
    int[] indexSum = {-1};
    arr.forEach((value, index) -> { indexSum[0] = index;});
    assertEqual(0, indexSum[0]);}

    @Test
    void testUint16ArrayForEachTwo026() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    int[] count = {0};
    try {
    source.forEach((value, index) -> {
    count[0]++;
    if (index == 1) {
    throw new Error("forEach middle");};});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("forEach middle", e.getMessage());};
    assertEqual(2, count[0]);}
}
