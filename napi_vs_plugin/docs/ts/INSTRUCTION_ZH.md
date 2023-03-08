# Ts接口生成工具VSCode插件使用说明
## 简介

VS Code插件下载路径如下，选择napi_generator_outputs.zip中gnapi-0.0.1.vsix下载。

[下载链接](http://ftp.kaihongdigi.com:5000/fsdownload/mKjfCmPjk/generator_outputs_NAPI_0930)               

## VS Code插件使用方法

### 说明

visual studio code 版本需1.62.0及以上。

### 使用指导

1.打开VS Code，在左侧边栏中选择插件安装。

![](../../../figures/pic-plug-in-search.png)

2.在应用商店搜索NAPI插件，再单击安装。

![](../../../figures/pic-plug-in-select.png)

3.安装完成后就会在VS Code的插件管理器中能看到napi-gen这个插件了。

![](../../../figures/pic-plug-in-gnapi.png)

4.把需要转换的.h文件放到任意目录下。

![](../../../figures/pic-plug-in-h.png)

5.选择.h文件,点击右键选择 Generate Napi Frame，工具弹出Generate Napi Frame弹窗,选择Ts-Gen页签。文件路径文本框填写.h文件路径；输出目录选择文本框填写生成.d.ts文件存放路径，点击ok。

![](../../../figures/pic-plug-in-h-c++.png)

6.执行结束后会在out目录下生成.d.ts代码文件。

