<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="numbox" @change="countedChange"  readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from  "../../lib/mui/js/mui.min.js"
    export default{
        data(){
            return{
            }
        },
        props:['initcount','goodsid'],
        mounted(){
            mui(".mui-numbox").numbox();
        },
        methods:{
            countedChange(){
                this.$store.commit("updategoodsinfo",
                    {
                        id:this.goodsid,
                        count:this.$refs.numbox.value
                    }
                )
            }
        }
    }
</script>

<style lang="scss" scoped></style>