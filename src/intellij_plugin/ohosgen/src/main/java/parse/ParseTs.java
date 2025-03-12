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

import antlr.typescript.TypeScriptCustomListener;
import antlr.typescript.TypeScriptErrorListener;
import antlr.typescript.TypeScriptLexer;
import antlr.typescript.TypeScriptParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import event.CustomEvent;
import event.CustomEventListener;
import grammar.*;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import utils.BaseEvent;
import utils.Constants;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class ParseTs extends ParseBase implements CustomEventListener {
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
        ParseTaskInfo pi = new ParseTaskInfo("start", "parse ts starting", 0, 100);
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
        sendEvent(Constants.COMPLETE_STATUS, Constants.TS_COMPLETE_MSG, 50);
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

        sendEvent(Constants.START_STATUS, Constants.TS_START_MSG, 0);
        try {
            // 初始化词法分析器
            TypeScriptLexer lexer = new TypeScriptLexer(this.fcStream);
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            // 初始化语法分析器并生成 AST
            TypeScriptParser parser = new TypeScriptParser(tokens);
            parser.removeErrorListeners();
            parser.addErrorListener(new TypeScriptErrorListener());
            ParseTree tree = parser.program();
            TypeScriptCustomListener tsc = new TypeScriptCustomListener();
            ParseTreeWalker walker = new ParseTreeWalker();
            walker.walk(tsc, tree);

            Gson gson = new GsonBuilder().setPrettyPrinting().create();

            String json = gson.toJson(tsc);
            System.out.println("ts parse result: " +json);

            System.out.println("ts parse char stream finish");
        } catch (RecognitionException e) {
            System.out.println("parse cstream e.printStackTrace(): " + e.getMessage());
        }

        sendEvent(Constants.COMPLETE_STATUS, Constants.TS_COMPLETE_MSG, 50);
    }

    /**
     * 接收解析结果
     *
     * @param pi2 解析结构
     */
    @Override
    public void receive(ParseTaskInfo pi2) {
        super.receive(pi2);
        if (pi2.getLanType() != Constants.PARSE_TS_LANGUAGE) {
            System.err.println("Language type is not ts language");
            return;
        }
        switch (pi2.getParseType()) {
            case Constants.PARSE_TS_ABSTRACT:
                break;
            case Constants.PARSE_TS_CLASS:
                parseClass(pi2);
                break;
            case Constants.PARSE_TS_ENUM:
                parseEnum(pi2);
                break;
            case Constants.PARSE_TS_EXPORT:
                break;
            case Constants.PARSE_TS_FUNCTION:
                parseFunc(pi2);
                break;
            case Constants.PARSE_TS_GENERIC:
                break;
            case Constants.PARSE_TS_GENERIC_CLASS:
                break;
            case Constants.PARSE_TS_GENERIC_INTERFACE:
                break;
            case Constants.PARSE_TS_IMPORT:
                break;
            case Constants.PARSE_TS_INTERFACE:
                break;
            case Constants.PARSE_TS_JS_CLASS:
                break;
            case Constants.PARSE_TS_LOOP:
                break;
            case Constants.PARSE_TS_MODULE:
                break;
            case Constants.PARSE_TS_NON_NULL:
                break;
            case Constants.PARSE_TS_OBJECT_INITIALIZER:
                break;
            case Constants.PARSE_TS_STATEMENT:
                break;
            case Constants.PARSE_TS_TEMPLATE_STRING:
                break;
            case Constants.PARSE_TS_TYPE:
                parseType(pi2);
                break;
            case Constants.PARSE_TS_VARIABLE:
                break;
            case Constants.PARSE_TS_EXIT_TRANSLATION:
                break;
            default:
                break;
        }
    }

    /**
     * 解析枚举
     *
     * @param pi2 解析结果
     * @return 解析结果
     */
    @Override
    protected EnumObj[] parseEnum(ParseTaskInfo pi2) {
        return super.parseEnum(pi2);
    }

    /**
     * 解析联合
     *
     * @param pi2 解析结果
     * @return 解析结果
     */
    @Override
    protected UnionObj[] parseUnion(ParseTaskInfo pi2) {
        return super.parseUnion(pi2);
    }

    /**
     * 解析结构体
     *
     * @param pi2 解析结果
     * @return 解析结果
     */
    @Override
    protected StructObj[] parseStruct(ParseTaskInfo pi2) {
        return super.parseStruct(pi2);
    }

    /**
     * 解析类
     *
     * @param pi2 解析结果
     * @return 解析结果
     */
    @Override
    protected ClassObj[] parseClass(ParseTaskInfo pi2) {
        return super.parseClass(pi2);
    }

    /**
     * 解析方法
     *
     * @param pi2 解析结果
     * @return 解析结果
     */
    @Override
    protected FuncObj[] parseFunc(ParseTaskInfo pi2) {
        return super.parseFunc(pi2);
    }

    /**
     * 解析type
     *
     * @param pi2 解析结果
     * @return 解析结果
     */
    @Override
    protected TypeObj[] parseType(ParseTaskInfo pi2) {
        return super.parseType(pi2);
    }

    /**
     * 处理事件
     *
     * @param event 事件
     */
    @Override
    public void handleEvent(CustomEvent event) {
        System.out.println("parse ts handle: " + event.toString());
    }
}
