// var a = "fn"

// class aa {
//     constructor() {
//             this.name = 1
//         }
//         [a]() {
//             console.log(this.name)
//         }
// }
// // function aa(){
// //   this.name=1
// // }
// var objextents = {
//     fnname() {
//         console.log(4)
//     }
// }
// console.log(Object.getOwnPropertyDescriptor(aa.prototype, "fn"))
// Object.assign(aa.prototype, objextents)
// console.log(typeof(aa))
// var obj = new aa()
// obj.fnname()
//     // console.log(obj.__proto__)
// console.log(aa === aa.prototype.constructor)
// obj.fn()


// var bb = function() {
//     this.name = 1
//     this.fn = function() {
//         console.log(2)
//     }
// }

// var obj2 = new bb()

// var oo = {

//     fnn() {
//         console.log(33)
//     }

// }

// class aa {
//     constructor() {
//         return oo
//     }

//     fn() {
//         console.log(2)
//     }
// }

// var obj = new aa()

// obj.fnn()


// class aa {
//     constructor() {
//         this.name = 1
//             // this.fn=function(){}
//     }
//     names() {
//         return 2
//     }
//     fn() {
//         console.log(this.names())
//         console.log(this.name)
//     }
// }


// aa.prototype.fn()
// var obj = new aa()
// var obj2 = new aa()

// obj.__proto__.name = function() {
//     return 4
// }

// obj2.fn()



// class aa {
//     constructor() {
//         this.name = 1
//             // this.fn = this.fn.bind(this)
//         this.fn = () => console.log(this.name)
//     }
//     fn() {
//         console.log(this.name)
//     }
// }


// var obj = new aa()
//     // var obj = {
//     //         name: 1,
//     //         fn: function() {
//     //             console.log(this)
//     //             console.log(this.name)
//     //         }.bind(this)
//     //     }
//     // obj.fn()
//     // var fn = obj.fn
// let { fn } = obj

// fn()



// class aa {
//     constructor() {
//         this.names = 2
//     }
//     static fn() {
//         console.log(this.name)
//     }
//     fnn() {
//         this.fn()
//     }
// }
// class child extends aa {

// }
// child.fn()
// var obj = new aa()
// obj.fn()

// obj.fnn()


// class parent {
//     // constructor() {
//     //     console.log(new.target)
//     // }
//     inarr() {

//     }
// }

// Object.assign(Array.prototype, parent.prototype)

// class aa extends parent {
//     constructor() {
//         super()
//     }

// }
// // aa.prototype.()
// var oboj = new aa()


class aa {
    constructor() {
        this.name = 1
    }
    fn() {
        console.log(this.name)
    }

}

class child extends aa {
    constructor(x, y) {
        super(x, y)

        // aa.prototype.constructor.bind(this)()
        this.x = x;
        this.y = y;
        super.ss = function() {
            console.log(111)
        }
    }
    childfn() {
        this.fn()

    }
}


var obj = new child(1, 2)
obj.ss()


// function a() {

// }

// function b() {

// }
// b.prototype = a

// var objs = new b()