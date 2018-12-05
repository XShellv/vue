<template>
    <div class="shoplist-container">
        <div class="mui-card" v-for="(item,i) in selected" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="item">
                        <mt-switch v-model="$store.getters.getgoodsboolean[item.id]" @change="switchchanged(item.id,$store.getters.getgoodsboolean[item.id])"></mt-switch>
                        <img :src="item.src" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">{{item.price}}</span>
                                <!--shopcarnumbox组件位置-->
                                <shopcarnumbox :val="item.count" :numboxmax="item.store" :id="item.id"></shopcarnumbox>
                                <a href="" @click.prevent="delgoodsitem(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="selected">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getselectedtotal["count"]}}</span>件，总价：<span class="red">¥{{$store.getters.getselectedtotal["total"]}}</span></p>
                    </div>
                    <mt-button type="danger" size="small">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import shopcarnumbox from "./subComponents/ShopcarnumboxComponent.vue"
    export default {
        data(){
            return{
                selected : this.$store.getters.getgoodsparams
            }
        },
        created(){

        },
        methods:{
            delgoodsitem(id,index){
                this.selected.splice(index,1);
                this.$store.commit("getgoodsremoved",id)
            },
            switchchanged(id,selected){
                var o = {};
                o.id = id;
                o.selected = selected;
                this.$store.commit("getgoodsselected",o)
            }

        },
        components:{
            shopcarnumbox
        }
    }
</script>
<style lang="scss" scoped>
    .shoplist-container{
        overflow: hidden;
        background-color: #eee;
        .mui-card-content-inner{
            align-items: center;
        }
        .item{
            display: flex;
            justify-content: space-between;
            img{
                height: 60px;
            }
            h1{
                font-size: 14px;
                margin: 0;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                padding-left: 5px;
                .price{
                    color: red;
                    font-weight: bold;
                }
                P{
                    margin: 0;
                }
            }
        }
        .mui-card-content-inner{
            display: flex;
            justify-content: space-between;
            .red{
                color: red;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
</style>