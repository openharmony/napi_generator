# SERVICE框架生成工具使用说明
## 简介

SERVICE框架生成工具支持三种入口，分别是可执行程序、VS Code插件，使用者可以根据自己的需要选择合适的工具。可执行文件、VS Code插件下载路径如下：

[下载链接](暂无)

下载文件说明如下：

	│   │   |── service-0.0.1.vsix                 # VS Code插件
	│   │   |── header_parser.exe                  # python脚本独立程序
	│   │   |── header_parser                      # python脚本独立程序
	│   │   |── service-gen-linux                  # Linux可执行程序 
	│   │   |── service-gen-win.exe                # Windows可执行程序    
	│   │   └── service-gen-macos                  # Mac可执行程序                

## 工具介绍

通过SERVICE框架生成工具，使用者只需提供一个定义远程方法的.h头文件，一键生成SERVICE框架代码，主要包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。

![](../figures/pic-service-frm.png)

## 生成框架

### 可执行程序使用方法
#### Linux

1.下载python脚本可执行程序header_parser.exe与linux可执行程序service-gen-linux，下载链接如下：

[下载链接](暂无)

2.将待转换的.h文件放到任意目录下，建议放到可执行程序service-gen-linux与header_parser.exe同级目录下，如下所示：

	harmony@Ubuntu-64:~/service/napi_generator_8/hdc/service-gen/examples$ ls
	exam.h  header_parser  service-gen-linux

3.在终端中进入到可执行程序service-gen-linux所在的目录，并运行service-gen-linux，命令如下：

	harmony@Ubuntu-64:~/service/napi_generator_8/hdc/service-gen/examples$ ./service-gen-linux -f exam.h -o ./ -s 9001 

其中,参数详情如下：
  -f，定义远程服务的.h文件；
  -l, 日志级别（0-3），默认为1；
  -o, 生成框架代码输入到指定路径下；
  -s, 指定serviceID。

4.运行成功后会在当前目录下生成对应的文件，如下所示：

	harmony@Ubuntu-64:~/service/napi_generator_8/hdc/service-gen/examples$ ls
	exam.h  header_parser  napi_gen.log  service-gen-linux  testaservice

#### Windows

1.下载python脚本可执行程序header_parser.exe与linux可执行程序service-gen-win.exe，下载链接如下：

[下载链接](暂无)

2.将要转换的.h文件放到任意目录下，建议放到可执行程序service-gen-win.exe与header_parser.exe同级目录下，如下所示：

	E:\demo\service>dir /B
	exam.h
	header_parser.exe
	service-gen-win.exe

3.在终端中进入到可执行程序service-gen-win.exe所在的目录，并运行service-gen-win.exe，命令如下：

	E:\demo\service>service-gen-win.exe -f exam.h -o ./ -s 9001 

其中,参数详情如下：
  -f，定义远程服务的.h文件；
  -l, 日志级别（0-3），默认为1；
  -o,生成框架代码输入到指定路径下；
  -s,指定serviceID。

4.运行成功后会在当前目录下生成对应的文件，如下所示：

	E:\demo\service>dir /B
	exam.h
	header_parser.exe
	napi_gen.log
	service-gen-win.exe
	testaservice

#### Mac

方法步骤参考windows、Linux的使用方法。

### VS Code插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[VS插件使用说明](https://gitee.com/openharmony/napi_generator/tree/master/hdc/service/service_vs_plugin/docs/INSTRUCTION_ZH.md)

## 编译

将生成的整个xxxservice目录复制到OpenHarmony源码根目录下（与base、foundation目录平级）

### 修改3个系统公共文件

1.服务配置

foundation/distributedschedule/samgr/interfaces/innerkits/samgr_proxy/include/system_ability_definition.h中增加以下两行(其中SERVICE_ID与sa_profile目录下的xml文件名保持一致)

  ```
XXX_SERVICE_ID                                = 9001,
{XXX_SERVICE_ID, "xxxservice" },
  ```

2.子系统配置
build/subsystem_config.json中增加以下内容

```
"xxxservice": {
"path":"xxxservice",
"name": "xxxservice"
 }
```

3.产品配置
productdefine/common/products/Hi3516DV300.json

```
 "xxxservice:xxxservice_part":{}
```

### 补充 服务端/客户端 业务逻辑实现

**服务端**
xxx_service.cpp
在注释“// TODO: Invoke the business implementation”处添加各个接口的服务端实现代码；远程方法的参数包装已在生成代码xxx_service_stub.cpp中统一处理，开发人员无需关注

**客户端**
xxx_client.cpp 为自动生成的客户端样例代码。编译烧录后，会在/system/bin/目录下生成可执行程序xxx_client
在main中使用proxy对象进行远程方法调用，参考注释示例。远程方法的参数包装已在生成代码xxx_service_proxy.cpp中统一处理，开发人员无需关注

编码完成后，执行镜像编译命令，如

```
./build.sh --product-name Hi3516DV300
```


## 运行

将编译好的镜像烧录到开发板后，使用hdc_std shell登录开发板。
查看服务端进程是否已正常启动

```
ps -ef | grep xxxservice
system         288     1 0 00:02:13 ?     00:00:00 xxxservice_sa  --- 服务进程已正常运行
```


运行客户端

```
/system/bin/xxxclient 
```


 (客户端具体执行哪些远程调用方法请在xxx_client.cpp的main方法中实现)
