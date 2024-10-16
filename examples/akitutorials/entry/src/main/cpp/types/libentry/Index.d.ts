export const SayHello: (a: string) => string;
export const AsyncSayHello: (a: string) => Promise<string>;
export const Passing: (flag: TypeFlags) => TypeFlags;

export enum TypeFlags {
  NONE,
  NUM,
  STRING
}

export class TestObject {
  constructor(count:number);
  static MultiplyObject:(obj1: TestObject, obj2: TestObject) => number;
  Multiply:(mult: number) => number;
  value: number;
  value_: number;
}