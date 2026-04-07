---
name: ohipc
description: "OpenHarmony IPC：架构 ipcarch.md、零基础长文 howtoipc.md（对齐 howtohdf 体例）、ipc_example 设计/开发/编译/板测；ohipc.py 含 howto、build、push、hdc 测试与成功判据。"
author: "Created by user"
version: "1.0.4"
---

# ohipc：IPC 架构 + ipc_example 全流程

本技能将 **设计 → 开发 → 编译 → 板端测试** 固化；架构理论见 **`ipcarch.md`**；**零基础长文**见 **`howtoipc.md`**（与 **howtohdf** 体例对齐）；可运行样例在源码 **`foundation/communication/ipc_example/`**。命令与 **`HOWTOSKILLS.md`** 一致：在 **napi_generator** 仓库根使用 **`python3 src/skills/ohipc/ohipc.py …`**；在 **OH 源码根**下执行时请写 **`ohipc.py`** 的绝对路径或 **`${NAPI_GENERATOR_ROOT}/src/skills/ohipc/ohipc.py`**（见 **howtoipc.md §0.35**）。

---

## 资源索引

| 内容 | 路径 |
|------|------|
| **零基础全链路教程** | `src/skills/ohipc/howtoipc.md` |
| 架构（分层、接口、调用链、扩展方向） | `src/skills/ohipc/ipcarch.md` |
| 本技能（流程与测试判据） | `src/skills/ohipc/SKILL.md` |
| **跨进程测试报告（用例表 / 环境 / 与进程内关系）** | `src/skills/ohipc/IPC_EXAMPLE_CROSS_PROCESS_TEST_REPORT.md` |
| 命令脚本 | `src/skills/ohipc/ohipc.py` |
| 样例部件（服务端 Stub + 客户端 Proxy + 双可执行文件） | `foundation/communication/ipc_example/` |
| 进程内 GTest（Parcel 对称，无 SA） | `foundation/communication/ipc_example/test/unittest/ipc_demo_parcel_unittest.cpp` |
| **应用 NDK 框架（C ABI + NAPI 注册函数）** | `foundation/communication/ipc_example/framework/`；NativeProj 接入说明 **`NATIVEPROJ_IPC_FRAMEWORK.md`** |
| 产物 **`libipc_demo_framework.z.so`** | `out/<product>/communication/ipc_example_service/libipc_demo_framework.z.so`（`ohipc.py paths`） |
| 产物 **`libipc_example_parcel.z.so`**（GN 单编，系统侧） | `out/<product>/communication/ipc_example_service/libipc_example_parcel.z.so`（**`ohipc.py paths`**） |
| **HAP 内 Parcel NAPI（`import 'libipc_example_parcel.so'`）** | 示例 **`foundation/communication/ipc_example/IpcNativeProj46R`**：由 **entry `CMakeLists.txt`** 的 **`add_library(ipc_example_parcel …)`** 把 **`framework/ipc_example_parcel_*.cpp`** 按 **`abiFilters`** 打入 **`libs/<abi>/libipc_example_parcel.so`**；流程见 **`NATIVEPROJ_IPC_FRAMEWORK.md`** 与 **ohproj**（`build` → `build-test` → `sign` → `test`） |

---

## 一、设计要点（与 ipcarch 对齐）

- **发现与连接**：demo 使用 **SystemAbilityManager**，**SA ID** 为厂商段 **`0x00010001`（65537）**，见 `ipc_demo_ipc.h` 中 **`IPC_EXAMPLE_DEMO_SA_ID`**。
- **传输模型**：**`IRemoteObject::SendRequest` + `MessageParcel`**；服务端 **`IpcDemoServiceStub`**，客户端 **`IpcDemoProxy`**（非 IDL 手写，便于阅读）。
- **多客户端**：服务端维护 **`sessionId → ClientRecord`**；对客户端 **`eventProxy`** 注册 **`DeathRecipient`**，进程退出后服务端摘除会话。
- **服务端 → 客户端推送**：独立 Binder 对象 **`ClientEventStub`**，事务码 **`NOTIFY_STRUCT_FROM_SERVER`**。
- **「类对象」跨进程**：客户端 **`DemoClassStub`**，服务端通过 **`CALL_DEMO_OBJECT`** 转调 **`DEMO_GET_MAGIC`**。

---

## 二、开发清单（仓库内已落地）

| 类别 | 路径或操作 |
|------|------------|
| 部件源码 | `foundation/communication/ipc_example/**` |
| 部件描述 | `foundation/communication/ipc_example/bundle.json`（`ipc_example_service`） |
| GN 入口 | `foundation/communication/ipc_example/BUILD.gn` → `services/BUILD.gn` |
| 构建白名单 | `build/indep_component_whitelist.json` 含 **`ipc_example_service`** |
| 产品部件 | `productdefine/common/inherit/rich.json` → **communication** → **`ipc_example_service`** |
| 注意 | 本部件 **不要** 依赖 `ipc_util_config`（GN 会报 InnerApi）；仅用 **`ipc:ipc_core`** 等 **external_deps** |

---

## 三、编译步骤

在**源码根**（存在 `build.sh`）执行：

```bash
./build.sh --product-name rk3568 --build-target ipc_demo_server --build-target ipc_demo_client
```

**进程内单测（可选，不依赖 SystemAbility）**：

```bash
./build.sh --product-name rk3568 --build-target ipc_demo_parcel_unittest
# 或：python3 src/skills/ohipc/ohipc.py build-unittest
```

产物（典型）：

```text
out/rk3568/communication/ipc_example_service/ipc_demo_server
out/rk3568/communication/ipc_example_service/ipc_demo_client
out/rk3568/tests/unittest/communication/ipc_example_service/ipc_demo_parcel_unittest
```

全量镜像安装后，可执行文件一般在 **`/system/bin/`** 同名；板测推送常用 **`/data/local/tmp/`**。

---

## 四、板端测试步骤（手工）

1. **连接设备**：`hdc list targets`
2. **推送并授权**（路径按本机 `out` 调整）：
   ```bash
   hdc file send out/rk3568/communication/ipc_example_service/ipc_demo_server /data/local/tmp/
   hdc file send out/rk3568/communication/ipc_example_service/ipc_demo_client /data/local/tmp/
   hdc shell "chmod 755 /data/local/tmp/ipc_demo_server /data/local/tmp/ipc_demo_client"
   ```
3. **启动服务端**（需保持存活；`hdc shell` 单次会话结束后子进程可能被收掉时，用下面写法）：
   ```bash
   hdc shell "sh -c 'nohup /data/local/tmp/ipc_demo_server >/data/local/tmp/ipc_srv.log 2>&1 &'"
   ```
4. **确认服务端**：
   - `hdc shell "ps -ef | grep ipc_demo_server | grep -v grep"`
   - `hdc shell "cat /data/local/tmp/ipc_srv.log"`  
   成功时应出现：**`registered, JoinWorkThread`**（表示 **`AddSystemAbility` 成功**）。
5. **运行客户端**：
   ```bash
   hdc shell "/data/local/tmp/ipc_demo_client myname"
   ```

---

## 五、测试成功判据（log / 返回值）

### 5.1 服务端日志（文件）

| 内容 | 含义 |
|------|------|
| `starting, SA ID=65537` | 进程启动 |
| `registered, JoinWorkThread` | **SA 注册成功**（否则客户端 `GetSystemAbility` 会失败） |

### 5.2 客户端标准输出（必须项）

以下 **字符串模式** 均出现且数值符合时，视为 **功能测试通过**：

| 检查项 | 期望 |
|--------|------|
| 注册 | `registered session=` 后跟正整数 |
| 字符串 RPC | `SendString ret=0`（**`0` 即 `ERR_OK`**） |
| 结构体写入 | `PushStruct ret=0` |
| 结构体读回 | `PullStruct ret=0` 且 **`A=10 B=20`**（与 demo 内推送一致） |
| 远端「类」调用 | `CallDemoObjectMagic ret=0` 且 **`magic=0x50435049`**（即 **`DEMO_CLASS_MAGIC`**） |
| 服务端改结构 + 回调 | `ServerUpdateStruct ret=0`、`notifyCount=1`；**`last notify:`** 中 **`B=25`**（在 **`B=20` 基础上 +5**）、**`seq=1`** |
| 连接数 | `GetClientCount ret=0` 且 **`count≥1`** |
| 同伴列表 | `GetPeerList ret=0` |
| **类型/边界/错误/性能/并发自测行** | 见 **§5.4**；**`ohipc.py`** 与之一致校验；客户端失败时 **`SUMMARY_UT FAIL`** 且进程退出码 **非 0** |

### 5.3 测试覆盖矩阵（当前 demo 范围）

| 维度 | 是否覆盖 | 说明 |
|------|----------|------|
| **数据类型** | **是（Parcel 主读写面 + 原 demo）** | **原路径**：`string16`、`SharedState`、双 **`IRemoteObject`**。**扩展 RPC**（`ipc_demo_ipc.h` **`ECHO_*`**）：**全标量包**（`bool/int8~64/uint8~64/float/double`）、**`u16string` 空+长串**、`WriteInt32Vector` / `WriteStringVector`、`WriteBuffer` 字节块、**FD** 单字节、`Parcelable` 嵌套、`WriteAshmem` 魔数。**不可传类型**（函数指针等）见 **`ipcarch.md` §5.3**。 |
| **边界值** | **是** | 标量极值；**空 `int32` 向量**；**512 元**向量求和；**1 字节**与 **512 字节** XOR；**3000 字符** `u16string` |
| **错误路径** | **是** | **`UT_ERR_BAD_SESSION`**：`PULL_STRUCT` + 伪造 `session` → **`ERR_INVALID_DATA`**；**`UT_ERR_LOCAL_AFTER_UNREG`**：注销后 **`SendString`** → 代理层 **`-1`** |
| **性能** | **是（进程内粗测）** | 日志行 **`PERF_echo_scalars loops=2000 us=<整数>`**（2000 次 **`ECHO_ALL_SCALARS`**）；另可用 **`ohipc.py perf`** 做整客户端多次冷跑 |
| **并发** | **是（同进程多线程打同一 Proxy）** | **`UT_CONC_ECHO`**：**6 线程 × 80 次** `EchoAllScalars`；**`CONC_echo_scalars … fails=0`**；**`test-concurrent`** 仍为 **双进程** 重叠 |

### 5.4 客户端自测标签与四象限对应（`ipc_demo_client_main.cpp`）

| 输出标签 | 象限 | 含义 |
|----------|------|------|
| `UT_TYPE_SCALARS ok` | 类型 | `ECHO_ALL_SCALARS` 全字段往返一致 |
| `UT_TYPE_STRING16 ok` | 类型+边界 | 空串 + **≥3000** `char16_t` |
| `UT_BOUND_EMPTY_INT32VEC ok` | 边界 | 空 `vector<int32_t>`，期望 sum=0 |
| `UT_TYPE_INT32VEC_SMALL ok` | 类型 | `{1,2,3}` → sum=6 |
| `UT_BOUND_INT32VEC_512 ok` | 边界 | 512 元 `i%7` 向量与服务器求和一致 |
| `UT_TYPE_STRINGVEC ok` | 类型 | `WriteStringVector` → 拼接 `a;bb;ccc` |
| `UT_BOUND_BUFFER_1BYTE ok` | 边界 | 单字节 XOR |
| `UT_TYPE_BUFFER_512_XOR ok` | 类型 | 512 字节 XOR |
| `UT_TYPE_FD ok` | 类型 | `pipe` + **`WriteFileDescriptor`** 读回 **0xAB** |
| `UT_TYPE_PARCELABLE ok` | 类型 | **`DemoBoxParcelable`** 宽高翻倍 |
| `UT_TYPE_ASHMEM ok` | 类型 | **`ASHMEM_TEST_MAGIC`** 映射读回 |
| `UT_ERR_BAD_SESSION ok` | 错误 | 伪造 session 拉结构体 |
| `PERF_echo_scalars loops=… us=…` | 性能 | 见上 |
| `CONC_echo_scalars … fails=0` / `UT_CONC_ECHO ok` | 并发 | 多线程 RPC + **fails=0** |
| `UT_ERR_LOCAL_AFTER_UNREG ok` | 错误 | 注销后本地拒绝 |
| `SUMMARY_UT ALL_OK` | 总闸 | 上述均通过；**`FAIL`** 则整测失败 |

### 5.5 进程内测试（`ipc_demo_parcel_unittest`）

| GTest 用例 | 验证点（同一进程内 `Parcel::RewindRead(0)` 后对称读回） |
|------------|----------------------------------------------------------|
| `DemoBoxParcelableRoundTrip` | `WriteParcelable` / `ReadParcelable<DemoBoxParcelable>` |
| `NullParcelable` | `nullptr` 与 `ReadParcelable` 得空 |
| `AllScalarsRoundTrip` | 与跨进程 **`AllScalarsPack`** 相同字段顺序的 `Write*` / `Read*` |
| `Int32VectorRoundTrip` / `EmptyInt32VectorRoundTrip` | `WriteInt32Vector` / `ReadInt32Vector` |
| `StringVectorRoundTrip` | `WriteStringVector` / `ReadStringVector` |
| `String16RoundTrip` | `WriteString16` / `ReadString16`（含 Unicode） |
| `ByteBufferRoundTrip` | `WriteUint32` + `WriteBuffer` / `ReadBuffer` |

板端执行（**须在可写目录下启动**，以便 gtest 写 xml；**`ohipc.py test-parcel`** 已固定为 **`cd /data/local/tmp && ./ipc_demo_parcel_unittest`**）：

```bash
python3 src/skills/ohipc/ohipc.py test-parcel
```

---

## 六、与 `ohipc.py` 的对应关系

| 能力 | 子命令 |
|------|--------|
| 打印 **`howtoipc.md`** 路径 / 摘要 | `howto`（**`--full`** 打印全文） |
| 打印架构文档路径 / 摘要 | `arch`（**`arch`** 会列出 **`howtoipc.md`** 路径并摘录 **ipcarch.md**、**SKILL.md** 片段） |
| 单编 server / client / 二者 | `build-server` / `build-client` / `build-all` |
| 单编进程内 GTest | `build-unittest` |
| 打印产物路径（含 **`libipc_demo_framework`** / **`libipc_example_parcel`**） | `paths`（**`ohproj.py` 无 `ipc-paths`**；HAP 流程见 **`ohproj`** 的 `build` / `test` 与 **`NATIVEPROJ_IPC_FRAMEWORK.md`**） |
| 推送到设备 | `push` |
| 后台起服务端 | `run-server` |
| 跑客户端一次并 **解析成功判据** | `test` |
| 简易并发重叠双客户端 | `test-concurrent` |
| 简易循环 RPC **性能** | `perf` |
| 板端跑 **进程内** `ipc_demo_parcel_unittest` | `test-parcel`（`--no-push` 跳过推送） |

环境变量：**`OHIPC_HDC_TARGET`**；或 **`-t <序列号>`**（与 `hdc -t` 一致）。

**实现说明**：`hdc shell` 常把被拉起进程的打印写到 **stderr**；**`test`** 与 **`perf`** 对客户端输出做判据时均合并 **stdout + stderr**（与仅看 stdout 时偶发「判据全失败」的情况区分）。

### 6.1 `ohipc.py` 退出码

| 码 | 含义 |
|----|------|
| 0 | 子命令成功（`test` / `test-concurrent` / `perf` / **`test-parcel`** 且判据通过） |
| 1 | 通用失败（编译失败、push 失败、客户端进程非零退出等） |
| 2 | 无 hdc 设备 |
| 3 | 服务端日志缺少 **`registered, JoinWorkThread`** |
| 4 | **`test`** 客户端输出未通过正则判据 |
| 5 | **`test-concurrent`** 任一客户端日志未通过判据 |
| 6 | **`test-parcel`**：GTest 失败、输出含 **`FAILED`**、或缺少 **`PASSED`** 汇总行 |

---

## 七、常见问题

| 现象 | 处理 |
|------|------|
| GN：`ipc_util_config` InnerApi | 已从 demo 的 `BUILD.gn` 去掉对 **`ipc_util_config`** 的引用 |
| 编译：`0xDEMO` 非法 | HiLog domain 使用 **`0xD100`** 等合法十六进制 |
| 服务端起不来 / 客户端 Get 失败 | 查 **`ipc_srv.log`**；确认 **samgr** 正常；必要时查 **SELinux / 权限**（正式产品需按 SA 规范补全） |
| `hdc shell` 起服务立刻消失 | 使用 **`sh -c 'nohup ... &'`** 或 **`ohipc.py run-server`** |
| **`test-parcel` 报 Unable to open `*.xml`** | 已在脚本中改为 **`cd /data/local/tmp`** 再执行；勿在不可写 cwd 下直接跑 gtest |

---

*样例与判据随 `ipc_example` 源码更新；若以仓库为准与本 SKILL 冲突，以源码为准。*
