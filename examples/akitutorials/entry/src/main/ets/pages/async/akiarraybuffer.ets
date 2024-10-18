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
import Logger from '../../util/Logger';
import testNapi from 'libentry.so';
import { TitleBar } from '../../common/TitleBar'
import hilog from '@ohos.hilog';

const TAG: string = 'napi_value';

@Entry
@Component
struct akiarraybuffer {
  private btnFontColor: Resource = $r('app.color.white');
  private pixelMapFormat: image.PixelMapFormat = 3;
  @State isSetInstance: Boolean = false;
  @State imagePixelMap: PixelMap | undefined = undefined;
  @State textcont: string = '当在非 JS 线程使用 aki::ArrayBuffer，'
    + '需要关注数据字节流生命周期，并考虑是否需要结合Commit()函数使用。';
  @State testcont: string = ' // 异步返回 ArrayBuffer 数据 \n'
    + '  const myData = test.AsyncTaskReturnArrayBufferWithCommit(); \n'
    + ' // 使用获取的自定义数据 \n'
    + ' console.log(myData); // 输出自定义数据 \n';

  controller: TextAreaController = new TextAreaController()

  build() {
    Column() {
      // 标题
      TitleBar({ title: $r('app.string.aki_arraybuffer') })

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
            .fontColor('#182431')
            .backgroundColor('#FFFFFF')
            .enabled(false)

          TextArea({
            text: this.testcont,
            placeholder: '',
          })
            .placeholderFont({ size: 16, weight: 400 })
            .width('90%')
            .margin(10)
            .fontSize(16)
            .fontColor($r('app.color.COLOR_80000000'))
            .backgroundColor($r('app.color.COLOR_99FFFFFF'))
            .enabled(false)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Center)
        .justifyContent(FlexAlign.Start)

        Row() {
          Button($r('app.string.aki_arraybuffer'), { type: ButtonType.Capsule })
            .backgroundColor(Color.Blue)
            .width('80%')
            .height(48)
            .fontSize(16)
            .fontWeight(500)
            .fontColor(this.btnFontColor)
            .margin({ left: 24 })
            .id('napi_async_complete_callback')
            .onClick(() => {
              let buff: ArrayBuffer = new ArrayBuffer(4);
              let uint8Buff: Uint8Array = new Uint8Array(buff);
              uint8Buff[0] = 0;
              uint8Buff[1] = 1;
              uint8Buff[2] = 2;
              uint8Buff[3] = 3;
              testNapi.AsyncTaskReturnArrayBufferWithCommit(uint8Buff).then(res => {
                let uint8Buff1 = new Uint8Array(res);
                let msg = uint8Buff1.toString();
                hilog.info(0x0000, 'testTag', `testNapiValue = ${msg} `);
                this.testcont = this.testcont.replace('log(myData)', 'log(## '+msg+' ##)');
              });
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
