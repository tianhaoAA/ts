/**
 * 对象的类型
 * 定义对象的时候 会使用关键词 interface(接口) 约束对象里面的数据结构
 * **/

interface Person {
  name: string;
  age: number;
  sex?: string; //?代表可有可无
}

const person: Person = {
  name: "张三",
  age: 18,
  sex: "男",
};

// 重名的interface 会重叠
interface A {
  name: string;
}
interface A {
  age: number;
}
const a: A = {
  name: "李四",
  age: 28,
};

interface B {
  cb(): void; //函数
  name: string;
  readonly age: number; //只能去读取不能去修改
  [propName: string]: any; // 剩余参数
}

const b: B = {
  name: "李四",
  age: 28,
  cb: () => {
    console.log(8888);
  },
};
// b.age = 15;
