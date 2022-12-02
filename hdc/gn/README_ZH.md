# GN脚本转换工具

## 简介

本文主要介绍gn脚本生成工具，它可以根据三方库的CMakeLists.txt文件，编译转换生成BUILD.gn脚本文件。当前OpenHarmony源码只支持BUILD.gn文件编译，开发者无法移植CMakeLists.txt编译方式的三方库到OpenHarmony中。此时，开发者可使用GN脚本转换工具，根据CMakeLists.txt文件生成BUILD.gn脚本文件，降低移植难度，提高开发效率。目前工具支持可执行文件、VS Code插件、IntelliJ插件三种入口。

更多工具的架构和实现原理详情，可以左键单击以下链接了解：

[工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/hdc/gn/docs/INSTRUCTION_ZH.md)

	├── napi_generator                           # NAPI框架代码生成工具
	│   ├── ...                                  # 其他文档
	│   ├── hdc
	│   │   ├── ...                              # 其他工具
	│   │   ├── gn                               # GN脚本转换工具
	│   │   |   ├── gn_vs_plugin                 # VS Code插件源码
	│   │   |   ├── gn_IntelliJ_plugin           # Intellij插件源码
	│   │   |   ├── gn-gen                       # GN工具源码
	│   │   |   |   ├── main.js                  # 工具源码入口
	│   │   |   |   ├── package.json             # package.json文件
	│   │   |   |   |── src                      
	│   │   |   |   |   |── analyze_cmake.js     # cmake解析器
	│   │   |   |   |   |── analyze_command.js   # command解析器
	│   │   |   |   |   |── analyze_make.js      # make解析器
	│   │   |   |   |   |── generate_gn.js       # 生成器
	│   │   |   |   |   |── logger.js            # log日志
	│   │   |   |   |   |── tool.js              # 公共模块代码

## 约束
系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

### 使用对象

系统开发者
       
### 使用场景

1) 移植CMakeLists.txt编译方式的三方库到OpenHarmony源码中。

### 工具使用

工具有三种类型，分别是可执行文件、VS Code插件、IntelliJ插件。其中的可执行文件可根据工具使用者的开发环境选择，支持Windows，Linux和Mac。可执行文件、IntelliJ插件、VS Code插件下载路径如下：

[下载链接](暂无)

具体的工具使用步骤，可以左键单击以下链接了解：

[工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/hdc/gn/docs/INSTRUCTION_ZH.md)

### 工具输出

根据使用者指定三方库的CMakeLists.txt文件，工具会输出对应的BUILD.gn文件。为了方便使用者快速上手工具，可供测试的三方库项目目录如下：

	harmony@Ubuntu-64:~/OpenHarmony/third_party/test_project$ ls
	CMakeLists.txt  main.c

CMakeLists.txt文件内容如下：

	CMAKE_MINIMUM_REQUIRED(VERSION 2.6)
	PROJECT(hello)
	AUX_SOURCE_DIRECTORY(. SRC_LIST)
	ADD_EXECUTABLE(hello ${SRC_LIST})

在linux环境下的，根据输入三方库项目的CMakeLists.txt文件,生成的输出文件，如下所示：

	harmony@Ubuntu-64:~/OpenHarmony/third_party/test_project$ ls
	build_tmp  CMakeLists.txt  main.c
	harmony@Ubuntu-64:~/OpenHarmony/third_party/test_project$ cd build_tmp/
	harmony@Ubuntu-64:~/OpenHarmony/third_party/test_project/build_tmp$ ls
	BUILD.gn  CMakeCache.txt  CMakeFiles  cmake_install.cmake  hello  Makefile  ohos.toolchain.cmake

其中生成的BUILD.gn文件，内容如下所示：

![](./figures/build_file.png)

## 工具开发说明

### 对象

工具的开发者

### 开发场景

若当前工具的功能已经不能满足开发者的全部需求，则开发者可以基于已有的源码对工具进行二次开发，来增强工具的能力，编译打包生成自定义的可执行文件和插件。

### 开发步骤

开发者可以根据如下的步骤来完成对工具的开发：

 [工具开发说明](https://gitee.com/openharmony/napi_generator/tree/master/hdc/gn/docs/DEVELOP_ZH.md)

## 版本说明

暂无  

## FAQ

  [FAQ](https://gitee.com/openharmony/napi_generator/tree/master/hdc/gn/FAQ.md)

## 参与贡献

暂无

## 相关仓

暂无
