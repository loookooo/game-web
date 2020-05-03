<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input
          placeholder="请输入用户或游戏来搜索"
          v-model="formName"
          clearable
          @input="handleCurrentChange()"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-button size="small" @click="display=true,displayText='添加记录',displayForm={}">添加记录</el-button>
      </el-col>
    </el-row>

    <el-table :data="nowData" style="width: 100%;margin:10px 0" border>
      <el-table-column prop="name" label="用户" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            @click.native="drawerShow(scope.row)"
            type="text"
            style="color:black;font-weight:bold;text-decoration:underline"
            size="small"
          >{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="game" label="游戏" align="center"></el-table-column>
      <el-table-column prop="grade" label="分数" width="180" align="center"></el-table-column>
      <el-table-column prop="createTime" label="录入时间" align="center" min-width="120px"></el-table-column>
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
    <!-- 添加记录弹框 -->
    <el-dialog :title="displayText" :visible.sync="display" width="400px">
      <el-form :model="displayForm" :rules="rules" ref="ruleForm" label-width="60px">
        <el-form-item label="用户" prop="name">
          <el-select v-model="displayForm.name" placeholder="请选择用户">
            <el-option
              v-for="item in userSelects"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
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
        <el-form-item label="分数" prop="grade">
          <el-input v-model="displayForm.grade" type="number" style="width:200px"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="display = false" size="small">取 消</el-button>
        <el-button type="primary" @click="displayShow()" size="small">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 详情抽屉 -->
    <el-drawer
      :title="'用户：'+drawerForm.name"
      :visible.sync="drawerDisplay"
      direction="rtl"
      size="50%"
     >
      <div style="overflow:auto;height:88vh;background:rgba(0,0,0,0.2);margin:0 10px;padding:0 10px">
        <div style="" v-for="(item,key) in drawerForm.table" :key="key">
          <el-divider content-position="left">{{key}}</el-divider>
          <el-row>
            <el-col :span="5">
              最高分：
              <span style="color:#F56C6C">{{item.最高分}}</span>
            </el-col>
            <el-col :span="5">
              最低分：
              <span style="color:#67C23A">{{item.最高分}}</span>
            </el-col>
          </el-row>
          <div style="margin:10px 0">评价：</div>

          <div v-for="it in item.评论" :key="it.id">
            <el-rate
              v-model="it.star"
              show-text
              disabled
              :texts="['差','差','良','良','优']"
              :colors="colors"
            ></el-rate>
            <div style="margin:10px 0;text-indent:2em">{{it.content}}</div>
          </div>
        </div>
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
        吴亦凡: {
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
        罗志祥: {
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
        game: [{ required: true, message: "请选择游戏", trigger: "blur" }],
        name: [{ required: true, message: "请选择用户", trigger: "blur" }],
        grade: [{ required: true, message: "请输入分数", trigger: "blur" }],
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
      return this.$store.state.gradeList;
    },
    userSelects() {
      return this.$store.state.userList;
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
      this.drawerForm.table = this.drawerData[row.name];
      this.drawerDisplay = true;
    },
    displayShow() {
      this.$refs["ruleForm"].validate(valid => {
        if (!valid) {
          this.$message("请完善内容");
          throw "输入非法";
        }
      });
      if (this.displayText == "添加记录") {
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
            item.game.indexOf(this.formName) != -1 ||
            item.name.indexOf(this.formName) != -1
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
        `此操作将永久删除{${row.name}}的{${row.game}}游戏的分数记录, 是否继续?`,
        "用户删除",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        this.$store.state.gradeList = this.$store.state.gradeList.filter(
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