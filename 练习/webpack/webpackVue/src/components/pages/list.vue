<template>
    <div>
      <ul>
          <!--<router-link v-for="i in list" :to="{name:'detail',params:{id:i}}" tag="li">{{i}}</router-link>-->
           <router-link v-for="i in list" :to="{path:'/detail',params:{id:i},query:{id:i}}" tag="li">{{i}}</router-link>
      </ul>
    </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                list: [
                    1, 2, 3, 4
                ]
            }
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