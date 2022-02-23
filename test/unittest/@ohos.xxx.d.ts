import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    interface Human {
        name: string;
        age: number;
    }

    interface TestClass1 {
        ahuman: Human;
        num1: number;
        str1: string;
        nums: Array<number>;
        strs: Array<string>;
        mans: Array<Human>;
        if_direct(v1: string): string;
        if_callback(v1: string, cb: Callback<string>): string;
        if_async(v1: string, cb: AsyncCallback<string>): string;
    }

    function fun2(v2: string, numcc: Array<number>, mancc: Human): Array<Human>;
    function fun3(v2: string, cb: Callback<string>): void;
    function fun4(v2: string, cb: AsyncCallback<string>): void;

    namespace Space3 {
        function fun3(v3: string): string;
        interface TestClass2 {
            haha: number;
        }
        namespace Space4 {
            function fun3(v3: string): string;
            interface TestClass3 {
                hoho: number;
                add(v1: Array<number>): number;
            }
        }
    }
}

export default napitest;