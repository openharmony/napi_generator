# h2dtscpp工具

## 简介

h2dtscpp工具即NATIVE生成工具，该工具由C++语法解释器和代码生成器两部分组成。C++语法解释器解析用户输入的.h文件内容，通过C++语法解析，将文件内容分解为类、方法、入参、成员属性等元素；代码生成器根据从语法解析器得到的这些元素，转换为对应的typescript语法的接口、方法、参数代码，生成.ts文件内容；同时通过语法解析器得到的元素，生成.h文件对应的napi框架代码和接口调用测试代码。

## 目录

```
├── napi_generator                               # NAPI框架代码生成工具
│   ├── ...                                      # 其它文档
│   ├── src
│   │   ├── ...                                 
│   │   ├── cli                                  # 命令行
│   │   |   ├── h2dtscpp/src                     # 工具源码
│   │   |   |   ├── src   
│   │   |   |   |   ├── json                     # 生成框架模板
│   │   |   |   |   ├── napiGen                  # 生成.cpp框架代码文件和.test.ets测试文件
│   │   |   |   |   ├── tools                    # 公共模块
│   │   |   |   |   ├── tsGen                    # 解析.h文件并生成.d.ts声明文件
│   │   |   |   |   ├── main.js                  # 主程序入口
│   │   |   |   ├── package.json                 # 打包配置文件
│   │   |   ├── ...                              # 其它工具
```

## 约束

系统：建议Windows 10

## 使用方法

### 使用对象

应用Native开发者

### 使用场景

应用层引入C++三方库，需增加OpenHarmony应用层接口。

### 工具输入

.h接口文件，如 [cJSON测试三方库](https://gitee.com/openharmony/napi_generator/releases/tag/测试用资源) 的cJSON.h

### 工具使用

[工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2dtscpp/docs/usage/INSTRUCTION_ZH.md)

### 工具输出

输出dts声明文件、接口测试文件.test.ets、接口实现文件.cpp文件

输出整体文件夹目录如下：

![](./docs/figures/h2dtscpp_out_example.png)

tsout文件夹下内容如下所示：

![](./docs/figures/h2dtscpp_dtsout_example.png)

testout文件夹下内容如下所示：

![](./docs/figures/h2dtscpp_testout_example.png)

cppout文件夹下内容（部分文件截图）如下所示：

![](./docs/figures/h2dtscpp_cppout_example.png)

## 版本说明

暂无

## FAQ

暂无

## 参与贡献

暂无

## 相关仓

暂无