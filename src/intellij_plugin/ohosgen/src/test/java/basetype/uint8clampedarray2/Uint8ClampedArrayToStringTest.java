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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayToStringTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayToStringTest extends BasTest {

    @Test
    void testUint8ClampedArrayToString001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String s = String.valueOf(arr);
    assertEqual("1,2,3", s);
    }

    @Test
    void testUint8ClampedArrayToString002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String s = String.valueOf(arr);
    assertEqual("", s);
    }

    @Test
    void testUint8ClampedArrayToString003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    assertEqual("255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    assertEqual("255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    assertEqual("255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY});
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    assertEqual("128", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    assertEqual("128", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    assertEqual("0,255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, -1});
    assertEqual("255,0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    assertEqual("0,0,0,0,0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-5, 100, 999});
    assertEqual("0,100,255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString017() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual("1,2,3", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString018() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual("10,20,30", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString019() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 7);
    arr.set(1, 8);
    arr.set(2, 9);
    assertEqual("7,8,9", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString020() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 3);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    assertEqual("11,22,33", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString021() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {4, 5, 6});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual("4,5,6", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString022() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    assertEqual("20,30,40", String.valueOf(sub));
    }

    @Test
    void testUint8ClampedArrayToString023() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray s = parent.slice(2);
    assertEqual("30,40,50", String.valueOf(s));
    }

    @Test
    void testUint8ClampedArrayToString024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.fill(7);
    assertEqual("7,7,7,7", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    List<Integer> src = java.util.Arrays.asList(9, 8, 7);
    arr.set(src, 0);
    assertEqual("9,8,7", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.copyWithin(2, 0, 2);
    assertEqual("1,2,1,2", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    assertEqual("3,2,1", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort();
    assertEqual("1,2,3", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    assertEqual("10,20", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayList<>());
    assertEqual("", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString031() {
    assertEqual("", Uint8ClampedArray.of().toString());
    }

    @Test
    void testUint8ClampedArrayToString032() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    assertEqual("", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("", arr.subarray(1, 1).toString());
    }

    @Test
    void testUint8ClampedArrayToString034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("", arr.slice(2, 2).toString());
    }

    @Test
    void testUint8ClampedArrayToString035() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 0);
    assertEqual("", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString036() {
    assertEqual("1", new Uint8ClampedArray(new int[] {1}).toString());
    }

    @Test
    void testUint8ClampedArrayToString037() {
    assertEqual("127", new Uint8ClampedArray(new int[] {127}).toString());
    }

    @Test
    void testUint8ClampedArrayToString038() {
    assertEqual("128", new Uint8ClampedArray(new int[] {128}).toString());
    }

    @Test
    void testUint8ClampedArrayToString039() {
    assertEqual("0", new Uint8ClampedArray(new double[] {0.4}).toString());
    }

    @Test
    void testUint8ClampedArrayToString040() {
    assertEqual("1", new Uint8ClampedArray(new double[] {0.9}).toString());
    }

    @Test
    void testUint8ClampedArrayToString041() {
    assertEqual("255", new Uint8ClampedArray(new double[] {1e9}).toString());
    }

    @Test
    void testUint8ClampedArrayToString042() {
    assertEqual("0", new Uint8ClampedArray(new int[] {-0}).toString());
    }

    @Test
    void testUint8ClampedArrayToString043() {
    assertEqual("255", new Uint8ClampedArray(new double[] {Double.MAX_VALUE}).toString());
    }

    @Test
    void testUint8ClampedArrayToString044() {
    assertEqual("0", new Uint8ClampedArray(new double[] {Double.MIN_VALUE}).toString());
    }

    @Test
    void testUint8ClampedArrayToString045() {
    assertEqual("0,0", new Uint8ClampedArray(new int[] {0, 0}).toString());
    }

    @Test
    void testUint8ClampedArrayToString046() {
    assertEqual("1,2", new Uint8ClampedArray(new int[] {1, 2}).toString());
    }

    @Test
    void testUint8ClampedArrayToString047() {
    assertEqual("255,0", new Uint8ClampedArray(new int[] {255, 0}).toString());
    }

    @Test
    void testUint8ClampedArrayToString048() {
    assertEqual("255,255", new Uint8ClampedArray(new int[] {255, 255}).toString());
    }

    @Test
    void testUint8ClampedArrayToString049() {
    assertEqual("0,100", new Uint8ClampedArray(new double[] {Double.NaN, 100}).toString());
    }

    @Test
    void testUint8ClampedArrayToString050() {
    assertEqual("10,20,30,40,50", new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50}).toString());
    }

    @Test
    void testUint8ClampedArrayToString051() {
    assertEqual("255,255,255,255", new Uint8ClampedArray(new int[] {255, 255, 255, 255}).toString());
    }

    @Test
    void testUint8ClampedArrayToString052() {
    assertEqual("1,2,3,4,5,6,7,8,9,10", new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}).toString());
    }

    @Test
    void testUint8ClampedArrayToString053() {
    assertEqual("5,4,3,2,1", new Uint8ClampedArray(new int[] {5, 4, 3, 2, 1}).toString());
    }

    @Test
    void testUint8ClampedArrayToString054() {
    assertEqual("255,255,255", new Uint8ClampedArray(new int[] {256, 256, 256}).toString());
    }

    @Test
    void testUint8ClampedArrayToString055() {
    assertEqual("0,0,0", new Uint8ClampedArray(new int[] {-10, -20, -30}).toString());
    }

    @Test
    void testUint8ClampedArrayToString056() {
    assertEqual("255,15,3", new Uint8ClampedArray(new int[] {0xFF, 017, 0b11}).toString());
    }

    @Test
    void testUint8ClampedArrayToString057() {
    assertEqual("100,20", new Uint8ClampedArray(new double[] {1e2, 2e1}).toString());
    }

    @Test
    void testUint8ClampedArrayToString058() {
    assertEqual("0,0,0,0,0,0,0,0,0,0", new Uint8ClampedArray(10).toString());
    }

    @Test
    void testUint8ClampedArrayToString059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    assertEqual(199, String.valueOf(arr).length());
    }

    @Test
    void testUint8ClampedArrayToString060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    for (int i = 0; i < 256; i++) {
        arr.set(i, i);
    }
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    arr.fill(255);
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    assertEqual("1,2,3", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 50);
    arr.set(1, 60);
    assertEqual("50,60", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 300);
    arr.set(1, -50);
    assertEqual("255,0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("1,2,3", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, String.valueOf(arr).length());
    }

    @Test
    void testUint8ClampedArrayToString067() {
    assertEqual(3, new Uint8ClampedArray(new int[] {100}).toString().length());
    }

    @Test
    void testUint8ClampedArrayToString068() {
    assertEqual(5, new Uint8ClampedArray(new int[] {1, 2, 3}).toString().length());
    }

    @Test
    void testUint8ClampedArrayToString069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String.valueOf(arr);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayToString070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String.valueOf(arr);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayToString071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String s1 = String.valueOf(arr);
    String s2 = String.valueOf(arr);
    assertEqual("1,2,3", s1);
    assertEqual("1,2,3", s2);
    }

    @Test
    void testUint8ClampedArrayToString072() {
    assertEqual("4", Character.toString(new Uint8ClampedArray(new int[] {42}).toString().charAt(0)));
    }

    @Test
    void testUint8ClampedArrayToString073() {
    String s = new Uint8ClampedArray(new int[] {1, 2, 3}).toString();
    assertEqual("3", Character.toString(s.charAt(s.length() - 1)));
    }

    @Test
    void testUint8ClampedArrayToString074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    assertEqual(2, arr.length());
    assertEqual(2, String.valueOf(arr).indexOf(","));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayToString075() {
    assertEqual("1", Character.toString(new Uint8ClampedArray(new int[] {1, 2}).toString().charAt(0)));
    }

    @Test
    void testUint8ClampedArrayToString076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1, 256, Double.NaN, 100});
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString083() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray arr = parent.slice(0, 3);
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.fill(99);
    assertEqual(arr.join(","), String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(4, arr.length());
    assertEqual(2, sub.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(2, sub.get(0));
    assertEqualInt(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToString086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.5);
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1.5);
    assertEqual("2", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 254.5);
    assertEqual("254", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1e9);
    assertEqual("255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1e9);
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString091() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    parent.set(1, 99);
    assertEqual(2, sub.length());
    assertEqualInt(99, sub.get(0));
    assertEqualInt(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToString092() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    sub.set(0, 88);
    assertEqual(2, sub.length());
    assertEqualInt(88, sub.get(0));
    assertEqualInt(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayToString093() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray s = parent.slice();
    parent.set(0, 99);
    assertEqual("1,2,3", String.valueOf(s));
    }

    @Test
    void testUint8ClampedArrayToString094() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6, 7});
    Uint8ClampedArray copy = new Uint8ClampedArray(src);
    src.set(0, 100);
    assertEqual("5,6,7", String.valueOf(copy));
    }

    @Test
    void testUint8ClampedArrayToString095() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 1);
    a.set(1, 2);
    a.set(2, 3);
    assertEqual("1,2,3", String.valueOf(b));
    }

    @Test
    void testUint8ClampedArrayToString096() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2048);
    assertEqual(4095, String.valueOf(arr).length());
    }

    @Test
    void testUint8ClampedArrayToString097() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 0);
    assertEqual("", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString098() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual("", parent.subarray(0, 0).toString());
    }

    @Test
    void testUint8ClampedArrayToString099() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 256);
    assertEqual("255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString100() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -1);
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString101() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.NaN);
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString102() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual("255", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString103() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual("0", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString104() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 2.5);
    assertEqual("2", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArrayToString105() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 9007199254740991L);
    assertEqual("255", String.valueOf(arr));
    }
}
