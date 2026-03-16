'use static';
/**
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ButtonTest from './ButtonTest/Button.test';
import ArcButtonTest from './ArcButtonTest/ArcButton.test'; // 有问题先不提交
import ArcSliderTest from './ArcSliderTest/ArcSlider.test'; // 有问题先不提交
import DownloadFileButtonTest from './DownloadFileButtonTest/DownloadFileButton.test';  // 已提交
import PopupTest from './PopupTest/Popup.test'; // 已提交
import PromptActionTest from './PromptActionTest/PromptAction.test';  // 已提交
import SheetTest from './SheetTest/Sheet.test'; // 已提交
import PopupCommonTest from './CommonTest/PopupCommon.test';  // 已提交
import PopupOptionsTest from './CommonTest/PopupOptions.test';  // 已提交
import CustomPopupOptionsTest from './CommonTest/CustomPopupOptions.test';  // 已提交
import ContextMenuOptionsTest from './CommonTest/ContextMenuOptions.test';  //已提交
import DialogDisplayModeTest from './DialogDisplayModeTest/DialogDisplayMode.test'; // 有问题先不提交
import SliderTest from './SliderTest/Slider.test'; //已提交
import SliderCustomContentOptionsTest from './SliderTest/SliderCustomContentOptions.test'; //已提交
import SelectTest from './SelectTest/Select.test'; //已提交
import SaveButtonTest from './SaveButtonTest/SaveButton.test'; //已提交
import MenuTest from './MenuTest/Menu.test'; //已提交
import MenuKeyboardAvoidModeTest from './CommonTest/MenuKeyboardAvoidMode.test'; //已提交
import HoverScaleInterruptionTest from './CommonTest/HoverScaleInterruption.test'; //已提交
import AddFormMenuItemTest from './AddFormMenuItemTest/AddFormMenuItem.test'; // 有问题先不提交
import GetStateTest from './GetStateTest/GetState.test'; //已提交
import ArcButtonEnumTest from './CommonTest/ArcButtonEnum.test'; //已提交
import ArcSliderEnumTest from './CommonTest/ArcSliderEnum.test'; //已提交
import TipsOptionsTest from './TipsOptionsTest/TipsOptions.test';

export default function testsuite() {
  // DownloadFileButtonTest();
  // PopupTest();
  // PromptActionTest();
  // SheetTest();
  // PopupCommonTest();
  // PopupOptionsTest();
  // CustomPopupOptionsTest();
  // ContextMenuOptionsTest();
  // SliderTest();
  // SliderCustomContentOptionsTest();
  // SelectTest();
  // SaveButtonTest();
  // MenuTest();
  // MenuKeyboardAvoidModeTest();
  // HoverScaleInterruptionTest();
  // GetStateTest();
  // ArcButtonEnumTest();
  // ArcSliderEnumTest();
  TipsOptionsTest();
}