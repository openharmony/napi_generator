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
 * 迭代结果，对应 ECMAScript IteratorResult（value + done）语义。
 *
 * @since 2026-08-26
 */
public class IteratorResult {

    /**
     * value 字段。
     *
     * @param value 参数说明。
     * @param done 参数说明。
     * @return 返回值说明。
     */
    public final Integer value;

    /**
     * done 字段。
     *
     * @param value 参数说明。
     * @param done 参数说明。
     * @return 返回值说明。
     */
    public final boolean done;

    public IteratorResult(Integer value, boolean done) {
        this.value = value;
        this.done = done;
        }
}
