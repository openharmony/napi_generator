# wificlitools 代码设计说明

本文档描述 wificlitools 的代码结构、与 wifi 组件 inner_api 的对应关系、设计原则及可读性约定，便于维护和扩展。

**接口定义来源**：`foundation/communication/wifi/wifi/bundle.json` 中 build.inner_api（约 162–193 行），包含 wifi_sdk、wifi_base、wifi_utils、cj_wifi_ffi 等；对应头文件位于 `interfaces/`、`base/inner_api/`、`utils/inc` 等路径。

---

## 一、设计目标

| 目标 | 说明 |
|------|------|
| **文件与功能清晰** | 按能力域划分文件，一个模块对应一类框架接口，文件名与职责一致。 |
| **降低耦合** | 模块仅依赖必要的框架头与公共头；公共层（Log、常量）集中存放，避免循环依赖。 |
| **功能单一** | 每个源文件只负责一类 CLI 能力（如 STA、Hotspot、P2P、Hid2d），便于定位与测试。 |
| **接口对应可读** | 代码中能明确看出「命令 ↔ 框架头文件」的对应关系，便于与 bundle 定义对照。 |
| **接口全覆盖** | 根据 bundle inner_api 与各头文件 API 逐一对照，所有对外能力均有对应命令行，无遗漏。 |

---

## 一（附）、生成过程与问题回顾

| 阶段 | 操作 | 遇到的问题与处理 |
|------|------|------------------|
| 设计 | 参考 bundle.json inner_api 与 btclitools/DESIGN.md，编写 DESIGN.md，划分 STA/Hotspot/P2P 模块 | — |
| 初版实现 | 新建 clitools*.h/cpp、common、BUILD.gn，命令表注册，handler 先 stub 再调框架 API | — |
| 部署 | ohclitool.py deploy 拷贝到 test 并修改 test/BUILD.gn | **deps 首项插入**：空 `deps = []` 时脚本插入导致 `deps = [, "wificlitools:wificommand"` 语法错误；修复 ohclitool.py 中 _add_dep_to_build_gn，仅在已有内容时补逗号。 |
| 编译 | 依赖 wifi_sdk、define.h | **未使用函数**：HelpCommand 未调用触发 -Wunused-function；删除该 static 函数。**头文件/依赖**：define.h 间接依赖 system_ability_definition.h，缺 IPC 路径与依赖；在 BUILD.gn 增加 ipc:ipc_single、samgr:samgr_proxy 的 external_deps 及对应 include_dirs。 |
| 类型 | GetLinkedInfo 等打印 | **ipAddress 类型**：WifiLinkedInfo::ipAddress 为 unsigned int 非 string；PrintLinkedInfo 改为 %u 打印。 |
| 补齐 | 对照 interfaces/inner_api 全量 API 补充命令 | 补充 STA 配置/国家码/重连等、Scan 的 advancescan/pnoscan、Hotspot 配置/station/blocklist 等、P2P 全量、新增 Hid2d 模块；DESIGN 中增加「接口与命令覆盖检查」表。 |

---

## 二、目录与文件职责

### 2.1 文件一览

| 文件 | 职责 | 对应 bundle inner_api（主） |
|------|------|----------------------------|
| **clitools.h** | 主入口头：命令表声明、公共宏、各模块 handler 声明；集中包含框架头与模块头。 | 多（汇总） |
| **clitools.cpp** | 主逻辑：命令表定义、入口、Help、HandleUserCommand。 | 汇总 |
| **clitools_sta.h / .cpp** | STA 命令：enable、disable、scan、getscanlist、connect、disconnect、getstatus、getsignal 等。 | wifi_sdk → interfaces/inner_api/wifi_device.h, wifi_scan.h |
| **clitools_hotspot.h / .cpp** | 热点（AP）命令：stub 或后续实现。 | wifi_sdk → interfaces/inner_api/wifi_hotspot.h |
| **clitools_p2p.h / .cpp** | P2P 命令：enable、discover、creategroup、query* 等。 | wifi_sdk → interfaces/inner_api/wifi_p2p.h |
| **clitools_hid2d.h / .cpp** | HID2D 命令：requestgcip、creategroup、connect、getchannel5g 等。 | wifi_sdk → interfaces/inner_api/wifi_hid2d.h（同 P2P SA） |
| **common.h / common.cpp** | 公共能力：Log、常量，无 wifi 业务。 | wifi_utils（语义） |
| **BUILD.gn** | 列出上述源文件；编译目标名为 `wificommand`。 | — |

**说明**：

- 当前实现以 **STA** 为主，Hotspot、P2P 为占位（可打印 "not implemented"），便于后续按 inner_api 补齐。
- 部署时由 ohclitools 技能将 wificlitools 拷贝到 `foundation/communication/wifi/wifi/test/wificlitools`，并在 test 的 BUILD.gn 中增加对 `wificlitools:wificommand` 的依赖。

### 2.2 依赖关系（简化）

```
clitools.h
  ├── common.h
  ├── clitools_sta.h
  ├── clitools_hotspot.h
  └── clitools_p2p.h

clitools.cpp
  └── clitools.h, clitools_sta.h, clitools_hotspot.h, clitools_p2p.h

clitools_sta.cpp   → clitools.h, common.h
clitools_hotspot.cpp → clitools.h, common.h
clitools_p2p.cpp   → clitools.h, common.h
common.cpp         → common.h
```

---

## 三、bundle inner_api 与命令对应表

以下以 **bundle.json 中 build.inner_api** 及 **interfaces/inner_api** 头文件为基准，列出与 wificlitools 的**实现文件**及**命令**的对应关系。

| inner_api / 头文件 | 实现文件 | 命令列表（CLI 名称） |
|--------------------|----------|----------------------|
| **wifi_sdk**（wifi_device.h） | clitools_sta.cpp | wifienable, wifidisable, wifigetstatus, wificonnect, wifidisconnect, wifigetsignal, wifigetconninfo |
| **wifi_sdk**（wifi_scan.h） | clitools_sta.cpp | wifiscan, wifiscanstop, wifigetscanlist |
| **wifi_sdk**（wifi_hotspot.h） | clitools_hotspot.cpp | hotspotenable, hotspotdisable, hotspotgetstatus（当前为 stub） |
| **wifi_sdk**（wifi_p2p.h） | clitools_p2p.cpp | p2penable, p2pdisable, p2pdiscover（当前为 stub） |
| **wifi_base** / **wifi_utils** | common.cpp | Log、常量等，无单独命令 |
| **wifi_sdk**（wifi_hid2d.h） | clitools_hid2d.cpp | hid2d* 系列命令（HID2D 能力，与 P2P 同 SA） |

---

## 四、接口与命令覆盖检查（bundle inner_api 对应）

根据 `bundle.json` 的 inner_api（interfaces/、base/inner_api/、utils/inc）与各头文件 API 逐一对照，确保**所有对外能力均有对应命令行**。

### 4.1 interfaces/inner_api（wifi_sdk）

| 头文件 | 类/能力 | 已覆盖命令 | 补充命令（原遗漏） |
|--------|---------|------------|--------------------|
| **wifi_device.h** | WifiDevice | wifienable, wifidisable, wifigetstatus, wificonnect, wifidisconnect, wifigetsignal, wifigetconninfo | getdeviceconfigs, adddeviceconfig, removedevice, removealldevice, getdeviceconfig, getcountrycode, setcountrycode, reconnect, getdevicemac, getdisconnectreason, getipinfo, getwifistate |
| **wifi_scan.h** | WifiScan | wifiscan, wifigetscanlist | wifiscanstop(说明), advancescan, setscanonlyavailable, getscanonlyavailable, startpnoscan |
| **wifi_hotspot.h** | WifiHotspot | hotspotenable, hotspotdisable, hotspotgetstatus | gethotspotconfig, sethotspotconfig, getstationlist, disassociatesta, getblocklists, addblocklist, delblocklist, getvalidbands, getvalidchannels, getpowermodel, setpowermodel, getapifacename, sethotspotidletimeout, ishotspotdualbandsupported, isopensoftapallowed, enablelocalonlyhotspot, disablelocalonlyhotspot, gethotspotmode, getlocalonlyhotspotconfig |
| **wifi_p2p.h** | WifiP2p | p2penable, p2pdisable, p2pdiscover | p2pstopdiscover, discoverservices, stopdiscoverservices, creategroup, removegroup, p2pconnect, p2pcancelconnect, queryp2plinkedinfo, getcurrentgroup, getp2penablestatus, getp2pdiscoverstatus, getp2pconnectedstatus, queryp2plocaldevice, queryp2pdevices, queryp2pgroups, queryp2pservices, setp2pdevicename |
| **wifi_hid2d.h** | Hid2d | （无） | hid2drequestgcip, hid2dsharedlinkincrease, hid2dsharedlinkdecrease, hid2dcreategroup, hid2dremovegcgroup, hid2dconnect, hid2dconfigipaddr, hid2dreleaseipaddr, hid2dgetrecommendchannel, hid2dgetchannel5g, hid2dgetselfcfg, hid2dsetpeercfg, hid2dsetupperscene, hid2diswidebandsupported, hid2dsetgrouptype |

### 4.2 interfaces/inner_api 辅助头文件

- **wifi_msg.h**、**wifi_p2p_msg.h**、**wifi_ap_msg.h**、**wifi_scan_msg.h** 等：为上述接口提供数据结构与枚举，不单独对应命令。
- **wifi_hid2d_msg.h**（frameworks/native/interfaces）：为 Hid2d 提供类型，由 clitools_hid2d 使用。

### 4.3 base/inner_api（wifi_base）

- **wifi_crowdsourced_data.h**、**wifi_log.h**、**rpc.h**、**ienhance_service.h**：内部/底座能力，非面向最终用户的 WiFi 操作，不要求 CLI 一一对应。

### 4.4 utils/inc（wifi_utils）

- **wifi_sa_manager.h**、**wifi_event_handler.h**、**wifi_library_utils.h** 等：工具与内部逻辑，非对外 API 表面，不要求 CLI 一一对应。

---

## 五、命令表在代码中的组织（可读性）

命令表 `g_staCliCmds` 在 **clitools.cpp** 中按能力域分组：

1. **STA**：wifi_device.h, wifi_scan.h → clitools_sta
2. **Hotspot**：wifi_hotspot.h → clitools_hotspot
3. **P2P**：wifi_p2p.h → clitools_p2p
4. **Hid2d**：wifi_hid2d.h → clitools_hid2d

在 clitools.cpp 中，命令表前有注释块标明上述分组与 inner_api 的对应关系。

---

## 六、命名与可读性约定

- **命令**：小写、连续字母，如 `wifienable`、`wifiscan`；与框架能力一一对应时在注释中标明头文件。
- **Handler 函数**：大驼峰（PascalCase），如 `HandleWifiEnable`、`HandleHotspotXxx`、`HandleP2pXxx`。
- **常量**：全大写 + 下划线（UPPER_SNAKE_CASE），如 `CMD_IDX`、`MIN_WPA_LENGTH`、`DEFAULT_CALLBACK_TIMEOUT_MS`；禁止魔数，凡数值/字符串常量均以常量或枚举形式定义。
- **文件**：`clitools_<模块名>.h/cpp` 对应单一能力域；`common_*` 表示跨模块公共能力。
- **注释**：在模块头文件顶部说明对应 inner_api/头文件；在命令表旁用简短注释标明「bundle inner_api ↔ 命令组」。

---

## 六（附）、代码规范（与 ohclitools 技能一致）

| 规范项 | 要求 |
|--------|------|
| **魔数禁止** | 不得在逻辑中直接写魔法数字/字符串，一律用具名常量或枚举。 |
| **行宽** | 单行字符数不超过 120（含缩进与注释），超长时换行缩进。 |
| **函数名** | 大驼峰（PascalCase），如 `HandleWifiEnable`、`ParseIntArg`。 |
| **常量名** | 全大写 + 下划线（UPPER_SNAKE_CASE），如 `WIFI_OPT_SUCCESS`、`DEFAULT_CALLBACK_TIMEOUT_MS`；禁止 k 前缀或 camelCase。 |
| **变量声明** | 同一行不声明多个变量（如 `std::string ifName, ip;` 改为两行：`std::string ifName;`、`std::string ip;`）。 |
| **注释位置** | 说明性注释不写在行尾；应单独占一行，写在被注释代码的**上一行**。 |
| **换行与运算符** | 续行时运算符放在行尾，行尾与下一行行首不留空格（如 `&&`、`\|\|` 在上一行末尾）。 |
| **头文件** | 不在头文件中使用匿名 namespace 或 static 定义非外部可见符号；常量用 `inline constexpr`（C++17）或移至 .cpp 定义。 |
| **Get 类接口** | 凡「获取信息」类接口（如 GetLinkedInfo、GetDeviceConfigs、GetScanInfoList），需在终端 **dump 出具体 info**（字段级打印），不能只打印「success」。 |
| **Callback 接口** | 若框架 API 为异步回调（如注册 callback 等待结果），需：① 注册 callback；② 等待回调结果并带 **timeout**。默认超时 **2s**；对 scan 等长时间操作默认 **30s**，超时后结束 scan 动作并返回。 |
| **Usage 两段式** | 每个命令的 usage 分两部分：① 接口功能与参数说明（参数标明 **string** 或 **int**，如 `code= string`、`networkId= int`）；② 使用示例，以 ` ex: wificommand <cmd> [args]` 结尾。 |
| **Usage 示例值** | 示例取值与框架/测试一致（如 SetCountryCode 测试用 `"86"`，则 usage 写 `code=86` 而非 CN）；枚举型罗列枚举及传入值（如 `band= int 1|2`）。 |
| **数据结构打印** | 收到的数据结构（如 WifiLinkedInfo、WifiDeviceConfig、IpInfo、HotspotConfig、StationInfo 等）必须通过 **DumpXxx** 方法统一打印到终端，字段级输出，不得只打印「success」。 |
| **函数注释** | 每个函数（含 handler、工具函数）需用注释声明使用方法，包括 **参数说明** 与 **返回值说明**。 |

### Callback 实现说明

接口文件（wifi_device.h、wifi_scan.h、wifi_hotspot.h、wifi_p2p.h）中定义的 **RegisterCallBack** 需传入对应 callback 实现（如 IWifiDeviceCallBack、IWifiScanCallback、IWifiHotspotCallback、IWifiP2pCallback）。约定：

- **当前实现**：CLI 以同步 API 为主（如 GetScanInfoList、GetLinkedInfo），未注册 callback；若某命令需依赖异步回调结果，需实现对应 callback 子类并注册，且等待时带 **timeout**（普通 2s，scan 类 30s）。
- **Callback 与 timeout**：实现 callback 后，在调用触发异步结果的 API 后，应等待回调或超时（DEFAULT_CALLBACK_TIMEOUT_MS / SCAN_CALLBACK_TIMEOUT_MS），超时后结束动作并返回。
- 常量定义于 `clitools_constants.h`。

### 代码规范检查清单与结论

| 检查项 | 状态 | 说明 |
|--------|------|------|
| **禁止魔数** | 已落实 | 新增 `clitools_constants.h`，所有数值/索引/默认值使用具名常量（如 PREFIX_LEN_SSID、DEFAULT_PNO_PERIOD_MS、INVALID_NETWORK_ID、HOTSPOT_INSTANCE_ID、MAX_DUMP_CHANNEL_COUNT 等）；各模块已 include 并替换魔数。 |
| **函数注释（参数与返回值）** | 已落实 | common.h、clitools.h、clitools.cpp 及 clitools_sta 中关键函数已增加注释；各模块头文件注明「所有 handler：@param argc/argv，@return void」。 |
| **数据结构 DumpXxx** | 已落实 | STA：DumpLinkedInfo、DumpScanList、DumpWifiDeviceConfig、DumpIpInfo、DumpDisconnectedReason；Hotspot：DumpHotspotConfig、DumpStationInfo；P2P：DumpP2pLinkedInfo、DumpP2pGroupInfo、DumpP2pDevice。Get 类命令均通过 DumpXxx 输出字段。 |
| **Callback 对应实现** | 约定说明 | 接口中 RegisterCallBack 需传入的 IWifiDeviceCallBack / IWifiScanCallback / IWifiHotspotCallback / IWifiP2pCallback 为框架 IPC 接口；当前 CLI 以同步 API 为主，未注册 callback。若某命令改为依赖异步回调，需实现对应 callback 并注册，且等待时带 timeout（见上表）。 |

---

## 七、与 ohclitools 技能的关系

- **部署**：使用 `ohclitool.py deploy --source-dir .claude/skills/ohclitools/wificlitools --test-dir foundation/communication/wifi/wifi/test` 将 wificlitools 拷贝到 test 并修改 BUILD.gn。
- **编译**：`ohclitool.py build` 解析 wificlitools/BUILD.gn 得到目标名 `wificommand`，传给 `build.sh --build-target wificommand`。
- **验证与设备运行**：`ohclitool.py verify --push-run` 将产物推送到设备并比较命令列表与源码一致性（需在 ohclitool.py 中支持 wifi 的 test 路径与产物路径）。

维护时建议：先看 DESIGN.md 确定模块与命令归属，再结合 wifi bundle 的 inner_api 与 interfaces 头文件补充实现或占位说明。
