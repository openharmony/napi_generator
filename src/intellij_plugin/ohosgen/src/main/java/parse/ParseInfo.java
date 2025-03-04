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

    public ParseInfo() {}

    public ParseInfo(String vs, String vm, int vp, int vt) {
        status = vs;
        message = vm;
        progress = vp;
        total = vt;
    }

    public void setStatus(String vs) {
        status = vs;
    }
    public String getStatus() {
        return status;
    }
    public void setMessage(String vm) {
        message = vm;
    }
    public String getMessage() {
        return message;
    }
    public void setProgress(int vp) {
        progress = vp;
    }
    public int getProgress() {
        return progress;
    }
    public void setTotal(int vt) {
        total = vt;
    }
    public int getTotal() {
        return total;
    }
}
