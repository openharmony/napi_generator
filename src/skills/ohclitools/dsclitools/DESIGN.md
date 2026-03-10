# dsclitools 代码设计说明

本文档描述 dsclitools 的代码结构、与 dsoftbus 组件 inner_kits 的对应关系、设计原则及可读性约定，便于维护和扩展。

**接口定义来源**：`foundation/communication/dsoftbus/bundle.json` 中 build.inner_kits（约 148–354 行）。CLI 主要对接 **softbus_client**（bus_center、common、session），其余 inner_kit 多为内部 struct/工具，不强制一一对应命令行。

---

## 一、设计目标

| 目标 | 说明 |
|------|------|
| **文件与功能清晰** | 按能力域划分文件：bus_center（LNN/节点/发现/组网）、session（会话/传输）。 |
| **降低耦合** | 模块仅依赖必要的 softbus 头与公共头；公共层（Log、常量）集中存放。 |
| **功能单一** | 每个源文件只负责一类 CLI 能力（BusCenter / Session），便于定位与测试。 |
| **接口对应可读** | 代码中能明确看出「命令 ↔ 框架头文件」的对应关系，便于与 bundle 定义对照。 |
| **接口全覆盖** | 对 softbus_client 暴露的 bus_center、session 接口，凡可命令行化的均提供对应命令，无遗漏。 |

---

## 二、bundle inner_kits 与 CLI 对应关系

| inner_kit（bundle.json） | 头文件（header_files） | CLI 模块 | 说明 |
|--------------------------|------------------------|----------|------|
| **sdk:softbus_client** | bus_center/softbus_bus_center.h, common/softbus_common.h, common/softbus_error_code.h, transport/session.h | clitools_bus_center, clitools_session | 主要对接；common 为常量/错误码，无独立命令。 |
| core/common:softbus_utils | 大量 *_struct.h | — | 内部结构体，由 bus_center/session 间接使用，不单独暴露命令。 |
| adapter:softbus_adapter | 少量头文件 | — | 适配层，不单独暴露命令。 |
| dfx:softbus_dfx | event 等 | 可选 | 后续可扩展 dfx 命令。 |
| nstackx_util / nstackx_ctrl | nstackx 相关 | 可选 | 后续可扩展。 |
| wifi_direct_cpp / softbus_dfx_dump | 空或少量 | — | 暂不纳入 CLI。 |

---

## 三、目录与文件职责

| 文件 | 职责 | 对应 bundle inner_api（主） |
|------|------|----------------------------|
| **clitools.h** | 主入口头：命令表声明、各模块 handler 声明。 | 汇总 |
| **clitools.cpp** | 主逻辑：命令表定义、Help、HandleUserCommand、main。 | 汇总 |
| **clitools_bus_center.h / .cpp** | LNN/节点/发现/组网/时间同步/元节点/GroupOwner 等。 | softbus_client → softbus_bus_center.h |
| **clitools_session.h / .cpp** | 会话服务创建与删除、打开/关闭会话、发送字节/消息/文件、查询会话信息。 | softbus_client → session.h |
| **common.h / common.cpp** | 公共能力：Log，无 softbus 业务。 | — |
| **clitools_constants.h** | 常量（pkgName 默认值、超时、缓冲区长度等），禁止魔数。 | — |
| **BUILD.gn** | 编译目标 `dscommand`，依赖 softbus_client。 | — |

部署时由 ohclitools 技能将 dsclitools 拷贝到 `foundation/communication/dsoftbus/tests/dsclitools`，并在 tests/BUILD.gn 的 group("unittest") deps 中增加 `"dsclitools:dscommand"`。

---

## 四、softbus_client 接口与命令对应表

### 4.1 softbus_bus_center.h

| API | 命令名 | 说明 |
|-----|--------|------|
| JoinLNN | joinlnn | 加入 LNN（需 ConnectionAddr，回调可选） |
| LeaveLNN | leavelnn | 离开 LNN（networkId=） |
| RegNodeDeviceStateCb | regnodecb | 注册节点状态回调（需 INodeStateCb，CLI 可注册 stub+timeout） |
| UnregNodeDeviceStateCb | unregnodecb | 注销节点状态回调 |
| GetAllNodeDeviceInfo | getallnodeinfo | 获取所有在线节点信息（dump 列表） |
| FreeNodeInfo | （内部） | 由 getallnodeinfo 内部调用释放 |
| GetLocalNodeDeviceInfo | getlocalnodeinfo | 获取本机节点信息（dump） |
| GetNodeKeyInfo | getnodekeyinfo | 获取指定节点指定 key 信息（networkId=, key=） |
| SetNodeDataChangeFlag | setnodedatachangeflag | 设置节点数据变化标志 |
| StartTimeSync | starttimesync | 启动时间同步（targetNetworkId=, accuracy=, period=） |
| StopTimeSync | stoptimesync | 停止时间同步（targetNetworkId=） |
| PublishLNN | publishlnn | 发布服务（需 PublishInfo/callback） |
| StopPublishLNN | stoppublishlnn | 停止发布（publishId=） |
| RefreshLNN | refreshlnn | 订阅服务（需 SubscribeInfo/callback） |
| StopRefreshLNN | stoprefreshlnn | 取消订阅（refreshId=） |
| ActiveMetaNode | activemetanode | 激活元节点（需 MetaNodeConfigInfo） |
| DeactiveMetaNode | deactivemetanode | 停用元节点（metaNodeId=） |
| GetAllMetaNodeInfo | getallmetanodeinfo | 获取所有元节点信息 |
| ShiftLNNGear | shiftlnngear | 修改心跳参数（需 GearMode） |
| SyncTrustedRelationShip | synctrustedrelationship | 同步信任关系（msg=） |
| SetDisplayName | setdisplayname | 设置本机显示名（nameData=） |
| CreateGroupOwner | creategroupowner | 创建 P2P GO（需 GroupOwnerConfig/Result/Listener） |
| DestroyGroupOwner | destroygroupowner | 销毁 P2P GO |

### 4.2 session.h（transport）

| API | 命令名 | 说明 |
|-----|--------|------|
| CreateSessionServer | createsessionserver | 创建会话服务（pkgName=, sessionName=，需 ISessionListener） |
| RemoveSessionServer | removesessionserver | 删除会话服务（pkgName=, sessionName=） |
| OpenSession | opensession | 打开会话（mySessionName=, peerSessionName=, peerNetworkId=，需 SessionAttribute） |
| CloseSession | closesession | 关闭会话（sessionId=） |
| SendBytes | sendbytes | 发送字节（sessionId=, data=, len=） |
| SendMessage | sendmessage | 发送消息（sessionId=, data=, len=） |
| GetMySessionName | getmysessionname | 获取本端会话名（sessionId=） |
| GetPeerSessionName | getpeersessionname | 获取对端会话名（sessionId=） |
| GetPeerDeviceId | getpeerdeviceid | 获取对端设备 ID（sessionId=） |
| GetSessionSide | getsessionside | 获取会话侧（sessionId=） |
| SetFileReceiveListener | setfilereceivelistener | 设置文件接收监听（需 IFileReceiveListener） |
| SetFileSendListener | setfilesendlistener | 设置文件发送监听（需 IFileSendListener） |
| SendFile | sendfile | 发送文件（sessionId=, sFileList, dFileList, fileCnt） |
| GetSessionOption | getsessionoption | 获取会话选项（sessionId=, option=） |

---

## 五、代码规范（与 ohclitools 技能一致）

| 规范项 | 要求 |
|--------|------|
| **魔数禁止** | 不得在逻辑中直接写魔法数字/字符串，一律用具名常量（clitools_constants.h）。 |
| **行宽** | 单行字符数不超过 120（含缩进与注释），超长时换行缩进。 |
| **函数名** | 大驼峰（PascalCase），如 HandleJoinLNN、GetArg。 |
| **常量名** | 全大写 + 下划线（UPPER_SNAKE_CASE），如 DEFAULT_PKG_NAME、DEFAULT_CALLBACK_TIMEOUT_MS；禁止 k 前缀或 camelCase。 |
| **变量声明** | 同一行不声明多个变量（如 `int a, b;` 改为两行分别声明）。 |
| **注释位置** | 说明性注释不写在行尾；应单独占一行，写在被注释代码的**上一行**。 |
| **换行与运算符** | 续行时运算符放在行尾，行尾与下一行行首不留空格（如 `&&`、`\|\|` 在上一行末尾）。 |
| **头文件** | 不在头文件中使用匿名 namespace 或 static 定义非外部可见符号；常量用 `inline constexpr` 或移至 .cpp。 |
| **Get 类接口** | 凡「获取信息」类接口需在终端 **dump 出具体 info**（字段级），不能只打印 success。 |
| **Callback 接口** | 若框架 API 为异步回调，需注册 callback；CLI 中异步命令仅打印即时 ret，不阻塞等待（设备端回调由框架触发）。 |
| **Usage 两段式** | 每个命令的 usage 分两部分：① 接口功能与参数说明（参数标明 **string** 或 **int**）；② 使用示例，以 ` ex: dscommand <cmd> [args]` 结尾。 |
| **Usage 示例值** | 示例取值与框架/测试一致；枚举型罗列枚举及传入值（如 `key= int 0-14`）。 |
| **数据结构打印** | 收到的数据结构（如 NodeBasicInfo、MetaNodeInfo、会话名/deviceId 等）须通过 **DumpXxx** 或字段级 Logd 输出，不得只打印 success。 |
| **函数注释** | 每个函数（含 handler、工具函数）需用注释声明 **参数说明** 与 **返回值说明**；**每个 @param、@return 单独占一行**，不得写在同一行。 |
| **安全函数** | 禁止使用 `strncpy`、`memset`，须使用 `strncpy_s`、`memset_s`（`#include "securec.h"`，并链接 bounds_checking_function）。 |
| **行宽** | 单行不超过 120 字符，超长须换行（如长字符串拆为多行拼接）。 |

---

## 六、与 ohclitools 技能的关系

- **部署**：`ohclitool.py deploy --source-dir .claude/skills/ohclitools/dsclitools --test-dir foundation/communication/dsoftbus/tests`
- **编译**：解析 dsclitools/BUILD.gn 得到目标名 `dscommand`，需在 dsoftbus 工程内编译（依赖 softbus_client）。
- **验证**：`ohclitool.py verify --push-run` 可对比设备输出命令列表与源码 g_staCliCmds 一致性。

维护时建议：先看 DESIGN.md 确定模块与命令归属，再结合 bundle.json 与 interfaces/kits 头文件补充实现或占位。
