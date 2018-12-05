<template>
    <div class="goodsdesc-container">
        <h1 class="title">{{Goodsdesc.title}}</h1>
        <div class="desc" v-html="Goodsdesc.html">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                Goodsdesc:[]
            }
        },
        created(){
            this.getGoodsdesc()
        },
        methods:{
            getGoodsdesc(){
                this.$http.get("././data/goodsdesc.json").then(function (data) {
                    if(data.body.status === 0){
                        this.Goodsdesc = data.body.message;
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .goodsdesc-container{
        padding:5px;
        .desc{
            img{
                width: 100%;
            }
        }
        .title{
            color: #226aff;
            font-size: 14px;
            text-align: center;
            margin: 5px 0;
        }
    }
</style>