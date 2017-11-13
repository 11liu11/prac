<template>
    <div>
      这里是detail页面
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
        created() {
            // console.log(this.$route)
            // console.log(this.$route.params.id)
            console.log(this.$router.app)
        },
        components: {

        },
        mounted() {
            console.log("list")
        }
    }
</script>
<style>

</style>