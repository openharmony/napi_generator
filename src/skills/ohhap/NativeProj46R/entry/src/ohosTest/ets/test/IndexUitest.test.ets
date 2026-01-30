/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import { hilog } from '@kit.PerformanceAnalysisKit';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';
import { abilityDelegatorRegistry, Driver, ON } from '@kit.TestKit';
import { UIAbility, Want } from '@kit.AbilityKit';
import { HILOG_DOMAIN, TEST_FILTER, UI_DELAY_MS, UI_START_DELAY_MS } from './constant';

const delegator = abilityDelegatorRegistry.getAbilityDelegator();
const bundleName = abilityDelegatorRegistry.getArguments().bundleName;

function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export default function indexUitestTest() {
  describe('IndexUitestTest', () => {
    // Defines a test suite. Two parameters are supported: test suite name and test suite function.
    beforeAll(async () => {
      // Presets an action, which is performed only once before all test cases of the test suite start.
      // moduleName is required when starting ability from test module (entry_test) to app module (entry).
      const want: Want = {
        bundleName,
        moduleName: 'entry',
        abilityName: 'EntryAbility'
      };
      await delegator.startAbility(want);
      await sleep(UI_START_DELAY_MS);
    })
    beforeEach(async () => {
      // Presets an action, which is performed before each unit test case starts.
      await sleep(200);
    })
    afterEach(() => {
      // Presets a clear action, which is performed after each unit test case ends.
    })
    afterAll(() => {
      // Presets a clear action, which is performed after all test cases of the test suite end.
    })

    // ========== 页面加载 ==========
    it('test_page_load_top_ability', TEST_FILTER, async (done: Function) => {
      // Test case: verify current top ability is EntryAbility.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_page_load_top_ability');
      const ability: UIAbility = await delegator.getCurrentTopAbility();
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      expect(ability.context.abilityInfo.name).assertEqual('EntryAbility');
      done();
    })


    // ========== 布局控件：Row ==========
    it('test_layout_Row_exists', TEST_FILTER, async (done: Function) => {
      // Test case: verify Row layout component exists on page.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_layout_Row_exists');
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      await driver.assertComponentExist(ON.type('Row'));
      done();
    })


    // ========== 布局控件：Column ==========
    it('test_layout_Column_exists', TEST_FILTER, async (done: Function) => {
      // Test case: verify Column layout component exists on page.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_layout_Column_exists');
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      await driver.assertComponentExist(ON.type('Column'));
      done();
    })


    // ========== 文本控件：Text 初始文案 ==========

    it('test_component_Text_exists_0_initial', TEST_FILTER, async (done: Function) => {
      // Test case: verify Text with initial content exists.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_component_Text_exists_0_initial');
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      await driver.assertComponentExist(ON.text('Hello World'));
      done();
    })


    // ========== 文本控件：Text 点击后文案变化 ==========
    it('test_click_Text_then_shows_message', TEST_FILTER, async (done: Function) => {
      // Test case: click Text then verify content changes.
      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_click_Text_then_shows_message');
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      const comp = await driver.findComponent(ON.text('Hello World'));
      await comp.click();
      await driver.delayMs(UI_DELAY_MS);
      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
      await driver.assertComponentExist(ON.text('Welcome'));
      done();
    })

  });
}