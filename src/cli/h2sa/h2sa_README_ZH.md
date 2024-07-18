# h2sa工具

## 简介

h2sa工具，即SERVICE框架生成工具，当开发者为OpenHarmony系统框架开发某些功能时，有时需要将这个功能包装成一个独立的服务进程运行在系统中，为了其它应用进程能够调用此服务，开发人员需要基于系统IPC通信框架编写一套远程接口调用实现。实现Service远程调用接口需要开发人员熟悉IPC通信框架，了解proxy/stub的继承与实现方式，掌握C++类型转为MessageParcel数据包的各种API方法，有一定的学习成本。而Service代码生成工具能够帮助使用者生成框架代码，提升开发效率。用户只需提供一个定义远程方法的.h头文件，工具会自动生成整个Service框架的代码，包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。

## 约束
系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

### 生成

1.安装python库 CppHeaderParser

```
pip install CppHeaderParser
```

2.安装typescript：在napi_generator/src/cli/h2sa/src/src目录下执行命令：

	npm i typescript

3.安装stdio：在napi_generator/src/cli/h2sa/src目录下执行命令：

	npm i stdio

4.将待转换的文件test.h文件拷贝到napi_generator/src/cli/h2sa/src/src/gen目录下；test.h文件示例如下所示：

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

5.在napi_generator/src/cli/h2sa/src/src/gen目录下执行命令生成service框架代码：

```
node main.js -f test.h
```

其中,参数详情如下：
  -f，定义远程服务的.h文件；
  -l, 日志级别（0-3），默认为1；
  -o,生成框架代码输入到指定路径下；
  -s,指定serviceID。

6.输出testservice文件夹，其中的文件如下所示：

![](./docs/figures/h2sa_outRes.png)

### 集成

Service框架代码生成后，系统框架开发者进行二次开发后，即可集成到OpenHarmony编译系统，生成对应的库文件，供应用开发者调用接口。工具集成到OpenHarmony的具体操作步骤可以左键单击以下链接了解：

[工具集成](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/usage/h2sa_ENSEMBLE_METHOD_ZH.md)



