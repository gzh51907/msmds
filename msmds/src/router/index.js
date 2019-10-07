import Vue from 'vue';

// 1. 引入vue-router
import VueRouter from "vue-router";

// 2. 使用vue-router（script标签引入方式自动完成）
Vue.use(VueRouter);

// 引入路由配置参数
import routers from '../router/routes';
// 3. 实例化router并配置参数
let router = new VueRouter({
    //mode: 'hash'
    // 配置参数:不同的 URL 显示不同的内容  
    routes: routers
});

export default router;