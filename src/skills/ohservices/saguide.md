# OpenHarmony SystemAbility 开发：零基础手把手全流程（以 sampletest / SA 9009 为例）

> **本文目标**：假设你**从未做过 SA**，只要按章节顺序理解名词、改对每一处配置、编译、烧录、用日志排错，就能**自己新增或跑通一个 SystemAbility**（含 **samgr 注册**、**init 拉起**、**SELinux**、**HiDumper**）。  
> **更短速查**：配置字段与命令汇总见同目录 **`SKILL.md`**；常用命令封装见 **`ohsa.py`**。

---

## 0. 读前须知

### 0.1 你要操作的是什么？

- 一台能**全量编译**同一套 **OpenHarmony 标准系统**源码的环境（下文以 **`rk3568`** 产品与 **`./build.sh --product-name rk3568`** 为例）。
- 可选：已烧录该镜像的开发板，PC 上 **`hdc list targets`** 能看到设备。
- 你会改：**`.cpp` / `.h` / `.gn` / `.json` / `.cfg` / `.te`** 等；会在**源码根**（能看到 **`build.sh`**）执行命令。

### 0.2 你不需要预先精通什么？

- 不要求会先写复杂 IPC：样例走 **SystemAbility 框架 + 自动生成的 stub/proxy**。
- 不要求会 SELinux 策略语言：可按本文 **「阶段 12」路径表** 复制 sampletest 再全局替换名字。

### 0.3 路径约定

凡写 **`foundation/...`**、**`base/...`**、**`build/...`**、**`vendor/...`** 均相对于 **OpenHarmony 源码根**。

### 0.4 文档与脚本索引

| 资源 | 路径 |
|------|------|
| **本教程（零基础长文）** | `.claude/skills/ohservices/saguide.md` |
| 字段 / 踩坑 / 大表 | `.claude/skills/ohservices/SKILL.md` |
| 命令固化 | `.claude/skills/ohservices/ohsa.py` |
| 框架说明（官方） | `foundation/systemabilitymgr/safwk/SystemAbility_Design_And_Sample_zh.md` |

### 0.5 本仓库样例位置（可直接对照）

| 说明 | 路径 |
|------|------|
| 部件根 | `foundation/communication/sampletest_service/` |
| SA profile 源 JSON | `foundation/communication/sampletest_service/sa_profile/9009.json` |
| init 配置 | `foundation/communication/sampletest_service/services/sampletest/etc/init/sampletest.cfg` |
| 服务实现 | `foundation/communication/sampletest_service/services/sampletest/server/` |

---

## 1. 一句话 + 心智图

### 1.1 一句话

**SystemAbility（SA）** 是跑在**独立进程**（常由 **`/system/bin/sa_main` + profile json** 拉起）里的系统服务；启动时在 **`OnStart()`** 里 **`Publish(this)`** 向 **samgr** 注册；客户端通过 **SA ID**（如 **9009**）查找并 **binder 调用**。**profile** 告诉框架：这个进程里有哪些 SA、加载哪个 **`.so`**。

### 1.2 心智图（文字版）

```
init 读 *.cfg
  -> post-fs-data 里 start sampletest
      -> exec /system/bin/sa_main  /system/profile/sampletest.json
          -> 加载 libsampletest_server.z.so
              -> REGISTER_SYSTEM_ABILITY_BY_ID(..., 9009, ...)
                  -> OnStart() -> Publish(this) -> samgr 里出现 SA 9009
```

**常见误解**：**进程在跑 ≠ 已向 samgr 注册**。必须在 **hilog** 里看到 **`Sampletest started`** 或 **`Publish failed`**（见 **阶段 18.2**）。

---

## 2. 名词表

| 名词 | 含义 |
|------|------|
| **SA ID** | 整数能力号；全系统应唯一。样例 **9009**。 |
| **process（profile 内）** | 逻辑进程名；与 **init 里 service name**、**合并后的 profile 文件名**一致。样例 **`sampletest`** → 设备上 **`/system/profile/sampletest.json`**。 |
| **samgr** | System Ability Manager；负责 **Add/Get** SA。 |
| **sa_main** | 通用可执行入口，根据第二个参数（profile 路径）加载对应 **.so**。 |
| **Publish(this)** | 把当前 **SystemAbility** 实例注册到 samgr；失败常是 **profile 未加载**或 **SELinux `samgr_class { add }` 不足**。 |
| **secon** | init cfg 里服务的 SELinux 上下文，如 **`u:r:sampletest_service:s0`**；必须与策略里 **type** 一致。 |
| **sa_xxx_server** | **service_contexts** 里给**该 SA ID** 绑定的 **samgr 服务对象类型**；**`add`/`get`** 规则写在这个类型上。 |
| **sadomain** | SA 进程常见域基类；新进程域一般要 **`type foo, sadomain, domain`** 并写入 **domain_baseline.json** 的 **`user.sadomain`**。 |
| **deps_guard / startup_guard** | 全编收尾检查；**startup_guard** 里 **`not in start cmd list`** 等与「独立 cfg」并存时**仍可能 build success**，见 **阶段 16**。 |

---

## 3. 零基础：阶段总览（必须按顺序理解；新建服务时从阶段 1 做）

| 阶段 | 内容 |
|------|------|
| **1** | 取名字：SA ID、进程名、SELinux 域、samgr 类型、so 名 —— **一张表全局一致** |
| **2** | 目录与 **`bundle.json`**：**`service_group`** 必须列全 profile、so、init cfg |
| **3** | **`sa_profile/*.json`** + **`ohos_sa_profile` BUILD.gn（`part_name`）** |
| **4** | **`etc/init/*.cfg`**：`start`、**`path`**、**`uid`/`gid`**、**`secon`** |
| **5** | **server**：`REGISTER_SYSTEM_ABILITY_BY_ID`、`OnStart` 里 **Publish** + 成功/失败日志、可选 **Dump** |
| **6** | **`ohos_shared_library`** 的 **target 名**与 **profile 里 `libpath`** 一致 |
| **7** | **`build/indep_component_whitelist.json`** |
| **8** | **产品 `productdefine/...json`**：`component` + **`subsystem`** 与 bundle 一致 |
| **9** | **`parts.json` 自查**（部件是否进构建图） |
| **10** | **高权限进程白名单**（`uid` 为 **system** 时几乎必做） |
| **11** | **init 是否加载 `/etc/init/*.cfg`**（`init_config.c`） |
| **12** | **SELinux**：type、init transition、**`*.te`**、service.te、service_contexts、**domain_baseline** |
| **13** | （可选）**`system_ability_definition.h`**（全局 SA ID） |
| **14** | （可选）**HiDumper 名称映射**（**`dump_utils.cpp`**）；**binder call** 类 AVC 见 **阶段 12.3** |
| **15–19** | **编译**（**`--build-target`**）→ **startup_guard 说明** → **验证 out 产物** → **设备 ps/hilog/hidumper** → **有序排查脚本** |

---

## 阶段 1：取名字（写纸上，全局一致）

新建 **`myfoo`** 时建议先填表（**sampletest 列**为仓库已落地值，供对照）：

| 项 | sampletest（实拍） | 你自己（myfoo） |
|----|-------------------|-----------------|
| **部件 component.name**（白名单 / 产品 json） | `sampletest_service` | `myfoo_service` |
| **bundle subsystem** | `communication` | 与产品 json 里子系统块一致 |
| **SA ID（数字）** | `9009` | 选**未占用** ID |
| **init service name = profile 内 process** | `sampletest` | `myfoo` |
| **合并后 profile 路径（cfg 第二参数）** | `/system/profile/sampletest.json` | `/system/profile/myfoo.json` |
| **进程 SELinux 域 type** | `sampletest_service` | `myfoo_service` |
| **samgr 对象 type（service.te / contexts）** | `sa_sampletest_server` | `sa_myfoo_server` |
| **cfg 内 secon** | `u:r:sampletest_service:s0` | `u:r:myfoo_service:s0` |
| **服务端 so（profile libpath）** | `libsampletest_server.z.so` | `libmyfoo_server.z.so` |
| **GN 库 target 名** | `sampletest_server` | `myfoo_server` |
| **C++ 宏 / 头文件** | `SAMPLE_TEST_SA_ID` | 自定义，与 ID 一致 |

**常见翻车点**：

- **`path` 里 json 文件名**与 **process** 不一致 → **sa_main 找不到 profile**。
- **9009** 在 **`service_contexts` / 代码 / profile** 三处任一写错 → **注册或查询失败**。
- **`secon` 域名字**与 **`type.te`** 不一致 → **execv / transition AVC**。

---

## 阶段 2：目录结构（新建时照抄；学习时对照 sampletest）

```text
foundation/communication/<part_dir>/
├── bundle.json
├── sa_profile/
│   ├── BUILD.gn          # ohos_sa_profile(...)
│   └── <said>.json       # 如 9009.json；合并进镜像后对应 process 名的 json
└── services/<process_name>/
    ├── BUILD.gn          # 可聚合子目录
    ├── etc/init/
    │   ├── BUILD.gn      # ohos_prebuilt_etc -> system/etc/init/
    │   └── <process>.cfg
    └── server/
        ├── BUILD.gn      # ohos_shared_library("xxx_server")
        ├── include/
        │   ├── i*.h, *_stub.h, *_proxy.h
        │   ├── <service>.h        # 含 Dump 声明（若对接 HiDumper）
        │   └── <service>_ability_id.h
        └── src/
            ├── <service>.cpp
            ├── *_stub.cpp
            └── *_proxy.cpp
```

**说明**：**`sa_profile` 源文件**可叫 **`9009.json`**；安装到 **`/system/profile/`** 下的文件名由构建合并规则决定，样例里 **`process":"sampletest"`** 对应 **`sampletest.json`**，**init cfg 必须写这个最终路径**。

---

## 阶段 3：`bundle.json` —— 漏写一行就可能「部件进了产品但产物不全」

样例（节选 **`component.build.service_group`**）：

```json
"service_group": [
  "//foundation/communication/sampletest_service/sa_profile:communication_sampletest_service_sa_profile",
  "//foundation/communication/sampletest_service/services/sampletest/server:sampletest_server",
  "//foundation/communication/sampletest_service/services/sampletest/etc/init:sampletest_cfg"
]
```

**逐项检查**：

- **`component.name`**：必须等于 **`indep_component_whitelist.json`** 与 **产品 json** 里的 **`component`**。
- **`component.subsystem`**：必须等于 **产品 json** 里 **`"subsystem": "communication"`** 那一块的子系统名。
- **`deps.components`**：至少包含 **`hilog`、`ipc`、`samgr`、`safwk`** 等（以你代码 **`external_deps`** 为准）。
- **`service_group`**：**三个 GN 目标缺一不可** —— 缺 **profile** 则没有 **`/system/profile/sampletest.json`**；缺 **server** 则没有 **.so**；缺 **cfg** 则 **init 不会 start**。

**inner_kits**：若其它模块要在 GN 里引用你的头文件 / 库，需在 **`inner_kits`** 声明并在对方 **`deps`** 中引用；样例为空表示仅系统镜像内自包含。

---

## 阶段 4：`sa_profile/<said>.json`

样例 **`9009.json`**：

```json
{
    "process": "sampletest",
    "systemability": [
        {
            "name": 9009,
            "libpath": "libsampletest_server.z.so",
            "run-on-create": true,
            "distributed": false,
            "dump_level": 1
        }
    ]
}
```

**字段说明**：

| 字段 | 含义 |
|------|------|
| **process** | 与 **init cfg 的 service name** 相同；决定合并后的 **profile 文件名**（**`sampletest.json`**）。 |
| **name** | **SA ID**；与 **`sampletest_ability_id.h`**、**`service_contexts` 行首**一致。 |
| **libpath** | so **文件名**（带 `.z.so`）；必须与 **`ohos_shared_library` 安装名**一致。 |
| **run-on-create** | 通常为 **true**：进程起来即创建该 SA。 |
| **distributed** | 建议显式 **`false`**，与默认 **Publish** 行为一致，避免 samgr 校验歧义。 |
| **dump_level** | 供框架 / HiDumper 使用；**1** 为常见调试值。 |

**`sa_profile/BUILD.gn`**：`ohos_sa_profile` 的 **`part_name = "sampletest_service"`** 必须与 **`bundle.json` → `component.name`** 一致。

---

## 阶段 5：`etc/init/*.cfg`

样例 **`sampletest.cfg`**：

```json
{
    "jobs" : [{
            "name" : "post-fs-data",
            "cmds" : [
                "start sampletest"
            ]
        }
    ],
    "services" : [{
            "name" : "sampletest",
            "path" : ["/system/bin/sa_main", "/system/profile/sampletest.json"],
            "uid" : "system",
            "gid" : ["system", "shell"],
            "secon" : "u:r:sampletest_service:s0"
        }
    ]
}
```

**逐项说明**：

- **`jobs.cmds`**：**`start <name>`** 的 **`<name>`** 必须等于 **`services[].name`**。
- **`path[0]`**：固定为 **`/system/bin/sa_main`**（标准系统路径以你产品为准）。
- **`path[1]`**：**合并后的 profile**，必须是 **`/system/profile/<process>.json`**。
- **`uid` / `gid`**：若为 **`system`**，必须做 **阶段 10 高权限白名单**。
- **`secon`**：必须与 **`type.te`** 里声明的域匹配（**`u:r:sampletest_service:s0`** ↔ **`type sampletest_service`**）。

**`etc/init/BUILD.gn`**：`ohos_prebuilt_etc("sampletest_cfg")` 使用 **`relative_install_dir = "init"`**，安装结果为 **`/system/etc/init/sampletest.cfg`**。

---

## 阶段 6：server 代码要点

### 6.1 注册宏与 SA ID

```cpp
REGISTER_SYSTEM_ABILITY_BY_ID(Sampletest, SAMPLE_TEST_SA_ID, true);
```

**`SAMPLE_TEST_SA_ID`** 在 **`sampletest_ability_id.h`** 定义为 **9009**。

### 6.2 OnStart 与 Publish 日志（必做，便于排错）

```cpp
void Sampletest::OnStart()
{
    bool res = Publish(this);
    if (!res) {
        HiLog::Error(LABEL, "Publish failed");
        return;
    }
    HiLog::Info(LABEL, "Sampletest started");
}
```

### 6.3 HiDumper：`Dump` 实现要点

- 在头文件中 **`override`** 声明 **`Dump(int fd, const std::vector<std::u16string> &args)`**。
- 向 **`fd`** **`write` + `fsync`**；返回 **`ERR_OK`**。

### 6.4 `server/BUILD.gn` 与 profile 对齐

- **`ohos_shared_library("sampletest_server")`** 生成的安装名需与 **`libpath`** **`libsampletest_server.z.so`** 一致（由 GN 模板与产品配置决定；不要随意改 target 名而不改 profile）。
- **`part_name = "sampletest_service"`**、**`subsystem_name = "communication"`** 与部件一致。

---

## 阶段 7：构建白名单

**文件**：`build/indep_component_whitelist.json`

打开 **`build/indep_component_whitelist.json`**：根对象下有多组键（如 **`standard_system`**、**`mini_system`** 等），每组内有 **`"component_name": [ ... ]`** 数组。**将字符串加进与你产品类型对应的那一组**（标准手机类常见为含大量部件的那组；不确定时用 **`grep -n "sampletest_service" build/indep_component_whitelist.json`** 看样例落在哪一段，你的新部件放在**同结构**的数组里）。

**若漏做**：预加载 / 部件解析阶段可能**根本看不到**你的部件（与 HDF 的 whitelist 类似，表现为 **out 无产物**）。

---

## 阶段 8：产品定义 JSON

**本样例**在 **`productdefine/common/inherit/rich.json`** 的 **`"subsystem": "communication"`** 下 **`components`** 增加：

```json
{ "component": "sampletest_service", "features": [] }
```

**注意**：

- **`component`** 字符串与 **`bundle.json` → `component.name`** **逐字相同**。
- **`features`**：无 feature 开关时可为 **`[]`**；若有 **`bundle.json` features**，此处字符串必须与 bundle **完全一致**（与 howtohdf **阶段 12b** 同理）。
- 你的产品若**不继承 `rich.json`**，需在**实际 inherit 链**里找到 **communication**（或你的子系统）所在文件再添加（用 **`grep -R "sampletest_service" productdefine/`** 或 **`grep -R "\"communication\"" productdefine/common/inherit/`** 定位现网写法）。

---

## 阶段 9：`parts.json` 自查（部件是否进构建图）

全量或 **`gn gen`** 成功后：

```bash
grep -F "sampletest_service" out/preloader/rk3568/parts.json
```

**若无输出**：检查 **白名单**、**产品 json 是否包含该 component**、**bundle JSON 语法**、**产品名是否写错**（`out/preloader/<产品名>/`）。

---

## 阶段 10：高权限进程白名单（uid 为 system 时必做）

**文件（rk3568 示例）**：`vendor/hihope/rk3568/security_config/high_privilege_process_list.json`

在 **`high_privilege_process_list`** 中增加与 **cfg** 一致的一项：

```json
{ "name": "sampletest", "uid": "system", "gid": ["system", "shell"] }
```

**要点**：**`name`** 必须与 **init cfg 里 `services[].name`** 一致（**`sampletest`**），不是部件名 **`sampletest_service`**。

**若漏做**：打包阶段 **`process_field_validate.py`** 报 **“some services are not authenticated”**。

---

## 阶段 11：init 加载 `/system/etc/init/*.cfg`

部分产品 init 只读 **`/etc/*.cfg`**，不读 **`/etc/init/*.cfg`**。需在 **`base/startup/init/services/init/init_config.c`** 的 **`ReadConfig()`** 的 **else** 分支中，在原有 **`ReadFileInDir("/etc", ".cfg", ...)`** 之后增加：

```c
ReadFileInDir("/etc/init", ".cfg", ParseInitCfg, NULL);
```

**本仓库状态**：若已存在上述调用，**无需重复添加**。改完后需**重编镜像**。

---

## 阶段 12：SELinux（必做；否则 execv、transition、samgr 报错）

**准确路径以本表为准**（均为**源码根**相对路径；**sampletest 已落地**）：

| 顺序 | 文件路径 | 作用 |
|------|----------|------|
| 1 | `base/security/selinux_adapter/sepolicy/base/public/type.te` | `type sampletest_service, sadomain, domain;` |
| 2 | `base/security/selinux_adapter/sepolicy/ohos_policy/startup/init/system/init.te` | `allow init sampletest_service:process { rlimitinh siginh transition };` |
| 3 | `base/security/selinux_adapter/sepolicy/ohos_policy/communication/sampletest/system/sampletest_service.te` | **进程域**策略：`samain_exec`、`samgr` binder、`sa_sampletest_server` 的 **`add`**、param、hilog **data_log**（**ioctl 用 allowxperm**）、**HiDumper `get`** 等 |
| 4 | `base/security/selinux_adapter/sepolicy/base/public/service.te` | `type sa_sampletest_server, sa_service_attr;` |
| 5 | `base/security/selinux_adapter/sepolicy/base/public/service_contexts` | **`9009`** 开头的一列：`9009 u:object_r:sa_sampletest_server:s0` |
| 6 | `base/security/selinux_adapter/sepolicy/whitelist/flex/domain_baseline.json` | **`user` → `sadomain`** 数组增加 **`"sampletest_service"`** |

### 12.1 `data_log` 与 ioctl（编译期 selinux_check）

**错误写法**：在 **`allow sampletest_service data_log:file { ... ioctl ... }`** 里直接写 **ioctl**。

**正确写法**：**allow** 里**不要** ioctl；另起一行：

```selinux
allowxperm sampletest_service data_log:file ioctl { 0x5413 };
```

（具体 ioctl 码以检查器 / AVC 为准。）

### 12.2 HiDumper：`get` 权限

在 **`sampletest_service.te`** 中需允许 **hidumper** 对 **`sa_sampletest_server:samgr_class`** 的 **`get`**（样例已包含）：

```selinux
allow hidumper_service sa_sampletest_server:samgr_class { get };
```

### 12.3 `get` 通过后仍无 Dump 输出

在 **hilog / dmesg** 搜 **`avc: denied`** 是否还有 **binder `call`**（**`hidumper_service` → `sampletest_service`**）。按需补 **`allow hidumper_service sampletest_service:binder { call };`**（以实际 AVC 为准，见 **SKILL.md HiDumper 小节 C**）。

### 12.4 新建 myfoo 时的命名建议

- **进程域**：**`myfoo_service`**（**`type.te` / `init.te` / cfg `secon` / `domain_baseline`** 一致）。
- **samgr 对象类型**：**`sa_myfoo_server`**（**`service.te` + `service_contexts` + `*.te` 里 add/get** 一致）。
- **`service_contexts` 行首**：**数字 SA ID**，与代码宏一致。

---

## 阶段 13（可选）：`system_ability_definition.h`

若希望全仓统一枚举 SA ID，可在 **`foundation/systemabilitymgr/samgr/interfaces/innerkits/samgr_proxy/include/system_ability_definition.h`**（路径以你分支为准；可用 **`find foundation/systemabilitymgr -name system_ability_definition.h`** 自查）增加定义。

**样例做法**：仅用 **`sampletest_ability_id.h`** 的 **`#define SAMPLE_TEST_SA_ID 9009`** 亦可，但必须保证 **与 profile / service_contexts 不冲突**。

---

## 阶段 14（可选）：HiDumper 友好名称

在 **`base/hiviewdfx/hidumper/frameworks/native/dump_utils.cpp`** 的 **`saNameMap_`** 中增加 **`{ 9009, "Sampletest" }`**（本仓库已加）。

之后可使用 **`hidumper -s Sampletest`** 或 **`hidumper -s 9009`**。

---

## 阶段 15：编译与 `--build-target`

### 15.1 全量

```bash
./build.sh --product-name rk3568
```

### 15.2 单编服务端 so

```bash
./build.sh --product-name rk3568 --build-target sampletest_server
```

### 15.3 如何确认 target 名合法？

在已 **`gn gen`** 的 **`out/rk3568/build.ninja`** 中搜索：

```bash
grep -E "build sampletest_server[: ]" out/rk3568/build.ninja
```

能匹配到的短名一般即可作为 **`--build-target`**。**不要**把 **`libsampletest_server.z.so`** 当作 target 名。

---

## 阶段 16：打包阶段告警（startup_guard 等）

- 可能出现 **`sampletest is not in start cmd list`** 等 **startup_guard** 提示：常见于**独立** **`/system/etc/init/sampletest.cfg`** 未写入**主 init.cfg 的 start 列表**之类规则。
- **若 `build.sh` 仍输出 `build success`**：多为 **WARNING / NOT ALLOWED** 与成功并存，**不等于 SA 配置错误**；与 **post-fs-data 里 `start sampletest`** 可并存。
- 需按产品线消除时：查阅 **`developtools/integration_verification`** 下 **startup_guard** 对应 README。

**与 HDF 区分**：**`process_field_validate` / `selinux_check` 失败**会导致构建失败；**startup_guard** 常不阻断。

---

## 阶段 17：验证编译产物（`out/rk3568/packages/phone/system/`）

| 产物 | 典型路径 |
|------|----------|
| SA 库 | `system/lib/libsampletest_server.z.so` 或 **`system/lib64/...`**（视 ABI 而定） |
| profile | `system/profile/sampletest.json` |
| init | `system/etc/init/sampletest.cfg` |

**自检命令**：

```bash
ls out/rk3568/packages/phone/system/lib/libsampletest_server.z.so \
   out/rk3568/packages/phone/system/profile/sampletest.json \
   out/rk3568/packages/phone/system/etc/init/sampletest.cfg
```

**脚本**（源码根）：

```bash
python3 .claude/skills/ohservices/ohsa.py build
```

---

## 阶段 18：设备上确认

### 18.1 进程

```bash
hdc shell "ps -ef | grep -E 'sampletest|sa_main' | grep -v grep"
```

部分设备显示 **`sa_main ... sampletest.json`**，部分仅 **进程名 sampletest**，**任一成立**即可认为 init 已尝试拉起。

### 18.2 Publish 与 hilog

```bash
hdc shell "hilog | grep -i sampletest"
```

关注 **`Sampletest started`**（成功）或 **`Publish failed`**（失败）。

### 18.3 镜像内文件

```bash
hdc shell "ls -la /system/etc/init/sampletest.cfg /system/profile/sampletest.json /system/lib/libsampletest_server.z.so"
```

若 **lib** 下没有，再试 **`/system/lib64/`**。

### 18.4 HiDumper

```bash
hdc shell "hidumper -ls"
hdc shell "hidumper -s 9009"
```

或使用 **`python3 .claude/skills/ohservices/ohsa.py hidumper`**。

---

## 阶段 19：仍不通时 —— 按顺序执行（建议直接复制）

**主机（源码根，产品 rk3568）**：

```bash
grep -F "sampletest_service" out/preloader/rk3568/parts.json || echo "FAIL: 部件未进预加载"
grep -E "build sampletest_server[: ]" out/rk3568/build.ninja || echo "FAIL: 先成功 gn gen"
ls -la out/rk3568/packages/phone/system/etc/init/sampletest.cfg \
       out/rk3568/packages/phone/system/profile/sampletest.json \
       out/rk3568/packages/phone/system/lib/libsampletest_server.z.so 2>/dev/null || \
ls -la out/rk3568/packages/phone/system/lib64/libsampletest_server.z.so 2>/dev/null
```

**设备（hdc 已连接）**：

```bash
hdc shell "ls -la /system/etc/init/sampletest.cfg /system/profile/sampletest.json"
hdc shell "ls -la /system/lib/libsampletest_server.z.so /system/lib64/libsampletest_server.z.so 2>/dev/null"
hdc shell "ps -ef | grep -E 'sampletest|sa_main' | grep -v grep"
hdc shell "dmesg | grep -iE 'sampletest|ServiceStart|execv|secon|avc' | tail -n 30"
hdc shell "zcat /data/log/hilog/hilog.*.gz 2>/dev/null | grep -E '9009|Sampletest|Publish|IsDistributedSa|AddSystemAbilityInner|CheckSystemAbilityInner|avc: denied' | tail -n 40"
```

**手动拉起**（仅当服务已在 init 注册表中时有效）：

```bash
hdc shell "begetctl start_service sampletest"
```

---

## 阶段 20：常见失败与对照表（扩展）

| 现象 | 最可能原因 | 去哪改 |
|------|------------|--------|
| **parts.json 无部件** | 白名单 / 产品 json / subsystem 不一致 | 阶段 7、8、9 |
| **无 profile / so / cfg 产物** | **`bundle.json` service_group** 缺目标 | 阶段 3 |
| **`process_field_validate` not authenticated** | **高权限白名单**缺项或 **name** 写成部件名 | 阶段 10 |
| **init 不加载子目录 cfg** | 未 **`ReadFileInDir("/etc/init", ...)`** | 阶段 11 |
| **execv errno 13 / Please set secon** | **cfg 缺 secon** 或 **secon 与 type 不一致** | 阶段 5、12 |
| **avc denied transition** | **init.te** 未 allow **transition** 到进程域 | 阶段 12 表 |
| **selinux_check ioctl** | **data_log** 等应用 **allowxperm** | 阶段 12.1 |
| **sadomain baseline failed** | **domain_baseline.json** 未加进程域 | 阶段 12 表 |
| **`Publish failed` + AddSystemAbility selinux** | **`samgr_class { add }`** 不足 | **sampletest_service.te** |
| **`IsDistributedSa … no Profile!`** | **profile 未进镜像** 或 **路径错** | profile 安装、cfg **path[1]** |
| **hidumper no such system ability + get AVC** | **hidumper** 无 **`samgr_class get`** | 阶段 12.2 |
| **hidumper 仍无输出** | **binder call** 被拒 | SKILL.md HiDumper C |
| **BUILD.gn Assignment had no effect** | 未使用变量 | 删除无用变量 |
| **全编 success 但大量 NOT ALLOWED** | **startup_guard** 等 | 阶段 16；与 SA 无必然关系 |
| **实时 hilog 看不到 Sampletest，但 SA 实际已起来** | 缓冲区被冲、级别过滤、或未开落盘 | **附录 E**；**SKILL.md** hilog 专节；**阶段 19** 落盘 grep |
| **客户端 GetSystemAbility 失败** | ID 错误、服务未 Publish、或 **客户端 SELinux / deps** | **附录 F**；对照 **阶段 18.2** 与 **service_contexts** |

---

## 阶段 21：提交前自检清单

- [ ] **阶段 1** 表中每一项在 **cfg / profile / 代码 / service_contexts / SELinux type** 四处一致  
- [ ] **`bundle.json` service_group** 含 profile、server、init 三目标  
- [ ] **`grep sampletest_service out/preloader/<产品>/parts.json`** 有输出  
- [ ] **产品 json** 的 **subsystem + component** 正确  
- [ ] **高权限白名单** 的 **name** = **init service name**  
- [ ] **init_config.c** 已加载 **`/etc/init/*.cfg`**（或产品等价机制）  
- [ ] **SELinux** 阶段 12 六类文件均已处理（含 **domain_baseline `sadomain`**）  
- [ ] **hilog** 可见 **`Sampletest started`**（或等价成功日志）  
- [ ] **`hidumper -s 9009`** 行为符合预期（若需 HiDumper）  

---

## 附录 A：sampletest 相关修改文件清单（按类别）

| 类别 | 路径 |
|------|------|
| 部件源码 | `foundation/communication/sampletest_service/**` |
| 构建白名单 | `build/indep_component_whitelist.json` |
| 产品 | `productdefine/common/inherit/rich.json`（以实际 inherit 为准） |
| 高权限 | `vendor/hihope/rk3568/security_config/high_privilege_process_list.json` |
| init | `base/startup/init/services/init/init_config.c`（若需） |
| SELinux | `base/security/selinux_adapter/sepolicy/base/public/type.te`、`service.te`、`service_contexts` |
| SELinux | `base/security/selinux_adapter/sepolicy/ohos_policy/startup/init/system/init.te` |
| SELinux | `base/security/selinux_adapter/sepolicy/ohos_policy/communication/sampletest/system/sampletest_service.te` |
| SELinux 基线 | `base/security/selinux_adapter/sepolicy/whitelist/flex/domain_baseline.json` |
| HiDumper 名称 | `base/hiviewdfx/hidumper/frameworks/native/dump_utils.cpp` |

（与 **SKILL.md** 大表一致；本文侧重 **阶段顺序与为什么**。）

---

## 附录 B：`ohsa.py` 子命令速查

```bash
python3 .claude/skills/ohservices/ohsa.py all       # 产物 + 设备（默认）
python3 .claude/skills/ohservices/ohsa.py build
python3 .claude/skills/ohservices/ohsa.py device
python3 .claude/skills/ohservices/ohsa.py device-files
python3 .claude/skills/ohservices/ohsa.py hilog-disk
python3 .claude/skills/ohservices/ohsa.py dmesg
python3 .claude/skills/ohservices/ohsa.py hidumper
python3 .claude/skills/ohservices/ohsa.py diag
```

多设备：**`-t <序列号>`** 或环境变量 **`OHSA_HDC_TARGET`**。

---

## 附录 C：与 SKILL.md 分工（避免重复与遗漏）

| 主题 | saguide.md | SKILL.md |
|------|------------|----------|
| **线性零基础阶段** | **主干（本文）** | 流程总览 + 易遗漏表 |
| **bundle / profile 字段** | 阶段 3、4、5 | 专节 + 更密命令 |
| **Publish / hilog 关键字** | 阶段 6、18、19 | 专节「确认是否已向 samgr 注册」 |
| **startup_guard** | 阶段 16 | 更细的说明与链接 |
| **hilog.para / init.cfg hilog** | **附录 E（精简）** | **完整示例与参数表** |
| **HiDumper binder call AVC** | 阶段 12.3 | **小节 C 展开** |

**建议阅读顺序**：**先按本文从阶段 1 走到 19 跑通思路 → 再打开 SKILL.md 查具体字段与 grep 模式。**

---

## 附录 D：其它产品 / 仓库若路径不同

- **产品不继承 `rich.json`**：用 **`grep -R "\"subsystem\"" productdefine/`** 找到你的子系统定义文件，在**同一 `components` 数组结构**里加部件。  
- **高权限 json 路径**：在 **`vendor/<vendor>/<board>/security_config/`** 下查找 **`high_privilege_process_list.json`**。  
- **SELinux 策略分域**：若你们仓库把 **communication** 策略放在不同子目录，仍以 **`base/security/selinux_adapter/sepolicy/`** 下实际 **grep 现网 SA** 为准，**复制同结构**再改名。

---

## 附录 E：hilog 落盘与 init 中的 hilog 命令（精简，防「设备上没日志」）

以下与 **SA 是否 Publish 成功**强相关：很多问题只在**落盘 hilog**里出现（实时 **`hilog`** 缓冲区可能被冲掉）。

### E.1 设备上路径与拉取

- **落盘目录**：设备上 **`/data/log/hilog/`**（常为 **`.gz`**）。
- **拉取到 PC**：`hdc shell "ls /data/log/hilog"` → `hdc pull /data/log/hilog/. ./hilog_dump` → 本地 **`zcat ... | grep`**（与 **阶段 19** 设备命令一致）。

### E.2 主 init 里与 hilog 相关的 `exec`（示例位置）

文件常见为 **`base/startup/init/services/etc/init.cfg`**（以仓库为准）。**post-fs-data** 等阶段里可能出现：

```text
"exec /system/bin/hilog -Q pidoff",
"exec /system/bin/hilog -b D",
"exec /system/bin/hilog -p off",
"exec /system/bin/hilog -w start -n 1000 -l 10M",
"exec /system/bin/hilog -w start -t kmsg"
```

含义简述：**`-w start`** 开启落盘；**`-n` / `-l`** 控制文件个数与大小；**`-t kmsg`** 等与内核日志相关。改后需**重编镜像**。

### E.3 `hilog.para`（hilogd 默认参数）

文件常见为 **`base/hiviewdfx/hilog/services/hilogd/etc/hilog.para`**。调试时可关注（**以你分支原文为准**）：

- **`hilog.flowctrl.proc.on=false`**、**`hilog.flowctrl.domain.on=false`**：减轻流控丢日志。
- **`hilog.private.on`** / **`hilog.debug.on`**：与私有域、调试日志是否可见有关。

**更长的字段说明与可复制片段**见 **`SKILL.md`**「hilog 落盘与参数配置」整节。

---

## 附录 F：客户端或其它进程如何调用你的 SA（零基础提要）

- **C++ 侧**：通过 **`SystemAbilityManagerClient`** / **`GetSystemAbility(SA_ID)`**（或你们封装）拿到 **`sptr<IRemoteObject>`**，再转 **`iface_cast<ISampletest>`**（或你的接口），调用 **Ping** 等。**SA ID** 必须与 **profile / service_contexts** 一致。
- **依赖**：客户端模块需在 **GN** 里 **`deps` / `external_deps`** 链到 **IPC、samgr、你的接口 kit**（若对外暴露 **`inner_kits`**，按产品 **`parts_deps`** 规则引用）。
- **SELinux**：若客户端进程域对 **binder**、**目标 SA** 或 **samgr** 无 **`call`/`get`** 等权限，会出现 **binder 事务失败**或静默失败；需在 **落盘 hilog / dmesg** 搜 **`avc: denied`**，按 AVC **补策略**（与 SA 服务端策略不同，**两边都可能要改**）。
- **详细接口样例**：以仓库 **`SystemAbility_Design_And_Sample_zh.md`** 与 **`sampletest` 客户端**（若有单测或 demo）为准。

---

*本文随源码与产品配置演变；若与当前 `BUILD.gn` / 合并规则不一致，以仓库源码为准。*
