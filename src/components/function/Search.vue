<!-- 
  TODO: 每行元组添加点击事件，点击以后进入一个新的页面，页面中列出五条信息，附带一个数据请求按钮
  点击数据请求按钮以后创建一个新的表格并把返回的结果放入表格中
 -->

<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>API查询</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <main class="api-table">
      <section class="table-header">
        <h2>API查询</h2>
        <!-- 搜索区域 -->
        <div class="input-box" :model="searchForm">
          <input
            type="search"
            placeholder="Search Data..."
            v-model="searchForm"
          />
          <svg
            t="1685062339779"
            class="search-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2431"
            width="200"
            height="200"
            @click="searchClick"
          >
            <path
              d="M932.140361 933.699368c-32.619932 32.832779-85.518722 32.832779-118.160143 0L666.508491 785.285177c-60.631916 39.089273-132.315538 62.448284-209.680557 62.448284-215.337393 0-389.92571-175.666882-389.92571-392.398018C66.902224 238.617609 241.490541 62.936401 456.827935 62.936401c215.362976 0 389.926734 175.681208 389.926734 392.399041 0 77.862345-23.203468 149.993153-62.08194 211.024158l147.46661 148.413168C964.785875 847.630107 964.785875 900.845099 932.140361 933.699368zM456.827935 175.049828c-153.809061 0-278.522458 125.491109-278.522458 280.285614 0 154.805762 124.713396 280.284591 278.522458 280.284591 153.834644 0 278.521434-125.478829 278.521434-280.284591C735.350392 300.540937 610.662579 175.049828 456.827935 175.049828z"
              fill="#2c2c2c"
              p-id="2432"
            ></path>
          </svg>
        </div>
      </section>
      <!-- API展示区域 -->
      <section class="table-shell">
        <table>
          <thead>
            <tr class="head-tr">
              <th>API-NAME</th>
              <th>DATASOURCE-URL</th>
              <th>DATA-ROUTE</th>
              <th>ORACLECONTRACT_ADD</th>
              <th>JOBID</th>
              <!-- <th style="text-align: center">TEST</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in filteredAPI"
              :key="index"
              class="body-tr"
            >
              <td>
                {{ item.api_Name }}
              </td>
              <td>
                {{ item.dataSource_Url }}
              </td>
              <td>
                {{ item.data_Route }}
              </td>
              <td>
                {{ item.oracleContract_add }}
              </td>
              <td>
                {{ item.JobId }}
              </td>
              <!-- <td>
                <p class="test-btn" @click="handleClick">TEST</p>
              </td> -->
            </tr>
          </tbody>
        </table>
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
      searchForm: "",
    };
  },
  created() {
    this.tableData = Data.tableDataJson;
  },
  methods: {
    handleClick() {
      console.log(this.tableData);
      this.$message.success("测试成功！");
    },
    searchClick() {
      console.log("搜索成功");
      this.$message.success("查询成功！");
    },
  },
  //过滤器实现搜索功能
  computed: {
    filteredAPI: function () {
      return this.tableData.filter((item) => {
        return item.api_Name.match(this.searchForm);
      });
    },
  },
};
</script> -->

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchForm: "",
      tableData: []
    };
  },
  created() {
    this.initTable();
  },
  methods: {
    initTable() {
      axios.get("http://localhost:3008/tableDataJson").then((res) => {
        console.log(res.data);
        this.tableData = res.data;
      });
    },
    searchClick() {
      console.log("搜索成功");
      this.$message.success("查询成功！");
    },
  },
  //过滤器实现搜索功能
  computed: {
    filteredAPI: function () {
      return this.tableData.filter((item) => {
        return item.api_Name.match(this.searchForm);
      });
    },
  },
};
</script>

<style lang="less" scoped>
h2 {
  font-size: 30px;
  margin: 10px;
  text-align: center;
}
.api-table {
  width: 75%;
  height: 60%;
  background-color: #fff5;
  box-shadow: 0 8px 16px #0005;
  position: relative;
  left: 50%; //先移动50%
  transform: translate(-50%); //在移动自身宽度的50%
  border-radius: 16px;
  overflow: hidden;
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
.input-box {
  width: 35%;
  height: 35px;
  background-color: #fff5;
  padding-right: 20px;
  border-radius: 15px;
  position: relative;
  right: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  svg {
    position: relative;
    width: 20px;
    height: 20px;
    transition: 0.3s;
    cursor: pointer;
    right: -5%;
  }
  svg:hover {
    transform: scale(1.2);
  }
  input {
    position: relative;
    width: 90%;
    height: 100%;
    padding: 0;
    left: 5%;
    background-color: transparent;
    border: none;
    outline: none;
  }
}
.input-box:hover {
  width: 45%;
  background-color: #fff8;
  box-shadow: 0 5px 40px #0002;
}
.table-shell {
  width: 95%;
  height: 90%;
  background-color: #fffb;
  margin: 20px auto;
  border-radius: 10px;
  overflow: auto;
  thead {
    display: block;
  }
  tbody {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    height: 500px;
  }
  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    word-break: break-all;
  }
  tbody::-webkit-scrollbar {
    width: 0px;
    height: 10px;
  }
  table {
    width: 100%;
  }
  table,
  th,
  td {
    //边框合并
    border-collapse: collapse;
    padding: 20px;
    text-align: center;
  }
}

.head-tr {
  th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #d5d1defe;
    cursor: pointer;
  }
}
// 偶数行背景色
.body-tr:nth-child(even) {
  background-color: #0000000b;
}
.body-tr:hover {
  background-color: #fff6 !important;
}
.test-btn {
  position: relative;
  width: 50%;
  left: 50%; //先移动50%
  transform: translate(-50%); //在移动自身宽度的50%
  padding: 5px 0;
  border-radius: 40px;
  text-align: center;
  background-color: #ffe15d;
  transition: 0.3s;
  cursor: pointer;
}
.test-btn:hover {
  transform: translate(-50%) scale(1.1);
  text-rendering: optimizeLegibility;
}

.test-btn:active {
  color: #4baeff;
}
</style>
