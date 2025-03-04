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

package parse;

import utils.BaseListener;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description base of parse
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public abstract class ParseBase {
    protected final List<BaseListener> listeners = new CopyOnWriteArrayList<>();

    public ParseBase() {

    }

    public void addListener(BaseListener listener) {
        listeners.add(listener);
    }

    public abstract void parseFile(String filePath);
    public abstract void parseContent(String fileContent);// 抽象方法声明
}
