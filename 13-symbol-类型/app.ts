// symbol类型的值是通过Symbol构造函数创建的。
// 可以传递参做为唯一标识 只支持 string 和 number类型的参数

import { log } from "console";

let s1 = Symbol("1");
let s2 = Symbol(1);

// 1 Symbol的值是唯一的
// 2用作对象属性的键

let key = Symbol("str");

let obj = {
  [key]: "123",
};
console.log(obj[key]);

// 使用symbol定义的属性，是不能通过如下方式遍历拿到的

const key1 = Symbol("111");
const key2 = Symbol("222");

const obj2 = {
  [key1]: "value1",
  [key2]: "value2",
  id: 1,
  name: "张三",
};

// for in 遍历
for (const key in obj2) {
  console.log(key); //获取不到symbol定义的键
}

// Obect.keys 遍历
console.log(Object.keys(obj2));

// getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj2));
// 4 JSON.stringfy
console.log(JSON.stringify(obj2));

// 拿到具体的 symbol 属性

// Object.getOwnPropertySymbols(obj2);
console.log(Object.getOwnPropertySymbols(obj2));

// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj2);
console.log(Reflect.ownKeys(obj2));

// symbol.iterator  迭代器 和 生成器 for of

let arr = [1, 2, 3, 4];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

interface Item {
  age: number;
  name: string;
}

let array1: Array<Item> = [
  { name: "张三", age: 18 },
  { name: "张三2", age: 180 },
];

type mapTypes = string | number;

const map: Map<mapTypes, mapTypes> = new Map();

map.set("1", "王爷");
map.set("2", "陆北");

// let set: Set<number> = new Set([1, 2, 3, 4, 5, 6]);
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg: any): void => {
  let it: Iterator<any> = erg[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = it.next();

    if (!next.done) {
      console.log("————————————————", next.value);
    }
  }
};
gen(array1);

// 以下为这些symbols的列表：

// Symbol.hasInstance
// 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

// Symbol.isConcatSpreadable
// 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

// Symbol.iterator
// 方法，被for-of语句调用。返回对象的默认迭代器。

// Symbol.match
// 方法，被String.prototype.match调用。正则表达式用来匹配字符串。

// Symbol.replace
// 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

// Symbol.search
// 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

// Symbol.species
// 函数值，为一个构造函数。用来创建派生对象。

// Symbol.split
// 方法，被String.prototype.split调用。正则表达式来用分割字符串。

// Symbol.toPrimitive
// 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

// Symbol.toStringTag
// 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

// Symbol.unscopables
// 对象，它自己拥有的属性会被with作用域排除在外
