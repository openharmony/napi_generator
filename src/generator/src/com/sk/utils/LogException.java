package com.sk.utils;

import com.intellij.openapi.diagnostic.Logger;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * @author: xudong
 * @see: 日志
 * @version: 2022/02/21/v1.0.0
 */
public class LogException {
    private static final Logger LOG = Logger.getInstance(LogException.class);

    /**
     * 将错误信息输入到txt中
     *
     * @param path
     * @param content
     * @throws IOException
     */
    public void writeErrorToTxt(String path, String content) throws IOException {
        File file = new File(path);
        if (!file.exists()) {
            file.createNewFile();
        }
        FileWriter fw = null;
        String writeDate = "时间:" + this.getNowDate() + "---" + "error:" + content;
        try {
            //设置为:True,表示写入的时候追加数据
            fw = new FileWriter(file, true);
            fw.write(writeDate + "\r\n");
        } catch (IOException e) {
            LOG.error("writeErrorToTxt io error");
        } finally {
            if (fw != null) {
                fw.close();
            }
        }
    }

    /**
     * 获取系统当前时间
     *
     * @return 当前时间
     */
    public String getNowDate() {

        Calendar D = Calendar.getInstance();
        int year = 0, moth = 0, day = 0;
        year = D.get(Calendar.YEAR);
        moth = D.get(Calendar.MONTH) + 1;
        day = D.get(Calendar.DAY_OF_MONTH);
        String now_date = String.valueOf(year) + "-" + String.valueOf(moth) + "-" + String.valueOf(day);
        return now_date;
    }

    /**
     * 测试方法
     *
     * @param args
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        String userHome = System.getProperties().getProperty("user.home");
        String path = "/log.txt";
        File file = new File(userHome + path);
        if (!file.exists()) {
            file.getParentFile().mkdirs();
            file.createNewFile();
        }
        String content = null;
        try {
            List<String> list = new ArrayList<>();
            list.add("1");
            list.add("2");
            list.add("3");
            for (String i : list) {
                System.out.println(i);
            }
        } catch (Exception e) {
            content = e.getClass().getName() + "  error Info  " + e.getMessage();
        }
        LogException le = new LogException();
        le.writeErrorToTxt(userHome + path, content);
    }
}
