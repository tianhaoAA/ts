/****
 *
 * 元祖就是数组的的变种
 *
 * 元祖的集合不同的是 元祖中的元素可以是不同的 而且数量是固定的
 *
 *
 * **/

let arr: [number, string] = [1, "string"];

let arr2: readonly [number, boolean, string, undefined] = [
  1,
  true,
  "sring",
  undefined,
];

// 当值访问一个已知索引的元素时 会得到正确的值

arr2[2].length;
// arr2[3].length; //报错

// arr2.push(true); //报错

// 应用场景 例如定义execl返回的数据

let excel: [string, string, number, string][] = [
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
  ["title", "name", 1, "123"],
];
