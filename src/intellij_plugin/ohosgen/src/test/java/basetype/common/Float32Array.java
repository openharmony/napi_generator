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
 * 单精度浮点数组（ECMAScript Float32Array 语义的子集），
 * 用于跨类型拷贝构造（如 new Uint16Array(float32 视图)）。
 */
public class Float32Array implements IntArrayView {

    private final float[] data;

    public Float32Array(double... values) {
        data = new float[values.length];
        for (int i = 0; i < values.length; i++) {
            data[i] = (float) values[i];
        }
    }

    public int length() {
        return data.length;
    }

    /** 读取元素（向零截断为 int，对应拷贝构造的 ToIntegerOrInfinity 前值）。 */
    @Override
    public Integer get(int index) {
        if (index < 0 || index >= data.length) {
            return 0;
        }
        return (int) data[index];
    }

    /** 读取原始浮点值。 */
    public float getFloat(int index) {
        return data[index];
    }
}
