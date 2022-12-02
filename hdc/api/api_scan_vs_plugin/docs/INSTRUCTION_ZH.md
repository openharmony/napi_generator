# API扫描工具VSCode插件使用说明
## 简介

VS Code插件下载路径如下：

[下载链接](暂无)               

## VS Code插件使用方法

### 说明

visual studio code 版本需1.62.0及以上。

### 步骤

1、 打开VS Code，在左侧边栏中选择插件安装。

![](../../figures/pic-plug-in-search.png)

2、 单击上面三个点的按钮，选择从VSIX安装选项，然后选择刚才生成的ApiScan-0.0.1.vsix插件文件，再单击安装。

![](../../figures/pic-plug-in-select.png)

3、 安装完成后就会在VS Code的插件管理器中能看到ApiScan这个插件了。

![](../../figures/pic-plug-in-api.png)

4、 选中任意文件或文件夹，单击右键，选择API Scan选项。

![](../../figures/pic-plug-in-api-c++.png)

5、 工具打开Api Scan窗口，扫描项目路径框填写将要扫描项目的绝对路径，结果输出路径框自动填写与扫描项目相同路径，使用者可以根据实际情况修改结果输出路径，然后点击ok。

![](../../figures/pic-api-frame.png)

6、执行结束后会在结果输出路径下生成result文件。
