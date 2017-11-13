<template>
    <div>
        <template v-if="state">
              <p>这里是router页面</p>
            <span>{{obj.name}}</span>
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
        </template>
<template v-else>
           <div>加载中请等待</div>
        </template>

</div>
</template>
<script>
    export default {
        name: "directive",
        data() {
            return {
                state: false,
                name: "lisi",
                obj: null
            }
        },
        beforeCreate() {
            console.log("beforeCreate")
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter")
            setTimeout(() => {
                next((vm) => {
                    vm.state = true
                    vm.obj = {
                        name: "wangwu"
                    }
                    console.log(vm)
                })
            }, 2000)

        },
        beforeRouteUpdate() {
            console.log("beforeRouterUpdate")
        },
        mounted() {
            // setTimeout(function() {
            //     // this.$router.go(0)
            // }.bind(this), 6000)

        }


    }
</script>
<style>

</style>