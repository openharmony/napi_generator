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
import java.awt.event.*;
import java.io.IOException;

/**
 * @author: xudong
 * @see: 生成文件错误弹窗
 * @version: 2022/02/21/v1.0.0
 */
public class ErrorDialog extends JDialog {
    private static final Logger LOG = Logger.getInstance(ErrorDialog.class);
    private JPanel contentPane;
    private JButton buttonOK;
    private JButton buttonHelp;
    private JTextArea textAreaError;

    public ErrorDialog(String sErrorMessage) {
        setContentPane(contentPane);
        setModal(true);
        getRootPane().setDefaultButton(buttonOK);
        setTitle("执行失败");
        textAreaError.setText(sErrorMessage);
        buttonOK.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                onOK();
            }
        });

        buttonHelp.addActionListener(new ActionListener() {
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
    }

    private void onOK() {
        dispose();
    }

    private void onCancel() {
        try {
            Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler" +
                    " https://gitee.com/openharmony-sig/napi_generator");
        } catch (IOException e) {
            LOG.error("exec command help error");
        }
        dispose();
    }
}
