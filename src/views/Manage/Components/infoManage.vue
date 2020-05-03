<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input
          placeholder="请输入游戏或标题来搜索"
          v-model="formName"
          clearable
          @input="handleCurrentChange()"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-button size="small" @click="display=true,displayText='添加资讯',displayForm={star:5}">添加资讯</el-button>
      </el-col>
    </el-row>

    <el-table :data="nowData" style="width: 100%;margin:10px 0" border>
      <el-table-column prop="game" label="游戏" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            @click.native="drawerShow(scope.row)"
            type="text"
            style="color:black;font-weight:bold;text-decoration:underline"
            size="small"
          >{{scope.row.game}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180" align="center">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            :title="scope.row.title"
            width="200"
            trigger="hover"
            :content="scope.row.introduce"
          >
            <div
              slot="reference"
              style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
            >{{scope.row.title}}</div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="introduce" label="简介" align="center" min-width="150px">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            :title="scope.row.title"
            width="200"
            trigger="hover"
            :content="scope.row.introduce"
          >
            <div
              slot="reference"
              style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
            >{{scope.row.introduce}}</div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="链接" align="center" min-width="200px">
          <template slot-scope="scope">
              <a :href="scope.row.url" target="_blank" style="color:black">{{scope.row.url}}</a>
          </template>
      </el-table-column>
      <el-table-column prop="createTime" label="发表时间" align="center" min-width="120px"></el-table-column>
      <el-table-column label="操作" align="center" min-width="100px">
        <template slot-scope="scope">
          <el-button
            size="small"
            @click="display=true,displayText='编辑资讯',displayForm={...scope.row}"
          >
            <i class="el-icon-edit"></i>
          </el-button>
          <el-button type="danger" size="small" @click="delUser(scope.row)">
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="fy"
      background
      @current-change="handleCurrentChange"
      :current-page.sync="nowDatePage.current"
      :total="tableDate.length"
      :page-size="nowDatePage.size"
      layout="total, prev, pager, next"
    ></el-pagination>
    <!-- 添加资讯弹框 -->
    <el-dialog :title="displayText" :visible.sync="display" width="400px">
      <el-form :model="displayForm" :rules="rules" ref="ruleForm" label-width="60px">
       
        <el-form-item label="游戏" prop="game">
          <el-select v-model="displayForm.game" placeholder="请选择游戏">
            <el-option
              v-for="item in gameSelects"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="displayForm.type" placeholder="请选择类型">
            <el-option
              v-for="item in typeSelects"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="displayForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="url">
          <el-input v-model="displayForm.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="introduce">
          <el-input v-model="displayForm.introduce" autocomplete="off" type="textarea"></el-input>
        </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="display = false" size="small">取 消</el-button>
        <el-button type="primary" @click="displayShow()" size="small">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 详情抽屉 -->
    <el-drawer
      :title="'游戏：'+drawerForm.game"
      :visible.sync="drawerDisplay"
      direction="rtl"
      size="50%"
    >
      <div
        style="overflow:auto;height:88vh;background:rgba(0,0,0,0.2);margin:0 10px;padding:0 10px"
      >
        <el-divider content-position="center">排行榜</el-divider>
        <el-row :gutter="20">
            <el-col :span="12" style v-for="(item,index) in drawerForm.table" :key="item.id">
                <el-row :gutter="10" style="margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid white;">
                    <el-col :span="7" style="color:rgba(0,0,0,0.7)">排名：<span style="color:#E6A23C">{{index+1}}</span></el-col>
                     <el-col :span="9" style="color:rgba(0,0,0,0.7)">玩家：<span style="color:blue">{{item.name}}</span></el-col>
                      <el-col :span="8" style="color:rgba(0,0,0,0.7)">分数：<span style="color:#F56C6C">{{item.grade}}</span></el-col>
                </el-row>
            </el-col>
        </el-row>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      drawerDisplay: false,
      drawerForm: {},
      drawerData: {
        1: {
          模型操作: {
            最高分: 56,
            最低分: 11,
            评论: [
              { star: 5, content: "是真的好玩" },
              { star: 1, content: "好像有点bug" }
            ]
          },
          飞机大战: {
            最高分: 342,
            最低分: 111,
            评论: [
              { star: 5, content: "游戏设计蛮不错的" },
              { star: 5, content: "很棒很棒" },
              { star: 5, content: "好刺激呀！！！！" }
            ]
          },
          连连看: {
            最高分: 56,
            最低分: 11,
            评论: [{ star: 3, content: "还可以" }]
          }
        },
        2: {
          模型操作: {
            最高分: 44,
            最低分: 5,
            评论: [
              { star: 3, content: "可以可以" },
              { star: 1, content: "结束设置的不行" }
            ]
          },
          飞机大战: {
            最高分: 1234,
            最低分: 11,
            评论: [
              { star: 5, content: "打击感蛮好的！！" },
              { star: 3, content: "爽啊！！！！" }
            ]
          }
        }
      },
      displayText: null,
      display: false,
      displayForm: {
        sex: "男"
      },
      rules: {
        type: [{ required: true, message: "请选择类型", trigger: "blur" }],
        game: [{ required: true, message: "请选择游戏", trigger: "blur" }],
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        url: [{ required: true, message: "请输入链接", trigger: "blur" }],
        introduce: [{ required: true, message: "请输入简介", trigger: "blur" }]
      },
      nowData: [],
      nowDatePage: {
        size: 6,
        current: 1
      },
      formName: null //搜索筛选
    };
  },
  computed: {
    tableDate() {
      return this.$store.state.infoList;
    },
    typeSelects() {
      return this.$store.state.infoTypes;
    },
    gameSelects() {
      return this.$store.state.gameList;
    }
  },
  mounted() {
    this.handleCurrentChange();
  },
  methods: {
    drawerShow(row) {
      this.drawerForm = row;
      this.drawerForm.table = this.$store.getters.getGradeByGame(row.game);
      this.drawerDisplay = true;
    },
    displayShow() {
      this.$refs["ruleForm"].validate(valid => {
        if (!valid) {
          this.$message("请完善内容");
          throw "输入非法";
        }
      });
      if (this.displayText == "添加资讯") {
        let createTime = new Date();
        let month =
          createTime.getMonth() + 1 < 10
            ? "0" + (createTime.getMonth() + 1)
            : createTime.getMonth() + 1;
        let day =
          createTime.getDate() < 10
            ? "0" + createTime.getDate()
            : createTime.getDate();
        createTime = `${createTime.getFullYear()}-${month}-${day}`;
        this.tableDate.push({
          ...this.displayForm,
          id: new Date().getTime(),
          createTime: createTime
        });
        this.$notify({
          title: "添加成功",
          type: "success"
        });
      } else {
        for (let i = 0; i < this.tableDate.length; i++) {
          if (this.tableDate[i].id == this.displayForm.id) {
            this.tableDate[i] = this.displayForm;
          }
        }
        this.$notify({
          title: "编辑成功",
          type: "success"
        });
      }
      this.handleCurrentChange();
      this.display = false;
    },
    handleCurrentChange() {
      this.nowData = [];
      if (this.formName) {
        this.tableDate.forEach(item => {
          if (
            item.title.indexOf(this.formName) != -1 ||
            item.game.indexOf(this.formName) != -1
          ) {
            this.nowData.push(item);
          }
        });
        this.nowData = this.nowData.slice(
          (this.nowDatePage.current - 1) * this.nowDatePage.size,
          this.nowDatePage.current * this.nowDatePage.size
        );
      } else {
        this.nowData = this.tableDate.slice(
          (this.nowDatePage.current - 1) * this.nowDatePage.size,
          this.nowDatePage.current * this.nowDatePage.size
        );
      }
    },
    delUser(row) {
      this.$confirm(
        `此操作将永久删除{${row.game}}游戏的资讯, 是否继续?`,
        "用户删除",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        this.$store.state.infoList = this.$store.state.infoList.filter(
          item => {
            return item.id != row.id;
          }
        );
        this.handleCurrentChange();
        this.$notify({
          title: "删除成功",
          type: "success"
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.fy {
  display: flex;
  justify-content: center;
}
</style>