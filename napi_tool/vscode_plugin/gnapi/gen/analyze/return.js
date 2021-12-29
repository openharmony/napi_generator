const re = require("../tools/re");
const { print, RemoveExplains, RemoveEmptyLine, CheckOutBody } = require("../tools/tool");
const { FuncType,NumberIncrease } = require("../tools/common");

/**函数返回值解析 */
function AnalyzeReturn(ret) {
    let is_promise = false
    if (ret.indexOf("Promise") >= 0) {
        is_promise = true
    }
    return [ret, is_promise]
}

module.exports = {
    AnalyzeReturn
}