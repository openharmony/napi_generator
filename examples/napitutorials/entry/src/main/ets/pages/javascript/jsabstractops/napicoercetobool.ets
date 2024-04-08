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

import image from '@ohos.multimedia.image';
import testNapi from 'libentry.so';
import { TitleBar } from '../../../common/TitleBar';
import hilog from '@ohos.hilog';

const TAG: string = 'napi_coerce_to_bool';

@Entry
@Component
struct napicoercetobool {
  @State isSetInstance: Boolean = false;
  @State imagePixelMap: PixelMap | undefined = undefined;
  @State textcont: string = 'napi_coerce_to_bool() 用于将任意类型的 JavaScript 值'
    + '（例如 number 或 string）强制转换为 Boolean。'
    + '如果 API 成功，则返回 napi_ok。'
    + '该 API 实现了 ECMAScript 语言规范的 第 7.1.2 节 中定义的抽象操作 ToBoolean()。';
  @State testcont: string = '// 调用 API 对不同类型的输入进行测试 \n'
    + 'const result1 = addon.testNapiCoerceToBool(\'test\'); // 非空字符串 -> true \n'
    + 'const result2 = addon.testNapiCoerceToBool(\'\'); // 空字符串 -> false \n'
    + 'const result3 = addon.testNapiCoerceToBool(123); // 非零值 -> true \n'
    + 'const result4 = addon.testNapiCoerceToBool(0); // 零值 -> false \n'
    + '// 输出强制转换结果 \n'
    + 'console.log(`\'test\' -> ${result1}`); \n'
    + 'console.log(`\'\' -> ${result2}`); \n'
    + 'console.log(`123 -> ${result3}`); \n'
    + 'console.log(`0 -> ${result4}`); \n';
  controller: TextAreaController = new TextAreaController()
  private btnFontColor: Resource = $r('app.color.white');
  private pixelMapFormat: image.PixelMapFormat = 3;

  build() {
    Column() {
      // 标题
      TitleBar({ title: $r('app.string.napi_coerce_to_bool') })

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
            .fontColor('#ff400336')
            .backgroundColor('#ff985307')
            .enabled(false)
        }
        .width('100%')
        .alignItems(HorizontalAlign.Center)
        .justifyContent(FlexAlign.Start)

        Row() {

          Button($r('app.string.napi_coerce_to_bool'), { type: ButtonType.Capsule })
            .backgroundColor(Color.Blue)
            .width('80%')
            .height(48)
            .fontSize(16)
            .fontWeight(500)
            .fontColor(this.btnFontColor)
            .margin({ left: 24 })
            .id('napi_coerce_to_bool')
            .onClick(() => {
              try {
                // Test coercing string/number values to boolean
                const testStr: string = 'test';
                const testEmptyStr: string = '';
                const testNum: number = 123;
                const testZeroNum: number = 0;
                let testStr2BoolResult = testNapi.testNapiCoerceToBool(testStr);
                let testEmptyStr2BoolResult = testNapi.testNapiCoerceToBool(testEmptyStr);
                let testNum2BoolResult = testNapi.testNapiCoerceToBool(testNum);
                let testZeroNum2BoolResult = testNapi.testNapiCoerceToBool(testZeroNum);
                // Replace result in testcont
                this.testcont = this.testcont.replace('${result1}', `## ${testStr2BoolResult} ##`);
                this.testcont = this.testcont.replace('${result2}', `## ${testEmptyStr2BoolResult} ##`);
                this.testcont = this.testcont.replace('${result3}', `## ${testNum2BoolResult} ##`);
                this.testcont = this.testcont.replace('${result4}', `## ${testZeroNum2BoolResult} ##`);
                // Print the results
                hilog.info(0x0000, TAG, `(${typeof (testStr)})${testStr} -> ${testStr2BoolResult}`);
                hilog.info(0x0000, TAG, `(${typeof (testEmptyStr)})${testEmptyStr} -> ${testEmptyStr2BoolResult}`);
                hilog.info(0x0000, TAG, `(${typeof (testNum)})${testNum} -> ${testNum2BoolResult}`);
                hilog.info(0x0000, TAG, `(${typeof (testZeroNum)})${testZeroNum} -> ${testZeroNum2BoolResult}`);
              } catch (error) {
                hilog.error(0x0000, TAG, `Catch error testNapiCoerceToBool: ${error.message}}`)
              }
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
