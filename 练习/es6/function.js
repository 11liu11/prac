// var fn = function(a = 2) {
//     // let a = 2
//     console.log(a)
// }

// fn()


// var fn = function({ a, b, c: c = 4 }, ) {
//     // let a = 2
//     console.log(a, c)
// }

// fn({ a: 1, b: 2, c: undefined })

// var fn = function() {
//     console.log(this)
// }
// window.fn()

// let foo = 'outer';

// function bar(func = function() { return foo }) {
//     let foo = 'inner';

//     console.log(func());
//     console.log(foo)
// }

// bar(); // outer

// var arr = [5]
// var fn = function(...obj) {
//     console.log(obj)
//     arr.push(...obj)

// }

// fn(1, 2, 3)
// console.log(arr)


// var aa = (a, c) => {
//     console.log(a)
// }

// aa(2, 3)

// var aa = (...rest) => rest

// console.log(aa(1, 2, 3))


// var aa = (...rest) => this

// console.log(aa(1, 2, 3))


var hand = function() {
    this.init = () => {
        console.log(this)
    }
}
var aa = new hand()

aa.init()