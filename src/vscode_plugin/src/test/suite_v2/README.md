# suite_v2（B0 / B1）

独立于原 `src/test/suite` 的新测试树。原 suite **不修改用例**；`suite/index` 仅加载 `suite/**`。

## B0（已落地）

| 项 | 位置 |
|----|------|
| N_CL = 183726 冻结 | `constants.ts` |
| T 展开公式 | `catalog/expand.ts`（`expandTCrossB1`） |
| count gate | `tools/count_gate.ts` → `npm run suite_v2:count` |
| 说明 | `../design/B0_B1_落地说明.md` |

## B1（已落地）

- 表驱动 PRI/CTR（+ 轻量 C2）展开，**P/G/I 每套 ≥ 50,000**
- 每条用例带 commonlibrary 风格 `@tc.number/name/desc/size/type/level` + `@pair`
- 目录：`parse/` · `gen/` · `integration/`
- 可选落盘分片（物理注释）：`npm run suite_v2:generate` → `out/test/suite_v2/generated/`

## 命令

```bash
npm run compile
npm run suite_v2:count          # B1 数量门禁
npm run suite_v2:generate       # 生成带 @tc 注释的 .test.js 分片
npm run test:v2                 # 默认 SUITE_V2_SMOKE=200 冒烟
set SUITE_V2_SMOKE=             # 清空后全量（很慢）
npm run test:v2:full
```

## 环境变量

| 变量 | 含义 |
|------|------|
| `SUITE_V2_SMOKE` | 每套只注册前 N 条（冒烟） |
| `SUITE_V2_USE_GENERATED=1` | 跑 `generated/**` 落盘分片而非表驱动入口 |
| `SUITE_V2_GATE=b2` | count_gate 按终态 N_CL 门槛（默认 b1） |
