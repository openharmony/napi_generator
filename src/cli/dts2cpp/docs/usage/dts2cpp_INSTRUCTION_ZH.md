# dts2cpp工具使用说明
## 简介

dts2cpp工具即NAPI框架生成工具，该工具支持三种入口，分别是可执行程序、VS Code插件、DevEco Studio上使用的IntelliJ插件，使用者可以根据自己的需要选择合适的工具。

1.可执行文件下载路径如下(由于网络原因，可能会导致有的下载链接失效，因此提供了以下三个下载链接):

[可执行文件下载链接1](http://ftpkaihongdigi.i234.me:5000/sharing/yaRiKSjBI)

[可执行文件下载链接2](http://ftp.kaihong.com:5000/fsdownload/yaRiKSjBI/)

[可执行文件下载链接3](http://ftp.kaihongdigi.com:5000/fsdownload/yaRiKSjBI/)

访问密码：kaihong

压缩包解压密码：kaihong20231121

DevEco Studio上使用的IntelliJ插件下载路径如下：

[DevEco Studio上使用的IntelliJ插件下载链接](https://plugins.jetbrains.com/plugin/19593-napi-generator/versions)

## 工具介绍

通过NAPI框架生成工具，使用者可输入一个接口定义的ts文件，一键生成NAPI框架代码、业务代码框架、GN脚本等文件，并使用生成的NAPI接口及功能。使用者也可以输入一个定义方法的.h头文件，反向生成ts文件。

![](../figures/pic-frm.png)

## 生成框架

### 可执行程序使用方法

#### Linux

1.将待转换的.d.ts文件、napi_generator-linux放在同级目录下。此处新建out文件夹，用于存放生成框架代码。整体目录文件如下：

	OpenHarmony@Ubuntu-64:~/service$ ls
	napi_generator-linux  @ohos.napitest.d.ts out

2.在终端中进入到之前可执行程序napi_generator-linux所在的目录，并运行napi_generator-linux，命令如下：

	OpenHarmony@Ubuntu-64:~/service$ ./napi_generator-linux -f @ohos.napitest.d.ts -o out

其中，参数详情如下：

   -f, 待转换的.d.ts文件，若同时转换多个文件，文件之间用“,”隔开；

  -d, 根据指定路径转换该文件夹中所有.d.ts文件；

  -i, 可选参数，默认false，待转换.d.ts文件中引用非basic.d.ts的ts文件时打开开关；

  -o, 可选参数，默认为当前目录，指定生成框架代码输出路径；

  -n, 可选参数，默认为uint32_t，指定生成框架代码中number类型全部为指定类型；

  -s, 可选参数，默认为不配置业务代码，指定生成框架代码的业务配置文件，用于粘合工具代码和业务代码的配置。

  备注1：-f与-d两个参数只选其中一个参数即可。

  备注2：若.d.ts文件中声明其它.d.ts文件，将此类文件放置在待转换.d.ts文件同级目录。

3.运行成功后会在out目录下生成框架代码文件，如下所示：

	OpenHarmony@Ubuntu-64:~/linshi/napi_generator_8/examples/ts/out$ ls
	binding.gyp  BUILD.gn  napi_gen.log  napitest.cpp  napitest.h  napitest_middle.h  napitest_middle.cpp  test.sh  tool_utility.cpp  tool_utility.h

#### Windows

1.将待转换的.d.ts文件、napi_generator-win.exe放在同级目录下。此处新建out文件夹，用于存放生成框架代码。整体目录文件如下：

	E:\demo\napi>dir /B
	@ohos.napitest.d.ts
	napi_generator-win.exe
	out

2.在终端中进入到之前可执行程序napi_generator-win.exe所在的目录，并运行napi_generator-win.exe，命令如下：

	E:\demo\napi>napi_generator-win.exe -f @ohos.napitest.d.ts -o out

其中，参数详情如下：

   -f, 待转换的.d.ts文件，若同时转换多个文件，文件之间用“,”隔开；

  -d, 根据指定路径转换该文件夹中所有.d.ts文件；

  -i, 可选参数，默认false，待转换.d.ts文件中引用非basic.d.ts的ts文件时打开开关；

  -o, 可选参数，默认为当前目录，指定生成框架代码输出路径；

  -n, 可选参数，默认为uint32_t，指定生成框架代码中number类型全部为指定类型；

  -s, 可选参数，默认为不配置业务代码，指定生成框架代码的业务配置文件，用于粘合工具代码和业务代码的配置。

  备注1：-f与-d两个参数只选其中一个参数即可。

  备注2：若.d.ts文件中声明了其它.d.ts文件，将此类文件放置在待转换.d.ts文件同级目录。

3.运行成功后会在out目录下生成框架代码文件，如下所示：

	E:\demo\napi\out>dir /B
	binding.gyp
	BUILD.gn
	napitest.cpp
	napitest.h
	napitest_middle.h
	napitest_middle.cpp
	napi_gen.log
	test.sh
	tool_utility.cpp
	tool_utility.h

#### Mac

方法步骤参考windows、Linux的使用方法。

### VS Code插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[VS插件使用说明](https://gitee.com/openharmony/napi_generator/blob/master/src/vscode_plugin/dts2cpp/napi_vs_plugin/docs/usage/INSTRUCTION_ZH.md)

### DevEco Studio上使用的IntelliJ插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[DevEco Studio上使用的IntelliJ插件使用说明](https://gitee.com/openharmony/napi_generator/blob/master/src/intellij_plugin/dts2cpp/napi_IntelliJ_plugin/docs/usage/INSTRUCTION_ZH.md)

## 集成测试
NAPI框架代码生成后，系统框架开发者进行二次开发后，即可集成到OpenHarmony编译系统，生成对应的库文件，供应用开发者调用接口。工具集成测试的具体操作步骤可以左键单击以下链接了解：

[工具集成测试](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/dts2cpp/docs/usage/dts2cpp_INTEGRATION_TESTING_ZH.md)

