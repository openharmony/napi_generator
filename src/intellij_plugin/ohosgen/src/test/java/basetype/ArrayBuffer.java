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
 * 二进制数据缓冲区，模拟 ECMAScript ArrayBuffer 的字节存储语义。
 */
public class ArrayBuffer {

    /** 判断对象是否为 TypedArray 视图，对应 ArrayBuffer.isView 语义。 */
    public static boolean isView(Object obj) {
        return obj instanceof Int16Array || obj instanceof Int8Array;
    }

    private final byte[] bytes;

    public ArrayBuffer(int byteLength) {
        bytes = new byte[byteLength];
    }

    public int byteLength() {
        return bytes.length;
    }

    /** 读取指定字节偏移处的 int16 小端值（越界按 0 处理）。 */
    int getInt16(int byteOffset) {
        if (byteOffset < 0 || byteOffset + 2 > bytes.length) {
            return 0;
        }
        int lo = bytes[byteOffset] & 0xFF;
        int hi = bytes[byteOffset + 1];
        return (short) ((hi << 8) | lo);
    }

    /** 读取指定字节偏移处的 int32 小端值（越界按 0 处理）。 */
    int getInt32(int byteOffset) {
        if (byteOffset < 0 || byteOffset + 4 > bytes.length) {
            return 0;
        }
        int b0 = bytes[byteOffset] & 0xFF;
        int b1 = bytes[byteOffset + 1] & 0xFF;
        int b2 = bytes[byteOffset + 2] & 0xFF;
        int b3 = bytes[byteOffset + 3];
        return (b3 << 24) | (b2 << 16) | (b1 << 8) | b0;
    }

    /** 写入指定字节偏移处的 int32 小端值（越界忽略）。 */
    void setInt32(int byteOffset, int value) {
        if (byteOffset < 0 || byteOffset + 4 > bytes.length) {
            return;
        }
        bytes[byteOffset] = (byte) (value & 0xFF);
        bytes[byteOffset + 1] = (byte) ((value >> 8) & 0xFF);
        bytes[byteOffset + 2] = (byte) ((value >> 16) & 0xFF);
        bytes[byteOffset + 3] = (byte) ((value >> 24) & 0xFF);
    }

    /** 读取指定字节偏移处的 int8 值（越界按 0 处理）。 */
    int getInt8(int byteOffset) {
        if (byteOffset < 0 || byteOffset >= bytes.length) {
            return 0;
        }
        return bytes[byteOffset];
    }

    /** 写入指定字节偏移处的 int8 值（越界忽略）。 */
    void setInt8(int byteOffset, int value) {
        if (byteOffset < 0 || byteOffset >= bytes.length) {
            return;
        }
        bytes[byteOffset] = (byte) value;
    }

    /** 写入指定字节偏移处的 int16 小端值（越界忽略）。 */
    void setInt16(int byteOffset, int value) {
        if (byteOffset < 0 || byteOffset + 2 > bytes.length) {
            return;
        }
        bytes[byteOffset] = (byte) (value & 0xFF);
        bytes[byteOffset + 1] = (byte) ((value >> 8) & 0xFF);
    }
}
