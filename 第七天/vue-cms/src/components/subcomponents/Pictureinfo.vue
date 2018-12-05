<template>
    <div class="picturecontainer">
        <h3>习近平主持召开中央全面深化改革委员会第五次会议</h3>
        <p class="subtitle">
            <span>发表时间:2012-12-12 12:12:12</span>
            <span>点击:0次</span>
        </p>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="25%" @click="$preview.open(index, list)" :key="item.id">
        </div>
        <hr>
        <div class="content">
            中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平11月14日下午主持召开中央全面深化改革委员会第五次会议并发表重要讲话。把新时代改革开放继续推向前进。中共中央政治局常委、中央全面深化改革委员会副主任王沪宁、韩正出席会议。
        </div>
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
    import comment from "./comment.vue"
    export default{
        data(){
            return {
                id:this.$route.params.id,
                list:[],
            }
        },
        created(){
            this.getpicturethumb();
        },
        methods:{
            getpicturethumb(){
                this.$http.get("../../data/picturethumb.json").then(function (data) {
                    if(data.status == 200){
                        data.body.data[this.id].list.forEach(item => {
                            item.w = 600,
                            item.h = 400
                        })
                        this.list=data.body.data[this.id].list;
                    }
                })
            }
        },
        components:{
            "comment-box":comment,
        }

    }
</script>
<style lang="scss" scoped>
    .picturecontainer{
        padding: 3px;
        h3{
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
        .thumbs{
            display:flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            img{
                width: 27.5%;
                margin: 10px;
                box-shadow: 0 0 8px #000;
            }
        }
    }

</style>