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

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Int8Array;
import basetype.common.Int16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFindTest04 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFindTest04 extends BasTest {

    @Test
    void testInt16ArrayFindTestFour001() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    int[] acc = {0};
    arr.find((value, index, array) -> {
    acc[0] = acc[0] + value;
    return false;});
    assertEqual(30, acc[0]);}

    @Test
    void testInt16ArrayFindTestFour002() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    List<Integer> recorded = new ArrayList<>();
    arr.find((value, index, array) -> {
    recorded.add(value);
    return false;});
    int actual1 = recorded.get(0);
    assertEqual(100, actual1);
    int actual2 = recorded.get(1);
    assertEqual(200, actual2);
    int actual3 = recorded.get(2);
    assertEqual(300, actual3);}

    @Test
    void testInt16ArrayFindTestFour003() {
    Int16Array arr = Int16Array.of(7, 8, 9);
    List<Integer> indices = new ArrayList<>();
    arr.find((value, index, array) -> {
    indices.add(index);
    return false;});
    int actual1 = indices.get(0);
    assertEqual(0, actual1);
    int actual2 = indices.get(1);
    assertEqual(1, actual2);
    int actual3 = indices.get(2);
    assertEqual(2, actual3);}

    @Test
    void testInt16ArrayFindTestFour004() {
    Int16Array arr = Int16Array.of(11, 22, 33);
    Map<Integer, Integer> map = new HashMap<>();
    arr.find((value, index, array) -> {
    map.put(index, value);
    return false;});
    Integer actual1 = map.get(0);
    assertEqual(11, actual1);
    Integer actual2 = map.get(1);
    assertEqual(22, actual2);
    Integer actual3 = map.get(2);
    assertEqual(33, actual3);}

    @Test
    void testInt16ArrayFindTestFour005() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    boolean[] shouldMatch = {false};
    Integer result = arr.find((value, index, array) -> { if (index == 1) { shouldMatch[0] = true;} return shouldMatch[0];});
    assertEqual(2, result);}

    @Test
    void testInt16ArrayFindTestFour006() {
    Int16Array arr = Int16Array.of(15, 25, 35);
    Int16Array baseline = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> { return value > baseline.get(index);});
    assertEqual(15, result);}

    @Test
    void testInt16ArrayFindTestFour007() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    String[] trace = {""};
    arr.find((value, index, array) -> {
    trace[0] = trace[0] + String.valueOf(value);
    return false;});
    assertEqual("123", trace[0]);}

    @Test
    void testInt16ArrayFindTestFour008() {
    Int16Array arr = Int16Array.of(5, 5, 5);
    List<Integer> external = java.util.Arrays.asList(0, 0, 0);
    arr.find((value, index, array) -> {
    external.set(index, value * 2);
    return false;});
    int actual1 = external.get(0);
    assertEqual(10, actual1);
    int actual2 = external.get(1);
    assertEqual(10, actual2);
    int actual3 = external.get(2);
    assertEqual(10, actual3);}

    @Test
    void testInt16ArrayFindTestFour009() {
    Int16Array arr = Int16Array.of(3, 6, 9, 12);
    int[] cnt = {0};
    boolean[] foundLarge = {false};
    Integer result = arr.find((value, index, array) -> { cnt[0] = cnt[0] + 1; foundLarge[0] = value > 8; return foundLarge[0];});
    assertEqual(9, result);
    assertEqual(3, cnt[0]);}

    @Test
    void testInt16ArrayFindTestFour010() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    int[] visitOrder = {0};
    Integer result = arr.find((value, index, array) -> { visitOrder[0] = visitOrder[0] + 1; return visitOrder[0] % 2 == 0;});
    assertEqual(20, result);}

    @Test
    void testInt16ArrayFindTestFour011() {
    Int16Array arr = Int16Array.of(3, 100, 50);
    int threshold = 99;
    Integer result = arr.find((value, index, array) -> { return value > threshold;});
    assertEqual(100, result);}

    @Test
    void testInt16ArrayFindTestFour012() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    Set<Integer> targets = new HashSet<>();
    targets.add(3);
    targets.add(7);
    Integer result = arr.find((value, index, array) -> { return targets.contains(value);});
    assertEqual(3, result);}

    @Test
    void testInt16ArrayFindTestFour013() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    int[] visitCnt = {0};
    int[] lastVisitedValue = {0};
    Integer result = arr.find((value, index, array) -> { visitCnt[0] = visitCnt[0] + 1; lastVisitedValue[0] = value; return visitCnt[0] == 2;});
    assertEqual(20, result);
    assertEqual(2, visitCnt[0]);}

    @Test
    void testInt16ArrayFindTestFour014() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int[] state = {0};
    arr.find((value, index, array) -> {
    state[0] = value;
    return state[0] > 1;});
    assertEqual(2, state[0]);}

    @Test
    void testInt16ArrayFindTestFour015() {
    Int16Array arr = Int16Array.of(5, 15, 25);
    Integer result = arr.find((value, index, array) -> { if (index == 0) { array.set(0, 0);} return value > 10;});
    assertEqual(15, result);}

    @Test
    void testInt16ArrayFindTestFour016() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> { if (index == 0) { array.set(1, 99);} return value == 30;});
    assertEqual(30, result);}

    @Test
    void testInt16ArrayFindTestFour017() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> { if (index == 1) { array.set(0, 0);} return value == 30;});
    assertEqual(30, result);}

    @Test
    void testInt16ArrayFindTestFour018() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> { if (index == 0) { array.fill(0);} return value > 25;});
    assertNull(result);}

    @Test
    void testInt16ArrayFindTestFour019() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    boolean[] writeConfirmed = {false};
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(1, 99);
    writeConfirmed[0] = array.get(1) == 99;}
    return false;});
    assertTrue(writeConfirmed[0]);}

    @Test
    void testInt16ArrayFindTestFour020() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(2, 50);
    array.set(2, 77);}
    return false;});
    Integer actual1 = arr.get(2);
    assertEqual(77, actual1);}

    @Test
    void testInt16ArrayFindTestFour021() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    Integer result = arr.find((value, index, array) -> { array.set(index, -32768); return value == 15;});
    assertEqual(15, result);
    Integer actual1 = arr.get(2);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayFindTestFour022() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    boolean[] allConsistent = {true};
    arr.find((value, index, array) -> {
    if (value != array.get(index)) {
    allConsistent[0] = false;}
    return false;});
    assertTrue(allConsistent[0]);}

    @Test
    void testInt16ArrayFindTestFour023() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.find((value, index, array) -> {
    if (index == 1) {
    array.set(index + 1, 99);}
    return false;});
    Integer actual1 = arr.get(2);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArrayFindTestFour024() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> { if (index == 0) { array.reverse();} return value == 20;});
    assertEqual(20, result);}

    @Test
    void testInt16ArrayFindTestFour025() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> { if (index == 0) { array.copyWithin(0, 1, 2);} return value == 30;});
    assertEqual(30, result);}

    @Test
    void testInt16ArrayFindTestFour026() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] capturedLen = {0};
    arr.find((value, index, array) -> {
    capturedLen[0] = array.length();
    return false;});
    assertEqual(5, capturedLen[0]);}

    @Test
    void testInt16ArrayFindTestFour027() {
    Int16Array arr = new Int16Array(5);
    arr.fill(99);
    Integer result = arr.find((value, index, array) -> { return value != 99;});
    assertNull(result);}

    @Test
    void testInt16ArrayFindTestFour028() {
    Int16Array arr = new Int16Array(4);
    arr.fill(-1);
    boolean[] allMinusOne = {true};
    arr.find((value, index, array) -> {
    if (value != -1) {
    allMinusOne[0] = false;}
    return false;});
    assertTrue(allMinusOne[0]);}

    @Test
    void testInt16ArrayFindTestFour029() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.reverse();
    Integer result = arr.find((value, index, array) -> { return value > 25;});
    assertEqual(30, result);}

    @Test
    void testInt16ArrayFindTestFour030() {
    Int16Array arr = Int16Array.of(50, 10, 30);
    arr.sort();
    Integer result = arr.find((value, index, array) -> { return value > 25;});
    assertEqual(30, result);}

    @Test
    void testInt16ArrayFindTestFour031() {
    Int16Array arr = Int16Array.of(10, 300, 200, 50);
    Int16Array sub = arr.subarray(1, 3);
    Integer result = sub.find((value, index, array) -> { return value > 100;});
    assertEqual(300, result);}

    @Test
    void testInt16ArrayFindTestFour032() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.copyWithin(0, 2, 4);
    Integer result = arr.find((value, index, array) -> { return value == 30;});
    assertEqual(30, result);}

    @Test
    void testInt16ArrayFindTestFour033() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array source = Int16Array.of(99, 100);
    arr.set(source, 1);
    Integer result = arr.find((value, index, array) -> { return value == 99;});
    assertEqual(99, result);}

    @Test
    void testInt16ArrayFindTestFour034() {
    Int16Array arr = Int16Array.of(7, 14, 21, 14);
    Integer found = arr.find((value, index, array) -> { return value > 10;});
    int actual1 = arr.indexOf((int) found);
    assertEqual(1, actual1);}

    @Test
    void testInt16ArrayFindTestFour035() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    Integer found = arr.find((value, index, array) -> { return value % 3 == 0;});
    boolean actual1 = arr.includes((int) found);
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFindTestFour036() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer found = arr.find((value, index, array) -> { return value == 20;});
    Int16Array replaced = arr.with(1, (int) found);
    Integer actual1 = replaced.get(1);
    assertEqual(20, actual1);}

    @Test
    void testInt16ArrayFindTestFour037() {
    Int16Array arr = new Int16Array(4);
    arr.fill(10).reverse();
    Integer result = arr.find((value, index, array) -> { return value != 10;});
    assertNull(result);}

    @Test
    void testInt16ArrayFindTestFour038() {
    Int16Array arr = Int16Array.of(3, 7, 11);
    Integer found = arr.find((value, index, array) -> { return value > 5;});
    List<Integer> source = java.util.Arrays.asList((int) found, 99);
    Int16Array newArr = Int16Array.from(source);
    Integer actual1 = newArr.get(0);
    assertEqual(7, actual1);}

    @Test
    void testInt16ArrayFindTestFour039() {
    Int16Array arr = new Int16Array(5);
    arr.fill(0);
    arr.set(2, 99);
    Integer result = arr.find((value, index, array) -> { return value == 99;});
    assertEqual(99, result);}

    @Test
    void testInt16ArrayFindTestFour040() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer found = arr.find((value, index, array) -> { return value == 20;});
    arr.set(1, 0);
    Integer actual1 = arr.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFindTestFour041() {
    Int16Array outer = Int16Array.of(1, 2, 3);
    Int16Array inner = Int16Array.of(10, 20, 30);
    boolean[] matchFound = {false};
    outer.find((value, index, array) -> {
    Integer innerResult = inner.find((iv, ii, ia) -> {;
    return iv == value * 10;});
    if (innerResult != null) {
    matchFound[0] = true;
    return true;}
    return false;});
    assertTrue(matchFound[0]);}

    @Test
    void testInt16ArrayFindTestFour042() {
    Int16Array arr = Int16Array.of(5, 15, 25);
    int[] capturedIdx = {-1};
    arr.find((value, index, array) -> {
    if (index == 0) {
    capturedIdx[0] = array.findIndex((v, i, a) -> {
    return v > 10;});}
    return false;});
    assertEqual(1, capturedIdx[0]);}

    @Test
    void testInt16ArrayFindTestFour043() {
    Int16Array arr1 = Int16Array.of(10, 20, 30);
    Int16Array arr2 = Int16Array.of(15, 25, 35);
    Integer found = arr1.find((value, index, array) -> { return value > 15;});
    Integer result = arr2.find((value, index, array) -> { return value > ((int) found);});
    assertEqual(25, result);}

    @Test
    void testInt16ArrayFindTestFour044() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] sharedCnt = {0};
    arr.find((value, index, array) -> {
    sharedCnt[0] = sharedCnt[0] + 1;
    return value > 10;});
    arr.find((value, index, array) -> {
    sharedCnt[0] = sharedCnt[0] + 1;
    return value > 10;});
    assertEqual(10, sharedCnt[0]);}

    @Test
    void testInt16ArrayFindTestFour045() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Integer result = arr.find((value, index, array) -> { return array.includes(value + 10);});
    assertEqual(10, result);}

    @Test
    void testInt16ArrayFindTestFour046() {
    Int16Array arr = Int16Array.of(5, 10, 15, 20);
    int[] foundIdx = {-1};
    arr.find((value, index, array) -> {
    if (index == 0) {
    foundIdx[0] = array.indexOf(20);}
    return false;});
    assertEqual(3, foundIdx[0]);}

    @Test
    void testInt16ArrayFindTestFour047() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    boolean[] hasLarge = {false};
    arr.find((value, index, array) -> {
    if (index == 0) {
    hasLarge[0] = array.some((v, i, a) -> {
    return v > 35;});}
    return false;});
    assertTrue(hasLarge[0]);}

    @Test
    void testInt16ArrayFindTestFour048() {
    Int16Array arr = Int16Array.of(2, 4, 6, 8);
    boolean[] allEven = {false};
    arr.find((value, index, array) -> {
    if (index == 0) {
    allEven[0] = array.every((v, i, a) -> {
    return v % 2 == 0;});}
    return false;});
    assertTrue(allEven[0]);}

    @Test
    void testInt16ArrayFindTestFour049() {
    Int16Array arr = Int16Array.of(0, 50, 100);
    Int16Array target = Int16Array.of(10, 20, 30, 40, 50);
    Integer found = arr.find((value, index, array) -> { return value == 100;});
    int idx = 2;
    Integer retrieved = target.get(idx);
    assertEqual(30, retrieved);}

    @Test
    void testInt16ArrayFindTestFour050() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] secondResult = {0};
    arr.find((value, index, array) -> {
    if (index == 1) {
    Integer inner = array.find((v, i, a) -> {;
    return v > 3;});
    if (inner != null) {
    secondResult[0] = inner;}
    }
    return false;});
    assertEqual(4, secondResult[0]);}

    @Test
    void testInt16ArrayFindTestFour051() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    Integer found = arr.find((value, index, array) -> { return value > 8;});
    int doubled = ((int) found) * 2;
    assertEqual(20, doubled);}

    @Test
    void testInt16ArrayFindTestFour052() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Integer found = arr.find((value, index, array) -> { return value > 5;});
    int fallback = found != null ? ((int) found) : -1;
    assertEqual(-1, fallback);}

    @Test
    void testInt16ArrayFindTestFour053() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(0, 32768);}
    return false;});
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayFindTestFour054() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(1, -32769);}
    return false;});
    Integer actual1 = arr.get(1);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayFindTestFour055() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(2, 65536);}
    return false;});
    Integer actual1 = arr.get(2);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFindTestFour056() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(3, Double.NaN);}
    return false;});
    Integer actual1 = arr.get(3);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFindTestFour057() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(4, Double.POSITIVE_INFINITY);}
    return false;});
    Integer actual1 = arr.get(4);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFindTestFour058() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(5, -Double.POSITIVE_INFINITY);}
    return false;});
    Integer actual1 = arr.get(5);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFindTestFour059() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(0, 3.7);}
    return false;});
    Integer actual1 = arr.get(0);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayFindTestFour060() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(1, -3.7);}
    return false;});
    Integer actual1 = arr.get(1);
    assertEqual(-3, actual1);}

    @Test
    void testInt16ArrayFindTestFour061() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(1, 0xffff);}
    return false;});
    Integer actual1 = arr.get(1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayFindTestFour062() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(2, 98304);}
    return false;});
    Integer actual1 = arr.get(2);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayFindTestFour063() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 0, 4);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.set(3, 40);
    view1.find((value, index, array) -> {
    if (index == 0) {
    view2.set(1, 99);}
    return false;});
    Integer actual1 = view2.get(1);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArrayFindTestFour064() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array parent = new Int16Array(buf, 0, 4);
    Int16Array child = new Int16Array(buf, 2, 2);
    parent.set(0, 10);
    parent.set(1, 20);
    parent.set(2, 30);
    parent.set(3, 40);
    parent.find((value, index, array) -> {
    if (index == 0) {
    array.set(1, 99);}
    return false;});
    Integer actual1 = child.get(0);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArrayFindTestFour065() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array parent = new Int16Array(buf, 0, 4);
    Int16Array child = new Int16Array(buf, 2, 2);
    parent.set(0, 10);
    parent.set(1, 20);
    parent.set(2, 30);
    parent.set(3, 40);
    child.find((value, index, array) -> {
    if (index == 0) {
    array.set(0, 88);}
    return false;});
    Integer actual1 = parent.get(1);
    assertEqual(88, actual1);}

    @Test
    void testInt16ArrayFindTestFour066() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array view1 = new Int16Array(buf, 0, 3);
    Int16Array view2 = new Int16Array(buf, 2, 2);
    Int16Array view3 = new Int16Array(buf, 4, 2);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.find((value, index, array) -> {
    if (index == 0) {
    view3.set(0, 77);}
    return false;});
    Integer actual1 = view1.get(2);
    assertEqual(77, actual1);}

    @Test
    void testInt16ArrayFindTestFour067() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array i16 = new Int16Array(buf, 0, 2);
    Int8Array i8 = new Int8Array(buf, 0, 4);
    i16.set(0, 0);
    i16.set(1, 0);
    i16.find((value, index, array) -> {
    if (index == 0) {
    i8.set(0, (byte) 0x41);
    i8.set(1, (byte) 0x00);}
    return false;});
    Integer actual1 = i16.get(0);
    assertEqual(65, actual1);}

    @Test
    void testInt16ArrayFindTestFour068() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 0, 4);
    view1.set(0, 5);
    view1.set(1, 10);
    view1.set(2, 15);
    view1.set(3, 20);
    view1.find((value, index, array) -> {
    if (index == 0) {
    view2.set(1, 99);}
    return false;});
    Integer result = view2.find((value, index, array) -> { return value == 99;});
    assertEqual(99, result);}

    @Test
    void testInt16ArrayFindTestFour069() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 0, 4);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.set(3, 40);
    boolean[] viewsMatch = {true};
    view1.find((value, index, array) -> {
    if (view2.get(index) != value) {
    viewsMatch[0] = false;}
    return false;});
    assertTrue(viewsMatch[0]);}

    @Test
    void testInt16ArrayFindTestFour070() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array view1 = new Int16Array(buf, 0, 3);
    Int16Array view2 = new Int16Array(buf, 2, 2);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.find((value, index, array) -> {
    if (index == 0) {
    view2.set(0, 55);}
    return false;});
    Integer actual1 = view1.get(1);
    assertEqual(55, actual1);}

    @Test
    void testInt16ArrayFindTestFour071() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    sub.find((value, index, array) -> {
    if (index == 0) {
    parent.set(0, 0);}
    return false;});
    Integer actual1 = parent.get(0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFindTestFour072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 0, 4);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.set(3, 40);
    view2.set(2, 77);
    Integer result = view1.find((value, index, array) -> { return value == 77;});
    assertEqual(77, result);}
}
