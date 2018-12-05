<template>
    <div>
        <div class="comment-container">
            <h3>发表评论</h3>
            <hr>
            <textarea placeholder="请输入要发表的内容(最多120字)"></textarea>
            <mt-button type="primary" size="large">发表评论</mt-button>
            <div class="cmt">
                <div class="cmt-item" v-for="item in newscomment" :key="item.id">
                    <div class="cmt-title">
                        第{{item.data.floor}}楼&nbsp;&nbsp;用户:{{item.data.user}}&nbsp;发表时间:{{item.data.commenttime}}
                    </div>
                    <div class="cmt-body">
                        {{item.data.content}}
                    </div>
                </div>
            </div>
            <mt-button type="danger" size="large" plain @click="addpageindex">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
          return{
              newscomment:[],
              pageindex:0,
          }
        },
        created(){
            this.getComment()
        },
        methods:{
            getComment(){
                try{
                    this.$http.get("./data/comment.json").then(function (data) {
                        if(data.body.status == 0){
                            if(this.pageindex < data.body.list.length){
                                this.newscomment = this.newscomment.concat(data.body.list[this.pageindex])
                            }
                        }
                    })
                }catch(e){
                    console.log(e)
                }

            },
            addpageindex(){
                this.pageindex ++;
                this.getComment();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment-container{
        padding-top:20px;
        h3{
            font-size: 18px;
            color: #000;
            text-align: left;
        }
        textarea{
            font-size: 14px;
            margin: 0;
        }
        .cmt{
            font-size: 13px;
            text-align: left;
            padding-top:10px;
            .cmt-title{
                line-height: 35px;
                width: 100%;
                background-color: #ddd;
            }
            .cmt-body{
                line-height: 35px;
                width: 100%;
                text-indent: 2em;
            }
        }
    }
</style>