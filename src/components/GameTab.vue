<template>
  <div class="ranking">
    <el-card class="box-card" style="padding:0!important">
      <div style="text-align:center;" slot="header" class="clearfix">
        <span>{{this.active}}</span>
      </div>
      <!-- 排行 -->
      <div style="height:450px;overflow:auto">
        <div v-if="active=='排行'">
          <div v-for="(item,index) in arr" :key="item.id" class="text item">
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.name+' ('+item.grade+')'"
              placement="right-start"
            >
              <el-row class="playscore">
                <el-col :span="6">第 {{index+1}} 名</el-col>
                <el-col :span="10" class="textFlow" style="text-align:center">{{item.name}}</el-col>
                <el-col :span="8" class="textFlow">得分: {{item.grade}}</el-col>
              </el-row>
            </el-tooltip>
          </div>
        </div>
        <!-- 评论 -->
        <div v-if="active=='评论'">
          <div v-for="item in com" :key="item.id" style="border-bottom:1px solid #fff;margin-bottom:5px">
            <div style="float:left">{{item.name}}：</div>
            <div style="float:left"><el-rate
              v-model="item.star"
              show-text
              disabled
              :texts="['','','','','']"
              :colors="colors"
            ></el-rate></div>
            <br>
            <div style="margin:10px 0;text-indent:2em;font-size:14px">{{item.content}}</div>
          </div>
        </div>
        <!-- 攻略 -->
        <div v-if="active=='攻略'">
          <div v-for="item in info" :key="item.id" class="infoItem" @click="activeIntrod=activeIntrod==item.id?null:item.id">
            <div style="text-align:center;font-weight:bold;">{{item.title}}
              <a :href="item.url" target="_blank" style="color:#409eff;font-size:16px;line-height:16px"><i class="el-icon-share"></i></a>
            </div>
            
            <div class="introduce" :class="activeIntrod == item.id?'introdActive':null">
              <div style="text-indent:2em;margin-top:5px">{{item.introduce}}</div>
              </div>
          </div>
        </div>
      </div>
    </el-card>
    <div>
      <el-row>
        <el-col
          :span="8"
          class="footerItem"
          :class="active=='排行'?'activefooter':null"
          @click.native="active='排行'"
        >
          <i class="el-icon-s-flag" style="margin-right:5px"></i>排行
        </el-col>
        <el-col
          :span="8"
          class="footerItem"
          :class="active=='评论'?'activefooter':null"
          @click.native="active='评论'"
        >
          <i class="el-icon-s-comment" style="margin-right:5px"></i>评论
        </el-col>
        <el-col
          :span="8"
          class="footerItem"
          :class="active=='攻略'?'activefooter':null"
          @click.native="active='攻略'"
        >
          <i class="el-icon-s-help" style="margin-right:5px"></i>攻略
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/composition-api";
export default {
  name: "ranking",
  props: {
    game: {
      type: String
    }
  },
  data() {
    return {
      activeIntrod:null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      active: "排行",
      arr: [],
      com: [],
      info: []
    };
  },
  mounted() {
    //排行
    this.arr = this.$store.getters.getGradeByGame(this.game);
    //评论
    this.com = this.$store.getters.getCommentByGame(this.game);
    //攻略
    this.info = this.$store.getters.getInfoByGame(this.game,'游戏攻略');
  }
};
</script>
<style lang="scss" scoped>
.infoItem {
  padding:5px;
   background: rgba(255,255,255,0.7);
    color:rgba(0, 0, 0, 0.8);
  margin-bottom:10px;
  cursor:pointer;
  &:hover {
    background: rgba(0,0,0,0.5);
    color:rgba(255, 255, 255, 0.8);
  }
  .introduce {
    transition: all .3s;
    height:0px;
    overflow: auto;
    margin-top:10px;
    
    font-size:14px
  }
  .introdActive {
    height:150px;
  }
}
.footerItem {
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: white;
  }
}
.activefooter {
  color: white;
  background: rgba(0, 0, 0, 0.5) !important;
}
.ranking {
  height: 529px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2) !important;
  border: 0;
  color: white;
}
//文本超出隐藏
.textFlow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.playscore {
  border-bottom: 1px solid white;
  cursor: pointer;
}
</style>