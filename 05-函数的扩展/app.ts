// 1普通 类型

import { log } from "console";

const fn = (name: string, age: number): string => {
  return name + age;
};
fn("zhangsan", 18);

//2函数的可选参数?
const fn2 = (name: string, age?: number): string => {
  return name + age;
};
fn2("lisi");

//3函数参数的默认值

const fn3 = (name: string, age: number = 18): string => {
  return name + age;
};

fn3("wangwu", 80);

// 4 接口定义函数

interface Add {
  (num: number, num2: number): number;
}
const fn4: Add = (num: number, num2: number): number => {
  return num + num2;
};

interface User {
  name: string;
  age: number;
}

function getUserInfo(user: User): User {
  return user;
}

getUserInfo({ name: "张哥", age: 88 });

// 5 定义剩余参数

const fn5 = (arr: number[], ...items: any[]): any[] => {
  console.log(arr);
  return items;
};

let a: number[] = [1, 2, 3];
fn5(a, 7, 8, true);

// 5 函数的重载

function f1(params: number): void;
function f1(params: string, params2: string): void;

function f1(params: any, params2?: any): void {
  console.log(params);

  console.log(params2);
}
f1(18);
f1("18", "80");
