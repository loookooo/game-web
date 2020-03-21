import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, setToken } from '@/utils/cookie.js';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: getToken() || null, //token令牌
        userinfo: JSON.parse(sessionStorage.getItem('userinfo') || null), //用户信息
        outActive: false, //退出
        changeActive: false, //切换
        gamechangeActive: false, //游戏
    },
    getters: {

    },
    mutations: {
        setGameChangeActive(state, value) {
            state.gamechangeActive = value;
        },
        setChangeActive(state, value) {
            state.changeActive = value;
        },
        setOutActive(state, value) {
            state.outActive = value;
        },
        setToken(state, value) {
            setToken(value);
            state.token = value;
        },
        setUserInfo(state, value) {
            sessionStorage.setItem('userinfo', JSON.stringify(value));
            state.userinfo = value;
        }
    },
    actions: {},
    modules: {}
})