# NativeProj46R 使用 ipc_demo_framework（NDK / NAPI）

**零基础 IPC 全链路教程**（Service / Client / 事务码与 Parcel / 导出 / HAP）：**`src/skills/ohipc/howtoipc.md`**；终端摘要：**`python3 <napi_generator>/src/skills/ohipc/ohipc.py howto`**（**`--full`** 打印全文）。**`ohproj.py` 不提供 `ipc-howto`**。

## 背景

- **公开 NDK**：**IPCKit**（`#include <IPCKit/ipc_kit.h>`，链接 **`libipc_capi.so`**）提供 **`OHIPCParcel` / `OHIPCRemoteProxy::SendRequest`** 等，适合**通用**跨进程编解码；**不绑定**某一业务 SystemAbility。
- **本仓库 `ipc_demo_framework`**：对 **`ipc_demo_server`（SA `0x00010001`）** 提供稳定 **C ABI**（`ipc_demo_framework_capi.h`）及 **`IpcDemoFramework_RegisterNapi`**，内部仍走 **`ipc_core` + samgr**（与 `ipc_demo_client` 一致），供 **Native 应用**在**已集成该 so 的系统镜像**上调用。

## 产物路径（单编后，系统镜像 / 预置库）

```text
out/<product>/communication/ipc_example_service/libipc_demo_framework.z.so
out/<product>/communication/ipc_example_service/libipc_example_parcel.z.so
```

**`python3 <napi_generator>/src/skills/ohipc/ohipc.py paths`** 会打印上述路径及 **`ipc_demo_*`** 可执行文件、进程内单测路径。

头文件（拷入应用 `cpp/include` 或引用源码树）：

```text
foundation/communication/ipc_example/framework/include/ipc_demo_framework_capi.h
foundation/communication/ipc_example/framework/include/ipc_demo_framework_napi.h
```

## 应用侧 CMake（示例）

将设备或 `out` 中的 **`libipc_demo_framework.z.so`** 放到可链接路径（或 `IMPORTED` 目标），在 **`entry`** 中：

```cmake
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)
target_link_libraries(entry PUBLIC
  libace_napi.z.so
  libipc_demo_framework.z.so
)
```

**注意**：标准 **OpenHarmony SDK** 不一定自带 `libipc_demo_framework`；需使用**已编译进系统分区**的镜像，或把该 so 作为**预置库**随应用分发（需签名与包管理策略允许）。

## `napi_init.cpp` 合并 NAPI（与 libentry 同库）

在模块 **`Init`** 里对 **`exports`** 调用：

```cpp
#include "ipc_demo_framework_napi.h"

static napi_value Init(napi_env env, napi_value exports) {
    exports = IpcDemoFramework_RegisterNapi(env, exports);
    // ... 其他 NAPI ...
    return exports;
}
```

## ArkTS 侧（示例）

声明（按工程 `libentry.so` 实际模块名调整）：

```typescript
import ipcFw from 'libentry.so';
// ipcDemoFwInit(): number;
// ipcDemoFwConnect(name: string): number;
// ipcDemoFwSendString(s: string): number;
// ipcDemoFwCallDemoMagic(): number;
```

调用顺序建议：`ipcDemoFwInit` → `ipcDemoFwConnect('myApp')` → `ipcDemoFwSendString('hello')` → `ipcDemoFwCallDemoMagic()` → `ipcDemoFwDisconnect` / `ipcDemoFwDeinit`。

## `module.json5` 能力

- 声明 **`SystemCapability.Communication.IPC.Core`**（与使用 **IPCKit** 一致）。
- 访问 **厂商段 SA** 通常还需 **合适 ACL / 预置应用 / 调试策略**；按产品安全要求配置，否则 `GetSystemAbility` 可能为空。

## 与纯 `@ohos.rpc` 的关系

- **ArkTS 仅使用 `@ohos.rpc`**：适合平台已暴露的 **RemoteObject** 链路；自定义 **SystemAbility** 的获取方式随版本与权限变化较大。
- **`ipc_demo_framework`**：把**已验证**的 **C++ Proxy 路径**封成 **C + NAPI**，便于 **NativeProj46R** 统一在 **NDK** 层完成连接与 RPC。

## 仓库内示例工程：`ipc_example/IpcNativeProj46R`

由 **`src/skills/ohhap/NativeProj46R`** 模板拷贝而来，演示 **与 `@ohos.rpc` 类似的两种用法**。

### ArkTS（`import` 独立 native 模块）

- **`import ipcEx from 'libipc_example_parcel.so'`**（与 `import rpc from '@ohos.rpc'` 同属「按模块名加载 so」；运行时加载 **`libipc_example_parcel.so`**）。
- 类型与 ohpm 包：**`foundation/communication/ipc_example/libipc_example_parcel.so/`**（`oh-package.json5` + `Index.d.ts`），在 **`entry/oh-package.json5`** 里以 **`file:../../libipc_example_parcel.so`** 依赖。
- **源码唯一来源**：**`framework/ipc_example_parcel_capi.cpp`**、**`ipc_example_parcel_napi.cpp`**（与 GN 目标 **`//foundation/communication/ipc_example/framework:ipc_example_parcel`** 同源）。

### HAP 内 `libs/`：由 CMake 编入（推荐，双 ABI 与设备一致）

Hvigor 打 native 包时读取的是 **`entry/libs/<abi>/`** 以及 **CMake/Ninja 产出的 so**，**不会**把 **`entry/src/main/libs/`** 里的预置文件打进 HAP。

**做法**（与当前 **`IpcNativeProj46R`** 一致）：在 **`entry/src/main/cpp/CMakeLists.txt`** 里除 **`add_library(entry …)`** 外再 **`add_library(ipc_example_parcel SHARED …)`**，源文件用相对路径指向 **`${IPC_EX_ROOT}/framework/ipc_example_parcel_*.cpp`**，并：

- **`target_include_directories(ipc_example_parcel PRIVATE …/framework/include)`**
- **`target_link_libraries(ipc_example_parcel PUBLIC libace_napi.z.so libipc_capi.so)`**

**`build-profile.json5`** 的 **`abiFilters`** 须包含 **`arm64-v8a`** 与 **`armeabi-v7a`**（或你的目标 ABI）。构建后主 HAP 中应有：

```text
libs/arm64-v8a/libipc_example_parcel.so
libs/armeabi-v7a/libipc_example_parcel.so
```

（CMake 产物名为 **`libipc_example_parcel.so`**；与 ETS **`import … from 'libipc_example_parcel.so'`** 一致。）

**自检**：`unzip -l entry-default-unsigned.hap | grep ipc_example_parcel`。若缺少该 so，ArkTS 侧会得到 **`undefined`**（如 **`ipcExampleParcelCreate of undefined`**）。

**编译 / 签名 / 单元测试上机**：委托 **ohproj**（与任意 NativeProj46R 相同）：

```bash
python3 src/skills/ohproj/ohproj.py build   <…/IpcNativeProj46R>
python3 src/skills/ohproj/ohproj.py build-test <…/IpcNativeProj46R>
python3 src/skills/ohproj/ohproj.py sign    <…/IpcNativeProj46R> release
python3 src/skills/ohproj/ohproj.py test    <…/IpcNativeProj46R>
```

（等价：**`hapbuild.py`** + **`ohhdc.py deploy-test`**，见 **ohproj/SKILL.md**。）

### entry 的 cpp 直接调 `IpcExampleParcel_*`（可选）

若 **`napi_init.cpp` 等同 ABI 的 cpp** 要链接 **`IpcExampleParcel_*`**：在 **`CMakeLists.txt`** 中为 **`entry`** 增加 **`include_directories(…/framework/include)`**、**`target_link_libraries(entry … ipc_example_parcel)`**（与上文的 **`ipc_example_parcel`** 目标同库，无需再拷预置 so）。

### 系统镜像（GN 单编，与 HAP 内 CMake 并行）

- **`./build.sh --product-name <product> --build-target ipc_example_parcel`** → **`out/.../libipc_example_parcel.z.so`**（架构随产品工具链，常用于系统分区或对照）。
- **`libipc_demo_framework.z.so`**：GN 侧 **`deps` 含 `ipc_example_parcel`**，仅保留 **`ipcDemoFw*`** NAPI。

**Bundle**：`ohos.communication.ipc_example.nativeproj`。
