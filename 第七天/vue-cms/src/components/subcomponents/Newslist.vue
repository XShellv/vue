<template>
    <div>
        <ul class="mui-table-view">
            <li v-for="(item,i) in commentList" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newslist/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{item.time | formatTime}}</span>
                            <span>点击:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                commentList:[]
            }
        },
        created(){
            this.getList()
        },
        methods:{
           getList(){
               this.$http.get("././data/newslist.json").then(function (data) {
                   if(data.status == 200){
                       this.commentList = JSON.parse(data.bodyText).list
                   }
                   else{
                       console.log("获取新闻列表失败")
                   }
               })
           }
        },

    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>