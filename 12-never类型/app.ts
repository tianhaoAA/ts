//  将使用 never 类型来表示不应该存在的状态(很抽象是不是)

// 因为要抛出异常 所以用never

function error(message: string): never {
  throw new Error(message);
}

// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
  while (true) {}
}

// never 与 void 的差异

// void 类型只是没有返回值,本身不会出错

function Void(): void {
  console.log();
}

//只会抛出异常没有返回值
function Never(): never {
  throw new Error("aaa");
}

class A {
  type: "foo";
}
interface B {
  type: "bar";
}
interface C {
  type: "bizz";
}
type All = A | B | C;
function handleValue(val: All) {
  switch (val.type) {
    case "foo":
      break;
    case "bar":
      break;
    // case "bizz":
    //   break;
    default:
      //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了

      //   const exhaustiveCheck: never = val;
      break;
  }
}
