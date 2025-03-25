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
import grammar.ParseObj;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import com.intellij.openapi.progress.ProgressIndicator;
import com.intellij.openapi.progress.Task;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.NlsContexts;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import utils.BaseEvent;
import utils.BaseListener;

import java.io.IOException;
import java.io.InputStream;

/**
 * <h3>类名：该类用于xxx</h3>
 * description task of parse
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ParseTask extends Task.Backgroundable implements BaseListener {
    private VirtualFile parseFile;
    private final ParseBase parser;

    /**
     * 构造函数
     *
     * @param project 事件
     * @param type 类型
     * @param flag 是否可以取消
     */
    public ParseTask(@Nullable Project project, @NlsContexts.ProgressTitle @NotNull String type, boolean flag) {
        super(project, type, flag);
        parser = ParseFactory.getParser(type);
        parser.addListener(this);
    }

    /**
     * 设置文件
     *
     * @param file 文件
     */
    public void setFile(VirtualFile file) {
        parseFile = file;
    }

    /**
     * 运行
     *
     * @param indicator 提示器
     */
    @Override
    public void run(@NotNull ProgressIndicator indicator) {
        doAnalysis(indicator);
    }

    /**
     * 解析
     *
     * @param indicator 提示器
     */
    private void doAnalysis(@NotNull ProgressIndicator indicator) {
        indicator.setFraction(0.0);
        // 新增文件读取逻辑
        try {
            String content = new String(parseFile.contentsToByteArray(), parseFile.getCharset());
            System.out.println("doAnalysis");
            InputStream is = parseFile.getInputStream();
            CharStream ics = CharStreams.fromStream(is);

            ParseObj po = parser.parseCStream(ics);
            System.out.println("parseContent finish");
            String[] lines = content.split("\n");
            for (int i = 0; i < lines.length; i++) {
                // 模拟处理每一行
                indicator.setFraction((i + 1) / (double) lines.length);
                indicator.setText("Dts2cpp steps : " + (i + 1) + "/" + lines.length);

                // 这里添加实际业务逻辑
                processLine(lines[i]);

                Thread.sleep(50); // 调整延时更符合实际场景

            }
        } catch (InterruptedException | IOException ex) {
            System.out.println("Error: " + ex.getMessage() + "Failure");
        }
    }

    /**
     * 处理内容
     *
     * @param line 文件内容
     */
    private void processLine(String line) {
        // 实际业务逻辑（如语法分析/代码检查等）
//        System.out.println("processLine");
    }

    /**
     * 监听消息
     *
     * @param event 事件
     */
    @Override
    public void onEvent(BaseEvent event) {
        String jsonStr = event.getEventMsg();
        System.out.println("on event: " + jsonStr);
        ObjectMapper mapper = new ObjectMapper();
        try {
            ParseTaskInfo pi2 = mapper.readValue(jsonStr, ParseTaskInfo.class);
            parser.receive(pi2);
        } catch (JsonProcessingException e) {
            System.out.println("Test fromJson catch: " + e.getMessage());
        }
    }
}
