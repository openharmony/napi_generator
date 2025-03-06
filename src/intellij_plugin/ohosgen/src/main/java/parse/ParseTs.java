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

import antlr.TypeScriptCustomListener;
import antlr.TypeScriptLexer;
import antlr.TypeScriptParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import grammar.*;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import utils.BaseEvent;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class ParseTs extends ParseBase {
    /**
     * 根据文件名解析
     *
     * @param filePath 文件路径
     */
    @Override
    public void parseFile(String filePath) {
        System.out.println("parseFile: " + filePath);
        BaseEvent pcEvent = new BaseEvent(this);
        pcEvent.setEventMsg("parsec complete");
        ParseInfo pi = new ParseInfo("start", "parse ts starting", 0, 100);
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
     * @param fileContent 文件内容
     */
    @Override
    public void parseContent(String fileContent) {
        System.out.println("ts parseContent");
        this.fileContent = fileContent;
        doNotify();
    }

    /**
     * 处理内容
     *
     * @param fileCStream 文件内容
     */
    @Override
    public void parseCStream(CharStream fileCStream) {
        System.out.println("ts parse char stream start");
        this.fcStream = fileCStream;

        try {
            // 初始化词法分析器
            TypeScriptLexer lexer = new TypeScriptLexer(this.fcStream);
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            // 初始化语法分析器并生成 AST
            TypeScriptParser parser = new TypeScriptParser(tokens);
            ParseTree tree = parser.program();
            TypeScriptCustomListener tsc = new TypeScriptCustomListener();
            ParseTreeWalker walker = new ParseTreeWalker();
            walker.walk(tsc, tree);

            System.out.println("ts parse char stream finish");
        } catch (RecognitionException e) {
            System.out.println("parse cstream e.printStackTrace(): " + e.getMessage());
        }

        doNotify();
    }

    private void doNotify() {
        BaseEvent pcEvent = new BaseEvent(this);
        pcEvent.setEventMsg("parsec complete");
        ParseInfo pi = new ParseInfo("start", "parse ts content starting", 0, 100);
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
