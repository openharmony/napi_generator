# GN脚本转换工具 问题反馈

## 问题反馈

1、未添加cmake参数，导致gn脚本转换失败。

![](./figures/cmake_args.png)

问题定位：转换三方库项目生成BUILD.gn脚本未添加所需cmake参数，导致转换失败，报错。

问题解决：在转换三方库时添加cmake参数（-DM_LIBRARY=,-DZLIB_INCLUDE_DIR=E:/OpenHarmony/third_party/zlib,-DZLIB_LIBRARY=E:/OpenHarmony/out/rk3568-khdvk/appexecfwk/bundle_framework/libzlib.z.so），即可解决以上错误。

2、转换三方库生成gn脚本时，报错"clang未解析参数 -iXXXXXX"。

![](./figures/clang_args_not_resolved.png)

问题定位：当前工具代码中未包含“-iXXXXXX”参数的解析，导致转换失败。

问题解决：开发者可二次开发工具，修改napi_generator/hdc/gn-gen/src/analyze_command.js文件下的AnalyzeCommand.clangCheck1(e)接口，添加未解析的参数，修改如下：

	static clangCheck1(e) {
        if (e.startsWith("--sysroot=") ||
			......
            e.startsWith("-isystem") ||
            e == "-w") {
            return true;
        }
        return false;
    }