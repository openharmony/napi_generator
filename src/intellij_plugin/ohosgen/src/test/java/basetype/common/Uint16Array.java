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

import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 * 有符号 16 位整型数组，按 ECMAScript %TypedArray%（Uint16Array 特化）语义实现：
 * 元素写入经 ToInt16 转换（NaN/Infinity 归 0、小数向零截断、越界 16 位环绕），
 * 视图（subarray）与宿主数组共享同一 ArrayBuffer，方法名与 JS 行为一一对应。
 * 回调接口提供 1/2/3 参数重载，由重载决议按 lambda 参数个数自动匹配。
 *
 * @since 2026-08-26
 */
public class Uint16Array implements IntArrayView {

    /**
     * 每个元素占用的字节数。
     */
    public static final int BYTES_PER_ELEMENT = 2;

    private final ArrayBuffer buffer;
    private final int byteOffset;
    private final int length;

    public Uint16Array(int length) {
        this(length < 0 ? new ArrayBuffer(0) : new ArrayBuffer(length * BYTES_PER_ELEMENT), 0, length);
        }

    public Uint16Array(double length) {
        this((int) length);
        }

    public Uint16Array() {
        this(0);
        }

    public Uint16Array(IntArrayView src) {
        this(src.length());
        for (int i = 0; i < src.length(); i++) {
            set(i, src.get(i));
            }
    }

    public Uint16Array(java.util.List<Integer> src) {
        this(src.size());
        for (int i = 0; i < src.size(); i++) {
            set(i, src.get(i));
            }
    }

    public Uint16Array(int... values) {
        this(values.length);
        for (int i = 0; i < values.length; i++) {
            set(i, values[i]);
            }
    }

    public Uint16Array(double... values) {
        this(values.length);
        for (int i = 0; i < values.length; i++) {
            set(i, values[i]);
            }
    }

    public Uint16Array(ArrayBuffer buf) {
        this(buf, 0, checkedElements(buf));
        }

    public Uint16Array(ArrayBuffer buf, int byteOffset) {
        this(buf, byteOffset, (checkedElements(buf) * BYTES_PER_ELEMENT - byteOffset) / BYTES_PER_ELEMENT);
        }

    public Uint16Array(ArrayBuffer buf, double byteOffset) {
        this(buf, (int) byteOffset);
        }

    public Uint16Array(ArrayBuffer buf, double byteOffset, double length) {
        this(buf, (int) byteOffset, (int) length);
        }

    public Uint16Array(ArrayBuffer buf, int byteOffset, int length) {
        if (length < 0 || byteOffset < 0 || byteOffset % BYTES_PER_ELEMENT != 0) {
            throw new RangeError("Invalid array length or offset");
            }
        if (byteOffset + length * BYTES_PER_ELEMENT > buf.byteLength()) {
            throw new RangeError("Offset out of range");
            }
        this.buffer = buf;
        this.byteOffset = byteOffset;
        this.length = length;
        }

    /**
     * 底层缓冲字节数须为元素字节数的整数倍，否则抛 RangeError。
     */
    private static int checkedElements(ArrayBuffer buf) {
        if (buf.byteLength() % BYTES_PER_ELEMENT != 0) {
            throw new RangeError("Buffer byte length must be a multiple of " + BYTES_PER_ELEMENT);
            }
        return buf.byteLength() / BYTES_PER_ELEMENT;
        }

    /**
     * 元素个数。
     */
    public int length() {
        return length;
        }

    /**
     * 元素区间占用的字节数（奇数底层缓冲时按 ArkTS 行为补 1 字节）。
     */
    public int byteLength() {
        return length * BYTES_PER_ELEMENT + (buffer.byteLength() % BYTES_PER_ELEMENT);
        }

    /**
     * 首元素相对底层 ArrayBuffer 的字节偏移。
     */
    public int byteOffset() {
        return byteOffset;
        }

    /**
     * 底层 ArrayBuffer（视图共享同一对象，可作身份比较）。
     */
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
        return buffer.getInt16(byteOffset + index * BYTES_PER_ELEMENT) & 0xFFFF;
        }

    /**
     * 相对索引读取（负数从末尾倒数；越界返回 null），对应 at 语义。
     */
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
     * 写入指定索引元素（ToUint16 转换；越界抛 RangeError）。
     * 对应 $index 属性赋值语义（ArkTS 越界赋值抛 RangeError）。
     */
    public Integer set(int index, double value) {
        if (index < 0 || index >= length) {
            throw new RangeError("Index out of range");
            }
        buffer.setInt16(byteOffset + index * BYTES_PER_ELEMENT, toUint16(value));
        return null;
        }

    /**
     * 使用另一数组的元素填充本数组。
     */
    public Integer set(Uint16Array src) {
        return set(src, 0);
        }

    /**
     * 使用另一数组的元素填充本数组（从 offset 起，越界抛 RangeError）。
     */
    public Integer set(Uint16Array src, int offset) {
        if (src == null) {
            throw new NullPointerError();
            }
        if (offset < 0 || offset + src.length > length) {
            throw new RangeError("Offset out of range");
            }
        int[] tmp = new int[src.length];
        for (int i = 0; i < src.length; i++) {
            tmp[i] = src.get(i);
            }
        for (int i = 0; i < tmp.length; i++) {
            buffer.setInt16(byteOffset + (offset + i) * BYTES_PER_ELEMENT, tmp[i]);
            }
        return null;
        }

    /**
     * 使用整型数组的元素填充本数组。
     */
    public Integer set(int[] src) {
        return set(src, 0);
        }

    /**
     * 使用整型数组的元素填充本数组（从 offset 起，越界抛 RangeError）。
     */
    public Integer set(int[] src, int offset) {
        if (src == null) {
            throw new NullPointerError();
            }
        if (offset < 0 || offset + src.length > length) {
            throw new RangeError("Offset out of range");
            }
        for (int i = 0; i < src.length; i++) {
            buffer.setInt16(byteOffset + (offset + i) * BYTES_PER_ELEMENT, toUint16(src[i]));
            }
        return null;
        }

    /**
     * 使用浮点数组的元素填充本数组（ToUint16 转换）。
     */
    public Integer set(double[] src, int offset) {
        if (src == null) {
            throw new NullPointerError();
            }
        if (offset < 0 || offset + src.length > length) {
            throw new RangeError("Offset out of range");
            }
        for (int i = 0; i < src.length; i++) {
            buffer.setInt16(byteOffset + (offset + i) * BYTES_PER_ELEMENT, toUint16(src[i]));
            }
        return null;
        }

    /**
     * 写入元素或批量填充，对应 set 语义。
     */
    public Integer set(double[] src) {
        return set(src, 0);
        }

    /**
     * 用 value 填充 [start, end) 区间（含负数索引换算与区间收敛），
     * 返回数组本身以支持链式调用。
     */
    public Uint16Array fill(double value, double start, double end) {
        return fill(value, toIndexD(start, length), toIndexD(end, length));
        }

    /**
     * 填充数组元素，对应 fill 语义。
     */
    public Uint16Array fill(double value, int start, int end) {
        int len = length;
        int from = toIndex(start, len);
        int to = toIndex(end, len);
        for (int i = from; i < to; i++) {
            set(i, value);
            }
        return this;
        }

    /**
     * 填充数组元素，对应 fill 语义。
     */
    public Uint16Array fill(double value, int start) {
        return fill(value, start, length);
        }

    /**
     * 填充数组元素，对应 fill 语义。
     */
    public Uint16Array fill(double value) {
        return fill(value, 0, length);
        }

    /**
     * 返回首个满足谓词的元素（无则 null），对应 find 语义。
     */
    public Integer find(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = 0; i < length; i++) {
            int v = get(i);
            if (cb.test(v, i, this)) {
                return v;
                }
        }
        return null;
        }

    /**
     * 查找首个匹配元素，对应 find 语义。
     */
    public Integer find(Uint16ArrayFinder0 cb) {
        return find((v, i, a) -> cb.test());
        }

    /**
     * 查找首个匹配元素，对应 find 语义。
     */
    public Integer find(Uint16ArrayFinder1 cb) {
        return find((v, i, a) -> cb.test(v));
        }

    /**
     * 查找首个匹配元素，对应 find 语义。
     */
    public Integer find(Uint16ArrayFinder2 cb) {
        return find((v, i, a) -> cb.test(v, i));
        }

    /**
     * 从后向前返回首个满足谓词的元素（无则 null），对应 findLast 语义。
     */
    public Integer findLast(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = length - 1; i >= 0; i--) {
            int v = get(i);
            if (cb.test(v, i, this)) {
                return v;
                }
        }
        return null;
        }

    /**
     * findLast 方法。
     */
    public Integer findLast(Uint16ArrayFinder0 cb) {
        return findLast((v, i, a) -> cb.test());
        }

    /**
     * findLast 方法。
     */
    public Integer findLast(Uint16ArrayFinder1 cb) {
        return findLast((v, i, a) -> cb.test(v));
        }

    /**
     * findLast 方法。
     */
    public Integer findLast(Uint16ArrayFinder2 cb) {
        return findLast((v, i, a) -> cb.test(v, i));
        }

    /**
     * 从后向前返回首个满足谓词的元素下标（无则 -1），对应 findLastIndex 语义。
     */
    public int findLastIndex(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = length - 1; i >= 0; i--) {
            if (cb.test(get(i), i, this)) {
                return i;
                }
        }
        return -1;
        }

    /**
     * findLastIndex 方法。
     */
    public int findLastIndex(Uint16ArrayFinder0 cb) {
        return findLastIndex((v, i, a) -> cb.test());
        }

    /**
     * findLastIndex 方法。
     */
    public int findLastIndex(Uint16ArrayFinder1 cb) {
        return findLastIndex((v, i, a) -> cb.test(v));
        }

    /**
     * findLastIndex 方法。
     */
    public int findLastIndex(Uint16ArrayFinder2 cb) {
        return findLastIndex((v, i, a) -> cb.test(v, i));
        }

    /**
     * 返回首个满足谓词的元素下标（无则 -1），对应 findIndex 语义。
     */
    public int findIndex(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                return i;
                }
        }
        return -1;
        }

    /**
     * 查找首个匹配下标，对应 findIndex 语义。
     */
    public int findIndex(Uint16ArrayFinder1 cb) {
        return findIndex((v, i, a) -> cb.test(v));
        }

    /**
     * 查找首个匹配下标，对应 findIndex 语义。
     */
    public int findIndex(Uint16ArrayFinder2 cb) {
        return findIndex((v, i, a) -> cb.test(v, i));
        }

    /**
     * 返回满足谓词的全部元素构成的新数组，对应 filter 语义。
     */
    public Uint16Array filter(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int count = 0;
        int[] picked = new int[length];
        for (int i = 0; i < length; i++) {
            int v = get(i);
            if (cb.test(v, i, this)) {
                picked[count++] = v;
                }
        }
        int[] result = new int[count];
        System.arraycopy(picked, 0, result, 0, count);
        return new Uint16Array(result);
        }

    /**
     * 过滤为新数组，对应 filter 语义。
     */
    public Uint16Array filter(Uint16ArrayFinder0 cb) {
        return filter((v, i, a) -> cb.test());
        }

    /**
     * 过滤为新数组，对应 filter 语义。
     */
    public Uint16Array filter(Uint16ArrayFinder1 cb) {
        return filter((v, i, a) -> cb.test(v));
        }

    /**
     * 过滤为新数组，对应 filter 语义。
     */
    public Uint16Array filter(Uint16ArrayFinder2 cb) {
        return filter((v, i, a) -> cb.test(v, i));
        }

    /**
     * 对每个元素应用回调（返回值构成新数组），对应 map 语义。
     */
    public Uint16Array map(Uint16ArrayMapper cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int[] mapped = new int[length];
        for (int i = 0; i < length; i++) {
            mapped[i] = toUint16(cb.apply(get(i), i, this));
            }
        return new Uint16Array(mapped);
        }

    /**
     * 映射为新数组，对应 map 语义。
     */
    public Uint16Array map(Uint16ArrayMapper1 cb) {
        return map((v, i, a) -> cb.apply(v));
        }

    /**
     * 映射为新数组，对应 map 语义。
     */
    public Uint16Array map(Uint16ArrayMapper2 cb) {
        return map((v, i, a) -> cb.apply(v, i));
        }

    /**
     * 从左到右归约，返回最终累计值，对应 reduce 语义（含无初始值形式）。
     */
    public int reduce(Uint16ArrayReducer cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * 从左到右归约，返回最终累计值，对应 reduce 语义。
     */
    public int reduce(Uint16ArrayReducer cb) {
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * 从左到右归约，返回最终累计值，对应 reduce 语义。
     */
    public int reduce(Uint16ArrayReducer2 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i));
            }
        return acc;
        }

    /**
     * 从左到右归约，返回最终累计值，对应 reduce 语义。
     */
    public int reduce(Uint16ArrayReducer2 cb) {
        if (cb == null) {
            throw new NullPointerError();
            }
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i));
            }
        return acc;
        }

    /**
     * 从左到右归约，返回最终累计值，对应 reduce 语义。
     */
    public int reduce(Uint16ArrayReducer3 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i);
            }
        return acc;
        }

    /**
     * 从左到右归约，返回最终累计值，对应 reduce 语义。
     */
    public int reduce(Uint16ArrayReducer3 cb) {
        if (cb == null) {
            throw new NullPointerError();
            }
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i);
            }
        return acc;
        }

    /**
     * 从右向左归约，返回最终累计值，对应 reduceRight 语义（含无初始值形式）。
     */
    public int reduceRight(Uint16ArrayReducer cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * 从右向左归约，返回最终累计值，对应 reduceRight 语义。
     */
    public int reduceRight(Uint16ArrayReducer cb) {
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        int acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * 从右向左归约，返回最终累计值，对应 reduceRight 语义。
     */
    public int reduceRight(Uint16ArrayReducer2 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        int acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i));
            }
        return acc;
        }

    /**
     * 从右向左归约，返回最终累计值，对应 reduceRight 语义。
     */
    public int reduceRight(Uint16ArrayReducer2 cb) {
        if (cb == null) {
            throw new NullPointerError();
            }
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        int acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i));
            }
        return acc;
        }

    /**
     * 从右向左归约，返回最终累计值，对应 reduceRight 语义。
     */
    public int reduceRight(Uint16ArrayReducer3 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        int acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i);
            }
        return acc;
        }

    /**
     * 从右向左归约，返回最终累计值，对应 reduceRight 语义。
     */
    public int reduceRight(Uint16ArrayReducer3 cb) {
        if (cb == null) {
            throw new NullPointerError();
            }
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        int acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i);
            }
        return acc;
        }

    /**
     * 是否存在元素满足谓词。
     */
    public boolean some(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                return true;
                }
        }
        return false;
        }

    /**
     * 是否存在满足谓词，对应 some 语义。
     */
    public boolean some(Uint16ArrayFinder0 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        return some((v, i, a) -> cb.test());
        }

    /**
     * 是否存在满足谓词，对应 some 语义。
     */
    public boolean some(Uint16ArrayFinder1 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        return some((v, i, a) -> cb.test(v));
        }

    /**
     * 是否存在满足谓词，对应 some 语义。
     */
    public boolean some(Uint16ArrayFinder2 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        return some((v, i, a) -> cb.test(v, i));
        }

    /**
     * 是否所有元素都满足谓词。
     */
    public boolean every(Uint16ArrayFinder cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = 0; i < length; i++) {
            if (!cb.test(get(i), i, this)) {
                return false;
                }
        }
        return true;
        }

    /**
     * 是否全部满足谓词，对应 every 语义。
     */
    public boolean every(Uint16ArrayFinder0 cb) {
        return every((v, i, a) -> cb.test());
        }

    /**
     * 是否全部满足谓词，对应 every 语义。
     */
    public boolean every(Uint16ArrayFinder1 cb) {
        return every((v, i, a) -> cb.test(v));
        }

    /**
     * 是否全部满足谓词，对应 every 语义。
     */
    public boolean every(Uint16ArrayFinder2 cb) {
        return every((v, i, a) -> cb.test(v, i));
        }

    /**
     * 对每个元素执行回调，对应 forEach 语义。
     */
    public void forEach(Uint16ArrayConsumer cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        for (int i = 0; i < length; i++) {
            cb.accept(get(i), i, this);
            }
    }

    /**
     * 遍历执行回调，对应 forEach 语义。
     */
    public void forEach(Uint16ArrayConsumer1 cb) {
        forEach((v, i, a) -> cb.accept(v));
        }

    /**
     * 遍历执行回调，对应 forEach 语义。
     */
    public void forEach(Uint16ArrayConsumer2 cb) {
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

    /**
     * 元素连接为字符串，对应 join 语义。
     */
    public String join() {
        return join(",");
        }

    /** 字符串形式（同 join()），对应 toString 语义。 */
    @Override
    /**
     * 字符串形式，对应 toString 语义。
     */
    public String toString() {
        return join();
        }

    /**
     * 区域设置字符串（默认 en-US 分组格式），对应 toLocaleString 语义。
     */
    public String toLocaleString() {
        return toLocaleString("en-US", null);
        }

    /**
     * 区域设置字符串，对应 toLocaleString 语义。
     */
    public String toLocaleString(String locales) {
        return toLocaleString(locales, null);
        }

    /**
     * 区域设置字符串，对应 toLocaleString 语义。
     */
    public String toLocaleString(java.util.List<String> locales) {
        return toLocaleString(locales == null || locales.isEmpty() ? "en-US" : locales.get(0), null);
        }

    /**
     * 区域设置字符串，对应 toLocaleString 语义。
     */
    public String toLocaleString(String locales, IntlOptions opts) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            if (i > 0) {
                sb.append(',');
                }
            sb.append(formatIntl(get(i), locales, opts));
            }
        return sb.toString();
        }

    /**
     * 按 locale 与选项格式化单个元素（分组/补零/小数/有效数字/科学计数/compact/百分比/货币）。
     */
    private static String formatIntl(int value, String locales, IntlOptions opts) {
        String lc = locales == null ? "en-US" : locales.trim().toLowerCase(java.util.Locale.ROOT);
        if (lc.isEmpty() || !isValidLocale(lc)) {
            throw new RangeError("Invalid locale: " + locales);
            }
        String lang = lc.split("[-_]")[0];
        boolean grouped = opts == null || opts.useGrouping;
        String notation = opts == null || opts.notation == null ? "" : opts.notation;
        String compactDisplay = opts == null || opts.compactDisplay == null ? "short" : opts.compactDisplay;
        String curDisplay = opts == null || opts.currencyDisplay == null ? "" : opts.currencyDisplay;
        int minFrac = opts == null ? -1 : opts.minimumFractionDigits;
        int maxFrac = opts == null ? -1 : opts.maximumFractionDigits;
        int minSig = opts == null ? 0 : opts.minimumSignificantDigits;
        int maxSig = opts == null ? 0 : opts.maximumSignificantDigits;
        int minInt = opts == null ? 0 : opts.minimumIntegerDigits;

        long amount = value;
        boolean percent = opts != null && "percent".equals(opts.style);
        if (percent) {
            amount = (long) value * 100;
            }
        String body;
        if ("scientific".equals(notation) || "engineering".equals(notation)) {
            body = scientific(amount, "engineering".equals(notation));
            } else if ("compact".equals(notation)) {
            body = compact(amount, compactDisplay);
            } else {
            int fracDigits = 0;
            if (minSig > 0) {
                int digits = Long.toString(Math.abs(amount)).length();
                if (digits < minSig) {
                    fracDigits = minSig - digits;
                    }
            }
            if (maxSig > 0) {
                int digits = Long.toString(Math.abs(amount)).length();
                if (digits > maxSig) {
                    long factor = pow10(digits - maxSig);
                    amount = Math.round(amount / (double) factor) * factor;
                    }
            }
                                    boolean currency = opts != null && "currency".equals(opts.style);
            if (currency) {
                int curFrac = "JPY".equals(opts.currency) ? 0 : 2;
                if (minFrac < 0) {
                    minFrac = curFrac;
                    }
                if (maxFrac < 0) {
                    maxFrac = curFrac;
                    }
            }
            if (fracDigits == 0 && minFrac > 0) {
                fracDigits = minFrac;
                }
            String intPart = Long.toString(Math.abs(amount));
            while (intPart.length() < minInt) {
                intPart = "0" + intPart;
                }
        String groupSep = groupSeparator(lang);
        String decSep = decimalSeparator(lang);
            if (grouped && groupSep != null) {
                intPart = groupDigits(intPart, groupSep);
                }
            body = (amount < 0 ? "-" : "") + intPart;
            if (fracDigits > 0) {
                body = body + decSep + "0".repeat(fracDigits);
                }
            if (percent) {
                body = body + "%";
                }
            if (currency) {
                body = attachCurrency(body, opts.currency, curDisplay, lang);
                }
        }
        if (lang.startsWith("ar")) {
            body = toArabicDigits(body);
            }
        return body;
        }

    /**
     * 科学计数法（engineering 时指数取 3 的倍数）。
     */
    private static String scientific(long v, boolean engineering) {
        if (v == 0) {
            return "0E0";
            }
        long abs = Math.abs(v);
        int exp = Long.toString(abs).length() - 1;
        if (engineering) {
            exp = exp - ((exp % 3) + 3) % 3;
            }
        long mantissa = abs / pow10(exp);
        return (v < 0 ? "-" : "") + mantissa + "E" + exp;
        }

    /**
     * compact 短/长格式（K/M/B/T、thousand/million/billion/trillion）。
     */
    private static String compact(long v, String display) {
        if (v == 0) {
            return "0";
            }
        long[] bounds = {1000L, 1000000L, 1000000000L, 1000000000000L};
        String[] unitsShort = {"K", "M", "B", "T"};
        String[] unitsLong = {" thousand", " million", " billion", " trillion"};
        long abs = Math.abs(v);
        for (int i = bounds.length - 1; i >= 0; i--) {
            if (abs >= bounds[i]) {
                long q = v / bounds[i];
                return "long".equals(display) ? q + unitsLong[i] : q + unitsShort[i];
                }
        }
        return Long.toString(v);
        }

    /**
     * 10 的 n 次幂。
     */
    private static long pow10(int n) {
        long r = 1;
        for (int i = 0; i < n; i++) {
            r *= 10;
            }
        return r;
        }

    /**
     * 货币前后缀/展示方式（symbol 前置或 de 后缀、code 与数字间 NBSP、name 后缀）。
     */
    private static String attachCurrency(String body, String cur, String display, String lang) {
        if ("code".equals(display)) {
            return cur + "\u00A0" + body;
            }
        if ("name".equals(display)) {
            String name;
            if ("USD".equals(cur)) {
                name = "US dollars";
                } else if ("GBP".equals(cur)) {
                name = "British pounds";
                } else if ("EUR".equals(cur)) {
                name = "euros";
                } else if ("JPY".equals(cur)) {
                name = "Japanese yen";
                } else {
                name = cur;
                }
            return body + " " + name;
            }
        String symbol;
        if ("USD".equals(cur)) {
            symbol = "$";
            } else if ("EUR".equals(cur)) {
            symbol = "\u20AC";
            } else if ("GBP".equals(cur)) {
            symbol = "\u00A3";
            } else if ("JPY".equals(cur)) {
            symbol = lang.startsWith("ja") || lang.startsWith("zh") ? "\uFFE5" : "\u00A5";
            } else {
            symbol = cur;
            }
        if (lang.startsWith("de")) {
            return body + "\u00A0" + symbol;
            }
        return symbol + body;
        }

    /**
     * BCP47 简式校验（语言 2-3 字母 + 可选 2-8 位子标记）。
     */
    private static boolean isValidLocale(String lc) {
        String[] parts = lc.split("[-_]");
        String lang = parts[0];
        if (lang.length() < 2 || lang.length() > 3) {
            return false;
            }
        for (int i = 0; i < lang.length(); i++) {
            if (!Character.isLetter(lang.charAt(i))) {
                return false;
                }
        }
        for (int i = 1; i < parts.length; i++) {
            String p = parts[i];
            if (p.length() < 2 || p.length() > 8) {
                return false;
                }
            for (int j = 0; j < p.length(); j++) {
                if (!Character.isLetterOrDigit(p.charAt(j))) {
                    return false;
                    }
            }
        }
        return true;
        }

    /**
     * 按语言选千分位分隔符（es/pl 不使用分组）。
     */
    private static String groupSeparator(String lang) {
        if ("de".equals(lang) || "it".equals(lang) || "pt".equals(lang) || "da".equals(lang)) {
            return ".";
            }
        if ("fr".equals(lang)) {
            return "\u202F";
            }
        if ("ru".equals(lang) || "sv".equals(lang) || "nb".equals(lang) || "fi".equals(lang)) {
            return "\u00A0";
            }
        if ("es".equals(lang) || "pl".equals(lang)) {
            return null;
            }
        if ("ar".equals(lang)) {
            return "\u066C";
            }
        return ",";
        }

    /**
     * 按语言选小数点分隔符。
     */
    private static String decimalSeparator(String lang) {
        if ("de".equals(lang) || "it".equals(lang) || "pt".equals(lang) || "fr".equals(lang)
                || "ru".equals(lang) || "sv".equals(lang) || "es".equals(lang) || "pl".equals(lang)
                || "ar".equals(lang) || "da".equals(lang) || "nb".equals(lang) || "fi".equals(lang)) {
            return ",";
            }
        return ".";
        }

    /**
     * 千分位分组（每 3 位插入指定分隔符）。
     */
    private static String groupDigits(String digits, String sep) {
        StringBuilder sb = new StringBuilder();
        int first = digits.length() % 3;
        if (first == 0 && digits.length() > 0) {
            first = 3;
            }
        for (int i = 0; i < digits.length(); i++) {
            if (i > 0 && (i - first) % 3 == 0) {
                sb.append(sep);
                }
            sb.append(digits.charAt(i));
            }
        return sb.toString();
        }

    /**
     * 数字字符替换为阿拉伯-印度数字（ar-SA）。
     */
    private static String toArabicDigits(String body) {
        char[] ar = {'\u0660', '\u0661', '\u0662', '\u0663', '\u0664',
                     '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'};
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < body.length(); i++) {
            char c = body.charAt(i);
            if (c >= '0' && c <= '9') {
                sb.append(ar[c - '0']);
                } else {
                sb.append(c);
                }
        }
        return sb.toString();
        }

    /**
     * 返回数组本身，对应 valueOf 语义。
     */
    public Uint16Array valueOf() {
        return this;
        }

    /**
     * 返回下标迭代器，对应 keys 语义。
     */
    public KeyIterator keys() {
        return new KeyIterator(true);
        }

    /**
     * 返回元素值迭代器，对应 values 语义。
     */
    public KeyIterator values() {
        return new KeyIterator(false);
        }

    /**
     * 返回 [index, value] 二元组迭代器，对应 entries 语义。
     */
    public EntriesIterator entries() {
        return new EntriesIterator();
        }

    /**
     * 从后向前查找指定值，返回下标（无则 -1），对应 lastIndexOf 语义。
     */
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

    /**
     * 从后往前查找下标，对应 lastIndexOf 语义。
     */
    public int lastIndexOf(int value) {
        return lastIndexOf(value, length - 1);
        }

    /**
     * 从后向前查找（double 值：NaN 永不匹配，其余 ToInt16 后比较）。
     */
    public int lastIndexOf(double value) {
        return lastIndexOf(value, length - 1);
        }

    /**
     * 从后往前查找下标，对应 lastIndexOf 语义。
     */
    public int lastIndexOf(double value, int fromIndex) {
        if (Double.isNaN(value) || Double.isInfinite(value) || value != Math.rint(value)) {
            return -1;
            }
        return lastIndexOf(toUint16(value), fromIndex);
        }

    /**
     * 从前往后查找指定值，返回下标（无则 -1），对应 indexOf 语义。
     */
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

    /**
     * 从前往后查找下标，对应 indexOf 语义。
     */
    public int indexOf(int value) {
        return indexOf(value, 0);
        }

    /**
     * 是否包含指定值（SameValueZero 相等语义）。
     */
    public boolean includes(int value, int fromIndex) {
        return indexOf(value, fromIndex) != -1;
        }

    /**
     * 是否包含指定值，对应 includes 语义。
     */
    public boolean includes(int value) {
        return indexOf(value) != -1;
        }

    /**
     * 用 value 替换指定下标元素并返回新数组（原数组不变），
     * 对应 with 语义；负下标从末尾倒数。
     */
    public Uint16Array with(double index, double value) {
        return with(toIndexD(index, length), value);
        }

    /**
     * with 方法。
     */
    public Uint16Array with(int index, double value) {
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
        copy[i] = toUint16(value);
        return new Uint16Array(copy);
        }

    /**
     * 返回 [begin, end) 区间的新视图（与宿主共享底层缓冲区），
     * 负数索引从末尾倒数、越界收敛，对应 subarray 语义。
     */
    public Uint16Array slice(double start, double end) {
        return slice(toIndexD(start, length), toIndexD(end, length));
        }

    /**
     * 返回从 start 到末尾的 slice 拷贝，对应 slice 语义。
     */
    public Uint16Array slice(double start) {
        return slice(start, length);
        }

    /**
     * 返回从 begin 到 end（不含）的子数组视图，对应 subarray 语义。
     */
    public Uint16Array subarray(double begin, double end) {
        return subarray(toIndexD(begin, length), toIndexD(end, length));
        }

    /**
     * 返回从 begin 到末尾的子数组视图，对应 subarray 语义。
     */
    public Uint16Array subarray(double begin) {
        return subarray(begin, length);
        }

    /**
     * 返回从 begin 到 end（不含）的子数组视图，对应 subarray 语义。
     */
    public Uint16Array subarray(int begin, int end) {
        int len = length;
        int from = toIndex(begin, len);
        int to = toIndex(end, len);
        int subLen = to - from;
        if (subLen < 0) {
            subLen = 0;
            }
        return new Uint16Array(buffer, byteOffset + from * BYTES_PER_ELEMENT, subLen);
        }

    /**
     * 返回从 begin 到末尾的子数组视图，对应 subarray 语义。
     */
    public Uint16Array subarray(int begin) {
        return subarray(begin, length);
        }

    /**
     * 返回完整数组的子数组视图，对应 subarray 语义。
     */
    public Uint16Array subarray() {
        return subarray(0, length);
        }

    /**
     * 返回 [start, end) 区间的新数组（拷贝，不共享缓冲区），对应 slice 语义。
     */
    public Uint16Array slice(int start, int end) {
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
        return new Uint16Array(copy);
        }

    /**
     * 返回从 start 到末尾的 slice 拷贝，对应 slice 语义。
     */
    public Uint16Array slice(int start) {
        return slice(start, length);
        }

    /**
     * 返回完整数组的 slice 拷贝，对应 slice 语义。
     */
    public Uint16Array slice() {
        return slice(0, length);
        }

    /**
     * 原地反转元素顺序，返回数组本身，对应 reverse 语义。
     */
    public Uint16Array reverse() {
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
    public Uint16Array copyWithin(double target, double start, double end) {
        return copyWithin(toIndexD(target, length), toIndexD(start, length), toIndexD(end, length));
        }

    /**
     * 区间内复制元素，对应 copyWithin 语义。
     */
    public Uint16Array copyWithin(int target, int start, int end) {
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

    /**
     * 区间内复制元素，对应 copyWithin 语义。
     */
    public Uint16Array copyWithin(int target, int start) {
        return copyWithin(target, start, length);
        }

    /**
     * 按给定比较器排序（原地修改并返回数组本身），对应 sort(compareFn) 语义。
     */
    public Uint16Array sort(Uint16ArrayComparator cmp) {
        Integer[] boxed = new Integer[length];
        for (int i = 0; i < length; i++) {
            boxed[i] = get(i);
            }
        java.util.Arrays.sort(boxed, (a, b) -> (int) cmp.compare(a, b));
        for (int i = 0; i < length; i++) {
            set(i, boxed[i]);
            }
        return this;
        }

    /**
     * 按 ECMAScript 默认比较器（元素数字升序）排序，
     * 原地修改并返回数组本身，对应 sort 语义。
     */
    public Uint16Array sort() {
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

    /**
     * 返回排序后的新数组（原数组不变），对应 toSorted 语义。
     */
    public Uint16Array toSorted() {
        int[] copy = new int[length];
        for (int i = 0; i < length; i++) {
            copy[i] = get(i);
            }
        Uint16Array sorted = new Uint16Array(copy);
        sorted.sort();
        return sorted;
        }

    /**
     * 返回反转后的新数组（原数组不变），对应 toReversed 语义。
     */
    public Uint16Array toReversed() {
        int[] copy = new int[length];
        for (int i = 0; i < length; i++) {
            copy[i] = get(length - 1 - i);
            }
        return new Uint16Array(copy);
        }

    /**
     * 构造 Uint16Array（元素逐一 ToInt16 转换），对应 of 语义。
     */
    public static Uint16Array of(int... values) {
        return new Uint16Array(values);
        }

    /**
     * 从既有 Uint16Array 拷贝构造，对应 from 语义。
     */
    public static Uint16Array from(Uint16Array src) {
        int[] copy = new int[src.length];
        for (int i = 0; i < src.length; i++) {
            copy[i] = src.get(i);
            }
        return new Uint16Array(copy);
        }

    /**
     * 从元素序列构造，对应 from(arrayLike) 语义。
     */
    public static Uint16Array from(int[] values) {
        return new Uint16Array(values);
        }

    /**
     * 从整型列表映射构造，对应 from(arrayLike, mapFn) 语义。
     */
    public static Uint16Array from(java.util.List<Integer> values, Uint16ArrayMapper2 cb) {
        int[] copy = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            copy[i] = toUint16(cb.apply(values.get(i), i));
            }
        return new Uint16Array(copy);
        }

    /**
     * 从 double 数组映射构造（回调接收转换前源值，元素按 ToUint16 转换）。
     */
    public static Uint16Array from(double[] values, Uint16ArrayDoubleMapper1 cb) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toUint16(cb.apply(values[i]));
            }
        return new Uint16Array(copy);
        }

    /**
     * 从数组或集合构造，对应 from 语义。
     */
    public static Uint16Array from(double[] values, Uint16ArrayDoubleMapper2 cb) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toUint16(cb.apply(values[i], i));
            }
        return new Uint16Array(copy);
        }

    /** 使用整型列表的元素填充本数组。 */
    /**
     * 使用整型列表的元素填充本数组（从 offset 起，越界抛 RangeError）。
     */
    public Integer set(java.util.List<Integer> src, int offset) {
        if (src == null) {
            throw new NullPointerError();
            }
        if (offset < 0 || offset + src.size() > length) {
            throw new RangeError("Offset out of range");
            }
        for (int i = 0; i < src.size(); i++) {
            buffer.setInt16(byteOffset + (offset + i) * BYTES_PER_ELEMENT, toUint16(src.get(i)));
            }
        return null;
        }

    /**
     * 写入元素或批量填充，对应 set 语义。
     */
    public Integer set(java.util.List<Integer> src) {
        return set(src, 0);
        }

    /**
     * 从整型列表构造，对应 from(arrayLike) 语义。
     */
    public static Uint16Array from(java.util.List<Integer> values, Uint16ArrayMapper1 cb) {
        int[] copy = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            copy[i] = toUint16(cb.apply(values.get(i)));
            }
        return new Uint16Array(copy);
        }

    /**
     * 从数组或集合构造，对应 from 语义。
     */
    public static Uint16Array from(java.util.Set<Integer> values, Uint16ArrayMapper1 cb) {
        java.util.List<Integer> snapshot = new java.util.ArrayList<>(values);
        java.util.List<Integer> copy = new java.util.ArrayList<>();
        for (int i = 0; i < snapshot.size(); i++) {
            copy.add(toUint16(cb.apply(snapshot.get(i))));
            syncSet(snapshot, values);
            }
        return new Uint16Array(toIntArray(copy));
        }

    /**
     * 从数组或集合构造，对应 from 语义。
     */
    public static Uint16Array from(java.util.Set<Integer> values, Uint16ArrayMapper2 cb) {
        java.util.List<Integer> snapshot = new java.util.ArrayList<>(values);
        java.util.List<Integer> copy = new java.util.ArrayList<>();
        for (int i = 0; i < snapshot.size(); i++) {
            copy.add(toUint16(cb.apply(snapshot.get(i), i)));
            syncSet(snapshot, values);
            }
        return new Uint16Array(toIntArray(copy));
        }

    /**
     * 把回调期间新增的 Set 元素同步进快照（ArkTS Set 迭代允许动态修改）。
     */
    private static void syncSet(java.util.List<Integer> snapshot, java.util.Set<Integer> values) {
        if (snapshot.size() >= values.size()) {
            return;
            }
        for (Integer v : values) {
            if (!snapshot.contains(v)) {
                snapshot.add(v);
                }
        }
    }

    private static int[] toIntArray(java.util.List<Integer> list) {
        int[] arr = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            arr[i] = list.get(i);
            }
        return arr;
        }

    /**
     * 从数组或集合构造，对应 from 语义。
     */
    public static Uint16Array from(java.util.List<Integer> values) {
        int[] copy = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            copy[i] = values.get(i);
            }
        return new Uint16Array(copy);
        }

    /**
     * 从整型集合构造，对应 from(arrayLike) 语义。
     */
    public static Uint16Array from(java.util.Set<Integer> values) {
        int[] copy = new int[values.size()];
        int i = 0;
        for (int v : values) {
            copy[i++] = v;
            }
        return new Uint16Array(copy);
        }

    /**
     * 从浮点数组构造（ToInt16 转换），对应 from(arrayLike) 语义。
     */
    public static Uint16Array from(double[] values) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toUint16(values[i]);
            }
        return new Uint16Array(copy);
        }

    /**
     * 从浮点元素序列构造（ToInt16 转换），对应 of 语义的 NaN/Infinity 场景。
     */
    public static Uint16Array of(double... values) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toUint16(values[i]);
            }
        return new Uint16Array(copy);
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

        /**
         * 返回迭代结果（value + done），对应迭代器 next() 语义。
         */
        public IteratorResult next() {
            if (cursor >= length) {
                return new IteratorResult(null, true);
                }
            int i = cursor++;
            return new IteratorResult(keys ? i : get(i), false);
            }

        @Override
        /**
         * iterator 方法。
         */
        public Iterator<Integer> iterator() {
            return new KeyCursor();
            }

        /**
         * for-of 增强循环专用游标（与显式 next() 共享同一消耗进度）。
         */
        private final class KeyCursor implements Iterator<Integer> {

            @Override
            /**
             * hasNext 方法。
             */
            public boolean hasNext() {
                return cursor < length;
                }

            @Override
            /**
             * next 方法。
             */
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

        /**
         * 返回迭代结果（[index, value] + done），对应迭代器 next() 语义。
         */
        public EntryResult next() {
            if (cursor >= length) {
                return new EntryResult(null, true);
                }
            int i = cursor++;
            return new EntryResult(new int[] {i, get(i)}, false);
            }

        @Override
        /**
         * iterator 方法。
         */
        public Iterator<int[]> iterator() {
            return new EntryCursor();
            }

        /**
         * for-of 增强循环专用游标（一次性）。
         */
        private final class EntryCursor implements Iterator<int[]> {

            private int pos;

            @Override
            /**
             * hasNext 方法。
             */
            public boolean hasNext() {
                return pos < length;
                }

            @Override
            /**
             * next 方法。
             */
            public int[] next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                    }
                int i = pos++;
                return new int[] {i, get(i)};
                }
        }
    }

    /** 回调接口：sort 的比较器 (a, b)（double 返回值兼容 Infinity 语义）。 */
    @FunctionalInterface
    public interface Uint16ArrayComparator {
        /** 比较两元素大小（sort 比较器）。 */
        double compare(int a, int b);
        }

    /** 回调接口：find/findIndex/some/every/filter 的谓词 (value, index, array)。 */
    @FunctionalInterface
    public interface Uint16ArrayFinder {
        /** 谓词测试（value, index, array）。 */
        boolean test(int value, int index, Uint16Array array);
        }

    /** 回调接口：谓词的无参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayFinder0 {
        /** 谓词测试（value, index, array）。 */
        boolean test();
        }

    /** 回调接口：谓词的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayFinder1 {
        /** 谓词测试（value, index, array）。 */
        boolean test(int value);
        }

    /** 回调接口：谓词的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayFinder2 {
        /** 谓词测试（value, index, array）。 */
        boolean test(int value, int index);
        }

    /** 回调接口：forEach 的处理器 (value, index, array)。 */
    @FunctionalInterface
    public interface Uint16ArrayConsumer {
        /** forEach 消费回调方法。 */
        void accept(int value, int index, Uint16Array array);
        }

    /** 回调接口：处理器的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayConsumer1 {
        /** forEach 消费回调方法。 */
        void accept(int value);
        }

    /** 回调接口：处理器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayConsumer2 {
        /** forEach 消费回调方法。 */
        void accept(int value, int index);
        }

    /** 回调接口：map 的映射器 (value, index, array)。 */
    @FunctionalInterface
    public interface Uint16ArrayMapper {
        /** 函数式接口回调方法。 */
        int apply(int value, int index, Uint16Array array);
        }

    /** 回调接口：double 源值映射器（from(double[], cb) 回调接收转换前值）。 */
    @FunctionalInterface
    public interface Uint16ArrayDoubleMapper1 {
        /** 函数式接口回调方法。 */
        double apply(double value);
        }

    /** 回调接口：double 源值映射器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayDoubleMapper2 {
        /** 函数式接口回调方法。 */
        double apply(double value, int index);
        }

    /** 回调接口：映射器的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayMapper1 {
        /** 函数式接口回调方法。 */
        int apply(int value);
        }

    /** 回调接口：映射器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayMapper2 {
        /** 函数式接口回调方法。 */
        int apply(int value, int index);
        }

    /** 回调接口：布尔累计归约器（every 式归约场景）。 */
    @FunctionalInterface
    public interface Int16BooleanReducer {
        /** 函数式接口回调方法。 */
        boolean apply(boolean acc, int value, int index, Uint16Array array);
        }

    /**
     * 布尔累计的 reduce（如 prev && curr > 0）。
     */
    public boolean reduce(Int16BooleanReducer cb, boolean initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        boolean acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /** 回调接口：字符串归约器（reduceRight 字符串累计场景）。 */
    @FunctionalInterface
    public interface Int16StringReducer {
        /** 函数式接口回调方法。 */
        String apply(String acc, int value, int index, Uint16Array array);
        }

    /** 回调接口：long 累计归约器（大数 seed 场景）。 */
    @FunctionalInterface
    public interface Int16LongReducer {
        /** 函数式接口回调方法。 */
        long apply(long acc, int value, int index, Uint16Array array);
        }

    /**
     * long 累计的 reduce（大数 seed 不截断；独立方法名避免重载歧义）。
     */
    public long reduceLong(Int16LongReducer cb, long initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        long acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * reduceLong 方法。
     */
    public long reduceLong(Int16LongReducer cb) {
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        long acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * reduceRightLong 方法。
     */
    public long reduceRightLong(Int16LongReducer cb, long initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        long acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /** 双精度累计的归约回调（prev 可含小数/Infinity/NaN）。 */
    @FunctionalInterface
    public interface Int16DoubleReducer {
        /** 函数式接口回调方法。 */
        double apply(double prev, double curr, int index, Uint16Array array);
        }

    /**
     * double 累计的 reduce（小数/Infinity/NaN seed 不截断；独立方法名避免重载歧义）。
     */
    public double reduceDouble(Int16DoubleReducer cb, double initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        double acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * reduceDouble 方法。
     */
    public double reduceDouble(Int16DoubleReducer cb) {
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        double acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * reduceRightDouble 方法。
     */
    public double reduceRightDouble(Int16DoubleReducer cb, double initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        double acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * reduceRightDouble 方法。
     */
    public double reduceRightDouble(Int16DoubleReducer cb) {
        if (length == 0) {
            throw new TypeError("Reduce of empty array with no initial value");
            }
        double acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * 字符串累计的 reduce（如 join 式拼接）。
     */
    public String reduce(Int16StringReducer cb, String initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        String acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /**
     * 字符串累计的 reduceRight（如 join 式拼接）。
     */
    public String reduceRight(Int16StringReducer cb, String initial) {
        if (cb == null) {
            throw new NullPointerError();
            }
        String acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
            }
        return acc;
        }

    /** 回调接口：reduce 的归约器 (acc, value, index, array)。 */
    @FunctionalInterface
    public interface Uint16ArrayReducer {
        /** 函数式接口回调方法。 */
        int apply(int acc, int value, int index, Uint16Array array);
        }

    /** 回调接口：归约器的 (acc, value) 双参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayReducer2 {
        /** 函数式接口回调方法。 */
        int apply(int acc, int value);
        }

    /** 回调接口：归约器的 (acc, value, index) 三参数形式。 */
    @FunctionalInterface
    public interface Uint16ArrayReducer3 {
        /** 函数式接口回调方法。 */
        int apply(int acc, int value, int index);
        }

    /**
     * 下标换算（double 版）：NaN 归 0、±Infinity 收敛到端点。
     */
    private static int toIndexD(double index, int len) {
        if (Double.isNaN(index)) {
            return 0;
            }
        if (Double.isInfinite(index) && index > 0) {
            return len;
            }
        if (Double.isInfinite(index) && index < 0) {
            return 0;
            }
        return toIndex((int) index, len);
        }

    /**
     * 下标换算：负数从末尾倒数、越界收敛到 [0, len]，NaN 归 0。
     */
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

    /**
     * ToUint16：NaN/Infinity 归 0，小数向零截断，越界 16 位环绕。
     */
    static int toUint16(double value) {
        if (Double.isNaN(value)) {
            return 0;
            }
        if (Double.isInfinite(value)) {
            return 0;
            }
        if (value == 0.0) {
            return 0;
            }
        return (short) (long) value & 0xFFFF;
        }
}
