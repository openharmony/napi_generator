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

import { Uri } from "vscode";
import { H2dtsMod } from "../model/h2dtsmod";
import { IModel } from "../model/imodel";
import { H2dtsView } from "../view/h2dtsview";

import { IView } from "../view/iview";
import { IController } from "./icontroller";
import { EVENT_ERROR } from "../common/eventtype";

export class H2dtsCtrl extends IController {
  name: string;
  view: IView;
  model: IModel;
  uri: Uri;
  constructor(uri: Uri) {
    super();
    this.name = 'h2dtsctrl';
    this.model = H2dtsMod.getInstance();
    this.view = new H2dtsView;
    this.uri = uri;
  }

  public init(): void {
    if (this.uri && this.uri.fsPath) {
      this.view.init(this);
      this.model.init(this.uri);
      this.view.showProgress();
    }
  }

  public start(): void {
    try {
      this.model.doStart();
    } catch(e) {
      let errmsg = "h2dts start error: " + JSON.stringify(e)
      console.error(errmsg);
      this.view.showMsg(EVENT_ERROR, errmsg);
    }  
  }

  public stop(): void {
    throw new Error("Method not implemented.");
  }

  public pause(): void {
    throw new Error("Method not implemented.");
  }

  public resume(): void {
    throw new Error("Method not implemented.");
  } 
}