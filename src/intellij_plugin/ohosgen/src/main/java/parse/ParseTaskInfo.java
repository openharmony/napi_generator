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

package parse;

/**
 * <h3>类名：该类用于xxx</h3>
 * description info of parser
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ParseTaskInfo {
    private String status;
    private String message;
    private int lanType;
    private int parseType;
    private String jsonData;
    private int progress;
    private int total;

    /**
     * 构造函数
     */
    public ParseTaskInfo() {}

    /**
     * 有参数构造函数
     *
     * @param vs 状态
     * @param vm 内容
     * @param vp 进度
     * @param vt 总数
     */
    public ParseTaskInfo(String vs, String vm, int vp, int vt) {
        this.status = vs;
        this.message = vm;
        this.progress = vp;
        this.total = vt;
    }

    public ParseTaskInfo(String vs, String vm, int ct, String jd) {
        this.status = vs;
        this.message = vm;
        this.lanType = ct;
        this.jsonData = jd;
    }

    /**
     * 设置状态
     *
     * @param vs 状态
     */
    public void setStatus(String vs) {
        status = vs;
    }

    /**
     * 读取状态
     *
     * @return 状态
     */
    public String getStatus() {
        return status;
    }

    /**
     * 设置消息
     *
     * @param vm 消息
     */
    public void setMessage(String vm) {
        message = vm;
    }

    /**
     * 读取消息
     *
     * @return 消息
     */
    public String getMessage() {
        return message;
    }

    /**
     * 获取解析类型
     *
     * @return 解析类型
     */
    public int getLanType() {
        return lanType;
    }

    /**
     * 设置 解析类型
     *
     * @param lanType 解析类型
     */
    public void setLanType(int lanType) {
        this.lanType = lanType;
    }

    /**
     * 获取 json data
     *
     * @return jsonData 解析数据
     */
    public String getJsonData() {
        return jsonData;
    }

    /**
     * 设置 json data
     *
     * @param jsonData 解析数据
     */
    public void setJsonData(String jsonData) {
        this.jsonData = jsonData;
    }

    /**
     * 设置进度
     *
     * @param vp 进度
     */
    public void setProgress(int vp) {
        progress = vp;
    }

    /**
     * 读取进度
     *
     * @return 进度
     */
    public int getProgress() {
        return progress;
    }

    /**
     * 设置总数
     *
     * @param vt 总数
     */
    public void setTotal(int vt) {
        total = vt;
    }

    /**
     * 读取总数
     *
     * @return 总数
     */
    public int getTotal() {
        return total;
    }

    /**
     * 读取解析类型
     *
     * @return 解析类型
     */
    public int getParseType() {
        return parseType;
    }

    /**
     * 读取解析类型
     *
     * @param parseType 解析类型
     */
    public void setParseType(int parseType) {
        this.parseType = parseType;
    }
}
