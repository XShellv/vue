<template>
    <div>
        <!--图片滚动列表-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!--这里放置真实显示的DOM内容-->
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in picturelist" :key="item.id">
                       {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <router-link :to="'/home/picturelist/pictureinfo/'+item.id" v-for="item in pictureinfo" :key="item.id" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.content }}</div>
                </div>
            </router-link>
        </ul>
    </div>

</template>
<script>
//    import mui from  "../../lib/mui/js/mui.min.js"
    export default{
        data(){
            return{
                picturelist:[],
                pictureinfo:[]
            }
        },
        created(){
            this.getpicturelist();
            this.getpictureinfo()
        },
//        mounted(){
//            mui('.mui-scroll-wrapper').scroll({
//                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
//            });
//        },
        methods:{
            getpicturelist(){
                this.$http.get("../../data/picturelist.json").then(function (data) {
                    if(data.body.status == 0){
                        this.picturelist = data.body.list;
                        this.picturelist.unshift({"id":0,"title":"全部"})
                    }

                })
            },
            getpictureinfo(){
                this.$http.get("../../data/pictureinfo.json").then(function (data) {
                    if(data.status == 200){
                        this.pictureinfo = JSON.parse(data.bodyText).list;
                    }
                })
            }
        },
    }
</script>
<style lang="scss" scoped>
    *{
        touch-action: pan-y;
    }
    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
    img {
        width: 100%;
        vertical-align: middle;
    }
    img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
    .info-title {
        font-size: 14px;
    }
    .info-body {
        font-size: 13px;
    }
    }
    }
    }
</style>