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
 * 模拟设备端分配超大数组时的内存溢出错误（RuntimeException 变体，
 * 便于测试 catch (RuntimeException) 捕获并断言异常名）。
 */
public class OutOfMemoryError extends RuntimeException {

    public OutOfMemoryError() {
        super();
    }

    public OutOfMemoryError(String message) {
        super(message);
    }
}
