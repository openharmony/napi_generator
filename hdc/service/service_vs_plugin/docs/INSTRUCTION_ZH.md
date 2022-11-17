# SERVICE框架生成工具VSCode插件使用说明
## 简介

VS Code插件下载路径如下：

[下载链接](暂无)               

## VS Code插件使用方法

### 说明

visual studio code 版本需1.62.0及以上。

### 步骤

1、 打开VS Code，在左侧边栏中选择插件安装。

![](../../figures/pic-plug-in-search.png)

2、 单击上面三个点的按钮，选择从VSIX安装选项，然后选择刚才生成的service-0.0.1.vsix插件文件，再单击安装。

![](../../figures/pic-plug-in-select.png)

3、 安装完成后就会在VS Code的插件管理器中能看到service这个插件了。

![](../../figures/pic-plug-in-service.png)

4、 在VS Code中找到需要转换的.h文件，如下：

![](../../figures/pic-plug-in-select-h.png)

5、 右键单击.h文件，选择“ Generate Service Frame”选项。

![](../../figures/pic-plug-in-gen-c++.png)

6、 工具打开 Generate Service Frame窗口，.h文件选择框默认填写被操作的.h文件的绝对路径；输出路径选择框默认填写.h文件所在文件夹路径，可修改为任意路径；serviceID默认填写9000，可修改为其他id，然后点击ok。

![](../../figures/pic-service-frame.png)

7、 转换成功后，在输出路径下生成service框架代码文件。

