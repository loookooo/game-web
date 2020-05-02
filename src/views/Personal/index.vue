<template>
  <div class="personal">
    <!-- 个人基础信息 -->
    <div class="baseinfo">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card style="position:relative">
            <div class="myinfoup" @click="upinfoDisplay=true,infoForm={...userInfo}">
              <i class="el-icon-edit"></i>
            </div>
            <el-row>
              <el-col :span="9">
                <el-avatar shape="square" :size="200" fit="fill" :src="userInfo.icon"></el-avatar>
              </el-col>
              <el-col :span="15">
                <div class="baseitem">
                  <label for="name">昵称 :</label>
                  {{userInfo.name}}
                </div>
                <br />
                <div class="baseitem">
                  <label for="autograph">签名 :</label>
                  {{userInfo.autograph}}
                </div>
                <br />
                <div class="baseitem">
                  <label for="sex">性别 :</label>
                  {{userInfo.sex}}
                </div>
                <br />
                <div class="baseitem">
                  <label for="email">邮箱 :</label>
                  {{userInfo.email}}
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card style=" display: flex;align-items: center;height:246px;">
            <div>
              <div class="gameitem" v-for="(item,key) in gradeList" :key="key">
                <div class="name">{{key}}</div>
                <div class="h"></div>
                <div class="credit">{{item}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 标题 -->
    <div :class="['title wow animated']"></div>
    <!-- 个人游戏信息 -->
    <div
      style="margin:10px;text-align:center;background:rgba(255,255,255,0.5);width:25%;padding:5px 0;border-radius:5px;margin-left:50%;transform:translateX(-50%)"
    >游戏截图</div>
    <div style="height:50%;margin:0 120px;overflow:auto">
      <div style="display:flex;align-items: center;flex-wrap: wrap;">
        <div class="demo-image__lazy">
          <el-image
            lazy
            v-for="item in srcList"
            :key="item.id"
            class="imgItem"
            :src="item"
            :preview-src-list="srcList"
          ></el-image>
        </div>
      </div>
    </div>
    <!-- 修改个人信息 -->
    <el-dialog title="编辑信息" :visible.sync="upinfoDisplay" width="30%">
      <el-form :model="infoForm">
        <el-form-item label="昵称" label-width="50px">
          <el-input v-model="infoForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="签名" label-width="50px">
          <el-input v-model="infoForm.autograph" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="50px">
          <el-radio v-model="infoForm.sex" label="男"></el-radio>
          <el-radio v-model="infoForm.sex" label="女"></el-radio>
        </el-form-item>
        <el-form-item label="邮箱" label-width="50px">
          <el-input v-model="infoForm.email" autocomplete="off" maxlength="20"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="upinfoDisplay = false" size="small">取 消</el-button>
        <el-button type="primary" @click="upinfo()" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "personal",
  data() {
    return {
      upinfoDisplay: false,
      infoForm: {},
      srcList: [
        "http://img.pcgames.com.cn/images/upload/upc/tx/gamephotolib/1602/26/c0/15671392_1456456052204.jpg",
        "http://img.pcgames.com.cn/images/upload/upc/tx/gamephotolib/1602/26/c0/15671391_1456458673889_medium.jpg",
        "http://img.pcgames.com.cn/images/upload/upc/tx/gamephotolib/1602/26/c0/15671391_1456458684203_medium.jpg",
        "http://pic1.win4000.com/wallpaper/2018-06-13/5b207f27b7e0e.jpg",
        "http://pic1.win4000.com/wallpaper/2020-04-22/5e9ff771db747.jpg",
        "http://img.netbian.com/file/2020/0210/0213f891efbaebc904df076d8264a5c9.jpg",
        "https://img.yxbao.com/photo/202004/17/c51eabbcde.jpg",
        "https://img.yxbao.com/photo/202002/18/f9a2cef24a.jpg",
        "https://img.yxbao.com/photo/202003/06/4f961cdf61.jpg",
        "https://img.yxbao.com/photo/202003/23/6eac7fbc40.jpg",
        "https://img.yxbao.com/photo/201911/02/f773bda556.jpg",
        "http://img.pcgames.com.cn/images/upload/upc/tx/gamephotolib/1602/26/c0/15671392_1456456052204.jpg",
        "http://img.pcgames.com.cn/images/upload/upc/tx/gamephotolib/1602/26/c0/15671391_1456458673889_medium.jpg",
        "http://img.pcgames.com.cn/images/upload/upc/tx/gamephotolib/1602/26/c0/15671391_1456458684203_medium.jpg",
        "http://pic1.win4000.com/wallpaper/2018-06-13/5b207f27b7e0e.jpg",
        "http://pic1.win4000.com/wallpaper/2020-04-22/5e9ff771db747.jpg",
        "http://img.netbian.com/file/2020/0210/0213f891efbaebc904df076d8264a5c9.jpg",
        "https://img.yxbao.com/photo/202004/17/c51eabbcde.jpg",
        "https://img.yxbao.com/photo/202002/18/f9a2cef24a.jpg",
        "https://img.yxbao.com/photo/202003/06/4f961cdf61.jpg",
        "https://img.yxbao.com/photo/202003/23/6eac7fbc40.jpg",
        "https://img.yxbao.com/photo/201911/02/f773bda556.jpg"
      ],
      userInfo: {
        name: "loookooo",
        sex: "男",
        autograph: "我是月光下的程序猿",
        email: "1378433758@163.com",
        icon:
          "http://img2.imgtn.bdimg.com/it/u=356979201,3336464687&fm=26&gp=0.jpg",
        createTime: "2019-12-12"
      },
      gradeList: {
        模型操作: 99,
        飞机大战: 2345,
        推箱子: 67,
        连连看: 435,
        坦克大战: 123,
        狂扁小朋友: 6785,
        放屁超人: 43,
        海贼无双: 4321
      }
    };
  },
  methods:{
      upinfo(){
          this.upinfoDisplay = false;
          this.userInfo=this.infoForm;
          this.$notify({
          title: '修改成功',
          type: 'success'
        });
      }
  }
};
</script>
<style lang="scss" scoped>
.myinfoup {
  position: absolute;
  bottom: 7px;
  right: 12px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  padding: 3px;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
}
.imgItem {
  width: 227px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.5);
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}
.baseitem {
  margin-bottom: 15px;
  padding: 9px;
  padding-right: 15px;
  border-radius: 0 15px 15px 0;
  border-left: 2px solid white;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.2);
}
.baseitem:hover {
  background-color: rgba(0, 0, 0, 0.5);
  border-right: 2px solid white;
}
.gameitem:hover .name,
.gameitem:hover .credit {
  background-color: rgba(0, 0, 0, 0.5);
  border-left: 2px solid white;
  border-right: 2px solid white;
}
.gameitem {
  position: relative;
  display: flex;
  align-items: center;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;

  cursor: pointer;
  .name,
  .credit,
  .h {
    box-sizing: border-box;
    float: left;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .name {
    border-radius: 12px 0 0 12px;
    border-right: 2px solid white;
  }
  .h {
    padding: 0px;
    width: 20px;
    height: 8px;
    background-color: white;
  }
  .credit {
    border-radius: 0 12px 12px 0;
    border-left: 2px solid white;
  }
}
input {
  padding: 4px;
  border-radius: 5px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
label {
  padding: 0 10px;
}
.baseinfo {
  box-sizing: border-box;
  height: 50%;
  padding: 30px 120px;
  .left,
  .right {
    box-sizing: border-box;
    float: left;
    width: 50%;
    height: 100%;
  }
  .left {
    background-color: rgba(255, 255, 255, 0.5);
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582910176911&di=8594f8436173fe123d5054cf75e880d2&imgtype=0&src=http%3A%2F%2F02.imgmini.eastday.com%2Fmobile%2F20180424%2F20180424201855_888d0844bad4215245e92ea548c38a62_2.gif")
      no-repeat;
    background-position: center;
    background-size: 100% 175%;
  }
  .right {
    padding-left: 20px;
  }
}
.gameinfo {
  user-select: none;
  height: 42%;
  padding: 30px 120px;
}
.personal {
  margin: 0 auto;
  height: 564px;
  overflow: hidden;
}
.title {
  user-select: none;
  height: 3%;
  text-align: center;
  margin: 0 120px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}
</style>