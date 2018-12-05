<template>
    <div class="swipe-container">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in lunbo" :key="item.id">
                <img :src="item.img" alt="" :class="{isheightfull:isheightfull,iswidthfull:iswidthfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{

        },
        props:['lunbo','isheightfull','iswidthfull']
    }
</script>

<style lang="scss" scoped>
    .swipe-container{
        .mint-swipe{
            height: 200px;
        }
        .mint-swipe-item{
        }
        .isheightfull{
            height: 100%;
        }
        .iswidthfull{
            width: 100%;
        }
    }
</style>