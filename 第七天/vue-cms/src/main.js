//js入口文件
import Vue from "vue"
import app from "./app.vue"

//按需导入 Mint-ui
import { Header,Swipe, SwipeItem,Button } from "mint-ui"
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

//导入vue-resource
import VueResource from "vue-resource"
Vue.use(VueResource);

//导入mui样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

//导入路由
import router from "./router"
import VueRouter from "vue-router"
Vue.use(VueRouter);

//导入moment
import moment from "moment"

//导入懒加载
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//导入缩略图插件
import VuePreview from "vue-preview"
Vue.use(VuePreview);

//导如vuex
import Vuex from "vuex"
Vue.use(Vuex);
var car = JSON.parse(localStorage.getItem('car') || '[]');
//注册vuex
var store = new Vuex.Store({
    state:{ //this.$store.state.***
        car:car
    },
    mutations:{//this.$store.commit('方法名称','唯一参数')
        addToCar(state,obj){
            //点击加入购物车，将商品信息保存到store中的car上
            var flag = false;
            state.car.some(item => {
                if(item.id == obj.id){
                    item.count += parseInt(obj.count);
                    flag = true;
                }
            });
            //如果循环完毕后没有找到obj则push
            if(!flag){
                state.car.push(obj)
            }
            //当更新car后，将car数组存储到localstorage当中
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updategoodsinfo(state,obj){
            state.car.some(item => {
                if(item.id == obj.id){
                    item.count = parseInt(obj.count);
                    return true
                }
            });
            //当更新car后，将car数组存储到localstorage当中
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        removefromcar(state,id){
            state.car.some((item,i) => {
                if(item.id == id){
                    state.car.splice(i,1);
                    return true
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        changegoodssel(state,obj){
            state.car.forEach(item => {
                if(item.id == obj.id){
                    item.selected = obj.selected;
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters:{ //this.$store.getters.***
        getAllCount(state){
            var count = 0;
            state.car.forEach(item => {
                count += item.count;
            });
            return count;
        },
        getgoodscount(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            });
            return o;
        },
        getgoodsselected(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            });
            return o;
        },
        gettotalcount(state){
            var o = {
                count : 0,
                total : 0
            };
            state.car.forEach(item => {
                if(item.selected) {
                    o.count += item.count;
                    o.total += item.price*item.count;
                }
            });
            return o;
        }
    }
});

Vue.filter('formatTime',function (dataSta, pattern = "YYYY-MM-DD HH-mm-ss") {
    return moment(dataSta).format(pattern)
});

var vm = new Vue({
    el:"#demo",
    data:{},
    methods:{},
    render:c => c(app),
    router,
    store
});

