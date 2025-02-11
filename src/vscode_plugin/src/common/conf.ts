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

const vscode = require("vscode");

export function getOutputPath(): string {
  const config = vscode.workspace.getConfiguration('napiExtension');
  const outSetting = config.get("outSetting");
  return outSetting;
}

export function getReportConf(): string {
  const config = vscode.workspace.getConfiguration('testReport');
  const outSetting = config.get("canOutput");
  return outSetting;
}

export enum GEN_TYPE {
  GEN_REPLACE = 1,
  GEN_APPEND,
  GEN_NEW
}

export function getGenerateConf(): number {
  const config = vscode.workspace.getConfiguration('genProject');
  const outSetting = config.get("policy");
  return outSetting;
}

export function getLogPath(): string {
  const config = vscode.workspace.getConfiguration('logger');
  const outSetting = config.get("filePath");
  return outSetting;
}

export function getLogName(): string {
  const config = vscode.workspace.getConfiguration('logger');
  const outSetting = config.get("fileName");
  return outSetting;
}