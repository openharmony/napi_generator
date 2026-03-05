# btclitools 代码设计说明

本文档描述 btclitools 的代码结构、与 btframework inner_kits 的接口对应关系、设计原则及可读性约定，便于维护和扩展。

**接口定义来源**：`foundation/communication/bluetooth/bundle.json` 中 btframework 的 inner_kits（约 104–136 行），`header_base` 为 `//foundation/communication/bluetooth/interfaces/inner_api/include`，`header_files` 为下文表格中的头文件列表。

---

## 一、设计目标

| 目标 | 说明 |
|------|------|
| **文件与功能清晰** | 按能力域划分文件，一个模块对应一类框架接口，文件名与职责一致。 |
| **降低耦合** | 模块仅依赖必要的框架头与公共头；公共层（Log、常量、回调）集中存放，避免循环依赖。 |
| **功能单一** | 每个源文件只负责一类 CLI 能力（如 Host、GATT Client、A2DP、Socket），便于定位与测试。 |
| **接口对应可读** | 代码中能明确看出「命令 ↔ 框架头文件」的对应关系，便于与 bundle 定义对照。 |

---

## 二、目录与文件职责

### 2.1 文件一览

| 文件 | 职责 | 对应 bundle 头（主） |
|------|------|----------------------|
| **clitools.h** | 主入口头：命令表声明、公共宏/内联、全局类型、各模块 handler 声明；集中包含框架头与模块头。 | 多（汇总） |
| **clitools.cpp** | 主逻辑：命令表定义、全局变量定义、共享 GATT 辅助函数、入口与回调注册。 | 汇总 |
| **clitools_host.h / .cpp** | Host/GAP/BR 命令：开关、扫描、配对、设备属性等。 | bluetooth_host.h, bluetooth_remote_device.h, bluetooth_device_class.h |
| **clitools_gatt_client.h / .cpp** | BLE 中心 + GATT Client 命令：blescan, blestop, gattconn, gattdisc, gattgetserv, gattgetdname, gattreadcv, gattwritecv, gattreaddes, gattwritedes, gattgetrssi, gattsetmtu, gattcreateclient, blegetconnected。 | bluetooth_ble_central_manager.h, bluetooth_gatt_client.h, bluetooth_gatt_service.h, bluetooth_gatt_characteristic.h, bluetooth_gatt_descriptor.h |
| **clitools_gatt_server.h / .cpp** | GATT Server 命令与辅助：gattcreateserver, gattaddservices, gattdelservices, gattserverstatus, gattcloseserver；以及 Add*Service、RemoveAllService 等。 | bluetooth_gatt_server.h |
| **clitools_constants.h** | 常量与宏：GATT UUID、参数前缀、数值常量等，无框架依赖。 | bluetooth_def.h（语义对应） |
| **clitools_a2dp.h / .cpp** | A2DP 源端命令：连接、断开、设备列表、激活 Sink、播放控制。 | bluetooth_a2dp_src.h |
| **clitools_socket.h / .cpp** | 经典蓝牙 Socket/SPP：监听、接受、连接、收发、关闭。 | bluetooth_socket.h |
| **clitools_profile.h / .cpp** | Profile 管理命令（当前为占位实现）。 | bluetooth_profile_manager.h |
| **common.cpp** | 公共能力：Log、等待/超时等，无蓝牙业务。 | — |
| **common_dump.h / .cpp** | 状态与结果输出：蓝牙状态、GATT 服务/特征/描述符打印、错误与用法。 | 依赖 GATT/Host 类型 |
| **common_callback.h / .cpp** | 观察者封装：Host、RemoteDevice、BLE、GATT 回调。 | bluetooth_host.h, bluetooth_remote_device.h, bluetooth_ble_central_manager.h, bluetooth_gatt_*.h |
| **mischandle.h / .cpp** | 通用交互：wait、waitasync、interactive，与具体协议无关。 | — |

**说明**：

- **clitools_handle.h**：当前未被任何文件引用，与 clitools.h 职责重叠，可视为遗留；新逻辑以 clitools.h 为准，后续可删除 clitools_handle.h。
- **BUILD.gn**：列出上述源文件（含 clitools_host.cpp、clitools_gatt_client.cpp、clitools_gatt_server.cpp）；编译目标名为 `btcommand`。
- **当前重构**：Host 已拆分为 clitools_host；BLE/GATT Client 已拆分为 clitools_gatt_client；GATT Server 已拆分为 clitools_gatt_server；clitools.cpp 保留命令表、全局变量、共享 GATT 辅助函数及 disconnect/getstatus 等。

### 2.2 依赖关系（简化）

```
clitools.h
  ├── 框架头：bluetooth_host.h, bluetooth_ble_*, bluetooth_gatt_*, bluetooth_remote_device.h, ...
  ├── clitools_constants.h
  ├── clitools_a2dp.h, clitools_socket.h, clitools_profile.h
  └── mischandle.h

clitools.cpp
  └── clitools.h, common_callback.h, common_dump.h, clitools_host.h, clitools_gatt_client.h, clitools_gatt_server.h, clitools_a2dp.h, clitools_socket.h, clitools_profile.h

clitools_gatt_client.cpp → clitools.h, common_callback.h, common_dump.h
clitools_gatt_server.cpp → clitools.h, common_callback.h, common_dump.h
clitools_a2dp.cpp  → clitools.h（或仅需 bluetooth_a2dp_src.h + bluetooth_host.h + 少量公共头）
clitools_socket.cpp → clitools.h（或仅需 bluetooth_socket.h + uuid.h + 少量公共头）
clitools_profile.cpp → clitools.h（占位，未直接使用 bluetooth_profile_manager.h）

common_dump / common_callback
  └── 依赖 GATT/Host/BLE 等类型，被 clitools.cpp、clitools_gatt_*.cpp 使用
```

---

## 三、bundle 接口与命令对应表

以下表格以 **bundle.json 中 btframework inner_kit 的 header_files** 为基准，列出各头文件与 btclitools 的**实现文件**及**命令**的对应关系，便于对照与可读性。

| bundle 头文件 | 实现文件 | 命令列表（CLI 名称） |
|---------------|----------|----------------------|
| **bluetooth_host.h** | clitools_host.cpp | enable, disable, enablebr, disablebr, enableble, disableble, getstate, getbluetoothstate, getlocname, setlocname, getretname, setretname, getrebatinfo, getconntime, getpairs, getpairstate, getprofilestate, confirmPaire, setPinCode, getBtScanMode, setBtScanMode, getbondablemode, setbondablemode, isdiscovering, getdiscoveryendtime, startdiscovery, canceldiscovery, removeallpairs, removePaire, startpair, cancelpair, isbondedfromlocal, isaclconnected, isaclencrypted, getdeviceclass, getdeviceproductid, getdeviceuuids, setdevicepin, setdevicepairingconfirmation, setdevicepasskey, pairrequestreply, gettransporttype, readremoterssivalue, isvalidbluetoothremotedevice, getdeviceproducttype, setdevicecustomtype, getdevicevendorid, issupportvirtualautoconnect, setvirtualautoconnecttype, controldeviceaction, getcloudbondstate, getdevicetransport |
| **bluetooth_remote_device.h** / **bluetooth_device_class.h** | clitools_host.cpp | 与 Host 命令共用（getretname, getdeviceclass 等） |
| **bluetooth_ble_central_manager.h** | clitools_gatt_client.cpp | blescan, blestop, blegetconnected；与 GattClient 配合的 gattconn, gattdisc, gattgetserv, gattgetdname, gattreadcv, gattwritecv, gattreaddes, gattwritedes, gattgetrssi, gattsetmtu, gattcreateclient |
| **bluetooth_gatt_client.h** / **bluetooth_gatt_service.h** / **bluetooth_gatt_characteristic.h** / **bluetooth_gatt_descriptor.h** | clitools_gatt_client.cpp | gattconn, gattdisc, gattgetserv, gattgetdname, gattreadcv, gattwritecv, gattreaddes, gattwritedes, gattgetrssi, gattsetmtu |
| **bluetooth_gatt_server.h** | clitools_gatt_server.cpp | gattcreateserver, gattaddservices, gattdelservices, gattserverstatus, gattcloseserver |
| **bluetooth_a2dp_src.h** | clitools_a2dp.cpp | a2dpconnect, a2dpdisconnect, a2dpgetdevices, a2dpgetdevicestate, a2dpsetactive, a2dpgetactive, a2dpstartplaying, a2dpsuspendplaying, a2dpstopplaying, a2dpgetplayingstate |
| **bluetooth_socket.h** | clitools_socket.cpp | spplisten, sppaccept, sppconnect, sppdisconnect, sppread, sppwrite, sppserverclose |
| **bluetooth_profile_manager.h** | clitools_profile.cpp | profileserviceon（当前为占位，未调用框架接口） |
| **bluetooth_def.h** | clitools_constants.h / 各实现 | 常量与枚举语义，分散在各文件中使用 |
| **uuid.h** | 多处 | GATT/SPP 等 UUID 解析与使用 |
| **ohos_bt_gatt.h** | common_callback / clitools.cpp | 类型/回调配合 C++ GATT |
| **bluetooth_gatt_manager.h** | — | 未在 btclitools 中实现对应命令 |
| **bluetooth_proxy_manager.h** | — | 未实现 |
| **bluetooth_socket_inputstream.h** / **bluetooth_socket_outputstream.h** | — | 未单独暴露命令（可由 clitools_socket 内部使用流式 API 时引用） |
| **bluetooth_no_destructor.h** | — | 工具类，非 CLI 直接对应 |
| **c_header/ohos_bt_def.h** / **ohos_bt_gap.h** / **ohos_bt_gatt_client.h** / **ohos_bt_gatt_server.h** / **ohos_bt_spp.h** | — | 当前主要使用 C++ API；C API 头未在 CLI 层逐一对应 |

---

## 四、命令表在代码中的组织（可读性）

命令表 `g_staCliCmds` 在 **clitools.cpp** 中按「能力域」分组，与上表一致：

1. **br interaction**：Host / GAP（bluetooth_host.h, bluetooth_remote_device.h, bluetooth_device_class.h）
2. **ble interaction**：BLE 中心 + GATT Client/Server（bluetooth_ble_central_manager.h, bluetooth_gatt_*.h）
3. **a2dp**：A2DP 源（clitools_a2dp → bluetooth_a2dp_src.h）
4. **socket/spp**：经典 Socket（clitools_socket → bluetooth_socket.h）
5. **profile**：Profile 管理（clitools_profile → bluetooth_profile_manager.h）
6. **rich interaction**：wait, waitasync, interactive（mischandle，无对应框架头）

在 clitools.cpp 中，命令表前有注释块，标明上述分组与 bundle 头文件的对应关系，便于阅读与维护。

---

## 五、耦合与可维护性建议

| 现状 | 建议 |
|------|------|
| clitools.h 集中包含全部框架头与模块头 | 长期可考虑：主头仅保留命令表与公共类型；各模块自行 include 所需框架头，减少重编范围。 |
| Host/GATT 已按域拆分为 clitools_host、clitools_gatt_client、clitools_gatt_server；命令表仍在 clitools.cpp 中注册。 | 若需进一步拆分，可将命令表单独放入 command_table.cpp。 |
| common_dump / common_callback 依赖多种 GATT/Host 类型 | 保持现状；新增能力时优先在对应域文件内实现，避免继续扩大 common 依赖。 |
| 模块（a2dp/socket/profile）仅依赖 clitools.h | 若需进一步降耦，可让各模块只包含自身所需框架头 + 公共 Log/常量头，避免通过 clitools.h 间接拉取全部头。 |

---

## 六、命名与可读性约定

- **命令**：小写、连续字母，如 `a2dpconnect`、`spplisten`；与框架能力一一对应时在注释中标明头文件。
- **Handler 函数**：`HandleXxx`（Host/GATT 等已有）或 `handleXxx`（如 handleA2dpConnect）；新模块建议与现有风格一致（如 A2DP/Socket/Profile 使用 handle 前缀）。
- **文件**：`clitools_<模块名>.h/cpp` 对应单一能力域；`common_*` 表示跨模块公共能力。
- **注释**：在模块头文件顶部用 `@brief` 或 `@file` 说明对应 btframework 头；在命令表旁用简短注释标明「bundle 头 ↔ 命令组」。

---

## 七、与 coverage 报告的关系

- **BTFRAMEWORK_COVERAGE.md** / **COVERAGE.md**：基于同一 bundle 的 header_files 做「是否被 include / 是否被使用」的覆盖统计，用于查漏。
- **本文档（DESIGN.md）**：从设计和可读性角度固定「bundle 头 ↔ 实现文件 ↔ 命令」的对应关系，并约定结构与命名。
- 维护时建议：先看 DESIGN.md 确定模块与命令归属，再结合 COVERAGE 报告补充未覆盖接口的实现或占位说明。
