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
  Text,
  Column,
  Component,
  Button,
  ClickEvent,
  ComponentV2,
  Stack,
  Circle,
  Blank,
  Alignment,
  ResourceColor,
  BlurStyle,
  FontStyle,
  Color,
  TouchEvent,
  ResourceStr,
  Resource
} from '@ohos.arkui.component';
import {
  ArcButtonOptions,
  ArcButton,
  ArcButtonStatus,
  ArcButtonPosition,
  ArcButtonStyleMode
} from '@ohos.arkui.advanced.ArcButton';
import { State, Local } from '@ohos.arkui.stateManagement';
import { LengthMetrics, LengthUnit } from '@ohos.arkui.node';
import { ColorMetrics, LocalizedMargin, ColorSpace } from '@kit.ArkUI';
import hilog from '@ohos.hilog';

@Entry
@ComponentV2
struct ArcButtonIndex {
  @Builder
  ArcButtonBuild() {
    Column(){
      Text('ArcButtonBuild')
        .fontSize(28)
      ArcButton({ options: new ArcButtonOptions
        ({
          label: 'ButtonTop',
          status: ArcButtonStatus.NORMAL,
          position: ArcButtonPosition.TOP_EDGE,
          styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
          fontSize: new LengthMetrics(15, LengthUnit.FP),
          shadowEnabled: true
        })
      })
    }
  }

  @Local allPropertiesOptions: ArcButtonOptions = new ArcButtonOptions({});

  aboutToAppear() {
    // Create ArcButtonOptions with all properties
    this.allPropertiesOptions = new ArcButtonOptions({
      position: ArcButtonPosition.BOTTOM_EDGE,
      styleMode: ArcButtonStyleMode.CUSTOM,
      status: ArcButtonStatus.NORMAL,
      label: 'ArcButton All Properties' as ResourceStr,
      backgroundBlurStyle: BlurStyle.Thin,
      backgroundColor: ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 1.0, 1.0, 0.0, 1),
      shadowColor: ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0.28, 0.0, 0.51, 1),
      shadowEnabled: true,
      fontSize: new LengthMetrics(16, LengthUnit.FP),
      fontColor: ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0.65, 0.16, 0.16, 1),
      pressedFontColor: ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0.65, 0.16, 0.16, 1),
      fontStyle: FontStyle.Normal,
      fontFamily: 'Arial',
      fontMargin: {
        start: LengthMetrics.vp(24),
        top: LengthMetrics.vp(10),
        end: LengthMetrics.vp(24),
        bottom: LengthMetrics.vp(16)
      } as LocalizedMargin,
      onTouch: (event: TouchEvent) => {
        console.info('ArcButton onTouch event: ' + JSON.stringify(event));
      },
      onClick: (event: ClickEvent) => {
        console.info('ArcButton onClick event: ' + JSON.stringify(event));
      }
    })
  }

  build() {
    Column() {
      Text('ArcButton')
        .fontSize(36)
        .width('300')
        .height('100')
      
      ArcButton({ options: this.allPropertiesOptions })
        .key('arcButtonAllProperties')
        .id('arcButtonAllProperties')

    }.width('100%')
    .height('100%')
  }
}