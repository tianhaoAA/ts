/***
 *  我们在工作中 无法避免全局变量的影响
 *  内部模块，主要用于组织代码，避免命名冲突。
 *  命名空间内的类默认私有
 *  通过 export 暴露
 *  通过 namespace 关键字定义
 * **/

import { X } from "./a";
namespace a {
  export const Time: number = 100;
  export const fn = <T>(arg: T): T => {
    return arg;
  };
  fn(Time);
}

namespace b {
  export const Time: number = 1000;
  export const fn = <T>(arg: T): T => {
    return arg;
  };
  fn(Time);
}

a.Time;
b.Time;

// 嵌套命名空间
namespace c {
  export namespace d {
    export class Vue {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
  }
}

let v = c.d.Vue;

new v("1");

// 抽离命名空间

const bb = X.P.b;

// import bb = X.P.b;
