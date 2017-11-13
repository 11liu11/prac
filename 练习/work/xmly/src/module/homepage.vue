<template>
    <div class="mainbox">
        <div class="nav">
            <router-link tag="div" :to="{name:'home1'}" class="nav_list">
                <p>热门</p>
            </router-link>
            <router-link tag="div" :to="{name:'home2'}" class="nav_list">
                <p>分类</p>
            </router-link>
            <router-link tag="div" :to="{name:'home3'}" class="nav_list">
                <p>精品</p>
            </router-link>
            <router-link tag="div" :to="{name:'home4'}" class="nav_list">
                <p>广播</p>
            </router-link>
            <router-link tag="div" :to="{name:'home5'}" class="nav_list">
                <p>直播</p>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    // export default{
    //     data(){
    //         return{
    //             name:"1111"
    //         }
    //     },
    //     methods:{

    //     }
    // }
</script>







