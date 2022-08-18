//  任意类型 any
//unknown 顶级类型

// any 可以随意赋值
let str: any = 123;
str = "13";
str = {};

let obj: unknown = {};
obj = 1;
obj = "2";
obj = [];

console.log(str);
console.log(obj);

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj2: any = { b: 1 };
obj2.a;

// 如果是unknow 是不能调用属性和方法
let obj3: unknown = { b: 1, ccc: (): number => 213 };
// obj3.b;
// obj3.ccc();
