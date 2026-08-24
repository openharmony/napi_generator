/*
 * Copyright (c) 2026 Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package basetype;

/**
 * Intl.NumberFormatOptions 的 Java 等价选项对象，
 * 支撑 toLocaleString 的分组/补零/小数位/百分比/货币格式语义。
 */
public class IntlOptions {

    /** 整数部分最小位数（0 表示未设置）。 */
    public int minimumIntegerDigits;

    /** 小数部分最小位数（-1 表示未设置）。 */
    public int minimumFractionDigits = -1;

    /** 小数部分最大位数（-1 表示未设置）。 */
    public int maximumFractionDigits = -1;

    /** 有效数字位数（0 表示未设置）。 */
    public int minimumSignificantDigits;

    /** 最大有效数字位数（0 表示未设置）。 */
    public int maximumSignificantDigits;

    /** 数字表示法（"" / "scientific" / "engineering"）。 */
    public String notation = "";

    /** 紧凑展示方式（"" / "short" / "long"）。 */
    public String compactDisplay = "";

    /** 是否使用千分位分组。 */
    public boolean useGrouping = true;

    /** 格式风格（"" / "percent" / "currency"）。 */
    public String style = "";

    /** 货币代码（如 USD/EUR/GBP）。 */
    public String currency = "";

    /** 货币展示方式（"" / "symbol" / "code"）。 */
    public String currencyDisplay = "";
}
