# NAPI框架生成代码集成到OpenHarmony的方法

## 场景说明

为了实现工具生成的接口被其他子系统或者应用调用，需将生成的代码编译集成到OpenHarmony系统中，使其生成动态库，供OpenHarmony应用层调用。
本文介绍如何将工具生成的源码利用OpenHarmony编译系统生成动态库供应用层调用。

## 建立模块位置

模块目录理论上可以建立在OpenHarmony代码库的任何地方，为行文方便，假设OpenHarmony代码库的目录为`OHOS_SRC`，在`OHOS_SRC`目录下，例如建立此次测试模块目录：napitest。此时，`OHOS_SRC`目录下应该有 ark, foundation, device, …, napitest等目录，其中napitest就是刚刚建立的，在napitest目录下，把之前用可执行文件或者插件转换出来的文件全部拷贝到该目录下，并且在该目录下新建一个文件ohos.build。例如napitest目录下有以下文件：

    foundation/napitest
    |-- binding.gyp
    |-- BUILD.gn
    |-- ohos.build
    |-- napitest.cpp
    |-- napitest.h
    |-- napitest_middle.cpp
    |-- test.sh
    |-- x_napi_tool.cpp
    |-- x_napi_tool.h

## 编译修改点

### 修改build.gn文件

```
import("//build/ohos.gni")

ohos_shared_library("napitest")
{
    # 指定编译源文件
    sources = [
        "napitest_middle.cpp",
        "napitest.cpp",
        "x_napi_tool.cpp",
    ]
    include_dirs = [
        ".",
        "//third_party/node/src",
    ]
    # 指定编译依赖，如果依赖第三方库，需要在此添加
    deps=[
        "//foundation/ace/napi:ace_napi",
        "//base/hiviewdfx/hilog/interfaces/native/innerkits:libhilog",
    ]
    public_deps = [
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
    # 指定库生成的路径
    relative_install_dir = "module"
    # 主要是修改下面两条内容，子系统及其组件，后面会引用
    part_name = "napitest_interface"
    subsystem_name = "napitest"
}
```

### 修改ohos.build文件
其中module_list选项中的"//foundation/napitest"指的是napitest目录，":napitest"指的是上面BUILD.gn中的目标ohos_shared_library("napitest")。

```
{
  "subsystem": "napitest",
  "parts": {
    "napitest_interface": {
      "module_list": [
        "//foundation/napitest:napitest"
      ],
      "test_list": []
    }
  }
}
```

### 增加子系统

在源码/build/subsystem_config.json中增加子系统选项。如下所示：

```
"napitest": {
    "project": "hmf/napitest",
    "path": "foundation/napitest",
    "name": "napitest",
    "dir": "foundation"
  }
```

### 添加功能模块
在产品配置中添加上述子系统的功能模块，编译到产品产出文件中，例如在源码/productdefine/common/products/rk3566.json中增加part选项，其中napitest就是上面填的part_name，napitest_interface就是上面填的subsystem_name。

    "napitest:napitest_interface":{}

## 编译验证

编译成功后，就会生成libnapitest.z.so，目录如下所示：

    /out/ohos-arm-release/packages/phone/system/lib/module



