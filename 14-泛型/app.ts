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
