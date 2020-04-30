import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionApi from '@vue/composition-api';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCompositionApi);

//静态数据
import staticData from '@/assets/staticData.js';
if(!localStorage.getItem('staticData')){
    localStorage.setItem('staticData',JSON.stringify(staticData));
}
Vue.prototype.$staticData = JSON.parse(localStorage.getItem('staticData'));
//wow 动画
import 'animate.css';
import { WOW } from 'wowjs';
new WOW({ live: false }).init();
//cookie
//import Cookie from 'js-cookie';
//路由守卫
// router.beforeEach((to, from, next) => {
//     if (Cookie.get('token') || to.path == '/login') {
//         next();
//     } else {
//         Vue.prototype.$notify.error({ title: '未登录，请勿尝试访问' });
//         next('/login')
//     }
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')