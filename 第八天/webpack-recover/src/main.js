/**
 * Created by Administrator on 2018/11/11.
 */
//这里是js入口
console.log("哈哈");

import "./css/index.css"
import "./css/index.scss"
import "./css/index.less"

//导入bootstrap样式
import "bootstrap/dist/css/bootstrap.css"

class Person{
    static info = {name:"xxw",age:"25"}
}

console.log(Person.info);

import Vue from "vue"
// import Vue from "vue/dist/vue.js"

//导入login模板
import app from "./APP.vue"

//导入路由
import VueRouter from "vue-router"
Vue.use(VueRouter);

//导入路由
import router from "./router.js"

//把所有的组件都导入进来
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// //将 MintUI 安装到 Vue 中
// Vue.use(MintUI) ;// 把所有的组件，注册为全局的组件

// 按需导入mint-ui
import { Button } from "mint-ui"
Vue.component(Button.name,Button);

//使用mui
import "./css/mui/css/mui.css"
import "./css/mui/css/app.css"

var vm = new Vue({
    el:"#demo",
    data:{
        msg:"hahaha"
    },
    methods:{},
    render: (c) =>  c(app),
    router
});