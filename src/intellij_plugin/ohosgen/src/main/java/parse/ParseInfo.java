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
public class ParseInfo {
    private String status;
    private String message;
    private int progress;
    private int total;

    /**
     * 构造函数
     */
    public ParseInfo() {}

    /**
     * 有参数构造函数
     *
     * @param vs 状态
     * @param vm 内容
     * @param vp 进度
     * @param vt 总数
     */
    public ParseInfo(String vs, String vm, int vp, int vt) {
        status = vs;
        message = vm;
        progress = vp;
        total = vt;
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
}
