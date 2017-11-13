class Lasttime {
    constructor(currentTime, endTime) {

        this.lastcomputed = null
        this.currentTime = new Date(currentTime).getTime()
        this.endTime = new Date(endTime).getTime()
        this.cha = this.endTime - this.currentTime
    }
    Lasttime() {
        this.cha -= 1000
        var _this = this
        let day = Math.floor(_this.cha / 1000 / 60 / 60 / 24)
        let hour = Math.floor(_this.cha % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let mine = Math.floor(_this.cha % (1000 * 60 * 60) / (1000 * 60))
        let sec = Math.floor(_this.cha % (1000 * 60) / (1000))
        this.lastcomputed = day + ":" + hour + ":" + mine + ":" + sec
        return this.lastcomputed
    }

}

var time = new Lasttime("2017/9/1 15:00:00", "2017/9/1 20:00:00")

setInterval(function() {
    console.log(time.Lasttime())
}, 1000)