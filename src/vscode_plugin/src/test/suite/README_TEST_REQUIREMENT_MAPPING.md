# 测试用例与交付需求逐条映射

> 口径说明：
> - 已纳入 `src/test/suite` 下全部测试文件。
> - 每条 `test(...)` 均给出“主归属（2/3/4）+ 具体功能描述”。

## 覆盖统计

- 纳入测试文件数：**32**
- 纳入用例总数：**635**
- 统计方式：扫描所有 `*.test.ts` 文件中的 `test(...)` 声明。

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
| 26 | `parse/parsetsfunc.test.ts` | 69 |
| 27 | `parse/parsetsstruct.test.ts` | 63 |
| 28 | `parse/parsetstype.test.ts` | 63 |
| 29 | `parse/parsetsunion.test.ts` | 46 |
| 30 | `performance/conversion_dts2cpp_performance.test.ts` | 47 |
| 31 | `performance/conversion_h2dts_performance.test.ts` | 44 |
| 32 | `performance/conversion_h2dtscpp_performance.test.ts` | 58 |

## 用例逐条映射总表

| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |
| --- | --- | --- | --- | --- | --- |
| 1 | `common/conf.test.ts` | `getGenerateConf_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证配置读取能力（getGenerateConf），确保配置项可被正确加载并驱动流程。 |
| 2 | `common/conf.test.ts` | `getLogPath_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证配置读取能力（getLogPath），确保配置项可被正确加载并驱动流程。 |
| 3 | `common/conf.test.ts` | `getLogName_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证配置读取能力（getLogName），确保配置项可被正确加载并驱动流程。 |
| 4 | `common/file.test.ts` | `saveFileSync_new_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync new），确保文件创建/写入/追加行为正确。 |
| 5 | `common/file.test.ts` | `saveFileSync_new_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync new），确保文件创建/写入/追加行为正确。 |
| 6 | `common/file.test.ts` | `saveFileSync_new_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync new），确保文件创建/写入/追加行为正确。 |
| 7 | `common/file.test.ts` | `saveFileSync_new_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync new），确保文件创建/写入/追加行为正确。 |
| 8 | `common/file.test.ts` | `mkdirSync_new_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（mkdirSync new），确保文件创建/写入/追加行为正确。 |
| 9 | `common/file.test.ts` | `mkdirSync_new_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（mkdirSync new），确保文件创建/写入/追加行为正确。 |
| 10 | `common/file.test.ts` | `mkdirSync_new_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（mkdirSync new），确保文件创建/写入/追加行为正确。 |
| 11 | `common/file.test.ts` | `mkdirSync_new_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（mkdirSync new），确保文件创建/写入/追加行为正确。 |
| 12 | `common/file.test.ts` | `saveFileSync_append_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync append），确保文件创建/写入/追加行为正确。 |
| 13 | `common/file.test.ts` | `saveFileSync_append_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync append），确保文件创建/写入/追加行为正确。 |
| 14 | `common/file.test.ts` | `saveFileSync_append_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync append），确保文件创建/写入/追加行为正确。 |
| 15 | `common/file.test.ts` | `saveFileSync_append_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证文件系统能力（saveFileSync append），确保文件创建/写入/追加行为正确。 |
| 16 | `common/log.test.ts` | `debug_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（debug），确保不同级别日志输出行为正确。 |
| 17 | `common/log.test.ts` | `debug_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（debug），确保不同级别日志输出行为正确。 |
| 18 | `common/log.test.ts` | `info_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（info），确保不同级别日志输出行为正确。 |
| 19 | `common/log.test.ts` | `info_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（info），确保不同级别日志输出行为正确。 |
| 20 | `common/log.test.ts` | `error_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（error），确保不同级别日志输出行为正确。 |
| 21 | `common/log.test.ts` | `warn_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（warn），确保不同级别日志输出行为正确。 |
| 22 | `common/log.test.ts` | `file_test_last` | 通用能力测试 | 2（主，兼容3/4） | 验证日志能力（file test last），确保不同级别日志输出行为正确。 |
| 23 | `common/re.test.ts` | `search_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（search），确保匹配、替换、路径提取行为正确。 |
| 24 | `common/re.test.ts` | `search_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（search），确保匹配、替换、路径提取行为正确。 |
| 25 | `common/re.test.ts` | `search_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（search），确保匹配、替换、路径提取行为正确。 |
| 26 | `common/re.test.ts` | `search_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（search），确保匹配、替换、路径提取行为正确。 |
| 27 | `common/re.test.ts` | `match_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（match），确保匹配、替换、路径提取行为正确。 |
| 28 | `common/re.test.ts` | `match_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（match），确保匹配、替换、路径提取行为正确。 |
| 29 | `common/re.test.ts` | `match_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（match），确保匹配、替换、路径提取行为正确。 |
| 30 | `common/re.test.ts` | `match_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（match），确保匹配、替换、路径提取行为正确。 |
| 31 | `common/re.test.ts` | `removeReg_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（removeReg），确保匹配、替换、路径提取行为正确。 |
| 32 | `common/re.test.ts` | `removeReg_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（removeReg），确保匹配、替换、路径提取行为正确。 |
| 33 | `common/re.test.ts` | `removeReg_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（removeReg），确保匹配、替换、路径提取行为正确。 |
| 34 | `common/re.test.ts` | `removeReg_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（removeReg），确保匹配、替换、路径提取行为正确。 |
| 35 | `common/re.test.ts` | `getReg_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getReg），确保匹配、替换、路径提取行为正确。 |
| 36 | `common/re.test.ts` | `getReg_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getReg），确保匹配、替换、路径提取行为正确。 |
| 37 | `common/re.test.ts` | `getReg_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getReg），确保匹配、替换、路径提取行为正确。 |
| 38 | `common/re.test.ts` | `getReg_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getReg），确保匹配、替换、路径提取行为正确。 |
| 39 | `common/re.test.ts` | `getFileInPath_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getFileInPath），确保匹配、替换、路径提取行为正确。 |
| 40 | `common/re.test.ts` | `getFileInPath_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getFileInPath），确保匹配、替换、路径提取行为正确。 |
| 41 | `common/re.test.ts` | `getFileInPath_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getFileInPath），确保匹配、替换、路径提取行为正确。 |
| 42 | `common/re.test.ts` | `getFileInPath_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getFileInPath），确保匹配、替换、路径提取行为正确。 |
| 43 | `common/re.test.ts` | `getPathInPath_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getPathInPath），确保匹配、替换、路径提取行为正确。 |
| 44 | `common/re.test.ts` | `getPathInPath_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getPathInPath），确保匹配、替换、路径提取行为正确。 |
| 45 | `common/re.test.ts` | `getPathInPath_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getPathInPath），确保匹配、替换、路径提取行为正确。 |
| 46 | `common/re.test.ts` | `getPathInPath_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（getPathInPath），确保匹配、替换、路径提取行为正确。 |
| 47 | `common/re.test.ts` | `all_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（all），确保匹配、替换、路径提取行为正确。 |
| 48 | `common/re.test.ts` | `all_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（all），确保匹配、替换、路径提取行为正确。 |
| 49 | `common/re.test.ts` | `all_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（all），确保匹配、替换、路径提取行为正确。 |
| 50 | `common/re.test.ts` | `all_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（all），确保匹配、替换、路径提取行为正确。 |
| 51 | `common/re.test.ts` | `replaceAll_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（replaceAll），确保匹配、替换、路径提取行为正确。 |
| 52 | `common/re.test.ts` | `replaceAll_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（replaceAll），确保匹配、替换、路径提取行为正确。 |
| 53 | `common/re.test.ts` | `replaceAll_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（replaceAll），确保匹配、替换、路径提取行为正确。 |
| 54 | `common/re.test.ts` | `replaceAll_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证正则与路径处理能力（replaceAll），确保匹配、替换、路径提取行为正确。 |
| 55 | `common/tool.test.ts` | `getCurrentTimeString_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（getCurrentTimeString），确保辅助函数行为正确。 |
| 56 | `common/tool.test.ts` | `replaceall_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（replaceall），确保辅助函数行为正确。 |
| 57 | `common/tool.test.ts` | `replaceall_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（replaceall），确保辅助函数行为正确。 |
| 58 | `common/tool.test.ts` | `replaceall_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（replaceall），确保辅助函数行为正确。 |
| 59 | `common/tool.test.ts` | `replaceall_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（replaceall），确保辅助函数行为正确。 |
| 60 | `common/tool.test.ts` | `getTab_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（getTab），确保辅助函数行为正确。 |
| 61 | `common/tool.test.ts` | `getTab_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（getTab），确保辅助函数行为正确。 |
| 62 | `common/tool.test.ts` | `getTab_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（getTab），确保辅助函数行为正确。 |
| 63 | `common/tool.test.ts` | `getTab_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（getTab），确保辅助函数行为正确。 |
| 64 | `common/tool.test.ts` | `removeComments_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeComments），确保辅助函数行为正确。 |
| 65 | `common/tool.test.ts` | `removeComments_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeComments），确保辅助函数行为正确。 |
| 66 | `common/tool.test.ts` | `removeComments_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeComments），确保辅助函数行为正确。 |
| 67 | `common/tool.test.ts` | `removeComments_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeComments），确保辅助函数行为正确。 |
| 68 | `common/tool.test.ts` | `generateRandomInteger_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（generateRandomInteger），确保辅助函数行为正确。 |
| 69 | `common/tool.test.ts` | `generateRandomInteger_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（generateRandomInteger），确保辅助函数行为正确。 |
| 70 | `common/tool.test.ts` | `generateRandomInteger_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（generateRandomInteger），确保辅助函数行为正确。 |
| 71 | `common/tool.test.ts` | `generateRandomInteger_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（generateRandomInteger），确保辅助函数行为正确。 |
| 72 | `common/tool.test.ts` | `removeTab_test_1` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeTab），确保辅助函数行为正确。 |
| 73 | `common/tool.test.ts` | `removeTab_test_2` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeTab），确保辅助函数行为正确。 |
| 74 | `common/tool.test.ts` | `removeTab_test_3` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeTab），确保辅助函数行为正确。 |
| 75 | `common/tool.test.ts` | `removeTab_test_4` | 通用能力测试 | 2（主，兼容3/4） | 验证通用工具函数能力（removeTab），确保辅助函数行为正确。 |
| 76 | `extension.test.ts` | `Sample test` | 通用能力测试 | 2（主，兼容3/4） | 验证扩展入口能力（Sample test），确保扩展主流程可用。 |
| 77 | `gen/gendts.test.ts` | `genDtsFile_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（genDtsFile），确保生成产物结构与类型映射符合预期。 |
| 78 | `gen/gendts.test.ts` | `genDtsFile_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（genDtsFile），确保生成产物结构与类型映射符合预期。 |
| 79 | `gen/gendts.test.ts` | `genDtsFile_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（genDtsFile），确保生成产物结构与类型映射符合预期。 |
| 80 | `gen/gendts.test.ts` | `genDtsFile_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（genDtsFile），确保生成产物结构与类型映射符合预期。 |
| 81 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsClasses），确保生成产物结构与类型映射符合预期。 |
| 82 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsClasses），确保生成产物结构与类型映射符合预期。 |
| 83 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsClasses），确保生成产物结构与类型映射符合预期。 |
| 84 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsClasses），确保生成产物结构与类型映射符合预期。 |
| 85 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsEnum），确保生成产物结构与类型映射符合预期。 |
| 86 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsEnum），确保生成产物结构与类型映射符合预期。 |
| 87 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsEnum），确保生成产物结构与类型映射符合预期。 |
| 88 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsEnum），确保生成产物结构与类型映射符合预期。 |
| 89 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsFunction），确保生成产物结构与类型映射符合预期。 |
| 90 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsFunction），确保生成产物结构与类型映射符合预期。 |
| 91 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsFunction），确保生成产物结构与类型映射符合预期。 |
| 92 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsFunction），确保生成产物结构与类型映射符合预期。 |
| 93 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsStructs），确保生成产物结构与类型映射符合预期。 |
| 94 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsStructs），确保生成产物结构与类型映射符合预期。 |
| 95 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsStructs），确保生成产物结构与类型映射符合预期。 |
| 96 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsStructs），确保生成产物结构与类型映射符合预期。 |
| 97 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（transTskey2Ckey），确保生成产物结构与类型映射符合预期。 |
| 98 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（transTskey2Ckey），确保生成产物结构与类型映射符合预期。 |
| 99 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（transTskey2Ckey），确保生成产物结构与类型映射符合预期。 |
| 100 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（transTskey2Ckey），确保生成产物结构与类型映射符合预期。 |
| 101 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_5` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（transTskey2Ckey），确保生成产物结构与类型映射符合预期。 |
| 102 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_1` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsUnions），确保生成产物结构与类型映射符合预期。 |
| 103 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_2` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsUnions），确保生成产物结构与类型映射符合预期。 |
| 104 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_3` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsUnions），确保生成产物结构与类型映射符合预期。 |
| 105 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_4` | 生成测试 | 3（主，兼容2/4） | 验证代码生成能力（getDtsUnions），确保生成产物结构与类型映射符合预期。 |
| 106 | `gen/genidlfile.test.ts` | `getParcelType_test_1` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（getParcelType），确保生成产物结构与类型映射符合预期。 |
| 107 | `gen/genidlfile.test.ts` | `getParcelType_test_2` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（getParcelType），确保生成产物结构与类型映射符合预期。 |
| 108 | `gen/genidlfile.test.ts` | `getParcelType_test_3` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（getParcelType），确保生成产物结构与类型映射符合预期。 |
| 109 | `gen/genidlfile.test.ts` | `getParcelType_test_4` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（getParcelType），确保生成产物结构与类型映射符合预期。 |
| 110 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_1` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonCppFile），确保生成产物结构与类型映射符合预期。 |
| 111 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_2` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonCppFile），确保生成产物结构与类型映射符合预期。 |
| 112 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_3` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonCppFile），确保生成产物结构与类型映射符合预期。 |
| 113 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_4` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonCppFile），确保生成产物结构与类型映射符合预期。 |
| 114 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonHFile），确保生成产物结构与类型映射符合预期。 |
| 115 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonHFile），确保生成产物结构与类型映射符合预期。 |
| 116 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonHFile），确保生成产物结构与类型映射符合预期。 |
| 117 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genNapiCommonHFile），确保生成产物结构与类型映射符合预期。 |
| 118 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（doGenProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 119 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（doGenProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 120 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（doGenProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 121 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（doGenProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 122 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 123 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 124 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 125 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证代码生成能力（genProxyHFile），确保生成产物结构与类型映射符合预期。 |
| 126 | `parse/parsec.test.ts` | `parseEnum_test_1` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum），确保解析结果可支撑三条转换/生成链路。 |
| 127 | `parse/parsec.test.ts` | `parseEnum_test_2` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum），确保解析结果可支撑三条转换/生成链路。 |
| 128 | `parse/parsec.test.ts` | `parseEnum_test_3` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum），确保解析结果可支撑三条转换/生成链路。 |
| 129 | `parse/parsec.test.ts` | `parseEnum_test_4` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum），确保解析结果可支撑三条转换/生成链路。 |
| 130 | `parse/parsecclass.test.ts` | `parseClass_c_test_1` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseClass c），确保解析结果可支撑三条转换/生成链路。 |
| 131 | `parse/parsecclass.test.ts` | `parseClass_c_test_2` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseClass c），确保解析结果可支撑三条转换/生成链路。 |
| 132 | `parse/parsecclass.test.ts` | `parseClass_c_test_3` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseClass c），确保解析结果可支撑三条转换/生成链路。 |
| 133 | `parse/parsecclass.test.ts` | `parseClass_c_test_4` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseClass c），确保解析结果可支撑三条转换/生成链路。 |
| 134 | `parse/parsecenum.test.ts` | `parseEnum_c_test_1` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum c），确保解析结果可支撑三条转换/生成链路。 |
| 135 | `parse/parsecenum.test.ts` | `parseEnum_c_test_2` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum c），确保解析结果可支撑三条转换/生成链路。 |
| 136 | `parse/parsecenum.test.ts` | `parseEnum_c_test_3` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum c），确保解析结果可支撑三条转换/生成链路。 |
| 137 | `parse/parsecenum.test.ts` | `parseEnum_c_test_4` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseEnum c），确保解析结果可支撑三条转换/生成链路。 |
| 138 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_1` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseFunction c），确保解析结果可支撑三条转换/生成链路。 |
| 139 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_2` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseFunction c），确保解析结果可支撑三条转换/生成链路。 |
| 140 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_21` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseFunction c），确保解析结果可支撑三条转换/生成链路。 |
| 141 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_3` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseFunction c），确保解析结果可支撑三条转换/生成链路。 |
| 142 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_4` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseFunction c），确保解析结果可支撑三条转换/生成链路。 |
| 143 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_1` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseStruct c），确保解析结果可支撑三条转换/生成链路。 |
| 144 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_2` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseStruct c），确保解析结果可支撑三条转换/生成链路。 |
| 145 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_3` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseStruct c），确保解析结果可支撑三条转换/生成链路。 |
| 146 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_4` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseStruct c），确保解析结果可支撑三条转换/生成链路。 |
| 147 | `parse/parsecunion.test.ts` | `parseUnion_c_test_1` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseUnion c），确保解析结果可支撑三条转换/生成链路。 |
| 148 | `parse/parsecunion.test.ts` | `parseUnion_c_test_2` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseUnion c），确保解析结果可支撑三条转换/生成链路。 |
| 149 | `parse/parsecunion.test.ts` | `parseUnion_c_test_3` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseUnion c），确保解析结果可支撑三条转换/生成链路。 |
| 150 | `parse/parsecunion.test.ts` | `parseUnion_c_test_4` | 解析测试 | 3（主，兼容4） | 验证解析能力（parseUnion c），确保解析结果可支撑三条转换/生成链路。 |
| 151 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 152 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 153 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 154 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 155 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 156 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 157 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 158 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 159 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 160 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 161 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 162 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 163 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 164 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 165 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 166 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 167 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 168 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 169 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 170 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 171 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 172 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 173 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 174 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 175 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 176 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 177 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 178 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 179 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 180 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 181 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 182 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 183 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 184 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 185 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 186 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 187 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 188 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 189 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 190 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 191 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 192 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 193 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 194 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 195 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 196 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 197 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 198 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 199 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 200 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 201 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 202 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 203 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 204 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 205 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 206 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 207 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 208 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 209 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 210 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 211 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 212 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 213 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseClass ts），确保解析结果可支撑三条转换/生成链路。 |
| 214 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 215 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 216 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 217 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 218 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 219 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 220 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 221 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 222 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 223 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 224 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 225 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 226 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 227 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 228 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 229 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 230 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 231 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 232 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 233 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 234 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 235 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 236 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 237 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 238 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 239 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 240 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 241 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 242 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 243 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 244 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 245 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseEnum ts），确保解析结果可支撑三条转换/生成链路。 |
| 246 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 247 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 248 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 249 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 250 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 251 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 252 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 253 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 254 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 255 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 256 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 257 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 258 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 259 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 260 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 261 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 262 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 263 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 264 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 265 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 266 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 267 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 268 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 269 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 270 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 271 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 272 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 273 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 274 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 275 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 276 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_29` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 277 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_30` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 278 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 279 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 280 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 281 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 282 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 283 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 284 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 285 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 286 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 287 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_39` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 288 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_40` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 289 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 290 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 291 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 292 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 293 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 294 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 295 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 296 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 297 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 298 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 299 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 300 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 301 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 302 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 303 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 304 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 305 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 306 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 307 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 308 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 309 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 310 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 311 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 312 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 313 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 314 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseFunc ts），确保解析结果可支撑三条转换/生成链路。 |
| 315 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 316 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 317 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 318 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 319 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 320 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 321 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 322 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 323 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 324 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 325 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 326 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 327 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 328 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 329 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 330 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 331 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 332 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 333 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 334 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 335 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 336 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 337 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 338 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 339 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 340 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 341 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 342 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 343 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 344 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 345 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 346 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 347 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 348 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 349 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 350 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 351 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 352 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 353 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 354 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 355 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 356 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 357 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 358 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 359 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 360 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 361 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 362 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 363 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 364 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 365 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 366 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 367 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 368 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 369 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 370 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 371 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 372 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 373 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 374 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 375 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 376 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 377 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseStruct ts），确保解析结果可支撑三条转换/生成链路。 |
| 378 | `parse/parsetstype.test.ts` | `parseType_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 379 | `parse/parsetstype.test.ts` | `parseType_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 380 | `parse/parsetstype.test.ts` | `parseType_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 381 | `parse/parsetstype.test.ts` | `parseType_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 382 | `parse/parsetstype.test.ts` | `parseType_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 383 | `parse/parsetstype.test.ts` | `parseType_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 384 | `parse/parsetstype.test.ts` | `parseType_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 385 | `parse/parsetstype.test.ts` | `parseType_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 386 | `parse/parsetstype.test.ts` | `parseType_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 387 | `parse/parsetstype.test.ts` | `parseType_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 388 | `parse/parsetstype.test.ts` | `parseType_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 389 | `parse/parsetstype.test.ts` | `parseType_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 390 | `parse/parsetstype.test.ts` | `parseType_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 391 | `parse/parsetstype.test.ts` | `parseType_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 392 | `parse/parsetstype.test.ts` | `parseType_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 393 | `parse/parsetstype.test.ts` | `parseType_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 394 | `parse/parsetstype.test.ts` | `parseType_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 395 | `parse/parsetstype.test.ts` | `parseType_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 396 | `parse/parsetstype.test.ts` | `parseType_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 397 | `parse/parsetstype.test.ts` | `parseType_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 398 | `parse/parsetstype.test.ts` | `parseType_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 399 | `parse/parsetstype.test.ts` | `parseType_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 400 | `parse/parsetstype.test.ts` | `parseType_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 401 | `parse/parsetstype.test.ts` | `parseType_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 402 | `parse/parsetstype.test.ts` | `parseType_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 403 | `parse/parsetstype.test.ts` | `parseType_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 404 | `parse/parsetstype.test.ts` | `parseType_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 405 | `parse/parsetstype.test.ts` | `parseType_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 406 | `parse/parsetstype.test.ts` | `parseType_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 407 | `parse/parsetstype.test.ts` | `parseType_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 408 | `parse/parsetstype.test.ts` | `parseType_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 409 | `parse/parsetstype.test.ts` | `parseType_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 410 | `parse/parsetstype.test.ts` | `parseType_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 411 | `parse/parsetstype.test.ts` | `parseType_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 412 | `parse/parsetstype.test.ts` | `parseType_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 413 | `parse/parsetstype.test.ts` | `parseType_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 414 | `parse/parsetstype.test.ts` | `parseType_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 415 | `parse/parsetstype.test.ts` | `parseType_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 416 | `parse/parsetstype.test.ts` | `parseType_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 417 | `parse/parsetstype.test.ts` | `parseType_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 418 | `parse/parsetstype.test.ts` | `parseType_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 419 | `parse/parsetstype.test.ts` | `parseType_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 420 | `parse/parsetstype.test.ts` | `parseType_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 421 | `parse/parsetstype.test.ts` | `parseType_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 422 | `parse/parsetstype.test.ts` | `parseType_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 423 | `parse/parsetstype.test.ts` | `parseType_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 424 | `parse/parsetstype.test.ts` | `parseType_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 425 | `parse/parsetstype.test.ts` | `parseType_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 426 | `parse/parsetstype.test.ts` | `parseType_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 427 | `parse/parsetstype.test.ts` | `parseType_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 428 | `parse/parsetstype.test.ts` | `parseType_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 429 | `parse/parsetstype.test.ts` | `parseType_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 430 | `parse/parsetstype.test.ts` | `parseType_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 431 | `parse/parsetstype.test.ts` | `parseType_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 432 | `parse/parsetstype.test.ts` | `parseType_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 433 | `parse/parsetstype.test.ts` | `parseType_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 434 | `parse/parsetstype.test.ts` | `parseType_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 435 | `parse/parsetstype.test.ts` | `parseType_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 436 | `parse/parsetstype.test.ts` | `parseType_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 437 | `parse/parsetstype.test.ts` | `parseType_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 438 | `parse/parsetstype.test.ts` | `parseType_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 439 | `parse/parsetstype.test.ts` | `parseType_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 440 | `parse/parsetstype.test.ts` | `parseType_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseType ts），确保解析结果可支撑三条转换/生成链路。 |
| 441 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 442 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 443 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 444 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 445 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 446 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 447 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 448 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 449 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 450 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 451 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 452 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 453 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 454 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 455 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 456 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 457 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 458 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 459 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 460 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 461 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 462 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 463 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 464 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 465 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 466 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 467 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 468 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 469 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 470 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 471 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 472 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_39` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 473 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_40` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 474 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 475 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 476 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 477 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 478 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 479 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 480 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 481 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 482 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 483 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 484 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 485 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 486 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证解析能力（parseUnion ts），确保解析结果可支撑三条转换/生成链路。 |
| 487 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type number）上的变量与返回值转换能力与性能。 |
| 488 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type string）上的变量与返回值转换能力与性能。 |
| 489 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type boolean）上的变量与返回值转换能力与性能。 |
| 490 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_void` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type void）上的变量与返回值转换能力与性能。 |
| 491 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_number_array_short` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type number array short）上的变量与返回值转换能力与性能。 |
| 492 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_string_array_short` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type string array short）上的变量与返回值转换能力与性能。 |
| 493 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_boolean_array_short` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type boolean array short）上的变量与返回值转换能力与性能。 |
| 494 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_array_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type array number）上的变量与返回值转换能力与性能。 |
| 495 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_array_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type array string）上的变量与返回值转换能力与性能。 |
| 496 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_array_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type array boolean）上的变量与返回值转换能力与性能。 |
| 497 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_number_space` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string number space）上的变量与返回值转换能力与性能。 |
| 498 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string number）上的变量与返回值转换能力与性能。 |
| 499 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string string）上的变量与返回值转换能力与性能。 |
| 500 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string boolean）上的变量与返回值转换能力与性能。 |
| 501 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number number）上的变量与返回值转换能力与性能。 |
| 502 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number string）上的变量与返回值转换能力与性能。 |
| 503 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number boolean）上的变量与返回值转换能力与性能。 |
| 504 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_set_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type set string）上的变量与返回值转换能力与性能。 |
| 505 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_set_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type set number）上的变量与返回值转换能力与性能。 |
| 506 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_set_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type set boolean）上的变量与返回值转换能力与性能。 |
| 507 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_any` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type any）上的变量与返回值转换能力与性能。 |
| 508 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_object` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type object）上的变量与返回值转换能力与性能。 |
| 509 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_callback` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type callback）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 510 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type arrow）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 511 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_callback_string` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type callback string）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 512 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_callback_boolean` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type callback boolean）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 513 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow_return_number` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type arrow return number）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 514 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_string_space` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string string space）上的变量与返回值转换能力与性能。 |
| 515 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_string_space` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number string space）上的变量与返回值转换能力与性能。 |
| 516 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow_no_param` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type arrow no param）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 517 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow_bool_to_string` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（type arrow bool to string）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 518 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_custom_passthrough` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type custom passthrough）上的变量与返回值转换能力与性能。 |
| 519 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_callback_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（function scene callback 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 520 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_promise_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（function scene promise 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 521 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_on_off_dollar_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（function scene on off dollar 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 522 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_arrow_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（function scene arrow 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 523 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_threadsafe_like_callback_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（function scene threadsafe like callback 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 524 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_import_and_namespace_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在 import 与 namespace 场景（import and namespace scene 10 under 10s）中的变量/函数转换能力与性能。 |
| 525 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_namespace_variable_and_function_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（namespace variable and function scene 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 526 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_static_method_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（function scene static method 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 527 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_enum_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在复杂场景输入（enum scene 10 under 10s）下的转换能力与性能。 |
| 528 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_struct_scene_map_set_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在复杂场景输入（struct scene map set 10 under 10s）下的转换能力与性能。 |
| 529 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_class_scene_callback_and_return_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（class scene callback and return 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 530 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_namespace_class_static_combo_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（namespace class static combo scene 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 531 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_namespace_enum_function_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（namespace enum function scene 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 532 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_struct_scene_arrow_member_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在函数类型（struct scene arrow member 10 under 10s）上的转换能力与性能，覆盖 callback/promise/static/$/on-off/arrow/threadsafe 场景。 |
| 533 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_class_scene_map_param_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在复杂场景输入（class scene map param scene 10 under 10s）下的转换能力与性能。 |
| 534 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_char` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type char）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 535 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_std_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type std string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 536 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_char8` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type char8）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 537 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_char16` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type char16）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 538 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_char32` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type char32）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 539 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 540 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_short` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 541 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_long` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type long）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 542 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_double` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type double）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 543 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_float` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type float）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 544 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_bool` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 545 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_int64` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type int64）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 546 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_unsigned_long` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type unsigned long）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 547 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_uint32` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type uint32）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 548 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_size_t` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type size t）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 549 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_vector_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type vector int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 550 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_deque_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type deque int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 551 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_array_double` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type array double）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 552 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_map_string_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type map string int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 553 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_map_stdstring_bool` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type map stdstring bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 554 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_set_bool` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type set bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 555 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_tuple` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type tuple）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 556 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_pair` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type pair）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 557 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_unique_ptr` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type unique ptr）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 558 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_shared_ptr` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type shared ptr）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 559 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_function` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（type function）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 560 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_date` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type date）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 561 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_complex` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type complex）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 562 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_vector_iterator` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type vector iterator）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 563 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_unordered_map_string_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type unordered map string int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 564 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_unordered_set_bool` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type unordered set bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 565 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_weak_ptr_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type weak ptr int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 566 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_function_string_bool` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（type function string bool）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 567 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_list_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type list string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 568 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_queue_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type queue int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 569 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_priority_queue_double` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type priority queue double）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 570 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_multimap_string_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type multimap string int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 571 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_multiset_bool` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type multiset bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 572 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_type_tm_date` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type tm date）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 573 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_param_coverage_basic_20` | 性能测试 | 3 | 验证 h2dts 对20种基础类型在变量/函数入参与返回值语义上的转换覆盖与性能，确保满足交付指标3基础类型能力。 |
| 574 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_param_coverage_array_20` | 性能测试 | 3 | 验证 h2dts 对20种数组/容器类型在变量/函数入参与返回值语义上的转换覆盖与性能，确保满足交付指标3数组类型能力。 |
| 575 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_scene_static_function_10_under_10s` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（scene static function 10 under 10s）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 576 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_scene_class_members_methods_10_under_10s` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（scene class members methods 10 under 10s）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 577 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_scene_namespace_variables_functions_10_under_10s` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（scene namespace variables functions 10 under 10s）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 578 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 579 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 580 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 581 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_number_array` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type number array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 582 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_array_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type array string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 583 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_map_string_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type map string number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 584 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_map_number_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type map number string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 585 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_set_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type set boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 586 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_callback` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（type callback）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 587 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_arrow` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（type arrow）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 588 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_any` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type any）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 589 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_map_string_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type map string boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 590 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_set_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type set number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 591 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_callback_string` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（type callback string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 592 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_custom_passthrough` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（type custom passthrough）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 593 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 594 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 595 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 596 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_void` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base void）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 597 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_any` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base any）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 598 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_object` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base object）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 599 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_callback_number` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（base callback number）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 600 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_callback_string` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（base callback string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 601 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_callback_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（base callback boolean）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 602 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_arrow_no_param` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（base arrow no param）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 603 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_arrow_bool_to_string` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（base arrow bool to string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 604 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_arrow_two_params_number_return` | 性能测试 | 4 | 验证 h2dtscpp 在函数类型（base arrow two params number return）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 605 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_string_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base map string number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 606 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_string_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base map string string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 607 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_string_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base map string boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 608 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_number_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base map number number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 609 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_number_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base map number string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 610 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_number_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base map number boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 611 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_set_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base set string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 612 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_custom_passthrough` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（base custom passthrough）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 613 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_number_short` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array number short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 614 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_string_short` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array string short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 615 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_boolean_short` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array boolean short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 616 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 617 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 618 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_boolean` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 619 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_nested_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array nested number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 620 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_number_2d` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array number 2d）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 621 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_nested_map` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array nested map）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 622 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_nested_set` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array nested set）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 623 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_readonly_array_number` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array readonly array number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 624 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_int32array` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array int32array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 625 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_uint8array` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array uint8array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 626 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_float32array` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array float32array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 627 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_buffer` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array array buffer）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 628 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_shared_array_buffer` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array shared array buffer）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 629 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_vector_int` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array std vector int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 630 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_array_double_4` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array std array double 4）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 631 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_deque_string` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array std deque string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 632 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_list_bool` | 性能测试 | 4 | 验证 h2dtscpp 在基础类型与数组类型（array std list bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 633 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_param_coverage_basic_20` | 性能测试 | 4 | 验证 h2dtscpp 对20种基础类型在 class/global 函数入参与返回值的转换覆盖与性能，确保满足交付指标4基础类型能力。 |
| 634 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_param_coverage_array_20` | 性能测试 | 4 | 验证 h2dtscpp 对20种数组/容器类型在 class/global 函数入参与返回值的转换覆盖与性能，确保满足交付指标4数组类型能力。 |
| 635 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_class_auto_conversion` | 性能测试 | 4 | 验证 h2dtscpp 对 C++ class 变量与方法（含参数、返回值）的自动转换覆盖与性能，确保满足交付指标4 class 自动转换能力。 |
