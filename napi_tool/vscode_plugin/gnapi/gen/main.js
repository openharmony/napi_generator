// const vscode = require('vscode');
const { AnalyzeFile } = require("./analyze");
const { GenerateAll } = require("./generate");
const re = require("./tools/re")

function DoGenerate(ifname) {
    // console.log("----------generate start---------")

    let struct_of_ts = AnalyzeFile(ifname);
    // print(struct_of_ts)

    GenerateAll(struct_of_ts, re.get_path_in_path(ifname));

    // console.log("----------generate end---------")
}

module.exports = {
    DoGenerate
}