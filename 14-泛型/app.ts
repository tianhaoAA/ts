/*
 * @Author: tianhao 1334750953@qq.com
 * @Date: 2022-08-19 17:03:42
 * @LastEditors: tianhao 1334750953@qq.com
 * @LastEditTime: 2022-08-19 19:13:32
 * @FilePath: \TS\14-泛型\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 函数泛型

// 1 函数名字后面跟一个<参数名> 参数名可以随便写

function add<T>(num: T, num2: T): Array<T> {
  return [num, num2];
}
add<number>(1, 2);
add<string>("1", "2");

// 使用不同的泛型参数名，
function Sub<T, U>(a: T, b: U): Array<T | U> {
  const params: Array<T | U> = [a, b];
  return params;
}

Sub<number, string>(1, "1");

// 定义泛型接口

interface MyInter<T> {
  (age: T): T;
}

function fn<T>(age: T): T {
  return age;
}

let result: MyInter<number> = fn;

result(1223);

// 对象字面量泛型

let foo: { <T>(age: T): T };

foo = function fn2<T>(age: T): T {
  return age;
};
foo(123);

// 泛型约束

interface Leng {
  length: number;
}

function getLength<T extends Leng>(arg: T) {
  return arg.length;
}

getLength<string>("123");
