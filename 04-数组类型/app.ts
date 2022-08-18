// 数组的类型

// 1 类型[]
const arr: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];
const arr3: any[] = ["1", 2, true];
// arr.push("1"); //不被允许的

// 2 数组泛型 Array<类型>

let arr4: Array<number> = [1, 2, 3];

let arr5: Array<string> = ["1", "2", "3"];

// 3用接口来表示数组

interface NumberArr {
  [index: number]: number;
}

let arr6: NumberArr = [1, 2, 3];

// 4 多维数组

let arr7: number[][] = [
  [1, 2],
  [3, 4],
];

// 5 arguments类数组

function Arr(...args: any): void {
  console.log(arguments);
  //错误的arguments 是类数组不能这样定义
  //   let arr: number[] = arguments;

  //ts内置对象IArguments 定义
  let arr: IArguments = arguments;

  console.log(arr);
}
Arr([1, 2, 3]);

// 6 any数组

let arr8: Array<any> = [1, 2, "3", true, []];
