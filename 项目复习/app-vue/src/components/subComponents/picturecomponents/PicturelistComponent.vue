<template>
    <div class="picturelist-container">
        <!--顶部滑动区域-->
        <!--这里放置真实显示的DOM内容-->
        <div class="picturelist-container">
            <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id==0 ?  'mui-active' : '']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in Picturelist" :key="item.id">
                            {{item.title}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--图片列表区域-->
        <ul class="picturelist">
            <router-link v-for="item in Picturedetail" :key="item.id" :to="'/home/picture/pictureinfo/'+item.id" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <p class="info-body">{{item.content}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from "../../../lib/mui/js/mui.min"
    export default {
        data(){
            return{
                Picturelist:[],
                Picturedetail:[]
            }
        },
        created(){
            this.getPicturelistData();
            this.getPicturedetail()
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getPicturelistData(){
                this.$http.get("./././data/picturelist.json").then(function (data) {
                    if(data.body.status == 0){
                        this.Picturelist = data.body.list;
                        this.Picturelist.unshift({"id":0,"title":"全部"})
                    }
                })
            },
            getPicturedetail(){
                this.$http.get("./././data/pictureinfo.json").then(function (data) {
                    if(data.body.status == 0){
                        this.Picturedetail = data.body.list;
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
    .picturelist-container{
        .mui-scroll-wrapper{
        }
        .picturelist{
            list-style: none;
            padding:10px;
            margin:0;
            li{
                text-align: center;
                position: relative;
                margin-bottom: 10px;
                box-shadow: 0 0 9px #999;
                background-color: #ccc;
                img{
                    width:100%;
                    vertical-align: middle;
                }
                img[lazy="loading"] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }
                .info{
                    max-height: 84px;
                    position: absolute;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.4);
                    text-align: left;
                    color:#fff;
                    .info-title{
                        font-size: 14px;
                    }
                    .info-body{
                        color:#fff;
                        font-size: 13px;
                        margin: 0;
                    }
                }
            }
        }
    }
</style>