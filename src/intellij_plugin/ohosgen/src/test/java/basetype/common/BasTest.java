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

package basetype.common;

/**
 * 断言辅助基类：把 ETS hypium expect(...).assertXxx(...) 桥接到 JUnit5 断言，
 * 提供 (int, Integer) 等重载，避免装箱/拆箱导致的 assertEquals 重载歧义。
 * 测试类继承本类以直接使用 assertEqual/assertTrue 等断言方法。
 *
 * @since 2026-08-26
 */
public class BasTest {

    protected BasTest() {
    }

    public static void assertEqual(int expected, int actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);}

    public static void assertEqual(long expected, long actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);}

    public static void assertEqual(long expected, int actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);}

    public static void assertEqual(int expected, Integer actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, (int) actual);}

    public static void assertEqual(Integer expected, int actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);}

    /** 浮点期望值与装箱整型实际值按数值相等比较（219.0 == 219）。 */
    public static void assertEqual(double expected, Integer actual) {
        assertEqual(expected, actual.doubleValue());}

    /** 装箱浮点期望值与浮点实际值按数值相等比较（含 NaN==NaN）。 */
    public static void assertEqual(Double expected, double actual) {
        assertEqual(expected.doubleValue(), actual);}

    /** 装箱整型期望值与浮点实际值按数值相等比较（200 == 200.0）。 */
    public static void assertEqual(Integer expected, double actual) {
        assertEqual(expected.doubleValue(), actual);}

    /** 整型期望值与装箱浮点实际值按数值相等比较（-1 == -1.0）。 */
    public static void assertEqual(int expected, Double actual) {
        assertEqual((double) expected, actual.doubleValue());}

    /** 浮点期望值与装箱浮点实际值按数值相等比较。 */
    public static void assertEqual(double expected, Double actual) {
        assertEqual(expected, actual.doubleValue());}

    /** 浮点精确相等（NaN 视为相等）。 */
    public static void assertEqual(double expected, double actual) {
        if (Double.isNaN(expected) && Double.isNaN(actual)) {
            return;}
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual, 0.0);}

    /** 浮点期望值与整型实际值按数值相等比较（1.0 == 1）。 */
    public static void assertEqual(double expected, int actual) {
        assertEqual(expected, (double) actual);}

    public static void assertEqual(Object expected, Object actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);}

    public static void assertNotEqual(Object expected, Object actual) {
        org.junit.jupiter.api.Assertions.assertNotEquals(expected, actual);}

    public static void assertNotEqual(int expected, int actual) {
        org.junit.jupiter.api.Assertions.assertNotEquals(expected, actual);}

    public static void assertTrue(boolean condition) {
        org.junit.jupiter.api.Assertions.assertTrue(condition);}

    public static void assertFalse(boolean condition) {
        org.junit.jupiter.api.Assertions.assertFalse(condition);}

    public static void assertNull(Object actual) {
        org.junit.jupiter.api.Assertions.assertNull(actual);}

    public static void assertNotNull(Object actual) {
        org.junit.jupiter.api.Assertions.assertNotNull(actual);}

    /** 展开+map 语义：[...new ARR(N)].map(fn) -> 按索引映射填充数组。 */
    public static Uint8ClampedArray spreadMap(int size, java.util.function.IntBinaryOperator fn) {
        Uint8ClampedArray arr = new Uint8ClampedArray(size);
        for (int i = 0; i < size; i++) {
            arr.set(i, fn.applyAsInt(0, i));}
        return arr;}

    /** 展开迭代器到列表（[...iter] 语义）。 */
    public static java.util.List<Integer> collect(java.lang.Iterable<Integer> it) {
        java.util.List<Integer> list = new java.util.ArrayList<>();
        for (Integer v : it) {
            list.add(v);}
        return list;}

    /** [x, ...list] 语义：元素前置到列表头部（reduce 数组归约场景）。 */
    public static java.util.List<Integer> prepend(int v, java.util.List<Integer> list) {
        java.util.List<Integer> l = new java.util.ArrayList<>(list);
        l.add(0, v);
        return l;}

    /** Number.isInteger 语义：整数值判定。 */
    public static boolean isInteger(int v) {
        return true;}

    public static boolean isInteger(double v) {
        return !Double.isNaN(v) && !Double.isInfinite(v) && v == Math.floor(v);}

    /** instanceof 语义：运行时类型判定。 */
    public static boolean instanceOf(Object o, Class<?> c) {
        return c.isInstance(o);}

    /** JSON.stringify 语义：Uint8Array 序列化为 {"i":v,...}。 */
    public static String stringify(Uint8Array a) {
        StringBuilder sb = new StringBuilder("{");
        for (int i = 0; i < a.length(); i++) {
            if (i > 0) {
                sb.append(",");}
            sb.append('"').append(i).append('"').append(':').append(a.get(i));}
        return sb.append("}").toString();}

    /** Number.isNaN 语义：非数值判定。 */
    public static boolean isNaN(int v) {
        return false;}

    public static boolean isNaN(double v) {
        return Double.isNaN(v);}

    /** Number.isFinite 语义：有限数值判定。 */
    public static boolean isFinite(int v) {
        return true;}

    public static boolean isFinite(double v) {
        return !Double.isNaN(v) && !Double.isInfinite(v);}

    /** parseInt 失败归 0（JS parseInt NaN 语义）。 */
    public static int parseIntSafe(String s) {
        try {
            return Integer.parseInt(s);} catch (NumberFormatException e) {
            return 0;}
    }

    /** Class.of(X).getName() 语义：ETS number 运行时为 double。 */
    public static String className(int v) {
        return "java.lang.Double";}

    public static String className(double v) {
        return "java.lang.Double";}

    public static String className(boolean v) {
        return "java.lang.Boolean";}

    public static String className(String v) {
        return "java.lang.String";}

    public static String className(Object o) {
        return o == null ? null : o.getClass().getName();}

    /** 空数组字面量 fill 语义：n 个元素全部填充 value。 */
    public static java.util.List<Integer> filledList(int size, int value) {
        java.util.List<Integer> list = new java.util.ArrayList<>();
        for (int i = 0; i < size; i++) {
            list.add(value);}
        return list;}

    /** ToUint8Clamp 语义（map 回调 double 返回值：NaN 归 0、越界钳制、半分取偶）。 */
    public static int clampRound(double v) {
        if (Double.isNaN(v)) {
            return 0;}
        if (v <= 0.0) {
            return 0;}
        if (v >= 255.0) {
            return 255;}
        long r = Math.round(v);
        if (v - Math.floor(v) == 0.5 && (r & 1) != 0) {
            r -= 1;}
        return (int) r;}

    /** JS typeof 语义：装箱值按运行时类型返回类型名。 */
    public static String typeofValue(Object v) {
        if (v == null) {
            return "object";}
        if (v instanceof String) {
            return "string";}
        if (v instanceof Boolean) {
            return "boolean";}
        if (v instanceof Number) {
            return "number";}
        return "object";}

    /** 空值合并：null 归回退值（对应 ?? 运算符，避免表达式双求值）。 */
    public static int coalesce(Integer value, int fallback) {
        return value == null ? fallback : value;}

    public static double coalesce(Integer value, double fallback) {
        return value == null ? fallback : value;}

    /** JS isFinite 语义：int/long 恒为有限数。 */
    public static boolean isFinite(long value) {
        return true;}

    /** 列表 join（ETS 数组 join 语义）。 */
    public static String joinList(java.util.List<?> values, String sep) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < values.size(); i++) {
            if (i > 0) {
                sb.append(sep);}
            sb.append(values.get(i));}
        return sb.toString();}

    public static void fail() {
        org.junit.jupiter.api.Assertions.fail("Expected an exception");}
}
