/*
* Copyright (c) 2021 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const path = require('path');

function print(...args) {
    console.log(...args)
}

function search(ss, data) {
    ss = replace_all(ss, "\\.", "\\.")
    let reg = new RegExp(ss);
    let tt = reg.exec(data);
    // print("#############")
    // print(tt)
    // print("#############")
    if (tt == null) return null;
    let ret = { "regs": [] }
    for (let i = 0; i < tt.length; i++) {
        let p = data.indexOf(tt[i]);
        if (tt[i] == null) {
            ret["regs"].push([-1, -1])
        }
        else {
            ret["regs"].push([p, p + tt[i].length])
        }
    }

    return ret;
}

function match(ss, data) {
    let tt = search(ss, data)
    if (tt != null && tt.regs[0][0] == 0) return tt;
    return null;
}

function remove_reg(data, reg) {
    return data.substring(0, reg[0]) + data.substring(reg[1], data.length)
}

function get_reg(data, reg) {
    return data.substring(reg[0], reg[1])
}

function get_file_in_path(tpath) {
    return path.parse(tpath).base;
    // for(let i=tpath.length-1;i>=0;i--)
    // {
    //     if(tpath[i]=='\\' || tpath[i]=='/')
    //     return tpath.substring(i+1,tpath.length);
    // }
    // return tpath;
}

function get_path_in_path(tpath) {
    return path.parse(tpath).dir;
    // for(let i=tpath.length-1;i>=0;i--)
    // {
    //     if(tpath[i]=='\\' || tpath[i]=='/')
    //     return tpath.substring(0,i);
    // }
    // return tpath;
}

function all(sfrom) {
    return new RegExp(sfrom, "g");
}

function replace_all(ss, sfrom, sto) {
    return ss.replace(all(sfrom), sto)
}

function path_join(...args) {
    return path.join(...args)
    // let ret=""
    // for (let i=0;i<args.length;i++)
    // {
    //     if(i>0)
    //     {
    //         if(ret[ret.length-1]!="/" && ret[ret.length-1]!="\\")ret+="\\"
    //     }
    //     ret+=args[i];
    // }
    // return ret
}

module.exports = {
    search,
    match,
    remove_reg,
    get_reg,
    get_file_in_path,
    get_path_in_path,
    path_join,
    replace_all,
    all
}