const test = require('./build/Release/test.node');

let ret = test.setTime(3);
console.log(ret)

function dofun1() {
    let tt = new test.test2()
    tt.fun1()
    tt.abc="asdf";
    console.log(tt.abc)
    tt = null;
}

dofun1()
global.gc()
// setInterval(function () {
//     dofun1()
//     console.log('interval')
//     global.gc();
// }, 1000);

setTimeout(function () {
    console.log('timeout');
}, 1000);
