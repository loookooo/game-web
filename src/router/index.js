import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "首页",
    redirect: "/game",
    component: () => import("views/Home/index.vue"),
    children: [
      {
        path: "/newInfo",
        name: "最新资讯",
        meta: {
          index: 0,
        },
        component: () => import("views/NewInfo/index.vue"),
      },
      {
        path: "/game",
        name: "游戏大厅",
        redirect: "/gamenews",
        meta: {
          index: 1,
          keepAlive: true,
        },
        component: () => import("views/Game/index.vue"),
        children: [
          {
            path: "/gamenews",
            name: "游戏新闻",
            meta: {
              index: 1,
              ix: "1",
              keepAlive: true,
            },
            component: () => import("views/Game/Components/GameNews.vue"),
          },
          {
            path: "/mandown",
            name: "3D模型",
            meta: {
              index: 1,
              ix: "0-0",
              keepAlive: true,
            },
            component: () => import("views/Game/Components/ManDown.vue"),
          },
          {
            path: "/manup",
            name: "飞机大战",
            meta: {
              index: 1,
              ix: "0-1",
              keepAlive: true,
            },
            component: () => import("views/Game/Components/ManUp.vue"),
          },
          {
            path:'/gitBoard',
            name: "推箱子",
            meta: {
              index: 1,
              ix: "1-1",
              keepAlive: true,
            },
            component: () => import("views/Game/Components/GitBoard.vue"),
          },
          {
            path:'/keepLook',
            name: "连连看",
            meta: {
              index: 1,
              ix: "1-2",
              keepAlive: true,
            },
            component: () => import("views/Game/Components/KeepLook.vue"),
          }
        ],
      },
      {
        path: "/review",
        name: "游戏评测",
        meta: {
          index: 2,
        },
        component: () => import("views/Review/index.vue"),
      },
      {
        path: "/manage",
        name: "平台管理",
        meta: {
          index: 3,
        },
        component: () => import("views/Manage/index.vue"),
      },
      {
        path: "/personal",
        name: "个人中心",
        meta: {
          index: 4,
        },
        component: () => import("views/Personal/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
