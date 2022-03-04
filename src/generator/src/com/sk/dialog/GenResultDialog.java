package com.sk.dialog;

import com.intellij.openapi.diagnostic.Logger;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class GenResultDialog extends JDialog {
    private static final Logger LOG = Logger.getInstance(GenResultDialog.class);
    private JPanel contentPane;
    private JButton buttonOK;
    private JList resultList;

    public GenResultDialog(String directoryPath) {
        setContentPane(contentPane);
        setModal(true);
        getRootPane().setDefaultButton(buttonOK);
        setTitle("执行成功");
        buttonOK.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onOK();
            }
        });
        List<String> fileList = getDirFileName(directoryPath);
        resultList.setListData(fileList.toArray(new String[fileList.size()]));
    }

    private void onOK() {
        dispose();
    }

    private List<String> getDirFileName(String path) {
        List<String> files = new ArrayList<>();
        File f = new File(path);
        if (!f.exists()) {
            LOG.info("getDirFileName f not exist");
            return files;
        }
        File fa[] = f.listFiles();
        for (int i = 0; i < fa.length; i++) {
            File fs = fa[i];
            if (!fs.isDirectory()) {
                files.add(fs.getPath());
            } else {
                LOG.info("getDirFileName this file is dir");
            }
        }
        return files;
    }
}
