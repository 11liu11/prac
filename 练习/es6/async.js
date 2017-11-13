// var fn = function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(1)
//         }, 1000)

//     })
// }

// var asyncReadFile = async function() {
//     try {
//         var f1 = await fn();
//         var f2 = await Promise.resolve(2);
//     } catch (err) {

//     }


//     return { f1, f2 }
// };
// asyncReadFile().then(function(data) {
//     console.log(data)
// })

// fetch("/api", { method: "get", params: { id: 1 } }).then(function(data) {

// })

// async function f() {
//     try {
//         await Promise.reject('出错了');
//     } catch (e) {
//         console.log(e + "内部")
//     }
//     return await Promise.resolve('hello world');
// }
// f().then(v => console.log(v))
//     .catch(e => console.log(e + "外部"))


class Square {
    constructor(length) {
        this.fn = function() {}
    }

    methodName() {

    }
}


Object.assign(Square.prototype, {
    meta() {

    },
    go() {

    }
})
console.log(Square)
console.log(Object.keys(Square.prototype))