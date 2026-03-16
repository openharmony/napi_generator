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

'use static';

import {
  Entry,
  Column,
  Builder,
  Component,
  Flex,
  FlexDirection,
  ItemAlign,
  FlexAlign,
  Text,
  Button,
  FontWeight,
  DismissPopupAction,
  Placement,
  PopupStateChangeParam,
  DismissReason,
  $r,
  Row,
  ClickEvent,
  Margin,
  ColumnOptions,
  CalendarPickerDialog,
  ButtonType,
  ButtonStyleMode,
  Direction,
  ButtonRole,
  Color,
  FontStyle,
} from '@ohos.arkui.component'
import { AppStorage, State } from '@ohos.arkui.stateManagement';
import { Router } from '@ohos.arkui.UIContext';
import {
  Popup,
  PopupOptions,
  PopupTextOptions,
  PopupButtonOptions,
  PopupIconOptions,
} from '@ohos.arkui.advanced.Popup';

@Entry
@Component
struct PopupIndex {
  @State actionResult: string = 'init';
  @State onCloseResult: string = 'init';
  @State showBindPopup: boolean = false;

  @Builder
  popupBuilder() {
    Column(){
      Text('popupBuilder')
        .fontSize(28)
        .width('300')
        .height('100')
    }
  }

  build() {
    Column() {
      Text('Popup Test')
        .fontSize(30)
        .margin({ top: 40, bottom: 40 })

      Text(this.actionResult)
        .key('actionResult')
        .fontSize(16)
        .margin({ bottom: 10 })

      Text(this.onCloseResult)
        .key('onCloseResult')
        .fontSize(16)
        .margin({ bottom: 10 })

      Button('Show Popup by bindPopup')
        .id('btnShowPopupByBindPopup')
        .bindPopup(this.showBindPopup,
          {
            builder:this.popupBuilder
          }
        )
        .onClick(() => {
          this.showBindPopup = !this.showBindPopup;
        })

      Popup({
        icon: {
          image: $r('app.media.icon'),
          width: 40,
          height: 40,
          fillColor: Color.Green,
          borderRadius: 8
        } as PopupIconOptions,
        title: {
          text: 'PopupOptions_title_test_value',
          fontSize: 20,
          fontColor: Color.Black,
          fontWeight: FontWeight.Normal,
        } as PopupTextOptions,
        message: {
          text: 'PopupTextOptions_text_test_value',
          fontSize: 20,
          fontColor: Color.Red
        } as PopupTextOptions,
        showClose: true,
        direction: Direction.Rtl,
        maxWidth: '300vp',
        onClose: () => {
          console.info('onClose callback called');
          this.onCloseResult = 'onClose_called';
        },
        buttons: [
          {
            text: 'PopupButtonOptions_text_test_value',
            fontSize: 18,
            fontColor: Color.Blue,
            action: () => {
              console.info('button clicked');
              this.actionResult = 'button_action_called';
            }
          } as PopupButtonOptions,
          {
            text: 'Cancel',
            fontSize: 15,
            fontColor: Color.Black,
            action: () => {
              console.info('cancel button clicked');
              this.actionResult = 'cancel_button_action_called';
            }
          } as PopupButtonOptions],
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
  }
}
