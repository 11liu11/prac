export default function(arr) {

    var $html = ""
    arr.forEach(function(i) {
        $html += `<li>${i}</li>`
    })
    document.getElementById("ul").innerHTML = $html
}