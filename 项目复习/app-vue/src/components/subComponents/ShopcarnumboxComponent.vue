<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="val" ref="numbox" @change="updatecar(id)"/>
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
        props:['val','numboxmax','id'],
        methods:{
            updatecar(id){
                var o = {};
                o.count = parseInt(this.$refs.numbox.value);
                o.id = id;
                this.$store.commit("getgoodsupdated",o)
            }
        },
        mounted(){
            mui(".mui-numbox").numbox();
            mui(".mui-numbox").numbox().setOption('max',this.numboxmax);
        },
    }
</script>

<style lang="scss" scoped></style>