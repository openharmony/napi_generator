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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.regex.Pattern;

/**
 * @author: xudong
 * @createDate: 2022/02/21
 * @description: 工具转换插件
 */
public class GenDTS extends AnAction {
    private static final Logger LOG = Logger.getInstance(GenDTS.class);

    @Override
    public void actionPerformed(AnActionEvent anActionEvent) {

        // 获取需要处理的.d.ts文件绝对路径
        VirtualFile file = anActionEvent.getData(PlatformDataKeys.VIRTUAL_FILE);
        if (file == null) {
            return;
        }

        // 正则匹配所选文件名是否符合规范
        if (!Pattern.matches("@ohos.[a-zA-Z0-9]+.d.ts", file.getName())) {
            Messages.showErrorDialog("选择@ohos.xxx.d.ts文件生成", "错误");
            return;
        }
        String dest_path = file.getPath();

        // 执行命令行
        runFun(dest_path);

        Messages.showMessageDialog(anActionEvent.getProject(), dest_path, "generating", Messages.getInformationIcon());
    }

    private void runFun(String dest_path) {
        String command = "";
        String sysName = System.getProperties().getProperty("os.name").toUpperCase();
        if (sysName.indexOf("WIN") >= 0) {
            URL res = getClass().getClassLoader().getResource("cmds/win/napi_generator-win.exe");
            String exePath = res.getPath().substring(1);
            command = exePath.replace("%20", " ") + " " + dest_path.replace("/", "\\");
        } else if (sysName.indexOf("LINUX") >= 0) {
            URL res = getClass().getClassLoader().getResource("cmds/linux/napi_generator-linux");
            command = res.getPath() + "  " + dest_path;
        } else {
            URL res = getClass().getClassLoader().getResource("cmds/mac/napi_generator-mac");
            command = res.getPath() + "  " + dest_path;
        }

        try {
            try {
                callExtProcess(command);
            } catch (InterruptedException e) {
                LOG.warn("exec command Interrupted");
                Thread.currentThread().interrupt();
            }
        } catch (IOException ex) {
            LOG.debug("exec command error");
        }
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

    private void callExtProcess(String command) throws IOException, InterruptedException {
        Process process = Runtime.getRuntime().exec(command);

        StreamConsumer errConsumer = new StreamConsumer(process.getErrorStream());
        StreamConsumer outputConsumer = new StreamConsumer(process.getInputStream());

        errConsumer.start();
        outputConsumer.start();

        int exitVal = process.waitFor();
        if (exitVal != 0) {
            LOG.error(" callExtProcess process.waitFor() != 0");
        }
        errConsumer.join();
        outputConsumer.join();
    }

    class StreamConsumer extends Thread {
        InputStream is;

        StreamConsumer(InputStream is) {
            super.setName("StreamConsumer");
            this.is = is;
        }

        @Override
        public void run() {
            try {
                InputStreamReader isr = new InputStreamReader(is);
                BufferedReader br = new BufferedReader(isr);
                String line;
                while ((line = br.readLine()) != null) {
                    LOG.error("StreamConsumer" + line);
                }
            } catch (IOException ex) {
                LOG.error("StreamConsumer io error");
            }
        }
    }
}
