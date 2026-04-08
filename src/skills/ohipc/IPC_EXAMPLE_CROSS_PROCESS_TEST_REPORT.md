# ipc_example 跨进程测试报告（模板与判据说明）

本文档描述 **`foundation/communication/ipc_example`** 在**真实设备、双进程（`ipc_demo_server` + `ipc_demo_client`）**下的测试范围、前置条件、用例与通过标准，便于归档与评审。自动化校验由 **`src/skills/ohipc/ohipc.py`**（在 **OH 源码树**下执行：`python3 <napi_generator>/src/skills/ohipc/ohipc.py …`）的 **`test` / `test-concurrent` / `perf` / `test-parcel`** 等子命令执行。

---

## 1. 测试目的

| 项 | 说明 |
|----|------|
| **验证对象** | SystemAbility **`0x00010001`** 上的 **`IIpcDemoService`**：手写 Stub/Proxy、`SendRequest` + `MessageParcel` 全路径 |
| **不覆盖** | 函数指针等**不可跨进程**类型（见 **`ipcarch.md` §5.3**）；**不替代** IDL 生成代码的契约测试 |

---

## 2. 环境与前置条件

| 项 | 要求 |
|----|------|
| 源码根 | 存在 **`build.sh`** |
| 编译产物 | **`ipc_demo_server`**、**`ipc_demo_client`**（见下节路径） |
| 设备 | **`hdc list targets`** 非空；与 **`OHIPC_HDC_TARGET`** 或 **`-t`** 一致 |
| 部署 | 二进制推至 **`/data/local/tmp/`** 且 **`chmod 755`**（**`ohipc.py test` 默认会 push**） |
| 服务端 | 后台启动 **`ipc_demo_server`**，日志 **`/data/local/tmp/ipc_srv.log`** 含 **`registered, JoinWorkThread`** |

**典型产物路径（`product_name=rk3568`）**：

```text
out/rk3568/communication/ipc_example_service/ipc_demo_server
out/rk3568/communication/ipc_example_service/ipc_demo_client
```

---

## 3. 跨进程用例总览

### 3.1 基线流程（兼容原 demo）

| 步骤 | 客户端日志特征 | 说明 |
|------|----------------|------|
| 注册 | `registered session=<正整数>` | `RegisterClient` + 双 Binder |
| 字符串 | `SendString ret=0` | `string16` |
| 结构体 | `PushStruct ret=0`；`PullStruct ret=0 A=10 B=20` | `SharedState` 四字段 |
| 远端对象 | `CallDemoObjectMagic ret=0 magic=0x50435049` | `IRemoteObject` 回传调用 |
| 回调 | `ServerUpdateStruct ret=0 notifyCount=1`；`last notify: ... B=25 ...` | 服务端改状态 + `ClientEventStub` |
| 会话统计 | `GetClientCount ret=0 count≥1`；`GetPeerList ret=0` | 多客户端场景下 count/列表语义见实现 |

### 3.2 扩展类型与边界（`ECHO_*` 事务）

| 客户端标签 | 事务方向 | Parcel / MessageParcel 能力 | 边界或断言要点 |
|------------|----------|------------------------------|----------------|
| `UT_TYPE_SCALARS ok` | `ECHO_ALL_SCALARS` | `bool` / 整型族 / `float` / `double` | 与 `AllScalarsPack` 极值往返一致 |
| `UT_TYPE_STRING16 ok` | `ECHO_STRING16_EDGES` | `WriteString16` | **空串** + **≥3000** `char16_t` |
| `UT_BOUND_EMPTY_INT32VEC ok` | `ECHO_INT32_VECTOR` | `WriteInt32Vector` | 空向量，sum=0 |
| `UT_TYPE_INT32VEC_SMALL ok` | 同上 | 同上 | `{1,2,3}` → sum=6 |
| `UT_BOUND_INT32VEC_512 ok` | 同上 | 同上 | 512 元 `i%7`，与服务器求和一致 |
| `UT_TYPE_STRINGVEC ok` | `ECHO_STRING_VECTOR` | `WriteStringVector` | 拼接 `a;bb;ccc` |
| `UT_BOUND_BUFFER_1BYTE ok` | `ECHO_BYTE_BUFFER` | `WriteUint32` + `WriteBuffer` | 单字节 XOR |
| `UT_TYPE_BUFFER_512_XOR ok` | 同上 | 同上 | 256/512 字节模式 XOR |
| `UT_TYPE_FD ok` | `ECHO_FD_ONE_BYTE` | `WriteFileDescriptor` | `pipe` 写入 **0xAB**，对端读出 |
| `UT_TYPE_PARCELABLE ok` | `ECHO_PARCELABLE` | `WriteParcelable` / `ReadParcelable` | `DemoBoxParcelable` 宽高翻倍 |
| `UT_TYPE_ASHMEM ok` | `ECHO_ASHMEM_MAGIC` | `WriteAshmem` / `ReadAshmem` | **`ASHMEM_TEST_MAGIC`** 映射一致 |

### 3.3 错误路径

| 标签 | 行为 | 期望 |
|------|------|------|
| `UT_ERR_BAD_SESSION ok` | `PullStruct` + **伪造 session**（如 99999） | 业务状态 **`ERR_INVALID_DATA`**（仅回状态，不读结构体字段） |
| `UT_ERR_LOCAL_AFTER_UNREG ok` | `UnregisterClient` 后调用 `SendString` | 代理层 **`session_` 无效** → 返回 **`-1`**（未发起 RPC） |

### 3.4 性能（粗测）

| 日志行 | 含义 |
|--------|------|
| `PERF_echo_scalars loops=2000 us=<整数>` | 同进程客户端内 **2000 次** `EchoAllScalars` 总耗时（微秒级，受调度/Binder 影响） |

### 3.5 并发

| 日志行 | 含义 |
|--------|------|
| `CONC_echo_scalars threads=6 ops=480 fails=0` | **6 线程 × 80 次** `EchoAllScalars`，`fails` 必须为 **0** |
| `UT_CONC_ECHO ok` | 与上一行结论一致 |

### 3.6 总闸

| 输出 | 含义 |
|------|------|
| **`SUMMARY_UT ALL_OK`** | 上述自测均通过 |
| **`SUMMARY_UT FAIL`** | 任一项失败；**`ipc_demo_client` 退出码非 0** |

---

## 4. 与进程内测试的关系

| 类型 | 目标 | 路径 / 命令 |
|------|------|-------------|
| **进程内（Parcel 对称）** | 不启 SA、不经过 Binder，验证 **`c_utils::Parcel`** 与 **`DemoBoxParcelable`** 序列化 | GN 目标 **`ipc_demo_parcel_unittest`**；产物见 **`SKILL.md`** |
| **跨进程（本报告）** | 验证 **Stub/Proxy、内核事务、FD/Ashmem** 等 | **`ohipc.py test`** 等 |

二者互补：**进程内**保证布局读写正确；**跨进程**保证 Invoker/驱动与权限路径正确。

---

## 5. 自动化命令与退出码（`ohipc.py`）

| 子命令 | 作用 |
|--------|------|
| `test` | 可选 push → 起服务端 → 跑客户端 → 校验 **`ipc_srv.log`** + 全文正则（含 **`SUMMARY_UT ALL_OK`**） |
| `test-concurrent` | 双客户端重叠；两路日志均需通过同一套正则 |
| `perf` | 多次完整客户端冷跑耗时（侧重大循环 + hdc） |
| `test-parcel` | push（可选）后在设备上 **`cd /data/local/tmp`** 再执行 GTest（避免默认 cwd 不可写导致 **`Unable to open *.xml`**） |

**`test` / `test-concurrent` 相关退出码**：见 **`SKILL.md` §6.1**；**`test-parcel`**：**退出码 0**=GTest 汇总 **`[  PASSED  ]`** 且无 **`[  FAILED  ]`**；**6**=失败或输出异常（见脚本实现）。

---

## 6. 示例：一次通过的客户端输出（节选）

```text
registered session=1
SendString ret=0
...
GetPeerList ret=0 total=1;
UT_TYPE_SCALARS ok
...
UT_ERR_LOCAL_AFTER_UNREG ok
SUMMARY_UT ALL_OK
ipc_demo_client: done, exiting (server should see death if no unregister)
```

---

## 7. 修订记录

| 日期 | 说明 |
|------|------|
| 2026-04 | 初版：对齐 `ECHO_*`、`UT_*`、`PERF`/`CONC`、与 `ipc_demo_parcel_unittest` 分工 |

*若源码中事务码或日志格式变更，请同步更新 **`ohipc.py`** 中 **`_parse_client_success`** 与本报告表格。*
