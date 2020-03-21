<template>
    <div style="height:564px;position:relative">
            <div :class="['navlist wow animated',arrowActiveshouw?'active':'',outActive||changeActive?'slideInLeftOut':'slideInLeft']">
                <!-- 拉伸圆 -->
                <div :class="['arrow']" @click="arrowActive"></div>
                <!-- 游戏列表 -->

            <el-col :span="24">
                <el-menu
                style="border-right:0px;"
                :default-active="gameselect+''"
                background-color="transparent"
                text-color="white"
                class="el-menu-vertical-demo">

                    <el-menu-item index="1" @click="changeGame({path:'/gamenews'},1)">
                        <i class="el-icon-reading" style="color:white"></i>
                        <span slot="title">游戏新闻</span>
                    </el-menu-item>
                    <el-submenu :index="index+''" v-for="(item,index) in gamelist" :key="index">
                        <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item :index="index+'-'+ix" v-for="(it,ix) in item.children" 
                            :key="ix" @click="changeGame(it,index+'-'+ix)">
                                {{it.name}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>

            </div>
      
            <div :class="['content wow animated',arrowActiveshouw?'contentActive':'',outActive||changeActive?'slideOutRight':'slideInRight']">
              
                    <router-view :key="$route.fullPath"></router-view>
            </div>
    </div>
</template>
<script>
import { ref,computed, reactive, onMounted } from '@vue/composition-api';
export default {
    name: 'name',
    setup(props,{root}){
        //列表选择参数
        const gameselect = ref(root.$router.currentRoute.meta.ix);
        //游戏列表
        const gamelist = reactive([
            {
                name:'休闲游戏',icon:'el-icon-receiving',
                children:[{
                    name:'3D模型',
                    path:'/mandown'
                },{
                    name:'飞机大战',
                    path:'/manup'
                }]
            },
            {
                name:'益智类游戏',icon:'el-icon-cpu',
                children:[{
                    name:'推箱子',
                    path:''
                },{
                    name:'连连看',
                    path:''
                }]
            }
        ]);
        //切换游戏
        const changeGame = (item,index) => {
            if(root.$router.currentRoute.path == item.path) return;
            gameselect.value = index;
            root.$store.commit('setGameChangeActive',true);
            setTimeout(() => {
                root.$router.replace(item.path);
                root.$store.commit('setGameChangeActive',false);
            }, 500);
        };
        //切换特效
        const changeActive = computed(()=>root.$store.state.changeActive);
        //退出特效
        const outActive = computed(()=>root.$store.state.outActive);
        //样式
        const arrowActiveshouw = ref(false);
        //原点点击事件
        const arrowActive = () => {
            arrowActiveshouw.value = !arrowActiveshouw.value;
        };
        return {
            arrowActive,
            arrowActiveshouw,
            outActive,changeActive,
            gamelist,changeGame,gameselect
        }
    }
}
</script>
<style lang="scss" scoped>
.contentOut {
    transition: all 1s ease !important;
    transform: translateX(120%);
}
.navlist {
    position: absolute;
    width:300px;
    left:-300px;
    height: 564px;
    background:rgba(255,255,255,0.5);
    transition: all 0.3s ease;
    user-select: none;
    .arrow {
        position:absolute;
        width:20px;
        height:40px;
        top:50%;
        transform: translateY(-50%);
        right:-20px;
        background-color: rgba(255,255,255,0.5);
        border-radius: 0 40px 40px 0;
        cursor: pointer;
    }
    .arrow:hover {
        background-color: rgba(0,0,0,0.5);
        border-right:1px solid white;
    }
    
}
.active {
    left:0px;
}
.content {
    position :absolute;
    width:1343px;
    margin:0 100px;
    left:0px;
    height: 564px;
    transition: all 0.3s ease;
    //animation: contentActive 1s;
}
@keyframes contentActive
{
0% {  transform: translateX(100%)}
100% { transform: translateX(0)}
}
.contentActive {
    left:300px;
    width:1043px;
}

.el-menu-item:hover{
    outline: 0 !important;
    background:rgba(0,0,0,0.5) !important;
}
.el-menu-item.is-active {
    color:white;
   background:linear-gradient(to right,rgba(0, 0, 0, 0.5) ,black ,rgba(0, 0, 0, 0.5))!important;
   border-right:2px solid white;
    animation:selectActive 2s infinite linear;
}
@keyframes selectActive {
    0%{
    }
    50%{
        
    }
    100%{
       background-position:300px 0;
    }
}
</style>