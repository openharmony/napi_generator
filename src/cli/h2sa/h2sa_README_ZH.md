# h2sa工具

## 简介

h2sa工具，即SERVICE框架生成工具，当开发者为OpenHarmony系统框架开发某些功能时，有时需要将这个功能包装成一个独立的服务进程运行在系统中，为了其它应用进程能够调用此服务，开发人员需要基于系统IPC通信框架编写一套远程接口调用实现。实现Service远程调用接口需要开发人员熟悉IPC通信框架，了解proxy/stub的继承与实现方式，掌握C++类型转为MessageParcel数据包的各种API方法，有一定的学习成本。而Service代码生成工具能够帮助使用者生成框架代码，提升开发效率。用户只需提供一个定义远程方法的.h头文件，工具会自动生成整个Service框架的代码，包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。目前工具支持命令行和VS Code插件两种入口。

	├── napi_generator                               # NAPI框架代码生成工具
	│   ├── ...                                      # 其它文档
	│   ├── src
	│   │   ├── ...                                 
	│   │   ├── cli                                  # 脚手架源码
	│   │   |   ├── h2sa/src                         # 工具源码
	│   │   |   |   ├── src                    
	│   │   |   |   |   ├── tools                    # 公共模块代码，包括消息体校验、文件读写、正则表达式转换等
	│   │   |   |   |   ├── gen                      # 生成器
	│   │   |   |   ├── package.json                 # 配置文件
	│   │   |   ├── ...                              # 其它工具

## 约束
系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

### 使用对象

系统开发者 
### 使用场景

1) 开发者为OpenHarmony系统框架开发某些功能，并将该功能包装成一个独立的服务进程运行在系统中。

### 工具输入

根据使用者指定的.h头文件，工具会输出SERVICE框架代码。为了方便使用者快速上手工具，可供测试的.h文件如下所示：

```
#ifndef TEST_H
#define TEST_H

namespace OHOS {
    namespace Example {
    /**
     * @brief service服务，提供IPC调用接口
     * @ServiceClass
     */
        class test {
        public:
            int testFunc(int v1, int v2, bool v3);
        };
    }  // namespace Example
}  // namespace OHOS
#endif  // TEST_H
```

注意：.h文件中待生成的主class必须加注释：@brief service服务，提供IPC调用接口 ，如下所示：

```
/**
 * @brief service服务，提供IPC调用接口
 * @ServiceClass
 */
```

### 工具使用

#### 命令行使用方法

[命令行使用说明](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/usage/h2sa_INSTRUCTION_ZH.md)

#### VS Code插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[vscode工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/src/vscode_plugin/h2sa/service_vs_plugin/docs/usage/INSTRUCTION_ZH.md)

### 工具输出

在window环境下的，根据输入.h文件生成的输出文件，如下所示：

![](./docs/figures/service_framework.png)

### 工具集成

[工具输出文件集成到OpenHarmony](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/usage/h2sa_ENSEMBLE_METHOD_ZH.md)

## 工具开发说明

### 对象

工具的开发者

### 开发场景

若当前工具的功能已经不能满足开发者的全部需求，则开发者可以基于已有的源码对工具进行二次开发，来增强工具的能力，编译打包生成自定义的可执行文件和插件。

### 开发步骤

开发者可以根据如下的步骤来完成对工具的开发：

 [工具开发说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2sa/docs/guide/DEVELOP_ZH.md)

## 版本说明

[已支持特性](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/release-notes/Service-1.0.md)

[待开发特性](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/requirement/ROADMAP_ZH.md)

## FAQ

[FAQ](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2sa/docs/guide/FAQ.md)

## 参与贡献

暂无

## 相关仓

暂无
