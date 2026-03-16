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

import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect, Level } from '../../../../hypium/index';
import { Want } from '@kit.AbilityKit';
import { abilityDelegatorRegistry, Driver } from '@kit.TestKit';
import inspector from '@ohos.arkui.inspector';
import router from '@ohos.router';
import { Router } from '@ohos.arkui.UIContext';
import { AppStorage } from '@ohos.arkui.stateManagement';
import { UtilsTest } from '../Util.test';

let want: Want;
const bundleName = abilityDelegatorRegistry.getArguments().bundleName;
const delegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
let abilityDelegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();

/** ArcSliderPosition.LEFT 枚举值 */
const ARC_SLIDER_POSITION_LEFT = 0;

export default function ArcSliderTest() {
  describe('ArcSliderTest', () => {
    beforeAll(async (): Promise<void> => {
      console.info('ArcSliderTest beforeAll start');
      await UtilsTest.startAbility('com.arkui.ace.dialog.download.static', 'EntryAbility');
    });

    beforeEach(() => {
      console.info('ArcSliderTest beforeEach start');
      let options: router.RouterOptions = {
        url: 'MainAbility/pages/ArcSlider/ArcSliderIndex',
      };
      try {
        const routerInstance = AppStorage.get<Router>('router') as Router;
        routerInstance.clear();
        let pages = routerInstance.getState();
        console.info('ArcSliderTest state pages: ' + JSON.stringify(pages));
        if (pages.name !== 'ArcSliderIndex') {
          routerInstance.replaceUrl(options);
        }
      } catch (err) {
        console.error('ArcSliderTest replaceUrl error: ' + err);
        expect().assertFail();
      }
    });

    afterEach(() => {
    });

    afterAll(() => {
    });

    /**
     * @tc.number ArcSliderTest_001
     * @tc.name arcSliderPositionLeft
     * @tc.desc 测试 ArcSliderPosition 的 LEFT 枚举值，验证弧形滑块为左侧弧形
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('arcSliderPositionLeft', Level.LEVEL1, (done: () => void) => {
      console.info('ArcSliderTest: arcSliderPositionLeft begin');
      let driver = Driver.create();
      let node = JSON.parseJsonElement(inspector.getInspectorByKey('arcSliderLeft'));
      let position = node.getElement('$attrs').getString('position');
      expect(position).assertEqual(ARC_SLIDER_POSITION_LEFT);
      done();
    });
  });
}
