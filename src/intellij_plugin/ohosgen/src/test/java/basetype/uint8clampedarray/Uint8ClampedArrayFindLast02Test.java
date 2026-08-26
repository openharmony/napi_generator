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

package basetype.uint8clampedarray;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayFindLast02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayFindLast02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0100
     * @tc.name testUint8ClampedArrayFindLastTwo001
     * @tc.desc Verify findLast buffer reference matches for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer b1 = arr.buffer();
    Integer r = arr.findLast((v, i, a) -> v == 3);
    assertEqual(3, r);
    assertEqual(b1, arr.buffer());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0200
     * @tc.name testUint8ClampedArrayFindLastTwo002
     * @tc.desc Verify findLast yields byteOffset 2 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo002() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Integer r = arr.findLast((v, i, a) -> v == 0);
    assertEqual(0, r);
    assertEqual(2, arr.byteOffset());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0300
     * @tc.name testUint8ClampedArrayFindLastTwo003
     * @tc.desc Verify predicate throws Error is caught with correct name
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLast((v, i, a) -> { throw new Error("boom");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0400
     * @tc.name testUint8ClampedArrayFindLastTwo004
     * @tc.desc Verify findLast propagates Error on the second reverse callback invocation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    try {
    arr.findLast((v, i, a) -> {
    calls[0]++;
    if (i == 2) throw new Error("x");
    return false;});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(2, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0500
     * @tc.name testUint8ClampedArrayFindLastTwo005
     * @tc.desc Verify findLast propagates Error on the first reverse callback invocation
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    try {
    arr.findLast((v, i, a) -> {
    calls[0]++;
    throw new Error("imm");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(1, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0600
     * @tc.name testUint8ClampedArrayFindLastTwo006
     * @tc.desc Verify findLast preserves the first element when its callback throws Error
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.findLast((v, i, a) -> {
    throw new Error("x");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0700
     * @tc.name testUint8ClampedArrayFindLastTwo007
     * @tc.desc Verify findLast propagates Error thrown by the predicate
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.findLast((v, i, a) -> { throw new Error("str-err");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0800
     * @tc.name testUint8ClampedArrayFindLastTwo008
     * @tc.desc Verify findLast exposes the original array length before callback failure
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] seenLen = {0};
    try {
    arr.findLast((v, i, a) -> {
    seenLen[0] = a.length();
    throw new Error("x");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());};
    assertEqual(3, seenLen[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_0900
     * @tc.name testUint8ClampedArrayFindLastTwo009
     * @tc.desc Verify findLast calls equals 1 for array [1, 2, 3, 99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 99});
    int[] calls = {0};
    Integer r = arr.findLast((v, i, a) -> { calls[0]++; return v == 99;});
    assertEqual(99, r);
    assertEqual(1, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1000
     * @tc.name testUint8ClampedArrayFindLastTwo010
     * @tc.desc Verify findLast calls equals 2 for array [1, 2, 99, 100]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 99, 100});
    int[] calls = {0};
    arr.findLast((v, i, a) -> { calls[0]++; return v == 99;});
    assertEqual(2, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1100
     * @tc.name testUint8ClampedArrayFindLastTwo011
     * @tc.desc Verify findLast calls equals 3 for array [1, 99, 100, 101]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 99, 100, 101});
    int[] calls = {0};
    arr.findLast((v, i, a) -> { calls[0]++; return v == 99;});
    assertEqual(3, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1200
     * @tc.name testUint8ClampedArrayFindLastTwo012
     * @tc.desc Verify findLast calls equals 4 for array [99, 1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 1, 2, 3});
    int[] calls = {0};
    arr.findLast((v, i, a) -> { calls[0]++; return v == 99;});
    assertEqual(4, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1300
     * @tc.name testUint8ClampedArrayFindLastTwo013
     * @tc.desc Verify findLast last key equals 1 for array [7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7});
    int[] lastIdx = {-1};
    arr.findLast((v, i, a) -> { if (v == 7) { lastIdx[0] = i; return true;} return false;});
    assertEqual(1, lastIdx[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1400
     * @tc.name testUint8ClampedArrayFindLastTwo014
     * @tc.desc Verify findLast last key equals 2 for array [7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7});
    int[] lastIdx = {-1};
    arr.findLast((v, i, a) -> { if (v == 7) { lastIdx[0] = i; return true;} return false;});
    assertEqual(2, lastIdx[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1500
     * @tc.name testUint8ClampedArrayFindLastTwo015
     * @tc.desc Verify findLast calls equals 5 for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    arr.findLast((v, i, a) -> { calls[0]++; return i == 0;});
    assertEqual(5, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1600
     * @tc.name testUint8ClampedArrayFindLastTwo016
     * @tc.desc Verify subarray element at parent[1] equals 20 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo016() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    Integer r = sub.findLast((v, i, a) -> v == 20);
    assertEqual(20, r);
    assertEqual(20, parent.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1700
     * @tc.name testUint8ClampedArrayFindLastTwo017
     * @tc.desc Verify subarray findLast parent length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo017() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    Integer r = sub.findLast((v, i, a) -> v == 20);
    assertEqual(20, r);
    assertEqual(4, parent.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1800
     * @tc.name testUint8ClampedArrayFindLastTwo018
     * @tc.desc Verify slice element at arr[0] equals 1 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray cp = arr.slice();
    Integer r = cp.findLast((v, i, a) -> v == 1);
    assertEqual(1, r);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_1900
     * @tc.name testUint8ClampedArrayFindLastTwo019
     * @tc.desc Verify findLast element at b[0] equals 10 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo019() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 10); a.set(1, 20);
    Integer r = a.findLast((v, i, arr) -> i == 0);
    assertEqual(10, r);
    assertEqual(10, b.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_2000
     * @tc.name testUint8ClampedArrayFindLastTwo020
     * @tc.desc Verify findLast returns 3 after a nested find returns 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.findLast((v, i, a) -> { int inner = a.find((vv, ii, aa) -> vv == 1); return v == 3 && inner == 1;});
    assertEqual(3, r);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_2100
     * @tc.name testUint8ClampedArrayFindLastTwo021
     * @tc.desc Verify findLast r1 equals 2 and r2 equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r1 = arr.findLast((v, i, a) -> v == 2);
    Integer r2 = arr.findLast((v, i, a) -> v == 3);
    assertEqual(2, r1);
    assertEqual(3, r2);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_2200
     * @tc.name testUint8ClampedArrayFindLastTwo022
     * @tc.desc Verify toReversed r1 equals r2 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray reversed = arr.toReversed();
    Integer r1 = arr.findLast((v, i, a) -> v == 1);
    Integer r2 = reversed.find((v, i, a) -> v == 1);
    assertEqual(1, r1);
    assertEqual(1, r2);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FIND_LAST_TWO_2300
     * @tc.name testUint8ClampedArrayFindLastTwo023
     * @tc.desc Verify findLast returns 0 and predicate is invoked for array [0, 1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayFindLastTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2});
    boolean[] matched = {false};
    Integer r = arr.findLast((v, i, a) -> { if (v == 0) { matched[0] = true; return true;} return false;});
    assertTrue(matched[0]);
    assertEqual(0, r);}
}
