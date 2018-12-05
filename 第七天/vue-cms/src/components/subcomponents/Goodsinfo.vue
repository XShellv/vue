<template>
    <div class="goodsinfo-container">
        <!--小球动画-->
        <transition
        @before-enter = "beforeEnter"
        @enter = "enter"
        @after-enter = "afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>

        <!--这里是放置轮播的区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :lunbo="goodsinfolist" :isheightfull=true :iswidthfull=false></swipe>
                </div>
            </div>
        </div>

        <!--放置价格区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsparams.title}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p class="price">
                            市场价：<del>{{goodsparams.market}}</del>&nbsp;&nbsp;
                            销售价：<span class="sell">{{goodsparams.sell}}</span>
                        </p>
                        <div class="amount">
                            <span style="color: #8f8f94">购买数量：</span>
                            <numbox @getcount ="getselectedcount" :max="goodsparams.store"></numbox>
                        </div>
                        <div class="sell-btn">
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addtoshopcar">加入购物车</mt-button>
                        </div>
                    </div>
                </div>
            </div>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        商品货号：{{goodsparams.number}}
                    </p>
                    <p>
                        库存情况：{{goodsparams.store}}件
                    </p>
                    <p>
                        上架时间：{{goodsparams.time}}
                    </p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="godesc">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="gocomment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import swipe from "./swipe.vue"
    import numbox from "./num-box.vue"
    export default{
        data(){
            return{
                goodsinfolist:[],
                goodsparams:{},
                id:parseInt(this.$route.params.id),
                ballflag : false,
                selectedCount:1
            }
        },
        created(){
            this.getgoodsinfo();
            this.getgoodsparams()
        },
        methods:{
            getgoodsinfo(){
                this.$http.get("././data/goodsinfo.json").then(function (data) {
                    if(data.body.status == 0){
                        data.body.message[this.id].urls.forEach(item => {
                            item.img = item.src;
                        })
                        this.goodsinfolist = data.body.message[this.id].urls;
                    }
                })
            },
            getgoodsparams(){
                this.$http.get("././data/goodsparams.json").then(function (data) {
                    if(data.body.status == 0){
                        this.goodsparams = data.body.message;
                    }
                })
            },
            godesc(){
                this.$router.push({name:"Goodsdesc",params:{id:this.id}})
            },
            gocomment(){
                this.$router.push({name:"Goodscomment",params:{id:this.id}})
            },
            //小球加入购物车动画
            // 1.设置小球的初始状态为隐藏，每次点击都改变小球的显示状态
            // 2.小球动画为半场动画，动画的起始位置translate(0,0),终点位置位置为translate(88px,231px)
            // 3.但是，小球的位置不能够写死。应该拿会标的left值减去小球的left值，和会标的top值减去小球的top值来计算

            addtoshopcar(){
                this.ballflag = !this.ballflag;
                //拼接处一个要保存到store中car的json
                var goodsinfo = {
                    id:this.id,
                    count:this.selectedCount,
                    price:this.goodsparams.sell,
                    selected:true,
                    title:this.goodsparams.title,
                };
                this.$store.commit('addToCar',goodsinfo)
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                var ballpos = this.$refs.ball.getBoundingClientRect();
                var badgepos = document.getElementById("badge").getBoundingClientRect();
                var x = badgepos.left-ballpos.left;
                var y = badgepos.top - ballpos.top;
                el.style.transform = `translate(${x}px,${y}px)`;
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                this.ballflag = ! this.ballflag;
            },
            getselectedcount(count){
                this.selectedCount = count;
            }
        },
        props:[],
        components:{
            swipe,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container{
        overflow: hidden;
        background-color: #eee;
        .sell-btn{
            margin: 15px 0;
        }
        .price{
            .sell{
                color: red;
                font-weight: bold;
                font-size: 18px;
            }
        }
        .mui-card-footer{
            display: block;
            button{
                margin: 15px 0;
            }
        }
        .ball{
            width: 15px;
            height: 15px;
            top: 390px;
            left: 150px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
        }
    }
</style>