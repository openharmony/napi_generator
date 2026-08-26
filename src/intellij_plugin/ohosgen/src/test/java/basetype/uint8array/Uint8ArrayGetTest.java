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

package basetype.uint8array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayGetTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayGetTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0010
     * @tc.name testUint8ArrayGet001
     * @tc.desc Verify $_get with valid parameter for array access
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet001() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int v = arr.get(0);
    assertEqual(10, v);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0020
     * @tc.name testUint8ArrayGet002
     * @tc.desc Verify empty array get(0) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet002() {
    Uint8Array arr = new Uint8Array();
    try {
    arr.get(0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0030
     * @tc.name testUint8ArrayGet003
     * @tc.desc Verify empty array get(-1) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet003() {
    Uint8Array arr = new Uint8Array();
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0040
     * @tc.name testUint8ArrayGet004
     * @tc.desc Verify empty array get(1) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet004() {
    Uint8Array arr = new Uint8Array();
    try {
    arr.get(1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0050
     * @tc.name testUint8ArrayGet005
     * @tc.desc Verify empty array get(100) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet005() {
    Uint8Array arr = new Uint8Array();
    try {
    arr.get(100);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0060
     * @tc.name testUint8ArrayGet006
     * @tc.desc Verify empty array get(-100) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet006() {
    Uint8Array arr = new Uint8Array();
    try {
    arr.get(-100);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0070
     * @tc.name testUint8ArrayGet007
     * @tc.desc Verify single element array of(42) get(0) returns 42
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet007() {
    Uint8Array arr = Uint8Array.of(42);
    assertEqual(42, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0080
     * @tc.name testUint8ArrayGet008
     * @tc.desc Verify single element array of(42) get(1) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet008() {
    Uint8Array arr = Uint8Array.of(42);
    try {
    arr.get(1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0090
     * @tc.name testUint8ArrayGet009
     * @tc.desc Verify single element array of(42) get(-1) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet009() {
    Uint8Array arr = Uint8Array.of(42);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0100
     * @tc.name testUint8ArrayGet010
     * @tc.desc Verify single element array of(42) get(2) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet010() {
    Uint8Array arr = Uint8Array.of(42);
    try {
    arr.get(2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0110
     * @tc.name testUint8ArrayGet011
     * @tc.desc Verify single element array of(42) get(-2) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet011() {
    Uint8Array arr = Uint8Array.of(42);
    try {
    arr.get(-2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0120
     * @tc.name testUint8ArrayGet012
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(0) returns first element 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet012() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0130
     * @tc.name testUint8ArrayGet013
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(1) returns second element 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet013() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    assertEqual(20, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0140
     * @tc.name testUint8ArrayGet014
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(3) returns element 40
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet014() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    assertEqual(40, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0150
     * @tc.name testUint8ArrayGet015
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(4) returns last element 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet015() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    assertEqual(50, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0160
     * @tc.name testUint8ArrayGet016
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(5) exactly out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet016() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(5);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0170
     * @tc.name testUint8ArrayGet017
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(6) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet017() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(6);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0180
     * @tc.name testUint8ArrayGet018
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(-1) negative index throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet018() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0190
     * @tc.name testUint8ArrayGet019
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(-5) negative index absolute value equals length throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet019() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(-5);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0200
     * @tc.name testUint8ArrayGet020
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(-6) negative index exceeds length throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet020() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(-6);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0210
     * @tc.name testUint8ArrayGet021
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(100) large positive out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(100);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0220
     * @tc.name testUint8ArrayGet022
     * @tc.desc Verify multi-element array of(10,20,30,40,50) get(-100) large negative out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet022() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    try {
    arr.get(-100);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0230
     * @tc.name testUint8ArrayGet023
     * @tc.desc Verify boundary value array of(0,255,127,128) get(0) returns minimum value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet023() {
    Uint8Array arr = Uint8Array.of(0, 255, 127, 128);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0240
     * @tc.name testUint8ArrayGet024
     * @tc.desc Verify boundary value array of(0,255,127,128) get(1) returns maximum value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet024() {
    Uint8Array arr = Uint8Array.of(0, 255, 127, 128);
    assertEqual(255, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0250
     * @tc.name testUint8ArrayGet025
     * @tc.desc Verify boundary value array of(0,255,127,128) get(2) returns middle value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet025() {
    Uint8Array arr = Uint8Array.of(0, 255, 127, 128);
    assertEqual(127, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0260
     * @tc.name testUint8ArrayGet026
     * @tc.desc Verify boundary value array of(0,255,127,128) get(3) returns middle value plus one 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet026() {
    Uint8Array arr = Uint8Array.of(0, 255, 127, 128);
    assertEqual(128, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0270
     * @tc.name testUint8ArrayGet027
     * @tc.desc Verify boundary value array of(0,255,127,128) get(4) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet027() {
    Uint8Array arr = Uint8Array.of(0, 255, 127, 128);
    try {
    arr.get(4);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0280
     * @tc.name testUint8ArrayGet028
     * @tc.desc Verify all same elements array of(7,7,7) get(0) returns 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet028() {
    Uint8Array arr = Uint8Array.of(7, 7, 7);
    assertEqual(7, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0290
     * @tc.name testUint8ArrayGet029
     * @tc.desc Verify all same elements array of(7,7,7) get(1) returns 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet029() {
    Uint8Array arr = Uint8Array.of(7, 7, 7);
    assertEqual(7, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0300
     * @tc.name testUint8ArrayGet030
     * @tc.desc Verify all same elements array of(7,7,7) get(2) returns 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet030() {
    Uint8Array arr = Uint8Array.of(7, 7, 7);
    assertEqual(7, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0310
     * @tc.name testUint8ArrayGet031
     * @tc.desc Verify all same elements array of(7,7,7) get(3) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet031() {
    Uint8Array arr = Uint8Array.of(7, 7, 7);
    try {
    arr.get(3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0320
     * @tc.name testUint8ArrayGet032
     * @tc.desc Verify default zero value array new Uint8Array(5) get(0) returns default value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet032() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0330
     * @tc.name testUint8ArrayGet033
     * @tc.desc Verify default zero value array new Uint8Array(5) get(3) returns default value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet033() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(0, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0340
     * @tc.name testUint8ArrayGet034
     * @tc.desc Verify default zero value array new Uint8Array(5) get(4) returns last default value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet034() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(0, arr.get(4));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0350
     * @tc.name testUint8ArrayGet035
     * @tc.desc Verify default zero value array new Uint8Array(5) get(5) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet035() {
    Uint8Array arr = new Uint8Array(5);
    try {
    arr.get(5);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0360
     * @tc.name testUint8ArrayGet036
     * @tc.desc Verify default zero value array new Uint8Array(5) get(-1) negative index throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet036() {
    Uint8Array arr = new Uint8Array(5);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0370
     * @tc.name testUint8ArrayGet037
     * @tc.desc Verify large array new Uint8Array(100) get(0) first element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet037() {
    Uint8Array arr = new Uint8Array(100);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0380
     * @tc.name testUint8ArrayGet038
     * @tc.desc Verify large array new Uint8Array(100) get(50) middle element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet038() {
    Uint8Array arr = new Uint8Array(100);
    assertEqual(0, arr.get(50));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0390
     * @tc.name testUint8ArrayGet039
     * @tc.desc Verify large array new Uint8Array(100) get(99) last element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet039() {
    Uint8Array arr = new Uint8Array(100);
    assertEqual(0, arr.get(99));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0400
     * @tc.name testUint8ArrayGet040
     * @tc.desc Verify large array new Uint8Array(100) get(100) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet040() {
    Uint8Array arr = new Uint8Array(100);
    try {
    arr.get(100);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0410
     * @tc.name testUint8ArrayGet041
     * @tc.desc Verify large array new Uint8Array(100) get(-1) negative index throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet041() {
    Uint8Array arr = new Uint8Array(100);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0420
     * @tc.name testUint8ArrayGet042
     * @tc.desc Verify larger array new Uint8Array(1000) get(999) last element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet042() {
    Uint8Array arr = new Uint8Array(1000);
    assertEqual(0, arr.get(999));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0430
     * @tc.name testUint8ArrayGet043
     * @tc.desc Verify larger array new Uint8Array(1000) get(1000) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet043() {
    Uint8Array arr = new Uint8Array(1000);
    try {
    arr.get(1000);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0440
     * @tc.name testUint8ArrayGet044
     * @tc.desc Verify different construction method of(1,2,3) get(0) returns first element 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0450
     * @tc.name testUint8ArrayGet045
     * @tc.desc Verify different construction method of(1,2,3) get(1) returns middle element 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet045() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0460
     * @tc.name testUint8ArrayGet046
     * @tc.desc Verify different construction method of(1,2,3) get(2) returns last element 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet046() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0470
     * @tc.name testUint8ArrayGet047
     * @tc.desc Verify different construction method from([1,2,3]) get(0) returns first element 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet047() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0480
     * @tc.name testUint8ArrayGet048
     * @tc.desc Verify different construction method from([1,2,3]) get(1) returns middle element 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet048() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0490
     * @tc.name testUint8ArrayGet049
     * @tc.desc Verify different construction method from([1,2,3]) get(2) returns last element 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet049() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0500
     * @tc.name testUint8ArrayGet050
     * @tc.desc Verify different construction method from([1,2,3]) get(3) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet050() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    try {
    arr.get(3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0510
     * @tc.name testUint8ArrayGet051
     * @tc.desc Verify copy construction from(of(1,2,3)) get(0) returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet051() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0520
     * @tc.name testUint8ArrayGet052
     * @tc.desc Verify copy construction from(of(1,2,3)) get(2) returns 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet052() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0530
     * @tc.name testUint8ArrayGet053
     * @tc.desc Verify copy construction from(of(1,2,3)) get(3) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet053() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array arr = Uint8Array.from(src);
    try {
    arr.get(3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0540
     * @tc.name testUint8ArrayGet054
     * @tc.desc Verify FixedArray construction [10,20,30] get(0) returns 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet054() {
    int[] src = new int[] {10, 20, 30};
    Uint8Array arr = new Uint8Array(src);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0550
     * @tc.name testUint8ArrayGet055
     * @tc.desc Verify FixedArray construction [10,20,30] get(2) returns 30
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet055() {
    int[] src = new int[] {10, 20, 30};
    Uint8Array arr = new Uint8Array(src);
    assertEqual(30, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0560
     * @tc.name testUint8ArrayGet056
     * @tc.desc Verify FixedArray construction [10,20,30] get(3) out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet056() {
    int[] src = new int[] {10, 20, 30};
    Uint8Array arr = new Uint8Array(src);
    try {
    arr.get(3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0570
     * @tc.name testUint8ArrayGet057
     * @tc.desc Verify new Uint8Array(3) with $_set construction get(0) returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet057() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0580
     * @tc.name testUint8ArrayGet058
     * @tc.desc Verify new Uint8Array(3) with $_set construction get(1) returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet058() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    assertEqual(2, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0590
     * @tc.name testUint8ArrayGet059
     * @tc.desc Verify new Uint8Array(3) with $_set construction get(2) returns 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet059() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    assertEqual(3, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0600
     * @tc.name testUint8ArrayGet060
     * @tc.desc Verify different literal base of(0x0A) hexadecimal construction get(0) returns 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet060() {
    Uint8Array arr = Uint8Array.of(0x0A);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0610
     * @tc.name testUint8ArrayGet061
     * @tc.desc Verify different literal base of(0b1010) binary construction get(0) returns 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet061() {
    Uint8Array arr = Uint8Array.of(0b1010);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0620
     * @tc.name testUint8ArrayGet062
     * @tc.desc Verify different literal base of(0o12) octal construction get(0) returns 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet062() {
    Uint8Array arr = Uint8Array.of(012);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0630
     * @tc.name testUint8ArrayGet063
     * @tc.desc Verify different literal base of(0xFF) hexadecimal maximum value construction get(0) returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet063() {
    Uint8Array arr = Uint8Array.of(0xFF);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0640
     * @tc.name testUint8ArrayGet064
     * @tc.desc Verify different literal base of(0x80) hexadecimal middle value construction get(0) returns 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet064() {
    Uint8Array arr = Uint8Array.of(0x80);
    assertEqual(128, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0650
     * @tc.name testUint8ArrayGet065
     * @tc.desc Verify super large array out of bounds of(1,2,3) get(1000000) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet065() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.get(1000000);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0660
     * @tc.name testUint8ArrayGet066
     * @tc.desc Verify super large array out of bounds of(1,2,3) get(-1000000) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet066() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.get(-1000000);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0670
     * @tc.name testUint8ArrayGet067
     * @tc.desc Verify empty array of() get(2147483647) large positive out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet067() {
    Uint8Array arr = Uint8Array.of();
    try {
    arr.get(2147483647);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0680
     * @tc.name testUint8ArrayGet068
     * @tc.desc Verify empty array of() get(-2147483648) large negative out of bounds throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet068() {
    Uint8Array arr = Uint8Array.of();
    try {
    arr.get(Integer.MIN_VALUE);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0690
     * @tc.name testUint8ArrayGet069
     * @tc.desc Verify return value type assertion of(10) get(0) return value is number type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet069() {
    Uint8Array arr = Uint8Array.of(10);
    int v = arr.get(0);
    assertEqual(10, v);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0700
     * @tc.name testUint8ArrayGet070
     * @tc.desc Verify return value type assertion of(255) get(0) return value is number type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet070() {
    Uint8Array arr = Uint8Array.of(255);
    int v = arr.get(0);
    assertEqual(255, v);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0710
     * @tc.name testUint8ArrayGet071
     * @tc.desc Verify return value type assertion of(0) get(0) return value is number type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet071() {
    Uint8Array arr = Uint8Array.of(0);
    int v = arr.get(0);
    assertEqual(0, v);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0720
     * @tc.name testUint8ArrayGet072
     * @tc.desc Verify return value type assertion of(128) get(0) return value is number type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet072() {
    Uint8Array arr = Uint8Array.of(128);
    int v = arr.get(0);
    assertEqual(128, v);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0730
     * @tc.name testUint8ArrayGet073
     * @tc.desc Verify return value assertion of(200) get(0) return value is 200
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet073() {
    Uint8Array arr = Uint8Array.of(200);
    assertEqual(200, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0740
     * @tc.name testUint8ArrayGet074
     * @tc.desc Verify return value assertion of(1,50,100,150,200,250) get(5) returns last element 250
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet074() {
    Uint8Array arr = Uint8Array.of(1, 50, 100, 150, 200, 250);
    assertEqual(250, arr.get(5));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0750
     * @tc.name testUint8ArrayGet075
     * @tc.desc Verify return value assertion of(1,50,100,150,200,250) get(3) returns 150
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet075() {
    Uint8Array arr = Uint8Array.of(1, 50, 100, 150, 200, 250);
    assertEqual(150, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0760
     * @tc.name testUint8ArrayGet076
     * @tc.desc Verify return value assertion of(1,50,100,150,200,250) get(1) returns 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet076() {
    Uint8Array arr = Uint8Array.of(1, 50, 100, 150, 200, 250);
    assertEqual(50, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0770
     * @tc.name testUint8ArrayGet077
     * @tc.desc Verify consistency same index repeated read twice returns same value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet077() {
    Uint8Array arr = Uint8Array.of(77, 88, 99);
    int firstRead = arr.get(1);
    int secondRead = arr.get(1);
    assertEqual(secondRead, firstRead);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0780
     * @tc.name testUint8ArrayGet078
     * @tc.desc Verify consistency multi-element array consecutive reads do not affect each other
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet078() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    assertEqual(5, arr.get(0));
    assertEqual(15, arr.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0790
     * @tc.name testUint8ArrayGet079
     * @tc.desc Verify consistency read after write new value then read returns new value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet079() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.set(1, 99);
    assertEqual(99, arr.get(1));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0800
     * @tc.name testUint8ArrayGet080
     * @tc.desc Verify consistency write to different index does not affect original index value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet080() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.set(2, 0);
    assertEqual(10, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0810
     * @tc.name testUint8ArrayGet081
     * @tc.desc Verify consistency full write then read each to verify integrity
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet081() {
    Uint8Array arr = new Uint8Array(4);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    arr.set(3, 44);
    assertEqual(11, arr.get(0));
    assertEqual(44, arr.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0820
     * @tc.name testUint8ArrayGet082
     * @tc.desc Verify (4) boundary out of bounds throws RangeError on Uint8Array(1,2,3,4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet082() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    try {
    arr.get(4);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0830
     * @tc.name testUint8ArrayGet083
     * @tc.desc Verify (-1) negative index throws RangeError on Uint8Array(1,2,3,4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet083() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0840
     * @tc.name testUint8ArrayGet084
     * @tc.desc Verify (-4) negative value equals length throws RangeError on Uint8Array(1,2,3,4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet084() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    try {
    arr.get(-4);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0850
     * @tc.name testUint8ArrayGet085
     * @tc.desc Verify (-5) negative value exceeds length throws RangeError on Uint8Array(1,2,3,4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet085() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    try {
    arr.get(-5);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0860
     * @tc.name testUint8ArrayGet086
     * @tc.desc Verify (10) positive out of bounds throws RangeError on Uint8Array(1,2,3,4)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet086() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    try {
    arr.get(10);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0870
     * @tc.name testUint8ArrayGet087
     * @tc.desc Verify error handling boundary new Uint8Array(0) get(0) zero length array throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet087() {
    Uint8Array arr = new Uint8Array(0);
    try {
    arr.get(0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0880
     * @tc.name testUint8ArrayGet088
     * @tc.desc Verify error handling boundary new Uint8Array(0) get(-1) zero length array throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet088() {
    Uint8Array arr = new Uint8Array(0);
    try {
    arr.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0890
     * @tc.name testUint8ArrayGet089
     * @tc.desc Verify error handling boundary of(0) get(-0) negative zero degenerate get(0) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet089() {
    Uint8Array arr = Uint8Array.of(0);
    assertEqual(0, arr.get(-0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0900
     * @tc.name testUint8ArrayGet090
     * @tc.desc Verify error handling boundary of(1) get(0) then get(1) first valid second out of bounds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet090() {
    Uint8Array arr = Uint8Array.of(1);
    assertEqual(1, arr.get(0));
    try {
    arr.get(1);
    fail();} catch (RangeError e) { assertEqual("basetype.common.RangeError", BasTest.className(e));};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0910
     * @tc.name testUint8ArrayGet091
     * @tc.desc Verify error handling boundary of(100,200) get(2) exactly exceeds length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet091() {
    Uint8Array arr = Uint8Array.of(100, 200);
    try {
    arr.get(2);
    fail();} catch (RangeError e) { assertEqual("basetype.common.RangeError", BasTest.className(e));};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0920
     * @tc.name testUint8ArrayGet092
     * @tc.desc Verify error handling boundary of(100,200) get(-3) negative value exceeds length absolute value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet092() {
    Uint8Array arr = Uint8Array.of(100, 200);
    try {
    arr.get(-3);
    fail();} catch (RangeError e) { assertEqual("basetype.common.RangeError", BasTest.className(e));};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0930
     * @tc.name testUint8ArrayGet093
     * @tc.desc Verify truncation overflow semantics $_set(0, 256) overflow truncates to 0 then get(0) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet093() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 256);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0940
     * @tc.name testUint8ArrayGet094
     * @tc.desc Verify truncation overflow semantics $_set(0, -1) negative wrap to 255 then get(0) returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet094() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -1);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0950
     * @tc.name testUint8ArrayGet095
     * @tc.desc Verify truncation overflow semantics $_set(0, 0x100) hexadecimal overflow truncates to 0 then get(0) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet095() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0x100);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0960
     * @tc.name testUint8ArrayGet096
     * @tc.desc Verify truncation overflow semantics $_set(0, 0xFF) hexadecimal maximum value get(0) returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet096() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0xFF);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0970
     * @tc.name testUint8ArrayGet097
     * @tc.desc Verify truncation overflow semantics $_set(0, 3.14) float truncates to 3 then get(0) returns 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet097() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 3.14);
    assertEqual(3, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0980
     * @tc.name testUint8ArrayGet098
     * @tc.desc Verify truncation overflow semantics $_set(0, 1.5) float truncates to 1 then get(0) returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet098() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 1.5);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_0990
     * @tc.name testUint8ArrayGet099
     * @tc.desc Verify truncation overflow semantics $_set(0, 511) 511 & 0xFF = 255 then get(0) returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet099() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 511);
    assertEqual(255, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1000
     * @tc.name testUint8ArrayGet100
     * @tc.desc Verify truncation overflow semantics $_set(0, -255) -255 wrap to 1 then get(0) returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet100() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, -255);
    assertEqual(1, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1010
     * @tc.name testUint8ArrayGet101
     * @tc.desc Verify truncation overflow semantics $_set(0, 0) then get(0) returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet101() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 0);
    assertEqual(0, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1020
     * @tc.name testUint8ArrayGet102
     * @tc.desc Verify truncation overflow semantics $_set(0, 2.0) integer literal 2.0 then get(0) returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet102() {
    Uint8Array arr = new Uint8Array(1);
    arr.set(0, 2.0);
    assertEqual(2, arr.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1030
     * @tc.name testUint8ArrayGet103
     * @tc.desc Verify view/buffer sharing ArrayBuffer create view get(0) correctly reads written value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet103() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint8Array writer = new Uint8Array(buffer);
    writer.set(0, 55);
    writer.set(1, 66);
    Uint8Array reader = new Uint8Array(buffer);
    assertEqual(55, reader.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1040
     * @tc.name testUint8ArrayGet104
     * @tc.desc Verify view/buffer sharing ArrayBuffer with offset view get(0) reads offset position value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet104() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint8Array writer = new Uint8Array(buffer);
    writer.set(2, 77);
    Uint8Array reader = new Uint8Array(buffer, 2, 3);
    assertEqual(77, reader.get(0));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1050
     * @tc.name testUint8ArrayGet105
     * @tc.desc Verify view/buffer sharing ArrayBuffer offset view get(2) reads third element after offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet105() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint8Array writer = new Uint8Array(buffer);
    writer.set(3, 88);
    Uint8Array reader = new Uint8Array(buffer, 1, 5);
    assertEqual(88, reader.get(2));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1060
     * @tc.name testUint8ArrayGet106
     * @tc.desc Verify view/buffer sharing ArrayBuffer offset view length out of bounds get(3) throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet106() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint8Array writer = new Uint8Array(buffer);
    writer.set(0, 10);
    writer.set(1, 20);
    writer.set(2, 30);
    Uint8Array reader = new Uint8Array(buffer, 0, 3);
    try {
    reader.get(3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1070
     * @tc.name testUint8ArrayGet107
     * @tc.desc Verify view/buffer sharing ArrayBuffer offset view get(-1) negative index throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet107() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint8Array reader = new Uint8Array(buffer, 0, 3);
    try {
    reader.get(-1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_GET_1080
     * @tc.name testUint8ArrayGet108
     * @tc.desc Verify view/buffer sharing ArrayBuffer parent write child read shared buffer semantics
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayGet108() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint8Array parent = new Uint8Array(buffer);
    parent.set(0, 1);
    parent.set(1, 2);
    parent.set(2, 3);
    parent.set(3, 4);
    Uint8Array child = new Uint8Array(buffer, 2, 2);
    assertEqual(3, child.get(0));
    assertEqual(4, child.get(1));}
}
