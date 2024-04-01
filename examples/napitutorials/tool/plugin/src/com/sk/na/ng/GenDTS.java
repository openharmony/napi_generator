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
package com.sk.na.ng;

import com.intellij.openapi.diagnostic.Logger;
import com.intellij.notification.NotificationType;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.PlatformDataKeys;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;

import com.sk.na.utils.GenNotification;
import org.apache.http.util.TextUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * 项目文件入口
 *
 * @author: goujingjing
 * @see: tool conversion plug-in
 * @version: v1.0.0
 * @since 2024-03-29
 */
public class GenDTS extends AnAction {
    private static final Logger LOG = Logger.getInstance(GenDTS.class);
    private boolean generateSuccess = true;
    private String sErrorMessage = "";

    @Override
    public void actionPerformed(AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        // 获取需要处理的.h文件绝对路径
        VirtualFile file = anActionEvent.getData(PlatformDataKeys.VIRTUAL_FILE);
        if (file == null) {
            GenNotification.notifyMessage(project, "", "file is not exist", NotificationType.ERROR);
            return;
        }
        if (project == null) {
            return;
        }
        String destPath = file.getPath();
        // 异步执行
        runFun(destPath);
    }

    private boolean callExtProcess(String command) throws IOException, InterruptedException {

        if (TextUtils.isEmpty(command)) {
            GenNotification.notifyMessage(null, "执行命令文件为空", "空命令行提示", NotificationType.ERROR);
            return false;
        }
        Process process = Runtime.getRuntime().exec(command);

        // 读取输出流（正常输出）
        new Thread(() -> {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();

       // 读取错误流（错误输出）
        new Thread(() -> {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getErrorStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.err.println(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();

        // 等待进程结束
        int exitCode = process.waitFor();
        System.out.println("Process exited with code: " + exitCode);

        if (!generateSuccess) {
            GenNotification.notifyMessage(null, sErrorMessage, "提示", NotificationType.ERROR);
            return false;
        }

        return true;
    }

    /**
     * 赋值可执行文件权限。
     *
     * @param execFn 可执行命令
     * @throws IOException          打开文件异常
     * @throws InterruptedException 中断异常
     */
    private void executable(String execFn) throws IOException, InterruptedException {
        callExtProcess("chmod a+x " + execFn);
    }

    /**
     * 拷贝可执行文件到临时文件夹
     *
     * @param path 目标文件路径
     * @param bs   字节内容
     * @throws IOException exception
     */
    private void writeTmpFile(String path, byte[] bs) throws IOException {
        File file = new File(path);
        if (!file.exists()) {
            boolean isNewFile = file.createNewFile();
            if (!isNewFile) {
                 LOG.info("writeTmpFile createNewFile error");
            }
        }
        FileOutputStream fw = new FileOutputStream(file);
        fw.write(bs, 0, bs.length);
        fw.close();
    }

    /**
     * 拷贝文件到本地临时目录
     *
     * @param fileName 文件名
     */
    private void copyFileToLocalPath(String fileName) {
        String sysName = System.getProperties().getProperty("os.name").toUpperCase();
        String tmpDirFile = System.getProperty("java.io.tmpdir");
        String execFn;
        if (sysName.contains("WIN")) {
            execFn = "cmds/win/" + fileName + ".exe";
            tmpDirFile += fileName + ".exe";
        } else if (sysName.contains("LINUX")) {
            execFn = "cmds/linux/" + fileName;
            tmpDirFile += fileName;
        } else {
            execFn = "cmds/mac/" + fileName;
            tmpDirFile += fileName;
        }
        try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream(execFn)) {
            if (inputStream == null) {
                throw new IOException("exec File InputStream is Null");
            }
            byte[] bs = inputStream.readAllBytes();
            writeTmpFile(tmpDirFile, bs);
            if (sysName.contains("LINUX") || sysName.contains("MAC OS")) {
                executable(tmpDirFile);
            }
        } catch (IOException | InterruptedException e) {
            GenNotification.notifyMessage(null, e.getMessage(), "Can not Find File:" + execFn,
                    NotificationType.ERROR);
            LOG.error(e);
        }
    }

    /**
     * 生成命令行指令
     *
     * @return 返回命令行执行内容
     */
    private String genCommand(String hFilePath) {
        String sysName = System.getProperties().getProperty("os.name").toUpperCase();
        String tmpDirFile = System.getProperty("java.io.tmpdir");
        if (sysName.contains("WIN")) {
            copyFileToLocalPath("native_gen-win");
            tmpDirFile += "native_gen-win.exe";
        } else if (sysName.contains("LINUX")) {
            copyFileToLocalPath("native_gen-linux");
            tmpDirFile += "native_gen-linux";
        } else {
            copyFileToLocalPath("native_gen-macos");
            tmpDirFile += "native_gen-macos";
        }

        File file = new File(tmpDirFile);
        String command = file.toString();
        command += " " + hFilePath;
        return command;
    }

    /**
     * 执行主程序入口
     *
     * @return 执行状态
     */
    public boolean runFun(String hFilePath) {
        copyFileToLocalPath("header_parser");
        String command;
        command = genCommand(hFilePath);
        GenNotification.notifyMessage(null, command, "command",
                NotificationType.INFORMATION);

        try {
            if (!TextUtils.isEmpty(command) && callExtProcess(command)) {
                GenNotification.notifyMessage(null, "", "Generate Native Successfully",
                        NotificationType.INFORMATION);

                return true;
            }
        } catch (IOException | InterruptedException ex) {
            GenNotification.notifyMessage(null, "", "Command exec error",
                    NotificationType.ERROR);
            LOG.error(ex);
        }
        return false;
    }
}
