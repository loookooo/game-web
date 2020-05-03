<template>
  <div>
    <el-card style="margin:0 30px">
      <el-tabs tab-position="left">
          <el-tab-pane label="用户管理">
            <user-manage></user-manage>
          </el-tab-pane>
          <el-tab-pane label="评论管理">
            <comment-manage></comment-manage>
          </el-tab-pane>
          <el-tab-pane label="资讯管理">
            <info-manage></info-manage>
          </el-tab-pane>
          <el-tab-pane label="游戏管理">
            <game-manage></game-manage>
          </el-tab-pane>
          <el-tab-pane label="排行管理">
            <rank-manage></rank-manage>
          </el-tab-pane>
        </el-tabs>
    </el-card>
  </div>
</template>
<script>
import UserManage from './Components/userManage.vue';
import CommentManage from './Components/commentManage.vue';
import InfoManage from './Components/infoManage.vue';
import GameManage from './Components/gameManage.vue';
import RankManage from './Components/rankManage.vue';
export default {
  components:{
    UserManage,CommentManage,InfoManage,GameManage,RankManage
  },
  data(){
    return {

    }
  }
}
</script>