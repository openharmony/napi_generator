### h2sa工具

## 简介

h2sa工具，即SERVICE框架生成工具，当开发者为OpenHarmony系统框架开发某些功能时，有时需要将这个功能包装成一个独立的服务进程运行在系统中，为了其它应用进程能够调用此服务，开发人员需要基于系统IPC通信框架编写一套远程接口调用实现。实现Service远程调用接口需要开发人员熟悉IPC通信框架，了解proxy/stub的继承与实现方式，掌握C++类型转为MessageParcel数据包的各种API方法，有一定的学习成本。而Service代码生成工具能够帮助使用者生成框架代码，提升开发效率。用户只需提供一个定义远程方法的.h头文件，工具会自动生成整个Service框架的代码，包含Ability注册、proxy/stub类实现、MessageParcel数据包构造、Service子系统编译及开机自启动相关配置文件。

## 约束

系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

#### 命令行

1. 安装python库 CppHeaderParser

   ~~~
   pip install CppHeaderParser
   ~~~

2. 安装typescript：在napi_generator/src/cli/h2sa/src/src目录下执行命令

   ~~~
   npm i typescript
   ~~~

3. 安装stdio：在napi_generator/src/cli/h2sa/src目录下执行命令

   ~~~
   npm i stdio
   ~~~

4. 将待转换的文件test.h文件拷贝到napi_generator/src/cli/h2sa/src/src/gen目录下

   ~~~cpp
   napi_generator/src/cli/h2sa/examples/test.h
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
   ~~~

   注意：.h文件中待生成的主class必须加注释：@brief service服务，提供IPC调用接口 ，如下所示：

   ```cpp
   /**
    * @brief service服务，提供IPC调用接口
    * @ServiceClass
    */
   ```

5. 在napi_generator/src/cli/h2sa/src/src/gen目录下执行命令生成service框架代码：

   ~~~
   node main.js -f test.h
   ~~~

   其中,参数详情如下： -f，定义远程服务的.h文件； -l, 日志级别（0-3），默认为1； -o,生成框架代码输入到指定路径下； -s,指定serviceID。 -v,指定版本（3.2和4.1，默认版本为3.2） 

#### 生成物

1. 输出testservice文件夹，其中的文件如下所示：

   ![](./docs/figures/h2sa_outRes.png)

#### 生成物的应用和验证

1. 编译步骤：生成的testservice文件夹放在对应版本的源码根目录下

2.  修改系统公共文件

   ##### 基础配置

   1. 服务配置

      在foundation/systemabilitymgr/samgr/interfaces/innerkits/samgr_proxy/include/

      system_ability_definition.h增加以下一行：

      ```
      TEST_SERVICE_ID                 = 9016,
      ```

      其中，TEST_SERVICE_ID宏值与用户定义的serviceID一致。

   2. 子系统配置

      在build/subsystem_config.json中增加以下内容。

      ```
      "testservice": {
        "path":"testservice",
        "name": "testservice" 
      }
      ```

   3. 产品配置，如rk3568

      在vendor/kaihong/rk3568/config.json中增加以下内容：

      ```
      {  
       "subsystem": "testservice", 
       "components": [
        {
         "component": "testservice_part",
         "features": []
        }
       ]
      }
      ```

   4. 权限配置

      在相应的产品目录的vendor/kaihong/rk3568/security_config/high_privilege_process_list.json中增加以下内容：

      ```
      {
        "name": "testservice", 
        "uid": "system",
        "gid": ["root", "system"]
      }
      ```

   ##### selinux权限配置

   上述基础配置时关闭了selinux 权限配置，用户新增服务时需根据自身需求配置selinux 权限 。

   若要配置selinux权限，首先应将vendor/hihope/rk3568/config.json中"build_selinux"属性改为true，然后修改以下文件：

   1. testservice/etc/sample_service.cfg

      ```
      "secon" : "u:r:testservice:s0"
      ```

   2. base/security/selinux_adapter/sepolicy/base/public/service_contexts

      ```
      9016                 u:object_r:sa_testservice:s0
      ```

   3. base/security/selinux_adapter/sepolicy/base/public/service.te

      ```
      type sa_testservice, sa_service_attr;
      ```

   4. base/security/selinux_adapter/sepolicy/ohos_policy/startup/init/system/init.te

      ```
      allow init testservice:process { getattr rlimitinh siginh transition };
      ```

   5. base/security/selinux/sepolicy/base/public/type.te

      ```
      type testservice, sadomain, domain;
      ```

   6. /base/security/selinux/sepolicy/base/te目录下增加新service的te文件，新增文件名即为服务名，例如：testservice.te

      ```
      allow testservice init_param:file { map open read };
      allow testservice sa_testservice:samgr_class { add get };
      ```

3. 编码完成后，执行镜像编译命令

   ~~~
   ./build.sh --product-name 产品名
   
   如：若编译Hi3516DV300开发板，则执行
   ./build.sh --product-name Hi3516DV300
   
   若编译rk3568开发板，则执行
   ./build.sh --product-name rk3568
   ~~~

4. 烧录镜像

5. 运行验证

   > 验证一： shell登录开发板。 查看服务端进程是否已正常启动
   >
   > ~~~
   > ps -ef | grep testservice
   > system         288     1 0 00:02:13 ?     00:00:00 testservice_sa  --- 服务进程已正常运行
   > ~~~
   >
   > 验证二：运行客户端
   >
   > ~~~
   > /system/bin/testclient 
   > ~~~