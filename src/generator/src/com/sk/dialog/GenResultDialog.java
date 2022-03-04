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

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * @author: xudong
 * @see: 成功弹窗
 * @version: 2022/02/21/v1.0.0
 */
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
