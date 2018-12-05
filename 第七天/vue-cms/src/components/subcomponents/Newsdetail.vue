<template>
    <div class="news-datail">
        <!--大标题-->
        <h3 class="title">{{this.title}}</h3>
        <!--小标题-->
        <p class="subtitle"><span>发表时间</span><span>点击:0次</span></p>
        <hr>
        <!--内容区域-->
        <div class="content">
            <ul class="news-ul">
                <li v-for="(item,i) in newsdetail" :key="item.id">
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
        </div>
        <!--评论区域-->
        <comment></comment>
    </div>

</template>

<script>
    import comment from "./comment.vue"
    export default{
        data(){
            return{
                id:this.$route.params.id,
                newsdetail:[],
                title:""
            }
        },
        created(){
          this.getinfo()
        },
        methods:{
            getinfo(){
                var url = "http://interface.sina.cn/auto/inner/getAutoKxnewsBytime.d.json?&day=2018-10-0"+this.id;
                this.$http.jsonp(url).then(data =>{
                    if(data.status == 200){
                        this.newsdetail = data.body.data
                    this.title = this.newsdetail[0].timeStr;
                    }
                })
            }
        },
        filters:{
            timeformat:function (datastr) {
                return datastr.slice(11)
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="scss" scoped>
    .news-datail{
        padding:4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .news-ul{
            list-style: none;
            padding: 0;
            margin:0 19px;
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
                    span{

                    }
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