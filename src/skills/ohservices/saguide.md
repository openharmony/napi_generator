# SystemAbility 开发全流程指南：创建、编译、调试、验证

本文档以 sampletest（SA ID 9009）为例，讲述在 OpenHarmony 上**创建 → 编译集成 → 部署 → 调试 → 验证（含 HiDumper）** 一个 SystemAbility 的完整流程与常见问题处理。

---

## 一、流程总览

```
创建 SA 目录与代码
       ↓
集成到构建与产品（白名单、产品配置、高权限、init、SELinux）
       ↓
编译镜像并验证产物
       ↓
烧录、重启设备
       ↓
确认进程运行（ps / hilog / ohsa.py）
       ↓
按需对接 HiDumper（Dump 实现 + SELinux get 权限）
       ↓
hidumper -s <SA_ID> 验证
```

---

## 二、创建阶段

### 2.1 确定 SA ID 与进程名

- 选用未占用的 **SA ID**（如 9009），与 `system_ability_definition.h` 及后续 profile 一致。
- 确定**进程名**（如 sampletest），与 init 配置中 service name、profile 中 process 一致。

### 2.2 目录结构（以 foundation/communication 为例）

```
foundation/communication/<sa_service>/
├── bundle.json
├── sa_profile/
│   ├── BUILD.gn
│   └── <said>.json              # 如 9009.json
└── services/<process_name>/
    ├── BUILD.gn
    ├── etc/init/
    │   ├── BUILD.gn
    │   └── <process_name>.cfg   # init 服务配置
    └── server/
        ├── BUILD.gn
        ├── include/
        │   ├── isampletest.h
        │   ├── *_stub.h, *_proxy.h
        │   ├── <service>.h       # 含 Dump 声明（若对接 HiDumper）
        │   └── <service>_ability_id.h  # #define SAMPLE_TEST_SA_ID 9009
        └── src/
            ├── <service>.cpp     # OnStart 里 Publish(this)，可选 Dump
            ├── *_stub.cpp
            └── *_proxy.cpp
```

### 2.3 sa_profile

- **9009.json** 要点：
  - `"process"`: 与 init 中 service name 一致（如 sampletest）。
  - `"systemability"` 数组中：`"name"` 为 SA ID（9009），`"libpath"` 为 so 名，`"run-on-create": true`，`"dump_level": 1`（供 HiDumper）。
- BUILD.gn 使用 `ohos_sa_profile` 模板，`sources = [ "9009.json" ]`，`part_name` 与部件名一致。

### 2.4 etc/init 配置

- **sampletest.cfg**：在 `post-fs-data` 的 `cmds` 中 `start sampletest`；`services` 中 name、path（`/system/bin/sa_main` + `/system/profile/sampletest.json`）、uid/gid、**secon**（如 `u:r:sampletest_service:s0`）必须与 SELinux 策略一致。
- BUILD.gn 使用 `ohos_prebuilt_etc` 将 cfg 安装到 `system/etc/init/`。

### 2.5 server 代码

- 继承 `SystemAbility` 与业务 Stub，使用 `REGISTER_SYSTEM_ABILITY_BY_ID(..., SA_ID, true)`。
- **OnStart()**：建议 `bool res = Publish(this);` 后打日志（如 `Sampletest started` / `Publish failed`），便于排查注册是否成功。
- 若需 **HiDumper**：在头文件声明 `int Dump(int fd, const std::vector<std::u16string> &args) override;`，在 cpp 中实现：对 fd 使用 `write` + `fsync` 写入内容，返回 `ERR_OK`。

---

## 三、编译与集成阶段

### 3.1 加入部件白名单

- **文件**：`build/indep_component_whitelist.json`
- **操作**：在对应 `component_name` 数组中增加部件名（如 `"sampletest_service"`）。

### 3.2 加入产品配置

- **文件**：如 `productdefine/common/inherit/rich.json`
- **位置**：对应子系统的 `components` 数组。
- **操作**：增加 `{ "component": "sampletest_service", "features": [] }`。

### 3.3 高权限进程白名单（uid 为 system/root 时必做）

- **文件**：产品目录下 `security_config/high_privilege_process_list.json`（如 rk3568：`vendor/hihope/rk3568/security_config/...`）。
- **操作**：在 `high_privilege_process_list` 中增加与 cfg 一致的 `{ "name": "sampletest", "uid": "system", "gid": ["system", "shell"] }`。
- **否则**：打包阶段 `process_field_validate.py` 报 “some services are not authenticated”。

### 3.4 init 加载 /etc/init/*.cfg（若当前产品未加载）

- **现象**：cfg 已安装到 `/system/etc/init/`，但 init 只读 `/etc` 下直接子文件。
- **修改**：`base/startup/init/services/init/init_config.c` 的 `ReadConfig()` 的 **else** 分支中，在 `ReadFileInDir("/etc", ".cfg", ...)` 之后增加：
  ```c
  ReadFileInDir("/etc/init", ".cfg", ParseInitCfg, NULL);
  ```

### 3.5 SELinux 策略（必做，否则 execv 或 samgr 报错）

按顺序完成：

1. **type.te**：`type sampletest_service, sadomain, domain;`
2. **init.te**：`allow init sampletest_service:process { rlimitinh siginh transition };`
3. **新建 sampletest_service.te**（如 `ohos_policy/communication/sampletest/system/`）：
   - `allow sampletest_service samain_exec:file { entrypoint execute map read };`
   - `allow sampletest_service samgr:binder { call transfer };`
   - `allow sampletest_service sa_sampletest_server:samgr_class { add };`
   - **HiDumper 可访问时**：`allow hidumper_service sa_sampletest_server:samgr_class { get };`
   - data_log 等：注意 **ioctl 必须用 allowxperm**，例如 `allowxperm sampletest_service data_log:file ioctl { 0x5413 };`
4. **service.te**：`type sa_sampletest_server, sa_service_attr;`
5. **service_contexts**：`9009 u:object_r:sa_sampletest_server:s0`
6. **domain_baseline.json**：在 `user.sadomain` 数组中增加 `"sampletest_service"`

编译期若 selinux_check 报 “allow … ioctl” 违规，改为 allow 不含 ioctl + allowxperm；若报 “sadomain baseline failed”，补全 domain_baseline.json。

---

## 四、编译与验证产物

### 4.1 编译命令

在源码根目录执行：

```bash
./build.sh --product-name rk3568
```

单编 SA 库示例：`./build.sh --product-name rk3568 --build-target sampletest_server`。

### 4.2 验证产物

编译成功后，在 `out/rk3568/packages/phone/system/` 下确认：

| 产物       | 路径 |
|------------|------|
| SA 库      | system/lib/libsampletest_server.z.so（或 lib64/） |
| SA profile | system/profile/sampletest.json |
| init 配置  | system/etc/init/sampletest.cfg |

可使用本技能脚本快速检查（另支持 `device-files`、`hilog-disk`、`dmesg`、`hidumper`、`diag` 等，见 SKILL.md「ohsa.py」小节）：

```bash
python3 src/skills/ohservices/ohsa.py build
python3 src/skills/ohservices/ohsa.py diag   # 设备综合诊断（需 hdc）
```

---

## 五、部署与运行确认

### 5.1 烧录与重启

使用产品既定方式烧录镜像并重启设备。

### 5.2 确认进程

- **命令行**：`hdc shell "ps -ef | grep -E 'sampletest|sa_main'"`
- **脚本**：`python3 src/skills/ohservices/ohsa.py device`

部分设备 ps 只显示进程名 sampletest，部分显示 `sa_main ... sampletest.json`，任一存在即可认为已拉起。

### 5.3 确认 Publish 是否成功

- 实时：`hdc shell "hilog | grep -i sampletest"`
- 落盘：设备上 `/data/log/hilog/` 或拉取后搜索 `Sampletest started` / `Publish failed`。

---

## 六、调试方法

### 6.1 进程未起来

1. **镜像内文件**：`hdc shell "ls -la /system/etc/init/sampletest.cfg /system/profile/sampletest.json /system/lib/libsampletest_server.z.so"`，缺则未烧录或未包含。
2. **init 未加载**：确认是否已做“第四步”在 init_config.c 中加载 `/etc/init/*.cfg`。
3. **execv/SELinux**：`hdc shell "dmesg | grep -iE 'sampletest|ServiceStart|execv|secon|avc'"`，按“第五步”补全 secon 与 SELinux 策略。
4. **手动拉起**（仅当 init 已注册服务）：`hdc shell "begetctl start_service sampletest"`。

### 6.2 hilog 与 dmesg

- **hilog 实时**：`hdc shell hilog`，可加 `| grep -i sampletest`。
- **hilog 落盘**：设备 `/data/log/hilog/`，可 `hdc pull /data/log/hilog/.  ./hilog_dump` 后本地搜索。
- **dmesg**：查 init 启动、execv 失败、SELinux 拒绝（如 `avc: denied`）。

### 6.3 HiDumper 报 “no such system ability” 的调试

- **落盘 hilog 搜索**（设备上或拉取后）：
  - `avc: denied { get } ... hidumper_service ... sa_sampletest_server ... samgr_class` → **get 被拒**：在 sampletest_service.te 增加 `allow hidumper_service sa_sampletest_server:samgr_class { get };`
  - `IsDistributedSa SA:9009 no Profile!`、`Publish failed`、`AddSystemAbilityInner selinux permission denied` → **未注册或 add 被拒**：检查 profile 部署与 sampletest 的 add 相关策略。

设备上快速搜 gz 示例：

```bash
hdc shell "zcat /data/log/hilog/hilog.*.gz 2>/dev/null | grep -E '9009|Sampletest|Publish|GetServiceCheck|CheckSystemAbilityInner|avc: denied'"
```

---

## 七、HiDumper 对接与验证

### 7.1 服务端 Dump 实现

- 在 SA 类中重写 `int Dump(int fd, const std::vector<std::u16string> &args) override;`
- 使用 `write(fd, ...)` + `fsync(fd)` 向 fd 写入内容，返回 `ERR_OK`。

### 7.2 hidumper 名称映射（可选）

若希望 `hidumper -s Sampletest` 可用，在 `base/hiviewdfx/hidumper/frameworks/native/dump_utils.cpp` 的 `saNameMap_` 中增加 `{ 9009, "Sampletest" }`。

### 7.3 SELinux：允许 hidumper 获取 SA

在 sampletest_service.te 中增加：

```selinux
allow hidumper_service sa_sampletest_server:samgr_class { get };
```

重编并烧录后执行：

```bash
hidumper -s 9009
# 或
hidumper -s Sampletest
```

应能正常调用 Dump 并输出内容。

---

## 八、常见问题与修复汇总

| 阶段     | 现象 | 修复 |
|----------|------|------|
| 编译     | BUILD.gn “Assignment had no effect” | 删除未使用变量 |
| 编译     | process_field_validate “not authenticated” | 高权限白名单增加该服务 |
| 编译     | selinux_check ioctl 违规 | allow 去掉 ioctl，改用 allowxperm |
| 编译     | sadomain baseline failed | domain_baseline.json 增加新域 |
| 运行     | 进程不存在，cfg 在镜像中 | init_config.c 增加 ReadFileInDir("/etc/init", ...) |
| 运行     | dmesg execv 失败 / secon / avc transition | 补全 secon 与 SELinux 五处（type、init、*.te、service、contexts、baseline） |
| HiDumper | no such system ability，SA 已注册 | 落盘搜 avc get + GetServiceCheck；增加 hidumper_service 对 sa_xxx 的 samgr_class get |
| HiDumper | no such system ability，SA 未注册 | 查 profile、Publish 日志、AddSystemAbilityInner 的 add 权限 |

---

## 九、参考

- 本技能 **SKILL.md**：sampletest 完整配置、**bundle.json**、**init.cfg / hilog.para** 落盘与参数、**修改清单与 HiDumper 调试汇总**、**startup_guard** 说明、**Publish 日志** 与 **get 之后 binder** 排查、ohsa.py 用法。
- 官方设计文档：`foundation/systemabilitymgr/safwk/SystemAbility_Design_And_Sample_zh.md`。

---

## 十、与 SKILL.md 分工（避免重复与遗漏）

| 主题 | saguide.md | SKILL.md |
|------|------------|----------|
| 线性全流程（创建→验证） | 主干 | 流程总览表 + 「与 saguide 对照：易遗漏环节」 |
| bundle.json、system_ability_definition.h | 目录树提及 | **专节 + 补缺表** |
| Publish 成功/失败 | §5.3 | **专节「确认是否已向 samgr 注册」** |
| 编译收尾 WARNING | 未展开 | **startup_guard / sampletest not in start cmd list** |
| hilog 落盘、init.cfg、hilog.para | 仅引用 hilog/dmesg | **完整示例与参数说明** |
| 修改文件清单、落盘 grep 命令 | §六、§八 | **大表 + 可复制命令** |
| HiDumper binder 后续 AVC | 未写 | **§ HiDumper 小节 C** |

阅读顺序建议：**先 saguide 走通一遍 → 再 SKILL 查配置与踩坑**。
