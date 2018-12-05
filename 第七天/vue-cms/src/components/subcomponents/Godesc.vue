<template>
    <div class="desc-container">
        <h4 class="title">{{message.title}}</h4>
        <div class="desc" v-html="message.html"></div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                message:{}
            }
        },
        created(){
            this.gethtml()
        },
        methods:{
            gethtml(){
                this.$http.get("././data/goodsdesc.json").then(function (data) {
                    if(data.body.message.status == 0){
                        this.message = data.body.message;
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .desc-container{
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