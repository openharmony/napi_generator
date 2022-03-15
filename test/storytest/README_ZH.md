# NAPI框架生成工具story测试

## 概述
为了将一个大的特性划分成小颗粒度的功能块，根据功能点确定输入和输出以便获得快速反馈。需要编写story测试对功能进行用例验证。
本文主要介绍NAPI框架代码生成工具story功能测试使用指导。

## 目录

	├── napi_generator             # NAPI框架代码生成工具
	│   ├── src                    # 工具源码
	│   ├── ...                    # 其他文件夹
	│   ├── test                   # 测试用例
	|   |   ├── storytest          # story测试代码
	│   |   |   ├── test_direct    # 同步直接返回函数用例
	│   |   |   ├── test_interface # ts文件输入interface测试用例
	│   |   |   ├── test_namespace # ts文件输入namespace测试用例
	│   |   |   ├── test_number    # ts文件输入number测试用例
	│   |   |   ├── test_string    # ts文件输入string测试用例
	│   |   |   └── test.py        # 用例执行脚本
	|   |   └── unittest  # 单元测试用例
	 
## 软件环境准备

系统：建议Ubuntu 20.04

依赖版本：python3.8


步骤一：

napi_generator目录下安装以下依赖：

1.下载node_modules包。

	npm i 

2.标准输入输出函数的头文件。

	npm i stdio

3.将源码形式的node modules编译成适应于本地环境的、编译好的node modules。

	npm i node-gyp

步骤二：

napi_generator/src目录下安装以下依赖：

1.下载node_modules包。

	npm i
  
2.标准输入输出函数的头文件。

	npm i stdio 

3.将源码形式的node modules编译成适应于本地环境的、编译好的node modules。

	npm i node-gyp

## 使用说明

进入napi_generator/目录。

1.执行所有用例，命令为：

	python test/storytest/test.py

2.执行单个用例,如test_interface，命令为：

	python test/storytest/test.py test_interface


## 查看结果

红色：用例执行失败，代表修改的代码有bug或者用例的输出发生变化，需要修复bug或修改用例。

绿色：用例执行成功。


## 相关仓

暂无
