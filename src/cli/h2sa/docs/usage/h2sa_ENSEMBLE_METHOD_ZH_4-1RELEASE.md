# h2sa工具集成到OpenHarmony 4.1 Release的方法

## 场景说明

为了实现工具生成的接口被其它子系统或者应用调用，需将生成的代码经系统框架开发者二次开发后编译集成到OpenHarmony系统中，使其生成动态库，供OpenHarmony应用层调用。本文介绍如何将工具生成的源码集成到OpenHarmony 4.1 relsease

## OpenHarmony 4.1 release

### 修改编译文件

1. 修改testservice/BUILD.gn文件，将utils/native 改为 commonlibrary/c_utils，将samgr_standard改为samgr，− 将hiviewdfx_hilog_native改为hilog，在ohos_shared_library("testservice")中include_dirs内新增"//base/startup/init/interfaces/innerkits/include/syspara",将ohos_shared_library("testservice")中的deps删除，并删除external_deps中的"startup_l2:syspara",同时在external_deps中新增"c_utils:utils", 将ohos_executable("testclient")中的deps删除，同时在external_deps中新增"c_utils:utils"。修改后的BUILD.gn文件内容如下所示：

   ```
   import("//build/ohos.gni")
   
   ohos_shared_library("testservice") {
     sources = [
       "//testservice/src/i_test_service.cpp",
       "//testservice/src/test_service_stub.cpp",
       "//testservice/src/test_service.cpp"
     ]
     include_dirs = [
       "//testservice/include",
       "//testservice/interface",
       "//commonlibrary/c_utils/base/include",
       "//base/startup/init/interfaces/innerkits/include/syspara",
     ]
   
     external_deps = [
       "hilog:libhilog",
       "ipc:ipc_core",
       "safwk:system_ability_fwk",
       "samgr:samgr_proxy",
       "c_utils:utils",
     ]
   
     part_name = "testservice_part"
     subsystem_name = "testservice"
   }
   
   ohos_executable("testclient") {
       sources = [
       "//testservice/src/i_test_service.cpp",
       "//testservice/src/test_service_proxy.cpp",
       "//testservice/src/test_client.cpp"
     ]
   
     include_dirs = [
       "//testservice/include",
       "//testservice/interface",
       "//commonlibrary/c_utils/base/include",
     ]
   
     external_deps = [
       "hilog:libhilog",
       "ipc:ipc_core",
       "samgr:samgr_proxy",
       "c_utils:utils",
     ]
   
     part_name = "testservice_part"
     subsystem_name = "testservice"
   }
   ```

2. 修改testservice/bundle.json文件，将"name": "@ohos/testservice"修改为 "name": "@ohos/testservice_part"；将"samgr_standard"改为"samgr"，"utils_base"修改为"c_utils"；将"hiviewdfx_hilog_native"修改为"hilog"；− 将"deps":"components"下的"starup_l2"删除。修改后的bundle.json文件内容如下所示：

   ```
   {
       "name": "@ohos/testservice_part",
       "description": "system ability framework test",
       "homePage": "https://gitee.com/",
       "version": "4.1",
       "license": "Apache License 2.0",
       "repository": "",
       "publishAs": "code-segment",
       "segment": {
           "destPath": "testservice"
       },
       "dirs": {},
       "scripts": {},
       "component": {
           "name": "testservice_part",
           "subsystem": "testservice",
           "adapted_system_type": [
               "standard"
           ],
           "rom": "2048KB",
           "ram": "~4096KB",
           "deps": {
               "components": [
                   "hilog",
                   "ipc",
                   "samgr",
                   "c_utils",
                   "safwk"
               ],
               "third_party": [ "libxml2" ]
           },
           "build": {
               "sub_component": [
                   "//testservice:testservice",
                   "//testservice/sa_profile:testservice_sa_profile",
                   "//testservice:testclient",
                   "//testservice/etc:test_service_init"
               ],
               "inner_kits": [
               ],
               "test": [
               ]
           }
       }
   }
   ```
   
3. 步骤 1 修改testservice/sa_profile下的文件以及testservice/etc/test_service.cfg文件， 将testservice/sa_profile/9016.xml文件重命名为9016.json,并将内容修改为json格式，修改后的9016.json文件如下所示：

   ```
   {
     "process":"testservice_sa",
         "systemability":[
             {
                 "name":9016,
                 "libpath":"libtestservice.z.so",
                 "run-on-create":false,
                 "auto-restart":true,
                 "distributed":false,
                 "dump-level":1
             }
         ]
   }
   ```

    修改testservice/sa_profile/BUILD.gn文件：将sources = [ "9016.xml" ]修改为sources = [ "9016.json" ]

    修改testservice/etc/test_service.cfg文件：将"path"内的testservice_sa.xml修改为testservice_sa.json

### 修改系统公共文件

#### 基础配置

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

#### selinux权限配置

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




