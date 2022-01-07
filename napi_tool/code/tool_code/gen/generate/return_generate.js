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

function c_to_js(value, type, dest, deep = 1) {
    // print(value, type, dest)
    if (type == "void")
        return "%s = pxt->UndefinedValue();".format(dest);
    else if (type == "boolean")
       return "%s = pxt->SwapC2JsBool(%s);".format(dest, value);
    else if (type == "string")
        return `%s = pxt->SwapC2JsUtf8(%s.c_str());`.format(dest, value)
    else if (type.substring(0, 12) == "NUMBER_TYPE_")
        return `%s = NUMBER_C_2_JS(pxt, %s);`.format(dest, value)
    else if (InterfaceList.GetValue(type)) {
        let lt = deep
        let tt = ""
        let ifl = InterfaceList.GetValue(type)
        for (let i in ifl) {
            let name2 = ifl[i].name
            let type2 = ifl[i].type
            let tt1 = c_to_js("%s.%s".format(value, name2), type2, "tnv%d".format(lt), deep + 1)
            tt += "{\nnapi_value tnv%d = nullptr;\n".format(lt) + tt1 + `\npxt->SetValueProperty(%s,"%s",tnv%d);\n}`.format(
                dest, name2, lt)
        }
        return tt
    }
    else if (type.substring(0, 6) == "Array<") {
        let array_type = get_array_type(type)
        let lt = deep
        let tnv = dest
        let tnvdef = `uint32_t len%d=%s.size();
    for(uint32_t i=0;i<len%d;i++) {
        napi_value tnv%d = nullptr;
        [calc_out]
        pxt->SetArrayElement(%s, i, tnv%d);
    }`.format(lt, value, lt, lt, tnv, lt)
        let ret = ""
        if (array_type.substring(0, 12) == "NUMBER_TYPE_") {
            ret = tnvdef.ReplaceAll("[calc_out]", `tnv%d = NUMBER_C_2_JS(pxt,%s[i]);`.format(lt, value))
        }
        else if (array_type == "string") {
            ret = tnvdef.ReplaceAll("[calc_out]", `tnv%d = pxt->SwapC2JsUtf8(%s[i].c_str());`.format(lt, value))
        }
        else if (InterfaceList.GetValue(array_type)) {
            ret = tnvdef.ReplaceAll("[calc_out]", c_to_js(value + "[i]", array_type, "tnv" + lt, deep + 1))
        }
        return ret
    }
    else
        print(`\n---- generate c_to_js fail %s,%s,%s ----\n`.format(value, type, dest))
}

function ReturnGenerate(type, param) {
    param.value_fill += "%svio->out".format(param.value_fill.length > 0 ? ", " : "")
    param.value_package = "napi_value result = nullptr;\n    " + c_to_js("vio->out", type, "result")
    if (type == "string") {
        param.value_out = "std::string out;"
        param.value_define += "%sstd::string &out".format(param.value_define.length > 0 ? ", " : "")
    }
    else if (type == "void") {
        return;
    }
    else if (type == "boolean") {
        param.value_out = "bool out;"
        param.value_define += "%sbool &out".format(param.value_define.length > 0 ? ", " : "")
    }    
    else if (type.substring(0, 12) == "NUMBER_TYPE_") {
        param.value_out = type + " out;"
        param.value_define += "%s%s &out".format(param.value_define.length > 0 ? ", " : "", type)
        // this.values_["value_call"] += "%svio->out".format(len(this.values_["value_call"]) > 0 ? ", " : "")
        // this.generate_value_package("vio->out", type)
        // this.values_["value_out"] = "%s out;".format(type)
        // this.values_["value_define"] += "%s%s &out".format(
        //     len(this.values_["value_define"]) > 0 ? ", " : "", type)
    }
    else if (InterfaceList.GetValue(type)) {
        param.value_out = type + " out;"
        param.value_define += "%s%s &out".format(param.value_define.length > 0 ? ", " : "", type)
    }
    else if (type.substring(0, 6) == "Array<") {
        let array_type = get_array_type(type)
        if (array_type == "string") array_type = "std::string"
        param.value_out = "std::vector<%s> out;".format(array_type)
        param.value_define += "%sstd::vector<%s> &out".format(param.value_define.length > 0 ? ", " : "", array_type)
    }
    // else if (type in this.interface_list) {
    //     this.values_["value_call"] += "%svio->out".format(len(this.values_["value_call"]) > 0 ? ", " : "")
    //     this.generate_value_package("vio->out", type)
    //     this.values_["value_out"] = "%s out;".format(type)
    //     this.values_["value_define"] += "%s%s &out".format(
    //         len(this.values_["value_define"]) > 0 ? ", " : "", type)
    // }

    // else if (type.substring(0, 6) == "Array<") {
    //     let array_type = get_array_type(type)
    //     if (array_type == "string") array_type = "std::string"
    //     this.values_["value_call"] += "%svio->out".format(len(this.values_["value_call"]) > 0 ? ", " : "")
    //     this.generate_value_package("vio->out", type)
    //     this.values_["value_out"] = "std::vector<%s> out;".formatarray_type
    //     this.values_["value_define"] += "%sstd::vector<%s> &out".format(
    //         len(this.values_["value_define"]) > 0 ? ", " : "", array_type)
    // }
    else {
        print(`\n---- ReturnGenerate fail %s ----\n`.format(type))
    }
    param.value_fill += "%svio->out".format(param.value_fill.length > 0 ? ", " : "")        
}

module.exports = {
    c_to_js,
    ReturnGenerate
}