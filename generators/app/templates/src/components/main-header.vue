<!--
 * @Author: mashitu
 * @Date: 2021-01-11 10:11:13
 * @LastEditTime: 2021-01-14 16:01:37
 * @LastEditors: mashitu
 * @Description: 头部菜单
-->

<template>
  <el-menu
    router
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="/">
      菜单A
    </el-menu-item>
    <el-menu-item index="b">
      菜单B
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
  },
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
