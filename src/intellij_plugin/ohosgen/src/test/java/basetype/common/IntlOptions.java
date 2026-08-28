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

package basetype.common;

/**
 * Intl.NumberFormatOptions 的 Java 等价选项对象，
 * 支撑 toLocaleString 的分组/补零/小数位/百分比/货币格式语义。
 *
 * @since 2026-08-26
 */
public class IntlOptions {

    /**
     * 整数部分最小位数（0 表示未设置）。
     */
    private int minimumIntegerDigits = 0;

    /**
     * 小数部分最小位数（-1 表示未设置）。
     */
    private int minimumFractionDigits = -1;

    /**
     * 小数部分最大位数（-1 表示未设置）。
     */
    private int maximumFractionDigits = -1;

    /**
     * 有效数字位数（0 表示未设置）。
     */
    private int minimumSignificantDigits = 0;

    /**
     * 最大有效数字位数（0 表示未设置）。
     */
    private int maximumSignificantDigits = 0;

    /**
     * 数字表示法（"" / "scientific" / "engineering"）。
     */
    private String notation = "";

    /**
     * 紧凑展示方式（"" / "short" / "long"）。
     */
    private String compactDisplay = "";

    /**
     * 是否使用千分位分组。
     */
    private boolean useGrouping = true;

    /**
     * 格式风格（"" / "percent" / "currency"）。
     */
    private String style = "";

    /**
     * 货币代码（如 USD/EUR/GBP）。
     */
    private String currency = "";

    /**
     * 货币展示方式（"" / "symbol" / "code"）。
     */
    private String currencyDisplay = "";

    /**
     * 区域匹配策略（ArkTS ToLocaleStringOptions，不影响数值格式）。
     */
    private String localeMatcher = "";

    /**
     * 获取整数部分最小位数（0 表示未设置）。
     *
     * @return minimumIntegerDigits 当前值。
     */
    public int getMinimumIntegerDigits() {
        return minimumIntegerDigits;
        }

    /**
     * 设置整数部分最小位数（0 表示未设置）。
     *
     * @param minimumIntegerDigits minimumIntegerDigits 新值。
     */
    public void setMinimumIntegerDigits(int minimumIntegerDigits) {
        this.minimumIntegerDigits = minimumIntegerDigits;
        }

    /**
     * 获取小数部分最小位数（-1 表示未设置）。
     *
     * @return minimumFractionDigits 当前值。
     */
    public int getMinimumFractionDigits() {
        return minimumFractionDigits;
        }

    /**
     * 设置小数部分最小位数（-1 表示未设置）。
     *
     * @param minimumFractionDigits minimumFractionDigits 新值。
     */
    public void setMinimumFractionDigits(int minimumFractionDigits) {
        this.minimumFractionDigits = minimumFractionDigits;
        }

    /**
     * 获取小数部分最大位数（-1 表示未设置）。
     *
     * @return maximumFractionDigits 当前值。
     */
    public int getMaximumFractionDigits() {
        return maximumFractionDigits;
        }

    /**
     * 设置小数部分最大位数（-1 表示未设置）。
     *
     * @param maximumFractionDigits maximumFractionDigits 新值。
     */
    public void setMaximumFractionDigits(int maximumFractionDigits) {
        this.maximumFractionDigits = maximumFractionDigits;
        }

    /**
     * 获取有效数字最小位数（0 表示未设置）。
     *
     * @return minimumSignificantDigits 当前值。
     */
    public int getMinimumSignificantDigits() {
        return minimumSignificantDigits;
        }

    /**
     * 设置有效数字最小位数（0 表示未设置）。
     *
     * @param minimumSignificantDigits minimumSignificantDigits 新值。
     */
    public void setMinimumSignificantDigits(int minimumSignificantDigits) {
        this.minimumSignificantDigits = minimumSignificantDigits;
        }

    /**
     * 获取有效数字最大位数（0 表示未设置）。
     *
     * @return maximumSignificantDigits 当前值。
     */
    public int getMaximumSignificantDigits() {
        return maximumSignificantDigits;
        }

    /**
     * 设置有效数字最大位数（0 表示未设置）。
     *
     * @param maximumSignificantDigits maximumSignificantDigits 新值。
     */
    public void setMaximumSignificantDigits(int maximumSignificantDigits) {
        this.maximumSignificantDigits = maximumSignificantDigits;
        }

    /**
     * 获取记数法（standard/scientific/compact 等）。
     *
     * @return notation 当前值。
     */
    public String getNotation() {
        return notation;
        }

    /**
     * 设置记数法（standard/scientific/compact 等）。
     *
     * @param notation notation 新值。
     */
    public void setNotation(String notation) {
        this.notation = notation;
        }

    /**
     * 获取compact 记数法的显示风格。
     *
     * @return compactDisplay 当前值。
     */
    public String getCompactDisplay() {
        return compactDisplay;
        }

    /**
     * 设置compact 记数法的显示风格。
     *
     * @param compactDisplay compactDisplay 新值。
     */
    public void setCompactDisplay(String compactDisplay) {
        this.compactDisplay = compactDisplay;
        }

    /**
     * 获取是否启用千分位分组。
     *
     * @return useGrouping 当前值。
     */
    public boolean getUseGrouping() {
        return useGrouping;
        }

    /**
     * 设置是否启用千分位分组。
     *
     * @param useGrouping useGrouping 新值。
     */
    public void setUseGrouping(boolean useGrouping) {
        this.useGrouping = useGrouping;
        }

    /**
     * 获取格式样式（currency/percent/unit 等）。
     *
     * @return style 当前值。
     */
    public String getStyle() {
        return style;
        }

    /**
     * 设置格式样式（currency/percent/unit 等）。
     *
     * @param style style 新值。
     */
    public void setStyle(String style) {
        this.style = style;
        }

    /**
     * 获取货币代码（ISO 4217）。
     *
     * @return currency 当前值。
     */
    public String getCurrency() {
        return currency;
        }

    /**
     * 设置货币代码（ISO 4217）。
     *
     * @param currency currency 新值。
     */
    public void setCurrency(String currency) {
        this.currency = currency;
        }

    /**
     * 获取货币显示方式。
     *
     * @return currencyDisplay 当前值。
     */
    public String getCurrencyDisplay() {
        return currencyDisplay;
        }

    /**
     * 设置货币显示方式。
     *
     * @param currencyDisplay currencyDisplay 新值。
     */
    public void setCurrencyDisplay(String currencyDisplay) {
        this.currencyDisplay = currencyDisplay;
        }

    /**
     * 获取区域匹配策略（不影响数值格式）。
     *
     * @return localeMatcher 当前值。
     */
    public String getLocaleMatcher() {
        return localeMatcher;
        }

    /**
     * 设置区域匹配策略（不影响数值格式）。
     *
     * @param localeMatcher localeMatcher 新值。
     */
    public void setLocaleMatcher(String localeMatcher) {
        this.localeMatcher = localeMatcher;
        }
    }
