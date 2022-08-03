import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Goods from '../views/home/Goods.vue'
import Users from '../views/home/Users.vue'
import Roles from '../views/home/Roles.vue'
import My from '../views/home/my.vue'

const routes = [
    { path: '/home', component: Home, 
      redirect:"/home/my",
      children: [
        {
            name: 'home',
            path: 'my',
            component: My,
            meta:{
                isShow:true
            }
        },
        {
            name: 'goods',
            path: 'goods',
            component: Goods,
            meta:{
                isShow:true
            }
        },
        {
            name: 'users',
            path: 'users',
            component: Users,
            meta:{
                isShow:true
            }
        },
        {
            name: 'roles',
            path: 'roles',
            component: Roles,
            meta:{
                isShow:true
            }
        },
      ] 
    },
        
    { path: '/login', component: Login },

    {
        path: '/',
        redirect: (to:object) => {
            console.log(typeof to)
            // 验证用户登录权限
            // 拥有 token 访问 '/' 则跳转首页
            // 否则跳转 '/login' 登录
            return 0 ? { path: '/home' } : { path: '/login' }
        },
    },

    // { path: '/', component: Notfind },
]
  
const router = createRouter({
    
    history: createWebHashHistory(),
    routes, 
})


export default router