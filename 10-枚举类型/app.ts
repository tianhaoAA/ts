/***
 * 使用枚举属性;
 * 通过关键词enum 来定义我们的枚举
 * **/

// 1.数字枚举 默认是在0开始的
enum Types {
  Red,
  Green,
  blue,
}

// 2 字符枚举

enum Types2 {
  Red = "red",
  Green = "green",
  blue = "blue",
}

// 3 异构枚举

enum Types3 {
  No = "No",
  Yes = 1,
}

// 4 接口枚举

enum Types4 {
  Red = "red",
  Green = "green",
  blue = "blue",
}

interface A {
  red: Types4.Red;
}
let obj: A = {
  red: Types4.Red,
};

//  5const 枚举  let  和 var 都是不允许的声明只能使用const

const enum Types5 {
  Red = "red",
  Green = "green",
  blue = "blue",
}

// 6 反向映射

enum Types6 {
  Red,
  Green,
  blue,
}

let red = Types6.Red;

console.log(red);
console.log(Types6[red]);
