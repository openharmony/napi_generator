# SERVICE框架生成工具VSCode插件使用说明
## 简介

VS Code插件下载路径如下：

[下载链接](暂无)               

## VS Code插件使用方法

### 说明

visual studio code 版本需1.62.0及以上。

### 步骤

1、 打开VS Code，在左侧边栏中选择插件安装。

![](../../figures/pic-plug-in-search.png)

2、 单击上面三个点的按钮，选择从VSIX安装选项，然后选择刚才生成的service-0.0.1.vsix插件文件，再单击安装。

![](../../figures/pic-plug-in-select.png)

3、 安装完成后就会在VS Code的插件管理器中能看到service这个插件了。

![](../../figures/pic-plug-in-service.png)

4、 在VS Code中找到需要转换的.h文件，如下：

![](../../figures/pic-plug-in-select-h.png)

5、 右键单击.h文件，选择“ Generate Service Frame”选项。

![](../../figures/pic-plug-in-gen-c++.png)

6、 工具打开 Generate Service Frame窗口，.h文件选择框默认填写被操作的.h文件的绝对路径；输出路径选择框默认填写.h文件所在文件夹路径，可修改为任意路径；serviceID默认填写9000，可修改为其他id，然后点击ok。

![](../../figures/pic-service-frame.png)

7、 转换成功后，在输出路径下生成service框架代码文件。

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
