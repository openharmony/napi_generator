/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package event;

import java.util.EventObject;

/**
 * <h3>类名：该类用于xxx</h3>
 * description custom event
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class CustomEvent extends EventObject {
    private String message;

    /**
     * Constructs a prototypical Event.
     *
     * @param source
     *         the object on which the Event initially occurred
     * @param message 消息
     * @throws IllegalArgumentException
     *         if source is null
     */
    public CustomEvent(Object source, String message) {
        super(source);
        this.message = message;
    }

    /**
     * 获取消息
     *
     * @return message 消息
     */
    public String getMessage() {
        return message;
    }

    /**
     * 设置消息
     *
     * @param message 消息
     */
    public void setMessage(String message) {
        this.message = message;
    }
}
