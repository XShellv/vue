<template>
    <div class="goodsinfo-container">
        <!--小球动画-->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter = "afterEnter">
            <div class="ball" v-show="flag" ref="ball"></div>
        </transition>

        <!--轮播图位置-->
        <div class="swipe">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <swipe :lunbo="goodsswipe" :isheightfull = true></swipe>
                    </div>
                </div>
            </div>
        </div>
        <!--购买选择位置-->
        <div class="goodschoice">
            <div class="mui-card">
                <div class="mui-card-header">{{goodsparams.title}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>市场价：<span class="market">{{goodsparams.market}}</span>&nbsp;&nbsp;
                            销售价：<span class="sell">{{goodsparams.sell}}</span></p>
                        <div class="amount">
                            <span>购买数量：</span>
                            <!--numbox位置-->
                            <numbox :numboxmax="goodsparams.store" @totalcount="getselectedcount"></numbox>
                            <div class="clickbtn">
                                <mt-button type="primary" size="small">立即购买</mt-button>
                                <mt-button type="danger" size="small"  @click="addtoshopcar" >加入购物车</mt-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--商品参数位置-->
        <div class="goodsinfo">
            <div class="mui-card">
                <div class="mui-card-header">商品参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>商品货号：{{goodsparams.number}}</p>
                        <p>库存情况：{{goodsparams.store}}件</p>
                        <p>上架时间：{{goodsparams.time}}</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="gointroduction">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="gocomment">商品评论</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import swipe from "../SwipeComponent.vue"
    import numbox from "../NumboxComponent.vue"
    export default{
        data(){
            return{
                goodsswipe:[],
                id:parseInt(this.$route.params.id),
                flag:false,
                goodsparams:[],
                totalcount:1,
            }
        },
        created(){
          this.getGoodsSwipe();
          this.getGoodsparams()
        },
        methods:{
            getGoodsSwipe(){
                this.$http.get("./././data/goodsinfo.json").then(function (data) {
                    if(data.body.status === 0){
                        data.body.message[this.id].urls.forEach(function (item) {
                            item.img = item.src;
                        });
                        this.goodsswipe = data.body.message[this.id].urls
                    }
                })
            },
            addtoshopcar(){
                this.flag = ! this.flag
                //在这里拼接出商品的信息，然后将数据进行提交至car当中
                var goodsinfo = {
                    id:parseInt(this.id),
                    count:this.totalcount,
                    price:this.goodsparams.sell,
                    selected:true,
                    title:this.goodsparams.title,
                    store:this.goodsparams.store,
                    src:this.goodsparams.src
                };
                this.$store.commit("addtocar",goodsinfo)
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                //实际情况就是，不同像素的设备他们的起始位置和终点位置不是确定的因此不能够将他们写死
                //这里需要得出小球距离左侧的x和顶部的y，以及目标位置距离左侧x和顶部的y。然后进行差值运算，
                //将运算的结果作为小球做动画的距离(getBoundingClientRect)
                var badge = document.getElementById("badge");
                var ball = this.$refs.ball;
                var x = badge.getBoundingClientRect().left - ball.getBoundingClientRect().left;
                var y = badge.getBoundingClientRect().top - ball.getBoundingClientRect().top;
                el.style.transform = `translate(${x}px,${y}px)`;
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done()
            },
            afterEnter(){
                this.flag = !this.flag;
            },
            getGoodsparams(){
                this.$http.get("./././data/goodsparams.json").then(function (data) {
                    if(data.body.status === 0){
                        this.goodsparams = data.body.message;
                    }
                });
                this.$http.get("./././data/goods.json").then(function (data) {
                    if(data.body.status == 0){
                        var item = {};
                        item = this.goodsparams;
                        item.src = data.body.message[this.id].src;
                        this.goodsparams = item;
                    }
                })
            },
            gointroduction(){
                this.$router.push({"name":"GoodsdescComponent"})
            },
            gocomment(){
                this.$router.push({"name":"Goodscomment"})
            },
            getselectedcount(count){
                this.totalcount = count;
            },
        },
        components:{
            swipe,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container{
        position: relative;
        background-color: #eee;
        .swipe{
            text-align: center;
        }
        .goodschoice{
            .market{
                text-decoration: line-through;
            }
            .sell{
                color: red;
                font-size: 18px;
                font-weight: bold;
            }
            .clickbtn{
                margin: 15px 0;
            }
        }
        .goodsinfo{
            .mui-card-footer{
                display: block;
                button{
                    margin: 15px 0;
                }
            }
        }
        .ball{
            position: absolute;
            z-index: 99;
            left: 152px;
            top: 340px;
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
        }
    }
</style>