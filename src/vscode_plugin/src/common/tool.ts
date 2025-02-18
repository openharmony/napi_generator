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

export function getCurrentTimeString(): string {
  const now = new Date();
  // 使用 padStart 方法确保日期和月份部分是两位数
  const yearLastTwoDigits = now.getFullYear() % 100; // 获取年份的最后两位
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  // 拼接成完整的日期时间字符串，年份只显示最后两位
  const currentTimeString = `${yearLastTwoDigits}${month}${day}${hours}${minutes}${seconds}`;
  return currentTimeString;
}

export function replaceAll(s: string, sfrom: string, sto: any) {
  // Logger.getInstance().debug('[replaceall] s:'+s+' sfrom:'+sfrom+' sto:'+sto);
  if (s && sfrom && sto || sto == '') {
    while (s.indexOf(sfrom) >= 0) {
      s = s.replace(sfrom, sto);
    }  
  }
  return s;
}

export function getTab(tabLv: number) {
    let tab = '';
    for (let i = 0; i < tabLv; ++i) {
        tab += '    ';
    }
    return tab;
}

export function removeComments(text: string): string {
  // 移除单行注释，确保不是URL的一部分
  const singleLineRegex = /(?<!ftp:|https:|http:)\/\/.*$/gm;
  // 移除多行注释
  const multiLineRegex = /\/\*[\s\S]*?\*\//gm;

  // 替换单行注释为空
  let noComments = text.replace(singleLineRegex, '');
  // 替换多行注释为空
  noComments = noComments.replace(multiLineRegex, '');

  return noComments;
}

// 随机生成整数
export function generateRandomInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 去除字符串前面的空格
export function removeTab(str: string) {
  str = replaceAll(str, '\r\n', '');
  str = replaceAll(str, '\r', '');
  str = replaceAll(str, '\n', '');
  // 去除class中的public: protected: private:
  str = replaceAll(str, 'public:', '');
  str = replaceAll(str, 'protected:', '');
  str = replaceAll(str, 'private:', '');
  while (str[0] === ' ') {
    str = str.replace(' ' , '')
  }
  return str;
}
