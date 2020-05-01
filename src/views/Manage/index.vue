<template>
  <div>
    <el-card style="margin:0 30px">
      <el-button size="small">添加用户</el-button>
      <el-table :data="userData" style="width: 100%;margin:10px 0" border>
        <el-table-column prop="name" label="用户" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              style="color:black;font-weight:bold;text-decoration:underline"
              size="small"
            >{{scope.row.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="username" label="账号" width="180" align="center"></el-table-column>
        <el-table-column prop="password" label="密码" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center" min-width="50px"></el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
        <el-table-column prop="autograph" label="签名" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="updUser(scope.row)">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button type="danger" size="small" @click="delUser(scope.row)">
              <i class="el-icon-delete"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
        <el-pagination
          style="margin-left:50%;transform:translateX(-50%)"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        ></el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage1: 5,
      userData: [
        {
          name: "吴亦凡",
          username: "123456",
          password: "abcdddd",
          sex: "男",
          email: "4u82304u2ji@163.com",
          autograph: "我是真滴牛逼"
        },
        {
          name: "罗志祥",
          username: "666666",
          password: "123456",
          sex: "男",
          email: "fg423fd234@163.com",
          autograph: "多人运动冲冲冲"
        },
        {
          name: "娜美",
          username: "235632",
          password: "jkljkljkl",
          sex: "女",
          email: "aaaaaaaa@163.com",
          autograph: "我能控制天气"
        },
        {
          name: "路飞",
          username: "1378433758",
          password: "111111111",
          sex: "男",
          email: "11111111@163.com",
          autograph: "我是即将成为海贼王的男人"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    updUser(row) {},
    delUser(row) {}
  }
};
</script>