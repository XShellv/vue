<template>
    <div class="shopcar-container">


        <!--商品列表区域-->
        <div class="mui-card" v-for="(item,i) in selected" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getgoodsselected[item.id]" @change="getselectedchange(item.id,$store.getters.getgoodsselected[item.id])"></mt-switch>
                    <img :src="item.src" alt="">
                    <div class="goodsinfo">
                        <h1>{{item.title}}}}</h1>
                        <p class="info">
                            <span class="price">{{item.price}}</span>
                            <shopcar :initcount="$store.getters.getgoodscount[item.id]" :goodsid="item.id"></shopcar>
                            <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner sel">
                    <div class="selectedinfo">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{$store.getters.gettotalcount.count}}</span>件，总价：<span class="red">¥{{$store.getters.gettotalcount.total}}</span></p>
                    </div>
                    <mt-button type="danger" size="small">去结算</mt-button>
                    <p></p>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import shopcar from "./subcomponents/shopcar-num-box.vue"
    export default{
        data(){
            return{
                selected:[],
                message:{}
            }
        },
        created(){
           this.getgoodslist()
        },
        methods:{
            getgoodslist(){
                this.$http.get("./data/goods.json").then(function (data) {
                    if(data.body.status == 0){
                        this.message = data.body.message;
                    }
                    this.$store.state.car.forEach(item => {
                        var selectedjs = {};
                        selectedjs = item;
                        var obj = Object.assign(selectedjs,this.message[item.id]);
                        this.selected.push(obj);
                    })
                });
            },//获取被选择的商品缩略图,
            remove(id,i){
                this.selected.splice(i,1);
                this.$store.commit("removefromcar",id);
            },
            getselectedchange(id,val){
                this.$store.commit("changegoodssel",{id,selected:val})
            }
        },
        components:{
            shopcar
        }
    }
</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            height: 60px;
        }
        h1{
            margin: 0;
            font-size: 14px;
        }
        .goodsinfo{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height:100%;
            padding-left:5px;
            .info{
                margin: 0;
            }
            .price{
                color: red;
                font-weight: bold;
            }
        }
        .sel{
            justify-content: space-between;
        }
        .selectedinfo{
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            .red{
                color: red;
                font-weight: bold;
                font-size: 18px;
            }
        }
    }
</style>