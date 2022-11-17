# GN脚本转换工具使用说明
## 简介

gn-gen工具支持三种入口，分别是可执行程序、VS Code插件、IntelliJ插件，使用者可以根据自己的需要选择合适的工具。可执行文件、IntelliJ插件、VS Code插件下载路径如下：

[下载链接](暂无)

下载文件说明如下：

	│   │   |── gn_IntelliJ_plugin.jar        # IntelliJ插件
	│   │   |── gn-0.0.1.vsix                 # VS Code插件
	│   │   |── res                           # 工具所需make文件
	│   │   |── gn-gen-linux                  # Linux可执行程序 
	│   │   |── gn-gen-win.exe                # Windows可执行程序    
	│   │   └── gn-gen-macos                  # Mac可执行程序                

## 工具介绍

通过gn-gen生成工具，使用者可以基于OpenHarmony源码，将三方库项目解析并生成BUILD.gn编译脚本，以便将三方库项目集成到OpenHarmony源码中。

## 生成BUILD.gn编译脚本

### 可执行程序使用方法
#### Linux

1、Ubuntu中下载OpenHarmony源码，并编译成功一个产品的镜像包，此处以RK3568A为例。

2、将待转换的三方库项目放置在third_party文件夹下，如下所示：

	harmony@Ubuntu-64:~/OpenHarmony/third_party/test_project$ ls
	CMakeLists.txt  main.c

3、将下载的可执行程序gn-gen-linux与文件夹res放置在任意同一文件夹下。如下所示：

	harmony@Ubuntu-64:~/service/napi_generator_8/hdc/gn-gen/example$ ls
	gn-gen-linux  res

4、在终端中进入到可执行程序gn-gen-linux所在的目录，并运行gn-gen-linux，命令如下：

	harmony@Ubuntu-64:~/service/napi_generator_8/hdc/gn-gen/example$ ./gn-gen-linux -o /out/rk3568-khdvk  -p /home/harmony/OpenHarmony -f /third_party/test_project/CMakeLists.txt
	INFO (1) -- The C compiler identification is Clang 10.0.1
	INFO (2) -- The CXX compiler identification is Clang 10.0.1
	......
	INFO (24) -------------------generate gn ok
	harmony@Ubuntu-64:~/service/napi_generator_8/hdc/gn-gen/example$

其中,参数详情如下：
  -f, 待转换三方库项目CMakeLists.txt文件所在OpenHarmony相对路径(例如：third_party/opencv/CMakeLists.txt)；
  -o, OpenHarmony源码RK3568A所在相对路径(例如：/out/rk3568-khdvk)；
  -p, OpenHarmony源码所在路径；
  -t, 可选参数，待转换三方库项目编译模式，默认为cmake(当前只支持cmake项目)；
  -a, 可选参数，项目转换所需cmake参数；
  -s, 可选参数，子系统名称；
  -m, 可选参数，项目名称；
  -d, 可选参数，工具转换成功后生成build_tmp文件存在路径。

5.运行成功后会在/OpenHarmony/third_party/test_project目录下生成build_tmp文件夹，build_tmp文件夹中包含BUILD.gn、可执行程序hello等文件，如下所示：

	harmony@Ubuntu-64:~/OpenHarmony/third_party/test_project/build_tmp$ ls
	BUILD.gn  CMakeCache.txt  CMakeFiles  cmake_install.cmake  hello  Makefile  ohos.toolchain.cmake

#### Windows

1、windows中下载OpenHarmony源码，并编译成功一个产品的镜像包，此处以RK3568A为例。

2、将待转换三方库项目放置在third_party文件夹下，如下所示：

	E:\OpenHarmony\third_party\test_project>dir /B
	CMakeLists.txt
	main.c

3、将下载的可执行程序gn-gen-win.exe与文件夹res放置在任意同一文件夹下。如下所示：

	E:\demo\gn>dir /B
	gn-gen-win.exe
	res

4、在终端中进入到可执行程序gn-gen-win.exe所在的目录，并运行gn-gen-win.exe，命令如下：

	E:\demo\gn>gn-gen-win.exe -o out/rk3568-khdvk -p E:/OpenHarmony -f third_party/test_project/CMakeLists.txt
	INFO (1) -- The C compiler identification is Clang 10.0.1
	INFO (2) -- The CXX compiler identification is Clang 10.0.1
	......
	INFO (24) -------------------generate gn ok
	E:\demo\gn>

其中,参数详情如下：
  -f, 待转换三方库项目CMakeLists.txt文件所在OpenHarmony相对路径(例如：third_party/opencv/CMakeLists.txt)；
  -o, OpenHarmony源码RK3568A所在相对路径(例如：/out/rk3568-khdvk)；
  -p, OpenHarmony源码所在路径；
  -t, 可选参数，待转换三方库项目编译模式，默认为cmake(当前只支持cmake项目)；
  -a, 可选参数，项目转换所需cmake参数；
  -s, 可选参数，子系统名称；
  -m, 可选参数，项目名称；
  -d, 可选参数，工具转换成功后生成build_tmp文件存在路径。

5.运行成功后会在E:\OpenHarmony\third_party\test_project目录下生成build_tmp文件夹，build_tmp文件夹中包含BUILD.gn、可执行程序hello等文件，如下所示：

	E:\OpenHarmony\third_party\test_project\build_tmp>dir /B
	BUILD.gn
	CMakeCache.txt
	CMakeFiles
	cmake_install.cmake
	hello
	Makefile
	ohos.toolchain.cmake

#### Mac

方法步骤参考windows、Linux的使用方法。

### VS Code插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[VS插件使用说明](https://gitee.com/openharmony/napi_generator/tree/master/hdc/gn/gn_vs_plugin/docs/INSTRUCTION_ZH.md)

### IntelliJ插件使用方法

具体的插件使用步骤，可以左键单击以下链接了解：

[IntelliJ插件使用说明](https://gitee.com/openharmony/napi_generator/tree/master/hdc/gn/gn_IntelliJ_plugin/docs/INSTRUCTION_ZH.md)

