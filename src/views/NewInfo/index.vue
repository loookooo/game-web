<template>
  <div class="mian">
    <el-row :gutter="1">
      <el-col :span="15">
        <el-card>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="休闲游戏" name="1"></el-tab-pane>
            <el-tab-pane label="益智游戏" name="2"></el-tab-pane>
            <el-tab-pane label="动作游戏" name="3"></el-tab-pane>
            <el-tab-pane label="跑酷游戏" name="4"></el-tab-pane>
          </el-tabs>
          <el-collapse accordion style="height:65vh;overflow:auto">
            <el-collapse-item v-for="item in game" :key="item.id" style="background:rgba(0,0,0,0.2);padding:0 10px">
              <template slot="title">
                <i class="header-icon el-icon-info" style="margin-right:5px"></i>
                {{item.title}}
              </template>
              <el-image :src="item.img" style="width:500px;margin-left:50%;transform:translateX(-50%);margin-top:20px;margin-bottom:10px"></el-image>
              <div style="margin:0 10px;text-indent:2em">{{item.content}}</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card>asd</el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName:'1',
      game:[],
      arderGame: [
        {
          title: "这就是文艺复兴？《丁丁历险记》已经开始准备改游戏了",
          img:'http://i-4-yxdown.715083.com/2020/4/30/34f6b6c4-0be7-4115-97f8-49f1c866b202.png?imageView2/2/q/90',
          content:
            "在13世纪晚期的佛罗伦萨，但丁、彼特拉克以及乔托几位大神重新开启了艺术的殿堂，用画作、文章作为钥匙，开启了一扇名为艺术复兴的大门。但这几位大师可能想不到的是，800年之后的"
        },
        {
          title: "不知不觉“我能把游戏打通关”已经成为了一种调侃",
          img:'http://i-4-yxdown.715083.com/2020/4/30/2fd629c7-931e-4fa0-83c4-51db09566191.png?imageView2/2/q/90',
          content:
            "还记得上小学的时候，也就是2000年的那会，在当时电脑虽然已经慢慢普及起来了，但能玩的网游还是比较的少，大部分的小伙伴们喜欢玩的还是那些经典的单机游戏，比如《三国英豪》、《仙剑奇侠传》等..."
        },
        {
          title: "《英雄传说：创之轨迹》开启预约 实体标准版售517元",
          img:'http://i-4-yxdown.715083.com/2020/4/30/e5d25ce4-3d6f-4aa0-ad3a-1812c25f6fad.jpg?imageView2/2/q/90',
          content:
            "《英雄传说：创之轨迹》在今日开启官网预约，其中实体标准版预计售价7800日元（约合人民币517元），不含税。数字标准版预计售价7600日元（约合人民币504元），含税。"
        },
        {
          title: "PSN澳/欧服喜加一！《杀手：第一季完整版》免费领取",
          img:'http://i-4-yxdown.715083.com/2020/4/30/f4c7a2c7-e736-43eb-9823-92d1bbd8aee9.jpg?imageView2/2/q/90',
          content:
            "据推特网友Wario64爆料称，PSN英、澳服日前开启喜加一活动，拥有这两个服账号的玩家现在可以免费领取《杀手：第一季完整版》（杀手6），且无需PS+会员也能领。"
        },
        {
          title: "《生化3：重制版》吉尔丰胸MOD 有一说一，太大了",
          img:'http://i-4-yxdown.715083.com/2020/4/30/74f35d06-3268-45d8-a7a0-4ad88774bb18.png?imageView2/2/q/90',
          content:
            "油管MOD“老司机”GrizzoUK在今日发布了《生化危机3：重制版》吉尔黑色束胸“大”MOD，有一说一这个“车头灯”是真的大。"
        },
        {
          title: "《LOL》凯南背景故事“光影之间” 初生之土岌岌可危",
          img:'http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90',
          content:
            "英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。"
        },
        {
          title: "《路易的鬼屋3》多人DLC已上线 追加小游戏、新服饰",
          img:'http://i-4-yxdown.715083.com/2020/4/30/6ceba5ee-faf6-4306-80e3-2e8e079be8a2.jpg?imageView2/2/q/90',
          content:
            "《路易的鬼屋3（Luigis Mansion 3）》新DLC“多人游玩包”第2弹在今日（4月30日）上线，追加三套新服饰以及小游戏。"
        },
        {
          title: "NS日服开启《神奇101：复刻版》预购 7.6GB，无中文",
          img:'http://i-4-yxdown.715083.com/2020/4/30/1b8d1a40-c32b-41f5-aa12-236d4e882480.png?imageView2/2/q/90',
          content:
            "神谷英树在昨晚发推表示，NS日服商店已经开启《神奇101：复刻版》预售，售价4387日元（约合人民币290元），将于6月11日正式解锁。"
        }
      ],
      alpiniaGame:[
        {
          title: "有理有据！《COD：战区/现代战争》加入观战举报功能",
          img:'http://i-4-yxdown.715083.com/2020/4/30/319694e8-bb7f-4c8e-bd43-d28cd4f27fa7.jpg?imageView2/2/q/90',
          content:
            "据Infinity Ward官方推特发布的消息，在本周发布的更新当中，官方将为《使命召唤：战区》和《使命召唤：现代战争》上线新的“死亡回放&观战举报功能”，在推文中Infinity Wa..."
        },
        {
          title: "《任天堂明星大乱斗》联动角色6月公布 DLC开发顺利",
          img:'http://i-4-yxdown.715083.com/2020/4/30/1d169607-dd05-4c0c-8c6c-920697975a6f.jpg?imageView2/2/q/90',
          content:
            "《任天堂明星大乱斗：特别版》制作人樱井政博近日透露，虽然目前还在寻找远程办公的最佳形式，不过游戏DLC开发很顺利，预计6月就可以公开与《ARMS》联动的角色了。..."
        },
        {
          title: "《英雄传说：创之轨迹》开启预约 实体标准版售517元",
          img:'http://i-4-yxdown.715083.com/2020/4/30/e5d25ce4-3d6f-4aa0-ad3a-1812c25f6fad.jpg?imageView2/2/q/90',
          content:
            "《英雄传说：创之轨迹》在今日开启官网预约，其中实体标准版预计售价7800日元（约合人民币517元），不含税。数字标准版预计售价7600日元（约合人民币504元），含税。"
        },
        {
          title: "PSN澳/欧服喜加一！《杀手：第一季完整版》免费领取",
          img:'http://i-4-yxdown.715083.com/2020/4/30/f4c7a2c7-e736-43eb-9823-92d1bbd8aee9.jpg?imageView2/2/q/90',
          content:
            "据推特网友Wario64爆料称，PSN英、澳服日前开启喜加一活动，拥有这两个服账号的玩家现在可以免费领取《杀手：第一季完整版》（杀手6），且无需PS+会员也能领。"
        },
        {
          title: "《生化3：重制版》吉尔丰胸MOD 有一说一，太大了",
          img:'http://i-4-yxdown.715083.com/2020/4/30/74f35d06-3268-45d8-a7a0-4ad88774bb18.png?imageView2/2/q/90',
          content:
            "油管MOD“老司机”GrizzoUK在今日发布了《生化危机3：重制版》吉尔黑色束胸“大”MOD，有一说一这个“车头灯”是真的大。"
        },
        {
          title: "《LOL》凯南背景故事“光影之间” 初生之土岌岌可危",
          img:'http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90',
          content:
            "英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。"
        },
      ],
      actionGame:[],
      parkourGame:[]
    };
  },
  mounted(){
      this.game = this.arderGame;
  },
  methods:{
      handleClick(tab) {
        switch(tab.name){
            case '1':this.game = this.arderGame;break;
            case '2':this.game = this.alpiniaGame;break;
            case '3':this.game = this.actionGame;break;
            case '4':this.game = this.parkourGame;break;
        }
      }
  }
};
</script>
<style lang="scss" scoped>
.main {
  .el-card {
    margin: 0 30px;
  }
}
</style>