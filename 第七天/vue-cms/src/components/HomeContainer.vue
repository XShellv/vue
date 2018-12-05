<template>
    <div>
        <!--滚动动画-->
        <swipe :lunbo ="lunbo" :isheightfull=false :iswidthfull=true></swipe>
        <!--六宫格改造-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../images/images2/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picturelist">
                <img src="../images/images2/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../images/images2/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../images/images2/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../images/images2/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../images/images2/menu6.png" alt="">
                <div class="mui-media-body">Phone</div></router-link></li>
        </ul>
    </div>
</template>
<script>
    import swipe from "./subcomponents/swipe.vue"
    export default{
        data(){
            return {
                lunbo:[]
            }
        },
        created(){
            this.getimages()
        },
        methods:{
            getimages(){
                this.$http.get("./data/lunbo.json").then(function (data) {
                    if (data.body.status==0){
                        this.lunbo = data.body.images
                    }
                })
            }
        },
        components:{
            swipe
        }
    }
</script>
<style lang="scss" scoped>
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: 0;
         .mui-table-view-cell{
            border: 0;
            .mui-media-body{
                font-size: 12px;
            }
        }
         img{
             width: 60px;
         }
    }
</style>
