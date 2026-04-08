# OpenHarmony HDF 外设开发：零基础手把手教程（rk3568）

> **本文目标**：假设你**从未做过 HDF**，只要按章节顺序准备环境、改文件、编译、烧录或推送、用日志排错，就能**自己做出一个类似 bluehdf 的 UHDF 外设**（用户态 HAL + UHDF 驱动 so + HCS + 系统账号与 SELinux）。  
> **更短速查**：架构摘要见同目录 **`hdf_guide_zh.md`**；命令封装见 **`ohhdf.py`**。

---

## 0. 读前须知：你需要先有什么？

### 0.1 你将要操作的是什么？

- 一台已经能**正常全量编译**同一套 **OpenHarmony 标准系统**源码的电脑（本教程以 **`rk3568`** 产品为例）。
- 可选：一块已烧录该产品的**开发板**，且 PC 上 **`hdc list targets`** 能看到设备（用于真机验证）。
- 你会用到：
  - **终端**：`bash`，在**源码根目录**（能看到 **`build.sh`**）执行命令。
  - **编辑器**：改 `.c` / `.h` / `.gn` / `.json` / `.hcs` / `.te` 等文件。

### 0.2 你**不需要**预先会什么？

- 不要求会先写内核驱动：本教程主路径是 **UHDF（用户态）+ HAL 动态库**；**KHDF（内核灯驱）**只在「与 light 对比」时说明。
- 不要求会 IDL：这里用的是 **C 头文件 API**（`*_if.h`），与 **`light_demo` / `blue_demo`** 一致。

### 0.3 本文使用的「样例仓库路径」说明

下文出现的路径如：

- `drivers/peripheral/bluehdf/...`

均相对于你的 **OpenHarmony 源码根**。若根目录为 **`/path/to/openharmony/src`**，则完整路径为 **`/path/to/openharmony/src/drivers/peripheral/bluehdf/...`**。

### 0.4 文档与脚本索引

| 资源 | 路径 |
|------|------|
| **本教程（零基础长文）** | `src/skills/ohhdf/howtohdf.md` |
| 架构短版 | `src/skills/ohhdf/hdf_guide_zh.md` |
| 技能说明 | `src/skills/ohhdf/SKILL.md` |
| 命令助手 | `src/skills/ohhdf/ohhdf.py` |
| bluehdf 说明 | **hdf_guide_zh.md** / 本文（本仓库无独立 `bluehdf/` 技能目录） |
| 应用工程技能（含 HDF 索引） | `src/skills/ohproj/SKILL.md` 第十二节 |
| **全仓库技能索引（权威清单）** | **`src/skills/HOWTOSKILLS.md`** §4（与 **`src/skills/`** 下目录一一对应，勿与本文混淆） |

### 0.5 本文 vs 全仓库 `src/skills`

- **`howtohdf.md`（本文）**只讲 **HDF / ohhdf** 这一条线，**不是**「技能总表」。
- **napi_generator** 里 **自有技能目录**全部在 **`src/skills/<目录名>/`** 下，当前与 **`HOWTOSKILLS.md`** §4.1 一致，共 **15** 个（下列顺序与 §4.1 技能总览表相同，便于核对）：

**`gitlog`** · **`helloworld`** · **`ohhap`** · **`ohbuild`** · **`ohhdc`** · **`ohhdf`**（本文 + **`SKILL.md`** + **`ohhdf.py`**）· **`ohipc`** · **`ohtest`** · **`ohanalysis`** · **`ohclitools`** · **`ohppt`** · **`ohproj`** · **`ohservices`** · **`rkflash`** · **`ohrecord`**

- HDF 实操常与 **`ohhdc`**（hdc、**`led`** sysfs）、**`ohproj`**（应用 / NAPI 索引）、**`ohbuild`**（整编/单编习惯）、**`rkflash`**（整机镜像）等交叉；需要时用 **`HOWTOSKILLS.md`** §4.3 的提示句与命令速查。

---

## 1. 用一句话和一张「心智图」理解 HDF 在干什么

### 1.1 一句话

**HDF（Hardware Driver Foundation）** 帮你在 OpenHarmony 里把「驱动相关的 .so、进程、配置文件」按**统一方式**加载起来：  
**init** 根据配置拉起 **`xxx_host` 进程**，该进程加载 **`lib*_driver.z.so`**（UHDF 驱动），你的**业务逻辑**往往在另一个 **`libhdi_*.z.so`（HAL）**里；应用或测试程序通过 **C API** 调 HAL。

### 1.2 心智图（文字版）

```
[ 你的测试程序 light_demo / blue_demo ]
           |
           |  链接 libhdi_light.z.so / libhdi_blue.z.so（HAL）
           v
[ HAL：实现 NewXxxInterfaceInstance / TurnOn... ]
           |
           |  light：HdfIoServiceBind("hdf_light") -> 内核灯驱
           |  bluehdf：写 /sys/class/leds/.../brightness
           v
[ 硬件或内核资源 ]
```

**另有一条并行线**（与 HAL 并列、常被忽略）：

```
init 读取 HCS / hcb
    -> 启动 bluehdf_host 进程
        -> 加载 libbluehdf_driver.z.so（UHDF 驱动，HDF_INIT 注册）
            -> 向设备管理框架注册「有一个服务叫 bluehdf_interface_service」
```

**bluehdf 样例里**：真正点灯在 **HAL**；**UHDF 驱动**主要负责**被系统识别、进程里占位、打日志**——这是很多「最小样例」的拆法。

---

## 2. 名词表（看到缩写不慌）

| 名词 | 含义 |
|------|------|
| **HCS** | 设备配置脚本（源码里是 `.hcs`），编译进 **`hdf_default.hcb`** 等，描述 **host / device / 加载哪个 .so / 服务名**。 |
| **UHDF** | 用户态 HDF；**host 进程**跑在 **vendor**，加载 **`lib*_driver.z.so`**。 |
| **KHDF** | 内核态 HDF/驱动模型；**light** 的 GPIO 在内核里 **`GpioWrite`**。 |
| **HAL** | 这里特指 **`libhdi_*.z.so`**：给应用/测试提供的 **C API** 实现。 |
| **devhost / xxx_host** | 例如 **`light_host`**、**`bluehdf_host`**：一个**进程名**，负责加载对应 UHDF 驱动。 |
| **deps_guard** | 全编末尾依赖规则检查；**vendor 的 HAL 不许直接链 `libhdf_platform`**（system 库），否则报错。 |
| **inner_kits** | `bundle.json` 里声明「对外暴露头文件路径」，供其它 GN 目标引用。 |
| **chipset_base_dir** | GN 里常见 **`install_images = [ chipset_base_dir ]`**：把 .so 装进 **vendor（芯片侧）**镜像。 |

---

## 3. 先选路线：你要做哪一种外设？

### 3.1 路线 A：只有用户态（推荐零基础先跟这条）——**bluehdf 模式**

- **HAL** 里直接访问 **sysfs**（例如 **`/sys/class/leds/<name>/brightness`**）或纯用户态资源。
- **必须**写 **UHDF 驱动 .so** + **HCS 里注册 host**，否则系统里没有 **`bluehdf_host`** 进程，「不像个 HDF 部件」。
- **优点**：不碰内核 C 代码、不编 KHDF；**注意**：vendor HAL **不要** `external_deps` **`hdf_core:libhdf_platform`**。

### 3.2 路线 B：内核参与——**light 模式**

- **HAL** 只负责 **IoService** 把命令发到内核。
- **内核**里 **`light_driver.c`** 读 **`khdf/light/light_config.hcs`** 的 GPIO 号，再 **`GpioWrite`**。
- **优点**：与内核 GPIO 子系统一致；**难度**：要理解 **KHDF + HCS + IoService 命令码** 对齐。

**建议**：第一次跟本教程时，**对照仓库里已存在的 `drivers/peripheral/bluehdf` 目录**，在纸上把「每个文件干什么的」标一遍，再考虑自己新建一个名字。

---

## 4. 模块与接口数量（写客户端前要心里有数）

### 4.1 light（参考）

| 构建产物角色 | 典型文件名 |
|--------------|------------|
| HAL | `libhdi_light.z.so` |
| UHDF 驱动（灯） | `liblight_driver.z.so`（与 HAL 不同 so） |
| 测试可执行文件 | `light_demo`（单编默认**不**进 phone 镜像，常 **hdc 推送**） |

**`struct LightInterface`（`light_if.h`）**里：

- **4 个函数指针**：`GetLightInfo`、`TurnOnLight`、`TurnOnMultiLights`、`TurnOffLight`
- **再加 2 个全局函数**：`NewLightInterfaceInstance`、`FreeLightInterfaceInstance`

→ 对客户端来说，记住：**先 `New...`，再用指针调 4 个之一，最后 `Free...`**。

### 4.2 bluehdf（本仓库样例）

| 构建产物角色 | 典型文件名 |
|--------------|------------|
| HAL | `libhdi_blue.z.so` |
| UHDF 驱动 | `libbluehdf_driver.z.so` |
| 测试可执行文件 | `blue_demo` |

**`struct BlueInterface`（`blue_if.h`）**里：

- **3 个函数指针**：`GetBlueInfo`、`TurnOnBlue`、`TurnOffBlue`
- **2 个全局函数**：`NewBlueInterfaceInstance`、`FreeBlueInterfaceInstance`

---

## 5. 零基础：从零新增一个 UHDF 外设（按阶段照抄 checklist）

下面以「新增一个叫 **`mydev`** 的部件」为例，**阶段编号必须按顺序做**；你若只是学习，**请直接复制修改 `bluehdf` 目录**而不是手写所有字，减少拼写错误。

---

### 阶段 1：取名字（一次性定清楚）

在一张纸上写下（**全局一致**）：

| 项 | 示例（bluehdf 已用） | 你自己（mydev） |
|----|----------------------|-----------------|
| 部件目录名 | `bluehdf` | `mydev` |
| GN `part_name` | `drivers_peripheral_bluehdf` | `drivers_peripheral_mydev` |
| **host 进程名**（passwd / HCS） | `bluehdf_host` | `mydev_host` |
| UHDF 驱动 so | `libbluehdf_driver.z.so` | `libmydev_driver.z.so` |
| HAL so | `libhdi_blue.z.so` | `libhdi_mydev.z.so` |
| **服务名字符串**（驱动里与 HCS **逐字相同**） | `bluehdf_interface_service` | `mydev_interface_service` |
| `HdfDriverEntry.moduleName` | `bluehdf_service` | `mydev_service` |

**常见翻车点**：`serviceName` 在 **`.hcs`** 里写错一个字母，**日志里永远看不到服务**；`hostName` 与 **passwd** 不一致则 **init 无法切用户**。

---

### 阶段 2：创建 `drivers/peripheral/<name>/` 目录树

**最低限度**应包含（与 `bluehdf` 对齐）：

```text
drivers/peripheral/mydev/
  bundle.json
  mydev.gni                    # declare_args + feature 开关名
  BUILD.gn                     # group 聚合 hal + uhdf_driver (+ test)
  bluehdf.gni  -> 改成 mydev.gni
  interfaces/include/
    mydev_if.h
    mydev_type.h
  hal/
    BUILD.gn
    src/
      mydev_controller.c       # HAL 实现
  uhdf_driver/
    BUILD.gn
    mydev_if_driver.c        # HdfDriverEntry + HDF_INIT
  test/
    my_demo/
      BUILD.gn
      my_demo.cpp
```

**你要做的事**：

1. **复制**整个 `drivers/peripheral/bluehdf` 为 `mydev`（或新名字）。
2. **全文替换**（注意大小写）：`blue`→`my`、`Blue`→`My`、`bluehdf`→`mydev` 等，**以你阶段 1 的表为准**。
3. **`hal/BUILD.gn`** 里 `ohos_shared_library("hdi_blue")` 改成 **`hdi_mydev`**（名字随意，但与 `deps` 引用一致）。

---

### 阶段 3：写 C API 头文件（客户端唯一「契约」）

#### 3.1 `mydev_type.h`

- 定义 **枚举 ID**（如 `MYDEV_ID_BOARD`）。
- 定义 **`struct MydevInfo`**（描述设备能力、 sysfs 名、保留字段等）。

#### 3.2 `mydev_if.h`

- 定义 **`struct MydevInterface`**：里面是 **`int32_t (*...)(...)` 函数指针**。
- 声明 **`const struct MydevInterface *NewMydevInterfaceInstance(void);`**
- 声明 **`int32_t FreeMydevInterfaceInstance(void);`**

**HAL 的 .c 文件**里要实现：函数指针指向静态函数，`New...` 里填好指针表并返回单例。

---

### 阶段 4：实现 HAL（`hal/src/*.c`）与 `hal/BUILD.gn`

#### 4.1 依赖规则（**必读**，否则全编挂）

- **vendor 安装的** `libhdi_*.z.so`：**不要**写  
  `external_deps += [ "hdf_core:libhdf_platform" ]`  
  否则会触发 **deps_guard BaseInnerApi**（platform 是 system 分区库）。
- **可以**：`libhdf_utils`、`libhilog`、`c_utils`（与当前 `bluehdf/hal/BUILD.gn` 一致）。
- **访问硬件**：优先 **sysfs**（leds）、或 **IoService**（若你对齐了内核服务名与命令码）。

#### 4.2 `ohos_shared_library("hdi_mydev")` 要点

- `output_extension = "z.so"`
- `install_images = [ chipset_base_dir ]` → 进 **vendor**
- `subsystem_name = "hdf"`
- `part_name = "drivers_peripheral_mydev"` → 与 **bundle.json** 一致

---

### 阶段 5：实现 UHDF 驱动（`uhdf_driver/*.c`）

1. 实现 **`struct HdfDriverEntry`**：`Bind` / `Init` / `Release`。
2. **`Bind`** 里给 **`deviceObject->service`** 赋一个 **`struct IDeviceIoService`**（至少 **`Dispatch`**；可像 bluehdf 一样先返回 `HDF_ERR_NOT_SUPPORT`）。
3. **文件末尾**：**`HDF_INIT(g_xxxDriverEntry);`** —— 没有它，**不会自动注册驱动入口**。
4. **`moduleName` 字符串**：与 **`bundle`/GN** 里习惯命名一致（bluehdf 用 **`bluehdf_service`**，与 so 文件名不同是正常的）。

**对照读**：`drivers/peripheral/bluehdf/uhdf_driver/bluehdf_if_driver.c`。

---

### 阶段 6：`BUILD.gn`（部件根）与 `bundle.json`

#### 6.1 根 `BUILD.gn`

```gn
group("mydev_entry") {
  deps = [
    "hal:hdi_mydev",
    "uhdf_driver:libmydev_driver_target",
  ]
}
```

再把 **`//drivers/peripheral/mydev:mydev_entry`** 写进 **`bundle.json`** 的 **`build.sub_component`**。

#### 6.2 `bundle.json` 必填字段（逐项解释）

- **`component.name`**：如 `drivers_peripheral_mydev`，与 **产品 json** 里部件名一致。
- **`features`**：如 `drivers_peripheral_mydev_feature_model`；**产品侧必须 `= true`** 才会编进当前产品。
- **`deps.components`**：至少 **`hdf_core`**、**`hilog`**；按需 **`c_utils`**。
- **`build.sub_component`**：包含 **`//drivers/peripheral/mydev:mydev_entry`** 与测试 target。
- **`inner_kits`**：列出 **`//.../hal:hdi_mydev`** 与 **`header_base`**，别人才能 **include** 你的头。

---

### 阶段 7：把部件「接进产品」——`productdefine/...json`

打开 **`productdefine/common/inherit/chipset_common.json`**（或你的产品实际继承文件）：

1. 在 **`parts`** 里增加部件名：`"drivers_peripheral_mydev":{}`。
2. 增加 feature 开关：  
   `"drivers_peripheral_mydev_feature_model": true`  
   且字符串必须与 **`bundle.json` → `features`** 里一致。

**若不做这一步**：`gn gen` 可能根本不编你的目录。

---

### 阶段 8：HCS——让系统拉起 `mydev_host` 并加载驱动 so

编辑：**`vendor/hihope/rk3568/hdf_config/uhdf/device_info.hcs`**

在与其他 `host` **同级**的位置增加一块（**bluehdf 实拍结构如下，请类比改名字**）：

```text
        bluehdf :: host {
            hostName = "bluehdf_host";
            priority = 50;
            bluehdf_device :: device {
                device0 :: deviceNode {
                    policy = 2;
                    priority = 100;
                    moduleName = "libbluehdf_driver.z.so";
                    serviceName = "bluehdf_interface_service";
                }
            }
        }
```

**你要改**：

- `bluehdf` / `bluehdf_host` / `libbluehdf_driver.z.so` / `bluehdf_interface_service` → 阶段 1 表里你的名字。
- **`priority`**：与邻近 host 协调，**不要**两个 host 抢同一个异常值；可参考 **light_host** 也是 `50`。

**编译后**验证 HCB 是否吃进配置：

```bash
strings out/rk3568/packages/phone/vendor/etc/hdfconfig/hdf_default.hcb | grep mydev
```

---

### 阶段 8b：你的产品是否还有「另一份」`device_info.hcs`？

部分产品除 **`vendor/hihope/rk3568/hdf_config/uhdf/device_info.hcs`** 外，还有 **mini / 其它变体目录**。请在你**实际使用的产品名**下全局搜索：

```bash
# 在源码根执行
grep -R "light_host" vendor/hihope/rk3568/hdf_config --include="*.hcs"
```

对 **每一个** 会进镜像的 `device_info.hcs`，若需要你的外设，都要按阶段 8 **重复添加 host 块**，否则 **某一版镜像仍然没有 `xxx_host`**。

---

### 阶段 8c：`device_info.hcs` 是怎样被编进 `hdf_default.hcb` 的？

以 **rk3568** 为例，**`vendor/hihope/rk3568/hdf_config/uhdf/hdf.hcs`** 开头有：

```text
#include "device_info.hcs"
```

因此：你只要在**同目录**下的 **`device_info.hcs`** 里增加 `host` 块即可，**不必**改 `hdf.hcs` 的 `#include` 列表——除非你的产品把 host 写在**别的**被 include 的文件里。

**自查**：打开你产品实际使用的 **`hdf.hcs`**，确认其中 **include 链**能覆盖到你编辑的 `device_info.hcs`（路径相对于该 `hdf.hcs` 所在目录）。

**与 BUILD.gn 的关系**：同目录 **`BUILD.gn`** 里 **`hdf_hcb("hdf_default.hcb")`** 的 **`source = "./hdf.hcs"`** 指定了编译 HCB 的入口文件；**`hdf_cfg("hdf_devhost.cfg")`** 通常也指向同一 **`hdf.hcs`**，因此 **改 host 后重新编译**，**`.hcb` 与 `hdf_devhost.cfg` 会一起更新**。

---

### 阶段 9：`passwd` / `group`——host 进程以什么用户运行

编辑：

- **`base/startup/init/services/etc/passwd`**
- **`base/startup/init/services/etc/group`**

**各加一行**（**uid/gid 不要与现有 host 冲突**；bluehdf 示例用 **3037**）：

```text
bluehdf_host:x:3037:3037:::/bin/false
bluehdf_host:x:3037:
```

你自己做 **mydev** 时改成 **`mydev_host`** 和新数字。

**若漏做**：init 无法 `setuid` 到声明的用户，**进程起不来**。

---

### 阶段 10：SELinux——否则 `Permission denied` / `avc: denied`

**准确文件路径以本节下方「阶段 10（修订）」表格为准**（bluehdf 的 `type.te` 在 **`drivers/adapter/public/`**，不是随意的 `ohos_product/`）。上表仅帮助理解「要改哪几类规则」：

| 目的 | 规则类型 |
|------|----------|
| 声明域 | `type xxx_host, hdfdomain, domain` |
| 服务上下文 | `hdf_service_contexts`：服务名字符串 → `u:object_r:hdf_xxx_interface_service:s0` |
| 服务类型 | `hdf_service.te`：`type hdf_xxx_interface_service, hdf_service_attr` |
| init 过渡 | `chipset_init.te`：`allow chipset_init ... transition` 到 `xxx_host` |
| host 进程 allow | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/peripheral/<name>/vendor/xxx_host.te` |
| devmgr ↔ host | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/peripheral/<name>/vendor/hdf_devmgr.te`（binder 等） |

**初学者策略**：按「阶段 10（修订）」**整表复制目录结构**：在 **`.../sepolicy/ohos_policy/drivers/peripheral/mydev/vendor/`** 下放 **`mydev_host.te` + `hdf_devmgr.te`**（由 bluehdf 改名替换）；再在 **`.../sepolicy/ohos_policy/drivers/adapter/public/`** 与 **`.../sepolicy/ohos_policy/startup/init/public/`** 里按表改 **`type.te` / `hdf_service_contexts` / `hdf_service.te` / `chipset_init.te`**（完整前缀见修订表）。**不要**把 `.te` 放进 **`drivers/peripheral/mydev/` 部件源码目录**（那是 C/IDL，不是 sepolicy）。

---

### 阶段 10b：`domain_baseline.json`（全编 **selinux_check** 必过）

编辑：

**`base/security/selinux_adapter/sepolicy/whitelist/flex/domain_baseline.json`**

在 **`user` → `hdfdomain`** 数组里增加你的 **`mydev_host`**（与 **`type.te`** 里域名一致）。

**若漏做**：构建在 **`selinux_check`** 步骤失败，提示 **「add ... to hdfdomain field under user」**。

---

### 阶段 11：`chipsetsdk_dep_whitelist.json`（新 HAL so 常要加）

文件：

**`developtools/integration_verification/tools/deps_guard/rules/chipsetsdk_dep_whitelist.json`**

**做法**：搜索 **`libhdi_light.z.so`** 相关条目，**复制**多段，把 **`so_file_name` / `so_file_path`** 改成你的 **`libhdi_mydev.z.so`**，**`dep_file_name`** 保持与 light 相同的几类（`ld-musl-arm.so.1`、`libutils.z.so`、asan 相关等）。

**原因**：vendor 的 ELF 仍可能 **NEEDED** 链接器或工具链 so，规则要显式允许。

---

### 阶段 12：写 `test/my_demo`（验证 HAL）

**`ohos_executable("my_demo")`**：

- `deps = [ "../../hal:hdi_mydev" ]`
- 源码里 **`#include "mydev_if.h"`**
- 调用 **`NewMydevInterfaceInstance()`**，检查非空，再调 **`Get...` / 业务接口**，最后 **`Free...`**。

**对照**：`drivers/peripheral/bluehdf/test/blue_demo/blue_demo.cpp`。

---

### 阶段 12b：构建系统如何把「部件」编进 OpenHarmony（你必须知道的一条链）

很多人改完 `drivers/peripheral/mydev` 却「根本不编译」，通常断在**下面链条的某一环**：

1. **`bundle.json`** 放在部件根目录；其中 **`component.name`**（如 `drivers_peripheral_mydev`）是 **部件在构建系统中的逻辑名**。
2. **预加载（preloader）** 会扫描各部件的 `bundle.json`，生成 **`out/preloader/<产品名>/parts.json`** 等。  
   **自查**：全量或 `gn gen` 成功后执行：
   ```bash
   grep -F "drivers_peripheral_mydev" out/preloader/rk3568/parts.json
   ```
   **若没有**：说明 **产品未包含该部件** 或 **feature 未开** 或 **bundle 路径/JSON 语法错误**。
3. **产品定义 JSON**（本教程示例为 **`productdefine/common/inherit/chipset_common.json`**）的 **`parts`** 数组里，必须有一项：
   ```json
   { "component": "drivers_peripheral_mydev", "features": [ "drivers_peripheral_mydev_feature_model = true" ] }
   ```
   其中 **`component`** 必须等于 **`bundle.json` → `component.name`**；**`features`** 里的字符串必须 **`bundle.json` → `features` 数组里某一项完全一致**（含 `_feature_model` 后缀习惯）。
4. **`build.sub_component`** 里的 GN 标签（如 `//drivers/peripheral/mydev:mydev_entry`）必须 **真实存在** 且 **`mydev_entry` 的 `deps` 能展开到 hal + driver**。

**结论**：只写代码、不改 **产品 json**，**parts.json 里永远没有你的部件** → **out 里找不到你的 so**。

---

### 阶段 12c：`hdf_devhost.cfg` 是生成的——一般不要手改

全编后会出现（路径随产品略变）：

- **`out/rk3568/gen/vendor/hihope/rk3568/hdf_config/uhdf/hdf_devhost.cfg`**
- 打包后：**`out/rk3568/packages/phone/vendor/etc/init/hdf_devhost.cfg`**

其中会为每个 host 生成类似条目（**bluehdf 实拍**）：

```text
"name" : "bluehdf_host",
"path" : ["/vendor/bin/hdf_devhost", "-i", "17", "-n", "bluehdf_host"],
"uid" : "bluehdf_host",
"gid" : ["bluehdf_host"],
"secon" : "u:r:bluehdf_host:s0"
```

- **`-n bluehdf_host`**：与 **HCS `hostName`**、**passwd 用户名**一致。
- **`-i 17`**：**实例号**，与 **其它 host 不冲突**即可；**不要**想当然改数字，除非你清楚 devmgr 分配规则；通常 **重新全编** 会按 HCS 重新生成。

**你若手改 `hdf_devhost.cfg` 源码树里的模板**：多数仓库**没有**单独模板文件，而是 **由 HCS 转换**；应以 **`device_info.hcs`** 为准。若某产品 **init 不读你改的 cfg**，说明 **改错层级** 或 **未重新打包 vendor**。

**设备上 init 实际拉起 host 的二进制**：一般为 **`/vendor/bin/hdf_devhost`**（参数 **`-n <hostName>`**）。若进程列表里 **没有** `xxx_host`，可 **`hdc shell "ls -la /vendor/bin/hdf_devhost"`** 确认二进制存在，再结合 **dmesg / hilog** 看是否 **exec 失败**。

---

### 阶段 12d：我怎么知道 `build.sh --build-target` 该填什么名字？

**规则**：`--build-target` 填的是 **GN 里生成的「目标别名」**，通常与 **`BUILD.gn` 里 `ohos_executable("blue_demo")` / `ohos_shared_library("hdi_blue")` 的 target 名**一致，或与 **`group("bluehdf_entry")` 名**一致。

**方法一（推荐）**：在已 **`gn gen` 过**的 **`out/<产品>/build.ninja`** 里搜 **phony** 目标：

```bash
grep -E "build (blue_demo|hdi_blue|libbluehdf_driver|light_demo)[: ]" out/rk3568/build.ninja
```

能搜到的 **`blue_demo`**、**`hdi_blue`** 等，就是合法 **`--build-target`** 参数。

**方法二**：看 **`bundle.json` → `build.sub_component` / `build.test`** 里写的 **`//path/to:target_name`**，冒号后的 **`target_name`** 一般即可作为 `--build-target`（若失败再用方法一核对）。

**常见误区**：

- 填 **`libhdi_blue.z.so`**（文件名）——**错**，应填 **`hdi_blue`**（GN target）。
- 填 **`drivers/peripheral/bluehdf/hal:hdi_blue`**（完整 label）——**多数产品 build.sh 只接受短名**；短名以 **build.ninja** 为准。

---

### 阶段 12e：`out/<产品>/build_configs/hdf/drivers_peripheral_xxx/BUILD.gn` 不要手改

全量或预编译后会出现：

```text
out/rk3568/build_configs/hdf/drivers_peripheral_bluehdf/BUILD.gn
```

其中有 **`ohos_part("drivers_peripheral_bluehdf")`**、`module_list` 指向 **`//drivers/peripheral/bluehdf:bluehdf_entry`** 等。

**这是构建系统根据 `bundle.json` 等生成的中间文件**。你若**手工改这里**，下次 **`gn gen` 可能被覆盖**；正确做法是改 **`drivers/peripheral/.../bundle.json`** 与 **`BUILD.gn` 源码**。

---

### 阶段 10（修订）：bluehdf 已落地 SELinux ——「一个不漏」的仓库路径

下列路径均相对于**源码根**；你做 **mydev** 时应 **复制同结构**并替换类型名（**不要漏 `hdf_devmgr.te` 补丁**）：

| 顺序 | 文件路径 | 作用 |
|------|----------|------|
| 1 | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/adapter/public/type.te` | `type bluehdf_host, hdfdomain, domain;` |
| 2 | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/adapter/public/hdf_service_contexts` | 服务名 → `hdf_bluehdf_interface_service` 标签 |
| 3 | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/adapter/public/hdf_service.te` | 声明 `hdf_bluehdf_interface_service` 类型 |
| 4 | `base/security/selinux_adapter/sepolicy/ohos_policy/startup/init/public/chipset_init.te` | `chipset_init` 可 `transition` 到 `bluehdf_host`（与 `light_host` 同列表） |
| 5 | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/peripheral/bluehdf/vendor/bluehdf_host.te` | **`bluehdf_host` 进程**允许访问的参数节点、binder、vendor 配置目录等 |
| 6 | `base/security/selinux_adapter/sepolicy/ohos_policy/drivers/peripheral/bluehdf/vendor/hdf_devmgr.te` | **`hdf_devmgr` 与 `bluehdf_host` 的 binder** 等（缺了会 **服务注册失败**） |
| 7 | `base/security/selinux_adapter/sepolicy/whitelist/flex/domain_baseline.json` | **`user.hdfdomain`** 数组含 **`bluehdf_host`**（缺了 **selinux_check 全编失败**） |

**注意**：SELinux 策略改在 **`system` 侧**时，**只烧 vendor 分区往往不够**，需按你平台流程更新 **system** 或整包。

---

### 附录 A（阶段对照）：bluehdf 部件内「每一个源文件」清单

**仅 `drivers/peripheral/bluehdf/` 目录内**（给零基础对照用）：

| 文件 | 作用 |
|------|------|
| `bundle.json` | 部件元数据、sub_component、inner_kits、features |
| `BUILD.gn` | `bluehdf_entry` 聚合 hal + uhdf_driver |
| `bluehdf.gni` / `blue.gni` | feature 参数、`c_utils_enable` 等 |
| `interfaces/include/blue_if.h` | C API：结构体 + `New`/`Free` |
| `interfaces/include/blue_type.h` | 枚举、`BlueInfo`（含 `ledSysfsName`） |
| `hal/BUILD.gn` | 产出 `libhdi_blue.z.so` |
| `hal/src/blue_controller.c` | HAL：写 `/sys/class/leds/.../brightness` |
| `uhdf_driver/BUILD.gn` | 产出 `libbluehdf_driver.z.so` |
| `uhdf_driver/bluehdf_if_driver.c` | `HdfDriverEntry` + `HDF_INIT` |
| `test/BUILD.gn` | 测试 group |
| `test/blue_demo/BUILD.gn` | `blue_demo` 可执行文件目标 |
| `test/blue_demo/blue_demo.cpp` | 命令行 demo |

**部件外但与本样例强相关**（已修改或需同步）：

| 文件 | 作用 |
|------|------|
| `vendor/hihope/rk3568/hdf_config/uhdf/device_info.hcs` | 注册 `bluehdf_host` 与驱动 so、服务名 |
| `productdefine/common/inherit/chipset_common.json` | 打开 `drivers_peripheral_bluehdf` 部件与 feature |
| `base/startup/init/services/etc/passwd` | `bluehdf_host` 用户 |
| `base/startup/init/services/etc/group` | `bluehdf_host` 组 |
| `developtools/.../chipsetsdk_dep_whitelist.json` | `libhdi_blue.z.so` 的 deps_guard 白名单 |
| `src/skills/ohhdf/*`（**howtohdf.md**、**SKILL.md**、**ohhdf.py** 等） | 文档与脚本（非编译必须） |

---

## 6. 编译：按什么顺序敲命令？产物在哪？

### 6.1 第一次验证（建议顺序）

在**源码根**：

```bash
./build.sh --build-target libmydev_driver --product-name rk3568
./build.sh --build-target hdi_mydev --product-name rk3568
./build.sh --build-target my_demo --product-name rk3568
```

把 **`libmydev`** 换成你的 **GN target 名**。

**典型输出**（以 bluehdf 为例）：

```text
out/rk3568/hdf/drivers_peripheral_bluehdf/libbluehdf_driver.z.so
out/rk3568/hdf/drivers_peripheral_bluehdf/libhdi_blue.z.so
out/rk3568/hdf/drivers_peripheral_bluehdf/blue_demo
```

### 6.2 全量出镜像（第一次上板强烈建议）

```bash
./build.sh --product-name rk3568
```

### 6.3 deps_guard：「hdf 里对了、还报错」的典型原因

**现象**：`out/rk3568/hdf/.../libhdi_*.z.so` 用 `readelf -d` 看已经**没有** `libhdf_platform`，但构建仍报 **vendor only module ... libhdf_platform**。

**原因**：**`out/rk3568/packages/phone/vendor/lib/`** 里残留**旧** so。

**处理**：

```bash
rm -f out/rk3568/packages/phone/vendor/lib/libhdi_mydev.z.so
./build.sh --build-target hdi_mydev --product-name rk3568
# 或全量
```

---

## 7. 上板：整镜像 vs 只推送（你要选哪种？）

### 7.1 整镜像烧录（正式）

- **何时**：你改了 **HCS、sepolicy、passwd、domain_baseline** 等 **system/vendor 分区**内容。
- **查什么**：见 **§8.1**。

### 7.2 只推送 HAL + demo（快速试逻辑）

**仅当你只改了 HAL/demo 代码**，且设备上 **已有** 正确的 **host + 驱动 so** 时：

```bash
hdc file send out/rk3568/hdf/drivers_peripheral_bluehdf/libhdi_blue.z.so /data/local/tmp/
hdc file send out/rk3568/hdf/drivers_peripheral_bluehdf/blue_demo /data/local/tmp/
hdc shell chmod 755 /data/local/tmp/blue_demo
hdc shell "export LD_LIBRARY_PATH=/data/local/tmp:/vendor/lib:/system/lib && /data/local/tmp/blue_demo info"
```

**解释**：动态链接器默认从 **`/vendor/lib`** 找 `libhdi_blue.z.so`；**`LD_LIBRARY_PATH` 把 `/data/local/tmp` 放在最前**，就会用你推上去的新 HAL。

---

## 8. 调试手册：hdc / hilog / dmesg / hidumper（复制即用）

### 8.1 上电后第一件事：进程在不在？

```bash
hdc shell "ps -ef | grep -E 'mydev_host|hdf_devmgr' | grep -v grep"
```

- **没有 `mydev_host`**：回去查 **HCS、passwd、SELinux、so 是否在 `/vendor/lib`**。
- **有进程**：再查 HAL/demo。

### 8.2 库文件在不在？

```bash
hdc shell "ls -la /vendor/lib/libhdi_mydev.z.so /vendor/lib/libmydev_driver.z.so"
```

### 8.3 hilog（用户态日志）

```bash
hdc shell "hilog -x | grep -iE 'mydev|uhdf_|HDF' | tail -n 80"
```

**日志太少**时可临时关流控（仅调试）：

```bash
hdc shell "param set hilog.flowctrl.proc.on false"
```

**你怎么找 TAG**：打开你的 `.c` 文件搜 **`#define HDF_LOG_TAG`**。

### 8.4 dmesg（内核 / SELinux / init）

```bash
hdc shell "dmesg | grep -iE 'avc|selinux|mydev|hdf|init' | tail -n 60"
```

- 出现 **`avc: denied`**：回到 **§10** 补 **`.te`** 或 **file_contexts**。

### 8.5 hidumper（枚举系统能力）

```bash
hdc shell "hidumper -l | head -n 100"
```

**说明**：HDF 相关项因版本而异；hidumper 更适合与 **SystemAbility** 联查。可配合 **`ohservices/ohsa.py`** 里封装好的子命令。

### 8.6 与 sysfs LED 对照（bluehdf / ohhdc）

设备上先看有哪些 LED 节点：

```bash
hdc shell "ls /sys/class/leds"
```

手工点灯（与 HAL 写的路径一致）：

```bash
hdc shell "echo 1 > /sys/class/leds/blue/brightness"
hdc shell "echo 0 > /sys/class/leds/blue/brightness"
```

也可用：**`python3 src/skills/ohhdc/ohhdc.py led blue on`**（在 **napi_generator** 仓库根执行）。

---

## 9. 开发「客户端」的两种方式（你要对接哪一种？）

### 9.1 方式一：原生 C/C++ 可执行文件 / so（本教程主线）

1. 在 **BUILD.gn** 里 **`deps = [ "//drivers/peripheral/mydev/hal:hdi_mydev" ]`**（标签以你实际为准）。
2. **`#include "mydev_if.h"`**（通过 **`include_dirs`** 指到 **`interfaces/include`**）。
3. 调用顺序：**`New` → 指针调用 → `Free`**。

### 9.2 方式二：ArkTS 应用通过 NAPI 再调 HAL

不在本文展开；路径是 **ohproj 技能**：把 C API 封进 **NAPI**，ArkTS 再调。**HDF 本身仍按本文做出**。

### 9.3 方式三：IDL / HDI C++（大应用常用）

标准系统里许多服务用 **`.idl` 生成 `I*Interface`**；与 **`light_if.h` 直连** 是两条线。若产品要求 IDL，需要另开 **drivers_interface_*** 部件；**超出零基础第一篇范围**。

---

## 10. 常见失败与对照表（像查字典一样用）

| 现象 | 最可能原因 | 去哪改 |
|------|------------|--------|
| 全编 **`selinux_check` 失败**，提到 **`hdfdomain`** | **`domain_baseline.json`** 未加 `xxx_host` | §10b |
| **`deps_guard` `libhdf_platform`** | HAL 链了 platform，或 **packages 里旧 so** | §4.1、§6.3 |
| **`deps_guard` `ld-musl-arm.so.1`** | 缺 **chipsetsdk 白名单** | §11 |
| **`check_external_deps` 失败**，提到 **third_party** | **`external_deps` 写了非部件依赖**（如误加 **bounds_checking_function**） | 改 **GN**：用 **`{}` 初始化结构体** 等避免拉第三方部件；仅允许 **`deps` 里列出的 components** |
| **`grep parts.json` 没有你的部件** | **产品 json 未加 component** 或 **feature 字符串与 bundle 不一致** | **`productdefine/...json`**、**`bundle.json` features** |
| **ninja 报找不到 `//drivers/...:xxx`** | **`BUILD.gn` 路径/target 名错误** 或 **部件未进构建图** | 修正 **GN**、§12b 链条 |
| **没有 `xxx_host` 进程** | HCS / passwd / SELinux / so 未进 vendor | §8、§8.2、§8b（多份 HCS） |
| **`hdf_devhost` 存在但无你的 host** | **`hdf_devhost.cfg` 未含你的 host**（HCS 未编进或烧错分区） | §8c、§12c、重打包 **vendor** |
| **`moduleName` 与 so 不一致** | HCS 写 **`libfoo.z.so`** 实际产出 **`libfoo_driver.z.so`** | 对齐 **`uhdf_driver/BUILD.gn` output** 与 **HCS 字符串** |
| **`serviceName` 与驱动注册不一致** | 代码里服务名与 HCS 不同 | **驱动 C 文件**与 **HCS** 逐字核对 |
| **`TurnOn` 返回失败，但 sysfs 手工能亮** | HAL 路径写错、**SELinux** 拒绝写 sysfs、或节点名错误 | HAL、`ls /sys/class/leds`、**`dmesg \| grep avc`** |
| **`blue_demo` 用了旧 HAL** | 未设 **`LD_LIBRARY_PATH`** | §7.2 |
| **日志里 `Permission denied` 写 brightness** | **进程域**无权写该 sysfs | **SELinux** 为 **`xxx_host` 增加对 `sysfs`/`leds` 的 allow**（按平台策略扩展） |
| **全编末尾大量 `[NOT ALLOWED]` 仍显示 `build success`** | **startup_guard / 其它规则**告警；与 **HDF 无关**或需单独治理 | 看日志前缀是 **deps_guard** 还是 **startup_guard**；HDF 以 **`deps_guard` / `selinux_check` / ninja FAILED** 为准 |

---

## 11. 提交前自检清单（打印贴显示器旁）

- [ ] **阶段 1** 表里每个字符串在 **HCS / 驱动 / SELinux / passwd** 四处一致  
- [ ] **`bundle.json` + 产品 json** feature 已开  
- [ ] **`grep drivers_peripheral_mydev out/preloader/rk3568/parts.json`** 有输出（部件已进入预加载）  
- [ ] **`hdf.hcs`** 的 `#include` 链覆盖你改的 **`device_info.hcs`**（§8c）  
- [ ] **`domain_baseline.json`** 已加 host  
- [ ] **`chipsetsdk_dep_whitelist`** 已加新 `libhdi_*.z.so`（若全编报 deps）  
- [ ] **`readelf -d packages/.../libhdi_*.z.so`** 无 **`libhdf_platform`**（vendor HAL）  
- [ ] **`strings .../hdf_default.hcb`** 能搜到你的 **host / service** 关键字  
- [ ] **`out/.../gen/.../hdf_devhost.cfg`** 或 **`packages/.../hdf_devhost.cfg`** 含 **`xxx_host`** 与 **`-n xxx_host`**  
- [ ] 设备 **`ps` + `hilog` + demo** 跑通  

---

## 11b. 仍不通时：按顺序执行（复制到终端）

在**源码根**、产品 **`rk3568`** 示例：

```bash
# 1) 部件是否进预加载
grep -F "drivers_peripheral_mydev" out/preloader/rk3568/parts.json || echo "FAIL: 产品未包含部件或 feature 未开"

# 2) GN 目标是否存在
grep -E "build my_demo[: ]" out/rk3568/build.ninja || echo "FAIL: 先成功执行一次 gn gen / build.sh"

# 3) 产物是否生成
ls -la out/rk3568/hdf/drivers_peripheral_mydev/

# 4) 打包目录是否更新（deps_guard 看这里）
readelf -d out/rk3568/packages/phone/vendor/lib/libhdi_mydev.z.so 2>/dev/null | grep NEEDED || true

# 5) HCB 是否含配置
strings out/rk3568/packages/phone/vendor/etc/hdfconfig/hdf_default.hcb | grep -E "mydev_host|mydev_interface" || echo "FAIL: HCS 未进包或字符串不一致"
```

在**设备上**（**hdc** 已连）：

```bash
hdc shell "ps -ef | grep mydev_host | grep -v grep"
hdc shell "ls -la /vendor/lib/libmydev_driver.z.so /vendor/lib/libhdi_mydev.z.so"
hdc shell "grep mydev_host /vendor/etc/init/hdf_devhost.cfg 2>/dev/null | head"
hdc shell "dmesg | grep -i avc | tail -n 20"
```

---

## 12. 附录：用 `ohhdf.py` 减少手敲（可选）

在**源码根**执行（多设备加 **`-t ip:port`** 或 **`OHHDF_HDC_TARGET`**）：

```bash
python3 src/skills/ohhdf/ohhdf.py howto --full
python3 src/skills/ohhdf/ohhdf.py build-blue-demo
python3 src/skills/ohhdf/ohhdf.py paths --product rk3568
python3 src/skills/ohhdf/ohhdf.py -t <设备> push-blue
python3 src/skills/ohhdf/ohhdf.py -t <设备> device-check
python3 src/skills/ohhdf/ohhdf.py -t <设备> hilog-hdf
python3 src/skills/ohhdf/ohhdf.py -t <设备> dmesg-hdf
python3 src/skills/ohhdf/ohhdf.py -t <设备> hidumper-list
```

---

## 13. 附录：light vs bluehdf（读懂官方 light 时再读）

| 对比项 | light | bluehdf |
|--------|-------|---------|
| HAL 如何碰硬件 | **IoService** → **KHDF** → **`GpioWrite`** | 写 **`/sys/class/leds/.../brightness`** |
| 内核 HCS 示例 | `vendor/.../khdf/light/light_config.hcs` | 无（当前样例） |
| vendor HAL 链 `libhdf_platform` | **否**（用 **`libhdf_host` + utils**） | **否** |

---

## 14. 附录：其它产品 / 仓库若路径不同怎么办？

- **`productdefine`**：inherit 链可能多层；你的部件可能写在 **`chipset_common.json`** 之外的 json。用 **`grep -R "drivers_peripheral_light" productdefine/`** 找**现网 light** 写在哪，**在同一文件、同一数组结构**里加你的部件。
- **`vendor/hihope/rk3568_mini_system`**：若烧录的是 **mini_system** 镜像，要在 **`vendor/hihope/rk3568_mini_system/hdf_config/uhdf/`** 下同样检查 **`device_info.hcs` / `hdf.hcs`**，不能只改 **`rk3568`** 目录（§8b）。
- **子系统名**：`bundle.json` 里 **`subsystem`** 一般为 **`hdf`**；不要随意改成不存在的子系统名，除非你知道 **build** 里已注册。

---

*本文随源码与产品配置演变；若与当前 `BUILD.gn` / HCS 不一致，以仓库源码为准。*
