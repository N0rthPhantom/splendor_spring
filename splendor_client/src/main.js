import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'

// 1. 定义路由组件.
// 也可以从其他文件导入
import Splendor from './Splendor.vue'
import Room from "@/components/Room.vue";

// 2. 定义一些路由
const routes = [
    { path: '/', redirect: '/Splendor' },
    { path: '/Splendor', component: Splendor },
    { path: '/room', component: Room },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(ElementPlus)

app.mount('#app')
