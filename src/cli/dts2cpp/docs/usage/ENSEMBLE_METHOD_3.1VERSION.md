# 集成到OpenHarmony 3.1 Release的方法

## 场景说明

为了实现工具生成的接口被其它子系统或者应用调用，需将生成的代码编译集成到OpenHarmony系统中，使其生成动态库，供OpenHarmony应用层调用。
本文介绍如何将工具生成的源码利用OpenHarmony编译系统生成动态库供应用层调用，集成到OpenHarmony 3.1 Release主要是有以下两种方式，分别为增加ohos.build文件方式和增加bundle.json文件方式。

## 3.1 版本

### bundle.json方式集成

#### 建立模块位置

模块目录理论上可在OpenHarmony工程的任一位置，假设OpenHarmony代码库的目录为OHOS_SRC，在OHOS_SRC/foundation目录下，建测试模块目录：napitest。napitest目录结构如下：

    napitest
    |-- binding.gyp
    |-- BUILD.gn
    |-- bundle.json
    |-- napitest.cpp
    |-- napitest.h
    |-- napitest_middle.h
    |-- napitest_middle.cpp
    |-- test.sh
    |-- tool_utility.cpp
    |-- tool_utility.h

其中bundle.json为新增的编译配置文件，其它为工具生成的代码。

#### 编译修改点

##### 修改BUILD.gn文件

将deps中"//foundation/arkui/napi:ace_napi"的修改为"//foundation/ace/napi:ace_napi"，修改后的BUILD.gn文件内容如下所示：

```
import("//build/ohos.gni")

ohos_shared_library("napitest")
{
    sources = [
        "napitest_middle.cpp",
        "../serviceCode/NodeISayHello.cpp",     # 将业务代码编译进去
        "napitest.cpp",
        "tool_utility.cpp",
    ]
    include_dirs = [
        ".",
        "//third_party/node/src",
    ]
    deps=[
        "//foundation/ace/napi:ace_napi",
        "//base/hiviewdfx/hilog/interfaces/native/innerkits:libhilog",
    ]
    remove_configs = [ "//build/config/compiler:no_rtti" ]
    cflags=[
    ]
    cflags_cc=[
        "-frtti",
    ]
    ldflags = [
    ]
    
    relative_install_dir = "module"
    part_name = "napitest"
    subsystem_name = "napitest"
}
```

若用户需要修改子系统和部件名称，则根据自身需求修改BUILD.gn文件和bundle.json文件中子系统与部件名称即可。

##### 修改bundle.json文件

其中destPath选项中的"//foundation/napitest"指的是napitest目录，":napitest"指的是上面BUILD.gn中的目标ohos_shared_library("napitest")。

```
{
  "name": "@ohos/napitest",
  "description": "napitest provides atomic capabilities",
  "version": "3.1",
  "license": "Apache License 2.0",
  "publishAs": "code-segment",
  "segment": {
    "destPath": "foundation/napitest"
  },
  "dirs": {},
  "scripts": {},
  "component": {
    "name": "napitest",
    "subsystem": "napitest",
    "features": [],
    "adapted_system_type": [
      "standard"
    ],
    "rom": "10000KB",
    "ram": "10000KB",
    "deps": {
      "components": [
        "ace_napi",
        "ipc_core",
        "libhilog"
      ],
      "third_party": [
        "node"
      ]
    },
    "build": {
      "sub_component": [
        "//foundation/napitest:napitest"
      ],
      "inner_kits": [
        {
          "header": {
            "header_base": "//foundation/napitest",
            "header_files": [
              "tool_utility.h",
              "napitest.h",
              "napitest_middle.h"
            ]
          },
          "name": "//foundation/napitest:napitest"
        }
      ]
    }
  }
}
```

##### 修改napitest.cpp文件

为方便调试，在napitest.cpp文件中增加业务代码。以修改napitest.cpp文件为例，在以下方法中增加业务代码，

在sayHello方法中增加注册的object回调方法的调用：

```
...
// 业务代码调用 onSayHelloStart callback
napitest::napitest_interface::NodeISayHello::listener_.NodeISayHelloListener_onSayHelloStartCallback(info1);
// 业务代码调用 onSayHelloEnd callback
napitest::napitest_interface::NodeISayHello::listener_.NodeISayHelloListener_onSayHelloEndCallback(info2);
...
```

在sayHi方法中增加register注册的回调方法的调用：

```
...
napitest::napitest_interface::NodeISayHello *ptr = new napitest::napitest_interface::NodeISayHello();
uint32_t callbackNum = 50;
ptr->CallbackfuncCallback(callbackNum);
delete ptr;
...
```

在sayHelloWithResponse方法中增加Promise回调方法的调用：

```
...
out.errMsg = "";
out.response = "rec hello.";
out.result = 0;
...
```

在funcTest方法中增加普通函数的业务逻辑：

```
...
if (v) {
    out = "ret is true";
} else {
    out = "ret is false";
}
...
```

增加业务代码之后的文件如下所示：

```
#include "napitest.h"
#include "napitest_middle.h"
#include "hilog/log.h"
static constexpr OHOS::HiviewDFX::HiLogLabel LABEL = {LOG_CORE, 0XD002E00, "NAPITESTNAPILayer"};
#define NAPITEST_LOGI(fmt, ...) OHOS::HiviewDFX::HiLog::Info(LABEL, \
    	"%{public}s:%{public}d " fmt, __func__, __LINE__, ##__VA_ARGS__)

namespace napitest {
namespace napitest_interface {
NodeISayHelloListener NodeISayHello::listener_ = {};
bool NodeISayHello::addSayHelloListener(NodeISayHelloListener& listener)
{
    NodeISayHello::listener_ = listener;
    return true;
}

bool NodeISayHello::removeSayHelloListener(NodeISayHelloListener& listener)
{
    return true;
}

bool NodeISayHello::registerCallbackfunc()
{
    return true;
}

// 供业务调用的回调接口
void NodeISayHello::CallbackfuncCallback(NUMBER_TYPE_2& wid)
{
    std::string eventName = "Callbackfunc";
    NodeISayHello_middle *ptr = new NodeISayHello_middle();
    ptr->CallbackfuncCallbackMiddle(eventName,  wid);
    delete ptr;
}

bool NodeISayHello::unRegisterCallbackfunc()
{
    return true;
}

bool NodeISayHello::sayHello(std::string& from, std::string& to, NUMBER_TYPE_9& sayType)
{
    NAPITEST_LOGI("NAPITEST_LOGI sayHello from = %s\r\n", from.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHello to = %s\r\n", to.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHello sayType = %d\r\n", sayType);
    SayInfo info1;
    info1.from = "js1";
    uint32_t a = 992;
    info1.fromId.emplace(a);
    uint32_t b = 1014;
    info1.toId.emplace(b);
    info1.to = "native1";
    info1.content = "hello1";
    info1.saidTime = "123456789";
    info1.isEnd = false;
    SayInfo info2;
    info2.from = "native";
    uint32_t c = 101;
    info2.fromId.emplace(c);
    uint32_t d = 99;
    info2.toId.emplace(d);
    info2.to = "js";
    info2.content = "hello";
    info2.saidTime = "987654321";
    info2.isEnd = true;
    // 业务代码调用 onSayHelloStart callback
    listener_.NodeISayHelloListener_onSayHelloStartCallback(info1);
    // 业务代码调用 onSayHelloEnd callback
    listener_.NodeISayHelloListener_onSayHelloEndCallback(info2);
    return true;
}

bool NodeISayHello::sayHi(std::string& from, std::string& to, NUMBER_TYPE_10& sayType)
{
    NAPITEST_LOGI("NAPITEST_LOGI sayHi from = %s\r\n", from.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHi to = %s\r\n", to.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHi sayType = %d\r\n", sayType);
    NodeISayHello *ptr = new NodeISayHello();
    uint32_t callbackNum = 50;
    ptr->CallbackfuncCallback(callbackNum);
    delete ptr;
    return true;
}

bool NodeISayHello::sayHelloWithResponse(std::string& from, std::string& to, NUMBER_TYPE_11& sayType,
    uint32_t& outErrCode, AUTO_INTERFACE_5& out)
{
    NAPITEST_LOGI("NAPITEST_LOGI sayHelloWithResponse from = %s\r\n", from.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHelloWithResponse to = %s\r\n", to.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHelloWithResponse sayType = %d\r\n", sayType);
    out.errMsg = "";
    out.response = "rec hello.";
    out.result = 0;
    return true;
}

AUTO_INTERFACE_5 NodeISayHello::auto_interface_5OutRes = {};
void NodeISayHello::auto_interface_5SetCbValue(NUMBER_TYPE_6 result, std::string errMsg, std::string response)
{
    NodeISayHello::auto_interface_5OutRes.result = result;
    NodeISayHello::auto_interface_5OutRes.errMsg = errMsg;
    NodeISayHello::auto_interface_5OutRes.response = response;
    return;
}

bool NodeISayHelloListener::onSayHelloStart()
{
    return true;
}

// 供业务调用的回调接口
void NodeISayHelloListener::NodeISayHelloListener_onSayHelloStartCallback(SayInfo& info)
{
    std::string eventName = "NodeISayHelloListener_onSayHelloStart";
    NodeISayHelloListener_middle *ptr = new NodeISayHelloListener_middle();
    ptr->NodeISayHelloListener_onSayHelloStartCallbackMiddle(eventName,  info);
    delete ptr;
}

bool NodeISayHelloListener::onSayHelloEnd()
{
    return true;
}

// 供业务调用的回调接口
void NodeISayHelloListener::NodeISayHelloListener_onSayHelloEndCallback(SayInfo& info)
{
    std::string eventName = "NodeISayHelloListener_onSayHelloEnd";
    NodeISayHelloListener_middle *ptr = new NodeISayHelloListener_middle();
    ptr->NodeISayHelloListener_onSayHelloEndCallbackMiddle(eventName,  info);
    delete ptr;
}

bool funcTest(bool& v, std::string& out)
{
    if (v) {
        out = "ret is true";
    } else {
        out = "ret is false";
    }
    return true;
}
}
}

```

##### 增加子系统

在源码/build/subsystem_config.json中增加子系统选项。如下所示：

```
"napitest": {
    "project": "hmf/napitest",
    "path": "foundation/napitest",
    "name": "napitest",
    "dir": "foundation"
  }
```

#### 添加功能模块

在产品配置中添加上述子系统的功能模块，编译到产品产出文件中，例如在源码/productdefine/common/products/rk3566.json中增加part选项，其中第一个napitest就是BUILD.gn文件中的subsystem_name，第二个napitest就是BUILD.gn文件中的part_name。

    "napitest:napitest":{}

#### 编译验证

编译成功后，就会在 /out/产品名/packages/phone/system/lib/module/ 生成libnapitest.z.so，如下所示：

    /out/ohos-arm-release/packages/phone/system/lib/module

### ohos.build方式集成

#### 建立模块位置

模块目录理论上可在OpenHarmony工程的任一位置，假设OpenHarmony代码库的目录为OHOS_SRC，在OHOS_SRC/foundation目录下，建测试模块目录：napitest。napitest目录结构如下：

    napitest
    |-- binding.gyp
    |-- BUILD.gn
    |-- ohos.build
    |-- napitest.cpp
    |-- napitest.h
    |-- napitest_middle.h
    |-- napitest_middle.cpp
    |-- test.sh
    |-- tool_utility.cpp
    |-- tool_utility.h

其中ohos.build为新增的编译配置文件，其它为工具生成的代码。

#### 编译修改点

##### 修改BUILD.gn文件

将deps中"//foundation/arkui/napi:ace_napi"的修改为"//foundation/ace/napi:ace_napi"，修改后的BUILD.gn文件内容如下所示：

```
import("//build/ohos.gni")

ohos_shared_library("napitest")
{
    sources = [
        "napitest_middle.cpp",
        "../serviceCode/NodeISayHello.cpp",     # 将业务代码编译进去
        "napitest.cpp",
        "tool_utility.cpp",
    ]
    include_dirs = [
        ".",
        "//third_party/node/src",
    ]
    deps=[
        "//foundation/ace/napi:ace_napi",
        "//base/hiviewdfx/hilog/interfaces/native/innerkits:libhilog",
    ]
    remove_configs = [ "//build/config/compiler:no_rtti" ]
    cflags=[
    ]
    cflags_cc=[
        "-frtti",
    ]
    ldflags = [
    ]
    
    relative_install_dir = "module"
    part_name = "napitest"
    subsystem_name = "napitest"
}
```

若用户需要修改子系统和部件名称，则根据自身需求修改BUILD.gn文件和ohos.build文件中子系统与部件名称即可。

##### 修改ohos.build文件

其中module_list选项中的"//foundation/napitest"指的是napitest目录，":napitest"指的是上面BUILD.gn中的目标ohos_shared_library("napitest")。

```
{
  "subsystem": "napitest",
  "parts": {
    "napitest": {
      "module_list": [
        "//foundation/napitest:napitest"
      ],
      "test_list": []
    }
  }
}
```

##### 修改napitest.cpp文件

为方便调试，在napitest.cpp文件中增加业务代码。以修改napitest.cpp文件为例，在以下方法中增加业务代码，

在sayHello方法中增加注册的object回调方法的调用：

```
...
// 业务代码调用 onSayHelloStart callback
napitest::napitest_interface::NodeISayHello::listener_.NodeISayHelloListener_onSayHelloStartCallback(info1);
// 业务代码调用 onSayHelloEnd callback
napitest::napitest_interface::NodeISayHello::listener_.NodeISayHelloListener_onSayHelloEndCallback(info2);
...
```

在sayHi方法中增加register注册的回调方法的调用：

```
...
napitest::napitest_interface::NodeISayHello *ptr = new napitest::napitest_interface::NodeISayHello();
uint32_t callbackNum = 50;
ptr->CallbackfuncCallback(callbackNum);
delete ptr;
...
```

在sayHelloWithResponse方法中增加Promise回调方法的调用：

```
...
out.errMsg = "";
out.response = "rec hello.";
out.result = 0;
...
```

在funcTest方法中增加普通函数的业务逻辑：

```
...
if (v) {
    out = "ret is true";
} else {
    out = "ret is false";
}
...
```

增加业务代码之后的文件如下所示：

```
#include "napitest.h"
#include "napitest_middle.h"
#include "hilog/log.h"
static constexpr OHOS::HiviewDFX::HiLogLabel LABEL = {LOG_CORE, 0XD002E00, "NAPITESTNAPILayer"};
#define NAPITEST_LOGI(fmt, ...) OHOS::HiviewDFX::HiLog::Info(LABEL, \
    	"%{public}s:%{public}d " fmt, __func__, __LINE__, ##__VA_ARGS__)

namespace napitest {
namespace napitest_interface {
NodeISayHelloListener NodeISayHello::listener_ = {};
bool NodeISayHello::addSayHelloListener(NodeISayHelloListener& listener)
{
    NodeISayHello::listener_ = listener;
    return true;
}

bool NodeISayHello::removeSayHelloListener(NodeISayHelloListener& listener)
{
    return true;
}

bool NodeISayHello::registerCallbackfunc()
{
    return true;
}

// 供业务调用的回调接口
void NodeISayHello::CallbackfuncCallback(NUMBER_TYPE_2& wid)
{
    std::string eventName = "Callbackfunc";
    NodeISayHello_middle *ptr = new NodeISayHello_middle();
    ptr->CallbackfuncCallbackMiddle(eventName,  wid);
    delete ptr;
}

bool NodeISayHello::unRegisterCallbackfunc()
{
    return true;
}

bool NodeISayHello::sayHello(std::string& from, std::string& to, NUMBER_TYPE_9& sayType)
{
    NAPITEST_LOGI("NAPITEST_LOGI sayHello from = %s\r\n", from.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHello to = %s\r\n", to.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHello sayType = %d\r\n", sayType);
    SayInfo info1;
    info1.from = "js1";
    uint32_t a = 992;
    info1.fromId.emplace(a);
    uint32_t b = 1014;
    info1.toId.emplace(b);
    info1.to = "native1";
    info1.content = "hello1";
    info1.saidTime = "123456789";
    info1.isEnd = false;
    SayInfo info2;
    info2.from = "native";
    uint32_t c = 101;
    info2.fromId.emplace(c);
    uint32_t d = 99;
    info2.toId.emplace(d);
    info2.to = "js";
    info2.content = "hello";
    info2.saidTime = "987654321";
    info2.isEnd = true;
    // 业务代码调用 onSayHelloStart callback
    listener_.NodeISayHelloListener_onSayHelloStartCallback(info1);
    // 业务代码调用 onSayHelloEnd callback
    listener_.NodeISayHelloListener_onSayHelloEndCallback(info2);
    return true;
}

bool NodeISayHello::sayHi(std::string& from, std::string& to, NUMBER_TYPE_10& sayType)
{
    NAPITEST_LOGI("NAPITEST_LOGI sayHi from = %s\r\n", from.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHi to = %s\r\n", to.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHi sayType = %d\r\n", sayType);
    NodeISayHello *ptr = new NodeISayHello();
    uint32_t callbackNum = 50;
    ptr->CallbackfuncCallback(callbackNum);
    delete ptr;
    return true;
}

bool NodeISayHello::sayHelloWithResponse(std::string& from, std::string& to, NUMBER_TYPE_11& sayType,
    uint32_t& outErrCode, AUTO_INTERFACE_5& out)
{
    NAPITEST_LOGI("NAPITEST_LOGI sayHelloWithResponse from = %s\r\n", from.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHelloWithResponse to = %s\r\n", to.c_str());
    NAPITEST_LOGI("NAPITEST_LOGI sayHelloWithResponse sayType = %d\r\n", sayType);
    out.errMsg = "";
    out.response = "rec hello.";
    out.result = 0;
    return true;
}

AUTO_INTERFACE_5 NodeISayHello::auto_interface_5OutRes = {};
void NodeISayHello::auto_interface_5SetCbValue(NUMBER_TYPE_6 result, std::string errMsg, std::string response)
{
    NodeISayHello::auto_interface_5OutRes.result = result;
    NodeISayHello::auto_interface_5OutRes.errMsg = errMsg;
    NodeISayHello::auto_interface_5OutRes.response = response;
    return;
}

bool NodeISayHelloListener::onSayHelloStart()
{
    return true;
}

// 供业务调用的回调接口
void NodeISayHelloListener::NodeISayHelloListener_onSayHelloStartCallback(SayInfo& info)
{
    std::string eventName = "NodeISayHelloListener_onSayHelloStart";
    NodeISayHelloListener_middle *ptr = new NodeISayHelloListener_middle();
    ptr->NodeISayHelloListener_onSayHelloStartCallbackMiddle(eventName,  info);
    delete ptr;
}

bool NodeISayHelloListener::onSayHelloEnd()
{
    return true;
}

// 供业务调用的回调接口
void NodeISayHelloListener::NodeISayHelloListener_onSayHelloEndCallback(SayInfo& info)
{
    std::string eventName = "NodeISayHelloListener_onSayHelloEnd";
    NodeISayHelloListener_middle *ptr = new NodeISayHelloListener_middle();
    ptr->NodeISayHelloListener_onSayHelloEndCallbackMiddle(eventName,  info);
    delete ptr;
}

bool funcTest(bool& v, std::string& out)
{
    if (v) {
        out = "ret is true";
    } else {
        out = "ret is false";
    }
    return true;
}
}
}

```

##### 增加子系统

在源码/build/subsystem_config.json中增加子系统选项。如下所示：

```
"napitest": {
    "project": "hmf/napitest",
    "path": "foundation/napitest",
    "name": "napitest",
    "dir": "foundation"
  }
```

#### 添加功能模块

在产品配置中添加上述子系统的功能模块，编译到产品产出文件中，例如在源码/productdefine/common/products/rk3566.json中增加part选项，其中第一个napitest就是BUILD.gn文件中的subsystem_name，第二个napitest就是BUILD.gn文件中的part_name。

    "napitest:napitest":{}

#### 编译验证

编译成功后，就会在 /out/产品名/packages/phone/system/lib/module/ 生成libnapitest.z.so，如下所示：

    /out/ohos-arm-release/packages/phone/system/lib/module

