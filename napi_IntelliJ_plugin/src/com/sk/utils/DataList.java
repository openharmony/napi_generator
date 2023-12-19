/*
 * Copyright (c) 2023 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
package com.sk.utils;

import java.util.List;

/**
 * 配置信息列表类，将每一组配置信息放入List中保存
 *
 * @author: goujingjing
 * @see: generator dialog
 * @version: v1.0.3
 * @since 2023-12-14
 */
public class DataList {
    private List<Data> dataList;

    /**
     * 构造函数
     * @param dataList 用户的配置文件信息
     * @throws log 输出异常
     */
    public DataList(List<Data> dataList) {
        this.dataList = dataList;
    }

    /**
     * 返回用户输入的所有配置业务代码的数据
     * @param void 空
     * @return 保存的dataList数据。
     * @throws log 输出异常
     */
    public List<Data> getDataList() {
        return this.dataList;
    }

    /**
     * 将用户输入的Data数据加入List中保存
     * @param  data  用户输入的配置业务代码相关数据
     * @throws log 输出异常
     */
    public void setDataListInfo(Data data) {
        this.dataList.add(data);
    }

}
