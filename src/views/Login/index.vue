<template>
  <div :class="['login wow animated',loginActive?'intoOut':'into']">
    <div class="login_warp">
      <ul class="menu_tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >{{ item.txt }}</li>
      </ul>
      <!-- 表单 start -->
      <el-form
        :model="userinfo"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login_form"
        size="mini"
      >
        <el-form-item prop="username">
          <label for="username">账号</label>
          <el-input type="text" v-model="userinfo.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <label for="password">密码</label>
          <el-input type="password" v-model="userinfo.password" autocomplete="off"></el-input>
        </el-form-item>

        <!-- <el-form-item prop="passwords" v-if="model === 'register'">
             <label for="passwords">重复密码</label>
            <el-input type="password" v-model="ruleForm.passwords" autocomplete="off"></el-input>
        </el-form-item>-->

        <el-form-item>
          <el-button
            :disabled="btnstatus"
            class="mybtn"
            type="info"
            style="width:100%;"
            @click="submitForm('ruleForm')"
          >{{model === 'login' ? '登录' : '注册'}}</el-button>
        </el-form-item>
      </el-form>
      <!-- 表单 end -->
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import { login, register } from "@/api/login.js";
import {
  reactive,
  ref,
  isRef,
  computed,
  onMounted
} from "@vue/composition-api";
export default {
  name: "login",
  setup(props, { refs, root }) {
    root.$nextTick(() => {
      // 在dom渲染完后,再执行动画
      new WOW({
        live: false
      }).init();
    });

    //特效
    const loginActive = ref(false);
    //账号验证规则
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    //密码验证规则
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    //用户信息
    const userinfo = reactive({
      username: '001',
      password: '001'
    });
    //表单验证规则
    const rules = reactive({
      username: [
        {
          validator: validateUsername,
          trigger: "blur"
        }
      ],
      password: [
        {
          validator: validatePassword,
          trigger: "blur"
        }
      ]
    });
    //页面参数
    const menuTab = reactive([
      {
        txt: "登录",
        current: true,
        type: "login"
      },
      {
        txt: "注册",
        current: false,
        type: "register"
      }
    ]);
    //模块值
    const model = ref("login");
    //按钮状态参数
    const btnstatus = ref(false);
    //方法
    //登录注册切换
    const toggleMenu = item => {
      menuTab.forEach((element, index) => {
        element.current = false;
      });
      item.current = true;
      model.value = item.type;
    };
    //提交
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          btnstatus.value = true;
          if (model.value == "login") {
			root.$staticData.LOING_USER_LIST.forEach(item=>{
				if(item.username === userinfo.username && item.password === userinfo.password){
					root.$notify({title: '登录成功',type: "success"});
					root.$store.commit("setUserInfo", item);
					root.$store.commit("setToken",item.token);
					loginActive.value = true;
					root.$router.push("/home");
				}
			});
            //登录
            // login(userinfo).then(res => {
            //   if (res.data.code == 200) {
            //     root.$notify({
            //       title: res.data.msg,
            //       type: "success"
            //     });
            //     root.$store.commit("setToken", res.data.token);
            //     root.$store.commit("setUserInfo", res.data.data);
            //     loginActive.value = true;
            //     setTimeout(() => {
            //       root.$router.push("/home"); //跳转首页
            //     }, 300);
            //   } else if (res.data.code == 201) {
            //     root.$notify.error({
            //       title: res.data.msg
            //     });
            //   }
            //   btnstatus.value = false;
            // });
          } else if (model.value == "register") {
            //注册
            register(userinfo).then(res => {
              if (res.data.code === 200) {
                root.$notify({
                  title: res.data.msg,
                  type: "success"
                });
              } else if (res.data.code === 201 || res.data.code === 202) {
                root.$notify.error({
                  title: res.data.msg
                });
              }
              btnstatus.value = false;
            });
          }
        } else {
          root.$message({
            message: "请完善信息!"
          });
          return false;
        }
      });
    };
    return {
      //参数
      userinfo,
      btnstatus,
      rules,
      menuTab,
      model,
      //方法
      toggleMenu,
      submitForm,
      loginActive
    };
  }
};
</script>
<style lang="scss" scoped>
.login {
  border-radius: 60px 0 60px 0;
  width: 350px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  margin-top: 30vh;
}

.login_warp {
  width: 330px;
  margin: 0 auto;
}

.menu_tab {
  text-align: center;

  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #cccccc;
    border-radius: 2px;
    cursor: pointer;
  }

  .current {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
}

.login_form {
  label {
    display: block;
    font-size: 14px;
    color: #fff;
  }
}
</style>
