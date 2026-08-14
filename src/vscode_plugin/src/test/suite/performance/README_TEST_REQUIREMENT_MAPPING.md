# 测试用例与交付需求逐条映射

> 口径说明：
> - 已纳入 `performance` 目录下全部性能测试文件：dts2cpp（`conversion_ts*`）、C Parse（`conversion_c*`，h2dts/h2dtscpp 共用同一 `parseHeaderFile`）、H2DTS Gen（`conversion_h2dts_gen*`）、H2DTSCPP Gen（`conversion_h2dtscpp_gen*`）。
> - 每条 `test(...)` 均给出"主归属（2/3/4）+ 具体功能描述"：**2** = dts2cpp 链路、**3** = h2dts 链路、**4** = h2dtscpp 链路；C Parse 用例标注 `3/4`（h2dts 与 h2dtscpp 共用同一 parse 层）。
> - 功能描述取自各用例 `@tc.desc`。
> - 性能阈值：`PARSE_LOOP = 10`，`PARSE_TOTAL_MS = 6000`（单用例 10 次解析/生成总耗时 ≤ 6s）。

## 覆盖统计

- 纳入测试文件数：**111**
- 纳入用例总数：**4501**（dts2cpp 2289 + C Parse 1975 + H2DTS Gen 185 + H2DTSCPP Gen 52）
- 统计方式：扫描所有 `*.test.ts` 文件中的 `test(...)` 声明（与 `@tc.number` 逐块一一对应，全量查重 0 重名）。

## 文件纳入清单

| 序号 | 测试文件 | 纳入用例数 |
| --- | --- | ---: |
| 1 | `conversion_tsunion.part01.test.ts` | 30 |
| 2 | `conversion_tsunion.part02.test.ts` | 30 |
| 3 | `conversion_tsunion.part03.test.ts` | 29 |
| 4 | `conversion_tsunion.part04.test.ts` | 30 |
| 5 | `conversion_tsunion.part05.test.ts` | 31 |
| 6 | `conversion_tsunion.part06.test.ts` | 35 |
| 7 | `conversion_tsunion.part07.test.ts` | 25 |
| 8 | `conversion_tsunion.part08.test.ts` | 50 |
| 9 | `conversion_tsunion.part09.test.ts` | 50 |
| 10 | `conversion_tsunion.part10.test.ts` | 50 |
| 11 | `conversion_tsunion.part11.test.ts` | 58 |
| 12 | `conversion_tsunion.part12.test.ts` | 58 |
| 13 | `conversion_tsunion.part13.test.ts` | 58 |
| 14 | `conversion_tsenum.part01.test.ts` | 29 |
| 15 | `conversion_tsenum.part02.test.ts` | 28 |
| 16 | `conversion_tsenum.part03.test.ts` | 95 |
| 17 | `conversion_tsenum.part04.test.ts` | 95 |
| 18 | `conversion_tsenum.part05.test.ts` | 94 |
| 19 | `conversion_tsenum.part06.test.ts` | 8 |
| 20 | `conversion_tsclass.part01.test.ts` | 26 |
| 21 | `conversion_tsclass.part02.test.ts` | 25 |
| 22 | `conversion_tsclass.part03.test.ts` | 87 |
| 23 | `conversion_tsclass.part04.test.ts` | 87 |
| 24 | `conversion_tsclass.part05.test.ts` | 85 |
| 25 | `conversion_tsclass.part06.test.ts` | 15 |
| 26 | `conversion_tsstruct.part01.test.ts` | 24 |
| 27 | `conversion_tsstruct.part02.test.ts` | 24 |
| 28 | `conversion_tsstruct.part03.test.ts` | 87 |
| 29 | `conversion_tsstruct.part04.test.ts` | 87 |
| 30 | `conversion_tsstruct.part05.test.ts` | 85 |
| 31 | `conversion_tsstruct.part06.test.ts` | 10 |
| 32 | `conversion_tsfunc.part01.test.ts` | 35 |
| 33 | `conversion_tsfunc.part02.test.ts` | 27 |
| 34 | `conversion_tsfunc.part03.test.ts` | 50 |
| 35 | `conversion_tsfunc.part04.test.ts` | 50 |
| 36 | `conversion_tsfunc.part05.test.ts` | 90 |
| 37 | `conversion_tsfunc.part06.test.ts` | 90 |
| 38 | `conversion_tsfunc.part07.test.ts` | 90 |
| 39 | `conversion_tsfunc.part08.test.ts` | 39 |
| 40 | `conversion_tstype.part01.test.ts` | 19 |
| 41 | `conversion_tstype.part02.test.ts` | 19 |
| 42 | `conversion_tstype.part03.test.ts` | 82 |
| 43 | `conversion_tstype.part04.test.ts` | 82 |
| 44 | `conversion_tstype.part05.test.ts` | 81 |
| 45 | `conversion_tstype.part06.test.ts` | 10 |
| 46 | `conversion_cfunc.part01.test.ts` | 42 |
| 47 | `conversion_cfunc.part02.test.ts` | 42 |
| 48 | `conversion_cfunc.part03.test.ts` | 41 |
| 49 | `conversion_cfunc.part04.test.ts` | 60 |
| 50 | `conversion_cfunc.part05.test.ts` | 57 |
| 51 | `conversion_cfunc.part06.test.ts` | 57 |
| 52 | `conversion_cfunc.part07.test.ts` | 54 |
| 53 | `conversion_cfunc.part08.test.ts` | 53 |
| 54 | `conversion_cfunc.part09.test.ts` | 53 |
| 55 | `conversion_cfunc.part10.test.ts` | 52 |
| 56 | `conversion_cfunc.part11.test.ts` | 48 |
| 57 | `conversion_cfunc.part12.test.ts` | 52 |
| 58 | `conversion_cfunc.part13.test.ts` | 55 |
| 59 | `conversion_cfunc.part14.test.ts` | 45 |
| 60 | `conversion_cfunc.part15.test.ts` | 28 |
| 61 | `conversion_cfunc.part16.test.ts` | 58 |
| 62 | `conversion_cfunc.part17.test.ts` | 58 |
| 63 | `conversion_cfunc.part18.test.ts` | 58 |
| 64 | `conversion_cfunc.part19.test.ts` | 54 |
| 65 | `conversion_cfunc.part20.test.ts` | 53 |
| 66 | `conversion_cfunc.part21.test.ts` | 53 |
| 67 | `conversion_cfunc.part22.test.ts` | 53 |
| 68 | `conversion_cfunc.part23.test.ts` | 26 |
| 69 | `conversion_cclass.part01.test.ts` | 27 |
| 70 | `conversion_cclass.part02.test.ts` | 37 |
| 71 | `conversion_cclass.part03.test.ts` | 37 |
| 72 | `conversion_cclass.part04.test.ts` | 36 |
| 73 | `conversion_cclass.part05.test.ts` | 31 |
| 74 | `conversion_cclass.part06.test.ts` | 12 |
| 75 | `conversion_cclass.part07.test.ts` | 27 |
| 76 | `conversion_cclass.part08.test.ts` | 30 |
| 77 | `conversion_cclass.part09.test.ts` | 10 |
| 78 | `conversion_cstruct.part01.test.ts` | 20 |
| 79 | `conversion_cstruct.part02.test.ts` | 41 |
| 80 | `conversion_cstruct.part03.test.ts` | 41 |
| 81 | `conversion_cstruct.part04.test.ts` | 27 |
| 82 | `conversion_cstruct.part05.test.ts` | 40 |
| 83 | `conversion_cstruct.part06.test.ts` | 6 |
| 84 | `conversion_cstruct.part07.test.ts` | 10 |
| 85 | `conversion_cenum.part01.test.ts` | 27 |
| 86 | `conversion_cenum.part02.test.ts` | 41 |
| 87 | `conversion_cenum.part03.test.ts` | 30 |
| 88 | `conversion_cenum.part04.test.ts` | 24 |
| 89 | `conversion_cenum.part05.test.ts` | 21 |
| 90 | `conversion_cenum.part06.test.ts` | 19 |
| 91 | `conversion_cenum.part07.test.ts` | 17 |
| 92 | `conversion_cenum.part08.test.ts` | 16 |
| 93 | `conversion_cenum.part09.test.ts` | 15 |
| 94 | `conversion_cenum.part10.test.ts` | 19 |
| 95 | `conversion_cenum.part11.test.ts` | 24 |
| 96 | `conversion_cunion.part01.test.ts` | 14 |
| 97 | `conversion_cunion.part02.test.ts` | 40 |
| 98 | `conversion_cunion.part03.test.ts` | 33 |
| 99 | `conversion_cunion.part04.test.ts` | 12 |
| 100 | `conversion_cnamespace.part01.test.ts` | 7 |
| 101 | `conversion_cnamespace.part02.test.ts` | 32 |
| 102 | `conversion_h2dts_gen.part01.test.ts` | 14 |
| 103 | `conversion_h2dts_gen.part02.test.ts` | 49 |
| 104 | `conversion_h2dts_gen.part03.test.ts` | 39 |
| 105 | `conversion_h2dts_gen.part04.test.ts` | 36 |
| 106 | `conversion_h2dts_gen.part05.test.ts` | 24 |
| 107 | `conversion_h2dts_gen.part06.test.ts` | 23 |
| 108 | `conversion_h2dtscpp_gen.part01.test.ts` | 10 |
| 109 | `conversion_h2dtscpp_gen.part02.test.ts` | 21 |
| 110 | `conversion_h2dtscpp_gen.part03.test.ts` | 11 |
| 111 | `conversion_h2dtscpp_gen.part04.test.ts` | 10 |

## 用例逐条映射总表

| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |
| --- | --- | --- | --- | --- | --- |
| 1 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0001` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0001 = string | number` 的解析结果与性能。 |
| 2 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0002` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0002 = string | boolean` 的解析结果与性能。 |
| 3 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0003` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0003 = number | boolean` 的解析结果与性能。 |
| 4 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0004` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0004 = string | any` 的解析结果与性能。 |
| 5 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0005` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0005 = string | unknown` 的解析结果与性能。 |
| 6 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0006` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0006 = string | never` 的解析结果与性能。 |
| 7 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0007` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0007 = string | null` 的解析结果与性能。 |
| 8 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0008` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0008 = string | undefined` 的解析结果与性能。 |
| 9 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0009` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0009 = string | null | undefined` 的解析结果与性能。 |
| 10 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0010` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0010 = string | symbol` 的解析结果与性能。 |
| 11 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0011` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0011 = bigint | number` 的解析结果与性能。 |
| 12 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0012` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0012 = object | string` 的解析结果与性能。 |
| 13 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0013` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0013 = "left" | "right" | "center"` 的解析结果与性能。 |
| 14 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0014` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0014 = "success" | "error" | 0` 的解析结果与性能。 |
| 15 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0015` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0015 = -1 | 0 | 1` 的解析结果与性能。 |
| 16 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0016` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0016 = true | false` 的解析结果与性能。 |
| 17 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0017` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0017 = 1 | 2 | 3 | 4 | 5` 的解析结果与性能。 |
| 18 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0018` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0018 = string | number[]` 的解析结果与性能。 |
| 19 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0019` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0019 = string[] | number[]` 的解析结果与性能。 |
| 20 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0020` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0020 = Array<string> | Array<number>` 的解析结果与性能。 |
| 21 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0021` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0021 = string[] | Array<number>` 的解析结果与性能。 |
| 22 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0022` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0022 = ReadonlyArray<string> | ReadonlyArray<number>` 的解析结果与性能。 |
| 23 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0023` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0023 = Array<string | number> | boolean[]` 的解析结果与性能。 |
| 24 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0024` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0024 = Set<string> | Set<number>` 的解析结果与性能。 |
| 25 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0025` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0025 = Set<string> | string[]` 的解析结果与性能。 |
| 26 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0026` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0026 = ReadonlySet<string> | Set<string>` 的解析结果与性能。 |
| 27 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0027` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0027 = WeakSet<object> | Set<object>` 的解析结果与性能。 |
| 28 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0028` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0028 = [string, number] | [boolean]` 的解析结果与性能。 |
| 29 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0029` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0029 = [string, number] | string[]` 的解析结果与性能。 |
| 30 | `conversion_tsunion.part01.test.ts` | `dts2cpp_union_0030` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0030 = [number, string] | [string, number]` 的解析结果与性能。 |
| 31 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0031` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0031 = readonly [string, number] | [string, number]` 的解析结果与性能。 |
| 32 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0032` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0032 = [string, ...number[]] | string[]` 的解析结果与性能。 |
| 33 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0033` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0033 = Map<string, number> | Map<string, boolean>` 的解析结果与性能。 |
| 34 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0034` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0034 = Map<string, any> | Record<string, number>` 的解析结果与性能。 |
| 35 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0035` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0035 = Record<string, string> | Record<string, number>` 的解析结果与性能。 |
| 36 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0036` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0036 = ReadonlyMap<string, number> | Map<string, number>` 的解析结果与性能。 |
| 37 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0037` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0037 = WeakMap<object, string> | Map<object, string>` 的解析结果与性能。 |
| 38 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0038` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0038 = Map<string, number[]> | Record<string, number[]>` 的解析结果与性能。 |
| 39 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0039` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0039 = boolean | ((s: string) => boolean)` 的解析结果与性能。 |
| 40 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0040` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0040 = (() => string) | (() => number)` 的解析结果与性能。 |
| 41 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0041` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0041 = ((value: string) => void) | ((value: number) => void)` 的解析结果与性能。 |
| 42 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0042` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0042 = Promise<string> | Promise<number>` 的解析结果与性能。 |
| 43 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0043` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0043 = Promise<string> | string` 的解析结果与性能。 |
| 44 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0044` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0044 = PromiseLike<string> | Promise<string>` 的解析结果与性能。 |
| 45 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0045` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0045 = Array<Map<string, number>> | Map<string, number[]>` 的解析结果与性能。 |
| 46 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0046` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0046 = Set<string[]> | Array<Set<string>>` 的解析结果与性能。 |
| 47 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0047` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0047 = Map<string, Set<number>> | Set<Map<string, number>>` 的解析结果与性能。 |
| 48 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0048` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0048 = [Map<string, number>, Set<boolean>] | Array<string>` 的解析结果与性能。 |
| 49 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0049` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0049 = number[] | Set<number> | Map<string, number>` 的解析结果与性能。 |
| 50 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0050` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0050 = [number, string] | Map<number, string> | Set<[number, string]>` 的解析结果与性能。 |
| 51 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0051` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0051 = string | number | boolean | null | undefined` 的解析结果与性能。 |
| 52 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0052` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0052 = string[] | Set<string> | Map<string, string> | [string]` 的解析结果与性能。 |
| 53 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0053` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0053 = Options | "auto"` 的解析结果与性能。 |
| 54 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0054` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0054 = Success | Failure` 的解析结果与性能。 |
| 55 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0055` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0055 = Circle | Square` 的解析结果与性能。 |
| 56 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0056` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0056 = Base | Derived` 的解析结果与性能。 |
| 57 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0057` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0057 = Status | string` 的解析结果与性能。 |
| 58 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0058` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0058 = UserId | OrderId` 的解析结果与性能。 |
| 59 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0059` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0059 = T[] | Set<T>` 的解析结果与性能。 |
| 60 | `conversion_tsunion.part02.test.ts` | `dts2cpp_union_0060` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0060 = Array<Options> | Map<string, Options>` 的解析结果与性能。 |
| 61 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0061` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0061 = { id: number } | { name: string }` 的解析结果与性能。 |
| 62 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0062` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0062 = { type: "text"; value: string } | { type: "count"; value: number }` 的解析结果与性能。 |
| 63 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0063` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0063 = { readonly id: number } | null` 的解析结果与性能。 |
| 64 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0064` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0064 = keyof Options | "auto"` 的解析结果与性能。 |
| 65 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0065` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0065 = Options[keyof Options] | null` 的解析结果与性能。 |
| 66 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0066` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0066 = typeof DEFAULT_VALUE | number` 的解析结果与性能。 |
| 67 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0067` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0067 = Date | RegExp` 的解析结果与性能。 |
| 68 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0068` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0068 = Error | string` 的解析结果与性能。 |
| 69 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0069` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0069 = ArrayBuffer | Uint8Array` 的解析结果与性能。 |
| 70 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0070` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0070 = Int8Array | Uint8Array` 的解析结果与性能。 |
| 71 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0071` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0071 = number | `${number}px`` 的解析结果与性能。 |
| 72 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0072` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0072 = `get${string}` | `set${string}`` 的解析结果与性能。 |
| 73 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0073` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0073 = string & { readonly brand: unique symbol } | number` 的解析结果与性能。 |
| 74 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0074` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0074 = (string & {}) | number` 的解析结果与性能。 |
| 75 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0075` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0075 = Partial<Options> | Required<Options>` 的解析结果与性能。 |
| 76 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0076` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0076 = Pick<Options, "width"> | Omit<Options, "width">` 的解析结果与性能。 |
| 77 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0077` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0077 = Readonly<Options> | Options` 的解析结果与性能。 |
| 78 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0078` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0078 = Record<"a" | "b", number> | Map<string, number>` 的解析结果与性能。 |
| 79 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0079` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0079 = NonNullable<string | null> | number` 的解析结果与性能。 |
| 80 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0080` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0080 = Exclude<string | number, string> | boolean` 的解析结果与性能。 |
| 81 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0081` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0081 = Extract<string | number, string> | boolean` 的解析结果与性能。 |
| 82 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0082` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0082 = Awaited<Promise<string>> | number` 的解析结果与性能。 |
| 83 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0083` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0083 = ReturnType<() => string> | number` 的解析结果与性能。 |
| 84 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0084` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0084 = Parameters<(s: string) => void> | [number]` 的解析结果与性能。 |
| 85 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0085` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0085 = ConstructorParameters<ErrorConstructor> | [string]` 的解析结果与性能。 |
| 86 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0086` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0086 = InstanceType<typeof Error> | string` 的解析结果与性能。 |
| 87 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0087` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0087 = ThisParameterType<(this: Date) => void> | string` 的解析结果与性能。 |
| 88 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0088` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0088 = Uppercase<"a"> | Lowercase<"B">` 的解析结果与性能。 |
| 89 | `conversion_tsunion.part03.test.ts` | `dts2cpp_union_0089` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0089 = Capitalize<"name"> | Uncapitalize<"Title">` 的解析结果与性能。 |
| 90 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0090` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0090 = '${EmailLocaleIDs | FooterLocaleIDs}_id';` 的解析结果与性能。 |
| 91 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0091` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0091 = Awaited<boolean | Promise<number>>;` 的解析结果与性能。 |
| 92 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0092` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `interface Todo { title: string; completed: boolean; createdAt: number; }` 的解析结果与性能。 |
| 93 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0093` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `interface Todo { title: string; completed: boolean; createdAt: number; }` 的解析结果与性能。 |
| 94 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0094` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0094 = Exclude<"a" | "b" | "c", "a">;` 的解析结果与性能。 |
| 95 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0095` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0095 = Extract<"a" | "b" | "c", "a" | "f">;` 的解析结果与性能。 |
| 96 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0096` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0096 = NonNullable<string | number | undefined>;` 的解析结果与性能。 |
| 97 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0097` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0097 = boolean | (s: string) => boolean;` 的解析结果与性能。 |
| 98 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0098` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0098 = string | undefined & null;` 的解析结果与性能。 |
| 99 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0099` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0099 = (string | number) | boolean;` 的解析结果与性能。 |
| 100 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0100` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0100 = void | string;` 的解析结果与性能。 |
| 101 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0101` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0101 = (Map<string, number> | Record<string, number>) | Set<string>;` 的解析结果与性能。 |
| 102 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0102` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0102 = "a" | "b" | "c" | "d" | "e" | "f";` 的解析结果与性能。 |
| 103 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0103` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `declare function f1(): { a: number; b: string };` 的解析结果与性能。 |
| 104 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0104` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0106 = ConstructorParameters<ErrorConstructor>;` 的解析结果与性能。 |
| 105 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0105` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `declare function f1(): { a: number; b: string };` 的解析结果与性能。 |
| 106 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0106` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `class C { x = 0; y = 0; }` 的解析结果与性能。 |
| 107 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0107` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0115 = Exclude<"a" | "b" | "c", "a"> | Exclude<"x" | "y", "x">;` 的解析结果与性能。 |
| 108 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0108` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0116 = Extract<string | number | (() => void), Function> | string;` 的解析结果与性能。 |
| 109 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0109` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0117 = NonNullable<string[] | null | undefined> | number;` 的解析结果与性能。 |
| 110 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0110` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0118 = Awaited<Promise<string> | Promise<number>> | boolean;` 的解析结果与性能。 |
| 111 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0111` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0119 = 'T_${EmailLocaleIDs | FooterLocaleIDs}_id';` 的解析结果与性能。 |
| 112 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0112` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0120 = Readonly<[string, number]> | [number, string];` 的解析结果与性能。 |
| 113 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0113` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0121 = readonly (string | number)[] | Array<string | number>;` 的解析结果与性能。 |
| 114 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0114` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0122 = WeakRef<object> | FinalizationRegistry<object>;` 的解析结果与性能。 |
| 115 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0115` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0123 = DataView | Uint8ClampedArray | Float64Array;` 的解析结果与性能。 |
| 116 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0116` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0124 = unique symbol | typeof Symbol.iterator;` 的解析结果与性能。 |
| 117 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0117` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0125 = import("node:fs").Stats | string;` 的解析结果与性能。 |
| 118 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0118` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0126 = { [K in "a" | "b"]: number } | Record<string, never>;` 的解析结果与性能。 |
| 119 | `conversion_tsunion.part04.test.ts` | `dts2cpp_union_0119` | 性能测试 | 2 | dts2cpp union type alias 补充用例 `type UnionType0127 = ((...args: never[]) => void) | ((value: string) => number);` 的解析结果与性能。 |
| 120 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0120` | 性能测试 | 2 | dts2cpp union type alias Exclude 批量（3 个 type，对齐 parsetsunion test_16） |
| 121 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0121` | 性能测试 | 2 | dts2cpp union type alias Parameters 全量批量 T0-T7（对齐 parsetsunion test_19） |
| 122 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0122` | 性能测试 | 2 | dts2cpp union type alias ReturnType 全量批量 T0-T8（对齐 parsetsunion test_21） |
| 123 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0123` | 性能测试 | 2 | dts2cpp union type alias ConstructorParameters 全量批量（对齐 parsetsunion test_20） |
| 124 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0124` | 性能测试 | 2 | dts2cpp union type alias InstanceType 全量批量（对齐 parsetsunion test_22） |
| 125 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0125` | 性能测试 | 2 | dts2cpp union type alias Extract 批量（对齐 parsetsunion test_17） |
| 126 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0126` | 性能测试 | 2 | dts2cpp union type alias NonNullable 批量（对齐 parsetsunion test_18） |
| 127 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0127` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0154 = Float32Array | Float64Array | Int16Array | Int32Array` 的解析结果与性能。 |
| 128 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0128` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0155 = Generator<string, number, boolean> | AsyncGenerator<string, number, boolean>` 的解析结果与性能。 |
| 129 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0129` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0156 = Iterator<string> | Iterable<string> | IterableIterator<string>` 的解析结果与性能。 |
| 130 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0130` | 性能测试 | 2 | dts2cpp union type alias 接口判别联合 Node | Leaf | Branch 的解析结果与性能。 |
| 131 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0131` | 性能测试 | 2 | dts2cpp union type alias enum + 字面量 + 模板字面量联合 的解析结果与性能。 |
| 132 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0132` | 性能测试 | 2 | dts2cpp union type alias Map/Record 字面量 key 联合 的解析结果与性能。 |
| 133 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0133` | 性能测试 | 2 | dts2cpp union type alias Partial/Required Record 联合 的解析结果与性能。 |
| 134 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0134` | 性能测试 | 2 | dts2cpp union type alias 可变/只读 rest tuple 联合 的解析结果与性能。 |
| 135 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0135` | 性能测试 | 2 | dts2cpp union type alias Awaited<Promise<union>> | boolean 的解析结果与性能。 |
| 136 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0136` | 性能测试 | 2 | dts2cpp union type alias Omit/Pick 组合联合 的解析结果与性能。 |
| 137 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0137` | 性能测试 | 2 | dts2cpp union type alias Extract/Exclude 组合联合 的解析结果与性能。 |
| 138 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0138` | 性能测试 | 2 | dts2cpp union type alias Record<number,string> | Record<string,number> 的解析结果与性能。 |
| 139 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0139` | 性能测试 | 2 | dts2cpp union type alias 抽象/具体构造签名联合 的解析结果与性能。 |
| 140 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0140` | 性能测试 | 2 | dts2cpp union type alias unique symbol / typeof Symbol / symbol 联合 的解析结果与性能。 |
| 141 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0141` | 性能测试 | 2 | dts2cpp union type alias WeakRef/WeakSet/WeakMap/FinalizationRegistry 四元联合 的解析结果与性能。 |
| 142 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0142` | 性能测试 | 2 | dts2cpp union type alias 嵌套模板字面量联合 的解析结果与性能。 |
| 143 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0143` | 性能测试 | 2 | dts2cpp union type alias mapped type 与对象类型联合 的解析结果与性能。 |
| 144 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0144` | 性能测试 | 2 | dts2cpp union type alias 模板字面量前缀 T_（对齐 parsetsunion test_41） |
| 145 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0145` | 性能测试 | 2 | dts2cpp union type alias 八成员 mega union（基本+容器+tuple）的解析结果与性能。 |
| 146 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0146` | 性能测试 | 2 | dts2cpp union type alias ReadonlyMap | Map 联合 的解析结果与性能。 |
| 147 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0147` | 性能测试 | 2 | dts2cpp union type alias ProxyHandler | object 联合 的解析结果与性能。 |
| 148 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0148` | 性能测试 | 2 | dts2cpp union type alias 条件类型结果联合 的解析结果与性能。 |
| 149 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0149` | 性能测试 | 2 | dts2cpp union type alias 泛型默认 union 参数 的解析结果与性能。 |
| 150 | `conversion_tsunion.part05.test.ts` | `dts2cpp_union_0150` | 性能测试 | 2 | dts2cpp union type alias keyof + indexed access 联合 的解析结果与性能。 |
| 151 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0151` | 性能测试 | 2 | dts2cpp union type alias `type UnionType0178 = null | undefined` 的解析结果与性能。 |
| 152 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0152` | 性能测试 | 2 | dts2cpp union type alias bigint 字面量联合 的解析结果与性能。 |
| 153 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0153` | 性能测试 | 2 | dts2cpp union type alias 浮点字面量联合 的解析结果与性能。 |
| 154 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0154` | 性能测试 | 2 | dts2cpp union type alias 三接口联合 Err | Warn | Info 的解析结果与性能。 |
| 155 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0155` | 性能测试 | 2 | dts2cpp union type alias Error 继承链联合 的解析结果与性能。 |
| 156 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0156` | 性能测试 | 2 | dts2cpp union type alias Date | number | string 的解析结果与性能。 |
| 157 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0157` | 性能测试 | 2 | dts2cpp union type alias RegExp | string 的解析结果与性能。 |
| 158 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0158` | 性能测试 | 2 | dts2cpp union type alias ArrayBuffer 系列联合 的解析结果与性能。 |
| 159 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0159` | 性能测试 | 2 | dts2cpp union type alias Map 泛型参数内含 union 的解析结果与性能。 |
| 160 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0160` | 性能测试 | 2 | dts2cpp union type alias Array 泛型参数内含 union 的解析结果与性能。 |
| 161 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0161` | 性能测试 | 2 | dts2cpp union type alias Record key/value 含 union 的解析结果与性能。 |
| 162 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0162` | 性能测试 | 2 | dts2cpp union type alias Promise<void> | void 的解析结果与性能。 |
| 163 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0163` | 性能测试 | 2 | dts2cpp union type alias never/void 返回函数联合 的解析结果与性能。 |
| 164 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0164` | 性能测试 | 2 | dts2cpp union type alias 索引签名对象联合 的解析结果与性能。 |
| 165 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0165` | 性能测试 | 2 | dts2cpp union type alias 可选属性对象联合 的解析结果与性能。 |
| 166 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0166` | 性能测试 | 2 | dts2cpp union type alias 泛型 Box 接口联合 的解析结果与性能。 |
| 167 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0167` | 性能测试 | 2 | dts2cpp union type alias (string|number)[] 与成员混联合 的解析结果与性能。 |
| 168 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0168` | 性能测试 | 2 | dts2cpp union type alias readonly 数组两种写法联合 的解析结果与性能。 |
| 169 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0169` | 性能测试 | 2 | dts2cpp union type alias 可选元素 tuple 联合 的解析结果与性能。 |
| 170 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0170` | 性能测试 | 2 | dts2cpp union type alias 状态字面量联合 idle/loading/success/error/cancelled 的解析结果与性能。 |
| 171 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0171` | 性能测试 | 2 | dts2cpp union type alias 平台字面量联合 web/ios/android/harmony/windows 的解析结果与性能。 |
| 172 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0172` | 性能测试 | 2 | dts2cpp union type alias Pick | Omit 组合联合 的解析结果与性能。 |
| 173 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0173` | 性能测试 | 2 | dts2cpp union type alias prefix/suffix 模板字面量联合 的解析结果与性能。 |
| 174 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0174` | 性能测试 | 2 | dts2cpp union type alias CSS 单位模板字面量联合 的解析结果与性能。 |
| 175 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0175` | 性能测试 | 2 | dts2cpp union type alias Function | string | number 的解析结果与性能。 |
| 176 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0176` | 性能测试 | 2 | dts2cpp union type alias IArguments | unknown[] 的解析结果与性能。 |
| 177 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0177` | 性能测试 | 2 | dts2cpp union type alias URL | string 的解析结果与性能。 |
| 178 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0178` | 性能测试 | 2 | dts2cpp union type alias 构造签名 | Date 联合（alias 形态）的解析结果与性能。 |
| 179 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0179` | 性能测试 | 2 | dts2cpp union type alias typeof globalThis | typeof window 的解析结果与性能。 |
| 180 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0180` | 性能测试 | 2 | dts2cpp union type alias kind 判别联合 circle/rect/tri 的解析结果与性能。 |
| 181 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0181` | 性能测试 | 2 | dts2cpp union type alias 权限字面量 read/write/execute/admin 的解析结果与性能。 |
| 182 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0182` | 性能测试 | 2 | dts2cpp union type alias 通道数字字面量 1|2|3|4|5|6 的解析结果与性能。 |
| 183 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0183` | 性能测试 | 2 | dts2cpp union type alias branded intersection 联合 的解析结果与性能。 |
| 184 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0184` | 性能测试 | 2 | dts2cpp union type alias 类型别名引用 U|V|boolean 的解析结果与性能。 |
| 185 | `conversion_tsunion.part06.test.ts` | `dts2cpp_union_0185` | 性能测试 | 2 | dts2cpp union type alias ReadonlySet | ReadonlyMap | readonly array 的解析结果与性能。 |
| 186 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0186` | 性能测试 | 2 | dts2cpp union type alias Array<Promise<string>> | Promise<string>[] 的解析结果与性能。 |
| 187 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0187` | 性能测试 | 2 | dts2cpp union type alias symbol | unique symbol | typeof Symbol.asyncIterator 的解析结果与性能。 |
| 188 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0188` | 性能测试 | 2 | dts2cpp union type alias 三成员 tagged object 联合 type A/B/C 的解析结果与性能。 |
| 189 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0189` | 性能测试 | 2 | dts2cpp union type alias 扩展 TypedArray 联合 的解析结果与性能。 |
| 190 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0190` | 性能测试 | 2 | dts2cpp union type alias never 特殊联合 [never] | never 的解析结果与性能。 |
| 191 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0191` | 性能测试 | 2 | dts2cpp union type alias Set<Map> | Map<Set> 嵌套联合 的解析结果与性能。 |
| 192 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0192` | 性能测试 | 2 | dts2cpp union type alias Omit/Pick 同接口联合 的解析结果与性能。 |
| 193 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0193` | 性能测试 | 2 | dts2cpp union type alias keyof + 字面量联合 的解析结果与性能。 |
| 194 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0194` | 性能测试 | 2 | dts2cpp union type alias TemplateStringsArray | readonly string[] 的解析结果与性能。 |
| 195 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0195` | 性能测试 | 2 | dts2cpp union type alias HeadersInit | Record<string, string> 的解析结果与性能。 |
| 196 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0196` | 性能测试 | 2 | dts2cpp union type alias Blob | ArrayBuffer | string 的解析结果与性能。 |
| 197 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0197` | 性能测试 | 2 | dts2cpp union type alias Timer | number 的解析结果与性能。 |
| 198 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0198` | 性能测试 | 2 | dts2cpp union type alias Parameters 含可选/union 入参 的解析结果与性能。 |
| 199 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0199` | 性能测试 | 2 | dts2cpp union type alias ReturnType 结果为 union 的解析结果与性能。 |
| 200 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0200` | 性能测试 | 2 | dts2cpp union type alias Awaited 嵌套 Promise union | null 的解析结果与性能。 |
| 201 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0201` | 性能测试 | 2 | dts2cpp union type alias mapped as 模板 key 联合 的解析结果与性能。 |
| 202 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0202` | 性能测试 | 2 | dts2cpp union type alias readonly tuple 两种写法联合 的解析结果与性能。 |
| 203 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0203` | 性能测试 | 2 | dts2cpp union type alias Map<readonly string[], number> | Map<string[], number> 的解析结果与性能。 |
| 204 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0204` | 性能测试 | 2 | dts2cpp union type alias 四成员 HTTP method 字面量联合 的解析结果与性能。 |
| 205 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0205` | 性能测试 | 2 | dts2cpp union type alias 深浅嵌套 union 括号组合 的解析结果与性能。 |
| 206 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0206` | 性能测试 | 2 | dts2cpp union type alias 双泛型 alias 组合联合 的解析结果与性能。 |
| 207 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0207` | 性能测试 | 2 | dts2cpp union type alias interface 方法签名返回 union 的解析结果与性能。 |
| 208 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0208` | 性能测试 | 2 | dts2cpp union type alias class 实例 | 字面量 联合 的解析结果与性能。 |
| 209 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0209` | 性能测试 | 2 | dts2cpp union type alias enum 成员 | 数字字面量 联合 的解析结果与性能。 |
| 210 | `conversion_tsunion.part07.test.ts` | `dts2cpp_union_0210` | 性能测试 | 2 | dts2cpp union type alias 同文件多 union 批量（T1/T2/T3）的解析结果与性能。 |
| 211 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0211` | 性能测试 | 2 | dts2cpp union type alias 对齐 parsetsunion test_3：字符串字面量联合。 |
| 212 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0212` | 性能测试 | 2 | dts2cpp union type alias 对齐 parsetsunion test_4：数字字面量联合。 |
| 213 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0213` | 性能测试 | 2 | dts2cpp union type alias 十六进制字面量联合。 |
| 214 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0214` | 性能测试 | 2 | dts2cpp union type alias 二进制字面量联合。 |
| 215 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0215` | 性能测试 | 2 | dts2cpp union type alias 八进制字面量联合。 |
| 216 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0216` | 性能测试 | 2 | dts2cpp union type alias 科学计数法字面量联合。 |
| 217 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0217` | 性能测试 | 2 | dts2cpp union type alias 负浮点字面量联合。 |
| 218 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0218` | 性能测试 | 2 | dts2cpp union type alias bigint 字面量联合。 |
| 219 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0219` | 性能测试 | 2 | dts2cpp union type alias 十进制/十六进制/二进制混合字面量联合。 |
| 220 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0220` | 性能测试 | 2 | dts2cpp union type alias 负整数等差数列联合。 |
| 221 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0221` | 性能测试 | 2 | dts2cpp union type alias 浮点字面量联合。 |
| 222 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0222` | 性能测试 | 2 | dts2cpp union type alias bigint 与 number 字面量混联。 |
| 223 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0223` | 性能测试 | 2 | dts2cpp union type alias 负零字面量联合。 |
| 224 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0224` | 性能测试 | 2 | dts2cpp union type alias 空字符串字面量联合。 |
| 225 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0225` | 性能测试 | 2 | dts2cpp union type alias 长短字符串字面量联合。 |
| 226 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0226` | 性能测试 | 2 | dts2cpp union type alias 含转义字符的字符串字面量联合。 |
| 227 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0227` | 性能测试 | 2 | dts2cpp union type alias 含特殊字符的字符串字面量联合。 |
| 228 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0228` | 性能测试 | 2 | dts2cpp union type alias 单引号字符串字面量联合。 |
| 229 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0229` | 性能测试 | 2 | dts2cpp union type alias 字符串/数字/bigint/布尔/可空字面量八元混合联合。 |
| 230 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0230` | 性能测试 | 2 | dts2cpp union type alias 双占位符模板字面量联合。 |
| 231 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0231` | 性能测试 | 2 | dts2cpp union type alias 多占位符模板字面量联合。 |
| 232 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0232` | 性能测试 | 2 | dts2cpp union type alias CSS 单位模板字面量联合。 |
| 233 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0233` | 性能测试 | 2 | dts2cpp union type alias 模板字面量内嵌工具类型联合。 |
| 234 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0234` | 性能测试 | 2 | dts2cpp union type alias 十成员数字字面量联合。 |
| 235 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0235` | 性能测试 | 2 | dts2cpp union type alias 十成员基本类型联合。 |
| 236 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0236` | 性能测试 | 2 | dts2cpp union type alias 十二成员 mega 基本类型联合。 |
| 237 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0237` | 性能测试 | 2 | dts2cpp union type alias 多行书写三成员联合。 |
| 238 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0238` | 性能测试 | 2 | dts2cpp union type alias 多行书写五成员联合。 |
| 239 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0239` | 性能测试 | 2 | dts2cpp union type alias 重复成员联合。 |
| 240 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0240` | 性能测试 | 2 | dts2cpp union type alias 单成员括号包裹联合。 |
| 241 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0241` | 性能测试 | 2 | dts2cpp union type alias 两层括号嵌套联合。 |
| 242 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0242` | 性能测试 | 2 | dts2cpp union type alias 深括号嵌套联合。 |
| 243 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0243` | 性能测试 | 2 | dts2cpp union type alias 二维数组联合。 |
| 244 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0244` | 性能测试 | 2 | dts2cpp union type alias 嵌套泛型数组联合。 |
| 245 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0245` | 性能测试 | 2 | dts2cpp union type alias 联合元素二维数组联合。 |
| 246 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0246` | 性能测试 | 2 | dts2cpp union type alias 命名元素 tuple 联合。 |
| 247 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0247` | 性能测试 | 2 | dts2cpp union type alias 前置 rest tuple 联合。 |
| 248 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0248` | 性能测试 | 2 | dts2cpp union type alias 中置 rest tuple 联合。 |
| 249 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0249` | 性能测试 | 2 | dts2cpp union type alias 可选元素 tuple 联合。 |
| 250 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0250` | 性能测试 | 2 | dts2cpp union type alias readonly tuple 联合。 |
| 251 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0251` | 性能测试 | 2 | dts2cpp union type alias readonly 命名 tuple 联合。 |
| 252 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0252` | 性能测试 | 2 | dts2cpp union type alias readonly 数组两种写法联合。 |
| 253 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0253` | 性能测试 | 2 | dts2cpp union type alias 三元素 readonly tuple 联合。 |
| 254 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0254` | 性能测试 | 2 | dts2cpp union type alias 三元素 tuple 双向排列联合。 |
| 255 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0255` | 性能测试 | 2 | dts2cpp union type alias 嵌套 Map 联合。 |
| 256 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0256` | 性能测试 | 2 | dts2cpp union type alias Record 联合字面量 key 联合。 |
| 257 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0257` | 性能测试 | 2 | dts2cpp union type alias Record 联合 value 联合。 |
| 258 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0258` | 性能测试 | 2 | dts2cpp union type alias ReadonlyMap/ReadonlySet 嵌套联合。 |
| 259 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0259` | 性能测试 | 2 | dts2cpp union type alias 嵌套 Set 联合。 |
| 260 | `conversion_tsunion.part08.test.ts` | `dts2cpp_union_0260` | 性能测试 | 2 | dts2cpp union type alias WeakSet 变体联合。 |
| 261 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0261` | 性能测试 | 2 | dts2cpp union type alias 可选参函数类型联合。 |
| 262 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0262` | 性能测试 | 2 | dts2cpp union type alias rest 参函数类型联合。 |
| 263 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0263` | 性能测试 | 2 | dts2cpp union type alias rest 参内含 union 的函数类型联合。 |
| 264 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0264` | 性能测试 | 2 | dts2cpp union type alias 泛型箭头函数类型联合。 |
| 265 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0265` | 性能测试 | 2 | dts2cpp union type alias Promise 返回函数类型联合。 |
| 266 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0266` | 性能测试 | 2 | dts2cpp union type alias 回调风格 union 入参函数类型联合。 |
| 267 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0267` | 性能测试 | 2 | dts2cpp union type alias 双泛型箭头函数类型联合。 |
| 268 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0268` | 性能测试 | 2 | dts2cpp union type alias rest 参布尔返回函数类型联合。 |
| 269 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0269` | 性能测试 | 2 | dts2cpp union type alias 入参返回均含 union 的函数类型联合。 |
| 270 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0270` | 性能测试 | 2 | dts2cpp union type alias 基本函数类型联合。 |
| 271 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0271` | 性能测试 | 2 | dts2cpp union type alias 双 void 函数类型联合。 |
| 272 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0272` | 性能测试 | 2 | dts2cpp union type alias async 箭头函数类型联合（成员不可拆分，断言 types 为空）。 |
| 273 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0273` | 性能测试 | 2 | dts2cpp union type alias 无括号函数类型混 union（成员不可拆分，断言 types 为空）。 |
| 274 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0274` | 性能测试 | 2 | dts2cpp union type alias Generator 返回函数类型联合。 |
| 275 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0275` | 性能测试 | 2 | dts2cpp union type alias Generator 入参函数类型联合。 |
| 276 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0276` | 性能测试 | 2 | dts2cpp union type alias 对象构造签名联合。 |
| 277 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0277` | 性能测试 | 2 | dts2cpp union type alias 对象 this 签名联合。 |
| 278 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0278` | 性能测试 | 2 | dts2cpp union type alias 对象调用签名联合。 |
| 279 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0279` | 性能测试 | 2 | dts2cpp union type alias 无参/有参调用签名联合。 |
| 280 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0280` | 性能测试 | 2 | dts2cpp union type alias 无括号构造签名混函数类型（成员不可拆分，断言 types 为空）。 |
| 281 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0281` | 性能测试 | 2 | dts2cpp union type alias 无括号 this 函数类型（成员不可拆分，断言 types 为空）。 |
| 282 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0282` | 性能测试 | 2 | dts2cpp union type alias NoInfer 工具类型联合。 |
| 283 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0283` | 性能测试 | 2 | dts2cpp union type alias OmitThisParameter 工具类型联合。 |
| 284 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0284` | 性能测试 | 2 | dts2cpp union type alias Awaited 嵌套 Promise 联合。 |
| 285 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0285` | 性能测试 | 2 | dts2cpp union type alias Readonly 工具类型联合。 |
| 286 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0286` | 性能测试 | 2 | dts2cpp union type alias 条件类型结果联合。 |
| 287 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0287` | 性能测试 | 2 | dts2cpp union type alias 索引访问 union 联合。 |
| 288 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0288` | 性能测试 | 2 | dts2cpp union type alias 映射类型联合。 |
| 289 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0289` | 性能测试 | 2 | dts2cpp union type alias keyof 映射类型联合。 |
| 290 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0290` | 性能测试 | 2 | dts2cpp union type alias keyof typeof 联合。 |
| 291 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0291` | 性能测试 | 2 | dts2cpp union type alias 可选属性对象联合。 |
| 292 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0292` | 性能测试 | 2 | dts2cpp union type alias readonly 属性对象联合。 |
| 293 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0293` | 性能测试 | 2 | dts2cpp union type alias 方法签名对象联合。 |
| 294 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0294` | 性能测试 | 2 | dts2cpp union type alias 嵌套对象联合。 |
| 295 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0295` | 性能测试 | 2 | dts2cpp union type alias 属性含 union 的对象联合。 |
| 296 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0296` | 性能测试 | 2 | dts2cpp union type alias 交叉类型与 union 混用联合。 |
| 297 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0297` | 性能测试 | 2 | dts2cpp union type alias typeof 变量联合。 |
| 298 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0298` | 性能测试 | 2 | dts2cpp union type alias typeof 函数联合。 |
| 299 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0299` | 性能测试 | 2 | dts2cpp union type alias 错误类型链联合。 |
| 300 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0300` | 性能测试 | 2 | dts2cpp union type alias DOM 元素类型联合。 |
| 301 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0301` | 性能测试 | 2 | dts2cpp union type alias 包装类型联合。 |
| 302 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0302` | 性能测试 | 2 | dts2cpp union type alias 命名空间引用联合。 |
| 303 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0303` | 性能测试 | 2 | dts2cpp union type alias Promise 链联合。 |
| 304 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0304` | 性能测试 | 2 | dts2cpp union type alias Promise<void> 与 void 联合。 |
| 305 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0305` | 性能测试 | 2 | dts2cpp union type alias 数字 key 的 Map/Record 联合。 |
| 306 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0306` | 性能测试 | 2 | dts2cpp union type alias 嵌套 ReadonlyArray 联合。 |
| 307 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0307` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套容器联合。 |
| 308 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0308` | 性能测试 | 2 | dts2cpp union type alias Record 值嵌套容器联合。 |
| 309 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0309` | 性能测试 | 2 | dts2cpp union type alias Set/Map/Record 三容器联合。 |
| 310 | `conversion_tsunion.part09.test.ts` | `dts2cpp_union_0310` | 性能测试 | 2 | dts2cpp union type alias unique symbol 联合。 |
| 311 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0311` | 性能测试 | 2 | dts2cpp union type alias 接口引用联合。 |
| 312 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0312` | 性能测试 | 2 | dts2cpp union type alias keyof 接口联合。 |
| 313 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0313` | 性能测试 | 2 | dts2cpp union type alias 接口索引访问联合。 |
| 314 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0314` | 性能测试 | 2 | dts2cpp union type alias enum 引用联合（同时校验 ParseObj.enums）。 |
| 315 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0315` | 性能测试 | 2 | dts2cpp union type alias enum 成员联合（同时校验 ParseObj.enums）。 |
| 316 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0316` | 性能测试 | 2 | dts2cpp union type alias 泛型 Box alias 联合。 |
| 317 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0317` | 性能测试 | 2 | dts2cpp union type alias 双泛型 Pair alias 联合。 |
| 318 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0318` | 性能测试 | 2 | dts2cpp union type alias 泛型参数联合。 |
| 319 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0319` | 性能测试 | 2 | dts2cpp union type alias 构造签名 alias 引用联合（同文件 2 个 alias）。 |
| 320 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0320` | 性能测试 | 2 | dts2cpp union type alias 十成员容器 mega union。 |
| 321 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0321` | 性能测试 | 2 | dts2cpp union type alias 同文件 5 个 union 批量解析。 |
| 322 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0322` | 性能测试 | 2 | dts2cpp union type alias 同文件 10 个 union 批量解析。 |
| 323 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0323` | 性能测试 | 2 | dts2cpp union type alias 同文件 20 个 union 批量解析。 |
| 324 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0324` | 性能测试 | 2 | dts2cpp union type alias 容错：空成员联合（对齐 parsetsunion test_31）。 |
| 325 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0325` | 性能测试 | 2 | dts2cpp union type alias 容错：数组缺右括号联合（对齐 parsetsunion test_32）。 |
| 326 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0326` | 性能测试 | 2 | dts2cpp union type alias 容错：字符串缺右引号联合（对齐 parsetsunion test_33）。 |
| 327 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0327` | 性能测试 | 2 | dts2cpp union type alias 容错：数字拼接联合（对齐 parsetsunion test_34）。 |
| 328 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0328` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 null 联合（对齐 parsetsunion test_36）。 |
| 329 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0329` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 undefined 联合（对齐 parsetsunion test_37）。 |
| 330 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0330` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 boolean 联合（对齐 parsetsunion test_39）。 |
| 331 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0331` | 性能测试 | 2 | dts2cpp union type alias 容错：拼写错误 any 联合（对齐 parsetsunion test_40）。 |
| 332 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0332` | 性能测试 | 2 | dts2cpp union type alias 容错：Awaited 空泛参（对齐 parsetsunion test_43，成员不可拆分）。 |
| 333 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0333` | 性能测试 | 2 | dts2cpp union type alias 容错：Pick 缺逗号（对齐 parsetsunion test_44，成员不可拆分）。 |
| 334 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0334` | 性能测试 | 2 | dts2cpp union type alias 容错：Omit 缺逗号（对齐 parsetsunion test_45，成员不可拆分）。 |
| 335 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0335` | 性能测试 | 2 | dts2cpp union type alias 开关字面量联合。 |
| 336 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0336` | 性能测试 | 2 | dts2cpp union type alias 颜色字面量联合。 |
| 337 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0337` | 性能测试 | 2 | dts2cpp union type alias 三成员对象联合。 |
| 338 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0338` | 性能测试 | 2 | dts2cpp union type alias Promise 泛参内含 union 联合。 |
| 339 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0339` | 性能测试 | 2 | dts2cpp union type alias Array/Set 泛参内含 union 联合。 |
| 340 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0340` | 性能测试 | 2 | dts2cpp union type alias Map 值内含四元 union 联合。 |
| 341 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0341` | 性能测试 | 2 | dts2cpp union type alias Promise 嵌套 Set/Map 联合。 |
| 342 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0342` | 性能测试 | 2 | dts2cpp union type alias Map/Record 值嵌套 Promise 联合。 |
| 343 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0343` | 性能测试 | 2 | dts2cpp union type alias tuple 数组两种写法联合。 |
| 344 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0344` | 性能测试 | 2 | dts2cpp union type alias 无占位符模板字面量联合。 |
| 345 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0345` | 性能测试 | 2 | dts2cpp union type alias 单占位符模板字面量联合。 |
| 346 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0346` | 性能测试 | 2 | dts2cpp union type alias 前缀模板字面量联合。 |
| 347 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0347` | 性能测试 | 2 | dts2cpp union type alias 三占位符模板字面量联合。 |
| 348 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0348` | 性能测试 | 2 | dts2cpp union type alias WeakMap 变体联合。 |
| 349 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0349` | 性能测试 | 2 | dts2cpp union type alias ReadonlySet 变体联合。 |
| 350 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0350` | 性能测试 | 2 | dts2cpp union type alias any/unknown 联合。 |
| 351 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0351` | 性能测试 | 2 | dts2cpp union type alias void/never 联合。 |
| 352 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0352` | 性能测试 | 2 | dts2cpp union type alias readonly tuple 与普通 tuple 联合。 |
| 353 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0353` | 性能测试 | 2 | dts2cpp union type alias Array 泛参 union 变体联合。 |
| 354 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0354` | 性能测试 | 2 | dts2cpp union type alias symbol/string 联合。 |
| 355 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0355` | 性能测试 | 2 | dts2cpp union type alias object/null 联合。 |
| 356 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0356` | 性能测试 | 2 | dts2cpp union type alias 入参不同返回 void 的函数类型联合。 |
| 357 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0357` | 性能测试 | 2 | dts2cpp union type alias 四元基本类型联合。 |
| 358 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0358` | 性能测试 | 2 | dts2cpp union type alias 三成员 Array 泛型联合。 |
| 359 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0359` | 性能测试 | 2 | dts2cpp union type alias 三成员单元素 tuple 联合。 |
| 360 | `conversion_tsunion.part10.test.ts` | `dts2cpp_union_0360` | 性能测试 | 2 | dts2cpp union type alias 尺寸字面量联合。 |
| 361 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0361` | 性能测试 | 2 | dts2cpp union type alias 数字分隔符十进制字面量联合。 |
| 362 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0362` | 性能测试 | 2 | dts2cpp union type alias 数字分隔符二进制字面量联合。 |
| 363 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0363` | 性能测试 | 2 | dts2cpp union type alias 数字分隔符十六进制字面量联合。 |
| 364 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0364` | 性能测试 | 2 | dts2cpp union type alias 逐位分隔整数字面量联合。 |
| 365 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0365` | 性能测试 | 2 | dts2cpp union type alias 正号指数字面量联合。 |
| 366 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0366` | 性能测试 | 2 | dts2cpp union type alias 负/正指数阶梯字面量联合。 |
| 367 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0367` | 性能测试 | 2 | dts2cpp union type alias 负指数小数字面量联合。 |
| 368 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0368` | 性能测试 | 2 | dts2cpp union type alias 负 bigint 字面量联合。 |
| 369 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0369` | 性能测试 | 2 | dts2cpp union type alias bigint 阶梯字面量联合（含 0n）。 |
| 370 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0370` | 性能测试 | 2 | dts2cpp union type alias 大整数 bigint 字面量联合。 |
| 371 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0371` | 性能测试 | 2 | dts2cpp union type alias 十六进制大小写混写字面量联合。 |
| 372 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0372` | 性能测试 | 2 | dts2cpp union type alias 十六进制 2 的幂字面量联合。 |
| 373 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0373` | 性能测试 | 2 | dts2cpp union type alias 二进制 2 的幂字面量联合。 |
| 374 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0374` | 性能测试 | 2 | dts2cpp union type alias 八进制 2 的幂字面量联合。 |
| 375 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0375` | 性能测试 | 2 | dts2cpp union type alias 十六进制对数字面量联合。 |
| 376 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0376` | 性能测试 | 2 | dts2cpp union type alias 二进制交替模式字面量联合。 |
| 377 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0377` | 性能测试 | 2 | dts2cpp union type alias 八进制极值字面量联合。 |
| 378 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0378` | 性能测试 | 2 | dts2cpp union type alias 十成员奇数序列字面量联合。 |
| 379 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0379` | 性能测试 | 2 | dts2cpp union type alias 偶数序列字面量联合。 |
| 380 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0380` | 性能测试 | 2 | dts2cpp union type alias 3 倍数序列字面量联合。 |
| 381 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0381` | 性能测试 | 2 | dts2cpp union type alias 字节范围字面量联合。 |
| 382 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0382` | 性能测试 | 2 | dts2cpp union type alias 百位步进字面量联合。 |
| 383 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0383` | 性能测试 | 2 | dts2cpp union type alias 十一成员 2 的幂字面量联合。 |
| 384 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0384` | 性能测试 | 2 | dts2cpp union type alias 四分之一步进字面量联合。 |
| 385 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0385` | 性能测试 | 2 | dts2cpp union type alias 循环小数位字面量联合。 |
| 386 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0386` | 性能测试 | 2 | dts2cpp union type alias 带小数点零值字面量联合。 |
| 387 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0387` | 性能测试 | 2 | dts2cpp union type alias 浮点精度边界字面量联合。 |
| 388 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0388` | 性能测试 | 2 | dts2cpp union type alias 负偶步进字面量联合。 |
| 389 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0389` | 性能测试 | 2 | dts2cpp union type alias 20 位大整数字面量联合。 |
| 390 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0390` | 性能测试 | 2 | dts2cpp union type alias 十位步进字面量联合。 |
| 391 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0391` | 性能测试 | 2 | dts2cpp union type alias 低四位数字字面量联合。 |
| 392 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0392` | 性能测试 | 2 | dts2cpp union type alias 基本类型/数字/字符串混写字面量联合。 |
| 393 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0393` | 性能测试 | 2 | dts2cpp union type alias 真值语义字符串/数字混合联合。 |
| 394 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0394` | 性能测试 | 2 | dts2cpp union type alias 正负符号字面量联合。 |
| 395 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0395` | 性能测试 | 2 | dts2cpp union type alias 魔数十六进制字面量联合。 |
| 396 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0396` | 性能测试 | 2 | dts2cpp union type alias 双/单引号混写字符串字面量联合。 |
| 397 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0397` | 性能测试 | 2 | dts2cpp union type alias 含转义双引号/单引号的字符串字面量联合。 |
| 398 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0398` | 性能测试 | 2 | dts2cpp union type alias 含反斜杠转义的字符串字面量联合。 |
| 399 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0399` | 性能测试 | 2 | dts2cpp union type alias 仅含转义控制符的字符串字面量联合。 |
| 400 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0400` | 性能测试 | 2 | dts2cpp union type alias 含 unicode 转义的字符串字面量联合。 |
| 401 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0401` | 性能测试 | 2 | dts2cpp union type alias unicode 转义与字面等价字符串联合。 |
| 402 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0402` | 性能测试 | 2 | dts2cpp union type alias 数字字符串字面量联合。 |
| 403 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0403` | 性能测试 | 2 | dts2cpp union type alias 布尔字符串字面量联合。 |
| 404 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0404` | 性能测试 | 2 | dts2cpp union type alias 单词/符号字符串字面量联合。 |
| 405 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0405` | 性能测试 | 2 | dts2cpp union type alias 七成员星期字面量联合。 |
| 406 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0406` | 性能测试 | 2 | dts2cpp union type alias 十二成员月份字面量联合。 |
| 407 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0407` | 性能测试 | 2 | dts2cpp union type alias 五成员 HTTP 方法字面量联合（非 CRUD 组）。 |
| 408 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0408` | 性能测试 | 2 | dts2cpp union type alias 五成员日志级别字面量联合。 |
| 409 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0409` | 性能测试 | 2 | dts2cpp union type alias 四成员方位字面量联合。 |
| 410 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0410` | 性能测试 | 2 | dts2cpp union type alias 四成员方向字面量联合。 |
| 411 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0411` | 性能测试 | 2 | dts2cpp union type alias 四成员季节字面量联合。 |
| 412 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0412` | 性能测试 | 2 | dts2cpp union type alias 四成员季度字面量联合。 |
| 413 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0413` | 性能测试 | 2 | dts2cpp union type alias 五成员尺寸档位字面量联合。 |
| 414 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0414` | 性能测试 | 2 | dts2cpp union type alias 三成员 Promise 状态字面量联合。 |
| 415 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0415` | 性能测试 | 2 | dts2cpp union type alias 排序方向字面量联合。 |
| 416 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0416` | 性能测试 | 2 | dts2cpp union type alias 主题模式字面量联合。 |
| 417 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0417` | 性能测试 | 2 | dts2cpp union type alias 三成员优先级字面量联合。 |
| 418 | `conversion_tsunion.part11.test.ts` | `dts2cpp_union_0418` | 性能测试 | 2 | dts2cpp union type alias 四成员数据格式字面量联合。 |
| 419 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0419` | 性能测试 | 2 | dts2cpp union type alias 嵌套模板字面量联合。 |
| 420 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0420` | 性能测试 | 2 | dts2cpp union type alias 占位符引用未定义别名联合。 |
| 421 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0421` | 性能测试 | 2 | dts2cpp union type alias 三占位符类型混用模板字面量联合。 |
| 422 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0422` | 性能测试 | 2 | dts2cpp union type alias 单占位符类型互换模板字面量联合。 |
| 423 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0423` | 性能测试 | 2 | dts2cpp union type alias 符号包裹模板字面量联合。 |
| 424 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0424` | 性能测试 | 2 | dts2cpp union type alias 双同型占位符模板字面量联合。 |
| 425 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0425` | 性能测试 | 2 | dts2cpp union type alias bigint 占位符模板字面量联合。 |
| 426 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0426` | 性能测试 | 2 | dts2cpp union type alias 三维数组联合。 |
| 427 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0427` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套泛型数组联合。 |
| 428 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0428` | 性能测试 | 2 | dts2cpp union type alias 三层 ReadonlyArray 联合。 |
| 429 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0429` | 性能测试 | 2 | dts2cpp union type alias 泛参内含数组联合的数组联合。 |
| 430 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0430` | 性能测试 | 2 | dts2cpp union type alias 不同成员数联合元素数组联合。 |
| 431 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0431` | 性能测试 | 2 | dts2cpp union type alias Array<T>[] 与 T[][] 混写数组联合。 |
| 432 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0432` | 性能测试 | 2 | dts2cpp union type alias Promise 内嵌数组联合。 |
| 433 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0433` | 性能测试 | 2 | dts2cpp union type alias readonly 二维数组联合。 |
| 434 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0434` | 性能测试 | 2 | dts2cpp union type alias 三成员无符号 TypedArray 联合。 |
| 435 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0435` | 性能测试 | 2 | dts2cpp union type alias BigInt TypedArray 联合。 |
| 436 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0436` | 性能测试 | 2 | dts2cpp union type alias 二进制缓冲区类型联合。 |
| 437 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0437` | 性能测试 | 2 | dts2cpp union type alias 四元/三元异序 tuple 联合。 |
| 438 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0438` | 性能测试 | 2 | dts2cpp union type alias readonly rest tuple 联合。 |
| 439 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0439` | 性能测试 | 2 | dts2cpp union type alias 命名 rest tuple 联合。 |
| 440 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0440` | 性能测试 | 2 | dts2cpp union type alias rest 用 Array<T> 写法的 tuple 联合。 |
| 441 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0441` | 性能测试 | 2 | dts2cpp union type alias 尾部 rest tuple 联合。 |
| 442 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0442` | 性能测试 | 2 | dts2cpp union type alias 函数类型元素 tuple 联合。 |
| 443 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0443` | 性能测试 | 2 | dts2cpp union type alias 容器元素 tuple 联合。 |
| 444 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0444` | 性能测试 | 2 | dts2cpp union type alias 嵌套 tuple 元素 tuple 联合。 |
| 445 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0445` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套 tuple 数组联合。 |
| 446 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0446` | 性能测试 | 2 | dts2cpp union type alias tuple 中嵌 tuple 联合。 |
| 447 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0447` | 性能测试 | 2 | dts2cpp union type alias Set 元素为 tuple 联合。 |
| 448 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0448` | 性能测试 | 2 | dts2cpp union type alias Map 键为 tuple 联合。 |
| 449 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0449` | 性能测试 | 2 | dts2cpp union type alias 三成员数字单元素 tuple 联合。 |
| 450 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0450` | 性能测试 | 2 | dts2cpp union type alias 单元素 tuple 与数组联合。 |
| 451 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0451` | 性能测试 | 2 | dts2cpp union type alias 空 tuple 与单元素 tuple 联合。 |
| 452 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0452` | 性能测试 | 2 | dts2cpp union type alias readonly 空 tuple 联合。 |
| 453 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0453` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套 Map 联合。 |
| 454 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0454` | 性能测试 | 2 | dts2cpp union type alias 嵌套 Record 联合。 |
| 455 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0455` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套 Set 联合。 |
| 456 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0456` | 性能测试 | 2 | dts2cpp union type alias Map 泛参互换联合。 |
| 457 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0457` | 性能测试 | 2 | dts2cpp union type alias ReadonlyMap 泛参互换联合。 |
| 458 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0458` | 性能测试 | 2 | dts2cpp union type alias WeakMap 值内嵌数组联合。 |
| 459 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0459` | 性能测试 | 2 | dts2cpp union type alias Map 值内嵌 readonly tuple 联合。 |
| 460 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0460` | 性能测试 | 2 | dts2cpp union type alias Record/Map 值内嵌容器联合。 |
| 461 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0461` | 性能测试 | 2 | dts2cpp union type alias symbol 键 Map 联合。 |
| 462 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0462` | 性能测试 | 2 | dts2cpp union type alias 函数类型元素 WeakSet 联合。 |
| 463 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0463` | 性能测试 | 2 | dts2cpp union type alias Array<Promise<Set>> 三层容器联合。 |
| 464 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0464` | 性能测试 | 2 | dts2cpp union type alias Map/Record 值嵌套 Promise<Set> 联合。 |
| 465 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0465` | 性能测试 | 2 | dts2cpp union type alias Record 值内嵌函数类型联合。 |
| 466 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0466` | 性能测试 | 2 | dts2cpp union type alias 函数类型元素数组联合。 |
| 467 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0467` | 性能测试 | 2 | dts2cpp union type alias Promise 值内嵌函数类型联合。 |
| 468 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0468` | 性能测试 | 2 | dts2cpp union type alias Set 值内嵌函数类型联合。 |
| 469 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0469` | 性能测试 | 2 | dts2cpp union type alias 对象属性内嵌函数类型联合。 |
| 470 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0470` | 性能测试 | 2 | dts2cpp union type alias Error 与可空类型联合。 |
| 471 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0471` | 性能测试 | 2 | dts2cpp union type alias 四成员内置对象引用联合。 |
| 472 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0472` | 性能测试 | 2 | dts2cpp union type alias 四成员内置引用混 Function 联合。 |
| 473 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0473` | 性能测试 | 2 | dts2cpp union type alias keyof typeof 内置对象联合。 |
| 474 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0474` | 性能测试 | 2 | dts2cpp union type alias 内置对象方法索引访问联合。 |
| 475 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0475` | 性能测试 | 2 | dts2cpp union type alias 容错：前导空成员联合（仅 1 个成员）。 |
| 476 | `conversion_tsunion.part12.test.ts` | `dts2cpp_union_0476` | 性能测试 | 2 | dts2cpp union type alias 容错：尾部空成员联合。 |
| 477 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0477` | 性能测试 | 2 | dts2cpp union type alias 三参函数类型联合。 |
| 478 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0478` | 性能测试 | 2 | dts2cpp union type alias 柯里化返回函数类型联合。 |
| 479 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0479` | 性能测试 | 2 | dts2cpp union type alias 泛型约束箭头函数类型联合。 |
| 480 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0480` | 性能测试 | 2 | dts2cpp union type alias 同入参不同返回函数类型联合。 |
| 481 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0481` | 性能测试 | 2 | dts2cpp union type alias 不同参数名/类型函数类型联合。 |
| 482 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0482` | 性能测试 | 2 | dts2cpp union type alias any/unknown rest 函数类型联合。 |
| 483 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0483` | 性能测试 | 2 | dts2cpp union type alias Promise<void>/Promise<never> 函数类型联合。 |
| 484 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0484` | 性能测试 | 2 | dts2cpp union type alias 可选回调参函数类型联合。 |
| 485 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0485` | 性能测试 | 2 | dts2cpp union type alias 带参对象构造签名联合。 |
| 486 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0486` | 性能测试 | 2 | dts2cpp union type alias 构造签名与调用签名混合对象联合。 |
| 487 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0487` | 性能测试 | 2 | dts2cpp union type alias 无括号可选参函数类型（成员不可拆分，断言 types 为空）。 |
| 488 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0488` | 性能测试 | 2 | dts2cpp union type alias 超集/子集对象联合。 |
| 489 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0489` | 性能测试 | 2 | dts2cpp union type alias 同键不同类型对象联合。 |
| 490 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0490` | 性能测试 | 2 | dts2cpp union type alias 四成员单键对象联合。 |
| 491 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0491` | 性能测试 | 2 | dts2cpp union type alias readonly 与普通属性混用对象联合。 |
| 492 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0492` | 性能测试 | 2 | dts2cpp union type alias 多可选属性对象联合。 |
| 493 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0493` | 性能测试 | 2 | dts2cpp union type alias 数字/字符串索引签名对象联合。 |
| 494 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0494` | 性能测试 | 2 | dts2cpp union type alias 索引签名值含 union 对象联合。 |
| 495 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0495` | 性能测试 | 2 | dts2cpp union type alias getter/setter 对象联合。 |
| 496 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0496` | 性能测试 | 2 | dts2cpp union type alias 重载调用签名对象联合。 |
| 497 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0497` | 性能测试 | 2 | dts2cpp union type alias 三层嵌套对象联合。 |
| 498 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0498` | 性能测试 | 2 | dts2cpp union type alias 属性为数组/Set 对象联合。 |
| 499 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0499` | 性能测试 | 2 | dts2cpp union type alias 属性为 Map/Record 对象联合。 |
| 500 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0500` | 性能测试 | 2 | dts2cpp union type alias Parameters 双参函数联合。 |
| 501 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0501` | 性能测试 | 2 | dts2cpp union type alias ReturnType 返回 union 联合。 |
| 502 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0502` | 性能测试 | 2 | dts2cpp union type alias Awaited 三层嵌套联合。 |
| 503 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0503` | 性能测试 | 2 | dts2cpp union type alias Pick 内嵌 Record 联合。 |
| 504 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0504` | 性能测试 | 2 | dts2cpp union type alias Omit 内嵌 Record 联合。 |
| 505 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0505` | 性能测试 | 2 | dts2cpp union type alias Partial 内联对象联合。 |
| 506 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0506` | 性能测试 | 2 | dts2cpp union type alias Required 内联对象联合。 |
| 507 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0507` | 性能测试 | 2 | dts2cpp union type alias Readonly 内联对象联合。 |
| 508 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0508` | 性能测试 | 2 | dts2cpp union type alias Record 同键不同值类型联合。 |
| 509 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0509` | 性能测试 | 2 | dts2cpp union type alias InstanceType 内置对象联合。 |
| 510 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0510` | 性能测试 | 2 | dts2cpp union type alias ConstructorParameters 内置对象联合。 |
| 511 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0511` | 性能测试 | 2 | dts2cpp union type alias OmitThisParameter void this 联合。 |
| 512 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0512` | 性能测试 | 2 | dts2cpp union type alias keyof 内联对象联合。 |
| 513 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0513` | 性能测试 | 2 | dts2cpp union type alias 双映射类型联合。 |
| 514 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0514` | 性能测试 | 2 | dts2cpp union type alias 泛型 keyof 映射类型联合。 |
| 515 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0515` | 性能测试 | 2 | dts2cpp union type alias 泛型索引访问联合。 |
| 516 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0516` | 性能测试 | 2 | dts2cpp union type alias 无泛型直接条件类型联合。 |
| 517 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0517` | 性能测试 | 2 | dts2cpp union type alias infer 条件类型联合。 |
| 518 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0518` | 性能测试 | 2 | dts2cpp union type alias 双泛型 keyof 联合。 |
| 519 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0519` | 性能测试 | 2 | dts2cpp union type alias typeof 成员访问联合。 |
| 520 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0520` | 性能测试 | 2 | dts2cpp union type alias typeof Symbol 联合。 |
| 521 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0521` | 性能测试 | 2 | dts2cpp union type alias Function/object/null 联合。 |
| 522 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0522` | 性能测试 | 2 | dts2cpp union type alias 类属性索引访问联合。 |
| 523 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0523` | 性能测试 | 2 | dts2cpp union type alias 包装类型/基本类型/字面量混联。 |
| 524 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0524` | 性能测试 | 2 | dts2cpp union type alias unknown/any 数组联合。 |
| 525 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0525` | 性能测试 | 2 | dts2cpp union type alias 双交叉类型联合。 |
| 526 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0526` | 性能测试 | 2 | dts2cpp union type alias this 类型联合。 |
| 527 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0527` | 性能测试 | 2 | dts2cpp union type alias 泛型 NoInfer 联合。 |
| 528 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0528` | 性能测试 | 2 | dts2cpp union type alias 交叉类型 alias 引用联合（同文件 3 个 alias）。 |
| 529 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0529` | 性能测试 | 2 | dts2cpp union type alias enum+interface+type 同文件组合联合（校验 ParseObj.enums）。 |
| 530 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0530` | 性能测试 | 2 | dts2cpp union type alias 同文件 30 个 union 批量解析。 |
| 531 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0531` | 性能测试 | 2 | dts2cpp union type alias 容错：括号不配对（成员不可拆分，断言 types 为空）。 |
| 532 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0532` | 性能测试 | 2 | dts2cpp union type alias 容错：双竖线（成员不可拆分，断言 types 为空）。 |
| 533 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0533` | 性能测试 | 2 | dts2cpp union type alias 容错：泛型括号不闭合（成员不可拆分，断言 types 为空）。 |
| 534 | `conversion_tsunion.part13.test.ts` | `dts2cpp_union_0534` | 性能测试 | 2 | dts2cpp union type alias 容错：泛型括号不闭合（残留成员）。 |
| 535 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0001` | 性能测试 | 2 | dts2cpp enum 对齐 parsetsenum test_1：一般多行 enum（无赋值） 的解析结果与性能。 |
| 536 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0002` | 性能测试 | 2 | dts2cpp enum 对齐 test_2：成员带行注释 的解析结果与性能。 |
| 537 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0003` | 性能测试 | 2 | dts2cpp enum 对齐 test_3：起始成员赋值其余推导 的解析结果与性能。 |
| 538 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0004` | 性能测试 | 2 | dts2cpp enum 对齐 test_4：全部成员位运算赋值 的解析结果与性能。 |
| 539 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0005` | 性能测试 | 2 | dts2cpp enum 对齐 test_5：const enum 无赋值 的解析结果与性能。 |
| 540 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0006` | 性能测试 | 2 | dts2cpp enum 对齐 test_6：const enum 复杂表达式赋值 的解析结果与性能。 |
| 541 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0007` | 性能测试 | 2 | dts2cpp enum 对齐 test_7：const enum 字符串值与乘法赋值 的解析结果与性能。 |
| 542 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0008` | 性能测试 | 2 | dts2cpp enum 对齐 test_8：联合赋值 ALL = Up | Down 的解析结果与性能。 |
| 543 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0009` | 性能测试 | 2 | dts2cpp enum 对齐 test_12：单行 enum 带块注释 的解析结果与性能。 |
| 544 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0010` | 性能测试 | 2 | dts2cpp enum 对齐 test_14：单行 enum 位运算赋值 的解析结果与性能。 |
| 545 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0011` | 性能测试 | 2 | dts2cpp enum 对齐 test_15：单行 const enum 的解析结果与性能。 |
| 546 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0012` | 性能测试 | 2 | dts2cpp enum 对齐 test_16：单行 const enum 复杂表达式 的解析结果与性能。 |
| 547 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0013` | 性能测试 | 2 | dts2cpp enum 对齐 test_21：下划线命名 enum/成员 的解析结果与性能。 |
| 548 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0014` | 性能测试 | 2 | dts2cpp enum 对齐 test_22：export enum 的解析结果与性能。 |
| 549 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0015` | 性能测试 | 2 | dts2cpp enum 对齐 test_23：declare enum 的解析结果与性能。 |
| 550 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0016` | 性能测试 | 2 | dts2cpp enum 对齐 test_24：namespace 嵌套 export enum 的解析结果与性能。 |
| 551 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0017` | 性能测试 | 2 | dts2cpp enum 对齐 test_25：成员 as 别名（members 拆分为 as/West） 的解析结果与性能。 |
| 552 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0018` | 性能测试 | 2 | dts2cpp enum 对齐 test_26：装饰符赋值（values 为空串） 的解析结果与性能。 |
| 553 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0019` | 性能测试 | 2 | dts2cpp enum 对齐 test_27：下划线开头成员 的解析结果与性能。 |
| 554 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0020` | 性能测试 | 2 | dts2cpp enum 对齐 test_28：匿名 enum 的解析结果与性能。 |
| 555 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0021` | 性能测试 | 2 | dts2cpp enum 对齐 test_31：空成员 enum 的解析结果与性能。 |
| 556 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0022` | 性能测试 | 2 | dts2cpp enum 对齐 test_32：完全匿名空 enum 的解析结果与性能。 |
| 557 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0023` | 性能测试 | 2 | dts2cpp enum 对齐 test_33：同文件两个 enum 的解析结果与性能。 |
| 558 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0024` | 性能测试 | 2 | dts2cpp enum 对齐 test_34：整体注释掉的 enum（enums 为空） 的解析结果与性能。 |
| 559 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0025` | 性能测试 | 2 | dts2cpp enum 对齐 test_35：const enum 箭头函数赋值 的解析结果与性能。 |
| 560 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0026` | 性能测试 | 2 | dts2cpp enum 对齐 test_36：空赋值 Active = , 的解析结果与性能。 |
| 561 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0027` | 性能测试 | 2 | dts2cpp enum 对齐 test_37：不完整字符串赋值 的解析结果与性能。 |
| 562 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0028` | 性能测试 | 2 | dts2cpp enum 对齐 test_38：不完整联合赋值 的解析结果与性能。 |
| 563 | `conversion_tsenum.part01.test.ts` | `dts2cpp_enum_0029` | 性能测试 | 2 | dts2cpp enum 扩充：10 成员无值 enum 的解析结果与性能。 |
| 564 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0030` | 性能测试 | 2 | dts2cpp enum 扩充：20 成员无值 enum 的解析结果与性能。 |
| 565 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0031` | 性能测试 | 2 | dts2cpp enum 扩充：50 成员无值 enum（规模压测） 的解析结果与性能。 |
| 566 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0032` | 性能测试 | 2 | dts2cpp enum 扩充：10 成员全部数字赋值 的解析结果与性能。 |
| 567 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0033` | 性能测试 | 2 | dts2cpp enum 扩充：十六进制赋值 的解析结果与性能。 |
| 568 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0034` | 性能测试 | 2 | dts2cpp enum 扩充：二进制赋值 的解析结果与性能。 |
| 569 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0035` | 性能测试 | 2 | dts2cpp enum 扩充：八进制赋值 的解析结果与性能。 |
| 570 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0036` | 性能测试 | 2 | dts2cpp enum 扩充：负数赋值 的解析结果与性能。 |
| 571 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0037` | 性能测试 | 2 | dts2cpp enum 扩充：浮点赋值 的解析结果与性能。 |
| 572 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0038` | 性能测试 | 2 | dts2cpp enum 扩充：字符串字面量赋值 的解析结果与性能。 |
| 573 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0039` | 性能测试 | 2 | dts2cpp enum 扩充：模板字符串赋值 的解析结果与性能。 |
| 574 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0040` | 性能测试 | 2 | dts2cpp enum 扩充：数字/字符串/十六进制混合赋值 的解析结果与性能。 |
| 575 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0041` | 性能测试 | 2 | dts2cpp enum 扩充：11 种算术/位运算表达式赋值 的解析结果与性能。 |
| 576 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0042` | 性能测试 | 2 | dts2cpp enum 扩充：Flags 风格成员引用联合赋值 的解析结果与性能。 |
| 577 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0043` | 性能测试 | 2 | dts2cpp enum 扩充：成员引用后定义成员（前向引用） 的解析结果与性能。 |
| 578 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0044` | 性能测试 | 2 | dts2cpp enum 扩充：成员自引用赋值 的解析结果与性能。 |
| 579 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0045` | 性能测试 | 2 | dts2cpp enum 扩充：bigint 赋值 的解析结果与性能。 |
| 580 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0046` | 性能测试 | 2 | dts2cpp enum 扩充：同文件 3 个 enum 的解析结果与性能。 |
| 581 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0047` | 性能测试 | 2 | dts2cpp enum 扩充：同文件 5 个 enum（多声明吞吐） 的解析结果与性能。 |
| 582 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0048` | 性能测试 | 2 | dts2cpp enum 扩充：export const enum 组合 的解析结果与性能。 |
| 583 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0049` | 性能测试 | 2 | dts2cpp enum 扩充：declare const enum 组合 的解析结果与性能。 |
| 584 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0050` | 性能测试 | 2 | dts2cpp enum 扩充：namespace 内 2 个 enum 的解析结果与性能。 |
| 585 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0051` | 性能测试 | 2 | dts2cpp enum 扩充：中文 enum 名 的解析结果与性能。 |
| 586 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0052` | 性能测试 | 2 | dts2cpp enum 扩充：中文成员名 的解析结果与性能。 |
| 587 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0053` | 性能测试 | 2 | dts2cpp enum 扩充：尾逗号成员 的解析结果与性能。 |
| 588 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0054` | 性能测试 | 2 | dts2cpp enum 扩充：无尾分号 enum 的解析结果与性能。 |
| 589 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0055` | 性能测试 | 2 | dts2cpp enum 扩充：字符串/数字/位运算三态混合赋值 的解析结果与性能。 |
| 590 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0056` | 性能测试 | 2 | dts2cpp enum 扩充：单成员 enum 的解析结果与性能。 |
| 591 | `conversion_tsenum.part02.test.ts` | `dts2cpp_enum_0057` | 性能测试 | 2 | dts2cpp enum 扩充：部分空赋值容错 的解析结果与性能。 |
| 592 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0062` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（无赋值） 的解析结果与性能。 |
| 593 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0063` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 594 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0064` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 595 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0065` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 596 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0066` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 597 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0067` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：2 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 598 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0068` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（无赋值） 的解析结果与性能。 |
| 599 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0069` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 600 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0070` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 601 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0071` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 602 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0072` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 603 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0073` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：3 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 604 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0074` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（无赋值） 的解析结果与性能。 |
| 605 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0075` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 606 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0076` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 607 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0077` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 608 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0078` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 609 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0079` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：4 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 610 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0080` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（无赋值） 的解析结果与性能。 |
| 611 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0081` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 612 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0082` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 613 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0083` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 614 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0084` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 615 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0085` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：5 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 616 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0086` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（无赋值） 的解析结果与性能。 |
| 617 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0087` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 618 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0088` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 619 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0089` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 620 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0090` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 621 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0091` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：6 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 622 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0092` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（无赋值） 的解析结果与性能。 |
| 623 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0093` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 624 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0094` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 625 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0095` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 626 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0096` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 627 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0097` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：7 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 628 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0098` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（无赋值） 的解析结果与性能。 |
| 629 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0099` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 630 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0100` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 631 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0101` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 632 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0102` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 633 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0103` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：8 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 634 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0104` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（无赋值） 的解析结果与性能。 |
| 635 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0105` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 636 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0106` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 637 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0107` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 638 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0108` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 639 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0109` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：9 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 640 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0110` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（无赋值） 的解析结果与性能。 |
| 641 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0111` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 642 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0112` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 643 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0113` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 644 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0114` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 645 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0115` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：10 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 646 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0116` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（无赋值） 的解析结果与性能。 |
| 647 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0117` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 648 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0118` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 649 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0119` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 650 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0120` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 651 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0121` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：11 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 652 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0122` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（无赋值） 的解析结果与性能。 |
| 653 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0123` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 654 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0124` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 655 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0125` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 656 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0126` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 657 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0127` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：12 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 658 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0128` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（无赋值） 的解析结果与性能。 |
| 659 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0129` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 660 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0130` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 661 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0131` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 662 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0132` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 663 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0133` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：13 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 664 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0134` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（无赋值） 的解析结果与性能。 |
| 665 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0135` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 666 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0136` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 667 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0137` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 668 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0138` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 669 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0139` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：14 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 670 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0140` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（无赋值） 的解析结果与性能。 |
| 671 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0141` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 672 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0142` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 673 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0143` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 674 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0144` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 675 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0145` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：15 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 676 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0146` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（无赋值） 的解析结果与性能。 |
| 677 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0147` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 678 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0148` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 679 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0149` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 680 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0150` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 681 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0151` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：16 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 682 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0152` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（无赋值） 的解析结果与性能。 |
| 683 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0153` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 684 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0154` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 685 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0155` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 686 | `conversion_tsenum.part03.test.ts` | `dts2cpp_enum_0156` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 687 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0157` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：17 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 688 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0158` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（无赋值） 的解析结果与性能。 |
| 689 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0159` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 690 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0160` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 691 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0161` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 692 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0162` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 693 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0163` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：18 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 694 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0164` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（无赋值） 的解析结果与性能。 |
| 695 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0165` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 696 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0166` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 697 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0167` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 698 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0168` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 699 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0169` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：19 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 700 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0170` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（无赋值） 的解析结果与性能。 |
| 701 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0171` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 702 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0172` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 703 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0173` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 704 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0174` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 705 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0175` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：20 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 706 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0176` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（无赋值） 的解析结果与性能。 |
| 707 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0177` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 708 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0178` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 709 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0179` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 710 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0180` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 711 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0181` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：21 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 712 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0182` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（无赋值） 的解析结果与性能。 |
| 713 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0183` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 714 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0184` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 715 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0185` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 716 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0186` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 717 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0187` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：22 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 718 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0188` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（无赋值） 的解析结果与性能。 |
| 719 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0189` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 720 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0190` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 721 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0191` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 722 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0192` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 723 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0193` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：23 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 724 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0194` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（无赋值） 的解析结果与性能。 |
| 725 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0195` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 726 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0196` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 727 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0197` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 728 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0198` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 729 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0199` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：24 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 730 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0200` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（无赋值） 的解析结果与性能。 |
| 731 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0201` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 732 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0202` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 733 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0203` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 734 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0204` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 735 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0205` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：25 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 736 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0206` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（无赋值） 的解析结果与性能。 |
| 737 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0207` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 738 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0208` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 739 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0209` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 740 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0210` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 741 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0211` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：26 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 742 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0212` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（无赋值） 的解析结果与性能。 |
| 743 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0213` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 744 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0214` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 745 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0215` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 746 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0216` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 747 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0217` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：27 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 748 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0218` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（无赋值） 的解析结果与性能。 |
| 749 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0219` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 750 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0220` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 751 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0221` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 752 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0222` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 753 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0223` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：28 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 754 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0224` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（无赋值） 的解析结果与性能。 |
| 755 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0225` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 756 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0226` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 757 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0227` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 758 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0228` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 759 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0229` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：29 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 760 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0230` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（无赋值） 的解析结果与性能。 |
| 761 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0231` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 762 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0232` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 763 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0233` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 764 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0234` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 765 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0235` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：30 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 766 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0236` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（无赋值） 的解析结果与性能。 |
| 767 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0237` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 768 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0238` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 769 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0239` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 770 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0240` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 771 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0241` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：31 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 772 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0242` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（无赋值） 的解析结果与性能。 |
| 773 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0243` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 774 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0244` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 775 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0245` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 776 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0246` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 777 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0247` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：32 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 778 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0248` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（无赋值） 的解析结果与性能。 |
| 779 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0249` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 780 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0250` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 781 | `conversion_tsenum.part04.test.ts` | `dts2cpp_enum_0251` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 782 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0252` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 783 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0253` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：33 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 784 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0254` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（无赋值） 的解析结果与性能。 |
| 785 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0255` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 786 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0256` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 787 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0257` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 788 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0258` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 789 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0259` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：34 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 790 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0260` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（无赋值） 的解析结果与性能。 |
| 791 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0261` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 792 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0262` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 793 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0263` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 794 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0264` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 795 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0265` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：35 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 796 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0266` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（无赋值） 的解析结果与性能。 |
| 797 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0267` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 798 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0268` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 799 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0269` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 800 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0270` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 801 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0271` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：36 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 802 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0272` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（无赋值） 的解析结果与性能。 |
| 803 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0273` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 804 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0274` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 805 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0275` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 806 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0276` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 807 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0277` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：37 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 808 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0278` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（无赋值） 的解析结果与性能。 |
| 809 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0279` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 810 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0280` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 811 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0281` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 812 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0282` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 813 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0283` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：38 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 814 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0284` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（无赋值） 的解析结果与性能。 |
| 815 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0285` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 816 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0286` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 817 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0287` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 818 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0288` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 819 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0289` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：39 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 820 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0290` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（无赋值） 的解析结果与性能。 |
| 821 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0291` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部数字赋值） 的解析结果与性能。 |
| 822 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0292` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部字符串赋值） 的解析结果与性能。 |
| 823 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0293` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部十六进制赋值） 的解析结果与性能。 |
| 824 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0294` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（全部位运算赋值） 的解析结果与性能。 |
| 825 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0295` | 性能测试 | 2 | dts2cpp enum 扩充-矩阵：40 成员 enum（奇偶数字/字符串混合赋值） 的解析结果与性能。 |
| 826 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0296` | 性能测试 | 2 | dts2cpp enum 扩充-命名：UpperCamel 的解析结果与性能。 |
| 827 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0297` | 性能测试 | 2 | dts2cpp enum 扩充-命名：lowerCamel 的解析结果与性能。 |
| 828 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0298` | 性能测试 | 2 | dts2cpp enum 扩充-命名：snake_case 的解析结果与性能。 |
| 829 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0299` | 性能测试 | 2 | dts2cpp enum 扩充-命名：TRAILING_DIGITS2 的解析结果与性能。 |
| 830 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0300` | 性能测试 | 2 | dts2cpp enum 扩充-命名：leading_underscore 的解析结果与性能。 |
| 831 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0301` | 性能测试 | 2 | dts2cpp enum 扩充-命名：Double__Under 的解析结果与性能。 |
| 832 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0302` | 性能测试 | 2 | dts2cpp enum 扩充-命名：ClassName 的解析结果与性能。 |
| 833 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0303` | 性能测试 | 2 | dts2cpp enum 扩充-命名：E 的解析结果与性能。 |
| 834 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0304` | 性能测试 | 2 | dts2cpp enum 扩充-命名：E1 的解析结果与性能。 |
| 835 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0305` | 性能测试 | 2 | dts2cpp enum 扩充-命名：e1 的解析结果与性能。 |
| 836 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0306` | 性能测试 | 2 | dts2cpp enum 扩充-命名：EN 的解析结果与性能。 |
| 837 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0307` | 性能测试 | 2 | dts2cpp enum 扩充-命名：en 的解析结果与性能。 |
| 838 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0308` | 性能测试 | 2 | dts2cpp enum 扩充-命名：Enum 的解析结果与性能。 |
| 839 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0309` | 性能测试 | 2 | dts2cpp enum 扩充-命名：enum1 的解析结果与性能。 |
| 840 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0310` | 性能测试 | 2 | dts2cpp enum 扩充-命名：Enum123 的解析结果与性能。 |
| 841 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0311` | 性能测试 | 2 | dts2cpp enum 扩充-命名：状态码 的解析结果与性能。 |
| 842 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0312` | 性能测试 | 2 | dts2cpp enum 扩充-命名：状态码2 的解析结果与性能。 |
| 843 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0313` | 性能测试 | 2 | dts2cpp enum 扩充-命名：_internal 的解析结果与性能。 |
| 844 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0314` | 性能测试 | 2 | dts2cpp enum 扩充-命名：VersionV2 的解析结果与性能。 |
| 845 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0315` | 性能测试 | 2 | dts2cpp enum 扩充-命名：HTTPStatus 的解析结果与性能。 |
| 846 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0316` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 2 个 enum 的解析结果与性能。 |
| 847 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0317` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 3 个 enum 的解析结果与性能。 |
| 848 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0318` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 4 个 enum 的解析结果与性能。 |
| 849 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0319` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 5 个 enum 的解析结果与性能。 |
| 850 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0320` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 6 个 enum 的解析结果与性能。 |
| 851 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0321` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 7 个 enum 的解析结果与性能。 |
| 852 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0322` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 8 个 enum 的解析结果与性能。 |
| 853 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0323` | 性能测试 | 2 | dts2cpp enum 扩充-多声明：同文件 10 个 enum 的解析结果与性能。 |
| 854 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0324` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export enum 的解析结果与性能。 |
| 855 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0325` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：declare enum 的解析结果与性能。 |
| 856 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0326` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：const enum 的解析结果与性能。 |
| 857 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0327` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export const enum 的解析结果与性能。 |
| 858 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0328` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：declare const enum 的解析结果与性能。 |
| 859 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0329` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export declare enum 的解析结果与性能。 |
| 860 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0330` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：export declare const enum 的解析结果与性能。 |
| 861 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0331` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：namespace+export enum 的解析结果与性能。 |
| 862 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0332` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：namespace+declare enum 的解析结果与性能。 |
| 863 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0333` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：namespace+export const enum 的解析结果与性能。 |
| 864 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0334` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：module+export enum 的解析结果与性能。 |
| 865 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0335` | 性能测试 | 2 | dts2cpp enum 扩充-修饰符：module+declare const enum 的解析结果与性能。 |
| 866 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0336` | 性能测试 | 2 | dts2cpp enum 扩充-边界：空 enum 的解析结果与性能。 |
| 867 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0337` | 性能测试 | 2 | dts2cpp enum 扩充-边界：单成员 的解析结果与性能。 |
| 868 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0338` | 性能测试 | 2 | dts2cpp enum 扩充-边界：单成员赋值 的解析结果与性能。 |
| 869 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0339` | 性能测试 | 2 | dts2cpp enum 扩充-边界：尾逗号 的解析结果与性能。 |
| 870 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0340` | 性能测试 | 2 | dts2cpp enum 扩充-边界：无分号 的解析结果与性能。 |
| 871 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0341` | 性能测试 | 2 | dts2cpp enum 扩充-边界：注释成员 的解析结果与性能。 |
| 872 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0342` | 性能测试 | 2 | dts2cpp enum 扩充-边界：块注释 的解析结果与性能。 |
| 873 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0343` | 性能测试 | 2 | dts2cpp enum 扩充-边界：中文成员 的解析结果与性能。 |
| 874 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0344` | 性能测试 | 2 | dts2cpp enum 扩充-边界：成员引用联合 的解析结果与性能。 |
| 875 | `conversion_tsenum.part05.test.ts` | `dts2cpp_enum_0345` | 性能测试 | 2 | dts2cpp enum 扩充-边界：前向引用 的解析结果与性能。 |
| 876 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0346` | 性能测试 | 2 | dts2cpp enum import-自定义文件：import + enum 的解析结果与性能。 |
| 877 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0347` | 性能测试 | 2 | dts2cpp enum import-自定义文件：import + export enum 赋值 的解析结果与性能。 |
| 878 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0348` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举：namespace 内变量 + enum 的解析结果与性能。 |
| 879 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0349` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举：export namespace 内变量 + enum 的解析结果与性能。 |
| 880 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0350` | 性能测试 | 2 | dts2cpp enum import-自定义文件：import + const enum 的解析结果与性能。 |
| 881 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0351` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举+函数：多枚举混合 的解析结果与性能。 |
| 882 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0352` | 性能测试 | 2 | dts2cpp enum import-自定义文件：枚举值引用导入枚举 的解析结果与性能。 |
| 883 | `conversion_tsenum.part06.test.ts` | `dts2cpp_enum_0353` | 性能测试 | 2 | dts2cpp enum namespace-变量+枚举：declare namespace 枚举 的解析结果与性能。 |
| 884 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0001` | 性能测试 | 2 | dts2cpp class 对齐 parsetsclass test_1：一般 class（2 属性 + 2 无返回注解方法） 的解析结果与性能。 |
| 885 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0002` | 性能测试 | 2 | dts2cpp class 对齐 test_2：30 属性 + 13 方法全类型覆盖（含函数类型字段与 Map/Array/Set） 的解析结果与性能。 |
| 886 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0003` | 性能测试 | 2 | dts2cpp class 对齐 test_3：模板类 的解析结果与性能。 |
| 887 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0004` | 性能测试 | 2 | dts2cpp class 对齐 test_4：继承 extends 的解析结果与性能。 |
| 888 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0005` | 性能测试 | 2 | dts2cpp class 对齐 test_5：定长数组维度属性/参数 的解析结果与性能。 |
| 889 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0006` | 性能测试 | 2 | dts2cpp class 对齐 test_6：模板继承约束 的解析结果与性能。 |
| 890 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0007` | 性能测试 | 2 | dts2cpp class 对齐 test_7：可选属性/参数 的解析结果与性能。 |
| 891 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0008` | 性能测试 | 2 | dts2cpp class 对齐 test_8：多种注释 的解析结果与性能。 |
| 892 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0009` | 性能测试 | 2 | dts2cpp class 对齐 test_9：readonly/public/private/const 修饰符（剥离后解析） 的解析结果与性能。 |
| 893 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0010` | 性能测试 | 2 | dts2cpp class 对齐 test_10：索引签名（解析时丢弃） 的解析结果与性能。 |
| 894 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0011` | 性能测试 | 2 | dts2cpp class 对齐 test_13：泛型对象/字面量/嵌套泛型属性 的解析结果与性能。 |
| 895 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0012` | 性能测试 | 2 | dts2cpp class 对齐 test_14：ReadonlyArray/readonly 数组/元组属性 的解析结果与性能。 |
| 896 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0013` | 性能测试 | 2 | dts2cpp class 对齐 test_16：readonly/普通元组属性 的解析结果与性能。 |
| 897 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0014` | 性能测试 | 2 | dts2cpp class 对齐 test_17：keyof 属性 的解析结果与性能。 |
| 898 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0015` | 性能测试 | 2 | dts2cpp class 对齐 test_19：索引访问类型属性 的解析结果与性能。 |
| 899 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0016` | 性能测试 | 2 | dts2cpp class 对齐 test_20：条件类型属性 的解析结果与性能。 |
| 900 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0017` | 性能测试 | 2 | dts2cpp class 对齐 test_22：模板字面类型与泛型方法 的解析结果与性能。 |
| 901 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0018` | 性能测试 | 2 | dts2cpp class 对齐 test_23：内在字符串操作类型属性 的解析结果与性能。 |
| 902 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0019` | 性能测试 | 2 | dts2cpp class 对齐 test_24：export class 的解析结果与性能。 |
| 903 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0020` | 性能测试 | 2 | dts2cpp class 对齐 test_26：declare namespace 嵌套类 的解析结果与性能。 |
| 904 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0021` | 性能测试 | 2 | dts2cpp class 对齐 test_27：namespace 内继承类 的解析结果与性能。 |
| 905 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0022` | 性能测试 | 2 | dts2cpp class 对齐 test_28：namespace 内两个独立类 的解析结果与性能。 |
| 906 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0023` | 性能测试 | 2 | dts2cpp class 对齐 test_42：单行 class 的解析结果与性能。 |
| 907 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0024` | 性能测试 | 2 | dts2cpp class 对齐 test_45：中文类名与继承 的解析结果与性能。 |
| 908 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0025` | 性能测试 | 2 | dts2cpp class 对齐 test_49：两个空类 的解析结果与性能。 |
| 909 | `conversion_tsclass.part01.test.ts` | `dts2cpp_class_0026` | 性能测试 | 2 | dts2cpp class 对齐 test_64：单行 export class 的解析结果与性能。 |
| 910 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0027` | 性能测试 | 2 | dts2cpp class 对齐 test_69：可选/非空断言属性与 rest 参数方法 的解析结果与性能。 |
| 911 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0028` | 性能测试 | 2 | dts2cpp class 对齐 test_70：函数重载（3 个重载签名） 的解析结果与性能。 |
| 912 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0029` | 性能测试 | 2 | dts2cpp class 对齐 test_72：static/abstract/protected/this 参数 的解析结果与性能。 |
| 913 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0030` | 性能测试 | 2 | dts2cpp class 对齐 test_74：getter/setter 的解析结果与性能。 |
| 914 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0031` | 性能测试 | 2 | dts2cpp class 对齐 test_75：implements 接口 的解析结果与性能。 |
| 915 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0032` | 性能测试 | 2 | dts2cpp class 扩充：20 属性全基本类型/容器/元组矩阵 的解析结果与性能。 |
| 916 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0033` | 性能测试 | 2 | dts2cpp class 扩充：30 属性进阶类型矩阵（含内置对象/容器嵌套） 的解析结果与性能。 |
| 917 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0034` | 性能测试 | 2 | dts2cpp class 扩充：50 属性全类型矩阵（规模压测） 的解析结果与性能。 |
| 918 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0035` | 性能测试 | 2 | dts2cpp class 扩充：20 方法返回类型矩阵（基本/数组/元组/联合/函数/对象） 的解析结果与性能。 |
| 919 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0036` | 性能测试 | 2 | dts2cpp class 扩充：10 方法参数形态矩阵（多参/可选/rest/默认/解构/联合/容器） 的解析结果与性能。 |
| 920 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0037` | 性能测试 | 2 | dts2cpp class 扩充：多参数 + 返回注解方法组合 的解析结果与性能。 |
| 921 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0038` | 性能测试 | 2 | dts2cpp class 扩充：同文件两个完整类 的解析结果与性能。 |
| 922 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0039` | 性能测试 | 2 | dts2cpp class 扩充：同文件三个类（多声明吞吐） 的解析结果与性能。 |
| 923 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0040` | 性能测试 | 2 | dts2cpp class 扩充：双泛型类 的解析结果与性能。 |
| 924 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0041` | 性能测试 | 2 | dts2cpp class 扩充：属性默认值初始化 的解析结果与性能。 |
| 925 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0042` | 性能测试 | 2 | dts2cpp class 扩充：三重重载方法 的解析结果与性能。 |
| 926 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0043` | 性能测试 | 2 | dts2cpp class 扩充：中文类名/属性/方法 的解析结果与性能。 |
| 927 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0044` | 性能测试 | 2 | dts2cpp class 扩充：空类 的解析结果与性能。 |
| 928 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0045` | 性能测试 | 2 | dts2cpp class 扩充：implements 多接口 的解析结果与性能。 |
| 929 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0046` | 性能测试 | 2 | dts2cpp class 扩充：三级继承链 的解析结果与性能。 |
| 930 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0047` | 性能测试 | 2 | dts2cpp class 扩充：10 属性 + 10 方法混合大集合 的解析结果与性能。 |
| 931 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0048` | 性能测试 | 2 | dts2cpp class 扩充：字面量/交集/模板/联合属性矩阵 的解析结果与性能。 |
| 932 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0049` | 性能测试 | 2 | dts2cpp class 扩充：字面量联合参数与返回 的解析结果与性能。 |
| 933 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0050` | 性能测试 | 2 | dts2cpp class 扩充：内置对象引用联合参数/返回 的解析结果与性能。 |
| 934 | `conversion_tsclass.part02.test.ts` | `dts2cpp_class_0051` | 性能测试 | 2 | dts2cpp class 扩充：数组参数/多维数组返回 的解析结果与性能。 |
| 935 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0052` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × plain 修饰（4 属性） 的解析结果与性能。 |
| 936 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0053` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × public 修饰（4 属性） 的解析结果与性能。 |
| 937 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0054` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × readonly 修饰（4 属性） 的解析结果与性能。 |
| 938 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0055` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number × optional 修饰（4 属性） 的解析结果与性能。 |
| 939 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0056` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × plain 修饰（4 属性） 的解析结果与性能。 |
| 940 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0057` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × public 修饰（4 属性） 的解析结果与性能。 |
| 941 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0058` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × readonly 修饰（4 属性） 的解析结果与性能。 |
| 942 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0059` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string × optional 修饰（4 属性） 的解析结果与性能。 |
| 943 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0060` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × plain 修饰（4 属性） 的解析结果与性能。 |
| 944 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0061` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × public 修饰（4 属性） 的解析结果与性能。 |
| 945 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0062` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × readonly 修饰（4 属性） 的解析结果与性能。 |
| 946 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0063` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean × optional 修饰（4 属性） 的解析结果与性能。 |
| 947 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0064` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × plain 修饰（4 属性） 的解析结果与性能。 |
| 948 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0065` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × public 修饰（4 属性） 的解析结果与性能。 |
| 949 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0066` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × readonly 修饰（4 属性） 的解析结果与性能。 |
| 950 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0067` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：any × optional 修饰（4 属性） 的解析结果与性能。 |
| 951 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0068` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × plain 修饰（4 属性） 的解析结果与性能。 |
| 952 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0069` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × public 修饰（4 属性） 的解析结果与性能。 |
| 953 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0070` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × readonly 修饰（4 属性） 的解析结果与性能。 |
| 954 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0071` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：unknown × optional 修饰（4 属性） 的解析结果与性能。 |
| 955 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0072` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × plain 修饰（4 属性） 的解析结果与性能。 |
| 956 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0073` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × public 修饰（4 属性） 的解析结果与性能。 |
| 957 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0074` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × readonly 修饰（4 属性） 的解析结果与性能。 |
| 958 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0075` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：null × optional 修饰（4 属性） 的解析结果与性能。 |
| 959 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0076` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × plain 修饰（4 属性） 的解析结果与性能。 |
| 960 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0077` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × public 修饰（4 属性） 的解析结果与性能。 |
| 961 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0078` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × readonly 修饰（4 属性） 的解析结果与性能。 |
| 962 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0079` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：undefined × optional 修饰（4 属性） 的解析结果与性能。 |
| 963 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0080` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × plain 修饰（4 属性） 的解析结果与性能。 |
| 964 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0081` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × public 修饰（4 属性） 的解析结果与性能。 |
| 965 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0082` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × readonly 修饰（4 属性） 的解析结果与性能。 |
| 966 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0083` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：symbol × optional 修饰（4 属性） 的解析结果与性能。 |
| 967 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0084` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × plain 修饰（4 属性） 的解析结果与性能。 |
| 968 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0085` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × public 修饰（4 属性） 的解析结果与性能。 |
| 969 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0086` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × readonly 修饰（4 属性） 的解析结果与性能。 |
| 970 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0087` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：bigint × optional 修饰（4 属性） 的解析结果与性能。 |
| 971 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0088` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × plain 修饰（4 属性） 的解析结果与性能。 |
| 972 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0089` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × public 修饰（4 属性） 的解析结果与性能。 |
| 973 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0090` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × readonly 修饰（4 属性） 的解析结果与性能。 |
| 974 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0091` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：object × optional 修饰（4 属性） 的解析结果与性能。 |
| 975 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0092` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × plain 修饰（4 属性） 的解析结果与性能。 |
| 976 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0093` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × public 修饰（4 属性） 的解析结果与性能。 |
| 977 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0094` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 978 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0095` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：number[] × optional 修饰（4 属性） 的解析结果与性能。 |
| 979 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0096` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × plain 修饰（4 属性） 的解析结果与性能。 |
| 980 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0097` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × public 修饰（4 属性） 的解析结果与性能。 |
| 981 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0098` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 982 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0099` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string[] × optional 修饰（4 属性） 的解析结果与性能。 |
| 983 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0100` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × plain 修饰（4 属性） 的解析结果与性能。 |
| 984 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0101` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × public 修饰（4 属性） 的解析结果与性能。 |
| 985 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0102` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 986 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0103` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：boolean[] × optional 修饰（4 属性） 的解析结果与性能。 |
| 987 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0104` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × plain 修饰（4 属性） 的解析结果与性能。 |
| 988 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0105` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × public 修饰（4 属性） 的解析结果与性能。 |
| 989 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0106` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 990 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0107` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Array<number> × optional 修饰（4 属性） 的解析结果与性能。 |
| 991 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0108` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × plain 修饰（4 属性） 的解析结果与性能。 |
| 992 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0109` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × public 修饰（4 属性） 的解析结果与性能。 |
| 993 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0110` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 994 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0111` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Map<string, number> × optional 修饰（4 属性） 的解析结果与性能。 |
| 995 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0112` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × plain 修饰（4 属性） 的解析结果与性能。 |
| 996 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0113` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × public 修饰（4 属性） 的解析结果与性能。 |
| 997 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0114` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 998 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0115` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Set<number> × optional 修饰（4 属性） 的解析结果与性能。 |
| 999 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0116` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × plain 修饰（4 属性） 的解析结果与性能。 |
| 1000 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0117` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × public 修饰（4 属性） 的解析结果与性能。 |
| 1001 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0118` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1002 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0119` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Record<string, string> × optional 修饰（4 属性） 的解析结果与性能。 |
| 1003 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0120` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × plain 修饰（4 属性） 的解析结果与性能。 |
| 1004 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0121` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × public 修饰（4 属性） 的解析结果与性能。 |
| 1005 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0122` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1006 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0123` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Promise<string> × optional 修饰（4 属性） 的解析结果与性能。 |
| 1007 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0124` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × plain 修饰（4 属性） 的解析结果与性能。 |
| 1008 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0125` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × public 修饰（4 属性） 的解析结果与性能。 |
| 1009 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0126` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1010 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0127` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：[string, number] × optional 修饰（4 属性） 的解析结果与性能。 |
| 1011 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0128` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × plain 修饰（4 属性） 的解析结果与性能。 |
| 1012 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0129` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × public 修饰（4 属性） 的解析结果与性能。 |
| 1013 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0130` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1014 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0131` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：(a: number) => void × optional 修饰（4 属性） 的解析结果与性能。 |
| 1015 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0132` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × plain 修饰（4 属性） 的解析结果与性能。 |
| 1016 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0133` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × public 修饰（4 属性） 的解析结果与性能。 |
| 1017 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0134` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1018 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0135` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Date × optional 修饰（4 属性） 的解析结果与性能。 |
| 1019 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0136` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × plain 修饰（4 属性） 的解析结果与性能。 |
| 1020 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0137` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × public 修饰（4 属性） 的解析结果与性能。 |
| 1021 | `conversion_tsclass.part03.test.ts` | `dts2cpp_class_0138` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1022 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0139` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：RegExp × optional 修饰（4 属性） 的解析结果与性能。 |
| 1023 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0140` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × plain 修饰（4 属性） 的解析结果与性能。 |
| 1024 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0141` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × public 修饰（4 属性） 的解析结果与性能。 |
| 1025 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0142` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1026 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0143` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Error × optional 修饰（4 属性） 的解析结果与性能。 |
| 1027 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0144` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × plain 修饰（4 属性） 的解析结果与性能。 |
| 1028 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0145` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × public 修饰（4 属性） 的解析结果与性能。 |
| 1029 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0146` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1030 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0147` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：Uint8Array × optional 修饰（4 属性） 的解析结果与性能。 |
| 1031 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0148` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × plain 修饰（4 属性） 的解析结果与性能。 |
| 1032 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0149` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × public 修饰（4 属性） 的解析结果与性能。 |
| 1033 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0150` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1034 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0151` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵："lit" × optional 修饰（4 属性） 的解析结果与性能。 |
| 1035 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0152` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × plain 修饰（4 属性） 的解析结果与性能。 |
| 1036 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0153` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × public 修饰（4 属性） 的解析结果与性能。 |
| 1037 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0154` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1038 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0155` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：42 × optional 修饰（4 属性） 的解析结果与性能。 |
| 1039 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0156` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × plain 修饰（4 属性） 的解析结果与性能。 |
| 1040 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0157` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × public 修饰（4 属性） 的解析结果与性能。 |
| 1041 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0158` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1042 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0159` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：true × optional 修饰（4 属性） 的解析结果与性能。 |
| 1043 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0160` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × plain 修饰（4 属性） 的解析结果与性能。 |
| 1044 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0161` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × public 修饰（4 属性） 的解析结果与性能。 |
| 1045 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0162` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1046 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0163` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string | number × optional 修饰（4 属性） 的解析结果与性能。 |
| 1047 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0164` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × plain 修饰（4 属性） 的解析结果与性能。 |
| 1048 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0165` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × public 修饰（4 属性） 的解析结果与性能。 |
| 1049 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0166` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1050 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0167` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：string & {} × optional 修饰（4 属性） 的解析结果与性能。 |
| 1051 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0168` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × plain 修饰（4 属性） 的解析结果与性能。 |
| 1052 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0169` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × public 修饰（4 属性） 的解析结果与性能。 |
| 1053 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0170` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × readonly 修饰（4 属性） 的解析结果与性能。 |
| 1054 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0171` | 性能测试 | 2 | dts2cpp class 扩充-属性矩阵：{ id: number } × optional 修饰（4 属性） 的解析结果与性能。 |
| 1055 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0172` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number（无参方法 ×3） 的解析结果与性能。 |
| 1056 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0173` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number（带参方法 ×3） 的解析结果与性能。 |
| 1057 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0174` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string（无参方法 ×3） 的解析结果与性能。 |
| 1058 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0175` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string（带参方法 ×3） 的解析结果与性能。 |
| 1059 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0176` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean（无参方法 ×3） 的解析结果与性能。 |
| 1060 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0177` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean（带参方法 ×3） 的解析结果与性能。 |
| 1061 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0178` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 any（无参方法 ×3） 的解析结果与性能。 |
| 1062 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0179` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 any（带参方法 ×3） 的解析结果与性能。 |
| 1063 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0180` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 unknown（无参方法 ×3） 的解析结果与性能。 |
| 1064 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0181` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 unknown（带参方法 ×3） 的解析结果与性能。 |
| 1065 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0182` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 null（无参方法 ×3） 的解析结果与性能。 |
| 1066 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0183` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 null（带参方法 ×3） 的解析结果与性能。 |
| 1067 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0184` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 undefined（无参方法 ×3） 的解析结果与性能。 |
| 1068 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0185` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 undefined（带参方法 ×3） 的解析结果与性能。 |
| 1069 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0186` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 symbol（无参方法 ×3） 的解析结果与性能。 |
| 1070 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0187` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 symbol（带参方法 ×3） 的解析结果与性能。 |
| 1071 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0188` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 bigint（无参方法 ×3） 的解析结果与性能。 |
| 1072 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0189` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 bigint（带参方法 ×3） 的解析结果与性能。 |
| 1073 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0190` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 object（无参方法 ×3） 的解析结果与性能。 |
| 1074 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0191` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 object（带参方法 ×3） 的解析结果与性能。 |
| 1075 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0192` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number[]（无参方法 ×3） 的解析结果与性能。 |
| 1076 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0193` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 number[]（带参方法 ×3） 的解析结果与性能。 |
| 1077 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0194` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string[]（无参方法 ×3） 的解析结果与性能。 |
| 1078 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0195` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string[]（带参方法 ×3） 的解析结果与性能。 |
| 1079 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0196` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean[][]（无参方法 ×3） 的解析结果与性能。 |
| 1080 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0197` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean[][]（带参方法 ×3） 的解析结果与性能。 |
| 1081 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0198` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 [string, number]（无参方法 ×3） 的解析结果与性能。 |
| 1082 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0199` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 [string, number]（带参方法 ×3） 的解析结果与性能。 |
| 1083 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0200` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 (a: number) => void（无参方法 ×3） 的解析结果与性能。 |
| 1084 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0201` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 (a: number) => void（带参方法 ×3） 的解析结果与性能。 |
| 1085 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0202` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string | number（无参方法 ×3） 的解析结果与性能。 |
| 1086 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0203` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 string | number（带参方法 ×3） 的解析结果与性能。 |
| 1087 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0204` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean | null（无参方法 ×3） 的解析结果与性能。 |
| 1088 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0205` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 boolean | null（带参方法 ×3） 的解析结果与性能。 |
| 1089 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0206` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 "lit" | 1（无参方法 ×3） 的解析结果与性能。 |
| 1090 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0207` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 "lit" | 1（带参方法 ×3） 的解析结果与性能。 |
| 1091 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0208` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 42（无参方法 ×3） 的解析结果与性能。 |
| 1092 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0209` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 42（带参方法 ×3） 的解析结果与性能。 |
| 1093 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0210` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 { id: number }（无参方法 ×3） 的解析结果与性能。 |
| 1094 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0211` | 性能测试 | 2 | dts2cpp class 扩充-返回矩阵：方法返回 { id: number }（带参方法 ×3） 的解析结果与性能。 |
| 1095 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0212` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number（单参） 的解析结果与性能。 |
| 1096 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0213` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number（双参第二位） 的解析结果与性能。 |
| 1097 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0214` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string（单参） 的解析结果与性能。 |
| 1098 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0215` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string（双参第二位） 的解析结果与性能。 |
| 1099 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0216` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean（单参） 的解析结果与性能。 |
| 1100 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0217` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean（双参第二位） 的解析结果与性能。 |
| 1101 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0218` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 any（单参） 的解析结果与性能。 |
| 1102 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0219` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 any（双参第二位） 的解析结果与性能。 |
| 1103 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0220` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 unknown（单参） 的解析结果与性能。 |
| 1104 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0221` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 unknown（双参第二位） 的解析结果与性能。 |
| 1105 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0222` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 null（单参） 的解析结果与性能。 |
| 1106 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0223` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 null（双参第二位） 的解析结果与性能。 |
| 1107 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0224` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 undefined（单参） 的解析结果与性能。 |
| 1108 | `conversion_tsclass.part04.test.ts` | `dts2cpp_class_0225` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 undefined（双参第二位） 的解析结果与性能。 |
| 1109 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0226` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 symbol（单参） 的解析结果与性能。 |
| 1110 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0227` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 symbol（双参第二位） 的解析结果与性能。 |
| 1111 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0228` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 bigint（单参） 的解析结果与性能。 |
| 1112 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0229` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 bigint（双参第二位） 的解析结果与性能。 |
| 1113 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0230` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 object（单参） 的解析结果与性能。 |
| 1114 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0231` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 object（双参第二位） 的解析结果与性能。 |
| 1115 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0232` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number[]（单参） 的解析结果与性能。 |
| 1116 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0233` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 number[]（双参第二位） 的解析结果与性能。 |
| 1117 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0234` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string[]（单参） 的解析结果与性能。 |
| 1118 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0235` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 string[]（双参第二位） 的解析结果与性能。 |
| 1119 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0236` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean[]（单参） 的解析结果与性能。 |
| 1120 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0237` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 boolean[]（双参第二位） 的解析结果与性能。 |
| 1121 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0238` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Array<number>（单参） 的解析结果与性能。 |
| 1122 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0239` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Array<number>（双参第二位） 的解析结果与性能。 |
| 1123 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0240` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Map<string, number>（单参） 的解析结果与性能。 |
| 1124 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0241` | 性能测试 | 2 | dts2cpp class 扩充-参数矩阵：方法参数 Map<string, number>（双参第二位） 的解析结果与性能。 |
| 1125 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0242` | 性能测试 | 2 | dts2cpp class 扩充-规模：5 属性 class 的解析结果与性能。 |
| 1126 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0243` | 性能测试 | 2 | dts2cpp class 扩充-规模：10 属性 class 的解析结果与性能。 |
| 1127 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0244` | 性能测试 | 2 | dts2cpp class 扩充-规模：15 属性 class 的解析结果与性能。 |
| 1128 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0245` | 性能测试 | 2 | dts2cpp class 扩充-规模：20 属性 class 的解析结果与性能。 |
| 1129 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0246` | 性能测试 | 2 | dts2cpp class 扩充-规模：25 属性 class 的解析结果与性能。 |
| 1130 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0247` | 性能测试 | 2 | dts2cpp class 扩充-规模：30 属性 class 的解析结果与性能。 |
| 1131 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0248` | 性能测试 | 2 | dts2cpp class 扩充-规模：35 属性 class 的解析结果与性能。 |
| 1132 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0249` | 性能测试 | 2 | dts2cpp class 扩充-规模：40 属性 class 的解析结果与性能。 |
| 1133 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0250` | 性能测试 | 2 | dts2cpp class 扩充-规模：45 属性 class 的解析结果与性能。 |
| 1134 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0251` | 性能测试 | 2 | dts2cpp class 扩充-规模：50 属性 class 的解析结果与性能。 |
| 1135 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0252` | 性能测试 | 2 | dts2cpp class 扩充-规模：55 属性 class 的解析结果与性能。 |
| 1136 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0253` | 性能测试 | 2 | dts2cpp class 扩充-规模：60 属性 class 的解析结果与性能。 |
| 1137 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0254` | 性能测试 | 2 | dts2cpp class 扩充-规模：65 属性 class 的解析结果与性能。 |
| 1138 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0255` | 性能测试 | 2 | dts2cpp class 扩充-规模：70 属性 class 的解析结果与性能。 |
| 1139 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0256` | 性能测试 | 2 | dts2cpp class 扩充-规模：75 属性 class 的解析结果与性能。 |
| 1140 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0257` | 性能测试 | 2 | dts2cpp class 扩充-规模：80 属性 class 的解析结果与性能。 |
| 1141 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0258` | 性能测试 | 2 | dts2cpp class 扩充-规模：85 属性 class 的解析结果与性能。 |
| 1142 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0259` | 性能测试 | 2 | dts2cpp class 扩充-规模：90 属性 class 的解析结果与性能。 |
| 1143 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0260` | 性能测试 | 2 | dts2cpp class 扩充-规模：95 属性 class 的解析结果与性能。 |
| 1144 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0261` | 性能测试 | 2 | dts2cpp class 扩充-规模：100 属性 class 的解析结果与性能。 |
| 1145 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0262` | 性能测试 | 2 | dts2cpp class 扩充-命名：UpperCamel 的解析结果与性能。 |
| 1146 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0263` | 性能测试 | 2 | dts2cpp class 扩充-命名：lowerCamel 的解析结果与性能。 |
| 1147 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0264` | 性能测试 | 2 | dts2cpp class 扩充-命名：snake_case 的解析结果与性能。 |
| 1148 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0265` | 性能测试 | 2 | dts2cpp class 扩充-命名：Trailing2 的解析结果与性能。 |
| 1149 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0266` | 性能测试 | 2 | dts2cpp class 扩充-命名：_leading 的解析结果与性能。 |
| 1150 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0267` | 性能测试 | 2 | dts2cpp class 扩充-命名：Double__Under 的解析结果与性能。 |
| 1151 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0268` | 性能测试 | 2 | dts2cpp class 扩充-命名：C 的解析结果与性能。 |
| 1152 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0269` | 性能测试 | 2 | dts2cpp class 扩充-命名：C1 的解析结果与性能。 |
| 1153 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0270` | 性能测试 | 2 | dts2cpp class 扩充-命名：c1 的解析结果与性能。 |
| 1154 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0271` | 性能测试 | 2 | dts2cpp class 扩充-命名：Class 的解析结果与性能。 |
| 1155 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0272` | 性能测试 | 2 | dts2cpp class 扩充-命名：class1 的解析结果与性能。 |
| 1156 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0273` | 性能测试 | 2 | dts2cpp class 扩充-命名：中文类 的解析结果与性能。 |
| 1157 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0274` | 性能测试 | 2 | dts2cpp class 扩充-命名：VersionV2 的解析结果与性能。 |
| 1158 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0275` | 性能测试 | 2 | dts2cpp class 扩充-命名：HTTPClient 的解析结果与性能。 |
| 1159 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0276` | 性能测试 | 2 | dts2cpp class 扩充-命名：KLASS 的解析结果与性能。 |
| 1160 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0277` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 2 个 class 的解析结果与性能。 |
| 1161 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0278` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 3 个 class 的解析结果与性能。 |
| 1162 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0279` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 4 个 class 的解析结果与性能。 |
| 1163 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0280` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 5 个 class 的解析结果与性能。 |
| 1164 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0281` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 6 个 class 的解析结果与性能。 |
| 1165 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0282` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 7 个 class 的解析结果与性能。 |
| 1166 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0283` | 性能测试 | 2 | dts2cpp class 扩充-多声明：同文件 8 个 class 的解析结果与性能。 |
| 1167 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0284` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：单泛型类 的解析结果与性能。 |
| 1168 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0285` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：双泛型类 的解析结果与性能。 |
| 1169 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0286` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：三泛型类 的解析结果与性能。 |
| 1170 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0287` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型数组属性 的解析结果与性能。 |
| 1171 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0288` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型约束 的解析结果与性能。 |
| 1172 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0289` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型继承基类 的解析结果与性能。 |
| 1173 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0290` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型方法 的解析结果与性能。 |
| 1174 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0291` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：泛型容器属性 的解析结果与性能。 |
| 1175 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0292` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：二级继承 的解析结果与性能。 |
| 1176 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0293` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：三级继承 的解析结果与性能。 |
| 1177 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0294` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：implements 单接口 的解析结果与性能。 |
| 1178 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0295` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：implements 双接口 的解析结果与性能。 |
| 1179 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0296` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：抽象类 的解析结果与性能。 |
| 1180 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0297` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：静态成员 的解析结果与性能。 |
| 1181 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0298` | 性能测试 | 2 | dts2cpp class 扩充-泛型/继承：静态方法 的解析结果与性能。 |
| 1182 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0299` | 性能测试 | 2 | dts2cpp class 扩充-边界：空类 的解析结果与性能。 |
| 1183 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0300` | 性能测试 | 2 | dts2cpp class 扩充-边界：单行类 的解析结果与性能。 |
| 1184 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0301` | 性能测试 | 2 | dts2cpp class 扩充-边界：注释类 的解析结果与性能。 |
| 1185 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0302` | 性能测试 | 2 | dts2cpp class 扩充-边界：索引签名 的解析结果与性能。 |
| 1186 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0303` | 性能测试 | 2 | dts2cpp class 扩充-边界：属性初始化 的解析结果与性能。 |
| 1187 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0304` | 性能测试 | 2 | dts2cpp class 扩充-边界：getter/setter 的解析结果与性能。 |
| 1188 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0305` | 性能测试 | 2 | dts2cpp class 扩充-边界：重载方法 的解析结果与性能。 |
| 1189 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0306` | 性能测试 | 2 | dts2cpp class 扩充-边界：中文类 的解析结果与性能。 |
| 1190 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0307` | 性能测试 | 2 | dts2cpp class 扩充-边界：装饰器属性 的解析结果与性能。 |
| 1191 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0308` | 性能测试 | 2 | dts2cpp class 扩充-边界：方法参数解构 的解析结果与性能。 |
| 1192 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0309` | 性能测试 | 2 | dts2cpp class 扩充-边界：方法 rest 参数 的解析结果与性能。 |
| 1193 | `conversion_tsclass.part05.test.ts` | `dts2cpp_class_0310` | 性能测试 | 2 | dts2cpp class 扩充-边界：方法默认参数 的解析结果与性能。 |
| 1194 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0311` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入类型作 class 属性 的解析结果与性能。 |
| 1195 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0312` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入回调类型属性/参数 的解析结果与性能。 |
| 1196 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0313` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入类型作返回/参数 的解析结果与性能。 |
| 1197 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0314` | 性能测试 | 2 | dts2cpp class 函数类型-on/off：class Emitter on/off/emit 方法 的解析结果与性能。 |
| 1198 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0315` | 性能测试 | 2 | dts2cpp class 函数类型-on/off：class EventBus on/off/once 的解析结果与性能。 |
| 1199 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0316` | 性能测试 | 2 | dts2cpp class 函数类型-threadsafe_func：class ThreadSafeFunction 的解析结果与性能。 |
| 1200 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0317` | 性能测试 | 2 | dts2cpp class 函数类型-static：static 方法 + static 属性 的解析结果与性能。 |
| 1201 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0318` | 性能测试 | 2 | dts2cpp class 函数类型-static：static 工厂方法 + 计数属性 的解析结果与性能。 |
| 1202 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0319` | 性能测试 | 2 | dts2cpp class namespace-变量+类：namespace 内变量 + 类 的解析结果与性能。 |
| 1203 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0320` | 性能测试 | 2 | dts2cpp class namespace-变量+类：export namespace 内变量 + 类 的解析结果与性能。 |
| 1204 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0321` | 性能测试 | 2 | dts2cpp class import + $/on 命名方法组合 的解析结果与性能。 |
| 1205 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0322` | 性能测试 | 2 | dts2cpp class 函数类型-$：$ 命名类与方法 的解析结果与性能。 |
| 1206 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0323` | 性能测试 | 2 | dts2cpp class import-自定义文件：继承导入的基类 的解析结果与性能。 |
| 1207 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0324` | 性能测试 | 2 | dts2cpp class namespace-变量+函数+类：三合一混合 的解析结果与性能。 |
| 1208 | `conversion_tsclass.part06.test.ts` | `dts2cpp_class_0325` | 性能测试 | 2 | dts2cpp class import-自定义文件：导入类型作容器泛参 的解析结果与性能。 |
| 1209 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0001` | 性能测试 | 2 | dts2cpp struct 对齐 parsetsstruct test_1：一般 interface（2 成员 + 2 方法签名） 的解析结果与性能。 |
| 1210 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0002` | 性能测试 | 2 | dts2cpp struct 对齐 test_2：30 成员 + 13 方法签名全类型覆盖 的解析结果与性能。 |
| 1211 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0003` | 性能测试 | 2 | dts2cpp struct 对齐 test_3：泛型 interface 的解析结果与性能。 |
| 1212 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0004` | 性能测试 | 2 | dts2cpp struct 对齐 test_4：interface 继承 的解析结果与性能。 |
| 1213 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0005` | 性能测试 | 2 | dts2cpp struct 对齐 test_5：定长数组成员/参数 的解析结果与性能。 |
| 1214 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0006` | 性能测试 | 2 | dts2cpp struct 对齐 test_6：泛型约束 interface 的解析结果与性能。 |
| 1215 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0007` | 性能测试 | 2 | dts2cpp struct 对齐 test_7：可选成员/参数 的解析结果与性能。 |
| 1216 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0008` | 性能测试 | 2 | dts2cpp struct 对齐 test_8：多种注释 的解析结果与性能。 |
| 1217 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0009` | 性能测试 | 2 | dts2cpp struct 对齐 test_9：修饰符成员 的解析结果与性能。 |
| 1218 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0010` | 性能测试 | 2 | dts2cpp struct 对齐 test_10：索引签名成员 的解析结果与性能。 |
| 1219 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0011` | 性能测试 | 2 | dts2cpp struct 对齐 test_13：泛型/字面量/嵌套泛型成员 的解析结果与性能。 |
| 1220 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0012` | 性能测试 | 2 | dts2cpp struct 对齐 test_14：ReadonlyArray/元组成员 的解析结果与性能。 |
| 1221 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0013` | 性能测试 | 2 | dts2cpp struct 对齐 test_16：元组成员 的解析结果与性能。 |
| 1222 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0014` | 性能测试 | 2 | dts2cpp struct 对齐 test_17：keyof 成员 的解析结果与性能。 |
| 1223 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0015` | 性能测试 | 2 | dts2cpp struct 对齐 test_19：索引访问类型成员 的解析结果与性能。 |
| 1224 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0016` | 性能测试 | 2 | dts2cpp struct 对齐 test_20：条件类型成员 的解析结果与性能。 |
| 1225 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0017` | 性能测试 | 2 | dts2cpp struct 对齐 test_22：模板字面与泛型方法签名 的解析结果与性能。 |
| 1226 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0018` | 性能测试 | 2 | dts2cpp struct 对齐 test_23：内在字符串操作类型成员 的解析结果与性能。 |
| 1227 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0019` | 性能测试 | 2 | dts2cpp struct 对齐 test_24：export interface 的解析结果与性能。 |
| 1228 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0020` | 性能测试 | 2 | dts2cpp struct 对齐 test_26：declare namespace 嵌套 interface 的解析结果与性能。 |
| 1229 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0021` | 性能测试 | 2 | dts2cpp struct 对齐 test_27：namespace 内继承 interface 的解析结果与性能。 |
| 1230 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0022` | 性能测试 | 2 | dts2cpp struct 对齐 test_28：namespace 内两个独立 interface 的解析结果与性能。 |
| 1231 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0023` | 性能测试 | 2 | dts2cpp struct 对齐 test_42：单行 interface 的解析结果与性能。 |
| 1232 | `conversion_tsstruct.part01.test.ts` | `dts2cpp_struct_0024` | 性能测试 | 2 | dts2cpp struct 对齐 test_45：中文 interface 名与继承 的解析结果与性能。 |
| 1233 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0025` | 性能测试 | 2 | dts2cpp struct 对齐 test_49：两个空 interface 的解析结果与性能。 |
| 1234 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0026` | 性能测试 | 2 | dts2cpp struct 对齐 test_64：单行 export interface 的解析结果与性能。 |
| 1235 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0027` | 性能测试 | 2 | dts2cpp struct 对齐 test_69：可选/非空断言成员与 rest 参数方法签名 的解析结果与性能。 |
| 1236 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0028` | 性能测试 | 2 | dts2cpp struct 对齐 test_70：重载方法签名 的解析结果与性能。 |
| 1237 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0029` | 性能测试 | 2 | dts2cpp struct 对齐 test_72：const 前缀成员与 this 参数方法 的解析结果与性能。 |
| 1238 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0030` | 性能测试 | 2 | dts2cpp struct 扩充：interface 继承链（Pingable/Sonar 均计入 structs） 的解析结果与性能。 |
| 1239 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0031` | 性能测试 | 2 | dts2cpp struct 扩充：20 成员全基本类型/容器/元组矩阵 的解析结果与性能。 |
| 1240 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0032` | 性能测试 | 2 | dts2cpp struct 扩充：30 成员进阶类型矩阵 的解析结果与性能。 |
| 1241 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0033` | 性能测试 | 2 | dts2cpp struct 扩充：50 成员全类型矩阵（规模压测） 的解析结果与性能。 |
| 1242 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0034` | 性能测试 | 2 | dts2cpp struct 扩充：20 方法签名返回类型矩阵 的解析结果与性能。 |
| 1243 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0035` | 性能测试 | 2 | dts2cpp struct 扩充：10 方法签名参数形态矩阵 的解析结果与性能。 |
| 1244 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0036` | 性能测试 | 2 | dts2cpp struct 扩充：多参数 + 返回注解方法签名 的解析结果与性能。 |
| 1245 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0037` | 性能测试 | 2 | dts2cpp struct 扩充：同文件两个完整 interface 的解析结果与性能。 |
| 1246 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0038` | 性能测试 | 2 | dts2cpp struct 扩充：同文件三个 interface（多声明吞吐） 的解析结果与性能。 |
| 1247 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0039` | 性能测试 | 2 | dts2cpp struct 扩充：双泛型 interface 的解析结果与性能。 |
| 1248 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0040` | 性能测试 | 2 | dts2cpp struct 扩充：中文 interface/成员/方法 的解析结果与性能。 |
| 1249 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0041` | 性能测试 | 2 | dts2cpp struct 扩充：空 interface 的解析结果与性能。 |
| 1250 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0042` | 性能测试 | 2 | dts2cpp struct 扩充：三级继承链 的解析结果与性能。 |
| 1251 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0043` | 性能测试 | 2 | dts2cpp struct 扩充：10 成员 + 10 方法签名混合大集合 的解析结果与性能。 |
| 1252 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0044` | 性能测试 | 2 | dts2cpp struct 扩充：字面量/交集/模板/联合成员矩阵 的解析结果与性能。 |
| 1253 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0045` | 性能测试 | 2 | dts2cpp struct 扩充：字面量联合参数与返回方法签名 的解析结果与性能。 |
| 1254 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0046` | 性能测试 | 2 | dts2cpp struct 扩充：内置对象引用联合参数/返回方法签名 的解析结果与性能。 |
| 1255 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0047` | 性能测试 | 2 | dts2cpp struct 扩充：数组参数/多维数组返回方法签名 的解析结果与性能。 |
| 1256 | `conversion_tsstruct.part02.test.ts` | `dts2cpp_struct_0048` | 性能测试 | 2 | dts2cpp struct 扩充：判别联合 interface 继承体系 的解析结果与性能。 |
| 1257 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0049` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × plain 修饰（4 成员） 的解析结果与性能。 |
| 1258 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0050` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × public 修饰（4 成员） 的解析结果与性能。 |
| 1259 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0051` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1260 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0052` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number × optional 修饰（4 成员） 的解析结果与性能。 |
| 1261 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0053` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × plain 修饰（4 成员） 的解析结果与性能。 |
| 1262 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0054` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × public 修饰（4 成员） 的解析结果与性能。 |
| 1263 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0055` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1264 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0056` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string × optional 修饰（4 成员） 的解析结果与性能。 |
| 1265 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0057` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × plain 修饰（4 成员） 的解析结果与性能。 |
| 1266 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0058` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × public 修饰（4 成员） 的解析结果与性能。 |
| 1267 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0059` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1268 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0060` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean × optional 修饰（4 成员） 的解析结果与性能。 |
| 1269 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0061` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × plain 修饰（4 成员） 的解析结果与性能。 |
| 1270 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0062` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × public 修饰（4 成员） 的解析结果与性能。 |
| 1271 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0063` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1272 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0064` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：any × optional 修饰（4 成员） 的解析结果与性能。 |
| 1273 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0065` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × plain 修饰（4 成员） 的解析结果与性能。 |
| 1274 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0066` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × public 修饰（4 成员） 的解析结果与性能。 |
| 1275 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0067` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1276 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0068` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：unknown × optional 修饰（4 成员） 的解析结果与性能。 |
| 1277 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0069` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × plain 修饰（4 成员） 的解析结果与性能。 |
| 1278 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0070` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × public 修饰（4 成员） 的解析结果与性能。 |
| 1279 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0071` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1280 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0072` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：null × optional 修饰（4 成员） 的解析结果与性能。 |
| 1281 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0073` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × plain 修饰（4 成员） 的解析结果与性能。 |
| 1282 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0074` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × public 修饰（4 成员） 的解析结果与性能。 |
| 1283 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0075` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1284 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0076` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：undefined × optional 修饰（4 成员） 的解析结果与性能。 |
| 1285 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0077` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × plain 修饰（4 成员） 的解析结果与性能。 |
| 1286 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0078` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × public 修饰（4 成员） 的解析结果与性能。 |
| 1287 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0079` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1288 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0080` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：symbol × optional 修饰（4 成员） 的解析结果与性能。 |
| 1289 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0081` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × plain 修饰（4 成员） 的解析结果与性能。 |
| 1290 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0082` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × public 修饰（4 成员） 的解析结果与性能。 |
| 1291 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0083` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1292 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0084` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：bigint × optional 修饰（4 成员） 的解析结果与性能。 |
| 1293 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0085` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × plain 修饰（4 成员） 的解析结果与性能。 |
| 1294 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0086` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × public 修饰（4 成员） 的解析结果与性能。 |
| 1295 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0087` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1296 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0088` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：object × optional 修饰（4 成员） 的解析结果与性能。 |
| 1297 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0089` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1298 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0090` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × public 修饰（4 成员） 的解析结果与性能。 |
| 1299 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0091` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1300 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0092` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：number[] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1301 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0093` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1302 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0094` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × public 修饰（4 成员） 的解析结果与性能。 |
| 1303 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0095` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1304 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0096` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string[] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1305 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0097` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1306 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0098` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × public 修饰（4 成员） 的解析结果与性能。 |
| 1307 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0099` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1308 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0100` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：boolean[] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1309 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0101` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1310 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0102` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × public 修饰（4 成员） 的解析结果与性能。 |
| 1311 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0103` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1312 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0104` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Array<number> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1313 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0105` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1314 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0106` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × public 修饰（4 成员） 的解析结果与性能。 |
| 1315 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0107` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1316 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0108` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Map<string, number> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1317 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0109` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1318 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0110` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × public 修饰（4 成员） 的解析结果与性能。 |
| 1319 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0111` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1320 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0112` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Set<number> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1321 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0113` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1322 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0114` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × public 修饰（4 成员） 的解析结果与性能。 |
| 1323 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0115` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1324 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0116` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Record<string, string> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1325 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0117` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × plain 修饰（4 成员） 的解析结果与性能。 |
| 1326 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0118` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × public 修饰（4 成员） 的解析结果与性能。 |
| 1327 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0119` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1328 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0120` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Promise<string> × optional 修饰（4 成员） 的解析结果与性能。 |
| 1329 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0121` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × plain 修饰（4 成员） 的解析结果与性能。 |
| 1330 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0122` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × public 修饰（4 成员） 的解析结果与性能。 |
| 1331 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0123` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1332 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0124` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：[string, number] × optional 修饰（4 成员） 的解析结果与性能。 |
| 1333 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0125` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × plain 修饰（4 成员） 的解析结果与性能。 |
| 1334 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0126` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × public 修饰（4 成员） 的解析结果与性能。 |
| 1335 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0127` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1336 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0128` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：(a: number) => void × optional 修饰（4 成员） 的解析结果与性能。 |
| 1337 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0129` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × plain 修饰（4 成员） 的解析结果与性能。 |
| 1338 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0130` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × public 修饰（4 成员） 的解析结果与性能。 |
| 1339 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0131` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1340 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0132` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Date × optional 修饰（4 成员） 的解析结果与性能。 |
| 1341 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0133` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × plain 修饰（4 成员） 的解析结果与性能。 |
| 1342 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0134` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × public 修饰（4 成员） 的解析结果与性能。 |
| 1343 | `conversion_tsstruct.part03.test.ts` | `dts2cpp_struct_0135` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1344 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0136` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：RegExp × optional 修饰（4 成员） 的解析结果与性能。 |
| 1345 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0137` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × plain 修饰（4 成员） 的解析结果与性能。 |
| 1346 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0138` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × public 修饰（4 成员） 的解析结果与性能。 |
| 1347 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0139` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1348 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0140` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Error × optional 修饰（4 成员） 的解析结果与性能。 |
| 1349 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0141` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × plain 修饰（4 成员） 的解析结果与性能。 |
| 1350 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0142` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × public 修饰（4 成员） 的解析结果与性能。 |
| 1351 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0143` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1352 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0144` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：Uint8Array × optional 修饰（4 成员） 的解析结果与性能。 |
| 1353 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0145` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × plain 修饰（4 成员） 的解析结果与性能。 |
| 1354 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0146` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × public 修饰（4 成员） 的解析结果与性能。 |
| 1355 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0147` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1356 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0148` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵："lit" × optional 修饰（4 成员） 的解析结果与性能。 |
| 1357 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0149` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × plain 修饰（4 成员） 的解析结果与性能。 |
| 1358 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0150` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × public 修饰（4 成员） 的解析结果与性能。 |
| 1359 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0151` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1360 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0152` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：42 × optional 修饰（4 成员） 的解析结果与性能。 |
| 1361 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0153` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × plain 修饰（4 成员） 的解析结果与性能。 |
| 1362 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0154` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × public 修饰（4 成员） 的解析结果与性能。 |
| 1363 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0155` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1364 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0156` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：true × optional 修饰（4 成员） 的解析结果与性能。 |
| 1365 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0157` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × plain 修饰（4 成员） 的解析结果与性能。 |
| 1366 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0158` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × public 修饰（4 成员） 的解析结果与性能。 |
| 1367 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0159` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1368 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0160` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string | number × optional 修饰（4 成员） 的解析结果与性能。 |
| 1369 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0161` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × plain 修饰（4 成员） 的解析结果与性能。 |
| 1370 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0162` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × public 修饰（4 成员） 的解析结果与性能。 |
| 1371 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0163` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1372 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0164` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：string & {} × optional 修饰（4 成员） 的解析结果与性能。 |
| 1373 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0165` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × plain 修饰（4 成员） 的解析结果与性能。 |
| 1374 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0166` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × public 修饰（4 成员） 的解析结果与性能。 |
| 1375 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0167` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × readonly 修饰（4 成员） 的解析结果与性能。 |
| 1376 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0168` | 性能测试 | 2 | dts2cpp struct 扩充-成员矩阵：{ id: number } × optional 修饰（4 成员） 的解析结果与性能。 |
| 1377 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0169` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 number（无参 ×3） 的解析结果与性能。 |
| 1378 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0170` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 number（带参 ×3） 的解析结果与性能。 |
| 1379 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0171` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string（无参 ×3） 的解析结果与性能。 |
| 1380 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0172` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string（带参 ×3） 的解析结果与性能。 |
| 1381 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0173` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean（无参 ×3） 的解析结果与性能。 |
| 1382 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0174` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean（带参 ×3） 的解析结果与性能。 |
| 1383 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0175` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 any（无参 ×3） 的解析结果与性能。 |
| 1384 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0176` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 any（带参 ×3） 的解析结果与性能。 |
| 1385 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0177` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 unknown（无参 ×3） 的解析结果与性能。 |
| 1386 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0178` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 unknown（带参 ×3） 的解析结果与性能。 |
| 1387 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0179` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 null（无参 ×3） 的解析结果与性能。 |
| 1388 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0180` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 null（带参 ×3） 的解析结果与性能。 |
| 1389 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0181` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 undefined（无参 ×3） 的解析结果与性能。 |
| 1390 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0182` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 undefined（带参 ×3） 的解析结果与性能。 |
| 1391 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0183` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 symbol（无参 ×3） 的解析结果与性能。 |
| 1392 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0184` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 symbol（带参 ×3） 的解析结果与性能。 |
| 1393 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0185` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 bigint（无参 ×3） 的解析结果与性能。 |
| 1394 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0186` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 bigint（带参 ×3） 的解析结果与性能。 |
| 1395 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0187` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 object（无参 ×3） 的解析结果与性能。 |
| 1396 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0188` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 object（带参 ×3） 的解析结果与性能。 |
| 1397 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0189` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 number[]（无参 ×3） 的解析结果与性能。 |
| 1398 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0190` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 number[]（带参 ×3） 的解析结果与性能。 |
| 1399 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0191` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string[]（无参 ×3） 的解析结果与性能。 |
| 1400 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0192` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string[]（带参 ×3） 的解析结果与性能。 |
| 1401 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0193` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean[][]（无参 ×3） 的解析结果与性能。 |
| 1402 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0194` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean[][]（带参 ×3） 的解析结果与性能。 |
| 1403 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0195` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 [string, number]（无参 ×3） 的解析结果与性能。 |
| 1404 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0196` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 [string, number]（带参 ×3） 的解析结果与性能。 |
| 1405 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0197` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 (a: number) => void（无参 ×3） 的解析结果与性能。 |
| 1406 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0198` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 (a: number) => void（带参 ×3） 的解析结果与性能。 |
| 1407 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0199` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string | number（无参 ×3） 的解析结果与性能。 |
| 1408 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0200` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 string | number（带参 ×3） 的解析结果与性能。 |
| 1409 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0201` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean | null（无参 ×3） 的解析结果与性能。 |
| 1410 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0202` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 boolean | null（带参 ×3） 的解析结果与性能。 |
| 1411 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0203` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 "lit" | 1（无参 ×3） 的解析结果与性能。 |
| 1412 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0204` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 "lit" | 1（带参 ×3） 的解析结果与性能。 |
| 1413 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0205` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 42（无参 ×3） 的解析结果与性能。 |
| 1414 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0206` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 42（带参 ×3） 的解析结果与性能。 |
| 1415 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0207` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 { id: number }（无参 ×3） 的解析结果与性能。 |
| 1416 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0208` | 性能测试 | 2 | dts2cpp struct 扩充-返回矩阵：方法签名返回 { id: number }（带参 ×3） 的解析结果与性能。 |
| 1417 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0209` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 number（单参） 的解析结果与性能。 |
| 1418 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0210` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 number（双参第二位） 的解析结果与性能。 |
| 1419 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0211` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 string（单参） 的解析结果与性能。 |
| 1420 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0212` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 string（双参第二位） 的解析结果与性能。 |
| 1421 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0213` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean（单参） 的解析结果与性能。 |
| 1422 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0214` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean（双参第二位） 的解析结果与性能。 |
| 1423 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0215` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 any（单参） 的解析结果与性能。 |
| 1424 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0216` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 any（双参第二位） 的解析结果与性能。 |
| 1425 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0217` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 unknown（单参） 的解析结果与性能。 |
| 1426 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0218` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 unknown（双参第二位） 的解析结果与性能。 |
| 1427 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0219` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 null（单参） 的解析结果与性能。 |
| 1428 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0220` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 null（双参第二位） 的解析结果与性能。 |
| 1429 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0221` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 undefined（单参） 的解析结果与性能。 |
| 1430 | `conversion_tsstruct.part04.test.ts` | `dts2cpp_struct_0222` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 undefined（双参第二位） 的解析结果与性能。 |
| 1431 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0223` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 symbol（单参） 的解析结果与性能。 |
| 1432 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0224` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 symbol（双参第二位） 的解析结果与性能。 |
| 1433 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0225` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 bigint（单参） 的解析结果与性能。 |
| 1434 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0226` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 bigint（双参第二位） 的解析结果与性能。 |
| 1435 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0227` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 object（单参） 的解析结果与性能。 |
| 1436 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0228` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 object（双参第二位） 的解析结果与性能。 |
| 1437 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0229` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 number[]（单参） 的解析结果与性能。 |
| 1438 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0230` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 number[]（双参第二位） 的解析结果与性能。 |
| 1439 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0231` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 string[]（单参） 的解析结果与性能。 |
| 1440 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0232` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 string[]（双参第二位） 的解析结果与性能。 |
| 1441 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0233` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean[]（单参） 的解析结果与性能。 |
| 1442 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0234` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 boolean[]（双参第二位） 的解析结果与性能。 |
| 1443 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0235` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 Array<number>（单参） 的解析结果与性能。 |
| 1444 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0236` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 Array<number>（双参第二位） 的解析结果与性能。 |
| 1445 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0237` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 Map<string, number>（单参） 的解析结果与性能。 |
| 1446 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0238` | 性能测试 | 2 | dts2cpp struct 扩充-参数矩阵：方法签名参数 Map<string, number>（双参第二位） 的解析结果与性能。 |
| 1447 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0239` | 性能测试 | 2 | dts2cpp struct 扩充-规模：5 成员 interface 的解析结果与性能。 |
| 1448 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0240` | 性能测试 | 2 | dts2cpp struct 扩充-规模：10 成员 interface 的解析结果与性能。 |
| 1449 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0241` | 性能测试 | 2 | dts2cpp struct 扩充-规模：15 成员 interface 的解析结果与性能。 |
| 1450 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0242` | 性能测试 | 2 | dts2cpp struct 扩充-规模：20 成员 interface 的解析结果与性能。 |
| 1451 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0243` | 性能测试 | 2 | dts2cpp struct 扩充-规模：25 成员 interface 的解析结果与性能。 |
| 1452 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0244` | 性能测试 | 2 | dts2cpp struct 扩充-规模：30 成员 interface 的解析结果与性能。 |
| 1453 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0245` | 性能测试 | 2 | dts2cpp struct 扩充-规模：35 成员 interface 的解析结果与性能。 |
| 1454 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0246` | 性能测试 | 2 | dts2cpp struct 扩充-规模：40 成员 interface 的解析结果与性能。 |
| 1455 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0247` | 性能测试 | 2 | dts2cpp struct 扩充-规模：45 成员 interface 的解析结果与性能。 |
| 1456 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0248` | 性能测试 | 2 | dts2cpp struct 扩充-规模：50 成员 interface 的解析结果与性能。 |
| 1457 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0249` | 性能测试 | 2 | dts2cpp struct 扩充-规模：55 成员 interface 的解析结果与性能。 |
| 1458 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0250` | 性能测试 | 2 | dts2cpp struct 扩充-规模：60 成员 interface 的解析结果与性能。 |
| 1459 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0251` | 性能测试 | 2 | dts2cpp struct 扩充-规模：65 成员 interface 的解析结果与性能。 |
| 1460 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0252` | 性能测试 | 2 | dts2cpp struct 扩充-规模：70 成员 interface 的解析结果与性能。 |
| 1461 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0253` | 性能测试 | 2 | dts2cpp struct 扩充-规模：75 成员 interface 的解析结果与性能。 |
| 1462 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0254` | 性能测试 | 2 | dts2cpp struct 扩充-规模：80 成员 interface 的解析结果与性能。 |
| 1463 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0255` | 性能测试 | 2 | dts2cpp struct 扩充-规模：85 成员 interface 的解析结果与性能。 |
| 1464 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0256` | 性能测试 | 2 | dts2cpp struct 扩充-规模：90 成员 interface 的解析结果与性能。 |
| 1465 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0257` | 性能测试 | 2 | dts2cpp struct 扩充-规模：95 成员 interface 的解析结果与性能。 |
| 1466 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0258` | 性能测试 | 2 | dts2cpp struct 扩充-规模：100 成员 interface 的解析结果与性能。 |
| 1467 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0259` | 性能测试 | 2 | dts2cpp struct 扩充-命名：UpperCamel 的解析结果与性能。 |
| 1468 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0260` | 性能测试 | 2 | dts2cpp struct 扩充-命名：lowerCamel 的解析结果与性能。 |
| 1469 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0261` | 性能测试 | 2 | dts2cpp struct 扩充-命名：snake_case 的解析结果与性能。 |
| 1470 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0262` | 性能测试 | 2 | dts2cpp struct 扩充-命名：Trailing2 的解析结果与性能。 |
| 1471 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0263` | 性能测试 | 2 | dts2cpp struct 扩充-命名：_leading 的解析结果与性能。 |
| 1472 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0264` | 性能测试 | 2 | dts2cpp struct 扩充-命名：Double__Under 的解析结果与性能。 |
| 1473 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0265` | 性能测试 | 2 | dts2cpp struct 扩充-命名：I 的解析结果与性能。 |
| 1474 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0266` | 性能测试 | 2 | dts2cpp struct 扩充-命名：I1 的解析结果与性能。 |
| 1475 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0267` | 性能测试 | 2 | dts2cpp struct 扩充-命名：i1 的解析结果与性能。 |
| 1476 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0268` | 性能测试 | 2 | dts2cpp struct 扩充-命名：If 的解析结果与性能。 |
| 1477 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0269` | 性能测试 | 2 | dts2cpp struct 扩充-命名：iface1 的解析结果与性能。 |
| 1478 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0270` | 性能测试 | 2 | dts2cpp struct 扩充-命名：中文接口 的解析结果与性能。 |
| 1479 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0271` | 性能测试 | 2 | dts2cpp struct 扩充-命名：VersionV2 的解析结果与性能。 |
| 1480 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0272` | 性能测试 | 2 | dts2cpp struct 扩充-命名：HTTPClient 的解析结果与性能。 |
| 1481 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0273` | 性能测试 | 2 | dts2cpp struct 扩充-命名：IFACE 的解析结果与性能。 |
| 1482 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0274` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 2 个 interface 的解析结果与性能。 |
| 1483 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0275` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 3 个 interface 的解析结果与性能。 |
| 1484 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0276` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 4 个 interface 的解析结果与性能。 |
| 1485 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0277` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 5 个 interface 的解析结果与性能。 |
| 1486 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0278` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 6 个 interface 的解析结果与性能。 |
| 1487 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0279` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 7 个 interface 的解析结果与性能。 |
| 1488 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0280` | 性能测试 | 2 | dts2cpp struct 扩充-多声明：同文件 8 个 interface 的解析结果与性能。 |
| 1489 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0281` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：单泛型接口 的解析结果与性能。 |
| 1490 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0282` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：双泛型接口 的解析结果与性能。 |
| 1491 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0283` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：三泛型接口 的解析结果与性能。 |
| 1492 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0284` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：泛型数组成员 的解析结果与性能。 |
| 1493 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0285` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：泛型约束 的解析结果与性能。 |
| 1494 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0286` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：泛型继承基接口 的解析结果与性能。 |
| 1495 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0287` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：泛型方法签名 的解析结果与性能。 |
| 1496 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0288` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：泛型容器成员 的解析结果与性能。 |
| 1497 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0289` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：二级继承 的解析结果与性能。 |
| 1498 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0290` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：三级继承 的解析结果与性能。 |
| 1499 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0291` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：多级继承链 4 层 的解析结果与性能。 |
| 1500 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0292` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：菱形继承 的解析结果与性能。 |
| 1501 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0293` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：索引签名 的解析结果与性能。 |
| 1502 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0294` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：方法重载 的解析结果与性能。 |
| 1503 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0295` | 性能测试 | 2 | dts2cpp struct 扩充-泛型/继承：判别联合接口 的解析结果与性能。 |
| 1504 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0296` | 性能测试 | 2 | dts2cpp struct 扩充-边界：空接口 的解析结果与性能。 |
| 1505 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0297` | 性能测试 | 2 | dts2cpp struct 扩充-边界：单行接口 的解析结果与性能。 |
| 1506 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0298` | 性能测试 | 2 | dts2cpp struct 扩充-边界：注释接口 的解析结果与性能。 |
| 1507 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0299` | 性能测试 | 2 | dts2cpp struct 扩充-边界：成员初始化非法 的解析结果与性能。 |
| 1508 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0300` | 性能测试 | 2 | dts2cpp struct 扩充-边界：中文接口 的解析结果与性能。 |
| 1509 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0301` | 性能测试 | 2 | dts2cpp struct 扩充-边界：装饰器成员 的解析结果与性能。 |
| 1510 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0302` | 性能测试 | 2 | dts2cpp struct 扩充-边界：方法参数解构 的解析结果与性能。 |
| 1511 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0303` | 性能测试 | 2 | dts2cpp struct 扩充-边界：方法 rest 参数 的解析结果与性能。 |
| 1512 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0304` | 性能测试 | 2 | dts2cpp struct 扩充-边界：readonly 数组成员 的解析结果与性能。 |
| 1513 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0305` | 性能测试 | 2 | dts2cpp struct 扩充-边界：键值对接口 的解析结果与性能。 |
| 1514 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0306` | 性能测试 | 2 | dts2cpp struct 扩充-边界：混合成员方法 的解析结果与性能。 |
| 1515 | `conversion_tsstruct.part05.test.ts` | `dts2cpp_struct_0307` | 性能测试 | 2 | dts2cpp struct 扩充-边界：属性为函数类型 的解析结果与性能。 |
| 1516 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0308` | 性能测试 | 2 | dts2cpp struct import-自定义文件：导入类型作 interface 成员 的解析结果与性能。 |
| 1517 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0309` | 性能测试 | 2 | dts2cpp struct import-自定义文件：导入回调类型成员/参数 的解析结果与性能。 |
| 1518 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0310` | 性能测试 | 2 | dts2cpp struct import-自定义文件：导入类型作返回/参数 的解析结果与性能。 |
| 1519 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0311` | 性能测试 | 2 | dts2cpp struct namespace-变量+接口：namespace 内变量 + interface 的解析结果与性能。 |
| 1520 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0312` | 性能测试 | 2 | dts2cpp struct namespace-变量+接口：export namespace 内变量 + interface 的解析结果与性能。 |
| 1521 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0313` | 性能测试 | 2 | dts2cpp struct import-自定义文件：继承导入基接口 的解析结果与性能。 |
| 1522 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0314` | 性能测试 | 2 | dts2cpp struct import + on/off 命名方法签名 的解析结果与性能。 |
| 1523 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0315` | 性能测试 | 2 | dts2cpp struct 函数类型-on/off：interface Emitter on/off/emit 的解析结果与性能。 |
| 1524 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0316` | 性能测试 | 2 | dts2cpp struct 函数类型-threadsafe_func：interface ThreadSafe 签名 的解析结果与性能。 |
| 1525 | `conversion_tsstruct.part06.test.ts` | `dts2cpp_struct_0317` | 性能测试 | 2 | dts2cpp struct namespace-变量+函数+接口：三合一混合 的解析结果与性能。 |
| 1526 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0001` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | number): void（1 参数 [string | number] → 返回 `void`）` 的解析结果与性能。 |
| 1527 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0002` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | boolean): void（1 参数 [string | boolean] → 返回 `void`）` 的解析结果与性能。 |
| 1528 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0003` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: number | boolean): void（1 参数 [number | boolean] → 返回 `void`）` 的解析结果与性能。 |
| 1529 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0004` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | any): void（1 参数 [string | any] → 返回 `void`）` 的解析结果与性能。 |
| 1530 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0005` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | null): void（1 参数 [string | null] → 返回 `void`）` 的解析结果与性能。 |
| 1531 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0006` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | undefined): void（1 参数 [string | undefined] → 返回 `void`）` 的解析结果与性能。 |
| 1532 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0007` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | null | undefined): void（1 参数 [string | null | undefined] → 返回 `void`）` 的解析结果与性能。 |
| 1533 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0008` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | symbol): void（1 参数 [string | symbol] → 返回 `void`）` 的解析结果与性能。 |
| 1534 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0009` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: "left" | "right" | "center"): void（1 参数 ["left" | "right" | "center"] → 返回 `void`）` 的解析结果与性能。 |
| 1535 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0010` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: -1 | 0 | 1): void（1 参数 [-1 | 0 | 1] → 返回 `void`）` 的解析结果与性能。 |
| 1536 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0011` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: true | false): void（1 参数 [true | false] → 返回 `void`）` 的解析结果与性能。 |
| 1537 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0012` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | number[]): void（1 参数 [string | number[]] → 返回 `void`）` 的解析结果与性能。 |
| 1538 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0013` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string[] | number[]): void（1 参数 [string[] | number[]] → 返回 `void`）` 的解析结果与性能。 |
| 1539 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0014` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Array<string> | Array<number>): void（1 参数 [Array<string> | Array<number>] → 返回 `void`）` 的解析结果与性能。 |
| 1540 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0015` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string[] | Array<number>): void（1 参数 [string[] | Array<number>] → 返回 `void`）` 的解析结果与性能。 |
| 1541 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0016` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Set<string> | Set<number>): void（1 参数 [Set<string> | Set<number>] → 返回 `void`）` 的解析结果与性能。 |
| 1542 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0017` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Set<string> | string[]): void（1 参数 [Set<string> | string[]] → 返回 `void`）` 的解析结果与性能。 |
| 1543 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0018` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: [string, number] | [boolean]): void（1 参数 [[string, number] | [boolean]] → 返回 `void`）` 的解析结果与性能。 |
| 1544 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0019` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: [string, number] | string[]): void（1 参数 [[string, number] | string[]] → 返回 `void`）` 的解析结果与性能。 |
| 1545 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0020` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Map<string, number> | Map<string, boolean>): void（1 参数 [Map<string, number> | Map<string, boolean>] → 返回 `void`）` 的解析结果与性能。 |
| 1546 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0021` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Map<string, any> | Record<string, number>): void（1 参数 [Map<string, any> | Record<string, number>] → 返回 `void`）` 的解析结果与性能。 |
| 1547 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0022` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Record<string, string> | Record<string, number>): void（1 参数 [Record<string, string> | Record<string, number>] → 返回 `void`）` 的解析结果与性能。 |
| 1548 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0023` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: boolean | ((s: string) => boolean)): void（1 参数 [boolean | ((s: string) => boolean)] → 返回 `void`）` 的解析结果与性能。 |
| 1549 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0024` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | number | boolean | null): void（1 参数 [string | number | boolean | null] → 返回 `void`）` 的解析结果与性能。 |
| 1550 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0025` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: number[] | Set<number> | Map<string, number>): void（1 参数 [number[] | Set<number> | Map<string, number>] → 返回 `void`）` 的解析结果与性能。 |
| 1551 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0026` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: [number, string] | Map<number, string> | Set<[number, string]>): void（1 参数 [[number, string] | Map<number, string> | Set<[number, string]>] → 返回 `void`）` 的解析结果与性能。 |
| 1552 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0027` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: ReadonlyArray<string> | ReadonlyArray<number>): void（1 参数 [ReadonlyArray<string> | ReadonlyArray<number>] → 返回 `void`）` 的解析结果与性能。 |
| 1553 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0028` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: ReadonlyMap<string, number> | Map<string, number>): void（1 参数 [ReadonlyMap<string, number> | Map<string, number>] → 返回 `void`）` 的解析结果与性能。 |
| 1554 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0029` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: unknown | never): void（1 参数 [unknown | never] → 返回 `void`）` 的解析结果与性能。 |
| 1555 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0030` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: bigint | number): void（1 参数 [bigint | number] → 返回 `void`）` 的解析结果与性能。 |
| 1556 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0031` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: object | string): void（1 参数 [object | string] → 返回 `void`）` 的解析结果与性能。 |
| 1557 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0032` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Promise<string> | Promise<number>): void（1 参数 [Promise<string> | Promise<number>] → 返回 `void`）` 的解析结果与性能。 |
| 1558 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0033` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Array<Map<string, number>> | Map<string, number[]>): void（1 参数 [Array<Map<string, number>> | Map<string, number[]>] → 返回 `void`）` 的解析结果与性能。 |
| 1559 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0034` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Set<string[]> | Array<Set<string>>): void（1 参数 [Set<string[]> | Array<Set<string>>] → 返回 `void`）` 的解析结果与性能。 |
| 1560 | `conversion_tsfunc.part01.test.ts` | `dts2cpp_func_0035` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Options | "auto"): void（1 参数 [Options | "auto"] → 返回 `void`）` 的解析结果与性能。 |
| 1561 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0036` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): string | number（0 参数 → 返回 `string | number`）` 的解析结果与性能。 |
| 1562 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0037` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): string | boolean（0 参数 → 返回 `string | boolean`）` 的解析结果与性能。 |
| 1563 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0038` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): string | null（0 参数 → 返回 `string | null`）` 的解析结果与性能。 |
| 1564 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0039` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): string | undefined（0 参数 → 返回 `string | undefined`）` 的解析结果与性能。 |
| 1565 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0040` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): "ok" | "err"（0 参数 → 返回 `"ok" | "err"`）` 的解析结果与性能。 |
| 1566 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0041` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): -1 | 0 | 1（0 参数 → 返回 `-1 | 0 | 1`）` 的解析结果与性能。 |
| 1567 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0042` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): string[] | number[]（0 参数 → 返回 `string[] | number[]`）` 的解析结果与性能。 |
| 1568 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0043` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): Array<string> | Array<number>（0 参数 → 返回 `Array<string> | Array<number>`）` 的解析结果与性能。 |
| 1569 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0044` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): Set<string> | Set<number>（0 参数 → 返回 `Set<string> | Set<number>`）` 的解析结果与性能。 |
| 1570 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0045` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): [string, number] | [boolean, boolean]（0 参数 → 返回 `[string, number] | [boolean, boolean]`）` 的解析结果与性能。 |
| 1571 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0046` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): Map<string, number> | Map<string, boolean>（0 参数 → 返回 `Map<string, number> | Map<string, boolean>`）` 的解析结果与性能。 |
| 1572 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0047` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): Record<string, any> | Map<string, any>（0 参数 → 返回 `Record<string, any> | Map<string, any>`）` 的解析结果与性能。 |
| 1573 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0048` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): boolean | ((s: string) => boolean)（0 参数 → 返回 `boolean | ((s: string) => boolean)`）` 的解析结果与性能。 |
| 1574 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0049` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): string | number | boolean（0 参数 → 返回 `string | number | boolean`）` 的解析结果与性能。 |
| 1575 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0050` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): number[] | Set<number> | Map<string, number>（0 参数 → 返回 `number[] | Set<number> | Map<string, number>`）` 的解析结果与性能。 |
| 1576 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0051` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): Promise<string> | string（0 参数 → 返回 `Promise<string> | string`）` 的解析结果与性能。 |
| 1577 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0052` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): unknown | null（0 参数 → 返回 `unknown | null`）` 的解析结果与性能。 |
| 1578 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0053` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): ReadonlyArray<number> | number[]（0 参数 → 返回 `ReadonlyArray<number> | number[]`）` 的解析结果与性能。 |
| 1579 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0054` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): [string] | string[] | Set<string>（0 参数 → 返回 `[string] | string[] | Set<string>`）` 的解析结果与性能。 |
| 1580 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0055` | 性能测试 | 2 | dts2cpp funcs union 签名 `(): bigint | number（0 参数 → 返回 `bigint | number`）` 的解析结果与性能。 |
| 1581 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0056` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | number): boolean | null（1 参数 [string | number] → 返回 `boolean | null`）` 的解析结果与性能。 |
| 1582 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0057` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string[] | number[]): Set<string> | Set<number>（1 参数 [string[] | number[]] → 返回 `Set<string> | Set<number>`）` 的解析结果与性能。 |
| 1583 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0058` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: Map<string, any> | Record<string, any>): Map<string, number> | number（1 参数 [Map<string, any> | Record<string, any>] → 返回 `Map<string, number> | number`）` 的解析结果与性能。 |
| 1584 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0059` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: [string, number] | string): [boolean, boolean] | boolean（1 参数 [[string, number] | string] → 返回 `[boolean, boolean] | boolean`）` 的解析结果与性能。 |
| 1585 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0060` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | null): string | undefined（1 参数 [string | null] → 返回 `string | undefined`）` 的解析结果与性能。 |
| 1586 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0061` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: number[] | Set<number> | Map<string, number>): string | number | boolean（1 参数 [number[] | Set<number> | Map<string, number>] → 返回 `string | number | boolean`）` 的解析结果与性能。 |
| 1587 | `conversion_tsfunc.part02.test.ts` | `dts2cpp_func_0062` | 性能测试 | 2 | dts2cpp funcs union 签名 `(a: string | number | boolean): null | undefined（1 参数 [string | number | boolean] → 返回 `null | undefined`）` 的解析结果与性能。 |
| 1588 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_63` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。对齐 parsetsfunc test_1：一般双 number 参数返回 number。 |
| 1589 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_64` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: number[]): number[][]`（2 参数 [number, number[]] → 返回 number[][]）的解析结果与性能。对齐 test_2：数组参数与二维数组返回。 |
| 1590 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_65` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: { x: number; y: number }): void`（1 参数 [{ x: number; y: number }] → 返回 void）的解析结果与性能。对齐 test_4：对象字面量参数返回 void。 |
| 1591 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_66` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: { x: number; y?: string }): void`（1 参数 [{ x: number; y?: string }] → 返回 void）的解析结果与性能。对齐 test_5：对象含可选属性参数。 |
| 1592 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_67` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string | null): void`（1 参数 [string | null] → 返回 void）的解析结果与性能。对齐 test_8：可空联合参数。 |
| 1593 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_68` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string | null): void`（1 参数 [string | null] → 返回 void）的解析结果与性能。对齐 test_9：可选可空参数。 |
| 1594 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_69` | 性能测试 | 2 | dts2cpp funcs 签名 `(fn: (a: string) => void): void`（1 参数 [(a: string) => void] → 返回 void）的解析结果与性能。对齐 test_10：回调函数参数。 |
| 1595 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_70` | 性能测试 | 2 | dts2cpp funcs 签名 `(fn: (a?: string) => void): void`（1 参数 [(a?: string) => void] → 返回 void）的解析结果与性能。对齐 test_11：回调可选参数。 |
| 1596 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_71` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Type): Type | undefined`（1 参数 [Type] → 返回 Type | undefined）的解析结果与性能。对齐 test_12：单泛型参数返回联合。 |
| 1597 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_72` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Input): Output`（1 参数 [Input] → 返回 Output）的解析结果与性能。对齐 test_13：双泛型参数。 |
| 1598 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_73` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Type): 无注解(undefined)`（1 参数 [Type] → 返回 无注解(undefined)）的解析结果与性能。对齐 test_14：泛型约束无返回注解。 |
| 1599 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_74` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown): 无注解(undefined)`（1 参数 [unknown] → 返回 无注解(undefined)）的解析结果与性能。对齐 test_15：unknown 参数无返回注解。 |
| 1600 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_75` | 性能测试 | 2 | dts2cpp funcs 签名 `(n: number, m: number[]): void`（2 参数 [number, number[]] → 返回 void）的解析结果与性能。对齐 test_18：剩余形参。 |
| 1601 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_76` | 性能测试 | 2 | dts2cpp funcs 签名 `(: { a: number; b: number; c: number }): void`（1 参数 [{ a: number; b: number; c: number }] → 返回 void）的解析结果与性能。对齐 test_19：对象解构参数。 |
| 1602 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_77` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。对齐 test_22：单行一般函数。 |
| 1603 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_78` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: E): void`（2 参数 [string, E] → 返回 void）的解析结果与性能。对齐 test_24：自定义类型参数。 |
| 1604 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_79` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: Map<string, number>): void`（2 参数 [any, Map<string, number>] → 返回 void）的解析结果与性能。对齐 test_25：any 与 Map 参数。 |
| 1605 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_80` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: "left" | "right" | "center"): void`（1 参数 ["left" | "right" | "center"] → 返回 void）的解析结果与性能。对齐 test_30：字符串字面量联合参数。 |
| 1606 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_81` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, m: number[]): void`（2 参数 [number, number[]] → 返回 void）的解析结果与性能。对齐 test_40：单行剩余形参。 |
| 1607 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_82` | 性能测试 | 2 | dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。对齐 test_51：无参数无返回注解。 |
| 1608 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_83` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。对齐 test_54：export function。 |
| 1609 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_84` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。对齐 test_56：declare function。 |
| 1610 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_85` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。对齐 test_57：namespace 内函数。 |
| 1611 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_86` | 性能测试 | 2 | dts2cpp funcs 签名 `(中文参数: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。对齐 test_61/62：中文函数名与参数名。 |
| 1612 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_87` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: typeof globalThis): void`（1 参数 [typeof globalThis] → 返回 void）的解析结果与性能。对齐 test_67：typeof 参数。 |
| 1613 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_88` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown & null): never`（1 参数 [unknown & null] → 返回 never）的解析结果与性能。对齐 test_68：交集参数返回 never。 |
| 1614 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_89` | 性能测试 | 2 | dts2cpp funcs 签名 `(: [number, number]): void`（1 参数 [[number, number]] → 返回 void）的解析结果与性能。对齐 test_69：元组解构参数。 |
| 1615 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_90` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-入参：number。 |
| 1616 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_91` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。扩充-入参：string。 |
| 1617 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_92` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean): void`（1 参数 [boolean] → 返回 void）的解析结果与性能。扩充-入参：boolean。 |
| 1618 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_93` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any): void`（1 参数 [any] → 返回 void）的解析结果与性能。扩充-入参：any。 |
| 1619 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_94` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown): void`（1 参数 [unknown] → 返回 void）的解析结果与性能。扩充-入参：unknown。 |
| 1620 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_95` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: never): void`（1 参数 [never] → 返回 void）的解析结果与性能。扩充-入参：never。 |
| 1621 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_96` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null): void`（1 参数 [null] → 返回 void）的解析结果与性能。扩充-入参：null。 |
| 1622 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_97` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined): void`（1 参数 [undefined] → 返回 void）的解析结果与性能。扩充-入参：undefined。 |
| 1623 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_98` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol): void`（1 参数 [symbol] → 返回 void）的解析结果与性能。扩充-入参：symbol。 |
| 1624 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_99` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint): void`（1 参数 [bigint] → 返回 void）的解析结果与性能。扩充-入参：bigint。 |
| 1625 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_100` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object): void`（1 参数 [object] → 返回 void）的解析结果与性能。扩充-入参：object。 |
| 1626 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_101` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[]): void`（1 参数 [number[]] → 返回 void）的解析结果与性能。扩充-入参：一维数组。 |
| 1627 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_102` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[][]): void`（1 参数 [string[][]] → 返回 void）的解析结果与性能。扩充-入参：二维数组。 |
| 1628 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_103` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<boolean>): void`（1 参数 [Array<boolean>] → 返回 void）的解析结果与性能。扩充-入参：Array<T> 泛型数组。 |
| 1629 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_104` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>): void`（1 参数 [Set<number>] → 返回 void）的解析结果与性能。扩充-入参：Set。 |
| 1630 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_105` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>): void`（1 参数 [Map<string, number>] → 返回 void）的解析结果与性能。扩充-入参：Map。 |
| 1631 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_106` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>): void`（1 参数 [Record<string, string>] → 返回 void）的解析结果与性能。扩充-入参：Record。 |
| 1632 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_107` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>): void`（1 参数 [Promise<string>] → 返回 void）的解析结果与性能。扩充-入参：Promise。 |
| 1633 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_108` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number]): void`（1 参数 [[string, number]] → 返回 void）的解析结果与性能。扩充-入参：元组。 |
| 1634 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_109` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (x: number) => string): void`（1 参数 [(x: number) => string] → 返回 void）的解析结果与性能。扩充-入参：函数类型。 |
| 1635 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_110` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: "lit"): void`（1 参数 ["lit"] → 返回 void）的解析结果与性能。扩充-入参：字符串字面量。 |
| 1636 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_111` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: 42): void`（1 参数 [42] → 返回 void）的解析结果与性能。扩充-入参：数字字面量。 |
| 1637 | `conversion_tsfunc.part03.test.ts` | `dts2cpp_func_112` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: true): void`（1 参数 [true] → 返回 void）的解析结果与性能。扩充-入参：布尔字面量。 |
| 1638 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_113` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string | number | boolean): void`（1 参数 [string | number | boolean] → 返回 void）的解析结果与性能。扩充-入参：三元联合。 |
| 1639 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_114` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string & { tag: "x" }): void`（1 参数 [string & { tag: "x" }] → 返回 void）的解析结果与性能。扩充-入参：交叉类型。 |
| 1640 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_115` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Date | null): void`（1 参数 [Date | null] → 返回 void）的解析结果与性能。扩充-入参：内置对象可空联合。 |
| 1641 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_116` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: `tpl-${string}`): void`（1 参数 [`tpl-${string}`] → 返回 void）的解析结果与性能。扩充-入参：模板字面量。 |
| 1642 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_117` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Uint8Array): void`（1 参数 [Uint8Array] → 返回 void）的解析结果与性能。扩充-入参：TypedArray。 |
| 1643 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_118` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Error): void`（1 参数 [Error] → 返回 void）的解析结果与性能。扩充-入参：Error 对象。 |
| 1644 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_119` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: { id: number; name: string }): void`（1 参数 [{ id: number; name: string }] → 返回 void）的解析结果与性能。扩充-入参：多属性对象。 |
| 1645 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_120` | 性能测试 | 2 | dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。扩充-参数个数：0 参数。 |
| 1646 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_121` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-参数个数：1 参数。 |
| 1647 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_122` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string): void`（2 参数 [number, string] → 返回 void）的解析结果与性能。扩充-参数个数：2 参数（number+string）。 |
| 1648 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_123` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string, c: boolean): void`（3 参数 [number, string, boolean] → 返回 void）的解析结果与性能。扩充-参数个数：3 参数（number+string+boolean）。 |
| 1649 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_124` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string, c: boolean, d: any): void`（4 参数 [number, string, boolean, any] → 返回 void）的解析结果与性能。扩充-参数个数：4 参数混合。 |
| 1650 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_125` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string, c: boolean, d: any, e: unknown): void`（5 参数 [number, string, boolean, any, unknown] → 返回 void）的解析结果与性能。扩充-参数个数：5 参数混合。 |
| 1651 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_126` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: number): void`（2 参数 [string, number] → 返回 void）的解析结果与性能。扩充-参数个数：双可选参数。 |
| 1652 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_127` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: number): void`（2 参数 [string, number] → 返回 void）的解析结果与性能。扩充-参数个数：默认值参数。 |
| 1653 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_128` | 性能测试 | 2 | dts2cpp funcs 签名 `(args: unknown[]): void`（1 参数 [unknown[]] → 返回 void）的解析结果与性能。扩充-参数个数：纯 rest 参数。 |
| 1654 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_129` | 性能测试 | 2 | dts2cpp funcs 签名 `(): string`（0 参数 [] → 返回 string）的解析结果与性能。扩充-返回：string。 |
| 1655 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_130` | 性能测试 | 2 | dts2cpp funcs 签名 `(): boolean`（0 参数 [] → 返回 boolean）的解析结果与性能。扩充-返回：boolean。 |
| 1656 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_131` | 性能测试 | 2 | dts2cpp funcs 签名 `(): any`（0 参数 [] → 返回 any）的解析结果与性能。扩充-返回：any。 |
| 1657 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_132` | 性能测试 | 2 | dts2cpp funcs 签名 `(): unknown`（0 参数 [] → 返回 unknown）的解析结果与性能。扩充-返回：unknown。 |
| 1658 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_133` | 性能测试 | 2 | dts2cpp funcs 签名 `(): never`（0 参数 [] → 返回 never）的解析结果与性能。扩充-返回：never。 |
| 1659 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_134` | 性能测试 | 2 | dts2cpp funcs 签名 `(): null`（0 参数 [] → 返回 null）的解析结果与性能。扩充-返回：null。 |
| 1660 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_135` | 性能测试 | 2 | dts2cpp funcs 签名 `(): undefined`（0 参数 [] → 返回 undefined）的解析结果与性能。扩充-返回：undefined。 |
| 1661 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_136` | 性能测试 | 2 | dts2cpp funcs 签名 `(): symbol`（0 参数 [] → 返回 symbol）的解析结果与性能。扩充-返回：symbol。 |
| 1662 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_137` | 性能测试 | 2 | dts2cpp funcs 签名 `(): bigint`（0 参数 [] → 返回 bigint）的解析结果与性能。扩充-返回：bigint。 |
| 1663 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_138` | 性能测试 | 2 | dts2cpp funcs 签名 `(): object`（0 参数 [] → 返回 object）的解析结果与性能。扩充-返回：object。 |
| 1664 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_139` | 性能测试 | 2 | dts2cpp funcs 签名 `(): number[]`（0 参数 [] → 返回 number[]）的解析结果与性能。扩充-返回：一维数组。 |
| 1665 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_140` | 性能测试 | 2 | dts2cpp funcs 签名 `(): boolean[][]`（0 参数 [] → 返回 boolean[][]）的解析结果与性能。扩充-返回：二维数组。 |
| 1666 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_141` | 性能测试 | 2 | dts2cpp funcs 签名 `(): Set<string>`（0 参数 [] → 返回 Set<string>）的解析结果与性能。扩充-返回：Set。 |
| 1667 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_142` | 性能测试 | 2 | dts2cpp funcs 签名 `(): Map<string, number>`（0 参数 [] → 返回 Map<string, number>）的解析结果与性能。扩充-返回：Map。 |
| 1668 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_143` | 性能测试 | 2 | dts2cpp funcs 签名 `(): Record<string, number>`（0 参数 [] → 返回 Record<string, number>）的解析结果与性能。扩充-返回：Record。 |
| 1669 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_144` | 性能测试 | 2 | dts2cpp funcs 签名 `(): Promise<boolean>`（0 参数 [] → 返回 Promise<boolean>）的解析结果与性能。扩充-返回：Promise。 |
| 1670 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_145` | 性能测试 | 2 | dts2cpp funcs 签名 `(): [number, string]`（0 参数 [] → 返回 [number, string]）的解析结果与性能。扩充-返回：元组。 |
| 1671 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_146` | 性能测试 | 2 | dts2cpp funcs 签名 `(): (a: number) => void`（0 参数 [] → 返回 (a: number) => void）的解析结果与性能。扩充-返回：函数类型。 |
| 1672 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_147` | 性能测试 | 2 | dts2cpp funcs 签名 `(): "ok" | "err"`（0 参数 [] → 返回 "ok" | "err"）的解析结果与性能。扩充-返回：字面量联合。 |
| 1673 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_148` | 性能测试 | 2 | dts2cpp funcs 签名 `(): string | null`（0 参数 [] → 返回 string | null）的解析结果与性能。扩充-返回：可空联合。 |
| 1674 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_149` | 性能测试 | 2 | dts2cpp funcs 签名 `(): { id: number }`（0 参数 [] → 返回 { id: number }）的解析结果与性能。扩充-返回：对象类型。 |
| 1675 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_150` | 性能测试 | 2 | dts2cpp funcs 签名 `(): Date`（0 参数 [] → 返回 Date）的解析结果与性能。扩充-返回：内置对象。 |
| 1676 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_151` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[]): number[]`（1 参数 [string[]] → 返回 number[]）的解析结果与性能。扩充-组合：数组入参→数组返回。 |
| 1677 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_152` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>): Set<string>`（1 参数 [Map<string, number>] → 返回 Set<string>）的解析结果与性能。扩充-组合：Map 入参→Set 返回。 |
| 1678 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_153` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string | number): boolean | null`（1 参数 [string | number] → 返回 boolean | null）的解析结果与性能。扩充-组合：联合入参→联合返回。 |
| 1679 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_154` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (x: number) => void): (y: string) => void`（1 参数 [(x: number) => void] → 返回 (y: string) => void）的解析结果与性能。扩充-组合：函数入参→函数返回。 |
| 1680 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_155` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): T[]`（1 参数 [T] → 返回 T[]）的解析结果与性能。扩充-组合：泛型入参→泛型数组返回。 |
| 1681 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_156` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string): boolean`（2 参数 [number, string] → 返回 boolean）的解析结果与性能。扩充-组合：双参→boolean 返回。 |
| 1682 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_157` | 性能测试 | 2 | dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。扩充-组合：无参返回 void。 |
| 1683 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_158` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 2 个函数。 |
| 1684 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_159` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 3 个函数。 |
| 1685 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_160` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 5 个函数（吞吐）。 |
| 1686 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_161` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-命名：下划线函数名。 |
| 1687 | `conversion_tsfunc.part04.test.ts` | `dts2cpp_func_162` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): string`（1 参数 [string] → 返回 string）的解析结果与性能。扩充-命名：超长函数名。 |
| 1688 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0164` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string): void`（2 参数 [number, string] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, string)。 |
| 1689 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0165` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: boolean): void`（2 参数 [number, boolean] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, boolean)。 |
| 1690 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0166` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: any): void`（2 参数 [number, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, any)。 |
| 1691 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0167` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: unknown): void`（2 参数 [number, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number, unknown)。 |
| 1692 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0168` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: boolean): void`（2 参数 [string, boolean] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, boolean)。 |
| 1693 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0169` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: any): void`（2 参数 [string, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, any)。 |
| 1694 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0170` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: unknown): void`（2 参数 [string, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, unknown)。 |
| 1695 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0171` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: null): void`（2 参数 [string, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string, null)。 |
| 1696 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0172` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: any): void`（2 参数 [boolean, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, any)。 |
| 1697 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0173` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: unknown): void`（2 参数 [boolean, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, unknown)。 |
| 1698 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0174` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: null): void`（2 参数 [boolean, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, null)。 |
| 1699 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0175` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: undefined): void`（2 参数 [boolean, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean, undefined)。 |
| 1700 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0176` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: unknown): void`（2 参数 [any, unknown] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, unknown)。 |
| 1701 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0177` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: null): void`（2 参数 [any, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, null)。 |
| 1702 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0178` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: undefined): void`（2 参数 [any, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, undefined)。 |
| 1703 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0179` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: symbol): void`（2 参数 [any, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(any, symbol)。 |
| 1704 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0180` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: null): void`（2 参数 [unknown, null] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, null)。 |
| 1705 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0181` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: undefined): void`（2 参数 [unknown, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, undefined)。 |
| 1706 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0182` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: symbol): void`（2 参数 [unknown, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, symbol)。 |
| 1707 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0183` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: bigint): void`（2 参数 [unknown, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(unknown, bigint)。 |
| 1708 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0184` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: undefined): void`（2 参数 [null, undefined] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, undefined)。 |
| 1709 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0185` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: symbol): void`（2 参数 [null, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, symbol)。 |
| 1710 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0186` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: bigint): void`（2 参数 [null, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, bigint)。 |
| 1711 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0187` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: object): void`（2 参数 [null, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(null, object)。 |
| 1712 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0188` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: symbol): void`（2 参数 [undefined, symbol] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, symbol)。 |
| 1713 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0189` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: bigint): void`（2 参数 [undefined, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, bigint)。 |
| 1714 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0190` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: object): void`（2 参数 [undefined, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, object)。 |
| 1715 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0191` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: number[]): void`（2 参数 [undefined, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(undefined, number[])。 |
| 1716 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0192` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: bigint): void`（2 参数 [symbol, bigint] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, bigint)。 |
| 1717 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0193` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: object): void`（2 参数 [symbol, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, object)。 |
| 1718 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0194` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: number[]): void`（2 参数 [symbol, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, number[])。 |
| 1719 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0195` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: string[]): void`（2 参数 [symbol, string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(symbol, string[])。 |
| 1720 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0196` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: object): void`（2 参数 [bigint, object] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, object)。 |
| 1721 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0197` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: number[]): void`（2 参数 [bigint, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, number[])。 |
| 1722 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0198` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: string[]): void`（2 参数 [bigint, string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, string[])。 |
| 1723 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0199` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: boolean[]): void`（2 参数 [bigint, boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(bigint, boolean[])。 |
| 1724 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0200` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: number[]): void`（2 参数 [object, number[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, number[])。 |
| 1725 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0201` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: string[]): void`（2 参数 [object, string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, string[])。 |
| 1726 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0202` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: boolean[]): void`（2 参数 [object, boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, boolean[])。 |
| 1727 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0203` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: Array<number>): void`（2 参数 [object, Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(object, Array<number>)。 |
| 1728 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0204` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[], b: string[]): void`（2 参数 [number[], string[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], string[])。 |
| 1729 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0205` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[], b: boolean[]): void`（2 参数 [number[], boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], boolean[])。 |
| 1730 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0206` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[], b: Array<number>): void`（2 参数 [number[], Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], Array<number>)。 |
| 1731 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0207` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[], b: Map<string, number>): void`（2 参数 [number[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(number[], Map<string, number>)。 |
| 1732 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0208` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[], b: boolean[]): void`（2 参数 [string[], boolean[]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], boolean[])。 |
| 1733 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0209` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[], b: Array<number>): void`（2 参数 [string[], Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], Array<number>)。 |
| 1734 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0210` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[], b: Map<string, number>): void`（2 参数 [string[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], Map<string, number>)。 |
| 1735 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0211` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[], b: Set<number>): void`（2 参数 [string[], Set<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(string[], Set<number>)。 |
| 1736 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0212` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[], b: Array<number>): void`（2 参数 [boolean[], Array<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean[], Array<number>)。 |
| 1737 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0213` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[], b: Map<string, number>): void`（2 参数 [boolean[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean[], Map<string, number>)。 |
| 1738 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0214` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[], b: Set<number>): void`（2 参数 [boolean[], Set<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean[], Set<number>)。 |
| 1739 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0215` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[], b: Record<string, string>): void`（2 参数 [boolean[], Record<string, string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(boolean[], Record<string, string>)。 |
| 1740 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0216` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>, b: Map<string, number>): void`（2 参数 [Array<number>, Map<string, number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Array<number>, Map<string, number>)。 |
| 1741 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0217` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>, b: Set<number>): void`（2 参数 [Array<number>, Set<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Array<number>, Set<number>)。 |
| 1742 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0218` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>, b: Record<string, string>): void`（2 参数 [Array<number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Array<number>, Record<string, string>)。 |
| 1743 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0219` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>, b: Promise<string>): void`（2 参数 [Array<number>, Promise<string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Array<number>, Promise<string>)。 |
| 1744 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0220` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>, b: Set<number>): void`（2 参数 [Map<string, number>, Set<number>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Map<string, number>, Set<number>)。 |
| 1745 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0221` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>, b: Record<string, string>): void`（2 参数 [Map<string, number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Map<string, number>, Record<string, string>)。 |
| 1746 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0222` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>, b: Promise<string>): void`（2 参数 [Map<string, number>, Promise<string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Map<string, number>, Promise<string>)。 |
| 1747 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0223` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>, b: [string, number]): void`（2 参数 [Map<string, number>, [string, number]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Map<string, number>, [string, number])。 |
| 1748 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0224` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>, b: Record<string, string>): void`（2 参数 [Set<number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Set<number>, Record<string, string>)。 |
| 1749 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0225` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>, b: Promise<string>): void`（2 参数 [Set<number>, Promise<string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Set<number>, Promise<string>)。 |
| 1750 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0226` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>, b: [string, number]): void`（2 参数 [Set<number>, [string, number]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Set<number>, [string, number])。 |
| 1751 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0227` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>, b: (a: number) => void): void`（2 参数 [Set<number>, (a: number) => void] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Set<number>, (a: number) => void)。 |
| 1752 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0228` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>, b: Promise<string>): void`（2 参数 [Record<string, string>, Promise<string>] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Record<string, string>, Promise<string>)。 |
| 1753 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0229` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>, b: [string, number]): void`（2 参数 [Record<string, string>, [string, number]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Record<string, string>, [string, number])。 |
| 1754 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0230` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>, b: (a: number) => void): void`（2 参数 [Record<string, string>, (a: number) => void] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Record<string, string>, (a: number) => void)。 |
| 1755 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0231` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>, b: number): void`（2 参数 [Record<string, string>, number] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Record<string, string>, number)。 |
| 1756 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0232` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>, b: [string, number]): void`（2 参数 [Promise<string>, [string, number]] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Promise<string>, [string, number])。 |
| 1757 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0233` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>, b: (a: number) => void): void`（2 参数 [Promise<string>, (a: number) => void] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Promise<string>, (a: number) => void)。 |
| 1758 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0234` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>, b: number): void`（2 参数 [Promise<string>, number] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Promise<string>, number)。 |
| 1759 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0235` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>, b: string): void`（2 参数 [Promise<string>, string] → 返回 void）的解析结果与性能。扩充-双参矩阵：(Promise<string>, string)。 |
| 1760 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0236` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number], b: (a: number) => void): void`（2 参数 [[string, number], (a: number) => void] → 返回 void）的解析结果与性能。扩充-双参矩阵：([string, number], (a: number) => void)。 |
| 1761 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0237` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number], b: number): void`（2 参数 [[string, number], number] → 返回 void）的解析结果与性能。扩充-双参矩阵：([string, number], number)。 |
| 1762 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0238` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number], b: string): void`（2 参数 [[string, number], string] → 返回 void）的解析结果与性能。扩充-双参矩阵：([string, number], string)。 |
| 1763 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0239` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number], b: boolean): void`（2 参数 [[string, number], boolean] → 返回 void）的解析结果与性能。扩充-双参矩阵：([string, number], boolean)。 |
| 1764 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0240` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void, b: number): void`（2 参数 [(a: number) => void, number] → 返回 void）的解析结果与性能。扩充-双参矩阵：((a: number) => void, number)。 |
| 1765 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0241` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void, b: string): void`（2 参数 [(a: number) => void, string] → 返回 void）的解析结果与性能。扩充-双参矩阵：((a: number) => void, string)。 |
| 1766 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0242` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void, b: boolean): void`（2 参数 [(a: number) => void, boolean] → 返回 void）的解析结果与性能。扩充-双参矩阵：((a: number) => void, boolean)。 |
| 1767 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0243` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void, b: any): void`（2 参数 [(a: number) => void, any] → 返回 void）的解析结果与性能。扩充-双参矩阵：((a: number) => void, any)。 |
| 1768 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0244` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: string, c: boolean): void`（3 参数 [number, string, boolean] → 返回 void）的解析结果与性能。扩充-三参矩阵：(number, string, boolean)。 |
| 1769 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0245` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: any, c: unknown): void`（3 参数 [number, any, unknown] → 返回 void）的解析结果与性能。扩充-三参矩阵：(number, any, unknown)。 |
| 1770 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0246` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: boolean, c: any): void`（3 参数 [string, boolean, any] → 返回 void）的解析结果与性能。扩充-三参矩阵：(string, boolean, any)。 |
| 1771 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0247` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: unknown, c: null): void`（3 参数 [string, unknown, null] → 返回 void）的解析结果与性能。扩充-三参矩阵：(string, unknown, null)。 |
| 1772 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0248` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: any, c: unknown): void`（3 参数 [boolean, any, unknown] → 返回 void）的解析结果与性能。扩充-三参矩阵：(boolean, any, unknown)。 |
| 1773 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0249` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: null, c: undefined): void`（3 参数 [boolean, null, undefined] → 返回 void）的解析结果与性能。扩充-三参矩阵：(boolean, null, undefined)。 |
| 1774 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0250` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: unknown, c: null): void`（3 参数 [any, unknown, null] → 返回 void）的解析结果与性能。扩充-三参矩阵：(any, unknown, null)。 |
| 1775 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0251` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: undefined, c: symbol): void`（3 参数 [any, undefined, symbol] → 返回 void）的解析结果与性能。扩充-三参矩阵：(any, undefined, symbol)。 |
| 1776 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0252` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: null, c: undefined): void`（3 参数 [unknown, null, undefined] → 返回 void）的解析结果与性能。扩充-三参矩阵：(unknown, null, undefined)。 |
| 1777 | `conversion_tsfunc.part05.test.ts` | `dts2cpp_func_0253` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: symbol, c: bigint): void`（3 参数 [unknown, symbol, bigint] → 返回 void）的解析结果与性能。扩充-三参矩阵：(unknown, symbol, bigint)。 |
| 1778 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0254` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: undefined, c: symbol): void`（3 参数 [null, undefined, symbol] → 返回 void）的解析结果与性能。扩充-三参矩阵：(null, undefined, symbol)。 |
| 1779 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0255` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: bigint, c: object): void`（3 参数 [null, bigint, object] → 返回 void）的解析结果与性能。扩充-三参矩阵：(null, bigint, object)。 |
| 1780 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0256` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: symbol, c: bigint): void`（3 参数 [undefined, symbol, bigint] → 返回 void）的解析结果与性能。扩充-三参矩阵：(undefined, symbol, bigint)。 |
| 1781 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0257` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: object, c: number[]): void`（3 参数 [undefined, object, number[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(undefined, object, number[])。 |
| 1782 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0258` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: bigint, c: object): void`（3 参数 [symbol, bigint, object] → 返回 void）的解析结果与性能。扩充-三参矩阵：(symbol, bigint, object)。 |
| 1783 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0259` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: number[], c: string[]): void`（3 参数 [symbol, number[], string[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(symbol, number[], string[])。 |
| 1784 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0260` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: object, c: number[]): void`（3 参数 [bigint, object, number[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(bigint, object, number[])。 |
| 1785 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0261` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: string[], c: boolean[]): void`（3 参数 [bigint, string[], boolean[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(bigint, string[], boolean[])。 |
| 1786 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0262` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: number[], c: string[]): void`（3 参数 [object, number[], string[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(object, number[], string[])。 |
| 1787 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0263` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: boolean[], c: Array<number>): void`（3 参数 [object, boolean[], Array<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(object, boolean[], Array<number>)。 |
| 1788 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0264` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[], b: string[], c: boolean[]): void`（3 参数 [number[], string[], boolean[]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(number[], string[], boolean[])。 |
| 1789 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0265` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[], b: Array<number>, c: Map<string, number>): void`（3 参数 [number[], Array<number>, Map<string, number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(number[], Array<number>, Map<string, number>)。 |
| 1790 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0266` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[], b: boolean[], c: Array<number>): void`（3 参数 [string[], boolean[], Array<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(string[], boolean[], Array<number>)。 |
| 1791 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0267` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[], b: Map<string, number>, c: Set<number>): void`（3 参数 [string[], Map<string, number>, Set<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(string[], Map<string, number>, Set<number>)。 |
| 1792 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0268` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[], b: Array<number>, c: Map<string, number>): void`（3 参数 [boolean[], Array<number>, Map<string, number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(boolean[], Array<number>, Map<string, number>)。 |
| 1793 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0269` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[], b: Set<number>, c: Record<string, string>): void`（3 参数 [boolean[], Set<number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(boolean[], Set<number>, Record<string, string>)。 |
| 1794 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0270` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>, b: Map<string, number>, c: Set<number>): void`（3 参数 [Array<number>, Map<string, number>, Set<number>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Array<number>, Map<string, number>, Set<number>)。 |
| 1795 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0271` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>, b: Record<string, string>, c: Promise<string>): void`（3 参数 [Array<number>, Record<string, string>, Promise<string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Array<number>, Record<string, string>, Promise<string>)。 |
| 1796 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0272` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>, b: Set<number>, c: Record<string, string>): void`（3 参数 [Map<string, number>, Set<number>, Record<string, string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Map<string, number>, Set<number>, Record<string, string>)。 |
| 1797 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0273` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>, b: Promise<string>, c: [string, number]): void`（3 参数 [Map<string, number>, Promise<string>, [string, number]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Map<string, number>, Promise<string>, [string, number])。 |
| 1798 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0274` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>, b: Record<string, string>, c: Promise<string>): void`（3 参数 [Set<number>, Record<string, string>, Promise<string>] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Set<number>, Record<string, string>, Promise<string>)。 |
| 1799 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0275` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>, b: [string, number], c: (a: number) => void): void`（3 参数 [Set<number>, [string, number], (a: number) => void] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Set<number>, [string, number], (a: number) => void)。 |
| 1800 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0276` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>, b: Promise<string>, c: [string, number]): void`（3 参数 [Record<string, string>, Promise<string>, [string, number]] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Record<string, string>, Promise<string>, [string, number])。 |
| 1801 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0277` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>, b: (a: number) => void, c: number): void`（3 参数 [Record<string, string>, (a: number) => void, number] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Record<string, string>, (a: number) => void, number)。 |
| 1802 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0278` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>, b: [string, number], c: (a: number) => void): void`（3 参数 [Promise<string>, [string, number], (a: number) => void] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Promise<string>, [string, number], (a: number) => void)。 |
| 1803 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0279` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>, b: number, c: string): void`（3 参数 [Promise<string>, number, string] → 返回 void）的解析结果与性能。扩充-三参矩阵：(Promise<string>, number, string)。 |
| 1804 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0280` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number], b: (a: number) => void, c: number): void`（3 参数 [[string, number], (a: number) => void, number] → 返回 void）的解析结果与性能。扩充-三参矩阵：([string, number], (a: number) => void, number)。 |
| 1805 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0281` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number], b: string, c: boolean): void`（3 参数 [[string, number], string, boolean] → 返回 void）的解析结果与性能。扩充-三参矩阵：([string, number], string, boolean)。 |
| 1806 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0282` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void, b: number, c: string): void`（3 参数 [(a: number) => void, number, string] → 返回 void）的解析结果与性能。扩充-三参矩阵：((a: number) => void, number, string)。 |
| 1807 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0283` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void, b: boolean, c: any): void`（3 参数 [(a: number) => void, boolean, any] → 返回 void）的解析结果与性能。扩充-三参矩阵：((a: number) => void, boolean, any)。 |
| 1808 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0284` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: boolean, c: unknown, d: undefined): void`（4 参数 [number, boolean, unknown, undefined] → 返回 void）的解析结果与性能。扩充-四参矩阵：(number, boolean, unknown, undefined)。 |
| 1809 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0285` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string, b: any, c: null, d: symbol): void`（4 参数 [string, any, null, symbol] → 返回 void）的解析结果与性能。扩充-四参矩阵：(string, any, null, symbol)。 |
| 1810 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0286` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean, b: unknown, c: undefined, d: bigint): void`（4 参数 [boolean, unknown, undefined, bigint] → 返回 void）的解析结果与性能。扩充-四参矩阵：(boolean, unknown, undefined, bigint)。 |
| 1811 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0287` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any, b: null, c: symbol, d: object): void`（4 参数 [any, null, symbol, object] → 返回 void）的解析结果与性能。扩充-四参矩阵：(any, null, symbol, object)。 |
| 1812 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0288` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown, b: undefined, c: bigint, d: number[]): void`（4 参数 [unknown, undefined, bigint, number[]] → 返回 void）的解析结果与性能。扩充-四参矩阵：(unknown, undefined, bigint, number[])。 |
| 1813 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0289` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null, b: symbol, c: object, d: string[]): void`（4 参数 [null, symbol, object, string[]] → 返回 void）的解析结果与性能。扩充-四参矩阵：(null, symbol, object, string[])。 |
| 1814 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0290` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined, b: bigint, c: number[], d: boolean[]): void`（4 参数 [undefined, bigint, number[], boolean[]] → 返回 void）的解析结果与性能。扩充-四参矩阵：(undefined, bigint, number[], boolean[])。 |
| 1815 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0291` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol, b: object, c: string[], d: Array<number>): void`（4 参数 [symbol, object, string[], Array<number>] → 返回 void）的解析结果与性能。扩充-四参矩阵：(symbol, object, string[], Array<number>)。 |
| 1816 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0292` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint, b: number[], c: boolean[], d: Map<string, number>): void`（4 参数 [bigint, number[], boolean[], Map<string, number>] → 返回 void）的解析结果与性能。扩充-四参矩阵：(bigint, number[], boolean[], Map<string, number>)。 |
| 1817 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0293` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object, b: string[], c: Array<number>, d: Set<number>): void`（4 参数 [object, string[], Array<number>, Set<number>] → 返回 void）的解析结果与性能。扩充-四参矩阵：(object, string[], Array<number>, Set<number>)。 |
| 1818 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0294` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number[]`（1 参数 [number] → 返回 number[]）的解析结果与性能。扩充-入参+返回：number → number[]。 |
| 1819 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0295` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): string | number`（1 参数 [number] → 返回 string | number）的解析结果与性能。扩充-入参+返回：number → string | number。 |
| 1820 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0296` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): string[]`（1 参数 [string] → 返回 string[]）的解析结果与性能。扩充-入参+返回：string → string[]。 |
| 1821 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0297` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): string | string`（1 参数 [string] → 返回 string | string）的解析结果与性能。扩充-入参+返回：string → string | string。 |
| 1822 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0298` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean): boolean[]`（1 参数 [boolean] → 返回 boolean[]）的解析结果与性能。扩充-入参+返回：boolean → boolean[]。 |
| 1823 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0299` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean): string | boolean`（1 参数 [boolean] → 返回 string | boolean）的解析结果与性能。扩充-入参+返回：boolean → string | boolean。 |
| 1824 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0300` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any): any[]`（1 参数 [any] → 返回 any[]）的解析结果与性能。扩充-入参+返回：any → any[]。 |
| 1825 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0301` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any): string | any`（1 参数 [any] → 返回 string | any）的解析结果与性能。扩充-入参+返回：any → string | any。 |
| 1826 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0302` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown): unknown[]`（1 参数 [unknown] → 返回 unknown[]）的解析结果与性能。扩充-入参+返回：unknown → unknown[]。 |
| 1827 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0303` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown): string | unknown`（1 参数 [unknown] → 返回 string | unknown）的解析结果与性能。扩充-入参+返回：unknown → string | unknown。 |
| 1828 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0304` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null): null[]`（1 参数 [null] → 返回 null[]）的解析结果与性能。扩充-入参+返回：null → null[]。 |
| 1829 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0305` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null): string | null`（1 参数 [null] → 返回 string | null）的解析结果与性能。扩充-入参+返回：null → string | null。 |
| 1830 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0306` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined): undefined[]`（1 参数 [undefined] → 返回 undefined[]）的解析结果与性能。扩充-入参+返回：undefined → undefined[]。 |
| 1831 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0307` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined): string | undefined`（1 参数 [undefined] → 返回 string | undefined）的解析结果与性能。扩充-入参+返回：undefined → string | undefined。 |
| 1832 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0308` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol): symbol[]`（1 参数 [symbol] → 返回 symbol[]）的解析结果与性能。扩充-入参+返回：symbol → symbol[]。 |
| 1833 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0309` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol): string | symbol`（1 参数 [symbol] → 返回 string | symbol）的解析结果与性能。扩充-入参+返回：symbol → string | symbol。 |
| 1834 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0310` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint): bigint[]`（1 参数 [bigint] → 返回 bigint[]）的解析结果与性能。扩充-入参+返回：bigint → bigint[]。 |
| 1835 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0311` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint): string | bigint`（1 参数 [bigint] → 返回 string | bigint）的解析结果与性能。扩充-入参+返回：bigint → string | bigint。 |
| 1836 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0312` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object): object[]`（1 参数 [object] → 返回 object[]）的解析结果与性能。扩充-入参+返回：object → object[]。 |
| 1837 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0313` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object): string | object`（1 参数 [object] → 返回 string | object）的解析结果与性能。扩充-入参+返回：object → string | object。 |
| 1838 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0314` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[]): number[][]`（1 参数 [number[]] → 返回 number[][]）的解析结果与性能。扩充-入参+返回：number[] → number[][]。 |
| 1839 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0315` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[]): string | number[]`（1 参数 [number[]] → 返回 string | number[]）的解析结果与性能。扩充-入参+返回：number[] → string | number[]。 |
| 1840 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0316` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[]): string[][]`（1 参数 [string[]] → 返回 string[][]）的解析结果与性能。扩充-入参+返回：string[] → string[][]。 |
| 1841 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0317` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[]): string | string[]`（1 参数 [string[]] → 返回 string | string[]）的解析结果与性能。扩充-入参+返回：string[] → string | string[]。 |
| 1842 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0318` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[]): boolean[][]`（1 参数 [boolean[]] → 返回 boolean[][]）的解析结果与性能。扩充-入参+返回：boolean[] → boolean[][]。 |
| 1843 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0319` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[]): string | boolean[]`（1 参数 [boolean[]] → 返回 string | boolean[]）的解析结果与性能。扩充-入参+返回：boolean[] → string | boolean[]。 |
| 1844 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0320` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>): Array<number>[]`（1 参数 [Array<number>] → 返回 Array<number>[]）的解析结果与性能。扩充-入参+返回：Array<number> → Array<number>[]。 |
| 1845 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0321` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>): string | Array<number>`（1 参数 [Array<number>] → 返回 string | Array<number>）的解析结果与性能。扩充-入参+返回：Array<number> → string | Array<number>。 |
| 1846 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0322` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>): Map<string, number>[]`（1 参数 [Map<string, number>] → 返回 Map<string, number>[]）的解析结果与性能。扩充-入参+返回：Map<string, number> → Map<string, number>[]。 |
| 1847 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0323` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>): string | Map<string, number>`（1 参数 [Map<string, number>] → 返回 string | Map<string, number>）的解析结果与性能。扩充-入参+返回：Map<string, number> → string | Map<string, number>。 |
| 1848 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0324` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>): Set<number>[]`（1 参数 [Set<number>] → 返回 Set<number>[]）的解析结果与性能。扩充-入参+返回：Set<number> → Set<number>[]。 |
| 1849 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0325` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Set<number>): string | Set<number>`（1 参数 [Set<number>] → 返回 string | Set<number>）的解析结果与性能。扩充-入参+返回：Set<number> → string | Set<number>。 |
| 1850 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0326` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>): Record<string, string>[]`（1 参数 [Record<string, string>] → 返回 Record<string, string>[]）的解析结果与性能。扩充-入参+返回：Record<string, string> → Record<string, string>[]。 |
| 1851 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0327` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Record<string, string>): string | Record<string, string>`（1 参数 [Record<string, string>] → 返回 string | Record<string, string>）的解析结果与性能。扩充-入参+返回：Record<string, string> → string | Record<string, string>。 |
| 1852 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0328` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>): Promise<string>[]`（1 参数 [Promise<string>] → 返回 Promise<string>[]）的解析结果与性能。扩充-入参+返回：Promise<string> → Promise<string>[]。 |
| 1853 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0329` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Promise<string>): string | Promise<string>`（1 参数 [Promise<string>] → 返回 string | Promise<string>）的解析结果与性能。扩充-入参+返回：Promise<string> → string | Promise<string>。 |
| 1854 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0330` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number]): [string, number][]`（1 参数 [[string, number]] → 返回 [string, number][]）的解析结果与性能。扩充-入参+返回：[string, number] → [string, number][]。 |
| 1855 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0331` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: [string, number]): string | [string, number]`（1 参数 [[string, number]] → 返回 string | [string, number]）的解析结果与性能。扩充-入参+返回：[string, number] → string | [string, number]。 |
| 1856 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0332` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void): (a: number) => void[]`（1 参数 [(a: number) => void] → 返回 (a: number) => void[]）的解析结果与性能。扩充-入参+返回：(a: number) => void → (a: number) => void[]。 |
| 1857 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0333` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (a: number) => void): string | (a: number) => void`（1 参数 [(a: number) => void] → 返回 string | (a: number) => void）的解析结果与性能。扩充-入参+返回：(a: number) => void → string | (a: number) => void。 |
| 1858 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0334` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 number。 |
| 1859 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0335` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 string。 |
| 1860 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0336` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean): void`（1 参数 [boolean] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 boolean。 |
| 1861 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0337` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any): void`（1 参数 [any] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 any。 |
| 1862 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0338` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown): void`（1 参数 [unknown] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 unknown。 |
| 1863 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0339` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null): void`（1 参数 [null] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 null。 |
| 1864 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0340` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined): void`（1 参数 [undefined] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 undefined。 |
| 1865 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0341` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol): void`（1 参数 [symbol] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 symbol。 |
| 1866 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0342` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint): void`（1 参数 [bigint] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 bigint。 |
| 1867 | `conversion_tsfunc.part06.test.ts` | `dts2cpp_func_0343` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object): void`（1 参数 [object] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 object。 |
| 1868 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0344` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[]): void`（1 参数 [number[]] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 number[]。 |
| 1869 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0345` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[]): void`（1 参数 [string[]] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 string[]。 |
| 1870 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0346` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[]): void`（1 参数 [boolean[]] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 boolean[]。 |
| 1871 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0347` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>): void`（1 参数 [Array<number>] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 Array<number>。 |
| 1872 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0348` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>): void`（1 参数 [Map<string, number>] → 返回 void）的解析结果与性能。扩充-修饰：可选参数 Map<string, number>。 |
| 1873 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0349` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[]): void`（1 参数 [number[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 number[]。 |
| 1874 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0350` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[]): void`（1 参数 [string[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 string[]。 |
| 1875 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0351` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[]): void`（1 参数 [boolean[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 boolean[]。 |
| 1876 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0352` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: any[]): void`（1 参数 [any[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 any[]。 |
| 1877 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0353` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown[]): void`（1 参数 [unknown[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 unknown[]。 |
| 1878 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0354` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: null[]): void`（1 参数 [null[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 null[]。 |
| 1879 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0355` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: undefined[]): void`（1 参数 [undefined[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 undefined[]。 |
| 1880 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0356` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: symbol[]): void`（1 参数 [symbol[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 symbol[]。 |
| 1881 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0357` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: bigint[]): void`（1 参数 [bigint[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 bigint[]。 |
| 1882 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0358` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: object[]): void`（1 参数 [object[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 object[]。 |
| 1883 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0359` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number[][]): void`（1 参数 [number[][]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 number[][]。 |
| 1884 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0360` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string[][]): void`（1 参数 [string[][]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 string[][]。 |
| 1885 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0361` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean[][]): void`（1 参数 [boolean[][]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 boolean[][]。 |
| 1886 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0362` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Array<number>[]): void`（1 参数 [Array<number>[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 Array<number>[]。 |
| 1887 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0363` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>[]): void`（1 参数 [Map<string, number>[]] → 返回 void）的解析结果与性能。扩充-修饰：rest 参数 Map<string, number>[]。 |
| 1888 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0364` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): void`（1 参数 [number] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 number = 0。 |
| 1889 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0365` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 string = "x"。 |
| 1890 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0366` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: boolean): void`（1 参数 [boolean] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 boolean = true。 |
| 1891 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0367` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: "lit"): void`（1 参数 ["lit"] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 "lit" = "lit"。 |
| 1892 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0368` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: 42): void`（1 参数 [42] → 返回 void）的解析结果与性能。扩充-修饰：默认值参数 42 = 42。 |
| 1893 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0369` | 性能测试 | 2 | dts2cpp funcs 签名 `(: { a: number; b: number }): void`（1 参数 [{ a: number; b: number }] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（对象双成员）。 |
| 1894 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0370` | 性能测试 | 2 | dts2cpp funcs 签名 `(: { a: number; b: string; c: boolean }): void`（1 参数 [{ a: number; b: string; c: boolean }] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（对象三成员）。 |
| 1895 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0371` | 性能测试 | 2 | dts2cpp funcs 签名 `(: { a: { b: number } }): void`（1 参数 [{ a: { b: number } }] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（对象嵌套）。 |
| 1896 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0372` | 性能测试 | 2 | dts2cpp funcs 签名 `(: [number, string]): void`（1 参数 [[number, string]] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（元组双元素）。 |
| 1897 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0373` | 性能测试 | 2 | dts2cpp funcs 签名 `(: [number, string, boolean]): void`（1 参数 [[number, string, boolean]] → 返回 void）的解析结果与性能。扩充-修饰：解构参数（元组三元素）。 |
| 1898 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0374` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：UpperCamel。 |
| 1899 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0375` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：lowerCamel。 |
| 1900 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0376` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：snake_case。 |
| 1901 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0377` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：Trailing2。 |
| 1902 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0378` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：_leading。 |
| 1903 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0379` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：Double__Under。 |
| 1904 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0380` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：f。 |
| 1905 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0381` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：f1。 |
| 1906 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0382` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：F。 |
| 1907 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0383` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：F1。 |
| 1908 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0384` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：fn。 |
| 1909 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0385` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：func1。 |
| 1910 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0386` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：handler。 |
| 1911 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0387` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：callback。 |
| 1912 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0388` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：process。 |
| 1913 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0389` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：parse。 |
| 1914 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0390` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：convert。 |
| 1915 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0391` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：transform。 |
| 1916 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0392` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：serialize。 |
| 1917 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0393` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：deserialize。 |
| 1918 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0394` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：中文函数。 |
| 1919 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0395` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：getData。 |
| 1920 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0396` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：setData。 |
| 1921 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0397` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：updateAll。 |
| 1922 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0398` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：deleteById。 |
| 1923 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0399` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：findByName。 |
| 1924 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0400` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：createNew。 |
| 1925 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0401` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：destroyAll。 |
| 1926 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0402` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：registerFn。 |
| 1927 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0403` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-命名：unregisterFn。 |
| 1928 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0404` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 2 个函数。 |
| 1929 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0405` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 3 个函数。 |
| 1930 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0406` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 4 个函数。 |
| 1931 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0407` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 5 个函数。 |
| 1932 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0408` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 6 个函数。 |
| 1933 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0409` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 7 个函数。 |
| 1934 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0410` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 8 个函数。 |
| 1935 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0411` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 9 个函数。 |
| 1936 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0412` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-多函数：同文件 10 个函数。 |
| 1937 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0413` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): T`（1 参数 [T] → 返回 T）的解析结果与性能。扩充-泛型：单泛型返回 T。 |
| 1938 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0414` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): T[]`（1 参数 [T] → 返回 T[]）的解析结果与性能。扩充-泛型：泛型返回数组。 |
| 1939 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0415` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T[]): T`（1 参数 [T[]] → 返回 T）的解析结果与性能。扩充-泛型：泛型数组入参。 |
| 1940 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0416` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: A, b: B): void`（2 参数 [A, B] → 返回 void）的解析结果与性能。扩充-泛型：双泛型。 |
| 1941 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0417` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): void`（1 参数 [T] → 返回 void）的解析结果与性能。扩充-泛型：泛型约束。 |
| 1942 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0418` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): T | null`（1 参数 [T] → 返回 T | null）的解析结果与性能。扩充-泛型：泛型返回联合。 |
| 1943 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0419` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T[]): void`（1 参数 [T[]] → 返回 void）的解析结果与性能。扩充-泛型：泛型+rest。 |
| 1944 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0420` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): Promise<T>`（1 参数 [T] → 返回 Promise<T>）的解析结果与性能。扩充-泛型：泛型返回 Promise。 |
| 1945 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0421` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: T): void`（1 参数 [T] → 返回 void）的解析结果与性能。扩充-泛型：泛型可选。 |
| 1946 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0422` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: A, b: B, c: C): void`（3 参数 [A, B, C] → 返回 void）的解析结果与性能。扩充-泛型：三泛型。 |
| 1947 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0423` | 性能测试 | 2 | dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。扩充-边界：无参无返回。 |
| 1948 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0424` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): 无注解(undefined)`（1 参数 [number] → 返回 无注解(undefined)）的解析结果与性能。扩充-边界：空函数体。 |
| 1949 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0425` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-边界：export。 |
| 1950 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0426` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-边界：declare。 |
| 1951 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0427` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number): number`（1 参数 [number] → 返回 number）的解析结果与性能。扩充-边界：namespace。 |
| 1952 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0428` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: typeof globalThis): void`（1 参数 [typeof globalThis] → 返回 void）的解析结果与性能。扩充-边界：typeof 参数。 |
| 1953 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0429` | 性能测试 | 2 | dts2cpp funcs 签名 `(参数: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。扩充-边界：中文名/参数。 |
| 1954 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0430` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: 中文类型): void`（1 参数 [中文类型] → 返回 void）的解析结果与性能。扩充-边界：中文类型。 |
| 1955 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0431` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: unknown & null): never`（1 参数 [unknown & null] → 返回 never）的解析结果与性能。扩充-边界：交集参数。 |
| 1956 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0432` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: (string | number)[]): void`（1 参数 [(string | number)[]] → 返回 void）的解析结果与性能。扩充-边界：rest 联合。 |
| 1957 | `conversion_tsfunc.part07.test.ts` | `dts2cpp_func_0433` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string | null): void`（1 参数 [string | null] → 返回 void）的解析结果与性能。扩充-边界：可选联合。 |
| 1958 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0434` | 性能测试 | 2 | dts2cpp funcs 签名 `(selector: string): Element`（1 参数 [string] → 返回 Element）的解析结果与性能。函数类型-$：$ 命名的选择器函数。 |
| 1959 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0435` | 性能测试 | 2 | dts2cpp funcs 签名 `(id: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。函数类型-$：$get/$set 命名函数。 |
| 1960 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0436` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。函数类型-$：$$ 双美元命名。 |
| 1961 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0437` | 性能测试 | 2 | dts2cpp funcs 签名 `(key: string): any`（1 参数 [string] → 返回 any）的解析结果与性能。函数类型-$：$ 包裹命名。 |
| 1962 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0438` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: string): void`（1 参数 [string] → 返回 void）的解析结果与性能。函数类型-$：后缀 $ 命名函数。 |
| 1963 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0439` | 性能测试 | 2 | dts2cpp funcs 签名 `(event: string, cb: () => void): void`（2 参数 [string, () => void] → 返回 void）的解析结果与性能。函数类型-on/off：独立 on/off 事件函数。 |
| 1964 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0440` | 性能测试 | 2 | dts2cpp funcs 签名 `(event: string, cb: (data: any) => void): void`（2 参数 [string, (data: any) => void] → 返回 void）的解析结果与性能。函数类型-on/off：带 data 回调的 on/off。 |
| 1965 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0441` | 性能测试 | 2 | dts2cpp funcs 签名 `(event: string, cb: () => void): void`（2 参数 [string, () => void] → 返回 void）的解析结果与性能。函数类型-on/off：once/on 组合。 |
| 1966 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0442` | 性能测试 | 2 | dts2cpp funcs 签名 `(cb: (data: string) => void): void`（1 参数 [(data: string) => void] → 返回 void）的解析结果与性能。函数类型-on/off：onX/offX 命名模式。 |
| 1967 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0443` | 性能测试 | 2 | dts2cpp funcs 签名 `(event: string, cb: () => void): void`（2 参数 [string, () => void] → 返回 void）的解析结果与性能。函数类型-on/off：addListener/removeListener 事件模式。 |
| 1968 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0444` | 性能测试 | 2 | dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。函数类型-arrowfunc：独立箭头函数常量（解析不产出 funcs）。 |
| 1969 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0445` | 性能测试 | 2 | dts2cpp funcs 签名 `(fn: (a: number) => number, v: number): number`（2 参数 [(a: number) => number, number] → 返回 number）的解析结果与性能。函数类型-arrowfunc：箭头函数类型入参。 |
| 1970 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0446` | 性能测试 | 2 | dts2cpp funcs 签名 `(): (a: string) => void`（0 参数 [] → 返回 (a: string) => void）的解析结果与性能。函数类型-arrowfunc：箭头函数类型返回。 |
| 1971 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0447` | 性能测试 | 2 | dts2cpp funcs 签名 `(h: Handler): void`（1 参数 [Handler] → 返回 void）的解析结果与性能。函数类型-arrowfunc：箭头函数类型 alias 入参。 |
| 1972 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0448` | 性能测试 | 2 | dts2cpp funcs 签名 `(arr: number[], fn: (v: number, i: number) => number): number[]`（2 参数 [number[], (v: number, i: number) => number] → 返回 number[]）的解析结果与性能。函数类型-arrowfunc：双参箭头回调。 |
| 1973 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0449` | 性能测试 | 2 | dts2cpp funcs 签名 `(cb: (data: string) => void): void`（1 参数 [(data: string) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：createThreadSafeFunction。 |
| 1974 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0450` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, cb: (err: Error | null, result: number) => void): void`（2 参数 [number, (err: Error | null, result: number) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：threadsafeFunc 回调参数。 |
| 1975 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0451` | 性能测试 | 2 | dts2cpp funcs 签名 `(cb: (err: Error | null, result: number[]) => void): Promise<number>`（1 参数 [(err: Error | null, result: number[]) => void] → 返回 Promise<number>）的解析结果与性能。函数类型-threadsafe_func：异步回调 + Promise 返回。 |
| 1976 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0452` | 性能测试 | 2 | dts2cpp funcs 签名 `(cb: (err: Error | null, data: string) => void): void`（1 参数 [(err: Error | null, data: string) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：callback/callbackWithError。 |
| 1977 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0453` | 性能测试 | 2 | dts2cpp funcs 签名 `(data: any, cb: (err: Error | null) => void): void`（2 参数 [any, (err: Error | null) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：消息线程回调模式。 |
| 1978 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0454` | 性能测试 | 2 | dts2cpp funcs 签名 `(cb: (err: Error | null, handle: number) => void): void`（1 参数 [(err: Error | null, handle: number) => void] → 返回 void）的解析结果与性能。函数类型-threadsafe_func：资源句柄回调模式。 |
| 1979 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0455` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Foo): void`（1 参数 [Foo] → 返回 void）的解析结果与性能。import-自定义文件：具名导入 + 函数。 |
| 1980 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0456` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Foo): void`（1 参数 [Foo] → 返回 void）的解析结果与性能。import-自定义文件：默认导入 + 函数。 |
| 1981 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0457` | 性能测试 | 2 | dts2cpp funcs 签名 `(): ns.Bar`（0 参数 [] → 返回 ns.Bar）的解析结果与性能。import-自定义文件：命名空间导入 + 限定返回。 |
| 1982 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0458` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: B): void`（1 参数 [B] → 返回 void）的解析结果与性能。import-自定义文件：别名导入。 |
| 1983 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0459` | 性能测试 | 2 | dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。import-自定义文件：副作用导入。 |
| 1984 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0460` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Foo): Foo`（1 参数 [Foo] → 返回 Foo）的解析结果与性能。import-自定义文件：导入 + export 函数。 |
| 1985 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0461` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: Map<string, number>): void`（1 参数 [Map<string, number>] → 返回 void）的解析结果与性能。import-自定义文件：导入同名类型 + 泛型参数。 |
| 1986 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0462` | 性能测试 | 2 | dts2cpp funcs 签名 `(id: number): Data`（1 参数 [number] → 返回 Data）的解析结果与性能。import-自定义文件：导入类型作参数/返回。 |
| 1987 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0463` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: A, b: B, c: C): void`（3 参数 [A, B, C] → 返回 void）的解析结果与性能。import-自定义文件：三类型导入 + 三参函数。 |
| 1988 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0464` | 性能测试 | 2 | dts2cpp funcs 签名 `(cb: Callback): void`（1 参数 [Callback] → 返回 void）的解析结果与性能。import-自定义文件：导入回调类型。 |
| 1989 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0465` | 性能测试 | 2 | dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。namespace-变量：const/let/var 变量声明（不产出对象）。 |
| 1990 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0466` | 性能测试 | 2 | dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。namespace-变量+函数：变量声明 + 函数。 |
| 1991 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0467` | 性能测试 | 2 | dts2cpp funcs 签名 `(b: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。namespace-变量+函数：export namespace 混合。 |
| 1992 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0468` | 性能测试 | 2 | dts2cpp funcs 签名 `(b: number): string`（1 参数 [number] → 返回 string）的解析结果与性能。namespace-变量+函数：declare namespace 签名。 |
| 1993 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0469` | 性能测试 | 2 | dts2cpp funcs 签名 `(): 无注解(undefined)`（0 参数 [] → 返回 无注解(undefined)）的解析结果与性能。namespace-变量+函数：嵌套 namespace。 |
| 1994 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0470` | 性能测试 | 2 | dts2cpp funcs 签名 `(): void`（0 参数 [] → 返回 void）的解析结果与性能。namespace-变量+函数：容器变量 + 函数。 |
| 1995 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0471` | 性能测试 | 2 | dts2cpp funcs 签名 `(a: number, b: number): number`（2 参数 [number, number] → 返回 number）的解析结果与性能。namespace-变量+函数：工具 namespace 双函数。 |
| 1996 | `conversion_tsfunc.part08.test.ts` | `dts2cpp_func_0472` | 性能测试 | 2 | dts2cpp funcs 签名 `(path: string): Promise<string>`（1 参数 [string] → 返回 Promise<string>）的解析结果与性能。namespace-变量+函数：Promise 返回的 namespace 函数。 |
| 1997 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0001` | 性能测试 | 2 | dts2cpp type 对齐 parsetstype test_1：一般对象字面量类型（2 成员 + 2 方法签名） 的解析结果与性能。 |
| 1998 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0002` | 性能测试 | 2 | dts2cpp type 对齐 test_2：30 成员 + 12 方法签名 + 箭头函数属性全类型覆盖 的解析结果与性能。 |
| 1999 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0003` | 性能测试 | 2 | dts2cpp type 对齐 test_4：交叉类型 RHS（交叉部分不深入解析） 的解析结果与性能。 |
| 2000 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0004` | 性能测试 | 2 | dts2cpp type 对齐 test_5：定长数组成员与箭头函数属性 的解析结果与性能。 |
| 2001 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0005` | 性能测试 | 2 | dts2cpp type 对齐 test_7：可选成员/参数方法签名 的解析结果与性能。 |
| 2002 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0006` | 性能测试 | 2 | dts2cpp type 对齐 test_8：多种注释 的解析结果与性能。 |
| 2003 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0007` | 性能测试 | 2 | dts2cpp type 对齐 test_9：修饰符成员（const 独立为成员） 的解析结果与性能。 |
| 2004 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0008` | 性能测试 | 2 | dts2cpp type 对齐 test_10：索引签名成员 的解析结果与性能。 |
| 2005 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0009` | 性能测试 | 2 | dts2cpp type 对齐 test_13：泛型/字面量/嵌套泛型成员 的解析结果与性能。 |
| 2006 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0010` | 性能测试 | 2 | dts2cpp type 对齐 test_14：ReadonlyArray/元组成员 的解析结果与性能。 |
| 2007 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0011` | 性能测试 | 2 | dts2cpp type 对齐 test_16：元组成员 的解析结果与性能。 |
| 2008 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0012` | 性能测试 | 2 | dts2cpp type 对齐 test_17：keyof 成员 的解析结果与性能。 |
| 2009 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0013` | 性能测试 | 2 | dts2cpp type 对齐 test_19：索引访问类型成员 的解析结果与性能。 |
| 2010 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0014` | 性能测试 | 2 | dts2cpp type 对齐 test_20：条件类型成员 的解析结果与性能。 |
| 2011 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0015` | 性能测试 | 2 | dts2cpp type 对齐 test_22：模板字面与泛型方法签名 的解析结果与性能。 |
| 2012 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0016` | 性能测试 | 2 | dts2cpp type 对齐 test_23：内在字符串操作类型成员 的解析结果与性能。 |
| 2013 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0017` | 性能测试 | 2 | dts2cpp type 对齐 test_24：export type 的解析结果与性能。 |
| 2014 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0018` | 性能测试 | 2 | dts2cpp type 对齐 test_26：declare namespace 嵌套 type 的解析结果与性能。 |
| 2015 | `conversion_tstype.part01.test.ts` | `dts2cpp_type_0019` | 性能测试 | 2 | dts2cpp type 对齐 test_42：单行 type 的解析结果与性能。 |
| 2016 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0020` | 性能测试 | 2 | dts2cpp type 对齐 test_45：中文 type 名交叉 RHS 的解析结果与性能。 |
| 2017 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0021` | 性能测试 | 2 | dts2cpp type 对齐 test_49：两个空 type 的解析结果与性能。 |
| 2018 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0022` | 性能测试 | 2 | dts2cpp type 对齐 test_70：重载方法签名 的解析结果与性能。 |
| 2019 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0023` | 性能测试 | 2 | dts2cpp type 扩充：20 成员全基本类型/容器/元组矩阵 的解析结果与性能。 |
| 2020 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0024` | 性能测试 | 2 | dts2cpp type 扩充：30 成员进阶类型矩阵 的解析结果与性能。 |
| 2021 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0025` | 性能测试 | 2 | dts2cpp type 扩充：50 成员全类型矩阵（规模压测） 的解析结果与性能。 |
| 2022 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0026` | 性能测试 | 2 | dts2cpp type 扩充：20 方法签名返回类型矩阵 的解析结果与性能。 |
| 2023 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0027` | 性能测试 | 2 | dts2cpp type 扩充：10 方法签名参数形态矩阵 的解析结果与性能。 |
| 2024 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0028` | 性能测试 | 2 | dts2cpp type 扩充：4 箭头函数属性形态（可选/rest/泛型） 的解析结果与性能。 |
| 2025 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0029` | 性能测试 | 2 | dts2cpp type 扩充：同文件两个 type 的解析结果与性能。 |
| 2026 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0030` | 性能测试 | 2 | dts2cpp type 扩充：同文件三个 type（多声明吞吐） 的解析结果与性能。 |
| 2027 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0031` | 性能测试 | 2 | dts2cpp type 扩充：双泛型 type 的解析结果与性能。 |
| 2028 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0032` | 性能测试 | 2 | dts2cpp type 扩充：中文 type/成员/方法 的解析结果与性能。 |
| 2029 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0033` | 性能测试 | 2 | dts2cpp type 扩充：空 type 的解析结果与性能。 |
| 2030 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0034` | 性能测试 | 2 | dts2cpp type 扩充：字面量/交集/模板/联合成员矩阵 的解析结果与性能。 |
| 2031 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0035` | 性能测试 | 2 | dts2cpp type 扩充：字面量联合参数与返回方法签名 的解析结果与性能。 |
| 2032 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0036` | 性能测试 | 2 | dts2cpp type 扩充：10 成员 + 10 方法签名混合大集合 的解析结果与性能。 |
| 2033 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0037` | 性能测试 | 2 | dts2cpp type 扩充：判别联合 type 交叉体系 的解析结果与性能。 |
| 2034 | `conversion_tstype.part02.test.ts` | `dts2cpp_type_0038` | 性能测试 | 2 | dts2cpp type 扩充：函数类型别名引用成员（同文件 2 个 type） 的解析结果与性能。 |
| 2035 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0040` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number × plain 形态（4 成员） 的解析结果与性能。 |
| 2036 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0041` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number × readonly 形态（4 成员） 的解析结果与性能。 |
| 2037 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0042` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number × optional 形态（4 成员） 的解析结果与性能。 |
| 2038 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0043` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2039 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0044` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string × plain 形态（4 成员） 的解析结果与性能。 |
| 2040 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0045` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string × readonly 形态（4 成员） 的解析结果与性能。 |
| 2041 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0046` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string × optional 形态（4 成员） 的解析结果与性能。 |
| 2042 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0047` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2043 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0048` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean × plain 形态（4 成员） 的解析结果与性能。 |
| 2044 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0049` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean × readonly 形态（4 成员） 的解析结果与性能。 |
| 2045 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0050` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean × optional 形态（4 成员） 的解析结果与性能。 |
| 2046 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0051` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2047 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0052` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：any × plain 形态（4 成员） 的解析结果与性能。 |
| 2048 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0053` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：any × readonly 形态（4 成员） 的解析结果与性能。 |
| 2049 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0054` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：any × optional 形态（4 成员） 的解析结果与性能。 |
| 2050 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0055` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：any × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2051 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0056` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：unknown × plain 形态（4 成员） 的解析结果与性能。 |
| 2052 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0057` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：unknown × readonly 形态（4 成员） 的解析结果与性能。 |
| 2053 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0058` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：unknown × optional 形态（4 成员） 的解析结果与性能。 |
| 2054 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0059` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：unknown × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2055 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0060` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：null × plain 形态（4 成员） 的解析结果与性能。 |
| 2056 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0061` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：null × readonly 形态（4 成员） 的解析结果与性能。 |
| 2057 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0062` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：null × optional 形态（4 成员） 的解析结果与性能。 |
| 2058 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0063` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：null × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2059 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0064` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：undefined × plain 形态（4 成员） 的解析结果与性能。 |
| 2060 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0065` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：undefined × readonly 形态（4 成员） 的解析结果与性能。 |
| 2061 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0066` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：undefined × optional 形态（4 成员） 的解析结果与性能。 |
| 2062 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0067` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：undefined × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2063 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0068` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：symbol × plain 形态（4 成员） 的解析结果与性能。 |
| 2064 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0069` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：symbol × readonly 形态（4 成员） 的解析结果与性能。 |
| 2065 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0070` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：symbol × optional 形态（4 成员） 的解析结果与性能。 |
| 2066 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0071` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：symbol × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2067 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0072` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：bigint × plain 形态（4 成员） 的解析结果与性能。 |
| 2068 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0073` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：bigint × readonly 形态（4 成员） 的解析结果与性能。 |
| 2069 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0074` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：bigint × optional 形态（4 成员） 的解析结果与性能。 |
| 2070 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0075` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：bigint × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2071 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0076` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：object × plain 形态（4 成员） 的解析结果与性能。 |
| 2072 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0077` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：object × readonly 形态（4 成员） 的解析结果与性能。 |
| 2073 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0078` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：object × optional 形态（4 成员） 的解析结果与性能。 |
| 2074 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0079` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：object × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2075 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0080` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number[] × plain 形态（4 成员） 的解析结果与性能。 |
| 2076 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0081` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number[] × readonly 形态（4 成员） 的解析结果与性能。 |
| 2077 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0082` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number[] × optional 形态（4 成员） 的解析结果与性能。 |
| 2078 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0083` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：number[] × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2079 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0084` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string[] × plain 形态（4 成员） 的解析结果与性能。 |
| 2080 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0085` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string[] × readonly 形态（4 成员） 的解析结果与性能。 |
| 2081 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0086` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string[] × optional 形态（4 成员） 的解析结果与性能。 |
| 2082 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0087` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string[] × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2083 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0088` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean[] × plain 形态（4 成员） 的解析结果与性能。 |
| 2084 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0089` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean[] × readonly 形态（4 成员） 的解析结果与性能。 |
| 2085 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0090` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean[] × optional 形态（4 成员） 的解析结果与性能。 |
| 2086 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0091` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：boolean[] × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2087 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0092` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Array<number> × plain 形态（4 成员） 的解析结果与性能。 |
| 2088 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0093` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Array<number> × readonly 形态（4 成员） 的解析结果与性能。 |
| 2089 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0094` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Array<number> × optional 形态（4 成员） 的解析结果与性能。 |
| 2090 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0095` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Array<number> × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2091 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0096` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Map<string, number> × plain 形态（4 成员） 的解析结果与性能。 |
| 2092 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0097` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Map<string, number> × readonly 形态（4 成员） 的解析结果与性能。 |
| 2093 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0098` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Map<string, number> × optional 形态（4 成员） 的解析结果与性能。 |
| 2094 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0099` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Map<string, number> × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2095 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0100` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Set<number> × plain 形态（4 成员） 的解析结果与性能。 |
| 2096 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0101` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Set<number> × readonly 形态（4 成员） 的解析结果与性能。 |
| 2097 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0102` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Set<number> × optional 形态（4 成员） 的解析结果与性能。 |
| 2098 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0103` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Set<number> × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2099 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0104` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Record<string, string> × plain 形态（4 成员） 的解析结果与性能。 |
| 2100 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0105` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Record<string, string> × readonly 形态（4 成员） 的解析结果与性能。 |
| 2101 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0106` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Record<string, string> × optional 形态（4 成员） 的解析结果与性能。 |
| 2102 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0107` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Record<string, string> × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2103 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0108` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Promise<string> × plain 形态（4 成员） 的解析结果与性能。 |
| 2104 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0109` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Promise<string> × readonly 形态（4 成员） 的解析结果与性能。 |
| 2105 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0110` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Promise<string> × optional 形态（4 成员） 的解析结果与性能。 |
| 2106 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0111` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Promise<string> × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2107 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0112` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：[string, number] × plain 形态（4 成员） 的解析结果与性能。 |
| 2108 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0113` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：[string, number] × readonly 形态（4 成员） 的解析结果与性能。 |
| 2109 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0114` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：[string, number] × optional 形态（4 成员） 的解析结果与性能。 |
| 2110 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0115` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：[string, number] × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2111 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0116` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：(a: number) => void × plain 形态（4 成员） 的解析结果与性能。 |
| 2112 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0117` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：(a: number) => void × readonly 形态（4 成员） 的解析结果与性能。 |
| 2113 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0118` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：(a: number) => void × optional 形态（4 成员） 的解析结果与性能。 |
| 2114 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0119` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：(a: number) => void × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2115 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0120` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Date × plain 形态（4 成员） 的解析结果与性能。 |
| 2116 | `conversion_tstype.part03.test.ts` | `dts2cpp_type_0121` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Date × readonly 形态（4 成员） 的解析结果与性能。 |
| 2117 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0122` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Date × optional 形态（4 成员） 的解析结果与性能。 |
| 2118 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0123` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Date × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2119 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0124` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：RegExp × plain 形态（4 成员） 的解析结果与性能。 |
| 2120 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0125` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：RegExp × readonly 形态（4 成员） 的解析结果与性能。 |
| 2121 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0126` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：RegExp × optional 形态（4 成员） 的解析结果与性能。 |
| 2122 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0127` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：RegExp × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2123 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0128` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Error × plain 形态（4 成员） 的解析结果与性能。 |
| 2124 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0129` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Error × readonly 形态（4 成员） 的解析结果与性能。 |
| 2125 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0130` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Error × optional 形态（4 成员） 的解析结果与性能。 |
| 2126 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0131` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Error × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2127 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0132` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Uint8Array × plain 形态（4 成员） 的解析结果与性能。 |
| 2128 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0133` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Uint8Array × readonly 形态（4 成员） 的解析结果与性能。 |
| 2129 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0134` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Uint8Array × optional 形态（4 成员） 的解析结果与性能。 |
| 2130 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0135` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：Uint8Array × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2131 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0136` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵："lit" × plain 形态（4 成员） 的解析结果与性能。 |
| 2132 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0137` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵："lit" × readonly 形态（4 成员） 的解析结果与性能。 |
| 2133 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0138` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵："lit" × optional 形态（4 成员） 的解析结果与性能。 |
| 2134 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0139` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵："lit" × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2135 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0140` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：42 × plain 形态（4 成员） 的解析结果与性能。 |
| 2136 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0141` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：42 × readonly 形态（4 成员） 的解析结果与性能。 |
| 2137 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0142` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：42 × optional 形态（4 成员） 的解析结果与性能。 |
| 2138 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0143` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：42 × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2139 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0144` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：true × plain 形态（4 成员） 的解析结果与性能。 |
| 2140 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0145` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：true × readonly 形态（4 成员） 的解析结果与性能。 |
| 2141 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0146` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：true × optional 形态（4 成员） 的解析结果与性能。 |
| 2142 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0147` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：true × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2143 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0148` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string | number × plain 形态（4 成员） 的解析结果与性能。 |
| 2144 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0149` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string | number × readonly 形态（4 成员） 的解析结果与性能。 |
| 2145 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0150` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string | number × optional 形态（4 成员） 的解析结果与性能。 |
| 2146 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0151` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string | number × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2147 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0152` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string & {} × plain 形态（4 成员） 的解析结果与性能。 |
| 2148 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0153` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string & {} × readonly 形态（4 成员） 的解析结果与性能。 |
| 2149 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0154` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string & {} × optional 形态（4 成员） 的解析结果与性能。 |
| 2150 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0155` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：string & {} × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2151 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0156` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：{ id: number } × plain 形态（4 成员） 的解析结果与性能。 |
| 2152 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0157` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：{ id: number } × readonly 形态（4 成员） 的解析结果与性能。 |
| 2153 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0158` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：{ id: number } × optional 形态（4 成员） 的解析结果与性能。 |
| 2154 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0159` | 性能测试 | 2 | dts2cpp type 扩充-成员矩阵：{ id: number } × arrow-prop 形态（4 成员） 的解析结果与性能。 |
| 2155 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0160` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 number（无参 ×3） 的解析结果与性能。 |
| 2156 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0161` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 number（带参 ×3） 的解析结果与性能。 |
| 2157 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0162` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 string（无参 ×3） 的解析结果与性能。 |
| 2158 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0163` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 string（带参 ×3） 的解析结果与性能。 |
| 2159 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0164` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 boolean（无参 ×3） 的解析结果与性能。 |
| 2160 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0165` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 boolean（带参 ×3） 的解析结果与性能。 |
| 2161 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0166` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 any（无参 ×3） 的解析结果与性能。 |
| 2162 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0167` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 any（带参 ×3） 的解析结果与性能。 |
| 2163 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0168` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 unknown（无参 ×3） 的解析结果与性能。 |
| 2164 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0169` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 unknown（带参 ×3） 的解析结果与性能。 |
| 2165 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0170` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 null（无参 ×3） 的解析结果与性能。 |
| 2166 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0171` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 null（带参 ×3） 的解析结果与性能。 |
| 2167 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0172` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 undefined（无参 ×3） 的解析结果与性能。 |
| 2168 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0173` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 undefined（带参 ×3） 的解析结果与性能。 |
| 2169 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0174` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 symbol（无参 ×3） 的解析结果与性能。 |
| 2170 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0175` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 symbol（带参 ×3） 的解析结果与性能。 |
| 2171 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0176` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 bigint（无参 ×3） 的解析结果与性能。 |
| 2172 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0177` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 bigint（带参 ×3） 的解析结果与性能。 |
| 2173 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0178` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 object（无参 ×3） 的解析结果与性能。 |
| 2174 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0179` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 object（带参 ×3） 的解析结果与性能。 |
| 2175 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0180` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 number[]（无参 ×3） 的解析结果与性能。 |
| 2176 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0181` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 number[]（带参 ×3） 的解析结果与性能。 |
| 2177 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0182` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 string[]（无参 ×3） 的解析结果与性能。 |
| 2178 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0183` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 string[]（带参 ×3） 的解析结果与性能。 |
| 2179 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0184` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 boolean[][]（无参 ×3） 的解析结果与性能。 |
| 2180 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0185` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 boolean[][]（带参 ×3） 的解析结果与性能。 |
| 2181 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0186` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 [string, number]（无参 ×3） 的解析结果与性能。 |
| 2182 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0187` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 [string, number]（带参 ×3） 的解析结果与性能。 |
| 2183 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0188` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 (a: number) => void（无参 ×3） 的解析结果与性能。 |
| 2184 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0189` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 (a: number) => void（带参 ×3） 的解析结果与性能。 |
| 2185 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0190` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 string | number（无参 ×3） 的解析结果与性能。 |
| 2186 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0191` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 string | number（带参 ×3） 的解析结果与性能。 |
| 2187 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0192` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 boolean | null（无参 ×3） 的解析结果与性能。 |
| 2188 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0193` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 boolean | null（带参 ×3） 的解析结果与性能。 |
| 2189 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0194` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 "lit" | 1（无参 ×3） 的解析结果与性能。 |
| 2190 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0195` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 "lit" | 1（带参 ×3） 的解析结果与性能。 |
| 2191 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0196` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 42（无参 ×3） 的解析结果与性能。 |
| 2192 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0197` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 42（带参 ×3） 的解析结果与性能。 |
| 2193 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0198` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 { id: number }（无参 ×3） 的解析结果与性能。 |
| 2194 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0199` | 性能测试 | 2 | dts2cpp type 扩充-返回矩阵：方法签名返回 { id: number }（带参 ×3） 的解析结果与性能。 |
| 2195 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0200` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：单参（×3 属性） 的解析结果与性能。 |
| 2196 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0201` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：双参（×3 属性） 的解析结果与性能。 |
| 2197 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0202` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：三参（×3 属性） 的解析结果与性能。 |
| 2198 | `conversion_tstype.part04.test.ts` | `dts2cpp_type_0203` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：可选参（×3 属性） 的解析结果与性能。 |
| 2199 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0204` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：rest 参（×3 属性） 的解析结果与性能。 |
| 2200 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0205` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：联合参（×3 属性） 的解析结果与性能。 |
| 2201 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0206` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：泛型箭头（×3 属性） 的解析结果与性能。 |
| 2202 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0207` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：返回数组（×3 属性） 的解析结果与性能。 |
| 2203 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0208` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：返回联合（×3 属性） 的解析结果与性能。 |
| 2204 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0209` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：返回 Promise（×3 属性） 的解析结果与性能。 |
| 2205 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0210` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：返回函数（×3 属性） 的解析结果与性能。 |
| 2206 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0211` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：对象参（×3 属性） 的解析结果与性能。 |
| 2207 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0212` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：元组参（×3 属性） 的解析结果与性能。 |
| 2208 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0213` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：容器参（×3 属性） 的解析结果与性能。 |
| 2209 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0214` | 性能测试 | 2 | dts2cpp type 扩充-箭头属性：可空参（×3 属性） 的解析结果与性能。 |
| 2210 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0215` | 性能测试 | 2 | dts2cpp type 扩充-规模：5 成员 type 的解析结果与性能。 |
| 2211 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0216` | 性能测试 | 2 | dts2cpp type 扩充-规模：10 成员 type 的解析结果与性能。 |
| 2212 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0217` | 性能测试 | 2 | dts2cpp type 扩充-规模：15 成员 type 的解析结果与性能。 |
| 2213 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0218` | 性能测试 | 2 | dts2cpp type 扩充-规模：20 成员 type 的解析结果与性能。 |
| 2214 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0219` | 性能测试 | 2 | dts2cpp type 扩充-规模：25 成员 type 的解析结果与性能。 |
| 2215 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0220` | 性能测试 | 2 | dts2cpp type 扩充-规模：30 成员 type 的解析结果与性能。 |
| 2216 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0221` | 性能测试 | 2 | dts2cpp type 扩充-规模：35 成员 type 的解析结果与性能。 |
| 2217 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0222` | 性能测试 | 2 | dts2cpp type 扩充-规模：40 成员 type 的解析结果与性能。 |
| 2218 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0223` | 性能测试 | 2 | dts2cpp type 扩充-规模：45 成员 type 的解析结果与性能。 |
| 2219 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0224` | 性能测试 | 2 | dts2cpp type 扩充-规模：50 成员 type 的解析结果与性能。 |
| 2220 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0225` | 性能测试 | 2 | dts2cpp type 扩充-规模：55 成员 type 的解析结果与性能。 |
| 2221 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0226` | 性能测试 | 2 | dts2cpp type 扩充-规模：60 成员 type 的解析结果与性能。 |
| 2222 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0227` | 性能测试 | 2 | dts2cpp type 扩充-规模：65 成员 type 的解析结果与性能。 |
| 2223 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0228` | 性能测试 | 2 | dts2cpp type 扩充-规模：70 成员 type 的解析结果与性能。 |
| 2224 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0229` | 性能测试 | 2 | dts2cpp type 扩充-规模：75 成员 type 的解析结果与性能。 |
| 2225 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0230` | 性能测试 | 2 | dts2cpp type 扩充-规模：80 成员 type 的解析结果与性能。 |
| 2226 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0231` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 2 个 type 的解析结果与性能。 |
| 2227 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0232` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 3 个 type 的解析结果与性能。 |
| 2228 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0233` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 4 个 type 的解析结果与性能。 |
| 2229 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0234` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 5 个 type 的解析结果与性能。 |
| 2230 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0235` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 6 个 type 的解析结果与性能。 |
| 2231 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0236` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 7 个 type 的解析结果与性能。 |
| 2232 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0237` | 性能测试 | 2 | dts2cpp type 扩充-多声明：同文件 8 个 type 的解析结果与性能。 |
| 2233 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0238` | 性能测试 | 2 | dts2cpp type 扩充-命名：UpperCamel 的解析结果与性能。 |
| 2234 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0239` | 性能测试 | 2 | dts2cpp type 扩充-命名：lowerCamel 的解析结果与性能。 |
| 2235 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0240` | 性能测试 | 2 | dts2cpp type 扩充-命名：snake_case 的解析结果与性能。 |
| 2236 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0241` | 性能测试 | 2 | dts2cpp type 扩充-命名：Trailing2 的解析结果与性能。 |
| 2237 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0242` | 性能测试 | 2 | dts2cpp type 扩充-命名：_leading 的解析结果与性能。 |
| 2238 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0243` | 性能测试 | 2 | dts2cpp type 扩充-命名：Double__Under 的解析结果与性能。 |
| 2239 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0244` | 性能测试 | 2 | dts2cpp type 扩充-命名：T 的解析结果与性能。 |
| 2240 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0245` | 性能测试 | 2 | dts2cpp type 扩充-命名：T1 的解析结果与性能。 |
| 2241 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0246` | 性能测试 | 2 | dts2cpp type 扩充-命名：t1 的解析结果与性能。 |
| 2242 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0247` | 性能测试 | 2 | dts2cpp type 扩充-命名：Tp 的解析结果与性能。 |
| 2243 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0248` | 性能测试 | 2 | dts2cpp type 扩充-命名：type1 的解析结果与性能。 |
| 2244 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0249` | 性能测试 | 2 | dts2cpp type 扩充-命名：中文类型 的解析结果与性能。 |
| 2245 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0250` | 性能测试 | 2 | dts2cpp type 扩充-命名：VersionV2 的解析结果与性能。 |
| 2246 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0251` | 性能测试 | 2 | dts2cpp type 扩充-命名：HTTPClient 的解析结果与性能。 |
| 2247 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0252` | 性能测试 | 2 | dts2cpp type 扩充-命名：KLASS 的解析结果与性能。 |
| 2248 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0253` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉 Basic 的解析结果与性能。 |
| 2249 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0254` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉双对象 的解析结果与性能。 |
| 2250 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0255` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉三对象 的解析结果与性能。 |
| 2251 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0256` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉+字面量 的解析结果与性能。 |
| 2252 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0257` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉+函数类型 的解析结果与性能。 |
| 2253 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0258` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉引用别名 的解析结果与性能。 |
| 2254 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0259` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉自引用 的解析结果与性能。 |
| 2255 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0260` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉+泛型 的解析结果与性能。 |
| 2256 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0261` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉+模板 的解析结果与性能。 |
| 2257 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0262` | 性能测试 | 2 | dts2cpp type 扩充-交叉 RHS：交叉+联合 的解析结果与性能。 |
| 2258 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0263` | 性能测试 | 2 | dts2cpp type 扩充-泛型：单泛型 的解析结果与性能。 |
| 2259 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0264` | 性能测试 | 2 | dts2cpp type 扩充-泛型：双泛型 的解析结果与性能。 |
| 2260 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0265` | 性能测试 | 2 | dts2cpp type 扩充-泛型：三泛型 的解析结果与性能。 |
| 2261 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0266` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型数组 的解析结果与性能。 |
| 2262 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0267` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型容器 的解析结果与性能。 |
| 2263 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0268` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型方法 的解析结果与性能。 |
| 2264 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0269` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型约束 的解析结果与性能。 |
| 2265 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0270` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型箭头属性 的解析结果与性能。 |
| 2266 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0271` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型联合 的解析结果与性能。 |
| 2267 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0272` | 性能测试 | 2 | dts2cpp type 扩充-泛型：泛型嵌套 的解析结果与性能。 |
| 2268 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0273` | 性能测试 | 2 | dts2cpp type 扩充-边界：空 type 的解析结果与性能。 |
| 2269 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0274` | 性能测试 | 2 | dts2cpp type 扩充-边界：单行 type 的解析结果与性能。 |
| 2270 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0275` | 性能测试 | 2 | dts2cpp type 扩充-边界：注释 type 的解析结果与性能。 |
| 2271 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0276` | 性能测试 | 2 | dts2cpp type 扩充-边界：函数 RHS 的解析结果与性能。 |
| 2272 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0277` | 性能测试 | 2 | dts2cpp type 扩充-边界：联合 RHS 的解析结果与性能。 |
| 2273 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0278` | 性能测试 | 2 | dts2cpp type 扩充-边界：元组 RHS 的解析结果与性能。 |
| 2274 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0279` | 性能测试 | 2 | dts2cpp type 扩充-边界：中文 type 的解析结果与性能。 |
| 2275 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0280` | 性能测试 | 2 | dts2cpp type 扩充-边界：装饰器成员 的解析结果与性能。 |
| 2276 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0281` | 性能测试 | 2 | dts2cpp type 扩充-边界：方法重载 的解析结果与性能。 |
| 2277 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0282` | 性能测试 | 2 | dts2cpp type 扩充-边界：getter/setter 的解析结果与性能。 |
| 2278 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0283` | 性能测试 | 2 | dts2cpp type 扩充-边界：混合 的解析结果与性能。 |
| 2279 | `conversion_tstype.part05.test.ts` | `dts2cpp_type_0284` | 性能测试 | 2 | dts2cpp type 扩充-边界：索引签名 的解析结果与性能。 |
| 2280 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0285` | 性能测试 | 2 | dts2cpp type import-自定义文件：导入类型作 type 成员 的解析结果与性能。 |
| 2281 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0286` | 性能测试 | 2 | dts2cpp type import-自定义文件：导入回调类型成员/参数 的解析结果与性能。 |
| 2282 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0287` | 性能测试 | 2 | dts2cpp type import-自定义文件：导入类型作返回/参数 的解析结果与性能。 |
| 2283 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0288` | 性能测试 | 2 | dts2cpp type namespace-变量+类型：namespace 内变量 + type 的解析结果与性能。 |
| 2284 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0289` | 性能测试 | 2 | dts2cpp type namespace-变量+类型：export namespace 内变量 + type 的解析结果与性能。 |
| 2285 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0290` | 性能测试 | 2 | dts2cpp type import-自定义文件：交叉导入基类型 的解析结果与性能。 |
| 2286 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0291` | 性能测试 | 2 | dts2cpp type import + on/off 命名方法签名 type 的解析结果与性能。 |
| 2287 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0292` | 性能测试 | 2 | dts2cpp type 函数类型-on/off：type Emitter on/off/emit 的解析结果与性能。 |
| 2288 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0293` | 性能测试 | 2 | dts2cpp type 函数类型-threadsafe_func：type ThreadSafe 签名 的解析结果与性能。 |
| 2289 | `conversion_tstype.part06.test.ts` | `dts2cpp_type_0294` | 性能测试 | 2 | dts2cpp type namespace-变量+函数+类型：三合一混合 的解析结果与性能。 |
| 2290 | `conversion_cfunc.part01.test.ts` | `c_func_0001` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：int 入参×2 返回 int 的解析结果与性能。 |
| 2291 | `conversion_cfunc.part01.test.ts` | `c_func_0002` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：std::string 返回 的解析结果与性能。 |
| 2292 | `conversion_cfunc.part01.test.ts` | `c_func_0003` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：string 入参×2 返回 string 的解析结果与性能。 |
| 2293 | `conversion_cfunc.part01.test.ts` | `c_func_0004` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：char 返回 的解析结果与性能。 |
| 2294 | `conversion_cfunc.part01.test.ts` | `c_func_0005` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：long 入参/返回 的解析结果与性能。 |
| 2295 | `conversion_cfunc.part01.test.ts` | `c_func_0006` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：long long 入参×2/返回 的解析结果与性能。 |
| 2296 | `conversion_cfunc.part01.test.ts` | `c_func_0007` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：float 入参/返回 的解析结果与性能。 |
| 2297 | `conversion_cfunc.part01.test.ts` | `c_func_0008` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：double 入参/返回 的解析结果与性能。 |
| 2298 | `conversion_cfunc.part01.test.ts` | `c_func_0009` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：bool 入参/返回 的解析结果与性能。 |
| 2299 | `conversion_cfunc.part01.test.ts` | `c_func_0010` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：unsigned int 入参/返回 的解析结果与性能。 |
| 2300 | `conversion_cfunc.part01.test.ts` | `c_func_0011` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：short 入参/返回 的解析结果与性能。 |
| 2301 | `conversion_cfunc.part01.test.ts` | `c_func_0012` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：wchar_t 入参/返回 的解析结果与性能。 |
| 2302 | `conversion_cfunc.part01.test.ts` | `c_func_0013` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：signed char 入参/返回 的解析结果与性能。 |
| 2303 | `conversion_cfunc.part01.test.ts` | `c_func_0014` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：unsigned long long 入参/返回 的解析结果与性能。 |
| 2304 | `conversion_cfunc.part01.test.ts` | `c_func_0015` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：long double 入参/返回 的解析结果与性能。 |
| 2305 | `conversion_cfunc.part01.test.ts` | `c_func_0016` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：void 无参返回 的解析结果与性能。 |
| 2306 | `conversion_cfunc.part01.test.ts` | `c_func_0017` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：std::wstring 返回 的解析结果与性能。 |
| 2307 | `conversion_cfunc.part01.test.ts` | `c_func_0018` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：char16_t 返回 的解析结果与性能。 |
| 2308 | `conversion_cfunc.part01.test.ts` | `c_func_0019` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：char32_t 返回 的解析结果与性能。 |
| 2309 | `conversion_cfunc.part01.test.ts` | `c_func_0020` | 性能测试 | 3/4 | h2dts parseFunction：基础类型：size_t 返回 的解析结果与性能。 |
| 2310 | `conversion_cfunc.part01.test.ts` | `c_func_0021` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：int[10] 定长数组入参 的解析结果与性能。 |
| 2311 | `conversion_cfunc.part01.test.ts` | `c_func_0022` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::string[20] 入参 的解析结果与性能。 |
| 2312 | `conversion_cfunc.part01.test.ts` | `c_func_0023` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：char* 指针入参 的解析结果与性能。 |
| 2313 | `conversion_cfunc.part01.test.ts` | `c_func_0024` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：int* 指针入参 的解析结果与性能。 |
| 2314 | `conversion_cfunc.part01.test.ts` | `c_func_0025` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：double* 指针入参 的解析结果与性能。 |
| 2315 | `conversion_cfunc.part01.test.ts` | `c_func_0026` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::vector<int> 入参 的解析结果与性能。 |
| 2316 | `conversion_cfunc.part01.test.ts` | `c_func_0027` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::vector<std::string> 入参 的解析结果与性能。 |
| 2317 | `conversion_cfunc.part01.test.ts` | `c_func_0028` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::map 入参 的解析结果与性能。 |
| 2318 | `conversion_cfunc.part01.test.ts` | `c_func_0029` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::set<int> 入参 的解析结果与性能。 |
| 2319 | `conversion_cfunc.part01.test.ts` | `c_func_0030` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::list<double> 入参 的解析结果与性能。 |
| 2320 | `conversion_cfunc.part01.test.ts` | `c_func_0031` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::deque<bool> 入参 的解析结果与性能。 |
| 2321 | `conversion_cfunc.part01.test.ts` | `c_func_0032` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::pair 入参 的解析结果与性能。 |
| 2322 | `conversion_cfunc.part01.test.ts` | `c_func_0033` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::tuple 三元素入参 的解析结果与性能。 |
| 2323 | `conversion_cfunc.part01.test.ts` | `c_func_0034` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：int[10][20] 二维数组入参 的解析结果与性能。 |
| 2324 | `conversion_cfunc.part01.test.ts` | `c_func_0035` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：double[5][10][15] 三维数组入参 的解析结果与性能。 |
| 2325 | `conversion_cfunc.part01.test.ts` | `c_func_0036` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：float[16] 入参 的解析结果与性能。 |
| 2326 | `conversion_cfunc.part01.test.ts` | `c_func_0037` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：bool[8] 入参 的解析结果与性能。 |
| 2327 | `conversion_cfunc.part01.test.ts` | `c_func_0038` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：long[64] 入参 的解析结果与性能。 |
| 2328 | `conversion_cfunc.part01.test.ts` | `c_func_0039` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：iterator 迭代器入参 的解析结果与性能。 |
| 2329 | `conversion_cfunc.part01.test.ts` | `c_func_0040` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::function 入参 的解析结果与性能。 |
| 2330 | `conversion_cfunc.part01.test.ts` | `c_func_0041` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static int 返回 的解析结果与性能。 |
| 2331 | `conversion_cfunc.part01.test.ts` | `c_func_0042` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static 返回 std::string 的解析结果与性能。 |
| 2332 | `conversion_cfunc.part02.test.ts` | `c_func_0043` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static void 的解析结果与性能。 |
| 2333 | `conversion_cfunc.part02.test.ts` | `c_func_0044` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static 带参 的解析结果与性能。 |
| 2334 | `conversion_cfunc.part02.test.ts` | `c_func_0045` | 性能测试 | 3/4 | h2dts parseFunction：static 函数：static bool 返回 的解析结果与性能。 |
| 2335 | `conversion_cfunc.part02.test.ts` | `c_func_0046` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：const int 返回（const 剥离） 的解析结果与性能。 |
| 2336 | `conversion_cfunc.part02.test.ts` | `c_func_0047` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：static const 组合 的解析结果与性能。 |
| 2337 | `conversion_cfunc.part02.test.ts` | `c_func_0048` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：const 参数（剥离） 的解析结果与性能。 |
| 2338 | `conversion_cfunc.part02.test.ts` | `c_func_0049` | 性能测试 | 3/4 | h2dts parseFunction：const 修饰：const char* 参数 的解析结果与性能。 |
| 2339 | `conversion_cfunc.part02.test.ts` | `c_func_0050` | 性能测试 | 3/4 | h2dts parseFunction：多函数：同文件 3 条函数声明 的解析结果与性能。 |
| 2340 | `conversion_cfunc.part02.test.ts` | `c_func_0051` | 性能测试 | 3/4 | h2dts parseFunction：多参数：5 参 double 的解析结果与性能。 |
| 2341 | `conversion_cfunc.part02.test.ts` | `c_func_0052` | 性能测试 | 3/4 | h2dts parseFunction：多参数：5 参混合类型 的解析结果与性能。 |
| 2342 | `conversion_cfunc.part02.test.ts` | `c_func_0053` | 性能测试 | 3/4 | h2dts parseFunction：namespace：域内函数×2 的解析结果与性能。 |
| 2343 | `conversion_cfunc.part02.test.ts` | `c_func_0054` | 性能测试 | 3/4 | h2dts parseFunction：namespace：嵌套域内函数 的解析结果与性能。 |
| 2344 | `conversion_cfunc.part02.test.ts` | `c_func_0055` | 性能测试 | 3/4 | h2dts parseFunction：namespace：域内 static 函数 的解析结果与性能。 |
| 2345 | `conversion_cfunc.part02.test.ts` | `c_func_0056` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：int (*)(int,int) 的解析结果与性能。 |
| 2346 | `conversion_cfunc.part02.test.ts` | `c_func_0057` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：void (*)(string) 的解析结果与性能。 |
| 2347 | `conversion_cfunc.part02.test.ts` | `c_func_0058` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：double (*)(double) 的解析结果与性能。 |
| 2348 | `conversion_cfunc.part02.test.ts` | `c_func_0059` | 性能测试 | 3/4 | h2dts parseFunction：typedef 函数指针：bool (*)(int,double) 的解析结果与性能。 |
| 2349 | `conversion_cfunc.part02.test.ts` | `c_func_0060` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::queue<int> 入参 的解析结果与性能。 |
| 2350 | `conversion_cfunc.part02.test.ts` | `c_func_0061` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::stack 入参 的解析结果与性能。 |
| 2351 | `conversion_cfunc.part02.test.ts` | `c_func_0062` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::priority_queue 入参 的解析结果与性能。 |
| 2352 | `conversion_cfunc.part02.test.ts` | `c_func_0063` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::multimap 入参 的解析结果与性能。 |
| 2353 | `conversion_cfunc.part02.test.ts` | `c_func_0064` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::multiset 入参 的解析结果与性能。 |
| 2354 | `conversion_cfunc.part02.test.ts` | `c_func_0065` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::unordered_map 入参 的解析结果与性能。 |
| 2355 | `conversion_cfunc.part02.test.ts` | `c_func_0066` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::forward_list 入参 的解析结果与性能。 |
| 2356 | `conversion_cfunc.part02.test.ts` | `c_func_0067` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::valarray 入参 的解析结果与性能。 |
| 2357 | `conversion_cfunc.part02.test.ts` | `c_func_0068` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：std::complex 入参 的解析结果与性能。 |
| 2358 | `conversion_cfunc.part02.test.ts` | `c_func_0069` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：wchar_t* 指针入参 的解析结果与性能。 |
| 2359 | `conversion_cfunc.part02.test.ts` | `c_func_0070` | 性能测试 | 3/4 | h2dts parseFunction：数组类型：float[8][8] 二维入参 的解析结果与性能。 |
| 2360 | `conversion_cfunc.part02.test.ts` | `c_func_0071` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int8_t 的解析结果与性能。 |
| 2361 | `conversion_cfunc.part02.test.ts` | `c_func_0072` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int16_t 的解析结果与性能。 |
| 2362 | `conversion_cfunc.part02.test.ts` | `c_func_0073` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int32_t 的解析结果与性能。 |
| 2363 | `conversion_cfunc.part02.test.ts` | `c_func_0074` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：int64_t 的解析结果与性能。 |
| 2364 | `conversion_cfunc.part02.test.ts` | `c_func_0075` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint8_t 的解析结果与性能。 |
| 2365 | `conversion_cfunc.part02.test.ts` | `c_func_0076` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint16_t 的解析结果与性能。 |
| 2366 | `conversion_cfunc.part02.test.ts` | `c_func_0077` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint32_t 的解析结果与性能。 |
| 2367 | `conversion_cfunc.part02.test.ts` | `c_func_0078` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：uint64_t 的解析结果与性能。 |
| 2368 | `conversion_cfunc.part02.test.ts` | `c_func_0079` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：unsigned short 的解析结果与性能。 |
| 2369 | `conversion_cfunc.part02.test.ts` | `c_func_0080` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：unsigned char 的解析结果与性能。 |
| 2370 | `conversion_cfunc.part02.test.ts` | `c_func_0081` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：signed short 的解析结果与性能。 |
| 2371 | `conversion_cfunc.part02.test.ts` | `c_func_0082` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：signed long 的解析结果与性能。 |
| 2372 | `conversion_cfunc.part02.test.ts` | `c_func_0083` | 性能测试 | 3/4 | h2dts parseFunction：扩充-基础：unsigned long 的解析结果与性能。 |
| 2373 | `conversion_cfunc.part02.test.ts` | `c_func_0084` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：int& 左值引用 的解析结果与性能。 |
| 2374 | `conversion_cfunc.part03.test.ts` | `c_func_0085` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：std::string& 的解析结果与性能。 |
| 2375 | `conversion_cfunc.part03.test.ts` | `c_func_0086` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：const int& 的解析结果与性能。 |
| 2376 | `conversion_cfunc.part03.test.ts` | `c_func_0087` | 性能测试 | 3/4 | h2dts parseFunction：扩充-引用：double& 的解析结果与性能。 |
| 2377 | `conversion_cfunc.part03.test.ts` | `c_func_0088` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::array<int,10> 的解析结果与性能。 |
| 2378 | `conversion_cfunc.part03.test.ts` | `c_func_0089` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::array<string,5> 的解析结果与性能。 |
| 2379 | `conversion_cfunc.part03.test.ts` | `c_func_0090` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::unordered_set 的解析结果与性能。 |
| 2380 | `conversion_cfunc.part03.test.ts` | `c_func_0091` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::unordered_multimap 的解析结果与性能。 |
| 2381 | `conversion_cfunc.part03.test.ts` | `c_func_0092` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::unordered_multiset 的解析结果与性能。 |
| 2382 | `conversion_cfunc.part03.test.ts` | `c_func_0093` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回：char* 的解析结果与性能。 |
| 2383 | `conversion_cfunc.part03.test.ts` | `c_func_0094` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回：int* 的解析结果与性能。 |
| 2384 | `conversion_cfunc.part03.test.ts` | `c_func_0095` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回：std::string* 的解析结果与性能。 |
| 2385 | `conversion_cfunc.part03.test.ts` | `c_func_0096` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：char[256] 的解析结果与性能。 |
| 2386 | `conversion_cfunc.part03.test.ts` | `c_func_0097` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：unsigned char[16] 的解析结果与性能。 |
| 2387 | `conversion_cfunc.part03.test.ts` | `c_func_0098` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：int64_t[8] 的解析结果与性能。 |
| 2388 | `conversion_cfunc.part03.test.ts` | `c_func_0099` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组：std::string[10][5] 的解析结果与性能。 |
| 2389 | `conversion_cfunc.part03.test.ts` | `c_func_0100` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参混合 的解析结果与性能。 |
| 2390 | `conversion_cfunc.part03.test.ts` | `c_func_0101` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 int 的解析结果与性能。 |
| 2391 | `conversion_cfunc.part03.test.ts` | `c_func_0102` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：同名函数 3 组重载 的解析结果与性能。 |
| 2392 | `conversion_cfunc.part03.test.ts` | `c_func_0103` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：4 容器参数 的解析结果与性能。 |
| 2393 | `conversion_cfunc.part03.test.ts` | `c_func_0104` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：4 容器参数 B 的解析结果与性能。 |
| 2394 | `conversion_cfunc.part03.test.ts` | `c_func_0105` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器：std::function<void(string)> 的解析结果与性能。 |
| 2395 | `conversion_cfunc.part03.test.ts` | `c_func_0106` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回 int 的解析结果与性能。 |
| 2396 | `conversion_cfunc.part03.test.ts` | `c_func_0107` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回 bool 的解析结果与性能。 |
| 2397 | `conversion_cfunc.part03.test.ts` | `c_func_0108` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：带参 double 的解析结果与性能。 |
| 2398 | `conversion_cfunc.part03.test.ts` | `c_func_0109` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回容器 的解析结果与性能。 |
| 2399 | `conversion_cfunc.part03.test.ts` | `c_func_0110` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const：返回 const char* 的解析结果与性能。 |
| 2400 | `conversion_cfunc.part03.test.ts` | `c_func_0111` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const：const char* const 参数 的解析结果与性能。 |
| 2401 | `conversion_cfunc.part03.test.ts` | `c_func_0112` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const：const std::string& 参数 的解析结果与性能。 |
| 2402 | `conversion_cfunc.part03.test.ts` | `c_func_0113` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 5 个 的解析结果与性能。 |
| 2403 | `conversion_cfunc.part03.test.ts` | `c_func_0114` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 8 个 的解析结果与性能。 |
| 2404 | `conversion_cfunc.part03.test.ts` | `c_func_0115` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 10 个 的解析结果与性能。 |
| 2405 | `conversion_cfunc.part03.test.ts` | `c_func_0116` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef：返回 std::string 函数指针 的解析结果与性能。 |
| 2406 | `conversion_cfunc.part03.test.ts` | `c_func_0117` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef：double 二元函数指针 的解析结果与性能。 |
| 2407 | `conversion_cfunc.part03.test.ts` | `c_func_0118` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef：notify 函数指针 的解析结果与性能。 |
| 2408 | `conversion_cfunc.part03.test.ts` | `c_func_0119` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内 4 函数 的解析结果与性能。 |
| 2409 | `conversion_cfunc.part03.test.ts` | `c_func_0120` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：三层嵌套函数 的解析结果与性能。 |
| 2410 | `conversion_cfunc.part03.test.ts` | `c_func_0121` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：int = 1024 的解析结果与性能。 |
| 2411 | `conversion_cfunc.part03.test.ts` | `c_func_0122` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：string 默认值 的解析结果与性能。 |
| 2412 | `conversion_cfunc.part03.test.ts` | `c_func_0123` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：双默认值 的解析结果与性能。 |
| 2413 | `conversion_cfunc.part03.test.ts` | `c_func_0124` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参全类型混合 的解析结果与性能。 |
| 2414 | `conversion_cfunc.part03.test.ts` | `c_func_0125` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：容器+引用+基础混合 的解析结果与性能。 |
| 2415 | `conversion_cfunc.part04.test.ts` | `c_func_0126` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int 的解析结果与性能。 |
| 2416 | `conversion_cfunc.part04.test.ts` | `c_func_0127` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 char 的解析结果与性能。 |
| 2417 | `conversion_cfunc.part04.test.ts` | `c_func_0128` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 short 的解析结果与性能。 |
| 2418 | `conversion_cfunc.part04.test.ts` | `c_func_0129` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 long 的解析结果与性能。 |
| 2419 | `conversion_cfunc.part04.test.ts` | `c_func_0130` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 long long 的解析结果与性能。 |
| 2420 | `conversion_cfunc.part04.test.ts` | `c_func_0131` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 float 的解析结果与性能。 |
| 2421 | `conversion_cfunc.part04.test.ts` | `c_func_0132` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 double 的解析结果与性能。 |
| 2422 | `conversion_cfunc.part04.test.ts` | `c_func_0133` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 bool 的解析结果与性能。 |
| 2423 | `conversion_cfunc.part04.test.ts` | `c_func_0134` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned int 的解析结果与性能。 |
| 2424 | `conversion_cfunc.part04.test.ts` | `c_func_0135` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned char 的解析结果与性能。 |
| 2425 | `conversion_cfunc.part04.test.ts` | `c_func_0136` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned short 的解析结果与性能。 |
| 2426 | `conversion_cfunc.part04.test.ts` | `c_func_0137` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned long 的解析结果与性能。 |
| 2427 | `conversion_cfunc.part04.test.ts` | `c_func_0138` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 unsigned long long 的解析结果与性能。 |
| 2428 | `conversion_cfunc.part04.test.ts` | `c_func_0139` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 signed char 的解析结果与性能。 |
| 2429 | `conversion_cfunc.part04.test.ts` | `c_func_0140` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 signed short 的解析结果与性能。 |
| 2430 | `conversion_cfunc.part04.test.ts` | `c_func_0141` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 signed long 的解析结果与性能。 |
| 2431 | `conversion_cfunc.part04.test.ts` | `c_func_0142` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 wchar_t 的解析结果与性能。 |
| 2432 | `conversion_cfunc.part04.test.ts` | `c_func_0143` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 char16_t 的解析结果与性能。 |
| 2433 | `conversion_cfunc.part04.test.ts` | `c_func_0144` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 char32_t 的解析结果与性能。 |
| 2434 | `conversion_cfunc.part04.test.ts` | `c_func_0145` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 size_t 的解析结果与性能。 |
| 2435 | `conversion_cfunc.part04.test.ts` | `c_func_0146` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int8_t 的解析结果与性能。 |
| 2436 | `conversion_cfunc.part04.test.ts` | `c_func_0147` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int16_t 的解析结果与性能。 |
| 2437 | `conversion_cfunc.part04.test.ts` | `c_func_0148` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int32_t 的解析结果与性能。 |
| 2438 | `conversion_cfunc.part04.test.ts` | `c_func_0149` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 int64_t 的解析结果与性能。 |
| 2439 | `conversion_cfunc.part04.test.ts` | `c_func_0150` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint8_t 的解析结果与性能。 |
| 2440 | `conversion_cfunc.part04.test.ts` | `c_func_0151` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint16_t 的解析结果与性能。 |
| 2441 | `conversion_cfunc.part04.test.ts` | `c_func_0152` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint32_t 的解析结果与性能。 |
| 2442 | `conversion_cfunc.part04.test.ts` | `c_func_0153` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 uint64_t 的解析结果与性能。 |
| 2443 | `conversion_cfunc.part04.test.ts` | `c_func_0154` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::string 的解析结果与性能。 |
| 2444 | `conversion_cfunc.part04.test.ts` | `c_func_0155` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 string 的解析结果与性能。 |
| 2445 | `conversion_cfunc.part04.test.ts` | `c_func_0156` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::wstring 的解析结果与性能。 |
| 2446 | `conversion_cfunc.part04.test.ts` | `c_func_0157` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 long double 的解析结果与性能。 |
| 2447 | `conversion_cfunc.part04.test.ts` | `c_func_0158` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 void 的解析结果与性能。 |
| 2448 | `conversion_cfunc.part04.test.ts` | `c_func_0159` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<int> 的解析结果与性能。 |
| 2449 | `conversion_cfunc.part04.test.ts` | `c_func_0160` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<std::string> 的解析结果与性能。 |
| 2450 | `conversion_cfunc.part04.test.ts` | `c_func_0161` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<double> 的解析结果与性能。 |
| 2451 | `conversion_cfunc.part04.test.ts` | `c_func_0162` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::vector<bool> 的解析结果与性能。 |
| 2452 | `conversion_cfunc.part04.test.ts` | `c_func_0163` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::map<std::string,int> 的解析结果与性能。 |
| 2453 | `conversion_cfunc.part04.test.ts` | `c_func_0164` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::map<int,std::string> 的解析结果与性能。 |
| 2454 | `conversion_cfunc.part04.test.ts` | `c_func_0165` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::set<int> 的解析结果与性能。 |
| 2455 | `conversion_cfunc.part04.test.ts` | `c_func_0166` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::set<std::string> 的解析结果与性能。 |
| 2456 | `conversion_cfunc.part04.test.ts` | `c_func_0167` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::list<int> 的解析结果与性能。 |
| 2457 | `conversion_cfunc.part04.test.ts` | `c_func_0168` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::list<std::string> 的解析结果与性能。 |
| 2458 | `conversion_cfunc.part04.test.ts` | `c_func_0169` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::deque<int> 的解析结果与性能。 |
| 2459 | `conversion_cfunc.part04.test.ts` | `c_func_0170` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::deque<std::string> 的解析结果与性能。 |
| 2460 | `conversion_cfunc.part04.test.ts` | `c_func_0171` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::pair<int,int> 的解析结果与性能。 |
| 2461 | `conversion_cfunc.part04.test.ts` | `c_func_0172` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::pair<std::string,int> 的解析结果与性能。 |
| 2462 | `conversion_cfunc.part04.test.ts` | `c_func_0173` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::tuple<int,int,int> 的解析结果与性能。 |
| 2463 | `conversion_cfunc.part04.test.ts` | `c_func_0174` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::tuple<std::string,int,double> 的解析结果与性能。 |
| 2464 | `conversion_cfunc.part04.test.ts` | `c_func_0175` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::queue<int> 的解析结果与性能。 |
| 2465 | `conversion_cfunc.part04.test.ts` | `c_func_0176` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::stack<int> 的解析结果与性能。 |
| 2466 | `conversion_cfunc.part04.test.ts` | `c_func_0177` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::priority_queue<int> 的解析结果与性能。 |
| 2467 | `conversion_cfunc.part04.test.ts` | `c_func_0178` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::multimap<int,int> 的解析结果与性能。 |
| 2468 | `conversion_cfunc.part04.test.ts` | `c_func_0179` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::multiset<int> 的解析结果与性能。 |
| 2469 | `conversion_cfunc.part04.test.ts` | `c_func_0180` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_map<std::string,int> 的解析结果与性能。 |
| 2470 | `conversion_cfunc.part04.test.ts` | `c_func_0181` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_set<int> 的解析结果与性能。 |
| 2471 | `conversion_cfunc.part04.test.ts` | `c_func_0182` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_multimap<int,int> 的解析结果与性能。 |
| 2472 | `conversion_cfunc.part04.test.ts` | `c_func_0183` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::unordered_multiset<int> 的解析结果与性能。 |
| 2473 | `conversion_cfunc.part04.test.ts` | `c_func_0184` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::array<int,10> 的解析结果与性能。 |
| 2474 | `conversion_cfunc.part04.test.ts` | `c_func_0185` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::array<std::string,5> 的解析结果与性能。 |
| 2475 | `conversion_cfunc.part05.test.ts` | `c_func_0186` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::forward_list<int> 的解析结果与性能。 |
| 2476 | `conversion_cfunc.part05.test.ts` | `c_func_0187` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::valarray<double> 的解析结果与性能。 |
| 2477 | `conversion_cfunc.part05.test.ts` | `c_func_0188` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::complex<double> 的解析结果与性能。 |
| 2478 | `conversion_cfunc.part05.test.ts` | `c_func_0189` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::function<int(int,int)> 的解析结果与性能。 |
| 2479 | `conversion_cfunc.part05.test.ts` | `c_func_0190` | 性能测试 | 3/4 | h2dts parseFunction：扩充-返回矩阵：返回类型 std::function<void(std::string)> 的解析结果与性能。 |
| 2480 | `conversion_cfunc.part05.test.ts` | `c_func_0191` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int 的解析结果与性能。 |
| 2481 | `conversion_cfunc.part05.test.ts` | `c_func_0192` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：char 的解析结果与性能。 |
| 2482 | `conversion_cfunc.part05.test.ts` | `c_func_0193` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：short 的解析结果与性能。 |
| 2483 | `conversion_cfunc.part05.test.ts` | `c_func_0194` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：long 的解析结果与性能。 |
| 2484 | `conversion_cfunc.part05.test.ts` | `c_func_0195` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：long long 的解析结果与性能。 |
| 2485 | `conversion_cfunc.part05.test.ts` | `c_func_0196` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：float 的解析结果与性能。 |
| 2486 | `conversion_cfunc.part05.test.ts` | `c_func_0197` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：double 的解析结果与性能。 |
| 2487 | `conversion_cfunc.part05.test.ts` | `c_func_0198` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：bool 的解析结果与性能。 |
| 2488 | `conversion_cfunc.part05.test.ts` | `c_func_0199` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned int 的解析结果与性能。 |
| 2489 | `conversion_cfunc.part05.test.ts` | `c_func_0200` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned char 的解析结果与性能。 |
| 2490 | `conversion_cfunc.part05.test.ts` | `c_func_0201` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned short 的解析结果与性能。 |
| 2491 | `conversion_cfunc.part05.test.ts` | `c_func_0202` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned long 的解析结果与性能。 |
| 2492 | `conversion_cfunc.part05.test.ts` | `c_func_0203` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：unsigned long long 的解析结果与性能。 |
| 2493 | `conversion_cfunc.part05.test.ts` | `c_func_0204` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：signed char 的解析结果与性能。 |
| 2494 | `conversion_cfunc.part05.test.ts` | `c_func_0205` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：signed short 的解析结果与性能。 |
| 2495 | `conversion_cfunc.part05.test.ts` | `c_func_0206` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：signed long 的解析结果与性能。 |
| 2496 | `conversion_cfunc.part05.test.ts` | `c_func_0207` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：wchar_t 的解析结果与性能。 |
| 2497 | `conversion_cfunc.part05.test.ts` | `c_func_0208` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：char16_t 的解析结果与性能。 |
| 2498 | `conversion_cfunc.part05.test.ts` | `c_func_0209` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：char32_t 的解析结果与性能。 |
| 2499 | `conversion_cfunc.part05.test.ts` | `c_func_0210` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：size_t 的解析结果与性能。 |
| 2500 | `conversion_cfunc.part05.test.ts` | `c_func_0211` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int8_t 的解析结果与性能。 |
| 2501 | `conversion_cfunc.part05.test.ts` | `c_func_0212` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int16_t 的解析结果与性能。 |
| 2502 | `conversion_cfunc.part05.test.ts` | `c_func_0213` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int32_t 的解析结果与性能。 |
| 2503 | `conversion_cfunc.part05.test.ts` | `c_func_0214` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：int64_t 的解析结果与性能。 |
| 2504 | `conversion_cfunc.part05.test.ts` | `c_func_0215` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint8_t 的解析结果与性能。 |
| 2505 | `conversion_cfunc.part05.test.ts` | `c_func_0216` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint16_t 的解析结果与性能。 |
| 2506 | `conversion_cfunc.part05.test.ts` | `c_func_0217` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint32_t 的解析结果与性能。 |
| 2507 | `conversion_cfunc.part05.test.ts` | `c_func_0218` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：uint64_t 的解析结果与性能。 |
| 2508 | `conversion_cfunc.part05.test.ts` | `c_func_0219` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::string 的解析结果与性能。 |
| 2509 | `conversion_cfunc.part05.test.ts` | `c_func_0220` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：string 的解析结果与性能。 |
| 2510 | `conversion_cfunc.part05.test.ts` | `c_func_0221` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::wstring 的解析结果与性能。 |
| 2511 | `conversion_cfunc.part05.test.ts` | `c_func_0222` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：long double 的解析结果与性能。 |
| 2512 | `conversion_cfunc.part05.test.ts` | `c_func_0223` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<int> 的解析结果与性能。 |
| 2513 | `conversion_cfunc.part05.test.ts` | `c_func_0224` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<std::string> 的解析结果与性能。 |
| 2514 | `conversion_cfunc.part05.test.ts` | `c_func_0225` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<double> 的解析结果与性能。 |
| 2515 | `conversion_cfunc.part05.test.ts` | `c_func_0226` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::vector<bool> 的解析结果与性能。 |
| 2516 | `conversion_cfunc.part05.test.ts` | `c_func_0227` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::map<std::string,int> 的解析结果与性能。 |
| 2517 | `conversion_cfunc.part05.test.ts` | `c_func_0228` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::map<int,std::string> 的解析结果与性能。 |
| 2518 | `conversion_cfunc.part05.test.ts` | `c_func_0229` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::set<int> 的解析结果与性能。 |
| 2519 | `conversion_cfunc.part05.test.ts` | `c_func_0230` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::set<std::string> 的解析结果与性能。 |
| 2520 | `conversion_cfunc.part05.test.ts` | `c_func_0231` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::list<int> 的解析结果与性能。 |
| 2521 | `conversion_cfunc.part05.test.ts` | `c_func_0232` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::list<std::string> 的解析结果与性能。 |
| 2522 | `conversion_cfunc.part05.test.ts` | `c_func_0233` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::deque<int> 的解析结果与性能。 |
| 2523 | `conversion_cfunc.part05.test.ts` | `c_func_0234` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::deque<std::string> 的解析结果与性能。 |
| 2524 | `conversion_cfunc.part05.test.ts` | `c_func_0235` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::pair<int,int> 的解析结果与性能。 |
| 2525 | `conversion_cfunc.part05.test.ts` | `c_func_0236` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::pair<std::string,int> 的解析结果与性能。 |
| 2526 | `conversion_cfunc.part05.test.ts` | `c_func_0237` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::tuple<int,int,int> 的解析结果与性能。 |
| 2527 | `conversion_cfunc.part05.test.ts` | `c_func_0238` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::tuple<std::string,int,double> 的解析结果与性能。 |
| 2528 | `conversion_cfunc.part05.test.ts` | `c_func_0239` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::queue<int> 的解析结果与性能。 |
| 2529 | `conversion_cfunc.part05.test.ts` | `c_func_0240` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::stack<int> 的解析结果与性能。 |
| 2530 | `conversion_cfunc.part05.test.ts` | `c_func_0241` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::priority_queue<int> 的解析结果与性能。 |
| 2531 | `conversion_cfunc.part05.test.ts` | `c_func_0242` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::multimap<int,int> 的解析结果与性能。 |
| 2532 | `conversion_cfunc.part06.test.ts` | `c_func_0243` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::multiset<int> 的解析结果与性能。 |
| 2533 | `conversion_cfunc.part06.test.ts` | `c_func_0244` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_map<std::string,int> 的解析结果与性能。 |
| 2534 | `conversion_cfunc.part06.test.ts` | `c_func_0245` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_set<int> 的解析结果与性能。 |
| 2535 | `conversion_cfunc.part06.test.ts` | `c_func_0246` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_multimap<int,int> 的解析结果与性能。 |
| 2536 | `conversion_cfunc.part06.test.ts` | `c_func_0247` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::unordered_multiset<int> 的解析结果与性能。 |
| 2537 | `conversion_cfunc.part06.test.ts` | `c_func_0248` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::array<int,10> 的解析结果与性能。 |
| 2538 | `conversion_cfunc.part06.test.ts` | `c_func_0249` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::array<std::string,5> 的解析结果与性能。 |
| 2539 | `conversion_cfunc.part06.test.ts` | `c_func_0250` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参+返回：std::forward_list<int> 的解析结果与性能。 |
| 2540 | `conversion_cfunc.part06.test.ts` | `c_func_0251` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int 的解析结果与性能。 |
| 2541 | `conversion_cfunc.part06.test.ts` | `c_func_0252` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：char 的解析结果与性能。 |
| 2542 | `conversion_cfunc.part06.test.ts` | `c_func_0253` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：short 的解析结果与性能。 |
| 2543 | `conversion_cfunc.part06.test.ts` | `c_func_0254` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：long 的解析结果与性能。 |
| 2544 | `conversion_cfunc.part06.test.ts` | `c_func_0255` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：long long 的解析结果与性能。 |
| 2545 | `conversion_cfunc.part06.test.ts` | `c_func_0256` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：float 的解析结果与性能。 |
| 2546 | `conversion_cfunc.part06.test.ts` | `c_func_0257` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：double 的解析结果与性能。 |
| 2547 | `conversion_cfunc.part06.test.ts` | `c_func_0258` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：bool 的解析结果与性能。 |
| 2548 | `conversion_cfunc.part06.test.ts` | `c_func_0259` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned int 的解析结果与性能。 |
| 2549 | `conversion_cfunc.part06.test.ts` | `c_func_0260` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned char 的解析结果与性能。 |
| 2550 | `conversion_cfunc.part06.test.ts` | `c_func_0261` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned short 的解析结果与性能。 |
| 2551 | `conversion_cfunc.part06.test.ts` | `c_func_0262` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned long 的解析结果与性能。 |
| 2552 | `conversion_cfunc.part06.test.ts` | `c_func_0263` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：unsigned long long 的解析结果与性能。 |
| 2553 | `conversion_cfunc.part06.test.ts` | `c_func_0264` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：signed char 的解析结果与性能。 |
| 2554 | `conversion_cfunc.part06.test.ts` | `c_func_0265` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：signed short 的解析结果与性能。 |
| 2555 | `conversion_cfunc.part06.test.ts` | `c_func_0266` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：signed long 的解析结果与性能。 |
| 2556 | `conversion_cfunc.part06.test.ts` | `c_func_0267` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：wchar_t 的解析结果与性能。 |
| 2557 | `conversion_cfunc.part06.test.ts` | `c_func_0268` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：char16_t 的解析结果与性能。 |
| 2558 | `conversion_cfunc.part06.test.ts` | `c_func_0269` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：char32_t 的解析结果与性能。 |
| 2559 | `conversion_cfunc.part06.test.ts` | `c_func_0270` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：size_t 的解析结果与性能。 |
| 2560 | `conversion_cfunc.part06.test.ts` | `c_func_0271` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int8_t 的解析结果与性能。 |
| 2561 | `conversion_cfunc.part06.test.ts` | `c_func_0272` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int16_t 的解析结果与性能。 |
| 2562 | `conversion_cfunc.part06.test.ts` | `c_func_0273` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int32_t 的解析结果与性能。 |
| 2563 | `conversion_cfunc.part06.test.ts` | `c_func_0274` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：int64_t 的解析结果与性能。 |
| 2564 | `conversion_cfunc.part06.test.ts` | `c_func_0275` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint8_t 的解析结果与性能。 |
| 2565 | `conversion_cfunc.part06.test.ts` | `c_func_0276` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint16_t 的解析结果与性能。 |
| 2566 | `conversion_cfunc.part06.test.ts` | `c_func_0277` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint32_t 的解析结果与性能。 |
| 2567 | `conversion_cfunc.part06.test.ts` | `c_func_0278` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：uint64_t 的解析结果与性能。 |
| 2568 | `conversion_cfunc.part06.test.ts` | `c_func_0279` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::string 的解析结果与性能。 |
| 2569 | `conversion_cfunc.part06.test.ts` | `c_func_0280` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：string 的解析结果与性能。 |
| 2570 | `conversion_cfunc.part06.test.ts` | `c_func_0281` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::wstring 的解析结果与性能。 |
| 2571 | `conversion_cfunc.part06.test.ts` | `c_func_0282` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：long double 的解析结果与性能。 |
| 2572 | `conversion_cfunc.part06.test.ts` | `c_func_0283` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<int> 的解析结果与性能。 |
| 2573 | `conversion_cfunc.part06.test.ts` | `c_func_0284` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<std::string> 的解析结果与性能。 |
| 2574 | `conversion_cfunc.part06.test.ts` | `c_func_0285` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<double> 的解析结果与性能。 |
| 2575 | `conversion_cfunc.part06.test.ts` | `c_func_0286` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::vector<bool> 的解析结果与性能。 |
| 2576 | `conversion_cfunc.part06.test.ts` | `c_func_0287` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::map<std::string,int> 的解析结果与性能。 |
| 2577 | `conversion_cfunc.part06.test.ts` | `c_func_0288` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::map<int,std::string> 的解析结果与性能。 |
| 2578 | `conversion_cfunc.part06.test.ts` | `c_func_0289` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::set<int> 的解析结果与性能。 |
| 2579 | `conversion_cfunc.part06.test.ts` | `c_func_0290` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::set<std::string> 的解析结果与性能。 |
| 2580 | `conversion_cfunc.part06.test.ts` | `c_func_0291` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::list<int> 的解析结果与性能。 |
| 2581 | `conversion_cfunc.part06.test.ts` | `c_func_0292` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::list<std::string> 的解析结果与性能。 |
| 2582 | `conversion_cfunc.part06.test.ts` | `c_func_0293` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::deque<int> 的解析结果与性能。 |
| 2583 | `conversion_cfunc.part06.test.ts` | `c_func_0294` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::deque<std::string> 的解析结果与性能。 |
| 2584 | `conversion_cfunc.part06.test.ts` | `c_func_0295` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::pair<int,int> 的解析结果与性能。 |
| 2585 | `conversion_cfunc.part06.test.ts` | `c_func_0296` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::pair<std::string,int> 的解析结果与性能。 |
| 2586 | `conversion_cfunc.part06.test.ts` | `c_func_0297` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::tuple<int,int,int> 的解析结果与性能。 |
| 2587 | `conversion_cfunc.part06.test.ts` | `c_func_0298` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::tuple<std::string,int,double> 的解析结果与性能。 |
| 2588 | `conversion_cfunc.part06.test.ts` | `c_func_0299` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::queue<int> 的解析结果与性能。 |
| 2589 | `conversion_cfunc.part07.test.ts` | `c_func_0300` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::stack<int> 的解析结果与性能。 |
| 2590 | `conversion_cfunc.part07.test.ts` | `c_func_0301` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::priority_queue<int> 的解析结果与性能。 |
| 2591 | `conversion_cfunc.part07.test.ts` | `c_func_0302` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::multimap<int,int> 的解析结果与性能。 |
| 2592 | `conversion_cfunc.part07.test.ts` | `c_func_0303` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::multiset<int> 的解析结果与性能。 |
| 2593 | `conversion_cfunc.part07.test.ts` | `c_func_0304` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_map<std::string,int> 的解析结果与性能。 |
| 2594 | `conversion_cfunc.part07.test.ts` | `c_func_0305` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_set<int> 的解析结果与性能。 |
| 2595 | `conversion_cfunc.part07.test.ts` | `c_func_0306` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_multimap<int,int> 的解析结果与性能。 |
| 2596 | `conversion_cfunc.part07.test.ts` | `c_func_0307` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::unordered_multiset<int> 的解析结果与性能。 |
| 2597 | `conversion_cfunc.part07.test.ts` | `c_func_0308` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::array<int,10> 的解析结果与性能。 |
| 2598 | `conversion_cfunc.part07.test.ts` | `c_func_0309` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::array<std::string,5> 的解析结果与性能。 |
| 2599 | `conversion_cfunc.part07.test.ts` | `c_func_0310` | 性能测试 | 3/4 | h2dts parseFunction：扩充-入参矩阵：std::forward_list<int> 的解析结果与性能。 |
| 2600 | `conversion_cfunc.part07.test.ts` | `c_func_0311` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, char) 的解析结果与性能。 |
| 2601 | `conversion_cfunc.part07.test.ts` | `c_func_0312` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, short) 的解析结果与性能。 |
| 2602 | `conversion_cfunc.part07.test.ts` | `c_func_0313` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, long) 的解析结果与性能。 |
| 2603 | `conversion_cfunc.part07.test.ts` | `c_func_0314` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, long long) 的解析结果与性能。 |
| 2604 | `conversion_cfunc.part07.test.ts` | `c_func_0315` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, float) 的解析结果与性能。 |
| 2605 | `conversion_cfunc.part07.test.ts` | `c_func_0316` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int, double) 的解析结果与性能。 |
| 2606 | `conversion_cfunc.part07.test.ts` | `c_func_0317` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, short) 的解析结果与性能。 |
| 2607 | `conversion_cfunc.part07.test.ts` | `c_func_0318` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, long) 的解析结果与性能。 |
| 2608 | `conversion_cfunc.part07.test.ts` | `c_func_0319` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, long long) 的解析结果与性能。 |
| 2609 | `conversion_cfunc.part07.test.ts` | `c_func_0320` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, float) 的解析结果与性能。 |
| 2610 | `conversion_cfunc.part07.test.ts` | `c_func_0321` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, double) 的解析结果与性能。 |
| 2611 | `conversion_cfunc.part07.test.ts` | `c_func_0322` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char, bool) 的解析结果与性能。 |
| 2612 | `conversion_cfunc.part07.test.ts` | `c_func_0323` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, long) 的解析结果与性能。 |
| 2613 | `conversion_cfunc.part07.test.ts` | `c_func_0324` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, long long) 的解析结果与性能。 |
| 2614 | `conversion_cfunc.part07.test.ts` | `c_func_0325` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, float) 的解析结果与性能。 |
| 2615 | `conversion_cfunc.part07.test.ts` | `c_func_0326` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, double) 的解析结果与性能。 |
| 2616 | `conversion_cfunc.part07.test.ts` | `c_func_0327` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, bool) 的解析结果与性能。 |
| 2617 | `conversion_cfunc.part07.test.ts` | `c_func_0328` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(short, unsigned int) 的解析结果与性能。 |
| 2618 | `conversion_cfunc.part07.test.ts` | `c_func_0329` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, long long) 的解析结果与性能。 |
| 2619 | `conversion_cfunc.part07.test.ts` | `c_func_0330` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, float) 的解析结果与性能。 |
| 2620 | `conversion_cfunc.part07.test.ts` | `c_func_0331` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, double) 的解析结果与性能。 |
| 2621 | `conversion_cfunc.part07.test.ts` | `c_func_0332` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, bool) 的解析结果与性能。 |
| 2622 | `conversion_cfunc.part07.test.ts` | `c_func_0333` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, unsigned int) 的解析结果与性能。 |
| 2623 | `conversion_cfunc.part07.test.ts` | `c_func_0334` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long, unsigned char) 的解析结果与性能。 |
| 2624 | `conversion_cfunc.part07.test.ts` | `c_func_0335` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, float) 的解析结果与性能。 |
| 2625 | `conversion_cfunc.part07.test.ts` | `c_func_0336` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, double) 的解析结果与性能。 |
| 2626 | `conversion_cfunc.part07.test.ts` | `c_func_0337` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, bool) 的解析结果与性能。 |
| 2627 | `conversion_cfunc.part07.test.ts` | `c_func_0338` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, unsigned int) 的解析结果与性能。 |
| 2628 | `conversion_cfunc.part07.test.ts` | `c_func_0339` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, unsigned char) 的解析结果与性能。 |
| 2629 | `conversion_cfunc.part07.test.ts` | `c_func_0340` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(long long, unsigned short) 的解析结果与性能。 |
| 2630 | `conversion_cfunc.part07.test.ts` | `c_func_0341` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, double) 的解析结果与性能。 |
| 2631 | `conversion_cfunc.part07.test.ts` | `c_func_0342` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, bool) 的解析结果与性能。 |
| 2632 | `conversion_cfunc.part07.test.ts` | `c_func_0343` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned int) 的解析结果与性能。 |
| 2633 | `conversion_cfunc.part07.test.ts` | `c_func_0344` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned char) 的解析结果与性能。 |
| 2634 | `conversion_cfunc.part07.test.ts` | `c_func_0345` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned short) 的解析结果与性能。 |
| 2635 | `conversion_cfunc.part07.test.ts` | `c_func_0346` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(float, unsigned long) 的解析结果与性能。 |
| 2636 | `conversion_cfunc.part07.test.ts` | `c_func_0347` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, bool) 的解析结果与性能。 |
| 2637 | `conversion_cfunc.part07.test.ts` | `c_func_0348` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned int) 的解析结果与性能。 |
| 2638 | `conversion_cfunc.part07.test.ts` | `c_func_0349` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned char) 的解析结果与性能。 |
| 2639 | `conversion_cfunc.part07.test.ts` | `c_func_0350` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned short) 的解析结果与性能。 |
| 2640 | `conversion_cfunc.part07.test.ts` | `c_func_0351` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned long) 的解析结果与性能。 |
| 2641 | `conversion_cfunc.part07.test.ts` | `c_func_0352` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(double, unsigned long long) 的解析结果与性能。 |
| 2642 | `conversion_cfunc.part07.test.ts` | `c_func_0353` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned int) 的解析结果与性能。 |
| 2643 | `conversion_cfunc.part08.test.ts` | `c_func_0354` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned char) 的解析结果与性能。 |
| 2644 | `conversion_cfunc.part08.test.ts` | `c_func_0355` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned short) 的解析结果与性能。 |
| 2645 | `conversion_cfunc.part08.test.ts` | `c_func_0356` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned long) 的解析结果与性能。 |
| 2646 | `conversion_cfunc.part08.test.ts` | `c_func_0357` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, unsigned long long) 的解析结果与性能。 |
| 2647 | `conversion_cfunc.part08.test.ts` | `c_func_0358` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(bool, signed char) 的解析结果与性能。 |
| 2648 | `conversion_cfunc.part08.test.ts` | `c_func_0359` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned char) 的解析结果与性能。 |
| 2649 | `conversion_cfunc.part08.test.ts` | `c_func_0360` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned short) 的解析结果与性能。 |
| 2650 | `conversion_cfunc.part08.test.ts` | `c_func_0361` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned long) 的解析结果与性能。 |
| 2651 | `conversion_cfunc.part08.test.ts` | `c_func_0362` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, unsigned long long) 的解析结果与性能。 |
| 2652 | `conversion_cfunc.part08.test.ts` | `c_func_0363` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, signed char) 的解析结果与性能。 |
| 2653 | `conversion_cfunc.part08.test.ts` | `c_func_0364` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned int, signed short) 的解析结果与性能。 |
| 2654 | `conversion_cfunc.part08.test.ts` | `c_func_0365` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned short) 的解析结果与性能。 |
| 2655 | `conversion_cfunc.part08.test.ts` | `c_func_0366` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned long) 的解析结果与性能。 |
| 2656 | `conversion_cfunc.part08.test.ts` | `c_func_0367` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, unsigned long long) 的解析结果与性能。 |
| 2657 | `conversion_cfunc.part08.test.ts` | `c_func_0368` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, signed char) 的解析结果与性能。 |
| 2658 | `conversion_cfunc.part08.test.ts` | `c_func_0369` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, signed short) 的解析结果与性能。 |
| 2659 | `conversion_cfunc.part08.test.ts` | `c_func_0370` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned char, signed long) 的解析结果与性能。 |
| 2660 | `conversion_cfunc.part08.test.ts` | `c_func_0371` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, unsigned long) 的解析结果与性能。 |
| 2661 | `conversion_cfunc.part08.test.ts` | `c_func_0372` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, unsigned long long) 的解析结果与性能。 |
| 2662 | `conversion_cfunc.part08.test.ts` | `c_func_0373` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, signed char) 的解析结果与性能。 |
| 2663 | `conversion_cfunc.part08.test.ts` | `c_func_0374` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, signed short) 的解析结果与性能。 |
| 2664 | `conversion_cfunc.part08.test.ts` | `c_func_0375` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, signed long) 的解析结果与性能。 |
| 2665 | `conversion_cfunc.part08.test.ts` | `c_func_0376` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned short, wchar_t) 的解析结果与性能。 |
| 2666 | `conversion_cfunc.part08.test.ts` | `c_func_0377` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, unsigned long long) 的解析结果与性能。 |
| 2667 | `conversion_cfunc.part08.test.ts` | `c_func_0378` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, signed char) 的解析结果与性能。 |
| 2668 | `conversion_cfunc.part08.test.ts` | `c_func_0379` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, signed short) 的解析结果与性能。 |
| 2669 | `conversion_cfunc.part08.test.ts` | `c_func_0380` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, signed long) 的解析结果与性能。 |
| 2670 | `conversion_cfunc.part08.test.ts` | `c_func_0381` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, wchar_t) 的解析结果与性能。 |
| 2671 | `conversion_cfunc.part08.test.ts` | `c_func_0382` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long, char16_t) 的解析结果与性能。 |
| 2672 | `conversion_cfunc.part08.test.ts` | `c_func_0383` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, signed char) 的解析结果与性能。 |
| 2673 | `conversion_cfunc.part08.test.ts` | `c_func_0384` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, signed short) 的解析结果与性能。 |
| 2674 | `conversion_cfunc.part08.test.ts` | `c_func_0385` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, signed long) 的解析结果与性能。 |
| 2675 | `conversion_cfunc.part08.test.ts` | `c_func_0386` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, wchar_t) 的解析结果与性能。 |
| 2676 | `conversion_cfunc.part08.test.ts` | `c_func_0387` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, char16_t) 的解析结果与性能。 |
| 2677 | `conversion_cfunc.part08.test.ts` | `c_func_0388` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(unsigned long long, char32_t) 的解析结果与性能。 |
| 2678 | `conversion_cfunc.part08.test.ts` | `c_func_0389` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, signed short) 的解析结果与性能。 |
| 2679 | `conversion_cfunc.part08.test.ts` | `c_func_0390` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, signed long) 的解析结果与性能。 |
| 2680 | `conversion_cfunc.part08.test.ts` | `c_func_0391` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, wchar_t) 的解析结果与性能。 |
| 2681 | `conversion_cfunc.part08.test.ts` | `c_func_0392` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, char16_t) 的解析结果与性能。 |
| 2682 | `conversion_cfunc.part08.test.ts` | `c_func_0393` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, char32_t) 的解析结果与性能。 |
| 2683 | `conversion_cfunc.part08.test.ts` | `c_func_0394` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed char, size_t) 的解析结果与性能。 |
| 2684 | `conversion_cfunc.part08.test.ts` | `c_func_0395` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, signed long) 的解析结果与性能。 |
| 2685 | `conversion_cfunc.part08.test.ts` | `c_func_0396` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, wchar_t) 的解析结果与性能。 |
| 2686 | `conversion_cfunc.part08.test.ts` | `c_func_0397` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, char16_t) 的解析结果与性能。 |
| 2687 | `conversion_cfunc.part08.test.ts` | `c_func_0398` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, char32_t) 的解析结果与性能。 |
| 2688 | `conversion_cfunc.part08.test.ts` | `c_func_0399` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, size_t) 的解析结果与性能。 |
| 2689 | `conversion_cfunc.part08.test.ts` | `c_func_0400` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed short, int8_t) 的解析结果与性能。 |
| 2690 | `conversion_cfunc.part08.test.ts` | `c_func_0401` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, wchar_t) 的解析结果与性能。 |
| 2691 | `conversion_cfunc.part08.test.ts` | `c_func_0402` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, char16_t) 的解析结果与性能。 |
| 2692 | `conversion_cfunc.part08.test.ts` | `c_func_0403` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, char32_t) 的解析结果与性能。 |
| 2693 | `conversion_cfunc.part08.test.ts` | `c_func_0404` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, size_t) 的解析结果与性能。 |
| 2694 | `conversion_cfunc.part08.test.ts` | `c_func_0405` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, int8_t) 的解析结果与性能。 |
| 2695 | `conversion_cfunc.part08.test.ts` | `c_func_0406` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(signed long, int16_t) 的解析结果与性能。 |
| 2696 | `conversion_cfunc.part09.test.ts` | `c_func_0407` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, char16_t) 的解析结果与性能。 |
| 2697 | `conversion_cfunc.part09.test.ts` | `c_func_0408` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, char32_t) 的解析结果与性能。 |
| 2698 | `conversion_cfunc.part09.test.ts` | `c_func_0409` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, size_t) 的解析结果与性能。 |
| 2699 | `conversion_cfunc.part09.test.ts` | `c_func_0410` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, int8_t) 的解析结果与性能。 |
| 2700 | `conversion_cfunc.part09.test.ts` | `c_func_0411` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, int16_t) 的解析结果与性能。 |
| 2701 | `conversion_cfunc.part09.test.ts` | `c_func_0412` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(wchar_t, int32_t) 的解析结果与性能。 |
| 2702 | `conversion_cfunc.part09.test.ts` | `c_func_0413` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, char32_t) 的解析结果与性能。 |
| 2703 | `conversion_cfunc.part09.test.ts` | `c_func_0414` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, size_t) 的解析结果与性能。 |
| 2704 | `conversion_cfunc.part09.test.ts` | `c_func_0415` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int8_t) 的解析结果与性能。 |
| 2705 | `conversion_cfunc.part09.test.ts` | `c_func_0416` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int16_t) 的解析结果与性能。 |
| 2706 | `conversion_cfunc.part09.test.ts` | `c_func_0417` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int32_t) 的解析结果与性能。 |
| 2707 | `conversion_cfunc.part09.test.ts` | `c_func_0418` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char16_t, int64_t) 的解析结果与性能。 |
| 2708 | `conversion_cfunc.part09.test.ts` | `c_func_0419` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, size_t) 的解析结果与性能。 |
| 2709 | `conversion_cfunc.part09.test.ts` | `c_func_0420` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int8_t) 的解析结果与性能。 |
| 2710 | `conversion_cfunc.part09.test.ts` | `c_func_0421` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int16_t) 的解析结果与性能。 |
| 2711 | `conversion_cfunc.part09.test.ts` | `c_func_0422` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int32_t) 的解析结果与性能。 |
| 2712 | `conversion_cfunc.part09.test.ts` | `c_func_0423` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, int64_t) 的解析结果与性能。 |
| 2713 | `conversion_cfunc.part09.test.ts` | `c_func_0424` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(char32_t, uint8_t) 的解析结果与性能。 |
| 2714 | `conversion_cfunc.part09.test.ts` | `c_func_0425` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int8_t) 的解析结果与性能。 |
| 2715 | `conversion_cfunc.part09.test.ts` | `c_func_0426` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int16_t) 的解析结果与性能。 |
| 2716 | `conversion_cfunc.part09.test.ts` | `c_func_0427` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int32_t) 的解析结果与性能。 |
| 2717 | `conversion_cfunc.part09.test.ts` | `c_func_0428` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, int64_t) 的解析结果与性能。 |
| 2718 | `conversion_cfunc.part09.test.ts` | `c_func_0429` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, uint8_t) 的解析结果与性能。 |
| 2719 | `conversion_cfunc.part09.test.ts` | `c_func_0430` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(size_t, uint16_t) 的解析结果与性能。 |
| 2720 | `conversion_cfunc.part09.test.ts` | `c_func_0431` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, int16_t) 的解析结果与性能。 |
| 2721 | `conversion_cfunc.part09.test.ts` | `c_func_0432` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, int32_t) 的解析结果与性能。 |
| 2722 | `conversion_cfunc.part09.test.ts` | `c_func_0433` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, int64_t) 的解析结果与性能。 |
| 2723 | `conversion_cfunc.part09.test.ts` | `c_func_0434` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, uint8_t) 的解析结果与性能。 |
| 2724 | `conversion_cfunc.part09.test.ts` | `c_func_0435` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, uint16_t) 的解析结果与性能。 |
| 2725 | `conversion_cfunc.part09.test.ts` | `c_func_0436` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int8_t, uint32_t) 的解析结果与性能。 |
| 2726 | `conversion_cfunc.part09.test.ts` | `c_func_0437` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, int32_t) 的解析结果与性能。 |
| 2727 | `conversion_cfunc.part09.test.ts` | `c_func_0438` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, int64_t) 的解析结果与性能。 |
| 2728 | `conversion_cfunc.part09.test.ts` | `c_func_0439` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint8_t) 的解析结果与性能。 |
| 2729 | `conversion_cfunc.part09.test.ts` | `c_func_0440` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint16_t) 的解析结果与性能。 |
| 2730 | `conversion_cfunc.part09.test.ts` | `c_func_0441` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint32_t) 的解析结果与性能。 |
| 2731 | `conversion_cfunc.part09.test.ts` | `c_func_0442` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int16_t, uint64_t) 的解析结果与性能。 |
| 2732 | `conversion_cfunc.part09.test.ts` | `c_func_0443` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, int64_t) 的解析结果与性能。 |
| 2733 | `conversion_cfunc.part09.test.ts` | `c_func_0444` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint8_t) 的解析结果与性能。 |
| 2734 | `conversion_cfunc.part09.test.ts` | `c_func_0445` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint16_t) 的解析结果与性能。 |
| 2735 | `conversion_cfunc.part09.test.ts` | `c_func_0446` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint32_t) 的解析结果与性能。 |
| 2736 | `conversion_cfunc.part09.test.ts` | `c_func_0447` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, uint64_t) 的解析结果与性能。 |
| 2737 | `conversion_cfunc.part09.test.ts` | `c_func_0448` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int32_t, std::string) 的解析结果与性能。 |
| 2738 | `conversion_cfunc.part09.test.ts` | `c_func_0449` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint8_t) 的解析结果与性能。 |
| 2739 | `conversion_cfunc.part09.test.ts` | `c_func_0450` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint16_t) 的解析结果与性能。 |
| 2740 | `conversion_cfunc.part09.test.ts` | `c_func_0451` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint32_t) 的解析结果与性能。 |
| 2741 | `conversion_cfunc.part09.test.ts` | `c_func_0452` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, uint64_t) 的解析结果与性能。 |
| 2742 | `conversion_cfunc.part09.test.ts` | `c_func_0453` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, std::string) 的解析结果与性能。 |
| 2743 | `conversion_cfunc.part09.test.ts` | `c_func_0454` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(int64_t, string) 的解析结果与性能。 |
| 2744 | `conversion_cfunc.part09.test.ts` | `c_func_0455` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, uint16_t) 的解析结果与性能。 |
| 2745 | `conversion_cfunc.part09.test.ts` | `c_func_0456` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, uint32_t) 的解析结果与性能。 |
| 2746 | `conversion_cfunc.part09.test.ts` | `c_func_0457` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, uint64_t) 的解析结果与性能。 |
| 2747 | `conversion_cfunc.part09.test.ts` | `c_func_0458` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, std::string) 的解析结果与性能。 |
| 2748 | `conversion_cfunc.part09.test.ts` | `c_func_0459` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, string) 的解析结果与性能。 |
| 2749 | `conversion_cfunc.part10.test.ts` | `c_func_0460` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint8_t, int) 的解析结果与性能。 |
| 2750 | `conversion_cfunc.part10.test.ts` | `c_func_0461` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, uint32_t) 的解析结果与性能。 |
| 2751 | `conversion_cfunc.part10.test.ts` | `c_func_0462` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, uint64_t) 的解析结果与性能。 |
| 2752 | `conversion_cfunc.part10.test.ts` | `c_func_0463` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, std::string) 的解析结果与性能。 |
| 2753 | `conversion_cfunc.part10.test.ts` | `c_func_0464` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, string) 的解析结果与性能。 |
| 2754 | `conversion_cfunc.part10.test.ts` | `c_func_0465` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, int) 的解析结果与性能。 |
| 2755 | `conversion_cfunc.part10.test.ts` | `c_func_0466` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint16_t, char) 的解析结果与性能。 |
| 2756 | `conversion_cfunc.part10.test.ts` | `c_func_0467` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, uint64_t) 的解析结果与性能。 |
| 2757 | `conversion_cfunc.part10.test.ts` | `c_func_0468` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, std::string) 的解析结果与性能。 |
| 2758 | `conversion_cfunc.part10.test.ts` | `c_func_0469` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, string) 的解析结果与性能。 |
| 2759 | `conversion_cfunc.part10.test.ts` | `c_func_0470` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, int) 的解析结果与性能。 |
| 2760 | `conversion_cfunc.part10.test.ts` | `c_func_0471` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, char) 的解析结果与性能。 |
| 2761 | `conversion_cfunc.part10.test.ts` | `c_func_0472` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint32_t, short) 的解析结果与性能。 |
| 2762 | `conversion_cfunc.part10.test.ts` | `c_func_0473` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, std::string) 的解析结果与性能。 |
| 2763 | `conversion_cfunc.part10.test.ts` | `c_func_0474` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, string) 的解析结果与性能。 |
| 2764 | `conversion_cfunc.part10.test.ts` | `c_func_0475` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, int) 的解析结果与性能。 |
| 2765 | `conversion_cfunc.part10.test.ts` | `c_func_0476` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, char) 的解析结果与性能。 |
| 2766 | `conversion_cfunc.part10.test.ts` | `c_func_0477` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, short) 的解析结果与性能。 |
| 2767 | `conversion_cfunc.part10.test.ts` | `c_func_0478` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(uint64_t, long) 的解析结果与性能。 |
| 2768 | `conversion_cfunc.part10.test.ts` | `c_func_0479` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, string) 的解析结果与性能。 |
| 2769 | `conversion_cfunc.part10.test.ts` | `c_func_0480` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, int) 的解析结果与性能。 |
| 2770 | `conversion_cfunc.part10.test.ts` | `c_func_0481` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, char) 的解析结果与性能。 |
| 2771 | `conversion_cfunc.part10.test.ts` | `c_func_0482` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, short) 的解析结果与性能。 |
| 2772 | `conversion_cfunc.part10.test.ts` | `c_func_0483` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, long) 的解析结果与性能。 |
| 2773 | `conversion_cfunc.part10.test.ts` | `c_func_0484` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(std::string, long long) 的解析结果与性能。 |
| 2774 | `conversion_cfunc.part10.test.ts` | `c_func_0485` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, int) 的解析结果与性能。 |
| 2775 | `conversion_cfunc.part10.test.ts` | `c_func_0486` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, char) 的解析结果与性能。 |
| 2776 | `conversion_cfunc.part10.test.ts` | `c_func_0487` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, short) 的解析结果与性能。 |
| 2777 | `conversion_cfunc.part10.test.ts` | `c_func_0488` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, long) 的解析结果与性能。 |
| 2778 | `conversion_cfunc.part10.test.ts` | `c_func_0489` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, long long) 的解析结果与性能。 |
| 2779 | `conversion_cfunc.part10.test.ts` | `c_func_0490` | 性能测试 | 3/4 | h2dts parseFunction：扩充-双参组合：(string, float) 的解析结果与性能。 |
| 2780 | `conversion_cfunc.part10.test.ts` | `c_func_0491` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(int, char, short) 的解析结果与性能。 |
| 2781 | `conversion_cfunc.part10.test.ts` | `c_func_0492` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(int, long, long long) 的解析结果与性能。 |
| 2782 | `conversion_cfunc.part10.test.ts` | `c_func_0493` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char, short, long) 的解析结果与性能。 |
| 2783 | `conversion_cfunc.part10.test.ts` | `c_func_0494` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char, long long, float) 的解析结果与性能。 |
| 2784 | `conversion_cfunc.part10.test.ts` | `c_func_0495` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(short, long, long long) 的解析结果与性能。 |
| 2785 | `conversion_cfunc.part10.test.ts` | `c_func_0496` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(short, float, double) 的解析结果与性能。 |
| 2786 | `conversion_cfunc.part10.test.ts` | `c_func_0497` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long, long long, float) 的解析结果与性能。 |
| 2787 | `conversion_cfunc.part10.test.ts` | `c_func_0498` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long, double, bool) 的解析结果与性能。 |
| 2788 | `conversion_cfunc.part10.test.ts` | `c_func_0499` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long long, float, double) 的解析结果与性能。 |
| 2789 | `conversion_cfunc.part10.test.ts` | `c_func_0500` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(long long, bool, unsigned int) 的解析结果与性能。 |
| 2790 | `conversion_cfunc.part10.test.ts` | `c_func_0501` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(float, double, bool) 的解析结果与性能。 |
| 2791 | `conversion_cfunc.part10.test.ts` | `c_func_0502` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(float, unsigned int, unsigned char) 的解析结果与性能。 |
| 2792 | `conversion_cfunc.part10.test.ts` | `c_func_0503` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(double, bool, unsigned int) 的解析结果与性能。 |
| 2793 | `conversion_cfunc.part10.test.ts` | `c_func_0504` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(double, unsigned char, unsigned short) 的解析结果与性能。 |
| 2794 | `conversion_cfunc.part10.test.ts` | `c_func_0505` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(bool, unsigned int, unsigned char) 的解析结果与性能。 |
| 2795 | `conversion_cfunc.part10.test.ts` | `c_func_0506` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(bool, unsigned short, unsigned long) 的解析结果与性能。 |
| 2796 | `conversion_cfunc.part10.test.ts` | `c_func_0507` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned int, unsigned char, unsigned short) 的解析结果与性能。 |
| 2797 | `conversion_cfunc.part10.test.ts` | `c_func_0508` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned int, unsigned long, unsigned long long) 的解析结果与性能。 |
| 2798 | `conversion_cfunc.part10.test.ts` | `c_func_0509` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned char, unsigned short, unsigned long) 的解析结果与性能。 |
| 2799 | `conversion_cfunc.part10.test.ts` | `c_func_0510` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned char, unsigned long long, signed char) 的解析结果与性能。 |
| 2800 | `conversion_cfunc.part10.test.ts` | `c_func_0511` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned short, unsigned long, unsigned long long) 的解析结果与性能。 |
| 2801 | `conversion_cfunc.part11.test.ts` | `c_func_0512` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned short, signed char, signed short) 的解析结果与性能。 |
| 2802 | `conversion_cfunc.part11.test.ts` | `c_func_0513` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long, unsigned long long, signed char) 的解析结果与性能。 |
| 2803 | `conversion_cfunc.part11.test.ts` | `c_func_0514` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long, signed short, signed long) 的解析结果与性能。 |
| 2804 | `conversion_cfunc.part11.test.ts` | `c_func_0515` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long long, signed char, signed short) 的解析结果与性能。 |
| 2805 | `conversion_cfunc.part11.test.ts` | `c_func_0516` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(unsigned long long, signed long, wchar_t) 的解析结果与性能。 |
| 2806 | `conversion_cfunc.part11.test.ts` | `c_func_0517` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed char, signed short, signed long) 的解析结果与性能。 |
| 2807 | `conversion_cfunc.part11.test.ts` | `c_func_0518` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed char, wchar_t, char16_t) 的解析结果与性能。 |
| 2808 | `conversion_cfunc.part11.test.ts` | `c_func_0519` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed short, signed long, wchar_t) 的解析结果与性能。 |
| 2809 | `conversion_cfunc.part11.test.ts` | `c_func_0520` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed short, char16_t, char32_t) 的解析结果与性能。 |
| 2810 | `conversion_cfunc.part11.test.ts` | `c_func_0521` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed long, wchar_t, char16_t) 的解析结果与性能。 |
| 2811 | `conversion_cfunc.part11.test.ts` | `c_func_0522` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(signed long, char32_t, size_t) 的解析结果与性能。 |
| 2812 | `conversion_cfunc.part11.test.ts` | `c_func_0523` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(wchar_t, char16_t, char32_t) 的解析结果与性能。 |
| 2813 | `conversion_cfunc.part11.test.ts` | `c_func_0524` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(wchar_t, size_t, int) 的解析结果与性能。 |
| 2814 | `conversion_cfunc.part11.test.ts` | `c_func_0525` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char16_t, char32_t, size_t) 的解析结果与性能。 |
| 2815 | `conversion_cfunc.part11.test.ts` | `c_func_0526` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char16_t, int, char) 的解析结果与性能。 |
| 2816 | `conversion_cfunc.part11.test.ts` | `c_func_0527` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char32_t, size_t, int) 的解析结果与性能。 |
| 2817 | `conversion_cfunc.part11.test.ts` | `c_func_0528` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(char32_t, char, short) 的解析结果与性能。 |
| 2818 | `conversion_cfunc.part11.test.ts` | `c_func_0529` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(size_t, int, char) 的解析结果与性能。 |
| 2819 | `conversion_cfunc.part11.test.ts` | `c_func_0530` | 性能测试 | 3/4 | h2dts parseFunction：扩充-三参组合：(size_t, short, long) 的解析结果与性能。 |
| 2820 | `conversion_cfunc.part11.test.ts` | `c_func_0531` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(int, short, long long, double) 的解析结果与性能。 |
| 2821 | `conversion_cfunc.part11.test.ts` | `c_func_0532` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(char, long, float, bool) 的解析结果与性能。 |
| 2822 | `conversion_cfunc.part11.test.ts` | `c_func_0533` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(short, long long, double, unsigned int) 的解析结果与性能。 |
| 2823 | `conversion_cfunc.part11.test.ts` | `c_func_0534` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(long, float, bool, unsigned char) 的解析结果与性能。 |
| 2824 | `conversion_cfunc.part11.test.ts` | `c_func_0535` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(long long, double, unsigned int, unsigned short) 的解析结果与性能。 |
| 2825 | `conversion_cfunc.part11.test.ts` | `c_func_0536` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(float, bool, unsigned char, unsigned long) 的解析结果与性能。 |
| 2826 | `conversion_cfunc.part11.test.ts` | `c_func_0537` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(double, unsigned int, unsigned short, unsigned long long) 的解析结果与性能。 |
| 2827 | `conversion_cfunc.part11.test.ts` | `c_func_0538` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(bool, unsigned char, unsigned long, signed char) 的解析结果与性能。 |
| 2828 | `conversion_cfunc.part11.test.ts` | `c_func_0539` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned int, unsigned short, unsigned long long, signed short) 的解析结果与性能。 |
| 2829 | `conversion_cfunc.part11.test.ts` | `c_func_0540` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned char, unsigned long, signed char, signed long) 的解析结果与性能。 |
| 2830 | `conversion_cfunc.part11.test.ts` | `c_func_0541` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned short, unsigned long long, signed short, wchar_t) 的解析结果与性能。 |
| 2831 | `conversion_cfunc.part11.test.ts` | `c_func_0542` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned long, signed char, signed long, char16_t) 的解析结果与性能。 |
| 2832 | `conversion_cfunc.part11.test.ts` | `c_func_0543` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(unsigned long long, signed short, wchar_t, char32_t) 的解析结果与性能。 |
| 2833 | `conversion_cfunc.part11.test.ts` | `c_func_0544` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(signed char, signed long, char16_t, size_t) 的解析结果与性能。 |
| 2834 | `conversion_cfunc.part11.test.ts` | `c_func_0545` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(signed short, wchar_t, char32_t, int) 的解析结果与性能。 |
| 2835 | `conversion_cfunc.part11.test.ts` | `c_func_0546` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(signed long, char16_t, size_t, char) 的解析结果与性能。 |
| 2836 | `conversion_cfunc.part11.test.ts` | `c_func_0547` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(wchar_t, char32_t, int, short) 的解析结果与性能。 |
| 2837 | `conversion_cfunc.part11.test.ts` | `c_func_0548` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(char16_t, size_t, char, long) 的解析结果与性能。 |
| 2838 | `conversion_cfunc.part11.test.ts` | `c_func_0549` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(char32_t, int, short, long long) 的解析结果与性能。 |
| 2839 | `conversion_cfunc.part11.test.ts` | `c_func_0550` | 性能测试 | 3/4 | h2dts parseFunction：扩充-四参组合：(size_t, char, long, float) 的解析结果与性能。 |
| 2840 | `conversion_cfunc.part11.test.ts` | `c_func_0551` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：int + long + double + unsigned char + unsigned long long 的解析结果与性能。 |
| 2841 | `conversion_cfunc.part11.test.ts` | `c_func_0552` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：char + long long + bool + unsigned short + signed char 的解析结果与性能。 |
| 2842 | `conversion_cfunc.part11.test.ts` | `c_func_0553` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：short + float + unsigned int + unsigned long + signed short 的解析结果与性能。 |
| 2843 | `conversion_cfunc.part11.test.ts` | `c_func_0554` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：long + double + unsigned char + unsigned long long + signed long 的解析结果与性能。 |
| 2844 | `conversion_cfunc.part11.test.ts` | `c_func_0555` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：long long + bool + unsigned short + signed char + wchar_t 的解析结果与性能。 |
| 2845 | `conversion_cfunc.part11.test.ts` | `c_func_0556` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：float + unsigned int + unsigned long + signed short + char16_t 的解析结果与性能。 |
| 2846 | `conversion_cfunc.part11.test.ts` | `c_func_0557` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：double + unsigned char + unsigned long long + signed long + char32_t 的解析结果与性能。 |
| 2847 | `conversion_cfunc.part11.test.ts` | `c_func_0558` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：bool + unsigned short + signed char + wchar_t + size_t 的解析结果与性能。 |
| 2848 | `conversion_cfunc.part11.test.ts` | `c_func_0559` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned int + unsigned long + signed short + char16_t + int 的解析结果与性能。 |
| 2849 | `conversion_cfunc.part12.test.ts` | `c_func_0560` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned char + unsigned long long + signed long + char32_t + char 的解析结果与性能。 |
| 2850 | `conversion_cfunc.part12.test.ts` | `c_func_0561` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned short + signed char + wchar_t + size_t + short 的解析结果与性能。 |
| 2851 | `conversion_cfunc.part12.test.ts` | `c_func_0562` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned long + signed short + char16_t + int + long 的解析结果与性能。 |
| 2852 | `conversion_cfunc.part12.test.ts` | `c_func_0563` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：unsigned long long + signed long + char32_t + char + long long 的解析结果与性能。 |
| 2853 | `conversion_cfunc.part12.test.ts` | `c_func_0564` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：signed char + wchar_t + size_t + short + float 的解析结果与性能。 |
| 2854 | `conversion_cfunc.part12.test.ts` | `c_func_0565` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：signed short + char16_t + int + long + double 的解析结果与性能。 |
| 2855 | `conversion_cfunc.part12.test.ts` | `c_func_0566` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：signed long + char32_t + char + long long + bool 的解析结果与性能。 |
| 2856 | `conversion_cfunc.part12.test.ts` | `c_func_0567` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：wchar_t + size_t + short + float + unsigned int 的解析结果与性能。 |
| 2857 | `conversion_cfunc.part12.test.ts` | `c_func_0568` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：char16_t + int + long + double + unsigned char 的解析结果与性能。 |
| 2858 | `conversion_cfunc.part12.test.ts` | `c_func_0569` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：char32_t + char + long long + bool + unsigned short 的解析结果与性能。 |
| 2859 | `conversion_cfunc.part12.test.ts` | `c_func_0570` | 性能测试 | 3/4 | h2dts parseFunction：扩充-五参组合：size_t + short + float + unsigned int + unsigned long 的解析结果与性能。 |
| 2860 | `conversion_cfunc.part12.test.ts` | `c_func_0571` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：int[4] 的解析结果与性能。 |
| 2861 | `conversion_cfunc.part12.test.ts` | `c_func_0572` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char[8] 的解析结果与性能。 |
| 2862 | `conversion_cfunc.part12.test.ts` | `c_func_0573` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：short[10] 的解析结果与性能。 |
| 2863 | `conversion_cfunc.part12.test.ts` | `c_func_0574` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：long[16] 的解析结果与性能。 |
| 2864 | `conversion_cfunc.part12.test.ts` | `c_func_0575` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：long long[20] 的解析结果与性能。 |
| 2865 | `conversion_cfunc.part12.test.ts` | `c_func_0576` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：float[32] 的解析结果与性能。 |
| 2866 | `conversion_cfunc.part12.test.ts` | `c_func_0577` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：double[64] 的解析结果与性能。 |
| 2867 | `conversion_cfunc.part12.test.ts` | `c_func_0578` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：bool[100] 的解析结果与性能。 |
| 2868 | `conversion_cfunc.part12.test.ts` | `c_func_0579` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned int[128] 的解析结果与性能。 |
| 2869 | `conversion_cfunc.part12.test.ts` | `c_func_0580` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned char[256] 的解析结果与性能。 |
| 2870 | `conversion_cfunc.part12.test.ts` | `c_func_0581` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned short[4] 的解析结果与性能。 |
| 2871 | `conversion_cfunc.part12.test.ts` | `c_func_0582` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned long[8] 的解析结果与性能。 |
| 2872 | `conversion_cfunc.part12.test.ts` | `c_func_0583` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned long long[10] 的解析结果与性能。 |
| 2873 | `conversion_cfunc.part12.test.ts` | `c_func_0584` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：signed char[16] 的解析结果与性能。 |
| 2874 | `conversion_cfunc.part12.test.ts` | `c_func_0585` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：signed short[20] 的解析结果与性能。 |
| 2875 | `conversion_cfunc.part12.test.ts` | `c_func_0586` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：signed long[32] 的解析结果与性能。 |
| 2876 | `conversion_cfunc.part12.test.ts` | `c_func_0587` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：wchar_t[64] 的解析结果与性能。 |
| 2877 | `conversion_cfunc.part12.test.ts` | `c_func_0588` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char16_t[100] 的解析结果与性能。 |
| 2878 | `conversion_cfunc.part12.test.ts` | `c_func_0589` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char32_t[128] 的解析结果与性能。 |
| 2879 | `conversion_cfunc.part12.test.ts` | `c_func_0590` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：size_t[256] 的解析结果与性能。 |
| 2880 | `conversion_cfunc.part12.test.ts` | `c_func_0591` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：int[4] 的解析结果与性能。 |
| 2881 | `conversion_cfunc.part12.test.ts` | `c_func_0592` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：char[8] 的解析结果与性能。 |
| 2882 | `conversion_cfunc.part12.test.ts` | `c_func_0593` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：short[10] 的解析结果与性能。 |
| 2883 | `conversion_cfunc.part12.test.ts` | `c_func_0594` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：long[16] 的解析结果与性能。 |
| 2884 | `conversion_cfunc.part12.test.ts` | `c_func_0595` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：long long[20] 的解析结果与性能。 |
| 2885 | `conversion_cfunc.part12.test.ts` | `c_func_0596` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：float[32] 的解析结果与性能。 |
| 2886 | `conversion_cfunc.part12.test.ts` | `c_func_0597` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：double[64] 的解析结果与性能。 |
| 2887 | `conversion_cfunc.part12.test.ts` | `c_func_0598` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：bool[100] 的解析结果与性能。 |
| 2888 | `conversion_cfunc.part12.test.ts` | `c_func_0599` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned int[128] 的解析结果与性能。 |
| 2889 | `conversion_cfunc.part12.test.ts` | `c_func_0600` | 性能测试 | 3/4 | h2dts parseFunction：扩充-数组入参：unsigned char[256] 的解析结果与性能。 |
| 2890 | `conversion_cfunc.part12.test.ts` | `c_func_0601` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：char* 的解析结果与性能。 |
| 2891 | `conversion_cfunc.part12.test.ts` | `c_func_0602` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：int* 的解析结果与性能。 |
| 2892 | `conversion_cfunc.part12.test.ts` | `c_func_0603` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：double* 的解析结果与性能。 |
| 2893 | `conversion_cfunc.part12.test.ts` | `c_func_0604` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：float* 的解析结果与性能。 |
| 2894 | `conversion_cfunc.part12.test.ts` | `c_func_0605` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：long* 的解析结果与性能。 |
| 2895 | `conversion_cfunc.part12.test.ts` | `c_func_0606` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：short* 的解析结果与性能。 |
| 2896 | `conversion_cfunc.part12.test.ts` | `c_func_0607` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：bool* 的解析结果与性能。 |
| 2897 | `conversion_cfunc.part12.test.ts` | `c_func_0608` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：wchar_t* 的解析结果与性能。 |
| 2898 | `conversion_cfunc.part12.test.ts` | `c_func_0609` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：std::string* 的解析结果与性能。 |
| 2899 | `conversion_cfunc.part12.test.ts` | `c_func_0610` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：void* 的解析结果与性能。 |
| 2900 | `conversion_cfunc.part12.test.ts` | `c_func_0611` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：unsigned int* 的解析结果与性能。 |
| 2901 | `conversion_cfunc.part13.test.ts` | `c_func_0612` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：size_t* 的解析结果与性能。 |
| 2902 | `conversion_cfunc.part13.test.ts` | `c_func_0613` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：int64_t* 的解析结果与性能。 |
| 2903 | `conversion_cfunc.part13.test.ts` | `c_func_0614` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：uint8_t* 的解析结果与性能。 |
| 2904 | `conversion_cfunc.part13.test.ts` | `c_func_0615` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：long long* 的解析结果与性能。 |
| 2905 | `conversion_cfunc.part13.test.ts` | `c_func_0616` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：long double* 的解析结果与性能。 |
| 2906 | `conversion_cfunc.part13.test.ts` | `c_func_0617` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：std::vector<int>* 的解析结果与性能。 |
| 2907 | `conversion_cfunc.part13.test.ts` | `c_func_0618` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：std::map<std::string,int>* 的解析结果与性能。 |
| 2908 | `conversion_cfunc.part13.test.ts` | `c_func_0619` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：char** 的解析结果与性能。 |
| 2909 | `conversion_cfunc.part13.test.ts` | `c_func_0620` | 性能测试 | 3/4 | h2dts parseFunction：扩充-指针入参：int** 的解析结果与性能。 |
| 2910 | `conversion_cfunc.part13.test.ts` | `c_func_0621` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::vector<int>, std::map<int,std::string>) 的解析结果与性能。 |
| 2911 | `conversion_cfunc.part13.test.ts` | `c_func_0622` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::vector<std::string>, std::set<int>) 的解析结果与性能。 |
| 2912 | `conversion_cfunc.part13.test.ts` | `c_func_0623` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::vector<double>, std::set<std::string>) 的解析结果与性能。 |
| 2913 | `conversion_cfunc.part13.test.ts` | `c_func_0624` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::vector<bool>, std::list<int>) 的解析结果与性能。 |
| 2914 | `conversion_cfunc.part13.test.ts` | `c_func_0625` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::map<std::string,int>, std::list<std::string>) 的解析结果与性能。 |
| 2915 | `conversion_cfunc.part13.test.ts` | `c_func_0626` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::map<int,std::string>, std::deque<int>) 的解析结果与性能。 |
| 2916 | `conversion_cfunc.part13.test.ts` | `c_func_0627` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::set<int>, std::deque<std::string>) 的解析结果与性能。 |
| 2917 | `conversion_cfunc.part13.test.ts` | `c_func_0628` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::set<std::string>, std::pair<int,int>) 的解析结果与性能。 |
| 2918 | `conversion_cfunc.part13.test.ts` | `c_func_0629` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::list<int>, std::pair<std::string,int>) 的解析结果与性能。 |
| 2919 | `conversion_cfunc.part13.test.ts` | `c_func_0630` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::list<std::string>, std::tuple<int,int,int>) 的解析结果与性能。 |
| 2920 | `conversion_cfunc.part13.test.ts` | `c_func_0631` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::deque<int>, std::tuple<std::string,int,double>) 的解析结果与性能。 |
| 2921 | `conversion_cfunc.part13.test.ts` | `c_func_0632` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::deque<std::string>, std::queue<int>) 的解析结果与性能。 |
| 2922 | `conversion_cfunc.part13.test.ts` | `c_func_0633` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::pair<int,int>, std::stack<int>) 的解析结果与性能。 |
| 2923 | `conversion_cfunc.part13.test.ts` | `c_func_0634` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::pair<std::string,int>, std::priority_queue<int>) 的解析结果与性能。 |
| 2924 | `conversion_cfunc.part13.test.ts` | `c_func_0635` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::tuple<int,int,int>, std::multimap<int,int>) 的解析结果与性能。 |
| 2925 | `conversion_cfunc.part13.test.ts` | `c_func_0636` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::tuple<std::string,int,double>, std::multiset<int>) 的解析结果与性能。 |
| 2926 | `conversion_cfunc.part13.test.ts` | `c_func_0637` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::queue<int>, std::unordered_map<std::string,int>) 的解析结果与性能。 |
| 2927 | `conversion_cfunc.part13.test.ts` | `c_func_0638` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::stack<int>, std::unordered_set<int>) 的解析结果与性能。 |
| 2928 | `conversion_cfunc.part13.test.ts` | `c_func_0639` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::priority_queue<int>, std::unordered_multimap<int,int>) 的解析结果与性能。 |
| 2929 | `conversion_cfunc.part13.test.ts` | `c_func_0640` | 性能测试 | 3/4 | h2dts parseFunction：扩充-容器组合：(std::multimap<int,int>, std::unordered_multiset<int>) 的解析结果与性能。 |
| 2930 | `conversion_cfunc.part13.test.ts` | `c_func_0641` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 int 的解析结果与性能。 |
| 2931 | `conversion_cfunc.part13.test.ts` | `c_func_0642` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 char 的解析结果与性能。 |
| 2932 | `conversion_cfunc.part13.test.ts` | `c_func_0643` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 short 的解析结果与性能。 |
| 2933 | `conversion_cfunc.part13.test.ts` | `c_func_0644` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 long 的解析结果与性能。 |
| 2934 | `conversion_cfunc.part13.test.ts` | `c_func_0645` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 long long 的解析结果与性能。 |
| 2935 | `conversion_cfunc.part13.test.ts` | `c_func_0646` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 float 的解析结果与性能。 |
| 2936 | `conversion_cfunc.part13.test.ts` | `c_func_0647` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 double 的解析结果与性能。 |
| 2937 | `conversion_cfunc.part13.test.ts` | `c_func_0648` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 bool 的解析结果与性能。 |
| 2938 | `conversion_cfunc.part13.test.ts` | `c_func_0649` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 unsigned int 的解析结果与性能。 |
| 2939 | `conversion_cfunc.part13.test.ts` | `c_func_0650` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 unsigned char 的解析结果与性能。 |
| 2940 | `conversion_cfunc.part13.test.ts` | `c_func_0651` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 unsigned short 的解析结果与性能。 |
| 2941 | `conversion_cfunc.part13.test.ts` | `c_func_0652` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 unsigned long 的解析结果与性能。 |
| 2942 | `conversion_cfunc.part13.test.ts` | `c_func_0653` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 unsigned long long 的解析结果与性能。 |
| 2943 | `conversion_cfunc.part13.test.ts` | `c_func_0654` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 signed char 的解析结果与性能。 |
| 2944 | `conversion_cfunc.part13.test.ts` | `c_func_0655` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 signed short 的解析结果与性能。 |
| 2945 | `conversion_cfunc.part13.test.ts` | `c_func_0656` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 signed long 的解析结果与性能。 |
| 2946 | `conversion_cfunc.part13.test.ts` | `c_func_0657` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 wchar_t 的解析结果与性能。 |
| 2947 | `conversion_cfunc.part13.test.ts` | `c_func_0658` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 char16_t 的解析结果与性能。 |
| 2948 | `conversion_cfunc.part13.test.ts` | `c_func_0659` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 char32_t 的解析结果与性能。 |
| 2949 | `conversion_cfunc.part13.test.ts` | `c_func_0660` | 性能测试 | 3/4 | h2dts parseFunction：扩充-static：返回/入参 size_t 的解析结果与性能。 |
| 2950 | `conversion_cfunc.part13.test.ts` | `c_func_0661` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const int 的解析结果与性能。 |
| 2951 | `conversion_cfunc.part13.test.ts` | `c_func_0662` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const double 的解析结果与性能。 |
| 2952 | `conversion_cfunc.part13.test.ts` | `c_func_0663` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const std::string& 的解析结果与性能。 |
| 2953 | `conversion_cfunc.part13.test.ts` | `c_func_0664` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const char* 的解析结果与性能。 |
| 2954 | `conversion_cfunc.part13.test.ts` | `c_func_0665` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const char* const 的解析结果与性能。 |
| 2955 | `conversion_cfunc.part13.test.ts` | `c_func_0666` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const bool 的解析结果与性能。 |
| 2956 | `conversion_cfunc.part14.test.ts` | `c_func_0667` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const float 的解析结果与性能。 |
| 2957 | `conversion_cfunc.part14.test.ts` | `c_func_0668` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const long 的解析结果与性能。 |
| 2958 | `conversion_cfunc.part14.test.ts` | `c_func_0669` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const short 的解析结果与性能。 |
| 2959 | `conversion_cfunc.part14.test.ts` | `c_func_0670` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const unsigned int 的解析结果与性能。 |
| 2960 | `conversion_cfunc.part14.test.ts` | `c_func_0671` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const size_t 的解析结果与性能。 |
| 2961 | `conversion_cfunc.part14.test.ts` | `c_func_0672` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const wchar_t* 的解析结果与性能。 |
| 2962 | `conversion_cfunc.part14.test.ts` | `c_func_0673` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const std::vector<int>& 的解析结果与性能。 |
| 2963 | `conversion_cfunc.part14.test.ts` | `c_func_0674` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const long long 的解析结果与性能。 |
| 2964 | `conversion_cfunc.part14.test.ts` | `c_func_0675` | 性能测试 | 3/4 | h2dts parseFunction：扩充-const 参数：const unsigned char 的解析结果与性能。 |
| 2965 | `conversion_cfunc.part14.test.ts` | `c_func_0676` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 int 的解析结果与性能。 |
| 2966 | `conversion_cfunc.part14.test.ts` | `c_func_0677` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 char 的解析结果与性能。 |
| 2967 | `conversion_cfunc.part14.test.ts` | `c_func_0678` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 short 的解析结果与性能。 |
| 2968 | `conversion_cfunc.part14.test.ts` | `c_func_0679` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 long 的解析结果与性能。 |
| 2969 | `conversion_cfunc.part14.test.ts` | `c_func_0680` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 long long 的解析结果与性能。 |
| 2970 | `conversion_cfunc.part14.test.ts` | `c_func_0681` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 float 的解析结果与性能。 |
| 2971 | `conversion_cfunc.part14.test.ts` | `c_func_0682` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 double 的解析结果与性能。 |
| 2972 | `conversion_cfunc.part14.test.ts` | `c_func_0683` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 bool 的解析结果与性能。 |
| 2973 | `conversion_cfunc.part14.test.ts` | `c_func_0684` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 unsigned int 的解析结果与性能。 |
| 2974 | `conversion_cfunc.part14.test.ts` | `c_func_0685` | 性能测试 | 3/4 | h2dts parseFunction：扩充-namespace：域内函数 unsigned char 的解析结果与性能。 |
| 2975 | `conversion_cfunc.part14.test.ts` | `c_func_0686` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 2 个 的解析结果与性能。 |
| 2976 | `conversion_cfunc.part14.test.ts` | `c_func_0687` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 3 个 的解析结果与性能。 |
| 2977 | `conversion_cfunc.part14.test.ts` | `c_func_0688` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 4 个 的解析结果与性能。 |
| 2978 | `conversion_cfunc.part14.test.ts` | `c_func_0689` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 5 个 的解析结果与性能。 |
| 2979 | `conversion_cfunc.part14.test.ts` | `c_func_0690` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 6 个 的解析结果与性能。 |
| 2980 | `conversion_cfunc.part14.test.ts` | `c_func_0691` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 8 个 的解析结果与性能。 |
| 2981 | `conversion_cfunc.part14.test.ts` | `c_func_0692` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 10 个 的解析结果与性能。 |
| 2982 | `conversion_cfunc.part14.test.ts` | `c_func_0693` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 15 个 的解析结果与性能。 |
| 2983 | `conversion_cfunc.part14.test.ts` | `c_func_0694` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多函数：同文件 20 个 的解析结果与性能。 |
| 2984 | `conversion_cfunc.part14.test.ts` | `c_func_0695` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：int (*cb)(int) 的解析结果与性能。 |
| 2985 | `conversion_cfunc.part14.test.ts` | `c_func_0696` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：void (*fn)(int, int) 的解析结果与性能。 |
| 2986 | `conversion_cfunc.part14.test.ts` | `c_func_0697` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：double (*math)(double) 的解析结果与性能。 |
| 2987 | `conversion_cfunc.part14.test.ts` | `c_func_0698` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：std::string (*strf)(int) 的解析结果与性能。 |
| 2988 | `conversion_cfunc.part14.test.ts` | `c_func_0699` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：bool (*pred)(int, double) 的解析结果与性能。 |
| 2989 | `conversion_cfunc.part14.test.ts` | `c_func_0700` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：char (*chf)(char) 的解析结果与性能。 |
| 2990 | `conversion_cfunc.part14.test.ts` | `c_func_0701` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：long (*lf)(long) 的解析结果与性能。 |
| 2991 | `conversion_cfunc.part14.test.ts` | `c_func_0702` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：float (*ff)(float) 的解析结果与性能。 |
| 2992 | `conversion_cfunc.part14.test.ts` | `c_func_0703` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：unsigned int (*uf)(unsigned int) 的解析结果与性能。 |
| 2993 | `conversion_cfunc.part14.test.ts` | `c_func_0704` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：short (*sf)(short) 的解析结果与性能。 |
| 2994 | `conversion_cfunc.part14.test.ts` | `c_func_0705` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：wchar_t (*wf)(wchar_t) 的解析结果与性能。 |
| 2995 | `conversion_cfunc.part14.test.ts` | `c_func_0706` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：size_t (*zf)(size_t) 的解析结果与性能。 |
| 2996 | `conversion_cfunc.part14.test.ts` | `c_func_0707` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：int64_t (*i64f)(int64_t) 的解析结果与性能。 |
| 2997 | `conversion_cfunc.part14.test.ts` | `c_func_0708` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：std::vector<int> (*vf)(int) 的解析结果与性能。 |
| 2998 | `conversion_cfunc.part14.test.ts` | `c_func_0709` | 性能测试 | 3/4 | h2dts parseFunction：扩充-typedef 函数指针：void (*nf)(std::string) 的解析结果与性能。 |
| 2999 | `conversion_cfunc.part14.test.ts` | `c_func_0710` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：ov0 4 组重载 的解析结果与性能。 |
| 3000 | `conversion_cfunc.part14.test.ts` | `c_func_0711` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：ov1 4 组重载 的解析结果与性能。 |
| 3001 | `conversion_cfunc.part15.test.ts` | `c_func_0712` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：ov2 4 组重载 的解析结果与性能。 |
| 3002 | `conversion_cfunc.part15.test.ts` | `c_func_0713` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：ov3 4 组重载 的解析结果与性能。 |
| 3003 | `conversion_cfunc.part15.test.ts` | `c_func_0714` | 性能测试 | 3/4 | h2dts parseFunction：扩充-重载：ov4 4 组重载 的解析结果与性能。 |
| 3004 | `conversion_cfunc.part15.test.ts` | `c_func_0715` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：int = 0 的解析结果与性能。 |
| 3005 | `conversion_cfunc.part15.test.ts` | `c_func_0716` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：double = 0.0 的解析结果与性能。 |
| 3006 | `conversion_cfunc.part15.test.ts` | `c_func_0717` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：bool = false 的解析结果与性能。 |
| 3007 | `conversion_cfunc.part15.test.ts` | `c_func_0718` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：std::string = "x" 的解析结果与性能。 |
| 3008 | `conversion_cfunc.part15.test.ts` | `c_func_0719` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：char = 'a' 的解析结果与性能。 |
| 3009 | `conversion_cfunc.part15.test.ts` | `c_func_0720` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：long = 1L 的解析结果与性能。 |
| 3010 | `conversion_cfunc.part15.test.ts` | `c_func_0721` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：float = 1.5f 的解析结果与性能。 |
| 3011 | `conversion_cfunc.part15.test.ts` | `c_func_0722` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：unsigned int = 1u 的解析结果与性能。 |
| 3012 | `conversion_cfunc.part15.test.ts` | `c_func_0723` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：short = 2 的解析结果与性能。 |
| 3013 | `conversion_cfunc.part15.test.ts` | `c_func_0724` | 性能测试 | 3/4 | h2dts parseFunction：扩充-默认参数：size_t = 1024 的解析结果与性能。 |
| 3014 | `conversion_cfunc.part15.test.ts` | `c_func_0725` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。 |
| 3015 | `conversion_cfunc.part15.test.ts` | `c_func_0726` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。 |
| 3016 | `conversion_cfunc.part15.test.ts` | `c_func_0727` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。 |
| 3017 | `conversion_cfunc.part15.test.ts` | `c_func_0728` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。 |
| 3018 | `conversion_cfunc.part15.test.ts` | `c_func_0729` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。 |
| 3019 | `conversion_cfunc.part15.test.ts` | `c_func_0730` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。 |
| 3020 | `conversion_cfunc.part15.test.ts` | `c_func_0731` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。 |
| 3021 | `conversion_cfunc.part15.test.ts` | `c_func_0732` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。 |
| 3022 | `conversion_cfunc.part15.test.ts` | `c_func_0733` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。 |
| 3023 | `conversion_cfunc.part15.test.ts` | `c_func_0734` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。 |
| 3024 | `conversion_cfunc.part15.test.ts` | `c_func_0735` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。 |
| 3025 | `conversion_cfunc.part15.test.ts` | `c_func_0736` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。 |
| 3026 | `conversion_cfunc.part15.test.ts` | `c_func_0737` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：6 参 的解析结果与性能。 |
| 3027 | `conversion_cfunc.part15.test.ts` | `c_func_0738` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：7 参 的解析结果与性能。 |
| 3028 | `conversion_cfunc.part15.test.ts` | `c_func_0739` | 性能测试 | 3/4 | h2dts parseFunction：扩充-多参数：8 参 的解析结果与性能。 |
| 3029 | `conversion_cfunc.part16.test.ts` | `c_func_0740` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::shared_ptr<int> 的解析结果与性能。 |
| 3030 | `conversion_cfunc.part16.test.ts` | `c_func_0741` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::shared_ptr<int> 的解析结果与性能。 |
| 3031 | `conversion_cfunc.part16.test.ts` | `c_func_0742` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::shared_ptr<std::string> 的解析结果与性能。 |
| 3032 | `conversion_cfunc.part16.test.ts` | `c_func_0743` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::shared_ptr<std::string> 的解析结果与性能。 |
| 3033 | `conversion_cfunc.part16.test.ts` | `c_func_0744` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::shared_ptr<double> 的解析结果与性能。 |
| 3034 | `conversion_cfunc.part16.test.ts` | `c_func_0745` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::shared_ptr<double> 的解析结果与性能。 |
| 3035 | `conversion_cfunc.part16.test.ts` | `c_func_0746` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unique_ptr<int> 的解析结果与性能。 |
| 3036 | `conversion_cfunc.part16.test.ts` | `c_func_0747` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unique_ptr<int> 的解析结果与性能。 |
| 3037 | `conversion_cfunc.part16.test.ts` | `c_func_0748` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unique_ptr<std::string> 的解析结果与性能。 |
| 3038 | `conversion_cfunc.part16.test.ts` | `c_func_0749` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unique_ptr<std::string> 的解析结果与性能。 |
| 3039 | `conversion_cfunc.part16.test.ts` | `c_func_0750` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unique_ptr<char> 的解析结果与性能。 |
| 3040 | `conversion_cfunc.part16.test.ts` | `c_func_0751` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unique_ptr<char> 的解析结果与性能。 |
| 3041 | `conversion_cfunc.part16.test.ts` | `c_func_0752` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::weak_ptr<int> 的解析结果与性能。 |
| 3042 | `conversion_cfunc.part16.test.ts` | `c_func_0753` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::weak_ptr<int> 的解析结果与性能。 |
| 3043 | `conversion_cfunc.part16.test.ts` | `c_func_0754` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::weak_ptr<std::string> 的解析结果与性能。 |
| 3044 | `conversion_cfunc.part16.test.ts` | `c_func_0755` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::weak_ptr<std::string> 的解析结果与性能。 |
| 3045 | `conversion_cfunc.part16.test.ts` | `c_func_0756` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::optional<int> 的解析结果与性能。 |
| 3046 | `conversion_cfunc.part16.test.ts` | `c_func_0757` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::optional<int> 的解析结果与性能。 |
| 3047 | `conversion_cfunc.part16.test.ts` | `c_func_0758` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::optional<std::string> 的解析结果与性能。 |
| 3048 | `conversion_cfunc.part16.test.ts` | `c_func_0759` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::optional<std::string> 的解析结果与性能。 |
| 3049 | `conversion_cfunc.part16.test.ts` | `c_func_0760` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::optional<double> 的解析结果与性能。 |
| 3050 | `conversion_cfunc.part16.test.ts` | `c_func_0761` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::optional<double> 的解析结果与性能。 |
| 3051 | `conversion_cfunc.part16.test.ts` | `c_func_0762` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::optional<bool> 的解析结果与性能。 |
| 3052 | `conversion_cfunc.part16.test.ts` | `c_func_0763` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::optional<bool> 的解析结果与性能。 |
| 3053 | `conversion_cfunc.part16.test.ts` | `c_func_0764` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::variant<int, std::string> 的解析结果与性能。 |
| 3054 | `conversion_cfunc.part16.test.ts` | `c_func_0765` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::variant<int, std::string> 的解析结果与性能。 |
| 3055 | `conversion_cfunc.part16.test.ts` | `c_func_0766` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::variant<double, bool> 的解析结果与性能。 |
| 3056 | `conversion_cfunc.part16.test.ts` | `c_func_0767` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::variant<double, bool> 的解析结果与性能。 |
| 3057 | `conversion_cfunc.part16.test.ts` | `c_func_0768` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::variant<int, float, double> 的解析结果与性能。 |
| 3058 | `conversion_cfunc.part16.test.ts` | `c_func_0769` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::variant<int, float, double> 的解析结果与性能。 |
| 3059 | `conversion_cfunc.part16.test.ts` | `c_func_0770` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::string_view 的解析结果与性能。 |
| 3060 | `conversion_cfunc.part16.test.ts` | `c_func_0771` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::string_view 的解析结果与性能。 |
| 3061 | `conversion_cfunc.part16.test.ts` | `c_func_0772` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::bitset<8> 的解析结果与性能。 |
| 3062 | `conversion_cfunc.part16.test.ts` | `c_func_0773` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::bitset<8> 的解析结果与性能。 |
| 3063 | `conversion_cfunc.part16.test.ts` | `c_func_0774` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::bitset<16> 的解析结果与性能。 |
| 3064 | `conversion_cfunc.part16.test.ts` | `c_func_0775` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::bitset<16> 的解析结果与性能。 |
| 3065 | `conversion_cfunc.part16.test.ts` | `c_func_0776` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::bitset<32> 的解析结果与性能。 |
| 3066 | `conversion_cfunc.part16.test.ts` | `c_func_0777` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::bitset<32> 的解析结果与性能。 |
| 3067 | `conversion_cfunc.part16.test.ts` | `c_func_0778` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::span<int> 的解析结果与性能。 |
| 3068 | `conversion_cfunc.part16.test.ts` | `c_func_0779` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::span<int> 的解析结果与性能。 |
| 3069 | `conversion_cfunc.part16.test.ts` | `c_func_0780` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::span<double> 的解析结果与性能。 |
| 3070 | `conversion_cfunc.part16.test.ts` | `c_func_0781` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::span<double> 的解析结果与性能。 |
| 3071 | `conversion_cfunc.part16.test.ts` | `c_func_0782` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::atomic<int> 的解析结果与性能。 |
| 3072 | `conversion_cfunc.part16.test.ts` | `c_func_0783` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::atomic<int> 的解析结果与性能。 |
| 3073 | `conversion_cfunc.part16.test.ts` | `c_func_0784` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::atomic<bool> 的解析结果与性能。 |
| 3074 | `conversion_cfunc.part16.test.ts` | `c_func_0785` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::atomic<bool> 的解析结果与性能。 |
| 3075 | `conversion_cfunc.part16.test.ts` | `c_func_0786` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::atomic<long> 的解析结果与性能。 |
| 3076 | `conversion_cfunc.part16.test.ts` | `c_func_0787` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::atomic<long> 的解析结果与性能。 |
| 3077 | `conversion_cfunc.part16.test.ts` | `c_func_0788` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::basic_string<char> 的解析结果与性能。 |
| 3078 | `conversion_cfunc.part16.test.ts` | `c_func_0789` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::basic_string<char> 的解析结果与性能。 |
| 3079 | `conversion_cfunc.part16.test.ts` | `c_func_0790` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::basic_string<wchar_t> 的解析结果与性能。 |
| 3080 | `conversion_cfunc.part16.test.ts` | `c_func_0791` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::basic_string<wchar_t> 的解析结果与性能。 |
| 3081 | `conversion_cfunc.part16.test.ts` | `c_func_0792` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::byte 的解析结果与性能。 |
| 3082 | `conversion_cfunc.part16.test.ts` | `c_func_0793` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::byte 的解析结果与性能。 |
| 3083 | `conversion_cfunc.part16.test.ts` | `c_func_0794` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::chrono::milliseconds 的解析结果与性能。 |
| 3084 | `conversion_cfunc.part16.test.ts` | `c_func_0795` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::chrono::milliseconds 的解析结果与性能。 |
| 3085 | `conversion_cfunc.part16.test.ts` | `c_func_0796` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::chrono::seconds 的解析结果与性能。 |
| 3086 | `conversion_cfunc.part16.test.ts` | `c_func_0797` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::chrono::seconds 的解析结果与性能。 |
| 3087 | `conversion_cfunc.part17.test.ts` | `c_func_0798` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::chrono::system_clock::time_point 的解析结果与性能。 |
| 3088 | `conversion_cfunc.part17.test.ts` | `c_func_0799` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::chrono::system_clock::time_point 的解析结果与性能。 |
| 3089 | `conversion_cfunc.part17.test.ts` | `c_func_0800` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::filesystem::path 的解析结果与性能。 |
| 3090 | `conversion_cfunc.part17.test.ts` | `c_func_0801` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::filesystem::path 的解析结果与性能。 |
| 3091 | `conversion_cfunc.part17.test.ts` | `c_func_0802` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<int, int> 的解析结果与性能。 |
| 3092 | `conversion_cfunc.part17.test.ts` | `c_func_0803` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<int, int> 的解析结果与性能。 |
| 3093 | `conversion_cfunc.part17.test.ts` | `c_func_0804` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<double, std::string> 的解析结果与性能。 |
| 3094 | `conversion_cfunc.part17.test.ts` | `c_func_0805` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<double, std::string> 的解析结果与性能。 |
| 3095 | `conversion_cfunc.part17.test.ts` | `c_func_0806` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<std::string, std::string> 的解析结果与性能。 |
| 3096 | `conversion_cfunc.part17.test.ts` | `c_func_0807` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<std::string, std::string> 的解析结果与性能。 |
| 3097 | `conversion_cfunc.part17.test.ts` | `c_func_0808` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<wchar_t, int> 的解析结果与性能。 |
| 3098 | `conversion_cfunc.part17.test.ts` | `c_func_0809` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<wchar_t, int> 的解析结果与性能。 |
| 3099 | `conversion_cfunc.part17.test.ts` | `c_func_0810` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<size_t, std::string> 的解析结果与性能。 |
| 3100 | `conversion_cfunc.part17.test.ts` | `c_func_0811` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<size_t, std::string> 的解析结果与性能。 |
| 3101 | `conversion_cfunc.part17.test.ts` | `c_func_0812` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<float, float> 的解析结果与性能。 |
| 3102 | `conversion_cfunc.part17.test.ts` | `c_func_0813` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<float, float> 的解析结果与性能。 |
| 3103 | `conversion_cfunc.part17.test.ts` | `c_func_0814` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<char> 的解析结果与性能。 |
| 3104 | `conversion_cfunc.part17.test.ts` | `c_func_0815` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<char> 的解析结果与性能。 |
| 3105 | `conversion_cfunc.part17.test.ts` | `c_func_0816` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<float> 的解析结果与性能。 |
| 3106 | `conversion_cfunc.part17.test.ts` | `c_func_0817` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<float> 的解析结果与性能。 |
| 3107 | `conversion_cfunc.part17.test.ts` | `c_func_0818` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<long> 的解析结果与性能。 |
| 3108 | `conversion_cfunc.part17.test.ts` | `c_func_0819` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<long> 的解析结果与性能。 |
| 3109 | `conversion_cfunc.part17.test.ts` | `c_func_0820` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<unsigned int> 的解析结果与性能。 |
| 3110 | `conversion_cfunc.part17.test.ts` | `c_func_0821` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<unsigned int> 的解析结果与性能。 |
| 3111 | `conversion_cfunc.part17.test.ts` | `c_func_0822` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<std::wstring> 的解析结果与性能。 |
| 3112 | `conversion_cfunc.part17.test.ts` | `c_func_0823` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<std::wstring> 的解析结果与性能。 |
| 3113 | `conversion_cfunc.part17.test.ts` | `c_func_0824` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<short> 的解析结果与性能。 |
| 3114 | `conversion_cfunc.part17.test.ts` | `c_func_0825` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<short> 的解析结果与性能。 |
| 3115 | `conversion_cfunc.part17.test.ts` | `c_func_0826` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<int64_t> 的解析结果与性能。 |
| 3116 | `conversion_cfunc.part17.test.ts` | `c_func_0827` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<int64_t> 的解析结果与性能。 |
| 3117 | `conversion_cfunc.part17.test.ts` | `c_func_0828` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<uint8_t> 的解析结果与性能。 |
| 3118 | `conversion_cfunc.part17.test.ts` | `c_func_0829` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<uint8_t> 的解析结果与性能。 |
| 3119 | `conversion_cfunc.part17.test.ts` | `c_func_0830` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<size_t> 的解析结果与性能。 |
| 3120 | `conversion_cfunc.part17.test.ts` | `c_func_0831` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<size_t> 的解析结果与性能。 |
| 3121 | `conversion_cfunc.part17.test.ts` | `c_func_0832` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<std::string_view> 的解析结果与性能。 |
| 3122 | `conversion_cfunc.part17.test.ts` | `c_func_0833` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<std::string_view> 的解析结果与性能。 |
| 3123 | `conversion_cfunc.part17.test.ts` | `c_func_0834` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::pair<double, double> 的解析结果与性能。 |
| 3124 | `conversion_cfunc.part17.test.ts` | `c_func_0835` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::pair<double, double> 的解析结果与性能。 |
| 3125 | `conversion_cfunc.part17.test.ts` | `c_func_0836` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::pair<float, float> 的解析结果与性能。 |
| 3126 | `conversion_cfunc.part17.test.ts` | `c_func_0837` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::pair<float, float> 的解析结果与性能。 |
| 3127 | `conversion_cfunc.part17.test.ts` | `c_func_0838` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::pair<int, long> 的解析结果与性能。 |
| 3128 | `conversion_cfunc.part17.test.ts` | `c_func_0839` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::pair<int, long> 的解析结果与性能。 |
| 3129 | `conversion_cfunc.part17.test.ts` | `c_func_0840` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::tuple<int, std::string, bool> 的解析结果与性能。 |
| 3130 | `conversion_cfunc.part17.test.ts` | `c_func_0841` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::tuple<int, std::string, bool> 的解析结果与性能。 |
| 3131 | `conversion_cfunc.part17.test.ts` | `c_func_0842` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::tuple<double, double, double> 的解析结果与性能。 |
| 3132 | `conversion_cfunc.part17.test.ts` | `c_func_0843` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::tuple<double, double, double> 的解析结果与性能。 |
| 3133 | `conversion_cfunc.part17.test.ts` | `c_func_0844` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::tuple<char, short, int> 的解析结果与性能。 |
| 3134 | `conversion_cfunc.part17.test.ts` | `c_func_0845` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::tuple<char, short, int> 的解析结果与性能。 |
| 3135 | `conversion_cfunc.part17.test.ts` | `c_func_0846` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::tuple<std::string, std::string, std::string> 的解析结果与性能。 |
| 3136 | `conversion_cfunc.part17.test.ts` | `c_func_0847` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::tuple<std::string, std::string, std::string> 的解析结果与性能。 |
| 3137 | `conversion_cfunc.part17.test.ts` | `c_func_0848` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::deque<float> 的解析结果与性能。 |
| 3138 | `conversion_cfunc.part17.test.ts` | `c_func_0849` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::deque<float> 的解析结果与性能。 |
| 3139 | `conversion_cfunc.part17.test.ts` | `c_func_0850` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::deque<long> 的解析结果与性能。 |
| 3140 | `conversion_cfunc.part17.test.ts` | `c_func_0851` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::deque<long> 的解析结果与性能。 |
| 3141 | `conversion_cfunc.part17.test.ts` | `c_func_0852` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::set<double> 的解析结果与性能。 |
| 3142 | `conversion_cfunc.part17.test.ts` | `c_func_0853` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::set<double> 的解析结果与性能。 |
| 3143 | `conversion_cfunc.part17.test.ts` | `c_func_0854` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::set<std::wstring> 的解析结果与性能。 |
| 3144 | `conversion_cfunc.part17.test.ts` | `c_func_0855` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::set<std::wstring> 的解析结果与性能。 |
| 3145 | `conversion_cfunc.part18.test.ts` | `c_func_0856` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::list<float> 的解析结果与性能。 |
| 3146 | `conversion_cfunc.part18.test.ts` | `c_func_0857` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::list<float> 的解析结果与性能。 |
| 3147 | `conversion_cfunc.part18.test.ts` | `c_func_0858` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::list<long long> 的解析结果与性能。 |
| 3148 | `conversion_cfunc.part18.test.ts` | `c_func_0859` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::list<long long> 的解析结果与性能。 |
| 3149 | `conversion_cfunc.part18.test.ts` | `c_func_0860` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::queue<std::string> 的解析结果与性能。 |
| 3150 | `conversion_cfunc.part18.test.ts` | `c_func_0861` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::queue<std::string> 的解析结果与性能。 |
| 3151 | `conversion_cfunc.part18.test.ts` | `c_func_0862` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::stack<double> 的解析结果与性能。 |
| 3152 | `conversion_cfunc.part18.test.ts` | `c_func_0863` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::stack<double> 的解析结果与性能。 |
| 3153 | `conversion_cfunc.part18.test.ts` | `c_func_0864` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unordered_map<int, std::string> 的解析结果与性能。 |
| 3154 | `conversion_cfunc.part18.test.ts` | `c_func_0865` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unordered_map<int, std::string> 的解析结果与性能。 |
| 3155 | `conversion_cfunc.part18.test.ts` | `c_func_0866` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unordered_map<std::string, double> 的解析结果与性能。 |
| 3156 | `conversion_cfunc.part18.test.ts` | `c_func_0867` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unordered_map<std::string, double> 的解析结果与性能。 |
| 3157 | `conversion_cfunc.part18.test.ts` | `c_func_0868` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unordered_set<double> 的解析结果与性能。 |
| 3158 | `conversion_cfunc.part18.test.ts` | `c_func_0869` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unordered_set<double> 的解析结果与性能。 |
| 3159 | `conversion_cfunc.part18.test.ts` | `c_func_0870` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::unordered_set<std::string> 的解析结果与性能。 |
| 3160 | `conversion_cfunc.part18.test.ts` | `c_func_0871` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::unordered_set<std::string> 的解析结果与性能。 |
| 3161 | `conversion_cfunc.part18.test.ts` | `c_func_0872` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::array<double, 8> 的解析结果与性能。 |
| 3162 | `conversion_cfunc.part18.test.ts` | `c_func_0873` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::array<double, 8> 的解析结果与性能。 |
| 3163 | `conversion_cfunc.part18.test.ts` | `c_func_0874` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::array<float, 16> 的解析结果与性能。 |
| 3164 | `conversion_cfunc.part18.test.ts` | `c_func_0875` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::array<float, 16> 的解析结果与性能。 |
| 3165 | `conversion_cfunc.part18.test.ts` | `c_func_0876` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::array<int64_t, 4> 的解析结果与性能。 |
| 3166 | `conversion_cfunc.part18.test.ts` | `c_func_0877` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::array<int64_t, 4> 的解析结果与性能。 |
| 3167 | `conversion_cfunc.part18.test.ts` | `c_func_0878` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::forward_list<double> 的解析结果与性能。 |
| 3168 | `conversion_cfunc.part18.test.ts` | `c_func_0879` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::forward_list<double> 的解析结果与性能。 |
| 3169 | `conversion_cfunc.part18.test.ts` | `c_func_0880` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::forward_list<std::string> 的解析结果与性能。 |
| 3170 | `conversion_cfunc.part18.test.ts` | `c_func_0881` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::forward_list<std::string> 的解析结果与性能。 |
| 3171 | `conversion_cfunc.part18.test.ts` | `c_func_0882` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::valarray<int> 的解析结果与性能。 |
| 3172 | `conversion_cfunc.part18.test.ts` | `c_func_0883` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::valarray<int> 的解析结果与性能。 |
| 3173 | `conversion_cfunc.part18.test.ts` | `c_func_0884` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::valarray<float> 的解析结果与性能。 |
| 3174 | `conversion_cfunc.part18.test.ts` | `c_func_0885` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::valarray<float> 的解析结果与性能。 |
| 3175 | `conversion_cfunc.part18.test.ts` | `c_func_0886` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::complex<float> 的解析结果与性能。 |
| 3176 | `conversion_cfunc.part18.test.ts` | `c_func_0887` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::complex<float> 的解析结果与性能。 |
| 3177 | `conversion_cfunc.part18.test.ts` | `c_func_0888` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::complex<long double> 的解析结果与性能。 |
| 3178 | `conversion_cfunc.part18.test.ts` | `c_func_0889` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::complex<long double> 的解析结果与性能。 |
| 3179 | `conversion_cfunc.part18.test.ts` | `c_func_0890` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::function<double(double)> 的解析结果与性能。 |
| 3180 | `conversion_cfunc.part18.test.ts` | `c_func_0891` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::function<double(double)> 的解析结果与性能。 |
| 3181 | `conversion_cfunc.part18.test.ts` | `c_func_0892` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::function<bool(int, std::string)> 的解析结果与性能。 |
| 3182 | `conversion_cfunc.part18.test.ts` | `c_func_0893` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::function<bool(int, std::string)> 的解析结果与性能。 |
| 3183 | `conversion_cfunc.part18.test.ts` | `c_func_0894` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::function<void()> 的解析结果与性能。 |
| 3184 | `conversion_cfunc.part18.test.ts` | `c_func_0895` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::function<void()> 的解析结果与性能。 |
| 3185 | `conversion_cfunc.part18.test.ts` | `c_func_0896` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::vector<int>::const_iterator 的解析结果与性能。 |
| 3186 | `conversion_cfunc.part18.test.ts` | `c_func_0897` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::vector<int>::const_iterator 的解析结果与性能。 |
| 3187 | `conversion_cfunc.part18.test.ts` | `c_func_0898` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::map<std::string, int>::iterator 的解析结果与性能。 |
| 3188 | `conversion_cfunc.part18.test.ts` | `c_func_0899` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::map<std::string, int>::iterator 的解析结果与性能。 |
| 3189 | `conversion_cfunc.part18.test.ts` | `c_func_0900` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：const char* 的解析结果与性能。 |
| 3190 | `conversion_cfunc.part18.test.ts` | `c_func_0901` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：const char* 的解析结果与性能。 |
| 3191 | `conversion_cfunc.part18.test.ts` | `c_func_0902` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：const wchar_t* 的解析结果与性能。 |
| 3192 | `conversion_cfunc.part18.test.ts` | `c_func_0903` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：const wchar_t* 的解析结果与性能。 |
| 3193 | `conversion_cfunc.part18.test.ts` | `c_func_0904` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：const unsigned char* 的解析结果与性能。 |
| 3194 | `conversion_cfunc.part18.test.ts` | `c_func_0905` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：const unsigned char* 的解析结果与性能。 |
| 3195 | `conversion_cfunc.part18.test.ts` | `c_func_0906` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：int const* 的解析结果与性能。 |
| 3196 | `conversion_cfunc.part18.test.ts` | `c_func_0907` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：int const* 的解析结果与性能。 |
| 3197 | `conversion_cfunc.part18.test.ts` | `c_func_0908` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：std::string const& 的解析结果与性能。 |
| 3198 | `conversion_cfunc.part18.test.ts` | `c_func_0909` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：std::string const& 的解析结果与性能。 |
| 3199 | `conversion_cfunc.part18.test.ts` | `c_func_0910` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：long long int 的解析结果与性能。 |
| 3200 | `conversion_cfunc.part18.test.ts` | `c_func_0911` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：long long int 的解析结果与性能。 |
| 3201 | `conversion_cfunc.part18.test.ts` | `c_func_0912` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：unsigned long long int 的解析结果与性能。 |
| 3202 | `conversion_cfunc.part18.test.ts` | `c_func_0913` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：unsigned long long int 的解析结果与性能。 |
| 3203 | `conversion_cfunc.part19.test.ts` | `c_func_0914` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：long int 的解析结果与性能。 |
| 3204 | `conversion_cfunc.part19.test.ts` | `c_func_0915` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：long int 的解析结果与性能。 |
| 3205 | `conversion_cfunc.part19.test.ts` | `c_func_0916` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：short int 的解析结果与性能。 |
| 3206 | `conversion_cfunc.part19.test.ts` | `c_func_0917` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：short int 的解析结果与性能。 |
| 3207 | `conversion_cfunc.part19.test.ts` | `c_func_0918` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-入参：unsigned short int 的解析结果与性能。 |
| 3208 | `conversion_cfunc.part19.test.ts` | `c_func_0919` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-返回：unsigned short int 的解析结果与性能。 |
| 3209 | `conversion_cfunc.part19.test.ts` | `c_func_0920` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<int>, std::shared_ptr<std::string>) 的解析结果与性能。 |
| 3210 | `conversion_cfunc.part19.test.ts` | `c_func_0921` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<int>, std::shared_ptr<double>) 的解析结果与性能。 |
| 3211 | `conversion_cfunc.part19.test.ts` | `c_func_0922` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<int>, std::unique_ptr<int>) 的解析结果与性能。 |
| 3212 | `conversion_cfunc.part19.test.ts` | `c_func_0923` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<std::string>, std::shared_ptr<double>) 的解析结果与性能。 |
| 3213 | `conversion_cfunc.part19.test.ts` | `c_func_0924` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<std::string>, std::unique_ptr<int>) 的解析结果与性能。 |
| 3214 | `conversion_cfunc.part19.test.ts` | `c_func_0925` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<std::string>, std::unique_ptr<std::string>) 的解析结果与性能。 |
| 3215 | `conversion_cfunc.part19.test.ts` | `c_func_0926` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<double>, std::unique_ptr<int>) 的解析结果与性能。 |
| 3216 | `conversion_cfunc.part19.test.ts` | `c_func_0927` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<double>, std::unique_ptr<std::string>) 的解析结果与性能。 |
| 3217 | `conversion_cfunc.part19.test.ts` | `c_func_0928` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::shared_ptr<double>, std::unique_ptr<char>) 的解析结果与性能。 |
| 3218 | `conversion_cfunc.part19.test.ts` | `c_func_0929` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<int>, std::unique_ptr<std::string>) 的解析结果与性能。 |
| 3219 | `conversion_cfunc.part19.test.ts` | `c_func_0930` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<int>, std::unique_ptr<char>) 的解析结果与性能。 |
| 3220 | `conversion_cfunc.part19.test.ts` | `c_func_0931` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<int>, std::weak_ptr<int>) 的解析结果与性能。 |
| 3221 | `conversion_cfunc.part19.test.ts` | `c_func_0932` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<std::string>, std::unique_ptr<char>) 的解析结果与性能。 |
| 3222 | `conversion_cfunc.part19.test.ts` | `c_func_0933` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<std::string>, std::weak_ptr<int>) 的解析结果与性能。 |
| 3223 | `conversion_cfunc.part19.test.ts` | `c_func_0934` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<std::string>, std::weak_ptr<std::string>) 的解析结果与性能。 |
| 3224 | `conversion_cfunc.part19.test.ts` | `c_func_0935` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<char>, std::weak_ptr<int>) 的解析结果与性能。 |
| 3225 | `conversion_cfunc.part19.test.ts` | `c_func_0936` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<char>, std::weak_ptr<std::string>) 的解析结果与性能。 |
| 3226 | `conversion_cfunc.part19.test.ts` | `c_func_0937` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unique_ptr<char>, std::optional<int>) 的解析结果与性能。 |
| 3227 | `conversion_cfunc.part19.test.ts` | `c_func_0938` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<int>, std::weak_ptr<std::string>) 的解析结果与性能。 |
| 3228 | `conversion_cfunc.part19.test.ts` | `c_func_0939` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<int>, std::optional<int>) 的解析结果与性能。 |
| 3229 | `conversion_cfunc.part19.test.ts` | `c_func_0940` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<int>, std::optional<std::string>) 的解析结果与性能。 |
| 3230 | `conversion_cfunc.part19.test.ts` | `c_func_0941` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<std::string>, std::optional<int>) 的解析结果与性能。 |
| 3231 | `conversion_cfunc.part19.test.ts` | `c_func_0942` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<std::string>, std::optional<std::string>) 的解析结果与性能。 |
| 3232 | `conversion_cfunc.part19.test.ts` | `c_func_0943` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::weak_ptr<std::string>, std::optional<double>) 的解析结果与性能。 |
| 3233 | `conversion_cfunc.part19.test.ts` | `c_func_0944` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<int>, std::optional<std::string>) 的解析结果与性能。 |
| 3234 | `conversion_cfunc.part19.test.ts` | `c_func_0945` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<int>, std::optional<double>) 的解析结果与性能。 |
| 3235 | `conversion_cfunc.part19.test.ts` | `c_func_0946` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<int>, std::optional<bool>) 的解析结果与性能。 |
| 3236 | `conversion_cfunc.part19.test.ts` | `c_func_0947` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<std::string>, std::optional<double>) 的解析结果与性能。 |
| 3237 | `conversion_cfunc.part19.test.ts` | `c_func_0948` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<std::string>, std::optional<bool>) 的解析结果与性能。 |
| 3238 | `conversion_cfunc.part19.test.ts` | `c_func_0949` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<std::string>, std::variant<int, std::string>) 的解析结果与性能。 |
| 3239 | `conversion_cfunc.part19.test.ts` | `c_func_0950` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<double>, std::optional<bool>) 的解析结果与性能。 |
| 3240 | `conversion_cfunc.part19.test.ts` | `c_func_0951` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<double>, std::variant<int, std::string>) 的解析结果与性能。 |
| 3241 | `conversion_cfunc.part19.test.ts` | `c_func_0952` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<double>, std::variant<double, bool>) 的解析结果与性能。 |
| 3242 | `conversion_cfunc.part19.test.ts` | `c_func_0953` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<bool>, std::variant<int, std::string>) 的解析结果与性能。 |
| 3243 | `conversion_cfunc.part19.test.ts` | `c_func_0954` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<bool>, std::variant<double, bool>) 的解析结果与性能。 |
| 3244 | `conversion_cfunc.part19.test.ts` | `c_func_0955` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::optional<bool>, std::variant<int, float, double>) 的解析结果与性能。 |
| 3245 | `conversion_cfunc.part19.test.ts` | `c_func_0956` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, std::string>, std::variant<double, bool>) 的解析结果与性能。 |
| 3246 | `conversion_cfunc.part19.test.ts` | `c_func_0957` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, std::string>, std::variant<int, float, double>) 的解析结果与性能。 |
| 3247 | `conversion_cfunc.part19.test.ts` | `c_func_0958` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, std::string>, std::bitset<8>) 的解析结果与性能。 |
| 3248 | `conversion_cfunc.part19.test.ts` | `c_func_0959` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<double, bool>, std::variant<int, float, double>) 的解析结果与性能。 |
| 3249 | `conversion_cfunc.part19.test.ts` | `c_func_0960` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<double, bool>, std::bitset<8>) 的解析结果与性能。 |
| 3250 | `conversion_cfunc.part19.test.ts` | `c_func_0961` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<double, bool>, std::bitset<16>) 的解析结果与性能。 |
| 3251 | `conversion_cfunc.part19.test.ts` | `c_func_0962` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, float, double>, std::bitset<8>) 的解析结果与性能。 |
| 3252 | `conversion_cfunc.part19.test.ts` | `c_func_0963` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, float, double>, std::bitset<16>) 的解析结果与性能。 |
| 3253 | `conversion_cfunc.part19.test.ts` | `c_func_0964` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::variant<int, float, double>, std::bitset<32>) 的解析结果与性能。 |
| 3254 | `conversion_cfunc.part19.test.ts` | `c_func_0965` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<8>, std::bitset<16>) 的解析结果与性能。 |
| 3255 | `conversion_cfunc.part19.test.ts` | `c_func_0966` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<8>, std::bitset<32>) 的解析结果与性能。 |
| 3256 | `conversion_cfunc.part19.test.ts` | `c_func_0967` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<8>, std::span<int>) 的解析结果与性能。 |
| 3257 | `conversion_cfunc.part20.test.ts` | `c_func_0968` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<16>, std::bitset<32>) 的解析结果与性能。 |
| 3258 | `conversion_cfunc.part20.test.ts` | `c_func_0969` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<16>, std::span<int>) 的解析结果与性能。 |
| 3259 | `conversion_cfunc.part20.test.ts` | `c_func_0970` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<16>, std::span<double>) 的解析结果与性能。 |
| 3260 | `conversion_cfunc.part20.test.ts` | `c_func_0971` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<32>, std::span<int>) 的解析结果与性能。 |
| 3261 | `conversion_cfunc.part20.test.ts` | `c_func_0972` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<32>, std::span<double>) 的解析结果与性能。 |
| 3262 | `conversion_cfunc.part20.test.ts` | `c_func_0973` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::bitset<32>, std::atomic<int>) 的解析结果与性能。 |
| 3263 | `conversion_cfunc.part20.test.ts` | `c_func_0974` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::span<int>, std::span<double>) 的解析结果与性能。 |
| 3264 | `conversion_cfunc.part20.test.ts` | `c_func_0975` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::span<int>, std::atomic<int>) 的解析结果与性能。 |
| 3265 | `conversion_cfunc.part20.test.ts` | `c_func_0976` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::span<int>, std::atomic<bool>) 的解析结果与性能。 |
| 3266 | `conversion_cfunc.part20.test.ts` | `c_func_0977` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::span<double>, std::atomic<int>) 的解析结果与性能。 |
| 3267 | `conversion_cfunc.part20.test.ts` | `c_func_0978` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::span<double>, std::atomic<bool>) 的解析结果与性能。 |
| 3268 | `conversion_cfunc.part20.test.ts` | `c_func_0979` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::span<double>, std::atomic<long>) 的解析结果与性能。 |
| 3269 | `conversion_cfunc.part20.test.ts` | `c_func_0980` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<int>, std::atomic<bool>) 的解析结果与性能。 |
| 3270 | `conversion_cfunc.part20.test.ts` | `c_func_0981` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<int>, std::atomic<long>) 的解析结果与性能。 |
| 3271 | `conversion_cfunc.part20.test.ts` | `c_func_0982` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<int>, std::basic_string<char>) 的解析结果与性能。 |
| 3272 | `conversion_cfunc.part20.test.ts` | `c_func_0983` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<bool>, std::atomic<long>) 的解析结果与性能。 |
| 3273 | `conversion_cfunc.part20.test.ts` | `c_func_0984` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<bool>, std::basic_string<char>) 的解析结果与性能。 |
| 3274 | `conversion_cfunc.part20.test.ts` | `c_func_0985` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<bool>, std::basic_string<wchar_t>) 的解析结果与性能。 |
| 3275 | `conversion_cfunc.part20.test.ts` | `c_func_0986` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<long>, std::basic_string<char>) 的解析结果与性能。 |
| 3276 | `conversion_cfunc.part20.test.ts` | `c_func_0987` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<long>, std::basic_string<wchar_t>) 的解析结果与性能。 |
| 3277 | `conversion_cfunc.part20.test.ts` | `c_func_0988` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::atomic<long>, std::map<int, int>) 的解析结果与性能。 |
| 3278 | `conversion_cfunc.part20.test.ts` | `c_func_0989` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<char>, std::basic_string<wchar_t>) 的解析结果与性能。 |
| 3279 | `conversion_cfunc.part20.test.ts` | `c_func_0990` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<char>, std::map<int, int>) 的解析结果与性能。 |
| 3280 | `conversion_cfunc.part20.test.ts` | `c_func_0991` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<char>, std::map<double, std::string>) 的解析结果与性能。 |
| 3281 | `conversion_cfunc.part20.test.ts` | `c_func_0992` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<wchar_t>, std::map<int, int>) 的解析结果与性能。 |
| 3282 | `conversion_cfunc.part20.test.ts` | `c_func_0993` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<wchar_t>, std::map<double, std::string>) 的解析结果与性能。 |
| 3283 | `conversion_cfunc.part20.test.ts` | `c_func_0994` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::basic_string<wchar_t>, std::map<std::string, std::string>) 的解析结果与性能。 |
| 3284 | `conversion_cfunc.part20.test.ts` | `c_func_0995` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<int, int>, std::map<double, std::string>) 的解析结果与性能。 |
| 3285 | `conversion_cfunc.part20.test.ts` | `c_func_0996` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<int, int>, std::map<std::string, std::string>) 的解析结果与性能。 |
| 3286 | `conversion_cfunc.part20.test.ts` | `c_func_0997` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<int, int>, std::map<wchar_t, int>) 的解析结果与性能。 |
| 3287 | `conversion_cfunc.part20.test.ts` | `c_func_0998` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<double, std::string>, std::map<std::string, std::string>) 的解析结果与性能。 |
| 3288 | `conversion_cfunc.part20.test.ts` | `c_func_0999` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<double, std::string>, std::map<wchar_t, int>) 的解析结果与性能。 |
| 3289 | `conversion_cfunc.part20.test.ts` | `c_func_1000` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<double, std::string>, std::map<size_t, std::string>) 的解析结果与性能。 |
| 3290 | `conversion_cfunc.part20.test.ts` | `c_func_1001` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<std::string, std::string>, std::map<wchar_t, int>) 的解析结果与性能。 |
| 3291 | `conversion_cfunc.part20.test.ts` | `c_func_1002` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<std::string, std::string>, std::map<size_t, std::string>) 的解析结果与性能。 |
| 3292 | `conversion_cfunc.part20.test.ts` | `c_func_1003` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<std::string, std::string>, std::map<float, float>) 的解析结果与性能。 |
| 3293 | `conversion_cfunc.part20.test.ts` | `c_func_1004` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<wchar_t, int>, std::map<size_t, std::string>) 的解析结果与性能。 |
| 3294 | `conversion_cfunc.part20.test.ts` | `c_func_1005` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<wchar_t, int>, std::map<float, float>) 的解析结果与性能。 |
| 3295 | `conversion_cfunc.part20.test.ts` | `c_func_1006` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<wchar_t, int>, std::vector<char>) 的解析结果与性能。 |
| 3296 | `conversion_cfunc.part20.test.ts` | `c_func_1007` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<size_t, std::string>, std::map<float, float>) 的解析结果与性能。 |
| 3297 | `conversion_cfunc.part20.test.ts` | `c_func_1008` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<size_t, std::string>, std::vector<char>) 的解析结果与性能。 |
| 3298 | `conversion_cfunc.part20.test.ts` | `c_func_1009` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<size_t, std::string>, std::vector<float>) 的解析结果与性能。 |
| 3299 | `conversion_cfunc.part20.test.ts` | `c_func_1010` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<float, float>, std::vector<char>) 的解析结果与性能。 |
| 3300 | `conversion_cfunc.part20.test.ts` | `c_func_1011` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<float, float>, std::vector<float>) 的解析结果与性能。 |
| 3301 | `conversion_cfunc.part20.test.ts` | `c_func_1012` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::map<float, float>, std::vector<long>) 的解析结果与性能。 |
| 3302 | `conversion_cfunc.part20.test.ts` | `c_func_1013` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<char>, std::vector<float>) 的解析结果与性能。 |
| 3303 | `conversion_cfunc.part20.test.ts` | `c_func_1014` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<char>, std::vector<long>) 的解析结果与性能。 |
| 3304 | `conversion_cfunc.part20.test.ts` | `c_func_1015` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<char>, std::vector<unsigned int>) 的解析结果与性能。 |
| 3305 | `conversion_cfunc.part20.test.ts` | `c_func_1016` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<float>, std::vector<long>) 的解析结果与性能。 |
| 3306 | `conversion_cfunc.part20.test.ts` | `c_func_1017` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<float>, std::vector<unsigned int>) 的解析结果与性能。 |
| 3307 | `conversion_cfunc.part20.test.ts` | `c_func_1018` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<float>, std::vector<std::wstring>) 的解析结果与性能。 |
| 3308 | `conversion_cfunc.part20.test.ts` | `c_func_1019` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<long>, std::vector<unsigned int>) 的解析结果与性能。 |
| 3309 | `conversion_cfunc.part20.test.ts` | `c_func_1020` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<long>, std::vector<std::wstring>) 的解析结果与性能。 |
| 3310 | `conversion_cfunc.part21.test.ts` | `c_func_1021` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<long>, std::vector<short>) 的解析结果与性能。 |
| 3311 | `conversion_cfunc.part21.test.ts` | `c_func_1022` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<unsigned int>, std::vector<std::wstring>) 的解析结果与性能。 |
| 3312 | `conversion_cfunc.part21.test.ts` | `c_func_1023` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<unsigned int>, std::vector<short>) 的解析结果与性能。 |
| 3313 | `conversion_cfunc.part21.test.ts` | `c_func_1024` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<unsigned int>, std::vector<int64_t>) 的解析结果与性能。 |
| 3314 | `conversion_cfunc.part21.test.ts` | `c_func_1025` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<std::wstring>, std::vector<short>) 的解析结果与性能。 |
| 3315 | `conversion_cfunc.part21.test.ts` | `c_func_1026` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<std::wstring>, std::vector<int64_t>) 的解析结果与性能。 |
| 3316 | `conversion_cfunc.part21.test.ts` | `c_func_1027` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<std::wstring>, std::vector<uint8_t>) 的解析结果与性能。 |
| 3317 | `conversion_cfunc.part21.test.ts` | `c_func_1028` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<short>, std::vector<int64_t>) 的解析结果与性能。 |
| 3318 | `conversion_cfunc.part21.test.ts` | `c_func_1029` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<short>, std::vector<uint8_t>) 的解析结果与性能。 |
| 3319 | `conversion_cfunc.part21.test.ts` | `c_func_1030` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<short>, std::vector<size_t>) 的解析结果与性能。 |
| 3320 | `conversion_cfunc.part21.test.ts` | `c_func_1031` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<int64_t>, std::vector<uint8_t>) 的解析结果与性能。 |
| 3321 | `conversion_cfunc.part21.test.ts` | `c_func_1032` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<int64_t>, std::vector<size_t>) 的解析结果与性能。 |
| 3322 | `conversion_cfunc.part21.test.ts` | `c_func_1033` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<int64_t>, std::vector<std::string_view>) 的解析结果与性能。 |
| 3323 | `conversion_cfunc.part21.test.ts` | `c_func_1034` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<uint8_t>, std::vector<size_t>) 的解析结果与性能。 |
| 3324 | `conversion_cfunc.part21.test.ts` | `c_func_1035` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<uint8_t>, std::vector<std::string_view>) 的解析结果与性能。 |
| 3325 | `conversion_cfunc.part21.test.ts` | `c_func_1036` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<uint8_t>, std::pair<double, double>) 的解析结果与性能。 |
| 3326 | `conversion_cfunc.part21.test.ts` | `c_func_1037` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<size_t>, std::vector<std::string_view>) 的解析结果与性能。 |
| 3327 | `conversion_cfunc.part21.test.ts` | `c_func_1038` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<size_t>, std::pair<double, double>) 的解析结果与性能。 |
| 3328 | `conversion_cfunc.part21.test.ts` | `c_func_1039` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<size_t>, std::pair<float, float>) 的解析结果与性能。 |
| 3329 | `conversion_cfunc.part21.test.ts` | `c_func_1040` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<std::string_view>, std::pair<double, double>) 的解析结果与性能。 |
| 3330 | `conversion_cfunc.part21.test.ts` | `c_func_1041` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<std::string_view>, std::pair<float, float>) 的解析结果与性能。 |
| 3331 | `conversion_cfunc.part21.test.ts` | `c_func_1042` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::vector<std::string_view>, std::pair<int, long>) 的解析结果与性能。 |
| 3332 | `conversion_cfunc.part21.test.ts` | `c_func_1043` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<double, double>, std::pair<float, float>) 的解析结果与性能。 |
| 3333 | `conversion_cfunc.part21.test.ts` | `c_func_1044` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<double, double>, std::pair<int, long>) 的解析结果与性能。 |
| 3334 | `conversion_cfunc.part21.test.ts` | `c_func_1045` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<double, double>, std::tuple<int, std::string, bool>) 的解析结果与性能。 |
| 3335 | `conversion_cfunc.part21.test.ts` | `c_func_1046` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<float, float>, std::pair<int, long>) 的解析结果与性能。 |
| 3336 | `conversion_cfunc.part21.test.ts` | `c_func_1047` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<float, float>, std::tuple<int, std::string, bool>) 的解析结果与性能。 |
| 3337 | `conversion_cfunc.part21.test.ts` | `c_func_1048` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<float, float>, std::tuple<double, double, double>) 的解析结果与性能。 |
| 3338 | `conversion_cfunc.part21.test.ts` | `c_func_1049` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<int, long>, std::tuple<int, std::string, bool>) 的解析结果与性能。 |
| 3339 | `conversion_cfunc.part21.test.ts` | `c_func_1050` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<int, long>, std::tuple<double, double, double>) 的解析结果与性能。 |
| 3340 | `conversion_cfunc.part21.test.ts` | `c_func_1051` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::pair<int, long>, std::tuple<char, short, int>) 的解析结果与性能。 |
| 3341 | `conversion_cfunc.part21.test.ts` | `c_func_1052` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<int, std::string, bool>, std::tuple<double, double, double>) 的解析结果与性能。 |
| 3342 | `conversion_cfunc.part21.test.ts` | `c_func_1053` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<int, std::string, bool>, std::tuple<char, short, int>) 的解析结果与性能。 |
| 3343 | `conversion_cfunc.part21.test.ts` | `c_func_1054` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<int, std::string, bool>, std::tuple<std::string, std::string, std::string>) 的解析结果与性能。 |
| 3344 | `conversion_cfunc.part21.test.ts` | `c_func_1055` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<double, double, double>, std::tuple<char, short, int>) 的解析结果与性能。 |
| 3345 | `conversion_cfunc.part21.test.ts` | `c_func_1056` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<double, double, double>, std::tuple<std::string, std::string, std::string>) 的解析结果与性能。 |
| 3346 | `conversion_cfunc.part21.test.ts` | `c_func_1057` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<double, double, double>, std::deque<float>) 的解析结果与性能。 |
| 3347 | `conversion_cfunc.part21.test.ts` | `c_func_1058` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<char, short, int>, std::tuple<std::string, std::string, std::string>) 的解析结果与性能。 |
| 3348 | `conversion_cfunc.part21.test.ts` | `c_func_1059` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<char, short, int>, std::deque<float>) 的解析结果与性能。 |
| 3349 | `conversion_cfunc.part21.test.ts` | `c_func_1060` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<char, short, int>, std::deque<long>) 的解析结果与性能。 |
| 3350 | `conversion_cfunc.part21.test.ts` | `c_func_1061` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<std::string, std::string, std::string>, std::deque<float>) 的解析结果与性能。 |
| 3351 | `conversion_cfunc.part21.test.ts` | `c_func_1062` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<std::string, std::string, std::string>, std::deque<long>) 的解析结果与性能。 |
| 3352 | `conversion_cfunc.part21.test.ts` | `c_func_1063` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::tuple<std::string, std::string, std::string>, std::set<double>) 的解析结果与性能。 |
| 3353 | `conversion_cfunc.part21.test.ts` | `c_func_1064` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::deque<float>, std::deque<long>) 的解析结果与性能。 |
| 3354 | `conversion_cfunc.part21.test.ts` | `c_func_1065` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::deque<float>, std::set<double>) 的解析结果与性能。 |
| 3355 | `conversion_cfunc.part21.test.ts` | `c_func_1066` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::deque<float>, std::set<std::wstring>) 的解析结果与性能。 |
| 3356 | `conversion_cfunc.part21.test.ts` | `c_func_1067` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::deque<long>, std::set<double>) 的解析结果与性能。 |
| 3357 | `conversion_cfunc.part21.test.ts` | `c_func_1068` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::deque<long>, std::set<std::wstring>) 的解析结果与性能。 |
| 3358 | `conversion_cfunc.part21.test.ts` | `c_func_1069` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::deque<long>, std::list<float>) 的解析结果与性能。 |
| 3359 | `conversion_cfunc.part21.test.ts` | `c_func_1070` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::set<double>, std::set<std::wstring>) 的解析结果与性能。 |
| 3360 | `conversion_cfunc.part21.test.ts` | `c_func_1071` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::set<double>, std::list<float>) 的解析结果与性能。 |
| 3361 | `conversion_cfunc.part21.test.ts` | `c_func_1072` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::set<double>, std::list<long long>) 的解析结果与性能。 |
| 3362 | `conversion_cfunc.part21.test.ts` | `c_func_1073` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::set<std::wstring>, std::list<float>) 的解析结果与性能。 |
| 3363 | `conversion_cfunc.part22.test.ts` | `c_func_1074` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::set<std::wstring>, std::list<long long>) 的解析结果与性能。 |
| 3364 | `conversion_cfunc.part22.test.ts` | `c_func_1075` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::set<std::wstring>, std::queue<std::string>) 的解析结果与性能。 |
| 3365 | `conversion_cfunc.part22.test.ts` | `c_func_1076` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::list<float>, std::list<long long>) 的解析结果与性能。 |
| 3366 | `conversion_cfunc.part22.test.ts` | `c_func_1077` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::list<float>, std::queue<std::string>) 的解析结果与性能。 |
| 3367 | `conversion_cfunc.part22.test.ts` | `c_func_1078` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::list<float>, std::stack<double>) 的解析结果与性能。 |
| 3368 | `conversion_cfunc.part22.test.ts` | `c_func_1079` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::list<long long>, std::queue<std::string>) 的解析结果与性能。 |
| 3369 | `conversion_cfunc.part22.test.ts` | `c_func_1080` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::list<long long>, std::stack<double>) 的解析结果与性能。 |
| 3370 | `conversion_cfunc.part22.test.ts` | `c_func_1081` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::list<long long>, std::unordered_map<int, std::string>) 的解析结果与性能。 |
| 3371 | `conversion_cfunc.part22.test.ts` | `c_func_1082` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::queue<std::string>, std::stack<double>) 的解析结果与性能。 |
| 3372 | `conversion_cfunc.part22.test.ts` | `c_func_1083` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::queue<std::string>, std::unordered_map<int, std::string>) 的解析结果与性能。 |
| 3373 | `conversion_cfunc.part22.test.ts` | `c_func_1084` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::queue<std::string>, std::unordered_map<std::string, double>) 的解析结果与性能。 |
| 3374 | `conversion_cfunc.part22.test.ts` | `c_func_1085` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::stack<double>, std::unordered_map<int, std::string>) 的解析结果与性能。 |
| 3375 | `conversion_cfunc.part22.test.ts` | `c_func_1086` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::stack<double>, std::unordered_map<std::string, double>) 的解析结果与性能。 |
| 3376 | `conversion_cfunc.part22.test.ts` | `c_func_1087` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::stack<double>, std::unordered_set<double>) 的解析结果与性能。 |
| 3377 | `conversion_cfunc.part22.test.ts` | `c_func_1088` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<int, std::string>, std::unordered_map<std::string, double>) 的解析结果与性能。 |
| 3378 | `conversion_cfunc.part22.test.ts` | `c_func_1089` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<int, std::string>, std::unordered_set<double>) 的解析结果与性能。 |
| 3379 | `conversion_cfunc.part22.test.ts` | `c_func_1090` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<int, std::string>, std::unordered_set<std::string>) 的解析结果与性能。 |
| 3380 | `conversion_cfunc.part22.test.ts` | `c_func_1091` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<std::string, double>, std::unordered_set<double>) 的解析结果与性能。 |
| 3381 | `conversion_cfunc.part22.test.ts` | `c_func_1092` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<std::string, double>, std::unordered_set<std::string>) 的解析结果与性能。 |
| 3382 | `conversion_cfunc.part22.test.ts` | `c_func_1093` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_map<std::string, double>, std::array<double, 8>) 的解析结果与性能。 |
| 3383 | `conversion_cfunc.part22.test.ts` | `c_func_1094` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<double>, std::unordered_set<std::string>) 的解析结果与性能。 |
| 3384 | `conversion_cfunc.part22.test.ts` | `c_func_1095` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<double>, std::array<double, 8>) 的解析结果与性能。 |
| 3385 | `conversion_cfunc.part22.test.ts` | `c_func_1096` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<double>, std::array<float, 16>) 的解析结果与性能。 |
| 3386 | `conversion_cfunc.part22.test.ts` | `c_func_1097` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<std::string>, std::array<double, 8>) 的解析结果与性能。 |
| 3387 | `conversion_cfunc.part22.test.ts` | `c_func_1098` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<std::string>, std::array<float, 16>) 的解析结果与性能。 |
| 3388 | `conversion_cfunc.part22.test.ts` | `c_func_1099` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::unordered_set<std::string>, std::array<int64_t, 4>) 的解析结果与性能。 |
| 3389 | `conversion_cfunc.part22.test.ts` | `c_func_1100` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<double, 8>, std::array<float, 16>) 的解析结果与性能。 |
| 3390 | `conversion_cfunc.part22.test.ts` | `c_func_1101` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<double, 8>, std::array<int64_t, 4>) 的解析结果与性能。 |
| 3391 | `conversion_cfunc.part22.test.ts` | `c_func_1102` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<double, 8>, std::forward_list<double>) 的解析结果与性能。 |
| 3392 | `conversion_cfunc.part22.test.ts` | `c_func_1103` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<float, 16>, std::array<int64_t, 4>) 的解析结果与性能。 |
| 3393 | `conversion_cfunc.part22.test.ts` | `c_func_1104` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<float, 16>, std::forward_list<double>) 的解析结果与性能。 |
| 3394 | `conversion_cfunc.part22.test.ts` | `c_func_1105` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<float, 16>, std::forward_list<std::string>) 的解析结果与性能。 |
| 3395 | `conversion_cfunc.part22.test.ts` | `c_func_1106` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<int64_t, 4>, std::forward_list<double>) 的解析结果与性能。 |
| 3396 | `conversion_cfunc.part22.test.ts` | `c_func_1107` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<int64_t, 4>, std::forward_list<std::string>) 的解析结果与性能。 |
| 3397 | `conversion_cfunc.part22.test.ts` | `c_func_1108` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::array<int64_t, 4>, std::valarray<int>) 的解析结果与性能。 |
| 3398 | `conversion_cfunc.part22.test.ts` | `c_func_1109` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<double>, std::forward_list<std::string>) 的解析结果与性能。 |
| 3399 | `conversion_cfunc.part22.test.ts` | `c_func_1110` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<double>, std::valarray<int>) 的解析结果与性能。 |
| 3400 | `conversion_cfunc.part22.test.ts` | `c_func_1111` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<double>, std::valarray<float>) 的解析结果与性能。 |
| 3401 | `conversion_cfunc.part22.test.ts` | `c_func_1112` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<std::string>, std::valarray<int>) 的解析结果与性能。 |
| 3402 | `conversion_cfunc.part22.test.ts` | `c_func_1113` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<std::string>, std::valarray<float>) 的解析结果与性能。 |
| 3403 | `conversion_cfunc.part22.test.ts` | `c_func_1114` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::forward_list<std::string>, std::complex<float>) 的解析结果与性能。 |
| 3404 | `conversion_cfunc.part22.test.ts` | `c_func_1115` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::valarray<int>, std::valarray<float>) 的解析结果与性能。 |
| 3405 | `conversion_cfunc.part22.test.ts` | `c_func_1116` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::valarray<int>, std::complex<float>) 的解析结果与性能。 |
| 3406 | `conversion_cfunc.part22.test.ts` | `c_func_1117` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::valarray<int>, std::complex<long double>) 的解析结果与性能。 |
| 3407 | `conversion_cfunc.part22.test.ts` | `c_func_1118` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::valarray<float>, std::complex<float>) 的解析结果与性能。 |
| 3408 | `conversion_cfunc.part22.test.ts` | `c_func_1119` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::valarray<float>, std::complex<long double>) 的解析结果与性能。 |
| 3409 | `conversion_cfunc.part22.test.ts` | `c_func_1120` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::valarray<float>, std::shared_ptr<int>) 的解析结果与性能。 |
| 3410 | `conversion_cfunc.part22.test.ts` | `c_func_1121` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::complex<float>, std::complex<long double>) 的解析结果与性能。 |
| 3411 | `conversion_cfunc.part22.test.ts` | `c_func_1122` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::complex<float>, std::shared_ptr<int>) 的解析结果与性能。 |
| 3412 | `conversion_cfunc.part22.test.ts` | `c_func_1123` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::complex<float>, std::shared_ptr<std::string>) 的解析结果与性能。 |
| 3413 | `conversion_cfunc.part22.test.ts` | `c_func_1124` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::complex<long double>, std::shared_ptr<int>) 的解析结果与性能。 |
| 3414 | `conversion_cfunc.part22.test.ts` | `c_func_1125` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::complex<long double>, std::shared_ptr<std::string>) 的解析结果与性能。 |
| 3415 | `conversion_cfunc.part22.test.ts` | `c_func_1126` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器组合：(std::complex<long double>, std::shared_ptr<double>) 的解析结果与性能。 |
| 3416 | `conversion_cfunc.part23.test.ts` | `c_func_1127` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：int[2][3] 的解析结果与性能。 |
| 3417 | `conversion_cfunc.part23.test.ts` | `c_func_1128` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：int[4][5][6] 的解析结果与性能。 |
| 3418 | `conversion_cfunc.part23.test.ts` | `c_func_1129` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：double[3][3] 的解析结果与性能。 |
| 3419 | `conversion_cfunc.part23.test.ts` | `c_func_1130` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：double[2][4][8] 的解析结果与性能。 |
| 3420 | `conversion_cfunc.part23.test.ts` | `c_func_1131` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：char[10][10] 的解析结果与性能。 |
| 3421 | `conversion_cfunc.part23.test.ts` | `c_func_1132` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：char[5][5][5] 的解析结果与性能。 |
| 3422 | `conversion_cfunc.part23.test.ts` | `c_func_1133` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：float[4][4] 的解析结果与性能。 |
| 3423 | `conversion_cfunc.part23.test.ts` | `c_func_1134` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：float[2][6][3] 的解析结果与性能。 |
| 3424 | `conversion_cfunc.part23.test.ts` | `c_func_1135` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：std::string[3][3] 的解析结果与性能。 |
| 3425 | `conversion_cfunc.part23.test.ts` | `c_func_1136` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：std::string[2][2][2] 的解析结果与性能。 |
| 3426 | `conversion_cfunc.part23.test.ts` | `c_func_1137` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：long[6][6] 的解析结果与性能。 |
| 3427 | `conversion_cfunc.part23.test.ts` | `c_func_1138` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：long long[3][3][3] 的解析结果与性能。 |
| 3428 | `conversion_cfunc.part23.test.ts` | `c_func_1139` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：short[8][4] 的解析结果与性能。 |
| 3429 | `conversion_cfunc.part23.test.ts` | `c_func_1140` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：unsigned int[5][5] 的解析结果与性能。 |
| 3430 | `conversion_cfunc.part23.test.ts` | `c_func_1141` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：bool[4][4] 的解析结果与性能。 |
| 3431 | `conversion_cfunc.part23.test.ts` | `c_func_1142` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-多维数组：wchar_t[3][3] 的解析结果与性能。 |
| 3432 | `conversion_cfunc.part23.test.ts` | `c_func_1143` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::vector<int>[4] 的解析结果与性能。 |
| 3433 | `conversion_cfunc.part23.test.ts` | `c_func_1144` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::vector<std::string>[3] 的解析结果与性能。 |
| 3434 | `conversion_cfunc.part23.test.ts` | `c_func_1145` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::map<std::string, int>[2] 的解析结果与性能。 |
| 3435 | `conversion_cfunc.part23.test.ts` | `c_func_1146` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::set<int>[5] 的解析结果与性能。 |
| 3436 | `conversion_cfunc.part23.test.ts` | `c_func_1147` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::string[8] 的解析结果与性能。 |
| 3437 | `conversion_cfunc.part23.test.ts` | `c_func_1148` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：char[16] 的解析结果与性能。 |
| 3438 | `conversion_cfunc.part23.test.ts` | `c_func_1149` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::shared_ptr<int>[4] 的解析结果与性能。 |
| 3439 | `conversion_cfunc.part23.test.ts` | `c_func_1150` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::optional<int>[6] 的解析结果与性能。 |
| 3440 | `conversion_cfunc.part23.test.ts` | `c_func_1151` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::unique_ptr<std::string>[3] 的解析结果与性能。 |
| 3441 | `conversion_cfunc.part23.test.ts` | `c_func_1152` | 性能测试 | 3/4 | h2dts parseFunction：类型覆盖-容器数组：std::deque<int>[2] 的解析结果与性能。 |
| 3442 | `conversion_cclass.part01.test.ts` | `c_class_0001` | 性能测试 | 3/4 | h2dts parseClass：class-变量：4 基础类型成员 的解析结果与性能。 |
| 3443 | `conversion_cclass.part01.test.ts` | `c_class_0002` | 性能测试 | 3/4 | h2dts parseClass：class-变量：char/long/long long/float 成员 的解析结果与性能。 |
| 3444 | `conversion_cclass.part01.test.ts` | `c_class_0003` | 性能测试 | 3/4 | h2dts parseClass：class-变量：unsigned int/short/wchar_t/size_t 成员 的解析结果与性能。 |
| 3445 | `conversion_cclass.part01.test.ts` | `c_class_0004` | 性能测试 | 3/4 | h2dts parseClass：class-变量：std::wstring/char16_t/char32_t/long double 成员 的解析结果与性能。 |
| 3446 | `conversion_cclass.part01.test.ts` | `c_class_0005` | 性能测试 | 3/4 | h2dts parseClass：class-变量：多维数组/定长数组成员 的解析结果与性能。 |
| 3447 | `conversion_cclass.part01.test.ts` | `c_class_0006` | 性能测试 | 3/4 | h2dts parseClass：class-变量：std 容器成员 的解析结果与性能。 |
| 3448 | `conversion_cclass.part01.test.ts` | `c_class_0007` | 性能测试 | 3/4 | h2dts parseClass：class-变量：指针成员 的解析结果与性能。 |
| 3449 | `conversion_cclass.part01.test.ts` | `c_class_0008` | 性能测试 | 3/4 | h2dts parseClass：class-变量：static 成员×3 的解析结果与性能。 |
| 3450 | `conversion_cclass.part01.test.ts` | `c_class_0009` | 性能测试 | 3/4 | h2dts parseClass：class-函数：方法返回/入参组合 的解析结果与性能。 |
| 3451 | `conversion_cclass.part01.test.ts` | `c_class_0010` | 性能测试 | 3/4 | h2dts parseClass：class-函数：基础类型方法矩阵 的解析结果与性能。 |
| 3452 | `conversion_cclass.part01.test.ts` | `c_class_0011` | 性能测试 | 3/4 | h2dts parseClass：class-函数：数组/容器入参方法 的解析结果与性能。 |
| 3453 | `conversion_cclass.part01.test.ts` | `c_class_0012` | 性能测试 | 3/4 | h2dts parseClass：namespace：域内 class（变量+函数） 的解析结果与性能。 |
| 3454 | `conversion_cclass.part01.test.ts` | `c_class_0013` | 性能测试 | 3/4 | h2dts parseClass：typedef class：类名+别名 的解析结果与性能。 |
| 3455 | `conversion_cclass.part01.test.ts` | `c_class_0014` | 性能测试 | 3/4 | h2dts parseClass：多 class：同文件 2 个 的解析结果与性能。 |
| 3456 | `conversion_cclass.part01.test.ts` | `c_class_0015` | 性能测试 | 3/4 | h2dts parseClass：class-函数：含空格签名方法 的解析结果与性能。 |
| 3457 | `conversion_cclass.part01.test.ts` | `c_class_0016` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：定宽整型 8 种 + float/double 的解析结果与性能。 |
| 3458 | `conversion_cclass.part01.test.ts` | `c_class_0017` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：8 种 std 容器成员 的解析结果与性能。 |
| 3459 | `conversion_cclass.part01.test.ts` | `c_class_0018` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-函数：容器/指针入参方法 的解析结果与性能。 |
| 3460 | `conversion_cclass.part01.test.ts` | `c_class_0019` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-规模：20 变量 + 5 方法 的解析结果与性能。 |
| 3461 | `conversion_cclass.part01.test.ts` | `c_class_0020` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-多声明：同文件 5 个 的解析结果与性能。 |
| 3462 | `conversion_cclass.part01.test.ts` | `c_class_0021` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-namespace：两层嵌套 的解析结果与性能。 |
| 3463 | `conversion_cclass.part01.test.ts` | `c_class_0022` | 性能测试 | 3/4 | h2dts parseClass：扩充-class：static 成员 + 静态工厂 + typedef 的解析结果与性能。 |
| 3464 | `conversion_cclass.part01.test.ts` | `c_class_0023` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：5 种指针成员 的解析结果与性能。 |
| 3465 | `conversion_cclass.part01.test.ts` | `c_class_0024` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-变量：数组/容器/多维混合 的解析结果与性能。 |
| 3466 | `conversion_cclass.part01.test.ts` | `c_class_0025` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-函数：5 个同型方法 的解析结果与性能。 |
| 3467 | `conversion_cclass.part01.test.ts` | `c_class_0026` | 性能测试 | 3/4 | h2dts parseClass：扩充-class-函数：引用/指针参数 的解析结果与性能。 |
| 3468 | `conversion_cclass.part01.test.ts` | `c_class_0027` | 性能测试 | 3/4 | h2dts parseClass：扩充-class：全 static 成员与方法 的解析结果与性能。 |
| 3469 | `conversion_cclass.part02.test.ts` | `c_class_0028` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int/char/short/long/long/float 等） 的解析结果与性能。 |
| 3470 | `conversion_cclass.part02.test.ts` | `c_class_0029` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（double/bool/unsigned/unsigned/unsigned/unsigned 等） 的解析结果与性能。 |
| 3471 | `conversion_cclass.part02.test.ts` | `c_class_0030` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/signed/signed/signed/wchar_t/char16_t 等） 的解析结果与性能。 |
| 3472 | `conversion_cclass.part02.test.ts` | `c_class_0031` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（char32_t/size_t/int8_t/int16_t/int32_t/int64_t 等） 的解析结果与性能。 |
| 3473 | `conversion_cclass.part02.test.ts` | `c_class_0032` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint8_t/uint16_t/uint32_t/uint64_t/std::string/string 等） 的解析结果与性能。 |
| 3474 | `conversion_cclass.part02.test.ts` | `c_class_0033` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::wstring/long/void/std::vector<int>/std::vector<std::string>/std::vector<double> 等） 的解析结果与性能。 |
| 3475 | `conversion_cclass.part02.test.ts` | `c_class_0034` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<bool>/std::map<std::string,int>/std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int> 等） 的解析结果与性能。 |
| 3476 | `conversion_cclass.part02.test.ts` | `c_class_0035` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::list<std::string>/std::deque<int>/std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int> 等） 的解析结果与性能。 |
| 3477 | `conversion_cclass.part02.test.ts` | `c_class_0036` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::tuple<std::string,int,double>/std::queue<int>/std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int> 等） 的解析结果与性能。 |
| 3478 | `conversion_cclass.part02.test.ts` | `c_class_0037` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5> 等） 的解析结果与性能。 |
| 3479 | `conversion_cclass.part02.test.ts` | `c_class_0038` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::forward_list<int>/std::valarray<double>/std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int 等） 的解析结果与性能。 |
| 3480 | `conversion_cclass.part02.test.ts` | `c_class_0039` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（char/short/long/long/float/double 等） 的解析结果与性能。 |
| 3481 | `conversion_cclass.part02.test.ts` | `c_class_0040` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（bool/unsigned/unsigned/unsigned/unsigned/unsigned 等） 的解析结果与性能。 |
| 3482 | `conversion_cclass.part02.test.ts` | `c_class_0041` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（signed/signed/signed/wchar_t/char16_t/char32_t 等） 的解析结果与性能。 |
| 3483 | `conversion_cclass.part02.test.ts` | `c_class_0042` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（size_t/int8_t/int16_t/int32_t/int64_t/uint8_t 等） 的解析结果与性能。 |
| 3484 | `conversion_cclass.part02.test.ts` | `c_class_0043` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint16_t/uint32_t/uint64_t/std::string/string/std::wstring 等） 的解析结果与性能。 |
| 3485 | `conversion_cclass.part02.test.ts` | `c_class_0044` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（long/void/std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool> 等） 的解析结果与性能。 |
| 3486 | `conversion_cclass.part02.test.ts` | `c_class_0045` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::map<std::string,int>/std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string> 等） 的解析结果与性能。 |
| 3487 | `conversion_cclass.part02.test.ts` | `c_class_0046` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::deque<int>/std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double> 等） 的解析结果与性能。 |
| 3488 | `conversion_cclass.part02.test.ts` | `c_class_0047` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::queue<int>/std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int> 等） 的解析结果与性能。 |
| 3489 | `conversion_cclass.part02.test.ts` | `c_class_0048` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int> 等） 的解析结果与性能。 |
| 3490 | `conversion_cclass.part02.test.ts` | `c_class_0049` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::valarray<double>/std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int/char 等） 的解析结果与性能。 |
| 3491 | `conversion_cclass.part02.test.ts` | `c_class_0050` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（short/long/long/float/double/bool 等） 的解析结果与性能。 |
| 3492 | `conversion_cclass.part02.test.ts` | `c_class_0051` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/unsigned/unsigned/signed 等） 的解析结果与性能。 |
| 3493 | `conversion_cclass.part02.test.ts` | `c_class_0052` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（signed/signed/wchar_t/char16_t/char32_t/size_t 等） 的解析结果与性能。 |
| 3494 | `conversion_cclass.part02.test.ts` | `c_class_0053` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int8_t/int16_t/int32_t/int64_t/uint8_t/uint16_t 等） 的解析结果与性能。 |
| 3495 | `conversion_cclass.part02.test.ts` | `c_class_0054` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint32_t/uint64_t/std::string/string/std::wstring/long 等） 的解析结果与性能。 |
| 3496 | `conversion_cclass.part02.test.ts` | `c_class_0055` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（void/std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int> 等） 的解析结果与性能。 |
| 3497 | `conversion_cclass.part02.test.ts` | `c_class_0056` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::map<int,std::string>/std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int> 等） 的解析结果与性能。 |
| 3498 | `conversion_cclass.part02.test.ts` | `c_class_0057` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::deque<std::string>/std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int> 等） 的解析结果与性能。 |
| 3499 | `conversion_cclass.part02.test.ts` | `c_class_0058` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::stack<int>/std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int> 等） 的解析结果与性能。 |
| 3500 | `conversion_cclass.part02.test.ts` | `c_class_0059` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_multimap<int,int>/std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double> 等） 的解析结果与性能。 |
| 3501 | `conversion_cclass.part02.test.ts` | `c_class_0060` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::complex<double>/std::function<int(int,int)>/std::function<void(std::string)>/int/char/short 等） 的解析结果与性能。 |
| 3502 | `conversion_cclass.part02.test.ts` | `c_class_0061` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（long/long/float/double/bool/unsigned 等） 的解析结果与性能。 |
| 3503 | `conversion_cclass.part02.test.ts` | `c_class_0062` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/unsigned/signed/signed 等） 的解析结果与性能。 |
| 3504 | `conversion_cclass.part02.test.ts` | `c_class_0063` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（signed/wchar_t/char16_t/char32_t/size_t/int8_t 等） 的解析结果与性能。 |
| 3505 | `conversion_cclass.part02.test.ts` | `c_class_0064` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int16_t/int32_t/int64_t/uint8_t/uint16_t/uint32_t 等） 的解析结果与性能。 |
| 3506 | `conversion_cclass.part03.test.ts` | `c_class_0065` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（uint64_t/std::string/string/std::wstring/long/void 等） 的解析结果与性能。 |
| 3507 | `conversion_cclass.part03.test.ts` | `c_class_0066` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<int>/std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int>/std::map<int,std::string> 等） 的解析结果与性能。 |
| 3508 | `conversion_cclass.part03.test.ts` | `c_class_0067` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::set<int>/std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int>/std::deque<std::string> 等） 的解析结果与性能。 |
| 3509 | `conversion_cclass.part03.test.ts` | `c_class_0068` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::pair<int,int>/std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int>/std::stack<int> 等） 的解析结果与性能。 |
| 3510 | `conversion_cclass.part03.test.ts` | `c_class_0069` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::priority_queue<int>/std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int> 等） 的解析结果与性能。 |
| 3511 | `conversion_cclass.part03.test.ts` | `c_class_0070` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::unordered_multiset<int>/std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double>/std::complex<double> 等） 的解析结果与性能。 |
| 3512 | `conversion_cclass.part03.test.ts` | `c_class_0071` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::function<int(int,int)>/std::function<void(std::string)>/int/char/short/long 等） 的解析结果与性能。 |
| 3513 | `conversion_cclass.part03.test.ts` | `c_class_0072` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（long/float/double/bool/unsigned/unsigned 等） 的解析结果与性能。 |
| 3514 | `conversion_cclass.part03.test.ts` | `c_class_0073` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/unsigned/signed/signed/signed 等） 的解析结果与性能。 |
| 3515 | `conversion_cclass.part03.test.ts` | `c_class_0074` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（wchar_t/char16_t/char32_t/size_t/int8_t/int16_t 等） 的解析结果与性能。 |
| 3516 | `conversion_cclass.part03.test.ts` | `c_class_0075` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int32_t/int64_t/uint8_t/uint16_t/uint32_t/uint64_t 等） 的解析结果与性能。 |
| 3517 | `conversion_cclass.part03.test.ts` | `c_class_0076` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::string/string/std::wstring/long/void/std::vector<int> 等） 的解析结果与性能。 |
| 3518 | `conversion_cclass.part03.test.ts` | `c_class_0077` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::vector<std::string>/std::vector<double>/std::vector<bool>/std::map<std::string,int>/std::map<int,std::string>/std::set<int> 等） 的解析结果与性能。 |
| 3519 | `conversion_cclass.part03.test.ts` | `c_class_0078` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::set<std::string>/std::list<int>/std::list<std::string>/std::deque<int>/std::deque<std::string>/std::pair<int,int> 等） 的解析结果与性能。 |
| 3520 | `conversion_cclass.part03.test.ts` | `c_class_0079` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::pair<std::string,int>/std::tuple<int,int,int>/std::tuple<std::string,int,double>/std::queue<int>/std::stack<int>/std::priority_queue<int> 等） 的解析结果与性能。 |
| 3521 | `conversion_cclass.part03.test.ts` | `c_class_0080` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::multimap<int,int>/std::multiset<int>/std::unordered_map<std::string,int>/std::unordered_set<int>/std::unordered_multimap<int,int>/std::unordered_multiset<int> 等） 的解析结果与性能。 |
| 3522 | `conversion_cclass.part03.test.ts` | `c_class_0081` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::array<int,10>/std::array<std::string,5>/std::forward_list<int>/std::valarray<double>/std::complex<double>/std::function<int(int,int)> 等） 的解析结果与性能。 |
| 3523 | `conversion_cclass.part03.test.ts` | `c_class_0082` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（std::function<void(std::string)>/int/char/short/long/long 等） 的解析结果与性能。 |
| 3524 | `conversion_cclass.part03.test.ts` | `c_class_0083` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（float/double/bool/unsigned/unsigned/unsigned 等） 的解析结果与性能。 |
| 3525 | `conversion_cclass.part03.test.ts` | `c_class_0084` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（unsigned/unsigned/signed/signed/signed/wchar_t 等） 的解析结果与性能。 |
| 3526 | `conversion_cclass.part03.test.ts` | `c_class_0085` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（char16_t/char32_t/size_t/int8_t/int16_t/int32_t 等） 的解析结果与性能。 |
| 3527 | `conversion_cclass.part03.test.ts` | `c_class_0086` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（int64_t/uint8_t/uint16_t/uint32_t/uint64_t/std::string 等） 的解析结果与性能。 |
| 3528 | `conversion_cclass.part03.test.ts` | `c_class_0087` | 性能测试 | 3/4 | h2dts parseClass：扩充-成员矩阵：6 成员（string/std::wstring/long/void/std::vector<int>/std::vector<std::string> 等） 的解析结果与性能。 |
| 3529 | `conversion_cclass.part03.test.ts` | `c_class_0088` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3530 | `conversion_cclass.part03.test.ts` | `c_class_0089` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3531 | `conversion_cclass.part03.test.ts` | `c_class_0090` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3532 | `conversion_cclass.part03.test.ts` | `c_class_0091` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3533 | `conversion_cclass.part03.test.ts` | `c_class_0092` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3534 | `conversion_cclass.part03.test.ts` | `c_class_0093` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3535 | `conversion_cclass.part03.test.ts` | `c_class_0094` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3536 | `conversion_cclass.part03.test.ts` | `c_class_0095` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3537 | `conversion_cclass.part03.test.ts` | `c_class_0096` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3538 | `conversion_cclass.part03.test.ts` | `c_class_0097` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3539 | `conversion_cclass.part03.test.ts` | `c_class_0098` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3540 | `conversion_cclass.part03.test.ts` | `c_class_0099` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3541 | `conversion_cclass.part03.test.ts` | `c_class_0100` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3542 | `conversion_cclass.part03.test.ts` | `c_class_0101` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3543 | `conversion_cclass.part04.test.ts` | `c_class_0102` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3544 | `conversion_cclass.part04.test.ts` | `c_class_0103` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3545 | `conversion_cclass.part04.test.ts` | `c_class_0104` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3546 | `conversion_cclass.part04.test.ts` | `c_class_0105` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3547 | `conversion_cclass.part04.test.ts` | `c_class_0106` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3548 | `conversion_cclass.part04.test.ts` | `c_class_0107` | 性能测试 | 3/4 | h2dts parseClass：扩充-容器成员矩阵：6 容器成员 的解析结果与性能。 |
| 3549 | `conversion_cclass.part04.test.ts` | `c_class_0108` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3550 | `conversion_cclass.part04.test.ts` | `c_class_0109` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3551 | `conversion_cclass.part04.test.ts` | `c_class_0110` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3552 | `conversion_cclass.part04.test.ts` | `c_class_0111` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3553 | `conversion_cclass.part04.test.ts` | `c_class_0112` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3554 | `conversion_cclass.part04.test.ts` | `c_class_0113` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3555 | `conversion_cclass.part04.test.ts` | `c_class_0114` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3556 | `conversion_cclass.part04.test.ts` | `c_class_0115` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3557 | `conversion_cclass.part04.test.ts` | `c_class_0116` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3558 | `conversion_cclass.part04.test.ts` | `c_class_0117` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3559 | `conversion_cclass.part04.test.ts` | `c_class_0118` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3560 | `conversion_cclass.part04.test.ts` | `c_class_0119` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3561 | `conversion_cclass.part04.test.ts` | `c_class_0120` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3562 | `conversion_cclass.part04.test.ts` | `c_class_0121` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3563 | `conversion_cclass.part04.test.ts` | `c_class_0122` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3564 | `conversion_cclass.part04.test.ts` | `c_class_0123` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3565 | `conversion_cclass.part04.test.ts` | `c_class_0124` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3566 | `conversion_cclass.part04.test.ts` | `c_class_0125` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3567 | `conversion_cclass.part04.test.ts` | `c_class_0126` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3568 | `conversion_cclass.part04.test.ts` | `c_class_0127` | 性能测试 | 3/4 | h2dts parseClass：扩充-数组/指针成员：6 种 的解析结果与性能。 |
| 3569 | `conversion_cclass.part04.test.ts` | `c_class_0128` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3570 | `conversion_cclass.part04.test.ts` | `c_class_0129` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3571 | `conversion_cclass.part04.test.ts` | `c_class_0130` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3572 | `conversion_cclass.part04.test.ts` | `c_class_0131` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3573 | `conversion_cclass.part04.test.ts` | `c_class_0132` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3574 | `conversion_cclass.part04.test.ts` | `c_class_0133` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3575 | `conversion_cclass.part04.test.ts` | `c_class_0134` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3576 | `conversion_cclass.part04.test.ts` | `c_class_0135` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3577 | `conversion_cclass.part04.test.ts` | `c_class_0136` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3578 | `conversion_cclass.part04.test.ts` | `c_class_0137` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3579 | `conversion_cclass.part05.test.ts` | `c_class_0138` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3580 | `conversion_cclass.part05.test.ts` | `c_class_0139` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3581 | `conversion_cclass.part05.test.ts` | `c_class_0140` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3582 | `conversion_cclass.part05.test.ts` | `c_class_0141` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3583 | `conversion_cclass.part05.test.ts` | `c_class_0142` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3584 | `conversion_cclass.part05.test.ts` | `c_class_0143` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3585 | `conversion_cclass.part05.test.ts` | `c_class_0144` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3586 | `conversion_cclass.part05.test.ts` | `c_class_0145` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3587 | `conversion_cclass.part05.test.ts` | `c_class_0146` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3588 | `conversion_cclass.part05.test.ts` | `c_class_0147` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法返回矩阵：6 方法 的解析结果与性能。 |
| 3589 | `conversion_cclass.part05.test.ts` | `c_class_0148` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3590 | `conversion_cclass.part05.test.ts` | `c_class_0149` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3591 | `conversion_cclass.part05.test.ts` | `c_class_0150` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3592 | `conversion_cclass.part05.test.ts` | `c_class_0151` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3593 | `conversion_cclass.part05.test.ts` | `c_class_0152` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3594 | `conversion_cclass.part05.test.ts` | `c_class_0153` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3595 | `conversion_cclass.part05.test.ts` | `c_class_0154` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3596 | `conversion_cclass.part05.test.ts` | `c_class_0155` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3597 | `conversion_cclass.part05.test.ts` | `c_class_0156` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3598 | `conversion_cclass.part05.test.ts` | `c_class_0157` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3599 | `conversion_cclass.part05.test.ts` | `c_class_0158` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3600 | `conversion_cclass.part05.test.ts` | `c_class_0159` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3601 | `conversion_cclass.part05.test.ts` | `c_class_0160` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3602 | `conversion_cclass.part05.test.ts` | `c_class_0161` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3603 | `conversion_cclass.part05.test.ts` | `c_class_0162` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3604 | `conversion_cclass.part05.test.ts` | `c_class_0163` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3605 | `conversion_cclass.part05.test.ts` | `c_class_0164` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3606 | `conversion_cclass.part05.test.ts` | `c_class_0165` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3607 | `conversion_cclass.part05.test.ts` | `c_class_0166` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3608 | `conversion_cclass.part05.test.ts` | `c_class_0167` | 性能测试 | 3/4 | h2dts parseClass：扩充-方法入参矩阵：6 方法 的解析结果与性能。 |
| 3609 | `conversion_cclass.part05.test.ts` | `c_class_0168` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：5 成员 的解析结果与性能。 |
| 3610 | `conversion_cclass.part06.test.ts` | `c_class_0169` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：10 成员 的解析结果与性能。 |
| 3611 | `conversion_cclass.part06.test.ts` | `c_class_0170` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：15 成员 的解析结果与性能。 |
| 3612 | `conversion_cclass.part06.test.ts` | `c_class_0171` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：20 成员 的解析结果与性能。 |
| 3613 | `conversion_cclass.part06.test.ts` | `c_class_0172` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：25 成员 的解析结果与性能。 |
| 3614 | `conversion_cclass.part06.test.ts` | `c_class_0173` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：30 成员 的解析结果与性能。 |
| 3615 | `conversion_cclass.part06.test.ts` | `c_class_0174` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：35 成员 的解析结果与性能。 |
| 3616 | `conversion_cclass.part06.test.ts` | `c_class_0175` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：40 成员 的解析结果与性能。 |
| 3617 | `conversion_cclass.part06.test.ts` | `c_class_0176` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：45 成员 的解析结果与性能。 |
| 3618 | `conversion_cclass.part06.test.ts` | `c_class_0177` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：50 成员 的解析结果与性能。 |
| 3619 | `conversion_cclass.part06.test.ts` | `c_class_0178` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：55 成员 的解析结果与性能。 |
| 3620 | `conversion_cclass.part06.test.ts` | `c_class_0179` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：60 成员 的解析结果与性能。 |
| 3621 | `conversion_cclass.part06.test.ts` | `c_class_0180` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：65 成员 的解析结果与性能。 |
| 3622 | `conversion_cclass.part07.test.ts` | `c_class_0181` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：70 成员 的解析结果与性能。 |
| 3623 | `conversion_cclass.part07.test.ts` | `c_class_0182` | 性能测试 | 3/4 | h2dts parseClass：扩充-规模：75 成员 的解析结果与性能。 |
| 3624 | `conversion_cclass.part07.test.ts` | `c_class_0183` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 2 个 的解析结果与性能。 |
| 3625 | `conversion_cclass.part07.test.ts` | `c_class_0184` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 3 个 的解析结果与性能。 |
| 3626 | `conversion_cclass.part07.test.ts` | `c_class_0185` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 4 个 的解析结果与性能。 |
| 3627 | `conversion_cclass.part07.test.ts` | `c_class_0186` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 5 个 的解析结果与性能。 |
| 3628 | `conversion_cclass.part07.test.ts` | `c_class_0187` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 6 个 的解析结果与性能。 |
| 3629 | `conversion_cclass.part07.test.ts` | `c_class_0188` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 7 个 的解析结果与性能。 |
| 3630 | `conversion_cclass.part07.test.ts` | `c_class_0189` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 8 个 的解析结果与性能。 |
| 3631 | `conversion_cclass.part07.test.ts` | `c_class_0190` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 10 个 的解析结果与性能。 |
| 3632 | `conversion_cclass.part07.test.ts` | `c_class_0191` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 12 个 的解析结果与性能。 |
| 3633 | `conversion_cclass.part07.test.ts` | `c_class_0192` | 性能测试 | 3/4 | h2dts parseClass：扩充-多类：同文件 15 个 的解析结果与性能。 |
| 3634 | `conversion_cclass.part07.test.ts` | `c_class_0193` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 3635 | `conversion_cclass.part07.test.ts` | `c_class_0194` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 3636 | `conversion_cclass.part07.test.ts` | `c_class_0195` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 3637 | `conversion_cclass.part07.test.ts` | `c_class_0196` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 3638 | `conversion_cclass.part07.test.ts` | `c_class_0197` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 3639 | `conversion_cclass.part07.test.ts` | `c_class_0198` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 3640 | `conversion_cclass.part07.test.ts` | `c_class_0199` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 3641 | `conversion_cclass.part07.test.ts` | `c_class_0200` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 3642 | `conversion_cclass.part07.test.ts` | `c_class_0201` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 3643 | `conversion_cclass.part07.test.ts` | `c_class_0202` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 3644 | `conversion_cclass.part07.test.ts` | `c_class_0203` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 3645 | `conversion_cclass.part07.test.ts` | `c_class_0204` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 3646 | `conversion_cclass.part07.test.ts` | `c_class_0205` | 性能测试 | 3/4 | h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。 |
| 3647 | `conversion_cclass.part07.test.ts` | `c_class_0206` | 性能测试 | 3/4 | h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。 |
| 3648 | `conversion_cclass.part07.test.ts` | `c_class_0207` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。 |
| 3649 | `conversion_cclass.part08.test.ts` | `c_class_0208` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Alpha0 的解析结果与性能。 |
| 3650 | `conversion_cclass.part08.test.ts` | `c_class_0209` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Beta1 的解析结果与性能。 |
| 3651 | `conversion_cclass.part08.test.ts` | `c_class_0210` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Gamma2 的解析结果与性能。 |
| 3652 | `conversion_cclass.part08.test.ts` | `c_class_0211` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Delta3 的解析结果与性能。 |
| 3653 | `conversion_cclass.part08.test.ts` | `c_class_0212` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Epsilon4 的解析结果与性能。 |
| 3654 | `conversion_cclass.part08.test.ts` | `c_class_0213` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Zeta5 的解析结果与性能。 |
| 3655 | `conversion_cclass.part08.test.ts` | `c_class_0214` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Eta6 的解析结果与性能。 |
| 3656 | `conversion_cclass.part08.test.ts` | `c_class_0215` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Theta7 的解析结果与性能。 |
| 3657 | `conversion_cclass.part08.test.ts` | `c_class_0216` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Iota8 的解析结果与性能。 |
| 3658 | `conversion_cclass.part08.test.ts` | `c_class_0217` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Kappa9 的解析结果与性能。 |
| 3659 | `conversion_cclass.part08.test.ts` | `c_class_0218` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Lambda10 的解析结果与性能。 |
| 3660 | `conversion_cclass.part08.test.ts` | `c_class_0219` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Mu11 的解析结果与性能。 |
| 3661 | `conversion_cclass.part08.test.ts` | `c_class_0220` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Nu12 的解析结果与性能。 |
| 3662 | `conversion_cclass.part08.test.ts` | `c_class_0221` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Xi13 的解析结果与性能。 |
| 3663 | `conversion_cclass.part08.test.ts` | `c_class_0222` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Omicron14 的解析结果与性能。 |
| 3664 | `conversion_cclass.part08.test.ts` | `c_class_0223` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Pi15 的解析结果与性能。 |
| 3665 | `conversion_cclass.part08.test.ts` | `c_class_0224` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Rho16 的解析结果与性能。 |
| 3666 | `conversion_cclass.part08.test.ts` | `c_class_0225` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Sigma17 的解析结果与性能。 |
| 3667 | `conversion_cclass.part08.test.ts` | `c_class_0226` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Tau18 的解析结果与性能。 |
| 3668 | `conversion_cclass.part08.test.ts` | `c_class_0227` | 性能测试 | 3/4 | h2dts parseClass：扩充-类名变体：Upsilon19 的解析结果与性能。 |
| 3669 | `conversion_cclass.part08.test.ts` | `c_class_0228` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：空类 的解析结果与性能。 |
| 3670 | `conversion_cclass.part08.test.ts` | `c_class_0229` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：单行类 的解析结果与性能。 |
| 3671 | `conversion_cclass.part08.test.ts` | `c_class_0230` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：注释类 的解析结果与性能。 |
| 3672 | `conversion_cclass.part08.test.ts` | `c_class_0231` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：索引成员 的解析结果与性能。 |
| 3673 | `conversion_cclass.part08.test.ts` | `c_class_0232` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：私有公有 的解析结果与性能。 |
| 3674 | `conversion_cclass.part08.test.ts` | `c_class_0233` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：嵌套方法参数 的解析结果与性能。 |
| 3675 | `conversion_cclass.part08.test.ts` | `c_class_0234` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：三方法 的解析结果与性能。 |
| 3676 | `conversion_cclass.part08.test.ts` | `c_class_0235` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：混合成员 的解析结果与性能。 |
| 3677 | `conversion_cclass.part08.test.ts` | `c_class_0236` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：多数组 的解析结果与性能。 |
| 3678 | `conversion_cclass.part08.test.ts` | `c_class_0237` | 性能测试 | 3/4 | h2dts parseClass：扩充-边界：引用成员方法 的解析结果与性能。 |
| 3679 | `conversion_cclass.part09.test.ts` | `c_class_0238` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3680 | `conversion_cclass.part09.test.ts` | `c_class_0239` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3681 | `conversion_cclass.part09.test.ts` | `c_class_0240` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3682 | `conversion_cclass.part09.test.ts` | `c_class_0241` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3683 | `conversion_cclass.part09.test.ts` | `c_class_0242` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3684 | `conversion_cclass.part09.test.ts` | `c_class_0243` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3685 | `conversion_cclass.part09.test.ts` | `c_class_0244` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3686 | `conversion_cclass.part09.test.ts` | `c_class_0245` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3687 | `conversion_cclass.part09.test.ts` | `c_class_0246` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3688 | `conversion_cclass.part09.test.ts` | `c_class_0247` | 性能测试 | 3/4 | h2dts parseClass：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3689 | `conversion_cstruct.part01.test.ts` | `c_struct_0001` | 性能测试 | 3/4 | h2dts parseStruct：struct：成员×3 + 方法×1 的解析结果与性能。 |
| 3690 | `conversion_cstruct.part01.test.ts` | `c_struct_0002` | 性能测试 | 3/4 | h2dts parseStruct：struct：std::string 成员 + 方法 的解析结果与性能。 |
| 3691 | `conversion_cstruct.part01.test.ts` | `c_struct_0003` | 性能测试 | 3/4 | h2dts parseStruct：struct：多维数组成员 的解析结果与性能。 |
| 3692 | `conversion_cstruct.part01.test.ts` | `c_struct_0004` | 性能测试 | 3/4 | h2dts parseStruct：struct：容器/指针成员 的解析结果与性能。 |
| 3693 | `conversion_cstruct.part01.test.ts` | `c_struct_0005` | 性能测试 | 3/4 | h2dts parseStruct：struct：匿名 + 别名 的解析结果与性能。 |
| 3694 | `conversion_cstruct.part01.test.ts` | `c_struct_0006` | 性能测试 | 3/4 | h2dts parseStruct：struct：非 typedef 具名 的解析结果与性能。 |
| 3695 | `conversion_cstruct.part01.test.ts` | `c_struct_0007` | 性能测试 | 3/4 | h2dts parseStruct：struct：成员 + 双方法 的解析结果与性能。 |
| 3696 | `conversion_cstruct.part01.test.ts` | `c_struct_0008` | 性能测试 | 3/4 | h2dts parseStruct：namespace：域内 struct 的解析结果与性能。 |
| 3697 | `conversion_cstruct.part01.test.ts` | `c_struct_0009` | 性能测试 | 3/4 | h2dts parseStruct：多 struct：同文件 2 个 的解析结果与性能。 |
| 3698 | `conversion_cstruct.part01.test.ts` | `c_struct_0010` | 性能测试 | 3/4 | h2dts parseStruct：struct：10 基础类型成员 的解析结果与性能。 |
| 3699 | `conversion_cstruct.part01.test.ts` | `c_struct_0011` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：12 基础类型成员 的解析结果与性能。 |
| 3700 | `conversion_cstruct.part01.test.ts` | `c_struct_0012` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：6 种数组/多维成员 的解析结果与性能。 |
| 3701 | `conversion_cstruct.part01.test.ts` | `c_struct_0013` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：5 种容器成员 的解析结果与性能。 |
| 3702 | `conversion_cstruct.part01.test.ts` | `c_struct_0014` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct-多声明：同文件 4 个 的解析结果与性能。 |
| 3703 | `conversion_cstruct.part01.test.ts` | `c_struct_0015` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：3 种函数指针成员 的解析结果与性能。 |
| 3704 | `conversion_cstruct.part01.test.ts` | `c_struct_0016` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct-规模：20 成员 + 2 方法 的解析结果与性能。 |
| 3705 | `conversion_cstruct.part01.test.ts` | `c_struct_0017` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：几何体成员 + 3 方法 的解析结果与性能。 |
| 3706 | `conversion_cstruct.part01.test.ts` | `c_struct_0018` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct-namespace：两层嵌套 的解析结果与性能。 |
| 3707 | `conversion_cstruct.part01.test.ts` | `c_struct_0019` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：8 种混合成员 的解析结果与性能。 |
| 3708 | `conversion_cstruct.part01.test.ts` | `c_struct_0020` | 性能测试 | 3/4 | h2dts parseStruct：扩充-struct：成员 + 4 方法 的解析结果与性能。 |
| 3709 | `conversion_cstruct.part02.test.ts` | `c_struct_0021` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3710 | `conversion_cstruct.part02.test.ts` | `c_struct_0022` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3711 | `conversion_cstruct.part02.test.ts` | `c_struct_0023` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3712 | `conversion_cstruct.part02.test.ts` | `c_struct_0024` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3713 | `conversion_cstruct.part02.test.ts` | `c_struct_0025` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3714 | `conversion_cstruct.part02.test.ts` | `c_struct_0026` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3715 | `conversion_cstruct.part02.test.ts` | `c_struct_0027` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3716 | `conversion_cstruct.part02.test.ts` | `c_struct_0028` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3717 | `conversion_cstruct.part02.test.ts` | `c_struct_0029` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3718 | `conversion_cstruct.part02.test.ts` | `c_struct_0030` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3719 | `conversion_cstruct.part02.test.ts` | `c_struct_0031` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3720 | `conversion_cstruct.part02.test.ts` | `c_struct_0032` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3721 | `conversion_cstruct.part02.test.ts` | `c_struct_0033` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3722 | `conversion_cstruct.part02.test.ts` | `c_struct_0034` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3723 | `conversion_cstruct.part02.test.ts` | `c_struct_0035` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3724 | `conversion_cstruct.part02.test.ts` | `c_struct_0036` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3725 | `conversion_cstruct.part02.test.ts` | `c_struct_0037` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3726 | `conversion_cstruct.part02.test.ts` | `c_struct_0038` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3727 | `conversion_cstruct.part02.test.ts` | `c_struct_0039` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3728 | `conversion_cstruct.part02.test.ts` | `c_struct_0040` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3729 | `conversion_cstruct.part02.test.ts` | `c_struct_0041` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3730 | `conversion_cstruct.part02.test.ts` | `c_struct_0042` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3731 | `conversion_cstruct.part02.test.ts` | `c_struct_0043` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3732 | `conversion_cstruct.part02.test.ts` | `c_struct_0044` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3733 | `conversion_cstruct.part02.test.ts` | `c_struct_0045` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3734 | `conversion_cstruct.part02.test.ts` | `c_struct_0046` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3735 | `conversion_cstruct.part02.test.ts` | `c_struct_0047` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3736 | `conversion_cstruct.part02.test.ts` | `c_struct_0048` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3737 | `conversion_cstruct.part02.test.ts` | `c_struct_0049` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3738 | `conversion_cstruct.part02.test.ts` | `c_struct_0050` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3739 | `conversion_cstruct.part02.test.ts` | `c_struct_0051` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3740 | `conversion_cstruct.part02.test.ts` | `c_struct_0052` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3741 | `conversion_cstruct.part02.test.ts` | `c_struct_0053` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3742 | `conversion_cstruct.part02.test.ts` | `c_struct_0054` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3743 | `conversion_cstruct.part02.test.ts` | `c_struct_0055` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3744 | `conversion_cstruct.part02.test.ts` | `c_struct_0056` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3745 | `conversion_cstruct.part02.test.ts` | `c_struct_0057` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3746 | `conversion_cstruct.part02.test.ts` | `c_struct_0058` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3747 | `conversion_cstruct.part02.test.ts` | `c_struct_0059` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3748 | `conversion_cstruct.part02.test.ts` | `c_struct_0060` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3749 | `conversion_cstruct.part02.test.ts` | `c_struct_0061` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3750 | `conversion_cstruct.part03.test.ts` | `c_struct_0062` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3751 | `conversion_cstruct.part03.test.ts` | `c_struct_0063` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3752 | `conversion_cstruct.part03.test.ts` | `c_struct_0064` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3753 | `conversion_cstruct.part03.test.ts` | `c_struct_0065` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3754 | `conversion_cstruct.part03.test.ts` | `c_struct_0066` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3755 | `conversion_cstruct.part03.test.ts` | `c_struct_0067` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3756 | `conversion_cstruct.part03.test.ts` | `c_struct_0068` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3757 | `conversion_cstruct.part03.test.ts` | `c_struct_0069` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3758 | `conversion_cstruct.part03.test.ts` | `c_struct_0070` | 性能测试 | 3/4 | h2dts parseStruct：扩充-成员矩阵：6 成员 的解析结果与性能。 |
| 3759 | `conversion_cstruct.part03.test.ts` | `c_struct_0071` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3760 | `conversion_cstruct.part03.test.ts` | `c_struct_0072` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3761 | `conversion_cstruct.part03.test.ts` | `c_struct_0073` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3762 | `conversion_cstruct.part03.test.ts` | `c_struct_0074` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3763 | `conversion_cstruct.part03.test.ts` | `c_struct_0075` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3764 | `conversion_cstruct.part03.test.ts` | `c_struct_0076` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3765 | `conversion_cstruct.part03.test.ts` | `c_struct_0077` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3766 | `conversion_cstruct.part03.test.ts` | `c_struct_0078` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3767 | `conversion_cstruct.part03.test.ts` | `c_struct_0079` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3768 | `conversion_cstruct.part03.test.ts` | `c_struct_0080` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3769 | `conversion_cstruct.part03.test.ts` | `c_struct_0081` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3770 | `conversion_cstruct.part03.test.ts` | `c_struct_0082` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3771 | `conversion_cstruct.part03.test.ts` | `c_struct_0083` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3772 | `conversion_cstruct.part03.test.ts` | `c_struct_0084` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3773 | `conversion_cstruct.part03.test.ts` | `c_struct_0085` | 性能测试 | 3/4 | h2dts parseStruct：扩充-容器成员矩阵 的解析结果与性能。 |
| 3774 | `conversion_cstruct.part03.test.ts` | `c_struct_0086` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3775 | `conversion_cstruct.part03.test.ts` | `c_struct_0087` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3776 | `conversion_cstruct.part03.test.ts` | `c_struct_0088` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3777 | `conversion_cstruct.part03.test.ts` | `c_struct_0089` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3778 | `conversion_cstruct.part03.test.ts` | `c_struct_0090` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3779 | `conversion_cstruct.part03.test.ts` | `c_struct_0091` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3780 | `conversion_cstruct.part03.test.ts` | `c_struct_0092` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3781 | `conversion_cstruct.part03.test.ts` | `c_struct_0093` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3782 | `conversion_cstruct.part03.test.ts` | `c_struct_0094` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3783 | `conversion_cstruct.part03.test.ts` | `c_struct_0095` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3784 | `conversion_cstruct.part03.test.ts` | `c_struct_0096` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3785 | `conversion_cstruct.part03.test.ts` | `c_struct_0097` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3786 | `conversion_cstruct.part03.test.ts` | `c_struct_0098` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3787 | `conversion_cstruct.part03.test.ts` | `c_struct_0099` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3788 | `conversion_cstruct.part03.test.ts` | `c_struct_0100` | 性能测试 | 3/4 | h2dts parseStruct：扩充-数组/指针成员 的解析结果与性能。 |
| 3789 | `conversion_cstruct.part03.test.ts` | `c_struct_0101` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3790 | `conversion_cstruct.part03.test.ts` | `c_struct_0102` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3791 | `conversion_cstruct.part04.test.ts` | `c_struct_0103` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3792 | `conversion_cstruct.part04.test.ts` | `c_struct_0104` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3793 | `conversion_cstruct.part04.test.ts` | `c_struct_0105` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3794 | `conversion_cstruct.part04.test.ts` | `c_struct_0106` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3795 | `conversion_cstruct.part04.test.ts` | `c_struct_0107` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3796 | `conversion_cstruct.part04.test.ts` | `c_struct_0108` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3797 | `conversion_cstruct.part04.test.ts` | `c_struct_0109` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3798 | `conversion_cstruct.part04.test.ts` | `c_struct_0110` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3799 | `conversion_cstruct.part04.test.ts` | `c_struct_0111` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3800 | `conversion_cstruct.part04.test.ts` | `c_struct_0112` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3801 | `conversion_cstruct.part04.test.ts` | `c_struct_0113` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3802 | `conversion_cstruct.part04.test.ts` | `c_struct_0114` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3803 | `conversion_cstruct.part04.test.ts` | `c_struct_0115` | 性能测试 | 3/4 | h2dts parseStruct：扩充-方法返回矩阵 的解析结果与性能。 |
| 3804 | `conversion_cstruct.part04.test.ts` | `c_struct_0116` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：5 成员 的解析结果与性能。 |
| 3805 | `conversion_cstruct.part04.test.ts` | `c_struct_0117` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：10 成员 的解析结果与性能。 |
| 3806 | `conversion_cstruct.part04.test.ts` | `c_struct_0118` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：15 成员 的解析结果与性能。 |
| 3807 | `conversion_cstruct.part04.test.ts` | `c_struct_0119` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：20 成员 的解析结果与性能。 |
| 3808 | `conversion_cstruct.part04.test.ts` | `c_struct_0120` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：25 成员 的解析结果与性能。 |
| 3809 | `conversion_cstruct.part04.test.ts` | `c_struct_0121` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：30 成员 的解析结果与性能。 |
| 3810 | `conversion_cstruct.part04.test.ts` | `c_struct_0122` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：35 成员 的解析结果与性能。 |
| 3811 | `conversion_cstruct.part04.test.ts` | `c_struct_0123` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：40 成员 的解析结果与性能。 |
| 3812 | `conversion_cstruct.part04.test.ts` | `c_struct_0124` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：45 成员 的解析结果与性能。 |
| 3813 | `conversion_cstruct.part04.test.ts` | `c_struct_0125` | 性能测试 | 3/4 | h2dts parseStruct：扩充-规模：50 成员 的解析结果与性能。 |
| 3814 | `conversion_cstruct.part04.test.ts` | `c_struct_0126` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 2 个 的解析结果与性能。 |
| 3815 | `conversion_cstruct.part04.test.ts` | `c_struct_0127` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 3 个 的解析结果与性能。 |
| 3816 | `conversion_cstruct.part04.test.ts` | `c_struct_0128` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 4 个 的解析结果与性能。 |
| 3817 | `conversion_cstruct.part04.test.ts` | `c_struct_0129` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 5 个 的解析结果与性能。 |
| 3818 | `conversion_cstruct.part05.test.ts` | `c_struct_0130` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 6 个 的解析结果与性能。 |
| 3819 | `conversion_cstruct.part05.test.ts` | `c_struct_0131` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 7 个 的解析结果与性能。 |
| 3820 | `conversion_cstruct.part05.test.ts` | `c_struct_0132` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 8 个 的解析结果与性能。 |
| 3821 | `conversion_cstruct.part05.test.ts` | `c_struct_0133` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 10 个 的解析结果与性能。 |
| 3822 | `conversion_cstruct.part05.test.ts` | `c_struct_0134` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 12 个 的解析结果与性能。 |
| 3823 | `conversion_cstruct.part05.test.ts` | `c_struct_0135` | 性能测试 | 3/4 | h2dts parseStruct：扩充-多 struct：同文件 15 个 的解析结果与性能。 |
| 3824 | `conversion_cstruct.part05.test.ts` | `c_struct_0136` | 性能测试 | 3/4 | h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。 |
| 3825 | `conversion_cstruct.part05.test.ts` | `c_struct_0137` | 性能测试 | 3/4 | h2dts parseStruct：扩充-匿名 struct 别名 的解析结果与性能。 |
| 3826 | `conversion_cstruct.part05.test.ts` | `c_struct_0138` | 性能测试 | 3/4 | h2dts parseStruct：扩充-函数指针成员 的解析结果与性能。 |
| 3827 | `conversion_cstruct.part05.test.ts` | `c_struct_0139` | 性能测试 | 3/4 | h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。 |
| 3828 | `conversion_cstruct.part05.test.ts` | `c_struct_0140` | 性能测试 | 3/4 | h2dts parseStruct：扩充-匿名 struct 别名 的解析结果与性能。 |
| 3829 | `conversion_cstruct.part05.test.ts` | `c_struct_0141` | 性能测试 | 3/4 | h2dts parseStruct：扩充-函数指针成员 的解析结果与性能。 |
| 3830 | `conversion_cstruct.part05.test.ts` | `c_struct_0142` | 性能测试 | 3/4 | h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。 |
| 3831 | `conversion_cstruct.part05.test.ts` | `c_struct_0143` | 性能测试 | 3/4 | h2dts parseStruct：扩充-匿名 struct 别名 的解析结果与性能。 |
| 3832 | `conversion_cstruct.part05.test.ts` | `c_struct_0144` | 性能测试 | 3/4 | h2dts parseStruct：扩充-函数指针成员 的解析结果与性能。 |
| 3833 | `conversion_cstruct.part05.test.ts` | `c_struct_0145` | 性能测试 | 3/4 | h2dts parseStruct：扩充-namespace 内 struct 的解析结果与性能。 |
| 3834 | `conversion_cstruct.part05.test.ts` | `c_struct_0146` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：AlphaSt0 的解析结果与性能。 |
| 3835 | `conversion_cstruct.part05.test.ts` | `c_struct_0147` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：BetaSt1 的解析结果与性能。 |
| 3836 | `conversion_cstruct.part05.test.ts` | `c_struct_0148` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：GammaSt2 的解析结果与性能。 |
| 3837 | `conversion_cstruct.part05.test.ts` | `c_struct_0149` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：DeltaSt3 的解析结果与性能。 |
| 3838 | `conversion_cstruct.part05.test.ts` | `c_struct_0150` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：EpsilonSt4 的解析结果与性能。 |
| 3839 | `conversion_cstruct.part05.test.ts` | `c_struct_0151` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：ZetaSt5 的解析结果与性能。 |
| 3840 | `conversion_cstruct.part05.test.ts` | `c_struct_0152` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：EtaSt6 的解析结果与性能。 |
| 3841 | `conversion_cstruct.part05.test.ts` | `c_struct_0153` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：ThetaSt7 的解析结果与性能。 |
| 3842 | `conversion_cstruct.part05.test.ts` | `c_struct_0154` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：IotaSt8 的解析结果与性能。 |
| 3843 | `conversion_cstruct.part05.test.ts` | `c_struct_0155` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：KappaSt9 的解析结果与性能。 |
| 3844 | `conversion_cstruct.part05.test.ts` | `c_struct_0156` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：LambdaSt10 的解析结果与性能。 |
| 3845 | `conversion_cstruct.part05.test.ts` | `c_struct_0157` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：MuSt11 的解析结果与性能。 |
| 3846 | `conversion_cstruct.part05.test.ts` | `c_struct_0158` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：NuSt12 的解析结果与性能。 |
| 3847 | `conversion_cstruct.part05.test.ts` | `c_struct_0159` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：XiSt13 的解析结果与性能。 |
| 3848 | `conversion_cstruct.part05.test.ts` | `c_struct_0160` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：OmicronSt14 的解析结果与性能。 |
| 3849 | `conversion_cstruct.part05.test.ts` | `c_struct_0161` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：PiSt15 的解析结果与性能。 |
| 3850 | `conversion_cstruct.part05.test.ts` | `c_struct_0162` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：RhoSt16 的解析结果与性能。 |
| 3851 | `conversion_cstruct.part05.test.ts` | `c_struct_0163` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：SigmaSt17 的解析结果与性能。 |
| 3852 | `conversion_cstruct.part05.test.ts` | `c_struct_0164` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：TauSt18 的解析结果与性能。 |
| 3853 | `conversion_cstruct.part05.test.ts` | `c_struct_0165` | 性能测试 | 3/4 | h2dts parseStruct：扩充-命名：UpsilonSt19 的解析结果与性能。 |
| 3854 | `conversion_cstruct.part05.test.ts` | `c_struct_0166` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：单成员 的解析结果与性能。 |
| 3855 | `conversion_cstruct.part05.test.ts` | `c_struct_0167` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：多数组 的解析结果与性能。 |
| 3856 | `conversion_cstruct.part05.test.ts` | `c_struct_0168` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：混合方法 的解析结果与性能。 |
| 3857 | `conversion_cstruct.part05.test.ts` | `c_struct_0169` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：长成员名 的解析结果与性能。 |
| 3858 | `conversion_cstruct.part06.test.ts` | `c_struct_0170` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：容器方法 的解析结果与性能。 |
| 3859 | `conversion_cstruct.part06.test.ts` | `c_struct_0171` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：三成员 的解析结果与性能。 |
| 3860 | `conversion_cstruct.part06.test.ts` | `c_struct_0172` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：注释 的解析结果与性能。 |
| 3861 | `conversion_cstruct.part06.test.ts` | `c_struct_0173` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：指针成员 的解析结果与性能。 |
| 3862 | `conversion_cstruct.part06.test.ts` | `c_struct_0174` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：多方法 的解析结果与性能。 |
| 3863 | `conversion_cstruct.part06.test.ts` | `c_struct_0175` | 性能测试 | 3/4 | h2dts parseStruct：扩充-边界：超大成员 的解析结果与性能。 |
| 3864 | `conversion_cstruct.part07.test.ts` | `c_struct_0176` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3865 | `conversion_cstruct.part07.test.ts` | `c_struct_0177` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3866 | `conversion_cstruct.part07.test.ts` | `c_struct_0178` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3867 | `conversion_cstruct.part07.test.ts` | `c_struct_0179` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3868 | `conversion_cstruct.part07.test.ts` | `c_struct_0180` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3869 | `conversion_cstruct.part07.test.ts` | `c_struct_0181` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3870 | `conversion_cstruct.part07.test.ts` | `c_struct_0182` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3871 | `conversion_cstruct.part07.test.ts` | `c_struct_0183` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3872 | `conversion_cstruct.part07.test.ts` | `c_struct_0184` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3873 | `conversion_cstruct.part07.test.ts` | `c_struct_0185` | 性能测试 | 3/4 | h2dts parseStruct：扩充-新类型成员：8 个新 std 类型成员 的解析结果与性能。 |
| 3874 | `conversion_cenum.part01.test.ts` | `c_enum_0001` | 性能测试 | 3/4 | h2dts parseEnum：enum：typedef 基本 的解析结果与性能。 |
| 3875 | `conversion_cenum.part01.test.ts` | `c_enum_0002` | 性能测试 | 3/4 | h2dts parseEnum：enum：具名基本 的解析结果与性能。 |
| 3876 | `conversion_cenum.part01.test.ts` | `c_enum_0003` | 性能测试 | 3/4 | h2dts parseEnum：enum：带值 + 别名 的解析结果与性能。 |
| 3877 | `conversion_cenum.part01.test.ts` | `c_enum_0004` | 性能测试 | 3/4 | h2dts parseEnum：enum：多值 HTTP 状态 的解析结果与性能。 |
| 3878 | `conversion_cenum.part01.test.ts` | `c_enum_0005` | 性能测试 | 3/4 | h2dts parseEnum：enum：10 成员 的解析结果与性能。 |
| 3879 | `conversion_cenum.part01.test.ts` | `c_enum_0006` | 性能测试 | 3/4 | h2dts parseEnum：enum：20 成员（规模） 的解析结果与性能。 |
| 3880 | `conversion_cenum.part01.test.ts` | `c_enum_0007` | 性能测试 | 3/4 | h2dts parseEnum：enum：方向枚举 的解析结果与性能。 |
| 3881 | `conversion_cenum.part01.test.ts` | `c_enum_0008` | 性能测试 | 3/4 | h2dts parseEnum：namespace：域内 enum 的解析结果与性能。 |
| 3882 | `conversion_cenum.part01.test.ts` | `c_enum_0009` | 性能测试 | 3/4 | h2dts parseEnum：多 enum：同文件 2 个 的解析结果与性能。 |
| 3883 | `conversion_cenum.part01.test.ts` | `c_enum_0010` | 性能测试 | 3/4 | h2dts parseEnum：enum：性别枚举 的解析结果与性能。 |
| 3884 | `conversion_cenum.part01.test.ts` | `c_enum_0011` | 性能测试 | 3/4 | h2dts parseEnum：enum：状态枚举 的解析结果与性能。 |
| 3885 | `conversion_cenum.part01.test.ts` | `c_enum_0012` | 性能测试 | 3/4 | h2dts parseEnum：enum：位运算值 的解析结果与性能。 |
| 3886 | `conversion_cenum.part01.test.ts` | `c_enum_0013` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：30 成员 的解析结果与性能。 |
| 3887 | `conversion_cenum.part01.test.ts` | `c_enum_0014` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：50 成员（规模） 的解析结果与性能。 |
| 3888 | `conversion_cenum.part01.test.ts` | `c_enum_0015` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：十六进制值 的解析结果与性能。 |
| 3889 | `conversion_cenum.part01.test.ts` | `c_enum_0016` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：负数值 的解析结果与性能。 |
| 3890 | `conversion_cenum.part01.test.ts` | `c_enum_0017` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：字符值 的解析结果与性能。 |
| 3891 | `conversion_cenum.part01.test.ts` | `c_enum_0018` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum-多声明：同文件 4 个 的解析结果与性能。 |
| 3892 | `conversion_cenum.part01.test.ts` | `c_enum_0019` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：3 个带别名带值 的解析结果与性能。 |
| 3893 | `conversion_cenum.part01.test.ts` | `c_enum_0020` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：注释 + 尾逗号 的解析结果与性能。 |
| 3894 | `conversion_cenum.part01.test.ts` | `c_enum_0021` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：数字/字符串混合值 的解析结果与性能。 |
| 3895 | `conversion_cenum.part01.test.ts` | `c_enum_0022` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum-namespace：域内 2 个 enum 的解析结果与性能。 |
| 3896 | `conversion_cenum.part01.test.ts` | `c_enum_0023` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：5 位运算值 的解析结果与性能。 |
| 3897 | `conversion_cenum.part01.test.ts` | `c_enum_0024` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：布尔语义值 的解析结果与性能。 |
| 3898 | `conversion_cenum.part01.test.ts` | `c_enum_0025` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：星期枚举 + 别名 的解析结果与性能。 |
| 3899 | `conversion_cenum.part01.test.ts` | `c_enum_0026` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：方位枚举 的解析结果与性能。 |
| 3900 | `conversion_cenum.part01.test.ts` | `c_enum_0027` | 性能测试 | 3/4 | h2dts parseEnum：扩充-enum：具名无 typedef 的解析结果与性能。 |
| 3901 | `conversion_cenum.part02.test.ts` | `c_enum_0028` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（无赋值） 的解析结果与性能。 |
| 3902 | `conversion_cenum.part02.test.ts` | `c_enum_0029` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（数字赋值） 的解析结果与性能。 |
| 3903 | `conversion_cenum.part02.test.ts` | `c_enum_0030` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（字符串赋值） 的解析结果与性能。 |
| 3904 | `conversion_cenum.part02.test.ts` | `c_enum_0031` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：2 成员（十六进制赋值） 的解析结果与性能。 |
| 3905 | `conversion_cenum.part02.test.ts` | `c_enum_0032` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（无赋值） 的解析结果与性能。 |
| 3906 | `conversion_cenum.part02.test.ts` | `c_enum_0033` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（数字赋值） 的解析结果与性能。 |
| 3907 | `conversion_cenum.part02.test.ts` | `c_enum_0034` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（字符串赋值） 的解析结果与性能。 |
| 3908 | `conversion_cenum.part02.test.ts` | `c_enum_0035` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：3 成员（十六进制赋值） 的解析结果与性能。 |
| 3909 | `conversion_cenum.part02.test.ts` | `c_enum_0036` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（无赋值） 的解析结果与性能。 |
| 3910 | `conversion_cenum.part02.test.ts` | `c_enum_0037` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（数字赋值） 的解析结果与性能。 |
| 3911 | `conversion_cenum.part02.test.ts` | `c_enum_0038` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（字符串赋值） 的解析结果与性能。 |
| 3912 | `conversion_cenum.part02.test.ts` | `c_enum_0039` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：4 成员（十六进制赋值） 的解析结果与性能。 |
| 3913 | `conversion_cenum.part02.test.ts` | `c_enum_0040` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（无赋值） 的解析结果与性能。 |
| 3914 | `conversion_cenum.part02.test.ts` | `c_enum_0041` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（数字赋值） 的解析结果与性能。 |
| 3915 | `conversion_cenum.part02.test.ts` | `c_enum_0042` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（字符串赋值） 的解析结果与性能。 |
| 3916 | `conversion_cenum.part02.test.ts` | `c_enum_0043` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：5 成员（十六进制赋值） 的解析结果与性能。 |
| 3917 | `conversion_cenum.part02.test.ts` | `c_enum_0044` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（无赋值） 的解析结果与性能。 |
| 3918 | `conversion_cenum.part02.test.ts` | `c_enum_0045` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（数字赋值） 的解析结果与性能。 |
| 3919 | `conversion_cenum.part02.test.ts` | `c_enum_0046` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（字符串赋值） 的解析结果与性能。 |
| 3920 | `conversion_cenum.part02.test.ts` | `c_enum_0047` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：6 成员（十六进制赋值） 的解析结果与性能。 |
| 3921 | `conversion_cenum.part02.test.ts` | `c_enum_0048` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（无赋值） 的解析结果与性能。 |
| 3922 | `conversion_cenum.part02.test.ts` | `c_enum_0049` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（数字赋值） 的解析结果与性能。 |
| 3923 | `conversion_cenum.part02.test.ts` | `c_enum_0050` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（字符串赋值） 的解析结果与性能。 |
| 3924 | `conversion_cenum.part02.test.ts` | `c_enum_0051` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：7 成员（十六进制赋值） 的解析结果与性能。 |
| 3925 | `conversion_cenum.part02.test.ts` | `c_enum_0052` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（无赋值） 的解析结果与性能。 |
| 3926 | `conversion_cenum.part02.test.ts` | `c_enum_0053` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（数字赋值） 的解析结果与性能。 |
| 3927 | `conversion_cenum.part02.test.ts` | `c_enum_0054` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（字符串赋值） 的解析结果与性能。 |
| 3928 | `conversion_cenum.part02.test.ts` | `c_enum_0055` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：8 成员（十六进制赋值） 的解析结果与性能。 |
| 3929 | `conversion_cenum.part02.test.ts` | `c_enum_0056` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（无赋值） 的解析结果与性能。 |
| 3930 | `conversion_cenum.part02.test.ts` | `c_enum_0057` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（数字赋值） 的解析结果与性能。 |
| 3931 | `conversion_cenum.part02.test.ts` | `c_enum_0058` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（字符串赋值） 的解析结果与性能。 |
| 3932 | `conversion_cenum.part02.test.ts` | `c_enum_0059` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：9 成员（十六进制赋值） 的解析结果与性能。 |
| 3933 | `conversion_cenum.part02.test.ts` | `c_enum_0060` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（无赋值） 的解析结果与性能。 |
| 3934 | `conversion_cenum.part02.test.ts` | `c_enum_0061` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（数字赋值） 的解析结果与性能。 |
| 3935 | `conversion_cenum.part02.test.ts` | `c_enum_0062` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（字符串赋值） 的解析结果与性能。 |
| 3936 | `conversion_cenum.part02.test.ts` | `c_enum_0063` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：10 成员（十六进制赋值） 的解析结果与性能。 |
| 3937 | `conversion_cenum.part02.test.ts` | `c_enum_0064` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（无赋值） 的解析结果与性能。 |
| 3938 | `conversion_cenum.part02.test.ts` | `c_enum_0065` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（数字赋值） 的解析结果与性能。 |
| 3939 | `conversion_cenum.part02.test.ts` | `c_enum_0066` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（字符串赋值） 的解析结果与性能。 |
| 3940 | `conversion_cenum.part02.test.ts` | `c_enum_0067` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：11 成员（十六进制赋值） 的解析结果与性能。 |
| 3941 | `conversion_cenum.part02.test.ts` | `c_enum_0068` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（无赋值） 的解析结果与性能。 |
| 3942 | `conversion_cenum.part03.test.ts` | `c_enum_0069` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（数字赋值） 的解析结果与性能。 |
| 3943 | `conversion_cenum.part03.test.ts` | `c_enum_0070` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（字符串赋值） 的解析结果与性能。 |
| 3944 | `conversion_cenum.part03.test.ts` | `c_enum_0071` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：12 成员（十六进制赋值） 的解析结果与性能。 |
| 3945 | `conversion_cenum.part03.test.ts` | `c_enum_0072` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（无赋值） 的解析结果与性能。 |
| 3946 | `conversion_cenum.part03.test.ts` | `c_enum_0073` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（数字赋值） 的解析结果与性能。 |
| 3947 | `conversion_cenum.part03.test.ts` | `c_enum_0074` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（字符串赋值） 的解析结果与性能。 |
| 3948 | `conversion_cenum.part03.test.ts` | `c_enum_0075` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：13 成员（十六进制赋值） 的解析结果与性能。 |
| 3949 | `conversion_cenum.part03.test.ts` | `c_enum_0076` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（无赋值） 的解析结果与性能。 |
| 3950 | `conversion_cenum.part03.test.ts` | `c_enum_0077` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（数字赋值） 的解析结果与性能。 |
| 3951 | `conversion_cenum.part03.test.ts` | `c_enum_0078` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（字符串赋值） 的解析结果与性能。 |
| 3952 | `conversion_cenum.part03.test.ts` | `c_enum_0079` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：14 成员（十六进制赋值） 的解析结果与性能。 |
| 3953 | `conversion_cenum.part03.test.ts` | `c_enum_0080` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（无赋值） 的解析结果与性能。 |
| 3954 | `conversion_cenum.part03.test.ts` | `c_enum_0081` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（数字赋值） 的解析结果与性能。 |
| 3955 | `conversion_cenum.part03.test.ts` | `c_enum_0082` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（字符串赋值） 的解析结果与性能。 |
| 3956 | `conversion_cenum.part03.test.ts` | `c_enum_0083` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：15 成员（十六进制赋值） 的解析结果与性能。 |
| 3957 | `conversion_cenum.part03.test.ts` | `c_enum_0084` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（无赋值） 的解析结果与性能。 |
| 3958 | `conversion_cenum.part03.test.ts` | `c_enum_0085` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（数字赋值） 的解析结果与性能。 |
| 3959 | `conversion_cenum.part03.test.ts` | `c_enum_0086` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（字符串赋值） 的解析结果与性能。 |
| 3960 | `conversion_cenum.part03.test.ts` | `c_enum_0087` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：16 成员（十六进制赋值） 的解析结果与性能。 |
| 3961 | `conversion_cenum.part03.test.ts` | `c_enum_0088` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（无赋值） 的解析结果与性能。 |
| 3962 | `conversion_cenum.part03.test.ts` | `c_enum_0089` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（数字赋值） 的解析结果与性能。 |
| 3963 | `conversion_cenum.part03.test.ts` | `c_enum_0090` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（字符串赋值） 的解析结果与性能。 |
| 3964 | `conversion_cenum.part03.test.ts` | `c_enum_0091` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：17 成员（十六进制赋值） 的解析结果与性能。 |
| 3965 | `conversion_cenum.part03.test.ts` | `c_enum_0092` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（无赋值） 的解析结果与性能。 |
| 3966 | `conversion_cenum.part03.test.ts` | `c_enum_0093` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（数字赋值） 的解析结果与性能。 |
| 3967 | `conversion_cenum.part03.test.ts` | `c_enum_0094` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（字符串赋值） 的解析结果与性能。 |
| 3968 | `conversion_cenum.part03.test.ts` | `c_enum_0095` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：18 成员（十六进制赋值） 的解析结果与性能。 |
| 3969 | `conversion_cenum.part03.test.ts` | `c_enum_0096` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（无赋值） 的解析结果与性能。 |
| 3970 | `conversion_cenum.part03.test.ts` | `c_enum_0097` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（数字赋值） 的解析结果与性能。 |
| 3971 | `conversion_cenum.part03.test.ts` | `c_enum_0098` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（字符串赋值） 的解析结果与性能。 |
| 3972 | `conversion_cenum.part04.test.ts` | `c_enum_0099` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：19 成员（十六进制赋值） 的解析结果与性能。 |
| 3973 | `conversion_cenum.part04.test.ts` | `c_enum_0100` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（无赋值） 的解析结果与性能。 |
| 3974 | `conversion_cenum.part04.test.ts` | `c_enum_0101` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（数字赋值） 的解析结果与性能。 |
| 3975 | `conversion_cenum.part04.test.ts` | `c_enum_0102` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（字符串赋值） 的解析结果与性能。 |
| 3976 | `conversion_cenum.part04.test.ts` | `c_enum_0103` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：20 成员（十六进制赋值） 的解析结果与性能。 |
| 3977 | `conversion_cenum.part04.test.ts` | `c_enum_0104` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（无赋值） 的解析结果与性能。 |
| 3978 | `conversion_cenum.part04.test.ts` | `c_enum_0105` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（数字赋值） 的解析结果与性能。 |
| 3979 | `conversion_cenum.part04.test.ts` | `c_enum_0106` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（字符串赋值） 的解析结果与性能。 |
| 3980 | `conversion_cenum.part04.test.ts` | `c_enum_0107` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：21 成员（十六进制赋值） 的解析结果与性能。 |
| 3981 | `conversion_cenum.part04.test.ts` | `c_enum_0108` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（无赋值） 的解析结果与性能。 |
| 3982 | `conversion_cenum.part04.test.ts` | `c_enum_0109` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（数字赋值） 的解析结果与性能。 |
| 3983 | `conversion_cenum.part04.test.ts` | `c_enum_0110` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（字符串赋值） 的解析结果与性能。 |
| 3984 | `conversion_cenum.part04.test.ts` | `c_enum_0111` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：22 成员（十六进制赋值） 的解析结果与性能。 |
| 3985 | `conversion_cenum.part04.test.ts` | `c_enum_0112` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（无赋值） 的解析结果与性能。 |
| 3986 | `conversion_cenum.part04.test.ts` | `c_enum_0113` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（数字赋值） 的解析结果与性能。 |
| 3987 | `conversion_cenum.part04.test.ts` | `c_enum_0114` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（字符串赋值） 的解析结果与性能。 |
| 3988 | `conversion_cenum.part04.test.ts` | `c_enum_0115` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：23 成员（十六进制赋值） 的解析结果与性能。 |
| 3989 | `conversion_cenum.part04.test.ts` | `c_enum_0116` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（无赋值） 的解析结果与性能。 |
| 3990 | `conversion_cenum.part04.test.ts` | `c_enum_0117` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（数字赋值） 的解析结果与性能。 |
| 3991 | `conversion_cenum.part04.test.ts` | `c_enum_0118` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（字符串赋值） 的解析结果与性能。 |
| 3992 | `conversion_cenum.part04.test.ts` | `c_enum_0119` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：24 成员（十六进制赋值） 的解析结果与性能。 |
| 3993 | `conversion_cenum.part04.test.ts` | `c_enum_0120` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（无赋值） 的解析结果与性能。 |
| 3994 | `conversion_cenum.part04.test.ts` | `c_enum_0121` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（数字赋值） 的解析结果与性能。 |
| 3995 | `conversion_cenum.part04.test.ts` | `c_enum_0122` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（字符串赋值） 的解析结果与性能。 |
| 3996 | `conversion_cenum.part05.test.ts` | `c_enum_0123` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：25 成员（十六进制赋值） 的解析结果与性能。 |
| 3997 | `conversion_cenum.part05.test.ts` | `c_enum_0124` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（无赋值） 的解析结果与性能。 |
| 3998 | `conversion_cenum.part05.test.ts` | `c_enum_0125` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（数字赋值） 的解析结果与性能。 |
| 3999 | `conversion_cenum.part05.test.ts` | `c_enum_0126` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（字符串赋值） 的解析结果与性能。 |
| 4000 | `conversion_cenum.part05.test.ts` | `c_enum_0127` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：26 成员（十六进制赋值） 的解析结果与性能。 |
| 4001 | `conversion_cenum.part05.test.ts` | `c_enum_0128` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（无赋值） 的解析结果与性能。 |
| 4002 | `conversion_cenum.part05.test.ts` | `c_enum_0129` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（数字赋值） 的解析结果与性能。 |
| 4003 | `conversion_cenum.part05.test.ts` | `c_enum_0130` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（字符串赋值） 的解析结果与性能。 |
| 4004 | `conversion_cenum.part05.test.ts` | `c_enum_0131` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：27 成员（十六进制赋值） 的解析结果与性能。 |
| 4005 | `conversion_cenum.part05.test.ts` | `c_enum_0132` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（无赋值） 的解析结果与性能。 |
| 4006 | `conversion_cenum.part05.test.ts` | `c_enum_0133` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（数字赋值） 的解析结果与性能。 |
| 4007 | `conversion_cenum.part05.test.ts` | `c_enum_0134` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（字符串赋值） 的解析结果与性能。 |
| 4008 | `conversion_cenum.part05.test.ts` | `c_enum_0135` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：28 成员（十六进制赋值） 的解析结果与性能。 |
| 4009 | `conversion_cenum.part05.test.ts` | `c_enum_0136` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（无赋值） 的解析结果与性能。 |
| 4010 | `conversion_cenum.part05.test.ts` | `c_enum_0137` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（数字赋值） 的解析结果与性能。 |
| 4011 | `conversion_cenum.part05.test.ts` | `c_enum_0138` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（字符串赋值） 的解析结果与性能。 |
| 4012 | `conversion_cenum.part05.test.ts` | `c_enum_0139` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：29 成员（十六进制赋值） 的解析结果与性能。 |
| 4013 | `conversion_cenum.part05.test.ts` | `c_enum_0140` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（无赋值） 的解析结果与性能。 |
| 4014 | `conversion_cenum.part05.test.ts` | `c_enum_0141` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（数字赋值） 的解析结果与性能。 |
| 4015 | `conversion_cenum.part05.test.ts` | `c_enum_0142` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（字符串赋值） 的解析结果与性能。 |
| 4016 | `conversion_cenum.part05.test.ts` | `c_enum_0143` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：30 成员（十六进制赋值） 的解析结果与性能。 |
| 4017 | `conversion_cenum.part06.test.ts` | `c_enum_0144` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（无赋值） 的解析结果与性能。 |
| 4018 | `conversion_cenum.part06.test.ts` | `c_enum_0145` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（数字赋值） 的解析结果与性能。 |
| 4019 | `conversion_cenum.part06.test.ts` | `c_enum_0146` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（字符串赋值） 的解析结果与性能。 |
| 4020 | `conversion_cenum.part06.test.ts` | `c_enum_0147` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：31 成员（十六进制赋值） 的解析结果与性能。 |
| 4021 | `conversion_cenum.part06.test.ts` | `c_enum_0148` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（无赋值） 的解析结果与性能。 |
| 4022 | `conversion_cenum.part06.test.ts` | `c_enum_0149` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（数字赋值） 的解析结果与性能。 |
| 4023 | `conversion_cenum.part06.test.ts` | `c_enum_0150` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（字符串赋值） 的解析结果与性能。 |
| 4024 | `conversion_cenum.part06.test.ts` | `c_enum_0151` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：32 成员（十六进制赋值） 的解析结果与性能。 |
| 4025 | `conversion_cenum.part06.test.ts` | `c_enum_0152` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（无赋值） 的解析结果与性能。 |
| 4026 | `conversion_cenum.part06.test.ts` | `c_enum_0153` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（数字赋值） 的解析结果与性能。 |
| 4027 | `conversion_cenum.part06.test.ts` | `c_enum_0154` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（字符串赋值） 的解析结果与性能。 |
| 4028 | `conversion_cenum.part06.test.ts` | `c_enum_0155` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：33 成员（十六进制赋值） 的解析结果与性能。 |
| 4029 | `conversion_cenum.part06.test.ts` | `c_enum_0156` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（无赋值） 的解析结果与性能。 |
| 4030 | `conversion_cenum.part06.test.ts` | `c_enum_0157` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（数字赋值） 的解析结果与性能。 |
| 4031 | `conversion_cenum.part06.test.ts` | `c_enum_0158` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（字符串赋值） 的解析结果与性能。 |
| 4032 | `conversion_cenum.part06.test.ts` | `c_enum_0159` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：34 成员（十六进制赋值） 的解析结果与性能。 |
| 4033 | `conversion_cenum.part06.test.ts` | `c_enum_0160` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（无赋值） 的解析结果与性能。 |
| 4034 | `conversion_cenum.part06.test.ts` | `c_enum_0161` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（数字赋值） 的解析结果与性能。 |
| 4035 | `conversion_cenum.part06.test.ts` | `c_enum_0162` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（字符串赋值） 的解析结果与性能。 |
| 4036 | `conversion_cenum.part07.test.ts` | `c_enum_0163` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：35 成员（十六进制赋值） 的解析结果与性能。 |
| 4037 | `conversion_cenum.part07.test.ts` | `c_enum_0164` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（无赋值） 的解析结果与性能。 |
| 4038 | `conversion_cenum.part07.test.ts` | `c_enum_0165` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（数字赋值） 的解析结果与性能。 |
| 4039 | `conversion_cenum.part07.test.ts` | `c_enum_0166` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（字符串赋值） 的解析结果与性能。 |
| 4040 | `conversion_cenum.part07.test.ts` | `c_enum_0167` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：36 成员（十六进制赋值） 的解析结果与性能。 |
| 4041 | `conversion_cenum.part07.test.ts` | `c_enum_0168` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（无赋值） 的解析结果与性能。 |
| 4042 | `conversion_cenum.part07.test.ts` | `c_enum_0169` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（数字赋值） 的解析结果与性能。 |
| 4043 | `conversion_cenum.part07.test.ts` | `c_enum_0170` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（字符串赋值） 的解析结果与性能。 |
| 4044 | `conversion_cenum.part07.test.ts` | `c_enum_0171` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：37 成员（十六进制赋值） 的解析结果与性能。 |
| 4045 | `conversion_cenum.part07.test.ts` | `c_enum_0172` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（无赋值） 的解析结果与性能。 |
| 4046 | `conversion_cenum.part07.test.ts` | `c_enum_0173` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（数字赋值） 的解析结果与性能。 |
| 4047 | `conversion_cenum.part07.test.ts` | `c_enum_0174` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（字符串赋值） 的解析结果与性能。 |
| 4048 | `conversion_cenum.part07.test.ts` | `c_enum_0175` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：38 成员（十六进制赋值） 的解析结果与性能。 |
| 4049 | `conversion_cenum.part07.test.ts` | `c_enum_0176` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（无赋值） 的解析结果与性能。 |
| 4050 | `conversion_cenum.part07.test.ts` | `c_enum_0177` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（数字赋值） 的解析结果与性能。 |
| 4051 | `conversion_cenum.part07.test.ts` | `c_enum_0178` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（字符串赋值） 的解析结果与性能。 |
| 4052 | `conversion_cenum.part07.test.ts` | `c_enum_0179` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：39 成员（十六进制赋值） 的解析结果与性能。 |
| 4053 | `conversion_cenum.part08.test.ts` | `c_enum_0180` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（无赋值） 的解析结果与性能。 |
| 4054 | `conversion_cenum.part08.test.ts` | `c_enum_0181` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（数字赋值） 的解析结果与性能。 |
| 4055 | `conversion_cenum.part08.test.ts` | `c_enum_0182` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（字符串赋值） 的解析结果与性能。 |
| 4056 | `conversion_cenum.part08.test.ts` | `c_enum_0183` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：40 成员（十六进制赋值） 的解析结果与性能。 |
| 4057 | `conversion_cenum.part08.test.ts` | `c_enum_0184` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（无赋值） 的解析结果与性能。 |
| 4058 | `conversion_cenum.part08.test.ts` | `c_enum_0185` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（数字赋值） 的解析结果与性能。 |
| 4059 | `conversion_cenum.part08.test.ts` | `c_enum_0186` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（字符串赋值） 的解析结果与性能。 |
| 4060 | `conversion_cenum.part08.test.ts` | `c_enum_0187` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：41 成员（十六进制赋值） 的解析结果与性能。 |
| 4061 | `conversion_cenum.part08.test.ts` | `c_enum_0188` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（无赋值） 的解析结果与性能。 |
| 4062 | `conversion_cenum.part08.test.ts` | `c_enum_0189` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（数字赋值） 的解析结果与性能。 |
| 4063 | `conversion_cenum.part08.test.ts` | `c_enum_0190` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（字符串赋值） 的解析结果与性能。 |
| 4064 | `conversion_cenum.part08.test.ts` | `c_enum_0191` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：42 成员（十六进制赋值） 的解析结果与性能。 |
| 4065 | `conversion_cenum.part08.test.ts` | `c_enum_0192` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（无赋值） 的解析结果与性能。 |
| 4066 | `conversion_cenum.part08.test.ts` | `c_enum_0193` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（数字赋值） 的解析结果与性能。 |
| 4067 | `conversion_cenum.part08.test.ts` | `c_enum_0194` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（字符串赋值） 的解析结果与性能。 |
| 4068 | `conversion_cenum.part08.test.ts` | `c_enum_0195` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：43 成员（十六进制赋值） 的解析结果与性能。 |
| 4069 | `conversion_cenum.part09.test.ts` | `c_enum_0196` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（无赋值） 的解析结果与性能。 |
| 4070 | `conversion_cenum.part09.test.ts` | `c_enum_0197` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（数字赋值） 的解析结果与性能。 |
| 4071 | `conversion_cenum.part09.test.ts` | `c_enum_0198` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（字符串赋值） 的解析结果与性能。 |
| 4072 | `conversion_cenum.part09.test.ts` | `c_enum_0199` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：44 成员（十六进制赋值） 的解析结果与性能。 |
| 4073 | `conversion_cenum.part09.test.ts` | `c_enum_0200` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（无赋值） 的解析结果与性能。 |
| 4074 | `conversion_cenum.part09.test.ts` | `c_enum_0201` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（数字赋值） 的解析结果与性能。 |
| 4075 | `conversion_cenum.part09.test.ts` | `c_enum_0202` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（字符串赋值） 的解析结果与性能。 |
| 4076 | `conversion_cenum.part09.test.ts` | `c_enum_0203` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：45 成员（十六进制赋值） 的解析结果与性能。 |
| 4077 | `conversion_cenum.part09.test.ts` | `c_enum_0204` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（无赋值） 的解析结果与性能。 |
| 4078 | `conversion_cenum.part09.test.ts` | `c_enum_0205` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（数字赋值） 的解析结果与性能。 |
| 4079 | `conversion_cenum.part09.test.ts` | `c_enum_0206` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（字符串赋值） 的解析结果与性能。 |
| 4080 | `conversion_cenum.part09.test.ts` | `c_enum_0207` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：46 成员（十六进制赋值） 的解析结果与性能。 |
| 4081 | `conversion_cenum.part09.test.ts` | `c_enum_0208` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（无赋值） 的解析结果与性能。 |
| 4082 | `conversion_cenum.part09.test.ts` | `c_enum_0209` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（数字赋值） 的解析结果与性能。 |
| 4083 | `conversion_cenum.part09.test.ts` | `c_enum_0210` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（字符串赋值） 的解析结果与性能。 |
| 4084 | `conversion_cenum.part10.test.ts` | `c_enum_0211` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：47 成员（十六进制赋值） 的解析结果与性能。 |
| 4085 | `conversion_cenum.part10.test.ts` | `c_enum_0212` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（无赋值） 的解析结果与性能。 |
| 4086 | `conversion_cenum.part10.test.ts` | `c_enum_0213` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（数字赋值） 的解析结果与性能。 |
| 4087 | `conversion_cenum.part10.test.ts` | `c_enum_0214` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（字符串赋值） 的解析结果与性能。 |
| 4088 | `conversion_cenum.part10.test.ts` | `c_enum_0215` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：48 成员（十六进制赋值） 的解析结果与性能。 |
| 4089 | `conversion_cenum.part10.test.ts` | `c_enum_0216` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（无赋值） 的解析结果与性能。 |
| 4090 | `conversion_cenum.part10.test.ts` | `c_enum_0217` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（数字赋值） 的解析结果与性能。 |
| 4091 | `conversion_cenum.part10.test.ts` | `c_enum_0218` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（字符串赋值） 的解析结果与性能。 |
| 4092 | `conversion_cenum.part10.test.ts` | `c_enum_0219` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：49 成员（十六进制赋值） 的解析结果与性能。 |
| 4093 | `conversion_cenum.part10.test.ts` | `c_enum_0220` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（无赋值） 的解析结果与性能。 |
| 4094 | `conversion_cenum.part10.test.ts` | `c_enum_0221` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（数字赋值） 的解析结果与性能。 |
| 4095 | `conversion_cenum.part10.test.ts` | `c_enum_0222` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（字符串赋值） 的解析结果与性能。 |
| 4096 | `conversion_cenum.part10.test.ts` | `c_enum_0223` | 性能测试 | 3/4 | h2dts parseEnum：扩充-矩阵：50 成员（十六进制赋值） 的解析结果与性能。 |
| 4097 | `conversion_cenum.part10.test.ts` | `c_enum_0224` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：ColorT 的解析结果与性能。 |
| 4098 | `conversion_cenum.part10.test.ts` | `c_enum_0225` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：StatusT 的解析结果与性能。 |
| 4099 | `conversion_cenum.part10.test.ts` | `c_enum_0226` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：ModeT 的解析结果与性能。 |
| 4100 | `conversion_cenum.part10.test.ts` | `c_enum_0227` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：LevelT 的解析结果与性能。 |
| 4101 | `conversion_cenum.part10.test.ts` | `c_enum_0228` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：TypeT 的解析结果与性能。 |
| 4102 | `conversion_cenum.part10.test.ts` | `c_enum_0229` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：KindT 的解析结果与性能。 |
| 4103 | `conversion_cenum.part11.test.ts` | `c_enum_0230` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：StateT 的解析结果与性能。 |
| 4104 | `conversion_cenum.part11.test.ts` | `c_enum_0231` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：FlagT 的解析结果与性能。 |
| 4105 | `conversion_cenum.part11.test.ts` | `c_enum_0232` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：CodeT 的解析结果与性能。 |
| 4106 | `conversion_cenum.part11.test.ts` | `c_enum_0233` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：ResultT 的解析结果与性能。 |
| 4107 | `conversion_cenum.part11.test.ts` | `c_enum_0234` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：GradeT 的解析结果与性能。 |
| 4108 | `conversion_cenum.part11.test.ts` | `c_enum_0235` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：SizeT 的解析结果与性能。 |
| 4109 | `conversion_cenum.part11.test.ts` | `c_enum_0236` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：OrderT 的解析结果与性能。 |
| 4110 | `conversion_cenum.part11.test.ts` | `c_enum_0237` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：PhaseT 的解析结果与性能。 |
| 4111 | `conversion_cenum.part11.test.ts` | `c_enum_0238` | 性能测试 | 3/4 | h2dts parseEnum：扩充-命名：RankT 的解析结果与性能。 |
| 4112 | `conversion_cenum.part11.test.ts` | `c_enum_0239` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 2 个 的解析结果与性能。 |
| 4113 | `conversion_cenum.part11.test.ts` | `c_enum_0240` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 3 个 的解析结果与性能。 |
| 4114 | `conversion_cenum.part11.test.ts` | `c_enum_0241` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 4 个 的解析结果与性能。 |
| 4115 | `conversion_cenum.part11.test.ts` | `c_enum_0242` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 5 个 的解析结果与性能。 |
| 4116 | `conversion_cenum.part11.test.ts` | `c_enum_0243` | 性能测试 | 3/4 | h2dts parseEnum：扩充-多 enum：同文件 8 个 的解析结果与性能。 |
| 4117 | `conversion_cenum.part11.test.ts` | `c_enum_0244` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：位运算 的解析结果与性能。 |
| 4118 | `conversion_cenum.part11.test.ts` | `c_enum_0245` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：负数 的解析结果与性能。 |
| 4119 | `conversion_cenum.part11.test.ts` | `c_enum_0246` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：字符 的解析结果与性能。 |
| 4120 | `conversion_cenum.part11.test.ts` | `c_enum_0247` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：混合 的解析结果与性能。 |
| 4121 | `conversion_cenum.part11.test.ts` | `c_enum_0248` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：注释 的解析结果与性能。 |
| 4122 | `conversion_cenum.part11.test.ts` | `c_enum_0249` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：尾逗号 的解析结果与性能。 |
| 4123 | `conversion_cenum.part11.test.ts` | `c_enum_0250` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：无分号 的解析结果与性能。 |
| 4124 | `conversion_cenum.part11.test.ts` | `c_enum_0251` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：重复值 的解析结果与性能。 |
| 4125 | `conversion_cenum.part11.test.ts` | `c_enum_0252` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：大数值 的解析结果与性能。 |
| 4126 | `conversion_cenum.part11.test.ts` | `c_enum_0253` | 性能测试 | 3/4 | h2dts parseEnum：扩充-值形态：浮点值 的解析结果与性能。 |
| 4127 | `conversion_cunion.part01.test.ts` | `c_union_0001` | 性能测试 | 3/4 | h2dts parseUnion：union：int/float/char[4] 成员 的解析结果与性能。 |
| 4128 | `conversion_cunion.part01.test.ts` | `c_union_0002` | 性能测试 | 3/4 | h2dts parseUnion：union：int/double/string* 成员 的解析结果与性能。 |
| 4129 | `conversion_cunion.part01.test.ts` | `c_union_0003` | 性能测试 | 3/4 | h2dts parseUnion：union：整型族成员 的解析结果与性能。 |
| 4130 | `conversion_cunion.part01.test.ts` | `c_union_0004` | 性能测试 | 3/4 | h2dts parseUnion：namespace：域内 union 的解析结果与性能。 |
| 4131 | `conversion_cunion.part01.test.ts` | `c_union_0005` | 性能测试 | 3/4 | h2dts parseUnion：union：bool/int/double/char[8] 成员 的解析结果与性能。 |
| 4132 | `conversion_cunion.part01.test.ts` | `c_union_0006` | 性能测试 | 3/4 | h2dts parseUnion：多 union：同文件 2 个 的解析结果与性能。 |
| 4133 | `conversion_cunion.part01.test.ts` | `c_union_0007` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union：整型族 5 成员 的解析结果与性能。 |
| 4134 | `conversion_cunion.part01.test.ts` | `c_union_0008` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union：浮点族 3 成员 的解析结果与性能。 |
| 4135 | `conversion_cunion.part01.test.ts` | `c_union_0009` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union：数组成员 的解析结果与性能。 |
| 4136 | `conversion_cunion.part01.test.ts` | `c_union_0010` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union：指针成员 的解析结果与性能。 |
| 4137 | `conversion_cunion.part01.test.ts` | `c_union_0011` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union-多声明：同文件 3 个 的解析结果与性能。 |
| 4138 | `conversion_cunion.part01.test.ts` | `c_union_0012` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union：10 成员 的解析结果与性能。 |
| 4139 | `conversion_cunion.part01.test.ts` | `c_union_0013` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union-namespace：两层嵌套 的解析结果与性能。 |
| 4140 | `conversion_cunion.part01.test.ts` | `c_union_0014` | 性能测试 | 3/4 | h2dts parseUnion：扩充-union：混合成员 的解析结果与性能。 |
| 4141 | `conversion_cunion.part02.test.ts` | `c_union_0015` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4142 | `conversion_cunion.part02.test.ts` | `c_union_0016` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4143 | `conversion_cunion.part02.test.ts` | `c_union_0017` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4144 | `conversion_cunion.part02.test.ts` | `c_union_0018` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4145 | `conversion_cunion.part02.test.ts` | `c_union_0019` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4146 | `conversion_cunion.part02.test.ts` | `c_union_0020` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4147 | `conversion_cunion.part02.test.ts` | `c_union_0021` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4148 | `conversion_cunion.part02.test.ts` | `c_union_0022` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4149 | `conversion_cunion.part02.test.ts` | `c_union_0023` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4150 | `conversion_cunion.part02.test.ts` | `c_union_0024` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4151 | `conversion_cunion.part02.test.ts` | `c_union_0025` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4152 | `conversion_cunion.part02.test.ts` | `c_union_0026` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4153 | `conversion_cunion.part02.test.ts` | `c_union_0027` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4154 | `conversion_cunion.part02.test.ts` | `c_union_0028` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4155 | `conversion_cunion.part02.test.ts` | `c_union_0029` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4156 | `conversion_cunion.part02.test.ts` | `c_union_0030` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4157 | `conversion_cunion.part02.test.ts` | `c_union_0031` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4158 | `conversion_cunion.part02.test.ts` | `c_union_0032` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4159 | `conversion_cunion.part02.test.ts` | `c_union_0033` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4160 | `conversion_cunion.part02.test.ts` | `c_union_0034` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4161 | `conversion_cunion.part02.test.ts` | `c_union_0035` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4162 | `conversion_cunion.part02.test.ts` | `c_union_0036` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4163 | `conversion_cunion.part02.test.ts` | `c_union_0037` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4164 | `conversion_cunion.part02.test.ts` | `c_union_0038` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4165 | `conversion_cunion.part02.test.ts` | `c_union_0039` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4166 | `conversion_cunion.part02.test.ts` | `c_union_0040` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4167 | `conversion_cunion.part02.test.ts` | `c_union_0041` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4168 | `conversion_cunion.part02.test.ts` | `c_union_0042` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4169 | `conversion_cunion.part02.test.ts` | `c_union_0043` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4170 | `conversion_cunion.part02.test.ts` | `c_union_0044` | 性能测试 | 3/4 | h2dts parseUnion：扩充-成员矩阵：4 成员 的解析结果与性能。 |
| 4171 | `conversion_cunion.part02.test.ts` | `c_union_0045` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：2 成员 的解析结果与性能。 |
| 4172 | `conversion_cunion.part02.test.ts` | `c_union_0046` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：3 成员 的解析结果与性能。 |
| 4173 | `conversion_cunion.part02.test.ts` | `c_union_0047` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：4 成员 的解析结果与性能。 |
| 4174 | `conversion_cunion.part02.test.ts` | `c_union_0048` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：5 成员 的解析结果与性能。 |
| 4175 | `conversion_cunion.part02.test.ts` | `c_union_0049` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：6 成员 的解析结果与性能。 |
| 4176 | `conversion_cunion.part02.test.ts` | `c_union_0050` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：7 成员 的解析结果与性能。 |
| 4177 | `conversion_cunion.part02.test.ts` | `c_union_0051` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：8 成员 的解析结果与性能。 |
| 4178 | `conversion_cunion.part02.test.ts` | `c_union_0052` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：9 成员 的解析结果与性能。 |
| 4179 | `conversion_cunion.part02.test.ts` | `c_union_0053` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：10 成员 的解析结果与性能。 |
| 4180 | `conversion_cunion.part02.test.ts` | `c_union_0054` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：11 成员 的解析结果与性能。 |
| 4181 | `conversion_cunion.part03.test.ts` | `c_union_0055` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：12 成员 的解析结果与性能。 |
| 4182 | `conversion_cunion.part03.test.ts` | `c_union_0056` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：13 成员 的解析结果与性能。 |
| 4183 | `conversion_cunion.part03.test.ts` | `c_union_0057` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：14 成员 的解析结果与性能。 |
| 4184 | `conversion_cunion.part03.test.ts` | `c_union_0058` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：15 成员 的解析结果与性能。 |
| 4185 | `conversion_cunion.part03.test.ts` | `c_union_0059` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：16 成员 的解析结果与性能。 |
| 4186 | `conversion_cunion.part03.test.ts` | `c_union_0060` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：17 成员 的解析结果与性能。 |
| 4187 | `conversion_cunion.part03.test.ts` | `c_union_0061` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：18 成员 的解析结果与性能。 |
| 4188 | `conversion_cunion.part03.test.ts` | `c_union_0062` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：19 成员 的解析结果与性能。 |
| 4189 | `conversion_cunion.part03.test.ts` | `c_union_0063` | 性能测试 | 3/4 | h2dts parseUnion：扩充-规模：20 成员 的解析结果与性能。 |
| 4190 | `conversion_cunion.part03.test.ts` | `c_union_0064` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：ValueU 的解析结果与性能。 |
| 4191 | `conversion_cunion.part03.test.ts` | `c_union_0065` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：DataU 的解析结果与性能。 |
| 4192 | `conversion_cunion.part03.test.ts` | `c_union_0066` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：BufferU 的解析结果与性能。 |
| 4193 | `conversion_cunion.part03.test.ts` | `c_union_0067` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：ResultU 的解析结果与性能。 |
| 4194 | `conversion_cunion.part03.test.ts` | `c_union_0068` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：NumberU 的解析结果与性能。 |
| 4195 | `conversion_cunion.part03.test.ts` | `c_union_0069` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：MixedU 的解析结果与性能。 |
| 4196 | `conversion_cunion.part03.test.ts` | `c_union_0070` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：RawU 的解析结果与性能。 |
| 4197 | `conversion_cunion.part03.test.ts` | `c_union_0071` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：PacketU 的解析结果与性能。 |
| 4198 | `conversion_cunion.part03.test.ts` | `c_union_0072` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：CellU 的解析结果与性能。 |
| 4199 | `conversion_cunion.part03.test.ts` | `c_union_0073` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：SlotU 的解析结果与性能。 |
| 4200 | `conversion_cunion.part03.test.ts` | `c_union_0074` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：WordU 的解析结果与性能。 |
| 4201 | `conversion_cunion.part03.test.ts` | `c_union_0075` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：BlockU 的解析结果与性能。 |
| 4202 | `conversion_cunion.part03.test.ts` | `c_union_0076` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：FrameU 的解析结果与性能。 |
| 4203 | `conversion_cunion.part03.test.ts` | `c_union_0077` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：TokenU 的解析结果与性能。 |
| 4204 | `conversion_cunion.part03.test.ts` | `c_union_0078` | 性能测试 | 3/4 | h2dts parseUnion：扩充-命名：NodeU 的解析结果与性能。 |
| 4205 | `conversion_cunion.part03.test.ts` | `c_union_0079` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 2 个 的解析结果与性能。 |
| 4206 | `conversion_cunion.part03.test.ts` | `c_union_0080` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 3 个 的解析结果与性能。 |
| 4207 | `conversion_cunion.part03.test.ts` | `c_union_0081` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 4 个 的解析结果与性能。 |
| 4208 | `conversion_cunion.part03.test.ts` | `c_union_0082` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 5 个 的解析结果与性能。 |
| 4209 | `conversion_cunion.part03.test.ts` | `c_union_0083` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 6 个 的解析结果与性能。 |
| 4210 | `conversion_cunion.part03.test.ts` | `c_union_0084` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 7 个 的解析结果与性能。 |
| 4211 | `conversion_cunion.part03.test.ts` | `c_union_0085` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 8 个 的解析结果与性能。 |
| 4212 | `conversion_cunion.part03.test.ts` | `c_union_0086` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 10 个 的解析结果与性能。 |
| 4213 | `conversion_cunion.part03.test.ts` | `c_union_0087` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 12 个 的解析结果与性能。 |
| 4214 | `conversion_cunion.part04.test.ts` | `c_union_0088` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多 union：同文件 15 个 的解析结果与性能。 |
| 4215 | `conversion_cunion.part04.test.ts` | `c_union_0089` | 性能测试 | 3/4 | h2dts parseUnion：扩充-namespace 的解析结果与性能。 |
| 4216 | `conversion_cunion.part04.test.ts` | `c_union_0090` | 性能测试 | 3/4 | h2dts parseUnion：扩充-嵌套 namespace 的解析结果与性能。 |
| 4217 | `conversion_cunion.part04.test.ts` | `c_union_0091` | 性能测试 | 3/4 | h2dts parseUnion：扩充-数组成员 的解析结果与性能。 |
| 4218 | `conversion_cunion.part04.test.ts` | `c_union_0092` | 性能测试 | 3/4 | h2dts parseUnion：扩充-指针成员 的解析结果与性能。 |
| 4219 | `conversion_cunion.part04.test.ts` | `c_union_0093` | 性能测试 | 3/4 | h2dts parseUnion：扩充-容器指针 的解析结果与性能。 |
| 4220 | `conversion_cunion.part04.test.ts` | `c_union_0094` | 性能测试 | 3/4 | h2dts parseUnion：扩充-混合大成员 的解析结果与性能。 |
| 4221 | `conversion_cunion.part04.test.ts` | `c_union_0095` | 性能测试 | 3/4 | h2dts parseUnion：扩充-单成员 的解析结果与性能。 |
| 4222 | `conversion_cunion.part04.test.ts` | `c_union_0096` | 性能测试 | 3/4 | h2dts parseUnion：扩充-匿名别名 的解析结果与性能。 |
| 4223 | `conversion_cunion.part04.test.ts` | `c_union_0097` | 性能测试 | 3/4 | h2dts parseUnion：扩充-注释 的解析结果与性能。 |
| 4224 | `conversion_cunion.part04.test.ts` | `c_union_0098` | 性能测试 | 3/4 | h2dts parseUnion：扩充-多类型 的解析结果与性能。 |
| 4225 | `conversion_cunion.part04.test.ts` | `c_union_0099` | 性能测试 | 3/4 | h2dts parseUnion：扩充-两成员 的解析结果与性能。 |
| 4226 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0001` | 性能测试 | 3/4 | h2dts parseClass：namespace 混合：enum+struct+class+函数 的解析结果与性能。 |
| 4227 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0002` | 性能测试 | 3/4 | h2dts parseClass：namespace 嵌套：域内多类型 的解析结果与性能。 |
| 4228 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0003` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace：变量+enum+struct+class+函数大混合 的解析结果与性能。 |
| 4229 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0004` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace：export namespace 变量+struct+函数 的解析结果与性能。 |
| 4230 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0005` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace：三层嵌套各含函数 的解析结果与性能。 |
| 4231 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0006` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace：变量+函数+enum 的解析结果与性能。 |
| 4232 | `conversion_cnamespace.part01.test.ts` | `c_namespace_0007` | 性能测试 | 3/4 | h2dts parseClass：扩充-namespace：struct 类型函数出入参 的解析结果与性能。 |
| 4233 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0008` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。 |
| 4234 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0009` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。 |
| 4235 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0010` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。 |
| 4236 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0011` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。 |
| 4237 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0012` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。 |
| 4238 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0013` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。 |
| 4239 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0014` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。 |
| 4240 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0015` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。 |
| 4241 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0016` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。 |
| 4242 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0017` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。 |
| 4243 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0018` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。 |
| 4244 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0019` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。 |
| 4245 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0020` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。 |
| 4246 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0021` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。 |
| 4247 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0022` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。 |
| 4248 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0023` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。 |
| 4249 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0024` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 0 型组合 的解析结果与性能。 |
| 4250 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0025` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 1 型组合 的解析结果与性能。 |
| 4251 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0026` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 2 型组合 的解析结果与性能。 |
| 4252 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0027` | 性能测试 | 3/4 | h2dts parseClass：扩充-混合：namespace 3 型组合 的解析结果与性能。 |
| 4253 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0028` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。 |
| 4254 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0029` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。 |
| 4255 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0030` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。 |
| 4256 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0031` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。 |
| 4257 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0032` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。 |
| 4258 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0033` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。 |
| 4259 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0034` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。 |
| 4260 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0035` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。 |
| 4261 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0036` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。 |
| 4262 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0037` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：2 层 namespace 的解析结果与性能。 |
| 4263 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0038` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：3 层 namespace 的解析结果与性能。 |
| 4264 | `conversion_cnamespace.part02.test.ts` | `c_namespace_0039` | 性能测试 | 3/4 | h2dts parseClass：扩充-嵌套：4 层 namespace 的解析结果与性能。 |
| 4265 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0001` | 性能测试 | 3 | h2dts gen：gen：3 函数 getDtsFunction（同步/Async/Promise 三变体） 的生成结果与性能。 |
| 4266 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0002` | 性能测试 | 3 | h2dts gen：gen：getDtsFunction 多返回类型 的生成结果与性能。 |
| 4267 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0003` | 性能测试 | 3 | h2dts gen：gen：class getDtsClasses（变量+方法三变体） 的生成结果与性能。 |
| 4268 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0004` | 性能测试 | 3 | h2dts gen：gen：class 数组成员 getDtsClasses 的生成结果与性能。 |
| 4269 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0005` | 性能测试 | 3 | h2dts gen：gen：struct getDtsStructs（成员+方法） 的生成结果与性能。 |
| 4270 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0006` | 性能测试 | 3 | h2dts gen：gen：struct getDtsStructs 字符串成员 的生成结果与性能。 |
| 4271 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0007` | 性能测试 | 3 | h2dts gen：gen：enum getDtsEnum 的生成结果与性能。 |
| 4272 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0008` | 性能测试 | 3 | h2dts gen：gen：enum 带值 getDtsEnum 的生成结果与性能。 |
| 4273 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0009` | 性能测试 | 3 | h2dts gen：gen：union getDtsUnions 的生成结果与性能。 |
| 4274 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0010` | 性能测试 | 3 | h2dts gen：gen：混合 ParseObj 全量 genDtsFile 的生成结果与性能。 |
| 4275 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0011` | 性能测试 | 3 | h2dts gen：gen：getDtsFunction 字符串函数 的生成结果与性能。 |
| 4276 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0012` | 性能测试 | 3 | h2dts gen：gen：class 容器成员 getDtsClasses 的生成结果与性能。 |
| 4277 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0013` | 性能测试 | 3 | h2dts gen：gen：struct 方法 getDtsStructs 的生成结果与性能。 |
| 4278 | `conversion_h2dts_gen.part01.test.ts` | `h2dts_gen_0014` | 性能测试 | 3 | h2dts gen：gen：enum 多值 getDtsEnum 的生成结果与性能。 |
| 4279 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0015` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int → number 的生成结果与性能。 |
| 4280 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0016` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 char → string 的生成结果与性能。 |
| 4281 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0017` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 short → number 的生成结果与性能。 |
| 4282 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0018` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 long → number 的生成结果与性能。 |
| 4283 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0019` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 long long → number 的生成结果与性能。 |
| 4284 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0020` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 float → number 的生成结果与性能。 |
| 4285 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0021` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 double → number 的生成结果与性能。 |
| 4286 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0022` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 bool → boolean 的生成结果与性能。 |
| 4287 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0023` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 unsigned int → number 的生成结果与性能。 |
| 4288 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0024` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 unsigned char → string 的生成结果与性能。 |
| 4289 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0025` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 unsigned short → number 的生成结果与性能。 |
| 4290 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0026` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 unsigned long → number 的生成结果与性能。 |
| 4291 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0027` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 unsigned long long → number 的生成结果与性能。 |
| 4292 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0028` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 signed char → string 的生成结果与性能。 |
| 4293 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0029` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 signed short → number 的生成结果与性能。 |
| 4294 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0030` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 signed long → number 的生成结果与性能。 |
| 4295 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0031` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 wchar_t → string 的生成结果与性能。 |
| 4296 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0032` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 char16_t → string 的生成结果与性能。 |
| 4297 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0033` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 char32_t → string 的生成结果与性能。 |
| 4298 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0034` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 size_t → number 的生成结果与性能。 |
| 4299 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0035` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int8_t → number 的生成结果与性能。 |
| 4300 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0036` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int16_t → number 的生成结果与性能。 |
| 4301 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0037` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int32_t → number 的生成结果与性能。 |
| 4302 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0038` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int64_t → number 的生成结果与性能。 |
| 4303 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0039` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 uint8_t → number 的生成结果与性能。 |
| 4304 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0040` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 uint16_t → number 的生成结果与性能。 |
| 4305 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0041` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 uint32_t → number 的生成结果与性能。 |
| 4306 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0042` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 uint64_t → number 的生成结果与性能。 |
| 4307 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0043` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::string → string 的生成结果与性能。 |
| 4308 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0044` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 string → string 的生成结果与性能。 |
| 4309 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0045` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::wstring → string 的生成结果与性能。 |
| 4310 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0046` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 long double → number 的生成结果与性能。 |
| 4311 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0047` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 void → void 的生成结果与性能。 |
| 4312 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0048` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::vector<int> → Array<number> 的生成结果与性能。 |
| 4313 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0049` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::vector<std::string> → Array<string> 的生成结果与性能。 |
| 4314 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0050` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::map<std::string,int> → Map<string, number> 的生成结果与性能。 |
| 4315 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0051` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::set<int> → Set<number> 的生成结果与性能。 |
| 4316 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0052` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::pair<int,int> → [number, number] 的生成结果与性能。 |
| 4317 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0053` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 char* → string 的生成结果与性能。 |
| 4318 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0054` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int* → number 的生成结果与性能。 |
| 4319 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0055` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 double* → number 的生成结果与性能。 |
| 4320 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0056` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 std::string* → string 的生成结果与性能。 |
| 4321 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0057` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 void* → void 的生成结果与性能。 |
| 4322 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0058` | 性能测试 | 3 | h2dts gen：扩充-gen：返回 int[10] → number 的生成结果与性能。 |
| 4323 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0059` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 int → number 的生成结果与性能。 |
| 4324 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0060` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 double → number 的生成结果与性能。 |
| 4325 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0061` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::string → string 的生成结果与性能。 |
| 4326 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0062` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 bool → boolean 的生成结果与性能。 |
| 4327 | `conversion_h2dts_gen.part02.test.ts` | `h2dts_gen_0063` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 char → string 的生成结果与性能。 |
| 4328 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0064` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 float → number 的生成结果与性能。 |
| 4329 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0065` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 long → number 的生成结果与性能。 |
| 4330 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0066` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 short → number 的生成结果与性能。 |
| 4331 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0067` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 unsigned int → number 的生成结果与性能。 |
| 4332 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0068` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 size_t → number 的生成结果与性能。 |
| 4333 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0069` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::vector<int> → Array<number> 的生成结果与性能。 |
| 4334 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0070` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::vector<std::string> → Array<string> 的生成结果与性能。 |
| 4335 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0071` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::map<std::string,int> → Map<string, number> 的生成结果与性能。 |
| 4336 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0072` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::set<int> → Set<number> 的生成结果与性能。 |
| 4337 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0073` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 char* → string 的生成结果与性能。 |
| 4338 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0074` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::wstring → string 的生成结果与性能。 |
| 4339 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0075` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 int64_t → number 的生成结果与性能。 |
| 4340 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0076` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 uint32_t → number 的生成结果与性能。 |
| 4341 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0077` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 long long → number 的生成结果与性能。 |
| 4342 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0078` | 性能测试 | 3 | h2dts gen：扩充-gen：入参 std::pair<int,int> → [number, number] 的生成结果与性能。 |
| 4343 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0079` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 int/float 的生成结果与性能。 |
| 4344 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0080` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 char/double 的生成结果与性能。 |
| 4345 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0081` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 short/bool 的生成结果与性能。 |
| 4346 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0082` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 long/unsigned int 的生成结果与性能。 |
| 4347 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0083` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 long long/unsigned char 的生成结果与性能。 |
| 4348 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0084` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 float/unsigned short 的生成结果与性能。 |
| 4349 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0085` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 double/unsigned long 的生成结果与性能。 |
| 4350 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0086` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 bool/unsigned long long 的生成结果与性能。 |
| 4351 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0087` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 unsigned int/signed char 的生成结果与性能。 |
| 4352 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0088` | 性能测试 | 3 | h2dts gen：扩充-gen：class 成员 unsigned char/signed short 的生成结果与性能。 |
| 4353 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0089` | 性能测试 | 3 | h2dts gen：扩充-gen：struct 成员 long 的生成结果与性能。 |
| 4354 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0090` | 性能测试 | 3 | h2dts gen：扩充-gen：struct 成员 long long 的生成结果与性能。 |
| 4355 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0091` | 性能测试 | 3 | h2dts gen：扩充-gen：struct 成员 float 的生成结果与性能。 |
| 4356 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0092` | 性能测试 | 3 | h2dts gen：扩充-gen：struct 成员 double 的生成结果与性能。 |
| 4357 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0093` | 性能测试 | 3 | h2dts gen：扩充-gen：struct 成员 bool 的生成结果与性能。 |
| 4358 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0094` | 性能测试 | 3 | h2dts gen：扩充-gen：struct 成员 unsigned int 的生成结果与性能。 |
| 4359 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0095` | 性能测试 | 3 | h2dts gen：扩充-gen：enum GenEn000 的生成结果与性能。 |
| 4360 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0096` | 性能测试 | 3 | h2dts gen：扩充-gen：enum GenEn001 的生成结果与性能。 |
| 4361 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0097` | 性能测试 | 3 | h2dts gen：扩充-gen：enum GenEn002 的生成结果与性能。 |
| 4362 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0098` | 性能测试 | 3 | h2dts gen：扩充-gen：enum GenEn003 的生成结果与性能。 |
| 4363 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0099` | 性能测试 | 3 | h2dts gen：扩充-gen：union GenUn000 的生成结果与性能。 |
| 4364 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0100` | 性能测试 | 3 | h2dts gen：扩充-gen：union GenUn001 的生成结果与性能。 |
| 4365 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0101` | 性能测试 | 3 | h2dts gen：扩充-gen：union GenUn002 的生成结果与性能。 |
| 4366 | `conversion_h2dts_gen.part03.test.ts` | `h2dts_gen_0102` | 性能测试 | 3 | h2dts gen：扩充-gen：union GenUn003 的生成结果与性能。 |
| 4367 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0103` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::shared_ptr<int> → number 的生成结果与性能。 |
| 4368 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0104` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::shared_ptr<std::string> → string 的生成结果与性能。 |
| 4369 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0105` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::unique_ptr<int> → number 的生成结果与性能。 |
| 4370 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0106` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::optional<int> → number 的生成结果与性能。 |
| 4371 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0107` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::optional<std::string> → string 的生成结果与性能。 |
| 4372 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0108` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::variant<int, std::string> → string 的生成结果与性能。 |
| 4373 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0109` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::string_view → string 的生成结果与性能。 |
| 4374 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0110` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::bitset<8> → any 的生成结果与性能。 |
| 4375 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0111` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::span<int> → number 的生成结果与性能。 |
| 4376 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0112` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::atomic<int> → number 的生成结果与性能。 |
| 4377 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0113` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::basic_string<char> → string 的生成结果与性能。 |
| 4378 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0114` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::byte → any 的生成结果与性能。 |
| 4379 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0115` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::chrono::milliseconds → Date 的生成结果与性能。 |
| 4380 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0116` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::filesystem::path → any 的生成结果与性能。 |
| 4381 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0117` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::map<int,int> → Map<number, number> 的生成结果与性能。 |
| 4382 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0118` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::map<double,std::string> → Map<number, string> 的生成结果与性能。 |
| 4383 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0119` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::map<std::string,std::string> → Map<string, string> 的生成结果与性能。 |
| 4384 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0120` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<char> → Array<string> 的生成结果与性能。 |
| 4385 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0121` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<float> → Array<number> 的生成结果与性能。 |
| 4386 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0122` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<long> → Array<number> 的生成结果与性能。 |
| 4387 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0123` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<unsigned int> → Array<number> 的生成结果与性能。 |
| 4388 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0124` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<std::wstring> → Array<string> 的生成结果与性能。 |
| 4389 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0125` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<short> → Array<number> 的生成结果与性能。 |
| 4390 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0126` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<int64_t> → Array<number> 的生成结果与性能。 |
| 4391 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0127` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::pair<double,double> → [number, number] 的生成结果与性能。 |
| 4392 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0128` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::tuple<int,std::string,bool> → [number, string, boolean] 的生成结果与性能。 |
| 4393 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0129` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::tuple<double,double,double> → [number, number, number] 的生成结果与性能。 |
| 4394 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0130` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::map<wchar_t,int> → Map<string, number> 的生成结果与性能。 |
| 4395 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0131` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::map<size_t,std::string> → Map<number, string> 的生成结果与性能。 |
| 4396 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0132` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::optional<bool> → boolean 的生成结果与性能。 |
| 4397 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0133` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::atomic<bool> → boolean 的生成结果与性能。 |
| 4398 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0134` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::span<double> → number 的生成结果与性能。 |
| 4399 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0135` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::bitset<16> → any 的生成结果与性能。 |
| 4400 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0136` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<size_t> → Array<number> 的生成结果与性能。 |
| 4401 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0137` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::vector<uint8_t> → Array<number> 的生成结果与性能。 |
| 4402 | `conversion_h2dts_gen.part04.test.ts` | `h2dts_gen_0138` | 性能测试 | 3 | h2dts gen：扩充-gen 新类型：std::set<double> → Set<number> 的生成结果与性能。 |
| 4403 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0139` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<double> → Array<number> 的生成结果与性能。 |
| 4404 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0140` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<bool> → Array<boolean> 的生成结果与性能。 |
| 4405 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0141` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<wchar_t> → Array<string> 的生成结果与性能。 |
| 4406 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0142` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<std::wstring> → Array<string> 的生成结果与性能。 |
| 4407 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0143` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<unsigned int> → Array<number> 的生成结果与性能。 |
| 4408 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0144` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<short> → Array<number> 的生成结果与性能。 |
| 4409 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0145` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<int64_t> → Array<number> 的生成结果与性能。 |
| 4410 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0146` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<uint8_t> → Array<number> 的生成结果与性能。 |
| 4411 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0147` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<size_t> → Array<number> 的生成结果与性能。 |
| 4412 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0148` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<char> → Array<string> 的生成结果与性能。 |
| 4413 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0149` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<float> → Array<number> 的生成结果与性能。 |
| 4414 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0150` | 性能测试 | 3 | h2dts gen：数组入参 std::vector<long> → Array<number> 的生成结果与性能。 |
| 4415 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0151` | 性能测试 | 3 | h2dts gen：数组入参 std::array<int,10> → Array<number> 的生成结果与性能。 |
| 4416 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0152` | 性能测试 | 3 | h2dts gen：数组入参 std::array<std::string,5> → Array<string> 的生成结果与性能。 |
| 4417 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0153` | 性能测试 | 3 | h2dts gen：数组入参 std::deque<int> → Array<number> 的生成结果与性能。 |
| 4418 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0154` | 性能测试 | 3 | h2dts gen：数组入参 std::deque<std::string> → Array<string> 的生成结果与性能。 |
| 4419 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0155` | 性能测试 | 3 | h2dts gen：数组入参 std::list<int> → Array<number> 的生成结果与性能。 |
| 4420 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0156` | 性能测试 | 3 | h2dts gen：数组入参 std::list<std::string> → Array<string> 的生成结果与性能。 |
| 4421 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0157` | 性能测试 | 3 | h2dts gen：数组入参 std::forward_list<int> → Array<number> 的生成结果与性能。 |
| 4422 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0158` | 性能测试 | 3 | h2dts gen：数组入参 std::queue<int> → Array<number> 的生成结果与性能。 |
| 4423 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0159` | 性能测试 | 3 | h2dts gen：数组入参 std::stack<int> → Array<number> 的生成结果与性能。 |
| 4424 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0160` | 性能测试 | 3 | h2dts gen：数组入参 std::priority_queue<int> → Array<number> 的生成结果与性能。 |
| 4425 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0161` | 性能测试 | 3 | h2dts gen：数组入参 std::valarray<double> → Array<number> 的生成结果与性能。 |
| 4426 | `conversion_h2dts_gen.part05.test.ts` | `h2dts_gen_0162` | 性能测试 | 3 | h2dts gen：数组入参 std::basic_string<char> → string 的生成结果与性能。 |
| 4427 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0163` | 性能测试 | 3 | h2dts gen：数组入参 C 数组 char[8] 的生成结果与性能。 |
| 4428 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0164` | 性能测试 | 3 | h2dts gen：数组入参 C 数组 double[4] 的生成结果与性能。 |
| 4429 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0165` | 性能测试 | 3 | h2dts gen：数组入参 C 数组 bool[2] 的生成结果与性能。 |
| 4430 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0166` | 性能测试 | 3 | h2dts gen：数组入参 C 数组 long[3] 的生成结果与性能。 |
| 4431 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0167` | 性能测试 | 3 | h2dts gen：数组入参 C 数组 std::string[5] 的生成结果与性能。 |
| 4432 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0168` | 性能测试 | 3 | h2dts gen：static 函数 int 返回 的生成结果与性能。 |
| 4433 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0169` | 性能测试 | 3 | h2dts gen：static 函数 std::string 返回 的生成结果与性能。 |
| 4434 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0170` | 性能测试 | 3 | h2dts gen：static 函数容器入参 的生成结果与性能。 |
| 4435 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0171` | 性能测试 | 3 | h2dts gen：static 函数多参 char+double 的生成结果与性能。 |
| 4436 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0172` | 性能测试 | 3 | h2dts gen：static 函数多参 float 返回 double 的生成结果与性能。 |
| 4437 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0173` | 性能测试 | 3 | h2dts gen：namespace 内函数 int 返回 的生成结果与性能。 |
| 4438 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0174` | 性能测试 | 3 | h2dts gen：namespace 内函数 std::string 返回 的生成结果与性能。 |
| 4439 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0175` | 性能测试 | 3 | h2dts gen：namespace 内多函数 的生成结果与性能。 |
| 4440 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0176` | 性能测试 | 3 | h2dts gen：namespace 嵌套函数 的生成结果与性能。 |
| 4441 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0177` | 性能测试 | 3 | h2dts gen：namespace 内数组入参函数 的生成结果与性能。 |
| 4442 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0178` | 性能测试 | 3 | h2dts gen：namespace 内 class 变量+方法 的生成结果与性能。 |
| 4443 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0179` | 性能测试 | 3 | h2dts gen：namespace 嵌套 class 的生成结果与性能。 |
| 4444 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0180` | 性能测试 | 3 | h2dts gen：namespace 内 class static 变量+方法 的生成结果与性能。 |
| 4445 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0181` | 性能测试 | 3 | h2dts gen：class 容器数组变量+方法 的生成结果与性能。 |
| 4446 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0182` | 性能测试 | 3 | h2dts gen：class 多维数组/容器数组变量 的生成结果与性能。 |
| 4447 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0183` | 性能测试 | 3 | h2dts gen：class 多容器变量 的生成结果与性能。 |
| 4448 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0184` | 性能测试 | 3 | h2dts gen：namespace 内 static 函数 的生成结果与性能。 |
| 4449 | `conversion_h2dts_gen.part06.test.ts` | `h2dts_gen_0185` | 性能测试 | 3 | h2dts gen：namespace 内 static 函数容器入参 的生成结果与性能。 |
| 4450 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0001` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：函数类型保持不变（C++→C++ 恒等） 的转换结果与性能。 |
| 4451 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0002` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：class 变量/函数转换 的转换结果与性能。 |
| 4452 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0003` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：struct 成员转换 的转换结果与性能。 |
| 4453 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0004` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：enum 保留 的转换结果与性能。 |
| 4454 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0005` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：union 成员转换 的转换结果与性能。 |
| 4455 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0006` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：混合 ParseObj 全量转换 的转换结果与性能。 |
| 4456 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0007` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：数组/容器参数转换 的转换结果与性能。 |
| 4457 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0008` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：class 数组成员转换 的转换结果与性能。 |
| 4458 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0009` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：struct 多维数组成员转换 的转换结果与性能。 |
| 4459 | `conversion_h2dtscpp_gen.part01.test.ts` | `h2dtscpp_gen_0010` | 性能测试 | 4 | h2dtscpp transParseObj：transParseObj：static/多返回类型转换 的转换结果与性能。 |
| 4460 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0011` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 1 的转换结果与性能。 |
| 4461 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0012` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 2 的转换结果与性能。 |
| 4462 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0013` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 3 的转换结果与性能。 |
| 4463 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0014` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 4 的转换结果与性能。 |
| 4464 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0015` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 5 的转换结果与性能。 |
| 4465 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0016` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 6 的转换结果与性能。 |
| 4466 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0017` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 7 的转换结果与性能。 |
| 4467 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0018` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 8 的转换结果与性能。 |
| 4468 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0019` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 9 的转换结果与性能。 |
| 4469 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0020` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 10 的转换结果与性能。 |
| 4470 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0021` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 11 的转换结果与性能。 |
| 4471 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0022` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：基础类型组 12 的转换结果与性能。 |
| 4472 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0023` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 1 的转换结果与性能。 |
| 4473 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0024` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 2 的转换结果与性能。 |
| 4474 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0025` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 3 的转换结果与性能。 |
| 4475 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0026` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 4 的转换结果与性能。 |
| 4476 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0027` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 5 的转换结果与性能。 |
| 4477 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0028` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 6 的转换结果与性能。 |
| 4478 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0029` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 7 的转换结果与性能。 |
| 4479 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0030` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 8 的转换结果与性能。 |
| 4480 | `conversion_h2dtscpp_gen.part02.test.ts` | `h2dtscpp_gen_0031` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 9 的转换结果与性能。 |
| 4481 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0032` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：容器类型组 10 的转换结果与性能。 |
| 4482 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0033` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 1 的转换结果与性能。 |
| 4483 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0034` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 2 的转换结果与性能。 |
| 4484 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0035` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 3 的转换结果与性能。 |
| 4485 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0036` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 4 的转换结果与性能。 |
| 4486 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0037` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 5 的转换结果与性能。 |
| 4487 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0038` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 6 的转换结果与性能。 |
| 4488 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0039` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 7 的转换结果与性能。 |
| 4489 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0040` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 8 的转换结果与性能。 |
| 4490 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0041` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 9 的转换结果与性能。 |
| 4491 | `conversion_h2dtscpp_gen.part03.test.ts` | `h2dtscpp_gen_0042` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj：class+struct 混合组 10 的转换结果与性能。 |
| 4492 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0043` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 1 的转换结果与性能。 |
| 4493 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0044` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 2 的转换结果与性能。 |
| 4494 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0045` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 3 的转换结果与性能。 |
| 4495 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0046` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 4 的转换结果与性能。 |
| 4496 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0047` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 5 的转换结果与性能。 |
| 4497 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0048` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 6 的转换结果与性能。 |
| 4498 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0049` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 7 的转换结果与性能。 |
| 4499 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0050` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 8 的转换结果与性能。 |
| 4500 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0051` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 9 的转换结果与性能。 |
| 4501 | `conversion_h2dtscpp_gen.part04.test.ts` | `h2dtscpp_gen_0052` | 性能测试 | 4 | h2dtscpp transParseObj：扩充-transParseObj 新类型：组 10 的转换结果与性能。 |

