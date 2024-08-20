### 工具使用方法说明

1. 安装python库 CppHeaderParser

   ~~~
   pip install CppHeaderParser
   ~~~

2. 安装typescript：在napi_generator/src/cli/h2sa/src/src目录下执行命令

   ~~~
   npm i typescript
   ~~~

3. 安装stdio：在napi_generator/src/cli/h2sa/src目录下执行命令

   ~~~
   npm i stdio
   ~~~

4. 将待转换的文件test.h文件拷贝到napi_generator/src/cli/h2sa/src/src/gen目录下

5. 在napi_generator/src/cli/h2sa/src/src/gen目录下执行命令生成service框架代码：

   ~~~
   node main.js -f test.h
   ~~~

   其中,参数详情如下： -f，定义远程服务的.h文件； -l, 日志级别（0-3），默认为1； -o,生成框架代码输入到指定路径下； -s,指定serviceID。 -v,指定版本（3.2和4.1，默认版本为3.2） 

6. 输出testservice文件夹

7. 编译步骤：生成的testservice文件夹放在源码根目录下

8. 配置vendor serviceID

9. 编配置完成后，执行镜像编译命令   ./build.sh --product-name 产品名若编译rk3568开发板，则执行      ./build.sh --product-name rk3568

10. 烧录镜像

11. 验证

    > 验证一： shell登录开发板。 查看服务端进程是否已正常启动
    >
    > ~~~
    > ps -ef | grep testservice
    > ~~~
    >
    > 验证二：运行客户端
    >
    > ~~~
    > /system/bin/testclient 
    > ~~~

