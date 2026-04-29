# 测试用例与交付需求逐条映射

> 口径说明：
> - 已纳入 `src/test/suite` 下全部测试文件。
> - 每条 `test(...)` 均给出“主归属（2/3/4）+ 具体功能描述”。

## 覆盖统计

- 纳入测试文件数：**32**
- 纳入用例总数：**630**
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
| 31 | `performance/conversion_h2dts_performance.test.ts` | 42 |
| 32 | `performance/conversion_h2dtscpp_performance.test.ts` | 55 |

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
| 77 | `gen/gendts.test.ts` | `genDtsFile_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 主文件生成能力（genDtsFile），确保聚合输出结构正确。 |
| 78 | `gen/gendts.test.ts` | `genDtsFile_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 主文件生成能力（genDtsFile），确保聚合输出结构正确。 |
| 79 | `gen/gendts.test.ts` | `genDtsFile_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 主文件生成能力（genDtsFile），确保聚合输出结构正确。 |
| 80 | `gen/gendts.test.ts` | `genDtsFile_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 主文件生成能力（genDtsFile），确保聚合输出结构正确。 |
| 81 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts class 生成能力（getDtsClasses），确保成员与方法声明输出正确。 |
| 82 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts class 生成能力（getDtsClasses），确保成员与方法声明输出正确。 |
| 83 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts class 生成能力（getDtsClasses），确保成员与方法声明输出正确。 |
| 84 | `gen/gendtsclasses.test.ts` | `getDtsClasses_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts class 生成能力（getDtsClasses），确保成员与方法声明输出正确。 |
| 85 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts enum 生成能力（getDtsEnum），确保枚举定义输出正确。 |
| 86 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts enum 生成能力（getDtsEnum），确保枚举定义输出正确。 |
| 87 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts enum 生成能力（getDtsEnum），确保枚举定义输出正确。 |
| 88 | `gen/gendtsenum.test.ts` | `getDtsEnum_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts enum 生成能力（getDtsEnum），确保枚举定义输出正确。 |
| 89 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 函数声明生成能力（getDtsFunction），确保函数签名输出正确。 |
| 90 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 函数声明生成能力（getDtsFunction），确保函数签名输出正确。 |
| 91 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 函数声明生成能力（getDtsFunction），确保函数签名输出正确。 |
| 92 | `gen/gendtsfunction.test.ts` | `getDtsFunction_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts 函数声明生成能力（getDtsFunction），确保函数签名输出正确。 |
| 93 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts struct/interface 生成能力（getDtsStructs），确保结构字段输出正确。 |
| 94 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts struct/interface 生成能力（getDtsStructs），确保结构字段输出正确。 |
| 95 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts struct/interface 生成能力（getDtsStructs），确保结构字段输出正确。 |
| 96 | `gen/gendtsstructs.test.ts` | `getDtsStructs_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts struct/interface 生成能力（getDtsStructs），确保结构字段输出正确。 |
| 97 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_1` | 生成测试 | 3（主，兼容2/4） | 验证类型关键字转换能力（transTskey2Ckey），确保 h2dts/dts2cpp 的类型映射规则正确。 |
| 98 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_2` | 生成测试 | 3（主，兼容2/4） | 验证类型关键字转换能力（transTskey2Ckey），确保 h2dts/dts2cpp 的类型映射规则正确。 |
| 99 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_3` | 生成测试 | 3（主，兼容2/4） | 验证类型关键字转换能力（transTskey2Ckey），确保 h2dts/dts2cpp 的类型映射规则正确。 |
| 100 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_4` | 生成测试 | 3（主，兼容2/4） | 验证类型关键字转换能力（transTskey2Ckey），确保 h2dts/dts2cpp 的类型映射规则正确。 |
| 101 | `gen/gendtstranskey.test.ts` | `transTskey2Ckey_test_5` | 生成测试 | 3（主，兼容2/4） | 验证类型关键字转换能力（transTskey2Ckey），确保 h2dts/dts2cpp 的类型映射规则正确。 |
| 102 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_1` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts union 生成能力（getDtsUnions），确保联合类型定义输出正确。 |
| 103 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_2` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts union 生成能力（getDtsUnions），确保联合类型定义输出正确。 |
| 104 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_3` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts union 生成能力（getDtsUnions），确保联合类型定义输出正确。 |
| 105 | `gen/gendtsunion.test.ts` | `getDtsUnions_test_4` | 生成测试 | 3（主，兼容2/4） | 验证 d.ts union 生成能力（getDtsUnions），确保联合类型定义输出正确。 |
| 106 | `gen/genidlfile.test.ts` | `getParcelType_test_1` | 生成测试 | 2（主，兼容4） | 验证 IDL 文件生成能力（getParcelType），确保接口与类型映射输出正确。 |
| 107 | `gen/genidlfile.test.ts` | `getParcelType_test_2` | 生成测试 | 2（主，兼容4） | 验证 IDL 文件生成能力（getParcelType），确保接口与类型映射输出正确。 |
| 108 | `gen/genidlfile.test.ts` | `getParcelType_test_3` | 生成测试 | 2（主，兼容4） | 验证 IDL 文件生成能力（getParcelType），确保接口与类型映射输出正确。 |
| 109 | `gen/genidlfile.test.ts` | `getParcelType_test_4` | 生成测试 | 2（主，兼容4） | 验证 IDL 文件生成能力（getParcelType），确保接口与类型映射输出正确。 |
| 110 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共实现文件生成能力（genNapiCommonCppFile），确保实现逻辑与桥接代码正确。 |
| 111 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共实现文件生成能力（genNapiCommonCppFile），确保实现逻辑与桥接代码正确。 |
| 112 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共实现文件生成能力（genNapiCommonCppFile），确保实现逻辑与桥接代码正确。 |
| 113 | `gen/gennapicommoncpp.test.ts` | `genNapiCommonCppFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共实现文件生成能力（genNapiCommonCppFile），确保实现逻辑与桥接代码正确。 |
| 114 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共头文件生成能力（genNapiCommonHFile），确保声明与接口桥接正确。 |
| 115 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共头文件生成能力（genNapiCommonHFile），确保声明与接口桥接正确。 |
| 116 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共头文件生成能力（genNapiCommonHFile），确保声明与接口桥接正确。 |
| 117 | `gen/gennapicommonh.test.ts` | `genNapiCommonHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 NAPI 公共头文件生成能力（genNapiCommonHFile），确保声明与接口桥接正确。 |
| 118 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（doGenProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 119 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（doGenProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 120 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（doGenProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 121 | `gen/tools/genproxyhfile.test.ts` | `doGenProxyHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（doGenProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 122 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_1` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（genProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 123 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_2` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（genProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 124 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_3` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（genProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 125 | `gen/tools/genproxyhfile.test.ts` | `genProxyHFile_test_4` | 生成测试 | 2（主，兼容4） | 验证 Proxy 头文件生成能力（genProxyHFile），确保代理接口声明与输出文件规则正确。 |
| 126 | `parse/parsec.test.ts` | `parseEnum_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 综合解析入口能力（parseEnum），确保解析主流程稳定。 |
| 127 | `parse/parsec.test.ts` | `parseEnum_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 综合解析入口能力（parseEnum），确保解析主流程稳定。 |
| 128 | `parse/parsec.test.ts` | `parseEnum_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 综合解析入口能力（parseEnum），确保解析主流程稳定。 |
| 129 | `parse/parsec.test.ts` | `parseEnum_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 综合解析入口能力（parseEnum），确保解析主流程稳定。 |
| 130 | `parse/parsecclass.test.ts` | `parseClass_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ class 解析能力（parseClass c），支撑 h2dts/h2dtscpp 的 class 自动转换。 |
| 131 | `parse/parsecclass.test.ts` | `parseClass_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ class 解析能力（parseClass c），支撑 h2dts/h2dtscpp 的 class 自动转换。 |
| 132 | `parse/parsecclass.test.ts` | `parseClass_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ class 解析能力（parseClass c），支撑 h2dts/h2dtscpp 的 class 自动转换。 |
| 133 | `parse/parsecclass.test.ts` | `parseClass_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ class 解析能力（parseClass c），支撑 h2dts/h2dtscpp 的 class 自动转换。 |
| 134 | `parse/parsecenum.test.ts` | `parseEnum_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ enum 解析能力（parseEnum c），确保枚举定义可正确转换。 |
| 135 | `parse/parsecenum.test.ts` | `parseEnum_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ enum 解析能力（parseEnum c），确保枚举定义可正确转换。 |
| 136 | `parse/parsecenum.test.ts` | `parseEnum_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ enum 解析能力（parseEnum c），确保枚举定义可正确转换。 |
| 137 | `parse/parsecenum.test.ts` | `parseEnum_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ enum 解析能力（parseEnum c），确保枚举定义可正确转换。 |
| 138 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 函数解析能力（parseFunction c），确保函数签名与参数列表提取正确。 |
| 139 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 函数解析能力（parseFunction c），确保函数签名与参数列表提取正确。 |
| 140 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_21` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 函数解析能力（parseFunction c），确保函数签名与参数列表提取正确。 |
| 141 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 函数解析能力（parseFunction c），确保函数签名与参数列表提取正确。 |
| 142 | `parse/parsecfunc.test.ts` | `parseFunction_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ 函数解析能力（parseFunction c），确保函数签名与参数列表提取正确。 |
| 143 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ struct 解析能力（parseStruct c），确保结构字段可正确映射。 |
| 144 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ struct 解析能力（parseStruct c），确保结构字段可正确映射。 |
| 145 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ struct 解析能力（parseStruct c），确保结构字段可正确映射。 |
| 146 | `parse/parsecstruct.test.ts` | `parseStruct_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ struct 解析能力（parseStruct c），确保结构字段可正确映射。 |
| 147 | `parse/parsecunion.test.ts` | `parseUnion_c_test_1` | 解析测试 | 3（主，兼容4） | 验证 C/C++ union 解析能力（parseUnion c），确保联合结构可正确映射。 |
| 148 | `parse/parsecunion.test.ts` | `parseUnion_c_test_2` | 解析测试 | 3（主，兼容4） | 验证 C/C++ union 解析能力（parseUnion c），确保联合结构可正确映射。 |
| 149 | `parse/parsecunion.test.ts` | `parseUnion_c_test_3` | 解析测试 | 3（主，兼容4） | 验证 C/C++ union 解析能力（parseUnion c），确保联合结构可正确映射。 |
| 150 | `parse/parsecunion.test.ts` | `parseUnion_c_test_4` | 解析测试 | 3（主，兼容4） | 验证 C/C++ union 解析能力（parseUnion c），确保联合结构可正确映射。 |
| 151 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 152 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 153 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 154 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 155 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 156 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 157 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 158 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 159 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 160 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 161 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 162 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 163 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 164 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 165 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 166 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 167 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 168 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 169 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 170 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 171 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 172 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 173 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 174 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 175 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 176 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 177 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 178 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 179 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 180 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 181 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 182 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 183 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 184 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 185 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 186 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 187 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 188 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 189 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 190 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 191 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 192 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 193 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 194 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 195 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 196 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 197 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 198 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 199 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 200 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 201 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 202 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 203 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 204 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 205 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 206 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 207 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 208 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 209 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 210 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 211 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 212 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 213 | `parse/parsetsclass.test.ts` | `parseClass_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证 TS class 解析能力（parseClass ts），确保成员变量/成员函数结构被正确提取。 |
| 214 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 215 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 216 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 217 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 218 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 219 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 220 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 221 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 222 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 223 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 224 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 225 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 226 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 227 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 228 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 229 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 230 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 231 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 232 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 233 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 234 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 235 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 236 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 237 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 238 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 239 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 240 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 241 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 242 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 243 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 244 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 245 | `parse/parsetsenum.test.ts` | `parseEnum_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证 TS enum 解析能力（parseEnum ts），确保枚举成员和值映射正确。 |
| 246 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 247 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 248 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 249 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 250 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 251 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 252 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 253 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 254 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 255 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 256 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 257 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 258 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 259 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 260 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 261 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 262 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 263 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 264 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 265 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 266 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 267 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 268 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 269 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 270 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 271 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 272 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 273 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 274 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 275 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 276 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_29` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 277 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_30` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 278 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 279 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 280 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 281 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 282 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 283 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 284 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 285 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 286 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 287 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_39` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 288 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_40` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 289 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 290 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 291 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 292 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 293 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 294 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 295 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 296 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 297 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 298 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 299 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 300 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 301 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 302 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 303 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 304 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 305 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 306 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 307 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 308 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 309 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 310 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 311 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 312 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 313 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 314 | `parse/parsetsfunc.test.ts` | `parseFunc_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS 函数声明解析能力（parseFunc ts），确保参数与返回值语义解析正确。 |
| 315 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 316 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 317 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 318 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 319 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 320 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 321 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 322 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 323 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 324 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 325 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 326 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 327 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 328 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 329 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 330 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 331 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 332 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 333 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 334 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 335 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 336 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 337 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 338 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 339 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 340 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 341 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 342 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 343 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 344 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 345 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 346 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 347 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 348 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 349 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 350 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 351 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 352 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 353 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 354 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 355 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 356 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 357 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 358 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 359 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 360 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 361 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 362 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 363 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 364 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 365 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 366 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 367 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 368 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 369 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 370 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 371 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 372 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 373 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 374 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 375 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 376 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 377 | `parse/parsetsstruct.test.ts` | `parseStruct_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证 TS struct 风格结构解析能力（parseStruct ts），确保字段类型解析正确。 |
| 378 | `parse/parsetstype.test.ts` | `parseType_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 379 | `parse/parsetstype.test.ts` | `parseType_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 380 | `parse/parsetstype.test.ts` | `parseType_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 381 | `parse/parsetstype.test.ts` | `parseType_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 382 | `parse/parsetstype.test.ts` | `parseType_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 383 | `parse/parsetstype.test.ts` | `parseType_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 384 | `parse/parsetstype.test.ts` | `parseType_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 385 | `parse/parsetstype.test.ts` | `parseType_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 386 | `parse/parsetstype.test.ts` | `parseType_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 387 | `parse/parsetstype.test.ts` | `parseType_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 388 | `parse/parsetstype.test.ts` | `parseType_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 389 | `parse/parsetstype.test.ts` | `parseType_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 390 | `parse/parsetstype.test.ts` | `parseType_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 391 | `parse/parsetstype.test.ts` | `parseType_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 392 | `parse/parsetstype.test.ts` | `parseType_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 393 | `parse/parsetstype.test.ts` | `parseType_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 394 | `parse/parsetstype.test.ts` | `parseType_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 395 | `parse/parsetstype.test.ts` | `parseType_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 396 | `parse/parsetstype.test.ts` | `parseType_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 397 | `parse/parsetstype.test.ts` | `parseType_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 398 | `parse/parsetstype.test.ts` | `parseType_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 399 | `parse/parsetstype.test.ts` | `parseType_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 400 | `parse/parsetstype.test.ts` | `parseType_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 401 | `parse/parsetstype.test.ts` | `parseType_ts_test_24` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 402 | `parse/parsetstype.test.ts` | `parseType_ts_test_25` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 403 | `parse/parsetstype.test.ts` | `parseType_ts_test_26` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 404 | `parse/parsetstype.test.ts` | `parseType_ts_test_27` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 405 | `parse/parsetstype.test.ts` | `parseType_ts_test_28` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 406 | `parse/parsetstype.test.ts` | `parseType_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 407 | `parse/parsetstype.test.ts` | `parseType_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 408 | `parse/parsetstype.test.ts` | `parseType_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 409 | `parse/parsetstype.test.ts` | `parseType_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 410 | `parse/parsetstype.test.ts` | `parseType_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 411 | `parse/parsetstype.test.ts` | `parseType_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 412 | `parse/parsetstype.test.ts` | `parseType_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 413 | `parse/parsetstype.test.ts` | `parseType_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 414 | `parse/parsetstype.test.ts` | `parseType_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 415 | `parse/parsetstype.test.ts` | `parseType_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 416 | `parse/parsetstype.test.ts` | `parseType_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 417 | `parse/parsetstype.test.ts` | `parseType_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 418 | `parse/parsetstype.test.ts` | `parseType_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 419 | `parse/parsetstype.test.ts` | `parseType_ts_test_54` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 420 | `parse/parsetstype.test.ts` | `parseType_ts_test_55` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 421 | `parse/parsetstype.test.ts` | `parseType_ts_test_56` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 422 | `parse/parsetstype.test.ts` | `parseType_ts_test_57` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 423 | `parse/parsetstype.test.ts` | `parseType_ts_test_58` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 424 | `parse/parsetstype.test.ts` | `parseType_ts_test_59` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 425 | `parse/parsetstype.test.ts` | `parseType_ts_test_60` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 426 | `parse/parsetstype.test.ts` | `parseType_ts_test_61` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 427 | `parse/parsetstype.test.ts` | `parseType_ts_test_62` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 428 | `parse/parsetstype.test.ts` | `parseType_ts_test_63` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 429 | `parse/parsetstype.test.ts` | `parseType_ts_test_64` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 430 | `parse/parsetstype.test.ts` | `parseType_ts_test_65` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 431 | `parse/parsetstype.test.ts` | `parseType_ts_test_66` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 432 | `parse/parsetstype.test.ts` | `parseType_ts_test_67` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 433 | `parse/parsetstype.test.ts` | `parseType_ts_test_68` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 434 | `parse/parsetstype.test.ts` | `parseType_ts_test_69` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 435 | `parse/parsetstype.test.ts` | `parseType_ts_test_70` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 436 | `parse/parsetstype.test.ts` | `parseType_ts_test_71` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 437 | `parse/parsetstype.test.ts` | `parseType_ts_test_72` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 438 | `parse/parsetstype.test.ts` | `parseType_ts_test_73` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 439 | `parse/parsetstype.test.ts` | `parseType_ts_test_74` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 440 | `parse/parsetstype.test.ts` | `parseType_ts_test_75` | 解析测试 | 2（主，兼容4） | 验证 TS type 解析能力（parseType ts），确保类型声明可被正确识别并供转换链路使用。 |
| 441 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_1` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 442 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_2` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 443 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_3` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 444 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_4` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 445 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_5` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 446 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_6` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 447 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_7` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 448 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_8` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 449 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_9` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 450 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_10` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 451 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_11` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 452 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_12` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 453 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_13` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 454 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_14` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 455 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_15` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 456 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_16` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 457 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_17` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 458 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_18` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 459 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_19` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 460 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_20` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 461 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_21` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 462 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_22` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 463 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_23` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 464 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_31` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 465 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_32` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 466 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_33` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 467 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_34` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 468 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_35` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 469 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_36` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 470 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_37` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 471 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_38` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 472 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_39` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 473 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_40` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 474 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_41` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 475 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_42` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 476 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_43` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 477 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_44` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 478 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_45` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 479 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_46` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 480 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_47` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 481 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_48` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 482 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_49` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 483 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_50` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 484 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_51` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 485 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_52` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 486 | `parse/parsetsunion.test.ts` | `parseUnion_ts_test_53` | 解析测试 | 2（主，兼容4） | 验证 TS union 解析能力（parseUnion ts），确保联合类型分支识别正确。 |
| 487 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 488 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 489 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 490 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_void` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type void）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 491 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_number_array_short` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type number array short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 492 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_string_array_short` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type string array short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 493 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_boolean_array_short` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type boolean array short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 494 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_array_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type array number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 495 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_array_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type array string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 496 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_array_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type array boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 497 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_number_space` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string number space）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 498 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 499 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 500 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 501 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 502 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 503 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 504 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_set_string` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type set string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 505 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_set_number` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type set number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 506 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_set_boolean` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type set boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 507 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_any` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type any）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 508 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_object` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type object）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 509 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_callback` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type callback）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 510 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type arrow）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 511 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_callback_string` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type callback string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 512 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_callback_boolean` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type callback boolean）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 513 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow_return_number` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type arrow return number）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 514 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_string_string_space` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map string string space）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 515 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_map_number_string_space` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type map number string space）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 516 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow_no_param` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type arrow no param）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 517 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_arrow_bool_to_string` | 性能测试 | 2 | 验证 dts2cpp 在函数/方法类型（type arrow bool to string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 518 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_type_custom_passthrough` | 性能测试 | 2 | 验证 dts2cpp 在基础/容器类型（type custom passthrough）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 519 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_callback_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（function scene callback 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 520 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_promise_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（function scene promise 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 521 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_on_off_dollar_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（function scene on off dollar 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 522 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_arrow_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（function scene arrow 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 523 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_threadsafe_like_callback_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（function scene threadsafe like callback 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 524 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_import_and_namespace_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（import and namespace scene 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 525 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_namespace_variable_and_function_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（namespace variable and function scene 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 526 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_function_scene_static_method_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（function scene static method 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 527 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_enum_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（enum scene 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 528 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_struct_scene_map_set_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（struct scene map set 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 529 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_class_scene_callback_and_return_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（class scene callback and return 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 530 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_namespace_class_static_combo_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（namespace class static combo scene 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 531 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_namespace_enum_function_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（namespace enum function scene 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 532 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_struct_scene_arrow_member_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（struct scene arrow member 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
| 533 | `performance/conversion_dts2cpp_performance.test.ts` | `dts2cpp_class_scene_map_param_scene_10_under_10s` | 性能测试 | 2 | 验证 dts2cpp 在场景级输入（class scene map param scene 10 under 10s）下的转换性能，确保文件/场景平均耗时 < 1s。 |
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
| 573 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_scene_static_function_10_under_10s` | 性能测试 | 3 | 验证 h2dts 在 class/namespace/static 场景（scene static function 10 under 10s）下的转换性能，确保平均耗时 < 1s。 |
| 574 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_scene_class_members_methods_10_under_10s` | 性能测试 | 3 | 验证 h2dts 在 class/namespace/static 场景（scene class members methods 10 under 10s）下的转换性能，确保平均耗时 < 1s。 |
| 575 | `performance/conversion_h2dts_performance.test.ts` | `h2dts_scene_namespace_variables_functions_10_under_10s` | 性能测试 | 3 | 验证 h2dts 在 class/namespace/static 场景（scene namespace variables functions 10 under 10s）下的转换性能，确保平均耗时 < 1s。 |
| 576 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 577 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 578 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 579 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_number_array` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type number array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 580 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_array_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type array string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 581 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_map_string_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type map string number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 582 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_map_number_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type map number string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 583 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_set_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type set boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 584 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_callback` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（type callback）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 585 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_arrow` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（type arrow）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 586 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_any` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type any）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 587 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_map_string_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type map string boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 588 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_set_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type set number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 589 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_callback_string` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（type callback string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 590 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_type_custom_passthrough` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（type custom passthrough）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 591 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 592 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 593 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 594 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_void` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base void）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 595 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_any` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base any）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 596 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_object` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base object）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 597 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_callback_number` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（base callback number）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 598 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_callback_string` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（base callback string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 599 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_callback_boolean` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（base callback boolean）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 600 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_arrow_no_param` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（base arrow no param）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 601 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_arrow_bool_to_string` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（base arrow bool to string）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 602 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_arrow_two_params_number_return` | 性能测试 | 3 | 验证 h2dts 在函数签名类型（base arrow two params number return）上的转换能力与性能，确保平均耗时 < 50ms。 |
| 603 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_string_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base map string number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 604 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_string_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base map string string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 605 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_string_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base map string boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 606 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_number_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base map number number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 607 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_number_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base map number string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 608 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_map_number_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base map number boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 609 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_set_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base set string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 610 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_base_custom_passthrough` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（base custom passthrough）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 611 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_number_short` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array number short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 612 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_string_short` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array string short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 613 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_boolean_short` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array boolean short）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 614 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 615 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 616 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_boolean` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array boolean）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 617 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_nested_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array nested number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 618 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_number_2d` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array number 2d）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 619 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_nested_map` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array nested map）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 620 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_nested_set` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array nested set）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 621 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_readonly_array_number` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array readonly array number）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 622 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_int32array` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array int32array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 623 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_uint8array` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array uint8array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 624 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_float32array` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array float32array）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 625 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_array_buffer` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array array buffer）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 626 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_shared_array_buffer` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array shared array buffer）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 627 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_vector_int` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array std vector int）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 628 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_array_double_4` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array std array double 4）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 629 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_deque_string` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array std deque string）上的转换能力与性能，确保平均耗时 < 10ms。 |
| 630 | `performance/conversion_h2dtscpp_performance.test.ts` | `h2dtscpp_array_std_list_bool` | 性能测试 | 3 | 验证 h2dts 在 string/number/boolean/数组/Map 等类型（array std list bool）上的转换能力与性能，确保平均耗时 < 10ms。 |
