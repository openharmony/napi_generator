# IDEA插件开发环境配置

基础环境要求：
JDK 11 ，IDEA Community 213及以上

1.下载IDEA Community 与 JDK11 配置好环境
点击 https://www.jetbrains.com/idea/download/ 下载Community版本，并完成安装。


2.打开IDEA Community 应用程序。
依次点击项目File>Open 选择napi_generator/src/generator项目文件夹。
![](../../figures/IntelliJ_env_config_open_proj.png)

3.项目配置
项目打开完成，点击File>Project Structure
![](../../figures/IntelliJ_env_proj_structure.png)

4.配置Modules.
Project Settings > Modules 新建Modules,再new Modules界面选择IntelliJ Platform Plugin。点击上方“-”删除原有的Modules，点击上方侧“+”选择 New Modules。
![](../../figures/IntelliJ_env_Proj_Module.png)

5.配置Module SDK.
在New Modules对话框中，选择IntelliJ Platform Plugin。若为首次环境配置，请在Module SDK 下拉框中点击 Add IntelliJ Platform Plugin SDK 选择IDEA Community安装目录，点击OK,在Select Internal Java Platform 选择 JAVA SDK 11（213版本只支持 11)
![](../../figures/IntelliJ_env_Proj_Module_New.png)

6.配置Root Content.
在上图界面点击Next，选择Content root:为napi_generator/src/generator文件夹，module name会自动变为generator,若出现提示已存在是否覆盖的提示，请点“是”完成配置。
![](../../figures/IntelliJ_env_module_root.png)