<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Chainlink配置</el-breadcrumb-item>
    </el-breadcrumb>
    <label for="option"> 请选择用户所需的Chainlink预言机节点配置: </label>
    <el-select id="selector" v-model="selectedOption" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-button id="checkButton" type="primary" round @click="opFunc" :loading="loadingBtn">{{ checkButtonText }}</el-button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    opFunc() {
      this.loadingBtn = true;
      this.checkButtonText = '正在配置';
      setTimeout(() => {
        this.loadingBtn = false;
        this.checkButtonText = '确认配置';
        this.$message.success($("#selector").val() + "已应用");
      }, 1000);
    },
  },

  data() {
    
    return {
      selectedOption: '配置一',
      checkButtonText: '确认配置',
      loadingBtn: false,
      options: [{
        value: '选项1',
        label: '配置一'
      }, {
        value: '选项2',
        label: '配置二'
      }, {
        value: '选项3',
        label: '配置三'
      }, {
        value: '选项4',
        label: '配置四'
      }, {
        value: '选项5',
        label: '配置五'
      }],
      value: ''
    }
  }
};
</script>

<style lang="less" scoped>
#checkButton {
  margin-left: 10px;
}
</style>
