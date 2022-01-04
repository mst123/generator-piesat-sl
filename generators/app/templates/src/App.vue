<template>
  <el-container id="app">
    <el-header style="height:64px">
      <main-header />
    </el-header>
    <el-container>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
import MainHeader from "./components/main-header";
export default {
  name: "App",
  components: {
    MainHeader
  }
};
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
