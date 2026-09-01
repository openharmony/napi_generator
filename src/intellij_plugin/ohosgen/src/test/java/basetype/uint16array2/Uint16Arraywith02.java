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
import basetype.common.RangeError;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arraywith02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraywith02 extends BasTest {

    @Test
    void testUint16ArrayWithPart001() {
    Uint16Array arr = Uint16Array.of(2717, 3919, 5323);
    Uint16Array result = arr.with(1, 500);
    assertEqual(3, result.length());
    assertEqualInt(500, result.get(1));
    }

    @Test
    void testUint16ArrayWithPart002() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array result = arr.with(0, 999);
    assertEqualInt(999, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart003() {
    Uint16Array arr = Uint16Array.of(2734, 3938, 5346);
    Uint16Array result = arr.with(0, 99);
    assertEqualInt(99, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart004() {
    Uint16Array arr = Uint16Array.of(2751, 3957, 5369);
    Uint16Array result = arr.with(2, 99);
    assertEqualInt(99, result.get(2));
    }

    @Test
    void testUint16ArrayWithPart005() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array result = arr.with(0, 77);
    assertEqualInt(77, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart006() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.with(0, 88);
    assertEqualInt(88, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart007() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0;
    i < 100;
    i++) {
    src.add(i);
    }
    Uint16Array arr = Uint16Array.from(src);
    Uint16Array result = arr.with(0, 999);
    assertEqualInt(999, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart008() {
    Uint16Array arr = Uint16Array.of(2768, 3976, 5392);
    Uint16Array result = arr.with(0, 0);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart009() {
    Uint16Array arr = Uint16Array.of(2785, 3995, 5415);
    Uint16Array result = arr.with(0, 65535);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart010() {
    Uint16Array arr = Uint16Array.of(2802, 4014, 5438);
    Uint16Array result = arr.with(0, 1);
    assertEqualInt(1, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart011() {
    Uint16Array arr = Uint16Array.of(2819, 4033, 5461);
    Uint16Array result = arr.with(0, 32768);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart012() {
    Uint16Array arr = Uint16Array.of(2836, 4052, 5484);
    Uint16Array result = arr.with(0, 131072);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart013() {
    Uint16Array arr = Uint16Array.of(2853, 4071, 5507);
    Uint16Array result = arr.with(0, 196608);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart014() {
    Uint16Array arr = Uint16Array.of(2870, 4090, 5530);
    Uint16Array result = arr.with(0, -65536);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart015() {
    Uint16Array arr = Uint16Array.of(2887, 4109, 5553);
    Uint16Array result = arr.with(0, -65535);
    assertEqualInt(1, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart016() {
    Uint16Array arr = Uint16Array.of(2904, 4128, 5576);
    Uint16Array result = arr.with(0, -32768);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart017() {
    Uint16Array arr = Uint16Array.of(2921, 4147, 5599);
    Uint16Array result = arr.with(0, 3.14);
    assertEqualInt(3, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart018() {
    Uint16Array arr = Uint16Array.of(2938, 4166, 5622);
    Uint16Array result = arr.with(0, 65535.9);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart019() {
    Uint16Array arr = Uint16Array.of(2955, 4185, 5645);
    Uint16Array result = arr.with(0, 0.999);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart020() {
    Uint16Array arr = Uint16Array.of(2972, 4204, 5668);
    Uint16Array result = arr.with(0, -0.5);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart021() {
    Uint16Array arr = Uint16Array.of(2989, 4223, 5691);
    Uint16Array result = arr.with(0, Double.NaN);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart022() {
    Uint16Array arr = Uint16Array.of(3006, 4242, 5714);
    Uint16Array result = arr.with(0, -Double.POSITIVE_INFINITY);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart023() {
    Uint16Array arr = Uint16Array.of(3023, 4261, 5737);
    Uint16Array result = arr.with(0, 1e5);
    assertEqualInt(34464, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart024() {
    Uint16Array arr = Uint16Array.of(3040, 4280, 5760);
    Uint16Array result = arr.with(0, 0xFFFF);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart025() {
    Uint16Array arr = Uint16Array.of(3057, 4299, 5783);
    Uint16Array result = arr.with(0, 0b1111111111111111);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart026() {
    Uint16Array arr = Uint16Array.of(3074, 4318, 5806);
    Uint16Array result = arr.with(0, 0x8000);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart027() {
    Uint16Array arr = Uint16Array.of(3091, 4337, 5829);
    Uint16Array result = arr.with(0, 0.0);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart028() {
    Uint16Array arr = Uint16Array.of(3108, 4356, 5852);
    Uint16Array result = arr.with(0, 1.5);
    assertEqualInt(1, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart029() {
    Uint16Array arr = Uint16Array.of(3125, 4375, 5875);
    Uint16Array result = arr.with(0, 32768.5);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart030() {
    Uint16Array arr = Uint16Array.of(3142, 4394, 5898);
    Uint16Array result = arr.with(0, 262144);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart031() {
    Uint16Array arr = Uint16Array.of(3159, 4413, 5921);
    Uint16Array result = arr.with(0, 327680);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart032() {
    Uint16Array arr = Uint16Array.of(3176, 4432, 5944);
    Uint16Array result = arr.with(0, -65537);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart033() {
    Uint16Array arr = Uint16Array.of(3193, 4451, 5967);
    Uint16Array result = arr.with(0, -2);
    assertEqualInt(65534, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart034() {
    Uint16Array arr = Uint16Array.of(3210, 4470, 5990);
    Uint16Array result = arr.with(0, -3);
    assertEqualInt(65533, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart035() {
    Uint16Array arr = Uint16Array.of(3227, 4489, 6013);
    Uint16Array result = arr.with(0, 0x100);
    assertEqualInt(256, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart036() {
    Uint16Array arr = Uint16Array.of(3244, 4508, 6036);
    Uint16Array result = arr.with(0, 0b1000000000000000);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart037() {
    Uint16Array arr = Uint16Array.of(3261, 4527, 6059);
    Uint16Array result = arr.with(0, 98304);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart038() {
    Uint16Array arr = Uint16Array.of(3278, 4546, 6082);
    Uint16Array result = arr.with(0, 131071);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart039() {
    Uint16Array arr = Uint16Array.of(3295, 4565, 6105);
    Uint16Array result = arr.with(0, 131073);
    assertEqualInt(1, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart040() {
    Uint16Array arr = Uint16Array.of(3312, 4584, 6128);
    Uint16Array result = arr.with(0, 0xFFFF + 1);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart041() {
    Uint16Array arr = Uint16Array.of(3329, 4603, 6151);
    Uint16Array result = arr.with(0, 0xFFFF + 2);
    assertEqualInt(1, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart042() {
    Uint16Array arr = Uint16Array.of(3346, 4622, 6174);
    Uint16Array result = arr.with(0, -65534);
    assertEqualInt(2, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart043() {
    Uint16Array arr = Uint16Array.of(3363, 4641, 6197);
    Uint16Array result = arr.with(0, -65533);
    assertEqualInt(3, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart044() {
    Uint16Array arr = Uint16Array.of(3380, 4660, 6220);
    Uint16Array result = arr.with(0, 65535.1);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart045() {
    Uint16Array arr = Uint16Array.of(3397, 4679, 6243);
    Uint16Array result = arr.with(0, 65535.5);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart046() {
    Uint16Array arr = Uint16Array.of(3414, 4698, 6266);
    Uint16Array result = arr.with(0, 0.1);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart047() {
    Uint16Array arr = Uint16Array.of(3431, 4717, 6289);
    Uint16Array result = arr.with(0, -0.001);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart048() {
    Uint16Array arr = Uint16Array.of(3448, 4736, 6312);
    Uint16Array result = arr.with(0, Math.E);
    assertEqualInt(2, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart049() {
    Uint16Array arr = Uint16Array.of(3465, 4755, 6335);
    Uint16Array result = arr.with(0, Math.PI);
    assertEqualInt(3, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart050() {
    Uint16Array arr = Uint16Array.of(3482, 4774, 6358);
    Uint16Array result = arr.with(0, 98305);
    assertEqualInt(32769, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart051() {
    Uint16Array arr = Uint16Array.of(3499, 4793, 6381);
    Uint16Array result = arr.with(0, 655360);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart052() {
    Uint16Array arr = Uint16Array.of(3516, 4812, 6404);
    Uint16Array result = arr.with(0, 688128);
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart053() {
    Uint16Array arr = Uint16Array.of(3533, 4831, 6427);
    Uint16Array result = arr.with(0, 65535);
    assertEqualInt(65535, result.get(0));
    assertEqualInt(4831, result.get(1));
    }

    @Test
    void testUint16ArrayWithPart054() {
    Uint16Array arr = Uint16Array.of(3550, 4850, 6450);
    Uint16Array result = arr.with(2, 0);
    assertEqualInt(0, result.get(2));
    assertEqualInt(3550, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart055() {
    Uint16Array arr = Uint16Array.of(3567, 4869, 6473);
    Uint16Array result = arr.with(2, 65536);
    assertEqualInt(0, result.get(2));
    }

    @Test
    void testUint16ArrayWithPart056() {
    Uint16Array arr = Uint16Array.of(3584, 4888, 6496);
    Uint16Array result = arr.with(2, -32768);
    assertEqualInt(32768, result.get(2));
    }

    @Test
    void testUint16ArrayWithPart057() {
    Uint16Array arr = Uint16Array.of(3601, 4907, 6519);
    Uint16Array result = arr.with(0, 99);
    assertEqualInt(99, result.get(0));
    assertEqualInt(3601, arr.get(0));
    }

    @Test
    void testUint16ArrayWithPart058() {
    Uint16Array arr = Uint16Array.of(3618, 4926, 6542);
    Uint16Array result = arr.with(0, 99);
    assertEqual("99,4926,6542", result.join(","));
    assertNotEqual(arr, result);
    assertEqualInt(3618, arr.get(0));
    assertEqualInt(4926, arr.get(1));
    assertEqualInt(6542, arr.get(2));
    }

    @Test
    void testUint16ArrayWithPart059() {
    Uint16Array arr = Uint16Array.of(3635, 4945, 6565);
    Uint16Array result = arr.with(0, 99);
    assertEqual("99,4945,6565", result.join(","));
    assertEqual("3635,4945,6565", arr.join(","));
    assertNotEqual(arr.buffer(), result.buffer());
    }

    @Test
    void testUint16ArrayWithPart060() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array result = arr.with(2, 999);
    assertEqualInt(10, result.get(0));
    assertEqualInt(20, result.get(1));
    assertEqualInt(999, result.get(2));
    assertEqualInt(40, result.get(3));
    assertEqualInt(50, result.get(4));
    }

    @Test
    void testUint16ArrayWithPart061() {
    Uint16Array arr = Uint16Array.of(3652, 4964, 6588);
    Uint16Array result = arr.with(1, -1);
    assertEqualInt(65535, result.get(1));
    }

    @Test
    void testUint16ArrayWithPart062() {
    Uint16Array arr = Uint16Array.of(3669, 4983, 6611);
    String joined = arr.with(0, 99).join(",");
    assertEqual("99,4983,6611", joined);
    }

    @Test
    void testUint16ArrayWithPart063() {
    Uint16Array arr = Uint16Array.of(3686, 5002, 6634);
    Uint16Array result = arr.with(0, 99);
    assertEqual(6, result.byteLength());
    assertEqual("99,5002,6634", result.join(","));
    assertEqual("3686,5002,6634", arr.join(","));
    assertNotEqual(arr.buffer(), result.buffer());
    result.set(1, 77);
    assertEqualInt(5002, arr.get(1));
    }

    @Test
    void testUint16ArrayWithPart064() {
    Uint16Array arr = Uint16Array.of(3703, 5021, 6657);
    Uint16Array result = arr.with(0, 100).with(1, 200);
    assertEqual("100,200,6657", result.join(","));
    assertNotEqual(arr.buffer(), result.buffer());
    assertEqual("3703,5021,6657", arr.join(","));
    result.set(2, 300);
    assertEqualInt(6657, arr.get(2));
    }

    @Test
    void testUint16ArrayWithPart065() {
    Uint16Array arr = Uint16Array.of(3720, 5040, 6680);
    Uint16Array result = arr.with(1, 500);
    Number val = result.at(1);
    assertEqual(500, val);
    }

    @Test
    void testUint16ArrayWithPart066() {
    Uint16Array arr = Uint16Array.of(3737, 5059, 6703);
    try {
    arr.with(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart067() {
    Uint16Array arr = Uint16Array.of(3771, 5097, 6749);
    Uint16Array result = arr.with(-1, 99);
    assertEqualInt(3771, result.get(0));
    assertEqualInt(5097, result.get(1));
    assertEqualInt(99, result.get(2));
    assertEqualInt(6749, arr.get(2));
    }

    @Test
    void testUint16ArrayWithPart068() {
    Uint16Array arr = Uint16Array.of(3788, 5116, 6772);
    Uint16Array result = arr.with(-3, 99);
    assertEqualInt(99, result.get(0));
    assertEqualInt(5116, result.get(1));
    assertEqualInt(6772, result.get(2));
    assertEqualInt(3788, arr.get(0));
    }

    @Test
    void testUint16ArrayWithPart069() {
    Uint16Array arr = Uint16Array.of(3805, 5135, 6795);
    try {
    arr.with(-4, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart070() {
    Uint16Array arr = Uint16Array.of(3822, 5154, 6818);
    try {
    arr.with(65536, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart071() {
    Uint16Array arr = Uint16Array.of(3839, 5173, 6841);
    try {
    arr.with(-65536, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart072() {
    Uint16Array arr = new Uint16Array(0);
    try {
    arr.with(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart073() {
    Uint16Array arr = new Uint16Array(0);
    try {
    arr.with(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart074() {
    Uint16Array arr = Uint16Array.of(42);
    try {
    arr.with(1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart075() {
    Uint16Array arr = Uint16Array.of(3856, 5192, 6864);
    try {
    arr.with(100000, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart076() {
    Uint16Array arr = Uint16Array.of(3873, 5211, 6887);
    try {
    arr.with(-100000, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayWithPart077() {
    Uint16Array arr = Uint16Array.of(3890, 5230, 6910);
    Uint16Array result = arr.with(1, 99);
    assertEqualInt(99, result.get(1));
    }

    @Test
    void testUint16ArrayWithPart078() {
    Uint16Array arr = Uint16Array.of(3907, 5249, 6933);
    Uint16Array result = arr.with(0, 65536);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16ArrayWithPart079() {
    Uint16Array arr = Uint16Array.of(3924, 5268, 6956);
    Uint16Array result = arr.with(0, 65537);
    assertEqualInt(1, result.get(0));
    }
}
