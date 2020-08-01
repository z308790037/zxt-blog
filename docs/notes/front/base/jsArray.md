# 数组（array）的所有方法

::: tip 概念
数组对象是一个<span class="red">有序的数据</span>（数据可以是 原始类型 或 对象类型）集合。相对于变量，数组可用于在一个变量中存储多个变量值。<br />
数组中的每一项都有一个数字附于其上，被称为索引。在 JavaScript 中，数组索引从 0 开始，并可以使用多种 方法 操作。
:::

## forEach:遍历数组

``` js
let fruits = ['Apple', 'Banana'];
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
// Apple 0
// Banana 1
```

## push:添加元素到数组的末尾
```js
let newLength = fruits.push('Orange');
// newLength:3; fruits: ["Apple", "Banana", "Orange"]
```

## unshift:添加元素到数组的最前
```js
let newLength = fruits.unshift('Strawberry') 
// ["Strawberry", "Apple", "Banana", "Orange"];
```

::: tip 注意
push返回的是数组的长度
:::

## pop:删除数组末尾元素
```js
let last = fruits.pop(); 
// last: "Orange"; fruits: ["Strawberry", "Apple", "Banana"];
```
::: tip 注意
pop返回的是删除的元素值
:::

## shift:删除数组首个元素
```js
let first = fruits.shift();
// first: "Strawberry"; fruits: ["Apple", "Banana"];
```

## indexOf:元素索引

``` js
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana');
// 1
```
## slice:删除/复制数组

```js
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);
// pos表示删除的起点（indexOf:从0开始）, n 表示删除的个数
// 返回值是删除的元素的数组

console.log(vegetables); 
// ["Cabbage", "Carrot"] (原数组已经改变)

console.log(removedItems); 
// ["Turnip", "Radish"]
```


```js
let shallowCopy = fruits.slice();
// ["Strawberry", "Mango"]
```

::: tip 注意
slice方法什么都不传则表示复制数组
:::

<style>
    .box{
    }

    .box p {
        width: 100px;
        border: 1px solid red;
        text-align-last: justify;
        vertical-align: top;
    }
</style>
<div class="box">
    <p>姓名</p>
    <p>s</p>
    <p>姓大健名</p>
    <p>姓名</p>
</div>

<script>
    let arr1 = [1, 32, 4, 5];
    const arr = Math.max.call(Math, ...arr1);
    console.log(arr)
</script>