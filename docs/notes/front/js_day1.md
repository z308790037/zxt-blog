# JS中的数据类型及堆栈内存

## 数据类型详细解读

### 数据类型
- 基本数据类型（值类型）

``` html
number, string, boolean, null, undefined
```

``` js
/*
* isNaN：把其他数据类型转化为Number类型时， 不能转换就是NaN
**/
typeof NaN       // "number" NaN means Not a Number
isNaN(0)         // false
isNaN('10')      // false
isNaN('A')       // true
 
```

::: tip 注意
null属于空的基本数据类型<br />
::: 

### 引用数据类型

``` html
object, function, symbol
```

``` js
let a = {x: 100};
let b = function fn() {}
let obj = {
    0: 100,
    true: "布尔",
}
obj[a] = 1000;
obj[b] = 2000;
console.log(obj);  
/*
* {
*   0: 100
*   [object Object]: 1000
*   function fn() {}: 2000
*   true: "布尔"
* }
**/ 
// 对象的属性名一定不能是引用类型值，默认会把引用类型值转换为字符串进行处理

// 数组是特殊的对象
```

::: tip 注意
object包括： {}, [], /^$/, 日期对象 Math, 实例对象...
:::