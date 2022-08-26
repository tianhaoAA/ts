/*
 * @Author: tianhao 1334750953@qq.com
 * @Date: 2022-08-22 16:37:40
 * @LastEditors: tianhao 1334750953@qq.com
 * @LastEditTime: 2022-08-26 17:22:56
 * @FilePath: \TS\21-实战TS编写发布订阅模式\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// on订阅/监听
var Dispatch = /** @class */ (function () {
    function Dispatch() {
        this.list = {};
    }
    Dispatch.prototype.on = function (name, callback) {
        var cb = this.list[name] || [];
        cb.push(callback);
        this.list[name] = cb;
    };
    Dispatch.prototype.emit = function (name) {
        var _this = this;
        var agrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            agrs[_i - 1] = arguments[_i];
        }
        var evnetName = this.list[name];
        evnetName && evnetName.forEach(function (fn) { return fn.apply(_this, agrs); });
    };
    Dispatch.prototype.off = function (name, fn) {
        var evnetName = this.list[name];
        if (evnetName && fn) {
            var index = evnetName.findIndex(function (fns) { return fns === fn; });
            // console.log(evnetName, fn);
            console.log(index);
            evnetName.splice(index, 1);
        }
        else {
            console.error("该事件未监听");
        }
    };
    return Dispatch;
}());
var eventBus = new Dispatch();
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
