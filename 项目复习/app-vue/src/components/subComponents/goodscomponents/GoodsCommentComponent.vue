<template>
    <div class="goodscomment-container">
        <cmtbox></cmtbox>
    </div>

</template>

<script>
    import cmtbox from "../CommentComponent.vue"
    export default {
        data(){
            return{

            }
        },
        components:{
            cmtbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodscomment-container{
        margin: 0 3px;
    }
</style>