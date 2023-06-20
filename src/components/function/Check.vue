<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>API详情 </el-breadcrumb-item>
    </el-breadcrumb>
    <main class="check-api-table">
      <section class="cheak-table-header">
        <h2>API详情</h2>
      </section>
      <section class="check-table-shell">
        <div class="check-name-box">
          <span style="background-color: #0000000b">API名称</span>
          <span>数据源地址</span>

          <span style="background-color: #0000000b">预言机地址</span>
          <span>预言机JOBID</span>
        </div>
        <div class="check-data-box">
          <span>{{ api_Name }}</span>
          <span style="background-color: #0000000b">{{ dataSource_Url }}</span>

          <span>{{ oracleContract_add }}</span>
          <span style="background-color: #0000000b">{{ JobId }}</span>
        </div>
        <button @click="quest" class="check-input-btn">请求数据</button>
      </section>
    </main>
    <main class="quest-api-table">
      <section class="quest-table-header">
        <table>
          <thead>
            <tr class="head-tr">
              <th v-for="item in keyArr">{{ item }}</th>
              <!-- <th>DATASOURCE-URL</th>
              <th>DATA-ROUTE</th>
              <th>ORACLECONTRACT_ADD</th>
              <th>JOBID</th> -->
              <!-- <th style="text-align: center">TEST</th> -->
            </tr>
          </thead>
          <tbody>
            <tr class="body-tr">
              <td v-for="item2 in valueArr2">{{ item2 }}</td>
              <!-- <td>
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
              </td> -->
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

<script>
import axios from "axios";
export default {
  data() {
    let rowData = {
      api_Name: this.$route.query.api_Name,
      dataSource_Url: this.$route.query.dataSource_Url,
      data_Route: this.$route.query.data_Route,
      oracleContract_add: this.$route.query.oracleContract_add,
      JobId: this.$route.query.JobId,
    };
    //console.log(rowData);
    return {
      API_Data: [],
      keyArr: [],
      indexArr: [],
      valueArr: [],
      valueArr2: [],
      api_Name: rowData.api_Name,
      dataSource_Url: rowData.dataSource_Url,
      data_Route: rowData.data_Route,
      oracleContract_add: rowData.oracleContract_add,
      JobId: rowData.JobId,
    };
  },
  created() {},
  methods: {
    async quest() {
      setTimeout(() => {
        this.$message.success("数据请求成功！");
      }, 1000);
      await axios.get(this.dataSource_Url).then((res) => {
        //console.log(res.data);
        this.API_Data = res.data.lives[0];
      });
      
      
      console.log(this.API_Data);

      for (var item in this.API_Data) {
        if (
          item == "province" ||
          item == "city" ||
          item == "weather" ||
          item == "temperature" ||
          item == "humidity" ||
          item == "reporttime"
        ) {
          console.log(this.API_Data[item]);
          this.valueArr[item] = this.API_Data[item];
        }
      }
      console.log(this.valueArr);
      for (var item in this.valueArr) {
        this.valueArr2 = Object.values(this.valueArr);
      }
      console.log(this.valueArr2);
      //let indexArr = [];
      // this.API_Data.forEach((n) => {
      //   keyArr.push({
      //     keyName: Object.keys(n)[0],
      //   });
      // });
      // console.log(keyArr);

      // for (var i = 1; i <= this.API_Data.length; i++) {
      //   this.indexArr.push({
      //     i,
      //   });
      // }
      // console.log(this.indexArr[0].i);

      for (var item in this.valueArr) {
        this.keyArr = Object.keys(this.valueArr);
      }

      console.log(this.keyArr);
      //console.log(this.item);
      
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

.check-table-header {
  width: 100%;
  height: 10%;
  background-color: #fff4;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-table-shell {
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
.check-name-box {
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
.check-data-box {
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
.quest-api-table {
  margin-top: 20px;
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

.quest-table-header {
  width: 100%;
  //height: 10%;
  background-color: #fff4;
  //padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  thead {
    display: block;
  }
  tbody {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    //height: 100px;
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
.quest-table-shell {
  width: 95%;
  height: 90%;
  background-color: #fffb;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
}
.quest-name-box {
  float: left;
  width: 50%;
  span {
    height: 50px;
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
.quest-data-box {
  position: relative;
  width: 50%;
  float: left;
  span {
    height: 50px;
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
</style>
