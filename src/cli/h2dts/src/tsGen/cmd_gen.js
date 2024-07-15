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

const tsMain = require('./tsMain');
const { NapiLog } = require('./tools/NapiLog');
const path = require('path');
const stdio = require('stdio');
var fs = require('fs');
const util = require('util');

let ops = stdio.getopt({
    'filename': { key: 'f', args: 1, description: '.d.ts file', default: '' },
    'directory': { key: 'd', args: 1, description: '.d.ts directory', default: '' },
    'out': { key: 'o', args: 1, description: 'output directory', default: '.' },
    'loglevel': { key: 'l', args: 1, description: 'Log Level : 0~3', default: '1' },
    'tsGen':{key: 't', args: 1, description: 'enable or disable generate typescript file', default: false },
});

let vscode = null;
try {
    vscode = require('vscode');
}
catch (err) {
    vscode = null;
}

NapiLog.init(ops.loglevel, path.join('' + ops.out, 'napi_gen.log'));

let fileNames = ops.filename;
var pathDir = ops.directory;
if (fileNames == null && pathDir == null) {
    NapiLog.logInfo('fileNames and pathDir both cannot be empty at the same time');
} else if (pathDir !== '') {
    readDirFiles();
} else if (fileNames !== '') {
    readFiles();
}

function print(...args) {
  if (vscode) {
      vscode.window.showInformationMessage(...args);
  }
  console.log(...args);
}

function readFiles() {
    fileNames = fileNames.replace(/(^\s*)|(\s*$)/g, ''); // trim before and after espace
    let regex = ',';
    let filenameArray = fileNames.toString().split(regex);

    let n = filenameArray.length;
    for (let i = 0; i < n; i++) {
        let fileName = filenameArray[i];
        if (fileName !== ' ') {
            fileName = fileName.replace(/(^\s*)|(\s*$)/g, '');
            checkGenerate(fileName);
        }
    }
}

function handleDirFiles(files) {
    if (0 === files.length) {
        NapiLog.logInfo(util.format('[Func: readDirFiles] No files in path  %s!', pathDir));
        return;
    }
    (function iterator(i) {
        if (i === files.length) {
            return;
        }
        let data = fs.statSync(path.join(pathDir + '', files[i]));
        if (data.isFile()) {
            let fileName = files[i];
            checkGenerate(pathDir + '/' + fileName);
        }
        iterator(i + 1);
    })(0);
}

function readDirFiles() {
    let fileList;
    try {
        fileList = fs.readdirSync(pathDir + '');
    } catch (err) {
        NapiLog.logError('readdir file error ' + err);
        return;
    }

    handleDirFiles(fileList);
}

function checkGenerate(fileName) {
    NapiLog.logInfo(util.format('check file []', fileName));
    let suffix = fileName.split('.').pop().toLowerCase();
    if (suffix === 'h') {
        NapiLog.logInfo('convert .h file to .ts file...');
        tsMain.doGenerate(fileName, ops.out);
        return;
    }
    else {
        NapiLog.logError('file name ' + fileName + ' format invalid in function of checkGenerate!');
    }
}

let ret = NapiLog.getResult();
if (ret[0]) {
    print('success');
    NapiLog.logInfo('success');
}
else {
    print('fail\n' + ret[1]);
    NapiLog.logInfo('fail\n' + ret[1]);
}
