var promiseFn1 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(1)
        }, 3000)
    })
}
var promiseFn2 = function(i) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // console.log(i)
            // resolve(2)
            throw new Error('test');
            // reject(2)
        }, 1000)
    })
}
var promiseFn3 = function(i) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                // console.log(i)
                resolve(3)
            }, 6000)
        })
    }
    // var datas = {}
    // promiseFn1().then(function(data) {
    //     datas.fn1 = data
    //     return promiseFn2(data)
    // }).then(function(data) {
    //     // console.log(data)
    //     datas.fn2 = data
    //     return promiseFn3(data)
    // }).then(function(data) {
    //     datas.fn3 = data
    //     console.log(data)
    //     console.log(datas)
    // })


// Promise.all([promiseFn1(), promiseFn2(), promiseFn3()]).then(function(data) {
//     console.log(data)
// }).catch(function(err) {
//     console.log(err + "$")
// })


// Promise.race([promiseFn1(), promiseFn2(), promiseFn3()]).then(function(data) {
//     console.log(data)
// }).catch(function(err) {
//     console.log(err + "$")
// })

var obj = {
    name: 1
}

// obj.then(function(){

// })

// Promise.resolve(obj).then(function(data) {
//     console.log(obj)
// })
// Promise.reject(obj).catch(function(data) {
//     console.log(obj)
// })




// setTimeout(function() {

//     setTimeout(function() {
//         console.log()
//     }, 1000)
// }, 1000)