# Service框架生成代码集成到OpenHarmony的方法

## 场景说明

为了实现工具生成的接口被其它子系统或者应用调用，需将生成的代码经系统框架开发者二次开发后编译集成到OpenHarmony系统中，使其生成动态库，供OpenHarmony应用层调用。本文介绍如何将工具生成的源码利用OpenHarmony编译系统生成动态库供应用层调用。

## 编译

将生成的整个xxxservice目录复制到OpenHarmony源码根目录下（与base、foundation目录平级）

### 修改3个系统公共文件

1. 服务配置
   foundation/distributedschedule/samgr/interfaces/innerkits/samgr_proxy/include/system_ability_definition.h增加以下两行(其中SERVICE_ID与sa_profile目录下的xml文件名保持一致)

  ```
XXX_SERVICE_ID                                = 9001,
{XXX_SERVICE_ID, "xxxservice" },
  ```

2. 子系统配置
   build/subsystem_config.json
   增加以下内容

   ```
   "xxxservice": {
   "path":"xxxservice",
   "name": "xxxservice"
    }
   ```

3. 产品配置
   productdefine/common/products/Hi3516DV300.json

```
 "xxxservice:xxxservice_part":{}
```

### 补充 服务端/客户端 业务逻辑实现

**服务端**
xxx_service.cpp
在注释“// TODO: Invoke the business implementation”处添加各个接口的服务端实现代码
远程方法的参数包装已在生成代码xxx_service_stub.cpp中统一处理，开发人员无需关注

**客户端**
xxx_client.cpp 为自动生成的客户端样例代码。编译烧录后，会在/system/bin/目录下生成可执行程序xxx_client
在main中使用proxy对象进行远程方法调用，参考注释示例。
远程方法的参数包装已在生成代码xxx_service_proxy.cpp中统一处理，开发人员无需关注

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

