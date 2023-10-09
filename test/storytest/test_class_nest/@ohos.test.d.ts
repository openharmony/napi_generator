/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
import { AsyncCallback, Callback } from '../basic';

declare namespace napitest {
  export enum Type
  {
      typeA,
      typeB,
      typeC
  }

  class Test {
       type: Type;
       func(param: Type): boolean;
  }

  interface aa {
      abc: string;
      def: number;
  }

  class Demo {
      equals(other: Demo): boolean;
      handleCallback(): void;

      intPro: number;
      strPro: string;
      boolPro: boolean;
      inter: aa;
      type: Type;
  }

  function funcTest(v: Type): boolean;
  function funcTest2(v: Test): boolean;
}

export default napitest;
