import { AsyncCallback, Callback } from './basic';

declare namespace napitest {
    namespace Space3 {
        function fun3(v3: string): string;
        interface Animal {
            name: string;
            age: number;
        }
        interface TestClass2 {
            animal: Animal;
            fix(v1:string):string;
            fun2(numcc: Array<number>, animalcc: Animal): Animal;
        }
    }
}

export default napitest;