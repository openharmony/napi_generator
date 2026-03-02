# IndexUitestTest "App died" 原因与修复说明

## 错误日志摘要（faultlog）

设备 faultlog 中 `jscrash-ohos.test.nativeproj46r-*.log` 显示：

- **Error name**: `ReferenceError`
- **Error message**: `cannot find record '&entry/src/mock/Libentry.mock&', please check the request path.'/data/storage/el1/bundle/entry/ets/modules.abc'.`

即：主应用进程（entry）在解析模块时，找不到 `entry/src/mock/Libentry.mock` 这条记录。

## 根本原因

1. **UI 测试会拉起主 Ability**  
   IndexUitestTest 在 `beforeAll` 里通过 `delegator.startAbility(want)` 启动 **EntryAbility**（主应用），主应用运行在 **entry 进程**，加载的是 **主 HAP** 的 `modules.abc`。

2. **测试框架注入了 mock 配置**  
   测试运行时会加载 `mock-config.json5`，把 `libentry.so` 映射到 mock 路径（原先为 `src/mock/Libentry.mock.ets` → 解析为 `entry/src/mock/Libentry.mock`）。  
   该配置会影响到“由测试拉起的”主应用进程，主应用在解析 `import testNapi from 'libentry.so'` 时，会按 mock 配置去加载 `entry/src/mock/Libentry.mock`。

3. **主 HAP 里没有这条 mock 记录**  
   主 HAP（entry-default）只编了 `src/main`，**没有**编 `src/mock`；mock 只存在于 **测试 HAP**（entry-ohosTest）的构建里。  
   因此 entry 进程的 `modules.abc` 里没有 `entry/src/mock/Libentry.mock`，解析失败 → **ReferenceError** → 进程崩溃 → 测试框架上报 “App died”。

## 修复方式

让“主 HAP 里也有 mock 模块”，并且让 mock 配置指向主 HAP 里会编进去的路径：

1. **在主模块中增加一份 mock 实现**  
   在 `entry/src/main/ets/mock/` 下新增 `Libentry.mock.ets`（与 `src/mock/Libentry.mock.ets` 实现一致），这样打主 HAP 时会把它编进 `entry` 的 `modules.abc`。

2. **修改 mock 配置指向主模块路径**  
   在 `entry/src/mock/mock-config.json5` 中，将 `libentry.so` 的 mock 源改为主模块下的路径：

   ```json5
   {
     "libentry.so": {
       "source": "src/main/ets/mock/Libentry.mock.ets"
   }
   }
   ```

   测试框架会按此路径解析（例如 `entry/src/main/ets/mock/Libentry.mock`），而该路径已包含在主 HAP 中，entry 进程即可正常加载 mock，不再报 ReferenceError，“App died” 消失。

## 验证

修复后需重新编译、签名、安装并跑 UI 测试：

```bash
python3 src/skills/ohhap/hapbuild.py build src/skills/ohhap/NativeProj46R
python3 src/skills/ohhap/hapbuild.py build-test src/skills/ohhap/NativeProj46R
python3 src/skills/ohhap/hapbuild.py sign src/skills/ohhap/NativeProj46R release
# 安装主 HAP 与测试 HAP 后执行：
python3 src/skills/ohhdc/ohhdc.py test ohos.test.nativeproj46r -m entry_test -s IndexUitestTest --timeout 30000
```

## 查看崩溃日志（便于后续排查）

- 列出 faultlog：  
  `python3 src/skills/ohhdc/ohhdc.py faultlog faultlogger`
- 查看本应用 jscrash：  
  `python3 src/skills/ohhdc/ohhdc.py faultlog --cat faultlogger/jscrash-ohos.test.nativeproj46r-*.log`
