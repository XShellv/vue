//main.js的入口

//导入app组件
import app from "./app.vue"
//导入Vue组件
import Vue from "vue"

//按需导入mint-ui
// import { Header,Swipe,SwipeItem,Button} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);

//全部导入 导入懒加载
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//导入缩略图样式
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

//导入mui样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

//导入路由
import VueRouter from "vue-router"
import router from "./router"
Vue.use(VueRouter);

//导入vue-resource
import VueResource from "vue-resource"
Vue.use(VueResource);

//导入vuex
import Vuex from "vuex"
Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem("car")||"[]");
var store = new Vuex.Store({
    state:{ //this.$store.state.***
        car:car
    },
    mutations:{//this.$store.commit("方法名","参数")
        //将商品提交至car数组当中，并及时更新localstorage
        addtocar(state,obj){
            var flag = false;
            state.car.forEach(function (item) {
                if(item.id == obj.id){
                    item.count += obj.count;
                    flag = true;
                }
            });
            //如果在car中未找到obj则将其push进去
            if(!flag){
                state.car.push(obj)
            }
            //注意将数组更新至localStorage当中，需要将json转化为字符串
            localStorage.setItem("car",JSON.stringify(state.car))

        },
        getgoodsremoved(state,id){
            state.car.some(function (item,i) {
                if(item.id == id){
                    state.car.splice(i,1);
                    return true;
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        getgoodsupdated(state,obj){
            state.car.some(function (item) {
                if(item.id == obj.id){
                    item.count = obj.count;
                    return true
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        getgoodsselected(state,obj){
            state.car.forEach(function (item) {
                if(item.id == obj.id){
                    item.selected = obj.selected;
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        }
    },
    getters:{//this.$store.getters.***
        getcarmountchange(state){
            var total = 0;
            state.car.forEach(function (item) {
                total += item.count;
            });
            return total;
        },
        getgoodsparams(state){
            return state.car;
        },
        getgoodsboolean(state){
            var o = {};
            state.car.forEach(function (item) {
                o[item.id] = item.selected;
            });
            return o;
        },
        getselectedtotal(state){
            var o = {
                total : 0,
                count : 0
            };
            state.car.forEach(item=>{
                if(item.selected == true){
                    o.total += item.count*item.price;
                    o.count += item.count;
                }
            });
            return o;
        }
    }
});
//导入moment
import moment from "moment"
//设置全局过滤器
Vue.filter("timeformat",function (datastr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(datastr).format(pattern)
});

var vm = new Vue({
    el:"#demo",
    data:{
        
    },
    methods:{
        
    },
    render: c => c(app),
    router,
    store
});

