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
package com.sk.dialog;

import com.intellij.openapi.diagnostic.Logger;
import com.sk.action.BrowseAction;
import com.sk.action.GenAction;
import com.sk.action.ScriptAction;
import com.sk.utils.FileUtil;
import org.apache.http.util.TextUtils;

import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JDialog;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.KeyStroke;
import java.awt.event.ComponentAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author: xudong
 * @see: select generate dialog
 * @version: v1.0.0
 * @since 2022/02/21
 */
public class GenerateDialog extends JDialog {
    private static final Logger LOG = Logger.getInstance(GenerateDialog.class);
    private static final String TITLE = "Generate Napi Frame";
    private static final String URL =
            "rundll32 url.dll,FileProtocolHandler" + " https://gitee" + ".com/openharmony" + "-sig/napi_generator";
    private static final String COMMAND_STATEMENT = "add_library(napitest SHARED x_napi_tool.cpp napitest.cpp "
            + "napitest_middle.cpp)" + FileUtil.getNewline() + "target_link_libraries(napitest libace_napi.z.so)";
    private static final String REGEX = "napitest";
    private static final Pattern LF_PATTERN = Pattern.compile(REGEX, Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);

    private JPanel contentPane;
    private JButton buttonOK;
    private JButton buttonCancel;
    private JButton btnGenPath;
    private JButton btnSelectScript;
    private JTextField textField1;
    private JTextField textField2;
    private JTextField textField3;
    private JButton btnSelectInter;
    private JButton selectInter;
    private JButton selectGenPath;
    private JButton select;
    private JButton buttonHelp;
    private boolean generateSuccess = true;
    private String sErrorMessage = "";
    private String destPath;
    private String directoryPath;
    private String fileName;

    /**
     * 构造函数
     *
     * @param destPath      接口文件路径
     * @param directoryPath 生成框架文件路径
     * @param fileName      文件名
     */
    public GenerateDialog(String destPath, String directoryPath, String fileName) {
        this.destPath = destPath;
        this.directoryPath = directoryPath;
        this.fileName = fileName;
    }

    /**
     * 初始化对话框
     */
    public void initDialog() {
        initData();
        setContentPane(contentPane);
        setModal(true);
        setTitle(TITLE);
        getRootPane().setDefaultButton(buttonOK);
        btnGenPath.setText("生成框架路径：");
        btnSelectScript.setText("编译脚本路径：");
        btnSelectInter.setText("接口文件：");
        buttonOK.addActionListener(actionEvent -> onOK());

        buttonCancel.addActionListener(actionEvent -> onCancel());

        // call onCancel() when cross is clicked
        setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
        addWindowListener(new WindowAdapter() {
            /**
             * close dialog
             * @param windowEvent WindowEvent
             */
            @Override
            public void windowClosing(WindowEvent windowEvent) {
                onCancel();
            }
        });

        // call onCancel() on ESCAPE
        contentPane.registerKeyboardAction(actionEvent -> onCancel(), KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0),
                JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT);

        selectInter.addActionListener(new BrowseAction(selectInter, textField1));
        selectGenPath.addActionListener(new GenAction(selectGenPath, textField2));
        select.addActionListener(new ScriptAction(select, textField3));
        buttonHelp.addComponentListener(new ComponentAdapter() {
        });
        buttonHelp.addActionListener(actionEvent -> onHelp());
    }

    private void onHelp() {
        try {
            Runtime.getRuntime().exec(URL);
        } catch (IOException ioException) {
            LOG.error("exec command help error" + ioException);
        }
        dispose();
    }

    private void initData() {
        textField1.setText(destPath);
        textField2.setText(directoryPath);
        textField3.setText(directoryPath);
    }

    private void onOK() {
        if (TextUtils.isEmpty(textField1.getText())) {
            warningMessage("请选择接口文件");
            return;
        }
        if (TextUtils.isEmpty(textField2.getText())) {
            warningMessage("请选择保存框架路径");
            return;
        }
        if (TextUtils.isEmpty(textField3.getText())) {
            warningMessage("请选择编译脚本路径");
            return;
        }
        runFun(textField1.getText(), textField2.getText());
        dispose();
    }

    private void onCancel() {
        dispose();
    }

    private void warningMessage(String message) {
        JOptionPane.showMessageDialog(null, message, "提示", JOptionPane.WARNING_MESSAGE);
    }

    private void runFun(String destPath, String parentPath) {
        InputStream inputStream;
        String sysName = System.getProperties().getProperty("os.name").toUpperCase();

        if (sysName.indexOf("WIN") >= 0) {
            inputStream = getClass().getClassLoader().getResourceAsStream("cmds/win/napi_generator-win.exe");
        } else if (sysName.indexOf("LINUX") >= 0) {
            inputStream = getClass().getClassLoader().getResourceAsStream("cmds/linux/napi_generator-linux");
        } else {
            inputStream = getClass().getClassLoader().getResourceAsStream("cmds/linux/napi_generator-mac");
        }
        String command = genCommand(inputStream, destPath, parentPath);
        try {
            callExtProcess(command);
        } catch (IOException ioException) {
            LOG.error("exec command error" + ioException);
        } catch (InterruptedException exception) {
            LOG.warn("exec command Interrupted" + exception);
            Thread.currentThread().interrupt();
        }
    }

    private String genCommand(InputStream inputStream, String destPath, String parentPath) {
        String sysName = System.getProperties().getProperty("os.name").toUpperCase();
        String tmpDir = System.getProperty("java.io.tmpdir");
        String execFn = tmpDir + "/napi_generator.exe";
        if (sysName.indexOf("LINUX") >= 0) {
            executable(execFn);
        }

        File file = new File(execFn);
        if (!file.exists()) {
            try {
                byte[] bs = inputStream.readAllBytes();
                writeTmpFile(execFn, bs);
            } catch (IOException ioException) {
                LOG.error("runFun WIN write_tmp_file io error" + ioException);
            }
        }
        return file + " " + "-f" + " " + destPath + " " + "-o" + " " + parentPath;
    }

    private void callExtProcess(String command) throws IOException, InterruptedException {
        Process process = Runtime.getRuntime().exec(command);
        genResultLog(process);

        StreamConsumer errConsumer = new StreamConsumer(process.getErrorStream());
        StreamConsumer outputConsumer = new StreamConsumer(process.getInputStream());

        errConsumer.start();
        outputConsumer.start();

        if (!generateSuccess) {
            LOG.error(" callExtProcess process.waitFor() != 0");
            promptDialog();
        } else {
            promptDialog();
            writeCommand();
        }
        errConsumer.join();
        outputConsumer.join();
    }

    private void writeCommand() {
        FileUtil fileUtil = new FileUtil();
        String filePath = fileUtil.makeFile(directoryPath + "/makeFile.txt");
        if (TextUtils.isEmpty(filePath)) {
            LOG.error("makeFile is error");
            return;
        }
        Matcher matcher = LF_PATTERN.matcher(COMMAND_STATEMENT);
        String statement = matcher.replaceAll(fileName);
        try {
            if (!fileUtil.findStringInFile(filePath, statement)) {
                fileUtil.writeErrorToTxt(filePath, statement);
            }
        } catch (IOException ioException) {
            LOG.error("writeCommand io error" + ioException);
        }
    }

    private void executable(String execFn) {
        try {
            callExtProcess("chmod a+x " + execFn);
        } catch (IOException ioException) {
            LOG.warn("LINUX IOException error" + ioException);
        } catch (InterruptedException exception) {
            LOG.warn("exec chmod command Interrupted" + exception);
            Thread.currentThread().interrupt();
        }
    }

    private void writeTmpFile(String path, byte[] bs) throws IOException {
        File file = new File(path);
        if (!file.exists()) {
            boolean isNewFile = file.createNewFile();
            if (!isNewFile) {
                LOG.info("writeTmpFile createNewFile error");
            }
        }
        try (FileOutputStream fw = new FileOutputStream(file)) {
            fw.write(bs, 0, bs.length);
        } catch (IOException ioException) {
            LOG.error("writeTmpFile io error" + ioException);
        }
    }

    private void promptDialog() {
        if (generateSuccess) {
            GenResultDialog genResultDialog = new GenResultDialog(directoryPath);
            genResultDialog.initResultDialog();
            setMethod(genResultDialog);
        } else {
            ErrorDialog errorDialog = new ErrorDialog(sErrorMessage);
            errorDialog.initDialog();
            setMethod(errorDialog);
        }
    }

    private void setMethod(JDialog dialog) {
        dialog.setLocationRelativeTo(dialog);
        dialog.pack();
        dialog.setVisible(true);
    }

    private void genResultLog(Process process) {
        BufferedReader stdInput = new BufferedReader(new InputStreamReader(process.getInputStream()));
        BufferedReader stdError = new BufferedReader(new InputStreamReader(process.getErrorStream()));
        String sErr, sOut;
        sErr = getErrorResult(stdError);
        if (TextUtils.isEmpty(sErr)) {
            sOut = genInputLog(stdInput);
            if (!generateIsSuccess(sOut)) {
                sErrorMessage = sOut;
            }
            return;
        }
        generateSuccess = false;
        sErrorMessage = sErr;
    }

    private String getErrorResult(BufferedReader stdError) {
        String sErr = "";
        while (true) {
            String sTmp;
            try {
                if ((sTmp = stdError.readLine()) == null) {
                    break;
                }
                sErr += sTmp + FileUtil.getNewline();
            } catch (IOException ioException) {
                LOG.error(" genResultLog stdInput error" + ioException);
            }
        }
        return sErr;
    }

    private boolean generateIsSuccess(String sOut) {
        if (!TextUtils.isEmpty(sOut) && sOut.indexOf("success") >= 0) {
            generateSuccess = true;
        } else {
            generateSuccess = false;
        }
        return generateSuccess;
    }

    private String genInputLog(BufferedReader stdInput) {
        String sOut = "";
        while (true) {
            String sTmp;
            try {
                if ((sTmp = stdInput.readLine()) == null) {
                    break;
                }
                sOut += sTmp + FileUtil.getNewline();
            } catch (IOException ioException) {
                LOG.error(" genResultLog stdInput error" + ioException);
            }
        }
        return sOut;
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
            } catch (IOException ioException) {
                LOG.error("StreamConsumer io error" + ioException);
            }
        }
    }
}
