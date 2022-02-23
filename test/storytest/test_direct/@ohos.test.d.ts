import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    export interface Result {
        code: number;
        data: string;
      }

    interface TestClass1 {
        num1: number;
        fun1(v: number): number;
        fun2(v: string): Result;
    }
}

export default napitest;