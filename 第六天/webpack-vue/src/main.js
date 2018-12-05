//js入口文件

console.log(123)

import Vue from "vue"
import login from "./login.vue"
// import Vue from "../node_modules/vue/dist/vue"


var vm = new Vue({
    el:'#demo',
    data:{
        msg:123
    },
    render: c => c(login)

});


import test,{name,age} from './test'
console.log(test);
console.log(name,age);