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
 *
 * @since 2026-08-26
 */
public class DataView {

    private final ArrayBuffer buffer;
    private final int byteOffset;
    private final int byteLength;

    public DataView(ArrayBuffer buf) {
        this(buf, 0, buf.byteLength());
        }

    public DataView(ArrayBuffer buf, int byteOffset, int byteLength) {
        this.buffer = buf;
        this.byteOffset = byteOffset;
        this.byteLength = byteLength;
        }

    /**
     * 视图相对底层缓冲的字节偏移。
     */
    public int byteOffset() {
        return byteOffset;
        }

    /**
     * 视图覆盖的字节长度。
     */
    public int byteLength() {
        return byteLength;
        }

    /**
     * 写入无符号 16 位小端值（偏移相对视图起点）。
     */
    public void setUint16(int offset, int value, boolean littleEndian) {
        buffer.setInt16(byteOffset + offset, value);
        }

    /**
     * 读取无符号 16 位小端值（偏移相对视图起点）。
     */
    public int getUint16(int offset, boolean littleEndian) {
        return buffer.getInt16(byteOffset + offset) & 0xFFFF;
        }

    /**
     * 写入无符号 8 位值（偏移相对视图起点）。
     */
    public void setUint8(int offset, int value) {
        buffer.setInt8(byteOffset + offset, value);
        }

    /**
     * 读取无符号 8 位值（偏移相对视图起点）。
     */
    public int getUint8(int offset) {
        return buffer.getInt8(byteOffset + offset) & 0xFF;
        }
}
