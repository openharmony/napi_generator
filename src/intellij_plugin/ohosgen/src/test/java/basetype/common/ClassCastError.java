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
 * 类型断言失败异常，对应 ArkTS as 类型转换失败抛出的 ClassCastError。
 *
 * @since 2026-08-26
 */
public class ClassCastError extends RuntimeException {

    public ClassCastError() {
        super();
        }

    public ClassCastError(String message) {
        super(message);
        }

    /**
     * 语句级抛错辅助（编译器不会将其视为不可达，便于后续 fail() 共存）。
     *
     * @return 返回值说明。
     */
    public static ClassCastError raise() {
        throw new ClassCastError();
        }
}
