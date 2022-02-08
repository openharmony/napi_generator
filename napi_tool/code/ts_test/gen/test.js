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

const test = require("./build/Release/napitest")

//直接返回
let result = test.fun2("direct", [1, 2, 3], { name: "cc", age: 20 })
console.log(result)

//同步回调
test.fun3("callback", function (ret) { console.log(ret) })
//异步回调
function testAsync() {
    test.fun4("async", function (ret) { console.log(ret) })
    test.fun4("promise").then(ret => { console.log(ret); })
}
testAsync()

let tc1 = new test.TestClass1()
tc1.str1 = "asdf"
console.log(tc1.str1)
console.log(tc1.if_direct("123"))

tc1.if_callback("abc", function (ret) { console.log(ret) })
tc1.if_async("world").then(ret => { console.log(ret) })

console.log(test.Space3.fun3("ccnto"))
let tc2 = new test.Space3.Space4.TestClass3()
console.log("hoho=", tc2.add([3, 4, 5]))
console.log("==== end ====")

setTimeout(function () {
    console.log('interval')
}, 100);
