// 1定义类

class Person {
  name: string;
  age: number;
  sex: number = 1; //定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
  constructor(name: string, age: number, sex: number) {
    this.name = name;
    this.age = age;
  }
  run() {}
}

/***
 *
 * 2类的修饰符
 *  1 public  默认就是public 内部能访问到 外部也能访问到
 *  2 private 代表的是只能在内部访问到 在外部是访问不到的
 *  3 protected 只能在内部和继承的子类能访问到 在外部是访问不到的
 * **/

class Person1 {
  public name: string;
  private age: number;
  protected sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}
const p = new Person1("张三", 18, "男");
p.name;

// p.age 私有属性 不能读取
// p.sex;  只能在私有类和子类中能访问

class Son extends Person1 {
  constructor() {
    super("张三", 18, "女");
    console.log(this.sex);
    // console.log(this.age); //出错
  }
}

/**
 * 3 静态关键词 static
 * 静态属性和静态方法只能用类名去调用
 * 如果两个函数都是static 静态的是可以通过this互相调用
 * **/

class Person2 {
  public name: string;
  private age: number;
  protected sex: string;
  static num: number = 1;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    console.log(Person2.num);
  }
  static run() {
    console.log(Person2.num);
  }
  static ccc() {
    this.run();
  }
}

/***
 *  4 interface 定义类
 *
 *  需要使用 implements  后面多个interface(接口)需要使用逗号隔开
 *
 * */

interface PersonClass1 {
  set(value: string): string;
}

interface PersonClass2 {
  get(): string;
}

class A {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

class Person3 extends A implements PersonClass1, PersonClass2 {
  constructor() {
    super("18");
  }
  get() {
    return "1";
  }
  set(value: string) {
    return value;
  }
}

/**
 *
 * 抽象类 使用关键词 abstract
 *  定义 定义一个基础类  通过继承 一个派生类去实现
 *
 * **/

abstract class Person4 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getName(): string;
}

class Person5 extends Person4 {
  constructor() {
    super("小满");
  }
  getName(): string {
    return this.name;
  }
}
