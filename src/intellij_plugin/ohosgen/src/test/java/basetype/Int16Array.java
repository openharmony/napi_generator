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

import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 * 有符号 16 位整型数组，按 ECMAScript %TypedArray%（Int16Array 特化）语义实现：
 * 元素写入经 ToInt16 转换（NaN/Infinity 归 0、小数向零截断、越界 16 位环绕），
 * 视图（subarray）与宿主数组共享同一 ArrayBuffer，方法名与 JS 行为一一对应。
 * 回调接口提供 1/2/3 参数重载，由重载决议按 lambda 参数个数自动匹配。
 */
public class Int16Array {

    /** 每个元素占用的字节数。 */
    public static final int BYTES_PER_ELEMENT = 2;

    private final ArrayBuffer buffer;
    private final int byteOffset;
    private final int length;

    public Int16Array(int length) {
        this(new ArrayBuffer(length * BYTES_PER_ELEMENT), 0, length);
    }

    public Int16Array() {
        this(0);
    }

    public Int16Array(Int16Array src) {
        this(src.length);
        for (int i = 0; i < src.length; i++) {
            set(i, src.get(i));
        }
    }

    public Int16Array(java.util.List<Integer> src) {
        this(src.size());
        for (int i = 0; i < src.size(); i++) {
            set(i, src.get(i));
        }
    }

    public Int16Array(int... values) {
        this(values.length);
        for (int i = 0; i < values.length; i++) {
            set(i, values[i]);
        }
    }

    public Int16Array(ArrayBuffer buf) {
        this(buf, 0, buf.byteLength() / BYTES_PER_ELEMENT);
    }

    public Int16Array(ArrayBuffer buf, int byteOffset, int length) {
        this.buffer = buf;
        this.byteOffset = byteOffset;
        this.length = length;
    }

    /** 元素个数。 */
    public int length() {
        return length;
    }

    /** 元素区间占用的字节数。 */
    public int byteLength() {
        return length * BYTES_PER_ELEMENT;
    }

    /** 首元素相对底层 ArrayBuffer 的字节偏移。 */
    public int byteOffset() {
        return byteOffset;
    }

    /** 底层 ArrayBuffer（视图共享同一对象，可作身份比较）。 */
    public ArrayBuffer buffer() {
        return buffer;
    }

    /**
     * 读取指定索引元素（越界返回 null，对应越界读为 undefined 的语义）。
     * 对应 $index 属性访问语义。
     */
    public Integer get(int index) {
        if (index < 0 || index >= length) {
            throw new RangeError("Index out of range");
        }
        return buffer.getInt16(byteOffset + index * BYTES_PER_ELEMENT);
    }

    /** 相对索引读取（负数从末尾倒数；越界返回 null），对应 at 语义。 */
    public Integer at(int index) {
        int i = index;
        if (i < 0) {
            i += length;
        }
        if (i < 0 || i >= length) {
            return null;
        }
        return get(i);
    }

    /**
     * 写入指定索引元素（ToInt16 转换；越界忽略）。
     * 对应 $index 属性赋值语义。
     */
    public void set(int index, double value) {
        if (index < 0 || index >= length) {
            return;
        }
        buffer.setInt16(byteOffset + index * BYTES_PER_ELEMENT, toInt16(value));
    }

    /** 使用另一数组的元素填充本数组。 */
    public void set(Int16Array src) {
        set(src, 0);
    }

    /** 使用另一数组的元素填充本数组（从 offset 起）。 */
    public void set(Int16Array src, int offset) {
        for (int i = 0; i < src.length; i++) {
            set(offset + i, src.get(i));
        }
    }

    /**
     * 用 value 填充 [start, end) 区间（含负数索引换算与区间收敛），
     * 返回数组本身以支持链式调用。
     */
    public Int16Array fill(double value, int start, int end) {
        int len = length;
        int from = toIndex(start, len);
        int to = toIndex(end, len);
        for (int i = from; i < to; i++) {
            set(i, value);
        }
        return this;
    }

    public Int16Array fill(double value, int start) {
        return fill(value, start, length);
    }

    public Int16Array fill(double value) {
        return fill(value, 0, length);
    }

    /** 返回首个满足谓词的元素（无则 null），对应 find 语义。 */
    public Integer find(Int16Finder cb) {
        for (int i = 0; i < length; i++) {
            int v = get(i);
            if (cb.test(v, i, this)) {
                return v;
            }
        }
        return null;
    }

    public Integer find(Int16Finder0 cb) {
        return find((v, i, a) -> cb.test());
    }

    public Integer find(Int16Finder1 cb) {
        return find((v, i, a) -> cb.test(v));
    }

    public Integer find(Int16Finder2 cb) {
        return find((v, i, a) -> cb.test(v, i));
    }

    /** 返回首个满足谓词的元素下标（无则 -1），对应 findIndex 语义。 */
    public int findIndex(Int16Finder cb) {
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                return i;
            }
        }
        return -1;
    }

    public int findIndex(Int16Finder1 cb) {
        return findIndex((v, i, a) -> cb.test(v));
    }

    public int findIndex(Int16Finder2 cb) {
        return findIndex((v, i, a) -> cb.test(v, i));
    }

    /** 返回满足谓词的全部元素构成的新数组，对应 filter 语义。 */
    public Int16Array filter(Int16Finder cb) {
        int count = 0;
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                count++;
            }
        }
        int[] picked = new int[count];
        int idx = 0;
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                picked[idx++] = get(i);
            }
        }
        return new Int16Array(picked);
    }

    public Int16Array filter(Int16Finder1 cb) {
        return filter((v, i, a) -> cb.test(v));
    }

    public Int16Array filter(Int16Finder2 cb) {
        return filter((v, i, a) -> cb.test(v, i));
    }

    /** 对每个元素应用回调（返回值构成新数组），对应 map 语义。 */
    public Int16Array map(Int16Mapper cb) {
        int[] mapped = new int[length];
        for (int i = 0; i < length; i++) {
            mapped[i] = toInt16(cb.apply(get(i), i, this));
        }
        return new Int16Array(mapped);
    }

    public Int16Array map(Int16Mapper1 cb) {
        return map((v, i, a) -> cb.apply(v));
    }

    public Int16Array map(Int16Mapper2 cb) {
        return map((v, i, a) -> cb.apply(v, i));
    }

    /** 从左到右归约，返回最终累计值，对应 reduce 语义（含无初始值形式）。 */
    public int reduce(Int16Reducer cb, int initial) {
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

    public int reduce(Int16Reducer cb) {
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

    public int reduce(Int16Reducer2 cb, int initial) {
        return reduce((a, v, i, arr) -> cb.apply(a, v), initial);
    }

    public int reduce(Int16Reducer2 cb) {
        return reduce((a, v, i, arr) -> cb.apply(a, v));
    }

    public int reduce(Int16Reducer3 cb, int initial) {
        return reduce((a, v, i, arr) -> cb.apply(a, v, i), initial);
    }

    public int reduce(Int16Reducer3 cb) {
        return reduce((a, v, i, arr) -> cb.apply(a, v, i));
    }

    /** 是否存在元素满足谓词。 */
    public boolean some(Int16Finder cb) {
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                return true;
            }
        }
        return false;
    }

    public boolean some(Int16Finder1 cb) {
        return some((v, i, a) -> cb.test(v));
    }

    public boolean some(Int16Finder2 cb) {
        return some((v, i, a) -> cb.test(v, i));
    }

    /** 是否所有元素都满足谓词。 */
    public boolean every(Int16Finder cb) {
        for (int i = 0; i < length; i++) {
            if (!cb.test(get(i), i, this)) {
                return false;
            }
        }
        return true;
    }

    public boolean every(Int16Finder1 cb) {
        return every((v, i, a) -> cb.test(v));
    }

    public boolean every(Int16Finder2 cb) {
        return every((v, i, a) -> cb.test(v, i));
    }

    /** 对每个元素执行回调，对应 forEach 语义。 */
    public void forEach(Int16Consumer cb) {
        for (int i = 0; i < length; i++) {
            cb.accept(get(i), i, this);
        }
    }

    public void forEach(Int16Consumer1 cb) {
        forEach((v, i, a) -> cb.accept(v));
    }

    public void forEach(Int16Consumer2 cb) {
        forEach((v, i, a) -> cb.accept(v, i));
    }

    /**
     * 用分隔符连接全部元素（元素按十进制字符串），
     * 无分隔符时默认逗号，对应 join 语义。
     */
    public String join(String separator) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            if (i > 0) {
                sb.append(separator);
            }
            sb.append(get(i));
        }
        return sb.toString();
    }

    public String join() {
        return join(",");
    }

    /** 字符串形式（同 join()），对应 toString 语义。 */
    @Override
    public String toString() {
        return join();
    }

    /** 返回下标迭代器，对应 keys 语义。 */
    public KeyIterator keys() {
        return new KeyIterator(true);
    }

    /** 返回元素值迭代器，对应 values 语义。 */
    public KeyIterator values() {
        return new KeyIterator(false);
    }

    /** 返回 [index, value] 二元组迭代器，对应 entries 语义。 */
    public EntriesIterator entries() {
        return new EntriesIterator();
    }

    /** 从后向前查找指定值，返回下标（无则 -1），对应 lastIndexOf 语义。 */
    public int lastIndexOf(int value, int fromIndex) {
        int len = length;
        int from = fromIndex;
        if (from < 0) {
            from += len;
        }
        if (from >= len) {
            from = len - 1;
        }
        for (int i = from; i >= 0; i--) {
            if (get(i) == value) {
                return i;
            }
        }
        return -1;
    }

    public int lastIndexOf(int value) {
        return lastIndexOf(value, length - 1);
    }

    /** 从后向前查找（double 值：NaN 永不匹配，其余 ToInt16 后比较）。 */
    public int lastIndexOf(double value) {
        return lastIndexOf(value, length - 1);
    }

    public int lastIndexOf(double value, int fromIndex) {
        if (Double.isNaN(value) || Double.isInfinite(value) || value != Math.rint(value)) {
            return -1;
        }
        return lastIndexOf(toInt16(value), fromIndex);
    }

    /** 从前往后查找指定值，返回下标（无则 -1），对应 indexOf 语义。 */
    public int indexOf(int value, int fromIndex) {
        int len = length;
        int from = fromIndex;
        if (from < 0) {
            from += len;
        }
        if (from < 0) {
            from = 0;
        }
        for (int i = from; i < len; i++) {
            if (get(i) == value) {
                return i;
            }
        }
        return -1;
    }

    public int indexOf(int value) {
        return indexOf(value, 0);
    }

    /** 是否包含指定值（SameValueZero 相等语义）。 */
    public boolean includes(int value, int fromIndex) {
        return indexOf(value, fromIndex) != -1;
    }

    public boolean includes(int value) {
        return indexOf(value) != -1;
    }

    /**
     * 用 value 替换指定下标元素并返回新数组（原数组不变），
     * 对应 with 语义；负下标从末尾倒数。
     */
    public Int16Array with(int index, double value) {
        int len = length;
        int i = index;
        if (i < 0) {
            i += len;
        }
        if (i < 0 || i >= len) {
            throw new RangeError("Index out of range");
        }
        int[] copy = new int[len];
        for (int n = 0; n < len; n++) {
            copy[n] = get(n);
        }
        copy[i] = toInt16(value);
        return new Int16Array(copy);
    }

    /**
     * 返回 [begin, end) 区间的新视图（与宿主共享底层缓冲区），
     * 负数索引从末尾倒数、越界收敛，对应 subarray 语义。
     */
    public Int16Array subarray(int begin, int end) {
        int len = length;
        int from = toIndex(begin, len);
        int to = toIndex(end, len);
        if (from > to) {
            from = to;
        }
        return new Int16Array(buffer, byteOffset + from * BYTES_PER_ELEMENT, to - from);
    }

    public Int16Array subarray(int begin) {
        return subarray(begin, length);
    }

    public Int16Array subarray() {
        return subarray(0, length);
    }

    /** 返回 [start, end) 区间的新数组（拷贝，不共享缓冲区），对应 slice 语义。 */
    public Int16Array slice(int start, int end) {
        int len = length;
        int from = toIndex(start, len);
        int to = toIndex(end, len);
        if (from > to) {
            from = to;
        }
        int[] copy = new int[to - from];
        for (int i = from; i < to; i++) {
            copy[i - from] = get(i);
        }
        return new Int16Array(copy);
    }

    public Int16Array slice(int start) {
        return slice(start, length);
    }

    public Int16Array slice() {
        return slice(0, length);
    }

    /** 原地反转元素顺序，返回数组本身，对应 reverse 语义。 */
    public Int16Array reverse() {
        for (int i = 0, j = length - 1; i < j; i++, j--) {
            int tmp = get(i);
            set(i, get(j));
            set(j, tmp);
        }
        return this;
    }

    /**
     * 将 [start, end) 区间的元素复制到 target 起始处（覆盖式），
     * 负数索引从末尾倒数，对应 copyWithin 语义。
     */
    public Int16Array copyWithin(int target, int start, int end) {
        int len = length;
        int to = toIndex(target, len);
        int from = toIndex(start, len);
        int last = toIndex(end, len);
        if (from > last) {
            from = last;
        }
        int count = last - from;
        int[] tmp = new int[count];
        for (int i = 0; i < count; i++) {
            tmp[i] = get(from + i);
        }
        for (int i = 0; i < count; i++) {
            if (to + i < len) {
                set(to + i, tmp[i]);
            }
        }
        return this;
    }

    public Int16Array copyWithin(int target, int start) {
        return copyWithin(target, start, length);
    }

    /**
     * 按 ECMAScript 默认比较器（元素字符串字典序）升序排序，
     * 原地修改并返回数组本身，对应 sort 语义。
     */
    public Int16Array sort() {
        Integer[] boxed = new Integer[length];
        for (int i = 0; i < length; i++) {
            boxed[i] = get(i);
        }
        java.util.Arrays.sort(boxed, (a, b) -> Integer.compare(a, b));
        for (int i = 0; i < length; i++) {
            set(i, boxed[i]);
        }
        return this;
    }

    /** 返回排序后的新数组（原数组不变），对应 toSorted 语义。 */
    public Int16Array toSorted() {
        int[] copy = new int[length];
        for (int i = 0; i < length; i++) {
            copy[i] = get(i);
        }
        Int16Array sorted = new Int16Array(copy);
        sorted.sort();
        return sorted;
    }

    /** 返回反转后的新数组（原数组不变），对应 toReversed 语义。 */
    public Int16Array toReversed() {
        int[] copy = new int[length];
        for (int i = 0; i < length; i++) {
            copy[i] = get(length - 1 - i);
        }
        return new Int16Array(copy);
    }

    /** 构造 Int16Array（元素逐一 ToInt16 转换），对应 of 语义。 */
    public static Int16Array of(int... values) {
        return new Int16Array(values);
    }

    /** 从既有 Int16Array 拷贝构造，对应 from 语义。 */
    public static Int16Array from(Int16Array src) {
        int[] copy = new int[src.length];
        for (int i = 0; i < src.length; i++) {
            copy[i] = src.get(i);
        }
        return new Int16Array(copy);
    }

    /** 从元素序列构造，对应 from(arrayLike) 语义。 */
    public static Int16Array from(int[] values) {
        return new Int16Array(values);
    }

    /** 从整型列表构造，对应 from(arrayLike) 语义。 */
    public static Int16Array from(java.util.List<Integer> values) {
        int[] copy = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            copy[i] = values.get(i);
        }
        return new Int16Array(copy);
    }

    /** 从整型集合构造，对应 from(arrayLike) 语义。 */
    public static Int16Array from(java.util.Set<Integer> values) {
        int[] copy = new int[values.size()];
        int i = 0;
        for (int v : values) {
            copy[i++] = v;
        }
        return new Int16Array(copy);
    }

    /** 从浮点元素序列构造（ToInt16 转换），对应 of 语义的 NaN/Infinity 场景。 */
    public static Int16Array of(double... values) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toInt16(values[i]);
        }
        return new Int16Array(copy);
    }

    /**
     * 下标/值迭代器，next() 返回 IteratorResult（value + done），
     * 对应 ECMAScript 迭代器语义；自身可作 Iterable 供 for-of 增强循环使用。
     */
    public final class KeyIterator implements Iterable<Integer> {

        private final boolean keys;
        private int cursor;

        KeyIterator(boolean keys) {
            this.keys = keys;
        }

        /** 返回迭代结果（value + done），对应迭代器 next() 语义。 */
        public IteratorResult next() {
            if (cursor >= length) {
                return new IteratorResult(0, true);
            }
            int i = cursor++;
            return new IteratorResult(keys ? i : get(i), false);
        }

        @Override
        public Iterator<Integer> iterator() {
            return new KeyCursor();
        }

        /** for-of 增强循环专用游标（与显式 next() 共享同一消耗进度）。 */
        private final class KeyCursor implements Iterator<Integer> {

            @Override
            public boolean hasNext() {
                return cursor < length;
            }

            @Override
            public Integer next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                }
                int i = cursor++;
                return keys ? i : get(i);
            }
        }
    }

    /**
     * [index, value] 二元组迭代器，next() 返回 EntryResult，
     * 对应 ECMAScript entries 迭代器语义。
     */
    public final class EntriesIterator implements Iterable<int[]> {

        private int cursor;

        /** 返回迭代结果（[index, value] + done），对应迭代器 next() 语义。 */
        public EntryResult next() {
            if (cursor >= length) {
                return new EntryResult(null, true);
            }
            int i = cursor++;
            return new EntryResult(new int[] {i, get(i)}, false);
        }

        @Override
        public Iterator<int[]> iterator() {
            return new EntryCursor();
        }

        /** for-of 增强循环专用游标（一次性）。 */
        private final class EntryCursor implements Iterator<int[]> {

            private int pos;

            @Override
            public boolean hasNext() {
                return pos < length;
            }

            @Override
            public int[] next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                }
                int i = pos++;
                return new int[] {i, get(i)};
            }
        }
    }

    /** 回调接口：find/findIndex/some/every/filter 的谓词 (value, index, array)。 */
    @FunctionalInterface
    public interface Int16Finder {
        boolean test(int value, int index, Int16Array array);
    }

    /** 回调接口：谓词的无参数形式。 */
    @FunctionalInterface
    public interface Int16Finder0 {
        boolean test();
    }

    /** 回调接口：谓词的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Int16Finder1 {
        boolean test(int value);
    }

    /** 回调接口：谓词的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Int16Finder2 {
        boolean test(int value, int index);
    }

    /** 回调接口：forEach 的处理器 (value, index, array)。 */
    @FunctionalInterface
    public interface Int16Consumer {
        void accept(int value, int index, Int16Array array);
    }

    /** 回调接口：处理器的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Int16Consumer1 {
        void accept(int value);
    }

    /** 回调接口：处理器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Int16Consumer2 {
        void accept(int value, int index);
    }

    /** 回调接口：map 的映射器 (value, index, array)。 */
    @FunctionalInterface
    public interface Int16Mapper {
        int apply(int value, int index, Int16Array array);
    }

    /** 回调接口：映射器的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Int16Mapper1 {
        int apply(int value);
    }

    /** 回调接口：映射器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Int16Mapper2 {
        int apply(int value, int index);
    }

    /** 回调接口：reduce 的归约器 (acc, value, index, array)。 */
    @FunctionalInterface
    public interface Int16Reducer {
        int apply(int acc, int value, int index, Int16Array array);
    }

    /** 回调接口：归约器的 (acc, value) 双参数形式。 */
    @FunctionalInterface
    public interface Int16Reducer2 {
        int apply(int acc, int value);
    }

    /** 回调接口：归约器的 (acc, value, index) 三参数形式。 */
    @FunctionalInterface
    public interface Int16Reducer3 {
        int apply(int acc, int value, int index);
    }

    /** 下标换算：负数从末尾倒数、越界收敛到 [0, len]，NaN 归 0。 */
    private static int toIndex(int index, int len) {
        int i = index;
        if (i < 0) {
            i += len;
        }
        if (i < 0) {
            i = 0;
        }
        if (i > len) {
            i = len;
        }
        return i;
    }

    /** ToInt16：NaN/Infinity 归 0，小数向零截断，越界 16 位环绕。 */
    static int toInt16(double value) {
        if (Double.isNaN(value)) {
            return 0;
        }
        if (value == Double.POSITIVE_INFINITY || value == Double.NEGATIVE_INFINITY) {
            return 0;
        }
        if (value == 0.0) {
            return 0;
        }
        return (short) (long) value;
    }
}
