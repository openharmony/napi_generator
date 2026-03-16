/**
 * Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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


'use static'
import {
  Entry,
  Component,
  Column,
  Select,
  Text,
  ColumnOptions,
  Color,
  TextAlign,
  FlexAlign,
  ResourceStr,
  ArrowPosition,
  $r,
  MenuKeyboardAvoidMode,
  wrapBuilder,
  SliderOptions,
  Scroll,
  MenuAlignType,
  AvoidanceMode
} from '@ohos.arkui.component';
import { State } from '@ohos.arkui.stateManagement';
import { Router } from '@ohos.arkui.UIContext';
import { AppStorage } from '@ohos.arkui.stateManagement';
import { ColorSpace, ComponentContent } from '@kit.ArkUI';
import { UIContext } from '@ohos.arkui.UIContext';
import { LengthUnit, LengthMetrics } from '@ohos.arkui.node';

// xxx.ets
@Entry
@Component
struct SelectIndex {
  @State text: string = "TTTTT";
  @State index: Int = -1;
  @State arrowPosition: ArrowPosition = ArrowPosition.END;

  aboutToAppear() {
    try {
      let routerInstance = this.getUIContext().getRouter();
      AppStorage.setOrCreate<Router>('router', routerInstance);
    } catch (error) {
      console.log('error ' + error);
    }
  }

  build() {
    Scroll() {
      Column({ space: 20 } as ColumnOptions) {
        // Select - 包含所有4个属性：showInSubWindow, showDefaultSelectedIcon, keyboardAvoidMode, minKeyboardAvoidDistance
        Select([{ value: 'aaa', icon: $r("app.media.icon") },
          { value: 'bbb', icon: $r("app.media.icon") },
          { value: 'ccc', icon: $r("app.media.icon") },
          { value: 'ddd', icon: $r("app.media.icon") }])
          .id('selectAllProperties')
          .margin({top:20})
          .width(200)
          .height(40)
          .selected(this.index)
          .value(this.text)
          .font({ size: 16, weight: 500 })
          .fontColor('#182431')
          .showInSubWindow(false)
          .showDefaultSelectedIcon(false)
          .keyboardAvoidMode(MenuKeyboardAvoidMode.NONE)
          .minKeyboardAvoidDistance(LengthMetrics.vp(20))
          .selectedOptionFont({ size: 16, weight: 400 })
          .optionFont({ size: 16, weight: 400 })
          .arrowPosition(this.arrowPosition)
          .onSelect((index: Int, text?: string | undefined) => {
            console.info('Select:' + index);
            this.index = index;
            if (text) {
              this.text = text;
            }
          })
      }
      .justifyContent(FlexAlign.Start)
      .width('100%')
      .padding({ top: 10, bottom: 10, left: 10, right: 10 })
    }
    .width('100%')
    .height('100%')
  }
}