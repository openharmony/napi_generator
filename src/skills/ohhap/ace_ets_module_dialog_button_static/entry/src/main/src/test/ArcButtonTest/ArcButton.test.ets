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

import { hilog } from '@kit.PerformanceAnalysisKit';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect, Level } from '../../../../hypium/index';
import { UIAbility, Want } from '@kit.AbilityKit';
import { abilityDelegatorRegistry, Driver, ON, MouseButton, MatchPattern, UiDirection } from '@kit.TestKit';
import inspector from '@ohos.arkui.inspector';
import router from '@ohos.router';
import { Router } from '@ohos.arkui.UIContext';
import { AppStorage } from '@ohos.arkui.stateManagement';
import { UtilsTest } from '../Util.test';
import Utils from '../../../ets/MainAbility/common/Utils';

let want: Want;
const bundleName = abilityDelegatorRegistry.getArguments().bundleName;
const delegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
let abilityDelegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();

const ARC_BUTTON_POSITION_BOTTOM_EDGE = 1;

export default function ArcButtonTest() {
  describe('ArcButtonTest', () => {
    beforeAll(async (): Promise<void> => {
      console.info('ArcButtonTest beforeAll start');
      await UtilsTest.startAbility('com.arkui.ace.dialog.download.static', 'EntryAbility');
    })
    beforeEach(() => {
      console.info('ArcButtonTest beforeEach start');
      let options: router.RouterOptions = {
        url: 'MainAbility/pages/ArcButton/ArcButtonIndex',
      }
      try {
        const routerInstance = AppStorage.get<Router>('router') as Router
        routerInstance.clear();
        let pages = routerInstance.getState();
        console.info('get ArcButtonTest state pages: ' + JSON.stringify(pages));
        if (!('TextLineSpacing' == pages.name)) {
          console.info('get ArcButtonTest state pages.name: ' + JSON.stringify(pages.name));
          routerInstance.replaceUrl(options);
        }
      } catch (err) {
        console.error('push ArcButtonTest page error: ' + err);
        expect().assertFail();
      }
    })

    afterEach(async () => {
      await Utils.sleep(1000);
      console.info("ArcButtonTest after each called");
    });

    /**
     * @tc.number ArcButtonTest_001
     * @tc.name arcButtonPositionBottomEdge
     * @tc.desc Test ArcButtonPosition BOTTOM_EDGE enum value, verify arc button is bottom edge arc
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('arcButtonPositionBottomEdge', Level.LEVEL1, (done: () => void) => {
      console.info('ArcButtonTest: arcButtonPositionBottomEdge begin');
      let driver = Driver.create();
      let node = JSON.parseJsonElement(inspector.getInspectorByKey('arcButtonBottomEdge'));
      let position = node.getElement('$attrs').getString('position');
      expect(position).assertEqual(ARC_BUTTON_POSITION_BOTTOM_EDGE);
      done();
    });
  });
}
