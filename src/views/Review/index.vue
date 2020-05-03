<template>
  <div style="margin: 0 30px;height:79vh;overflow:auto;">
    <el-card>
      <div id="newUser" class="echart"></div>
    </el-card>
    <el-card style="margin-top:30px">
        <div style="margin-bottom:15px">当前游戏：
        <el-cascader size="small"
        @change="selectGameChange()"
    v-model="selectGame" 
    :options="options"></el-cascader></div>
        <el-row :gutter="20">
            <el-col :span="24" style="margin-bottom:20px">
                <div id="gameUser" class="echart"></div>
            </el-col>
            <el-col :span="12" style="margin-bottom:0px">
                <div id="gameComment" class="echart"></div>
            </el-col>
            <el-col :span="12" style="margin-bottom:0px">
                <div id="gameInfo" class="echart"></div>
            </el-col>
        </el-row>
        
    </el-card>
  </div>
</template>
<script>
import ECHARTS from "echarts";
export default {
  data() {
    return {
        gameData:{
            模型操控:{
                user:{
                    in:[453,322,43,  231, 1211,421, 532,211,211],
                    out:[ 32,112, 12,22,44,56,17,49,22],
                },
                comment:[
                    { title:'优',value:564 },
                    { title:'良',value:234 },
                    { title:'差',value:11 }
                ],
                info:[
                    { name:'活动更新',value:7 },
                    { name:'新增内容',value:4 },
                    { name:'BUG修复',value:5 },
                    { name:'游戏攻略',value:15 },
                ]
            },
            飞机大战:{
                user:{
                    in:[12,22,33,  44, 55,66, 44,33,77],
                    out:[ 2,3, 1,12,3,1,4,6,21],
                },
                comment:[
                     { title:'优',value:123 },
                    { title:'良',value:432 },
                    { title:'差',value:32 }
                ],
                info:[
                    { name:'活动更新',value:3 },
                    { name:'新增内容',value:7 },
                    { name:'BUG修复',value:6 },
                    { name:'游戏攻略',value:23 },
                ]
            },
            推箱子:{
                user:{
                    in:[123,321,111,  222, 123,444, 333,200,111],
                    out:[ 12,13, 31,10,9,8,7,4,11],
                },
                comment:[
                    { title:'优',value:123 },
                    { title:'良',value:321 },
                    { title:'差',value:33 }
                ],
                info:[
                    { name:'活动更新',value:7 },
                    { name:'新增内容',value:6 },
                    { name:'BUG修复',value:5 },
                    { name:'游戏攻略',value:4 },
                ]
            },
            连连看:{
                user:{
                    in:[111,222,333,  444, 555,444, 333,222,111],
                    out:[ 33,22, 11,0,11,22,33,3,9],
                },
                comment:[
                    { title:'优',value:321 },
                    { title:'良',value:67 },
                    { title:'差',value:0 }
                ],
                info:[
                    { name:'活动更新',value:6 },
                    { name:'新增内容',value:8 },
                    { name:'BUG修复',value:10 },
                    { name:'游戏攻略',value:12 },
                ]
            },
        },
        gameIn:[],gameOut:[],
        gameGood:[],gameBad:[],
        gameNew:[],gameOld:[],
        selectGame:['休闲游戏','模型操控'],
        options:[
            {
                value:'休闲游戏',label:'休闲游戏',
                children:[{
                    value:'模型操控',label:'模型操控',
                },{
                    value:'飞机大战',label:'飞机大战',
                }]
            },
            {
                value:'益智游戏',label:'益智游戏',
                children:[{
                    value:'打击板',label:'打击板',
                },{
                    value:'连连看',label:'连连看',
                }]
            }
        ]
    };
  },
  mounted() {
    this.gameIn = this.gameData.模型操控.user.in;
    this.newUserChart();
    this.gameUserChart();
    this.gameCommentChart();
    this.gameInfoChart();
  },
  methods: {
    gameUserChart() {
      let myChart = ECHARTS.init(document.getElementById("gameUser"));
      myChart.setOption({
        color: ["#67C23A",'#909399',],
        title: {
          text: this.selectGame[1]+'—用户统计'
        },
        tooltip: {},
        legend: {
          data: ["流入用户",'流出用户'],
          bottom: 0
        },
        xAxis: {
            name:'月',
          data: [
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05"
          ]
        },
        yAxis: {
            name:'单位：人'
        },
        label:{
                position:'top',
                show:true
            },
        series: [
          {
            
            areaStyle:{},
            smooth: true,
            name: "流入用户",
            type: "bar",
            data: this.gameData[this.selectGame[1]].user.in
          },
          {
            label:{
                show:true
            },
            areaStyle:{},
            smooth: true,
            name: "流出用户",
            type: "bar",
            data: this.gameData[this.selectGame[1]].user.out
          }
        ]
      });
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    gameCommentChart() {
      let myChart = ECHARTS.init(document.getElementById("gameComment"));
      myChart.setOption({
        color: ["#F56C6C",'#E6A23C','#909399'],
        title: {
          text: this.selectGame[1]+'—评论统计'
        },
        tooltip: {},

        label:{
                position:'top',
                show:true
        },
        series: [
          {
            
            smooth: true,
            name: "评价",
            type: "pie",
            clockwise:false,
            tooltip:{
                formatter:params => `${params.data.title}：${params.data.value}条`
            },
            label:{
                show:true,
                formatter:params => `${params.data.title}：${params.data.value}条（占比${params.percent}%）`
            },
            data: this.gameData[this.selectGame[1]].comment
          }
        ]
      });
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    gameInfoChart(){
        let myChart = ECHARTS.init(document.getElementById("gameInfo"));
      myChart.setOption({
        color: ["#E6A23C",'#409EFF','#909399','#67C23A'],
        title: {
          text: this.selectGame[1]+'—资讯统计'
        },
        tooltip: {},

        label:{
                position:'top',
                show:true
        },
        series: [
          {
            
            smooth: true,
            name: "资讯",
            type: "funnel",
            clockwise:false,
            tooltip:{
                formatter:params => `${params.data.name}：${params.data.value}条`
            },
            label:{
                show:true,
                position:'inside',
                formatter:params => `${params.data.name}：${params.data.value}条`
            },
            data: this.gameData[this.selectGame[1]].info
          }
        ]
      });
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    selectGameChange(){
        this.gameUserChart();
        this.gameCommentChart();
        this.gameInfoChart();
    },
    newUserChart() {
      let myChart = ECHARTS.init(document.getElementById("newUser"));
      myChart.setOption({
        color: ["#67C23A",'#E6A23C','#409EFF'],
        title: {
          text: "近期概况"
        },
        tooltip: {},
        legend: {
          data: ["新增用户",'新增资讯','新增评论'],
          bottom: 0
        },
        xAxis: {
            name:'近一年概况',
          data: [
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05"
          ]
        },
        yAxis: {
            name:'单位：人'
        },
        series: [
          {
            label:{
                show:true
            },
            areaStyle:{},
            smooth: true,
            name: "新增用户",
            type: "line",
            data: [
              543,
              666,
              2312,
              3000,
              3450,
              2000,
              2567,
              4000,
              4555,
              4902,
              2111,
              2000
            ]
          },
          {
            areaStyle:{},
            label:{
                show:true
            },
            smooth: true,
            name: "新增资讯",
            type: "line",
            data: [
              33,
              55,
              345,
              765,
              234,
              765,
              1234,
              2345,
              4232,
              1234,
              222,
              555
            ]
          },
          {
            areaStyle:{},
            label:{
                show:true
            },
            smooth: true,
            name: "新增评论",
            type: "line",
            data: [
              35,
              678,
              233,
              345,
              432,
              543,
              1234,
              667,
              784,
              346,
              478,
              1111
            ]
          }
        ]
      });
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.echart {
  padding: 10px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
