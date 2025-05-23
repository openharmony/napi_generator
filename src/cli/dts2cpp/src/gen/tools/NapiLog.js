/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
* Licensed under the Apache License, Version 2.0 (the "License"); 
* you may not use this file except in compliance with the License. 
* You may obtain a copy of the License at 
*
* http://www.apache.org/licenses/LICENSE-2.0 
*
* Unless required by applicable law or agreed to in writing, software 
* distributed under the License is distributed on an "AS IS" BASIS, 
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and 
* limitations under the License. 
*/
const fs = require('fs');
const path = require('path');
let vscode = null;
try {
    vscode = require('vscode');
}
catch (err) {
    vscode = null;
}

class NapiLog {
    constructor() {
    }
}
NapiLog.LEV_NONE = 0;
NapiLog.LEV_ERROR = 1;
NapiLog.LEV_DEBUG = 2;
NapiLog.LEV_INFO = 3;

const LEV_STR = ['[NON]', '[ERR]', '[DBG]', '[INF]'];
let logLevel = NapiLog.LEV_ERROR;
let logFileName = null;
let logResultMessage = [true, ''];

function getDateString() {
    let nowDate = new Date();
    return nowDate.toLocaleString();
}

function saveLog(dateStr, levStr, detail) {
    if (logFileName) {
        let logStr = dateStr + ' ' + levStr + ' ' + detail + '\n';
        fs.appendFileSync(logFileName, logStr);
    }
}

NapiLog.init = function (level, fileName) {
    logLevel = level in [NapiLog.LEV_NONE, NapiLog.LEV_ERROR, NapiLog.LEV_DEBUG, NapiLog.LEV_INFO]
        ? level : NapiLog.LEV_ERROR;
    logFileName = fileName ? fileName : 'napi_generator.log';
};

/**
 * 通过调用栈获取当前正在执行的方法名，代码行数及文件路径
 * @param {} callerFuncName 指定取调用栈中哪个方法名所在的帧作为目标帧
 * @returns 
 */
NapiLog.getCallPath = function (callerFuncName = null) {
    let callPath = '';
    let stackArray = new Error().stack.split('\n');

    // 如果没有指定目标方法，默认在调用栈中查找当前方法"getCallPath"所在的帧
    let destFuncName = callerFuncName !== null ? callerFuncName : 'getCallPath';

    for (let i = stackArray.length - 1; i >= 0; --i) {
        // debug模式和打包后的可执行程序调用栈函数名不同， 以NapiLog.log()方法为例：
        // vscode debug模式下调用栈打印的方法名为NapiLog.log，而可执行程序的调用栈中显示为Function.log()
        let callerMatch = (stackArray[i].indexOf('NapiLog.' + destFuncName) > 0 ||
            stackArray[i].indexOf('Function.' + destFuncName) > 0);
        if (callerMatch) {
            let stackMsg = stackArray[i + 1].trim();
            let leftIndex = stackMsg.indexOf('(');
            let rightIndex = stackMsg.indexOf(')');

            if (leftIndex > 0 && rightIndex > 0) {
                let funInfo = stackMsg.substring(0, leftIndex);
                let srcPath = stackMsg.substring(leftIndex + 1, rightIndex);
                let colNumIndex = srcPath.lastIndexOf(':');
                let colNum = srcPath.substring(colNumIndex + 1, srcPath.length);
                let lineNumIndex = srcPath.lastIndexOf(':', colNumIndex - 1);
                let lineNum = srcPath.substring(lineNumIndex + 1, colNumIndex);
                let filePath = srcPath.substring(0, lineNumIndex);

                callPath = '%s[%s(%s:%s)]'.format(funInfo, filePath, lineNum, colNum);
            }
            break;
        }
    }

    return callPath;
};

function print(...args) {
    if (vscode) {
        vscode.window.showInformationMessage(...args);
    }
    console.log(args + '');
}

function recordLog(lev, ...args) {
    let origMsgInfo = args;
    let callPath = NapiLog.getCallPath('log');
    let dataStr = getDateString();
    let detail = args.join(' ');
    saveLog(dataStr + ' ' + callPath, LEV_STR[lev], detail);
    if (lev === NapiLog.LEV_ERROR) {
        logResultMessage = [false, detail];
    }
    let logStr = callPath + ' ' + detail;
    if (logLevel <= lev) {
        return logStr;
    }
    NapiLog.logInfo(origMsgInfo[0]);
    return logStr;
}

NapiLog.logError = function (...args) {
    let logInfo = recordLog(NapiLog.LEV_ERROR, args);
    print(logInfo);
};

NapiLog.logDebug = function (...args) {
    recordLog(NapiLog.LEV_DEBUG, args);
};

NapiLog.logInfo = function (...args) {
    recordLog(NapiLog.LEV_INFO, args);
};

NapiLog.getResult = function () {
    return logResultMessage;
};

module.exports = {
    NapiLog,
};