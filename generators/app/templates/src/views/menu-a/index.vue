<!--
 * @Author: mashitu
 * @Date: 2021-01-14 15:09:14
 * @LastEditTime: 2021-12-31 17:37:36
 * @LastEditors: mashitu
 * @Description: 菜单A
-->
<template>
  <div class="main-body">
    <p class="text">
      scss变量在style中使用
    </p>
    <p
      :style="{color: variables.themeBGColor}"
      class="describe"
    >
      scss变量在js中使用
    </p>
    <p v-permission.left.right:abc="{a:1,b2:2}" />
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";
export default {
  name: "MenuA",
  components: {

  },
  mixins: [

  ],
  props: {

  },
  data() {
    return {

    };
  },
  computed: {
    variables() {
      return variables;
    }
  },
  watch: {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
  @import '~@/styles/mixin';
  @import '~@/styles/variables';

  .main-body {
    display: flex;
    float: left;
    width: 100%;
    height: 100%;
    color: #dff;

    .text {
      @include flexCenter;

      width: 100%;
      height: 50%;
      font-size: 30px;
      color: $themeBGColor;
    }

    .describe {
      @include flexCenter;

      width: 100%;
      height: 50%;
      font-size: 30px;
    }
  }
</style>>
