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

import { 
  boolIn, 
  boolRet, 
  callbackIn, 
  doubleIn, 
  doubleRet, 
  int32tIn, 
  int32tRet, 
  int64tIn, 
  int64tRet, 
  objectRet, 
  stringIn, 
  stringInUtf16, 
  stringRet, 
  stringRetUtf16, 
  uint32tIn, 
  uint32tRet 
} from "../func_template"

export let cpp2DtsKey = [
    {
        keys: ['char', 'string'],
        value: 'string'
    },
    {
      keys: ['size_t', 'int', 'short', 'long', 'double', 'float', 'unsigned'],
      value: 'number'
    },
    {
        keys: ['bool'],
        value: 'boolean'
    },
    {
        keys: ['void'],
        value: 'void'
    }
]

export let h2NapiInKey = [
  {
    // 如包含这些字眼，则默认是ObjectIn, 此时框架不做任何处理，由用户自己处理
    keys: ['iterator', 'vector', 'list', 'map', 'array', 'set', 'stack', 'queue', 'deque', 'tuple', 'pair'],
    value: ''
  },
  {
    keys: ['std::function'],
    value: callbackIn
  },
  {
    keys: ['uint32_t', 'size_t', 'uint8_t', 'uint16_t', 'uint64_t', 'unsigned '],
    value: uint32tIn
  },
  {
    keys: ['int64_t', 'long'],
    value: int64tIn
  },
  {
    keys: ['double', 'float'],
    value: doubleIn
  },
  {
    keys: ['char', 'string', 'char8_t'],
    value: stringIn
  },
  {
    keys: ['wchar_t', 'char16_t', 'char32_t'],
    value: stringInUtf16
  },
  {
    keys: ['bool'],
    value: boolIn
  },
  {
    keys: ['int', 'int32_t', 'short'],
    value: int32tIn
  }
]

export let dts2CppKey = [
  {
    keys: ['number'],
    value: 'double'
  },
  {
    keys: ['string'],
    value: 'std::string'
  },
  {
    keys: ['boolean'],
    value: 'bool'
  },
  {
    keys: ['void'],
    value: 'void'
  },
  {
    keys: ['Array<number>', 'number[]'],
    value: 'std::vector<double>'
  },
  {
    keys: ['Array<string>', 'string[]'],
    value: 'std::vector<std::string>'
  },
  {
    keys: ['Array<boolean>', 'boolean[]'],
    value: 'std::vector<bool>'
  },
  {
    keys: ['Map<string,number>'],
    value: 'std::map<std::string, double>'
  },
  {
    keys: ['Map<string,string>'],
    value: 'std::map<std::string, std::string>'
  },
  {
    keys: ['Map<string,boolean>'],
    value: 'std::map<std::string, bool>'
  },
  {
    keys: ['Map<number,number>'],
    value: 'std::map<double, double>'
  },
  {
    keys: ['Map<number,string>'],
    value: 'std::map<double, std::string>'
  },
  {
    keys: ['Map<number,boolean>'],
    value: 'std::map<double, bool>'
  },
  {
    keys: ['Set<string>'],
    value: 'std::set<std::string>'
  },
  {
    keys: ['Set<number>'],
    value: 'std::set<double>'
  },
  {
    keys: ['Set<boolean>'],
    value: 'std::set<bool>'
  },
  {
    keys: ['any', 'object'],
    value: 'std::any'
  }
]

export let h2NapiOutKey = [
  {
    // 如包含这些字眼，则默认是ObjectOut
    keys: ['iterator', 'vector', 'list', 'map', 'array', 'set', 'stack', 'queue', 'deque', 'tuple', 'pair'],
    value: objectRet
  },
  {
    keys: ['uint32_t', 'size_t', 'uint8_t', 'uint16_t', 'uint64_t', 'unsigned '],
    value: uint32tRet
  },
  {
    keys: ['int64_t', 'long'],
    value: int64tRet
  },
  {
    keys: ['double', 'float'],
    value: doubleRet
  },
  {
    keys: ['char', 'string', 'char8_t'],
    value: stringRet
  },
  {
    keys: ['wchar_t', 'char16_t', 'char32_t'],
    value: stringRetUtf16
  },
  {
    keys: ['bool'],
    value: boolRet
  },
  {
    keys: ['int', 'int32_t', 'short'],
    value: int32tRet
  }
]

export let dts2TestValue = [
  {
    key: 'number',
    value: '1'
  },
  {
    key: 'string',
    value: '"hello"'
  },
  {
    key: 'boolean',
    value: 'true'
  },
  {
    key: 'Array<number>',
    value: '[1,2]'
  },
  {
    key: 'Array<string>',
    value: '["hello","world"]'
  },
  {
    key: 'Array<boolean>',
    value: '[true,false]'
  },
  {
    key: 'Map<number, number>',
    value: 'new Map([[0,0],[1,1]])'
  },
  {
    key: 'Map<number, string>',
    value: 'new Map([[0,"0"],[1,"1"]])'
  },
  {
    key: 'Map<number, boolean>',
    value: 'new Map([[0,true],[1,false]])'
  },
  {
    key: 'Map<string, string>',
    value: 'new Map([["key1","b"],["key2","d"]])'
  },
  {
    key: 'Map<string, boolean>',
    value: 'new Map([["key1",false],["key2",true]])'
  },
  {
    key: 'Map<string, number>',
    value: 'new Map([["key1",0],["key2",1]])'
  },
  {
    key: 'Set<number>',
    value: 'new Set([0,1])'
  },
  {
    key: 'Set<string>',
    value: 'new Set(["a","b"])'
  },
  {
    key: 'Set<boolean>',
    value: 'new Set([true,false])'
  }
]
