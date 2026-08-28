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

package basetype.uint8clampedarray2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayProperties01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayProperties01Test extends BasTest {

    @Test
    void testUint8ClampedArrayPropertiesOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertNotNull(arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne007() {
    assertEqual("Uint8ClampedArray", new Uint8ClampedArray(0).getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertEqual(0, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    assertEqual(1, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertEqual(2, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    assertEqual(2, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne015() {
    List<Integer> src = java.util.Arrays.asList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    assertEqual(255, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    assertEqual(255, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    assertEqual(256, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    assertEqual(256, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    assertEqual(1024, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    assertEqual(1024, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    assertEqual(65535, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    assertEqual(65535, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65536);
    assertEqual(65536, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne025() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne026() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne027() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne028() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne029() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne030() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(1, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne031() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne032() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne033() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne034() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(255, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne035() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(256, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne036() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual(1024, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne038() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 4);
    assertEqual(1, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne039() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 7, 1);
    assertEqual(7, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 0);
    assertEqual(8, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 0);
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 1);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 2);
    assertEqual(2, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3, 5);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3, 5);
    assertEqual(3, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne048() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(8, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne049() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    assertEqual(6, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne050() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne051() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 16);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne052() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayPropertiesOne053() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayPropertiesOne054() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayPropertiesOne055() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0x4);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne056() {
    try {
    Uint8ClampedArray arr = new Uint8ClampedArray(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayPropertiesOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0x10);
    assertEqual(16, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1e3);
    assertEqual(1000, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne059() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0);
    assertEqual(1, arr.length());
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayPropertiesOne060() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(255);
    assertEqual(1, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne061() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3, 4, 5);
    assertEqual(5, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayPropertiesOne062() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3, 4, 5);
    assertEqual(5, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne063() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray ofArr = Uint8ClampedArray.of(1);
    assertEqual(arr.BYTES_PER_ELEMENT, ofArr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(arr.length() * arr.BYTES_PER_ELEMENT, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(arr.length() * arr.BYTES_PER_ELEMENT, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne067() {
    assertEqual(17, new Uint8ClampedArray(0).getClass().getSimpleName().length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne068() {
    assertEqual('U', new Uint8ClampedArray(0).getClass().getSimpleName().charAt(0));
    }

    @Test
    void testUint8ClampedArrayPropertiesOne069() {
    assertEqual('y', new Uint8ClampedArray(0).getClass().getSimpleName().charAt(16));
    }

    @Test
    void testUint8ClampedArrayPropertiesOne070() {
    assertNotEqual("Uint8Array", new Uint8ClampedArray(0).getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne071() {
    assertNotEqual("", new Uint8ClampedArray(0).getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne072() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    assertEqual(b.buffer(), a.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne073() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 4, 4);
    Uint8ClampedArray c = new Uint8ClampedArray(buf, 8, 4);
    assertEqual(buf, a.buffer());
    assertEqual(buf, b.buffer());
    assertEqual(buf, c.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertTrue(arr.buffer().byteLength() >= arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne075() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 4);
    assertTrue(arr.buffer().byteLength() >= arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne076() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 16);
    assertEqual(32, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(3, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray();
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    arr.set(0, 99);
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.byteLength();
    arr.set(0, 99);
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.byteOffset();
    arr.set(0, 99);
    assertEqual(before, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer before = arr.buffer();
    arr.set(0, 99);
    assertEqual(before, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.length();
    arr.fill(0);
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.byteLength();
    arr.fill(0);
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    arr.reverse();
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.byteLength();
    arr.reverse();
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    int before = arr.length();
    arr.sort();
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    int before = arr.byteLength();
    arr.sort();
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    arr.set(0, 99);
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.byteLength();
    arr.set(0, 99);
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.length();
    arr.copyWithin(0, 1);
    assertEqual(before, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int before = arr.byteLength();
    arr.copyWithin(0, 1);
    assertEqual(before, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne095() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    assertEqual(10, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(3, arr.get(3));
    assertEqual(4, arr.get(4));
    assertEqual(5, arr.get(5));
    assertEqual(6, arr.get(6));
    assertEqual(7, arr.get(7));
    assertEqual(8, arr.get(8));
    assertEqual(9, arr.get(9));
    }

    @Test
    void testUint8ClampedArrayPropertiesOne096() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    assertEqual(10, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesOne097() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesOne098() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40, 50);
    assertEqual(arr.byteLength(), arr.length());
    }
}
