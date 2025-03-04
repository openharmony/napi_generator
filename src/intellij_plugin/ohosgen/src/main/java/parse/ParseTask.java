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

    public ParseTask(@Nullable Project project, @NlsContexts.ProgressTitle @NotNull String type, boolean flag) {
        super(project, type, flag);
        parser = ParseFactory.getParser(type);
        parser.addListener(this);
    }

    public void setFile(VirtualFile file) {
        parseFile = file;
    }

    @Override
    public void run(@NotNull ProgressIndicator indicator) {
        doAnalysis(indicator);
    }

    private void doAnalysis(@NotNull ProgressIndicator indicator) {
        indicator.setFraction(0.0);
        // 新增文件读取逻辑
        try {
            String content = new String(parseFile.contentsToByteArray(), parseFile.getCharset());
            System.out.println("doAnalysis");

            parser.parseContent(content);
            System.out.println("parseContent finish");
            String[] lines = content.split("\n");
            for (int i = 0; i < lines.length; i++) {
                // 模拟处理每一行
                indicator.setFraction((i + 1) / (double) lines.length);
                indicator.setText("Dts2cpp steps : " + (i + 1) + "/" + lines.length);
                System.out.println("Dts2cpp steps : " + (i + 1) + "/" + lines.length);
                // 这里添加实际业务逻辑
                processLine(lines[i]);

                Thread.sleep(50); // 调整延时更符合实际场景

            }
        } catch (InterruptedException | IOException ex) {
            System.out.println("Error: " + ex.getMessage() + "Failure");
        }
    }

    // 示例行处理方法
    private void processLine(String line) {
        // 实际业务逻辑（如语法分析/代码检查等）
        System.out.println("processLine");
    }

    @Override
    public void onEvent(BaseEvent event) {
        String jsonStr = event.getEventMsg();
        System.out.println("on event: " + jsonStr);
        ObjectMapper mapper = new ObjectMapper();
        try {
            ParseInfo pi2 = mapper.readValue(jsonStr, ParseInfo.class);
        } catch (JsonProcessingException e) {
            System.out.println("Test fromJson catch: " + e.getMessage());
        }
    }
}
