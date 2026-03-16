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
  Component,
  Blank,
  Color,
  Text
} from '@ohos.arkui.component';
import { AppStorage, State } from '@ohos.arkui.stateManagement';
import { Router } from '@ohos.arkui.UIContext';
import {
  DownloadFileButton,
  DownloadIconStyle,
  DownloadDescription,
  DownloadLayoutDirection,
  DownloadContentOptions,
  DownloadStyleOptions
} from '@ohos.arkui.advanced.DownloadFileButton';

@Entry
@Component
struct DownloadFileButtonIndex {
  @State fullFilledContentOptions: DownloadContentOptions = {
    icon: DownloadIconStyle.FULL_FILLED,
    text: DownloadDescription.DOWNLOAD
  } as DownloadContentOptions;

  @State fullFilledStyleOptions: DownloadStyleOptions = {
    iconSize: '28vp',
    layoutDirection: DownloadLayoutDirection.HORIZONTAL,
    fontSize: '24fp',
    fontColor: Color.Black,
    iconColor: '#ffffffff',
    textIconSpace: '4vp'
  } as DownloadStyleOptions;

  @State linesContentOptions: DownloadContentOptions = {
    icon: DownloadIconStyle.LINES,
    text: DownloadDescription.DOWNLOAD
  } as DownloadContentOptions;

  @State linesStyleOptions: DownloadStyleOptions = {
    iconSize: '16vp',
    layoutDirection: DownloadLayoutDirection.HORIZONTAL,
    fontSize: '16fp',
    fontColor: '#ffffffff',
    iconColor: '#ffffffff',
    textIconSpace: '4vp'
  } as DownloadStyleOptions;

  aboutToAppear() {
    try {
      let router = this.getUIContext().getRouter();
      AppStorage.setOrCreate<Router>('router', router);
    } catch (error) {
      console.error('DownloadFileButtonIndex aboutToAppear error: ' + error);
    }
  }

  build() {
    Column() {
      Text('DownloadFileButton')
        .fontSize(30)
        .margin({ top:40, bottom:40 })
      DownloadFileButton({
        contentOptions: this.fullFilledContentOptions,
        styleOptions: this.fullFilledStyleOptions
      })
        .width('100')
        .height(40)
        .key('downloadFileButtonFullFilled')
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
  }
}
