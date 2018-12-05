<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要发表的内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commentlist" :key="item.id">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.data.user}}&nbsp;&nbsp;发表时间:{{item.data.commenttime}}
                </div>
                <div class="cmt-body">
                    {{item.data.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="load()">加载更多</mt-button>
    </div>

</template>
<script>
    export default{
        data(){
            return {
                pageindex:0,
                commentlist:[]
            }
        },
        created(){
          this.getcomment()
        },
        methods:{
            getcomment(){
                this.$http.get("././data/comment.json").then(function (data) {
                    if(data.status == 200){
                        this.commentlist = this.commentlist.concat(JSON.parse(data.bodyText).list[this.pageindex])
                    }
                    else{
                        console.log("评论列表失败")
                    }
                })
            },
            load(){
                this.pageindex++;
                this.getcomment();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .comment-container{
        margin: 0 3px;
        padding-top: 20px;
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            margin:0 ;
        }
        .cmt-list{
            margin:5px 0;
            .cmt-item{
                font-size:13px;
                .cmt-title{
                    line-height: 35px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 30px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>