<template>
    <div class="goods-container">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="godetail(item.id)">
            <img :src="item.src" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥799</span>
                    <span class="old">￥899</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
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
            this.getgoodslist()
        },
        methods:{
            getgoodslist(){
                this.$http.get("././data/goods.json").then(function (data) {
                    if(data.body.status==0){
                        this.goodslist = data.body.message;
                    }
                })
            },
            godetail(id){
                this.$router.push(
                        {name:"Goodsinfo",params:{id}}
                );
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goods-container{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding:7px;
        .goods-item{
            min-height: 258px;
            width:49%;
            border:1px solid #ccc;
            box-shadow:0 0 8px #ccc;
            margin:3px 0;
            padding:2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width:100%;

            }
            h1{
                font-size: 14px;
            }
            .info{
                background-color:#eee;
                p{
                    padding:0;
                    margin:0;
                }
                .price{
                    font-size: 12px;
                    .new{
                        color: red;
                        font-weight: bold;
                    }
                    .old{
                        text-decoration: line-through;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>