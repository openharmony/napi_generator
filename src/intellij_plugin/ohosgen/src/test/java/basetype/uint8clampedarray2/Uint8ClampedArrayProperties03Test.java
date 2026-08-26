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
import basetype.common.ClassCastError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayProperties03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayProperties03Test extends BasTest {

    @Test
    void testUint8ClampedArrayPropertiesThree001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    Uint8ClampedArray sub = arr.subarray(2, 5);
    assertEqual(3, sub.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(1, 4);
    assertEqual(3, s.length());
    assertEqual(2, s.get(0));
    assertEqual(3, s.get(1));
    assertEqual(4, s.get(2));
    }

    @Test
    void testUint8ClampedArrayPropertiesThree004() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertNotNull(arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree006() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertEqual("Uint8ClampedArray", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(4));
    assertEqual("Uint8ClampedArray", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree008() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2);
    assertEqual("Uint8ClampedArray", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual("Uint8ClampedArray", sub.getClass().getSimpleName());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesThree010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual("Uint8ClampedArray", s.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree011() {
    Uint8ClampedArray m = new Uint8ClampedArray(new int[] {1, 2, 3}).map((x) -> x);
    assertEqual("Uint8ClampedArray", m.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree012() {
    Uint8ClampedArray f = new Uint8ClampedArray(new int[] {1, 2, 3}).filter((x) -> x > 0);
    assertEqual("Uint8ClampedArray", f.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree013() {
    Uint8ClampedArray r = new Uint8ClampedArray(new int[] {1, 2, 3}).toReversed();
    assertEqual("Uint8ClampedArray", r.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    int tmp = arr.BYTES_PER_ELEMENT;
    assertEqual(before, arr.length());
    assertEqual(1, tmp);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    ArrayBuffer tmp = arr.buffer();
    assertEqual(3, tmp.byteLength());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayPropertiesThree016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(8), 2, 4);
    int before = arr.byteLength();
    int tmp = arr.byteOffset();
    assertEqual(before, arr.byteLength());
    assertEqual(2, tmp);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    int before = arr.length();
    int tmp = arr.byteLength();
    assertEqual(before, arr.length());
    assertEqual(8, tmp);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    int before = arr.byteLength();
    int tmp = arr.length();
    assertEqual(before, arr.byteLength());
    assertEqual(8, tmp);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    String tmp = arr.getClass().getSimpleName();
    assertEqual(before, arr.length());
    assertEqual("Uint8ClampedArray", tmp);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    ArrayBuffer b1 = arr.buffer();
    ArrayBuffer b2 = arr.buffer();
    assertEqual(b2, b1);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(4), 1, 2);
    int byteOffsetA = arr.byteOffset();
    int byteOffsetB = arr.byteOffset();
    assertEqual(byteOffsetB, byteOffsetA);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    int byteLengthA = arr.byteLength();
    int byteLengthB = arr.byteLength();
    assertEqual(byteLengthB, byteLengthA);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    int lengthA = arr.length();
    int lengthB = arr.length();
    assertEqual(lengthB, lengthA);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    String nameA = arr.getClass().getSimpleName();
    String nameB = arr.getClass().getSimpleName();
    assertEqual(nameB, nameA);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    int bytesPerElementA = arr.BYTES_PER_ELEMENT;
    int bytesPerElementB = arr.BYTES_PER_ELEMENT;
    assertEqual(bytesPerElementB, bytesPerElementA);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree026() {
    ArrayBuffer raw = new ArrayBuffer(8);
    Uint8ClampedArray frontView = new Uint8ClampedArray(raw, 0, 3);
    Uint8ClampedArray backView = new Uint8ClampedArray(raw, 3, 5);
    assertTrue(frontView.byteLength() + backView.byteLength() <= raw.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree027() {
    ArrayBuffer raw = new ArrayBuffer(8);
    Uint8ClampedArray v = new Uint8ClampedArray(raw, 4, 0);
    assertEqual(4, v.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    Object obj = arr;
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0377});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MAX_VALUE});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MIN_VALUE});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-0});
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0, 255, 256, -1, Double.NaN});
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0, 255, 256, -1, Double.NaN});
    assertEqual(5, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree051() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, -100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayPropertiesThree052() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 010);
    assertEqual(8, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree053() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0b100);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree054() {
    try {
    Uint8ClampedArray arr = new Uint8ClampedArray(-100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayPropertiesThree055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(020);
    assertEqual(16, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0b10000);
    assertEqual(16, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree057() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree058() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(256);
    assertEqual(1, arr.length());
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayPropertiesThree059() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.NaN);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree060() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-1);
    assertEqual(1, arr.length());
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayPropertiesThree061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    assertEqual(10, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree062() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3, 4);
    assertEqual(4, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    int v = arr.BYTES_PER_ELEMENT;
    assertEqual(1, v);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16));
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(1, sub.BYTES_PER_ELEMENT);
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesThree068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual(1, s.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree069() {
    ArrayBuffer raw = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(raw);
    assertEqual(raw, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16));
    assertEqual(16, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    int v = arr.byteOffset();
    assertEqual(0, v);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    int v = arr.byteLength();
    assertEqual(4, v);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    int v = arr.length();
    assertEqual(4, v);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree074() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree075() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1);
    assertEqual(1, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree076() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree077() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8);
    assertEqual(8, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree078() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 15);
    assertEqual(15, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree080() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3);
    assertEqual(3, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    assertEqual(1, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    assertEqual("Uint8ClampedArray", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    Uint8ClampedArray sub = arr.subarray(2, 7);
    assertEqual(sub.length(), sub.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16), 4, 10);
    Uint8ClampedArray sub = arr.subarray(2, 5);
    assertEqual(6, sub.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    Uint8ClampedArray sub = arr.subarray(2, 7);
    assertEqual(1, sub.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree086() {
    ArrayBuffer raw = new ArrayBuffer(8);
    Uint8ClampedArray frontView = new Uint8ClampedArray(raw, 0, 4);
    Uint8ClampedArray backView = new Uint8ClampedArray(raw, 4, 4);
    assertEqual(0, frontView.byteOffset());
    assertEqual(4, backView.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree087() {
    ArrayBuffer raw = new ArrayBuffer(8);
    Uint8ClampedArray frontView = new Uint8ClampedArray(raw, 0, 3);
    Uint8ClampedArray backView = new Uint8ClampedArray(raw, 3, 5);
    assertEqual(3, frontView.length());
    assertEqual(5, backView.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree088() {
    ArrayBuffer raw = new ArrayBuffer(8);
    Uint8ClampedArray v = new Uint8ClampedArray(raw, 4, 0);
    assertEqual(raw, v.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    assertEqual(0, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    assertEqual(arr.length() * arr.BYTES_PER_ELEMENT, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesThree091() {
    assertEqual(1, Uint8ClampedArray.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesThree092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    assertEqual(Uint8ClampedArray.BYTES_PER_ELEMENT, arr.BYTES_PER_ELEMENT);
    }
}
