import { types } from "util";

export function square(x) {
    return x * x;
  }
  
  export function cube(x) {
    return x * x * x;
  }


  function new() {
      let args = [].slice.call(arguments);
      const construct = args.shift();
      let target = {}; // let target = Object.create(construct.prototype);
      target.__proto__ = construct.prototype;
      const res = construct.apply(target, args);
      if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
          return res;
      }

      return target;
  }

  o = {name: 'lili'}
  function say() {
    console.log('name: ', this.name);
    return this.name;
  }
  var res = say.call(o);

  Function.prototype.call2 = function(context) {
    var context = context || window; //因为传进来的context有可能是null
    context.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push("arguments[" + i + "]"); //不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错
    }
    args = args.join(",");

    var result = eval("context.fn(" + args + ")"); //相当于执行了context.fn(arguments[1], arguments[2]);

    delete context.fn;
    return result; //因为有可能this函数会有返回值return
}

Function.prototype.call2 = function(context) {
    var context = context || window; //因为传进来的context有可能是null
    var args = Array.from(arguments);
    

    return result; //因为有可能this函数会有返回值return
}

p = {
    name: 'lili'
}
function say(age, height) {
    console.log(this.name, age, height)
}

f = say.bind(p);
f(18, 165)

Function.prototype.bind2 = function(context) {
    let self = this;
    let argsParent = [].slice(arguments, 1);

    return function() {
        const args = argsParent.concat([].slice(arguments));
        return self.apply(context, args);
    }
}
Function.prototype.bind2 = function(context) {
    let self = this;
    let argsParent = Array.prototype.slice(arguments, 1);

    return function() {
        const args = argsParent.concat(Array.prototype.slice(arguments));
        return self.apply(context, args);
    }
}