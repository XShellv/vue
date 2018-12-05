/**
 * Created by Administrator on 2018/11/9.
 */

import VueRouter from "vue-router"

import account from "./m1/account.vue"
import other from "./m2/other.vue"

import login from "./m1/main/login.vue"
import register from "./m1/main/register.vue"


var router = new VueRouter({
    routes:[
        {
            path:"/account",
            component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {
            path:"/other",
            component:other
        }
    ]
});

export default router