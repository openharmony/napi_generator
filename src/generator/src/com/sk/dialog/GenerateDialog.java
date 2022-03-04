package com.sk.dialog;

import com.intellij.openapi.diagnostic.Logger;
import com.sk.action.BrowseAction;
import com.sk.action.GenAction;
import com.sk.action.ScriptAction;
import com.sk.utils.FileUtil;
import org.apache.http.util.TextUtils;

import javax.swing.*;
import java.awt.event.*;
import java.io.*;

public class GenerateDialog extends JDialog {
    private static final Logger LOG = Logger.getInstance(GenerateDialog.class);
    private static final String TITLE = "Generate Napi Frame";
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
    private String destPath, directoryPath, fileName;

    public GenerateDialog(String destPath, String directoryPath, String fileName) {
        this.destPath = destPath;
        this.directoryPath = directoryPath;
        this.fileName = fileName;
        initData();
        setContentPane(contentPane);
        setModal(true);
        setTitle(TITLE);
        getRootPane().setDefaultButton(buttonOK);
        buttonOK.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onOK();
            }
        });

        buttonCancel.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onCancel();
            }
        });

        // call onCancel() when cross is clicked
        setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                onCancel();
            }
        });

        // call onCancel() on ESCAPE
        contentPane.registerKeyboardAction(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onCancel();
            }
        }, KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0), JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT);

        selectInter.addActionListener(new BrowseAction(selectInter, textField1));
        selectGenPath.addActionListener(new GenAction(selectGenPath, textField2));
        select.addActionListener(new ScriptAction(select, textField3));
        buttonHelp.addComponentListener(new ComponentAdapter() {
        });
        buttonHelp.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onHelp();
            }
        });
    }

    private void onHelp() {
        try {
            Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler" +
                    " https://gitee.com/openharmony-sig/napi_generator");
        } catch (IOException e) {
            LOG.error("exec command help error");
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
        String command;
        InputStream inputStream;
        String sysName = System.getProperties().getProperty("os.name").toUpperCase();

        if (sysName.indexOf("WIN") >= 0) {
            inputStream = getClass().getClassLoader().getResourceAsStream("cmds/win/napi_generator-win.exe");
        } else if (sysName.indexOf("LINUX") >= 0) {
            inputStream = getClass().getClassLoader().getResourceAsStream("cmds/linux/napi_generator-linux");
        } else {
            inputStream = getClass().getClassLoader().getResourceAsStream("cmds/linux/napi_generator-mac");
        }
        command = genCommand(inputStream, destPath, parentPath);

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
            } catch (IOException e) {
                LOG.error("runFun WIN write_tmp_file io error");
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
        String command = "add_library(napitest SHARED x_napi_tool.cpp napitest.cpp napitest_middle.cpp)"
                .replaceAll("napitest", fileName) + "\n" +
                "target_link_libraries(napitest libace_napi.z.so)"
                        .replaceAll("napitest", fileName);
        FileUtil fileUtil = new FileUtil();
        String filePath = fileUtil.makeFile(directoryPath + "/makeFile.txt");
        if (TextUtils.isEmpty(filePath)) {
            LOG.error("makeFile is error");
            return;
        }
        if (!fileUtil.findStringInFile(filePath, command)) {
            fileUtil.writeErrorToTxt(filePath, command);
        }
    }

    private void executable(String execFn) {
        try {
            callExtProcess("chmod a+x " + execFn);
        } catch (IOException e) {
            LOG.warn("LINUX IOException error");
        } catch (InterruptedException e) {
            LOG.warn("exec chmod command Interrupted");
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
        FileOutputStream fw = null;
        try {
            fw = new FileOutputStream(file);
            fw.write(bs, 0, bs.length);
        } catch (IOException e) {
            LOG.error("writeTmpFile io error");
        } finally {
            if (fw != null) {
                fw.close();
            }
        }
    }

    private void promptDialog() {
        JDialog dialog;
        if (generateSuccess) {
            dialog = new GenResultDialog(directoryPath);
        } else {
            dialog = new ErrorDialog(sErrorMessage);
        }
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
                sErr += sTmp + "\n";
            } catch (IOException e) {
                LOG.error(" genResultLog stdInput error");
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
                sOut += sTmp + "\n";
            } catch (IOException e) {
                LOG.error(" genResultLog stdInput error");
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
            } catch (IOException ex) {
                LOG.error("StreamConsumer io error");
            }
        }
    }
}
