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
 * 范围错误，对应 ECMAScript RangeError 语义（name 恒为 "RangeError"）。
 *
 * @since 2026-08-26
 */
public class RangeError extends RuntimeException {

    public RangeError() {
        super("");
        }

    public RangeError(String message) {
        super(message);
        }

    /**
     * ECMAScript RangeError.name。
     *
     * @return 返回值说明。
     */
    public String name() {
        return "RangeError";
        }
}
