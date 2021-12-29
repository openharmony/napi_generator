const { WriteFile } = require("../tools/FileRW");
const re = require("../tools/re");

let gn_templete = `\
import("//build/ohos.gni")

ohos_shared_library("[impl_name]")
{
    sources = [
        "[impl_name]_middle.cpp",
        "[impl_name].cpp",
        "x_napi_tool.cpp",
    ]
    include_dirs = [
        ".",
        "//third_party/node/src",
    ]
    deps=[
        "//foundation/ace/napi:ace_napi",
    ]
    remove_configs = [ "//build/config/compiler:no_rtti" ]
    cflags=[
    ]
    cflags_cc=[
        "-frtti",
    ]
    ldflags = [
    ]
    
    relative_install_dir = "module"
    part_name = "<your part name>"
    subsystem_name = "<your subsystem name>"
}
`

/**创建nodejs编译文件，用于在ubuntu测试 */
function GenerateGN(dest_dir, impl_name) {
    let ss = gn_templete.ReplaceAll("[impl_name]", impl_name)
    WriteFile(re.path_join(dest_dir, "BUILD.gn"), ss)
}

module.exports = {
    GenerateGN
}