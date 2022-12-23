# GN脚本转换工具使用说明
## 简介

VS Code插件下载路径如下： 

[下载链接](http://ftpkaihongdigi.i234.me:5000/fsdownload/1OjtRhtGf/gn-gen-0.0.1)              

## 环境说明

1、visual studio code 版本需1.62.0及以上。

2、安装cmake，安装命令如下：

	sudo apt-get install cmake

## VS Code插件使用方法

### 生成BUILD.gn编译脚本

1、Ubuntu中下载OpenHarmony源码，并编译成功一个产品的镜像包，此处以RK3568为例。

![](./figures/pic-openharmony.png)

2、将待转换的三方库项目放置在third_party文件夹下，如下所示：

![](./figures/pic-mbedtls-development.png)

3、打开VS Code，在左侧边栏中选择插件安装。

![](./figures/pic-plug-in-search.png)

4、 单击上面三个点的按钮，选择从VSIX安装选项，然后选择刚才生成的gn-0.0.1.vsix插件文件，再单击安装。

![](./figures/pic-plug-in-select.png)

5、 安装完成后就会在VS Code的插件管理器中能看到gn这个插件了。

![](./figures/pic-gn-plug-sucess.png)

6、 选中任意文件或文件夹，点击右键，选择“Gn Generate Frame”选项。

![](./figures/pic-plug-in-gn-c++.png)

7、Gn Generate Frame窗口中,各文本框填写如下所示：

工具输出路径选择：/home/harmony/OpenHarmony/out/rk3568-khdvk(文本框中自动修改为OpenHarmony相对路径，下同)；

工程源码路径选择：/home/harmony/OpenHarmony；

输入脚本路径选择：/home/harmony/OpenHarmony/third_party/mbedtls-development/CMakeLists.txt；

输入脚本类型：默认为cmake，此处不做修改；

GN生成路径：根据输入脚本路径选择路径自动填写third_party/mbedtls-development（使用者可根据具体情况自行选择）；

子系统名称：默认填写test_subsystem（可根据实际情况自行修改）；

组件名称：默认填写test_part（可根据实际情况自行修改）；

编译选项：根据具体三方库项目选填。

以上参数填写完成后，点击ok。

![](./figures/pic-gn-frame.png)

8.执行成功后会在/OpenHarmony/third_party/mbedtls-development目录下生成build_tmp文件夹，build_tmp文件夹中包含BUILD.gn等文件，如下所示：

![](./figures/pic-build-tmp.png)

### 将三方库集成到OpenHarmony源码

1、通过别的子系统调用的方式将三方库集成到OpenHarmony，此处以multimodalinput为例。在~\multimodalinput\input\BUILD.gn文件中，ohos_shared_library.deps参数中添加mbedtls-development，如下所示：

	deps=[
	    ......
	    "//third_party/mbedtls-development/build_tmp:all_targets",
	]

2、编译成功后，会生成mbedtls-development相关库文件或可执行程序，生成文件及路径如下所示：

![](./figures/generate_file.png)

### 总结

根据以上两步，即可将三方库集成到OpenHarmony源码中。

