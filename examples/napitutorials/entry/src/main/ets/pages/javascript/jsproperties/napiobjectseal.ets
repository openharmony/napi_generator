/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import router from '@ohos.router';
import image from '@ohos.multimedia.image';
import Logger from '../../../util/Logger';
import testNapi, { testNapiValue } from 'libentry.so';
import { TitleBar } from '../../../common/TitleBar'
import hilog from '@ohos.hilog';

const TAG: string = 'napi_object_seal';

interface MyObj {
  key1: string;
  key2: number;
  key3: boolean;
  key4: Array<string>
}

@Entry
@Component
struct napiObjectSeal {
  private btnFontColor: Resource = $r('app.color.white');
  private pixelMapFormat: image.PixelMapFormat = 3;
  @State isSetInstance: Boolean = false;
  @State imagePixelMap: PixelMap | undefined = undefined;
  @State textcont: string = 'napi_object_seal()用于冻结对象。'
    + '此 API 可防止向其添加新属性，以及将所有现有属性标记为不可配置。'
    + '这在 ECMA-262 规范的 第 19.1.2.20 节 中进行了描述。';
  @State testcont: string = ' // 测试 N-API napi_object_seal \n'
    + ' let obj = {key1: "value", key2: 4, key3: true, key4: ["a", "b"]}; \n'
    + ' const myData = testNapi.testNapiObjectSeal(obj); \n'
    + ' console.log(myData); \n'
    + ' // 改变属性 \n'
    + ' const myData1 = testNapi.testNapiSetNamedProperty(obj, "key1", "price"); \n'
    + ' console.log(myData1); \n'
    + ' // 删除其中属性 \n'
    + ' const myData2 = testNapi.testNapiDeleteProperty(obj, "key1"); \n'
    + ' console.log(myData2); \n'


  controller: TextAreaController = new TextAreaController()

  build() {
    Column() {
      // 标题
      TitleBar({ title: $r('app.string.napi_object_seal') })

      Column() {
        Column() {
          TextArea({
            text: this.textcont,
            placeholder: '',
          })
            .placeholderFont({ size: 16, weight: 400 })
            .width('90%')
            .margin(10)
            .fontSize(16)
            .fontColor($r('app.color.sub_title_color'))
            .backgroundColor($r('app.color.white'))
            .enabled(false)

          TextArea({
            text: this.testcont,
            placeholder: '',
          })
            .placeholderFont({ size: 16, weight: 400 })
            .width('90%')
            .margin(10)
            .fontSize(16)
            .fontColor($r('app.color.textarea_font_color'))
            .backgroundColor($r('app.color.white'))
            .enabled(false)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Center)
        .justifyContent(FlexAlign.Start)

        Row() {

          Button($r('app.string.napi_object_seal'), { type: ButtonType.Capsule })
            .backgroundColor(Color.Blue)
            .width('80%')
            .height(48)
            .fontSize(16)
            .fontWeight(500)
            .fontColor(this.btnFontColor)
            .margin({ left: 24 })
            .id('napi_object_seal')
            .onClick(() => {
              let obj: MyObj = {
                key1: "value",
                key2: 4,
                key3: true,
                key4: ["a", "b"]
              }
              let ret = testNapi.testNapiObjectSeal(obj);
              let ret1 = testNapi.testNapiSetProperty(obj, 'key1', 'price');
              let ret2 = testNapi.testNapiDeleteProperty(obj, 'key1');
              this.testcont = this.testcont.replace('log(myData)', 'log(## '+JSON.stringify(ret)+' ##)');
              this.testcont = this.testcont.replace('log(myData1)', 'log(## '+JSON.stringify(ret1)+' ##)');
              this.testcont = this.testcont.replace('log(myData2)', 'log(## '+JSON.stringify(ret2)+' ##)');
            })
        }
        .width('100%')
        .height(48)
        .alignItems(VerticalAlign.Center)
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .width('100%')
    }
    .height('100%')
    .width('100%')
    .backgroundColor($r('app.color.background_shallow_grey'))
  }
}