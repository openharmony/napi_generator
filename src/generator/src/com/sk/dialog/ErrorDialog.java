package com.sk.dialog;

import com.intellij.openapi.diagnostic.Logger;

import javax.swing.*;
import java.awt.event.*;
import java.io.IOException;

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
