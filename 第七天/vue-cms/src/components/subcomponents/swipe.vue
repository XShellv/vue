<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbo" :key="item.id">
                <img :src="item.img" alt="" :class="{widthfull:iswidthfull,heightfull:isheightfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        methods:{},
        props:["lunbo","iswidthfull","isheightfull"]
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        text-align: center;
        height: 200px;
    }
    .widthfull{
        width: 100%;
    }
    .heightfull{
        height: 100%;
    }
</style>