const fs = require('fs');

class NLog {
    constructor() {
    }
}
NLog.LEV_NONE = 0;
NLog.LEV_ERROR = 1;
NLog.LEV_DEBUG = 2;
NLog.LEV_INFO = 3;

const LEV_STR = ["[NON]", "[ERR]", "[DBG]", "[INF]"]
var logLevel = NLog.LEV_ERROR;
var logFileName = null;
var logResultMessage = [true, ""]

function GetDateString() {
    let nowDate = new Date();
    return nowDate.toLocaleString();
}

function SaveLog(dateStr, levStr, detail) {
    if (logFileName) {
        let logStr = dateStr + " " + levStr + " " + detail + "\n";
        fs.appendFileSync(logFileName, logStr);
    }
}

NLog.Init = function (level, fileName) {
    logLevel = level in [NLog.LEV_NONE, NLog.LEV_ERROR, NLog.LEV_DEBUG, NLog.LEV_INFO] ? level : NLog.LEV_ERROR;
    logFileName = fileName ? fileName : "napi_generator.log";
}

function RecordLog(lev, ...args) {
    let dataStr = GetDateString();
    let detail = args.join(" ");
    SaveLog(dataStr, LEV_STR[lev], detail);
    logResultMessage = [false, detail];
    if (logLevel < lev) return;
    console.log(dataStr, LEV_STR[lev], detail)
}

NLog.LOGE = function (...args) {
    RecordLog(NLog.LEV_ERROR, args);
}

NLog.LOGD = function (...args) {
    RecordLog(NLog.LEV_DEBUG, args);
}

NLog.LOGI = function (...args) {
    RecordLog(NLog.LEV_INFO, args);
}

NLog.GetResult = function () {
    return logResultMessage;
}

module.exports = {
    NLog
}