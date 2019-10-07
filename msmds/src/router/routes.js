//如果需要进一步模块化，在此配置 routes 参数

// 引入子页面(各组件)
import Home from '../pages/Home.vue';
import jianLou from '../pages/jianLou.vue';
import menber from '../pages/menber.vue';
import redPackage from '../pages/redPackage.vue';
import Mine from '../pages/Mine.vue';

let routes = [
    //首页
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'jianLou',
        path: '/jl',
        component: jianLou
    },
    {
        name: 'menber',
        path: '/menber',
        component: menber
    },
    {
        name: 'redPackage',
        path: '/hb',
        component: redPackage
    },
    {
        name: 'mine',
        path: '/mine',
        component: Mine
    }
];
export default routes;