<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登陆表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 邮箱 -->
        <el-form-item prop="email">
          <el-input v-model="loginForm.email" placeholder="email"></el-input>
          <svg
            t="1684827319148"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2287"
            width="30"
            height="30"
          >
            <path
              d="M524.7 598.6l169.9-137c18-11.3 23.5-35.1 12.3-53.1-11.3-18-35.1-23.5-53.1-12.3l-169.9 137c-18 11.3-23.5 35.1-12.3 53.1 11.3 18.1 35.1 23.6 53.1 12.3z"
              fill="#2c2c2c"
              p-id="2288"
            ></path>
            <path
              d="M524.7 533.3l-169.9-137c-18-11.3-41.8-5.8-53.1 12.3-11.3 18-5.8 41.8 12.3 53.1l169.9 137c18 11.3 41.8 5.8 53.1-12.3 11.3-18.1 5.8-41.9-12.3-53.1z"
              fill="#2c2c2c"
              p-id="2289"
            ></path>
            <path
              d="M770.7 234.5H253.3c-70 0-126.7 56.7-126.7 126.7v301.6c0 70 56.7 126.7 126.7 126.7h517.4c70 0 126.7-56.7 126.7-126.7V361.2c0-70-56.7-126.7-126.7-126.7z m49.6 428.3c0 27.4-22.3 49.6-49.6 49.6H253.3c-27.4 0-49.6-22.3-49.6-49.6V361.2c0-27.4 22.3-49.6 49.6-49.6h517.4c27.4 0 49.6 22.3 49.6 49.6v301.6z"
              fill="#2c2c2c"
              p-id="2290"
            ></path>
          </svg>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="passwd">
          <el-input
            v-model="loginForm.passwd"
            placeholder="passwd"
            type="password"
          ></el-input>
          <svg
            t="1684827290825"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2072"
            width="30"
            height="30"
          >
            <path
              d="M388.7 473.5V331.9c0-65.9 49.6-123.8 115.3-128 71.6-4.5 131.3 52.4 131.3 123.1v122.7c0 0.3 0.3 0.6 0.6 0.6H309.4c-49.8 0-90.2 40.4-90.2 90.2v266.6c0 49.8 40.4 90.2 90.2 90.2h405.3c49.8 0 90.2-40.4 90.2-90.2V540.6c0-49.8-40.4-90.2-90.2-90.2h-2.8c0.3 0 0.6-0.3 0.6-0.6V327c0-113.7-94.7-205.3-209.5-200.2-108.1 4.8-191.2 98.2-191.2 206.4v140.3m416 333.6c0 7.3-5.9 13.2-13.2 13.2H309.4c-7.3 0-13.2-5.9-13.2-13.2V540.6c0-7.3 5.9-13.2 13.2-13.2h405.3c7.3 0 13.2 5.9 13.2 13.2v266.5z"
              fill="#2c2c2c"
              p-id="2073"
            ></path>
            <path
              d="M512 743.2c-21.3 0-38.5-17.3-38.5-38.5V643c0-21.3 17.3-38.5 38.5-38.5 21.3 0 38.5 17.3 38.5 38.5v61.7c0 21.3-17.2 38.5-38.5 38.5z"
              fill="#2c2c2c"
              p-id="2074"
            ></path>
          </svg>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
          <!-- @click=”“绑定点击事件 -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //这是登陆表单的数据绑定对象
      loginForm: {
        email: "dataSharing@126.com",
        passwd: "dataSharingPlatform",
      },
      //这是表单的验证规则对象
      loginFormRules: {
        //验证邮箱是否合法
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            min: 10,
            max: 20,
            message: "长度在 10 到 20 个字符",
            trigger: "blur",
          },
        ],
        //验证密码是否合法
        passwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 10,
            max: 20,
            message: "长度在 10 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    //点击登录按钮
    login() {
      console.log("登录成功");
      this.$message.success("登陆成功！");
      //通过编程式导航挑战到后台主页，路由地址是/home
      this.$router.push("/home");
      //预验证
      //this.$refs.loginFormRef.validate((valid) => {
      //console.log(valid);
      //if (!valid) return;
      //发起登录请求
      //this.$http.post("login", this.loginForm);
      //});
    },
    register() {
      //console.log("登录成功");
      //this.$message.success("登陆成功！");
      //通过编程式导航挑战到后台主页，路由地址是/home
      this.$router.push("/register");
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
  height: 300px;
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

.login_form {
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
