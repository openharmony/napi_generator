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
 * 二进制视图读写器（ECMAScript DataView 语义的子集），
 * 支持小端 uint16 读写与字节序互操作验证。
 */
public class DataView {

    private final ArrayBuffer buffer;

    public DataView(ArrayBuffer buf) {
        this.buffer = buf;
    }

    /** 写入无符号 16 位小端值。 */
    public void setUint16(int byteOffset, int value, boolean littleEndian) {
        buffer.setInt16(byteOffset, value);
    }

    /** 读取无符号 16 位小端值。 */
    public int getUint16(int byteOffset, boolean littleEndian) {
        return buffer.getInt16(byteOffset) & 0xFFFF;
    }
}
