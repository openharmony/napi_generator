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

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class Constants {
    /**
     * 版本号
     */
    public static final String VERSION = "1.0.0";

    /**
     * 解析未知代码
     */
    public static final int PARSE_UNKNOWN_LANGUAGE = -1;

    /**
     * 解析c/cpp代码
     */
    public static final int PARSE_C_CPP_LANGUAGE = 1;

    /**
     * 解析ts代码
     */
    public static final int PARSE_TS_LANGUAGE = 2;

    /**
     * 解析ts 抽象类
     */
    public static final int PARSE_TS_ABSTRACT = 1;

    /**
     * 解析ts 类
     */
    public static final int PARSE_TS_CLASS = 2;

    /**
     * 解析ts 枚举型
     */
    public static final int PARSE_TS_ENUM = 3;

    /**
     * 解析ts export
     */
    public static final int PARSE_TS_EXPORT = 4;

    /**
     * 解析ts 方法
     */
    public static final int PARSE_TS_FUNCTION = 5;

    /**
     * 解析ts 通用类
     */
    public static final int PARSE_TS_GENERIC = 6;

    /**
     * 解析ts 通用class
     */
    public static final int PARSE_TS_GENERIC_CLASS = 7;

    /**
     * 解析ts interface
     */
    public static final int PARSE_TS_GENERIC_INTERFACE = 8;

    /**
     * 解析ts 导入
     */
    public static final int PARSE_TS_IMPORT = 9;

    /**
     * 解析ts 接口
     */
    public static final int PARSE_TS_INTERFACE = 10;

    /**
     * 解析ts js 类
     */
    public static final int PARSE_TS_JS_CLASS = 11;

    /**
     * 解析ts 循环
     */
    public static final int PARSE_TS_LOOP = 12;

    /**
     * 解析ts 模块
     */
    public static final int PARSE_TS_MODULE = 13;

    /**
     * 解析ts not null
     */
    public static final int PARSE_TS_NON_NULL = 14;

    /**
     * 解析ts 初始化
     */
    public static final int PARSE_TS_OBJECT_INITIALIZER = 15;

    /**
     * 解析ts 状态
     */
    public static final int PARSE_TS_STATEMENT = 16;

    /**
     * 解析ts 模板
     */
    public static final int PARSE_TS_TEMPLATE_STRING = 17;

    /**
     * 解析ts 类型定义
     */
    public static final int PARSE_TS_TYPE = 18;

    /**
     * 解析ts 变量
     */
    public static final int PARSE_TS_VARIABLE = 19;

    /**
     * 解析ts 退出解析
     */
    public static final int PARSE_TS_EXIT_TRANSLATION = 20;

    /**
     * 解析c/cpp 类
     */
    public static final int PARSE_C_CPP_CLASS = 51;

    /**
     * 解析c/cpp 属性
     */
    public static final int PARSE_C_CPP_ATTRIBUTE = 52;

    /**
     * 解析c/cpp 成员
     */
    public static final int PARSE_C_CPP_MEMBER = 53;

    /**
     * 解析c/cpp 方法
     */
    public static final int PARSE_C_CPP_FUNCTION = 54;

    /**
     * 解析c/cpp 枚举
     */
    public static final int PARSE_C_CPP_ENUM = 55;

    /**
     * 解析c/cpp 类型定义
     */
    public static final int PARSE_C_CPP_TYPE = 56;

    /**
     * 解析c/cpp 模板类
     */
    public static final int PARSE_C_CPP_TEMPLATE = 57;

    /**
     * 解析c/cpp 联合体
     */
    public static final int PARSE_C_CPP_UNION = 58;

    /**
     * 解析c/cpp 结构体
     */
    public static final int PARSE_C_CPP_STRUCT = 59;

    /**
     * 解析c/cpp 宏定义
     */
    public static final int PARSE_C_CPP_MACRO = 60;

    /**
     * 解析c/cpp 指针
     */
    public static final int PARSE_C_CPP_POINT = 61;

    /**
     * 解析c/cpp 纯虚
     */
    public static final int PARSE_C_CPP_PURE = 62;

    /**
     * 解析c/cpp 退出遍历
     */
    public static final int PARSE_C_CPP_EXIT_TRANSLATION = 63;

    /**
     * 十分之
     */
    public static final int TEN_PERCENT = 10;

    /**
     * 百分之
     */
    public static final int HUNDRED_PERCENT = 100;

    /**
     * 千分之
     */
    public static final int THOUSAND_PERCENT = 1000;

    /**
     * 开始状态
     */
    public static final String START_STATUS = "start";

    /**
     * 暂停状态
     */
    public static final String PAUSE_STATUS = "pause";

    /**
     * 恢复状态
     */
    public static final String RESUME_STATUS = "resume";

    /**
     * 停止状态
     */
    public static final String STOP_STATUS = "stop";

    /**
     * 完成状态
     */
    public static final String COMPLETE_STATUS = "complete";

    /**
     * 结束状态
     */
    public static final String FINISH_STATUS = "finish";

    /**
     * c/cpp开始消息
     */
    public static final String C_CPP_START_MSG = "c/cpp parse char stream start";

    /**
     * ts开始消息
     */
    public static final String TS_START_MSG = "ts parse char stream start";

    /**
     * c/cpp 暂停消息
     */
    public static final String C_CPP_PAUSE_MSG = "c/cpp parse char stream pause";

    /**
     * ts 暂停消息
     */
    public static final String TS_PAUSE_MSG = "ts parse char stream pause";

    /**
     * c/cpp 恢复消息
     */
    public static final String C_CPP_RESUME_MSG = "c/cpp parse char stream resume";

    /**
     * ts 恢复消息
     */
    public static final String TS_RESUME_MSG = "ts parse char stream resume";

    /**
     * c/cpp 结束消息
     */
    public static final String C_CPP_FINISH_MSG = "c/cpp parse char stream finish";

    /**
     * ts 结束消息
     */
    public static final String TS_FINISH_MSG = "ts parse char stream finish";

    /**
     * c/cpp 完成消息
     */
    public static final String C_CPP_COMPLETE_MSG = "c/cpp parse char stream complete";

    /**
     * ts 完成消息
     */
    public static final String TS_COMPLETE_MSG = "ts parse char stream complete";
}
