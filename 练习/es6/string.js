// var str = "fdsfsdfe"
// console.log(str.includes("a"))
// console.log(str.startsWith("d"))
//     // console.log(str.repeat(-1))
// console.log(str.repeat("2"))
// console.log(str)


// var str = `<div>${}\` 士大夫十分\`</div>`


// console.log(Number.isFinite(Math.PI))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite("SFSD"))

// console.log(Number.isNaN(NaN))

// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))

// console.log(parseInt("2b"))
// console.log(Math.trunc("2b"))
// console.log(Math.trunc(true))
// console.log(Math.trunc(NaN))
// console.log(Math.trunc(null))
// console.log(Math.trunc(""))
// console.log(Math.trunc(undefined))


var objs = {
    a: 1,
    b: {
        ba: 3,
        bb: {
            bba: 5,

        }
    }
}
var $html = ""
var fn = function(obj, _html) {
    var sechtml = ""
    if (_html != undefined) {
        sechtml = _html
    }
    var state = true
    for (var i in obj) {
        console.log()
        if (typeof(obj[i]) == 'object') {
            state = false
        }

    }
    if (!state) {
        console.log(11)
        sechtml += `<div>`
        for (var i in obj) {
            if () {

            }
        }
        sechtml += `</div>`
    } else {
        sechtml += `<div>${obj[i]}</div>`
    }
    if (_html != undefined) {
        $html += sechtml
    }

}
fn(objs)
console.log($html)