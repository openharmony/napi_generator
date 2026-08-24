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
 * 有符号 16 位整型数组，按 ECMAScript %TypedArray%（Uint8Array 特化）语义实现：
 * 元素写入经 ToInt16 转换（NaN/Infinity 归 0、小数向零截断、越界 16 位环绕），
 * 视图（subarray）与宿主数组共享同一 ArrayBuffer，方法名与 JS 行为一一对应。
 * 回调接口提供 1/2/3 参数重载，由重载决议按 lambda 参数个数自动匹配。
 */
public class Uint8Array implements IntArrayView {

    /** 每个元素占用的字节数。 */
    public static final int BYTES_PER_ELEMENT = 1;

    private final ArrayBuffer buffer;
    private final int byteOffset;
    private final int length;

    public Uint8Array(int length) {
        this(new ArrayBuffer(length * BYTES_PER_ELEMENT), 0, length);
    }

    public Uint8Array(double length) {
        this((int) length);
    }

    public Uint8Array() {
        this(0);
    }

    public Uint8Array(IntArrayView src) {
        this(src.length());
        for (int i = 0; i < src.length(); i++) {
            set(i, src.get(i));
        }
    }

    public Uint8Array(java.util.List<Integer> src) {
        this(src.size());
        for (int i = 0; i < src.size(); i++) {
            set(i, src.get(i));
        }
    }

    public Uint8Array(int... values) {
        this(values.length);
        for (int i = 0; i < values.length; i++) {
            set(i, values[i]);
        }
    }

    public Uint8Array(double... values) {
        this(values.length);
        for (int i = 0; i < values.length; i++) {
            set(i, values[i]);
        }
    }

    public Uint8Array(ArrayBuffer buf) {
        this(buf, 0, buf.byteLength() / BYTES_PER_ELEMENT);
    }

    public Uint8Array(ArrayBuffer buf, int byteOffset) {
        this(buf, byteOffset, (buf.byteLength() - byteOffset) / BYTES_PER_ELEMENT);
    }

    public Uint8Array(ArrayBuffer buf, double byteOffset) {
        this(buf, (int) byteOffset);
    }

    public Uint8Array(ArrayBuffer buf, double byteOffset, double length) {
        this(buf, (int) byteOffset, (int) length);
    }

    public Uint8Array(ArrayBuffer buf, int byteOffset, int length) {
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
        return buffer.getInt8(byteOffset + index * BYTES_PER_ELEMENT) & 0xFF;
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
    public Integer set(int index, double value) {
        if (index < 0 || index >= length) {
            return null;
        }
        buffer.setInt8(byteOffset + index * BYTES_PER_ELEMENT, toUint8(value));
        return null;
    }

    /** 使用另一数组的元素填充本数组。 */
    public Integer set(Uint8Array src) {
        return set(src, 0);
    }

    /** 使用另一数组的元素填充本数组（从 offset 起）。 */
    public Integer set(Uint8Array src, int offset) {
        for (int i = 0; i < src.length; i++) {
            set(offset + i, src.get(i));
        }
        return null;
    }

    /** 使用整型数组的元素填充本数组。 */
    public Integer set(int[] src) {
        return set(src, 0);
    }

    /** 使用整型数组的元素填充本数组。 */
    public Integer set(int[] src, int offset) {
        for (int i = 0; i < src.length; i++) {
            set(offset + i, src[i]);
        }
        return null;
    }

    /** 使用浮点数组的元素填充本数组（ToInt16 转换）。 */
    public Integer set(double[] src, int offset) {
        for (int i = 0; i < src.length; i++) {
            set(offset + i, src[i]);
        }
        return null;
    }

    public Integer set(double[] src) {
        return set(src, 0);
    }

    /**
     * 用 value 填充 [start, end) 区间（含负数索引换算与区间收敛），
     * 返回数组本身以支持链式调用。
     */
    public Uint8Array fill(double value, double start, double end) {
        return fill(value, toIndexD(start, length), toIndexD(end, length));
    }

    public Uint8Array fill(double value, int start, int end) {
        int len = length;
        int from = toIndex(start, len);
        int to = toIndex(end, len);
        for (int i = from; i < to; i++) {
            set(i, value);
        }
        return this;
    }

    public Uint8Array fill(double value, int start) {
        return fill(value, start, length);
    }

    public Uint8Array fill(double value) {
        return fill(value, 0, length);
    }

    /** 返回首个满足谓词的元素（无则 null），对应 find 语义。 */
    public Integer find(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = 0; i < length; i++) {
            int v = get(i);
            if (cb.test(v, i, this)) {
                return v;
            }
        }
        return null;
    }

    public Integer find(Uint8ArrayFinder0 cb) {
        return find((v, i, a) -> cb.test());
    }

    public Integer find(Uint8ArrayFinder1 cb) {
        return find((v, i, a) -> cb.test(v));
    }

    public Integer find(Uint8ArrayFinder2 cb) {
        return find((v, i, a) -> cb.test(v, i));
    }

    /** 从后向前返回首个满足谓词的元素（无则 null），对应 findLast 语义。 */
    public Integer findLast(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = length - 1; i >= 0; i--) {
            int v = get(i);
            if (cb.test(v, i, this)) {
                return v;
            }
        }
        return null;
    }

    public Integer findLast(Uint8ArrayFinder0 cb) {
        return findLast((v, i, a) -> cb.test());
    }

    public Integer findLast(Uint8ArrayFinder1 cb) {
        return findLast((v, i, a) -> cb.test(v));
    }

    public Integer findLast(Uint8ArrayFinder2 cb) {
        return findLast((v, i, a) -> cb.test(v, i));
    }

    /** 从后向前返回首个满足谓词的元素下标（无则 -1），对应 findLastIndex 语义。 */
    public int findLastIndex(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = length - 1; i >= 0; i--) {
            if (cb.test(get(i), i, this)) {
                return i;
            }
        }
        return -1;
    }

    public int findLastIndex(Uint8ArrayFinder0 cb) {
        return findLastIndex((v, i, a) -> cb.test());
    }

    public int findLastIndex(Uint8ArrayFinder1 cb) {
        return findLastIndex((v, i, a) -> cb.test(v));
    }

    public int findLastIndex(Uint8ArrayFinder2 cb) {
        return findLastIndex((v, i, a) -> cb.test(v, i));
    }

    /** 返回首个满足谓词的元素下标（无则 -1），对应 findIndex 语义。 */
    public int findIndex(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                return i;
            }
        }
        return -1;
    }

    public int findIndex(Uint8ArrayFinder1 cb) {
        return findIndex((v, i, a) -> cb.test(v));
    }

    public int findIndex(Uint8ArrayFinder2 cb) {
        return findIndex((v, i, a) -> cb.test(v, i));
    }

    /** 返回满足谓词的全部元素构成的新数组，对应 filter 语义。 */
    public Uint8Array filter(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
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
        return new Uint8Array(picked);
    }

    public Uint8Array filter(Uint8ArrayFinder0 cb) {
        return filter((v, i, a) -> cb.test());
    }

    public Uint8Array filter(Uint8ArrayFinder1 cb) {
        return filter((v, i, a) -> cb.test(v));
    }

    public Uint8Array filter(Uint8ArrayFinder2 cb) {
        return filter((v, i, a) -> cb.test(v, i));
    }

    /** 对每个元素应用回调（返回值构成新数组），对应 map 语义。 */
    public Uint8Array map(Uint8ArrayMapper cb) {
        if (cb == null) { throw new NullPointerError(); }
        int[] mapped = new int[length];
        for (int i = 0; i < length; i++) {
            mapped[i] = toUint8(cb.apply(get(i), i, this));
        }
        return new Uint8Array(mapped);
    }

    public Uint8Array map(Uint8ArrayMapper1 cb) {
        return map((v, i, a) -> cb.apply(v));
    }

    public Uint8Array map(Uint8ArrayMapper2 cb) {
        return map((v, i, a) -> cb.apply(v, i));
    }

    /** 从左到右归约，返回最终累计值，对应 reduce 语义（含无初始值形式）。 */
    public int reduce(Uint8ArrayReducer cb, int initial) {
        if (cb == null) { throw new NullPointerError(); }
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

    public int reduce(Uint8ArrayReducer cb) {
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

    public int reduce(Uint8ArrayReducer2 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i));
        }
        return acc;
    }

    public int reduce(Uint8ArrayReducer2 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i));
        }
        return acc;
    }

    public int reduce(Uint8ArrayReducer3 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = initial;
        for (int i = 0; i < length; i++) {
            acc = cb.apply(acc, get(i), i);
        }
        return acc;
    }

    public int reduce(Uint8ArrayReducer3 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i);
        }
        return acc;
    }

    /** 从右向左归约，返回最终累计值，对应 reduceRight 语义（含无初始值形式）。 */
    public int reduceRight(Uint8ArrayReducer cb, int initial) {
        if (cb == null) { throw new NullPointerError(); }
        int acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

    public int reduceRight(Uint8ArrayReducer cb) {
        int acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

    public int reduceRight(Uint8ArrayReducer2 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i));
        }
        return acc;
    }

    public int reduceRight(Uint8ArrayReducer2 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i));
        }
        return acc;
    }

    public int reduceRight(Uint8ArrayReducer3 cb, int initial) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = initial;
        for (int i = length - 1; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i);
        }
        return acc;
    }

    public int reduceRight(Uint8ArrayReducer3 cb) {
        if (cb == null) {
            throw new NullPointerError();
        }
        int acc = get(length - 1);
        for (int i = length - 2; i >= 0; i--) {
            acc = cb.apply(acc, get(i), i);
        }
        return acc;
    }

    /** 是否存在元素满足谓词。 */
    public boolean some(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = 0; i < length; i++) {
            if (cb.test(get(i), i, this)) {
                return true;
            }
        }
        return false;
    }

    public boolean some(Uint8ArrayFinder0 cb) {
        return some((v, i, a) -> cb.test());
    }

    public boolean some(Uint8ArrayFinder1 cb) {
        return some((v, i, a) -> cb.test(v));
    }

    public boolean some(Uint8ArrayFinder2 cb) {
        return some((v, i, a) -> cb.test(v, i));
    }

    /** 是否所有元素都满足谓词。 */
    public boolean every(Uint8ArrayFinder cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = 0; i < length; i++) {
            if (!cb.test(get(i), i, this)) {
                return false;
            }
        }
        return true;
    }

    public boolean every(Uint8ArrayFinder0 cb) {
        return every((v, i, a) -> cb.test());
    }

    public boolean every(Uint8ArrayFinder1 cb) {
        return every((v, i, a) -> cb.test(v));
    }

    public boolean every(Uint8ArrayFinder2 cb) {
        return every((v, i, a) -> cb.test(v, i));
    }

    /** 对每个元素执行回调，对应 forEach 语义。 */
    public void forEach(Uint8ArrayConsumer cb) {
        if (cb == null) { throw new NullPointerError(); }
        for (int i = 0; i < length; i++) {
            cb.accept(get(i), i, this);
        }
    }

    public void forEach(Uint8ArrayConsumer1 cb) {
        forEach((v, i, a) -> cb.accept(v));
    }

    public void forEach(Uint8ArrayConsumer2 cb) {
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

    /** 区域设置字符串（默认 en-US 分组格式），对应 toLocaleString 语义。 */
    public String toLocaleString() {
        return toLocaleString("en-US", null);
    }

    public String toLocaleString(String locales) {
        return toLocaleString(locales, null);
    }

    public String toLocaleString(java.util.List<String> locales) {
        return toLocaleString(locales == null || locales.isEmpty() ? "en-US" : locales.get(0), null);
    }

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

    /** 按 locale 与选项格式化单个元素（千分位/补零/小数/百分比/货币）。 */
    private static String formatIntl(int value, String locales, IntlOptions opts) {
        boolean grouped = opts == null || opts.useGrouping;
        boolean percent = opts != null && "percent".equals(opts.style);
        boolean currency = opts != null && "currency".equals(opts.style);
        long amount = value;
        if (percent) {
            amount = (long) value * 100;
        }
        String intPart = Long.toString(Math.abs(amount));
        int minInt = opts != null ? opts.minimumIntegerDigits : 0;
        while (intPart.length() < minInt) {
            intPart = "0" + intPart;
        }
        if (grouped) {
            intPart = groupDigits(intPart, locales);
        }
        int minFrac = opts != null ? opts.minimumFractionDigits : (currency ? 2 : -1);
        if (currency && minFrac < 0) {
            minFrac = 2;
        }
        String fracPart = "";
        if (minFrac > 0) {
            fracPart = "." + "0".repeat(minFrac);
        }
        String sign = value < 0 ? "-" : "";
        String body = sign + intPart + fracPart;
        if (percent) {
            body = body + "%";
        }
        if (currency) {
            String cur = opts.currency;
            if ("code".equals(opts.currencyDisplay)) {
                body = cur + " " + body;
            } else {
                String symbol = "USD".equals(cur) ? "$" : "EUR".equals(cur) ? "\u20AC" : "GBP".equals(cur) ? "\u00A3" : cur;
                body = symbol + body;
            }
        }
        if (locales != null && locales.toLowerCase().contains("ar")) {
            body = toArabicDigits(body);
        }
        return body;
    }

    /** 千分位分组（按 locale 选择分隔符）。 */
    private static String groupDigits(String digits, String locales) {
        String sep = ",";
        if (locales != null) {
            String lc = locales.toLowerCase();
            if (lc.contains("de")) {
                sep = ".";
            } else if (lc.contains("fr") || lc.contains("ru")) {
                sep = "\u00A0";
            } else if (lc.contains("ar")) {
                sep = "\u066C";
            }
        }
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

    /** 数字字符替换为阿拉伯-印度数字（ar-SA）。 */
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

    /** 返回数组本身，对应 valueOf 语义。 */
    public Uint8Array valueOf() {
        return this;
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
        return lastIndexOf(toUint8(value), fromIndex);
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
    public Uint8Array with(double index, double value) {
        return with(toIndexD(index, length), value);
    }

    public Uint8Array with(int index, double value) {
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
        copy[i] = toUint8(value);
        return new Uint8Array(copy);
    }

    /**
     * 返回 [begin, end) 区间的新视图（与宿主共享底层缓冲区），
     * 负数索引从末尾倒数、越界收敛，对应 subarray 语义。
     */
    public Uint8Array slice(double start, double end) {
        return slice(toIndexD(start, length), toIndexD(end, length));
    }

    public Uint8Array slice(double start) {
        return slice(start, length);
    }

    public Uint8Array subarray(double begin, double end) {
        return subarray(toIndexD(begin, length), toIndexD(end, length));
    }

    public Uint8Array subarray(double begin) {
        return subarray(begin, length);
    }

    public Uint8Array subarray(int begin, int end) {
        int len = length;
        int from = toIndex(begin, len);
        int to = toIndex(end, len);
        if (from > to) {
            from = to;
        }
        return new Uint8Array(buffer, byteOffset + from * BYTES_PER_ELEMENT, to - from);
    }

    public Uint8Array subarray(int begin) {
        return subarray(begin, length);
    }

    public Uint8Array subarray() {
        return subarray(0, length);
    }

    /** 返回 [start, end) 区间的新数组（拷贝，不共享缓冲区），对应 slice 语义。 */
    public Uint8Array slice(int start, int end) {
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
        return new Uint8Array(copy);
    }

    public Uint8Array slice(int start) {
        return slice(start, length);
    }

    public Uint8Array slice() {
        return slice(0, length);
    }

    /** 原地反转元素顺序，返回数组本身，对应 reverse 语义。 */
    public Uint8Array reverse() {
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
    public Uint8Array copyWithin(double target, double start, double end) {
        return copyWithin(toIndexD(target, length), toIndexD(start, length), toIndexD(end, length));
    }

    public Uint8Array copyWithin(int target, int start, int end) {
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

    public Uint8Array copyWithin(int target, int start) {
        return copyWithin(target, start, length);
    }

    /** 按给定比较器排序（原地修改并返回数组本身），对应 sort(compareFn) 语义。 */
    public Uint8Array sort(Uint8ArrayComparator cmp) {
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
    public Uint8Array sort() {
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
    public Uint8Array toSorted() {
        int[] copy = new int[length];
        for (int i = 0; i < length; i++) {
            copy[i] = get(i);
        }
        Uint8Array sorted = new Uint8Array(copy);
        sorted.sort();
        return sorted;
    }

    /** 返回反转后的新数组（原数组不变），对应 toReversed 语义。 */
    public Uint8Array toReversed() {
        int[] copy = new int[length];
        for (int i = 0; i < length; i++) {
            copy[i] = get(length - 1 - i);
        }
        return new Uint8Array(copy);
    }

    /** 构造 Uint8Array（元素逐一 ToInt16 转换），对应 of 语义。 */
    public static Uint8Array of(int... values) {
        return new Uint8Array(values);
    }

    /** 从既有 Uint8Array 拷贝构造，对应 from 语义。 */
    public static Uint8Array from(Uint8Array src) {
        int[] copy = new int[src.length];
        for (int i = 0; i < src.length; i++) {
            copy[i] = src.get(i);
        }
        return new Uint8Array(copy);
    }

    /** 从元素序列构造，对应 from(arrayLike) 语义。 */
    public static Uint8Array from(int[] values) {
        return new Uint8Array(values);
    }

    /** 从整型列表映射构造，对应 from(arrayLike, mapFn) 语义。 */
    public static Uint8Array from(java.util.List<Integer> values, Uint8ArrayMapper2 cb) {
        int[] copy = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            copy[i] = toUint8(cb.apply(values.get(i), i));
        }
        return new Uint8Array(copy);
    }

    /** 使用整型列表的元素填充本数组。 */
    public Integer set(java.util.List<Integer> src, int offset) {
        for (int i = 0; i < src.size(); i++) {
            set(offset + i, src.get(i));
        }
        return null;
    }

    public Integer set(java.util.List<Integer> src) {
        return set(src, 0);
    }

    /** 从整型列表构造，对应 from(arrayLike) 语义。 */
    public static Uint8Array from(java.util.List<Integer> values) {
        int[] copy = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            copy[i] = values.get(i);
        }
        return new Uint8Array(copy);
    }

    /** 从整型集合构造，对应 from(arrayLike) 语义。 */
    public static Uint8Array from(java.util.Set<Integer> values) {
        int[] copy = new int[values.size()];
        int i = 0;
        for (int v : values) {
            copy[i++] = v;
        }
        return new Uint8Array(copy);
    }

    /** 从浮点数组构造（ToInt16 转换），对应 from(arrayLike) 语义。 */
    public static Uint8Array from(double[] values) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toUint8(values[i]);
        }
        return new Uint8Array(copy);
    }

    /** 从浮点元素序列构造（ToInt16 转换），对应 of 语义的 NaN/Infinity 场景。 */
    public static Uint8Array of(double... values) {
        int[] copy = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            copy[i] = toUint8(values[i]);
        }
        return new Uint8Array(copy);
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

    /** 回调接口：sort 的比较器 (a, b)（double 返回值兼容 Infinity 语义）。 */
    @FunctionalInterface
    public interface Uint8ArrayComparator {
        double compare(int a, int b);
    }

    /** 回调接口：find/findIndex/some/every/filter 的谓词 (value, index, array)。 */
    @FunctionalInterface
    public interface Uint8ArrayFinder {
        boolean test(int value, int index, Uint8Array array);
    }

    /** 回调接口：谓词的无参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayFinder0 {
        boolean test();
    }

    /** 回调接口：谓词的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayFinder1 {
        boolean test(int value);
    }

    /** 回调接口：谓词的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayFinder2 {
        boolean test(int value, int index);
    }

    /** 回调接口：forEach 的处理器 (value, index, array)。 */
    @FunctionalInterface
    public interface Uint8ArrayConsumer {
        void accept(int value, int index, Uint8Array array);
    }

    /** 回调接口：处理器的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayConsumer1 {
        void accept(int value);
    }

    /** 回调接口：处理器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayConsumer2 {
        void accept(int value, int index);
    }

    /** 回调接口：map 的映射器 (value, index, array)。 */
    @FunctionalInterface
    public interface Uint8ArrayMapper {
        int apply(int value, int index, Uint8Array array);
    }

    /** 回调接口：映射器的 (value) 单参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayMapper1 {
        int apply(int value);
    }

    /** 回调接口：映射器的 (value, index) 双参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayMapper2 {
        int apply(int value, int index);
    }

    /** 回调接口：布尔累计归约器（every 式归约场景）。 */
    @FunctionalInterface
    public interface Int16BooleanReducer {
        boolean apply(boolean acc, int value, int index, Uint8Array array);
    }

    /** 布尔累计的 reduce（如 prev && curr > 0）。 */
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
        String apply(String acc, int value, int index, Uint8Array array);
    }

    /** 回调接口：long 累计归约器（大数 seed 场景）。 */
    @FunctionalInterface
    public interface Int16LongReducer {
        long apply(long acc, int value, int index, Uint8Array array);
    }

    /** long 累计的 reduce（大数 seed 不截断；独立方法名避免重载歧义）。 */
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

    public long reduceLong(Int16LongReducer cb) {
        long acc = get(0);
        for (int i = 1; i < length; i++) {
            acc = cb.apply(acc, get(i), i, this);
        }
        return acc;
    }

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

    /** 字符串累计的 reduce（如 join 式拼接）。 */
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

    /** 字符串累计的 reduceRight（如 join 式拼接）。 */
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
    public interface Uint8ArrayReducer {
        int apply(int acc, int value, int index, Uint8Array array);
    }

    /** 回调接口：归约器的 (acc, value) 双参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayReducer2 {
        int apply(int acc, int value);
    }

    /** 回调接口：归约器的 (acc, value, index) 三参数形式。 */
    @FunctionalInterface
    public interface Uint8ArrayReducer3 {
        int apply(int acc, int value, int index);
    }

    /** 下标换算（double 版）：NaN 归 0、±Infinity 收敛到端点。 */
    private static int toIndexD(double index, int len) {
        if (Double.isNaN(index)) {
            return 0;
        }
        if (index == Double.POSITIVE_INFINITY) {
            return len;
        }
        if (index == Double.NEGATIVE_INFINITY) {
            return 0;
        }
        return toIndex((int) index, len);
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
    static int toUint8(double value) {

                return (byte) (long) value & 0xFF;

    }
}
