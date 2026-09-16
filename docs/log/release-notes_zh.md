# release-notes

## dts2cpp（NAPI框架代码生成工具）

[版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/dts2cpp/docs/release-notes)  

## h2dts（TS接口生成工具）

[版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2dts/docs/release-notes/ts_Gen-1.0.md)  

## h2sa（SERVICE框架生成工具）

[版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2sa/docs/release-notes/Service-1.0.md)  

## cmake2gn（GN脚本生成工具）

[版本说明](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/cmake2gn/docs/release-notes/gn-gen-release-notes-0.0.2.md)  

## h2dtscpp（NATIVE生成工具）

暂无

## scan（API扫描工具）

暂无

# 2026年版本说明

## 2026年9月

- **ACTS 静态 HAP 编译工作流**：固化 ACTS 静态 HAP 编译与动静态耗时对比工作流
- **门禁合规修复**：修复动静态对比脚本的门禁告警

## 2026年8月

- **basetype 类型支持**：新增 Int8Array/Int16Array/Int32Array/Uint8Array/Uint16Array/Uint8ClampedArray 类型支持
- **稳定性测试用例**：新增 dts2cpp 稳定性测试用例（compat array/basic/func/interface/map/object/set/tuple）
- **suite_v2/v3 测试框架**：新增 suite_v2/v3 测试框架与 npm 脚本
- **统一门禁合规**：新增统一门禁合规检查器，包含 ETS/C++/skill 规则与自动修复
- **ohxts-stage-ets-hypium-upgrade v2.1**：新增骨架与公共库
- **Java CodeCheck 修复**：修复 basetype 测试项目的门禁合规问题

## 2026年7月

- **ohos-gate-compliance 技能**：新增统一门禁合规技能
- **XTS Pipeline 集成**：三个 XTS pipeline 接入 gate_review 并增强报告能力
- **gitlog v1.2.0**：强制 staged 行数限制并重构增量提交
- **门禁合规增强**：新增 Dialog/PagePush/compileSdkVersion 检查
- **WordsTool 与 Python 修复**：修复门禁合规问题

## 2026年6月

- **uniflash 技能**：新增 UniSoC P7885 wukong100 PAC 烧录技能
- **ohxtsdynamic v1.4**：新增动态 ArkUI XTS 技能
- **ohxtsstatic v1.4**：升级静态 XTS 技能，增强报告能力
- **ohxtscapi 技能**：新增 CAPI XTS 一体化技能
- **codecheck-words.sh**：恢复并加版权头
- **门禁合规修复**：修复 WordsTool 与 Python 门禁检查问题

## 2026年5月

- **h2dtscpp 性能测试套件**：新增逐用例性能测试套件
- **性能测试完善**：完善 dts2cpp/h2dts 性能测试套件与需求映射
- **需求映射**：完成当前套件布局的需求映射同步

## 2026年4月

- **ohhdf 技能**：新增，HOWTOSKILLS/howtohdf 对齐
- **ohgraph 技能**：新增，包含图架构源码语料库
- **ohdoc 技能**：新增 NAPI 测试用例文档（TS/CSV）
- **ohxtsstatic 技能**：新增静态 XTS 技能（外部 arkui 生成器）
- **h2dts 性能基线**：新增性能基线测试用例
- **p7zipTest 重构**：重构构建与代码组织

## 2026年3月

- **ohclitools 增强**：新增 btclitools/wificlitools/dsclitools 技能
- **ohproj 技能**：新增，包含 cJSON 支持与设计文档
- **ohanalysis 报告**：更新 60/61 release 差异分析
- **ohservices 技能**：新增
- **gitlog check-style**：新增代码规范检查

## 2026年2月

- **ohtest 增强**：新增 coverage_analysis/fuzztest，新增 ohbuild 技能
- **ohanalysis 技能**：新增，包含 60/61 release 分析报告
- **HOWTOSKILLS 更新**：增补 ohclitools/ohppt/ohbuild 用法
- **ohppt 技能**：新增，包含 recvppt.py

## 2026年1月

- **p7zip 三方库**：完成编译文档与脚本
- **skills 目录**：添加并补足版权声明
- **ohhap 增强**：增强构建工具，新增 ohhdc/ohtest 技能
- **gitlog 修复**：修复 porcelain 路径解析

# roadmap

## dts2cpp（NAPI框架代码生成工具）

[roadmap](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/dts2cpp/docs/requirement/ROADMAP_ZH.md)  

## h2dts（TS接口生成工具）

[roadmap](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2dts/docs/requirement/ROADMAP_ZH.md)  

## h2sa（SERVICE框架生成工具）

[roadmap](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2sa/docs/requirement/ROADMAP_ZH.md)  

## cmake2gn（GN脚本生成工具）

暂无

## h2dtscpp（NATIVE生成工具）

暂无

## scan（API扫描工具）

暂无