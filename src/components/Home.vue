<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <!-- logo -->
      <div class="logo-icon">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 文字 -->
      <span>数据共享平台</span>
      <!-- 右侧盒子 -->
      <div class="user-box">
        <div class="user-avater" @click="menuToggle">
          <img
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            alt=""
          />
        </div>
        <div class="user-menu">
          <ul>
            <!-- <li>
              <svg
                t="1685031459116"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1146"
                width="200"
                height="200"
              >
                <path
                  d="M907.946667 799.402667a427.377778 427.377778 0 0 0-92.103111-136.561778 429.283556 429.283556 0 0 0-136.561778-92.131556c-0.455111-0.227556-0.910222-0.341333-1.365334-0.568889a282.823111 282.823111 0 0 0 117.475556-229.717333A283.392 283.392 0 0 0 512 57.002667a283.392 283.392 0 0 0-283.420444 283.420444 283.192889 283.192889 0 0 0 117.475555 229.831111c-0.455111 0.227556-0.910222 0.341333-1.365333 0.568889-51.2 21.617778-97.137778 52.565333-136.590222 92.131556a429.283556 429.283556 0 0 0-92.103112 136.533333 424.789333 424.789333 0 0 0-33.706666 157.866667 9.159111 9.159111 0 0 0 9.130666 9.386666h68.551112a9.102222 9.102222 0 0 0 9.159111-8.931555 340.736 340.736 0 0 1 100.352-233.500445 340.593778 340.593778 0 0 1 242.517333-100.437333c91.648 0 177.720889 35.640889 242.517333 100.437333a340.707556 340.707556 0 0 1 100.323556 233.500445 9.045333 9.045333 0 0 0 9.159111 8.903111h68.551111a9.102222 9.102222 0 0 0 9.159111-9.386667 425.898667 425.898667 0 0 0-33.706666-157.923555zM512 537.002667c-52.451556 0-101.831111-20.48-138.979556-57.6a195.299556 195.299556 0 0 1-57.6-138.979556c0-52.451556 20.48-101.831111 57.6-138.979555A195.299556 195.299556 0 0 1 512 143.843556c52.451556 0 101.831111 20.48 138.979556 57.6a195.299556 195.299556 0 0 1 57.6 138.979555c0 52.451556-20.48 101.831111-57.6 138.979556a195.299556 195.299556 0 0 1-138.979556 57.6z"
                  p-id="1147"
                ></path>
              </svg>
              <a href="#">我的账户</a>
            </li>
            <li>
              <svg
                t="1685036187538"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2255"
                width="200"
                height="200"
              >
                <path
                  d="M511.3 64.9c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.5-448-448-448z m0 806.4c-197.6 0-358.4-160.8-358.4-358.4s160.8-358.4 358.4-358.4 358.4 160.8 358.4 358.4S709 871.3 511.3 871.3z"
                  p-id="2256"
                ></path>
                <path
                  d="M522.5 423.3c-24.7 0-44.8 20.1-44.8 44.8v224c0 24.7 20.1 44.8 44.8 44.8 24.7 0 44.8-20.1 44.8-44.8v-224c0-24.7-20-44.8-44.8-44.8zM522.5 288.9c-24.7 0-44.8 20.1-44.8 44.8 0 24.7 20.1 44.8 44.8 44.8 24.7 0 44.8-20.1 44.8-44.8 0-24.7-20-44.8-44.8-44.8z"
                  p-id="2257"
                ></path>
              </svg>
              <a href="#">关于我们</a>
            </li> -->
            <li>
              <svg
                t="1685038223718"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4444"
                width="200"
                height="200"
              >
                <path
                  d="M136.2 513.8v366.7c0 26.4 23.4 47.8 52.4 47.8h261.8c28.9 0 52.4-21.4 52.4-47.8s-23.4-47.8-52.4-47.8H241V194.8h209.5c28.9 0 52.4-21.4 52.4-47.8s-23.4-47.8-52.4-47.8H188.6c-28.9 0-52.4 21.4-52.4 47.8v366.8z m757.5-34.6c10.1 8.8 16.4 21.5 16.4 35.6 0 14.2-6.3 26.8-16.4 35.6L728.3 693.8c-8.8 7.6-20.5 12.3-33.2 12.3-27.4 0-49.6-21.5-49.6-47.9 0-14.1 6.4-26.8 16.5-35.5l69.3-60.1h-301c-27.4 0-49.6-21.4-49.6-47.8s22.2-47.8 49.6-47.8h300.8l-69.3-60.1c-10.1-8.7-16.5-21.5-16.5-35.6 0-26.4 22.3-47.8 49.6-47.8 12.8 0 24.4 4.6 33.2 12.3l165.6 143.4z"
                  fill="#160B0B"
                  p-id="4445"
                ></path>
              </svg>
              <a href="#" @click="logout">退出账户</a>
            </li>
          </ul>
        </div>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '250px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="rgb(63, 63, 99)"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <!-- 一级菜单模板 -->
          <el-menu-item index="/search">
            <!-- 图标 -->
            <i class="el-icon-search"></i>
            <!-- 文本 -->
            <span slot="title">API查询</span>
          </el-menu-item>
          <el-menu-item index="/create">
            <i class="el-icon-document-add"></i>
            <span slot="title">API创建</span>
          </el-menu-item>
          <!-- <el-menu-item index="/document">
            <i class="el-icon-document"></i>
            <span slot="title">API开发文档</span>
          </el-menu-item> -->
          <el-menu-item index="/chainlinkop">
            <i class="el-icon-s-tools"></i>
            <span slot="title">Chainlink配置</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <!-- 右侧内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //是否折叠
      isCollapse: false,
    };
  },
  methods: {
    logout() {
      //windows.sessionStorage.clear();
      console.log("退出成功");
      this.$message.success("退出成功！");
      this.$router.push("/login");
    },
    //菜单折叠
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    menuToggle() {
      const toggleMenu = document.querySelector(".user-menu");
      toggleMenu.classList.toggle("active");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  overflow: auto;
}
.el-header {
  background-color: rgb(46, 46, 46);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-left: 8px;
  span {
    position: absolute;
    left: 70px;
    font-size: 20px;
    font-family: sans-serif;
  };
  table-layout: fixed;
  position: sticky;
}
.el-aside {
  background-color: rgb(63, 63, 99);
}
.el-main {
  background-color: #ffffff;
}
.el-menu-item {
  font-size: 20px;
  transition: 0.5s ease;
  left: 0%;
  color: #fff;
  i {
    margin-left: 10%;
    margin-right: 20px;
  }
}
.el-menu-item:hover {
  transform: scale(1.1);
  color: #3f3f63;
}
.el-menu-item:active {
  color: #409eff;
}
a {
  color: #fff;
  padding-right: 10px;
}
.logo-icon {
  height: 40px;
  width: 40px;
  border: 2px solid #eee;
  border-radius: 50%; //圆角
  box-shadow: 0 0 10px #ddd;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.4em;
  cursor: pointer;
}

.user-box {
  position: fixed;
  top: 5px;
  right: 10px;
}

.user-avater {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  margin-right: 12px;
}

.user-menu {
  position: absolute;
  top: 130px;
  right: -5px;
  padding: 0px 0px;
  background-color: #8a8a8a;
  width: 160px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
  ul {
    list-style: none;
    padding: 0px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    //display: flex;
    align-items: center; //垂直居中
    justify-content: center; //水平居中
  }
  li {
    list-style: none;
    padding: 5px 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  li:hover {
    opacity: 1;
  }
  svg {
    position: relative;
    max-width: 22px;
    max-height: 22px;
    margin-right: 5px;
    opacity: 0.8;
    transition: 0.5s;
    top: 5px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: 0.5s;
  }
  a:hover {
    color: #58acff;
    transform: scale(1.05);
  }
}
.user-menu.active {
  top: 65px;
  visibility: visible;
  opacity: 1;
}
.user-menu::before {
  content: "";
  position: absolute;
  top: -5px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: #8a8a8a;
  transform: rotate(45deg);
}
</style>
