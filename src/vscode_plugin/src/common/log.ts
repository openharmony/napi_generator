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
import * as fs from 'fs';
import * as path from 'path';
import { getLogName, getLogPath } from './conf';

const DEBUG_MSG = '[debug]';
const INFO_MSG = '[info]';
const WARN_MSG = '[warn]';
const ERROR_MSG = '[error]';

export class Logger {
  private logFilePath: string;
  private maxFileSize: number = 1024 * 1024; // 1MB
  private static instance: Logger;

  constructor() {
    let logDirectory: string = getLogPath();
    let fileName: string = getLogName();
    this.logFilePath = path.join(logDirectory, fileName);
    this.initLogFile();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private initLogFile(): void {
    if (!fs.existsSync(this.logFilePath)) {
        fs.writeFileSync(this.logFilePath, '');
    }
  }

  public debug(message: string) {
    console.log(message);
    this.log(DEBUG_MSG + message);
  }

  public info(message: string) {
    Logger.getInstance().info(message);
    this.log(INFO_MSG + message);
  }

  public error(message: string) {
    Logger.getInstance().error(message);
    this.log(ERROR_MSG + message);
  }

  public warn(message: string) {
    Logger.getInstance().warn(message);
    this.log(WARN_MSG + message);
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} -${message}\n`;
    this.appendLog(logMessage);
  }

  private appendLog(message: string): void {
    // Check if the current log file exceeds the max size
    const stats = fs.statSync(this.logFilePath);
    if (stats.size + Buffer.byteLength(message) > this.maxFileSize) {
        this.rotateLogFile();
    }

    // Append the log message to the file
    fs.appendFileSync(this.logFilePath, message);
  }

  private rotateLogFile(): void {
    // Get the current file name and extension
    const { name, ext } = path.parse(this.logFilePath);
    // Generate a new file name with a timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const newFileName = `${name}-${timestamp}${ext}`;
    const newFilePath = path.join(path.dirname(this.logFilePath), newFileName);

    // Rename the current log file
    fs.renameSync(this.logFilePath, newFilePath);

    // Create a new log file
    fs.writeFileSync(this.logFilePath, '');
  }
}