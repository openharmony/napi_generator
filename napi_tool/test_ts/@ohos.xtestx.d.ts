import { AsyncCallback, Callback } from './basic';

declare namespace xtestx {
    interface valuein_d2 {
        i: Array<string>;
    }
    interface valuein_d1 {
        k: number;
        m: valuein_d2;
    }
    interface valuein {
        a: number;
        b: string;
        c: Array<number>;
        d: Array<string>;
        e: Array<valuein_d1>;
    }

    function test1(z:valuein):number;
}

export default xtestx;
/*
enum->enum
const->const
type->???
function*->function

interface{变量，function}*->class
class{变量，function}->class
namespace{所有}*->namespace
*/