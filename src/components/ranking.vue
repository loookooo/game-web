<template>
    <div class="ranking">
        <el-card class="box-card">
            <div slot="header" class="clearfix" style="text-align:center;">
                <span>排行榜</span>
            </div>
            <div v-for="(item,index) in rankingList" :key="item.id" class="text item">
                <el-tooltip class="item" effect="dark" :content="item.name+' ('+item.grade+')'" placement="right-start">
                     <el-row class="playscore">
                        <el-col :span="6">第 {{index+1}} 名</el-col>
                        <el-col :span="10" class="textFlow" style="text-align:center">{{item.name}}</el-col>
                        <el-col :span="8" class="textFlow">得分: {{item.grade}}</el-col>
                    </el-row>
                </el-tooltip>
            </div>
        </el-card>
    </div>
</template>
<script>
import { reactive } from '@vue/composition-api'
export default {
    name:'ranking',
    props:{
        rankingList:{
            type:Array,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
.ranking {
    height:520px;
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
    clear: both
  }

  .box-card {
    height:100%;
    background-color:transparent;
    border:0;
    color:white;
    
  }
  //文本超出隐藏
  .textFlow {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .playscore {
        border-bottom:1px solid white;
        cursor: pointer;
  }
</style>