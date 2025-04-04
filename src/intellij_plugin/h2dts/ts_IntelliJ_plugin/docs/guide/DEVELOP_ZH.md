# TS工具IntelliJ插件开发说明

若当前工具功能不满足开发者需求，开发者需增强工具能力，则可基于已有源码进行工具二次开发，编译打包生成自定义的IntelliJ插件。

## IntelliJ插件打包说明

### 环境说明

系统：建议Windows 10

### 开发步骤

#### 环境准备

1.下载napi_generator-win.exe可执行程序与header_parser.exe可执行程序，放置在napi_generator/src/intellij_plugin/h2dts/ts_IntelliJ_plugin/resources/cmds/win目录下。其中header_parser.exe在header_parser/windows/下，下载地址如下(由于网络原因，可能会导致有的下载链接失效，因此提供了以下三个下载链接)：

[下载链接1](http://ftpkaihongdigi.i234.me:5000/sharing/kBG1c7CvT)

[下载链接2](http://ftp.kaihong.com:5000/sharing/kBG1c7CvT)

[下载链接3](http://ftp.kaihongdigi.com:5000/sharing/kBG1c7CvT)

2.下载并安装IDEA Community、JDK11配置好环境。IDEA Community版本可以左键单击以下链接下载。

[下载链接](https://www.jetbrains.com/idea/download/)

3.打开IDEA Community应用程序。
依次点击项目File>Open 选择napi_generator/src/intellij_plugin/h2dts/ts_IntelliJ_plugin项目文件夹。

![](../figures/IntelliJ_env_config_open_proj.png)

4.项目打开完成，点击File>Project Structure,在出现的界面中点击Project,下图的SDK选择JDK 11，Language level也选择版本11，选择或者新建complier output目录为项目文件下的out目录。
![](../figures/IntelliJ_env_proj_structure.png)

5.Project Settings > Modules 新建Modules。点击上方“-”删除原有的Modules，然后点击“+”选择 New Module。
![](../figures/IntelliJ_env_Proj_Module.png)

6.在New Module对话框中，选择IntelliJ Platform Plugin。若Module SDK中无可选SDK，请在Module SDK 下拉框中点击 Add IntelliJ Platform Plugin SDK 选择IDEA Community安装目录，点击OK,在Select Internal Java Platform 选择 JAVA SDK 11（213版本只支持 11)，点击New Module对话框中Next。
![](../figures/IntelliJ_env_Proj_Module_New.png)

7.Content root选择~/napi_generator/src/intellij_plugin/h2dts/ts_IntelliJ_plugin文件夹，module name填写generator。点击Finish，若出现提示已存在是否覆盖的提示，请点“Yes”完成配置。
![](../figures/IntelliJ_env_module_root.png)

8.Modules配置完成后，若在SDKs中无相应JDK和Plugin SDK,请点击+号分别添加 Add Java JDK和Add Intellij PlantForm Plugin SDK,Java JDK为java11的安装目录，Plugin SDK为 IDEA Community 2021.3.3的安装目录。
![](../figures/IntelliJ_env_config_SDKs.png)

9.在SDKs->IntelliJ IDEA Community 2021.3.3->Classpath下导入程序需要的依赖：napi_generator.jar包

![](../figures/IntelliJ_env_config_SDKs_Classpath.png)

10.若完成以上步骤配置，点击OK完成配置。Rebuild项目，若IDEA不能点击右上角的运行，点击Plugin后下三角选择Edit Configurations...选项，Run/Debug Configurations框中Use classpath of moudle选择generator，点击ok，等待安装完成。

![](../figures/IntelliJ_env_configurations.png)

![](../figures/IntelliJ_env_run_debug.png)

11.点击Intellij IDEA工具右上角Built Project按钮，等待工程built完成。

![](../figures/IntelliJ_env_built_pro.png)

12.在IDEA Community中依次点击Build>Prepare All Plugin Modules for development"，然后在Select Modules框中点击ok，jar包生成完成后在工具右下角提示jar包生成成功，且包含jar包存放位置。

![](../figures/IntelliJ_env_built_jar.png)

![](../figures/IntelliJ_env_select_moudles.png)

![](../figures/IntelliJ_env_built_jar_success.png)
