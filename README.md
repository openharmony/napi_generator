# Readme

## 简介

napi_generator仓包含以下工具：NAPI框架代码生成工具（dts2cpp）可以根据用户指定路径下的ts(typescript)接口文件一键生成NAPI框架代码、业务代码框架、GN文件等。TS接口生成工具（h2dts）可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件。GN脚本生成工具（cmake2gn），它可以根据三方库的CMakeLists.txt文件，编译转换生成BUILD.gn脚本文件。SERVICE框架生成工具（h2sa），它可以根据一个定义远程方法的.h头文件，生成整个Service框架的代码，包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。NATIVE生成工具（h2dtscpp），它可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件、NAPI框架代码、和自动化测试用例代码。dts2ets工具，它可以根据用户指定路径下的ts(typescript)接口文件生成ets页面代码。API扫描工具，它可以扫描三方库中包含OpenHarmony源码不包含的接口，并输出result.xlsx文档。

## 目录

```
├── napi_generator                                      # 工具集
│   ├── docs                                            # 工具索引文档
│   │   ├── readme.md                                   # 所有工具 readme 索引
│   │   ├── develop.md                                  # 工具设计文档索引
│   │   ├── usage.md                                    # 工具使用文档索引 
│   │   ├── log
│   │   │   ├── meeting.md                              # 会议纪要
│   │   │   ├── release-notes.md                        # 工具版本说明和规划索引      
│   ├── src                                             # 工具源码
│   │   ├── cli                                         # 脚手架源码               
│   │   |   ├── cmake2gn                                # gn脚本生成工具
│   │   |   |   ├── docs
│   │   |   |   |   ├── figures                         # 文档图片资源
│   │   |   |   |   ├── guide                           # 开发文档
│   │   |   |   |   ├── usage                           # 使用文档
│   │   |   |   |   ├── release-notes                   # 版本说明文档
│   │   |   |   ├── src                                 # 源码
│   │   |   |   ├── README_ZH.md
│   │   |   |── dts2cpp                                 # napi框架生成工具
│   │   |   |   ├── docs
│   │   |   |   |   ├── figures                         # 文档图片资源
│   │   |   |   |   ├── guide                           # 开发文档
│   │   |   |   |   ├── usage                           # 使用文档
│   │   |   |   |   ├── release-notes                   # 版本说明文档
│   │   |   |   |   ├── requirement                     # roadmap.md
│   │   |   |   ├── src                                 # 源码
│   │   |   |   ├── README_ZH.md
│   │   |   |── dts2ets                                 # ets页面生成工具
│   │   |   |   ├── appCodeGen                          # 源码
│   │   |   |── h2dts                                   # ts生成工具
│   │   |   |   ├── docs
│   │   |   |   |   ├── figures                         # 文档图片资源
│   │   |   |   |   ├── guide                           # 开发文档
│   │   |   |   |   ├── usage                           # 使用文档
│   │   |   |   |   ├── release-notes                   # 版本说明文档
│   │   |   |   |   ├── requirement                     # roadmap.md
│   │   |   |   ├── src                                 # 源码
│   │   |   |   ├── examples                            # 工具输入示例.h文件
│   │   |   |   ├── README_ZH.md
│   │   |   |── h2dtscpp                                # native生成工具
│   │   |   |   ├── docs
│   │   |   |   |   ├── figures                         # 文档图片资源
│   │   |   |   |   ├── guide                           # 开发文档
│   │   |   |   |   ├── usage                           # 使用文档
│   │   |   |   ├── src                                 # 源码
│   │   |   |   ├── README_ZH.md
│   │   |   |── h2sa                                    # service生成工具
│   │   |   |   ├── docs
│   │   |   |   |   ├── figures                         # 文档图片资源
│   │   |   |   |   ├── guide                           # 开发文档
│   │   |   |   |   ├── usage                           # 使用文档
│   │   |   |   |   ├── release-notes                   # 版本说明文档
│   │   |   |   |   ├── requirement                     # roadmap.md
│   │   |   |   ├── src                                 # 源码
│   │   |   |   ├── examples                            # 工具输入示例.h文件
│   │   |   |   ├── README_ZH.md
│   │   ├── intellij_plugin
│   │   |   ├── cmake2gn                                # gn脚本生成工具
│   │   |   |   |   ├── gn_IntelliJ_plugin              # IntelliJ插件
│   │   |   |── dts2cpp                                 # napi框架生成工具
│   │   |   |   |   ├── napi_IntelliJ_plugin            # IntelliJ插件
│   │   |   |── h2dts                                   # ts生成工具
│   │   |   |   |   ├── ts_IntelliJ_plugin              # IntelliJ插件
│   │   |   |── h2dtscpp                                # native生成工具
│   │   |   |   |   ├── native_IntelliJ_plugin          # IntelliJ插件
│   │   |   |── h2sa                                    # service生成工具
│   │   |   |   |   ├── service_IntelliJ_plugin         # IntelliJ插件
│   │   |   |── assist                                  # 统一入口插件
│   │   |   |   |   ├── assist_tools_IntelliJ_plugin    # IntelliJ插件
│   │   ├── vscode_plugin
│   │   |   ├── cmake2gn                                # gn脚本生成工具
│   │   |   |   |   ├── gn_vs_plugin                    # vs插件
│   │   |   |── dts2cpp                                 # napi框架生成工具
│   │   |   |   |   ├── napi_vs_plugin                  # vs插件
│   │   |   |── h2dts                                   # ts生成工具
│   │   |   |   |   ├── ts_vs_plugin                    # vs插件
│   │   |   |── h2sa                                    # service生成工具
│   │   |   |   |   ├── service_vs_plugin               # vs插件
│   │   |   |── assist                                  # 统一入口插件
│   │   |   |   |   ├── assist_tools_vs_plugin          # vs插件
│   │   ├── tool 
│   │   |   |── api                                     # api扫描工具
│   │   |   |   ├── api_scan_IntelliJ_plugin            # api扫描工具IntelliJ插件
│   │   |   |   ├── api_scan_vs_plugin                  # api扫描工具vs插件
│   │   |   |   ├── docs                                # 文档
│   │   |   |   ├── figures                             # 文档图片资源
│   │   |   |   ├── src                                 # api扫描工具源码
│   │   |   |   ├── FAQ.md                              
│   │   |   |   ├── README_ZH.md
│   ├── test                                            
│   │   ├── dts2cpp                                     # dts2cpp工具使用example
│   │   |   |── ts  
│   │   |   |── README.md  
│   │   ├── storytest                                   # dts2cpp工具st
│   │   ├── unittest                                    # dts2cpp工具ut
│   │   ├── debug_entry.js
│   │   ├── README_zh.md
│   ├── sample                                          # 样例
│   │   ├── napitutorials         
│   └── README.md                                       # readme             
```

## 工具介绍

所有工具相关文档介绍如下所示：
[readme索引](https://gitee.com/openharmony/napi_generator/blob/master/docs/readme.md)
[usage索引](https://gitee.com/openharmony/napi_generator/blob/master/docs/usage.md)
[develop索引](https://gitee.com/openharmony/napi_generator/blob/master/docs/develop.md)
[release-notes索引](https://gitee.com/openharmony/napi_generator/blob/master/docs/log/release-notes.md)