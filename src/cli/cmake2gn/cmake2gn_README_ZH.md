# cmake2gn工具

## 简介

cmake2gn工具，它可以根据三方库的CMakeLists.txt文件，编译转换生成BUILD.gn脚本文件。当前OpenHarmony源码只支持BUILD.gn文件编译，开发者无法移植CMakeLists.txt编译方式的三方库到OpenHarmony中。此时，开发者可使用GN脚本转换工具，根据CMakeLists.txt文件生成BUILD.gn脚本文件，降低移植难度，提高开发效率。

## 约束
系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

### 生成

1.安装cmake，安装命令如下：

	sudo apt-get install cmake

2.Ubuntu中下载OpenHarmony源码，并编译成功一个产品的镜像包，此处以RK3568为例。将待转换的三方库项目（路径：[三方库项目](https://gitee.com/openharmony/third_party_mbedtls)）放置在third_party文件夹下。将待转换的三方库拷贝到OpenHarmony/third_party下，为了方便使用者快速上手工具，可供测试的三方库项目目录如下：

```
Openharmony@Ubuntu-64:~/OpenHarmony/third_party/mbedtls-development$ ls
3rdparty  BUGS.md  ChangeLog  cmake  configs  DartConfiguration.tcl  docs  include  LICENSE  programs  scripts  SUPPORT.md  visualc  BRANCHES.md  ChangeLog.d  CMakeLists.txt  CONTRIBUTING.md  dco.txt  doxygen  library  Makefile  README.md  SECURITY.md  tests
```

2.下载res文件夹，并放置到napi_generator/src/cli/cmake2gn/src目录下，下载链接如下：

// todo

3.安装typescript：在napi_generator/src/cli/cmake2gn/src/src目录下执行命令：

	npm i typescript

4.安装stdio：在napi_generator/src/cli/cmake2gn/src目录下执行命令：

	npm i stdio

6.在napi_generator/src/cli/cmake2gn/src/src下执行以下命令：

```
node main.js -o out/rk3568 -p /home/OpenHarmony -f third_party/mbedtls-development/CMakeLists.txt -t cmake -s test_subsystem -m mbedtls-development
```

其中,参数详情如下：

  -o：必填参数，ohos产品输出相对路径(例如：out/rk3568)；

  -p：必填参数，ohos项目路径(例如：/home/OpenHarmony)；

  -f：必选参数，待转换三方库cmake文件相对路径(例如：third_party/mbedtls-development/CMakeLists.txt);

  -t：可选参数，默认为cmake;

  -s：可选参数，默认填写“test_subsystem”，使用者可根据实际情况修改子系统名称；

  -m：可选参数，工具默认填写“test_part”，使用者可根据实际情况修改组件名称；

  -d：可选参数，工具默认填写待转换三方库cmake文件所在文件夹相对路径，使用者可根据实际情况修改路径；

  -a：可选参数，待转换三方库中引用其它三方库时需填写该选项，具体填写方法可参考FAQ中libcoap转换时问题解决方法，详细FAQ内容可左键单击以下链接了解：[FAQ](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/cmake2gn/docs/guide/FAQ.md)；

7.运行成功后会在/OpenHarmony/third_party/mbedtls-development目录下生成build_tmp文件夹，build_tmp文件夹中包含BUILD.gn文件，如下所示：

![](./docs/figures/pic-build-tmp.png)

### 集成

具体的将三方库集成到OpenHarmony的步骤，可以左键单击以下链接了解：

[将三方库集成到OpenHarmony的方法](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/cmake2gn/docs/usage/ENSEMBLE_METHOD_ZH.md)


