import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    interface TestClass1 {
        num1: number;
    }

    function fun1(v: number): number;
    function fun2(v: Array<number>, cb: Callback<number>): void;
    function fun3(v: TestClass1, cb: AsyncCallback<number>): void;
    function fun4(v: string): number;
    function fun5(v: number, d: Promise<string>): string;
}

export default napitest;