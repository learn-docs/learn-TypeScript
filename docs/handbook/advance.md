> 点击勘误[issues](https://github.com/webVueBlog/learn-TypeScript/issues)，哪吒感谢大家的阅读

## 进阶

### 数组和元组

#### 数组

和普通的变量一样，数组中的类型定义也有一定的规则：类型+方括号表示

```js
// 只允许存储number类型
let numArray: number[] = [1, 2, 3]
// 只允许存储string类型
let strArray: string[] = ['1', '2', '3']
```

值得一提的是，以上案例还有一种泛型方式的写法：

```js
// 只允许存储number类型
let numArray: Array<number> = [1, 2, 3]
// 只允许存储string类型
let strArray: Array<string> = ['1', '2', '3']
```

在数组中也可以使用联合类型：

```js
// 只允许存储number和string类型的值
let tsArray: (number | string) [] = [1, '2', '3']
```

我们知道，在数组中不仅可以存储基础数据类型，还可以存储对象类型，如果需要存储对象类型，可以用如下方式进行定义：

```js
// 只允许存储对象仅有name和age，且name为string类型，age为number类型的对象
let objArray: ({ name: string, age: number })[] = [
  { name: 'AAA', age: 23 }
]
```

为了更加方便的撰写代码，我们可以使用类型别名的方式来管理以上类型：

```js
// 类型别名
type person = {
  name: string;
  age: number;
}
let objArray: person[] = [
  { name: 'AAA', age: 23 }
]
```

### 元组

对元组的理解是：一个数组如果知道它确定的长度，且每个位置的值的类型也是确定的，那么就可以把这样的数组称为元组。

```js
// tuple数组只有2个元素，并且第一个元素类型为string，第二个元素类型为number
let tuple: [string, number] = ['AAA', 123]
```

:::warning
当访问元组中已知位置的索引时，将得到其对应正确的值；当访问元组中未知位置的索引时，会报错。
:::

```js
let tuple: [string, number] = ['AAA', 123]
console.log(tuple[1]) // 123
console.log(tuple[2]) // 报错
```

### 枚举

枚举Enum类型用来表示取值限定在指定的范围，例如一周只能有七天，颜色只能有红、绿、蓝等。

```js
enum colors  {
  red,
  green,
  blue
}
console.log(colors.red)   // 0
console.log(colors.green) // 1
console.log(colors.blue)  // 2
```

代码分析：我们定义一个colors的枚举类型，其取值只能是red、green、blue。我们可以在打印的内容发现，其输出值从0开始，依次累加1。这是枚举类型的默认行为，我们可以手动设置一个起始值：

```js
enum colors  {
  red = 10,
  green,
  blue
}
console.log(colors.red)   // 10
console.log(colors.green) // 11
console.log(colors.blue)  // 12
```

在枚举类型中，我们不仅可以正向的获取值，还可以通过值反向获取枚举：

```js
enum colors  {
  red = 10,
  green,
  blue
}
console.log(colors[10]) // red
console.log(colors[11]) // green
console.log(colors[12]) // blue
```

### 类

#### 类的继承

在JavaScript中，通过extends关键字来实现子类继承父类，子类也可以通过super关键字来访问父类的属性或者方法。

```js
class Person {
  name: string
  constructor (name: string) {
    this.name = name
  }
  sayHello () {
    console.log(`hello, ${this.name}`)
  }
}
class Teacher extends Person {
  constructor (name: string) {
    // 调用父类的构造函数
    super(name)
  }
  sayTeacherHello () {
    // 调用父类的方法
    return super.sayHello()
  }
}
let teacher = new Teacher('why')
teacher.sayHello()        // hello, why
teacher.sayTeacherHello() // hello, why
```

:::tip
有一种关于类属性的简写方式，就是在类的构造函数中指明访问修饰符。
:::

```js
// 简写形式
class Person {
  constructor (public name: string) {}
}
// 等价于
class Person {
  name: string
  constructor (name: string) {
    this.name = name
  }
}
```

### 存取器

在class中，可以通过getter和setter来改变属性的读取和赋值行为。

```js
class Person {
  // 私有属性，只能在类中进行访问
  private _name: string
  constructor (_name: string) {
    this._name = _name
  }
  get name () {
    return this._name
  }
  set name(name) {
    this._name = name
  }
}
let person = new Person('why')
console.log(person.name)  // why
person.name = 'AAA'
console.log(person.name)  // AAA
```

### 静态属性和静态方法

所谓静态属性和静态方法，就是只能通过类来进行访问，不能通过类的实例来进行访问。在众多设计模式中，有一种设计模式叫做单例设计模式，可以使用static静态方法来辅助我们完成单例设计模式。

```js
class Person {
  private static _instance: Person
  private constructor () {}
  public static getInstance () {
    if (!this._instance) {
      this._instance = new Person()
    }
  }
}
const person1 = Person.getInstance()
const person2 = Person.getInstance()
console.log(person1 === person2) // true
```

### TypeScript类的访问修饰符

在以上的实例中，我们使用到了TypeScript中关于类的几种访问修饰符，它有三种：

- public：公有的，在任何地方都可以访问到。
- protected：受保护的，只能在类的内部及其类的子类内部使用。
- private：私有的，只能在类的内部进行使用。

```js
class Person {
  private age: number
  protected address: string
  public name: string
  constructor (age: number, address: string, name: string) {
    this.age = age
    this.address = address
    this.name = name
  }
}
class Teacher extends Person {
  sayHello () {
    console.log(`my addresss is ${this.address}`) // my address is 广东广州
    console.log(`my name is ${this.name}`)        // my name is why
    console.log(`my age is ${this.age}`)          // 编译报错
  }
}
const person = new Person(21, '广东广州', 'why')
console.log(person.name)    // why
console.log(person.age)     // 编译报错
console.log(person.address) // 编译报错
```

### 只读属性

可以使用readonly关键字来表示属性是只读的。

```js
class Person {
  constructor (public readonly name: string) {}
}
let person = new Person('AAA')
console.log(person.name)  // AAA
person.name = 'BBB'       // 编译报错 
```

### 抽象类

在TypeScript中，可以使用abstract关键字来定义抽象类以及抽象类中的抽象方法，在使用抽象类的过程中，有几点需要注意：

- 抽象类不能被实例化，只能被继承。
- 抽象类中的抽象方法必须被子类实现。
- 抽象类不能被实例化：

```js
abstract class Animal {
  name: string
  constructor (name: string) {
    this.name = name
  }
}
class Person extends Animal{}
const person = new Person('why')
console.log(person.name)    // why
const animal = new Animal() // 编译报错
```

抽象类中的抽象方法必须被子类实现：

```js
abstract class Animal {
  name: string
  constructor (name: string) {
    this.name = name
  }
  abstract eat (): void
}
class Person extends Animal{
  // 子类必须实现抽象类中的抽象方法
  eat () {
    console.log('person is eating')
  }
}
const person = new Person('why')
console.log(person.name)    // why
person.eat()                // person is eating
```

### 类和接口

#### 类实现接口

:::tip
一个类可以实现一个或者多个接口，用逗号分隔。
:::

如果我们定义了一个接口，然后类去实现它，那么这个接口中的属性和方法，在类中必须全部都要存在，否则会编译报错。

```js
interface Animal {
  age: number
  sayHello (): void
}

class Person implements Animal {
  age: number
  sayHello () {
    console.log(this.age)
  }
}
```

#### 接口继承接口

在上面的案例中，我们使用到了类实现接口，其实一个接口还可以继承自另外一个接口。

```js
interface Animal {
  age: number
  sayHello (): void
}
interface Person extends Animal {
  // Person接口继承了Animal，就拥有了Animal种所有的属性和方法
  name: string
}

class Person implements Person {
  age: number
  sayHello () {
    console.log(this.age)
  }
}
```

#### 接口继承类

在有些语言中，接口一般而言是不能继承类的，但在TypeScript中是可以继承的，接口继承类以后，就拥有类中所有的属性和方法。

```js
class Point {
  x: number
  y: number
  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = {
  x: 10,
  y: 10,
  z: 10
}
console.log(point3d)  // { x: 10, y: 10, z: 10 }
```

### 泛型

泛型generics是指在定义函数、接口和类的时候，不预先指定其具体类型，而在使用的时候再去指定的一种特性。

### 函数中的泛型

假设我们有如下一个函数，其中参数a和b接受的类型必须为相同的类型。

```js
function join (a, b) {
  return `${a}${b}`
}
```

我们在没有了解到泛型之前，我们可以用联合类型来定义：

```js
function join (a: number | string, b: number | string) {
  return `${a}${b}`
}
```

代码分析：在以上的例子中，我们仅仅只是规定了a和b参数必须是number类型或者string类型，但并没有办法来限制a和b必须是同一个类型。这个时候我们可以使用泛型来表示：

```js
function join<T> (a: T, b: T): string {
  return `${a}${b}`
}
console.log(join(1, 2))     // 12    
console.log(join('1', '2')) // 12
console.log(join(1, '2'))   // 编译报错
```

:::tip
注意：我们在调用join()函数并进行传参的时候，TypeScript会自动帮我们推断参数的类型，以上三行代码也可以像如下方式进行撰写：
:::

```js
console.log(join<number>(1, 2))     // 12    
console.log(join<string>('1', '2')) // 12
console.log(join<number>(1, '2'))   // 编译报错
```

:::tip
泛型可以是多个的。
:::

```js
function join<T, P> (a: T, b: P): string {
  return `${a}${b}`
}
console.log(join(1, 2))     // 12    
console.log(join('1', '2')) // 12
console.log(join(1, '2'))   // 12
```

代码分析：在以上的案例中，join方法接受2个泛型类型，其中参数a:T，参数b:p，因此console.log(join(1, '2'))会正确被编译并输出12。

### 类中的泛型

泛型同样可以使用在类中。

```js
class CreateClass<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let createNumber = new CreateClass<number>()
createNumber.add = function (x, y) {
  return x + y
}
let createString = new CreateClass<string>()
createString.add = function (x, y) {
  return `${x}${y}`
}
console.log(createNumber.add(1, 2))     // 3
console.log(createString.add('1', '2')) // 12
```

:::tip
在TypeScript@2.3+以后的版本，我们可以为泛型提供一个默认值。
:::

```js
class CreateClass<T = number> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let createNumber = new CreateClass()
createNumber.add = function (x, y) {
  return x + y
}
let createString = new CreateClass<string>()
createString.add = function (x, y) {
  return `${x}${y}`
}
console.log(createNumber.add(1, 2))     // 3
console.log(createString.add('1', '2')) // 12
```

代码分析：在CreateClass类的定义部分，我们为泛型提供了一个默认值number，因此我们在实例createNumber初始化的时候就可以不用传递number了。

### 接口中的泛型

像在类中一样，泛型可以存在于接口中。

```js
interface CreateArray {
  <T>(length: number, value: T): T[]
}
let createArrayFunc: CreateArray = function (length, value) {
  let result = []
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result
}
console.log(createArrayFunc(3, 'AAA'))  // ['AAA', 'AAA', 'AAA']
console.log(createArrayFunc(2, true))   // [true, true]
```

### 声明合并

如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型。 声明合并，我们在上面已经有实例的案例了，那就是函数的重载。

```js
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

当重复定义同一个接口时，会进行接口合并：

```js
interface Person {
  name: string,
  address: string
}
interface Person {
  name: string,
  age: 23
}
// 相当于
interface Person {
  name: string,
  address: string,
  age: 23
}
```

当合并的属性类型不一致时，会报错。

```js
interface Person {
  name: string,
  address: string
}
interface Person {
  // 报错，name类型冲突
  name: number,
  age: 23
}
```

### 命名空间

在我们以上所有案例中，我们编写的代码大多数是运行在Node环境下的，接下来我们来编写一些代码，让其在浏览器环境中运行。

首先我们需要创建如下的项目以及目录结构：

```js
|-- TypeScript
|   |-- dist
|   |   |-- index.html
|   |-- src
|   |   |-- page.ts
|   |-- tsconfig.json
```

其中，tsconfig.json的配置如下：

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",                
    "outDir": "./dist",
    "rootDir": "./src", 
    "strict": true,
    "esModuleInterop": true
  }
}
```

在配置完tsconfig.json以后，我们来撰写page.ts中的代码：

```js
class Header {
  constructor () {
    let dom = document.createElement('div')
    dom.innerHTML = 'Header'
    document.body.append(dom)
  }
}
class Content {
  constructor () {
    let dom = document.createElement('div')
    dom.innerHTML = 'Content'
    document.body.append(dom)
  }
}
class Footer {
  constructor () {
    let dom = document.createElement('div')
    dom.innerHTML = 'Footer'
    document.body.append(dom)
  }
}
class Page {
  constructor () {
    new Header()
    new Content()
    new Footer()
  }
}
```

编写完以上代码后，我们运行如下命令：

###  编译`src`下的`*.ts`文件到`dist`目录下

```js
$ tsc
```

随后我们在`dist/index.html`中引用我们刚刚编译的代码：

```js
<script src="./page.js"></script>
<script>
  new Page()
</script>
```

当我们在浏览器中运行index.html文件后，我们可以在浏览器下正确的看到我们想要的输出内容。

当我们在打开page.js文件时，我们可以发现：
 
<img src="./assets/1633739e7.png" style="display: flex; margin: auto; width: 100%;"/>

在全局作用域环境下，我们一次性引入了四个全局变量：Header、Content、Footer和Page。要解决这个问题，我们可以使用namespace命令空间：

```js
// 使用命名空间包裹我们的代码并把Page类导出出去
namespace Home {
  class Header {
    constructor () {
      let dom = document.createElement('div')
      dom.innerHTML = 'Header'
      document.body.append(dom)
    }
  }
  class Content {
    constructor () {
      let dom = document.createElement('div')
      dom.innerHTML = 'Content'
      document.body.append(dom)
    }
  }
  class Footer {
    constructor () {
      let dom = document.createElement('div')
      dom.innerHTML = 'Footer'
      document.body.append(dom)
    }
  }
  export class Page {
    constructor () {
      new Header()
      new Content()
      new Footer()
    }
  }
}
```

随后，再次使用tsc命令重新编译代码，编译后的page.js如下：

<img src="./assets/2f2eb95fe.png" style="display: flex; margin: auto; width: 100%;"/>

再次修改index.html中的代码，我们依然能够得到跟前面示例代码一样的输出结果：

```js
<script src="./page.js"></script>
<script>
  new Home.Page()
</script>
```