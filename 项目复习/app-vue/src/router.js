/**
 * Created by Administrator on 2018/11/9.
 */
//导入路由模块
import VueRouter from "vue-router"
//导入组件
import HomeComponent from "./components/HomeComponent.vue"
import ShopcarComponent from "./components/ShopcarComponent.vue"
import SearchComponent from "./components/SearchComponent.vue"
import MemberComponent from "./components/MemberComponent.vue"
import NewlistComponent from "./components/subComponents/newslistcomponents/NewlistComponent.vue"
import NewsinfoComponent from "./components/subComponents/newslistcomponents/NewsinfoComponent.vue"
import PicturelistComponent from "./components/subComponents/picturecomponents/PicturelistComponent.vue"
import PictureinfoComponent from "./components/subComponents/picturecomponents/PictureinfoComponent.vue"
import GoodslistComponent from "./components/subComponents/goodscomponents/GoodslistComponent.vue"
import GoodsinfoComponent from "./components/subComponents/goodscomponents/GoodsinfoComponent.vue"
import GoodsdescComponent from "./components/subComponents/goodscomponents/GoodsdescComponent.vue"
import Goodscomment from "./components/subComponents/goodscomponents/GoodsCommentComponent.vue"
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:HomeComponent},
        {path:"/member",component:MemberComponent},
        {path:"/shop",component:ShopcarComponent},
        {path:"/search",component:SearchComponent},
        {path:"/home/newslist",component:NewlistComponent},
        {path:"/home/newslist/:id",component:NewsinfoComponent},
        {path:"/home/picture",component:PicturelistComponent},
        {path:"/home/picture/pictureinfo/:id",component:PictureinfoComponent},
        {path:"/home/goodslist",component:GoodslistComponent},
        {path:"/home/goodslist/goodsinfo/:id",component:GoodsinfoComponent,name:"GoodsinfoComponent"},
        {path:"/home/goodslist/goodsinfo/:id/goodsdesc",component:GoodsdescComponent,name:"GoodsdescComponent"},
        {path:"",component:Goodscomment,name:"Goodscomment"}
    ],
    linkActiveClass:"mui-active"
});

export default router;