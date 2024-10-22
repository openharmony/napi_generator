/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
import { parse } from 'path';

export function search(ss: any, data: any) {
    ss = replaceAll(ss, '\\.', '\\.');
    let reg = new RegExp(ss);
    let tt = reg.exec(data);
    if (tt === null || tt === undefined) {
        return null;
    }
    //let ret = { 'regs': [] };
    let ret: { regs: number[][] } = { regs: [] };
    for (let i = 0; i < tt.length; i++) {
        let p = data.indexOf(tt[i]);
        if (tt[i] === null || tt[i] === undefined) {
            ret.regs.push([-1, -1]);
        }
        else {
            ret.regs.push([p, p + tt[i].length]);
        }
    }

    return ret;
}

export function match(ss: string, data: string) {
    let tt = search(ss, data);
    if (tt !== null && tt !== undefined && tt.regs[0][0] === 0) {
        return tt;
    }
    return null;
}

export function removeReg(data: string, reg: any[]) {
    return data.substring(0, reg[0]) + data.substring(reg[1], data.length);
}

export function getReg(data: string, reg: any[]) {
    return data.substring(reg[0], reg[1]);
}

export function getFileInPath(tpath: string) {
    return parse(tpath).base;
}

export function getPathInPath(tpath: string) {
    return parse(tpath).dir;
}

export function all(sfrom: string | RegExp) {
    return new RegExp(sfrom, 'g');
}

export function replaceAll(ss: string, sfrom: string, sto: string) {
    return ss.replace(all(sfrom), sto);
}

