## NAPI_GENERATOR 问题反馈

### 1. pkg cmd_gen.js 生成.exe程序失败

问题描述：在Linux命令行入口安装辅助工具过程中，按文档步骤，在使用pkg命令打包生成.exe文件时，发生报错。

~/workspace/assist_tool/assist_tools/napi_tool/code/tool_code/gen$ pkg cmd_gen.js

> pkg@5.5.2
> Targets not specified. Assuming:
> node10-linux-x64, node10-macos-x64, node10-win-x64
> Fetching base Node.js binaries to PKG_CACHE_PATH
> fetched-v10.24.1-linux-x64 [ ] 0%> Not found in remote cache:
> {"tag":"v3.2","name":"node-v10.24.1-linux-x64"}
> Building base binary from source:
> built-v10.24.1-linux-x64
> Fetching Node.js source archive from nodejs.org...
> Error! AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

问题定位：这是由于在使用pkg命令打包生成.exe文件时，需要连接github来生成对应的可执行程序，由于国内的网络的问题，连接github的时候有时候时连接不上的。

问题解决：如果失败继续执行这个命令，多执行几次就会成功。



### 2. 用可执行程序生成c++代码失败

问题描述：在windows下用cmd_gen-win.exe生成对应的c++代码报错。

D:\napi_tool>cmd_gen-win.exe @ohos.power.d.ts                                                                                                                                                                                                pkg/prelude/bootstrap.js:1794                                                                                                                                                                                                                      return wrapper.apply(this.exports, args);                                                                                                                                                                                                                   ^                                                                                                                                                                                                                                                                                                                                                                                                                                                                    TypeError: Cannot read property 'name' of undefined                                                                                                                                                                                              at GenerateAll (C:\snapshot\gen\generate.js)                                                                                                                                                                                                 at Object.DoGenerate (C:\snapshot\gen\main.js)                                                                                                                                                                                               at Object.<anonymous> (C:\snapshot\gen\cmd_gen.js)                                                                                                                                                                                           at Module._compile (pkg/prelude/bootstrap.js:1794:22)                                                                                                                                                                                    [90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)[39m                                                                                                                                                      [90m    at Module.load (internal/modules/cjs/loader.js:950:32)[39m                                                                                                                                                                         [90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)[39m                                                                                                                                                                   at Function.runMain (pkg/prelude/bootstrap.js:1847:12)                                                                                                                                                                                   [90m    at internal/main/run_main_module.js:17:47[39m  

问题定位：在windows命令行中执行cmd_gen-win.exe的时候后面没有加d.ts文件所在的绝对路径，导致d.ts文件没有找到。

问题解决：在执行cmd_gen-win.exe的时候后面要加.d.ts文件所在的绝对路径，或者把d.ts文件放入到cmd_gen-win.exe所在的目录中，例如直接执行cmd_gen-win.exe @ohos.power.d.ts。