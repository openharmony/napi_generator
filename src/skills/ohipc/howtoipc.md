# OpenHarmony IPC 开发：零基础手把手教程（以 `ipc_example` 为纲）

> **本文目标**：假设你**从未写过 OHOS 跨进程 IPC**，只要按章节顺序准备环境、理解目录、单编、推送、跑通服务端与客户端，再进一步接 **NDK / NAPI / ArkTS 应用**，能**独立完成一条「定义接口 → Stub/Proxy → 事务码与 Parcel → 系统侧可执行文件 / 应用 HAP」**的全链路。  
> **可执行性**：凡涉及终端的命令，**以 §0.5 约定 + §16～§18 附录剧本为准**（含 **`OHOS_SRC` / `OHOS_PRODUCT`、hdc 源路径、HAP 工程根与 `unzip` 目录**）；子章节在理解原理时可能省略变量，**照抄跑通请用附录**。  
> **更短速查**：架构理论见同目录 **`ipcarch.md`**；命令与成功判据见 **`SKILL.md`**、**`ohipc.py`**；应用 CMake 与 HAP 细节见 **`NATIVEPROJ_IPC_FRAMEWORK.md`**；跨进程测试矩阵见 **`IPC_EXAMPLE_CROSS_PROCESS_TEST_REPORT.md`**。

---

## 0. 读前须知：你需要先有什么？

### 0.1 你将要操作的是什么？

- 一台已经能**正常全量或单编**同一套 **OpenHarmony 标准系统**源码的电脑（本教程以 **`rk3568`** 产品与路径示例）。
- 可选：一块已烧录该产品的**开发板**，且 PC 上 **`hdc list targets`** 能看到设备（用于板端推送 `ipc_demo_server` / `ipc_demo_client`）。
- 你会用到：
  - **终端**：`bash`，在**源码根目录**（能看到 **`build.sh`**）执行 **`./build.sh`**。
  - **编辑器**：改 `.cpp` / `.h` / `.gn` / `.json5` / `CMakeLists.txt` 等。

### 0.2 你**不需要**预先会什么？

- 不要求会先写 **IDL 自动生成**：本仓库样例 **`ipc_example`** 使用**手写 Stub / Proxy**（与 `ipc_demo_ipc.h` 里**事务码**、**Parcel 读写顺序**对齐），便于逐行阅读。
- 不要求会先写内核：IPC 走 **Binder + `ipc_core`**，样例进程是**普通用户态可执行文件**。

### 0.3 路径约定

下文如 **`foundation/communication/ipc_example/...`** 均相对于你的 **OpenHarmony 源码根**（存在 **`build.sh`** 的目录）。下文记为 **`OHOS_SRC`**。

### 0.35 `napi_generator` 与技能路径（与 `HOWTOSKILLS.md` 一致）

技能脚本在 **`napi_generator` 仓库**的 **`src/skills/`** 下，与 **`OHOS_SRC`** 通常是**两个不同目录**。请先设置：

```bash
export NAPI_GENERATOR_ROOT="/path/to/napi_generator"   # 含 src/skills/ohipc/ohipc.py 的仓库根
```

后文凡出现 **`"${NAPI_GENERATOR_ROOT}/src/skills/..."`**，请改为你的本机路径。**权威约定**为 **`napi_generator` 仓库根下的 `src/skills/...`**。

### 0.4 文档与脚本索引

| 资源 | 路径 |
|------|------|
| **本教程（零基础长文）** | `src/skills/ohipc/howtoipc.md`（相对 **napi_generator** 根） |
| 架构（分层、接口、扩展） | `src/skills/ohipc/ipcarch.md` |
| 技能说明与测试判据 | `src/skills/ohipc/SKILL.md` |
| 命令助手（howto / build / push / test） | `src/skills/ohipc/ohipc.py` |
| 应用接 `ipc_demo_framework` / `libipc_example_parcel` | `src/skills/ohipc/NATIVEPROJ_IPC_FRAMEWORK.md` |
| 样例部件源码 | `foundation/communication/ipc_example/`（相对 **`OHOS_SRC`**） |
| 原生应用工程技能 | `src/skills/ohproj/SKILL.md` |
| 全仓库技能索引 | `src/skills/HOWTOSKILLS.md` §4 |

**终端打印本教程摘要**（**`cd` 到 `OHOS_SRC` 或其子目录**，以便 **`ohipc.py`** 向上找到 **`build.sh`**）：

```bash
cd "${OHOS_SRC:-$(pwd)}"
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" howto
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" howto --full
```

### 0.5 执行约定（必读）：否则后文命令会对不上目录

| 规则 | 说明 |
|------|------|
| **`OHOS_SRC`** | 含 **`build.sh`** 的 OpenHarmony **源码根**。后文 **`out/<产品>/...`** 均指 **`$OHOS_SRC/out/...`**。 |
| **`./build.sh`** | **必须**在 **`$OHOS_SRC`** 下执行（`cd "$OHOS_SRC"` 后再跑）。 |
| **`ohipc.py`**（子命令 **`paths`** / **`howto`** 等） | 会从**当前工作目录**向上查找 **`build.sh`** 以定位 **`OHOS_SRC`**；你可以在 **`$OHOS_SRC` 下任意子目录**启动脚本，但 **`out/` 始终落在 `$OHOS_SRC/out/`**。 |
| **`hdc file send out/...`** | **不要**依赖「当前目录在子工程里」的相对路径；**推荐**一律写 **`"$OHOS_SRC/out/<产品>/communication/ipc_example_service/..."`**，避免找不到文件。 |
| **板测** | PC 上已安装 **hdc**，设备已连接；多设备时用 **`-t`** 或 **`OHIPC_HDC_TARGET`**（见 **§7.3**）。 |
| **HAP 编译（`IpcNativeProj46R`）** | 需 **HarmonyOS Command Line Tools**、**OpenHarmony SDK** 等（**`HOS_CLT_PATH`**、**`OHOS_SDK_PATH`**），与 **`src/skills/ohhap/SKILL.md`** 一致；**仅做 `ipc_demo_*` 板测可不设 SDK**。 |

**一键设定变量（每次开新终端可先执行）**：

```bash
export OHOS_SRC="/path/to/your/openharmony/src"   # 改成你的源码根，该目录下须有 build.sh
export OHOS_PRODUCT="${OHOS_PRODUCT:-rk3568}"     # 非 rk3568 时改成你的产品名
export NAPI_GENERATOR_ROOT="/path/to/napi_generator"  # 含 src/skills 的本仓库根
```

**自检**：

```bash
test -f "$OHOS_SRC/build.sh" && echo "OK: OHOS_SRC" || echo "FAIL: OHOS_SRC 下没有 build.sh"
test -f "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" && echo "OK: ohipc.py" || echo "FAIL: 请检查 NAPI_GENERATOR_ROOT"
```

---

## 1. 用一句话和一张「心智图」理解本教程在干什么

### 1.1 一句话

**SystemAbility（SA）** 在 **Service Registry** 里登记一个 **`SA ID`**；**服务端进程**里创建 **Stub** 对象并 **`AddSystemAbility`**；**客户端进程**用 **`GetSystemAbility`** 拿到 **`IRemoteObject`**，再包一层 **Proxy**，把参数写进 **`MessageParcel`**，通过 **`SendRequest(事务码, data, reply, option)`** 完成跨进程调用。

### 1.2 心智图（文字版）

```
[ ipc_demo_client 或 应用 NDK ]
           |
           |  GetSystemAbility(0x00010001)
           v
[ IRemoteObject -> IpcDemoProxy ]
           |
           |  SendRequest(REGISTER_CLIENT / SEND_STRING / ... , Parcel...)
           v
[ Binder 驱动 / ipc_core ]
           |
           v
[ ipc_demo_server 进程 ]
      IpcDemoServiceStub::OnRemoteRequest
           |
           +-- 读 data Parcel，写 reply Parcel
           +-- 可再持有指向客户端的 IRemoteObject（回调 / DeathRecipient）
```

**与「仅在本进程玩 Parcel」的区别**：

- **IPCKit（`OH_IPCParcel_*`）** 或本仓库 **`libipc_example_parcel.so`**：解决**怎么打包**；**不**替你连 SA。
- **`ipc_demo_server` + `ipc_demo_client`**：解决**怎么连上 SA 并 RPC**。

---

## 2. 名词表（看到缩写不慌）

| 名词 | 含义 |
|------|------|
| **SA / SystemAbility** | 系统能力在注册表中的逻辑实例；通过 **`SA ID`**（整数）查找 **`IRemoteObject`**。 |
| **Stub** | 服务端侧：继承 **`IPCObjectStub`**，实现 **`OnRemoteRequest`**，按 **事务码** 分支处理。 |
| **Proxy** | 客户端侧：持有远端 **`IRemoteObject`**，组 **`MessageParcel`** 并 **`SendRequest`**。 |
| **事务码（Transact code）** | `SendRequest` 的第一个参数；**必须与** Stub 里 `switch(code)` **一致**。 |
| **MessageParcel** | 跨进程载荷；**读写顺序**在客户端与服务端必须**严格对称**。 |
| **Interface Token / 描述符** | `WriteInterfaceToken` 等，用于校验「调的是不是这个接口」。 |
| **Parcelable** | 可序列化对象；本样例有 **`DemoBoxParcelable`** 等（见 `ipc_demo_parcelable.*`）。 |
| **DeathRecipient** | 远端进程死亡时回调；demo 里用于客户端断连后服务端清理 session。 |
| **厂商段 SA ID** | 本样例 **`0x00010001`（65537）**，在 `ipc_demo_ipc.h` 的 **`IPC_EXAMPLE_DEMO_SA_ID`**；需与系统 **`system_ability_definition.h`** 中厂商段约定一致（勿与系统保留 ID 冲突）。 |
| **部件（component）** | `bundle.json` 里 **`ipc_example_service`**；决定 GN 是否编入该产品。 |
| **inner_kits** | 部件对外暴露的头文件/SDK 入口；本样例 **`inner_kits` 为空**，应用侧**不能**像系统 API 一样直接 `external_deps` 引用 demo 头文件——需 **C ABI so**（`ipc_demo_framework`）或 **拷贝头文件 + 链预置 so**（见 **§8**）。 |

---

## 3. 先选路线：你要做哪一种？

**逐步可复制剧本**：**路线 A** → **§16 附录 A**；**路线 B** → **§17 附录 B**；**HAP（IpcNativeProj46R）** → **§18 附录 C**。操作前务必读完 **§0.5**。

### 3.1 路线 A：读懂 IPC + 板测（推荐零基础第一条）

- 单编 **`ipc_demo_server`**、**`ipc_demo_client`**，**hdc** 推到 **`/data/local/tmp/`**，先起服务端再起客户端。
- 判据见 **`SKILL.md` §5** 与 **`ohipc.py test`** 解析的正则。
- **优点**：不碰应用签名、不管 HAP；**专注** Stub/Proxy 与 Parcel。

### 3.2 路线 B：进程内 Parcel 自测（无 SA）

- 单编 **`ipc_demo_parcel_unittest`**（GTest），验证 **Parcel 对称读写**、**Parcelable** 等。
- **`ohipc.py test-parcel`** 推送并在设备上跑。

### 3.3 路线 C：应用 Native / ArkTS 接 demo SA

- 系统镜像需带 **`libipc_demo_framework.z.so`**（或应用合法分发该 so），应用声明 **`SystemCapability.Communication.IPC.Core`**，并处理 **获取厂商段 SA** 的权限/ACL（产品相关）。
- 详见 **`NATIVEPROJ_IPC_FRAMEWORK.md`** 与 **`IpcNativeProj46R`**。

### 3.4 路线 D：仅学 NDK Parcel（不接本 demo SA）

- 使用公开 **IPCKit**（`#include <IPCKit/ipc_kit.h>`，**`libipc_capi.so`**），或应用内 **`import 'libipc_example_parcel.so'`**（本仓库 **`framework`** 源码 + entry **CMake** 双 so 编入 HAP）。

---

## 4. `ipc_example` 仓库地图（改代码前先逛一遍）

### 4.1 顶层

| 路径 | 作用 |
|------|------|
| `foundation/communication/ipc_example/bundle.json` | 部件名 **`ipc_example_service`**、依赖 **`ipc` / `samgr` / `hilog` / `napi` 等**。 |
| `foundation/communication/ipc_example/BUILD.gn` | 聚合 **`ipc_example_components`**（可执行文件 + framework so）。 |
| `foundation/communication/ipc_example/include/ipc_demo_ipc.h` | **SA ID**、**接口描述符**、**事务码枚举**、**POD 结构体**（跨进程布局）。 |

### 4.2 服务端 / 客户端（C++）

| 路径 | 作用 |
|------|------|
| `services/BUILD.gn` | 目标 **`ipc_demo_server`**、**`ipc_demo_client`**。 |
| `services/ipc_demo_server_main.cpp` | **`InitAccessToken`** → **`AddSystemAbility`** → **`JoinWorkThread`**。 |
| `services/ipc_demo_service_stub.cpp` | **Stub**：`OnRemoteRequest` 分发各事务码。 |
| `services/ipc_demo_client_main.cpp` | **Client**：**`GetSystemAbility`** → **`IpcDemoProxy`** → 演示 RPC + 自测输出。 |
| `services/ipc_demo_proxy.cpp` / `ipc_demo_client_stubs.cpp` | **Proxy** 与各 **Client 侧 Stub**（给服务端回调用）。 |
| `services/ipc_demo_parcelable.cpp` + `include/ipc_demo_parcelable.h` | **Parcelable** 实现。 |

### 4.3 Framework（给应用导出能力）

| 路径 | 作用 |
|------|------|
| `framework/BUILD.gn` | **`ipc_example_parcel`**（Parcel NAPI 独立模块）、**`ipc_demo_framework`**（接 SA 的 C ABI + NAPI）。 |
| `framework/include/ipc_demo_framework_capi.h` | **`IpcDemoFramework_*`** C API。 |
| `framework/include/ipc_example_parcel_capi.h` | **`IpcExampleParcel_*`**（`OH_IPCParcel` 薄封装）。 |

### 4.4 应用示例工程

| 路径 | 作用 |
|------|------|
| `foundation/communication/ipc_example/IpcNativeProj46R/` | **HAP**：**`libentry.so`** + **`libipc_example_parcel.so`**；ETS **`import`** 与可选 **`ipc_demo_framework`** 说明见 **`NATIVEPROJ_IPC_FRAMEWORK.md`**。 |
| `foundation/communication/ipc_example/libipc_example_parcel.so/` | ohpm **`file:`** 类型包（`Index.d.ts`）。 |

### 4.5 单测

| 路径 | 作用 |
|------|------|
| `test/unittest/ipc_demo_parcel_unittest.cpp` | 进程内 **Parcel** GTest。 |

---

## 5. 产品与编译：让部件进 `rk3568`（或你的产品）

### 5.1 产品里是否包含本部件？

在 **`$OHOS_SRC`** 下执行（可复制）：

```bash
cd "$OHOS_SRC"
grep -R "ipc_example_service" productdefine/ --include='*.json' 2>/dev/null | head -20
grep -F "ipc_example_service" build/indep_component_whitelist.json
```

**期望**：至少一行 **`productdefine`** 命中；**`indep_component_whitelist.json`** 中含 **`ipc_example_service`**。

标准继承里常见片段（**`productdefine/common/inherit/rich.json`** 的 **communication** 子系统）：

```json
{ "component": "ipc_example_service", "features": [] }
```

若你的产品**不**继承该片段，需在自己的产品 JSON **同级结构**中增加 **`communication` 子系统**下的该 **component**（写法对齐现有 **`ipc`**、**`sampletest_service`** 等条目）。

### 5.2 白名单

**`build/indep_component_whitelist.json`** 中应含 **`ipc_example_service`**，否则部分构建场景会拒绝编入。

### 5.3 单编命令（必须在 `$OHOS_SRC`）

```bash
cd "$OHOS_SRC"
./build.sh --product-name "${OHOS_PRODUCT:-rk3568}" --build-target ipc_demo_server --build-target ipc_demo_client
```

**成功标志**：命令退出码 **0**；且 **§5.4** 中两个可执行文件路径 **`test -f`** 为真。

可选（同一 **`cd "$OHOS_SRC"`** 下）：

```bash
./build.sh --product-name "${OHOS_PRODUCT:-rk3568}" --build-target ipc_demo_parcel_unittest
./build.sh --product-name "${OHOS_PRODUCT:-rk3568}" --build-target ipc_demo_framework
./build.sh --product-name "${OHOS_PRODUCT:-rk3568}" --build-target ipc_example_parcel
```

或使用脚本（**当前目录须在 `$OHOS_SRC` 或其子目录**，以便找到 `build.sh`）：

```bash
cd "$OHOS_SRC"
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "${OHOS_PRODUCT:-rk3568}" build-all
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "${OHOS_PRODUCT:-rk3568}" paths
```

**`paths` 成功标志**：输出里 **`ipc_demo_server`**、**`ipc_demo_client`** 均为 **`exists=True`**。

### 5.4 典型产物路径

将 **`rk3568`** 换成你的 **`OHOS_PRODUCT`**。完整路径为 **`$OHOS_SRC/out/<产品>/...`**：

```text
$OHOS_SRC/out/${OHOS_PRODUCT}/communication/ipc_example_service/ipc_demo_server
$OHOS_SRC/out/${OHOS_PRODUCT}/communication/ipc_example_service/ipc_demo_client
$OHOS_SRC/out/${OHOS_PRODUCT}/communication/ipc_example_service/libipc_demo_framework.z.so
$OHOS_SRC/out/${OHOS_PRODUCT}/communication/ipc_example_service/libipc_example_parcel.z.so
$OHOS_SRC/out/${OHOS_PRODUCT}/tests/unittest/communication/ipc_example_service/ipc_demo_parcel_unittest
```

**机上验证（在 `$OHOS_SRC`）**：

```bash
P="${OHOS_PRODUCT:-rk3568}"
ls -la "$OHOS_SRC/out/$P/communication/ipc_example_service/ipc_demo_server" \
       "$OHOS_SRC/out/$P/communication/ipc_example_service/ipc_demo_client"
```

全量镜像且 **`install_enable = true`** 时，**`ipc_demo_server` / `ipc_demo_client`** 一般会进 **`/system/bin/`**（具体以产品打包为准）。**板测**常用 **`hdc file send`** 到 **`/data/local/tmp/`**。

### 5.5 阶段式执行清单（从零跟做到跑通）

| 阶段 | 做什么 | 成功标志 |
|------|--------|----------|
| **0** | 确认源码根能 **`./build.sh`**；可选 **`hdc list targets`** | 无 |
| **1** | **`grep ipc_example_service productdefine/`** 与 **`build/indep_component_whitelist.json`** | 产品会编进该部件 |
| **2** | **`build-all`** 或单编 **server/client** | **`out/.../ipc_demo_server`** 存在 |
| **3** | **`hdc file send`** + **`chmod`** + **`nohup` 起 server** | **`ipc_srv.log`** 或 stdout 有注册成功语义 |
| **4** | 跑 **`ipc_demo_client`** 或 **`ohipc.py test`** | 判据字符串齐（见 **`src/skills/ohipc/SKILL.md` §5.2–§5.4**） |
| **5** | （可选）**`build-unittest`** + **`test-parcel`** | GTest **PASSED** |
| **6** | （可选）**`IpcNativeProj46R`**：**`ohproj build`→`test`** | Hypium 汇总 **Pass** 与 HAP 含 **`libipc_example_parcel.so`** |

---

## 6. Service（服务端）开发：你要改哪里？

### 6.1 启动与注册 SA（必读）

打开 **`services/ipc_demo_server_main.cpp`**，顺序固定为：

1. **`InitAccessToken()`**（`NativeTokenInfoParams` 里 **`processName`** 与 **`aplStr`** 按样例；正式产品需按安全模型调整）。
2. **`IPCSkeleton::SetMaxWorkThreadNum(...)`**。
3. **`SystemAbilityManagerClient::GetInstance().GetSystemAbilityManager()`**。
4. **`new IpcDemoServiceStub()`**，必要时 **`SetRequestSidFlag(true)`**（与框架会话语义相关，保持与现网 demo 一致即可）。
5. **`saMgr->AddSystemAbility(IPC_EXAMPLE_DEMO_SA_ID, obj)`**；**`ret == ERR_OK`** 才算注册成功。
6. **`IPCSkeleton::JoinWorkThread()`** 阻塞处理请求。

**常见翻车点**：未 **`JoinWorkThread`** 就退出进程 → 客户端 **`GetSystemAbility`** 可能偶发失败或立刻断连。

### 6.2 扩展「新 RPC」的最小步骤（Checklist）

假设你要加 **`FOO_BAR = 99`**：

1. **`ipc_demo_ipc.h`**  
   - 在 **`enum DemoTransactCode`** 增加 **`FOO_BAR = 99`**。  
   - 若需新结构体，定义 **POD** 并注释**字段顺序**；复杂类型优先 **Parcelable**。
2. **`ipc_demo_service_stub.cpp`**  
   - 在 **`OnRemoteRequest`** 里 **`case DemoTransactCode::FOO_BAR:`**  
   - **读** `data` 的顺序与客户端 **Proxy 写**入顺序**完全一致**。  
   - 向 **`reply`** 写返回值/输出参数。
3. **`ipc_demo_proxy.cpp`**  
   - 增加 **`IpcDemoProxy::FooBar(...)`**（或同类封装）：**`WriteInterfaceToken`** → 写参数 → **`SendRequest`** → 读 **`reply`**。
4. **`ipc_demo_client_main.cpp`**（或其它调用方）  
   - 调用新 **`Proxy`** 方法并打印 **`ret`**，便于 **`ohipc.py test`** 扩展判据。
5. **全文搜索**旧事务码引用，避免 **魔数** 与枚举**不一致**。

### 6.3 Stub 里与「多客户端 / 回调」相关的概念

本 demo：**`REGISTER_CLIENT`** 把客户端传来的 **`IRemoteObject`**（事件通道、Demo 类对象）存进 **`sessionId → ClientRecord`**；**`DeathRecipient`** 在客户端进程退出时触发清理。扩展时若新增 **`IRemoteObject`** 传递，注意 **生命周期** 与 **线程安全**（样例里用锁保护 **map**）。

### 6.4 Parcel 与 InterfaceToken（最容易写错的地方）

- **每个 RPC 事务**在客户端 **`Proxy`** 里通常要先 **`WriteInterfaceToken(GetDemoServiceDescriptor())`**（或该接口对应的 **descriptor**），服务端 **`Stub`** 在分支开头 **`ReadInterfaceToken` / 校验**，防止「事务码碰巧一致但接口不对」的调用。
- **写入顺序**：先 **token**，再 **业务参数**；服务端 **先读 token**，再按**相同顺序**读参数。
- **基本类型与容器**：`int32`、`string`、`vector`、**`Parcelable`** 等，**客户端写几次，服务端就读几次**；若一方多写了一个字段，另一方会读到错位数据或失败。
- **`reply` Parcel**：服务端把返回值、输出参数写入 **`reply`** 后，客户端 **`SendRequest`** 返回成功再读 **`reply`**；顺序同样要对称。
- **FD / Ashmem / RemoteObject**：属于「高级字段」，本 demo 在 **`ECHO_*`** 等路径里有示例；扩展时建议**复制现有事务**改一版，先跑通再合并。

### 6.5 调试服务端（hilog）

服务端标签在 **`ipc_demo_server_main.cpp`** 等处使用 **`HiLogLabel`**（如 **`0xD100`**）。板端可：

```bash
hdc shell "hilog | grep -E 'IpcDemo|ipc_demo'"
```

（流控过多时可按产品文档临时关闭 hilog 流控后再抓。）

---

## 7. Client（客户端）开发：你要改哪里？

### 7.1 连接顺序（与 `ipc_demo_client_main.cpp` 对齐）

1. **`InitAccessToken()`**（**`processName`** 与 server 不同，如 **`ipc_demo_client`**）。
2. **`GetSystemAbilityManager()`**。
3. **`GetSystemAbility(IPC_EXAMPLE_DEMO_SA_ID)`** → 非空才能继续。
4. 构造 **`ClientEventStub` / `DemoClassStub`** 等本地对象，把 **`sptr<IRemoteObject>`** 通过 **`RegisterClient`** 交给服务端。
5. 调用 **`IpcDemoProxy`** 各方法。

**常见翻车点**：**服务端未启动** → **`GetSystemAbility` 返回 `nullptr`**，日志会提示 *is ipc_demo_server running?*。

### 7.2 板端手工跑通（与 `SKILL.md` 一致）

**重要**：下面 **`hdc file send` 的源路径**必须是 **`$OHOS_SRC/out/...`**，与当前 shell 是否在子目录无关。

```bash
cd "$OHOS_SRC"
P="${OHOS_PRODUCT:-rk3568}"
BIN="$OHOS_SRC/out/$P/communication/ipc_example_service"

test -f "$BIN/ipc_demo_server" && test -f "$BIN/ipc_demo_client" && echo "OK: binaries" || { echo "FAIL: 请先完成 §5.3 单编"; exit 1; }

hdc list targets
hdc file send "$BIN/ipc_demo_server" /data/local/tmp/
hdc file send "$BIN/ipc_demo_client" /data/local/tmp/
hdc shell "chmod 755 /data/local/tmp/ipc_demo_server /data/local/tmp/ipc_demo_client"
hdc shell "sh -c 'nohup /data/local/tmp/ipc_demo_server >/data/local/tmp/ipc_srv.log 2>&1 &'"
sleep 1
hdc shell "cat /data/local/tmp/ipc_srv.log"
hdc shell "/data/local/tmp/ipc_demo_client myname"
```

**日志期望（手工核对）**：

- **`ipc_srv.log`**（或服务端输出）中应有 **`registered`** 与 **`JoinWorkThread`** 一类成功语义（与 **`ipc_demo_server_main.cpp`** 打印一致）。
- 客户端终端出现 **`registered session=`** 且后续 **`SendString ret=0`** 等（详见 **`SKILL.md` §5.2**）。

**一键判据（推荐）**：在 **`$OHOS_SRC`**（或其子目录）执行：

```bash
cd "$OHOS_SRC"
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "${OHOS_PRODUCT:-rk3568}" test
```

**成功**：进程退出码 **0**，且终端末尾有 **`ohipc`** 打印的 **PASS** 类汇总（见 **`ohipc.py`** 实现）。

### 7.3 多设备时指定 hdc 目标

与 **`ohipc.py`** 其它子命令一致，使用 **`-t <序列号>`** 或环境变量 **`OHIPC_HDC_TARGET`**：

```bash
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" -t 192.168.x.x:8710 test
```

---

## 8. 「接口导出」的几种含义（不要混为一谈）

### 8.1 系统部件对内 / 对外（本样例）

- **`ipc_example`** **没有**把 C++ Stub/Proxy 头文件放进 **`bundle.json` 的 `inner_kits`**。  
- 意味着：**其它 GN 模块不应假设**能 `deps` 到 **`ipc_demo_proxy.h`** 这种内部头。

### 8.2 给应用导出：推荐 **C ABI + .so**（`ipc_demo_framework`）

- 头文件：**`framework/include/ipc_demo_framework_capi.h`**。  
- 实现：**`ipc_demo_framework.cpp`** 等，内部仍用 **C++ Proxy**（与 **`ipc_demo_client`** 同源思路）。  
- 应用 **`CMakeLists.txt`**：**`target_link_libraries(... libipc_demo_framework.z.so)`**（具体见 **`NATIVEPROJ_IPC_FRAMEWORK.md`**）。  
- **部署**：需镜像带 **`libipc_demo_framework.z.so`** 或合规分发。

### 8.3 给 ArkTS / 动态 `import`：NAPI 独立模块（`libipc_example_parcel.so`）

- **`ipc_example_parcel_napi.cpp`** 使用 **`napi_module_register`**，**`nm_modname`** 与 **`import 'libipc_example_parcel.so'`** 对应。  
- **HAP** 内必须由 **CMake** 产出 **`libipc_example_parcel.so`** 并打入 **`libs/<abi>/`**（**不要**只放在 **`entry/src/main/libs/`** 指望 Hvigor 打包——见 **`NATIVEPROJ_IPC_FRAMEWORK.md`**）。

### 8.4 公开 NDK：IPCKit（与 demo SA 无关）

- **`OH_IPCParcel_*`**、**`OHIPCRemoteProxy`** 等：适合**通用** IPC 能力；**不绑定** `0x00010001`。  
- 本仓库 **`ipc_example_parcel_capi.cpp`** 即是对 **OH IPC Parcel** 的薄封装示例。

---

## 9. 应用开发（HAP）：`IpcNativeProj46R` 在干什么？

### 9.1 工程位置与能力

- **`foundation/communication/ipc_example/IpcNativeProj46R`**  
- 演示：**`@ohos.rpc` 风格 Parcel** + **`import ipcEx from 'libipc_example_parcel.so'`** + 可选 **`ipc_demo_framework`** 相关说明。

### 9.2 编译与上机测试（固化命令）

**应用工程根**指包含 **`AppScope`**、**`entry`**、**`hvigorfile.ts`**（或 **`hvigorfile.js`**）的目录，即 **`IpcNativeProj46R`** 本身，**不是** `entry/` 子目录。

在 **`$OHOS_SRC`** 下，示例工程路径为：

```text
$OHOS_SRC/foundation/communication/ipc_example/IpcNativeProj46R
```

**前置**：已按 **`src/skills/ohhap/SKILL.md`** 配置 **`HOS_CLT_PATH`**、**`OHOS_SDK_PATH`** 等；若 **`oh_modules`** 缺失导致解析失败，在**应用工程根**执行一次 **`ohpm install`**（需 ohpm 可用）。

```bash
export IPC_APP="$OHOS_SRC/foundation/communication/ipc_example/IpcNativeProj46R"
test -d "$IPC_APP/AppScope" && test -d "$IPC_APP/entry" && echo "OK: IPC_APP" || echo "FAIL: 路径不对"

cd "$IPC_APP"
ohpm install   # 若此前从未拉依赖或报 @ohos/hypium 缺失，执行；已成功可跳过

python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" build      "$IPC_APP"
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" build-test "$IPC_APP"
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" sign       "$IPC_APP" release
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" test       "$IPC_APP"
```

**说明**：**`sign`** 若 **debug** 模板缺失导致失败，请使用 **`release`**（上文已示例）。**`test`** 需 **hdc** 已连设备。

### 9.3 自检 HAP 是否带上独立 so

必须在 **应用工程根** **`$IPC_APP`** 下执行（与 **`entry/build/...` 相对路径一致）：

```bash
cd "$OHOS_SRC/foundation/communication/ipc_example/IpcNativeProj46R"
unzip -l entry/build/default/outputs/default/entry-default-unsigned.hap | grep ipc_example_parcel
```

应看到 **`libs/arm64-v8a/libipc_example_parcel.so`**（及 **`entry/build-profile.json5`** 里 **`abiFilters`** 中的其它 ABI，如 **`armeabi-v7a`**）。

### 9.4 `module.json5` / syscap / 权限

- 使用 **IPCKit / IPC Core** 时声明 **`SystemCapability.Communication.IPC.Core`**（以工程实际 **`module.json5`** 为准）。  
- **获取厂商段 SA** 在正式产品上常涉及 **ACL / 预置应用 / 调试证书**；demo 板子上 **`ipc_demo_client` 使用 `system_core` token** 是**教学用法**，**不可**直接当应用商店上架策略。

---

## 10. 测试与回归：三条线

| 线 | 命令 | 验证什么 |
|----|------|----------|
| **跨进程 demo** | **`ohipc.py test`** | 服务端注册 + 客户端 RPC 日志判据（见 **`SKILL.md` §5.4**） |
| **并发双客户端** | **`ohipc.py test-concurrent`** | 两进程重叠连接 |
| **进程内 Parcel** | **`ohipc.py test-parcel`** | **GTest** 对称读写 |
| **应用 Hypium** | **`ohproj.py test`** | **HAP** 安装后 **`aa test`** |

---

## 11. 提交前自检清单（建议打印）

- [ ] **`ipc_demo_ipc.h`** 中 **SA ID**、**描述符**、**事务码** 与 **Stub/Proxy** 完全一致  
- [ ] 每个 RPC：**客户端写 Parcel 顺序** = **服务端读顺序**；**reply** 同理  
- [ ] 新产品已把 **`ipc_example_service`** 写入 **productdefine** 且能 **单编**出 **`ipc_demo_server`**  
- [ ] **`ohipc.py paths`** 中 **`ipc_demo_server`**、**`ipc_demo_client`** **exists=True**  
- [ ] 板端 **`ipc_srv.log`** 含 **`registered`** / **`JoinWorkThread`** 语义成功日志  
- [ ] **`ohipc.py test`** 退出码 **0**  
- [ ] 若改 **NAPI / HAP**：**`unzip -l`** 确认 **`libipc_example_parcel.so`** 已进包  
- [ ] 应用 **`mock-config.json5`** 未把真实 **`libentry.so`** 指到 mock（测 NAPI 时）

---

## 12. 仍不通时：按顺序执行（复制到终端）

**源码根**（产品 **`OHOS_PRODUCT`**，默认 **`rk3568`**）：

```bash
cd "$OHOS_SRC"
P="${OHOS_PRODUCT:-rk3568}"

# 1) 部件是否在预加载列表（须先有过预加载/构建才有该文件；若不存在先执行 §5.3 单编）
if test -f "out/preloader/$P/parts.json"; then
  grep -F "ipc_example_service" "out/preloader/$P/parts.json" || echo "FAIL: 产品未包含 ipc_example_service"
else
  echo "WARN: out/preloader/$P/parts.json 不存在，先完成一次单编后再查"
fi

# 2) 产物是否存在
ls -la "$OHOS_SRC/out/$P/communication/ipc_example_service/ipc_demo_server" \
       "$OHOS_SRC/out/$P/communication/ipc_example_service/ipc_demo_client"

# 3) 一键路径
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "$P" paths
```

**设备上**（**hdc** 已连）：

```bash
hdc shell "test -x /data/local/tmp/ipc_demo_server && echo OK_server || echo MISSING_server"
hdc shell "test -x /data/local/tmp/ipc_demo_client && echo OK_client || echo MISSING_client"
hdc shell "cat /data/local/tmp/ipc_srv.log 2>/dev/null | tail -n 30"
```

---

## 12b. 常见问题表（现象 → 原因 → 怎么处理）

| 现象 | 常见原因 | 处理 |
|------|----------|------|
| **`GetSystemAbility` 为 null** | **`ipc_demo_server` 未跑**或 **`AddSystemAbility` 失败** | 看 **`ipc_srv.log`** / 服务端 stdout；确认进程存活 **`ps -ef \| grep ipc_demo_server`** |
| **`AddSystemAbility` 非 `ERR_OK`** | **SA ID 冲突**、权限/token 不足、samgr 异常 | 换未占用 **厂商段 ID**（需与全仓定义一致）；对照 **`InitAccessToken`** 与产品策略 |
| **客户端 `SendString ret` 非 0** | **Parcel 顺序错误**、**session 无效**、服务端拒绝 | 对 **`SEND_STRING`** 单步对照 **Proxy 写**与 **Stub 读**；试 **`ohipc.py test`** 对比期望日志 |
| **`ohipc.py test` 判据全失败** | 客户端输出在 **stderr**；或旧二进制未推送 | 脚本已合并 stdout/stderr；**重新 push** server/client |
| **HAP 里 `import 'libipc_example_parcel.so'` 为 undefined** | 主包 **无** **`libs/.../libipc_example_parcel.so`** | **`unzip -l` 自检**；用 **CMake `add_library(ipc_example_parcel …)`** 编入（见 **`NATIVEPROJ_IPC_FRAMEWORK.md`**） |
| **应用链上 `libipc_demo_framework` 仍调不通 SA** | 镜像无 so、**ACL**、非 **system_core** 类 token | 确认 **`/system`** 或分发路径有 so；阅读产品 **SA 访问**规范；demo 可执行文件与上架应用策略不同 |
| **`ipc_demo_parcel_unittest` 设备上打不开 xml** | 工作目录不可写 | 使用 **`ohipc.py test-parcel`**（内部 **`cd /data/local/tmp`**） |

---

## 13. 附录：从本 demo 走向「正式 IDL 部件」

| 本教程（手写） | 正式开发常见升级 |
|----------------|------------------|
| 手写 Stub/Proxy | **`.idl` → 代码生成`**，减少 Parcel 顺序错误 |
| 厂商段 SA ID 常量 | 在 **`system_ability_definition.h`** 统一登记（按规范） |
| `ipc_demo_server` 手工启动 | **init.cfg** / **systemd 风格** 服务描述（按产品） |
| 教学用 **NativeToken** | **TokenId**、**权限**、**SELinux**、**能力开关** 全套评审 |

---

## 14. 附录：`ohipc.py` / `ohproj.py` 常用命令

```bash
# 教程：摘要 / 全文（由 ohipc.py 打印 howtoipc.md）
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" howto
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" howto --full

# 产物路径（含 libipc_*）
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product rk3568 paths

# HAP 工程（ohproj 仅有 create/build/sign/build-test/test/clean-sign）
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" build      <IpcNativeProj46R 目录>
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" build-test <同上>
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" sign       <同上> release
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" test       <同上>

# 板测
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" test
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" test-parcel
```

---

## 15. 附录：与 `howtohdf.md` / `ohproj` 的分工（避免混淆）

| 主题 | 看哪份文档 / 用哪个脚本 |
|------|-------------------------|
| **HDF 外设**（UHDF、HCS、HAL、`hdf_devhost`） | **`src/skills/ohhdf/howtohdf.md`**、**`ohhdf.py`** |
| **Binder IPC、SA、Parcel、ipc_example** | **本文 `howtoipc.md`**、**`ohipc.py`** |
| **HAP 编译签名、Hypium、`IpcNativeProj46R`** | **`src/skills/ohproj/SKILL.md`**、**`ohproj.py`** |
| **应用侧接 `ipc_demo_framework` / `libipc_example_parcel`** | **`NATIVEPROJ_IPC_FRAMEWORK.md`** + 本文 **§8–§9** |

---

## 16. 附录 A：路线 A — 从空终端到 `ohipc.py test` 通过（逐步可复制）

以下假设：已设置 **`NAPI_GENERATOR_ROOT`**（**napi_generator** 仓库根，含 **`src/skills`**）；**`cd` 在 `OHOS_SRC`**；设备已 **hdc** 连接；产品名为 **`rk3568`**（否则改 **`OHOS_PRODUCT`**）。

```bash
# --- 步骤 1：设定源码根、技能仓库与产品 ---
export OHOS_SRC="/path/to/openharmony/src"    # 改成你的路径
export NAPI_GENERATOR_ROOT="/path/to/napi_generator"
export OHOS_PRODUCT="rk3568"
cd "$OHOS_SRC"
test -f build.sh || { echo "FAIL: OHOS_SRC 错误"; exit 1; }

# --- 步骤 2：确认部件与白名单（可选但建议）---
grep -F "ipc_example_service" build/indep_component_whitelist.json || { echo "FAIL: 白名单无 ipc_example_service"; exit 1; }

# --- 步骤 3：单编服务端与客户端 ---
./build.sh --product-name "$OHOS_PRODUCT" --build-target ipc_demo_server --build-target ipc_demo_client
test $? -eq 0 || { echo "FAIL: build.sh"; exit 1; }

# --- 步骤 4：确认产物 ---
BIN="$OHOS_SRC/out/$OHOS_PRODUCT/communication/ipc_example_service"
test -f "$BIN/ipc_demo_server" && test -f "$BIN/ipc_demo_client" && echo "OK: binaries" || { echo "FAIL: 产物缺失"; exit 1; }

# --- 步骤 5：脚本路径自检 ---
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "$OHOS_PRODUCT" paths

# --- 步骤 6：一键推送、起服务、跑客户端、正则判据 ---
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "$OHOS_PRODUCT" test
test $? -eq 0 && echo "=== RESULT: 路线 A 完成 ===" || { echo "FAIL: ohipc test"; exit 1; }
```

**多设备**：在步骤 6 的命令前加 **`-t 序列号`**，例如  
`python3 .../ohipc.py -t 192.168.x.x:8710 --product "$OHOS_PRODUCT" test`。

---

## 17. 附录 B：路线 B — `ipc_demo_parcel_unittest`（无 SA）

```bash
export OHOS_SRC="/path/to/openharmony/src"
export OHOS_PRODUCT="rk3568"
cd "$OHOS_SRC"

./build.sh --product-name "$OHOS_PRODUCT" --build-target ipc_demo_parcel_unittest
test $? -eq 0 || { echo "FAIL: build unittest"; exit 1; }

UT="$OHOS_SRC/out/$OHOS_PRODUCT/tests/unittest/communication/ipc_example_service/ipc_demo_parcel_unittest"
test -f "$UT" && echo "OK: unittest binary" || { echo "FAIL: 找不到 $UT"; exit 1; }

python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py" --product "$OHOS_PRODUCT" test-parcel
test $? -eq 0 && echo "=== RESULT: 路线 B 完成 ===" || { echo "FAIL: test-parcel"; exit 1; }
```

**说明**：**`test-parcel`** 会向设备推送 **`ipc_demo_parcel_unittest`** 并在 **`/data/local/tmp`** 执行；输出须含 GTest **`[  PASSED  ]`** 行（见 **`ohipc.py`**）。

---

## 18. 附录 C：`IpcNativeProj46R` — 从空终端到 `ohproj.py test`（HAP）

```bash
export OHOS_SRC="/path/to/openharmony/src"
export OHOS_PRODUCT="rk3568"
export IPC_APP="$OHOS_SRC/foundation/communication/ipc_example/IpcNativeProj46R"

# --- 环境：须已配置 HOS_CLT_PATH、OHOS_SDK_PATH（见 ohhap SKILL）---
test -d "$IPC_APP" || { echo "FAIL: 无 IpcNativeProj46R"; exit 1; }

cd "$IPC_APP"
ohpm install

python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" build      "$IPC_APP" || exit 1
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" build-test "$IPC_APP" || exit 1
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" sign       "$IPC_APP" release || exit 1
python3 "${NAPI_GENERATOR_ROOT}/src/skills/ohproj/ohproj.py" test       "$IPC_APP" || exit 1

echo "=== RESULT: 路线 C 完成（看终端 Hypium 汇总 Pass/Failure）==="
```

**HAP 自检**（仍在 **`$IPC_APP`**）：

```bash
cd "$IPC_APP"
unzip -l entry/build/default/outputs/default/entry-default-unsigned.hap | grep -E 'libipc_example_parcel|libs/'
```

---

*本文随 `foundation/communication/ipc_example` 与产品配置演变；若与当前 `BUILD.gn` / 源码不一致，以仓库源码为准。*
