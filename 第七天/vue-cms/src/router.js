/**
 * Created by Administrator on 2018/11/9.
 */
import VueRouter from "vue-router"

import HomeContainer from "./components/HomeContainer.vue"
import SearchContainer from "./components/SearchContainer.vue"
import ShopContainer from "./components/ShopContainer.vue"
import MemberContainer from "./components/MemberContainer.vue"
import Newslist from "./components/subcomponents/Newslist.vue"
import Newsdetail from "./components/subcomponents/Newsdetail.vue"
import Picturelist from "./components/subcomponents/Picturelist.vue"
import Pictureinfo from "./components/subcomponents/Pictureinfo.vue"
import Goodslist from "./components/subcomponents/Goodslist.vue"
import Goodsinfo from "./components/subcomponents/Goodsinfo.vue"
import Goodsdesc from "./components/subcomponents/Godesc.vue"
import Goodscomment from "./components/subcomponents/Gocomment.vue"
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/shopcar",component:ShopContainer},
        {path:"/search",component:SearchContainer},
        {path:"/home/newslist",component:Newslist},
        {path:"/home/newslist/:id",component:Newsdetail},
        {path:"/home/picturelist",component:Picturelist},
        {path:"/home/picturelist/pictureinfo/:id",component:Pictureinfo},
        {path:"/home/goodslist",component:Goodslist},
        {path:"/home/goodsinfo/:id",component:Goodsinfo,name:"Goodsinfo"},
        {path:"/home/goods/desc/:id",component:Goodsdesc,name:"Goodsdesc"},
        {path:"/home/goods/comment/:id",component:Goodscomment,name:"Goodscomment"},
    ],
    linkActiveClass:"mui-active"
});

export default router