<template>
    <div>
        <h3>这是一个app组件</h3>
        <mt-button type="primary"  icon="back" @click="show">123</mt-button>
        <mt-button type="primary" size="large">primary</mt-button>

        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>

        <router-link to="/account">Account</router-link>
        <router-link to="/other">Others</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    import "bootstrap/dist/css/bootstrap.css"
    import "./css/app.css"
    import "./lib/mui/css/mui.min.css"
    export default{
        data(){
            return{
                t:null
            }
        },
        created(){
            this.getlist()
        },
        methods:{
            getlist(){
                this.show();
                setTimeout( () => {
                    this.t.close()
                },3000)
            },
            show(){
                this.t = Toast({
                    "message":"提示消息",
                    "duration":"-1",
                    "position":"middle",
                    "iconClass":"glyphicon glyphicon-heart",
                    "className":"mytoast"
                })
            }
        }
    }
</script>
<style></style>