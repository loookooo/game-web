<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input
          placeholder="请输入姓名或邮箱来搜索"
          v-model="formName"
          clearable
          @input="handleCurrentChange()"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-button size="small" @click="display=true,displayText='添加用户',displayForm={sex:'男'}">添加用户</el-button>
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
      <el-table-column prop="username" label="账号" width="180" align="center"></el-table-column>
      <el-table-column prop="password" label="密码" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" align="center" min-width="50px"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center" min-width="120px"></el-table-column>
      <el-table-column prop="autograph" label="签名" align="center"></el-table-column>
      <el-table-column prop="createTime" label="注册时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="small"
            @click="display=true,displayText='编辑用户',displayForm={...scope.row}"
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
    <!-- 添加用户弹框 -->
    <el-dialog :title="displayText" :visible.sync="display" width="400px">
      <el-form :model="displayForm" :rules="rules" ref="ruleForm" label-width="60px">
        <el-form-item label="用户" prop="name">
          <el-input v-model="displayForm.name"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="username">
          <el-input v-model="displayForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="displayForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="displayForm.sex" label="男"></el-radio>
          <el-radio v-model="displayForm.sex" label="女"></el-radio>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="displayForm.email"></el-input>
        </el-form-item>
        <el-form-item label="签名" prop="autograph">
          <el-input v-model="displayForm.autograph" maxlength="20" show-word-limit></el-input>
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
      displayText: null,
      display: false,
      displayForm: {
        sex: "男"
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
      },
      nowData: [],
      nowDatePage: {
        size: 6,
        current: 1
      },
      formName: null //搜索筛选
    };
  },
  computed:{
    tableDate(){
      return this.$store.state.userList;
    },
    drawerData(){
      return this.$store.state.userCommentList;
    }
  },
  mounted() {
    this.handleCurrentChange();
  },
  methods: {
    drawerShow(row) {
      this.drawerForm = row;
      this.drawerForm.table = this.drawerData[row.id];
      this.drawerDisplay = true;
    },
    displayShow() {
      this.$refs["ruleForm"].validate(valid => {
        if (!valid) {
          this.$message("请完善内容");
          throw "输入非法";
        }
      });
      if (this.displayText == "添加用户") {
        let createTime = new Date();
        let month = (createTime.getMonth()+1)<10?'0'+(createTime.getMonth()+1):(createTime.getMonth()+1);
        let day = (createTime.getDate())<10?'0'+(createTime.getDate()):(createTime.getDate());
        createTime = `${createTime.getFullYear()}-${month}-${day}`;
        this.tableDate.push({ ...this.displayForm, id: new Date().getTime(),createTime:createTime });
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
            item.name.indexOf(this.formName) != -1 ||
            item.email.indexOf(this.formName) != -1
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
        `此操作将永久删除{${row.name}}用户, 是否继续?`,
        "用户删除",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        this.$store.state.userList = this.$store.state.userList.filter(item => {
          return item.id != row.id;
        });
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