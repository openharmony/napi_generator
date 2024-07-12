# h2sa工具使用说明
## 简介

h2sa工具，即SERVICE框架生成工具，该工具支持命令行和VS Code插件，使用者可以根据自己的需要下载工具使用。

## 工具介绍

通过SERVICE框架生成工具，使用者只需提供一个定义远程方法的.h头文件，一键生成SERVICE框架代码，主要包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。

![](../figures/pic-service-frm.png)

## 准备

下载python脚本可执行程序header_parser.exe（linux系统为header_parser)，下载链接如下：

[下载链接1](http://ftpkaihongdigi.i234.me:5000/sharing/kBG1c7CvT)

[下载链接2](http://ftp.kaihong.com:5000/sharing/kBG1c7CvT)

[下载链接3](http://ftp.kaihongdigi.com:5000/sharing/kBG1c7CvT)

获取nodejs脚本可执行程序service-gen-win.exe、service-gen-linux，用户可根据以下步骤生成nodejs脚本可执行程序：

[工具开发说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2sa/docs/guide/DEVELOP_ZH.md)

## 生成框架

### 可执行程序使用方法

#### Linux

1.将待转换的.h文件放到任意目录下，建议放到可执行程序service-gen-linux与header_parser同级目录下，如下所示：

	OpenHarmony@Ubuntu-64:~/service/napi_generator_8/hdc/service-gen/examples$ ls
	test.h  header_parser  service-gen-linux

2.在终端中进入到可执行程序service-gen-linux所在的目录，并运行service-gen-linux，命令如下：

	OpenHarmony@Ubuntu-64:~/service/napi_generator_8/hdc/service-gen/examples$ ./service-gen-linux -f test.h -o ./ -s 9016 

其中,参数详情如下：
  -f，定义远程服务的.h文件；
  -l, 日志级别（0-3），默认为1；
  -o, 生成框架代码输入到指定路径下；
  -s, 指定serviceID。

3.运行成功后会在当前目录下生成对应的文件，如下所示：

	OpenHarmony@Ubuntu-64:~/service/napi_generator_8/hdc/service-gen/examples$ ls
	test.h  header_parser  napi_gen.log  service-gen-linux  testservice

#### Windows

1.将要转换的.h文件放到任意目录下，建议放到可执行程序service-gen-win.exe与header_parser.exe同级目录下，如下所示：

	E:\demo\service>dir /B
	test.h
	header_parser.exe
	service-gen-win.exe

2.在终端中进入到可执行程序service-gen-win.exe所在的目录，并运行service-gen-win.exe，命令如下：

	E:\demo\service>service-gen-win.exe -f test.h -o ./ -s 9016 

其中,参数详情如下：
  -f，定义远程服务的.h文件；
  -l, 日志级别（0-3），默认为1；
  -o,生成框架代码输入到指定路径下；
  -s,指定serviceID。

3.运行成功后会在当前目录下生成对应的文件，如下所示：

	E:\demo\service>dir /B
	test.h
	header_parser.exe
	napi_gen.log
	service-gen-win.exe
	testservice

#### Mac

方法步骤参考windows、Linux的使用方法。

### VS Code插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[VS插件使用说明](https://gitee.com/openharmony/napi_generator/tree/master/src/vscode_plugin/h2sa/service_vs_plugin/docs/usage/INSTRUCTION_ZH.md)

## 集成

Service框架代码生成后，系统框架开发者进行二次开发后，即可集成到OpenHarmony编译系统，生成对应的库文件，供应用开发者调用接口。工具集成到OpenHarmony的具体操作步骤可以左键单击以下链接了解：

[工具集成](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2sa/docs/usage/h2sa_ENSEMBLE_METHOD_ZH.md)

