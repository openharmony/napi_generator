# 简介

- dts2cpp工具可以根据用户指定路径下的ts(typescript)接口文件一键生成NAPI框架代码、业务代码框架、GN文件等。

  [readme](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/dts2cpp/dts2cpp_README_ZH.md)

  [版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/dts2cpp/docs/release-notes)

- h2dts工具可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件。

  [readme](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2dts/h2dts_README_ZH.md)

  [版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2dts/docs/release-notes/ts_Gen-1.0.md) 

- cmake2gn工具可以根据三方库的CMakeLists.txt文件，编译转换生成BUILD.gn脚本文件。

  [readme](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/cmake2gn/cmake2gn_README_ZH.md)

  [版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/cmake2gn/docs/release-notes/gn-gen-release-notes-0.0.2.md)  

- h2sa工具可以根据一个定义远程方法的.h头文件，生成整个Service框架的代码，包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。

  [readme](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/h2sa_README_ZH.md)

  [版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2sa/docs/release-notes/Service-1.0.md)  

- h2dtscpp工具可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件、NAPI框架代码、和自动化测试用例代码。

  [readme](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2dtscpp/h2dtscpp_README_ZH.md)

- scan工具，它可以扫描三方库中包含OpenHarmony源码不包含的接口，并输出result.xlsx文档。

  [readme](https://gitee.com/openharmony/napi_generator/blob/master/src/tool/api/scan_README_ZH.md)