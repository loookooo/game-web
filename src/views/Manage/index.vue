<template>
  <div>
    <el-card style="margin:0 30px">
      <el-tabs tab-position="left">
          <el-tab-pane label="用户管理">
            <user-manage></user-manage>
          </el-tab-pane>
          <el-tab-pane label="评论管理">
            <user-manage></user-manage>
          </el-tab-pane>
          <el-tab-pane label="资讯管理">
            <user-manage></user-manage>
          </el-tab-pane>
          <el-tab-pane label="游戏管理">
            <user-manage></user-manage>
          </el-tab-pane>
        </el-tabs>
    </el-card>
  </div>
</template>
<script>
import UserManage from './Components/userManage.vue';
export default {
  components:{
    UserManage
  },
  data(){
    return {

    }
  }
}
</script>