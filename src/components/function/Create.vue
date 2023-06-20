<template>
  <div id="maindiv">
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
          <p style="background-color: #0000000b">API名称</p>
          <p>数据源地址</p>
          <p style="background-color: #0000000b">预言机地址</p>
          <p>预言机JOBID</p>
        </div>
        <div class="input-box">
          <input type="text" v-model="api_Name" class="input1" />
          <input type="text" v-model="dataSource_Url" class="input2" style="background-color: #0000000b" />
          <input type="text" v-model="oracleContract_add" class="input4" />
          <input type="text" v-model="JobId" class="input3" style="background-color: #0000000b" />
        </div>
        <button @click="addAPI" class="input-btn">创建</button>
        <button @click="createContract" class="input-btn">生成合约</button>
      </section>
    </main>
    <section class="table-header">
      <h2>Solidity合约生成</h2>
    </section>
    <prism-editor id="codeEditor" class="my-editor height-300" v-model="code" :highlight="highlighter"
      :line-numbers="lineNumbers"></prism-editor>
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
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
import axios from "axios";
import clipboard from "clipboard";
import SolidityCodeTemplate from "./SolidityCodeTemplate";
export default {
  components: {
    PrismEditor
  },
  data() {
    return {
      code: 'console.log("Hello World")',
      lineNumbers: true, // true为编辑模式， false只展示不可编辑
      api_Name: "",
      dataSource_Url: "",
      data_Route: "",
      oracleContract_add: "",
      JobId: "",
    };
  },
  created() { },

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
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    createContract() {
      this.$message.success("生成合约");
      const api = {
        api_Name: this.api_Name,
        dataSource_Url: this.dataSource_Url,
        data_Route: this.data_Route,
        oracleContract_add: this.oracleContract_add,
        JobId: this.JobId,
      };
      this.code = SolidityCodeTemplate.solidityCodeTemplate;
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
  // overflow: hidden;

  button {
    position: relative;
    left: 45%;
    transform: translate(-50%);
    border-radius: 40px;
    background-color: #409EFF;
    color: white;
    transition: 0.3s;
    cursor: pointer;
    width: 80px;
    height: 40px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
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
    padding-left: 10px;
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

.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  margin-top: 10px;
}

/* optional */
.prism-editor__textarea:focus {
  outline: none;
}

/* not required: */
.height-300 {
  height: 1000px;
}
</style>
