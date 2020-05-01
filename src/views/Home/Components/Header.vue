<template>
    <div :class="['wow animated',outActive?'slideOutUp':'slideInDown']">
        <el-menu
            style="border-bottom:0px;position:relative"
            :default-active="select"
            class="el-menu-demo mybg"
            mode="horizontal"
            background-color="transparent"
            text-color="white"
            active-text-color="white"
            >
            <el-menu-item v-for="(item) in navList" :key="item.meta.index" @click="change(item)"
            class="active" :index="item.meta.index+''">
                {{item.name}}
            </el-menu-item>

            <div class="myinfo">
                欢迎{{userinfo.username}}玩家的到来~
            </div>
            <el-menu-item index="10" class="active right" @click="loginOut">退出</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { clearToken } from '@/utils/cookie.js';
import { ref, reactive, computed, onMounted } from '@vue/composition-api';
 export default {
     name:'header_k',
     setup(props, { root } ){
        //退出特效
        const outActive = computed(()=>root.$store.state.outActive);
        //从路由获取菜单数据
        const navList = reactive(root.$router.options.routes[2].children);
        //选择参数
        const select = ref(root.$router.currentRoute.meta.index+'');
        //切换组件
        const change = (item) => {
            if(root.$router.currentRoute.path == item.path) return;
            if(root.$router.currentRoute.path == '/gamenews' && item.path == '/game') return;
            root.$store.commit('setChangeActive',true); //开启切换特效
            root.$router.push(item.path);
                root.$store.commit('setChangeActive',false); //关闭切换特效
                return 'ok';
            // setTimeout(() => {
                
            // }, 1000);
        };
        //用户信息
        // const userinfo = reactive(root.$store.state.userinfo);
		const userinfo = reactive({
			username:'lk'
		});
        //导航选中参数
        const activeIndex = ref('1');
        //退出登录
        const loginOut = () => {
            root.$store.commit('setOutActive',true); //开启退出特效
            clearToken();   //清楚token
            root.$notify({title: '退出成功',type: 'success'});
            root.$router.push('/login');
            root.$store.commit('setOutActive',false);//关闭退出特效
            // setTimeout(()=>{
                
            // },1000)
        };
        return {
            activeIndex,
            loginOut,
            userinfo,
            navList,
            change,
            select,
            outActive
        }
     }
  }
</script>
<style lang="scss" scoped>
.is-active {
    background: rgba(0, 0, 0, 0.5) !important;
}
.active {
   user-select: none;
}
.active:hover{
     background: rgba(0, 0, 0, 0.5) !important;
}
.right {
    position: absolute;
    right:0px;
    border-left: 1px solid white;
}
.myinfo {
     user-select:none;
    position: absolute;
    right: 83px;
    color:white;
    outline: none;
    top:50%;
    transform: translateY(-50%);
}
</style>