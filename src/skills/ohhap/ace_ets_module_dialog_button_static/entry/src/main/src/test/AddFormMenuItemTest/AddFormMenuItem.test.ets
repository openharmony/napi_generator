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

import { describe, it, expect, beforeAll, afterEach, Level, beforeEach } from '../../../../hypium/index';
import { abilityDelegatorRegistry, Driver, ON, MatchPattern } from '@kit.TestKit';
import router from '@ohos.router';
import Utils from '../../../ets/MainAbility/common/Utils';
import CommonFunc from '../../../ets/MainAbility/common/Common';
import { Router } from '@ohos.arkui.UIContext';
import { AppStorage } from '@ohos.arkui.stateManagement';
import { UtilsTest } from '../Util.test';
import inspector from '@ohos.arkui.inspector';

const SLEEP_TIME = 1000;
const LOG_CHUNK_SIZE = 500;

function logLongString(tag: string, longStr: string): void {
  let len = longStr.length;
  let part = 1;
  for (let i = 0; i < len; i += LOG_CHUNK_SIZE) {
    let end = i + LOG_CHUNK_SIZE;
    if (end > len) {
      end = len;
    }
    console.info(`${tag} [${part}] ${longStr.substring(i, end)}`);
    part++;
  }
}

export default function AddFormMenuItemTest() {
  describe('AddFormMenuItemTest', () => {
    beforeAll(async (): Promise<void> => {
      console.info("AddFormMenuItemTest beforeAll start");
      await UtilsTest.startAbility("com.arkui.ace.dialog.select.static", "EntryAbility");
    });

    beforeEach(async (): Promise<void> => {
      console.info("AddFormMenuItemTest beforeEach start");
      let options: router.RouterOptions = {
        url: 'MainAbility/pages/AddFormMenuItem/AddFormMenuItem',
      };
      try {
        const routerInstance = AppStorage.get<Router>("router") as Router;
        routerInstance.clear();
        let pages = routerInstance.getState();
        console.info("AddFormMenuItemTest state pages: " + JSON.stringify(pages));
        console.info("AddFormMenuItemTest state pages.name: " + pages.name);
        if (pages.name !== "Index") {
          routerInstance.replaceUrl(options);
        }
        // Wait for page to load
        await Utils.sleep(500);
      } catch (err) {
        console.error("AddFormMenuItemTest replaceUrl error: " + err);
        expect().assertFail();
      }
    });

    afterEach(async () => {
      await Utils.sleep(SLEEP_TIME);
      console.info("AddFormMenuItemTest after each called");
    });

    /**
     * @tc.number AddFormMenuItemTest_001
     * @tc.name addFormMenuItemOptions
     * @tc.desc Test AddFormMenuItem options property, long press image to show menu, read from component and print component tree
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('addFormMenuItemOptions', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('AddFormMenuItemTest execute: addFormMenuItemOptions START');
      try {
        await CommonFunc.sleep(SLEEP_TIME);
        const driver = Driver.create();
        
        // Find Image component and long press to show context menu
        const image = await driver.findComponent(ON.id('AddFormMenuItemImage'));
        console.info('AddFormMenuItemTest: addFormMenuItemOptions - found image component');
        expect(!!image).assertEqual(true);
        if (image) {
          await image.longClick();
          await Utils.sleep(1500);
          console.info('AddFormMenuItemTest: addFormMenuItemOptions - long clicked image, waiting for menu');
        }
        
        // Find Menu component
        const menu = await driver.findComponent(ON.id('addFormMenuItemMenu'));
        console.info('AddFormMenuItemTest: addFormMenuItemOptions - found menu component');
        if (menu !== undefined) {
          let menuNode = JSON.parseJsonElement(inspector.getInspectorByKey('addFormMenuItemMenu'));
          console.info('AddFormMenuItemTest: addFormMenuItemOptions - got menu node from inspector');
          logLongString('AddFormMenuItemTest: addFormMenuItemOptions menu node =', JSON.stringifyJsonElement(menuNode));
          expect(menuNode != null).assertTrue();
          
          // Try to find AddFormMenuItem in the menu node tree
          // The options property should be in the AddFormMenuItem node
        }
        
        await driver.pressBack();
        await Utils.sleep(200);
        console.info('AddFormMenuItemTest execute: addFormMenuItemOptions END');
        done();
      } catch (error) {
        console.error('AddFormMenuItemTest execute: addFormMenuItemOptions error:' + error);
        expect().assertFail();
        done();
      }
    });

    /**
     * @tc.number AddFormMenuItemTest_002
     * @tc.name addFormMenuItemFormBindingData
     * @tc.desc Test AddFormMenuItem formBindingData property, long press image to show menu, read from component and print component tree
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('addFormMenuItemFormBindingData', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('AddFormMenuItemTest execute: addFormMenuItemFormBindingData START');
      try {
        await CommonFunc.sleep(SLEEP_TIME);
        const driver = Driver.create();
        
        const image = await driver.findComponent(ON.id('AddFormMenuItemImage'));
        console.info('AddFormMenuItemTest: addFormMenuItemFormBindingData - found image component');
        expect(!!image).assertEqual(true);
        if (image) {
          await image.longClick();
          await Utils.sleep(1500);
          console.info('AddFormMenuItemTest: addFormMenuItemFormBindingData - long clicked image, waiting for menu');
        }
        
        const menu = await driver.findComponent(ON.id('addFormMenuItemMenu'));
        console.info('AddFormMenuItemTest: addFormMenuItemFormBindingData - found menu component');
        if (menu !== undefined) {
          let menuNode = JSON.parseJsonElement(inspector.getInspectorByKey('addFormMenuItemMenu'));
          console.info('AddFormMenuItemTest: addFormMenuItemFormBindingData - got menu node from inspector');
          logLongString('AddFormMenuItemTest: addFormMenuItemFormBindingData menu node =', JSON.stringifyJsonElement(menuNode));
          expect(menuNode != null).assertTrue();
        }
        
        await driver.pressBack();
        await Utils.sleep(200);
        console.info('AddFormMenuItemTest execute: addFormMenuItemFormBindingData END');
        done();
      } catch (error) {
        console.error('AddFormMenuItemTest execute: addFormMenuItemFormBindingData error:' + error);
        expect().assertFail();
        done();
      }
    });

    /**
     * @tc.number AddFormMenuItemTest_003
     * @tc.name addFormMenuItemCallback
     * @tc.desc Test AddFormMenuItem callback property, long press image to show menu, click menu item to trigger callback
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('addFormMenuItemCallback', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('AddFormMenuItemTest execute: addFormMenuItemCallback START');
      try {
        await CommonFunc.sleep(SLEEP_TIME);
        const driver = Driver.create();
        
        const image = await driver.findComponent(ON.id('AddFormMenuItemImage'));
        console.info('AddFormMenuItemTest: addFormMenuItemCallback - found image component');
        expect(!!image).assertEqual(true);
        if (image) {
          await image.longClick();
          await Utils.sleep(1500);
          console.info('AddFormMenuItemTest: addFormMenuItemCallback - long clicked image, waiting for menu');
        }
        
        // Try to find and click the AddFormMenuItem
        // The callback will be triggered when clicking the menu item
        const menuItem = await driver.findComponent(ON.text('添加到桌面', MatchPattern.EQUALS));
        console.info('AddFormMenuItemTest: addFormMenuItemCallback - found menu item component');
        if (menuItem !== undefined) {
          let menuNode = JSON.parseJsonElement(inspector.getInspectorByKey('addFormMenuItemMenu'));
          console.info('AddFormMenuItemTest: addFormMenuItemCallback - got menu node from inspector');
          logLongString('AddFormMenuItemTest: addFormMenuItemCallback menu node =', JSON.stringifyJsonElement(menuNode));
          // Click menu item to trigger callback
          await (menuItem?.click() as Promise<void>);
          console.info('AddFormMenuItemTest: addFormMenuItemCallback - clicked menu item, callback should be triggered');
          await Utils.sleep(500);
        }
        
        await driver.pressBack();
        await Utils.sleep(200);
        console.info('AddFormMenuItemTest execute: addFormMenuItemCallback END');
        done();
      } catch (error) {
        console.error('AddFormMenuItemTest execute: addFormMenuItemCallback error:' + error);
        expect().assertFail();
        done();
      }
    });

    /**
     * @tc.number AddFormMenuItemTest_004
     * @tc.name addFormMenuItemStyle
     * @tc.desc Test AddFormMenuItem style property, long press image to show menu, read from component and print component tree
     * @tc.type   FUNCTION
     * @tc.size   MEDIUMTEST
     * @tc.level  LEVEL1
     */
    it('addFormMenuItemStyle', Level.LEVEL1, async (done: () => void): Promise<void> => {
      console.info('AddFormMenuItemTest execute: addFormMenuItemStyle START');
      try {
        await CommonFunc.sleep(SLEEP_TIME);
        const driver = Driver.create();
        
        const image = await driver.findComponent(ON.id('AddFormMenuItemImage'));
        console.info('AddFormMenuItemTest: addFormMenuItemStyle - found image component');
        expect(!!image).assertEqual(true);
        if (image) {
          await image.longClick();
          await Utils.sleep(1500);
          console.info('AddFormMenuItemTest: addFormMenuItemStyle - long clicked image, waiting for menu');
        }
        
        const menu = await driver.findComponent(ON.id('addFormMenuItemMenu'));
        console.info('AddFormMenuItemTest: addFormMenuItemStyle - found menu component');
        if (menu !== undefined) {
          let menuNode = JSON.parseJsonElement(inspector.getInspectorByKey('addFormMenuItemMenu'));
          console.info('AddFormMenuItemTest: addFormMenuItemStyle - got menu node from inspector');
          logLongString('AddFormMenuItemTest: addFormMenuItemStyle menu node =', JSON.stringifyJsonElement(menuNode));
          expect(menuNode != null).assertTrue();
        }
        
        await driver.pressBack();
        await Utils.sleep(200);
        console.info('AddFormMenuItemTest execute: addFormMenuItemStyle END');
        done();
      } catch (error) {
        console.error('AddFormMenuItemTest execute: addFormMenuItemStyle error:' + error);
        expect().assertFail();
        done();
      }
    });
  });
}
