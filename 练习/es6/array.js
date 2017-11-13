// var arr = [1, 2, 3, 4]
// var arr2 = [5, 6]
// arr.push(5, 6)
// console.log(arr.concat(arr2))
// console.log(arr)

// var aa = function() {
//     console.log(arguments)
//     console.log(Array.from(arguments))
//         // Array.from(arguments).forEach(function(i) {
//         //     console.log(i)
//         // });
//     var arr = [...arguments]
//     arr.forEach(function(i) {
//         console.log(i)
//     });
// }
// aa(1, 2, 3)

// var obj = {
//     0: 1,
//     1: 2,
//     length: 4
// }
// var arr = [...obj]
// console.log(arr)
// console.log(Array.from(obj, function(i) {
//     console.log(1)
//     return i + 1
// }))


// var arr = [1]
// console.log(Array.of(1))

// var arr = [1, 2, 3, 4, 2]

// console.log(arr.find(function(i) {
//     console.log(i)
//     return i == 2
// }))

// var arr = [
//     1, 2, 3
// ]
// for (let i of arr.entries()) {
//     console.log(i)
// }
// console.log(entries(obj))

// var arr = [1, , 3]
// console.log(Array.from(arr))
// arr.forEach(function(i) {
//     console.log(i)
// })


// var arr = [1, , 2]
// console.log(arr.find(function(i) {
//     return i == undefined
// }))