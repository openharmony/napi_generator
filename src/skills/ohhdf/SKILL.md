---
name: ohhdf
description: "OpenHarmony HDF on rk3568: Light + bluehdf architecture, HCS/UHDF/HAL/KHDF, compile/push/flash, client C API counts, hdc hilog dmesg hidumper debugging. Scripts: ohhdf.py; docs: howtohdf.md, hdf_guide_zh.md."
author: "Created by user"
created: "2026-04-02"
version: "1.2.0"
---

# ohhdf（OpenHarmony HDF）

面向 **标准系统 rk3568**：HDF 分层、**Light** 与 **bluehdf** 样例、**编译 / 推送 / 烧录**、**客户端调用**、**hdc / hilog / dmesg / hidumper** 调试。

## 文档（按阅读顺序）

| 文档 | 内容 |
|------|------|
| **[howtohdf.md](howtohdf.md)** | **零基础长文**：读前准备、名词表、路线 A/B、阶段 1～12（命名→目录→HAL→驱动→bundle→产品 json→HCS→passwd→SELinux→baseline→白名单→demo→编译→推送→调试表）、排错字典、自检清单 |
| **[hdf_guide_zh.md](hdf_guide_zh.md)** | 架构摘要、light 调用链、目录地图、light_demo 命令 |
| **hdf_guide_zh.md** / **howtohdf.md** | bluehdf 专项（HCS 名、leds sysfs、与 light 对照）；本仓库无独立 `bluehdf/` 技能目录 |

官方框架概述：`drivers/hdf_core/framework/README_zh.md`。

## 何时使用本技能

- 新增或修改 **UHDF host / HAL / HCS / SELinux / 产品 json**。
- 理解 **light**（IoService + KHDF GPIO）与 **bluehdf**（leds sysfs，无 `libhdf_platform`）。
- **单编** `light_demo` / `blue_demo` / `hdi_*` / `lib*_driver`，或 **全量** 出镜像。
- 设备上 **hilog / dmesg / hidumper** 过滤 HDF 相关日志。

## 模块与接口数量（摘要）

- **light**：`LightInterface` **4** 个函数指针 + **`NewLightInterfaceInstance` / `FreeLightInterfaceInstance`** → **6** 个 C 入口；部件内另有 KHDF、unittest 等。
- **bluehdf**：`BlueInterface` **3** 个函数指针 + **2** 个工厂/释放 → **5** 个 C 入口；构建模块含 **`hdi_blue`**、**`libbluehdf_driver`**、**`blue_demo`**、**`bluehdf_entry`**。

详见 **howtohdf.md §3**。

## 脚本 `ohhdf.py`（在 OH 源码根或子目录执行）

在 **napi_generator 仓库根** 下示例路径为 **`src/skills/ohhdf/ohhdf.py`**（与 **HOWTOSKILLS.md** 一致）。

```bash
python3 src/skills/ohhdf/ohhdf.py guide
python3 src/skills/ohhdf/ohhdf.py howto              # 摘录；--full 全文
python3 src/skills/ohhdf/ohhdf.py build-demo         # light_demo
python3 src/skills/ohhdf/ohhdf.py build-blue-demo    # blue_demo
python3 src/skills/ohhdf/ohhdf.py build-target hdi_blue --product rk3568
python3 src/skills/ohhdf/ohhdf.py paths --product rk3568
# 需 hdc 已连接；多设备：
python3 src/skills/ohhdf/ohhdf.py -t 192.168.x.x:8710 push-blue
python3 src/skills/ohhdf/ohhdf.py -t 192.168.x.x:8710 push-light
python3 src/skills/ohhdf/ohhdf.py -t 192.168.x.x:8710 device-check
python3 src/skills/ohhdf/ohhdf.py -t 192.168.x.x:8710 hilog-hdf --tail 100
python3 src/skills/ohhdf/ohhdf.py -t 192.168.x.x:8710 dmesg-hdf
python3 src/skills/ohhdf/ohhdf.py -t 192.168.x.x:8710 hidumper-list
```

环境变量 **`OHHDF_HDC_TARGET`** 等价于 **`-t`**。

## 关键源码路径

| 路径 | 作用 |
|------|------|
| `drivers/peripheral/light/interfaces/include/light_if.h` | Light C API |
| `drivers/peripheral/light/hal/` | `hdi_light`，服务名 **`hdf_light`** |
| `drivers/peripheral/light/test/light_demo/` | `light_demo` |
| `drivers/peripheral/bluehdf/interfaces/include/blue_if.h` | Blue C API |
| `drivers/peripheral/bluehdf/hal/` | `hdi_blue` → `libhdi_blue.z.so` |
| `drivers/peripheral/bluehdf/uhdf_driver/` | `libbluehdf_driver.z.so` |
| `vendor/hihope/rk3568/hdf_config/` | **uhdf** / **khdf** HCS |
| `developtools/.../chipsetsdk_dep_whitelist.json` | 新增 `libhdi_*.z.so` 时可能需白名单 |
| `base/security/selinux_adapter/...` + **`domain_baseline.json`** | 新 `*_host` 域与基线 |

## 关联技能

- **ohhdc**：通用 HDC、**LED sysfs**（`/sys/class/leds/...`，与 bluehdf HAL 语义一致）。
- **ohproj §十二**：应用工程与 HDF 文档入口并列索引。
- **ohservices / ohsa.py**：落盘 hilog、dmesg、hidumper 批处理（SA 样例）。
