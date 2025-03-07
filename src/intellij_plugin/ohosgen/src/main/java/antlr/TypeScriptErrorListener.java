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

package antlr;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.IntervalSet;
/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript error listener
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeScriptErrorListener extends BaseErrorListener {
    @Override
    public void syntaxError(Recognizer<?, ?> recognizer,
                            Object offendingSymbol,
                            int line,
                            int charPositionInLine,
                            String msg,
                            RecognitionException e) {
        System.err.println("syntax error");
        System.out.println("syntax error");
        // 输出错误位置和消息
        String errorHeader = String.format("语法错误@行%d:%d - ", line, charPositionInLine + 1);
        String errorDetail = String.format("符号 '%s' 无效，预期: %s",
                ((Token) offendingSymbol).getText(),
                getExpectedTokens(recognizer, e));
        System.err.println(errorHeader + errorDetail + " | 错误详情: " + msg);
    }

    private String getExpectedTokens(Recognizer<?, ?> recognizer, RecognitionException e) {
        if (e == null) return "未知预期符号";
        IntervalSet expectedTokens = e.getExpectedTokens();
        return expectedTokens.toString(recognizer.getVocabulary());
    }
}