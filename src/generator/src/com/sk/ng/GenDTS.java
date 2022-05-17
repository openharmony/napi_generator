/*
 * Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
package com.sk.ng;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.PlatformDataKeys;
import com.intellij.openapi.diagnostic.Logger;
import com.intellij.openapi.ui.Messages;
import com.intellij.openapi.vfs.VirtualFile;
import com.sk.dialog.GenerateDialog;

import java.util.regex.Pattern;

/**
 * @author: xudong
 * @see: tool conversion plug-in
 * @version: v1.0.0
 * @since 2022/02/21
 */
public class GenDTS extends AnAction {
    private static final Logger LOG = Logger.getInstance(GenDTS.class);

    @Override
    public void actionPerformed(AnActionEvent anActionEvent) {
        // 获取需要处理的.d.ts文件绝对路径
        VirtualFile file = anActionEvent.getData(PlatformDataKeys.VIRTUAL_FILE);
        if (file == null) {
            LOG.error("file is not exit");
            return;
        }

        // 正则匹配所选文件名是否符合规范
        if (!Pattern.matches("@ohos.[a-zA-Z0-9]+.d.ts", file.getName())) {
            Messages.showErrorDialog("选择@ohos.xxx.d.ts文件生成", "错误");
            return;
        }
        String destPath = file.getPath();
        String directoryPath = file.getParent().getPath();
        String fileName = file.getName();
        showDialog(destPath, directoryPath, fileName);
    }

    private void showDialog(String destPath, String directoryPath, String fileName) {
        GenerateDialog dialog = new GenerateDialog(destPath, directoryPath, fileName);
        dialog.initDialog();
        dialog.setLocationRelativeTo(dialog);
        dialog.pack();
        dialog.setVisible(true);
    }

    @Override
    public void update(AnActionEvent event) {
        // 根据所选文件名，判断是否显示生成菜单项
        VirtualFile file = event.getData(PlatformDataKeys.VIRTUAL_FILE);
        if (file == null) {
            event.getPresentation().setEnabledAndVisible(false);
        } else {
            String extension = file.getExtension();
            if (extension != null && "ts".equals(extension)) {
                event.getPresentation().setEnabledAndVisible(true);
            } else {
                event.getPresentation().setEnabledAndVisible(false);
            }
        }
    }
}
