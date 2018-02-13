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
