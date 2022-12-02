# TS接口生成工具VSCode插件开发说明

若当前工具功能不满足开发者需求，开发者需增强工具能力，则可基于已有源码进行工具二次开发，编译打包生成自定义的VS Code插件。

## VS Code插件打包说明

### Linux

1.下载napi_generator-linux可执行程序与linux系统下header_parser.exe可执行程序，并放置在napi_generator/napi_vs_plugin/src/目录下，下载链接如下：

[下载链接](http://ftp.kaihongdigi.com:5000/fsdownload/mKjfCmPjk/generator_outputs_NAPI_0930)

2.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npm i

3.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npm i typescript

4.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npm i vsce

5.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npx vsce package

  每个选项都选择y，然后回车，最终会在当前目录下打包生成一个插件gnapi-0.0.1.vsix。结果如下：

	harmony@Ubuntu-64:~/napi/napi_generator_5/napi_vs_plugin/src$ npx vsce package
	WARNING  A 'repository' field is missing from the 'package.json' manifest file.
	Do you want to continue? [y/N] y
	WARNING  Using '*' activation is usually a bad idea as it impacts performance.
	More info: https://code.visualstudio.com/api/references/activation-events#Start-up
	Do you want to continue? [y/N] y
	WARNING  LICENSE.md, LICENSE.txt or LICENSE not found
	Do you want to continue? [y/N] y
	This extension consists of 3370 files, out of which 1627 are JavaScript files. For performance reasons, you should bundle your extension: https://aka.ms/vscode-bundle-extension . You should also exclude unnecessary files by adding them to your .vscodeignore: https://aka.ms/vscode-vscodeignore
	DONE  Packaged: /home/harmony/napi/napi_generator_5/napi_vs_plugin/src/gnapi-0.0.1.vsix (3370 files, 44.42MB)

### Windows

1.下载napi_generator-win.exe可执行程序与Windows系统下header_parser.exe可执行程序，并放置在napi_generator/napi_vs_plugin/src/目录下。

2.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npm i

3.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npm i typescript

4.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npm i vsce

5.在napi_generator/napi_vs_plugin/src目录下执行命令：

	npx vsce package

  每个选项都选择y，然后回车，最终会在当前目录下打包生成一个插件gnapi-0.0.1.vsix。结果如下：

	E:\napi_generator\napi_vs_plugin\src>npx vsce package
	WARNING  A 'repository' field is missing from the 'package.json' manifest file.
	Do you want to continue? [y/N] y
	WARNING  Using '*' activation is usually a bad idea as it impacts performance.
	More info: https://code.visualstudio.com/api/references/activation-events#Start-up
	Do you want to continue? [y/N] y
	WARNING  LICENSE.md, LICENSE.txt or LICENSE not found
	Do you want to continue? [y/N] y
	This extension consists of 3467 files, out of which 1692 are JavaScript files. For performance reasons, you should bundle your extension: https://aka.ms/vscode-bundle-extension . You should also exclude unnecessary files by adding them to your .vscodeignore: https://aka.ms/vscode-vscodeignore
	DONE  Packaged: E:\napi_generator\napi_vs_plugin\src\gnapi-0.0.1.vsix (3467 files, 42.3MB)

