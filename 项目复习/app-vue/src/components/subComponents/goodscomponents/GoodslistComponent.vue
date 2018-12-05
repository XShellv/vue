<template>
    <div class="goodslist-container">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goodsdetail(item.id)">
            <img :src="item.src" alt="">
            <h1>小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span>￥799</span><span>￥899</span>
                </p>
                <p class="sell">
                    <span>热卖中</span><span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                goodslist:[]
            }
        },
        created(){
            this.getGoodslist()
        },
        methods:{
            getGoodslist(){
                this.$http.get('./././data/goods.json').then(function (data) {
                    if(data.body.status === 0){
                        this.goodslist = data.body.message;
                    }
                })
            },
            //编程式路由导航
            goodsdetail(id){
                this.$router.push({name:"GoodsinfoComponent",params:{id}})
            }
        },

    }
</script>

<style lang="scss" scoped>
    .goodslist-container{
        display:flex;
        justify-content:space-between;
        flex-wrap: wrap;
        padding:7px;
        .goods-item{
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 0 8px #ccc;
            min-height: 258px;
            padding: 2px;
            width:49%;
            border:1px solid #ccc;
            margin:3px 0;
            img{
                width: 100%;
            }
            h1{
                font-size: 14px;
            }
            .info{
                background-color: #EEEEEE;
                .price{
                    margin: 0;
                    font-size:12px;
                    span:first-child{
                        color: red;
                        font-weight: bold;
                    }
                    span:last-child{
                        text-decoration: line-through;
                    }
                }
                .sell{
                    margin: 0;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>