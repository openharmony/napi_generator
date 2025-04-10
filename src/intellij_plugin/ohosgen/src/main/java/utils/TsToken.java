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

import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript token
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */

public class TsToken {
    /**
     * optional token
     */
    public static final String TS_TOKEN_OPTIONAL = "optional";

    /**
     * required token
     */
    public static final String TS_TOKEN_REQUIRED = "required";

    /**
     * rest parameter token
     */
    public static final String TS_TOKEN_REST_PARAM = "rest_param";

    /**
     * enum token
     */
    public static final String TS_TOKEN_ENUM = "enum";

    /**
     * class token
     */
    public static final String TS_TOKEN_CLASS = "class";

    /**
     * extends token
     */
    public static final String TS_TOKEN_EXTENDS = "extends";

    /**
     * super token
     */
    public static final String TS_TOKEN_SUPER = "super";

    /**
     * const token
     */
    public static final String TS_TOKEN_CONST = "const";

    /**
     * export token
     */
    public static final String TS_TOKEN_EXPORT = "export";

    /**
     * import token
     */
    public static final String TS_TOKEN_IMPORT = "import";

    /**
     * implements token
     */
    public static final String TS_TOKEN_IMPLEMENT = "implements";

    /**
     * let token
     */
    public static final String TS_TOKEN_LET = "let";

    /**
     * private token
     */
    public static final String TS_TOKEN_PRIVATE = "private";

    /**
     * public token
     */
    public static final String TS_TOKEN_PUBLIC = "public";

    /**
     * interface token
     */
    public static final String TS_TOKEN_INTERFACE = "interface";

    /**
     * package token
     */
    public static final String TS_TOKEN_PACKAGE = "package";

    /**
     * protected token
     */
    public static final String TS_TOKEN_PROTECTED = "protected";

    /**
     * static token
     */
    public static final String TS_TOKEN_STATIC = "static";

    /**
     * any token
     */
    public static final String TS_TOKEN_ANY = "any";

    /**
     * number token
     */
    public static final String TS_TOKEN_NUMBER = "number";

    /**
     * never token
     */
    public static final String TS_TOKEN_NEVER = "never";

    /**
     * boolean token
     */
    public static final String TS_TOKEN_BOOLEAN = "boolean";

    /**
     * string token
     */
    public static final String TS_TOKEN_STRING = "string";

    /**
     * unique token
     */
    public static final String TS_TOKEN_UNIQUE = "unique";

    /**
     * symbol token
     */
    public static final String TS_TOKEN_SYMBOL = "symbol";

    /**
     * undefined token
     */
    public static final String TS_TOKEN_UNDEFINED = "undefined";

    /**
     * object token
     */
    public static final String TS_TOKEN_OBJECT = "object";

    /**
     * of token
     */
    public static final String TS_TOKEN_OF = "of";

    /**
     * keyof token
     */
    public static final String TS_TOKEN_KEYOF = "keyof";

    /**
     * type token
     */
    public static final String TS_TOKEN_TYPE = "type";

    /**
     * constructor token
     */
    public static final String TS_TOKEN_CONSTRUCTOR = "constructor";

    /**
     * namespace token
     */
    public static final String TS_TOKEN_NAMESPACE = "namespace";

    /**
     * require token
     */
    public static final String TS_TOKEN_REQUIRE = "require";

    /**
     * module token
     */
    public static final String TS_TOKEN_MODULE = "module";

    /**
     * declare token
     */
    public static final String TS_TOKEN_DECLARE = "declare";

    /**
     * abstract token
     */
    public static final String TS_TOKEN_ABSTRACT = "abstract";

    /**
     * IS token
     */
    public static final String TS_TOKEN_IS = "is";

    /**
     * null token
     */
    public static final String TS_TOKEN_NULL = "null";

    /**
     * break token
     */
    public static final String TS_TOKEN_BREAK = "break";

    /**
     * do token
     */
    public static final String TS_TOKEN_DO = "do";

    /**
     * instanceof token
     */
    public static final String TS_TOKEN_INSTANCEOF = "instanceof";

    /**
     * typeof token
     */
    public static final String TS_TOKEN_TYPEOF = "typeof";

    /**
     * case token
     */
    public static final String TS_TOKEN_CASE = "case";

    /**
     * else token
     */
    public static final String TS_TOKEN_ELSE = "else";

    /**
     * new token
     */
    public static final String TS_TOKEN_NEW = "new";

    /**
     * var token
     */
    public static final String TS_TOKEN_VAR = "var";

    /**
     * catch token
     */
    public static final String TS_TOKEN_CATCH = "catch";

    /**
     * finally token
     */
    public static final String TS_TOKEN_FINALLY = "finally";

    /**
     * return token
     */
    public static final String TS_TOKEN_RETURN = "return";

    /**
     * void token
     */
    public static final String TS_TOKEN_VOID = "void";

    /**
     * continue token
     */
    public static final String TS_TOKEN_CONTINUE = "continue";

    /**
     * for token
     */
    public static final String TS_TOKEN_FOR = "for";

    /**
     * switch token
     */
    public static final String TS_TOKEN_SWITCH = "switch";

    /**
     * while token
     */
    public static final String TS_TOKEN_WHILE = "while";

    /**
     * debugger token
     */
    public static final String TS_TOKEN_DEBUGGER = "debugger";

    /**
     * function token
     */
    public static final String TS_TOKEN_FUNCTION = "function";

    /**
     * this token
     */
    public static final String TS_TOKEN_THIS = "this";

    /**
     * with token
     */
    public static final String TS_TOKEN_WITH = "with";

    /**
     * default token
     */
    public static final String TS_TOKEN_DEFAULT = "default";

    /**
     * if token
     */
    public static final String TS_TOKEN_IF = "if";

    /**
     * throw token
     */
    public static final String TS_TOKEN_THROW = "throw";

    /**
     * delete token
     */
    public static final String TS_TOKEN_DELETE = "delete";

    /**
     * in token
     */
    public static final String TS_TOKEN_IN = "in";

    /**
     * try token
     */
    public static final String TS_TOKEN_TRY = "try";

    /**
     * as token
     */
    public static final String TS_TOKEN_AS = "as";

    /**
     * from token
     */
    public static final String TS_TOKEN_FROM = "from";

    /**
     * readonly token
     */
    public static final String TS_TOKEN_READONLY = "readonly";

    /**
     * async token
     */
    public static final String TS_TOKEN_ASYNC = "async";

    /**
     * await token
     */
    public static final String TS_TOKEN_AWAIT = "await";

    /**
     * yield token
     */
    public static final String TS_TOKEN_YIELD = "yield";

    /**
     * less than token
     */
    public static final String TS_TOKEN_LessThan = "<";

    /**
     * more than token
     */
    public static final String TS_TOKEN_MoreThan = ">";

    /**
     * less than equals token
     */
    public static final String TS_TOKEN_LessThanEquals = "<=";

    /**
     * greater than equals token
     */
    public static final String TS_TOKEN_GreaterThanEquals = ">=";

    /**
     * equals token
     */
    public static final String TS_TOKEN_Equals = "==";

    /**
     * not equals token
     */
    public static final String TS_TOKEN_NotEquals = "!=";

    /**
     * identity equals token
     */
    public static final String TS_TOKEN_IdentityEquals = "===";

    /**
     * identity not equals token
     */
    public static final String TS_TOKEN_IdentityNotEquals = "!==";

    /**
     * bit and  token
     */
    public static final String TS_TOKEN_BitAnd = "&";

    /**
     * BitXOr token
     */
    public static final String TS_TOKEN_BitXOr = "^";

    /**
     * BitOr token
     */
    public static final String TS_TOKEN_BitOr = "|";

    /**
     * And token
     */
    public static final String TS_TOKEN_And= "&&";

    /**
     * Or token
     */
    public static final String TS_TOKEN_Or = "||";

    /**
     * MultiplyAssign token
     */
    public static final String TS_TOKEN_MULTIPLYASSIGN = "*=";

    /**
     * DivideAssign token
     */
    public static final String TS_TOKEN_DIVIDEASSIGN = "/=";

    /**
     * ModulusAssign token
     */
    public static final String TS_TOKEN_MODULUSASSIGN = "%=";

    /**
     * PlusAssign token
     */
    public static final String TS_TOKEN_PLUSASSIGN = "+=";

    /**
     * MinusAssign token
     */
    public static final String TS_TOKEN_MIMUSASSIGN = "-=";

    /**
     * LeftShiftArithmeticAssign token
     */
    public static final String TS_TOKEN_LEFTSHIFTARITHMETICASSIGN = "<<=";

    /**
     * RightShiftArithmeticAssign token
     */
    public static final String TS_TOKEN_RIGHTSHIFTARITHMETICASSIGN = ">>=";

    /**
     * RightShiftLogicalAssign token
     */
    public static final String TS_TOKEN_RIGHTSHIFTLOGICALASSIGN = ">>>=";

    /**
     * BitAndAssign token
     */
    public static final String TS_TOKEN_BITANDASSIGN = "&=";

    /**
     * BitXorAssign token
     */
    public static final String TS_TOKEN_BITXORASSIGN = "^=";

    /**
     * BitOrAssign token
     */
    public static final String TS_TOKEN_BITORASSIGN = "|=";

    /**
     * PowerAssign token
     */
    public static final String TS_TOKEN_POWERASSIGN = "**=";

    /**
     * NullishCoalescingAssign token
     */
    public static final String TS_TOKEN_NULLISHCOALESCINGASSIGN = "??=";

    /**
     * await token
     */
    public static final String TS_TOKEN_ARROW = "=>";

    /**
     * bracket token
     */
    public static final String TS_TOKEN_BRACKET = "[]";

    /**
     * key list
     */
    public static final List<String> TS_TOKEN_LIST = List.of(
        TS_TOKEN_OPTIONAL,
        TS_TOKEN_REQUIRED,
        TS_TOKEN_REST_PARAM,
        TS_TOKEN_ENUM,
        TS_TOKEN_CLASS,
        TS_TOKEN_EXTENDS,
        TS_TOKEN_SUPER,
        TS_TOKEN_CONST,
        TS_TOKEN_EXPORT,
        TS_TOKEN_IMPORT,
        TS_TOKEN_IMPLEMENT,
        TS_TOKEN_LET,
        TS_TOKEN_PRIVATE,
        TS_TOKEN_PUBLIC,
        TS_TOKEN_INTERFACE,
        TS_TOKEN_PACKAGE,
        TS_TOKEN_PROTECTED,
        TS_TOKEN_STATIC,
        TS_TOKEN_ANY,
        TS_TOKEN_NUMBER,
        TS_TOKEN_NEVER,
        TS_TOKEN_BOOLEAN,
        TS_TOKEN_STRING,
        TS_TOKEN_UNIQUE,
        TS_TOKEN_SYMBOL,
        TS_TOKEN_UNDEFINED,
        TS_TOKEN_OBJECT,
        TS_TOKEN_OF,
        TS_TOKEN_KEYOF,
        TS_TOKEN_TYPE,
        TS_TOKEN_CONSTRUCTOR,
        TS_TOKEN_NAMESPACE,
        TS_TOKEN_REQUIRE,
        TS_TOKEN_MODULE,
        TS_TOKEN_DECLARE,
        TS_TOKEN_ABSTRACT,
        TS_TOKEN_IS,
        TS_TOKEN_NULL,
        TS_TOKEN_BREAK,
        TS_TOKEN_DO,
        TS_TOKEN_INSTANCEOF,
        TS_TOKEN_TYPEOF,
        TS_TOKEN_CASE,
        TS_TOKEN_ELSE,
        TS_TOKEN_NEW,
        TS_TOKEN_VAR,
        TS_TOKEN_CATCH,
        TS_TOKEN_FINALLY,
        TS_TOKEN_RETURN,
        TS_TOKEN_VOID,
        TS_TOKEN_CONTINUE,
        TS_TOKEN_FOR,
        TS_TOKEN_SWITCH,
        TS_TOKEN_WHILE,
        TS_TOKEN_DEBUGGER,
        TS_TOKEN_FUNCTION,
        TS_TOKEN_THIS,
        TS_TOKEN_WITH,
        TS_TOKEN_DEFAULT,
        TS_TOKEN_IF,
        TS_TOKEN_THROW,
        TS_TOKEN_DELETE,
        TS_TOKEN_IN,
        TS_TOKEN_TRY,
        TS_TOKEN_AS,
        TS_TOKEN_FROM,
        TS_TOKEN_READONLY,
        TS_TOKEN_ASYNC,
        TS_TOKEN_AWAIT,
        TS_TOKEN_YIELD,
        TS_TOKEN_LessThan,
        TS_TOKEN_MoreThan,
        TS_TOKEN_LessThanEquals,
        TS_TOKEN_GreaterThanEquals,
        TS_TOKEN_Equals,
        TS_TOKEN_NotEquals,
        TS_TOKEN_IdentityEquals,
        TS_TOKEN_IdentityNotEquals,
        TS_TOKEN_BitAnd,
        TS_TOKEN_BitXOr,
        TS_TOKEN_BitOr,
        TS_TOKEN_And,
        TS_TOKEN_Or,
        TS_TOKEN_MULTIPLYASSIGN,
        TS_TOKEN_DIVIDEASSIGN,
        TS_TOKEN_MODULUSASSIGN,
        TS_TOKEN_PLUSASSIGN,
        TS_TOKEN_MIMUSASSIGN,
        TS_TOKEN_LEFTSHIFTARITHMETICASSIGN,
        TS_TOKEN_RIGHTSHIFTARITHMETICASSIGN,
        TS_TOKEN_RIGHTSHIFTLOGICALASSIGN,
        TS_TOKEN_BITANDASSIGN,
        TS_TOKEN_BITXORASSIGN,
        TS_TOKEN_BITORASSIGN,
        TS_TOKEN_POWERASSIGN,
        TS_TOKEN_NULLISHCOALESCINGASSIGN,
        TS_TOKEN_ARROW
    );

    /**
     * var key list
     */
    public static final List<String> TS_VAR_TYPE_LIST = List.of(
            TS_TOKEN_ANY,
            TS_TOKEN_NUMBER,
            TS_TOKEN_NEVER,
            TS_TOKEN_BOOLEAN,
            TS_TOKEN_STRING
    );

    /**
     * 判断是否是关键字
     *
     * @param key 字符串
     * @return 若是ts关键字返回true
     */
    public static boolean isTsToken(String key) {
        return TsToken.TS_TOKEN_LIST.contains(key);
    }

    /**
     * 判断是否为变量类型
     *
     * @param key 字符串
     * @return 若是变量类型返回true
     */
    public static boolean isTsVarType(String key) {
        return TsToken.TS_VAR_TYPE_LIST.contains(key);
    }

}
