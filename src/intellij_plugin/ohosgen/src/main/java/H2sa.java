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

import com.intellij.openapi.actionSystem.ActionUpdateThread;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.CommonDataKeys;
import com.intellij.openapi.progress.ProgressIndicator;
import com.intellij.openapi.progress.ProgressManager;
import com.intellij.openapi.progress.Task;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class H2sa extends AnAction {
    /**
     * 显示进度
     *
     * @param e 插件事件
     */
    private void showProgress(AnActionEvent e) {
        Project project = e.getProject();
        // 获取当前选中的文件
        VirtualFile file = e.getDataContext().getData(CommonDataKeys.VIRTUAL_FILE);
        if (file != null && file.getExtension() != null && file.getExtension().equals("h")) {
            // 如果是 .java 文件，执行任务
            doProgress(project);
        }
    }

    /**
     * 睡眠
     */
    private void doSleep() {
        try {
            Thread.sleep(500); // 模拟耗时操作
        } catch (InterruptedException ex) {
            System.out.println("thread exception ex.printStackTrace();");
        }
    }

    /**
     * 执行
     *
     * @param project 项目
     */
    private void doProgress(Project project) {
        ProgressManager.getInstance().run(new Task.Backgroundable(project, "Processing File", true) {
            @Override
            public void run(@NotNull ProgressIndicator indicator) {
                indicator.setFraction(0.0);
                for (int i = 0; i < 10; i++) {
                    indicator.setFraction((i + 1) / 10.0);
                    indicator.setText("Processing step " + (i + 1));
                    doSleep();
                }
                System.out.println("File processing complete! + Main Action");
            }
        });
    }

    /**
     * 执行插件动作
     *
     * @param e 插件事件更新
     */
    @Override
    public void actionPerformed(AnActionEvent e) {
        // NEEDO: insert action logic here
        showProgress(e);
    }

    /**
     * 更新插件线程类型
     *
     * @return 线程类型
     */
    @Override
    @NotNull
    public ActionUpdateThread getActionUpdateThread() {
        // 根据需求选择以下两种之一：
        // 后台线程操作（如耗时计算）
        return ActionUpdateThread.BGT;
    }

    /**
     * 更新
     *
     * @param e 插件事件
     */
    @Override
    public void update(AnActionEvent e) {
        // 获取当前选中的文件
        VirtualFile file = e.getDataContext().getData(CommonDataKeys.VIRTUAL_FILE);
        if (file != null && file.getExtension() != null) {
            if (file.getExtension().equals("h")) {
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
