<template>
    <div class="newsinfo-container">
        <h3>{{title}}</h3>
        <p><span>发表时间：{{newslist.time |timeformat}}</span><span>点击：{{newslist.click}}</span></p>
        <hr>
        <!--内容区域-->
        <ul class="news-ul">
            <li v-for="(item,i) in newsinfo.info" :key="item.id">
                <div class="date_d">
                    <i></i>
                    <span>{{item.cTime | timeformat}}</span>
                </div>
                <div class="con_d">
        <span>
            {{item.summary}}
        </span>
                </div>
            </li>
        </ul>
        <!--代表评论区域-->
        <commentbox></commentbox>
    </div>
</template>
<script>
    import commentbox from "../CommentComponent.vue"
    export default{
        data(){
            return{
                title:"",
                newslist:{},
                newsinfo:{},
                id:this.$route.params.id,
            }
        },
        created(){
            this.getNewslistData();
            this.getNewsDetail()
        },
        methods:{
            //获取对应的newslist数据和相应的新闻详情数据
            getNewslistData(){
                this.$http.get("././data/newslist.json").then(function (data) {
                    if(data.body.status == 0){
                        this.newslist = data.body.list[this.id]
                    }
                });
            },
            getNewsDetail(){
                var url = "http://interface.sina.cn/auto/inner/getAutoKxnewsBytime.d.json?&day=2018-10-0"+this.id;
                this.$http.jsonp(url).then(function (data) {
                    if(data.status == 200){
                        this.newsinfo["info"] = data.body.data;
                        this.title = this.newsinfo["info"][0].timeStr;
                    }
                })
            },
        },
        components:{
            commentbox
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo-container{
        padding:4px;
        h3{
            color: red;
            text-align: center;
            margin: 15px 0;
            font-size: 16px;
        }
        p{
            display: flex;
            justify-content: space-between;
            padding: 0 5px ;
            color: #4285f4;
            font-size: 12px;
        }
        .news-ul{
            list-style: none;
            padding: 0;
            margin:0 5px;
            font-size:13px;
            li{
                padding-bottom: 1em;
                position:relative;
                .date_d{
                    width: 100%;
                    float: left;
                    position: relative;
                    font-size: 0.875em;
                    height: 2em;
                    line-height: 2em;
                span{
                    font-size: 1em;
                    color: #4285f4;
                    background-color: #fff;
                    line-height: 1.43em;
                    display: inline-block;
                    margin: 0 0 0 0.93em;
                }
                i{
                    display: block;
                    width: 0.45em;
                    height: 0.45em;
                    background-color: #4285f4;
                    border-radius: 50%;
                    position: absolute;
                    top: 0.8em;
                    left: 0;
                }
            }
            .con_d{
                font-size: 1em;
                color: #333;
                line-height: 1.625em;
                padding-left: 0.81em;
                text-align: justify;
            }
            }
            li::before{
                content: '';
                display: block;
                width: 1px;
                height: 100%;
                background-color: #dfdfdf;
                position: absolute;
                top: 1em;
                left: 0.18em;
            }
        }
    }

</style>