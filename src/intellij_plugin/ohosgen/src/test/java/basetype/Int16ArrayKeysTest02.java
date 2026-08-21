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
 * Int16ArrayKeysTest02 —— Int16Array 方法族测试。
 */
public class Int16ArrayKeysTest02 extends BasTest {

    @Test
    void testInt16ArrayKeysTestTwo001() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    assertEqual(0, r.value);
    }

    @Test
    void testInt16ArrayKeysTestTwo002() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    assertFalse(r.done);
    }

    @Test
    void testInt16ArrayKeysTestTwo003() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    boolean actual1 = r.done;
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo004() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    iter.next();
    IteratorResult r = iter.next();
    boolean actual1 = r.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo005() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    Int16Array.KeyIterator iter = arr.keys();
    boolean actual1 = false;
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo006() {
    Int16Array arr = new Int16Array(new int[] {42, 99});
    Int16Array.KeyIterator iter = arr.keys();
    int key = iter.next().value;
    assertEqual(0, key);
    }

    @Test
    void testInt16ArrayKeysTestTwo007() {
    Int16Array arr1 = new Int16Array(3);
    Int16Array arr2 = Int16Array.of(1, 2, 3);
    Int16Array.KeyIterator iter1 = arr1.keys();
    Int16Array.KeyIterator iter2 = arr2.keys();
    int actual1 = iter1.next().value;
    int expected1 = iter2.next().value;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo008() {
    Int16Array arr = new Int16Array(0);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    boolean actual1 = r.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo009() {
    Int16Array arr = Int16Array.of();
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    boolean actual1 = r.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo010() {
    Int16Array arr = Int16Array.of(99);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    int actual1 = r.value;
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo011() {
    Int16Array arr = Int16Array.of(99);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    boolean actual1 = r.done;
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo012() {
    Int16Array arr = Int16Array.of(99);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    IteratorResult r = iter.next();
    boolean actual1 = r.done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo013() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    int actual4 = iter.next().value;
    assertEqual(3, actual4);
    int actual5 = iter.next().value;
    assertEqual(4, actual5);
    }

    @Test
    void testInt16ArrayKeysTestTwo014() {
    Int16Array arr = new Int16Array(8);
    Int16Array.KeyIterator iter = arr.keys();
    int count = 0;
    IteratorResult r = iter.next();
    while (!r.done) {
    count++;
    r = iter.next();
    }
    assertEqual(arr.length(), count);
    }

    @Test
    void testInt16ArrayKeysTestTwo015() {
    Int16Array arr = new Int16Array(6);
    Int16Array.KeyIterator iter = arr.keys();
    int prev = -1;
    boolean sequential = true;
    IteratorResult r = iter.next();
    while (!r.done) {
    if (r.value != prev + 1) {
    sequential = false;
    }
    prev = r.value;
    r = iter.next();
    }
    assertTrue(sequential);
    }

    @Test
    void testInt16ArrayKeysTestTwo016() {
    int len = 128;
    Int16Array arr = new Int16Array(len);
    Int16Array.KeyIterator iter = arr.keys();
    int count = 0;
    int maxKey = -1;
    IteratorResult r = iter.next();
    while (!r.done) {
    count++;
    maxKey = r.value;
    r = iter.next();
    }
    assertEqual(len, count);
    assertEqual(len - 1, maxKey);
    }

    @Test
    void testInt16ArrayKeysTestTwo017() {
    Int16Array arr = new Int16Array(3);
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo018() {
    Int16Array arr = Int16Array.of(32767, 32767, 32767);
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo019() {
    Int16Array arr = Int16Array.of(-32768, -32768, -32768);
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo020() {
    Int16Array arr = new Int16Array(5);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;
    }
    assertEqual(5, count);
    }

    @Test
    void testInt16ArrayKeysTestTwo021() {
    Int16Array arr = new Int16Array(3);
    int sum = 0;
    for (Integer key : arr.keys()) {
    int k = key;
    sum = sum + k;
    }
    assertEqual(3, sum);
    }

    @Test
    void testInt16ArrayKeysTestTwo022() {
    Int16Array arr = new Int16Array(4);
    int prev = -1;
    boolean ok = true;
    for (Integer key : arr.keys()) {
    if (key != prev + 1) {
    ok = false;
    }
    prev = key;
    }
    assertTrue(ok);
    }

    @Test
    void testInt16ArrayKeysTestTwo023() {
    Int16Array arr = new Int16Array(10);
    int count = 0;
    for (Integer key : arr.keys()) {
    count++;
    if (key >= 3) {
    break;
    }
    }
    assertEqual(4, count);
    }

    @Test
    void testInt16ArrayKeysTestTwo024() {
    Int16Array arr = new Int16Array(5);
    int count = 0;
    for (Integer key : arr.keys()) {
    if (key == 2) {
    continue;
    }
    count++;
    }
    assertEqual(4, count);
    }

    @Test
    void testInt16ArrayKeysTestTwo025() {
    Int16Array arr = new Int16Array(4);
    int byteLenBefore = arr.byteLength();
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    while (!r.done) {
    r = iter.next();
    }
    int actual1 = arr.byteLength();
    int expected1 = byteLenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo026() {
    Int16Array arr = new Int16Array(4);
    int bpe = arr.BYTES_PER_ELEMENT;
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    while (!r.done) {
    r = iter.next();
    }
    int actual1 = arr.BYTES_PER_ELEMENT;
    int expected1 = bpe;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo027() {
    Int16Array arr = new Int16Array(6);
    Int16Array.KeyIterator iter = arr.keys();
    int count = 0;
    IteratorResult r = iter.next();
    while (!r.done) {
    count++;
    r = iter.next();
    }
    int actual1 = count * arr.BYTES_PER_ELEMENT;
    int expected1 = arr.byteLength();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo028() {
    Int16Array arr = new Int16Array(5);
    int origLen = arr.length();
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    int actual1 = arr.length();
    int expected1 = origLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo029() {
    Int16Array arr = new Int16Array(7);
    int origLen = arr.length();
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = arr.length();
    int expected1 = origLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo030() {
    Int16Array arr = new Int16Array(4);
    int origLen = arr.length();
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    while (!r.done) {
    r = iter.next();
    }
    int actual1 = arr.length();
    int expected1 = origLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo031() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    while (!r.done) {
    r = iter.next();
    }
    Integer actual1 = arr.get(0);
    assertEqual(100, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(200, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(300, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo032() {
    Int16Array arr = new Int16Array(6);
    int origLen = arr.length();
    for (Integer key : arr.keys()) {
    }
    int actual1 = arr.length();
    int expected1 = origLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo033() {
    Int16Array arr = Int16Array.of(7, 14, 21);
    Int16Array.KeyIterator iter = arr.keys();
    Integer actual1 = arr.get(0);
    assertEqual(7, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(14, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(21, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo034() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    Int16Array.KeyIterator kit = arr.keys();
    Int16Array.KeyIterator vit = arr.values();
    kit.next();
    int actual1 = vit.next().value;
    assertEqual(100, actual1);
    int actual2 = kit.next().value;
    assertEqual(1, actual2);
    }

    @Test
    void testInt16ArrayKeysTestTwo035() {
    Int16Array arr = Int16Array.of(1);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    boolean actual1 = iter.next().done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo036() {
    Int16Array arr = Int16Array.of(1, 2);
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    iter.next();
    boolean allDone = true;
    for (int i = 0; i < 10; i++) {
    if (!iter.next().done) {
    allDone = false;
    }
    }
    assertTrue(allDone);
    }

    @Test
    void testInt16ArrayKeysTestTwo037() {
    Int16Array arr = new Int16Array(5);
    List<Integer> keysArr = new ArrayList<>();
    for (Integer key : arr.keys()) {
    keysArr.add(key);
    }
    int actual1 = keysArr.size();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo038() {
    Int16Array arr = new Int16Array(4);
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    int actual4 = iter.next().value;
    assertEqual(3, actual4);
    }

    @Test
    void testInt16ArrayKeysTestTwo039() {
    List<Integer> src = java.util.Arrays.asList(5, 10, 15, 20);
    Int16Array arr = Int16Array.from(src);
    Int16Array.KeyIterator iter = arr.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    int actual4 = iter.next().value;
    assertEqual(3, actual4);
    }

    @Test
    void testInt16ArrayKeysTestTwo040() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf, 0, 3);
    Int16Array.KeyIterator iter = arr.keys();
    int count = 0;
    IteratorResult r = iter.next();
    while (!r.done) {
    count++;
    r = iter.next();
    }
    assertEqual(3, count);
    }

    @Test
    void testInt16ArrayKeysTestTwo041() {
    Int16Array arr = new Int16Array(0);
    Int16Array.KeyIterator iter = arr.keys();
    boolean actual1 = iter.next().done;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo042() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array sub = arr.subarray(1, 4);
    Int16Array.KeyIterator iter = sub.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo043() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array sub = arr.subarray(1, 4);
    Int16Array.KeyIterator iter = sub.keys();
    int count = 0;
    IteratorResult r = iter.next();
    while (!r.done) {
    count++;
    r = iter.next();
    }
    assertEqual(sub.length(), count);
    }

    @Test
    void testInt16ArrayKeysTestTwo044() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array sub = arr.subarray(0, 3);
    Int16Array.KeyIterator iter = sub.keys();
    int actual1 = iter.next().value;
    assertEqual(0, actual1);
    int actual2 = iter.next().value;
    assertEqual(1, actual2);
    int actual3 = iter.next().value;
    assertEqual(2, actual3);
    }

    @Test
    void testInt16ArrayKeysTestTwo045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr1 = new Int16Array(buf, 0, 2);
    Int16Array arr2 = new Int16Array(buf, 4, 2);
    Int16Array.KeyIterator iter1 = arr1.keys();
    Int16Array.KeyIterator iter2 = arr2.keys();
    int c1 = 0;
    int c2 = 0;
    IteratorResult r1 = iter1.next();
    while (!r1.done) {
    c1++;
    r1 = iter1.next();
    }
    IteratorResult r2 = iter2.next();
    while (!r2.done) {
    c2++;
    r2 = iter2.next();
    }
    assertEqual(2, c1);
    assertEqual(2, c2);
    }

    @Test
    void testInt16ArrayKeysTestTwo046() {
    Int16Array arr = new Int16Array(4);
    ArrayBuffer bufBefore = arr.buffer();
    Int16Array.KeyIterator iter = arr.keys();
    iter.next();
    iter.next();
    boolean actual1 = arr.buffer() == bufBefore;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayKeysTestTwo047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arr = new Int16Array(buf, 0, 4);
    Int16Array.KeyIterator iter = arr.keys();
    IteratorResult r = iter.next();
    while (!r.done) {
    r = iter.next();
    }
    boolean actual1 = ArrayBuffer.isView(arr);
    assertTrue(actual1);
    }
}
