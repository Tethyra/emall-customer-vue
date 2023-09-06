import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/Index.vue'
import Layout from '@/views/layout/Index.vue'
import Home from '@/views/home/Index.vue'
import Category from '@/views/category/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,  //主界面
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'/category',
          component:Category
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
