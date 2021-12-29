gnapi是使用yo code生成的插件代码框架，其中gnapi/gen目录下是我们开发的自动化生成napi程序的源代码

yo生成插件框架:
安装yo : npm install -g yo generator-code
使用yo : yo code

使用nodejs测试生成代码:
node vscode_plugin/gnapi/gen/test.js
node vscode_plugin/gnapi/gen/cmd_gen.js nodejs_test/gen/@ohos.napitest.d.ts

插件打包成visx:
安装vsce : npm i -g vsce
打包 : vsce package

插件打包成windows,mac,linux三种版本的命令行可执行文件
安装pkg : npm i -g pkg
打包三个版本 : pkg vscode_plugin/gnapi/gen/cmd_gen.js
