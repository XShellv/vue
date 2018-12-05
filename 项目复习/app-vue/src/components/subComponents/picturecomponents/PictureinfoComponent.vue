<template>
    <div class="Pictureinfo-container">
        <h3>习近平主持召开中央全面深化改革委员会第五次会议</h3>
        <p><span>发表时间:2012-12-12 12:12:12</span><span>点击:0次</span></p>
        <!--缩略图区域-->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in PictureThumbs" :src="item.src" height="25%" @click="$preview.open(index, PictureThumbs)":key=item.id>
        </div>
        <hr>
        <!--内容区域-->
        <div class="content">
            <p>
                中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平11月14日下午主持召开中央全面深化改革委员会第五次会议并发表重要讲话。把新时代改革开放继续推向前进。中共中央政治局常委、中央全面深化改革委员会副主任王沪宁、韩正出席会议。
            </p>
        </div>
        <commentbox></commentbox>
    </div>
</template>
<script>
    import commentbox from "../CommentComponent.vue"
    export default{
        data(){
            return {
                PictureThumbs:[],
                id:this.$route.params.id
            }
        },
        created(){
            this.getPictureThumbs()
        },
        methods: {
            getPictureThumbs(){
                this.$http.get("././data/picturethumb.json").then(function (data) {
                    if(data.body.status == 0){
                        data.body.message[this.id].list.forEach(function (item) {
                            item.w = 600;
                            item.h = 400;
                        });
                        this.PictureThumbs = data.body.message[this.id].list;
                    }
                })
            }
        },
        components:{
            commentbox
        }
    }
</script>
<style lang="scss" scoped>
    .Pictureinfo-container{
        padding: 3px;
        h3{
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        p{
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
        }
        .thumbs{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            img{
                width: 27.5%;
                margin: 10px;
                box-shadow: 0 0 8px #000;
            }
        }
        .content{
            font-size: 13px;
            line-height: 30px;
            padding: 0 10px;
            p{
                text-align: justify;
                color: #000;
                padding: 0;
            }
        }
    }

</style>