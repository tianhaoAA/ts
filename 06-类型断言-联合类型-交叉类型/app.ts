// 1 联合类型

let str: number | string = "1";
str = 1;

// 函数使用联合类型

function fn(str: number | string): boolean {
  return true;
}

fn(1);

// 2交叉类型 多种类型的集合 联合对象将具有所联合类型的所有成员

interface A {
  name: string;
}

interface B {
  age: number;
}

const fn2 = (obj: A & B) => {
  console.log(obj);
};
fn2({ name: "张三", age: 18 });

// 类型断言

interface C {
  run: string;
}
interface D {
  build: string;
}

const fn3 = (type: C | D): string => {
  // return type.run;  //会报错 需要使用类型断言
  return (type as C).run;
};

// 使用any临时断言

// window.a = 12; 会报错

(window as any).a = 123;

// 使用 const 类型断言

const p = 1;
// p=11 无法修改

let names2 = "小南" as const;
// names2 = "aa"; //无法修改

// 类型断言是不具影响力的
