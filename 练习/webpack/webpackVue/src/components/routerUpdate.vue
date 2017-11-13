<template>
    <div>
      {{this.name}}
</div>
</template>
<script>
    export default {
        name: "directive",
        data() {
            return {
                name: ""
            }
        },
        created() {
            setTimeout(() => {
                this.name = 1
            }, 2000)
        },
        // beforeRouteEnter(to, from, next) {
        //     console.log("beforeRouteEnter")
        //     next()
        // },
        // watch: {
        //     $route() {
        //         this.$router.go(0)
        //     }
        // },
        // beforeRouteUpdate(to, from, next) {
        //     console.log(to)
        //     console.log(from)
        //     console.log(next)
        //     console.log("beforeRouterUpdate")
        //         // this.$router.go(0)
        // },
        // beforeRouteLeave(to, from, next) {
        //     console.log("beforeRouteLeave")
        //     next()
        // },
        // mounted() {
        //     this.name = this.$route.params.id
        // }


    }
</script>
<style>

</style>