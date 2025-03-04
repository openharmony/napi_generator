/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
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

package utils;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class LogUtils {
    // 日志级别常量
    public static final int DEBUG = 1;
    public static final int INFO = 2;
    public static final int WARN = 3;
    public static final int ERROR = 4;

    // 全局日志级别（默认 INFO）
    private static int currentLevel = INFO;

    // 其他原有配置（路径、文件大小限制等）
    private static final String LOG_DIR = "logs";
    private static final String LOG_FILE = "app.log";
    private static final long MAX_SIZE = 10 * 1024 * 1024; // 10MB
    private static final int MAX_FILES = 5;
    private static FileWriter writer;
    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    static {
        initLogDir();
        initWriter();
    }

    // 初始化日志目录
    private static void initLogDir() {
        File dir = new File(LOG_DIR);
        if (!dir.exists()) {
            boolean res = dir.mkdir();
            if (!res) {
                System.out.println("mkdir " + LOG_DIR + " failed!");
            }
        }
    }

    // 初始化写入器
    private static void initWriter() {
        try {
            File logFile = new File(LOG_DIR, LOG_FILE);
            writer = new FileWriter(logFile, true); // 追加模式
        } catch (IOException e) {
            System.out.println("initWriter error: " + e.getMessage());
        }
    }

    // 日志滚动
    private static synchronized void rollOver() {
        try {
            writer.close();
            for (int i = MAX_FILES - 1; i >= 1; i--) {
                File src = new File(LOG_DIR, "app." + i + ".log");
                if (src.exists()) {
                    File dest = new File(LOG_DIR, "app." + (i + 1) + ".log");
                    boolean res = src.renameTo(dest);
                    if (!res) {
                        System.out.println("rollOver " + LOG_DIR + " failed!");
                    }
                }
            }
            boolean res = new File(LOG_DIR, LOG_FILE).renameTo(new File(LOG_DIR, "app.1.log"));
            if (!res) {
                System.out.println("rollOver " + LOG_DIR + " failed!");
            }
            initWriter(); // 重新初始化写入器
        } catch (IOException e) {
            System.out.println("initWriter error: " + e.getMessage());
        }
    }

    // 设置日志级别（静态方法）
    public static synchronized void setLevel(int level) {
        currentLevel = level;
    }

    // 读取日志级别（静态方法）
    public static synchronized int getLevel() {
        return currentLevel;
    }

    // 各分级日志方法
    public static void debug(String message) {
        log(DEBUG, message);
    }

    public static void info(String message) {
        log(INFO, message);
    }

    public static void warn(String message) {
        log(WARN, message);
    }

    public static void error(String message) {
        log(ERROR, message);
    }

    // 核心日志记录逻辑（含分级判断）
    private static synchronized void log(int level, String message) {
        if (level < currentLevel) return; // 低于当前级别则不记录‌:ml-citation{ref="3,6" data="citationList"}

        try {
            File logFile = new File(LOG_DIR, LOG_FILE);
            if (logFile.length() >= MAX_SIZE) rollOver();

            String timestamp = sdf.format(new Date());
            String levelName = getLevelName(level);
            String logLine = String.format("%s [%s] %s%n", timestamp, levelName, message);
            writer.write(logLine);
            writer.flush();
        } catch (IOException e) {
            System.out.println("log write error: " + e.getMessage());
        }
    }

    // 将级别数值转换为名称
    private static String getLevelName(int level) {
        return switch (level) {
            case DEBUG -> "DEBUG";
            case INFO -> "INFO";
            case WARN -> "WARN";
            case ERROR -> "ERROR";
            default -> "UNKNOWN";
        };
    }
}
