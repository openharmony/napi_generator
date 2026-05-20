# 测试用例与交付需求逐条映射

> 口径说明：
> - 已纳入 `src/test/suite` 下全部测试文件（含 `gen/tools/genproxyhfile.test.ts` 与 `performance/*.part*.test.ts`）。
> - 每条 `test(...)` 均给出“主归属（2/3/4）+ 具体功能描述”。

## 覆盖统计

- 纳入测试文件数：**47**
- 纳入用例总数：**1685**
- 统计方式：扫描所有 `*.test.ts` 文件中的 `test(...)` 声明（按行首 `test(` 识别）。

## 文件纳入清单

| 序号 | 测试文件 | 纳入用例数 |
| --- | --- | ---: |
| 1 | `common/conf.test.ts` | 3 |
| 2 | `common/file.test.ts` | 12 |
| 3 | `common/log.test.ts` | 7 |
| 4 | `common/re.test.ts` | 32 |
| 5 | `common/tool.test.ts` | 21 |
| 6 | `extension.test.ts` | 1 |
| 7 | `gen/gendts.test.ts` | 4 |
| 8 | `gen/gendtsclasses.test.ts` | 4 |
| 9 | `gen/gendtsenum.test.ts` | 4 |
| 10 | `gen/gendtsfunction.test.ts` | 4 |
| 11 | `gen/gendtsstructs.test.ts` | 4 |
| 12 | `gen/gendtstranskey.test.ts` | 5 |
| 13 | `gen/gendtsunion.test.ts` | 4 |
| 14 | `gen/genidlfile.test.ts` | 4 |
| 15 | `gen/gennapicommoncpp.test.ts` | 4 |
| 16 | `gen/gennapicommonh.test.ts` | 4 |
| 17 | `gen/tools/genproxyhfile.test.ts` | 8 |
| 18 | `parse/parsec.test.ts` | 4 |
| 19 | `parse/parsecclass.test.ts` | 4 |
| 20 | `parse/parsecenum.test.ts` | 4 |
| 21 | `parse/parsecfunc.test.ts` | 5 |
| 22 | `parse/parsecstruct.test.ts` | 4 |
| 23 | `parse/parsecunion.test.ts` | 4 |
| 24 | `parse/parsetsclass.test.ts` | 63 |
| 25 | `parse/parsetsenum.test.ts` | 32 |
| 26 | `parse/parsetsfunc.test.ts` | 68 |
| 27 | `parse/parsetsstruct.test.ts` | 63 |
| 28 | `parse/parsetstype.test.ts` | 63 |
| 29 | `parse/parsetsunion.test.ts` | 46 |
| 30 | `performance/conversion_dts2cpp_performance.part01.test.ts` | 101 |
| 31 | `performance/conversion_dts2cpp_performance.part02.test.ts` | 62 |
| 32 | `performance/conversion_h2dts_performance.part01.test.ts` | 103 |
| 33 | `performance/conversion_h2dts_performance.part02.test.ts` | 103 |
| 34 | `performance/conversion_h2dts_performance.part03.test.ts` | 95 |
| 35 | `performance/conversion_h2dts_performance.part04.test.ts` | 46 |
| 36 | `performance/conversion_h2dts_performance.part05.test.ts` | 46 |
| 37 | `performance/conversion_h2dts_performance.part06.test.ts` | 70 |
| 38 | `performance/conversion_h2dts_performance.part07.test.ts` | 103 |
| 39 | `performance/conversion_h2dts_performance.part08.test.ts` | 103 |
| 40 | `performance/conversion_h2dts_performance.part09.test.ts` | 87 |
| 41 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | 42 |
| 42 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | 42 |
| 43 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | 42 |
| 44 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | 42 |
| 45 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | 48 |
| 46 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | 56 |
| 47 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | 9 |

## 用例逐条映射总表

| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |
| --- | --- | --- | --- | --- | --- |
| 1 | `common/conf.test.ts` | `getGenerateConf_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getGenerateConf test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 2 | `common/conf.test.ts` | `getLogPath_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getLogPath test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 3 | `common/conf.test.ts` | `getLogName_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getLogName test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 4 | `common/file.test.ts` | `saveFileSync_new_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync new test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 5 | `common/file.test.ts` | `saveFileSync_new_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync new test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 6 | `common/file.test.ts` | `saveFileSync_new_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync new test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 7 | `common/file.test.ts` | `saveFileSync_new_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync new test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 8 | `common/file.test.ts` | `mkdirSync_new_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（mkdirSync new test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 9 | `common/file.test.ts` | `mkdirSync_new_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（mkdirSync new test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 10 | `common/file.test.ts` | `mkdirSync_new_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（mkdirSync new test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 11 | `common/file.test.ts` | `mkdirSync_new_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（mkdirSync new test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 12 | `common/file.test.ts` | `saveFileSync_append_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync append test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 13 | `common/file.test.ts` | `saveFileSync_append_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync append test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 14 | `common/file.test.ts` | `saveFileSync_append_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync append test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 15 | `common/file.test.ts` | `saveFileSync_append_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（saveFileSync append test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 16 | `common/log.test.ts` | `debug_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（debug test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 17 | `common/log.test.ts` | `debug_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（debug test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 18 | `common/log.test.ts` | `info_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（info test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 19 | `common/log.test.ts` | `info_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（info test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 20 | `common/log.test.ts` | `error_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（error test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 21 | `common/log.test.ts` | `warn_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（warn test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 22 | `common/log.test.ts` | `file_test_last` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（file test last），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 23 | `common/re.test.ts` | `search_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（search test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 24 | `common/re.test.ts` | `search_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（search test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 25 | `common/re.test.ts` | `search_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（search test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 26 | `common/re.test.ts` | `search_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（search test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 27 | `common/re.test.ts` | `match_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（match test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 28 | `common/re.test.ts` | `match_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（match test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 29 | `common/re.test.ts` | `match_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（match test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 30 | `common/re.test.ts` | `match_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（match test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 31 | `common/re.test.ts` | `removeReg_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeReg test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 32 | `common/re.test.ts` | `removeReg_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeReg test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 33 | `common/re.test.ts` | `removeReg_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeReg test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 34 | `common/re.test.ts` | `removeReg_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeReg test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 35 | `common/re.test.ts` | `getReg_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getReg test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 36 | `common/re.test.ts` | `getReg_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getReg test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 37 | `common/re.test.ts` | `getReg_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getReg test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 38 | `common/re.test.ts` | `getReg_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getReg test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 39 | `common/re.test.ts` | `getFileInPath_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getFileInPath test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 40 | `common/re.test.ts` | `getFileInPath_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getFileInPath test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 41 | `common/re.test.ts` | `getFileInPath_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getFileInPath test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 42 | `common/re.test.ts` | `getFileInPath_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getFileInPath test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 43 | `common/re.test.ts` | `getPathInPath_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getPathInPath test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 44 | `common/re.test.ts` | `getPathInPath_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getPathInPath test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 45 | `common/re.test.ts` | `getPathInPath_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getPathInPath test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 46 | `common/re.test.ts` | `getPathInPath_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getPathInPath test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 47 | `common/re.test.ts` | `all_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（all test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 48 | `common/re.test.ts` | `all_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（all test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 49 | `common/re.test.ts` | `all_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（all test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 50 | `common/re.test.ts` | `all_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（all test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 51 | `common/re.test.ts` | `replaceAll_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceAll test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 52 | `common/re.test.ts` | `replaceAll_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceAll test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 53 | `common/re.test.ts` | `replaceAll_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceAll test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 54 | `common/re.test.ts` | `replaceAll_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceAll test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 55 | `common/tool.test.ts` | `getCurrentTimeString_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getCurrentTimeString test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 56 | `common/tool.test.ts` | `replaceall_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceall test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 57 | `common/tool.test.ts` | `replaceall_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceall test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 58 | `common/tool.test.ts` | `replaceall_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceall test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 59 | `common/tool.test.ts` | `replaceall_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（replaceall test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 60 | `common/tool.test.ts` | `getTab_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getTab test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 61 | `common/tool.test.ts` | `getTab_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getTab test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 62 | `common/tool.test.ts` | `getTab_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getTab test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 63 | `common/tool.test.ts` | `getTab_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（getTab test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 64 | `common/tool.test.ts` | `removeComments_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeComments test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 65 | `common/tool.test.ts` | `removeComments_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeComments test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 66 | `common/tool.test.ts` | `removeComments_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeComments test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 67 | `common/tool.test.ts` | `removeComments_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeComments test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 68 | `common/tool.test.ts` | `generateRandomInteger_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（generateRandomInteger test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 69 | `common/tool.test.ts` | `generateRandomInteger_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（generateRandomInteger test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 70 | `common/tool.test.ts` | `generateRandomInteger_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（generateRandomInteger test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 71 | `common/tool.test.ts` | `generateRandomInteger_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（generateRandomInteger test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 72 | `common/tool.test.ts` | `removeTab_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeTab test 1），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 73 | `common/tool.test.ts` | `removeTab_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeTab test 2），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 74 | `common/tool.test.ts` | `removeTab_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeTab test 3），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 75 | `common/tool.test.ts` | `removeTab_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（removeTab test 4），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 76 | `extension.test.ts` | `Sample test` | 通用能力测试 | 2（主，兼容3/4） | 验证通用能力（Sample test），确保配置、文件、日志、正则与工具函数行为正确并可稳定支撑三条业务链路。 |
| 77 | `gen/gendts.test.ts` | `genDtsFile_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（genDtsFile test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 78 | `gen/gendts.test.ts` | `genDtsFile_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（genDtsFile test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 79 | `gen/gendts.test.ts` | `genDtsFile_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（genDtsFile test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 80 | `gen/gendts.test.ts` | `genDtsFile_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（genDtsFile test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 81 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsClasses test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 82 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsClasses test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 83 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsClasses test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 84 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsClasses test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 85 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsEnum test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 86 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsEnum test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 87 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsEnum test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 88 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsEnum test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 89 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsFunction test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 90 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsFunction test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 91 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsFunction test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 92 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsFunction test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 93 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsStructs test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 94 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsStructs test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 95 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsStructs test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 96 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsStructs test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 97 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（transTskey2Ckey test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 98 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（transTskey2Ckey test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 99 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（transTskey2Ckey test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 100 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（transTskey2Ckey test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 101 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_5` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（transTskey2Ckey test 5），确保类型映射、函数声明与结构定义输出符合预期。 |
| 102 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsUnions test 1），确保类型映射、函数声明与结构定义输出符合预期。 |
| 103 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsUnions test 2），确保类型映射、函数声明与结构定义输出符合预期。 |
| 104 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsUnions test 3），确保类型映射、函数声明与结构定义输出符合预期。 |
| 105 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 DTS 相关生成能力（getDtsUnions test 4），确保类型映射、函数声明与结构定义输出符合预期。 |
| 106 | `gen/genidlfile.test.ts` | `getParcelType_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（getParcelType test 1），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 107 | `gen/genidlfile.test.ts` | `getParcelType_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（getParcelType test 2），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 108 | `gen/genidlfile.test.ts` | `getParcelType_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（getParcelType test 3），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 109 | `gen/genidlfile.test.ts` | `getParcelType_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（getParcelType test 4），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 110 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonCppFile test 1），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 111 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonCppFile test 2），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 112 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonCppFile test 3），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 113 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonCppFile test 4），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 114 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonHFile test 1），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 115 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonHFile test 2），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 116 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonHFile test 3），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 117 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genNapiCommonHFile test 4），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 118 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（doGenProxyHFile test 1），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 119 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（doGenProxyHFile test 2），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 120 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（doGenProxyHFile test 3），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 121 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（doGenProxyHFile test 4），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 122 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genProxyHFile test 1），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 123 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genProxyHFile test 2），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 124 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genProxyHFile test 3），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 125 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 相关生成能力（genProxyHFile test 4），确保头文件/源文件/代理文件生成内容与路径处理正确。 |
| 126 | `parse/parsec.test.ts` | `parseEnum_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum test 1），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 127 | `parse/parsec.test.ts` | `parseEnum_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum test 2），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 128 | `parse/parsec.test.ts` | `parseEnum_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum test 3），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 129 | `parse/parsec.test.ts` | `parseEnum_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum test 4），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 130 | `parse/parsecclass.test.ts` | `parseClass_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseClass c test 1），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 131 | `parse/parsecclass.test.ts` | `parseClass_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseClass c test 2），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 132 | `parse/parsecclass.test.ts` | `parseClass_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseClass c test 3），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 133 | `parse/parsecclass.test.ts` | `parseClass_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseClass c test 4），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 134 | `parse/parsecenum.test.ts` | `parseEnum_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum c test 1），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 135 | `parse/parsecenum.test.ts` | `parseEnum_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum c test 2），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 136 | `parse/parsecenum.test.ts` | `parseEnum_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum c test 3），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 137 | `parse/parsecenum.test.ts` | `parseEnum_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseEnum c test 4），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 138 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseFunction c test 1），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 139 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseFunction c test 2），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 140 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_21` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseFunction c test 21），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 141 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseFunction c test 3），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 142 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseFunction c test 4），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 143 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseStruct c test 1），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 144 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseStruct c test 2），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 145 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseStruct c test 3），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 146 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseStruct c test 4），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 147 | `parse/parsecunion.test.ts` | `parseUnion_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseUnion c test 1），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 148 | `parse/parsecunion.test.ts` | `parseUnion_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseUnion c test 2），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 149 | `parse/parsecunion.test.ts` | `parseUnion_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseUnion c test 3），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 150 | `parse/parsecunion.test.ts` | `parseUnion_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 解析能力（parseUnion c test 4），确保 class/struct/enum/func 信息可被正确提取并支撑 h2dts/h2dtscpp 生成流程。 |
| 151 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 1），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 152 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 2），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 153 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 154 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 4），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 155 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 5），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 156 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 157 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 7），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 158 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 8），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 159 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 9），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 160 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 10），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 161 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 11），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 162 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 12），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 163 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 13），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 164 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 14），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 165 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 15），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 166 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 16），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 167 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 17），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 168 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 18），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 169 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 19），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 170 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 20），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 171 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 21），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 172 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 22），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 173 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 23），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 174 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 24），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 175 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 25），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 176 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 26），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 177 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 27），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 178 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 28），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 179 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 41），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 180 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 42），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 181 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 43），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 182 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 44），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 183 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 45），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 184 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 46），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 185 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 47），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 186 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 48），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 187 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 49），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 188 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 50），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 189 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 51），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 190 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 52），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 191 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 53），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 192 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 54），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 193 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 55），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 194 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 56），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 195 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 57），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 196 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 58），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 197 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 59），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 198 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 60），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 199 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 61），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 200 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 62），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 201 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 63），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 202 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 64），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 203 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 65），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 204 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 66），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 205 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 67），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 206 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 68），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 207 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 69），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 208 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 70），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 209 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 71），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 210 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 72），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 211 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 73），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 212 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 74），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 213 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseClass ts test 75），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 214 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 1），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 215 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 2），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 216 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 217 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 4），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 218 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 5），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 219 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 220 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 7），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 221 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 8），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 222 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 11），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 223 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 12），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 224 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 13），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 225 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 14），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 226 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 15），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 227 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 16），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 228 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 17），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 229 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 18），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 230 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 21），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 231 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 22），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 232 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 23），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 233 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 24），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 234 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 25），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 235 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 26），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 236 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 27），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 237 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 28），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 238 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 31），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 239 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 32），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 240 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 33），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 241 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 34），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 242 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 35），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 243 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 36），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 244 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 37），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 245 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseEnum ts test 38），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 246 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 1），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 247 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 2），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 248 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 249 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 250 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 4），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 251 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 5），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 252 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 253 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 254 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 7），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 255 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 8），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 256 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 9），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 257 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 10），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 258 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 11），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 259 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 12），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 260 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 13），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 261 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 14），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 262 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 15），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 263 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 16），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 264 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 17），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 265 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 18），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 266 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 19），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 267 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 20），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 268 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 21），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 269 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 22），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 270 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 23），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 271 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 24），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 272 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 25），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 273 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 26），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 274 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 27），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 275 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 28），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 276 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_29` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 29），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 277 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_30` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 30），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 278 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 31），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 279 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 32），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 280 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 33），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 281 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 34），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 282 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 35），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 283 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 36），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 284 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 37），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 285 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 38），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 286 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_39` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 39），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 287 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_40` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 40），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 288 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 41），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 289 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 42），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 290 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 43），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 291 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 51），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 292 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 52），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 293 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 53），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 294 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 54），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 295 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 55），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 296 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 56），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 297 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 57），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 298 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 58），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 299 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 59），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 300 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 60），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 301 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 61），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 302 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 62），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 303 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 63），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 304 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 64），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 305 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 65），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 306 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 66），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 307 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 67），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 308 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 68），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 309 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 69），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 310 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 70），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 311 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 71），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 312 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 72），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 313 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseFunc ts test 73），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 314 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 1），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 315 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 2），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 316 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 317 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 4），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 318 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 5），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 319 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 320 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 7），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 321 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 8），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 322 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 9），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 323 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 10），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 324 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 11），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 325 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 12），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 326 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 13），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 327 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 14），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 328 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 15），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 329 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 16），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 330 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 17），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 331 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 18），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 332 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 19），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 333 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 20），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 334 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 21），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 335 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 22），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 336 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 23），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 337 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 24），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 338 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 25），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 339 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 26），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 340 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 27），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 341 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 28），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 342 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 41），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 343 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 42），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 344 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 43），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 345 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 44），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 346 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 45），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 347 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 46），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 348 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 47），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 349 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 48），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 350 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 49），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 351 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 50），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 352 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 51），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 353 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 52），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 354 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 53），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 355 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 54），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 356 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 55），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 357 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 56），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 358 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 57），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 359 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 58），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 360 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 59），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 361 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 60），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 362 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 61），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 363 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 62），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 364 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 63），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 365 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 64），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 366 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 65），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 367 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 66），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 368 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 67），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 369 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 68），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 370 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 69），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 371 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 70），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 372 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 71），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 373 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 72），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 374 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 73），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 375 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 74），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 376 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseStruct ts test 75），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 377 | `parse/parsetstype.test.ts` | `parseType_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 1），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 378 | `parse/parsetstype.test.ts` | `parseType_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 2），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 379 | `parse/parsetstype.test.ts` | `parseType_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 380 | `parse/parsetstype.test.ts` | `parseType_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 4），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 381 | `parse/parsetstype.test.ts` | `parseType_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 5），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 382 | `parse/parsetstype.test.ts` | `parseType_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 383 | `parse/parsetstype.test.ts` | `parseType_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 7），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 384 | `parse/parsetstype.test.ts` | `parseType_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 8），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 385 | `parse/parsetstype.test.ts` | `parseType_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 9），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 386 | `parse/parsetstype.test.ts` | `parseType_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 10），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 387 | `parse/parsetstype.test.ts` | `parseType_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 11），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 388 | `parse/parsetstype.test.ts` | `parseType_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 12），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 389 | `parse/parsetstype.test.ts` | `parseType_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 13），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 390 | `parse/parsetstype.test.ts` | `parseType_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 14），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 391 | `parse/parsetstype.test.ts` | `parseType_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 15），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 392 | `parse/parsetstype.test.ts` | `parseType_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 16），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 393 | `parse/parsetstype.test.ts` | `parseType_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 17），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 394 | `parse/parsetstype.test.ts` | `parseType_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 18），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 395 | `parse/parsetstype.test.ts` | `parseType_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 19），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 396 | `parse/parsetstype.test.ts` | `parseType_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 20），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 397 | `parse/parsetstype.test.ts` | `parseType_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 21），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 398 | `parse/parsetstype.test.ts` | `parseType_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 22），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 399 | `parse/parsetstype.test.ts` | `parseType_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 23），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 400 | `parse/parsetstype.test.ts` | `parseType_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 24），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 401 | `parse/parsetstype.test.ts` | `parseType_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 25），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 402 | `parse/parsetstype.test.ts` | `parseType_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 26），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 403 | `parse/parsetstype.test.ts` | `parseType_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 27），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 404 | `parse/parsetstype.test.ts` | `parseType_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 28），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 405 | `parse/parsetstype.test.ts` | `parseType_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 41），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 406 | `parse/parsetstype.test.ts` | `parseType_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 42），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 407 | `parse/parsetstype.test.ts` | `parseType_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 43），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 408 | `parse/parsetstype.test.ts` | `parseType_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 44），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 409 | `parse/parsetstype.test.ts` | `parseType_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 45），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 410 | `parse/parsetstype.test.ts` | `parseType_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 46），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 411 | `parse/parsetstype.test.ts` | `parseType_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 47），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 412 | `parse/parsetstype.test.ts` | `parseType_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 48），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 413 | `parse/parsetstype.test.ts` | `parseType_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 49），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 414 | `parse/parsetstype.test.ts` | `parseType_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 50），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 415 | `parse/parsetstype.test.ts` | `parseType_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 51），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 416 | `parse/parsetstype.test.ts` | `parseType_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 52），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 417 | `parse/parsetstype.test.ts` | `parseType_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 53），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 418 | `parse/parsetstype.test.ts` | `parseType_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 54），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 419 | `parse/parsetstype.test.ts` | `parseType_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 55），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 420 | `parse/parsetstype.test.ts` | `parseType_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 56），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 421 | `parse/parsetstype.test.ts` | `parseType_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 57），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 422 | `parse/parsetstype.test.ts` | `parseType_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 58），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 423 | `parse/parsetstype.test.ts` | `parseType_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 59），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 424 | `parse/parsetstype.test.ts` | `parseType_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 60），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 425 | `parse/parsetstype.test.ts` | `parseType_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 61），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 426 | `parse/parsetstype.test.ts` | `parseType_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 62），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 427 | `parse/parsetstype.test.ts` | `parseType_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 63），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 428 | `parse/parsetstype.test.ts` | `parseType_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 64），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 429 | `parse/parsetstype.test.ts` | `parseType_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 65），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 430 | `parse/parsetstype.test.ts` | `parseType_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 66），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 431 | `parse/parsetstype.test.ts` | `parseType_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 67），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 432 | `parse/parsetstype.test.ts` | `parseType_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 68），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 433 | `parse/parsetstype.test.ts` | `parseType_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 69），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 434 | `parse/parsetstype.test.ts` | `parseType_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 70），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 435 | `parse/parsetstype.test.ts` | `parseType_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 71），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 436 | `parse/parsetstype.test.ts` | `parseType_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 72），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 437 | `parse/parsetstype.test.ts` | `parseType_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 73），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 438 | `parse/parsetstype.test.ts` | `parseType_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 74），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 439 | `parse/parsetstype.test.ts` | `parseType_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseType ts test 75），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 440 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 1），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 441 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 2），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 442 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 3），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 443 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 4），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 444 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 5），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 445 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 6），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 446 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 7），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 447 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 8），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 448 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 9），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 449 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 10），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 450 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 11），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 451 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 12），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 452 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 13），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 453 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 14），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 454 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 15），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 455 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 16），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 456 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 17），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 457 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 18），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 458 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 19），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 459 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 20），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 460 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 21），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 461 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 22），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 462 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 23），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 463 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 31），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 464 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 32），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 465 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 33），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 466 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 34），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 467 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 35），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 468 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 36），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 469 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 37），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 470 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 38），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 471 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_39` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 39），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 472 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_40` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 40），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 473 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 41），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 474 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 42），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 475 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 43），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 476 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 44），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 477 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 45），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 478 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 46），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 479 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 47），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 480 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 48），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 481 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 49），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 482 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 50），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 483 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 51），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 484 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 52），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 485 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS 解析能力（parseUnion ts test 53），确保函数/类型/结构信息可被正确提取并支撑后续 dts2cpp/h2dtscpp 生成流程。 |
| 486 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0001` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0001` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 487 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0002` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0002` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 488 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0003` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0003` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 489 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0004` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0004` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 490 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0005` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0005` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 491 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0006` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0006` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 492 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0007` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0007` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 493 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0008` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0008` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 494 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0009` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0009` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 495 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0010` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0010` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 496 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0011` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0011` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 497 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0012` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0012` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 498 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0013` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0013` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 499 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0014` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0014` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 500 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0015` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0015` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 501 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0016` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0016` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 502 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0017` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0017` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 503 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0018` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0018` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 504 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_type_unique_0019` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_type_unique_0019` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 505 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0022` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0022` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 506 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0023` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0023` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 507 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0024` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0024` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 508 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0025` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0025` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 509 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0028` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0028` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 510 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0029` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0029` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 511 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_callback_unique_0030` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_callback_unique_0030` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 512 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0031` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0031` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 513 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0032` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0032` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 514 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0033` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0033` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 515 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0036` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0036` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 516 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0037` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0037` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 517 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0038` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0038` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 518 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0041` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0041` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 519 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0042` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0042` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 520 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0043` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0043` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 521 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0046` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0046` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 522 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0047` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0047` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 523 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0048` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0048` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 524 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0061` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0061` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 525 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0062` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0062` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 526 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0064` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0064` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 527 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0066` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0066` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 528 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0067` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0067` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 529 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0074` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0074` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 530 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0075` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0075` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 531 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0077` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0077` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 532 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0079` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0079` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 533 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0080` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0080` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 534 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0087` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0087` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 535 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0088` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0088` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 536 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0090` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0090` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 537 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0092` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0092` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 538 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0093` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0093` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 539 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0100` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0100` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 540 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0101` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0101` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 541 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0103` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0103` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 542 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0105` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0105` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 543 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_arrow_unique_0106` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_arrow_unique_0106` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 544 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0001` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0001` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 545 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0002` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0002` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 546 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0003` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0003` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 547 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0004` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0004` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 548 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0005` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0005` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 549 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0006` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0006` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 550 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0007` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0007` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 551 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0008` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0008` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 552 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0009` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0009` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 553 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0010` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0010` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 554 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0011` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0011` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 555 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0012` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0012` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 556 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0013` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0013` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 557 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0014` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0014` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 558 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0015` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0015` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 559 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0016` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0016` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 560 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0017` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0017` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 561 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0018` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0018` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 562 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_ext_0019` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_ext_0019` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 563 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_chain_ext_0001` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_chain_ext_0001` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 564 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_chain_ext_0002` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_chain_ext_0002` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 565 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_chain_ext_0003` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_chain_ext_0003` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 566 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_chain_ext_0004` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_chain_ext_0004` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 567 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_chain_ext_0006` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_chain_ext_0006` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 568 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_any_object_chain_ext_0012` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_any_object_chain_ext_0012` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 569 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0001` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0001` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 570 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0002` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0002` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 571 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0003` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0003` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 572 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0004` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0004` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 573 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0005` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0005` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 574 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0006` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0006` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 575 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0007` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0007` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 576 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0008` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0008` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 577 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0009` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0009` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 578 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0010` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0010` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 579 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0011` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0011` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 580 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0012` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0012` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 581 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0013` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0013` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 582 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0014` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0014` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 583 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0015` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0015` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 584 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0016` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0016` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 585 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0017` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0017` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 586 | `performance/conversion_dts2cpp_performance.part01.test.ts` | `dts2cpp_expand_unique_0018` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0018` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 587 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0019` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0019` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 588 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0020` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0020` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 589 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0021` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0021` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 590 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0022` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0022` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 591 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0023` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0023` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 592 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0024` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0024` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 593 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0025` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0025` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 594 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0026` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0026` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 595 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0027` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0027` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 596 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0028` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0028` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 597 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0029` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0029` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 598 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0030` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0030` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 599 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0031` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0031` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 600 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0032` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0032` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 601 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0033` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0033` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 602 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0034` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0034` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 603 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0035` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0035` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 604 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0036` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0036` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 605 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0037` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0037` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 606 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0038` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0038` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 607 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0039` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0039` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 608 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0040` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0040` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 609 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0041` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0041` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 610 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0042` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0042` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 611 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0043` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0043` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 612 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0044` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0044` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 613 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0045` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0045` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 614 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0046` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0046` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 615 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0047` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0047` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 616 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0048` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0048` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 617 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0049` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0049` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 618 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0050` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0050` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 619 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0051` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0051` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 620 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0052` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0052` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 621 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0053` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0053` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 622 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0054` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0054` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 623 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0055` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0055` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 624 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0056` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0056` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 625 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0057` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0057` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 626 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0058` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0058` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 627 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0059` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0059` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 628 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0060` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0060` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 629 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0061` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0061` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 630 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0062` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0062` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 631 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0063` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0063` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 632 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0064` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0064` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 633 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0065` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0065` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 634 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0066` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0066` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 635 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0067` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0067` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 636 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0068` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0068` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 637 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0069` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0069` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 638 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0070` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0070` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 639 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0071` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0071` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 640 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0072` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0072` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 641 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0073` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0073` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 642 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0074` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0074` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 643 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0075` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0075` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 644 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0076` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0076` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 645 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0077` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0077` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 646 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0078` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0078` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 647 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0079` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0079` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 648 | `performance/conversion_dts2cpp_performance.part02.test.ts` | `dts2cpp_expand_unique_0080` | 性能测试 | 2 | 验证 dts2cpp 链路在 `dts2cpp_expand_unique_0080` 场景下的类型转换/解析生成性能，覆盖变量、参数与返回值映射能力。 |
| 649 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 650 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0002` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0002` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 651 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0003` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0003` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 652 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0004` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0004` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 653 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0005` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0005` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 654 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0006` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0006` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 655 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0007` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0007` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 656 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0008` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0008` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 657 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0009` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0009` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 658 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0010` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0010` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 659 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0011` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0011` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 660 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0012` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0012` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 661 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0013` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0013` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 662 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0014` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0014` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 663 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0016` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0016` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 664 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0017` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0017` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 665 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0018` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0018` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 666 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0019` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0019` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 667 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0020` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0020` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 668 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0021` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0021` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 669 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0023` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0023` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 670 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0024` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0024` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 671 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0025` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0025` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 672 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0026` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0026` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 673 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0027` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0027` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 674 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0028` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0028` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 675 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0029` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0029` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 676 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0030` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0030` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 677 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0031` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0031` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 678 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0032` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0032` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 679 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0033` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0033` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 680 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0034` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0034` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 681 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0035` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0035` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 682 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0036` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0036` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 683 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0037` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0037` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 684 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0038` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0038` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 685 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0039` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0039` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 686 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0040` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0040` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 687 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0041` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0041` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 688 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0042` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0042` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 689 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0043` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0043` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 690 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0065` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0065` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 691 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0066` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0066` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 692 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0067` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0067` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 693 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0068` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0068` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 694 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0069` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0069` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 695 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0070` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0070` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 696 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0071` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0071` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 697 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0072` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0072` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 698 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0073` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0073` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 699 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0074` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0074` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 700 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0075` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0075` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 701 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0076` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0076` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 702 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0077` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0077` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 703 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0078` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0078` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 704 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0079` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0079` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 705 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0080` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0080` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 706 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0081` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0081` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 707 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0082` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0082` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 708 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0083` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0083` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 709 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0084` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0084` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 710 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0085` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0085` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 711 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0107` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0107` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 712 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0108` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0108` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 713 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0109` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0109` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 714 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0110` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0110` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 715 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0111` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0111` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 716 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0112` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0112` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 717 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0113` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0113` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 718 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0114` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0114` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 719 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0115` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0115` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 720 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0116` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0116` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 721 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0117` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0117` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 722 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0118` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0118` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 723 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0119` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0119` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 724 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0120` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0120` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 725 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0121` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0121` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 726 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0122` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0122` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 727 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0123` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0123` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 728 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0124` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0124` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 729 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0125` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0125` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 730 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0126` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0126` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 731 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0127` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0127` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 732 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0149` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0149` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 733 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0150` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0150` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 734 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0151` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0151` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 735 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0152` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0152` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 736 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0153` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0153` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 737 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0154` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0154` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 738 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0155` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0155` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 739 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0156` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0156` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 740 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0157` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0157` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 741 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0158` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0158` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 742 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0159` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0159` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 743 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0160` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0160` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 744 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0161` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0161` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 745 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0162` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0162` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 746 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0163` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0163` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 747 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0164` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0164` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 748 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0165` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0165` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 749 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0166` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0166` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 750 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0167` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0167` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 751 | `performance/conversion_h2dts_performance.part01.test.ts` | `h2dts_type_unique_0168` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0168` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 752 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0169` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0169` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 753 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0191` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0191` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 754 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0192` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0192` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 755 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0193` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0193` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 756 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0194` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0194` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 757 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0195` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0195` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 758 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0196` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0196` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 759 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0197` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0197` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 760 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0198` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0198` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 761 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0199` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0199` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 762 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0200` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0200` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 763 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0201` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0201` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 764 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0202` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0202` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 765 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0203` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0203` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 766 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0204` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0204` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 767 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0205` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0205` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 768 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0206` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0206` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 769 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0207` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0207` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 770 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0208` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0208` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 771 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0209` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0209` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 772 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0210` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0210` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 773 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0211` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0211` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 774 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0317` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0317` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 775 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0318` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0318` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 776 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0319` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0319` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 777 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0320` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0320` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 778 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0321` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0321` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 779 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0322` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0322` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 780 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0323` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0323` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 781 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0324` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0324` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 782 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0325` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0325` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 783 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0326` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0326` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 784 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0327` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0327` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 785 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0328` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0328` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 786 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0329` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0329` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 787 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0330` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0330` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 788 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0331` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0331` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 789 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0332` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0332` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 790 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0333` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0333` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 791 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0334` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0334` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 792 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0335` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0335` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 793 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0336` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0336` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 794 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0337` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0337` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 795 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0720` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0720` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 796 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0721` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0721` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 797 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0723` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0723` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 798 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0724` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0724` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 799 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0725` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0725` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 800 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0726` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0726` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 801 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0727` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0727` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 802 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0728` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0728` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 803 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0729` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0729` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 804 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0730` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0730` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 805 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0731` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0731` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 806 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0732` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0732` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 807 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0733` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0733` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 808 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0734` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0734` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 809 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0735` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0735` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 810 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0736` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0736` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 811 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0737` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0737` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 812 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0738` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0738` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 813 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0739` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0739` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 814 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0740` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0740` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 815 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0741` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0741` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 816 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0742` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0742` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 817 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0743` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0743` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 818 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0744` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0744` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 819 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0745` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0745` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 820 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0747` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0747` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 821 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0748` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0748` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 822 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0749` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0749` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 823 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0750` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0750` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 824 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0751` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0751` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 825 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0752` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0752` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 826 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0753` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0753` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 827 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0754` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0754` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 828 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0755` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0755` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 829 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0756` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0756` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 830 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0757` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0757` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 831 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0758` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0758` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 832 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0759` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0759` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 833 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0760` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0760` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 834 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0761` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0761` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 835 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0762` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0762` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 836 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0763` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0763` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 837 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0764` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0764` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 838 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0765` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0765` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 839 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0766` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0766` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 840 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0768` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0768` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 841 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0769` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0769` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 842 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0770` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0770` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 843 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0771` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0771` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 844 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0772` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0772` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 845 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0773` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0773` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 846 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0774` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0774` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 847 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0775` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0775` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 848 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0776` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0776` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 849 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0777` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0777` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 850 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0778` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0778` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 851 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0779` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0779` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 852 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0780` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0780` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 853 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0781` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0781` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 854 | `performance/conversion_h2dts_performance.part02.test.ts` | `h2dts_type_unique_0782` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0782` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 855 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0783` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0783` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 856 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0784` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0784` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 857 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0785` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0785` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 858 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0786` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0786` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 859 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0787` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0787` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 860 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0789` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0789` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 861 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0790` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0790` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 862 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0791` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0791` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 863 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0792` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0792` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 864 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0793` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0793` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 865 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0794` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0794` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 866 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0795` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0795` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 867 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0796` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0796` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 868 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0797` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0797` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 869 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0798` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0798` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 870 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0799` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0799` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 871 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0800` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0800` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 872 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0801` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0801` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 873 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0802` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0802` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 874 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0803` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0803` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 875 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0804` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0804` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 876 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0805` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0805` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 877 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0806` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0806` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 878 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0807` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0807` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 879 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0815` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0815` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 880 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0816` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0816` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 881 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0817` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0817` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 882 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0818` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0818` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 883 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0819` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0819` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 884 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0820` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0820` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 885 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0821` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0821` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 886 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0829` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0829` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 887 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0830` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0830` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 888 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0831` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0831` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 889 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0832` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0832` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 890 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0833` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0833` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 891 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0834` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0834` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 892 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0835` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0835` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 893 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0843` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0843` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 894 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0844` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0844` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 895 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0845` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0845` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 896 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0846` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0846` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 897 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0847` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0847` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 898 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0848` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0848` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 899 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0849` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0849` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 900 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0857` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0857` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 901 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0858` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0858` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 902 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0859` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0859` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 903 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0860` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0860` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 904 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0861` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0861` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 905 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0862` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0862` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 906 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0863` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0863` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 907 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0899` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0899` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 908 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0900` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0900` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 909 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0901` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0901` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 910 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0902` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0902` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 911 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0903` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0903` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 912 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0904` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0904` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 913 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_0905` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_0905` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 914 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1062` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1062` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 915 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1063` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1063` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 916 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1064` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1064` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 917 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1065` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1065` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 918 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1066` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1066` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 919 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1067` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1067` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 920 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1068` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1068` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 921 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1069` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1069` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 922 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1070` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1070` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 923 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1071` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1071` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 924 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1072` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1072` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 925 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1073` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1073` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 926 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1074` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1074` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 927 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1075` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1075` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 928 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1076` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1076` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 929 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1077` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1077` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 930 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1078` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1078` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 931 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1079` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1079` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 932 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1080` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1080` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 933 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1081` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1081` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 934 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1082` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1082` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 935 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1083` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1083` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 936 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1084` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1084` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 937 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1085` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1085` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 938 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_type_unique_1087` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_type_unique_1087` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 939 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 940 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0016` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0016` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 941 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0017` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0017` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 942 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0022` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0022` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 943 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0023` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0023` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 944 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0038` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0038` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 945 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0039` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0039` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 946 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0044` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0044` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 947 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0059` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0059` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 948 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_function_scene_0060` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_function_scene_0060` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 949 | `performance/conversion_h2dts_performance.part03.test.ts` | `h2dts_gen_multi_scene_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 950 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0002` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0002` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 951 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0003` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0003` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 952 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0004` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0004` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 953 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0005` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0005` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 954 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0006` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0006` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 955 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0007` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0007` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 956 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0008` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0008` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 957 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0009` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0009` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 958 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0010` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0010` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 959 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0011` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0011` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 960 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0012` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0012` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 961 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0013` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0013` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 962 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0014` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0014` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 963 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0015` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0015` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 964 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0016` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0016` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 965 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0017` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0017` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 966 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0018` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0018` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 967 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0019` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0019` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 968 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0020` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0020` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 969 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0021` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0021` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 970 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0022` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0022` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 971 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0023` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0023` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 972 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0024` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0024` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 973 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0025` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0025` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 974 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0026` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0026` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 975 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0027` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0027` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 976 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0028` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0028` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 977 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0029` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0029` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 978 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0030` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0030` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 979 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0031` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0031` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 980 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0032` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0032` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 981 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0033` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0033` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 982 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0034` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0034` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 983 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0035` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0035` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 984 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0036` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0036` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 985 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0037` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0037` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 986 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0038` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0038` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 987 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0039` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0039` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 988 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0040` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0040` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 989 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0041` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0041` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 990 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0042` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0042` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 991 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0043` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0043` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 992 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0044` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0044` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 993 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0045` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0045` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 994 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0046` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0046` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 995 | `performance/conversion_h2dts_performance.part04.test.ts` | `h2dts_gen_multi_scene_0047` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0047` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 996 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0048` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0048` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 997 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0049` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0049` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 998 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0050` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0050` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 999 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0051` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0051` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1000 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0052` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0052` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1001 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0053` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0053` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1002 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0054` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0054` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1003 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0055` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0055` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1004 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0056` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0056` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1005 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0057` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0057` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1006 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0058` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0058` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1007 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0059` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0059` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1008 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0060` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0060` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1009 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0061` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0061` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1010 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0062` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0062` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1011 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0063` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0063` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1012 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0064` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0064` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1013 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0065` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0065` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1014 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0066` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0066` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1015 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0067` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0067` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1016 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0068` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0068` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1017 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0069` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0069` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1018 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0070` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0070` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1019 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0071` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0071` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1020 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0072` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0072` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1021 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0073` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0073` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1022 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0074` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0074` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1023 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0075` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0075` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1024 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0076` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0076` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1025 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0077` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0077` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1026 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0078` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0078` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1027 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0079` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0079` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1028 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0080` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0080` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1029 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0081` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0081` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1030 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0082` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0082` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1031 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0083` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0083` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1032 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0084` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0084` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1033 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0085` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0085` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1034 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0086` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0086` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1035 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0087` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0087` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1036 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0088` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0088` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1037 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0089` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0089` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1038 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0090` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0090` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1039 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0091` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0091` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1040 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0092` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0092` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1041 | `performance/conversion_h2dts_performance.part05.test.ts` | `h2dts_gen_multi_scene_0093` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0093` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1042 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0094` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0094` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1043 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0095` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0095` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1044 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0096` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0096` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1045 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0097` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0097` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1046 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0098` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0098` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1047 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0099` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0099` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1048 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0100` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0100` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1049 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0101` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0101` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1050 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0102` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0102` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1051 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0103` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0103` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1052 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0104` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0104` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1053 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0105` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0105` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1054 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0106` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0106` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1055 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0107` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0107` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1056 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0108` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0108` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1057 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0109` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0109` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1058 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0110` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0110` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1059 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0111` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0111` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1060 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0112` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0112` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1061 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0113` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0113` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1062 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0114` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0114` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1063 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0115` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0115` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1064 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0116` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0116` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1065 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0117` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0117` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1066 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0118` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0118` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1067 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0119` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0119` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1068 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_gen_multi_scene_0120` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_gen_multi_scene_0120` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1069 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1070 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0002` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0002` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1071 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0003` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0003` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1072 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0004` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0004` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1073 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0005` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0005` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1074 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0006` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0006` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1075 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0007` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0007` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1076 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0008` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0008` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1077 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0009` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0009` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1078 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0010` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0010` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1079 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0011` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0011` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1080 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0012` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0012` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1081 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0013` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0013` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1082 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0014` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0014` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1083 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_ext_0015` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_ext_0015` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1084 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_any_object_gen_ext_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_any_object_gen_ext_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1085 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1086 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0002` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0002` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1087 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0003` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0003` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1088 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0004` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0004` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1089 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0005` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0005` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1090 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0006` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0006` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1091 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0007` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0007` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1092 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0008` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0008` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1093 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0009` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0009` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1094 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0010` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0010` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1095 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0011` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0011` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1096 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0012` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0012` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1097 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0013` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0013` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1098 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0014` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0014` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1099 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0015` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0015` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1100 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0016` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0016` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1101 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0017` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0017` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1102 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0018` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0018` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1103 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0019` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0019` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1104 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0020` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0020` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1105 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0021` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0021` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1106 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0022` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0022` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1107 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0023` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0023` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1108 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0024` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0024` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1109 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0025` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0025` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1110 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0026` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0026` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1111 | `performance/conversion_h2dts_performance.part06.test.ts` | `h2dts_expand_unique_p09_0027` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0027` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1112 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0028` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0028` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1113 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0029` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0029` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1114 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0030` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0030` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1115 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0031` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0031` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1116 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0032` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0032` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1117 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0033` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0033` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1118 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0034` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0034` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1119 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0035` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0035` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1120 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0036` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0036` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1121 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0037` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0037` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1122 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0038` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0038` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1123 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0039` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0039` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1124 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0040` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0040` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1125 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0041` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0041` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1126 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0042` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0042` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1127 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0043` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0043` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1128 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0044` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0044` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1129 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0045` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0045` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1130 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0046` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0046` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1131 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0047` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0047` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1132 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0048` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0048` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1133 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0049` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0049` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1134 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0050` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0050` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1135 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0051` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0051` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1136 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0052` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0052` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1137 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0053` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0053` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1138 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0054` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0054` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1139 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0055` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0055` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1140 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0056` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0056` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1141 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0057` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0057` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1142 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0058` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0058` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1143 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0059` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0059` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1144 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0060` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0060` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1145 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0061` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0061` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1146 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0062` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0062` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1147 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0063` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0063` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1148 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0064` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0064` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1149 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0065` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0065` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1150 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0066` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0066` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1151 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0067` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0067` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1152 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0068` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0068` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1153 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0069` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0069` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1154 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0070` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0070` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1155 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0071` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0071` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1156 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0072` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0072` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1157 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0073` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0073` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1158 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0074` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0074` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1159 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0075` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0075` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1160 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0076` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0076` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1161 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0077` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0077` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1162 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0078` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0078` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1163 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0079` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0079` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1164 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0080` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0080` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1165 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0081` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0081` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1166 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0082` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0082` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1167 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0083` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0083` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1168 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0084` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0084` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1169 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0085` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0085` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1170 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0086` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0086` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1171 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0087` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0087` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1172 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0088` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0088` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1173 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0089` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0089` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1174 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0090` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0090` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1175 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0091` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0091` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1176 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0092` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0092` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1177 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0093` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0093` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1178 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0094` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0094` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1179 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0095` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0095` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1180 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0096` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0096` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1181 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0097` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0097` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1182 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0098` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0098` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1183 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0099` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0099` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1184 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0100` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0100` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1185 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0101` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0101` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1186 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0102` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0102` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1187 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0103` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0103` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1188 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0104` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0104` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1189 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0105` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0105` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1190 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0106` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0106` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1191 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0107` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0107` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1192 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0108` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0108` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1193 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0109` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0109` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1194 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p09_0110` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p09_0110` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1195 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1196 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0002` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0002` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1197 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0003` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0003` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1198 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0004` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0004` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1199 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0005` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0005` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1200 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0006` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0006` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1201 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0007` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0007` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1202 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0008` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0008` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1203 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0009` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0009` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1204 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0010` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0010` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1205 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0011` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0011` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1206 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0012` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0012` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1207 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0013` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0013` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1208 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0014` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0014` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1209 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0015` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0015` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1210 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0016` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0016` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1211 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0017` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0017` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1212 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0018` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0018` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1213 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0019` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0019` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1214 | `performance/conversion_h2dts_performance.part07.test.ts` | `h2dts_expand_unique_p10_0020` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0020` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1215 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0021` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0021` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1216 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0022` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0022` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1217 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0023` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0023` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1218 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0024` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0024` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1219 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0025` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0025` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1220 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0026` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0026` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1221 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0027` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0027` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1222 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0028` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0028` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1223 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0029` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0029` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1224 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0030` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0030` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1225 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0031` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0031` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1226 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0032` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0032` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1227 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0033` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0033` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1228 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0034` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0034` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1229 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0035` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0035` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1230 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0036` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0036` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1231 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0037` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0037` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1232 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0038` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0038` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1233 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0039` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0039` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1234 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0040` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0040` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1235 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0041` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0041` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1236 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0042` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0042` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1237 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0043` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0043` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1238 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0044` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0044` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1239 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0045` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0045` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1240 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0046` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0046` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1241 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0047` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0047` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1242 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0048` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0048` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1243 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0049` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0049` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1244 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0050` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0050` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1245 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0051` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0051` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1246 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0052` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0052` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1247 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0053` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0053` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1248 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0054` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0054` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1249 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0055` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0055` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1250 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0056` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0056` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1251 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0057` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0057` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1252 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0058` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0058` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1253 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0059` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0059` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1254 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0060` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0060` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1255 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0061` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0061` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1256 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0062` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0062` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1257 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0063` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0063` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1258 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0064` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0064` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1259 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0065` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0065` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1260 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0066` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0066` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1261 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0067` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0067` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1262 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0068` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0068` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1263 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0069` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0069` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1264 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0070` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0070` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1265 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0071` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0071` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1266 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0072` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0072` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1267 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0073` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0073` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1268 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0074` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0074` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1269 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0075` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0075` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1270 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0076` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0076` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1271 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0077` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0077` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1272 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0078` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0078` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1273 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0079` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0079` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1274 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0080` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0080` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1275 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0081` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0081` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1276 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0082` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0082` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1277 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0083` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0083` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1278 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0084` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0084` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1279 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0085` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0085` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1280 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0086` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0086` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1281 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0087` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0087` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1282 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0088` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0088` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1283 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0089` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0089` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1284 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0090` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0090` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1285 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0091` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0091` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1286 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0092` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0092` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1287 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0093` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0093` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1288 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0094` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0094` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1289 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0095` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0095` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1290 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0096` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0096` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1291 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0097` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0097` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1292 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0098` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0098` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1293 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0099` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0099` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1294 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0100` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0100` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1295 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0101` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0101` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1296 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0102` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0102` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1297 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0103` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0103` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1298 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0104` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0104` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1299 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0105` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0105` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1300 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0106` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0106` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1301 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0107` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0107` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1302 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0108` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0108` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1303 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0109` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0109` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1304 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p10_0110` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p10_0110` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1305 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0001` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0001` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1306 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0002` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0002` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1307 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0003` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0003` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1308 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0004` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0004` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1309 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0005` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0005` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1310 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0006` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0006` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1311 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0007` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0007` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1312 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0008` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0008` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1313 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0009` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0009` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1314 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0010` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0010` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1315 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0011` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0011` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1316 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0012` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0012` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1317 | `performance/conversion_h2dts_performance.part08.test.ts` | `h2dts_expand_unique_p11_0013` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0013` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1318 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0014` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0014` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1319 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0015` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0015` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1320 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0016` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0016` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1321 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0017` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0017` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1322 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0018` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0018` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1323 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0019` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0019` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1324 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0020` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0020` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1325 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0021` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0021` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1326 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0022` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0022` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1327 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0023` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0023` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1328 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0024` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0024` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1329 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0025` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0025` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1330 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0026` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0026` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1331 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0027` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0027` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1332 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0028` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0028` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1333 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0029` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0029` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1334 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0030` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0030` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1335 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0031` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0031` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1336 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0032` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0032` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1337 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0033` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0033` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1338 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0034` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0034` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1339 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0035` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0035` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1340 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0036` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0036` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1341 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0037` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0037` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1342 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0038` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0038` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1343 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0039` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0039` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1344 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0040` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0040` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1345 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0041` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0041` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1346 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0042` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0042` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1347 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0043` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0043` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1348 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0044` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0044` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1349 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0045` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0045` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1350 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0046` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0046` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1351 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0047` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0047` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1352 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0048` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0048` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1353 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0049` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0049` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1354 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0050` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0050` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1355 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0051` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0051` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1356 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0052` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0052` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1357 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0053` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0053` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1358 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0054` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0054` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1359 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0055` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0055` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1360 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0056` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0056` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1361 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0057` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0057` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1362 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0058` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0058` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1363 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0059` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0059` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1364 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0060` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0060` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1365 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0061` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0061` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1366 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0062` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0062` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1367 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0063` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0063` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1368 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0064` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0064` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1369 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0065` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0065` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1370 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0066` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0066` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1371 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0067` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0067` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1372 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0068` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0068` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1373 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0069` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0069` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1374 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0070` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0070` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1375 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0071` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0071` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1376 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0072` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0072` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1377 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0073` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0073` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1378 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0074` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0074` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1379 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0075` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0075` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1380 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0076` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0076` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1381 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0077` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0077` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1382 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0078` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0078` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1383 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0079` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0079` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1384 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0080` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0080` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1385 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0081` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0081` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1386 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0082` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0082` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1387 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0083` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0083` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1388 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0084` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0084` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1389 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0085` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0085` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1390 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0086` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0086` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1391 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0087` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0087` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1392 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0088` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0088` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1393 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0089` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0089` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1394 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0090` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0090` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1395 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0091` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0091` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1396 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0092` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0092` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1397 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0093` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0093` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1398 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0094` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0094` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1399 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0095` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0095` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1400 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0096` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0096` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1401 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0097` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0097` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1402 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0098` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0098` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1403 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0099` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0099` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1404 | `performance/conversion_h2dts_performance.part09.test.ts` | `h2dts_expand_unique_p11_0100` | 性能测试 | 3 | 验证 h2dts 链路在 `h2dts_expand_unique_p11_0100` 场景下的 C++ 到 TS 类型转换与声明生成性能，覆盖基础类型、数组/容器与函数签名能力。 |
| 1405 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0002` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0002` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1406 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0003` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0003` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1407 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0004` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0004` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1408 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0005` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0005` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1409 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0006` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0006` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1410 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0007` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0007` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1411 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0008` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0008` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1412 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0009` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0009` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1413 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0010` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0010` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1414 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0012` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0012` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1415 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0013` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0013` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1416 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0014` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0014` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1417 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0015` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0015` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1418 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0016` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0016` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1419 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0017` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0017` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1420 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0018` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0018` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1421 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0020` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0020` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1422 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0021` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0021` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1423 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0022` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0022` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1424 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0023` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0023` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1425 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0024` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0024` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1426 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0025` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0025` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1427 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0026` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0026` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1428 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0027` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0027` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1429 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0028` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0028` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1430 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0029` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0029` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1431 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0030` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0030` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1432 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0031` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0031` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1433 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0032` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0032` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1434 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0033` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0033` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1435 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0034` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0034` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1436 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0035` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0035` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1437 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0053` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0053` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1438 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0054` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0054` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1439 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0055` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0055` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1440 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0056` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0056` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1441 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0057` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0057` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1442 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0058` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0058` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1443 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0059` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0059` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1444 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0060` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0060` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1445 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0061` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0061` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1446 | `performance/conversion_h2dtscpp_performance.part01.test.ts` | `h2dtscpp_trans_parseobj_unique_0062` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0062` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1447 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0064` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0064` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1448 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0065` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0065` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1449 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0066` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0066` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1450 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0067` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0067` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1451 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0068` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0068` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1452 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0069` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0069` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1453 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0070` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0070` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1454 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0072` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0072` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1455 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0073` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0073` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1456 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0074` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0074` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1457 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0075` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0075` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1458 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0076` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0076` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1459 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0077` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0077` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1460 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0078` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0078` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1461 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0079` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0079` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1462 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0080` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0080` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1463 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0081` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0081` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1464 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0082` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0082` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1465 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0083` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0083` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1466 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0084` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0084` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1467 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0085` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0085` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1468 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0086` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0086` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1469 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0087` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0087` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1470 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0088` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0088` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1471 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0090` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0090` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1472 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0091` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0091` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1473 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0092` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0092` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1474 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0093` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0093` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1475 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0094` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0094` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1476 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0095` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0095` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1477 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0096` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0096` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1478 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0098` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0098` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1479 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0099` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0099` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1480 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0100` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0100` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1481 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0101` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0101` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1482 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0102` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0102` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1483 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0103` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0103` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1484 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0104` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0104` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1485 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0105` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0105` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1486 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0106` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0106` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1487 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0107` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0107` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1488 | `performance/conversion_h2dtscpp_performance.part02.test.ts` | `h2dtscpp_trans_parseobj_unique_0108` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0108` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1489 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0109` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0109` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1490 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0110` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0110` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1491 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0111` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0111` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1492 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0112` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0112` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1493 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0113` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0113` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1494 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0114` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0114` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1495 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0116` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0116` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1496 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0117` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0117` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1497 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0118` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0118` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1498 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0119` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0119` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1499 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0120` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0120` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1500 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0121` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0121` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1501 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0122` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0122` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1502 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0124` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0124` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1503 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0125` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0125` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1504 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0126` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0126` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1505 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0127` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0127` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1506 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0128` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0128` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1507 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0129` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0129` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1508 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0130` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0130` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1509 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0131` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0131` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1510 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0132` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0132` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1511 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0133` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0133` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1512 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0134` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0134` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1513 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0135` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0135` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1514 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0136` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0136` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1515 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0137` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0137` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1516 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0138` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0138` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1517 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0139` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0139` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1518 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0140` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0140` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1519 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0142` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0142` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1520 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0143` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0143` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1521 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0144` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0144` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1522 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0145` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0145` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1523 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0146` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0146` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1524 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0147` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0147` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1525 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0148` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0148` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1526 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0150` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0150` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1527 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0151` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0151` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1528 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0152` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0152` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1529 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0153` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0153` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1530 | `performance/conversion_h2dtscpp_performance.part03.test.ts` | `h2dtscpp_trans_parseobj_unique_0154` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0154` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1531 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0155` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0155` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1532 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0156` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0156` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1533 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0157` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0157` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1534 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0158` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0158` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1535 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0159` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0159` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1536 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0160` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0160` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1537 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0161` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0161` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1538 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0162` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0162` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1539 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0163` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0163` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1540 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0164` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0164` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1541 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0165` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0165` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1542 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0166` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0166` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1543 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0168` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0168` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1544 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0169` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0169` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1545 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0170` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0170` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1546 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0171` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0171` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1547 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0172` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0172` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1548 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0173` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0173` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1549 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0174` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0174` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1550 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0176` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0176` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1551 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0177` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0177` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1552 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0178` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0178` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1553 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0179` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0179` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1554 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0180` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0180` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1555 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0181` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0181` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1556 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0182` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0182` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1557 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0183` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0183` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1558 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0184` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0184` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1559 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0185` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0185` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1560 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0186` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0186` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1561 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0187` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0187` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1562 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0188` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0188` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1563 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0189` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0189` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1564 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0190` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0190` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1565 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0191` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0191` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1566 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0192` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0192` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1567 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0194` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0194` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1568 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0195` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0195` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1569 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0196` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0196` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1570 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0197` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0197` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1571 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0198` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0198` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1572 | `performance/conversion_h2dtscpp_performance.part04.test.ts` | `h2dtscpp_trans_parseobj_unique_0199` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0199` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1573 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0200` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0200` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1574 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0202` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0202` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1575 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0203` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0203` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1576 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0204` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0204` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1577 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0205` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0205` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1578 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0206` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0206` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1579 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0207` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0207` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1580 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0208` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0208` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1581 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0209` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0209` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1582 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0210` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0210` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1583 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0211` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0211` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1584 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0212` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0212` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1585 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0213` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0213` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1586 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0214` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0214` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1587 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0215` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0215` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1588 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0216` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0216` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1589 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0217` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0217` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1590 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0218` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0218` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1591 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0220` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0220` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1592 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0221` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0221` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1593 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0222` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0222` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1594 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0223` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0223` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1595 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0224` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0224` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1596 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_trans_parseobj_unique_0225` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_trans_parseobj_unique_0225` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1597 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0001` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0001` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1598 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0002` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0002` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1599 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0003` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0003` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1600 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0004` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0004` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1601 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0005` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0005` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1602 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0006` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0006` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1603 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_ext_0012` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_ext_0012` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1604 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_chain_ext_0001` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_chain_ext_0001` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1605 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_any_object_chain_ext_0002` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_any_object_chain_ext_0002` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1606 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0001` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0001` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1607 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0002` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0002` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1608 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0003` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0003` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1609 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0004` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0004` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1610 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0005` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0005` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1611 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0006` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0006` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1612 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0007` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0007` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1613 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0008` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0008` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1614 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0009` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0009` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1615 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0010` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0010` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1616 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0011` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0011` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1617 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0012` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0012` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1618 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0013` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0013` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1619 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0014` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0014` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1620 | `performance/conversion_h2dtscpp_performance.part05.test.ts` | `h2dtscpp_expand_unique_0015` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0015` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1621 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0016` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0016` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1622 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0017` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0017` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1623 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0018` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0018` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1624 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0019` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0019` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1625 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0020` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0020` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1626 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0021` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0021` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1627 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0022` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0022` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1628 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0023` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0023` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1629 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0024` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0024` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1630 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0025` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0025` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1631 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0026` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0026` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1632 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0027` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0027` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1633 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0028` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0028` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1634 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0029` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0029` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1635 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0030` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0030` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1636 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0031` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0031` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1637 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0032` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0032` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1638 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0033` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0033` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1639 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0034` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0034` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1640 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0035` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0035` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1641 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0036` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0036` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1642 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0037` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0037` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1643 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0038` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0038` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1644 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0039` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0039` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1645 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0040` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0040` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1646 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0041` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0041` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1647 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0042` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0042` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1648 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0043` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0043` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1649 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0044` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0044` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1650 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0045` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0045` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1651 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0046` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0046` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1652 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0047` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0047` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1653 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0048` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0048` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1654 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0049` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0049` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1655 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0050` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0050` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1656 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0051` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0051` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1657 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0052` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0052` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1658 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0053` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0053` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1659 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0054` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0054` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1660 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0055` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0055` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1661 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0056` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0056` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1662 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0057` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0057` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1663 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0058` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0058` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1664 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0059` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0059` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1665 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0060` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0060` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1666 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0061` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0061` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1667 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0062` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0062` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1668 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0063` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0063` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1669 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0064` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0064` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1670 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0065` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0065` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1671 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0066` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0066` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1672 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0067` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0067` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1673 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0068` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0068` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1674 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0069` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0069` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1675 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0070` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0070` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1676 | `performance/conversion_h2dtscpp_performance.part06.test.ts` | `h2dtscpp_expand_unique_0071` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0071` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1677 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0072` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0072` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1678 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0073` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0073` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1679 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0074` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0074` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1680 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0075` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0075` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1681 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0076` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0076` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1682 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0077` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0077` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1683 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0078` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0078` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1684 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0079` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0079` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
| 1685 | `performance/conversion_h2dtscpp_performance.part07.test.ts` | `h2dtscpp_expand_unique_0080` | 性能测试 | 4 | 验证 h2dtscpp 链路在 `h2dtscpp_expand_unique_0080` 场景下的 ParseObj 到 Native 类型转换与生成性能，覆盖 class/func 参数与返回值自动转换能力。 |
