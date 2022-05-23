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
package com.sk.action;

import com.intellij.notification.NotificationType;
import com.intellij.openapi.project.Project;
import com.sk.utils.FileUtil;
import com.sk.utils.GenNotification;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.JFileChooser;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.prefs.Preferences;

/**
 * 接口文件选择框。
 *
 * @author: xudong
 * @see: select file
 * @version: v1.0.0
 * @since 2022-02-21
 */
public class BrowseAction implements ActionListener {
    private JButton button;
    private JTextField interField;
    private JTextField genField;
    private JTextField scriptField;
    private Project project;


    public BrowseAction(Project project, JButton button, JTextField interField,
                        JTextField geField, JTextField scriptField) {
        this.project = project;
        this.button = button;
        this.interField = interField;
        this.genField = geField;
        this.scriptField = scriptField;
    }

    @Override
    public void actionPerformed(ActionEvent actionEvent) {
        if (actionEvent.getSource().equals(button)) {
            Preferences preferences = Preferences.userRoot();


            JFileChooser fcDlg = new JFileChooser();
            String pathRecord = preferences.get("interPathRecord", "");
            if (!pathRecord.equals("")) {
                fcDlg = new JFileChooser(pathRecord);
            }

            fcDlg.setDialogTitle("请选择接口文件...");
            fcDlg.setFileSelectionMode(JFileChooser.FILES_ONLY);
            FileNameExtensionFilter filter = new FileNameExtensionFilter("文本文件(*.ts)", "ts");
            fcDlg.setFileFilter(filter);
            int returnVal = fcDlg.showOpenDialog(null);
            if (returnVal == JFileChooser.APPROVE_OPTION) {
                String filepath = fcDlg.getSelectedFile().getPath();
                String filename = fcDlg.getSelectedFile().getName();

                if (!FileUtil.patternFileName(filename)) {
                    GenNotification.notifyMessage(project,
                            "当前文件名不符合转换规则！",
                            "提示",
                            NotificationType.WARNING);
                    return;
                }
                String upPath = fcDlg.getSelectedFile().getParent();
                preferences.put("interPathRecord", filepath);
                interField.setText(filepath);
                genField.setText(upPath);
                scriptField.setText(upPath);
            }
        }
    }
}
