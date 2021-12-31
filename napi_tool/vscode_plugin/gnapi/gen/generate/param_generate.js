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
const { ReplaceAll, print } = require("../tools/tool");
const { InterfaceList, get_array_type } = require("../tools/common");
const re = require("../tools/re");

class LenIncrease { }
LenIncrease.LEN_TO = 1;
LenIncrease.Reset = function () {
    LenIncrease.LEN_TO = 1;
}
LenIncrease.GetAndIncrease = function () {
    return LenIncrease.LEN_TO++;
}

function get_value_property(napi_vn, name) {
    return 'pxt->GetValueProperty(%s, "%s")'.format(napi_vn, name)
}

function js_to_c(dest, napi_vn, type) {
    if (type == "string") {
        if (napi_vn.indexOf("GetValueProperty") >= 0) {
            let lt = LenIncrease.GetAndIncrease()
            return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){pxt->SwapJs2CUtf8(tnv%d,%s);}`.format(lt, napi_vn, lt, lt, dest)
        }
        else
            return "pxt->SwapJs2CUtf8(%s, %s);".format(napi_vn, dest)
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        if (napi_vn.indexOf("GetValueProperty") >= 0) {
            let lt = LenIncrease.GetAndIncrease()
            return `napi_value tnv%d = %s;\n    if(tnv%d!=nullptr){NUMBER_JS_2_C(tnv%d,%s,%s);}`.format(lt, napi_vn, lt, lt, type, dest)
        }
        else
            return `NUMBER_JS_2_C(%s,%s,%s);`.format(napi_vn, type, dest)
    }
    else if (InterfaceList.GetValue(type)) {
        let tt = ""
        let ifl = InterfaceList.GetValue(type)
        for (let i in ifl) {
            let name2 = ifl[i].name
            let type2 = ifl[i].type
            tt += js_to_c("%s.%s".format(dest, name2), get_value_property(napi_vn, name2), type2)
        }
        return tt
    }
    else if (type.indexOf("Array<") == 0) {
        let array_type = get_array_type(type)
        let lt = LenIncrease.GetAndIncrease()
        if (array_type == "string") array_type = "std::string"
        let arr_templete = `\
        uint32_t len[replace_lt]=pxt->GetArrayLength(%s);
        for(uint32_t i[replace_lt]=0;i[replace_lt]<len[replace_lt];i[replace_lt]++) {
            %s tt[replace_lt];
            [replace_swap]
            %s.push_back(tt[replace_lt]);
        }`.format(napi_vn, array_type, dest)

        arr_templete = arr_templete.ReplaceAll("[replace_lt]", lt)
        if (array_type.substring(0, 12) == "NUMBER_TYPE_") {
            arr_templete = arr_templete.ReplaceAll("[replace_swap]",
                "NUMBER_JS_2_C(pxt->GetArrayElement(%s,i%d),%s,tt%d);".format(napi_vn, lt, array_type, lt))
        }
        else if (array_type == "std::string") {
            arr_templete = arr_templete.ReplaceAll("[replace_swap]",
                "pxt->SwapJs2CUtf8(pxt->GetArrayElement(%s,i%d), tt%d);".format(napi_vn, lt, lt))
        }
        else if (InterfaceList.GetValue(array_type)) {
            arr_templete = arr_templete.ReplaceAll("[replace_swap]",
                js_to_c("tt" + lt, "pxt->GetArrayElement(%s,i%d)".format(napi_vn, lt), array_type))
        }
        return arr_templete;
    }
    else
        print(`\n---- generate js_to_c fail %s,%s,%s ----\n`.format(dest, napi_vn, type))
}

function ParamCheckout(name, napi_vn, type) {
    if (type in this.interface_list) {
        for (let i in this.interface_list[type]) {
            let e = this.interface_list[type][i]
            let name2 = Object.keys(e)[0]
            let type2 = e[name2]
            this.values_["value_analyze"] += "%s%s".format(new_line(this.values_["value_analyze"]),
                this.js_to_c("%s.%s".format(name, name2),
                    this.get_value_property(napi_vn, name2),
                    type2))
        }
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_" || type == "string" || type.substring(0, 6) == "Array<")
        this.values_["value_analyze"] += "%s%s".format(new_line(this.values_["value_analyze"]),
            this.js_to_c(name, napi_vn, type))
}

//函数的参数处理
function ParamGenerate(p, name, type, param) {
    if (type == "string") {
        param.value_in += "\n    std::string in%d;".format(p)
        param.value_checkout += js_to_c("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.value_fill += "%svio->in%d".format(param.value_fill.length > 0 ? ", " : "", p)
        param.value_define += "%sstd::string &%s".format(param.value_define.length > 0 ? ", " : "", name)
    }
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        param.value_in += "\n    %s in%d;".format(type, p)
        param.value_checkout += js_to_c("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        param.value_fill += "%svio->in%d".format(param.value_fill.length > 0 ? ", " : "", p)
        param.value_define += "%s%s &%s".format(param.value_define.length > 0 ? ", " : "", type, name)
    }
    else if (InterfaceList.GetValue(type)) {
        param.value_in += "\n    %s in%d;".format(type, p)
        param.value_checkout += js_to_c("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        // this.ParamCheckout("vio->in%d".format(p), "pxt->GetArgv(%d)".format(p), type)
        param.value_fill += "%svio->in%d".format(param.value_fill.length > 0 ? ", " : "", p)
        param.value_define += "%s%s &%s".format(param.value_define.length > 0 ? ", " : "", type, name)
    }
    else if (type.substring(0, 6) == "Array<") {
        let array_type = get_array_type(type)
        if (array_type == "string") array_type = "std::string"
        param.value_in += "\n    std::vector<%s> in%d;".format(array_type, p)
        param.value_checkout += js_to_c("vio->in" + p, "pxt->GetArgv(%d)".format(p), type)
        // this.ParamCheckout("vio->in%d".format(p), "pxt->GetArgv(%d)".format(p), type)
        param.value_fill += "%svio->in%d".format(param.value_fill.length > 0 ? ", " : "", p)
        param.value_define += "%sstd::vector<%s> &%s".format(param.value_define.length > 0 ? ", " : "", array_type, name)
    }
    else if (type.substring(0, 9) == "Callback<" || type.substring(0, 14) == "AsyncCallback<") {
        let tt = re.match("(Async)*Callback<([a-zA-Z_0-9]+)>", type)
        param.callback = {
            type: re.get_reg(type, tt.regs[2]),
            offset: p
        }
    }


    else
        print("param generate err :", name, "type :", type)
}

module.exports = {
    js_to_c,
    ParamGenerate
}