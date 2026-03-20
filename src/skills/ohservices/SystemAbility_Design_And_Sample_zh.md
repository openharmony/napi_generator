# SystemAbility 设计与实现及开发样例

本文档基于对 **bluetooth_service** 的编译构建与代码框架、**sa_profile** 配置与启动流程、以及 **listen_ability** 样例的分析，介绍 OpenHarmony 中 SystemAbility（系统能力）的设计与实现，并说明如何开发一个 SystemAbility 样例。

---

## 一、bluetooth_service 编译构建与代码框架

### 1.1 目录与构建结构

bluetooth_service 位于 `foundation/communication/bluetooth_service`，主要构建入口与模块如下：

```
bluetooth_service/
├── sa_profile/              # SA 配置（见第二节）
│   ├── BUILD.gn             # ohos_sa_profile 模板
│   └── 1130.json            # 系统能力 1130 的 profile
├── services/
│   └── bluetooth/
│       ├── BUILD.gn         # lite_component("bluetooth")，依赖板级 btservice
│       ├── server/          # 主 SA 实现：bluetooth_server.so
│       │   ├── BUILD.gn     # ohos_shared_library("bluetooth_server")
│       │   ├── include/     # BluetoothHostServer 等
│       │   └── src/         # bluetooth_host_server.cpp 等
│       ├── service/         # 业务实现：btservice 库（被 server 依赖）
│       ├── ipc/             # IPC Stub/Proxy：btipc_service 静态库
│       ├── etc/init/        # init 配置：bluetooth_service.cfg
│       └── ...
└── bluetooth.gni            # 特性开关（a2dp/hfp/pan 等）
```

- **bluetooth (顶层)**：`lite_component("bluetooth")`，依赖板级适配的 `btservice`（可执行或入口库），用于产品镜像集成。
- **bluetooth_server**：`ohos_shared_library("bluetooth_server")`，实现 **BluetoothHostServer** 系统能力（SA ID 1130），依赖：
  - `etc/init:etc`（cfg 与配置）
  - `ipc:btipc_service`（Stub/Proxy）
  - `service:btservice`（蓝牙协议栈与业务逻辑）
  - `safwk:system_ability_fwk`、`samgr:samgr_proxy` 等。
- **sa_profile**：通过 `ohos_sa_profile` 声明 SA 1130，参与全量构建时生成/合并到 `bluetooth_service.json`，供 **sa_main** 按进程加载。

### 1.2 代码框架要点

- **BluetoothHostServer**（`server/include/bluetooth_host_server.h`）  
  - 继承 **SystemAbility** 与 **BluetoothHostStub**，是蓝牙主机侧对外的唯一 SA 实现类。  
  - 使用 **DECLARE_SYSTEM_ABILITY(BluetoothHostServer)** 声明，并在 cpp 中通过 **SystemAbility::MakeAndRegisterAbility(BluetoothHostServer::GetInstance().GetRefPtr())** 完成自注册。  
  - 构造函数传入 **BLUETOOTH_HOST_SYS_ABILITY_ID**（即 1130）与 `runOnCreate=true`，与 sa_profile 中 `"name": 1130`、`"run-on-create": true` 一致。

- **生命周期**  
  - **OnStart()**：做初始化（如 Init()），成功后调用 **Publish(GetInstance())** 向 SAMGR 发布服务。  
  - **OnStop()**：反注册、释放资源。  
  - 子能力（GATT、Socket、HFP 等）在 **createServers()** 中创建并挂到 **servers_**，通过 **GetProfile(name)** 对外提供。

- **Dump**  
  - 实现 **Dump()**，并由 **BluetoothHostDumper** 提供调试输出，与 sa_profile 中 **dump_level** 对应，支持 hidumper 等工具。

- **IPC**  
  - 接口在 ipc 层以 Stub/Proxy 形式实现（如 **bluetooth_host_stub**），server 只依赖 ipc 静态库，不直接依赖具体 IPC 框架实现细节。

---

## 二、sa_profile 与 SystemAbility 启动配置流程

### 2.1 sa_profile 是什么

**sa_profile** 是 SystemAbility 的**静态配置**：描述“在哪个进程、加载哪个 so、以什么策略运行”。构建系统会把这些配置合并成**按进程维度的 JSON**（如 `bluetooth_service.json`），由 **init** 在合适的 job 里通过 **sa_main** 拉起进程，**sa_main** 再根据 profile 加载对应 so 并驱动 SA 生命周期。

### 2.2 配置文件格式（以 bluetooth 1130 为例）

**sa_profile/1130.json**：

```json
{
    "process": "bluetooth_service",
    "systemability": [
        {
            "name": 1130,
            "libpath": "libbluetooth_server.z.so",
            "run-on-create": true,
            "distributed": false,
            "dump_level": 1,
            "min_hdi_proxy_version": ["libbluetooth_hci_proxy_1.0.z.so"]
        }
    ]
}
```

含义简述：

| 字段 | 含义 |
|------|------|
| **process** | 进程名，该 SA 运行在此进程内；与 cfg 中 service name 一致。 |
| **name** | 系统能力 ID（如 1130），需与代码中 SystemAbility(saId, …) 一致。 |
| **libpath** | 实现该 SA 的动态库，sa_main 会 dlopen 该 so 并调用 SA 注册/启动逻辑。 |
| **run-on-create** | true：进程起来即创建并注册该 SA；false：按需（首次被 GetSystemAbility 时）再加载。 |
| **distributed** | 是否支持跨设备；bluetooth 为单机。 |
| **dump_level** | 供 systemdumper/hidumper 使用的等级。 |
| **min_hdi_proxy_version** | （可选）依赖的 HDI 代理 so，用于版本与加载顺序控制。 |

一份 profile 里通常**一个 JSON 文件只描述一个 SA**（或同一进程下多 SA 用多个 JSON，由 BUILD.gn 的 sources 列出）；编译时通过 **ohos_sa_profile** 收集到部件维度，再在镜像打包时合并为 **进程名.json**。

### 2.3 BUILD.gn 中的 sa_profile 声明

**sa_profile/BUILD.gn**：

```gn
import("//build/ohos/sa_profile/sa_profile.gni")

ohos_sa_profile("communication_bluetooth_service_sa_profile") {
  sources = [ "1130.json" ]
  part_name = "bluetooth_service"
}
```

- **sources**：当前部件提供的 SA profile 列表。  
- **part_name**：部件名，用于将 profile 归并到正确产品配置中，并生成/合并得到 `bluetooth_service.json`（因为 process 为 `bluetooth_service`）。

构建链会：

1. 将 1130.json 拷贝到 sa_profile 的 inputs。  
2. 用 **sa_profile.py** 等脚本按部件/进程聚合。  
3. 最终在系统镜像中生成 `/system/profile/bluetooth_service.json`，供 init 使用。

### 2.4 init 与 cfg：进程如何被拉起

**services/bluetooth/etc/init/bluetooth_service.cfg**：

```json
{
    "jobs" : [{
            "name" : "post-fs-data",
            "cmds" : [
                "mkdir /data/bluetooth",
                "start bluetooth_service"
            ]
        }
    ],
    "services" : [{
            "name" : "bluetooth_service",
            "path" : ["/system/bin/sa_main", "/system/profile/bluetooth_service.json"],
            "uid" : "bluetooth",
            "gid" : ["bluetooth", "shell"],
            "caps" : ["CAP_NET_ADMIN"],
            "secon" : "u:r:bluetooth_service:s0",
            "permission" : ["ohos.permission.ANSWER_CALL"]
        }
    ]
}
```

- **jobs.cmds** 中的 **start bluetooth_service** 会在 **post-fs-data** 阶段执行。  
- **services.name** 与 **process** 一致：**bluetooth_service**。  
- **path**：**sa_main** + **进程对应的 profile 路径**。  
- sa_main 启动后解析 `bluetooth_service.json`，按 `systemability` 列表加载 **libbluetooth_server.z.so**，并调用其中已通过 **MakeAndRegisterAbility** 注册的 SA 的创建与 **OnStart**，从而完成 1130 的发布。

流程串联：

1. **编译期**：sa_profile 的 1130.json + BUILD.gn → 合并进 `bluetooth_service.json`；bluetooth_server 编译为 `libbluetooth_server.z.so`；cfg 安装到 init 配置目录。  
2. **开机**：init 执行 post-fs-data → start bluetooth_service → 执行 sa_main + bluetooth_service.json。  
3. **运行期**：sa_main 加载 so → SA 构造函数与 MakeAndRegisterAbility → OnStart() → Publish() 到 SAMGR；其他进程通过 **GetSystemAbility(1130)** 获取蓝牙服务。

---

## 三、listen_ability 样例的设计与实现

listen_ability 是 safwk 部件内用于单元测试的**最小 SystemAbility 样例**，适合对照理解“仅实现一个 SA”的完整链路。

### 3.1 与 bluetooth 的对比

| 维度 | bluetooth (1130) | listen_ability (DISTRIBUTED_SCHED_TEST_LISTEN_ID) |
|------|-------------------|----------------------------------------------------|
| 用途 | 蓝牙主机服务，多子能力、多 so | 测试用 SA，单 so、单接口 |
| 进程名 | bluetooth_service | listen_test（测试 profile 中） |
| 库名 | libbluetooth_server.z.so | liblisten_test.z.so |
| 注册方式 | MakeAndRegisterAbility(GetInstance()) | REGISTER_SYSTEM_ABILITY_BY_ID(ListenAbility, id, true) |
| 接口 | BluetoothHostStub + 多 Profile | IListenAbility（AddVolume 等少量接口） |
| 依赖 | btservice + ipc + stack 等 | safwk + samgr + ipc + hilog |

### 3.2 listen_ability 实现要点

**1）接口与 Stub/Proxy**

- **IListenAbility**：继承 IRemoteBroker，声明 AddVolume 等接口与 TRANSACTION_ID。  
- **ListenAbilityStub**：IRemoteStub&lt;IListenAbility&gt;，在 OnRemoteRequest 中根据 code 分发到 AddVolume 等。  
- **ListenAbilityProxy**：IRemoteProxy&lt;IListenAbility&gt;，封装 SendRequest 调用远端。

**2）SA 实现类**

- **ListenAbility** 继承 **SystemAbility** 与 **ListenAbilityStub**，DECLARE_SYSTEM_ABILITY(ListenAbility)。  
- **REGISTER_SYSTEM_ABILITY_BY_ID(ListenAbility, DISTRIBUTED_SCHED_TEST_LISTEN_ID, true)**：与 profile 中 name、run-on-create 对应。  
- **OnStart()**：**Publish(this)** 向 SAMGR 发布；可 **AddSystemAbilityListener(其他 SA ID)** 监听其它 SA 的上下线。  
- **OnAddSystemAbility / OnRemoveSystemAbility**：监听回调，用于测试或联动逻辑。

**3）BUILD.gn**

- **ohos_shared_library("listen_test")**，产出 liblisten_test.z.so。  
- deps：safwk 的 system_ability_fwk、samgr_proxy、ipc_single、hilog 等。  
- 无独立 sa_profile 目录时，测试通过 mock 或单独 profile 配置 listen_test 进程与 SA ID。

safwk 文档中给出的 profile 示例为：process 为 `listen_test`，libpath 为 `liblisten_test.z.so`，run-on-create 为 true；cfg 中 service name 为 listen_test，path 为 sa_main + `/system/profile/listen_test.json`。仓库中 `test/resource/profile/listen_test.json` 为测试用多 SA 配置（含其他 SA ID），实际 C++ ListenAbility 的 profile 需单独配置 name 为 DISTRIBUTED_SCHED_TEST_LISTEN_ID、libpath 为 liblisten_test.z.so。

### 3.3 设计模式小结

- **单例 SA**：GetInstance() + MakeAndRegisterAbility 或 REGISTER_SYSTEM_ABILITY_BY_ID。  
- **Stub 即 SA**：SA 类同时继承 SystemAbility 与业务 Stub，OnStart 里 Publish(this)。  
- **按需子能力**：bluetooth 在 OnStart/Init 里 createServers()，通过 GetProfile 暴露；listen_ability 无子能力，仅自身一个 Stub。

---

## 四、如何开发一个 SystemAbility 样例（步骤摘要）

以下步骤与 bluetooth / listen_ability 的实践一致，便于在现有仓里新增一个“最小可运行”的 SA。

### 4.1 定义 IPC 接口与 Stub/Proxy

1. **IXXX**（如 IMyAbility）：继承 IRemoteBroker，声明接口方法与枚举 transaction code，DECLARE_INTERFACE_DESCRIPTOR。  
2. **XXXStub**：继承 IRemoteStub&lt;IXXX&gt;，实现 OnRemoteRequest(code, data, reply, option)。  
3. **XXXProxy**：继承 IRemoteProxy&lt;IXXX&gt;，对每个接口封装 SendRequest。

### 4.2 实现 SA 类并注册

1. **XXX** 继承 **SystemAbility** 与 **XXXStub**，DECLARE_SYSTEM_ABILITY(XXX)。  
2. 在 .cpp 中：**REGISTER_SYSTEM_ABILITY_BY_ID(XXX, YOUR_SA_ID, true)** 或使用 **MakeAndRegisterAbility(XXX::GetInstance().GetRefPtr())**。  
3. 构造函数：**SystemAbility(YOUR_SA_ID, true)**（true 表示 run-on-create）。  
4. **OnStart()**：业务初始化后 **Publish(this)**。  
5. **OnStop()**：反注册、释放资源。  
6. 可选：实现 **Dump()**、**OnAddSystemAbilityListener** 等。

### 4.3 编写 sa_profile

1. 在部件下建 **sa_profile** 目录。  
2. 新增 **YOUR_SA_ID.json**（或按项目规范命名），内容包含：  
   - **process**：进程名（与 cfg 中 service name 一致）。  
   - **systemability**：name = YOUR_SA_ID，libpath = 实现该 SA 的 so 名（如 libmy_ability.z.so），run-on-create、distributed、dump_level 等。  
3. **sa_profile/BUILD.gn**：  
   - **ohos_sa_profile("xxx_sa_profile")**，sources = [ "YOUR_SA_ID.json" ]，part_name = "当前部件名"。

### 4.4 编写 init cfg（若需独立进程）

1. 在 etc/init 下增加 **xxx.cfg**。  
2. **services** 中 name = 与 profile 中 process 一致。  
3. **path** = [ "/system/bin/sa_main", "/system/profile/进程名.json" ]。  
4. 在 **jobs** 的合适阶段（如 post-fs-data）增加 **start 进程名**。

### 4.5 BUILD.gn 与依赖

1. **ohos_shared_library("实现 SA 的 target")**，产出与 libpath 一致的 so（如 libmy_ability.z.so）。  
2. 依赖：**safwk:system_ability_fwk**、**samgr:samgr_proxy**、**ipc**（如 ipc_single/ipc_core）、**hilog** 等。  
3. 若该 so 被板级可执行程序或其它 so 加载，需在对应 target 的 deps 或 install 中声明，并保证与 profile 中的 libpath、安装路径一致。

### 4.6 编译与验证

1. 全量/部件编译后，确认：  
   - 生成 **进程名.json**（如 bluetooth_service.json），且内含该 SA 的 name、libpath。  
   - **libXXX.z.so** 安装到系统库路径（如 /system/lib64/）。  
   - init 配置安装到 /system/etc/init/ 或产品指定目录。  
2. 烧录后开机，通过日志确认 sa_main 拉起进程、so 加载、OnStart 与 Publish 被调用。  
3. 在其它进程或测试用例中 **GetSystemAbility(YOUR_SA_ID)** 获取代理并调用接口，验证功能。

---

## 五、小结

- **bluetooth_service** 展示了完整 SA 的构建与架构：sa_profile(1130) + bluetooth_server.so + init cfg，以及 SA 内多子能力、Dump、IPC 的分层方式。  
- **sa_profile** 描述了“进程 + SA 列表 + 库路径 + 启动策略”，构建系统将其合并为进程维度的 JSON，由 **init + sa_main** 完成进程拉起与 SA 加载。  
- **listen_ability** 是精简的 SA 样例：单 so、单接口、REGISTER_SYSTEM_ABILITY_BY_ID + Publish，适合作为新 SA 的模板。  
- 开发新 SystemAbility 时：定义接口与 Stub/Proxy → 实现 SA 类并注册 → 配置 sa_profile 与（必要时）init cfg → 正确编写 BUILD.gn 与依赖，即可完成从编译到运行的闭环。

以上内容基于对 `foundation/communication/bluetooth_service`、`foundation/systemabilitymgr/safwk` 及相关 sa_profile、listen_ability 代码与配置的阅读整理。
