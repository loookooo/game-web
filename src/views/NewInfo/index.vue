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
          <el-collapse accordion style="max-height:65vh;overflow:auto">
            <el-collapse-item
              v-for="item in game"
              :key="item.id"
              style="background:rgba(0,0,0,0.2);padding:0 10px"
            >
              <template slot="title" >
                <el-avatar shape="square" size="large" :src="item.img"></el-avatar>
                <div style="width:100%;margin-left:10px">
                  {{item.title}}
                  <span style="float:right;margin-right:10px">{{item.date}}</span>
                </div>
              </template>
              <el-carousel
                style="width:500px;margin-left:50%;transform:translateX(-50%);margin-top:20px;margin-bottom:10px"
              >
                <el-carousel-item v-for="img in item.imgs" :key="img">
                  <img :src="img" alt="加载失败" style="width:100%" />
                </el-carousel-item>
              </el-carousel>
              <div style="text-align:center;font-weight:bold;margin-bottom:10px">
                {{item.title}}
                <a href="http://www.baidu.com" target="_blank">去官网</a>
              </div>
              <div style="margin:0 10px;text-indent:2em">{{item.content}}</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card>
          <el-tabs v-model="activeName2" @tab-click="handleClick2">
            <el-tab-pane label="精彩推荐" name="1"></el-tab-pane>
            <el-tab-pane label="热度飘升" name="2"></el-tab-pane>
            <el-tab-pane label="游戏攻略" name="3"></el-tab-pane>
          </el-tabs>
          <el-row :gutter="20" style="max-height:65vh;overflow:auto;">
            <el-col :span="12" v-for="item in news" :key="item.id" class="right">
              <a href="http://www.baidu.com" target="_blank">
              <img :src="item.img" class="image" />
              <div class="rightItem">
                <span>{{item.title}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
              </a>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      game: [],
      arderGame: [
        {
          date: "2019-04-11",
          title: "这就是文艺复兴？《丁丁历险记》已经开始准备改游戏了",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/34f6b6c4-0be7-4115-97f8-49f1c866b202.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/34f6b6c4-0be7-4115-97f8-49f1c866b202.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "在13世纪晚期的佛罗伦萨，但丁、彼特拉克以及乔托几位大神重新开启了艺术的殿堂，用画作、文章作为钥匙，开启了一扇名为艺术复兴的大门。但这几位大师可能想不到的是，800年之后的"
        },
        {
          date: "2019-04-15",
          title: "不知不觉“我能把游戏打通关”已经成为了一种调侃",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/2fd629c7-931e-4fa0-83c4-51db09566191.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/2fd629c7-931e-4fa0-83c4-51db09566191.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "还记得上小学的时候，也就是2000年的那会，在当时电脑虽然已经慢慢普及起来了，但能玩的网游还是比较的少，大部分的小伙伴们喜欢玩的还是那些经典的单机游戏，比如《三国英豪》、《仙剑奇侠传》等..."
        },
        {
          date: "2019-06-21",
          title: "《英雄传说：创之轨迹》开启预约 实体标准版售517元",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/e5d25ce4-3d6f-4aa0-ad3a-1812c25f6fad.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/e5d25ce4-3d6f-4aa0-ad3a-1812c25f6fad.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "《英雄传说：创之轨迹》在今日开启官网预约，其中实体标准版预计售价7800日元（约合人民币517元），不含税。数字标准版预计售价7600日元（约合人民币504元），含税。"
        },
        {
          date: "2020-01-23",
          title: "PSN澳/欧服喜加一！《杀手：第一季完整版》免费领取",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/f4c7a2c7-e736-43eb-9823-92d1bbd8aee9.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/f4c7a2c7-e736-43eb-9823-92d1bbd8aee9.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "据推特网友Wario64爆料称，PSN英、澳服日前开启喜加一活动，拥有这两个服账号的玩家现在可以免费领取《杀手：第一季完整版》（杀手6），且无需PS+会员也能领。"
        },
        {
          date: "2020-02-08",
          title: "《生化3：重制版》吉尔丰胸MOD 有一说一，太大了",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/74f35d06-3268-45d8-a7a0-4ad88774bb18.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/74f35d06-3268-45d8-a7a0-4ad88774bb18.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "油管MOD“老司机”GrizzoUK在今日发布了《生化危机3：重制版》吉尔黑色束胸“大”MOD，有一说一这个“车头灯”是真的大。"
        },
        {
          date: "2020-05-01",
          title: "《LOL》凯南背景故事“光影之间” 初生之土岌岌可危",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。"
        },
        {
          date: "2020-03-04",
          title: "《路易的鬼屋3》多人DLC已上线 追加小游戏、新服饰",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/6ceba5ee-faf6-4306-80e3-2e8e079be8a2.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/6ceba5ee-faf6-4306-80e3-2e8e079be8a2.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "《路易的鬼屋3（Luigis Mansion 3）》新DLC“多人游玩包”第2弹在今日（4月30日）上线，追加三套新服饰以及小游戏。"
        },
        {
          date: "2020-04-16",
          title: "NS日服开启《神奇101：复刻版》预购 7.6GB，无中文",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/1b8d1a40-c32b-41f5-aa12-236d4e882480.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/1b8d1a40-c32b-41f5-aa12-236d4e882480.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "神谷英树在昨晚发推表示，NS日服商店已经开启《神奇101：复刻版》预售，售价4387日元（约合人民币290元），将于6月11日正式解锁。"
        }
      ],
      alpiniaGame: [
        {
          title: "有理有据！《COD：战区/现代战争》加入观战举报功能",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/319694e8-bb7f-4c8e-bd43-d28cd4f27fa7.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/319694e8-bb7f-4c8e-bd43-d28cd4f27fa7.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          date: "2019-11-11",
          content:
            "据Infinity Ward官方推特发布的消息，在本周发布的更新当中，官方将为《使命召唤：战区》和《使命召唤：现代战争》上线新的“死亡回放&观战举报功能”，在推文中Infinity Wa..."
        },
        {
          date: "2019-04-11",
          title: "《任天堂明星大乱斗》联动角色6月公布 DLC开发顺利",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/71d1f1a5-0cb3-465d-a907-2f9812c884ed.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/71d1f1a5-0cb3-465d-a907-2f9812c884ed.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "《任天堂明星大乱斗：特别版》制作人樱井政博近日透露，虽然目前还在寻找远程办公的最佳形式，不过游戏DLC开发很顺利，预计6月就可以公开与《ARMS》联动的角色了。..."
        },
        {
          date: "2020-03-05",
          title: "《刺客信条：英灵殿》可定制身体细节 只有单人模式",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/5e19c174-dab3-46dc-ad4e-a0d49852df46.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/5e19c174-dab3-46dc-ad4e-a0d49852df46.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "随着育碧正式公布《刺客信条》新作《刺客信条：英灵殿》，游戏的相关情报也随之公布。据了解，本作支持定制身体细节，且只有单人模式。"
        },
        {
          date: "2019-02-22",
          title: "Steam《黑手党3》限时免费试玩 本体同步促销仅32元",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/d640c264-ca55-4dcd-90ef-bd2ef39d6f16.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/d640c264-ca55-4dcd-90ef-bd2ef39d6f16.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "Steam平台日前开启《黑手党3》限时免费玩活动，截止至5月7日前，玩家可在Steam上免费体验游戏。此外，《黑手党3》本体也在Steam开启了特价促销，优惠75%，折后价32元。+会员也能领。"
        },
        {
          date: "2019-08-17",
          title: "《赛博朋克2077》虎爪帮介绍 行事凶狠暴虐的日本黑帮",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/25fcc64a-2f0c-4965-86b7-b85dfe8a3aad.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/25fcc64a-2f0c-4965-86b7-b85dfe8a3aad.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "CDPR的《赛博朋克2077》势力介绍仍在进行中，官方在昨日公布了游戏中“虎爪帮”介绍，他们是行事凶狠暴虐的日本黑帮。"
        },
        {
          date: "2019-09-09",
          title: "《LOL》凯南背景故事“光影之间” 初生之土岌岌可危",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。"
        }
      ],
      actionGame: [
        {
          date: "2019-04-11",
          title: "这就是文艺复兴？《丁丁历险记》已经开始准备改游戏了",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/34f6b6c4-0be7-4115-97f8-49f1c866b202.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/34f6b6c4-0be7-4115-97f8-49f1c866b202.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "在13世纪晚期的佛罗伦萨，但丁、彼特拉克以及乔托几位大神重新开启了艺术的殿堂，用画作、文章作为钥匙，开启了一扇名为艺术复兴的大门。但这几位大师可能想不到的是，800年之后的"
        },
        {
          date: "2019-04-15",
          title: "不知不觉“我能把游戏打通关”已经成为了一种调侃",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/2fd629c7-931e-4fa0-83c4-51db09566191.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/2fd629c7-931e-4fa0-83c4-51db09566191.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "还记得上小学的时候，也就是2000年的那会，在当时电脑虽然已经慢慢普及起来了，但能玩的网游还是比较的少，大部分的小伙伴们喜欢玩的还是那些经典的单机游戏，比如《三国英豪》、《仙剑奇侠传》等..."
        },
        {
          date: "2019-06-21",
          title: "《英雄传说：创之轨迹》开启预约 实体标准版售517元",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/e5d25ce4-3d6f-4aa0-ad3a-1812c25f6fad.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/e5d25ce4-3d6f-4aa0-ad3a-1812c25f6fad.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "《英雄传说：创之轨迹》在今日开启官网预约，其中实体标准版预计售价7800日元（约合人民币517元），不含税。数字标准版预计售价7600日元（约合人民币504元），含税。"
        },
        {
          date: "2020-01-23",
          title: "PSN澳/欧服喜加一！《杀手：第一季完整版》免费领取",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/f4c7a2c7-e736-43eb-9823-92d1bbd8aee9.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/f4c7a2c7-e736-43eb-9823-92d1bbd8aee9.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "据推特网友Wario64爆料称，PSN英、澳服日前开启喜加一活动，拥有这两个服账号的玩家现在可以免费领取《杀手：第一季完整版》（杀手6），且无需PS+会员也能领。"
        },
        {
          date: "2020-02-08",
          title: "《生化3：重制版》吉尔丰胸MOD 有一说一，太大了",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/74f35d06-3268-45d8-a7a0-4ad88774bb18.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/74f35d06-3268-45d8-a7a0-4ad88774bb18.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "油管MOD“老司机”GrizzoUK在今日发布了《生化危机3：重制版》吉尔黑色束胸“大”MOD，有一说一这个“车头灯”是真的大。"
        },
        {
          date: "2020-05-01",
          title: "《LOL》凯南背景故事“光影之间” 初生之土岌岌可危",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。"
        },
        {
          date: "2020-03-04",
          title: "《路易的鬼屋3》多人DLC已上线 追加小游戏、新服饰",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/6ceba5ee-faf6-4306-80e3-2e8e079be8a2.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/6ceba5ee-faf6-4306-80e3-2e8e079be8a2.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "《路易的鬼屋3（Luigis Mansion 3）》新DLC“多人游玩包”第2弹在今日（4月30日）上线，追加三套新服饰以及小游戏。"
        },
        {
          date: "2020-04-16",
          title: "NS日服开启《神奇101：复刻版》预购 7.6GB，无中文",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/1b8d1a40-c32b-41f5-aa12-236d4e882480.png?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/1b8d1a40-c32b-41f5-aa12-236d4e882480.png?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "神谷英树在昨晚发推表示，NS日服商店已经开启《神奇101：复刻版》预售，售价4387日元（约合人民币290元），将于6月11日正式解锁。"
        }
      ],
      parkourGame: [
        {
          title: "有理有据！《COD：战区/现代战争》加入观战举报功能",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/319694e8-bb7f-4c8e-bd43-d28cd4f27fa7.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/319694e8-bb7f-4c8e-bd43-d28cd4f27fa7.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          date: "2019-11-11",
          content:
            "据Infinity Ward官方推特发布的消息，在本周发布的更新当中，官方将为《使命召唤：战区》和《使命召唤：现代战争》上线新的“死亡回放&观战举报功能”，在推文中Infinity Wa..."
        },
        {
          date: "2019-04-11",
          title: "《任天堂明星大乱斗》联动角色6月公布 DLC开发顺利",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/71d1f1a5-0cb3-465d-a907-2f9812c884ed.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/71d1f1a5-0cb3-465d-a907-2f9812c884ed.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "《任天堂明星大乱斗：特别版》制作人樱井政博近日透露，虽然目前还在寻找远程办公的最佳形式，不过游戏DLC开发很顺利，预计6月就可以公开与《ARMS》联动的角色了。..."
        },
        {
          date: "2020-03-05",
          title: "《刺客信条：英灵殿》可定制身体细节 只有单人模式",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/5e19c174-dab3-46dc-ad4e-a0d49852df46.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/5e19c174-dab3-46dc-ad4e-a0d49852df46.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "随着育碧正式公布《刺客信条》新作《刺客信条：英灵殿》，游戏的相关情报也随之公布。据了解，本作支持定制身体细节，且只有单人模式。"
        },
        {
          date: "2019-02-22",
          title: "Steam《黑手党3》限时免费试玩 本体同步促销仅32元",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/d640c264-ca55-4dcd-90ef-bd2ef39d6f16.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/d640c264-ca55-4dcd-90ef-bd2ef39d6f16.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "Steam平台日前开启《黑手党3》限时免费玩活动，截止至5月7日前，玩家可在Steam上免费体验游戏。此外，《黑手党3》本体也在Steam开启了特价促销，优惠75%，折后价32元。+会员也能领。"
        },
        {
          date: "2019-08-17",
          title: "《赛博朋克2077》虎爪帮介绍 行事凶狠暴虐的日本黑帮",
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/25fcc64a-2f0c-4965-86b7-b85dfe8a3aad.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/5/1/25fcc64a-2f0c-4965-86b7-b85dfe8a3aad.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "CDPR的《赛博朋克2077》势力介绍仍在进行中，官方在昨日公布了游戏中“虎爪帮”介绍，他们是行事凶狠暴虐的日本黑帮。"
        },
        {
          date: "2019-09-09",
          title: "《LOL》凯南背景故事“光影之间” 初生之土岌岌可危",
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
          imgs: [
            "http://i-4-yxdown.715083.com/2020/4/30/b782b076-ddcb-4b75-87e9-228b2167ac01.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/24/7c1fa067-d8d8-431a-8dca-95366163ce24.jpg?imageView2/2/q/90",
            "http://i-4-yxdown.715083.com/2020/4/28/9cde426f-f1d3-4c98-a6bd-cbb3b6df7462.png?imageView2/2/q/90"
          ],
          content:
            "英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。"
        }
      ],
      //-------------------
      activeName2: "1",
      news:[],
      recommend: [
        {
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/9c039ffa-f0ca-4f69-8860-5041b0afca6f.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "《赛博朋克2077》虎爪帮"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/683ffb0e-1b35-4502-b916-eb40e045db96.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "《火炬之光》新预告"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/fed10acb-6a74-4463-9143-688785f616b3.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "Epic喜加二！可领《失忆症：黑暗后裔》《崩溃大陆》"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/ac1bd522-4a44-4f36-b203-ee852b44f15c.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "微软下周公布Xbox Series X游戏演示 含刺客信条新作"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/1/12/b4cd0cef-c68e-4487-b533-f618aba5638f.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "腾讯深度定制的腾讯黑鲨游戏手机3成为游戏手机新标杆"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/3/3/080d0cb4-465c-4bf8-9e0e-16ab4b97e170.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "全球首款5G游戏手机—腾讯黑鲨游戏手机3系重磅发布"
        }
      ],
      heat:[
        {
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/ee812757-cd21-417c-a855-901652e7940f.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "《赛博朋克2077》虎爪帮"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/7a5cc2c2-b3d1-4260-b1c7-2f35b9b3a325.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "《火炬之光》新预告"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/4/30/6377fa03-722c-415d-a403-d38c6807958f.jpg?imageView2/2/q/65/w/600",
          url: "www.baidu.com",
          title: "Epic喜加二！可领《失忆症：黑暗后裔》《崩溃大陆》"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/63c208eb-0e6c-405e-b98d-1460797328f0.png?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "微软下周公布Xbox Series X游戏演示 含刺客信条新作"
        },
      ],
      strategy:[
        {
          img:
            "http://i-4-yxdown.715083.com/2020/5/1/ca789294-5bb5-4a97-b0f1-afdfa531cc08.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "《赛博朋克2077》虎爪帮"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2019/3/22/b44c004c-042e-4ee5-af33-2e68dcf3f671.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "《火炬之光》新预告"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2019/4/23/cfcfa228-0773-4b06-8601-7256a6cd74c4.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "Epic喜加二！可领《失忆症：黑暗后裔》《崩溃大陆》"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2019/4/26/e93dd7d0-9ca5-4599-83b4-a0e169e07910.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "微软下周公布Xbox Series X游戏演示 含刺客信条新作"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2019/5/16/998a4949-83bc-4d05-9e52-45fc353905b3.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "腾讯深度定制的腾讯黑鲨游戏手机3成为游戏手机新标杆"
        },
        {
          img:
            "http://i-4-yxdown.715083.com/2020/2/8/ee4e4499-17df-499f-a663-9049d4a201c2.jpg?imageView2/2/q/90",
          url: "www.baidu.com",
          title: "全球首款5G游戏手机—腾讯黑鲨游戏手机3系重磅发布"
        }
      ],
    };
  },
  mounted() {
    this.game = this.arderGame;
    this.news = this.strategy;
  },
  methods: {
    handleClick(tab) {
      switch (tab.name) {
        case "1":
          this.game = this.arderGame;
          break;
        case "2":
          this.game = this.alpiniaGame;
          break;
        case "3":
          this.game = this.actionGame;
          break;
        case "4":
          this.game = this.parkourGame;
          break;
      }
    },
    handleClick2(tab) {
      switch (tab.name) {
        case "1":this.news = this.strategy;
          break;
        case "2":this.news = this.heat;
          break;
        case "3":this.news = this.recommend;
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.right {
  margin-bottom:15px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    transform: scale(0.9,0.9);
   
    .rightItem {
    background:rgba(255,255,255,0.7);
        color:#000;
    }
  }
  .rightItem{
    position: relative;
    z-index: 999;
    background:rgba(0,0,0,0.7);
    height:25px;
    margin-top:-25px;
    line-height: 25px;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    
  }
}


.main {
  .el-card {
    margin: 0 30px;
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>