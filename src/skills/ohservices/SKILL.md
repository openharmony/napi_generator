---
name: ohservices
description: "OpenHarmony SystemAbility 从创建、编译、部署到运行与 HiDumper 的完整流程。提供 sampletest（SA ID 9009）样例、全部修改清单与 HiDumper 问题点/调试方法汇总、白名单/产品/高权限/SELinux 配置、build.sh 编译、init/hilog 配置。ohsa.py 固化：build/device/all、device-files、hilog-disk、dmesg、hidumper、diag（多设备 -t/OHSA_HDC_TARGET）。配套 saguide.md 全流程。"
author: "Created by user"
version: "2.1.0"
---

# OpenHarmony SystemAbility 样例服务（sampletest）完整流程

本技能覆盖：**创建 SystemAbility → 编译与集成（含错误修复）→ 部署与运行确认 → 日志查看（hilog/dmesg）→ HiDumper 接口适配** 全流程能力与问题解法。

## 流程总览

| 阶段 | 内容 |
|------|------|
| 创建 | SA ID/进程名规划、**bundle.json**、目录结构、sa_profile、etc/init、server 代码（含 Dump） |
| 集成 | 白名单 → 产品配置 → 高权限白名单 → init 加载 /etc/init → SELinux（secon + type + init allow + *.te + service_contexts + domain_baseline） |
| 编译 | build.sh、编译错误（ioctl→allowxperm、sadomain→domain_baseline）与修复、**打包校验/startup_guard 提示**、验证产物 |
| 部署 | 烧录镜像、重启 |
| 运行确认 | ps、hilog、**Publish 成功/失败日志**、ohsa.py device |
| 日志 | hilog 实时/落盘、dmesg 查 init/execv/SELinux、init.cfg hilog 命令、hilog.para 参数 |
| HiDumper | hidumper -ls / -s、Dump()、**samgr get**；若仍失败再查 **binder/call** 类 AVC |

---

## 与 saguide.md 对照：易遗漏环节（流程补缺）

相对 **saguide.md** 的线性流程，本技能原文中曾偏弱或未单独成节的点如下，已在上表与下文各节补全：

| 环节 | 说明 |
|------|------|
| **bundle.json** | 部件的 `component.build.service_group` 必须列出 sa_profile、server so、init cfg 等 GN 目标，否则仅有白名单/产品配置仍可能编不进预期产物。 |
| **SA ID 与全局头文件** | 若希望全仓其它模块用统一宏引用 SA ID，可在 `foundation/systemabilitymgr/samgr/.../system_ability_definition.h` 增加枚举；**样例亦可仅用** `sampletest_ability_id.h` 的 `#define SAMPLE_TEST_SA_ID 9009`，但需自行保证与 profile/SELinux **不与其他 SA 冲突**。 |
| **sa_profile 中 distributed** | 建议显式 `"distributed": false`（与 `Publish`/`AddSystemAbility` 的 `isDistributed` 一致），避免与 samgr 校验不一致。 |
| **Publish 是否成功** | 进程在 ≠ 已注册到 samgr；需在 hilog 中确认 `Sampletest started` 或 `Publish failed`（见「设备上确认」）。 |
| **编译收尾 startup_guard** | 可能出现 `sampletest is not in start cmd list` 等 WARNING；多为「独立 cfg 未写进主 init.cfg 的 start 列表」类规则提示，**若 build.sh 仍判成功**可按产品策略忽略或按 [startup_guard README](https://gitee.com/openharmony/developtools_integration_verification/tree/master/tools/startup_guard) 调整。 |
| **HiDumper 除 get 外** | `allow hidumper_service sa_xxx:samgr_class { get }` 通过后，若 Dump 仍失败，在落盘/dmesg 中查 **binder `call`** 等是否仍有 `avc: denied`（hidumper_service → 业务域）。 |
| **镜像产物路径** | 32/64 位产品可能只有 `lib` 或 `lib64`，验证时用 `ohsa.py build` 或两处都查。 |

更偏「步骤清单」的叙述见同目录 **saguide.md**；本文件侧重 **配置细节、命令、问题汇总**。

---

## 功能描述

- **SA ID**：9009
- **进程名**：sampletest
- **位置**：`foundation/communication/sampletest_service`

包含：sa_profile、etc/init、框架代码（含 **Dump** 实现供 HiDumper 使用）、以及本技能文档中的配置与排查方法。

---

## 目录结构

```
foundation/communication/sampletest_service/
├── bundle.json
├── sa_profile/
│   ├── BUILD.gn
│   └── 9009.json                  # process, name=9009, libpath, run-on-create, dump_level
└── services/sampletest/
    ├── BUILD.gn
    ├── etc/init/
    │   ├── BUILD.gn
    │   └── sampletest.cfg         # start sampletest, path=sa_main+profile, uid/gid, secon
    └── server/
        ├── BUILD.gn
        ├── include/
        │   ├── isampletest.h
        │   ├── sampletest_stub.h
        │   ├── sampletest_proxy.h
        │   ├── sampletest.h       # 含 Dump() 声明
        │   └── sampletest_ability_id.h
        └── src/
            ├── sampletest.cpp     # OnStart/OnStop, Ping, Dump（HiDumper）
            ├── sampletest_stub.cpp
            └── sampletest_proxy.cpp
```

---

## 配置说明

### bundle.json（部件入口）

- **component.name**：与 `indep_component_whitelist.json`、产品 `component` 字段一致（如 `sampletest_service`）。
- **component.subsystem**：与产品 json 中子系统一致（如 `communication`）。
- **component.build.service_group**：必须包含 sa_profile、共享库、init cfg 等目标的 GN 标签（样例见仓库内 `foundation/communication/sampletest_service/bundle.json`）。漏写会导致部件未编出对应 so/cfg。

### SA ID 声明（二选一或并用）

- **推荐（样例做法）**：在 `sampletest_ability_id.h` 中 `#define SAMPLE_TEST_SA_ID 9009`，与 `REGISTER_SYSTEM_ABILITY_BY_ID`、profile、`service_contexts` 一致。
- **全仓统一枚举（可选）**：在 `system_ability_definition.h` 增加正式枚举/宏，便于其他模块 `#include`；注意与官方 ID **不冲突**。

### sa_profile/9009.json

- **process**：sampletest（与 cfg 中 service name 一致）
- **name**：9009（与代码 SAMPLE_TEST_SA_ID 一致）
- **libpath**：libsampletest_server.z.so
- **run-on-create**：true
- **distributed**：建议 `false`（与默认 Publish 的 non-distributed 一致）
- **dump_level**：1（供框架/HiDumper 使用）

### etc/init/sampletest.cfg

- **jobs**：post-fs-data 阶段 `start sampletest`
- **services**：name=sampletest，path=`["/system/bin/sa_main", "/system/profile/sampletest.json"]`，uid=system，gid=[system, shell]，**secon**=`u:r:sampletest_service:s0`（必配，否则 SELinux 拒绝 execv）

---

## 从创建到部署：完整集成步骤

### 第一步：加入部件白名单

- **文件**：`build/indep_component_whitelist.json`
- **操作**：在某一 `component_name` 数组中增加 `"sampletest_service"`。

### 第二步：加入产品配置

- **文件**：如 `productdefine/common/inherit/rich.json`
- **位置**：`"subsystem": "communication"` 的 `components` 数组。
- **操作**：增加 `{ "component": "sampletest_service", "features": [] }`。

### 第三步：高权限进程白名单（uid 为 system/root 时必做）

- **文件**：按产品，如 rk3568 为 `vendor/hihope/rk3568/security_config/high_privilege_process_list.json`。
- **操作**：在 `high_privilege_process_list` 中增加与 cfg 一致的项，例如：
  ```json
  { "name": "sampletest", "uid": "system", "gid": ["system", "shell"] }
  ```
- **否则**：打包阶段 `process_field_validate.py` 报错 “some services are not authenticated”。

### 第四步：init 加载 /etc/init/*.cfg（若产品未加载）

- **现象**：cfg 在 `/system/etc/init/` 有，但 init 只读 `/etc` 下直接子文件，不读 `/etc/init/`。
- **修改**：`base/startup/init/services/init/init_config.c` 的 `ReadConfig()` 的 **else** 分支中，在 `ReadFileInDir("/etc", ".cfg", ...)` 之后增加：
  ```c
  ReadFileInDir("/etc/init", ".cfg", ParseInitCfg, NULL);
  ```
- **然后**：重新编译并烧录镜像。

### 第五步：SELinux 策略（避免 execv errno 13 / avc denied）

当 **dmesg** 出现 `ServiceStart starting:sampletest`、`failed to execv 0 13 sampletest`、`Please set secon field` 或 `avc: denied { transition } ... limit_domain` 时，需完成：

1. **sampletest.cfg** 的 service 中增加：`"secon" : "u:r:sampletest_service:s0"`。
2. **type.te**（`base/security/selinux_adapter/sepolicy/base/public/type.te`）：增加 `type sampletest_service, sadomain, domain;`。
3. **init.te**（`ohos_policy/startup/init/system/init.te`）：增加 `allow init sampletest_service:process { rlimitinh siginh transition };`。
4. **sampletest_service.te**（新建，如 `ohos_policy/communication/sampletest/system/sampletest_service.te`）：至少包含 samain_exec、samgr binder、sa_sampletest_server samgr_class add、param/data_log 等；**data_log:file 的 ioctl 必须用 allowxperm**，例如：
   - `allow sampletest_service data_log:file { ... };` 中不要写 ioctl；
   - 增加：`allowxperm sampletest_service data_log:file ioctl { 0x5413 };`
5. **service.te**（`base/public/service.te`）：增加 `type sa_sampletest_server, sa_service_attr;`。
6. **service_contexts**（`base/public/service_contexts`）：增加 `9009 u:object_r:sa_sampletest_server:s0`。
7. **domain_baseline.json**（`sepolicy/whitelist/flex/domain_baseline.json`）：在 `user.sadomain` 数组中增加 `"sampletest_service"`。

### 编译错误与修复

- **selinux_check 报 “allow … ioctl” 违规**：对 data_log:file 等，不能用裸 `allow ... ioctl`，需改为 `allow` 不含 ioctl + `allowxperm ... ioctl { 0x5413 }`（按需使用正确 ioctl 码）。
- **“Check sadomain baseline … failed”**：将新域（如 sampletest_service）加入 `domain_baseline.json` 的 `user.sadomain`。

---

## 编译镜像

### 命令

在源码根目录（含 `build.sh`）执行：

```bash
./build.sh --product-name rk3568
```

- 全量编译耗时长，可将 **timeout 设为 6 小时**（21600000 ms）等足够时间。
- 单编 SA 库：`./build.sh --product-name rk3568 --build-target sampletest_server`。

### 打包阶段校验（startup_guard 等）

- 收尾可能出现 **NO-Config-Cmds-In-Init** 等检查：例如 `sampletest is not in start cmd list`（独立 `/system/etc/init/*.cfg` 未出现在主 `init.cfg` 的 start 列表中）。
- **若最终仍打印 `build success`**：一般为 WARNING 或与其它 NOT ALLOWED 项并存，需按产品线要求处理；与「post-fs-data 里 start sampletest」的独立 cfg 并不矛盾。
- 需消除告警时：查阅 `developtools/integration_verification` 下 **startup_guard** 对应规则的 README。

### 验证产物

编译成功后确认以下存在（路径相对于 `out/rk3568/packages/phone/system/`）：

| 产物 | 路径 |
|------|------|
| SA 库 | system/lib/libsampletest_server.z.so（或 lib64） |
| SA profile | system/profile/sampletest.json |
| init 配置 | system/etc/init/sampletest.cfg |

```bash
ls out/rk3568/packages/phone/system/lib/libsampletest_server.z.so \
   out/rk3568/packages/phone/system/profile/sampletest.json \
   out/rk3568/packages/phone/system/etc/init/sampletest.cfg
```

---

## 设备上确认 sampletest 是否运行

### 进程

- 部分设备 **ps -ef** 显示为 `sa_main ... sampletest.json`，部分仅显示进程名 **sampletest**。两种均应视为“已拉起”。
  ```bash
  hdc shell "ps -ef"          # 查看是否有 sampletest 或 sa_main + sampletest.json
  hdc shell "ps -ef | grep -E 'sampletest|sa_main'"
  ```

### 日志（hilog）

- 服务 OnStart 等会打 HiLog，tag 为 Sampletest。
  ```bash
  hdc shell hilog | grep -i sampletest
  ```

### 确认是否已向 samgr 注册（Publish）

- **进程在跑 ≠ 已在 samgr 注册**。必须在 hilog（实时或 `/data/log/hilog` 落盘）中确认：
  - **`Sampletest started`**（或你自定义的成功日志）→ `Publish(this)` 成功，一般可与 hidumper `CheckSystemAbility` 联动排查。
  - **`Publish failed`** → 优先查 `AddSystemAbilityInner selinux`、`IsDistributedSa … no Profile`、profile 是否进镜像。
- 与 **saguide.md §5.3** 一致，建议新 SA 均在 OnStart 内打明确成功/失败日志。

### 本技能脚本 ohsa.py（能力固化）

脚本路径：`.claude/skills/ohservices/ohsa.py`，将技能中的**编译检查、设备进程、镜像内文件、落盘 hilog 诊断、dmesg、hidumper** 固化为子命令（与 SKILL 中排查命令一致）。

```bash
# 检查编译产物 + 设备（默认；exit 以编译产物为准）
python3 .claude/skills/ohservices/ohsa.py all

# 仅编译产物（out 默认 out/rk3568，可用 --product / --out）
python3 .claude/skills/ohservices/ohsa.py build

# 设备：进程 + 实时 hilog（可加 --no-hilog；多设备用 -t SERIAL 或 OHSA_HDC_TARGET）
python3 .claude/skills/ohservices/ohsa.py device

# 设备上 /system 下 cfg、profile、so 是否存在（对应「镜像内文件」排查）
python3 .claude/skills/ohservices/ohsa.py device-files

# 落盘 hilog（/data/log/hilog/*.gz）grep：Publish / selinux / hidumper / avc 等关键模式
python3 .claude/skills/ohservices/ohsa.py hilog-disk

# dmesg 中与 init、execv、secon、avc 相关摘要
python3 .claude/skills/ohservices/ohsa.py dmesg

# 在设备上执行 hidumper -s 9009（可用 --hidumper-name Sampletest）
python3 .claude/skills/ohservices/ohsa.py hidumper

# 综合诊断：device-files + 进程 + hilog-disk + dmesg（逐项打印，exit 0）
python3 .claude/skills/ohservices/ohsa.py diag
```

常用参数：`--hilog-lines N` 控制展示行数；`-t <序列号>` 指定 hdc 设备。

**说明**：`device` 检查通过 = 进程或实时 hilog 中有 sampletest 迹象；`hilog-disk` 无匹配可能表示未开落盘或无历史日志，不代表 SA 未运行。

### 手动检查命令汇总

```bash
# 进程（两种形式任一即可）
hdc shell "ps -ef | grep -E 'sampletest|sa_main'"

# hilog
hdc shell "hilog | grep -i sampletest"

# dmesg（init/execv/SELinux 失败时）
hdc shell "dmesg | grep -iE 'sampletest|ServiceStart|execv|secon'"

# 镜像内文件
hdc shell "ls -la /system/etc/init/sampletest.cfg /system/profile/sampletest.json /system/lib/libsampletest_server.z.so"
```

### 若未运行：排查顺序

1. **镜像内文件**：`hdc shell "ls -la /system/etc/init/sampletest.cfg /system/profile/sampletest.json /system/lib/libsampletest_server.z.so"`，缺则未烧录或未包含。
2. **init 未加载 /etc/init**：按上文第四步修改 `init_config.c` 并重新编镜像。
3. **execv 失败 / SELinux**：设备上执行 `hdc shell "dmesg | grep -iE 'sampletest|ServiceStart|execv|secon'"`，按上文第五步补全 secon 与 SELinux 策略。
4. **手动拉起**（仅当 init 已注册该服务时有效）：`hdc shell "begetctl start_service sampletest"`。
5. **其他**：看 hilog 报错、或 `begetctl setloglevel 0` 后抓 init 日志。

---

## 日志查看：hilog 与 dmesg

### hilog（用户态日志）

- **实时**：`hdc shell hilog`，可加 `| grep -i sampletest` 过滤。
- **落盘路径**：设备上 `/data/log/hilog/`，可拉取到主机用 grep 查：
  ```bash
  hdc shell "ls /data/log/hilog"
  hdc pull /data/log/hilog/.  ./hilog_dump
  ```
- **控制**：可通过 **hilog.para** 和 **init.cfg 中的 hilog 相关 exec** 配置（见下节）。

### dmesg（内核/init 日志）

- **用途**：查看 init 是否启动服务、execv 是否失败、SELinux 是否拒绝。
- **命令**：
  ```bash
  hdc shell "dmesg | grep -iE 'sampletest|ServiceStart|execv|secon'"
  hdc shell "dmesg | grep -i init | tail -80"
  ```
- **典型有用输出**：`ServiceStart starting:sampletest`、`failed to execv 0 13 sampletest`、`Please set secon field`、`avc: denied { transition }` 等，对应“未配置 secon / SELinux 策略”的排查。

---

## hilog 落盘与参数配置

### init.cfg 中 hilog 相关配置（示例）

在 `base/startup/init/services/etc/init.cfg` 的 post-fs-data 等阶段，常见 hilog 相关命令如下（仅作参考，实际以仓库为准）：

```text
"exec /system/bin/hilog -Q pidoff",
"exec /system/bin/hilog -b D",
"exec /system/bin/hilog -p off",
"exec /system/bin/hilog -w start -n 1000 -l 10M",
"exec /system/bin/hilog -w start -t kmsg"
```

- **-Q pidoff**：按需关闭按 pid 过滤等。
- **-b D**：缓冲区/级别相关。
- **-p off**：关闭隐私过滤等。
- **-w start -n 1000 -l 10M**：落盘，文件数、单文件大小等。
- **-w start -t kmsg**：落盘 kmsg。

修改 init.cfg 后需重新编译并烧录镜像。

### hilog.para 参数（示例）

文件：`base/hiviewdfx/hilog/services/hilogd/etc/hilog.para`。与“落盘、流控、缓冲、可打日志级别”等相关，例如（仅示例，以仓库为准）：

```ini
hilog.private.on=true
hilog.debug.on=true
persist.sys.hilog.kmsg.on=true
persist.sys.hilog.debug.on=true
hilog.flowctrl.proc.on=false
hilog.flowctrl.domain.on=false

persist.sys.hilog.loggable.global=I
hilog.buffersize.global=1262144
```

- **hilog.private.on / debug.on**：私有/调试日志开关。
- **persist.sys.hilog.kmsg.on / debug.on**：持久化项。
- **flowctrl**：流控（关闭可减少丢日志，便于调试）。
- **loggable.global**：全局可打日志级别。
- **buffersize.global**：全局缓冲区大小。

修改后需按产品方式生效（部分需重编并烧录）。

---

## HiDumper 接口

### 用 hidumper 查看 sampletest

- **列 SA**：`hidumper -ls`，列表中应有 9009（或 sampletest）。
- **拉取 dump**：`hidumper -s 9009`，会调用 sampletest 的 **Dump(fd, args)**，输出到 hidumper 结果。
- **带参数**：`hidumper -s 9009 -a "-h"`，可输出 sampletest 自实现的帮助。

### sampletest 的 Dump 实现

- **接口**：`IRemoteObject::Dump(int fd, const std::vector<std::u16string> &args)`；未实现时走基类默认（不写内容）。
- **本样例**：在 `sampletest.h` 中声明 `int Dump(int fd, const std::vector<std::u16string> &args) override;`，在 `sampletest.cpp` 中实现：
  - 无参或默认：向 fd 写入 SA ID 与 “Running” 等简要信息。
  - 参数为 `-h`/`--help`：写入简短帮助说明。
- **实现要点**：使用 `write(fd, ...)` + `fsync(fd)` 或 `SaveStringToFd` 等向 fd 写入；返回 `ERR_OK` 表示成功。

### hidumper -s Sampletest / -s 9009 仍报错（no such system ability）时的排查

`hidumper` 通过 samgr 的 `CheckSystemAbility(9009)` 取 SA；若返回空，DumperService 会打 **no such system ability**。原因分两类，需在落盘 hilog 里区分：

#### A. SA 未注册（Publish / profile 问题）

1. **确认 profile**：`ls -la /system/profile/sampletest.json`，内容含 `"name": 9009`、`"process": "sampletest"`。
2. **samgr**：搜 `IsDistributedSa SA:9009 no Profile!`（profile 未进 samgr）。
3. **Publish**：搜 `AddSystemAbilityInner selinux permission denied` + 9009（**add** 被拒绝）；或 `Sampletest started` / `Publish failed`。

#### B. SA 已注册，但 hidumper 被 SELinux 拦截（常见）

落盘日志若同时出现：

- `avc: denied { get } for service=9009 ... scontext=u:r:hidumper_service:s0 tcontext=u:object_r:sa_sampletest_server:s0 tclass=samgr_class`
- `GetServiceCheck ... SA:9009,ret:fail`
- `CheckSystemAbilityInner selinux permission denied! SA:9009,callSid:u:r:hidumper_service:s0`

说明 **sampletest 已成功 add 到 samgr**，但 **hidumper_service 没有对该 SA 类型的 `samgr_class { get }` 权限**，`CheckSystemAbility` 被拦后表现为 “no such system ability”。

**修复**：在 `sampletest_service.te` 中增加（与 sensors、selection_service 等模块对 hidumper 的写法一致）：

```selinux
allow hidumper_service sa_sampletest_server:samgr_class { get };
```

重编镜像并烧录后，`hidumper -s 9009` / `-s Sampletest` 应能取到 binder 并调用 `Dump()`。

#### C. get 已通过但 Dump 仍无输出或失败

- 若已无 `CheckSystemAbilityInner selinux permission denied`，但仍无 dump 内容或事务失败，在 **hilog/dmesg** 中搜 `avc: denied` 是否与 **binder `call`**、`hidumper_service` → `sampletest_service`（或你的业务域）相关。
- 按需补 SELinux：`allow hidumper_service sampletest_service:binder { call };`（具体以 AVC 为准，不同版本策略类名可能略有差异）。

#### 小结

- 先 grep 落盘 hilog：`CheckSystemAbilityInner selinux` + `9009`、`avc: denied { get }`、`AddSystemAbilityInner`、`Publish failed`、`Sampletest started`。  
- **get 拒绝** → 补 hidumper 对 `sa_sampletest_server` 的 `get`；**add 拒绝** → 补 sampletest 对 `sa_sampletest_server` 的 `add` 等（见第五步）。

---

## 接口说明

- **ISampletest**：`Ping(int32_t value)` 当前样例实现为**原样返回** `value`（以 `sampletest.cpp` 为准）。
- **Dump**：供 HiDumper 调用，支持无参状态输出与 `-h` 帮助。
- 客户端通过 `GetSystemAbility(9009)` 获取服务，经 SampletestProxy 调用 Ping()。

---

## sampletest 相关修改与 HiDumper 问题点/调试方法汇总

以下为 sampletest（SA 9009）从创建到通过 hidumper 查看全过程中涉及的**所有修改**以及**未能通过 hidumper 查看时的问题点与调试方法**，便于复现与排查。

### 一、涉及修改的文件清单

| 类别 | 文件路径 | 修改内容 |
|------|----------|----------|
| 构建白名单 | `build/indep_component_whitelist.json` | 在对应 `component_name` 数组中增加 `"sampletest_service"` |
| 产品配置 | `productdefine/common/inherit/rich.json` | communication 子系统下增加 `{ "component": "sampletest_service", "features": [] }` |
| 高权限白名单 | `vendor/hihope/rk3568/security_config/high_privilege_process_list.json` | 增加 `{ "name": "sampletest", "uid": "system", "gid": ["system", "shell"] }` |
| init 加载 | `base/startup/init/services/init/init_config.c` | `ReadConfig()` 的 else 分支中增加 `ReadFileInDir("/etc/init", ".cfg", ParseInitCfg, NULL);` |
| SELinux type | `base/security/selinux_adapter/sepolicy/base/public/type.te` | 增加 `type sampletest_service, sadomain, domain;` |
| SELinux init | `base/security/selinux_adapter/sepolicy/ohos_policy/startup/init/system/init.te` | 增加 `allow init sampletest_service:process { rlimitinh siginh transition };` |
| SELinux SA 策略 | `base/security/selinux_adapter/sepolicy/ohos_policy/communication/sampletest/system/sampletest_service.te` | 新建：samgr add、param/data_log、**allowxperm ioctl**、**allow hidumper_service sa_sampletest_server:samgr_class { get }** |
| SELinux service 类型 | `base/security/selinux_adapter/sepolicy/base/public/service.te` | 增加 `type sa_sampletest_server, sa_service_attr;` |
| SELinux 上下文 | `base/security/selinux_adapter/sepolicy/base/public/service_contexts` | 增加 `9009 u:object_r:sa_sampletest_server:s0` |
| SELinux 基线 | `base/security/selinux_adapter/sepolicy/whitelist/flex/domain_baseline.json` | `user.sadomain` 数组中增加 `"sampletest_service"` |
| HiDumper 名称映射 | `base/hiviewdfx/hidumper/frameworks/native/dump_utils.cpp` | `saNameMap_` 中增加 `{ 9009, "Sampletest" }`，便于 `hidumper -s Sampletest` |
| SA 代码 | `foundation/communication/sampletest_service/` | 新建整棵目录：sa_profile、etc/init、server（含 sampletest.cpp 中 OnStart/Publish 日志、Dump 实现） |

### 二、编译与打包阶段遇到的问题与修复

| 现象 | 原因 | 修复 |
|------|------|------|
| BUILD.gn 报 “Assignment had no effect” | 定义了未使用的变量 | 删除无用变量（如 SUBSYSTEM_DIR、SAMPLETEST_ROOT） |
| process_field_validate.py 报 “some services are not authenticated” | uid=system 的 sampletest 未在高权限白名单 | 在对应产品的 high_privilege_process_list.json 中增加 sampletest 项 |
| selinux_check 报 allow … ioctl 违规 | data_log:file 的 ioctl 需用扩展权限 | 用 `allow` 不含 ioctl + `allowxperm sampletest_service data_log:file ioctl { 0x5413 };` |
| “Check sadomain baseline … failed” | 新域未加入基线 | 在 domain_baseline.json 的 user.sadomain 中增加 "sampletest_service" |

### 三、设备上 SA 未运行时的排查与修复

| 现象 | 排查方法 | 修复 |
|------|----------|------|
| 进程不存在 | `ps -ef \| grep -E 'sampletest\|sa_main'`；`ohsa.py device` | 见下栏 |
| init 未加载 cfg | 确认 /system/etc/init/sampletest.cfg 存在但服务未启动 | 修改 init_config.c 增加 ReadFileInDir("/etc/init", ".cfg", ...)，重编烧录 |
| execv 失败 errno 13 / dmesg 有 “Please set secon” 或 avc denied transition | `dmesg \| grep -iE 'sampletest\|ServiceStart\|execv\|secon'` | 在 sampletest.cfg 增加 secon；补全 type.te、init.te、sampletest_service.te、service.te、service_contexts、domain_baseline.json |

### 四、HiDumper 报 “no such system ability” 的问题点与调试方法

| 情况 | 落盘 hilog 关键信息 | 根因 | 修复/调试方法 |
|------|--------------------|------|----------------|
| SA 未注册 | `IsDistributedSa SA:9009 no Profile!`；`Publish failed`；`AddSystemAbilityInner selinux permission denied` + 9009 | profile 未加载或 Publish 被拒（add 权限） | 确认 /system/profile/sampletest.json 存在且含 9009；补 sampletest_service 对 sa_sampletest_server 的 add 及 samgr 等策略 |
| SA 已注册，hidumper 被拒 | `avc: denied { get } ... scontext=u:r:hidumper_service:s0 tcontext=u:object_r:sa_sampletest_server:s0 tclass=samgr_class`；`GetServiceCheck ... SA:9009,ret:fail`；`CheckSystemAbilityInner selinux permission denied! SA:9009,callSid:u:r:hidumper_service:s0` | hidumper_service 缺少对 sa_sampletest_server 的 samgr_class get 权限 | 在 sampletest_service.te 中增加：`allow hidumper_service sa_sampletest_server:samgr_class { get };`，重编烧录 |

**落盘日志排查命令（设备上或拉取到主机后）：**

```bash
# 设备上直接搜 gz
hdc shell "zcat /data/log/hilog/hilog.*.gz 2>/dev/null | grep -E 'Sampletest|9009|DumperService|Publish failed|Sampletest started|no such system ability|IsDistributedSa|AddSystemAbilityInner|selinux permission denied|avc: denied'"

# 或拉取后本地搜
hdc pull /data/log/hilog/.  ./hilog_dump
zcat ./hilog_dump/hilog.*.gz | grep -E '9009|Sampletest|Publish|GetServiceCheck|CheckSystemAbilityInner|avc: denied'
```

### 五、调试方法速查

- **确认进程**：`hdc shell "ps -ef | grep -E 'sampletest|sa_main'"` 或 `python3 .claude/skills/ohservices/ohsa.py device`
- **确认 Publish 结果**：hilog 中搜 `Sampletest started`（成功）或 `Publish failed`（失败）
- **确认 init/execv/SELinux**：`hdc shell "dmesg | grep -iE 'sampletest|ServiceStart|execv|secon|avc'"`
- **确认 hidumper 能否取到 SA**：先执行 `hidumper -s 9009`，再在落盘 hilog 中搜 `GetServiceCheck`、`CheckSystemAbilityInner`、`avc: denied { get }` 判断是 add 问题还是 get 问题。

---

## 参考文档

- SystemAbility 设计与实现：`foundation/systemabilitymgr/safwk/SystemAbility_Design_And_Sample_zh.md`
- 本技能目录下 **saguide.md**：创建、编译、调试、验证一个 SystemAbility 的全流程说明。
- 本技能目录下可保留该文档副本便于查阅。
