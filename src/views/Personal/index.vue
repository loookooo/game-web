<template>
    <div class="personal">
        <!-- 个人基础信息 -->
        <div class="baseinfo">
            <div :class="['left wow animated',outActive||changeActive?'slideInLeftOut':'slideInLeft']"></div>
            <div  :class="['right wow animated',outActive||changeActive?'slideOutRight':'slideInRight']" >
                    <div class="baseitem">
                        <label for="username">账号 :</label>
                        {{userinfo.username}}
                    </div>
                    <br>
                   <div class="baseitem">
                        <label for="password">密码串 :</label>
                        {{userinfo.password}}
                    </div>
                    <br>
                   <div class="baseitem">
                        <label for="sex">性别 :</label>
                        {{userinfo.sex==null?'无':userinfo.sex}}
                    </div><br>
                    <div class="baseitem">
                        <label for="sex">加入时间 :</label>
                            <span>{{userinfo.createTime}}</span>
                    </div>
            </div>
        </div>
        <!-- 标题 -->
        <div :class="['title wow animated',outActive||changeActive?'intoOut':'into']">
        </div>
        <!-- 个人游戏信息 -->
        <div :class="['gameinfo wow animated',outActive||changeActive?'slideOutDown':'slideInUp']">
            <div class="gameitem">
                <div class="name">是男人就上一百层</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">推箱子</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">是男人就上一百层</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">推箱子</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">是男人就上一百层</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">推箱子</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">推箱子</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">推箱子</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">是男人就上一百层</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">推箱子</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
            <div class="gameitem">
                 <div class="name">是男人就上一百层</div>
                <div class="h"></div>
                <div class="credit">100</div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive,computed } from '@vue/composition-api'
export default {
    name: 'personal',
    setup(props,{root}) {
        //切换特效
        const changeActive = computed(()=>root.$store.state.changeActive);
        //用户信息
        // const userinfo = reactive(JSON.parse(JSON.stringify(root.$store.state.userinfo)));
		const userinfo = reactive({
			username:'lk123456',
			password:'j8d023jr8e90sfu34jriow',
			sex:'男',
			createTime:'2019-12-12'
		});
        //退出特效
        const outActive = computed(()=>root.$store.state.outActive);
        return {
            userinfo,
            outActive,
            changeActive
        }
    }
}
</script>
<style lang="scss" scoped>
.baseitem {
    margin-bottom:20px;
    padding: 11px;
    padding-right:15px;
    border-radius:0 15px 15px 0;
    border-left:2px solid white;
    display: inline-block;
    background-color: rgba(255,255,255,0.5);
}
.baseitem:hover {
    background-color: rgba(0,0,0,0.5);
    border-right:2px solid white;
}
.gameitem:hover .name,.gameitem:hover .credit{
     background-color: rgba(0,0,0,0.5);
     border-left:2px solid white;
     border-right:2px solid white;
}
.gameitem {
    position: relative;
    display: flex;
    align-items:center;
    float: left;
    margin-right:20px;
    margin-bottom:20px;
    cursor: pointer;
    .name,.credit,.h {
        box-sizing: border-box;
        float:left;
        padding:12px;
        background-color: rgba(255,255,255,0.5);
    }
    .name {
        border-radius: 12px 0 0 12px;   
        border-right:2px solid white; 
    }
    .h{
        padding:0px;
        width:20px;
        height:8px;
        background-color: white;
    }
    .credit{
        border-radius: 0 12px 12px 0;    
         border-left:2px solid white; 
    }
}
input {
    padding:4px;
    border-radius: 5px;
    outline: none;
    background-color: rgba(0,0,0,0.5);
    color:white;
}
label {
    padding:0 10px;
}
.baseinfo {
    box-sizing: border-box;
    height:50%;
    padding:30px 120px;
    .left,.right {
        box-sizing: border-box;
        float: left;
        width:50%;
        height:100%;
    }
    .left {
        background-color: rgba(255,255,255,0.5);
        background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582910176911&di=8594f8436173fe123d5054cf75e880d2&imgtype=0&src=http%3A%2F%2F02.imgmini.eastday.com%2Fmobile%2F20180424%2F20180424201855_888d0844bad4215245e92ea548c38a62_2.gif') no-repeat;
        background-position: center;
        background-size:100% 175%;
    }
    .right {
        padding-left:20px;
    }
}
.gameinfo {
    user-select: none;
    height:42%;
    padding:30px 120px;
}
.personal {
    margin:0 auto;
    height: 564px;
    overflow: hidden;
}
.title {
    user-select: none;
    height:3%;
    text-align: center;
    margin:0 120px;
    border-bottom:3px solid rgba(255,255,255,0.5);
}
</style>