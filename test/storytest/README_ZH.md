# story_test

## 概述
本文主要介绍NAPI框架代码生成工具story功能测试使用指导。

## 目录

```
├── napi_generator             # NAPI框架代码生成工具
│   ├── src                    # 工具源码
│   ├── ...                    # 其他文件夹
│   ├── test                   # 测试用例
|   |   ├── storytest
│   |   |   ├── test_direct    # 同步直接返回函数用例
│   |   |   ├── test_interface # ts文件输入interface测试用例
│   |   |   ├── test_namespace # ts文件输入namespace测试用例
│   |   |   ├── test_number    # ts文件输入number测试用例
│   |   |   ├── test_string    # ts文件输入string测试用例
│   |   |   └── test.py        # 用例执行脚本
|   |   └── unittest  # 单元测试用例
 
```
### code目录源码介绍
此目录为NAPI框架代码生成工具对应的源码，开发者可基于此代码进行二次开发。

## 软件环境准备

系统：建议Ubuntu 20.04

依赖版本：python3.8


步骤一：
napi_generator目录下安装以下依赖：

1.npm i               #下载node_modules包
 
2.npm i stdio         #标准输入输出函数的头文件

3.npm i node-gyp      #将源码形式的node modules编译成适应于本地环境的、编译好的node modules

步骤二：
napi_generator/src目录下安装以下依赖：

1.npm i               #下载node_modules包
  
2.npm i stdio         #标准输入输出函数的头文件 

3.npm i node-gyp      #将源码形式的node modules编译成适应于本地环境的、编译好的node modules



## 使用说明

进入napi_generator/目录：

1.执行所有用例：命令为python test/storytest/test.py

2.执行单个用例,如test_interface，命令为python test/storytest/test.py test_interface


## 查看结果

红色：用例执行失败
绿色：用例执行成功


## 相关仓

暂无
