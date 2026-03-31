---
name: ohrecord
description: "OpenHarmony 系统侧 snapshot_record 屏幕录制 MP4：设备目录与 SELinux、build、record/pull、hilog 与 .so 校验。脚本 ohrecord.py（paths/build/prep-device/record/pull/verify-remote-mp4/hilog-capture/targets 等）。完整修改清单与排查见同仓库 src/skills/ohproj/SKILL.md 第十节。"
author: "Created by user"
created: "2026-03-24"
version: "1.0.0"
---

# ohrecord 技能说明

本技能描述 **`snapshot_record`** 将屏幕录制成 **MP4（CAPTURE_FILE）** 的端到端方案：涉及 **window_manager** 命令行工具、**player_framework** 录屏与 IPC、**SELinux** 与 **`file_contexts`**。**详细开发/测试/部署步骤、问题与解决方案、修改文件逐项说明** 写在 **`src/skills/ohproj/SKILL.md` 第十节**；本文件提供索引与脚本用法。

---

## 应用示例与提示词

依赖 **hdc**；**`OHOS_SRC` / `--src`** 指向 OpenHarmony 源码根。在 **napi_generator 仓库根** 执行下列命令。

| 场景 | 命令示例 | 提示词示例 |
|------|----------|------------|
| 路径说明 | `python3 src/skills/ohrecord/ohrecord.py paths` | 「snapshot_record 涉及哪些源码路径」 |
| 全量编译 | `python3 src/skills/ohrecord/ohrecord.py build --product rk3568` | 「为录屏功能编 rk3568 镜像」 |
| 准备目录 | `python3 src/skills/ohrecord/ohrecord.py prep-device` | 「在设备上建好 /data/test/media 并打 SELinux 标签」 |
| 录制 | `python3 src/skills/ohrecord/ohrecord.py record -s 60 -f /data/test/media/demo.mp4` | 「录 60 秒屏到指定 mp4」 |
| 拉回 | `python3 src/skills/ohrecord/ohrecord.py pull -r /data/test/media/demo.mp4` | 「把设备上的 mp4 拉到 PC」 |
| hilog | `python3 src/skills/ohrecord/ohrecord.py hilog-capture` | 「抓 ScreenCapture 相关 hilog」 |

## 一、脚本入口（固化命令）

在**源码根目录**（含 `build.sh` 的目录，如 `.../61release/src`）或任意目录执行均可；脚本会解析源码根（`--src` 或环境变量 `OHOS_SRC` / 从脚本位置向上查找含 `build.sh` 的目录）。下文以 **napi_generator 仓库根** 下 `src/skills/ohrecord/ohrecord.py` 为例。

```bash
# 查看本技能涉及的关键路径说明
python3 src/skills/ohrecord/ohrecord.py paths

# 全量编译产品（与日常镜像一致）
python3 src/skills/ohrecord/ohrecord.py build --product rk3568

# 设备：准备录制目录 + SELinux 标签（多设备用 -t 或环境变量 OHRECORD_HDC_TARGET）
python3 src/skills/ohrecord/ohrecord.py prep-device
python3 src/skills/ohrecord/ohrecord.py device-status

# 验证设备上媒体库是否包含「服务端按路径 open」逻辑
python3 src/skills/ohrecord/ohrecord.py verify-device-so

# 录制（秒数、设备侧绝对路径，须落在 /data/test/media 下）
python3 src/skills/ohrecord/ohrecord.py record --seconds 60 --file /data/test/media/demo_1min.mp4

# 拉取 MP4 到本技能目录下 recv/（或 --local 指定路径）
python3 src/skills/ohrecord/ohrecord.py pull --remote /data/test/media/demo_1min.mp4

# 设备侧快速校验 mp4（ls/wc/xxd）
python3 src/skills/ohrecord/ohrecord.py verify-remote-mp4 --remote /data/test/media/demo_1min.mp4

# 本机产物中查找 libmedia_service.z.so 并校验特征串（编译后）
python3 src/skills/ohrecord/ohrecord.py verify-host-so --product rk3568

# 录屏失败后抓 ScreenCapture 相关 hilog
python3 src/skills/ohrecord/ohrecord.py hilog-capture

# 列出 hdc 设备
python3 src/skills/ohrecord/ohrecord.py targets
```

**环境变量**

| 变量 | 含义 |
|------|------|
| `OHOS_SRC` | 源码根（可选，默认从脚本位置推断） |
| `OHRECORD_HDC_TARGET` | `hdc -t` 序列号，多设备时与 `ohrecord.py -t` 等价 |

---

## 二、核心约定（必读）

| 项 | 说明 |
|----|------|
| **输出目录** | 必须使用 **`/data/test/media`**（与 `file_contexts` 中 `data_test_media_file` 一致）。 |
| **手建目录标签** | `mkdir` 出的目录常为 **`data_file`**，会导致 **`media_service` open 失败 errno=13 (EACCES)**；需 **`chcon u:object_r:data_test_media_file:s0 /data/test/media`** 或等价 **`restorecon`**（以设备支持为准）。 |
| **开发者模式** | `param get const.security.developermode.state` 须为 **true**，否则 `snapshot_record` 直接退出。 |
| **二进制位置（设备）** | 安装后通常在 **`/system/bin/snapshot_record`**；媒体进程加载 **`/system/lib/libmedia_service.z.so`**（视架构可能为 `lib64`）。 |

---

## 三、与 ohproj / ohhdc / ohservices 的关系

- **ohproj**：原生 HAP 工程流程；**系统镜像与 snapshot_record 无 HAP 依赖**，但 **`src/skills/ohproj/SKILL.md` 第十节** 汇总了本次系统侧改动的全文档。
- **ohhdc**：通用 `hdc shell` / 安装 HAP；**ohrecord.py** 专注 **snapshot_record + MP4 路径 + SELinux + 校验**。
- **ohservices / ohsa.py**：需要 **`dmesg` / 落盘 hilog / 多部件诊断** 时可配合使用。

---

## 四、文档与代码规范

- 修改须符合各部件既有 **MEDIA_LOG / CHECK_AND_RETURN** 等风格；SELinux 禁止为 `media_service` 增加违反 **`domain.te` neverallow** 的 **`data_file:file { create write }`**，应使用 **`data_test_media_file`** + 路径 **`/data/test/media`**。
- 具体文件列表与修改原因见 **`src/skills/ohproj/SKILL.md` §10.3**。
