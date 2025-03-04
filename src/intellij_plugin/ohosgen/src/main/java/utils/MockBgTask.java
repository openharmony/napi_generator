/*
 * Copyright (c) 2025-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package utils;

import com.intellij.openapi.progress.ProgressIndicator;
import com.intellij.openapi.progress.Task;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.NlsContexts;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;

/**
 * <h3>plugtest</h3>
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class MockBgTask extends Task.Backgroundable {
    private VirtualFile parseFile;

    /**
     * 构造函数
     *
     * @param project 项目
     * @param title 标题
     * @param flag 是否可以取消
     */
    public MockBgTask(@Nullable Project project, @NlsContexts.ProgressTitle @NotNull String title, boolean flag) {
        super(project, title, flag);
    }

    /**
     * 设置文件
     *
     * @param file 文件内容
     */
    public void setFile(VirtualFile file) {
        parseFile = file;
    }

    /**
     * 运行
     *
     * @param indicator 提示
     */
    @Override
    public void run(@NotNull ProgressIndicator indicator) {
        doAnalysis(indicator);
    }

    /**
     * 分析
     *
     * @param indicator 提示
     */
    private void doAnalysis(@NotNull ProgressIndicator indicator) {
        indicator.setFraction(0.0);
        // 新增文件读取逻辑
        try {
            String content = new String(parseFile.contentsToByteArray(), parseFile.getCharset());
            System.out.println(content);

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

    // 示例行处理方法
    private void processLine(String line) {
        // 实际业务逻辑（如语法分析/代码检查等）
    }
}
