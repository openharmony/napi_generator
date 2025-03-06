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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import grammar.*;
import org.antlr.v4.runtime.CharStream;
import utils.BaseEvent;

import java.lang.reflect.Type;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class ParseC extends ParseBase {
    /**
     * 根据名字解析文件
     *
     * @param filePath 文件路径
     */
    @Override
    public void parseFile(String filePath) {
        System.out.println("parseFile: " + filePath);
        BaseEvent pcEvent = new BaseEvent(this);
        pcEvent.setEventMsg("parsec complete");
        ParseInfo pi = new ParseInfo("start", "parse c starting", 0, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            pcEvent.setEventMsg(jsonStr);
        } catch (JsonProcessingException e) {
            System.out.println("json process error: " + e.getMessage());
        }
        listeners.forEach(listener -> {
            listener.onEvent(pcEvent);
        });
    }

    /**
     * 根据内容解析文件
     *
     * @param fileContent 文件内容
     */
    @Override
    public void parseContent(String fileContent) {
        System.out.println("c parseContent");
        BaseEvent pcEvent = new BaseEvent(this);
        pcEvent.setEventMsg("parsec complete");
        ParseInfo pi = new ParseInfo("start", "parse c content starting", 0, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            pcEvent.setEventMsg(jsonStr);
        } catch (JsonProcessingException e) {
            System.out.println("json process error: " + e.getMessage());
        }
        listeners.forEach(listener -> {
            listener.onEvent(pcEvent);
        });
    }

    /**
     * 处理内容
     *
     * @param fileCStream 文件内容
     */
    @Override
    public void parseCStream(CharStream fileCStream) {
        System.out.println("ts parse char stream");
        this.fcStream = fileCStream;
    }

    @Override
    protected EnumObj[] parseEnum() {
        return super.parseEnum();
    }

    @Override
    protected UnionObj[] parseUnion() {
        return super.parseUnion();
    }

    @Override
    protected StructObj[] parseStruct() {
        return super.parseStruct();
    }

    @Override
    protected ClassObj[] parseClass() {
        return super.parseClass();
    }

    @Override
    protected FuncObj[] parseFunc() {
        return super.parseFunc();
    }

    @Override
    protected TypeObj[] parseType() {
        return super.parseType();
    }
}
