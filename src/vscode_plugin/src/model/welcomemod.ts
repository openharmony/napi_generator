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
import * as vscode from 'vscode';
import * as path from 'path';
import { IModel } from "./imodel";
import { parseHeaderFile } from '../parse/parsec';
import { GenInfo } from '../gen/datatype';
import { genDtsFile } from '../gen/gendts';
import { GEN_COMPLETE, HDF_FRAMEWORK, NAPI_FRAMEWORK, PARSE_COMPLETE, SA_FRAMEWORK } from '../common/constants';

import {
  EVENT_ERROR,
  EVENT_INFORMATION,
  EVENT_PROGRESS,
  EVENT_WARNING
} from '../common/eventtype';
import { generateFuncTestCase } from '../gen/gentest';
import { H2hdfMod } from './h2hdfmod';
import { H2saMod } from './h2samod';
import { Dts2cppMod } from './dts2cppmod';

export class WelcomeMod extends IModel {
  name: string;
  versionTag: string = '4.1';
  serviceId: string = '19000';
  genType: string = HDF_FRAMEWORK;

  private static instance: WelcomeMod;
  constructor() {
    super();
    this.name = 'welcomemod';
  }

  static getInstance(): IModel {
    if (!WelcomeMod.instance) {
      WelcomeMod.instance = new WelcomeMod();
    }
    return WelcomeMod.instance;
  }

  setVersionTag(version: string) {
    this.versionTag = version;
  }

  setServiceId(id: string) {
    this.serviceId = id;
  }

  setGenType(value: string) {
    this.genType = value;
  }

  init(uri: vscode.Uri): void {
    this.uri = uri;
  }

  async doStart(): Promise<void> {
    try {
      if (this.uri) {
        switch (this.genType) {
          case NAPI_FRAMEWORK:
            {
              let dts2cppmod = Dts2cppMod.getInstance() as Dts2cppMod;
              dts2cppmod.init(this.uri);
              dts2cppmod.callbacks = this.callbacks;
              dts2cppmod.doStart();
            }
            // generateDtscpp(this.uri.fsPath);
            break;
          case SA_FRAMEWORK:
            {
              let samod = H2saMod.getInstance() as H2saMod;
              samod.init(this.uri);
              samod.callbacks = this.callbacks;
              samod.setServiceId(this.serviceId);
              samod.setVersionTag(this.versionTag);
              samod.doStart();
            }
            // generateSa(this.uri.fsPath, this.versionTag, this.serviceId);
            break;
          case HDF_FRAMEWORK:
            let hdfmod = H2hdfMod.getInstance() as H2hdfMod;
              hdfmod.init(this.uri);
              hdfmod.callbacks = this.callbacks;
              hdfmod.setServiceId(this.serviceId);
              hdfmod.setVersionTag(this.versionTag);
              hdfmod.doStart();
            // generateHdf(this.uri.fsPath, this.versionTag);
            break;
          default:
            console.error('unknown gen type: ', this.genType);
            break;
        }
      } else {
        console.error('parse header file error with undefine uri.');
      }
    } catch (e) {
      let errmsg = 'parse header file error: ' + JSON.stringify(e);
      console.error(errmsg);
      this.emmitEventForKey(EVENT_ERROR, -1, errmsg);
    }
  }

  async doStop(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async doPause(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async doResume(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}