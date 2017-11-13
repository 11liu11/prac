<template>
	<div class="box_lists">
        <template v-for="i in list">
            <!--<div tag="div" :to="{name:'classDetail',params:{con:i.name}}" class="list">-->
            <div class="list" @click="fn(i.name)">
                <span class='bg-blue'><i class='fa fa-fw fa-music'></i></span>
                <span>{{i.name}}</span>
            </div>
        </template>


</div>
</template>
<script>
    var arr = [{
        "name": "音乐"
    }, {
        "name": "历史"
    }, {
        "name": "情感生活"
    }, {
        "name": "人文"
    }, {
        "name": "付费精品"
    }, {
        "name": "脱口秀"
    }, {
        "name": "娱乐"
    }, {
        "name": "英语"
    }, {
        "name": "教育培训"
    }, {
        "name": "小语种"
    }, {
        "name": "健康养生"
    }, {
        "name": "头条"
    }, {
        "name": "音乐"
    }, {
        "name": "历史"
    }, {
        "name": "情感生活"
    }, {
        "name": "人文"
    }, {
        "name": "付费精品"
    }, {
        "name": "脱口秀"
    }, {
        "name": "娱乐"
    }, {
        "name": "英语"
    }, {
        "name": "教育培训"
    }, {
        "name": "小语种"
    }, {
        "name": "健康养生"
    }, {
        "name": "头条"
    }]
    export default {
        data() {
            return {
                list: arr
            }
        },
        methods: {
            fn(i) {
                console.log(i)
                this.$router.push({
                    path: "/classDetail/" + i
                })
            }
        }
    }
</script>