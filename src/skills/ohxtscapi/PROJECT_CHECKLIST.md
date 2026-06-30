# CAPI XTS 工程脚手架与 xtscheck 门禁清单

新建或提交 **无页面 libnativefunc** 类 CAPI 工程前逐项核对。实战来源：`ace_c_arkui_test_api26_systemmaterial`。

---

## 1. 工程结构（GN / Test.json）

| 检查项 | 正确做法 | 常见错误 |
|--------|----------|----------|
| GN 模板 | 仅 `ohos_js_app_suite("Acts*Test")` | 误留 `ohos_app_assist_suite` + `deps` |
| 辅助 HAP | **无依赖时不配置** assist suite | 从 parallelize 模板拷贝遗留 |
| `Test.json` kits | 仅安装 `Acts*Test.hap` | 同时安装主包 HAP（已无 assist 时多余） |
| `subsystem_name` / `part_name` | `arkui` / `ace_engine` | 缺省 |
| CMake | 仅编 `nativefunc` 与被测 `.cpp` | 拷贝 `nativerender`、无关组件目录 |

**判断是否需要 assist HAP**：`Test.json` 与设备跑测是否**仅安装测试 HAP 即可 Pass**。若是，删除 `ohos_app_assist_suite` 及 `deps`。

---

## 2. 版权与 Git 忽略

| 检查项 | 要求 |
|--------|------|
| 新增文件版权 | `Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.` |
| `.gitignore` | 含 `local.properties`、`autosign/`、`**/build`、`oh_modules`、`.cxx` |
| 提交规范 | **`xts-git-commit`**：`-sm`、`Co-authored-by: Agent`、单笔 <2000 行 |

---

## 3. Hypium ETS（xtscheck 致命项）

规则详见 xts_acts 仓 **`miscellaneous/xts_code_check.md`**（`xtscheck` 项）。

### 3.1 文档注释（禁止 forEach 动态注册）

- 每条用例 **`/** @tc.* */` 必须紧邻下一行 `it()`**，中间**不能有空行**
- **禁止** `cases.forEach((name) => it(name, ...))` — xtscheck 无法解析动态 `it`
- `@tc.name` 与 `@tc.number` **保持一致**，以 **`SUB_*` 编号**为准（与 `it()` 第一个参数相同）
- `@tc.desc` / `@tc.level` 必填；参数名与值之间**仅空格**，禁止 `@tc.name:` 冒号写法

### 3.2 describe 结构

- **一个测试套件文件 → 一个 `describe`**（套件名与文件名对应，如 `ImmersiveMaterialTest`）
- 断言逻辑可抽 `runCase(nativeFuncName, done)`；`it()` 名用 `SUB_*`，`runCase` 仍传 C++ 注册名

### 3.3 正确示例

```typescript
function runCase(nativeName: string, done: Function): void {
  expect(nativeFunc[nativeName]()).assertEqual(0);
  done();
}

export default function immersiveMaterialTest() {
  describe('ImmersiveMaterialTest', () => {
    beforeEach(async (done: Function) => {
      await Utils.sleep(100);
      done();
    });

    /**
     * @tc.name   SUB_ARKUI_CAPI_SYSTEMMATERIAL_0100
     * @tc.number SUB_ARKUI_CAPI_SYSTEMMATERIAL_0100
     * @tc.desc   Verify immersive style enum constant values
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('SUB_ARKUI_CAPI_SYSTEMMATERIAL_0100', Level.LEVEL1, async (done: Function) => {
      runCase('testImmersiveStyleEnumValues001', done);
    });
  });
}
```

---

## 4. 编签与跑测

```bash
source use-ohos-sdk.sh normal
unset OHOS_USE_HVIGOR_STATIC
source <signing-materials>/env.sh          # OHOS_HAPSIGNER_RESULT 指向证书源目录

python3 src/skills/ohxtscapi/ohxtscflow.py build-all <工程路径>
python3 src/skills/ohxtscapi/ohxtscflow.py deploy-test <工程路径> -s <Suite> -m entry_test
```

- CAPI 动态工程：`build-all` = **主包 build（编 native .so）+ build-test + sign**
- 新批次务必 **`-s` 指定套件**；多套件逗号分隔（如 `SuiteA,SuiteB`）时 **ohhdc 分次 deploy-test**
- **禁止**单次 unittest 将多个 class 拼在同一 `-s class` 参数（设备会挂起直至超时）

---

## 5. PR 前 CodeCheck

1. 读本清单 + **`miscellaneous/xts_code_check.md`**
2. 确认 `@tc.name` / `@tc.number` / `it()` 三一致
3. `git diff --cached --shortstat` < 2000
4. 无 `build/`、`autosign/`、`local.properties` 入暂存

---

## 6. 模板裁剪（从 parallelize 等拷贝时）

删除与本次 API **无关**的目录，避免重复提交与 CMake 膨胀：

- `nativerender/`、各 `*Test/` 平行化组件目录
- 未使用的 `ohosTest/ets/test/*` 套件
- Hypium `Utils.ets` 仅保留本批需要的 helper（如 `sleep`）
