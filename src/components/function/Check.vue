<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>API详情 </el-breadcrumb-item>
    </el-breadcrumb>
    <main class="check-api-table">
      <section class="table-header">
        <h2>API详情</h2>
      </section>
      <section class="table-shell">
        <div class="name-box">
          <span style="background-color: #0000000b">API名称</span>
          <span>数据源地址</span>
          <span style="background-color: #0000000b">预言机地址</span>
          <span>预言机JOBID</span>
        </div>
        <div class="data-box">
          <span>{{ api_Name }}</span>
          <span style="background-color: #0000000b">{{ dataSource_Url }}</span>
          <span>{{
            oracleContract_add
          }}</span>
          <span style="background-color: #0000000b">{{ JobId }}</span>
        </div>
        <button @click="quest" class="input-btn">请求数据</button>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let rowData = {
      api_Name: this.$route.query.api_Name,
      dataSource_Url: this.$route.query.dataSource_Url,
      oracleContract_add: this.$route.query.oracleContract_add,
      JobId: this.$route.query.JobId,
    };
    console.log(rowData);
    return {
      api_Name: rowData.api_Name,
      dataSource_Url: rowData.dataSource_Url,
      oracleContract_add: rowData.oracleContract_add,
      JobId: rowData.JobId,
    };
  },
  created() {},
  methods: {
    quest() {
      const test = axios
        .get("http://localhost:3008/tableDataJson")
        .then((res) => {
          console.log(res.data);
          this.tableData = res.data;
        });
      console.log(test);
    },
  },
};
</script>

<style lang="less" scoped>
.check-api-table {
  width: 75%;
  height: 10%;
  background-color: white;
  box-shadow: 0 8px 16px #0005;
  position: relative;
  left: 50%; //先移动50%
  transform: translate(-50%); //在移动自身宽度的50%
  border-radius: 16px;
  overflow: hidden;
  h2 {
    font-size: 30px;
    margin: 10px;
    text-align: center;
  }
}
.table-header {
  width: 100%;
  height: 10%;
  background-color: #fff4;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table-shell {
  width: 95%;
  height: 90%;
  background-color: #fffb;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  button {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    border-radius: 40px;
    background-color: #409eff;
    color: white;
    transition: 0.3s;
    cursor: pointer;
    width: 80px;
    height: 40px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: black;
    color: #ffe15d;
  }
}
.name-box {
  float: left;
  width: 50%;
  span {
    height: 70px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  span:hover {
    background-color: #fff6 !important;
  }
}
.data-box {
  position: relative;
  width: 50%;
  float: left;
  span {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    word-break: break-all;
    word-wrap: break-word;
  }
  span:hover {
    background-color: #fff6 !important;
  }
}
</style>
