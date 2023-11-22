import napitest from '@ohos.napitest';

let ns =  new napitest.NodeISayHello();
class NodeISayHelloListenerImpl {
    listener = null;
    constructor(listener) {
        this.listener = listener;
    }
    onSayHelloStart(info) {
        AppStorage.SetOrCreate("textInfoStart", JSON.stringify(info))
        console.log('napiTestDemo ----onSayHelloStart', JSON.stringify(info));
    }
    onSayHelloEnd(info) {
        AppStorage.SetOrCreate("textInfoEnd", JSON.stringify(info))
        console.log('napiTestDemo ----onSayHelloEnd.', JSON.stringify(info));
    }
}
// @ts-ignore
let listener = new NodeISayHelloListenerImpl()

// register注册的回调
function onCallbackfunnm(wid) {
    AppStorage.SetOrCreate("callBackNum", JSON.stringify(wid))
    console.info("napiTestDemo ----onCallbackfunnm wid = " + wid)
    return "ocCallbackfuncnm";
}

@Entry
@Component
struct Index {
    @State textErrMsg: string = ''
    @State textResult: string = ''
    @State textResponse: string = ''
    @State returnVal: string = ''
    @StorageLink("textInfoStart")textInfoStart: string = ""
    @StorageLink("textInfoEnd")textInfoEnd: string = ""
    @StorageLink("callBackNum")callBackNum: string = ""

    build() {
        Row() {
            Column() {
                Button() {
                    Text('注册object回调后SayHello调用回调')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick(() => {
                    AppStorage.SetOrCreate("textInfoStart", "")
                    AppStorage.SetOrCreate("textInfoEnd", "")
                    // 注册回调
                    ns.addSayHelloListener(listener);
                    // 调用回调
                    ns.sayHello("js1", "native1", napitest.SayType.kInitiative);
                })

                Button() {
                    Text('注销object回调后SayHello调用回调')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick(() => {
                    AppStorage.SetOrCreate("textInfoStart", "")
                    AppStorage.SetOrCreate("textInfoEnd", "")
                    // 注销回调 removeSayHelloListener
                    ns.removeSayHelloListener(listener);
                    // 调用回调
                    ns.sayHello("js2", "native2", napitest.SayType.kInitiative);
                })

                // promise回调
                Button() {
                    Text('Promise 回调')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick(async () => {
                    await ns.sayHelloWithResponse("response from", "response to", napitest.SayType.kResponse).then(ret => {
                        this.textErrMsg = ret.errMsg
                        this.textResult = JSON.stringify(ret.result)
                        this.textResponse = ret.response
                        console.info("napiTestDemo ----sayHelloWithResponse ret.errMsg = " + ret.errMsg)
                        console.info("napiTestDemo ----sayHelloWithResponse ret.result = " + ret.result)
                        console.info("napiTestDemo ----sayHelloWithResponse ret.response = " + ret.response)
                    });
                })

                Button() {
                    Text('register回调后sayHi调用回调')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick( () => {
                    AppStorage.SetOrCreate("callBackNum", "")
                    // 注册回调
                    ns.registerCallbackfunc(onCallbackfunnm);
                    // 调用回调
                    ns.sayHi("js3", "native3", napitest.SayType.kResponse);
                })

                Button() {
                    Text('unRegister回调后sayHi调用回调')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick( () => {
                    AppStorage.SetOrCreate("callBackNum", "")
                    // 注销回调
                    ns.unRegisterCallbackfunc(onCallbackfunnm);
                    // 调用回调
                    ns.sayHi("js4", "native4", napitest.SayType.kResponse);
                })

                // 调用普通函数
                Button() {
                    Text('调用funcTest方法')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick( () => {
                    this.returnVal = napitest.funcTest(false);
                    console.info("napiTestDemo ----funcTest returnVal = " + this.returnVal)
                })

                Text('promise回调: errMsg = ' + this.textErrMsg + ', result = ' + this.textResult + ', response = ' + this.textResponse)
                    .margin({
                        top: 10
                    })
                Text('sayHelloStart回调: info = ' + this.textInfoStart).margin({ top: 10 })
                Text('sayHelloEnd回调: info = ' + this.textInfoEnd).margin({ top: 10 })
                Text('register注册的回调： wid = ' + this.callBackNum).margin({ top: 10 })
                Text('普通方法funcTest返回值： returnVal = ' + this.returnVal).margin({ top: 10 })
            }
            .width('100%')
        }
        .height('100%')
    }
}
