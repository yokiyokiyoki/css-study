<template>
    <el-container class="home">
        <el-aside width="200px">
            <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="reset">
                <span slot="title">初始化浏览器样式</span>
            </el-menu-item>
            <el-menu-item index="center">
                <span slot="title">水平垂直居中</span>
            </el-menu-item>
            <el-menu-item index="clear">
                <span slot="title">清除浮动</span>
            </el-menu-item>
            <el-menu-item index="measure">
                <span slot="title">css单位</span>
            </el-menu-item>
            <el-menu-item index="importFont">
                <span slot="title">引入字体图标</span>
            </el-menu-item>
            <el-menu-item index="lessFun">
                <span slot="title">简单点，less</span>
            </el-menu-item>
            <el-menu-item index="fourPalace">
                <span slot="title">四宫格布局</span>
            </el-menu-item>
            <el-menu-item index="fixWidth">
                <span slot="title">定宽布局</span>
            </el-menu-item>
            <el-menu-item index="average">
                <span slot="title">均等分配布局</span>
            </el-menu-item>
            <el-menu-item index="fullScreen">
                <span slot="title">全屏布局</span>
            </el-menu-item>
            <el-menu-item index="negativeMargin">
                <span slot="title">负边距margin</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      active: "reset"
    };
  },
  mounted() {
    this.active = this.$route.name.toLowerCase();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({ path: `/${key}` });
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
