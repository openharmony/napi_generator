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
const re = require("../tools/re");
function generateEnum(name, data) {
    let implH = ""
    let implCpp = ""

    if (re.match("[a-zA-Z]", data.element[0].value)) {
        implH = `\nclass %s {\npublic:\n`.format(name, implH)
    } else {
        implH = `\nenum %s {\n`.format(name, implH)
    }
    for (let i in data.element) {
        let v = data.element[i]
        if (re.match("[a-zA-Z]", v.value)) {
            implH += `    static const std::string %s;\n`.format(v.name)
            implCpp += `\nconst std::string %s::%s = "%s";\n`.format(name, v.name, v.value)
        } else {
            if (v.value == '') {
                v.value = 0
            }
            implH += `    %s = %s,\n`.format(v.name, v.value)
        }
    }
    implH += `};\n`
    let result = {
        implH: implH,
        implCpp: implCpp
    }
    return result
}
module.exports = {
    generateEnum
}