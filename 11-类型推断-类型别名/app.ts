/**
 *
 * 1 什么是类型推论;
 * 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论
 *  2.如果你声明变量没有定义类型也没有赋值这时候TS会推断成any类型可以进行任何操作
 * **/

let str = "22222222";
let str2;
str2 = 1;
str2 = "54";
str2 = true;

// 2 类型别名

// 定义类型别名
type s = string;
type n = number;

let a: s = "458454";
let b: n = 458454;

// 定义函数别名

type str = () => string;

const fn: str = () => "111";

//  定义联合类型别名

type str2 = string | number;

let s: str2 = 1;
s = "555";

// 定义值的别名

type value = boolean | 0 | "213";
// value = true;

let v: value = true; //只能是value 定义的值
