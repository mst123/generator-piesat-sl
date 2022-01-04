<!--
 * @Author: mashitu
 * @Date: 2021-01-14 15:09:14
 * @LastEditTime: 2021-04-28 09:59:29
 * @LastEditors: mashitu
 * @Description: 菜单B
-->
<template>
  <div class="main-body">
    <el-button @click="openDragDialog">打开自定义指令及过滤器的弹窗</el-button>
    <el-dialog
      title="添加指令后，头部可拖动"
      v-dialog-drag
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>添加过滤器后，首字母自动大写</span>
      <span>{{info | uppercaseFirst}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MenuB",
  components: {

  },
  props: {

  },
  mixins: [

  ],
  data() {
    return {
      dialogVisible: false,
      info: "autoUpperCase"
    };
  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  methods: {
    openDragDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .main-body {
    height: 100%;
    width: 100%;

    .text {
      @include flexCenter;

      color: $themeBGColor;
      height: 50%;
      width: 100%;
      font-size: 30px;
    }

    .describe {
      @include flexCenter;

      height: 50%;
      width: 100%;
      font-size: 30px;
    }
  }
</style>>
