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

export default function ButtonTest(): void {
  describe('ButtonTest', (): void => {
    beforeAll(async (): Promise<void> => {
      console.info('TextLineSpacingTest beforeAll start');
      await UtilsTest.startAbility('com.arkui.ace.dialog.download.static', 'EntryAbility');
    })
    beforeEach(() => {
      console.info('TextLineSpacingTest beforeEach start');
      let options: router.RouterOptions = {
        url: 'MainAbility/pages/Button/ButtonIndex',
      }
      try {
        const routerInstance = AppStorage.get<Router>('router') as Router
        routerInstance.clear();
        let pages = routerInstance.getState();
        console.info('get TextLineSpacingTest state pages: ' + JSON.stringify(pages));
        if (!('TextLineSpacing' == pages.name)) {
          console.info('get TextLineSpacingTest state pages.name: ' + JSON.stringify(pages.name));
          routerInstance.replaceUrl(options);
        }
      } catch (err) {
        console.error('push TextLineSpacingTest page error: ' + err);
        expect().assertFail();
      }
    })
    afterEach(() => {
    })
    afterAll(() => {
    })

    /**
     * @tc.number UiTest_001
     * @tc.name shortText
     * @tc.desc Test short text display in button example
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('shortText', Level.LEVEL1, (done: () => void) => {
      console.info('uitest: shortText begin');
      let driver = Driver.create();
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('short1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('short2'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('short3'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('short4'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('short5'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('short6'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('left'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Left');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('left1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Left');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('right'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Right');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('right1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Right');
      done();
    })
    /**
     * @tc.number UiTest_002
     * @tc.name longText
     * @tc.desc Test long text display in button with height adaptation mode prioritizing maxLines example
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('longText', Level.LEVEL1, (done: () => void) => {
      console.info('uitest: longText begin');
      let driver = Driver.create();
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longline1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longline2'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longline3'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longline4'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longline5'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longline6'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longlineleft'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Left');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longlineleft1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Left');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longlineright'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Right');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longlineright1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Right');
      done();
    })

    /**
     * @tc.number UiTest_003
     * @tc.name longText1
     * @tc.desc Test long text display in button example
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('longText1', Level.LEVEL1, (done: () => void) => {
      console.info('uitest: longText1 begin');
      let driver = Driver.create();
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long2'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long3'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long4'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long5'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long6'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long7'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('long8'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longleft'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Left');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longleft1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Left');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longright'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Right');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('longright1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Right');
      done();
    })

    /**
     * @tc.number UiTest_004
     * @tc.name modifier
     * @tc.desc Test long text with modifier display in button example
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('modifier', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('uitest: modifier begin');
      let driver = Driver.create();
      let buttonComponent = await driver.findComponent(ON.text('modifier', MatchPattern.CONTAINS));
      await (buttonComponent?.click() as Promise<void>);
      await Utils.sleep(1000);
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier2'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier3'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier4'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      done();

    })

    /**
     * @tc.number UiTest_005
     * @tc.name modifier1
     * @tc.desc Test long text with modifier and height adaptation mode prioritizing maxLines display in button example
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('modifier1', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('uitest: modifier1 begin');
      let driver = Driver.create();
      let buttonComponent = await driver.findComponent(ON.text('modifier', MatchPattern.CONTAINS));
      expect(buttonComponent === null).assertFalse();
      await (buttonComponent?.click() as Promise<void>);
      await Utils.sleep(1000);
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier11'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier22'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier33'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifier44'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      done();
    })

    /**
     * @tc.number UiTest_006
     * @tc.name modifierDiff
     * @tc.desc Test long text with modifier and different alignment modes display in button example
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('modifierDiff', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('uitest: modifierDiff begin');
      let driver = Driver.create();
      let buttonComponent = await driver.findComponent(ON.text('modifier', MatchPattern.CONTAINS));
      expect(buttonComponent === null).assertFalse();
      await (buttonComponent?.click() as Promise<void>);
      await Utils.sleep(1000);
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifierDiff1'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Center');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifierDiff2'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Start');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifierDiff3'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.End');
      expect(JSON.parseJsonElement(JSON.parseJsonElement(inspector.getInspectorByKey('modifierDiff4'))
        .getElement('$attrs')
        .getString('labelStyle')).getString('textAlign'))
        .assertEqual('TextAlign.Justify');
      done();
    })
  })
}