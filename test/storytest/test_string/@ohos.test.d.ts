import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    interface TestClass1 {
        string1: string;
    }

    function fun1(v: string): string;
    function fun2(v: Array<string>, cb: Callback<string>): void;
    function fun3(v: TestClass1, cb: AsyncCallback<string>): void;

}

export default napitest;