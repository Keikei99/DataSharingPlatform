<template>
  <div>
    <button @click="comName = 'Left'">left</button>
    <button @click="comName = 'Right'">right</button>
    <div class="box">
      <component :is="comName"></component>
    </div>
  </div>
</template>

<script>
import Left from "@/components/function/Search.vue";
import Right from "@/components/function/Create.vue";
export default {
  components: {
    Left,
    Right,
  },
  data() {
    return {
      comName: Left,
    };
  },
};
</script>

<style lang="less" scoped></style>
