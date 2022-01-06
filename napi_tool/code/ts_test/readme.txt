使用nodejs测试napi生成程序，可以更快的测试验证

环境搭建：
npm i bindings node-addon-api -S

raw:手工编写最终代码，快速验证可行性，最后生成程序来生成这个代码
gen:由gnapi生成的代码，生成的跟手写的(raw)一致