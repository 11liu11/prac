<template>
    <div class="wrap" id="wrap">
        <header>
            <h1 class="title">购物车 <small>（102）</small></h1>
            <a href="javascript:;" class="bianji">编辑</a>
        </header>
        <section>
            <div class="content">
                <div class="info">
                    <i class="iconfont icon-fangdajing"></i>
                    <span>我的天猫超市卡可用余额：79.8元，在tainmaoAPP可使用超市结算哦!</span>
                    <i class="iconfont icon-fangdajing"></i>
                </div>
                




            </div>
        </section>
        <footer>
            <div class="num ">
                <div class="left ">
                    <span><input type="radio " name=" " value=" ">全选</span>
                    <span>合计：<b></b></span>
                </div>
                <div class="right ">结算（0）</div>
            </div>
            <div class="foot">
                <a href="javascript:; ">
                    <i class="iconfont icon-fangdajing "></i> 首页
                </a>
                <a href="javascript:; ">
                    <i class="iconfont icon-fangdajing "></i> 首页
                </a>
                <a href="javascript:; ">
                    <i class="iconfont icon-fangdajing "></i> 首页
                </a>
                <a href="javascript:; ">
                    <i class="iconfont icon-fangdajing "></i> 首页
                </a>
                <a href="javascript:; ">
                    <i class="iconfont icon-fangdajing "></i> 首页
                </a>
            </div>
        </footer>
    </div>
</template>
<script>
    import {
        mapActions
    } from "vuex"
    export default {
        name: "index",
        created() {

            this.getdataA(this)
        },
        methods: {
            ...mapActions(["getdataA"]

            )
        }

    }
</script>
<style>

</style>