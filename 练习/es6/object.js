// var aa={
//   name:()=>{

//   }
// }


// var name = function() {
//     console.log(2)
// }
// var aa = {
//     name
// }
// console.log(aa)


// obj['a' + 'bc'] = 123;

// obj.abc = 124


// 报错
// var foo = 'bar';
// var bar = 'abc';
// var baz = { bar };


// var obj = {
//     a: 1
// }
// var obj1 = {
//     [obj]: 1
// }
// console.log(obj1)

// var obj = { name: 1 }
// var obj2 = obj

// console.log(Object.is(obj, obj2))


// var obj = { name: 1 }
// var objs = { age: 34 }

// console.log(Object.assign(obj, objs))
// console.log(obj)
// console.log(objs)

// var news = Object.assign({}, obj)
// console.log(Object.is(news, obj))

// var aa = Symbol("1") = function() {

// }
// var bb = Symbol("1")

// this[aa]()

// aa[Symbol("1")]()


// var obj = {
//     name: 1,
//     age: {
//         a: 1
//     }

// }
// Object.defineProperty(obj, "name", { enumerable: false })
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))
// var newsobj = Object.assign({}, obj)

// obj.age.a = 3


// console.log(newsobj.age.a)

// var arr = [1, 2, 3]

// console.log(Object.assign({}, arr))


// var obj = {
//     name: 1,
//     age: {
//         a: 1
//     }

// }
// Object.defineProperty(obj, "name", { enumerable: false })
// console.log(Object.keys(obj))


// function aa() {
//     this.name = 1
// }

// function bb() {
//     this.age = 2
// }

// bb.__proto__ = aa

// var $a = new bb()


// var obj1 = {
//     name: 1
// }

// $a.prototype = obj1

// console.log($a)

// var obj2 = {
//     age: 1
// }
// Object.setPrototypeOf(obj2, obj1)

// console.log(Object.values(obj2))
//     // obj2.prototype = obj1
// console.log(obj2.name)


// console.log(Object.values("sfsdfsdfsd"))


// var obj = { name: 21, age: 23, addr: "bejing" }

// let { name, ...a } = obj
// console.log(name, a)


var obj = { name: 21, age: 23, addr: { a: 1 } }

// let { name, ...a } = obj
let { name, addr } = obj

obj.addr.a = 3;
// console.log(name, a)
// console.log(addr.a)
console.log({...obj })