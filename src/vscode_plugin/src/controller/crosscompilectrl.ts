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

import { InputBoxValidationSeverity, Uri } from "vscode";
import { CrossCompileMod } from "../model/crosscompilemod";
import { IModel } from "../model/imodel";
import { CrossCompileView } from "../view/crosscompileview";
import { Logger } from "../common/log";
import { IView } from "../view/iview";
import { IController } from "./icontroller";
import { EVENT_ERROR } from "../common/eventtype";

export class CrossCompileCtrl extends IController {
  name: string;
  view: IView;
  model: IModel;
  uri: Uri;
  constructor(uri: Uri) {
    super();
    this.name = 'crosscompilectrl';
    this.model = CrossCompileMod.getInstance();
    this.view = new CrossCompileView;
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
      Logger.getInstance().error(errmsg);
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