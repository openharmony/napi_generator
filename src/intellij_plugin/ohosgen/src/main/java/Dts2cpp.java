/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.progress.ProgressIndicator;
import com.intellij.openapi.progress.ProgressManager;
import com.intellij.openapi.progress.Task;
import com.intellij.openapi.ui.Messages;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;

/**
 * <h3>类名：该类用于xxx</h3>
 * @description ${description}
 * @author ${USER}
 * @date ${YEAR}-${MONTH}-${DAY}
 * @version 1.0
 */
public class Dts2cpp extends AnAction {

    private void showProgress(@NotNull AnActionEvent e) {
// 获取当前选中的文件
        VirtualFile file = e.getDataContext().getData(CommonDataKeys.VIRTUAL_FILE);
        if (file != null && file.getExtension() != null && file.getExtension().equals("ts")) {
            // 如果是 .java 文件，执行任务
            ProgressManager.getInstance().run(new Task.Backgroundable(e.getProject(), "Processing File", true) {
                @Override
                public void run(@NotNull ProgressIndicator indicator) {
                    doAnalysis(indicator);
                }

                private void doAnalysis(@NotNull ProgressIndicator indicator) {
                    indicator.setFraction(0.0);
                    // 新增文件读取逻辑
                    try {
                        String content = new String(file.contentsToByteArray(), file.getCharset());
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
            });
        }
    }

    @Override
    public void actionPerformed(AnActionEvent e) {
        // TODO: insert action logic here
//        Messages.showInfoMessage("This is the Dts2cpp!", "Dts2cpp");
        showProgress(e);
    }

    @Override
    public void update(AnActionEvent e) {
        // 获取当前选中的文件
        VirtualFile file = e.getDataContext().getData(CommonDataKeys.VIRTUAL_FILE);
        if (file != null && file.getExtension() != null) {
            if (file.getExtension().equals("ts")) {
                // 如果是 .java 文件，显示 Action
                e.getPresentation().setEnabledAndVisible(true);
            } else {
                // 否则隐藏 Action
                e.getPresentation().setEnabledAndVisible(false);
            }
        } else {
            // 否则隐藏 Action
            e.getPresentation().setEnabledAndVisible(false);
        }
    }
}
