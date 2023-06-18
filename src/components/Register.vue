<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登陆表单区域 -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="register-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="ruleForm.nickname"></el-input>
        </el-form-item>
        <el-form-item id="passwd1" label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item id="passwd2" label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button type="primary" @click="goLogin">登录</el-button>
          <!-- @click=”“绑定点击事件 -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userTable: [],
      ruleForm: {
        username: "",
        nickname: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        pass: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { validator: validatePass2, trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() { },
  methods: {
    submitForm() {
      // const newUser = this.ruleForm;
      // axios.post("http://localhost:3000/userDataJson", newUser).then((res) => {
      //   console.log(res.data);
      // });

      // axios.get("http://localhost:3000/userDataJson").then((res) => {
      //   console.log(res.data);
      //   this.userTable = res.data;
      // });
      this.username = "";
      this.nickname = "";
      this.pass = "";
      this.checkPass = "";
      console.log("创建成功");
      this.$message.success("创建成功！");
    },
    // this.$refs[formName].validate((valid) => {
    //   if (valid) {
    //     // alert("submit!");
    //     // 调用方法发送ajax请求
    //     register(
    //       this.ruleForm.username,
    //       this.ruleForm.nickname,
    //       this.ruleForm.pass
    //     ).then((response) => {
    //       // console.log(response.data);
    //       // 这里的逻辑是如果在后台的数据库中注册成功的话，通过flag的布尔值来判断是否进入登录页面
    //       const resp = response.data;
    //       if (resp.flag) {
    //         // 调转到登录界面
    //         this.$router.push("/login");
    //       } else {
    //         this.$message({
    //           message: resp.message,
    //           type: "warning",
    //         });
    //       }
    //     });
    //   } else {
    //     console.log("error submit!!");
    //     return false;
    //   }
    // });
    goLogin() {
      // 跳转到登录页面，使用的时编程式的登陆跳转方法
      this.$router.push("/login");
    },
  },

};
</script>

<style lang="less" scoped>
.login_container {
  background: url("../assets/loginBackground2.jpg");
  background-size: cover;
  height: 100%;
  max-width: 100%;
}

.login_box {
  width: 450px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 2px solid #eee;
  border-radius: 50%; //圆角
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%; //先移动50%
  transform: translate(-50%, -50%); //在移动自身宽度的50%

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.register-ruleForm {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  padding-right: 60px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end; //尾部对齐
}

.icon {
  position: absolute; //只要右面有位置就会补齐
}
</style>
