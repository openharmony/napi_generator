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

const TAG: string = 'napi_is_array';

@Entry
@Component
struct napiisarray {
  @State isSetInstance: Boolean = false;
  @State imagePixelMap: PixelMap | undefined = undefined;
  @State textcont: string = 'napi_is_array() 用于判断给定对象是否是数组'
    + '如果 API 成功，则返回 napi_ok。'
    + '该 API 表示调用对象上的 IsArray 操作，如 ECMAScript 语言规范的 第 7.2.2 节 中所定义。';
  @State testcont: string = '// 调用 API 对不同类型的输入进行测试 \n'
    + 'const testNumIsArrayResult = addon.testNapiIsArray(123); // 数字 -> false \n'
    + 'const testStrIsArrayResult = addon.testNapiIsArray(\'test123\'); // 字符串 -> false \n'
    + 'const testBoolIsArrayResult = addon.testNapiIsArray(true); // 布尔值 -> false \n'
    + 'const testNullIsArrayResult = addon.testNapiIsArray(null); // null -> false \n'
    + 'const testUndefIsArrayResult = addon.testNapiIsArray(undefined); // undefined -> false \n'
    + 'const testArrIsArrayResult = addon.testNapiIsArray([1, \'2\', false, null, undefined])'
    + '// 输出判断结果 \n'
    + 'console.log(`123 -> ${testNumIsArrayResult}`); \n'
    + 'console.log(`\'test123\' -> ${testStrIsArrayResult}`); \n'
    + 'console.log(`true -> ${testBoolIsArrayResult}`); \n'
    + 'console.log(`null -> ${testNullIsArrayResult}`); \n'
    + 'console.log(`undefined -> ${testUndefIsArrayResult}`); \n'
    + 'console.log(`[1, \'2\', false, null, undefined] -> ${testArrIsArrayResult}`); \n';
  controller: TextAreaController = new TextAreaController()
  private btnFontColor: Resource = $r('app.color.white');
  private pixelMapFormat: image.PixelMapFormat = 3;

  build() {
    Scroll() {
      Column() {
        // 标题
        TitleBar({ title: $r('app.string.napi_is_array') })

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
              .backgroundColor('#FFFFFF')
              .enabled(false)
          }
          .width('100%')
          .alignItems(HorizontalAlign.Center)
          .justifyContent(FlexAlign.Start)

          Row() {

            Button($r('app.string.napi_is_array'), { type: ButtonType.Capsule })
              .backgroundColor(Color.Blue)
              .width('80%')
              .height(48)
              .fontSize(16)
              .fontWeight(500)
              .fontColor(this.btnFontColor)
              .margin({ left: 24 })
              .id('napi_is_array')
              .onClick(() => {
                try {
                  // Test if number/string/boolean/null/undefined/array is array
                  const testNum: number = 123;
                  const testStr: string = 'test123'
                  const testBool: boolean = true;
                  const testNull: null = null;
                  const testUndef: undefined = undefined;
                  const testArr: Array<number | string | boolean | null | undefined> = [1, '2', false, null, undefined];
                  console.log('=======begin===========');
                  const testNumIsArray = testNapi.testNapiIsArray(testNum);
                  const testStrIsArray = testNapi.testNapiIsArray(testStr);
                  const testBoolIsArray = testNapi.testNapiIsArray(testBool);
                  const testNullIsArray = testNapi.testNapiIsArray(testNull);
                  const testUndefIsArray = testNapi.testNapiIsArray(testUndef);
                  const testArrIsArray = testNapi.testNapiIsArray(testArr);
                  console.log('=========try=========');

                  // Replace result in testcont
                  this.testcont = this.testcont.replace('${testNumIsArrayResult}', `## ${testNumIsArray} ##`);
                  this.testcont = this.testcont.replace('${testStrIsArrayResult}', `## ${testStrIsArray} ##`);
                  this.testcont = this.testcont.replace('${testBoolIsArrayResult}', `## ${testBoolIsArray} ##`);
                  this.testcont = this.testcont.replace('${testNullIsArrayResult}', `## ${testNullIsArray} ##`);
                  this.testcont = this.testcont.replace('${testUndefIsArrayResult}', `## ${testUndefIsArray} ##`);
                  this.testcont = this.testcont.replace('${testArrIsArrayResult}', `## ${testArrIsArray} ##`);

                  // Print the results
                  hilog.info(0x0000, TAG, `(whether is ${testNum} array? -> ${testNumIsArray}`);
                  hilog.info(0x0000, TAG, `(whether is ${testStr} array? -> ${testStrIsArray}`);
                  hilog.info(0x0000, TAG, `(whether is ${testBool} array? -> ${testBoolIsArray}`);
                  hilog.info(0x0000, TAG, `(whether is ${testNull} array? -> ${testNullIsArray}`);
                  hilog.info(0x0000, TAG, `(whether is ${testUndef} array? -> ${testUndefIsArray}`);
                  hilog.info(0x0000, TAG, `(whether is ${testArr} array? -> ${testArrIsArray}`);
                } catch (error) {
                  hilog.error(0x0000, TAG, `Catch error testNapiIsArray: ${error.message}}`)
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
    }
    .width('100%')
    .height('100%')
    .align(Alignment.Top)
    .backgroundColor($r('app.color.background_shallow_grey'))
  }
}
