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

import router from '@ohos.router';
import {
  Entry,
  Column,
  Component,
  Builder,
  Button,
  Text,
  FlexAlign,
  PopupOptions
} from '@ohos.arkui.component'
import { AvoidanceMode } from '@kit.ArkUI';
import { AppStorage, State } from '@ohos.arkui.stateManagement';
import { Router } from '@ohos.arkui.UIContext';

@Entry
@Component
struct PopupOptionsIndex {
  @State showBindPopup: boolean = false;
  @State onWillAppearResult: string = 'init';
  @State onDidAppearResult: string = 'init';
  @State onWillDisappearResult: string = 'init';
  @State onDidDisappearResult: string = 'init';
  @State openPopupResult: string = 'init';

  @Builder
  buildPopupContent() {
    Column() {
      Text('Popup Content')
        .fontSize(24)
        .key('popupContentNew')
    }
    .width(200)
    .height(100)
    .padding(10)
  }

  aboutToAppear() {
    try {
      let routerInstance = this.getUIContext().getRouter();
      AppStorage.setOrCreate<Router>('router', routerInstance);
    } catch (error) {
      console.log('error ' + error);
    }
  }

  build() {
    Column() {
      Button('Open Popup')
        .id('btnOpenPopupNew')
        .fontSize(20)
        .margin({ top: 20, bottom: 20 })
        .bindPopup(this.showBindPopup, {
          message: 'PopupOptions',
          avoidTarget: AvoidanceMode.AVOID_AROUND_TARGET,
          outlineWidth: 2,
          borderWidth: 3,
          onWillAppear: () => {
            this.onWillAppearResult = 'onWillAppear_called';
            console.info('PopupOptions onWillAppear called');
          },
          onDidAppear: () => {
            this.onDidAppearResult = 'onDidAppear_called';
            this.openPopupResult = 'openPopup';
            console.info('PopupOptions onDidAppear called');
          },
          onWillDisappear: () => {
            this.onWillDisappearResult = 'onWillDisappear_called';
            console.info('PopupOptions onWillDisappear called');
          },
          onDidDisappear: () => {
            this.onDidDisappearResult = 'onDidDisappear_called';
            console.info('PopupOptions onDidDisappear called');
          }
        } as PopupOptions)
        .onClick(() => {
          this.showBindPopup = !this.showBindPopup;
        })

      Text(this.openPopupResult)
        .key('openPopupResultNew')
        .fontSize(16)
        .margin({ bottom: 10 })

      Text(this.onWillAppearResult)
        .key('onWillAppearResultNew')
        .fontSize(16)
        .margin({ bottom: 10 })

      Text(this.onDidAppearResult)
        .key('onDidAppearResultNew')
        .fontSize(16)
        .margin({ bottom: 10 })

      Text(this.onWillDisappearResult)
        .key('onWillDisappearResultNew')
        .fontSize(16)
        .margin({ bottom: 10 })

      Text(this.onDidDisappearResult)
        .key('onDidDisappearResultNew')
        .fontSize(16)
        .margin({ bottom: 10 })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
