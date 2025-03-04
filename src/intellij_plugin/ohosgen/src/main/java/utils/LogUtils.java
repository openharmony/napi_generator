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

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

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
    /**
     * 调试级别
     */
    public static final int DEBUG = 1;
    /**
     * 信息级别
     */
    public static final int INFO = 2;
    /**
     * 告警级别
     */
    public static final int WARN = 3;
    /**
     * 错误级别
     */
    public static final int ERROR = 4;

    // 全局日志级别（默认 INFO）
    private static int currentLevel = INFO;

    // 其他原有配置（路径、文件大小限制等）
    private static final String LOG_DIR = "logs";
    private static final String LOG_FILE = "app.log";
    private static final String DEFAULT_LOG_PATH = "./logs/app.log";
    private static final int DEFAULT_LOG_LEVEL = INFO;
    private static final long MAX_SIZE = 10 * 1024 * 1024; // 10MB
    private static final int MAX_FILES = 5;
    private static FileWriter writer;
    private static String currentLogPath = DEFAULT_LOG_PATH;
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

    /**
     * 日志滚动
     *
     * @return void
     */
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

    /**
     * 重新初始化
     *
     * @return void
     */
    public static void reinit() {
        // 1. 关闭现有日志流‌:ml-citation{ref="1,3" data="citationList"}
        if (writer != null) {
            try {
                writer.close();
            } catch (IOException e) {
                System.err.println("日志流关闭失败: " + e.getMessage());
            }
        }

        // 2. 恢复初始配置参数‌:ml-citation{ref="5,8" data="citationList"}
        currentLogPath = DEFAULT_LOG_PATH;
        currentLevel = DEFAULT_LOG_LEVEL;

        // 3. 重新初始化日志文件‌:ml-citation{ref="1,3" data="citationList"}
        try {
            File logFile = new File(LOG_DIR, LOG_FILE);
            writer = new FileWriter(logFile, true);
        } catch (IOException e) {
            System.err.println("日志文件初始化失败: " + e.getMessage());
        }
    }

    /**
     * 清除日志
     *
     * @return void
     */
    public static void clear() {
        if (writer != null) {
            try {
                writer.close();
            } catch (IOException e) {
                System.err.println("日志流关闭失败: " + e.getMessage());
            }
        }

        File logFile = new File(LOG_DIR, LOG_FILE);

        // 1. 处理单文件模式‌:ml-citation{ref="4,5" data="citationList"}
        if (logFile.isFile()) {
            if (logFile.delete()) {
                System.out.println("日志文件已删除: " + currentLogPath);
            } else {
                System.err.println("文件删除失败: dir-" + LOG_DIR + " ,file-" + LOG_FILE);
            }
            return;
        }

        // 2. 处理目录模式‌:ml-citation{ref="3,4" data="citationList"}
        if (logFile.isDirectory()) {
            File[] logFiles = logFile.listFiles((dir, name) -> name.endsWith(".log"));
            if (logFiles == null) return;

            for (File file : logFiles) {
                if (file.delete()) {
                    System.out.println("已删除: " + file.getAbsolutePath());
                } else {
                    System.err.println("删除失败: " + file.getAbsolutePath());
                }
            }
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

    /**
     * 写调试日志
     *
     * @param message 调试日志
     * @return
     */
    public static void debug(String message) {
        log(DEBUG, message);
    }

    /**
     * 写信息日志
     *
     * @param message 信息日志
     * @return
     */
    public static void info(String message) {
        log(INFO, message);
    }

    /**
     * 写告警日志
     *
     * @param message 告警日志
     * @return
     */
    public static void warn(String message) {
        log(WARN, message);
    }

    /**
     * 写错误日志
     *
     * @param message 错误日志
     * @return
     */
    public static void error(String message) {
        log(ERROR, message);
    }

    // 核心日志记录逻辑（含分级判断）
    /**
     * 写日志
     *
     * @param level 日志等级
     * @param message 告警日志
     * @return
     */
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
    /**
     * 获取日志界壁
     *
     * @param level 日志等级
     * @return 日志级别名称
     */
    private static String getLevelName(int level) {
        return switch (level) {
            case DEBUG -> "DEBUG";
            case INFO -> "INFO";
            case WARN -> "WARN";
            case ERROR -> "ERROR";
            default -> "UNKNOWN";
        };
    }

    /**
     * 读取日志文件内容（支持分页）
     *
     * @param pageNum    页码（从1开始）
     * @param pageSize   每页行数
     * @return 按时间倒序排列的日志列表（最近日志在前）
     */
    public static List<String> readLog(int pageNum, int pageSize) {
        return readLog(currentLogPath, pageNum, pageSize);
    }

    /**
     * 指定路径读取日志文件内容
     *
     * @param logPath    日志文件路径
     * @param pageNum    页码
     * @param pageSize   每页行数
     */
    public static synchronized List<String> readLog(String logPath, int pageNum, int pageSize) {
        File logFile = new File(logPath);
        List<String> allLines = new ArrayList<>();

        try (BufferedReader reader = Files.newBufferedReader(logFile.toPath(), StandardCharsets.UTF_8)) {
            String line;
            while ((line = reader.readLine()) != null) {
                allLines.add(line);
            }
        } catch (Exception e) {
            return Collections.singletonList("日志读取失败: " + e.getMessage());
        }

        // 倒序处理（最近日志在前）
        Collections.reverse(allLines);

        // 分页计算
        int start = (pageNum - 1) * pageSize;
        int end = Math.min(start + pageSize, allLines.size());
        return start >= allLines.size() ? new ArrayList<>() : allLines.subList(start, end);
    }

    /**
     * 全量读取日志文件
     *
     * @return 返回日志读取内容
     */
    public static List<String> readLog() {
        return readLog(currentLogPath, 1, Integer.MAX_VALUE);
    }
}
