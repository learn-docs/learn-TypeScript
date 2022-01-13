> 点击勘误[issues](https://github.com/webVueBlog/learn-TypeScript/issues)，哪吒感谢大家的阅读

## TypeScript

TypeScript是JavaScript的一个超集，主要提供了类型系统和对ES6的支持，它与2012年10月正式发布第一个版本。

优势：

- 能在开发过程中更快的发现潜在问题。
- 对编辑器更友好的代码提示功能。
- 代码语义更清晰易懂。

## 安装

Node.js

你首先需要在Node.js官网 (opens new window)按照你电脑的操作系统下载对应的Node版本进行安装。

### TypeScript

你需要使用如下命令全局安装TypeScript:

### 安装命令

```js
$ npm install -g typescript
```

### 安装完毕后，查看版本号

```js
$ tsc -v
```

:::warning
如果你对具体版本有严格的要求，你同样可以按照指定版本号进行安装。
:::

如下：

### 按指定版本号进行安装

```js
$ npm install -g typescript@3.6.4
```

### 安装完毕后，查看版本号

```js
$ tsc -v
```

## 起步

### 目录

在正式开始学习TypeScript之前，我们需要创建一个叫做TypeScript的文件夹：

### 创建文件夹

```js
$ mkdir TypeScript
```

随后在TypeScript文件夹中创建demo.ts文件，其代码如下：

```js
console.log('Hello,world')
```

## 编译

.ts中的代码一般而言是不能直接运行在浏览器的，需要我们把typescript代码进行编译成普通的javascript代码以后才能运行在浏览器，我们可以使用如下命令来进行编译：

### 编译命令

```js
$ tsc demo.ts
```

当编译完毕后，我们可以在文件夹中看到多出来了一个叫做demo.js文件：

```js
|-- TypeScript
|   |-- demo.js
|   |-- demo.ts
```

随后我们需要使用如下命令来执行我们编译后的javascript代码：

### 执行

```js
$ node demo.js
```

当执行完毕以上命令后，你可以在终端上看到输出一下内容：

```js
Hello,world
```

简化过程：我们发现，如果要运行一个.ts文件，我们首先需要使用tsc命令去编译它，随后再使用node命令去执行它，那么有没有一种工具能够一个步骤就帮我们做完以上的事情呢？我们需要全局安装一个叫做ts-node的工具：

### 安装ts-node

```js
$ npm install ts-node -g
```

### 安装完毕，查看版本号

```js
$ ts-node -v
```

在ts-node安装完毕后，我们先删除demo.js文件，随后使用ts-node命令来编译并执行我们的代码：

:::warning
ts-node包有升级更新，如果运行ts-node命令报错，请按照ts-node最新文档进行处理。
:::

### 删除demo.js文件

```js
$ rm demo.js
```

### 编译并执行

```js
$ ts-node demo.ts
```

以上命令执行完毕后，你将会看到与上面实例相同的输出结果。

## 基础

### 原始数据类型

我们知道JavaScript分为原始数据类型和对象类型，原始数据类型包括：number、string、boolean、null、undefined和symbol。 在TypeScript中，我们可以如下定义：

```js
let tsNum: number = 123
let tsStr: string = 'AAA'
let tsFlag: boolean = true
let tsNull: null = null
let tsUndefined: undefined = undefined
```

### void空值

我们知道在JavaScript中，是没有空值(void)的概念的，但在TypeScript中，可以使用void来表示一个没有返回值的函数：

```js
function sayHello (): void {
  console.log('Hello, world')
}
```

我们也可以定义一个void类型的变量，不过这样的变量并没有什么意义，因为我们只能给这种变量赋值为null或undefined。

```js
let voidValue1: void = null
let voidValue2: void = undefined
```

### void、null和undefined

void和null与undefined是有一定区别的，在TypeScript中，null和undefined是所有类型的子类型，也就是说可以把undefined或null赋值给number等类型的变量:

```js
let tsNumber1: number = undefined
let tsNumber2: number = null
```

而对于void而言，它只能被赋值为null或者undefined：

```js
// 这两行代码会编译报错
let voidValue1: void = 123
let voidValue2: void = '123'
```

### 任意值

任意值Any用来表示可以接受任何类型的值。

在有以上内容的基础上，我们知道以下代码会报错：

```js
// 变量被定义为number，那么它只能接受number类型的值，不能改变其类型，会编译报错
let tsNumber: number = 123
tsNumber = '123'
```

但是如果一个变量被定义为any，那么代表它可以接受任何类型的值：

```js
// 以下代码是正确的，编译成功
let tsAny: any = 123
tsAny = '123'
```

现在我们来思考一个问题，如果我们定义了一个变量，没有指定其类型，也没有初始化，那么它默认为any类型：

```js
// 以下代码是正确的，编译成功
let tsValue
tsValue = 123
tsValue = '123'
```

### 类型注解和类型推断

在以上的所有实例中，我们都为每一个变量提供了一个确定的类型，这种做法就叫做类型注解。而有些时候，当我们没有为其提供一个确定的类型，但提供了一个确定的值，那么TypeScript会根据我们给定的值的类型自动推断出这个变量的类型，这就叫类型推断。

```js
// typescript会自动为num1变量推断为number
let num1 = 123

// typescript会自动为num4变量推断为number
let num2 = 456
let num3 = 789
let num4 = num2 + num3
```

根据以上的案例，当我们给一个变量一个明确值的情况下，我们可以省略为其定义类型。但如果在函数参数中，则我们必须为其指定一个类型，如果不指定则默认为any:

```js
function add (num1: number, num2: number): number {
  return num1 + num2
}
// 或者省略函数的返回值类型，因为typescript会基于num1和num1全部为number类型，从而推断出函数返回值为number类型
function add (num1: number, num2: number) {
  return num1 + num2
}
```

:::tip
建议：始终为函数返回值提供一个确定的类型是有一个比较推荐的好习惯。
:::

### 联合类型

联合类型：表示取值可以为多种类型中的一种，多种类型使用|分隔开。

```js
let value: string | number
value = 123
value = '123'
```

当我们使用联合类型的时候，因为TypeScript不确定到底是哪一个类型，所以我们只能访问此联合类型的所有类型公用的属性和方法。

```js
// 会编译报错
function getLength (value: string | number): number {
  return value.length
}

// 以下代码不会编译报错
function valueToStr (value: string | number): string {
  return value.toString()
}
```

:::warning
另外一个值得注意的地方就是，当联合类型被赋值后，TypeScript会根据类型推断来确定变量的类型，一旦确定后，则此变量只能使用这种类型的属性和方法。
:::

```js
let tsValue: string | number
tsValue = '123'
console.log(tsValue.length) // 编译正确
tsValue = 123
console.log(tsValue.length) // 编译报错
```

### 接口

在TypeScript中，接口interface是一个比较重要的概念，它是对行为的抽象，而具体的行为需要由类去实现，接口interface中的任何代码都不会被最后编译到JavaScript中。

```js
interface Person {
  name: string,
  age: number
}
let person: Person = {
  name: 'why',
  age: 23
}
```

在以上代码中，person变量它是Person类型的，那么此变量只能接受接口规定的属性，且属性值的类型也必须和接口中规定的一致，多一个属性或者少一个属性在TypeScript中都不是被允许的。

```js
interface Person {
  name: string,
  age: number
}
// 编译报错
let person1: Person = {
  name: 'why'
}
// 编译报错
let person2: Person = {
  name: 'why',
  age: 23,
  sex: 'man'
}
```

### 接口中的任意属性

以上一个例子为基础，假设我们接口只对name和age做规定，其它任何属性都是可以的，那么我们可以如下方式进行定义：

```js
interface Person {
  name: string,
  age: number,
  // 任意属性
  [propName: string]: any
}
let person: Person = {
  name: 'why',
  age: 23,
  sex: 'man'
}
```

### 接口中的可选属性

现在假设，我们有一个接口，它只对name做规定，但是对于是否包含age不做要求，那么可以如下方式进行处理：

```js
interface Person {
  name: string,
  // age属性是可选的
  age?: number
}
// 编译成功
let person1: Person = {
  name: 'why'
}
let person2: Person = {
  name: 'why',
  age: 23
}
```

### 接口中的只读属性

最后我们要介绍的知识点是只读属性，一旦在接口中标记了属性为只读的， 那么其不能被赋值。

```js
interface Person {
  name: string,
  readonly age: number
}
let person: Person = {
  name: 'why',
  age: 23
}
// 编译报错
person.age = 32
```

### 函数的类型

在JavaScript中，定义函数有三种表现形式：

- 函数声明。
- 函数表达式。
- 箭头函数

```js
// 函数声明
function func1 () {
  console.log('Hello, world')
}
// 函数表达式
const func2 = function () {
  console.log('Hello, world')
}
// 箭头函数
const func3 = () => {
  console.log('Hello, world')
}
```

如果函数有参数，则必须在TypeScript中为其定义具体的类型：

```js
function add (x: number, y: number): number {
  return x + y
}
console.log(add(1, 2))    // 输出3
console.log(add(1, '2'))  // 报错
```

### 接口定义函数

函数也可以使用接口来定义其类型：

```js
interface AddInterface {
  (x: number, y: number): number
}
const add: AddInterface = function (x: number, y: number): number {
  return x + y
}
console.log(add(1, 2))    // 输出3
```

### 可选参数

前面我们已经提到过，必须为具体的参数提供具体的类型，但如果一个函数接受一个参数，这个参数又是可选的，那么我们可以如下方式进行定义：

```js
function getArea (a: number, b?: number): number {
  return  b ? a * b : a * a
}
console.log(getArea(4))     // 16
console.log(getArea(4, 5))  // 20
```

可选参数必须放在最后一个位置，否则会报错。

```js
// 编译报错
function getArea (b?: number, a: number): number {
  return  b ? a * b : a * a
}
```

### 参数默认值

在JavaScript中，函数允许我们给参数设置默认值，因此另外一种处理可选参数的方式是，为参数提供一个默认值，此时TypeScript将会把该参数识别为可选参数：

```js
function getArea (a: number, b: number = 1): number {
  return  a * b
}
console.log(getArea(4))     // 4
console.log(getArea(4, 5))  // 20
```

:::tip
给一个参数设置了默认值后，就不再受TypeScript可选参数必须在最后一个位置的限制了。
:::

```js
function getArea (b: number = 1, a: number): number {
  return  a * b
}
// 此时必须显示的传递一个undefined进行占位
console.log(getArea(undefined,4)) // 4
console.log(getArea(4, 5))        // 20
```

### 剩余参数

在ES6中，我们可以使用`...`符号进行收缩剩余参数，在TypeScript中，我们依然可以这么做：

```js
// rest是一个数组，我们可以使用数组的类型来定义它
function getTotal (a: number, ...rest: number[]) {
  console.log(a)    // 1
  console.log(rest) // [2, 3, 4]
}

getTotal(1, 2, 3, 4,)
```

### 函数重载

因为在JavaScript中，并没有限制函数参数的个数或者类型，因此JavaScript没有函数重载的概念，在TypeScript中对于函数重载的理解是：只要函数参数的类型或者函数参数的数量不同时，就可以认为这是两个函数(重载)。

```js
// 前两个为函数声明，最后一个才是函数实现
function add (a: number, b: number): number;
function add (a: string, b: string): string;
function add (a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else {
    return a + '' + b
  }
}
console.log(add(1, 2))      // 3
console.log(add('1', '2'))  // 12
```

:::tip
在有函数重载时，会优先从第一个进行逐一匹配，因此如果重载函数有包含关系，应该将最精准的函数定义写在最前面。
:::

### 类型断言

在上面联合类型中，我们知道可以变量可以是多个类型的，这可能会在代码编写的过程中带给我们一些困惑：

```js
class Student {
  name: string = 'student'
  sayHi () {
    console.log(this.name)
  }
}
class Teacher {
  name: string = 'teacher'
  sayHello () {
    console.log(this.name)
  }
}
function print(person: Student | Teacher) {
  if (person instanceof Student) {
    // 强制断言为Student类型
    (person as Student).sayHi()
  } else {
    // 强制断言为Teacher类型
    (person as Teacher).sayHello()
  }
}

let stu = new Student()
let teacher = new Teacher()
print(stu)      // student
print(teacher)  // teacher
```

代码分析：在print函数中，我们接受的参数可以是Student或者Teacher，在此函数内部我们希望能够根据不同的类型来调用不同的方法。我们首先使用instanceof来判断参数是否为Student类的实例，是我们将person参数强制断言成Student类型，此时就可以安全的调用sayHi方法了，Teacher同理。

### 类型别名

类型别名用type关键字来给一个类型起一个新的名字，类型别名常用于联合类型。

```js
type combineType = number | string
type typeObj = {
  age: number;
  name: string;
}
const value1: combineType = 123
const obj: typeObj = {
  age: 123,
  name: 'why'
}
```

### 字符串字面量类型

字符串字面量类型用来表示一个变量只能取某几个字符串值中的一个。

```js
type eventName = 'click' | 'scroll' | 'mousemove'
function handleEvent (event: eventName) {
  console.log(event)
}
handleEvent('click')    // click
handleEvent('scroll')   // scroll
handleEvent('dbclick')  // 编译报错
```
