<template>
<div class="shop" v-for="(item,key,i) in mxz">
                    <div class="tit">
                        <input type="radio" name="" value="">
                        <i class="iconfont icon-fangdajing"></i>
                        <p>{{item.name}}</p>
                        <i class="iconfont icon-fangdajing"></i>
                    </div>
                    <div class="brand" v-for="dom in item.shop">
                        <input type="radio" name="" value="">
                        <dl>
                            <dt><img v-bind:src=dom.img alt=""></dt>
                            <dd>
                                <div class="shop_info div">
                                    <p>{{dom.info}}</p>
                                    <i style="width:40px;" @click="fn($event)">编辑</i>
                                    <div class="shanchu">
                                        <div class="queren" @click="fns($event),$store.commit('sum')">
                                            确认
                                        </div>
                                        <div class=" mxz ">
                                            <span @click="$store.commit( 'ajj',{name:dom.i}) ">-</span>
                                            <span>{{dom.id}}</span>
                                            <span @click="$store.commit( 'add',{name:dom.i}) ">+</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="prices ">
                                    <p class="price ">{{dom.price}}<b>{{dom.prices}}</b></p>
                                    <span>{{dom.id}}</span>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>

</template>
<script>
    export default {

    }
</script>
<style>

</style>