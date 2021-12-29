const fs = require("fs");
const path = require("path");
const main = require("./main");
const { print } = require("./tools/tool");

if (1 == 1) {
    main.DoGenerate("nodejs_test/gen/@ohos.napitest.d.ts");
}
else {
    let test_ts_dir = "test_ts/ohos"

    if (1 == 0) {
        main.DoGenerate(path.join(test_ts_dir, "@ohos.fileio.d.ts"));
    }
    else {
        let files = fs.readdirSync(test_ts_dir)
        for (let i in files) {
            let fn = files[i]
            let gf = path.join(test_ts_dir, fn)
            print("--------------", i, "-----------------")
            print(gf)
            main.DoGenerate(gf);
            // if (i > 20) break
        }
    }
}

/** 
 * run test:
 * node vscode_plugin/gnapi/gen/test.js
 */

// main.DoGenerate("Z:\\napi_test\\@ohos.napitest.d.ts");

// main.DoGenerate("Z:\\l1\\foundation\\communication\\cx_test\\napi_test\\@ohos.xtestx.d.ts");