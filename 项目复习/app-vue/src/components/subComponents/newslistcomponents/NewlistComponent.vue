<template>
    <div class="newslist-container">
        <ul class="mui-table-view">
            <router-link class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id" tag="li" :to="'/home/newslist/'+item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.url">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span class="time">{{item.time | timeformat}}</span>
                            <span>{{item.click}}</span>
                        </p>
                    </div>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                newslist:[]
            }
        },
        created(){
            this.getNewslistData()
        },
        methods:{
            getNewslistData(){
                this.$http.get("././data/newslist.json").then(function (data) {
                    if(data.body.status == 0){
                        this.newslist = data.body.list
                    }
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .newslist-container{
        .mui-table-view-cell{
            .mui-media-body{
                h3{
                    font-size: 14px;
                }
                .mui-ellipsis{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: #226aff;
                }
            }
        }
    }
</style>