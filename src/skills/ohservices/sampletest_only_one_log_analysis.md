# 为何只有一条和 sampletest 相关的日志

## 结论（先答）

- **不是崩溃**：faultlog 下无 sampletest/sa_main 崩溃记录。
- **那一条日志不是 sampletest 进程打的**：是 **AccessTokenManager（ATM）** 在启动时加载「原生进程 token 列表」时打印的；列表里带 `process name sampletest` 是因为**编译/配置里把 sampletest 加入了原生 token 配置**，和**进程是否真的被拉起、是否在跑**无关。
- **sampletest 进程自身没有任何 HiLog**（没有 "Sampletest()"、"OnStart()"、"Sampletest started"），说明要么 **init 从未执行过 `start sampletest`**（例如当前镜像里 init 未加载 `/etc/init`），要么 **exec 后进程在跑到我们代码之前就退出了**（例如 so 加载失败、依赖缺失）。

---

## 1. 那一条日志从哪来

日志内容：

```text
03-18 17:29:48.841   391   397 I C05a01/ATM: [InitNativeTokenInfos]Init native token 671716417 process name sampletest, permSize 0 ok!
```

- 出处：`base/security/access_token/services/accesstokenmanager/.../accesstoken_info_manager.cpp` 里 `InitNativeTokenInfos()` 的 LOGI。
- 含义：ATM 在**启动时**从策略里读取「原生进程 token 列表」，对列表里每一项（包括 process name = sampletest）做 token 初始化并打这条 log。
- 列表来源：构建/配置阶段生成（如与 high_privilege_process_list 或 native token 配置合并），**不是**因为当时有一个叫 sampletest 的进程在跑。所以：**只要配置里带了 sampletest，就会有这一条；和 sampletest 进程有没有起来无关。**

---

## 2. 为何没有 sampletest 服务自己的日志

sampletest 服务里会打：

- 构造函数：`"Sampletest()"`
- OnStart：`"OnStart()"`、`"Sampletest started"` 或 `"Publish failed"`

这些都在 `foundation/communication/sampletest_service/.../sampletest.cpp` 里，用的是 HiLog，tag 为 `Sampletest`。  
落盘 hilog 里**完全没有**这些内容，说明：

- 要么 **sampletest 进程从未被 exec**（init 没执行 `start sampletest`）；
- 要么 **exec 后进程在进入我们代码之前就退出了**（例如动态链接/加载 so 失败、缺少依赖、权限等），所以连构造函数里的第一条 HiLog 都没机会打。

---

## 3. 是否崩溃

- `/data/log/faultlog/faultlogger/`、`/data/log/faultlog/temp/` 下无与 sampletest / sa_main 相关的崩溃文件。
- 因此当前没有证据表明是**崩溃**导致只看到一条日志；更像是**进程从未正常跑到我们代码**。

---

## 4. 最可能原因

结合之前修改（在 init 的 ReadConfig 里增加 `ReadFileInDir("/etc/init", ".cfg", ...)` 才会在正常启动时加载 `/etc/init/*.cfg`）：

- **设备当前运行的很可能仍是「未包含该修改」的旧镜像**，init 在正常启动分支**没有**加载 `/etc/init/sampletest.cfg`，因此从未执行 `start sampletest`，sampletest 进程从未被拉起。
- 于是：只有「配置里带了 sampletest」带来的那一条 ATM 日志；没有任何 sampletest 进程的日志；也没有崩溃记录。

---

## 5. 建议排查步骤

1. **确认烧录的是「修改 init 后」重新编译的镜像**  
   确保 `base/startup/init/services/init/init_config.c` 的 else 分支里包含：  
   `ReadFileInDir("/etc/init", ".cfg", ParseInitCfg, NULL);`  
   然后重新烧录并重启。

2. **看 init 是否真的尝试启动 sampletest**  
   init 的日志在 **/dev/kmsg**（dmesg），不在 hilog。可在重启后抓：  
   ```bash
   hdc shell "dmesg | grep -i sampletest"
   # 或
   hdc shell "dmesg | grep -i ServiceStart"
   ```  
   若能看到 `ServiceStart starting:sampletest` / `ServiceStart started info sampletest`，说明 init 有执行 start；若完全没有，说明 cfg 仍未被加载（或用的仍是旧 init）。

3. **若 init 有 start 但进程仍无 HiLog**  
   再考虑 exec 后、进我们代码前失败（如 so/依赖问题），可抓 dmesg 或 init 的 ERROR 日志看是否有 exec 失败、路径无效等报错。
