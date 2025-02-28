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

public class H2hdf extends AnAction {

    private void showProgress(AnActionEvent e) {
// 获取当前选中的文件
        VirtualFile file = e.getDataContext().getData(CommonDataKeys.VIRTUAL_FILE);
        if (file != null && file.getExtension() != null && file.getExtension().equals("h")) {
            // 如果是 .java 文件，执行任务
            ProgressManager.getInstance().run(new Task.Backgroundable(e.getProject(), "Processing File", true) {
                @Override
                public void run(@NotNull ProgressIndicator indicator) {
                    indicator.setFraction(0.0);
                    for (int i = 0; i < 10; i++) {
                        indicator.setFraction((i + 1) / 10.0);
                        indicator.setText("Processing step " + (i + 1));
                        try {
                            Thread.sleep(500); // 模拟耗时操作
                        } catch (InterruptedException ex) {
                            ex.printStackTrace();
                        }
                    }
                    Messages.showInfoMessage("File processing complete!", "Main Action");
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
