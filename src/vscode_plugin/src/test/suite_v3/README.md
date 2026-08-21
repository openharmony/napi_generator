# suite_v3（commonlibrary 风格物理 it）

独立于 `suite` / `suite_v2`。每条用例是物理 `it`，上方带完整 `@tc.*` 注释；**it 体内逐步展开断言**（构造源码 → 调用 API → assert），禁止 `runXxxCase` 封装。

## 布局

```
suite_v3/
  parse|gen|integration/types/{bucket}/as_{context}.*.test.ts   # 子集（入库）
  bulk/parse|gen|integration/types/...                          # 全量（gitignore）
  tools/generate.ts
  harness/                                                      # 复用 suite_v2 断言与 @tc 格式
```

## 命令

```bash
npm run suite_v3:generate        # 默认 LIMIT=300 子集 → types/
npm run suite_v3:generate:full   # 全量 → bulk/（.js，不进 tsc）
npm run suite_v3:count           # 统计 it( 数量
npm run test:v3                  # 跑子集
set SUITE_V3_USE_BULK=1&& npm run test:v3   # 跑 bulk（需先 generate:full）
```

## 环境变量

| 变量 | 含义 |
|------|------|
| `SUITE_V3_GENERATE_LIMIT` | 截断共享表条数；默认 300；`all`/`0` 全量 |
| `SUITE_V3_USE_BULK=1` | 测试加载 `bulk/**` |
