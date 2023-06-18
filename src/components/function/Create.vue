<!-- 
  TODO: 点击创建按钮生成合约代码，出现在API创建表格底下
 -->

<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>API创建</el-breadcrumb-item>
    </el-breadcrumb>
    <main class="create-api-table">
      <section class="table-header">
        <h2>API创建</h2>
      </section>
      <section class="table-shell">
        <div class="name-box">
          <p style="background-color: #0000000b">API-NAME:</p>
          <p>DATASOURCE-URL:</p>
          <p style="background-color: #0000000b">DATA-ROUTE:</p>
          <p>ORACLECONTRACT_ADD:</p>
          <p style="background-color: #0000000b">JOBID:</p>
        </div>
        <div class="input-box">
          <input type="text" v-model="api_Name" class="input1" />
          <input
            type="text"
            v-model="dataSource_Url"
            class="input2"
            style="background-color: #0000000b"
          />
          <input type="text" v-model="data_Route" class="input3" />
          <input
            type="text"
            v-model="oracleContract_add"
            class="input4"
            style="background-color: #0000000b"
          />
          <input type="text" v-model="JobId" class="input3" />
        </div>
        <button @click="addAPI" class="input-btn">创建</button>
      </section>
    </main>
  </div>
</template>

<!-- <script>
import Data from "../function/data";
export default {
  data() {
    const tableData = [];
    return {
      api_Name: "",
      dataSource_Url: "",
      data_Route: "",
      oracleContract_add: "",
      JobId: "",
    };
  },
  created() {
    this.tableData = Data.tableDataJson;
  },
  methods: {
    addAPI() {
      const api = {
        api_Name: this.api_Name,
        dataSource_Url: this.dataSource_Url,
        data_Route: this.data_Route,
        oracleContract_add: this.oracleContract_add,
        JobId: this.JobId,
      };
      this.tableData.push(api);

      this.api_Name = "";
      this.dataSource_Url = "";
      this.data_Route = "";
      this.oracleContract_add = "";
      this.JobId = "";

      console.log("创建成功");
      console.log(this.tableData);
      this.$message.success("创建成功！");
    },
  },
};
</script> -->

<script>
import axios from "axios";
export default {
  data() {
    return {
      api_Name: "",
      dataSource_Url: "",
      data_Route: "",
      oracleContract_add: "",
      JobId: "",
    };
  },
  created() {},

  methods: {
    addAPI() {
      const api = {
        api_Name: this.api_Name,
        dataSource_Url: this.dataSource_Url,
        data_Route: this.data_Route,
        oracleContract_add: this.oracleContract_add,
        JobId: this.JobId,
      };
      axios.post("http://localhost:3008/tableDataJson", api).then((res) => {
        console.log(res.data);
      });
      axios.get("http://localhost:3008/tableDataJson").then((res) => {
        console.log(res.data);
        this.tableData = res.data;
      });

      this.api_Name = "";
      this.dataSource_Url = "";
      this.data_Route = "";
      this.oracleContract_add = "";
      this.JobId = "";

      console.log("创建成功");
      this.$message.success("创建成功！");
    },
  },
};
</script>

<style lang="less" scoped>
.create-api-table {
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
    background-color: #409EFF;
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
  p {
    height: 50px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  p:hover {
    background-color: #fff6 !important;
  }
}
.input-box {
  position: relative;
  width: 50%;
  float: left;
  input {
    width: 100%;
    padding: 0;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    border: none;
    outline: none;
    background-color: transparent;
  }
  input:hover {
    background-color: #fff6 !important;
  }
}
</style>
