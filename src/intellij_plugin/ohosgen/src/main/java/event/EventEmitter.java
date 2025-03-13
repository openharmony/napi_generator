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

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description event emitter
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class EventEmitter {
    // 存储事件类型与对应的监听器列表（线程安全）
    private ConcurrentHashMap<String, CopyOnWriteArrayList<CustomEventListener>> eventMap = new ConcurrentHashMap<>();

    /**
     * 注册监听器（on）
     *
     * @param eventType 事件类型
     * @param listener 事件监听
     */
    public void on(String eventType, CustomEventListener listener) {
        eventMap.computeIfAbsent(eventType, k -> new CopyOnWriteArrayList<>()).add(listener);
    }

    /**
     * 单次监听
     *
     * @param eventType 事件类型
     * @param listener  事件监听
     */
    public void once(String eventType, CustomEventListener listener) {
        CustomEventListener wrapper = new CustomEventListener() {
            @Override
            public void handleEvent(CustomEvent event) {
                listener.handleEvent(event);
                off(eventType, this);  // 执行后自动移除监听
            }
        };
        on(eventType, wrapper);
    }

    /**
     * 触发事件（emit）
     *
     * @param eventType 事件类型
     * @param event 事件
     */
    public void emit(String eventType, CustomEvent event) {
        CopyOnWriteArrayList<CustomEventListener> listeners = eventMap.get(eventType);
        if (listeners != null) {
            listeners.forEach(listener -> listener.handleEvent(event));
        }
    }

    /**
     * 移除监听器（off）
     *
     * @param eventType 事件类型
     * @param listener 事件监听
     */
    public void off(String eventType, CustomEventListener listener) {
        CopyOnWriteArrayList<CustomEventListener> listeners = eventMap.get(eventType);
        if (listeners != null) {
            listeners.remove(listener);
        }
    }
}
