# IDEA插件开发环境配置

基础环境要求：
JDK 11 ，IDEA Community 2021.3.3

1.下载IDEA Community 与 JDK11 配置好环境
点击 https://www.jetbrains.com/idea/download/ 下载Community版本，并完成安装。


2.打开IDEA Community 应用程序。
依次点击项目File>Open 选择napi_generator/napi_IntelliJ_plugin/generator项目文件夹。
![](../figures/IntelliJ_env_config_open_proj.png)

3.配置Project
项目打开完成，点击File>Project Structure,在出现的界面中点击Project,下图的SDK选择JDK 11，选择或者新建complier output目录为项目文件下的out目录。
![](../figures/IntelliJ_env_proj_structure.png)


4.配置Modules.
Project Settings > Modules 新建Modules.点击上方“-”删除原有的Modules，“+”选择 New Modules。
![](../figures/IntelliJ_env_Proj_Module.png)


5.配置Module SDK.（若SDKs中有相应的Plugin SDK和JDK 11，可以选择默认的Module SDK，点击图中next）
在New Modules对话框中，选择IntelliJ Platform Plugin。若为首次环境配置，请在Module SDK 下拉框中点击 Add IntelliJ Platform Plugin SDK 选择IDEA Community安装目录，点击OK,在Select Internal Java Platform 选择 JAVA SDK 11（213版本只支持 11)
![](../figures/IntelliJ_env_Proj_Module_New.png)

6.配置Root Content.
在上图界面点击Next，选择Content root:选择或者理性为项目根目录(<font style="color: red;">注意：此处必须为项目文件夹的目录</font>），module name会自动变为generator,若出现提示已存在是否覆盖的提示，请点“Finish”完成配置。
![](../figures/IntelliJ_env_module_root.png)


7.配置完成Modules后，若在SDKs中无相应JDK和Plugin SDK,请点击+号分别添加 Add Java JDK和Add Intellij PlantForm Plugin SDK,Java JDK为java11的安装目录，Plugin SDK为 IDEA Community 2021.3.3的安装目录。
![](../figures/IntelliJ_env_config_SDKs.png)

8.若完成步骤7配置，点击OK完成配置。Rebuild项目，若IDEA依然不能点击右上角的运行。请点击Edit configuration编译选择Use classpath of Mode为前面配置好的Module名称。
![](../figures/IntelliJ_env_edit_configurations.png)

9.项目运行成功后，会另起一个IDEA应用程序。插件运行在IDEA中，只需要新建一个Grandle Project,添加相应的TS文件到项目文件夹里面，就可以右击文件，选择Generate napi Frame出现插件主界面进行相应操作。

10.在Deveco stdio中安装插件。
请在IDEA Community中依次点击Build>Prepare Plugin Module " " for development"生成jar包(jar一般生成在generator目录下)。打开DevEco Studio 工具，点击File>settings>plugin。点击右方齿轮选择install plugin from disk选择jar包，点击确定完成。重新IDE完成安装
![](../figures/IntelliJ_env_deveco_install.png)