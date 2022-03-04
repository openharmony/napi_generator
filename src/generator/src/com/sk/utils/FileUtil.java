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
package com.sk.utils;

import com.intellij.openapi.diagnostic.Logger;

import java.io.*;

/**
 * @author: xudong
 * @see: 文件相关操作工具
 * @version: 2022/02/21/v1.0.0
 */
public class FileUtil {
    private static final Logger LOG = Logger.getInstance(FileUtil.class);

    /**
     * 将错误信息输入到txt中
     *
     * @param path
     * @param content
     * @throws IOException
     */
    public void writeErrorToTxt(String path, String content) {
        File file = new File(path);
        FileWriter fw = null;
        try {
            //设置为:True,表示写入的时候追加数据
            fw = new FileWriter(file, true);
            fw.write(content + "\r\n");
        } catch (IOException e) {
            LOG.error("writeErrorToTxt io error");
        } finally {
            if (fw != null) {
                try {
                    fw.close();
                } catch (IOException e) {
                    LOG.error("writeErrorToTxt io error");
                }
            }
        }
    }

    /**
     * 创建文件
     *
     * @param path 文件路径
     * @return 文件路径
     */
    public String makeFile(String path) {
        File file = new File(path);
        if (!file.exists()) {
            try {
                boolean isCreateFile = file.createNewFile();
                LOG.info("makeFile result isCreateFile = " + isCreateFile);
            } catch (IOException e) {
                LOG.error("writeErrorToTxt io error");
                return "";
            }
        }
        return file.getPath();
    }

    /**
     * 判断文件是否包含指定字符串
     *
     * @param path    文件路径
     * @param content 指定内容
     * @return 是否包含指定字符串
     */
    public boolean findStringInFile(String path, String content) {
        File file = new File(path);
        String[] command = content.split("\n");
        InputStreamReader read = null;
        try {
            read = new InputStreamReader(new FileInputStream(file), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            LOG.error("findStringInFile encodingException");
        } catch (FileNotFoundException e) {
            LOG.error("findStringInFile FileNotFoundException");
        }
        //考虑到编码格式
        BufferedReader bufferedReader = new BufferedReader(read);
        return isContainString(bufferedReader, command);
    }

    private boolean isContainString(BufferedReader bufferedReader, String[] command) {
        String line = null;
        while (true) {
            try {
                if (!((line = bufferedReader.readLine()) != null)) break;
            } catch (IOException e) {
                LOG.error("findStringInFile IOException");
            } finally {
                if (bufferedReader != null) {
                    try {
                        bufferedReader.close();
                    } catch (IOException e) {
                        LOG.error("findStringInFile io error");
                    }
                }
            }
            line += line;
            if (line.contains(command[0])) {
                return true;
            }
        }
        return false;
    }
}
