# unit_test

## 概述
本文主要介绍NAPI框架代码生成工具unit单元测试使用指导。

## 目录

```
├── napi_generator             # NAPI框架代码生成工具
│   ├── src                    # 工具源码
│   ├── ...                    # 其他文件夹
│   ├── test                   # 测试用例
|   |   ├── unittest
│   |   |   ├── analyze.test.js              #执行gen/analyze目录下函数测试用例 
│   |   |   ├── basic.d.ts*                  #基础函数模板
│   |   |   ├── extend.test.js*              #执行gen/extend目录下函数测试用例 
│   |   |   ├── generate.test.js*            #执行gen/generate目录下函数测试用例 
│   |   |   ├── napi_generator.test.js*      #执行全部测试用例
│   |   |   ├── '@ohos.input_sample.d.ts'*   #接口、函数等定义模板
│   |   |   └── tools.test.js*               #执行gen/tools目录下函数测试用例 
|   |   └── storytest  # 功能测试用例
 
```
### code目录源码介绍
此目录为NAPI框架代码生成工具对应的源码，开发者可基于此代码进行二次开发。

## 软件环境准备

系统：建议Ubuntu 20.04

依赖版本：python3.8


步骤一：
napi_generator目录下安装以下依赖：

1.npm i              #下载node_modules包

2.npm i rewire       #导入模块

步骤二：
napi_generator/src目录下安装以下依赖：

1.npm i               #下载node_modules包  



## 使用说明

进入napi_generator/目录：

1.执行所有用例：命令为python npx mocha test/unittest/

2.执行单个目录用例,如analyze，命令为npx mocha test/unittest/analyze.test.js


## 查看结果

红色：用例执行失败
绿色：用例执行成功


## 相关仓

暂无
