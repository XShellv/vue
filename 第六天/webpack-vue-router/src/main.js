//js入口文件
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter);

import app from "./app.vue"
import router from "./router.js"

//导入mintui
import MintUi from "mint-ui"
// import "mint-ui/lib/style.css"
// Vue.use("MintUi")
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
console.log(Button.name)

var vm = new Vue({
    el:"#demo",
    data:{},
    methods:{},
    render:c => c(app),
    router
});


