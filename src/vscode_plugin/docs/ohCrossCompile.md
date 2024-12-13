# OpenHarmony 交叉编译功能

## 简介

OpenHarmony 交叉编译功能使开发者能够简单快速地调用 OpenHarmony SDK 中的 native 工具链工具，将三方库源码编译为 OpenHarmony 二进制文件和头文件。

用户只需简单操作，通过 vscode 交互界面确认编译方式、目标系统架构、 OpenHarmony SDK 中 native 工具链位置等信息后，本功能即可自动生成并拼接编译命令，送入终端执行编译与安装操作。对于所执行的具体命令，本功能还提供了清晰的配置文件，用户可根据实际情况对其进行灵活修改，以满足各种需求。

## 约束

**系统**：建议 Ubuntu 20.04 或 Windows 10

**依赖版本**：VS Code 1.62.0

------

若在 Windows 10 系统下使用本功能，则还需首先准备编译环境。本功能依赖于 mingw-w64 项目中 w64devkit 包所提供的 GCC 编译器来执行 make 操作，需下载并安装 w64devkit 工具：

1. 下载 w64devkit 包。在链接 [Releases · skeeto/w64devkit](https://github.com/skeeto/w64devkit/releases) 中选择合适版本并下载；

2. 安装 w64devkit 至合适路径，并将其安装目录下的 bin 目录加入系统环境变量 Path 中；

3. 在 cmd 中执行命令`mingw32-make -v`以验证安装状态。若有如下输出则证明安装成功：

   ```cmd
   Microsoft Windows [版本 10.0.19045.5247]
   (c) Microsoft Corporation。保留所有权利。
   
   C:\Users\Administrator>mingw32-make -v
   GNU Make 4.4.1
   Built for x86_64-w64-mingw32
   Copyright (C) 1988-2023 Free Software Foundation, Inc.
   License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
   This is free software: you are free to change and redistribute it.
   There is NO WARRANTY, to the extent permitted by law.
   ```

   

## 使用方法

### 首次使用

首次使用本功能时，使用流程为：

1. 在 VSCode 资源管理器中，右键要编译的三方库源码目录，选择 **[OpenHarmony 交叉编译]** 选项以启动本功能：（以 cJSON 为例）

   ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_menu.png)

2. 本功能启动后，会自动检测所选目录中是否存在 Makefile 或 CMakeLists.txt 文件。若检测到只有二者其一存在，则会自动使用对应编译方式；若二者均存在，则需要用户指定具体编译方式：（以 cmake 方式为例）

   ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_toolPick.png)

3. 根据实际需求选择目标系统架构，可多选。若需编译64位二进制文件，则应勾选 **[arm64-v8a]** 架构；若需编译32位二进制文件，则应勾选 **[armeabi-v7a]** 架构。（以全选为例）

   ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_archPick.png)

4. 选择 OpenHarmony SDK 的来源是本地还是在线下载：

   ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_sourcePick.png)

   - 若选择使用本地已有的 SDK ，则需选择本地 OpenHarmony SDK 目录下 native 文件夹所在路径：

     ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_sourcePick_selectNative.png)

   - 若选择在线下载，则需选择所要下载 SDK 的具体版本：

     ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_versionPick.png)

5. 等待插件运行。若选择本地 SDK ，插件会自动拼接编译及安装命令，调起终端执行；若选择在线下载 SDK ，插件会在 SDK 下载解压完成后自动拼接编译及安装命令，调起终端执行。（以选择本地 SDK 为例）

   ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_compilation.png)

6. 查看安装文件。交叉编译完成后，所得二进制文件和头文件会自动安装在 `[三方库目录]/ohCrossCompile/[目标系统架构]/installed` 路径下：

   ![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_installedFiles.png)

### 后续使用

后续再次使用本功能时，在 VSCode 资源管理器中右键要编译的三方库源码目录，选择 **[OpenHarmony 交叉编译]** 选项即可按以往配置直接开始交叉编译过程：

![](https://gitee.com/openharmony/napi_generator/raw/master/src/vscode_plugin/images/ohCrossCompile_menu_2.png)

### 高级配置

本功能的各有关配置存储在 `[三方库目录]/ohCrossCompile/config.json` 文件中，用户若有更高级的自定义需求，可以通过修改该配置文件来实现。如上例中，所生成的配置文件内容为：

```json
{
    "settings": {
        "compileTool": "cmake",
        "nativePath": "D:/Public_sdk/11/ohos-sdk/windows/native",
        "thirdPartyPath": "d:/TestWork/VariousTests/cJSON",
        "ohArchitecture": [
            "arm64-v8a",
            "armeabi-v7a"
        ]
    },
    "actions": [
        {
            "compileTool": "cmake",
            "ohArchitecture": "arm64-v8a",
            "nativePath": "D:/Public_sdk/11/ohos-sdk/windows/native",
            "thirdPartyPath": "d:/TestWork/VariousTests/cJSON",
            "installPath": "d:/TestWork/VariousTests/cJSON/ohCrossCompile/arm64-v8a/installed",
            "cwd": "d:/TestWork/VariousTests/cJSON/ohCrossCompile/arm64-v8a",
            "commands": [
                {
                    "command": "cd d:/TestWork/VariousTests/cJSON/ohCrossCompile/arm64-v8a",
                    "arguments": []
                },
                {
                    "command": "D:/Public_sdk/11/ohos-sdk/windows/native/build-tools/cmake/bin/cmake.exe",
                    "arguments": [
                        "-G \"MinGW Makefiles\"",
                        "-DCMAKE_SH=\"CMAKE_SH-NOTFOUND\"",
                        "-DCMAKE_TOOLCHAIN_FILE=D:/Public_sdk/11/ohos-sdk/windows/native/build/cmake/ohos.toolchain.cmake",
                        "-DCMAKE_INSTALL_PREFIX=d:/TestWork/VariousTests/cJSON/ohCrossCompile/arm64-v8a/installed",
                        "-DOHOS_ARCH=arm64-v8a",
                        "../..",
                        "-L"
                    ]
                },
                {
                    "command": "mingw32-make",
                    "arguments": []
                },
                {
                    "command": "mingw32-make install",
                    "arguments": []
                }
            ]
        },
        {
            "compileTool": "cmake",
            "ohArchitecture": "armeabi-v7a",
            "nativePath": "D:/Public_sdk/11/ohos-sdk/windows/native",
            "thirdPartyPath": "d:/TestWork/VariousTests/cJSON",
            "installPath": "d:/TestWork/VariousTests/cJSON/ohCrossCompile/armeabi-v7a/installed",
            "cwd": "d:/TestWork/VariousTests/cJSON/ohCrossCompile/armeabi-v7a",
            "commands": [
                {
                    "command": "cd d:/TestWork/VariousTests/cJSON/ohCrossCompile/armeabi-v7a",
                    "arguments": []
                },
                {
                    "command": "D:/Public_sdk/11/ohos-sdk/windows/native/build-tools/cmake/bin/cmake.exe",
                    "arguments": [
                        "-G \"MinGW Makefiles\"",
                        "-DCMAKE_SH=\"CMAKE_SH-NOTFOUND\"",
                        "-DCMAKE_TOOLCHAIN_FILE=D:/Public_sdk/11/ohos-sdk/windows/native/build/cmake/ohos.toolchain.cmake",
                        "-DCMAKE_INSTALL_PREFIX=d:/TestWork/VariousTests/cJSON/ohCrossCompile/armeabi-v7a/installed",
                        "-DOHOS_ARCH=armeabi-v7a",
                        "../..",
                        "-L"
                    ]
                },
                {
                    "command": "mingw32-make",
                    "arguments": []
                },
                {
                    "command": "mingw32-make install",
                    "arguments": []
                }
            ]
        }
    ]
}
```

其中各字段含义为：

- `settings`字段用以存储自动检测出的及与用户交互所获得的配置信息，包括编译方式`compileTool`、OpenHarmony SDK 中 native 工具目录位置`nativePath`、交叉编译的三方库目录位置`thirdPartyPath`、交叉编译的目标系统架构`ohArchitecture`。
- `actions`字段用以存储交叉编译所执行的各动作（如编译64位三方库、编译32位三方库）。每个动作对象中的`installPath`字段存储了本次交叉编译动作的安装目录；`cwd`字段存储了在终端执行交叉编译命令时所处的路径；`commands`字段存储了各条按序执行的交叉编译命令，其下一级对应于各条命令的`arguments`字段则存储了该命令的附加参数。

当用户使用本功能时，插件会按序读取配置文件信息：

1. 若`actions`字段为空，则会根据`settings`字段中信息，生成各动作对象的默认内容；
2. 若`actions`字段下，各动作对象中的`commands`字段为空，则会根据该动作对象`compileTool`、`ohArchitecture`、`nativePath`、`installPath`、`cwd`字段中信息，生成该动作对象的`commands`字段默认内容；
3. 最后根据各动作对象中的`commands`字段内容，拼接交叉编译命令，并送入终端执行。

在具体业务场景下，用户若有自定义需求，则既可以直接修改`commands`字段下的具体命令，也可以在修改上一级信息后删除`actions`字段或`commands`字段中的内容以使其重新生成，从而实现对不同实际需求的灵活适应。

## 测试

交叉编译完成后，用户可在 OpenHarmony 设备上自行测试所得二进制文件的可用性。

具体测试过程可参考链接 [make方式交叉编译后测试](https://gitee.com/openharmony-sig/tpc_c_cplusplus/blob/master/docs/make_portting.md#测试) 或 [cmake方式交叉编译后测试](https://gitee.com/openharmony-sig/tpc_c_cplusplus/blob/master/docs/cmake_portting.md#测试)