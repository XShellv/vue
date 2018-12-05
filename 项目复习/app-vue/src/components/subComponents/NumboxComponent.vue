<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="getchange"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from "../../lib/mui/js/mui.min"
    export default{
        data(){
            return{
            }
        },
        props:['numboxmax'],
        methods:{
            //每当我修改了numbox的值以后，我都立即将当前的商品信息传递给父组件
            getchange(){
                this.$emit("totalcount",parseInt(this.$refs.numbox.value))
            }
        },
        mounted(){
            mui(".mui-numbox").numbox();
        },
        watch:{
            //这里只要监视numboxmax，他只要一发上变化，立刻修改最大值
            "numboxmax":function (newVal, oldVal) {
                console.log(oldVal,newVal)
                mui(".mui-numbox").numbox().setOption('max',newVal);
            }
        }
    }
</script>

<style lang="scss" scoped></style>