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
import utils.BaseListener;
import utils.Constants;

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

    /**
     * 文件内容
     */
    protected String fileContent;

    /**
     * 文件char stream
     */
    protected CharStream fcStream;

    /**
     * 状态
     */
    protected String status;

    /**
     * 进度消息
     */
    protected String procMsg;

    /**
     * 进度数据
     */
    protected int progress;

    /**
     * 总进度
     */
    protected int totalProgress = Constants.HUNDRED_PERCENT;

    /**
     * 存储所有监听回调
     */
    protected final List<BaseListener> listeners = new CopyOnWriteArrayList<>();

    /**
     * 构造函数
     */
    public ParseBase() {}

    /**
     * 增加listener
     *
     * @param listener 监听器
     */
    public void addListener(BaseListener listener) {
        listeners.add(listener);
    }

    /**
     * send event
     *
     * @param status    状态
     * @param msg   消息
     * @param process   进度
     */
    protected void sendEvent(String status, String msg, int process) {
        this.procMsg = msg;
        this.status = status;
        this.progress = process;
        doNotify(status, msg, process);
    }

    /**
     * notify parse info
     *
     * @param status 状态
     * @param msg   消息
     * @param process   进度
     */
    protected void doNotify(String status, String msg, int process) {
        BaseEvent pcEvent = new BaseEvent(this);
        pcEvent.setEventMsg("parsec complete");
        ParseTaskInfo pi = new ParseTaskInfo(status, msg, process, this.totalProgress);
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
     * 根据文件名解析文件
     *
     * @param filePath 文件路径
     */
    public abstract void parseFile(String filePath);

    /**
     * 根据文件内容解析文件
     *
     * @param fileContent 文件内容
     */
    public abstract void parseContent(String fileContent);

    /**
     * 根据文件char stream解析文件
     *
     * @param fileCStream 文件内容
     */
    public abstract void parseCStream(CharStream fileCStream);

    /**
     * 解析enum
     *
     * @param pi2 解析结果
     * @return enum
     */
    protected EnumObj[] parseEnum(ParseTaskInfo pi2) {
        System.out.println("parse enum: " + pi2.toString());
        return new EnumObj[0];
    };

    /**
     * 解析union
     *
     * @return union
     */
    protected UnionObj[] parseUnion(ParseTaskInfo pi2) {
        System.out.println("parse union: " + pi2.toString());
        return new UnionObj[0];
    }

    /**
     * 解析struct
     *
     * @return struct
     */
    protected StructObj[] parseStruct(ParseTaskInfo pi2) {
        System.out.println("parse struct: " + pi2.toString());
        return new StructObj[0];
    }

    /**
     * 解析class
     *
     * @return class
     */
    protected ClassObj[] parseClass(ParseTaskInfo pi2) {
        System.out.println("parse class: " + pi2.toString());
        return new ClassObj[0];
    }

    /**
     * 解析func
     *
     * @return func
     */
    protected FuncObj[] parseFunc(ParseTaskInfo pi2) {
        System.out.println("parse function: " + pi2.toString());
        return new FuncObj[0];
    }

    /**
     * 解析type
     *
     * @param pi2  解析进程
     * @return type
     */
    protected TypeObj[] parseType(ParseTaskInfo pi2) {
        System.out.println("parse type: " + pi2.toString());
        return new TypeObj[0];
    }

    /**
     * 接收解析结果
     *
     * @param pi2 解析结构
     */
    public void receive(ParseTaskInfo pi2) {
        System.out.println("receive parse result: " + pi2.getJsonData());
    }
}
