---
name: uniflash
description: "展锐 P7885（wukong100）PAC 烧录：hdc shell reboot autodloader + CmdDloader -Reset -pac。脚本 uniflash.py；Windows 为主；与 rkflash（Rockchip upgrade_tool）不同。"
author: "Created by user"
created: "2026-06-17"
version: "1.0.0"
---

# uniflash 技能

展锐 **P7885 / wukong100** 开发板 **PAC 整包烧录**。流程与手工命令一致：

1. `hdc shell reboot autodloader`
2. `CmdDloader.exe -Reset -pac images\wukong100_nosec_userdebug.pac`

入口：**`src/skills/uniflash/uniflash.py`**。与 **rkflash**（Rockchip **`upgrade_tool` + config.cfg**）平台不同，勿混用。

在 **napi_generator 仓库根** 执行；Windows 下将 **`python3`** 换为 **`python`** 即可。

## 应用示例与提示词

| 场景 | 命令示例 | 提示词示例 |
|------|----------|------------|
| 环境检查 | `python src/skills/uniflash/uniflash.py check` | 「检查 uniflash 烧录环境是否就绪」 |
| 默认烧录 | `python src/skills/uniflash/uniflash.py` | 「用 uniflash 烧录 wukong100 nosec userdebug 包」 |
| 指定 PAC | `python src/skills/uniflash/uniflash.py flash --pac D:\build\foo.pac` | 「用指定 pac 烧录 7885」 |
| 指定技能根 | `python src/skills/uniflash/uniflash.py --base D:\path\to\uniflash` | 「从自定义 uniflash 目录烧录」 |
| 多设备 | `python src/skills/uniflash/uniflash.py -t <hdc-target>` | 「对指定 hdc 设备烧录」 |
| 帮助 | `python src/skills/uniflash/uniflash.py --help` | 「uniflash 有哪些参数」 |

## 目录约定（技能根 `uniflash/`）

| 路径 | 说明 |
|------|------|
| **`bin/CmdDloader.exe`** | 展锐 **Download 工具包 `Bin/` 整目录**（须含 **`App/`**、**`System/`** 子目录，不能只有 exe） |
| **`images/wukong100_nosec_userdebug.pac`** | 默认烧录包（可替换或 `--pac` 指定其它路径） |
| **`log/`** | 自动创建；**`uniflash_<时间>.log`**（UTF-8） |

## 子命令

| 命令 | 作用 | 退出码 |
|------|------|--------|
| **`python uniflash.py`** 或 **`flash`** | reboot autodloader → 等待 → CmdDloader | **0** 两步均成功；**1** 失败 |
| **`check`** | 检查 **hdc**、**CmdDloader**、默认 **PAC** | **0** / **1** |
| **`flash-from-pac <PAC>`** | 使用指定 PAC 路径烧录 | 同主命令 |

## 常用参数

| 参数 | 默认 | 说明 |
|------|------|------|
| `--base` | 脚本所在目录 | 技能根 |
| `--pac` | `images/wukong100_nosec_userdebug.pac` | PAC 文件 |
| `--cmddloader` | `bin/CmdDloader.exe` | 或环境变量 **`UNIFLASH_CMDDLOADER`** |
| `-t` / `--hdc-target` | 无 | 或 **`UNIFLASH_HDC_TARGET`** |
| `--reboot-wait` | **15** | reboot 后等待秒数再跑 CmdDloader |
| `--hdc-timeout` | **120** | hdc reboot 超时（秒） |
| `--dloader-timeout` | 无限制 | CmdDloader 超时（秒） |

## 环境变量

| 变量 | 用途 |
|------|------|
| **`UNIFLASH_CMDDLOADER`** | **CmdDloader.exe** 绝对路径 |
| **`UNIFLASH_HDC_TARGET`** | 多设备时 **hdc -t** 目标 |

## 外部依赖

- **`hdc`**：须在 **PATH**（OpenHarmony SDK toolchains 或独立安装）
- **`CmdDloader.exe`**：来自展锐 **Download_Rxx** 包 **`Bin/`** 目录；**`bin/` 下须保留 `App/`、`System/`**，单独拷贝 exe 会 **Startup Fail**。

## 烧录流程（日志英文标题）

1. **`1. hdc shell reboot autodloader`**
2. 等待 **`--reboot-wait`**（默认 15s）
3. **`2. CmdDloader -Reset -pac <pac>`**（**cwd** 为技能根；**-pac** 尽量使用相对技能根的路径）

结束：**`All steps finished`**；**`Flash finished, log: ...`**。

## 注意事项

- 烧录会改写整机分区，确认 **PAC** 与板型（**wukong100 / P7885**）匹配。
- **`CmdDloader.exe`** 为第三方工具，请从展锐/厂商渠道获取，**勿提交到公开仓库**。
- 须**等待进程结束**并确认 **exit 0** 后再视为烧录完成；勿「命令发出即完成」。
- 设备须能被 **`hdc list targets`** 看到；联网模式见 **`HOWTOSKILLS.md` §5**。

## 与 rkflash 区分

| | **uniflash** | **rkflash** |
|--|--------------|-------------|
| 平台 | 展锐 P7885 / wukong100 | Rockchip（如 dayu200） |
| 工具 | **CmdDloader** + **.pac** | **upgrade_tool** + **config.cfg** + 分区 **.img** |
| 进下载模式 | **`hdc shell reboot autodloader`** | **`hdc shell reboot loader`** |
