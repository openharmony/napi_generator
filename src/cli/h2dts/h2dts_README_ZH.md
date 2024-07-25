# h2dts工具

## 简介
h2dts工具，即Ts接口生成工具，它可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件。若某个服务实现方式为c++，且供应用层访问的接口已在.h文件中定义，此时，NAPI接口开发者使用此工具可一键生成对应的ts文件，进而将生成的ts文件作为NAPI框架生成代码工具的输入，生成NAPI框架代码。串行使用ts接口生成工具、NAPI框架代码生成工具，形成工具链，达到降低NAPI接口开发难度，提高开发效率。

## 约束
系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

1.安装python库 CppHeaderParser

```
pip install CppHeaderParser
```

2.安装typescript：在napi_generator/src/cli/h2dts/src目录下执行命令：

	npm i typescript

3.安装stdio：在napi_generator/src/cli/h2dts目录下执行命令：

	npm i stdio

4.将待转换的文件TsGenTest.h拷贝到napi_generator/src/cli/h2dts/src/tsGen下；TsGenTest.h文件如下所示：

```
#ifndef TSGENTEST_H
#define TSGENTEST_H

#include <mutex>
#include <thread>
#include <unordered_map>

namespace OHOS {
class TsGenTest {
public:
    std::string getServName();
    std::string getServTime();
    int32_t doSum(int32_t num1, int32_t num2);
    double addCount(double newNum);
};
}
#endif
```

5.在napi_generator/src/cli/h2dts/src/tsGen下执行以下命令生成ts声明文件：

```
node cmd_gen.js -f TsGenTest.h
```

其中，参数详情如下：
  -f, 待转换的.h文件，若同时转换多个文件，文件之间用“,”隔开；
  -d, 根据指定路径转换该文件夹中所有.h文件；
  -t, 区分ts生成与napi转换工具，值为true时表示ts生成，false表示napi转换，默认为false；
  -o, 可选参数，默认为当前目录，指定生成框架代码输出路径。

  备注：-f与-d两个参数只选其中一个参数即可。

6.执行成功后在napi_generator/src/cli/h2dts/src/tsGen下生成TsGenTest.d.ts声明文件

```
TsGenTest.d.ts
```

