import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: '登录',
        component: () =>
            import ('views/Login/index.vue')
    },
    {
        path: '/home',
        name: '首页',
        redirect: '/game',
        component: () =>
            import ('views/Home/index.vue'),
        children: [{
            path: '/game',
            name: '游戏大厅',
            redirect: '/gamenews',
            meta: {
                index: 1,
                keepAlive: true
            },
            component: () =>
                import ('views/Game/index.vue'),
            children: [{
                path: '/gamenews',
                name: '游戏新闻',
                meta: {
                    index: 1,
                    ix: '1',
                    keepAlive: true
                },
                component: () =>
                    import ('views/Game/Components/GameNews.vue')
            }, {
                path: '/mandown',
                name: '3D模型',
                meta: {
                    index: 1,
                    ix: '0-0',
                    keepAlive: true
                },
                component: () =>
                    import ('views/Game/Components/ManDown.vue')
            }, {
                path: '/manup',
                name: '飞机大战',
                meta: {
                    index: 1,
                    ix: '0-1',
                    keepAlive: true
                },
                component: () =>
                    import ('views/Game/Components/ManUp.vue')
            }]
        }, {
            path: '/personal',
            name: '个人中心',
            meta: {
                index: 2
            },
            component: () =>
                import ('views/Personal/index.vue')
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router