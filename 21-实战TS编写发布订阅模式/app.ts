/*
 * @Author: tianhao 1334750953@qq.com
 * @Date: 2022-08-22 16:37:40
 * @LastEditors: tianhao 1334750953@qq.com
 * @LastEditTime: 2022-08-26 17:22:56
 * @FilePath: \TS\21-实战TS编写发布订阅模式\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// on订阅/监听

// emit 发布/注册

// once 只执行一次

// off解除绑定

interface EventBus {
  on: (name: string, callback: Function) => void;
  emit: (name: string, ...args: Array<any>) => void;
  once: (name: string, fn: Function) => void;
  off: (name: string, fn: Function) => void;
}

interface List {
  [key: string]: Array<Function>;
}

class Dispatch {
  list: List;
  constructor() {
    this.list = {};
  }
  on(name: string, callback: Function) {
    const cb: Array<Function> = this.list[name] || [];
    cb.push(callback);
    this.list[name] = cb;
  }
  emit(name: string, ...agrs: Array<any>) {
    let evnetName = this.list[name];
    evnetName && evnetName.forEach((fn) => fn.apply(this, agrs));
  }
  off(name: string, fn: Function) {
    let evnetName = this.list[name];
    if (evnetName && fn) {
      let index = evnetName.findIndex((fns) => fns === fn);
      // console.log(evnetName, fn);
      console.log(index);
      evnetName.splice(index, 1);
    } else {
      console.error("该事件未监听");
    }
  }
}

const eventBus = new Dispatch();

// o.on("close", (...arg: Array<any>) => {
//   console.log("啊哈哈哈", arg);
// });

// o.emit("close", 1, true, "小满");

// const fn = (...arg: Array<any>) => {
//   console.log(arg, 2);
// };
// o.off("close", fn);

// o.on("close", (...arg: Array<any>) => {
//   console.log("啊哈哈哈2222222", arg);
// });

// export default Dispatch;
