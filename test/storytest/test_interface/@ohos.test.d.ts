import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    interface Human {
        name: string;
        age: number;
    }

    interface TestClass1 {
        ahuman: Human;
        num1: number;
        fun1(v: number): number;
        fun2(numcc: Array<number>, mancc: Human): Human;
        fun3(v: number):boolean;
        fun4(v2: string, mancc: Array<Human>): Human;
    }
}

export default napitest;