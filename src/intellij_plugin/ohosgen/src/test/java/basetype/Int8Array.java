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

/**
 * 有符号 8 位整型数组视图（ECMAScript Int8Array 语义的子集），
 * 与 Int16Array 共享 ArrayBuffer，用于跨类型视图互操作验证。
 */
public class Int8Array {

    public static final int BYTES_PER_ELEMENT = 1;

    private final ArrayBuffer buffer;
    private final int byteOffset;
    private final int length;

    public Int8Array(ArrayBuffer buf) {
        this(buf, 0, buf.byteLength() / BYTES_PER_ELEMENT);
    }

    public Int8Array(ArrayBuffer buf, int byteOffset, int length) {
        this.buffer = buf;
        this.byteOffset = byteOffset;
        this.length = length;
    }

    public int length() {
        return length;
    }

    /** 读取指定索引元素（越界返回 0）。 */
    public int get(int index) {
        if (index < 0 || index >= length) {
            return 0;
        }
        return buffer.getInt8(byteOffset + index);
    }

    /** 写入指定索引元素（ToInt8 转换；越界忽略）。 */
    public void set(int index, double value) {
        if (index < 0 || index >= length) {
            return;
        }
        buffer.setInt8(byteOffset + index, toInt8(value));
    }

    /** ToInt8：NaN/Infinity 归 0，小数向零截断，越界 8 位环绕。 */
    static int toInt8(double value) {
        if (Double.isNaN(value)) {
            return 0;
        }
        if (value == Double.POSITIVE_INFINITY || value == Double.NEGATIVE_INFINITY) {
            return 0;
        }
        if (value == 0.0) {
            return 0;
        }
        return (byte) (long) value;
    }
}
