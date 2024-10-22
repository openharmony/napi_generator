# 使用说明

napi-gen插件，为OpenHarmony开发者提供的根据.h文件生成sa模板、hdf模板、dts接口文件和napi模板的插件。

## 功能：

根据.h接口文件生成hdf模板，sa模板，dts接口文件以及napi模板。

- 在OpenHarmony系统中，上层应用或服务层通过调用HDF框架提供的HDI接口，能够以一种标准化和抽象化的方式与底层硬件设备进行交互。h2hdf工具根据.h头文件自动生成整个hdf模板，包含驱动配置文件、idl接口、驱动程序driver和驱动服务框架。依赖如下：

  | 平台  | OpenHarmony源码版本     |
  | ----- | ----------------------- |
  | Linux | OpenHarmony 4.1 release |

- 当开发者为OpenHarmony系统框架开发某些功能时，有时需要将这个功能包装成一个独立的服务进程运行在系统中，为了其它应用进程能够调用此服务，开发人员需要基于系统IPC通信框架编写一套远程接口调用实现。h2sa工具根据定义远程方法的.h头文件自动生成整个sa模板，包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。依赖如下：

  | 平台  | OpenHarmony源码版本                               |
  | ----- | ------------------------------------------------- |
  | Linux | OpenHarmony  3.2 release, OpenHarmony 4.1 release |

- h2dts工具可根据.h文件一键生成对应的dts接口文件。

- h2dtscpp工具可根据.h头文件一键生成napi模板，包括dts接口声明，napi框架代码和接口测试代码。依赖如下：

  | 平台    | DecEco Studio版本         |
  | ------- | ------------------------- |
  | windows | DevEco Studio 4.1 Release |

## 使用：

- 方式1: 右键.h文件 -> OHOS_Gen

  h2sa: 

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/h2sa4-1.png)

  h2hdf: 

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/h2hdf4-1.png)

  h2dts: 

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/h2dts.png)

  h2dtscpp: 

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/h2dtscpp.png)

- 方式2: ctrl + shift + p

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ctrl_shift_p.png)

## 验证：

生成物的详细用法请参考以下链接：

h2sa: [h2sa_usage](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/usage/usage.md#生成物)

h2hdf: [h2hdf_usage](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2hdf/docs/usage.md#编译)

h2dtscpp: [h2dtscpp_usage](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2dtscpp/docs/usage/INSTRUCTION_ZH.md)

## 问题:

要追踪现有的问题或报告一个新问题，请访问 Gitee Issues 页面 https://gitee.com/openharmony/napi_generator/issues

