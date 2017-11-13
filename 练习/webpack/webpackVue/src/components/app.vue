<template>
    <div>   
        <span>示范点</span>
        <router-view ></router-view>
    </div>
</template>
<script>
    export default {
        name: "tab",
        data() {
            return {
                tab: "这里是一个tab页"
            }
        }
    }
</script>
<style>

</style>