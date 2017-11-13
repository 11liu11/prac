<template>
    <div>
      <!--{{name}}
      <tab></tab>-->
      <!--<directive></directive>-->
      <subtest></subtest>
    </div>
</template>
<script>
    // import Tab from "./tab.vue"
    // import directive from "./directive.vue"
    import subtest from "./subtest.vue"
    export default {
        name: "index",
        data() {
            return {
                name: "zhangsan"
            }
        },
        components: {
            // tab: Tab,
            // directive: directive,
            subtest: subtest

        },
        mounted() {
            console.log(this)
            this.axios.get("/some/path").then(function(data) {
                console.log(data)
            })
        }
    }
</script>
<style>

</style>