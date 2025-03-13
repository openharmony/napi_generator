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

import antlr.ParseBaseListener;
import antlr.cpp.CPP14CustomListener;
import antlr.cpp.CPP14ErrorListener;
import antlr.cpp.CPP14Lexer;
import antlr.cpp.CPP14Parser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import grammar.*;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import utils.Constants;
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
        ParseTaskInfo pi = new ParseTaskInfo("start", "parse c starting", 0, 100);
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
        ParseTaskInfo pi = new ParseTaskInfo("start", "parse c content starting", 0, 100);
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
     * @param fileCStream
     *         文件内容
     * @return
     */
    @Override
    public ParseObj parseCStream(CharStream fileCStream) {
        System.out.println("c/cpp parse char stream");
        this.fcStream = fileCStream;
        sendEvent(Constants.START_STATUS, Constants.C_CPP_START_MSG, 50);
        try {
            // 初始化词法分析器
            CPP14Lexer lexer = new CPP14Lexer(this.fcStream);
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            // 初始化语法分析器并生成 AST
            CPP14Parser parser = new CPP14Parser(tokens);
            parser.removeErrorListeners();
            parser.addErrorListener(new CPP14ErrorListener());
            ParseTree tree = parser.translationUnit();
            CPP14CustomListener tsc = new CPP14CustomListener();
            ParseTreeWalker walker = new ParseTreeWalker();
            walker.walk(tsc, tree);

            System.out.println();
        } catch (RecognitionException e) {
            System.out.println("parse cstream e.printStackTrace(): " + e.getMessage());
        }

        sendEvent(Constants.COMPLETE_STATUS, Constants.C_CPP_COMPLETE_MSG, 50);
        return null;
    }

    @Override
    protected ParseObj genParseResult(ParseBaseListener pbl) {
        return null;
    }

    @Override
    protected EnumObj[] parseEnum(ParseTaskInfo pi2) {
        return super.parseEnum(pi2);
    }

    @Override
    protected UnionObj[] parseUnion(ParseTaskInfo pi2) {
        return super.parseUnion(pi2);
    }

    @Override
    protected StructObj[] parseStruct(ParseTaskInfo pi2) {
        return super.parseStruct(pi2);
    }

    @Override
    protected ClassObj[] parseClass(ParseTaskInfo pi2) {
        return super.parseClass(pi2);
    }

    @Override
    protected FuncObj[] parseFunc(ParseTaskInfo pi2) {
        return super.parseFunc(pi2);
    }

    @Override
    protected TypeObj[] parseType(ParseTaskInfo pi2) {
        return super.parseType(pi2);
    }
}
