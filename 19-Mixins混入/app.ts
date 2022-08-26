// object.assing 合并多个对象

interface Name {
  name: string;
}

interface Age {
  age: number;
}

interface Sex {
  sex: string;
}

let p1: Name = { name: "张三" };
let p2: Age = { age: 20 };
let p3: Sex = { sex: "男" };

const PAll = Object.assign(p1, p2, p3);
console.log(PAll);

class A {
  type: boolean = false;
  changeType() {
    this.type = !this.type;
  }
}

class B {
  name: string = "张三";
  getName(): string {
    return this.name;
  }
}
// 使用extends而是使用implements。 把类当成了接口
class C implements A, B {
  type: boolean;
  changeType: () => void;
  name: string;
  getName: () => string;
}

function Mixins(curCls: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      curCls.prototype[name] = item.prototype[name];
    });
  });
}

Mixins(C, [A, B]);
