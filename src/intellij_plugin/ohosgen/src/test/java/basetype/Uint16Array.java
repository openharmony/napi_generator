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
 * 无符号 16 位整型数组视图（ECMAScript Uint16Array 语义的子集），
 * 与 Int16Array 共享 ArrayBuffer，用于跨类型视图互操作验证。
 */
public class Uint16Array {

    public static final int BYTES_PER_ELEMENT = 2;

    private final ArrayBuffer buffer;
    private final int byteOffset;
    private final int length;

    public Uint16Array(ArrayBuffer buf) {
        this(buf, 0, buf.byteLength() / BYTES_PER_ELEMENT);
    }

    public Uint16Array(ArrayBuffer buf, int byteOffset, int length) {
        this.buffer = buf;
        this.byteOffset = byteOffset;
        this.length = length;
    }

    public int length() {
        return length;
    }

    /** 读取指定索引元素（0..65535 无符号；越界返回 0）。 */
    public int get(int index) {
        if (index < 0 || index >= length) {
            return 0;
        }
        return buffer.getInt16(byteOffset + index * BYTES_PER_ELEMENT) & 0xFFFF;
    }

    /** 写入指定索引元素（ToUint16 转换；越界忽略）。 */
    public void set(int index, double value) {
        if (index < 0 || index >= length) {
            return;
        }
        buffer.setInt16(byteOffset + index * BYTES_PER_ELEMENT, toUint16(value));
    }

    /** ToUint16：NaN/Infinity 归 0，小数向零截断，越界 16 位无符号环绕。 */
    static int toUint16(double value) {
        if (Double.isNaN(value)) {
            return 0;
        }
        if (value == Double.POSITIVE_INFINITY || value == Double.NEGATIVE_INFINITY) {
            return 0;
        }
        if (value == 0.0) {
            return 0;
        }
        return (short) (long) value & 0xFFFF;
    }
}
