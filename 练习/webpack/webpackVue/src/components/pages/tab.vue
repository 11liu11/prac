<template>
    <div>
      这里是tab页面
      <button @click="fn">点击</button>
      <router-link :to="{path:'/tab/a'}">孩子</router-link>
      <router-view ></router-view>
    </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                name: "zhangsan"
            }
        },
        components: {

        },
        methods: {
            fn() {
                // this.$router.replace({
                //     name: "list"
                // })
                // this.$router.go(1)
                // this.$router.addRoutes([{
                //     name: "bb",
                //     path: "/bb/:id",
                //     component: {
                //         template: "<div>bb</div>",
                //         mounted() {
                //             console.log(this.$route.params)
                //         },
                //         watch: {
                //             $route() {
                //                 this.$router.go(0)
                //             }
                //         }
                //     }
                // }])
                this.$router.push({
                    path: "/bb/1"
                })
                var _this = this
                setTimeout(function() {
                    _this.$router.push({
                        path: "/bb/2"
                    })
                }, 2000)
            }
        },
        mounted() {
            console.log(this.$router)
            console.log(this.$route == this.$router.currentRoute)
            console.log("tab")
        }
    }
</script>
<style>

</style>