<template>
    <div class="home-container">
        <!--滚动动画-->
        <swipe :lunbo="SwipePicture" iswidthfull="true"></swipe>

        <!--grid区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picture">
                <img src="../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu6.png" alt="">
                <div class="mui-media-body">Phone</div></a></li>
        </ul>
    </div>
</template>
<script>
    import swipe from "./subComponents/SwipeComponent.vue"
    export default{
        data(){
            return{
                SwipePicture :[]
            }
        },
        created(){
            this.getSwipePicture()
        },
        methods:{
            //获取图片swipe图片
            getSwipePicture(){
                this.$http.get("./data/lunbo.json").then(function (data) {
                    if(data.body.status == 0){
                        this.SwipePicture = data.body.images
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
    .home-container{
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
    }

</style>
