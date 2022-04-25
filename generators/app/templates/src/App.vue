<template>
  <el-container id="app">
    <el-header style="height: 64px;">
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
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
