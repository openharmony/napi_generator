const main = require("./main");
const re = require("./tools/re");
function print(...args)
{
    console.log(...args)
}

let usage_str=`usage:
cmd_gen-win.exe d:\\@ohos.youmodulename.d.ts`

if(process.argv.length<=2)
{
    print(usage_str)
}
else
{
    let fn=re.get_file_in_path(process.argv[2])
    
    let tt=re.match("@ohos\.[a-zA-Z0-9]+\.d\.ts",fn)
    if(tt)
    {
        main.DoGenerate(process.argv[2])
    }
    else
    {
        print("\n文件名 "+fn+" 校验失败，需要符合 @ohos.xxx.d.ts")
    }
}

/*
打包成exe文件
pkg vscode_plugin/gnapi/gen/cmd_gen.js
*/