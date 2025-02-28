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
import com.intellij.openapi.progress.ProgressManager;
import com. intellij. openapi. project. Project;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;
import utils.MockBgTask;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * since 2025-02-28
 * @version 1.0
 */
public class Dts2cpp extends AnAction {

    private void showProgress(@NotNull AnActionEvent e) {
        Project project = e.getProject();
        // 获取当前选中的文件
        VirtualFile file = e.getDataContext().getData(CommonDataKeys.VIRTUAL_FILE);
        if (file != null && file.getExtension() != null && file.getExtension().equals("ts")) {
            // 如果是 .java 文件，执行任务
            doProgress(project, file);
        }
    }

    private void doProgress(Project project, VirtualFile file) {
        ProgressManager.getInstance().run(new MockBgTask(project, "Processing File", true));
    }

    @Override
    public void actionPerformed(AnActionEvent e) {
        // NEEDO: insert action logic here
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
