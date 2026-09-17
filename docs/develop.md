# Development Guide

### Introduction

**napi-generator** initially aims to provide NAPI framework code generation tools based on the OpenHarmony standard system to improve development efficiency. Scope of work:

1. Provide NAPI framework code generation tools for developers and IDE platforms on mainstream operating systems
2. Provide usage examples
3. Provide continuous improvement and optimization

### Architecture Diagram

![Architecture Diagram](https://gitee.com/openharmony/napi_generator/raw/master/figures/arch.png)

### File Structure
```
napi_generator
├── docs
├── examples
├── FAQ.md
├── figures
├── LICENSE
├── OAT.xml
├── README.md
├── release-notes
├── src
└── test
```
* docs: Documentation, including usage instructions and development guide
* example: Examples, including text examples and application development examples
* FAQ.md: Frequently asked questions
* figures: Figures, images included in the documentation
* LICENSE: Copyright notice
* OAT.xml: Open source review configuration, see [OAT Open Source Review Tool](https://gitee.com/openharmony-sig/tools_oat)
* README.md: Repository description file
* release-notes: Version release notes
* src: Source code
* test: Test tools

### Module Introduction
##### Command Line Generation Tools
* [cmake2gn](../src/cli/cmake2gn/docs/guide/DEVELOP_ZH.md)
* [dts2cpp](../src/cli/dts2cpp/docs/guide/DEVELOP_ZH.md)
* [h2dts](../src/cli/h2dts/docs/guide/DEVELOP_ZH.md)
* [h2sa](../src/cli/h2sa/docs/guide/DEVELOP_ZH.md)
##### IntelliJ Plugins
* [assist](../src/intellij_plugin/assist/assist_tools_IntelliJ_plugin/docs/guide/DEVELOP_ZH.md)
* [dts2cpp](../src/intellij_plugin/dts2cpp/napi_IntelliJ_plugin/docs/guide/DEVELOP_ZH.md)
* [h2dts](../src/intellij_plugin/h2dts/ts_IntelliJ_plugin/docs/guide/DEVELOP_ZH.md)
##### API Scanning Tools
* [api](../src/tool/api/api_scan_IntelliJ_plugin/docs/DEVELOP_ZH.md)
##### VSCode Plugins
* [dts2cpp](../src/vscode_plugin/readme.md)
* [h2dts](../src/vscode_plugin/readme.md)
* [h2dtscpp](../src/vscode_plugin/readme.md)
* [h2sa](../src/vscode_plugin/readme.md)