# 模板生成和语言转换工具

napi-gen插件为OpenHarmony开发者提供模板生成（**sa**模板、**hdf**模板）、语言转换功能（依据**h**头文件转换生成**dts**接口文件 和  **native C++** 工程文件）、交叉编译功能（使用OpenHarmony SDK所提供的工具链编译三方库源码）。

## 功能：

- **h2hdf**：根据.h头文件自动生成hdf模板，包含：编译文件（.gn）、驱动配置文件（.hcs）、idl接口（.idl）、驱动程序和驱动服务框架。生成文件需要使用OpenHarmony源码环境编译，验证过的平台如下：

  | 平台        | 版本        |
  | ----------- | ----------- |
  | OpenHarmony | 4.1 release |

- **h2sa**：根据.h头文件自动生成sa模板，包含：编译文件（.gn）、服务配置文件（.cfg）、服务进程和子系统能力配置文件（.xml：对应 OpenHarmony 3.2 release，.json：对应 OpenHarmony 4.1 / 5.0.0 release），IPC实现（proxy：在framework层使用；stub：在service层使用）以及子系统的服务代码和接口文件。生成文件需要使用OpenHarmony源码环境编译，验证过的平台如下：

  | 平台        | 版本                                    |
  | ----------- | --------------------------------------- |
  | OpenHarmony | 3.2 release，4.1 release，5.0.0 release |

- **h2dts**：根据.h文件生成OpenHarmony的JS-API接口文件，即将C/C++方法，枚举型，结构体，类转换成ArkTS语法的代码（.d.ts）。生成文件可以当作OpenHarmony应用导入的头文件使用；

- **h2dtscpp**：根据.h头文件生成OpenHarmony Native C++应用开发模板，包括JS-API接口文件（.d.ts），CPP文件和测试代码（.ets）。生成文件对应的是DevEco Studio选择NativeC++生成的工程模板中的源码文件内容：

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/h2dtscpp_gen.png)
  
  验证过的平台如下：
  
  | 平台          | 版本                                                         |
  | ------------- | ------------------------------------------------------------ |
  | DecEco Studio | 4.1 Release（Build Version: 4.1.0.400, built on April 9, 2024） |

- **dts2cpp**：根据.d.ts文件生成OpenHarmony Native C++应用开发模板中的CPP文件。

- **OpenHarmony交叉编译**：根据三方库中Makefile或CmakeLists，调用OpenHarmony SDK中提供的工具链进行交叉编译，拼装 make 及 make install 命令并调用终端执行。生成对应于目标系统架构的二进制文件及头文件，默认安装至三方库路径下ohCrossCompile目录中。

- **snippets**： 根据 [snippetsApi](https://gitee.com/openharmony/napi_generator/tree/master/src/vscode_plugin/docs/snippetsApi.md) 中的命令提供各场景（结构体、枚举等）napi、Aki开发代码片段。

## 使用：

- **方式1**: 右键.h文件在弹出菜单里选择子菜单 **[OHOS_Gen]** 内的功能：

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/h2sa4-1.png)

  右键.d.ts文件在弹出菜单里选择子菜单 **[OHOS_Gen]** 内的功能：

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/dts2cpp_gen.png)

  对于OpenHarmony交叉编译功能，可右键三方库文件夹，在菜单中选择 **[OpenHarmony 交叉编译]** 选项，以调用交叉编译功能。该功能的详细用法请参考：[OpenHarmony交叉编译功能使用帮助文档](https://gitee.com/openharmony/napi_generator/tree/master/src/vscode_plugin/docs/ohCrossCompile.md)

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_menu.png)

  对于snippets功能，在cpp文件中输入 [snippetsApi](https://gitee.com/openharmony/napi_generator/tree/master/src/vscode_plugin/docs/snippetsApi.md) 中提供的命令即可生成napi、Aki各场景的代码片段：

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/snippets_use.png)

  

- **方式2**: 通过在工具栏选择 **[帮助]** -> **[显示所有命令]**  或者 快捷命令 **[ctrl + shift + p]** 在弹出窗口里输入h2dts等命令使用功能 

  ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ctrl_shift_p.png)

## 验证：

生成文件的详细用法请参考以下链接：

* h2sa: [h2sa使用帮助文档](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/usage/usage.md#生成物)

* h2hdf: [h2hdf使用帮助文档](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2hdf/docs/usage.md#编译)

* h2dtscpp: [h2dtscpp使用帮助文档](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2dtscpp/docs/usage/INSTRUCTION_ZH.md)

* dts2cpp：开发中，近期完成

* OpenHarmony交叉编译：[OpenHarmony交叉编译使用帮助文档](https://gitee.com/openharmony/napi_generator/tree/master/src/vscode_plugin/docs/uselibrary.md)

## 问题:

要追踪现有的问题或报告一个新问题，请访问 [Gitee Issues](https://gitee.com/openharmony/napi_generator/issues) 页面 

